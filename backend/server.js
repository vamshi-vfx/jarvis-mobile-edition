const http = require('node:http');
const crypto = require('node:crypto');
const { URL } = require('node:url');
const SKILLS = require('./skills');
const GOOGLE = require('./google-oauth');
const { buildDailyYouTubeAnalytics } = require('./youtube-analytics');
const { buildDailyAiLaunchUpdate } = require('./ai-launch-updates');
const { SKILL_HANDLERS, handleSkill } = require('./zapia-skills');
const { TOOL_REGISTRY, detectEverydayTool, runLocalTool, explicit: everydayExplicit, extractAfter } = require('./everyday-tools');

const PORT = Number(process.env.PORT || 8787);
const API_TOKEN = process.env.JARVIS_API_TOKEN || '';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
const WPP_BRIDGE_URL = process.env.WPP_BRIDGE_URL || '';
const WPP_BRIDGE_TOKEN = process.env.WPP_BRIDGE_TOKEN || '';
// Activation keys are intentionally ephemeral until a durable, access-controlled store is configured.
const activationKeyHashes = new Set();
async function connectorStatus() {
  const providers = {
    whatsapp: Boolean(WPP_BRIDGE_URL && WPP_BRIDGE_TOKEN),
    youtube: Boolean(process.env.YOUTUBE_API_KEY || process.env.GOOGLE_YOUTUBE_API_KEY),
    webSearch: Boolean(process.env.SEARCH_API_KEY || process.env.TAVILY_API_KEY || process.env.SERPAPI_API_KEY),
    outlook: Boolean(process.env.OUTLOOK_CLIENT_ID && process.env.OUTLOOK_CLIENT_SECRET),
    slack: Boolean(process.env.SLACK_CLIENT_ID && process.env.SLACK_CLIENT_SECRET),
    telegram: Boolean(process.env.TELEGRAM_BOT_TOKEN),
    notion: Boolean(process.env.NOTION_CLIENT_ID && process.env.NOTION_CLIENT_SECRET)
  };
  for (const name of Object.keys(GOOGLE.PROVIDERS)) {
    try { providers[name] = Boolean(await GOOGLE.secureTokenStore.get(name)); }
    catch { providers[name] = false; }
  }
  return providers;
}
function createActivationKey() {
  const key = `JARVIS-${crypto.randomBytes(18).toString('base64url').toUpperCase()}`;
  activationKeyHashes.add(crypto.createHash('sha256').update(key).digest('hex'));
  return key;
}

function json(res, status, body) {
  res.writeHead(status, {'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':ALLOWED_ORIGIN,'Access-Control-Allow-Headers':'Content-Type, Authorization','Access-Control-Allow-Methods':'GET, POST, OPTIONS'});
  res.end(JSON.stringify(body));
}
function authorized(req) { return Boolean(API_TOKEN) && req.headers.authorization === `Bearer ${API_TOKEN}`; }
function readBody(req) { return new Promise((resolve,reject)=>{ let data=''; req.on('data',c=>{data+=c;if(data.length>262144) req.destroy();}); req.on('end',()=>{try{resolve(data?JSON.parse(data):{});}catch{reject(new Error('Invalid JSON'));}}); req.on('error',reject); }); }
function detectSkill(text='') {
  const patterns = {dailyAiLaunchUpdate:/\b(?:daily|today(?:'s)?|new|latest)\s+AI\s+(?:launch(?:es)?|release(?:s)?|tools?|models?)\b|AI\s+launch\s+updates?/i,whatsappAudioTranscription:/whatsapp.*\b(?:audio|voice|transcri(?:be|ption)|summar(?:ize|y))\b|\b(?:audio|voice)\b.*whatsapp/i,unavailableTimeReplyDrafts:/\b(?:unavailable|busy|out of office|ooo|can't take calls?)\b.*\b(?:reply|response|draft)|\b(?:reply|response|draft)\b.*\b(?:unavailable|busy|out of office|ooo)\b/i,dayOrganizer:/\b(?:organize|plan)\b.*\b(?:day|today|calendar|tasks?|email)|\b(?:day|today)\b.*\b(?:organize|plan)\b/i,stayInTouch:/\b(?:stay in touch|keep in touch|follow[- ]?ups?|check in)\b.*\b(?:contacts?|people|conversation|messages?|email)|\b(?:contacts?|people)\b.*\b(?:follow[- ]?ups?|stay in touch)\b/i,whatsapp:/whatsapp|message|reply|chat/i,search:/google|search|web|news|weather/i,youtube:/youtube|video/i,email:/email|mail|gmail|outlook/i,calendar:/calendar|schedule|meeting|event/i,tasks:/task|reminder|todo/i,contacts:/contact|phone number|address book/i,drive:/drive|file|folder|upload|download/i,documents:/pdf|word|docx|excel|xlsx|spreadsheet|powerpoint|pptx/i,travel:/flight|hotel|travel|trip/i,places:/restaurant|place|shop|near me|directions/i,prices:/price|cost|cheap|compare|buy/i,media:/image|photo|picture|video edit/i,automation:/automate|automation|workflow|multi[- ]step/i,memory:/remember|memory|save this/i};
  return Object.keys(patterns).find(key=>patterns[key].test(text)) || null;
}
function isExplicitAction(text='') { return /\b(open|launch|start|send|reply|message|tell|search|find|create|add|schedule|show|read|save|remember|plan|organize|draft|transcribe|summarize|summarise|follow[- ]?up|check in)\b|\b(?:daily|today(?:'s)?|new|latest)\s+AI\s+(?:launch(?:es)?|release(?:s)?|tools?|models?)\b|AI\s+launch\s+updates?|chey|pampu|cheppu|choodu|vetuku|teruvu/i.test(text); }
async function whatsappRequest(path,payload) {
  if (!WPP_BRIDGE_URL || !WPP_BRIDGE_TOKEN) return {configured:false, executed:false, message:'WhatsApp is not connected. No message was sent.'};
  const r=await fetch(`${WPP_BRIDGE_URL.replace(/\/$/,'')}${path}`,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${WPP_BRIDGE_TOKEN}`},body:JSON.stringify(payload)});
  const body=await r.json().catch(()=>({})); if(!r.ok) throw new Error(body.message||'WhatsApp bridge request failed'); return {...body,executed:true};
}
async function liveTool(tool, text) {
  try {
    if (tool === 'bitcoin') { const r=await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr'); if(!r.ok) throw new Error('provider unavailable'); const d=await r.json(); const v=d?.bitcoin?.inr; if(typeof v!=='number') throw new Error('value unavailable'); return {executed:true,tool,message:`Bitcoin price: ₹${v.toLocaleString('en-IN')} (live provider result).`,source:'CoinGecko'}; }
    if (tool === 'currency') { const pair=text.match(/(\d+(?:\.\d+)?)\s*(USD|EUR|GBP|AED|INR)\s*(?:to|in)\s*(INR|USD|EUR|GBP|AED)/i); if(!pair) return {executed:false,tool,message:'Please say an amount and currencies, for example: convert 100 USD to INR.'}; const amount=Number(pair[1]), from=pair[2].toUpperCase(), to=pair[3].toUpperCase(); const r=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`); if(!r.ok) throw new Error('provider unavailable'); const d=await r.json(); const value=d?.rates?.[to]; if(typeof value!=='number') throw new Error('value unavailable'); return {executed:true,tool,message:`${amount} ${from} = ${value.toLocaleString('en-IN')} ${to} (live provider result).`,source:'Frankfurter'}; }
    if (tool === 'wikipedia') { const q=extractAfter(text,[/(?:wikipedia|wiki)\s+(?:search\s+)?(?:for\s+)?(.+)/i]); if(!q) return {executed:false,tool,message:'Please tell me what to search on Wikipedia.'}; const r=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q.replace(/ /g,'_'))}`); if(!r.ok) throw new Error('page unavailable'); const d=await r.json(); return {executed:true,tool,message:d.extract?`${d.title}: ${d.extract}`:'Wikipedia page found, but its summary is unavailable.',url:d.content_urls?.desktop?.page||`https://en.wikipedia.org/wiki/${encodeURIComponent(q)}`,source:'Wikipedia'}; }
    if (tool === 'weather') return {executed:false,tool,message:'Weather needs a location. A safe weather proxy is not configured, so I will not guess the weather.'};
    if (tool === 'techNews') return {executed:false,tool,message:'Tech news provider is not connected. No headlines were invented.'};
    if (tool === 'meaning') return {executed:false,tool,message:'Word-meaning provider is not connected. No definition was invented.'};
  } catch (_) { return {executed:false,tool,unavailable:true,message:`${TOOL_REGISTRY[tool].name} is temporarily unavailable. No value was invented.`}; }
  return {executed:false,tool,unavailable:true,message:`${TOOL_REGISTRY[tool].name} is unavailable.`};
}
async function routeCommand(body) {
  const text=String(body.text||'').trim(); if(!text) throw new Error('Command text is required');
  const everydayTool=detectEverydayTool(text);
  if (everydayTool) {
    if (!everydayExplicit(text)) return {executed:false,explicitOnly:true,tool:everydayTool,message:`${TOOL_REGISTRY[everydayTool].name} is ready. Please explicitly ask me to use it.`};
    if (TOOL_REGISTRY[everydayTool].kind === 'local') return runLocalTool(everydayTool,text);
    return liveTool(everydayTool,text);
  }
  const skill=detectSkill(text);
  if(!skill || !isExplicitAction(text)) return {executed:false,explicitOnly:true,reason:'Ask with an explicit action (for example: search, create, send, or show).'};
  if(skill==='youtubeAnalytics') {
    return { executed: true, skill, action: 'report', report: await buildDailyYouTubeAnalytics(), message: 'Public YouTube analytics report prepared. Nothing was sent.' };
  }
  if(skill==='dailyAiLaunchUpdate') {
    return { executed: false, skill, action: 'report', report: buildDailyAiLaunchUpdate(), message: 'Daily AI launch update requested explicitly. No message was sent and nothing was scheduled.' };
  }
  if(SKILL_HANDLERS[skill]) return handleSkill(skill);
  if(skill==='whatsapp') {
    if(/\b(open|launch|start)\b.*whatsapp|whatsapp.*\b(open|launch|start)\b/i.test(text)) return {executed:true,skill,action:'open',url:'https://wa.me/',message:'Opening WhatsApp. No message was sent.'};
    return {executed:false,skill,action:'send_or_reply',requires:['recipient','message'],providerConnected:Boolean(WPP_BRIDGE_URL&&WPP_BRIDGE_TOKEN),message:'WhatsApp command received, but no message was sent without a connected bridge and complete recipient/message.'};
  }
  return {executed:false,skill,providerConnected:false,skillInfo:SKILLS[skill],message:`${SKILLS[skill].name} is recognized, but its provider is not connected. Nothing was executed.`};
}
const server=http.createServer(async(req,res)=>{
  if(req.method==='OPTIONS') return json(res,204,{});
  const url=new URL(req.url,`http://${req.headers.host}`);
  if(req.method==='GET'&&url.pathname==='/api/health') return json(res,200,{ok:true,service:'jarvis-backend',explicitActionsOnly:true,backgroundReplies:false,whatsappBridge:Boolean(WPP_BRIDGE_URL&&WPP_BRIDGE_TOKEN),googleOAuth:true,skills:Object.keys(SKILLS),everydayTools:Object.keys(TOOL_REGISTRY)});
  if(req.method==='GET'&&url.pathname==='/api/tools') return json(res,200,{ok:true,tools:TOOL_REGISTRY,note:'All tools are explicit-command-only. Live values are returned only from verified provider responses; unavailable values are never guessed.'});
  if(req.method==='GET'&&url.pathname==='/api/connectors/status') return json(res,200,{ok:true,providers:await connectorStatus(),note:'Safe configuration booleans only; secrets and tokens are never returned.'});
  // OAuth start/callback are public by design; signed, short-lived, single-use state
  // prevents token leakage. Tokens are never returned to the client.
  if(req.method==='GET'&&url.pathname==='/api/google/oauth/start') {
    const name=url.searchParams.get('provider');
    if(!GOOGLE.provider(name)) return json(res,400,{ok:false,message:'Unsupported Google provider',providers:Object.keys(GOOGLE.PROVIDERS)});
    try { res.writeHead(302,{Location:GOOGLE.authorizationUrl(name),'Cache-Control':'no-store'}); return res.end(); }
    catch(error) { return json(res,503,{ok:false,message:error.message}); }
  }
  if(req.method==='GET'&&url.pathname==='/api/google/oauth/callback') {
    const state=GOOGLE.consumeState(url.searchParams.get('state'));
    if(!state) return json(res,400,{ok:false,message:'Invalid or expired Google OAuth state'});
    if(url.searchParams.get('error')) return json(res,400,{ok:false,message:'Google authorization was not completed'});
    const code=url.searchParams.get('code'); if(!code) return json(res,400,{ok:false,message:'Google authorization code is missing'});
    try { await GOOGLE.secureTokenStore.set(state.provider,await GOOGLE.exchangeCode(code)); res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}); return res.end('<!doctype html><title>Google connected</title><p>Google account connected. You may close this window.</p>'); }
    catch(error) { return json(res,503,{ok:false,message:error.message}); }
  }
  try {
    if(req.method==='GET'&&url.pathname==='/api/admin/status') {
      if(!authorized(req)) return json(res,401,{ok:false,message:'Admin access requires the server token.'});
      return json(res,200,{ok:true,status:{Backend:true,'WhatsApp bridge':Boolean(WPP_BRIDGE_URL&&WPP_BRIDGE_TOKEN),'AI automation':Boolean(process.env.GEMINI_API_KEY||process.env.GOOGLE_AI_API_KEY),'Explicit-action guard':true},note:'Protected status only; secrets and token values are never returned.'});
    }
    if(req.method==='POST'&&url.pathname==='/api/admin/activation-keys') {
      if(!authorized(req)) return json(res,401,{ok:false,message:'Admin access requires the server token.'});
      return json(res,201,{ok:true,key:createActivationKey(),storage:'sha256 hash in process memory; configure durable encrypted storage before production use',oneTime:true});
    }
    if((req.method==='GET'&&url.pathname==='/api/google/status')||(req.method==='POST'&&url.pathname==='/api/google/disconnect')) {
      if(!authorized(req)) return json(res,401,{ok:false,message:'Google provider management requires the server token.'});
      if(req.method==='POST') { const body=await readBody(req); if(!GOOGLE.provider(body.provider)) return json(res,400,{ok:false,message:'Unsupported Google provider'}); await GOOGLE.secureTokenStore.delete(body.provider); return json(res,200,{ok:true,provider:body.provider,disconnected:true}); }
      const providers={}; for(const name of Object.keys(GOOGLE.PROVIDERS)) { try { providers[name]=Boolean(await GOOGLE.secureTokenStore.get(name)); } catch { providers[name]=false; } }
      return json(res,200,{ok:true,providers,note:'Connected status only; no access tokens are returned.'});
    }
    if(req.method==='GET'&&url.pathname==='/api/skills') return json(res,200,{ok:true,skills:Object.fromEntries(Object.entries(SKILLS).map(([id,meta])=>[id,{id,...meta,handler:Boolean(SKILL_HANDLERS[id])}]))});
    if(req.method==='POST'&&url.pathname==='/api/command') return json(res,200,{ok:true,result:await routeCommand(await readBody(req))});
    const directSkillRoutes = {'/api/skills/day-organizer':'dayOrganizer','/api/skills/stay-in-touch':'stayInTouch','/api/skills/whatsapp-audio':'whatsappAudioTranscription','/api/skills/unavailable-time-reply-drafts':'unavailableTimeReplyDrafts'};
    if(req.method==='POST'&&directSkillRoutes[url.pathname]) {
      const skill=directSkillRoutes[url.pathname]; const body=await readBody(req); const text=String(body.text||body.command||'').trim();
      if(!text || !isExplicitAction(text)) return json(res,200,{ok:true,result:{executed:false,skill,explicitOnly:true,reason:'An explicit action is required. Nothing was executed.'}});
      return json(res,200,{ok:true,result:handleSkill(skill)});
    }
    if(req.method==='POST'&&url.pathname==='/api/youtube/analytics') return json(res,200,await buildDailyYouTubeAnalytics());
    if(req.method==='POST'&&url.pathname==='/api/whatsapp/send') {
      if(!authorized(req)) return json(res,401,{ok:false,message:'Provider execution requires the server token.'});
      const body=await readBody(req); if(!body.recipient||!body.message) return json(res,400,{ok:false,message:'recipient and message are required'});
      return json(res,200,{ok:true,result:await whatsappRequest('/send',{recipient:body.recipient,message:body.message,source:'jarvis-explicit-command'})});
    }
    return json(res,404,{ok:false,message:'Not found'});
  } catch(error) { return json(res,500,{ok:false,message:error.message}); }
});
server.listen(PORT,()=>console.log(`JARVIS backend listening on ${PORT}`));
