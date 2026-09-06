# Meeting Notes: Huddle with Liting on R1 Opportunities Discovery

**Date:** 4 September 2026 (2026-W36)
**Attendees:** Michelle Yip (PM), Liting (Li Ting Kway, Product Designer)
**Meeting Type:** 1:1 Design & Discovery Huddle
**Related:** [R1 Brainstorm Running Doc](../decisions/2026-09-01-W36-r1-brainstorm-running-doc.md) · [CMM Discovery Readout Notes](2026-08-31-W36-architecture-review-forum-cmm-discovery.md) · [R1 Epic A Dependency Analysis](../../outputs/archive/2026-W34-Aug17-Aug21/analyses/2026-08-19-W34-r1-epic-a-day2-ops-dependency-analysis.md)

---

## Summary

Liting shared initial R1 discovery findings, including user pain points and wish lists from Amy and Qiu Yan. A critical research gap surfaced: Liting has been unable to connect with operational personnel handling internal jobs and secondments. If this gap is not closed, the team will need to narrow the R1 scope to native creation and application for STIPs and Gigs in CareerCompass, while falling back to ingesting internal jobs and secondments from Careers@Gov (C@G) or OneTalent Gateway (OTG). Michelle connected Liting with Megan Yeo from PCG to address the stakeholder gap. Underpinning this is a major capacity risk: only 1 designer is currently assigned across two large, concurrent discovery scopes (CMM and R1 Opportunities).

---

## Decisions & Directional Shifts

1. **Contingency scope boundary for R1 Opportunities defined:**
   - **Direction:** If discovery with internal jobs and secondment operators cannot be completed in time, R1 will split opportunity types:
     - **Native in Compass:** Full end-to-end creation and application workflow for STIPs (Short-Term Immersion Programmes) and Gigs.
     - **Ingestion / Link-off:** Ingest internal jobs and secondments from C@G or OTG, rather than building native creation and management workflows in Compass.
   - **Why:** Cannot design workflows without operational input from the personnel who run these schemes.
   - **Impact:** De-risks delivery by avoiding speculative design, but introduces cross-system UX friction (dual posting, additional logins) that requires deeper solutioning.

2. **Stakeholder intervention for internal jobs and secondments:**
   - **Action:** Michelle identified Megan Yeo from PCG (Public Sector Career Group / PSD) as the operational contact point for Liting.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Arrange discovery chat with Megan Yeo (PCG) on internal jobs and secondments | Liting | Next week (w/c 7 Sep) | 🔴 High | 🔴 Not Started |
| Investigate technical and UX options to reduce dual posting and additional login friction for ingested internal jobs/secondments | Michelle + Pow Hwee | Before Sprint 9 R1 brainstorm | 🟡 Medium | 🔴 Not Started |
| Synthesize Amy and Qiu Yan interview findings into the R1 brainstorm running doc | Liting | Next week | 🟡 Medium | 🔴 Not Started |
| Flag designer capacity constraint (1 designer across CMM + R1 Opportunities) to Adrian Ang | Michelle | Ongoing / 1:1 | 🔴 High | 🔴 Not Started |

---

## Key Insights & Findings

### Discovery Findings (Amy & Qiu Yan)
- Pain points and wish lists captured from Amy and Qiu Yan cover the operational realities of posting opportunities and tracking candidates.
- Full details to be synthesized into the running R1 discovery log once Liting consolidates interview notes.

### The Internal Jobs & Secondments Gap
- **Core issue:** Internal jobs and secondments operate under different administrative rules, approval chains, and governance compared to lightweight STIPs and Gigs.
- **Blocker:** Liting had no direct line of contact with the actual personnel managing internal jobs and secondments, leaving that half of the opportunity spectrum unvalidated.

### User Experience & Dual Posting Problem
- If internal jobs and secondments are managed in C@G or OTG while STIPs/Gigs live in Compass:
  - **Hiring managers / HR:** Face dual posting if they have multiple opportunity types across platforms.
  - **Public officers:** Experience disjointed application flows, extra hops, or additional authentication barriers if redirected to C@G or OTG.
  - Deeper investigation needed with engineering (Pow Hwee) on single sign-on, deep linking, and automated sync options.

---

## Blockers & Capacity Risks

1. **Designer Bandwidth Bottleneck (1 Designer, 2 Scopes):**
   - **Risk:** Liting is the sole designer covering both the **Competency Management Model (CMM)** discovery track (agency interviews, parent-child model, 15 Sep BO sharing milestone) and **R1 Opportunities** (creation, application, hiring manager dashboard).
   - **Impact:** High risk of context switching, shallow discovery, or schedule slip on one or both tracks.
   - **Mitigation needed:** Discuss design resourcing with Adrian Ang. Validate whether additional design capacity (e.g., Michelle Chen or Amber once MVP wrap completes) can be unlocked.

2. **Access to Internal Job & Secondment Administrators:**
   - **Risk:** Discovery schedule is dependent on Megan Yeo's availability and responsiveness.
   - **Mitigation:** Liting to initiate contact immediately; Michelle to follow up if scheduling stalls.

---

## Next Steps

**Immediate (This Week / Next Week):**
- Liting to send meeting invite to Megan Yeo (PCG).
- Michelle to update the R1 Brainstorm Running Doc ([2026-09-01-W36-r1-brainstorm-running-doc.md](../decisions/2026-09-01-W36-r1-brainstorm-running-doc.md)) with Liting named as R1 designer and record the contingency scope option.
- Bring the dual posting and additional login challenge to the Sprint 9 R1 Brainstorm kickoff with Pow Hwee.

**Follow-up Meeting:**
- **Date:** Week of 6 September (Sprint 9 Session 1 of R1 Brainstorm)
- **Attendees:** Michelle Yip, Pow Hwee Tan, Liting
- **Agenda:** Review Megan Yeo discovery findings (if held), evaluate native vs ingestion feasibility, and review technical approaches to authentication and posting sync.

---

## Context for Future Reference

This huddle marks the first concrete scope boundary discussion for R1 Opportunities post-MVP. In MVP, opportunities are read-only with external application links. R1 originally envisioned native creation and application across all opportunity types. Today's huddle establishes the pragmatic architectural fallback: STIPs and Gigs are lighter and well-suited to native Compass workflows, whereas internal jobs and secondments carry heavier civil-service machinery that may warrant ingestion from C@G/OTG unless discovery with Megan Yeo proves native Compass handling is straightforward.

---

<details>
<summary>Appendix: Raw Notes</summary>

Huddle with Liting on R1 Discovery.
Liting shared about the pain points and wish lists from Amy and Qiu Yan.
There is one challenge where Liting is unable to touch base with any personnel that handles internal jobs and secondments.
Thus, if this is not done, R1 scope may need to change to handling creation and application of STIPs, Gigs in Compass, while allowing ingestion of internal jobs and secondments from either C@G or OTG.
However, we may need to deep dive a bit more into how we can reduce the dual posting or additional login required for internal jobs and secondments.
I have managed to find Megan Yeo from PCG to chat with Liting and pending Liting's arrangement.
My concern is only 1 designer and she had to manage 2 scopes - CMM and R1 Opportunities.

</details>
