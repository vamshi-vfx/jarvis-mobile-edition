
// ===== 1. API KEY (Safe: browser లో మాత్రమే) =====
let API_KEY = localStorage.getItem('jarvis_key');
if(!API_KEY){
  API_KEY = prompt('Enter your Gemini API Key:');
  if(API_KEY) localStorage.setItem('jarvis_key', API_KEY);
}

const chat=document.getElementById('chat');
const input=document.getElementById('msg');
const micBtn=document.getElementById('mic-btn');

// ===== 2. GEMINI BRAIN =====
async function askGemini(p){
  add('J.A.R.V.I.S: Thinking...','ai');
  try{
    const res=await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="+API_KEY,
      {method:"POST",headers:{"Content-Type":"application/json"},
       body:JSON.stringify({contents:[{parts:[{text:p}]}]})});
    const data=await res.json();
    const reply=data.candidates[0].content.parts[0].text;
    chat.lastChild.innerText='J.A.R.V.I.S: '+reply;
    speak(reply);
  }catch(e){chat.lastChild.innerText='J.A.R.V.I.S: Connection error, Boss.';}
}

// ===== 3. SPEECH RECOGNITION =====
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const rec=new SR(); rec.lang='en-US'; // Telugu కి 'te-IN'
rec.onresult=(e)=>{const t=e.results[0][0].transcript;add('YOU: '+t,'user');askGemini(t);};
micBtn.onclick=()=>{rec.start();micBtn.innerText='LISTENING...';};
rec.onend=()=>{micBtn.innerText='🎙️';};

// ===== 4. TEXT-TO-SPEECH =====
function speak(t){const u=new SpeechSynthesisUtterance(t);u.rate=1.05;u.pitch=0.85;speechSynthesis.speak(u);}

// ===== 5. TEXT SEND =====
document.getElementById('send').onclick=()=>{
  const t=input.value.trim(); if(!t)return;
  add('YOU: '+t,'user'); input.value=''; askGemini(t);
};

function add(t,w){const d=document.createElement('div');d.className='msg '+w;d.innerText=t;chat.appendChild(d);chat.scrollTop=chat.scrollHeight;}
