---
date: 2026-07-22
week: 2026-W30
meeting_type: uat-prep
topic: UAT Test Scenarios
---

# Meeting Notes: UAT Test Scenarios

**Date:** 2026-07-22

**Attendees:** Michelle Yip (notes captured from her own working session/prep — not a multi-party transcript)

**Meeting Type:** UAT prep / data readiness check

**Duration:** Not specified

---

## Summary

Quick data-readiness check ahead of UAT: general test data is okay, but ringfencing criteria still needs Rathika's input. Separately, a competency-matching gap surfaced — OTG opportunities don't carry agency code, but the competency master list ties each competency code to an agency code, so opportunity-side competency matching can't resolve reliably. This is a Pathfinder-side data model constraint, not fixable by changing Pathfinder; the competency bank data design itself needs revisiting. Flagged for today's BO planning session as an MVP delivery risk.

---

## Decisions Made

None yet — this is a problem being surfaced, not a decision made. The competency bank data design revision is proposed but not agreed with any stakeholder yet.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Input ringfencing criteria into UAT test data | Rathika | Not stated | 🔴 High | 🔴 Not Started |
| Raise competency/agency-code matching gap with BO at today's planning session | Michelle Yip | Today (2026-07-22) | 🔴 High | 🔴 Not Started |
| Scope what "competency bank data design revision" actually requires, once BO has seen the gap | Michelle Yip (likely, pending BO reaction) | Not stated | 🔴 High | 🔴 Not Started |

**Notes:**
- No due date given for Rathika's ringfencing input — recommend confirming this lands before whichever UAT prep milestone depends on it.
- The competency bank redesign has no owner or timeline yet — contingent on how BO responds today.

---

## Key Insights & Quotes

**This is a structural data-model gap, not a bug.** Competency codes in the master list are agency-scoped (agency code + competency code together form the matchable unit). OTG-sourced opportunities don't carry agency code at all. Without it, there's no reliable key to join opportunity competencies against the master list — described in the raw note as "we will not be able to match."

**"If Pathfinder needs to change, its not possible as we will not have agency code."** This rules out a Pathfinder-side fix. The only lever is revising the competency bank's data design (removing or supplementing the agency-code dependency) — that's a bigger, cross-team change, not a Pathfinder ticket.

**This sharpens, and likely supersedes, the framing in open item #18.** Item #18 marked the officer competency data model as "fully resolved" (sourcing and governance settled 2026-06-11). This note surfaces a specific downstream consequence that resolution didn't anticipate: even with sourcing/governance settled, opportunity-side matching still breaks without agency code. It's also a more precise version of the competency ID issue Pow Hwee raised at Monday's Demo & Retro (2026-07-20) — that note described "not unique across agency, job family, function, PL" as the problem; this note identifies the specific mechanism (missing agency code on the opportunity side) and states plainly that a Wednesday fix-it discussion won't be enough if the real fix is a competency bank redesign.

---

## Open Questions

- [ ] Does the competency bank redesign mean removing agency-scoping from competency codes entirely, or adding a way to derive/attach agency code to OTG opportunities? — **Owner:** Michelle Yip — **By:** Before committing to a redesign approach
- [ ] Does this gap block MVP delivery outright, or degrade to a reduced-scope competency match (e.g., match on competency description/code only, accept some false negatives)? — **Owner:** Michelle Yip / BO — **By:** Today's planning session
- [ ] How does this interact with the Wednesday meeting already scheduled (per 2026-07-20 Demo & Retro) to resolve the competency ID discrepancy? Is that meeting now the wrong venue, or does it need to expand scope? — **Owner:** Michelle Yip — **By:** Before Wednesday
- [ ] Is Rathika's ringfencing-criteria gap related to this same underlying data model issue, or fully separate? — **Owner:** Michelle Yip — **By:** Before UAT data prep is called done

---

## Blockers

1. **Competency master list requires agency code; OTG opportunities don't carry it**
   - **Blocked by:** Competency bank data model design (agency-code-scoped competency codes)
   - **Impact:** Opportunity-side competency matching cannot resolve reliably for any OTG-sourced opportunity — likely affects MVP delivery for competency-matching features (connects to OTEP-336/OTEP-570, both currently in Sprint 7 grooming)
   - **Resolution:** Not yet solved. Needs BO awareness today, then a scoped decision on whether to redesign the competency bank data model or accept a reduced-match approach for MVP.

2. **UAT ringfencing test data incomplete**
   - **Blocked by:** Rathika hasn't yet input ringfencing criteria
   - **Impact:** UAT test data not fully ready
   - **Resolution:** Needs a due date and confirmation from Rathika

---

## Next Steps

**Immediate (today):**
- Raise the competency/agency-code gap at today's BO planning session — this is explicitly named as today's task in the raw note
- Follow up with Rathika on ringfencing criteria input, ideally with a due date attached

**Short-term (this week):**
- Depending on BO's reaction today, scope what a competency bank redesign would require, or agree a reduced-scope matching approach for MVP
- Reconcile this with Wednesday's already-scheduled competency ID discrepancy meeting (from Monday's Demo & Retro) — confirm it's the same thread, not a duplicate conversation

---

## Context for Future Reference

This connects to two existing threads: **open item #18** (officer competency data model — previously marked fully resolved, this note shows a downstream matching gap that resolution didn't cover) and **Monday's Demo & Retro** (2026-07-20, competency ID non-uniqueness across agency/job family/function/PL, Wednesday meeting scheduled with Rama to address it). This note is more specific about the actual mechanism (no agency code on OTG opportunities) and states directly that a Pathfinder-side change can't fix it — treat this as sharpening the Wednesday meeting's scope, not a separate issue.

It also directly affects Sprint 7 grooming: OTEP-336 (competency match signal on cards) and OTEP-570 (matched competencies on detail page) were flagged in today's grooming brief as "near-ready," with Pow Hwee likely to ask exactly this question ("where does the competency profile come from if POCDEX/matching hasn't resolved yet"). This note answers that in advance — the matching may not resolve for agency-scoped competencies at all, which could move both stories from "near-ready" to genuinely blocked pending the BO conversation today.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

The data to be prepped is ok, Rathika needs to put in for the ringfencing criteria.
For Competency Matching, the gap is that OTG passes in competency decription, though we are able to get the comp code, when we pass into the master list, there may be discrepancies as the data model is each competency code is tied with agency code as well. so we will not be able to match as competencies in opportunities do not come with agency code. This is one gap which I will need to bring up to BO during today planning as this will impact the delivery for MVP. If Pathfinder needs to change, its not possible as we will not have agency code. Competency bank data design will need to be revised.

</details>
</content>
