# Meeting Notes: R1 Opportunities Discovery & Architecture Jam

**Date:** 2026-09-14 (Week 38)  
**Attendees:**  
* Adrian Ang (Director of Product Management)  
* Barry Lim (GovTech Engineering Lead / Technical Stakeholder)  
* Li Ting Kway (Product Design Lead)  
* Michelle Yip (Product Manager)  

**Meeting Type:** Architecture & Product Strategy Jam  
**Context & Scope:** R1 Opportunities Marketplace (5.5 Sprints Runway), Workable ATS Evaluation, and Whole-of-Government Form Solutions  

---

## Executive Summary

The team evaluated architecture pathways for handling diverse public sector opportunities across CareerCompass, Careers@Gov (C@G), Workable, SMGS, and FormSG. Adrian and Barry firmly established that CareerCompass cannot afford to build a custom Applicant Tracking System (ATS), which would consume resources equivalent to rebuilding SMGS and duplicate future central Workable capabilities. The squad aligned on a two-bucket model: positioning CareerCompass primarily as the discovery layer, keeping STIPs & Gigs lightweight using structured FormSG templates, and designating Workable as the long-term engine for formal, CV-based jobs (SJR, Secondments, and Internal Jobs).

---

## Formal Decision Log

### 1. Zero Custom ATS Build Inside CareerCompass
* **Decision:** CareerCompass will not take on a full ATS scope (multi-round selection flows, complex CV management, bulk export, hiring manager workflows, or evaluation scorecards).
* **Rationale:**
  * Too costly in engineering build and permanent maintenance effort.
  * Massive overlap with Workable's mandate as the Whole-of-Government central ATS pilot.
  * Sucks the squad into a multi-year ATS rebuild, blocking core CareerCompass discovery and mobility features.
* **Source & Key Quotes:**
  * Adrian Ang: *"If we build this by ourselves... literally SMGS another version... We cannot afford to build, lah."* [0:25:49 to 0:26:21]
  * Barry Lim repeatedly pushed back on advanced ATS-grade behavior, custom forms, and bulk management.

### 2. Workable as the Long-Term ATS for Formal Jobs, SJR & Secondments
* **Decision:** For CV-based, formal roles (Scheme of Junior Rotations, Secondments, and Internal Transfers), the strategic direction is to rely on Workable as the back-office ATS rather than re-building hiring tools.
* **Rationale:**
  * Aligns with Whole-of-Government policy selecting Workable as the central ATS pilot.
  * User pain points surfaced during discovery map directly to standard ATS pipeline functionality.
  * Eliminates redundant engineering and prevents future friction when Workable scales across ministries.
* **Source & Key Quotes:**
  * Adrian Ang: *"They wanted Workable as a central ATS lah. So no point we go and build something and maintain it ourselves."* [0:23:58 to 0:24:20]
  * Adrian Ang: *"Workable is a long play for the formal jobs, lah."* [0:47:35 to 0:47:46]

### 3. CareerCompass's Primary Role is Discovery
* **Decision:** CareerCompass will focus on discoverability of internal opportunities (STIPs, Gigs, SJR, and Internal Jobs), rather than owning the entire recruitment and selection lifecycle.
* **Rationale:**
  * Plays to CareerCompass's core strength: officer-facing discovery, profile matching, and personalized navigation.
  * Enables specialized back-end systems (Workable, SMGS, FormSG) to manage administrative workflows.
  * Reinforces ecosystem role clarity: Careers@Gov (C@G) serves external applicants, while CareerCompass serves public officers.
* **Source & Key Quotes:**
  * Group discussion: *"Compass can be the place to discover all internal type of jobs. Then when you click apply, go to Workable."* [0:17:41 to 0:17:58]
  * Repeated framing of CareerCompass as the unified discovery layer over multiple back-ends.

### 4. STIPs & Gigs Will Remain Lightweight; Minimal Product, Not Full ATS
* **Decision (Directional):** For STIPs and Gigs, CareerCompass will deliver a minimal viable solution rather than an ATS. A barebones path using standardized FormSG-style flows is accepted as a viable near-term delivery mechanism for STIPs.
* **Rationale & FormSG Limitations Recognized in the Jam:**
  * STIPs and Gigs do not require formal interview panels or multi-stage recruitment pipelines.
  * FormSG has severe architectural limitations: it operates as a one-way data dump with zero feedback loops, candidate status tracking, or placement/completion reporting ("the black hole").
  * FormSG lacks live two-way webhook sync with CareerCompass, making real-time seat counters (`F-18`) and attendance check-off rosters (`F-22`) technically unviable for R1.
  * Policy constraints (lack of an enforced completion mandate from Workforce Development) mean CareerCompass should not over-invest in complex tracking that agencies may ignore.
* **Source & Key Quotes:**
  * Adrian Ang: *"One really barebones way is to continue FormSG. But they need to have a way to track lah."* [0:47:46 to 0:48:02]
  * Barry Lim: Suggested a single centrally controlled FormSG template whose submissions CareerCompass can still consume and track [0:48:02 to 0:48:22].
  * Team consensus: Acknowledge that WD cannot mandate consistent closure behavior today [0:46:22 to 0:46:43], so R1 must rely on FormSG's native submission limits rather than building complex in-app seat counters.

### 5. Strong Bias Toward Standardized Fields; Strictly Limited Customization
* **Decision (Principle):** Application and opportunity posting forms will feature fixed, standardized fields derived from existing officer profiles and common civil service templates. If customization is permitted, it must be strictly constrained (a small miscellaneous section), rejecting arbitrary custom questions per agency.
* **Rationale:**
  * Preserves clean, structured data for Whole-of-Government mobility reporting and cross-agency analytics.
  * Prevents the "FormSG-inside-Compass" trap where every agency invents its own unstructured schema.
* **Source & Key Quotes:**
  * Barry Lim: *"We should not allow them to change anything... for us to store the data... across different gigs they all have to be the same."* [0:40:11 to 0:41:01]
  * Adrian Ang: Warned that adding and customizing form fields will effectively recreate Workable and SMGS [0:41:43 to 0:42:06].

### 6. Formal Alignment with Workable, C@G & WD Required Before Locking Architecture
* **Decision (Process):** Before locking the technical architecture and database models, the product team must engage Workable/C@G owners and Workforce Development (WD) to clarify:
  1. Whether CareerCompass can share an existing instance of Workable or requires a dedicated partition.
  2. What workflow customizations and agency-specific whitelisting rules are permissible.
  3. How eligibility and internal civil service access rules are modeled.
  4. Long-term operational ownership, licensing, and support for Workable integration flows.
* **Rationale:**
  * Prevents an uncoordinated multi-instance split (CareerCompass Workable vs. C@G Workable).
  * Ensures CareerCompass designs align with C@G's commercial tender and architectural constraints.
  * Reconciles CareerCompass's delivery mandate (2027/2028) with the broader Workable rollout schedule (towards 2030).
* **Source & Key Quotes:**
  * Barry Lim: *"We have to have a discussion with that team... it belongs to them, right, the instance."* [0:33:42 to 0:33:52]
  * Repeated concern about dual-instance scenarios and divergent HR workflows [0:27:51 to 0:28:01; 0:33:06 to 0:33:15].

---

## The Two-Bucket Architecture Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          CAREERCOMPASS (DISCOVERY)                          │
│        Unified discovery portal for all Whole-of-Government opportunities   │
└───────────────────────┬─────────────────────────────┬───────────────────────┘
                        │                             │
                        ▼                             ▼
       ┌─────────────────────────────────┐   ┌────────────────────────────────┐
       │   BUCKET 1: STIPs & Gigs        │   │ BUCKET 2: Formal Jobs & SJR    │
       │   (Lightweight Opportunities)   │   │ (CV-Based Selection)           │
       ├─────────────────────────────────┤   ├────────────────────────────────┤
       │ • No formal interview panel     │   │ • Full CV handling & screening │
       │ • 1 to 3 standard screening Qs  │   │ • Shortlisting & multi-stage   │
       │ • Handled via standard FormSG   │   │ • Workable ATS engine          │
       │ • Direct manager confirmation   │   │ • Ingestion fallback via F-23  │
       └─────────────────────────────────┘   └────────────────────────────────┘
```

1. **Bucket 1: STIPs & Gigs (Lightweight / Low-Governance):**
   * *Profile:* Short-term commitments, part-time micro-projects, and developmental attachments.
   * *Mechanism:* Discovered via CareerCompass tabs. Applications run through a standardized, centrally managed FormSG template provided in collaboration with Workforce Development (WD).
   * *Selection:* Direct 1-on-1 alignment between host project lead and applicant. Zero complex ATS stages.

2. **Bucket 2: SJR, Secondments & Internal Jobs (Formal / CV-Based):**
   * *Profile:* Full-time internal transfers, Scheme of Junior Rotations (SJR), and inter-agency secondments requiring CV reviews, panel evaluations, and formal appointment letters.
   * *Mechanism:* Workable acts as the backend ATS engine. CareerCompass ingests postings for discovery (`F-23`, `F-29`) and routes applicants or pushes candidate dossiers into Workable.

---

## Critical Risks & Unresolved Tensions

### 1. Multi-Instance / Split ATS Risk (C@G vs. CareerCompass)
* *The Risk:* Barry flagged that the Careers@Gov (C@G) Workable team owns their specific instance and configuration. They may decline to share their instance, reject custom civil service whitelisting rules, or block inter-agency workflow variations.
* *The Consequence:* Agencies face two separate Workable instances, forcing HR officers to maintain multiple accounts, duplicate job postings, and navigate fractured logins.
* *Mitigation Plan:* Barry and Michelle to conduct an architecture alignment sync with the C@G/Workable team to evaluate single-tenant partitioned access versus multi-tenant API federation.

### 2. Policy vs. Product Mismatch on STIPs & Gigs Completion
* *The Risk:* Product discussions assume CareerCompass can track application counts, placements, and project completions. However, Workforce Development (WD) currently has no enforced policy mandating that agencies report outcomes or close feedback loops.
* *The Consequence:* Officers submit applications into an administrative void, and platform analytics become unreliable because agencies bypass post-placement updates.
* *Mitigation Plan:* Rely on lightweight automated prompts (such as confirmation checkboxes and email reminders) rather than over-engineering complex mandatory closure dashboards that agencies will ignore.

### 3. Scope Creep Toward a Quasi-ATS
* *The Risk:* Despite agreeing not to build an ATS, feature proposals continue accumulating ATS mechanics (candidate roster tables, status milestones, bulk zip downloads, and custom screening builders). Adrian warned: *"As you build more and more, you start asking why did I build, why should I not just use Workable?"*
* *The Consequence:* The engineering squad exceeds the 5.5-sprint runway, resulting in incomplete features and delayed pilot launch.
* *Mitigation Plan:* Enforce the locked 5.5-sprint boundary. CareerCompass provides only direct file attachments (`F-05`), seniority guidance (`F-09`), and simple candidate folder exports (`F-11`), leaving stage evaluations to offline channels or Workable.

### 4. Customization vs. Data Standardization
* *The Risk:* Design (Li Ting) noted that agencies demand bespoke screening questions (mirroring current FormSG flexibility), while Tech (Barry) emphasized that unrestricted custom questions corrupt data integrity and prevent cross-agency reporting.
* *The Consequence:* Creating a dynamic form builder consumes 3 sprints and produces fragmented data.
* *Mitigation Plan:* Hard-code 5 universal civil service fields (Name, Current Agency, Grade, Statement of Interest, Resume) plus a maximum of 1 to 3 optional text prompts that remain excluded from central reporting.

### 5. Timeline Gap (2027/2028 Mandate vs. 2030 WOG Workable Rollout)
* *The Risk:* CareerCompass has a delivery mandate through 2027/2028, whereas full Whole-of-Government Workable procurement and ministry-wide onboarding may stretch toward 2030.
* *The Consequence:* Over-investing in a custom temporary solution wastes effort, while waiting passively for Workable leaves pilot agencies unserved in R1.
* *Mitigation Plan:* Implement a clear two-horizon strategy: build a lean, standard application pipeline for R1 (5.5 sprints), while designing API contracts that plug into Workable when ready.

### 6. FormSG Operational & Architectural Limitations
* *The Risk:* While FormSG is accepted as a barebones near-term option for STIPs, the jam surfaced four structural system limitations:
  1. **The "Black Hole" Tracking Void:** FormSG is a one-way form submission tool that dumps data into spreadsheets or inboxes. It provides zero feedback loops, candidate status tracking, or placement and completion reporting.
  2. **Schema Fragmentation ("FormSG-Inside-Compass"):** Unregulated FormSG usage allows every agency to invent bespoke forms and custom questions, destroying Whole-of-Government mobility reporting and cross-agency analytics.
  3. **Lack of Bidirectional Webhook Sync:** FormSG does not write back candidate records to CareerCompass in real time. This technical limitation forced the deferral of live seat availability counters (`F-18`) and in-portal attendance check-off rosters (`F-22`) from R1.
  4. **Disconnected User Experience & Trapped History:** Officers are bounced out of the authenticated CareerCompass portal into an external web form, losing application history. An officer's developmental track record remains trapped in isolated agency spreadsheets rather than feeding their civil service profile.
* *The Consequence:* Relying on FormSG without centralized governance perpetuates data blindspots and risks severe officer dissatisfaction from unmanaged cohort overshoots.
* *Mitigation Plan:* Mandate a single centrally controlled FormSG template managed by Workforce Development (WD), instruct hosts to configure native FormSG response caps per cohort, and accept that R1 measures top-of-funnel discovery engagement rather than post-session outcomes.

---

## Leadership RACI Matrix: Opportunities Architecture

| Workstream & Decision Domain | Responsible (R) | Accountable (A) | Consulted (C) | Informed (I) |
|---|---|---|---|---|
| **1. Overall Opportunities Strategy**<br>*(STIPs & Gigs + SJR & Internal Jobs)* | **Adrian Ang** (Product Strategy & Scoping)<br>**Michelle Yip** (Product Direction & Backlog) | **PSD / CareerCompass Product Owner** (Adrian Ang / Designated PO) | **Barry Lim** (Technical Feasibility)<br>**Workforce Development** (WD Policy)<br>**C@G Workable / HRPS Owners** | Wider CareerCompass squad, WD stakeholders, and ministry HR community |
| **2. Workable Integration & Formal Jobs**<br>*(SJR & Secondments Architecture)* | **Tech Discovery:** Undetermined for now (Tech Lead TBD)<br>**Barry Lim** (Technical Integration & Instance Feasibility)<br>**Michelle Yip** (Product & Workflow Requirements only) | **Product & Tech Leadership** (Adrian Ang + Tan Pow Hwee / Engineering Lead) | **C@G / Workable Product & Tech Owners**<br>**WD / Central HR Authorities** | Other public sector platform teams (SMGS, scholarship portals), OpenTechGov (OTG) |
| **3. STIPs & Gigs Near-Term Solution**<br>*(Forms, Dashboards & Tracking)* | **Li Ting Kway** (UX & Interface Design)<br>**Michelle Yip** (Product Requirements & Tracking Rules)<br>**Barry Lim / Engineering** (FormSG / Tech Choice) | **Opportunities Squad** (Michelle Yip + Tan Pow Hwee) | **Workforce Development** (WD Policy)<br>**Selected Pilot Agency HR POCs** | Wider civil service HR community, C@G / Workable teams |
| **4. Data Model & Form Standardization**<br>*(Fixed vs. Custom Fields Schema)* | **Barry Lim** (Data Architecture & Schema)<br>**Li Ting Kway** (UX for Constrained Misc Sections) | **CareerCompass Tech Lead / Data Architect** (Tan Pow Hwee / Barry Lim) | **Michelle Yip** (Agency Operational Validation)<br>**WD Analytics Stakeholders** | Product squads and leadership relying on opportunities data (Compass, WD, PSD) |
| **5. Policy & Governance Alignment**<br>*(Mandates, Completion & Usage Rules)* | **Workforce Development** (WD Policy Team) | **Workforce Development Leadership / Central HR Authority** | **Michelle Yip & Adrian Ang** (Product & Operational Realities)<br>**Barry Lim** (Technical Feasibility & Cost) | Agency HR directors, line managers, civil service officers, C@G / Workable teams |
| **6. Cross-Team Coordination**<br>*(Workable, C@G & CareerCompass Alignment)* | **Barry Lim** (Technical Integration & Constraints Lead)<br>**Michelle Yip / Adrian Ang** (Product Representation) | **Joint WOG ATS Governance Working Group / Senior Leadership** | **C@G Product & Tech Leads**<br>**OGP PM Daryl Snow**<br>**Workforce Development / Central HR** | CareerCompass dev squad, SMGS and ApplySG teams, future platform consumers |

---

## Action Items Summary

| # | Action Item | Owner | Target Horizon | Deliverable & Verification Target |
|---|---|---|---|---|
| **1** | **Workable API & Architecture Discovery** | Undetermined for now (Tech Lead / Architecture TBD) | Sprint 1 Kickoff | Complete assessment of Workable endpoints (`GET /jobs`, `POST /candidates`, webhooks) and sync with OGP PM Daryl Snow. (Michelle Yip provides product context only). |
| **2** | **C@G Workable Tenant & Governance Sync** | Barry Lim | Sprint 1 Architecture | Clarify with the C@G team whether a shared instance can support civil service whitelisting rules or if separate instances are required. |
| **3** | **STIPs & Gigs FormSG Standardization** | Michelle Yip / Li Ting Kway | Sprint 1 Design Jam | Define the fixed 5-field schema + 1 optional text field with Workforce Development (WD), testing against 10 active agency forms. |
| **4** | **Candidate Data Governance & File Archiving** | Tan Pow Hwee / GovTech Sec | Sprint 2 Backend | Define encryption, retention, and 90-day automatic deletion rules for uploaded candidate resumes. |
| **5** | **Two-Horizon Product Roadmap Alignment** | Michelle Yip / Adrian Ang | Leadership Review | Publish formal two-horizon documentation separating R1 interim mechanisms from long-term Workable integration. |
