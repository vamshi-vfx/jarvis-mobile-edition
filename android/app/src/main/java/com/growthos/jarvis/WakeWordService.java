package com.growthos.jarvis;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.speech.tts.TextToSpeech;

import java.util.ArrayList;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Explicitly enabled, user-visible microphone foreground service; never started at boot.
 *
 * Android's SpeechRecognizer is an utterance recognizer, not a true always-on keyword
 * engine. On Android 12+ this requests the platform on-device recognizer when available
 * (no app secret and lower latency); otherwise it falls back to the platform recognizer.
 * This is not a bundled hotword model and availability depends on the device language pack.
 */
public final class WakeWordService extends Service {
    public static final String ACTION_COMMAND = "com.growthos.jarvis.WAKE_COMMAND";
    public static final String EXTRA_COMMAND = "command";
    public static final String ACTION_STOP = "com.growthos.jarvis.STOP_WAKE";
    private static final String CHANNEL = "jarvis_wake_word";
    private static final int NOTIFICATION_ID = 812;
    private static final long RESTART_DELAY_MS = 55L;
    private static final long RETRY_DELAY_MS = 300L;
    private static final long DUPLICATE_CALLBACK_WINDOW_MS = 650L;
    private static final String ACK = "చెప్పండి Boss";
    private static final Pattern WAKE = Pattern.compile(
            "^(?:hey|hai|hi)\\s+(?:kalki|kalkee|kalky|jarvis|jaarvis|jarv(?:i|e)s|jervis)\\b[,:;.!?\\s]*(.*)$",
            Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE);
    private static final Pattern STOP = Pattern.compile(
            "^(?:stop|స్టాప్)\\s+(?:kalki|కల్కి|jarvis|జార్విస్)\\b.*$",
            Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE);

    private enum Mode { WAKE, COMMAND }
    private final Handler handler = new Handler(Looper.getMainLooper());
    private SpeechRecognizer recognizer;
    private TextToSpeech tts;
    private Mode mode = Mode.WAKE;
    private boolean listening;
    private boolean stopping;
    private boolean ttsReady;
    private long session;
    private long handledSession = -1L;
    private String lastCallbackText = "";
    private long lastCallbackAt;
    private final Runnable startRunnable = this::startRecognition;

    @Override public void onCreate() {
        super.onCreate();
        createChannel();
        startForeground(NOTIFICATION_ID, notification());
        tts = new TextToSpeech(this, status -> {
            ttsReady = status == TextToSpeech.SUCCESS;
            if (ttsReady) {
                int result = tts.setLanguage(new Locale("te", "IN"));
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED)
                    tts.setLanguage(new Locale("en", "IN"));
            }
        });
        if (!SpeechRecognizer.isRecognitionAvailable(this)) return;
        if (Build.VERSION.SDK_INT >= 31 && SpeechRecognizer.isOnDeviceRecognitionAvailable(this))
            recognizer = SpeechRecognizer.createOnDeviceSpeechRecognizer(this);
        else recognizer = SpeechRecognizer.createSpeechRecognizer(this);
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
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-IN");
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, "en-IN");
        i.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true);
        i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, 850L);
        i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS, 650L);
        i.putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, 250L);
        if (Build.VERSION.SDK_INT >= 31) i.putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE, true);
        return i;
    }
    private void scheduleRestart(long delayMs) {
        if (stopping || recognizer == null) return;
        handler.removeCallbacks(startRunnable); handler.postDelayed(startRunnable, delayMs);
    }
    private void startRecognition() {
        if (stopping || recognizer == null || listening) return;
        try { session++; handledSession = -1L; lastCallbackText = ""; listening = true; recognizer.startListening(speechIntent()); }
        catch (Exception ignored) { listening = false; scheduleRestart(RETRY_DELAY_MS); }
    }
    private String text(Bundle b) {
        ArrayList<String> list = b == null ? null : b.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
        return list == null || list.isEmpty() || list.get(0) == null ? "" : list.get(0).trim();
    }
    private void handlePartial(Bundle b) {
        if (mode != Mode.WAKE || handledSession == session) return;
        String value = text(b); if (value.isEmpty()) return;
        Matcher m = WAKE.matcher(value);
        if (m.matches()) { handledSession = session; listening = false; try { recognizer.cancel(); } catch (Exception ignored) { }
            onWake(m.group(1) == null ? "" : m.group(1).trim()); scheduleRestart(RESTART_DELAY_MS); }
    }
    private void handle(Bundle b) {
        listening = false; if (handledSession == session) { scheduleRestart(RESTART_DELAY_MS); return; }
        String value = text(b); long now = android.os.SystemClock.elapsedRealtime();
        if (value.equalsIgnoreCase(lastCallbackText) && now - lastCallbackAt < DUPLICATE_CALLBACK_WINDOW_MS) { scheduleRestart(RESTART_DELAY_MS); return; }
        lastCallbackText = value; lastCallbackAt = now; handledSession = session;
        if (mode == Mode.WAKE) { Matcher m = WAKE.matcher(value); if (m.matches()) onWake(m.group(1) == null ? "" : m.group(1).trim()); }
        else { mode = Mode.WAKE; if (!value.isEmpty()) { if (isStop(value)) stopWithSpeech(); else emit(value); } }
        scheduleRestart(RESTART_DELAY_MS);
    }
    private void onWake(String command) {
        speak(ACK); mode = Mode.WAKE;
        if (command != null && !command.isEmpty()) { if (isStop(command)) stopWithSpeech(); else emit(command); }
        else mode = Mode.COMMAND;
    }
    private boolean isStop(String value) { return STOP.matcher(value.trim()).matches() || value.trim().equalsIgnoreCase("stop kalki"); }
    private void emit(String command) {
        if (command == null || command.trim().isEmpty()) return;
        mode = Mode.WAKE; sendBroadcast(new Intent(ACTION_COMMAND).setPackage(getPackageName()).putExtra(EXTRA_COMMAND, command.trim()));
    }
    private void speak(String value) { if (ttsReady && tts != null) tts.speak(value, TextToSpeech.QUEUE_FLUSH, null, "kalki-ack"); }
    private void stopWithSpeech() { speak("ఆపుతున్నాను Boss"); stopping = true; handler.removeCallbacksAndMessages(null); stopSelf(); }

    private Notification notification() {
        Intent stop = new Intent(this, WakeWordService.class).setAction(ACTION_STOP);
        PendingIntent pi = PendingIntent.getService(this, 1, stop, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        return new Notification.Builder(this, CHANNEL).setSmallIcon(R.drawable.kalki_logo)
                .setContentTitle("KALKI wake word active")
                .setContentText("Listening in foreground · say “Hey KALKI” or “Hey Jarvis”")
                .setOngoing(true).setCategory(Notification.CATEGORY_SERVICE)
                .addAction(new Notification.Action.Builder(null, "Stop KALKI", pi).build()).build();
    }
    private void createChannel() { ((NotificationManager)getSystemService(NOTIFICATION_SERVICE)).createNotificationChannel(new NotificationChannel(CHANNEL, "KALKI microphone", NotificationManager.IMPORTANCE_LOW)); }
    @Override public int onStartCommand(Intent intent, int flags, int id) {
        if (ACTION_STOP.equals(intent == null ? null : intent.getAction())) { stopping = true; handler.removeCallbacksAndMessages(null); stopSelf(); }
        return START_STICKY;
    }
    @Override public void onDestroy() {
        stopping = true; handler.removeCallbacksAndMessages(null);
        if (recognizer != null) { try { recognizer.cancel(); } catch (Exception ignored) { } recognizer.destroy(); }
        if (tts != null) { tts.stop(); tts.shutdown(); } super.onDestroy();
    }
    @Override public IBinder onBind(Intent intent) { return null; }
}
