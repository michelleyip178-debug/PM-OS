# Meeting Notes: Inclusive Job Portal

**Date:** July 30, 2026

**Attendees:** Michelle, Liting, Adrian Ang

**Meeting Type:** Team planning / scope alignment

**Duration:** Not specified

---

## Summary

The product team aligned that the inclusive job portal concept is relevant after Liting's review. The core problem: HRs currently juggle disconnected tools to create opportunities and manage applications through to closure. CareerCompass will support that workflow but won't become a full ATS. Michelle has follow-ups with BOs on job creation scope, and the team still needs to nail down Workable's role before committing further.

---

## Decisions Made

1. **Inclusive job portal direction is relevant** — team is proceeding with it
   - **Why:** Liting's review of the concept aligned with product team's read on the opportunity
   - **Who decided:** Product team (Liting + Michelle + Adrian)
   - **Impact:** Unblocks next round of scoping with Michelle Chen

2. **Problem statement confirmed:** solving for HRs not having to use disconnected tools to create opportunities and manage applications to closure (offered/rejected)
   - **Why:** Reflects the actual HR pain point Michelle identified
   - **Who decided:** Michelle
   - **Impact:** Anchors scope discussion — CareerCompass is not meant to be a full ATS

3. **Application handoff approach: simple email handoff to HRs is sufficient** (pending BO confirmation)
   - **Why:** Avoids building full ATS functionality inside CareerCompass
   - **Who decided:** Michelle (proposed, needs BO validation)
   - **Impact:** Keeps scope contained; SJRs remain the one exception that must sit solely in Compass

4. **Internal Jobs to use "Jobs" nature with standard recruitment stages**
   - **Why:** Consistency with existing recruitment stage model
   - **Who decided:** Team
   - **Impact:** No new stage model needed for Internal Jobs

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Check with BOs whether Compass allows job creation (except SJRs, which stay solely in Compass) | @Michelle | No date mentioned — schedule within 48 hours | High | 🔴 Not Started |
| Discover more about what Workable can do and its onboarding plan | @Michelle (team) | No date mentioned — before next touch-base | High | 🔴 Not Started |
| Share PRD and user guides with designers | @Michelle | No date mentioned — schedule within 48 hours | Medium | 🔴 Not Started |
| Discuss scope with Michelle Chen and determine next steps | @Michelle | Before next week's touch-base | High | 🔴 Not Started |
| Scope out discovery still required | Team | Next touch-base | Medium | 🔴 Not Started |

**Notes:**
- No due dates were given for most items — recommend confirming dates before next week's sync.

---

## Key Insights & Quotes

**Strategic Considerations:**
- CareerCompass's mandate is explicitly bounded: opportunity + application management to closure, not a full ATS build-out. This is a recurring scope question — see Open Questions below on how it maps to the existing R1 PRD.
- Workable adoption is conditional on agency coverage. Adrian flagged that if not all agencies onboard, the team may not want to use it at all — this is a binary risk, not a rollout detail.

**Stakeholder Note — Adrian Ang:**
Per [stakeholder profile](../../context-library/stakeholder-profiles.md), Adrian is primary decision authority and escalations run through him. His Workable comment reads as a scope guardrail, not a request — worth treating as a gating condition before any Workable integration work starts.

---

## Open Questions

- [ ] Does Compass allow creation of jobs outside of SJRs? - **Owner:** @Michelle (via BOs) - **By:** Before next touch-base
- [ ] What can Workable actually do, and what's the onboarding plan / agency coverage? - **Owner:** @Michelle / team - **By:** Before next touch-base
- [ ] Is email handoff to HRs sufficient, or do BOs need something more? - **Owner:** @Michelle - **By:** Before next touch-base
- [ ] What's the final scope for the inclusive job portal, post-discussion with Michelle Chen? - **Owner:** @Michelle - **By:** Next week's sync

---

## Context Cross-Reference

This connects directly to open questions already logged in [r1-seamless-application-draft.md](../../context-library/prds/r1-seamless-application-draft.md):
- "Which ATS are we integrating with for status tracking?" (Michelle → Jacky / Xian Zhang)
- "SJR Apply Flow Scope: Are SJRs fully in R1 scope now?"

This meeting reaffirms SJRs must sit solely in Compass, which answers part of that open PRD question — worth updating the PRD's open questions section to reflect this.

No conflicting timeline commitments were found in reviewed PRDs or previous meeting notes for this thread.

---

## Next Steps

**Immediate (This Week):**
- Michelle to check with BOs on job creation scope (excl. SJRs)
- Michelle to share PRD and user guides with designers

**Short-term (Next 2 weeks):**
- Discover Workable capabilities and onboarding/agency coverage plan
- Discuss scope with Michelle Chen

**Follow-up Meeting:**
- **Date:** Next week (specific date TBD)
- **Purpose:** Nail down next steps and required discovery
- **Attendees:** Michelle, Liting, Adrian (presumed continuation)

---

## Context for Future Reference

CareerCompass's boundary as "not a full ATS" keeps surfacing as the scope anchor for opportunity-related features — worth stating explicitly in the PRD's non-goals if not already there. Workable is a conditional dependency (agency onboarding coverage), not a committed integration yet.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

Liting went through the inclusive job portal and product team aligned that it is relevant. Michelle shared that the problem we are solving was for HRs not having to go to disconnected tools to create opportunities and manage the applications to the point of closure (offered / rejected). Yet CareerCompass is not meant to be a full fledge ATS. Michelle is to check with BOs if compass allows the creation of jobs (except SJRs which needs to sit in compass solely), and a simple handoff of applications to HRs via email will be good enough. Adrian reminded the team to bear in mind that Workable is still in the plans but we need to discover more about what it can do and what is the onboarding plan for it. If not all agencies will be onboarded, we may not want to use it. Internal Jobs should be treated using Jobs nature and the usual recruitment stages should apply. Liting also mentioned that the research seems to be quite complete for the opportunities, will be good if michelle can share the PRD and the user guides for designers. They will discuss the scope etc with Michelle Chen and determine next steps. Team will touch base again next week to nail down on next steps and what discovery is required.

</details>
