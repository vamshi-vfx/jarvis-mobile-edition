# KALKI email access foundation

This commit adds a safe foundation only. Email is the primary identity, optional phone is stored only as a masked value, and admin records include beta/access state, plan, entitlement, subscription state/dates, last login, connector permissions, and audited status changes (pending/approved/suspended/revoked).

- `POST /api/auth/access-request` validates an email and records a pending request in process memory. It does not log in, send email, charge, or grant access.
- Protected admin routes: `GET /api/admin/users`, `POST /api/admin/users`, `PATCH /api/admin/users/:id`.
- Admin UI supports adding users and changing access state; it never accepts payment data or secrets.
- Billing remains disabled. Planned pricing is clearly labeled as not active, and verified purchase email access is described in `beta.html`.

Before production: deploy durable encrypted storage, real email verification/session auth, role-based admin auth, connector permission checks, payment provider webhooks, entitlement reconciliation, and Render environment configuration. Verify deployed routes and Pages behavior before describing login or payment as live.
