---
date: 2026-06-16
type: Sprint Results Analysis
sprint: OTEP-Pathfinder Sprint 3
period: 2–14 Jun 2026
owner: Michelle Yip
---

# Sprint Results: OTEP-Pathfinder Sprint 3

**Sprint dates:** 2–14 Jun 2026

**Analysis date:** 2026-06-16

**Owner:** Michelle Yip

---

## Executive Summary

Sprint 3 delivered the core listing and detail experience on live OTG data — filters, detail pages, apply redirect, and closed-opportunity handling all shipped. The sprint goal was partially met: officers can browse and filter live opportunities and initiate an application, but search and C@G detail remain in S4. The sprint also validated the OTG ingestion pipeline end-to-end for the first time, surfacing a 75% data rejection rate that became the programme's most important pre-launch risk. Six stories remain in QA at sprint close — a carry-in pattern that signals AC quality and QA capacity as the two gaps to close before pilot.

**Verdict:** Iterate — core surfaces delivered, three structural gaps (QA carry-in, C@G completion, data quality) need resolution before pilot readiness.

---

## Original Sprint Goal

**If we** deliver filter + apply loop + live OTG data in Sprint 3,
**then** officers will be able to find and apply to relevant opportunities end-to-end,
**because** the listing → filter → detail → apply chain is the minimum viable officer journey.

**Sprint goal (agreed at planning):** By end of Sprint 3, an officer can find relevant opportunities using filters and successfully initiate an application to any active OTG opportunity (except SJRs), powered by live imported data.

---

## Results

### Sprint goal delivery

| Component | Target | Actual | Status |
|-----------|--------|--------|--------|
| Filter by opportunity type | Shipped | In QA at close (OTEP-86) | ⚠️ Partial |
| Apply via FormSG redirect | Shipped | In QA at close (OTEP-319) | ⚠️ Partial |
| Live OTG data in listing | Shipped | Done — OTEP-85 in QA, data flowing | ✅ Substantially done |
| Detail page | Shipped | In QA at close (OTEP-128) | ⚠️ Partial |
| Closed opportunity handling | Shipped | Done — OTEP-362/363 both Done | ✅ Hit |
| C@G listing integration | Shipped | In Progress at close (OTEP-88) | ❌ Missed |
| OTG ingestion pipeline | Shipped | Done — OTEP-192 closed | ✅ Hit |

### Issue count at sprint close

| Status | Count | Notes |
|--------|-------|-------|
| Done | 25 | Sub-tasks + stories |
| In QA | 6 | Carry-in to S4 |
| In Progress | ~9 | Mostly carried forward (C@G, auth, spikes) |
| Backlog | ~9 | Deferred or not started |

**QA carry-in rate:** 6 of ~15 stories still in QA at close — 40%. Target for S4: ≤ 2 carry-ins.

### Delivery against original S3 scope

**Shipped (Done):** Listing page, detail page (sub-tasks), closed opportunity UI/BE, login page (custom Keycloak), session expiry redirect, filter handling BE/FE, C@G badge/metadata, OTG data model, ingest table, backend endpoint, report format.

**Partially shipped (QA at close):** OTEP-85 (listing cards with live data), OTEP-86 (filter by type), OTEP-128 (detail page), OTEP-268 (empty/error states), OTEP-305 (login/logout), OTEP-319 (apply redirect).

**Not shipped (deferred to S4):** OTEP-88 (C@G listing, In Progress), OTEP-87 (C@G detail), OTEP-89 (C@G deep-link), auth epic (OTEP-71/110/304/305 — WOG AD env not available), OTEP-348 (scheduler/observability).

---

## Analysis

### What went well

**1. Sprint replanning under a blocker worked.** When the WOG AD UAT environment gap surfaced before planning, four auth stories were swapped for filter and apply-loop work that had no environment dependency. The sprint delivered officer-facing value without losing the week. This was the right call and the team executed cleanly against the revised scope.

**2. OTG ingestion pipeline shipped end-to-end.** OTEP-192 closed Done — the first time live OTG data flowed into the product. This unblocked the 75% rejection rate discovery, which is now the most important pre-launch data quality question. Getting to that discovery in S3 (rather than S4 or S5) gave the programme time to act.

**3. Two scope decisions got locked at the BO demo.** PSFG out of MVP and Jobs category merge were both drifting unresolved. The demo session forced closure on both. Scope decisions that land in a demo rather than a separate working session save a follow-up meeting.

**4. Closed opportunity handling shipped cleanly.** OTEP-129 was split into OTEP-362 (BE) and OTEP-363 (FE) mid-sprint — a scope clarification that could have caused rework. Both sub-tasks closed Done without AC disputes.

### What didn't go well

**1. QA carry-in rate was high (6 stories).** Six stories in QA at sprint close is a consistent pattern. Root cause has two parts: (a) some ACs were confirmed late in the sprint, leaving insufficient QA time; (b) Rathika is the sole QA engineer and was gated on Thomas completing the apply-URL fix before she could close OTEP-128. Single-point QA dependency is a structural risk.

**2. C@G listing (OTEP-88) did not close.** The story was In Progress at sprint close. AC4 (fallback for missing C@G fields) and AC2 (badge spec) were still TBC as of the mid-sprint review (2026-06-08). Late AC confirmation cost Léo build time.

**3. 75% OTG data rejection rate surfaced late.** The ingestion pipeline ran against live data and only 160 of 633 open gigs (25%) passed validation. This was a discovery, not a failure — but it surfaced after Sprint 3 planning, not before. Earlier ingestion testing would have let S3 scope include the rule-relaxation decision.

**4. No PostHog instrumentation yet.** The apply redirect (OTEP-319) shipped without PostHog tracking (procurement in progress). This means S3 delivered the apply flow but we have no signal on whether it works for users. The gap between "shipped" and "measured" is a risk.

### Unexpected findings

- **OTEP-192 nil-date bug** ("00/01/1900" as OTG's sentinel for evergreen opportunities) surfaced as a unit test failure mid-sprint. Diagnosed and deferred correctly — interim fix in transform layer (S3), robust spike in S4 (OTEP-358). The fix landed without delaying the sprint.
- **ESG holds 178 of 473 blocked gigs (38%)** — the single agency remediation that would have the most catalogue impact. This wasn't visible until the ingestion analysis (2026-06-10).
- **Two rule changes alone could lift valid catalogue from 160 to 350–400 records** without any agency action — a product decision, not a data quality dependency.

---

## Learnings

### What worked — apply elsewhere

- **Swap blocked stories for ready ones before planning locks.** The WOG AD blocker swap worked because the alternatives were already groomed. Keep a "ready but not yet scheduled" buffer of 2–3 stories for every sprint.
- **Use the demo session to force scope decisions.** Two decisions (PSFG, Jobs merge) landed in the demo rather than a separate meeting. Frame BO demos as "decision sessions with a product walkthrough" rather than "walkthroughs with a Q&A."
- **Split stories early when BE/FE can run in parallel.** OTEP-129 → OTEP-362/363 split worked. Do this at grooming, not mid-sprint.

### What to fix for S4

- **Confirm ACs before sprint planning, not during.** OTEP-88 AC4 and AC2 were still TBC at the mid-sprint review — four days before planning. Introduce a "AC freeze" rule: no story enters planning with TBC ACs.
- **QA starts earlier.** Rathika was blocked on Thomas's fix before she could close QA. Timebox the dependency: if a fix isn't merged by Wednesday of sprint week 2, the story moves to carry-in explicitly rather than chasing it into close.
- **Instrument before you ship.** OTEP-319 shipped with no PostHog tracking. Even a `click_apply_formsg` event firing on redirect is better than nothing. Add "PostHog event key defined" to the Definition of Done.
- **Run ingestion against live data earlier.** The 75% rejection rate was only discovered after S3 planning was locked. S4 should include a mid-sprint ingestion health check against the latest OTG export.

---

## Estimate vs Actual

| Item | Original estimate | Actual | Accuracy |
|------|------------------|--------|----------|
| Stories shipping Done at sprint close | ~15 stories | 25 issues Done (mix of stories + sub-tasks); ~8–9 parent stories Done | Broadly in range |
| QA carry-in | Target: 0 | Actual: 6 | Missed — 40% carry-in rate |
| C@G listing (OTEP-88) | Sprint 3 Done | In Progress at close | Missed — AC confirmation lag |
| Auth epic | Deferred correctly | Correctly deferred | Hit |
| OTG ingestion | Sprint 3 Done | Done (OTEP-192) | Hit |

**Calibration note:** This is Sprint 3 — no prior feature results to compare against. Establish this as the baseline for S4 calibration.

---

## Stakeholder communication framing

**For Jace / Adrian (BO):** Sprint 3 delivered the core officer journey — browse, filter, view detail, apply. Six stories carried into S4 for QA closure. The most important finding from the sprint is the 75% OTG data rejection rate; two rule changes can lift the valid catalogue to 350–400 records without agency action, and ESG remediation alone adds 178 more.

**For the engineering team:** Good sprint. The replanning mid-sprint worked cleanly. Two things to improve in S4: AC freeze before planning, and QA starting earlier in the sprint rather than stacking in week 2.

**For SteerCo (Mark/GK):** Sprint 3 completed the listing → detail → apply journey on live data. Data quality discovery surfaced and quantified — remediation path identified and scoped.

---

## Next Steps

**Immediate (S4):**
- [ ] Close the 6 QA carry-ins — target all Done by end of W26 (OTEP-85, 86, 128, 268, 305, 319)
- [ ] Confirm OTEP-88 ACs before end of week — unblock Léo (Michelle)
- [ ] Confirm OTEP-192 final status with Léo — QA or Done? Update S3 folder if Done

**Before pilot launch:**
- [ ] PostHog instrumentation — add `click_apply_formsg` and `view_opportunity_detail` as DoD items
- [ ] OTG rule relaxation decision — two rule changes to lift catalogue to 350–400; get BO call in S5 grooming
- [ ] ESG data remediation — brief ESG directly on 178 blocked gigs

**Process fixes for S4:**
- [ ] AC freeze rule — no story enters planning with TBC ACs (Michelle + Pow Hwee to align)
- [ ] QA timebox — stories not in QA by Wednesday of sprint week 2 are explicit carry-ins, not chased
- [ ] "PostHog event key" added to Definition of Done (raise at next team meeting)

---

## Appendix

- Sprint 3 retro + BO demo notes: [2026-06-15-W25-retro-demo-bo-working-level.md](../meeting-notes/2026-06-15-W25-retro-demo-bo-working-level.md)
- Mid-sprint review: [2026-06-08-mid-sprint-review.md](../../../PM-skills-ALL-1/04-ceremonies/post-meeting-capture/2026-06-08-mid-sprint-review.md)
- OTG ingestion discovery: [2026-06-10-W24-otg-ingestion-product-discovery.md](2026-06-10-W24-otg-ingestion-product-discovery.md)
- Sprint 4 planning prep: [2026-06-11-W24-s4-planning-moscow-acs-tasks-points.md](2026-06-11-W24-s4-planning-moscow-acs-tasks-points.md)
- Decisions log: [decisions-log.md](../../../PM-skills-ALL-1/06-skills-and-decisions/decisions-log.md)

*No PostHog data available — CareerCompass is pre-pilot. All metrics are delivery metrics, not user outcome metrics. First user outcome data will be available after pilot launch (target: Oct 2026).*
