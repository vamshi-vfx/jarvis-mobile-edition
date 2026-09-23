# KALKI Social Automation Agent

## Current implementation

The Social Automation Agent is a browser-local rule builder and simulator in `frontend/index.html`, `frontend/social-agent.css`, and `frontend/social-agent.js`. It is reached from the KALKI side menu and is a separate workspace; the Assistant chat and bottom Assistant/KALKI mode controls remain unchanged.

Supported local-only workflows:

- Comment-to-DM: a qualifying comment can only create one private-reply CTA asking the commenter to follow and DM the agreed keyword; the comment itself cannot unlock a profile check or resource link.
- Incoming-DM keyword and story-reply DM rules: require a simulated profile result before a resource link or WhatsApp invite can appear in the preview. Only a simulated `is_user_follow_business=true` result displays links; false produces a reminder asking the user to follow and send the keyword again; unknown blocks the resource preview.
- Trigger, keyword/any-text condition, per-rule allowlist, HTTPS resource/community links, and a prepared action; rules start paused.
- Local simulator start, pause, stop-all; duplicate suppression; and one-preview-per-user/rule/trigger-stage per 60 minutes (so the comment CTA stage and later inbound-DM verification stage remain separate).
- A per-browser audit log and preview/approval/block counters; live sends stay at zero.
- Exact-preview confirmation; it records explicit approval locally only and cannot send a DM.

## Meta consent and recheck boundary

The current Meta User Profile API documentation says user consent is required to access profile data, and that consent is set when someone sends a message, clicks an icebreaker, or uses a persistent menu. A comment without a message is not enough. The profile API exposes `is_user_follow_business`. Meta's messaging policy says businesses have up to 24 hours to respond to a user's message. Accordingly, the safe flow is: send the single comment CTA; wait for the person to DM the agreed keyword; retrieve the profile after that consent; preview the link only if the follow field is true; otherwise ask them to follow and DM the keyword again. A further inbound message starts a new response opportunity. This app does not poll/recheck follower status or queue delayed sends. Meta's cited docs identify the profile field and the message window but do not, by themselves, establish that a scheduled polling loop is approved; don't build one without validating product rules, rate limits, consent retention, and send-window behavior for the actual app.

References: [Meta User Profile API](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/user-profile); [Meta Messaging Policy](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy).

Rules, metrics, and audit events are stored in this browser's local storage. They are not synchronized to a server. Instagram connection is **Pending**. No OAuth, webhook, API access, real Instagram events/metrics, message sending, or publishing is implemented. Never treat a locally enabled simulator rule as a live Instagram automation.

## Reference and licensing

The feature inspiration was the public project [SAAS-Instagram-DM-Automations](https://github.com/SashenJayathilaka/SAAS-Instagram-DM-Automations), whose README describes OAuth integration, an automation builder/dashboard, comment-to-DM, incoming keyword DM, and story-reply automations. At inspection, GitHub's repository metadata reported no declared license and its file tree contained no `LICENSE` file. Consequently, no source code, assets, or SaaS stack from that repository were copied; the KALKI implementation is an independent local-only implementation of high-level workflow concepts. Recheck the reference license before considering any future code reuse.

## What is required before a real connection

A real integration requires an owner-configured Meta developer app and a backend implementation. At minimum, arrange the Instagram professional account and any required linked Page; configure Meta App ID and App Secret only in server-side secret storage; set an exact HTTPS OAuth redirect URI and verified HTTPS webhook callback/subscriptions; request the specific Instagram messaging/comment permissions supported by the selected Meta API product and complete required app review/advanced access and business verification; then authorize the account and safely verify a read-only API request. Confirm current permission names and eligibility in Meta's documentation during setup. No secrets belong in this repository, browser storage, or chat. Do not enable live actions until policy, consent, rate limits, and explicit per-action approval are implemented and independently tested.
