# /sprint-check — Pre-Planning Ready Shelf Check

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.
> Requires sandbox OFF and a valid token in `03-stories/.env`.
> Run on Thursday of Week 2 — the day before sprint planning.

---

## Step 1 — Derive velocity baseline

Read `00-hub/sprint-status.md`. Find the two most recently completed sprints and note:
- Stories Done at close (count)
- Story points Done at close (if recorded; fall back to story count if not)

Compute average velocity = mean of the two sprints. Note which sprints were used and flag if one was abnormal (carry-in heavy, holiday-shortened).

---

## Step 2 — Pull the Ready shelf from Jira

Fetch all stories with the `ready-for-sprint` label that are not yet Done:

```
GET https://sgtechstack.atlassian.net/rest/api/3/search
?jql=project=OTEP AND labels="ready-for-sprint" AND status != Done AND status != Closed
&fields=summary,status,assignee,customfield_10016,labels,priority
&maxResults=50
Auth: Basic michelle_yip@psd.gov.sg:{JIRA_API_TOKEN from 03-stories/.env}
```

For each story returned, also read its local file from `03-stories/jira-sync/` if it exists — to check the Dependencies field and any open Risk lines.

---

## Step 3 — Read cross-reference files

- `04-ceremonies/sprint-allocation.md` — current sprint commitments; don't double-count stories already in the active sprint
- `00-hub/open-items.md` — blockers that might disqualify a "ready" story despite the label
- `06-skills-and-decisions/decisions-log.md` — recent scope decisions that might affect candidate priority

---

## Step 4 — Compute buffer depth

- **Shelf count:** stories with `ready-for-sprint` label, not Done, not already in active sprint
- **Shelf points:** sum of story points on those stories (0 for unpointed stories — flag them)
- **Buffer depth:** shelf points ÷ velocity (or shelf count ÷ velocity if points unavailable)
- **Status:**
  - 🟢 Healthy — ≥ 2 sprints of runway
  - 🟡 Thin — 1–2 sprints
  - 🔴 At risk — < 1 sprint

---

## Step 5 — Flag dependency traps

For each ready story, check its Dependencies field in the local story file. If a dependency story is NOT in the `ready-for-sprint` label set and is NOT Done, flag it as a dependency trap — the story looks ready but pulling it in risks a mid-sprint block.

---

## Step 6 — Flag unpointed ready stories

Any ready story with no story points (customfield_10016 is null or 0) must be flagged. It can't contribute to the buffer calculation and may surprise the team at planning.

---

## Step 7 — Generate output

Save as: `/Users/michelleyip/Documents/PM-OS/outputs/analyses/YYYY-MM-DD-WXX-sprint-check.md`

```markdown
## Sprint Check — [Date] | Pre-Planning Brief · Sprint [N+1]

### Ready Shelf
**Depth:** [n] stories · [n] points · ~[x.x] sprints of runway
**Status:** 🟢 Healthy / 🟡 Thin / 🔴 At risk
**Velocity basis:** Avg [n] points/sprint (Sprint [A]: [n]pts · Sprint [B]: [n]pts)

### Ready Stories (by priority)
| Story | Title | Points | Assignee | Dependency risk |
|-------|-------|--------|----------|----------------|
| OTEP-XXX | [title] | [n] | [name or —] | ✅ None / ⚠️ Depends on OTEP-YYY |

### Dependency Traps ([n])
| Ready story | Depends on | That story's status |
|-------------|-----------|---------------------|
| OTEP-XXX | OTEP-YYY | [status] — not ready |

### Unpointed Ready Stories ([n])
[list or "None — all ready stories are pointed"]

### Recommendation
[2–3 sentences: is the shelf healthy enough to plan from, which stories to pull first, anything to resolve before the session starts. Be direct — name specific ticket keys if there's a risk.]
```
