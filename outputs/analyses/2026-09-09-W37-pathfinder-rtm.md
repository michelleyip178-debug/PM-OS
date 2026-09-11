---
title: Pathfinder Requirements Traceability Matrix — Opportunities and WOG AD Authentication
date: 2026-09-09
owner: Michelle Yip
status: Draft for review
---

# Pathfinder RTM — Opportunities and WOG AD Authentication

A requirement-by-requirement traceability matrix for the two Pathfinder epics. Each row maps one capability to its source, its Jira story, its acceptance criteria, the UAT case that verifies it, current status, and any open gap.

> **Note on method.** This is rebuilt from the story files, the two PRDs, the CC-UAT board (synced 9 Sep), and the open-items log, pending reconciliation with the Confluence RTM. The `PF-*` requirement IDs are placeholders to be mapped onto the Confluence REQ-IDs. "Verified" means a signed-off UAT case exists on the board.

## Column key

| Column | Meaning |
|---|---|
| Req ID | Placeholder requirement identifier, to be mapped to Confluence REQ-IDs |
| Requirement | One testable capability the system must deliver |
| Source | PRD section, story file, dated decision, or Slack confirmation |
| Story (Jira) | The story that delivers it. Struck text = absorbed, superseded, or deleted |
| Acceptance criteria | The must-have ACs that define done, abbreviated |
| UAT case(s) | CC-UAT board tickets that verify it. "—" means none found |
| Status | Build and verification state |
| Gap / open item | What is missing, undecided, or inconsistent |

Status legend: ✅ built and verified · 🟡 built, partial or indirect verification · 🔴 not built or not verified

---

# Epic 4: Opportunities

## Discovery and listing

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-01 | Officer sees open opportunities as a card grid, newest first, all types interleaved | PRD US-01a; OTEP-85 | OTEP-85 (absorbs OTEP-85a, OTEP-129) | Cards show title, agency, posting date, type; only opportunities with closing date today or later; newest first, ties by opportunity ID; 15 per page, 3 columns on desktop; text type label, not colour alone | UAT-OPP-001, 002, 003 | ✅ | Good-to-have ACs (ministry icon, title truncation, stable same-day order) not separately traced to a case |
| PF-OPP-02 | "Closing soon" label on cards and detail page within 7 days | OTEP-85a (re-absorbed into OTEP-85); PRD OTEP-128 row | OTEP-85 | Label if closing date is within 7 days; none beyond 7 days; still shows if closing today; same label on the detail page; text not colour alone; distinct from the type label | UAT-OPP-018, 019 | ✅ | 7-day boundary inclusivity not spelled out in the AC; UAT-OPP-018 assumes inclusive |
| PF-OPP-03 | Pagination for the listing | OTEP-267 | OTEP-267 | Next and previous when more than 15; page indicator; controls hidden at zero results; no duplicates across pages; Next and Prev disabled at exactly 15 | UAT-OPP-004, 005 | ✅ | Middle and last-page no-duplicate check is a subtask test, not a UAT case |
| PF-OPP-04 | Empty and error states for the listing | OTEP-268 (re-added by Pow Hwee, 18 May) | OTEP-268 | Zero results, "No opportunities available right now", no retry; load failure, "We couldn't load opportunities" plus a "Try again" button that re-fetches; never a blank screen | UAT-OPP-006 | 🟡 | The failure state (500, "Try again") has no dedicated Pathfinder UAT case; UAT-OPP-006 covers the empty state only |
| PF-OPP-05 | Click-through to detail and return to the same listing page | OTEP-285; PRD note "OTEP-285 absorbed into OTEP-128" | OTEP-285, absorbed into OTEP-128 | Card click opens that detail page; return via the back link or the browser back button lands on the same page, not page 1; ordering stable across pages | UAT-OPP-001 path plus UAT-OPP-013 and 015 (detail render) | 🟡 | Return-to-page state and filter or scroll preservation is not the subject of any single UAT case. Flagged in the story file as the highest-risk item in Sprint 2 |
| PF-OPP-06 | Listing requires authentication; unauthenticated user is redirected to login | PRD US-01a; auth route-guard NFR | OTEP-85 plus OTEP-594 routing | An unauthenticated request to the listing does not render opportunities; the officer is sent to WOG AD login | E2E OTEP-1174, step 2 | ✅ | Shared with PF-AUTH-10 (route guard); one E2E covers both |

## Search

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-07 | Keyword search across title, agency, description | PRD US-02 (OTEP-405) | OTEP-405 | Search field on the listing page above filters; queries title, agency, description; results on submit, no typeahead; zero-results state with a prompt to broaden; works with filters; partial-match and minor-typo tolerant | UAT-SEARCH-001, 002, 003, 009, 011, 015 | ✅ | Board numbering gaps: SEARCH-005, 010, 012, 013, 014 absent. The only description case (015) checks the absence of a snippet, not that a description match returns a result. Confirm description-field matching is covered |
| PF-OPP-08 | Search combines correctly with active filters | PRD US-02 | OTEP-405 plus OTEP-86 | A filter applied after a search narrows the search results; clearing the search respects active filters; clearing with no filters restores the full list | UAT-SEARCH-006, 007, 008 | ✅ | — |
| PF-OPP-09 | Search infrastructure: indexing and refresh | open-items #16 (Pow Hwee) | OTEP-405 | "Elastic, partial matches and minor typos return relevant results" | UAT-SEARCH-002 indirectly | 🟡 | open-items #16 (search indexing provisioning and refresh strategy) is still open in the log. The feature shipped and passed UAT; the infra decision was never written back |

## Filters and categorisation

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-10 | Filter by opportunity type, multi-select | PRD US-03; OTEP-86 | OTEP-86 | Filter by Internal Job, SJR, STIP/Gig (Secondment under SJR); multi-select shows the union; no filter means all types; zero match, "No opportunities found" | UAT-OPP-007, 008, 010 | ✅ | Good-to-have (filter state in URL params, survives browser back) traced to UAT-OPP-009 but not to a back-button case |
| PF-OPP-11 | Active filter persists across pagination | OTEP-86 good-to-have | OTEP-86 | Moving between pages keeps the active filter applied | UAT-OPP-009 | ✅ | Cross-session persistence is R1 (US-07), correctly out of scope |
| PF-OPP-12 | "Clear all" resets every active filter in one action | PRD US-05; OTEP-317 | OTEP-317 (was US-05) | "Clear all" visible only when filters are active; one click removes all selections and restores the full listing; hidden when no filters active | UAT-OPP-011, 012 | ✅ | — |
| PF-OPP-13 | Filter by job family / WOG category | PRD US-03 (OTEP-437); OTEP-318 superseded by OTEP-437 | OTEP-437 (~~OTEP-318 deleted from Jira, 27 Jul~~) | Filter by WOG job category or family; C@G Indus taxonomy as the canonical layer; legacy OTG job-family codes consolidated; custom DB mapping table covers families not in ref_job_family | UAT-JF-001, 002, 009, 010, 011 | 🟡 | PRD Section 10 says the category filter "sits in QA with zero cases written", 14 drafted gap cases (NEW-04..17). The 5 UAT-JF cases verify the taxonomy mapping, not the filter interaction. Confirm which the existing cases cover |
| PF-OPP-14 | Category filter spike outcome feeds OTEP-437 | OTEP-289 spike definition | OTEP-289 (spike, done) | The spike defines the categorisation model that OTEP-437 builds against | — (spike) | ✅ | — |

## Opportunity detail page

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-15 | Detail page shows all mandatory opportunity fields | PRD US-04 and US-05 (OTEP-128); OTEP-128 | OTEP-128 | Title, agency, type, posting date, closing date, description, "What you'll develop"; absolute dates, not relative; "Not specified" for a missing mandatory field (per live Jira, supersedes the story file's "page doesn't render") | UAT-OPP-013 plus 8 Gherkin scenarios in the OTEP-128 ticket comments | ✅ | Story file and live Jira disagree on missing-field behaviour. Live Jira wins; update the story file |
| PF-OPP-16 | Detail page loads via direct, bookmarked, or shared URL | OTEP-128; PRD OTEP-128 row | OTEP-128 | A shared link opens the detail page directly; the back link works even when the officer did not arrive from the listing | UAT-OPP-015 | ✅ | — |
| PF-OPP-17 | Unauthenticated deep-link, login, then redirect to that opportunity | Slack (Hao Eng Chua and Léo, 2 Jul); AC amendment 2 Jul | OTEP-128 (amended) | An unauthenticated deep-link sends the officer to WOG AD login, then straight to that specific opportunity's detail page, not the listing | E2E OTEP-1174, step 3 | ✅ | PRD flags: verify the built behaviour redirects post-login to the opportunity, and confirm the Jira AC text was amended. E2E OTEP-1174 confirms the behaviour |
| PF-OPP-18 | Invalid or nonexistent opportunity ID, clean error state | OTEP-128 edge cases; live Jira | OTEP-128 | Invalid ID, "Something went wrong" message plus a "Refresh" button (live Jira wording, supersedes "Opportunity not found"); no stack trace; the officer stays logged in | UAT-OPP-016 | ✅ | Story file still says "Opportunity not found". Reconcile |
| PF-OPP-19 | Deep-link to a closed opportunity, closed-state message | OTEP-128; live Jira | OTEP-128 | Page loads, not a 404; "This opportunity is no longer available" notice; link back to the listing; no apply action | UAT-OPP-017 | ✅ | Whether the closed page still shows the opportunity's own fields alongside the notice is undecided |
| PF-OPP-20 | Soft-deleted opportunity deep-link behaviour | OTEP-128 ("deep-links valid as long as active, not closed or soft-deleted") | OTEP-128 | A deep-link to a soft-deleted opportunity does not render a live applyable page | — | 🟡 | Soft-deleted is grouped with "closed" in the story file but the notices differ and no UAT case isolates the path |
| PF-OPP-21 | Loading state while the detail page fetches | OTEP-128 ("spinner, not a blank page") | OTEP-128 | A spinner shows while loading; the error state does not flash before content arrives on a slow connection | — | 🟡 | No UAT case for the loading state. Minor |
| PF-OPP-22 | GET /opportunities/:id API contract | OTEP-128 "API contract intent" | OTEP-128 subtask 1 (backend) | Single opportunity object with all detail fields; 200 found, 404 not found, 500 server error; closed opportunities still return 200 with data; an unauthenticated call does not return data | — | 🟡 | The contract is verified only through the UI. No direct contract test on the board. Engineering-owned |
| PF-OPP-23 | Type label on the detail page matches the listing card | OTEP-128 good-to-have; PRD | OTEP-128 | The type label wording and styling on the detail page match the same opportunity's listing card | Covered inside UAT-OPP-013 assertions | 🟡 | Not isolated; label parity across all MVP types is not its own case |

## OTG application lifecycle

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-24 | Apply CTA on the detail page for Internal Job, STIP, Gig | OTEP-87; PRD OTEP-128 row | OTEP-87 (builds on OTEP-128) | A clear "Apply" button for Internal Job, STIP, Gig; no apply action for SJR; no apply button when the opportunity is closed | — | 🔴 | No UAT case verifies the enabled Apply CTA. Coverage gap on the apply flow |
| PF-OPP-25 | "Apply" redirects to the opportunity's FormSG form in a new tab | OTEP-319 (formsg_url confirmed 21 May) | OTEP-319 (was US-18) | Clicking Apply on an Internal Job, STIP, or Gig opens that opportunity's FormSG form in a new tab; a missing formsg_url shows "Application form unavailable, contact the posting agency"; no Apply on SJR | — | 🔴 | No UAT case. The redirect is untested on the board. Coverage gap |
| PF-OPP-26 | OTEP becomes aware of a FormSG submission, "You've applied" state | OTEP-130 | ~~OTEP-130~~ (deleted from Jira, 19 Aug) | After submission and return, a "You've applied" indicator with the submit date; the Apply button is gone; if no webhook within roughly 30 seconds, "Submitted via FormSG, check My Applications"; state persists across sessions | — | 🔴 | Removed from Sprint 4 scope (10 Jun): webhook is not a must-have, tracking is R1. PRD: "FormSG remains the completion channel with no webhook confirmation at MVP." Confirm this is the intended MVP boundary |
| PF-OPP-27 | POST /api/formsg/webhook inbound contract | OTEP-130 "API contract intent" | ~~OTEP-130~~ | Payload with opportunity_id, officer_id, submitted_at, form_response_id; 200 success, 400 malformed, 500 logged; stores the application record; GET /opportunities/:id returns officer_applied | — | 🔴 | Not built for MVP. R1 concern |

## Application status tracking

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-28 | "My Applications" list of OTG submissions | US-14 | US-14 (not ticketed) | Each submission with title, agency, submit date, current status; an empty state that guides to browse; newest first | — | 🔴 | The tracking group depends on OTEP-130's application record, which was descoped. Tracking is R1. Confirm the group is out of MVP scope |
| PF-OPP-29 | Individual application status detail | US-15 | US-15 (not ticketed) | Full detail: opportunity summary, submit date, current status, status-change history; the latest status, not stale; final states clearly marked | — | 🔴 | R1. Status source of truth still undecided (tracking open question 1) |
| PF-OPP-30 | In-app notification when status changes | US-16 | US-16 (not ticketed) | A badge on "My Applications"; affected applications highlighted when opened. Email or push is R1 | — | 🔴 | R1 |
| PF-OPP-31 | Withdraw an OTG application | US-17 | US-17 (not ticketed) | A confirmation step before withdrawing; from Submitted or Under Review only; "Withdrawn" is final; the option is hidden once accepted or rejected | — | 🔴 | R1 |

## Careers@Gov deep-link handoff

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-32 | C@G opportunities appear in the listing alongside OTG, interleaved | OTEP-88; PRD OTEP-85 | OTEP-88 | C@G and OTG cards appear together, interleaved by date; the "Careers@Gov" badge on C@G cards only; OTG cards never carry the badge; C@G card layout matches OTG; pagination applies across the combined set | UAT-OPP-025, 026, 027, 028, 029 | ✅ | — |
| PF-OPP-33 | C@G opportunity summary view on OTEP | OTEP-89 | OTEP-89 | The summary shows title, organisation, job function, employment type, experience level; the officer can see that applying goes to Careers@Gov, not an OTEP form; an expired C@G listing shows "no longer available" | — (touched by UAT-OPP-025 and 028) | 🟡 | No UAT case isolates the C@G summary view and its field set. PRD Section 10: "C@G apply flow has zero QA test coverage, the dedicated QA page is empty", 10 drafted gap cases (NEW-18..27). Coverage gap |
| PF-OPP-34 | Redirect to the specific C@G listing to apply | OTEP-133 | ~~OTEP-133~~ (done, absorbed into OTEP-390, 5 Jun) | "Apply on Careers@Gov" opens that specific C@G listing in a new tab; a "leaving OTEP" notice before redirect; a broken or expired deep-link shows a fallback message | — | 🔴 | OTEP-133 marked done but its scope was absorbed into OTEP-390. The redirect action itself has no UAT case. Part of the C@G coverage gap |
| PF-OPP-35 | Officer can tell OTG ("Apply") from C@G ("Apply on Careers@Gov") | OTEP-88 | OTEP-88 | The button or text makes the apply destination clear on any opportunity; C@G cards carry a visible external indicator before the officer clicks | UAT-OPP-026 (partial) | 🟡 | The badge is verified; the button-text differentiation on the detail page is not isolated |

## Ringfencing

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-36 | Listing shows only opportunities the officer is eligible for | PRD US-01b; PRD "Epic: Ringfencing" | OTEP-127 (spike, done); OTEP-408 (backend filter), OTEP-409 (frontend reflect) | Must be logged in; ringfencing applies to all listed opportunities per the officer's POCDEX data at login; a transfer refreshes eligibility on the next login; Master Switch off shows all regardless of include or exclude rules | E2E OTEP-975 (by agency), OTEP-1301 (by job function), OTEP-1302 (by job family, detail page) | ✅ | — |
| PF-OPP-37 | Ineligible officer sees a distinct ringfenced state on the detail page, including via deep-link | PRD "Epic: Ringfencing"; OTEP-390 (absorbs OTEP-133 EDM entry path) | OTEP-390 | An eligible officer sees the normal detail page; an ineligible officer sees "This opportunity isn't available based on your current profile. Explore other opportunities that may be a better match." plus an "Explore opportunities" button; the same block via direct navigation and via deep-link | E2E OTEP-975 step 2, OTEP-1301 step 3, OTEP-1302 step 2 | ✅ | — |
| PF-OPP-38 | Ringfencing correctness against incomplete or partial POCDEX profile data | PRD Section 10; scoping-gaps #14 | OTEP-408 | An officer with partial or missing POCDEX agency or job-family data does not silently get wrong access | — | 🔴 | PRD: "no test case exists yet, reserve 3 ringfencing personas: eligible, ineligible, incomplete-profile." Only eligible and ineligible are covered. The incomplete-profile persona is not built or tested |
| PF-OPP-39 | Ringfenced Internal Jobs pinned to the top for eligible officers | PRD US-01a AC | OTEP-85 and OTEP-409 | An eligible officer sees ringfenced Internal Jobs at the top of the listing | — | 🟡 | No UAT case isolates the pin-to-top ordering rule |

## Competency match signal (confirmed MVP, 27 Jul)

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-OPP-40 | Competency match count on Gig and STIP listing cards | PRD OTEP-336 and 570 row | OTEP-336 (backlog as of 27 Jul) | A match count ("1/2 competencies matched") renders on Gig and STIP cards when the officer's competency profile is retrieved | E2E OTEP-1004 | 🟡 | PRD says backlog; a signed-off E2E exists. Status conflict, see the conflicts table |
| PF-OPP-41 | Per-competency match state in "What you'll develop" on the detail page | PRD OTEP-336 and 570 row | OTEP-570 (backlog as of 27 Jul) | The detail page shows per-competency have or don't-have states, not a flat list; a C@G opportunity with no competency data never shows a match count | E2E OTEP-1004 | 🟡 | Same conflict. Blocking dependency per PRD: REQ-X2 (competency-to-opportunity agency-code resolution) unresolved, called "a real MVP blocker" |
| PF-OPP-42 | Duplicated competency names must not appear on the detail page | CC-UAT OTEP-1339 | OTEP-1339 (bug, done) | No duplicate competency names on the opportunity detail page | OTEP-1339 | ✅ | — |

---

# Epic 5: WOG AD Authentication

The auth epic is at draft stage, deferred from Sprint 3 to Sprint 4 or later (21 May) because there was no WOG AD UAT environment (open-items #26). One Pathfinder E2E (OTEP-1174) now exists and is signed off, so the happy path built and passed since then. Individual story status below is inferred and low-confidence.

| Req ID | Requirement | Source | Story (Jira) | Acceptance criteria | UAT case(s) | Status | Gap / open item |
|---|---|---|---|---|---|---|---|
| PF-AUTH-01 | One-click login with WOG AD credentials | OTEP-71; prd-auth.md; GOALS Goal 1 | OTEP-71 (absorbs WOG-11) | "Log in with WOG AD" lands on the OTEP home page, no manual credential entry; identity is government email plus SOE-ID from AD; no separate registration step | E2E OTEP-1174 step 1 | ✅ | AD returning email and SOE-ID only is an assumption in the story, not confirmed |
| PF-AUTH-02 | Specific error messages when login fails | OTEP-110 (absorbs WOG-12, WOG-13) | OTEP-110 | Incorrect credentials, "Incorrect credentials. Please try again."; locked account, a helpdesk message; disabled account, a distinct inactive message; AD unreachable, "Service temporarily unavailable"; a timeout resolves within a defined wait, not an indefinite hang | — | 🔴 | No Pathfinder UAT case for login-failure states. Copy needs compliance sign-off before build. Coverage gap |
| PF-AUTH-03 | Login errors must not reveal whether an account exists | OTEP-110 NFR (from WOG-15) | OTEP-110 | An unknown identity and a valid identity with a wrong password produce the same message and a consistent response time; no AD detail, stack trace, or account-status field exposed | — | 🔴 | Security NFR, no test case. The timing side-channel check is unverified. Coverage gap |
| PF-AUTH-04 | Officer routed to the correct page after auth | OTEP-594 (live Jira, 2 Jul) | OTEP-594 (depends on OTEP-111 and OTEP-350; blocks OTEP-71) | Pilot agency plus active POCDEX profile, the Profile page; not a pilot agency, the unauthorised page; pilot agency but no POCDEX profile yet, a system-error page, not the generic unauthorised page; deactivated profile, the unauthorised page; a failed WOG AD login, AD's own error, not intercepted | E2E OTEP-1174 (happy path only) | 🟡 | Only "pilot agency plus profile, home" is verified. The other branches are not, and decisions 7, 8, 9 in the auth story are open. Coverage gap on the non-happy branches |
| PF-AUTH-05 | Unauthorised page for officers with no access | OTEP-111 (live Jira, 2 Jul) | OTEP-111 | Not from a pilot agency, the unauthorised page; pilot agency but no POCDEX profile and not the timing case, the unauthorised page; deactivated POCDEX profile, the unauthorised page; page copy "Oops, you do not seem to have access at the moment. Please contact your HR for more information."; the page does not expose which check failed | OTEP-1379 and 1380 (Core-tagged, not Pathfinder) | 🟡 | The routing outcomes are tested under the Core team's POCDEX cases, not a Pathfinder case. The "was authorised, now isn't" deactivation transition has no AC yet (decision 10) |
| PF-AUTH-06 | Pilot agency plus no POCDEX profile yet, a temporary system-error message | OTEP-594 "new scenario" (Squad Sync) | OTEP-594 (new scenario) | Not the generic "no access" message; copy makes clear it is temporary (proposed: "Sorry the system is still onboarding your details, try logging in again in 2 days"); the case is auto-logged in the background, no manual "report issue" | — | 🔴 | Decisions 8 (the 2-day POCDEX lag assumption, and whether Core has a screen) and 9 (auto-log owner) are open. Undecided and untested |
| PF-AUTH-07 | Resolve the officer's agency from their AD identity | WOG-10 | WOG-10 | The agency is resolved automatically from the WOG AD identity, no manual entry; the same value drives the access check; an unresolvable agency gives a clear block | — | 🔴 | Decision 2 (agency-resolution source: email domain, SOE-ID prefix, or lookup table) still open. Undecided |
| PF-AUTH-08 | Stay logged in during an active session; idle timeout | OTEP-304 (was WOG-04) | OTEP-304 | Navigating between pages keeps the session; idle beyond a set period expires the session and redirects to login; an action on an expired session shows "Session expired, please log in again", not a blank page | — | 🔴 | The idle-timeout value (decision 1) is a government compliance policy, still unknown. Built with a placeholder; rework likely. Undecided |
| PF-AUTH-09 | Log out of OTEP | OTEP-305 (was WOG-05) | OTEP-305 | "Log out" ends the session and returns to login; the browser back button after logout goes to login, not OTEP; typing any OTEP URL after logout goes to login | E2E OTEP-1174 step 4 | ✅ | Browser-back-after-logout and direct-URL-after-logout are asserted by the story but only the basic logout step is in the E2E |
| PF-AUTH-10 | No session starts on manual URL navigation while unauthenticated | OTEP-594 AC (Squad Sync, route-guard NFR, decision 11) | OTEP-594 | Typing any OTEP URL while not logged in and authorised starts no session and redirects to login | E2E OTEP-1174 step 2 | ✅ | Shared with PF-OPP-06. Decision 11 asks that this be captured as a route-guard NFR across all pages, not one ticket. Confirm it is recorded |
| PF-AUTH-11 | Complete logout on shared government devices | WOG-17 | WOG-17 | After logout on a shared device the next person sees the login page, no cached OTEP content, no access to the previous officer's data; session tokens, service workers, and background processes invalidated on logout | — | 🔴 | No UAT case. High rework cost if the session architecture did not account for this. Coverage gap |
| PF-AUTH-12 | First-time login: capture the officer's name | WOG-06 | WOG-06 | A first login with no OTEP profile for this SOE-ID shows a profile-setup screen before the home page; email pre-filled; name required; every later login skips the screen; an incomplete name entry returns the officer to setup on the next login | — | 🔴 | If POCDEX can pre-populate name from SOE-ID (OTEP-183 spike), this story collapses to zero. Decision 5 (mandatory field is name only) still open. May not be needed; undecided |
| PF-AUTH-13 | Rate limiting and account lockout ownership | WOG-14 (spike) | WOG-14 (convert to spike, decision 3) | Confirm whether WOG AD already enforces lockout and rate limiting; OTEP builds nothing if it does | — | 🔴 | Standing assumption: WOG AD handles password management, MFA, and account lockout. Decision 3 (Pow Hwee) unconfirmed in the log |
| PF-AUTH-14 | Concurrent sessions policy | WOG-18 (decision 4) | none (policy decision, no ticket) | Default: allow multiple concurrent sessions, each respecting the idle timeout independently | — | 🟡 | Record the one-line decision in the decisions log; confirm it was recorded. No feature to test |
| PF-AUTH-15 | Agency admin login and RBAC | WOG-02, WOG-07 | WOG-02, WOG-07 | Deferred to Sprint 6: admin recognised from the WOG AD role; admin navigation and features; officers cannot reach admin-only pages; a role change is reflected on the next login | — | 🔴 | Correctly out of MVP scope (decision 12 May). Listed for completeness |

---

# Coverage summary

## Verified

| Area | Requirements | UAT verification |
|---|---|---|
| Listing: grid, sort, pagination, empty state, "Closing soon" | PF-OPP-01 to 03, 04 (partial) | UAT-OPP-001 to 006, 018, 019 |
| Search | PF-OPP-07, 08 | UAT-SEARCH-001 to 009, 011, 015 |
| Type filters and "Clear all" | PF-OPP-10 to 12 | UAT-OPP-007 to 012 |
| Job-family taxonomy mapping | PF-OPP-13 (taxonomy layer) | UAT-JF-001, 002, 009, 010, 011 |
| Detail page: render, deep-link, closed and invalid states | PF-OPP-15 to 19 | UAT-OPP-013, 015, 016, 017, 8 Gherkin scenarios, E2E OTEP-1174 |
| C@G and OTG combined listing | PF-OPP-32 | UAT-OPP-025 to 029 |
| Ringfencing: eligible vs ineligible, 3 filter dimensions | PF-OPP-36, 37 | E2E OTEP-975, 1301, 1302 |
| Competency match display | PF-OPP-40 to 42 | E2E OTEP-1004, bug OTEP-1339 |
| Auth: login, route, logout, route guard (happy path) | PF-AUTH-01, 04 (partial), 09, 10 | E2E OTEP-1174 |

## Coverage gaps, ranked

| # | Gap | Requirements | Why it matters | Action |
|---|---|---|---|---|
| 1 | Apply flow has no UAT coverage | PF-OPP-24, 25 | The enabled Apply CTA and the FormSG redirect are core MVP value ("OTG full lifecycle end to end") and nothing on the board tests them | Confirm whether apply-flow UAT cases exist outside CC-UAT; if not, write them before UAT sign-off |
| 2 | C@G detail and handoff has zero QA coverage | PF-OPP-33, 34, 35 | The dedicated QA page is empty; 10 gap cases (NEW-18..27) drafted, not confirmed run; a P0 officer-facing feature | Prioritise NEW-18..27 |
| 3 | Category-filter interaction untested | PF-OPP-13 | OTEP-437 "sits in QA with zero cases"; 14 gap cases (NEW-04..17) drafted. The 5 UAT-JF cases verify the taxonomy, not the filter | Prioritise NEW-04..17; confirm what the existing cases cover |
| 4 | Ringfencing incomplete-profile persona not built or tested | PF-OPP-38 | Silent wrong-access at scale is the failure mode; only eligible and ineligible personas exist | Build and reserve the incomplete-profile persona in the UAT dataset |
| 5 | Auth failure and security NFRs untested | PF-AUTH-02, 03, 11 | Login-failure copy, account non-enumeration, and shared-device logout are government security requirements with no test case | Add UAT cases once compliance signs off the error copy |
| 6 | Auth non-happy routing branches untested | PF-AUTH-04, 05, 06 | Only "pilot agency plus profile, home" is verified; unauthorised, deactivated, and "no profile yet" are not, and decisions 7, 8, 9 are open | Close decisions 7, 8, 9, then add branch UAT cases |
| 7 | Return-to-same-page state not isolated | PF-OPP-05 | Flagged as the highest-risk story in Sprint 2; absorbed into OTEP-128 and covered only incidentally | Add a UAT case for return-to-page plus filter and scroll preservation |
| 8 | Detail-page API contract not directly tested | PF-OPP-22 | GET /opportunities/:id (200, 404, 500, auth, closed-still-returns-200) is verified only through the UI | Engineering-owned; add a contract test |
| 9 | Soft-deleted and loading states not isolated | PF-OPP-20, 21 | Minor, but grouped-with-closed behaviour and the loading spinner have no dedicated case | Low priority; add if time allows |

## Status conflicts to reconcile against the Confluence RTM

| Item | Repo says | Also says | Reconcile |
|---|---|---|---|
| OTEP-336 and 570 (competency match) | PRD scope table (27 Jul): "backlog", "confirmed MVP scope" | A signed-off E2E (OTEP-1004) exists | Built or backlog? The passing E2E suggests built. The PRD says correct REQ-20 in the RTM, which wrongly shows done |
| REQ-X2 (competency-to-opportunity agency-code resolution) | PRD Section 10: "unresolved, a real MVP blocker" | E2E OTEP-1004 passed | If REQ-X2 is unresolved, how did the E2E pass? Check whether it used seeded data that sidesteps the unresolved logic |
| OTEP-128 missing-mandatory-field behaviour | Story file: "page doesn't render" | Live Jira and UAT: "Not specified" fallback | Live Jira wins. Update the story file |
| OTEP-128 invalid-ID copy | Story file: "Opportunity not found" | Live Jira and UAT-OPP-016: "Something went wrong / Refresh" | Live Jira wins. Update the story file |
| OTEP-130 (FormSG webhook, "already applied") | Story file: full ACs, Sprint 4 | Deleted from Jira 19 Aug; PRD: "no webhook confirmation at MVP" | Confirm the MVP boundary excludes the "already applied" state and all of tracking (US-14 to 17) |
| Search infra (open-items #16) | Feature shipped, 7 UAT cases pass | open-items #16 still open | The decision was made in practice but never written back. Close #16 |

## Source documents this RTM could not incorporate

All in Confluence, referenced by the repo but not linked.

| Document | What it holds |
|---|---|
| The Confluence RTM | REQ-IDs, the REQ-to-story-to-test mapping, the numbered open items (7, 11), REQ-20 and REQ-X2 status |
| Pow Hwee's "Coverage Targets" doc | Per-feature QA gaps, the drafted gap cases NEW-04..27 |
| Confluence "Success Criteria" appendix | The jobID and competency data bug under investigation |
| Epic one-pagers | Per-story-group one-pagers, one per group |
| Figma and Miro | Detail-page design, STIPs and Gigs flows |

Filling the placeholder links in the story files and the PRD lets this RTM point at real sources rather than name them.

---

# Recommended next steps

1. Map the `PF-*` IDs onto the Confluence RTM's REQ-IDs. A `PF-*` row with no counterpart is a requirement missing from the real RTM.
2. Work gaps 1 to 3: apply flow, C@G handoff, category filter. These block a credible UAT sign-off for MVP.
3. Resolve the six status conflicts before this goes to a go or no-go call.
4. Update the story files (OTEP-128 wording, OTEP-130 descope) so the RTM and the story files stop disagreeing, then refresh this draft.
