---
date: 2026-07-24
week: 2026-W30
topic: Consolidated Test Plan — Core (Profile, Competencies, Development, Courses), by feature
status: draft — companion to Pathfinder plan, for BO walkthrough/execution
---

# Consolidated Test Plan — Core

**Scope:** Core squad (Profile, Navigation, Competencies, Report Issue, Development Summary, Courses). Pathfinder's Opportunities scope is the companion doc.

---

## Feature: Profile Details

*AC: OTEP-74*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| MVP-PROF-01 | Profile fields load correctly | Test account with all profile fields filled | 1. Log in.<br>2. Navigate to "User Profile" page. | Account with First Name, Last Name, Employment Title, Agency populated | Page displays First Name, Last Name, Employment Title, and Agency matching test data | | |
| MVP-PROF-02 | Avatar loads correctly | Test account with known first name | 1. Log in.<br>2. Navigate to "User Profile." | Account with a known first name | Avatar icon displays the first letter of the first name | | |
| MVP-PROF-04 | Missing profile data handled gracefully — no Employment Title | Test account with no Employment Title on record | 1. Log in.<br>2. Navigate to "User Profile." | Account with no Employment Title | Page loads without crashing; First/Last name shown, missing role field hidden | | |
| MVP-PROF-05 | Missing profile data handled gracefully — no Agency | Test account with no Agency on record | 1. Log in.<br>2. Navigate to "User Profile." | Account with no Agency | Page loads without crashing; First/Last name shown, missing Agency field hidden | | |
| MVP-PROF-06 | Missing profile data handled gracefully — both Role and Agency missing | Test account with no Employment Title and no Agency | 1. Log in.<br>2. Navigate to "User Profile." | Account with no Employment Title and no Agency | Page loads without crashing; First/Last name shown, both missing fields hidden | | |
| QA-PROF-08 | Profile page blocked for unauthenticated users | Logged-out session; direct profile URL | 1. Copy direct URL for User Profile page.<br>2. Open a logged-out browser window.<br>3. Paste and go to the URL. | — | System blocks access and redirects to the Login screen | | |

---

## Feature: Navigation

*AC: OTEP-106*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| MVP-NAV-01 | Primary navigation links route correctly without full page reload | Authenticated user | 1. Click "Jobs and opportunities."<br>2. Click "Learning and courses."<br>3. Click "Your development."<br>4. Click "Home." | — | Each click routes instantly via SPA routing, no full browser reload | | |
| MVP-NAV-03 | Clicking the currently active page does nothing | Authenticated user currently on "Jobs and opportunities" | 1. Click "Jobs and opportunities" again.<br>2. Observe for refresh/loading. | — | No new network calls triggered, no refresh | | |
| MVP-NAV-05 | Avatar shows correct initial and dropdown dismisses cleanly | Authenticated user with a known first name (e.g. "Sarah") | 1. Verify avatar letter.<br>2. Click avatar to open dropdown.<br>3. Click elsewhere on the page. | Account with a known first name | Avatar shows first letter of first name from POCDEX data; dropdown opens on click, closes on outside click | | |
| MVP-NAV-06 | Logout ends session fully | Authenticated user | 1. Click avatar.<br>2. Click "Log Out."<br>3. Try browser back button. | — | Session ends, redirects to login; back button does not restore session | | |
| QA-NAV-01 | Avatar handles hyphenated/double-barreled first names | Authenticated user | 1. Log in.<br>2. Observe avatar initial. | Account with first name "Mary-Jane" or "Anne Marie" | Only the first letter displays correctly, no broken UI or special characters | | |

---

## Feature: Competencies — Viewing

*AC: OTEP-75*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| MVP-COMP-01 | Competencies page shows correct section structure | Test account with all profile fields filled | 1. Log in.<br>2. Navigate to the home page. | — | "My competencies" section title shown; Core Competencies and Functional Competencies sub-sections under job role; Self-declared competencies section below, unlabeled | | |
| MVP-COMP-02 | Descriptor text shown per section | Test account with all profile fields filled | 1. View each section. | — | Correct descriptor text under "My competencies," Job role section, and Self-declared section, per copy spec | | |
| MVP-COMP-03 | Tooltip and action icons display correctly | Test account with all profile fields filled | 1. View "My competencies" section. | — | Tooltip info icon next to Core/Functional sub-sections; pencil icon top-left of role-based section; "+" icon on self-declared section | | |

---

## Feature: Competencies — Adding (Keyword Search)

*AC: OTEP-112*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-ADDCOMP-02 | Exiting the Add Competency view via back arrow discards changes | User has accessed the Add Competency view | 1. Click the back arrow near the title. | — | Returns to "My Competencies," no changes saved | | |
| UAT-ADDCOMP-03 | Empty search bar shows no suggestions | User is on the Add Competency view, search bar empty | 1. Click into the search bar.<br>2. Leave it empty. | — | No auto-suggest dropdown; placeholder reads "Type at least 3 characters…" | | |
| UAT-ADDCOMP-04 | 1–2 characters do not trigger search | User is on the Add Competency view | 1. Type exactly 1 or 2 characters. | — | Search does not trigger; no dropdown appears | | |

---

## Feature: Competencies — Adding via CV Upload (CIE)

*AC: OTEP-205*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

---

## Feature: Competencies — Managing Visibility (Hide/Show)

*AC: OTEP-126*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-EDITCOMP-02 | First-time edit view shows all competencies checked, sorted alphabetically | Account that has never saved a competency edit | 1. Access the role-based edit view. | — | All checkboxes checked by default; list sorted A–Z | | |
| UAT-EDITCOMP-03 | Hiding a competency saves and is reversible | Account with at least 1 role-based competency | 1. Access edit view.<br>2. Uncheck a competency.<br>3. Click "Save changes."<br>4. Verify hidden on main profile.<br>5. Re-enter edit view. | — | Confirmation toast, competency hidden on profile, still present (unchecked) in edit view — not deleted | | |
| UAT-EDITCOMP-04 | Subsequent edit view groups checked items above unchecked | Account with previously hidden competencies | 1. Return to edit view after a prior hide. | — | Checked competencies grouped at top (A–Z), unchecked pushed to bottom (A–Z) | | |

---

## Feature: Report Issue (No Role-Based Competencies)

*AC: OTEP-290*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| MVP-REP-01 | Empty-competency state shows correct copy and active Report Issue button | Logged-in user with a role assigned, but no competencies mapped to that role | 1. Navigate to Profile Page.<br>2. View competency section. | — | Copy reads "Oops, we cannot seem to find the competencies for your role." Report Issue button visible, blue, clickable | | |
| MVP-REP-03 | Submitting a report gives immediate UI feedback | User on Profile page with active red "Report Issue" button | 1. Click "Report Issue." | — | Toast: "We've received your report and are looking into it." Button changes to grey "Issue Reported"; descriptive copy updates to acknowledge investigation | | |
| MVP-REP-04 | Reported state persists across logout/login | User has previously clicked Report Issue, issue still unresolved | 1. Log out.<br>2. Log back in.<br>3. Navigate to Profile page. | — | Button remains grey, "Issue Reported," descriptive text unchanged | | |

---

## Feature: Development Summary

*AC: OTEP-68*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-DEV-001 | Development summary accurately reflects role and competencies, read-only, correct deep-link to edit | Account with role + role-based + self-declared competencies | 1. Navigate to "Your Development."<br>2. Attempt to edit a competency directly.<br>3. Click "Manage competencies."<br>4. Edit a competency there.<br>5. Return to "Your Development." | — | Role title and both competency sections shown matching profile page exactly; page itself is read-only; "Manage competencies" deep-links directly to the competency section; edits reflect automatically on return | | |

---

## Feature: Courses — Landing Page

*AC: OTEP-602*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-LRN-01 | Routing to the Learning & Courses landing page | Authenticated user with recommendations | 1. Log in.<br>2. Click "Learning and courses" in nav bar.<br>3. Separately, paste the direct URL in a new tab. | — | Both methods route successfully to the landing page | | |
| UAT-LRN-03 | Recommended swimlane displays with a 25-course cap | User with more than 25 recommendations in backend | 1. Navigate to landing page.<br>2. Scroll the swimlane fully right.<br>3. Count total tiles. | — | "Recommended for you" swimlane shown; scrolling works via arrows; total never exceeds 25 | | |
| UAT-LRN-04 | Zero recommendations bypasses the landing page entirely | User account with 0 course recommendations | 1. Log in.<br>2. Click "Learning and Courses" in nav. | — | Landing page is skipped; user lands directly on Search & Discovery | | |
| UAT-LRN-05 | Clicking a course tile opens detail in a new tab | Any valid course tile | 1. Click a course tile. | — | Course Detail page opens in a new browser tab with correct course loaded | | |
| UAT-LRN-07 | Course tile displays mandatory fields, no pricing, matches SFTP source data | Course with known SFTP backend data | 1. Note tile's Course Name, Product Type, Provider.<br>2. Cross-reference against the SFTP LEARN extract. | — | Tile shows Name, Product Type, Provider; no pricing shown; data matches SFTP source exactly | | |
| UAT-LRN-08 | Optional fields (Start Date, Duration) missing don't break layout | Four test courses: both fields, only date, only duration, neither | 1. Locate each of the 4 variants.<br>2. Verify missing fields are omitted cleanly. | — | Missing fields hidden without gaps; tile adapts compactly for every combination | | |

---

## Feature: Courses — Search & Discovery

*AC: OTEP-83*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-DIS-01 | Multiple paths route correctly to Search & Discovery | Authenticated user | 1. Click "Explore more courses."<br>2. Separately, run a search from the landing page.<br>3. Separately, access the direct URL. | — | All three paths route successfully to the page | | |
| UAT-DIS-02 | Default page state — no active queries | Standard active user | 1. Navigate to the page fresh.<br>2. Verify all components present. | — | Search bar, filter panel, results, count, pagination all present; no filters selected; sorted by earliest start date, then alphabetically | | |
| UAT-DIS-03 | Autocomplete triggers at 3 characters, grouped and ranked | Standard active user | 1. Observe placeholder.<br>2. Type 3 characters. | Keyword: "Lea" | Max 8 suggestions, grouped by Domains and Course Names, ranked "starts with" before "contains," sorted alphabetically | | |
| UAT-DIS-07 | Filters update results dynamically and hide invalid combinations | Standard active user | 1. Select "Digital Learning" + a specific Domain.<br>2. Try multiple filter combinations. | Filter panel: Class Type, Domain, Provided By | Results update dynamically; filters with zero matching courses are hidden | | |
| UAT-DIS-08 | "Clear" on filter panel removes filters but keeps search query | Active search + 2 filters applied | 1. Apply a search and 2 filters.<br>2. Click filter panel's "Clear." | — | Filters removed, search query remains intact | | |
| UAT-DIS-09 | Pagination shows 15/page and retains filters across pages | Broad search yielding >30 results | 1. Scroll (verify filter panel scrolls independently).<br>2. Click page 2.<br>3. Check Prev/Next button states. | — | 15 items/page, queries/filters retained; Prev/Next disable correctly on first/last page | | |

---

## Feature: Courses — Detail Page

*AC: OTEP-84*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-DTL-01 | Clicking a course tile opens the detail page in a new tab | Any valid course tile | 1. Navigate to course listings.<br>2. Click a tile. | — | Detail page opens in a new browser tab for the correct course | | |
| UAT-DTL-02 | Direct URL access — authenticated vs. unauthenticated | Direct URL to a specific course | 1. Access URL while authenticated.<br>2. Access same URL while logged out.<br>3. Complete login prompt. | — | Authenticated user routes directly; unauthenticated user is prompted to log in, then redirected exactly to the originally requested course | | |
| UAT-DTL-03 | Primary info card displays all top-section fields correctly | Course with all top-card fields populated via SFTP | 1. Open the course detail page. | — | Product Type pill, Title, Provider, "Learn more" CTA, Start Date, Duration, Domain, Competency pills (no proficiency levels shown), Programme Code all present, matching design | | |
| UAT-DTL-05 | Missing optional fields are omitted without visual gaps | Course with minimal required fields only | 1. Open the course detail page. | — | Unavailable optional fields fully omitted — no empty labels or gaps | | |
| UAT-DTL-07 | "Learn more" CTA routes to the correct LEARN destination | Active course page | 1. Click the "Learn more" CTA. | — | Opens the corresponding LEARN page in a new tab; URL matches the Web_Link field from SFTP | | |
| EDGE-DTL-01 | General retrieval error shows a clean error state | Simulated backend timeout or 500 error | 1. Trigger a backend failure for a specific course.<br>2. Attempt to load it. | — | Appropriate general error state shown, with a back-navigation option, per Figma spec | | |

---

## Data Prep Required Before Execution

| Data state | Needed for |
|---|---|
| Account with First Name, Last Name, Employment Title, Agency all populated | MVP-PROF-01 |
| Account with no Employment Title | MVP-PROF-04 |
| Account with no Agency | MVP-PROF-05 |
| Account with no Employment Title and no Agency | MVP-PROF-06 |
| Account with first name "Mary-Jane" or "Anne Marie" (hyphenated/double-barreled) | QA-NAV-01 |
| Account with all profile fields filled | MVP-COMP-01, 02, 03 |
| Account that has never saved a competency edit | UAT-EDITCOMP-02 |
| Account with at least 1 role-based competency | UAT-EDITCOMP-03 |
| Account with previously hidden competencies | UAT-EDITCOMP-04 |
| Account with a role assigned but no competencies mapped to that role | MVP-REP-01, 03, 04 |
| Account with role + role-based + self-declared competencies | UAT-DEV-001 |
| Account with more than 25 course recommendations | UAT-LRN-03 |
| Account with 0 course recommendations | UAT-LRN-04 |
| Course with known SFTP backend data (Course Name, Product Type, Provider) | UAT-LRN-07 |
| Four courses: both optional fields, only date, only duration, neither | UAT-LRN-08 |
| Broad search yielding >30 results | UAT-DIS-09 |
| Course with all top-card fields populated via SFTP | UAT-DTL-03 |
| Course with minimal required fields only | UAT-DTL-05 |
| Simulated backend timeout or 500 error for a specific course | EDGE-DTL-01 |
