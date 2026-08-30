# Meeting Notes: Daily VAPT Activities — CSC-Compass SSO

**Date:** 26 Aug 2026

**Attendees:** Pow Hwee TAN, Rama MOORTHY, Michelle YIP, CSC team (Muhammad Herman HARTOYO, Peter LOW, Thomas), DLE team, Hao Eng CHUA, Kingsley LOW (referenced)

**Meeting Type:** Technical troubleshooting / daily VAPT sync — direct continuation of [25 Aug CSC-SSO troubleshooting session](2026-08-25-W35-csc-sso-troubleshooting.md)

**Source:** PM's own structured executive assessment of the meeting, not a raw transcript — retained as provided, including the Overall Assessment, Risks Not Being Fully Addressed, and Recommendation sections, which are the PM's own synthesis.

---

## Overall Assessment

**Status: 🟡 Amber**

Near-term path to MVP may exist via Solution 1, but unresolved risks remain around identity propagation, account lifecycle management, environment consistency, production onboarding assumptions, and operational support after launch. These could re-emerge even if Solution 1 passes testing.

**What went well:**
- Team converged on a likely root cause
- Immediate workaround (Solution 1) identified and near-ready for testing
- Clear ownership across CSC, Compass, DLE, and vendors
- Test accounts agreed
- Configuration changes reportedly completed during the meeting, deployment/testing planned immediately

**What didn't go well:**
- Architecture and environment setup remain poorly understood across parties
- Multiple participants uncertain about environment mappings, account provisioning assumptions, exact nature of each solution
- Testing strategy remains ad hoc
- Long-term solution ownership not definitively established

---

## What Actually Happened — Root Cause Hypothesis

Confirms and narrows yesterday's Menlo hypothesis to a specific mechanism, accepted by all participants with no alternative root causes raised:

1. User starts from Career Compass
2. Authentication session established within Compass/Keycloak
3. User clicks into DLE course details
4. DNS routing causes traffic to traverse a different internet path (via Menlo)
5. DLE cannot see the existing session cookie
6. DLE redirects back with "login required"

---

## Solutions Discussed

| Solution | Approach | Pros | Cons |
|---|---|---|---|
| **1 — Short-term MVP fix** *(= yesterday's Path B)* | Force an interactive login prompt; user authenticates once, session then established | Minimal effort, config change not major dev, testable immediately | Not true seamless SSO; user sees a login prompt; no end-to-end evidence yet — testing hadn't completed during the meeting |
| **2 — Token-based backend validation** *(= yesterday's Path C)* | Pass temporary token through backend callback; DLE validates session via backend call instead of browser cookies | More resilient, less dependent on cookie visibility, better suited if Menlo routing is unavoidable | Requires dev on both sides; new endpoint creation; potential VAPT implications |
| **3** | Mentioned, explicitly dropped | — | Participants stated they don't intend to pursue further |

**Note:** yesterday's "Path A — investigate/whitelist via Menlo" doesn't appear as a distinct track today — worth confirming whether it's folded into the Solution 1/2 framing or has quietly dropped off, since it was the *preferred* path as of yesterday.

---

## Decisions Made

| # | Decision | Detail |
|---|---|---|
| 1 | Proceed with Solution 1 first | Immediate effort focused on Solution 1; validate whether it resolves the issue sufficiently for MVP |
| 2 | Create shared test accounts | DLE will create Michelle, Rama, Imelda accounts in their environment — these users already exist in Compass test environments |
| 3 | Use WGAD accounts for SSO testing | Common WGAD-based users are the easiest way to validate end-to-end behavior |
| 4 | Test immediately after deployment | Config changes reportedly completed; deployment/testing to commence once updated version is available |
| 5 | Long-term solution deferred pending outcome | If Solution 1 proves seamless enough, Solution 2 may be unnecessary. If Solution 1 remains imperfect, Solution 2 likely revisited after MVP |

---

## Action Items

| Task | Owner | Due | Notes |
|---|---|---|---|
| Remove problematic configuration, support Solution 1 testing | CSC team (Muhammad Herman HARTOYO, Peter LOW) | Not specified — flag: schedule within 48 hours | |
| Deploy updated configuration | Thomas | Not specified — flag: schedule within 48 hours | |
| Validate new flow after deployment | CSC + Compass teams | Not specified | Depends on deployment above |
| Create Michelle/Rama/Imelda test accounts in DLE | DLE team | Not specified | |
| Coordinate testing once environment is ready | Hao Eng CHUA | Not specified | |
| Sync with Kingsley Low regarding environment routing | Thomas | Not specified | Ties to Risk R3 (environment alignment) |
| Share documentation for Solution 2 proposal | Pow Hwee TAN | Not specified | |
| Track long-term prioritisation if needed | Rama MOORTHY / Compass team | Not specified | Contingent on Solution 1 outcome |

**No due dates were stated in the meeting** — same gap as yesterday's session, where dates had to be backward-planned from checkpoint dates. Worth setting explicit dates rather than letting these run open-ended, especially given the November launch and VAPT runway pressure flagged yesterday.

---

## Risks Raised Explicitly (in the meeting)

| # | Risk | Detail |
|---|---|---|
| R1 | Production launch risk | Rama flagged the planned November launch and concern Solution 2 may involve VAPT effort that impacts delivery timelines |
| R2 | Account existence dependency | DLE confirmed accounts are assumed to already exist in Learn — no account, no automatic creation, user gets account-not-found error |
| R3 | Environment alignment risk | Uncertainty on Dev/QA/UAT/Staging and how routing differs across each — several exchanges spent just clarifying mappings |

---

## Risks Not Being Fully Addressed (PM's assessment)

Largely unchallenged in the meeting — flagged as the biggest concerns going forward.

| # | Risk | Detail |
|---|---|---|
| 1 | Provisioning dependency not owned | Assumption: HRPS/Cumulus → ProxTer → DLE Account creates users automatically. Nobody discussed sync failure handling, monitoring, reconciliation, Day-2 support ownership, or user-facing error handling. Substantial operational readiness gap. |
| 2 | User experience acceptance undefined | Team repeatedly said "user may have to log in once" but never decided if that's acceptable for MVP, whether it counts as SSO success, or whether it's a release blocker. Testing could pass technically while failing business expectations. |
| 3 | No UAT exit criteria | Discussion focused only on whether login works — not retry behavior, expired sessions, logout flow, first-time users, multiple browsers, Menlo variations, or mobile. No completion criteria defined. |
| 4 | Menlo dependency still exists | Root cause hypothesis points at Menlo network path changes, but no confirmation that Menlo behavior is understood, stable, or that future policy changes won't break the workaround. Team is treating symptoms, not validating the underlying dependency. |
| 5 | No operational support model | Particularly relevant to Day-2 responsibilities. Nobody discussed who triages SSO incidents, which logs prove root cause, escalation path between CSC/Compass/DLE/infrastructure, support SLAs, or monitoring/alerting. Risk of finger-pointing if production login failures occur. |
| 6 | Test data quality risk | Michelle's question on P-admin account and course associations clarified that the four test users were created mainly for recommendation testing — SSO testing only needs account existence. Gap: SSO testing is detached from realistic learning journeys. Login could succeed and catalogue work, while recommendation/deep-link scenarios fail later. |

---

## Stakeholder Notes

| Person | Contribution |
|---|---|
| Pow Hwee TAN | Drove troubleshooting effectively — came prepared with hypotheses and solution options, kept focus on execution |
| Rama MOORTHY | Focused on launch impact, long-term architecture, VAPT implications — asked questions that exposed assumption gaps |
| Michelle YIP | Raised the WGAD test-account course-association question — one of the more important testing-quality questions in the session |
| CSC / DLE team | Generally collaborative and responsive — configuration changes and account creation actioned rapidly during the meeting |

---

## Recommendation — RAID Entry

| Type | Description |
|---|---|
| Risk | SSO workaround (Solution 1) may not deliver seamless authentication across Menlo-routed traffic |
| Assumption | Learn accounts already exist via HRPS/Cumulus synchronisation |
| Issue | End-to-end testing not yet completed at time of meeting |
| Dependency | DLE account provisioning, Menlo routing behavior, configuration deployment, WGAD test accounts |

**Before sign-off, request three artefacts:**
1. SSO UAT test matrix (happy path + edge cases)
2. Day-2 support ownership model (CSC/Compass/DLE)
3. Explicit MVP acceptance criterion — is "one additional login prompt" acceptable or not?

These are the three biggest unanswered questions from this session.

---

## Open Questions

- [ ] Is "one additional login prompt" (Solution 1) acceptable for MVP, or a release blocker? — **Owner:** not yet assigned
- [ ] What's the Day-2 support/escalation model across CSC/Compass/DLE if SSO fails in production? — **Owner:** not yet assigned
- [ ] What are the UAT exit criteria beyond "does login work"? — **Owner:** not yet assigned
- [ ] Did yesterday's "Path A — Menlo whitelisting" investigation continue, or has it been superseded by Solution 1/2? — **Owner:** not yet assigned
- [ ] Who decides between Solution 1 and Solution 2 if Solution 1's testing is inconclusive? — **Owner:** not yet assigned (same gap flagged yesterday — no decision owner named)

---

## Next Steps

**Immediate:** deployment/testing of Solution 1 once the updated configuration is live (owners in Action Items above).

**Before sign-off:** the three artefacts listed under Recommendation — test matrix, support ownership model, MVP acceptance criterion.

**Follow-up:** no explicit follow-up meeting stated. Given the recurring "who decides" gap from yesterday's session and still present today, worth setting one deliberately rather than letting it continue ad hoc.

---

## Context for Future Reference

**Relates to:**
- [25 Aug CSC-SSO troubleshooting session](2026-08-25-W35-csc-sso-troubleshooting.md) — direct predecessor. The Menlo hypothesis moved from "working theory, needs evidence" to "accepted, no alternatives raised." Yesterday's Path B is today's Solution 1; Path C is Solution 2. Path A (Menlo whitelisting) doesn't clearly appear today — worth confirming its status.
- [POCDEX timeline sync](2026-08-25-W35-pocdex-timeline-sync.md) — VAPT sign-off due ~7 Nov against a 24-25 Nov launch. Today's R1 (Rama's VAPT-impact concern on Solution 2) sits inside that same compressed runway.

**Same pattern as yesterday, still unresolved:** yesterday's notes flagged "who decides" as the recurring gap across four separate meetings that day. Today's session repeats it — no named owner for the Solution 1 vs. Solution 2 call, no named owner for MVP acceptance criteria, no named owner for Day-2 support model. This is now the second consecutive day this exact gap shows up on the same workstream. Worth raising as a standing pattern with Adrian or Rama rather than re-flagging it meeting by meeting.

**Escalation SLA still missing:** yesterday's notes recommended setting an explicit escalation SLA (artefact-ready date, response window, fallback trigger). No such SLA appears in today's notes either — action items again have no due dates.
