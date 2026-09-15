// ===== 1. API KEY (Safe: browser లో మాత్రమే) =====
let API_KEY = localStorage.getItem('jarvis_key');
if(!API_KEY){ API_KEY = prompt('Enter your Gemini API Key:'); if(API_KEY) localStorage.setItem('jarvis_key', API_KEY); }

// ===== 2. SMART MODELS =====
const MODELS = ["gemini-3.6-flash", "gemini-flash-latest"];

// ===== 3. MEMORY =====
let MEMORY = JSON.parse(localStorage.getItem('jarvis_memory') || '[]');
function saveMemory(){ localStorage.setItem('jarvis_memory', JSON.stringify(MEMORY)); }

const chat=document.getElementById('chat');
const input=document.getElementById('msg');
const micBtn=document.getElementById('mic-btn');
const clearBtn=document.getElementById('clear-btn');
const camBtn=document.getElementById('cam-btn');
const imgInput=document.getElementById('img-input');

MEMORY.forEach(m=> add((m.role==='user'?'YOU: ':'J.A.R.V.I.S: ')+m.text, m.role==='user'?'user':'ai'));

// ===== 4. GEMINI BRAIN (text + memory) =====
async function callGemini(p){
  const contents = MEMORY.slice(-12).map(m=>({role:m.role, parts:[{text:m.text}]}));
  contents.push({role:'user', parts:[{text:p}]});
  let lastErr;
  for(const m of MODELS){
    try{
      const res=await fetch("https://generativelanguage.googleapis.com/v1beta/models/"+m+":generateContent?key="+API_KEY,
        {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:contents})});
      const data=await res.json();
      if(data.error){ lastErr=new Error(data.error.message);
        if(/high demand|temporar|quota|rate|unavailable|no longer available|deprecated/i.test(data.error.message)) continue;
        throw lastErr; }
      return data.candidates[0].content.parts[0].text;
    }catch(e){ lastErr=e; }
  }
  throw lastErr;
}

async function askGemini(p){
  add('J.A.R.V.I.S: Thinking...','ai');
  try{
    const reply=await callGemini(p);
    MEMORY.push({role:'user',text:p}); MEMORY.push({role:'model',text:reply}); saveMemory();
    chat.lastChild.innerText='J.A.R.V.I.S: '+reply; speak(reply);
  }catch(e){ chat.lastChild.innerText='J.A.R.V.I.S: ERROR - '+e.message; }
}

// ===== 5. VISION (EYES) =====
camBtn.onclick=()=>imgInput.click();
imgInput.onchange=()=>{
  const file=imgInput.files[0]; if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    const base64=reader.result.split(',')[1];
    const q=input.value.trim()||'What do you see? Describe briefly.';
    add('YOU: [IMAGE] '+q,'user'); input.value='';
    askVision(base64,file.type,q);
  };
  reader.readAsDataURL(file);
};

async function askVision(base64,mime,q){
  add('J.A.R.V.I.S: Analyzing image...','ai');
  let lastErr;
  for(const m of MODELS){
    try{
      const res=await fetch("https://generativelanguage.googleapis.com/v1beta/models/"+m+":generateContent?key="+API_KEY,
        {method:"POST",headers:{"Content-Type":"application/json"},
         body:JSON.stringify({contents:[{parts:[{text:q},{inline_data:{mime_type:mime,data:base64}}]}]})});
      const data=await res.json();
      if(data.error){ lastErr=new Error(data.error.message);
        if(/high demand|temporar|quota|rate|unavailable|no longer available|deprecated/i.test(data.error.message)) continue;
        throw lastErr; }
      const reply=data.candidates[0].content.parts[0].text;
      chat.lastChild.innerText='J.A.R.V.I.S: '+reply; speak(reply); return;
    }catch(e){ lastErr=e; }
  }
  chat.lastChild.innerText='J.A.R.V.I.S: ERROR - '+lastErr.message;
}

// ===== 6. SPEECH RECOGNITION =====
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const rec=new SR(); rec.lang='en-US'; // Telugu కి 'te-IN'
rec.onresult=(e)=>{const t=e.results[0][0].transcript;add('YOU: '+t,'user');askGemini(t);};
micBtn.onclick=()=>{rec.start();micBtn.innerText='LISTENING...';};
rec.onend=()=>{micBtn.innerText='🎙️';};

// ===== 7. TEXT-TO-SPEECH =====
let voices=[]; function loadVoices(){ voices=speechSynthesis.getVoices(); }
loadVoices(); speechSynthesis.onvoiceschanged=loadVoices;
function speak(t){ const u=new SpeechSynthesisUtterance(t); u.rate=1.05; u.pitch=0.85;
  const v=voices.find(v=>v.lang.startsWith('en')); if(v) u.voice=v; speechSynthesis.speak(u); }

// ===== 8. SEND + CLEAR =====
document.getElementById('send').onclick=()=>{ const t=input.value.trim(); if(!t)return;
  add('YOU: '+t,'user'); input.value=''; askGemini(t); };
clearBtn.onclick=()=>{ MEMORY=[]; saveMemory(); chat.innerHTML=''; add('SYSTEM: Memory cleared.','ai'); };

function add(t,w){const d=document.createElement('div');d.className='msg '+w;d.innerText=t;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;}
