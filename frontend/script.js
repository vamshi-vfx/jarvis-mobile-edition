document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat");
    const messageInput = document.getElementById("msg");
    const sendButton = document.getElementById("send");
    const clearButton = document.getElementById("clear-btn");
    const micButton = document.getElementById("mic-btn");

    const MEMORY_KEY = "jarvis_chat_memory";
    const API_KEY_STORAGE = "jarvis_api_key";
    const MODEL_NAME = "gemini-3.6-flash";

    let recognition = null;
    let isListening = false;

    function readMemory() {
        try {
            return JSON.parse(
                localStorage.getItem(MEMORY_KEY) || "[]"
            );
        } catch {
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

        memory.push({
            sender: sender,
            text: text,
            type: type
        });

        saveMemory(memory);
    }

    function showMessage(sender, text, type, save = true) {
        if (!chatBox) return;

        const message = document.createElement("div");
        message.className = type === "user" ? "msg user" : "msg";

        const senderElement = document.createElement("strong");
        senderElement.textContent = `${sender}: `;

        const textElement = document.createTextNode(text);

        message.appendChild(senderElement);
        message.appendChild(textElement);

        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;

        if (save) {
            addToMemory(sender, text, type);
        }
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
            showMessage(
                item.sender,
                item.text,
                item.type,
                false
            );
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

        const memory = readMemory();

        const contents = memory
            .filter((item) => {
                return item.type === "user" || item.type === "ai";
            })
            .slice(-20)
            .map((item) => {
                return {
                    role: item.type === "user" ? "user" : "model",
                    parts: [
                        {
                            text: item.text
                        }
                    ]
                };
            });

        const apiBase =
            "https://generativelanguage.googleapis.com/v1beta/models/";

        const apiUrl =
            `\({apiBase}\){MODEL_NAME}:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                systemInstruction: {
                    parts: [
                        {
                            text:
                                "You are J.A.R.V.I.S, a helpful personal mobile assistant. Keep replies clear and concise."
                        }
                    ]
                },
                contents: contents
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data?.error?.message || "AI connection failed."
            );
        }

        const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!reply) {
            throw new Error("AI nundi reply raledu.");
        }

        return reply;
    }

    function speak(text) {
        if (!("speechSynthesis" in window)) return;

        speechSynthesis.cancel();

        const voice = new SpeechSynthesisUtterance(text);
        voice.lang = "en-IN";
        voice.rate = 0.95;
        voice.pitch = 1;

        speechSynthesis.speak(voice);
    }

    async function sendMessage() {
        if (!messageInput || !sendButton) return;

        const userText = messageInput.value.trim();

        if (!userText) return;

        showMessage("YOU", userText, "user");

        messageInput.value = "";
        messageInput.disabled = true;
        sendButton.disabled = true;
        sendButton.textContent = "...";

        try {
            const reply = await askGemini();

            showMessage("J.A.R.V.I.S", reply, "ai");
            speak(reply);
        } catch (error) {
            console.error("JARVIS AI Error:", error);

            showMessage(
                "SYSTEM",
                error.message,
                "ai"
            );
        } finally {
            messageInput.disabled = false;
            sendButton.disabled = false;
            sendButton.textContent = "SEND";
            messageInput.focus();
        }
    }

    function clearChat() {
        if (chatBox) {
            chatBox.innerHTML = "";
        }

        localStorage.removeItem(MEMORY_KEY);

        showMessage(
            "J.A.R.V.I.S",
            "Memory cleared. System ready.",
            "ai"
        );
    }

    function setupVoice() {
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) return;

        recognition = new SpeechRecognition();
        recognition.lang = "en-IN";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            isListening = true;
            micButton.textContent = "STOP";
        };

        recognition.onresult = (event) => {
            const text =
                event.results[0][0].transcript;

            messageInput.value = text;
            messageInput.focus();
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
            micButton.textContent = "🎙️";
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

        if (isListening) {
            recognition.stop();
        } else {
            recognition.start();
        }
    }

    if (sendButton) {
        sendButton.addEventListener("click", sendMessage);
    }

    if (clearButton) {
        clearButton.addEventListener("click", clearChat);
    }

    if (micButton) {
        micButton.addEventListener("click", toggleVoice);
    }

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

    console.log("JARVIS AI brain loaded successfully.");
});
