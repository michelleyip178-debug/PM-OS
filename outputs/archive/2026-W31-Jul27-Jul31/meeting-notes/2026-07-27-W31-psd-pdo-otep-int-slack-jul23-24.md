# Meeting Notes: Slack Summary — #psd-pdo-otep-int (Jul 23–24)

**Date:** 2026-07-23 to 2026-07-24

**Channel:** #psd-pdo-otep-int

**Attendees (7 users, 50 messages):** Adrian ANG (PSD), Rama MOORTHY (PSD), Imelda MO (PSD), Jace TAN (PSD), Barry LIM (PSD), Fabian PEH (GovTech), Pow Hwee TAN (PSD)

**Meeting Type:** Async team channel — MVP timeline, VAPT planning, UAT coordination

**Duration:** 2-day async thread

---

## Summary

Adrian confirmed the MVP launch is projected to slip to end-November, driven entirely by VAPT vendor availability (earliest scan slot mid-September, ~8-week cycle). Separately, Rama and Pow Hwee confirmed Compass needs its own whitelisting layer in addition to POCDEX's agency-level whitelisting. UAT test case and persona work is progressing (POCDEX Officer requirements now in Excel).

**This resolves two open items from this week's plan:** the October/November MVP date question (Priority 2) now has an authoritative source — November, VAPT-driven — and whitelisting ownership (Priority 3) is confirmed as a shared POCDEX + Compass responsibility, not a single-owner question.

---

## Decisions Made

1. **MVP launch projected to end-November, not October**
   - **Why:** VAPT vendor availability is the binding constraint — earliest scan slot is mid-September, and the VAPT cycle itself runs ~8 weeks
   - **Who decided:** Adrian ANG, communicating the timeline to the channel
   - **Impact:** This is the first source-of-record confirmation of the October→November slip that last week's senior bi-weekly hinted at directionally. The one-pager priority this week should cite this Slack thread as the concrete trigger, not just "senior sentiment"

2. **UAT will use hashed/anonymized production data**
   - **Why:** To meet the mid-September VAPT slot, the team is prioritizing critical UAT bug fixes over waiting for fully clean data
   - **Who decided:** Adrian ANG
   - **Impact:** Consistent with last week's squad-sync decision to proceed with mock/incomplete Products data rather than block on full readiness — this extends the same logic to VAPT prep

3. **Compass requires its own whitelisting layer, separate from POCDEX**
   - **Why:** POCDEX will whitelist agencies at its API level, but that doesn't cover Compass-side access control
   - **Who decided:** Pow Hwee TAN, confirming to Rama MOORTHY's question
   - **Impact:** Resolves this week's Priority 3 (whitelisting ownership) — it's not "Products vs. Compass," it's both, at different layers. Compass-side whitelisting now needs its own owner and build task, not just a DO account request

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Document data patching as backlog items | Adrian ANG (assigned at DO call) | Not stated | Medium | 🔴 Not Started |
| Document success criteria for epic 1-pagers | PMs (incl. Michelle) | Not stated | High | 🔴 Not Started |
| Confirm VAPT tester security clearance | Rama MOORTHY | Not stated | Medium | 🟡 In Progress |
| Investigate earlier VAPT scan date options | Adrian ANG → Barry LIM / Fabian PEH | Not stated | High | 🟡 In Progress — Barry outlined process, dates depend on tester availability |
| Scope and build Compass-side whitelisting | Unassigned — needs an owner | Not stated | High | 🔴 Not Started — new item, no owner named in thread |

**Notes:**
- No due dates were given for most items in this thread — worth pinning down at the next sync, especially "document success criteria for epic 1-pagers" since that's PM-owned.
- The bug ticket for jobID logic/competencies (Rama, item below) is the only item confirmed already actioned.

---

## Key Insights & Quotes

**Timeline:**
- VAPT is confirmed as the single binding constraint on MVP timing — not data readiness, not feature scope. Earliest scan: mid-September. Cycle length: ~8 weeks. That arithmetic alone pushes to November regardless of anything else on the roadmap.

**Technical:**
- A bug in jobID logic and competencies has been ticketed for next sprint (confirmed by Rama).
- POCDEX Officer UAT test case requirements have been converted into an Excel sheet (Rama + Imelda); Imelda shared an updated persona link.
- Jace added the UAT schedule to Confluence and requested updates; Imelda provided the MVP Timeline link.

**VAPT Process (per Barry LIM):**
Steps are: initial onboarding → tester access → scanning → remediation → final reporting. Schedule is gated by tester availability, not by OTEP's own readiness — reinforces that pushing for an earlier slot is a vendor-capacity conversation, not something the team can force by working faster.

---

## Open Questions

- [ ] Who owns building Compass-side whitelisting (separate from POCDEX's agency whitelisting)? - **Owner:** Unassigned - **By:** Not stated — flag at next sync
- [ ] Are VAPT testers confirmed to have security clearance? - **Owner:** Rama MOORTHY - **By:** Not stated (Barry said "typically cleared," not confirmed for this engagement)
- [ ] Can an earlier VAPT scan slot be secured, or is mid-September the hard floor? - **Owner:** Adrian ANG / Barry LIM / Fabian PEH - **By:** Not stated

---

## Timeline Risks

- **TIMELINE RISK RESOLVED, NOT NEW:** This thread is the concrete source for the October→November slip that last week's weekly review flagged as "directional, not formal" from the senior bi-weekly. It's no longer directional — Adrian stated it plainly, with the VAPT math behind it (mid-Sept earliest slot + 8-week cycle = end-November at best). **Use this thread as the primary citation in this week's Priority 2 one-pager**, not the more ambiguous senior bi-weekly readout.
- **TIMELINE RISK:** No due dates were attached to any of the 5 action items in this thread, including the PM-owned "document success criteria for epic 1-pagers." Given this week's plan already flags governance-debt patterns (items named without a forcing function tend to slip), these need dates assigned before they join that pattern.

---

## Next Steps

**Immediate (This Week):**
- Fold this thread's VAPT math (mid-Sept slot, 8-week cycle → end-November) directly into the October/November reconciliation one-pager (this week's Priority 2) — it upgrades the artifact from "senior sentiment" to "vendor-constraint arithmetic," which is a much stronger basis for the narrative
- Name an owner for Compass-side whitelisting — this is new scope that wasn't previously tracked as a distinct build item
- Pin down due dates for the 5 action items above, especially the PM-owned epic success-criteria documentation

**Short-term (Next 2 weeks):**
- Push on whether an earlier VAPT slot is genuinely unavailable or just unconfirmed — Barry's answer ("depends on tester availability") wasn't a hard no
- Confirm VAPT tester security clearance in writing, not just "typically cleared"

**Follow-up Meeting:**
- No follow-up meeting specified in the thread — recommend raising the whitelisting ownership gap and action-item due dates at the next standup or squad sync

---

## Context for Future Reference

This Slack thread should be treated as the anchor citation for two of this week's three weekly priorities:
- **Priority 2 (October/November one-pager):** This is now the hard-evidence source, not the softer senior-bi-weekly read from last week.
- **Priority 3 (whitelisting ownership):** Resolved as "both POCDEX and Compass," which changes the priority from "find the owner" to "scope and assign the Compass-side build."

Related: `outputs/weekly-plans/2026-07-27-W31-weekly-plan.md`, `outputs/weekly-reviews/2026-07-24-W30-weekly-review.md` (senior bi-weekly readout), `00-hub/open-items.md` #39 (VAPT/UAT timeline).

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw Slack summary</summary>

**MVP Launch Delay and VAPT Planning**
The MVP launch is projected to be delayed until the end of November due to VAPT availability, with the earliest scan slot in mid-September. The team will prioritize critical UAT bug fixes to prepare for the VAPT and will use hashed and anonymized production data for UAT.
- Adrian ANG (PSD) communicated a projected MVP launch delay to end November due to VAPT availability, with the earliest scan slot in mid-September.
- Adrian ANG (PSD) stated that to meet the mid-September VAPT slot, the team will prioritize critical UAT bug fixes and use hashed and anonymized production data for UAT.
- Adrian ANG (PSD) mentioned that VAPT availability is the primary driver of the MVP timeline, projecting an 8-week VAPT cycle.

**UAT and Test Data Management**
The team is coordinating UAT timelines and test data requirements, with UAT test cases converted into an Excel sheet for POCDEX Officer requirements. Imelda MO (PSD) provided an updated link for the UAT POCDEX personas.
- Rama MOORTHY (PSD) and Imelda MO (PSD) converted UAT test case requirements for POCDEX Officer into an Excel sheet, with Imelda MO (PSD) providing an updated link.
- Jace TAN (PSD) added the UAT schedule to a Confluence page and requested updates, with Imelda MO (PSD) providing a link to the MVP Timeline.

**Technical Action Items and Bug Resolution**
Key action items from the DO call include documenting data patching as backlog items and PMs documenting success criteria for epic 1-pagers. A bug related to jobID logic and competencies has been ticketed for the next sprint.
- Adrian ANG (PSD) assigned action items for data patching documentation and PMs to document success criteria for epic 1-pagers.
- Rama MOORTHY (PSD) confirmed that a ticket has been created for the next sprint to address the bug related to jobID logic and competencies.

**VAPT Process and Security Clearance**
Adrian ANG (PSD) inquired about the VAPT process and booking an earlier scan date, and Barry LIM (PSD) outlined the VAPT steps, noting that tester availability dictates the schedule. Rama MOORTHY (PSD) will confirm if testers have security clearance.
- Adrian ANG (PSD) asked Barry LIM (PSD) and Fabian PEH (GovTech) about VAPT procedures and booking earlier scan dates, as the earliest scan is mid-September.
- Barry LIM (PSD) outlined the VAPT process, including initial onboarding, tester access, scanning, remediation, and final reporting — noting that dates depend on tester availability.
- Rama MOORTHY (PSD) asked if security clearance is needed for VAPT testers, and Barry LIM (PSD) confirmed they are typically cleared.

**Agency Whitelisting Strategy**
For agency whitelisting, Rama MOORTHY (PSD) confirmed that while POCDEX will whitelist agencies, Compass will also need to implement whitelisting on their end.
- Rama MOORTHY (PSD) asked Pow Hwee TAN (PSD) if whitelisting is required in Compass after POCDEX API whitelists agencies.
- Pow Hwee TAN (PSD) confirmed that whitelisting is needed on Compass's end as well, in addition to POCDEX whitelisting agencies for rollout.

</details>
