# Opportunities (Epic 4) — Feature Backlog

**Scope:** Every feature/story in the Opportunities pillar (STIPs, Gigs, SJRs, Internal Jobs, Careers@Gov), pulled from [prd-opportunities.md](../../../PM-skills-ALL-1/02-prd/prd-opportunities.md) and cross-checked against build status in the [Requirements Traceability Matrix v2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2484896250) (live as at 24 Jul 2026).

**Not included:** the 54 test-coverage gap cases (NEW-01..54) — those live in [Pathfinder UAT Test Cases](2026-07-27-W31-pathfinder-uat-test-cases.md) and are ranked separately in [Value-Cost Ratio Prioritization](2026-07-27-W31-opportunities-uat-value-cost-ratio.md). This doc is what to **build**, not what to **verify**.

**Status legend:** ✅ Done · 🟡 In QA · 🟠 In Progress · 🔲 Backlog · ⚠️ Open decision blocking

---

## Theme 1: Listing & Discovery

| Jira ID | Story | Status | Notes |
|---|---|---|---|
| OTEP-85 | US-01a — Display opportunity cards (3-col grid, 15/page, sorted by posting date, auth-gated) | ✅ Done | Failing in QA: type tags (Gig/STIP/SJR) not displaying, null posted_date shows "1 Jan 1970" — both filed OTEP-663 |
| OTEP-127 | US-01b — Ringfencing applied to listing per officer's POCDEX data on login | 🟠 In Progress | Spike (OTEP-127) done; runtime enforcement is OTEP-390/408/409 below |
| OTEP-267 | Pagination (Next/Previous, page counter, hidden at ≤15 results) | ✅ Done | Exactly-15 boundary (hide vs. single page) marked TBC in QA |
| OTEP-268 | Empty, error, and partial-load states | ✅ Done | Empty-state case written, not yet run |
| OTEP-284 | "Closing soon" badge (≤7 days) on card and detail page | ✅ Done | ⚠️ Closing-day boundary undefined — RTM open item 1 |
| OTEP-362 | Open/closed visibility (closed postings excluded from listing) | ✅ Done | — |
| OTEP-406 | Sort by posted date / closing date | ✅ Done | Failing in QA: closing-date sort shows farthest deadline first instead of nearest (OTEP-663) |
| OTEP-285 | Click-through to detail page + return-to-page state preserved | ✅ Done | Absorbed into OTEP-128; back-link/browser-back cases written, not yet run |
| OTEP-571 | STIP/Gig cards: competency section ordered before time-commitment section | ✅ Done | Section ordering itself not asserted by any QA case yet |
| OTEP-613 | Default agency logo when logo is missing | ✅ Done | Broken Ministry-logo rendering failing in QA (OTEP-663) |
| — | Competency-match display on cards (REQ-20) | ✅ Done, no Jira ID | No checklist rows yet; full verification blocked by agency-code resolution gap (REQ-X2) |

---

## Theme 2: Filtering & Search

| Jira ID | Story | Status | Notes |
|---|---|---|---|
| OTEP-86 | US-03 — Filter by opportunity type (multi-select, tooltip per type) | ✅ Done | ⚠️ "Select all" toggle undocumented in any ticket AC — RTM open item 6 |
| OTEP-318 | Filter by opportunity category (sub-story of OTEP-86) | — | ACs TBC as of PRD — superseded by OTEP-437 below |
| OTEP-437 | Filter by WOG job category (C@G Indus taxonomy as canonical layer) | 🟡 In QA | **Zero QA cases written despite QA status** — blocking exit. See feature backlog item below and the 14 drafted cases (NEW-04..17) in the test-cases doc |
| OTEP-317 | Clear all filters in one action | ✅ Done | — |
| OTEP-91 | US-02 — Keyword search (title/description/agency, submit-only, no typeahead) | 🟠 In Progress | AC contradiction resolved by QA: fires on click/Enter only, not live-type — ticket AC needs updating to match (RTM open item 3) |
| OTEP-405 | Keyword search (ticket covering search build) | 🟠 In Progress | Open: relevance ordering unverified, combined title+agency matching returns wrong results, duplicate cards observed |

---

## Theme 3: Opportunity Detail Page

| Jira ID | Story | Status | Notes |
|---|---|---|---|
| OTEP-128 | US-04+05 — Detail page (fields, dates, "Not specified" fallback, Apply CTA above the fold, deep-link auth gate) | ✅ Done | Verify built behavior actually redirects post-login to the opportunity (not the listing) before sign-off |
| OTEP-283 | Ministry icon next to agency name | 🟠 In Progress | Broken logo rendering failing in QA (OTEP-663) |
| OTEP-129 | US-06 — Closed/expired deep-link shows "no longer available" message | ✅ Done | — |
| OTEP-133 | US-12 — EDM deep-link landing; ineligible officers see clear message + alternatives | ✅ Done | Absorbed into OTEP-390 (ringfencing). ⚠️ Jira title mismatch flagged, unverified |

---

## Theme 4: Careers@Gov (C@G) Integration

| Jira ID | Story | Status | Notes |
|---|---|---|---|
| OTEP-88 | US-10 — C@G listing indicator ("Careers@Gov" badge, visible without hover) | 🟠 In Progress | Dedicated QA page (OTEP-88/87) is empty — 10 gap cases drafted (NEW-18..27) |
| OTEP-89 | US-11 — C@G detail page + "Apply via Careers@Gov" deep link, click-to-CG event, no FormSG/OTG flow on C@G pages | ✅ Done | Redirect to correct posting PASS; click-to-CG analytics event still TBC |
| OTEP-374 | C@G API fields | ✅ Done | Feeds OTEP-88 |

---

## Theme 5: Apply Flows

| Jira ID | Story | Status | Notes |
|---|---|---|---|
| OTEP-319 | US-18 — Apply via FormSG, basic redirect (Internal Jobs, STIPs, Gigs) | ✅ Done | FormSG-down case PASS (lands on FormSG's own error page). ⚠️ Tracking-params question open — RTM item 4 |
| OTEP-130 | Apply via FormSG with webhook confirmation + email notifications (officer + poster) | 🔲 Backlog | Feature not built; webhook case attempted in QA and failed for that reason, not a defect |
| OTEP-87 | US-08 — Missing/broken FormSG link fallback message | 🟡 In QA | ⚠️ Jira/PRD AC mismatch unreconciled — RTM open item 8. Missing-link fallback PASS in QA |
| OTEP-131 | Missing/broken FormSG link (competing ticket) | 🟠 In Progress | ⚠️ **Contradicts OTEP-128 on SJR apply-button treatment** — RTM open item 11. You've since confirmed no SJRs; close this out in Jira/Confluence |
| OTEP-132 | US-09 — Apply for SJR/Internal Job via OTG redirect | 🔲 Deferred to R1 | SJR opportunities also shifted to R1 (confirmed 2026-06-05) — **re-check relevance given the no-SJR decision** |

---

## Theme 6: Login & Access

| Jira ID | Story | Status | Notes |
|---|---|---|---|
| OTEP-71 | Login via WOG AD | 🔲 Backlog | RTM v1 previously said In Progress — corrected in v2. Only 2 partial cases exist (auth routing touched in passing). 5 gap cases drafted (NEW-34..38), write now / run when built |
| OTEP-390 | Ringfencing — runtime enforcement (listing + detail states) | 🟠 In Progress | ~24 QA cases written, 0 executed — blocked on 3 test accounts (RTM open item 7) |
| OTEP-408 | Ringfencing — agency-based rule | 🔲 Not yet built | Part of the ringfencing rule engine |
| OTEP-409 | Ringfencing — job-family-based rule | 🔲 Not yet built | Part of the ringfencing rule engine |

---

## Cross-cutting / not yet a story

| Item | Status | Notes |
|---|---|---|
| REQ-X1 — Application completion rate instrumentation (PostHog) | ⚠️ Not verified | Candidate for new TV rows once OTEP-130 (webhook) lands |
| REQ-X2 — Competency-to-opportunity matching (agency-code resolution) | 🔴 Unresolved | Blocks full verification of the competency-match display feature above |
| REQ-X3 — FormSG pre-fill via URL params | ✅ Descoped | Dropped from MVP, Squad Sync 26 May 2026 |
| CSC connectivity (OTEP-679) | 🔴 No AC exists | Not covered anywhere in the test tree or Consolidated Test Plan — needs grooming with Fanxu Wang/Adrian before it's even a testable feature |
| POCDEX code table ingestion (OTEP-445) | 🔲 Spike only | 2-point investigation into API vs. SFTP ingestion; produces a recommendation, not a shippable feature — not a backlog gap, just not yet resolved into a story |
| "Already applied" state | ⚠️ Open decision | Being tested but appears in no MVP AC; case fails and is filed as OTEP-667 — decide whether this is MVP scope or a future enhancement |
| "What do job types mean" explainer / tooltip | — | Referenced in UAT test cases (UAT-OPP-025) but unclear if this maps to a Jira story — confirm scope |

---

## Open decisions blocking backlog clarity (not features themselves, but block scoping them)

1. **Closing-date boundary** — does an opportunity closing "12 May" survive through 12 May 23:59 SGT? No "Closing today" badge is defined. Affects OTEP-85, 284, 362.
2. **SJR apply-button treatment** — OTEP-128 says disabled button; OTEP-131 says neither button nor message. You've confirmed no SJRs — this should be closed, not decided, but the tickets still contradict each other in Jira.
3. **Redirect banner copy** (OTEP-89, OTEP-319) — cited to a design spec, not any ticket AC. Confirm with Amber or remove the requirement.
4. **FormSG tracking params** (OTEP-319) — open whether analytics params are approved to append to the redirect URL.
5. **PRD not published** — `opportunities-listing.md` / `prd-opportunities.md` isn't in Confluence, GitLab, or a shared drive per the RTM. Worth publishing so REQ definitions have one canonical home instead of living in Jira ACs alone.
6. **Ringfencing rule precedence** — undefined what happens when include and exclude rules apply to the same opportunity (blocks NEW-28/29 test cases, but it's really a spec gap).
7. **"Already applied" state** — MVP scope or not (see above).

---

## Summary by status

| Status | Count |
|---|---|
| ✅ Done | 14 |
| 🟡 In QA | 2 |
| 🟠 In Progress | 8 |
| 🔲 Backlog / Deferred / Spike | 5 |
| ⚠️ Blocked on open decision | 7 |

*(Counts are by row above, not unique Jira tickets — some tickets appear once but map to multiple PRD user stories.)*

---

*Generated: 2026-07-27*
*Sources: [prd-opportunities.md](../../../PM-skills-ALL-1/02-prd/prd-opportunities.md) (Section 8, Scope), [Requirements Traceability Matrix v2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2484896250) (build status, live Jira pull 24 Jul 2026), open items list cross-referenced from the same RTM.*
*Companion: [Pathfinder UAT Test Cases](2026-07-27-W31-pathfinder-uat-test-cases.md) for what to verify once built; [Value-Cost Ratio Prioritization](2026-07-27-W31-opportunities-uat-value-cost-ratio.md) for sequencing the coverage gaps.*
*Next: This is a feature/story backlog, not yet Jira-ticket-formatted. If you want these loaded or reconciled against the live board, run `/jira-sync` first to refresh against current Jira state (this snapshot is as-at 24 Jul 2026, three days stale), then `/create-tickets` for anything genuinely missing from Jira.*
