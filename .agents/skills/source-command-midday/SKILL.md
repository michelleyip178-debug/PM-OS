---
name: "source-command-midday"
description: "Migrated source command `midday`"
---

# source-command-midday

Use this skill when the user asks to run the migrated source command `midday`.

## Command Template

# /midday — Mid-Day Pulse Check

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.

Quick check-in against your morning plan.
Read `00-hub/sprint-status.md`, `00-hub/open-items.md`, and today's daily output (`00-hub/outputs/daily-YYYY-MM-DD.md`).

---

## Steps

### Step 1 — Review morning priorities
Read today's daily output and extract the Top 3 Focus items.

### Step 2 — Check progress
For each of the 3 items, ask:
- Done? Mark it.
- In progress? Note what's left.
- Not started? Flag it — is it still the right priority or has something shifted?

### Step 3 — Surface anything new
Check if any new open items, messages, or blockers have come in that change the afternoon plan.
If nothing has changed, say so — don't invent work.

### Step 4 — Set afternoon focus
Based on what's done and what's shifted, recommend 1-2 things to focus on for the rest of the day. Be specific.

---

## Output format

Print to console only — no saved file. Keep it under 15 lines.

---

### Midday Check — [Date]

**Morning priorities:**
1. [Item] — ✅ Done / 🔄 In progress / ⬜ Not started
2. [Item] — ✅ / 🔄 / ⬜
3. [Item] — ✅ / 🔄 / ⬜

**Anything shifted?**
[One line — what changed, or "Nothing new."]

**Afternoon focus:**
1. [Specific action]
2. [Specific action, if needed]
