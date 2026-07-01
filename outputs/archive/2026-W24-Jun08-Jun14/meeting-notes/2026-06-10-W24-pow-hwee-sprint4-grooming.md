---
date: 2026-06-10
topic: Sprint 4 Grooming Suggestions — Opportunity UI & Ingestion Gap Analysis
from: Pow Hwee (Tech Lead)
type: Async grooming input
---

# Sprint 4 Grooming Input — Pow Hwee

**Date:** 10 June 2026

**From:** Pow Hwee (Tech Lead)

**Format:** Async written input, based on Figma design review + ingestion pipeline analysis

**Sprint:** OTEP-Pathfinder Sprint 4

---

## Summary

Pow Hwee reviewed the latest Figma designs and the ingestion pipeline against the Jira backlog, cross-referenced against previous sprints. Four categories of gaps identified: missing tickets for designed features, backlog items ready to pull, cross-squad dependencies requiring spikes, and edge cases that need owners.

---

## Decisions

None made in this input. All items are recommendations requiring Michelle's call.

---

## Action Items

| Task | Owner | Due | Priority |
|---|---|---|---|
| Create ticket: [FE/BE] Keyword Search for Opportunities | Michelle | Before S4 planning | High — designed feature with no ticket |
| Create ticket: [FE] Sort Opportunities (Posted/Closing Date) | Michelle | Before S4 planning | High — designed feature with no ticket |
| Pull OTEP-281 into S4 | Michelle | Before S4 planning | Medium — needed for correct loading feedback |
| Create spike ticket: Cross-squad competency matching API alignment (Pathfinder + Core + Intel/AI) | Michelle | Before S4 planning | High — OTEP-336 is blocked on this |
| Decide: does OTEP-192 competency insertion need to align with Core architecture before S4? | Michelle + Pow Hwee | Before S4 planning | High — dependency risk if left unresolved |
| Decide: OTEP-403 scope — which edge cases go in S4 vs post-MVP? | Michelle | Before S4 planning | Medium |
| Decide: FormSG unavailable banner — S4, S5, or post-MVP? | Michelle | Before S4 planning | Low |
| Decide: OTEP-289 and OTEP-318 — pull into S4 or leave as data-taxonomy dependency? | Michelle | Before S4 planning | Medium — taxonomy blocker still open |
| Confirm OTEP-390 ringfencing stays in S5, not S4 | Michelle | Before S4 planning | Low — already assigned S5 |
| Check capacity: can Hao Eng support OTEP-390 data modelling work in S5? | Michelle | Before S5 planning | Low |

---

## Key Insights

**OTEP-192 has a live architecture risk.**
Léo asked on 2026-06-05 how rigorous the "skip invalid records" rule should be — specifically whether competencies should be handled more leniently. That question is still open. Pow Hwee is now flagging the same issue from a different angle: the pipeline is inserting competencies directly into the DB, which may conflict with how Core Competency architecture works. These two threads (Léo's skip logic question + Pow Hwee's architecture flag) need to be resolved together before OTEP-192 can close cleanly.

**Two designed features have no Jira tickets at all.**
Keyword search and sorting are both in Figma but neither has a ticket. These would be invisible at S4 planning and could silently drop from scope.

**OTEP-336 (matched competencies) is blocked until the competency API spike runs.**
The spike needs to involve Pathfinder, Core, and Intel/AI squads. This is a cross-squad coordination item — it won't move without explicit scheduling.

**OTEP-289 (filter by function) is a known blocker with an open question still on Pow Hwee's comment from May.**
Pow Hwee asked Michelle in May to clarify scope and timebox. Michelle updated the ACs on 2026-05-19, but the taxonomy data source is still being finalised — making S4 pull-in risky unless the mapping work is done.

---

## Open Questions

- [ ] OTEP-192: How should competency mismatches be handled — hard-skip or lenient? **Owner: Michelle + Léo** — resolve before S4 starts
- [ ] OTEP-192: Does the ingestion pipeline need to be refactored to align with Core Competency architecture before launch? **Owner: Michelle + Pow Hwee** — flag if this is a sprint 4 story or a post-launch item
- [ ] OTEP-289/318: Is the Job Family/Function taxonomy finalised enough to pull filter stories into S4? **Owner: Michelle** — check with data/taxonomy owner
- [ ] OTEP-403: What exactly is in scope for OTG data import hardening? Needs ACs before grooming. **Owner: Michelle**
- [ ] Competency spike: Who schedules the cross-squad alignment? Which squad owns the spike? **Owner: Michelle to initiate**

---

## What's Not in Sprint 4 (Confirmed or Recommended Out)

| Ticket | Status | Rationale |
|---|---|---|
| OTEP-390 (Ringfencing detail states) | S5 | Already assigned to Sprint 5. Pow Hwee suggests Hao Eng support for data modelling. |
| OTEP-336 (Matched competencies) | Backlog — blocked | Needs competency spike first. Not S4-ready. |
| OTEP-289 (Filter by function) | Backlog | Taxonomy source still being finalised — risky to pull in. |
| OTEP-318 (Filter by category) | Backlog — empty | No description. Not S4-ready. |

---

## Context Notes

- OTEP-192 is In Progress (Léo Milbor), in Pathfinder Sprint 3. This is carry-over scope being reviewed for S4.
- OTEP-281 is in Backlog with a scoped description but no assignee — ready to groom.
- OTEP-336's dependency on a competency spike was not previously documented in the ticket — this is net-new information from Pow Hwee's review.
- OTEP-390 has strong ACs and is well-scoped for S5. The Hao Eng suggestion is for data modelling support only, not a re-assignment.
