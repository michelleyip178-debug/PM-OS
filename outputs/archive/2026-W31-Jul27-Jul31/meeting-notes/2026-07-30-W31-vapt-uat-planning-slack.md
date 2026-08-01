# Meeting Notes: VAPT Planning & UAT Execution (Slack Thread)

**Date:** 2026-07-30

**Attendees (via Slack):** Rama Moorthy (PSD), Victor Ong (GovTech), Fabian Peh (GovTech), Michelle Yip (PSD), Pow Hwee Tan (PSD), Imelda Mo (PSD), Adrian Ang (PSD), Boon Siang Teh (GovTech), Benjamin Aw (GovTech)

**Meeting Type:** Async planning thread (VAPT budget/timeline, UAT execution, SSO, CV-CIE risk decision)

**Format:** Slack thread digest

---

## Summary

VAPT for CareerCompass + Intel now has a confirmed start date (7 Sep) and target closure (23 Oct) at ~75K combined cost, matching the timeline already tracked in `open-items.md` #39. UAT execution splits by team next week (Core: Profile Page; Pathfinder: Listing & Discovery, Filtering, Opportunity Detail). Personas are updated with Job IDs; hashed UAT personas still pending a lead-time estimate from Pow Hwee. SSO with CSC has no infra blocker (URL already whitelisted) but still needs a spec-alignment call. A live risk-acceptance decision is in progress on CV-CIE processing time (+5s from Cloak PII removal) — Imelda is leaning toward accepting it.

---

## Decisions Made

1. **VAPT timeline and vendor confirmed**
   - **What:** NCS starts VAPT for CareerCompass 7 Sep 2026, targets final closure 23 Oct 2026.
   - **Who decided:** Rama Moorthy
   - **Impact:** Matches the timeline already tracked in `00-hub/open-items.md` #39 (VAPT 7 Sep–16 Oct) — this is confirmation, not a change. Closure date (23 Oct) is tighter than the previously tracked 16 Oct end but still inside the go-live approval window (19–23 Oct).

2. **UAT split by team for next week**
   - **What:** Core Team covers Profile Page; Pathfinder covers Listing & Discovery, Filtering, Opportunity Detail Page.
   - **Who decided:** Rama Moorthy
   - **Impact:** Matches the staggered UAT plan in open-items #39 (Profile + Opportunities from 11 Aug).

3. **CV-CIE processing delay — leaning toward risk acceptance (not yet final)**
   - **What:** Accept a 5-second processing time increase from Cloak (PII removal) rather than delay/redesign.
   - **Who's leaning this way:** Imelda Mo, citing already-significant CIE processing time.
   - **Still open:** Rama and Benjamin Aw's views not yet captured in thread — flag as pending until they weigh in.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm if there's a separate budget for CIE VAPT (distinct from CC/Intel's 75K) | @Victor Ong | Not stated | High | 🔴 Not Started |
| Provide breakdown of the 75K VAPT cost | @Rama Moorthy (asked by Fabian Peh) | Not stated | Medium | 🔴 Not Started |
| Share lead time for hashed personas into UAT environment | @Pow Hwee Tan | Not stated — needed before UAT starts next week | 🔴 High (blocks UAT start) | 🔴 Not Started |
| Arrange SSO spec-alignment call (Michelle + Pow Hwee) with CSC Team | @Rama Moorthy | Not stated | Medium | 🔴 Not Started |
| Arrange infra connectivity call (Marcus, Sy En, Pow Hwee, Boon Siang Teh) | @Rama Moorthy | Not stated | Medium | 🔴 Not Started |
| Confirm CV-CIE risk-acceptance decision (get Rama + Benjamin's view) | @Victor Ong | Not stated | Medium | 🟡 In Progress (Imelda has responded, 2 more pending) |
| Standardize BO-executable UAT format across CareerCompass | @Michelle Yip | Not stated | Medium | 🟡 In Progress (draft shared) |

**Notes:**
- Three items have no due date and directly block or precede next week's UAT start (personas, SSO alignment, infra connectivity) — worth confirming dates before UAT begins.

---

## Key Insights

**Budget:**
- Combined VAPT quote for CareerCompass + Intel: ~75K. Breakdown requested but not yet shared.
- CIE VAPT budget status unconfirmed — could be a cost gap if it's not already covered in the 75K.

**Technical Constraints:**
- CSC URL is already whitelisted — no infra dependency blocking SSO from a network standpoint (per Adrian Lo, relayed by Rama). Remaining work is spec alignment and connectivity confirmation, not infra provisioning.
- Cloak (PII removal for CV-CIE) adds ~5s to processing time. Framed as a low-risk trade-off given CIE processing is already lengthy.

**Process:**
- Kingsley (Core team) will support Pow Hwee's team on UAT Keycloak account provisioning.
- Personas now have Job IDs for pilot agencies; any agency/persona combination that couldn't be matched has been flagged by Imelda (worth checking what's still unmatched).

---

## Open Questions

- [ ] Is there a separate CIE VAPT budget, or does it need to come out of the 75K? - **Owner:** @Victor Ong - **By:** Not stated
- [ ] What's the lead time for hashed UAT personas? - **Owner:** @Pow Hwee Tan - **By:** Before UAT starts next week
- [ ] Which agency/persona pairs are still missing Job IDs? - **Owner:** @Imelda Mo - **By:** Not stated
- [ ] Final call on CV-CIE 5s delay risk acceptance — need Rama and Benjamin Aw's views - **Owner:** @Victor Ong - **By:** Not stated

---

## Blockers

1. **Hashed UAT personas not yet confirmed with a lead time**
   - **Blocked by:** Pow Hwee Tan hasn't shared the lead time needed to provision them
   - **Impact:** UAT is targeted to start "as early as next week" — without a lead-time estimate, it's unclear if that's actually achievable
   - **Resolution:** Adrian Ang has already asked Pow Hwee directly; needs a same-week answer to protect the UAT start date

---

## Timeline Risks

- **TIMELINE RISK:** This thread confirms VAPT closure by 23 Oct, which is tighter than the 16 Oct end date tracked in `00-hub/open-items.md` #39 and `risks.md` (VAPT window "7 Sep – 16 Oct"). The go-live approval/deploy window (19–23 Oct) now has less buffer after VAPT closes if VAPT itself runs to 23 Oct instead of 16 Oct — worth reconciling which date is current before it causes a scheduling conflict with go-live approval.
- **TIMELINE RISK:** UAT is described as starting "as early as next week," but hashed personas (a stated dependency) have no confirmed lead time yet. If Pow Hwee's answer comes back with a longer lead time than expected, UAT start could slip past the 11 Aug date already committed in open-items #39.

---

## Next Steps

**Immediate (This Week):**
- Get Pow Hwee's lead-time answer on hashed personas
- Arrange the SSO spec call and the infra connectivity call (both currently unscheduled)
- Get Rama and Benjamin Aw's input to close the CV-CIE risk-acceptance decision

**Short-term (Next 2 weeks):**
- Confirm VAPT cost breakdown (75K) and resolve whether CIE VAPT needs separate budget
- Finalize BO-executable UAT format standardization across CareerCompass

**Follow-up Meeting:**
- Likely surfaces in today's "UAT Strategy and process - Internal alignment" (3pm) or the "pm x eng sync on UAT process" (9:30am) per today's daily plan — use one of these to close the open lead-time and scheduling questions rather than letting them sit async.

---

## Context for Future Reference

This thread reconciles cleanly with the already-tracked VAPT/UAT timeline in `00-hub/open-items.md` #39 and `00-hub/risks.md` — it's largely confirmation rather than new information, except for the tighter VAPT closure date (23 Oct vs. previously tracked 16 Oct) and the live CV-CIE risk-acceptance call, which is new.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw Slack thread</summary>

VAPT Planning and Budget
The VAPT for CareerCompass and Intel is scheduled to begin on September 7th, 2026, with a target closure by October 23rd, 2026, fitting within the UAT plan's budget. The estimated cost for VAPT for both CareerCompass and Intel is 75K, and a breakdown will be provided.

More details
@Rama MOORTHY (PSD) confirmed that NCS will start VAPT for CareerCompass on September 7th and target final closure by October 23rd, 2026. [1]
@Rama MOORTHY (PSD) stated the VAPT quote for both CC and Intel comes around 75K and asked @Victor ONG (GOVTECH) if there is a separate budget for CIE VAPT. [2]
@Fabian PEH (GOVTECH) inquired about the breakdown of the 75K VAPT cost. [3]

UAT Test Case Management and Execution
UAT testing is being split into two rounds, with tests grouped by feature area and documented in an easy-to-follow format, including necessary test user accounts. The Core Team will focus on the Profile Page for next week's UAT, while Pathfinder will cover Listing & Discovery, Filtering, and Opportunity Detail Page features.

More details
@Rama MOORTHY (PSD) confirmed that for next week's UAT, the focus will be on the Profile Page from the Core side and Listing & Discovery, Filtering, and Opportunity Detail Page features from Pathfinder. [4]
@Michelle YIP (PSD) shared a draft sample format for BO-executable UAT, suggesting standardization for consistency across CareerCompass. [5]
@Rama MOORTHY (PSD) informed @Pow Hwee TAN (PSD) that Kingsley will be working with their team for UAT Keycloak accounts needed for UAT test cases. [6]

Persona Updates and User Account Management
Personas have been updated with Job IDs for pilot agencies, and any missing personas are indicated. For UAT testing, hashed personas will be provided for the UAT environment, and the team is aiming to start UAT testing as early as next week.

More details
@Imelda MO (PSD) updated personas with Job IDs for pilot agencies and indicated where personas could not be found. [7]
@Adrian ANG (PSD) requested @Pow Hwee TAN (PSD) to share the lead time required for providing hashed personas into the UAT environment. [8]
@Rama MOORTHY (PSD) requested help from @Pow Hwee TAN (PSD) and @Michelle YIP (PSD) regarding SSO implementation specs with the CSC Team. [9]

SSO Implementation and Infrastructure Dependencies
There is a need to align on specifications for SSO implementation with the CSC Team, and it has been communicated that there are no infrastructure dependencies as the CSC URL is whitelisted. A call is being arranged to sort out infra connectivity requirements.

More details
@Rama MOORTHY (PSD) shared information regarding infra dependencies, stating that Adrian Lo communicated there are no infra dependencies as the CSC URL is whitelisted. [10]
@Pow Hwee TAN (PSD) asked @Rama MOORTHY (PSD) to arrange a call with Marcus, Sy En, himself, and @Boon Siang TEH (GOVTECH) to sort out the infra connectivity required. [11]

CV-CIE Processing and Risk Acceptance
A decision is being considered to accept the risk associated with a 5-second increase in CV-CIE processing time due to Cloak, which helps remove PIIs, as the risk is deemed low. This is being weighed against the benefit of improved user experience.

More details
@Victor ONG (GOVTECH) presented two options regarding CV-CIE processing with Cloak: accepting the risk of a 5-second delay or proceeding with the delay, and asked for views from @Imelda MO (PSD), @Rama MOORTHY (PSD), and @Benjamin AW (GOVTECH). [12]
@Imelda MO (PSD) leaned towards accepting the risk due to the already significant processing time for CIE. [13]

</details>
