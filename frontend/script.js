// ==========================================
// JARVIS MOBILE EDITION - CORE SCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // index.html lo unna correct IDs
    const sendBtn = document.getElementById("send");
    const clearBtn = document.getElementById("clear-btn");
    const micBtn = document.getElementById("mic-btn");
    const inputBox = document.getElementById("msg");
    const chatContainer = document.getElementById("chat");

    // Gemini model
    const MODEL_NAME = "gemini-3.6-flash";
    const API_KEY_STORAGE = "jarvis_gemini_api_key";

    // API key ni GitHub code lo direct ga pettakunda browser lo save chestundi
    function getApiKey() {
        let key = localStorage.getItem(API_KEY_STORAGE);

        if (!key) {
            key = prompt("Mee Gemini API Key enter cheyyandi:");

            if (key && key.trim()) {
                key = key.trim();
                localStorage.setItem(API_KEY_STORAGE, key);
            }
        }

        return key;
    }

    // User text ni safe ga display cheyyadaniki
    function escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    // Chat message display
    function appendMessage(sender, text, color) {
        if (!chatContainer) return;

        const messageDiv = document.createElement("div");

        messageDiv.style.borderLeft = `3px solid ${color}`;
        messageDiv.style.padding = "10px";
        messageDiv.style.marginBottom = "10px";
        messageDiv.style.background = "rgba(0, 255, 255, 0.05)";
        messageDiv.style.fontFamily = "monospace";
        messageDiv.style.color = color;

        messageDiv.innerHTML =
            `<strong>\({escapeHtml(sender)}:</strong> \){escapeHtml(text)}`;

        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Gemini API call
    async function askJarvis(message) {
        const apiKey = getApiKey();

        if (!apiKey) {
            throw new Error("API key enter cheyyaledu.");
        }

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
                contents: [
                    {
                        parts: [
                            {
                                text: message
                            }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            const errorMessage =
                data?.error?.message || "Gemini API request failed.";
            throw new Error(errorMessage);
        }

        const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!reply) {
            throw new Error("AI response empty ga undi.");
        }

        return reply;
    }

    // SEND button
    async function sendMessage() {
        if (!inputBox || !sendBtn) return;

        const message = inputBox.value.trim();

        if (!message) return;

        appendMessage("YOU", message, "#00ffff");

        inputBox.value = "";
        inputBox.disabled = true;
        sendBtn.disabled = true;
        sendBtn.textContent = "...";

        try {
            const reply = await askJarvis(message);
            appendMessage("J.A.R.V.I.S", reply, "#00ff00");
        } catch (error) {
            console.error("JARVIS Error:", error);

            appendMessage(
                "SYSTEM",
                `Error: ${error.message}`,
                "#ff3333"
            );
        } finally {
            inputBox.disabled = false;
            sendBtn.disabled = false;
            sendBtn.textContent = "SEND";
            inputBox.focus();
        }
    }

    // CLEAR button
    function clearChat() {
        if (chatContainer) {
            chatContainer.innerHTML = "";
        }

        if (inputBox) {
            inputBox.value = "";
            inputBox.focus();
        }
    }

    // Voice feature next episode lo add cheddam
    function startVoiceModule() {
        alert("Voice module next episode lo add cheddam.");
    }

    // Event listeners
    if (sendBtn) {
        sendBtn.addEventListener("click", sendMessage);
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", clearChat);
    }

    if (micBtn) {
        micBtn.addEventListener("click", startVoiceModule);
    }

    // Enter press chesina send avvali
    if (inputBox) {
        inputBox.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });
    }

    console.log("J.A.R.V.I.S Mobile Edition loaded successfully.");
});
