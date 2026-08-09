---
week: 2026-W32
week_start: 2026-08-03
week_end: 2026-08-07
quarter: Q2/Q3 2026
---

# Weekly Review - Week of August 3, 2026

## TL;DR

- **Priorities:** 2 of 2 top priorities resolved by Friday, but neither the way the plan expected — Priority 1 (data-trust tracker) landed today, last possible day; Priority 2 (VAPT date) got superseded by a bigger development (PS/DS 7-week MVP delay proposal) rather than resolved on its own terms.
- **Sprint 7:** Closing in 2 days (2026-08-09) with 23 Done, 8 In Progress, 8 QA, 2 To Do — WOG AD login (the sprint's stated core deliverable) still not shipped; deliberately descoped for UAT Batch 1 today via a Keycloak fallback decision.
- **Meetings:** 6+ meetings/threads processed today alone (Friday); the week produced 4 separate meeting-cleanup consolidations (8/4, 8/5, 8/6, 8/7) — meeting volume was heavier than the plan's "22% load" estimate suggested.
- **Key win:** Three long-standing recurring risks resolved today after surfacing unowned/unresolved across 3-4 separate meetings this week — intranet-routing ownership (named: Rama), POCDEX UAT connectivity, and WS3's SSO connectivity test (SL config, SSO config, and the test itself all done, with a real next step: Core team updates the Course UI page, tests with CSC 18 Aug). Named ownership and just finishing the actual test work broke a pattern that had been costing re-discovery time all week.
- **Key challenge:** `/decision-doc` — this week's flagged critical strategic skill, specifically recommended for the VAPT date decision — never ran. The VAPT question got overtaken by events (PS/DS note) instead of being deliberately resolved.

---

## Strategic Progress

**Quarter Goal:** Ship Sprint 7/8 scope toward the 11 Aug UAT start (Profile + Opportunities), feature freeze end of Sprint 8 (21 Aug). MVP timeline itself moved this week — a PS/DS approval note (pending) proposes push from early Oct to end Nov 2026.

**Progress This Week:** Sprint 7 moved from 16 Done/8 In Progress/6 QA (start of week) to 23 Done/8 In Progress/8 QA (Friday) — real progress, but the sprint's headline deliverable (WOG AD login replacing Keycloak) is not among the Done items and was formally descoped from Batch 1 UAT today rather than completed.

**Velocity check:**
- 2 sprints left before Sprint 8 feature freeze (21 Aug)
- WOG AD login carries into next sprint at minimum — worth confirming this doesn't also compress Sprint 8
- **Assessment:** Sprint mechanics on track (ticket count moving), but the sprint's own stated goal is only partially met — worth being explicit about this at Friday's demo rather than letting ticket velocity read as goal completion

---

## Top 3 Priorities Review

### Priority 1: Consolidate the Products/POCDEX Data-Trust Risk ⭐ Most Important

**Planned:** Build a single tracked artifact (owner, status, next action) by Monday's protected block, get Adrian's confirmation his "data challenges" comment maps to this risk, assign Rama as owner.

**Actual:** Did not happen Monday as planned. Carried as an open item through Wed/Thu (flagged as "second-day carry-over" in Wednesday's daily plan, no confirmation Adrian's PM Weekly answer ever landed). Resolved today (Friday) — but via a different mechanism than planned: rather than one dedicated tracker artifact, the data-trust risk surface got consolidated into today's weekly RAID log, which absorbed and reconciled the POCDEX data-sharing email thread (field freeze, purge instruction, UAT coverage gap), the Squad Sync connectivity blocker, and the SIT standup routing gap into one place.

**Status:** 🟡 Partial — the underlying goal (stop 5+ people rediscovering this risk separately) was achieved, but not via the specific artifact the plan called for, and not on the planned day.

**Key outcome:** The RAID log consolidation done today replaces 4 separate mid-week RAID logs that had sprung up independently (general, timeline, Sprint 7, POCDEX) — this is arguably a better outcome than the originally planned single tracker, since it caught and merged fragmentation the plan didn't anticipate.

**Learning:** The plan assumed Monday's protected block would be the forcing function. It wasn't used for this (no evidence in this week's daily plans that Monday's block happened as intended). The actual resolution mechanism — reactive consolidation on the last day, triggered by a pile-up of new information — worked, but only because Friday had enough slack to absorb it. Don't assume a protected block will hold without checking Monday.

---

### Priority 2: Confirm CSC Tracker Landed and Resolve the VAPT Date Conflict

**Planned:** Confirm the CSC Integration Master Tracker was in use, get a direct answer from Rama on 16 Oct vs. 23 Oct, update `risks.md`/`open-items.md` #39, reassess go-live buffer. Run `/decision-doc` once confirmed, before Thursday's Senior-level session.

**Actual:** The VAPT date conflict was never directly resolved with Rama — it carried as an open escalation item through Tue/Wed/Thu/Fri (explicitly flagged "5th consecutive miss" in Friday's daily plan). What actually closed the question was a different, larger development: a PS/DS approval note surfaced proposing the entire MVP timeline shift 7 weeks (VAPT to early-Sep–mid-Nov), which supersedes the 16 Oct/23 Oct fight rather than resolving it. Trackers were updated today to reflect this pending-supersession state, correctly avoiding re-litigating a now-moot question.

**Status:** ❌ Not resolved as planned — overtaken by events, not deliberately closed. `/decision-doc` never ran.

**Key outcome:** Escalating a stale question was correctly paused once the PS/DS note appeared, rather than continuing to chase Rama on a number that might already be wrong. That's good judgment in the moment, but it means the week's own success metric ("confirmed VAPT date by Thursday's senior-level session") was never met on its own terms.

**Learning:** This is the second week in a row this exact item (VAPT date) failed to resolve through the standing meeting cadence — it needed a direct, out-of-band conversation with Rama that never happened, across 5+ opportunities to have it. Worth naming explicitly: standups and squad syncs are not the forum for this kind of single-owner decision; it needs a scheduled 1:1 ask, not another mention in a group setting.

---

## Key Decisions Made

1. **UAT Batch 1 proceeds on Keycloak, WOG AD login deliberately deferred** (2026-08-07)
   - **Context:** WOG AD (OTEP-71) and its dependency chain (OTEP-444, GovTech egress) not ready with 2 days left in Sprint 7.
   - **Decision:** Disable WOG AD, test Batch 1 against Keycloak accounts instead.
   - **Rationale:** Unblocks UAT on schedule rather than waiting on an auth chain with no confirmed landing date; explicit scope decision, not a silent drop.
   - **Owner:** Team (Léo actioning the disable); re-enable plan for Batch 2+ still unowned.

2. **OTEP-668 (combined agency+title search bug) split into a new ticket, deferred to next sprint** (2026-08-07)
   - **Context:** Root cause confirmed (match-score dilution on combined queries) — "not a quick fix at all" per Thomas.
   - **Decision:** Close OTEP-668 for Sprint 7 on what's already fixed, split the unresolved defect into its own ticket, document as a known UAT limitation.
   - **Rationale:** Doesn't break the feature (title-only/agency-only search work); forcing a rushed fix into 2 remaining sprint days was the wrong trade.
   - **Owner:** Michelle (decision), Thomas (interim-fix feasibility check + next-sprint estimate, pending).

3. **VAPT/intranet routing ownership assigned to Rama** (2026-08-07)
   - **Context:** Flagged unowned across 3 separate meetings this week before finally getting named.
   - **Decision:** Rama owns the routing migration plan and the PS/DS approval follow-up as one thread.
   - **Rationale:** Closes a recurring "no owner" pattern that cost re-discovery time in at least 4 meetings this week.
   - **Owner:** Rama Moorthy. Migration plan itself still doesn't exist — only ownership is resolved.

4. **Production data purged from UAT environment** (2026-08-07)
   - **Context:** Data Office (Grace Gan, Huiting) instructed immediate purge, rejecting CareerCompass's original "purge after 31 Aug UAT" plan.
   - **Decision:** Purged immediately, ahead of the original UAT-completion timeline.
   - **Rationale:** IM8 compliance instruction, not negotiable.
   - **Owner:** CareerCompass team. Formal confirmation back to Data Office still outstanding.

---

## Metrics Movement

| Metric | Start of Week | End of Week | Change |
|---|---|---|---|
| Sprint 7: Done | 16 | 23 | +7 |
| Sprint 7: In Progress | 8 | 8 | — |
| Sprint 7: QA | 6 | 8 | +2 |
| Sprint 7: To Do | 2 | 2 | — |
| Sprint 7: Backlog | 22 | 15 | -7 (moved into active work) |
| WS1/WS2 SIT status | Not passed | Passed clean | ✅ |
| WS3 (SSO) status | Not started | Connectivity test done — next step: Core team updates Course UI page, tests with CSC 18 Aug | ✅ |
| VAPT date conflict | Open (16 Oct vs 23 Oct) | Superseded by PS/DS 7-week delay proposal, pending approval | ⚠️ Not resolved, reframed |
| Recurring "no owner"/unresolved risks this week | 3+ (routing, POCDEX connectivity, SSO) | All 3 resolved by Friday close (routing→Rama, POCDEX connectivity cleared, SSO connectivity test complete) | ✅ Resolved |

---

## Top 3 Learnings

**What worked:** Naming a single explicit owner (Rama, for routing/VAPT) broke a pattern that had cost re-discovery time across 3-4 separate meetings this week. The fix wasn't more meetings or more escalation — it was one person's name attached to one thread. Repeat this pattern proactively next week rather than waiting for a risk to resurface 3+ times before naming an owner.

**What didn't work:** The VAPT date conflict — this week's Priority 2 — never got resolved through the standing meeting cadence despite 5+ opportunities (SIT readiness sync, two Squad Syncs, two SIT standups). It took an external development (the PS/DS note) to make the question moot, not a deliberate resolution. Root cause: relying on group meetings to force a single-owner decision that actually needed a direct 1:1 ask. Fix for next week: when an item misses its second meeting-based escalation attempt, switch to a direct message immediately rather than trying a third meeting.

**Process gap:** `/decision-doc` was explicitly flagged as this week's critical strategic skill, targeted at exactly the VAPT date decision, and never ran — not because the decision resolved cleanly, but because it got overtaken by the PS/DS note before a deliberate decision was ever made. Worth treating "the question changed underneath us" as a trigger to run `/decision-doc` on the *new* question (should we accept the PS/DS proposal?) rather than treating the skill as no-longer-relevant just because the original framing is stale.

---

## Next Week Preview

### Top 3 Priorities (Draft)

1. **Confirm PS/DS approval status and run `/decision-doc` on the revised timeline** — this carries directly from this week's unresolved Priority 2; now sharper since the actual decision (accept the 7-week MVP delay) is concrete and consequential.
2. **WOG AD login (OTEP-71) landing plan for Sprint 8** — carried over from Sprint 7, now needs a firm re-enable date for Batch 2+ UAT, not just "next sprint."
3. **Core team's Course UI page update, ahead of the 18 Aug CSC test** — new this week, real date, 11 days of runway. Worth getting on the calendar early rather than treating 18 Aug as distant.

> Note: Run `/weekly-plan` to formalize these and add detail

### Items to Unblock

| Item | Blocked Since | Blocked By | Action Needed |
|---|---|---|---|
| PS/DS approval status | 2026-08-07 | Awaiting PS/DS response | Direct follow-up with Rama Monday |
| WOG AD re-enable plan | 2026-08-07 (deferred) | No owner named yet | Assign an owner Monday, don't let it drift unowned like routing did |
| Core team Course UI page update | 2026-08-07 (new step) | Not yet started | Get on the calendar early — 18 Aug CSC test depends on it |
| Account creation for DLEid/JumpStart UAT | 2026-08-07 | Unassigned | Name an owner — cheap fix, real impact |

**Priority unblocks:**
1. PS/DS approval status — everything downstream (VAPT, UAT, Release 1) stays unconfirmed until this lands
2. Course UI page update — new pacing item for the 18 Aug CSC test, worth starting early rather than late

---

*Generated: 2026-08-07*
*Data sources: Weekly plan (2026-08-03-W32), daily plans (8/5, 8/6, 8/7), 6 meeting notes + 4 meeting-cleanup consolidations from this week, live Jira (Sprint 7), consolidated RAID log (2026-08-07)*
*Next: Run `/weekly-plan` to plan next week*
