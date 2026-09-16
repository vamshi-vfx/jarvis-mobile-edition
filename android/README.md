# KALKI Android shell

Thin, secure Android WebView wrapper around the deployed `frontend/`. Package ID remains `com.growthos.jarvis`; no backend credentials or secrets are embedded. The build-time URL must be HTTPS and defaults to the GitHub Pages frontend.

## Phase 7 hardening
- KALKI logo is used as launcher/round icon; dark native theme and foreground wake notification are included.
- WebView disables file URL access, universal file access, cleartext traffic, mixed content and media autoplay. Only HTTPS pages stay in the WebView; custom schemes hand off to Android.
- Frontend file/image/PDF inputs use Android's system document picker (`onShowFileChooser`). Android share intents for image/PDF/other files and scoped HTTPS deep links are handed to the frontend as `jarvis-native-share` / `jarvis-native-deeplink` events; the app does not read or upload files by itself.
- `JarvisNative.permissionStatus()` reports microphone, camera and Android 13+ notification permission state. `openNotificationSettings()`, `openBatterySettings()` and `openAppSettings()` provide user-invoked settings handoffs.
- Wake word stays OFF by default, is never started at boot, and remains an explicit user action. The foreground notification includes Stop listening. SpeechRecognizer is not a production hotword engine.
- `nativeVersion()` is a non-network update-notification scaffold for the frontend; update checks and any installation remain user-controlled. No app-lock/PIN is enabled: a secure lock needs a verified keystore/biometric design and physical testing.

## Build and test
```bash
gradle --no-daemon assembleDebug
# optional URL override (must be HTTPS)
gradle --no-daemon :app:assembleDebug -PJARVIS_START_URL=https://your-frontend.example/
```

Install only after review with `adb install -r app/build/outputs/apk/debug/app-debug.apk`. On the OnePlus, test cold start/deep links, file picker and image/PDF share, camera/mic permission states, notification Stop action, explicit wake command delivery, denied permissions, battery settings, rotation/background-resume, and WebView error/retry behavior. Physical device testing and release signing are still required before production.
