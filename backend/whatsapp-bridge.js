const crypto = require('node:crypto');

// Safety-first JARVIS WhatsApp bridge control plane. This module never talks to
// WhatsApp; a separately deployed bridge must implement the adapter contract.
const state = {
  mode: 'manual_draft_only',
  paused: true,
  autoReplyOptIn: false,
  bridgeConfigured: false,
  paired: false,
  health: 'not_configured',
  allowlist: { chats: [], groups: [] },
  rules: [],
  rateLimits: { perMinute: 5, perDay: 50 },
  seenMessageIds: [],
  audit: []
};
const now = () => new Date().toISOString();
function audit(event, details = {}) { state.audit.unshift({ id: crypto.randomUUID(), event, at: now(), ...details }); state.audit = state.audit.slice(0, 200); }
function status() { return { provider: 'whatsapp', providerName: 'JARVIS private bridge', status: state.paired && state.health === 'healthy' ? 'connected' : state.bridgeConfigured ? 'pending' : 'not_connected', mode: state.mode, paused: state.paused, autoReplyOptIn: state.autoReplyOptIn, paired: state.paired, health: state.health, allowlist: state.allowlist, rules: state.rules, rateLimits: state.rateLimits, lastAuditAt: state.audit[0]?.at || null, persistence: 'process-memory', execution: 'disabled_until_dedicated_bridge_verification', note: 'No messages are sent by this scaffold. Zapia WhatsApp is never used.' }; }
function configure(body = {}) { if (typeof body.bridgeConfigured === 'boolean') state.bridgeConfigured = body.bridgeConfigured; audit('bridge.configuration_changed', { configured: state.bridgeConfigured }); return status(); }
function updateControls(body = {}) {
  if (body.mode === 'manual_draft_only') state.mode = body.mode;
  if (body.mode === 'scoped_auto_reply' && state.autoReplyOptIn && !state.paused) state.mode = body.mode;
  if (typeof body.paused === 'boolean') state.paused = body.paused;
  if (typeof body.autoReplyOptIn === 'boolean') state.autoReplyOptIn = body.autoReplyOptIn;
  audit('controls.updated', { mode: state.mode, paused: state.paused, autoReplyOptIn: state.autoReplyOptIn });
  return status();
}
function setAllowlist(body = {}) { state.allowlist = { chats: Array.isArray(body.chats) ? body.chats.slice(0,100).map(String) : state.allowlist.chats, groups: Array.isArray(body.groups) ? body.groups.slice(0,100).map(String) : state.allowlist.groups }; audit('allowlist.updated', { counts: { chats: state.allowlist.chats.length, groups: state.allowlist.groups.length } }); return status(); }
function setRules(body = {}) { state.rules = Array.isArray(body.rules) ? body.rules.slice(0,50).filter(r => r && typeof r.keyword === 'string' && r.keyword.trim()).map(r => ({ id: String(r.id || crypto.randomUUID()), keyword: r.keyword.slice(0,100), response: String(r.response || '').slice(0,2000), enabled: r.enabled !== false, requiresApproval: true })) : state.rules; audit('rules.updated', { count: state.rules.length }); return status(); }
function health() { audit('bridge.health_check_requested'); return { ok: true, provider: 'whatsapp', status: state.health, paired: state.paired, readOnly: true, executed: false, message: state.bridgeConfigured ? 'Dedicated bridge health verification is not deployed; no WhatsApp request was made.' : 'No dedicated bridge configured; no WhatsApp request was made.' }; }
function pairingPlaceholder() { audit('bridge.pairing_requested'); return { ok: false, paired: false, code: 'PAIRING_NOT_DEPLOYED', message: 'Pairing is a guarded placeholder. Deploy and configure a dedicated JARVIS bridge before pairing; no QR was generated and no account was contacted.' }; }
function intake(body = {}) { const messageId = String(body.messageId || ''); if (!messageId) return { ok: false, code: 'MESSAGE_ID_REQUIRED' }; if (state.seenMessageIds.includes(messageId)) return { ok: false, duplicate: true, executed: false, message: 'Duplicate suppressed; no action occurred.' }; state.seenMessageIds = [messageId, ...state.seenMessageIds].slice(0, 500); audit('message.reviewed', { messageId, action: 'draft_only' }); return { ok: true, duplicate: false, executed: false, approvalRequired: true, action: 'draft_only', message: 'Inbound message recorded for review only. No auto-reply was generated.' }; }
function auditEntries() { return state.audit.slice(0,100); }
module.exports = { status, configure, updateControls, setAllowlist, setRules, health, pairingPlaceholder, intake, auditEntries };
