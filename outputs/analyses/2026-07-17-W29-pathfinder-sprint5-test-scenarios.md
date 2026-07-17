# Test Scenarios: Pathfinder Sprint 5

**Source:** Live Jira pull, Sprint 34619 (OTEP-Pathfinder Sprint 5, closed) — pulled 2026-07-17

**Total scenarios:** 38

**Coverage:** Happy path / edge cases / error handling / regression (Done stories) / QA sign-off (QA-column stories)

⚠️ **Scope note:** Sprint 5 is closed, but 7 of its stories (OTEP-88, 305, 405, 386, 283, 131, 444) are still **In Progress** and carried forward into Sprint 6 — they're already covered in [2026-07-17-W29-pathfinder-sprint6-test-scenarios.md](2026-07-17-W29-pathfinder-sprint6-test-scenarios.md). This document covers the **7 stories that shipped (Done)** and **4 stories sitting in QA** — the genuinely Sprint 5-specific scope. Treat the Done stories as regression checks (confirm nothing broke since sign-off) rather than first-pass testing, and the QA stories as the actual gate before they can close.

---

## Done stories — regression scenarios

*These already passed dev/QA sign-off. Purpose here is to catch regressions introduced by Sprint 6 work touching the same surfaces (especially OTEP-88, OTEP-405, OTEP-437 which share the listing/filter/search UI).*

### OTEP-86 — Filter by opportunity type

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 1 | Single-type filter | Listing has mixed types | Filter by "STIP" only | Only STIP opportunities shown |
| 2 | Multi-type filter | Listing has mixed types | Select STIP + Gig together | Both types shown, others excluded |
| 3 | Active filter indicator | Filter applied | Observe filter UI | Badge count or highlighted state shows active filters |
| 4 | Filter persists across pagination | Filter applied, >15 results | Page to page 2 | Filter selection still active |
| 5 | Type tooltip | Any type filter option | Hover/tap tooltip | Explanation shown, links to EOM Microsite |
| 6 | Combine with other filters | Type + another active filter | Apply both | Both constraints apply together |
| 7 | Result count updates | Filter applied | Observe count | Count reflects filtered set |
| 8 | Zero matches | Filter combo matching nothing | Apply filters | OTEP-268 empty state shown |
| 9 | Jobs subsumes OTG + C@G | "Jobs" filter selected | Apply | Both OTG Internal Jobs/Secondments and C@G Jobs appear under "Jobs" |
| 10 | Excluded types absent | N/A | Check filter options | No filter option for Secondments/Internal Jobs as standalone types (excluded from MVP per 15 Jun decision), no SJR filter |

**Priority:** High (regression — this is shared UI surface with Sprint 6's OTEP-437 job-family filter and OTEP-405 search)

---

### OTEP-268 — Empty, error, partial-load states

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 11 | Zero opportunities | No open opportunities exist | Load listing | "No opportunities available right now" with supporting text + illustration, no pagination controls shown |

**Priority:** Medium (regression — foundational state other Sprint 6 stories like OTEP-88/OTEP-437 explicitly build on top of)

---

### OTEP-128 — Opportunity detail page

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 12 | Full field display | Valid opportunity | Load detail page | Title, Agency, Posting Date, Closing Date, Type, Description, "What you'll develop," Commitment type all shown |
| 13 | Date formatting | N/A | Check dates | Absolute format, e.g. "12 May 2026" — not relative ("3 days ago") |
| 14 | Back navigation | On detail page | Click "Back to opportunities" | Returns to listing |
| 15 | Direct/bookmark access | Valid opportunity ID | Access via bookmark/shared URL | Loads correctly, not just via in-app navigation |
| 16 | Unauthenticated deep-link | Not logged in | Access detail URL directly | Redirected to login, then straight to that specific opportunity (not the listing) |
| 17 | Valid deep-link for active opportunity | Opportunity still active | Access via deep-link | Loads normally |
| 18 | Invalid opportunity ID | Nonexistent/malformed ID in URL | Access URL | "Opportunity not found" message with link back to listing |

**Priority:** High (regression — this is the foundation OTEP-390's ringfencing states and OTEP-131's FormSG handling build directly on top of in Sprint 6)

---

### OTEP-284 — "Closing soon" label

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 19 | Badge shows within threshold | Opportunity closes in 5 days | View card + detail page | "Closing soon" badge shown on both, same position |
| 20 | Badge absent — evergreen | Opportunity has nil closing_date | View card | No badge (no deadline) |
| 21 | Badge absent — beyond threshold | Closes in 10 days | View card | No badge |
| 22 | Boundary — exactly 7 days | Closes in exactly 7 days | View card | Badge shown (0 < days_remaining ≤ 7 is inclusive of day 7) |
| 23 | Boundary — 0 days / today | Closes today | View card | Confirm behaviour at the "strictly in the future" boundary — this is the edge most likely to have an off-by-one bug |
| 24 | Server-side calculation | N/A | Inspect response payload | 7-day threshold calculated server-side, not client-side date math |

**Priority:** Medium

---

### OTEP-129 — Open/closed status before applying

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 25 | Closed opportunity deep-link | Opportunity past closing_date, accessed via deep-link | Access URL | "This opportunity is no longer available" message, link back to listing |
| 26 | Closing-soon threshold consistency | Opportunity within 7 days | Check both card and detail | Same threshold/label logic as OTEP-284 (this ticket shares the same 7-day rule) |

**Priority:** High (this is the story OTEP-390 in Sprint 6 explicitly absorbs OTEP-133 alongside — confirm no conflicting closed-state logic between them)

---

### OTEP-406 — Sort opportunities (Posted Date / Closing Date)

⚠️ No description text in Jira — ACs not documented. Scenarios below are inferred from the title only; confirm actual AC with Thomas before treating as complete.

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 27 | Sort by posted date | Mixed listing | Select "Posted Date" sort | Newest-first (or confirm actual default direction) |
| 28 | Sort by closing date | Mixed listing | Select "Closing Date" sort | Soonest-closing-first (confirm direction) |
| 29 | Sort persists with filters | Sort + filter both active | Apply both | Sort order maintained within filtered set |

⚠️ **Directly relevant to Sprint 6's OTEP-390**, which specifies "Ringfenced STIP and Gig based on posted date (latest first)" as its own sort rule — confirm OTEP-406's general sort and OTEP-390's ringfenced-specific sort don't conflict or silently override each other.

**Priority:** Medium (undocumented AC — flag as a gap, not just test it blind)

---

### OTEP-571 — Layout swap: competency section before time commitment

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 30 | Section order — competencies present | STIP/Gig card with competency data | View card | Competency section appears above Time Commitment |
| 31 | Section order — no competencies | STIP/Gig card with no competency match data | View card | Reduced blank space — layout doesn't leave an empty competency block |

**Priority:** Low

---

### OTEP-613 — Default agency logo fallback

⚠️ No description text in Jira. This is the predecessor to Sprint 6's OTEP-283 (Ministry icons) — worth checking these two don't now conflict, since OTEP-283 introduces specific per-agency icons and this ticket's "default logo" was presumably the prior fallback behavior.

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 32 | No agency logo | Opportunity's agency has no logo mapped | View card | Default/generic logo shown, not a broken image or blank space |

**Priority:** Low — but re-verify against OTEP-283's newer placeholder logic (Sprint 6, Scenario 21 in that doc) to confirm they're the same fallback, not two competing ones

---

## QA-column stories — sign-off gate scenarios

*These haven't shipped yet — still in QA. These are the actual scenarios QA needs to execute before sign-off, not regression checks.*

### OTEP-87 — View Careers@Gov Opportunity Detail

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 33 | C@G detail page — full data | C@G opportunity with complete payload | Load detail page | Title, agency, description, duration, all structured job-info fields render |
| 34 | Responsibilities/pre-reqs excluded | C@G payload includes responsibilities/pre-req fields | Load detail page | These are NOT shown inline — officer must click through to C@G to see them, even though the data exists |
| 35 | Missing field — "Not specified" | C@G payload missing a field | Load detail page | "Not specified" shown, field label NOT hidden |
| 36 | Layout consistency with OTG | N/A | Compare to OTEP-128 detail page | Same card structure, same "Not specified" fallback, same back-navigation |
| 37 | Apply CTA and redirect | Valid C@G opportunity | Click "Apply via Careers@Gov" | New tab opens, deep-links to specific C@G posting; `click-to-cag` event captured |
| 38 | Opportunity removed from C@G post-click | Officer clicks through, C@G posting no longer available | Land on C@G | Description is truncated in source — confirm actual expected behaviour with Thomas/Pow Hwee, AC cuts off mid-sentence in Jira |

**Priority:** Critical — this gates OTEP-88 (Sprint 6, listing) and OTEP-89 (C@G deep-link apply), both of which explicitly declare "detail page content (OTEP-87)... not part of this ticket," meaning OTEP-87 is the dependency, not parallel work.

---

### OTEP-438 — Placeholder UI for admin view

⚠️ No description available from this pull — flag to Hao Eng for scope before writing scenarios. Do not skip silently; this is in QA and needs a gate before sign-off like everything else here.

---

### OTEP-392 — Keycloak federated logout in otep-web

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 39 | Federated logout | Logged in via Keycloak | Trigger logout | Session ends both in otep-web AND at the Keycloak/IdP level, not just locally |

⚠️ **Directly relevant to Sprint 6's OTEP-305** (login/logout replacing the Keycloak page with actual WOG AD) — confirm this federated logout behavior carries over correctly once WOG AD replaces Keycloak, or whether it needs rework. These two tickets are testing overlapping session-termination logic on different identity providers.

**Priority:** High

---

### OTEP-304 — Session persistence during active use

| # | Scenario | Preconditions | Steps | Expected result |
|---|---|---|---|---|
| 40 | Active session — no re-auth prompts | Logged in, actively navigating | Move between pages | No unexpected re-authentication prompts mid-session |
| 41 | Session expiry detection | WOG AD session expires (timeout at AD level) | Continue navigating | OTEP detects expired token, redirects to login — no blank/broken page |
| 42 | Session expiry — mid-action | Session expired, officer attempts an action | Try to submit/click something | "Session expired, please log in again" message — not broken/blank |

⚠️ **Scope boundary:** OTEP does not own the timeout value — that's WOG AD's. Don't test for a specific timeout duration here; test only the detection-and-redirect behavior.

**Priority:** Critical — this is the confirmed-resolved item from open-items #52 (Hao Eng's CFT/session work); worth a clean QA pass since it was flagged as a 2-day escalation that got resolved fast, not something that's been sitting untested.

---

## Coverage Matrix

| Story | Status | Happy Path | Edge Cases | Error Handling | Regression Risk (Sprint 6 overlap) |
|---|---|---|---|---|---|
| OTEP-86 | Done | ✅ | ✅ | ✅ | High — shares UI with OTEP-437, OTEP-405 |
| OTEP-268 | Done | ✅ | — | ✅ | Medium — foundational empty state |
| OTEP-128 | Done | ✅ | ✅ | ✅ | High — OTEP-390, OTEP-131 build on it |
| OTEP-284 | Done | ✅ | ✅ | — | Low |
| OTEP-129 | Done | ✅ | ✅ | — | High — overlaps OTEP-390's closed-state logic |
| OTEP-406 | Done | ⚠️ undocumented | — | — | Medium — conflicts possible with OTEP-390 sort rule |
| OTEP-571 | Done | ✅ | ✅ | — | Low |
| OTEP-613 | Done | ⚠️ undocumented | — | — | Medium — may conflict with OTEP-283 |
| OTEP-87 | QA | ✅ | ✅ | ✅ | Critical — blocks OTEP-88/OTEP-89 |
| OTEP-438 | QA | ⚠️ no data | — | — | Unknown |
| OTEP-392 | QA | ✅ | — | — | High — overlaps OTEP-305 |
| OTEP-304 | QA | ✅ | ✅ | ✅ | Critical — confirmed resolved per #52, verify with clean QA pass |

---

## Open questions / gaps this pull surfaced

1. **OTEP-406 and OTEP-613 have no AC text in Jira.** Both are Done, both were tested and shipped by someone, but there's no documented record of what was actually verified. Worth backfilling before they're needed as a regression reference.
2. **OTEP-87's AC is truncated mid-sentence** in the source (cuts off at "If the opportunity is no longer available on C@G after click-through,") — get the full AC from Thomas/Pow Hwee before this can be a complete QA gate.
3. **OTEP-438 has no accessible description** — flag to Hao Eng directly; can't write scenarios blind.
4. **Three explicit cross-sprint collision risks** worth a direct conversation, not just parallel testing: OTEP-406 (general sort) vs. OTEP-390 (ringfenced-specific sort); OTEP-613 (default logo) vs. OTEP-283 (Ministry icons); OTEP-392 (Keycloak federated logout) vs. OTEP-305 (WOG AD login/logout replacing Keycloak). Each pair touches the same behavior from two different tickets/sprints — recommend confirming with the respective owners (Thomas, Pow Hwee/Léo) that one supersedes the other rather than both being independently "correct."

---

*Generated: 2026-07-17*
*Source: Live Jira pull, sprint 34619 — 7 Done + 4 QA stories (excludes the 7 stories still In Progress and carried into Sprint 6, already covered in the Sprint 6 test-scenarios doc)*
*Next: Confirm OTEP-406/613/438 AC gaps with story owners; resolve the 3 cross-sprint collision risks before Sprint 6 QA sign-off*
