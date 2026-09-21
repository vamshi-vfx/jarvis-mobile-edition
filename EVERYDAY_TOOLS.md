# KALKI Everyday Tools

All Everyday Tools are registered in `backend/everyday-tools.js` and are reached through the existing `POST /api/command` interaction brain. Every tool is **explicit-action-only**: passive chat, incoming messages, timers, and wake-word arming never trigger actions.

## Local tools

Time uses Asia/Kolkata; dice/coin, jokes, motivation, and cryptographic strong-password generation work without a provider. Passwords are generated in memory and never stored. YouTube/Google/Wikipedia/song actions only open a URL after an explicit command; they never auto-play, send, or reply.

Timer returns a duration to the frontend. The browser starts the countdown only after the command is accepted, then uses an in-app spoken result and Notification API when permitted. Browser/WebView suspension, notification permission, and voice availability can limit delivery; no background guarantee is claimed.

## Provider-backed tools

Bitcoin uses CoinGecko, currency conversion uses Frankfurter, and Wikipedia uses the Wikipedia REST API through server-side fetches. Weather, tech news, word meaning, and English→Telugu translation intentionally return a clear unavailable/provider-not-connected response until a safe provider is configured. No secret, API key, estimated number, headline, definition, or translation is placed in frontend code or invented.

`GET /api/tools` exposes registry metadata only. `GET /api/health` reports the tool IDs. Android uses the same frontend bridge and supports browser URL opening, timer notifications, and speech only where the WebView grants those capabilities. Provider credentials, if later added, must remain server environment variables.
