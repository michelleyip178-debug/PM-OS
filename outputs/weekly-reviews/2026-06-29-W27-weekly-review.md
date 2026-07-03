---
week: 2026-W27
week_start: 2026-06-29
week_end: 2026-07-03
quarter: Q2/Q3 2026
---

# Weekly Review — Week of 29 June 2026 (W27)

## TL;DR

- **PRDs:** 1 major (R1 XFN Kickoff) advanced significantly — ATS World A→B revert, design-principle additions to Epics A/B, PSFG categorization update. 2 others touched (POCDEX x2).
- **Meetings:** 14 meeting-notes files produced this week — heaviest week of the quarter for meeting volume.
- **Completion rate:** 4 of 6 weekly-plan success metrics hit; SSOT session still not booked (biggest open miss).
- **Key win:** Open item #43 (ringfencing/Jobs filter BO sign-off) fully closed after weeks open — all 5 BO questions answered, Amber/Thomas unblocked.
- **Key challenge:** CMM scope pressure (#50) hit its 5th consecutive surfacing this week, now with external validation from ESG — still no leadership trade-off decision.
- **Recurring theme:** A ways-of-working retro this week named, as a team, the exact pattern showing up in R1's own history — slow decisions, scope changing late, thin documentation of discussion outcomes.

---

## Priority Review (vs. Weekly Plan)

### Priority 1: S5 Sprint Start — Demo + Board Health + Open Item Nudges

**Planned:** Dev env confirmed, demo runs Monday, #43 nudged, QA carry-ins have owners, SSOT session booked or escalated.

**Actual:** 🟡 Partial.
- ✅ #43 not just nudged — fully resolved by end of week (all 5 BO questions answered, Slack sent to Amber/Thomas).
- ✅ Sprint activity tracked across daily standups, squad syncs, and Sprint 6 grooming this week.
- ❌ SSOT session still not booked — this was flagged as a "nudge by Wed, escalate to Adrian if not moving" item. No evidence it was escalated. Carries forward as the same unresolved item for a second week.

**Learning:** #43 is a good example of a chase item that actually closed cleanly once BOs had the right questions in front of them — worth reusing that "batch the specific questions, don't just nudge generically" approach for the SSOT session, which has now been open across 2+ weeks without a forcing mechanism.

---

### Priority 2: KR Word Doc to Jace

**Planned:** Delivered by Thursday 2 Jul.

**Actual:** ✅ — checked in with Jace 2 Jul (per meeting notes); no explicit confirmation of the Word doc send itself in this week's files, but the Jace check-in happened on schedule.

---

### Priority 3: November Go-Live — Surface Formally to Jace

**Planned:** One-pager sent to Jace by Friday 4 Jul.

**Actual:** 🟡 — no dedicated "November brief" artifact found in this week's outputs. The Jace check-in (2 Jul) may have covered this verbally, but there's no written one-pager confirming the November framing landed. Worth confirming this didn't slip silently — the original risk ("Jace locks in October publicly before the brief lands") is still live if the artifact wasn't actually sent.

---

## Key Decisions Made

1. **Epic C reverts from ATS integration (World A) to OTEP-native status tracking (World B)** — D-030, 2026-07-03. Rationale: "ATS not ready until 2028." **Still unsourced** — flagged three separate times this week (PRD edit, SME review, PRD split) and never confirmed. This is the single biggest unresolved risk carried into next week.
2. **Open item #43 fully resolved** — ineligible-officer handling, message copy, no positive eligibility signal, and Jobs filter chip scoped to Careers@Gov, all confirmed by BOs.
3. **PSFG shifts from a binary MVP/R1.5 question to a categorization question** — WD verbally positioned PSFG as a standalone category (like STIPs/Gigs), committed to volume (3 evergreen + 10/year) and full OCC tagging. Formal policy sign-off from WD still outstanding.
4. **New-tab behavior for Opportunity cards** — Michelle claimed ownership of applying the existing new-tab decision to Opportunity cards, resolving an ownership gap flagged across two consecutive days (Sprint 6 grooming, then daily standup).
5. **FE capacity risk downgraded** — Thomas/Léo both full-stack, so single-FE bottleneck risk on Epics A/B/C moved from Red to Amber/watch-item.

---

## Metrics Movement

| Metric | Last Week | This Week | Note |
|---|---|---|---|
| Open item #43 | 🔴 Open (5 BO questions outstanding) | ✅ Resolved | Full resolution this week |
| Open item #50 (CMM scope pressure) | Surfaced 3x (as of W26 review) | Surfaced 5x total | ESG meeting added external-agency evidence; still no leadership decision |
| SSOT session (#18) | 🔴 Not booked | 🔴 Still not booked | Two weeks running with no forcing action |
| R1 PRD line count | — | 284 → grew again with Epic A/B design-principle additions | Deliberately split candidate-ideas content out to a linked analysis to manage bloat |
| Jira API token | 🔴 Expired (401 errors) | ✅ Rotated and verified working | Security note: token was pasted directly in chat — flagged for rotation, done |

---

## Top 3 Learnings

**1. Solutioning crept into PRD content, and the correction held.**
Added CIE-as-competency-inference detail directly into the R1 PRD's Epic A section, including specific mechanisms (author-suggestion vs. ingestion-fallback). Caught via direct question ("am I solutioning too much?") and correctly split into a separate Opportunity Solution Tree discovery doc. **Repeat:** when a design principle needs a "how," default to a linked discovery artifact, not inline PRD content — this is the second time this exact move was needed this week (candidate-ideas split, then the solution tree split).

**2. The unsourced "ATS not ready until 2028" claim never got resolved, despite three separate flags.**
This is a genuine process gap, not just a documentation nitpick — a single unverified date drove a full epic reversal (D-026→D-030), a new Red risk (undesigned manager UX), and a changed OKR measurement point. **Fix:** before this goes to the 9 Jul SteerCo, this needs a named source, not just another PRD footnote. Treat it as a blocking action item, not a standing caveat.

**3. The ways-of-working retro validated a pattern already visible in R1's own history.**
The retro named "requirements/scope change late," "key decisions postponed too long," and "discussion outcomes not captured in docs" as team-wide issues — independently confirming exactly what showed up in R1's decision-reversal chain and the ATS-2028 sourcing gap. **Implication:** this isn't a one-off PRD problem, it's systemic. Worth citing the retro explicitly if raising the ATS-sourcing issue at SteerCo, since it shows the team already recognizes the pattern.

---

## Next Week Preview

**Draft priorities:**
1. **Decide on #50 (CMM) escalation before/during 9 Jul SteerCo** — updated 2026-07-03 PM: this is now confirmed as the 5th consecutive surfacing (4 straight days), and today's ESG Clarification meeting is the first time the ask came with a concrete, named pilot-agency blocker rather than staying at the internal-governance level. Strongest evidence yet — this is no longer just "still pressure," it's a forcing case.
2. **Source the ATS-2028 claim** before the 9 Jul SteerCo — this is now overdue, not just open.
3. **Force the SSOT session (#18)** — two weeks unbooked; escalate to Adrian directly rather than nudging Ram again.
4. **Prep for 9 Jul SteerCo** — Mark's R1 sign-off happens there; R1 PRD is in good shape but carries the ATS-sourcing risk and the still-unresolved PSFG governance question into that conversation.

**Items to unblock:**

| Item | Blocked Since | Blocked By | Action Needed |
|---|---|---|---|
| SSOT session (#18) | 2 weeks | Ram hasn't scheduled | Escalate to Adrian directly, don't nudge again |
| CMM scope pressure (#50) | 5 meetings, no decision | No forcing mechanism to leadership | Single tracked escalation to Mark/Gek Khiang — now with a concrete ESG pilot-agency blocker as evidence (added 2026-07-03 PM), stop resurfacing per-meeting |
| ATS-2028 source | 3 flags, still unsourced | Unclear who owns the ATS roadmap | Name the system owner and confirm directly before SteerCo |
| November go-live brief to Jace | Unclear if sent | No written artifact found this week | Confirm whether this actually landed or silently slipped |
| New-tab / Opportunity-card ownership | 2 days (Sprint 6 Grooming 2 Jul → Standup 3 Jul) | No owner assigned despite decision being final | Michelle to assign, likely Thomas — cheapest unresolved fix this week |
| Monday 6 Jul scheduling collision | Flagged in Squad Sync 3 Jul | Rama has 2 action items + Pow Hwee's QA sit-down all targeting same day | Confirm these aren't competing for the same room/people before Monday |

> Run `/stale-check` to sweep hub trackers before Monday, then `/weekly-plan` to formalize next week's priorities.

---

*Generated: 2026-07-03. Updated 2026-07-03 (PM) — folded in cross-meeting findings from same-day `/meeting-cleanup` (Squad Sync, Ways of Working Retro, Daily Standup, OTEP Clarification with ESG): #50 evidence strengthened, new-tab ownership gap and Monday scheduling collision added.*
*Data sources: W27 weekly plan, daily plans (29 Jun–3 Jul), 14 meeting-notes files, R1 PRD + linked analyses, open-items.md, cleanup-2026-07-03.md*
*Next: Run `/stale-check`, then `/weekly-plan` for W28*
