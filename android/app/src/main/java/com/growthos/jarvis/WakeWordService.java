package com.growthos.jarvis;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;

import java.util.ArrayList;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Explicitly enabled, user-visible foreground speech service; never started at boot.
 *
 * SpeechRecognizer is an utterance recognizer, not a hotword detector.  The service
 * therefore uses a short, continuously re-armed utterance loop.  A real offline
 * keyword engine is still required for production-grade always-on wake detection.
 */
public final class WakeWordService extends Service {
    public static final String ACTION_COMMAND = "com.growthos.jarvis.WAKE_COMMAND";
    public static final String EXTRA_COMMAND = "command";
    public static final String ACTION_STOP = "com.growthos.jarvis.STOP_WAKE";
    private static final String CHANNEL = "jarvis_wake_word";
    private static final int NOTIFICATION_ID = 812;
    private static final long RESTART_DELAY_MS = 35L;
    private static final long RETRY_DELAY_MS = 250L;
    private static final long DUPLICATE_CALLBACK_WINDOW_MS = 650L;
    private static final Pattern WAKE = Pattern.compile(
            "^(?:hey|hai|hi)\\s+(?:jarvis|jaarvis|jarv(?:i|e)s|jervis)\\b[,:;.!?\\s]*(.*)$",
            Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE);

    private enum Mode { WAKE, COMMAND }
    private final Handler handler = new Handler(Looper.getMainLooper());
    private SpeechRecognizer recognizer;
    private Mode mode = Mode.WAKE;
    private boolean listening;
    private boolean stopping;
    private long session;
    private long handledSession = -1L;
    private String lastCallbackText = "";
    private long lastCallbackAt;
    private final Runnable startRunnable = this::startRecognition;

    @Override public void onCreate() {
        super.onCreate();
        createChannel();
        startForeground(NOTIFICATION_ID, notification());
        if (!SpeechRecognizer.isRecognitionAvailable(this)) return;
        recognizer = SpeechRecognizer.createSpeechRecognizer(this);
        recognizer.setRecognitionListener(new RecognitionListener() {
            @Override public void onResults(Bundle results) { handle(results); }
            @Override public void onPartialResults(Bundle results) { handlePartial(results); }
            @Override public void onError(int error) { listening = false; scheduleRestart(RETRY_DELAY_MS); }
            @Override public void onEndOfSpeech() { listening = false; scheduleRestart(RESTART_DELAY_MS); }
            @Override public void onReadyForSpeech(Bundle b) { }
            @Override public void onBeginningOfSpeech() { }
            @Override public void onBufferReceived(byte[] b) { }
            @Override public void onEvent(int t, Bundle b) { }
            @Override public void onRmsChanged(float r) { }
        });
        scheduleRestart(0L);
    }

    private Intent speechIntent() {
        Intent i = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        // en-IN generally returns Telugu-English speech more reliably than forcing Telugu.
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-IN");
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, "en-IN");
        i.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true);
        // Keep each wake window short so the next phrase is armed quickly.
        i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, 850L);
        i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS, 650L);
        i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, 250L);
        return i;
    }

    private void scheduleRestart(long delayMs) {
        if (stopping || recognizer == null) return;
        handler.removeCallbacks(startRunnable);
        handler.postDelayed(startRunnable, delayMs);
    }

    private void startRecognition() {
        if (stopping || recognizer == null || listening) return;
        try {
            // cancel() is intentionally not called here: calling it while a prior
            // callback is unwinding causes dropped consecutive phrases on some OEMs.
            session++;
            handledSession = -1L;
            lastCallbackText = "";
            listening = true;
            recognizer.startListening(speechIntent());
        } catch (Exception ignored) {
            listening = false;
            scheduleRestart(RETRY_DELAY_MS);
        }
    }

    private String text(Bundle b) {
        ArrayList<String> list = b == null ? null : b.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
        return list == null || list.isEmpty() || list.get(0) == null ? "" : list.get(0).trim();
    }

    private void handlePartial(Bundle b) {
        if (mode != Mode.WAKE || handledSession == session) return;
        String value = text(b);
        if (value.isEmpty()) return;
        Matcher m = WAKE.matcher(value);
        // A phrase containing a command can be delivered immediately from partial
        // results, reducing perceived latency; a bare wake moves to command mode.
        if (m.matches()) {
            handledSession = session;
            listening = false;
            try { recognizer.cancel(); } catch (Exception ignored) { }
            String command = m.group(1) == null ? "" : m.group(1).trim();
            if (command.isEmpty()) mode = Mode.COMMAND; else emit(command);
            scheduleRestart(RESTART_DELAY_MS);
        }
    }

    private void handle(Bundle b) {
        listening = false;
        if (handledSession == session) { scheduleRestart(RESTART_DELAY_MS); return; }
        String value = text(b);
        long now = android.os.SystemClock.elapsedRealtime();
        // A few providers report the same final result twice. Ignore only that
        // callback duplicate; separate utterances remain eligible immediately.
        if (value.equalsIgnoreCase(lastCallbackText) && now - lastCallbackAt < DUPLICATE_CALLBACK_WINDOW_MS) {
            scheduleRestart(RESTART_DELAY_MS); return;
        }
        lastCallbackText = value; lastCallbackAt = now; handledSession = session;
        if (mode == Mode.WAKE) {
            Matcher m = WAKE.matcher(value);
            if (m.matches()) {
                String command = m.group(1) == null ? "" : m.group(1).trim();
                try { recognizer.cancel(); } catch (Exception ignored) { }
                if (command.isEmpty()) mode = Mode.COMMAND; else emit(command);
            }
        } else {
            mode = Mode.WAKE;
            if (!value.isEmpty()) emit(value); else scheduleRestart(RESTART_DELAY_MS);
        }
        scheduleRestart(RESTART_DELAY_MS);
    }

    private void emit(String command) {
        if (command == null || command.trim().isEmpty()) return;
        mode = Mode.WAKE;
        sendBroadcast(new Intent(ACTION_COMMAND).setPackage(getPackageName()).putExtra(EXTRA_COMMAND, command.trim()));
    }

    private Notification notification() {
        Intent stop = new Intent(this, WakeWordService.class).setAction(ACTION_STOP);
        PendingIntent pi = PendingIntent.getService(this, 1, stop, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        return new Notification.Builder(this, CHANNEL).setSmallIcon(R.drawable.kalki_logo)
                .setContentTitle("KALKI wake word active")
                .setContentText("Listening in the foreground — say “Hey Jarvis”.")
                .setOngoing(true).setCategory(Notification.CATEGORY_SERVICE)
                .addAction(new Notification.Action.Builder(null, "Stop listening", pi).build()).build();
    }

    private void createChannel() {
        ((NotificationManager) getSystemService(NOTIFICATION_SERVICE)).createNotificationChannel(
                new NotificationChannel(CHANNEL, "JARVIS wake word", NotificationManager.IMPORTANCE_LOW));
    }

    @Override public int onStartCommand(Intent intent, int flags, int id) {
        if (ACTION_STOP.equals(intent == null ? null : intent.getAction())) stopSelf();
        return START_NOT_STICKY;
    }

    @Override public void onDestroy() {
        stopping = true; handler.removeCallbacksAndMessages(null);
        if (recognizer != null) { try { recognizer.cancel(); } catch (Exception ignored) { } recognizer.destroy(); }
        super.onDestroy();
    }

    @Override public IBinder onBind(Intent intent) { return null; }
}
