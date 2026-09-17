'use strict';

// KALKI Phase 2 scaffolding. This module intentionally uses process memory only:
// replace the repository with an encrypted, user-scoped store before beta launch.
const crypto = require('node:crypto');

const PLANS = Object.freeze({
  beta: { id: 'beta', name: 'Private Beta', active: true, features: ['assistant.core', 'assistant.explicit_actions'], limits: { commandsPerMonth: 500, connectedProviders: 3 } },
  free: { id: 'free', name: 'Free', active: false, features: [], limits: { commandsPerMonth: 0, connectedProviders: 0 } },
  pro: { id: 'pro', name: 'Pro', active: false, features: [], limits: { commandsPerMonth: 0, connectedProviders: 0 } }
});
const users = new Map();
const usage = new Map();

function userId(req) { return String(req.headers['x-kalki-user-id'] || req.headers['x-jarvis-user'] || 'anonymous').slice(0, 160); }
function hash(value) { return crypto.createHash('sha256').update(String(value)).digest('hex'); }
function getUser(id) { if (!users.has(id)) users.set(id, { id, planId: 'beta', betaStatus: 'pending', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); return users.get(id); }
function entitlement(id) { const user = getUser(id); const plan = PLANS[user.planId] || PLANS.free; return { userId: id, betaStatus: user.betaStatus, plan: { ...plan }, active: user.betaStatus === 'approved' && plan.active, source: 'process-memory-scaffolding' }; }
function setBetaStatus(id, status) { if (!['pending', 'approved', 'revoked'].includes(status)) throw new Error('Invalid beta status'); const user = getUser(id); user.betaStatus = status; user.updatedAt = new Date().toISOString(); return entitlement(id); }
function recordUsage(id, feature, amount = 1) { const key = `${id}:${feature}:${new Date().toISOString().slice(0, 7)}`; const row = usage.get(key) || { userId: id, feature, period: new Date().toISOString().slice(0, 7), count: 0 }; row.count += Math.max(0, Number(amount) || 0); usage.set(key, row); return row; }
function usageFor(id) { return [...usage.values()].filter(row => row.userId === id); }
function canUse(id, feature) { const e = entitlement(id); return { allowed: e.active && e.plan.features.includes(feature), reason: e.active ? 'feature_not_in_plan' : 'beta_access_not_approved', entitlement: e }; }
function requireBetaAccess(req, res) { const id = userId(req); const result = entitlement(id); if (result.active) return true; res.writeHead(403, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify({ ok: false, code: 'BETA_ACCESS_REQUIRED', message: 'KALKI private beta access is not approved for this user.', entitlement: result })); return false; }
module.exports = { PLANS, userId, hash, entitlement, setBetaStatus, recordUsage, usageFor, canUse, requireBetaAccess, storage: 'process-memory-scaffolding' };
