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
                showMessage("KALKI", "Secure backend and WhatsApp bridge online. Explicit commands only.", "ai");
            } else if (data?.ok) {
                showMessage("KALKI", "Backend online. WhatsApp bridge is not connected.", "ai");
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
        if (!workflow || !chatBox) { showMessage("KALKI", result?.message || "Preview ready. Nothing was executed.", "ai"); return; }
        showMessage("KALKI", `${result.message || "Preview ready."}\\nType: ${workflow.kind}${workflow.provider ? `\\nConnector: ${workflow.provider} (${workflow.provider === "tasks" ? "local representation only" : "not connected"})` : ""}\\nSteps: ${workflow.steps.map(step => step.command).join(" → ")}`, "ai");
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
        if (memory.length === 0) { showMessage("KALKI", "System online. AI brain ready.", "ai"); return; }
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
                const response = await fetch(apiBase + modelName + ":generateContent?key=" + apiKey, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ systemInstruction: { parts: [{ text: `You are KALKI, a helpful personal mobile assistant. Reply in ${getPrefs().language === "telugu" ? "Telugu" : getPrefs().language === "teluglish" ? "Teluglish (Telugu written in Latin script)" : getPrefs().language === "english" ? "English" : "the same language as the user"}. Keep replies ${getPrefs().style === "detailed" ? "detailed and structured" : "short and direct"}. ${getPrefs().name ? `Address the user as ${getPrefs().name}.` : ""} Never perform or imply an external action unless the user explicitly asks. ${getActiveContextPrompt()}` }] }, contents }) });
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
        showMessage("KALKI", "WhatsApp opening...", "ai");
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
                else showMessage("KALKI", result.message || `${SKILL_REGISTRY[requestedSkill].name} command received.`, "ai");
            } catch (error) {
                console.error("KALKI backend bridge error:", error);
                showMessage("SYSTEM", "Backend command bridge unavailable. Nothing was executed.", "ai");
            }
            return;
        }
        if (handleLocalCommand(userText)) return;
        messageInput.disabled = true; sendButton.disabled = true; sendButton.textContent = "...";
        try { const reply = await askGemini(); showMessage("KALKI", reply, "ai"); speak(reply); }
        catch (error) { console.error("KALKI AI Error:", error); showMessage("SYSTEM", error.message, "ai"); }
        finally { messageInput.disabled = false; sendButton.disabled = false; sendButton.textContent = "SEND"; messageInput.focus(); }
    }
    function clearChat() {
        localStorage.removeItem(MEMORY_KEY); if (chatBox) chatBox.innerHTML = ""; if (messageInput) messageInput.value = "";
        showMessage("KALKI", "Memory cleared. System ready.", "ai");
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
    const stopWakeWord = () => { wakeEnabled = false; wakeCapturing = false; try { wakeRecognition?.stop(); commandRecognition?.stop(); } catch (error) {} if (wakeWordToggle) wakeWordToggle.checked = false; if (wakeWordStop) wakeWordStop.hidden = true; setWakeStatus("Off. KALKI will not use your microphone."); };
    const personalitySettings = document.getElementById("personality-settings");
    if (settingsToggle && voiceSettings) settingsToggle.addEventListener("click", () => { const open = voiceSettings.hidden; voiceSettings.hidden = !open; if (personalitySettings) personalitySettings.hidden = !open; settingsToggle.setAttribute("aria-expanded", String(open)); if (open) window.setTimeout(() => settingsToggle.scrollIntoView({ behavior: "smooth", block: "start" }), 0); });
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
    document.getElementById("clear-personal-data")?.addEventListener("click", () => { if(!confirm("Clear KALKI preferences, aliases, skills, and chat from this device?"))return; [PREFS_KEY,ALIASES_KEY,CUSTOM_SKILLS_KEY,MEMORY_KEY,CONTEXT_KEY].forEach(k=>localStorage.removeItem(k)); if(chatBox)chatBox.innerHTML="";renderSettings();showMessage("KALKI","Personal data cleared on this device. No server data was changed.","ai"); });
    // Apply a saved alias only to an explicit send; aliases never auto-submit or run in background.
    const applyAlias = (value) => { const found=readJson(ALIASES_KEY,DEFAULT_ALIASES).find(a=>value.toLowerCase()===String(a.phrase).toLowerCase()); return found ? found.command : value; };
    if (sendButton && messageInput) sendButton.addEventListener("click", () => { messageInput.value = applyAlias(messageInput.value.trim()); }, true);
    renderSettings();
    // Read-only self-health checks. No token values, repairs, prompts, or external actions.
    const diagnosticsGrid = document.getElementById("diagnostics-grid");
    const diagnosticsSummary = document.getElementById("diagnostics-summary");
    const diagnosticsRefresh = document.getElementById("diagnostics-refresh");
    const diagnosticsLastChecked = document.getElementById("diagnostics-last-checked");
    const diagnosticsCards = (items) => items.map((item) => `<article class="diagnostic-card"><h3>${item.label}</h3><span class="diagnostic-status ${item.kind}">${item.status}</span><p>${item.detail}</p></article>`).join("");
    const diagnosticFetch = async (url, timeout = 5000) => { const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), timeout); try { const response = await fetch(url, { cache: "no-store", signal: controller.signal }); const data = await response.json().catch(() => null); return { response, data }; } finally { clearTimeout(timer); } };
    async function getPermissionState() {
        const result = { microphone: "unknown", notifications: "unknown" };
        if (nativeWake && typeof window.JarvisNative.permissionStatus === "function") { try { const p = JSON.parse(window.JarvisNative.permissionStatus()); result.microphone = p.microphone ? "granted" : "not granted"; result.notifications = p.notifications ? "granted" : "not granted"; } catch (_) {} }
        else if (navigator.permissions?.query) { try { result.microphone = (await navigator.permissions.query({ name: "microphone" })).state; } catch (_) {} }
        return result;
    }
    async function runDiagnostics() {
        if (!diagnosticsGrid) return;
        diagnosticsRefresh.disabled = true; diagnosticsRefresh.textContent = "Checking…"; diagnosticsSummary.className = "diagnostics-summary"; diagnosticsSummary.textContent = "Running read-only checks…";
        const online = navigator.onLine;
        const permission = await getPermissionState();
        const browserKind = /WebView|wv\)/i.test(navigator.userAgent) || nativeWake;
        let backend = { kind: "warn", status: "unavailable", detail: "The verified health endpoint could not be reached." };
        try { const result = await diagnosticFetch(BACKEND_HEALTH_URL); if (result.response.ok && result.data?.ok) backend = { kind: "good", status: "healthy", detail: `Verified ${result.data.service || "backend"} health response; explicit-actions-only=${result.data.explicitActionsOnly === true ? "on" : "not confirmed"}.` }; else backend.detail = "Health endpoint responded without a verifiable healthy status."; } catch (_) { backend.detail = "No health response was received. Check network access or deployment availability."; }
        let connectors = { kind: "warn", status: "unavailable", detail: "Connector status endpoint could not be verified." };
        try { const result = await diagnosticFetch(BACKEND_HEALTH_URL.replace("/api/health", "/api/connectors/status")); if (result.response.ok && result.data?.ok) { const providers = Object.values(result.data.providers || {}); const connected = providers.filter((p) => p?.status === "connected").length; connectors = { kind: "good", status: "verified", detail: `${connected} connector(s) reported connected; statuses are server-reported and no credentials are shown.` }; } } catch (_) {}
        const aiConfigured = Boolean(localStorage.getItem(API_KEY_STORAGE));
        const items = [
            { label: "Local device", kind: online ? "good" : "warn", status: online ? "online" : "offline", detail: online ? "Browser reports network connectivity." : "Browser reports offline; remote checks may be unavailable." },
            { label: "Backend", ...backend }, { label: "Connectors", ...connectors },
            { label: "AI access", kind: "warn", status: aiConfigured ? "configured locally" : "unknown", detail: aiConfigured ? "A local AI key marker exists; provider access was not called by diagnostics." : "No local AI key is configured. This does not test or expose any key." },
            { label: "Wake service & permissions", kind: permission.microphone === "granted" ? "good" : "warn", status: permission.microphone === "granted" ? "microphone granted" : permission.microphone, detail: `${nativeWake ? "Native Android bridge detected." : "Browser voice mode detected."} Notifications: ${permission.notifications}. Wake word remains foreground-only.` },
            { label: "WebView", kind: browserKind ? "good" : "warn", status: browserKind ? "detected" : "browser", detail: browserKind ? "KALKI native bridge/WebView marker is present." : "Native WebView marker is not available in this browser." },
            { label: "Build", kind: "warn", status: "unavailable", detail: "Build provenance cannot be verified from the dashboard; use the verified release workflow/artifact." }
        ];
        diagnosticsGrid.innerHTML = diagnosticsCards(items);
        const warnings = items.filter((item) => item.kind !== "good").length;
        diagnosticsSummary.className = `diagnostics-summary ${warnings ? "warn" : "good"}`;
        diagnosticsSummary.textContent = warnings ? `${warnings} check(s) need attention or are unavailable. No action was taken.` : "All available read-only checks are healthy. No action was taken.";
        diagnosticsLastChecked.textContent = `Last checked ${new Date().toLocaleString()}`;
        diagnosticsRefresh.disabled = false; diagnosticsRefresh.textContent = "↻ Refresh safely";
        document.getElementById("diagnostics-app-settings")?.toggleAttribute("hidden", !nativeWake);
        document.getElementById("diagnostics-notification-settings")?.toggleAttribute("hidden", !nativeWake);
    }
    diagnosticsRefresh?.addEventListener("click", runDiagnostics);
    document.getElementById("diagnostics-app-settings")?.addEventListener("click", () => window.JarvisNative?.openAppSettings());
    document.getElementById("diagnostics-notification-settings")?.addEventListener("click", () => window.JarvisNative?.openNotificationSettings());
    console.log("KALKI AI fallback system loaded successfully.");
    // Phase 11: context packs are deliberately browser-local until encrypted durable storage exists.
    const CONTEXT_KEY = "kalki_context_packs_v1";
    const contextDefinitions = [
        { id: "work", icon: "▦", name: "Work", hint: "Projects & priorities" },
        { id: "creator", icon: "✦", name: "YouTube / Creator", hint: "Content & audience" },
        { id: "finance", icon: "◈", name: "Finance", hint: "Plans & constraints" },
        { id: "travel", icon: "✈", name: "Travel", hint: "Trips & logistics" },
        { id: "personal", icon: "♡", name: "Personal", hint: "Life & routines" }
    ];
    let selectedContext = "work";
    const getContextPacks = () => readJson(CONTEXT_KEY, {});
    const getActiveContextPrompt = () => { const pack = getContextPacks()[selectedContext]; return pack?.notes ? `Use the selected ${contextDefinitions.find(x=>x.id===selectedContext)?.name || "personal"} context only as user-provided background: ${pack.notes}. Do not treat it as a secret or authorization.` : "No personal context pack is active."; };
    const contextList = document.getElementById("context-pack-list"), contextNotes = document.getElementById("context-notes"), contextTarget = document.getElementById("context-target"), contextStatus = document.getElementById("context-status");
    const renderContextPacks = () => { if (!contextList) return; const packs=getContextPacks(); contextList.innerHTML=contextDefinitions.map(c=>`<button class="context-pack ${selectedContext===c.id?"is-selected":""}" type="button" data-context="${c.id}" role="option" aria-selected="${selectedContext===c.id}"><span class="context-pack-icon">${c.icon}</span><strong>${c.name}</strong><small>${packs[c.id]?.notes ? "Added locally" : c.hint}</small></button>`).join(""); const active=packs[selectedContext]; if(contextNotes) contextNotes.value=active?.notes||""; if(contextStatus) contextStatus.textContent=`${contextDefinitions.find(x=>x.id===selectedContext)?.name} context · ${active?.notes ? "active for this surface" : "empty"}. Saved on this device only.`; };
    const selectContext = (id) => { if(!contextDefinitions.some(c=>c.id===id)) return; selectedContext=id; renderContextPacks(); };
    contextList?.addEventListener("click", event => { const card=event.target.closest("[data-context]"); if(card) selectContext(card.dataset.context); });
    document.getElementById("context-save")?.addEventListener("click", () => { const notes=(contextNotes?.value||"").trim(); const packs=getContextPacks(); if(notes) packs[selectedContext]={notes,updatedAt:new Date().toISOString()}; else delete packs[selectedContext]; localStorage.setItem(CONTEXT_KEY,JSON.stringify(packs)); renderContextPacks(); });
    document.getElementById("context-clear")?.addEventListener("click", () => { const packs=getContextPacks(); delete packs[selectedContext]; localStorage.setItem(CONTEXT_KEY,JSON.stringify(packs)); renderContextPacks(); });
    contextTarget?.addEventListener("change", () => { const target=contextTarget.value; if(contextStatus) contextStatus.textContent=`${contextDefinitions.find(x=>x.id===selectedContext)?.name} context selected for ${target === "chat" ? "this chat" : target === "agent" ? "the selected agent" : "the selected automation"}. Saved on this device only.`; });
    renderContextPacks();
});
// Smart Document Room: browser-local preview only; no upload, OCR, or AI claim.
(()=>{const input=document.getElementById('document-file-input'),pick=document.getElementById('document-upload-btn'),list=document.getElementById('document-file-list'),preview=document.getElementById('document-preview'),result=document.getElementById('document-result'),status=document.getElementById('document-status');if(!input||!pick)return;let docs=[],selected=0;const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const textFile=f=>/^(text\/|application\/(json|xml|csv))/.test(f.type)||/\.(txt|md|csv|json|log|xml|html)$/i.test(f.name);const set=(t,b,k='')=>{result.className='document-result '+(k?'is-'+k:'');result.innerHTML='<strong>'+esc(t)+'</strong><span>'+esc(b)+'</span>';};const draw=()=>{list.innerHTML=docs.map((d,i)=>'<button type="button" class="document-file '+(i===selected?'is-selected':'')+'" data-doc-index="'+i+'">📎 '+esc(d.name)+' · '+Math.ceil(d.size/1024)+' KB</button>').join('');};const show=async()=>{const d=docs[selected];if(!d)return;preview.innerHTML='<div class="doc-meta"><strong>'+esc(d.name)+'</strong> · '+esc(d.type||'unknown type')+' · '+Math.ceil(d.size/1024)+' KB</div>';if(d.type==='application/pdf'){preview.insertAdjacentHTML('beforeend','<iframe class="doc-pdf-preview" title="Local PDF preview" src="'+URL.createObjectURL(d)+'"></iframe>');}else if(d.type.startsWith('image/')){preview.insertAdjacentHTML('beforeend','<img class="doc-image-preview" alt="Local preview" src="'+URL.createObjectURL(d)+'">');}else if(textFile(d)){const t=await d.text();preview.insertAdjacentHTML('beforeend','<pre class="doc-text-preview">'+esc(t.slice(0,12000))+(t.length>12000?'\n… preview truncated':'')+'</pre>');}else preview.insertAdjacentHTML('beforeend','<p class="doc-empty"><small>Preview unavailable for this format. No extraction was invented.</small></p>');};pick.onclick=()=>input.click();input.onchange=()=>{docs=[...input.files];selected=0;draw();show();status.textContent=docs.length?docs.length+' file(s) loaded locally. Nothing was uploaded.':'No document selected.';set('Action boundary','Choose an action. AI summarization, OCR, and translation are unavailable until a verified processor exists.');};list.onclick=e=>{const b=e.target.closest('[data-doc-index]');if(b){selected=+b.dataset.docIndex;draw();show();}};document.querySelectorAll('[data-doc-action]').forEach(btn=>btn.onclick=async()=>{if(!docs.length)return set('Nothing to process','Select a document first. No data was sent.','error');const a=btn.dataset.docAction;if(a==='compare'){if(docs.length<2)return set('Compare unavailable','Select at least two documents. No comparison was invented.','error');const [x,y]=await Promise.all([docs[0].text(),docs[1].text()]);return set('Local comparison',docs[0].name+' and '+docs[1].name+' are '+(x===y?'identical':'different')+' as readable text. PDF/image semantics are unavailable.','success');}if(a==='dates'){if(!textFile(docs[selected]))return set('Dates / amounts unavailable','This file is not readable text in the browser. No OCR or guessed values were used.','error');const t=await docs[selected].text(),ds=t.match(/\b(?:\d{1,4}[\/-]){1,2}\d{1,4}\b|\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2},?\s+\d{4}\b/gi)||[],ms=t.match(/(?:₹|INR|Rs\.?|\$|USD|EUR|€)\s?\d[\d,]*(?:\.\d{1,2})?/gi)||[];return set('Local pattern scan','Dates: '+(ds.join(', ')||'none found')+'\\nAmounts: '+(ms.join(', ')||'none found')+'. Verify against the source.','success');}const names={summarize:'Summarize',fields:'Extract key fields',translate:'Translate',actions:'Create action list'};set(names[a]+' unavailable','No verified local/AI processor is connected. Nothing was invented, uploaded, translated, or executed.');});})();

// Offline Quick Actions: explicit, confirmation-gated, local-only fallbacks.
(()=>{const bridge=window.JarvisNative, status=document.getElementById('offline-action-status'), perms=document.getElementById('offline-permission-status'), badge=document.getElementById('offline-bridge-status'), tool=document.getElementById('offline-local-tool');if(!status)return;const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const native={whatsapp:'openWhatsApp',camera:'openCamera','app-settings':'openAppSettings','notification-settings':'openNotificationSettings','battery-settings':'openBatterySettings'};const refresh=()=>{if(!bridge){badge.textContent='Browser preview';perms.textContent='Android bridge unavailable. Local timer, stopwatch, and note preview still work; app/settings handoffs require the KALKI Android app.';return}badge.textContent='Android bridge ready';try{const x=JSON.parse(bridge.permissionStatus());perms.textContent=`Local status · microphone ${x.microphone?'granted':'not granted'} · camera ${x.camera?'granted':'not granted'} · notifications ${x.notifications?'granted':'not granted'}. No permission was requested.`}catch(_){perms.textContent='Android bridge ready. Permission status is unavailable until an action is chosen.'}};const confirmAction=(label,fn)=>{status.textContent=`Confirm “${label}”? This only opens the selected app or Android settings; nothing is sent or changed automatically.`;if(!window.confirm(`KALKI confirmation\n\n${label}\n\nOnly the selected app/settings screen will open. No message will be sent and no system setting will be changed automatically.`))return;try{fn();status.textContent=`${label} requested. Review the Android screen; KALKI did not perform any additional action.`}catch(_){status.textContent=`${label} is unavailable on this device. Nothing was changed.`}};const localTool=(kind)=>{tool.hidden=false;if(kind==='note'){tool.innerHTML='<strong>Local note preview</strong><textarea id="offline-note" rows="3" maxlength="1000" placeholder="Write a note…"></textarea><button type="button" id="offline-note-save">Save locally</button><span id="offline-note-status"></span>';const n=document.getElementById('offline-note'),old=localStorage.getItem('kalki_offline_note')||'';n.value=old;document.getElementById('offline-note-save').onclick=()=>{localStorage.setItem('kalki_offline_note',n.value);document.getElementById('offline-note-status').textContent=' Saved on this device only.';status.textContent='Local note saved. Nothing was uploaded or shared.'}}else if(kind==='timer'){tool.innerHTML='<strong>Local timer</strong><input id="offline-seconds" type="number" min="1" max="86400" value="60" aria-label="Timer seconds"><button type="button" id="offline-timer-start">Start timer</button><span id="offline-timer-status">Ready · page-local only</span>';document.getElementById('offline-timer-start').onclick=()=>{let left=Math.max(1,Math.min(86400,Number(document.getElementById('offline-seconds').value)||60));const out=document.getElementById('offline-timer-status');out.textContent=`${left}s remaining · page-local only`;const id=setInterval(()=>{left--;out.textContent=left?`${left}s remaining · page-local only`:'Timer complete · no notification was sent';if(!left)clearInterval(id)},1000);status.textContent='Timer started after confirmation. It may stop if this page is closed.'}}else{tool.innerHTML='<strong>Stopwatch</strong><span id="offline-stopwatch-status">00:00.0 · page-local only</span><button type="button" id="offline-stopwatch-start">Start</button><button type="button" id="offline-stopwatch-stop">Stop</button>';let t=0,id;const out=document.getElementById('offline-stopwatch-status');document.getElementById('offline-stopwatch-start').onclick=()=>{if(id)return;const start=Date.now()-t;id=setInterval(()=>{t=Date.now()-start;out.textContent=`${String(Math.floor(t/60000)).padStart(2,'0')}:${String(Math.floor(t/1000)%60).padStart(2,'0')}.${String(Math.floor(t/100)%10)} · page-local only`},100);status.textContent='Stopwatch started after confirmation. It is not a system stopwatch.'};document.getElementById('offline-stopwatch-stop').onclick=()=>{clearInterval(id);id=null;status.textContent='Stopwatch stopped locally.'}}};document.querySelectorAll('[data-offline-action]').forEach(b=>b.onclick=()=>{const a=b.dataset.offlineAction;tool.hidden=true;if(native[a]){if(!bridge){status.textContent='This Android handoff needs the KALKI app bridge. Nothing was executed.';return}confirmAction(b.querySelector('strong').textContent,()=>bridge[native[a]]());return}confirmAction(b.querySelector('strong').textContent,()=>localTool(a));});refresh()})();

// Composer attachment menu: local preview/share only, never auto-sends.
(()=>{const plus=document.getElementById("attach-button"),menu=document.getElementById("attachment-menu"),close=document.getElementById("attachment-close"),files=document.getElementById("chat-file-input"),docInput=document.getElementById("document-file-input");if(!plus||!menu)return;const hide=()=>{menu.hidden=true};plus.onclick=()=>{menu.hidden=!menu.hidden};close?.addEventListener("click",hide);document.addEventListener("click",e=>{if(!menu.hidden&&!menu.contains(e.target)&&e.target!==plus)hide()});document.getElementById("attach-files")?.addEventListener("click",()=>{hide();if(docInput){docInput.accept="*/*";docInput.click()}else files?.click()});document.getElementById("attach-images")?.addEventListener("click",()=>{hide();if(docInput){docInput.accept="image/*";docInput.click()}else if(files){files.accept="image/*";files.click()}});document.getElementById("attach-camera")?.addEventListener("click",()=>{hide();if(window.JarvisNative?.openCamera)window.JarvisNative.openCamera();else window.alert("Camera handoff is available in the KALKI Android app.")});document.getElementById("attach-share")?.addEventListener("click",async()=>{hide();if(navigator.share){try{await navigator.share({title:"KALKI",text:"Shared with KALKI"})}catch(e){}}else{const msg=document.getElementById("msg");if(msg){msg.value="Review this shared item in KALKI";msg.focus()}}});})();
