# Streamlined Test Cases: Ringfencing (Epic 69, Batch 2)

**Date:** 2026-08-13

**Source:** [Epic 69 (Batch 2) - Opportunities Unified Hub](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2508390675/Epic+69+Batch+2+-+Opportunities+Unified+Hub), "Feature: Ringfencing" section

**Change:** Restructured 5 separate state-based cases into **one continuous E2E journey**, following the same approach used for Competency Matching. All 5 source tickets confirmed `Backlog / Task`, unstarted, safe to restructure.

---

## Why this consolidates well

RF-002, RF-004, and RF-005 are literally sequential states of the *same* restricted opportunity viewed by the *same* ineligible officer — blocked view, then a caching check, then navigating back to the listing. RF-003 (logged-out entry) is the natural first step, since it's what puts the officer on that page in the first place. Only RF-001 (the eligible-officer view) needs a second account, since the whole point of that checkpoint is confirming eligible access looks different from blocked access — collapsing it to one account would remove the thing being tested.

**Net result: 5 cases → 1 journey, 6 checkpoints.**

---

## Correction from initial draft

Checkpoint 5 below (RF-004) is **not** "does a different login in another tab show correctly" — pulling the actual ticket (OTEP-978) confirms its real intent: *"Session re-evaluates ringfencing eligibility on re-login, not cached state."* This is a **cache-invalidation check**, not a multi-account display check. Worded precisely below to preserve that intent — an earlier draft of this consolidation had it wrong.

---

## E2E Journey: Officer encounters a ringfenced opportunity, blocked then unblocked

**Primary persona:** Officer A — starts **ineligible** for Opportunity R (a specific opportunity restricted to a different agency/job function)

**Secondary persona:** Officer B — **eligible** for Opportunity R (needed only at checkpoint 4, where the test is specifically about a different account's access, not Officer A's)

| # | Step | Action | Expected Result | Covers (legacy) |
|---|---|---|---|---|
| 1 | **Logged-out entry via direct link** | While logged out, click a direct link to Opportunity R (e.g. from an email/EDM) | Redirected to login immediately | RF-003 |
| 2 | **Post-login return to exact page** | Log in as Officer A (ineligible) | Returned to the exact Opportunity R page originally clicked — not the homepage or listing | RF-003 |
| 3 | **Blocked view rendering** | Page renders for Officer A | Page loads, but details and Apply button are restricted; a clear message states the opportunity isn't available, with a link back to the full listing | RF-002 |
| 4 | **Eligible officer, same opportunity, separate session** | In a separate tab/session, log in as Officer B (eligible) and open the same Opportunity R link | Page loads normally, Apply button visible and clickable, no restriction message | RF-001 |
| 5 | **Cache-invalidation check on re-login** | Back in Officer A's original session: log out, then log back in as Officer A again (same ineligible officer, fresh login — not a different account) | Page re-evaluates eligibility fresh on the new login rather than serving a cached permission state from the prior session — still shows blocked view correctly (or, if this checkpoint is meant to test the *positive* case, confirm with Eng whether it should instead re-login as a *newly-eligible* Officer A to catch stale "ineligible" caching) | RF-004 |
| 6 | **Return to listing from blocked view** | As Officer A, from the blocked Opportunity R page, click the link back to the full listing | Lands on the normal, unfiltered opportunities listing; browser back button works as expected; no redirect loop | RF-005 |

**JIRA:** OTEP-975 (RF-001), OTEP-976 (RF-002), OTEP-977 (RF-003), OTEP-978 (RF-004), OTEP-979 (RF-005) — all map to a checkpoint above, parented to OTEP-390 (975, 976), OTEP-408 (977, 978), OTEP-409 (979).

---

## Open question to resolve before locking checkpoint 5 (flag for grooming)

OTEP-978's title says "re-evaluates ringfencing eligibility on re-login, not cached state" — but the wording doesn't specify whether the test is: (a) confirming a *newly ineligible* officer doesn't keep stale eligible access after their access is revoked, or (b) confirming a *newly eligible* officer doesn't keep stale blocked access after being granted access. These are different bugs (over-permissive caching vs. under-permissive caching) and the fix/test would look different for each. Recommend checking the original ticket's linked bug report or QA notes before finalizing this checkpoint's exact wording — don't guess.

---

## Recommended Jira reuse (matching the pattern used for Competency Matching)

Following the same approach as OTEP-1004/1032: reuse one ticket number as the consolidated journey anchor rather than creating a new one.

| Proposed anchor | Absorbs | Notes |
|---|---|---|
| **OTEP-975** (currently RF-001) | OTEP-976, 977, 978, 979 | Retitle to the full E2E journey; close 976/977/978/979 as superseded once confirmed, same as was done for the competency-matching tickets |

**Not yet executed** — this mirrors the competency-matching consolidation but hasn't been pushed to Jira. Let me know if you want the same treatment: reuse OTEP-975, rewrite its title/description to the 6-checkpoint journey, move it to To Do on CC-UAT, and leave 976/977/978/979 for you to close once you've confirmed the resolution on checkpoint 5's ambiguity above.

---

*Generated: 2026-08-13*
*Source: Confluence page 2508390675 (fetched earlier this session), cross-checked against live Jira ticket titles/status via CC-UAT board (20498).*
