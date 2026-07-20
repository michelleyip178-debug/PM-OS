---
week: 2026-W29
week_start: 2026-07-13
week_end: 2026-07-17
quarter: Q2/Q3 2026
---

# Weekly Review - Week of July 13, 2026

## TL;DR

- **Priorities:** 2 of 3 resolved (OTEP-505/#51 both closed by Tuesday), 1 carried into a fourth miss (#57/OTEP-130 scope cut with Pow Hwee — still unconfirmed as of Friday)
- **Meetings:** 14+ across the week, including 4 dense UAT/demo sessions on Friday alone
- **Key decisions:** 7 (squad sync) + 5 (UAT Plan Sharing) + 7 (UAT Operating Model) + 5 (Pathfinder demo) + AC-coverage validation — governance work dominated the week
- **Key win:** UAT finally got a formal operating model (scope, RACI, 5-element test case standard) after being flagged as "no defined process" for two straight weeks
- **Key challenge:** #57 (OTEP-130 scope cut) missed its 4th venue Thursday and needed a cold async escalation Friday — the exact failure pattern this week's plan was written to break
- **New risk surfaced:** Same AC-validation-coverage question got raised independently in 3 separate Friday meetings with no single owning artifact yet
- **Governance process gap:** the UAT Operating Model resolved a QA/UAT boundary dispute that Adrian and Jace contested live earlier the same day (UAT Plan Sharing meeting) — resolved on paper, not visibly re-confirmed with the people who objected

---

## Top 3 Priorities Review

### Priority 1: Force Same-Day Resolution on OTEP-505 and Search AC Ownership (#51)

**Planned:** Get explicit written resolution on both by Tuesday, breaking the "named but not forced" pattern from last week.

**Actual:** Both resolved — #51 closed 2026-07-13 (scope cut: clear-search, trigger model, suggestions deferred post-MVP), OTEP-505 closed 2026-07-14 (engineering build confirmed ready for QA). A Jul 15 daily-plan check flagged that live Jira still showed OTEP-505 sitting in QA unmoved, which briefly looked like a stale close — but this was confirmed as expected QA dwell time, not a regression.

**Status:** ✅ Complete

**Key outcome:** Both items are off the open-items tracker as of mid-week, and the "resolved in intent but not in writing" failure from last week did not repeat here.

**Learning:** Framing these as literal first-task-of-Monday, rather than a bullet next to bigger work, worked. Worth repeating for any item that's already missed 2+ venues.

---

### Priority 2: Get Real Due Dates on the Job Family/Function Mapping Risk

**Planned:** Committed dates from Adrian Lo (one-pager) and Product/Data Team (master-data validation); resolve the "2 weeks" vs. "11 Aug–4 Sep" UAT window discrepancy.

**Actual:** Partial. OTEP-437 landed a concrete resolution — Hao Eng confirmed job-family filtering will use the 27-entry WOG Job Family list from Imelda's Excel, directly closing open item #18. But this is one story's filtering logic, not the full risk: no confirmation found this week that Adrian Lo's one-pager or the Product/Data Team's master-data validation work actually got committed calendar dates. The UAT window discrepancy also wasn't explicitly tracked as resolved.

**Status:** 🟡 Partial

**Key outcome:** The competency-matching filter logic is unblocked for OTEP-437specifically. The broader governance risk (dated commitments from Adrian Lo and Product/Data Team) doesn't have visible confirmation of closure.

**Learning:** Progress on the technical sub-piece (job family list) can look like the risk is closing when the governance piece (actual committed dates from two named owners) hasn't been separately verified. Worth a direct check with Adrian Lo and Product/Data Team early next week rather than assuming OTEP-437's resolution covers it.

---

### Priority 3: Close Sprint 5 Honestly and Roll Trackers Forward to Sprint 6

**Planned:** `sprint-status.md` reflects Sprint 5 closed and Sprint 6 active from a live Jira pull; resolve the 18 wrongly-archived Core tickets; confirm OTEP-130 scope cut with Pow Hwee.

**Actual:** Mixed. Sprint pulse and mid-sprint review outputs (2026-07-16) show Sprint 6 is being actively tracked with live data (42/90 stories done, 47%), so the rollforward appears to have happened. But the mid-sprint review itself flags that **Sprint 6 has no formally written sprint goal as of Day 4** — a gap that wasn't part of Priority 3's original scope but surfaced directly from doing this tracker work. The OTEP-130/Pow Hwee confirmation (#57) is the one piece that did not close — it missed Monday, the Wednesday-ish Team 2 stand-ups (twice), and Thursday's 3pm Sprint 7 grooming, becoming a 4th miss. Friday's plan named it P0 with no dedicated venue, requiring a cold async escalation.

**Status:** 🟡 Partial

**Key outcome:** Tracker integrity is meaningfully better than last week (live pulls confirmed, sprint pulse working), but the one piece explicitly named in the plan (#57) repeated the exact "named risk, no forcing function" failure the whole week was designed to prevent.

**Learning:** #57 didn't fail from lack of naming — it was named as P0 or Priority-adjacent on Monday, Wednesday, and Thursday. It failed from lack of a *dedicated venue*: it kept riding along inside other meetings (stand-ups, grooming) instead of getting its own forcing function (e.g., a direct Slack/Jira ping with a deadline) until Friday, when there was no meeting left to piggyback on. **Concrete change: for the next item that misses 2 consecutive venues, escalate directly instead of waiting for a 3rd meeting to raise it in.**

---

## Key Decisions Made

1. **Job-family filter finalized on WOG Job Family list (27 entries)** (2026-07-16, Sprint Pulse) — Resolves open item #18; Hao Eng confirmed against `ref_job_family` table, hides "Central Banking Operations" and "C-Suite."
2. **Infrastructure dependency management: teams must actively follow through on infra requests, no more siloed discussions** (2026-07-14, OTEP Squad Sync, Rama) — Second explicit acknowledgment in two days of the same "late-surfaced dependency" root cause (after the 07-13 demo postponement).
3. **UAT scope bounded to end-to-end MVP flows only, not QA-level defect discovery** (2026-07-17, UAT Operating Model) — Closes a governance gap that had been open since at least the 07-14 squad sync ("no defined UAT process").
4. **UAT RACI formalized: PM owns scenario intent, QA advises, Tech Leads supply data, BOs review pre-UAT** (2026-07-17, UAT Operating Model) — Matches the ad-hoc approach already used this week for BO sign-off docs; now the standard.
5. **All 5 UAT readiness conditions block equally (SIT, integrations, environment, test accounts, external teams briefed)** (2026-07-17, UAT Operating Model) — Stricter than Rama's draft plan, which only names authentication as blocking; creates a live conflict against the 11 Aug Phase 0 date (see Risks below).
6. **Monday's external Pathfinder demo will focus on happy-path flows only, skipping fragile/data-dependent cases live** (2026-07-17, Internal Demo, Rama Moorthy/Imelda Mo/Adrian Lo) — Reduces BO-facing failure risk after today's internal dry-run repeatedly hit "data, not logic" caveats.
7. **AC-to-test-case coverage validated as a repeatable method (72–87%), with comment-thread scanning required, not just the AC field** (2026-07-17, Adrian's UAT ask) — Confirms AI-assisted test case generation as a standard approach going forward, with one caveat baked in.
8. **UAT test cases must be simplified, end-to-end, BO-executable scripts; Critical/High defects 100% resolved before sign-off; UAT environment frozen during UAT** (2026-07-17, UAT Plan Sharing, Rama) — The source decisions the Operating Model later formalized; captured here because the room (Adrian, Jace) contested the underlying QA/UAT boundary live and that pushback wasn't visibly closed before the Operating Model treated it as settled.

---

## Metrics Movement

| Metric | Start of Week | End of Week | Change |
|---|---|---|---|
| Open items resolved (OTEP-505, #51) | 2 open, 4+ venues missed each | 0 open | ✅ Both closed |
| Sprint 6 stories Done | Not tracked (Sprint 5 still shown active) | 42/90 (47%) | Tracker now live |
| Sprint 6 stories in QA | — | 5 (down from 16 mid-sprint) | ✅ Healthy movement |
| Sprint 6 written sprint goal | — | Still not set, Day 4 | ⚠️ New gap surfaced |
| #57 (OTEP-130/Pow Hwee) venues missed | 0 | 4 | ❌ Worsened |
| UAT operating model | Undefined (flagged as governance risk 07-14) | Formal model produced, pending Rama reconciliation | ✅ Major progress |
| AC-to-test-case coverage measured | Unmeasured | 72% direct / 87% w/ synthesis | ✅ New baseline |

---

## Top 3 Learnings

**What worked:** Treating OTEP-505 and #51 as the literal first task of Monday (not a bullet in a longer list) got both closed within 2 days after missing 4+ venues the week before. Naming + a same-day forcing function beats naming alone.

**What didn't work:** #57 repeated the identical failure pattern despite being named a priority all week. It kept getting raised inside other meetings' agendas instead of getting its own dedicated ask. By the time it was P0 on Friday, there was no meeting left to catch it in and it needed a cold escalation with zero natural venue.

**Fix:** The next time an item misses 2 consecutive venues (not 4), escalate directly async rather than waiting for a 3rd meeting slot that may not materialize.

**What to change:** Three separate Friday meetings (UAT Operating Model, Adrian's consolidation ask, Pathfinder internal demo) all independently raised "which ACs are actually validated, tested, or in-scope" as an open question. This is now the week's most recurring theme and currently has three partial answers instead of one owning artifact.

**Fix:** Consolidate into a single AC-validation-status document spanning UAT test cases and demo coverage before doing any more work in this space — flagged explicitly in today's meeting cleanup.

**What to watch:** The UAT Operating Model resolved two things live-contested earlier the same day in the UAT Plan Sharing meeting — the QA/UAT scope boundary and test-case authorship RACI. Adrian and Jace pushed back on Rama's framing in that meeting; Rama deferred to "align offline." The Operating Model, written hours later, states both as settled principle with no visible trace that Adrian/Jace/Barry reviewed and accepted the resolution. Separately, that same meeting flagged a Products read-replica risk (other teams can mutate source data mid-UAT, no exclusive UAT data slice) that reads as more specific than the Operating Model's "reserved, non-mutated profiles" rule — unclear if the rule actually covers it.

**Fix:** Before treating the Operating Model as final, confirm directly with Rama that Adrian, Jace, and Barry have actually seen and accepted its resolution of their live pushback — and separately confirm whether the reserved-profiles rule covers the read-replica mutation risk or only persona curation. Both are now folded into next week's Priority 3 below.

---

## Next Week Preview

### Top 3 Priorities (Draft)

1. **Close #57 for real** — Pow Hwee's OTEP-130 scope-cut confirmation is now the longest-unresolved item of the week; needs a same-day answer Monday, learning directly from how Priority 1 succeeded this week.
2. **Build the single AC-validation-status artifact** — consolidates UAT test-case coverage, the 5-element scenario audit, and Pathfinder demo-scope mapping into one document with one owner, closing three parallel asks at once.
3. **Reconcile the UAT Operating Model against Rama's draft UAT Plan Overview, and close the loop with Adrian/Jace/Barry** — the stricter 5-condition readiness gate conflicts with 5 still-undated external dependencies against the 11 Aug Phase 0 start, and separately, Rama needs to confirm Adrian/Jace/Barry actually accept the Operating Model's resolution of their live QA/UAT boundary pushback, plus whether the reserved-profiles rule covers the Products read-replica mutation risk. All three need one live conversation with Rama before the Operating Model is treated as final.

> Note: Run `/weekly-plan` to formalize these and add detail — also worth deciding whether "write a Sprint 6 goal" belongs in next week's plan given it's Day 4+ with none set.

---

### Items to Unblock

| Item | Blocked Since | Blocked By | Action Needed |
|------|---------------|------------|----------------|
| #57 (OTEP-130 scope cut) | 2026-07-14 (4 venues missed) | Pow Hwee's confirmation | Direct async ping Monday morning, not another meeting-riding attempt |
| Job family/function mapping — full governance risk (Adrian Lo one-pager, Product/Data Team dates) | 2026-07-09 planning session | No confirmed dates found this week | Direct check-in with both owners; don't assume OTEP-437 resolved the whole risk |
| UAT readiness gate vs. Phase 0 timeline | 2026-07-17 (Operating Model) | Rama reconciliation | Schedule directly, flagged as sharpest scheduling risk from Friday |
| Adrian/Jace/Barry sign-off on Operating Model's QA/UAT boundary resolution | 2026-07-17 (UAT Plan Sharing, deferred) | Rama's offline alignment, never visibly closed with the room | Confirm directly with Rama whether this happened; if not, circulate the Operating Model to them explicitly |
| Products read-replica data-stability risk vs. reserved-profiles rule | 2026-07-17 (UAT Plan Sharing) | Unclear if Operating Model's rule actually covers it | Michelle + Rama to confirm explicitly before Phase 0 |
| Huiting/Mark data-sharing approval (#55) | 2026-07-14 (escalated) | Mark's approval, beyond Huiting | No contingency plan exists yet — still open per squad sync |

**Priority unblocks:**
1. #57 — first thing Monday, learning from this week's Priority 1 success
2. AC-validation artifact — before any more parallel work happens on the same question

---

*Generated: 2026-07-17, updated same day to include UAT Plan Sharing & Readiness Alignment*
*Data sources: Weekly plan, daily plans, meeting notes (squad sync, demo postponement, UAT Plan Sharing, UAT Operating Model, Adrian's UAT ask, Pathfinder internal demo), sprint pulse, mid-sprint review*
*Next: Run `/stale-check` to sweep trackers, then `/weekly-plan` for next week*
