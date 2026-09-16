# R1 Opportunities: Leadership & Architecture Brief

**Document Reference:** `2026-09-16-W38-r1-leadership-brief`

**Date:** 2026-09-16 (Week 38, merged from 3 prior docs — see note below)

**Author:** Michelle Yip (Product Manager)

**Audience:** Adrian Ang (Director of Product Management), Product Trio, Business Owners (Xian Zhang Guo, Jacky Lee, Christopher Woo), Workforce Development, Careers@Gov / Workable Squad

**Target Release:** CareerCompass R1 (Ring-Fenced 5.5 Engineering Sprints)

> **Merge note:** this replaces three separate documents that told the same architecture/scope story to overlapping leadership audiences: the *Direction & Architecture Brief* (14 Sep), the *Strategic Rescope Proposal* (16 Sep), and the *Executive Summary* (14 Sep). Content is consolidated here; the three originals are archived. For engineering-level detail (all 30 features, RICE math, sprint dependencies), see the [master PRD](../prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md) — this brief stays at leadership altitude.

---

## 1. The One Core Outcome

We have two non-negotiable promises: make applications painless in R1, and shut down legacy OTG by 2028. To hit both without burning out the squad, R1 is scoped around one clean outcome:

> **R1 makes CareerCompass the primary officer-facing journey for Whole-of-Government opportunities (Discover → Evaluate → Apply → Submit → Track), while strictly avoiding building an Applicant Tracking System (ATS).**

We are not building a recruiter ATS for HR departments. We're building the minimum viable mobility transaction needed to pull officers off legacy OTG and end the application black hole.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    THE 3-PILLAR R1 LEADERSHIP CONTRACT                      │
├──────────────────────────┬─────────────────────────┬────────────────────────┤
│    1. MOVE OFF OTG       │   2. APPLY SEAMLESSLY   │   3. CLOSE THE LOOP    │
│ • 4 catalog tabs         │ • Editable Compass      │ • Simple 3-stage       │
│   covering all 5 WOG     │   profile pre-fill      │   status tracker       │
│   opportunity types      │   (manual fallback)     │   in "My Applications" │
│ • Dual-posting API push  │ • Direct PDF CV upload  │ • 30-day automated     │
│   to OTG + deduplication │ • Embedded FormSG flow  │   cycle auto-expiry    │
│ Metric: OTG Burn-Down %  │ Metric: Completion Rate │ Metric: Status SLA %   │
└──────────────────────────┴─────────────────────────┴────────────────────────┘
```

**Why we pivoted:** during the 14 Sep Architecture Jam, leadership resolved a core tension. Replicating candidate review boards, multi-round status transitions, and bespoke application forms would duplicate the whole-of-government central ATS (Workable) and risk a multi-year effort that stalls core delivery — as Adrian Ang put it, *"literally SMGS another version; we cannot afford to build, lah."* Engineering capacity is strictly capped at 5.5 sprints; an internal ATS would have blown through that budget and diverted resources from discovery and career guidance.

---

## 2. The Two-Bucket Architecture

Opportunities split cleanly into two buckets by screening intensity.

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

**Bucket 1 (Gigs & STIPs):** part-time micro-projects and developmental attachments, selected via direct 1-on-1 alignment between host and applicant — no corporate recruitment panel needed. Gigs post natively in 3 minutes (`F-01`); STIPs route to Workforce Development's standardized FormSG template, embedded so officers never leave Compass.

**Bucket 2 (Rotations, SJR, Secondments, Formal Jobs):** full-time postings, secondments, and SJR vacancies requiring CV screening and panel evaluation. Officers upload a resume directly (`F-05`), get a seniority-fit advisory (`F-09`), and HR can convert unfilled SJRs to open jobs with one click (`F-28`). Workable is the long-term ATS engine here; R1 is fully insulated from Workable's own timeline — if it's ready, applications route through it, if not, R1 runs on offline pack downloads (`F-11`) and read-only ingestion (`F-23`).

### Canonical Taxonomy: 4 Catalog Tabs, 5 Operational Types

| Catalog Tab | Operational Type | What It Is | Delivery Mode |
|---|---|---|---|
| **Gigs** | Project Gigs | Bite-sized part-time tasks (2-10 hrs/wk) | 3-field quick post (`F-01`), in-app or embedded FormSG |
| **STIPs** | Short-Term Immersions | Experiential attachments (1-5 days), managed by WD | Standardized 5-field WD FormSG template, embedded |
| **Rotations** | Job Rotations & SJR | Substantive developmental rotations | Direct PDF CV upload (`F-05`), seniority guidance (`F-09`), scope toggle (`F-28`), ZIP export (`F-11`) |
| *(within Rotations)* | Secondments | Formal inter-agency moves | Discoverable via Secondment badge; standard CV package |
| **Jobs** | Internal Jobs | Permanent civil service vacancies | Nightly ingestion (`F-23`); selection via agency ATS or Workable |
| *(External feed)* | Careers@Gov | Public recruitment | Read-only nightly feed, outbound link to careers.gov.sg |

### OTG Coexistence: Two Options, One Decision Still Pending

R1's biggest open technical question is whether OTG can accept a write API from CareerCompass.

- **Option A (primary, contingent on OTG API):** Compass pushes pilot postings to OTG with a link-back CTA; inbound ingestion deduplicates (`F-26`) so nothing shows twice. **Go/no-go depends on OTG team confirming API delivery within Sprint 1.**
- **Option B (fallback, recommended for speed):** if no API, ingestion becomes one-way (OTG → Compass only). Pilot agencies post exclusively on Compass. OTG gets a sticky banner and pinned tile redirecting traffic to Compass. This fully decouples R1 from OTG's technical debt and accelerates the 2028 sunset.

We already have Option B ready precisely because we're not confident Option A's precondition (an OTG write API) will hold. Whichever way this resolves, it cascades into how job-listing ingestion and duplicate-prevention both work — they depend on the same answer.

---

## 3. The Non-ATS Boundary — What We Will Not Build

> **The razor:** *"If a feature primarily helps recruiters manage recruitment rather than enabling internal mobility in Compass, it is outside R1."*

| Excluded Capability | Why | Where It Belongs |
|---|---|---|
| Configurable recruitment pipelines | 3+ sprints of custom workflow engineering | Workable |
| Interview panel scheduling & calendar sync | Complex OAuth/calendar API integration | Offline via Teams/Email |
| Multi-interviewer scoring rubrics | Requires confidential scorecard permissions | Offline panels via `F-11` ZIP export |
| Complex establishment approvals & headcounts | Ministry-specific HR rules | Agency HRPS / Cumulus |
| Offer generation & digital contract signing | Heavy legal/union clearances | Standard agency appointment letters |
| Candidate CRM & passive talent pooling | Diverts focus from live transactions | Future ATS capability |
| Agency-specific custom form builders | Recreates FormSG inside Compass | Standardized 5-field schema (Barry Lim's rule) |

### Barry Lim's Field Standardization Rule

Postings collect only standard profile fields (Name, Agency, Designation, Grade, Contact Email) plus **one optional free-text field**, max 500 characters. No conditional logic, no custom screening matrices. Agencies needing deeper qualification screen via the uploaded PDF CV and offline panel review.

### The "Say No" Script

When a stakeholder asks for something outside this boundary, here's the response:

1. **"Can we build interview scoring and scheduling into Compass?"** → No — that's an ATS. Panels evaluate offline using the `F-11` download pack.
2. **"Can pilot agencies add 10 custom screening questions per posting?"** → No — 5 fixed fields plus 1 optional text box. Custom builders cost 3 sprints and break Whole-of-Government reporting.
3. **"Can we build attendance rosters and placement tracking for STIPs?"** → No — STIPs route to WD's FormSG template. Software can't fix a compliance gap policy hasn't closed yet.
4. **"Should R1 wait if Workable integration slips?"** → No — Compass runs independently on baseline ingestion (`F-23`). Workable is additive, not a launch gate.

---

## 4. Delivery Roadmap (Locked 5.5 Sprints)

| Sprint | Capacity | Features | Milestone |
|---|:---:|---|---|
| **1** | 1.0 sp | F-23 Jobs Feed (0.2) · F-29 Public View & Loop-Back (0.5) · F-17 Browsing Tabs (0.5) · F-26 Ingestion Dedup (0.5) | Catalog & traffic foundation — stops duplicate listings, redirects OTG traffic back to Compass |
| **2** | 1.0 sp | F-27 Role-Based Access Control (1.0) | Data governance — candidate drawers isolated before any resume upload goes live |
| **3** | 1.0 sp | F-05 Direct Resume Upload (1.0) · F-09 Seniority Fit Guidance (0.5) | Rotations application core |
| **4** | 1.0 sp | F-28 SJR Scope Toggle (0.5) · F-01 Quick Gig Posting (0.5) | Supply & mobility activated |
| **5** | 0.8 sp | F-11 Candidate Pack Export (0.5) · F-30 Agency Dossier Push (0.3) | Selection handoff |
| **5.5** | 0.7 sp | E2E testing, WOG AD Keycloak stress test, hardening buffer | Go-live readiness |

*Total: 4.8 sp feature build + 0.7 sp hardening = 5.5 sprints.*

**Deferred to R2** (protecting the ceiling): the 4-stage ATS-style status board (`F-07`), real-time seat counters (`F-18`), attendance rosters (`F-22`), rollover notices (`F-20`), and the full Secondments suite (`F-13`/`F-15`/`F-21`). Full feature-level rationale is in the [master PRD](../prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md).

---

## 5. North Star & Balanced Metrics

$$\text{North Star} = \frac{\text{Eligible Compass Applications Completed via Seamless Journey}}{\text{Total Eligible Applications Initiated}} \ge 90\%$$

| Pillar | Metric | Target |
|---|---|:---:|
| Adoption | % of eligible applications initiated through Compass | ≥ 70% |
| Seamless Apply | Application completion rate (Submitted ÷ Started) | ≥ 90% |
| Seamless Apply | Median time to complete application | < 5 min |
| Close the Loop | % submitted applications with visible status | ≥ 95% |
| OTG Exit | OTG capability burn-down (% OTG features still needed) | 60% post-R1 |
| HR Efficiency | HR coordination hours saved per posting | 15-20 hrs/mo |

### OTG Decommission Burn-Down

```
  100% ──┐
         │ (MVP: Pilot Discovery Layer)
   60% ──┴────────┐
                  │ (R1: Seamless Apply + Simple Status)
   25% ───────────┴────────┐
                           │ (R2: Full Central Ingestion & Workable Cutover)
    0% ────────────────────┴──────> (2028: Complete OTG Sunset)
```

---

## 6. How to Pitch This (Script for Leadership Conversations)

1. **Acknowledge the constraint:** "We've got a locked 5.5-sprint runway. We can't afford to build another SMGS or duplicate Workable."
2. **Hit the pain point:** "51% of all historical opportunity postings are Rotations and Secondments, but OTG literally couldn't accept a resume. That's why 89% of outcomes were never recorded."
3. **Deliver the razor:** "We're building the minimum viable mobility transaction across three pillars — Move Off OTG, Apply Seamlessly, Close the Loop. Workable and agency HR systems handle back-office selection."
4. **Show the exit value:** "Every feature in R1 burns down our reliance on legacy OTG, keeping us on track for the 2028 shutdown without leaving officers in an application black hole."

---

## 7. Ownership & Next Steps

| Track | Counterpart | Objective | Immediate Ask |
|---|---|---|---|
| **STIPs Standardization** | Workforce Development | Lock the FormSG template | 5 standard fields + 1 optional text field; native FormSG submission caps per cohort |
| **Central ATS Discovery** | C@G Workable Squad, OGP PM Daryl Snow | Workable technical integration | Scope tenant partitioning, write APIs, CUMULUS HRMS links (API discovery owner still TBD) |
| **Pilot Agency Rollout** | 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) | Onboarding & migration | Align HR directors on the two-bucket model, Barry Lim's field rule, and the `F-11` dossier workflow |

**The 10 policy decisions still needed from Business Owners** (STIP template mandate, OTG cutover date, field standardization defense, and more) are tracked separately in the [BO alignment brief](../decisions/2026-09-16-W38-r1-bo-alignment-brief.md).

---

*Superseded documents (content merged here, originals archived 2026-09-16): Direction & Architecture Brief (14 Sep), Strategic Rescope Proposal (16 Sep), Executive Summary (14 Sep).*
