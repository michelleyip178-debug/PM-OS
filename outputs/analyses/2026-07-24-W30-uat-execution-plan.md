---
date: 2026-07-24
week: 2026-W30
topic: UAT Execution Plan — CareerCompass (day-by-day schedule, companion to the UAT Operating Model)
status: draft — dates inherited from risks.md/sprint-status.md as of 2026-07-24; several inputs still red per the Operating Model's readiness gate
---

# UAT Execution Plan — CareerCompass

**Companion to:** [UAT Operating Model — CareerCompass](2026-07-24-W30-uat-operating-model-reference.md), which owns the rules (RACI, scope boundary, test case standard, defect severity, readiness gate). This document owns the schedule only — what runs when, in what order, and who's on deck each stage. If the two ever disagree, the Operating Model's readiness gate wins: no stage below starts until its gate conditions are met, regardless of what date this plan shows.

**Honesty check before using this plan:** the Operating Model's readiness gate (Section 6) currently reads red on two of five conditions with no committed date (integrations, environment stability). Everything below assumes those clear in time. If they don't, this schedule slips with them — that's a feature of this plan, not a bug: **the schedule is downstream of the gate, never the other way around.**

---

## 1. Overview

| | |
|---|---|
| **Total window** | 11 Aug – 4 Sep 2026 (spans Sprint 8 and Sprint 9) |
| **Stagger model** | Two waves — Profile + Opportunities modules first, Competencies + Courses second |
| **Feature freeze** | End of Sprint 8 (21 Aug) — dev continues into S9 for bug fixes only, no new scope |
| **Owner (schedule)** | Rama Moorthy (UAT Coordinator) |
| **Owner (scenario content)** | Michelle Yip (Pathfinder: Opportunities, Auth) / Imelda Mo (Core: Profile, Competencies, Courses) |

---

## 2. Wave 1 — Profile + Opportunities (11–21 Aug, inside Sprint 8)

**Why these two first:** both modules had the most mature test-case coverage as of this session (Pathfinder's Opportunities plan at v15/BO-ready; Core's Profile section fully specified) and neither depends on the Competencies data-model questions still open (competency-code vs. label matching, agreed 2026-07-23 but not yet implemented).

| Day | Date | Activity | Who | Gate to proceed |
|---|---|---|---|---|
| Day -2 | Fri 7 Aug | Final readiness check — confirm all 5 gate conditions green (see Operating Model §6) | Rama | If red, this wave slips — do not start with a partial gate |
| Day -1 | Mon 10 Aug | Persona/test-account smoke check — confirm P0–P6 log in and match their intended profile shape | Imelda | Any persona failing = pulled from Day 1 scenarios, logged as a defect, not silently worked around |
| Day 1 | Tue 11 Aug | **UAT opens.** Profile module scenarios (MVP-PROF-01/02/04/05/06, MVP-NAV-05, QA-NAV-01) | BOs, Core-side | — |
| Day 1 | Tue 11 Aug | **UAT opens.** Opportunities: Listing, Filtering, Opportunity Detail scenarios | BOs, Pathfinder-side | Ring-fencing scenarios wait for Day 2 — need P3/P4 confirmed live (see Operating Model §4) |
| Day 2 | Wed 12 Aug | Opportunities: Ring-fencing, Login/Authentication scenarios | BOs, Pathfinder-side | Auth scenarios blocked if WOG AD readiness (Operating Model §2, unresolved row) hasn't cleared — fall back to Keycloak mock (OTEP-444) and flag as a data-quality caveat on results, not a silent substitution |
| Day 3 | Thu 13 Aug | Opportunities: Apply flows (Careers@Gov, FormSG) | BOs, Pathfinder-side | — |
| Day 4 | Fri 14 Aug | Buffer / defect triage day — no new scenarios, clear anything Critical/High from Days 1–3 | Rama + Tech Leads | Per Operating Model §5: Critical/High must close before this wave can be called done |
| Day 5–7 | 17–19 Aug | Re-test cycle for any Days 1–3 defects; sign-off collection begins | BOs + Rama | Sign-off = the qualitative BO statement + defect floor, both required (Operating Model §5) |
| Wave 1 close | Fri 21 Aug | Feature freeze. Wave 1 sign-off target date. | Michelle + Imelda (module owners) | If sign-off isn't complete, this is escalated, not quietly carried into Wave 2 |

**Explicit assumption flagged:** Days 1–2 assume the WOG AD authentication readiness condition (currently an unresolved RACI row — Pow Hwee or Adrian Lo, not both) has been resolved and the underlying Keycloak client config issue (no ETA as of 2026-07-24) has cleared. If it hasn't by 7 Aug, Day 2's Login/Auth scenarios move to the mock environment and get flagged as provisional, not real WOG AD validation — worth deciding now, not on Day 2 itself.

---

## 3. Wave 2 — Competencies + Courses (17 Aug – 4 Sep, spanning end of Sprint 8 into Sprint 9)

**Why these second:** Competencies work carries the still-fresh architecture change (competency-code matching over label matching, agreed 2026-07-23) and the unresolved OTG agency-code gap — both need a few more days of engineering stabilization than Profile/Opportunities needed. Courses has the least mature functional risk but the most test-data quality risk (test dataset explicitly not production-representative, per this week's internal demo).

| Day | Date | Activity | Who | Gate to proceed |
|---|---|---|---|---|
| Day 5 | Mon 17 Aug | Competencies: Viewing, Adding (Keyword Search) scenarios | BOs, Core-side | Requires the competency-code matching change to be actually implemented and confirmed, not just architecturally agreed |
| Day 6 | Tue 18 Aug | Competencies: Adding via CV Upload (CIE), Managing Visibility | BOs, Core-side | — |
| Day 7 | Wed 19 Aug | Competencies: Report Issue (No Role-Based Competencies), Competency Matching (Pathfinder side — Skills Match Display) | BOs, both squads | Cross-squad day — both PMs present |
| Day 8 | Thu 20 Aug | Courses: Landing Page, Search & Discovery | BOs, Core-side | Explicitly flag to BOs before this session starts: current dataset is test data, not production-representative (per 2026-07-24 internal demo decision) — don't let a BO discover this mid-scenario |
| Day 9 | Fri 21 Aug | Courses: Detail Page | BOs, Core-side | Coincides with feature freeze (Wave 1 close) — Rama to confirm no scheduling collision with Wave 1's sign-off collection |
| — | 22–23 Aug (weekend) | — | — | — |
| Day 10–12 | 24–26 Aug (Sprint 9 starts) | Defect triage + re-test cycle for Wave 2 | Rama + Tech Leads | Same Critical/High rule as Wave 1 |
| Day 13+ | 27 Aug – 4 Sep | Buffer for any cross-module regression testing, final sign-off collection, UAT close-out report | Rama + both PMs | Dev continues bug-fix-only in parallel per S9 scope (no new feature work permitted) |
| UAT close | Thu 4 Sep | Full UAT sign-off target. Code freeze begins. | Rama (final call) | If not achieved, this is the trigger for the VAPT-window conversation below — don't let it slide silently into September |

---

## 4. What Happens If a Wave Slips

This is the part a schedule usually omits and then improvises under pressure. Stated in advance:

- **A single scenario failing** does not slip the wave — it's a defect, triaged per Section 5 of the Operating Model.
- **A whole day's scenarios blocked** (e.g., Day 2 Login/Auth if WOG AD isn't ready) triggers an immediate decision, same day: fall back to mock and flag as provisional, or push the day and compress the buffer. Not a decision to make on Day 4 in hindsight.
- **A wave missing its close date** (21 Aug for Wave 1, 4 Sep for Wave 2) is an automatic escalation to Adrian — this plan does not assume the buffer days absorb a full wave's slip, because the buffer is sized for defect triage, not for catching up on blocked scenario-writing.
- **Any slip past 4 Sep** compresses directly into the VAPT start date (7 Sep, per `risks.md`). Given VAPT vendor NCS is separately confirmed unavailable until mid-September (per 2026-07-24 senior bi-weekly), there is effectively **no slack left in this chain** — a UAT slip and a VAPT slip are the same conversation now, not two separate risks. Flag to Rama/Adrian together, not sequentially.

---

## 5. Dependencies This Schedule Assumes Will Clear (tracked, not hoped)

| Dependency | Needed by | Current status (2026-07-24) | If it doesn't clear |
|---|---|---|---|
| WOG AD Keycloak client config | Day -2 (7 Aug) | In progress, no ETA (Léo) | Day 2 Login/Auth scenarios run on mock, flagged provisional |
| POCDEX/Products data + whitelisting ownership | Day -1 (10 Aug) | Not committed; whitelisting ownership (Products vs. Compass) still open | Ring-fencing scenarios (Day 2) may need to run against mocked accounts instead of real POCDEX-linked ones — same provisional-flag treatment |
| Environment change-control mechanism | Day -2 (7 Aug) | 🔴 Red, no mechanism defined (Pow Hwee) | Do not start Wave 1 — this is a hard gate per the Operating Model, not a soft one |
| Competency-code matching implementation | Day 5 (17 Aug) | Architecture agreed 2026-07-23, implementation status unconfirmed | Wave 2 Competencies scenarios (Days 5–7) slip until it lands — do not test against the old label-matching behavior and call it done |

---

## 6. Open Decisions Before This Plan Is Final

1. **Confirm Wave 1's start (11 Aug) is still realistic** given the Operating Model's readiness gate currently reads red on integrations and environment stability, with no committed clearance date for either.
2. **Decide the WOG AD fallback stance now** (mock vs. push the date) rather than deciding it live on Day 2.
3. **Confirm whether Wave 2's Courses sessions (Days 8–9) should be reframed to BOs in advance** as testing against non-production-representative data, so it isn't a mid-session surprise.
4. **Name a single point person for the "UAT slip = VAPT slip" conversation** (Section 4) — right now this risk is implied by two separate documents (this plan, `risks.md`) rather than owned by one person with authority to actually move the November-vs-October conversation forward.
