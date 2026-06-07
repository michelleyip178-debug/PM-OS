---
date: 2026-06-08
type: Mid-Sprint Review Briefing
sprint: OTEP-Pathfinder Sprint 3
prepared: 2026-06-05
---

# Mid-Sprint Review — Mon 8 Jun | Sprint 3, Week 2

> Michelle's role: listen, surface risks, decide if anything needs to change. Not to run the session.

---

## Sprint Health

**Status:** 🔴 Off track

**Sprint goal:** By end of Sprint 3, an officer can find relevant opportunities using filters and successfully initiate an application to any active OTG opportunity (except SJRs), powered by live imported data.

**Stories:** 4 Done / 49 committed — day 4 of 10, only 8% of stories closed.

**Why off track:**
- The sprint goal has two legs: filters (OTEP-86/317) and apply via FormSG (OTEP-319). Both are still Backlog with 6 days left.
- The "powered by live imported data" leg depends on OTEP-192 (recurring ingestion), which is In Progress but not AC-complete — 72/200 rows parsing, append-only instead of upsert.
- OTEP-85 (listing cards with real data) is In Progress but unassigned — Rathika has test cases ready but SGT timezone AC is missing.
- Thomas is the sole FE engineer and is currently across OTEP-362, 368, 369 simultaneously. He hasn't started OTEP-86, 317, or 319 yet.

---

## Blockers to Raise in the Session

| Blocker | Story affected | Owner | Action needed |
|---------|---------------|-------|---------------|
| OTEP-319 still Backlog — Thomas hasn't started | Sprint goal (apply via FormSG) | Thomas | Confirm start date Mon. If not starting today, S4 goal needs fallback framing. |
| OTEP-85 unassigned, SGT timezone AC missing | Listing cards with real data | Michelle (AC) / Thomas (build) | Michelle to add timezone AC today. Assign Thomas or flag as S4 carry. |
| OTEP-192 append-only, not upsert | Live OTG data ingestion | Léo | Validation rules sent to Léo today (2026-06-05). Confirm upsert is next task. |
| OTEP-192: closing_date + posting_date not in Léo's query — may not be ingested | OTEP-85 (card data), OTEP-284 (closing soon) | Léo | Ask Léo: are these fields in the schema? Blocking Rathika's test cases. |
| OTEP-348 (scheduler + observability) — unowned, no sprint | OTEP-192 recurring job | Pow Hwee / Michelle | Assign owner + sprint slot before Thu 11 Jun planning or ingestion job never runs on schedule. |
| OTEP-128 500 error AC missing | Detail page QA | Michelle | Split AC (500 vs 404) before Mon. Rathika can't close without it. |
| OTEP-326 missing Figma reference | Error state QA | Michelle | Paste LifeSG reference before Mon. |
| OTEP-276 (design system spike) shows In Progress but Pow Hwee moved it to backlog in May | Unknown | Pow Hwee | Confirm: close or keep? Zombie ticket inflates In Progress count. |

---

## Scope Creep Flags

- **OTEP-374, 377, 378, 379** — C@G subtasks added to Sprint 3 board but all Backlog, unowned. These are correctly S4 scope but their presence on the S3 board muddies the count. Confirm they're S4 and move them if needed.
- **OTEP-88 rewrite** — Pow Hwee expanded scope from badge-only to full C@G listing page (Jun 2). AC rewritten and synced (2026-06-05). Two TBC items remain (AC4 fallback, AC2 badge spec). This is a scope change but it's the right call — not a risk, just flag it's bigger than originally sized.

---

## PM Decisions Needed Before Sprint End

| Decision | Waiting on Michelle for | By when |
|----------|------------------------|---------|
| OTEP-85 SGT timezone AC | Write and sync to Jira | Before Mon standup |
| OTEP-128 500 vs 404 error split | Rewrite AC, split test cases | Before Mon standup |
| OTEP-326 LifeSG reference | Paste into ticket | Before Mon standup |
| OTEP-268/325 filter-zero-results empty state | Add AC | Before Mon standup |
| OTEP-192 validation rules (tiered skip logic) | Sent to Léo 2026-06-05 ✅ | Done |
| OTEP-88 AC4 fallback behaviour | Confirm with Pow Hwee in meeting | Mon 8 Jun |
| OTEP-317 scope lock (type-filter-only) | Confirm with Pow Hwee in meeting | Mon 8 Jun |
| OTEP-348 owner assignment | Raise in meeting | Mon 8 Jun |
| S4 goal fallback framing | Decide if OTEP-319 carries as real work | Thu 11 Jun planning |

---

## Michelle's Key Question for the Session

> **"Thomas — is OTEP-319 starting today, and is OTEP-85 yours after that?"**

This is the single question that tells you whether the sprint goal is achievable or needs to be reframed before Thu planning. OTEP-319 (apply via FormSG) is the floor the entire S4 goal sits on. If Thomas doesn't start it this week, it carries as real work — and the S4 goal needs the fallback framing (OTG discovery-to-apply verified Done + C@G appears in listing).

---

*Prepared 2026-06-05 · Feeds into Sprint 4 Planning Thu 11 Jun · Sprint 3 ends 14 Jun*
