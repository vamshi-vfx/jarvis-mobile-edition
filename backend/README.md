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

## Production OAuth storage

Google OAuth and Supabase production environment variables are deployment-managed. Never commit OAuth secrets, Supabase service keys, encrypted token payloads, or user data to this repository.
