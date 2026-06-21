# Sprint 3 Planning Prep
**Date:** Thu 28 May 2026
**Sprint 3:** Mon 1 Jun – Fri 12 Jun 2026

---

## Sprint 3 Goal

> By end of Sprint 3, an officer can find relevant opportunities using filters and successfully initiate an application to any active OTG opportunity (except SJRs), powered by live imported data.

---

## How to Run the Session (14:00–16:00, L11 Anson)

**Total time: 2 hours. No buffer — Job Family starts at 16:00.**

---

### Opening (5 min)

> "Before we get into Sprint 3, I want to close out Sprint 2 quickly. What's definitely closing by Friday — and what's carrying over?"

Get Leo/Pow Hwee to name carry-overs aloud. Write them on the whiteboard. Don't let this drag — if it's not resolved, it carries over, full stop.

Then anchor on the Sprint 3 goal:

> "Sprint 3 goal: officer can find opportunities using filters and apply to any active OTG opportunity, powered by live imported data. That means filters, the apply flow, and live ingestion all need to land this sprint. Let's work through the scope."

---

### Sprint 2 Carry-Overs (10 min)

Go through the carry-over list (see below). For each:
- Confirm it's landing in Sprint 3 Backlog
- Flag if it creates a dependency on a Sprint 3 story

Key dependencies to call out explicitly:
- If OTEP-85 carries over → OTEP-86 and OTEP-87 both build on it. Thomas can't finish filters or detail until listing page is done.
- If OTEP-295 carries over → OTEP-314 (Thomas) is blocked.

---

### Proposed Scope Walk-Through (40 min)

Go story by story. For each:
1. Read the sprint goal out loud (not the AC — the goal)
2. Ask: "Any blockers or questions before we estimate?"
3. Estimate (or confirm if already pointed)
4. Move on

**Suggested order:**
1. OTEP-192 — Recurring ingestion job (most questions, do it first while energy is high)
2. OTEP-87 — Enhanced detail page (apply CTA only — straightforward)
3. OTEP-86 + OTEP-317 — Filter by type + Clear filters (pair these, they're linked)
4. OTEP-319 — Apply via FormSG redirect (quick if pre-fill decision is settled)
5. OTEP-271 + OTEP-203 — POCDEX plumbing (flag the 16:00 risk here — see below)
6. OTEP-318 — Category filter (conditional — do last, or skip if OTEP-289 is no-go)

**On OTEP-192:** Two open questions to resolve in the room:
- How does the OTG Excel file arrive? (SFTP, manual upload, shared path?) — ask Pow Hwee + Rama
- What is the ingestion cadence? (daily assumed — confirm)

Without these answers, Pow Hwee/Leo can't size it accurately.

**On OTEP-271 + OTEP-203 (POCDEX):** Raise the risk explicitly:

> "The WD×DO job family model discussion is at 16:00 today — right after this session. If the model changes, these stories could shift. Do we commit them now with a caveat, or hold them until we have the outcome?"

Let the team decide. If they commit, note it as provisional.

---

### Thomas FE Capacity Flag (10 min)

Don't wait for this to surface organically — raise it directly:

> "I want to flag Thomas's FE load. We have OTEP-87, OTEP-86, OTEP-317, OTEP-319, and potentially OTEP-318 — that's 4–5 frontend stories for one engineer in 2 weeks. And Thomas and Amber haven't done their design-vs-implementation review yet, which could surface gaps mid-sprint."

Ask the team:
- What's the realistic FE throughput?
- If OTEP-85 carries over from Sprint 2, Thomas starts Sprint 3 already behind. Is that the case?

**Recommended floor:** OTEP-87 + OTEP-319 (apply flow) + OTEP-192 (live data) must land. Filters are second tier. OTEP-318 is last-in.

---

### OTEP-289 / OTEP-318 Gate (5 min)

If Pow Hwee confirmed OTEP-289 spike output at standup:
- Green → add OTEP-318 to scope, groom ACs in the session
- No-go → OTEP-318 goes to Sprint 4, move on

If OTEP-289 answer wasn't clear at standup, ask again here before committing.

---

### Jira Board Cleanup (5 min, do it live)

Before closing the session:
- ✅ Close OTEP-191 in Jira (resolved by AWS infra — already done)
- ✅ Confirm OTEP-92 is removed from the board
- Move OTEP-71, OTEP-110, OTEP-304, OTEP-305 to Sprint 4+ if not already there

---

### Close (5 min)

> "Let's confirm what's committed: [read back the list]. Anything missing or over-committed?"

Then:
> "Reminder — Job Family discussion starts right now at 16:00. I'll share notes from that session once I have them, specifically for how it affects POCDEX scope."

End on time. 16:00 is hard.

---

## Do Before the Session

Things to confirm at the 11:00 standup — before the 14:00 Planning session:

| # | Action | Ask | Impact if skipped |
|---|--------|-----|-------------------|
| 1 | **OTEP-289 spike output** | Pow Hwee: go or no-go for OTEP-318? | OTEP-318 is conditional — can't include it in scope without this answer |
| 2 | **Sprint 2 carry-over list** | Leo/Pow Hwee: which tickets aren't closing by Friday? | Carry-overs may land in Sprint 3 and affect capacity |
| 3 | **OTEP-192 file delivery** | Pow Hwee + Rama: how does OTG Excel arrive (path, SFTP, manual upload)? | Blocks engineering from estimating the ingestion job |
| 4 | ~~**OTEP-191 status**~~ | ✅ Done — confirmed resolved by AWS infra (2026-05-28). Close the ticket. | — |
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
| ✅ Close / remove from board | OTEP-191 — confirmed Done (resolved by AWS infra, 2026-05-28) |
| ✅ Removed | OTEP-92 — "Tracking" subtask of OTEP-86; removed 2026-05-28 |
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
- ✅ Disappearing opportunities → auto-deactivate (soft delete). Decided 2026-05-28.
- ✅ Failure alerting → deferred to post-MVP. Not in scope for Sprint 3.
- ❓ How does the OTG Excel file arrive? (path, SFTP, manual upload — determines trigger mechanism) — ask Pow Hwee + Rama
- ❓ What is the ingestion cadence? (daily assumed but not confirmed) — ask Pow Hwee + Rama

**On OTEP-271 / OTEP-203 (POCDEX plumbing):**
- Note: WD×DO job family model discussion is TODAY at 16:00 — back-to-back with Planning. If the job family model changes, POCDEX requirements could shift. Don't commit OTEP-271/203 to Sprint 3 scope without acknowledging this risk. Raise it explicitly: "We're getting the job family output at 16:00 today — do we need to hold POCDEX stories until after that?"

**On OTEP-192 (ticket shape):**
- ✅ Done. Rewritten as a technical task (non-visible) with 4 system-behavior ACs. No longer a user story. Synced to Jira 2026-05-28.

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

That's 4–5 FE stories for one engineer in 2 weeks. Thomas's UI review with Amber (design-vs-implementation check) did not happen before Planning — this means there may be unresolved design gaps that could surface mid-sprint and affect FE velocity. Worth raising at Planning: what's the realistic FE throughput? If OTEP-85 carries over from Sprint 2, Thomas may already be behind before Sprint 3 starts.

**Recommendation:** At minimum, protect OTEP-87 + OTEP-319 (the apply flow) and OTEP-192 (live data). Filters (OTEP-86, OTEP-317) are the next tier. OTEP-318 is the last to add if capacity allows.

---

## Pre-Planning Gaps (Going In Unresolved)

Two things that were supposed to happen before Planning didn't:

| Gap | Risk | Mitigation |
|-----|------|-----------|
| **Joint Pow Hwee walkthrough** (agreed 2026-05-26) | Pow Hwee may see Sprint 3 stories for the first time in the Planning room. Estimation confidence is lower without pre-alignment. | Flag it early — ask Pow Hwee to review OTEP-192 shape in the session. Build in buffer for discussion. |
| **Thomas + Amber UI review** | Design-vs-implementation gaps may surface mid-sprint instead of before it. FE velocity estimate is less reliable. | Raise explicitly at Planning: "Thomas and Amber haven't done their review yet — we should factor in time for that this sprint and not assume design is locked." |

---

## Story Readiness Summary

| Story | ACs | Notes |
|-------|-----|-------|
| OTEP-87 | ✅ In Jira | Scoped to apply CTA only; competency section explicitly out |
| OTEP-86 | ✅ In Jira | Type filter only; category and clear-all separated |
| OTEP-317 | ✅ In Jira | Ready |
| OTEP-319 | ✅ In Jira | Pre-fill resolved as out of scope; one open question on tracking params |
| OTEP-192 | ✅ In Jira | Reshaped as technical task, 4 ACs. 2 open questions remain (file delivery + cadence) — resolve at Planning |
| OTEP-318 | ❌ No ACs | Conditional on OTEP-289 spike; cannot groom until spike output confirmed |
| OTEP-271 | ❌ No story file | Pow Hwee / Leo to confirm ACs at Planning |
| OTEP-203 | ❌ No story file | Pow Hwee to confirm ACs at Planning |

---

*Generated: 2026-05-27 | Updated: 2026-05-28 (date fixed, WD×DO timing updated, pre-planning gaps added)*
*Context: Sprint 2 ends Fri 29 May. Sprint Planning Thu 28 May (today). Sprint Review + Retro Fri 29 May.*
