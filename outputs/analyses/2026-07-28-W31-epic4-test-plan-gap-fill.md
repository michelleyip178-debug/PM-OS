# Epic 4: Opportunities Unified Hub — Draft Test Cases to Fill Coverage Gaps

Source page: [Epic 4: Opportunities Unified Hub](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934/Epic+4+Opportunities+Unified+Hub)

This drafts new test-case content for three confirmed gaps, pulled and adapted from the Pathfinder Team child pages. Nothing has been written to Confluence yet — review below, then say the word and it goes in.

Scope for this pass (per your call): **Search, Filter by job family, C@G listing-level coverage.** Known-bug backfills and other gaps (ingestion pipeline, session/logout, refresh tokens) are intentionally out of scope here.

---

## 1. Replace the "Search" placeholder section

Current content on the live page reads:

> **Feature: Search** — *AC: OTEP-405* — *Test cases for this feature are not ready yet — check back before this section is scheduled for execution.*

Replace with the content below, adapted from [OTEP-405 (BE/FE) Keyword search](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2365851089) and [OTEP-405 Search opportunities](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2398029661), reframed into the UAT-XXX ID scheme and Test Steps / Test Data / Expected Result / Actual Result / Pass-Fail format the rest of Epic 4 uses. IDs continue from the highest existing UAT-OPP number (024) using a new UAT-SEARCH prefix to avoid collision.

**Feature: Search**
*AC: OTEP-405*

Test account for this section — OPP-B1 (same as Listing & Discovery / Filtering). Browse-only, don't modify.

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-SEARCH-001 | Search box UI and placement | Listing loaded | 1. Go to UAT site, log in as OPP-B1. 2. Land on listing page. | Account: OPP-B1 | Search box visible at top of listing, positioned above the filter section, placeholder reads "Search jobs and opportunities" | | |
| UAT-SEARCH-002 | Case-insensitive, partial match on Title | Opportunity titled "Senior Data Engineer" exists | 1. Type "data" (lowercase) into search box. 2. Click Search / press Enter. | Account: OPP-B1 · opportunity with "Data" in title | "Senior Data Engineer" returned regardless of casing | | |
| UAT-SEARCH-003 | Match on Agency field | Opportunity under agency "GovTech" exists | 1. Search "tech". | Account: OPP-B1 · opportunity with "GovTech" as agency | Opportunity returned, proving Agency field is searched, not just Title | | |
| UAT-SEARCH-004 | Standard "no results" state | — | 1. Search a random string with no matches (e.g. "xyzqwerty"). | Account: OPP-B1 | Listing clears; standard empty-state message/illustration shown | | |
| UAT-SEARCH-005 | Search + filter combine with AND logic | Mixed types and time-commitments in data | 1. Apply a "Full-Time" type filter. 2. Search "Analyst". | Account: OPP-B1 · mix of Full-Time and non-Full-Time Analyst roles | Results show only Full-Time Analyst roles | | |
| UAT-SEARCH-006 | Filter applied after search still combines correctly | Mixed data | 1. Search "Analyst" first. 2. Then apply "Full-Time" filter. | Account: OPP-B1 | Results dynamically update to Full-Time Analyst roles only — order of operations doesn't matter | | |
| UAT-SEARCH-007 | Clearing search restores full list | Search active with limited results | 1. Clear the search box entirely. | Account: OPP-B1 | Listing reverts to full unfiltered list | | |
| UAT-SEARCH-008 | Clearing search respects active filters | Filter + search both active | 1. With "Full-Time" filter and "Analyst" search both active, clear only the search box. | Account: OPP-B1 | Search term removed; "Full-Time" filter remains applied | | |
| UAT-SEARCH-009 | Relevance-first sort ordering | Multiple results for one query | 1. Search "Manager". | Account: OPP-B1 · mix of exact-title and partial/agency matches for "Manager" | Exact Title matches rank above partial/Agency matches | | |
| UAT-SEARCH-010 | Date as tie-breaker within equal relevance | Two equally-relevant results | 1. Search a term matching two opportunities with identical relevance. | Account: OPP-B1 · two exact-match results, different posting dates | More recently posted result appears first | | |
| UAT-SEARCH-011 | Whitespace trimming | — | 1. Paste " Engineer " (leading/trailing spaces) into search box. | Account: OPP-B1 | System trims whitespace, returns same results as "Engineer" | | |
| UAT-SEARCH-012 | Special character / XSS sanitization | — | 1. Enter `<script>alert('test')</script>` or `%` into search box. | Account: OPP-B1 | Input sanitized safely; no script executes; standard zero-results or safe fallback shown | | |
| UAT-SEARCH-013 | Search state persists on back-navigation | Search + filter active, user views a detail page | 1. Search a keyword, apply a filter. 2. Click into an opportunity. 3. Click "Back to opportunities" or use browser back. | Account: OPP-B1 | Search keyword, filters, result list, and scroll position all restored exactly as left | | |
| UAT-SEARCH-014 | Extremely long search strings handled gracefully | — | 1. Paste a 500+ character string into search box. 2. Submit. | Account: OPP-B1 | No crash or unstyled error page; either UI restricts input length or returns standard empty state | | |
| UAT-SEARCH-015 | No snippet shown for description-only matches | Opportunity has matching term only in description, not title/agency | 1. Search a term that only appears in an opportunity's description. | Account: OPP-B1 · e.g. title "Developer", description contains "data" | Card does not show a highlighted excerpt from the description — matching is silent (title/agency-only surfacing, per MVP scope) | | |

> **Note carried over from source pages, worth flagging to eng/QA:** the child pages already show partial execution with failures — search+filter combined returns wrong results (OTEP-633 related), special characters not handled gracefully, and search state not persisting on back-navigation. Recommend linking those as known issues once this section goes live rather than starting Actual Result columns blank.

---

## 2. Add a new "Filter: Job Family" section

No equivalent section exists in Epic 4 today — the Filtering section only covers opportunity type (STIP/Gig/Jobs). Adapted from [OTEP-437: Filter by job family](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2486075464). Suggest inserting this as a new `Feature:` section directly after the existing "Feature: Filtering" section.

**Feature: Filtering — Job Family / Opportunity Category**
*AC: OTEP-437*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-JF-001 | C@G opportunity appears under correct WOG category | C@G opportunity seeded with a known Indus Code (e.g. 0014 Healthcare) | 1. Apply the "Healthcare" job category filter. | C@G opportunity, CategoryId 019f8e5b-0147-7b61-9406-e794e557e59d | Opportunity appears in filtered results | | |
| UAT-JF-002 | C@G and OTG opportunities appear together, no source distinction shown | One C@G + one OTG opportunity mapped to same category (e.g. Finance) | 1. Apply the "Finance" job category filter. | C@G "Accounting, Audit, Finance" + OTG "Finance and Accounting" | Both appear together; no UI label distinguishes C@G from OTG | | |
| UAT-JF-003 | C@G opportunity with no job category is not dropped | C@G opportunity with null/missing job category | 1. Load listing, no filters applied. 2. Search for the seeded opportunity. | C@G opportunity, category = null | Opportunity visible in general listing; no page error | | |
| UAT-JF-004 | C@G opportunity with unrecognised category code is not dropped | C@G opportunity with dummy code (e.g. 9999) | 1. Load listing, no filters applied. 2. Search for the seeded opportunity. | C@G opportunity, category = 9999 (unmapped) | Opportunity visible in general listing; no system error | | |
| UAT-JF-005 | Many-to-one C@G mapping | Three C@G opportunities with different codes (0022, 0027, 0035) all mapping to "Public Communications" | 1. Apply "Public Communications" filter. | 3 C@G opportunities, distinct codes | All three appear under the single filter | | |
| UAT-JF-006 | Mapping works with no OTG counterpart | C@G opportunity, code 0016 Human Resources | 1. Apply "Human Resources" filter. | C@G opportunity only, no OTG equivalent | Opportunity appears correctly — filter doesn't require an OTG counterpart to render | | |
| UAT-JF-007 | Mapping works with no C@G counterpart | OTG opportunity, "Internal Audit" | 1. Apply "Internal Audit" filter. | OTG opportunity only, no C@G equivalent | Opportunity appears correctly | | |
| UAT-JF-008 | Filter dropdown uses new "Opportunity Category" label | — | 1. Open the job category filter dropdown. | — | Dropdown label reads "Opportunity Category," not the legacy "WOG Category" | | |
| UAT-JF-009 | Legacy OTG job-family code consolidation | OTG opportunity using legacy "Research" job family | 1. Apply "Research & Innovation" filter. | OTG opportunity, legacy code "Research" | Legacy-coded opportunity appears under the new consolidated "Research & Innovation" category | | |
| UAT-JF-010 | Legacy "Urban Planning and Design" consolidation | OTG opportunity using legacy "Urban Planning and Design" | 1. Apply "Urban & Physical Planning" filter. | OTG opportunity, legacy code | Opportunity appears under "Urban & Physical Planning" | | |
| UAT-JF-011 | Custom DB mapping table covers job families not in `ref_job_family` | OTG opportunity using "Land Sales Admin" (not in `ref_job_family`) | 1. Apply "Land & Estate Management" filter. | OTG opportunity, unlisted legacy family | Opportunity appears correctly, confirming backend uses the `opportunity_category_job_family` mapping table rather than failing against `ref_job_family` | | |
| UAT-JF-012 | OTG opportunity with no job family is not dropped | OTG opportunity with null job family | 1. Load listing, no filters applied. 2. Search for the seeded opportunity. | OTG opportunity, job family = null | Opportunity visible in general listing | | |

---

## 3. Extend "Listing & Discovery" and "Apply — Careers@Gov" with C@G-specific listing coverage

Epic 4's current Apply–C@G section only covers the detail-page apply flow (UAT-APPLY-001–005). It has no listing-level C@G coverage. Adapted from [OTEP-88 C@G Opportunities in the Listing & OTEP-87 Detail pages](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2453602670). Suggest adding these to the end of the existing "Feature: Listing & Discovery" section, since they're listing-grid behaviors, not apply-flow behaviors.

**Addition to Feature: Listing & Discovery**
*AC: OTEP-88 (add to existing AC list)*

| Test Case ID | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|---|---|---|
| UAT-OPP-025 | C@G and OTG opportunities appear together, interleaved | DB seeded with both active C@G and OTG opportunities | 1. Load the unfiltered listing. | Mixed C@G + OTG opportunities | Both sources interleaved/sorted normally, not segregated into separate sections | | |
| UAT-OPP-026 | "Careers@Gov" badge renders on C@G cards only | At least one C@G opportunity seeded | 1. Locate a C@G card in the listing. | C@G opportunity | "Careers@Gov" badge permanently visible on the card, matching approved visual spec | | |
| UAT-OPP-027 | OTG cards never show the C@G badge | At least one OTG opportunity seeded | 1. Locate an OTG card in the listing. | OTG opportunity | No "Careers@Gov" badge shown | | |
| UAT-OPP-028 | C@G card layout matches OTG card layout | Fully populated C@G opportunity (Title, Agency, Type, Closing Date) | 1. Compare a C@G card's structure to an OTG card's. | C@G opportunity, complete fields | Same field layout and structure as an OTG card | | |
| UAT-OPP-029 | Pagination applies correctly across combined C@G + OTG results | 20+ combined opportunities across both sources | 1. Scroll to bottom, navigate to page 2. | Mixed dataset, 20+ items | Pagination works seamlessly; no duplicates or drops across the combined dataset | | |
| UAT-OPP-030 | Graceful degradation — C@G payload missing Agency field | C@G opportunity with null/missing agency | 1. Locate the specific C@G card. | C@G opportunity, agency = null | Card renders without breaking layout; missing field handled per agreed fallback (blank/placeholder/hidden) | | |
| UAT-OPP-031 | Graceful degradation — C@G payload missing Closing Date | C@G opportunity with null/missing closing date | 1. Locate the specific C@G card. | C@G opportunity, closing date = null | Card renders without breaking layout | | |
| UAT-OPP-032 | Listing survives a C@G pipeline failure or delay | Simulated C@G ingestion timeout/failure | 1. Load the listing during simulated C@G outage. | Simulated C@G pipeline failure | Page loads successfully showing only OTG opportunities, or fails gracefully with a standard error state — never a white screen | | |

---

## What's still not addressed (confirmed out of scope for this pass)

- Known-bug backfill into existing UAT rows (ministry logo fallback, closing-soon/closing-today badge logic, sort-order bug, filter-state-lost-on-back-nav, apply-button-not-disabling, generic 404 messaging)
- OTG data ingestion / scheduler & Observability (OTEP-348) — admin/ops pipeline, arguably belongs in a separate ops-focused test plan rather than officer-facing Epic 4
- Session expiry / Keycloak federated logout (OTEP-392) and OAuth refresh token rotation (OTEP-324) — these are Login/Authentication concerns, live under the WOG AD test plan, not Epic 4
- OTEP-438 Placeholder UI for admin view and OTEP-285 Click-through — source child pages are empty, nothing to pull in yet

---

**Next step:** review the three sections above. Once you're happy, I can push them into the live Confluence page via the API — either as a full section replacement (Search) or new section inserts (Job Family, C@G listing additions).
