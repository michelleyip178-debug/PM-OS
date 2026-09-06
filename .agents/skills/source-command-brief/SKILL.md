---
name: "source-command-brief"
description: "Migrated source command `brief`"
---

# source-command-brief

Use this skill when the user asks to run the migrated source command `brief`.

## Command Template

# /brief — Stakeholder Brief

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.

Read these files before generating output:
- `00-hub/sprint-status.md` — sprint goal, dates, committed stories
- `00-hub/open-items.md` — unresolved items with owners and deadlines
- `06-skills-and-decisions/decisions-log.md` — recent scope and design decisions
- `00-hub/risks.md` — active blockers and dependencies
- `04-ceremonies/sprint-allocation.md` — sprint scope and roadmap
- `04-ceremonies/sprint-checklists.md` — story readiness
- `00-hub/tasks-active.md` — current work state
- `06-skills-and-decisions/stakeholders/` — profiles of the target audience

Ask me first: Who is this brief for?
- Mark (PS/DS steering) — executive, non-technical, needs decision context
- Jacky / Xian Zhang (business owners) — outcome-focused, plain language
- Adrian (architecture / director) — strategic narrative, risks and rationale
- Pow Hwee (tech lead) — technical implications, constraints, open questions
- Amber (designers) — UX requirements, constraints, open design questions

Then based on the audience, read the relevant files and produce:

**For Mark:**
- Current state of Epic 4 in 2-3 sentences
- Key decisions made since last update
- What's being requested from leadership (decisions, sign-offs, resources)
- Risks or blockers worth escalating
- Max 250 words, spoken not read

**For Jacky / Xian Zhang:**
- Progress in plain business language
- Points needing their input or sign-off
- Requirements from them that may have evolved
- 2-3 questions to ask them

**For Adrian:**
- Strategic rationale for Epic 4
- Key design decisions and why
- Expected outcomes and success metrics
- Risks and how they're being managed
- ~200 words, assured and strategic tone

**For Pow Hwee:**
- Requirements with architectural implications
- Technical constraints mentioned in specs
- Technically risky or underspecified requirements
- Open technical questions unresolved in specs

**For Amber:**
- Key user journeys to cover in review
- UX requirements explicitly in specs
- Known constraints (technical, policy, accessibility)
- Open questions the design review should resolve

Cite the source file for each point.
