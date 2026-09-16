---
title: POCDEX Performance & UAT Data Sync (Compass x POCDEX)
date: 2026-09-09
week: W37
type: Cross-team sync (Compass x POCDEX / GovTech)
attendees: Michelle Yip (PM, Compass), Adrian Ang (Product Lead, Compass), Rathika Ramalingam (QA), Thomas Huchede (Compass eng), Johnny Lim (GovTech, POCDEX API owner), POCDEX test-data owner
duration: not stated
---

# POCDEX Performance & UAT Data Sync

**Date:** 9 September 2026 (W37)

**Type:** Cross-team sync, Compass x POCDEX (GovTech)

**Attendees:** Michelle Yip (PM), Adrian Ang (Product Lead), Rathika Ramalingam (QA), Thomas Huchede (Compass eng), Johnny Lim (GovTech, POCDEX API owner), POCDEX test-data owner

**Note on names:** the raw debrief used "Podex" (POCDEX), "Ratika" / "Inada" (Rathika Ramalingam), and "Speaker 2" / "Speaker 6" for unnamed POCDEX-side people. Corrected where clear, flagged where not.

---

## Summary

Compass and POCDEX aligned on POCDEX API rate limits (100 TPS, 2M calls/day), agreed the stress-test "break points" (20/40/60/80 TPS) are upper limits for testing rather than expected production load, and confirmed Compass should keep working on stale profile data when POCDEX is unavailable. The perf-test plan is multi-day: 15-minute base and stress runs, one 12-hour endurance run, with teams on standby roughly 4pm to 9am and a real-time comms channel. The unresolved area is UAT test data: Compass wants to manipulate "last updated" dates locally to trigger POCDEX refresh behaviour, but the POCDEX side cannot confirm the current test data supports Compass's scenarios because Compass's end-to-end user journeys are not written down and shared. POCDEX production API is set up and being opened to NCST for security testing.

---

## Decisions Made

1. **100 TPS is the operational cap; higher TPS values are stress-test break points only**
   - **Why:** 100 TPS and 2M API calls/day are the current POCDEX limits. The 20/40/60/80 TPS figures are for stress testing, not steady state. Production config will be conservative to control cost and avoid thrashing.
   - **Who decided:** Joint, Compass and POCDEX
   - **Impact:** Perf tests ramp to break points; production stays capped. A realistic production peak TPS is still not agreed (see open questions).

2. **Compass degrades gracefully when POCDEX is down**
   - **Why:** POCDEX maintenance or failure must not take Compass down.
   - **Who decided:** Design principle, both sides
   - **Impact:** POCDEX down means new user onboarding stops and profile refresh is delayed; existing users keep working on their last-known profile. Same principle recorded in the [Architecture & Scalability Review](2026-09-09-W37-architecture-scalability-review.md).

3. **Perf-test structure: multi-day, short base/stress runs plus one long endurance run**
   - **Why:** Separate base load, stress and endurance phases; ramp to break points progressively across days.
   - **Who decided:** Joint
   - **Impact:** 15-minute windows for base and stress, one 12-hour endurance run. Exact dates and hours not yet set.

4. **Real-time comms channel and standby cover for test days**
   - **Why:** Teams need to watch CPU, memory and errors together and react fast if something breaks.
   - **Who decided:** Adrian proposed, treated as agreed
   - **Impact:** A WhatsApp group (or equivalent) for test-day comms; teams on standby roughly 4pm to 9am during key windows. Group not confirmed created yet.

5. **Personas: start simple so Compass can proceed, enrich later**
   - **Why:** Full persona attributes are not ready. Johnny will finalise the persona stream and journey; richer attributes come later.
   - **Who decided:** Joint
   - **Impact:** Compass starts with email + first name + last name and a simplified persona set. Thomas creates the personas in the Key Log once Johnny shares the final details. UAT or perf cases that need richer persona attributes may be blocked until then.

6. **UAT test-case approach: derive from user experience, then map to POCDEX baseline cases**
   - **Why:** Compass knows the user journeys; POCDEX has baseline test cases. Work from the journey outward and map onto what exists.
   - **Who decided:** Directionally agreed, Rathika plus Michelle plus Compass team
   - **Impact:** Any coverage gap (the debrief guessed ~30%) gets reviewed to decide if it is real risk or an acceptable exception. This mirrors the gap-analysis method in the [Pathfinder RTM](../analyses/2026-09-09-W37-pathfinder-rtm.md).

7. **POCDEX production API opens to NCST for security testing once NCST is ready**
   - **Why:** Production API is set up. NCST does the security testing via API keys.
   - **Who decided:** Agreed next step
   - **Impact:** POCDEX shares API keys and access instructions with NCST on NCST's readiness signal.

---

## Action Items

| # | Task | Owner | Due | Priority |
|---|---|---|---|---|
| 1 | Document Compass end-to-end user journeys (login flows, profile-refresh logic, email destinations) and translate them into explicit test scenarios; share with POCDEX so they can map to existing test data and confirm coverage | Michelle plus Compass team (Adrian, Rathika) | Before UAT data prep, this week | High |
| 2 | Validate the UAT data-manipulation approach: does setting Compass's "last updated" date older reliably make POCDEX look "newer" and trigger a refresh, without breaking POCDEX-side sequencing assumptions? If not, define a shared strategy (which fields, who manipulates them, how sequence stays correct) | Joint: Michelle (Compass) + Johnny / POCDEX test-data owner | Before perf and UAT runs | High |
| 3 | Review Section 8 of the POCDEX requirements doc: validate the 20/40/60/80 TPS numbers against realistic usage; raise concerns on over-design, cost, feasibility | Compass technical lead (Adrian / Thomas, confirm) | Before TPS is finalised | High |
| 4 | Agree base TPS, expected peak TPS and test break points jointly, and map them to real user volumes (e.g. "20 TPS = 4 logins/second"); produce a capacity-planning outcome (expected peak X, budgeted Y, process for exceeding Y) | Joint: Compass + POCDEX technical leads | Before perf test | High |
| 5 | Send the perf-testing schedule email to all teams: dates and exact hours per run, which test runs when, when to start logging CPU/memory/errors, who is on standby per window | Adrian | This week | High |
| 6 | Create the real-time comms channel (WhatsApp group or agreed equivalent), add tech and support stakeholders, post the testing timeline and expectations | Adrian / Compass lead | Before first test run | Medium |
| 7 | Share POCDEX production API keys and call instructions with NCST once NCST signals readiness | Johnny / POCDEX side | On NCST readiness | Medium |
| 8 | Finalise the persona stream and journey and confirm whether the existing "six personas" and data samples are final | Johnny | No date given | High |
| 9 | Create the personas in the Key Log once Johnny's details land | Thomas | After item 8 | Medium |
| 10 | Confirm the incident playbook for test days: when to start logging, how to correlate logs across systems, who leads triage if a system breaks | Joint: Adrian + POCDEX + infra | Before perf test | Medium |

**Notes:**
- Items 1 and 2 are the critical path. Without the written journeys, POCDEX cannot confirm the test data, and the whole UAT window is at risk.
- Item 8 (personas) blocks item 9 and constrains any UAT or perf case that needs more than name and email.

---

## Concerns Raised

**POCDEX side: cannot advise without the Compass flow written down.**
> "The thing now is y'all don't pen down. I cannot visualise."
> "Without that context, I cannot tell you or advise anything."
- POCDEX does not understand the Compass end-to-end flow, so cannot confirm the current test data supports Compass's scenarios. This has caused repeated back-and-forth and some frustration that requirements were not stated at the start (POCDEX expected them at the "21 persona stage").

**Compass side: wants to avoid over-designing infrastructure.**
- Compass wants to keep test data prep light on the POCDEX side by manipulating data locally, and does not want to build for TPS levels that will never occur in production.

**Unresolved tension:** POCDEX frames the 100 TPS cap and the break points as safety and cost control. Compass reads the 20/40/60/80 figures as possibly over-aggressive. No jointly agreed "realistic production TPS" came out of the call.

---

## Risks

1. **End-to-end scenario alignment is incomplete.**
   - POCDEX has no written Compass user flows; Compass's user-perspective test scenarios are not fully documented or shared.
   - Impact: UAT coverage gaps, defects found in production instead of test.
   - Mitigation: action items 1 and 2.

2. **The "last updated date" manipulation may not simulate real behaviour.**
   - Compass plans to age its own "last updated" date so POCDEX looks newer and a refresh fires.
   - POCDEX is concerned about sequencing and consistency of the "last updated" logic, and whether this reliably reproduces the real condition.
   - Impact: tests that pass but do not match how data actually changes in production.
   - Mitigation: action item 2.

3. **Operational coordination during perf tests is not locked.**
   - A comms channel and standby hours are proposed, but staffing is not confirmed and there is no incident playbook (logging start, log correlation, triage lead).
   - Impact: slow or fragmented root-cause analysis if a system breaks during stress or endurance.
   - Mitigation: action items 5, 6, 10.

4. **TPS, cost and capacity assumptions are not written down.**
   - Higher TPS has cost implications on the POCDEX side, but there is no stated capacity-planning outcome.
   - Impact: misaligned expectations between Compass stakeholders and POCDEX cost and performance limits.
   - Mitigation: action item 4.

5. **Persona readiness depends on Johnny.**
   - Attributes beyond email and name are not ready; Johnny said persona details come later.
   - Impact: UAT or perf cases needing richer persona data may be blocked or constrained.
   - Mitigation: action items 8 and 9.

---

## Open Questions

- [ ] What is the realistic production peak TPS, and what is the capacity-planning outcome (expected X, budgeted Y, process above Y)? Owner: Compass + POCDEX technical leads. By: before perf test.
- [ ] Does the "last updated date" manipulation reliably trigger a POCDEX refresh without breaking POCDEX sequencing? Owner: Michelle + Johnny. By: before UAT.
- [ ] Are all teams definitively staffed for the 4pm-9am standby windows? Owner: Adrian. By: before first run.
- [ ] Who leads incident triage if a system breaks mid-test? Owner: Adrian + POCDEX + infra.
- [ ] Are the "six personas" and their data samples final, or still in flux? Owner: Johnny.

---

## Timeline Risks

- **TIMELINE RISK:** Items 1 and 2 (write the Compass journeys, validate the data-manipulation approach) are prerequisites for POCDEX to confirm test data, which is a prerequisite for UAT. None have firm dates. MVP launch is 24-25 Nov 2026 and the perf/UAT window sits inside the compliance-and-go-live phase before it. If the journeys are not written and shared within the next week or two, the UAT window compresses against a fixed launch.
- **TIMELINE RISK:** The perf-test schedule email (item 5) cannot go out until the TPS numbers and break points are agreed (item 4), which cannot happen until Section 8 is reviewed (item 3). Three dependent items, all "this week" or "before perf test", none dated. Sequence and date them now.
- **TIMELINE RISK:** Persona finalisation (item 8) has no date but gates item 9 and any richer UAT case. If Johnny's persona details slip, UAT scenario build slips with them.

---

## Next Steps

**This week:**
1. Michelle: write up the Compass end-to-end journeys (login, profile refresh, email destinations) and share with POCDEX (item 1).
2. Adrian / Thomas: review Section 8 of the POCDEX requirements doc and bring TPS concerns (item 3).
3. Michelle + Johnny: schedule a short working session on the "last updated date" manipulation approach (item 2).

**Before the perf test:**
- TPS numbers and break points agreed and mapped to user volumes (item 4).
- Perf-test schedule email sent (item 5), comms channel created (item 6), incident playbook written (item 10).

**Follow-up meeting:**
- **Purpose:** Confirm the UAT test data supports Compass's documented scenarios, and lock the realistic production TPS number.
- **Attendees:** Michelle, Adrian, Rathika, Johnny, POCDEX test-data owner.
- **When:** Once the Compass journeys are written and shared (target: within a week).

---

## Context for Future Reference

- This is the POCDEX-side counterpart to the [Architecture & Scalability Review](2026-09-09-W37-architecture-scalability-review.md) held the same day. The TPS/capacity question and the "Compass degrades on POCDEX outage" principle are shared across both.
- The UAT gap-analysis method (derive from user journey, map to baseline cases, review the uncovered ~30%) is the same approach as the [Pathfinder RTM](../analyses/2026-09-09-W37-pathfinder-rtm.md).
- Johnny Lim owns the POCDEX API (ETL: SQL Server source to PostgreSQL API DB, plus infra). Per Pow Hwee, Michelle and Johnny work directly on functional clarifications. Related to open items #31 (POCDEX go-live prep) and #56 (POCDEX sync cadence).
- The "last updated date" and refresh-trigger logic ties to open item #56 (POCDEX sync cadence and data-currency model, still unconfirmed) and the daily pull-and-diff mechanism.
