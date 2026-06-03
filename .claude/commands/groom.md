# /groom — Pre-Grooming Brief

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.

Read these files before generating output:
- `00-hub/sprint-status.md` — sprint goal and committed stories
- `04-ceremonies/sprint-checklists.md` — per-story grooming readiness and DoR blockers
- `04-ceremonies/sprint-allocation.md` — which stories are in the target sprint
- `03-stories/story-id-map.md` — ID reconciliation
- `00-hub/open-items.md` — active blockers with owners
- `06-skills-and-decisions/decisions-log.md` — recent scope decisions
- The story files for stories in the target sprint (in `03-stories/otep-stories/`; check sprint-checklists.md for links)

Run these analyses in sequence and compile the results into a single grooming brief:

1. **Story readiness** — For each user story in the target sprint, assess readiness:
   - Has a clear user persona
   - Has a defined outcome (not just a feature)
   - Has acceptance criteria with testable verbs
   - Has no unresolved dependencies or open items blocking it
   - Design assets are finalised (check DoR blockers in sprint-checklists.md)
   Rate each story as: Ready / Needs work / Blocked. For Needs work or Blocked, say what's missing in one line.

2. **Gaps and ambiguities** — Scan ACs and edge cases for words like "may", "could", "TBD", or "to be confirmed". Cross-reference open-items.md. List each gap with source and a one-line explanation of why it's a risk.

3. **Dependencies** — Identify dependencies between stories (check the Depends on / Dependencies fields in story files). For each: Story A depends on Story B for [reason], and whether it's hard or soft.

4. **Edge cases** — For each story, flag potential edge cases not covered in acceptance criteria (empty states, permissions, failure states, null fields, mobile vs desktop). Cross-reference the Risks line on each story.

Format the output as a grooming brief I can bring into story shaping / backlog prep. This is PM-side prep before grooming — the team sizes at the session.

Save as: `/Users/michelleyip/Documents/PM-OS/outputs/analyses/grooming-brief-YYYY-MM-DD-groom.md`
