# Meeting Notes: OTEP Squad Sync

**Date:** 2026-09-15 (09:30–10:30am SGT)  
**Meeting Type:** Working-Level Squad Sync  
**Attendees:** Adrian Ang, Rama Moorthy, Imelda Mo, Pow Hwee Tan, Michelle Yip, Victor Ong, Thomas Huchedé, Chua Hao Eng, Leo Milbor  
**Reference Link:** [OTEP Squad Sync Teams Details](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADE3YTU1YmQ1LWQ3ZWUtNDVjMy04OGJjLTY4ZWFlOWQwNDRhNgFRAAgI3xK8SSHAAEYAAAAAnvaJNmeGgk2Oi_aQWYPzUgcAg5DHAVv-EEuM_SyI5Vc40AAAAAABDQAAXbmH-sk3tkSlB8Awfp-gSAAAc-JnBgAAEA%3d%3d)  

---

## Summary

This working-level squad sync focused on reducing delivery uncertainty across MVP launch gates and resetting expectations for post-MVP planning. The squad aligned on practical compromises for AI performance (tracking drop-off and managing user expectations rather than over-tuning sub-7s latency), reviewed interim VAPT findings (3 Medium, 1 Low, 1 Info), and streamlined employment-change test cases into four core scenarios covering ~80 Workforce Development cases. Most significantly, Adrian Ang signaled that stakeholders must be reset from their January CareerCompass R1 expectation, as capacity across MVP, Opportunities, and CMM is oversubscribed with headcount funding unconfirmed past March 2027.

---

## Decisions Made

| # | Area | Decision | Rationale | Owner |
|---|---|---|---|---|
| 1 | **CIE Performance** | Shift focus from sub-7s P95 tuning to lightweight UI messaging and abandonment tracking | Technical P95 targets under 7s are unrealistic; managing expectations and tracking drop-off funnels delivers better user outcome without wasteful engineering | Adrian Ang, Imelda Mo |
| 2 | **Performance Testing** | Maintain 8-hour endurance test duration alongside standard baseline runs | Confirms system stability under sustained background load before launch | Rama Moorthy |
| 3 | **Employment Changes** | Structure requirements into 4 scenario groups and groom Jira tickets before finalizing test cases | Replaces unwieldy 80-case inventory with 4 actionable engineering flows | Imelda Mo, Pow Hwee Tan |
| 4 | **R1 Expectations** | Begin actively resetting stakeholder expectations away from a January 2027 R1 delivery | Competing priorities (MVP launch, CMM, Opportunities) and resource constraints make January unviable | Adrian Ang |
| 5 | **Engineering Resourcing** | Pursue short-term contract hiring for near-term candidate | Project funding is currently confirmed only through March 2027 | Adrian Ang, Rama Moorthy |
| 6 | **Job Fraction Migration** | Maintain Q1 2027 migration schedule; allocate engineering capacity to R1 delivery in the interim | Prevents premature architectural diversion during the MVP-to-R1 transition | Adrian Ang, Pow Hwee Tan |

---

## Action Items

| Task | Owner | Deadline | Priority | Status |
|---|---|:---:|:---:|:---:|
| Execute CAE performance tests, share datasets, and establish updated baselines | Rama Moorthy | 17 Sep 2026 | 🔴 High | 🔴 Not Started |
| Confirm whether web VAPT report is final or interim, and establish remediation ETA | Rama Moorthy | 17 Sep 2026 | 🔴 High | 🔴 Not Started |
| Propose in-app user messaging and verify loading-state analytics events during CAE processing | Imelda Mo, Design | 18 Sep 2026 | 🔴 High | 🔴 Not Started |
| Engage leadership and agency stakeholders to formally reset the January R1 launch date expectation | Adrian Ang | 19 Sep 2026 | 🔴 High | 🔴 Not Started |
| Follow up with security and compliance stakeholders regarding restricted document classification (>RSN) controls | Victor Ong | 22 Sep 2026 | 🔴 High | 🔴 Not Started |
| Track VAPT findings requiring formal risk assessment updates or risk acceptance | Michelle Yip | 22 Sep 2026 | 🟡 Medium | 🔴 Not Started |
| Create employment-change Jira tickets and draft test cases across the 4 agreed scenarios | Imelda Mo | 22 Sep 2026 | 🟡 Medium | 🔴 Not Started |
| Review employment-change scenarios and testing approach with Workforce Development (WD) | Pow Hwee Tan, WD | 23 Sep 2026 | 🟡 Medium | 🔴 Not Started |
| Prepare engineering effort sizing once Opportunities and CMM scope boundaries are locked | Rama Moorthy | 25 Sep 2026 | 🟡 Medium | 🔴 Not Started |
| Build onboarding repository and checklist framework for incoming engineers and PMs | Adrian Ang, Team | 25 Sep 2026 | 🟢 Low | 🟡 In Progress |

---

## Key Insights & Discussion Points

### 1. AI Inference Performance & UX Trade-offs
- **Reality Check on Latency:** Dry runs showed P95 response times exceeding initial targets. Adrian pushed the team to avoid premature optimization: *"Track first, then remediate."*
- **Instrumentation Over Redesign:** Existing backend latency monitors and product analytics will measure where users drop off during CV upload. If drop-off is minimal, a 7-to-10 second wait paired with informative loading messages (e.g. explaining competency extraction) is an acceptable production baseline.

### 2. Employment Profile Change Simplification
- **The 4 Core Scenarios:** Imelda consolidated roughly 80 disparate Workforce Development test scenarios into four architectural buckets:
  1. Profile attribute changes only (no position change).
  2. Single-position job change (substantive posting update).
  3. Concurrent appointments: 1 active position expanding to 2 active positions.
  4. Concurrent appointments: 2 active positions collapsing to 1 active position.
- **Next Steps:** The team will groom these as user stories in Jira first to reveal engineering dependencies before committing to rigid UAT scripts.

### 3. VAPT Progress & Vulnerability Remediation
- **Current Web Scan Findings:** Received initial web application report showing 3 Medium, 1 Low, and 1 Informational finding.
- **Remediation Plan:** Developers are actively patching the Medium issues. Rama is clarifying whether NCS considers this an interim or final drop, which determines the re-testing window ahead of the ~7 Nov sign-off target.

### 4. AI Document Classification & Data Governance (Critical Risk)
- **Problem:** Officers may upload CVs or documents carrying classification markings higher than Restricted / Sensitive Normal (>RSN).
- **Technical Gaps:** DOCX files allow metadata and text classification checks, but PDF parsing carries significant detection uncertainties.
- **Compensating Controls:** The team discussed pairing clear front-end upload disclaimers with Pathfinder's comprehensive audit logging (highlighted by Michelle during chat) as evidence of governance compliance while automated inspection matures.

### 5. Resourcing, R1 Scope, and Funding Walls
- **The January Reality:** Stakeholders still expect CareerCompass R1 to ship in January 2027. Adrian stated bluntly that this expectation is unachievable without severe scope triage.
- **Resource Fragmentation:** Engineering is simultaneously pulled between MVP hardening, VAPT remediation, Employment Changes, Opportunities, and CMM.
- **Funding Uncertainty:** Project budget is currently confirmed only through March 2027, preventing long-term headcount commitments and constraining external contractor agreements.

---

## Programme Health Assessment (RAG)

| Area | Status | Core Driver |
|---|:---:|---|
| **Team Alignment** | 🟢 Green | Transparent risk-sharing, pragmatic pushback on artificial targets, healthy collaboration across product and tech. |
| **MVP Readiness** | 🟠 Amber | On track for 24–25 Nov launch, but tightly coupled to clean VAPT close and perf testing sign-off. |
| **Performance Testing** | 🟠 Amber | Baseline execution is active, but AI resume upload benchmarks remain unvalidated and success criteria need recalibration. |
| **VAPT Execution** | 🟠 Amber | 3 Medium findings under active fix; need confirmed retest timeline and final report scope from NCS. |
| **Employment Change Feature** | 🟠 Amber | Good scenario grouping, but engineering estimation and WD acceptance testing still need formal grooming. |
| **Career Compass R1 Planning** | 🔴 Red | Unrealistic January expectation held by external stakeholders; scope prioritisation across Opportunities and CMM unresolved. |
| **Resource Capacity** | 🔴 Red | High workload across all squads; developer funding uncertainty past March 2027 limits hiring runway. |
| **Governance / AI Data Classification** | 🔴 Red | Document upload controls for >RSN data lack a confirmed technical enforcement model. |

---

## Governance-Ready Risk Register

*Detailed breakdown of delivery, security, operational readiness, and stakeholder risks captured during sync:*

| ID | Risk | Impact | Likelihood | Rating | Mitigation | Owner |
|---|---|---|:---:|:---:|---|---|
| **R1** | **CAE/CIE performance does not meet expected response times under load.** Dry runs exceeded target thresholds and actual performance baseline is still unknown. | Poor user experience, reduced adoption, user drop-off during CV upload. | High | 🟠 Amber | Complete load testing across file sizes/types. Establish realistic performance baseline. Implement user messaging during processing. Monitor abandonment rates. | Rama Moorthy |
| **R2** | **User drop-off during CV processing is not understood and may impact feature adoption.** | Low CAE usage despite technically successful deployment. | Medium | 🟠 Amber | Introduce funnel tracking between upload, processing, competency generation and completion events. Validate whether latency is causing abandonment before redesigning UX. | Imelda Mo |
| **R3** | **Open VAPT findings remain unresolved before go-live.** Current findings include 3 Medium, 1 Low, and 1 Informational issue. | Security vulnerabilities may delay go-live or require formal risk acceptance. | High | 🟠 Amber | Prioritise remediation. Track ETA for fixes. Coordinate rescans with NCS. Escalate findings that cannot be practically remediated. | Rama Moorthy |
| **R4** | **Certain VAPT findings may not be fully remediable without affecting product functionality** (e.g. analytics dependencies). | Requirement for formal risk acceptance or audit justification. | Medium | 🟠 Amber | Assess each finding for operational impact. Prepare documented justification and formal risk assessment where fixes are not feasible. | Michelle Yip, Rama Moorthy |
| **R5** | **January Career Compass R1 timeline appears unrealistic** based on current understanding of CMM and Opportunities complexity. | Delivery commitment missed, stakeholder dissatisfaction, perception of poor transparency. | High | 🔴 Red | Engage Business Owners immediately. Re-baseline scope. Present complexity and sequencing constraints. Establish revised roadmap and expectations. | Adrian Ang |
| **R6** | **No prioritisation decision between Opportunities, CMM and other R1 backlog items.** | Team effort fragmented across competing workstreams. | High | 🔴 Red | Conduct prioritisation workshop with Business Owners. Agree sequencing approach and scope reduction options. | Adrian Ang, Business Owners |
| **R7** | **Engineering capacity insufficient to support MVP go-live, employment changes, R1 planning, Opportunities, and CMM concurrently.** | Resource bottleneck leading to delays across multiple initiatives. | High | 🔴 Red | Accelerate hiring. Defer lower-value scope. Assign dedicated resources post-MVP. | Barry Lim, Rama Moorthy |
| **R8** | **Funding for new engineering resources only confirmed until March 2027.** | Inability to retain resources needed for R1 delivery and ongoing enhancements. | Medium | 🟠 Amber | Identify funding source for post-March resource continuation. Escalate funding requirements early. | Barry Lim |
| **R9** | **Employment-change requirements may exceed delivery capacity before October UAT.** | Incomplete coverage of WD scenarios and UAT delays. | High | 🟠 Amber | Prioritise scenarios by frequency and business impact. Groom tickets early. Confirm achievable scope before committing to UAT coverage. | Imelda Mo, Rama Moorthy |
| **R10** | **WD test cases contain ambiguities and potential duplication.** | Misaligned expectations and incomplete testing coverage. | Medium | 🟠 Amber | Validate scenario-based approach with WD. Conduct walkthrough before finalising test cases. | Imelda Mo, Pow Hwee Tan |
| **R11** | **Single-character search behaviour may cause excessive resource consumption and degrade platform performance.** | Search performance degradation under production load. | Medium | 🟠 Amber | Explicitly include 1-, 2-, and 3-character searches in load testing scenarios. Validate CPU and memory impact. | Rama Moorthy |
| **R12** | **Restricted or highly classified documents may be uploaded into CIE/CAE without adequate preventative controls.** | Security breach, data leakage, compliance concerns. | High | 🔴 Red | Evaluate document classification checks before upload. Assess DOCX metadata validation options. Document compensating controls (e.g. audit logging) and risk acceptance where needed. | Victor Ong, Rama Moorthy |
| **R13** | **No proven method identified for detecting classification labels on uploaded PDFs.** | Governance gap for sensitive document handling. | High | 🔴 Red | Investigate classification detection feasibility for PDFs. If unavailable, establish compensating controls, disclaimers, and formal risk acceptance. | Victor Ong, Engineering |
| **R14** | **Stakeholders may not fully understand complexity behind Opportunities and CMM delivery.** | Unrealistic expectations, escalation risk, loss of trust. | Medium | 🟠 Amber | Include stakeholders in discovery and solution discussions. Present complexity, dependencies, and trade-offs transparently. | Adrian Ang |
| **R15** | **Job Fraction migration planning could compete with Career Compass resourcing once migration activities start.** | Resource contention affecting R1 delivery. | Medium | 🟡 Low-Med | Keep migration planning work separated until migration execution begins. Reassess allocation closer to Q1 migration timeline. | Barry Lim, Rama Moorthy |

---

### Top 5 Risks for SteerCo Attention

| Priority | Risk Description | Status |
|:---:|---|:---:|
| **1** | **Career Compass R1 timeline:** Unlikely to meet stakeholder January 2027 expectation without formal scope reset. | 🔴 Red |
| **2** | **Resource capacity:** Insufficient across concurrent workstreams (MVP, Employment Changes, Opportunities, CMM). | 🔴 Red |
| **3** | **Restricted document handling:** Upload and classification control gaps for >RSN data. | 🔴 Red |
| **4** | **PDF classification detection:** Technical capability remains unresolved across document ingestion flows. | 🔴 Red |
| **5** | **Outstanding VAPT findings:** 3 Medium vulnerabilities require verification and fix before go-live window. | 🟠 Amber |

---

### Recommended Escalations

#### Immediate (This Week)
1. **Confirm R1 Target Date:** Confirm whether January R1 is officially unachievable and prepare revised stakeholder messaging with Business Owners.
2. **Prioritise R1 Scope:** Decide whether Opportunities or CMM receives primary engineering allocation if both cannot proceed in parallel.
3. **Security Policy Guidance:** Obtain a formal security decision on handling >RSN uploads and classification enforcement mechanisms.

#### Before MVP Go-Live
1. **VAPT Close-Out:** Patch or formally accept unresolved VAPT findings.
2. **Performance Validation:** Complete 15–17 Sep performance testing and validate whether user-facing mitigations (messaging/funnel tracking) are sufficient.
3. **Employment-Change Boundary:** Finalise the subset of employment-change scenarios that can realistically be delivered before October UAT.

---

## Next Steps

1. **Immediate (This Week):** Complete active 15–17 Sep performance testing runs; patch the 3 Medium VAPT issues; prepare talking points for resetting R1 dates.
2. **Short-Term (Next 2 Weeks):** Convene security sync on >RSN document handling; groom the 4 employment change scenarios in Jira; lock R1 scope boundaries with Adrian and Business Owners.
