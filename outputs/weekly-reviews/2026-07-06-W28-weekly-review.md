---
week: 2026-W28
week_start: 2026-07-06
week_end: 2026-07-10
quarter: Q2/Q3 2026
---

# Weekly Review - Week of July 6, 2026

## TL;DR

- **PRDs:** 1 active (CareerCompass R1 — SteerCo sign-off week), POCDEX Authorisation/POCDEX still waiting on Core team
- **Meetings:** 19 meeting-notes files generated, including SteerCo, Sprint 6 planning, 3 standups, a demo, and 2 async Huiting threads
- **Completion rate:** 2 of 3 weekly priorities landed as planned; Priority 2 (Hao Eng coverage) explicitly did not
- **Key win:** ATS-2028 decision doc landed Monday, ahead of Thursday's SteerCo — the plan's own risk mitigation worked
- **Key challenge:** Hao Eng's leave coverage gap was named as this week's most time-sensitive risk and the plan's own success metric said "get a backup owner in writing today" — it didn't happen, and open item #52 now reads "confirmed there will be no backup owner assigned"
- **New risk surfaced late in the week:** a CFT/OTG import blocker appeared in three consecutive standups (07-07, 07-08, 07-10) with no owner named by Friday — this wasn't on the weekly plan's radar at all
- **End-of-day tracker sweep (`/stale-check`, `/jira-sync`) found the Jira cache itself was unreliable** — Pathfinder Sprint 5 had 8 tickets that had moved to Sprint 6 with stale duplicate files left behind, and a 2026-07-06 "orphan cleanup" on the Core board appears to have wrongly archived 18 genuinely-live tickets. Confirmed live: OTEP-505 (Hao Eng's CFT sub-task) is still **In Progress**, unresolved as her leave window closes today — the predicted risk in Priority 2 materialized exactly as forecast.

---

## Priority Completion (Plan vs. Actual)

### Priority 1: 9 Jul SteerCo — Source the Risk, Don't Just Attend

**Planned:** Get ATS-2028 sourcing written up before Thursday, confirm CMM escalation lands on the agenda as Adrian's ask, co-prep the demo narrative.

**Actual:** ✅ **Delivered.** ATS-2028 decision doc ([2026-07-08-W28-ats-2028-sourcing.md](../decisions/2026-07-08-W28-ats-2028-sourcing.md)) was written and confirmed board-level sourced two days ahead of SteerCo. CMM (#50) stayed correctly framed as Adrian's ask, with Michelle's role limited to confirming agenda placement — open item #50 reflects this cleanly. SteerCo happened Thursday; notes captured (with the caveat that the transcript was heavily garbled).

**Learning:** The weekly plan's own diagnosis — "batch specific questions to unblock stakeholders, rather than generic nudges" — is what got the ATS-2028 answer from Engineering, and turning a verbal confirmation into a written decision doc same-week is the repeatable move here.

---

### Priority 2: Close the Staffing Continuity Gap — Hao Eng's Leave Coverage

**Planned:** Name a backup owner in writing for OTEP-304 and OTEP-505 before Hao Eng's leave started Tuesday.

**Actual:** ❌ **Did not happen.** Open item #52 was updated mid-week to state explicitly: "Confirmed there will be no backup owner assigned — OTEP-304 and OTEP-505 sit uncovered 7–10 Jul, not just temporarily unassigned." This is a harder miss than a task slipping — it's the plan's stated success metric ("a named backup owner exists in writing... today, not staged as a mid-week task") being answered with "no."

By Friday, OTEP-505 was still flagged as unresolved in the daily plan ("third consecutive day it's been flagged and hasn't moved"), and Friday's meeting cleanup notes it wasn't resolved in either of Friday's processed meetings — it may have been discussed in one of the two unprocessed morning meetings, but that's unconfirmed. **Confirmed via live Jira pull, end of day:** OTEP-505 is still In Progress, unmoved, as Hao Eng's 7–10 Jul leave window closes today — the risk did not get caught anywhere during the week. OTEP-304 did progress to QA, so her other in-flight item wasn't fully stalled, but the CFT integration sub-task (OTEP-505) sat exactly as exposed as the plan warned it would.

**Root cause:** SteerCo prep likely crowded this out, exactly as the weekly plan's own risk section predicted ("SteerCo prep work crowds out naming a backup... before SteerCo prep fully takes over Wednesday"). The risk was named in advance and happened anyway.

**Fix for next time:** when a plan names a specific day-of risk ("this can't wait past Monday"), it needs a same-day forcing function — not just being listed as Priority 2 next to a SteerCo week that will structurally out-compete it for attention every time.

---

### Priority 3: Close the Cheap Loops Before They Compound

**Planned:** Assign new-tab/Opportunity-card ownership, name a single search AC owner, resolve Monday's scheduling collision.

**Actual:** 🟡 **Partial.** Open item #51 (search AC ownership) is still 🔴 Open as of the latest tracker state — this is now flagged in Friday's daily plan as having missed 4 separate venues (30 Jun standup, Wed design review, Wed grooming, and Friday itself). New-tab ownership and the Monday scheduling collision aren't visible as explicitly resolved in the materials reviewed, though they weren't flagged as recurring problems either — likely handled quietly, but not confirmed in writing anywhere.

**Learning:** This is the same "cheap now, expensive later" loop the plan itself predicted — and it's now compounded into a 4-miss pattern. Naming an owner and getting a real yes/no by end of day beats carrying it into a fifth ceremony.

---

## What Wasn't on the Plan: The CFT/OTG Blocker

This is the week's most significant surprise. A CFT/OTG import integration blocker surfaced in Team 2 Standup on 07-07, again 07-08, and again 07-10 — three consecutive working days — with no accountable owner named by Friday. Friday's meeting cleanup flags this explicitly: "This has now exceeded any reasonable 'surface and monitor' window — it needs a named owner today, not another restatement."

This wasn't visible anywhere in Monday's weekly plan, and by Friday it was blocking the Opportunities workstream demo entirely (team confirmed it "undemonstrable" in the Sprint Internal Demo). Separately, Friday's demo surfaced that a search button/autoload change had shipped without product or infra alignment — a process gap, not just a bug, that also wasn't on the week's radar.

**Pattern worth naming:** two significant issues this week (CFT/OTG, the ungoverned search change) were both discovered live in ceremonies rather than surfaced proactively — the opposite of what Priority 1's own framing ("source the risk, don't just attend") was explicitly trying to avoid for SteerCo. Worth asking whether that same discipline needs to extend past SteerCo prep into the regular standup cadence.

---

## Key Decisions Made

1. **ATS Integration Timeline confirmed as "World B"** (2026-07-08) — CareerCompass R1 status tracking is fully OTEP-native, no ATS/HRPS/Cumulus integration in the apply-to-outcome chain. Board-level sourced, written up as a formal decision record.
2. **No workaround-only demo strategy** (Team 2 Standup, 07-10) — permanent fixes take precedence over demo optics; QA becomes the formal release gate; future demos run from QA, not Dev.
3. **Don't mock Opportunities data for the stakeholder demo** (Sprint Internal Demo, 07-10) — consistent with the no-workaround principle above.
4. **CMM (#50) escalation ownership confirmed as Adrian's**, not Michelle's — Michelle's role narrowed to confirming SteerCo agenda placement only.
5. **CMM will not change existing HR officer workflows in HRPS/Cumulus** (SteerCo, 07-09) — stated as leadership direction in the room; noted the transcript quality was poor enough that this should be treated as a low-confidence record pending verification.

---

## Metrics Movement

| Item | Status Start of Week | Status End of Week | Movement |
|------|----------------------|---------------------|----------|
| ATS-2028 sourcing | Verbal confirmation only | Written decision doc, board-sourced | ✅ Resolved |
| Hao Eng backup (#52) | 🔴 Open, no plan | 🔴 Open, "confirmed no backup will be assigned" | ❌ Worsened — risk accepted, not mitigated |
| Search AC owner (#51) | 🔴 Open | 🔴 Open, now 4 missed venues | ❌ Compounding |
| CMM escalation (#50) | 🟡 Adrian owns ask | 🟡 Same, agenda-confirmed | → Steady, on track |
| CFT/OTG import blocker | Not tracked | 🔴 New, 3 consecutive days, no owner | 🆕 New, high-priority |
| POCDEX data requirements (#55/#56) | Open, awaiting Rama draft | Huiting sharpened ask with October target + WD Director approval item | 🟡 More defined, still open |
| OTEP-505 (Hao Eng's CFT sub-task) | In Progress, at-risk (no backup) | In Progress, unmoved | ❌ Confirmed stalled — risk materialized exactly as predicted |
| Jira cache integrity (Core board) | Assumed current | 18 genuinely-live tickets found wrongly archived by a 2026-07-06 "orphan cleanup" that ran on incomplete data | 🔴 New finding — cache trustworthiness itself was compromised, not just stale |

---

## Top 3 Learnings

**1. Naming a risk in the plan doesn't prevent it — only a same-day forcing function does.**
The weekly plan explicitly predicted the Hao Eng risk ("SteerCo prep crowds out naming a backup") and it happened exactly as predicted anyway. The lesson isn't "be more aware" — awareness was already there in writing. The fix is structural: a hard-deadline risk needs to be the literal first task of the day, not a bullet next to a bigger competing priority.

**2. What worked for SteerCo (source before the meeting) needs to extend to daily standups.**
ATS-2028 succeeded because it got written up proactively before it could be challenged. CFT/OTG and the ungoverned search change both got discovered live instead — the same discipline that protected Thursday's SteerCo wasn't applied to the rest of the week's ceremonies.

**3. Items that miss multiple venues need escalation, not another calendar slot.**
Search AC ownership (#51) has now missed 4 separate opportunities to get resolved. Continuing to list it as "assign this week" without changing the mechanism (e.g., forcing a decision in writing via Slack rather than waiting for the next meeting) guarantees a 5th miss.

**4. A sync that runs on incomplete data can do more damage than no sync at all.**
The end-of-day `/jira-sync` pass found that a prior cleanup (2026-07-06) had archived 18 tickets from the Core board's cache as "orphaned," concluding they no longer belonged in Sprint 5 — a conclusion built on a truncated Jira pull. 18 of those 19 tickets were, in fact, still genuinely live. Nothing was lost (they were archived, not deleted), but this is a sharper version of the same root problem as the CFT/OTG blocker: acting confidently on a partial picture. Any tracker-sync process needs a sense-check step ("does this removal count look right relative to what I'd expect") before treating a bulk cleanup as final.

---

## Next Week Preview

### Top 3 Priorities (Draft)

1. **Close Sprint 5 honestly and name real carry-over** — 14 items were in QA as of Thursday's pull; Friday's `/archive` needs to state plainly what shipped vs. what's claimed shipped, especially given the CFT/OTG blocker's demo impact and OTEP-505 confirmed unresolved.
2. **Force a same-day resolution on OTEP-505 and #51** — both have now missed enough venues that "surface again next week" is not an acceptable default; needs a named owner or an explicit accepted-risk call, in writing, Monday morning.
3. **Name an owner for the CFT/OTG import blocker** — three consecutive days of restatement with no accountable owner is the single highest-risk open item heading into Sprint 6 planning.
4. **Decide on the 18 archived Core tickets** — confirm whether to restore them from `03-stories/jira-sync/Archive/OTEP-Core-13640-Sprint-5-34609-orphaned-2026-07-06/` back into the live Sprint 5 cache, since they were wrongly removed.

> Note: Run `/weekly-plan` to formalize these and add detail.

### Items to Unblock

| Item | Blocked Since | Blocked By | Action Needed |
|------|---------------|------------|----------------|
| OTEP-505 (Hao Eng's CFT sub-task) | 2026-07-07 | No backup assigned; confirmed still In Progress as of live pull, end of day 07-10 | Get an explicit decision Monday: assign now, or formally accept the delay into Sprint 6 |
| Search AC ownership (#51) | 2026-06-29 (S4 retro) | No single owner across Thomas/Amber/Rathika | Name Rathika (already the standing recommendation) in writing Monday, not at the next ceremony |
| CFT/OTG import blocker | 2026-07-07 | No accountable owner | Escalate to Rama/Pow Hwee Monday morning per Friday's cleanup recommendation |
| 18 wrongly-archived Core tickets | 2026-07-06 (cleanup ran), found 2026-07-10 | A prior sync pass acted on an incomplete Jira pull | Confirm restoration from the Archive folder back into the live Core Sprint 5 cache |

**Priority unblocks:**
1. CFT/OTG owner — highest-risk, newest, and now blocking a stakeholder demo
2. OTEP-505/#51 — both have exceeded reasonable carry-over and need an explicit same-day call, and OTEP-505 in particular is now a confirmed miss, not just a risk

---

*Generated: 2026-07-10 (updated end-of-day after `/stale-check` and `/jira-sync` runs)*
*Data sources: Weekly plan (2026-07-06-W28), daily plans (07-06 to 07-10), meeting notes and cleanups, open-items.md, decision records, live Jira pulls (Pathfinder + Core Sprint 5)*
*Next: Run `/weekly-plan` for next week — trackers already swept this session*
