---
date: 2026-07-01
week: 2026-W27
---

# Stale-check — 2026-07-01

**Ground truth used:**
- **Live Jira:** not available this session (no Atlassian/Jira MCP connected). This matches the workspace's own most recent commit — today's `/sprint-pulse` run logged "no Jira creds, cache stale since 2026-06-02."
- **Sprint calendar** (`PM-skills-ALL/04-ceremonies/sprint-calendar.md`, Phase Overview table): Sprint 5 runs Mon 29 Jun – Fri 10 Jul, so today (Wed 1 Jul) is **Day 3**.
- **Decisions log** (`06-skills-and-decisions/decisions-log.md`): 67 lines, most recent entry **2026-06-02**. No entries in the last four weeks.
- **Today:** 2026-07-01.

The headline fact this run confirms: the entire `00-hub/` tracker set has been frozen at the 2026-06-02 sync for a month. Sprint 4 (15–26 Jun) ran and closed with zero record anywhere in the hub. We're now three days into Sprint 5 and the trackers still describe Sprint 3.

---

### Fixed (0)

No inline fixes this run. Every stale item I found needs a real current-state value (Sprint 4 close-out, Sprint 5 backlog, or a judgment call) that isn't available without a live Jira pull — guessing at the correct value would be worse than leaving the existing stale-but-flagged content alone. Everything below is flagged, not edited.

### Flagged — your call (6)

1. **`00-hub/sprint-status.md` + `00-hub/tasks-active.md`** — already carrying STALE banners from today's earlier `/sprint-pulse` run. Confirmed accurate: both are frozen at 2026-06-02, describing "Sprint 3 active." Sprint 5 Day 3 is actually active; Sprint 4 isn't mentioned at all. Needs `/jira-sync` before either file is trustworthy — I didn't touch the story-level content since I have no live data to replace it with.
2. **`00-hub/open-items.md`** — same one-month freeze, but no banner (unlike the two files above). At least three items have deadlines that passed silently: **#39** (SIT/UAT window was 15–20 Jun, no outcome logged), **#35** (OTEP-358 nil-date spike, due "before Sprint 4 planning" — Sprint 4 has already closed), **#31/#32** (POCDEX planning session / OTEP-110 AC mismatch, both "before Sprint 4" deadlines, both still shown 🔴 Open). **#36** (Cumulus Phase 3 — OTG must be production-ready by **6 Jul**, 5 days from today) is still live and worth surfacing even though I can't confirm the 4 Jun confirmation checkpoint actually happened.
3. **`00-hub/risks.md`** — footer says "Updated: 2026-05-28," a week older than the other hub files, but the body already cites 2026-06-02 decisions in a few rows (stamp never bumped to match). The "Sprint 2/3 Board Cleanup Actions Needed" tables are now 2–3 sprints stale — almost certainly resolved or moot, but nothing in this repo confirms either way.
4. **`06-skills-and-decisions/decisions-log.md`** — the canonical decisions source has no entries after 2026-06-02, yet PM-OS's daily/weekly plans (as recent as today) reference several newer decisions never logged here: the #40 Mark R1 sign-off routing to the 9 Jul SteerCo, the SSOT governance re-opening (26 Jun), the R1 epic-scoping jam with Adrian, and the November go-live realism call. Worth a backfill pass before this drifts further — it's supposed to be the single source of truth.
5. **Branding consistency** — the 2026-06-02 decision renamed OTEP to **CareerCompass**. PM-OS's daily-plan, weekly-plan, and `standup-prompt.md` already use the new name; all five `00-hub/` files (sprint-status, tasks-active, open-items, risks, tasks-backlog) still call the product "OTEP" throughout. (Ticket prefixes like `OTEP-XXX` are fine to keep — that's the Jira project key, not the product name.) Flagging as a bulk-rename call, not something to auto-edit across five large trackers.
6. **Jira sync cache** (`03-stories/jira-sync/`) — no Sprint 5 folder exists at all; the newest real sync activity (per the `.changes.md` files) is dated 2026-05-28. Treating this cache as non-authoritative for anything after that date, per your instruction — it should not be read as ground truth until `/jira-sync` runs with working credentials.

### Clean (checked, current — no fixes needed)

- PM-OS `outputs/daily-plans/` (2026-06-29, 2026-06-30, 2026-07-01) — internally consistent, correctly reference Sprint 5 Day 3, carry-overs match across days.
- PM-OS `outputs/weekly-plans/2026-06-29-W27-weekly-plan.md` — consistent with the daily plans, correctly updated 2026-07-01 for the #40 resolution.
- PM-OS `outputs/weekly-reviews/` — historical records, correctly describe the past, nothing presented as current that isn't.
- `00-hub/tasks-backlog.md` — last reviewed 2026-06-02; pilot cohort (MVP-6) and VAPT (early Aug) both match the decisions log, no contradictions.
- `00-hub/standup-prompt.md` — static template, already says "CareerCompass (formerly OTEP)."
- PRDs touched in the last ~3 weeks (`otg-ingestion-brief.md`, `opportunities-listing.md`) — sprint labels are historical/roadmap markers (which sprint a story landed in), not current-state claims. No staleness found.

**Stamps bumped:** none — no files were edited this run.

**Bottom line:** nothing here is a surprise fire, but the hub hasn't been reconciled in a month and an entire sprint is missing from the record. Run `/jira-sync` first (with working Jira creds), then a manual pass to backfill the decisions log and re-baseline `open-items.md` / `risks.md` against what's now Sprint 5.
