---
date: 2026-07-24
week: 2026-W30
topic: Draft Jira tickets for CC-UAT board (OTEP, board 20498) — Pathfinder + Core
status: draft — NOT yet created in Jira, for review before bulk creation
---

# Draft Jira Tickets — CC-UAT Board

**Board:** [CC-UAT](https://sgtechstack.atlassian.net/jira/software/c/projects/OTEP/boards/20498) (OTEP project, board 20498) — Rama's single cross-squad UAT board, per the UAT Operating Model.

**Template followed:** matched to the existing seed ticket [OTEP-749](https://sgtechstack.atlassian.net/browse/OTEP-749) ("Officer views role & functional competency summary... - Example") — Task issue type, `[UAT]` summary prefix, `uat` label, description structured as **Preconditions / Steps (numbered) / Expected Result**. No separate Pass/Fail field — status is tracked via the board's own columns (Backlog → Ready for UAT → In Execution → Failed/Blocked → Passed).

**Grouping approach:** rather than one ticket per atomic row (which would produce 65+ very thin tickets), related test cases within a feature are bundled into one ticket with multiple numbered steps — matching the density of OTEP-749's example, which itself bundles ~10 checks into one ticket. Where a case has a real, standalone risk profile (e.g. an apply-path failure mode), it gets its own ticket instead of being buried in a bundle.

**Not included below (do not create tickets for these):**
- Pathfinder: Search (user-facing cases not yet written), Ringfencing (personas not reserved), Login (Keycloak stub not representative)
- Core: Competencies via CV Upload/CIE (blocked — DB migration), Analytics instrumentation (not BO-relevant), Development Summary edge cases (data states not confirmed reserved)

These stay out of Jira until their blockers clear — creating tickets for untestable scope just clutters the board and risks a BO picking one up prematurely.

---

## PATHFINDER

### Ticket P1 — Listing & Discovery

**Summary:** `[UAT] Officer browses opportunity listing — sort, pagination, and empty state`

**Labels:** `uat`, `pathfinder`

**Description:**

```
*Preconditions*

* Officer test account, logged in.
* UAT dataset includes: ≥5 open opportunities with varied posting dates; ≥1 opportunity with a closing_date in the past; 16+ open opportunities available for the pagination check (may require a separate filtered view if the base dataset doesn't naturally exceed 15); a state with ≤15 open opportunities; and a state with zero open opportunities (globally or via filter).

*Steps*

# Log in and land on the opportunities listing page.
# Confirm cards are shown in a 3-column grid, sorted newest-posted-first, up to 15 per page.
# Confirm each card shows Title, Agency, Posting Date (absolute format, e.g. "12 May 2026"), and Type.
# Confirm any opportunity past its closing date does not appear in the grid.
# Load a view with 16+ open opportunities; confirm "Next"/"Previous" pagination controls appear with a "Page X of Y" indicator.
# Load a view with ≤15 open opportunities; confirm pagination controls are fully absent, not just disabled.
# Load a view with zero open opportunities; confirm a "No opportunities available right now" message with supporting text/illustration is shown, with no pagination controls.

*Expected Result*
Grid sorting, card field display, closed-opportunity exclusion, pagination show/hide logic, and the zero-result empty state all behave as specified.
```

**Source:** UAT-OPP-001 to 006 (AC: OTEP-85, OTEP-267, OTEP-268)

---

### Ticket P2 — Filtering

**Summary:** `[UAT] Officer filters opportunities by type, including pagination persistence and Clear all`

**Labels:** `uat`, `pathfinder`

**Description:**

```
*Preconditions*

* Officer test account, logged in, on the opportunities listing.
* UAT dataset includes a mix of STIP, Gig, and Jobs opportunity types, with >15 opportunities matching at least one single filter type (for the pagination-persistence check), and a filter combination guaranteed to match zero opportunities.

*Steps*

# Select "STIP" as the only active filter; confirm only STIP opportunities are shown.
# Select "STIP" and "Gig" together; confirm both types show, nothing else.
# With a filter active and >15 matching results, page to page 2; confirm the filter is still applied.
# Apply a filter combination known to match zero opportunities; confirm the same empty-state message used for the zero-opportunity listing case appears.
# With one or more filters active, click "Clear all"; confirm every filter is removed, the full unfiltered listing returns, the result count updates, and the "Clear all" control itself disappears.
# With no filters active, confirm "Clear all" is not shown at all.

*Expected Result*
Single- and multi-type filtering, filter persistence across pagination, the filtered empty state, and Clear all's show/hide and reset behavior all work as specified.
```

**Source:** UAT-OPP-007 to 012 (AC: OTEP-86, OTEP-317)

---

### Ticket P3 — Opportunity Detail Page

**Summary:** `[UAT] Officer views opportunity detail page — display, navigation, and closing-soon badge`

**Labels:** `uat`, `pathfinder`

**Description:**

```
*Preconditions*

* Officer test account, logged in.
* UAT dataset includes: one opportunity with every field populated; one opportunity with a closing_date in the past; one opportunity closing in exactly 5 days; one opportunity with no closing date set (evergreen); and a malformed/nonexistent opportunity ID to test against.

*Steps*

# Click into a fully-populated opportunity from the listing; confirm Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," and Commitment type all display.
# Click "Back to opportunities"; confirm it returns to the listing.
# Save the detail page URL and reopen it directly (not via listing click); confirm the correct opportunity loads.
# Access a detail URL using the malformed/nonexistent opportunity ID; confirm an "Opportunity not found" message appears with a link back to the listing — not a broken page.
# Access a deep-link to the opportunity with a past closing_date; confirm a "This opportunity is no longer available" message appears with a link back to the listing.
# View the card and detail page for the opportunity closing in 5 days; confirm the "Closing soon" badge appears in the same position on both.
# View the card for the evergreen (no closing date) opportunity; confirm no "Closing soon" badge appears.

*Expected Result*
Full field display, back-navigation, direct/bookmarked URL access, invalid-ID handling, closed-opportunity deep-link handling, and the "Closing soon" badge's 7-day threshold and evergreen exclusion all behave as specified.
```

**Source:** UAT-OPP-013 to 019 (AC: OTEP-128, OTEP-129, OTEP-284)

---

### Ticket P4 — Apply via Careers@Gov

**Summary:** `[UAT] Officer applies to a Careers@Gov-sourced opportunity`

**Labels:** `uat`, `pathfinder`

**Description:**

```
*Preconditions*

* Officer test account, logged in.
* A C@G-sourced opportunity with a complete payload, including responsibility/pre-req fields present in the source data (to confirm they're correctly excluded from display, not just absent from the source).

*Steps*

# Click into a C@G-sourced opportunity; confirm Title, Agency, Description, Duration, and available structured fields display in the same layout as an OTG opportunity's detail page.
# Confirm responsibilities/pre-req fields are NOT shown inline, even though the underlying payload contains them.
# Confirm the detail page shows exactly one apply path: "Apply via Careers@Gov" — no FormSG or OTG-native apply CTA alongside it.
# Click "Apply via Careers@Gov"; confirm a new tab opens and deep-links directly to that specific posting on the real Careers@Gov site, not the C@G homepage.
# (If a taken-down posting can be arranged) click through to a C@G posting that has since been removed; confirm no CareerCompass-side error state appears — this should be handled entirely on Careers@Gov's side.

*Expected Result*
Sourced info display, the intentional responsibilities/pre-req exclusion, the single apply-path rule, and the deep-link routing all behave as specified. Post-removal handling is Careers@Gov's responsibility, not CareerCompass's.
```

**Source:** UAT-APPLY-001 to 005 (AC: OTEP-89)

**⚠️ Note before assigning:** QA's own Confluence page for this feature (OTEP-88/87) was found to be an empty stub with no test case table — this ticket's steps are sourced from the Pathfinder UAT doc, not verified QA coverage. Flag to QA before UAT.

---

### Ticket P5 — Apply via FormSG (high priority — flagged coverage gap)

**Summary:** `[UAT] Officer applies via FormSG — correct form routing and missing/broken-link fallbacks`

**Labels:** `uat`, `pathfinder`, `priority-review`

**Description:**

```
*Preconditions*

* Officer test account, logged in.
* Two distinct opportunities (Internal Job, STIP, or Gig type), each with a different valid formsg_url.
* One opportunity with a missing/empty formsg_url. ⚠️ Confirm this data state actually exists in the reserved UAT dataset before running this step — Sprint 5 comments flagged the source Excel was missing POC data for many opportunities; do not assume this state is present.
* One opportunity with a formsg_url pointing to a closed/unavailable FormSG form.

*Steps*

# Click "Apply" on the first opportunity; confirm its correct FormSG form opens in a new tab.
# Return and click "Apply" on the second opportunity; confirm its own correct form opens — not the first opportunity's form.
# View the detail page for the opportunity with a missing formsg_url; confirm "Application form unavailable — contact the posting agency" is shown in place of the Apply button, with no layout shift.
# Click Apply on the opportunity whose FormSG form is closed; confirm the officer sees FormSG's own error page, with no additional CareerCompass-side error state.

*Expected Result*
Correct per-opportunity form routing (no cross-wiring), the missing-URL fallback message, and FormSG-side error handling all behave as specified.
```

**Source:** UAT-APPLY-006 to 009 (AC: OTEP-319)

**⚠️ Flag before creating:** this is the single largest coverage gap in the Pathfinder plan — OTEP-319 is Done, P0, and officer-facing with zero visible QA test coverage anywhere in the Pathfinder Confluence space. Confirm with QA whether coverage exists elsewhere before treating this ticket's "Ready for UAT" status as trustworthy.

---

## CORE

### Ticket C1 — Profile Details Display

**Summary:** `[UAT] Officer views profile page — field display and missing-data handling`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* Test Account A: all profile fields filled (First Name, Last Name, Employment Title, Agency).
* Test Account B: no Employment Title on record.
* Test Account C: no Agency on record.
* Test Account D: no Employment Title and no Agency on record.

*Steps*

# Log in as Test Account A; navigate to the User Profile page; confirm First Name, Last Name, Employment Title, and Agency display correctly, and the avatar shows the first letter of the first name.
# Log in as Test Account B; confirm the page loads without crashing, First/Last name show, and the missing role field is hidden.
# Log in as Test Account C; confirm the page loads without crashing, First/Last name show, and the missing Agency field is hidden.
# Log in as Test Account D; confirm the page loads without crashing, First/Last name show, and both missing fields are hidden.
# While logged out, copy the direct Profile page URL, open it in a logged-out browser window, and confirm the system blocks access and redirects to the Login screen.

*Expected Result*
Profile fields and avatar display correctly when complete; missing Employment Title and/or Agency are hidden gracefully without breaking the page; unauthenticated access is blocked and redirected.
```

**Source:** MVP-PROF-01, 02, 04, 05, 06, QA-PROF-08 (AC: OTEP-74). QA status: Done in Dev, 8/8 passed.

**Note:** MVP-PROF-03 (loading spinner) and MVP-PROF-07 (backend-down error state) are excluded — QA flagged both as not matching current build behavior (spinner not implemented; error state shows the whole page going down instead of a scoped message). Do not include in this ticket until fixed.

---

### Ticket C2 — Navigation

**Summary:** `[UAT] Officer navigates the main site sections and uses the avatar menu`

**Labels:** `uat`, `core`, `known-issues`

**Description:**

```
*Preconditions*

* Officer test account, logged in, with a known first name (e.g. one that starts with a distinct letter, and separately a hyphenated/double-barreled name such as "Mary-Jane" if a second account is available).

*Steps*

# Click through "Jobs and opportunities," "Learning and courses," "Your development," and "Home" in the nav bar; confirm each routes instantly without a full page reload.
# While on "Jobs and opportunities," click that same nav item again; confirm no refresh and no new network calls.
# Confirm the avatar shows the correct first-letter initial (test with a hyphenated name if possible, e.g. "Mary-Jane" → "M").
# Click the avatar to open the dropdown; click elsewhere on the page; confirm it closes without a dedicated close action.
# Click avatar → "Log Out"; confirm the session ends and redirects to login; try the browser back button and confirm the session does not restore.

*Expected Result*
SPA routing works without reloads, repeat-clicking the active page is a no-op, avatar initials render correctly including edge-case names, the dropdown opens/closes correctly, and logout fully terminates the session.

*Known open issues — do not report these as new findings if encountered:*
* Active nav item highlight color does not yet match design spec (should be "orangish red") — tracked as TBF.
* Clicking the logo to return home does not reliably work when navigating from search mode — tracked as TBF.
* Loading /home via direct URL currently shows an error page, even though the nav bar itself correctly highlights "Home" — tracked as TBF.
* Nav bar collapses to mobile layout at 1200px instead of the standard 768px tablet breakpoint — under review with dev, not yet confirmed as a defect or intentional.
```

**Source:** MVP-NAV-01, 03, 05, 06, QA-NAV-01 (AC: OTEP-106). QA status: Done, 3 of 10 cases TBF.

---

### Ticket C3 — Competencies: Viewing

**Summary:** `[UAT] Officer views competency sections — structure, descriptors, and icons`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* Test account with all profile fields filled, and a role with both Core and Functional competencies assigned.

*Steps*

# Log in and navigate to the home page.
# Confirm the "My competencies" section title displays, with an unlabeled parent section for job role competencies containing "Core Competencies" and "Functional Competencies" sub-sections, and a Self-declared competencies section below (also unlabeled).
# Confirm the correct descriptor text displays under "My competencies," the Job role section, and the Self-declared section, per the copy spec.
# Confirm the tooltip info icon displays next to Core and Functional competencies; the pencil icon displays at the top-left of the role-based section; and the "+" icon displays on the self-declared section.

*Expected Result*
Section structure, descriptor copy, and icon placement all match spec.
```

**Source:** MVP-COMP-01, 02, 03 (AC: OTEP-75). QA status: Done in Dev, 13/15 passed, 3 bugs reported in OTEP-584 — confirm with QA which specific cases those bugs affect before treating this ticket as fully clean.

---

### Ticket C4 — Competencies: Adding via Keyword Search

**Summary:** `[UAT] Officer adds a self-declared competency via keyword search`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* Officer test account, logged in, viewing "My Competencies."

*Steps*

# Click the "+" icon next to Self-declared Competencies; confirm the system navigates to the "Add self declared competencies" view with a keyword search bar.
# Click the back arrow near the title; confirm it returns to "My Competencies" with no changes saved.
# Click into the empty search bar; confirm no auto-suggest dropdown appears, and the placeholder reads "Type at least 3 characters…"
# Type exactly 1 or 2 characters; confirm search does not trigger and no dropdown appears.

*Expected Result*
Entry into and exit from the Add Competency flow works cleanly, and the minimum-character search threshold is enforced correctly.
```

**Source:** UAT-ADDCOMP-02, 03, 04 (AC: OTEP-112). QA status: Done in Dev, 15/20 passed, 5 bugs reported in OTEP-591.

**Note:** UAT-ADDCOMP-01 (accessing the add-competency screen) is excluded — QA flagged it "TBF in OTEP-591" for a descriptor text issue. Add back once confirmed resolved.

---

### Ticket C5 — Competencies: Managing Visibility (Hide/Show)

**Summary:** `[UAT] Officer hides and re-shows role-based competencies`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* Officer test account with at least 3 Core/Functional competencies assigned, and no prior saved competency edits (for the first-time view check).

*Steps*

# Access the role-based edit view for the first time; confirm all competencies are checked by default and sorted alphabetically.
# Uncheck one competency and click "Save changes"; confirm a confirmation toast appears, the competency is hidden on the main profile, and re-entering the edit view shows it still present in the list (unchecked, not deleted).
# Return to the edit view after a prior hide; confirm checked competencies are grouped at the top (alphabetical) and unchecked ones are pushed to the bottom (also alphabetical).

*Expected Result*
Hide/show behavior is correctly reversible, and sorting logic correctly separates checked from unchecked on repeat visits.
```

**Source:** UAT-EDITCOMP-02, 03, 04 (AC: OTEP-126). QA status: Done in Dev, 11/13 passed, 2 bugs reported in OTEP-603.

**Note:** UAT-EDITCOMP-01 (accessing the edit view via pencil icon) is excluded — QA flagged it "TBF in OTEP-603" for minor UI changes. Add back once confirmed resolved.

---

### Ticket C6 — Report Issue (Missing Role-Based Competencies)

**Summary:** `[UAT] Officer reports a missing-competencies issue and sees it persist`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* Officer test account with a role assigned, but no competencies mapped to that role in the system.

*Steps*

# Navigate to the Profile Page; confirm the competency section shows the copy "Oops, we cannot seem to find the competencies for your role." with a blue, clickable "Report Issue" button.
# Click "Report Issue"; confirm a toast appears reading "We've received your report and are looking into it.", the button changes to grey "Issue Reported," and the descriptive copy updates to acknowledge the investigation.
# Log out and log back in; navigate to the Profile page again; confirm the button remains grey "Issue Reported" and the descriptive text is unchanged.

*Expected Result*
Report submission gives immediate, correct UI feedback, and the reported state persists correctly across sessions.
```

**Source:** MVP-REP-01, 03, 04 (AC: OTEP-290). QA status: In Progress in Dev, 10/11 passed, 1 pending.

**Note:** MVP-REP-02 ("no role" variant) is excluded — marked "Pending test" by QA, not yet run internally. MVP-REP-05 (issue resolution clearing the state) requires a real backend fix mid-UAT to test meaningfully — sequence separately, after a real fix lands, not as part of this ticket.

---

### Ticket C7 — Development Summary

**Summary:** `[UAT] Officer views Development summary — read-only sync with profile and deep-link to edit`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* Officer test account with a role, role-based competencies, and self-declared competencies all present.

*Steps*

# Navigate to "Your Development."
# Attempt to edit a competency directly on this page; confirm no edit controls are available (page is read-only).
# Confirm the role title and both competency groupings match the profile page exactly.
# Click "Manage competencies"; confirm it deep-links directly to the competency section on the profile page, not just the top of the page.
# Edit a competency there, then return to "Your Development"; confirm the change is reflected automatically.

*Expected Result*
The Development summary is a correctly-synced, read-only reflection of the profile page, with a working deep link into edit mode.
```

**Source:** UAT-DEV-001 (no dedicated Confluence QA page found — OTEP-68 is a stub; sourced from the CareerCompass/Pathfinder UAT doc instead)

**⚠️ Note:** the data-gap variants of this scenario (officer with zero self-declared competencies; officer with unresolvable role-based competencies; officer with no role at all) are intentionally excluded — those account data states aren't yet confirmed reserved in the UAT environment. Add as follow-up tickets once confirmed, same as the Ringfencing persona gap on the Pathfinder side.

---

### Ticket C8 — Courses: Landing Page

**Summary:** `[UAT] Officer views the Learning & Courses landing page and recommendation swimlane`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* Officer test account with course recommendations (including a variant with 25+ recommendations, to test the cap).
* A separate officer account with zero course recommendations.
* Four test courses covering all combinations of optional fields present/absent (both Start Date and Duration present; only Start Date; only Duration; neither).
* At least one course with known SFTP source data to cross-check against.

*Steps*

# Log in with recommendations present; click "Learning and courses" in the nav bar; separately, open the direct URL in a new tab; confirm both route successfully to the landing page.
# Confirm a "Recommended for you" swimlane displays, browsable via arrows, capped at a maximum of 25 courses even when more are available.
# Log in with the zero-recommendation account; click "Learning and Courses" in the nav; confirm the landing page is bypassed entirely and the officer lands directly on Search & Discovery.
# Click any course tile; confirm the Course Detail page opens in a new browser tab with the correct course loaded.
# Note a tile's Course Name, Product Type, and Provider; cross-reference against the SFTP LEARN extract; confirm exact match and no pricing shown.
# Locate the four optional-field test courses; confirm missing fields are omitted cleanly with no visual gaps, and the tile adapts compactly for every combination.

*Expected Result*
Routing, the swimlane's 25-item cap, the zero-recommendation bypass, tile click-through, and data accuracy/optional-field handling all behave as specified.
```

**Source:** UAT-LRN-01, 03, 04, 05, 07, 08 (AC: OTEP-602). QA status: detailed scenarios present, explicit per-row PASS/FAIL not marked as of this pull — confirm current status with QA before treating as fully execution-ready.

---

### Ticket C9 — Courses: Search & Discovery

**Summary:** `[UAT] Officer searches and filters the course catalogue`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* Officer test account, authenticated.
* A course catalogue with enough variety to support keyword "Lea" returning multiple grouped suggestions, filter combinations across Class Type/Domain/Provided By, and a broad search yielding 30+ results (for pagination).

*Steps*

# Click "Explore more courses"; separately, run a search from the landing page; separately, access the direct URL; confirm all three routes land on Search & Discovery successfully.
# Navigate to the page fresh with no active queries; confirm the search bar, filter panel, results, count, and pagination are all present, no filters are pre-selected, and results sort by earliest start date then alphabetically.
# Type "Lea" (3 characters) into the search bar; confirm up to 8 suggestions appear, grouped by Domains and Course Names, ranked "starts with" before "contains."
# Select "Digital Learning" plus a specific Domain filter; try additional filter combinations; confirm results update dynamically and filters with zero matching courses are hidden.
# With an active search and 2 filters applied, click the filter panel's "Clear"; confirm filters are removed but the search query remains.
# Run a broad search yielding 30+ results; confirm 15 items show per page, filters/queries are retained across pages, the filter panel scrolls independently of results, and Prev/Next buttons disable correctly on the first/last page.

*Expected Result*
Multi-path routing, default page state, autocomplete grouping/ranking, dynamic filtering, Clear behavior, and pagination all behave as specified.
```

**Source:** UAT-DIS-01, 02, 03, 07, 08, 09 (AC: OTEP-83)

---

### Ticket C10 — Courses: Detail Page

**Summary:** `[UAT] Officer views course detail page — layout, data accuracy, and error handling`

**Labels:** `uat`, `core`

**Description:**

```
*Preconditions*

* A course with all top-card fields fully populated via SFTP source data.
* A course with minimal/missing optional fields, to test graceful omission.
* Ability to simulate a backend timeout/500 error for one course lookup.

*Steps*

# Click a course tile from the listings; confirm the detail page opens in a new tab for the correct course.
# Access the direct URL to a course while authenticated; confirm it routes directly. Access the same URL while logged out; confirm a login prompt appears, and after login the officer is redirected exactly to the originally requested course.
# Open the fully-populated course; confirm the Product Type pill, Course Title, Provider, "Learn more" CTA, Start Date, Duration, Domain, Competency pills (no proficiency levels shown), and Programme Code all display per design.
# Open the course with missing optional fields; confirm unavailable fields are fully omitted with no empty labels or visual gaps.
# Click the "Learn more" CTA; confirm it opens the corresponding LEARN page in a new tab, matching the Web_Link field from SFTP.
# Trigger the simulated backend failure for a course lookup; confirm an appropriate general error state displays with a back-navigation option, per Figma spec.

*Expected Result*
Access paths (tile click, direct URL with auth/redirect), full and partial data layout, the Learn More CTA routing, and the general error state all behave as specified.
```

**Source:** UAT-DTL-01, 02, 03, 05, 07, EDGE-DTL-01 (AC: OTEP-84)

---

## Summary

| # | Ticket | Squad | Test cases bundled | QA status going in |
|---|---|---|---|---|
| P1 | Listing & Discovery | Pathfinder | 6 | 17/25 QA cases passed, 3 blocked by CFT import |
| P2 | Filtering | Pathfinder | 6 | No QA technical coverage found |
| P3 | Opportunity Detail Page | Pathfinder | 7 | 13 PASS mentions, "Done in Dev" |
| P4 | Apply — Careers@Gov | Pathfinder | 5 | QA page is an empty stub |
| P5 | Apply — FormSG | Pathfinder | 4 | Zero QA coverage found — biggest gap |
| C1 | Profile Details | Core | 6 | 8/8 passed |
| C2 | Navigation | Core | 5 | 3 of 10 cases TBF |
| C3 | Competencies — Viewing | Core | 3 | 13/15 passed, 3 bugs in OTEP-584 |
| C4 | Competencies — Adding | Core | 3 | 15/20 passed, 5 bugs in OTEP-591 |
| C5 | Competencies — Managing Visibility | Core | 3 | 11/13 passed, 2 bugs in OTEP-603 |
| C6 | Report Issue | Core | 3 | 10/11 passed, 1 pending |
| C7 | Development Summary | Core | 1 | No dedicated QA page (stub) |
| C8 | Courses — Landing Page | Core | 6 | Status not explicitly marked per-row |
| C9 | Courses — Search & Discovery | Core | 6 | Not explicitly marked |
| C10 | Courses — Detail Page | Core | 6 | Not explicitly marked |

**15 tickets total**, covering 70 of the ~137 individual test cases identified across both consolidated plans. The remainder are excluded per the blockers listed at the top (Search, Ringfencing, Login, CIE, Analytics, Development Summary edge cases) — those need their blockers resolved before tickets should be created, not bundled in now.

---

## Before creating these in Jira — confirm with Rama

1. **Component/label scheme:** OTEP-749 has no components set, only the `uat` label. Should Pathfinder/Core tickets also carry `pathfinder`/`core` labels (as drafted above), or does Rama track squad ownership a different way (e.g. a custom field, or a separate board swimlane)?
2. **Status on creation:** should all new tickets land in "Backlog" (matching OTEP-749's current status), or does Rama want them created directly in "Ready for UAT" for the sections that are QA-confirmed clean (e.g. Profile, Report Issue)?
3. **Bundling approval:** confirm the bundling approach above (multi-step tickets per feature, not 1:1 per atomic test case) matches what Rama has in mind — if Rama actually wants granular one-ticket-per-case, this draft needs to be split into ~65+ tickets instead of 15.
4. **The two flagged gap tickets (P4, P5, and C7)** carry explicit warnings in their description about unverified/stub QA coverage — confirm whether Rama wants these created now with the warning attached, or held until QA populates their source pages.

---

*Generated: 2026-07-24. Draft only — nothing has been created in Jira. Source: [Pathfinder Consolidated Test Plan](2026-07-24-W30-consolidated-test-plan.md) and [Core Consolidated Test Plan](2026-07-24-W30-consolidated-test-plan-core.md).*
