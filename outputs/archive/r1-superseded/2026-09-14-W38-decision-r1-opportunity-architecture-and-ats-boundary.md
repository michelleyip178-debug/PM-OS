---
title: "Decision Doc: R1 Opportunities Architecture, Non-ATS Boundary, and Locked 5.5-Sprint Scope"
date: 2026-09-14
week: 2026-W38
owner: Michelle Yip
status: SUPERSEDED 2026-09-16 — the non-ATS boundary and 5.5-sprint ceiling decisions still hold, but Section 5's feature/sprint allocation table is stale. It does not match the current locked plan in the master PRD (outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md, §2.3 Packaging Strategy) or the strategic rescope proposal (outputs/analyses/2026-09-16-W38-r1-strategic-rescope-proposal.md). Kept for historical record only — do not groom or plan sprints from this file.
format: DACI
related:
  - outputs/meeting-notes/2026-09-14-W38-r1-opportunities-jam.md
  - outputs/analyses/2026-09-14-W38-r1-opportunities-direction-and-architecture-brief.md
  - outputs/analyses/2026-09-14-W38-workforce-development-and-cg-alignment-guide.md
  - outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md
  - outputs/decisions/2026-09-10-W37-decision-r1-opportunity-type-scope.md
---

# Decision Doc: R1 Opportunities Architecture, Non-ATS Boundary, and Locked 5.5-Sprint Scope

## 1. TL;DR

* **Decision:** CareerCompass adopts a strict **"Discovery First, Selection Out-of-House"** strategic architecture across all four public sector opportunity models (Gigs, STIPs, Rotations, Jobs). Compass will **never build an internal Applicant Tracking System (ATS)**.
* **Core Rationale:** Building candidate selection pipelines, multi-round reviews, and custom form builders duplicates the whole-of-government central ATS (Workable) and risks ballooning into a multi-year effort that stalls core CareerCompass product delivery ("literally SMGS another version; we cannot afford to build, lah").
* **Execution Guardrail:** Delivery is hard-capped at **strictly 5.5 engineering sprints** (4.8 sp committed feature build + 0.7 sp hardening buffer). All complex applicant tracking, real-time seat counters, and tripartite contract workflows yield to R2.
* **Long-Term Anchor:** Workable is designated as the long-term central ATS engine for formal jobs, SJR, and secondments. Technical API and architecture discovery for Workable is undetermined for now (Tech Lead / OGP TBD).

---

## 2. DACI Framework

| Role | Person / Group | Function in This Decision |
|---|---|---|
| **Driver** | Michelle Yip | Lead Product Manager. Authored RICE analysis, synthesized trade-offs, and framed decision choices. |
| **Approvers** | Adrian Ang, Barry Lim | Programme Director and Technical Director. Validated non-ATS posture, 5.5-sprint ceiling, and field standardization rules. |
| **Contributors** | Li Ting Kway, Workforce Development (WD), C@G Workable Squad | Lead Product Designer, policy leads for STIPs/Gigs, and central ATS product owners. |
| **Informed** | Pilot Agency HR Teams, Megan Yeo (PSD / SJR Scheme Admin), Engineering Squad | Implementation teams, scheme administrators, and pilot ministry partners. |

---

## 3. Context and Problem Statement

CareerCompass faced scope creep across four distinct opportunity archetypes:
1. **Lightweight, informal tasks (Gigs):** Currently handled via FormSG and OTG with minimal screening requirements.
2. **Short-term attachments (STIPs):** Managed by Workforce Development via FormSG, requiring seat management and attendance recording.
3. **Formal developmental postings (Rotations and SJR):** High-stakes placements requiring PDF CV submissions, supervisor notifications, and multi-party interview reviews.
4. **Permanent civil service openings (Jobs and Secondments):** High-volume postings owned centrally by Careers@Gov (C@G).

The squad evaluated whether to construct bespoke native application forms, stage-gate review pipelines, and custom screening builders within CareerCompass. During the Architecture Jam on 2026-09-14, leadership concluded that building an ATS inside Compass violates core product boundaries and drains finite squad capacity.

---

## 4. Formal Decision Log

### Decision 1: We Will Not Build an ATS Inside Compass

* **Decision:** Compass will strictly avoid building applicant tracking features, including multi-stage candidate status boards, complex CV annotation tools, interview panel scoring rubrics, and dynamic form builders.
* **Rationale:** As articulated by Adrian Ang: *"If we build this by ourselves... literally SMGS another version... We cannot afford to build, lah."* The engineering maintenance burden of an ATS would divert the squad from career discovery and guidance.
* **Compass Role:** Compass serves as the primary discovery layer and candidate launchpad. Selection occurs out-of-house.

```
┌───────────────────────────────────────┐       ┌───────────────────────────────────────┐
│     CAREERCOMPASS (MARKETPLACE)       │       │       ENTERPRISE ATS / HRPS           │
├───────────────────────────────────────┤       ├───────────────────────────────────────┤
│ • Discovery & Catalog Partitioning    │       │ • Multi-interviewer scoring rubrics   │
│ • Editable Profile Pre-Fill & CV (F-05│       │ • Automated panel calendar sync       │
│ • Embedded FormSG Intake              │  ───> │ • Formal offer letter generation      │
│ • Secure CV Storage & Batch ZIP (F-11)│       │ • Salary negotiation & grade banding  │
│ • Simple 3-Stage Status (Submitted/   │       │ • Enterprise payroll & tenure actions │
│   In Review/Outcome) + Auto-Expiry    │       │ • Configurable recruiter pipelines    │
└───────────────────────────────────────┘       └───────────────────────────────────────┘
```

### Decision 2: Workable is the Long-Term ATS for Formal Jobs, SJR, and Secondments

* **Decision:** For CV-based formal opportunities, the long-term strategic direction is to rely on Workable as the central whole-of-government ATS.
* **Implementation Posture:** In R1, Compass will not attempt a premature, tightly coupled integration with Workable while the Workable rollout across agencies is ongoing. Technical API and integration discovery is undetermined for now (Tech Lead / Architecture TBD).

### Decision 3: Two-Bucket Operational Model & Dual-Posting Bridge

* **Decision:** Opportunities are cleanly divided into two architectural buckets, supported by a dual-posting bridge to legacy OTG:
  * **Bucket 1 (STIPs and Gigs):** Non-ATS, low friction. Gigs run a lightweight native 3-field quick-post (`F-01`) with in-app or embedded FormSG apply. STIPs are cataloged in dedicated tabs (`F-17`) with applications processed via the standardized, embedded Workforce Development FormSG template.
  * **Bucket 2 (Rotations, SJR, and Jobs):** CV-based formal postings. Rotations and SJR accept direct PDF CV uploads (`F-05`) with editable profile pre-fill, a scope toggle (`F-28`), and seniority advisory guidance (`F-09`). Reviewers receive candidate dossiers via a 1-click zip export (`F-11`). Formal Jobs and Secondments operate on pure read-only ingestion feeds linking out to C@G or Workable (`F-23`).
  * **Dual-Posting & Deduplication Bridge:** Pilot agency opportunities authored in Compass are pushed to legacy OTG via API with link-backs (`?ref=otg`) to Compass. For non-pilot agencies, daily OTG ingestion continues with an automated deduplication check (`F-26`) dropping any record originated in Compass.

### Decision 4: Barry Lim's Field Standardization Rule

* **Decision:** Strict ban on dynamic custom form builders. Postings may only capture standard user profile fields plus a maximum of one optional miscellaneous text field (max 500 characters).
* **Rationale:** Permitting agencies to design custom questions recreates FormSG inside Compass, destabilizing the data model and blowing through engineering capacity.

### Decision 5: Capacity Hard-Capped at Strictly 5.5 Engineering Sprints

* **Decision:** Total R1 feature development is capped at 4.8 sp across Sprint 1 to 4.5, reserving a mandatory 0.7 sp hardening buffer in Sprint 5 to 5.5.
* **Scope Trade-off:** Live seat counters (`F-18`), on-screen attendance rosters (`F-22`), rollover alerts (`F-20`), and complex ATS stage pipelines are deferred to R2.

### Decision 6: Candidate Feedback Loop via Simple 3-Stage Status & Auto-Expiry

* **Decision:** CareerCompass avoids complex ATS pipelines while ending candidate silence through a simple 3-stage status model (*Submitted → In Review → Outcome*) in "My Applications".
* **30-Day Automated Expiry:** To prevent candidates sitting in permanent limbo due to offline agency hiring panels, postings automatically transition to *"Application Cycle Concluded (No Host Update)"* if the agency does not provide an outcome within 30 days of posting close. Detailed multi-interviewer evaluations remain offline via 1-click zip packs (`F-11`).

### Decision 7: Legacy OTG Coexistence Matrix (Option A API Bridge vs Option B Asymmetrical Sunset)

* **Decision:** To prevent administrative double-entry and de-risk the R1 launch, OTG coexistence is structured as a two-option decision matrix:
  * **Option A (Primary Path, Contingent on OTG API):** Compass pushes postings to OTG via an outbound API with a link-back CTA (`?ref=otg`), while inbound batch ingestion filters duplicates (`F-26`).
  * **Option B (Decoupled Fallback, Recommended for Sunset):** If the OTG API is not deliverable in Sprint 1, R1 pivots to a clean asymmetrical cutover. Because OTG has no bulk-upload mechanism and requires 1-by-1 manual entry, zero manual mirroring to OTG is permitted. Compass ingests OTG roles (one-way inbound), pilot agencies post exclusively on Compass, and OTG deploys a global sticky banner plus pinned redirect card to route traffic to Compass.
* **Strategic Rationale:** Eliminates high-friction manual double-entry, isolates Compass from legacy OTG vendor delays, and actively drives public officer migration toward the 2028 OTG decommissioning target.

---

## 5. Scope Allocation Summary (Strictly 5.5 Sprints)

| Sprint Target | Feature ID | Feature Name | Opportunity Model | Dev Effort | Delivery Mechanism |
|---|---|---|---|---|---|
| **Sprint 1** | **F-17** | Dedicated Opportunity Browsing Tabs | Shared Discovery | 0.5 sp | Native UI tabs (*Gigs*, *STIPs*, *Rotations*, *Jobs*). |
| **Sprint 1** | **F-01** | Quick Project Posting | Gigs | 0.5 sp | 3-field form (Deliverables, Hours, Duration). |
| **Sprint 2** | **F-03** | Supervisor Courtesy Notification | Gigs / Rotations | 0.5 sp | Courtesy CC email on candidate application. |
| **Sprint 2** | **F-05** | Direct Resume Attachment | Rotations / SJR | 1.0 sp | Secure single PDF upload with automated safety scan. |
| **Sprint 3** | **F-19** | Priority Spotlight for Unfilled Roles | Gigs | 0.5 sp | Automated "Needs Talent" badge after 7 days. |
| **Sprint 3** | **F-09** | Seniority Fit Guidance | Rotations / SJR | 0.5 sp | Advisory modal on grade mismatch (no hard blocking). |
| **Sprint 3** | **F-28** | Application Scope Toggle | Rotations / SJR | 0.3 sp | Poster toggle: Native PDF Apply vs Outbound C@G. |
| **Sprint 4** | **F-11** | 1-Click Candidate Pack Download | Rotations / SJR | 1.0 sp | Batch zip export of candidate CVs and summary CSV. |
| **Sprint 5 to 5.5** | **Hardening** | Vulnerability Scan & Pilot Onboarding | Platform | 0.7 sp | End-to-end security clearance and pilot readiness. |
| **Total Committed** | | | | **5.5 sp** | **Hard capacity ceiling preserved.** |

---

## 6. Leadership RACI Matrix

| Workstream / Deliverable | Responsible (R) | Accountable (A) | Consulted (C) | Informed (I) |
|---|---|---|---|---|
| **R1 PRD & Scope Boundary** | Michelle Yip | Adrian Ang | Barry Lim, Li Ting Kway | Pilot Agency HR Leads |
| **R1 Sprint 1 to 5.5 Feature Delivery** | Engineering Squad | Barry Lim | Michelle Yip, Li Ting Kway | Adrian Ang |
| **STIPs FormSG Template Standardization** | Michelle Yip | Workforce Development (WD) | Host Agencies | Pilot Agency Coordinators |
| **Workable Technical Discovery & Data Contract** | Undetermined for now (Tech Lead / OGP TBD) | Barry Lim | Michelle Yip, Daryl Snow (OGP) | Adrian Ang |
| **C@G Read-Only Ingestion Pipeline** | Engineering Squad | Barry Lim | C@G Squad | Michelle Yip |
| **Pilot Agency Onboarding (6 Pilot Ministries)** | Michelle Yip | Adrian Ang | Pilot HR Directors | Entire Squad |

---

## 7. Reversibility and Risk Assessment

* **Reversibility:** This decision represents a two-way door. By electing not to build an ATS, Compass preserves architectural flexibility. If future whole-of-government strategy dictates native tracking, it can be evaluated in R3 or R4. Conversely, building an ATS would have been a one-way door, permanently saddling the team with heavy maintenance overhead.
* **Risk 1: Reviewer Friction with Offline Zip Packs (`F-11`):** Reviewers must review candidate dossiers outside the platform. *Mitigation:* The 1-click zip export organizes resumes with standardized naming and candidate overview CSVs, satisfying pilot panel requirements.
* **Risk 2: Agency Defection to FormSG:** Agencies may demand custom qualification questions. *Mitigation:* Enforce Barry Lim's rule: standard profile fields plus one optional free-text field. Agencies evaluate custom criteria during interviews.
* **Risk 3: FormSG STIP Cohort Overflow:** FormSG cannot dynamically communicate real-time seat counts back to Compass cards. *Mitigation:* WD applies native FormSG response limits to close cohorts automatically when caps are reached.

---

## 8. Next Steps and Milestones

1. **2026-09-15:** Michelle conducts alignment sync with Workforce Development (WD) on the 5-field STIPs FormSG template.
2. **2026-09-17:** Technical Lead and Barry Lim align on the security scanning architecture for candidate PDF uploads (`F-05`).
3. **2026-09-22:** Engineering kick-off for Sprint 1 (`F-17` Dedicated Tabs and `F-01` Quick Project Posting).
4. **2026-10-01:** Formal sign-off check-in with Adrian Ang prior to his leave (5 to 9 October).
