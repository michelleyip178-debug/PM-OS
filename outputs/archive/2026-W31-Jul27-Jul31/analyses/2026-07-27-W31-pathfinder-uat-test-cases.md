# Pathfinder — UAT Test Cases

**Format:** Table format — Test Case ID, AC Reference, Scenario, Pre-conditions, Test Steps, Test Data, Expected Result, Actual Result, Pass/Fail, Tested By/Date, Comments — per the [UAT Operating Model](../../context-library/meetings/2026-07-17-W29-uat-operating-model.md).

**Covers:** Login + Opportunities Explore, full current scope (Sprints 1–6+), regrouped from [Pathfinder UAT Scenarios (Journey-Based)](2026-07-27-W31-pathfinder-uat-journeys.md)

**Status:** 🟡 Mixed — see per-section status below. Cases marked 🔴 need their source ticket deployed to UAT before they're runnable.

**⚠️ Coverage gaps added, 2026-07-27:** all 54 gap cases (NEW-01..54) from [Pow Hwee TAN's Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081) are now pulled into this doc, with original IDs preserved (the source page marks these as frozen, never reused). Highest-priority gaps: category filter (OTEP-437, NEW-04..17) has zero QA cases despite sitting in QA status; ringfencing (NEW-28..33) has ~24 written cases with nothing executed; accessibility, performance, and security have near-zero coverage. Items marked 🔧 need pipeline/engineering access or agreed thresholds, not BO execution — see each section for detail.

**Personas:** Priya (standard officer) by default — no confirmed match in the POCDEX persona list; closest substitute is **John Tan (P01)**, happy-path/complete-profile/baseline flow. Confirm with whoever owns the "Priya" name whether it's meant to map to a specific reserved UAT account. Ringfencing cases (UAT-OPP-035 to 037) require three additional accounts: eligible (**John Tan, P01**), ineligible (**Wei Lin Goh, P02**), incomplete-profile (**Farah Kumar, P09**, backup Ravi Kumar P08). See Personas Required table below for full detail and source.

**⚠️ Scope change, 2026-07-27:** confirmed there will be no SJRs. This supersedes the prior "Not yet ready" list, which had flagged SJR-related items as pending build — they're now out of scope entirely, not pending. See "Out of scope" section below.

**Note on Actual Result / Pass-Fail / Tested By columns:** blank until execution — omitted from the tables below to keep them readable; add back when loading into Jira or a run sheet.

**Note on Test Steps formatting:** multi-step cells use `<br>` for line breaks within the cell — renders correctly in GitHub, most Confluence imports, and Jira table macros. If your renderer doesn't support `<br>` in table cells, steps will show as one unbroken line separated by the numbers.

---

## Browsing Opportunities (AC: OTEP-85, OTEP-88, OTEP-128, OTEP-267, OTEP-268, OTEP-283, OTEP-285, OTEP-613)

**Status:** 🟡 OTEP-88 and OTEP-283 still in progress as of this doc — confirm deployed before running UAT-OPP-020/022

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-OPP-001 | OTEP-85 | Officer sees a correctly sorted grid of opportunity cards on first visit | Logged in; open opportunities exist | 1. Log in.<br>2. Land on opportunities listing page. | Listing with ≥5 open opportunities, varied posting dates | Cards shown in 3-column grid, up to 15/page, sorted newest-posted-first | — |
| UAT-OPP-002 | OTEP-85 | Each card displays correct basic info | Listing loaded | 1. View any card. | — | Title, Agency, Posting Date (absolute format, e.g. "12 May 2026"), Type all visible | — |
| UAT-OPP-003 | OTEP-85 | Closed opportunities are excluded from the listing entirely | Listing includes at least one opportunity past its closing date | 1. Load the listing.<br>2. Confirm the closed opportunity is absent. | One opportunity with closing_date in the past | Closed opportunity does not appear in the grid | — |
| UAT-OPP-004 | OTEP-267 | Pagination controls appear when there are more than 15 opportunities, and show current/total page | Listing has >15 open opportunities | 1. Load the listing.<br>2. Observe pagination controls.<br>3. Go to page 2. | 16+ open opportunities, mix of OTG and C@G | "Next"/"Previous" controls appear; page indicator shows "Page X of Y"; page 2 loads a different set of cards | — |
| UAT-OPP-005 | OTEP-267 | Pagination controls are fully hidden when everything fits on one page | Listing has ≤15 open opportunities | 1. Load the listing. | ≤15 open opportunities | Pagination controls entirely absent, not just disabled | — |
| UAT-OPP-006 | OTEP-268 | Zero-opportunity state shows a clear message, not a blank page | No open opportunities exist | 1. Load the listing with zero available opportunities. | Empty opportunity set | "No opportunities available right now" message with supporting text/illustration; no pagination controls shown | — |
| UAT-OPP-020 🔴 | OTEP-88 | Careers@Gov cards carry a visible source badge, with no other source labelling anywhere | Listing includes at least one C@G-sourced card | 1. Load the listing.<br>2. Look at a C@G card without hovering.<br>3. Confirm no other card shows any source label. | Listing with ≥1 C@G card and ≥1 OTG card | C@G card shows a "Careers@Gov" badge visible without hover interaction; OTG cards show no source label at all | ⚠️ Confirm OTEP-88 deployed to UAT before running |
| UAT-OPP-021 | OTEP-613 | Opportunity with no agency logo shows the default logo, not a broken image | Listing includes one opportunity with no agency logo configured | 1. Load the listing.<br>2. Find the opportunity with no agency logo. | One opportunity with missing agency logo | Default logo shown in place of the missing logo — no broken image icon, no layout shift | — |
| UAT-OPP-022 🔴 | OTEP-283 | Detail page shows the Ministry icon next to the agency name | Valid opportunity with agency data populated | 1. Click into an opportunity from the listing.<br>2. Check the agency name area. | Opportunity with populated agency field | Ministry icon appears next to the agency name on the detail page | ⚠️ Confirm OTEP-283 deployed to UAT before running |

### C@G listing, detail, and ingestion gap cases (NEW-18..27) 🔴

**Source:** [Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN. Destination per source: the currently-empty OTEP-88/87 QA page. **Status: dedicated QA page for C@G is empty.** NEW-22..25 need pipeline access or a controllable C@G source fixture — most of these are not BO-executable and belong with QA/engineering, not a business tester.

| ID | Scenario | Expected Result |
|---|---|---|
| NEW-18 | C@G card completeness sweep | Every C@G card in the listing shows the Careers@Gov badge plus title, agency, type, closing date in the OTG layout; sweep the full listing, not one sample |
| NEW-19 | C@G evergreen card (no closing date) | Renders without a closing date and without a "Closing soon" badge; remains visible |
| NEW-20 | C@G card missing agency field | Card renders with default logo and graceful fallback; not dropped from the listing |
| NEW-21 | C@G listing card links to the matching C@G posting | The detail page and its "Apply via Careers@Gov" deep link resolve to the same opportunity as the card (ID mapping integrity, spot-check several) |
| NEW-22 🔧 | Source update propagates | A title or description change on the C@G side is reflected in OTEP after the next sync; the staleness window is documented |
| NEW-23 🔧 | Source withdrawal propagates | An opportunity withdrawn or closed on the C@G side disappears from the OTEP listing after the next sync |
| NEW-24 🔧 | Re-import idempotency | Running the sync repeatedly does not duplicate cards (follow-up to QA-SEARCHOPP-12's duplicate-cards observation) |
| NEW-25 🔧 | Unexpected fields in C@G payload | A record with unknown or extra fields ingests without error and renders its known fields |
| NEW-26 | C@G opportunities filterable as Jobs | C@G roles carry the Job type pill and are returned by the Jobs type filter together with OTG jobs (regression of the earlier cannot-filter bug) |
| NEW-27 🔧 | C@G volume sanity | A sync of several hundred C@G records completes; listing and pagination remain correct |

🔧 = needs pipeline/engineering access or a controllable C@G source fixture — not BO-executable as written.

---

## Filtering (AC: OTEP-86, OTEP-317, OTEP-268, OTEP-437)

**Status:** 🟢 Type filter and Clear all are Done/QA-complete. Job category filter (OTEP-437) — confirm deployed before running UAT-OPP-023/024.

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-OPP-007 | OTEP-86 | Filtering to a single opportunity type narrows the listing correctly, with active filter visibly indicated | Listing has a mix of types | 1. Select "STIP" filter only. | Listing with STIP, Gig, and Jobs types present | Only STIP opportunities shown; the active filter is visibly indicated; result count updates | — |
| UAT-OPP-008 | OTEP-86 | Filtering to multiple types shows the union of those types | Listing has a mix of types | 1. Select "STIP" and "Gig" together. | Listing with STIP, Gig, and Jobs types present | Both STIP and Gig shown, nothing else | — |
| UAT-OPP-009 | OTEP-86 | Active filter persists across pagination | Filter active, >15 filtered results | 1. Apply a filter.<br>2. Page to page 2. | >15 opportunities matching one filter type | Filter remains applied on page 2 | — |
| UAT-OPP-010 | OTEP-86, OTEP-268 | A filter combination matching zero results shows the standard empty state | A filter combination with no matching opportunities | 1. Apply a filter combination with zero matches. | Filter combo guaranteed to match nothing in test data | Same empty-state message as UAT-OPP-006 | — |
| UAT-OPP-011 | OTEP-317 | "Clear all" resets every active filter in one action | One or more filters active | 1. With filters active, click "Clear all." | — | All filters removed, full unfiltered listing shown, result count updates, "Clear all" option itself disappears | — |
| UAT-OPP-012 | OTEP-317 | "Clear all" is not shown when no filters are active | No filters active | 1. Load the listing with no filters applied. | — | "Clear all" option is not shown | — |
| UAT-OPP-023 🔴 | OTEP-437 | Filtering by WOG job category merges C@G and OTG opportunities under one label | A C@G opportunity with a mapped job category (e.g. indus code 0001 → Finance) and an OTG opportunity in the same category | 1. Filter by the seeded WOG category (e.g. Finance). | C@G opportunity with mapped category, OTG opportunity in same category | Both appear together under the same category label, with no source distinction visible | ⚠️ Confirm OTEP-437 deployed to UAT before running |
| UAT-OPP-024 🔴 | OTEP-437 | C@G opportunities with no or unmapped job category still appear in the unfiltered listing, with no error | A C@G opportunity with no job category, and one with an unmapped category | 1. Clear any category filter.<br>2. Browse the full listing. | C@G opportunity with no category, C@G opportunity with unmapped category | Both opportunities are present in the listing, no error state, no missing-category crash | ⚠️ Confirm OTEP-437 deployed to UAT before running |
| UAT-OPP-025 | OTEP-86 | Each opportunity type filter shows an explanatory tooltip | Listing loaded, filter panel visible | 1. Hover over each type filter option (Job, STIP, Gig). | — | Each type shows a tooltip explaining what that type means | — |

### Category filter gap cases (NEW-04..17) 🔴

**Source:** [Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN. Destination per source: new QA page for OTEP-437. **Status: OTEP-437 sits in QA with zero QA cases written — this is the single highest-priority gap in the whole tree, currently blocking the ticket's exit from QA.**

**Test data (per source):** one C@G opportunity per listed indus code and one OTG opportunity per listed job family, per the 22 Jul mapping table (WOG Category as master, `opportunity_category_job_family` table).

| ID | Scenario | Expected Result |
|---|---|---|
| NEW-04 | Arts & Culture mapping | C@G indus 0003 and OTG "Library & Archives" both appear under the Arts & Culture filter, together, no source distinction |
| NEW-05 | Corporate Administration mapping (C@G-only category) | C@G indus 0002 and 0025 appear under Corporate Administration; absence of OTG entries causes no error |
| NEW-06 | Education & Skills Development mapping (two opportunity categories) | C@G indus 0010 and 0034, OTG "Academic Operations" and "Education & Skills Devt" all appear under the single Education & Skills Development label |
| NEW-07 | Emergency Preparedness & Response mapping | C@G indus 0015 and 0031 and the matching OTG job family appear together under the label |
| NEW-08 | Environment & Resources (newly added ref value) | C@G indus 0020 and OTG "Environment & Resources" appear under the label after the new mapping row is added; before the row exists the opportunities still appear unfiltered (no drop) |
| NEW-09 | Finance mapping (no Audit split) | C@G indus 0001 and OTG "Finance and Accounting" appear under Finance; no separate Audit category is shown (BO decision 25 Jun) |
| NEW-10 | Governance, Risk & Controls (OTG-only category) | OTG opportunities appear under the label; zero C@G source causes no error or empty-label anomaly |
| NEW-11 | Remaining mapping rows (parametrised) | Repeat NEW-04 pattern for every remaining populated row of the mapping table (Health onwards); each row is one execution line in the run record |
| NEW-12 | Category combined with type filter | Category and type narrow together (e.g. Finance + STIP shows only Finance STIPs); count updates |
| NEW-13 | Category combined with keyword search | Category and keyword narrow together; clearing one keeps the other |
| NEW-14 | Category filter persists across pagination | Selection stays applied when paging; returning from a detail page restores it |
| NEW-15 | Category with zero current opportunities | Selecting it shows the standard empty state (or the label is hidden, per design decision); no error |
| NEW-16 | Multi-select categories | If multi-select is supported, results are the union and the count is correct; if not, single-select is enforced consistently. Confirm intended behaviour with design first. |
| NEW-17 | Clear all removes category selections | "Clear all" clears category filters together with type filters and restores the full listing |

⚠️ NEW-16 needs a design decision (multi-select vs single-select intent) before it can be written as a concrete pass/fail case — flag before assigning to a BO.

---

## Search (AC: OTEP-405)

**Status:** 🔴 Confirm OTEP-405 deployed to UAT before running any case in this section — previously listed as "not yet ready" as of 2026-07-17, now in scope per the journey doc.

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-OPP-026 🔴 | OTEP-405 | Search matches on title and agency, case-insensitively, on submit only | Listing includes an opportunity with "data" in the title | 1. Type "data" into search and submit (click Search or press Enter).<br>2. Clear and search "DATA". | Opportunity with "data" in the title | Both searches return the same matching opportunity; results do not update while typing, only on submit | ⚠️ Confirm OTEP-405 deployed to UAT before running |
| UAT-OPP-027 🔴 | OTEP-405 | Search and type filter narrow results together, and clearing search preserves the active filter | Search term active, matching results exist | 1. Search for a term with results.<br>2. Add a type filter.<br>3. Clear the search box only, leaving the filter active. | Search term matching multiple types | Search + filter narrow together; after clearing search, the listing returns to filtered-only (filter still applied) | ⚠️ Confirm OTEP-405 deployed to UAT before running |
| UAT-OPP-028 🔴 | OTEP-405 | A nonsense search term shows the standard no-results state | — | 1. Search for a string guaranteed to match nothing. | Nonsense search string | Same empty-state message as UAT-OPP-006 | ⚠️ Confirm OTEP-405 deployed to UAT before running |

### Search interaction gap cases (NEW-01..03) 🔴

**Source:** [Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN. Destination per source: merged OTEP-405 QA page. Precondition for all: the two currently-overlapping OTEP-405 QA pages need to be merged first.

| ID | Scenario | Expected Result |
|---|---|---|
| NEW-01 | Search returning more than 15 results, paged | Results paginate; the keyword stays applied on every page; count reflects the full result set |
| NEW-02 | Search combined with sort toggle | Changing sort (posted date / closing date) re-orders the current search results without dropping the keyword |
| NEW-03 | Non-Latin and unicode input (e.g. Chinese characters, emoji) | No crash or server error; matching results or the standard no-results state |

---

## Sorting (AC: OTEP-406, OTEP-285)

**Status:** 🟢 Ready — confirm no open build items before running

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-OPP-029 | OTEP-406 | Sort by posted date and closing date reorders the listing correctly, default is newest-first | Listing has ≥16 opportunities with varied posted/closing dates | 1. Load listing, confirm default sort.<br>2. Sort by posted date.<br>3. Sort by closing date. | 16+ opportunities, varied posted/closing dates | Default ordering is newest-posted-first. Posted-date sort reorders correctly. Closing-date sort shows nearest deadline first. | — |
| UAT-OPP-030 | OTEP-406, OTEP-285 | Items do not reshuffle or repeat when paging within an active sort | Sort active, >15 results | 1. Apply a sort.<br>2. Page forward, then back. | 16+ opportunities | Page 2 shows a distinct, non-overlapping set from page 1; paging back to page 1 shows the same original set, same order | — |

---

## Opportunity Detail Page (AC: OTEP-128, OTEP-129, OTEP-284, OTEP-390)

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-OPP-013 | OTEP-128 | Detail page displays full opportunity information | Valid opportunity exists | 1. Click into an opportunity from the listing. | Opportunity with all fields populated | Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," Commitment type all shown | — |
| UAT-OPP-014 | OTEP-128 | "Back to opportunities" link works from the detail page, and returns to the correct page | On a detail page reached from page 2 of the listing | 1. Click "Back to opportunities." | — | Returns to the listing, specifically to page 2 (the page it was opened from), not reset to page 1 | — |
| UAT-OPP-015 | OTEP-128 | Detail page loads correctly via direct/bookmarked URL | Valid opportunity ID, officer logged in | 1. Save a detail page URL.<br>2. Access it directly (not via listing click). | Valid opportunity ID | Loads the correct opportunity directly | — |
| UAT-OPP-016 | OTEP-128 | Invalid opportunity ID shows a clean "not found" state | — | 1. Access a detail URL with an invalid/nonexistent opportunity ID. | Malformed or nonexistent opportunity ID | "Opportunity not found" message with a link back to the listing — not a broken page | — |
| UAT-OPP-017 | OTEP-129 | Deep-link to a closed opportunity shows a clear closed-state message | Opportunity past its closing date | 1. Access a deep-link to a now-closed opportunity. | Opportunity with closing_date in the past | "This opportunity is no longer available" message, link back to listing, no apply action shown | — |
| UAT-OPP-018 | OTEP-284 | "Closing soon" badge shows correctly within the 7-day threshold | Opportunity closing within 7 days, strictly in the future | 1. View the opportunity's card.<br>2. View its detail page. | Opportunity closing in 5 days | "Closing soon" badge visible in the same position on both card and detail page | — |
| UAT-OPP-019 | OTEP-284 | "Closing soon" badge does not show for evergreen (no closing date) or later-closing opportunities | One opportunity with nil closing_date, one closing more than 7 days out | 1. View each opportunity's card. | Opportunity with no closing date set; opportunity closing >7 days out | Neither opportunity shows a "Closing soon" badge | — |
| UAT-OPP-031 | OTEP-128, OTEP-390 | Opening a shared detail-page link while logged out prompts login, then lands on the original opportunity | Valid detail-page URL, logged out (or private browser window) | 1. Paste the detail-page URL while logged out.<br>2. Complete login. | Valid opportunity detail URL | Redirected to log in first, then taken straight to that opportunity's detail page — not the listing | — |

---

## STIP / Gig Card Layout (AC: OTEP-571)

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-OPP-033 | OTEP-571 | Competency section appears before time-commitment section on STIP/Gig cards with competencies populated | STIP and Gig cards with competencies populated | 1. Find a STIP card and a Gig card with competencies. | STIP with competencies, Gig with competencies | Competency section appears before the time-commitment section on both card types | — |
| UAT-OPP-034 | OTEP-571 | STIP/Gig card with no competencies renders cleanly, no large blank area | STIP or Gig with no competencies | 1. Find the STIP or Gig card with no competencies. | STIP or Gig with no competencies populated | Card renders cleanly, no large blank space where the competency section would be | — |

---

## Ringfencing (AC: OTEP-390, OTEP-408, OTEP-409)

**Status:** 🔴 Confirm OTEP-390, 408, 409 deployed to UAT before running — previously flagged "design decided, not built" as of 2026-07-17, now in scope per the journey doc.

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-OPP-035 🔴 | OTEP-390, OTEP-408 | Eligible officer sees ringfenced opportunities surfaced ahead of the open set, with normal apply access | One ringfenced STIP/Gig restricted by agency or job family; account matches eligibility | 1. Log in as the eligible account.<br>2. Browse the listing.<br>3. Open the ringfenced opportunity's detail page. | Ringfenced STIP or Gig, eligible test account — **John Tan (P01)**, john_tan@mddi.test.gov.sg (tagged "UAT-RF-002 - Include rule, officer matches"; complete profile, valid job family/function mapping) | Ringfenced opportunities appear ahead of the mixed open set, both ordered latest-first; detail page renders normally with the standard Apply CTA and no eligibility notice | ⚠️ Confirm ringfencing tickets deployed to UAT before running. Confirm John Tan's job family/agency actually matches whatever rule the ringfenced test opportunity uses. |
| UAT-OPP-036 🔴 | OTEP-390, OTEP-408 | Ineligible officer cannot see or access a ringfenced opportunity, even via direct URL | Same ringfenced opportunity as UAT-OPP-035; officer does not match eligibility criteria; has the direct URL | 1. Log in as the ineligible account.<br>2. Browse the listing and search for the ringfenced opportunity.<br>3. Paste the direct URL. | Ringfenced STIP or Gig, ineligible test account, direct URL to that opportunity — **Wei Lin Goh (P02)**, wei_lin_goh@esg.test.gov.sg (tagged "UAT-RF-001 - Opportunities Ringfencing master switch off"; different job family/function from P01 — Industry/Sector Development vs Accounting & Finance) | Opportunity does not appear in the listing or search results at all; direct URL loads "This opportunity is not available to you" with a link back to the full listing and no Apply action | ⚠️ Confirm ringfencing tickets deployed to UAT before running. Confirm Wei Lin Goh's job family/agency genuinely fails whatever rule the ringfenced opportunity uses. |
| UAT-OPP-037 🔴 | OTEP-390, OTEP-409 | Incomplete-profile officer (POCDEX lookup fails) is not blocked — silent fallback, no eligibility rule applied | Same ringfenced opportunity; account's POCDEX lookup fails to resolve agency or job family | 1. Log in as the incomplete-profile account.<br>2. Paste the direct URL to the ringfenced opportunity. | Ringfenced STIP or Gig, incomplete-profile test account, direct URL — **Farah Kumar (P09)**, farah_kumar@stb.test.gov.sg (Job Family/Job Function both NA; flagged "cannot find within pilot agencies" — POCDEX lookup fails to resolve). Backup: Ravi Kumar (P08), same NA job family/function pattern. | Page renders normally, no eligibility rule applied (silent fallback), access is not blocked | ⚠️ Confirm ringfencing tickets deployed. Flag to PM/QA whether silent-fallback for incomplete profiles is deliberate or an open risk — confirm intent before sign-off. |

### Ringfencing gap cases (NEW-28..33) 🔴

**Source:** [Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN. Destination per source: Ring-fencing Opportunities QA page. **Status: ~24 QA cases already written but nothing executed — blocked on the same three test accounts (eligible, ineligible, incomplete-profile) that UAT-OPP-035/036/037 above need.** NEW-28 and NEW-29 additionally need a rule-precedence answer from the squad before they can be written as concrete assertions.

| ID | Scenario | Expected Result |
|---|---|---|
| NEW-28 | Include and exclude rules on the same opportunity | Precedence is defined and enforced consistently (spec answer needed first; then assert it) |
| NEW-29 | Combined agency and job family rule | Officer must satisfy both parameters to see the opportunity; failing either hides it |
| NEW-30 | Runtime job family rule alone | INCLUDE on Job Family (e.g. Finance): profile match sees it, non-match does not (the current matrix exercises agency; this covers job family end to end at runtime) |
| NEW-31 | Master switch toggled mid-session | Toggling active on or off is reflected on the officer's next page load without requiring re-login |
| NEW-32 | Listing-level POCDEX failure fallback | POCDEX unavailable at listing load: full unfiltered listing returned silently, rendering identical to normal (executable form of P2-22/TV-05) |
| NEW-33 | No bypass via search or category filter | An ineligible officer cannot surface a ringfenced opportunity through keyword search, category filter, sort, or pagination edge cases |

⚠️ NEW-28/29 need the rule-precedence decision from the squad first — this is a spec gap, not just a test gap. NEW-33 is the adversarial/bypass check that access-control areas get and display features don't — worth prioritizing given it's the one area where a miss is an incident, not a cosmetic bug.

---

## Applying — Careers@Gov (AC: OTEP-89)

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-APPLY-001 | OTEP-89 | C@G opportunity detail page shows correct sourced information | C@G-sourced opportunity exists | 1. Click into a C@G-sourced opportunity. | C@G opportunity with complete payload | Title, agency, description, duration, and available structured fields shown — same layout as OTG detail page | — |
| UAT-APPLY-002 | OTEP-89 | Responsibilities/pre-req fields are intentionally excluded from the C@G detail page | C@G payload includes responsibility/pre-req fields | 1. View the C@G detail page.<br>2. Confirm responsibilities/pre-reqs are not shown inline. | C@G payload with responsibilities/pre-req data present | That data is NOT shown in CareerCompass, even though it exists in the payload — officer is directed to Careers@Gov for it | — |
| UAT-APPLY-003 | OTEP-89 | "Apply via Careers@Gov" deep-links directly to the correct posting, with an informational note shown | Valid C@G opportunity | 1. Read the page content and CTA.<br>2. Click "Apply via Careers@Gov." | — | Informational note tells the officer the application completes on Careers@Gov. New tab opens, deep-links directly to that specific posting — not the homepage; `click-to-cag` event captured | — |
| UAT-APPLY-004 | OTEP-89 | C@G posting no longer available post-click is handled entirely on C@G's side | C@G posting has been taken down since the officer clicked through | 1. Click through to a C@G posting that's since been removed. | — | No CareerCompass-side error state shown; handled by Careers@Gov | — |
| UAT-APPLY-005 | OTEP-89 | C@G detail page shows only one apply path | C@G opportunity | 1. View the C@G detail page. | — | Only "Apply via Careers@Gov" CTA shown — no FormSG or OTG-native apply option | — |

---

## Applying — FormSG / CareerCompass-Native (AC: OTEP-319)

| ID | AC Ref | Scenario | Pre-conditions | Test Steps | Test Data | Expected Result | Comments |
|---|---|---|---|---|---|---|---|
| UAT-APPLY-006 | OTEP-319 | Apply button opens the correct FormSG form for the opportunity, with an informational note shown | Internal Job, STIP, or Gig with valid formsg_url | 1. Click "Apply" on the detail page. | Opportunity with valid formsg_url | Opens that opportunity's FormSG form in a new tab; informational note tells the officer the application completes on FormSG | — |
| UAT-APPLY-007 | OTEP-319 | Each opportunity's Apply button opens its own correct form, never a mismatched one | Two distinct opportunities, each with a different formsg_url | 1. Apply on Opportunity A.<br>2. Return and apply on Opportunity B. | Two opportunities, distinct formsg_url values | Each opens its own correct form | — |
| UAT-APPLY-008 | OTEP-319, OTEP-131 | Missing formsg_url shows a clear fallback message, not a broken button | Opportunity with no formsg_url configured | 1. View the detail page for an opportunity with no application link. | Opportunity with empty/missing formsg_url | "Application form unavailable — contact the posting agency" shown in place of the Apply button, no layout shift | ⚠️ Confirm representative test data exists — Sprint 5 comments noted the source Excel was missing POC data for many opportunities. Confirm OTEP-131 deployed. |
| UAT-APPLY-009 | OTEP-319 | FormSG form itself being down is handled by FormSG, not CareerCompass | formsg_url present, but destination form is closed/unavailable | 1. Click Apply on an opportunity whose FormSG form is closed. | Opportunity with a formsg_url pointing to a closed/unavailable form | Officer sees FormSG's own error page — CareerCompass shows no additional error state | — |

---

## Login and Session (AC: OTEP-71) — gap cases NEW-34..38 🔴

**Source:** [Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN. Destination per source: new QA page for OTEP-71. **Status: OTEP-71 (WOG AD login) is still Backlog — write these now, execute once the build lands.** Only 2 partial cases exist today (auth routing touched in passing by the Listing QA page).

| ID | Scenario | Expected Result |
|---|---|---|
| NEW-34 | Session expiry mid-browse | Next action redirects to login; after login the officer returns to the page they were on with state preserved |
| NEW-35 | Session expiry then Apply click | Login intervenes, then the correct FormSG form or C@G posting still opens for the original opportunity |
| NEW-36 | Deep link with expired session (non-ringfenced) | Original URL preserved through the login redirect, including query parameters |
| NEW-37 | Different officer logs in on the same browser | Listing and eligibility reflect the new officer immediately; no data from the previous session leaks |
| NEW-38 | Logout in one tab, action in another | The second tab's next action is safely redirected to login; no error page or partial data exposure |

⚠️ Not runnable until OTEP-71 deploys — write and review now so they're ready the moment the build lands, rather than starting from zero at that point.

---

## Accessibility — gap cases NEW-39..48 🔴

**Source:** [Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN. Destination per source: new "Accessibility" section on the Functional Test Checklist, or a dedicated audit page. Baseline: WCAG 2.1 AA, per Digital Service Standards. **Status: zero existing coverage — flagged as a Digital Service Standards obligation that will surface in any pre-launch review.**

| ID | Scenario | Expected Result |
|---|---|---|
| NEW-39 | Keyboard-only end-to-end journey | Listing, filter, card, detail, and apply are all reachable and operable by keyboard alone, with a visible focus indicator throughout |
| NEW-40 | Filter panel focus order | Tab order through filters is logical; the panel opens and closes accessibly; no keyboard trap |
| NEW-41 | Card semantics for screen readers | A card announces title, agency, type, and closing date meaningfully (not as an unlabelled link cluster) |
| NEW-42 | Badges have text alternatives | The Careers@Gov badge and "Closing soon" badge are announced by screen readers and are not conveyed by colour or image alone |
| NEW-43 | Colour contrast | Badges, type pills, and status text meet AA contrast ratios |
| NEW-44 | Image alt text | Agency logos and the default logo carry appropriate alt text; decorative images are hidden from assistive tech |
| NEW-45 | Empty and error states announced | The no-results and empty states are exposed to screen readers when they appear, not silently swapped in |
| NEW-46 | Pagination controls labelled | Next, Previous, and page indicators have accessible names and are keyboard-operable |
| NEW-47 | Search box programmatically labelled | The search input's visible label is programmatically associated; results-updated state is announced |
| NEW-48 | 200 percent zoom and reflow | At 200 percent zoom or 375px width the layout reflows without loss of content or function |

⚠️ This isn't a BO checklist — these need a tester who knows how to drive a screen reader and keyboard-only navigation. Flag as a distinct workstream, not something to fold into standard UAT.

---

## Performance — gap cases NEW-49..51 🔧

**Source:** [Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN. Destination per source: Technical Verification Checklist. Thresholds to be agreed with engineering before first run — none of these are runnable as-is until that happens.

| ID | Scenario | Expected Result |
|---|---|---|
| NEW-49 | Listing load at volume | With 300+ open opportunities, first page renders within the agreed threshold |
| NEW-50 | Search latency on a broad keyword | A high-cardinality search returns within the agreed threshold |
| NEW-51 | Deep pagination stability | Page 10+ loads in comparable time to page 1; no degradation or timeout |

---

## Security — gap cases NEW-52..54 🔧

**Source:** [Test Coverage Targets and Gap Test Cases](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN. Destination per source: Technical Verification Checklist (complements TV-04). Existing coverage is 1 case (XSS) against a target of 4 — these are API-level checks, not BO-executable.

| ID | Scenario | Expected Result |
|---|---|---|
| NEW-52 | Direct API access to a ringfenced opportunity by an ineligible officer | The API itself refuses or omits the record; exclusion is not FE-only (IDOR check) |
| NEW-53 | Injection attempts via search and filter parameters at the API | Malformed or hostile query parameters are rejected or sanitised server-side; no 500s, no data leakage |
| NEW-54 | Opportunity ID enumeration | IDs are non-sequential (UUID) and enumeration attempts return only records the officer is permitted to see |

⚠️ NEW-52 directly complements the ringfencing bypass check (NEW-33) — NEW-33 confirms the UI doesn't surface a ringfenced opportunity, NEW-52 confirms the API doesn't leak it even if the UI is bypassed entirely. Worth running as a pair.

---

## Out of scope for UAT test-case status

**⚠️ SJR — out of scope, not pending build.** Confirmed 2026-07-27: there will be no SJRs. Any prior reference to an SJR-specific apply-suppression case is dropped. No test case needed.

Still genuinely not yet ready (build not started or scope unconfirmed):

- Real WOG AD login (still interim Keycloak stub)
- C@G opportunities appearing automatically in the main listing (if distinct from job-category merge already covered in UAT-OPP-023/024 — confirm scope)
- Full FormSG apply-tracking flow (webhook, notifications) — open item #57, unconfirmed scope
- "What do job types mean" explainer — folded into UAT-OPP-025's tooltip check if that's the same feature; confirm

---

## Personas Required — Test Accounts

**Source:** `UAT_POCDEX_personas_Compass.pdf` persona list, matched 2026-08-06. Most entries in that list are Core/POCDEX personas (profile page, My Dev, competency mapping) with no Pathfinder use case tagged — only the three below have a confirmed or inferred fit for Pathfinder opportunity-browsing and ringfencing scenarios.

| Test Case | Persona needed | Matched Persona | Why |
|---|---|---|---|
| UAT-APPLY-008 | Opportunity record with missing formsg_url | — (data persona, not an officer) | Confirm this data state exists in the reserved UAT dataset |
| UAT-OPP-006 / UAT-OPP-010 / UAT-OPP-028 | Listing/filter/search state with zero results | — (data persona, not an officer) | Data-state requirement — confirm test data can produce genuinely zero matches |
| UAT-OPP-035 | Eligible ringfencing account | **John Tan (P01)** — john_tan@mddi.test.gov.sg | Explicitly tagged "UAT-RF-002 - Include rule, officer matches"; complete profile, clean job family (Accounting & Finance) / function (Financial Policy & Reviews) mapping |
| UAT-OPP-036 | Ineligible ringfencing account | **Wei Lin Goh (P02)** — wei_lin_goh@esg.test.gov.sg | Tagged "UAT-RF-001 - Opportunities Ringfencing master switch off"; job family (Industry/Sector Development) differs from P01's, so should fail an agency/job-family-scoped include rule built around P01 — confirm against the actual rule before relying on this |
| UAT-OPP-037 | Incomplete-profile ringfencing account | **Farah Kumar (P09)** — farah_kumar@stb.test.gov.sg (backup: Ravi Kumar, P08) | Job Family and Job Function both NA, flagged "cannot find within pilot agencies" — matches the POCDEX-lookup-fails condition NEW-32 and UAT-OPP-037 need; confirm this account state is genuinely reproducible in UAT |

⚠️ None of these three were purpose-built for the ringfenced *opportunity* test data — the eligible/ineligible split is inferred from job-family mismatch, not confirmed against whichever agency/job-family rule the actual ringfenced STIP/Gig in UAT uses. Confirm with whoever configured the ringfencing test opportunity before assigning to a BO. Also confirm whether "Priya," the default persona named elsewhere in this doc, is meant to literally be John Tan or a separate reserved account.

---

## Mapping to Journey-Based scenarios

| Journey scenario | Atomic cases |
|---|---|
| UAT-01 | UAT-OPP-001, 002, 003, 004, 014, 020, 021, 022, NEW-18..27 |
| UAT-02 | UAT-OPP-018, 019 |
| UAT-03 | UAT-OPP-007, 008, 009, 025 |
| UAT-04 | UAT-OPP-023, 024, NEW-04..17 |
| UAT-05 | UAT-OPP-026, 027, 028, NEW-01..03 |
| UAT-06 | UAT-OPP-011, 012 |
| UAT-07 | UAT-OPP-029, 030 |
| UAT-08 | UAT-OPP-033, 034 |
| UAT-09 | UAT-APPLY-001, 002, 003, 004, 005 |
| UAT-10 | UAT-APPLY-006, 007 |
| UAT-11 | UAT-APPLY-008 *(SJR half dropped — see note above)* |
| UAT-12 | UAT-OPP-031 |
| UAT-13 | UAT-OPP-015, 016, 017 |
| UAT-14 | UAT-OPP-035, 036, 037, NEW-28..33 |
| *(none — new areas)* | NEW-34..38 (login/session), NEW-39..48 (accessibility), NEW-49..51 (performance), NEW-52..54 (security) |

---

*Generated: 2026-07-27*
*Supersedes: [2026-07-17-W29-pathfinder-uat-test-cases.md](../archive/2026-W29-Jul13-Jul17/analyses/2026-07-17-W29-pathfinder-uat-test-cases.md) (archived — covered Sprints 1-5 only, predates search/sort/job-category-filter/ringfencing scope and the no-SJR decision)*
*Regrouped from: [Pathfinder UAT Scenarios (Journey-Based)](2026-07-27-W31-pathfinder-uat-journeys.md), pulled directly from Confluence (page ID 2481295622) on 2026-07-27*
*All 54 gap cases (NEW-01..54) pulled from: [Test Coverage Targets and Gap Test Cases (Opportunities)](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN, pulled from Confluence (page ID 2485846081) on 2026-07-27.*
*Companion: [CareerCompass UAT Test Cases](../archive/2026-W29-Jul13-Jul17/analyses/2026-07-17-W29-careercompass-uat-test-cases.md) for Core/Intelligence scope*
*Next: Run the "Ready for BO" checklist (Section 4 of the [Pathfinder UAT Plan](2026-07-20-W30-pathfinder-uat-plan.md)) against every 🔴-flagged case once its ticket deploys. Cases marked 🔧 need pipeline/engineering access, agreed performance thresholds, or API-level tooling — route to QA/engineering rather than a BO. Confirm ringfencing account states and incomplete-profile POCDEX-failure scenario are genuinely reproducible before UAT-OPP-037/NEW-28..33 go to a BO. NEW-16 and NEW-28/29 need squad decisions (multi-select intent, rule precedence) before they can be written as concrete pass/fail cases. Accessibility cases (NEW-39..48) need a tester able to drive a screen reader — treat as a distinct workstream, not standard UAT. Update RTM open item 11 to reflect the no-SJR decision. Load into Jira UAT board once reviewed.*
