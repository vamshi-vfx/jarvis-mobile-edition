const http = require('node:http');
const crypto = require('node:crypto');
const { URL } = require('node:url');
const SKILLS = require('./skills');
const GOOGLE = require('./google-oauth');
const { buildDailyYouTubeAnalytics } = require('./youtube-analytics');
const { buildDailyAiLaunchUpdate } = require('./ai-launch-updates');
const { SKILL_HANDLERS, handleSkill } = require('./zapia-skills');
const AUTOMATION = require('./automation');

const PORT = Number(process.env.PORT || 8787);
const API_TOKEN = process.env.JARVIS_API_TOKEN || '';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
const WPP_BRIDGE_URL = process.env.WPP_BRIDGE_URL || '';
const WPP_BRIDGE_TOKEN = process.env.WPP_BRIDGE_TOKEN || '';
// Activation keys are intentionally ephemeral until a durable, access-controlled store is configured.
const activationKeyHashes = new Set();
// Admin sessions, feature flags, and audit entries are process-memory only until a durable store is configured.
const adminSessions = new Map();
const featureFlags = { automationPreviewOnly: true, explicitActionOnly: true, backgroundReplies: false };
const auditLog = [];
function audit(event, req, details = {}) { auditLog.unshift({ id: crypto.randomUUID(), event, at: new Date().toISOString(), actor: 'admin', ip: req.headers['x-forwarded-for'] || 'unknown', ...details }); if (auditLog.length > 200) auditLog.pop(); }
function adminAuthorized(req) { if (!authorized(req)) return false; const sid = req.headers['x-jarvis-session']; if (!sid) return true; const session = adminSessions.get(sid); if (session && session.expiresAt <= Date.now()) { adminSessions.delete(sid); return false; } return Boolean(session && session.valid); }
function requireAdmin(req, res) { if (!adminAuthorized(req)) { json(res,401,{ok:false,message:'Admin access requires a valid server token and session.'}); return false; } return true; }
function createActivationKey() {
  const key = `JARVIS-${crypto.randomBytes(18).toString('base64url').toUpperCase()}`;
  activationKeyHashes.add(crypto.createHash('sha256').update(key).digest('hex'));
  return key;
}

function json(res, status, body) {
  res.writeHead(status, {'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':ALLOWED_ORIGIN,'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Jarvis-Session','Access-Control-Allow-Methods':'GET, POST, OPTIONS'});
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
async function routeCommand(body) {
  const text=String(body.text||'').trim(); if(!text) throw new Error('Command text is required');
  const skill=detectSkill(text);
  if(!skill || !isExplicitAction(text)) return {executed:false,explicitOnly:true,reason:'Ask with an explicit action (for example: search, create, send, or show).'};
  // Automation is always preview-first. This route never creates reminders or calls providers.
  if(skill==='automation' || skill==='tasks' || /\b(remind(?:er)?|todo|workflow|multi[- ]step)\b/i.test(text)) return AUTOMATION.preview(text);
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
  if(req.method==='GET'&&url.pathname==='/api/health') return json(res,200,{ok:true,service:'jarvis-backend',explicitActionsOnly:true,backgroundReplies:false,whatsappBridge:Boolean(WPP_BRIDGE_URL&&WPP_BRIDGE_TOKEN),googleOAuth:true,skills:Object.keys(SKILLS)});
  if(req.method==='GET'&&url.pathname==='/api/connectors/status') {
    const providers={};
    for(const name of Object.keys(GOOGLE.PROVIDERS)) providers[name]=await GOOGLE.verify(name);
    const configured={whatsapp:Boolean(WPP_BRIDGE_URL&&WPP_BRIDGE_TOKEN),youtube:Boolean(process.env.YOUTUBE_API_KEY||process.env.GOOGLE_YOUTUBE_API_KEY),webSearch:Boolean(process.env.SEARCH_API_KEY||process.env.TAVILY_API_KEY),outlook:Boolean(process.env.OUTLOOK_CLIENT_ID&&process.env.OUTLOOK_CLIENT_SECRET),slack:Boolean(process.env.SLACK_CLIENT_ID&&process.env.SLACK_CLIENT_SECRET),telegram:Boolean(process.env.TELEGRAM_BOT_TOKEN),notion:Boolean(process.env.NOTION_CLIENT_ID&&process.env.NOTION_CLIENT_SECRET)};
    for(const [name,isConfigured] of Object.entries(configured)) providers[name]=isConfigured?{status:'pending',lastVerifiedAt:null}:{status:'not_connected',lastVerifiedAt:null};
    return json(res,200,{ok:true,providers,note:'Connected means a safe read-only verification succeeded. Pending means configuration exists but user authorization or provider verification is still required. Secrets and tokens are never returned.'});
  }
  if(req.method==='GET'&&url.pathname.startsWith('/api/connectors/')&&url.pathname.endsWith('/verify')) {
    const name=url.pathname.split('/')[3];
    if(GOOGLE.provider(name)) return json(res,200,{ok:true,provider:name,verification:await GOOGLE.verify(name)});
    return json(res,200,{ok:true,provider:name,verification:{status:'pending',lastVerifiedAt:null},message:'This provider requires its own OAuth or private bridge verification; no external action was performed.'});
  }
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
    if(req.method==='POST'&&url.pathname==='/api/admin/session') {
      if(!authorized(req)) return json(res,401,{ok:false,message:'Admin access requires the server token.'});
      const id=crypto.randomBytes(24).toString('base64url'); adminSessions.set(id,{valid:true,createdAt:new Date().toISOString(),expiresAt:Date.now()+3600000}); audit('session.created',req); return json(res,201,{ok:true,session:id,expiresInSeconds:3600,storage:'process memory'});
    }
    if(req.method==='POST'&&url.pathname==='/api/admin/logout') { if(!requireAdmin(req,res)) return; const sid=req.headers['x-jarvis-session']; if(sid) adminSessions.delete(sid); audit('session.revoked',req); return json(res,200,{ok:true}); }
    if(req.method==='POST'&&url.pathname==='/api/admin/logout-all') { if(!requireAdmin(req,res)) return; for(const session of adminSessions.values()) session.valid=false; adminSessions.clear(); audit('sessions.revoked_all',req); return json(res,200,{ok:true,revoked:'all active in-memory sessions'}); }
    if(req.method==='GET'&&url.pathname==='/api/admin/status') {
      if(!requireAdmin(req,res)) return;
      const providers={}; for(const name of Object.keys(GOOGLE.PROVIDERS)) providers[name]=await GOOGLE.verify(name);
      const configured={whatsapp:Boolean(WPP_BRIDGE_URL&&WPP_BRIDGE_TOKEN),youtube:Boolean(process.env.YOUTUBE_API_KEY||process.env.GOOGLE_YOUTUBE_API_KEY),webSearch:Boolean(process.env.SEARCH_API_KEY||process.env.TAVILY_API_KEY),outlook:Boolean(process.env.OUTLOOK_CLIENT_ID&&process.env.OUTLOOK_CLIENT_SECRET),slack:Boolean(process.env.SLACK_CLIENT_ID&&process.env.SLACK_CLIENT_SECRET),telegram:Boolean(process.env.TELEGRAM_BOT_TOKEN),notion:Boolean(process.env.NOTION_CLIENT_ID&&process.env.NOTION_CLIENT_SECRET)};
      for(const [name,isConfigured] of Object.entries(configured)) providers[name]=isConfigured?{status:'pending',lastVerifiedAt:null}:{status:'not_connected',lastVerifiedAt:null};
      return json(res,200,{ok:true,status:{backend:{status:'healthy',value:true},api:{status:'healthy',value:true},'whatsapp-bridge':{status:configured.whatsapp?'configured':'not_connected',value:configured.whatsapp},'ai-automation':{status:Boolean(process.env.GEMINI_API_KEY||process.env.GOOGLE_AI_API_KEY)?'configured':'not_connected',value:Boolean(process.env.GEMINI_API_KEY||process.env.GOOGLE_AI_API_KEY)},'explicit-action-guard':{status:'enforced',value:true}},providers,flags:featureFlags,sessions:{active:adminSessions.size},persistence:{auditLog:'in-memory',sessions:'in-memory',featureFlags:'in-memory'},note:'Statuses never include secrets or token values.'});
    }
    if(req.method==='GET'&&url.pathname==='/api/admin/audit-log') { if(!requireAdmin(req,res)) return; return json(res,200,{ok:true,entries:auditLog.slice(0,100),storage:'in-memory'}); }
    if(req.method==='GET'&&url.pathname==='/api/admin/feature-flags') { if(!requireAdmin(req,res)) return; return json(res,200,{ok:true,flags:featureFlags,storage:'in-memory'}); }
    if(req.method==='POST'&&url.pathname==='/api/admin/feature-flags') { if(!requireAdmin(req,res)) return; const body=await readBody(req); for(const key of Object.keys(featureFlags)) if(typeof body[key]==='boolean') featureFlags[key]=body[key]; audit('feature_flags.updated',req,{changed:Object.keys(body).filter(k=>k in featureFlags)}); return json(res,200,{ok:true,flags:featureFlags,storage:'in-memory'}); }
    if(req.method==='GET'&&url.pathname==='/api/admin/automation') { if(!requireAdmin(req,res)) return; return json(res,200,{ok:true,controls:{previewOnly:true,explicitActionOnly:true,backgroundReplies:false},note:'Automation execution remains disabled; this endpoint only exposes safe controls.'}); }
    if(req.method==='GET'&&url.pathname==='/api/admin/privacy/export') { if(!requireAdmin(req,res)) return; audit('privacy.export_requested',req); return json(res,200,{ok:false,available:false,code:'PERSISTENCE_NOT_CONFIGURED',message:'Export is guarded until durable personal-data storage is configured. No data was exported.'}); }
    if(req.method==='POST'&&url.pathname==='/api/admin/privacy/delete') { if(!requireAdmin(req,res)) return; audit('privacy.delete_requested',req); return json(res,409,{ok:false,available:false,code:'PERSISTENCE_NOT_CONFIGURED',message:'Deletion is a guarded placeholder until durable personal-data storage and confirmation are configured. No data was deleted.'}); }
    if(req.method==='POST'&&url.pathname==='/api/admin/activation-keys') {
      if(!requireAdmin(req,res)) return;
      audit('activation_key.created',req);
      return json(res,201,{ok:true,key:createActivationKey(),storage:'sha256 hash in process memory; configure durable encrypted storage before production use',oneTime:true});
    }
    if((req.method==='GET'&&url.pathname==='/api/google/status')||(req.method==='POST'&&url.pathname==='/api/google/disconnect')) {
      if(!authorized(req)) return json(res,401,{ok:false,message:'Google provider management requires the server token.'});
      if(req.method==='POST') { const body=await readBody(req); if(!GOOGLE.provider(body.provider)) return json(res,400,{ok:false,message:'Unsupported Google provider'}); await GOOGLE.secureTokenStore.delete(body.provider); return json(res,200,{ok:true,provider:body.provider,disconnected:true}); }
      const providers={}; for(const name of Object.keys(GOOGLE.PROVIDERS)) { try { providers[name]=Boolean(await GOOGLE.secureTokenStore.get(name)); } catch { providers[name]=false; } }
      return json(res,200,{ok:true,providers,note:'Connected status only; no access tokens are returned.'});
    }
    if(req.method==='GET'&&url.pathname==='/api/skills') return json(res,200,{ok:true,skills:Object.fromEntries(Object.entries(SKILLS).map(([id,meta])=>[id,{id,...meta,handler:Boolean(SKILL_HANDLERS[id])}]))});
    if(req.method==='GET'&&url.pathname==='/api/automation/workflows') return json(res,200,{ok:true,workflows:AUTOMATION.list(),explicitOnly:true});
    if(req.method==='POST'&&url.pathname==='/api/automation/preview') { const body=await readBody(req); const text=String(body.text||body.command||'').trim(); if(!isExplicitAction(text)) return json(res,400,{ok:false,error:{code:'EXPLICIT_ACTION_REQUIRED',message:'An explicit command is required. Nothing was executed.'}}); return json(res,200,AUTOMATION.preview(text)); }
    if(req.method==='POST'&&url.pathname.match(/^\/api\/automation\/(approve|cancel|undo)$/)) { const operation=url.pathname.split('/').pop(); const body=await readBody(req); const action=AUTOMATION[operation]; const result=action(String(body.workflowId||body.id||'')); return json(res,result.ok?200:400,result); }
    if(req.method==='GET'&&url.pathname.match(/^\/api\/automation\/workflows\/[^/]+$/)) { const workflow=AUTOMATION.get(url.pathname.split('/').pop()); return workflow?json(res,200,{ok:true,workflow}):json(res,404,{ok:false,error:{code:'WORKFLOW_NOT_FOUND',message:'Workflow was not found.'}}); }
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
