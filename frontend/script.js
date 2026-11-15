// ===== 1. DOM ELEMENTS & CONFIG =====
const chat = document.getElementById('chat');
const input = document.getElementById('input');
const micBtn = document.getElementById('mic');
const sendBtn = document.getElementById('send');

// Mee Gemini API Key ni ikkada pettandi
const API_KEY = "YOUR_GEMINI_API_KEY"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

// ===== 2. ADD MESSAGE TO CHAT UI =====
function add(text, sender) {
  const div = document.createElement('div');
  div.className = `msg ${sender}`;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// ===== 3. GEMINI API CALL =====
async function askGemini(prompt) {
  add('J.A.R.V.I.S: Thinking...', 'bot');
  
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await res.json();
    if (data.error) { 
      throw new Error(data.error.message); 
    }
    
    const reply = data.candidates[0].content.parts[0].text;
    chat.lastChild.innerText = 'J.A.R.V.I.S: ' + reply;
    speak(reply); // reply వచ్చిన వెంటనే VOICE
  } catch (e) {
    chat.lastChild.innerText = 'J.A.R.V.I.S: ERROR - ' + e.message; // నిజమైన కారణం
  }
}

// ===== 4. SPEECH RECOGNITION (EARS) =====
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SR) {
  const rec = new SR();
  rec.lang = 'en-US';

  rec.onresult = (e) => {
    const t = e.results[0][0].transcript;
    add('YOU: ' + t, 'user');
    askGemini(t);
  };

  micBtn.onclick = () => {
    rec.start();
    micBtn.innerText = 'LISTENING...';
  };

  rec.onend = () => {
    micBtn.innerText = '🎤';
  };
} else {
  micBtn.onclick = () => alert("Speech Recognition ee browser lo support cheyatledu.");
}

// ===== 5. TEXT-TO-SPEECH (VOICE) =====
let voices = [];
function loadVoices() { 
  voices = speechSynthesis.getVoices(); 
}
loadVoices();
speechSynthesis.onvoiceschanged = loadVoices;

function speak(t) {
  const u = new SpeechSynthesisUtterance(t);
  u.rate = 1.05; 
  u.pitch = 0.85;
  const v = voices.find(v => v.lang.startsWith('en'));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

// ===== 6. TEXT SEND =====
sendBtn.onclick = () => {
  const t = input.value.trim();
  if (!t) return;
  add('YOU: ' + t, 'user');
  input.value = '';
  askGemini(t);
};

// Enter key press chesina send avvadaniki
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
