// ==========================================
// JARVIS MOBILE EDITION - CORE SYSTEM SCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ELEMENTS SELECT CHEYADAM (IDs Match Avvali) ---
    const sendBtn = document.getElementById('sendBtn');
    const clearBtn = document.getElementById('clearBtn'); // Broom icon button
    const micBtn = document.getElementById('micBtn');     // Mic icon button
    const inputBox = document.getElementById('inputBox'); // Text input field
    const chatContainer = document.getElementById('chatContainer'); // Chat display area
    
    // Status Elements
    const voiceStatus = document.getElementById('voiceStatus');
    const memoryStatus = document.getElementById('memoryStatus');

    // --- 2. API CONFIGURATION ---
    // ⚠️ IMPORTANT: Mee Gemini API Key ikkada pettandi
    const API_KEY = 'YOUR_GEMINI_API_KEY_HERE'; 
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    // --- 3. UNLOCK VOICE & MEMORY STATUS ---
    // Screenshot lo "LOCKED" kanipisthundi kabatti idhi add chesanu
    if(voiceStatus) voiceStatus.innerHTML = '<span style="color:#0f0">● ONLINE</span>';
    if(memoryStatus) memoryStatus.innerHTML = '<span style="color:#0f0">● ONLINE</span>';

    // --- 4. SEND MESSAGE FUNCTION ---
    async function sendMessage() {
        const message = inputBox.value.trim();
        
        // Empty message check
        if (!message) return; 

        // UI Update: User message chupinchadam
        appendMessage('You', message, '#0ff');
        inputBox.value = ''; // Clear input
        sendBtn.disabled = true; // Double click prevent cheyadaniki
        sendBtn.innerText = '...';

        try {
            // Gemini API Call
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: message }] }]
                })
            });

            const data = await response.json();
            
            let aiReply = "Error: Response not found";
            if (data.candidates && data.candidates[0].content.parts[0].text) {
                aiReply = data.candidates[0].content.parts[0].text;
            } else if (data.error) {
                aiReply = `API Error: ${data.error.message}`;
            }

            // UI Update: AI Reply chupinchadam
            appendMessage('J.A.R.V.I.S', aiReply, '#0f0');

        } catch (error) {
            console.error("JARVIS Core Error:", error);
            appendMessage('SYSTEM', 'Network Connection Failed. Check Console.', '#f00');
        } finally {
            sendBtn.disabled = false;
            sendBtn.innerText = 'SEND';
        }
    }

    // --- 5. CHAT APPEND FUNCTION (Cinematic Style) ---
    function appendMessage(sender, text, color) {
        if(!chatContainer) return;
        
        const msgDiv = document.createElement('div');
        msgDiv.style.borderLeft = `3px solid ${color}`;
        msgDiv.style.padding = '10px';
        msgDiv.style.marginBottom = '10px';
        msgDiv.style.background = 'rgba(0, 255, 255, 0.05)';
        msgDiv.style.fontFamily = 'monospace';
        msgDiv.style.color = color;
        
        msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatContainer.appendChild(msgDiv);
        
        // Auto scroll to bottom
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // --- 6. CLEAR CHAT FUNCTION ---
    function clearChat() {
        if(chatContainer) chatContainer.innerHTML = '';
        if(inputBox) inputBox.value = '';
    }

    // --- 7. EVENT LISTENERS (MOBILE TOUCH SUPPORT) ---
    // Desktop Click + Mobile Touch rendu support chesthundi
    if(sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
        sendBtn.addEventListener('touchstart', (e) => { e.preventDefault(); sendMessage(); });
    }

    if(clearBtn) {
        clearBtn.addEventListener('click', clearChat);
        clearBtn.addEventListener('touchstart', (e) => { e.preventDefault(); clearChat(); });
    }

    if(micBtn) {
        micBtn.addEventListener('click', () => alert('Voice Module Initializing...'));
        micBtn.addEventListener('touchstart', (e) => { e.preventDefault(); alert('Voice Module Initializing...'); });
    }

    // Enter key tho kuda send avvadaniki
    if(inputBox) {
        inputBox.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    console.log("✅ J.A.R.V.I.S Mobile Edition Core Loaded Successfully");
});
