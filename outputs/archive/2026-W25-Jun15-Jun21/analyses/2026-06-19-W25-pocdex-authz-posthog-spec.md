# POCDEX Authorisation — PostHog Instrumentation Spec

- **Owner:** Michelle Yip
- **For:** Rama (PostHog instrumentation)
- **Date:** 2026-06-19 (W25)
- **Status:** Spec ready — license still pending (as of Sprint 3 demo, 2026-06-04). Wire up when license lands.
- **Related:** [POCDEX Authz Epic](../decisions/2026-06-18-W25-epic-pocdex-authorisation.md) · [Authz Stories](../decisions/2026-06-18-W25-pocdex-authorisation-stories.md) · [WOG Auth PRD](../../context-library/prds/wog-authentication.md)

## The one thing to get right first

POCDEX authorisation is **two flows, two data sources.** PostHog only covers one of them.

| Flow | What happens | Track where |
|------|--------------|-------------|
| **Provisioning** (Stories 1, 2, 4, 5) | POCDEX pushes a record → OTEP checks the agency allowlist → creates / updates / rejects an account. Pure server-to-server. No browser. | **Story 5 server audit log** — NOT PostHog |
| **Login outcome** (Stories 3, 4) | Officer logs in via WOG AD → OTEP decides: in, "profile pending," or "not your agency." Happens in the browser. | **PostHog** (this spec) |

PostHog is a client analytics tool. It can't see a provisioning push that never ends in a browser session, so it can't be the source of truth for "100% automated account creation" or the fail-closed guarantee. That proof lives in the Story 5 audit log. Use PostHog as the **early-warning alarm** on the user-facing side, and the audit log as the **evidence** for APA KR 3.

## Events to instrument

These extend the four Rama already owns (`login_attempt`, `login_success`, `login_failed`, `login_attempt_failed_access_denied`). Same snake_case convention. Fire after WOG AD auth resolves and OTEP makes its authorisation decision.

### 1. `authz_outcome`
The core event. Fires once per login, after OTEP resolves the officer's access.

| Property | Type | Values / notes |
|----------|------|----------------|
| `outcome` | string | `granted` · `rejected_non_pilot` · `profile_pending` |
| `agency_code` | string | The code OTEP read (e.g. `PSD`); `null`/empty if missing |
| `is_pilot_agency` | boolean | Result of the allowlist check (Story 1) |
| `officer_id` | string | Use the same anonymised/hashed ID as the login events — keep it consistent so funnels join |

### 2. `profile_pending_shown` (Story 3)
Officer authenticated via WOG AD before their POCDEX profile arrived. Fires when the "profile pending" state renders.

| Property | Type | Notes |
|----------|------|-------|
| `agency_code` | string | If known at this point |

### 3. `access_denied_non_pilot` (Story 4)
Non-pilot officer hits the "not available to your agency yet" wall. Fires when that state renders. (This is the user-facing twin of `login_attempt_failed_access_denied` — keep both so you can tell "AD rejected them" from "OTEP authorised them out.")

| Property | Type | Notes |
|----------|------|-------|
| `agency_code` | string | If known; may be `null` |

> Naming note: `authz_outcome` with an `outcome` property is the cleaner long-term shape — the two dedicated events (#2, #3) are convenience triggers for the UI states. If Rama prefers to derive everything from `authz_outcome`, that's fine; the dedicated events are optional sugar for simpler insights. Flag your preference before wiring.

## What each success metric maps to

| Success criterion | Source | How |
|-------------------|--------|-----|
| **0% unauthorised access** | PostHog (alarm) + audit log (proof) | PostHog: alert if any `authz_outcome` where `outcome = granted` AND `is_pilot_agency = false`. Should always be zero. Audit log is the real evidence. |
| **Pre-POCDEX-sync edge-case rate** | PostHog | `profile_pending_shown` / `login_success`. PRD estimate is ~1–4%; this measures the real rate. |
| **100% automated account creation** | Story 5 audit log | Count of `provisioned` + `updated` vs manual-setup tickets. PostHog can't see this. |
| **Pilot officer satisfaction** | UAT survey | Not an analytics event. |

## Insights to build (when license is live)

1. **Authz outcome breakdown** — bar of `authz_outcome` by `outcome`, broken down by `agency_code`. Your at-a-glance "who's getting in."
2. **Unauthorised-access alarm** — saved insight filtered to `outcome = granted` + `is_pilot_agency = false`, with a PostHog alert set to notify on any event > 0. This is your zero-tolerance tripwire.
3. **Pre-sync edge-case rate** — formula insight: `profile_pending_shown` / `login_success`, trended weekly. Watch against the ~1–4% estimate.
4. **Login → authz funnel** — `login_attempt` → `login_success` → `authz_outcome (granted)`. Shows where officers drop between identity and access.

## Open items before wiring

- **License** — confirm with Rama it's live before building insights. Spec is ready to go regardless.
- **`outcome` vs dedicated events** — confirm Rama's preference (single event with property, or the three-event shape above).
- **OTEP-110 dependency** — if WOG AD owns all error states, some failures may not be OTEP-side events. Same open question already flagged for the login events; resolve together at grooming.
- **`officer_id` consistency** — make sure the ID used here matches the login events so funnels join cleanly.
