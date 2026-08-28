---
date: 2026-08-24
week: 2026-W35
scope: PRD → build ticket (AC) → UAT test case traceability, both epic groups — Pathfinder (Opportunities Unified Hub) and Core (Profile, My Development, Courses)
---

# UAT Traceability Matrix — Pathfinder + Core

## How to read this

Three columns per ticket: **has AC** (is there testable acceptance criteria on the ticket), **build status**, **UAT coverage** (a dedicated test case exists and its status). ⚠️ marks a user-facing, AC-complete ticket with no UAT case — the real gaps. Backend/spike tickets with no user-facing flow are noted but not flagged, since they typically don't need a UAT case.

---

## Pathfinder — Epic OTEP-69 (Opportunities Unified Hub)

**47 build tickets, all Done. 44 UAT test cases exist, all Done, mapped to 9 of 47 tickets (19%).**

| Ticket | Feature | Has AC | Build | UAT coverage |
|---|---|---|---|---|
| OTEP-85 | Opportunity listing cards | ✅ | Done | ✅ 6 TCs, Done |
| OTEP-86 | Filter by type | ✅ | Done | ✅ 6 TCs, Done |
| OTEP-88 | C@G opportunities in listing | ✅ | Done | ✅ 5 TCs, Done |
| OTEP-128 | Opportunity detail page | ✅ | Done | ✅ 6 TCs, Done |
| OTEP-405 | Keyword search | ✅ | Done | ✅ 10 TCs, Done |
| OTEP-437 | Filter by job family | ✅ | Done | ✅ 5 TCs, Done |
| OTEP-390 | Ringfenced detail page states | ✅ | Done | ✅ via E2E (OTEP-1301/1302/975) |
| OTEP-408 | Ringfencing — BE eligibility filter | ✅ | Done | ✅ via E2E (same) |
| OTEP-409 | Ringfencing — FE reflects results | ✅ | Done | ✅ via E2E (same) |
| OTEP-336 | Competency match signal, cards | ✅ | Done | ✅ via E2E (OTEP-1004, 1339) |
| OTEP-570 | Competency match, detail page | ✅ | Done | ✅ via E2E (same) |
| OTEP-87 | C@G opportunity detail | ✅ | Done | ⚠️ none |
| OTEP-89 | C@G deep-link apply | ✅ | Done | 🟡 marked covered under OTEP-967 (per PM confirmation, 2026-08-24: "Apply CTA will work and apply for FormSG or C@G") — **caveat: OTEP-967's written expected result doesn't name Apply/C@G anywhere; this is a PM confirmation of working behavior, not a documented pass against written test-case criteria** |
| **OTEP-319** | **FormSG apply redirect** | ✅ | Done | 🟡 marked covered under OTEP-967 (per PM confirmation, 2026-08-24: "Apply CTA will work and apply for FormSG or C@G") — **caveat: OTEP-967's written expected result doesn't name Apply/FormSG anywhere; this is a PM confirmation of working behavior, not a documented pass against written test-case criteria** |
| OTEP-129 | Open/closed status before applying | ✅ | Done | ✅ AC tested under OTEP-957 (closed-exclusion, OTEP-85) + OTEP-971/972/973 (closing-soon + closed deep-link, OTEP-128) |
| OTEP-131 | Broken FormSG link handling | ✅ | Done | 🟡 marked covered under OTEP-967 (per PM call, 2026-08-24) — **same caveat as OTEP-319** |
| OTEP-267 | Pagination | ✅ | Done | ✅ AC tested under OTEP-958/959 (filed against OTEP-85) |
| OTEP-268 | Empty/error/partial-load states | ✅ | Done | ✅ AC tested under OTEP-960/964 (filed against OTEP-85/86) |
| OTEP-283 | Ministry icons on detail page | ✅ | Done | 🟡 marked covered under OTEP-956 (per PM confirmation, 2026-08-24) — **caveat: OTEP-956's written expected result names Title/Agency/Posting Date/Type only, not the Ministry icon** |
| OTEP-284 | "Closing soon" label | ✅ | Done | ✅ AC tested under OTEP-972/973 (filed against OTEP-128) |
| OTEP-285 | Click-through + return-to-page state | ✅ | Done | ⚠️ none |
| OTEP-317 | Clear filters / reset view | ✅ | Done | ✅ AC tested under OTEP-965/966 (filed against OTEP-86) |
| OTEP-571 | Card layout swap (time vs. competency) | ✅ | Done | ⚠️ none (low stakes) |
| OTEP-438 | Admin view placeholder | ✅ | Done | ⚠️ none (low stakes, placeholder) |
| **OTEP-406** | **Sort opportunities** | **❌ no AC of its own** | Done | ✅ genuinely subsumed by OTEP-85's own AC ("Sorting: newest first, Opportunity ID tie-breaker") and OTEP-955's tested "sorted newest-posted-first" result — no stretch needed |
| **OTEP-613** | **Default agency logo** | **❌ no AC** | Done | ⚠️ none — checked against OTEP-85's AC and all 6 test cases specifically, no mention of agency logo or fallback behavior anywhere; does not match the OTEP-406 pattern |
| OTEP-127 | [Spike] Ringfencing display contract | ✅ | Done | n/a — spike, not user-facing |
| OTEP-133 | Deep-link from EDM | — (absorbed into OTEP-390) | Done | n/a — merged into OTEP-390's coverage |
| OTEP-192 | OTG data ingestion (scheduled job) | ✅ | Done | n/a — backend, no UI |
| OTEP-194 | [Spike] FormSG integration architecture | ✅ | Done | n/a — spike |
| OTEP-223 | Prepare data for OTG ingestion | ❌ no AC | Done | n/a — data prep task |
| OTEP-289 | [Spike] Filter by Functions tagging | ✅ | Done | n/a — spike |
| OTEP-322 | Playwright E2E framework setup | ✅ | Done | n/a — QA infra itself |
| OTEP-348 | OTG ingestion — scheduler & observability | ✅ | Done | n/a — backend |
| OTEP-349 | [Spike] Competency matching integration | ✅ | Done | n/a — spike |
| OTEP-358 | [Spike] Nil-date handling, OTG import | ✅ | Done | n/a — spike |
| OTEP-386 | Opportunity-type tooltip | ✅ | Done | ⚠️ none (minor, worth a look) |
| OTEP-391 | [Spike] Virus scanning, AWS GuardDuty vs CFT | ✅ | Done | n/a — spike |
| OTEP-397 | [Spike] OTG Excel upload flow/UI | ✅ | Done | n/a — spike |
| OTEP-403 | OTG data import hardening | ✅ | Done | n/a — backend |
| OTEP-427 | [Spike] Tighten OTG ingestion logic | ❌ no AC | Done | n/a — spike |
| OTEP-768 | [Bug] cft_upload table status scoping | ✅ | Done | n/a — backend bug fix |
| OTEP-799 | OTG import mapping — closing date | ✅ | Done | n/a — backend |
| OTEP-810 | OTG ingestion — Comp ID matching | ✅ | Done | n/a — backend |
| OTEP-1046 | Remove seeded C@G opportunities | ✅ | Done | n/a — data cleanup |
| OTEP-1118 | [Bug] Deleted opportunity detail-page handling | ✅ | Done | ⚠️ none (bug fix, worth a regression case) |
| OTEP-1119 | Upload UI — role-based ringfencing access | ✅ | Done | ⚠️ none (access-control change, worth a case) |

**Pathfinder real gaps, corrected (⚠️, user-facing, AC-complete, zero UAT case): 10 tickets**, down from an initial 15 — 5 (OTEP-129, 267, 268, 284, 317) turned out to be tested, just under a sibling ticket's UAT case rather than their own (see cross-reference section below). Headline: **OTEP-319 (FormSG apply redirect)** — the actual conversion action of the whole epic — still has no dedicated test case anywhere, confirmed after checking the ringfencing E2E cases and all 6 OTEP-128 cases specifically, line by line against OTEP-319's AC, for apply-flow coverage (none click Apply or verify a redirect). **OTEP-87, 89, 131 were also checked line-by-line against OTEP-128's 6 cases and do not hold as covered** — see cross-reference section for the specific AC mismatch on each. **OTEP-406 and OTEP-613 have no AC at all**, so there's nothing a test case could even have been generated from.

---

## Core — Epics OTEP-67 (Profile), OTEP-68 (My Development), OTEP-58 (Courses)

**40 build tickets. 78 UAT test cases exist, 71 Done, mapped to 18 of 40 tickets (45%) — much better ratio than Pathfinder.**

### Officer Profile (OTEP-67)

| Ticket | Feature | Has AC | Build | UAT coverage |
|---|---|---|---|---|
| OTEP-74 | Profile Details | ✅ | Done | ✅ 8 TCs, Done |
| OTEP-75 | View My Competencies | ✅ | Done | ✅ 7 TCs, Done |
| OTEP-105 | Port over OTG competencies | ✅ | Done | ✅ 1 TC, Done |
| OTEP-112 | Add competencies | ✅ | Done | ✅ 9 TCs, Done |
| OTEP-126 | Delete/hide competencies | ✅ | Done | ✅ 8 TCs, Done |
| OTEP-290 | Report issue button | ✅ | Done | ✅ 4 TCs, Done |
| OTEP-610 | Duplicate competency naming | ✅ | Done | ✅ 1 TC, Done |
| OTEP-388 | Role competencies, multiple job ID | ✅ | Done | ⚠️ none |
| OTEP-980 | Login — error state handling | ✅ | Done | ⚠️ none |
| OTEP-1187 | Integration tests, login error states | ✅ | Done | n/a — is itself a test ticket |
| **OTEP-1201** | **Guard check, eligible agencies** | **❌ no AC** | Done | ⚠️ none — access-control ticket, worth a look |
| OTEP-609 | Port OTG comps using ID | ✅ | QA | none yet — in progress |
| **OTEP-232** | **Double-hatting display** | ✅ | **Backlog, unbuilt** | n/a — not built |
| OTEP-364 | Update OTG competency info | ✅ | Backlog | n/a — not built |
| OTEP-665 | Job family/function DB design | ✅ | Backlog | n/a — not built |

### My Development (OTEP-68)

| Ticket | Feature | Has AC | Build | UAT coverage |
|---|---|---|---|---|
| OTEP-421 | Profile Details panel | ✅ | QA | ✅ 3/3 TCs Done |
| OTEP-447 | Recommended roles | ✅ | QA | 🟡 3/4 TCs Done, 1 Backlog |
| OTEP-491 | Course Swimlanes | ✅ | QA | ✅ 2/2 TCs Done |
| OTEP-493 | Explore roles search | ✅ | QA | ✅ 1/1 TC Done |
| **OTEP-512** | **Profile page edge cases** | ✅ | QA | **🔴 2/6 TCs Done, 4 Backlog** |
| OTEP-521 | Blank state | ✅ | Done | ✅ 1/1 TC Done |
| OTEP-669 | Remove grade suffix | ✅ | QA | ⚠️ none |
| **OTEP-694** | **Agency & function in role panel** | ✅ | QA | **🔴 0/1 TCs Done, 1 Backlog** |
| OTEP-744 | Seed test data | ✅ | QA | n/a — infra task |
| OTEP-770 | Ringfencing, JR7 and below | ✅ | QA | ✅ 2/2 TCs Done |
| OTEP-783 | [Demo] Comment-driven changes | ✅ | QA | n/a — cosmetic/demo fix |
| OTEP-698 | Explore roles — filter order | ✅ | Done | ⚠️ none (minor) |
| OTEP-789 | Recommendations, multiple job ID | ✅ | Done | ⚠️ none |
| OTEP-1286 | Empty state — has role, no recs | ✅ | QA | ✅ AC tested under OTEP-879 (filed against OTEP-521) — same scenario: role + no role-based comps + no self-declared comps → "Roles unavailable right now" blank state |
| **OTEP-1345** | **[Bug] Search roles 403/502** | ✅ | QA | **⚠️ none — live bug, no regression case** |

### Courses (OTEP-58)

| Ticket | Feature | Has AC | Build | UAT coverage |
|---|---|---|---|---|
| OTEP-83 | Course Discovery (search/filter) | ✅ | QA | ✅ 7/7 TCs Done |
| OTEP-84 | Course detail page | ✅ | QA | 🟡 6/7 Done, 1 Ready-For-UAT |
| OTEP-602 | Course landing page/tile | ✅ | QA | ✅ 5/5 TCs Done |
| OTEP-1362 | [Bug] Search optimization | ✅ | Done | n/a — perf fix |
| OTEP-321 | Cumulus catalog ingestion | ✅ | QA | ⚠️ none — backend, but worth a data-integrity case |
| **OTEP-812** | **[Bug] Open issues, courses page** | ✅ | QA | **⚠️ none — bug, no regression case** |
| **OTEP-1238** | **[Bug] Duration=0 not imported** | ✅ | **In Progress** | **⚠️ untestable with current data — see cross-reference analysis below** |
| OTEP-82 | Jumpstart Reco POC 1 | ✅ | Backlog | n/a — not built |
| OTEP-516 | DLE/POCDEX ID import for Jumpstart | ✅ | Backlog | n/a — not built |

---

## Cross-reference check: are any "gap" tickets actually folded into other test cases?

Checked whether any of the flagged ⚠️ gaps are covered as a side-effect within another test case's steps, without a dedicated ticket of their own. Method: read the full description text (not just titles) of every UAT ticket in both epics, checked for direct ticket-ID mentions and keyword/behavior overlap with the gap list.

**Pathfinder: 5 of the 15 originally-flagged gaps are real coverage, filed under a sibling ticket.** These small stories were built alongside a bigger parent story (OTEP-85, 86, or 128) and their UAT test case was filed against the parent's ticket ID rather than getting its own:

| Gap ticket | AC | Actually tested by |
|---|---|---|
| OTEP-129 (Open/closed status) | Closed opportunities excluded from listing; closing-soon label at 7-day threshold | OTEP-957 (closed-exclusion, OTEP-85) + OTEP-971/972/973 (closed deep-link + closing-soon, OTEP-128) |
| OTEP-267 (Pagination) | Controls appear >15 items, hidden ≤15 | OTEP-958, OTEP-959 (filed under OTEP-85) |
| OTEP-268 (Empty/error states) | Zero-opportunity message, filter-zero-match empty state | OTEP-960, OTEP-964 (filed under OTEP-85/86) |
| OTEP-284 ("Closing soon" label) | Shows within 7-day threshold, hidden for evergreen | OTEP-972, OTEP-973 (filed under OTEP-128) |
| OTEP-317 (Clear filters) | "Clear all" resets filters, hidden when none active | OTEP-965, OTEP-966 (filed under OTEP-86) |

Verified by reading each test case's actual Test Steps/Expected Result text, not just the title — the AC described in the build ticket is the exact behavior being exercised in each case. Note OTEP-129 and OTEP-284 share coverage (both AC clauses of OTEP-129 map onto OTEP-128's closing-soon test cases) — counted once in the gap-reduction total.

**Re-checked OTEP-87 and OTEP-89 a second time, specifically for whether OTEP-128's 6 cases use C@G-sourced test data.** Two do: OTEP-971 and OTEP-972's test data URLs are explicitly labeled C@G opportunities ("Closing on 14 Aug - C@G"). This is a real, if incidental, finding — but reading their actual expected results, both are testing closed-state messaging and the closing-soon badge, not OTEP-87's specific AC lines (the "Not specified" fallback for empty fields, responsibilities/pre-requisites explicitly hidden). So there's genuine partial, incidental coverage of "a C@G opportunity's detail page renders and shows the right closing-state/badge," but no case verifies OTEP-87's actual distinguishing AC.

| Checked ticket | AC requires | What OTEP-128's 6 cases actually test | Verdict |
|---|---|---|---|
| OTEP-87 (C@G detail rendering) | C@G-sourced payload fields, "Not specified" fallback, responsibilities/pre-requisites explicitly hidden, Apply CTA present | OTEP-971 and OTEP-972 use real C@G opportunities as test data, but their expected results check closed-state/closing-soon behavior, not OTEP-87's fallback or hidden-fields rules | **Not covered by written criteria** (partial, incidental data overlap only) — PM confirmation covered the Apply CTA's branching behavior, not OTEP-87's field-rendering rules specifically |
| OTEP-89 (C@G deep-link apply) | Click "Apply via Careers@Gov" → redirect to C@G platform in new tab, click-to-cag event fires | No written case clicks Apply or verifies a redirect | **Marked covered per PM confirmation (2026-08-24)** — see caveat below |
| OTEP-319 (FormSG apply redirect) | Click Apply → FormSG form opens in new tab using `formsg_url` directly | OTEP-967's scenario title is "Detail page displays full opportunity information," but its written expected result lists only 7 data fields (Title, Agency, Posting Date, Closing Date, Type, Description, Commitment type) — Apply/FormSG is not named | **Marked covered per PM confirmation (2026-08-24)** — see caveat below |
| OTEP-131 (broken FormSG link) | Missing/empty `formsg_url` on a *valid* opportunity → "Application form unavailable" message | Same as above — OTEP-967's title is broad, its written expected result doesn't mention this scenario | **Marked covered per PM confirmation (2026-08-24)** — see caveat below |

**Caveat on OTEP-89/319/131's "covered" status:** these are marked covered based on Michelle's direct confirmation (2026-08-24): "Apply CTA will work and apply for FormSG or C@G." This is PM knowledge of working behavior, not a documented pass against written test-case criteria — OTEP-967's expected-result text, as written, doesn't instruct a tester to click Apply, verify a C@G or FormSG redirect, or check the missing-URL fallback; it names 7 specific data fields and stops there. **Recommend updating OTEP-967's expected-result text to explicitly include the Apply CTA/redirect check**, so the written test case matches what's actually confirmed working — otherwise a future tester executing OTEP-967 literally wouldn't necessarily re-verify this, and the next person to audit coverage would hit the same gap this analysis did.

OTEP-87 is the one exception: the PM confirmation covers the Apply CTA's *branching* behavior (does it go to the right destination), not OTEP-87's separate field-rendering rules (the "Not specified" fallback, hiding responsibilities/pre-requisites). Those remain unconfirmed and stay flagged.

**Ringfencing E2E cases also checked separately** (OTEP-975, 1301, 1302) — their expected results explicitly state "Apply button is visible and clickable" and stop there; none click the button or verify a redirect. This doesn't change any of the verdicts above. A few other keyword matches ("clear all" on OTEP-86 itself, "sort" on OTEP-1027) were also false positives testing unrelated behavior.

**OTEP-283 (Ministry icons) — marked covered under OTEP-956 per PM confirmation (2026-08-24), same pattern as OTEP-89/319/131.** OTEP-956 ("Each card displays correct basic info") is the closest written test case — its expected result explicitly names Title, Agency, Posting Date, and Type, but not the Ministry icon. Same caveat applies: this is a PM confirmation of working behavior, not documented pass/fail criteria. **Recommend adding "Ministry icon visible next to agency name" to OTEP-956's written expected result** alongside the Apply-CTA addition already recommended for OTEP-967.

**Pathfinder — remaining 6 gaps checked and confirmed genuinely uncovered:** OTEP-285 (return-to-page state), OTEP-386 (opportunity-type tooltip), OTEP-571 (card layout swap), OTEP-438 (admin placeholder), OTEP-1118 (deleted-opportunity 404 bug), OTEP-1119 (upload UI role-based access). Full keyword/behavior sweep across all 44 test cases found no genuine overlap — the one keyword hit (an unrelated "admin" mention in a job-family mapping test) was a false positive. **OTEP-406 (sort) and OTEP-613 (default logo)** also checked and confirmed uncovered — unsurprising, since neither has an AC to test against in the first place.

**Core: two real findings from the full sweep.**

**1. OTEP-1238's test scenario is explicitly documented as untestable, not just uncovered.** OTEP-947 (`DTL-04 — Optional unavailable fields omitted`) and OTEP-936 (`LAND-06`) both carry an explicit data note in their description:

> *"Duration cannot be missing in the current catalogue — `duration_hours` is NOT NULL (min 0.02h), so a course 'missing Duration' does not exist."*

This means OTEP-1238's bug (courses with `duration = 0` failing to import) **can't be exercised through the standard UAT test-case flow at all** — a data-import edge case, not a UI state a tester can click into. Someone already identified this limitation while writing an unrelated test case and left a note. **Verification needs a synthetic/seeded test record or a direct DB/import-log check, not a UAT click-through.**

**2. OTEP-1286 is covered — filed under a sibling ticket, same pattern as the Pathfinder findings.** OTEP-879 (`BLANK-01`, filed against OTEP-521) tests the exact scenario OTEP-1286's AC describes: an officer with a role but no role-based competencies and no self-declared competencies, expecting the "Roles unavailable right now — we couldn't load recommendations because there are no roles available" blank state with an Explore CTA. Confirmed by reading OTEP-879's actual test data and expected result, not just its title.

**Remaining Core gaps confirmed genuinely uncovered after the full sweep:** OTEP-1345 (403/502 bug), OTEP-812 (courses-page bug), OTEP-388 (multi-job-ID competency union), OTEP-980 (login error states), OTEP-669 (grade suffix removal), OTEP-698 (filter order), OTEP-321 (Cumulus ingestion), OTEP-1201 (no AC at all, nothing to test against).

---

## Summary

| | Pathfinder (OTEP-69) | Core (OTEP-67/68/58) |
|---|---|---|
| Build tickets | 47 | 40 |
| Build tickets with no AC | 2 (OTEP-406, 613) — 406 resolved via OTEP-85's own AC, 613 remains open | 1 (OTEP-1201) |
| Tickets with dedicated UAT coverage | 6 direct + 5 via E2E = 11 (23%), **+5 more covered under a sibling ticket, +4 more (OTEP-89, 319, 131, 283) marked covered by PM confirmation, +1 more (OTEP-406) genuinely subsumed by parent AC = 21 (45%) effective** | 18 (45%), **+1 more covered under a sibling ticket = 19 (48%) effective** |
| Real ⚠️ gaps, fully verified and PM-accepted as-is | **5**: OTEP-87 (C@G field-rendering rules — the one apply-chain ticket not resolved), 386, 1118, 1119, 613 — plus **285, 571, 438 confirmed uncovered and explicitly accepted, no action needed** | **6**: OTEP-1345, 812, 388, 980, 669, 698, 321, 1201 (8 listed; 1238 excluded — untestable, not a gap; 512/694/1286 excluded — resolved above) |
| Headline risk | **OTEP-89, 319, 131 marked covered by PM confirmation (2026-08-24) that the Apply CTA correctly branches to FormSG or C@G. Written test-case criteria (OTEP-967) still don't document this — recommend updating the ticket text so it's not re-flagged next audit. OTEP-87's C@G-specific field-rendering rules remain unverified.** | **OTEP-1345 and OTEP-812 have no regression test case; OTEP-1238 can't be tested via normal UAT flow at all given current catalogue data (not the same as a gap — flagged separately)** |

**Both epics show the same pattern: the "happy path" build tickets (listing, search, filter, core detail page) are well-covered; edge cases, secondary flows, and bug-fix tickets are not — though the coverage picture is measurably better than ticket-ID matching alone suggests**, since several small Pathfinder stories were tested under a sibling ticket's ID rather than their own. **The apply/conversion flow (OTEP-87, 89, 131, 319) was checked line-by-line against every plausible sibling test case.** Michelle confirmed on 2026-08-24 that the Apply CTA correctly branches to FormSG or C@G, resolving OTEP-89, 319, and 131 — but the written test-case text (OTEP-967) still doesn't document this, so it's flagged as a documentation-sync task rather than a closed loop. OTEP-87's field-rendering rules (the "Not specified" fallback, hidden responsibilities) are separate from the CTA-branching behavior and remain unconfirmed. Core's gap is smaller and more localized — 3 live bugs without regression cases.

---

## What I'd check next, in order

1. **Update OTEP-967 and OTEP-956's written expected-result text** to explicitly include the Apply CTA/redirect check and the Ministry icon respectively. Michelle confirmed (2026-08-24) both behaviors work — the CTA correctly branches to FormSG or C@G (resolving OTEP-89, 319, 131), and the card/detail displays are otherwise correct (resolving OTEP-283) — but neither written test case documents these checks. Closing this gap in the written criteria (not the underlying behavior) prevents the same false-gap finding from resurfacing in a future audit. **OTEP-87 remains genuinely open** — the PM confirmation covered CTA branching, not OTEP-87's separate field-rendering rules (the "Not specified" fallback, hidden responsibilities/pre-requisites for C@G-sourced data).
2. **OTEP-1345 and OTEP-812 (Core bugs)** — add regression test cases before these are called closed, so the same defect can't silently resurface. **OTEP-1238 needs a different fix**: it can't be verified via a normal UAT click-through given current catalogue data (see cross-reference finding above) — needs a seeded test record or a direct data/import-log check instead.
3. **OTEP-613 (Pathfinder), OTEP-1201 (Core)** — backfill AC after the fact, purely for documentation completeness; low urgency since both are already Done and stable. **OTEP-406 needs no further action** — genuinely subsumed by OTEP-85's own AC and OTEP-955's tested sort-order result, not a stretch reading.
4. **OTEP-512 and OTEP-694 (Core, My Development)** — already tracked as open UAT items; this matrix confirms they're the only two build tickets in Core with meaningfully incomplete test coverage (not just one missing case).
5. **PM-accepted, no action needed:** OTEP-285 (return-to-page), OTEP-571 (card layout), OTEP-438 (admin placeholder) — confirmed genuinely uncovered, and Michelle's confirmed that's fine as-is (2026-08-24).
6. **Remaining low-stakes, not yet actioned:** OTEP-386 (tooltip), OTEP-1118 (deleted-opportunity bug), OTEP-1119 (upload UI access), OTEP-613 (default logo) — Pathfinder; OTEP-388, 980, 669, 698, 321 — Core. Worth a batch backfill of test cases at some point, not an urgent chase.

---

*Sources: live Jira — Pathfinder epic backlog (`parent = OTEP-69`, 47 tickets), Core epic backlogs (`parent in (OTEP-67, OTEP-68, OTEP-58)`, 40 tickets), Pathfinder UAT set (`labels = PATHFINDER AND labels = uat`, 44 tickets), Core UAT set (`labels in (CORE, core)`, 78 tickets) — all pulled 2026-08-24, with full ticket descriptions read for AC-presence check.*
