---
date: 2026-09-04
week: 2026-W36
type: timeline-collision-analysis
topic: R1 Opportunities Engineering Handoff vs Adrian Expected Timeline
status: working-draft
related:
  - outputs/meeting-notes/2026-09-04-W36-liting-r1-discovery-huddle.md
  - outputs/meeting-notes/2026-08-31-W36-adrian-biweekly-sync.md
  - outputs/decisions/2026-09-01-W36-r1-brainstorm-running-doc.md
  - outputs/analyses/2026-09-04-W36-career-compass-weekly-debrief.md
---

# Analysis: R1 Engineering Handoff Feasibility vs. Adrian's Working Timeline

## Executive Summary

Adrian Ang's working expectation targets an R1 engineering start in **October 2026** (immediately following an end-September MVP dev freeze), driving toward a **December development freeze, mid-January UAT, and an 8-week VAPT cycle**.

Findings from the 4 September R1 discovery huddle with Liting and the W36 operational debrief reveal a **structural collision on both sides of the handoff**:
1. **Upstream (Design & Product):** Specifications and UI cannot be ready for an October engineering handoff. Liting is the sole designer managing two concurrent scopes (CMM and R1 Opportunities). CMM has an imminent 15 September BO sharing deadline, while R1 discovery on internal jobs and secondments has not started due to lack of stakeholder access.
2. **Downstream (Engineering):** Developers will not be free in October. VAPT remediation (scanning 7 Sep to ~7 Nov), performance testing fixes (15-17 Sep tests), and MVP go-live readiness (24-25 Nov launch) will tie up core engineering mindshare straight through November.

Without conscious intervention, the team faces either handing off half-baked designs that trigger rework, or watching the timeline slip silently into Q1 2027.

---

## 1. Baseline Target: Adrian's Expected Critical Path

Sourced from the 31 August bi-weekly sync, Adrian outlined the following working chain for R1:

| Phase | Window / Target | Working Assumptions & Dependencies |
|---|---|---|
| **R1 Grooming & Handoff** | Mid-to-late September 2026 | R1 one-pager approved; discovery findings synthesized into user stories. |
| **R1 Engineering Build** | October - December 2026 | Dev starts once MVP dev freeze lands; 3-4 dev sprints. |
| **R1 Code Freeze** | December 2026 | Feature complete before end-of-year holidays. |
| **R1 UAT** | Mid-January 2027 | Business and agency user acceptance testing. |
| **R1 VAPT** | February - March 2027 | Adrian's working assumption of an 8-week VAPT cycle. |
| **R1 Release** | End Q1 2027 | Production release following VAPT sign-off. |

*Note:* As flagged in W36 planning, this chain was rough verbal math rather than a formally sized critical path.

---

## 2. Reality on the Ground: Emerging Constraints

### Upstream Design Constraints
- **1 Designer across 2 Scopes:** Liting (Li Ting Kway) is the sole product designer covering both CMM (Competency Management Model) and R1 Opportunities.
- **CMM Immediate Milestone:** Remaining agency interviews must conclude before 15 September, followed by the BO sharing session and Sept-Oct co-creation workshops. This consumes Liting's immediate bandwidth.
- **Stakeholder Access Gap:** Liting has completed initial chats with Amy and Qiu Yan, but has had zero operational contact with personnel running civil-service internal jobs and secondments. Megan Yeo (PCG) has been identified, but the discussion is still pending scheduling.

### Downstream Engineering Constraints
- **VAPT Schedule:** Security testing runs 7 September through late October, targeting sign-off ~7 November. Interim vulnerability reports arrive from 25 September onward, pulling developers into remediation throughout October.
- **Performance Testing:** Load tests run 15-17 September (targeting 1,875 concurrent users), generating immediate optimization backlog items.
- **MVP Pre-Go-Live Deliverables:** Core engineers must still build the MVP BO data-error visibility mechanism, support staging-to-prod cutover, and prepare Day-2 runbooks for the 24-25 November launch.

---

## 3. The Four Specific Collision Points

### Collision 1: The Designer Bandwidth Bottleneck
A single designer cannot conclude cross-agency CMM discovery and simultaneously deliver an end-to-end R1 Opportunities design package within 3 to 4 weeks. 
- R1 Opportunities requires designing three distinct surfaces: Opportunity Creation (HR/Hiring Manager), Application Flow (Public Officer), and the Hiring Manager Management View.
- With CMM absorbing Liting through mid-September, wireframing and user validation for R1 cannot realistically complete before mid-to-late October.

### Collision 2: The Unvalidated Scope on Internal Jobs & Secondments
Internal jobs and secondments follow distinct administrative rules, approvals, and security classifications compared to simple STIPs (Short-Term Immersion Programmes) and Gigs.
- Because Liting has not interviewed scheme administrators yet, requirements for this half of the opportunity spectrum do not exist.
- Scheduling and synthesizing discovery with Megan Yeo will take through mid-September at best. Designing workflows based on unvalidated assumptions guarantees downstream engineering churn.

### Collision 3: The "Ingestion Fallback" Adds Engineering Spikes
The proposed fallback to descope internal jobs from native creation to ingestion from Careers@Gov (C@G) or OneTalent Gateway (OTG) does not simplify engineering handoff.
- Ingestion introduces architectural friction: dual posting for HR teams, and broken redirect loops or additional login prompts for officers applying to external links.
- Resolving these friction points requires technical spikes with Pow Hwee Tan and external coordination with C@G/OTG teams. Engineering cannot begin implementation until ingestion data schemas and authentication contracts are defined.

### Collision 4: Engineering Developer Contention in October
Adrian's expectation assumes developers are ready to pick up R1 tickets in October because MVP development was slated to freeze at end-September.
- In reality, developers will be deeply committed to closing VAPT vulnerabilities and performance findings throughout October.
- Handing off R1 stories to engineering on 1 October would create an unworked backlog while developers focus on launch-critical security fixes.

---

## 4. Timeline Cascade: Expected vs. Projected

The table below illustrates how the current constraints ripple through Adrian's planned milestones:

| Milestone | Adrian's Working Timeline | Projected Reality (Current Velocity) | Variance / Consequence |
|---|---|---|---|
| **Design Handoff** | End-September 2026 | Late October / Early November 2026 | +4 to +6 weeks slip due to CMM prioritization and Megan Yeo discovery. |
| **Dev Kickoff** | October 2026 | Mid-November / December 2026 | Pushed by both design readiness and developer VAPT remediation load. |
| **Dev Freeze** | December 2026 | February 2027 | Cannot compress build into holiday period; dev freeze slips by 6-8 weeks. |
| **R1 UAT** | Mid-January 2027 | March 2027 | UAT pushed into Q1; clashes with post-MVP launch operational review. |
| **R1 VAPT** | Feb - Mar 2027 | April - May 2027 | Second VAPT window pushes release toward mid-2027. |

---

## 5. Strategic Options for Adrian Ang

To resolve this collision consciously rather than through emergent delay, three clear options should be presented to Adrian:

```text
Option A: Descope to Protect October Handoff
Scope: Native STIPs/Gigs only. Internal jobs ingested as simple external URLs.
Cost: Ingestion UX friction remains; partial capability.
Gain: Preserves Oct engineering kickoff.

Option B: Add Design Capacity to Protect Scope
Scope: Full native creation across STIPs, Gigs, Jobs, Secondments.
Cost: Requires immediate assignment of a 2nd designer (e.g., Michelle Chen).
Gain: Preserves both scope and schedule.

Option C: Align Handoff to Real Engineering Availability (Recommended)
Scope: Full, validated discovery (including Megan Yeo input).
Cost: Formally resets dev start to mid-November (post-VAPT remediation).
Gain: Realistic execution, no rework, respects real dev bandwidth.
```

### Option Details

### Option A: Descope to Protect October Handoff (Narrow Scope)
- **Mechanism:** Restrict R1 native build strictly to **STIPs and Gigs**. Drop native creation and deep ingestion for internal jobs and secondments entirely; display them merely as basic links out to C@G/OTG without custom integration.
- **Trade-off:** Protects an early October handoff, but leaves internal jobs fragmented and fails to solve dual-posting for core HR users.

### Option B: Add Dedicated Design Resourcing (Protect Scope & Schedule)
- **Mechanism:** Acknowledge that 1 designer cannot handle CMM and R1. Assign an additional designer immediately (e.g., pulling Michelle Chen or transitioning Amber's capacity) to take full ownership of R1 Opportunities while Liting delivers CMM.
- **Trade-off:** Requires resource reallocation, but allows parallel discovery with Megan Yeo and timely UI spec production.

### Option C: Formally Realign Handoff to Mid-November (Pragmatic Realism - Recommended)
- **Mechanism:** Accept that developers cannot build R1 in October due to VAPT remediation and MVP launch gates. Reset the R1 design handoff date to **mid-November**. Use September and October for comprehensive discovery with Megan Yeo, UX prototyping, and technical alignment with Pow Hwee.
- **Trade-off:** Moves R1 UAT to late February / March 2027, but synchronizes design handoff with actual developer availability, preventing premature handoff and rework.

---

## 6. Action Items & Next Steps

1. **Schedule Alignment with Adrian Ang:** Present the 3 options during the next 1:1, highlighting that an October dev start collides with VAPT remediation regardless of design pace.
2. **Support Liting's Outreach to Megan Yeo (PCG):** Ensure the interview occurs during the week of 7 September to determine whether internal jobs can be simplified.
3. **Technical Architecture Spike with Pow Hwee:** Scope the feasibility of reducing dual-posting and authentication hops for ingested opportunities during the Sprint 9 R1 brainstorm kickoff.
4. **Update Program Trackers:** Prevent the unvalidated "UAT by mid-Jan" date from being quoted as firm commitment until one of the three options is ratified.
