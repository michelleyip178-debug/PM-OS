# Sprint 2 Internal Demo + Retro

**Date:** Fri 29 May 2026
**Sprint:** S02 — Mon 18 May to Fri 29 May
**Attendees:** Michelle (PM), Léo, Thomas, squad team
**Type:** Sprint review + retrospective
**Next sprint starts:** Mon 01 Jun 2026 (S03)

---

## Summary

Sprint 2 was a high-output sprint with good technical execution and team culture. The team is delivering fast and staying architecturally clean. The friction points are typical of a team that's maturing: external dependencies catching us off-guard, a fuzzy PM-to-engineer handoff in story prep, and no formal system for tracking tech debt. These are solvable with lightweight process guardrails, not more meetings.

---

## What Went Well

- **Velocity jumped significantly** — more shipped on both frontend and backend compared to Sprint 1
- **Short, efficient meetings** — team appreciates keeping ceremonies lean and not bureaucratic
- **Architecture adherence** — team stayed aligned with agreed standards; technical clarifications landed well
- **Open feedback culture** — retro had honest, direct input from multiple team members

---

## What Needs Work

**1. Cross-squad alignment is slipping**
- Difficulty syncing with the other squad mid-sprint; some work gaps only surfaced late
- DB schema and seeding strategy felt rushed — not enough shared understanding upfront

**2. Dependency surprises**
- Unknown dependencies from Admin work appeared mid-sprint and blocked progress
- We're not catching these early enough

**3. Story prep is fuzzy**
- User stories have too many technical details baked in by PM side
- Engineers need earlier input into stories *before* they're finalized — the current handoff is one-directional
- Seeding approach in particular was underspecified going into the sprint

**4. No formal tech debt tracking**
- Team is anxious about tech debt accumulating without a clear home
- Backlog tickets exist, but no structure or prioritization mechanism for them
- No capacity allocation carved out for addressing it

---

## Decisions Made

1. **Process evolution is needed** — team has outgrown "just do the work" mode and needs lightweight guardrails to sustain current velocity without accumulating hidden risk

2. **Engineering should be in story prep earlier** — DOR check (see [dor-dod-guidelines.md](../../PM-skills-ALL-1/06-skills-and-decisions/dor-dod-guidelines.md)) should include an implementation assessment from engineers before a story is finalized

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Set up pre-sprint dependency check with other squad (e.g., 30-min sync before Sprint Planning to surface cross-squad dependencies) | Michelle | Before S03 Sprint Planning (Thu 05 Jun) | High |
| Add "Engineering implementation assessment" as a DoR gate — engineer signs off on story readiness before it's finalized | Michelle | Before S03 grooming (Wed 03 Jun) | High |
| Propose tech debt capacity allocation (10-20% per sprint) or dedicated label for tracking — bring to team for alignment | Michelle + team | S03 Sprint Planning (Thu 05 Jun) | Medium |
| Create a documentation artifact for dependent teams to reduce alignment friction mid-sprint | TBD (Michelle to identify right owner) | EOD Fri 06 Jun | Medium |
| Update DOR to reflect that seeding strategy and DB schema are a joint PM+Eng discussion, not a PM handoff | Michelle | Before S03 grooming (Wed 03 Jun) | High |

---

## Open Questions

- [ ] Who from the other squad should own the pre-sprint dependency sync? — @Michelle to confirm with squad lead — Before Thu 05 Jun
- [ ] Should tech debt live as a label on existing tickets, or get its own dedicated epic/bucket? — Team to decide during S03 Planning
- [ ] What documentation artifacts do dependent teams actually need? — Michelle to ask in OTEP Squad Sync

---

## Retrospective Themes at a Glance

| Theme | Status | Proposed Fix |
|-------|--------|--------------|
| Execution speed | Healthy — maintain | Keep ceremony cadence lean |
| Cross-squad alignment | Friction — fix | Pre-sprint dependency sync before each Planning |
| Tech debt | Accumulating — address | 10-20% sprint capacity or structured backlog |
| Story prep / PM-Eng handoff | Fuzzy — tighten | Engineer DoR assessment required before story is finalized |

---

## Context for Sprint 3

Sprint 3 runs Mon 01 Jun to Fri 12 Jun. Vesak Day on Tue 02 Jun takes out one dev day.

The action items above are geared to take effect *during* S03, so the tightest deadline is getting the DoR update and dependency sync format agreed before Wed 03 Jun grooming and Thu 05 Jun planning.

The tech debt discussion is a good agenda item for S03 Planning itself.

---

*Processed: 2026-05-29 | Sprint S02 retro*
