---
name: "source-command-archive"
description: "Migrated source command `archive`"
---

# source-command-archive

Use this skill when the user asks to run the migrated source command `archive`.

## Command Template

# Archive Sprint Checkpoint

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.

Archive outputs and a context snapshot at mid-sprint or end-of-sprint.

---

## Steps

### Step 1 — Determine sprint and checkpoint
Read `00-hub/sprint-status.md` to get the sprint number.
Ask the user (or infer from sprint week): is this a **mid-sprint** or **end-sprint** archive?

### Step 2 — Create archive folder
Create: `00-hub/outputs/archive/sprint-[N]/[checkpoint]/`
Where checkpoint is `mid-sprint` or `end-sprint`.

### Step 3 — Move output files
Move all files from `00-hub/outputs/` (not archive/) into the checkpoint folder.
These are the briefs, dailies, and prep docs generated during this period.

### Step 4 — Snapshot context files
Copy (not move) the following into the checkpoint folder with a `snapshot-` prefix:
- `00-hub/sprint-status.md` → `snapshot-sprint-status.md`
- `00-hub/open-items.md` → `snapshot-open-items.md`
- `06-skills-and-decisions/decisions-log.md` → `snapshot-decisions-log.md`
- `00-hub/risks.md` → `snapshot-risks.md`

These are frozen records — the originals remain live for ongoing use.

### Step 5 — End-sprint only: reset context for next sprint
If this is an **end-sprint** archive:
- Clear the committed stories table in `00-hub/sprint-status.md` (keep structure, blank the rows)
- Move resolved items in `00-hub/open-items.md` from Open to Resolved with today's date
- Prompt Michelle to update sprint number, dates, and goal for the next sprint

### Step 6 — Confirm
Print a summary: what was archived, where it lives, and any next actions.

---

## Output format

No output file — this command modifies the workspace directly.
Print a confirmation summary to the console.

---

### Example structure after archiving:
```
00-hub/outputs/archive/
└── sprint-12/
    ├── mid-sprint/
    │   ├── daily-2026-05-05.md
    │   ├── snapshot-sprint-status.md
    │   ├── snapshot-open-items.md
    │   ├── snapshot-decisions-log.md
    │   └── snapshot-risks.md
    └── end-sprint/
        ├── daily-2026-05-12.md
        ├── snapshot-sprint-status.md
        ├── snapshot-open-items.md
        ├── snapshot-decisions-log.md
        └── snapshot-risks.md
```
