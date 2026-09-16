## R1 Opportunities — Feature List and Key Risks

**Date:** 2026-09-16

**Source:** [R1 Opportunities Marketplace PRD, 14 Sep](../prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md)

R1 replaces OTG, the current system officers use to browse and apply for postings, gigs, short courses, and rotations. Below is what we're building, why, and the main risk for each.

---

## 1. Candidate Data Access

| # | Feature | Purpose | Main Risk |
|---|---|---|---|
| 1 | Role-based access: officers see only their own applications, managers see only their assigned candidates, HR sees their agency's postings | Protects candidate data privacy | Must work correctly before any resume uploads go live. Some managers (e.g. at statutory boards) may not have standard agency logins, which the access rules need to account for |
| 2 | Public preview page, so an officer clicking a link from OTG or an email doesn't hit a login wall right away | Keeps officers from dropping off before they even reach the application | Depends on login working smoothly across every device and situation. If a session times out mid-flow, we have no way yet to catch it |
| 3 | Automated candidate-package delivery for agencies that manage hiring fully on their own | Keeps agencies with strict internal hiring rules from abandoning CareerCompass altogether | If build time runs short, this is the first feature likely to be cut. If we're wrong about what these agencies actually need, cutting it brings the adoption risk straight back |

## 2. Job Listings

| # | Feature | Purpose | Main Risk |
|---|---|---|---|
| 4 | Nightly automatic pull of permanent civil service job listings | Officers see every central job opening in one place | Assumes this data feed stays clean with little upkeep. Depends on the same open question as item 6 below |
| 5 | Separate browsing tabs for Gigs, Short Courses, Rotations, and Jobs | Expected to raise browsing activity by 40%, since officers no longer wade through short courses to find substantive roles | Low risk. If the 40% target is missed, nothing breaks, we simply don't get the lift |
| 6 | A filter that prevents the same posting from showing twice, once on OTG and once on CareerCompass | Stops duplicate listings and stops HR from managing two separate candidate lists for one role | **Biggest open question in this release.** This only works if OTG can technically receive postings pushed to it from CareerCompass — not yet confirmed. We already have a fallback ready in case it can't, which tells you confidence here is not high. If it fails, job listings can only flow one way until OTG is retired |
| 7 | A 3-field quick-posting form for short project gigs | Expected to raise gig postings by 40%, on the theory that posting today is too slow | Assumes speed, not awareness, is the reason gig postings are low today. If managers simply don't know gigs are an option, a faster form won't fix it |
| 8 | One-click way for HR to convert an unfilled restricted rotation into an open general vacancy | Refills unfilled rotations faster, cuts re-listing time from days to under a minute | More complex to build than it looks. Real risk of losing existing applicant data during the conversion if not built carefully |

## 3. Applying and Screening

| # | Feature | Purpose | Main Risk |
|---|---|---|---|
| 9 | On-screen advisory when an officer's grade doesn't match a role's requirement | Meant to cut down low-effort, mismatched applications | **This is a mismatch between the problem and the fix.** The problem motivating this feature: one officer filed 112 applications last year. A polite advisory will not change behavior at that scale |
| 10 | Direct resume upload inside CareerCompass, replacing the redirect to an external form | Meant to keep every pilot agency's postings on CareerCompass instead of leaking to outside forms | One agency already left OTG for reasons beyond missing resume upload — they also wanted custom screening questions and status updates. This feature addresses only part of their original complaint |
| 11 | *(Deferred, not in this release)* Supervisor courtesy notice: a checkbox plus automatic email to the officer's manager | Meant to reduce officer hesitation to apply, over fear their manager will object | A checkbox is not proof the officer actually spoke to their manager |

## 4. Reviewing Candidates and Closing the Loop

| # | Feature | Purpose | Main Risk |
|---|---|---|---|
| 12 | One-click download of all shortlisted candidates' resumes for HR | Expected to cut HR's interview prep time by 60% | Known issue: this will currently fail if more than about 80 candidates apply to one role. Needs fixing before launch |
| 13 | Simple 3-step application status (Submitted → Under Review → Outcome), which auto-closes after 30 days if HR never updates it | Stops candidates from being left in silence for weeks | Auto-closing a stalled application as "Concluded" can make the silence problem look solved on a report, when in practice a hiring manager simply never responded. Whether this gets fixed depends on a separate policy question for PSD: should hiring managers be required to report real outcomes |

---

## The Two Risks Worth Watching Most Closely

**1. Whether OTG can technically receive postings pushed from CareerCompass (items 4 and 6).** This is the single biggest open question in the release, and two separate features depend on the same answer. If it doesn't work, both fail together.

**2. Every feature that relies on officers or managers "doing the right thing" when reminded (items 9 and 11) has no real enforcement behind it in this release.** The one case we have hard evidence for, 112 applications from a single officer, is exactly the kind of behavior a polite reminder won't stop.

---

## What's Deferred, and What We're Relying on Instead

| Deferred feature | What we're doing instead in this release | What's unproven |
|---|---|---|
| Live seat counter for short courses | Workforce Development manually caps sign-ups per session | Whether this gets configured reliably every time, without the system enforcing it |
| Full recruitment pipeline with automatic candidate alerts | The simple 3-step status (item 13) | Whether "simple" actually solves the silence problem, or just makes it harder to see |
| On-screen attendance checklist for short courses | Manual spreadsheet returns from session hosts | No one is currently assigned to consolidate these spreadsheets into one report |
| Standardized badges and tracker for secondments | Generic tags and plain-text descriptions | Whether this is enough, given secondment tracking today is essentially guesswork from payroll records |
