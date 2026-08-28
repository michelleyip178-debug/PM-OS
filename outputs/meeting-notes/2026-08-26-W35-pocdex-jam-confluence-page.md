# POCDEX Day 2 Test Case Scoping — Working Session

**Status:** 🔴 Open — targeting close by 28 Aug

**Owners:** Michelle Yip + Imelda Mo (scoping) · Adrian Ang (decision owner, requested this be sorted)

**Related:** [open-items.md #60](../../../PM-skills-ALL-1/00-hub/open-items.md) · [RAID R11](../analyses/2026-08-25-W35-raid-log.md) · [BO test-case doc (11-case cut of 18)](../analyses/2026-08-26-W35-proposed-pocdex-test-cases-for-bos.md) · [full 118-row analysis](../analyses/2026-08-26-W35-pocdex-pm-analysis-all-tabs.md)

---

## TL;DR

We need to close out test case scoping for POCDEX Day 2 (employment data change detection) by 28 Aug. Three things are blocking that:

1. The "last modified date" business rule (RAID R11) is still undefined after multiple mentions — this determines whether Compass can even detect that a change happened.
2. Of the 18 runnable test cases, 4 need a clean BO decision (Identity-2, Identity-3, Leave-1, Exit-1), 1 is a PRD-scope check (Identity-1 — confirm email reuse isn't already excluded from MVP), and 1 is a POCDEX routing question (Mobility-2 CUS rules, non-blocking). The 11-case BO cut is decision-complete once these land.
3. Test data hasn't been prepped yet, and coordination ownership (Compass ITC vs. joint POCDEX ask) is unassigned — the source material describes scenarios, not literal test values.

This page is the live record of the working session. Decisions get logged in the table below, in real time, during the session.

---

## Before we start: two layers, kept separate

> **Layer 1 — The baseline.** The full set of scenarios Huiting's POCDEX team already asked us to test, organized under her 14 categories (TC1–TC14). Already agreed. Not up for debate today — we're just confirming it's fully accounted for.
>
> **Layer 2 — What we're adding on top.** 18 concrete test cases (steps, test data, pass/fail conditions) that turn most of the baseline into something a tester can actually run. One (Population-2, legitimate first login) is a genuinely new case we're proposing — flagged honestly as ours, not Huiting's. The 11-case BO cut is the highest-severity subset; the other 7 are deferred, not dropped.

This isn't Compass inventing new scope. It's mostly her existing ask, made executable, plus one small honest addition.

---

## Decision Log

*Fill in live during the session. "Status" starts as Pending for every row.*

| # | Decision needed | Options | Owner | Status | Decision + date |
|---|---|---|---|---|---|
| R11 | Last modified date: timestamp-based detection vs. nightly full-profile diff | (a) POCDEX timestamp per record, (b) daily full diff of all records | Compass | Pending | |
| 1 | Email reuse (Identity-1) — **PRD-scope check first**, not a BO call: is this already excluded from MVP per the capability table? | Already excluded (test as negative) vs. narrower exclusion = real gap | PM → then Adrian if it's a gap | Pending | |
| 2 | Two people share one login email (Identity-2) | Block both until fixed vs. system resolves who's who | Adrian | Pending | |
| 3 | One officer, two emails across sources (Identity-3) | Which email is "real" | Adrian | Pending | |
| 4 | NPL access cutoff timing (Leave-1) | Immediate cutoff vs. grace period | Adrian | Pending | |
| 5 | NPL status disagrees across sources (Leave-2 — deferred from BO cut, decide if it comes back) | Which source wins | Adrian | Pending | |
| 6 | Hire rescinded at first login (Exit-1) | Account doesn't exist vs. exists but blocked | Adrian | Pending | |
| 7 | CUS Posting (Mobility-2) — AGD/MTI onboarding is **resolved**; open part is the scheme's eligibility/posting rules | Get plain-language rules from POCDEX/HR — not a BO call, non-blocking to write the case | POCDEX/HR (routed, not decided here) | Pending | |
| G1 | TC5 (leave & rejoin) — covered in baseline? | Confirmed present / genuinely missing | Imelda (pre-read) → confirm w/ Huiting | Pending | |
| G2 | TC6 (delete/recreate) — covered in baseline? | Confirmed present / genuinely missing | Imelda (pre-read) → confirm w/ Huiting | Pending | |
| G3 | Contingent worker inclusion side — needs a case? | Yes, write one / no, out of scope | TBD | Pending | |
| DP | Test data prep — who owns it, by when | Compass / joint w/ POCDEX | TBD | Pending | |

---

## Reference: the cases needing no decision

Expected outcome is already clear from how the product should work — these just need test data seeded, not a business call. Full detail in the [BO test-case doc](../analyses/2026-08-26-W35-proposed-pocdex-test-cases-for-bos.md). (List below uses the older COM-/ID- IDs; the BO doc renumbers to Job-/Mobility-/Identity-.)

<details>
<summary>Expand: the ready-to-test cases</summary>

| # | Situation | Why it's already clear |
|---|---|---|
| 1 | Legitimate officer's first login (ID-08) | Should get in and see own profile — proves the positive path works |
| 2 | Job title/team changes, profile doesn't update (COM-01) | Biggest coverage gap — profile should obviously reflect current job |
| 3 | Secondment, same data source (COM-02) | Profile should show new posting |
| 4 | Secondment, cross data source (COM-03) | Same, harder version |
| 5 | Permanent transfer, cross source (COM-04) | Same logic |
| 6 | Permanent transfer, same source (COM-05) | Same logic |
| 7 | Partial profile update after role change (COM-06) | All fields should update together |
| 8 | Name + email corrected together (COM-09) | Shouldn't lock the officer out |
| 9 | ID type changes mid-employment (ID-04) | Same person, same access |
| 10 | ID + HR reference change together (ID-05) | Same as above, two fields at once |

</details>

---

## Reference: sizing / why this matters

<details>
<summary>Expand: officer impact at pilot scale</summary>

- Pilot: 6 agencies, ~5,270 officers
- 90 officers sit in the highest-risk category today (duplicate identities or missing email) — 1.7% of the pilot population
- A 14-day measurement showed 3.45% of records change in any given 2-week window — this is routine, ongoing, not a rare edge case
- 274 officers hold cross-source, multi-hat roles (WoG population)

Full detail: [118-row analysis, Part 1](../analyses/2026-08-26-W35-pocdex-pm-analysis-all-tabs.md)

</details>

---

## Ownership & Timeline (fill in live)

| Question | Answer |
|---|---|
| Who's driving the 7 BO decisions above? | |
| Who's chasing the AGD/MTI onboarding question with POCDEX/HR? | |
| Who's writing test cases for any confirmed baseline gaps (G1–G3)? | |
| Who owns test data prep, and by when? | |
| Who writes final test cases into the tracker once decisions land? | |
| Is everyone aligned this moved from "later-phase" to "needed for go-live"? | |

---

## Next steps after this session

- [ ] Update RAID R11 with the confirmed decision (or named owner + date)
- [ ] Update open-items.md #60 to reflect closure or remaining blockers
- [ ] Confirm the Identity-1 PRD-scope check against the capability table
- [ ] Name the data-prep coordination owner + seeding date
- [ ] Reply to Huiting with confirmed TC5/TC6 status and 118-workbook provenance
- [ ] Send fuller follow-up to Huiting with 18-case mapping and decision outcomes
- [ ] Hand off finalized scope to whoever executes testing
