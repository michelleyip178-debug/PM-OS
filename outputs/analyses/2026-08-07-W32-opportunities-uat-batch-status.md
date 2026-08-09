---
date: 2026-08-07
week: 2026-W32
source: Epic 69 - Opportunities Unified Hub (Confluence page 2508489043) + Sprint 7 live Jira + 2026-08-07 OTEP Team 2 stand-up
status: working draft — confirm with Pow Hwee/Thomas before treating batch split as final
---

# Opportunities UAT — Batch Status (Epic 69)

**Trigger:** Competency matching (OTEP-336 listing signal, OTEP-570 detail page) is still In Progress in Sprint 7 as of this week's live Jira pull, and this morning's Team 2 stand-up flagged it needs "a bit of tweak" with an MR still pending review before deploy. The 5 competency-match UAT cases on Epic 69 also depend on 4 test accounts (OPP-C1–C4) that are flagged 🔴 "to be provisioned" on the Confluence page itself, with competency data not yet mapped in Compass against the target opportunity IDs.

**Net effect:** competency-match UAT cases are not runnable yet — blocked on two separate things (feature deploy + test data provisioning), not just one. Splitting into two batches so Batch 1 execution isn't held up waiting on either.

---

## Batch 1 — Runnable now

Everything that only needs account OPP-B1 (already usable, no competency dependency).

| Section | Case IDs | Status |
|---|---|---|
| Listing & Discovery | UAT-OPP-001 – 006 | ✅ Ready |
| Additional C@G Listing Coverage | UAT-OPP-025 – 032 | ✅ Ready |
| Filtering — Type | UAT-OPP-007 – 012 | ✅ Ready |
| Filtering — Job Family / Opportunity Category | UAT-JF-001 – 012 | ✅ Ready |
| Search | UAT-SEARCH-001 – 015 | ⚠️ Ready with caveats — see New Batch 1 Items below (combined agency+title search, clear-search spec gap) |
| Opportunity Detail Page (core fields, deep-links, closing-soon badge) | UAT-OPP-013, 014, 015, 017, 018, 019 | ⚠️ Ready with caveat — closing-date display bug found today, confirm deployed fix before running UAT-OPP-018/019 |

**Total: ~55 cases ready for BO execution**, 3 with new caveats flagged today (see below) — not a scope reduction, just items to confirm before/during execution.

---

## New Batch 1 Items (flagged 2026-08-07, Rathika/Thomas thread)

Small, specific items surfaced today ahead of Batch 1 execution — none block the whole batch, but each needs a quick resolution before its specific test case runs cleanly.

| Item | Affects | Status | Owner | Action Needed |
|---|---|---|---|---|
| Closing-date bug — today's closing date wrongly shown as "closed" on detail page (listing already correct) | UAT-OPP-018, 019 (closing-soon badge cases) | Bug found, fix status unconfirmed | Thomas Huchedé | Confirm fix is deployed before running these two cases |
| Combined agency+title search returns empty/bad results (score dilution below threshold) | UAT-SEARCH-003 (agency search), any combined-query manual testing | **Decided 2026-08-07: split into new ticket, target next sprint. Interim fix asked of Thomas but not yet confirmed.** Documented as known limitation for Batch 1 testers in the meantime — does not break the feature (title-only/agency-only search both work). | Thomas Huchedé | Confirm interim fix feasibility; testers proceed with this flagged as a known limitation, not a fresh bug to file |
| Clear-search doesn't restore listing without re-searching — spec gap | UAT-SEARCH-007 | Awaiting Michelle's decision on proposed fix (auto-refresh on filter click) | Michelle Yip | Confirm or reject the proposed behavior change today |
| "No Results" UI doesn't match Figma; empty/closed state images missing | UAT-OPP-006, UAT-OPP-010, UAT-SEARCH-004 (empty-state cases) | Blocked on design system update; underlying logic already correct | Unassigned | Chase design system update timeline |

---

## Batch 2 — Blocked on competency matching

| Case ID | Account needed | Scenario | Blocked by |
|---|---|---|---|
| UAT-OPP-020 | OPP-C1 (daniel_ong@mddi.test.gov.sg) | 5/5 competency match | Feature (OTEP-336/570) + account provisioning + competency-to-opportunity mapping in Compass |
| UAT-OPP-021 | OPP-C2 (sophia_lee@mddi.test.gov.sg) | 2/5 competency match | Same as above |
| UAT-OPP-022 | OPP-C3 (ethan_tan@mddi.test.gov.sg) | 0/5 competency match (has unrelated competencies) | Same as above |
| UAT-OPP-023 | OPP-C4 (wei_lin_goh@esg.test.gov.sg) | 0/5 competency match (no competencies at all) | Same as above |
| UAT-OPP-024 | OPP-C1 | "No competencies available" state (opportunity with no required skills) | Feature deploy only — doesn't need the competency mapping, but still gated behind the same MR |

**Total: 5 cases blocked.**

**Two independent blockers, both need to clear:**
1. **Feature deploy** — OTEP-336 (listing signal) and OTEP-570 (detail page) still In Progress; MR pending review per today's Team 2 stand-up
2. **Test data** — OPP-C1–C4 accounts need provisioning (login/password) AND competency data actually set in Compass against opportunity_id 341231 / 123811 / 321231 — neither exists yet per the Confluence page's own note

---

## Recommended sequencing

1. Run Batch 1 now — no reason to wait
2. Track OTEP-336/570 MR review + deploy as the trigger to re-check Batch 2 readiness
3. Once deployed, confirm OPP-C1–C4 provisioning + competency mapping separately — don't assume deploy alone unblocks Batch 2
4. Re-run this status check once both clear, then move Batch 2 cases to 🟢 Ready

---

*Generated 2026-08-07 from Epic 69 (Confluence page 2508489043), Sprint 7 live Jira pull, and today's OTEP Team 2 stand-up notes.*
*Related: [Pathfinder UAT Test Cases](2026-07-27-W31-pathfinder-uat-test-cases.md) (broader test case doc), [Batch 1 UAT Format Rollout Plan](2026-07-29-W31-batch1-uat-format-rollout-plan.md) (format conversion, separate workstream).*
