# UAT Test Data Prep List — CareerCompass (Core, Pathfinder, Intelligence)

**Purpose:** Every distinct data state referenced across the 53 test cases in [CareerCompass UAT Test Cases](2026-07-17-W29-careercompass-uat-test-cases.md) and [Pathfinder UAT Test Cases](2026-07-17-W29-pathfinder-uat-test-cases.md), consolidated into one prep checklist. Per the [UAT Operating Model](../meeting-notes/2026-07-17-W29-uat-operating-model.md), Tech Leads own preparing this data; this list is the requirements handoff to them.

**Rule to follow:** per the Operating Model, "where data cannot be freely created, realistic profiles must be curated" and "profiles used for UAT must be reserved and not mutated mid-UAT" — everything below needs to be set up *before* Phase 0 and left untouched during execution, not created on the fly.

---

## 1. Officer test accounts (personas)

Six distinct officer identities, each needs a real POCDEX-backed account (or curated equivalent) reserved for the full UAT window. This is the highest-priority prep item — nearly every test case depends on one of these.

| Persona | Data shape required | Used in |
|---|---|---|
| **Priya** — standard officer | Complete, clean record: valid pilot-agency role, agency, title (correctly sourced from HRP/Cumulus per source system field), full Core + Functional competencies assigned, zero data gaps | Nearly every test case — the baseline path |
| **Marcus** — data gap | Valid login, but role's job ID either doesn't resolve, or resolves to a role with zero competencies tagged | UAT-COMP-003, 004, 005; UAT-DEV-003 |
| **Farah** — no role assigned | POCDEX has no current role/position on record at all (more severe than Marcus — no role, not just no competencies) | UAT-DEV-004, UAT-XCUT-003 |
| **Wei Ling** — incomplete HR data | Agency name or job title field is blank or literally "NA" in the source record | UAT-LOGIN-003 |
| **Daniel** — shared-device testing | Any valid account; needs a **second** distinct account to test against (two officers on one browser/device) | UAT-LOGIN-006 |
| **Kumar** — never self-declared | Complete role + role-based competencies, but zero self-declared competencies ever added | UAT-DEV-002 |

**Also needs:** a role profile with **9 or more Functional Competencies** assigned (for UAT-COMP-002's "view more" collapse test) — this can be Priya's role or a dedicated test role, but confirm the count explicitly since most roles may not naturally hit 9+.

---

## 2. Competency Bank data

| What's needed | Why |
|---|---|
| At least one competency with a **known, searchable keyword** that returns multiple matches (some "starts with," some "contains") | UAT-ADDCOMP-001 — tests search ranking logic specifically |
| Confirm the Competency Bank has ≥20 matches for at least one test keyword | UAT-ADDCOMP-001 tests the "capped at 20 results" boundary — needs enough real data to actually hit the cap, not just theoretically |

---

## 3. CV files for upload testing

| File | Format | Purpose |
|---|---|---|
| Valid sample CV | `.docx`, under 5MB, content matching known WOG FC Bank competencies (so inference has something real to find) | UAT-ADDCOMP-002 |
| Invalid-format file | `.pdf` (or another non-.docx type) | UAT-ADDCOMP-003 — ⚠️ **this test case is currently blocked**, expected behavior for a rejected upload isn't defined in the AC yet. Flag to Core PM before this file is even needed for execution. |

**Open question to resolve before Phase 0:** does an oversized (>5MB) .docx file also need a test case? Not currently in either doc — worth confirming with Core whether this is in scope.

---

## 4. Opportunity listing data (Pathfinder)

This is the data-heaviest area — several test cases need very specific counts and states, not just "some opportunities."

| Data state needed | Count/detail | Used in |
|---|---|---|
| Standard open opportunities, mixed posting dates | ≥5, so sort order (newest-first) is actually visible | UAT-OPP-001 |
| Opportunity past its closing date | ≥1, confirm it's excluded from the listing | UAT-OPP-003 |
| **>15 open opportunities** | 16+ total, to trigger pagination | UAT-OPP-004 |
| **≤15 open opportunities** — separate dataset/filter state | Confirm a state exists where pagination controls should NOT appear | UAT-OPP-005 |
| **Zero open opportunities** | A genuinely empty result set (either globally or via a specific filter) | UAT-OPP-006, UAT-OPP-010 — **flagged in the Pathfinder doc as a data-state requirement to confirm can actually be arranged, not just an officer persona** |
| Mixed opportunity types (STIP, Gig, Jobs) | At least 2 of each, for single- and multi-type filter tests | UAT-OPP-007, 008 |
| >15 results matching one filter type | For the "filter persists across pagination" test | UAT-OPP-009 |
| A filter combination guaranteed to match nothing | For the empty-state-via-filter test | UAT-OPP-010 |
| Opportunity closing within 7 days (strictly future) | Exact test: 5 days out | UAT-OPP-018 |
| Opportunity with **no closing date** (evergreen) | Confirm this state exists in test data | UAT-OPP-019 |
| Invalid/nonexistent opportunity ID | For the broken-link "not found" test | UAT-OPP-016 |

---

## 5. Careers@Gov (C@G) sourced opportunity data

| Data state needed | Detail | Used in |
|---|---|---|
| C@G opportunity with a **complete payload** | Title, agency, description, duration, all structured fields present | UAT-APPLY-001 |
| C@G opportunity with **responsibilities/pre-req fields present in the payload** | Specifically to confirm they're excluded from display, not just absent because the source didn't have them | UAT-APPLY-002 |
| C@G opportunity that's since been **removed from the live C@G site** post-click | Needs coordination — this is an external-system state, not something CareerCompass test data alone can produce | UAT-APPLY-004 — flag to Rama as an external-dependency data need, not just internal prep |

---

## 6. FormSG application data

| Data state needed | Detail | Used in |
|---|---|---|
| Opportunity with a **valid, working formsg_url** | Two distinct opportunities with two distinct valid URLs (to confirm no cross-wiring) | UAT-APPLY-006, 007 |
| Opportunity with **missing/empty formsg_url** | ⚠️ **Flagged as at-risk** — Sprint 5 Jira comments (Thomas, 25 Jun) noted the source Excel was missing POC data for many opportunities. Confirm this specific state actually exists in reserved test data before Phase 0, don't assume it does. | UAT-APPLY-008 |
| Opportunity with a **valid formsg_url pointing to a closed/unavailable form** | Needs a real FormSG form that's been deliberately closed, or coordination with FormSG-side test setup | UAT-APPLY-009 |

---

## 7. Cross-squad / cross-cutting data

| Data state needed | Detail | Used in |
|---|---|---|
| Session continuity across pages | No special data — just confirms the same logged-in session works across Profile → Development → Opportunities without re-auth | UAT-XCUT-001 |
| Officer with added competency but **no job-matching signal expected** | Uses Priya's account; the point is confirming *absence* of a feature, not new data | UAT-XCUT-002 |
| Farah's "no role" account tested against the **Opportunities listing specifically** | Confirms current (unbuilt-ringfencing) behavior, so it's not later mistaken for a defect once ringfencing ships | UAT-XCUT-003 |

---

## Priority order for prep

Given the sequencing recommendation in the CareerCompass doc (Journeys 1→2→3 first, since they have zero open blockers):

1. **Officer accounts (Section 1)** — blocks almost everything, do first
2. **Opportunity listing data (Section 4)** — Pathfinder is 🟢 Ready for UAT today, most immediately testable
3. **C@G and FormSG data (Sections 5–6)** — also 🟢 Ready, but needs the external-dependency coordination flagged above (C@G takedown state, FormSG closed-form state)
4. **Competency Bank + CV files (Sections 2–3)** — Core/Intelligence, still 🟡 in final testing, less urgent but shouldn't block on this list

---

## Items requiring a decision before data can even be prepped

- **UAT-ADDCOMP-003** (invalid file upload) — no expected behavior defined yet; get this from Core PM before prepping the test file is even useful
- **>5MB CV file** — not currently a test case in either doc; confirm with Core whether it should be, since it's an obvious adjacent edge case to the file-type one

---

*Generated: 2026-07-17*
*Source: consolidated from every "Test Data" field across [CareerCompass UAT Test Cases](2026-07-17-W29-careercompass-uat-test-cases.md) (26 cases) and [Pathfinder UAT Test Cases](2026-07-17-W29-pathfinder-uat-test-cases.md) (27 cases)*
*Next: Hand to Tech Leads (Pow Hwee — Pathfinder, Adrian Lo — Core, Victor — Intelligence) per the Operating Model's RACI; confirm C@G/FormSG external-state items with Rama*
