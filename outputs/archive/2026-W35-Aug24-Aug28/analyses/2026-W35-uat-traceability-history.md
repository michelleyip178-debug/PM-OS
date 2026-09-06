---
archived: 2026-09-03
week: 2026-W35 (24–28 Aug)
type: archive-digest
supersedes:
  - 2026-08-24-W35-otep-uat-traceability-matrix.md
  - 2026-08-24-W35-core-profile-mydev-courses-gap-analysis.md
  - 2026-08-25-W35-pathfinder-uat-batch-review.md
  - 2026-08-25-W35-uat-coverage-export.md
  - 2026-08-25-W35-uat-full-export-183.md
superseded_by: outputs/analyses/2026-09-02-W36-cc-uat-coverage-assurance.md
---

# W35 UAT Traceability History — Digest

Five W35 analyses that mapped PRD → build ticket → UAT coverage across the Pathfinder and Core epics, against a 182-ticket board. The current version is [2026-09-02-W36-cc-uat-coverage-assurance.md](../../../analyses/2026-09-02-W36-cc-uat-coverage-assurance.md) (195 tickets, every ticket mapped to a capability). Raw ticket tables from these five files are not reproduced — they're regenerable from Jira board 20498. Summaries and conclusions only.

**Baseline these established:** 182 UAT tickets (44 Pathfinder + 138 Core), all Done. Pathfinder 44/44 Pass. The "happy path" (listing, search, filter, core detail) is well covered on both epics; edge cases, secondary flows, and bug-fix tickets are not.

---

## 1. UAT Traceability Matrix — Pathfinder + Core (24 Aug)

*PRD → build ticket (AC present?) → UAT test case, both epic groups.*

| | Pathfinder (OTEP-69) | Core (OTEP-67/68/58) |
|---|---|---|
| Build tickets | 47, all Done | 40 |
| Build tickets with no AC | 2 (OTEP-406 resolved via OTEP-85's AC; 613 open) | 1 (OTEP-1201) |
| Effective UAT coverage | 21 of 47 (45%) — 6 direct + 5 via E2E + 5 under a sibling ticket + 4 by PM confirmation + 1 subsumed by parent AC | 19 of 40 (48%) |
| Genuine ⚠️ gaps, PM-accepted as-is | 5: OTEP-87 (C@G field-rendering rules), 386, 1118, 1119, 613 | 6: OTEP-1345, 812, 388, 980, 669, 698, 321, 1201 (1238 excluded — untestable, not a gap) |

**Key findings:**
- **Both epics show the same pattern** — happy-path build tickets well covered, edge/secondary/bug-fix tickets not. Coverage is measurably better than ticket-ID matching suggests, because several small Pathfinder stories were tested under a sibling ticket's ID.
- **The apply/conversion flow (OTEP-87, 89, 131, 319) was checked line-by-line.** Michelle confirmed 24 Aug the Apply CTA branches correctly to FormSG or C@G — resolving OTEP-89, 319, 131 — **but the written test-case text (OTEP-967) doesn't document this check**, so it was flagged as a documentation-sync task, not a closed loop. OTEP-87's C@G field-rendering rules ("Not specified" fallback, hidden responsibilities) are separate and remained genuinely open.
- **OTEP-1238 is explicitly documented as untestable via normal UAT flow** given current catalogue data — needs a seeded record or a direct data/import-log check, not a test case.
- **OTEP-1286 was covered under a sibling ticket** (OTEP-879 / BLANK-01), same pattern as the Pathfinder findings.

**Recommended next steps (as written 24 Aug):**
1. Update OTEP-967 and OTEP-956's expected-result text to include the Apply CTA/redirect check and the Ministry icon — behaviours confirmed working, just not documented in the written criteria.
2. Add regression test cases for OTEP-1345 and OTEP-812 (Core bugs) before calling them closed.
3. Backfill AC on OTEP-613 and OTEP-1201 — documentation completeness only, low urgency.
4. OTEP-512 and OTEP-694 (Core, My Development) — the only two Core build tickets with meaningfully incomplete coverage.

---

## 2. Core Gap Analysis — Profile, My Development, Courses (24 Aug)

*Backlog status from Jira, `parent in (OTEP-67, OTEP-68, OTEP-58)` — 40 tickets.*

| Epic | Done | QA | In Progress | Backlog | Total |
|---|---|---|---|---|---|
| OTEP-67 Profile | 10 | 2 | — | 3 | 15 |
| OTEP-68 My Development | 3 | 13 | — | — | 16 |
| OTEP-58 Courses | 1 | 5 | 1 | 2 | 9 |

**Findings:**
- Profile and Courses mostly done. **My Development is deep in QA (13 of 16 stories) — essentially one person's queue, Pei Ern Lim owns nearly all of it.** Nothing blocked; open items are QA-stage or not-yet-started needing a scope confirm.
- **All three PRDs are stale relative to the backlog.** My Development's PRD references none of its 16 tickets at all. Profile/MyDev PRD header fields (Tech, Designer, Epic Link) are blank; Courses' Epic Link still reads the unfilled placeholder.
- **Target launch (October 2026) unchanged across all three PRDs** — none reflect the 18 Aug PS/DS-approved Oct→Nov shift.
- **21 UAT "Backlog" test cases are stale exact-title duplicates** of already-Done tickets one number higher (LAND-02–06, DISC-01–07, DTL-01–08 pattern; OTEP-933 tagged `[ARCHIVED]`). Same shape as the ~75-ticket Pathfinder duplicate problem. Real remaining Core gaps: OTEP-875, 882–885, 896 (trace to My Development QA stories), OTEP-948.
- **Unresolved cross-epic policy question, no owner since May:** "Should we block the OTG competency view for the pilot cohort to avoid dual-system confusion?" — raised in both Profile and My Development PRDs, reads as one decision (Imelda + WD).
- **Courses' DLE API dependency** — PRD says API delayed to Q3 2026, MVP relies on SFTP file transfers. No workspace update confirming Q3 delivery.
- **Three PRD-cited story IDs (OTEP-72, 79, 323) don't exist in Jira.** OTEP-79 flagged "[TBC] waiting for design"; OTEP-72 and 323 have full AC with no such caveat.

---

## 3. Pathfinder UAT Results — Batch 1 vs Batch 2 (25 Aug)

*44 Pathfinder UAT tickets re-split by delivery batch.*

- **Batch 1 — Opportunities Unified Hub (Epic 69), 39 tickets:** all Pass. Listing/grid (OTEP-955–960), filtering (961–966, 2 UX clarifications not defects), search (1019–1033, 1 works-as-designed — description not searched by MVP scope), detail page (967–973), C@G/OTG unification (999–1003).
- **Batch 2 — Job-family consolidation (OTEP-437), 5 tickets:** all Pass.
- **44/44 Pass, no open failures.** Two paperwork closes flagged before calling Pathfinder clean for sign-off:
  1. OTEP-1339 (duplicate-competency bug) — confirm the fix shipped and was re-tested, not just diagnosed.
  2. OTEP-1016 — get an explicit "confirmed working" comment logged; currently Done on a data correction, not a verification comment.
- Neither on the scale of the CSC SSO gap or the FormSG apply-flow question already tracked.

---

## 4. UAT Assurance — Have We Tested What Matters (25 Aug, DRAFT for Christopher Woo)

*Business-capability framing — "can BOs be confident the things officers need to do were tested," not "how many test cases exist."*

**Risk areas stakeholders flagged:**
- **Whitelist / agency access — yes, tested.** OTEP-1379 (non-whitelisted agency → Unauthorized), OTEP-1380 (excluded employment group → 404), OTEP-1221 (WOGAD login, no matching POCDEX record → Unauthorized). Three distinct exclusion paths, all passing. *Not confirmed:* the inclusion side — a case proving a whitelisted officer gets full access.
- **CSC SSO — no test case exists** in either epic's UAT set. The final SSO case is still in progress.
- **Apply flow (FormSG / C@G) — covered** via the Apply CTA test cases.
- **Identity / multi-agency / double-hatting — scope exclusion, not a gap.** PRD explicitly excludes double-hatting display and multi-role/agency-transfer from MVP. Nothing built, nothing to test — state as a known exclusion.

**What to tell Christopher Woo (as written):**
1. Whitelist: tested (OTEP-1379, 1380, 1221).
2. Apply flow: tested via Apply CTA cases.
3. Identity/double-hatting: unbuilt, not untested — different risk category.
4. Two secondary gaps, not urgent: profile auto-update on role change; MX7+ exclusion rule in My Development.

---

## 5. UAT Full Export — 182 tickets (25 Aug)

Full ticket-level export (44 Pathfinder + 138 Core), every `uat`-labelled issue with test steps, data, expected results, residue, and inferred pass/fail. Superseded by the [2026-09-02 195-ticket export](../../../analyses/2026-09-02-W36-cc-uat-full-export-195.md). Not reproduced here — regenerable from Jira board 20498.

**Delta the W36 version records:** board grew 182 → 195. Removed as duplicates: OTEP-1306, 1330, 1295 (→ CSC UAT), 105 (not a test case). Newly present and passed: OTEP-1221 (ERR-01), 1332 (REC-17 tie-break resolved), 1227 (CIE-05). Still open in W36: OTEP-948 (DTL-05 LEARN error).

---

*Digest generated 2026-09-03 from five W35 UAT analyses. Original files removed on archival; raw ticket tables not preserved (regenerable from Jira). The current UAT coverage picture is [2026-09-02-W36-cc-uat-coverage-assurance.md](../../../analyses/2026-09-02-W36-cc-uat-coverage-assurance.md).*
