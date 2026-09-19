# KALKI Interaction Brain foundation

This release adds a safe conversational foundation without background work.

- `backend/interaction-brain.js` defines the policy, intent classification, context signals, clarification templates, and morning-greeting preview.
- `GET /api/interaction/brain` exposes capabilities and safety policy.
- `POST /api/interaction/analyze` accepts `{text, messages, profile, preferences}` and returns intent, continuity signals, and (when needed) a clarification question.
- `POST /api/interaction/greeting-preview` returns an opt-in preview only. It never sends, schedules, or invents calendar/tasks data.
- `/api/command` now returns a clarification response before any provider route when required fields are missing.

External actions remain explicit and confirmation-gated. Background replies and proactive notifications remain disabled. Profile/context persistence is still client-controlled or process-memory until encrypted durable storage is deployed. Real morning delivery additionally needs an enabled scheduler/notification channel and verified Calendar/Tasks connectors.
