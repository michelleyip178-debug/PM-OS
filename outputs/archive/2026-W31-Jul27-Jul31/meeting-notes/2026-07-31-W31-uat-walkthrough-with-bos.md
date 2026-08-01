# Meeting Notes: UAT Walkthrough with BOs

**Date:** July 31, 2026

**Attendees:** Michelle, Ram, Imelda, Xian Zhang, Alan (and others — Serene, Child referenced as pending Confluence access)

**Meeting Type:** Team planning / UAT execution planning

**Duration:** Not specified

---

## Summary

Ram walked the team through the Confluence/Jira UAT setup, and the team aligned on tooling, batch-one scheduling, and data import logic for role profiles and competencies. Real blockers surfaced: Jira permission issues on Comet laptops, room booking friction, and unresolved tension between a tight UAT timeline and competing BAU/AI sprint workloads. Data import logic (union-based competency matching, handling missing job family codes) was decided but carries downstream risk to recommendation quality that isn't fully mapped yet.

---

## Decisions Made

1. **UAT tooling and process: Confluence for overview, Jira for execution**
   - **Why:** Confluence gives a test-case overview layer; Jira's drag-and-drop status updates give clear per-column ownership during execution
   - **Who decided:** Team, led by Ram's walkthrough
   - **Impact:** Testers need both tools set up and accessible before batch one starts

2. **Batch One UAT schedule: Tuesday morning (9:30 or 10:00) joint session, then two weeks of follow-up testing**
   - **Why:** Joint session allows hands-on support and troubleshooting; two-week follow-up window accounts for scale
   - **Who decided:** Team
   - **Impact:** Locks in a specific time slot — creates the room-booking dependency (see Blockers)

3. **Test case assignment: one primary tester per ticket, secondary tester noted in Confluence, all must complete before "pass"**
   - **Why:** Prevents single-point-of-failure testing and ensures shared visibility into who's testing what
   - **Who decided:** Team
   - **Impact:** Requires careful assignment planning to avoid account conflicts (see Xian Zhang's action item)

4. **Data import logic: union logic for competencies (job ID + job family/function), import empty codes, exclude mismatched codes**
   - **Why:** Balances inclusion (don't lose data from empty codes) against data integrity (mismatched codes could corrupt matching)
   - **Who decided:** Imelda and Ram
   - **Impact:** Directly affects role recommendation quality — excluding mismatched-code competencies risks dropping relevant data for affected officers (see Risks)

5. **GR5 role profiles: import to ensure coverage for all relevant officers**
   - **Why:** Ensures a specific officer grade/segment isn't excluded from coverage
   - **Who decided:** Team
   - **Impact:** Expands import scope; no timeline impact mentioned

6. **Bug reporting: separate tickets for issues outside a test case's scope, with references and screenshots attached**
   - **Why:** Keeps test case tracking clean and separates "test failed" from "found an unrelated bug"
   - **Who decided:** Team
   - **Impact:** Adds a small process step testers need to follow consistently

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Investigate and resolve Jira assignment permissions for Comet laptops | @Ram / @Imelda | No date mentioned — this blocks UAT execution, recommend within 48 hours | 🔴 High | Not Started |
| Book Level 7 Infinity Room for UAT session (Tuesday) | @Xian Zhang | Before Tuesday's session | 🔴 High | Not Started |
| Check other room options if Infinity Room unavailable | @Michelle | Before Tuesday's session | Medium | Not Started |
| Grant Confluence access to Serene and Child upon receiving emails from Xian Zhang | @Ram | No date mentioned | Medium | Not Started |
| Plan tester assignments in Confluence to avoid account conflicts | @Xian Zhang | Before batch one starts | High | Not Started |
| Proceed with agreed data import logic (empty codes, agency-specific OCCs) | @Imelda / @Ram | No date mentioned | High | Not Started |
| Draft list of deliverables and propose additional UAT support to Jace | @Imelda | No date mentioned | 🔴 High | Not Started |

**Notes:**
- 🔴 The permissions fix is the most urgent item — it's already actively blocking testers (Xian Zhang, Alan) and the Tuesday session is imminent.
- Room booking and permissions fix both need resolution before Tuesday's joint session, but neither has an explicit due date attached beyond "before Tuesday."

---

## Key Insights & Quotes

**Technical Constraints:**
- Jira ticket assignment is broken specifically on Comet laptops — this is a device/permission-specific issue, not a general Jira config problem, which narrows the likely fix.
- Test accounts appear limited: if multiple testers need the same account for overlapping test cases, this creates a concurrency bottleneck the team hasn't fully solved (see Risks).

**Data Quality Considerations:**
- This meeting's data import debate (missing job family codes, agency-specific OCCs, mismatched codes) is the same category of problem already tracked in [wog-taxonomy-mapping.md](../../context-library/decisions/wog-taxonomy-mapping.md) (Decision I-019), which is explicitly marked **"Partial (OTG A–K pending)"** as of 2026-06-25. Today's decision to exclude mismatched codes from import may be masking gaps that are already known and pending resolution in that taxonomy mapping — worth checking whether "mismatched" here means the same thing as the OTG A–K gap in I-019, or a separate issue.
- The team acknowledged but didn't resolve the downstream impact: excluding mismatched-code competencies could affect role recommendations and officer profiles for an unknown number of officers.

**Resourcing Concerns:**
- Imelda flagged workload concerns and asked for more support (naming Michelle and Jobelle) for UAT logistics and hygiene, but this wasn't finalized — it's being escalated to Jace as a formal resource proposal rather than resolved in this meeting.

---

## Open Questions

- [ ] Is the "mismatched codes" exclusion in today's data import decision the same gap as the OTG A–K pending item in [wog-taxonomy-mapping.md](../../context-library/decisions/wog-taxonomy-mapping.md), or a distinct issue? - **Owner:** @Imelda / @Ram - **By:** Before import logic is executed
- [ ] How many officers/competencies are actually affected by excluding mismatched codes? Downstream impact on recommendations "not fully mapped" per the meeting itself. - **Owner:** @Imelda - **By:** Not yet set
- [ ] Is the UAT timeline (ideally within a week) realistic given ticket volume, BAU workloads, and the upcoming AI sprint? - **Owner:** @Michelle / team - **By:** Needs resolution before batch one locks in
- [ ] What's the actual test account capacity, and will concurrent testing needs exceed it? - **Owner:** @Xian Zhang (tied to assignment planning action item) - **By:** Before batch one starts
- [ ] What specific additional support does Imelda need (Michelle, Jobelle, or others) and will Jace approve it? - **Owner:** @Imelda → @Jace - **By:** Not yet set

---

## Blockers

1. **Jira permission restrictions on Comet laptops**
   - **Blocked by:** Unresolved permission configuration
   - **Impact:** Multiple testers (Xian Zhang, Alan) can't assign tickets, stalling UAT execution
   - **Resolution:** Ram and Imelda investigating; no timeline committed yet

2. **Room booking uncertainty for Tuesday's joint session**
   - **Blocked by:** Difficulty securing Level 7 Infinity Room
   - **Impact:** Creates last-minute uncertainty about in-person vs. remote participation
   - **Resolution:** Xian Zhang booking; Michelle checking alternatives if needed

3. **Timeline compression risk**
   - **Blocked by:** Unclear ticket volume/batch-one scale colliding with BAU workload and the upcoming AI sprint
   - **Impact:** Risk of incomplete coverage or rushed testing if the "within a week" target holds
   - **Resolution:** Not resolved in this meeting — flagged as a risk, no mitigation decided

---

## Timeline Risks

- **TIMELINE RISK:** The team wants UAT completed "ideally within a week," but the meeting itself notes uncertainty about total ticket count and batch-one scale. Committing to a one-week target without knowing scope is a real risk — recommend confirming ticket count before the timeline is treated as fixed.
- **TIMELINE RISK:** UAT is competing with BAU workloads and "the upcoming AI sprint" — no specific dates given for either, so it's not possible to confirm whether these actually overlap with the two-week UAT follow-up window. Worth checking the sprint calendar before assuming capacity is available.

---

## Next Steps

**Immediate (This Week):**
- Resolve Jira permissions for Comet laptops before Tuesday
- Confirm room booking (or fallback) for Tuesday's session
- Xian Zhang to finalize tester assignment plan in Confluence

**Short-term (Next 2 weeks):**
- Execute batch one UAT with follow-up testing across the two-week window
- Imelda and Ram to proceed with data import logic and monitor for recommendation-quality impact
- Imelda to submit resource proposal to Jace

**Follow-up Meeting:**
- **Date:** Tuesday (batch one joint UAT session)
- **Purpose:** Hands-on UAT execution and troubleshooting
- **Attendees:** Ram, Imelda, Michelle, Xian Zhang, Alan, and other testers

---

## Context for Future Reference

The data import decision here (union logic, exclude mismatched codes) isn't an isolated UAT-prep decision — it connects directly to the still-partial WOG taxonomy mapping (I-019, OTG A–K pending). If that mapping gap is what's producing the "mismatched codes" today, resolving I-019 properly might reduce how much data UAT ends up excluding. Worth raising this connection with Ram/Imelda rather than treating the exclusion as a one-off UAT decision.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

Meeting Debrief: UAT Planning, Execution, and Data Alignment

**What Went Well:** Tool walkthrough & clarity (Ram walked through Confluence/Jira setup); collaborative scheduling (joint UAT session agreed, flexible for holidays/room availability); data alignment (import logic for role profiles/competencies, union logic, empty/mismatched code handling); open issue resolution (permissions, ticket assignment openly discussed, Ram/Imelda committed to resolve).

**What Didn't Go Well:** Permissions & assignment issues (Xian Zhang, Alan blocked on Comet laptops); uncertainty on test case scale & timeline (ticket count, batch one scale, realistic timeline given BAU/AI sprint); data import ambiguity (missing job family codes, agency-specific OCCs, risk of excluding relevant competencies); room booking & logistics friction.

**Risks Not Fully Addressed:** permission/access delays; account bottlenecks (limited test accounts, concurrent testing conflicts); timeline compression (within-a-week target vs. ticket volume/BAU/AI sprint); data import gaps (downstream effects on recommendations not fully mapped); resource constraints (Imelda flagged workload, additional support not finalized).

**Decisions:** UAT tooling (Confluence + Jira); Batch One schedule (Tuesday AM, two-week follow-up); test case assignment (primary + secondary tester); data import logic (union logic, import empty codes, exclude mismatched codes); GR5 role profiles import; bug reporting (separate tickets with references/screenshots); resource request (Imelda to draft deliverables list, propose support to Jace).

**Actions:** Permissions fix (Ram, Imelda); room booking (Xian Zhang, Michelle backup); Confluence access (Ram to grant to Serene/Child); test case assignment planning (Xian Zhang); data import execution (Imelda, Ram); resource proposal (Imelda, Ram to Jace).

</details>
