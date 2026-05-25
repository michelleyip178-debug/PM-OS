# POCDEX Integration

**Stage:** XFN Kickoff
**Last Updated:** 2026-05-25
**PM:** Michelle Yip
**Tech Lead:** Pow Hwee
**POCDEX Owner:** Daryll (POCDEX Team Lead)
**Status:** Draft — for Daryll planning session
**Priority:** MVP P0 — elevated to Epic 2026-05-25

---

## Hypothesis

Public officers can only access OTEP if their account exists and their access is verified as ringfenced. Today, neither account creation nor access control is automated — both would require manual setup, which doesn't scale for a WOG platform.

**If** OTEP receives automated, near real-time profile pushes from POCDEX,
**then** officer accounts will exist before officers attempt to log in, and ringfencing will enforce pilot access dynamically,
**because** HRPS/Cumulus is the source of truth for all WOG public officer records, and POCDEX is the authoritative pipeline to downstream systems.

**Supporting evidence:**
- Pilot agencies (ESG, PSD) have thousands of officers — manual account creation is not viable at any scale
- Ringfencing must be dynamic: officer eligibility changes as agencies onboard and offboard
- OTEP-183 (Sprint 1 spike) confirmed the POCDEX push mechanism is technically viable

---

## Strategic Fit

POCDEX is the foundation everything else depends on. WOG Auth, Opportunities Listing, and Ringfencing all assume a verified, POCDEX-created officer profile exists before an officer logs in. If POCDEX plumbing slips in Sprint 3, the Sprint 4 Ringfencing and WOG Auth work cannot proceed, which puts the October 2026 launch date at risk.

Elevated to Epic on 2026-05-25 for closer external dependency tracking.

---

## Integration Contract

**What OTEP needs from POCDEX:**

| Requirement | Detail | Sprint |
|-------------|--------|--------|
| Officer profile push | Near real-time push when record is created or updated in HRPS/Cumulus | Sprint 3 plumbing |
| Seed database | Bulk push of existing officer records for pilot agencies (ESG, PSD) | Sprint 4 (OTEP-202) |
| Ringfencing flag | Agency indicator for pilot access control | Sprint 4 (OTEP-127) |
| Agreed schema | Officer ID, name, email, agency — confirmed in Sprint 1 spike | Done |

**What happens on OTEP's side when a push arrives:**
1. OTEP receives push from POCDEX
2. If officer account doesn't exist: create account
3. If officer account exists: update profile (name, email, agency)
4. Ringfencing check: if officer's agency is in pilot list → grant access; if not → deny with clear message

**Edge case — officer logs in before POCDEX push arrives:**
This is the primary user experience risk. If an officer's record hasn't arrived from POCDEX yet, OTEP cannot create their account and must block access. The error message matters:

> "Your account is being set up. Please try again shortly or contact your HR administrator."

Not a generic 404. A clear, recoverable message that doesn't make the officer think they're locked out permanently.

---

## Success Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| Automated account creation rate | 100% of officers from pilot agencies | Zero manual setup for ESG + PSD pilots |
| Unauthorized access rate | 0% | Non-ringfenced officers must never reach the platform |
| Pre-POCDEX login error rate (Day 1) | < 5% of login attempts | High count = timing gap between HR record creation and POCDEX push |

**Latency assumption (to validate with Daryll):**
Near real-time push is assumed. No hard SLA is currently defined. If the push takes >4 hours after HR record creation, pre-login errors become a material risk. The planning session should surface the realistic latency expectation and determine if OTEP needs a fallback or retry flow.

---

## Sprint Plan

| Sprint | Ticket | Work | Status |
|--------|--------|------|--------|
| Sprint 1 | OTEP-183 | Spike: confirmed POCDEX push viable | ✅ Done |
| Sprint 3 | OTEP-271, OTEP-203 | Active plumbing — POCDEX → OTEP connection | In progress |
| Sprint 4 | OTEP-202 | Seed database: bulk push of existing officer records | Timeline TBC — blocks Sprint 4 ringfencing |
| Sprint 4 | OTEP-127 | Ringfencing build: agency-based access control | Blocked on OTEP-202 |

**Critical path:** OTEP-202 (seed database) must be ready before OTEP-127 (ringfencing) can be validated. Any delay to OTEP-202 flows directly into Sprint 4 risk and cascades to the October date.

---

## Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Pre-POCDEX login race condition | Officers blocked at login on Day 1 | Medium | Clear error messaging; monitor error rate at go-live |
| No established support structure | Issues at go-live have no escalation path | High — OTEP is the first POCDEX API consumer | Define support runbook in planning session |
| OTEP-202 delay | Ringfencing build blocked; October date at risk | Medium — external dependency | Confirm timeline this week |
| Silent push failures | Missing accounts with no alert | High — invisible to both teams | Agree alerting / retry mechanism with Daryll |
| POCDEX data quality | Stale or incorrect records affect access and profile pre-fill | Low | Monitor sync error rate post-launch |

---

## Open Questions — For Daryll Planning Session

| Question | Owner | Priority |
|----------|-------|----------|
| When will OTEP-202 (seed database) be ready? | Daryll | P0 — blocks Sprint 4 |
| What is the expected push latency HRPS/Cumulus → POCDEX → OTEP? | Daryll | High — affects error rate risk |
| Who is the go-live support contact for POCDEX API issues during pilot? | Daryll | High — no support structure yet |
| What is the escalation path if a push fails silently? | Daryll + Pow Hwee | High — silent failures = missing accounts |
| Is there a sandbox / test environment for POCDEX before Sprint 3 integration? | Daryll | Medium — needed to unblock testing |

---

## What We Need from the Planning Session

A 30-45 min session with Daryll to close four things:

1. **OTEP-202 delivery date** — firm date or confidence level. This is the most urgent item.
2. **Go-live support runbook** — who to contact, what the escalation path is, and what the response SLA is during the pilot.
3. **Push latency expectation** — realistic number so we can decide if a fallback is needed for the pre-login edge case.
4. **Test environment** — confirm if a POCDEX sandbox exists to unblock Sprint 3 integration work.

---

## Dependencies

| System | Owner | Role |
|--------|-------|------|
| HRPS / Cumulus | HR systems team | Source of officer data entry |
| POCDEX | Daryll (POCDEX Team Lead) | Data aggregation and push pipeline |
| OTEP | Pow Hwee (Tech Lead) | Receives push, creates accounts, enforces ringfencing |

---

*Full evidence trail: `context-library/prds/pocdex.md`, `outputs/meeting-notes/2026-05-25-otep-standup-slack.md`*
*Next: Schedule planning session with Daryll. Confirm OTEP-202 timeline.*
