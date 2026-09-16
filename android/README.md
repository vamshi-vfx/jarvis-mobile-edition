# J.A.R.V.I.S. Android shell

This is a deliberately thin Android WebView wrapper around the existing deployed `frontend/`. It does not copy, replace, or bundle `frontend/script.js`, and it does not move backend credentials into the APK.

## Build

Open `android/` in Android Studio (Giraffe+ / Android Gradle Plugin 8.6.1), allow Gradle sync, then run the `app` configuration on an Android 8+ device. The OnePlus Nord CE3 5G (Android 15) is supported by the min/target SDK settings.

The default start URL is `https://jarvis-mobile-edition-alpha.vercel.app/`. For another HTTPS frontend deployment, set it at build time:

```bash
./gradlew :app:assembleDebug -PJARVIS_START_URL=https://your-frontend.example/
```

`JARVIS_START_URL` is a build-time value, not a secret. Keep the backend token, Gemini key, OAuth secrets, and bridge token server-side; the wrapper never embeds them. The existing frontend currently owns its backend endpoint configuration.

## Install

After a verified build, install the debug APK with Android Studio or:

```bash
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

The app asks for microphone permission only after the user enables the optional Wake word setting. The WebView wake-word mode is foreground-only and one-shot: it must be visibly armed, can be stopped, and performs no action unless an explicit command is recognized. It cannot provide reliable background wake-word behavior; a native foreground service (with its own notification, lifecycle, and permission handling) would be required for that and is intentionally not included. Links such as `whatsapp://send` are handed to the installed external app; normal HTTPS navigation stays in the WebView. Opening WhatsApp never sends a message.

## Verification status

This repository intentionally does not include a Gradle wrapper or a prebuilt APK yet. A machine with Android SDK/Gradle or Android Studio must perform the first build. Before distribution, verify Gradle dependency resolution, install on the OnePlus, microphone permission, backend health/command flow, and a signed release build. Release signing credentials must be supplied outside Git and are not part of this commit.
