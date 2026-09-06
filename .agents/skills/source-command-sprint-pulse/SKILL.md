---
name: "source-command-sprint-pulse"
description: "Migrated source command `sprint-pulse`"
---

# source-command-sprint-pulse

Use this skill when the user asks to run the migrated source command `sprint-pulse`.

## Command Template

# /sprint-pulse — Daily Jira Activity Filter

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.
> Requires sandbox OFF and a valid token in `03-stories/.env`.

Run this once a day instead of scanning the board manually. It pulls only what changed on your stories in the last 24 hours and sorts it into what needs your action vs what's just noise.

---

## Step 1 — Derive the story scope

Read `00-hub/sprint-status.md` to find:
- The active sprint ID and name for board 12541 (Pathfinder)
- The current sprint's story list

The stories in scope for this command are all active-sprint stories on the Pathfinder board. Do not filter by Epic 4 only — sprint-status.md is the source of truth for what's in play.

---

## Step 2 — Pull last 24 hours of activity from Jira

Use JQL to fetch issues updated in the last 24 hours within the active sprint:

```
GET https://sgtechstack.atlassian.net/rest/api/3/search
?jql=project=OTEP AND sprint=[active sprint ID] AND updated > "-1d"
&fields=summary,status,assignee,labels,customfield_10016
Auth: Basic michelle_yip@psd.gov.sg:{JIRA_API_TOKEN from 03-stories/.env}
```

For each issue returned, also fetch the most recent comment:
```
GET https://sgtechstack.atlassian.net/rest/api/3/issue/{key}/comment
?orderBy=-created&maxResults=1
```

Capture per issue: key, summary, current status, most recent comment (author + body + created timestamp), whether the `ready-for-sprint` label is present.

---

## Step 3 — Read cross-reference files

- `00-hub/open-items.md` — to check if a comment resolves or references a known open item
- `06-skills-and-decisions/decisions-log.md` — to check if a comment references a pending decision

---

## Step 4 — Bucket each changed story

For each story that had activity in the last 24 hours, assign it to exactly one bucket:

**Bucket A — AC landed, eligible for Ready**
Any of these signals:
- A comment from Jacky, Xian Zhang, or Pow Hwee that answers a question, confirms an AC, or closes a blocker
- The story's status moved to "Selected for Development" or a comment says ACs are now confirmed
- An open item in open-items.md referencing this story now appears resolved in the comment

**Bucket B — Blocked, needs a nudge**
Any of these signals:
- A comment is explicitly waiting on Michelle (contains "Michelle", "@michelle", or "PM to confirm/decide/clarify")
- An open item referencing this story is past its needed-by date and still unresolved
- Status moved backward (e.g. In Progress → To Do, QA → In Progress)

**Bucket C — Noise (no PM action)**
Everything else:
- Status moved forward in the normal flow (To Do → In Progress, In Progress → QA)
- A dev comment about implementation details with no question or blocker
- Assignee change only

If a story could fit A or B, prefer B (a nudge needed beats "eligible for Ready").

---

## Step 5 — Generate output

Save as: `/Users/michelleyip/Documents/PM-OS/outputs/analyses/YYYY-MM-DD-WXX-sprint-pulse.md`

```markdown
## Sprint Pulse — [Date] | Last 24h · Sprint [N]

### AC landed — eligible for Ready ([n])
| Story | What changed | Action for Michelle |
|-------|-------------|---------------------|
| OTEP-XXX | [comment summary or status change] | [specific next step, e.g. "Run /grooming-close to gate this story"] |

### Blocked — needs a nudge ([n])
| Story | Blocker | Who to ping | Open since |
|-------|---------|-------------|------------|
| OTEP-XXX | [what's stuck] | [Jacky / Xian Zhang / Pow Hwee / Amber] | [date] |

### Noise — no action needed ([n])
[comma-separated list of keys and one-word change type, e.g. "OTEP-405 (status), OTEP-482 (comment)"]

---
_[n] sprint stories checked · [n] had activity in the last 24h · [n] need your attention_
```

If nothing changed in the last 24 hours, output one line: "Sprint Pulse — [Date]: No activity on active sprint stories in the last 24h."
