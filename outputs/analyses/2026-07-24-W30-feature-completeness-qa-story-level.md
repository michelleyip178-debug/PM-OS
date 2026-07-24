---
date: 2026-07-24
week: 2026-W30
topic: Feature Completeness and QA — organized Feature > Story
status: draft — proposed extension of Pow Hwee's page (2481393117), for his review before merging back to Confluence
---

# Feature Completeness and QA — Feature > Story Breakdown

**Source page:** [Feature Completeness and QA](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481393117) — Pow Hwee Tan, last updated 2026-07-23.

**What Pow Hwee built:** a page-level audit of every QA test-case page under Pathfinder Team (pulled via Confluence's full descendant tree, 13 pages confirmed complete — nothing missed). Two tables: does a test table exist per page, and what's the actual pass rate. This is a stricter, more skeptical read than "test cases exist" — he's distinguishing authored coverage from executed/verified coverage.

**What this extension adds:** each of his page-level rows actually bundles multiple Jira user stories (e.g. the Detail Page's QA page covers 5 separate stories: OTEP-128, 129, 283, 284, 87). This version nests each feature's stories underneath it, so a reader sees the feature's overall coverage number first, then drills into which specific stories inside it are Done vs. still moving, and which have real gaps.

**Method:** for each of Pow Hwee's 12 audited pages, pulled the Jira macro keys referenced on that page, then pulled each key's live summary and status. Coverage/pass-rate figures are copied directly from his page, not re-derived.

---

## Feature: Listing & OTG Data
**QA page:** [Opportunities listing page with OTG data](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2270988661) · **Coverage: 68% (17/25)**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-85](https://sgtechstack.atlassian.net/browse/OTEP-85) | Display opportunity cards with real OTG data | ✅ Done |
| [OTEP-268](https://sgtechstack.atlassian.net/browse/OTEP-268) | Empty, error, and partial-load states for the listing | ✅ Done |
| [OTEP-284](https://sgtechstack.atlassian.net/browse/OTEP-284) | "Closing soon" label on cards and detail page | ✅ Done |
| [OTEP-285](https://sgtechstack.atlassian.net/browse/OTEP-285) | Click-through to detail and return-to-page state | ✅ Done |
| [OTEP-613](https://sgtechstack.atlassian.net/browse/OTEP-613) | [FE] Default agency logo when none present | ✅ Done |

All 5 stories bundled into this page are Done — the 68% pass rate reflects execution gaps against finished work, not unfinished stories.

---

## Feature: Detail Page
**QA page:** [OTEP-128 View opportunity detail page](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2270694280) · **Coverage: 52% (13/25, executed set)**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-128](https://sgtechstack.atlassian.net/browse/OTEP-128) | View opportunity detail page | ✅ Done |
| [OTEP-129](https://sgtechstack.atlassian.net/browse/OTEP-129) | See whether an opportunity is open/closed before applying | ✅ Done |
| [OTEP-283](https://sgtechstack.atlassian.net/browse/OTEP-283) | Add Ministry icons to detail page | 🟡 In Progress |
| [OTEP-284](https://sgtechstack.atlassian.net/browse/OTEP-284) | "Closing soon" label on cards and detail page | ✅ Done *(shared with Listing above)* |
| [OTEP-87](https://sgtechstack.atlassian.net/browse/OTEP-87) | View Careers@Gov Opportunity Detail | 🟡 QA *(also appears under C@G Listing & Detail below — see note)* |

⚠️ **OTEP-283 is In Progress** — any test cases against Ministry icons are testing unfinished work, which pulls the page's 52% down against a moving target, not just a static defect count.
⚠️ **OTEP-87 appears here and on the C@G page with contradictory pictures** — bundled into this page's 52% pass rate, but zero test cases on its other page. Confirm with Pow Hwee which page is the real source of truth for OTEP-87.

---

## Feature: Click-through & Return (dedicated page)
**QA page:** [OTEP-285 Click-through to detail and return to page state](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2270956054) · **Coverage: ❌ No test cases**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-285](https://sgtechstack.atlassian.net/browse/OTEP-285) | Click-through to detail and return-to-page state | ✅ Done |

Same story (OTEP-285) already has coverage bundled into the Listing page above (part of its 68%). This dedicated page is empty. Confirm whether it's meant to hold OTEP-285's real coverage and is simply not started, or whether it's redundant with Listing's coverage and can be retired.

---

## Feature: Clear Filters
**QA page:** [OTEP-317 Clear filters and reset view](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2354879726) · **Coverage: 100% (6/6)**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-317](https://sgtechstack.atlassian.net/browse/OTEP-317) | Clear filters and reset view | ✅ Done |

Only fully clean feature in the audit — Done story, full pass rate.

---

## Feature: Keyword Search
**QA pages:** [OTEP-405 (BE/FE) Keyword search for opportunities — Dev/QA plan](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2365851089) (12 cases, all blank) · [OTEP-405 Search opportunities — UAT execution](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2398029661) · **Coverage: 46% (6/13)**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-405](https://sgtechstack.atlassian.net/browse/OTEP-405) | [FE/BE] Keyword Search for Opportunities | 🟡 In Progress |

⚠️ **Story is not Done, and two separate QA pages exist for the same story** — one (Dev/QA plan, 12 cases) is entirely unexecuted, the other (UAT execution) is where the 46% comes from. Worth Pow Hwee clarifying whether both pages are needed going forward or whether the Dev/QA plan page should be retired once UAT execution supersedes it.

---

## Feature: Ringfencing
**QA pages:** [OTEP-390 Ringfenced opportunity detail page states](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2428635041) (0% executed) · [Ring-fencing Opportunities](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2482014846) · **Coverage: 0% (0/7) on dedicated page**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-390](https://sgtechstack.atlassian.net/browse/OTEP-390) | Ringfenced opportunity detail page states | 🟡 In Progress |
| [OTEP-408](https://sgtechstack.atlassian.net/browse/OTEP-408) | [BE] Listing API — apply ringfencing eligibility filter | 🔲 Backlog |
| [OTEP-409](https://sgtechstack.atlassian.net/browse/OTEP-409) | [FE] Listing — reflect ringfenced results | 🔲 Backlog |

⚠️ **None of the three stories bundled here are Done** — two are still Backlog. Test cases exist for work that hasn't been built yet. The 0% pass rate is expected given this, not a red flag in isolation — but it means Ringfencing shouldn't be read as "written but failing," it's "written ahead of the build."

---

## Feature: Apply via FormSG
**QA page:** [OTEP-319 Apply via FormSG — basic redirect](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2356840149) · **Coverage: 75% (6/8) — 1 FAIL (TC-06), 1 N/A (TC-01)**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-319](https://sgtechstack.atlassian.net/browse/OTEP-319) | Apply via FormSG — basic redirect (Internal Jobs, STIPs, Gigs) | ✅ Done |

Story is Done, coverage is real and mostly clean. TC-06's FAIL is a concrete, specific defect worth chasing rather than a coverage gap.

---

## Feature: C@G Listing & Detail
**QA page:** [OTEP-88 C@G Opportunities in the Listing & OTEP-87 Detail pages](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2453602670) · **Coverage: ❌ No test cases**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-88](https://sgtechstack.atlassian.net/browse/OTEP-88) | C@G opportunities in the listing page | 🟡 In Progress |
| [OTEP-87](https://sgtechstack.atlassian.net/browse/OTEP-87) | View Careers@Gov Opportunity Detail | 🟡 QA *(also appears under Detail Page above)* |

OTEP-88 having zero tests is consistent with it not being Done yet. **OTEP-87 is more concerning** — its Jira status is already "QA," meaning someone should be actively testing it, but this page (its more specific home) has nothing written. See the Detail Page section above for the contradictory partial-coverage picture.

---

## Feature: OTG Ingestion Scheduler
**QA page:** [OTEP-348 OTG data ingestion — scheduler & Observability](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2326398917) · **Coverage: 0% (0/21) — "written but backlogged"**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-348](https://sgtechstack.atlassian.net/browse/OTEP-348) | OTG data ingestion — scheduler & observability | 🔲 Backlog |

Consistent — story is Backlog, tests are written but unexecuted. Infrastructure-layer, not officer-facing; worth confirming with Pow Hwee whether this belongs in a Pathfinder officer-facing UAT readiness picture at all, or if it's tracked here for a different reason (e.g. data reliability sign-off).

---

## Feature: Admin Placeholder
**QA page:** [OTEP-438 Placeholder UI for admin view](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2453111353) · **Coverage: ❌ No test cases**

| Story | Summary | Live Jira Status |
|---|---|---|
| [OTEP-438](https://sgtechstack.atlassian.net/browse/OTEP-438) | Placeholder UI for admin view | 🟡 QA |

Same pattern as OTEP-87 — Jira status says "QA" (should be under active testing) but zero test cases exist on the page.

---

## Cross-Feature Findings

**Two stories are in "QA" Jira status with zero test cases written against them: OTEP-87 and OTEP-438.** This is the most actionable finding — these aren't "not built yet" gaps, they're "supposed to be tested right now" gaps.

**Two stories appear under more than one feature page with different coverage pictures: OTEP-87 (Detail Page vs. C@G) and OTEP-285 (Listing vs. its own dedicated Click-through page).** Worth Pow Hwee designating one page as the canonical source per story, or explicitly noting the split is intentional (e.g. one page covers happy-path, the other covers a specific flow).

**Ringfencing's 0% and OTG Ingestion's 0% are both explained by story status (In Progress/Backlog), not by defects.** Worth distinguishing "0% because untested-but-fine-for-now" from "0% because things are failing" — the current page-level table doesn't make that distinction visible, which risks these two rows being read as equally alarming as, say, a Done story failing outright.

---

## Suggested next step

Confirm with Pow Hwee:
1. Whether this Feature > Story structure is the right shape for merging into his page, replacing or sitting alongside his existing two tables
2. Whether the OTEP-87 and OTEP-285 duplicate-coverage findings are already known to him
3. Whether "story in QA status, zero tests written" (OTEP-87, OTEP-438) should become a named risk flag on the page going forward

---

*Generated: 2026-07-24. Pass-rate figures are copied verbatim from [Feature Completeness and QA](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481393117) (Pow Hwee Tan) — not independently re-verified. Live Jira status pulled 2026-07-24 and may drift from Pow Hwee's 23 Jul snapshot for fast-moving stories.*
