---
date: 2026-09-15
week: 2026-W38
type: raid-log
scope: CareerCompass Programme (MVP Launch 24–25 Nov 2026 + R1 Opportunities Marketplace)
owner: Michelle Yip
sources:
  - PM-skills-ALL-1/00-hub/risks.md
  - PM-skills-ALL-1/00-hub/open-items.md
  - outputs/meeting-notes/2026-09-14-W38-meeting-cleanup.md
  - outputs/meeting-notes/2026-09-14-W38-adrian-bi-weekly-meeting.md
  - outputs/meeting-notes/2026-09-14-W38-r1-opportunities-jam.md
  - outputs/meeting-notes/2026-09-14-W38-careercompass-perf-testing-slos-alignment.md
  - outputs/meeting-notes/2026-09-15-W38-otep-squad-sync.md
  - outputs/decisions/2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md
  - outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-review-synthesis.md
  - outputs/analyses/2026-09-14-W38-r1-opportunities-reading-sequence-and-design-priorities.md
---

# CareerCompass Consolidated RAID Log (Week 38 — 15 September 2026)

Consolidated programme RAID log tracking the two active execution spines:
1. **MVP Launch Critical Path:** Target launch 24–25 Nov 2026, gated by VAPT sign-off (~7 Nov) and the 15–17 Sep performance testing execution window.
2. **R1 Opportunities Marketplace:** Sized at 5.5 sprints, targeting mid-November development start, newly restructured around a zero-custom-ATS boundary.

---

## Executive Summary of Week 38 Shifts

- **SteerCo Governance Risk Baseline Codified:** Squad sync on 15 Sep established 15 governance-ready risks across delivery, security, operational readiness, and stakeholder alignment, identifying the Top 5 items requiring Steering Committee intervention.
- **Career Compass R1 January Launch Date Unachievable:** Adrian Ang confirmed that the January 2027 R1 delivery expectation held by external stakeholders is unviable given concurrent CMM and Opportunities complexity. Requires immediate stakeholder expectation resetting.
- **Document Classification Vulnerability (>RSN):** Critical governance risk identified regarding officers uploading documents classified higher than Restricted / Sensitive Normal (>RSN) into CIE/CAE. Compounded by lack of proven automated classification detection for PDFs. Front-end disclaimers and Pathfinder audit logging serve as interim compensating controls.
- **VAPT Initial Findings Under Active Fix:** Web application scan report received with 3 Medium, 1 Low, and 1 Informational finding. Developers are actively patching Medium items. Michelle Yip is establishing a formal risk assessment and audit justification track for findings that cannot be practically remediated without breaking product functionality.
- **AI Inference Latency & Performance Blindspot:** Dry runs exceeded target thresholds. Adrian Ang directed the team to focus on in-app user messaging and drop-off funnel tracking rather than chasing sub-7s latency targets ("Track first, then remediate"). AI journeys remain excluded from this week's 15–17 Sep load test window.
- **Engineering Headcount Funding Cliff:** Current development budget is confirmed only through March 2027, creating resourcing continuity risks for post-MVP enhancements and R1 feature delivery.
- **R1 Architecture Overhaul Locked:** Decisively killed the custom ATS build on 14 Sep. CareerCompass is positioned strictly as a discovery layer: lightweight STIPs and Gigs run via FormSG, while CV-based formal roles (SJR, Secondments, Internal Jobs) evaluate Workable integration. Live seat counters (`F-18`) and attendance rosters (`F-22`) are cut from R1.
- **Scope Cut Contingency Established:** If R1 delivery runway compresses, Internal Jobs and Secondments drop to read-only ingestion (`F-23`), protecting core Gig, STIP, and Rotation application flows.
- **Sprint 9 Dev WIP Overload:** Thomas Huchedé carries 4 concurrent In Progress issues ([OTEP-1475](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1475.md), [OTEP-1523](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1523.md), [OTEP-1573](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1573.md), [OTEP-1552](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1552.md)).

---

## 1. Top 5 Risks for SteerCo Attention

| Priority | Risk Description | Status | Core Impact |
|:---:|---|:---:|---|
| **1** | **Career Compass R1 timeline unachievable:** January 2027 timeline will miss stakeholder commitments without an immediate, transparent scope reset. | 🔴 Red | Delivery commitment missed, stakeholder dissatisfaction, erosion of executive trust. |
| **2** | **Resource capacity oversubscribed:** Engineering capacity is insufficient across MVP go-live, employment changes, R1 planning, Opportunities, and CMM concurrently, with funding ending March 2027. | 🔴 Red | Severe delivery bottlenecks and team burnout across all active initiatives. |
| **3** | **Restricted document upload governance gap:** High-classification (>RSN) files may be uploaded into CIE/CAE without automated preventative blockers. | 🔴 Red | Security non-compliance, unauthorized data storage, and audit exposure. |
| **4** | **PDF classification detection capability unresolved:** No proven technical mechanism to detect sensitivity markings on uploaded PDF resumes. | 🔴 Red | Inability to enforce automated data loss prevention at the upload boundary. |
| **5** | **Outstanding VAPT findings before go-live:** Current web application scan includes 3 Medium vulnerabilities that must be patched and retested before launch. | 🟠 Amber | Potential delay to ~7 Nov VAPT sign-off or requirement for formal leadership risk acceptance. |

---

## 2. Recommended Governance Escalations

### Immediate (This Week)
1. **Reset January R1 Expectations:** Confirm formally that January 2027 R1 is unachievable. Prepare revised stakeholder messaging and roadmap trade-offs with Business Owners (Adrian Ang).
2. **Prioritise R1 Delivery Tracks:** Conduct a prioritisation workshop with Business Owners to decide whether Opportunities or CMM receives primary engineering allocation if both cannot proceed concurrently (Adrian Ang with Business Owners).
3. **Security Policy Determination on >RSN Uploads:** Obtain a binding security decision regarding acceptable risk, front-end disclaimers, and audit logging sufficiency for document uploads (Victor Ong, Rama Moorthy).

### Before MVP Go-Live (Target: ~7 Nov Sign-off)
1. **VAPT Close-Out or Formal Acceptance:** Remediate the 3 Medium findings; prepare documented risk assessments for any findings that cannot be remediated without degrading product capabilities (Michelle Yip, Rama Moorthy).
2. **Performance Testing Baseline & User Messaging:** Complete the 15–17 Sep load test window; confirm whether latency requires user-facing processing messaging and funnel instrumentation (Rama Moorthy, Imelda Mo).
3. **Employment-Change Boundary Confirmation:** Finalise the achievable subset of employment-change user stories across the 4 core scenarios before committing to October UAT (Imelda Mo, Rama Moorthy).

---

## 3. Governance-Ready Risk Register (OTEP Squad Sync Baseline)

| ID | Risk Description | Impact | Likelihood | Rating | Mitigation | Owner |
|:---:|---|---|:---:|:---:|---|---|
| **R1** | **CAE/CIE performance does not meet expected response times under load.** Dry runs exceeded target thresholds; baseline unknown. | Poor user experience, reduced adoption, user drop-off during CV upload. | High | 🟠 Amber | Complete load testing across file sizes/types. Establish realistic baseline. Implement user messaging during processing. Monitor abandonment rates. | Rama Moorthy |
| **R2** | **User drop-off during CV processing is not understood and may impact feature adoption.** | Low CAE usage despite technically successful deployment. | Medium | 🟠 Amber | Introduce funnel tracking between upload, processing, competency generation, and completion events. Validate latency impact before redesigning UX. | Imelda Mo |
| **R3** | **Open VAPT findings remain unresolved before go-live.** Current findings include 3 Medium, 1 Low, and 1 Informational issue. | Security vulnerabilities delay go-live or force rushed risk acceptance. | High | 🟠 Amber | Prioritise remediation. Track ETA for fixes. Coordinate rescans with NCS. Escalate findings that cannot be practically remediated. | Rama Moorthy |
| **R4** | **Certain VAPT findings may not be fully remediable without affecting product functionality** (e.g. analytics dependencies). | Requirement for formal risk acceptance or audit justification. | Medium | 🟠 Amber | Assess each finding for operational impact. Prepare documented justification and formal risk assessment where fixes are not feasible. | Michelle Yip, Rama Moorthy |
| **R5** | **January Career Compass R1 timeline appears unrealistic** based on current understanding of CMM and Opportunities complexity. | Delivery commitment missed, stakeholder dissatisfaction, perception of poor transparency. | High | 🔴 Red | Engage Business Owners immediately. Re-baseline scope. Present complexity and sequencing constraints. Establish revised roadmap and expectations. | Adrian Ang |
| **R6** | **No prioritisation decision between Opportunities, CMM, and other R1 backlog items.** | Team effort fragmented across competing workstreams. | High | 🔴 Red | Conduct prioritisation workshop with Business Owners. Agree sequencing approach and scope reduction options. | Adrian Ang with Business Owners |
| **R7** | **Engineering capacity insufficient to support MVP go-live, employment changes, R1 planning, Opportunities, and CMM concurrently.** | Resource bottleneck leading to delays across multiple initiatives. | High | 🔴 Red | Accelerate hiring. Defer lower-value scope. Assign dedicated resources post-MVP. | Barry Lim, Rama Moorthy |
| **R8** | **Funding for new engineering resources only confirmed until March 2027.** | Inability to retain resources needed for R1 delivery and ongoing enhancements. | Medium | 🟠 Amber | Identify funding source for post-March resource continuation. Escalate funding requirements early. | Barry Lim |
| **R9** | **Employment-change requirements may exceed delivery capacity before October UAT.** | Incomplete coverage of WD scenarios and UAT delays. | High | 🟠 Amber | Prioritise scenarios by frequency and business impact. Groom tickets early. Confirm achievable scope before committing to UAT coverage. | Imelda Mo, Rama Moorthy |
| **R10** | **WD test cases contain ambiguities and potential duplication.** | Misaligned expectations and incomplete testing coverage. | Medium | 🟠 Amber | Validate scenario-based approach with WD. Conduct walkthrough before finalising test cases. | Imelda Mo, Pow Hwee Tan |
| **R11** | **Single-character search behaviour may cause excessive resource consumption and degrade platform performance.** | Search performance degradation under production load. | Medium | 🟠 Amber | Explicitly include 1-, 2-, and 3-character searches in load testing scenarios. Validate CPU and memory impact. | Rama Moorthy |
| **R12** | **Restricted or highly classified documents may be uploaded into CIE/CAE without adequate preventative controls.** | Security breach, data leakage, compliance concerns. | High | 🔴 Red | Evaluate document classification checks before upload. Assess DOCX metadata validation options. Document compensating controls and risk acceptance. | Victor Ong, Rama Moorthy |
| **R13** | **No proven method identified for detecting classification labels on uploaded PDFs.** | Governance gap for sensitive document handling. | High | 🔴 Red | Investigate classification detection feasibility for PDFs. If unavailable, establish compensating controls, disclaimers, and formal risk acceptance. | Victor Ong / Engineering |
| **R14** | **Stakeholders may not fully understand complexity behind Opportunities and CMM delivery.** | Unrealistic expectations, escalation risk, loss of trust. | Medium | 🟠 Amber | Include stakeholders in discovery and solution discussions. Present complexity, dependencies, and trade-offs transparently. | Adrian Ang |
| **R15** | **Job Fraction migration planning could compete with Career Compass resourcing once migration activities start.** | Resource contention affecting R1 delivery. | Medium | 🟡 Low-Med | Keep migration planning work separated until migration execution begins. Reassess allocation closer to Q1 migration timeline. | Barry Lim, Rama Moorthy |

---

## 4. Programme Architecture & Tactical Delivery Risks

| # | Risk | Impact | Status / Mitigation | Owner |
|:---:|---|---|---|---|
| **R16** | **VAPT technical triage engineer unassigned.** Business Owner Christopher Woo requires engineering to name a dedicated technical triage lead. | Remediation window compresses, putting ~7 Nov sign-off and 24 Nov launch at risk. | 🔴 **High / Open.** Standup today is the forcing function. If unassigned by Wednesday, escalate directly to Adrian Ang. | Michelle Yip / Adrian Ang |
| **R17** | **AI resume upload & competency inference excluded from performance testing.** Compute-intensive journey omitted from 15–17 Sep test window. | System stability under launch spikes remains unvalidated for the primary AI differentiator. | 🔴 **High / Open.** Delivery Team + AI/CAE team assigned to define latency and load benchmarks by 22 Sep. | Delivery Team / AI Team |
| **R18** | **Performance testing business sign-off on hold.** Business Owners (Xian Zhang, Christopher Woo) pushed back on lack of empirical benchmarks. | Official acceptance of test results delayed until narrative and journey mappings are published. | 🟡 **Medium / Open.** Rama Moorthy publishing Confluence page with endpoint distributions by 16 Sep; review by 19 Sep. | Rama Moorthy |
| **R19** | **Sprint 9 engineering WIP overload on single developer.** Thomas Huchedé carries 4 In Progress tickets simultaneously ([OTEP-1475](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1475.md), [OTEP-1523](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1523.md), [OTEP-1573](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1573.md), [OTEP-1552](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1552.md)). | Context switching delays completion of performance optimization during the active test window. | 🟡 **Medium / Open.** Priority sequence agreed at standup; focus on perf stability before auth logging. | Tech Lead / Michelle Yip |
| **R20** | **R1 CV retention and purge policy undefined.** R1 candidate pack download (`F-11`) stores sensitive officer CVs without agreed auto-deletion lifecycle. | Critical Blocker #1 from PRD review synthesis. Breaches GovTech data governance and security requirements. | 🔴 **High / Open.** Policy draft assigned to Tan Pow Hwee and GovTech Security POC with a 02 Oct target. | Tan Pow Hwee / GovTech Sec |
| **R21** | **R1 synchronous batch ZIP export risks gateway timeouts.** Downloading candidate packs synchronously for 80+ applicants triggers HTTP 504 timeouts. | Critical Blocker #2 from PRD review synthesis. Agency HR unable to retrieve applicant batches. | 🔴 **High / Open.** Tech Lead assigned to redesign batch download as an asynchronous job with pre-signed S3 download links. | Tech Lead |
| **R22** | **Workable integration dependencies and tenant boundaries.** R1 long-term ATS routing depends on OGP Workable API capabilities and C@G tenant sharing rules. | If Workable requires e-tender procurement or separate tenant provisioning, hybrid ATS architecture slips into 2027. | 🟡 **Medium / Open.** Discovery sync scheduled with Daryl Snow (OGP PM) by 18 Sep. Barry Lim checking C@G tenant rules by 25 Sep. | Michelle Yip / Barry Lim |
| **R23** | **FormSG structural limitations for STIPs & Gigs.** FormSG lacks two-way webhooks and creates disconnected UX. | Application status tracking remains blind for lightweight opportunities. | 🟢 **Low / Mitigated.** Accepted as part of 14 Sep architecture lock. Live seat counters (`F-18`) and rosters (`F-22`) cut cleanly. | Michelle Yip / Barry Lim |
| **R24** | **Single designer capacity across active streams.** Li Ting Kway owns design across CMM and R1. | Design handoff bottleneck delays mid-November engineering kickoff. | 🟢 **Low / Mitigated.** Mitigated 14 Sep via strict cut-lines: candidate review boards (`F-07`), form builders, and rosters barred from design scope. | Li Ting Kway / Michelle Yip |
| **R25** | **CIE PM vacancy and Day 2 operations gap.** CIE stream lacks a dedicated PM, creating ACSO compliance and operational handover risks. | Incomplete audit trail and unclear incident response routing post-launch. | 🟡 **Medium / Open.** Partnering with Jace Tan on Day 2 support runbook by 18 Sep. Escalation path to PSD leadership active. | Jace Tan / Michelle Yip |
| **R26** | **Key-person leave during critical launch runway.** Adrian Ang away 5–9 Oct (VAPT midpoint); Jace Tan away 26 Oct–5 Nov (pre-launch cutover). | Decision bottlenecks and operational sign-off delays during final countdown. | 🟡 **Medium / Mitigated.** Coverage matrix confirmed: Adrian, Rama, Barry, Pow Hwee share escalation cover. | Adrian Ang / Jace Tan |
| **R27** | **Source data drift and identity lifecycle edge cases.** NRIC-based resolution operates successfully, but upstream HRPS/Cumulus data anomalies remain unmonitored. | Inconsistent records surface post-launch via user complaints. | 🟢 **Low / Deferred.** Formally descoped to R1.x on 10 Sep. Removes immediate blocker status from MVP launch. | Rama Moorthy / Michelle Yip |

---

## 5. Assumptions

| # | Assumption | Status | If Wrong |
|---|---|---|---|
| **A1** | **100-VU baseline and 100-concurrent endurance tests provide sufficient assurance for MVP launch.** | ✅ **Validated (14 Sep).** Locked with Rama Moorthy; simulates 100% login during ramp-up followed by realistic browsing split. | System risks unexpected scaling degradation during agency onboarding drives; event-driven pre-scaling protocol mitigates this. |
| **A2** | **Keycloak perf test accounts are operational in staging/UAT.** | ✅ **Validated (15 Sep).** [OTEP-1531](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1531.md) closed to Done in Jira by Thomas Huchedé. | Simulated load tests fail at the authentication gateway. |
| **A3** | **Zero custom ATS build is the binding architecture for CareerCompass.** | ✅ **Locked (14 Sep).** Agreed with Barry Lim and Adrian Ang. Core product owns discovery; back-office workflow delegates to external systems. | Scope expands by 5+ sprints, blowing through the mid-November delivery window. |
| **A4** | **Ingestion fallback (`F-23`) can absorb delivery pressure on Internal Jobs and Secondments.** | ✅ **Locked (14 Sep).** Documented with Adrian Ang; fallback protects Gigs, STIPs, and Rotations from being blocked. | Full feature set must be cut entirely if integration slips. |
| **A5** | **Workable pilot can be leveraged via existing OGP / C@G arrangements without a new central tender.** | 🟡 **Open.** To be validated with Daryl Snow on 18 Sep and C@G on 25 Sep. | Long-term formal role application tracking requires alternative back-office tooling or remains on FormSG. |
| **A6** | **Workforce Development (WD) will accept a standardized 5-field FormSG template.** | 🟡 **Open.** Template lock targeted for 23 Sep. | Agencies demand custom application fields, breaking UI consistency and manual intake pipelines. |
| **A7** | **POCDEX UAT sign-off (195/195 test cases) remains stable without regressions in Sprint 9.** | ✅ **Validated (11 Sep).** All test cases signed off; no open blockers in CC-UAT board. | Regressions force re-opening test cycles during the active VAPT window. |
| **A8** | **Descoping Employment Profile Changes to R1.x leaves the 24–25 Nov MVP launch intact.** | ✅ **Locked (10 Sep).** Decision doc ratified; focus stays on core Pathfinder mobility and discovery. | Unplanned scope injection derails November launch gates. |

---

## 6. Issues (Active Action Items)

| # | Issue | Owner | Deadline | Priority | Status |
|---|---|---|:---:|:---:|:---:|
| **I-01** | Update Master PRD Sections 2.3 & 3.3 to lock ingestion fallback and cut custom ATS scope. | Michelle Yip | 15 Sep 2026 | 🔴 High | In Progress (Due Today) |
| **I-02** | Secure named VAPT technical triage engineer from engineering leadership. | Michelle Yip / Adrian Ang | 16 Sep 2026 | 🔴 High | Open (Standup check-in) |
| **I-03** | Share Confluence page detailing journey distribution models, percentages, and endpoint mappings. | Rama Moorthy | 16 Sep 2026 | 🔴 High | Open (Awaiting Confluence page) |
| **I-04** | Finalise SLO proposal and threshold justifications after input from architecture team. | Rama Moorthy | 17 Sep 2026 | 🔴 High | Open |
| **I-05** | Schedule Workable discovery sync with Daryl Snow (OGP PM) on CUMULUS and API fit. | Michelle Yip / Tech Lead | 18 Sep 2026 | 🔴 High | Open |
| **I-06** | Define performance success criteria and latency targets for AI resume upload and competency inference. | Delivery Team + AI/CAE Team | 22 Sep 2026 | 🔴 High | Open |
| **I-07** | Engage leadership and agency stakeholders to formally reset January R1 launch date expectation. | Adrian Ang | 19 Sep 2026 | 🔴 High | Open |
| **I-08** | Follow up with security and compliance stakeholders regarding restricted document classification (>RSN). | Victor Ong | 22 Sep 2026 | 🔴 High | Open |
| **I-09** | Track VAPT findings requiring formal risk assessment updates or risk acceptance. | Michelle Yip | 22 Sep 2026 | 🟡 Medium | Open |
| **I-10** | Groom Jira tickets and draft test cases across the 4 agreed employment change scenarios. | Imelda Mo | 22 Sep 2026 | 🟡 Medium | Open |
| **I-11** | Lock STIPs & Gigs FormSG schema (5 fixed fields + 1 optional prompt) with WD policy team. | Michelle Yip / Li Ting Kway | 23 Sep 2026 | 🔴 High | Open |
| **I-12** | Clarify C@G Workable tenant sharing rules and whitelisting constraints. | Barry Lim | 25 Sep 2026 | 🔴 High | Open |
| **I-13** | Rebalance Thomas Huchedé's Sprint 9 WIP overload (4 tickets In Progress). | Tech Lead / Michelle Yip | 15 Sep 2026 | 🟡 Medium | In Progress (Squad Sync) |
| **I-14** | Define CV retention, encryption, and 90-day auto-deletion rules for candidate pack downloads. | Tan Pow Hwee / GovTech Sec POC | 02 Oct 2026 | 🟡 Medium | Open |
| **I-15** | Identify post-March 2027 funding continuation for engineering resources. | Barry Lim | 25 Sep 2026 | 🟠 Amber | Open |
| **I-16** | Review proposed performance testing journey percentages on Confluence. | Business Stakeholders | 19 Sep 2026 | 🟡 Medium | Open |
| **I-17** | Publish formal two-horizon roadmap (R1 interim FormSG vs long-term Workable). | Michelle Yip / Adrian Ang | 28 Sep 2026 | 🟡 Medium | Open |

---

## 7. Dependencies

| # | Dependency | Needed By | What Breaks If It Fails | Escalation Trigger | Status |
|---|---|---|---|---|:---:|
| **D1** | **Keycloak perf test accounts ([OTEP-1531](file:///Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/jira-sync/Sprint-42637-OTEP-Pathfinder-Sprint-9/OTEP-1531.md))** | Rama Moorthy | Performance test scripts cannot authenticate virtual users. | Closed 15 Sep. | ✅ **Done** |
| **D2** | **Confluence journey distribution page** | Business Stakeholders | Formal sign-off on performance testing methodology remains blocked. | Not published by 16 Sep EOD. | 🟡 **Pending** |
| **D3** | **Named VAPT triage engineer** | Christopher Woo (BO) / Programme Team | Incoming VAPT findings sit unaddressed, compressing remediation window before 7 Nov. | Not assigned by end of 16 Sep standup. | 🔴 **Critical** |
| **D4** | **OGP Workable API specs & CUMULUS fit** | Barry Lim / Tech Lead | Architecture option selection and Sprint 1 backend planning stall. | Daryl Snow meeting not booked by 18 Sep. | 🟡 **Active** |
| **D5** | **C@G Workable tenant confirmation** | Barry Lim | Database schema and HR authentication architecture cannot finalize. | Not confirmed by 25 Sep. | 🟡 **Active** |
| **D6** | **WD universal FormSG schema sign-off** | Li Ting Kway | UI design for STIP and Gig application cards cannot be finalized. | Not locked by 23 Sep. | 🟡 **Active** |
| **D7** | **AI/CAE latency and throughput targets** | Delivery Team | AI resume parsing and competency inference remain completely unbenchmarked. | Targets unowned by 22 Sep. | 🔴 **Critical** |
| **D8** | **GovTech Security sign-off on CV auto-purge** | Tech Lead | Engineering build of candidate pack download card (`F-11`) blocked. | Policy unfinalized by 02 Oct. | 🟡 **Active** |
| **D9** | **Security policy on >RSN document handling** | Victor Ong | Document upload compliance remains an unmitigated audit risk. | Not resolved before launch gate sign-off. | 🔴 **Critical** |
| **D10** | **Post-March 2027 resource funding extension** | Barry Lim | Inability to retain engineering team for post-MVP enhancements and R1. | No funding plan by 25 Sep. | 🟠 **High** |

---

## 8. Critical Path & Decision Gates

```
[15–17 Sep] Performance Testing Window (100 VU Baseline, Endurance, Stress)
     │
     ├──► [15 Sep] Master PRD Sec 2.3 & 3.3 Updated (Zero ATS, Ingestion Fallback)
     ├──► [16 Sep] Confluence Journey Mapping Published & VAPT Triage Owner Escalation
     ├──► [17 Sep] Performance Test Execution Results Captured
     ├──► [18 Sep] Workable Technical Discovery w/ Daryl Snow (OGP)
     │
[19–25 Sep] Reset January R1 Stakeholder Expectations & Prioritise Scope (CMM vs Opps)
     │
[21–25 Sep] VAPT Interim Findings Triage & AI Performance Benchmark Definition
     │
[02 Oct] CV Retention & Auto-Purge Policy Signed Off (GovTech Security)
     │
[Mid-Nov] R1 Opportunities Sprint 1 Dev Kickoff (5.5-Sprint Runway)
     │
[24–25 Nov] CareerCompass MVP Public Launch (OTG Pathfinder)
```

---

*Generated: 2026-09-15 (Week 38)*  
*Maintained in: `outputs/analyses/2026-09-15-W38-careercompass-raid-consolidated.md`*  
*Related tactical hub: `PM-skills-ALL-1/00-hub/risks.md`*
