# KALKI WhatsApp controlled automation policy

This repository contains policy scaffolding only. It does **not** connect to WhatsApp, generate a QR, send replies, or run background jobs.

## Defaults and trust boundaries

- Auto-answer is OFF (`manual_draft_only`, paused) by default.
- The bridge must attest `senderVerified: true`; a phone number typed in message text is never identity proof.
- Owner-only commands require an exact JID match with `KALKI_OWNER_JID` and verified bridge identity.
- `auto reply set` / `grant access` requires an owner command, a contact number, and a non-empty scope. Numbers are masked in status/audit responses; grants expire (default seven days) and can be revoked.
- Groups must be explicitly enabled and allowlisted. The bridge must provide `adminVerified: true` / `groupAdminVerified: true` and `metadataSource: "bridge"`. Claims in message text are ignored.
- Once enabled, only question-like messages are eligible; ordinary statements are ignored. Duplicate message IDs are suppressed. The configured rate-limit fields are reserved for the bridge enforcement layer.
- Audit, grants, group settings, and duplicate state are currently process-memory only and disappear on restart.

## Admin routes

All policy routes require the existing admin authorization/session:

- `GET /api/whatsapp/policy` — masked status.
- `POST /api/whatsapp/policy/group` — owner-verified group configuration; requires bridge admin metadata.
- `POST /api/whatsapp/policy/grant` — owner-verified scoped contact grant.
- `POST /api/whatsapp/policy/revoke` — owner-verified grant revoke.
- `POST /api/whatsapp/policy/command` — owner-verified command parser.
- Existing bridge status/intake/audit routes remain draft-only.

Example policy input must include bridge-attested fields, for example `senderJid`, `senderVerified`, `groupAdminVerified`, and `metadataSource`. The scaffold intentionally returns draft/ignored decisions and never performs an external action.

## Remaining production requirements

Deploy a dedicated, authenticated bridge adapter that supplies cryptographically trustworthy JIDs, group membership/admin metadata, stable message IDs, durable encrypted storage, rate limiting, replay protection, pause controls, and an explicit human-approved response adapter. Pairing and runtime behavior must be tested separately; no live WhatsApp behavior is claimed by this commit.
