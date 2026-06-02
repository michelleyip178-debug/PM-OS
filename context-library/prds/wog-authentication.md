# WOG Authentication — Identity Verification

<!-- Paths in this file are relative to THIS file's location (knowledge/product/features/wog-authentication.md). -->

## Meta
- Owner: Michelle Yip
- Status: building
- Priority: MVP P0 — foundational, blocks all other features requiring auth
- Last updated: 2026-05-22

## Problem

CareerCompass must use WOG Active Directory (AD) for authentication — this is a mandate, not a design choice. Officers access the platform using existing WOG credentials, with no separate CareerCompass account required.

The shared-computer reality of government agencies makes session management a hard security requirement, not just a UX concern. An officer logging out must fully terminate their session so the next person on the same machine cannot access their data. IM8 policy governs the specifics: 30-minute inactivity timeout, 12-hour maximum session duration.

WOG Auth is P0 for the MVP because every CareerCompass feature assumes a verified, logged-in officer. Nothing else ships without it.

## Target users

- **All public officers from onboarded agencies** logging into CareerCompass (any feature)
- **MVP pilot = 6 agencies (~5,400 officers): PSD, ESG, MDDI, URA, MCCY, CAAS** — onboarded in staggered pairs (Implementation Details, 2026-06-02). Pilot access control (OTEP-111) restricts login to these agencies.

**Out of scope for MVP auth:** MOE-Schools, MINDEF, ASTAR, DSTA — these agencies will not be onboarded for pilot. Non-WOG authentication paths (e.g. Singpass for MOE/MINDEF) are deferred post-MVP.

## Success metrics

> Defined 2026-06-02 (Michelle). Targets are pilot-starting proposals for the MVP-6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS — ~5,400 officers) — baselines-first per Dec '26 OKRs; firm up before Sprint 4. Shared with Adrian for sign-off.

**Framing:** Auth is foundational P0 — success = login works reliably, the right officer gets in, the wrong one stays out. Reliability + access, not growth.

**Core metrics:**

| Metric | Definition | Pilot target | Baseline |
|--------|-----------|--------------|----------|
| Login success rate | `login_success` / `login_attempt` | ≥ 98% | Set at pilot Day 1 |
| Auth error rate | (`login_failed` + `access_denied`) / `login_attempt` | < 2% (access-denied only for genuine non-pilot/deactivated) | Set at pilot |
| Pilot officer satisfaction | UAT survey, login experience | ≥ 3.5/5 (MVP OKR) | OKR target |

**Guardrails (must-not-break):**
- IM8 session compliance — 30-min inactivity + 12-hr max enforced in prod (binary)
- Shared-computer logout integrity — next user cannot reach prior officer's data (zero tolerance)
- POCDEX first-login pre-fill mismatch (name/email) < 5%
- COMET / Azure AD availability + latency on the login path

**Instrumentation events (PostHog — Rama):**
- `login_attempt` · `login_success` · `login_failed` · `login_attempt_failed_access_denied`
→ give login success rate + auth error rate directly. Satisfaction from pilot UAT survey.

**Open dependencies for these metrics:**
- OTEP-110: if WOG AD owns all error states, `login_failed` may not be an OTEP-side event — resolve at Sprint 4 grooming.
- OTEP-111: pilot access check by agency name or ID — determines access-denied accuracy.

## Scope — MVP user stories

| Jira ID | Story | Sprint / Notes |
|---|---|---|
| OTEP-71 | Single-click WOG AD login for onboarded agencies; clear error for un-onboarded or invalid credentials | **Sprint 4+** — moved from Sprint 3 (no UAT env). WOGAD approval 2–4 weeks; submit immediately. |
| OTEP-304 | Session persistence while active; 30-min inactivity timeout; expired-session message | **Sprint 4+**. IM8 policy: 30 min inactivity / 12 hr max. Timeout value marked TBD in PRD. |
| OTEP-72 | New Officer account creation | Sprint 1 ✓ |
| OTEP-110 ⚠️ | Login failure troubleshooting and retry for pilot users | **Sprint 4+**. **Jira ACs mismatch** — Jira: WOG AD handles all errors. PRD: OTEP shows error UI. Resolve at grooming. Absorbs WOG-12 + WOG-13; WOG-15 is NFR. |
| OTEP-111 | Access denied message for non-pilot users and deactivated POCDEX profiles | Sprint 1 ✓. Confirm it covers WOG-08 + WOG-09. Backend check method TBC: agency name or agency ID |
| OTEP-305 | Login + logout pages: session end, back-button prevention, URL-redirect to login; shared-computer edge case | **Pages buildable NOW (Sprint 3) against Keycloak stub; WOG AD swaps in S4+** (D 2026-06-02). Multi-device logout depends on session architecture (TBD). Needs owner. |
| WOG-10 | Resolve agency from AD identity | **Sprint 4+** (Needs ticket). Blocked on Pow Hwee agency-resolution decision. |
| WOG-06 | First-time login + profile setup (name only) | **Sprint 4+** (Needs ticket). Trimmed to name-only; absorbs WOG-19 + WOG-20. |
| WOG-17 | Complete logout on shared devices | **Sprint 4+** (Needs ticket). Pairs with OTEP-305. |
| WOG-14 | Spike — confirm rate-limiting ownership | **Sprint 4+ pre-work** (Spike). Likely build nothing (WOG AD owns lockout per assumption). |

## Technical constraints

- **Azure AD via COMET** — Azure cannot be accessed via GSIB; COMET onboarding required before any WOG AD work can proceed
- **WOGAD approval:** 2–4 week lead time — **submit immediately** to avoid Sprint 4 slip
- **IM8 policy (session):** 12-hour max session duration; 30-minute inactivity timeout (reference: IM8 low-risk cloud plan)
- **Identity source of truth:** POCDEX — profiles created by agency HR in HRPS or Cumulus, pushed to POCDEX, then pushed instantaneously to OTEP
- **Pilot access control:** Backend check for pilot group by agency name or agency ID — method TBC (OTEP-111)

## Risks (from feature file + PRD)

See [../../../hypotheses/wog-authentication.md](../../../hypotheses/wog-authentication.md) for full hypothesis set.

Key risks:
- **Feasibility (blocking):** WOG AD UAT environment unavailable — caused Sprint 3 → Sprint 4 slip
- **Feasibility (blocking):** WOGAD approval 2–4 weeks; COMET onboarding required — both must be in flight
- **Feasibility:** OTEP-110 Jira/PRD mismatch — scope conflict on error state ownership (OTEP vs WOG AD)
- **Policy:** IM8 session requirements are non-negotiable constraints; must be implemented correctly
- **Data:** POCDEX data quality governs first-login pre-fill accuracy; stale POCDEX data = wrong pre-filled profile

## Dependencies & Scope

- **Azure AD / COMET:** WOG AD access requires COMET (not GSIB); COMET onboarding is a hard prerequisite
- **AGD/WOG AD:** Approval process owner; 2–4 week lead time
- **POCDEX:** Identity and profile data source for ringfencing and first-login pre-fill; links to [../../../knowledge/product/features/pocdex.md](../../../knowledge/product/features/pocdex.md)
- **CSC:** ~4 weeks after documentation submission for SSO setup (from existing feature notes)
- **IM8 policy:** Low-risk cloud plan governs session parameters

## Interim approach — build now against Keycloak (2026-06-02)
- **WOG AD domain submission still pending (#26), but auth FE work proceeds in parallel.** Build the actual login/logout pages now using the existing Keycloak stub (OTEP-190) as the interim identity provider; swap to WOG AD once onboarding completes. OTEP-305 = real login/logout UI + session/logout behaviour against Keycloak. This de-risks the Sprint 4+ slip by getting the pages built early without waiting on the 2–4 week approval clock. (Decision 2026-06-02.)

## Integration Risks (Sprint 4)
- **Domain name approval — partially unblocked (2026-05-21):** Decision made to submit `careercompass.gov.sg` as the intranet URL. Pow Hwee confirmed viable subject to policy (informal, not formally verified). Michelle is the action owner for submission. Internet URL question deferred. See [decisions/2026-05-21-wogad-domain-careercompass.md](../../../decisions/2026-05-21-wogad-domain-careercompass.md).
- **WOGAD approval (2–4 weeks):** Clock starts after domain name submission is sent — submission not yet confirmed as sent.
- Onboarding dependency on AGD/WOG AD
- CSC requires ~4 weeks after documentation submission for SSO setup
- No clear UAT environment for WOG AD (caused Sprint 3 slip)

## Evidence

- [ingestion/adhoc/2026-05-22-epic5-wog-authentication-prd.md](../../../ingestion/adhoc/2026-05-22-epic5-wog-authentication-prd.md)

## Linked

- Hypotheses: [../../../hypotheses/wog-authentication.md](../../../hypotheses/wog-authentication.md)
- Stakeholders: [../../../stakeholders/pow-hwee.md](../../../stakeholders/pow-hwee.md)

## Open questions

- **OTEP-110 scope (critical):** Does OTEP show any error UI on login failure, or does WOG AD handle all error states? Resolve before Sprint 4 grooming.
- **Session timeout value (OTEP-304):** Marked TBD in PRD; IM8 says 30 min — Engineering to confirm and hardcode.
- **Backend access check (OTEP-111):** Agency name or agency ID? Unresolved; blocks pilot access control.
- **Non-WOG Authentication:** How will MOE, MINDEF, and retired officers authenticate? (Pow Hwee proposed Singpass; needs formal scoping).
- **Multi-device logout (OTEP-305):** Behaviour depends on session architecture — not yet decided.
- **WOGAD approval submitted?** If not yet submitted, must go out immediately to avoid further Sprint 4 slip.
- **Target user (PRD error):** Stated as "HR officers posting STIPs or GIGs" — appears to be wrong. All officers logging in are the target user. PM to correct.
- **Success metrics:** Entirely undefined — no targets or baselines. PM to complete before Sprint 4.

## Follow-up after launch

- Monitor auth error rate and login success rate at Day 1, Week 1
- Confirm session timeout enforcement matches IM8 policy in production
- Check first-login POCDEX pre-fill accuracy — flag if name/email mismatch rate is >5%
- Evaluate whether OTEP-110 error messaging is sufficient for pilot users, or if WOG AD's error screens are adequate
