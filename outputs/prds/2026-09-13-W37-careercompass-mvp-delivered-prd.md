# Product Requirements Document (PRD): CareerCompass MVP (As Delivered)

**Document Reference:** CC-PRD-MVP-DELIVERED  
**Product:** CareerCompass (OTEP)  
**Lifecycle Stage:** MVP Feature Complete (Code Freeze: 28 August 2026, VAPT / Launch Readiness Window)  
**Target Production Launch:** 24 to 25 November 2026  
**Document Owner:** Michelle Yip (Product Manager, Opportunities & Platform)  
**Technical Lead:** Pow Hwee Tan  
**Product Lead:** Adrian Ang  
**Lead Designer:** Amber Tong  

---

## 1. Executive Summary & Context

CareerCompass (One-Team Execution Platform / OTEP) is the unified career development and mobility platform for the Singapore Public Service. Before this release, public officers discovered growth and mobility roles through informal networks, fragmented broadcast emails, or disconnected portals including Careers@Gov, Opportunity Bank (OTG), and ad-hoc agency FormSG links.

The MVP establishes a single authenticated front door where public officers discover short-term and permanent opportunities across government. It aggregates short-term projects (STIPs), micro-projects (Gigs), internal jobs, and external public sector vacancies into a unified, authenticated listing. 

MVP development concluded on 28 August 2026 (Sprint 8 close). This document acts as the baseline PRD recording the delivered functionality, operational integration points, and architectural constraints currently in VAPT execution and performance testing.

---

## 2. Problem Statements & Goals

### The Problem
* **Public Officers:** Officers struggle to discover mobility opportunities because roles are scattered across legacy systems and agency-specific forms. Information freshness is inconsistent, and officers cannot easily verify their eligibility before applying.
* **Agencies & HR Teams:** Host agencies lack centralized reach. Posting relies on manual email blasts or spreadsheets, with zero visibility into cross-agency interest or applicant quality.

### MVP Goals & Success Criteria

| Goal | Metric / Benchmark | Operational Target |
|---|---|---|
| **Centralize Discovery** | Monthly Active Officers (MAO) across pilot agencies (PSD, ESG, early waves) | 60% of eligible pilot officers browse listings within 60 days of launch |
| **Drive Mobility Action** | Application Intent Rate (Clicks from Detail Page to Apply CTA) | ≥35% conversion from detail view to application click |
| **Channel Transition** | Outbound FormSG / External Apply Traffic | ≥50% of total STIP and Gig applications originating from CareerCompass by Month 3 |
| **System Reliability** | Listing and Detail Page P95 Response Times | <2.0 seconds under 100 concurrent user load |

---

## 3. Target User Personas & Permissions

| Persona | Description | MVP Access Scope |
|---|---|---|
| **Public Officer (General)** | Active civil servants from onboarded agencies holding valid WOG AD credentials. | Browse, search, filter opportunities, view detailed role specifications, click out to apply. |
| **Restricted / Excluded Officer** | Officers from non-onboarded agencies or security-exempt schemes (e.g. MINDEF, MHA confidential schemes). | Gated at authentication. Receives clear LifeSG-aligned ineligibility message. |
| **System Administrator (DevOps / Ops)** | Core technical and platform operations team. | Manage automated batch pipelines, monitor error logs, run operational sync scripts. |

---

## 4. Delivered Feature Specifications

The MVP delivery is structured around five core operational capabilities:

```
[ WOG AD Single Sign-On ]
           │
           ▼
[ Opportunity Discovery Hub ] ──► [ Search & Type Filtering ]
           │
           ▼
[ Opportunity Detail Page ]
     │                │
     ▼                ▼
[ FormSG Outbound ]  [ Careers@Gov Outbound ]
```

### Module 1: Authentication & Access Control

* **WOG AD Single Sign-On (SSO):**
  * Officers authenticate using their standard Whole-of-Government Azure Active Directory (WOG AD) credentials via Keycloak integration.
  * Direct authentication occurs without manual password entry on CareerCompass.
* **Single Domain Architecture:**
  * Uses a unified URL structure (`env.careercompass.gov.sg`) rather than a separate auth subdomain, avoiding remote browser isolation (Menlo) proxy conflicts on intranet devices.
* **Session Management & Concurrency:**
  * Single active session per officer. Logging in on a second device terminates the earlier session.
* **Access Gating & Error States:**
  * Non-onboarded agency officers receive a standard LifeSG 403 unauthorized page explaining their agency status without leaking internal system errors.

### Module 2: Opportunity Discovery Hub & Listing

* **Unified Listing Grid:**
  * Clean 3-column responsive card layout displaying active, published opportunities (15 cards per page with pagination).
  * Card metadata: Opportunity Title, Host Agency, Opportunity Type Badge, Application Closing Date, and Work Arrangement tag.
* **Temporal Rules & Lifecycle:**
  * Cards display dynamically based on `closing_date > today`. Expired opportunities drop off the live index automatically.
  * "Closing Soon" indicator badge flags roles closing within 7 calendar days.
* **Ringfencing & Eligibility:**
  * POCDEX identity data checks officer agency and scheme against opportunity ringfencing criteria. Roles restricted to specific agency pools hide automatically from ineligible officers.
* **Empty & Fallback States:**
  * Dedicated zero-result state providing clear search-reset actions when queries or filter combinations yield no matches.

### Module 3: Search & Exploration

* **Keyword Search:**
  * Submit-to-search interaction model querying opportunity titles and host agency names. Fuzzy matching handles minor spelling errors.
* **Opportunity Type Filter:**
  * Single-select and multi-select chips for:
    * Short-Term Immersion Programmes (STIP)
    * Micro-projects (Gigs)
    * Internal Jobs / Rotations
    * External Public Service Openings (Careers@Gov)
* **Filter Management:**
  * One-click "Clear all filters" control resetting the listing to default sorting (newest posted first).

### Module 4: Opportunity Detail Page & Application Routing

* **Role Specifications Display:**
  * Comprehensive detail view showing full role description, scope of work, key deliverables, required competencies, time commitment, and supervisor contact details.
* **Outbound Application Hand-off:**
  * **STIPs, Gigs, and Internal Jobs:** Apply CTA triggers an outbound redirect to the designated Workforce Development FormSG template or agency form in a new browser tab.
  * **Careers@Gov Roles:** Dedicated "Apply on Careers@Gov" CTA deeplinks officers directly to the source job requisition.
* **Pre-Redirect Advisory Notice:**
  * Clear explanatory copy advising officers that they are navigating to external government form services to complete submission.
* **Direct Deep-Link Resolution:**
  * Authenticated deep-links resolve directly to specific opportunity pages. Unauthenticated clicks route through WOG AD login before loading the target opportunity.

### Module 5: Foundational Data Ingestion & Integration

* **Opportunity Data Pipelines:**
  * Daily batch file ingestion job parsing verified OTG data files into the CareerCompass database.
  * API ingestion for Careers@Gov external postings via central agency pipeline.
* **POCDEX Integration:**
  * Formally verified against 21 test personas across 195 test cases. Consumes verified identity, agency affiliation, and employment data.

---

## 5. Explicit MVP Non-Goals & Scope Boundaries

To protect launch stability and focus delivery on discovery, the following capabilities were deliberately excluded from MVP and deferred to Release 1 (R1) or beyond:

| Excluded Feature | Reason for Deferral | Destination |
|---|---|---|
| **Native Application Forms** | FormSG handles lightweight STIP/Gig workflows without custom software overhead. | R1 (F-01 Internal Job Application Form) |
| **In-App Application Tracking** | Outbound FormSG redirect has no return webhook; tracking requires native forms. | R1 (F-05 Officer Application Dashboard) |
| **Native Opportunity Creation Form** | Host agencies continue posting via legacy OTG consoles during launch phase. | R1 (F-03 Opportunity Creation Form) |
| **Moderator Approval Workflow** | Confirmed zero statutory or HR policy requirement for intermediate approving moderators. | Cut entirely from roadmap |
| **Competency Match Score (%)** | Algorithmic scoring deferred to maintain focus on verified binary eligibility. | R1 Discovery / Post-MVP |
| **ATS Integration** | Whole-of-Government ATS upgrade timeline is scheduled for 2028. | R2 / 2028 Horizon |
| **Specialist Job Rotations (SJR) Native Apply** | Policy and operational workflows require host agency bilateral clearance. | R1 Pipeline |

---

## 6. Technical Architecture & Non-Functional Specifications

```
  [ Public Officer Browser ]
              │
              │ HTTPS (WOG AD SSO)
              ▼
   ┌────────────────────────────────────────────────────────┐
   │ CareerCompass Web Frontend (Vanilla CSS, Responsive UI)│
   └──────────────────────────┬─────────────────────────────┘
                              │ REST API
                              ▼
   ┌────────────────────────────────────────────────────────┐
   │ CareerCompass Backend Service (Go / Keycloak IdP)      │
   └──────────┬───────────────────────────────┬─────────────┘
              │                               │
       SQL    ▼                               ▼ Data Pipelines
   ┌──────────────────┐               ┌───────────────────────┐
   │ PostgreSQL DB    │               │ OTG Ingestion (Batch) │
   │ (Opportunities & │               │ Careers@Gov (API)     │
   │  Ringfencing)    │               │ POCDEX Integration   │
   └──────────────────┘               └───────────────────────┘
```

### Architecture Overview
* **Hosting Environment:** Government Commercial Cloud (GCC) on AWS Singapore region.
* **Identity Provider:** Keycloak integrated with Azure AD / WOG AD via OpenID Connect (OIDC).
* **Database & Persistence:** Amazon Aurora PostgreSQL managing opportunities, metadata, agency registries, and ringfencing tables.
* **Analytics & Instrumentation:** PostHog telemetry tracking event funnels (`oppr_list_view`, `oppr_detail_view`, `click_to_formsg`, `click_to_CG`).

### Non-Functional Requirements (NFRs)

| Dimension | Specification | Verification Method |
|---|---|---|
| **Security & Compliance** | Full VAPT coverage across Web, API, and Cloud infra (NCS engagement). | Staged assessment 7 Sep to 8 Nov 2026; formal sign-off by 7 Nov. |
| **Performance Capacity** | 100 concurrent active users browsing, filtering, and navigating. | Performance load testing scheduled for 15 to 17 Sep 2026. |
| **Availability** | 99.5% service uptime during business hours (08:00 to 20:00 SGT). | CloudWatch monitoring and automated synthetic probes. |
| **Data Classification** | Restricted / Security Normal (Restricted Cloud Eligible). | Exclusion of Confidential schemes (MHA, MFA) and sensitive ratings. |

---

## 7. Operational Transition & Launch Roadmap

The MVP delivery sits on the following critical-path schedule leading to production release:

```
[ 28 Aug ] Code Freeze Complete
    │
    ▼
[ 7 Sep - 8 Nov ] VAPT Security Assessment Window
    │
    ▼
[ 15 - 17 Sep ] Production Performance Load Testing
    │
    ▼
[ 7 Nov ] Security Sign-off & Final Governance Gate
    │
    ▼
[ 24 - 25 Nov ] Production MVP Launch
```

* **Code Freeze:** Completed 28 August 2026 (Sprint 8 close).
* **VAPT Assessment:** 7 September to 8 November 2026 (Compass/CIE closing 30 Oct; POCDEX closing 6 Nov).
* **Performance Testing:** 15 to 17 September 2026.
* **Pre-Launch Operational Checkpoints:**
  * Lock performance testing workload assumptions and dependency schedules.
  * Conclude CIE data classification review and GovAssure audit artifacts.
  * Conduct production dry-run with pilot agency groups (PSD, ESG).
* **Go-Live Date:** 24 to 25 November 2026.
