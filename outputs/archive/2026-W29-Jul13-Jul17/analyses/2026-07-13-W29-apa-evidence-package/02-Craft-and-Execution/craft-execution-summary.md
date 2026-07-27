# Craft & Execution — Evidence Summary

**Source:** Sprint 4 Planning notes (11 Jun 2026) and Decisions Log — full detail in `2026-06-11-W24-sprint-4-planning.md` and `decisions-log.md`

---

## Headline

Sprint 4 planning surfaced 5 blockers and 4 design gates before the sprint started, plus a point-estimate correction against live Jira, rather than letting any of them resolve mid-sprint. Across the decisions log, execution discipline shows up as a repeated pattern: intercepting AC conflicts and scope ambiguity at planning or grooming, not after engineering has started building.

---

## Definition of Ready (DoR) Discipline

**Sprint 4 goal (agreed 11 Jun):** *"Deliver a complete, usable opportunity listing experience — officers can search, filter, and sort opportunities, understand what each type means, and trust that the data they're seeing is current and accurate."*

**2 AC conflicts intercepted before engineering started:**
1. **OTEP-87** — FormSG redirect vs. C@G deep-link boundary was unclear; flagged twice by the tech lead. Resolved before Sprint 4 day 1 (15 Jun).
2. **C@G payload schema** — Thomas (FE) needed the field mapping before starting OTEP-378; owner and deadline (Mon 15 Jun) set at planning, not discovered mid-sprint.

**Point-estimate correction against live Jira:**

| Ticket | Planning doc estimate | Live Jira | Delta |
|---|---|---|---|
| OTEP-405 | 6 pts | 3 pts | -3 |
| OTEP-406 | 5 pts | 2 pts | -3 |

The planning document had been drafted before Jira estimates were set. Running a full jira-sync during planning prep caught the drift and brought the sprint total from 57 to a corrected 54 points before commitment — not after the sprint was already running hot.

---

## Readiness Assessment Structure

Planning explicitly separated readiness into two tracked categories rather than treating "ready" as a single yes/no gate:

- **5 blockers** requiring resolution before Sprint 4 start (AC conflicts, schema dependencies, assignee formalisation, spike scoping, a virus-scan integration outcome gating file-upload work)
- **4 design gates** requiring Amber's Figma sign-off before FE build could start (listing card icon, type label, hyperlink pattern, empty/error states)

Each blocker and gate was assigned an owner and, where applicable, a date — none were left as an implicit "someone will handle it."

**Capacity sense-check performed at planning, not assumed:** Thomas (sole FE) was flagged as carrying elevated WIP from Sprint 3 carry-over plus 4 new Sprint 4 tickets — explicit call made not to add further scope to him in week 1.

---

## QA/UAT Environment Separation

**Decision (2026-06-04, Team):** UAT runs in the Compass UAT environment; the QA environment is for the QA engineer to verify Acceptance Criteria are met. Two distinct environments, two distinct purposes — engineer-driven AC verification is kept separate from user-driven acceptance testing.

This was agreed at a 9am team meeting and is logged as a **Team** decision, not solely authored by one person. Framing this evidence: facilitated team agreement to separate QA and UAT environments, removing a recurring source of environment-drift bugs.

---

## Sprint-Close Governance

**Decision (2026-06-04, Team):** A sprint can close only when the Business Owner moves that sprint's user stories from UAT to Done — this is a BO action, not an engineering or QA self-call. Sub-tasks are closed by the engineers doing the work; stories require BO acceptance.

This puts the final acceptance gate on the person closest to the user-facing outcome, rather than letting a sprint self-certify as complete from the engineering side alone.

---

## Pattern Across the Decisions Log

Looking at the decisions log as a whole (94 entries, March–July), a repeated craft signature emerges: scope and AC ambiguity gets caught and resolved *before* it reaches engineering, not discovered mid-build. Examples beyond Sprint 4 planning:

- **OTEP-268** (empty/error states) — partial-load AC removed, good-to-haves spun to separate tickets, empty-state copy confirmed — before the story could stall on scope creep (19 May).
- **OTEP-276** (design-system spike) — dropped from Sprint 2 once execution (OTEP-252, already Done) had already answered the spike's open question — avoided doing redundant discovery work.
- **OTG ingestion error handling** (8 Jun) — deliberate choice of a hard-skip rule over a tiered approach, after weighing data-cleanliness risk against UX cost, rather than defaulting to the more permissive option.

---

*Full sourcing and the complete decisions log (94 entries) are in the companion files: `2026-06-11-W24-sprint-4-planning.md` and `decisions-log.md`.*
