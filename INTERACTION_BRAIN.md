# KALKI Interaction Brain

This release adds conversational guidance while preserving explicit-action-only safety.

- `backend/interaction-brain.js` classifies greetings, emotions, intent, incomplete requests, and recent context; it returns guidance for acknowledgement, empathy, one useful follow-up, clarification, and a next step.
- `GET /api/interaction/brain` exposes capabilities and policy.
- `POST /api/interaction/analyze` accepts `{text, messages, profile, preferences}` and returns conversational guidance without executing anything.
- `POST /api/interaction/greeting-preview` returns an opt-in preview only. It never sends, schedules, or invents calendar/tasks/weather data.
- The web client uses the guidance in its AI system instruction and can store local conversation-style controls: language, concise/detailed style, helpful follow-ups, and opt-in greeting preview.

Recent context is limited to the supplied/local chat history. No durable memory is claimed. External actions remain explicit and confirmation-gated. Background replies, scheduled greetings, and proactive notifications remain disabled until a real scheduler/notification channel and verified connectors are deployed.
