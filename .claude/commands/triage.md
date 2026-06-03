# /triage — Inbox Triage

> Operates on the OTEP delivery workspace at `/Users/michelleyip/Documents/PM-skills-ALL-1/`. Paths below are relative to that root.

Route all tagged items from inbox.md to their destination files, then clear them from the inbox.

---

## Step 1 — Read these files in full before doing anything

- `inbox.md` — source of all raw captures
- `06-skills-and-decisions/decisions-log.md` — [D] destination; note the last row to continue from
- `00-hub/tasks-active.md` — [A] destination; note the Up Next section
- `00-hub/open-items.md` — [Q] destination; note the last # in the table to continue numbering

---

## Step 2 — Extract tagged items from the Raw Capture section of inbox.md

Find every line tagged:
- `[D]` — a decision to log
- `[A]` — an action to add to the task list
- `[Q]` — an open question to track
- `[I]` — info only (acknowledge, no routing needed)

Ignore blank lines, section headers (`###`), and untagged text.

---

## Step 3 — Route each item

**[D] → 06-skills-and-decisions/decisions-log.md**
Append a new table row at the bottom:
`| YYYY-MM-DD | <decision text> | <rationale if inferable, else [fill in]> | <owner if inferable, else [fill in]> |`

Use today's date. If the raw capture has enough context to infer rationale or owner, use it. If not, mark as `[fill in]` — do not invent.

**[A] → 00-hub/tasks-active.md**
Append under the **Up Next** section:
`- [ ] <action text> *(captured YYYY-MM-DD)*`

**[Q] → 00-hub/open-items.md**
Append a new row at the bottom of the Open items table:
`| <next #> | <question text> | [owner] | [needed by] | [impacts] | 🔴 Open |`
Increment # from the last row in the table.

**[I]** — No routing. Acknowledge and clear.

---

## Step 4 — Update inbox.md

Remove the routed lines from the Raw Capture section.
Keep all untagged text, blank lines, and section headers intact.
Do not touch the "Triaged — pending routing" section.

---

## Step 5 — Output a triage summary

**Triage complete — YYYY-MM-DD**

| Tag | Count | Routed to |
|-----|-------|-----------|
| [D] | N | decisions-log.md |
| [A] | N | tasks-active.md |
| [Q] | N | open-items.md |
| [I] | N | cleared |

**Needs your attention** (missing fields you must complete):
- List any [D] rows where rationale or owner was marked `[fill in]`
- List any [Q] rows where owner was marked `[owner]`

If inbox has no tagged items, say so and stop.
