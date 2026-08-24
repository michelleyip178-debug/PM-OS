---
week: 2026-W34
week_start: 2026-08-17
week_end: 2026-08-21
quarter: Q2/Q3 2026
---

# Weekly Review - Week of August 17, 2026

## TL;DR

- **PRDs:** Ops Portal PRD active all week (v0.2, multiple sections rewritten); CAM integration split into its own new epic one-pager on Thursday
- **Decisions:** 1 formal decision doc filed (competency recalculation on profile change); PS/DS accept/reject decision did **not** close — 3rd week now unresolved
- **Meetings:** 6 processed this week (Squad Sync, CSC SIT/UAT Readiness, Weekly Slack Update, 2x UAT Daily Review, Post-MVP Prioritisation Planning)
- **Completion rate:** 2 of 3 weekly priorities resolved (WOG AD, Gate 2) — but neither closed via the planned escalation; both cleared on their own before the trigger fired
- **Key win:** Sprint 8 feature freeze held; WOG AD and UAT Gate 2 both resolved before Friday's deadline
- **Key challenge:** The "escalate, don't re-ask" behavior change named 2 weeks running was never actually tested — both blockers cleared independently, and PS/DS (the one item nobody else resolved for you) is now genuinely 3 weeks stalled

---

## Priority Completion

### Priority 1: Escalate WOG AD Prod Confirmation ✅ Resolved (not via plan)

**Planned:** Dated ask to Pow Hwee by Monday, escalate to Adrian by Wednesday if silent, verify the escalation actually fired.

**Actual:** Resolved 2026-08-18 — prod/UAT confirmed and tested working, UAT Phase 2 started. Approval-clock question became moot. **The planned Adrian escalation never fired** — it cleared before Wednesday's trigger date.

**Status:** ✅ Complete, but the underlying goal (test whether "escalate, don't re-ask" actually works) was not achieved — the blocker resolved on its own.

---

### Priority 2: Escalate UAT Gate 2 Confirmation ✅ Resolved (not via plan)

**Planned:** Direct ask to Rama Monday with explicit deadline; escalate to Adrian same-day if silent; broadcast to wider UAT group once confirmed.

**Actual:** Resolved 2026-08-18 — Rama confirmed test data current, Batch 1 broadcast went out. Same pattern as Priority 1: the escalation trigger was never used.

**Status:** ✅ Complete, same caveat as above.

---

### Priority 3: Force PS/DS Accept/Reject Decision to Close ❌ Not resolved

**Planned:** Either close via `/decision-doc` this week, or explicitly name the 3rd-week-slip risk to Adrian by Thursday.

**Actual:** As of Thursday's plan, still open — no `/decision-doc` filed, no logged Adrian check-in since the weekly plan was written. No Friday daily plan exists to confirm whether the Thursday-named "explicitly flag the 3rd-week slip" fallback actually happened.

**Status:** ❌ Not complete. This is now entering its **3rd consecutive week** with content progress but no actual decision. Unlike Priorities 1 and 2, nobody else is going to resolve this one — it has no external dependency clearing it by accident.

**Learning:** Two weeks running, the plan called for "escalate, don't re-ask" as the fix for stalled items. Both times it was named, the blocker dissolved before the escalation was tested — so the behavior itself remains genuinely unverified. PS/DS is the one item this week that isolates whether the escalation muscle works, because nothing else is clearing it. Next week's plan should treat it as the real test case, not a third instance of the same soft carry-over.

---

## Key Decisions Made

1. **Competency recalculation on profile change — proposal drafted** (18 Aug, prompted by Squad Sync)
   - **Context:** Squad Sync surfaced that officer-competency-on-profile-change wasn't just isolated UAT bugs but a real lifecycle-model gap.
   - **Decision:** Drafted a same-day proposal pre-empting 5 specific risks, sent for Imelda's team review — not yet formally accepted.
   - **Doc:** [2026-08-18-W34-competency-recalculation-on-profile-change.md](../decisions/2026-08-18-W34-competency-recalculation-on-profile-change.md)

2. **CAM integration confirmed for Release 1, split into its own epic** (20 Aug)
   - **Context:** Was a same-day, unscoped placeholder inside the Ops Portal PRD (Section 7.4). Architecture diagrams reviewed showed a fuller design (7 event types, per-event CC actions) but placed CAM as Post-MVP.
   - **Decision:** User confirmed CAM ships in R1 despite the diagram's Post-MVP framing, and explicitly directed CAM be removed from Ops Portal scope entirely.
   - **Doc:** [2026-08-20-W34-cam-integration-epic-one-pager.md](../prds/2026-08-20-W34-cam-integration-epic-one-pager.md)

3. **Functional-competency-exclusion rule conflict surfaced, not resolved** (19-20 Aug)
   - **Context:** Two sources disagree on why CEA-type roles get excluded from recommendations — Epic 2's Decision Tracker says "no agency tag," OTEP-1235's UAT explanation says "zero functional competencies." CEA has an agency tag but is still excluded, proving these aren't the same rule.
   - **Decision:** Flagged rather than silently resolved — documented as an open conflict in a new reference doc.
   - **Doc:** [competency-recommendation-filtering.md](../../context-library/prds/competency-recommendation-filtering.md)

---

## PRD Pipeline

| PRD | Stage (Start of Week) | Stage (End of Week) | Movement | Next Action |
|---|---|---|---|---|
| Ops Portal PRD | v2.3, 2/17 Open Items closed | v0.2, extensively revised (scrutiny pass, TC4 conflict flagged, story renumbering, interim fix path drafted) | ✅ Advanced | Push staged Confluence v45 (interim path + cleanup) — held per explicit instruction, needs go-ahead |
| CAM Integration | Did not exist | New epic one-pager created, R1 confirmed | 🆕 New | Fill in Tech/Designer/BO owners; resolve 5 open gaps (case-linkage, PDPA cleanup, effort, ownership, R1 minimum scope) |
| R1 planning artefacts (#59) | Designers committed 12 Aug, delivery unconfirmed | Not confirmed this week either | ⚠️ Stalled | Direct check before next grooming — still outstanding from last week |

---

## Meetings & Notable Threads

**6 meetings processed:** Squad Sync (18 Aug), CSC SIT/UAT Readiness (18 Aug), CareerCompass Weekly Slack Update (18 Aug), UAT Daily Review ×2 (18 & 19 Aug), Post-MVP Prioritisation Planning (20 Aug).

**Recurring pattern worth naming:** three separate items this week (functional-competency rule, Jumpstart fallback, competency-recalculation-on-profile-change) were undocumented business rules surfacing as apparent "defects" during UAT — not actual bugs. The fix each time was writing the rule down somewhere durable, not a code change. Worth treating this as a standing UAT-review lens going forward: check "is this a rule that was never written down" before treating a UAT finding as a defect.

**New untracked risks surfaced, not yet owned:**
- September capacity gap (Amber leaving end-Sept, new PM not arriving until Sept, R1 feasibility in question) — flagged 18-19 Aug, no decision doc or owner yet.
- False-confidence risk in UAT defect counts (drip-fed tickets, ~22 personas, no E2E validation) — flagged 19 Aug, no date attached.
- Memory-exhaustion / large-search-performance investigation (Adrian Lo) — flagged 19 Aug as a possible production-stability risk, dated Thursday morning after sitting undated for a day.

---

## Top 3 Learnings

**1. "Escalate, don't re-ask" remains untested for the third time.** Both named escalation triggers (WOG AD, Gate 2) were preempted by the blockers resolving independently. This is a good outcome but not evidence the intended behavior change works — worth being honest about that rather than crediting the plan. PS/DS is now the cleanest test case, since nothing else is going to clear it by accident.

**2. Ops Portal PRD quality improved substantially through direct scrutiny, not new information.** The self-review pass this week found real internal contradictions (stale counts, duplicate sentences, mismatched section cross-references) that had been sitting in a "finished-looking" document for days. Scheduling a deliberate scrutiny pass on a document that feels done is worth repeating on other active PRDs, not just Ops Portal.

**3. Protected time blocks keep getting displaced by legitimately urgent same-day items, not by low-value work.** Both Wednesday and Thursday's named protected blocks got contested by real new risks (Sept capacity gap, memory-exhaustion investigation) rather than reactive noise — which is a different problem than the protected-block pattern is designed to catch. Worth distinguishing "protected block eaten by inbox churn" from "protected block genuinely outcompeted by a bigger same-day risk" in future plans, since the fix for each is different.

---

## Next Week Preview

### Top 3 Priorities (Draft)

1. **Close PS/DS to an actual accept/reject decision** — 3rd week running, the one item this week that didn't resolve itself. Needs a same-day `/decision-doc` the moment Adrian's sign-off status is known, not a 4th week of "still open."
2. **Resolve CAM integration's 5 open gaps** — particularly case-linkage with the Ops Portal (does a CAM event generate a portal case or bypass it?) and PDPA ownership for the Staff Exit personal-data-cleanup action, before this epic can be sized for R1.
3. **Confirm R1 planning artefacts (#59) delivery** — designer output was due 12 Aug, still unconfirmed 2 weeks later, and directly blocks grooming.

> Note: Run `/weekly-plan` to formalize these and add detail.

### Items to Unblock

| Item | Blocked Since | Blocked By | Action Needed |
|---|---|---|---|
| PS/DS accept/reject decision | ~3 weeks (week of 3 Aug) | Adrian's SD(WD)/D(ITC) routing sign-off | Direct check-in this week, run `/decision-doc` same day sign-off lands |
| R1 planning artefacts (#59) | 12 Aug (designer commitment date) | Designer delivery unconfirmed | Direct check before next grooming session |
| September capacity gap | 18 Aug (surfaced, untracked) | No owner named yet | Needs its own decision doc or escalation — bigger than a single action item |
| Case-linkage: CAM ↔ Ops Portal | 20 Aug | No design source addresses it | Needs a explicit decision before CAM epic can be sized |

**Priority unblocks:**
1. PS/DS — the one item nothing else is going to resolve for you.
2. September capacity gap — three converging facts (Amber leaving, new PM delayed, R1 feasibility) with no owner is a bigger risk than its current "flagged in a meeting note" status suggests.

---

*Generated: 2026-08-24*
*Data sources: Weekly plan, daily plans (17-20 Aug), meeting notes, PRDs, decisions, live Jira sprint state*
*Next: Run `/weekly-plan` to plan next week*
