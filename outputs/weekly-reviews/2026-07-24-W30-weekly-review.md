---
week: 2026-W30
week_start: 2026-07-20
week_end: 2026-07-24
quarter: Q2/Q3 2026
---

# Weekly Review - Week of July 20, 2026

## TL;DR

- **No formal weekly plan existed for W30** — reviewing against the 3 draft priorities last week's review (W29) proposed, plus what actually surfaced day to day
- **Priorities:** 1 of 3 resolved (#57/OTEP-130 closed Monday), 1 partial (AC-validation artifact — done Thursday, 3 days late), 1 stalled-then-resolved-differently (UAT Operating Model reconciliation never happened as planned; overtaken by a much bigger timeline conversation instead)
- **Meetings:** 15+ across the week, capped by a dense 5-meeting Friday (squad sync, handover, standup, internal demo, senior bi-weekly) that surfaced the week's real headline
- **Key win:** Ready shelf moved from 0 → 4 stories via `/grooming-close`, and the UAT/Products data ask got sharply narrowed (ring-fencing needs just 2 accounts, competency matching moved to mocks) — real scope reduction, not just tracking hygiene
- **Key challenge:** Sprint 7 planning (Monday) is starting with only 4 Ready stories against a ~25/sprint velocity baseline, and the October MVP date is now genuinely in question — senior stakeholders are quietly expecting November while the working level is still defending October
- **Governance gap surfaced late:** two bootcamp days (Mon/Tue) collapsed real capacity to "two things a day," which is exactly when grooming-close went 3 days overdue and Sprint 6's Ready shelf sat empty into Wednesday

---

## Priority Review (vs. last week's draft)

### Priority 1: Close #57 for real (Pow Hwee's OTEP-130 confirmation)

**Planned:** Same-day resolution Monday, learning from how forcing worked the prior week.

**Actual:** ✅ Resolved Monday (2026-07-20) — Pow Hwee confirmed FormSG has no webhook support, all net-new scope cut. One small housekeeping call (close as duplicate of US-18/OTEP-319 vs. keep as thin ticket) stayed open through Wednesday's daily plan and doesn't appear closed anywhere in this week's notes — worth a final 2-minute call Monday.

**Status:** ✅ Complete (main item), 🟡 one loose thread

**Learning:** The "force same-day, first-task-of-Monday" pattern worked a second week running. Repeat for anything that's already missed 2+ venues.

---

### Priority 2: Build the single AC-validation-status artifact

**Planned:** Consolidate UAT test-case coverage, the 5-element scenario audit, and Pathfinder demo-scope mapping into one document.

**Actual:** 🟡 Partial, and later than planned. Named as Priority 2 in Monday's, Tuesday's, and Wednesday's daily plans with no real block — two bootcamp days (Mon/Tue) ate the capacity for it. Wednesday finally got a real morning block. By Thursday/Friday, `outputs/analyses/2026-07-24-W30-consolidated-test-plan.md` and the Core companion exist and were kept in sync with live Confluence — so the artifact did get built, just 3-4 days later than the "resolve this week" framing implied, and it grew into something bigger (full BO-readable UAT plan with personas) rather than the narrower AC-validation-status doc originally scoped.

**Status:** 🟡 Complete, but scope drifted and timeline slipped

**Learning:** The bootcamp collision wasn't visible when last week's priorities were drafted Friday. When a fixed external commitment (training, offsite) is already on the calendar, name it explicitly in the weekly plan's capacity assumptions rather than discovering the conflict fresh each morning — this cost 2 days of "Today's Two, not Three" cuts.

---

### Priority 3: Reconcile UAT Operating Model against Rama's draft, close the loop with Adrian/Jace/Barry

**Planned:** One live conversation with Rama covering the QA/UAT boundary sign-off, the reserved-profiles-vs-read-replica risk, and the readiness-gate-vs-Phase-0-timeline conflict.

**Actual:** ❌ Did not happen as scoped. It got overtaken by events: Wednesday's Data Mapping session and Thursday's POCDEX Data Requirements meeting addressed pieces of the underlying data-realism risk, but not through the specific reconciliation conversation planned. More significantly, Friday's senior bi-weekly reframed the entire conversation from "is the UAT Operating Model internally consistent" to "is October still credible at all" — a bigger, more urgent version of the same underlying risk (data quality, timeline compression) that makes the narrower reconciliation moot until the bigger question resolves.

**Status:** ❌ Stalled, superseded by a larger version of the same risk

**Learning:** This is a case where "the priority didn't happen" isn't a failure of execution — the risk it was tracking (UAT data realism, timeline slack) grew large enough this week that it needed a senior escalation instead of a working-level reconciliation. Worth explicitly closing out this priority as "overtaken," not silently dropping it.

---

## Key Decisions Made

1. **FormSG apply-flow scope cut confirmed (#57 closed)** (2026-07-20, Demo & Retro) — No webhook support; all net-new scope cut, OTEP-130 reduced to pre-redirect notice + labelled button.
2. **UAT will proceed with mock/incomplete Products data rather than wait for full readiness** (2026-07-24, Squad Sync) — Functional testing now, Products-dependent scenarios later; addresses the same data-realism risk flagged as unresolved for 3 straight weeks.
3. **Competency matching moved off the Products-dependency list entirely** (2026-07-24, Handover) — Mock Compass users with seeded competencies instead of real accounts.
4. **Ring-fencing narrowed to 2 accounts, not a batch** (2026-07-24, Handover) — Sharp, concrete scope reduction on the DO ask.
5. **4 stories gated Ready for Sprint 7** (2026-07-22, Grooming Close) — OTEP-329/680/659/485, all confirmed via DoR gates and live Jira label.
6. **Keep closing-date logic; defer start-date question to a spike** (2026-07-24, Team 2 Standup) — Scope discipline near UAT, avoid destabilizing a working version.
7. **Skip the Courses landing page in Monday's stakeholder demo** (2026-07-24, Internal Demo) — Data quality issues would surface live; lead with Explore/Search instead.
8. **Hygiene gates (cyber, performance, security) must be demonstrated with evidence before go-live** (2026-07-24, Senior Bi-weekly) — Gek Khiang pushed this; no longer just assurances.
9. **November informally emerging as the real MVP target, October increasingly defended on hope** (2026-07-24, Senior Bi-weekly, directional not formal) — The week's single most consequential decision, and it directly conflicts with the squad sync's same-day framing that October is still the live target (see Learnings).

---

## Metrics Movement

| Metric | Start of Week (Mon) | End of Week (Fri) | Change |
|---|---|---|---|
| Ready shelf (Sprint 7) | 0 stories, 0.0 sprints runway | 4 stories, ~0.16 sprints runway | 🟡 Improved, still 🔴 at risk |
| #57 (OTEP-130) venues missed | 4 (carried from last week) | 0 — resolved Monday | ✅ Closed |
| Ungroomed near-ready candidates | Unknown | 19 (from Tuesday's scorecard, still ungroomed Friday) | ⚠️ New visibility, not yet resolved |
| Products/DO data ask scope | Assumed broad (full data pull) | Narrowed to ring-fencing (2 accounts) + Core's personas | ✅ Major scope reduction |
| MVP target date confidence | October, defended (per W29 review) | October "achievable only if everything goes well"; November emerging as real target | ❌ Materially worsened |
| VAPT vendor status | Unclear | NCS confirmed preferred, but unavailable until mid-September — compresses against any October date | ⚠️ New hard constraint surfaced |
| Consolidated test plan | Partial docs (3 separate UAT artifacts) | Single BO-readable Pathfinder + Core plan, synced to live Confluence | ✅ Complete |

---

## Top 3 Learnings

**What worked:** Naming #57 as the literal first task of Monday, for the second week running, got it closed same-day after missing 4 venues the week before. The "force same-day, don't just re-name" pattern is now validated twice — worth making it the default response the moment anything hits 2 consecutive misses, not waiting for a third.

**What didn't work:** The week ran with no formal weekly plan, which meant priority-setting happened retroactively (via daily-plan carryover notes) rather than being set intentionally Monday morning. Combined with two unplanned-for bootcamp days, this meant Priority 2 (AC-validation artifact) and Priority 3 (UAT Operating Model reconciliation) both slipped for reasons that a Monday-morning weekly plan would likely have caught (the bootcamp conflict) or reprioritized around (the growing timeline-confidence risk).

**Fix:** Run `/weekly-plan` Monday morning even on a week with known external commitments (bootcamp, training) — naming the capacity hit up front is cheaper than rediscovering it fresh each daily plan.

**What to watch:** The October-vs-November conflict is the week's biggest unresolved thread. The squad sync (Friday morning) and the senior bi-weekly (Friday, same day) ran two different internal narratives on the same date question, and nobody in the room seems to have reconciled them yet. This isn't a tracking gap, it's a live risk to stakeholder trust if it surfaces externally before OTEP's own team has one consistent story.

**Fix:** The one-pager proposed in Friday's senior bi-weekly notes (why October slipped, what's needed before go-live, why November is achievable, what would still delay it) is the highest-leverage single artifact to produce next week — it directly resolves this conflict and unblocks the "escalate with a coherent narrative" ask from leadership.

---

## Next Week Preview

### Top 3 Priorities (Draft)

1. **Close the Ready-shelf gap before Sprint 7 planning fails to launch cleanly** — 19 near-ready stories are still ungroomed as of Friday; a dedicated grooming session (not another single-story pass) is the binding constraint, and Monday's planning session needs more than 4 stories to work from.
2. **Draft the October/November reconciliation one-pager** — resolves the conflict between the squad sync's "October still live" framing and the senior bi-weekly's "November is the real target" signal; this is also the artifact that answers Mark's "why wasn't this escalated earlier."
3. **Resolve whitelisting ownership (Products vs. Compass)** — blocks the DO account request, the ring-fencing UAT scenario count, and indirectly Imelda's persona finalization. Single highest-leverage open question carried from Friday's meeting cluster.

> Note: Run `/weekly-plan` Monday morning to formalize these — and explicitly check the calendar for any fixed external commitments (courses, offsites) before setting capacity assumptions, given this week's bootcamp collision.

---

### Items to Unblock

| Item | Blocked Since | Blocked By | Action Needed |
|------|---------------|------------|----------------|
| 19 ungroomed near-ready stories | 2026-07-22 (scorecard run) | No dedicated grooming session held | Schedule a real grooming block before Monday's Sprint 7 planning |
| Whitelisting ownership (Products vs. Compass) | 2026-07-24 (Handover meeting) | Pow Hwee Tan's input, requested by Rama | Rama to raise directly, not let it ride into next week's meetings |
| October vs. November MVP target | 2026-07-24 (Senior Bi-weekly) | No single reconciled narrative yet | Draft the one-pager; align squad-sync-level and senior-level framing before either gets repeated externally |
| OTEP-130 Jira housekeeping (close as duplicate vs. keep thin) | 2026-07-20 | No decision made, small item | 2-minute call Monday — don't let a fully-resolved item leave a dangling Jira artifact |
| Production environment access (GovTech capacity loss) | 2026-07-24 (Team 2 Standup) | fanxu.wang's escalation, no response yet | Push for a concrete answer, not just "escalated" — flagged as needing leadership visibility if it doesn't move |
| Go-live risk-threshold framework (what findings block launch, who signs off) | 2026-07-24 (Squad Sync, never revisited) | No owner assigned | Needs an owner named next week — currently nobody's job |

**Priority unblocks:**
1. Grooming session for the 19 candidates — the most time-boxed item, Sprint 7 planning is Monday
2. October/November one-pager — highest strategic leverage, resolves multiple downstream questions at once

---

*Generated: 2026-07-24*
*Data sources: Daily plans (Mon–Fri), meeting notes (11 meetings this week), grooming-brief/grooming-close, sprint-check (Mon and Fri runs), analyses (consolidated test plan, RTM), last week's (W29) weekly review*
*Next: Run `/stale-check` to sweep trackers, then `/weekly-plan` for W31*
