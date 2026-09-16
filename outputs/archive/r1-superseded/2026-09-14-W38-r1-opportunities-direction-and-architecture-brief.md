# Executive Strategy & Architecture Brief: R1 Opportunities Marketplace

**Document Reference:** `2026-09-14-W38-r1-opportunities-direction-and-architecture-brief`  
**Date:** 2026-09-14 (Week 38)  
**Target Release:** R1 (Sprint 1 to 5.5 · 5.5 Sprints Total)  
**Author:** Michelle Yip (Product Manager)  
**Reviewers:** Adrian Ang (Director of Product Management), Barry Lim (GovTech Engineering Lead)  
**Target Audience:** Public Sector Development (PSD) Leadership, Workforce Development (WD), Careers@Gov (C@G) Workable Squad  

---

## 1. Executive Summary & Core Tension

CareerCompass must transition from a passive directory into an active mobility marketplace across four distinct public sector opportunity models: **Gigs**, **STIPs**, **Rotations**, and **Jobs** (including SJR and Secondments). However, our engineering capacity is strictly capped at **5.5 sprints**. 

During our Architecture Jam on 2026-09-14, leadership firmly resolved the core tension: **CareerCompass cannot afford to build a custom Applicant Tracking System (ATS)**. Replicating multi-stage selection pipelines, candidate evaluation scorecards, interview calendars, and dynamic form builders would consume resources equivalent to rebuilding SMGS and duplicate future Whole-of-Government Workable capabilities. 

The agreed strategic direction for R1 is **"Discovery First, Selection Out-of-House"**. CareerCompass serves as the single discovery front-door for public officers, while candidate selection workflows route to dedicated, specialized engines: **Workable** for formal CV-based jobs, and a standardized **FormSG** template for STIPs and Gigs.

---

## 2. The Two-Bucket Architecture Blueprint

To avoid treating disparate opportunity types as a single homogeneous model, R1 adopts a clean two-bucket separation:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CAREERCOMPASS (DISCOVERY LAYER)                       │
│        Single Pane of Glass across Gigs, STIPs, Rotations, and Jobs         │
│     Dedicated Browsing Tabs (F-17) + Public View Loop-Back Link (F-29)     │
│         Dual-Posting Outbound API Push + Ingestion Deduplication            │
└───────────────────────┬─────────────────────────────┬───────────────────────┘
                        │                             │
                        ▼                             ▼
       ┌─────────────────────────────────┐   ┌────────────────────────────────┐
       │ BUCKET 1: STIPs & Gigs          │   │ BUCKET 2: Formal Jobs & SJR    │
       │ (Lightweight Opportunities)     │   │ (CV-Based Selection)           │
       ├─────────────────────────────────┤   ├────────────────────────────────┤
       │ • 3-field quick-post (F-01)     │   │ • Direct CV upload (F-05)      │
       │ • Embedded FormSG intake        │   │ • 1-Click ZIP dossier (F-11)   │
       │ • Simple 3-stage status         │   │ • SJR scope toggle (F-28)      │
       │ • No complex panel evaluations  │   │ • Workable ATS long-term       │
       └─────────────────────────────────┘   └────────────────────────────────┘
```

### Bucket 1: Lightweight Opportunities (Gigs & STIPs)
* **Operational Nature:** Part-time micro-projects (5% to 20% time) and developmental attachments. Selection is a direct 1-on-1 alignment between host project lead and applicant. They do not require corporate recruitment panels.
* **Delivery Mechanism:**
  * **Gigs (0.5 sp committed · `F-01`):** A 3-minute, 3-field quick-post form (Scope, Weekly Hours, Duration). Line managers publish directly without HR requisition delays. Applicants apply via pre-filled profile details with a self-declaration checkbox confirming supervisor support.
  * **STIPs (0.0 sp custom dev in R1):** STIPs appear in catalog browsing via dedicated sub-tabs (`F-17`). The "Apply" CTA links out to Workforce Development's (WD) centrally controlled FormSG template. Custom seat counters (`F-18`) and attendance rosters (`F-22`) yield to R2, pending formal WD outcome reporting mandates.

### Bucket 2: Formal CV-Based Jobs (SJR, Secondments & Internal Transfers)
* **Operational Nature:** Full-time postings, inter-agency secondments, and Scheme of Junior Rotations (SJR) vacancies requiring CV screening, panel evaluations, and formal appointment letters.
* **Delivery Mechanism:**
  * **Rotations & SJR Core (2.0 sp committed):** Single PDF resume attachment (`F-05`), Seniority Fit Guidance advisory warning (`F-09`), SJR-to-Internal-Job Scope Toggle (`F-28`), and 1-Click Shortlist Pack Download (`F-11`).
  * **Workable Integration (Additive Long-Term):** Workable serves as the Whole-of-Government ATS engine. In R1, CareerCompass delivery is 100% insulated from Workable timelines. If Workable APIs (`GET /jobs`, `POST /candidates`) connect, applications route into Workable. If delayed, R1 operates cleanly with offline pack downloads (`F-11`) and read-only ingestion (`F-23`).

---

## 3. Locked 5.5-Sprint Delivery Roadmap

The 5.5-sprint engineering runway is ring-fenced to deliver an end-to-end working marketplace without overbooking:

| Sprint | Capacity | Delivered Features & Interventions | Primary Milestone & User Impact |
|---|:---:|---|---|
| **Sprint 1** | **1.0 sp** | **F-23** Jobs Feed (0.2 sp)<br>**F-29** Public View & Loop-Back (0.5 sp)<br>**F-17** Browsing Tabs (0.5 sp)<br>**F-26** Ingestion Exclusion (0.5 sp) | **Catalog & Traffic Foundation:** Solves catalog blindness, redirects pilot agency OTG traffic back to CareerCompass (`?ref=otg`), and stops duplicate listings. |
| **Sprint 2** | **1.0 sp** | **F-27** Role-Based Access Control (1.0 sp) | **Data Governance & Privacy:** Isolates candidate drawers and enforces civil service data privacy before any resumes are uploaded. |
| **Sprint 3** | **1.0 sp** | **F-05** Direct Resume Upload (1.0 sp)<br>**F-09** Seniority Fit Guidance (0.5 sp) | **Rotations Application Core:** Officers attach PDF resumes directly; review panels are protected from out-of-grade spray-and-pray spam. |
| **Sprint 4** | **1.0 sp** | **F-28** SJR-to-Internal-Job Scope Toggle (0.5 sp)<br>**F-01** Quick Project Gig Posting (0.5 sp) | **Supply & Mobility Activated:** HR converts unfilled SJRs with 1 click; line managers post micro-gigs in 3 minutes. |
| **Sprint 5** | **0.8 sp** | **F-11** 1-Click Candidate Pack Export (0.5 sp)<br>**F-30** Agency Dossier Push Protocol (0.3 sp) | **Selection Handoff:** Review panels receive candidate zip folders offline; pilot agencies with internal selection policies receive batch dossiers. |
| **Sprint 5.5** | **0.7 sp** | End-to-end smoke testing across 6 pilot agencies, WOG AD Keycloak auth stress testing, and buffer | **Production Hardening & Go-Live Readiness.** |

*Total Committed Build: 4.8 sprints feature dev + 0.7 sprints hardening/buffer = **5.5 sprints total**.*

---

## 4. Two-Horizon Integration Strategy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HORIZON 1: R1 DELIVERY (5.5 Sprints · 2026-2027)                            │
├─────────────────────────────────────────────────────────────────────────────┤
│ • CareerCompass owns discovery across all 4 opportunity models.             │
│ • Gigs run native on a 3-field form; STIPs route to WD FormSG template.     │
│ • Rotations/SJR run native PDF apply; panels review via 1-click zip pack.   │
│ • Jobs and Secondments operate on pure read-only ingestion (F-23).          │
│ • Zero blocking dependency on external ATS tender or API delivery.         │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Progressive Migration
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ HORIZON 2: SCALE WITH WORKABLE ATS (2027-2028+)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Workable deployed as central Whole-of-Government ATS engine.              │
│ • CareerCompass ingests requisitions via GET /jobs API.                     │
│ • CareerCompass pushes candidate dossiers into Workable via POST /candidates.│
│ • Workable webhooks notify CareerCompass of shortlist and offer stages.     │
│ • CareerCompass retires temporary offline pack exports cleanly.             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Strategic Defense Playbook: What We Firmly Say "No" To

To protect delivery velocity and prevent scope creep, leadership has established four firm boundaries:

1. **Say "No" to a Custom ATS Build:**
   * *Stakeholder Ask:* "Can we build candidate interview scoring, reviewer scorecards, and calendar scheduling into CareerCompass?"
   * *Our Position:* No. That turns CareerCompass into an ATS, consuming months of engineering and duplicating Workable. Hiring panels evaluate candidates offline using the 1-click download pack (`F-11`).
2. **Say "No" to a Dynamic Form Builder:**
   * *Stakeholder Ask:* "Can pilot agencies create 10 custom screening questions for each posting?"
   * *Our Position:* No. CareerCompass uses 5 fixed civil service fields plus 1 optional statement box. Custom form builders consume 3 sprints and destroy Whole-of-Government mobility reporting.
3. **Say "No" to Premature STIP Tracking Software:**
   * *Stakeholder Ask:* "Can we build attendance rosters and placement tracking for STIPs?"
   * *Our Position:* No. STIPs link to Workforce Development's FormSG template in R1. Until WD establishes a formal policy mandating placement reporting, software cannot fix compliance.
4. **Say "No" to Launch Blockers from External Systems:**
   * *Stakeholder Ask:* "Should we delay R1 if Workable API integration takes longer than anticipated?"
   * *Our Position:* No. CareerCompass operates independently on baseline ingestion (`F-23`). Workable integration is an additive enhancement, not a launch gate.

---

## 6. Leadership RACI & Next Steps

| Workstream | Responsible (R) | Accountable (A) | Consulted (C) | Informed (I) |
|---|---|---|---|---|
| **Overall Strategy (All 4 Models)** | **Adrian Ang** (Strategy)<br>**Michelle Yip** (Product Backlog) | **PSD Product Owner** (Adrian Ang / PO) | **Barry Lim** (Tech Feasibility)<br>**Workforce Development** (WD Policy)<br>**C@G Workable / HRPS Owners** | Wider Compass squad, WD, Ministry HR community |
| **Workable Integration & Formal Jobs** | **Tech Discovery:** Undetermined (Tech Lead TBD)<br>**Barry Lim** (Tech Integration Lead)<br>**Michelle Yip** (Product Requirements only) | **Product & Tech Leadership** (Adrian Ang + Tan Pow Hwee) | **C@G / Workable Product & Tech Owners**<br>**WD / Central HR Authorities** | Platform teams (SMGS, scholarship portals), OTG team |
| **STIPs & Gigs Solution** | **Li Ting Kway** (UX Design)<br>**Michelle Yip** (Product Requirements)<br>**Barry Lim / Eng** (FormSG Architecture) | **Opportunities Squad** (Michelle Yip + Tan Pow Hwee) | **Workforce Development** (WD Policy)<br>**Pilot Agency HR Points of Contact** | Civil service HR community, C@G / Workable teams |
| **Data Model & Schema Rules** | **Barry Lim** (Data Schema Lead)<br>**Li Ting Kway** (UX for Misc Sections) | **Tech Lead / Data Architect** (Tan Pow Hwee / Barry Lim) | **Michelle Yip** (Agency Validation)<br>**WD Analytics Stakeholders** | Consuming squads (Compass analytics, WD, PSD) |
| **Policy & Governance Alignment** | **Workforce Development** (WD Policy Team) | **WD Leadership / Central HR Authority** | **Michelle Yip & Adrian Ang** (Product Context)<br>**Barry Lim** (Technical Feasibility) | Agency HR directors, line managers, civil service officers |
| **Cross-Team C@G Coordination** | **Barry Lim** (Technical Lead)<br>**Michelle Yip / Adrian Ang** (Product Representation) | **Joint WOG ATS Working Group / Senior Leadership** | **C@G Product & Tech Leads**<br>**OGP PM Daryl Snow**<br>**WD / Central HR** | CareerCompass squad, SMGS/ApplySG teams |

### Immediate Next Steps
1. **Business Owner (BO) Alignment:** Michelle reviews the 6 critical policy and governance questions below with Xian Zhang Guo and Jacky Lee.
2. **Workforce Development (WD) Alignment:** Michelle and Li Ting align with WD on the standardized 5-field FormSG template for STIPs.
3. **C@G Workable Coordination:** Tech Lead leads the architecture sync with C@G on instance partitioning and whitelisting.
4. **Sprint 1 Kickoff Execution:** Squad begins Sprint 1 delivery on Foundation, Tabs (`F-17`), Ingestion (`F-23`), and Public View loop-back (`F-29`).

---

## 7. Critical Alignment Questions for Business Owners (BO: Xian Zhang Guo & Jacky Lee)

To operationalize the locked R1 strategic posture within our 5.5-sprint ceiling, Product Management must resolve six policy, governance, and cutover questions with our Business Owners:

| # | Domain | Question for Business Owners | Operational Rationale | Product / Delivery Impact |
|---|---|---|---|---|
| **1** | **STIPs Template Governance** | Can PSD mandate a single, locked FormSG template for STIPs across all ministries? | Prevents agency form fragmentation and protects cross-agency mobility analytics. | Enables WD to maintain one central FormSG template; eliminates bespoke form handling. |
| **2** | **STIPs Capacity Automation** | Will WD enforce native FormSG response limits per cohort run (e.g. capping at 20 submissions)? | Real-time seat counters (`F-18`) are deferred to R2 to protect our 5.5-sprint budget. | Automates cohort caps out-of-the-box without requiring custom engineering development. |
| **3** | **Post-Session Attendance** | Who will manage post-session attendance confirmation for STIPs and Gigs? | In-portal attendance check-off rosters (`F-22`) are deferred to R2. | Confirms WD and agency hosts will track attendance via spreadsheet returns post-event. |
| **4** | **Outcome Reporting Mandates** | Will PSD issue a policy instruction mandating host managers to report final placement and completion outcomes? | In 2025 actuals, 7,097 sign-ups occurred with zero mandatory placement tracking. Software cannot track what policy does not enforce. | Confirms SteerCo will accept top-of-funnel discovery metrics (views, clicks, downloads) for R1. |
| **5** | **Field Standardization Defense** | Will Xian Zhang and Jacky back Product in rejecting agency requests for custom form builders? | Barry Lim's rule limits postings to standard profile fields plus max 1 optional short text question (500 chars). | Protects engineering capacity from being derailed by agency-specific screening questions. |
| **6** | **OTG Cutover & Seed Inventory** | What is the hard sunset date for OTG postings across the 6 pilot agencies, and how many seed postings are committed for Day 1? | Avoids dual-system confusion and ensures officers discover active opportunities at launch. | Sets clear cutover milestones and establishes a Day 1 target of 20 to 30 live listings. |

