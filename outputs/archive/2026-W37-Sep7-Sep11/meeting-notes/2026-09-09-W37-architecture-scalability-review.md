---
title: Career Compass Architecture & Scalability Review
date: 2026-09-09
week: W37
type: Engineering sync / architecture review
attendees: Thomas Huchede (FE/BE), Rathika Ramalingam (QA), Léo Milbor (BE), Victor (CIE/AI), Michelle Yip (PM), plus infra/platform reps
duration: ~1h20m
---

# Career Compass Architecture & Scalability Review

**Date:** 9 September 2026 (W37)

**Type:** Engineering sync / architecture and scalability deep-dive

**Attendees:** Thomas Huchede (FE/BE), Rathika Ramalingam (QA), Léo Milbor (BE), Victor (CIE/AI pipeline), Michelle Yip (PM), infra/platform

**Note on names:** the raw debrief used "Ratika" (Rathika Ramalingam), "Bunsen" and "Pain" for perf-test / infra people I could not identify. Those are left as-is below and flagged.

---

## Summary

The team reviewed where Compass sits on performance and scalability ahead of the perf-testing window: role recommendation and search are doing too much work in the application tier and pull far more data from the database than they need, which risks out-of-memory and latency spikes under load. The group agreed a phased approach (correctness and debuggability first, then move logic into SQL as behaviour stabilises), plus concrete near-term fixes: optimise two heavy indexes, remove a UID-to-text cast that blocks index use, and enforce a 3-character minimum on full search. The CIE CV-to-competency pipeline is well understood, with the known bottleneck being Bedrock re-ranking latency and unconfirmed concurrency limits. Biggest open gaps: no shared latency or concurrency SLO, CIE-side monitoring is bare bones, and failed opportunity imports silently drop the previously-imported record.

---

## Decisions Made

1. **Keep the phased app-tier-first approach for role recommendation and search**
   - **Why:** Pushing everything into SQL now produces unreadable, hard-to-debug queries. Correctness and debuggability come first; move logic into SQL incrementally as behaviour stabilises.
   - **Who decided:** Thomas / backend, with Michelle's agreement
   - **Impact:** Accepts a known OOM and latency risk under load in the short term. Makes the perf-test results and the index/pagination fixes below the mitigation.

2. **Proceed with the two heavy index optimisations and remove the UID text cast**
   - **Why:** A UID column is cast to text in a query, which stops the index being used. Removing the cast and tuning the two biggest indexes is low-risk and high-return.
   - **Who decided:** Backend
   - **Impact:** Direct query-cost reduction on the hot path. No behaviour change.

3. **Enforce a 3-character minimum on full search (not just autocomplete)**
   - **Why:** Autocomplete already uses a 3-char minimum. Single- and two-character searches trigger huge queries with no user value.
   - **Who decided:** Consensus in the room; Michelle to take the UX side to product/business
   - **Impact:** Removes a class of expensive queries. Needs a product decision on what 1-2 char input shows (nothing, or an explicit "keep typing" message).

4. **Compass must degrade gracefully when POCDEX is unavailable**
   - **Why:** POCDEX maintenance or failure should not take Compass down.
   - **Who decided:** Group design principle
   - **Impact:** When POCDEX is down: new user onboarding stops, profile refresh is delayed, existing users keep working on their last-known profile data. This is a design requirement, not yet a built-and-tested behaviour.

5. **Move more filtering and pagination down to the database where it stays maintainable**
   - **Why:** Server-side pagination exists but too much filtering happens in the service tier before pagination is applied, so the app still loads large result sets into memory.
   - **Who decided:** Backend
   - **Impact:** Needs a judgement call per filter on what can move to SQL without making queries opaque.

6. **Playwright stays the E2E standard; Rider stays the ingestion backbone**
   - **Why:** Both are working. Playwright runs daily at 8am plus a smoke suite on every deploy (UI, API, visual), with failures posted to the E2E alert channel. Rider gives queue semantics on Postgres with state, error count, last error, exponential backoff (10 min, 30 min, 1 hr, 5 hr), and DB-locked concurrent Go workers that are safe across pods.
   - **Who decided:** Confirmation of current practice
   - **Impact:** Job status should be exposed through Rider's own API endpoints, not direct DB reads.

7. **Re-ranking fallback: direction agreed, not finalised**
   - **Why:** Bedrock re-ranking latency spikes to 10+ seconds. If it is too slow, fall back to semantic top-N without re-ranking.
   - **Who decided:** Direction agreed, Victor / CIE to design it
   - **Impact:** Needs a latency threshold, a degraded-mode metric, and confirmation the fallback UX is acceptable.

8. **A dedicated ML training environment is needed for future recommenders**
   - **Why:** Course and opportunity recommenders (e.g. collaborative filtering) need training infra separate from production but fed by production-like data.
   - **Who decided:** Agreement in principle
   - **Impact:** Future work. Needs a design for how production data is imported and purged with no coupling to the production runtime path.

---

## Action Items

| # | Task | Owner | Due | Priority |
|---|---|---|---|---|
| 1 | Optimise the two heaviest indexes and remove the UID-to-text cast so the index is used | Thomas / backend | No date given, schedule within 48h | High |
| 2 | Deep-dive the competency-matching path: cut DB round-trips and data volume, especially the tier-3 lateral scenario (~30k roles); look at limiting result sets at the DB layer and precomputing or caching subsets | Léo / backend, with Michelle on product input | No date given, schedule this sprint | High |
| 3 | Take the 3-character-minimum search proposal to product/business: confirm the rule and define what 1-2 char input shows | Michelle | Before perf test | High |
| 4 | Move more filtering and pagination into SQL where it stays maintainable; adjust pagination so less data reaches the service tier | Backend | No date given | Medium |
| 5 | Define and run load and perf tests for search and role recommendation: ramp to 60, 900, and possibly 3000 users; measure response time, memory, DB load, autoscaling timing | Perf-test owner ("Bunsen" in the debrief, confirm who) with relevant teams | Perf-test window | High |
| 6 | Set pod autoscaling threshold (around 60-70% CPU) and verify it scales up before user-facing degradation | Infra/platform | Before perf test | High |
| 7 | Set alerts for crash events and autoscaling triggers/failures during perf runs; make logs and metrics accessible to all teams for post-mortem | Infra/monitoring ("Speaker 11" in the debrief, confirm who) | Before perf test | High |
| 8 | Coordinate scheduling and comms for the endurance tests: lock test windows (roughly 4pm-9am), notify stakeholders, decide how many full runs vs smoke runs | Michelle, with the perf-test lead | This week | Medium |
| 9 | Produce import-failure reports (which opportunities failed and why; partial-import warnings) and share with PMs so business impact is visible | Thomas / ingestion | No date given | High |
| 10 | Define a strategy for agency and structural changes (e.g. MTI to METI): move label-based matches to code-based IDs where possible, or introduce canonical mapping tables | Michelle plus core data owners (Rama) | No date given | Medium |
| 11 | Replace the manual S3 competency upload with an automated feed from Core's competency source of truth; align schema and versioning | Victor plus Core team | No date given | High |
| 12 | Confirm Bedrock (Sonnet/Haiku) concurrency and rate limits; align load-test assumptions (60-100 concurrent CV uploads); file a quota-increase request if needed | Victor | Before perf test | High |
| 13 | Design the re-ranking fallback: latency threshold, semantic top-N path, degraded-mode metric, acceptable fallback UX | Victor / CIE | No date given | Medium |
| 14 | Design and build the ML training environment: data, model and artifact layers; how production-like data is imported and purged; no coupling to the production runtime path | Victor / CIE | No date given (future) | Low |
| 15 | Grow the regression suite so each significant business rule has coverage, and run it on all performance-related code paths | Rathika plus QA/devs | Ongoing | Medium |
| 16 | Build a dashboard linking business requirements to automated tests so PMs can see what is covered and where the gaps are | Rathika, with Michelle's support | No date given | Medium |
| 17 | Socialise the Playwright setup with other teams (Pathfinder, possibly Compass): help them adopt the pattern and read the E2E alerts | Victor / current Playwright maintainers | No date given | Low |

**Notes:**
- Items 1, 2, 3, 5, 6, 7, 9, 11, 12 are the ones that gate a credible perf test. Everything else can follow.
- Most items had no date in the debrief. Anything tied to "before perf test" needs a real date once the perf-test window is locked (see item 8).

---

## Key Insights

**The core scaling problem is data volume in the app tier, not raw throughput.**
- Thomas's benchmark: search over ~20k opportunities allocates ~80 MB per user.
- Role recommendation tier-3 fallback (lateral across agencies) evaluates ~30k roles with competency matching over all of them.
- Pagination happens after heavy in-service filtering, so the memory cost is paid before the page is cut.
- Business logic wants random picks from the full valid set (e.g. random 3 of 50), which makes naive "top N at the DB" limiting incorrect. This is the tension that keeps the load unbounded.

**Reference-data integrity is fragile.**
- Agency, job family and job function from OTG are matched by label. Competencies are code-based and hold up better.
- Label mismatches (punctuation, renames) cause import errors. There is no strategy yet for structural changes like an agency rename (MTI to METI). This connects directly to the [Pathfinder RTM](../analyses/2026-09-09-W37-pathfinder-rtm.md) ringfencing risk PF-OPP-38, where ringfencing correctness depends on accurate agency and job-family data.

**Failed imports silently remove the previous record.**
- If one opportunity's import fails on a run, the previously-imported version is deleted "to be safe". There is no user-facing handling and no reconciliation report to the business. An officer could see an opportunity disappear with no trace.

**CIE CV-to-competency pipeline (understood, one bottleneck):**
1. Parse the CV, segment by section (experience, education).
2. Chunk into sentence-ish units (whitespace / bullet based).
3. Embed chunks (Cohere), semantic match to the competency bank.
4. Re-rank via Bedrock (Sonnet).
- Bottleneck: step 4 latency (10+ seconds at times) and unconfirmed Bedrock concurrency limits. Expected to strain at roughly 60-100 concurrent CV uploads, which is 5-10% of users in a load test.

**CIE observability is bare bones.**
- No SLOs, alerting or dashboards for SQS/queue consumption lag or error rates. The team leans on Core/Compass monitoring. Triage is hard when the Compass front end degrades but CIE logs look fine.

---

## Open Questions

- [ ] What is the agreed realistic production peak TPS, and what do we budget for above it? No firm number was locked. Compass wants to avoid over-designing; POCDEX frames the 100 TPS cap as a safety control. Owner: Michelle plus Adrian plus POCDEX leads. See the [POCDEX perf/UAT sync notes](2026-09-09-W37-pocdex-performance-uat-sync.md) which covers the same tension from the POCDEX side.
- [ ] Who owns the perf-test execution and the monitoring/alerting setup? The debrief names "Bunsen" and "Speaker 11". Confirm real names. Owner: Michelle.
- [ ] What is the incident playbook during a perf test: when to start logging, how to correlate logs across systems, who leads triage if something breaks? Owner: perf-test lead plus infra.
- [ ] What latency counts as "too slow" for the Bedrock re-ranking fallback to trigger? Owner: Victor.
- [ ] For import failures: keep the last-known-good record instead of deleting it? Owner: Thomas plus Michelle.

---

## Timeline Risks

- **TIMELINE RISK:** Multiple action items are pinned to "before the perf test" but the perf-test window is not locked (item 8). MVP launch is 24-25 Nov 2026. If the perf test needs the index fixes, the competency-matching deep-dive, autoscaling config, and the Bedrock quota uplift all done first, and none of those have dates, the perf test could slip into November against a fixed launch. Lock the perf-test dates this week and back-plan the gating items.
- **TIMELINE RISK:** The MTI-to-METI agency-rename strategy (item 10) has no date and no owner beyond "Michelle plus core data owners". If a real agency rename lands before this is solved, ringfencing could silently misfire for a pilot agency at launch.

---

## Next Steps

**This week:**
1. Michelle: lock the perf-test window with the perf-test lead, then put real dates on items 1, 2, 3, 5, 6, 7, 11, 12.
2. Michelle: take the 3-char search rule to product/business.
3. Backend: start the index optimisations and the UID cast fix (item 1).

**Before the perf test:**
- Index fixes done, competency-matching deep-dive done, autoscaling threshold set and verified, Bedrock quota confirmed or uplifted, alerting in place, incident playbook written.

**Follow-up:**
- A short joint Compass + POCDEX session to lock a realistic production TPS number and the capacity-planning outcome (this is the shared thread with the POCDEX perf/UAT sync).

---

## Context for Future Reference

- This review feeds the perf-testing readiness track for MVP launch (24-25 Nov 2026).
- Shares the TPS / capacity question with the [POCDEX performance & UAT sync](2026-09-09-W37-pocdex-performance-uat-sync.md) held the same day.
- The reference-data fragility point (label-based matching, agency renames) is the same root risk as PF-OPP-38 in the [Pathfinder RTM](../analyses/2026-09-09-W37-pathfinder-rtm.md).
- Rathika's requirements-to-tests dashboard (item 16) overlaps with the RTM work and Pow Hwee's Coverage Targets doc. Worth connecting rather than running in parallel.
