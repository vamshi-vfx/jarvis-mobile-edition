/* KALKI launch configuration scaffold — informational only.
 * Pending authentication, billing, entitlement, and metering services.
 * Do not use this client-side object as proof of subscription or access.
 */
window.KALKI_LAUNCH_CONFIG = Object.freeze({
  status: 'pending_backend',
  beta: { enabled: true, inviteRequired: true },
  billing: { enabled: false, provider: null, checkoutUrl: null },
  plans: {
    free: { label: 'Free', monthlyPrice: 0, status: 'available', limits: { previewRunsPerDay: 10, connectedActionsPerDay: 0 } },
    personal_pro: { label: 'Personal Pro', monthlyPrice: null, status: 'planned', limits: { previewRunsPerDay: 50, connectedActionsPerDay: null } },
    creator_pro: { label: 'Creator Pro', monthlyPrice: null, status: 'planned', limits: { previewRunsPerDay: 100, connectedActionsPerDay: null } },
    business: { label: 'Business', monthlyPrice: null, status: 'planned', limits: { previewRunsPerDay: null, connectedActionsPerDay: null } }
  },
  featureFlags: {
    paidEntitlements: false,
    providerActions: false,
    backgroundJobs: false,
    teamWorkspaces: false,
    usageMetering: false
  },
  safety: { explicitActionOnly: true, autoReply: false, autoSend: false, autoSchedule: false }
});
