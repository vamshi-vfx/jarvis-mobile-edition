const http = require('node:http');
const { URL } = require('node:url');

const PORT = Number(process.env.PORT || 8787);
const API_TOKEN = process.env.JARVIS_API_TOKEN || '';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
const WPP_BRIDGE_URL = process.env.WPP_BRIDGE_URL || '';
const WPP_BRIDGE_TOKEN = process.env.WPP_BRIDGE_TOKEN || '';

function json(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  });
  res.end(JSON.stringify(body));
}

function authorized(req) {
  if (!API_TOKEN) return false;
  return req.headers.authorization === `Bearer ${API_TOKEN}`;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > 1024 * 256) req.destroy();
    });
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

function detectSkill(text = '') {
  if (/whatsapp/i.test(text)) return 'whatsapp';
  if (/youtube|video/i.test(text)) return 'youtube';
  if (/google|search|web/i.test(text)) return 'search';
  if (/calendar|schedule|meeting|reminder/i.test(text)) return 'calendar';
  return null;
}

function isExplicitAction(text = '') {
  return /open|launch|start|send|reply|message|tell|search|find|create|add|schedule|show|read|chey|pampu|cheppu|choodu|vetuku|teruvu/i.test(text);
}

async function whatsappRequest(path, payload) {
  if (!WPP_BRIDGE_URL || !WPP_BRIDGE_TOKEN) {
    return { configured: false, message: 'WhatsApp secure bridge is not configured yet.' };
  }
  const response = await fetch(`${WPP_BRIDGE_URL.replace(/\/$/, '')}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${WPP_BRIDGE_TOKEN}`
    },
    body: JSON.stringify(payload)
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'WhatsApp bridge request failed');
  return body;
}

async function routeCommand(body) {
  const text = String(body.text || '').trim();
  if (!text) throw new Error('Command text is required');
  const skill = detectSkill(text);
  if (!skill || !isExplicitAction(text)) {
    return { executed: false, reason: 'No explicit skill action detected', skill: null };
  }
  if (skill === 'whatsapp') {
    if (/open|launch|start|teruvu/i.test(text)) {
      return { executed: true, skill, action: 'open', url: 'https://wa.me/' };
    }
    return { executed: false, skill, action: 'send_or_reply', requires: ['recipient', 'message'], bridge: Boolean(WPP_BRIDGE_URL && WPP_BRIDGE_TOKEN) };
  }
  return { executed: false, skill, message: `${skill} skill detected; provider is not connected yet.` };
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') return json(res, 204, {});
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === 'GET' && url.pathname === '/api/health') {
    return json(res, 200, { ok: true, service: 'jarvis-backend', explicitActionsOnly: true, whatsappBridge: Boolean(WPP_BRIDGE_URL && WPP_BRIDGE_TOKEN) });
  }
  if (!authorized(req)) return json(res, 401, { ok: false, message: 'Unauthorized' });
  try {
    if (req.method === 'POST' && url.pathname === '/api/command') {
      return json(res, 200, { ok: true, result: await routeCommand(await readBody(req)) });
    }
    if (req.method === 'POST' && url.pathname === '/api/whatsapp/send') {
      const body = await readBody(req);
      if (!body.recipient || !body.message) return json(res, 400, { ok: false, message: 'recipient and message are required' });
      return json(res, 200, { ok: true, result: await whatsappRequest('/send', { recipient: body.recipient, message: body.message, source: 'jarvis-explicit-command' }) });
    }
    return json(res, 404, { ok: false, message: 'Not found' });
  } catch (error) {
    return json(res, 500, { ok: false, message: error.message });
  }
});

server.listen(PORT, () => console.log(`JARVIS backend listening on ${PORT}`));
