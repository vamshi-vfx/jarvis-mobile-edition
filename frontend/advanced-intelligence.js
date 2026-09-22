/* KALKI Advanced Intelligence — provider-neutral client boundary.
 * No secrets, autonomous actions, or permission grants live in this file.
 */
(() => {
  const native = window.JarvisNative;
  const status = { microphone: false, camera: false, screenCapture: false, execution: 'idle' };
  const panel = document.createElement('section');
  panel.className = 'advanced-intelligence-panel';
  panel.setAttribute('aria-label', 'KALKI Advanced Intelligence');
  panel.innerHTML = `<div class="ai-panel-head"><div><span class="eyebrow">KALKI ADVANCED</span><strong>Local intelligence controls</strong><small>Consent-first · no background capture · no secrets in the app</small></div><button type="button" class="ai-collapse" aria-expanded="true">−</button></div>
    <div class="ai-panel-body"><div class="ai-status-grid" id="ai-status-grid"></div><div class="ai-actions">
      <button type="button" data-ai-action="screen">▣ Request screen consent</button><button type="button" data-ai-action="camera">◉ Request camera consent</button><button type="button" data-ai-action="file">＋ Choose PDF/source/image</button>
    </div><div class="ai-plan"><label for="ai-plan-input">Plan preview (approval required)</label><textarea id="ai-plan-input" rows="2" placeholder="Describe a multi-step task; KALKI will only prepare a plan."></textarea><button type="button" data-ai-action="plan">Prepare safe plan</button></div><p class="ai-unavailable">Live voice, Gemini Live/OpenRouter, vision processing, and system controls require a configured server/native capability. Unavailable capabilities stay disabled.</p></div>`;
  const main = document.querySelector('.assistant-main'); if (main) main.appendChild(panel);
  const grid = panel.querySelector('#ai-status-grid');
  function render() { grid.innerHTML = Object.entries(status).map(([k,v]) => `<span><b>${k.replace(/([A-Z])/g,' $1')}</b><em class="${v===true?'on':''}">${v===true?'ready':v}</em></span>`).join(''); }
  function send(action) { if (!native) { status.execution = 'WebView only'; render(); return; } status.execution = 'awaiting consent'; render(); try { ({screen: native.requestScreenCapture, camera: native.requestCameraPermission, file: native.chooseSourceFile}[action] || (()=>{})).call(native); } catch { status.execution = 'unavailable'; render(); } }
  panel.addEventListener('click', async e => { const action=e.target.closest('[data-ai-action]')?.dataset.aiAction; if (!action) return; if (action==='plan') { status.execution='plan prepared — approval required'; render(); return; } send(action); });
  panel.querySelector('.ai-collapse').onclick = e => { const open=e.currentTarget.getAttribute('aria-expanded')==='true'; e.currentTarget.setAttribute('aria-expanded',String(!open)); panel.querySelector('.ai-panel-body').hidden=open; e.currentTarget.textContent=open?'+':'−'; };
  window.addEventListener('kalki-native-capability', e => { Object.assign(status, typeof e.detail==='string' ? (()=>{try{return JSON.parse(e.detail)}catch{return {}}})() : (e.detail || {})); render(); });
  render();
})();
