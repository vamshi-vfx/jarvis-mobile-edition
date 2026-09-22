# KALKI Android shell

Thin, secure Android WebView wrapper around the deployed `frontend/`. Package ID remains `com.growthos.jarvis`; no backend credentials, API keys, or bundled secrets are embedded. The build-time URL must be HTTPS and defaults to the GitHub Pages frontend.

## Final KALKI wake experience
- Wake is OFF by default and is never started at boot. The user explicitly enables it from the frontend and grants microphone/notification permissions.
- `WakeWordService.java` is an Android foreground microphone service with a visible ongoing notification and a **Stop KALKI** action. It uses `START_STICKY` only after explicit enablement so Android can reconnect the user-enabled service after process pressure; it does not create a boot receiver and an explicit Stop destroys it.
- Android 12+ requests the platform on-device `SpeechRecognizer` when the device exposes one and also sets `EXTRA_PREFER_OFFLINE`; otherwise it uses the platform recognizer. This is the strongest no-secret, low-latency implementation available without shipping a third-party model. It is **not** a deterministic always-on hotword engine: recognition availability, Telugu/English language packs, OEM policy, and network fallback remain device-dependent.
- Both **“Hey KALKI”** and legacy **“Hey Jarvis”** are accepted. On a bare wake phrase the service speaks the exact Telugu acknowledgement **“చెప్పండి Boss”**, then listens for one command. A wake phrase with an inline command is also supported.
- “Stop KALKI” / “Stop Jarvis” stops the foreground listener. External actions remain explicit; no incoming-message auto-replies or automatic messaging are implemented.
- Telugu TTS uses `te-IN` when the device has the voice data and safely falls back to `en-IN` only if Telugu TTS data is unavailable. The acknowledgement text is not changed.

## Honest platform limitations
A home-screen/locked-screen demonstration is **not claimed until physical OnePlus testing**. Android may restrict microphone recognition after force-stop, OEM battery management, denied permissions, missing language data, or user/system microphone privacy controls. Force-stopping KALKI from Android Settings is a deliberate hard stop that a foreground service cannot bypass; the user must reopen the app and enable wake again. Disable battery optimization only if the user chooses to do so in Android settings.

No bundled Porcupine/Vosk/wake-word model was added: shipping one would require selecting and complying with its license/model terms, increasing APK size, and validating Telugu-accent accuracy. The platform on-device recognizer is therefore used where available rather than pretending a legal offline keyword model exists.

## Build and test
```bash
gradle --no-daemon assembleDebug
# optional URL override (must be HTTPS)
gradle --no-daemon :app:assembleDebug -PJARVIS_START_URL=https://your-frontend.example/
```

Install only after review with `adb install -r app/build/outputs/apk/debug/app-debug.apk`. On the OnePlus Nord CE3 5G, test cold start, explicit enable, denied mic/notification permission states, Telugu TTS voice data, “Hey KALKI” and “Hey Jarvis”, bare wake + command, inline command, Stop KALKI, notification Stop KALKI, background/home screen, locked screen, force-stop, battery optimization, reconnect after process pressure, and WebView command delivery. Physical device testing and release signing remain required before production claims.
