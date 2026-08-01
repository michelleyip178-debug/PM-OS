---
week: 2026-W31
week_start: 2026-07-27
week_end: 2026-07-31
quarter: Q2/Q3 2026
---

# Weekly Review - Week of July 27, 2026

## TL;DR

- **PRDs:** 2 active (CareerCompass R1 design PRD, new Opportunity Taxonomy PRD), 0 formally advanced a stage, 1 new
- **Decisions:** 20+ across 11 meetings/threads; VCR one-pager shipped (Priority 2, on time)
- **Meetings:** 11 processed this week (heavier than typical — includes 2 async Slack digests)
- **Completion rate:** 2 of 3 weekly priorities landed; Priority 1 (Sprint 7 honest planning) partially — the plan itself may have been overtaken by events (see below)
- **Key win:** October→November MVP slip got a hard, sourced answer (VAPT vendor math, not "senior sentiment") — Priority 2 fully resolved, ahead of the one-pager even being needed as originally scoped
- **Key challenge:** the same Products/POCDEX data-trust risk was raised independently by 4+ people across 5 separate meetings this week and is still being tracked as five unconnected threads, not one

---

## Priority Completion (Plan vs. Actual)

### Priority 1: Get Sprint 7 Planning Through Honestly, Then Emergency-Groom the Gap
**Planned:** Walk into Monday's planning with `/sprint-check` findings (4 chore stories, 3 unpointed), push for a same-day emergency grooming booking, run `/grooming-close` after, re-run `/sprint-check` to confirm improvement.

**Actual:** Not directly evidenced in this week's meeting notes — none of the 11 meetings processed this week are Sprint 7 planning itself, a grooming session, or a `/sprint-check` re-run. 🟡 **Partial / Unconfirmed.** Either this happened outside what got captured in meeting notes this week, or the emergency grooming session didn't get booked as planned. **Worth a direct check Monday:** did Sprint 7 planning happen, and did the emergency grooming session get booked and run?

### Priority 2: Draft the October/November MVP Reconciliation One-Pager
**Planned:** Pull VAPT/Ready-shelf/Compass-data-approval inputs, draft via `/decision-doc` framing, review with Adrian/Rama before wider circulation.

**Actual:** ✅ **Resolved, and upgraded.** The #psd-pdo-otep-int Slack thread (Jul 23-24, processed this week) gave a harder answer than expected: Adrian confirmed November directly, with VAPT vendor math as the binding constraint (mid-Sept earliest scan slot + 8-week cycle = end-November). This is stronger evidence than the "senior sentiment" this priority was originally scoped to reconcile — the one-pager's job got easier because the source data resolved the ambiguity before drafting even started.

**Learning:** the priority's framing ("reconcile two conflicting narratives") assumed persistent ambiguity. It turned out one more data point (the Slack thread) collapsed the ambiguity on its own. Worth checking async channels before assuming a reconciliation document is still needed in its originally-scoped form.

### Priority 3: Resolve Whitelisting Ownership (Products vs. Compass)
**Planned:** Rama raises with Pow Hwee Tan this week; once owner confirmed, submit narrowed 2-account DO request; log resolution durably.

**Actual:** ✅ **Resolved, but the resolution is bigger than the original ask.** Same Slack thread: Pow Hwee confirmed Compass needs its own whitelisting layer *in addition to* POCDEX's agency-level whitelisting. This reframes the priority from "who owns it" to "both do, at different layers" — which means Compass-side whitelisting is now new, unscoped build work with no owner named yet. **Not fully closed** — the DO request was the easy half; Compass-side ownership is still open.

---

## Key Decisions Made

1. **MVP launch confirmed end-November, VAPT-driven** (Slack thread, Jul 23-24) — Adrian, citing mid-Sept earliest VAPT scan slot + 8-week cycle. Source of record for this week's Priority 2.
2. **Compass needs its own whitelisting layer, separate from POCDEX** (same thread) — Pow Hwee Tan, resolving Priority 3 but creating new unscoped work.
3. **VAPT timeline and vendor confirmed: 7 Sep start, 23 Oct closure, ~75K** (VAPT Planning Slack, Jul 30) — Rama Moorthy. **Conflicts with `00-hub/risks.md` and `open-items.md` #39, which still track 16 Oct as the closure date** — confirmed via direct file check this week; not yet reconciled.
4. **Competency display combines Job-ID + WOG/FL-derived competencies; sync-back to HR out of scope** (OTEP Retro and Demo, Jul 28) — logged as decided, but Adrian Ang and Xian Zhang Guo hold genuinely different mental models of whether this was previously agreed. Flagged as likely to unravel.
5. **Two-batch UAT strategy: Batch 1 seeded/fixture data, Batch 2 Products-fed** (PM x Eng Sync, Jul 30) — never confirmed as deliberate strategy vs. contingency; no owner assigned for validating fixture data represents real Products data.
6. **Union logic for competency data import; exclude mismatched codes** (UAT Walkthrough, Jul 31) — Imelda + Ram. Downstream recommendation-quality impact "not fully mapped."
7. **CareerCompass reaffirmed as "not a full ATS"; SJRs stay solely in Compass** (Inclusive Job Portal, Jul 30) — recurring scope boundary, now stated in three separate contexts this week.
8. **VCR methodology applied and delivered: OTEP costs $49.44/hour saved, flat through FY30** (VCR one-pager + exec summary, Jul 29-30) — ready for Q1 FY28 Value for Cost Review.

---

## Metrics Movement

| Metric/Artifact | Status Start of Week | Status End of Week | Change |
|---|---|---|---|
| October/November MVP narrative | Ambiguous, two conflicting sources | Resolved: November, VAPT-driven, sourced | ✅ Resolved |
| Whitelisting ownership | Unknown owner | Both POCDEX + Compass, different layers | 🟡 Partially resolved — new unscoped work created |
| VAPT closure date (tracked vs. actual) | 16 Oct (open-items #39) | 23 Oct (confirmed by Rama, Jul 30) — **not yet reconciled in trackers** | ⚠️ Conflict, unresolved |
| Sprint 7 Ready shelf | 4 chore stories, 3 unpointed (per Friday's `/sprint-check`) | Not confirmed this week — no re-run evidenced | ⚠️ Unknown |
| VCR one-pager | Not started | Delivered (one-pager + exec summary + comprehensive study note) | ✅ Shipped |
| Products/POCDEX data-trust risk | Tracked informally, scattered | Raised independently in 5 meetings, still 5 separate threads | ⚠️ Worse — visibility up, consolidation still missing |

---

## Top 3 Learnings

**1. What worked: treating a "reconciliation" priority as provisional paid off.**
Priority 2 assumed two conflicting narratives needed active reconciliation. Instead, one more source (an async Slack thread already sitting in the workspace) resolved the ambiguity outright. **Repeat this:** before drafting a reconciliation document from scratch, check whether a more recent, more authoritative source already exists in adjacent channels — don't assume the conflict is still live just because it was live when the priority was written.

**2. What didn't work: naming a systemic risk multiple times doesn't consolidate it.**
The Products/POCDEX data-trust question was raised independently by Pow Hwee, Rama, Adrian, and Michelle across 5 different meetings this week (Technical Walkthrough, PM Weekly, PM x Eng Sync, VAPT Slack, UAT Walkthrough). Each meeting solved its local symptom. Nobody owns the root question. **Root cause:** there's no standing artifact that different teams write cross-team data risks into — each meeting only sees its own slice. **Fix:** the CSC Integration Master Tracker (already being built for the SSO alignment gap, per this week's Squad Sync retro) is the right *shape* of fix — recommend building an equivalent for Products/POCDEX data trust rather than waiting for it to surface a sixth time.

**3. What didn't work: tracked dates drift out of sync with what's actually been confirmed.**
`00-hub/risks.md` and `open-items.md` #39 still say VAPT closes 16 Oct, but Rama confirmed 23 Oct with the vendor this week. This is a small gap (7 days) but it directly narrows the buffer before the 19-23 Oct go-live approval window — exactly the kind of drift `/stale-check` exists to catch. **Fix:** run `/stale-check` before next week's planning, specifically checking VAPT/UAT dates against this week's confirmed sources.

---

## Next Week Preview

**Draft priorities:**
1. **Confirm Sprint 7 status** — did planning happen honestly against the thin shelf, did emergency grooming get booked/run, and where does the Ready shelf actually stand now? This was Priority 1 last week and its outcome is unconfirmed.
2. **Consolidate the Products/POCDEX data-trust risk into one tracked item with one owner** — build a tracker analogous to the CSC Integration Master Tracker; raise directly with Adrian first, since he already gestured at "data challenges" to the whole PM team.
3. **Resolve the VAPT date conflict** (16 Oct vs. 23 Oct) in `open-items.md` and `risks.md`, and assess whether the go-live approval window (19-23 Oct) still holds with the tighter buffer.

**Also carrying over, not yet closed:**
- Compass-side whitelisting needs a named owner and scope — new work created by this week's Priority 3 resolution.
- Competency governance philosophy (expose-gaps vs. patch-gaps) — deferred to a joint follow-up session between Adrian Ang and Xian Zhang Guo; not yet scheduled as of Friday.
- CSC Integration Master Tracker — due before Monday's alignment meeting per this week's Squad Sync retro; confirm it actually got built.

> Run `/weekly-plan` to formalize these.

---

*Generated: 2026-07-31*
*Data sources: `outputs/weekly-plans/2026-07-27-W31-weekly-plan.md`, 11 meeting notes (`outputs/meeting-notes/2026-07-2[7-9]*.md`, `2026-07-3[0-1]*.md`), `outputs/decisions/2026-07-29-W31-otep-vcr-one-pager.md`, `outputs/decisions/2026-07-30-W31-vcr-exec-summary.md`, `outputs/decisions/2026-07-31-W31-csc-integration-alignment-retro.md`, `00-hub/open-items.md` #39, `00-hub/risks.md`*
*Next: Run `/stale-check` to sweep VAPT date drift before `/weekly-plan`*
