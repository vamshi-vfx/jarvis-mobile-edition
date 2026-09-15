

// Backend command bridge: explicit commands only.
const BACKEND_COMMAND_URL = "https://jarvis-mobile-edition-alpha.vercel.app/api/command";
async function sendExplicitCommandToBackend(text) {
    const response = await fetch(BACKEND_COMMAND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data?.message || "Backend command failed.");
    const result = data?.result || data;
    if (result?.message) showMessage("J.A.R.V.I.S", result.message, "ai");
    else showMessage("J.A.R.V.I.S", JSON.stringify(result), "ai");
    return result;
}

// Capture the send action before the legacy local handler, routing explicit skills to the backend.
document.addEventListener("click", (event) => {
    if (event.target !== sendButton) return;
    const text = messageInput?.value.trim();
    if (!text || !detectSkill(text) || !isExplicitAction(text)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showMessage("YOU", text, "user");
    messageInput.value = "";
    sendExplicitCommandToBackend(text).catch((error) => showMessage("SYSTEM", error.message, "ai"));
}, true);

document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.target !== messageInput) return;
    const text = messageInput?.value.trim();
    if (!text || !detectSkill(text) || !isExplicitAction(text)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showMessage("YOU", text, "user");
    messageInput.value = "";
    sendExplicitCommandToBackend(text).catch((error) => showMessage("SYSTEM", error.message, "ai"));
}, true);
