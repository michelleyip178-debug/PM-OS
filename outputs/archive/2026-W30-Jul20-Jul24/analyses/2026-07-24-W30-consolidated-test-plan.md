---
date: 2026-07-24
week: 2026-W30
topic: Consolidated Test Plan — Pathfinder (Opportunities), by feature
status: BO-executable — synced from Confluence (Consolidated Test Plan — Pathfinder, v15) 2026-07-24
---

# Consolidated Test Plan — Pathfinder

**What this covers:** the Opportunities feature area — logging in, browsing and searching opportunities, viewing details, restricted opportunities, and applying.

**How to use this page:** each section below is one feature.

For each test case, follow the numbered Test Steps using the account (persona) named in the Test Data column, then check the result against Expected Result.

Record what actually happened in Actual Result and mark Pass or Fail.

Test accounts ("personas") are defined on [Test Personas — Pathfinder + Core](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2487747944) — check there for login details and setup status before you start.

---

## Feature: Listing & Discovery

*AC: OTEP-85, OTEP-267, OTEP-268*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-OPP-001 | Officer sees a correctly sorted grid of opportunity cards on first visit | Logged in; open opportunities exist | 1. Log in.2. Land on opportunities listing page. | Listing with ≥5 open opportunities, varied posting dates | Cards shown in 3-column grid, up to 15/page, sorted newest-posted-first |  |  |
| UAT-OPP-002 | Each card displays correct basic info | Listing loaded | 1. View any card. | — | Title, Agency, Posting Date (absolute format, e.g. "12 May 2026"), Type all visible |  |  |
| UAT-OPP-003 | Closed opportunities are excluded from the listing entirely | Listing includes at least one opportunity past its closing date | 1. Load the listing.2. Confirm the closed opportunity is absent. | One opportunity whose closing date has already passed | Closed opportunity does not appear in the grid |  |  |
| UAT-OPP-004 | Pagination controls appear when there are more than 15 opportunities | Listing has >15 open opportunities | 1. Load the listing.2. Observe pagination controls. | 16+ open opportunities | "Next"/"Previous" controls appear; page indicator shows "Page X of Y" |  |  |
| UAT-OPP-005 | Pagination controls are fully hidden when everything fits on one page | Listing has ≤15 open opportunities | 1. Load the listing. | ≤15 open opportunities | Pagination controls entirely absent, not just disabled |  |  |
| UAT-OPP-006 | Zero-opportunity state shows a clear message, not a blank page | No open opportunities exist | 1. Load the listing with zero available opportunities. | Empty opportunity set | "No opportunities available right now" message with supporting text/illustration; no pagination controls shown |  |  |

---

## Feature: Filtering

*AC: OTEP-86, OTEP-317*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-OPP-007 | Filtering to a single opportunity type narrows the listing correctly | Listing has a mix of types | 1. Select "STIP" filter only. | Listing with STIP, Gig, and Jobs types present | Only STIP opportunities shown |  |  |
| UAT-OPP-008 | Filtering to multiple types shows the union of those types | Listing has a mix of types | 1. Select "STIP" and "Gig" together. | Listing with STIP, Gig, and Jobs types present | Both STIP and Gig shown, nothing else |  |  |
| UAT-OPP-009 | Active filter persists across pagination | Filter active, >15 filtered results | 1. Apply a filter.2. Page to page 2. | >15 opportunities matching one filter type | Filter remains applied on page 2 |  |  |
| UAT-OPP-010 | A filter combination matching zero results shows the standard empty state | A filter combination with no matching opportunities | 1. Apply a filter combination with zero matches. | Filter combo guaranteed to match nothing in test data | Same empty-state message as UAT-OPP-006 |  |  |
| UAT-OPP-011 | "Clear all" resets every active filter in one action | One or more filters active | 1. With filters active, click "Clear all." | — | All filters removed, full unfiltered listing shown, result count updates, "Clear all" option itself disappears |  |  |
| UAT-OPP-012 | "Clear all" is not shown when no filters are active | No filters active | 1. Load the listing with no filters applied. | — | "Clear all" option is not shown |  |  |

---

## Feature: Search

*AC: OTEP-405*

⚠ **Not written yet.** QA/technical test coverage exists for search but hasn't been converted to BO-executable format. Flagged as a gap on the parent overview page — not filled in as part of this pass.

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |

---

## Feature: Opportunity Detail Page

*AC: OTEP-128, OTEP-129, OTEP-284*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail | **POCDEX** |
|---|---|---|---|---|---|---|---|---|
| UAT-OPP-013 | Detail page displays full opportunity information | Valid opportunity exists | 1. Click into an opportunity from the listing. | Opportunity with all fields populated | Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," Commitment type all shown |  |  |  |
| UAT-OPP-014 | "Back to opportunities" link works from the detail page | On a detail page | 1. Click "Back to opportunities." | — | Returns to the listing |  |  |  |
| UAT-OPP-015 | Detail page loads correctly via direct/bookmarked URL | Valid opportunity ID, officer logged in | 1. Save a detail page URL.2. Access it directly (not via listing click). | Valid opportunity ID | Loads the correct opportunity directly |  |  |  |
| UAT-OPP-016 | Invalid opportunity ID shows a clean "not found" state | — | 1. Access a detail URL with an invalid/nonexistent opportunity ID. | Malformed or nonexistent opportunity ID | "Opportunity not found" message with a link back to the listing — not a broken page |  |  |  |
| UAT-OPP-017 | Deep-link to a closed opportunity shows a clear closed-state message | Opportunity past its closing date | 1. Access a deep-link to a now-closed opportunity. | Opportunity whose closing date has already passed | "This opportunity is no longer available" message, link back to listing |  |  |  |
| UAT-OPP-018 | "Closing soon" badge shows correctly within the 7-day threshold | Opportunity closing within 7 days, strictly in the future | 1. View the opportunity's card.2. View its detail page. | Opportunity closing in 5 days | "Closing soon" badge visible in the same position on both card and detail page |  |  |  |
| UAT-OPP-019 | "Closing soon" badge does not show for evergreen (no closing date) opportunities | Opportunity with no closing date set | 1. View the opportunity's card. | Opportunity with no closing date set | No "Closing soon" badge shown |  |  |  |
| UAT-OPP-020 | Officer with a full competency match sees 5/5 on the baseline opportunity | Complete Officer (P1) — full skills match | 1. Log in as `profile.opp.maxmatch@dummy.company.com`.2. Navigate to the OPP_MAX_COMP_MATCH opportunity. | Complete Officer (P1). Opportunity: `OPP_MAX_COMP_MATCH`, 5 required competencies | Opportunity displays "5/5" competency match |  |  | We dont need POCDEX profile but we need Compass mock user with Competencies.  to share the uer accoumnt and competencies |
| UAT-OPP-021 | Officer with a partial competency match sees the correct fraction | Some Competencies Officer (P6) | 1. Log in as `profile.opp.partialmatch@dummy.company.com`.2. Navigate to the OPP_MAX_COMP_MATCH opportunity. | Some Competencies Officer (P6). Same opportunity as UAT-OPP-020 | Opportunity displays "2/5" competency match |  |  | We dont need POCDEX profile but we need Compass mock user with Competencies.  to share the uer accoumnt and competencies |
| UAT-OPP-022 | Officer with competencies but zero overlap sees 0/5, not an error or blank state | Some Competencies Officer (P6), with a specific opportunity they have zero matching skills for | 1. Log in as `profile.opp.nomatch@dummy.company.com`.2. Navigate to the OPP_MAX_COMP_MATCH opportunity. | Same officer as above. Same opportunity as UAT-OPP-020 | Opportunity displays "0/5" competency match — not a blank field or error |  |  | We dont need POCDEX profile but we need Compass mock user with Competencies.  to share the uer accoumnt and competencies |
| UAT-OPP-023 | Officer with no competencies assigned at all sees 0/5 | No Competencies Officer (P5) | 1. Log in as `profile.opp.nocompetencies@dummy.company.com`.2. Navigate to the OPP_MAX_COMP_MATCH opportunity. | No Competencies Officer (P5). Same opportunity as UAT-OPP-020 | Opportunity displays "0/5" |  |  | We dont need POCDEX profile but we need Compass mock user with Competencies.  to share the uer accoumnt and competencies |
| UAT-OPP-024 | Opportunity with zero competency requirements shows a clear "no competencies" state | Opportunity has no competency records linked | 1. Navigate to an opportunity with no listed skills required. | An opportunity with no listed skills required | Displays "No competencies available" — not "0/0" or a blank match indicator |  |  | We dont need POCDEX profile but we need Compass mock user with Competencies.  to share the uer accoumnt and competencies |

---

## Feature: Ringfencing

*AC: OTEP-127, OTEP-390, OTEP-408, OTEP-409*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail | **POCDEX Data Field Requirement** |
|---|---|---|---|---|---|---|---|---|
| UAT-RF-001 | Ringfencing master switch off — opportunity visible to everyone regardless of rule | This restricted opportunity's on/off switch is turned Off. Officer: Ineligible Officer (P4) — wouldn't normally qualify | 1. Log in as an officer whose profile agency does NOT match the rule (e.g. MOM).2. Browse opportunities. | Ineligible Officer (P4). The restriction itself is switched off | Opportunity appears in the listing and is fully accessible — the switch being off bypasses ringfencing entirely |  |  | Officer profile with an agency and job family coderefer to **P02** |
| UAT-RF-002 | Officer qualifies for a restricted opportunity — they can see it | This restricted opportunity's switch is On, and its rule allows officers from a specific agency. Officer: Eligible Officer (P3) — from that agency | 1. Log in as an officer whose profile agency matches the rule (MOF).2. Browse opportunities. | Eligible Officer (P3). Restriction is On and the officer's agency is allowed | Opportunity appears in the listing and is accessible |  |  | Officer profile with an agency and job family code.  will provide refer to Core - **P01 ** |
| UAT-RF-003 | Officer doesn't qualify for a restricted opportunity — it's hidden from them | This restricted opportunity's switch is On, allowing only a specific agency. Officer: Ineligible Officer (P4) — from a different agency | 1. Log in as an officer whose profile agency does NOT match the rule (MOM).2. Browse opportunities. | Ineligible Officer (P4). Restriction is On and the officer's agency is not allowed | Opportunity does not appear anywhere in the listing |  |  |  |
| UAT-RF-004 | Officer is from a blocked group — the opportunity is hidden from them | This restricted opportunity's switch is On, blocking a specific agency. Officer: Eligible Officer (P3)-shaped account, but from the blocked agency | 1. Log in as an officer whose profile agency matches the exclude rule (MOF).2. Browse opportunities. | An officer from the blocked agency. Restriction is On | Opportunity does not appear in the listing |  |  |  |
| UAT-RF-005 | Officer is not from a blocked group — they can see the opportunity | This restricted opportunity's switch is On, blocking a specific agency. Officer: Ineligible Officer (P4)-shaped account, from a different (non-blocked) agency | 1. Log in as an officer whose profile agency does NOT match the exclude rule (MOM).2. Browse opportunities. | An officer not from the blocked agency. Restriction is On | Opportunity appears in the listing and is accessible |  |  |  |
| UAT-RF-006 | Ineligible officer hits a ringfenced opportunity via a shared/direct URL | This restricted opportunity's switch is On. Officer: Ineligible Officer (P4) | 1. Log in as an officer whose profile agency does NOT match the rule.2. Navigate directly to the ringfenced opportunity's URL (not via the listing). | Ineligible Officer (P4) | Blocked/empty state shown — sleeping-cat graphic, "This opportunity isn't available..." message, and an "Explore opportunities" button |  |  |  |
| UAT-RF-007 | A data-entry inconsistency (lowercase vs. uppercase agency name) doesn't accidentally hide or reveal an opportunity | This restricted opportunity's switch is On. Officer's agency is typed in lowercase, the rule is typed in uppercase (a data-entry inconsistency, not an eligibility test) | 1. Log in as an officer whose profile agency is set to "mof" (lowercase) against a rule of "MOF".2. Browse opportunities. | Officer's agency typed as lowercase "mof", rule requires "MOF" | System handles casing gracefully — log observed behavior (visible or hidden) |  |  |  |
| UAT-RF-008 | Extra spaces in the officer's agency field don't accidentally hide or reveal an opportunity | This restricted opportunity's switch is On. Officer's agency has extra spaces before/after it (a data-entry inconsistency, not an eligibility test) | 1. Log in as an officer whose profile agency has leading or trailing whitespace (e.g. " MOF" or "MOF ").2. Browse opportunities. | Officer's agency typed with extra spaces, rule requires "MOF" exactly | System trims whitespace before comparing — log observed behavior |  |  |  |
| UAT-RF-009 | If a required profile field is blank, the officer should NOT see the restricted opportunity by default | This restricted opportunity's switch is On, requiring a specific job category. Officer: Incomplete Profile Officer (P2) — job category field is blank | 1. Log in as an officer whose profile has a blank/null Job Family.2. Browse opportunities. | Incomplete Profile Officer (P2), job category field blank | Opportunity does not appear — the system must deny access when required comparison data is missing |  |  |  |
| UAT-RF-010 | A similar-sounding job category doesn't accidentally count as a match | This restricted opportunity's switch is On, requiring "Finance." Officer's job category is a similar-sounding but different value | 1. Log in as an officer whose profile Job Family is "Financial Services" (contains but doesn't equal "Finance").2. Browse opportunities. | Officer's job category is "Financial Services", rule requires exactly "Finance" | Opportunity does not appear — the system must require an exact match, not a "contains" match |  |  |  |
| UAT-RF-011 | Eligible officer sees a ringfenced opportunity's detail page exactly like any other | Eligible Officer (P3) | 1. Log in as an eligible officer.2. Navigate to the detail page of a ringfenced opportunity. | Eligible Officer (P3) | Page renders normally, "Apply" CTA visible and actionable, no extra eligibility notice shown |  |  |  |
| UAT-RF-012 | Ineligible officer hits a ringfenced opportunity's detail page via a direct/shared link | Ineligible Officer (P4) | 1. Log in as an ineligible officer.2. Access the ringfenced opportunity via a direct shared URL or EDM link. | Ineligible Officer (P4) | Page loads but details/Apply CTA are restricted; clear message shown: "This opportunity is not available to you."; link back to the full listing is visible |  |  |  |
| UAT-RF-013 | Unauthenticated officer clicking a ringfenced deep link lands back on that exact page after login | Officer is not logged in | 1. Click a direct URL to a ringfenced opportunity while logged out.2. Complete the login process. | Valid ringfenced opportunity URL | Officer is redirected to login immediately, then returned to the exact original opportunity detail page after authenticating |  |  |  |
| UAT-RF-014 | Marketing/tracking parameters in a ringfenced deep link survive the login redirect | Officer is not logged in; link contains tracking parameters | 1. Click a ringfenced opportunity deep link containing tracking parameters (e.g. `?utm_source=EDM`) while logged out.2. Complete login. | Deep link with `?utm_source=EDM` or similar query parameters | Officer is returned to the exact original URL with all query parameters preserved |  |  |  |
| UAT-RF-015 | Switching to an eligible account mid-session updates access without needing a fresh link | Officer starts the session ineligible | 1. As an ineligible officer, view the restricted opportunity page.2. In a separate browser tab, log out and log back in as a different, eligible officer.3. Refresh the original opportunity detail page tab. | Ineligible Officer (P4), then switches to Eligible Officer (P3) mid-session | Page re-evaluates the new session and renders normally with the "Apply" CTA visible |  |  |  |
| UAT-RF-016 | "Back to listing" link from a restricted page routes correctly and doesn't create a redirect loop | Ineligible officer lands directly on a restricted detail page via an external link | 1. As an ineligible officer, land on the restricted detail page via an external EDM link.2. Click the "link back to the full listing." | Ineligible Officer (P4), external email link to a restricted opportunity | Officer is routed to the default, unfiltered opportunities listing; browser back-button history remains intact, no redirect loop |  |  |  |
| UAT-RF-017 | POCDEX outage or timeout during a ringfencing check does not hang the page or show a false error | Authenticated officer loading a ringfenced opportunity detail page | 1. Load a ringfenced opportunity detail page while POCDEX is returning a 500 error or timing out. | Simulated/known POCDEX outage window | Page does not hang indefinitely; degrades silently and grants standard access rather than showing an eligibility error |  |  |  |
| UAT-RF-018 | Listing API applies the same POCDEX-fail-open behavior as the detail page | Officer browsing the listing while POCDEX is unavailable | 1. Load the opportunities listing while POCDEX is returning an error/timeout for the officer's agency/job-family lookup. | Simulated/known POCDEX outage window | Listing falls back to the unfiltered set silently — same fail-open behavior as UAT-RF-017, no partial/broken listing shown (OTEP-408 AC) |  |  |  |
| UAT-RF-019 | Eligible ringfenced Internal Jobs are pinned to the top of the listing | Officer eligible for one or more ringfenced Internal Jobs; listing has a mix of ringfenced and open opportunities | 1. Log in as an eligible officer.2. Load the listing. | Eligible Officer (P3), mixed listing with at least one restricted Internal Job they qualify for | Eligible ringfenced Internal Jobs appear pinned above the general open-opportunity set (OTEP-408 AC) |  |  |  |

---

## Feature: Competency Matching (Skills Match Display)

*Covers: the skills-match count shown on cards, and the "What you'll develop" section on the detail page*

ℹ️ **Note:** the officer's skills come from a separate system (owned by the Core team). These test cases check what happens when that system is slow, down, or returns no data — not the system itself.

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-COMP-001 | Gig/STIP listing card shows a competency match count when the profile loads successfully | Officer has a competency profile; opportunity has competency data | 1. Log in.2. View the listing. | Complete Officer (P1) or Some Competencies Officer (P6) — has at least one skill; opportunity has matching skills listed | Card shows "X of Y competencies match your profile" — presence only, no proficiency level compared |  |  |
| UAT-COMP-002 | Card shows no match indicator when officer has no competency profile at all | No Competencies Officer (P5) | 1. Log in as an officer with an empty competency profile.2. View the listing. | No Competencies Officer (P5) | Card renders without a match count — no error shown, card otherwise unchanged |  |  |
| UAT-COMP-003 | Card degrades gracefully when the skills-check system errors or times out | The skills-check system is down or slow to respond | 1. Load the listing while the skills-check system returns an error or times out. | Simulated outage of the skills-check system | Cards render without a match count; no error surfaced to the officer |  |  |
| UAT-COMP-004 | Card shows no match count when the opportunity itself has no competency data | Opportunity has zero linked competencies | 1. View the listing including an opportunity with no competency data. | Gig/STIP with no competency records | No match count shown on that card; other cards with competency data are unaffected |  |  |
| UAT-COMP-005 | Listing renders immediately; match counts populate asynchronously | Competency profile fetch is in progress | 1. Load the listing while the profile fetch is still in flight. | — | Listing renders immediately without waiting on the profile fetch; match counts appear on cards once the fetch completes |  |  |
| UAT-COMP-006 | Internal Job cards never show a competency match count | Listing includes Internal Job opportunities | 1. View the listing. | Listing with ≥1 Internal Job card | No match count shown on Internal Job cards — MVP scope is Gigs/STIPs only |  |  |
| UAT-COMP-007 | Detail page "What you'll develop" section shows matched vs. unmatched competencies, matched first | Officer has a competency profile; opportunity has competency data with partial overlap | 1. Log in.2. View a Gig/STIP detail page. | Some Competencies Officer (P6) | Section lists all opportunity competencies; matched ones are visually distinct and appear first, followed by unmatched |  |  |
| UAT-COMP-008 | Section renders all-unmatched when officer has competencies but none overlap | Officer has skills listed, but none of them match this opportunity | 1. Log in as an officer with non-overlapping competencies.2. View the detail page. | Some Competencies Officer (P6), with a specific opportunity they have zero matching skills for | All competencies shown in the unmatched state — no error or "no match" message |  |  |
| UAT-COMP-009 | Section renders without match states when officer has no competency profile | No Competencies Officer (P5) | 1. Log in as an officer with an empty profile.2. View the detail page. | No Competencies Officer (P5) | Section renders the opportunity's competency list with no match states, no error |  |  |
| UAT-COMP-010 | Section degrades to unmatched-only display when the Core endpoint fails | The skills-check system is down or slow to respond | 1. Load the detail page while the skills-check system errors or times out. | Simulated outage of the skills-check system | Section still renders the opportunity's competency list without match states; rest of the page is unaffected; no error shown |  |  |
| UAT-COMP-011 | Section is hidden entirely when the opportunity has no competency data | Opportunity has zero linked competencies | 1. View the detail page for an opportunity with no competency data. | Opportunity with no competency records | "What you'll develop" section does not render at all — not shown as "Not specified" or an empty container |  |  |
| UAT-COMP-012 | Section loads independently and doesn't block the rest of the page | Competency profile fetch in progress | 1. Load the detail page while the profile fetch is in flight. | — | Rest of the page renders immediately; section shows a loading state until the fetch completes or times out |  |  |
| UAT-COMP-013 | "What you'll develop" section is read-only — no edit action available | Officer views the section with match states rendered | 1. View the section.2. Attempt to interact with any competency item. | — | No edit action available; officer cannot update their profile from the detail page |  |  |

---

## Feature: Apply — Careers@Gov (C@G)

*AC: OTEP-89*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-APPLY-001 | C@G opportunity detail page shows correct sourced information | C@G-sourced opportunity exists | 1. Click into a C@G-sourced opportunity. | C@G opportunity with complete payload | Title, agency, description, duration, and other listed fields shown — same layout as a normal opportunity's detail page |  |  |
| UAT-APPLY-002 | Responsibilities/pre-req fields are intentionally excluded from the C@G detail page | C@G payload includes responsibility/pre-req fields | 1. View the C@G detail page.2. Confirm responsibilities/pre-reqs are not shown inline. | C@G payload with responsibilities/pre-req data present | That data is NOT shown in CareerCompass, even though it exists in the payload — officer is directed to Careers@Gov for it |  |  |
| UAT-APPLY-003 | "Apply via Careers@Gov" deep-links directly to the correct posting | Valid C@G opportunity | 1. Click "Apply via Careers@Gov." | — | New tab opens, deep-links directly to that specific posting on the real Careers@Gov site — not the homepage |  |  |
| UAT-APPLY-004 | C@G posting no longer available post-click is handled entirely on C@G's side | C@G posting has been taken down since the officer clicked through | 1. Click through to a C@G posting that's since been removed. | — | No CareerCompass-side error state shown; handled by Careers@Gov |  |  |
| UAT-APPLY-005 | C@G detail page shows only one apply path | C@G opportunity | 1. View the C@G detail page. | — | Only "Apply via Careers@Gov" button shown — no other apply option |  |  |

---

## Feature: Apply — FormSG / CareerCompass-Native

*AC: OTEP-319*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-APPLY-006 | Apply button opens the correct FormSG form for the opportunity | Internal Job, STIP, or Gig with a working application-form link | 1. Click "Apply" on the detail page. | Opportunity with a working application-form link | Opens that opportunity's FormSG form in a new tab |  |  |
| UAT-APPLY-007 | Each opportunity's Apply button opens its own correct form, never a mismatched one | Two distinct opportunities, each with a different application-form link | 1. Apply on Opportunity A.2. Return and apply on Opportunity B. | Two opportunities, each with a different application-form link | Each opens its own correct form |  |  |
| UAT-APPLY-008 | A missing application-form link shows a clear fallback message, not a broken button | Opportunity with no application-form link set up | 1. View the detail page for an opportunity with no application link. | Opportunity with no application-form link | "Application form unavailable — contact the posting agency" shown in place of the Apply button, no layout shift |  |  |
| UAT-APPLY-009 | FormSG form itself being down is handled by FormSG, not CareerCompass | Application-form link exists, but the destination form is closed or unavailable | 1. Click Apply on an opportunity whose FormSG form is closed. | Opportunity whose application-form link points to a closed or unavailable form | Officer sees FormSG's own error page — CareerCompass shows no additional error state |  |  |

---

## Feature: Login / Authentication

*Covers: logging in with a government account, and what happens if login fails or the officer isn't authorised*

ℹ️ **Note:** government login ("WOG AD") isn't fully connected yet, so these tests may need to run against a temporary stand-in login system for now.

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail | **POCDEX Data Fields** |
|---|---|---|---|---|---|---|---|---|
| UAT-AUTH-001 | Officer from an approved agency logs in with their government account, one click | Officer's agency has been approved for the platform | 1. Click "Log in with WOG AD" on the login page. | Complete Officer (P1), from an approved agency | Lands directly on OTEP home page — no manual credential entry, no separate account-creation step |  |  | Check whether where we are doing the white-listing |
| UAT-AUTH-002 | Officer from an agency that isn't approved sees a clear, specific message | Officer's agency has never been approved for the platform | 1. Log in via WOG AD with an account from a non-onboarded agency. | An officer from an agency that isn't approved for the platform | Message explains the agency isn't onboarded — not a generic login error |  |  |  |
| UAT-AUTH-003 | An agency that was approved, then later removed, shows the same message as one that was never approved | Officer's agency was approved, then later removed | 1. Log in via WOG AD with an account whose agency was onboarded then removed. | An officer whose agency was approved, then later removed | Same "agency not onboarded" message as a never-onboarded agency — no distinction shown |  |  |  |
| UAT-AUTH-004 | Logging in on a second device invalidates the first device's session | Officer already logged in on Device A | 1. While still logged in on Device A, log in via WOG AD on Device B. | Complete Officer (P1), logged in on two devices/browsers | Device B's login succeeds; Device A's session is invalidated — only one active session at a time |  |  |  |
| UAT-AUTH-005 | A disabled or locked government account shows a specific message | Officer's government account is disabled or locked | 1. Attempt WOG AD login with a disabled/locked account. | An officer whose government account is disabled or locked | Specific "account disabled/locked" message shown — not a generic failure |  |  |  |
| UAT-AUTH-006 | A login-system outage shows a graceful error, not a hang or crash | The government login system is down or unreachable | 1. Attempt login while WOG AD is down/unreachable. | Simulated login-system outage | Graceful error message shown; page does not hang or crash |  |  |  |
| UAT-AUTH-007 | Profile data (name, job title, unit) comes from the officer records system, not the login system | Officer logs in successfully | 1. Log in via WOG AD.2. Check displayed profile fields (name, job title, unit). | Complete Officer (P1) | Name/job title/unit match the officer's record — the login step only supplies email and staff ID |  |  |  |
| UAT-AUTH-008 | Wrong government login details show a clear, in-platform error | Officer enters incorrect credentials (wrong password, or account not recognized as a public officer) | 1. Attempt WOG AD login with invalid credentials. | Invalid/unrecognized credentials | Clear error message shown in-platform — not left entirely to the government login system's own error page |  |  |  |
| UAT-AUTH-009 | A successful login for an approved, active officer goes straight to their Profile Page | Login succeeds; agency is approved; officer record is active | 1. Log in via WOG AD. | Complete Officer (P1) | Lands on Profile Page directly — no extra steps or interstitial screens |  |  |  |
| UAT-AUTH-010 | A successful login for an officer whose agency isn't approved routes to the "no access" page | Login succeeds; agency isn't approved for the platform | 1. Log in via WOG AD with an account whose agency isn't in the pilot. | No Platform Access Officer (P16), agency not approved | Routed straight to the unauthorised page (OTEP-111) — not a broken page or dead end |  |  |  |
| UAT-AUTH-011 | A successful login where the officer's record hasn't been set up yet routes to a "still setting up" page (not the "no access" page) | Login succeeds; agency approved; officer's record doesn't exist yet | 1. Log in via WOG AD with a pilot-agency account that has no POCDEX profile. | Profile Setup Delay/Issue Officer (P13), record not yet set up | Dedicated system-error page shown: "Sorry, the system is still setting up your details..." with a "Report issue" CTA — explicitly distinct from the OTEP-111 unauthorised page |  |  |  |
| UAT-AUTH-012 | The "still setting up" page's "Report issue" button is officer-initiated only, no automatic logging | Officer lands on the "still setting up" page | 1. Land on the system-error page.2. Do not click "Report issue." | Profile Setup Delay/Issue Officer (P13) | No automatic error logging occurs — a report is only generated if the officer clicks the CTA |  |  |  |
| UAT-AUTH-013 | A successful login where the officer's record has been deactivated routes to the "no access" page | Login succeeds; agency approved; officer's record exists but is deactivated | 1. Log in via WOG AD with an account whose POCDEX profile is deactivated. | An officer whose record exists but has been deactivated | Routed to the unauthorised page (OTEP-111) |  |  |  |
| UAT-AUTH-014 | An agency removed after officers had prior access shows the "no access" page on next login, not a broken or blank page | Officer's agency had access, then had it removed | 1. Log in via WOG AD with an account whose agency was previously in the pilot but has since been removed. | No Platform Access Officer (P16) | Unauthorised page shown on next login — not a broken or blank page |  |  |  |
| UAT-AUTH-015 | The "no access" page shows the same standard message no matter which specific reason caused it | Officer hits the "no access" page for any reason (agency not approved, or record deactivated) | 1. Trigger the unauthorised page via a not-in-pilot account.2. Separately, trigger it via a deactivated-profile account.3. Compare the messages shown. | No Platform Access Officer (P16) + a deactivated-record officer, side by side | Both show the identical message: "Oops, you do not seem to have access at the moment. Please contact your HR for more information." — no distinguishing detail on which check failed |  |  |  |
| UAT-AUTH-016 | A failed government login never reaches the platform's after-login routing | Government login itself fails (wrong details, disabled account, system outage) | 1. Attempt a WOG AD login that fails at the WOG AD level. | Any government-login-level failure | The government login system's own error is shown; the platform's after-login routing (Profile Page / no access / still setting up) is never reached |  |  |  |
| UAT-AUTH-017 | Trying to access any page directly without logging in is blocked | Officer is not logged in | 1. While logged out, type a direct URL to any OTEP page (not the login page). | Any page on the platform | No session starts; officer is redirected appropriately (e.g. to login) — direct access is not permitted |  |  |  |
| UAT-AUTH-018 | **Not yet defined.** What happens if an officer's access is removed while they're actively using the platform | Officer is logged in and active; their agency's access is removed while they're using it | *Cannot be scripted — AC not yet defined (decision #10, owner Rama)* | — | *TBC — needs an explicit AC before this can be tested: does the session get force-ended, or does access persist until next login?* |  |  |  |

---

## Accounts Needed Before Execution

See [Test Personas — Pathfinder + Core](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2487747944) for full descriptions of each named account.

| Account needed | Used in |
|---|---|
| Eligible Officer (P3) | UAT-RF-002, 005, 011, 015 |
| Ineligible Officer (P4) | UAT-RF-001, 003, 004, 006, 012, 013, 014, 016 |
| Incomplete Profile Officer (P2) | UAT-RF-009 |
| A second Eligible Officer (P3) account, separate from the one used for Ineligible Officer (P4) in the same test | UAT-RF-015 |
| Complete Officer (P1) | UAT-OPP-020, UAT-AUTH-001/004/007/016, UAT-COMP-001/007 |
| No Competencies Officer (P5) | UAT-OPP-023, UAT-COMP-002/009 |
| Some Competencies Officer (P6) — vary the skills overlap per test (partial match, full match, or zero match) | UAT-OPP-021/022, UAT-COMP-001/007/008 |
| An officer from an agency that isn't approved for the platform | UAT-AUTH-002 |
| An officer whose agency was approved, then later removed | UAT-AUTH-003 |
| An officer whose government account is disabled or locked | UAT-AUTH-005 |
| An officer whose agency is approved and record is active | UAT-AUTH-009 |
| No Platform Access Officer (P16) | UAT-AUTH-010, 014, 015 |
| Profile Setup Delay/Issue Officer (P13) | UAT-AUTH-011, 012 |
| An officer whose record exists but has been deactivated | UAT-AUTH-013, 015 |

---

## Other Data Needed Before Execution

Opportunity listings, links, and system states needed to run specific tests — not tied to a particular officer account.

| Data state needed | Used in |
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
| An opportunity with no listed skills required | UAT-OPP-024 |
| An opportunity with an active restriction rule (both "allow only" and "block" variants) | UAT-RF-001 through UAT-RF-010 |
| An officer profile with agency name typed in a different case than the rule (e.g. "mof" vs. "MOF") | UAT-RF-007 |
| An officer profile with extra spaces in the matched field | UAT-RF-008 |
| An officer profile with a similar-but-not-exact value (e.g. "Financial Services" vs. "Finance") | UAT-RF-010 |
| Restricted opportunity link with tracking parameters attached | UAT-RF-014 |
| Simulated outage of the officer-records system | UAT-RF-017, 018 |
| A restricted Internal Job the officer qualifies for, in a mixed listing | UAT-RF-019 |
| A Careers@Gov opportunity with a complete listing | UAT-APPLY-001 |
| A Careers@Gov opportunity with responsibilities/requirements listed | UAT-APPLY-002 |
| A Careers@Gov opportunity that's been removed from the live site after being clicked | UAT-APPLY-004 |
| Two opportunities, each with a different working application-form link | UAT-APPLY-006, 007 |
| An opportunity with no application-form link set up | UAT-APPLY-008 |
| An opportunity whose application-form link points to a closed form | UAT-APPLY-009 |
| Any page on the platform, for testing access without being logged in | UAT-AUTH-017 |
| Simulated login-system outage | UAT-AUTH-006 |
| Wrong government login details | UAT-AUTH-008 |
| An opportunity with no linked skills data | UAT-COMP-004, 011 |
| Simulated outage of the skills-check system | UAT-COMP-003, 010 |
| Listing/detail page load with the skills check artificially delayed | UAT-COMP-005, 012 |
| A listing including at least one Internal Job card | UAT-COMP-006 |
