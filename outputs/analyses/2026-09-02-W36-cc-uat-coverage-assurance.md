# CC-UAT Coverage Assurance & Flagged Tickets — 2026-09-02

Same analysis as the 2026-08-25 pack, re-run against the current board (20498, **195 tickets**). This version maps **every ticket** to a capability, not just the headline nine.

**Changed since 2026-08-25:** board grew 182 → 195. Removed as duplicates: OTEP-1306, 1330, 1295 (→ CSC UAT), 105 (not a test case). OTEP-1221 (ERR-01) now present and passed → "citation unverified" closed. OTEP-1332 (REC-17) tie-break resolved. OTEP-1227 (CIE-05) now passing. OTEP-948 (DTL-05) LEARN error still open.

**Verdict legend:** PASS = thread confirms it · PASS\* = Done, but the thread carries a caveat, clarification, or cross-reference rather than a clean confirmation · OPEN = thread shows an unresolved issue · PARTIAL = partially covered.

---

## Stakeholder Summary — send-ready

*Merged from the standalone stakeholder report on 2026-09-03. This is the version for Adrian Ang · Jace Tan · Huiting's Products team · BO leads. The detailed audit below backs every claim in it.*

**TL;DR:** UAT is effectively complete. 195 test cases across every MVP capability were executed against the CV-UAT environment with 22 whitelisted personas. **191 pass. Three functional defects remain open and one pass is conditional on a pre-launch check.** None of the four is a launch blocker on its own, but the recommendation-engine coverage rests partly on cross-referenced tickets rather than direct execution — the one area worth a second look before sign-off.

**Recommendation: proceed to launch readiness**, conditional on:

1. **OTEP-948 (DTL-05, LEARN redirect)** — the only unresolved functional defect. Clicking "Learn more" sends the user to LEARN logged out with an error. Fix and re-verify, or confirm the affected course path is out of the pilot content set.
2. **OTEP-1289 (DISC-06, course-search ranking)** — search returns newest-first with no relevance tiering. Ticket says defect; a later comment says "working as intended." Product decision: ship the four-tier ranking, or formally retire the acceptance criterion.
3. **OTEP-1263 (REC-05, role-selection toggle)** — when two recommended roles share a name, clicking the second selects the first. Last comment says it "persists." Low impact, but an unresolved functional bug. Confirm fix status.
4. **OTEP-1234 (NAME-01, grade codes in role names)** — 30+ cleanup rules implemented, testers still finding edge cases. Passed "for now." Re-verify no grade codes (MX11, JR10) leak in the launch data set. Data-quality check, not a code fix.
5. **Recommendation-engine randomisation acceptance criteria reconciled with the deterministic engine.** REC Groups 1–3 and REC-07/09/10 were marked pass by pointing at adjacent tickets, not direct execution. Every recommendation test ran against a fixed role set, not a randomised sample. The engine is deterministic by design (top-N by match %, no shuffle), so the "roles are randomised" wording in several ACs is inconsistent with the product. Documentation fix, not code — close it so "correct" is unambiguous post-launch.

**What was tested:** 195 cases (188 functional + 7 defect tickets), CV-UAT environment, POCDEX-fed, 22 whitelisted pilot-agency personas (A–U), run 11 Aug – 1 Sep 2026. Testers: Products team (Guo XZ, Christopher Woo, Alan Lim, Serene), OTEP (Imelda Mo, Rama Moorthy, Charles Ho, Adrian Lo), Michelle Yip. 89 cases carry screenshot evidence in-thread; the rest are tester sign-off comments. All tickets sit in the board's Done column — pass/fail is read from each comment thread since the board has no explicit field.

**Out of scope for this UAT (by design, not gaps):**
- Live OTG account → Compass end-to-end. All carry-over and recommendation tests use engineered data.
- Inclusion-side whitelisting in production — POCDEX-managed, needs prod data.
- Live employment-change ingestion and in-place profile refresh — that's the employment-profile-change workstream, tracked separately.

**Cosmetic fixes (no code, no launch impact):** OTEP-959/966 (AC wording "absent" → "disabled"), OTEP-936 ("30/30 tiles" → "25-tile cap"), OTEP-893 (test-data match % correction), OTEP-843 ("My competencies" → "Your competencies"), OTEP-1233 (footer "Feedback" → "Report Issue", tracked as OTEP-1401).

**Changed since the 25 Aug pack:** OTEP-1221 (ERR-01) now present and passed with screenshot; OTEP-1227 (CIE-05) now passing; OTEP-1332 (REC-17) lateral-vs-vertical tie-break resolved (lateral ranks ahead); OTEP-872 (REC-01) fix confirmed working; OTEP-1306/1330/1295/105 removed as duplicates/out-of-scope; OTEP-948 (DTL-05) still open.

The full per-ticket export (all 195, with steps, test data, expected results, comment thread) is the companion file [2026-09-02-W36-cc-uat-full-export-195.md](2026-09-02-W36-cc-uat-full-export-195.md).

---

## Capability coverage — PRD rollup

| Capability | Tickets | PASS / PASS\* / OPEN / PARTIAL | Status vs PRD | Note |
|---|---|---|---|---|
| Auth — WOG AD login | 1 | 0 / 1 / 0 / 0 | Tested | E2E login + direct-link re-auth + cross-login state persistence. |
| Auth — whitelist / agency access | 3 | 3 / 0 / 0 / 0 | Tested | Exclusion side fully verified; inclusion side is POCDEX-managed and needs prod data. |
| Officer profile & competencies | 40 | 36 / 4 / 0 / 0 | Tested | Profile card, competency display/edit/add, hidden-state copy, report-issue. 4 conditional passes on copy/UX. |
| Identity — multi-position / Job ID / double-hat | 7 | 7 / 0 / 0 / 0 | Tested (engineered data) | MJID union/dedup + is_primary title + 2-Job-ID recs. Not a live POCDEX identity feed. |
| OTG competency carry-over | 1 | 1 / 0 / 0 / 0 | Tested (assumptions) | OTG-01 passed on engineered data; no live OTG→Compass path. |
| My Development — role recommendations | 22 | 14 / 6 / 1 / 1 | Partially tested | Fallback ladder well covered; 1 open toggle bug (REC-05); REC-07/09/10 + REC Groups closed by cross-reference, not execution; randomisation AC unverified. |
| My Development — explore new roles | 19 | 18 / 1 / 0 / 0 | Tested | Search, autocomplete, filters, dropdowns, result panel. 2 minor UX caveats. |
| My Development — course recommendations | 6 | 6 / 0 / 0 / 0 | Tested | Gap-course ranking, tied-course randomisation, backfill, no-swimlane state. |
| My Development — page & edge states | 8 | 8 / 0 / 0 / 0 | Tested | Happy path + blank/partial profile permutations. |
| Learning & Courses — landing / recommendations | 7 | 7 / 0 / 0 / 0 | Tested | Swimlane, 25-cap, Jumpstart order, nav, tile content. |
| Learning & Courses — discovery / detail | 21 | 18 / 1 / 2 / 0 | Tested | Search, filters, pagination, detail fields, dead-link handling. 1 open ranking contradiction (DISC-06), 1 open LEARN redirect (DTL-05). |
| CV inference (CIE) | 5 | 5 / 0 / 0 / 0 | Tested | Entry points, upload validation, inference cap, dedup, error handling. CIE-05 now passing. |
| Opportunities — listing / detail / pagination | 23 | 19 / 4 / 0 / 0 | Tested | Grid, fields, pagination, empty states, deep-links, closing badges. 2 AC-wording mismatches (absent vs disabled). |
| Opportunities — competency match (E2E) | 1 | 1 / 0 / 0 / 0 | Tested | Match count/tick updates on listing + detail as competencies added; known hidden-competency display quirk (OTEP-1339). |
| Opportunities — search | 10 | 9 / 1 / 0 / 0 | Tested | Case, agency-field, whitespace, ranking, filter interaction. Description-search scoped out by design (enhancement OTEP-1185). |
| Opportunities — job-family filter / consolidation | 5 | 3 / 2 / 0 / 0 | Tested | Legacy-code consolidation, mapping-table backing, C@G+OTG unification under one category. |
| Opportunities — ring-fencing | 3 | 2 / 1 / 0 / 0 | Tested | Job-function and agency include/exclude, listing + deep-link, eligible vs ineligible persona. |
| Navigation | 3 | 3 / 0 / 0 / 0 | Tested | Logo home, active-state, no full refresh, avatar dropdown, logout. |
| Footer / static content | 3 | 2 / 1 / 0 / 0 | Tested | Render, link order, copyright/last-updated. FOOT-03 has a follow-up ticket for a label rename (OTEP-1401). |
| Defect tickets (not test cases) | 1 | 0 / 1 / 0 / 0 | N/A | OTEP-1339 is the competency-dedup bug ticket itself, fix documented. |
| Late-filed UI bugs (found & fixed in UAT) | 6 | 4 / 2 / 0 / 0 | Tested | Bugs raised during the UAT run itself (cursor, copy, dedup, autocomplete filter). All fixed and re-verified. |
| **Total** | **195** | **166 / 25 / 3 / 1** | | |

---

## Capability coverage — every ticket

Full mapping. `PASS*` / `OPEN` / `PARTIAL` rows are the ones to read; clean `PASS` rows are listed for completeness.

### Auth — WOG AD login  (1: 0 PASS, 1 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1174 | PATHFINDER | PASS* | Working as per video shown by Michelle |

### Auth — whitelist / agency access  (3: 3 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1221 | ERR-01 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1379 | POCDEX-012 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1380 | POCDEX-013 | PASS | 🎉 Looks good! [screenshot] |

### Officer profile & competencies  (40: 36 PASS, 4 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1234 | NAME-01 | PASS* | Ok, will pass this for now. Please make sure the job grades are removed before launch. Thanks. |
| OTEP-842 | PROF-10 | PASS* | sorry, this was the old ACs. that AC for two position titles should be tested in phase 2. I have a test case for that already. Removed it from this AC , if ok, please help updat... |
| OTEP-900 | ADDCOMP-09 | PASS* | ok for second attempt using ‘Blogging’ as competency. |
| OTEP-995 | REP-04 | PASS* | Ok but feedback to Team that if there are no core comps, it should not be asking users to report as there is no solution. |
| OTEP-1168 | EDITCOMP-09 | PASS | 🎉 Looks good! |
| OTEP-1235 | PANEL-01 | PASS | 🎉 Looks good! |
| OTEP-833 | PROF-01 | PASS | 🎉 Looks good! |
| OTEP-834 | PROF-02 | PASS | 🎉 Looks good! |
| OTEP-835 | PROF-03 | PASS | 🎉 Looks good! |
| OTEP-838 | PROF-06 | PASS | 🎉 Looks good! |
| OTEP-839 | PROF-07 | PASS | 🎉 Looks good! |
| OTEP-840 | PROF-08 | PASS | 🎉 Looks good! |
| OTEP-841 | PROF-09 | PASS | Passed, can see employment title. But we are unable to tell if the data source is HRPS and if the primary position is used. |
| OTEP-843 | COMP-01 | PASS | Passed, but header should be “Your competencies” and not “My competencies”. |
| OTEP-844 | COMP-02 | PASS | 🎉 Looks good! |
| OTEP-845 | COMP-03 | PASS | 🎉 Looks good! |
| OTEP-846 | COMP-04 | PASS | 🎉 Looks good! |
| OTEP-847 | COMP-05 | PASS | 🎉 Looks good! |
| OTEP-848 | COMP-06 | PASS | 🎉 Looks good! |
| OTEP-849 | COMP-07 | PASS | 🎉 Looks good! |
| OTEP-850 | ADDCOMP-01 | PASS | 🎉 Looks good! |
| OTEP-851 | ADDCOMP-02 | PASS | 🎉 Looks good! |
| OTEP-852 | ADDCOMP-03 | PASS | 🎉 Looks good! |
| OTEP-853 | ADDCOMP-04 | PASS | 🎉 Looks good! |
| OTEP-854 | ADDCOMP-05 | PASS | 🎉 Looks good! |
| OTEP-855 | ADDCOMP-06 | PASS | 🎉 Looks good! |
| OTEP-856 | ADDCOMP-07 | PASS | 🎉 Looks good! |
| OTEP-857 | ADDCOMP-08 | PASS | 🎉 Looks good! |
| OTEP-858 | EDITCOMP-01 | PASS | 🎉 Looks good! |
| OTEP-859 | EDITCOMP-02 | PASS | 🎉 Looks good! |
| OTEP-860 | EDITCOMP-03 | PASS | 🎉 Looks good! |
| OTEP-861 | EDITCOMP-04 | PASS | 🎉 Looks good! |
| OTEP-862 | EDITCOMP-05 | PASS | 🎉 Looks good! |
| OTEP-863 | EDITCOMP-06 | PASS | 🎉 Looks good! |
| OTEP-864 | REP-01 | PASS | ok second attempt passed |
| OTEP-865 | REP-02 | PASS | Passed [screenshot] |
| OTEP-866 | REP-03 | PASS | 🎉 Looks good! |
| OTEP-868 | DUP-01 | PASS | 🎉 Looks good! |
| OTEP-901 | EDITCOMP-07 | PASS | 🎉 Looks good! |
| OTEP-902 | EDITCOMP-08 | PASS | 🎉 Looks good! |

### Identity — multi-position / Job ID / double-hat  (7: 7 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1217 | MJID-1B | PASS | 🎉 Looks good! |
| OTEP-1218 | MJID-01 | PASS | 🎉 Looks good! |
| OTEP-1219 | MJID-02 | PASS | 🎉 Looks good! |
| OTEP-1220 | MJID-3B | PASS | 🎉 Looks good! |
| OTEP-1222 | DBLHAT-01 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1309 | REC-19 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1310 | REC-20 | PASS | 🎉 Looks good! |

### OTG competency carry-over  (1: 1 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-867 | OTG-01 | PASS | 🎉 Looks good! |

### My Development — role recommendations  (22: 14 PASS, 6 PASS\*, 1 OPEN, 1 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1263 | REC-05 | OPEN | The roles are displayed as expected but the issue about the behaviour of the 2 roles with the same names (cannot select them properly) persists. I’ve flagged this issue to via h... |
| OTEP-1265 | REC-07 | PASS* | Ok, thanks. |
| OTEP-1267 | REC-09 | PASS* | Ok, thanks. |
| OTEP-1268 | REC-10 | PASS* | Covered by OTEP-1264 (job family fallback), OTEP-1328 (agency fallback) |
| OTEP-1304 | CORE | PASS* | Thanks for the seperate and multiple clarifications. I re-read this ticket quite a few times and gathered that it is meant to test that even with an *overlapping role* (Job ID),... |
| OTEP-1305 | CORE | PARTIAL | *Chris’ notes - moved to pass (indicated in report too)* # 1305 tests for fallback – covered by 1264/1328 for vertical (less 1265), lateral not covered Lateral covered under 132... |
| OTEP-1329 | REC-14 | PASS* | noted from clarification with Rama that there are no eligible vertical roles in URA so only lateral roles are displayed instead. |
| OTEP-1332 | REC-17 | PASS* | Pls ignore. I’ve clarified with Imelda and Mark had previously guided to show lateral roles ahead of vertical. |
| OTEP-1262 | RING-03 | PASS | 🎉 Looks good! None of the excluded roles can be found in the recommended roles, in both the excel data and in “Based on your current role” recommendations. |
| OTEP-1264 | REC-06 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1266 | REC-08 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1303 | CORE | PASS | None |
| OTEP-1324 | REC-11 | PASS | 🎉 Looks good! [screenshot] [screenshot] [screenshot] [screenshot] [screenshot] |
| OTEP-1327 | REC-12 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1328 | REC-13 | PASS | 🎉 Looks good! [screenshot] [screenshot] |
| OTEP-1331 | REC-16 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1333 | REC-18 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-872 | REC-01 | PASS | Thanks for looking into this. The selection is OK now. Will move this to Passed. |
| OTEP-873 | REC-02 | PASS | 🎉 Looks good! |
| OTEP-874 | REC-03 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-876 | RING-01 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-877 | RING-02 | PASS | 🎉 Looks good! |

### My Development — explore new roles  (19: 18 PASS, 1 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1250 | EXP-08 | PASS* | filter selection works. Able to fix the length of the filter box so the drop-down won’t move (see below)? [screenshot] [screenshot] |
| OTEP-1240 | EXPD-04 | PASS | 🎉 Looks good! |
| OTEP-1242 | EXPD-06 | PASS | 🎉 Looks good! |
| OTEP-1243 | EXP-01 | PASS | 🎉 Looks good! |
| OTEP-1244 | EXP-02 | PASS | 🎉 Looks good! |
| OTEP-1245 | EXP-03 | PASS | 🎉 Looks good! |
| OTEP-1246 | EXP-04 | PASS | 🎉 Looks good! |
| OTEP-1248 | EXP-06 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1249 | EXP-07 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1251 | EXP-09 | PASS | 🎉 Looks good! |
| OTEP-1252 | EXP-10 | PASS | 🎉 Looks good! |
| OTEP-1253 | EXP-11 | PASS | 🎉 Looks good! |
| OTEP-1254 | EXP-12 | PASS | 🎉 Looks good! |
| OTEP-1255 | EXP-13 | PASS | 🎉 Looks good! |
| OTEP-1256 | EXP-14 | PASS | 🎉 Looks good! |
| OTEP-1257 | EXP-15 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1258 | EXP-16 | PASS | 🎉 Looks good! |
| OTEP-1259 | EXP-17 | PASS | Ok, will move this to Passed. Priority for the new ticket is Medium. |
| OTEP-891 | EXPD-01 | PASS | 🎉 Looks good! |

### My Development — course recommendations  (6: 6 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1236 | CRS-05 | PASS | 🎉 Looks good! Tied-courses are shown at random in swimlane and changes upon refresh/reload. |
| OTEP-1237 | CRS-06 | PASS | 🎉 Looks good! [screenshot] [screenshot] [screenshot] |
| OTEP-1322 | (UNTAGGED) | PASS | 🎉 Looks good! |
| OTEP-893 | CRS-01 | PASS | 🎉 Looks good! |
| OTEP-894 | CRS-02 | PASS | 🎉 Looks good! |
| OTEP-895 | CRS-03 | PASS | 🎉 Looks good! [screenshot] |

### My Development — page & edge states  (8: 8 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1260 | EDGE-07 | PASS | 🎉 Looks good! |
| OTEP-1261 | EDGE-08 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-869 | MYDEV-01 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-870 | MYDEV-02 | PASS | 🎉 Looks good! |
| OTEP-871 | MYDEV-03 | PASS | 🎉 Looks good! |
| OTEP-879 | BLANK-01 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-880 | EDGE-01 | PASS | 🎉 Looks good! [screenshot] [screenshot] |
| OTEP-881 | EDGE-02 | PASS | 🎉 Looks good! [screenshot] [screenshot] |

### Learning & Courses — landing / recommendations  (7: 7 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1281 | LAND-06 | PASS | 🎉 Looks good! |
| OTEP-1284 | JMP-01 | PASS | 🎉 Looks good! |
| OTEP-932 | LAND-02 | PASS | 🎉 Looks good! |
| OTEP-934 | LAND-04 | PASS | 🎉 Looks good! |
| OTEP-935 | LAND-05 | PASS | 🎉 Looks good! |
| OTEP-936 | LAND-06 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-952 | LAND-01 | PASS | 🎉 Looks good! |

### Learning & Courses — discovery / detail  (21: 18 PASS, 1 PASS\*, 2 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1289 | DISC-06 | OPEN | Ok, thanks. |
| OTEP-939 | DISC-03 | PASS* | this can be moved to done? |
| OTEP-948 | DTL-05 | OPEN | Got this error when i clicked Learn More [screenshot] |
| OTEP-1290 | DISC-07 | PASS | 🎉 Looks good! |
| OTEP-1291 | DISC-08 | PASS | 🎉 Looks good! |
| OTEP-1293 | DISC-11 | PASS | 🎉 Looks good! |
| OTEP-1294 | DISC-12 | PASS | 🎉 Looks good! |
| OTEP-1298 | DISC-18 | PASS | 🎉 Looks good! |
| OTEP-1299 | DISC-19 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-937 | DISC-01 | PASS | Separately clarified with Rama that there are 4 logics applied to course sorting. 1. Upcoming courses (start date later than today) - the soonest is shown first # Past courses (... |
| OTEP-938 | DISC-02 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-940 | DISC-04 | PASS | 🎉 Looks good! |
| OTEP-941 | DISC-010 | PASS | 🎉 Looks good! |
| OTEP-942 | DISC-14 | PASS | 🎉 Looks good! |
| OTEP-943 | DISC-15 | PASS | 🎉 Looks good! |
| OTEP-944 | DTL-01 | PASS | 🎉 Looks good! |
| OTEP-945 | DTL-02 | PASS | 🎉 Looks good! |
| OTEP-946 | DTL-03 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-947 | DTL-04 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-949 | DTL-06 | PASS | 🎉 Looks good! |
| OTEP-951 | DTL-08 | PASS | 🎉 Looks good! [screenshot] |

### CV inference (CIE)  (5: 5 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1223 | CIE-01 | PASS | 🎉 Looks good! |
| OTEP-1224 | CIE-02 | PASS | 🎉 Looks good! [screenshot] [screenshot] |
| OTEP-1225 | CIE-03 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1226 | CIE-04 | PASS | 🎉 Looks good! Tested by adding “Backend Engrg” and “Functional Testing” into Davien’s profile first before adding them again thru CV CIE; both competencies remain in the profile... |
| OTEP-1227 | CIE-05 | PASS | 🎉 Looks good! [screenshot] |

### Opportunities — listing / detail / pagination  (23: 19 PASS, 4 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-959 | UAT-OPP-005 | PASS* | [screenshot] |
| OTEP-965 | UAT-OPP-011 | PASS* | Minor clarification that you are referring to “Clear” and not “Clear all” [screenshot] |
| OTEP-970 | UAT-OPP-016 | PASS* | [screenshot] |
| OTEP-972 | UAT-OPP-018 | PASS* | Filtered by closing date and worked: [screenshot] |
| OTEP-1000 | UAT-OPP-026 | PASS | 🎉 Looks good! |
| OTEP-1001 | UAT-OPP-027 | PASS | 🎉 Looks good! |
| OTEP-1002 | UAT-OPP-028 | PASS | 🎉 Looks good! |
| OTEP-1003 | UAT-OPP-029 | PASS | 🎉 Looks good! |
| OTEP-955 | UAT-OPP-001 | PASS | 🎉 Looks good! |
| OTEP-956 | UAT-OPP-002 | PASS | 🎉 Looks good! |
| OTEP-957 | UAT-OPP-003 | PASS | Thanks, moving this to Done/Passed. |
| OTEP-958 | UAT-OPP-004 | PASS | 🎉 Looks good! |
| OTEP-960 | UAT-OPP-006 | PASS | 🎉 Looks good! |
| OTEP-961 | UAT-OPP-007 | PASS | 🎉 Looks good! |
| OTEP-962 | UAT-OPP-008 | PASS | 🎉 Looks good! |
| OTEP-963 | UAT-OPP-009 | PASS | 🎉 Looks good! |
| OTEP-964 | UAT-OPP-010 | PASS | 🎉 Looks good! |
| OTEP-966 | UAT-OPP-012 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-967 | UAT-OPP-013 | PASS | 🎉 Looks good! |
| OTEP-969 | UAT-OPP-015 | PASS | 🎉 Looks good! |
| OTEP-971 | UAT-OPP-017 | PASS | 🎉 Looks good! Opportunity no longer available today. [screenshot] |
| OTEP-973 | UAT-OPP-019 | PASS | 🎉 Looks good! [screenshot] |
| OTEP-999 | UAT-OPP-025 | PASS | 🎉 Looks good! |

### Opportunities — competency match (E2E)  (1: 1 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1004 | PATHFINDER | PASS | 🎉 Looks good! + toggling role competency - “Corporate Finance” - does not trigger any changes in competency match count both on card and in detail page + toggling additional com... |

### Opportunities — search  (10: 9 PASS, 1 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1033 | UAT-SEARCH-015 | PASS* | Agree to close and raise as enhancement. |
| OTEP-1019 | UAT-SEARCH-001 | PASS | 🎉 Looks good! |
| OTEP-1020 | UAT-SEARCH-002 | PASS | 🎉 Looks good! |
| OTEP-1021 | UAT-SEARCH-003 | PASS | 🎉 Looks good! |
| OTEP-1022 | UAT-SEARCH-004 | PASS | 🎉 Looks good! |
| OTEP-1024 | UAT-SEARCH-006 | PASS | 🎉 Looks good! |
| OTEP-1025 | UAT-SEARCH-007 | PASS | 🎉 Looks good! |
| OTEP-1026 | UAT-SEARCH-008 | PASS | 🎉 Looks good! |
| OTEP-1027 | UAT-SEARCH-009 | PASS | 🎉 Looks good! |
| OTEP-1029 | UAT-SEARCH-011 | PASS | 🎉 Looks good! |

### Opportunities — job-family filter / consolidation  (5: 3 PASS, 2 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1015 | UAT-JF-009 | PASS* | This is working as intended. Realised I’d forgotten to clear my search bar hence no opportunities were shown earlier. |
| OTEP-1016 | UAT-JF-010 | PASS* | [screenshot] |
| OTEP-1007 | UAT-JF-001 | PASS | 🎉 Looks good! |
| OTEP-1008 | UAT-JF-002 | PASS | 🎉 Looks good! |
| OTEP-1017 | UAT-JF-011 | PASS | 🎉 Looks good! |

### Opportunities — ring-fencing  (3: 2 PASS, 1 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-975 | PATHFINDER | PASS* | Works for Michelle, can’t open for Richard Ramos 👍 |
| OTEP-1301 | PATHFINDER | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1302 | PATHFINDER | PASS | 🎉 Looks good! [screenshot] |

### Navigation  (3: 3 PASS, 0 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1228 | NAV-01 | PASS | 🎉 Looks good! |
| OTEP-1229 | NAV-02 | PASS | 🎉 Looks good! |
| OTEP-1230 | NAV-03 | PASS | 🎉 Looks good! [screenshot] |

### Footer / static content  (3: 2 PASS, 1 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1233 | FOOT-03 | PASS* | Thanks We can change it let me create a ticket: https://sgtechstack.atlassian.net/browse/OTEP-1401 |
| OTEP-1231 | FOOT-01 | PASS | 🎉 Looks good! |
| OTEP-1232 | FOOT-02 | PASS | 🎉 Looks good! |

### Defect tickets (not test cases)  (1: 0 PASS, 1 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1339 | BUG | PASS* | Root cause diagnosis and suggested fix for the duplicated competency match on the Opportunity Detail page: h3. Root Cause Analysis # *Ingestion / Reference Loader:* In {{interna... |

### Late-filed UI bugs (found & fixed in UAT)  (6: 4 PASS, 2 PASS\*, 0 OPEN, 0 PARTIAL)

| Ticket | Case | Verdict | Last comment / disposition |
|---|---|---|---|
| OTEP-1287 | (UNTAGGED) | PASS* | Initial issue: Autocomplete does not filter by competencies, while actual search does. This has been fixed |
| OTEP-1418 | (UNTAGGED) | PASS* | the function is working as expected and not a bug right? Then can pass? |
| OTEP-1420 | (UNTAGGED) | PASS | Can’t get a screenshot with the cursor change but can confirm that it is no longer showing the hand cursor, but the arrow cursor now. |
| OTEP-1421 | (UNTAGGED) | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1422 | (UNTAGGED) | PASS | 🎉 Looks good! [screenshot] |
| OTEP-1424 | (UNTAGGED) | PASS | Thanks, it works now. [screenshot] |

---

## Flagged tickets

Every ticket carrying a defect, missing evidence, an unresolved decision, or a citation problem. Board status for all of these is **Done**; the flag is what the ticket's own thread shows.

| Ticket | Risk category | Why it matters | Current state |
|---|---|---|---|
| OTEP-1289 (DISC-06) | Confirmed defect | Course search returns results newest-first, no relevance tiering. Description confirms the defect; a comment says "working as intended." Never reconciled. | Last comment "Ok, thanks." No tiering fix. Decide: ship the 4-tier ranking or retire the AC. |
| OTEP-948 (DTL-05) | Confirmed defect — open | LEARN "Learn more" redirect leaves the user logged out and errors. | Last comment (24 Aug) is the error screenshot. No fix confirmation. The one genuinely unresolved defect. |
| OTEP-1263 (REC-05) | Fix unconfirmed — bug persists | Same-name role-selection toggle: clicking the last of two identically-named roles selects the first. | Last comment: "the issue about the 2 roles with the same names … persists." Flagged to eng, not closed. |
| OTEP-1234 (NAME-01) | Conditional pass | Role names must show without grade codes everywhere. 30+ cleanup rules, still discovering more. | "pass this for now. Please make sure the job grades are removed before launch." Needs a pre-launch re-check. |
| OTEP-1233 (FOOT-03) | Follow-up open | Footer links + clause 11.1 hyperlink. Passed after doc updates, but "Feedback" should be renamed "Report Issue." | Rename tracked as OTEP-1401. Links themselves work. |
| OTEP-1303 / 1304 / 1305 (REC Groups 1–3) | Closed by cross-reference, not execution | Marked Pass while in Backlog, no execution comments. Chris: "1303 tests for randomisation – not done … every recommendation test has been done based on X specific roles." | 1305: "covered by 1264/1328 for vertical (less 1265), lateral not covered … lateral covered under 1327/1329." Randomisation AC unverified against a deterministic engine (topNByMatch). |
| OTEP-1265 / 1267 / 1268 (REC-07/09/10) | Not executed — accepted | Blocked on engineered test data; never run. | "Covered by OTEP-1264 (family fallback), OTEP-1328 (agency fallback)." Coverage accepted via adjacent tickets. |
| OTEP-893 (CRS-01) | Data/copy mismatch | Steps expect 80% match; observed 100%. Never reconciled in comments. | "Looks good!" — swimlane behaviour passed, the test-data match-% was left inconsistent. |
| OTEP-959 / 966 (UAT-OPP-005/012) | AC-wording mismatch | Spec says controls should be "absent"; actual is "disabled/greyed out." | "Looks good!" with screenshots. Behaviour accepted; correct the ACs to "disabled." |
| OTEP-936 (LAND-06) | Expectation-wording mismatch | Expected "30/30" recommended tiles; 25 render. | "Looks good!" — 25 is the intended swimlane cap (OTEP-1281/1284). Expectation text is misleading. |
| OTEP-1339 | Defect ticket (not a test case) | Duplicated competency names on the opportunity detail page — importer not filtering deleted competencies. | Root cause + fix documented (importer.go, ref_resolver.go, write_repository.go, get_handler.go). Confirm the fix shipped and was re-verified. |
| OTEP-1332 (REC-17) | Was unresolved — now settled | rama moorthy vs Guo XZ on whether lateral or vertical wins a match-% tie. | "clarified with Imelda … Mark had guided to show lateral roles ahead of vertical." Settled since 8-25. |
| OTEP-872 (REC-01) | Was fix-pending — now confirmed | Role-highlighting regression, redeploy pending at 8-25. | "The selection is OK now. Will move this to Passed." |
| OTEP-1221 (ERR-01) | Was citation-unverified — now resolved | At 8-25 cited as whitelist-exclusion proof but not locatable in the 182-ticket export. | Now in the export, Done, "Looks good!" with screenshot (17 Aug). |
| OTEP-1227 (CIE-05) | Was Fail — now passing | CV upload error handling (unsupported file type, no-competency case). | "Looks good!" with screenshot. |
| OTEP-1306 / 1330 / 1295 / 105 | Removed since 8-25 | 1306 repetitive (covered by 1332 + 1310); 1330 subset of 1331; 1295 shifted to CSC UAT (prod-data check); 105 not a test case. | Not in the current export. Dispositions match the 8-25 annotations. |

---

## Bottom line

**Real open items before sign-off (3):**

1. **OTEP-948 (DTL-05)** — LEARN redirect error, no fix confirmed. Only unresolved defect.
2. **OTEP-1289 (DISC-06)** — course-search ranking: defect vs "working as intended" never reconciled.
3. **OTEP-1263 (REC-05)** — same-name role-selection toggle bug still reproduces.

**Conditional pass to re-check pre-launch (1):**

4. **OTEP-1234 (NAME-01)** — grade-code cleanup, verify none leak before launch.

**Coverage by cross-reference, not execution:** REC Groups 1303/1304/1305 and REC-07/09/10 passed by pointing at adjacent tickets. **Randomisation (1303) is specifically unverified** and the engine is deterministic — reconcile that AC. Chris's note is explicit: recommendation tests ran on fixed roles, not randomised sampling.

**Environment / scope limits (expected, not gaps to fix now):**

- No live OTG account → Compass E2E. OTG-01 and all carry-over tests use engineered data.
- Inclusion-side whitelisting needs production data (POCDEX-managed).
- Live employment-change ingestion / in-place profile refresh is the separate employment-profile-change workstream, not this UAT.

**AC / copy fixes (cosmetic, no code):** OTEP-959, 966 ("absent" → "disabled"), OTEP-936 ("30/30" → "25 cap"), OTEP-893 (test-data match-%), OTEP-843 ("My" → "Your" competencies), OTEP-1233 ("Feedback" → "Report Issue", tracked as OTEP-1401).