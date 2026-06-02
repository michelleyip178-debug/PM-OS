---
name: stale-check
description: End-of-day sweep for stale facts across daily plans, weekly plans, and hub trackers
disable-model-invocation: false
user-invocable: true
---

## Quick Start

**What to provide:** Nothing. Just run it at end of day.

```
/stale-check            → Sweep active files, fix clear factual errors, flag the judgement calls
/stale-check --dry-run  → Report stale items only, change nothing
/stale-check --commit   → Sweep, fix, then commit the corrections
```

**What you get:** A table of stale facts found, the ones I fixed inline, and the ones I flagged for your call (because they need a decision I can't make safely). Plus updated "last reviewed" stamps so files don't re-flag tomorrow.

**Time:** 2-3 minutes.

---

## Purpose

Trackers drift. A pilot cohort changes from "ESG + PSD" to MVP-6, a security review slips from September to August, a product gets rebranded, a sprint closes — but the file that mentions it never gets updated. Then a stale fact walks into a standup or a stakeholder doc.

This skill is the end-of-day discipline that catches drift the same day it happens, while you still remember what changed. It cross-checks your active planning files against the live source of truth (Jira, decisions log, risks) and against each other.

Run it after `/weekly-review` on Fridays, or any day you closed out meetings and logged decisions.

---

## What "stale" means here

A fact is stale when a file states something that a more authoritative or more recent source contradicts. The four signal types, in priority order:

1. **Contradicts live Jira** — sprint state, story counts, ticket status, owners. Jira wins.
2. **Contradicts the decisions log** — a file names an old choice after a newer decision superseded it (e.g. pilot agencies, dates, scope, branding). The dated decision wins.
3. **Internal contradiction** — two files (or two sections of one file) disagree on the same fact (e.g. one says Vesak is Mon, another says Tue). Surface both; the user resolves.
4. **Past-dated as future** — a file talks about a date that has already passed as if it's upcoming (holidays, deadlines, "write this Monday"). Today's date wins.

A fact is NOT stale just because it's old. Historical records (past meeting notes, a completed week's plan-vs-actual) are supposed to describe the past. Don't "fix" history. Only flag when a file presents an outdated fact as currently true.

---

## Files to sweep

**PM-OS (this workspace) — active planning:**
1. `outputs/daily-plans/` — today's plan (and yesterday's if today's doesn't exist yet)
2. `outputs/weekly-plans/` — current week's plan
3. `outputs/weekly-reviews/` — current week's review if present
4. `context-library/prds/` — only PRDs modified in the last ~2 weeks (active ones)

**PM-skills-ALL-1 (delivery workspace) — hub trackers:**
5. `00-hub/sprint-status.md` — highest drift risk; cross-check against live Jira
6. `00-hub/tasks-active.md`
7. `00-hub/open-items.md`
8. `00-hub/risks.md`
9. `00-hub/tasks-backlog.md` — often forgotten; check the "last reviewed" stamp
10. `00-hub/standup-prompt.md` — static context block (team roster, product name) drifts silently

**Authoritative sources to check against (read-only — never the target of a fix):**
- **Live Jira** via the Atlassian MCP — sprint state, issue counts, statuses, assignees. This is the truth for anything sprint-related.
- `06-skills-and-decisions/decisions-log.md` — the truth for choices (pilot scope, dates, branding, deferrals).
- `00-hub/risks.md` — the truth for risk dates (VAPT, cutover, etc.) once reconciled.
- Today's date — the truth for past-vs-future.

---

## Workflow

### Step 1: Establish ground truth first

Before reading any tracker, pull the authoritative facts so you have something to compare against:

1. **Pull live Jira** (Atlassian MCP). For the active sprint, get: sprint state (active/closed), issue count, and the status breakdown (Done / In Progress / QA / Backlog). Note the sprint ID and dates. If the MCP is down, say so and fall back to comparing files against each other + decisions log only.
2. **Skim the decisions log** for entries dated in the last ~2 weeks. These are the changes most likely not yet propagated. Note the fact each decision changed (pilot scope, a date, branding, a scope split).
3. **Note today's date** for past-vs-future checks.

### Step 2: Sweep each file against ground truth

For each file in the list, scan for the four signal types. Concretely, grep/check for:

- **Sprint claims:** story counts ("all 16 stories"), sprint numbers, "Backlog/Done" framing, "Day 1 / nothing started." Compare every count and state to the live Jira pull.
- **Named decisions that have a newer version:** pilot agency lists, product/branding name, key dates (security review, cutover, design lock), scope splits. Compare to the decisions log.
- **Date words used as future:** holiday names, "due [month]", "send Monday", "next week" — check whether that date is now in the past.
- **Cross-file conflicts:** the same fact stated two ways in two files. The classic is a holiday or a deadline that two files disagree on.

Keep a running list: `{file, line, stale claim, authoritative reality, signal type}`.

### Step 3: Classify each finding — fix or flag

**Fix inline (do it, then report it) when ALL of these hold:**
- The correct value is unambiguous from an authoritative source (live Jira, a dated decision, or the calendar).
- The fix is a factual swap, not a scope or judgement change.
- The file is an active tracker, not a historical record.

Examples that get fixed: pilot cohort → the decided MVP-6 list; a date that a logged decision moved; "OTEP" → "CareerCompass" after a logged rebrand; a story count that live Jira contradicts; a sprint marked active that Jira shows closed.

**Flag for the user (don't touch) when ANY of these hold:**
- The correct value requires a decision you can't verify ("is Jace still transitioning?", "does this `/command` actually exist?").
- Two sources conflict and neither is clearly authoritative — surface both, let the user pick.
- Fixing it would change scope, priority, or commitment rather than correct a fact.
- It's a historical record describing the past correctly.

When in doubt, flag. A wrong "fix" to a tracker is worse than a flagged question.

### Step 4: Update "last reviewed" stamps

For any tracker you changed that carries a `*Last reviewed: YYYY-MM-DD*` (or `*Updated:*`) footer, bump it to today with a 3-5 word note on what changed (e.g. `*Last reviewed: 2026-06-02 (pilot → MVP-6, VAPT → Aug)*`). This stops the same file re-flagging tomorrow and leaves an audit trail.

### Step 5: Report

Output one compact summary (no separate file unless asked):

```markdown
## Stale-check — [date]

**Ground truth:** Jira [sprint state + counts] · decisions log [N recent entries] · today [date]

### Fixed ([n])
| File | Line | Was → Now |
|------|------|-----------|
| ... | ... | ... |

### Flagged — your call ([n])
1. **[file:line]** — [the conflict / the question]. [Why I didn't touch it.]

### Clean (checked, current)
[one line listing files swept with no staleness]

**Stamps bumped:** [files]
```

Lead with the finding that matters most (usually a sprint/standup framing error that would mislead someone tomorrow), the way `/daily-plan` leads with the day's key focus.

---

## Modes

- **`--dry-run`** — run Steps 1-3, report findings, change nothing. Use when you want to eyeball before editing.
- **`--commit`** — after fixing, stage and commit the corrected files with a message like `chore: stale-check sweep YYYY-MM-DD (pilot scope, sprint counts, dates)`. Only commit the files this skill touched. Never commit `.mcp.json` or anything gitignored. Branch first if on `main` and that's the workspace norm.
- **default** — fix inline + flag + report, leave uncommitted for the user to review.

---

## Output Quality Self-Check

Before presenting the report, verify:

- [ ] **Jira pulled first** (or its absence noted) — sprint claims were checked against live data, not assumed
- [ ] **Decisions log skimmed** — recent decisions were used as the comparison baseline
- [ ] **Every fix is a factual swap** — no fix changed scope, priority, or a commitment
- [ ] **Every flag has a reason** — each flagged item says why it wasn't auto-fixed
- [ ] **History left alone** — no past-tense record was "corrected" to the present
- [ ] **Stamps bumped** — changed trackers carry today's review date
- [ ] **Cross-file conflicts surfaced** — if two files disagree, both are named, neither silently "won"
- [ ] **Compact** — the report fits on one screen; details only where a fix needs justifying

---

## Notes

- This pairs with `/weekly-review` (Friday) and `/daily-plan` (morning). The review looks back at outcomes; daily-plan looks forward at the day; stale-check keeps the trackers those two rely on honest.
- The hub trackers (`tasks-active`, `open-items`, `risks`, `sprint-status`) are the highest-value targets — every other skill reads them, so a stale fact there propagates everywhere.
- `standup-prompt.md` and `tasks-backlog.md` drift quietly because nobody opens them daily. Always include them.
- Per workspace routing (`WORKSPACE-MAP.md`), PRDs/decisions/meetings overlap between the two workspaces and are the most common drift source. When a fact appears in both workspaces, the decisions log is the tiebreaker.
