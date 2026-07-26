---
date: 2026-07-24
week: 2026-W30
meeting_type: sprint-internal-demo
topic: Courses and Opportunities pre-demo readiness
---

# Meeting Notes: Internal Demo — Courses and Opportunities Pre-Demo Readiness

**Date:** 2026-07-24

**Attendees:** Rathika Ramalingam, Imelda Mo, Rama Moorthy, Amber (Tong), Pei Ern Lim, Adrian (Ang), Michelle Yip

**Meeting Type:** Sprint internal demo (pre-stakeholder-demo readiness check)

**Duration:** Not specified

---

## Summary

The team walked through Courses and Opportunities ahead of Monday's stakeholder showcase (2026-07-27) and surfaced real gaps: inconsistent understanding of filter acceptance criteria, unresolved search defects, and messy test data. The session did its job — these issues got caught internally instead of live in front of stakeholders — but the team is not yet confident going into Monday. Rama explicitly asked for another run-through, and multiple people flagged unfinished validation work.

---

## Decisions Made

1. **Skip the Courses landing page in the demo, go straight to Explore/Search**
   - **Why:** Recommended courses are blocked by data quality issues; the landing page would surface it
   - **Who decided:** Team consensus during walkthrough
   - **Impact:** Changes the demo flow/script for Monday

2. **Remove or revise the magnifying-glass domain indicator in autocomplete**
   - **Why:** Current design confuses users; team discussed removing the icon, replacing it with something clearer, or showing course counts instead
   - **Who decided:** Discussed by team; final direction not locked
   - **Impact:** Amber to finalize before Monday (see action items) — this is a design decision still open, not fully resolved

3. **Clarify to stakeholders that current course dataset is test data, not production quality**
   - **Why:** Messy domains, incomplete provider info, only e-learning class type visible, historical-only dates — team wants to get ahead of the "why does this look bad" question
   - **Who decided:** Team consensus
   - **Impact:** Needs to be part of the demo narrative (Rathika owns narrative refinement)

4. **Available filters should dynamically reflect available results**
   - **Why:** Imelda clarified this is the actual intended business behavior — users shouldn't be able to click a filter that returns zero results. This ended a lengthy back-and-forth where the team wasn't aligned on whether filters should auto-select, merely narrow options, or hide unavailable domains.
   - **Who decided:** Imelda Mo (clarifying acceptance criteria)
   - **Impact:** Pei Ern confirmed the API to support this already exists but isn't fully wired into the UI — this is an implementation gap, not a backend blocker. Flagged as incomplete going into Monday.

5. **Retain the Opportunity Category function-mapping model over raw OTG job functions**
   - **Why:** Not stated in transcript beyond reaffirming existing direction
   - **Who decided:** Team
   - **Impact:** No change to current Opportunities architecture

6. **Proactively highlight the "closing soon" date issue during the demo**
   - **Why:** Some closing-soon indicators are wrong due to posting/closing date problems originating in OTG source data — better to explain it than have a stakeholder catch it
   - **Who decided:** Michelle Yip
   - **Impact:** Adds a talking point to the Opportunities portion of the demo script

7. **Broken Careers@Gov opportunity links will be framed as destination-system behavior, not an OTG issue**
   - **Why:** Error handling for those links happens within Careers@Gov, outside OTG's control
   - **Who decided:** Team consensus
   - **Impact:** Sets the line for how to answer stakeholder questions about broken links

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Complete acceptance criteria validation (search, sorting, dynamic filters) | Rathika Ramalingam | Before Monday 2026-07-27 | 🔴 High | 🔴 Not Started |
| Raise bugs found during exploratory testing | Rathika Ramalingam | Before Monday 2026-07-27 | 🔴 High | 🔴 Not Started |
| Validate domain/title search scenarios and null function/category edge cases | Rathika Ramalingam | Before Monday 2026-07-27 | 🟡 Medium | 🔴 Not Started |
| Refine Monday demo narrative (incl. test-data framing) | Rathika Ramalingam | Before Monday 2026-07-27 | 🔴 High | 🔴 Not Started |
| Fix search clear-button bug (predictive search stays visible after Enter; clearing search doesn't clear domain state) | Pei Ern Lim | Before Monday 2026-07-27 | 🔴 High | 🔴 Not Started |
| Investigate and wire up dynamic sidebar filtering (API exists, not yet used in UI) | Pei Ern Lim | Before Monday 2026-07-27 | 🔴 High | 🔴 Not Started |
| Update autocomplete behaviour, review domain+title search combination | Pei Ern Lim | Before Monday 2026-07-27 | 🟡 Medium | 🔴 Not Started |
| Finalise updated autocomplete UX (magnifying glass icon decision) | Amber | Before Monday 2026-07-27 | 🔴 High | 🔴 Not Started |
| Review visual spacing and empty-state design; standardise filter/search designs | Amber | Before Monday 2026-07-27 | 🟡 Medium | 🔴 Not Started |
| Share XML test file | Rama Moorthy | Not stated | 🟡 Medium | 🔴 Not Started |
| Arrange additional review/run-through before Monday demo | Rama Moorthy | Before Monday 2026-07-27 | 🔴 High | 🔴 Not Started |
| Validate source-data concerns with Kingsley Low | Rama Moorthy | Before Monday 2026-07-27 | 🟡 Medium | 🔴 Not Started |
| Sync with Kingsley Low on data cleanliness / source-data behaviour | Adrian | Before Monday 2026-07-27 | 🟡 Medium | 🔴 Not Started |

**Notes:**
- Every item above is effectively due before Monday's showcase (2026-07-27); the transcript didn't give individual dates so these are all bucketed against that deadline. Given the volume of open items and Rama's explicit request for another run-through, worth confirming whether a Saturday/Sunday check-in is realistic or whether Monday's demo needs to be scoped down further.
- No owner assigned for the competency-matching/banner ambiguity (see Risks We Are NOT Yet Addressing below) — this is a gap, not an oversight to gloss over.

---

## Key Insights

**Strongest parts of the demo:**
- Careers@Gov ingestion is working end-to-end — manual ingestion succeeded, opportunities are surfacing, external links redirect correctly. This is demo-ready.
- The team is doing real exploratory testing (not just happy-path validation) and catching issues before stakeholders do.

**Weakest parts of the demo:**
- Search: predictive search stays visible after Enter, clearing search doesn't clear domain state, domain vs. title search logic still evolving.
- Filtering: sidebar shows the full filter catalogue instead of narrowing to available results — API exists, UI doesn't use it yet.
- Acceptance criteria alignment: the filter-behavior discussion needed live clarification from Imelda this close to demo, which suggests the team wasn't working from a shared spec.

---

## Open Questions

- [ ] How does competency matching actually work, and what triggers the competency-update banner? — **Owner:** Not assigned — **By:** Not stated
- [ ] What happens if a user's competencies are incomplete — does matching degrade gracefully or break? — **Owner:** Not assigned — **By:** Not stated
- [ ] Is the magnifying-glass icon being removed, replaced, or swapped for course counts? — **Owner:** Amber — **By:** Before Monday 2026-07-27

---

## Risks

**Risk 1: Search defects visible during stakeholder demo**
- Already identified and logged; Pei Ern has fixes assigned but not yet complete.

**Risk 2: Data quality visibly poor**
- Messy domains, incomplete metadata, missing providers. Mitigation is to explicitly tell stakeholders this is test data — but that only works if it's said clearly and early in the demo, not as a defensive reaction to a question.

**Risk 3: "Closing Soon" dates undermine credibility**
- Proactively flagged by Michelle; mitigation is a prepared explanation tied to OTG source data issues.

**Risk 4 (not yet being addressed): User trust risk from poor learning data**
- If production data resembles the current test data even partially, domains, recommendations, and filtering all lose credibility. This is a product trust issue, not just a data-cleanup task, and the transcript shows no owner or plan for closing this gap before wider rollout.

**Risk 5 (not yet being addressed): Competency-driven experience is undefined**
- Matching logic, the competency-update banner, and timing of competency features are all ambiguous. No agreed answers in the transcript for how this gets explained if stakeholders ask.

**Risk 6 (not yet being addressed): Demo may present unfinished UX as final**
- Filter presentation, spacing, icons, copy, and banner behaviour are all still in flux. Stakeholders watching Monday's demo won't know what's temporary unless the team says so explicitly.

**Risk 7 (not yet being addressed): Acceptance criteria ownership is fragmented**
- The most structural risk in this transcript. Multiple people were unsure whether specific behaviors were intended, implemented, accepted, or future scope. This is what causes stakeholders to conclude "the team built the wrong thing" when the real issue is that AC interpretation was never locked down. Worth a dedicated AC review before Monday, separate from the bug-fixing work already assigned.

---

## Timeline Risk

**TIMELINE RISK:** Nearly every action item above is due "before Monday" (2026-07-27), which is 3 days out from this meeting, and includes non-trivial UI rework (dynamic sidebar filtering, autocomplete redesign, search clear-button fix) plus a full AC validation pass. Rama has also asked for an additional review/run-through before Monday, which itself takes time away from the fix work. Worth explicitly deciding: is the plan to fix everything, or to triage down to what's demo-critical (search + filter basics) and openly park the rest as known issues, similar to how test data is being handled?

---

## Michelle's Leadership Takeaway

Three messages to lead Monday's demo with:
1. Search and filtering work conceptually; some UX refinements are still in progress.
2. The current course dataset is test data, not representative of production quality.
3. Opportunities aggregation and the Careers@Gov integration are the strongest parts of the showcase — lead with these.

---

## Context for Future Reference

This session ties into the ongoing UAT data-quality thread from the [2026-07-20 Demo and Retro](2026-07-20-W30-demo-and-retro.md), where Adrian Ang already raised discomfort with sanity-checking against QA data instead of properly-formed data. The test-data framing decided here (Decision 3) is the same underlying issue — worth connecting these two threads rather than treating them as separate risks.

---

## Next Steps

**Immediate (before Monday 2026-07-27):**
- Rathika: finish AC validation, log bugs, refine demo narrative
- Pei Ern: fix search clear-button bug, wire up dynamic filtering
- Amber: lock autocomplete/icon decision, fix spacing and empty states
- Rama: arrange the additional run-through he asked for
- Adrian/Rama: close the loop with Kingsley Low on source data

**Follow-up Meeting:**
- **Date:** Additional run-through requested by Rama Moorthy — not yet scheduled
- **Purpose:** Re-validate readiness before Monday's stakeholder showcase
- **Attendees:** Same core team, likely plus Kingsley Low given data dependencies
