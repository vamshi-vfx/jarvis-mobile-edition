'use strict';

// Provider-neutral billing boundary. No SDKs, secrets, network calls, or charges
// are used in Phase 2. Real adapters must verify signatures server-side and be
// enabled only after an explicit production configuration review.
const crypto = require('node:crypto');

const providers = Object.freeze({
  razorpay: { id: 'razorpay', requiredEnv: ['RAZORPAY_KEY_ID', 'RAZORPAY_KEY_SECRET', 'RAZORPAY_WEBHOOK_SECRET'] },
  stripe: { id: 'stripe', requiredEnv: ['STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET'] }
});
function configured(provider) { const meta = providers[provider]; return Boolean(meta && meta.requiredEnv.every(key => process.env[key])); }
function status() { return { enabled: false, checkoutEnabled: false, providers: Object.fromEntries(Object.keys(providers).map(id => [id, { provider: id, configured: configured(id), status: 'scaffold_only', chargesCreated: false }])) , note: 'Paid checkout is disabled in Phase 2. Configuration alone never activates billing.' }; }
function adapter(provider) { if (!providers[provider]) throw new Error('Unsupported billing provider'); return { provider, configured: configured(provider), createCheckout: async () => ({ ok: false, enabled: false, code: 'BILLING_DISABLED', message: 'Paid checkout is disabled until production credentials, webhook verification, and explicit enablement are completed.' }), verifyWebhook: () => ({ ok: false, verified: false, code: 'WEBHOOK_VERIFICATION_NOT_IMPLEMENTED', message: 'Webhook verification is a placeholder; no entitlement or payment state changed.' }) }; }
function verifyWebhook(provider, rawBody, signature) { const result = adapter(provider).verifyWebhook(rawBody, signature); return { ...result, provider, received: Boolean(rawBody), signaturePresent: Boolean(signature), digest: rawBody ? crypto.createHash('sha256').update(String(rawBody)).digest('hex') : null }; }
module.exports = { providers, configured, status, adapter, verifyWebhook };
