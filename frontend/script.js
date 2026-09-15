document.addEventListener("DOMContentLoaded", () => {
    // index.html lo unna correct IDs
    const chatBox = document.getElementById("chat");
    const messageInput = document.getElementById("msg");
    const sendButton = document.getElementById("send");
    const clearButton = document.getElementById("clear-btn");
    const micButton = document.getElementById("mic-btn");

    let replyTimer = null;

    function addMessage(sender, text, type) {
        if (!chatBox) return;

        const message = document.createElement("div");

        if (type === "user") {
            message.className = "msg user";
        } else {
            message.className = "msg";
        }

        message.innerHTML =
            `<strong>${sender}:</strong> `;

        const textContent = document.createTextNode(text);
        message.appendChild(textContent);

        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

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
            return "Currently I can receive messages and reply through this chat system.";
        }

        return "Mee message receive ayyindi. Real AI connection next step lo add cheddam.";
    }

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

            messageInput.disabled = false;
            sendButton.disabled = false;
            sendButton.textContent = "SEND";
            messageInput.focus();

            replyTimer = null;
        }, 600);
    }

    function clearChat() {
        if (replyTimer) {
            clearTimeout(replyTimer);
            replyTimer = null;
        }

        if (chatBox) {
            chatBox.innerHTML = "";
        }

        if (messageInput) {
            messageInput.value = "";
            messageInput.disabled = false;
            messageInput.focus();
        }

        if (sendButton) {
            sendButton.disabled = false;
            sendButton.textContent = "SEND";
        }
    }

    function showVoiceMessage() {
        addMessage(
            "SYSTEM",
            "Voice feature Episode 6 lo add cheddam.",
            "ai"
        );
    }

    // Button events
    if (sendButton) {
        sendButton.addEventListener("click", sendMessage);
    }

    if (clearButton) {
        clearButton.addEventListener("click", clearChat);
    }

    if (micButton) {
        micButton.addEventListener("click", showVoiceMessage);
    }

    // Enter key send
    if (messageInput) {
        messageInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });
    }

    // Welcome message
    addMessage(
        "J.A.R.V.I.S",
        "System online. Text chat core ready.",
        "ai"
    );

    console.log("JARVIS Episode 5 Step 1 loaded successfully.");
});
