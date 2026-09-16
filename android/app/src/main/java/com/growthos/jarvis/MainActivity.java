package com.growthos.jarvis;

import android.Manifest;
import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import org.json.JSONObject;

/** Thin, secure WebView shell. The existing deployed frontend remains the UI. */
public final class MainActivity extends Activity {
    private static final int RECORD_AUDIO_REQUEST = 41;
    private static final int NOTIFICATION_REQUEST = 42;
    private WebView webView;
    private PermissionRequest pendingPermissionRequest;
    private boolean nativeWakeStartPending;
    private final BroadcastReceiver wakeReceiver = new BroadcastReceiver() {
        @Override public void onReceive(Context context, Intent intent) {
            if (WakeWordService.ACTION_COMMAND.equals(intent.getAction()) && webView != null) {
                String command = intent.getStringExtra(WakeWordService.EXTRA_COMMAND);
                if (command != null && !command.trim().isEmpty()) {
                    webView.evaluateJavascript("window.__kalkiNativeWakeCommand(" + JSONObject.quote(command.trim()) + ");", null);
                }
            }
        }
    };

    @Override protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        webView = new WebView(this);
        setContentView(webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.getSettings().setMediaPlaybackRequiresUserGesture(true);
        webView.addJavascriptInterface(new NativeWakeBridge(), "KalkiNative");
        IntentFilter filter = new IntentFilter(WakeWordService.ACTION_COMMAND);
        if (Build.VERSION.SDK_INT >= 33) registerReceiver(wakeReceiver, filter, Context.RECEIVER_NOT_EXPORTED);
        else registerReceiver(wakeReceiver, filter);
        webView.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) { return openExternalIfNeeded(request.getUrl()); }
            @Override public boolean shouldOverrideUrlLoading(WebView view, String url) { return openExternalIfNeeded(Uri.parse(url)); }
        });
        webView.setWebChromeClient(new WebChromeClient() {
            @Override public void onPermissionRequest(final PermissionRequest request) {
                runOnUiThread(() -> {
                    if (hasRecordAudioPermission() && isTrustedOrigin(request.getOrigin())) request.grant(new String[]{PermissionRequest.RESOURCE_AUDIO_CAPTURE});
                    else if (!hasRecordAudioPermission()) { pendingPermissionRequest = request; requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, RECORD_AUDIO_REQUEST); }
                    else request.deny();
                });
            }
        });
        String startUrl = BuildConfig.JARVIS_START_URL;
        if (!startUrl.startsWith("https://")) { Toast.makeText(this, "JARVIS URL must use HTTPS", Toast.LENGTH_LONG).show(); return; }
        webView.loadUrl(startUrl);
    }

    private final class NativeWakeBridge {
        @JavascriptInterface public void enableWakeWord() {
            runOnUiThread(() -> {
                if (!hasRecordAudioPermission()) { nativeWakeStartPending = true; requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, RECORD_AUDIO_REQUEST); return; }
                if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, NOTIFICATION_REQUEST);
                Intent service = new Intent(MainActivity.this, WakeWordService.class);
                if (Build.VERSION.SDK_INT >= 26) startForegroundService(service); else startService(service);
            });
        }
        @JavascriptInterface public void disableWakeWord() { runOnUiThread(() -> stopService(new Intent(MainActivity.this, WakeWordService.class).setAction(WakeWordService.ACTION_STOP))); }
        @JavascriptInterface public boolean isWakeWordNative() { return true; }
    }

    private boolean openExternalIfNeeded(Uri uri) { String scheme = uri.getScheme(); if ("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme)) return false; try { startActivity(new Intent(Intent.ACTION_VIEW, uri)); } catch (Exception ignored) { Toast.makeText(this, "No app can open this link", Toast.LENGTH_SHORT).show(); } return true; }
    private boolean isTrustedOrigin(Uri origin) { return origin != null && "https".equalsIgnoreCase(origin.getScheme()) && origin.getHost() != null; }
    private boolean hasRecordAudioPermission() { return checkSelfPermission(Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED; }
    @Override public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == RECORD_AUDIO_REQUEST && pendingPermissionRequest != null) { if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED && isTrustedOrigin(pendingPermissionRequest.getOrigin())) pendingPermissionRequest.grant(new String[]{PermissionRequest.RESOURCE_AUDIO_CAPTURE}); else pendingPermissionRequest.deny(); pendingPermissionRequest = null; }
        if (requestCode == RECORD_AUDIO_REQUEST && nativeWakeStartPending) { nativeWakeStartPending = false; if (hasRecordAudioPermission()) new NativeWakeBridge().enableWakeWord(); }
    }
    @Override public void onBackPressed() { if (webView != null && webView.canGoBack()) webView.goBack(); else super.onBackPressed(); }
    @Override protected void onDestroy() { try { unregisterReceiver(wakeReceiver); } catch (Exception ignored) { } if (webView != null) webView.destroy(); super.onDestroy(); }
}
