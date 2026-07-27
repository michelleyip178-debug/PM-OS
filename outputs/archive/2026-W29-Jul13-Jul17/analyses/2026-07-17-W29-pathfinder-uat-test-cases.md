# Pathfinder — UAT Test Cases

**Format:** One test case per field, per the [UAT Operating Model](../meeting-notes/2026-07-17-W29-uat-operating-model.md) — Test Case ID, AC Reference, Scenario, Pre-conditions, Test Steps, Test Data, Expected Result, Actual Result, Pass/Fail, Tested By/Date, Comments.

**Covers:** Login + Opportunities Explore, shipped scope (Sprints 1–5)

**Status:** 🟢 Ready for UAT — all test cases below are Done/QA-complete in Jira as of 2026-07-17

**Personas:** See CareerCompass UAT Test Cases doc for full persona definitions; Pathfinder test cases below use **Priya** (standard officer) unless otherwise noted, since these are shipped, non-edge-case-heavy flows

---

## Browsing Opportunities (AC: OTEP-85, OTEP-267, OTEP-268)

### UAT-OPP-001

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-001 |
| AC Reference | OTEP-85 |
| Scenario | Officer sees a correctly sorted grid of opportunity cards on first visit |
| Persona | Priya |
| Pre-conditions | Logged in; open opportunities exist |
| Test Steps | 1. Log in. 2. Land on opportunities listing page. |
| Test Data | Listing with ≥5 open opportunities, varied posting dates |
| Expected Result | Cards shown in 3-column grid, up to 15/page, sorted newest-posted-first |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-002

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-002 |
| AC Reference | OTEP-85 |
| Scenario | Each card displays correct basic info |
| Persona | Priya |
| Pre-conditions | Listing loaded |
| Test Steps | 1. View any card. |
| Test Data | — |
| Expected Result | Title, Agency, Posting Date (absolute format, e.g. "12 May 2026"), Type all visible |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-003

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-003 |
| AC Reference | OTEP-85 |
| Scenario | Closed opportunities are excluded from the listing entirely |
| Persona | Priya |
| Pre-conditions | Listing includes at least one opportunity past its closing date |
| Test Steps | 1. Load the listing. 2. Confirm the closed opportunity is absent. |
| Test Data | One opportunity with closing_date in the past |
| Expected Result | Closed opportunity does not appear in the grid |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-004

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-004 |
| AC Reference | OTEP-267 |
| Scenario | Pagination controls appear when there are more than 15 opportunities |
| Persona | Priya |
| Pre-conditions | Listing has >15 open opportunities |
| Test Steps | 1. Load the listing. 2. Observe pagination controls. |
| Test Data | 16+ open opportunities |
| Expected Result | "Next"/"Previous" controls appear; page indicator shows "Page X of Y" |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-005

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-005 |
| AC Reference | OTEP-267 |
| Scenario | Pagination controls are fully hidden when everything fits on one page |
| Persona | Priya |
| Pre-conditions | Listing has ≤15 open opportunities |
| Test Steps | 1. Load the listing. |
| Test Data | ≤15 open opportunities |
| Expected Result | Pagination controls entirely absent, not just disabled |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-006

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-006 |
| AC Reference | OTEP-268 |
| Scenario | Zero-opportunity state shows a clear message, not a blank page |
| Persona | Priya |
| Pre-conditions | No open opportunities exist |
| Test Steps | 1. Load the listing with zero available opportunities. |
| Test Data | Empty opportunity set |
| Expected Result | "No opportunities available right now" message with supporting text/illustration; no pagination controls shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

## Filtering (AC: OTEP-86, OTEP-317, OTEP-268)

### UAT-OPP-007

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-007 |
| AC Reference | OTEP-86 |
| Scenario | Filtering to a single opportunity type narrows the listing correctly |
| Persona | Priya |
| Pre-conditions | Listing has a mix of types |
| Test Steps | 1. Select "STIP" filter only. |
| Test Data | Listing with STIP, Gig, and Jobs types present |
| Expected Result | Only STIP opportunities shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-008

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-008 |
| AC Reference | OTEP-86 |
| Scenario | Filtering to multiple types shows the union of those types |
| Persona | Priya |
| Pre-conditions | Listing has a mix of types |
| Test Steps | 1. Select "STIP" and "Gig" together. |
| Test Data | Listing with STIP, Gig, and Jobs types present |
| Expected Result | Both STIP and Gig shown, nothing else |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-009

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-009 |
| AC Reference | OTEP-86 |
| Scenario | Active filter persists across pagination |
| Persona | Priya |
| Pre-conditions | Filter active, >15 filtered results |
| Test Steps | 1. Apply a filter. 2. Page to page 2. |
| Test Data | >15 opportunities matching one filter type |
| Expected Result | Filter remains applied on page 2 |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-010

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-010 |
| AC Reference | OTEP-86, OTEP-268 |
| Scenario | A filter combination matching zero results shows the standard empty state |
| Persona | Priya |
| Pre-conditions | A filter combination with no matching opportunities |
| Test Steps | 1. Apply a filter combination with zero matches. |
| Test Data | Filter combo guaranteed to match nothing in test data |
| Expected Result | Same empty-state message as UAT-OPP-006 |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-011

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-011 |
| AC Reference | OTEP-317 |
| Scenario | "Clear all" resets every active filter in one action |
| Persona | Priya |
| Pre-conditions | One or more filters active |
| Test Steps | 1. With filters active, click "Clear all." |
| Test Data | — |
| Expected Result | All filters removed, full unfiltered listing shown, result count updates, "Clear all" option itself disappears |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-012

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-012 |
| AC Reference | OTEP-317 |
| Scenario | "Clear all" is not shown when no filters are active |
| Persona | Priya |
| Pre-conditions | No filters active |
| Test Steps | 1. Load the listing with no filters applied. |
| Test Data | — |
| Expected Result | "Clear all" option is not shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

## Opportunity Detail Page (AC: OTEP-128, OTEP-129, OTEP-284)

### UAT-OPP-013

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-013 |
| AC Reference | OTEP-128 |
| Scenario | Detail page displays full opportunity information |
| Persona | Priya |
| Pre-conditions | Valid opportunity exists |
| Test Steps | 1. Click into an opportunity from the listing. |
| Test Data | Opportunity with all fields populated |
| Expected Result | Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," Commitment type all shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-014

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-014 |
| AC Reference | OTEP-128 |
| Scenario | "Back to opportunities" link works from the detail page |
| Persona | Priya |
| Pre-conditions | On a detail page |
| Test Steps | 1. Click "Back to opportunities." |
| Test Data | — |
| Expected Result | Returns to the listing |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-015

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-015 |
| AC Reference | OTEP-128 |
| Scenario | Detail page loads correctly via direct/bookmarked URL |
| Persona | Priya |
| Pre-conditions | Valid opportunity ID, officer logged in |
| Test Steps | 1. Save a detail page URL. 2. Access it directly (not via listing click). |
| Test Data | Valid opportunity ID |
| Expected Result | Loads the correct opportunity directly |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-016

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-016 |
| AC Reference | OTEP-128 |
| Scenario | Invalid opportunity ID shows a clean "not found" state |
| Persona | Priya |
| Pre-conditions | — |
| Test Steps | 1. Access a detail URL with an invalid/nonexistent opportunity ID. |
| Test Data | Malformed or nonexistent opportunity ID |
| Expected Result | "Opportunity not found" message with a link back to the listing — not a broken page |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-017

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-017 |
| AC Reference | OTEP-129 |
| Scenario | Deep-link to a closed opportunity shows a clear closed-state message |
| Persona | Priya |
| Pre-conditions | Opportunity past its closing date |
| Test Steps | 1. Access a deep-link to a now-closed opportunity. |
| Test Data | Opportunity with closing_date in the past |
| Expected Result | "This opportunity is no longer available" message, link back to listing |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-018

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-018 |
| AC Reference | OTEP-284 |
| Scenario | "Closing soon" badge shows correctly within the 7-day threshold |
| Persona | Priya |
| Pre-conditions | Opportunity closing within 7 days, strictly in the future |
| Test Steps | 1. View the opportunity's card. 2. View its detail page. |
| Test Data | Opportunity closing in 5 days |
| Expected Result | "Closing soon" badge visible in the same position on both card and detail page |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-OPP-019

| Field | Value |
|---|---|
| Test Case ID | UAT-OPP-019 |
| AC Reference | OTEP-284 |
| Scenario | "Closing soon" badge does not show for evergreen (no closing date) opportunities |
| Persona | Priya |
| Pre-conditions | Opportunity with nil closing_date |
| Test Steps | 1. View the opportunity's card. |
| Test Data | Opportunity with no closing date set |
| Expected Result | No "Closing soon" badge shown |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

## Applying — Careers@Gov (AC: OTEP-89)

### UAT-APPLY-001

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-001 |
| AC Reference | OTEP-89 |
| Scenario | C@G opportunity detail page shows correct sourced information |
| Persona | Priya |
| Pre-conditions | C@G-sourced opportunity exists |
| Test Steps | 1. Click into a C@G-sourced opportunity. |
| Test Data | C@G opportunity with complete payload |
| Expected Result | Title, agency, description, duration, and available structured fields shown — same layout as OTG detail page |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-002

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-002 |
| AC Reference | OTEP-89 |
| Scenario | Responsibilities/pre-req fields are intentionally excluded from the C@G detail page |
| Persona | Priya |
| Pre-conditions | C@G payload includes responsibility/pre-req fields |
| Test Steps | 1. View the C@G detail page. 2. Confirm responsibilities/pre-reqs are not shown inline. |
| Test Data | C@G payload with responsibilities/pre-req data present |
| Expected Result | That data is NOT shown in CareerCompass, even though it exists in the payload — officer is directed to Careers@Gov for it |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-003

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-003 |
| AC Reference | OTEP-89 |
| Scenario | "Apply via Careers@Gov" deep-links directly to the correct posting |
| Persona | Priya |
| Pre-conditions | Valid C@G opportunity |
| Test Steps | 1. Click "Apply via Careers@Gov." |
| Test Data | — |
| Expected Result | New tab opens, deep-links directly to that specific posting on the real Careers@Gov site — not the homepage; `click-to-cag` event captured |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-004

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-004 |
| AC Reference | OTEP-89 |
| Scenario | C@G posting no longer available post-click is handled entirely on C@G's side |
| Persona | Priya |
| Pre-conditions | C@G posting has been taken down since the officer clicked through |
| Test Steps | 1. Click through to a C@G posting that's since been removed. |
| Test Data | — |
| Expected Result | No CareerCompass-side error state shown; handled by Careers@Gov |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-005

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-005 |
| AC Reference | OTEP-89 |
| Scenario | C@G detail page shows only one apply path |
| Persona | Priya |
| Pre-conditions | C@G opportunity |
| Test Steps | 1. View the C@G detail page. |
| Test Data | — |
| Expected Result | Only "Apply via Careers@Gov" CTA shown — no FormSG or OTG-native apply option |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

## Applying — FormSG / CareerCompass-Native (AC: OTEP-319)

### UAT-APPLY-006

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-006 |
| AC Reference | OTEP-319 |
| Scenario | Apply button opens the correct FormSG form for the opportunity |
| Persona | Priya |
| Pre-conditions | Internal Job, STIP, or Gig with valid formsg_url |
| Test Steps | 1. Click "Apply" on the detail page. |
| Test Data | Opportunity with valid formsg_url |
| Expected Result | Opens that opportunity's FormSG form in a new tab |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-007

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-007 |
| AC Reference | OTEP-319 |
| Scenario | Each opportunity's Apply button opens its own correct form, never a mismatched one |
| Persona | Priya |
| Pre-conditions | Two distinct opportunities, each with a different formsg_url |
| Test Steps | 1. Apply on Opportunity A. 2. Return and apply on Opportunity B. |
| Test Data | Two opportunities, distinct formsg_url values |
| Expected Result | Each opens its own correct form |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

### UAT-APPLY-008

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-008 |
| AC Reference | OTEP-319 |
| Scenario | Missing formsg_url shows a clear fallback message, not a broken button |
| Persona | Priya |
| Pre-conditions | Opportunity with no formsg_url configured |
| Test Steps | 1. View the detail page for an opportunity with no application link. |
| Test Data | Opportunity with empty/missing formsg_url |
| Expected Result | "Application form unavailable — contact the posting agency" shown in place of the Apply button, no layout shift |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | ⚠️ Confirm representative test data exists — Sprint 5 comments noted the source Excel was missing POC data for many opportunities |

### UAT-APPLY-009

| Field | Value |
|---|---|
| Test Case ID | UAT-APPLY-009 |
| AC Reference | OTEP-319 |
| Scenario | FormSG form itself being down is handled by FormSG, not CareerCompass |
| Persona | Priya |
| Pre-conditions | formsg_url present, but destination form is closed/unavailable |
| Test Steps | 1. Click Apply on an opportunity whose FormSG form is closed. |
| Test Data | Opportunity with a formsg_url pointing to a closed/unavailable form |
| Expected Result | Officer sees FormSG's own error page — CareerCompass shows no additional error state |
| Actual Result | *(filled during test run)* |
| Pass/Fail | *(filled during test run)* |
| Tested By/Date | *(filled during test run)* |
| Comments | — |

---

## Not yet ready for UAT test-case status

These remain in the [BO plain-language document](2026-07-17-W29-pathfinder-bo-uat-scenarios-signoff.md)'s "Not yet ready for your review" list and have no test case IDs yet — will be added once built:

- Real WOG AD login (still interim Keycloak stub)
- Keyword search
- Filter by job category/family
- C@G opportunities appearing automatically in the main listing
- Ringfencing enforcement (design decided, not built)
- Full FormSG apply-tracking flow (webhook, notifications) — open item #57, unconfirmed scope
- "What do job types mean" explainer
- Agency logos on detail page
- Specific broken-FormSG-link fallback message (OTEP-131, in progress)

---

## Personas Required — Test Accounts

Pathfinder's shipped scope is largely happy-path (Priya) since it predates most of the edge-case-driven personas built for CareerCompass. Two exceptions worth flagging:

| Test Case | Persona needed | Why |
|---|---|---|
| UAT-APPLY-008 | Requires an opportunity record with missing formsg_url | Not an officer persona — a **data** persona. Confirm this data state actually exists in the reserved UAT dataset before this test case can run. |
| UAT-OPP-006 / UAT-OPP-010 | Requires a listing/filter state with zero results | Also a data-state requirement, not an officer persona — confirm test data can be arranged to produce genuinely zero matches |

---

*Generated: 2026-07-17*
*Converted from: [Pathfinder BO sign-off — Journeys 1–5](2026-07-17-W29-pathfinder-bo-uat-scenarios-signoff.md) — that document remains the plain-language version for BO pre-review; this document is the execution-ready format per the UAT Operating Model*
*Companion: [CareerCompass UAT Test Cases](2026-07-17-W29-careercompass-uat-test-cases.md) for Core/Intelligence scope*
*Next: Confirm UAT-APPLY-008's test data actually exists; load into Jira UAT board (CC-UAT, per Operating Model's single-board rule) once Chris/XZ have reviewed the underlying BO scenarios*
