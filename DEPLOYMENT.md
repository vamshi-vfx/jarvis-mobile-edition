# JARVIS deployment

The repository now has a static frontend and a private Node backend.

## Backend deployment

Use the included `render.yaml` with a Render web service. Set:

- `ALLOWED_ORIGIN` to the deployed frontend URL
- `JARVIS_API_TOKEN` to a long random secret
- `WPP_BRIDGE_URL` and `WPP_BRIDGE_TOKEN` only after a private WhatsApp bridge is provisioned

Never place these values in `frontend/` or commit them to GitHub.

## Behavior

The backend is explicit-command-only. It does not poll chats or auto-reply. Connectors are invoked only through authenticated commands from the JARVIS frontend.
