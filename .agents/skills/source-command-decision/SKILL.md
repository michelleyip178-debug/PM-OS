---
name: "source-command-decision"
description: "Migrated source command `decision`"
---

# source-command-decision

Use this skill when the user asks to run the migrated source command `decision`.

## Command Template

# /decision — Decision Support

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.

Read these files before generating output:
- `06-skills-and-decisions/decisions-log.md` — all past scope, design, and prioritisation decisions
- `00-hub/open-items.md` — unresolved items and open questions
- `00-hub/risks.md` — active blockers and dependencies
- `04-ceremonies/sprint-checklists.md` — DoR blockers (often decision-gated)
- `03-stories/scoping-gaps-tracker.md` — spec gaps and R1-deferred items
- `/Users/michelleyip/Documents/PM-skills-ALL-1/.Codex/AGENTS.md` — MVP guardrails and application flow logic
- Story files in `03-stories/otep-stories/` as needed for context

Ask me first: Are you making a decision, auditing past decisions, or checking after a decision was made?

**If making a decision — Pre-decision brief:**
Ask what the decision topic is, then read the relevant files and provide:
1. What we currently know about this topic from the local files
2. What options appear to have been considered (check decisions-log.md for superseded decisions)
3. What constraints should shape the decision (technical, policy, user needs — check risks.md and MVP guardrails)
4. What is still unknown that would affect the decision (check open-items.md)
5. A suggested framing: "we need to choose between X and Y because..."

**If auditing — Decision log review:**
Read decisions-log.md and cross-reference against open-items.md:
- List decisions that may need reconfirmation (context has changed)
- Flag decisions made informally that aren't in decisions-log.md (check story files for inline decisions)
- Identify assumptions being treated as facts — statements presented as given that haven't been validated

**If post-decision check:**
Ask what decision was just made, then check:
1. Does this decision conflict with anything in decisions-log.md or MVP guardrails?
2. What existing story files, sprint-checklists, or open items need updating as a result?
3. What downstream stories or features does this affect? (check 03-stories/story-id-map.md)
4. Does anything in risks.md suggest a risk we should flag?

Be specific and cite the source file for each finding.
