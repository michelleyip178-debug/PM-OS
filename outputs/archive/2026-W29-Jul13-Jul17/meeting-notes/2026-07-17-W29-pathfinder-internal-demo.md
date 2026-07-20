---
date: 2026-07-17
week: 2026-W29
meeting_type: stakeholder-review
topic: Pathfinder internal demo (pre-Monday external demo)
---

# Meeting Notes: Pathfinder Internal Demo

**Date:** 2026-07-17

**Attendees:** Imelda Mo, Rama Moorthy, Adrian Lo, Rathika Ramalingam, Pei Ern Lim, Michelle Yip

**Meeting Type:** Stakeholder review / demo dry-run

**Duration:** Not specified

---

## Summary

Internal dry-run ahead of Monday's external BO demo. Core logic (profile sync, competency matching, search/filter) demoed successfully and stakeholders aligned on scope for Monday: happy-path flows only, no fragile edge cases live. The real risk isn't the product logic, it's demo readiness: test data gaps forced repeated "this is data, not logic" caveats, nobody can say which ACs are demo-validated versus unit-test-only, and Rathika is carrying too much live (driving, fixing data, explaining fallbacks, hunting files) which raises failure risk for Monday.

---

## Decisions Made

1. **Monday's external demo focuses on happy-path business flows, not exhaustive AC coverage**
   - **Why:** Reduce risk of demo derailment in front of BOs, who have lower tolerance for live failures than the internal team
   - **Who decided:** Rama Moorthy, Imelda Mo
   - **Impact:** Sets the demo script scope; anything fragile or data-dependent gets cut

2. **Fragile or data-dependent cases can be skipped live**
   - **Why:** Multiple paths broke today due to data issues, not logic issues, and re-explaining that live isn't persuasive to BOs
   - **Who decided:** Adrian Lo
   - **Impact:** Narrows Monday's live demo surface; those cases still need to be accounted for somewhere (see Governance gap below)

3. **Fallback logic can be explained verbally if not demoed**
   - **Why:** Group alignment that not every code path needs a live walkthrough
   - **Who decided:** Group alignment
   - **Impact:** Reduces demo complexity, but shifts burden onto the presenter's narration (compounds Rathika's cognitive load issue)

4. **OTG opportunity upload demo must show "before upload vs after upload"**
   - **Why:** Clear before/after storytelling is more persuasive than describing the upload in the abstract
   - **Who decided:** Michelle Yip
   - **Impact:** Requires a clean, not-yet-ingested Excel file (see action items)

5. **Ring-fenced officers are out of scope for this demo**
   - **Why:** Not stated explicitly beyond scope confirmation
   - **Who decided:** Confirmed by Imelda Mo
   - **Impact:** Removes a category of edge-case accounts from Monday's demo planning

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Find/configure test accounts showing ≥5 recommended roles (vertical + lateral) | @Pei Ern Lim | Before Monday demo | 🔴 High | Not Started |
| Find/configure test account showing grey (<30%) competency match state | @Pei Ern Lim | Before Monday demo | 🔴 High | Not Started |
| Prepare clean, not-yet-ingested Excel file for OTG opportunity upload before/after demo | @Rathika Ramalingam | Before Monday demo | 🔴 High | Not Started |
| Pre-organise demo files/folders to eliminate live searching | @Rathika Ramalingam | Before Monday demo | 🟡 Medium | Not Started |
| Fix "View More" button issue | Owner acknowledged, ticket referenced | No date given | 🟡 Medium | Not Started |
| Fix UI alignment discrepancies | Owner acknowledged, ticket referenced | No date given | 🟢 Low | Not Started |
| Fix autocomplete not respecting filters | Owner acknowledged, ticket referenced | No date given | 🟡 Medium | Not Started |
| Fix missing sync for functional competencies in some views | Owner acknowledged, ticket referenced | No date given | 🔴 High | Not Started |
| Provide clarity on which fallback cases are demoed vs. unit-tested only | **Unassigned — gap** | Before Monday demo (implied) | 🔴 High | Not Started |
| Provide clarity on which ACs are explicitly out of demo scope | **Unassigned — gap** | Before Monday demo (implied) | 🔴 High | Not Started |

**Notes:**
- Items marked 🔴 are blocking Monday's external demo.
- The two governance items have no owner. Given Michelle already owns AC-to-test-case coverage work (see Context below), recommend she takes these unless Imelda wants to own the demo-scope-cut piece directly.
- "Fix missing sync for functional competencies" is flagged High because it undermines the exact "profile sync works end-to-end" narrative that was the strongest part of today's demo — a regression here is more damaging than the other three bugs.

---

## Key Insights & Quotes

**On demo credibility:**
- Repeated "this is due to data, not logic" explanations undermine confidence even when the underlying logic is sound — this pattern is already showing internally and BOs will have less patience for it (Section 3.1 of source notes).

**On presenter load:**
- Rama Moorthy explicitly called out that Rathika Ramalingam driving the demo, managing test data issues, explaining fallback logic, and searching for files live all at once creates stress and context-switching that increases failure risk. This is a process risk, not a Rathika-specific one — worth revisiting whether Monday's demo should split roles (one person presents, another handles data/files in the background).

**Strategic/governance consideration:**
- Imelda Mo explicitly flagged that it's unclear which ACs are demo-validated, unit-test-only, or not validated at all, and the team's live answer was "could be some not tested." Imelda framed this as a governance risk, not a technical one.

---

## Open Questions

- [ ] Which fallback cases are demoed live vs. explained verbally vs. not covered at all on Monday? — **Owner:** Unassigned (recommend Michelle Yip or Imelda Mo) — **By:** Before Monday demo
- [ ] Which ACs are explicitly out of scope for Monday's demo, and has that been communicated to BOs in advance? — **Owner:** Unassigned (recommend Michelle Yip) — **By:** Before Monday demo
- [ ] Should Monday's demo split presenter and data/file-support roles to reduce Rathika's cognitive load? — **Owner:** Rama Moorthy / Rathika Ramalingam — **By:** Before Monday demo

---

## Blockers

1. **Test data gaps blocking multiple demo paths**
   - **Blocked by:** Insufficient lateral role data, no account showing grey <30% match state, no clean unloaded Excel file for OTG upload
   - **Impact:** Forces live "data, not logic" caveats that erode BO confidence
   - **Resolution:** Pei Ern Lim and Rathika's action items above; needs to land before Monday

---

## Next Steps

**Immediate (before Monday's demo):**
- Pei Ern Lim configures test accounts (≥5 roles, grey match state)
- Rathika prepares clean OTG Excel file and pre-organises demo assets
- Someone owns the AC-to-demo-scope mapping (currently unassigned — flag to Imelda/Adrian for explicit ownership)
- Decide whether to split presenter/support roles for Monday

**Follow-up:**
- Track the four named bugs (View More, UI alignment, autocomplete, functional competency sync) to resolution with existing tickets

---

## Context for Future Reference

**This connects directly to work already in flight today.** The AC-coverage governance gap flagged here by Imelda Mo (Section 2.2/3.2 of source notes: no mapping of AC → demo-validated / AC → unit-test-only / AC → not-validated) is the same problem Adrian Ang raised earlier today in the UAT consolidation ask (see [Adrian's UAT Consolidation Ask](2026-07-17-W29-adrian-uat-consolidation-ask.md)). Michelle already produced an [AC-to-Test-Case Coverage Audit](2026-07-17-W29-ac-to-test-case-coverage-audit.md) today covering the UAT test-case side (72% directly AC-derivable, 87% with multi-AC synthesis, 13% gap split between comment-thread-only and no-AC-basis cases).

That audit was framed around UAT/BO testing, not demo coverage specifically, but the underlying gap (no single source of truth for AC → validation status) is the same one Imelda is now flagging for the demo context. Recommend reusing that audit's structure and findings to answer this meeting's two unassigned governance action items, rather than starting a fresh mapping exercise.

**Recurring theme worth naming:** this is the second time today "which ACs are actually validated and how" has surfaced as a live gap with a stakeholder attached (Adrian this morning, Imelda in this demo). Worth flagging to Adrian/Imelda that a single AC-validation-status artifact (spanning UAT test cases *and* demo coverage) would close both gaps at once instead of two parallel one-off exercises.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

Internal Demo
1. What Went Well
1.1 Core functionality is largely demonstrated and understood
- Profile sync (functional + self-declared competencies) demoed end-to-end: add/edit/remove on profile → reflected correctly downstream. Confirms sync model is conceptually sound.
- Role-based competency matching, colour-coded match strength, and course recommendations based on missing competencies clearly demoed. Logic works; display optimisation pending.
- Search + filter flows for Explore New Roles demoed via multiple paths (search-first, filter-first), showing breadth even though autocomplete filtering incomplete.

1.2 Good challenge and clarification from stakeholders
- Imelda Mo and Rama Moorthy asked: why CTAs are hidden in zero-competency states; whether fallback logic is implemented vs. blocked by data; which ACs are truly covered in demo vs. unit testing. Surfaced gaps early.

1.3 Clear agreement on demo narrative direction
- Monday's external demo: happy-path business flows, before/after storytelling, avoid fragile edge cases live.

2. What Did Not Go Well
2.1 Demo readiness overly data-fragile — multiple paths broke/partially shown due to data unavailability, not missing logic.
2.2 Test coverage vs demo coverage unclear — no mapping of fully tested/demo-ready vs unit-test-only vs not validated. Flagged by Imelda Mo; answer uncertain.
2.3 Presenter cognitive load too high — Rathika Ramalingam driving demo, managing test data, explaining fallback logic, searching files live. Rama Moorthy flagged stress/context-switching risk.

3. Risks Not Fully Addressed
3.1 Demo credibility risk (high) — repeated data caveats undermine confidence; BO tolerance will be lower.
3.2 Acceptance-criteria coverage risk — no AC → demo/unit-test/not-validated mapping.
3.3 Hidden dependency risk (data > logic) — job family data quality, lateral role availability, competency tagging completeness discovered ad-hoc.
3.4 Demo scope creep risk — tension between showing all fallback logic vs. keeping demo simple; no locked script.

4. Decisions Made
- Monday demo = happy-path flows (Rama Moorthy, Imelda Mo)
- Fragile/data-dependent cases skippable live (Adrian Lo)
- Fallback logic explainable verbally (Group)
- OTG upload demo must show before/after (Michelle Yip)
- Ring-fenced officers out of scope (Imelda Mo)

5. Action Items
- Test accounts: ≥5 roles + grey <30% match — Pei Ern Lim
- Clean Excel file for OTG upload before/after — Rathika Ramalingam
- Pre-organise demo files/folders — Rathika Ramalingam
- Bugs: View More button, UI alignment, autocomplete/filters, functional competency sync — owners acknowledged, tickets referenced
- Governance: clarity on demoed vs unit-tested fallback cases; clarity on out-of-scope ACs — no owner assigned

6. Bottom Line
- Product logic direction sound. Demo execution risk driven by data readiness and cognitive load, not missing functionality. Without tighter scripting and AC-to-demo mapping, risk losing stakeholder confidence despite real progress.

</details>
</content>
