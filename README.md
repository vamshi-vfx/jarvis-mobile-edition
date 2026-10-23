# jarvis-mobile-edition

**MY JARVIS AI ASSISTANT** — KALKI, a personal AI assistant: static web app + secure Node backend + Android + desktop agent.

## Live demo

- **Website (GitHub Pages):** https://vamshi-vfx.github.io/jarvis-mobile-edition/
- The old Vercel link (`jarvis-mobile-edition-alpha.vercel.app`) is **dead (404)** — the Pages URL above is the working demo.

## Run the full demo locally (no API key needed)

```bash
# 1) backend (port 8787)
cd backend
npm install
cp .env.example .env      # then edit values
npm start                 # loads .env automatically

# 2) frontend (port 8000)
cd ../frontend
python -m http.server 8000
# open http://localhost:8000
```

- Chat works **without any Gemini key** (falls back to the free keyless brain).
- With a Gemini key in Settings, the Gemini models are used first.
- Backend routes: `GET /api/health`, `POST /api/command`, tools & skills listed there.
- On your phone (same WiFi): `http://<your-PC-IP>:8000`.

## Recent fixes (completion pass)

- `backend/server.js`: fixed broken require (`./advanced-intelligence-backend` → `./advanced-intelligence`) — backend previously crashed on start.
- `backend/package.json`: `npm start` now loads `.env` (`node --env-file=.env`).
- `frontend/script.js`:
  - backend URLs auto-detect local demo (`:8787` on the same host) vs. production (Render),
  - **keyless AI fallback** — chat works out of the box without a Gemini API key.

## Deploy (production)

See [DEPLOYMENT.md](DEPLOYMENT.md): backend on Render (`render.yaml`), frontend on Vercel or GitHub Pages.
