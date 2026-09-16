# Weekly Executive Debrief: CareerCompass / OTEP
**Review window: 4 to 11 September 2026 (Week 37)**

---

## 1. Executive Summary

CareerCompass made a meaningful transition this week from **integration/UAT preparation into release-readiness execution**:
1. **POCDEX integration** completed UAT with **195 passed test cases**, and the POCDEX sign-off report was formally issued.
2. **VAPT is moving into execution**, with Purchase Orders issued for both CIE and the POCDEX API, AWS console access provisioned, and daily VAPT coordination established. However, technical resource ownership remains visibly unsettled.
3. **CareerCompass R1 Opportunities scope is locked** for executive alignment on Monday 14 September (1:00 PM with Adrian Ang and Li Ting Kway). We established a tight **5.5-sprint MVP boundary** (8 features) anchored in empirical data from the Gigs/SJR analysis (89% unrecorded outcomes, 90% applicant churn), while defining the operational boundary with FormSG.
4. **The primary launch risk is performance-testing readiness and methodology** ahead of the fixed 15 to 17 September test window, driven by unresolved assumptions around workload baselines, endurance duration (2h vs 12h), persona diversity, and downstream dependency commitments.
5. **CIE product management void surfaced as a major governance risk:** Victor Ong confirmed that CIE currently has no assigned Product Manager, creating an accountability gap for ACSO and GovAssure compliance evidence.

**Most important actions for next week:**
- Lock the performance-test methodology and dependency commitments before 15 September.
- Ship the OTG performance test data file to unblock the weekend production data load.
- Secure executive sign-off from Adrian Ang on the 5.5-sprint R1 Opportunities scope boundary.
- Close the remaining VAPT and CIE resource ownership gaps.

---

## 2. Key Developments

### A. POCDEX integration moved to a genuine UAT sign-off state 🟢

#### What happened
The POCDEX integration was formally exercised during CareerCompass UAT. The sign-off report confirms **195 passed test cases**, and Rama issued the formal verification report.

The Teams working group clarified that UAT sign-off is explicitly tied to **21 personas**, cross-referenced in the POCDEX test plan.

There is also increasing alignment on the API contract. Specifically, Adrian confirmed that **Officer, Employment, and Job APIs will carry Last Updated Date**, while the Resolve API does not, which is now aligned in the CareerCompass POCDEX requirements document.

#### Why it matters
This is a material readiness milestone. POCDEX is no longer merely a dependency being designed; there is now **test evidence plus an explicit sign-off mechanism**.

The remaining question is no longer "does the integration work?", but "does the integration contract fully cover the operational and lifecycle needs of Compass post-launch?"

#### Classification
**Progress / confirmed decision**

#### Owners
Rama Moorthy, Huiting Lian, Adrian Ang, Johnny Lim, and the Compass engineering squad.

#### Source channels & threads
- **Teams:** `Compass Working Group`
- **Outlook:** `CareerCompass (Compass): POCDEX Integration Verification & Sign-off`
- **Outlook:** `Career Compass: POCDEX Data Requirements`
- **SharePoint:** `Data Sharing Approval.docx` (updated 8 Sep); `POCDEX_Compass Test Plan_(downstream sharing).xlsx` (updated 10 Sep)
- **Calendar:** `POCDEX DO x Compass weekly sync` (9 Sep)

---

### B. Performance testing is now the critical path 🟠

#### What happened
Performance testing is scheduled for **15 to 17 September**. The readiness review covers workload models, dependency readiness, environment readiness, monitoring/logging, and support arrangements.

The proposal uses a **100-concurrent-user baseline**, but the methodology has continued to evolve.

The squad challenged using legacy OTG traffic as the load baseline. Jobelle relayed Jace's direction that Compass load should reflect **the agencies expected in the first launch wave**, rather than historical OTG averages. Product also established that response criteria must benchmark against public sector procurement standards rather than arbitrary 2-second targets.

The test plan converged on **excluding Learn More / deep-link click-outs** from performance testing, which Rama confirmed following consultation with CSC.

#### Why it matters
This is the biggest immediate launch risk because the test must answer a senior-stakeholder question:

> **"Can the launch configuration support the actual first-wave operating profile?"**

Several methodology questions still require resolution before execution:
- **Endurance duration:** 2 hours vs 12 hours is still being debated as of 11 Sep.
- **Persona & data diversity:** The current 21-persona set may test too little data variety; Rama noted that additional personas would improve code-path coverage, whereas current results risk serving as a warm-cache proxy.
- **Environment translation:** Production sizing is materially different from the performance-test environment; results cannot simply be treated as 1:1 production capacity without calibration.
- **External dependencies:** POCDEX, JumpStart, CSC/DLE, CFT, and other services all need coordinated test windows.
- **Search workload assumptions:** Active discussions continue around search behavior, query limits, and 1-character search indexing.

#### Classification
**Risk / open decision**

#### Owners
Rama Moorthy (coordination); Adrian Lo and engineering (methodology and architecture); Pow Hwee and product teams (workload assumptions); downstream dependency owners.

#### Source channels & threads
- **Outlook:** `Compass Performance Testing Plan (15-17 Sep 2026)`
- **Outlook:** `Performance Testing Proposal for Compass`
- **Teams:** `Compass is doing a performance load test during 15-17 sep`
- **Calendar:** `Performance Testing Preparation & Readiness Review` (8-11 Sep daily readiness sessions)

---

### C. VAPT is moving, but resourcing is not clean 🟠

#### What happened
The revised VAPT schedule sets a **14 September 2026** kickoff for the POCDEX API assessment.

Execution progress includes:
- **Two Purchase Orders issued:**
  - CIE: `PMOPSDEPO26000432`
  - POCDEX API: `PMOPSDEPO26000433`
- AWS console access and security roles provisioned for the POCDEX VAPT.
- Daily VAPT coordination scheduled on the team calendar.
- Jobelle monitored the first assessment for Compass/CIE on 7 Sep.

However, on 10 Sep, Christopher raised that there was **no clear resourcing for VAPT**.

#### Why it matters
Technical prerequisites are progressing, but **named personnel ownership is lagging behind infrastructure readiness**. This creates the exact conditions for a last-minute launch blocker.

#### Classification
**Progress + blocker risk**

#### Owners
Jobelle Lim / PSD coordination; NCS for assessment execution; technical owners including Adrian Ang, Rama Moorthy, and infrastructure leads.

#### Source channels & threads
- **Teams:** VAPT resourcing thread
- **Outlook:** `Career Compass VAPT Schedule`
- **Outlook:** `POCDEX API VAPT`
- **Calendar:** `Daily Activities Sync for VAPT`

---

### D. R1 Opportunities scope locked for executive review 🟢

#### What happened
Product and design finalized the **CareerCompass R1 Opportunities MVP package**, scheduled for executive review on Monday 14 September (1:00 PM) with Adrian Ang and Li Ting Kway:
- **5.5-sprint delivery budget:** Encompassing the top 8 RICE-ranked features (F-09 Structured Job Grade, F-03 Supervisor Acknowledgment, F-05 Native CV Upload, F-07 Light ATS & Early Reject, F-01 Quick-Post Gig Template, F-11 Batch ZIP Export, F-13 Secondment Tag, F-15 Secondment Terms Block).
- **Hard data anchor from Gigs/SJR analysis:** Grounded the problem statement in empirical findings: **89% of SJR postings have no recorded outcome**, **90% candidate churn** (only 10% repeat applicants), and **1 single officer filed 112 applications in 2026** due to missing grade gates.
- **Approving moderator dropped:** Confirmed there is zero policy requirement for an approving moderator in Gigs or SJRs, eliminating an unnecessary approval bottleneck.
- **FormSG operational boundary:** Workforce Development (WD) provides an adaptable FormSG template for lightweight STIPs/Gigs. Compass focuses engineering strictly on substantive long-hour roles (SJRs, Internal Jobs, Secondments) with native CV upload and status tracking.
- **Four strategic trade-offs proposed:** Form flexibility vs delivery speed; split apply flow vs universal native apply; platform ownership vs file security liability; self-declaration vs HRMS integration complexity.

#### Why it matters
Prevents scope creep and avoids rebuilding FormSG inside Compass, keeping engineering focused on the critical 80% blocker (candidate CV collection and status tracking for substantive rotations).

#### Classification
**Strategic milestone / executive alignment**

#### Owners
Michelle Yip (PM Lead), Li Ting Kway (Design Lead), Adrian Ang (Product Lead review).

#### Source channels & working files
- [Executive Brief & Monday Alignment](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-executive-summary.md)
- [R1 MVP Scope Document](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-mvp-scope-doc.md)
- [Problem Synthesis & RICE Matrix](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-problems-hypotheses-rice.md)
- [RICE Scoring Spreadsheet](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-rice-scoring.csv)

---

### E. Go-live data readiness is becoming a formal workstream 🟡

#### What happened
Rama initiated a dedicated **Data Readiness for Compass Go-Live** exercise on 7 Sep, asking domain leads to confirm production datasets across:
- Latest confirmed ingestion sets and reference tables
- Competency frameworks and taxonomies
- Opportunity records from pilot agencies
- Dependencies on Core services
- Final validation schedule for the production dataset

Adrian aligned the sequencing: **complete VAPT and performance tests first, then validate the production dataset**.

#### Why it matters
The release sequence has an explicit dependency chain:
`VAPT → Performance Testing → Production Data Validation → Go-Live Authorization`

#### Classification
**Progress / release dependency**

#### Owners
Rama Moorthy, Imelda Mo, Adrian Ang, Pow Hwee, and individual data-domain owners.

#### Source channels & threads
- **Outlook:** `Data Readiness for Compass Go-Live`
- **SharePoint:** `01 - Compass Go-live Checklist v0.1 - MVP.xlsx` (updated 11 Sep)
- **SharePoint:** `Data Sharing Approval.docx` (updated 8 Sep)

---

### F. Architecture and scalability reviewed before launch 🟢

#### What happened
On 9 Sep, the squad conducted a dedicated **Career Compass Architecture & Scalability Review**, evaluating:
- Key architectural decisions and MVP technical constraints
- Post-MVP scalability for wider agency onboarding
- Cross-team dependencies (POCDEX, JumpStart, CSC, CFT)
- Technical debt and remediation plans

Email discussions confirmed that an initial load test will run across external dependencies, followed by a second verification round if downstream interface adjustments occur.

#### Classification
**Progress / risk mitigation**

#### Source
- **Calendar & Outlook:** `Career Compass Architecture & Scalability Review` (9 Sep)

---

### G. CIE governance and product ownership void surfaced 🔴

#### What happened
During the 11 Sep squad sync, Victor Ong confirmed that **CIE currently has no assigned Product Manager**.

#### Why it matters
Without a dedicated PM to manage CIE requirements, validate compliance evidence, and represent the product at ACSO/GovAssure checkpoints, project governance is exposed. Risk assessment ownership has been temporarily split (Rama owns Compass, Victor owns CIE technical assessment, Michelle owns Project/Data risks), but long-term product accountability requires urgent leadership assignment.

#### Classification
**Governance blocker / organizational risk**

#### Owners
Victor Ong, Jace Tan, PSD Leadership.

---

## 3. Decisions Made

| Decision | Owner / Decision Maker | Impact & Strategic Alignment |
|---|---|---|
| **POCDEX integration UAT formally signed off** based on 195 passed test cases | Rama Moorthy / POCDEX + Compass squads | Moves POCDEX out of unvalidated status into release readiness |
| **UAT sign-off scope is 21 personas** as the formal reference set | POCDEX / Compass UAT leads | Defines current UAT evidence boundary; does not imply exhaustive population coverage |
| **Officer, Employment, and Job APIs carry Last Updated Date; Resolve does not** | POCDEX + Compass technical teams | Establishes API contract for freshness-sensitive data |
| **Learn More / deep-link click-out excluded from performance testing** | Rama Moorthy (after CSC confirmation) | Keeps load testing focused strictly on Compass-controlled workloads |
| **VAPT Purchase Orders issued for CIE and POCDEX API** | PSD Procurement / Project Team | Removes procurement blocker; execution proceeds |
| **Performance testing execution fixed for 15 to 17 September** | Compass Delivery Squad | Establishes immediate pre-go-live technical gate |
| **Benchmark performance testing criteria against government tender standards** | Michelle Yip, Rama Moorthy | Replaces arbitrary 2s targets with defensible public sector standards |
| **Decouple performance testing scenarios across distinct user workloads** | Engineering Squad consensus | Isolates Search, Filter, Browse, and Pagination for clear bottleneck detection |
| **Defer platform-wide search standardization for MVP** | Michelle Yip | Protects sprint delivery; future search work will be grounded in PostHog data |
| **Lock CareerCompass R1 Opportunities boundary at 5.5 sprints (8 features)** | Michelle Yip | Delivers end-to-end selection pipeline without scope creep |
| **Adopt split apply flow: WD FormSG for gigs, native CV for substantive roles** | Michelle Yip | Avoids building custom form builders for short tasks; solves long-hour CV collection |
| **Drop central approving moderator gate from product scope** | Michelle Yip | Confirms zero policy need; keeps selection 100% agency-owned |
| **One-way outbound link model from OTG to Compass for R1** | Michelle Yip | Rejects complex bi-directional data synchronization to preserve timeline |

---

## 4. Risks & Blockers

| Risk / Blocker | Severity | Owner | Operational Mitigation |
|---|---|---|---|
| **Performance methodology still unsettled** (workload basis, 2h vs 12h endurance, persona mix, dependency windows) | 🔴 High | Rama Moorthy, Adrian Lo | Lock methodology in the 11 Sep 17:00 readiness review; benchmark against tender baselines |
| **VAPT resource and remediation ownership unclear** | 🔴 High | Jobelle Lim, Adrian Ang, Rama Moorthy | Formally assign triage, support, and go/no-go decision owners before 14 Sep |
| **CIE lacks an assigned Product Manager** | 🔴 High | Victor Ong, Jace Tan | Escalate to PSD leadership for urgent PM resource assignment |
| **OTG performance test data file delivery** | 🔴 High | Michelle Yip, Jobelle Lim | Complete and publish file to unblock 12 to 14 Sep weekend production load |
| **21 personas may not provide realistic data diversity** | 🟡 Medium | Adrian Lo, Rama Moorthy | Profile whether queries behave as a warm-cache proxy; expand dataset if needed |
| **Production vs performance environment sizing mismatch** | 🟠 High | Architecture / Infra Leads | Explicitly document translation formula between test specs and production specs |
| **Day 2 Operations controls and support SOPs undefined** | 🟠 High | Rama Moorthy, Jace Tan | Deliver draft Day 2 framework by 18 Sep; SGEMS runbook shared by 15 Sep |
| **Search refactoring dropped typo tolerance** | 🟡 Medium | Thomas Huchede | Deliver old vs new behavior comparison matrix on 12 Sep before merging code |
| **Keycloak database scalability under ABLR audit logging** | 🟡 Medium | Thomas Huchede | Evaluate DB capacity impact from 11 Sep 14:00 technical sync |
| **Confidential file upload blocking (> RSN)** | 🟡 Medium | Victor Ong, Michelle Yip | Investigate central inspection tools; prepare user warning copy as interim control |

---

## 5. Open Questions

### Before Performance Testing (15 September)
1. **Is endurance testing 2 hours or 12 hours?** Requires sign-off between Rama and Jace.
2. **What is the finalized workload model?** First-wave agency onboarding volume vs steady-state concurrency.
3. **Are 21 personas sufficient?** Confirm whether additional personas are required to test non-cached query paths.
4. **How are test results translated to production sizing?** Document the scaling multiplier between environments.
5. **Have external dependencies confirmed support windows?** POCDEX, JumpStart, CSC/DLE, and CFT commitments.

### Before Go-Live
6. **Does the Employment Profile Changes contract cover all lifecycle edge cases?** Verify effective dates, movement history, and reconciliation logic.
7. **Who owns post-launch incident triage across source systems vs Compass?**
8. **What is the agreed failure workflow when POCDEX data and Compass data disagree?**
9. **Who owns VAPT remediation decisions under compressed timelines?**
10. **Who will be appointed as Product Manager for CIE?**

---

## 6. OTG Lessons for Career Compass

| OTG Current Behavior | Observed Pain Point | Implication for Career Compass | Recommended Design Principle |
|---|---|---|---|
| **Two-week batch account refreshes** | Officers wait up to 14 days for accounts to appear | Batch synchronization causes unacceptable access delays | **Use real-time profile and authentication checks** rather than inheriting batch schedules. |
| **SaaS operating model differences** | Misaligned architecture and usage patterns | Historical OTG traffic is not a clean proxy for Compass demand | **Model Compass load on first-wave agency populations**, not legacy OTG traffic. |
| **Unclear SaaS security ownership** | Unclear whether ASM applies to external tools | Ambiguity creates operational friction | **Name security and service owners explicitly** in the Day 2 support framework. |
| **Manual account troubleshooting** | Heavy manual support load on external teams | Support escalation paths break down | **Treat support SOPs and diagnostic runbooks as release gates**, not post-launch cleanups. |
| **Inflexible forms forced FormSG workarounds** | 89% of SJR outcomes unlogged; tools abandoned | Postings fragmented across external links | **Build standardized CV upload and candidate rosters natively in Compass** for substantive roles. |
| **Unstructured grade requirements** | 1 officer filed 112 applications; spray-and-pray noise | HR inundated with ineligible CVs | **Implement structured job grade tags (F-09)** on role cards before applicants submit. |
| **Obsolete approving moderator field** | 100% blank moderator IDs all-time | Phantom workflow steps created confusion | **Drop central moderator approvals;** keep hiring decisions 100% with posting teams. |

---

## 7. Readiness Assessment by Workstream

### UAT: 🟢 Green (Integration) / 🟡 Amber (Broader User Coverage)
- POCDEX integration UAT formally signed off with 195 passing test cases across 21 personas.
- Broader user usability testing still experiences profile and access hurdles.
- Employment Profile Changes API business semantics are undergoing final validation.

### VAPT: 🟡 Amber
- Purchase orders issued for CIE and POCDEX API.
- Revised POCDEX API kickoff set for 14 Sep; AWS roles provisioned.
- Personnel resourcing, vulnerability triage ownership, and go/no-go criteria require immediate closure.

### Performance Testing: 🟠 Amber (Critical Path)
- Window locked for 15 to 17 September.
- Methodology migrating toward first-wave agency sizing; Learn More click-out excluded.
- Workload models, endurance duration, and environment scaling factors remain open.

### Day 2 Operations: 🟠 Amber
- Go-live checklist updated on 11 Sep; architecture and scalability review complete.
- Incident triage protocols, support SOPs, reconciliation workflows, and rollback procedures remain thin.

---

## 8. Week-End Status Board

| Workstream | Status | Summary Commentary |
|---|---|---|
| **POCDEX Integration** | 🟢 | Formally signed off in UAT (195 test cases, 21 personas); Last Updated Date confirmed on key APIs. |
| **R1 Opportunities Scope** | 🟢 | 5.5-sprint MVP boundary locked across 8 features; FormSG boundary set; ready for Monday review. |
| **VAPT Readiness** | 🟡 | POs issued and AWS access granted; 14 Sep start planned, but staffing ownership unsettled. |
| **Employment Lifecycle** | 🟡 | Profile Changes API under active review; business edge cases need validation. |
| **Performance Testing** | 🟠 | 15 to 17 Sep window fixed, but methodology, endurance, and dependency windows require resolution. |
| **Day 2 Operations** | 🟠 | Recognized as a critical launch gate; incident matrix, runbooks, and SOPs not yet evidenced. |
| **CIE Governance** | 🔴 | No assigned Product Manager; risk assessment and ACSO evidence collection at risk. |
| **Go-Live Data Readiness** | 🟡 | Data readiness exercise launched; validation correctly sequenced after VAPT and perf tests. |

---

## 9. Top Priorities for Next Week

### 1. Lock Performance-Test Methodology Before Monday
- Align on one defensible model: First-wave population → Concurrency baseline → Workload mix → Endurance duration → Pass/fail criteria.
- Document the environment-to-production translation formula.
- *Deadline: Monday 14 September (prior to Tuesday execution).*

### 2. Secure Executive Alignment on R1 Opportunities Scope
- Review the 5.5-sprint MVP boundary with Adrian Ang and Li Ting Kway on Monday 14 September at 1:00 PM.
- Confirm the FormSG operational boundary (WD template for gigs, native CV upload for substantive roles).
- Pre-brief via Monday 09:30 design session and follow up with 14:30 engineering sanity check.
- *Deadline: Monday 14 September (1:00 PM).*

### 3. Establish a Named VAPT Operating Model
- Formally assign owners for execution support, vulnerability triage, and go/no-go release decisions.
- *Deadline: Monday 14 September.*

### 4. Close the Employment Profile Changes Contract
- Validate that the API supports all required employment movement scenarios, effective dates, and reconciliation logic.
- *Deadline: Wednesday 16 September.*

### 5. Establish Day 2 Operations as an Explicit Launch Gate
- Deliver the operational readiness package: Incident triage matrix, SGEMS production support alignment, reconciliation workflows, and rollback protocols.
- *Deadline: Friday 18 September.*

### 6. Escalate CIE Product Management Assignment
- Raise the CIE PM vacancy to PSD leadership to secure dedicated product ownership for compliance and governance gates.
- *Deadline: Tuesday 15 September.*

---

## Bottom Line

The programme made decisive progress this week: POCDEX integration UAT is signed off, VAPT has moved into execution readiness, and CareerCompass R1 Opportunities has a clean, defensible 5.5-sprint boundary for executive review.

The center of gravity has shifted from technical integration to **proof of release readiness**. The three primary launch risks going into next week are **performance-test methodology credibility**, **VAPT and CIE resource ownership**, and **Day 2 operational controls**. Locking these areas next week will protect the November MVP launch date.
