# KALKI Advanced Intelligence foundation

This repository contains provider-neutral scaffolding for a consent-first upgrade. It is not a promise that a lightweight WebView can provide these capabilities.

## Boundaries
- `android/.../AdvancedIntelligenceBridge.java` exposes only explicit screen-capture consent (MediaProjection), camera permission, user-selected source files, and a small allowlist of Android Settings intents. It does not capture, record, launch arbitrary packages, or execute destructive/system actions.
- `frontend/advanced-intelligence.js` renders a resizable glass-style status panel with hybrid keyboard/voice compatibility and local execution status. The panel always shows unavailable states rather than simulating capabilities.
- `backend/advanced-intelligence-backend.js` defines adapter boundaries for Gemini Live and OpenRouter. Provider secrets remain server-side environment variables; they must never be placed in the APK or frontend.
- Multi-step planning is preview-only. Every step is marked approval-required and the endpoint never executes a plan.
- PDF/source/image handling uses Android's user-selected document flow and the existing WebView share preview. Persistent memory remains an explicit-save interface to be connected to a durable store later.

## Consent and testing rules
No background microphone, background screen capture, webcam access, autonomous app/system control, external sends, or provider uploads are enabled by this foundation. Real voice/vision/provider adapters require credentials, backend policy review, and physical OnePlus testing with the user granting each Android prompt.
