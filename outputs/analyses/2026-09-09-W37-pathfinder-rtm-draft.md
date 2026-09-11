---
title: Pathfinder RTM (Requirements Traceability Matrix) — reconstructed draft
date: 2026-09-09
week: W37
epics: [Opportunities (Epic 4), WOG AD Authentication (Epic 5)]
status: DRAFT — reconstructed from repo material, reconcile against the Confluence RTM
owner: Michelle Yip
---

# Pathfinder RTM — reconstructed draft

This is a working Requirements Traceability Matrix for the two Pathfinder epics, **Opportunities** and **WOG AD Authentication**. It maps each requirement to its source, its Jira story, its acceptance criteria, the UAT case(s) that verify it, current status, and the open gap.

## Read this first

The authoritative RTM lives in Confluence and I cannot see it. This draft is rebuilt from what the repo holds: the story-group files in `03-stories/otep-stories/`, the two PRDs, the CC-UAT board mirror (`03-stories/jira-sync/CC-UAT/`, synced 2026-09-09), the open-items log, and the scoping-gaps tracker. Treat it as a reconciliation aid, not a replacement.

Three things it cannot do:

1. **Match the Confluence REQ-IDs.** The real RTM uses REQ-1, REQ-20, REQ-X2 and similar. Those numbers do not appear in the repo. This draft assigns its own `PF-*` requirement IDs. When you reconcile, map `PF-*` to the real REQ-IDs.
2. **Confirm build status precisely.** Story status is inferred from the story files (mostly "Draft — needs grooming"), the PRD scope table (dated 2026-07-27), and the fact that a signed-off UAT case exists (which implies the story built and passed). Where those disagree, the RTM flags it.
3. **See test executions.** Every `[PATHFINDER]` UAT case on the CC-UAT board is currently marked Done and signed off (Guo XZ / Alan Lim / rama moorthy / Christopher Woo). "Verified" below means a Done UAT case exists, not that I watched it run.

## Column definitions

| Column | Meaning |
|---|---|
| Req ID | This draft's requirement identifier (`PF-OPP-*`, `PF-AUTH-*`). Reconcile to Confluence REQ-IDs. |
| Requirement | What the system must do, one testable capability. |
| Source | Where the requirement comes from: PRD section, story file, a dated decision, or a Slack confirmation. |
| Story (Jira) | The Jira story or stories that deliver it. `~~struck~~` = absorbed, superseded, or deleted. |
| Acceptance criteria | The must-have ACs that define "done" for this requirement (abbreviated; full text in the story file). |
| UAT case(s) | CC-UAT board tickets that verify it. "—" = no case found. |
| Status | Build + verification state as best I can tell from the repo. |
| Gap / open item | What is missing, undecided, or inconsistent. Links to the open-items log where one exists. |

---

# Epic 4: Opportunities

## Group 1 — Discovery & Listing

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-01 | Officer sees open opportunities as a card grid, newest first, all types interleaved | PRD US-01a; filters.md OTEP-85 | OTEP-85 (absorbs OTEP-85a, OTEP-129) | Cards show title / agency / posting date / type; only opportunities with `closing_date >= today`; newest first, ties by opportunity ID; 15 per page, 3 columns desktop; text type label, not colour-only | UAT-OPP-001 (sorted grid), UAT-OPP-002 (card fields), UAT-OPP-003 (closed excluded) | ✅ Built + verified (3 signed-off UAT cases) | Good-to-have ACs (ministry icon, 2-line truncation, stable same-day order) not separately traced to a UAT case |
| PF-OPP-02 | "Closing soon" label on cards and detail page within 7 days | filters.md OTEP-85a (re-absorbed into OTEP-85); PRD OTEP-128 row | OTEP-85 | Label if `closing_date` within 7 days; none if more than 7 days out; still shows if closing today; same label on detail page; text not colour-only; distinct from the type label | UAT-OPP-018 (badge within 7 days, position parity), UAT-OPP-019 (no badge for evergreen) | ✅ Built + verified | 7-day boundary inclusivity ("exactly 7 days") not spelled out in the AC; UAT-OPP-018 assumes inclusive |
| PF-OPP-03 | Pagination for the listing | filters.md OTEP-267 | OTEP-267 | Next / previous when more than 15; page indicator ("Page 1 of 5"); controls hidden at zero results; no duplicates across pages; disabled Next/Prev at exactly 15 | UAT-OPP-004 (controls appear over 15), UAT-OPP-005 (controls hidden when all fit) | ✅ Built + verified | Boundary "exactly 15 = one full page, controls visible but disabled" tested by UAT-OPP-005; middle/last-page no-duplicate check is a subtask test, not a UAT case |
| PF-OPP-04 | Empty and error states for the listing | filters.md OTEP-268 (re-added by Pow Hwee 2026-05-18) | OTEP-268 | Success + zero results → "No opportunities available right now" heading, no retry; load failure → "We couldn't load opportunities" + "Try again" button that re-fetches; never a blank screen | UAT-OPP-006 (zero-opportunity state) | 🟡 Partly verified | Error/failure state (500 → "Try again") has no dedicated `[PATHFINDER]` UAT case; UAT-OPP-006 covers the empty state only |
| PF-OPP-05 | Click-through to detail and return to the same listing page | filters.md OTEP-285; PRD note "OTEP-285 absorbed into OTEP-128" | OTEP-285 → absorbed into OTEP-128 | Card click opens that opportunity's detail; return via "Back to opportunities" or browser back lands on the same page, not page 1; ordering stable across pages; (good-to-have) refresh and shared link keep the page | UAT-OPP-001 path + UAT-OPP-013/015 (detail render); return-to-page state not isolated in a UAT case | 🟡 Built (absorbed), partial coverage | Return-to-same-page and filter/scroll-state preservation is not the subject of any single UAT case. "Highest-risk story in Sprint 2" per the story file. **Coverage gap.** |
| PF-OPP-06 | Listing requires authentication; unauthenticated user is redirected to login | PRD US-01a ("Officers must be authenticated"); auth.md route-guard NFR | OTEP-85 + OTEP-594 routing | Unauthenticated request to the listing does not render opportunities; officer is sent to WOG AD login | UAT-OPP E2E OTEP-1174 (step 2: logged-out direct URL → login) | ✅ Verified via E2E | Shared with PF-AUTH-08 (route guard). One E2E covers both. |

## Group 2 — Search

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-07 | Keyword search across title, agency, description | PRD US-02 (OTEP-405); filters.md "search is MVP, not Sprint 2" | OTEP-405 | Search field on the listing page above filters; queries title + agency + description; results on submit, no typeahead; zero-results state with prompt to broaden; works with filters; partial-match / minor-typo tolerant | UAT-SEARCH-001 (box UI + placement), 002 (case-insensitive partial match on title), 003 (match on agency), 004 (no-results state), 009 (relevance-first sort), 011 (whitespace trim), 015 (no snippet for description-only matches) | ✅ Built + verified (7 signed-off cases) | Numbering gaps on the board: SEARCH-005, 010, 012, 013, 014 absent. Description-*field* matching is asserted by the requirement but the only description case (015) checks the *absence* of a snippet, not that a description match returns a result. Confirm description matching is actually covered. |
| PF-OPP-08 | Search combines correctly with active filters | PRD US-02 "works in combination with filters" | OTEP-405 + OTEP-86 | Filter applied after a search still narrows the search results; clearing the search respects active filters; clearing the search with no filters restores the full list | UAT-SEARCH-006 (filter after search combines), 007 (clear search restores full list), 008 (clear search respects active filters) | ✅ Built + verified | — |
| PF-OPP-09 | Search infrastructure: indexing + refresh | open-items #16 (Pow Hwee) | OTEP-405 (needs a story or spike) | "Elastic — partial matches and minor typos return relevant results" | UAT-SEARCH-002 (partial match) indirectly | 🟡 Built (cases pass), infra decision not recorded | open-items #16 "Search indexing infrastructure — provisioning + refresh strategy" still 🔴 Open in the log. The feature shipped and passed UAT; the infra decision was never written back. Reconcile. |

## Group 3 — Filters & Categorisation

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-10 | Filter by opportunity type, multi-select | PRD US-03; filters.md OTEP-86 | OTEP-86 | Filter by Internal Job / SJR / STIP-Gig (Secondment under SJR); multi-select shows the union; no filter = all types; zero-match → "No opportunities found" | UAT-OPP-007 (single type narrows), UAT-OPP-008 (multiple types = union), UAT-OPP-010 (zero-match empty state) | ✅ Built + verified | Good-to-have (filter state in URL params, survives browser back) traced to UAT-OPP-009 (persists across pagination) but not to a back-button case |
| PF-OPP-11 | Active filter persists across pagination | filters.md OTEP-86 good-to-have | OTEP-86 | Moving between pages keeps the active filter applied | UAT-OPP-009 (filter persists across pagination) | ✅ Built + verified | Cross-session persistence is explicitly R1 (US-07), correctly out of scope |
| PF-OPP-12 | "Clear all" resets every active filter in one action | PRD US-05; filters.md OTEP-317 | OTEP-317 (was US-05) | "Clear all" visible only when filters are active; one click removes all selections and restores the full listing; hidden when no filters active; (good-to-have) also resets the URL and returns to page 1 | UAT-OPP-011 ("Clear all" resets every filter), UAT-OPP-012 ("Clear all" not shown when no filters active) | ✅ Built + verified | — |
| PF-OPP-13 | Filter by job family / WOG category | PRD US-03 (OTEP-437); index.md OTEP-318 → superseded by OTEP-437 | OTEP-437 (~~OTEP-318 deleted from Jira 2026-07-27~~) | Officer can filter by WOG job category/family; C@G Indus taxonomy as the canonical layer; legacy OTG job-family codes consolidated; custom DB mapping table covers families not in `ref_job_family` | UAT-JF-001 (C@G opp under correct WOG category), JF-002 (mixed source, no source distinction shown), JF-009 (legacy OTG code consolidation), JF-010 ("Urban Planning and Design" consolidation), JF-011 (custom DB mapping fallback) | ✅ Built + verified (5 cases) | PRD Section 10 (line 201) says the *category filter* "sits in QA with zero cases written — 14 drafted gap cases NEW-04..17". The 5 UAT-JF cases above verify the *taxonomy mapping*, not the filter interaction itself. Confirm whether the 14 NEW-04..17 filter-interaction cases were written and run, or are still outstanding. **Likely coverage gap.** |
| PF-OPP-14 | Category filter spike outcome feeds OTEP-437 | OTEP-289-spike-definition.md | OTEP-289 (spike, Done) | Spike defines the categorisation model that OTEP-437 builds against | — (spike, no UAT) | ✅ Spike done | — |

## Group 4 — Opportunity Detail Page

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-15 | Detail page shows all mandatory opportunity fields | PRD US-04+US-05 (OTEP-128); otg-lifecycle.md OTEP-128 | OTEP-128 | Title, agency, type, posting date, closing date, description, "What you'll develop"; absolute dates ("12 May 2026") not relative; "Not specified" for a missing mandatory field (per live Jira, supersedes the story file's "page doesn't render") | UAT-OPP-013 (full opportunity information) + 8 Gherkin scenarios in the OTEP-128 ticket comments (navigation, core render, posting-date format, breadcrumb, direct URL, closed deep-link, invalid ID, job duration) | ✅ Built + verified | Story file and live Jira disagree on missing-mandatory-field behaviour ("page doesn't render" vs "Not specified"). Live Jira wins. Reconcile the story file. |
| PF-OPP-16 | Detail page loads via direct / bookmarked / shared URL | otg-lifecycle.md OTEP-128; PRD OTEP-128 row | OTEP-128 | A shared link opens the detail page directly without starting from the listing; "Back to opportunities" works even when the officer did not arrive from the listing | UAT-OPP-015 (loads via direct / bookmarked URL) | ✅ Built + verified | — |
| PF-OPP-17 | Unauthenticated deep-link → login → redirect to that opportunity | Slack (Hao Eng Chua + Léo, 2026-07-02); PRD OTEP-128 row; AC amendment 2026-07-02 | OTEP-128 (amended) | An unauthenticated deep-link sends the officer to WOG AD login, then straight to that specific opportunity's detail page (not the listing) | UAT E2E OTEP-1174 (step 3: after redirect, land on the specific opportunity) | ✅ Built + verified via E2E | PRD note flags: "verify the built behavior actually redirects post-login to the opportunity page (not the listing) before sign-off; amend the Jira AC if not explicit". E2E OTEP-1174 confirms it. Ensure the Jira AC text was amended. |
| PF-OPP-18 | Invalid / nonexistent opportunity ID → clean error state | otg-lifecycle.md OTEP-128 edge cases; live Jira | OTEP-128 | Invalid ID → "Something went wrong" message + "Refresh" button (live Jira wording, supersedes the story file's "Opportunity not found"); no stack trace or raw error; officer stays logged in | UAT-OPP-016 (invalid ID → clean "not found" state) | ✅ Built + verified | Story file still says "Opportunity not found"; live UAT wording is "Something went wrong / Refresh". Reconcile the story file. |
| PF-OPP-19 | Deep-link to a closed opportunity → closed-state message | otg-lifecycle.md OTEP-128; live Jira | OTEP-128 | Page loads (not a 404); "This opportunity is no longer available" notice; link back to the listing; no apply action | UAT-OPP-017 (closed opportunity deep-link → closed-state message) | ✅ Built + verified | Whether the closed page still shows the opportunity's own fields alongside the notice is undecided (flagged `[BLOCKED]` in the generated test cases; not resolved in the story file) |
| PF-OPP-20 | Soft-deleted opportunity deep-link behaviour | otg-lifecycle.md ("deep-links valid as long as active, not closed or soft-deleted") | OTEP-128 | Deep-link to a soft-deleted opportunity does not render a live applyable page | — (no dedicated `[PATHFINDER]` UAT case) | 🟡 Built, not separately verified | Soft-deleted is grouped with "closed" in the story file but the two notices differ and no UAT case isolates the soft-deleted path. **Coverage gap.** |
| PF-OPP-21 | Loading state while the detail page fetches | otg-lifecycle.md OTEP-128 ("spinner, not a blank page") | OTEP-128 | A spinner shows while loading; the error state does not flash before content arrives on a slow connection | — | 🟡 Built, not separately verified | No UAT case for the loading / skeleton state. Minor. |
| PF-OPP-22 | `GET /opportunities/:id` API contract | otg-lifecycle.md OTEP-128 "API contract intent" | OTEP-128 subtask 1 (backend) | Single opportunity object with all detail fields; 200 found / 404 not found / 500 server error; closed opportunities still return 200 with data; unauthenticated call does not return data | — (no API-level `[PATHFINDER]` UAT case) | 🟡 Built, UI-verified only | The API contract is verified only indirectly through the UI cases. No direct contract test on the board. This is the layer engineering owns; note for the engineering-context track. |
| PF-OPP-23 | Type label on the detail page matches the listing card | otg-lifecycle.md OTEP-128 good-to-have; PRD | OTEP-128 | The type label's wording and styling on the detail page match the same opportunity's listing card | Covered inside UAT-OPP-013 assertions | 🟡 Verified within another case | Not isolated; "Internal Job" vs "Job" label parity across all MVP types is not its own case |

## Group 5 — OTG Application Lifecycle (apply flow)

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-24 | Apply CTA on the detail page for Internal Job / STIP / Gig | otg-lifecycle.md OTEP-87; PRD OTEP-128 row ("Apply CTA visible without scrolling") | OTEP-87 (builds on OTEP-128) | A clear "Apply" button for Internal Job / STIP / Gig; no apply action for SJR; no apply button when the opportunity is closed ("This opportunity is closed" instead) | — (no `[PATHFINDER]` apply-flow UAT case on the board) | 🔴 Not verified | The detail-page test cases assume the Apply button is *disabled* at their build point (OTEP-87 not yet active). No UAT case verifies the enabled Apply CTA. **Coverage gap — apply flow.** |
| PF-OPP-25 | "Apply" redirects to the opportunity's FormSG form in a new tab | otg-lifecycle.md OTEP-319 (`formsg_url` confirmed 2026-05-21) | OTEP-319 (was US-18) | Clicking Apply on an Internal Job / STIP / Gig opens that opportunity's FormSG form in a new tab; missing `formsg_url` → "Application form unavailable — contact the posting agency" instead of the button; no Apply on SJR | — | 🔴 Not verified | No UAT case. `formsg_url` confirmed present in the OTG export. The redirect itself is untested on the board. **Coverage gap.** |
| PF-OPP-26 | OTEP becomes aware of a FormSG submission ("You've applied" state) | otg-lifecycle.md OTEP-130 | ~~OTEP-130~~ (deleted from Jira 2026-08-19; key reused then deleted) | After submission and return, "You've applied" indicator with the submit date; Apply button gone; if no webhook within ~30s → "Submitted via FormSG — check My Applications"; state persists across sessions. Fallback if no webhook: "Did you complete your application?" + "Yes, I applied" | — | 🔴 Descoped / not built for MVP | OTEP-130 removed from Sprint 4 scope 2026-06-10 (webhook not a must-have; tracking is R1). PRD Section 10: "FormSG remains the completion channel with no webhook confirmation at MVP." So there is no "already applied" state at MVP. Confirm this is the intended MVP boundary. |
| PF-OPP-27 | `POST /api/formsg/webhook` inbound contract | otg-lifecycle.md OTEP-130 "API contract intent" | ~~OTEP-130~~ | Payload `{ opportunity_id, officer_id, submitted_at, form_response_id }`; 200 success / 400 malformed / 500 logged; stores the application record; `GET /opportunities/:id` returns `officer_applied` | — | 🔴 Not built for MVP | Same as PF-OPP-26. R1 concern. |

## Group 6 — Application Status Tracking

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-28 | "My Applications" list of OTG submissions | tracking.md US-14 | US-14 (not ticketed) | List each submission with title / agency / submit date / current status; empty state guides to browse; newest first | — | 🔴 Not built for MVP | The whole tracking group depends on OTEP-130's application record, which was descoped. Tracking is R1. No UAT. Confirm the group is out of MVP scope. |
| PF-OPP-29 | Individual application status detail | tracking.md US-15 | US-15 (not ticketed) | Full detail: opportunity summary, submit date, current status, status-change history; latest status not stale; final states clearly marked | — | 🔴 Not built for MVP | R1. Status source of truth still undecided (tracking.md open Q1). |
| PF-OPP-30 | In-app notification when status changes | tracking.md US-16 | US-16 (not ticketed) | Badge on "My Applications"; affected applications highlighted when opened. Email / push is R1 | — | 🔴 Not built for MVP | R1. |
| PF-OPP-31 | Withdraw an OTG application | tracking.md US-17 | US-17 (not ticketed) | Confirmation step before withdrawing; from Submitted or Under Review only; "Withdrawn" is final; option hidden once accepted / rejected | — | 🔴 Not built for MVP | R1. |

## Group 7 — Careers@Gov Deep-link Handoff

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-32 | C@G opportunities appear in the listing alongside OTG, interleaved | cag-handoff.md OTEP-88; PRD OTEP-85 ("C@G listings ingested separately") | OTEP-88 | C@G and OTG cards appear together, interleaved by date; "Careers@Gov" badge on C@G cards only; OTG cards never carry the badge; C@G card layout matches OTG; pagination applies across the combined set | UAT-OPP-025 (C@G + OTG interleaved), UAT-OPP-026 ("Careers@Gov" badge on C@G only), UAT-OPP-027 (OTG never shows the badge), UAT-OPP-028 (C@G layout matches OTG), UAT-OPP-029 (pagination across combined results) | ✅ Built + verified (5 cases) | — |
| PF-OPP-33 | C@G opportunity summary view on OTEP | cag-handoff.md OTEP-89 | OTEP-89 | Summary shows title / organisation / job function / employment type / experience level; the officer can see that applying goes to Careers@Gov, not an OTEP form; expired C@G listing → "no longer available" | — (no dedicated UAT case; touched by UAT-OPP-025/028) | 🟡 Partial | No UAT case isolates the C@G summary/detail view and its field set. PRD Section 10 (line 200): "C@G apply flow (OTEP-88/87) has zero QA test coverage — the dedicated QA page is empty ... 10 drafted gap cases NEW-18..27." **Coverage gap — C@G detail + handoff.** |
| PF-OPP-34 | Redirect to the specific C@G listing to apply | cag-handoff.md OTEP-133 | ~~OTEP-133~~ (Done, absorbed into OTEP-390 2026-06-05) | "Apply on Careers@Gov" opens that specific C@G listing in a new tab; a "leaving OTEP" notice before redirect; broken/expired deep-link → fallback message ("Search for this role on Careers@Gov") | — | 🔴 Not verified | OTEP-133 marked Done but its scope was absorbed into OTEP-390 (ringfenced detail states). The redirect-to-C@G action itself has no UAT case. Part of the "zero QA coverage" gap above. |
| PF-OPP-35 | Officer can tell OTG ("Apply") from C@G ("Apply on Careers@Gov") | cag-handoff.md OTEP-88 | OTEP-88 | The button/text makes the apply destination clear on any opportunity; C@G cards carry a visible external indicator before the officer clicks | UAT-OPP-026 (badge), partial | 🟡 Partial | The badge is verified; the *button-text differentiation* on the detail page is not isolated in a UAT case |

## Group 8 — Ringfencing (eligibility filtering)

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-36 | Listing shows only opportunities the officer is eligible for (ringfencing) | PRD US-01b; PRD "Epic: Ringfencing (OTEP-127, 390, 408, 409)" | OTEP-127 (spike, Done); OTEP-408 (BE eligibility filter), OTEP-409 (FE reflect results) | Must be logged in; ringfencing applies to all listed opportunities per the officer's POCDEX data at login; a transfer refreshes eligibility on next login; Master Switch off = show all regardless of include/exclude rules | E2E OTEP-975 (blocked vs eligible by Agency), OTEP-1301 (by Job Function), OTEP-1302 (by Job Family, detail page) | ✅ Built + verified (3 E2E cases across 3 filter dimensions) | — |
| PF-OPP-37 | Ineligible officer sees a distinct ringfenced state on the detail page (incl. via deep-link) | PRD "Epic: Ringfencing"; OTEP-390 (absorbs OTEP-133 EDM entry path) | OTEP-390 | Eligible officer sees the normal detail page; ineligible officer sees "This opportunity isn't available based on your current profile. Explore other opportunities that may be a better match." + "Explore opportunities" button; same block via direct nav and via deep-link | E2E OTEP-975 step 2 (deep-link, Agency), OTEP-1301 step 3 (deep-link, Job Function), OTEP-1302 step 2 (deep-link, Job Family) | ✅ Built + verified | — |
| PF-OPP-38 | Ringfencing correctness against incomplete / partial POCDEX profile data | PRD Section 10 (line 198); scoping-gaps #14 | OTEP-408 | (implied) An officer with partial/missing POCDEX agency or job-family data does not silently get wrong access | — | 🔴 Not verified | PRD: "no test case exists yet ... reserve 3 ringfencing personas: eligible / ineligible / incomplete-profile — RTM open item 7." Only eligible + ineligible are covered by the E2E cases. **Coverage gap — the incomplete-profile persona is not built or tested.** |
| PF-OPP-39 | Ringfenced Internal Jobs pinned to the top for eligible officers | PRD US-01a AC ("Ringfenced Internal Jobs are pinned to the top for eligible officers") | OTEP-85 / OTEP-409 | Eligible officer sees ringfenced Internal Jobs at the top of the listing | — | 🟡 Built, not separately verified | No UAT case isolates the pin-to-top ordering rule |

## Group 9 — Competency match signal (confirmed MVP 2026-07-27)

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-40 | Competency match count on Gig / STIP listing cards | PRD OTEP-336/570 row (line 143); scoping-gaps | OTEP-336 (Backlog as of 2026-07-27) | Match count ("1/2 competencies matched") renders on Gig/STIP cards when the officer's competency profile is retrieved | E2E OTEP-1004 (competency match on listing + detail, add reflects live) | 🟡 Built + verified by E2E, but PRD says Backlog | PRD (line 143): "RTM's REQ-20 currently incorrectly shows this as ✅ Done — needs correcting to reflect actual Backlog status". Yet E2E OTEP-1004 exists and is signed off. **Status conflict — reconcile REQ-20 in the Confluence RTM against the passing E2E.** |
| PF-OPP-41 | Per-competency match state ("have / don't have") in "What you'll develop" on the detail page | PRD OTEP-336/570 row | OTEP-570 (Backlog as of 2026-07-27) | The detail page shows per-competency have/don't-have states (green tick / grey tick), not a flat list; C@G opportunity with no competency data never shows a match count | E2E OTEP-1004 (detail-page match states, add-competency reflection, C@G no-match-section check) | 🟡 Same conflict as PF-OPP-40 | Blocking dependency per PRD: **REQ-X2 (competency-to-opportunity matching, agency-code resolution) unresolved** — PRD Section 10 line 202 calls it "a real MVP blocker". |
| PF-OPP-42 | Duplicated competency names must not appear on the detail page | CC-UAT OTEP-1339 [BUG] | OTEP-1339 (bug, Done — Thomas Huchedé) | No duplicate competency names on the opportunity detail page (root cause: importing "deleted" competencies) | OTEP-1339 (bug verification) | ✅ Fixed + verified | — |

---

# Epic 5: WOG AD Authentication

Status note: the whole auth epic is "Draft — needs grooming", deferred Sprint 3 → Sprint 4+ (2026-05-21) because there was no WOG AD UAT environment (open-items #26). One `[PATHFINDER]` E2E (OTEP-1174) now exists and is signed off, so at least the happy path built and passed since then. Individual story build status below is inferred and low-confidence.

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-AUTH-01 | One-click login with WOG AD credentials | auth.md OTEP-71; prd-auth.md; GOALS.md Goal 1 | OTEP-71 (absorbs WOG-11) | "Log in with WOG AD" lands on the OTEP home page, no manual credential entry; identity = government email + SOE-ID from AD; no separate registration step | E2E OTEP-1174 step 1 (WOG AD login → home page, no account creation) | ✅ Built + verified (happy path) | AD-returns-email+SOE-ID-only is an ASSUMPTION in the story, not confirmed. Profile name source depends on it. |
| PF-AUTH-02 | Specific error messages when login fails | auth.md OTEP-110 (absorbs WOG-12, WOG-13) | OTEP-110 | Incorrect credentials → "Incorrect credentials. Please try again."; locked account → helpdesk message; disabled account → distinct inactive message; AD unreachable → "Service temporarily unavailable"; timeout resolves within a defined wait, not an indefinite hang | — | 🔴 Not verified | No `[PATHFINDER]` UAT case for login-failure states. Copy needs compliance sign-off before build (story risk). **Coverage gap.** |
| PF-AUTH-03 | Login errors must not reveal whether an account exists | auth.md OTEP-110 NFR (from WOG-15) | OTEP-110 | Unknown identity and valid identity + wrong password produce the same message and a consistent response time; no AD detail / stack trace / account-status field exposed | — | 🔴 Not verified | Security NFR. No test case. Timing side-channel check is unverified. **Coverage gap — security.** |
| PF-AUTH-04 | Officer routed to the correct page after auth (profile / unauthorised / system-error) | auth.md OTEP-594 (live Jira 2026-07-02) | OTEP-594 (depends on OTEP-111 + OTEP-350; blocks OTEP-71) | Pilot agency + active POCDEX profile → Profile page; not a pilot agency → unauthorised page; pilot agency + no POCDEX profile yet → system-error page (not the generic unauthorised page); deactivated profile → unauthorised page; failed WOG AD login → AD's own error, OTEP does not intercept | E2E OTEP-1174 (happy path only: pilot agency + profile → home) | 🟡 Happy path verified; branches not | The 4-way routing is only partly covered. Decisions #7/#8/#9 in auth.md are still open (OTEP-111/OTEP-594 boundary, system-error copy, auto-log owner). **Coverage gap on the non-happy branches.** |
| PF-AUTH-05 | Unauthorised page for officers with no access | auth.md OTEP-111 (live Jira 2026-07-02) | OTEP-111 | Not from a pilot agency → unauthorised page; pilot agency but no POCDEX profile (and not the timing case) → unauthorised page; deactivated POCDEX profile → unauthorised page; page copy "Oops, you do not seem to have access at the moment. Please contact your HR for more information."; the page does not expose which check failed | POCDEX-012 / POCDEX-013 on the CC-UAT board are `[CORE]`-tagged, not `[PATHFINDER]` (OTEP-1379/1380: non-whitelisted agency and excluded employment-group → Unauthorized Access) | 🟡 Verified by CORE cases, not Pathfinder | The routing outcomes are tested under the Core team's POCDEX cases (OTEP-1379/1380), not a Pathfinder case. Cross-team coverage. The "was authorised, now isn't" deactivation transition has **no AC yet** (auth.md decision #10, Rama). |
| PF-AUTH-06 | Pilot agency + no POCDEX profile yet → temporary system-error message | auth.md OTEP-594 "new scenario" (Squad Sync, Pow Hwee/Imelda/Rama) | OTEP-594 (new scenario) | Not the generic "no access" message; copy makes clear it is temporary (proposed: "Sorry the system is still onboarding your details ... try logging in again in 2 days"); the case is auto-logged in the background, no manual "report issue" | — | 🔴 Not built / not verified | Decisions #8 (2-day POCDEX lag assumption + does Core have a screen) and #9 (auto-log implementation owner) are open. **Gap — undecided and untested.** |
| PF-AUTH-07 | Resolve the officer's agency from their AD identity | auth.md WOG-10 | WOG-10 | Agency resolved automatically from the WOG AD identity, no manual entry; the same value drives the access check; unresolvable agency → clear block, not dropped into OTEP with no context | — | 🔴 Not verified | Decision #2 (agency-resolution source: email domain vs SOE-ID prefix vs lookup table, Pow Hwee) still open. **Gap — undecided.** |
| PF-AUTH-08 | Stay logged in during an active session; idle timeout | auth.md OTEP-304 (was WOG-04) | OTEP-304 | Navigating between pages keeps the session; idle beyond X minutes → expire and redirect to login; expired-session action → "Session expired, please log in again", not a blank page | — | 🔴 Not verified | Idle-timeout value (decision #1) is a government compliance policy, still unknown. Built with a placeholder; rework likely. **Gap — undecided.** |
| PF-AUTH-09 | Log out of OTEP | auth.md OTEP-305 (was WOG-05) | OTEP-305 | "Log out" ends the session and returns to login; browser back after logout → login, not OTEP; typing any OTEP URL after logout → login | E2E OTEP-1174 step 4 (log out → login page) | ✅ Happy path verified | Browser-back-after-logout and direct-URL-after-logout are asserted by the story but only the basic logout-returns-to-login step is in the E2E |
| PF-AUTH-10 | No session starts on manual URL navigation while unauthenticated | auth.md OTEP-594 AC (Rama, Squad Sync — route-guard NFR, decision #11) | OTEP-594 | Typing any OTEP URL while not logged in and authorised → no session starts, redirect to login | E2E OTEP-1174 step 2 (logged-out direct URL to an opportunity → redirected to login, no session) | ✅ Verified via E2E | Shared with PF-OPP-06. Decision #11 asks that this be captured as a route-guard NFR across all pages, not just one ticket — confirm that's recorded. |
| PF-AUTH-11 | Complete logout on shared government devices | auth.md WOG-17 | WOG-17 | After logout on a shared device the next person sees the login page, no cached OTEP content, no access to the previous officer's data; session tokens / service workers / background processes invalidated on logout | — | 🔴 Not verified | No UAT case. High rework cost if session architecture didn't account for this (story risk). **Coverage gap — security.** |
| PF-AUTH-12 | First-time login: capture the officer's name | auth.md WOG-06 | WOG-06 | First login (no OTEP profile for this SOE-ID) → profile-setup screen before the home page; email pre-filled; name is required; every later login skips the setup screen; an incomplete name entry returns the officer to setup on next login | — | 🔴 Not verified / may be moot | If POCDEX can pre-populate name from SOE-ID (OTEP-183 spike), this story "collapses to zero". Decision #5 (mandatory field = name only) still open. **Gap — may not be needed; undecided.** |
| PF-AUTH-13 | Rate limiting / account lockout ownership | auth.md WOG-14 (spike) | WOG-14 (convert to spike, decision #3) | Confirm whether WOG AD already enforces lockout + rate limiting; OTEP builds nothing if it does | — | 🔴 Spike not closed in the repo | Standing assumption: "WOG AD handles password management, MFA, and account lockout — OTEP does not re-implement." Decision #3 (Pow Hwee) unconfirmed in the log. |
| PF-AUTH-14 | Concurrent sessions — policy | auth.md WOG-18 (decision #4) | none (policy decision, no ticket) | Default: allow multiple concurrent sessions, each respecting the idle timeout independently | — (no build, no test) | 🟡 Policy only | Story file says record the one-line decision in the decisions log; confirm it was recorded. No feature to test. |
| PF-AUTH-15 | Agency admin login + RBAC | auth.md WOG-02, WOG-07 | WOG-02, WOG-07 | [DEFERRED to Sprint 6] Admin recognised from WOG AD role; admin nav/features; officers cannot reach admin-only pages; role change reflected on next login | — | 🔴 Deferred to Sprint 6 (out of MVP) | Correctly out of MVP scope (decision 2026-05-12). Listed for completeness. |

---

# Coverage summary

## Where coverage is solid

| Area | Requirements | UAT verification |
|---|---|---|
| Listing (grid, sort, pagination, empty state, "Closing soon") | PF-OPP-01 to 03, PF-OPP-04 (partial) | UAT-OPP-001 to 006, 018, 019 — 8 signed-off cases |
| Search | PF-OPP-07, 08 | UAT-SEARCH-001 to 009, 011, 015 — 7 signed-off cases |
| Type filters + "Clear all" | PF-OPP-10 to 12 | UAT-OPP-007 to 012 — 6 signed-off cases |
| Job-family taxonomy mapping | PF-OPP-13 (taxonomy layer) | UAT-JF-001, 002, 009, 010, 011 — 5 signed-off cases |
| Detail page render + deep-link + closed/invalid states | PF-OPP-15, 16, 17, 18, 19 | UAT-OPP-013, 015, 016, 017 + 8 Gherkin scenarios + E2E OTEP-1174 |
| C@G + OTG combined listing | PF-OPP-32 | UAT-OPP-025 to 029 — 5 signed-off cases |
| Ringfencing (eligible vs ineligible, 3 filter dimensions) | PF-OPP-36, 37 | E2E OTEP-975, 1301, 1302 |
| Competency match display | PF-OPP-40, 41, 42 | E2E OTEP-1004, bug OTEP-1339 |
| Auth happy path (login → route → logout → route-guard) | PF-AUTH-01, 04 (happy path), 09, 10 | E2E OTEP-1174 |

## Coverage gaps — ranked

| # | Gap | Requirements affected | Why it matters | Action |
|---|---|---|---|---|
| 1 | **Apply flow has no UAT coverage** | PF-OPP-24, 25 | The enabled Apply CTA and the FormSG redirect are core MVP value ("OTG full lifecycle end-to-end") and nothing on the board tests them | Confirm whether apply-flow UAT cases exist outside CC-UAT; if not, write them before UAT sign-off |
| 2 | **C@G detail + handoff has zero QA coverage** | PF-OPP-33, 34, 35 | PRD Section 10 states the dedicated QA page is empty; 10 gap cases (NEW-18..27) drafted, not confirmed run; P0 officer-facing feature | Prioritise NEW-18..27 |
| 3 | **Category-filter interaction untested** | PF-OPP-13 (filter UI) | PRD Section 10: OTEP-437 "sits in QA with zero cases"; 14 gap cases (NEW-04..17) drafted. The 5 UAT-JF cases verify the taxonomy, not the filter | Prioritise NEW-04..17; confirm which of the two (taxonomy vs interaction) the 5 existing cases actually cover |
| 4 | **Ringfencing incomplete-profile persona not built or tested** | PF-OPP-38 | "Silent wrong-access at scale" is the failure mode; only eligible + ineligible personas exist | Build and reserve the incomplete-profile persona in the UAT dataset (RTM open item 7) |
| 5 | **Auth failure + security NFRs untested** | PF-AUTH-02, 03, 11 | Login-failure copy, account non-enumeration, and shared-device logout are government security requirements with no test case | Add UAT cases once compliance signs off the error copy |
| 6 | **Auth non-happy routing branches untested** | PF-AUTH-04, 05, 06 | Only "pilot agency + profile → home" is verified; unauthorised, deactivated, and "no profile yet" branches are not (and decisions #7/#8/#9 are open) | Close decisions #7/#8/#9, then add branch UAT cases |
| 7 | **Return-to-same-page state not isolated** | PF-OPP-05 | Called "the highest-risk story in Sprint 2"; absorbed into OTEP-128 and only covered incidentally | Add a UAT case for return-to-page + filter/scroll state preservation |
| 8 | **Detail-page API contract not directly tested** | PF-OPP-22 | `GET /opportunities/:id` (200/404/500, auth, closed-still-returns-200) is verified only through the UI | Engineering-owned; fold into the engineering-context track, add a contract test |
| 9 | **Soft-deleted / loading states not isolated** | PF-OPP-20, 21 | Minor, but grouped-with-closed behaviour and the loading spinner have no dedicated case | Low priority; add if time allows |

## Status conflicts to reconcile against the Confluence RTM

| Item | Repo says | Also says | Reconcile |
|---|---|---|---|
| OTEP-336 / OTEP-570 (competency match) | PRD scope table (2026-07-27): "Backlog", "confirmed MVP scope" | E2E OTEP-1004 exists and is signed off Done | Is it built or backlog? The passing E2E suggests built. PRD says correct REQ-20 in the RTM (it wrongly shows Done). |
| REQ-X2 (competency-to-opportunity agency-code resolution) | PRD Section 10: "unresolved ... a real MVP blocker" | E2E OTEP-1004 passed | If REQ-X2 is unresolved, how did the E2E pass? Check whether the E2E used seeded data that sidesteps the unresolved resolution logic. |
| OTEP-128 missing-mandatory-field behaviour | Story file: "page doesn't render" | Live Jira / UAT: "Not specified" fallback | Live Jira wins. Update the story file. |
| OTEP-128 invalid-ID copy | Story file: "Opportunity not found" | Live Jira / UAT-OPP-016: "Something went wrong / Refresh" | Live Jira wins. Update the story file. |
| OTEP-130 (FormSG webhook / "already applied") | otg-lifecycle.md: full ACs, Sprint 4 | Deleted from Jira 2026-08-19; PRD: "no webhook confirmation at MVP" | Confirm the MVP boundary excludes the "already applied" state and all of tracking (US-14 to 17). |
| Search infra (open-items #16) | Feature shipped, 7 UAT cases pass | open-items #16 still 🔴 Open | The infra decision was made in practice but never written back. Close #16. |

## Documents this RTM could not incorporate (Confluence, not in the repo)

| Document | What it holds | Referenced at |
|---|---|---|
| The Confluence RTM | REQ-IDs, REQ-to-story-to-test mapping, the numbered open items (7, 11), REQ-20 / REQ-X2 status | prd-opportunities.md, 15+ times |
| Pow Hwee's "Coverage Targets" doc | Per-feature QA gaps, the drafted gap cases NEW-04..27 | prd-opportunities.md lines 190, 200, 201, 226 |
| Confluence "Success Criteria" appendix | The jobID/competency data bug "being investigated by Rama" | prd-opportunities.md lines 199, 311 |
| Epic one-pagers (Confluence) | Per-story-group one-pagers | every story-group file header (`_TODO: Confluence link_`) |
| Figma / Miro | Detail-page design, STIPs & Gigs flows | prd-opportunities.md lines 11, 17 |

Fill the six placeholder links in the story files and the PRD and this RTM can point at real sources instead of naming them.

---

## How to use this

1. **Reconcile the `PF-*` IDs** with the Confluence RTM's REQ-IDs. Where a `PF-*` row has no REQ-ID counterpart, that requirement may be missing from the real RTM.
2. **Work the ranked gap list.** Gaps 1 to 3 (apply flow, C@G handoff, category filter) are the ones that block a credible UAT sign-off for MVP.
3. **Resolve the status conflicts** before the RTM goes to anyone for a go/no-go call.
4. **Re-run this** after the story files are updated (OTEP-128 wording, OTEP-130 descope) so the draft and the story files stop disagreeing.
