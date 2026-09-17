'use strict';

// KALKI access foundation. This is deliberately process-memory scaffolding: replace
// with an encrypted, user-scoped database and a verified email provider before beta.
const crypto = require('node:crypto');
const PLANS = Object.freeze({
  beta: { id: 'beta', name: 'Private Beta', active: true, features: ['assistant.core', 'assistant.explicit_actions'], limits: { commandsPerMonth: 500, connectedProviders: 3 } },
  free: { id: 'free', name: 'Free', active: false, features: [], limits: { commandsPerMonth: 0, connectedProviders: 0 } },
  pro: { id: 'pro', name: 'Pro', active: false, features: [], limits: { commandsPerMonth: 0, connectedProviders: 0 } }
});
const users = new Map();
const usage = new Map();
const ACCESS_STATES = ['pending', 'approved', 'suspended', 'revoked'];
const SUBSCRIPTION_STATES = ['none', 'trialing', 'active', 'past_due', 'canceled'];
function now() { return new Date().toISOString(); }
function normalizeEmail(value) { return String(value || '').trim().toLowerCase().slice(0, 254); }
function maskPhone(value) { const s = String(value || '').replace(/[^+\d]/g, ''); return s.length >= 4 ? `${'*'.repeat(Math.max(0, s.length - 4))}${s.slice(-4)}` : ''; }
function userId(req) { return String(req.headers['x-kalki-user-id'] || req.headers['x-jarvis-user'] || 'anonymous').slice(0, 160); }
function hash(value) { return crypto.createHash('sha256').update(String(value)).digest('hex'); }
function getUser(id, seed = {}) {
  id = String(id).slice(0, 160);
  if (!users.has(id)) users.set(id, { id, email: normalizeEmail(seed.email) || (id.includes('@') ? normalizeEmail(id) : ''), phoneMasked: maskPhone(seed.phone), emailVerified: false, betaStatus: 'pending', planId: 'beta', entitlement: 'assistant.core', subscriptionState: 'none', subscriptionStartedAt: null, subscriptionEndsAt: null, lastLoginAt: null, connectorPermissions: {}, createdAt: now(), updatedAt: now() });
  return users.get(id);
}
function sanitizeUserPatch(body = {}) { const p = {}; if (body.email !== undefined) p.email = normalizeEmail(body.email); if (body.phone !== undefined) p.phoneMasked = maskPhone(body.phone); if (typeof body.emailVerified === 'boolean') p.emailVerified = body.emailVerified; if (ACCESS_STATES.includes(body.betaStatus)) p.betaStatus = body.betaStatus; if (PLANS[body.planId]) p.planId = body.planId; if (typeof body.entitlement === 'string') p.entitlement = body.entitlement.slice(0, 80); if (SUBSCRIPTION_STATES.includes(body.subscriptionState)) p.subscriptionState = body.subscriptionState; if (body.subscriptionStartedAt === null || typeof body.subscriptionStartedAt === 'string') p.subscriptionStartedAt = body.subscriptionStartedAt; if (body.subscriptionEndsAt === null || typeof body.subscriptionEndsAt === 'string') p.subscriptionEndsAt = body.subscriptionEndsAt; if (body.connectorPermissions && typeof body.connectorPermissions === 'object') p.connectorPermissions = Object.fromEntries(Object.entries(body.connectorPermissions).filter(([k,v]) => /^[a-z0-9_-]{1,40}$/i.test(k) && typeof v === 'boolean')); return p; }
function publicUser(user) { const { phone, ...safe } = user; return { ...safe, phoneMasked: user.phoneMasked || '' }; }
function listUsers() { return [...users.values()].map(publicUser).sort((a,b) => b.updatedAt.localeCompare(a.updatedAt)); }
function updateUser(id, patch) { const user = getUser(id, patch); Object.assign(user, sanitizeUserPatch(patch), { updatedAt: now() }); return publicUser(user); }
function markLogin(id) { const user = getUser(id); user.lastLoginAt = now(); user.updatedAt = now(); return publicUser(user); }
function entitlement(id) { const user = getUser(id); const plan = PLANS[user.planId] || PLANS.free; return { userId: id, email: user.email, betaStatus: user.betaStatus, entitlement: user.entitlement, plan: { ...plan }, active: user.betaStatus === 'approved' && plan.active && user.subscriptionState !== 'canceled', source: 'process-memory-scaffolding' }; }
function setBetaStatus(id, status) { if (!ACCESS_STATES.includes(status)) throw new Error('Invalid access status'); updateUser(id, { betaStatus: status }); return entitlement(id); }
function recordUsage(id, feature, amount = 1) { const key = `${id}:${feature}:${now().slice(0, 7)}`; const row = usage.get(key) || { userId: id, feature, period: now().slice(0, 7), count: 0 }; row.count += Math.max(0, Number(amount) || 0); usage.set(key, row); return row; }
function usageFor(id) { return [...usage.values()].filter(row => row.userId === id); }
function canUse(id, feature) { const e = entitlement(id); return { allowed: e.active && e.plan.features.includes(feature), reason: e.active ? 'feature_not_in_plan' : 'beta_access_not_approved', entitlement: e }; }
function requireBetaAccess(req, res) { const id = userId(req); const result = entitlement(id); if (result.active) return true; res.writeHead(403, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify({ ok: false, code: 'BETA_ACCESS_REQUIRED', message: 'KALKI private beta access is not approved for this user.', entitlement: result })); return false; }
module.exports = { PLANS, ACCESS_STATES, SUBSCRIPTION_STATES, userId, hash, entitlement, setBetaStatus, recordUsage, usageFor, canUse, requireBetaAccess, getUser, listUsers, updateUser, markLogin, publicUser, sanitizeUserPatch, storage: 'process-memory-scaffolding' };
