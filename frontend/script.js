document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat");
    const messageInput = document.getElementById("msg");
    const sendButton = document.getElementById("send");
    const clearButton = document.getElementById("clear-btn");
    const micButton = document.getElementById("mic-btn");
    const openWhatsAppButton = document.getElementById("open-whatsapp");

    const MEMORY_KEY = "jarvis_chat_memory";
    const API_KEY_STORAGE = "jarvis_api_key";
    const PREFS_KEY = "kalki_preferences_v1";
    const ALIASES_KEY = "kalki_aliases_v1";
    const CUSTOM_SKILLS_KEY = "kalki_custom_skills_v1";
    const DEFAULT_ALIASES = [{ phrase: "KALKI WhatsApp open chey", command: "open whatsapp" }, { phrase: "KALKI latest AI news cheppu", command: "search latest AI news" }];
    const readJson = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } };
    const getPrefs = () => ({ language: "auto", style: "short", name: "", ...readJson(PREFS_KEY, {}) });
    const BACKEND_HEALTH_URL = "https://jarvis-mobile-edition-alpha.vercel.app/api/health";
    const BACKEND_COMMAND_URL = "https://jarvis-mobile-edition-alpha.vercel.app/api/command";

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
    const MODEL_NAMES = ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.1-flash-lite"];
    let recognition = null;
    let isListening = false;

    function readMemory() {
        try { return JSON.parse(localStorage.getItem(MEMORY_KEY) || "[]"); }
        catch (error) { return []; }
    }
    function saveMemory(memory) { localStorage.setItem(MEMORY_KEY, JSON.stringify(memory.slice(-30))); }
    function addToMemory(sender, text, type) { const memory = readMemory(); memory.push({ sender, text, type }); saveMemory(memory); }

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
    function showAutomationPreview(result) {
        const workflow = result?.workflow;
        if (!workflow || !chatBox) { showMessage("J.A.R.V.I.S", result?.message || "Preview ready. Nothing was executed.", "ai"); return; }
        showMessage("J.A.R.V.I.S", `${result.message || "Preview ready."}\\nType: ${workflow.kind}${workflow.provider ? `\\nConnector: ${workflow.provider} (${workflow.provider === "tasks" ? "local representation only" : "not connected"})` : ""}\\nSteps: ${workflow.steps.map(step => step.command).join(" → ")}`, "ai");
        if (!workflow.requiresConfirmation || workflow.status !== "preview") return;
        const card = document.createElement("div"); card.className = "automation-confirmation"; card.dataset.workflowId = workflow.id;
        const label = document.createElement("span"); label.textContent = "Nothing has been executed. Confirm this action?"; card.appendChild(label);
        const confirm = document.createElement("button"); confirm.type = "button"; confirm.textContent = "CONFIRM";
        const cancel = document.createElement("button"); cancel.type = "button"; cancel.textContent = "CANCEL";
        const act = async (operation, button) => { confirm.disabled = true; cancel.disabled = true; button.textContent = "..."; try { const response = await fetch(`${BACKEND_COMMAND_URL.replace("/api/command", `/api/automation/${operation}`)}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ workflowId: workflow.id }) }); const data = await response.json(); label.textContent = data.message || (data.ok ? "Updated." : "Request failed."); if (data.workflow?.status) label.textContent += ` Status: ${data.workflow.status}.`; } catch (error) { label.textContent = "Action could not be completed. Nothing was executed."; } };
        confirm.addEventListener("click", () => act("approve", confirm)); cancel.addEventListener("click", () => act("cancel", cancel)); card.append(confirm, cancel); chatBox.appendChild(card); chatBox.scrollTop = chatBox.scrollHeight;
    }
    function loadSavedChat() {
        const memory = readMemory();
        if (memory.length === 0) { showMessage("J.A.R.V.I.S", "System online. AI brain ready.", "ai"); return; }
        memory.forEach((item) => showMessage(item.sender, item.text, item.type, false));
    }
    function getApiKey() {
        let apiKey = localStorage.getItem(API_KEY_STORAGE);
        if (!apiKey) {
            apiKey = prompt("Mee Gemini API key enter cheyyandi:");
            if (apiKey && apiKey.trim()) { apiKey = apiKey.trim(); localStorage.setItem(API_KEY_STORAGE, apiKey); }
        }
        return apiKey;
    }
    async function askGemini() {
        const apiKey = getApiKey();
        if (!apiKey) throw new Error("API key enter cheyyaledu.");
        const contents = readMemory().filter((item) => item.type === "user" || item.type === "ai").slice(-20).map((item) => ({ role: item.type === "user" ? "user" : "model", parts: [{ text: item.text }] }));
        const apiBase = "https://generativelanguage.googleapis.com/v1beta/models/";
        let lastError = "AI connection failed.";
        for (const modelName of MODEL_NAMES) {
            try {
                const response = await fetch(apiBase + modelName + ":generateContent?key=" + apiKey, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ systemInstruction: { parts: [{ text: `You are KALKI, a helpful personal mobile assistant. Reply in ${getPrefs().language === "telugu" ? "Telugu" : getPrefs().language === "teluglish" ? "Teluglish (Telugu written in Latin script)" : getPrefs().language === "english" ? "English" : "the same language as the user"}. Keep replies ${getPrefs().style === "detailed" ? "detailed and structured" : "short and direct"}. ${getPrefs().name ? `Address the user as ${getPrefs().name}.` : ""} Never perform or imply an external action unless the user explicitly asks.` }] }, contents }) });
                const data = await response.json();
                if (response.ok) {
                    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (reply) return reply;
                    lastError = "AI nundi reply raledu.";
                    continue;
                }
                lastError = data?.error?.message || "AI connection failed.";
                if (!/high demand|temporar|quota|rate|unavailable|overload|busy|deprecated|not found/i.test(lastError)) break;
            } catch (error) { lastError = error.message; }
        }
        throw new Error(lastError);
    }
    function speak(text) {
        if (!("speechSynthesis" in window)) return;
        speechSynthesis.cancel();
        const voice = new SpeechSynthesisUtterance(text);
        voice.lang = "en-IN"; voice.rate = 0.95; speechSynthesis.speak(voice);
    }

    // Skill router: no background actions. A skill runs only after an explicit command.
    const SKILL_REGISTRY = {
        whatsapp: { name: "WhatsApp", keywords: /\bwhatsapp|message|reply|chat\b/i },
        youtubeAnalytics: { name: "Daily YouTube Analytics", keywords: /\b(youtube\s*(analytics|report|stats)|channel\s*(analytics|report|stats)|daily\s*(youtube|channel)\s*(analytics|report|stats))\b/i },
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
    function detectSkill(text) { return Object.entries(SKILL_REGISTRY).find(([, skill]) => skill.keywords.test(text))?.[0] || null; }
    function isExplicitAction(text) { return /\b(open|launch|start|send|reply|message|tell|search|find|create|add|schedule|show|read)\b/i.test(text) || /చెప్పు|పంపు|చూడు|వెతుకు|తెరువు/i.test(text); }
    function openWhatsApp() {
        // Safe handoff only: opening WhatsApp never sends a message.
        showMessage("J.A.R.V.I.S", "WhatsApp opening...", "ai");
        window.location.assign("whatsapp://send");
    }
    function handleLocalCommand(text) {
        if (/\b(open|launch|start)\s+whatsapp\b|\bwhatsapp\s+(open|launch)\b/i.test(text)) { openWhatsApp(); return true; }
        return false;
    }
    async function sendMessage() {
        if (!messageInput || !sendButton) return;
        const userText = messageInput.value.trim();
        if (!userText) return;
        showMessage("YOU", userText, "user"); messageInput.value = "";
        const requestedSkill = detectSkill(userText);
        if (requestedSkill && isExplicitAction(userText)) {
            if (requestedSkill === "whatsapp" && handleLocalCommand(userText)) return;
            try {
                const result = await sendBackendCommand(userText);
                if (result.workflow) showAutomationPreview(result);
                else showMessage("J.A.R.V.I.S", result.message || `${SKILL_REGISTRY[requestedSkill].name} command received.`, "ai");
            } catch (error) {
                console.error("JARVIS backend bridge error:", error);
                showMessage("SYSTEM", "Backend command bridge unavailable. Nothing was executed.", "ai");
            }
            return;
        }
        if (handleLocalCommand(userText)) return;
        messageInput.disabled = true; sendButton.disabled = true; sendButton.textContent = "...";
        try { const reply = await askGemini(); showMessage("J.A.R.V.I.S", reply, "ai"); speak(reply); }
        catch (error) { console.error("JARVIS AI Error:", error); showMessage("SYSTEM", error.message, "ai"); }
        finally { messageInput.disabled = false; sendButton.disabled = false; sendButton.textContent = "SEND"; messageInput.focus(); }
    }
    function clearChat() {
        localStorage.removeItem(MEMORY_KEY); if (chatBox) chatBox.innerHTML = ""; if (messageInput) messageInput.value = "";
        showMessage("J.A.R.V.I.S", "Memory cleared. System ready.", "ai");
    }
    function setupVoice() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return;
        recognition = new SpeechRecognition(); recognition.lang = "en-IN"; recognition.continuous = false; recognition.interimResults = false;
        recognition.onstart = () => { isListening = true; if (micButton) micButton.textContent = "STOP"; };
        recognition.onresult = (event) => { if (messageInput) { messageInput.value = event.results[0][0].transcript; messageInput.focus(); } };
        recognition.onerror = () => showMessage("SYSTEM", "Voice input work avvaledu. Mic permission check cheyyandi.", "ai");
        recognition.onend = () => { isListening = false; if (micButton) micButton.textContent = "🎙️"; };
    }
    function toggleVoice() {
        if (!recognition) { showMessage("SYSTEM", "Mee browser voice input support cheyyadam ledu.", "ai"); return; }
        if (isListening) recognition.stop(); else recognition.start();
    }
    if (sendButton) sendButton.addEventListener("click", sendMessage);
    if (clearButton) clearButton.addEventListener("click", clearChat);
    if (micButton) micButton.addEventListener("click", toggleVoice);
    if (openWhatsAppButton) openWhatsAppButton.addEventListener("click", openWhatsApp);
    if (messageInput) messageInput.addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); sendMessage(); } });
    setupVoice(); loadSavedChat(); checkBackendStatus();

    // Settings and optional foreground-only one-shot “Hey Jarvis” recognition.
    const settingsToggle = document.getElementById("settings-toggle");
    const voiceSettings = document.getElementById("voice-settings");
    const wakeWordToggle = document.getElementById("wake-word-toggle");
    const wakeWordStatus = document.getElementById("wake-word-status");
    const wakeWordStop = document.getElementById("wake-word-stop");
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    let wakeEnabled = false; let wakeCapturing = false; let wakeRecognition = null; let commandRecognition = null;
    const nativeWake = Boolean(window.JarvisNative);
    window.addEventListener("jarvis-native-command", (event) => { const command = String(event.detail || "").trim(); if (!command) return; if (messageInput) messageInput.value = normalizeMixedCommand(command); sendButton?.click(); });
    const setWakeStatus = (text, active = false) => { if (wakeWordStatus) { wakeWordStatus.textContent = text; wakeWordStatus.classList.toggle("active", active); } };
    const normalizeMixedCommand = (value) => value.trim()
        .replace(/\b(latest)\s+AI\s+(news|vishayalu)\s+(cheppu|cheppandi)\b/gi, "search latest AI news")
        .replace(/\bwhatsapp\s+(open\s+chey|open\s+cheyyi|teruvu)\b/gi, "open whatsapp")
        .replace(/\b(message|msg)\s+(pampu|pampinchu|pampinchandi)\b/gi, "send message")
        .replace(/\b(teruvu|open\s+chey|open\s+cheyyi)\b/gi, "open")
        .replace(/\b(pampu|pampinchu|pampinchandi|send\s+chey)\b/gi, "send")
        .replace(/\b(chey|cheyyi|cheyyandi|kavali)\b/gi, "do")
        .replace(/\b(cheppu|cheppandi|teliyajey)\b/gi, "tell me")
        .replace(/\s+/g, " ").trim();
    const armWakeRecognition = () => { if (!wakeEnabled || !wakeRecognition || wakeCapturing) return; setWakeStatus("Armed in foreground — say “Hey Jarvis”.", true); try { wakeRecognition.start(); } catch (error) {} };
    const listenForCommand = () => { if (!wakeEnabled || !commandRecognition) return; wakeCapturing = true; setWakeStatus("Wake word heard — listening for your command…", true); try { commandRecognition.start(); } catch (error) {} };
    const stopWakeWord = () => { wakeEnabled = false; wakeCapturing = false; try { wakeRecognition?.stop(); commandRecognition?.stop(); } catch (error) {} if (wakeWordToggle) wakeWordToggle.checked = false; if (wakeWordStop) wakeWordStop.hidden = true; setWakeStatus("Off. JARVIS will not use your microphone."); };
    const personalitySettings = document.getElementById("personality-settings");
    if (settingsToggle && voiceSettings) settingsToggle.addEventListener("click", () => { const open = voiceSettings.hidden; voiceSettings.hidden = !open; if (personalitySettings) personalitySettings.hidden = !open; settingsToggle.setAttribute("aria-expanded", String(open)); });
    if (wakeWordToggle && wakeWordStatus) {
        if (SpeechRecognitionAPI) {
            wakeRecognition = new SpeechRecognitionAPI(); commandRecognition = new SpeechRecognitionAPI();
            [wakeRecognition, commandRecognition].forEach((instance) => { instance.lang = "en-IN"; instance.continuous = false; instance.interimResults = false; });
            wakeRecognition.onresult = (event) => { const transcript = event.results[0][0].transcript.trim(); const match = transcript.match(/(?:hey|hai|hi)\s+(?:jarvis|jaarvis|jarv[ie]s|jervis)\b[,:;.!\s]*(.*)$/i); if (match?.[1]?.trim()) { if (messageInput) messageInput.value = normalizeMixedCommand(match[1]); sendButton?.click(); } else if (match) listenForCommand(); };
            wakeRecognition.onend = () => armWakeRecognition();
            wakeRecognition.onerror = () => { if (wakeEnabled) setWakeStatus("Armed in foreground — say “Hey Jarvis”.", true); };
            commandRecognition.onresult = (event) => { wakeCapturing = false; if (messageInput) messageInput.value = normalizeMixedCommand(event.results[0][0].transcript); sendButton?.click(); };
            commandRecognition.onend = () => { wakeCapturing = false; armWakeRecognition(); };
            wakeWordToggle.addEventListener("change", async () => { if (!wakeWordToggle.checked) { stopWakeWord(); if (nativeWake) window.JarvisNative.disableWakeWord(); return; } if (nativeWake) { wakeEnabled = true; if (wakeWordStop) wakeWordStop.hidden = false; setWakeStatus("Starting foreground listener — approve Android permissions…", true); window.JarvisNative.enableWakeWord(); return; } try { if (navigator.mediaDevices?.getUserMedia) { const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); stream.getTracks().forEach((track) => track.stop()); } wakeEnabled = true; if (wakeWordStop) wakeWordStop.hidden = false; armWakeRecognition(); } catch (error) { wakeWordToggle.checked = false; setWakeStatus("Microphone permission was not granted. Wake word is off."); } });
            wakeWordStop?.addEventListener("click", () => { stopWakeWord(); if (nativeWake) window.JarvisNative.disableWakeWord(); });
        } else { wakeWordToggle.disabled = true; setWakeStatus("Voice recognition is unavailable in this WebView."); }
    }
    if (sendButton && messageInput) sendButton.addEventListener("click", () => { messageInput.value = normalizeMixedCommand(messageInput.value); }, true);
    if (messageInput) messageInput.addEventListener("keydown", (event) => { if (event.key === "Enter") messageInput.value = normalizeMixedCommand(messageInput.value); }, true);
    // Phase 6 settings are opt-in and local-first. Backend persistence is intentionally not assumed.
    const prefLanguage = document.getElementById("pref-language"), prefStyle = document.getElementById("pref-style"), prefName = document.getElementById("pref-name");
    const prefsStatus = document.getElementById("preferences-status");
    const renderSettings = () => { const p = getPrefs(); if (prefLanguage) prefLanguage.value = p.language; if (prefStyle) prefStyle.value = p.style; if (prefName) prefName.value = p.name; renderAliases(); renderCustomSkills(); };
    const savePrefs = () => { localStorage.setItem(PREFS_KEY, JSON.stringify({ language: prefLanguage?.value || "auto", style: prefStyle?.value || "short", name: (prefName?.value || "").trim() })); if (prefsStatus) prefsStatus.textContent = "Saved on this device. KALKI will use this for new replies."; };
    const renderAliases = () => { const list = document.getElementById("alias-list"); if (!list) return; list.innerHTML = ""; readJson(ALIASES_KEY, DEFAULT_ALIASES).forEach((a, i) => { const li=document.createElement("li"); li.textContent=`${a.phrase} → ${a.command}`; const b=document.createElement("button"); b.type="button"; b.textContent="Remove"; b.onclick=()=>{const x=readJson(ALIASES_KEY,DEFAULT_ALIASES);x.splice(i,1);localStorage.setItem(ALIASES_KEY,JSON.stringify(x));renderAliases();}; li.appendChild(b);list.appendChild(li); }); };
    const renderCustomSkills = () => { const list=document.getElementById("custom-skill-list"); if(!list)return;list.innerHTML="";readJson(CUSTOM_SKILLS_KEY,[]).forEach((skill,i)=>{const li=document.createElement("li");li.textContent=`${skill.name}: “${skill.trigger}”`;const b=document.createElement("button");b.type="button";b.textContent="Remove";b.onclick=()=>{const x=readJson(CUSTOM_SKILLS_KEY,[]);x.splice(i,1);localStorage.setItem(CUSTOM_SKILLS_KEY,JSON.stringify(x));renderCustomSkills();};li.appendChild(b);list.appendChild(li);}); };
    document.getElementById("save-preferences")?.addEventListener("click", savePrefs);
    document.getElementById("add-alias")?.addEventListener("click", () => { const phrase=document.getElementById("alias-phrase")?.value.trim(), command=document.getElementById("alias-command")?.value.trim(); if(!phrase||!command)return; const x=readJson(ALIASES_KEY,DEFAULT_ALIASES);x.push({phrase,command});localStorage.setItem(ALIASES_KEY,JSON.stringify(x.slice(-30)));document.getElementById("alias-phrase").value="";document.getElementById("alias-command").value="";renderAliases(); });
    document.getElementById("add-custom-skill")?.addEventListener("click", () => { const name=document.getElementById("custom-skill-name")?.value.trim(), trigger=document.getElementById("custom-skill-trigger")?.value.trim(), description=document.getElementById("custom-skill-description")?.value.trim(); if(!name||!trigger||!description)return; const x=readJson(CUSTOM_SKILLS_KEY,[]);x.push({name,trigger,description});localStorage.setItem(CUSTOM_SKILLS_KEY,JSON.stringify(x.slice(-20)));["custom-skill-name","custom-skill-trigger","custom-skill-description"].forEach(id=>{document.getElementById(id).value="";});renderCustomSkills(); });
    document.getElementById("clear-personal-data")?.addEventListener("click", () => { if(!confirm("Clear KALKI preferences, aliases, skills, and chat from this device?"))return; [PREFS_KEY,ALIASES_KEY,CUSTOM_SKILLS_KEY,MEMORY_KEY].forEach(k=>localStorage.removeItem(k)); if(chatBox)chatBox.innerHTML="";renderSettings();showMessage("KALKI","Personal data cleared on this device. No server data was changed.","ai"); });
    // Apply a saved alias only to an explicit send; aliases never auto-submit or run in background.
    const applyAlias = (value) => { const found=readJson(ALIASES_KEY,DEFAULT_ALIASES).find(a=>value.toLowerCase()===String(a.phrase).toLowerCase()); return found ? found.command : value; };
    if (sendButton && messageInput) sendButton.addEventListener("click", () => { messageInput.value = applyAlias(messageInput.value.trim()); }, true);
    renderSettings();
    console.log("JARVIS AI fallback system loaded successfully.");
});
