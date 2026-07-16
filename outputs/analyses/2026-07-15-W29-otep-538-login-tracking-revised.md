# OTEP-538: PostHog Login Tracking — Revised Scope

**Status:** Not yet in Jira cache (not synced) — this is a working draft to be pushed to Jira before grooming.

**Owner:** Michelle Yip

**Related:** WOG Authentication ([wog-authentication.md](../../context-library/prds/wog-authentication.md)), OTEP-110 (login failure/error-state ownership, still open), OTEP-305 (login/logout pages, built against Keycloak stub, swaps to WOG AD)

---

## Goal

Track how many users land on the login page but never successfully sign in (login-page drop-off / abandonment), so we can quantify and break down the loss.

## Background

Today `/auth/login` only emits an anonymous `$pageview`, and a successful login is implicit in the `identify()` call when the user returns authenticated. There is no explicit funnel to measure login-page conversion or to distinguish users who never clicked from those who clicked but abandoned the Keycloak step.

**Ownership clarification (added 2026-07-15):** All three events below are emitted by OTEP. WOG AD is not instrumented and does not emit analytics — it is an external identity check, not a tracking source. `login_succeeded` fires when OTEP observes a valid authenticated session returned from the WOG AD (or, currently, Keycloak) callback, not from any WOG AD-side event. Engineers do not need anything from WOG AD beyond a session response to build this ticket.

## Description

Add three product-analytics events to the existing typed catalog and define a PostHog funnel:

- **`login_page_viewed`** — fired once when the login page is shown to an unauthenticated visitor. Property `redirected_from_protected` (true when a `callbackUrl` is present) separates an intentional bounce from a protected route vs. a direct landing.
- **`login_started`** — fired when the user clicks the login button (start of the Keycloak/WOG AD hand-off).
- **`login_succeeded`** — fired once when a visitor who started login returns authenticated (the anonymous→identified transition). This is the conversion event.

**Funnel:** `login_page_viewed → login_started → login_succeeded`.
"Converted" = successful authentication. Login-page drop-off = a `login_page_viewed` with no subsequent `login_succeeded`; `login_started` separates "saw the page but never clicked" from "clicked but did not complete authentication."

## Acceptance Criteria

1. Landing on `/auth/login` emits `login_page_viewed`; `redirected_from_protected` is true only when arriving via a `callbackUrl`.
2. Clicking the login button emits `login_started` and initiates Keycloak/WOG AD sign-in with the resolved `callbackUrl`.
3. Returning authenticated after starting login emits `login_succeeded` exactly once; it does not re-fire on later page loads or trait refreshes, and does not fire for users who were already authenticated (SSO, never saw the login page).
4. A PostHog funnel `login_page_viewed → login_started → login_succeeded` can be built from the captured events.
5. **(Added)** Build against the current Keycloak stub. Event-firing logic is provider-agnostic and requires no changes when WOG AD replaces Keycloak as the identity provider (same pattern as OTEP-305).

## Non-Goals (added 2026-07-15)

- **Does not distinguish reason for drop-off** (credential failure, access denied, user abandonment). This funnel tells you *how much* drop-off exists, not *why*. Failure/denial event scope (`login_failed`, `login_denied`) is tracked separately and depends on OTEP-110 resolving whether OTEP's backend receives a specific error/denial signal to act on. Do not block this ticket on that resolution.
- **Does not cover the SSO-bypass blind spot.** If an officer arrives at a protected route with an already-valid WOG AD session (never sees `/auth/login`), no funnel events fire for that visit. This is a known, accepted gap, not a bug: once WOG AD SSO is live, total authenticated sessions will exceed the `login_page_viewed` count. Document this alongside the funnel so it isn't misread later as a conversion problem.

## Open Dependency (tracked separately, not blocking this ticket)

Whether OTEP-538's three events replace or sit alongside the WOG AD PRD's existing instrumentation plan (`login_attempt`, `login_success`, `login_failed`, `login_attempt_failed_access_denied` — owner: Rama). OTEP-538's events are more granular (splitting view/click/convert vs. a single `login_attempt`). Recommend OTEP-538's events become canonical and the WOG AD PRD's metrics section gets updated to reference them, rather than maintaining two parallel event sets for the same funnel. Confirm with Pow Hwee before both get built independently.

---

*Drafted 2026-07-15. Push to Jira and sync into `03-stories/jira-sync/` once created.*
