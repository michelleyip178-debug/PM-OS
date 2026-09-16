---
title: Unified User Research Synthesis: R1 Opportunities (Officer and Admin Sides)
date: 2026-09-14
week: 2026-W38
initiative: R1 Opportunities / CareerCompass
sources:
  - 2025 STIPs & Gigs Full-Year Dataset, provided by Qiu Yan and Amy (OneTag Vacancies vs. FormSG Submissions)
  - Cross-Program Rotation & Gig Audit Workbooks (2024 to 2026)
  - IA research and prototype walkthroughs, 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), 10 Sep 2026
  - Job Posting and Discovery Synthesis, 31 Jul 2026
  - R1 User Personas and Max Interview Guide, Jul 2026
  - Delivered MVP Baseline PRD, 13 Sep 2026
synthesized_by: Michelle Yip
status: final synthesis baseline for R1 PRD drafting
---

# Unified Research Synthesis: R1 Opportunities (Officer & Admin)

## Summary

Right now, CareerCompass is a read-only bulletin board that points people to external forms. That breaks the experience on both sides.

Officers search across multiple portals, hit "Apply," and get dumped onto a FormSG page. Nine out of ten drop off right there. The ones who finish get zero status updates. They sit in silence for weeks, wondering if anyone read their application.

On the admin side, HR teams run a single posting across five disconnected tools: OTG for the listing, FormSG for the custom form, Excel for tracking, SharePoint or Google Drive for CVs, and email to send flyers. HR POCs spend hours downloading CVs and emailing them to hiring managers. OTG's lack of CV storage and custom forms is the exact reason MDDI stopped using it.

If R1 only fixes the officer catalog, we solve nothing. We have to close the loop on both sides.

### The 3 Things That Actually Matter

| # | Reality | What We Do About It |
|---|---|---|
| 1 | **The form builder is the wedge, not a nice-to-have.** Pilot agencies were blunt: if CareerCompass only gives them a fixed form, they will stay on FormSG. | Build flat custom fields (text, dropdowns, attachments) into the posting flow so agencies can retire FormSG. |
| 2 | **HR POCs are drowning in post-box admin.** Downloading CVs from drive links and emailing them out takes hours and breaks for non-.gov.sg emails. | Store CVs in-portal and let HR share candidate profiles with hiring managers in one click. |
| 3 | **Silence kills candidate engagement.** Applicants hear nothing for weeks because HR cannot send rejections until an entire cycle closes. | Build basic in-app status states (Applied, Shortlisted, Not Progressing, Offered) that notify applicants automatically. |

---

## Empirical Marketplace Dynamics (2025 Baseline & Title-Tag Analysis)

*Sources: 2025 Opportunity Postings export (`custom_gigs_report`, n=1,035), cross-referenced with `sjr_report` (2025 closed cycle), and Qiu Yan & Amy's 2025 STIP/Gig take-up rate analysis.*

### 1. Opportunity Type Breakdown (`custom_gigs_report`, 2025, n=1,035 postings)

`custom_gigs_report` is not a Gigs-only export; it is an uncurated Whole-of-Government opportunity postings table. Classifying all 1,035 postings by their title-tag prefix reveals the true operational distribution:

| Category | Postings | Zero-Applicant Rate | Applications | Shortlisted | Selected | Distinct Applicants | Distinct Posters |
|---|---|---|---|---|---|---|---|
| **SJR** | 294 (28%) | 22% | 733 | 9 | 22 | 120 | 70 |
| **Job (generic `[JOB]`)** | 169 (16%) | 72% | 60 | 0 | 0 | 34 | 30 |
| **Blended (Secondment + Job/Rotation)** | 137 (13%) | 36% | 129 | 1 | 0 | 48 | 32 |
| **Untagged** | 122 (12%) | 56% | 89 | 1 | 6 | 56 | 39 |
| **Secondment (pure `[SECONDMENT]`)** | 106 (10%) | 74% | 44 | 0 | 1 | 27 | 13 |
| **Gig** | 50 (5%) | 76% | 21 | 0 | 1 | 20 | 12 |
| **IJR (Internal Job Rotation)** | 50 (5%) | 88% | 5 | 0 | 1 | 4 | 4 |
| **STIP** | 30 (3%) | 87% | 4 | 0 | 0 | 4 | 3 |
| **Other (20+ one-off tags)** | 61 (6%) | varies | ~35 | 0 | 4 | ~25 | ~20 |
| **Test / Mockup / Trial** | 4 (<1%) | 50% | 2 | 1 | 1 | 2 | 2 |

### 2. Four Breakthrough Discoveries from the Title-Tag Data

1. **The Rotations Root Cause: OTG Has Zero CV Upload Capability:**
   * For Rotations, OTG literally cannot accept a resume upload.
   * Applicants are forced to either click out to an external Careers@Gov link or send a cold email with an attachment to an HR mailbox.
   * This explains why **86% to 89% of rotation outcomes were never logged in OTG**: OTG was never part of the transaction. HR managed candidates in Outlook, and panels reviewed CVs in private folders.
2. **IJR is a Failure, Not an SJR Variant:**
   * SJR is an active cross-agency marketplace (294 postings, 733 applications, 22% zero-applicant).
   * Internal Job Rotation (IJR) is an isolated catastrophe (50 postings, **88% zero-applicant**, 5 total applications all year). Silently folding IJR into SJR previously masked this failure. In Compass, IJR must be flagged with agency-only visibility (`F-20`) rather than cluttering central feeds.
3. **The Generic `[JOB]` Mystery (16% of Catalog):**
   * 169 postings sit under an unspecified `[JOB]` tag with a **72% zero-applicant rate**. They represent potential dead-ends (external C@G crawls that lost their links or untracked agency transfers).
4. **Secondments: Blended Outperforms Pure by 2x:**
   * Pure secondments (106 postings) suffer a 74% zero-applicant rate due to fear of losing scheme progression.
   * Blended roles (`[JOB/SECONDMENT]`, 137 postings) achieve a much healthier 36% zero-applicant rate because officers view them as structured rotations.
   * Combined, Secondments represent **243 postings/year (23% of the catalog)**.

### 3. Reconciling the Title-Tag Data with STIP/Gig Off-Platform Volume

In the title-tagged dataset, STIPs (30) and Gigs (50) look tiny, and show no quarterly peak. However, Qiu Yan and Amy's backend data shows **4,056 STIP vacancies (6,411 sign-ups)** and **696 Gig vacancies (686 sign-ups)**.
* **The Insight:** STIPs and Gigs were rarely tagged in OTG titles. Over 90% were run off-platform via FormSG links and email blasts.
* **The Value:** STIPs and Gigs bring raw volume (7,000+ sign-ups), while Rotations and Secondments (537 postings, 51% of catalog) bring formal career progression. CareerCompass must unify both.

---

### 7 Core Problem Hypotheses (Empirically Derived)

To translate the 2025 actuals and YoY audit trends into actionable product capabilities, we have isolated seven core hypotheses:

| ID | Plain-English Problem Area | Empirical Root Cause | Hypothesis Statement | R1 MVP Feature (What Users See) | Success Metric |
|---|---|---|---|---|---|
| **H-CAT-1** | **Immersions Burying Project Gigs (Single-Feed Dilution)** | STIPs make up 85.4% of all listings (4,056 in 2025), burying Gigs and Rotations when presented in a single unsorted feed within Jobs and Opportunities. | **If we** partition the "Jobs and Opportunities" catalog into two dedicated in-page sub-tabs ("Projects & Rotations" vs. "Short-Term Immersions"), **then** gig browsing and application rates will increase by 40%, **because** substantive roles will no longer compete for visibility against high-volume 2-day immersion events. | **In-Catalog Sub-Tabs: "Projects & Rotations" vs. "Short-Term Immersions"** | +40% gig view-to-apply rate; zero STIP interference on project listings. |
| **H-GIG-7** | **Zero-Applicant Postings** | 46% of gig postings draw 0 or 1 applicant despite near-parity demand overall. 68.7% drop in Q2. | **If we** flag zero-applicant gigs after 7 days with a "Needs Talent" tag and re-steer traffic to them, **then** the empty gig rate will fall from 46% to under 20%, **because** qualified candidates will spot starving technical opportunities before deadlines expire. | **"Needs Talent" Highlight on Empty Gigs** | Empty gig rate falls from 46% to < 20%. |
| **H-SJR-7** | **Unfilled Fixed-Window Vacancies** | Fixed-window rotation cycles lock talent out. Unfilled roles get abandoned because re-posting is painful. | **If we** prompt host HR 7 days before cycle close to roll unfilled SJRs into open-market postings with 1 click, **then** unfilled host vacancies will drop by 35%, **because** openings transition instantly without re-typing or losing applicant context. | **Prompt to Re-List Unfilled Rotations** | ≥ 50% of unfilled SJRs rolled over to open market; 35% vacancy reduction. |
| **H-STIP-1** | **Applying to Already-Full Sessions** | STIP demand exceeds supply by +58%, producing 2,355 rejected applicants who get zero automated status feedback. | **If we** show live remaining seats and switch the CTA to "Session Full" once capacity is reached, **then** applicant frustration will decrease, **because** officers will stop applying to filled sessions and redirect toward available cohorts. | **Seat Counter & "Session Full" Cut-Off** | Zero applications accepted after seat capacity hits 100%. |
| **H-OPS-1** | **Manual CV Downloading for Interview Panels** | HR coordinators spend 15 to 20 hours per month downloading individual CVs from drive links to build panel packets. | **If we** provide a one-click Batch ZIP Export of shortlisted candidate resumes, **then** HR will manage the candidate review cycle inside CareerCompass, **because** offline review panels receive clean, bundled dossiers in seconds. | **1-Click "Download All Resumes" (ZIP)** | ≥ 80% of shortlisted candidate dossiers exported via batch ZIP. |
| **H-APP-1** | **High-Volume Out-of-Grade Submissions** | 90% candidate churn in 2026. 11 officers submitted 39% of 2025 SJR applications; 1 candidate filed 112 applications. | **If we** enforce structured job grade badges and trigger a soft warning pop-up when an officer's profile grade mismatches posting criteria, **then** low-intent serial applications will drop by 50%, **because** candidates receive upfront eligibility clarity before submitting. | **Grade Match Warning for Applicants** | Serial applications (> 10 per candidate) drop by > 50%; candidate repeat rate improves. |
| **H-SJR-8** | **Untracked Hiring Outcomes & Candidate Silence** | Unrecorded outcomes rose from 86% (2024) to 89% (2026), losing ~89 confirmed placements per year from central records. | **If we** introduce a 4-stage status pipeline with automated candidate alerts and closure nudges, **then** unrecorded outcomes will fall below 30%, **because** updating statuses takes one click and eliminates the candidate limbo black hole. | **Candidate Status Updates with Alerts** | In-system outcome resolution reaches ≥ 60% (from 11% baseline). |

---

## Where the Workflow Breaks Today

```
OFFICER EXPERIENCE                              AGENCY HR EXPERIENCE
------------------                              -------------------
Browse roles on CareerCompass                   Draft JD in Word
       │                                               │
Click "Apply" -> Sent to external FormSG        Build bespoke FormSG form
       │                                               │
90% abandon; rest paste Drive CV links          Post to OTG & chase central EDM
       │                                               │
Submit into a black hole                        Manually download CVs from drives
(Zero updates for 4-8 weeks)                           │
                                                Email CVs to hiring manager ("post-box")
                                                       │
                                                Track status in "mega" Excel sheet
                                                       │
                                                Never notify rejected candidates
```

---

## Theme 1: Form Flexibility vs. System Standardization

* **Who it affects:** All 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS).
* **Severity:** High. This was the original switch condition.
* **Current workaround:** Building one-off FormSG questionnaires for every gig and technical role.

### The Problem
Gigs and rotations need specific screening details (domain experience, line-manager concurrence). A completely fixed, rigid form caused agencies to leave OTG. However, building an open-ended custom form builder in CareerCompass would consume 2 full sprints, turning Compass into another form engine.

### Supporting Evidence
* MDDI abandoned OTG in favor of FormSG specifically because OTG lacked custom screening fields, CV storage, and automated status updates.
* In the 14 September Architecture Jam, Barry Lim and Adrian Ang mandated that Compass cannot build an ATS or a generic form builder.

### Post-Pivot Resolution (Barry Lim's Field Standardization Rule)
* **Pre-fill Core Fields:** Pull Full Name, Work Email, Ministry, and Designation/Grade directly from authenticated WOG AD profiles.
* **Allow Exactly One Custom Field:** Posters can define a single short text prompt (max 500 characters, e.g. "Briefly describe your relevant domain experience").
* **Embedded FormSG for STIPs:** Embed the locked Workforce Development FormSG template inside an iframe (`F-09`), preserving cross-government reporting without custom engineering.
* **Direct PDF Upload for Rotations:** Provide a direct resume dropzone (`F-05`), solving the root cause of agency defection.
* **Success Metric:** 100% of pilot agency postings run via standardized Compass profiles and Barry Lim's 1-question prompt, with zero custom form builder overhead.

---

## Theme 2: The HR Post-Box Burden

* **Who it affects:** HR POCs and hiring managers across all pilot agencies.
* **Severity:** High. It wastes hours and leaks sensitive data.
* **Current workaround:** Applicants paste Google Drive or SharePoint links into form fields. HR POCs open each link, download the PDF, and email it to the hiring manager.

### The Problem
Without native file storage, HR POCs act as human relays. This breaks constantly. Candidates forget to set link permissions to public. Officers in statutory boards without `.gov.sg` emails cannot open restricted ministry SharePoint drives. Meanwhile, resumes sit unmanaged in personal email threads.

### Supporting Evidence
* "HR Points of Contact (POCs) often act as administrative intermediaries, manually downloading and emailing CVs to hiring managers due to lack of direct system access and integrated CV storage." (Admin Discovery, Section 2.3)
* "Officers upload CVs to personal Google Drives or WOG SharePoint folders and paste the links into form fields. This creates security and access issues for agencies without .gov.sg emails." (Admin Discovery, Section 2.3)
* HR POCs asked for bulk "Download All CVs" buttons just to cope with rotation cycles.

### Recommended Action
* **Build:** Direct CV upload on the application form, pre-filled from the officer's CareerCompass profile. Give HR POCs an in-portal "Share with Hiring Manager" button to grant view access.
* **Keep Out of R1:** Do not build a complex applicant tracking system with interview scheduling. Just get the CV securely from applicant to evaluator.
* **Success Metric:** Zero external Google Drive or SharePoint links submitted for pilot agency roles.

---

## Theme 3: Applicants in Limbo (The Status Black Hole)

* **Who it affects:** 100% of applicants and every HR coordinator.
* **Severity:** High. Primary driver of applicant cynicism and drop-off.
* **Current workaround:** Silence. HR does not notify unsuccessful candidates until an entire exercise finishes months later.

### The Problem
Once an officer hits submit, they see nothing. On the admin side, HR cannot send early rejections or status shifts during long programs like SJR. Talented officers wait weeks in limbo, assume they were ignored, and stop looking at civil service opportunities.

### Supporting Evidence
* "Officers are often left 'hanging' for weeks. The system does not allow HR to notify unsuccessful candidates until the entire exercise is closed and a final candidate is confirmed." (Admin Discovery, Section 2.1)
* Our MVP baseline tracks a 90% drop-off from opportunity views to confirmed outcomes because external forms break tracking.
* The 89% unrecorded outcome problem exists because hiring managers make decisions offline in spreadsheets.

### Recommended Action
* **Build:** Four simple candidate states:
  1. *Submitted* (instant email confirmation)
  2. *Shortlisted* (visible status badge)
  3. *Not Progressing* (triggers a polite, automated closure note)
  4. *Offered* (marks the outcome and updates vacancy count)
* Show these directly on an officer's "My Applications" dashboard page.
* **Success Metric:** Median time from hiring manager decision to candidate update under 24 hours.

---

## Theme 4: Inconsistent Naming Breaks Search and Discovery

* **Who it affects:** Officers trying to filter roles, and DevOps teams managing data.
* **Severity:** Medium-High. Roles disappear from search results.
* **Current workaround:** Central DevOps teams pull Excel exports and fix tags by hand before each EDM.

### The Problem
Agencies use inconsistent category prefixes. Missing tags cause roles to vanish silently when an officer applies a search filter. Further, teams conflate "SJR" (a structured program) with "Secondment" (the HR mechanism). When an SJR role goes unfilled, HR cannot change it to an open market role; they have to delete the post and re-create it from scratch.

### Supporting Evidence
* "Missing opportunity type prefixes... Agencies interpreting categories differently." (Job Posting Discovery Synthesis, Section 2)
* "Null or unmapped job functions cause opportunities to disappear from results." (Sprint Internal Demo notes)
* Whole-of-Government secondment figures are currently estimated by comparing agency payroll codes due to missing database flags.

### Recommended Action
* **Build:** Mandatory taxonomy fields in the posting creator. Block publication if the job family or opportunity type is blank. Add an explicit "Secondment" flag. Allow unfilled SJR roles to convert to open opportunities with a status change.
* **Success Metric:** Zero live postings with null job functions or unmapped categories.

---

## The Big Disagreement: Who Sees the CV First?

During pilot agency interviews, HR teams split on line-manager access:

| Team | Preference | Argument |
|---|---|---|
| **Agile Agencies** (MDDI, tech teams) | Direct access for hiring managers | Cuts out the middleman. Hiring managers should see applications as soon as they come in. |
| **Traditional Agencies** (PSD, central teams) | HR gatekeeper screening first | HR must check eligibility, tenure, and ministry quotas before letting line managers review candidates. |

### How We Handle It
Do not force a single ministry policy. Make it configurable per posting:
* **Default:** Applications land in the HR review bucket ("Pending HR Screening"). HR clicks "Release to Hiring Manager" once verified.
* **Fast-Track Option:** HR can check "Allow Direct Hiring Manager Access" when setting up the post if their agency allows it.

---

## What We Still Need to Validate

1. **Direct Line Managers:** We talked to HR POCs and DevOps admins, but not the hiring managers who evaluate candidates. We need quick hallway tests on the applicant review screen.
2. **Statutory Board Access:** Test whether officers on non-.gov.sg domains can open attachments and log in without friction.
3. **Gig Applicant Form Fatigue:** Check how many custom questions officers will tolerate on a 2-week gig before dropping off.

---

## Next Step

Run **`/prd-draft`** to turn these findings into the **R1 Opportunities Admin Portal & Native Application PRD**.
