document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat");
    const messageInput = document.getElementById("msg");
    const sendButton = document.getElementById("send");
    const clearButton = document.getElementById("clear-btn");
    const micButton = document.getElementById("mic-btn");
    const openWhatsAppButton = document.getElementById("open-whatsapp");
    const settingsToggle = document.getElementById("settings-toggle");
    const voiceSettings = document.getElementById("voice-settings");
    const wakeToggle = document.getElementById("wake-word-toggle");
    const wakeStatus = document.getElementById("wake-word-status");
    const wakeStop = document.getElementById("wake-word-stop");
    const apiKeyInput = document.getElementById("gemini-api-key");
    const apiKeyStatus = document.getElementById("gemini-key-status");
    const apiKeySettings = document.getElementById("gemini-api-settings");
    const saveApiKeyButton = document.getElementById("save-api-key");
    const clearApiKeyButton = document.getElementById("clear-api-key");

    const MEMORY_KEY = "jarvis_chat_memory";
    const API_KEY_STORAGE = "jarvis_api_key";
    const BACKEND_HEALTH_URL = "https://jarvis-mobile-edition-alpha.vercel.app/api/health";
    const BACKEND_COMMAND_URL = "https://jarvis-mobile-edition-alpha.vercel.app/api/command";
    const INTERACTION_URL = "https://jarvis-mobile-edition-alpha.vercel.app/api/interaction/analyze";
    function conversationPreferences() { try { return Object.assign({}, JSON.parse(localStorage.getItem("kalki.preferences") || "{}"), JSON.parse(localStorage.getItem("kalki.conversation") || "{}")); } catch (_) { return {}; } }
    async function analyzeInteraction(text) {
        try { const prefs = conversationPreferences(); const r = await fetch(INTERACTION_URL, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({text, messages:readMemory().slice(-12), profile:{displayName:prefs.name||"", language:prefs.language||"auto", responseStyle:prefs.style||"short"}, preferences:{askFollowUps:prefs.followUps !== false}})}); return r.ok ? await r.json() : null; } catch (_) { return null; }
    }

    async function sendBackendCommand(text) {
        const response = await fetch(BACKEND_COMMAND_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.ok) {
            throw new Error(data.message || "Backend command bridge unavailable.");
        }
        return data.result || {};
    }

    async function checkBackendStatus() {
        try {
            const response = await fetch(BACKEND_HEALTH_URL, { cache: "no-store" });
            const data = await response.json();
            if (data?.ok && data?.whatsappBridge) {
                showMessage("J.A.R.V.I.S", "Secure backend and WhatsApp bridge online. Explicit commands only.", "ai");
            } else if (data?.ok) {
                showMessage("J.A.R.V.I.S", "Backend online. WhatsApp bridge is not connected.", "ai");
            }
        } catch (error) {
            showMessage("SYSTEM", "Backend connection unavailable. Local AI mode active.", "ai");
        }
    }

    // Fallback models: first one busy ayithe next model try avutundi
    const MODEL_NAMES = [
        "gemini-3.6-flash",
        "gemini-3.5-flash",
        "gemini-3.1-flash-lite"
    ];

    let recognition = null;
    let isListening = false;
    let wakeRecognition = null;
    let commandRecognition = null;
    let wakeEnabled = false;
    let wakePermissionGranted = false;
    let wakeCaptureInProgress = false;
    const WAKE_WORD_KEY = "jarvis_wake_word_enabled";

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
        try { return (localStorage.getItem(API_KEY_STORAGE) || "").trim(); }
        catch (_) { return ""; }
    }

    function setApiKeyStatus(message, state = "") {
        if (!apiKeyStatus) return;
        apiKeyStatus.textContent = message;
        apiKeyStatus.classList.toggle("is-saved", state === "saved");
        apiKeyStatus.classList.toggle("is-error", state === "error");
    }

    function refreshApiKeyStatus() {
        if (apiKeyInput) apiKeyInput.value = ""; // Never place a saved secret back into the visible field.
        setApiKeyStatus(getApiKey()
            ? "Key saved locally · not verified with Google."
            : "No key saved on this device.", getApiKey() ? "saved" : "");
    }

    function saveApiKey() {
        const value = apiKeyInput?.value.trim() || "";
        if (!value) {
            setApiKeyStatus("Enter your Gemini API key first. Nothing was saved.", "error");
            apiKeyInput?.focus();
            return;
        }
        // Shape check only. This neither contacts Google nor authenticates the key.
        const plausibleGeminiKey = /^(?:AIza[A-Za-z0-9_-]{20,96}|AQ\.[A-Za-z0-9_-]{20,96})$/.test(value);
        if (!plausibleGeminiKey) {
            setApiKeyStatus("Use a standard AIza… key or an AI Studio authorization key starting AQ. This local format check does not verify the key with Google. Nothing was saved.", "error");
            apiKeyInput?.focus();
            return;
        }
        try {
            localStorage.setItem(API_KEY_STORAGE, value);
            if (apiKeyInput) apiKeyInput.value = "";
            setApiKeyStatus("Key saved locally · format looks plausible only; Google has not verified it.", "saved");
        } catch (_) {
            setApiKeyStatus("Could not save in this browser. Check device storage settings and try again.", "error");
        }
    }

    function clearApiKey() {
        try { localStorage.removeItem(API_KEY_STORAGE); }
        catch (_) { setApiKeyStatus("Could not clear browser-local storage.", "error"); return; }
        if (apiKeyInput) apiKeyInput.value = "";
        setApiKeyStatus("Saved key cleared from this browser/device.");
    }

    function openApiKeySettings() {
        if (voiceSettings) voiceSettings.hidden = false;
        if (settingsToggle) settingsToggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
        setApiKeyStatus("A Gemini API key is required for AI chat and voice replies. Add it here to continue.", "error");
        const voiceState = document.getElementById("voice-mode-state");
        const voicePreview = document.getElementById("voice-response-preview");
        if (voiceState) voiceState.textContent = "Gemini API key needed — open Settings to add it.";
        if (voicePreview) voicePreview.textContent = "Your voice command was heard, but KALKI needs a Gemini API key before it can generate a reply.";
        window.setTimeout(() => {
            apiKeySettings?.scrollIntoView({ behavior: "smooth", block: "center" });
            apiKeyInput?.focus({ preventScroll: true });
        }, 180);
    }

    async function askGemini(interaction = null) {
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
                const apiUrl = apiBase + modelName + ":generateContent";

                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-goog-api-key": apiKey
                    },
                    body: JSON.stringify({
                        systemInstruction: {
                            parts: [{
                                text: `You are KALKI, a warm personal assistant who speaks naturally like a helpful friend, not a robotic list generator. Acknowledge statements, show empathy for emotions, ask at most one relevant follow-up when useful, clarify incomplete requests, and offer one sensible next step. Use Telugu/Teluglish naturally when the user does. Never invent calendar, task, weather, connector, or memory facts. Never claim durable memory beyond the conversation supplied. External actions remain explicit and confirmation-gated; do not send, schedule, or act in the background. ${interaction?.guidance?.tone || "Match the user’s language naturally."} ${interaction?.guidance?.style === "detailed" ? "Give a helpful explanation." : "Prefer concise, human replies."} Recent-context available: ${Boolean(interaction?.signals?.continuityAvailable)}.`
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
    function detectEverydayTool(text) {
        if (/\b(time|what time|samayam)\b/i.test(text)) return "time";
        if (/\b(weather|temperature|varsham)\b/i.test(text)) return "weather";
        if (/\b(timer|countdown|alarm)\b/i.test(text)) return "timer";
        if (/\b(dice|roll|coin|flip|head|tail)\b/i.test(text)) return "dice";
        if (/\b(joke|funny)\b/i.test(text)) return "joke";
        if (/\b(motivat|inspire|quote)\b/i.test(text)) return "motivation";
        if (/\b(tech news|ai news)\b/i.test(text)) return "techNews";
        if (/\b(translate|telugu lo)\b/i.test(text)) return "translate";
        if (/\b(currency|convert|exchange rate|rupees?|inr|dollar)\b/i.test(text)) return "currency";
        if (/\b(meaning|define|dictionary)\b/i.test(text)) return "meaning";
        if (/\b(password)\b/i.test(text)) return "password";
        if (/\b(wikipedia|wiki)\b/i.test(text)) return "wikipedia";
        if (/\b(open|launch)\s+(youtube|yt)\b/i.test(text)) return "openYouTube";
        if (/\b(open|launch)\s+google\b/i.test(text)) return "openGoogle";
        if (/\b(youtube)\b.*\b(song|search|play)\b/i.test(text)) return "youtubeSearch";
        if (/\b(bitcoin|btc)\b/i.test(text)) return "bitcoin";
        return null;
    }

    // Normalize common English–Telugu (and Telugu transliteration) phrases before routing.
    function normalizeCommand(text) {
        return text.trim()
            .replace(/\b(chey|cheyyi|cheyyandi|kavali)\b/gi, "do")
            .replace(/\b(teruvu|open\s+chey|open\s+cheyyi)\b/gi, "open")
            .replace(/\b(pampu|pampinch(u|andi)?|send\s+chey)\b/gi, "send")
            .replace(/\b(cheppu|chepp(u|andi)?|teliyajey)\b/gi, "tell me")
            .replace(/\b(latest)\s+AI\s+(news|vishayalu)\b/gi, "search latest AI news")
            .replace(/\s+/g, " ").trim();
    }

    function isExplicitAction(text) {
        return /\b(open|launch|start|send|reply|message|tell|search|find|create|add|schedule|show|read|do)\b/i.test(text)
            || /చెప్పు|పంపు|చూడు|వెతుకు|తెరువు|చేయి|చెయ్/i.test(text);
    }

    function openWhatsApp() {
        // Non-HTTP scheme is handled by the Android wrapper and cannot send a message.
        const whatsappUrl = "whatsapp://send";
        showMessage("J.A.R.V.I.S", "Opening WhatsApp. No message was sent.", "ai");
        window.location.href = whatsappUrl;
    }
    function handleLocalCommand(text) {
        const command = normalizeCommand(text);
        if (/\b(open|launch|start)\s+(the\s+)?whatsapp\b/i.test(command)
            || /\bwhatsapp\s+(open|launch|start)\b/i.test(command)) {
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

        const commandText = normalizeCommand(userText);
        const everydayTool = detectEverydayTool(commandText);
        const requestedSkill = detectSkill(commandText);
        if ((everydayTool || requestedSkill) && isExplicitAction(commandText)) {
            if (requestedSkill === "whatsapp" && handleLocalCommand(commandText)) return;
            try {
                const result = await sendBackendCommand(commandText);
                showMessage("KALKI", result.message || "Command received.", "ai");
                if (result.url && result.executed && (result.tool === "openYouTube" || result.tool === "openGoogle" || result.tool === "youtubeSearch" || result.tool === "wikipedia")) window.open(result.url, "_blank", "noopener");
                if (result.notify && result.seconds) {
                    window.setTimeout(() => { const text = "⏰ Timer complete!"; showMessage("KALKI", text, "ai"); speak(text); if (window.Notification && Notification.permission === "granted") new Notification("KALKI", { body: text }); }, result.seconds * 1000);
                    if (window.Notification && Notification.permission === "default") Notification.requestPermission().catch(() => {});
                } else if (result.speak) speak(result.message || "Done");
            } catch (error) {
                console.error("JARVIS backend bridge error:", error);
                showMessage("SYSTEM", "Backend command bridge unavailable. Nothing was executed.", "ai");
            }
            return;
        }

        if (handleLocalCommand(userText)) return;
        if (!getApiKey()) {
            showMessage("KALKI", "I need your Gemini API key before I can generate an AI reply. Settings is open so you can add it locally; no request was sent to Google.", "ai");
            openApiKeySettings();
            return;
        }
        messageInput.disabled = true;
        sendButton.disabled = true;
        sendButton.textContent = "...";

        try {
            const interaction = await analyzeInteraction(userText);
            if (interaction?.clarification?.question) { showMessage("KALKI", interaction.clarification.question, "ai"); return; }
            const reply = await askGemini(interaction);
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

    function setWakeStatus(text, active = false) {
        if (!wakeStatus) return;
        wakeStatus.textContent = text;
        wakeStatus.classList.toggle("active", active);
    }

    function stopWakeListening() {
        wakeEnabled = false;
        wakeCaptureInProgress = false;
        localStorage.setItem(WAKE_WORD_KEY, "0");
        try { wakeRecognition?.stop(); commandRecognition?.stop(); } catch (_) { /* already stopped */ }
        if (wakeToggle) wakeToggle.checked = false;
        if (wakeStop) wakeStop.hidden = true;
        setWakeStatus("Off. JARVIS will not use your microphone.");
    }

    function listenForCommand() {
        if (!commandRecognition || !wakeEnabled) return;
        wakeCaptureInProgress = true;
        setWakeStatus("Wake word heard — listening for your command…", true);
        try { commandRecognition.start(); } catch (_) { /* recognition may still be closing */ }
    }

    function startWakeListening() {
        if (!wakeRecognition || !wakeEnabled) return;
        wakeCaptureInProgress = false;
        setWakeStatus("Armed in foreground — say “Hey Jarvis”.", true);
        try { wakeRecognition.start(); } catch (_) { /* one-shot recognizer is already starting */ }
    }

    async function enableWakeListening() {
        if (!wakeRecognition) {
            if (wakeToggle) wakeToggle.checked = false;
            setWakeStatus("This browser/WebView does not support voice recognition.");
            return;
        }
        // Permission is requested only as a direct consequence of the user's toggle.
        try {
            if (!wakePermissionGranted && navigator.mediaDevices?.getUserMedia) {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                stream.getTracks().forEach(track => track.stop());
                wakePermissionGranted = true;
            }
            wakeEnabled = true;
            localStorage.setItem(WAKE_WORD_KEY, "1");
            if (wakeStop) wakeStop.hidden = false;
            startWakeListening();
        } catch (_) {
            if (wakeToggle) wakeToggle.checked = false;
            setWakeStatus("Microphone permission was not granted. Wake word is off.");
        }
    }

    function setupWakeWord() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;
        wakeRecognition = new SpeechRecognition();
        wakeRecognition.lang = "en-IN";
        wakeRecognition.continuous = false;
        wakeRecognition.interimResults = false;
        commandRecognition = new SpeechRecognition();
        commandRecognition.lang = "en-IN";
        commandRecognition.continuous = false;
        commandRecognition.interimResults = false;
        wakeRecognition.onresult = (event) => {
            const heard = event.results[0][0].transcript.trim();
            const match = heard.match(/(?:hey|hai|hi)\\s+(?:jarvis|jaarvis|jarv[ie]s|jervis)\\b[,:;.!\\s]*(.*)$/i);
            if (!match) return;
            const remainder = match[1].trim();
            if (remainder) {
                if (messageInput) messageInput.value = remainder;
                sendMessage();
            } else listenForCommand();
        };
        wakeRecognition.onerror = (event) => {
            if (wakeEnabled && event.error !== "not-allowed") setWakeStatus("Armed in foreground — say “Hey Jarvis”.", true);
        };
        wakeRecognition.onend = () => { if (wakeEnabled && !wakeCaptureInProgress) startWakeListening(); };
        commandRecognition.onresult = (event) => {
            const command = event.results[0][0].transcript.trim();
            wakeCaptureInProgress = false;
            if (command && messageInput) { messageInput.value = command; sendMessage(); }
        };
        commandRecognition.onerror = () => { wakeCaptureInProgress = false; if (wakeEnabled) setWakeStatus("Armed in foreground — say “Hey Jarvis”.", true); };
        commandRecognition.onend = () => { wakeCaptureInProgress = false; if (wakeEnabled) startWakeListening(); };
    }

    function installAndroidSharePreview() {
        const preview = document.getElementById("kalki-share-preview");
        const summary = document.getElementById("share-summary");
        const files = document.getElementById("share-files");
        const dismiss = document.getElementById("share-dismiss");
        if (!preview) return;
        let shared = null;
        function clearPreview() { shared = null; preview.hidden = true; if (files) files.replaceChildren(); }
        dismiss?.addEventListener("click", clearPreview);
        document.querySelectorAll("[data-share-action]").forEach((button) => button.addEventListener("click", () => {
            if (!shared) return;
            const action = button.dataset.shareAction;
            const subject = shared.title ? `\nTitle: ${shared.title}` : "";
            const body = shared.text ? `\nContent: ${shared.text}` : "\nContent: Shared file content is available for review in the originating app.";
            if (messageInput) { messageInput.value = `${action} this shared content.${subject}${body}\n\n[Draft — review and press Send to approve]`; messageInput.focus(); }
            showMessage("KALKI", `${action} draft prepared. Review it in the composer; no action was sent or executed.`, "ai");
        }));
        window.addEventListener("kalki-share", (event) => {
            shared = event.detail || {};
            const type = shared.mimeType || "shared content";
            const text = shared.text ? shared.text : `Received ${type}`;
            if (summary) summary.textContent = text;
            if (files) {
                files.replaceChildren(...(Array.isArray(shared.files) ? shared.files.map((file) => {
                    const row = document.createElement("div");
                    row.textContent = `📎 ${file.name || "Shared item"} · ${file.mimeType || type}`;
                    return row;
                }) : []));
            }
            preview.hidden = false;
            preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }

    function toggleVoice() {
        if (!recognition) {
            showMessage("SYSTEM", "Mee browser voice input support cheyyadam ledu.", "ai");
            return;
        }
        if (isListening) recognition.stop();
        else recognition.start();
    }

    settingsToggle?.addEventListener("click", () => {
        const open = voiceSettings?.hasAttribute("hidden");
        if (voiceSettings) voiceSettings.hidden = !open;
        settingsToggle.setAttribute("aria-expanded", String(open));
    });
    wakeToggle?.addEventListener("change", () => wakeToggle.checked ? enableWakeListening() : stopWakeListening());
    wakeStop?.addEventListener("click", stopWakeListening);
    saveApiKeyButton?.addEventListener("click", saveApiKey);
    clearApiKeyButton?.addEventListener("click", clearApiKey);
    apiKeyInput?.addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); saveApiKey(); } });

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

    installAndroidSharePreview();
    setupVoice();
    setupWakeWord();
    if (wakeToggle) wakeToggle.checked = false; // opt-in every session; never silently arm the mic
    setWakeStatus(wakeRecognition ? "Off. JARVIS will not use your microphone." : "Voice recognition is unavailable in this WebView.");
    loadSavedChat();
    refreshApiKeyStatus();
    checkBackendStatus();
    console.log("JARVIS AI fallback system loaded successfully.");
});
