# Opportunities UAT Coverage — Value-Cost Ratio Prioritization

**Purpose:** Rank the 54 gap cases + open blockers from [Pow Hwee TAN's Test Coverage Targets](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081) by Value ÷ Cost, so effort goes to the highest-leverage work first instead of following the source page's category order.

**Scored by area, not per-case.** 54 individual scores would be noise — the real decision is "which area next," and cases within an area move together (e.g., all 6 ringfencing cases are gated on the same 3 test accounts).

---

## How the scores are derived

**Value (1–5)** — take the ceiling of three signals, not the average, because any one alone can justify a high score:

1. **Blocking force** — does this unblock a stuck ticket, or unlock a pile of cases that are already written but can't run? A written-but-blocked case is value sitting idle; unblocking it returns that value immediately at near-zero new-authoring cost.
2. **Failure blast radius** — per Pow Hwee's own risk-weighting logic on the source page: a silent, systemic failure (ingestion, access control) outranks a cosmetic one (display), because one miss affects every officer at once rather than the one who happens to hit it.
3. **External obligation** — a fixed compliance requirement (DSS accessibility) scores on obligation alone, independent of usage volume, because it surfaces in review regardless of how many officers are affected day to day.

**Cost (1–5)** — inverse of effort, anchored to what the source page explicitly names as the blocker:

- **1** = a single decision or unblock away from being nearly free (e.g., three test accounts unlock 24 already-written cases)
- **2–3** = writing net-new cases against a feature that's stable and already understood
- **4–5** = needs infrastructure or tooling that doesn't exist yet (pipeline fixtures, agreed performance thresholds, API-level security tooling), or needs a specialist skill (screen-reader testing) the team doesn't currently deploy

**VCR = Value ÷ Cost.** This is directional, not scientific — the numbers exist to force relative ranking, not to be defended to two decimal places.

---

## Ranked table

| Rank | Area | Value | Cost | VCR | Why |
|---|---|---|---|---|---|
| 1 | **Ringfencing test accounts** (unblocks NEW-28..33 + ~24 existing written cases) | 5 | 1 | **5.0** | Access-control area — a miss here is an incident, not a cosmetic bug (Pow Hwee's own weighting). ~24 cases already written and sitting idle; 3 accounts is the entire blocker. Highest latent value in the whole tree, cheapest unblock. |
| 2 | **SJR contradiction close-out** (RTM open item 11) | 3 | 1 | **3.0** | You've already made the call ("no SJRs"). Closing this in Jira/Confluence removes a standing spec contradiction (OTEP-128 vs OTEP-131) for near-zero effort — pure cleanup, no new authoring. |
| 3 | **Category filter cases (NEW-04..17)** | 5 | 2 | **2.5** | OTEP-437 sits in QA with zero cases — directly blocking a ticket's exit, and the source page independently flags it "highest priority." Mapping table already exists (22 Jul), so authoring cost is moderate, not high. |
| 4 | **Ringfencing rule-precedence decision** (unblocks NEW-28/29) | 4 | 1 | **4.0** | A spec gap, not a test gap — the squad hasn't defined what happens when include/exclude rules collide. One decision unlocks 2 adversarial cases in an access-control area. |
| 5 | **Search interaction cases (NEW-01..03)** | 3 | 2 | **1.5** | Feature is built and mostly passing; these are genuinely new equivalence classes (pagination, sort, unicode) neither existing page covers. Low cost once the two overlapping OTEP-405 pages are merged. |
| 6 | **Login/session cases (NEW-34..38)** | 3 | 2 | **1.5** | Write-now-run-later: cheap to author against a spec that's already defined, even though OTEP-71 is still Backlog. Ready the moment the build lands instead of starting cold. |
| 7 | **C@G listing/detail cases (NEW-18..21, 26)** | 4 | 3 | **1.3** | Dedicated QA page is empty — a real gap. These 5 are BO/QA-executable now (badge sweep, evergreen card, missing-agency fallback, ID mapping, Job-type filterability). |
| 8 | **Accessibility (NEW-39..48)** | 4 | 4 | **1.0** | Real DSS obligation that will surface in any pre-launch review — value is fixed regardless of usage. Cost is genuinely high: 10 net-new cases plus a tester who can drive a screen reader, which the team doesn't currently have on hand. |
| 9 | **C@G ingestion lifecycle (NEW-22..25, 27)** | 4 | 4 | **1.0** | Silent/systemic failure mode (every C@G card wrong at once) — high blast radius. But needs pipeline access or a controllable source fixture that doesn't exist yet; not executable by a BO or by QA without that tooling. |
| 10 | **Security beyond XSS (NEW-52..54)** | 4 | 4 | **1.0** | NEW-52 (IDOR on ringfenced opportunities) is the API-level twin of the ringfencing bypass check (NEW-33) — pairs naturally with item 1 once accounts exist. Needs API-level tooling most BOs/QA don't have; likely an engineering or specialist task. |
| 11 | **Performance (NEW-49..51)** | 3 | 4 | **0.75** | Legitimate risk (volume, latency, deep paging) but literally not runnable until engineering agrees on thresholds — cost includes a precondition that hasn't started. Lowest urgency of the three non-functional areas since nothing has yet indicated a live performance problem. |

---

## What this changes vs. just following the source page's order

The source page (Coverage Targets) presents gaps grouped by feature area in roughly the order features appear in the officer journey (listing → filter → search → detail → apply). That's a good structure for *writing* cases, but a poor one for *sequencing* work — it would have you starting with Search (already close to target) before Ringfencing (blocking, cheap, and the single highest-leverage item in the tree).

**The VCR re-sort surfaces two things the category-ordered view buries:**

1. **Decisions rank above authoring.** The ringfencing rule-precedence decision (rank 4) and the SJR close-out (rank 2) aren't test cases at all — they're squad decisions with near-zero cost that unlock or clean up disproportionate downstream value. A pure case-count view treats "write 14 cases" and "make one decision" as incomparable; VCR puts them on the same ladder and the decisions win.
2. **"Already written but blocked" beats "not yet written."** Ringfencing's 24 idle cases (rank 1) outrank Category Filter's 14 not-yet-written cases (rank 3) specifically because the ringfencing value is already banked — someone already paid the authoring cost — and all that's missing is 3 accounts.

---

## Recommended sequence

1. **Resolve ringfencing test accounts** — unlocks the single largest block of latent value at near-zero cost.
2. **Close the SJR contradiction in Jira/Confluence** — five minutes of cleanup, removes a standing spec conflict.
3. **Get the ringfencing rule-precedence decision from the squad** — unlocks NEW-28/29 alongside item 1.
4. **Write and run category filter cases (NEW-04..17)** — unblocks OTEP-437's exit from QA.
5. **Everything else follows in VCR order**, but re-check accessibility and performance costs once the team knows whether it has (or needs to bring in) a screen-reader tester and agreed performance thresholds — those cost estimates are the shakiest in this table because the blockers are organizational, not technical.

---

*Generated: 2026-07-27*
*Source data: [Test Coverage Targets and Gap Test Cases (Opportunities)](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2485846081), authored by Pow Hwee TAN, and [Requirements Traceability Matrix v2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2484896250) open items.*
*Companion: [Pathfinder UAT Test Cases](2026-07-27-W31-pathfinder-uat-test-cases.md) — the full case text for every area referenced here.*
*Next: Confirm the Value/Cost scores with QA/eng before treating this as a committed sequence — several cost estimates (accessibility tester availability, security tooling access) are assumptions, not confirmed constraints.*
