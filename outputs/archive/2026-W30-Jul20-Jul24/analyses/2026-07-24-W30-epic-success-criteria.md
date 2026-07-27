---
date: 2026-07-24
week: 2026-W30
topic: Success Criteria for Epic 1-Pagers — Opportunities (Pathfinder)
status: draft — for Adrian, requested on DOs call 2026-07-23
---

# Success Criteria for Epic 1-Pagers — Opportunities

**Requested by:** Adrian Ang, DOs call 2026-07-23 — "document standard success criteria + edge case/data success criteria in epic 1-pagers"

**Format:** Per feature/epic, two tiers:
- **Standard success criteria** — the happy-path outcome that proves the feature does its core job
- **Edge case / data success criteria** — the boundary conditions and data states that must also hold, separate from the happy path because they usually get missed if only the standard criteria are checked

**Source:** Requirement IDs and Jira references pulled from the [Opportunities Requirements Traceability Matrix](2026-07-23-W30-opportunities-requirements-traceability-matrix.md) and the [Consolidated Test Plan](2026-07-24-W30-consolidated-test-plan.md). This is meant to be copy-pasted into each feature's epic 1-page doc, not read standalone.

---

## Epic: Opportunities Listing (OTEP-85, 267, 268)

**Standard success criteria:**
- An officer logs in and sees a 3-column grid of open opportunity cards, sorted newest-first, up to 15 per page.
- Each card shows Title, Agency, Posting Date (absolute format), and Type.
- Pagination controls appear only when there are more than 15 open opportunities.

**Edge case / data success criteria:**
- Closed opportunities never appear in the listing, regardless of how recently they closed.
- With exactly 15 or fewer opportunities, pagination controls are fully absent (not shown-but-disabled).
- With zero open opportunities, the officer sees a clear "no opportunities available" message — not a blank page or error.
- Data dependency: listing data must carry accurate `closing_date` values; a stale or missing closing date silently breaks the closed-opportunity exclusion rule above.

---

## Epic: Filtering (OTEP-86, 317, 318)

**Standard success criteria:**
- Selecting a single opportunity type (Jobs, STIPs, Gigs) narrows the listing to only that type.
- Selecting multiple types shows the union of those types.

**Edge case / data success criteria:**
- An active filter persists correctly when the officer pages forward/backward.
- A filter combination matching zero opportunities shows the same empty state as the zero-results listing case, not a broken or blank view.
- "Clear all" resets every active filter in one action and disappears from view once nothing is filtered.
- "Clear all" must not appear at all when no filters are active.
- Data dependency: filter-by-category (OTEP-318) has no ACs written yet — success criteria for this can't be finalized until scope is confirmed.

---

## Epic: Search (OTEP-405)

**Standard success criteria:**
- Search returns opportunities matching the entered keyword, case-insensitive, including partial matches.
- Search UI is placed consistently and doesn't shift other page layout.

**Edge case / data success criteria:**
- A search with zero matches shows the standard empty state, not an error.
- Search combined with an active filter returns the intersection of both, not just one or the other.
- Data dependency: search relies on OTG opportunity data carrying complete, correctly-indexed title/description fields — incomplete OTG payloads will silently produce false negatives, not visible errors.

---

## Epic: Opportunity Detail Page (OTEP-128, 129, 284)

**Standard success criteria:**
- Clicking into an opportunity from the listing shows full detail: Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," Commitment type.
- "Back to opportunities" returns the officer to the listing.
- The detail page loads correctly via a direct or bookmarked URL, not only via listing click-through.

**Edge case / data success criteria:**
- An invalid or nonexistent opportunity ID shows a clean "not found" state with a link back to the listing — never a broken page.
- A deep link to an opportunity that has since closed shows a clear "no longer available" message, not the normal detail view.
- The "Closing soon" badge appears only when closing within 7 days and strictly in the future — never for evergreen (no closing date) opportunities.
- Data dependency: badge logic depends on accurate `closing_date`; a null or malformed date must default to "no badge," not a crash or false badge.

---

## Epic: Ringfencing (OTEP-127, 390, 408, 409)

**Standard success criteria:**
- An eligible officer sees the full detail page for a ringfenced opportunity as normal.
- An ineligible officer sees a distinct ringfenced/ineligible state on the same opportunity, not the standard detail view.

**Edge case / data success criteria:**
- Ringfencing rules (Master Switch, Include/Exclude by agency) apply correctly when combined — e.g. Master Switch off should show all opportunities regardless of include/exclude rules underneath.
- **Not yet testable:** officer personas for "incomplete profile data" and "explicitly ineligible" are not yet defined or reserved — this is a real gap, not a documentation gap. Success criteria above can't be verified end-to-end until these two persona types exist in the UAT dataset.
- Data dependency: ringfencing correctness depends on the officer's profile carrying accurate agency/competency data — this is the same structural dependency flagged in the jobID/competency bug currently being investigated by Rama; treat as one root cause, not two.

---

## Epic: Apply — Careers@Gov (OTEP-88, 89, 87)

**Standard success criteria:**
- A C@G-sourced opportunity's detail page shows title, agency, description, duration, and available structured fields in the same layout as an OTG opportunity.
- "Apply via Careers@Gov" opens a new tab that deep-links directly to that specific posting — never the C@G homepage.

**Edge case / data success criteria:**
- Responsibilities and pre-requisite fields present in the C@G payload are intentionally NOT shown in CareerCompass, even when the data exists — officer must be directed to Careers@Gov for that detail.
- If a C@G posting is taken down after the officer clicks through, CareerCompass shows no additional error state — this is handled entirely by Careers@Gov.
- The C@G detail page shows exactly one apply path (Apply via Careers@Gov) — no FormSG or OTG-native apply CTA should ever appear alongside it.
- Data dependency: this entire epic currently has no confirmed QA test coverage (Confluence page is an empty stub) — success criteria above are defined but unverified as of this doc.

---

## Epic: Apply — FormSG / CareerCompass-Native (OTEP-319)

**Standard success criteria:**
- Clicking "Apply" opens the correct FormSG form for that specific opportunity in a new tab.
- Each opportunity's Apply button opens its own form — never a form belonging to a different opportunity.

**Edge case / data success criteria:**
- An opportunity with no `formsg_url` configured shows a clear fallback message ("Application form unavailable — contact the posting agency") in place of the Apply button, with no layout shift.
- If the FormSG form itself is down or closed, the officer sees FormSG's own error page — CareerCompass shows no additional error state.
- Data dependency: this is the highest-risk data gap in the whole plan. Sprint 5 comments flagged that the source Excel was missing POC data for many opportunities — before UAT-APPLY-008 (missing-URL fallback) can be considered testable, confirm this data state is genuinely reproducible in the UAT dataset, not assumed.
- **This epic is Done, P0, and officer-facing with zero visible QA test coverage found anywhere in the Pathfinder Confluence space** — success criteria above are defined but need QA sign-off before UAT, flagged as the top same-day follow-up in the consolidated test plan.

---

*Generated: 2026-07-24, for Adrian per DOs call action item (2026-07-23).*
*Companion doc: [Consolidated Test Plan](2026-07-24-W30-consolidated-test-plan.md) — maps each success criterion above to its actual test case ID.*
*Next: paste each epic's section into its corresponding 1-pager; flag the two "not yet testable" items (Ringfencing personas, FormSG data gap) to Adrian directly since they block sign-off regardless of documentation.*
