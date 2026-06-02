---
name: jira-sync
description: Refresh stale Jira ticket files and sprint allocations from live Jira
disable-model-invocation: false
user-invocable: true
---

## Quick Start

**What to provide:** Nothing, or a sprint scope. Run it before a planning ceremony or whenever the cache feels behind.

```
/jira-sync              → Sync the active sprint on BOTH boards (open tickets only), fix field drift, flag the rest
/jira-sync pathfinder   → Active Pathfinder sprint only (board 12541)
/jira-sync core         → Active Core sprint only (board 13640)
/jira-sync Sprint 4     → A named sprint folder only
/jira-sync all          → Every folder + Backlog (all ~198 files, incl. closed-Done)
/jira-sync --dry-run    → Report drift only, change nothing
/jira-sync --commit     → Sync, then commit the corrected files
```

**What you get:** Your local Jira ticket files and sprint allocation docs brought back in line with live Jira. Structured fields (status, assignee, points, sprint) fixed inline, moved tickets relocated to the right folder, duplicates and judgement calls flagged for your decision, and a `*Synced from Jira: YYYY-MM-DD*` stamp on every file touched.

**The skill works diff-first:** it builds a one-line-per-ticket manifest, compares it to the live Jira pull in memory, and only opens/rewrites the files that actually changed. A typical daily run touches a handful of tickets, not the whole cache.

**Time:** 1-2 minutes for the default (active sprint, open tickets, diff-only); 5-10 for a full `all` sweep.

---

## Purpose

You keep a local cache of ~198 Jira ticket `.md` files in `03-stories/jira-sync/`, one per ticket, foldered by sprint across **two boards** (OTEP-Core 13640, OTEP-Pathfinder 12541) plus a `Backlog/` folder. Sprint planning lives in `04-ceremonies/sprint-allocation.md` and rollups in `00-hub/sprint-status.md`. Daily plans, standups, status updates, and `/stale-check` all read from this cache.

The cache drifts. A ticket changes status or owner in Jira, gets moved to a different sprint, gets re-pointed, or closes, but the `.md` file never catches up. Tickets that moved sprints leave a stale file in the old folder, often duplicated into the new one — **~75 ticket keys currently exist in two folders at once, and the copies have diverged.** Ticket files carry no sync stamp, so there's no way to tell which ones are behind.

**Two facts shape the optimization:**
- Most files don't change between runs. Closed-sprint Done tickets are stable; the active sprint is where churn lives. So the default scope is the **active sprint, open tickets only** — not the whole tree.
- Re-reading ~198 files to find the few that drifted is the slow part. So the skill is **diff-first**: build a manifest, diff in memory, open only the deltas.

This skill is the cache refresh. It pulls live Jira and rewrites the ticket files and allocation docs to match.

It's the inverse of `/stale-check`. Stale-check treats Jira as ground truth and sweeps your *planning* files (daily/weekly plans, hub trackers) against it. This skill refreshes the *cache* those checks rely on. Run `/jira-sync` first to make the cache honest, then `/stale-check` to propagate into the planning files.

---

## What "in sync" means here

For structured ticket fields, **live Jira always wins.** The skill rewrites these to match the Jira pull:

1. **Status** — Backlog / In Progress / QA / Done. Jira's value is truth.
2. **Assignee** — the current Jira assignee (or "N/A" if unassigned).
3. **Story Points** — the Jira estimate.
4. **Sprint** — the sprint the issue currently sits in. If it changed, the file moves folders too.

Freeform content (Description, Acceptance Criteria, Note, Risk) is **not** rewritten from Jira. These hold context Jira doesn't carry. The skill leaves them alone but flags a `Note` / `ACs TBC` / risk line when it references a date that has passed or a condition that's since been resolved.

A ticket file is NOT stale just because it's old. A closed-sprint ticket marked Done is correct. Only fields that contradict live Jira are out of sync.

---

## Files this skill touches

**Targets (rewritten to match Jira):**
1. `03-stories/jira-sync/<sprint folders>/OTEP-*.md` — per-ticket files (the cache)
2. `04-ceremonies/sprint-allocation.md` — story placement, owners, status, the "Live pull [date]" line
3. `00-hub/sprint-status.md` — issue counts and status breakdown rollup

**Reconcile against (read-only — never the target of an auto-fix):**
- **Live Jira** via the Atlassian MCP — the truth for every structured field, sprint state, and dates. Board IDs are in memory `reference_jira.md` (sgtechstack.atlassian.net; OTEP-Core and OTEP-Pathfinder boards).
- `04-ceremonies/sprint-calendar.md` & `sprint-boundary.md` — sprint dates and holiday shifts. Flag date drift here, don't auto-rewrite it.
- `06-skills-and-decisions/decisions-log.md` — the scope/deferral context behind a move (e.g. why an auth ticket slipped a sprint).
- Today's date — the truth for past-vs-future on freeform notes.

---

## Workflow

### Step 1: Determine scope (before any Jira call — keeps the pull small)

- **default** — the **active sprint on both boards**, open tickets only (status ≠ Done). Derive the active sprint per board from the Jira pull (state = active), cross-checked with `sprint-calendar.md`.
- **`pathfinder`** / **`core`** — the active sprint on just that board (12541 / 13640).
- **a sprint name** (e.g. `Sprint 4`, `Pathfinder Sprint 3`) — just that folder, all statuses.
- **`all`** — every folder + Backlog, all statuses including closed-Done (~198 files). Slow; use before quarterly planning or after a big re-shuffle.

**Why open-tickets-only by default:** closed-sprint Done tickets are stable and rarely change. Skipping them is the single biggest speed win. A Done ticket only re-syncs under `all` or a named-sprint run.

### Step 2: Build the manifest, then pull Jira

1. **Build a local manifest** of the in-scope files: one line per ticket — `key | folder | status | assignee | points`. Get these from the `**Field:**` headers without reading full file bodies (grep the header block, not the Description). This is the cheap snapshot you diff against.
2. **Pull live Jira** (Atlassian MCP) for the in-scope sprint(s). For each issue: `key, summary, status, assignee, story points, sprint`. For each sprint: state, dates, full issue list, sprint ID.
3. **Diff manifest vs. Jira in memory.** The output is three small sets: **changed** (a field differs), **moved** (Jira sprint ≠ folder), **gone/new** (in one source, not the other). Everything else is already in sync and never gets opened.
4. **Note today's date** for past-vs-future checks on freeform notes.

If the MCP is down, stop and say so. Unlike `/stale-check`, this skill has no file-only fallback for the ticket refresh, it needs live data. (It can still flag past-dated allocation entries from the date alone, so offer that as a partial run.)

### Step 3: Apply only the deltas

Open and rewrite **only** the files in the changed/moved sets from Step 2:

- **Changed:** rewrite the differing `Status` / `Assignee` / `Story Points` / `Sprint` header field(s). Each rewrite must trace to a specific Jira value. Leave the rest of the file alone.
- **Moved:** relocate the file to the folder matching its live Jira sprint and update the `Sprint:` field. Then handle duplicates in batch (below) — don't open them one at a time.
- **Leave freeform sections** (`Description`, `Acceptance Criteria`, `Note`, `Risk`) untouched, but **flag** when one names a date that has passed or a condition that's since resolved.
- **Stamp** every file you changed or moved with a `*Synced from Jira: YYYY-MM-DD*` footer. If the stamp exists, bump the date. (New stamps are what make the *next* run able to skip unchanged files by date.)

**Duplicate handling (batched — the cache has ~75 dupes):** when a ticket key exists in more than one folder, the copy in the folder matching its **live Jira sprint is canonical**. For each duplicate, show a one-line content-diff summary of the stale copy, then ask **once** at the end: "Delete these N stale copies? [list]" — a single confirm, not N prompts. Relocating is automatic; deleting the old copy is the one confirm. Never silently delete.

### Step 4: Reconcile allocation + rollup files

- **`sprint-allocation.md`** — update the per-sprint story tables (placement, owner, status) to match the Jira pull, and refresh the "Live pull [date]" / "Source:" line to today.
- **`sprint-status.md`** — recompute the status breakdown counts (Done / In Progress / QA / Backlog) and total issue count from the Jira pull. Replace the old hard-coded numbers.
- **Sprint dates** in `sprint-allocation.md` / `sprint-calendar.md` that look shifted by a holiday: **flag**, don't auto-rewrite. A date change is a judgement call (which day did the sprint actually start), not a Jira field swap.
- Bump the "Last updated" / sync-note footers on files you changed.

### Step 5: Report

Output one compact summary (no separate file unless asked):

```markdown
## Jira-sync — [date]

**Ground truth:** Jira [active sprint(s), state, N issues] · scope [folders synced] · today [date]
**Diff:** [X] files in scope · [Y] changed · [Z] moved · [rest] already in sync (not opened)

### Field updates ([n])
| Ticket | Field | Was → Now |
|--------|-------|-----------|
| ... | ... | ... |

### Moved / duplicate ([n])
| Ticket | From → To folder | Duplicate to delete? |
|--------|------------------|----------------------|
| ... | ... | ... |

### Allocation & rollup ([n])
| File | What changed |
|------|--------------|
| ... | ... |

### Flagged — your call ([n])
1. **[file]** — [the question / conflict]. [Why I didn't auto-fix it.]

### Clean (checked, in sync)
[one line: folders/files swept with no drift]

**Stamps bumped:** [count] ticket files + [allocation files]
```

Lead with whatever would most mislead someone tomorrow (usually a status or sprint-placement change), the way `/daily-plan` leads with the day's key focus.

---

## Fix-vs-flag rule

**Fix inline (do it, then report) when ALL of these hold:**
- It's a structured field with an unambiguous live Jira value (status / assignee / points / sprint), or a count recomputed directly from the pull.
- The fix is a factual swap, not a scope or judgement change.
- The file is a cache/tracker, not a historical record.

Also auto-done: relocating a file to the folder matching its live Jira sprint.

**Flag for you (don't touch) when ANY of these hold:**
- It's freeform content (Acceptance Criteria, Description, Risk, Note) — Jira doesn't carry the truth for these.
- It's a sprint *date* that looks shifted (holiday, late start) — which day is a call you make.
- It's a duplicate-file deletion — relocating is safe, deleting the old copy is your confirm.
- Jira and a logged decision conflict — surface both, you pick.

When in doubt, flag. A wrong "fix" to the cache is worse than a flagged question, because every downstream skill reads the cache.

---

## Modes

- **`--dry-run`** — run Steps 1-4 as a diff, report findings, change nothing (no writes, no file moves). Use it to eyeball before editing.
- **`--commit`** — after syncing, stage and commit only the files this skill touched, with a message like `chore: jira-sync sweep YYYY-MM-DD (statuses, OTEP-271 → Sprint 3, counts)`. Never commit `.mcp.json` or anything gitignored. Branch first if on `main` and that's the workspace norm.
- **default** — fix + relocate + flag + report, left uncommitted for you to review.

---

## Output Quality Self-Check

Before presenting the report, verify:

- [ ] **Jira pulled first** (or its absence noted) — every field fix was checked against live data, not assumed
- [ ] **Every field fix traces to a Jira value** — status/assignee/points/sprint each map to the pull
- [ ] **No freeform content auto-rewritten** — ACs, descriptions, risks were flagged, not edited
- [ ] **Moved files are one-per-ticket** — relocations done, duplicate deletions only flagged
- [ ] **Sprint date shifts flagged, not auto-changed** — dates are judgement calls
- [ ] **Stamps bumped** — every touched ticket and allocation file carries today's sync date
- [ ] **Counts recomputed from the pull** — sprint-status numbers match the live issue list
- [ ] **Compact** — the report fits on one screen; detail only where a fix needs justifying

---

## Notes

- This pairs with `/stale-check`. Run `/jira-sync` first to refresh the cache, then `/stale-check` to catch any planning files that still reference the old state. The two compose: jira-sync fixes the source, stale-check fixes everything that read from it.
- The jira-sync cache (`03-stories/jira-sync/`) is the highest-leverage target. Every other skill and tracker reads it, so a stale field there propagates into standups, status updates, and daily plans.
- Board IDs and the Jira host live in memory `reference_jira.md` — reuse them, don't re-derive.
- Per `WORKSPACE-MAP.md`, the cache and allocation files live in PM-skills-ALL-1 while this skill lives in PM-OS. Use absolute paths when reading and writing across the boundary.
- Tickets duplicated across folders (a file in both the old and new sprint) are the most common structural drift. Relocating fixes placement; you still confirm the delete.
