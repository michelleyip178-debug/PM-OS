---
date: 2026-08-25
week: 2026-W35
scope: Pathfinder UAT results re-split by delivery batch (Batch 1 = Opportunities Unified Hub core epics + cross-cutting E2E/bug; Batch 2 = job-family consolidation)
source: 44 Pathfinder UAT tickets, live Jira as of 2026-08-25
---

# Pathfinder UAT Results — Batch 1 vs Batch 2

## Batch 1 — Opportunities Unified Hub (Epic 69) — 39 tickets

Covers the core Opportunities feature set: listing/grid (OTEP-85), filtering (OTEP-86), search (OTEP-405), detail page (OTEP-128), Careers@Gov/OTG unification (OTEP-88), plus 5 untagged E2E/cross-cutting tests and 1 bug ticket.

| Sub-area | Epic | Tickets | Result |
|---|---|---|---|
| Listing/grid display | OTEP-85 | 6 (OTEP-955–960) | ✅ All Pass |
| Filtering | OTEP-86 | 6 (OTEP-961–966) | ✅ All Pass — 2 with UX clarifications, not defects |
| Search | OTEP-405 | 10 (OTEP-1019–1033) | ✅ All Pass — 1 confirmed works-as-designed (description not searched, by MVP scope) |
| Detail page | OTEP-128 | 6 (OTEP-967–973) | ✅ All Pass |
| Careers@Gov / OTG unification | OTEP-88 | 5 (OTEP-999–1003) | ✅ All Pass |
| E2E / cross-cutting | — | 5 (OTEP-1004, 1174, 975, 1301, 1302) | ✅ All Pass — 1 has a known non-blocking display issue |
| Bug tracking | — | 1 (OTEP-1339) | 🐛 Bug ticket — duplicated competency names, root cause + fix documented |

**Batch 1 total: 39/39 test cases Pass (100%).**

**Notable non-blocking findings, not failures:**
- **OTEP-1004** (competency match E2E): known display issue — hidden officer competencies still count toward the match total shown to the officer (2/3 match) even though the hidden competency itself isn't visible in their profile. Also a duplicate-name display bug tied to OTEP-1339. Neither blocks the flow; both are UI/data-hygiene issues worth fixing before or shortly after go-live.
- **OTEP-959 / OTEP-966** (pagination/filter UI): expected result text said "absent"/"not shown," actual behavior is "present but disabled/greyed out." Confirmed intentional in both cases — spec language was imprecise, not the build.
- **OTEP-1033** (search snippet): confirmed works-as-designed after code review (Pow Hwee) — search is intentionally scoped to title/agency only, description search proposed as a future enhancement, not a defect.
- **OTEP-1339**: the one open bug in this batch. Root cause (importer not filtering soft-deleted competencies + controller not deduplicating) and fix are fully documented — needs someone to confirm the fix has actually shipped and been re-verified in UAT, since the ticket only shows the diagnosis/fix proposal, not a "verified fixed" comment.

---

## Batch 2 — Job-Family Consolidation (OTEP-437) — 5 tickets

| Ticket | Case | Result |
|---|---|---|
| OTEP-1007 (UAT-JF-001) | C@G opportunity appears under correct WOG category | ✅ Pass |
| OTEP-1008 (UAT-JF-002) | C@G and OTG opportunities appear together under shared category, no source label shown | ✅ Pass |
| OTEP-1015 (UAT-JF-009) | Legacy OTG job-family code consolidation ("Policy and Planning") | ✅ Pass — initial tester confusion (uncleared search bar), resolved, confirmed working |
| OTEP-1016 (UAT-JF-010) | Legacy "Urban Planning and Design" consolidation | ✅ Pass — a data-mapping correction was needed mid-test (Michelle's own note), no explicit final pass/fail comment logged after the fix |
| OTEP-1017 (UAT-JF-011) | Custom DB mapping table covers job families not in reference table | ✅ Pass |

**Batch 2 total: 5/5 test cases Pass (100%), 1 worth a closing confirmation.**

**Notable finding:**
- **OTEP-1016**: the only case in either batch without an explicit final "confirmed pass" comment after its data correction. Status is Done, but worth a 30-second check that someone actually re-verified "Urban Planning and Design → Urban & Physical Planning" post-fix rather than assuming it based on the correction alone.

---

## Overall read

**44/44 Pathfinder UAT test cases are Pass.** No open failures in either batch. Two things worth a direct, quick close before calling Pathfinder fully clean for sign-off:

1. **OTEP-1339** (the duplicate-competency bug) — confirm the documented fix actually shipped and was re-tested, not just diagnosed.
2. **OTEP-1016** — get an explicit "confirmed working" comment logged, since it's currently Done on the strength of a data correction, not a verification comment.

Neither is a blocker on the scale of the CSC SSO gap or the FormSG apply-flow question already tracked — these are closing paperwork, not open risk.
