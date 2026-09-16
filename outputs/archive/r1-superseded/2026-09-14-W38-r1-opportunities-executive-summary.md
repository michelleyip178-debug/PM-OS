# CareerCompass R1 Opportunities: Executive Summary & Aligned Architecture

**Date:** 2026-09-14 (Week 38)  
**Status:** Aligned & Locked in Architecture Jam (Adrian Ang, Barry Lim, Li Ting Kway, Michelle Yip)  
**Initiative:** CareerCompass R1 Opportunities Marketplace  
**Capacity Boundary:** Strictly 5.5 Engineering Sprints (4.8 sp Feature Dev + 0.7 sp Hardening Buffer)  

---

## 1. The Strategic Posture: "Discovery First, Selection Out-of-House"

Following the Architecture Jam on 2026-09-14, CareerCompass adopted a firm architectural boundary: **CareerCompass is a discovery layer and candidate launchpad, not an Applicant Tracking System (ATS)**.

### Why We Pivoted
* **The ATS Trap Avoided:** Constructing candidate review boards, multi-round status transitions, and bespoke application forms duplicates the whole-of-government central ATS (Workable) and risks ballooning into a multi-year effort that stalls core CareerCompass product delivery ("literally SMGS another version; we cannot afford to build, lah").
* **Capacity Discipline:** Engineering capacity is strictly limited to **5.5 sprints**. Building an internal ATS would have blown through sprint budgets and diverted resources away from discovery and career guidance.
* **Long-Term Integration Anchor:** Workable is designated as the long-term central ATS engine for formal jobs, SJR, and secondments. Technical API discovery and data contracts are **undetermined for now (Tech Lead / OGP TBD)**. Compass will not construct throwaway candidate pipelines in the interim.

---

## 2. The Two-Bucket Operating Model

Opportunities across the public sector are cleanly divided into two architectural buckets based on screening intensity:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CAREERCOMPASS TWO-BUCKET OPERATING MODEL                        │
├───────────────────────────────────────────┬────────────────────────────────────────────┤
│ BUCKET 1: LIGHTWEIGHT GIGS & STIPS        │ BUCKET 2: ROTATIONS, SJR & FORMAL JOBS     │
│ (Non-ATS · No CV / Low Friction)          │ (CV-Based Selection · Handover Out-of-House│
├───────────────────────────────────────────┼────────────────────────────────────────────┤
│ • Model: Informal tasks & attachments.    │ • Model: Substantive roles & careers.      │
│ • Gigs: Native 3-field quick-post (F-01), │ • Rotations/SJR: Single PDF upload (F-05), │
│   supervisor courtesy CC (F-03), and      │   seniority advisory warning (F-09),       │
│   7-day spotlight tag (F-19).             │   SJR scope toggle (F-28), and 1-click     │
│ • STIPs: Cataloged in tabs (F-17); apply  │   candidate pack zip download (F-11).      │
│   button redirects to Workforce Dev's     │ • Formal Jobs & Secondments: Pure          │
│   standardized FormSG template.           │   read-only ingestion feed and outbound    │
│ • Capacity: Managed via FormSG response   │   link-out to Careers@Gov (C@G / F-23).    │
│   caps; attendance exported post-session. │ • Selection: Conducted offline or via ATS. │
└───────────────────────────────────────────┴────────────────────────────────────────────┘
```

---

## 3. Barry Lim's Field Standardization Rule

To prevent agencies from pulling the squad into building a bespoke FormSG clone inside Compass:
* **The Rule:** Postings may only collect **standard user profile fields** (Name, Agency, Designation, Grade, Contact Email) plus a maximum of **one optional miscellaneous text field** (max 500 characters, e.g. "Briefly describe your relevant domain experience").
* **Zero Custom Form Builders:** Bespoke screening questions, conditional logic, and file matrices are banned. Agencies requiring deep qualifications evaluate candidates via the uploaded PDF CV and offline panel interviews.

---

## 4. Locked 5.5-Sprint Capacity Allocation (Sprint 1 to 5.5)

Feature development is hard-capped at **4.8 story points** across Sprint 1 to 4.5, reserving a mandatory **0.7 story points** hardening buffer in Sprint 5 to 5.5:

```
Sprint 1 (1.0 sp)    Sprint 2 (1.0 sp)    Sprint 3 (1.0 sp)    Sprint 4 (1.0 sp)    Sprint 5 (1.0 sp)    S5.5 (0.5 sp)
[F-17 Tabs: 0.5 sp]  [F-03 Notif: 0.5 sp] [F-19 Spot: 0.5 sp]  [F-11 Export: 1.0 sp][F-11 Wrap: 0.3 sp]  [Go-Live: 0.5 sp]
[F-01 Post: 0.5 sp]  [F-05 PDF: 0.5/1.0]  [F-05 PDF: 0.5/1.0]  [Testing Prep: 0.0]  [Hardening: 0.7 sp]   [Sign-Off]
                                          [F-09 Fit: 0.5 sp]
                                          [F-28 Scope: 0.3 sp]
```

### Committed 8 Features in R1 (4.8 sp Feature Dev)
1. **F-17: Dedicated Opportunity Browsing Tabs (0.5 sp · S1):** Split catalog into clear tabs (*Gigs*, *STIPs*, *Rotations*, *Jobs*).
2. **F-01: Quick Project Posting (0.5 sp · S1):** 3-minute, 3-field posting form for informal gigs.
3. **F-03: Supervisor Courtesy Notification (0.5 sp · S2):** Automated line manager courtesy email on candidate application.
4. **F-05: Direct Resume Attachment (1.0 sp · S2-S3):** Secure single PDF upload (max 5MB) with automated antivirus scanning.
5. **F-19: Priority Spotlight for Unfilled Roles (0.5 sp · S3):** Automated "Needs Talent" badge for gigs without applicants after 7 days.
6. **F-09: Seniority Fit Guidance (0.5 sp · S3):** Contextual advisory banner displayed on grade mismatch (no hard lockout).
7. **F-28: SJR-to-Internal-Job Scope Toggle (0.3 sp · S3):** 1-click poster toggle switching between restricted SJR cohort and open internal job.
8. **F-11: 1-Click Candidate Pack Download (1.0 sp · S4):** Batch zip export compiling candidate resumes and summary CSV for offline panels.

### Hardening Buffer (0.7 sp · S5 to 5.5)
* Dedicated to vulnerability assessment penetration testing (VAPT) fixes, file storage safety compliance, and pilot agency onboarding.

### Intentional Deferrals to R2 (Protecting Capacity & Non-ATS Posture)
* **F-07 (4-Stage Candidate Status Board · 1.5 sp):** Deferred to avoid the ATS trap. Reviewers use `F-11` zip download and communicate via direct email.
* **F-18 (Real-Time Seat Availability · 1.0 sp):** Deferred due to lack of FormSG live webhook write-backs. Handled via FormSG native response caps.
* **F-22 (Host Attendance Check-Off Roster · 1.0 sp):** Deferred. Hosts export attendee rosters post-session from FormSG.
* **F-20 (Rotation Cycle Rollover Notice · 0.5 sp):** Deferred. HR coordinators adjust posting dates manually in R1.
* **F-13, F-15, F-21 (Secondment Badges, Terms & Progress Tracker · 1.5 sp):** Deferred. Secondments cataloged via read-only C@G ingestion in R1.

---

## 5. Immediate PM Action Tracks & Ownership

| Track | Counterpart | Core Objective | Michelle's Immediate Ask |
|---|---|---|---|
| **Track A: STIPs Standardization** | Workforce Development (WD) | Standardize FormSG template | Lock 5 standard fields + max 1 optional misc field; enable native FormSG submission limits to cap cohorts automatically. |
| **Track B: Central ATS Discovery** | C@G Workable Squad & OGP PM Daryl Snow | Workable technical integration discovery | Scope discovery questions on tenant partitioning, write APIs, and CUMULUS HRMS data links. (API discovery owner: Tech Lead / OGP TBD). |
| **Track C: Pilot Agency Rollout** | 6 Pilot Agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) | Onboarding and posting migration | Align pilot HR directors on the Two-Bucket model, Barry's field rule, and `F-11` zip dossier review workflow. |

---

## 6. Master Document Index

| Category | Document Title | File Path & Clickable Link | How to Use This Document |
|---|---|---|---|
| **Executive Direction** | **Executive Strategy & Architecture Brief** | [2026-09-14-W38-r1-opportunities-direction-and-architecture-brief.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-direction-and-architecture-brief.md) | Use as the primary 1-pager briefing for Adrian Ang, Barry Lim, and ministry steering committees. Contains defensive "Say No" playbook. |
| **Governance Decision** | **Formal Decision Record (DACI)** | [2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md](file:///Users/michelleyip/Documents/PM-OS/outputs/decisions/2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md) | Official record of Decisions 1 to 6, Barry's standardization rule, non-ATS boundary, and 5.5-sprint limit. |
| **Delivery Plan** | **5.5-Sprint Execution Roadmap** | [2026-09-14-W38-r1-5-5-sprint-delivery-roadmap.md](file:///Users/michelleyip/Documents/PM-OS/outputs/roadmaps/2026-09-14-W38-r1-5-5-sprint-delivery-roadmap.md) | Use for sprint planning, velocity tracking, and grooming with Tech Lead and engineering squad. |
| **Stakeholder Alignment** | **Workforce Development & C@G Alignment Guide** | [2026-09-14-W38-workforce-development-and-cg-alignment-guide.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-workforce-development-and-cg-alignment-guide.md) | Meeting playbook for upcoming syncs: Track A (WD FormSG template) and Track B (C@G / Workable discovery). |
| **Meeting Record** | **Architecture Jam Notes & Leadership RACI** | [2026-09-14-W38-r1-opportunities-jam.md](file:///Users/michelleyip/Documents/PM-OS/outputs/meeting-notes/2026-09-14-W38-r1-opportunities-jam.md) | Discussion notes, leadership quotes, two-bucket diagram, risk register, and RACI table. |
| **Meeting Record** | **Adrian Bi-Weekly 1:1 Notes** | [2026-09-14-W38-adrian-bi-weekly-meeting.md](file:///Users/michelleyip/Documents/PM-OS/outputs/meeting-notes/2026-09-14-W38-adrian-bi-weekly-meeting.md) | Alignment log with Adrian on Workable fallbacks, cut-lines, and OTG integration contracts. |
| **Product Specification** | **Master R1 PRD** | [2026-09-14-W38-r1-opportunities-marketplace-planning-review.md](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md) | The core product specification detailing user journeys, functional requirements, and Day 1 readiness. |
| **Research Foundation** | **Unified User Research Synthesis** | [2026-09-14-W38-r1-opportunities-unified-synthesis.md](file:///Users/michelleyip/Documents/PM-OS/outputs/research-synthesis/2026-09-14-W38-r1-opportunities-unified-synthesis.md) | Empirical evidence from 2025 actuals (4,752 vacancies, 7,097 sign-ups) and pilot agency interviews. |
| **Review Feedback** | **Multi-Agent Review Synthesis** | [2026-09-14-W38-r1-opportunities-marketplace-review-synthesis.md](file:///Users/michelleyip/Documents/PM-OS/outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-review-synthesis.md) | Feedback and mitigations across Engineering, Design, Legal, UXR, and Executive perspectives. |
| **Hypothesis & Priority** | **RICE Problems, Hypotheses & Prioritization** | [2026-09-14-W38-r1-opportunities-problems-hypotheses-rice.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-problems-hypotheses-rice.md) | Problem decomposition, recalibrated hypotheses, portfolio tiers, and 30-feature RICE rankings. |
| **Architectural Research** | **Workable Micro-Mobility Research** | [2026-09-14-W38-workable-stips-gigs-structuring-research.md](file:///Users/michelleyip/Documents/PM-OS/outputs/research-synthesis/2026-09-14-W38-workable-stips-gigs-structuring-research.md) | Details how STIPs and Gigs can be modeled as jobs in Workable ATS, custom pipelines, Barry's field rule in Workable, and enterprise licensing trade-offs. |
| **Governance Alignment** | **Business Owners Alignment Questions** | [2026-09-14-W38-r1-opportunities-bo-alignment-questions.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-bo-alignment-questions.md) | 6 strategic policy and governance questions for Xian Zhang Guo and Jacky Lee covering STIPs FormSG governance, response caps, Barry's rule defense, and OTG cutover quotas. |
| **Operational Guidance** | **Reading Sequence & Design Priorities** | [2026-09-14-W38-r1-opportunities-reading-sequence-and-design-priorities.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-reading-sequence-and-design-priorities.md) | 4-layer master reading sequence for PM plus 5 immediate UI priorities and 4 non-ATS cut-lines for Product Design Lead Li Ting Kway. |
| **Risk Management** | **Risk Assessment WBS Register** | [2026-09-14-W38-r1-opportunities-risk-assessment-wbs.md](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-risk-assessment-wbs.md) | Operational WBS breaking down all 16 project risks into 24 trackable activities with EDCs and deliverables for Jobelle to track. |
| **Live Spreadsheets** | **Executive Excel Workbook** | [2026-09-14-W38-r1-opportunities-synthesis-rice.xlsx](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-synthesis-rice.xlsx) | Formatted 5-tab Excel workbook with dynamic RICE formulas, tiers, and non-ATS rules. |
| **Data Exports** | **RICE Scoring Matrix (CSV)** | [2026-09-14-W38-r1-opportunities-rice-scoring.csv](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-rice-scoring.csv) | CSV export of all 30 features with scores and delivery horizons for ticketing systems. |
| **Data Exports** | **Risk Register (CSV)** | [2026-09-14-W38-r1-opportunities-risk-register.csv](file:///Users/michelleyip/Documents/PM-OS/outputs/analyses/2026-09-14-W38-r1-opportunities-risk-register.csv) | Project risk log covering 16 market, team, and technical risks with assigned owners. |
