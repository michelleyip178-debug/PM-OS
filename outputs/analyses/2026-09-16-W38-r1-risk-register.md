---
date: 2026-09-16
week: 2026-W38
type: raid-log
scope: CareerCompass R1 (Opportunities Marketplace)
owner: Michelle Yip
merged_from:
  - outputs/analyses/2026-09-15-W38-r1-opportunities-raid-log.md
  - outputs/analyses/2026-09-14-W38-r1-opportunities-risk-assessment-wbs.md
related:
  - outputs/prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md
  - outputs/roadmaps/2026-09-14-W38-r1-5-5-sprint-delivery-roadmap.md
  - outputs/meeting-notes/2026-09-15-W38-otep-squad-sync.md
---

# CareerCompass R1 Opportunities: Risk Register & Tracking WBS

**Lead PM:** Michelle Yip

**Programme Leadership:** Adrian Ang (Product Lead), Barry Lim (Engineering Director), Tan Pow Hwee (Tech Lead)

**Tracking Lead:** Jobelle (Project Coordinator)

**Delivery Envelope:** 5.5 Sprints (4.8 sp committed build + 0.7 sp hardening buffer)

**Kickoff Window:** Mid-November 2026

> **Merge note:** this combines the programme-level RAID log (15 Sep) with the operational Risk Assessment WBS (14 Sep) — the first section is the compact risk/assumption/issue/dependency view for status reporting, the second is the detailed 24-activity tracking breakdown Jobelle works from day to day. Originals archived 2026-09-16.

---

## Executive Summary

- **Scope & Delivery Envelope:** R1 is capped at strictly 5.5 engineering sprints across four opportunity models (Gigs, STIPs, Rotations, Jobs), targeting mid-November 2026 development start.
- **Core Architectural Stance:** CareerCompass is strictly a discovery and routing layer, not an internal ATS. Lightweight STIPs and Gigs route to standardized FormSG links; formal postings (SJR, Secondments, Internal Openings) evaluate external Workable integration.
- **Critical Executive Shift:** The January 2027 R1 launch date expected by external stakeholders is unachievable given concurrent CMM and Opportunities complexity. Adrian Ang is actively resetting executive expectations to protect delivery quality.

---

## 1. Risks

| ID | Category | Risk | Impact | Rating | Mitigation | Owner |
|:---:|---|---|---|:---:|---|---|
| R-01 | Governance | January 2027 R1 timeline unachievable given CMM and Opportunities complexity | Missed commitments, stakeholder friction, loss of executive trust | 🔴 Red | Engage BOs immediately; re-baseline scope, present sequencing trade-offs, revised roadmap | Adrian Ang |
| R-02 | Scope / Delivery | ATS scope creep — stakeholders/agencies requesting candidate review boards, form builders, live seat counters | Delivery slips past 5.5 sprints; engineering capacity collapses | 🔴 Red | Enforce non-ATS boundary: `F-07`, `F-18`, `F-22` strictly out of scope | Michelle Yip, Tan Pow Hwee |
| R-03 | Data Governance | CV retention & purge policy undefined — `F-11` stores sensitive resumes with no agreed data lifecycle rules | Breaches GovTech data governance; candidate privacy audit failure | 🔴 Red | Server-side AES-256 encryption + automated 90-day post-cycle deletion cron | Tan Pow Hwee, GovTech Security |
| R-04 | Technical Architecture | Synchronous ZIP export gateway timeouts on high-volume roles (80+ applicants) | Agency HR unable to retrieve applicant dossiers during selection | 🔴 Red | Redesign as async background job with pre-signed S3 links via streaming buffers | Tech Lead, Backend Eng |
| R-05 | Resourcing | Developer funding cliff at March 2027 | Inability to retain engineering team through R1 delivery and post-launch maintenance | 🟠 Amber | Accelerate short-term contract hiring; escalate post-March funding early | Barry Lim |
| R-06 | Market & Adoption | Zero-applicant postings — 46% of historical gigs received 0-1 applicants, crowded out by STIPs | Hiring manager frustration and poster churn | 🟠 Amber | Dedicated browsing tabs (`F-17`) + Priority Spotlight engine (`F-19`) after 7 days | Li Ting Kway, Michelle Yip |
| R-07 | Integration | Workable tenant/integration roadblocks if a new central tender or multi-tenant partitioning is required | Formal job applications can't integrate into central back-office pipelines | 🟠 Amber | Pure ingestion fallback (`F-23`) — read-only postings with outbound apply links to C@G | Michelle Yip, Barry Lim |
| R-08 | User Adoption | Hiring manager login blindspot — line managers expect HR to email candidate files, resist logging into a portal | Low portal adoption by hiring managers | 🟠 Amber | 1-click candidate dossier ZIP export (`F-11`) so HR circulates packs offline | Li Ting Kway, Michelle Yip |
| R-09 | Market & Adoption | Agency defection back to rogue forms if the 5-field flat builder feels too constrained | Fragmented marketplace; officers bounce outside CareerCompass; 90% drop-off persists | 🟠 Amber | Audit 10 FormSG gigs (MDDI, PSD) in Sprint 1 to verify 5 fields cover 90% of use cases; secure executive posting mandate | Michelle Yip, Li Ting Kway |
| R-10 | Resourcing | Single designer (Li Ting Kway) supports CMM and R1 simultaneously | Design handoff delays mid-November engineering kickoff | 🟢 Green (Mitigated) | Cut candidate review boards and custom form editors entirely from design scope | Li Ting Kway, Michelle Yip |

## 2. Assumptions

| # | Assumption | Validation Status | Impact if False |
|:---:|---|:---:|---|
| A-01 | Zero custom ATS build is the binding architecture — discovery stays in Compass, selection happens externally | ✅ Locked (14 Sep) | Scope expands by 5+ sprints |
| A-02 | Ingestion fallback (`F-23`) protects the delivery runway if Workable integration slips | ✅ Locked (14 Sep) | Formal roles removed entirely from launch scope |
| A-03 | Standardized 5-field FormSG template accepted by Workforce Development | 🟡 Open (due 23 Sep) | Agencies demand custom fields, breaking consistent UI cards |
| A-04 | Workable pilot can proceed under existing OGP/C@G tenancy, no new central e-tender needed | 🟡 Open (due 18 Sep) | Formal application tracking stays on external link-outs long-term |
| A-05 | Dual-posting API bridge + dedup ingestion (`F-26`) protects candidate integrity | ✅ Aligned (16 Sep) | Split candidate pools and duplicate cards across systems |
| A-06 | R1 development starts mid-November, right after MVP code freeze and VAPT sign-off | 🟡 Open (gates Nov) | MVP post-launch bug triage starves R1 engineering capacity |

## 3. Issues / Active Action Items

| # | Action Item | Owner | Deadline | Verification | Status |
|:---:|---|---|:---:|---|:---:|
| I-01 | Update Master PRD §2.3/3.3 to lock pure ingestion fallback and cut custom ATS scope | Michelle Yip | 15 Sep 2026 | Updated PRD committed | In Progress |
| I-02 | Workable discovery sync with Daryl Snow (OGP PM) on API fit and CUMULUS tenant rules | Barry Lim, Tech Lead | 18 Sep 2026 | Signed discovery memo | Open |
| I-03 | Engage BOs (Xian Zhang, Christopher Woo) to reset January R1 launch expectations | Adrian Ang | 19 Sep 2026 | SteerCo messaging minutes | Open |
| I-04 | Audit 10 active ministry FormSG gig forms (PSD, MDDI, ESG) against the 5-field schema | Michelle Yip, Li Ting Kway | 19 Sep 2026 | Field mapping summary table | Open |
| I-05 | Lock universal WD FormSG template (5 fixed fields + 1 optional prompt) with policy leads | Michelle Yip, WD Lead | 23 Sep 2026 | Live master FormSG template URL owned by WD | Open |
| I-06 | Build memory-safe ZIP streaming prototype for candidate packs (`F-11`) | Tan Pow Hwee, Backend | 25 Sep 2026 | Benchmark: 50+ resume export under 4 seconds | Open |
| I-07 | Draft CV retention, AES-256 encryption, 90-day auto-deletion policy for security sign-off | Tan Pow Hwee, GovTech Sec | 02 Oct 2026 | Approved data governance spec | Open |
| I-08 | Secure pilot agency exclusive posting commitments from 6 HR Directors | Michelle Yip, Adrian Ang | 09 Oct 2026 | Signed agency posting agreements | Open |

## 4. Dependencies

| # | Dependency | Needed From | Needed By | Impact if Delayed |
|:---:|---|---|:---:|---|
| D-01 | OGP Workable API specs & tenant policy | Daryl Snow (OGP), Barry Lim | 18 Sep 2026 | Backend planning for formal role application routing stalls |
| D-02 | WD master FormSG schema lock | WD Policy Lead | 23 Sep 2026 | Frontend design for STIP/Gig application cards can't freeze |
| D-03 | GovTech Security CV purge sign-off | GovTech Security Lead, Pow Hwee | 02 Oct 2026 | Candidate pack download engineering (`F-11`) blocked |
| D-04 | MVP launch gate clearance (~7 Nov sign-off) | NCS, Rama Moorthy | 07 Nov 2026 | If MVP slips past 24-25 Nov, R1 kickoff slips into 2027 |
| D-05 | Post-March 2027 engineering funding | Barry Lim, PSD Leadership | 25 Sep 2026 | Headcount loss at end of Q1 2027 threatens R1 completion |

---

## 5. Tracking Protocol (Jobelle)

1. **Status audits, twice weekly:** Tuesdays (pre-standup) and Fridays (EOD review).
2. **Escalation rules:**
   - Activity slips past its Estimated Date of Completion (EDC) by more than 3 business days → flag to Michelle Yip for sprint triage.
   - Activity in Stream 1.0 (C@G/Workable) or Stream 3.0 (Security & Privacy) blocks an upcoming sprint freeze date → escalate to Adrian Ang and Tan Pow Hwee immediately.
3. **Evidence verification:** don't mark an activity "Done" until its Verification Deliverable is produced and linked.

### Timeline Overview

```
Stream 1.0: Governance & Workable Tenant Discovery   │ 15 Sep 2026 ──► 09 Oct 2026
Stream 2.0: FormSG & STIPs Operational Boundary      │ 15 Sep 2026 ──► 02 Oct 2026
Stream 3.0: Technical Architecture, Privacy & Safety │ 18 Sep 2026 ──► 13 Nov 2026
Stream 4.0: Market Demand, Supply Seeding & Pilot    │ 16 Sep 2026 ──► 20 Nov 2026
Stream 5.0: Capacity Discipline & 5.5-Sprint Gates   │ 21 Sep 2026 ──► 04 Dec 2026
```

### Stream 1.0 — Governance, C@G Workable & Cross-Team Alignment
*Eliminates fractured multi-instance Workable risk (R-07) and dual-posting confusion (R-06/R-09 adjacent).*

| WBS | Risk | Activity | Owner | Start | EDC | Verification | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| 1.1 | R-07 | C@G & OGP Workable discovery sync — present partitioning option, determine API write scope | Barry Lim / Tech Lead | 15 Sep | 22 Sep | Signed discovery memo | Open |
| 1.2 | R-07 | Fallback interface contract for read-only C@G ingestion (`F-23`) and outbound links | Michelle Yip / Tech Lead | 23 Sep | 02 Oct | Approved API fallback spec | Open |
| 1.3 | R-09 | Dual-posting exclusion filter setup (`F-26`) — suppress duplicates from 6 pilot agencies | Tan Pow Hwee / Backend | 21 Sep | 02 Oct | Staging tests proving duplicates filtered | Open |
| 1.4 | R-07 | Two-Horizon governance sign-off with Adrian Ang and PSD SteerCo | Michelle Yip / Adrian Ang | 28 Sep | 09 Oct | SteerCo slide deck + recorded minute | Open |

### Stream 2.0 — FormSG & STIPs Operational Boundary
*Prevents agency defection (R-09), solves outcome tracking void, stops schema fragmentation.*

| WBS | Risk | Activity | Owner | Start | EDC | Verification | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| 2.1 | R-09 | Audit 10 active ministry FormSG gigs (PSD, MDDI, ESG) against 5-field schema | Michelle Yip / Li Ting Kway | 15 Sep | 19 Sep | Field mapping summary table | Open |
| 2.2 | R-09 | Build/lock the official central FormSG master template with WD | Michelle Yip / WD Lead | 21 Sep | 28 Sep | Live FormSG master link, WD-owned | Open |
| 2.3 | — | Document native cohort capacity enrolment rules (FormSG response caps) | Jobelle / WD Ops | 24 Sep | 02 Oct | 1-page host guide published | Open |
| 2.4 | — | SteerCo metrics baseline alignment with Xian Zhang Guo and Jacky Lee | Michelle Yip | 21 Sep | 30 Sep | Signed BO Alignment Matrix | Open |

### Stream 3.0 — Technical Architecture, Security, Privacy & File Safety
*Mitigates ZIP latency (R-04), privacy audit failure (R-03), malicious uploads, grade tampering.*

| WBS | Risk | Activity | Owner | Start | EDC | Verification | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| 3.1 | R-04 | Memory-safe ZIP streaming prototype (`F-11`) — pipe 50+ PDFs without server memory spikes | Backend Eng / Pow Hwee | 18 Sep | 25 Sep | Benchmark: 250MB export under 4 seconds | Open |
| 3.2 | — | Antivirus scanning gateway architecture (`F-05`) — quarantine bucket, ClamAV/CWP scan | Tan Pow Hwee / DevOps | 21 Sep | 02 Oct | Design doc + test rejecting `.pdf.exe` | Open |
| 3.3 | R-03 | Data privacy & 90-day auto-purge policy — AES-256 encryption, automated deletion cron | GovTech Sec / Michelle | 05 Oct | 16 Oct | Security sign-off + cron test logs | Open |
| 3.4 | — | WOG AD grade claim binding + application throttling (max 5 active applications) | Full-Stack Eng | 19 Oct | 30 Oct | Staging test rejecting manual grade tampering | Open |
| 3.5 | R-03 | VAPT remediation & security clearance — patch critical/high CVEs | Jace / Jobelle / Pow Hwee | 12 Oct | 13 Nov | Final VAPT sign-off certificate | Open |

### Stream 4.0 — Market Demand, Supply Seeding & Pilot Adoption
*Prevents the 46% empty gig rate (R-06), the adoption kill trigger, and the hiring manager login blindspot (R-08).*

| WBS | Risk | Activity | Owner | Start | EDC | Verification | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| 4.1 | R-08 | Line manager hallway usability tests (MDDI, ESG) on quick-post modal and ZIP workflow | Li Ting Kway / Michelle | 16 Sep | 23 Sep | Usability debrief report | Open |
| 4.2 | — | Pilot agency exclusive posting MoUs from 6 HR Directors | Michelle Yip / Adrian Ang | 21 Sep | 09 Oct | Signed agreements from all 6 agencies | Open |
| 4.3 | R-06 | Catalog sub-tabs UI build (`F-17`) | Frontend Eng / Li Ting | 21 Sep | 02 Oct | Deployed component in staging | Open |
| 4.4 | R-06 | Priority Spotlight engine config (`F-19`) — auto-tag <2-applicant gigs after 7 days | Backend Eng | 19 Oct | 30 Oct | Unit test proving badge + boosted sorting | Open |
| 4.5 | — | Day 1 seed opportunity inventory load — 20-30 verified listings | Jobelle / Michelle Yip | 02 Nov | 20 Nov | Staging catalog verified with 25+ live listings | Open |

### Stream 5.0 — Capacity Discipline & 5.5-Sprint Gate Reviews
*Prevents ATS scope creep (R-02), protects the sprint ceiling, prevents trio bottlenecking (R-10).*

| WBS | Risk | Activity | Owner | Start | EDC | Verification | Status |
|---|---|---|---|:---:|:---:|---|:---:|
| 5.1 | R-02 | Sprint 1 scope freeze & anti-ATS gate — confirm zero tickets for form builders/Kanban/rosters | Michelle Yip / Pow Hwee | 21 Sep | 22 Sep | Sprint 1 backlog audit, 1.0 sp committed | Open |
| 5.2 | R-10 | Bi-weekly Product Trio alignment jams | Product Trio | 21 Sep | 27 Nov | Meeting records in `outputs/meeting-notes/` | Open |
| 5.3 | R-02 | Mid-flight scope cut-line review (Sprint 3.5) — audit velocity vs. 4.8 sp ceiling | Michelle Yip / Adrian Ang | 26 Oct | 30 Oct | Velocity audit memo confirming buffer intact | Open |
| 5.4 | — | Sprint 5-5.5 production hardening gate — E2E smoke tests, Keycloak stress test | Full Squad / Jobelle | 16 Nov | 04 Dec | Production deployment approval | Open |

---

## 6. Weekly Milestone Checkpoints

| Gate | Date | Key Deliverables | Owners |
|---|:---:|---|---|
| **Gate 0: Pre-Sprint Alignment** | 22 Sep | Workable discovery (1.1), FormSG audit (2.1), Sprint 1 scope freeze (5.1) | Barry Lim, Michelle Yip, Pow Hwee |
| **Gate 1: Discovery Foundation** | 02 Oct | Browsing tabs deployed (4.3), quick posting built, central FormSG template locked (2.2), antivirus gateway approved (3.2) | Li Ting Kway, Pow Hwee, WD Lead |
| **Gate 2: Governance & Cutover** | 16 Oct | 6 pilot agency agreements secured (4.2), 90-day purge spec signed off (3.3), fallback feed verified (1.2) | Michelle Yip, Adrian Ang, GovTech Sec |
| **Gate 3: Application Core** | 30 Oct | Resume upload built, seniority guidance deployed, Priority Spotlight configured (4.4), mid-flight velocity audit passed (5.3) | Pow Hwee, Full-Stack Eng, Michelle |
| **Gate 4: Security & Export Handoff** | 13 Nov | Candidate pack ZIP export validated (3.1), VAPT certificate cleared (3.5), grade claim verification locked (3.4) | Pow Hwee, Jace, Jobelle |
| **Gate 5: Catalog Seeding** | 20 Nov | 25+ seed opportunities loaded (4.5), pilot HR trained on ZIP workflow | Jobelle, Pilot HR Leads, Michelle |
| **Gate 6: Production Hardening** | 04 Dec | Sprint 5.5 buffer complete (5.4), SteerCo launch sign-off | Michelle Yip, Adrian Ang, Pow Hwee |
