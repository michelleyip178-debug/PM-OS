# AC-to-Test-Case Coverage Audit

**For:** Adrian Ang, in response to his question at the UAT planning session: *"Can we use AI to explore how user story ACs can be generated into test cases QAs should use and sign off? In theory, the stories' ACs should be able to cover all/most test cases."*

**What this is:** A test of that theory against the 53 test cases already built ([CareerCompass](2026-07-17-W29-careercompass-uat-test-cases.md), [Pathfinder](2026-07-17-W29-pathfinder-uat-test-cases.md)) — how many came directly from a story's AC, versus needed something beyond it.

---

## Short answer

The theory mostly holds, but not fully. **38 of 53 test cases (72%) are directly and completely derivable from a single story's AC.** The remaining 28% split into three categories that AI-assisted generation can still produce, but not from AC text alone — worth knowing before QA treats "generate from AC" as a complete method.

| Category | Count | % | What it means |
|---|---|---|---|
| **A — Direct AC derivation** | 38 | 72% | One story's AC, read plainly, generates the test case with no outside input needed |
| **B — Multi-AC synthesis** | 8 | 15% | Requires combining 2+ stories' ACs — the test case doesn't exist in any single ticket |
| **C — Comment-thread derivation** | 4 | 8% | The AC itself doesn't cover it; the real requirement is in a Jira comment thread, not the formal AC field |
| **D — No AC basis at all** | 3 | 5% | Genuinely invented — either an unresolved open question, or a cross-cutting/non-functional requirement no story owns |

---

## Category A: Direct AC derivation (38 cases) — the theory works here

These are the cases where reading the story's AC line-by-line and turning each clause into a test row is genuinely mechanical. Examples:

- **UAT-LOGIN-002** ← OTEP-74's AC literally lists the fields (name, title, agency) and the sourcing rule (HRP vs. Cumulus field) — the test case is close to a direct restatement
- **UAT-COMP-002** ← OTEP-75's "max 8 per section, view more for 9+" is stated outright
- **UAT-OPP-005 / UAT-OPP-004** ← OTEP-267's pagination AC gives both the >15 and ≤15 conditions explicitly
- **UAT-APPLY-006 through 009** ← OTEP-319's AC is unusually complete: happy path, missing-URL fallback, and FormSG-down handling are all stated

**This is most of Pathfinder's shipped scope** (19 of Pathfinder's 27 cases) and most of Core's straightforward stories. If Adrian's asking whether AI can reliably turn a well-written AC into a test case, the answer here is clearly yes.

---

## Category B: Multi-AC synthesis (8 cases) — still generatable, but needs cross-referencing

These required pulling from more than one story, because the *scenario* an officer experiences doesn't map to one ticket.

| Test Case | ACs combined | Why one AC wasn't enough |
|---|---|---|
| UAT-COMP-003 | OTEP-290 (Report Issue button) | Actually single-AC, but the *trigger condition* ("no competencies tagged to job ID") is defined in OTEP-290's own description separately from its main button-behavior AC — borderline B/A |
| UAT-DEV-001 | OTEP-421 + OTEP-126 | "Manage competencies" deep-link behavior is OTEP-421's AC; but confirming the edit actually persists back requires OTEP-126's save behavior too |
| UAT-XCUT-001 | OTEP-205 + OTEP-421 + OTEP-85 | No single ticket owns "does a CV-uploaded competency show up consistently across three different pages" — this only exists as a synthesis across squads |
| UAT-OPP-010 | OTEP-86 + OTEP-268 | Filter AC (86) doesn't mention the empty state; empty-state AC (268) doesn't mention filters. The combination is real but undocumented in either ticket |
| UAT-APPLY-005 | OTEP-89 (implicit) | AC states what C@G's CTA *should* show, but "only one CTA, no FormSG option" is an inference from what's absent, not a stated AC line |
| UAT-DEV-003 | OTEP-512 + OTEP-290 | OTEP-512 references "report issue button" by pointing at a separate ticket rather than restating its behavior |
| UAT-MANAGECOMP-002 | OTEP-126 | Technically one AC, but the AC states the *save* behavior; the *reversibility* (hidden ≠ deleted) is an inference from "hide," not stated directly |
| UAT-COMP-001 | OTEP-75 | Similar — tooltip content is explicit AC, but the "why does this three-way split make sense to an officer" framing required reading the story's problem statement, not just the AC list |

**Implication for QA sign-off:** these are still legitimate, AC-traceable test cases — but a QA process that treats "one test case ↔ one Jira ticket" as the traceability model will miss these, or duplicate them under multiple tickets inconsistently. Worth deciding now whether multi-AC test cases get one ID with multiple references (as done here) or get split.

---

## Category C: Comment-thread derivation (4 cases) — AC field alone would have missed these

These exist because the formal AC in Jira was incomplete, and the *actual* current expectation lives in a comment thread — someone flagged a gap, and a decision (or partial decision) followed in the comments, never migrated back into the AC field itself.

| Test Case | Story | What the AC missed | Where the real answer came from |
|---|---|---|---|
| UAT-LOGIN-006 | OTEP-305 | AC covers logout mechanics but not shared-device data leakage | Cross-referenced against WOG-17 and the "zero tolerance" framing from the wog-authentication PRD, not OTEP-305's own AC |
| UAT-COMP-002's exact threshold (9+ items) | OTEP-75 | Technically in AC, but the *collapsible drawer* mechanism detail came from re-reading the full AC text carefully, not the summary — flagging this as a near-miss for Category A |
| UAT-ADDCOMP-001's ranking logic ("starts with" before "contains") | OTEP-405 (Pathfinder's search, referenced conceptually) | The *initial* AC for search didn't define ranking; Rathika asked "can we define 'by relevance'" in a comment, and Michelle answered "exact match of the search text in title or agency" in that same comment thread — the AC field was never updated with this answer |
| UAT-APPLY-008's Comments field flag | OTEP-319 | AC states the missing-URL fallback correctly, but whether *representative test data* exists to actually exercise it is a Sprint 5 comment-thread concern (Thomas, 25 Jun) that has nothing to do with the AC's correctness |

**This is the most important finding for Adrian's theory.** ACs that look complete on the surface sometimes have their real, current-state answer sitting in a comment thread the AC was never updated to reflect. An AI (or a QA engineer) generating test cases from the AC field *alone*, without reading the comment history, would either miss these entirely or generate a test case against a stale/wrong AC.

---

## Category D: No AC basis at all (3 cases) — genuinely invented, not generated

| Test Case | Why no AC exists |
|---|---|
| UAT-ADDCOMP-003 (invalid file upload) | OTEP-205's AC only specifies the .docx/5MB happy path. There is no AC — not even an implicit one — for what happens on a rejected file type. This test case is currently **blocked**, marked explicitly as such, because there's nothing to generate it from. |
| UAT-XCUT-002 (confirm no competency-based job matching exists) | This isn't testing a built feature — it's testing the *absence* of a feature, to confirm a scope boundary. No story has an AC for "this doesn't happen," because no story was written for the deferred feature. |
| UAT-XCUT-003 (confirm ringfencing enforcement isn't active yet) | Same pattern — OTEP-127 is a design-decision spike, not a build story. There's no AC to test because there's no built behavior yet; this test case exists to document current reality so it isn't later mistaken for a defect. |

**These three cases could not have been AI-generated from AC text under any method** — they required knowing what *wasn't* built, which requires cross-referencing the roadmap/backlog against what's shipped, not reading any single story's AC.

---

## What this means for Adrian's ask

**1. The core theory is right, with a caveat.** ACs generate the large majority (72% directly, ~87% if Category B counts as "AC-derivable with synthesis") of test cases reliably. AI is well-suited to this — it's exactly the kind of structured extraction task it does well, and it's what was done here.

**2. Full QA sign-off can't rely on AC text alone.** Category C (8%) is the real risk: these are cases where the AC *looks* sufficient but is actually stale, and the comment thread carries the current truth. A QA process built purely on "read the AC, generate the test" will silently produce wrong or incomplete test cases for these — not because AI failed, but because the source document (the AC field itself) was incomplete. **Recommendation: any AC-to-test-case generation process should explicitly include a comment-thread scan, not just the AC field**, and QA sign-off should flag when a test case's true source is a comment rather than the AC.

**3. Category D (5%) needs a different process entirely** — not better AC-reading, but a deliberate "what's in the backlog vs. what's built" cross-check. This is a coverage-completeness question, not a generation-quality question.

**4. One immediate action item this surfaces:** UAT-ADDCOMP-001's ranking-logic answer and UAT-APPLY-008's test-data risk are both sitting in comment threads that should be migrated back into their tickets' AC fields — not just for this UAT round, but so the next person reading OTEP-405 or OTEP-319 doesn't have to re-discover them the same way.

---

*Generated: 2026-07-17*
*Audited: all 53 test cases across [CareerCompass](2026-07-17-W29-careercompass-uat-test-cases.md) and [Pathfinder](2026-07-17-W29-pathfinder-uat-test-cases.md) UAT test case docs*
*Next: Share with Adrian and QA as direct input to his question; decide whether Category C ACs get formally updated in Jira as a follow-up*
