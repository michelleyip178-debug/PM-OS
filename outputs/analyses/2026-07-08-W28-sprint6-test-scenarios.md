# Test Scenarios: Sprint 6 — WOG AD Login & Access Routing

**Source:** Sprint 6 planning brief ([2026-07-07-W28-sprint-plan-brief.md](2026-07-07-W28-sprint-plan-brief.md)) + live Jira (OTEP-Pathfinder Sprint 6, board 34620)

**Scope covered:** OTEP-71 (WOG AD login success), OTEP-111 (no-access page), OTEP-613 (default agency logo), OTEP-110 (invalid-credential error display — re-scoped 2026-07-08, see below).

**Not covered here:** OTEP-594 (routing) and OTEP-331 (CSC SSO) are flagged 🔴 Not ready in the sprint brief — re-scope pending (decisions #7/#8/#9, unconfirmed 2-day POCDEX sync assumption). Scenarios for OTEP-594 are drafted below but marked **provisional** since the AC itself is still open; don't hand these to QA as committed coverage until re-scope lands.

**Total scenarios:** 22 (18 committed + 4 provisional for OTEP-594) — Scenario 11 restored 2026-07-08 after OTEP-110's scope was clarified (see below)

**Coverage:** happy path, edge cases, error handling, security (auth/session), cross-device

---

## OTEP-71: WOG AD Login Success

### Scenario 1: Successful login, onboarded agency, active POCDEX profile
**Tests:** OTEP-71 primary AC

**Preconditions:** Officer's agency is onboarded to OTEP; officer has an active POCDEX profile; officer is not currently logged in

**User role:** Public officer, pilot agency

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Navigate to OTEP login page | "Log in with WOG AD" button is visible, no other login form present |
| 2 | Click "Log in with WOG AD" | Redirected to WOG AD authentication (no OTEP-rendered credential form) |
| 3 | Enter valid WOG AD credentials | AD authenticates successfully |
| 4 | AD redirects back to OTEP | Officer lands on OTEP home page — no intermediate screen, no manual step |

**Postconditions:** Officer has an active session; no registration/account-creation step was shown

**Priority:** Critical

---

### Scenario 2: Login attempt — agency not yet onboarded
**Tests:** OTEP-71 AC ("agency not onboarded" message)

**Preconditions:** Officer has valid WOG AD credentials but agency is not on OTEP's onboarded list

**User role:** Public officer, non-pilot agency

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click "Log in with WOG AD" and authenticate successfully with AD | AD authentication succeeds |
| 2 | OTEP receives successful AD callback | Officer sees a message explicitly stating their agency isn't onboarded — not a generic error page |

**Postconditions:** No OTEP session is created; officer is not routed into the app

**Priority:** High

---

### Scenario 3: Invalid WOG AD credentials
**Tests:** OTEP-71 AC — **ownership moved to OTEP-110, see Scenario 11**

**Preconditions:** Officer enters credentials that AD rejects (wrong password, non-public-officer account)

**User role:** Any

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click "Log in with WOG AD" | Redirected to AD |
| 2 | Enter invalid credentials | AD returns a login failure |
| 3 | OTEP receives failure | Officer sees a clear error message — **rendered by OTEP** (see Scenario 11 for the full OTEP-110 scenario) |

**Postconditions:** No session created

**Priority:** Critical

**Resolved 2026-07-08 (final):** The OTEP-71/OTEP-110 ownership question was worked through twice today. First pass: OTEP renders no UI at all for invalid credentials (WOG AD owns it entirely). **Reverted same day:** the final scope is that **OTEP-110 owns invalid-credential error display** — OTEP does render this state, it is not left to WOG AD. OTEP-71's AC has been updated in Jira accordingly (out-of-scope note now points to OTEP-110 rather than claiming WOG AD handles it). See Scenario 11 for the full test scenario, now restored.

---

### Scenario 4 (Edge case): WOG AD account disabled or locked
**Tests:** OTEP-71 edge case (explicitly listed, "handled by WOG AD")

**Preconditions:** Officer's WOG AD account is disabled/locked

**User role:** Public officer with disabled account

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click "Log in with WOG AD" and attempt authentication | AD returns account-disabled/locked-specific error, not a generic failure |
| 2 | OTEP receives the AD response | OTEP passes through AD's specific message rather than substituting a generic one |

**Postconditions:** No session created

**Priority:** Medium

**Note:** AC states this is handled by WOG AD — confirm during grooming whether any OTEP-side testing is actually required, or whether this is out of scope for OTEP QA and belongs to the WOG AD service owner.

---

### Scenario 5 (Edge case): AD/network service unavailable
**Tests:** OTEP-71 edge case (network/AD service down)

**Preconditions:** WOG AD service is unreachable or timing out

**User role:** Any

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click "Log in with WOG AD" | Request to AD times out or fails to connect |
| 2 | OTEP detects the failure | Graceful error message shown — no blank page, no unhandled exception, no infinite spinner |

**Postconditions:** Officer can retry; no partial/corrupted session state

**Priority:** High

---

### Scenario 6: Multiple concurrent sessions
**Tests:** OTEP-71 open question ("allowed or not?") — **RESOLVED**

**Preconditions:** Officer is already logged in on Device A

**User role:** Public officer

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | While logged in on Device A, log in via WOG AD on Device B | Device A's session is invalidated — only a single active session is allowed per officer at any time |
| 2 | Officer returns to Device A and attempts an action | Device A is logged out / session rejected; officer is redirected to the login page |

**Postconditions:** Only Device B holds an active session; Device A requires a fresh login

**Priority:** Medium — now testable, and worth confirming the invalidation is enforced server-side (not just a UI state), since a client-only cutoff could be bypassed

**Resolved 2026-07-08:** Confirmed — OTEP enforces single active session per officer. Logging in on a new device invalidates the previous session. This closes both of OTEP-71's open questions (Scenario 7, agency de-onboarding, was resolved separately the same day).

**Build/test note:** Confirm with engineering whether invalidation is immediate (Device A's session dies the moment Device B logs in) or lazy (Device A's session dies on its next request/refresh). This affects both the test approach and what "invalidated" means in practice — e.g., does Device A see an active-looking UI until it tries to do something, or does it get force-redirected right away?

---

### Scenario 7: Agency de-onboarded after prior login
**Tests:** OTEP-71 open question ("agency removed — what happens on next login?") — **RESOLVED**

**Preconditions:** Officer previously logged in successfully; agency is subsequently removed from OTEP's onboarded list

**User role:** Public officer whose agency was removed

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Officer attempts to log in again after their agency has been de-onboarded | Officer sees the same "agency not onboarded" message as Scenario 2 — treated identically to an agency that was never onboarded |

**Postconditions:** No OTEP session is created

**Priority:** Low (unlikely near-term, but now testable as written)

**Resolved 2026-07-08:** Confirmed — officers from de-onboarded agencies see the same not-onboarded message as Scenario 2. No separate messaging or state needed. This closes one of OTEP-71's two open questions (Scenario 6, concurrent sessions, remains open).

---

## OTEP-111: Officers With No Access

### Scenario 8: Officer has no role profile
**Tests:** OTEP-111 primary AC

**Preconditions:** Officer is not part of the pilot and/or has no role profile

**User role:** Non-pilot officer

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Officer authenticates successfully via WOG AD | AD login succeeds |
| 2 | OTEP checks for role profile / pilot status and finds none | Officer sees: "Oops, you do not seem to have access at the moment. Please contact your HR for more information." — exact copy per AC |

**Postconditions:** No app access granted; message is not a generic 403/404

**Priority:** Critical

---

### Scenario 9: Officer's POCDEX profile is deactivated
**Tests:** OTEP-111 AC (deactivated status)

**Preconditions:** Officer's profile is marked inactive/deactivated in POCDEX (e.g., has left the service)

**User role:** Ex-officer with deactivated POCDEX record

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Officer authenticates successfully via WOG AD | AD login succeeds (AD doesn't know about POCDEX status) |
| 2 | OTEP checks POCDEX status | Same "no access" message as Scenario 8 shown — deactivated is treated identically to no-profile per AC |

**Postconditions:** No app access granted

**Priority:** High

---

### Scenario 10 (Edge case): Copy rendering / accessibility
**Tests:** OTEP-111 AC, general quality bar

**Preconditions:** No-access screen is triggered

**User role:** Any

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Trigger the no-access screen (any path above) | Message text matches AC exactly (no paraphrasing/truncation); page is screen-reader accessible; no dead-end trap (officer can navigate away, e.g. close tab or return to a public page) |

**Postconditions:** N/A

**Priority:** Low

---

## OTEP-110: Invalid-Credential Error Display — **RE-SCOPED 2026-07-08, real Sprint 6 work**

**Re-scoped 2026-07-08:** Earlier the same day this ticket was flagged (and briefly closed) as a near-no-op, on the assumption WOG AD owns all login-failure UI. That was reverted — the final, confirmed scope is that **OTEP-110 owns invalid-credential error display**. OTEP renders this error state itself; it is not left to WOG AD. This is real, testable FE work, not a documentation ticket. OTEP-71's AC has been updated in Jira to point invalid-credential handling to this ticket.

### Scenario 11: Invalid-credential error message displayed
**Tests:** OTEP-110 AC

**Preconditions:** Officer enters WOG AD credentials that are invalid (wrong password, not a recognized public officer account)

**User role:** Any

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click "Log in with WOG AD" | Redirected to AD |
| 2 | Enter invalid credentials | AD returns a login failure |
| 3 | OTEP receives the failure | Officer sees a clear, OTEP-rendered error message — not a redirect to a generic WOG AD error page |

**Postconditions:** No session created

**Priority:** Medium

**Out of scope for this ticket:** account disabled/locked and network/AD-service-unavailable states remain WOG AD's responsibility (OTEP-71's edge cases). Authorisation failures (no pilot access, no POCDEX profile) are OTEP-111's, not this ticket's.

---

## OTEP-613: Default Agency Logo

### Scenario 12: Opportunity card with no agency logo
**Tests:** OTEP-613 primary AC

**Preconditions:** An opportunity exists whose agency has no logo asset on file

**User role:** Any officer browsing the listing

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Load the opportunity listing page | Opportunity card for the logo-less agency displays a default/placeholder logo, not a broken image icon or blank space |

**Postconditions:** N/A

**Priority:** Low

---

### Scenario 13 (Edge case): Agency logo present but fails to load
**Tests:** OTEP-613 implied robustness (not explicit in ticket, but same failure class)

**Preconditions:** Agency has a logo URL on file, but the asset 404s or times out

**User role:** Any

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Load listing page where a logo URL is broken | Falls back to the same default logo, not a broken image icon |

**Postconditions:** N/A

**Priority:** Low

**Note:** Confirm with engineering whether this fallback-on-error case is in scope for OTEP-613 or deferred — the ticket has no description in Jira, so this is inferred, not confirmed AC.

---

## OTEP-594: Officer Routed to Correct Page (PROVISIONAL — decisions resolved, build pending)

**These scenarios were provisional pending three named decisions; all three are now resolved as of 2026-07-08.** OTEP-594's AC was flagged `[NEEDS RE-SCOPE: decision #7/#8/#9]` in Jira — that re-scope is done. What remains is that the system-error screen (Scenario 16) hasn't been built yet, so this is now a build-readiness gate, not a decision gate.

**Traced and resolved 2026-07-08** (source: [otep-stories/auth.md](../../../PM-skills-ALL-1/03-stories/otep-stories/auth.md)):
- ~~**#7** — OTEP-111/OTEP-594 boundary~~ — **RESOLVED:** "Pilot agency, no POCDEX profile yet" shows its own system-error state (Scenario 16), not OTEP-111's unauthorised page.
- ~~**#8** — system-error copy + 2-day retry assumption + screen existence~~ — **RESOLVED (as two parts):** copy revised to generic wording ("try again shortly," no hard-coded day count), decoupling it from the open POCDEX sync-cadence question (open-items #56 / gap #14). Screen existence confirmed: **it does not exist yet** — now a known build item, not an open question.
- ~~**#9** — auto-log-to-report-issue ownership~~ — **RESOLVED, but the answer changed the design:** there is no auto-logging. The screen has an officer-clicked "Report issue" CTA instead. This simplified the original ownership question (no backend auto-log pipeline needed) but opens one small follow-up: who owns triage/routing after the officer clicks the CTA — worth a quick confirm with Pow Hwee/Rama during build, not a blocker to scoping.

**Net position:** OTEP-594's re-scope is complete — AC rewritten directly in Jira 2026-07-08. The remaining gap is purely "the screen needs to be built." **Decision 2026-07-08: stays as one ticket** — the screen build is part of OTEP-594, not split into a separate story. Full tracking: [scoping-gaps-tracker #15](../../../PM-skills-ALL-1/03-stories/scoping-gaps-tracker.md).

### Scenario 14: Successful login, pilot agency, active POCDEX profile
| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Log in successfully; agency in pilot; active POCDEX profile exists | Land on Profile Page directly, no extra steps |

**Priority:** Critical (if committed)

### Scenario 15: Successful login, agency not in pilot
| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Log in successfully; agency not in pilot | Routed straight to OTEP-111's unauthorised page |

**Priority:** Critical (if committed) — **hard dependency on OTEP-111 shipping first**

### Scenario 16 (resolved, pending build): Pilot agency, no POCDEX profile yet
| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Log in successfully; agency in pilot; no POCDEX profile exists yet | Officer sees a dedicated system-error state — **not** OTEP-111's generic unauthorised page. Copy: "Sorry, the system is still setting up your details. Please try logging in again shortly, or use the button below if this keeps happening." Screen includes a **"Report issue" CTA** — officer-initiated, not automatic. |
| 2 | Officer clicks "Report issue" (if the state persists) | Issue is logged/routed for follow-up — exact destination/handling TBC with Pow Hwee/Rama as part of building this screen |

**Priority:** Critical (once built) — routing, copy, and reporting mechanism all confirmed; the screen itself does not exist yet

**Resolved 2026-07-08 (decision #7):** Confirmed — this case shows its own system-error state (this scenario), not OTEP-111's unauthorised page. This settles the OTEP-111/OTEP-594 boundary question.

**Resolved 2026-07-08 (decision #8, copy half):** Copy revised to drop the unconfirmed "2 days" figure — now generic ("try again shortly") rather than tied to a specific sync-lag number. This decouples copy sign-off from the still-open POCDEX sync-cadence question (open-items #56) — Imelda can approve this wording without waiting on Rama/Daryll's answer. Trade-off to note: "shortly" sets no explicit expectation, so if officers hit this state repeatedly over multiple days, it may read as more broken than a specific number would have — accepted as the better trade-off given the number itself isn't reliable yet.

**Confirmed 2026-07-08 (decision #8, build half): the screen is not built yet.** This is now a real, sized piece of Sprint 6+ work, not just an open question — someone needs to build this system-error state before this scenario can be tested at all, let alone committed. Recommend raising as a groomable story (design and copy now settled, just needs a ticket and an estimate) rather than leaving it folded inside OTEP-594.

**Resolved 2026-07-08 (decision #9):** No auto-log-to-report-issue. Instead, the screen has a **"Report issue" CTA** the officer clicks themselves. This changes the copy above (the original draft said "we've logged your case," which implied automatic logging — corrected to reflect officer-initiated reporting instead) and simplifies #9's original ownership question (no backend auto-logging pipeline to build/own) — but opens a smaller follow-up: who owns what happens after the officer clicks "Report issue" (routing, triage, SLA)? Worth a quick confirm with Pow Hwee/Rama when the screen gets built, though this is now an implementation detail rather than a blocking product decision.

**All three named decisions (#7, #8, #9) are now resolved.** The only remaining blocker is that **the screen itself doesn't exist yet** — this scenario moves from "blocked on decisions" to "blocked on build." See [scoping-gaps-tracker #15](../../../PM-skills-ALL-1/03-stories/scoping-gaps-tracker.md).

### Scenario 17: Direct URL access without session
| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Type an OTEP URL directly into the browser without an active authorized session | Redirected appropriately (route-guard NFR per Rama, Squad Sync decision #11) — no session starts, no partial page render |

**Priority:** High (if committed) — this is a security-relevant route-guard check, worth testing even if the rest of OTEP-594 slips, since it's a distinct NFR

---

## Coverage Matrix

| Requirement | Happy Path | Edge Cases | Error Handling | Security | Notes |
|---|---|---|---|---|---|
| OTEP-71 (WOG AD login) | ✅ S1 | ✅ S6, S7 (both resolved) | ✅ S3 (revised), S4, S5 | ✅ S1, S6 (single active session enforced) | Both of OTEP-71's open questions resolved 2026-07-08 — S6: single active session enforced; S7: behaves like Scenario 2. S3 is now a no-op/regression check, not new coverage |
| OTEP-111 (no access) | ✅ S8, S9 | ✅ S10 | — | ✅ (dead-end prevention) | Fixed copy, low ambiguity |
| OTEP-110 (invalid-credential error) | — | — | ✅ S11 | — | **Re-scoped 2026-07-08** — real Sprint 6 work; OTEP renders this error state (not WOG AD). Owns invalid-credential display per OTEP-71's updated AC |
| OTEP-613 (default logo) | ✅ S12 | ✅ S13 | — | — | Trivial, low risk |
| OTEP-594 (routing) — provisional | ✅ S14, S15 | ⚠️ S16 (routing + copy + #9 resolved; screen still needs building) | — | ✅ S17 | Decisions #7, #8 (both halves), and #9 all resolved 2026-07-08. Screen doesn't exist yet — real build item, not an open question. Do not commit to sprint until built and tested |

---

## Test Data Requirements

- **WOG AD test accounts:** at least one valid officer account per pilot agency; one account for a non-onboarded agency; one disabled/locked account (may require coordination with the WOG AD service owner — confirm test account provisioning process, since AD-side failure states are outside OTEP's control)
- **POCDEX test profiles:** one active profile, one deactivated profile, one officer with no profile record at all
- **Agency logo test data:** at least one agency with a valid logo asset, one agency with a broken/404 logo URL, one agency with no logo field set
- **Session tooling:** ability to simulate a second concurrent login (different device/browser) for Scenario 6, and to verify the first session is actually invalidated (not just that a second login succeeds) — needed to confirm single-active-session enforcement, not just observe it superficially

---

## Open Items to Resolve Before/During Grooming

1. ~~**OTEP-71 vs OTEP-110 ownership overlap** on "invalid credentials" (Scenario 3)~~ — **RESOLVED 2026-07-08 (final):** OTEP-110 owns invalid-credential error display; OTEP renders this state itself. Both tickets' ACs updated directly in Jira to reflect this split cleanly. (Note: an earlier pass today briefly concluded the opposite — WOG AD owns it entirely, OTEP-110 closed — before being reverted to this final scope.)
2. ~~**OTEP-71's two open questions** (concurrent sessions, agency de-onboarding)~~ — **BOTH RESOLVED 2026-07-08:** Concurrent sessions (Scenario 6) — single active session enforced, new login invalidates the prior device's session. Agency de-onboarding (Scenario 7) — same message as Scenario 2. OTEP-71's AC can now be fully specified with no undefined behavior remaining.
3. ~~**OTEP-594 re-scope** (decisions #7/#8/#9)~~ — **ALL THREE RESOLVED 2026-07-08, AC rewritten directly in Jira:** #7 — "no POCDEX profile yet" routes to its own system-error state (Scenario 16), not OTEP-111. #8 — copy revised to generic wording ("try again shortly," decoupled from the open sync-lag question); screen confirmed **not built yet**. #9 — no auto-logging; officer-clicked "Report issue" CTA instead. **Remaining gap: the screen itself needs to be built, within OTEP-594** (kept as one ticket, not split). Tracked as [scoping-gaps-tracker #15](../../../PM-skills-ALL-1/03-stories/scoping-gaps-tracker.md) — still not committed to Sprint 6 until built and tested.
4. **Scenario 5 (AD/network unavailable) has no defined timeout threshold** — confirm whether there's a specific number of seconds before OTEP shows the graceful error, or whether "unreachable" is left as an undefined duration. Untestable precisely without a threshold.
5. **Scenario 9 (deactivated POCDEX profile) assumes POCDEX returns an explicit status flag** — confirm POCDEX actually distinguishes "deactivated" from "no record found" in its response. If it doesn't, Scenario 9 silently collapses into Scenario 8's path and the two AC branches may not be separately testable.
6. **Scenario 17 (direct URL access / route-guard NFR) has no clear ticket owner** — it's currently only defined inside OTEP-594 (provisional, not sprint-ready). If OTEP-594 doesn't make Sprint 6, confirm who owns building and testing the route-guard behavior, since it's a security-relevant NFR worth shipping independently of the rest of OTEP-594's routing logic.
7. **New from Scenario 6's resolution: confirm invalidation timing (immediate vs. lazy)** — determines both test approach and officer-facing behavior on the invalidated device. Raise with engineering before sizing OTEP-71, since immediate server-push invalidation is more build effort than lazy/next-request invalidation.

---

*Generated: 2026-07-08*
*Updated: 2026-07-08 — OTEP-71, OTEP-110, and OTEP-594 ACs corrected directly in Jira. OTEP-110 re-scoped to own invalid-credential error display (real Sprint 6 work, not closed). Remaining open items for Sprint 6 planning: OTEP-594's system-error screen still needs to be built (kept as one ticket), Scenario 5's timeout threshold, Scenario 9's POCDEX status-flag assumption, and Scenario 17's ownership if OTEP-594 doesn't make the sprint.*
