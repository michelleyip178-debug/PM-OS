# R1 Opportunities Risk Assessment: Work Breakdown Structure (WBS) & Tracking Register

**Document Reference:** `2026-09-14-W38-r1-opportunities-risk-assessment-wbs`  
**Date:** 2026-09-14 (Week 38)  
**Author:** Michelle Yip (Product Manager)  
**Tracking Lead:** Jobelle (Project Coordinator / Risk Tracking)  
**Executive Reviewers:** Adrian Ang (Director of Product Management), Tan Pow Hwee (Tech Lead), Barry Lim (GovTech Engineering Lead)  
**Target Window:** Pre-Sprint 1 to Sprint 5.5 (14 Sep 2026 to 04 Dec 2026)  
**Related Documents:**
* [2026-09-14-W38-r1-opportunities-risk-register.csv](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-risk-register.csv)
* [2026-09-14-W38-r1-5-5-sprint-delivery-roadmap.md](file:///Users/michelleyip/Documents/PM-OS/outputs/roadmaps/2026-09-14-W38-r1-5-5-sprint-delivery-roadmap.md)
* [2026-09-14-W38-r1-opportunities-direction-and-architecture-brief.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-direction-and-architecture-brief.md)

---

## 1. Tracking Purpose & Operational Protocol for Jobelle

This Work Breakdown Structure (WBS) translates the 16 project, technical, and market risks of the **CareerCompass R1 Opportunities Marketplace** into 24 discrete, trackable mitigation activities. 

### Jobelle's Daily & Weekly Tracking Protocol
1. **Status Audits (Twice Weekly):** Check status with activity owners on Tuesdays (pre-standup) and Fridays (EOD review).
2. **Escalation Rules:**
   * If an activity slips past its Estimated Date of Completion (EDC) by **> 3 business days**, flag to Michelle Yip for sprint triage.
   * If an activity in **Stream 1.0 (C@G / Workable)** or **Stream 3.0 (Security & Privacy)** blocks an upcoming sprint freeze date, escalate to Adrian Ang and Tan Pow Hwee immediately.
3. **Evidence Verification:** Do not mark an activity "Done" until the specified *Verification Deliverable* is produced and linked.

---

## 2. Master WBS & Milestone Schedule Overview

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        R1 RISK MITIGATION TIMELINE OVERVIEW                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Stream 1.0: Governance & Workable Tenant Discovery   │ 15 Sep 2026 ──► 09 Oct 2026     │
│ Stream 2.0: FormSG & STIPs Operational Boundary      │ 15 Sep 2026 ──► 02 Oct 2026     │
│ Stream 3.0: Technical Architecture, Privacy & Safety │ 18 Sep 2026 ──► 13 Nov 2026     │
│ Stream 4.0: Market Demand, Supply Seeding & Pilot    │ 16 Sep 2026 ──► 20 Nov 2026     │
│ Stream 5.0: Capacity Discipline & 5.5-Sprint Gates   │ 21 Sep 2026 ──► 04 Dec 2026     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Work Breakdown Structure (WBS)

### Stream 1.0: Governance, C@G Workable & Cross-Team Alignment
*Objective: Eliminate the risk of a fractured multi-instance Workable deployment (`RSK-GOV-01`) and prevent dual-posting confusion (`RSK-MKT-05`).*

| WBS Code | Risk Ref | Activity Name & Description | Owner | Start Date | EDC | Verification Deliverable | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| **1.1** | `RSK-GOV-01` | **C@G & OGP Workable Discovery Sync**<br>Meet Daryl Snow (OGP) and C@G squad to present Option A (Single Instance with Headless Department Partitioning) and determine API write scope feasibility. | Barry Lim / Tech Lead | 15 Sep 2026 | 22 Sep 2026 | Signed discovery memo confirming whether single-tenant partitioning is approved. | Open |
| **1.2** | `RSK-GOV-01` | **Fallback Interface Contract Definition**<br>Formalize the technical contract for read-only C@G job ingestion (`F-23`) and outbound apply link-outs, ensuring R1 has zero launch dependency on C@G API delivery. | Michelle Yip / Tech Lead | 23 Sep 2026 | 02 Oct 2026 | Approved API fallback specification in `outputs/analyses/`. | Open |
| **1.3** | `RSK-MKT-05` | **Dual-Posting Exclusion Filter Setup**<br>Configure data ingestion logic to automatically detect and suppress duplicate postings from the 6 pilot agencies that exist across both legacy OTG and CareerCompass (`F-26`). | Tan Pow Hwee / Backend | 21 Sep 2026 | 02 Oct 2026 | Staging unit tests proving duplicate listings from pilot ministries are filtered. | Open |
| **1.4** | `RSK-GOV-01` | **Two-Horizon Governance Sign-Off**<br>Present the Two-Horizon strategy (Horizon 1 in Compass; Horizon 2 in Workable) to Adrian Ang and PSD Steering Committee to formally close the ATS debate. | Michelle Yip / Adrian Ang | 28 Sep 2026 | 09 Oct 2026 | SteerCo slide deck and recorded minute approving the Two-Horizon roadmap. | Open |

---

### Stream 2.0: FormSG & STIPs Operational Boundary
*Objective: Prevent agency defection back to rogue forms (`RSK-MKT-01`), solve the outcome tracking void (`RSK-POL-01`), and stop schema fragmentation (`RSK-TEC-05`).*

| WBS Code | Risk Ref | Activity Name & Description | Owner | Start Date | EDC | Verification Deliverable | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| **2.1** | `RSK-MKT-01` | **Audit 10 Active Ministry FormSG Gigs**<br>Review 10 recent FormSG postings across PSD, MDDI, and ESG to verify that Barry's 5-field schema covers at least 90% of agency screening needs. | Michelle Yip / Li Ting Kway | 15 Sep 2026 | 19 Sep 2026 | Audit summary table mapping legacy fields to the standardized 5-field schema. | Open |
| **2.2** | `RSK-TEC-05` | **WD Standardized FormSG Master Template Build**<br>Collaborate with Workforce Development (WD) to build and lock the official central FormSG template (5 fixed fields + max 1 optional text prompt). | Michelle Yip / WD Lead | 21 Sep 2026 | 28 Sep 2026 | Live FormSG master link owned by WD with editing restricted to central admins. | Open |
| **2.3** | `RSK-POL-01` | **Native Cohort Capacity Enrolment Rules**<br>Document operational guidelines instructing all STIP hosts to enable FormSG's native submission cap setting (auto-closing after N entries) to prevent cohort overshoots. | Jobelle / WD Ops | 24 Sep 2026 | 02 Oct 2026 | 1-page host guide on configuring FormSG response caps published for pilot agencies. | Open |
| **2.4** | `RSK-POL-01` | **SteerCo Metrics Baseline Alignment**<br>Review the 6 Business Owner questions with Xian Zhang Guo and Jacky Lee, locking agreement that R1 evaluates top-of-funnel discovery engagement rather than post-session attendance. | Michelle Yip | 21 Sep 2026 | 30 Sep 2026 | Signed BO Alignment Matrix in `2026-09-14-W38-r1-opportunities-bo-alignment-questions.md`. | Open |

---

### Stream 3.0: Technical Architecture, Security, Privacy & File Safety
*Objective: Mitigate batch zip download latency (`RSK-TEC-01`), candidate privacy audit failure (`RSK-TEC-02`), malicious file uploads (`RSK-TEC-04`), and applicant grade tampering (`RSK-TEC-03`).*

| WBS Code | Risk Ref | Activity Name & Description | Owner | Start Date | EDC | Verification Deliverable | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| **3.1** | `RSK-TEC-01` | **Memory-Safe Zip Streaming Prototype (`F-11`)**<br>Build a backend proof of concept using Node.js/Go streams that pipes 50+ PDF resumes directly from cloud storage to client download without server memory spikes. | Backend Eng / Pow Hwee | 18 Sep 2026 | 25 Sep 2026 | Working benchmark test showing 250MB zip export executing under 4 seconds. | Open |
| **3.2** | `RSK-TEC-04` | **Antivirus Scanning Gateway Architecture (`F-05`)**<br>Design the file upload isolation pipeline (quarantine bucket, automated ClamAV/CWP malware inspection, sanitized download token, MIME magic byte check). | Tan Pow Hwee / DevOps | 21 Sep 2026 | 02 Oct 2026 | Technical design doc and test script rejecting disguised executables (`.pdf.exe`). | Open |
| **3.3** | `RSK-TEC-02` | **Data Privacy & 90-Day Auto-Purge Policy**<br>Draft candidate data governance specifications establishing server-side AES-256 encryption for stored resumes and an automated 90-day post-cycle deletion chron job. | GovTech Sec / Michelle | 05 Oct 2026 | 16 Oct 2026 | Security sign-off memo and automated cron test logs confirming 90-day file purging. | Open |
| **3.4** | `RSK-TEC-03` | **WOG AD Grade Claim & Application Throttling**<br>Implement backend validation binding candidate grade directly to WOG AD / POCDEX verified claims and capping active open applications to a maximum of 5 per officer. | Full-Stack Eng | 19 Oct 2026 | 30 Oct 2026 | Staging test run verifying that manual grade modification via API payload is rejected. | Open |
| **3.5** | `RSK-TEC-02` | **VAPT Remediation & Security Clearance**<br>Track vulnerability findings from the NCS security assessment, patch critical/high CVEs, and obtain final security clearance prior to launch. | Jace / Jobelle / Pow Hwee | 12 Oct 2026 | 13 Nov 2026 | Final VAPT sign-off certificate clearing CareerCompass for production deployment. | Open |

---

### Stream 4.0: Market Demand, Supply Seeding & Pilot Adoption
*Objective: Prevent the 46% empty gig rate (`RSK-MKT-02`), avoid the <30% adoption kill trigger (`RSK-MKT-04`), and overcome the hiring manager login blindspot (`RSK-TEM-02`).*

| WBS Code | Risk Ref | Activity Name & Description | Owner | Start Date | EDC | Verification Deliverable | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| **4.1** | `RSK-TEM-02` | **Line Manager Hallway Usability Tests**<br>Run 3 rapid usability tests with actual project leads in MDDI and ESG to validate the 3-minute quick posting modal (`F-01`) and the offline zip dossier workflow (`F-11`). | Li Ting Kway / Michelle | 16 Sep 2026 | 23 Sep 2026 | Usability debrief report documenting task completion time and user feedback. | Open |
| **4.2** | `RSK-MKT-04` | **Pilot Agency Exclusive Posting MoUs**<br>Secure written commitments from HR Directors of the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) to post all pilot cohorts exclusively on CareerCompass. | Michelle Yip / Adrian Ang | 21 Sep 2026 | 09 Oct 2026 | Signed agreements from all 6 pilot agency HR representatives. | Open |
| **4.3** | `RSK-MKT-02` | **Catalog Sub-Tabs UI Component Build (`F-17`)**<br>Implement dedicated frontend browsing sub-tabs (*Gigs*, *STIPs*, *Rotations*, *Jobs*) to prevent short-term attachments from crowding out specialized project gigs. | Frontend Eng / Li Ting | 21 Sep 2026 | 02 Oct 2026 | Deployed frontend component in staging with distinct card metadata and CTAs. | Open |
| **4.4** | `RSK-MKT-02` | **Priority Spotlight Engine Configuration (`F-19`)**<br>Build the automated background query that tags gigs with fewer than 2 applicants after 7 days as "Needs Talent" and bumps them to targeted job family feeds. | Backend Eng | 19 Oct 2026 | 30 Oct 2026 | Unit test proving starved gigs receive automated badge and boosted feed sorting. | Open |
| **4.5** | `RSK-MKT-04` | **Day 1 Seed Opportunity Inventory Load**<br>Coordinate with pilot agency HR coordinators to pre-load a minimum of 20 to 30 verified listings (5+ Gigs, 10+ STIPs, 5+ Rotations) prior to production launch. | Jobelle / Michelle Yip | 02 Nov 2026 | 20 Nov 2026 | Staging catalog inventory verified with 25+ live, approved opportunities ready for Day 1. | Open |

---

### Stream 5.0: Capacity Discipline & 5.5-Sprint Gate Reviews
*Objective: Prevent ATS scope creep (`RSK-CAP-01`), protect the 5.5-sprint budget ceiling, and prevent trio bottlenecking (`RSK-TEM-03`).*

| WBS Code | Risk Ref | Activity Name & Description | Owner | Start Date | EDC | Verification Deliverable | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| **5.1** | `RSK-CAP-01` | **Sprint 1 Scope Freeze & Anti-ATS Gate**<br>Review technical tasks against the non-ATS boundary. Confirm zero tickets exist for custom form builders, candidate Kanban boards, or in-portal attendance tools. | Michelle Yip / Pow Hwee | 21 Sep 2026 | 22 Sep 2026 | Sprint 1 backlog audit report signed off by Product Trio with exactly 1.0 sp committed. | Open |
| **5.2** | `RSK-TEM-03` | **Bi-Weekly Product Trio Alignment Jams**<br>Conduct structured bi-weekly synchronization sessions between Michelle, Pow Hwee, and Li Ting to review UI components, API contracts, and cut-lines. | Product Trio | 21 Sep 2026 | 27 Nov 2026 | Meeting records logged in `outputs/meeting-notes/` every alternate Monday. | Open |
| **5.3** | `RSK-CAP-01` | **Mid-Flight Scope Cut-Line Review (Sprint 3.5)**<br>Audit actual velocity against the 4.8 sp feature development ceiling. Enforce immediate deferrals to R2 if any committed feature threatens the 0.7 sp hardening buffer. | Michelle Yip / Adrian Ang | 26 Oct 2026 | 30 Oct 2026 | Mid-point velocity audit memo confirming 0.7 sp buffer remains uncompromised. | Open |
| **5.4** | `RSK-CAP-01` | **Sprint 5 to 5.5 Production Hardening Gate**<br>Execute end-to-end smoke testing across the 6 pilot agencies, stress-test WOG AD Keycloak auth callbacks, and resolve final pilot onboarding blockers. | Full Squad / Jobelle | 16 Nov 2026 | 04 Dec 2026 | Production deployment approval and launch sign-off certificate. | Open |

---

## 4. Weekly Milestone Checkpoints for Jobelle's Dashboard

Jobelle should track progress against these seven major checkpoint dates:

| Milestone Gate | Target Date | Key Deliverables Due | Responsible Owners |
|---|:---:|---|---|
| **Gate 0: Pre-Sprint Alignment** | **22 Sep 2026** | • C@G Workable discovery meeting conducted (WBS 1.1)<br>• FormSG gig schema audit completed (WBS 2.1)<br>• Sprint 1 Anti-ATS scope freeze locked (WBS 5.1) | Barry Lim, Michelle Yip, Tan Pow Hwee |
| **Gate 1: Discovery Foundation** | **02 Oct 2026** | • Browsing Tabs deployed (`F-17`, WBS 4.3)<br>• Quick Project Posting built (`F-01`)<br>• Central FormSG template locked with WD (WBS 2.2)<br>• Antivirus file gateway architecture approved (WBS 3.2) | Li Ting Kway, Tan Pow Hwee, WD Lead |
| **Gate 2: Governance & Cutover** | **16 Oct 2026** | • 6 Pilot Agency exclusive agreements secured (WBS 4.2)<br>• 90-day resume purge specification signed off (WBS 3.3)<br>• Fallback C@G read-only feed verified (`F-23`, WBS 1.2) | Michelle Yip, Adrian Ang, GovTech Sec |
| **Gate 3: Application Core** | **30 Oct 2026** | • Direct PDF Resume Upload built (`F-05`)<br>• Seniority Fit advisory banner deployed (`F-09`)<br>• Priority Spotlight engine configured (`F-19`, WBS 4.4)<br>• Mid-flight velocity audit passed (WBS 5.3) | Tan Pow Hwee, Full-Stack Eng, Michelle |
| **Gate 4: Security & Export Handoff**| **13 Nov 2026** | • 1-Click Candidate Pack Zip Export built (`F-11`, WBS 3.1)<br>• Final VAPT remediation certificate cleared (WBS 3.5)<br>• WOG AD grade claim verification locked (WBS 3.4) | Tan Pow Hwee, Jace, Jobelle |
| **Gate 5: Catalog Seeding** | **20 Nov 2026** | • 25+ Seed Opportunities loaded and verified (WBS 4.5)<br>• Pilot HR coordinators trained on zip pack downloads | Jobelle, Pilot HR Leads, Michelle |
| **Gate 6: Production Hardening** | **04 Dec 2026** | • Sprint 5.5 hardening buffer complete (0.7 sp, WBS 5.4)<br>• Day 1 Go-Live approval signed by SteerCo | Michelle Yip, Adrian Ang, Tan Pow Hwee |
