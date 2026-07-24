---
date: 2026-07-24
week: 2026-W30
topic: Consolidated Test Plan — Pathfinder (Opportunities), by feature
status: draft — for Adrian, requested on DOs call 2026-07-23. For BO walkthrough/execution.
---

# Consolidated Test Plan — Pathfinder

**Scope:** Pathfinder squad (Opportunities: Login, Listing, Filter, Search, Detail, Ringfencing, Apply). Core squad (Profile, competency, JumpStart) is Imelda's plan, not covered here.

---

## Feature: Listing & Discovery

*AC: OTEP-85, OTEP-267, OTEP-268*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-OPP-001 | Officer sees a correctly sorted grid of opportunity cards on first visit | Logged in; open opportunities exist | 1. Log in.<br>2. Land on opportunities listing page. | Listing with ≥5 open opportunities, varied posting dates | Cards shown in 3-column grid, up to 15/page, sorted newest-posted-first | | |
| UAT-OPP-002 | Each card displays correct basic info | Listing loaded | 1. View any card. | — | Title, Agency, Posting Date (absolute format, e.g. "12 May 2026"), Type all visible | | |
| UAT-OPP-003 | Closed opportunities are excluded from the listing entirely | Listing includes at least one opportunity past its closing date | 1. Load the listing.<br>2. Confirm the closed opportunity is absent. | One opportunity with closing_date in the past | Closed opportunity does not appear in the grid | | |
| UAT-OPP-004 | Pagination controls appear when there are more than 15 opportunities | Listing has >15 open opportunities | 1. Load the listing.<br>2. Observe pagination controls. | 16+ open opportunities | "Next"/"Previous" controls appear; page indicator shows "Page X of Y" | | |
| UAT-OPP-005 | Pagination controls are fully hidden when everything fits on one page | Listing has ≤15 open opportunities | 1. Load the listing. | ≤15 open opportunities | Pagination controls entirely absent, not just disabled | | |
| UAT-OPP-006 | Zero-opportunity state shows a clear message, not a blank page | No open opportunities exist | 1. Load the listing with zero available opportunities. | Empty opportunity set | "No opportunities available right now" message with supporting text/illustration; no pagination controls shown | | |

---

## Feature: Filtering

*AC: OTEP-86, OTEP-317*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-OPP-007 | Filtering to a single opportunity type narrows the listing correctly | Listing has a mix of types | 1. Select "STIP" filter only. | Listing with STIP, Gig, and Jobs types present | Only STIP opportunities shown | | |
| UAT-OPP-008 | Filtering to multiple types shows the union of those types | Listing has a mix of types | 1. Select "STIP" and "Gig" together. | Listing with STIP, Gig, and Jobs types present | Both STIP and Gig shown, nothing else | | |
| UAT-OPP-009 | Active filter persists across pagination | Filter active, >15 filtered results | 1. Apply a filter.<br>2. Page to page 2. | >15 opportunities matching one filter type | Filter remains applied on page 2 | | |
| UAT-OPP-010 | A filter combination matching zero results shows the standard empty state | A filter combination with no matching opportunities | 1. Apply a filter combination with zero matches. | Filter combo guaranteed to match nothing in test data | Same empty-state message as UAT-OPP-006 | | |
| UAT-OPP-011 | "Clear all" resets every active filter in one action | One or more filters active | 1. With filters active, click "Clear all." | — | All filters removed, full unfiltered listing shown, result count updates, "Clear all" option itself disappears | | |
| UAT-OPP-012 | "Clear all" is not shown when no filters are active | No filters active | 1. Load the listing with no filters applied. | — | "Clear all" option is not shown | | |

---

## Feature: Search

*AC: OTEP-405*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

---

## Feature: Opportunity Detail Page

*AC: OTEP-128, OTEP-129, OTEP-284*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-OPP-013 | Detail page displays full opportunity information | Valid opportunity exists | 1. Click into an opportunity from the listing. | Opportunity with all fields populated | Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," Commitment type all shown | | |
| UAT-OPP-014 | "Back to opportunities" link works from the detail page | On a detail page | 1. Click "Back to opportunities." | — | Returns to the listing | | |
| UAT-OPP-015 | Detail page loads correctly via direct/bookmarked URL | Valid opportunity ID, officer logged in | 1. Save a detail page URL.<br>2. Access it directly (not via listing click). | Valid opportunity ID | Loads the correct opportunity directly | | |
| UAT-OPP-016 | Invalid opportunity ID shows a clean "not found" state | — | 1. Access a detail URL with an invalid/nonexistent opportunity ID. | Malformed or nonexistent opportunity ID | "Opportunity not found" message with a link back to the listing — not a broken page | | |
| UAT-OPP-017 | Deep-link to a closed opportunity shows a clear closed-state message | Opportunity past its closing date | 1. Access a deep-link to a now-closed opportunity. | Opportunity with closing_date in the past | "This opportunity is no longer available" message, link back to listing | | |
| UAT-OPP-018 | "Closing soon" badge shows correctly within the 7-day threshold | Opportunity closing within 7 days, strictly in the future | 1. View the opportunity's card.<br>2. View its detail page. | Opportunity closing in 5 days | "Closing soon" badge visible in the same position on both card and detail page | | |
| UAT-OPP-019 | "Closing soon" badge does not show for evergreen (no closing date) opportunities | Opportunity with nil closing_date | 1. View the opportunity's card. | Opportunity with no closing date set | No "Closing soon" badge shown | | |
| UAT-OPP-020 | Officer with a full competency match sees 5/5 on the baseline opportunity | Officer profile has all 5 competencies required by OPP_MAX_COMP_MATCH | 1. Log in as `profile.opp.maxmatch@dummy.company.com`.<br>2. Navigate to the OPP_MAX_COMP_MATCH opportunity. | Account: `PROFILE_OPP_MAX_COMP_MATCH`. Opportunity: `OPP_MAX_COMP_MATCH`, 5 required competencies | Opportunity displays "5/5" competency match | | |
| UAT-OPP-021 | Officer with a partial competency match sees the correct fraction | Officer profile has 2 of the 5 competencies required by OPP_MAX_COMP_MATCH | 1. Log in as `profile.opp.partialmatch@dummy.company.com`.<br>2. Navigate to the OPP_MAX_COMP_MATCH opportunity. | Account: `PROFILE_OPP_PARTIAL_COMP_MATCH`. Same opportunity as UAT-OPP-020 | Opportunity displays "2/5" competency match | | |
| UAT-OPP-022 | Officer with competencies but zero overlap sees 0/5, not an error or blank state | Officer has competencies, but none match OPP_MAX_COMP_MATCH's required set | 1. Log in as `profile.opp.nomatch@dummy.company.com`.<br>2. Navigate to the OPP_MAX_COMP_MATCH opportunity. | Account: `PROFILE_OPP_NO_COMP_MATCH`. Same opportunity as UAT-OPP-020 | Opportunity displays "0/5" competency match — not a blank field or error | | |
| UAT-OPP-023 | Officer with no competencies assigned at all sees 0/5 | Officer has no competencies in their profile | 1. Log in as `profile.opp.nocompetencies@dummy.company.com`.<br>2. Navigate to the OPP_MAX_COMP_MATCH opportunity. | Account: `PROFILE_OPP_NO_COMPETENCIES`. Same opportunity as UAT-OPP-020 | Opportunity displays "0/5" | | |
| UAT-OPP-024 | Opportunity with zero competency requirements shows a clear "no competencies" state | Opportunity has no competency records linked | 1. Navigate to an opportunity with `OPP_COMP_NULL` seed data. | Opportunity: `OPP_COMP_NULL` | Displays "No competencies available" — not "0/0" or a blank match indicator | | |

---

## Feature: Ringfencing

*AC: OTEP-127, OTEP-390, OTEP-408, OTEP-409*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-RF-001 | Ringfencing master switch off — opportunity visible to everyone regardless of rule | Ringfencing master switch = Off; rule set to INCLUDE (Agency: MOF) | 1. Log in as an officer whose profile agency does NOT match the rule (e.g. MOM).<br>2. Browse opportunities. | Officer profile: Agency = MOM (non-matching). Opportunity rule: active = No, INCLUDE Agency = MOF | Opportunity appears in the listing and is fully accessible — the switch being off bypasses ringfencing entirely | | |
| UAT-RF-002 | Include rule, officer matches — opportunity visible | Ringfencing on; rule = INCLUDE (Agency: MOF) | 1. Log in as an officer whose profile agency matches the rule (MOF).<br>2. Browse opportunities. | Officer profile: Agency = MOF (matching). Opportunity rule: active = Yes, INCLUDE Agency = MOF | Opportunity appears in the listing and is accessible | | |
| UAT-RF-003 | Include rule, officer doesn't match — opportunity hidden | Ringfencing on; rule = INCLUDE (Agency: MOF) | 1. Log in as an officer whose profile agency does NOT match the rule (MOM).<br>2. Browse opportunities. | Officer profile: Agency = MOM (non-matching). Opportunity rule: active = Yes, INCLUDE Agency = MOF | Opportunity does not appear anywhere in the listing | | |
| UAT-RF-004 | Exclude rule, officer matches — opportunity hidden | Ringfencing on; rule = EXCLUDE (Agency: MOF) | 1. Log in as an officer whose profile agency matches the exclude rule (MOF).<br>2. Browse opportunities. | Officer profile: Agency = MOF (matches exclude). Opportunity rule: active = Yes, EXCLUDE Agency = MOF | Opportunity does not appear in the listing | | |
| UAT-RF-005 | Exclude rule, officer doesn't match — opportunity visible | Ringfencing on; rule = EXCLUDE (Agency: MOF) | 1. Log in as an officer whose profile agency does NOT match the exclude rule (MOM).<br>2. Browse opportunities. | Officer profile: Agency = MOM (doesn't match exclude). Opportunity rule: active = Yes, EXCLUDE Agency = MOF | Opportunity appears in the listing and is accessible | | |
| UAT-RF-006 | Ineligible officer hits a ringfenced opportunity via a shared/direct URL | Ringfencing on; rule = INCLUDE (Agency: MOF); officer's profile doesn't match | 1. Log in as an officer whose profile agency does NOT match the rule.<br>2. Navigate directly to the ringfenced opportunity's URL (not via the listing). | Officer profile: Agency = MOM. Opportunity rule: INCLUDE Agency = MOF | Blocked/empty state shown — sleeping-cat graphic, "This opportunity isn't available..." message, and an "Explore opportunities" button | | |
| UAT-RF-007 | Case sensitivity — profile agency in different case than the rule still matches | Ringfencing on; rule = INCLUDE (Agency: MOF) | 1. Log in as an officer whose profile agency is set to "mof" (lowercase) against a rule of "MOF".<br>2. Browse opportunities. | Officer profile: Agency = "mof" (lowercase). Opportunity rule: INCLUDE Agency = "MOF" | System handles casing gracefully — log observed behavior (visible or hidden) | | |
| UAT-RF-008 | Leading/trailing whitespace in profile agency doesn't silently break matching | Ringfencing on; rule = INCLUDE (Agency: MOF) | 1. Log in as an officer whose profile agency has leading or trailing whitespace (e.g. " MOF" or "MOF ").<br>2. Browse opportunities. | Officer profile: Agency = " MOF" or "MOF " (with whitespace). Opportunity rule: INCLUDE Agency = "MOF" | System trims whitespace before comparing — log observed behavior | | |
| UAT-RF-009 | Officer profile missing the required field entirely — system fails closed, not open | Ringfencing on; rule = INCLUDE (Job Family: Finance) | 1. Log in as an officer whose profile has a blank/null Job Family.<br>2. Browse opportunities. | Officer profile: Job Family = blank/null. Opportunity rule: INCLUDE Job Family = "Finance" | Opportunity does not appear — the system must deny access when required comparison data is missing | | |
| UAT-RF-010 | Partial text match does not count as a match | Ringfencing on; rule = INCLUDE (Job Family: Finance) | 1. Log in as an officer whose profile Job Family is "Financial Services" (contains but doesn't equal "Finance").<br>2. Browse opportunities. | Officer profile: Job Family = "Financial Services". Opportunity rule: INCLUDE Job Family = "Finance" | Opportunity does not appear — the system must require an exact match, not a "contains" match | | |
| UAT-RF-011 | Eligible officer sees a ringfenced opportunity's detail page exactly like any other | Officer meets the inclusion criteria (eligible) | 1. Log in as an eligible officer.<br>2. Navigate to the detail page of a ringfenced opportunity. | Officer profile matching an active INCLUDE/EXCLUDE rule such that they're eligible | Page renders normally, "Apply" CTA visible and actionable, no extra eligibility notice shown | | |
| UAT-RF-012 | Ineligible officer hits a ringfenced opportunity's detail page via a direct/shared link | Officer does not meet the inclusion criteria (ineligible) | 1. Log in as an ineligible officer.<br>2. Access the ringfenced opportunity via a direct shared URL or EDM link. | Officer profile not matching the opportunity's eligibility rule | Page loads but details/Apply CTA are restricted; clear message shown: "This opportunity is not available to you."; link back to the full listing is visible | | |
| UAT-RF-013 | Unauthenticated officer clicking a ringfenced deep link lands back on that exact page after login | Officer is not logged in | 1. Click a direct URL to a ringfenced opportunity while logged out.<br>2. Complete the login process. | Valid ringfenced opportunity URL | Officer is redirected to login immediately, then returned to the exact original opportunity detail page after authenticating | | |
| UAT-RF-014 | Marketing/tracking parameters in a ringfenced deep link survive the login redirect | Officer is not logged in; link contains tracking parameters | 1. Click a ringfenced opportunity deep link containing tracking parameters (e.g. `?utm_source=EDM`) while logged out.<br>2. Complete login. | Deep link with `?utm_source=EDM` or similar query parameters | Officer is returned to the exact original URL with all query parameters preserved | | |
| UAT-RF-015 | Switching to an eligible account mid-session updates access without needing a fresh link | Officer starts the session ineligible | 1. As an ineligible officer, view the restricted opportunity page.<br>2. In a separate browser tab, log out and log back in as a different, eligible officer.<br>3. Refresh the original opportunity detail page tab. | Two distinct test accounts: one ineligible, one eligible, for the same opportunity's rule | Page re-evaluates the new session and renders normally with the "Apply" CTA visible | | |
| UAT-RF-016 | "Back to listing" link from a restricted page routes correctly and doesn't create a redirect loop | Ineligible officer lands directly on a restricted detail page via an external link | 1. As an ineligible officer, land on the restricted detail page via an external EDM link.<br>2. Click the "link back to the full listing." | Ineligible officer profile, external EDM link to a restricted opportunity | Officer is routed to the default, unfiltered opportunities listing; browser back-button history remains intact, no redirect loop | | |
| UAT-RF-017 | POCDEX outage or timeout during a ringfencing check does not hang the page or show a false error | Authenticated officer loading a ringfenced opportunity detail page | 1. Load a ringfenced opportunity detail page while POCDEX is returning a 500 error or timing out. | Simulated/known POCDEX outage window | Page does not hang indefinitely; degrades silently and grants standard access rather than showing an eligibility error | | |

---

## Feature: Apply — Careers@Gov (C@G)

*AC: OTEP-89*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-APPLY-001 | C@G opportunity detail page shows correct sourced information | C@G-sourced opportunity exists | 1. Click into a C@G-sourced opportunity. | C@G opportunity with complete payload | Title, agency, description, duration, and available structured fields shown — same layout as OTG detail page | | |
| UAT-APPLY-002 | Responsibilities/pre-req fields are intentionally excluded from the C@G detail page | C@G payload includes responsibility/pre-req fields | 1. View the C@G detail page.<br>2. Confirm responsibilities/pre-reqs are not shown inline. | C@G payload with responsibilities/pre-req data present | That data is NOT shown in CareerCompass, even though it exists in the payload — officer is directed to Careers@Gov for it | | |
| UAT-APPLY-003 | "Apply via Careers@Gov" deep-links directly to the correct posting | Valid C@G opportunity | 1. Click "Apply via Careers@Gov." | — | New tab opens, deep-links directly to that specific posting on the real Careers@Gov site — not the homepage | | |
| UAT-APPLY-004 | C@G posting no longer available post-click is handled entirely on C@G's side | C@G posting has been taken down since the officer clicked through | 1. Click through to a C@G posting that's since been removed. | — | No CareerCompass-side error state shown; handled by Careers@Gov | | |
| UAT-APPLY-005 | C@G detail page shows only one apply path | C@G opportunity | 1. View the C@G detail page. | — | Only "Apply via Careers@Gov" CTA shown — no FormSG or OTG-native apply option | | |

---

## Feature: Apply — FormSG / CareerCompass-Native

*AC: OTEP-319*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-APPLY-006 | Apply button opens the correct FormSG form for the opportunity | Internal Job, STIP, or Gig with valid formsg_url | 1. Click "Apply" on the detail page. | Opportunity with valid formsg_url | Opens that opportunity's FormSG form in a new tab | | |
| UAT-APPLY-007 | Each opportunity's Apply button opens its own correct form, never a mismatched one | Two distinct opportunities, each with a different formsg_url | 1. Apply on Opportunity A.<br>2. Return and apply on Opportunity B. | Two opportunities, distinct formsg_url values | Each opens its own correct form | | |
| UAT-APPLY-008 | Missing formsg_url shows a clear fallback message, not a broken button | Opportunity with no formsg_url configured | 1. View the detail page for an opportunity with no application link. | Opportunity with empty/missing formsg_url | "Application form unavailable — contact the posting agency" shown in place of the Apply button, no layout shift | | |
| UAT-APPLY-009 | FormSG form itself being down is handled by FormSG, not CareerCompass | formsg_url present, but destination form is closed/unavailable | 1. Click Apply on an opportunity whose FormSG form is closed. | Opportunity with a formsg_url pointing to a closed/unavailable form | Officer sees FormSG's own error page — CareerCompass shows no additional error state | | |

---

## Feature: Login / Authentication

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

---

## Data Prep Required Before Execution

| Data state | Needed for |
|---|---|
| ≥5 open opportunities, varied posting dates | UAT-OPP-001 |
| ≥1 opportunity past closing date | UAT-OPP-003, UAT-OPP-017 |
| 16+ open opportunities (pagination trigger) | UAT-OPP-004 |
| ≤15 open opportunities (pagination absent) | UAT-OPP-005 |
| Zero open opportunities (globally or via filter) | UAT-OPP-006, UAT-OPP-010 |
| Mixed types — STIP, Gig, Jobs, ≥2 each | UAT-OPP-007, 008 |
| >15 results matching one filter type | UAT-OPP-009 |
| Opportunity closing in exactly 5 days | UAT-OPP-018 |
| Opportunity with no closing date (evergreen) | UAT-OPP-019 |
| Invalid/nonexistent opportunity ID | UAT-OPP-016 |
| `PROFILE_OPP_MAX_COMP_MATCH` / `PROFILE_OPP_PARTIAL_COMP_MATCH` / `PROFILE_OPP_NO_COMP_MATCH` / `PROFILE_OPP_NO_COMPETENCIES` accounts + `OPP_MAX_COMP_MATCH` opportunity | UAT-OPP-020, 021, 022, 023 |
| `OPP_COMP_NULL` opportunity (no competency records linked) | UAT-OPP-024 |
| Reserved "eligible officer" test account — profile matches at least one active ringfencing rule | UAT-RF-002, 005, 011, 015 |
| Reserved "ineligible officer" test account — profile does not match an active rule | UAT-RF-001, 003, 004, 006, 012, 013, 014, 016 |
| Reserved "incomplete profile" test account — required field (e.g. Job Family) blank/null | UAT-RF-009 |
| Opportunity with an active ringfencing rule (INCLUDE and EXCLUDE variants) | UAT-RF-001 through UAT-RF-010 |
| Officer profile with agency value in mismatched case (e.g. "mof" vs. "MOF") | UAT-RF-007 |
| Officer profile with leading/trailing whitespace in the matched field | UAT-RF-008 |
| Officer profile with a near-match, non-exact value (e.g. "Financial Services" vs. "Finance") | UAT-RF-010 |
| Ringfenced opportunity deep link with tracking query parameters | UAT-RF-014 |
| Second eligible-officer test account, distinct from the ineligible one used in the same session | UAT-RF-015 |
| Simulated POCDEX outage/timeout window | UAT-RF-017 |
| C@G opportunity, complete payload | UAT-APPLY-001 |
| C@G opportunity with responsibilities/pre-reqs present in payload | UAT-APPLY-002 |
| C@G opportunity removed from live site post-click | UAT-APPLY-004 |
| Two opportunities, distinct valid formsg_url values | UAT-APPLY-006, 007 |
| Opportunity with missing formsg_url | UAT-APPLY-008 |
| Opportunity with formsg_url pointing to a closed FormSG form | UAT-APPLY-009 |
