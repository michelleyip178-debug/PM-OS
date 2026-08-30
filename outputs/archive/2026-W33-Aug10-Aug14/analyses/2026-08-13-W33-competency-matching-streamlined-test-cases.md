# Streamlined Test Cases: Competency Matching (Epic 69, Batch 2)

**Date:** 2026-08-13

**Source:** [Epic 69 (Batch 2) - Opportunities Unified Hub](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2508390675/Epic+69+Batch+2+-+Opportunities+Unified+Hub), "Feature: Competency Matching (Skills Match Display)" section

**Change (v2):** Restructured from 4 separate state-based cases into **one continuous E2E journey**. Every original assertion (8 legacy cases) plus the update flow plus a new delete flow now runs as checkpoints inside a single officer session, on Michelle Yip's account (michelle_yip@psd.gov.sg), instead of separate setups per case.

---

## Why this is a bigger consolidation than v1

v1 grouped the 8 legacy cases into 4 parameterized cases, but each still assumed a fixed, pre-seeded state (has competencies / zero competencies / partial match) tested in isolation.

The real simplification: **competency state is not fixed data, it's something the journey itself creates.** Instead of seeding 3 different states across 3 separate test setups, one officer starts at zero, adds competencies, and the test walks through zero → partial → full → back to partial (via delete) — checking the *same* rendering/count assertions at each checkpoint, but as one flow instead of four disconnected ones.

**Net result: 4 cases (v1) → 1 E2E journey with 7 checkpoints.** Every original JIRA ticket (OTEP-1004, 1005, 1006, 1009, 1010, 1018, 1030, 1032) still maps to a specific checkpoint below — nothing lost, just resequenced into a story a QA tester (or Michelle) can run top to bottom without resetting test data between steps.

---

## E2E Journey: Officer manages competencies and sees matching update live

**Persona:** Michelle Yip · michelle_yip@psd.gov.sg

**Starting state:** Account seeded with **zero competencies** (the only state that needs seeding — everything else, the journey creates itself)

**Target opportunity:** One opportunity with ≥2 required competencies listed (call it Opportunity A), and a second opportunity (Opportunity B) that shares at least one required competency with A — needed for Checkpoint 6

| # | Step | Action | Expected Result | Covers (legacy) |
|---|---|---|---|---|
| 1 | **Listing — zero state** | View the opportunities listing as a zero-competency officer | Card for Opportunity A renders normally, **no match count shown**, no error | COMP-002 |
| 2 | **Detail page — zero state** | Open Opportunity A's detail page | All required competencies shown in **unmatched** state — no error, no "no match" message | COMP-008 |
| 3 | **Edit entry point** | Click on an unmatched competency in the list | Update flow opens (inline editor or modal), allowing the officer to add this competency to their profile | COMP-013 (superseded — old expected result was "no edit option") |
| 4 | **Add competency** | Complete the update flow, adding the clicked competency to the profile | Update saves without error; officer stays on the detail page | New |
| 5 | **Detail page — reflects add, same session** | Without refreshing, check the competency section again | The added competency now shows **matched**, moved to the front of the list ahead of remaining unmatched items | COMP-007 (partial match ordering) |
| 6 | **Listing — reflects add** | Navigate back to the opportunities listing | Opportunity A's card now shows a match count (e.g., "1 of 2 competencies match") | COMP-001 |
| 7 | **Cross-opportunity reflection** | Open Opportunity B (shares the same competency just added) | Opportunity B's card/detail also reflects the match — confirms the update is profile-level, not opportunity-scoped | New (was implicit, never actually tested in legacy set) |
| 8 | **Delete competency** | Return to Opportunity A's detail page, open the now-matched competency, and remove it from the profile | Update saves without error; officer stays on the page | New |
| 9 | **Detail page — reflects delete, same session** | Without refreshing, check the competency section | The removed competency reverts to **unmatched** state; ordering updates accordingly | New |
| 10 | **Listing — reflects delete** | Navigate back to the opportunities listing | Opportunity A's card match count decrements back down (e.g., "1 of 2" back to no count, or "0 of 2" per whatever COMP-002's exact zero-state rule is) | COMP-001, COMP-002 (reverse direction) |
| 11 | **No-competency-data opportunity, unaffected throughout** | At any point after step 1, also view an opportunity with **no competency data attached at all** | No match count/section ever appears for that opportunity regardless of what the officer's profile does — confirms this is opportunity-data-driven, not just profile-driven | COMP-004, COMP-009, COMP-011 |

**JIRA:** OTEP-1004, OTEP-1005, OTEP-1006, OTEP-1009, OTEP-1010, OTEP-1018, OTEP-1030, OTEP-1032 (all map to a checkpoint above); recommend one new ticket for the delete flow (checkpoints 8–10) and one for cross-opportunity reflection (checkpoint 7), both as follow-ups to OTEP-1032 rather than a fresh epic item.

---

## What this drops from v1's separate cases, and why that's fine

- **Zero-match-only detail rendering (old COMP-008 in isolation)** — still covered, just as checkpoint 2 of the flow instead of a standalone case. No loss.
- **"What you'll develop" section not rendering for no-data opportunities (old COMP-011)** — folded into checkpoint 11, tested alongside the no-data listing checks rather than as its own detail-page-only case, since both assert the same underlying rule (no competency data → nothing renders) just on different pages.
- **Separate accounts for each match ratio** — no longer needed. One account moving through the journey naturally passes through zero → partial → full-for-that-competency → back to zero, so you don't need Ravi Kumar's permanently-zero account and Mei Chen's permanently-partial account as separate fixtures.

## What's genuinely new, not just resequenced

- **Checkpoint 7 (cross-opportunity reflection)** — the legacy suite never actually tested that a profile update shows up on a *different* opportunity. It's implied by "profile-level" design intent but wasn't verified anywhere in the original 8 cases.
- **Checkpoints 8–10 (delete flow)** — entirely new, per your ask. Symmetric to the add flow, and worth keeping symmetric rather than assuming delete "just works" because add does.

---

## Open questions to resolve before this journey can be run as written (flag for grooming)

- **Does the UI support deleting a self-added competency**, or only adding? If delete isn't built, checkpoints 8–10 are a scoping ask for Eng, not a test gap.
- **Self-attestation vs. approval:** is there any verification step when an officer adds a competency, or does it apply instantly? Affects whether checkpoint 4/5 can run in one continuous session or needs an approval-wait step.
- **Match count edge case at checkpoint 10:** does removing the only matched competency show "0 of 2" or revert to no-count-shown (COMP-002's original rule)? These are different behaviors — confirm which is intended before writing the exact expected result.
- **Data seeding for the "zero competencies" starting state** — confirm Michelle's account can actually be reset to zero competencies before each test run, since the whole journey depends on starting clean.

---

*Generated: 2026-08-13 (v2 — restructured as E2E journey per follow-up request)*
*Source: Confluence page 2508390675, fetched via API. Original Ringfencing and Apply/Careers@Gov sections unchanged — this consolidation covers Competency Matching only.*
