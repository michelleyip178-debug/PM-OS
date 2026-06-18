# /grooming-close — Post-Grooming Ready Gate

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.
> Requires sandbox OFF and a valid token in `03-stories/.env` for Jira writes.

Run this at the end of a grooming session. It evaluates which stories discussed today now meet DoR, writes the `ready-for-sprint` label to Jira for those that pass, and reports how deep the Ready shelf is against your velocity-derived buffer target.

---

## Step 0 — Find today's groomed stories

Read today's grooming brief from `/Users/michelleyip/Documents/PM-OS/outputs/analyses/`. Look for a file matching `YYYY-MM-DD-*groom*.md` where YYYY-MM-DD is today's date. If more than one file matches, use the most recently modified.

Extract the list of story IDs that appear in that brief. These are the stories to evaluate. If no grooming brief exists for today, stop and say: "No grooming brief found for today. Run /groom or /groom-prep first, or name the story IDs you want to evaluate."

---

## Step 1 — Read context files

- `04-ceremonies/sprint-checklists.md` — current DoR status per story
- `00-hub/open-items.md` — active blockers with owners and needed-by dates
- `06-skills-and-decisions/decisions-log.md` — recent scope decisions (to confirm a blocker isn't still open)
- The individual story file for each groomed story (in `03-stories/jira-sync/` — find by ticket key)

---

## Step 2 — Evaluate DoR for each groomed story

For each story from Step 0, check all six DoR gates:

1. **ACs written** — Acceptance Criteria section exists and is not "TBC" or empty
2. **Observable language** — ACs describe what the user sees/does, not how the system works internally (flag mechanism-language: "the system will fetch", "API calls", "the backend will")
3. **Subtasks listed** — at least one subtask exists in the story file or Jira
4. **Design confirmed** — design status is not "pending" or "TBD" (check the story file's Design field)
5. **No blocking open items** — cross-check open-items.md: no open item referencing this story ID with a needed-by date that has passed or no owner
6. **No unresolved dependencies** — if the story lists a dependency, that dependency's status is not Backlog or To Do

Rate each story: **Pass** (all 6 clear) or **Blocked** (list which gates failed, one line each).

---

## Step 3 — Write Jira label for passing stories

For each story that passed Step 2:

1. Call the Jira REST API to add the label `ready-for-sprint` to that issue:
   ```
   PUT https://sgtechstack.atlassian.net/rest/api/3/issue/{key}
   Body: {"update": {"labels": [{"add": "ready-for-sprint"}]}}
   Auth: Basic michelle_yip@psd.gov.sg:{JIRA_API_TOKEN from 03-stories/.env}
   ```
2. Update the story's entry in `04-ceremonies/sprint-checklists.md` — set its readiness status to `Ready` and add today's date.

If the Jira call fails (401, 502), note the failure in the output but continue. Don't block the local update on a Jira write failure.

---

## Step 4 — Compute Ready shelf depth

Pull from Jira all stories with the `ready-for-sprint` label on board 12541 (Pathfinder):
```
GET https://sgtechstack.atlassian.net/rest/api/3/search
?jql=project=OTEP AND labels="ready-for-sprint" AND status != Done
&fields=summary,status,customfield_10016
```

Compute:
- **Shelf count:** total stories with the label
- **Shelf points:** sum of story points (customfield_10016) across those stories
- **Sprint velocity:** derive from sprint-status.md — look for the most recent completed sprint's Done count and points. If points aren't recorded, use story count as a proxy.
- **Buffer depth:** shelf points (or count) divided by velocity = sprints of runway
- **Status:**
  - 🟢 Healthy — ≥ 2 sprints of runway
  - 🟡 Thin — 1–2 sprints
  - 🔴 At risk — < 1 sprint

---

## Step 5 — Generate output

Save as: `/Users/michelleyip/Documents/PM-OS/outputs/analyses/YYYY-MM-DD-WXX-grooming-close.md`

```markdown
## Grooming Close — [Date]

### Stories confirmed Ready for Sprint ([n])
| Story | Title | DoR gates confirmed | Jira label |
|-------|-------|---------------------|------------|
| OTEP-XXX | [title] | All 6 ✅ | ✅ Added |

### Stories not yet ready ([n])
| Story | Title | Blocker | Owner |
|-------|-------|---------|-------|
| OTEP-XXX | [title] | [which gate failed + why] | [owner or "unassigned"] |

### Ready Shelf — [date]
**Depth:** [n] stories · [n] points · ~[x] sprints of runway
**Status:** 🟢 Healthy / 🟡 Thin / 🔴 At risk
**Velocity basis:** Sprint [N] — [n] stories / [n] points Done

### What to do next
[1–2 lines: if thin, name the top 1–2 backlog stories closest to DoR that could be groomed to fill the gap. If healthy, say so and stop.]
```
