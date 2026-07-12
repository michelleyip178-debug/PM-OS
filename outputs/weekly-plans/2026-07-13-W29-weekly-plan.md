---
week: 2026-W29
week_start: 2026-07-13
week_end: 2026-07-17
quarter: Q2/Q3 2026
---

# Weekly Plan - Week of July 13, 2026

## TL;DR

- **Top 3:** (1) Force same-day resolution on OTEP-505 and #51 — both missed every venue last week, (2) Get real due dates on the job family/function mapping risk before it becomes UAT's problem, (3) Close Sprint 5 honestly and roll the hub trackers forward to Sprint 6
- **Meeting load:** Unknown — Calendar MCP isn't connected this session. Fill in the meeting table below manually or run `/connect-mcps connect to google-calendar`.
- **Key milestone:** Sprint 6 (13–26 Jul, no retro this sprint — async check-in only) starts today with `sprint-status.md` still showing Sprint 5 as ACTIVE. Nothing this week should be planned against a live tracker until it's rolled forward.

---

## Strategic Context

**Quarter Goal:** Ship OTEP MVP on track for Nov go-live; UAT starts 11 Aug (Profile + Opportunities modules) — a hard, external date that doesn't move.

**North Star Progress:** MVP phase target is "establish baseline for pilot cohort" (Dec 2026) — not yet in measurement, still in build/UAT-prep phase.

**This Week's Focus:**
Last week ended with two structural failures: two open items (OTEP-505, #51) that were named "must resolve today" and slipped anyway, and a Sprint 6 planning session that surfaced a 🔴 Critical data-mapping risk with zero due dates attached. Both are the same failure mode — a named risk without a forcing function. This week's job is to not repeat it with four weeks less runway before UAT.

---

## Top 3 Priorities

### Priority 1: Force Same-Day Resolution on OTEP-505 and Search AC Ownership (#51) ⭐ Most Important

**Why this matters:**
- Advances: Delivery integrity going into Sprint 6 — carrying unresolved risk forward compounds, as last week proved directly.
- Impact: OTEP-505 (Hao Eng's CFT sub-task) has been In Progress and unmoved since 07-07. Search AC ownership (#51) has now missed 4+ venues (30 Jun standup, Wed design review, Wed grooming, all of last week).
- Risk if not done: This becomes a 5th and 6th miss. The weekly review from last week already names the fix: these need to be the literal first task of the day, not a bullet next to bigger work.

**Success looks like:**
- OTEP-505: an explicit decision in writing — assigned to a named owner, or formally accepted as a Sprint 6 carry-over risk. Not "still pending."
- #51: Rathika (standing recommendation) named in writing as AC owner, or a stated blocker for why not.

**Key tasks:**
- [ ] Get Hao Eng's status on OTEP-505 first thing Monday — she was due back 07-10 (Est: 30 min)
- [ ] Post in writing (Slack/Jira comment) naming Rathika as #51 owner, or surface the real blocker (Est: 15 min)
- [ ] Update open-items.md #52/#51 with the resolution, don't let it sit as "🔴 Open" through another week (Est: 15 min)

**Dependencies:**
- Needs from: Hao Eng (OTEP-505 status), Rathika/Thomas/Amber (#51 sign-off)
- Blocks: Sprint 6 planning integrity — carrying two unresolved items in as "still pending" repeats last week's pattern

**Linked to:**
- Open items #51, #52 (`00-hub/open-items.md`)
- [2026-07-10-W28-weekly-review learnings](../weekly-reviews/2026-07-06-W28-weekly-review.md)

---

### Priority 2: Get Real Due Dates on the Job Family/Function Mapping Risk

**Why this matters:**
- Advances: UAT readiness — UAT starts 11 Aug, and this is the single 🔴 Critical risk from Thursday's Sprint 6 planning session with zero dates attached to any action item.
- Impact: If unresolved, UAT participants report data-quality issues instead of validating user journeys — the exact failure mode the planning session flagged.

**Success looks like:**
- Adrian Lo's one-pager (job family/function mapping design) has a real due date.
- Product/Data Team's master-data validation work has a real due date.
- The "2 weeks" vs. "11 Aug–4 Sep" UAT window discrepancy is resolved before it repeats in a status update or SteerCo framing.

**Key tasks:**
- [ ] Follow up with Adrian Lo directly for a committed date on the one-pager (Est: 30 min)
- [ ] Push Product/Data Team for a date on master-data validation (Est: 30 min)
- [ ] Clarify UAT window framing with the room before it propagates further (Est: 30 min)
- [ ] Check whether "opportunities + courses share a common functional taxonomy" (new direction from Thursday) conflicts with existing OTG/C@G taxonomy work (#41, #49) (Est: 1 hr)

**Dependencies:**
- Needs from: Adrian Lo, Product/Data Team
- Blocks: Confident competency matching and recommendation logic; UAT data quality

**Linked to:**
- [2026-07-09-W28-sprint6-planning-programme-alignment.md](../archive/2026-W28/meeting-notes/2026-07-09-W28-sprint6-planning-programme-alignment.md)
- Open items #41, #49

---

### Priority 3: Close Sprint 5 Honestly and Roll Trackers Forward to Sprint 6

**Why this matters:**
- Advances: Tracker integrity — `sprint-status.md` still shows Sprint 5 as ACTIVE even though it closed Friday and Sprint 6 (13–26 Jul) started today. Last week's `/jira-sync` also found the Core board cache had wrongly archived 18 live tickets on incomplete data.
- Impact: Planning against a stale tracker risks repeating the same "acted confidently on a partial picture" failure from last week.

**Success looks like:**
- `sprint-status.md` reflects Sprint 5 CLOSED with an honest final state (14 items were in QA as of the last pull — state plainly what shipped vs. carried).
- Sprint 6 section populated from a live pull, not just the existing `Sprint-34620-OTEP-Pathfinder-Sprint-6` cache folder.
- Decide on the 18 wrongly-archived Core tickets (restore from Archive folder or confirm they stay out).

**Key tasks:**
- [ ] Run `/jira-sync` for both Pathfinder and Core boards (Core was skipped last pass) (Est: 45 min)
- [ ] Run `/archive` for Sprint 5 final state, be explicit about QA carry-over count (Est: 30 min)
- [ ] Confirm restoration (or not) of the 18 archived Core tickets (Est: 30 min)
- [ ] Confirm OTEP-130 scope cut with Pow Hwee before Sprint 6 planning commits it (#57) (Est: 30 min)

**Dependencies:**
- Needs from: Pow Hwee (OTEP-130 confirmation)
- Blocks: Accurate Sprint 6 planning; trustworthy `/sprint-pulse` and `/daily-plan` outputs all week

**Linked to:**
- `00-hub/sprint-status.md`, `00-hub/open-items.md` #57
- [2026-07-06-W28-weekly-review](../weekly-reviews/2026-07-06-W28-weekly-review.md) — "Next Week Preview" section

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| CareerCompass R1 | SteerCo sign-off (held 09 Jul) | Confirmed scope, ready for grooming | Confirm Mark's formal sign-off landed at Thursday's SteerCo (open item #40) |
| POCDEX Authorisation XFN | XFN kickoff done | Awaiting data-flow answers | Chase #55 (Huiting), #56 (POCDEX sync cadence) — both still open, no answers as of last check |
| CAG Ingestion Job Family Passthrough | Story drafted | — | Feeds directly into Priority 2's job family/function mapping risk |

---

## Key Meetings

*Calendar MCP not connected this session — fill in manually or run `/connect-mcps connect to google-calendar` for auto-population.*

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | Standup / squad sync | Push OTEP-505 and #51 to resolution | Y — Priority 1 |
| Thu | Sprint 6 mid-point check-in (async, no retro this sprint) | — | — |
| Fri | Weekly review + `/stale-check` | Close the loop on this week's priorities | Y |

**Meeting load:** Unknown — recommend filling in from calendar before Monday standup.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Hao Eng may still be unreachable or OTEP-505 may need more than a same-day call.
  - **Mitigation:** If no resolution by Monday midday, escalate to Pow Hwee for a formal accept-the-risk decision — don't let it drift a 4th day.
- **Risk:** Adrian Lo and Product/Data Team don't commit to real dates (same pattern as two planning sessions running).
  - **Mitigation:** Frame the ask around the fixed UAT date (11 Aug) rather than an open-ended request — a hard external deadline is harder to deflect than "when you get a chance."
- **Risk:** `sprint-status.md` rollforward surfaces more cache drift (per last week's 18-ticket archiving error), eating into Priority 1/2 time.
  - **Mitigation:** Timebox the sync to 45 min; if deeper issues surface, log them as a follow-up rather than let tracker hygiene crowd out the two higher-priority items again.

**Capacity concerns:**
- If Priority 3 (tracker sync) runs long, defer the OTEP-130/Pow Hwee confirmation to early next week rather than let it delay Priority 1 or 2 — those two carry the highest risk of repeating last week's exact failure.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] OTEP-505 final call — flagged "must resolve today" for 4 consecutive days last week (07-07 through 07-10), never resolved
- [ ] Search AC ownership (#51) — 4+ missed venues, never resolved
- [ ] `/archive` and `/retro` for Sprint 5 — listed on Friday's daily plan but no output file exists yet; Sprint 5 close was not actually run
- [ ] CFT/OTG import blocker — surfaced 3 consecutive days last week (07-07, 07-08, 07-10) with no owner named; not explicitly addressed above and needs a check-in Monday
- [ ] 18 wrongly-archived Core tickets — found Friday, restoration decision not yet made

**Learnings applied:**
- Naming a risk in a plan doesn't prevent it — only a same-day forcing function does → Priority 1 tasks are now framed as "first thing Monday," not just listed
- What worked for SteerCo (source before the meeting) needs to extend to daily standups → Priority 2's job-date chase is framed as proactive sourcing, not another restatement
- A sync that runs on incomplete data can do more damage than no sync → Priority 3 includes an explicit sense-check step before treating the Sprint 6 rollforward as final

---

## Success Metrics

**How we'll know this week was successful:**
1. OTEP-505 and #51 both have an explicit, written resolution by Tuesday — not carried into a 5th/6th miss
2. Adrian Lo and Product/Data Team have real calendar dates attached to the job family/function mapping work
3. `sprint-status.md` accurately reflects Sprint 6 as active with Sprint 5 honestly closed, verified against a live Jira pull

**Leading indicators to track:**
- Whether OTEP-505/#51 resolution actually holds by Wednesday standup (last week it was "resolved" in intent but not in writing)
- Whether the CFT/OTG blocker gets a named owner this week — it's the one open risk from last week not fully covered by the top 3 priorities above

---

## This Week's Strategic Skill

**Suggested:** `/sprint-check`

**Why this week:** Sprint 6 just started with a 🔴 Critical data-mapping risk and no dated action items, and the hub tracker itself is stale (still showing Sprint 5 as active). A pre-planning-style shelf check now — even mid-sprint — surfaces whether Sprint 6's Ready shelf has real depth or is inheriting the same undated risk from Thursday's planning session.

**When to run:** After Priority 3's `/jira-sync` lands (so it reads live data), ideally by Wednesday.

**What you'll get:** A read on Ready shelf depth vs. velocity-derived buffer, plus explicit flags on dependency traps — which should catch the job family/function mapping risk if it's still undated by then.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, ceremonies, and open risks. Run these to keep delivery smooth and prevent gaps from accumulating.*

| When | Skill | Why |
|------|-------|-----|
| Monday, first thing | `/stale-check` | Hub trackers (sprint-status.md) are confirmed stale — Sprint 5 still shown ACTIVE post-close; needs a sweep before anything else is planned against it |
| Monday–Tuesday | `/jira-sync` | Core board sync was skipped last pass; Pathfinder Sprint 6 folder exists but hasn't been confirmed against a live pull yet |
| Before any Sprint 6 story work is scoped | `/feature-metrics` | Confirm success metrics are defined for stories moving In Progress this sprint, especially anything touching competency matching (Priority 2's dependency) |
| Wednesday (pre) | `/sprint-check` | Mid-sprint shelf-depth and dependency-trap check, given the undated 🔴 Critical risk from Thursday's planning session — see Strategic Skill above |
| If POCDEX data requirements session gets scheduled (#55) | `/status-update` or `/slack-message` | Rama's draft response to Huiting due "week of 13 Jul" — this is this week |
| ⚠️ Critical — Friday | `/weekly-review` | Non-negotiable close of the loop on this week's priorities |
| ⚠️ Critical — Daily | `/stale-check` | Non-negotiable daily tracker sweep, especially urgent this week given confirmed cache drift |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- ⚠️ Critical items flagged where skipping creates a delivery risk.
- This list is not exhaustive — it's the minimum set to prevent gaps given this week's specific context.

---

*Generated: 2026-07-13*
*Next: Run `/daily-plan` each morning to execute against this plan*
