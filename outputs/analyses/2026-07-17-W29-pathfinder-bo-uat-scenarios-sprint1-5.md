# BO UAT Test Scenarios — Pathfinder (Sprint 1–5 Shipped Scope)

**Audience:** Business Owners (Chris & XZ) — per UAT Plan Section 1, BOs execute test scenarios; Michelle (PM) writes/reviews them

**Source:** Live Jira pull, Sprints 1–5 (34598, 34616, 34617, 34618, 34619), Done + QA status only — pulled 2026-07-17

**Scope:** Pathfinder's two epics — Login, Opportunities Explore (Search)

**Format:** End-to-end business journeys, not per-ticket QA tests — a BO doesn't care that OTEP-85, OTEP-267, and OTEP-86 are three separate tickets; they care whether "find a job that fits me" works

---

## How this differs from the QA test-scenario docs

The two Sprint 5/6 docs already produced ([Sprint 5](2026-07-17-W29-pathfinder-sprint5-test-scenarios.md), [Sprint 6](2026-07-17-W29-pathfinder-sprint6-test-scenarios.md)) are per-story, engineering-facing: preconditions, steps, expected result, mapped to one Jira ticket's ACs. Good for a QA engineer verifying a single ticket closes correctly.

**This doc is different on purpose.** Per the UAT Plan's Section 5 gate ("Consolidated end-to-end scenario... linked to its Epic"), BOs test whole journeys that may cross 3-4 tickets. A BO scenario reads like a real officer's session, not a ticket checklist. Where a BO scenario touches multiple Jira IDs, they're all listed — that's a feature of this format, not a gap.

---

## What's actually testable today (Sprint 1–5 Done/QA only)

Sprint 1 was infrastructure only (auth stub, DB schema, seed data) — nothing user-facing to test. The real BO-testable surface starts at Sprint 2. Below, only **Done** and **QA** status stories are included. Anything still **In Progress** (login/WOG AD swap, keyword search, job family filter, C@G listing, tooltip explainer, Ministry icons, FormSG-missing-link handling) is Sprint 6 work-in-progress — excluded here, covered separately once it ships.

⚠️ **Login itself is not yet BO-testable end-to-end.** OTEP-305 (real WOG AD login/logout replacing the Keycloak stub) is still In Progress. Everything below assumes a BO can get into the app via whatever interim auth path Pow Hwee/Léo have running (Keycloak stub, per wog-authentication.md's "interim approach" decision) — flag this to Ram before Phase 0, since "logged-in officer" is a precondition for nearly every scenario here.

---

## Journey 1: Discover opportunities (browse, no search/filter)

**Business question this answers:** Can an officer land on OTEP and see relevant, correctly-sorted, real opportunities without doing anything else?

| # | Scenario | Steps | Expected result | Jira IDs |
|---|---|---|---|---|
| BO-1 | Officer sees the listing on first visit | Log in, land on listing page | Cards appear in a 3-column grid, up to 15/page, sorted newest-posted-first | OTEP-85 |
| BO-2 | Card shows the right basic info | View any card | Title, Agency, Posting Date (absolute format, e.g. "12 May 2026"), Type all visible | OTEP-85 |
| BO-3 | Closed opportunities don't appear in the listing | Listing includes an opportunity past its closing date | That opportunity is absent from the grid entirely | OTEP-85 |
| BO-4 | Paging through more than one screen | Listing has >15 opportunities | "Next"/"Previous" controls appear, page indicator shows "Page X of Y" | OTEP-267 |
| BO-5 | No pagination clutter when everything fits on one page | Listing has ≤15 opportunities | Pagination controls are hidden entirely, not just disabled | OTEP-267 |
| BO-6 | Nothing to show | No open opportunities exist at all | Clear "No opportunities available right now" message with supporting text/illustration — not a blank page | OTEP-268 |

---

## Journey 2: Narrow down to what's relevant (filter)

**Business question this answers:** Can an officer who only cares about, say, Gigs actually get to just Gigs — and get back to everything easily?

| # | Scenario | Steps | Expected result | Jira IDs |
|---|---|---|---|---|
| BO-7 | Filter to one opportunity type | Select "STIP" only | Listing shows only STIPs | OTEP-86 |
| BO-8 | Filter to multiple types at once | Select "STIP" + "Gig" together | Listing shows both types, nothing else | OTEP-86 |
| BO-9 | Filter combined with paging | Apply a filter, then page to page 2 | Filter stays applied across pages | OTEP-86 |
| BO-10 | Filtering to nothing | Apply a filter combination that matches zero opportunities | Same empty-state message as BO-6 | OTEP-86 + OTEP-268 |
| BO-11 | Clear all filters in one action | With filters active, click "Clear all" | All filters reset, full listing returns, "Clear all" option itself disappears once nothing's active | OTEP-317 |
| BO-12 | "Clear all" isn't cluttering the UI unnecessarily | No filters active | "Clear all" option is not shown | OTEP-317 |

---

## Journey 3: Get the full picture on a specific opportunity (detail page)

**Business question this answers:** Once an officer finds something interesting, does clicking in give them what they need to decide whether to apply?

| # | Scenario | Steps | Expected result | Jira IDs |
|---|---|---|---|---|
| BO-13 | View full opportunity details | Click a card from the listing | Detail page shows Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," Commitment type | OTEP-128 |
| BO-14 | Getting back to the listing | On a detail page | "Back to opportunities" link clearly visible and works | OTEP-128 |
| BO-15 | Sharing/bookmarking a specific opportunity | Save a detail page URL, revisit it directly (not via listing click) | Loads the correct opportunity directly | OTEP-128 |
| BO-16 | Broken or fake opportunity link | Access a detail URL with an invalid/nonexistent ID | "Opportunity not found" message, with a link back to the listing — not a broken page | OTEP-128 |
| BO-17 | Sharing a link to something that's since closed | Access a deep-link to an opportunity that's now past its closing date | "This opportunity is no longer available" message, link back to listing | OTEP-129 |
| BO-18 | Something closing soon is flagged clearly | View a card or detail page for an opportunity closing within 7 days | "Closing soon" badge visible in the same spot on both the card and the detail page | OTEP-284, OTEP-129 |
| BO-19 | No false urgency for open-ended postings | View an opportunity with no closing date | No "Closing soon" badge — evergreen listings shouldn't look urgent | OTEP-284 |

---

## Journey 4: Explore a Careers@Gov opportunity (deep-link path)

**Business question this answers:** Since C@G opportunities don't live natively in OTEP, does the handoff to the external site actually work and feel trustworthy?

| # | Scenario | Steps | Expected result | Jira IDs |
|---|---|---|---|---|
| BO-20 | View a C@G opportunity's details in OTEP | Click into a C@G-sourced opportunity | Title, agency, description, duration, and available structured fields shown — same visual layout as an OTG detail page | OTEP-89 |
| BO-21 | Responsibilities are intentionally not shown inline | View a C@G detail page where the source payload includes responsibility/pre-req info | That info is NOT shown in OTEP — officer is directed to click through to C@G to see it | OTEP-89 |
| BO-22 | Applying to a C@G opportunity | Click "Apply via Careers@Gov" | New tab opens, deep-links directly to that specific posting on the actual C@G site — not a generic C@G homepage | OTEP-89 |
| BO-23 | C@G opportunity no longer available after click-through | Click through to a C@G posting that's since been taken down on C@G's end | Handled entirely on C@G's side — OTEP shows no error state of its own | OTEP-89 |
| BO-24 | No confusing dual apply-paths for C@G | View a C@G detail page | Only the "Apply via Careers@Gov" CTA is shown — no FormSG or OTG-native apply option, since that's out of scope for C@G listings | OTEP-89 |

---

## Journey 5: Apply to an OTG opportunity (FormSG path)

**Business question this answers:** For the opportunities that live natively in OTEP, does clicking Apply actually get the officer to a working application form?

| # | Scenario | Steps | Expected result | Jira IDs |
|---|---|---|---|---|
| BO-25 | Apply to an Internal Job, STIP, or Gig | Click "Apply" on a valid detail page | Opens the opportunity's FormSG form in a new tab | OTEP-319 |
| BO-26 | Form opens correctly for the specific opportunity | Apply on two different opportunities | Each opens its own correct FormSG form, not a generic/shared one | OTEP-319 |
| BO-27 | Missing application link | Apply on an opportunity with no formsg_url configured | "Application form unavailable — contact the posting agency" shown in place of the Apply button — no broken button, no layout shift | OTEP-319 |
| BO-28 | FormSG itself is down or the form is closed | Click Apply where formsg_url exists but the destination form is closed/unavailable | Officer sees FormSG's own error page — OTEP does not attempt to intercept or show its own error | OTEP-319 |

---

## Journey 6: Access control — ringfencing (design/display contract only)

**Business question this answers:** Was the *decision* on how ringfencing should look and read to officers actually signed off, before engineering builds against it?

⚠️ **This is a spike/design decision, not a built feature yet.** OTEP-127 only defines *how* ringfencing should display (hide vs. disable, message copy) — the actual build (OTEP-408 BE, OTEP-409 FE) is separate and not yet in this scope. Flag as a **decision-review**, not a functional test.

| # | Scenario | What to confirm | Jira IDs |
|---|---|---|---|
| BO-29 | Ringfencing display rule was actually decided and signed off | Confirm with Michelle/Pow Hwee: was the hide-vs-disable choice and message copy formally BO-signed-off per open item #43, or does this still need a decision before OTEP-408/409 can be tested downstream? | OTEP-127 |

---

## Explicitly out of scope for this Sprint 1–5 BO pass

Don't write these up as defects if a BO stumbles into them — they're not built yet or deliberately excluded:

- **Real WOG AD login** — still Keycloak stub; OTEP-305 in progress (Sprint 6)
- **Keyword search** — OTEP-405, in progress (Sprint 6)
- **Filter by job family / WOG category** — OTEP-437, in progress (Sprint 6)
- **C@G opportunities appearing in the main listing** — OTEP-88, in progress (Sprint 6); today, C@G opportunities are only reachable if a BO has a direct link, not via browsing
- **Actual ringfencing enforcement (hiding/disabling for ineligible officers)** — OTEP-408/409, not yet started; only the design decision (OTEP-127) is done
- **FormSG full flow (webhook, submission tracking, notifications)** — OTEP-130, unconfirmed scope (your open item #57)
- **"Learn more about opportunity types" explainer** — OTEP-386, in progress
- **Ministry icons on detail page** — OTEP-283, in progress
- **Missing/broken FormSG link UI (the specific fallback message)** — OTEP-131, in progress — note this means BO-27 above may not actually be testable yet if OTEP-131's fallback message isn't deployed; confirm before running

---

## Coverage Matrix

| Journey | Happy Path | Edge Cases | Error Handling | Cross-ticket |
|---|---|---|---|---|
| 1. Discover (browse) | ✅ | ✅ | ✅ | OTEP-85, 267, 268 |
| 2. Filter | ✅ | ✅ | ✅ | OTEP-86, 317, 268 |
| 3. Detail page | ✅ | ✅ | ✅ | OTEP-128, 129, 284 |
| 4. C@G deep-link | ✅ | ✅ | ✅ | OTEP-89 |
| 5. FormSG apply | ✅ | — | ✅ | OTEP-319 |
| 6. Ringfencing decision | N/A — decision review only | — | — | OTEP-127 |

---

## Recommendation for sequencing with BOs

Run Journeys 1→2→3 first (they're the core "find something" loop and have zero open questions blocking them). Journey 4 (C@G) and 5 (FormSG apply) next — both fully shipped, no blockers. Journey 6 isn't a test at all; flag it to Ram as a decision-confirmation checkbox rather than putting it on the BO's plate.

Once Sprint 6 lands (login swap, search, job-family filter, C@G-in-listing), extend this doc with those journeys rather than starting a new one — BOs shouldn't have to context-switch between "Sprint 5 scenarios" and "Sprint 6 scenarios" when it's one continuous product experience to them.

---

*Generated: 2026-07-17*
*Companion to: [UAT Plan Overview (Draft)](../../context-library/prds/) review, [Sprint 5](2026-07-17-W29-pathfinder-sprint5-test-scenarios.md) and [Sprint 6](2026-07-17-W29-pathfinder-sprint6-test-scenarios.md) engineering-facing test scenarios*
*Next: Confirm login path for BO testing with Ram before Phase 0; confirm OTEP-127's sign-off status; extend with Sprint 6 journeys once those stories close*
