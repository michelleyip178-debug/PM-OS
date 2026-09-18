*Synced from Confluence: [R1 - Opportunities Creation and Application](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2379546760/R1+-+Opportunities+Creation+and+Application) — Confluence is the source of truth for this doc. Template origin: [Product Epic 1-pager Template](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/1931675660/Product+Epic+1-pager+Template). Source PRDs: [R1 PRD](2026-07-07-W28-careercompass-r1-prd.md), [Reduced Scope Brief](../analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md).*

# CareerCompass | OTEP-Pathfinder

| | |
|---|---|
| **Release** | R1 (Opportunities Marketplace — Reduced Scope Baseline) |
| **Date** | 18 Sep 2026 |
| **Target** | Mid-February 2027 (Kickoff Oct 2026, per Rama's estimate) |
| **Status** | In Review (Reduced Scope Baseline aligned with Adrian / Eng) |
| **Author** | Michelle Yip |
| **Last updated** | 18 Sep 2026 |
| **Product Designer** | Li Ting Kway (Liting) |
| **Engineering Leads** | Rama Moorthy, Barry Lim |
| **Prototype - Figma** | [zipper-ritzy-40733845.figma.site](https://zipper-ritzy-40733845.figma.site) |

## The Short Version

Right now, officers leave CareerCompass to apply anywhere, and once they leave, we lose visibility. For posting creators (any officer with a project, task, or gig), finding internal talent and fielding applications happens through disparate emails and spreadsheets. 

Under our **reduced scope baseline**, R1 focuses on three functional features and two platform foundations:
1. **STIPs & Gigs (Open Posting by Anybody):** Any officer in the 6 pilot agencies can post a STIP or Gig in minutes. Lightweight native apply using a fixed standard template (pre-filled from profile) + email alert to poster + in-app applicant review table (Offer/Reject). Job descriptions support outbound hyperlinks for posters needing custom FormSG forms.
2. **Mainstream Jobs (Internal Jobs, SJRs, Secondments):** Discovery-only via existing Careers@Gov (C@G) ingestion, with ringfencing whitelisted by email domain or officer email. External redirect to C@G for apply.
3. **Saved Jobs:** Simple bookmark toggle on opportunity cards and a dedicated saved-jobs filter.
4. **RBAC & Privacy:** Minimum viable 3-tier access control so only the posting creator and authorized co-evaluators can access the applicant review table.
5. **CAM Integration:** Keycloak SCIM connector for central identity and privileged group management.

**For Liting:** your design scope is sharply focused on Section 8. All wireframes need to freeze by **30 October 2026** before year-end leave.

## What We Need You to Design (For Liting)

Three moments in this release need core design work:

1. **The fixed standard application form (STIPs & Gigs).** A clean, pre-filled form pulling Name, Email, Agency, Grade/Role, and known competencies from the officer's profile, with 2-3 standard free-text questions. No dynamic form builder.
2. **The poster's applicant review table.** A simple table for the posting creator (any officer) and authorized collaborators to review applicants per posting (displaying decision-critical columns: name, agency, competency match) with straightforward **Offer** and **Reject** action buttons. No complex multi-stage ATS pipeline.
3. **The saved jobs bookmark toggle.** Bookmark icon on opportunity cards/detail views and the "Saved Jobs" filter tab on the Opportunities catalog.

*Note on Mainstream Jobs:* Internal Jobs, Secondments, and SJRs are discovery-only and redirect externally to Careers@Gov. No native application or creation flow is designed for mainstream jobs in R1.

---

## 1. Background & Context

**Why this matters strategically:** Our North Star metric is officers completing a development action — but today, once an officer clicks Apply, they leave CareerCompass entirely, so we have no way to know if they ever finished. R1 is what makes that metric measurable at all, not just bigger.

**Why we're doing this now:** Leadership approved "apply without leaving CareerCompass" back in March 2026 SteerCo Meeting. R1 is where we actually build it.

**What's changed since then:** We initially planned to integrate with an external ATS (applicant tracking system) for tracking application status. That plan was dropped on 3 July 2026 after Engineering — and separately, the CIO directly — confirmed that integration path won't be ready until 2028 and after.

Today, officers already use CareerCompass to find STIPs, and Gigs — the discovery half works. It's the discovery of Internal Jobs, Secondments and the apply half that still sends them elsewhere.

## 2. Problem Statement

**For officers:** you find something worth applying to, click Apply, and get sent to a different website where you retype everything you already told us once. Then you hear nothing. As far as CareerCompass is concerned, you vanished.

**For posting creators (any officer or manager):** posting a gig means juggling informal channels — broadcasting across chats, fielding applications by email, and tracking progress in a manual spreadsheet. Nothing connects to the officer's profile.

## 3. Data Analysis & Evidence

We don't have real usage data yet because we've never tracked this inside CareerCompass before — the numbers below are our best current estimate, not measured fact.

| Metric | Where we are now (estimated) | Where we want to be |
|---|---|---|
| % of officers who complete an application without leaving CareerCompass | ~15–20% (estimate) | 40%+ by March 2027 |
| Officers completing a development action (our North Star) | Can't measure today | 10% of onboarded officers by March 2027 |
| Applications submitted through CareerCompass | 0 today | 405–540 in the pilot group by Q1 2027 |

**When we'd pull back:** if, after the first 4 weeks, fewer than 25% of officers are completing applications, or more than 10% of submissions have wrong/outdated pre-filled data, we pause the rollout and fix it before expanding further.

## 4. Market / Benchmark Scan

Not done. No market or benchmark scan exists in either source document.

## 5. Target User

**Pilot cohort:** ~5,400 officers across 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), onboarded in staggered pairs.

- **Lane 1 — Intentional Mover:** Senior, targeted, time-pressured officer who knows what they want. Primary beneficiary of Epics B (pre-fill) and C (status tracking).
- **Lane 2 — Passive Watcher:** Early-career officer, open but not actively searching. Primary beneficiary of Epic D (Saved Jobs, P1).
- **Lane 3 — Posting Creator (Anybody):** Any officer (project lead, team manager, or HR) within the pilot agencies who needs support on a project, task, or gig. Can post directly without administrative gatekeepers. Primary beneficiary of Epics A (creation/apply) and C (applicant review).

## 6. Value Propositions & Hypotheses

### 6.1 Overall Value Propositions

- **For Officers:** "Find every public sector opportunity in one place, and apply to gigs in under two minutes with your profile already filled in."  
  *(Shift: No more checking three separate portals or retyping basic info on external forms).*
- **For Posting Creators (Anybody Posting a Gig/STIP):** "Post gigs in minutes, reach verified officers across government, and review applicants in one secure table without touching a spreadsheet."  
  *(Shift: No more managing gig applicants across buried email threads or manual Excel trackers).*
- **Unifying Pitch:** "CareerCompass connects officers to gigs in two minutes flat, while freeing gig creators from spreadsheet-driven hiring."

### 6.2 Core Hypotheses (1 Line Each)

1. **Gig Apply (Officers):** *If* we pre-fill gig applications with profile data, *then* application completion will jump from ~20% to **≥40%** because officers avoid retyping basic info.
2. **Applicant Review (Managers):** *If* managers get an instant email alert and a simple Offer/Reject review table, *then* outcome turnaround will drop to **≤14 days** because they stop juggling spreadsheets and inbox threads.
3. **C@G Ingestion (Discovery):** *If* we aggregate mainstream jobs into one catalog with external apply links, *then* monthly active searchers will grow by **≥30%** without needing to build a complex native ATS.
4. **Saved Jobs (Retention):** *If* officers can bookmark roles in one click, *then* 7-day repeat visits will rise by **≥25%** as passive watchers return to review saved roles.

## 7. End-to-End User Journeys

### 7.1 Officer Journey (Discover → Decide → Apply → Track)

1. **Discover & Browse:** Officer logs in via Singpass/TechPass. Lands on the unified Opportunities page, viewing ringfenced listings (STIPs, Gigs, and Careers@Gov mainstream jobs) filtered to their eligibility.
2. **Bookmark (Optional):** Clicks the bookmark icon on interesting roles to review later under the "Saved Jobs" filter tab.
3. **Apply (Two clear paths):**
   - **For STIPs & Gigs (Native):** Clicks "Apply". A modal opens with verified profile data (name, email, agency, grade, competencies) pre-filled. Fills in 2-3 standard free-text questions, ticks the single declaration box, and clicks "Submit" in under 2 minutes. *(If poster added a FormSG link in the description for bespoke questions, officer uses that link instead).*
   - **For Mainstream Jobs (Public Vacancies & Curated Secondments):** Clicks "Apply on Careers@Gov" or "Apply on Agency Portal". Sees a disclaimer modal (*"You will be redirected to the external source portal to complete your application; intranet access may be required"*), and redirects externally. Application submission and tracking occur entirely on the source system.
4. **Track Status:** For in-app gigs, checks "My Applications" to view real-time status: `Submitted` → `Offered` or `Not Selected`.
5. **Outcome:** Sees the final decision badge in-app. If offered, the posting creator connects via email or Teams to coordinate next steps.

### 7.2 Posting Creator Journey — Anybody (Post → Alert → Review → Decide)

1. **Create Posting (Self-Serve):** Any authenticated officer needing help on a project, sprint, or task clicks "Post a Gig". Fills in 4 standard fields (title, description, agency, competencies, closing date). Can paste a FormSG link in description if bespoke questions are needed. Adds 1-2 co-evaluators by civil service email.
2. **Publish:** Posting goes live instantly to the 6 pilot agencies.
3. **Receive Notification:** CareerCompass sends an instant email alert when an officer applies: *"New application received for [Job Title] from [Officer Name]"*.
4. **Review Candidates (Table):** Creator logs in and opens the applicant review table under "My Posted Gigs". Reviews applicants in a clean table showing decision-critical fields (name, agency, verified competencies, date applied). Co-evaluators have the exact same view.
5. **Decide (Offer / Reject):** Reviews candidate profile and clicks **Offer** or **Reject** directly in the table. Applicant's in-app status updates immediately.
6. **Close Vacancy:** Once filled or closing date arrives, creator clicks "Close Vacancy". The opportunity drops off the public catalog, and candidate data enters the 90-day retention countdown.

---

## 8. Success Metrics

**8.1 Core North Star (Discovery & Action)**
- **Opportunities Discovered per Officer:** Average number of opportunity detail views per active officer per month (measures core value as an aggregation and visibility layer).
- **Officers completing a development action:** 10% of onboarded officers by Mar 2027 (North Star lagging outcome).

**8.2 Input Metrics (Discovery & Conversion)**
- **Search-to-Click Rate:** ≥70% of opportunity searches result in a detail view.
- **Recommendation Click-Through Rate (CTR):** ≥20% click-through on personalized opportunity cards.
- **Apply Completion Rate (Gigs):** ~15–20% baseline → **≥40%** by Mar 2027 via profile pre-fill.
- **Outbound Redirect Intent Rate:** ≥20% of mainstream job detail views click through to source portals (C@G/HRPS/Cumulus).
- **Status Latency (Gigs):** Manager action → officer sees update in ≤24 hours.

**8.3 Guardrail Metrics**
- Pilot officer satisfaction ≥3.5/5.
- Pre-fill trust: stale/wrong pre-fill must not increase form abandonment vs. baseline.
- If apply completion rate <25% at 4-week mark, or stale pre-fill incidents >10% of submissions → pause rollout.

## 9. Scope (Stories + Success Criteria — Reduced Baseline)

| Epic | Story | Success Criteria | Notes to designers/devs |
|---|---|---|---|
| **A — STIPs & Gigs Creation** | Open posting creation by any authenticated officer | Any logged-in officer in the 6 pilot agencies can author and publish a STIP or Gig; no HR admin role gating required | Creator automatically becomes Posting Owner with applicant review access; can invite up to 2 co-evaluators |
| **A — STIPs & Gigs Apply** | Fixed standard application form in CareerCompass | Pre-filled with Name, Email, Agency, Grade, and competencies; 2-3 standard text fields; no dynamic form builder | FormSG flex: posters needing custom questions paste FormSG URL in description |
| **A — STIPs & Gigs Review** | Poster applicant review table + email alert | Instant transactional email alert to poster on submission; basic applicant review table in Compass with Offer/Reject actions | No complex multi-stage ATS pipeline in R1; rejection updates in-app status badge without automated regret emails |
| **B — Mainstream Jobs (Discovery)** | Discovery of C@G Public Vacancies & Curated Roles | Ingestion from C@G public feed (F-23) and OTG secondment migration; external redirect CTA with disclaimer | Mainstream jobs stay on source systems; live API integration with HRPS (SAP) and Cumulus (Workday) deferred to R2 |
| **B — Ringfencing & Whitelist** | Opportunities page visibility control | Filter mainstream jobs by email domain (e.g. `@moe.gov.sg`) or specific officer email list | Feeds OTEP-578 parameter spike; checks Option A (evaluate each job independently) |
| **C — Saved Jobs (P1)** | Officer bookmarks opportunities | Bookmark toggle on cards/details; filter tab on Opportunities page showing saved listings | OTEP-425 in backlog; low complexity (1 DB table + toggle endpoint + 30-day closed retention) |
| **D — RBAC & Privacy (P0)** | Minimum viable role-based access control | 3-tier model (Public Officer, Poster/Collaborator, Admin); only poster + up to 2 collaborators access applicant review table | F-27; gates gig applicant review table access; audit logged on view |
| **E — CAM Integration (P0)** | Central Account Management integration | Keycloak SCIM connector adoption for user lifecycle events; Keycloak Privileged Group integration | OTEP-1571 Done; avoids building 7 custom app-side APIs if SCIM accepted (OTEP-1553); automated 90-day data purge |
| **F — Discovery Telemetry (P1)** | Analytics event instrumentation in `otep-web` | Event tracking on opportunity detail views, search queries, recommendation CTR, and outbound redirect clicks | Instrument Mixpanel/backend pings for North Star ("Opportunities Discovered per Officer") |

**Explicitly Deferred to R2 (Out of Scope):**
- Live API integration with HRPS (Civil Service SAP) and Cumulus (Stat Board Workday).
- Dynamic form builders and agency-specific custom question configuration.
- Multi-file PDF resume/portfolio uploads and automated parsing.
- Multi-stage ATS recruitment pipeline (shortlist, interview booking, scoring rubrics).
- Automated candidate regret email campaigns.
- Native posting creation and native apply for mainstream civil service jobs (remains on external portals).
- Multi-tier agency HR oversight portals and complex delegation trees.

## 10. Go-To-Market & Timeline

**Pilot Cohort:** 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), committed to posting Gigs and STIPs natively on CareerCompass on day one (target: 20-30 active postings).

**Timeline & Delivery Gates:**
- **Kickoff Baseline:** **October 2026** (per Rama's estimate).
- **Design Freeze:** **30 October 2026** (Liting wireframes frozen for standard form, applicant table, and bookmark toggle).
- **Holiday Constraint:** Sprints over 21 Dec 2026 – 3 Jan 2027 run at ~50% capacity due to civil service year-end block leave.
- **Pilot Launch Target:** **Mid-February 2027** (~5.5 sprints with 3 dedicated build engineers: Thomas, Hao Eng, Léo).

---

## 11. Risks, Assumptions & Mitigations

| Risk | Category | Impact | Mitigation |
|---|---|---|---|
| **CAM SCIM rejection** | Technical | If CAM team rejects Keycloak SCIM connector and demands 7 custom app-side APIs, effort expands by +3 to 4 man-weeks. | Sizing contingent on SCIM adoption. If rejected, escalate for a 4th engineer or descope secondary features. |
| **Agencies demanding custom forms** | Stakeholder | Pilot agencies may resist a fixed standard form and request agency-specific questions. | Business Owner endorsement of standard form; allow posters to paste an outbound FormSG link in the description. |
| **Single designer capacity & leave** | Resourcing | Wireframe critical path funnels through Liting before year-end leave. | Freeze wireframe scope strictly to standard template and applicant table by 30 Oct. |
| **C@G ingestion feed parameter gaps** | Technical | Ingestion payload from C@G may lack granular agency or job type tags needed for ringfencing. | OTEP-578 spike to audit C@G feed schema immediately with central data engineering. |
| **Pre-fill data accuracy trust cliff** | Product | Stale competency or profile data creates user distrust. | Allow officers to review and edit pre-filled profile fields before final submission. |

---

## 12. Engineering Requirements Summary

- **Total Effort Estimate:** **18.5 – 24.0 man-weeks** across 5 pillars (STIPs/Gigs, C@G Discovery, Saved Jobs, RBAC, CAM).
- **Dedicated Squad:**
  - **Fullstack / Frontend (1.0 FTE):** Thomas Huchedé
  - **Platform & Auth (1.0 FTE):** Hao Eng Chua
  - **Backend & Ingestion (1.0 FTE):** Léo Milbor
  - **Tech Lead (0.3 – 0.5 FTE):** Barry Lim / Rama Moorthy
  - **Product Designer (0.5 FTE):** Li Ting Kway (Liting)

---

## 13. Decision Tracker (Key BO Calls Needed)

| Decision Needed | Who Decides | Needed By | Recommendation |
|---|---|---|---|
| **Open Posting by Anybody (Self-Serve vs Moderation)** | Adrian / PSD BOs | 16 Oct 2026 | Approve self-serve posting by any officer; rely on post-publish transparency |
| **Creator Reporting Officer (RO) Awareness** | PSD BOs | 30 Oct 2026 | Mandate single self-declaration checkbox at gig creation |
| **Standard Form vs FormSG Flex Policy** | Xian Zhang / Adrian | 30 Oct 2026 | Endorse standard form; allow description FormSG link as fallback |
| **Double-Hatting Visibility Rule (Option A vs B)** | Christopher Woo / PSD | 16 Oct 2026 | Approve Option A (check each job on its own) |
| **Candidate Data Purge Window** | Legal / PSD BOs | 13 Nov 2026 | Approve 90-day post-closure purge window |
| **Co-Evaluator Cross-Agency Access** | Adrian / Barry | 30 Oct 2026 | Allow poster to add up to 2 collaborator emails across pilot agencies |
| **Day-One Pilot Posting Exclusivity** | PSD BOs | 20 Nov 2026 | Mandate exclusive CC posting for the 6 pilot agencies |

---

*Next review: R1 Roadmap Estimation & Feasibility Sync with Rama Moorthy & Barry Lim.*
