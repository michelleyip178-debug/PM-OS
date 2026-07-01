# Sprint 6 Pre-Planning Brief

**Date:** 2026-07-01 (W27)

**Corrections across prior versions of this brief:**
1. Confirmed by Michelle directly: **Sprint 5 runs 28 Jun – 13 Jul 2026.** Two earlier passes of this document mislabeled the 13–26 Jul date range as "Sprint 6" — that range actually belongs to Sprint 7.
2. Sprint 6 (id 34620) is a real Jira sprint, not yet started ("future" status). Its analysis below reflects that: it's a forecast of Sprint 5 carry-over, not a check against an already-populated board.

---

## Sprint 6 — what it actually is right now

- **Sprint 5 (id 34619, active): 28 Jun – 13 Jul 2026** — confirmed by Michelle directly.
- **Sprint 6 (id 34620, status "future" — not yet started).** Jira's `startDate` field on this sprint currently shows a placeholder (assigned automatically to sprints before they're started — it isn't a real planning date and doesn't indicate any overlap with Sprint 5). Its real dates will be set when it's actually started, expected to follow on from Sprint 5's close on 13 Jul.
- **Sprint 6 currently contains exactly one ticket:** OTEP-429 ("WD DevOps — upload OTG opportunity data and the processed data gets loaded into OTEP"), status **Backlog**, **unassigned**. Expected — Sprint 6 grooming/planning hasn't happened yet since Sprint 5 is still active.
- **Sprint 7** (id 34621) and **Sprint 8** (id 34622) also exist as future sprints, both currently near-empty, same placeholder-date situation.

None of the hub trackers (`00-hub/sprint-status.md`, `00-hub/tasks-active.md`) mention Sprint 6 by name yet — expected, since it hasn't started.

---

## What this means for "what to bring into Sprint 6"

Sprint 6 hasn't been planned yet — that's normal, since Sprint 5 is still active (runs to 13 Jul) and grooming/planning for Sprint 6 happens near the end of Sprint 5, not now. The candidate analysis from the earlier drafts of this brief (WOG AD, keyword search, competency work, ringfencing, CMM) is real and useful — it's the read on **what's likely to still be open when Sprint 5 closes and therefore carries into Sprint 6 planning**. That's the correct way to think about "what to bring into Sprint 6" right now: not a check against an already-populated Sprint 6 board (there isn't one yet), but a forecast of Sprint 5 carry-over plus the open items that should be resolved before Sprint 6 planning happens, so they don't get silently carried forward unresolved.

## Sprint 5 carry-over → Sprint 6 candidates

Every row is labeled by source: **Fact** (directly observed from the live Jira pull) vs. **Inference** (my read of hub tracker items — open-items.md, decisions-log — not a Jira field; these are judgment calls to confirm, not settled facts).

| Ticket | Status | Owner | What it is | Sprint 6 call | Source |
|---|---|---|---|---|---|
| OTEP-350 | In Progress | Fabian | WOG AD onboarding | **Carries in** | Fact — In Progress, spans multiple closed sprints per its own sprint field history |
| OTEP-304 | In Progress | Hao Eng | Stay-authenticated | **Carries in, needs handover check** | Fact (In Progress) + Inference (Hao Eng's upcoming leave — open-items #52) |
| OTEP-87 | In Progress | Thomas | C@G opportunity detail | **Carries in, competency section at risk** | Fact (In Progress) + Inference (SSOT governance gate — open-items #18/#41) |
| OTEP-405 | In Progress | Thomas | Keyword search | **Carries in, needs single AC owner named** | Fact (In Progress) + Inference (AC ownership gap — open-items #51) |
| OTEP-88, 386, 322, 276, 349, 361 | In Progress | Léo / Thomas / Rathika / Pow Hwee | C@G listing, tooltip, Playwright E2E, design-system spike, competency spike, ADR forum | **Likely close normally or carry in without a specific named blocker** | Fact — In Progress, no tracker item flags a specific gate |
| All 13 QA items (OTEP-85, 86, 128, 129, 131, 268, 284, 305, 392, 406, 438, 571, 595) | QA | Mixed / several unassigned | Listing/filter/auth/admin work | **Not an optional pull — will close before 13 Jul or become genuine carry-in if still in QA at close** | Fact — status as of 2026-07-01 |
| OTEP-445 | To Do | Unassigned | POCDEX code table import spike | **Needs an owner now, independent of sprint** | Fact — unassigned since before Sprint 5 started |
| OTEP-390, OTEP-408, OTEP-409 | Backlog | Unassigned | Ringfenced opportunity detail states, BE/FE ringfencing filter | **Blocked — cannot start until BO sign-off lands** | Fact (Backlog) + Inference (gated by open-items #43, already past its "before S5 grooming" due date) |
| OTEP-283 (parent of sub-task OTEP-541) | Backlog | Unassigned | Ministry icons on detail page | **Blocked — same BO sign-off gate** | Fact (Backlog) + Inference (#43) |
| OTEP-336, OTEP-570 | Backlog | Unassigned | Competency match signal / matched competencies on Gig/STIP cards | **Blocked — competency SSOT governance unresolved** | Fact (Backlog) + Inference (open-items #18/#41, reopened 26 Jun) |
| OTEP-393 | Backlog | Unassigned | Custom Keycloak login theme | **Explicitly out** | Fact — decision log confirms this is deferred until WOG AD is live |
| CMM (Competency Management Module) — no ticket exists | — | — | — | **Explicitly out until leadership trade-off decision (#50) is made** | Inference only — no Jira ticket exists yet; this is a scope-pressure risk, not tracked work |
| OTEP-483 (parent, "Technical tasks Sprint 4") | Backlog | Unassigned | Umbrella technical task, includes sub-task OTEP-505 (CFT integration) | **Needs scoping — unclear if this is one Sprint 6 candidate or should be split** | Fact — Backlog, unassigned, parent of active sub-task work |

**Items worth resolving this week, before Sprint 6 grooming starts:**
1. **#43** — BO sign-off on ringfencing hide-vs-show-but-disable (past its "before S5 grooming" due date)
2. **#44** — 403 error page confirmation with LifeSG (blocks Amber's error state designs)
3. **#52** — Hao Eng's upcoming leave, no handover plan yet (affects OTEP-304, currently In Progress)
4. **#50** — CMM scope pressure needs an explicit leadership decision, not another round of informal discussion

---

## AC-level read: what the acceptance criteria themselves say about carry-in risk

Pulled the actual description/AC field for every open (non-Done, non-Sub-task) Sprint 5 ticket, not just the summary line. Three patterns emerge that summaries alone don't show:

### 1. Thin or missing ACs — carry-in risk regardless of hub-tracker gates

| Ticket | Issue | Why this matters for Sprint 6 |
|---|---|---|
| **OTEP-350** (WOG AD onboarding, Fabian, In Progress) | ACs are three high-level bullets — "Register app in WOG AD tenant," "Configure OAuth/OIDC," "Obtain credentials and redirect URIs" — with no concrete Definition of Done, no test/verification step, no owner-side dependency named. This reads like a spike scope, not a build ticket with closeable ACs. | This is the single highest-confidence carry-in candidate in the whole sprint — not because of an external blocker (though #26 in open-items also flags one), but because the ticket itself has no way to verify "done." If it carries into Sprint 6 as-is, it'll carry into Sprint 7 too unless the ACs get rewritten with a concrete completion test. |
| **OTEP-406** (Sort Opportunities, Thomas, QA) | **No description or AC at all** — completely empty field. | A ticket with zero written ACs sitting in QA is unusual — either the ACs were written elsewhere (Figma, a linked doc) and never copied in, or this slipped through grooming without them. Worth a direct check with Thomas before assuming QA sign-off means it's actually done against agreed criteria. |
| **OTEP-483** ("Technical tasks Sprint 4", Backlog, unassigned) | **No description**, and the ticket's own title says "Sprint 4" while it sits in the Sprint 5 backlog. Its sub-task OTEP-505 (CFT integration) is separately In Progress. | This looks like a stale umbrella ticket that never got renamed or cleaned up when Sprint 4 closed. Recommend closing/renaming it rather than letting "Technical tasks Sprint 4" silently roll into Sprint 6's board. |

### 2. Fully-specified ACs blocked purely by an external decision (not an AC-quality problem)

OTEP-390, OTEP-408, OTEP-409 (ringfencing) and OTEP-283 (ministry icons) all have clear, complete, testable ACs already written. The blocker is entirely external (#43, BO sign-off) — these are ready to build the moment that lands. Worth distinguishing from OTEP-350/406/483 above: these won't need rework, just a green light.

### 3. Competency-matching ACs explicitly name the dependency in the AC text itself

OTEP-336 and OTEP-570 both have ACs written as Given/When/Then, and both explicitly condition on "**When their competency profile is successfully retrieved from the Core competency endpoint**." This isn't just a hub-tracker inference (open-items #18/#41) — the AC text itself confirms these tickets cannot pass their own acceptance test until OTEP-Core's competency endpoint is live and integrated. Genuinely blocked at the AC level, not just by process.

**Bottom line on "what will likely be brought over to Sprint 6, based on the ACs":**
- **Highest-confidence carry-in: OTEP-350** — not because it's externally blocked, but because its own ACs don't define a completion test. Recommend rewriting its ACs before Sprint 6 planning, regardless of WOG AD's external timeline.
- **Ready-to-build-if-unblocked: OTEP-390/408/409/283** — ACs are solid; only need #43 resolved.
- **Structurally blocked at the AC level: OTEP-336/570** — will not pass their own acceptance tests until the Core competency endpoint exists, independent of any hub-tracker escalation.
- **Needs a data-quality fix before Sprint 6 grooming: OTEP-406, OTEP-483** — missing ACs/descriptions should be filled in or the tickets closed/renamed, so they don't carry forward in an unreviewable state.

---

*Sources: live Jira pull, OTEP-Pathfinder board (id 12541), all sprints 2026-07-01 — Sprint 5 = id 34619 (28 Jun–13 Jul, confirmed by Michelle), Sprint 6 = id 34620 (future, not started, 1 ticket), Sprint 7 = id 34621, Sprint 8 = id 34622. Cross-checked against `PM-skills-ALL-1/00-hub/sprint-status.md` and `tasks-active.md` — neither currently documents Sprint 6. This version supersedes two prior drafts that mislabeled the 13–26 Jul date range as Sprint 6.*
