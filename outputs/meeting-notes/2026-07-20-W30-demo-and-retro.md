---
date: 2026-07-20
week: 2026-W30
meeting_type: demo-and-retro
topic: Demo and Retro
---

# Meeting Notes: Demo and Retro

**Date:** 2026-07-20

**Attendees:** Adrian Ang, Michelle Yip, Pow Hwee Tan, Rama Moorthy, Imelda Mo, Victor Ong (GovTech), Li Ting Kway (GovTech)

**Meeting Type:** Demo and retro

**Duration:** Not specified

---

## Summary

Sprint demo and retro covering a UI date-display fix, ODIN/UHDP leadership changes, a data mapping walkthrough scheduled for July 23, meeting prep for Friday's session with Mark and GK, a competency ID matching bug, UI/UX consistency feedback, and a push to run UAT against properly-formed POCDEX data instead of current QA data.

---

## Decisions Made

1. **Replace "1 Jan 1970" placeholder with "Posted >3 months ago" for null dates and dates older than three months**
   - **Why:** "1 Jan 1970" reads as a bug (Unix epoch default) rather than intentional design; a plain-language placeholder is clearer for users
   - **Who decided:** Proposed by Adrian Ang; Michelle Yip to investigate and implement
   - **Impact:** Applies to job opportunity date display logic across both null-date and stale-date (>3 months) cases

2. **Adrian Lo (tech lead for UAT) to be included in Thursday's meeting**
   - **Why:** Pow Hwee has taken on greater leadership roles across ODIN and UHDP and wants technical UAT ownership represented in the room
   - **Who decided:** Pow Hwee Tan
   - **Impact:** Changes attendee list for Thursday's meeting

3. **Proceed with UAT using "properly formed" POCDEX data instead of current QA data**
   - **Why:** Adrian is uncomfortable sanity-checking production-grade names, roles, designations, and competencies against QA data quality; wants a proper check before UAT exposes issues to BOs
   - **Who decided:** Requested by Adrian Ang
   - **Impact:** Adds a data-quality gate before UAT execution; connects to the broader UAT data-realism risk already flagged in the [2026-07-17 UAT Plan Sharing meeting](2026-07-17-W29-uat-plan-sharing-readiness-alignment.md)

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Investigate and fix date display logic (null dates + >3 month old dates) | Michelle Yip | Not stated | 🟡 Medium | 🔴 Not Started |
| Prepare actual data and walk through mapping/usage for next role recommendation, derive role expected competencies, bulk profile provisioning, and profile ingestion/sync on login | Rama Moorthy | 2026-07-23 | 🔴 High | 🔴 Not Started |
| Present evaluation approach, data blockers, and PreProd upload plan to Mark and GK | Victor Ong | 2026-07-24 (Friday, 1-2pm) | 🔴 High | 🔴 Not Started |
| Schedule meeting with Mark and GK | Imelda Mo | 2026-07-24 (Friday, 1-2pm) | 🟡 Medium | 🟢 Complete |
| Schedule Wednesday meeting to resolve competency ID discrepancy, after Michelle returns from training | Rama Moorthy | Wednesday (date TBD, gated on Michelle's training return) | 🔴 High | 🔴 Not Started |
| Improve layout consistency once Target roles section is added | Li Ting Kway | Not stated | 🟡 Medium | 🔴 Not Started |
| Match UI to provided designs more closely (spacing, rounded corners on dark green subsection) | Li Ting Kway | Not stated | 🟡 Medium | 🔴 Not Started |
| Proceed with UAT using properly formed POCDEX data for sanity check | Adrian Ang (raised), owner for execution not stated | Not stated | 🔴 High | 🔴 Not Started |

**Notes:**
- No due date given for the date-display fix — recommend scheduling within 48 hours per standard practice.
- The competency ID meeting is gated on two unresolved variables: an exact Wednesday date, and Michelle's return-from-training date. Confirm both before treating this as scheduled.
- Owner for executing the POCDEX-data UAT request isn't named in the notes — likely lands with Michelle or Rama given the existing UAT data-prep thread; worth confirming.

---

## Key Insights & Quotes

**Data quality is now a recurring, escalating concern.** Adrian's POCDEX request here is a sharper, more concrete version of the "data realism" risk already flagged as unmitigated in the [2026-07-17 UAT Plan Sharing meeting](2026-07-17-W29-uat-plan-sharing-readiness-alignment.md) (Products read-replica risk, persona curation difficulty). That meeting left this as an open question for Michelle + Rama to resolve before UAT Phase 0 (2026-08-11). Adrian raising it again independently suggests it hasn't been resolved yet and is becoming a trust issue, not just a logistics one.

**Competency ID issue is a matching-logic blocker, not cosmetic.** Pow Hwee's point — that competency IDs aren't unique across agency, job family, function, and PL — breaks opportunity matching at a structural level. This is worth flagging as a priority above typical UI polish items in this same meeting.

**UI feedback from Adrian is design-fidelity focused, not functional.** Spacing, rounded corners, "hanging" section headers in landscape mode — these are polish items GovTech (Li Ting) can address once the Target roles section lands. Lower urgency than the date-display and competency-ID items.

---

## Open Questions

- [ ] What is the exact Wednesday date for the competency ID meeting, and has Michelle's training return date been confirmed? — **Owner:** Rama Moorthy — **By:** before Wednesday
- [ ] Who owns executing the POCDEX-data UAT sanity check — Michelle, Rama, or a dedicated data owner? — **Owner:** Michelle Yip / Rama Moorthy — **By:** before next UAT-adjacent meeting
- [ ] Does "properly formed POCDEX data" solve the same data-realism risk flagged in the 2026-07-17 UAT meeting (Products read-replica, non-frozen dataset), or is this a separate, narrower ask specific to POCDEX? — **Owner:** Michelle Yip — **By:** before UAT Phase 0 (2026-08-11)

---

## Blockers

1. **Competency ID is not unique across agency, job family, function, and PL**
   - **Blocked by:** Underlying data model — competency IDs weren't designed to be globally unique
   - **Impact:** Prevents matching in opportunities; likely affects any downstream feature relying on competency matching
   - **Resolution:** Wednesday meeting (date TBD) to align on a fix, after Michelle returns from training

2. **QA data isn't trusted as a stand-in for production-grade data ahead of UAT**
   - **Blocked by:** Current QA data quality; no confirmed properly-formed POCDEX dataset yet available
   - **Impact:** Risk of UAT surfacing data-quality issues instead of genuine product defects, undermining BO confidence (echoes the unresolved risk from the 2026-07-17 UAT meeting)
   - **Resolution:** Not yet solved; Adrian requested proceeding with properly formed POCDEX data, but no owner or timeline confirmed yet

---

## Next Steps

**Immediate (this week):**
- Michelle investigates the date-display placeholder fix
- Rama prepares data for the July 23 data mapping and usage walkthrough
- Victor and Imelda finalize Friday's session with Mark and GK

**Short-term (next 2 weeks):**
- Resolve competency ID discrepancy in Wednesday's meeting (date and Michelle's availability TBD)
- Confirm POCDEX data readiness ahead of UAT Phase 0 (2026-08-11)
- Li Ting to align UI spacing/corners/layout with provided designs

**Follow-up Meetings:**
- **Thursday:** Adrian Lo joins as UAT tech lead
- **2026-07-23:** Data mapping and usage walkthrough (Rama)
- **2026-07-24, 1-2pm:** Meeting with Mark and GK (Victor, Imelda)
- **Wednesday (date TBD):** Competency ID discrepancy resolution (Rama, gated on Michelle's training return)

---

## Context for Future Reference

This meeting connects to the ongoing UAT data-realism thread first surfaced in the [2026-07-17 UAT Plan Sharing & Readiness Alignment](2026-07-17-W29-uat-plan-sharing-readiness-alignment.md) meeting, where the Products read-replica risk and persona curation difficulty were flagged as unresolved. Adrian's POCDEX data request here should be evaluated against that same open risk rather than treated as a new, unrelated ask.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

Demo and Retro 20 Jul
@Adrian ANG (PSD) inquired about the display logic for old dates on job opportunities, specifically suggesting a placeholder text like "Posted >3 months ago" instead of the current "1 Jan 1970" for null dates and for dates older than three months. @Michelle YIP (PSD) acknowledged the request and stated they would investigate the matter.

Less detail
@Adrian ANG (PSD) proposed changing the placeholder text for null dates from "1 Jan 1970" to "Posted >3 months ago" [1]
@Adrian ANG (PSD) also suggested using the same "Posted >3 months ago" placeholder for opportunities where the post date is older than three months [1]
@Michelle YIP (PSD) will review the display logic for old dates [2]

ODIN and UHDP Project Roles and Responsibilities
@Pow Hwee TAN (PSD) has been appointed to greater leadership roles for ODIN and UHDP, and @Pow Hwee TAN (PSD) suggested including Adrian Lo in the upcoming Thursday meeting as the tech lead for UAT.

Data Mapping and Usage Walkthrough
@Pow Hwee TAN (PSD) requested a detailed walkthrough of actual data mapping and usage for specific flows on July 23rd, with @Rama MOORTHY (PSD) confirming they will prepare the data and step through the process.

More details
@Rama MOORTHY (PSD) confirmed they will prepare actual data and step through the mapping and usage for the specified flows. [2]
@Pow Hwee TAN (PSD) requested a detailed walkthrough of data mapping and usage for next role recommendation, derive role expected competencies, bulk profile provisioning, and profile ingestion/sync on login. [3]

Meeting Preparation and Agenda Items
@Imelda MO (PSD) scheduled a meeting with Mark and GK for Friday and @Victor ONG (GOVTECH) will present the evaluation approach, data blockers, and plans for uploading production data to the "PreProd" environment.

More details
@Victor ONG (GOVTECH) will table the evaluation approach and data blockers to Mark & GK, and inform them about plans to upload production data to the "PreProd" environment. [4]
@Imelda MO (PSD) scheduled the meeting with Mark and GK for Friday from 1-2pm. [5]

Competency ID Discrepancies
@Pow Hwee TAN (PSD) identified an issue with competency IDs varying by agency, job family, function, and PL, which prevents matching in opportunities, and @Rama MOORTHY (PSD) will schedule a meeting for Wednesday to address this after @Michelle YIP (PSD) returns from training.

More details
@Rama MOORTHY (PSD) will set up a meeting for Wednesday to address the competency ID issue once @Michelle YIP (PSD) is back from training. [6]
@Pow Hwee TAN (PSD) highlighted that the competency ID is not unique across agencies, job families, functions, and PL, causing issues in opportunity matching. [7]

UI/UX Design Consistency
@Adrian ANG (PSD) raised concerns about inconsistent background colors and spacing on the development page, and @Li Ting KWAY (GOVTECH) explained the layout will improve once the Target roles section is added, while @Adrian ANG (PSD) also requested matching designs more closely, including rounded corners for the dark green subsection.

More details
@Adrian ANG (PSD) requested that the UI design match the provided designs as much as possible, including the spacing between text and section borders and the rounding of corners on the dark green subsection. [8]
@Adrian ANG (PSD) noted that the current layout with landscape mode screens causes section headers to appear "hanging" on the canvas. [9]

UAT and Data Quality
@Adrian ANG (PSD) requested to proceed with UAT using "properly formed" POCDEX data to sanity check production-grade information, expressing discomfort with current QA data and the potential for issues during UAT.

More details
@Adrian ANG (PSD) requested to proceed with UAT using "properly formed" POCDEX data to perform a sanity check on production-grade names, roles, designations, and competencies. [10]

</details>
