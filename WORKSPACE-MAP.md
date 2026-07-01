# Workspace Map: PM-OS vs PM-skills-ALL-1

Two workspaces, two jobs. This file is the routing guide for both me (the copilot) and Michelle.

## The one-line distinction

- **PM-OS** = the thinking/writing engine. Organized by PM *activity* (skills + outputs by type).
- **PM-skills-ALL-1** = the project delivery system. Organized by *delivery stage* (`00`–`06`, discovery → PRD → stories → ceremonies).

## The simplest rule

> Talking to Claude / generating something? → **PM-OS**
> Tracking or delivering OTEP work? → **PM-skills-ALL-1**

## When to use which

| Task | Workspace | Location |
|---|---|---|
| Running a `/skill` (daily-plan, meeting-notes, status-update, prd-draft) | PM-OS | `.claude/skills/` |
| Drafting any new doc with AI help | PM-OS | `outputs/` |
| Strategy thinking, frameworks, impact sizing | PM-OS | `context-library/strategy/` |
| Stakeholder profiles, writing style, company context | PM-OS | `context-library/` |
| Sprint ceremonies, planning, retros | PM-skills | `04-ceremonies/` |
| Jira tickets / story status | PM-skills | `03-stories/jira-sync/` |
| Active tasks, backlog, risks, open items | PM-skills | `00-hub/` |
| Detailed PRDs feeding engineering | PM-skills | `02-prd/` |
| Discovery, personas, experiments | PM-skills | `01-discovery/` |

## The overlap trap (read this)

A few things live in BOTH, at different altitudes. Don't treat them as duplicates.

| Content | PM-skills (detailed/delivery) | PM-OS (summary/copilot) |
|---|---|---|
| PRDs | `02-prd/` full spec + acceptance criteria + Jira | `context-library/prds/` knowledge card |
| Decisions | `outputs/decisions/2026-05-29-W22-decisions-log.md` | `outputs/decisions/` decision docs |
| Meetings | `04-ceremonies/` | `outputs/meeting-notes/` |

**Flow is one-directional:** draft/think in PM-OS → finalize into PM-skills for delivery.
When the PM-skills version changes, refresh the PM-OS summary so the copilot isn't reading stale context.

> Drift watch: the PM-OS PRD cards can fall behind the PM-skills specs (e.g. POCDEX card was newer than its spec on 2026-06-02). Sync the summary whenever the spec changes.
