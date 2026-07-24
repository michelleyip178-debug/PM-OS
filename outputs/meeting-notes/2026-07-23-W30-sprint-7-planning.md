---
date: 2026-07-23
week: 2026-W30
meeting_type: engineering-sync
topic: Sprint 7 Planning
---

# Meeting Notes: Sprint 7 Planning

**Date:** 2026-07-23, 2:00–4:00pm

**Organiser:** Imelda Mo

**Attendees:** Not individually listed in source (referenced: Michelle Yip, Kingsley, Christopher Woo, Xian Zhang Guo, Rathika, Victor, Benjamin, Adrian, Core team, Engineering team)

**Meeting Type:** Engineering sync (functioned as architecture and delivery alignment, not standard grooming)

**Duration:** 2 hours

**Source:** Meeting transcript and chat, condensed into an executive summary before processing

---

## Summary

Despite being labeled Sprint 7 planning, this was an architecture and delivery alignment session ahead of SIT/UAT. The team made real architectural progress on competency matching (codes over labels), master data governance (imports can't create master records), and multiple-Job-ID handling (union competencies, generate permutations, dedupe). It also set concrete ringfencing exclusion rules. Unresolved: competency code governance, silent-drop handling for unmatched competencies, multi-job recommendation performance, and inference latency (currently 8-15s against a 3s target). This directly answers the open question flagged in yesterday's grooming brief about where OTEP-336/570's competency data comes from — competency codes are now the confirmed source of truth, not POCDEX resolution timing.

**Headline:** Delivery remains on track for UAT preparation, but the highest residual risks have shifted from feature development to data quality, recommendation logic correctness, and external dependency readiness.

---

## Decisions Made

1. **Competency matching moves from label matching to competency-code matching**
   - **Why:** Michelle raised the risk of duplicate competency names with different IDs — label matching is fragile and could cause silent mismatches. The team agreed matching should use competency bank IDs (codes), not names.
   - **Who decided:** Group consensus, prompted by Michelle's challenge
   - **Impact:** Removes the name-matching dependency; aligns with how OTG competencies are being imported into Career Compass. Directly resolves the exact open question flagged in yesterday's grooming brief for OTEP-336/570 ("where does the competency profile come from if POCDEX hasn't resolved yet") — the answer is competency codes, not POCDEX timing.

2. **Master data governance: imports will not create master records**
   - **Why:** Prevents data imports from silently polluting master tables, which would make recommendation logic inconsistent and auditability difficult
   - **Who decided:** Group consensus
   - **Impact:** Role profile imports will not create missing job families; competency imports will not create new master records; missing codes get logged instead. This is a real architectural tightening, not just a policy statement — needs to be reflected in whatever engineering spec governs the import pipeline (likely OTEP-403, currently flagged in yesterday's grooming brief as needing AC extraction from a design-doc dump).

3. **Multiple Job ID handling: union + permutation + dedupe**
   — **Why:** The "one officer = one Job ID" assumption is no longer valid; officers with multiple Job IDs need competencies and role recommendations that account for all of them
   - **Who decided:** Group consensus, though several participants acknowledged the logic is hard to follow
   - **Impact:** Competencies will be unioned across Job IDs; role recommendation permutations generated across all job family/job function combinations; results consolidated and deduplicated. Sample data was agreed as necessary to actually explain this to the team — see Blockers.

4. **Ringfencing exclusion rules for role recommendations**
   - **Why:** Gives explicit control over recommendation quality and supports agreed policy direction
   - **Who decided:** Group consensus
   - **Impact:** Roles will not be recommended when: no competencies exist, no grade exists, or grade is JR7/JR6/JR5/JR3/JR2/JR1. This is new, specific scope that should be checked against OTEP-408/409 (the ringfencing pair flagged in yesterday's grooming brief as "near-ready" but sequence-dependent) — confirm these grade exclusions are captured in their ACs.

5. **Dual-login capability for UAT participants without WOG accounts**
   - **Why:** Some UAT participants won't have WOG accounts, blocking their ability to test
   - **Who decided:** Group consensus
   - **Impact:** Core team owns delivery — this is a new UAT-enabling capability that should get its own tracked ticket if it doesn't have one already.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Create feedback hyperlink and connect to FormSG | Xian Zhang Guo / Team | Not stated | 🟡 Medium | 🔴 Not Started |
| Pass latest competency file with codes | Christopher Woo | Not stated | 🔴 High | 🔴 Not Started |
| Continue data-readiness workstream | Kingsley | Not stated | 🔴 High | 🔴 Not Started |
| Add more subtasks for dependency SIT work | Imelda Mo | Not stated | 🟡 Medium | 🔴 Not Started |
| Use sample data to explain multi-job recommendation logic | Core team / Product team | Not stated | 🔴 High | 🔴 Not Started |
| Assess competency matching fix for opportunity-role matching | Michelle Yip / Engineering team | Not stated | 🔴 High | 🔴 Not Started |
| Update PSD after assessment outcome | Michelle Yip | Not stated (depends on assessment above) | 🟡 Medium | 🔴 Not Started |
| Deliver dual-login capability for UAT | Core team | Not stated — needed before UAT starts 11 Aug | 🔴 High | 🔴 Not Started |
| Verify bug fixes raised by Rathika | Engineering team | Not stated | 🟡 Medium | 🔴 Not Started |
| Align environment connectivity with CIE | Imelda Mo, Adrian, Benjamin | Not stated | 🔴 High | 🔴 Not Started |
| Review inference performance offline with Victor and Benjamin | Imelda Mo / Benjamin | Not stated | 🔴 High | 🔴 Not Started |

**Notes:**
- Five 🔴 High items have no due date, and one (dual-login) has an implicit hard deadline (UAT starts 11 Aug per `open-items.md` #39) that isn't stated as such in the meeting. Worth converting that implicit deadline into an explicit one before it becomes a late surprise.
- "Assess competency matching fix" → "Update PSD after assessment" is a two-step chain with only the first step owned clearly; confirm the PSD update timeline once the assessment lands.

---

## Timeline Risks

- **TIMELINE RISK:** Dual-login capability for UAT has no due date, but UAT starts 11 Aug per the existing timeline in `open-items.md` #39 (staggered: Profile + Opportunities from 11 Aug). If dual-login isn't ready before then, UAT participants without WOG accounts can't test from day one. Recommend setting an explicit date now rather than treating it as a background task.
- **TIMELINE RISK:** "Align environment connectivity with CIE" was parked mid-discussion ("take offline") with no date. Per this meeting's own risk list, SIT/UAT readiness depends on external teams (CSC, Products, Learn.gov, CIE, Infrastructure) — this is exactly the kind of dependency that erodes coordination velocity if left informal. Cross-reference against `open-items.md` #39's VAPT scope TBC and the 11 Aug UAT start.
- **TIMELINE RISK:** Inference performance (currently 8-15s against a 3s target, 5s upper threshold) was flagged with "no concrete remediation plan agreed" and no date for the offline review with Victor and Benjamin. If UAT surfaces this as a usability issue, there's currently no plan in motion to have already addressed it.

---

## Key Insights & Quotes

**This meeting directly answers a question raised in yesterday's grooming brief.** Yesterday's `/grooming-close` scorecard flagged OTEP-336/570 (competency match signal on cards, matched competencies on detail page) as "near-ready" and predicted Pow Hwee would ask "where does the competency profile come from if POCDEX/matching hasn't resolved yet — same silent-fallback pattern as ringfencing, or does the card just not render?" This meeting answers it structurally: competency codes (not POCDEX resolution timing) are now the source of truth for matching. Worth explicitly closing that loop back to yesterday's grooming brief before OTEP-336/570 go into a real grooming pass.

**"Can we match the names?" → "How are the IDs actually being assigned and governed?"** is the framing shift the notes credit to Michelle's intervention. That's the right question, but per Risk 1 below, the group solved the matching mechanism without solving the governance behind it — competency codes are becoming a critical dependency with no discussed ownership, versioning, or reconciliation process.

**Silent-drop behavior for unmatched competencies is now confirmed, not hypothetical.** If a competency code can't be matched, "that competency is skipped" — with no monitoring, exception reporting, or escalation threshold defined. This is the same silent-fallback pattern yesterday's grooming brief was probing for on OTEP-336/570, just now confirmed as the actual behavior rather than an open question.

**Multi-job-ID logic is a stated comprehension risk, not just a technical one.** "Several participants acknowledged the logic for multi-job permutations is difficult to understand" and sample data was needed to explain it — this is a signal worth taking seriously given SIT/UAT proximity; logic that's hard to explain verbally is typically hard to test thoroughly too.

---

## Open Questions

- [ ] Who governs competency code assignment, versioning, and reconciliation now that codes are the source of truth for matching? — **Owner:** Not assigned — **By:** Before competency-code dependency grows further
- [ ] What monitoring/exception reporting will exist for competencies silently dropped due to unmatched codes? — **Owner:** Not assigned — **By:** Not stated — recommend before SIT
- [ ] What's the actual due date for dual-login UAT capability, given the implicit 11 Aug deadline? — **Owner:** Core team / Imelda Mo — **By:** Needs to be set explicitly
- [ ] Does OTEP-408/409's ringfencing AC already capture the new JR7/JR6/JR5/JR3/JR2/JR1 grade exclusions, or does this need to be added before those stories are groomed? — **Owner:** Michelle Yip — **By:** Before OTEP-408/409 grooming
- [ ] Is there a remediation plan for inference performance (8-15s vs. 3s target), or is the offline review with Victor/Benjamin the first step toward one? — **Owner:** Imelda Mo / Benjamin — **By:** Not stated

---

## Blockers

1. **Multiple Job ID recommendation logic not yet broadly understood**
   - **Blocked by:** Complexity of the union/permutation/dedupe logic; only explainable with sample data
   - **Impact:** High implementation risk, higher testing burden, risk of engineering misunderstanding heading into SIT/UAT
   - **Resolution:** "Use sample data to explain multi-job recommendation logic" — action item exists but has no date

2. **Environment connectivity with CIE unresolved**
   - **Blocked by:** No shared understanding in the room of how dev/QA/UAT environments connect to CIE — discussion had to move offline
   - **Impact:** Integration risk (not development risk) heading into SIT
   - **Resolution:** "Align environment connectivity with CIE" assigned to Imelda Mo, Adrian, Benjamin — no date set

3. **Inference performance gap (8-15s actual vs. 3s target, 5s ceiling)**
   - **Blocked by:** No remediation plan agreed
   - **Impact:** Risk of a UAT finding on usability/performance that could have been addressed earlier
   - **Resolution:** Offline review with Victor and Benjamin — no date set

---

## Next Steps

**Immediate (this week):**
- Close the loop between this meeting's competency-code decision and yesterday's grooming brief's open question on OTEP-336/570
- Get an explicit date on dual-login UAT capability given the 11 Aug UAT start
- Confirm whether OTEP-408/409 ACs already reflect the new grade-exclusion ringfencing rules

**Short-term (this week/next):**
- Produce sample data to explain multi-job-ID recommendation logic to the broader team
- Schedule the CIE environment-connectivity alignment session (currently just "take offline" with no date)
- Schedule the inference-performance offline review with Victor and Benjamin

**Follow-up needed:**
- Competency code governance (ownership, versioning, reconciliation) has no owner — needs to be raised explicitly, likely with whoever owns the competency bank data model per yesterday's UAT test scenarios finding

---

## Context for Future Reference

This is the fourth touchpoint today on the same underlying thread: competency/Job-ID data model reliability. See [2026-07-22-W30-uat-test-scenarios.md](2026-07-22-W30-uat-test-scenarios.md) (agency-code gap in competency matching, surfaced 2026-07-22), [2026-07-23-W30-dos-call.md](2026-07-23-W30-dos-call.md) (Adrian's ask to Rama on jobID/competency bugs), and [2026-07-23-W30-cc-pocdex-data-requirements.md](2026-07-23-W30-cc-pocdex-data-requirements.md) (Job ID mismatch named as an accepted MVP risk). This meeting is the most architecturally substantive of the four — it's where the actual fix direction (competency codes over labels, master-data governance, multi-Job-ID union/permutation) got decided. Recommend using this meeting's decisions as the reference point when reconciling the other three threads, since it's the one that moved from diagnosis to concrete direction.

This also directly unblocks yesterday's grooming brief's flagged question on OTEP-336/570 — worth updating that story's grooming notes to reflect the competency-code decision before today's 2pm slot (if not already covered live in the same session, since Sprint 7 planning and grooming appear to have been the same meeting today).

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

**Meeting details**
- Organiser: Imelda MO
- Duration: 2 hours
- Source: Meeting transcript and meeting chat
- Meeting was transcribed.

**Executive Summary**

This sprint planning session was significantly more than backlog grooming. It was effectively an architecture and delivery alignment meeting for OTEP/Career Compass before SIT/UAT. The team reached several important decisions around: competency matching architecture (moving away from fragile label matching), data governance approach (master data is authoritative; imports will no longer create master data), handling officers with multiple Job IDs for both competency and role recommendations, role recommendation ringfencing rules (excluding certain grades and incomplete roles), Sprint 6 priorities and ownership, SIT readiness and dependency management.

The discussion was productive and technically detailed. However, there are still unresolved risks around competency mapping quality, multiple-job-ID logic validation, dependency readiness, and inference performance that could affect UAT.

**What Went Well**

1. Competency Matching Problem Was Properly Diagnosed — Michelle raised a challenge regarding existing competency matching problems, reliance on competency labels/names, potential duplicate competency names with different IDs. Team aligned that future matching should be based on competency codes rather than labels. This removes the dependency on name matching and aligns with how OTG competencies are being imported into Career Compass.

2. Stronger Data Governance Design Emerged — team aligned that role profile imports will not create missing job families, competency imports will not create new master records, missing codes will be logged instead, master data should only originate from approved master files.

3. Multiple Job ID Design Is Progressing — for officers with multiple Job IDs: competencies will be unioned, role recommendation permutations generated across all job family/job function combinations, results consolidated, duplicate recommendations removed before final selection.

4. Ringfencing Logic Became Clearer — roles will not be recommended when no competencies exist, no grade exists, or grades JR7, JR6, JR5, JR3, JR2, JR1 detected.

5. Sprint Ownership Was Generally Clear — data readiness → Kingsley, SIT coordination → Imelda MO, competency import updates → Kingsley, bug fixes → Adrian and team, competency matching fix assessment → your team, dual-login support for UAT → Core team.

**What Did Not Go Well**

1. Competency Architecture Still Appears Fragmented — confusion remains between OTG competencies, OTEP competency bank, agency-specific competencies, Cumulus competencies, HRPS competencies. Discussion repeatedly had to clarify which code, which source, which master.

2. Multiple Job ID Logic Is Understood by Few People — several participants acknowledged the logic for multi-job permutations is difficult to understand. Team concluded sample data would be required to explain it properly.

3. Dependency Tracking Is Still Reactive — several dependency conversations ended with "tag me in the ticket," "we'll align later," "take offline," "check with Kimberly," "need more subtasks."

4. Environment Alignment Still Seems Confusing — CIE integration discussion exposed confusion about dev/QA/UAT environments and which environment connects to which. Discussion had to pause and move offline.

**Key Decisions Made**

Competency Matching: Use competency code rather than competency label matching. Opportunity competencies should bring in competency code. Matching should happen through competency bank IDs.

OTG Competency Import: Latest OTG file will contain competency codes. Competency code becomes source of truth for mapping.

Multiple Job IDs: Union competencies across Job IDs. Run recommendation permutations across all valid Job Families and Job Functions. Consolidate and deduplicate results.

Master Data Governance: Imports must not create master records. Unknown codes are logged. Authoritative master files drive master data.

Recommendation Filtering: Do not recommend roles without competencies, roles without grades, JR7/JR6/JR5/JR3/JR2/JR1 roles.

UAT Preparation: Dual-login capability will be implemented to support UAT participants without WOG accounts.

**Actions and Owners**
- Create feedback hyperlink and connect to FormSG — Xian Zhang Guo / Team
- Pass latest competency file with codes — Christopher Woo
- Continue data-readiness workstream — Kingsley
- Add more subtasks for dependency SIT work — Imelda MO
- Use sample data to explain multi-job recommendation logic — Core team / Product team
- Assess competency matching fix for opportunity-role matching — Michelle / Engineering team
- Update PSD after assessment outcome — Michelle
- Deliver dual-login capability for UAT — Core team
- Verify bug fixes raised by Rathika — Engineering team
- Align environment connectivity with CIE — Imelda MO, Adrian, Benjamin
- Review inference performance offline with Victor and Benjamin — Imelda MO / Benjamin

**Risks We Are Not Fully Addressing**

Risk 1 — Competency Code Is Becoming a Critical Dependency: the team's solution is "use competency code for everything," but nobody discussed governance of competency code ownership, what happens when codes change, versioning, reconciliation processes.

Risk 2 — Unknown Competencies Are Silently Dropped: if a competency code cannot be matched, that competency is skipped. No monitoring, exception reporting, business review process, or escalation thresholds defined.

Risk 3 — Multi-Job Recommendation Explosion: system will generate permutations, aggregate, deduplicate, randomise. Not discussed: performance impact, bias introduced by randomisation, quality ranking of recommendations, edge cases with many job IDs.

Risk 4 — SIT/UAT Readiness Depends on External Teams: CSC, Products, Learn.gov, CIE, Infrastructure connectivity — not fully under the squad's control. Risk is coordination velocity, not development velocity.

Risk 5 — Inference Performance Target Is Unclear: current UX may be around 8-15 seconds end-to-end, desired target around 3 seconds, 5 seconds generally viewed as upper acceptable threshold. No concrete remediation plan agreed.

**My Readout (as Product Lead)**

The most important outcome of this meeting was not sprint allocation. It was that the team is converging on a single data architecture: competency codes → competency bank → officer profile → opportunity matching → recommendations. The biggest concern to track going into the next sprint is not delivery capacity — it is data integrity: competency code governance, unmatched competency handling, multiple Job ID logic validation, cross-team SIT dependencies.

If preparing a SteerCo-style update, the headline: "Delivery remains on track for UAT preparation, but the highest residual risks have shifted from feature development to data quality, recommendation logic correctness, and external dependency readiness."

</details>
</content>
