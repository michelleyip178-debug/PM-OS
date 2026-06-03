# Daily PM Focus

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.
> Note: for the PM-OS daily plan (calendar + stakeholder context), use the `/daily-plan` skill instead. This command is the OTEP delivery-side standup orientation.

Orient in 15 minutes, ready to unblock in standup.

**Read first:** `inbox.md`, `00-hub/sprint-status.md`, `00-hub/open-items.md`, `00-hub/risks.md`, `00-hub/tasks-active.md`

---

## Steps

### Step 1 — Load live data

- **Calendar:** Fetch today's + tomorrow's events via Google Calendar MCP. Cross-reference attendees with `06-skills-and-decisions/stakeholders/`. If unavailable, note and skip.
- **Recent activity:** `git log --since="yesterday" --name-only --pretty=format:""` — files changed in last 24–48h.
- **Sprint state:** Run `bash 03-stories/scripts/jira-sprint.sh` — extract sprint name, dates, goal, status counts, WIP risks (multiple In Progress per person), late-sprint Backlog items.
- **Story sync:** Run `python3 03-stories/scripts/jira-sync.py` — refreshes `03-stories/jira-sync/Sprint-*/` files and writes `.changes.md`.
- **Story detail:** Read per-issue files from `03-stories/jira-sync/Sprint-*/`. For each: key, title, status, assignee, points. Flag: no assignee, no points, Backlog in sprint week 2.
- If any script fails, note it and continue on local context only.

### Step 2 — Ceremony check

Read `04-ceremonies/sprint-prep-rhythm.md` "This Sprint" checklist against today's date.
If today has a ceremony entry: note prep steps + timing, append to `inbox.md ## Raw Capture` under `### Ceremony Prep` (skip if already there).
Mention tomorrow's ceremony as a heads-up only — don't write to inbox.

### Step 3 — PM-owned blockers *(most important)*

From `00-hub/open-items.md`: Michelle-owned items still 🔴 Open, especially overdue.
From `00-hub/tasks-active.md` Waiting On: rows where Michelle owns the next move, or stale >3 days.
If none: "No PM-owned blockers today."

### Step 4 — Standup lens

Based on Steps 1 + 3: 2–3 bullets on what to actively listen for in standup.
Focus on: engineers blocked on a PM decision or AC clarification; WIP overload risks; open items from `00-hub/risks.md` that could surface as blockers today.

### Step 5 — Sprint-blocking open items

From `00-hub/open-items.md`: items (any owner) that are overdue, due today/tomorrow, or blocking an In Progress story.

### Step 6 — Top 3 focus

3 specific PM moves based on sprint position, PM-owned blockers, and ceremony timing.
Name the person, decision, or deadline. Frame as what to drive — not what to do.

### Step 7 — Growth nudge

One sentence connecting today's work to one of Michelle's three growth areas:
outcomes thinking / stakeholder influence / roadmapping and prioritisation.

---

## Output

Save as: `00-hub/outputs/daily-YYYY-MM-DD.md`

---

## Daily Focus — [Date]

### Today's Schedule
- [time] — [meeting] — [one thing to drive or bring]

### Tomorrow: [day]
- [time] — [meeting] — [what to watch for]

### Ceremony
[Name + prep steps, or "None today"] | Tomorrow: [heads-up if relevant]

### Standup Lens
- [story/person + what to watch for]
- [blocker that could surface]
- [decision needing same-day resolution]

### Recently Completed
[From git log — concrete deliverables only, or "Nothing in last 24h"]

### Sprint Pulse
- **Sprint:** [name] ([start → end]) · **Goal:** [goal]
- **Status:** In Progress [n] · Done [n] · Backlog [n]
- **Flags:** [WIP overload / late-sprint backlog items / None]

### Sprint Stories
| Key | Title | Status | Assignee | Pts | Flag |
|---|---|---|---|---|---|

**Summaries** (In Progress + flagged only):
- **[KEY]:** [2-sentence description]

### Story Changes Since Last Sync
[Verbatim from `.changes.md`, or "No story changes since last sync"]

### PM-Owned Blockers
| Item | Who's waiting | Overdue since | Action |
|---|---|---|---|

### Open Items Needing Attention
| # | Item | Owner | Due | Blocks |
|---|---|---|---|---|

### Active Tasks
**In Progress** — [task + status note]

**Up Next** — [task, priority order]

**Waiting On** — [item / waiting for / since / next action]

**Stale** — [flag anything outdated or resolved]

### Top 3 Focus
1. [Person + decision + deadline]
2. [Specific PM move]
3. [Specific PM move]

### Growth Nudge
[One sentence]
