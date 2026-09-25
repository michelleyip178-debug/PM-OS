---
week: 2026-W39
week_start: 2026-09-21
week_end: 2026-09-25
quarter: Q3 2026
---

# Weekly Review - Week of September 21, 2026

## TL;DR

- **Scope churn dominated the week:** STIPs & Gigs' apply mechanism reversed six distinct times in three days; R1's overall architecture flipped from native-Compass to OTG-dependent, then Internal Jobs' ingestion flipped a second time on top of that (D-049). None of this was in the weekly plan.
- **The actual Priority 1 (one kickoff date, reconciled Tuesday) never happened** — Tuesday's estimation sync got overtaken by the bigger scope fight before it could run. Effort/timeline (R-12) is still unestimated, now against a fourth or fifth distinct scope shape.
- **Priority 3 (VAPT triage owner) is still open** — third consecutive week unresolved, exactly the failure mode flagged as a risk in this week's own plan.
- **What did land:** R1 now has a single confirmed-scope reference doc, a fully reconciled decisions log (D-033 through D-050), a synced risk register, and consistent HTML/markdown artifacts across the whole document set — real, durable output, just not the output the plan described.
- **32 risks tracked (up from an unreconciled baseline), 65 files touched, 6 commits, 0 kickoff date.**

---

## Strategic Progress

**Quarter Goal:** No formal Q3 OKRs on file — working goal remains shipping R1 so "officers completing a development action" becomes measurable.

**Progress this week:** Scope is now fully documented and internally consistent for the first time this month — a real prerequisite for estimation, even though estimation itself didn't happen. The North Star metric took a hit: R1's confirmed shape (discovery-only, redirect-to-apply for nearly everything) means the North Star isn't directly measurable through R1 at all anymore, only through a proxy (FormSG-Click Rate). That's a bigger strategic finding than anything in the original weekly plan anticipated.

**Velocity check:** Effort estimate (R-12) is further from resolved than it was Monday, not closer — every prior man-week figure now predates at least one architecture reversal. This is a real schedule risk, not just a documentation lag.

---

## Top 3 Priorities Review

### Priority 1: Reconcile R1 Kickoff Date + Lock Tuesday's Estimation Delivery

**Planned:** One kickoff date, reconciled same-day across the risk register, one-pager, and reduced-scope brief, coming out of Tuesday's estimation sync.

**Actual:** Tuesday's sync happened but didn't produce a locked estimate — the Estimation Discussion (22 Sep) instead surfaced that Rama and Michelle held genuinely different mental models of R1's population (pilot-only vs. WOG-wide), which had to be resolved before any estimate could be trusted. That resolution (Adrian's scope slide, 23 Sep) then triggered a much larger cascade: WOG-wide confirmed → architecture reversed to OTG-dependent (24-25 Sep) → STIPs & Gigs corrected three times in one day → Internal Jobs' ingestion source flipped a second time (D-049, 25 Sep). The kickoff date was never reconciled — it's now blocked behind a scope that only stabilized late Thursday/Friday.

**Tasks:**
- [ ] Pull Rama/Barry's man-week estimate — did not happen; superseded by the scope-alignment crisis
- [ ] Cost the native-form decision — moot; native form was dropped entirely by Friday's confirmed scope
- [x] Confirm SJR epic split with Adrian — resolved via D-033/D-042, SJR excluded from R1 entirely
- [ ] Pick one kickoff date — not done, still pending re-estimate
- [x] Update risk register's stale Workable-era content — done, and then done five more times as scope kept moving

**Status:** ❌ Not achieved as planned, but not simply "failed" — the plan assumed this week's biggest problem was a scheduling/estimation gap. The actual biggest problem was a scope disagreement underneath the estimate, and surfacing that was necessary work the plan didn't anticipate.

**Key outcome:** R1's scope is now genuinely confirmed (not just asserted) for the first time since the Workable pivot, backed by a direct meeting transcript rather than relayed summaries. The [R1 Confirmed Scope](../analyses/2026-09-25-W39-r1-confirmed-scope.md) doc and Decisions Log D-033–D-050 are the artifacts of that work.

**Learning:** The plan's framing — "pick a date, write it down, stop it drifting" — assumed the underlying scope was stable enough to date. It wasn't. Next time a kickoff-date reconciliation task carries over more than once, treat that as a signal to check whether scope itself is actually agreed, not just whether the date-setting conversation keeps getting deprioritized.

---

### Priority 2: Close the HRPS/Cumulus Discovery Loop

**Planned:** Written answers on HRPS API scope, ringfencing, and eligibility from Lee Koon TEU/NCS; a confirmed fallback if answers don't land in time.

**Actual:** Partially achieved, then overtaken by a different, bigger correction on the same subject. Monday's discovery call happened (captured in [R1 Discovery: Internal Jobs, HRPS & Cumulus](../meeting-notes/2026-09-21-W39-r1-discovery-internal-jobs-hrps-cumulus.md)) and produced real architecture detail (Cumulus pushes into HRPS, one-way). That architecture then got reversed twice more this week — first to OTG-dependent (25 Sep morning, per Mark/GK's direction), then back to direct HRPS/Cumulus (D-049, 25 Sep afternoon). The original open question (does HRPS supply ringfencing data) is still open. The API delivery date itself (D-01) is still uncommitted — this is now the single hardest blocker in R1, flagged explicitly in this week's Epic B one-pager as needing escalation.

**Status:** 🟡 Partial — the discovery work happened, but it fed into a scope reversal rather than a stable answer, and the core blocker (HRPS API date) is unresolved, now flagged as the top R1 dependency.

**Key outcome:** [Epic B: Internal Jobs (incl. IJR)](../prds/2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md) — new, consolidated one-pager naming the HRPS API date as the single highest-priority open item after Mark/GK scope confirmation.

**Learning:** SJR's scope question (Priority 2's other thread) resolved cleanly and stayed resolved (D-033, D-042) — worth noting what made that one stick versus what made Internal Jobs' ingestion question reverse three times: SJR had a single clear owner (Adrian) and a written proposal Michelle sent proactively. Internal Jobs' ingestion question got resolved via relayed meeting summaries multiple times before a direct transcript settled it (R-31's whole finding). Get to the direct source before writing anything down as confirmed, especially on architecture questions with more than one stakeholder in the loop.

---

### Priority 3: Name a VAPT Triage Owner (Second Week Running)

**Planned:** A named triage engineer, confirmed with Jace Tan and Jobelle. CIE PM vacancy status checked.

**Actual:** Not done. Per the risk register's own I-09 entry, this is now the third consecutive week unresolved. The scope blocker that was plausibly stalling it (I-06, VAPT timeline/scope) closed 23 Sep — VAPT is confirmed running in R1 via a risk-acceptance model, which should have made naming an owner easier, not harder. It wasn't named anyway.

**Status:** ❌ Not achieved — carried a third week, exactly the outcome this week's own risk section warned against ("If it slips a third week, it starts to threaten the 24-25 Nov MVP launch gate").

**Learning:** This is the second week in a row this item was named as a priority and didn't move. Escalating "directly" in writing hasn't worked twice now — worth trying a different lever next week (e.g., raise in a synchronous meeting with Adrian and Barry both present, rather than an async ask) rather than repeating the same escalation a third time and expecting a different result.

---

## PRD Pipeline

| PRD / Epic Doc | Stage (Start of Week) | Stage (End of Week) | Movement | Next Action |
|---|---|---|---|---|
| R1 Release One-Pager | Draft, pilot-scoped | Rewritten twice — WOG-wide, then architecture-reversed, then cleaned up and internally reconciled | ✅ Advanced (materially) | Re-estimate once HRPS API date lands |
| Epic A — STIPs & Gigs | Did not exist | Rewritten three times same day, now stable (FormSG-uniform, confirmed final) | 🆕 New, now stable | Confirm with Rama/Barry how FormSG-link parsing actually works |
| Epic B — Internal Jobs (incl. IJR) | Did not exist (Internal Jobs had no dedicated doc; IJR was a separate "Epic D") | New, consolidated doc; IJR folded in (D-050) | 🆕 New | Escalate HRPS API delivery date — blocks everything else in this epic |
| Epic D — IJR (standalone) | Rewritten 4 times this week | Superseded, folded into Epic B | ⚪ Retired | None — kept for historical reference only |
| R1 Confirmed Scope | Did not exist | New — single clean reference for current state, separate from the correction-trail register | 🆕 New | Keep in sync if scope moves again |
| R1 Risk Register | 30 risks, pre-pivot content still present | 32 risks, fully current, 9 banners tracking the week's reversals | ✅ Advanced | Consider archiving older banners once scope has held stable for a week |
| CareerCompass MVP | Delivered, hardening | Unchanged | → Steady | VAPT triage owner still blocking full launch-readiness confidence |

**Analysis:**
- **Advanced (unexpectedly):** the scope-documentation pipeline moved further this week than any prior week — not because it was planned, but because the scope fight forced it. Six architecture reversals in three days is a genuinely bad pattern (see Learnings below), but the byproduct is that R1's scope has never been this well-documented or this traceable to a direct source.
- **Stalled:** the estimate itself (R-12) — every input to it changed at least once this week.
- **Recommendation:** don't run a re-estimation session until Adrian/Xian/Mark/GK jointly confirm the current scope is genuinely final (R-31's own mitigation) — running it now risks a second wasted estimation cycle if a seventh reversal lands next week.

---

## Key Decisions Made

This week produced 18 new decisions (D-033 through D-050) — by far the highest-volume decision week in the log. Selected highlights, not the full list (see [Decisions Log](../decisions/2026-05-29-W22-decisions-log.md) for all):

1. **D-034 — R1 scope confirmed WOG-wide** (23 Sep, Adrian's scope slide)
   - Resolved the pilot-vs-WOG-wide disagreement that blocked Tuesday's estimation sync.
2. **D-044 — R1 architecture reversed to OTG-dependent, discovery-only** (25 Sep, Mark & GK's direction via Xian)
   - Superseded the native-Compass build direction from 23-24 Sep for STIPs & Gigs, Internal Jobs, IJR, and Secondment.
3. **D-045 — STIPs & Gigs apply: uniform FormSG, no pilot/non-pilot split** (25 Sep, third and final correction)
   - The single most-revised decision of the week — confirmed only after a direct meeting transcript overrode two prior relayed versions.
4. **D-049 — Internal Jobs ingestion reverts to direct HRPS/Cumulus, not OTG** (25 Sep, same day as D-044)
   - Narrows D-044 specifically for Internal Jobs; reopens the HRPS API delivery dependency as a live blocker.
5. **D-050 — IJR's epic documentation folds into Epic B** (25 Sep)
   - Process decision, not a scope change — consolidates duplicate tracking overhead now that IJR and Internal Jobs share a shape.

---

## Metrics Movement

| Metric | Start of Week | End of Week | Change |
|---|---|---|---|
| R1 risks tracked | ~30 (stale, pre-pivot content mixed in) | 32, fully current | +2, but qualitatively much more accurate |
| Distinct STIPs & Gigs apply-mechanism versions | 1 (native, assumed stable) | 6th confirmed version by Friday | Volatile — process risk itself now tracked (R-31) |
| R1 kickoff date candidates in circulation | 3 (mid-Nov, ~1 Dec, October) | Still pending re-estimate | No net progress |
| VAPT triage owner | Unnamed | Unnamed | No change, 3rd week |
| Decisions logged | 32 total (D-001–D-032 baseline) | 50 total | +18 this week alone |
| R1 epic one-pagers with dedicated docs | 0 (Internal Jobs/IJR had none) | 2 new (Epic A, Epic B) + 1 superseded (Epic D) | Real documentation gap closed |

---

## Top 3 Learnings

**1. Relayed second-hand accounts of leadership direction produced three different, conflicting pictures of the same decision this week — direct meeting transcripts were the only thing that reliably settled it.**
STIPs & Gigs' apply mechanism changed shape based on relayed summaries twice before a direct OTEP Squad Sync transcript confirmed the actual final answer. This is now tracked as a standing process risk (R-31). **Change for next time:** when a scope question depends on Mark/GK's direction and it's being relayed through an intermediary, treat that relay as provisional until a direct transcript or written confirmation exists — don't propagate it to downstream docs as final.

**2. A "pick one number and write it down" task (Priority 1) was actually blocked on an unstated scope disagreement, not a coordination gap.**
The plan treated the kickoff-date problem as a documentation-discipline issue. It was really a case of two people (Rama and Michelle) holding different mental models of the same word ("R1 scope") without realizing it, which only surfaced when the estimation session itself failed. **Change for next time:** before scheduling a "lock the number" session, explicitly confirm all parties are estimating against the same written scope document, not just assuming shared context from prior conversations.

**3. Escalating VAPT triage ownership the same way for two consecutive weeks produced the same result both times.**
This is the clearest case of a genuinely actionable pattern in this week's data: two weeks of "escalate directly" (async, in writing) with no movement. **Change for next time:** when an async escalation fails to move an item for two consecutive weeks, switch the channel — bring it into a synchronous meeting with the decision-makers physically or virtually present, rather than repeating the same written ask a third time.

---

## Next Week Preview

### Draft Priorities

1. **Get joint Adrian/Xian/Mark/GK confirmation that R1's current scope (as of 25 Sep) is genuinely final** — the single highest-priority open item across every document touched this week (R1 Release One-Pager, Epic A, Epic B all name this first). Without it, any re-estimation work risks being thrown away a second time.
2. **Escalate HRPS API delivery date (D-01) via a synchronous conversation with NCS/Lee Koon TEU** — this is now the hardest blocker in R1, gating Internal Jobs discovery entirely (R-07, 🔴 Red).
3. **Name the VAPT triage owner via a synchronous ask, not a third async escalation** — three weeks unresolved, direct pattern-break needed per this week's learning.

> Run `/weekly-plan` to formalize these.

### Items to Unblock

| Item | Blocked Since | Blocked By | Action Needed |
|---|---|---|---|
| R1 effort estimate (R-12) | 2+ weeks | Scope instability (six reversals this week alone) | Get final scope confirmation (Priority 1 above) before scheduling another estimation session |
| Internal Jobs discovery (Epic B) | This week (D-049) | Undelivered HRPS API, no committed date (D-01) | Escalate directly to NCS/Lee Koon TEU — flagged as R1's top dependency |
| VAPT triage owner (I-09) | 3 weeks | No named decision-maker action, despite scope blocker (I-06) closing 23 Sep | Switch to synchronous escalation with Adrian + Barry |
| CAM Integration scope (R-15) | 2+ weeks | Three-way conflict across Mark-facing slide, one-pager, confirmed-scope doc | Get Adrian's single written answer before any further Mark-facing material goes out |

**Priority unblocks for Monday:**
1. Confirm scope finality (Priority 1) — everything else this coming week depends on this not moving again.
2. HRPS API date escalation — second priority, but can run in parallel with #1.

---

*Generated: 2026-09-25*
*Data sources: Weekly plan (2026-W39), daily plans (21-24 Sep), 14 meeting notes, 6 decision docs, decisions log (D-033–D-050), R1 Risk Register, git log*
*Next: Run `/stale-check`, then `/weekly-plan` for W40*
