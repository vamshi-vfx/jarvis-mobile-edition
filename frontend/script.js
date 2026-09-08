// ===== 1. API KEY =====
let API_KEY = localStorage.getItem('jarvis_key');
if(!API_KEY){
  API_KEY = prompt('Enter your Gemini API Key:');
  if(API_KEY) localStorage.setItem('jarvis_key', API_KEY);
}

// ===== 2. MODEL (error వస్తే ఇక్కడ మార్చండి) =====
const MODEL = "gemini-flash-latest"; // లేదా gemini-2.5-flash / gemini-2.0-flash

const chat=document.getElementById('chat');
const input=document.getElementById('msg');
const micBtn=document.getElementById('mic-btn');

// ===== 3. GEMINI BRAIN (real error చూపిస్తుంది) =====
async function askGemini(p){
  add('J.A.R.V.I.S: Thinking...','ai');
  try{
    const res=await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/"+MODEL+":generateContent?key="+API_KEY,
      {method:"POST",headers:{"Content-Type":"application/json"},
       body:JSON.stringify({contents:[{parts:[{text:p}]}]})});
    const data=await res.json();
    if(data.error){ throw new Error(data.error.message); }
    const reply=data.candidates[0].content.parts[0].text;
    chat.lastChild.innerText='J.A.R.V.I.S: '+reply;
    speak(reply); // ✅ reply వచ్చిన వెంటనే VOICE
  }catch(e){
    chat.lastChild.innerText='J.A.R.V.I.S: ERROR - '+e.message; // 🔍 నిజమైన కారణం
  }
}

// ===== 4. SPEECH RECOGNITION (EARS) =====
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const rec=new SR(); rec.lang='en-US';
rec.onresult=(e)=>{const t=e.results[0][0].transcript;add('YOU: '+t,'user');askGemini(t);};
micBtn.onclick=()=>{rec.start();micBtn.innerText='LISTENING...';};
rec.onend=()=>{micBtn.innerText='🎙️';};

// ===== 5. TEXT-TO-SPEECH (VOICE) =====
let voices=[];
function loadVoices(){ voices=speechSynthesis.getVoices(); }
loadVoices();
speechSynthesis.onvoiceschanged=loadVoices;

function speak(t){
  const u=new SpeechSynthesisUtterance(t);
  u.rate=1.05; u.pitch=0.85;
  const v=voices.find(v=>v.lang.startsWith('en'));
  if(v) u.voice=v;
  speechSynthesis.speak(u);
}

// ===== 6. TEXT SEND =====
document.getElementById('send').onclick=()=>{
  const t=input.value.trim(); if(!t)return;
  add('YOU: '+t,'user'); input.value=''; askGemini(t);
};

function add(t,w){const d=document.createElement('div');d.className='msg '+w;d.innerText=t;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;}
