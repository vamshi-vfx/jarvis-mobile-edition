(() => {
  const API = 'https://jarvis-mobile-edition-alpha.vercel.app';
  const authPanel = document.getElementById('auth-panel');
  const dashboard = document.getElementById('dashboard');
  const tokenInput = document.getElementById('admin-token');
  const authMessage = document.getElementById('auth-message');
  const dashboardMessage = document.getElementById('dashboard-message');
  let token = '';
  const setMessage = (node, text) => { node.textContent = text || ''; };
  async function request(path, options = {}) {
    const response = await fetch(`${API}${path}`, { ...options, headers: { ...(options.headers || {}), Authorization: `Bearer ${token}` }, cache: 'no-store' });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || 'Protected request failed.');
    return data;
  }
  function renderStatus(data) {
    const list = document.getElementById('status-list');
    const rows = Object.entries(data.status || {}).map(([name, value]) => `<div class="status-row"><span>${name}</span><b class="${value ? '' : 'off'}">${value ? 'ONLINE' : 'NOT CONNECTED'}</b></div>`).join('');
    list.innerHTML = rows || '<p class="muted">No status data available.</p>';
  }
  async function refreshStatus() { try { renderStatus(await request('/api/admin/status')); } catch (error) { setMessage(dashboardMessage, error.message); } }
  async function unlock() {
    const value = tokenInput.value.trim(); if (!value) { setMessage(authMessage, 'A server token is required.'); return; }
    token = value;
    try { await request('/api/admin/status'); authPanel.hidden = true; dashboard.hidden = false; tokenInput.value = ''; await refreshStatus(); }
    catch (error) { token = ''; setMessage(authMessage, 'Access denied. Check the server token.'); }
  }
  document.getElementById('unlock-btn').addEventListener('click', unlock);
  tokenInput.addEventListener('keydown', event => { if (event.key === 'Enter') unlock(); });
  document.getElementById('refresh-status').addEventListener('click', refreshStatus);
  document.getElementById('generate-key').addEventListener('click', async () => {
    const output = document.getElementById('key-result'); const button = document.getElementById('generate-key');
    button.disabled = true; output.hidden = true; setMessage(dashboardMessage, '');
    try { const data = await request('/api/admin/activation-keys', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' }); output.textContent = `${data.key} — copy now; it will not be shown again.`; output.hidden = false; }
    catch (error) { setMessage(dashboardMessage, error.message); } finally { button.disabled = false; }
  });
  document.getElementById('manage-users').addEventListener('click', () => setMessage(dashboardMessage, 'User management is reserved for a protected backend implementation. No user data was changed.'));
  document.getElementById('open-assistant').addEventListener('click', () => window.open(new URL('./index.html', window.location.href).href, 'kalki-assistant', 'popup,width=430,height=850'));
  document.getElementById('logout-btn').addEventListener('click', () => { window.JarvisNative?.disableWakeWord(); token = ''; dashboard.hidden = true; authPanel.hidden = false; setMessage(authMessage, 'Signed out.'); });
})();
