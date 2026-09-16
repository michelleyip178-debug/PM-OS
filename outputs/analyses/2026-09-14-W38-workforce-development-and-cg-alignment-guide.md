# Stakeholder Alignment Guide: Workforce Development (WD) & C@G Workable

**Document Reference:** `2026-09-14-W38-workforce-development-and-cg-alignment-guide`  
**Date:** 2026-09-14 (Week 38)  
**Author:** Michelle Yip (Product Manager)  
**Context:** Alignment Prep for Upcoming Sessions with Workforce Development (WD) Policy Owners and Careers@Gov (C@G) Workable Team  

---

## 1. Overview & Objective

Following the Architecture Jam with Adrian Ang and Barry Lim on 2026-09-14, CareerCompass locked its R1 strategic posture: **"Discovery First, Selection Out-of-House"** within a **5.5-sprint delivery ceiling**. 

To execute this direction without delivery friction, product management must align two external stakeholder groups:
1. **Workforce Development (WD):** Policy and operational owner for STIPs, Gigs, and inter-agency mobility schemes.
2. **Careers@Gov (C@G) Workable Team & OGP:** Technical and product owners of the piloted central Whole-of-Government ATS.

This guide outlines the discussion agendas, non-negotiable boundaries, proposed templates, and discovery questions for each stakeholder meeting.

---

## 2. Alignment Track A: Workforce Development (WD)

### Context & Current Reality
* Workforce Development currently provides an adaptable FormSG template for STIPs and Gigs that individual agencies tailor independently.
* WD wants rich reporting on mobility metrics (posting volume, applicant counts, placement success, and project completion rates).
* **The Structural Gap:** WD has not established an enforced policy mandating that host agencies close the loop, record placements, or confirm completion. Without policy enforcement, agencies run offline, creating an administrative void.

### Strategic Objective for WD Sync
* Position CareerCompass as the **discovery and aggregation layer** for all STIPs and Gigs across government.
* Agree on a single **standardized, centrally controlled FormSG template** for STIPs in R1, eliminating agency-specific form fragmentation.
* Align on data realities: software cannot track completion if policy does not mandate closure reporting.

### Proposed Agenda (30 Minutes)
1. **R1 Direction Briefing (10 mins):** Share the "Discovery First" model. CareerCompass displays all STIPs and Gigs in top-level catalog tabs (`F-17`), but delegates the application form to a standardized WD FormSG template.
2. **Form Standardization Agreement (10 mins):** Present the fixed 5-field schema. Address why arbitrary custom agency questions must be banned to preserve Whole-of-Government analytics.
3. **Outcome Tracking & Governance Alignment (10 mins):** Review what CareerCompass can track automatically (views, link clicks, submissions) versus what requires WD policy mandates (completion confirmation).

### The Standardized 5-Field FormSG Template Proposal

| Field # | Field Label | Field Type | Data Purpose | System Rule |
|---|---|---|---|---|
| **1** | Full Name & Official Email | Text (Pre-filled via WOG AD) | Applicant Identity | Standardized, non-editable |
| **2** | Current Ministry / Agency | Dropdown (WOG Standard) | Inter-Agency Analytics | Controlled vocabulary |
| **3** | Current Civil Service Grade | Dropdown (MX / Schemes) | Eligibility Guidance | Standardized bands |
| **4** | Statement of Interest | Long Text (Max 300 words) | Role Fit Evaluation | Standardized text |
| **5** | Resume / Career Summary | File Upload (PDF, max 5MB) | Comprehensive Screening | Single attachment |
| *Optional* | *Host Specific Question* | *Single Short Text (Max 1)* | *Role Specific Detail* | *Excluded from central reporting* |

### Firm Boundaries for WD Discussions
* **Say "No" to In-Portal Attendance Software (`F-22`):** Explain that building custom attendance checklists in CareerCompass costs 1.0 sprint and will fail if agencies lack a compliance mandate. STIP hosts will submit attendance via WD's established spreadsheet process in R1.
* **Say "No" to Dynamic Custom Form Builders:** Explain Barry's architecture principle: allowing every agency to create bespoke questions destroys cross-agency reporting and turns CareerCompass into an unmaintainable form engine.

---

## 3. Alignment Track B: C@G Workable Team & OGP PM Daryl Snow

### Context & Current Reality
* Careers@Gov (C@G) is piloting Workable as the central Whole-of-Government ATS for public hiring.
* Adrian Ang and Barry Lim agreed that Workable is the strategic long-term engine for formal, CV-based internal roles (**SJR**, **Secondments**, and **Internal Jobs**).
* **The Multi-Instance Risk:** Barry warned that C@G owns their Workable configuration and commercial contract. If C@G declines to share their instance or accommodate internal whitelisting rules, government risks running two separate Workable setups, forcing HR officers to log into multiple consoles.

### Strategic Objective for C@G / Workable Sync
* Understand C@G's Workable deployment topology (Single-tenant with agency sub-departments versus multi-tenant per ministry).
* Determine whether CareerCompass can connect as an authorized API client to pull jobs (`GET /jobs`) and push internal applications (`POST /candidates`).
* Clarify technical ownership: technical API and architecture discovery is led by GovTech Tech Leadership (Barry Lim / TBD), while Michelle Yip provides product requirements.

### Five Technical Discovery Questions for C@G & Daryl Snow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 WORKABLE DISCOVERY FRAMEWORK (5 QUESTIONS)                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. TENANT ARCHITECTURE: Single WOG instance vs. separate agency accounts?   │
│ 2. HRPS INTEGRATION: How are job requisitions currently synced to Workable? │
│ 3. API WRITE ACCESS: Can CareerCompass push internal candidates via API?    │
│ 4. WEBHOOK STATUSES: Are stage-change webhooks supported for tracking?      │
│ 5. CUMULUS ALIGNMENT: What is Workable's roadmap relative to CUMULUS?       │
└─────────────────────────────────────────────────────────────────────────────┘
```

1. **Tenant Structure & Account Partitioning:**
   * Is C@G deploying Workable as a single shared Whole-of-Government tenant with agency sub-departments, or does each agency own an independent account? Will CareerCompass need a master API token or per-agency credentials?
2. **HRPS to Workable Pipeline:**
   * How are Internal Jobs and Secondments currently synchronized between HRPS and Workable? Is there an automated batch pipeline, or do agency HR officers post directly in Workable?
3. **Candidate Submission Scopes (`w_candidates`):**
   * Can C@G grant CareerCompass backend services write permissions to submit officer applications via `POST /spi/v3/jobs/:shortcode/candidates` on behalf of authenticated civil servants?
4. **Webhook Support for Application Statuses:**
   * Does C@G support configuring outbound webhook subscriptions (`POST /subscriptions`) to notify CareerCompass when candidates move to "Shortlisted", "Interview", or "Disqualified" stages?
5. **CUMULUS Interaction & Roadmap:**
   * How does CUMULUS fit into the Workable deployment? Is Workable serving as an interim solution, or is CUMULUS integrating with Workable's candidate processing pipeline long-term?

### Firm Boundaries for C@G Discussions
* **Zero Launch Dependency on Workable:** CareerCompass R1 will not delay its release date waiting for Workable API tokens or tenant agreements. If technical discussions stretch past Sprint 2, CareerCompass launches cleanly with read-only ingestion (`F-23`) and 1-click shortlist pack downloads (`F-11`).
* **Technical Ownership Boundary:** Michelle Yip represents product user journeys and discovery requirements. Low-level API testing, token generation, and network security architecture belong to GovTech Tech Leadership (Barry Lim / assigned Tech Lead).

---

## 4. Alignment Summary & Next Actions

| Stakeholder Group | Primary Contact | Core Deliverable | Target Timeline |
|---|---|---|---|
| **Workforce Development (WD)** | WD Policy & Mobility Leads | Agreed 5-Field Standardized FormSG Template for STIPs | Sprint 1 Grooming |
| **Careers@Gov (C@G) Workable Squad** | C@G Product & Tech Leads | Tenant Partitioning & Multi-Instance Assessment | Sprint 1 Architecture |
| **Open Government Products (OGP)** | Daryl Snow (OGP PM) | Workable Technical Capabilities & CUMULUS Roadmap Review | Sprint 1 Architecture |
| **GovTech Engineering** | Barry Lim / Tan Pow Hwee | Backend Data Schema & Ingestion Contract Sign-Off | Sprint 1 Tech Review |
