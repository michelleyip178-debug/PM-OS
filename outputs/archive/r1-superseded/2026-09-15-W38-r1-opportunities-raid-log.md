---
date: 2026-09-15
week: 2026-W38
type: raid-log
scope: CareerCompass R1 (Opportunities Marketplace)
owner: Michelle Yip
related:
  - outputs/decisions/2026-09-14-W38-decision-r1-opportunity-architecture-and-ats-boundary.md
  - outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md
  - outputs/roadmaps/2026-09-14-W38-r1-5-5-sprint-delivery-roadmap.md
  - outputs/analyses/2026-09-14-W38-r1-opportunities-risk-assessment-wbs.md
  - outputs/meeting-notes/2026-09-15-W38-otep-squad-sync.md
---

# CareerCompass R1 Opportunities: Consolidated RAID Log

**Document Reference:** `2026-09-15-W38-r1-opportunities-raid-log`  
**Date:** 2026-09-15 (Week 38)  
**Lead PM:** Michelle Yip  
**Programme Leadership:** Adrian Ang (Product Lead), Barry Lim (Engineering Director), Tan Pow Hwee (Tech Lead)  
**Delivery Envelope:** 5.5 Sprints (4.8 sp committed build + 0.7 sp hardening buffer)  
**Kickoff Window:** Mid-November 2026  

---

## Executive Summary

* **Scope & Delivery Envelope:** R1 is capped at strictly 5.5 engineering sprints across four opportunity models (Gigs, STIPs, Rotations, Jobs), targeting mid-November 2026 development start.
* **Core Architectural Stance:** CareerCompass is strictly a **discovery and routing layer**, not an internal Applicant Tracking System (ATS). Lightweight STIPs and Gigs route to standardized FormSG links; formal postings (SJR, Secondments, Internal Openings) evaluate external Workable integration.
* **Critical Executive Shift:** The January 2027 R1 launch date expected by external stakeholders is unachievable given concurrent CMM and Opportunities complexity. Adrian Ang is actively resetting executive expectations to protect delivery quality.

---

## 1. Risks (R)

| ID | Category | Risk Description | Impact | Rating | Mitigation Strategy | Owner |
|:---:|---|---|---|:---:|---|---|
| **R-01** | **Governance** | **January 2027 R1 timeline unachievable.** External stakeholders expect full R1 delivery in January 2027 despite CMM and Opportunities complexity. | Missed commitments, stakeholder friction, loss of executive trust. | 🔴 Red | Engage Business Owners immediately. Re-baseline scope, present sequencing trade-offs, and establish revised roadmap. | Adrian Ang |
| **R-02** | **Scope / Delivery** | **ATS Scope Creep (`RSK-CAP-01`).** Stakeholders or agencies requesting internal candidate review boards, form builders, or live seat counters. | Delivery slips past 5.5 sprints; engineering capacity collapses. | 🔴 Red | Enforce non-ATS boundary: candidate review boards (`F-07`), live seat counters (`F-18`), and rosters (`F-22`) are strictly out of scope. | Michelle Yip, Tan Pow Hwee |
| **R-03** | **Data Governance** | **CV retention & purge policy undefined (`RSK-TEC-02`).** Candidate pack download (`F-11`) stores sensitive resumes without agreed data lifecycle rules. | Breaches GovTech data governance; candidate privacy audit failure. | 🔴 Red | Implement server-side AES-256 encryption with an automated 90-day post-cycle deletion cron job. | Tan Pow Hwee, GovTech Security |
| **R-04** | **Technical Architecture** | **Synchronous ZIP export gateway timeouts (`RSK-TEC-01`).** Downloading candidate packs synchronously for high-volume roles (80+ applicants) triggers HTTP 504 timeouts. | Agency HR unable to retrieve applicant dossiers during selection. | 🔴 Red | Redesign batch download as an asynchronous background job with pre-signed S3 download links piped via streaming buffers. | Tech Lead, Backend Eng |
| **R-05** | **Resourcing** | **Developer funding cliff at March 2027.** Engineering budget for incoming resources is only confirmed through March 2027. | Inability to retain engineering team to complete R1 delivery and post-launch maintenance. | 🟠 Amber | Accelerate short-term contract hiring; escalate post-March continuation funding to leadership early. | Barry Lim |
| **R-06** | **Market & Adoption** | **Zero-applicant postings & empty gig rate (`RSK-MKT-02`).** 46% of historical gigs received 0–1 applicants because STIPs crowded out project gigs. | Hiring manager frustration and poster churn. | 🟠 Amber | Deploy dedicated browsing sub-tabs (`F-17`) and configure Priority Spotlight engine (`F-19`) to boost gigs needing talent after 7 days. | Li Ting Kway, Michelle Yip |
| **R-07** | **Integration** | **Workable integration & tenant roadblocks (`RSK-GOV-01`).** If Workable requires a new central tender or complex multi-tenant partitioning, hybrid routing stalls. | Formal job applications cannot integrate into central back-office pipelines. | 🟠 Amber | Pure ingestion fallback (`F-23`): formal roles display read-only postings with direct outbound apply links to C@G. | Michelle Yip, Barry Lim |
| **R-08** | **User Adoption** | **Hiring manager login blindspot (`RSK-TEM-02`).** Line managers often refuse to log into an administrative portal, expecting HR to email candidate files. | Low portal adoption by hiring managers. | 🟠 Amber | Provide 1-click candidate dossier ZIP export (`F-11`) so HR can circulate candidate packs offline without forcing line managers into the portal. | Li Ting Kway, Michelle Yip |
| **R-09** | **Market & Adoption** | **Agency defection back to rogue forms (`RSK-MKT-01`).** If 5-field flat builder feels too constrained, agencies revert to unstandardized FormSG links. | Fragmented marketplace; officers bounce outside CareerCompass; 90% drop-off persists. | 🟠 Amber | Audit 10 recent FormSG gigs across MDDI and PSD in Sprint 1 to verify 5 field types cover 90% of use cases. Secure executive posting mandate. | Michelle Yip, Li Ting Kway |
| **R-10** | **Resourcing** | **Single designer capacity bottleneck (`RSK-TEM-03`).** Single designer (Li Ting Kway) supports CMM and R1 simultaneously. | Design handoff delays mid-November engineering kickoff. | 🟢 Green (Mitigated) | Cut candidate review boards and custom form editors entirely from design scope. Keep layouts unified. | Li Ting Kway, Michelle Yip |

---

## 2. Assumptions (A)

| # | Assumption | Validation Status | Impact if False |
|:---:|---|:---:|---|
| **A-01** | **Zero custom ATS build is the binding architecture.** Discovery stays in CareerCompass; candidate selection and screening occur externally. | ✅ **Locked (14 Sep)** | Scope expands by 5+ sprints, blowing through delivery deadlines. |
| **A-02** | **Ingestion fallback (`F-23`) protects delivery runway.** If Workable integration slips, formal roles drop to read-only ingestion without delaying STIPs and Gigs. | ✅ **Locked (14 Sep)** | Formal roles must be removed completely from the launch scope. |
| **A-03** | **Standardized 5-field FormSG template is accepted by Workforce Development (WD).** WD policy team will standardize on 5 flat fields plus 1 optional custom prompt. | 🟡 **Open (Due 23 Sep)** | Agencies demand custom fields, breaking consistent UI cards. |
| **A-04** | **Workable pilot can proceed under existing OGP / C@G tenancy.** No new central e-tender procurement is required for the pilot phase. | 🟡 **Open (Due 18 Sep)** | Long-term formal application tracking remains on external link-outs. |
| **A-05** | **Dual-Posting API bridge and deduplication ingestion (`F-26`) protects candidate integrity.** Pilot agency postings pushed to OTG via API link back to Compass; daily OTG ingestion drops Compass-originated records. | ✅ **Aligned (16 Sep)** | Split candidate pools and duplicate cards across systems. |
| **A-06** | **R1 development starts mid-November.** Engineering can transition to R1 build immediately after MVP code freeze and VAPT sign-off. | 🟡 **Open (Gates Nov)** | MVP post-launch bug triage starves R1 engineering capacity. |

---

## 3. Issues / Active Action Items (I)

| # | Action Item | Owner | Deadline | Verification Deliverable | Status |
|:---:|---|---|:---:|---|:---:|
| **I-01** | Update Master PRD Sections 2.3 & 3.3 to lock pure ingestion fallback (`F-23`) and cut custom ATS scope. | Michelle Yip | **15 Sep 2026** (Today) | Updated PRD committed in `outputs/prds/`. | In Progress |
| **I-02** | Workable discovery sync with Daryl Snow (OGP PM) to review API fit and CUMULUS tenant rules. | Barry Lim, Tech Lead | **18 Sep 2026** | Signed discovery memo on single-instance partitioning. | Open |
| **I-03** | Engage Business Owners (Xian Zhang, Christopher Woo) to formally reset January R1 launch expectations. | Adrian Ang | **19 Sep 2026** | SteerCo messaging alignment minutes. | Open |
| **I-04** | Audit 10 active ministry FormSG gig forms across PSD, MDDI, and ESG against the 5-field schema. | Michelle Yip, Li Ting Kway | **19 Sep 2026** | Field mapping summary table. | Open |
| **I-05** | Lock universal WD FormSG template (5 fixed fields + 1 optional prompt) with policy leads. | Michelle Yip, WD Lead | **23 Sep 2026** | Live master FormSG template URL owned by WD. | Open |
| **I-06** | Build memory-safe ZIP streaming prototype for candidate packs (`F-11`). | Tan Pow Hwee, Backend | **25 Sep 2026** | Benchmark showing 50+ resume export under 4 seconds. | Open |
| **I-07** | Draft CV retention, AES-256 encryption, and 90-day auto-deletion policy for security sign-off. | Tan Pow Hwee, GovTech Sec | **02 Oct 2026** | Approved data governance specification memo. | Open |
| **I-08** | Secure pilot agency exclusive posting commitments from 6 HR Directors. | Michelle Yip, Adrian Ang | **09 Oct 2026** | Signed agency posting agreements. | Open |

---

## 4. Dependencies (D)

| # | Dependency | Needed From | Needed By | Impact if Delayed |
|:---:|---|---|:---:|---|
| **D-01** | **OGP Workable API Specs & Tenant Policy** | Daryl Snow (OGP), Barry Lim | **18 Sep 2026** | Backend planning for formal role application routing stalls. |
| **D-02** | **WD Master FormSG Schema Lock** | WD Policy Lead | **23 Sep 2026** | Frontend design for STIP and Gig application cards cannot freeze. |
| **D-03** | **GovTech Security CV Purge Sign-Off** | GovTech Security Lead, Pow Hwee | **02 Oct 2026** | Candidate pack download engineering card (`F-11`) blocked. |
| **D-04** | **MVP Launch Gate Clearance (~7 Nov sign-off)** | NCS, Rama Moorthy | **07 Nov 2026** | If MVP launch slips past 24–25 Nov, R1 engineering kickoff slips into 2027. |
| **D-05** | **Post-March 2027 Engineering Funding** | Barry Lim, PSD Leadership | **25 Sep 2026** | Headcount loss at end of Q1 2027 threatens R1 completion. |

---

## 5. Milestone Checkpoints

* **Gate 0 (22 Sep 2026):** Workable discovery held, 5-field FormSG audit completed, Anti-ATS scope freeze locked.
* **Gate 1 (02 Oct 2026):** Browsing Sub-Tabs (`F-17`) deployed to staging, master FormSG template locked with WD.
* **Gate 2 (16 Oct 2026):** 90-day CV auto-purge signed off by GovTech Security, read-only fallback feed (`F-23`) verified.
* **Gate 3 (30 Oct 2026):** Direct PDF resume upload (`F-05`) built, Priority Spotlight engine (`F-19`) configured.
* **Gate 4 (13 Nov 2026):** Candidate pack ZIP export (`F-11`) validated, WOG AD grade claim verification locked.
* **Gate 5 (20 Nov 2026):** 25+ seed opportunities loaded into staging across pilot ministries.
* **Gate 6 (04 Dec 2026):** Production hardening buffer complete (0.7 sp); SteerCo launch sign-off.
