package com.growthos.jarvis;

import android.Manifest;
import android.app.Activity;
import android.content.*;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.*;
import android.provider.Settings;
import android.webkit.*;
import android.widget.Toast;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.*;

/** Thin, secure WebView shell with explicit, preview-only Android share handoff. */
public final class MainActivity extends Activity {
    private static final int AUDIO_REQUEST=41, WAKE_REQUEST=42, FILE_REQUEST=43;
    private WebView webView; private AdvancedIntelligenceBridge advancedBridge; private PermissionRequest pendingPermissionRequest; private ValueCallback<Uri[]> fileCallback;
    private String pendingShareJson;
    private final BroadcastReceiver wakeReceiver=new BroadcastReceiver(){ public void onReceive(Context c,Intent i){
        if(!WakeWordService.ACTION_COMMAND.equals(i.getAction())) return; String command=i.getStringExtra(WakeWordService.EXTRA_COMMAND);
        if(command==null||command.trim().isEmpty()) return; String n=command.trim().toLowerCase(Locale.ROOT);
        if(n.matches("whats?app\\s+(open|launch|start)(?:\\s+chey)?\\s*")){try{startActivity(getPackageManager().getLaunchIntentForPackage("com.whatsapp"));}catch(Exception e){Toast.makeText(MainActivity.this,"WhatsApp is not installed",Toast.LENGTH_SHORT).show();}return;}
        dispatch("jarvis-native-command", command.trim());
    }};
    @Override protected void onCreate(Bundle state){ super.onCreate(state); getWindow().setStatusBarColor(0xff02070d); getWindow().setNavigationBarColor(0xff02070d);
        webView=new WebView(this); setContentView(webView); WebSettings s=webView.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setMediaPlaybackRequiresUserGesture(true); s.setAllowFileAccess(false); s.setAllowContentAccess(true); s.setAllowFileAccessFromFileURLs(false); s.setAllowUniversalAccessFromFileURLs(false); s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW); s.setSafeBrowsingEnabled(true);
        advancedBridge=new AdvancedIntelligenceBridge(this,(event,payload)->dispatch(event,payload));
        webView.addJavascriptInterface(new NativeBridge(),"JarvisNative");
        webView.addJavascriptInterface(advancedBridge,"JarvisAdvanced"); webView.setWebViewClient(new WebViewClient(){
            @Override public boolean shouldOverrideUrlLoading(WebView v,WebResourceRequest r){return openExternalIfNeeded(r.getUrl());}
            @Override public boolean shouldOverrideUrlLoading(WebView v,String u){return openExternalIfNeeded(Uri.parse(u));}
            @Override public void onPageFinished(WebView v,String u){super.onPageFinished(v,u);dispatchPendingShare();}
        });
        webView.setWebChromeClient(new WebChromeClient(){
            @Override public void onPermissionRequest(final PermissionRequest r){runOnUiThread(()->{if(hasRecordAudioPermission()&&isTrustedOrigin(r.getOrigin()))r.grant(new String[]{PermissionRequest.RESOURCE_AUDIO_CAPTURE});else if(!hasRecordAudioPermission()){pendingPermissionRequest=r;requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO},AUDIO_REQUEST);}else r.deny();});}
            @Override public boolean onShowFileChooser(WebView v,ValueCallback<Uri[]> cb,FileChooserParams p){if(fileCallback!=null)fileCallback.onReceiveValue(null);fileCallback=cb;try{startActivityForResult(p.createIntent(),FILE_REQUEST);}catch(Exception e){fileCallback=null;return false;}return true;}
        });
        String url=BuildConfig.JARVIS_START_URL; if(!url.startsWith("https://")){Toast.makeText(this,"KALKI URL must use HTTPS",Toast.LENGTH_LONG).show();return;} webView.loadUrl(url); handleIntent(getIntent()); }
    @Override protected void onNewIntent(Intent i){super.onNewIntent(i);setIntent(i);handleIntent(i);}
    private void handleIntent(Intent i){
        if(i==null)return; String a=i.getAction(); Uri u=i.getData();
        if(Intent.ACTION_VIEW.equals(a)&&u!=null){dispatch("jarvis-native-deeplink",u.toString());return;}
        if(!Intent.ACTION_SEND.equals(a)&&!Intent.ACTION_SEND_MULTIPLE.equals(a))return;
        try { JSONObject p=new JSONObject(); p.put("mimeType",i.getType()==null?"application/octet-stream":i.getType());
            CharSequence title=i.getCharSequenceExtra(Intent.EXTRA_TITLE), text=i.getCharSequenceExtra(Intent.EXTRA_TEXT);
            if(title!=null)p.put("title",title.toString()); if(text!=null)p.put("text",text.toString()); JSONArray fs=new JSONArray(); ClipData clip=i.getClipData();
            if(clip!=null)for(int n=0;n<clip.getItemCount();n++)addShareUri(fs,clip.getItemAt(n).getUri(),i.getType()); else {Uri stream=i.getParcelableExtra(Intent.EXTRA_STREAM);if(stream!=null)addShareUri(fs,stream,i.getType());}
            p.put("files",fs);p.put("previewOnly",true);pendingShareJson=p.toString();dispatchPendingShare();
        } catch(Exception ignored){Toast.makeText(this,"Unable to preview shared content",Toast.LENGTH_SHORT).show();}
    }
    private void addShareUri(JSONArray fs,Uri u,String type)throws Exception{if(u==null)return;JSONObject f=new JSONObject();f.put("uri",u.toString());f.put("name",u.getLastPathSegment()==null?"Shared item":u.getLastPathSegment());f.put("mimeType",type==null?"application/octet-stream":type);fs.put(f);}
    private void dispatchPendingShare(){if(webView==null||pendingShareJson==null)return;String q=JSONObject.quote(pendingShareJson);webView.post(()->webView.evaluateJavascript("window.dispatchEvent(new CustomEvent('kalki-share',{detail:JSON.parse("+q+")}));",null));}
    private void dispatch(String event,String value){if(webView==null)return;webView.post(()->webView.evaluateJavascript("window.dispatchEvent(new CustomEvent("+JSONObject.quote(event)+",{detail:"+JSONObject.quote(value)+"}));",null));}
    private String JSONObjectQuote(String s){return org.json.JSONObject.quote(s);}
    @Override protected void onStart(){super.onStart();IntentFilter f=new IntentFilter(WakeWordService.ACTION_COMMAND);if(Build.VERSION.SDK_INT>=33)registerReceiver(wakeReceiver,f,RECEIVER_NOT_EXPORTED);else registerReceiver(wakeReceiver,f);}
    @Override protected void onStop(){try{unregisterReceiver(wakeReceiver);}catch(Exception ignored){}super.onStop();}
    private boolean openExternalIfNeeded(Uri u){String scheme=u.getScheme();if("http".equalsIgnoreCase(scheme)||"https".equalsIgnoreCase(scheme))return false;try{startActivity(new Intent(Intent.ACTION_VIEW,u));}catch(Exception e){Toast.makeText(this,"No app can open this link",Toast.LENGTH_SHORT).show();}return true;}
    private boolean isTrustedOrigin(Uri o){return o!=null&&"https".equalsIgnoreCase(o.getScheme())&&o.getHost()!=null;}
    private boolean hasRecordAudioPermission(){return checkSelfPermission(Manifest.permission.RECORD_AUDIO)==PackageManager.PERMISSION_GRANTED;}
    private boolean hasCameraPermission(){return checkSelfPermission(Manifest.permission.CAMERA)==PackageManager.PERMISSION_GRANTED;}
    private boolean hasNotificationPermission(){return Build.VERSION.SDK_INT<33||checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS)==PackageManager.PERMISSION_GRANTED;}
    private void requestWakePermissions(){ArrayList<String> p=new ArrayList<>();if(!hasRecordAudioPermission())p.add(Manifest.permission.RECORD_AUDIO);if(Build.VERSION.SDK_INT>=33&&!hasNotificationPermission())p.add(Manifest.permission.POST_NOTIFICATIONS);if(p.isEmpty())startWakeService();else requestPermissions(p.toArray(new String[0]),WAKE_REQUEST);}
    private void startWakeService(){if(!hasRecordAudioPermission())return;Intent i=new Intent(this,WakeWordService.class);if(Build.VERSION.SDK_INT>=26)startForegroundService(i);else startService(i);}
    private void stopWakeService(){stopService(new Intent(this,WakeWordService.class));}
    private final class NativeBridge{
        @JavascriptInterface public void enableWakeWord(){runOnUiThread(MainActivity.this::requestWakePermissions);}
        @JavascriptInterface public void requestScreenCapture(){advancedBridge.requestScreenCapture();}
        @JavascriptInterface public void requestCameraPermission(){advancedBridge.requestCameraPermission();}
        @JavascriptInterface public void chooseSourceFile(){advancedBridge.chooseSourceFile();}
        @JavascriptInterface public void launchSafeIntent(String action){advancedBridge.launchSafeIntent(action);}
        @JavascriptInterface public void disableWakeWord(){runOnUiThread(MainActivity.this::stopWakeService);}
        @JavascriptInterface public String permissionStatus(){return "{\"microphone\":"+hasRecordAudioPermission()+",\"camera\":"+hasCameraPermission()+",\"notifications\":"+hasNotificationPermission()+"}";}
        @JavascriptInterface public void openWhatsApp(){runOnUiThread(()->{try{Intent i=getPackageManager().getLaunchIntentForPackage("com.whatsapp");if(i==null)i=getPackageManager().getLaunchIntentForPackage("com.whatsapp.w4b");if(i==null)throw new ActivityNotFoundException();startActivity(i);}catch(Exception e){Toast.makeText(MainActivity.this,"WhatsApp is not installed",Toast.LENGTH_SHORT).show();}});}
        @JavascriptInterface public void openCamera(){runOnUiThread(()->{try{startActivity(new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE));}catch(Exception e){Toast.makeText(MainActivity.this,"No camera app is available",Toast.LENGTH_SHORT).show();}});}
        @JavascriptInterface public void openNotificationSettings(){runOnUiThread(()->startActivity(new Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS).putExtra(Settings.EXTRA_APP_PACKAGE,getPackageName())));}
        @JavascriptInterface public void openBatterySettings(){runOnUiThread(()->{try{startActivity(new Intent(Settings.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS));}catch(Exception e){startActivity(new Intent(Settings.ACTION_SETTINGS));}});}
        @JavascriptInterface public void openAppSettings(){runOnUiThread(()->startActivity(new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS,Uri.parse("package:"+getPackageName()))));}
        @JavascriptInterface public String nativeVersion(){return "kalki-android-0.7.0-wake";}
    }
    @Override protected void onActivityResult(int req,int result,Intent data){super.onActivityResult(req,result,data);if(req==AdvancedIntelligenceBridge.SCREEN_CAPTURE_REQUEST&&advancedBridge!=null){advancedBridge.screenResult(result==RESULT_OK);return;}if(req==1203&&advancedBridge!=null){advancedBridge.fileResult(result==RESULT_OK);return;}if(req==FILE_REQUEST&&fileCallback!=null){Uri[] r=WebChromeClient.FileChooserParams.parseResult(result,data);fileCallback.onReceiveValue(r);fileCallback=null;}}
    @Override public void onRequestPermissionsResult(int c,String[] p,int[] r){super.onRequestPermissionsResult(c,p,r);if(c==AUDIO_REQUEST&&pendingPermissionRequest!=null){if(hasRecordAudioPermission()&&isTrustedOrigin(pendingPermissionRequest.getOrigin()))pendingPermissionRequest.grant(new String[]{PermissionRequest.RESOURCE_AUDIO_CAPTURE});else pendingPermissionRequest.deny();pendingPermissionRequest=null;}else if(c==WAKE_REQUEST&&hasRecordAudioPermission()&&hasNotificationPermission())startWakeService();else if(c==WAKE_REQUEST&&webView!=null)webView.evaluateJavascript("document.getElementById('wake-word-toggle')?.click();document.getElementById('wake-word-toggle')&&(document.getElementById('wake-word-toggle').checked=false);",null);}
    @Override public void onBackPressed(){if(webView!=null&&webView.canGoBack())webView.goBack();else super.onBackPressed();}
    @Override protected void onDestroy(){stopWakeService();if(fileCallback!=null)fileCallback.onReceiveValue(null);if(webView!=null){webView.removeJavascriptInterface("JarvisNative");webView.removeJavascriptInterface("JarvisAdvanced");webView.destroy();}super.onDestroy();}
}

