document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat");
    const messageInput = document.getElementById("msg");
    const sendButton = document.getElementById("send");
    const clearButton = document.getElementById("clear-btn");
    const micButton = document.getElementById("mic-btn");
    const openWhatsAppButton = document.getElementById("open-whatsapp");

    const MEMORY_KEY = "jarvis_chat_memory";
    const API_KEY_STORAGE = "jarvis_api_key";

    // Fallback models: first one busy ayithe next model try avutundi
    const MODEL_NAMES = [
        "gemini-3.6-flash",
        "gemini-3.5-flash",
        "gemini-3.1-flash-lite"
    ];

    let recognition = null;
    let isListening = false;

    function readMemory() {
        try {
            return JSON.parse(localStorage.getItem(MEMORY_KEY) || "[]");
        } catch (error) {
            return [];
        }
    }

    function saveMemory(memory) {
        localStorage.setItem(
            MEMORY_KEY,
            JSON.stringify(memory.slice(-30))
        );
    }

    function addToMemory(sender, text, type) {
        const memory = readMemory();
        memory.push({ sender, text, type });
        saveMemory(memory);
    }

    function showMessage(sender, text, type, save = true) {
        if (!chatBox) return;

        const message = document.createElement("div");
        message.className = type === "user" ? "msg user" : "msg";

        const senderElement = document.createElement("strong");
        senderElement.textContent = `${sender}: `;

        message.appendChild(senderElement);
        message.appendChild(document.createTextNode(text));
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;

        if (save) addToMemory(sender, text, type);
    }

    function loadSavedChat() {
        const memory = readMemory();

        if (memory.length === 0) {
            showMessage(
                "J.A.R.V.I.S",
                "System online. AI brain ready.",
                "ai"
            );
            return;
        }

        memory.forEach((item) => {
            showMessage(item.sender, item.text, item.type, false);
        });
    }

    function getApiKey() {
        let apiKey = localStorage.getItem(API_KEY_STORAGE);

        if (!apiKey) {
            apiKey = prompt("Mee Gemini API key enter cheyyandi:");

            if (apiKey && apiKey.trim()) {
                apiKey = apiKey.trim();
                localStorage.setItem(API_KEY_STORAGE, apiKey);
            }
        }

        return apiKey;
    }

    async function askGemini() {
        const apiKey = getApiKey();

        if (!apiKey) {
            throw new Error("API key enter cheyyaledu.");
        }

        const contents = readMemory()
            .filter((item) => item.type === "user" || item.type === "ai")
            .slice(-20)
            .map((item) => ({
                role: item.type === "user" ? "user" : "model",
                parts: [{ text: item.text }]
            }));

        const apiBase =
            "https://generativelanguage.googleapis.com/v1beta/models/";

        let lastError = "AI connection failed.";

        for (const modelName of MODEL_NAMES) {
            try {
                const apiUrl =
                    apiBase + modelName + ":generateContent?key=" + apiKey;

                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        systemInstruction: {
                            parts: [{
                                text: "You are J.A.R.V.I.S, a helpful personal mobile assistant. Keep replies clear and concise."
                            }]
                        },
                        contents
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    const reply =
                        data?.candidates?.[0]?.content?.parts?.[0]?.text;

                    if (reply) return reply;
                    lastError = "AI nundi reply raledu.";
                    continue;
                }

                lastError =
                    data?.error?.message || "AI connection failed.";

                const temporaryProblem =
                    /high demand|temporar|quota|rate|unavailable|overload|busy|deprecated|not found/i;

                if (!temporaryProblem.test(lastError)) {
                    break;
                }
            } catch (error) {
                lastError = error.message;
            }
        }

        throw new Error(lastError);
    }

    function speak(text) {
        if (!("speechSynthesis" in window)) return;

        speechSynthesis.cancel();
        const voice = new SpeechSynthesisUtterance(text);
        voice.lang = "en-IN";
        voice.rate = 0.95;
        speechSynthesis.speak(voice);
    }

    function openWhatsApp() {
        // Use the installed Android app when available; fall back to WhatsApp Web.
        const fallback = "https://wa.me/";
        showMessage("J.A.R.V.I.S", "WhatsApp opening...", "ai");
        window.location.href = "whatsapp://";
        window.setTimeout(() => {
            if (document.visibilityState === "visible") window.open(fallback, "_blank");
        }, 700);
    }

    function handleLocalCommand(text) {
        if (/\b(open|launch|start)\s+whatsapp\b|\bwhatsapp\s+(open|launch)\b/i.test(text)) {
            openWhatsApp();
            return true;
        }
        return false;
    }

    async function sendMessage() {
        if (!messageInput || !sendButton) return;

        const userText = messageInput.value.trim();
        if (!userText) return;

        showMessage("YOU", userText, "user");
        messageInput.value = "";

        if (handleLocalCommand(userText)) return;
        messageInput.disabled = true;
        sendButton.disabled = true;
        sendButton.textContent = "...";

        try {
            const reply = await askGemini();
            showMessage("J.A.R.V.I.S", reply, "ai");
            speak(reply);
        } catch (error) {
            console.error("JARVIS AI Error:", error);
            showMessage("SYSTEM", error.message, "ai");
        } finally {
            messageInput.disabled = false;
            sendButton.disabled = false;
            sendButton.textContent = "SEND";
            messageInput.focus();
        }
    }

    function clearChat() {
        localStorage.removeItem(MEMORY_KEY);
        if (chatBox) chatBox.innerHTML = "";
        if (messageInput) messageInput.value = "";
        showMessage(
            "J.A.R.V.I.S",
            "Memory cleared. System ready.",
            "ai"
        );
    }

    function setupVoice() {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) return;

        recognition = new SpeechRecognition();
        recognition.lang = "en-IN";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            isListening = true;
            if (micButton) micButton.textContent = "STOP";
        };

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            if (messageInput) {
                messageInput.value = text;
                messageInput.focus();
            }
        };

        recognition.onerror = () => {
            showMessage(
                "SYSTEM",
                "Voice input work avvaledu. Mic permission check cheyyandi.",
                "ai"
            );
        };

        recognition.onend = () => {
            isListening = false;
            if (micButton) micButton.textContent = "🎙️";
        };
    }

    function toggleVoice() {
        if (!recognition) {
            showMessage(
                "SYSTEM",
                "Mee browser voice input support cheyyadam ledu.",
                "ai"
            );
            return;
        }

        if (isListening) recognition.stop();
        else recognition.start();
    }

    if (sendButton) sendButton.addEventListener("click", sendMessage);
    if (clearButton) clearButton.addEventListener("click", clearChat);
    if (micButton) micButton.addEventListener("click", toggleVoice);
    if (openWhatsAppButton) openWhatsAppButton.addEventListener("click", openWhatsApp);

    if (messageInput) {
        messageInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });
    }

    setupVoice();
    loadSavedChat();
    console.log("JARVIS AI fallback system loaded successfully.");
});
