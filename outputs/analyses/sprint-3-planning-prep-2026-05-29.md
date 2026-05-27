# Sprint 3 Planning Prep
**Date:** Thu 29 May 2026
**Sprint 3:** Mon 1 Jun – Fri 12 Jun 2026

---

## Sprint 3 Goal

> By end of Sprint 3, an officer can find relevant opportunities using filters and successfully initiate an application to any active OTG opportunity (except SJRs), powered by live imported data.

---

## Do Before the Session

Things to confirm first thing tomorrow morning — before Planning starts:

| # | Action | Ask | Impact if skipped |
|---|--------|-----|-------------------|
| 1 | **OTEP-289 spike output** | Pow Hwee: go or no-go for OTEP-318? | OTEP-318 is conditional — can't include it in scope without this answer |
| 2 | **Sprint 2 carry-over list** | Leo/Pow Hwee: which tickets aren't closing by Friday? | Carry-overs may land in Sprint 3 and affect capacity |
| 3 | **OTEP-192 file delivery** | Pow Hwee + Rama: how does OTG Excel arrive (path, SFTP, manual upload)? | Blocks engineering from estimating the ingestion job |
| 4 | **OTEP-191 status** | Pow Hwee: resolved by AWS infra, or still needs active work? | Still showing in Jira Sprint 3 — needs a clear answer before scope is set |
| 5 | **Demo plan for Friday** | Thomas/Pow Hwee: how are we running Sprint Review without a DEV environment? | Sprint Review is the day after Planning — should not be a surprise at retro |

---

## Proposed Sprint 3 Scope

### Confirmed In

| Story | Title | AC Status | Owner |
|-------|-------|-----------|-------|
| OTEP-87 | Enhanced detail page — apply CTA only | ✅ Ready | TBC |
| OTEP-86 | Filter by opportunity type | ✅ Ready | TBC |
| OTEP-317 | Clear filters and reset view | ✅ Ready | TBC |
| OTEP-319 | Apply via FormSG — basic redirect | ✅ Ready | TBC |
| OTEP-192 | Recurring OTG data ingestion job | ✅ Story written (open questions at planning) | Pow Hwee / Léo |
| OTEP-271 | Local POCDEX database | ⚠️ No story file — confirm ACs with Pow Hwee | Léo |
| OTEP-203 | Standalone POCDEX API service | ⚠️ No story file — confirm ACs with Pow Hwee | Pow Hwee |

### Conditional

| Story | Title | Condition |
|-------|-------|-----------|
| OTEP-318 | Filter by category | Only if OTEP-289 spike output is green. No ACs yet — cannot groom until spike output is confirmed. |

### Jira Board Cleanup (do at or before Planning)

| Action | Story |
|--------|-------|
| Confirm status or remove | OTEP-191 — still showing in Sprint 3; may be resolved by AWS infra |
| Clarify with Pow Hwee | OTEP-92 — "Tracking" subtask of OTEP-86; no story file exists |
| Move to Sprint 4+ if not on board already | OTEP-71, OTEP-110, OTEP-304, OTEP-305 (auth epic — deferred 2026-05-21) |

---

## Sprint 2 Carry-Overs (Confirm at Planning)

Leo confirmed OTEP-267, OTEP-128, OTEP-129 are on track for Sprint 2. Everything else is uncertain.

| Story | Status | Risk |
|-------|--------|------|
| OTEP-85 — Opportunity cards | ❓ Unclear | If this slips, filter stories (OTEP-86) have nothing to build on |
| OTEP-268 — Empty/error states | ❓ Unclear | Pairs with listing; likely carries over |
| OTEP-295 — Mock detail endpoint | ❓ Unclear | Blocks OTEP-314 (Thomas) |
| OTEP-313 — OTG raw ingest table | 🔄 In Progress (Léo) | Sub-task of OTEP-192; must land for ingestion job to build |
| OTEP-314 — Detail page consuming OTEP-295 | ❌ Backlog | Thomas; depends on OTEP-295 closing |
| OTEP-316 — Replace mock endpoint with real DB | ❌ Backlog | Leo; depends on OTEP-193 (Done) |

**If OTEP-85 carries over:** raise the dependency explicitly at Planning. OTEP-86 and OTEP-87 both build on a working listing/detail page.

---

## Open Questions to Resolve At Planning

These are blockers for estimation — don't leave Planning without answers.

**On OTEP-192 (ingestion job):**
- How does the OTG Excel file arrive? (path, SFTP, manual upload, or other — determines trigger mechanism)
- What's the ingestion cadence? (daily is assumed but not confirmed)
- If an opportunity disappears from the export: flag for review or auto-deactivate? *(Product call — Michelle to decide before or at planning)*
- Does the job need failure alerting?

**On OTEP-271 / OTEP-203 (POCDEX plumbing):**
- Note: WD×DO job family model discussion is also tomorrow. If the job family model changes, POCDEX requirements could shift. Confirm with Pow Hwee whether Thursday's discussion affects these stories before committing them to Sprint 3.

**On scope:**
- OTEP-289 spike result: OTEP-318 in or out?
- What is Sprint 3 capacity? Thomas is sole FE — 4–5 frontend stories may be too many for one sprint.

---

## Capacity Flag: Thomas as Sole FE

Frontend stories proposed for Sprint 3:

| Story | FE work |
|-------|---------|
| OTEP-87 | Detail page enhancement |
| OTEP-86 | Filter UI |
| OTEP-317 | Clear filters (small) |
| OTEP-319 | Apply button + redirect |
| OTEP-318 | Category filter (conditional) |

That's 4–5 FE stories for one engineer in 2 weeks. Thomas also has a UI review with Amber tomorrow morning (before Planning). Worth asking Pow Hwee at Planning: what's the realistic FE throughput? If OTEP-85 carries over from Sprint 2, Thomas may already be behind before Sprint 3 starts.

**Recommendation:** At minimum, protect OTEP-87 + OTEP-319 (the apply flow) and OTEP-192 (live data). Filters (OTEP-86, OTEP-317) are the next tier. OTEP-318 is the last to add if capacity allows.

---

## Story Readiness Summary

| Story | ACs | Notes |
|-------|-----|-------|
| OTEP-87 | ✅ In Jira | Scoped to apply CTA only; competency section explicitly out |
| OTEP-86 | ✅ In Jira | Type filter only; category and clear-all separated |
| OTEP-317 | ✅ In Jira | Ready |
| OTEP-319 | ✅ In Jira | Pre-fill resolved as out of scope; one open question on tracking params |
| OTEP-192 | ✅ In Jira | Open questions remain — resolve at Planning |
| OTEP-318 | ❌ No ACs | Conditional on OTEP-289 spike; cannot groom until spike output confirmed |
| OTEP-271 | ❌ No story file | Pow Hwee / Leo to confirm ACs at Planning |
| OTEP-203 | ❌ No story file | Pow Hwee to confirm ACs at Planning |

---

*Generated: 2026-05-27 | Updated: 2026-05-27 (OTEP-87, 86, 317, 319, 192 synced to Jira)*
*Context: Sprint 2 ends Fri 29 May. Sprint Planning + Review/Retro both Thu/Fri 29–30 May.*
