---
name: weekly-plan
description: Set next week's priorities
---

## Purpose

Plan your week forward with clear priorities tied to quarterly goals. Sets the foundation for effective daily planning and ensures strategic alignment.

## Usage

- `/weekly-plan` - Plan upcoming week (or current week if Monday)
- `/weekly-plan next` - Plan next week (when running on Friday)

---

## Context Routing

**Check these files first:**
1. `context-library/strategy/` - Quarter OKRs, North Star, strategic pillars
2. `outputs/weekly-reviews/` - Last week's review (if exists)
3. `outputs/prds/` - Active PRDs and their stages
4. `context-library/launches/` - Upcoming launches
5. `outputs/weekly-plans/` - Previous weekly plans (for pattern analysis)

**MCP Queries (if available):**
- **Calendar MCP** - Next week's meetings
- **Linear/Jira MCP** - Backlog and upcoming tasks
- **Analytics MCP** - Metrics trends (inform priorities)

**Fallback:** File-based planning using strategy docs and PRD pipeline.

---

## Workflow

### Step 1: Determine Target Week

1. **Calculate target week:**
   - Default: Upcoming week (Monday-Friday)
   - If run on Monday: Current week
   - If user specified "next": Next week

2. **Check if week already planned:**
   - Look for `outputs/weekly-plans/YYYY-WXX-weekly-plan.md`
   - If exists: Ask "Week already planned. Update it or create new version?"

---

### Step 2: Review Last Week (If Available)

Check for `outputs/weekly-reviews/[last-week]-weekly-review.md`:

If exists, extract:
- **Carried over items** - What didn't get done?
- **Learnings** - What worked/didn't work?
- **Momentum** - Which initiatives are advancing?
- **Stalled items** - What needs unblocking?

If doesn't exist:
- Note: "Last week wasn't reviewed. Proceeding with forward planning only."
- Suggest: "After this week, run `/weekly-review` to build the habit."

---

### Step 3: Strategic Context Gathering

**A. Quarter Goals & North Star:**

Read `context-library/strategy/`:
- Current quarter OKRs
- North Star metric and target
- Strategic pillars (usually 3-4 themes)

Extract:
- Which goals are on track / behind / ahead?
- Which pillar needs more attention this week?
- Any upcoming deadlines (end of quarter, board meeting, etc.)?

---

**B. Active PRD Pipeline:**

Scan `outputs/prds/` and `context-library/prds/`:

For each active PRD:
- Current stage
- Next milestone
- Blockers (if any)
- Stakeholders involved

Group PRDs by stage:
- **Team Kickoff** - Need to plan/scope
- **Planning Review** - Need to prioritize
- **XFN Kickoff** - Need alignment
- **Solution Review** - Need detailed design
- **Launch Readiness** - Need to ship
- **Impact Review** - Need to analyze results

Identify: Which PRDs need to advance this week?

---

**C. Upcoming Launches:**

Check `context-library/launches/`:
- Features launching this week
- Pre-launch checklists due
- Post-launch monitoring needed

---

**D. Calendar Preview (If MCP Available):**

Query Calendar MCP for next week:
```
Get all events for [week start] to [week end]
```

Extract:
- Key meetings (stakeholder syncs, reviews, planning sessions)
- All-hands/team meetings (fixed commitments)
- Open time blocks (capacity for deep work)

Calculate:
- Meeting load (hours in meetings)
- Deep work capacity (hours available for focused work)
- Context switch frequency

If heavy meeting week (20+ hours):
- Limit priorities to 2 instead of 3
- Flag: "Light on execution capacity this week"

---

### Step 4: Priority Setting

**Framework: Top 3 Priorities**

Use this prioritization logic:

1. **Priority 1 (Most Important):**
   - Directly advances a quarter goal that's behind
   - OR: Critical blocker removal
   - OR: Upcoming launch with deadline

2. **Priority 2 (High Impact):**
   - Advances quarter goal that's on track
   - OR: Strategic initiative that supports North Star
   - OR: Stakeholder commitment with firm deadline

3. **Priority 3 (Meaningful Progress):**
   - Supports strategic pillar
   - OR: Advances PRD through pipeline
   - OR: Foundation for future work

**Constraints:**
- Each priority should take 6-10 hours of work
- Priorities should span different strategic pillars (balance)
- At least one priority should be proactive (not reactive)

**Validation Questions:**
- If I only do these 3 things this week, will it be a successful week?
- Do these priorities advance our quarter goals?
- Am I over-committed given meeting load?

---

### Step 5: Task Breakdown (Optional)

For each priority, identify 2-4 key tasks:

**Priority 1: [Title]**
- [ ] Task 1 (Est: X hours)
- [ ] Task 2 (Est: Y hours)
- [ ] Task 3 (Est: Z hours)

Total estimate: Should match priority weight (6-10 hours)

This helps with:
- Reality check on scope
- Daily planning (break priorities into daily chunks)
- Progress tracking

---

### Step 6: Generate Weekly Plan

Create file: `outputs/weekly-plans/YYYY-WXX-weekly-plan.md`

**Template:**

```markdown
---
week: YYYY-WXX
week_start: YYYY-MM-DD
week_end: YYYY-MM-DD
quarter: Q[X] YYYY
---

# Weekly Plan - Week of [Month] [DD], [YYYY]

## TL;DR

- **Top 3:** [One-line summary of each priority]
- **Meeting load:** [X] hours ([Light/Medium/Heavy])
- **Key milestone:** [Most important thing to ship/decide/align this week]

---

## Strategic Context

**Quarter Goal:** [Primary goal for this quarter]
**North Star Progress:** [Current value] / [Target] ([%] to goal)

**This Week's Focus:**
[1-2 sentences explaining why these priorities matter now]

---

## Top 3 Priorities

### Priority 1: [Title] ⭐ Most Important

**Why this matters:**
- Advances: [Quarter Goal / Strategic Pillar]
- Impact: [What changes if we complete this]
- Risk if not done: [Consequence of deferring]

**Success looks like:**
- [Specific, measurable outcome]

**Key tasks:**
- [ ] [Task 1] (Est: X hours) - [Why/who]
- [ ] [Task 2] (Est: Y hours) - [Why/who]
- [ ] [Task 3] (Est: Z hours) - [Why/who]

**Dependencies:**
- Needs from: [Person/team] - [What]
- Blocks: [What this unblocks]

**Linked to:**
- PRD: [Link if applicable]
- Decision doc: [Link if applicable]

---

### Priority 2: [Title]

**Why this matters:**
- Advances: [Quarter Goal / Strategic Pillar]
- Impact: [What changes]

**Success looks like:**
- [Specific outcome]

**Key tasks:**
- [ ] [Task 1]
- [ ] [Task 2]
- [ ] [Task 3]

**Dependencies:**
- [List]

**Linked to:**
- [Relevant docs]

---

### Priority 3: [Title]

**Why this matters:**
- Advances: [Quarter Goal / Strategic Pillar]
- Impact: [What changes]

**Success looks like:**
- [Specific outcome]

**Key tasks:**
- [ ] [Task 1]
- [ ] [Task 2]

**Dependencies:**
- [List]

**Linked to:**
- [Relevant docs]

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| [Name] | Team Kickoff | Planning Review | Complete scoping, get estimates |
| [Name] | Solution Review | Launch Readiness | Final stakeholder sign-off |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | [Title] | [Objective] | [Y/N - Link to prep doc] |
| Tue | [Title] | [Objective] | [Y/N] |
| Wed | [Title] | [Objective] | [Y/N] |
| Thu | [Title] | [Objective] | [Y/N] |
| Fri | [Title] | [Objective] | [Y/N] |

**Meeting load:** [X] hours / ~40 hour week = [Y%]
**Deep work capacity:** [Z] hours available

---

## Strategic Pillar Balance

[If your strategy has defined pillars, show allocation]

| Pillar | This Week's Time | Last Week | Trend |
|--------|------------------|-----------|-------|
| [Pillar 1] | 40% | 30% | ↑ Increasing |
| [Pillar 2] | 30% | 40% | ↓ Decreasing |
| [Pillar 3] | 30% | 30% | → Steady |

**Balance check:**
- [Commentary on whether allocation matches strategy]

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** [Dependency on X person who's on vacation]
  - **Mitigation:** [Async update or defer to next week]

- **Risk:** [Heavy meeting load limits execution time]
  - **Mitigation:** [Decline non-essential meetings or defer Priority 3]

**Capacity concerns:**
- [If overcommitted, note which priority to defer]

---

## Carry-Over from Last Week

[If last week's review exists]

**Incomplete items:**
- [ ] [Item from last week] - [Why it carried over]

**Learnings applied:**
- [Pattern from last week] → [How we're adjusting this week]

---

## Success Metrics

**How we'll know this week was successful:**
1. [Measurable outcome for Priority 1]
2. [Measurable outcome for Priority 2]
3. [Measurable outcome for Priority 3]

**Leading indicators to track:**
- [Metric to check mid-week]
- [Stakeholder feedback to gather]

---

*Generated: [Timestamp]*
*Next: Run `/daily-plan` each morning to execute against this plan*
```

---

### Step 6b: Generate Skills Checklist

After setting the strategic skill, generate a **Skills Checklist** for the week. This is a curated list of skills the PM should run — beyond daily cadence — to prevent delivery gaps and keep the sprint healthy.

**Logic for building the checklist:**

Scan the week's context and map it to skills using this table. Include a skill if its trigger condition is true. Skip it if there's no relevant context this week.

| Trigger condition | Skill | Criticality |
|---|---|---|
| Sprint planning ceremony this week | `/sprint-check` (pre-planning brief) | ⚠️ Critical |
| Grooming session this week | `/grooming-close` (after grooming ends) | ⚠️ Critical |
| Sprint closes this week | `/stale-check` (end of sprint sweep) | ⚠️ Critical |
| Sprint closes this week | `/feature-results` (capture outcomes) | High |
| Any stories going In Progress this week | `/feature-metrics` (confirm metrics defined) | High |
| New stories being drafted or groomed | `/write-stories` or `/p-write-prd` | Medium |
| Stakeholder review or BO session this week | `/status-update` or `/slack-message` | High |
| SteerCo or leadership presentation | `/decision-doc` | High |
| Discovery work or user research happening | `/user-research-synthesis` or `/p-interview` | Medium |
| Competitor mentioned in meetings or Slack | `/competitor-analysis` | Medium |
| Launch or go-live this week | `/launch-checklist` | ⚠️ Critical |
| Post-launch (feature shipped last sprint) | `/activation-analysis` or `/feature-results` | High |
| OKR or roadmap review this week | `/define-north-star` or `/metrics-framework` | Medium |
| Prototype or design review this week | `/prototype-feedback` or `/napkin-sketch` | Medium |
| Impact of a feature unknown / sizing needed | `/impact-sizing` | Medium |
| A/B test running or being decided | `/experiment-decision` or `/analyze-test` | Medium |
| End of week (always) | `/weekly-review` (Friday) | ⚠️ Critical |
| End of every day (always) | `/stale-check` | High |

**Rules:**
- Always include `/weekly-review` on Friday and `/stale-check` daily — these are non-negotiable.
- Cap the list at 8 skills. If more than 8 triggers fire, include only the highest-criticality ones.
- Group by day or trigger (e.g. "Before Tuesday grooming", "Thursday pre-planning", "Friday EOD").
- Annotate ⚠️ Critical items clearly — these are the ones where skipping creates a delivery risk.
- Do not list `/daily-plan` or `/sprint-pulse` — those are daily defaults, not weekly additions.

---

### Step 7: Output & Next Actions

1. **Save weekly plan file**

2. **Create/update task backlog (if Linear/Jira MCP available):**
   - Offer: "Want me to create Linear tasks for each key task?"
   - If yes: Use `/create-tickets` to convert tasks

3. **Display summary:**
   - "Week planned! Top 3: [P1], [P2], [P3]"
   - If heavy meetings: "Heads up: [X] hours of meetings. I've kept priorities light."
   - If carries over from last week: "[Y] items carried over - addressed in Priority [Z]"

4. **Offer next steps:**
   - "Ready to start the week? Run `/daily-plan` tomorrow morning."
   - "Want to share this plan with your team? I can format it for Slack."
   - If no stakeholder profiles: "For richer context, add stakeholder profiles."

---

## MCP Graceful Degradation

**If Calendar MCP not connected:**
- Ask: "What key meetings do you have next week?"
- Note: "I can give better planning with calendar access. Run `/connect-mcps connect to google-calendar`"

**If Linear/Jira MCP not connected:**
- Manual task entry: "What key tasks need to happen for each priority?"
- Offer to create tasks later once MCP connected

**If strategy docs don't exist:**
- Ask: "What are your top quarterly goals?"
- Suggest: "Fill out `context-library/strategy/OKRs.md` for better alignment"

---

## Tips for Best Results

**When to run:**
- **Best time:** Friday afternoon (plan while week is fresh)
- **Alternative:** Monday morning (start week with clarity)
- **Avoid:** Mid-week (loses strategic perspective)

**What makes a good priority:**
- ✅ Specific (not "work on X" but "complete Y for X")
- ✅ Measurable (you'll know when it's done)
- ✅ High-impact (moves a key metric or goal)
- ✅ Achievable (realistic given meeting load)
- ❌ Too vague ("improve product" → What exactly?)
- ❌ Too many (more than 3 = lack of focus)

**Common mistakes:**
- Setting 5-6 priorities (you'll get overwhelmed)
- All reactive priorities (no proactive strategy work)
- Ignoring meeting load (planning 30 hours of work with 25 hours of meetings)
- No connection to quarter goals (busy but not impactful)

---

## Integration with Other Skills

**Before `/weekly-plan`:**
- `/weekly-review` - Review last week first (if Friday planning)
- `/quarter-plan` - (If exists) Ensure week aligns with quarter

**After `/weekly-plan`:**
- `/daily-plan` - Break week down into daily execution
- `/create-tickets` - Convert tasks to Linear/Jira
- `/slack-message` - Share plan with team

**Parallel use:**
- `/prd-draft` - Priorities might include PRD work
- `/impact-sizing` - Validate priorities are high-impact

---

## Related Skills

**Before this:**
- `/weekly-review` - Reflect on last week
- `/mcp` - Connect to Calendar, Linear for richer planning

**After this:**
- `/daily-plan` - Execute the weekly plan day by day
- `/create-tickets` - Track priorities in Linear/Jira
- `/weekly-review` - Close the loop at end of week

**Complements:**
- `/prd-draft` - Weekly priorities often include PRD milestones
- `/stakeholder-update` - Share weekly plan with leadership

---

## Strategic Skill Prompt (include in every weekly plan output)

At the end of every weekly plan, add a **This Week's Strategic Skill** block. Pick the one skill that best matches the sprint phase and week's context. One skill only — not a menu.

**Selection logic:**

| If this week has... | Suggest |
|---|---|
| Sprint planning ceremony | `/impact-sizing` — size the top stories before the room commits |
| Grooming prep session | `/journey-map` or `/competitor-analysis` — give the team context before they scope |
| Mid-sprint review | `/feature-metrics` — are success metrics defined for what's In Progress? |
| Sprint close / retro | `/feature-results` — capture sprint outcomes while fresh |
| SteerCo or BO strategy session | `/write-prod-strategy` or `/define-north-star` |
| Free week (no major ceremony) | Pick from dormant skills: `/impact-sizing`, `/experiment-decision`, `/metrics-framework` |
| Post-pilot launch week | `/activation-analysis` |

**Output block to append to every weekly plan file:**

```markdown
## This Week's Strategic Skill

**Suggested:** `/[skill-name]`

**Why this week:** [One sentence — what's happening this week that makes this skill timely]

**When to run:** [Specific moment — e.g. "before Thursday grooming", "after Friday retro"]

**What you'll get:** [One sentence on the output]

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, ceremonies, and open risks. Run these to keep delivery smooth and prevent gaps from accumulating.*

| When | Skill | Why |
|------|-------|-----|
| [Day / trigger] | `/[skill]` | [One-line reason tied to this week's context] |
| [Day / trigger] | `/[skill]` | [One-line reason] |
| [Day / trigger] | `/[skill]` | [One-line reason] |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — don't repeat them here unless there's a specific reason to call them out this week.
- Flag skills as `⚠️ Critical` if skipping them creates a delivery risk (e.g. grooming without `/grooming-close`, sprint end without `/stale-check`).
- This list is not exhaustive — it's the minimum set to prevent gaps given this week's specific context.
```

---

## Output Quality Self-Check

Before presenting output to the PM, verify:

- [ ] **Context was checked:** Reviewed `context-library/strategy/` for quarter OKRs, `outputs/prds/` for active PRDs, and `context-library/meetings/` for upcoming commitments
- [ ] **Priorities aligned with strategic goals:** Each of the top 3 priorities explicitly references which quarter goal, OKR, or strategic pillar it advances
- [ ] **LNO classification applied:** Key tasks are tagged as Leverage, Neutral, or Overhead to ensure the week is weighted toward high-leverage work
- [ ] **Dependencies and blockers identified:** Each priority lists what it depends on (people, decisions, deliverables) and any known blockers with mitigation plans
- [ ] **Carry-over items from last week addressed:** If `outputs/weekly-reviews/` or `outputs/weekly-plans/` contain incomplete items from last week, they are explicitly acknowledged as carried over, deferred, or dropped with reasoning
- [ ] **Strategic skill block included:** One skill suggestion with timing and rationale appended to the plan
- [ ] **Skills checklist generated:** Checklist of skills to run this week based on sprint phase and ceremonies — includes at least `/weekly-review` (Friday) and `/stale-check` (daily); ⚠️ Critical items clearly flagged
