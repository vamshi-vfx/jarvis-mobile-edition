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

    // Skill router: no background actions. A skill runs only after an explicit command.
    const SKILL_REGISTRY = {
        whatsapp: { name: "WhatsApp", keywords: /\bwhatsapp|message|reply|chat\b/i },
        youtube: { name: "YouTube", keywords: /\b(youtube|video)\b/i },
        search: { name: "Web Search", keywords: /\b(search|google|web|news|weather)\b/i },
        email: { name: "Email", keywords: /\b(email|mail|gmail|outlook)\b/i },
        calendar: { name: "Calendar", keywords: /\b(calendar|schedule|meeting|event)\b/i },
        tasks: { name: "Tasks and Reminders", keywords: /\b(task|reminder|todo)\b/i },
        drive: { name: "Cloud Files", keywords: /\b(drive|file|folder|upload|download)\b/i },
        documents: { name: "Documents", keywords: /\b(pdf|word|docx|excel|xlsx|spreadsheet|powerpoint|pptx)\b/i },
        travel: { name: "Travel", keywords: /\b(flight|hotel|travel|trip)\b/i },
        places: { name: "Places and Restaurants", keywords: /\b(restaurant|place|shop|directions)\b/i },
        prices: { name: "Price Comparison", keywords: /\b(price|cost|cheap|compare|buy)\b/i },
        media: { name: "Image and Media", keywords: /\b(image|photo|picture|edit)\b/i },
        automation: { name: "Multi-step Automation", keywords: /\b(automate|automation|workflow)\b/i },
        memory: { name: "Personal Memory", keywords: /\b(remember|memory|save this)\b/i }
    };

    function detectSkill(text) {
        return Object.entries(SKILL_REGISTRY)
            .find(([, skill]) => skill.keywords.test(text))?.[0] || null;
    }

    function isExplicitAction(text) {
        return /\b(open|launch|start|send|reply|message|tell|search|find|create|add|schedule|show|read)\b/i.test(text)
            || /చెప్పు|పంపు|చూడు|వెతుకు|తెరువు/i.test(text);
    }

    function openWhatsApp() {
        // wa.me reliably hands off to the installed Android WhatsApp app.
        const whatsappUrl = "https://wa.me/";
        showMessage("J.A.R.V.I.S", "WhatsApp opening...", "ai");
        const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (!opened) window.location.assign(whatsappUrl);
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

        const requestedSkill = detectSkill(userText);
        if (requestedSkill && isExplicitAction(userText)) {
            if (requestedSkill === "whatsapp" && handleLocalCommand(userText)) return;
            if (requestedSkill !== "whatsapp") {
                showMessage("J.A.R.V.I.S", `${SKILL_REGISTRY[requestedSkill].name} skill detected. Secure skill bridge ready for connection.`, "ai");
                return;
            }
        }

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
