# Meeting Notes: Technical Walkthrough - Role Competencies, Recommendations, Data Dependencies

**Date:** 2026-07-30

**Attendees:** Pow Hwee, Rama Moorthy, Pathfinder engineering team, PSD team (full list not specified in source)

**Meeting Type:** Engineering sync / technical deep dive

**Source:** PM's own post-meeting assessment (executive summary + ratings), not a raw transcript

---

## Summary

Pathfinder and PSD teams walked through how Career Compass currently derives Role Competencies and Role Recommendations, and traced the data dependencies across POCDEX, Products, role profile files, and competency master data. The recommendation logic itself is now clear and largely agreed. The unresolved risk isn't the algorithm, it's whether the upstream data (Job ID vs Job Profile ID, master codes, agency competency coding) is consistent enough to trust it. Several core assumptions were surfaced as unverified during the session rather than confirmed.

**This relates directly to** `context-library/prds/competency-profile.md` (owned by Imelda Mo), which already documents the HRPS/Cumulus → POCDEX dependency and flags a related open question about role-change edge cases (officer returning to a previous role post-secondment). This meeting's Risk 4 (multiple-job scenarios) and Risk 1 (data quality dependency) extend that same open question rather than introducing a new one.

---

## Decisions Made

1. **Default competency derivation stays as Job Profile Competencies + WOG Competencies**
   - **Why:** This two-step approach (Job ID → role profile competencies, then Job Family/Function/Grade → WOG competencies) was validated repeatedly with Pow Hwee during the walkthrough and matched the team's understanding of current behavior.
   - **Impact:** Confirms existing behavior as the accepted baseline; no rework needed here for now.

2. **Role competency calculation excludes agency**
   - **Why:** WOG competencies are defined as global/agency-agnostic by design.
   - **Impact:** Agency will not be a factor in officer expected-competency derivation.

3. **Agency still gates vertical recommendations; lateral recommendations drop the agency requirement**
   - **Why:** Vertical recommendations are for progression within an agency (agency + family + function + next grade); lateral recommendations are for cross-agency moves (family + function + grade only).
   - **Impact:** This is the agreed design direction for the recommendation engine going forward.

4. **MX/JR harmonisation handled inside Career Compass via BWOS grade levelling table**
   - **Why:** Avoids direct MX-vs-JR value comparison, which doesn't map cleanly; comparing by level instead does.
   - **Impact:** Grade comparison logic needs to reference the BWOS-supplied levelling table.

5. **System must support multiple job associations per officer (fan-out)**
   - **Why:** Confirmed that one officer can hold multiple jobs, and one job can have multiple functions.
   - **Impact:** API design must accommodate multiple job IDs/functions per officer, not a single-record assumption.

---

## Key Insights

**What worked:**
- Pow Hwee's repeated "why are we using this field / is Job ID the same as Job Profile ID / where's this data from" questions surfaced hidden assumptions before UAT — flagged as a positive pattern, not friction.
- Data lineage was traced end-to-end: HRPS → Cumulus → POCDEX → Products API → Role Profile Excel → Competency Bank → Master Data tables. Useful because, per the PM's assessment, most Compass issues turn out to be data lineage issues rather than application bugs.
- Matching has moved from label-based to master-code-based, which improved match rates versus the earlier approach Rama described (labels/abbreviations/descriptions differing across sources).

**What didn't work:**
- Recurring "we think / need to check / not sure" pattern on: Job ID vs Job Profile ID equivalence, whether Products filters invalid agency/job records from Cumulus, how Cumulus generates certain IDs, how agency-specific competencies are represented. None of these were resolved in the session.
- Matching still depends on a multi-layer mapping chain (Products → Master Codes → Role Profiles → Competencies) where any single inconsistency can break a recommendation.
- Significant meeting time went to inspecting Excel structures, validating IDs, and tracing columns rather than discussing business outcomes — signal that this knowledge isn't yet documented or shared broadly across teams.

**PM's own framing for SteerCo/product review** (direct quote from source):
"The recommendation and competency logic is largely understood and agreed. The remaining delivery risk sits in data quality, master-data alignment, and the migration away from spreadsheet-based competency references rather than the recommendation algorithm itself."

**Self-assessed scores:** Clarity gained 8/10, Decision quality 7/10, Design maturity 6/10, Data governance maturity 4/10, Delivery risk Medium-High.

---

## Risks Not Fully Addressed

1. **Data quality dependency (highest)** — recommendation engine depends on Job IDs, Job Profile IDs, family/function codes, and grade mappings staying aligned across HRPS, Cumulus, POCDEX, and Products. Recognized, not mitigated.
2. **Agency-specific competencies not well governed** — inconsistent naming/coding across agencies for WOG vs agency competencies; likely to degrade recommendation quality later.
3. **Heavy dependence on Excel-based reference data** — critical processes still run on manually maintained role profile and competency files; CMM migration discussed as future direction only.
4. **Multiple-job scenarios may behave unpredictably** — confirmed as a real case (one officer, multiple jobs/functions) but still needs verification and careful API implementation.
5. **UAT may expose master-data inconsistencies** — Rama flagged repeated concern that Products master data may not equal Compass master data, risking recommendation mismatches at UAT.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Validate Job ID vs Job Profile ID equivalence across systems | Rama Moorthy / team | No date given — recommend within 1 week given it blocks data trust | High | 🔴 Not Started |
| Check how Products filters/excludes invalid agency/job records from Cumulus | Team (unnamed) | No date given — flag for owner assignment | High | 🔴 Not Started |
| Verify agency-related records and "ALL" values in source data | Team (unnamed) | No date given — flag for owner assignment | Medium | 🔴 Not Started |
| Confirm UAT master data aligns with Compass master data | Rama Moorthy | No date given — should precede UAT start | High | 🔴 Not Started |
| Support API handling for multiple job IDs/functions (fan-out) | Pathfinder engineering team | No date given | High | 🔴 Not Started |
| Pair with Johnny/Kingsley on implementation and architecture details | Engineering team | No date given | Medium | 🔴 Not Started |
| Share master files and data-sharing references with engineering team | Rama Moorthy | No date given | Medium | 🔴 Not Started |
| Continue investigation into competency migration/CMM approach | Broader Compass team | No date given — future direction | Low | 🟡 In Progress (ongoing) |

**Notes:**
- None of these action items had due dates in the source material. Given four of them (Job ID validation, Products filtering, UAT master data alignment, multiple-job API support) are prerequisites for development confidence, recommend setting explicit dates before the next Compass working session.

---

## Open Questions

- [ ] Is Job ID the same as Job Profile ID across all systems, or only in some? - **Owner:** Rama Moorthy - **By:** TBD
- [ ] Does Products filter out invalid agency/job records from Cumulus, and if so, on what rule? - **Owner:** Team - **By:** TBD
- [ ] How are agency-specific competencies represented and coded today, and is it consistent across agencies? - **Owner:** Team - **By:** TBD
- [ ] Does UAT use the same master code set as Compass, or is there drift? - **Owner:** Rama Moorthy - **By:** TBD

---

## Blockers

1. **Unvalidated Job ID / Job Profile ID equivalence**
   - **Blocked by:** No system-of-record confirmation yet.
   - **Impact:** Downstream competency derivation and recommendation accuracy both depend on this being true; if it's wrong, both break silently.
   - **Resolution:** Rama Moorthy / team to validate across HRPS, Cumulus, POCDEX, Products before further build-out.

---

## Next Steps

**Immediate:**
- Assign owners and dates to the 8 action items above — none currently have dates.
- Prioritize the 4 items that block development confidence: Job ID/Job Profile ID validation, Products filtering behavior, UAT/Compass master data alignment, multiple-job API design.

**Short-term:**
- Engineering pairing session with Johnny/Kingsley on implementation and architecture.
- Rama Moorthy to share master files and data-sharing references with engineering.

**Follow-up:**
- Revisit CMM/competency migration investigation as a longer-term workstream, separate from the immediate data validation items.

---

## Context for Future Reference

This session's findings sit directly on top of `context-library/prds/competency-profile.md`, which already names HRPS/Cumulus and POCDEX as dependencies and flags the post-secondment role-return edge case as unresolved. That PRD's open question and this meeting's Risk 4 (multiple-job scenarios) are describing overlapping territory — worth reconciling into one open-question list rather than tracking separately.

If this goes to SteerCo, the PM's own framing (in Key Insights above) is a ready-made talking point: recommendation logic is agreed, the real risk is data governance and the Excel-to-CMM migration, not the algorithm.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original executive summary</summary>

[Original executive summary, What Went Well / What Did Not Go Well, Key Decisions, Risks, Action Items table, and Overall Assessment as submitted]

</details>
