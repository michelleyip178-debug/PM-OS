---
name: sprint-dashboard
description: Generate a self-contained HTML sprint dashboard from live Jira data — active sprint (burndown) or next sprint (planning view)
disable-model-invocation: false
user-invocable: true
---

## Quick Start

```
/sprint-dashboard              → Active sprint dashboard (Pathfinder, default)
/sprint-dashboard next         → Next sprint planning dashboard
/sprint-dashboard core         → Active Core sprint dashboard
/sprint-dashboard --sprint ID  → Specific sprint by Jira sprint id
```

**Active sprint output:** `PM-skills-ALL-1/00-hub/sprint-dashboard.html`

**Next sprint output:** `PM-skills-ALL-1/00-hub/next-sprint-dashboard.html`

**Burndown CSV:** `00-hub/sprint-burndown-{sprint_id}.csv` — one row appended per active sprint run.

---

## Steps

### Step 1 — Determine mode and board

Check `$ARGUMENTS`:
- Empty or "pathfinder" → **active** sprint, board 12541
- "next" → **next** sprint planning view, board 12541
- "core" → **active** Core sprint, board 13640
- "core next" → **next** Core sprint, board 13640
- `--sprint XXXXX` → specific sprint id (active mode)

### Step 2 — Run the generator

**Sandbox must be OFF** — the Atlassian proxy 502s from inside the sandbox.

```bash
cd /Users/michelleyip/Documents/PM-skills-ALL-1/03-stories/scripts

# Active sprint (Pathfinder):
python3 sprint-dashboard.py

# Next sprint planning view (Pathfinder):
python3 next-sprint-dashboard.py

# Active Core sprint:
JIRA_BOARD_ID=13640 python3 sprint-dashboard.py

# Next Core sprint:
JIRA_BOARD_ID=13640 python3 next-sprint-dashboard.py

# Specific sprint by id:
python3 sprint-dashboard.py --sprint SPRINT_ID
```

Both scripts read credentials from `03-stories/.env` (JIRA_EMAIL, JIRA_API_TOKEN, JIRA_SITE).

### Step 3 — Open the dashboard

```bash
# Active sprint:
open /Users/michelleyip/Documents/PM-skills-ALL-1/00-hub/sprint-dashboard.html

# Next sprint:
open /Users/michelleyip/Documents/PM-skills-ALL-1/00-hub/next-sprint-dashboard.html
```

### Step 4 — Report back

**For active sprint**, tell the user:
- Sprint name and dates
- Total issues, done count and %, pace (ahead / on track / behind)
- In progress count, blockers flagged, burndown snapshots so far
- Path to the HTML file

**For next sprint**, tell the user:
- Sprint name, dates, days until start
- Total committed issues, readiness score (% ready)
- Unassigned count, carry-over risk count from current sprint
- Top readiness flags (what needs fixing before sprint starts)
- Path to the HTML file

Example (next sprint):
```
Planning dashboard ready: OTEP-Pathfinder Sprint 4 (2026-06-14 → 2026-06-28, starts in 2 days)
  22 issues committed · readiness 0% (needs grooming)
  13 unassigned · 22 readiness flags · 23 carry-over risks from S3
  Key flags: OTEP-406 no description, OTEP-440/441 unassigned sub-tasks
  → 00-hub/next-sprint-dashboard.html
```

---

## Burndown notes

The burndown chart builds up over time. Each run appends one row to `sprint-burndown-{sprint_id}.csv`. With only one snapshot it shows a single dot — run it daily (morning standup or end of day works well) and by mid-sprint you'll have a real trend line.

The chart shows three lines:
- **Green** = issues completed over time
- **Blue** = remaining issues
- **Dashed grey** = ideal straight-line burndown from sprint start to zero

---

## Errors

**401**: Token expired → get a new one at https://id.atlassian.com/manage-profile/security/api-tokens and update `PM-skills-ALL-1/03-stories/.env` (JIRA_API_TOKEN field).

**No active sprint**: The board has no active sprint. Use `--sprint ID` to target a specific one.

**502 / network error**: You're running in sandbox mode. This script needs sandbox OFF — sgtechstack.atlassian.net is on the allowlist but the proxy still blocks it.