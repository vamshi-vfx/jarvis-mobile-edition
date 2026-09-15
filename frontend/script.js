document.addEventListener("DOMContentLoaded", () => {
    // HTML elements
    const chatBox = document.getElementById("chat");
    const messageInput = document.getElementById("msg");
    const sendButton = document.getElementById("send");
    const clearButton = document.getElementById("clear-btn");
    const micButton = document.getElementById("mic-btn");

    // Memory settings
    const MEMORY_KEY = "jarvis_chat_memory";
    const MAX_MEMORY_MESSAGES = 50;

    let replyTimer = null;
    let recognition = null;
    let isListening = false;

    // ------------------------------------------
    // MEMORY SYSTEM
    // ------------------------------------------

    function getMemory() {
        try {
            const savedMemory = localStorage.getItem(MEMORY_KEY);
            return savedMemory ? JSON.parse(savedMemory) : [];
        } catch (error) {
            console.error("Memory read error:", error);
            return [];
        }
    }

    function saveToMemory(sender, text, type) {
        try {
            const memory = getMemory();

            memory.push({
                sender: sender,
                text: text,
                type: type,
                time: new Date().toISOString()
            });

            const limitedMemory =
                memory.slice(-MAX_MEMORY_MESSAGES);

            localStorage.setItem(
                MEMORY_KEY,
                JSON.stringify(limitedMemory)
            );
        } catch (error) {
            console.error("Memory save error:", error);
        }
    }

    function clearMemory() {
        try {
            localStorage.removeItem(MEMORY_KEY);
        } catch (error) {
            console.error("Memory clear error:", error);
        }
    }

    // ------------------------------------------
    // CHAT DISPLAY
    // ------------------------------------------

    function addMessage(sender, text, type, save = true) {
        if (!chatBox) return;

        const message = document.createElement("div");
        message.className = type === "user" ? "msg user" : "msg";

        const senderText = document.createElement("strong");
        senderText.textContent = `${sender}: `;

        const messageText = document.createTextNode(text);

        message.appendChild(senderText);
        message.appendChild(messageText);

        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;

        if (save) {
            saveToMemory(sender, text, type);
        }
    }

    function loadMemory() {
        const memory = getMemory();

        if (memory.length === 0) {
            addMessage(
                "J.A.R.V.I.S",
                "System online. Voice and memory ready.",
                "ai"
            );
            return;
        }

        memory.forEach((item) => {
            addMessage(
                item.sender,
                item.text,
                item.type,
                false
            );
        });
    }

    // ------------------------------------------
    // LOCAL JARVIS REPLY
    // ------------------------------------------

    function getJarvisReply(userMessage) {
        const message = userMessage.toLowerCase();

        if (
            message.includes("hello") ||
            message.includes("hi") ||
            message.includes("hai")
        ) {
            return "Hello Vamshi. J.A.R.V.I.S is ready.";
        }

        if (
            message.includes("who are you") ||
            message.includes("nee peru")
        ) {
            return "I am your personal J.A.R.V.I.S mobile assistant.";
        }

        if (
            message.includes("what can you do") ||
            message.includes("em cheyagalavu")
        ) {
            return "I can remember this chat, receive voice input, and speak my replies.";
        }

        if (
            message.includes("remember") ||
            message.includes("gurthu")
        ) {
            return "Okay Vamshi. Ee conversation memory lo save chesanu.";
        }

        return "Mee message receive ayyindi. Real AI brain next step lo connect cheddam.";
    }

    // ------------------------------------------
    // TEXT TO SPEECH
    // ------------------------------------------

    function speakText(text) {
        if (!("speechSynthesis" in window)) {
            return;
        }

        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-IN";
        speech.rate = 0.95;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    }

    // ------------------------------------------
    // SEND MESSAGE
    // ------------------------------------------

    function sendMessage() {
        if (!messageInput || !sendButton) return;

        const userMessage = messageInput.value.trim();

        if (!userMessage) return;

        addMessage("YOU", userMessage, "user");

        messageInput.value = "";
        messageInput.disabled = true;
        sendButton.disabled = true;
        sendButton.textContent = "...";

        replyTimer = setTimeout(() => {
            const jarvisReply = getJarvisReply(userMessage);

            addMessage("J.A.R.V.I.S", jarvisReply, "ai");
            speakText(jarvisReply);

            messageInput.disabled = false;
            sendButton.disabled = false;
            sendButton.textContent = "SEND";
            messageInput.focus();

            replyTimer = null;
        }, 600);
    }

    // ------------------------------------------
    // CLEAR CHAT AND MEMORY
    // ------------------------------------------

    function clearChat() {
        if (replyTimer) {
            clearTimeout(replyTimer);
            replyTimer = null;
        }

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        if (chatBox) {
            chatBox.innerHTML = "";
        }

        clearMemory();

        if (messageInput) {
            messageInput.value = "";
            messageInput.disabled = false;
            messageInput.focus();
        }

        if (sendButton) {
            sendButton.disabled = false;
            sendButton.textContent = "SEND";
        }

        addMessage(
            "J.A.R.V.I.S",
            "Memory cleared. System ready.",
            "ai"
        );
    }

    // ------------------------------------------
    // VOICE INPUT
    // ------------------------------------------

    function setupVoiceRecognition() {
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            return false;
        }

        recognition = new SpeechRecognition();

        recognition.lang = "en-IN";
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            isListening = true;

            if (micButton) {
                micButton.textContent = "STOP";
            }

            addMessage(
                "SYSTEM",
                "Listening... ippudu matladandi.",
                "ai"
            );
        };

        recognition.onresult = (event) => {
            const transcript =
                event.results[0][0].transcript;

            if (messageInput) {
                messageInput.value = transcript;
                messageInput.focus();
            }

            addMessage(
                "SYSTEM",
                "Voice text ga convert ayyindi. SEND press cheyyandi.",
                "ai"
            );
        };

        recognition.onerror = (event) => {
            console.error("Voice recognition error:", event.error);

            addMessage(
                "SYSTEM",
                "Voice input work avvaledu. Mic permission check cheyyandi.",
                "ai"
            );
        };

        recognition.onend = () => {
            isListening = false;

            if (micButton) {
                micButton.textContent = "🎙️";
            }
        };

        return true;
    }

    function toggleVoiceInput() {
        if (!recognition) {
            addMessage(
                "SYSTEM",
                "Mee browser voice input support cheyyadam ledu. Chrome lo try cheyyandi.",
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

    // ------------------------------------------
    // EVENT LISTENERS
    // ------------------------------------------

    if (sendButton) {
        sendButton.addEventListener("click", sendMessage);
    }

    if (clearButton) {
        clearButton.addEventListener("click", clearChat);
    }

    if (micButton) {
        micButton.addEventListener("click", toggleVoiceInput);
    }

    if (messageInput) {
        messageInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });
    }

    // Voice setup
    setupVoiceRecognition();

    // Old memory load
    loadMemory();

    console.log(
        "JARVIS Episode 5: Voice and Memory loaded successfully."
    );
});
        document.addEventListener("DOMContentLoaded", () => {
    // HTML elements
    const chatBox = document.getElementById("chat");
    const messageInput = document.getElementById("msg");
    const sendButton = document.getElementById("send");
    const clearButton = document.getElementById("clear-btn");
    const micButton = document.getElementById("mic-btn");

    // Memory settings
    const MEMORY_KEY = "jarvis_chat_memory";
    const MAX_MEMORY_MESSAGES = 50;

    let replyTimer = null;
    let recognition = null;
    let isListening = false;

    // ------------------------------------------
    // MEMORY SYSTEM
    // ------------------------------------------

    function getMemory() {
        try {
            const savedMemory = localStorage.getItem(MEMORY_KEY);
            return savedMemory ? JSON.parse(savedMemory) : [];
        } catch (error) {
            console.error("Memory read error:", error);
            return [];
        }
    }

    function saveToMemory(sender, text, type) {
        try {
            const memory = getMemory();

            memory.push({
                sender: sender,
                text: text,
                type: type,
                time: new Date().toISOString()
            });

            const limitedMemory =
                memory.slice(-MAX_MEMORY_MESSAGES);

            localStorage.setItem(
                MEMORY_KEY,
                JSON.stringify(limitedMemory)
            );
        } catch (error) {
            console.error("Memory save error:", error);
        }
    }

    function clearMemory() {
        try {
            localStorage.removeItem(MEMORY_KEY);
        } catch (error) {
            console.error("Memory clear error:", error);
        }
    }

    // ------------------------------------------
    // CHAT DISPLAY
    // ------------------------------------------

    function addMessage(sender, text, type, save = true) {
        if (!chatBox) return;

        const message = document.createElement("div");
        message.className = type === "user" ? "msg user" : "msg";

        const senderText = document.createElement("strong");
        senderText.textContent = `${sender}: `;

        const messageText = document.createTextNode(text);

        message.appendChild(senderText);
        message.appendChild(messageText);

        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;

        if (save) {
            saveToMemory(sender, text, type);
        }
    }

    function loadMemory() {
        const memory = getMemory();

        if (memory.length === 0) {
            addMessage(
                "J.A.R.V.I.S",
                "System online. Voice and memory ready.",
                "ai"
            );
            return;
        }

        memory.forEach((item) => {
            addMessage(
                item.sender,
                item.text,
                item.type,
                false
            );
        });
    }

    // ------------------------------------------
    // LOCAL JARVIS REPLY
    // ------------------------------------------

    function getJarvisReply(userMessage) {
        const message = userMessage.toLowerCase();

        if (
            message.includes("hello") ||
            message.includes("hi") ||
            message.includes("hai")
        ) {
            return "Hello Vamshi. J.A.R.V.I.S is ready.";
        }

        if (
            message.includes("who are you") ||
            message.includes("nee peru")
        ) {
            return "I am your personal J.A.R.V.I.S mobile assistant.";
        }

        if (
            message.includes("what can you do") ||
            message.includes("em cheyagalavu")
        ) {
            return "I can remember this chat, receive voice input, and speak my replies.";
        }

        if (
            message.includes("remember") ||
            message.includes("gurthu")
        ) {
            return "Okay Vamshi. Ee conversation memory lo save chesanu.";
        }

        return "Mee message receive ayyindi. Real AI brain next step lo connect cheddam.";
    }

    // ------------------------------------------
    // TEXT TO SPEECH
    // ------------------------------------------

    function speakText(text) {
        if (!("speechSynthesis" in window)) {
            return;
        }

        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-IN";
        speech.rate = 0.95;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    }

    // ------------------------------------------
    // SEND MESSAGE
    // ------------------------------------------

    function sendMessage() {
        if (!messageInput || !sendButton) return;

        const userMessage = messageInput.value.trim();

        if (!userMessage) return;

        addMessage("YOU", userMessage, "user");

        messageInput.value = "";
        messageInput.disabled = true;
        sendButton.disabled = true;
        sendButton.textContent = "...";

        replyTimer = setTimeout(() => {
            const jarvisReply = getJarvisReply(userMessage);

            addMessage("J.A.R.V.I.S", jarvisReply, "ai");
            speakText(jarvisReply);

            messageInput.disabled = false;
            sendButton.disabled = false;
            sendButton.textContent = "SEND";
            messageInput.focus();

            replyTimer = null;
        }, 600);
    }

    // ------------------------------------------
    // CLEAR CHAT AND MEMORY
    // ------------------------------------------

    function clearChat() {
        if (replyTimer) {
            clearTimeout(replyTimer);
            replyTimer = null;
        }

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        if (chatBox) {
            chatBox.innerHTML = "";
        }

        clearMemory();

        if (messageInput) {
            messageInput.value = "";
            messageInput.disabled = false;
            messageInput.focus();
        }

        if (sendButton) {
            sendButton.disabled = false;
            sendButton.textContent = "SEND";
        }

        addMessage(
            "J.A.R.V.I.S",
            "Memory cleared. System ready.",
            "ai"
        );
    }

    // ------------------------------------------
    // VOICE INPUT
    // ------------------------------------------

    function setupVoiceRecognition() {
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            return false;
        }

        recognition = new SpeechRecognition();

        recognition.lang = "en-IN";
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            isListening = true;

            if (micButton) {
                micButton.textContent = "STOP";
            }

            addMessage(
                "SYSTEM",
                "Listening... ippudu matladandi.",
                "ai"
            );
        };

        recognition.onresult = (event) => {
            const transcript =
                event.results[0][0].transcript;

            if (messageInput) {
                messageInput.value = transcript;
                messageInput.focus();
            }

            addMessage(
                "SYSTEM",
                "Voice text ga convert ayyindi. SEND press cheyyandi.",
                "ai"
            );
        };

        recognition.onerror = (event) => {
            console.error("Voice recognition error:", event.error);

            addMessage(
                "SYSTEM",
                "Voice input work avvaledu. Mic permission check cheyyandi.",
                "ai"
            );
        };

        recognition.onend = () => {
            isListening = false;

            if (micButton) {
                micButton.textContent = "🎙️";
            }
        };

        return true;
    }

    function toggleVoiceInput() {
        if (!recognition) {
            addMessage(
                "SYSTEM",
                "Mee browser voice input support cheyyadam ledu. Chrome lo try cheyyandi.",
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

    // ------------------------------------------
    // EVENT LISTENERS
    // ------------------------------------------

    if (sendButton) {
        sendButton.addEventListener("click", sendMessage);
    }

    if (clearButton) {
        clearButton.addEventListener("click", clearChat);
    }

    if (micButton) {
        micButton.addEventListener("click", toggleVoiceInput);
    }

    if (messageInput) {
        messageInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });
    }

    // Voice setup
    setupVoiceRecognition();

    // Old memory load
    loadMemory();

    console.log(
        "JARVIS Episode 5: Voice and Memory loaded successfully."
    );
});
        
