# KALKI deployment

The repository contains a static frontend and a private Node backend. The intended production split is:

- **Backend:** Render web service created from the repository's `render.yaml` (`jarvis-secure-backend`, root directory `backend`). Render exposes the service URL used by the frontend, for example `https://jarvis-secure-backend.onrender.com`.
- **Frontend:** Vercel or GitHub Pages static hosting. The frontend must call that Render URL, not the Vercel frontend URL, for `/api/health`, `/api/command`, and other backend APIs.

## Render (backend)

1. In Render, create a Blueprint from this repository, or create a Node web service with the same settings as `render.yaml`:
   - root directory: `backend`
   - build command: `npm install`
   - start command: `npm start`
   - health check: `/api/health`
2. Keep `JARVIS_API_TOKEN` secret. The Blueprint generates one; do not copy it into the frontend or GitHub.
3. Set `ALLOWED_ORIGIN` to the final HTTPS frontend origin (for example `https://<project>.vercel.app`).
4. Leave `WPP_BRIDGE_URL`, `WPP_BRIDGE_TOKEN`, and `WPP_SELF_CHAT_ID` blank until a private bridge is deliberately provisioned.
5. Verify the public Render URL returns `ok: true` from `/api/health`.

## Vercel/frontend (last-mile configuration)

Update the frontend's backend base/health and command URLs to the final Render HTTPS URL, then redeploy the static frontend. Do not set the backend URL to the Vercel frontend URL and do not expose `JARVIS_API_TOKEN` in Vercel client-side variables. After deployment, check that the frontend loads and that a read-only health request succeeds.

## Launch contract and billing safety

`GET /api/beta/access` and `GET /api/entitlements/status` are safe aliases for the process-memory entitlement scaffolding. `POST /api/beta/access` only records a pending request; it cannot approve access. Approval remains on the protected admin route `POST /api/admin/beta-access`, which requires the server token. No secrets or tokens are returned by these endpoints.

Billing remains disabled: checkout returns `BILLING_DISABLED`, webhook verification is a placeholder, and no provider SDK, charge, entitlement upgrade, or payment state change is enabled. Do not add billing credentials or enable checkout as part of this deployment.

The backend is explicit-command-only. It does not poll chats or auto-reply. Connectors are invoked only through authenticated commands from the KALKI frontend.
