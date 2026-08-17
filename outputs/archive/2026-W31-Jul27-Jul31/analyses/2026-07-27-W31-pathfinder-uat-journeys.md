---
date: 2026-07-27
week: 2026-W31
topic: Pathfinder UAT Scenarios (Journey-Based)
status: pulled from source, locally amended
source: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481295622/Pathfinder+UAT+Scenarios+Journey-Based
---

# Pathfinder UAT Scenarios (Journey-Based)

> **⚠️ Scope change, 2026-07-27:** confirmed there will be no SJRs. UAT-11 and TD4 were edited to drop SJR coverage — see UAT-11's note for detail. RTM open item 11 (the OTEP-128/OTEP-131 SJR apply-button contradiction) should be closed to reflect this decision. This page and the local copy at PM-OS/outputs/analyses/2026-07-27-W31-pathfinder-uat-journeys.md are synced as of this update.

Journey-based UAT scenarios for the Pathfinder MVP, written for business testers. Each scenario is an end-to-end journey with setup, numbered steps, and an observable expected result that can be marked pass or fail.

**Traceability:** bundle and ticket references link to the [Functional Test Checklist](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) and Jira; the requirement view is the [Requirements Traceability Matrix v2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2484896250).

Items that cannot be verified through the UI (server-side calculations, analytics events, API response contents) are deliberately excluded. They're tracked on the [Technical Verification Checklist](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481950710). Detailed edge-case coverage lives on the [Functional Test Checklist](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175).

---

## Entry criteria

- All test data in the table below is seeded in the UAT environment before the run starts.
- **Build state:** several source tickets are still In Progress or Backlog at time of writing (OTEP-88, OTEP-131, OTEP-283, OTEP-390, OTEP-405, OTEP-408, OTEP-409). Each scenario lists the tickets it needs — do not run a scenario before its tickets are deployed to UAT.
- **Test accounts:** one standard officer account, plus three ringfencing accounts (eligible, ineligible, and an incomplete-profile officer whose POCDEX agency or job family cannot be resolved). **Plus, for competency matching:** named personas per the [Consolidated Test Plan's Test Personas page](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934) — Complete Officer (P1), No Competencies Officer (P5), and Some Competencies Officer (P6, with a variable skills overlap depending on the case).
- ✅ **Resolved, 2026-07-27:** OTEP-336/570 (competency match signal on Gig/STIP cards and detail page), confirmed MVP scope. Previously flagged here as blocked on REQ-X2 (RTM), but the [Consolidated Test Plan — Pathfinder](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934) has 13 fully-specified, ready-to-run test cases for this (UAT-COMP-001..013, plus UAT-OPP-020..024) with no blocker noted — treating that as the current signal that REQ-X2 has cleared. The RTM (unchanged as of this pull) still says blocked; flag this discrepancy if you see the RTM get updated with a different answer.

---

## Test data requirements

| Ref | Data needed | Used by |
|---|---|---|
| TD1 | At least 16 open opportunities, mix of OTG and C@G, so pagination appears | UAT-01, UAT-07 |
| TD2 | One opportunity with no agency logo | UAT-01 |
| TD3 | One opportunity closing within 7 days, one closing more than 7 days away, one evergreen (no closing date) | UAT-02 |
| TD4 | At least one of each type: Job (OTG and C@G), STIP, Gig, each with a valid `formsg_url` pointing to a real, working FormSG form | UAT-03, UAT-08, UAT-10, UAT-11 |
| TD5 | C@G opportunity with a mapped job category (e.g. indus code 0001 mapping to the Finance WOG category), an OTG opportunity in the same category, a C@G opportunity with no job category, and a C@G opportunity with an unmapped category | UAT-04 |
| TD6 | Opportunities with the word "data" in the title, and one whose agency name matches a search keyword | UAT-05 |
| TD7 | One STIP or Gig with competencies populated and one with no competencies | UAT-08 |
| TD8 | One Internal Job, STIP, or Gig with an empty formsg_url | UAT-11 |
| TD9 | URL of a closed opportunity and a URL with an invalid opportunity ID | UAT-13 |
| TD10 | One ringfenced STIP or Gig restricted by agency or job family, plus three matching test accounts: eligible, ineligible, and incomplete-profile (POCDEX lookup fails) | UAT-14 |
| TD11a | Complete Officer (P1) — `profile.opp.maxmatch@dummy.company.com` — full skills match against a specific test opportunity `OPP_MAX_COMP_MATCH` (5 required competencies) | UAT-COMP-001/007, UAT-OPP-020 |
| TD11b | Some Competencies Officer (P6), partial-overlap variant — `profile.opp.partialmatch@dummy.company.com` — same `OPP_MAX_COMP_MATCH` opportunity, expect 2/5 match | UAT-COMP-001/007/008, UAT-OPP-021 |
| TD11c | Some Competencies Officer (P6), zero-overlap variant — `profile.opp.nomatch@dummy.company.com` — same opportunity, has competencies but none match, expect 0/5 not blank/error | UAT-COMP-008, UAT-OPP-022 |
| TD11d | No Competencies Officer (P5) — `profile.opp.nocompetencies@dummy.company.com` — no competency profile at all, expect 0/5 with no error | UAT-COMP-002/009, UAT-OPP-023 |
| TD11e | An opportunity with zero linked competency records | UAT-COMP-004/011, UAT-OPP-024 |
| TD11f | Simulated outage/timeout of the skills-check system (Core team's endpoint) | UAT-COMP-003/010 |
| TD11g | Listing/detail page load with the skills-check response artificially delayed, to test async/non-blocking rendering | UAT-COMP-005/012 |
| TD11h | A listing including ≥1 Internal Job card, to confirm match counts never appear on Internal Jobs (Gigs/STIPs only) | UAT-COMP-006 |
| TD12 | A dummy/sandbox FormSG form, reachable and submittable, for each OTG opportunity (Internal Job, STIP, Gig) used in UAT-10 — a real working form, not just a syntactically valid `formsg_url` | UAT-10 |

**TD11a–h replace the earlier single blocked TD11/UAT-15 placeholder** — see the resolution note in Entry Criteria above. Pulled directly from the [Consolidated Test Plan's](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934) UAT-COMP-001..013 and UAT-OPP-020..024 test cases, which are considerably more granular than this doc's original journey-level scenario. Full account/opportunity setup details (dummy emails, opportunity IDs) live on that page's "Accounts Needed" and "Other Data Needed" tables — treat that as the source of truth for exact values, this table only summarizes.

*(Owner column is blank in source — not yet assigned per test data ref.)*

---

## UAT scenarios

### UAT-01: Browse the listing and view a detail page

**Covers:** [P1, P3](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-88](https://sgtechstack.atlassian.net/browse/OTEP-88), [128](https://sgtechstack.atlassian.net/browse/OTEP-128), [267](https://sgtechstack.atlassian.net/browse/OTEP-267), [283](https://sgtechstack.atlassian.net/browse/OTEP-283), [285](https://sgtechstack.atlassian.net/browse/OTEP-285), [613](https://sgtechstack.atlassian.net/browse/OTEP-613)

**Setup:** TD1, TD2. Logged in as a standard officer.

**Steps:**
1. Open the opportunities listing.
2. Look at several cards, including at least one Careers@Gov card.
3. Find the opportunity with no agency logo.
4. Go to page 2 using the pagination controls.
5. Click a card to open its detail page.
6. Click "Back to opportunities".

**Expected result:** Every card shows title, agency, type, and closing date in the same layout. C@G cards carry a Careers@Gov badge visible without hover; there is no other source labelling. The no-logo opportunity shows the default logo. Pagination shows current page and total (e.g. "Page 1 of 5"). The detail page shows Title, Agency, Posted Date, Closing Date, Type, Description, "What you'll develop", Commitment type, and the Ministry icon next to the agency name, with dates in absolute format (e.g. "12 May 2026"). Back returns to page 2, with the ordering unchanged.

---

### UAT-02: Closing soon and evergreen opportunities

**Covers:** [P1, P3](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-284](https://sgtechstack.atlassian.net/browse/OTEP-284), [129](https://sgtechstack.atlassian.net/browse/OTEP-129)

**Setup:** TD3. Logged in.

**Steps:**
1. Find the opportunity closing within 7 days, the one closing later, and the evergreen one on the listing.
2. Open the near-closing opportunity's detail page.

**Expected result:** Only the opportunity closing within 7 days shows the "Closing soon" badge, on both the card and the detail page header in the same position. The evergreen opportunity is visible in the listing with no badge. The opportunity closing later has no badge.

---

### UAT-03: Filter by opportunity type

**Covers:** [P2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-86](https://sgtechstack.atlassian.net/browse/OTEP-86)

**Setup:** TD4. Logged in.

**Steps:**
1. Filter by STIP only.
2. Add Gig as a second selected type.
3. Page through the filtered results.
4. Filter by Job only.
5. Hover over each type's tooltip.

**Expected result:** Results show only the selected types and the result count updates each time. The active filters are visibly indicated. The selection persists across pages. The Job filter returns both OTG and C@G jobs together. Each type shows a tooltip explaining what it is.

---

### UAT-04: Filter by job category

**Covers:** [P2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-437](https://sgtechstack.atlassian.net/browse/OTEP-437)

**Setup:** TD5. Logged in.

**Steps:**
1. Filter by the seeded WOG category (e.g. Finance).
2. Clear the filter and browse the full listing.

**Expected result:** The C@G and OTG opportunities in that category appear together under the same label with no source distinction. With no filter applied, the C@G opportunity with no category and the one with an unmapped category are both still present in the listing, with no error.

---

### UAT-05: Search, alone and with filters

**Covers:** [P2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-405](https://sgtechstack.atlassian.net/browse/OTEP-405) (must be deployed)

**Setup:** TD6. Logged in.

**Steps:**
1. Search for "data".
2. Search for "DATA".
3. With the search still applied, add a type filter.
4. Clear the search box only.
5. Search for a nonsense string.

**Expected result:** Search matches on title and agency, is not case-sensitive, and returns partial matches. Results update on clicking Search or pressing Enter, not while typing. Search and filter narrow the results together. Clearing the search restores the listing while keeping the active filter. A nonsense search shows the standard no-results state.

---

### UAT-06: Clear all filters

**Covers:** [P2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-317](https://sgtechstack.atlassian.net/browse/OTEP-317)

**Setup:** Logged in.

**Steps:**
1. Confirm "Clear all" is not shown when no filters are active.
2. Apply two or more filters.
3. Click "Clear all".

**Expected result:** "Clear all" appears only while filters are active. Clicking it removes every selection across all filter types, restores the full listing, and updates the result count.

---

### UAT-07: Sort the listing

**Covers:** [P1](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-406](https://sgtechstack.atlassian.net/browse/OTEP-406), [285](https://sgtechstack.atlassian.net/browse/OTEP-285)

**Setup:** TD1. Logged in.

**Steps:**
1. Sort by posted date.
2. Sort by closing date.
3. Page forward and back in each sort.

**Expected result:** Each sort reorders the listing correctly. Default ordering is newest first. Closing-date sort shows the nearest deadline first. Items do not reshuffle or repeat as you move between pages.

---

### UAT-08: STIP and Gig card layout

**Covers:** [P1](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-571](https://sgtechstack.atlassian.net/browse/OTEP-571)

**Setup:** TD4, TD7. Logged in.

**Steps:**
1. Find a STIP card and a Gig card with competencies.
2. Find the STIP or Gig with no competencies.

**Expected result:** On STIP and Gig cards the competency section appears before the time-commitment section. The card with no competencies renders cleanly without a large blank area.

---

### UAT-09: Apply to a Careers@Gov opportunity

**Covers:** [P4](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-89](https://sgtechstack.atlassian.net/browse/OTEP-89)

**Setup:** TD1 (a C@G opportunity). Logged in.

**Steps:**
1. Open a C@G opportunity's detail page.
2. Read the page content and note the call to action.
3. Click "Apply via Careers@Gov".

**Expected result:** The detail page shows the C@G-sourced job details (title, agency, description, duration). A single prominent "Apply via Careers@Gov" CTA is shown, with an informational note that the application completes on Careers@Gov. Clicking opens the specific opportunity on Careers@Gov in a new tab. No FormSG flow appears anywhere on the page.

---

### UAT-10: Apply via FormSG

**Covers:** [P5](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-319](https://sgtechstack.atlassian.net/browse/OTEP-319)

**Setup:** TD4, TD12. Logged in.

**Steps:**
1. Open the detail page of an Internal Job, STIP, or Gig with a valid FormSG link.
2. Click Apply.

**Expected result:** The opportunity's FormSG form opens in a new tab and is the correct form for that opportunity. An informational note tells the officer the application completes on FormSG.

> **Note (2026-07-27):** TD12 requires a real, working dummy/sandbox FormSG form behind each `formsg_url` used here — a syntactically valid URL alone isn't sufficient to test that the form actually opens and is submittable.

---

### UAT-11: Missing application link

**Covers:** [P5](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-131](https://sgtechstack.atlassian.net/browse/OTEP-131) (must be deployed)

**Setup:** TD4, TD8. Logged in.

**Steps:**
1. Open the detail page of the opportunity with the empty formsg_url.

**Expected result:** Where the Apply button would be, the page instead shows "Application form unavailable — contact the posting agency" in the same position with no layout shift.

> **Note (2026-07-27):** SJR is out of scope — confirmed there will be no SJRs. The step that previously covered SJR detail pages, and its SJR-specific expected result, were removed as part of this update. RTM open item 11 (OTEP-128/OTEP-131 SJR apply-button contradiction) should be closed to reflect this decision.

---

### UAT-12: Open a shared link while logged out

**Covers:** [P3](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-128](https://sgtechstack.atlassian.net/browse/OTEP-128), [390](https://sgtechstack.atlassian.net/browse/OTEP-390)

**Setup:** A valid detail-page URL. Logged out (or private browser window).

**Steps:**
1. Paste the detail-page URL into the browser while logged out.
2. Complete the login.

**Expected result:** You are sent to log in first, then taken straight to that opportunity's detail page, not to the listing.

---

### UAT-13: Closed and invalid opportunity links

**Covers:** [P3](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-128](https://sgtechstack.atlassian.net/browse/OTEP-128), [129](https://sgtechstack.atlassian.net/browse/OTEP-129)

**Setup:** TD9. Logged in.

**Steps:**
1. Paste the URL of the closed opportunity.
2. Paste the URL with the invalid opportunity ID.
3. Confirm the closed opportunity does not appear anywhere in the listing.

**Expected result:** The closed posting shows "This opportunity is no longer available" with a link back to the listing and no apply action. The invalid ID shows "Opportunity not found" with a link back to the listing. The closed opportunity is absent from the listing.

---

### UAT-14: Ringfenced opportunity — eligible, ineligible, and incomplete-profile officers

**Covers:** [P2, P3](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175) · [OTEP-390](https://sgtechstack.atlassian.net/browse/OTEP-390), [408](https://sgtechstack.atlassian.net/browse/OTEP-408), [409](https://sgtechstack.atlassian.net/browse/OTEP-409) (must be deployed)

**Setup:** TD10.

**Steps:**
1. Log in as the eligible account. Browse the listing and open the ringfenced opportunity.
2. Copy its URL.
3. Log in as the ineligible account. Browse the listing and search for the ringfenced opportunity.
4. Paste the copied URL.
5. Log in as the incomplete-profile account and paste the same URL.

**Expected result:** Eligible officer: the ringfenced STIPs and Gigs appear ahead of the mixed open set, both ordered latest first; the detail page renders normally with the standard Apply CTA and no eligibility notice. Ineligible officer: the ringfenced opportunity does not appear in their listing at all; opening the direct URL loads a page showing "This opportunity is not available to you" with a link back to the full listing and no Apply action. Incomplete-profile officer: the page renders normally with no eligibility rule applied (silent fallback); access is not blocked.

---

### UAT-15: Competency match signal on Gig/STIP cards and detail page ✅

**Covers:** OTEP-336, OTEP-570 (confirmed MVP 2026-07-27; not on the original Confluence journey doc, added locally)

**Setup:** TD11a–h. Multiple accounts, per case — see the table above.

**Steps (journey-level summary — see the Consolidated Test Plan for the 13 granular cases this expands to):**
1. Log in as an officer with a full competency match against a known test opportunity. Confirm the match count and detail-page "What you'll develop" states.
2. Repeat as a partial-match officer, a zero-overlap officer, and a no-competencies officer — each should show a distinct, correct match state, never a blank or error.
3. Load the listing/detail page with the skills-check system simulated as down or delayed. Confirm graceful degradation — no match count instead of an error, and the rest of the page still renders.
4. Confirm an opportunity with zero linked competencies shows "No competencies available," not "0/0" or a blank field.
5. Confirm Internal Job cards never show a match count (Gigs/STIPs only).

**Expected result:** Match state (X/Y count on cards; matched-first ordering in the detail page's "What you'll develop" section) renders correctly across all officer/opportunity combinations above, degrades gracefully under system outage or delay, and never appears on Internal Jobs.

> **Resolved, 2026-07-27:** previously flagged blocked on REQ-X2 (per the RTM). The [Consolidated Test Plan — Pathfinder](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934) has this fully specified as 13 ready-to-run cases (UAT-COMP-001..013) with no blocker noted, which this journey now treats as current. **This journey-level entry is a coarse summary — for actual execution, use the Consolidated Test Plan's UAT-COMP-001..013 and UAT-OPP-020..024 directly**, since they're considerably more granular than a single journey scenario can represent.

> ⚠️ **Blocked, 2026-07-27:** this scenario cannot run until REQ-X2 (competency-to-opportunity agency-code resolution) clears — TD11's test data literally cannot be assembled before then. Do not schedule this for a BO until that dependency is resolved and TD11 is confirmed seeded.

---

## Run record

Every scenario has a blank "Run record" column in source (pass/fail + tester, filled during execution) — not reproduced here since it's empty at time of pull.

---

*Pulled: 2026-07-27, via direct Confluence REST API (page ID 2481295622), same pattern as the Jira direct-API approach.*
*Source of truth: [Confluence — Pathfinder UAT Scenarios (Journey-Based)](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481295622/Pathfinder+UAT+Scenarios+Journey-Based). Treat Confluence as canonical — re-pull before BO sign-off if scenarios may have changed since this date.*
*Related: [Pathfinder UAT Test Cases](2026-07-17-W29-pathfinder-uat-test-cases.md) (atomic/Jira-executable format), [UAT Scenarios Comparison](2026-07-24-W30-uat-scenarios-comparison.md), [Functional Test Checklist](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481656175), [Requirements Traceability Matrix v2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2484896250), [Technical Verification Checklist](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481950710)*
