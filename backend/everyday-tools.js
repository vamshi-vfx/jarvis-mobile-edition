const crypto = require('node:crypto');

const TOOL_REGISTRY = {
  time: { name: 'Time', kind: 'local', explicitOnly: true },
  weather: { name: 'Weather', kind: 'live', proxy: '/api/tools/weather', explicitOnly: true },
  timer: { name: 'Timer', kind: 'local', explicitOnly: true, notification: true },
  dice: { name: 'Dice / Coin', kind: 'local', explicitOnly: true },
  joke: { name: 'Joke', kind: 'local', explicitOnly: true },
  motivation: { name: 'Motivational quote', kind: 'local', explicitOnly: true },
  techNews: { name: 'Tech news', kind: 'live', proxy: '/api/tools/tech-news', explicitOnly: true },
  translate: { name: 'English → Telugu', kind: 'local', explicitOnly: true },
  currency: { name: 'INR conversion', kind: 'live', proxy: '/api/tools/currency', explicitOnly: true },
  meaning: { name: 'Word meaning', kind: 'live', proxy: '/api/tools/meaning', explicitOnly: true },
  password: { name: 'Strong password', kind: 'local', explicitOnly: true },
  wikipedia: { name: 'Wikipedia search', kind: 'live', proxy: '/api/tools/wikipedia', explicitOnly: true },
  openYouTube: { name: 'Open YouTube', kind: 'local', explicitOnly: true },
  openGoogle: { name: 'Open Google', kind: 'local', explicitOnly: true },
  youtubeSearch: { name: 'YouTube song search', kind: 'local', explicitOnly: true },
  bitcoin: { name: 'Bitcoin price', kind: 'live', proxy: '/api/tools/bitcoin', explicitOnly: true }
};

const jokes = ['Why did the developer go broke? Because they used up all their cache.','I told my computer I needed a break — now it won’t stop sending me vacation ads.'];
const quotes = ['Small steps every day become big results.','Your future self will thank you for starting today.'];
function explicit(text) { return /\b(show|tell|give|check|search|find|open|start|roll|flip|translate|convert|define|meaning|generate|play|launch|look|what|how)\b|చెప్పు|చూడు|తెరువు|చేయి|వెతుకు|పంపు/i.test(text); }
function secondsFrom(text) { const m = text.match(/(\d+(?:\.\d+)?)\s*(seconds?|secs?|minutes?|mins?|hours?|hrs?)/i); if (!m) return 60; const n=Number(m[1]); const u=m[2].toLowerCase(); return Math.max(1, Math.round(n * (u.startsWith('hour')||u.startsWith('hr')?3600:u.startsWith('min')?60:1))); }
function extractAfter(text, patterns) { for (const p of patterns) { const m=text.match(p); if (m?.[1]) return m[1].trim().replace(/[?.!,]+$/,''); } return ''; }
function makePassword(length=20) { const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*_-+='; let out=''; const bytes=crypto.randomBytes(length); for(let i=0;i<length;i++) out+=chars[bytes[i]%chars.length]; return out; }
function runLocalTool(tool, text) {
  const now = new Date();
  if (tool==='time') return { executed:true, tool, message:`ఇప్పుడు సమయం ${now.toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'numeric',minute:'2-digit'})} (IST).`, speak:true };
  if (tool==='timer') { const seconds=secondsFrom(text); return {executed:true,tool,seconds,message:`Timer ${seconds<60?seconds+' seconds':Math.round(seconds/60)+' minute(s)'}కి start చేశాను. పూర్తయ్యాక notification/voice result ఇస్తాను.`,notify:true,speak:true}; }
  if (tool==='dice') { const coin=/coin|head|tail|నాణెం/i.test(text); const value=coin?(crypto.randomInt(2)?'Heads':'Tails'):String(crypto.randomInt(1,7)); return {executed:true,tool,message:coin?`Coin flip result: ${value}.`:`Dice result: ${value}.`,speak:true}; }
  if (tool==='joke') return {executed:true,tool,message:jokes[crypto.randomInt(jokes.length)],speak:true};
  if (tool==='motivation') return {executed:true,tool,message:quotes[crypto.randomInt(quotes.length)],speak:true};
  if (tool==='password') { const m=text.match(/\b(\d{8,64})\b/); const password=makePassword(m?Number(m[1]):20); return {executed:true,tool,message:`Strong password generated (not stored): ${password}`}; }
  if (tool==='translate') { const phrase=extractAfter(text,[/translate(?: this| the)?\s+(.+)/i,/english\s+(?:to|into)\s+telugu\s+(.+)/i]); return {executed:false,tool,needsAI:true,message:phrase?`English → Telugu translation requested for: “${phrase}”. Translation provider is unavailable in this backend; no translation invented.`:'Please provide the English sentence to translate.'}; }
  if (tool==='openYouTube') return {executed:true,tool,url:'https://www.youtube.com/',message:'YouTube ready to open. No video was played automatically.'};
  if (tool==='openGoogle') return {executed:true,tool,url:'https://www.google.com/',message:'Google ready to open.'};
  if (tool==='youtubeSearch') { const q=extractAfter(text,[/(?:youtube|song|search)\s+(?:song\s+)?(?:for\s+)?(.+)/i]); return {executed:true,tool,url:`https://www.youtube.com/results?search_query=${encodeURIComponent(q||'')}`,message:q?`YouTube song search ready for “${q}”. Nothing was auto-played.`:'Tell me the song or artist to search.',openOnly:true}; }
}
function detectEverydayTool(text='') {
  if (/\b(time|what time|samayam|సమయం)\b/i.test(text)) return 'time';
  if (/\b(weather|temperature|varsham|వాతావరణం)\b/i.test(text)) return 'weather';
  if (/\b(timer|alarm|countdown)\b/i.test(text)) return 'timer';
  if (/\b(dice|roll|coin|flip|head|tail|నాణెం)\b/i.test(text)) return 'dice';
  if (/\b(joke|funny|joke cheppu)\b/i.test(text)) return 'joke';
  if (/\b(motivat|inspire|quote|inspiration)\b/i.test(text)) return 'motivation';
  if (/\b(tech news|technology news|ai news)\b/i.test(text)) return 'techNews';
  if (/\b(translate|translation|telugu lo)\b/i.test(text)) return 'translate';
  if (/\b(currency|convert|exchange rate|rupees?|inr|dollar)\b/i.test(text)) return 'currency';
  if (/\b(meaning|define|dictionary)\b/i.test(text)) return 'meaning';
  if (/\b(password|strong password)\b/i.test(text)) return 'password';
  if (/\b(wikipedia|wiki)\b/i.test(text)) return 'wikipedia';
  if (/\b(open|launch)\s+(youtube|yt)\b/i.test(text)) return 'openYouTube';
  if (/\b(open|launch)\s+(google)\b/i.test(text)) return 'openGoogle';
  if (/\b(youtube)\b.*\b(song|search|play)\b/i.test(text)) return 'youtubeSearch';
  if (/\b(bitcoin|btc)\b/i.test(text)) return 'bitcoin';
  return null;
}
module.exports = { TOOL_REGISTRY, detectEverydayTool, runLocalTool, explicit, extractAfter };
