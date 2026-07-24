---
date: 2026-07-23
week: 2026-W30
topic: Opportunities — Requirements Traceability Matrix (by feature)
status: updated 2026-07-24 — reconciled against the published Consolidated Test Plan (Confluence)
---

# Requirements Traceability Matrix — Opportunities (Unified Discovery Hub)

**Source:** PRD (`context-library/prds/opportunities-listing.md`), live Jira status (pulled 2026-07-23), QA's actual test case documentation on Confluence ([Pathfinder Team space](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2270988643), child pages listed below), and the [Consolidated Test Plan — Pathfinder](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934) (published 2026-07-24, under the parent [Consolidated Test Plan — Pathfinder + Core](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2483521176)). This version reconciles the earlier gap list against that published plan — several findings below are now resolved, not just flagged.

**Confluence pages pulled:**
| Page | Page ID | Jira IDs covered |
|---|---|---|
| Opportunities listing page with OTG data | 2270988661 | OTEP-85, 284, 268, 613, 285 |
| OTEP-128 View opportunity detail page | 2270694280 | OTEP-128, 129, 283, 284, 87 |
| OTEP-405 (BE/FE) Keyword search for opportunities | 2365851089 | OTEP-405 |
| OTEP-405 Search opportunities | 2398029661 | OTEP-405 |
| OTEP-390 Ringfenced opportunity detail page states | 2428635041 | OTEP-390 |
| OTEP-88 C@G Opportunities in the Listing & OTEP-87 Detail pages | 2453602670 | OTEP-87, 88 (page is a stub, ~800 bytes, no test cases written yet) |
| Ring-fencing Opportunities | 2482014846 | OTEP-390, 408, 409 |

**Note on scope:** QA's test cases are organized around Confluence's own groupings (Listing, Detail Page, Search, Ringfencing), which map closely but not 1:1 to the PRD's user-story list. Some PRD requirements (filter by type/category, clear filters, FormSG apply, C@G deep-link) don't appear to have a dedicated QA page yet — flagged as gaps below, not assumed covered.

---

## Coverage Summary

| Status | Count |
|---|---|
| Requirements with QA test cases found | 5 features (Listing, Detail Page, Search, Ringfencing, Apply — C@G/FormSG) |
| Requirements with no QA page/BO cases yet | Filtering by type/category, Search (BO conversion pending), most of C@G Integration, Login |
| BO-executable test cases now published (Consolidated Test Plan) | 50 across Listing (6), Filtering (6), Detail Page (12, incl. 5 new competency-match cases), Ringfencing (17), Apply C@G (5), Apply FormSG (4) |
| Confirmed PASS mentions (raw QA pages, pre-conversion) | 18 (Listing) + 13 (Detail Page) + 6 (Search v2) = 37 |
| Confirmed FAIL mentions | 0 across all pulled pages |
| Confirmed BLOCKED mentions | 1 (Listing — CFT import) + 1 (Ring-fencing) |

**Headline:** ✅ **Ringfencing's earlier "no test cases, no personas" gap is resolved for the test-case half** — 17 BO-executable cases (UAT-RF-001–017) are now published, converted directly from QA's existing Confluence coverage. The persona/account gap is still open (see below). Detail Page also gained 5 new competency-match cases from Rathika's test data prep. Filtering by type/category, Search's BO conversion, and most of C@G Integration remain real, unaddressed gaps.

---

## Feature: Listing & Discovery

**QA page:** [Opportunities listing page with OTG data](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2270988661) — 23 test cases (TC-OPPLIST-01 to 23)

**QA's own status note:** "In Progress 3/25 cases - blocked by CFT import. Manual Execution 17/25 cases passed. 5 Bugs reported in OTEP-663."

| Req ID | Requirement (PRD) | Jira ID | Build Status | QA Coverage | Test Result |
|---|---|---|---|---|---|
| REQ-01 | Opportunity card listing — 3-col grid, 15/page, auth-gated, ringfenced | OTEP-85 | ✅ Done | ✅ Covered — TC-OPPLIST-01/02 (authenticated nav + direct URL access), TC-OPPLIST-03 (card mandatory fields) | 17/25 cases in this page passed |
| REQ-02 | Pagination | OTEP-267 | ✅ Done | ⚠️ Not explicitly named in this page's Jira list — confirm with QA whether pagination has its own TC or is folded into general listing cases | Unconfirmed |
| REQ-03 | Empty / error / partial-load states | OTEP-268 | ✅ Done | ✅ Referenced (OTEP-268 in page's Jira list) | Part of the 17/25 pass count — not broken out per-story |
| REQ-08 | "Closing soon" label (≤7 days) — card + detail | OTEP-284 | ✅ Done | ✅ Referenced (OTEP-284 in page's Jira list) | Part of the 17/25 pass count |
| REQ-09 | Ringfencing via POCDEX | OTEP-127 | ✅ Done | ⚠️ Not directly referenced on this page — ringfencing has its own dedicated pages (see below); **OTEP-127 itself still isn't referenced anywhere in QA's pulled pages** | Needs a direct check with QA — may be covered under "Ring-fencing Opportunities" page instead |

**Feature gap:** 3 of 25 test cases blocked by CFT import (a real, active blocker). 5 bugs already reported against OTEP-663 (a bug sub-task, not in the original PRD scope — worth checking if OTEP-663 is tracked in your grooming/sprint view). REQ-09 (ringfencing) doesn't appear on this page at all — see the dedicated Ringfencing section below, since QA split ringfencing into its own pages under OTEP-390/408/409, not OTEP-127.

---

## Feature: Opportunity Detail Page

**QA page:** [OTEP-128 View opportunity detail page](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2270694280) — 12 test cases (MVP-DTL-xx / QA-DTL-xx)

**QA's own status note:** "Done in Dev" — UAT Test Cases: Detail Page (Access, Display & Application Flows)

| Req ID | Requirement (PRD) | Jira ID | Build Status | QA Coverage | Test Result |
|---|---|---|---|---|---|
| REQ-04 | Mock detail endpoint for opportunity | OTEP-295 | ⚠️ Not found in Jira | Not applicable — this was a Sprint 2 backend scaffolding task, not something QA would test directly | N/A — likely fine to drop from UAT-facing RTM; it's implementation detail, not a testable officer-facing requirement |
| REQ-05 | Opportunity detail page | OTEP-128 | ✅ Done | ✅ Covered — MVP-DTL-01 (access via card click), plus 11 more test cases on access/display/application flows | 13 PASS mentions on this page |
| REQ-16 | Detail page: apply CTA + competencies | OTEP-87 | 🟡 QA | ✅ Referenced (OTEP-87 in page's Jira list) — **but the PRD's flagged Jira/PRD AC mismatch on OTEP-87 is still unresolved.** QA may be testing against the ACs as currently written in Jira, which the PRD itself says don't match intent. | Included in the 13 PASS mentions, but worth a direct question to QA: did they test against the corrected intent or the as-written (mismatched) Jira ACs? |

**Feature gap:** REQ-04 (OTEP-295) is very likely a non-issue for UAT purposes — it was backend scaffolding, not an officer-facing requirement, so recommend dropping it from future UAT-facing versions of this matrix rather than continuing to flag it. REQ-16's AC mismatch is the real open item — 13 PASS mentions don't tell you whether QA tested the right thing.

**✅ Update 2026-07-24:** 5 new BO-executable test cases (UAT-OPP-020–024) were added to the Consolidated Test Plan, covering competency-match display on opportunity cards — pulled from Rathika's [\[WIP\] UAT Test Data](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2447827423) prep (4 paired accounts: `PROFILE_OPP_MAX_COMP_MATCH`, `PARTIAL_COMP_MATCH`, `NO_COMP_MATCH`, `NO_COMPETENCIES`, plus the `OPP_MAX_COMP_MATCH` / `OPP_COMP_NULL` opportunities). **Caveat still open:** this test data assumes competency matching actually resolves, which depends on REQ-X2's agency-code gap being closed — see Cross-Cutting Requirements below.

---

## Feature: Filtering & Search

**QA pages found:** Two pages both under OTEP-405 — "(BE/FE) Keyword search for opportunities" (12 test cases, TC-S01–S12) and "Search opportunities" (13 test cases, UAT-SEARCHOPP-01–13 / QA-SEARCHOPP-11–12). These look like two passes at the same story (BE/FE technical test cases vs. UAT-facing test cases) rather than duplicate coverage.

| Req ID | Requirement (PRD) | Jira ID | Build Status | QA Coverage | Test Result |
|---|---|---|---|---|---|
| REQ-10 | Keyword search (US-02) | OTEP-91 (PRD) / **OTEP-405 (Confluence)** | ⚠️ OTEP-91 not found in Jira, but **OTEP-405 is the actual story QA is testing against** | ✅ Covered — TC-S01 (UI placement), TC-S02 (case-insensitive/partial match), plus 10 more BE/FE cases; UAT-SEARCHOPP-01 (search UI placement) plus 12 more | 6 PASS mentions on the UAT-facing page; one already-fixed bug noted ("extra space below nav bar") |
| REQ-11 | Filter opportunities by type (Jobs, STIPs, Gigs) | OTEP-86 | ✅ Done | ❌ No dedicated QA page found for filter-by-type | Gap — real, not just undiscovered |
| REQ-12 | Filter by category | OTEP-318 | 🔲 Backlog | ❌ No QA page (consistent — no ACs exist yet to test against) | N/A until ACs written |
| REQ-13 | Clear all filters | OTEP-317 | ✅ Done | ❌ No dedicated QA page found | Gap |

**Important finding:** The PRD references OTEP-91 for keyword search, but QA's actual test documentation is built against **OTEP-405**. This is likely the real story ID (OTEP-91 may have been the original US-02 placeholder before a proper ticket was cut) — worth updating the PRD to reference OTEP-405 instead of continuing to chase a stale ID. This resolves one of the two "not found in Jira" flags from the earlier version of this matrix.

**Feature gap:** Search is well covered. Filter-by-type and clear-filters have no visible QA test cases at all — these are built (Done in Jira) but genuinely untested as far as this Confluence space shows. Worth confirming with QA directly whether these are tested elsewhere or are a real gap.

---

## Feature: Ringfencing

QA split ringfencing into two dedicated pages, separate from the general Listing/Detail pages — worth noting since the PRD treats ringfencing as one line item (OTEP-127) under Listing.

**QA pages:** [OTEP-390 Ringfenced opportunity detail page states](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2428635041) (3 test cases, TC-UAT-01–03) and [Ring-fencing Opportunities](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2482014846) (15 test cases, TC-01–15, covering OTEP-390, 408, 409)

| Req ID | Requirement (PRD) | Jira ID | Build Status | QA Coverage | Test Result |
|---|---|---|---|---|---|
| REQ-09 | Ringfencing via POCDEX | OTEP-127 (PRD) — **not referenced in any QA ringfencing page** | ✅ Done (per Jira) | ⚠️ QA is testing OTEP-390/408/409, not OTEP-127 | Needs direct confirmation: is OTEP-127 the display-contract spike that fed into OTEP-390/408/409's actual implementation, or is it a separate, untested deliverable? |
| (not in PRD's MVP list) | Ringfencing rule engine — Master Switch, Include/Exclude rules by agency | OTEP-408, OTEP-409 | Per RTM's earlier pull: OTEP-408/409 still in Backlog per PRD, but QA already has 15 test cases written against them (TC-01: Master Switch Off, TC-02: Include-Match, etc.) | ✅ Substantially covered — 15 test cases exist | 1 BLOCKED mention; otherwise not explicitly marked PASS/FAIL in the stripped text, worth a manual read |

**Important finding:** This is the resolution to the earlier flagged "scope drift" on OTEP-127 (PRD says "Ringfencing via POCDEX," Jira title says "[Spike] Define ringfencing display contract"). It looks like OTEP-127 was the spike that defined the *contract*, and OTEP-390/408/409 are the actual implementation QA is testing against. That's not necessarily a problem — spikes feeding into build tickets is normal — but worth confirming explicitly with engineering that OTEP-127's contract is what OTEP-390/408/409 actually implemented, since 15 test cases already exist for stories the PRD still lists as "Backlog."

**Feature gap:** Ringfencing has more test coverage than the PRD's own story list would suggest — OTEP-408/409 have 15 test cases despite showing as Backlog in the PRD. This is a good sign for coverage but a bad sign for PRD accuracy — the PRD needs updating to reflect that ringfencing work has progressed further than "Backlog."

**✅ Update 2026-07-24 — test cases now converted, execution still blocked:** All 17 usable QA test cases across both Confluence pages (TC-01–17, TC-UAT-01–03, QA-EC-01–04, minus 3 import-mapping cases and 2 unresolved design questions) have been rewritten into BO-executable format as UAT-RF-001–017 in the published [Consolidated Test Plan — Pathfinder](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934). **This closes the "no BO-facing cases exist" gap, but not the underlying blocker**: none of the 3 required test accounts (eligible officer, ineligible officer, incomplete-profile officer) are created or reserved yet — confirmed absent from Rathika's test data prep as of 2026-07-24. Two cases (UAT-RF-007, UAT-RF-008) also still need an engineering decision on case-sensitivity/whitespace handling before a BO can judge pass/fail. The two "pending clarification" list-view display questions (pin-to-top vs. date sort; visual distinction for ringfenced items) remain unresolved design gaps, not carried into BO cases.

---

## Feature: Careers@Gov Integration

**QA page:** [OTEP-88 C@G Opportunities in the Listing & OTEP-87 Detail pages](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2453602670) — **page exists but is essentially empty (~800 bytes, no test case table found).**

| Req ID | Requirement (PRD) | Jira ID | Build Status | QA Coverage | Test Result |
|---|---|---|---|---|---|
| REQ-17 | C@G opportunities in listing page (label) | OTEP-88 | 🟠 In Progress | ❌ Page created but not populated yet | N/A — likely blocked on build completing (still In Progress) |
| REQ-18 | C@G deep-link apply CTA / View C@G Job | OTEP-89 | ✅ Done | ❌ No dedicated coverage found (OTEP-87 test cases live on the Detail Page, not here) | Gap |
| REQ-19 | EDM deep-link landing | OTEP-133 | ✅ Done | ❌ No QA page found | Gap |

**Feature gap:** This is the least-covered feature. The one page that exists is a placeholder — makes sense for REQ-17 since the build isn't done, but REQ-18 and REQ-19 are both Done in Jira with no visible test coverage at all.

---

## Feature: Application / Apply Flow

No dedicated QA page found in the pulled Confluence children for FormSG apply flow.

| Req ID | Requirement (PRD) | Jira ID | Build Status | QA Coverage | Test Result |
|---|---|---|---|---|---|
| REQ-14 | Apply via FormSG — basic redirect (STIPs, Gigs, Internal Jobs) | OTEP-319 | ✅ Done | ❌ No QA page found | Real gap — this is a P0 apply-path requirement with no visible test coverage |
| REQ-15 | Apply via FormSG — PostHog tracking (webhook scope cut) | OTEP-130 | 🔲 Backlog | ❌ No QA page (consistent with Backlog status) | N/A pending OTEP-130 duplicate-vs-keep decision |

**Feature gap:** This is the most concerning finding in the whole matrix. REQ-14 is a Done, P0, officer-facing apply path with zero visible QA test cases across the entire Confluence space pulled. Worth checking directly with QA whether apply-flow testing lives on a page outside this parent, or whether it's a genuine coverage gap.

---

## Cross-Cutting Requirements

| Req ID | Requirement | Status | Notes |
|---|---|---|---|
| REQ-X1 | Application Completion Rate instrumentation (PostHog events) | ⚠️ Not verified in any pulled QA page | None of the pulled pages reference PostHog event validation — likely a separate instrumentation QA pass, not covered by functional UAT test cases |
| REQ-X2 | Competency-to-opportunity matching (agency-code gap) | 🔴 Structural gap, unresolved as of 2026-07-23 | Not referenced in any pulled QA page — makes sense, since this was only formally surfaced 2026-07-22 and the architecture decision only landed this afternoon (Sprint 7 planning). QA test cases here don't exist yet by necessity, not oversight. |
| REQ-X3 | FormSG pre-fill via URL params | 🔴 Unresolved (open item #14, Pow Hwee) | Blocks REQ-15/OTEP-130 scope — not testable until resolved |

---

## Gaps This Matrix Surfaces (updated 2026-07-24 against the published Consolidated Test Plan)

**Resolved since 2026-07-23:**
1. ~~Apply Flow (REQ-14) has zero visible QA coverage~~ — ✅ **Resolved.** UAT-APPLY-006–009 are now published, covering the FormSG redirect path.
2. ~~Ringfencing has no BO-facing test cases~~ — ✅ **Resolved for test-case writing.** UAT-RF-001–017 published. **Still blocked on execution** — see below.

**Still open:**
1. **C@G Integration is almost entirely uncovered** — one placeholder page, two Done requirements (REQ-18/OTEP-89, REQ-19/OTEP-133) with no dedicated test cases beyond the 5 general C@G apply-flow cases (UAT-APPLY-001–005).
2. **Filter-by-type and clear-filters (REQ-11, REQ-13) are Done but untested** — the Consolidated Test Plan's Filtering section only covers this via general STIP/Gig filter scenarios; type/category and clear-filters specifically still lack dedicated cases.
3. **OTEP-91 (PRD) vs. OTEP-405 (QA's actual reference) — the PRD has a stale story ID for keyword search.** Still not corrected in the PRD as of this update.
4. **Ringfencing execution is blocked on 3 missing test accounts** (eligible, ineligible, incomplete-profile officer) — confirmed absent from Rathika's test data prep as of 2026-07-24. 17 cases are written and waiting.
5. **Ringfencing has more implementation progress than the PRD reflects** — OTEP-408/409 show 15 QA test cases despite being listed as "Backlog" in the PRD. PRD needs a refresh, not further chasing in Jira.
6. **OTEP-127's actual role is now clearer**: it's the display-contract spike, not the shipped ringfencing feature. OTEP-390/408/409 are what's actually tested. Confirm this reading with engineering, but it resolves the earlier scope-drift flag.
7. **REQ-16 (OTEP-87)'s AC mismatch is still open** — 13 PASS mentions exist, but nothing confirms QA tested against the corrected intent rather than the as-written (flagged-as-wrong) Jira ACs.
8. **REQ-04 (OTEP-295) is very likely a non-issue** — backend scaffolding, not an officer-facing testable requirement. Recommend dropping from future versions of this matrix rather than continuing to chase it as a gap.
9. **New (2026-07-24): the 5 new competency-match cases (UAT-OPP-020–024) depend on REQ-X2's agency-code gap being resolved.** Rathika's test data assumes matching works; if REQ-X2 is still open when these run, UAT-OPP-020 will surface the structural gap rather than a data-account bug.
10. **Search's BO-facing cases still don't exist** — the Consolidated Test Plan's Search section is an empty table as of 2026-07-24, despite QA/technical coverage (TC-S01–12, UAT-SEARCHOPP-01–13) existing.
11. **Login/Authentication's BO-facing cases still don't exist** — blocked on the WOG AD swap, same as before.

---

## Recommended Next Steps

1. ~~Ask QA whether Apply Flow has test coverage~~ — ✅ Done, UAT-APPLY-006–009 published.
2. **Ask QA to populate or link the C@G Confluence page** — currently a near-empty stub for OTEP-88/87.
3. **Confirm with engineering**: does OTEP-127 (spike) map directly to what OTEP-390/408/409 implement? If yes, update the PRD to reflect that ringfencing has progressed past "Backlog."
4. **Update the PRD's stale OTEP-91 reference to OTEP-405** for keyword search.
5. **Ask QA directly**: for REQ-16 (OTEP-87), did the 13 passed test cases validate against the corrected AC intent, or the Jira-as-written ACs the PRD flags as mismatched?
6. **Chase the 3 CFT-import-blocked test cases on the Listing page** — this is a live, named blocker (not a vague gap), worth a status check today.
7. **Drop REQ-04 (OTEP-295)** from future UAT-facing versions of this matrix — it's implementation detail, not a testable officer-facing requirement.
8. **New: get the 3 ringfencing test accounts created and reserved** — this is now the single biggest lever, since 17 written cases are sitting idle waiting on them.
9. **New: convert Search's QA cases to BO format** — the only remaining "cases don't exist" gap in Pathfinder scope; everything else is either done or blocked on accounts/decisions rather than writing.
10. **New: confirm REQ-X2 (agency-code gap) status before running UAT-OPP-020–024** — if unresolved, brief whoever executes these that a total match failure is a known architecture gap, not a new bug.

---

*Generated: 2026-07-23. Updated 2026-07-24 to reconcile against the published [Consolidated Test Plan — Pathfinder](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934) (Confluence, under [Consolidated Test Plan — Pathfinder + Core](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2483521176)). Two of the original 8 gaps are now resolved (Apply Flow coverage, Ringfencing test-case writing); Ringfencing's underlying account/persona blocker remains open. Real gaps that remain: C@G Integration, filter-by-type/clear specifically, Search's BO conversion, Login, and the ringfencing test-account creation.*
