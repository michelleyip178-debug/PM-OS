# Backlog Grooming Prep

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.

Prepare Michelle for the upcoming squad grooming session.
Rama facilitates — Michelle leads content.

Read `/Users/michelleyip/Documents/PM-skills-ALL-1/.claude/CLAUDE.md`, `00-hub/sprint-status.md`, and the backlog file passed as argument before generating output.

---

## Steps

### Step 1 — Parse backlog file
Extract all user stories. For each, identify:
- Story ID and title
- Acceptance criteria (present or missing)
- Design status (if noted)
- Dependencies and open items

### Step 2 — Score grooming readiness
| Story ID | Title | Story Format | AC Written | AC Language | Design Status | Dependencies | Open Items | Ready? |
|---|---|---|---|---|---|---|---|---|

Scoring: ✅ confirmed | ⚠️ incomplete | ❌ missing

**AC Language check:** For each AC, ask: *"Is this describing what the user sees or can do — or what the system does internally?"*

Flag mechanism-language. Watch for these patterns:
- "the system will / shall..."
- "on click, the API calls..."
- "the field will be populated by..."
- "the backend returns..."
- "the component renders..."

These belong in engineering notes, not ACs. Rewrite toward observable user behaviour:
- ❌ "The API fetches opportunities filtered by type" → ✅ "Officer sees only opportunities matching the selected type"
- ❌ "The system sets `closing_date` to hide the card" → ✅ "Opportunities past their closing date no longer appear in the listing"

### Step 3 — Flag risk areas
Stories Pow Hwee is likely to probe. Cross-check:
- Unconfirmed OTG fields from CLAUDE.md
- ACs with conflicting rules (two ACs defining different behaviour for the same state)
- ACs where mechanism-language slipped through Step 2

Format as:
> ⚠️ **[Story ID]** — [Risk] → [Suggested action]

**Pow Hwee's refinement pattern to pre-empt:**
He will catch (1) AC rule conflicts, (2) mechanism-language in ACs, and (3) tickets that can be folded or reframed. Fix these before grooming — don't discover them in the room.

### Step 4 — Recommend grooming order
Prioritise:
1. Sprint-ready stories (all ✅)
2. Stories with external dependencies needing early resolution
3. Stories tied to the sprint goal

### Step 5 — Generate briefing

---

## Grooming Briefing — [Date]

### Sprint Goal
[From 00-hub/sprint-status.md or flag if unclear]

### Grooming Order (recommended)
[Ordered list with readiness status]

### Open Items — Assign an Owner in the Session
| Open Item | Suggested Owner | Needed By |
|---|---|---|

### R1 Deflection List
Ready responses for out-of-scope topics that will come up:
- [topic] → "Logging as R1 — great idea for post-MVP"

### Pow Hwee Will Probably Ask...
Pre-empted tech questions so Michelle isn't caught off guard:
- [question / edge case]

> **Self-check before closing:** Have you reviewed every AC for mechanism-language? Have you checked for conflicting rules across ACs in the same story? If Pow Hwee raises either in the room, that's a prep gap — catch it here first.

---

Save as: `/Users/michelleyip/Documents/PM-OS/outputs/analyses/grooming-brief-YYYY-MM-DD.md`
