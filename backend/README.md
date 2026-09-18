# JARVIS secure backend

This backend is the command/skill gateway for the JARVIS frontend.

## Safety behavior

- No background listener or automatic WhatsApp replies.
- A skill executes only after an explicit `/api/command` request.
- Every protected route requires `Authorization: Bearer <JARVIS_API_TOKEN>`.
- WhatsApp credentials stay server-side in environment variables.

## Run

```bash
cp .env.example .env
node server.js
```

The WhatsApp provider is intentionally an adapter (`WPP_BRIDGE_URL`). It can be connected to an approved private WhatsApp bridge later without exposing session credentials in the public repository.

## KALKI WhatsApp bridge control plane (scaffold)

`whatsapp-bridge.js` is a safety-first control plane, not a WhatsApp client. It provides status, read-only health and pairing placeholders, selected chat/group allowlists, keyword/mention rules, pause/stop controls, approval-gated scoped auto-reply opt-in, audit entries, duplicate suppression, and conservative rate-limit defaults. State is process-memory only and defaults to `manual_draft_only`, paused, and no auto-reply.

Routes:

- `GET /api/whatsapp/bridge/status` (safe status; no secrets)
- `GET /api/whatsapp/bridge/health` (read-only placeholder; never contacts WhatsApp)
- Admin-protected POST routes for `/pair`, `/configure`, `/controls`, `/allowlist`, `/rules`, `/intake`; admin-protected `GET /audit`

No real WhatsApp message is sent or read by this scaffold. End-to-end automation must not be claimed until a dedicated bridge is deployed, paired, read-only health verified, and the user explicitly enables a scoped rule. Unofficial WhatsApp Web bridges can violate terms, expose message metadata/session data, and create account-ban or privacy risk; review those risks before deployment. The official WhatsApp Business Cloud API is the safer alternative, subject to Meta app review, webhooks, template/recipient policy, and Business account requirements.

## Production OAuth storage

Google OAuth and Supabase production environment variables are deployment-managed. Never commit OAuth secrets, Supabase service keys, encrypted token payloads, or user data to this repository.
