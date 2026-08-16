---
week: 2026-W33
week_start: 2026-08-10
week_end: 2026-08-14
quarter: Q2/Q3 2026
---

# Weekly Plan - Week of August 10, 2026

## TL;DR

- **Top 3:** (1) Force a direct decision on the PS/DS 7-week timeline proposal — don't let it drift a second week. (2) Land Gate 2 of Internal UAT go-ahead and broadcast to the wider team so Batch 1 UAT actually scales this week. (3) Name an owner and date for WOG AD re-enable (OTEP-71) before Sprint 8 planning locks scope.
- **⚠️ Monday 10 Aug is a public holiday (National Day, observed)** — this is a 4-day work week (Tue–Fri). All "Monday" asks below are shifted to Tuesday morning.
- **Meeting load:** Sprint 8 starts Tuesday (feature freeze sprint, shifted from the holiday) — expect Design Review, Backlog Grooming (Thu), plus ongoing UAT coordination, compressed into 4 days. Heavier than a normal week; kept to 3 priorities.
- **Key milestone:** Sprint 8 is the feature-freeze sprint (11–21 Aug). **Update 2026-08-11: Sprint 8 is now confirmed as end of development — the last dev sprint, not a freeze-then-mop-up-in-S9 pattern.** Whatever ships by 24 Aug either ships for MVP or doesn't. UAT Batch 1 is live and needs clean data before it scales.

---

## Strategic Context

**Quarter Goal:** Ship Sprint 7/8 scope toward UAT (started 11 Aug for Profile + Opportunities), feature freeze end of Sprint 8 (21 Aug). MVP timeline itself is in flux — a pending PS/DS note proposes pushing go-live from early Oct to end Nov 2026.

**North Star Progress:** Sprint mechanics on track (Sprint 7 closed 23 Done/8 In Progress/8 QA), but the sprint's own stated core deliverable (WOG AD login replacing Keycloak) shipped late and was formally descoped from UAT Batch 1.

**This Week's Focus:**
Two things are colliding: Sprint 8 is the feature-freeze sprint, so whatever doesn't land this week either ships in the final Sprint 9 mop-up or slips past MVP. **Correction (11 Aug): there is no Sprint 9 dev mop-up — Sprint 8 is confirmed end of development.** This raises the stakes on Sprint 8 considerably: anything not done by 24 Aug is out for MVP, full stop, not deferred one more sprint. At the same time, UAT went live over the weekend with real momentum (Core team's internal UAT complete as of Sunday) but is one unconfirmed gate away from being safe to broadcast wider. This week is about not losing either thread: closing the PS/DS decision that's now missed one full week, and converting weekend UAT momentum into a clean, broadcast-ready test wave without wasting new testers' first sessions on stale data. **New thread this week: confirm what Thursday's Backlog Grooming and today's Design Review are actually grooming/reviewing for, if not a Sprint 9 dev sprint** — see Heads Up below.

---

## Top 3 Priorities

### Priority 1: Process Mark's PS/DS Timeline Review and Close the Decision ⭐ Most Important

**Updated Tuesday 11 Aug:** This moved from a stalled chase to an active, dated commitment. Mark has the PS/DS note, requested time to review, and confirmed he'll revert with comments/edits by end of day Tuesday. **Correction on ownership:** approval authority sits with Mark, not Rama — same pattern as R1 scope sign-off (`open-items.md` #40), which also cleared through Mark rather than being resolved at squad level. Rama is the conduit/follow-up, not the decision-maker.

**Why this matters:**
- Advances: Quarter goal (every downstream date — UAT, VAPT, go-live, Release 1 — stays unconfirmed until this lands)
- Impact: This is the second week in a row this exact item has failed to resolve through the standing meeting cadence. Last week's review named it explicitly: "worth naming explicitly: standups and squad syncs are not the forum for this kind of single-owner decision; it needs a scheduled 1:1 ask, not another mention in a group setting." Tuesday's update shows that fix working — Mark is engaged with a committed date, not silent.
- Risk if not done: If Mark's edits land late Tuesday and aren't processed same-day, the week loses its one clean shot at closing this before Wednesday's ceremonies and Thursday's grooming lock in assumptions against a stale timeline.

**Success looks like:**
- Mark's comments/edits received and read same-day (Tuesday), not queued for Wednesday
- `/decision-doc` run on the actual live question — "do we accept the 7-week MVP delay?" — incorporating whatever Mark's edits change, not the now-moot 16 Oct vs 23 Oct framing
- `risks.md` / `open-items.md` #39 updated with the confirmed (not pending) timeline, same day if possible

**Key tasks:**
- [x] Direct ask sent — resolved via Mark: he has the note and committed to EOD Tuesday review (originally scoped as a Rama ask; corrected once actual approval ownership surfaced)
- [ ] Hold a block Tuesday evening to receive and act on Mark's comments/edits immediately — this is a same-day turnaround, not a next-morning read
- [ ] Run `/decision-doc` on the revised-timeline question incorporating Mark's edits (Est: 1.5 hrs, Tuesday evening or Wednesday first thing)
- [ ] Update `risks.md` and `open-items.md` #39 to reflect confirmed dates, cascading to UAT/VAPT/go-live/onboarding wave rows (Est: 1 hr)
- [ ] Fold in the two independent flags from the MVP timeline RAID (2026-08-11-W33) while updating the tracker: VAPT Round 2 retesting has a broken date range (needs a board-owner fix regardless of PS/DS outcome), and the Go-Live/IDSC clearance epic has zero scheduling — both cheap to raise now, expensive to discover in October
- [ ] If Mark's comments don't land by end of Tuesday, escalate to a firm ETA Wednesday morning rather than letting it slide into a third day (Est: 15 min)

**Dependencies:**
- Needs from: Mark — review comments/edits (committed EOD Tuesday); Rama — conduit/scheduling only, not the decision
- Blocks: Every other timeline-dependent row in risks.md/open-items.md, Sprint 8/9 planning assumptions, VAPT scope conversations

**Linked to:**
- Decision doc: [2026-08-09-W32-decisions-made-today.md](../decisions/2026-08-09-W32-decisions-made-today.md) (item 1, flags this as unresolved)
- MVP Timeline RAID: [2026-08-11-W33-mvp-timeline-raid.md](../analyses/2026-08-11-W33-mvp-timeline-raid.md) (D1/I1, ranked #1 priority to resolve)
- Risk tracker: `PM-skills-ALL-1/00-hub/risks.md` (VAPT row, flagged pending)
- Open items: `PM-skills-ALL-1/00-hub/open-items.md` #39

---

### Priority 2: Close UAT Gate 2 and Broadcast Batch 1 Access to the Wider Team

**Why this matters:**
- Advances: UAT quarter milestone — Sprint 8 is feature-freeze week, and UAT needs to actually scale this week to stay on schedule for the 21 Aug freeze
- Impact: Weekend momentum (Core team's internal UAT declared complete Sunday) is real progress, but broadcasting on Gate 1 alone risks new testers hitting stale Jira tickets and filing false defects right when UAT needs a clean signal
- Risk if not done: If Gate 2 isn't confirmed and the team broadcasts anyway (or waits indefinitely without escalating), either wasted tester cycles or lost momentum — the decision doc already flagged this as a same-day ask, not an open-ended wait

**Success looks like:**
- Rama confirms Gate 2 (Jira tickets updated with current test data) explicitly — not inferred from the Gate 1 message
- Ticket/account locations broadcast to the wider team per Adrian's standing ask, same day as Gate 2 confirmation
- The two open oppties test case failures (36/38) triaged with owners assigned, and the "closing soon" C@G defect checked against Thomas's Friday finding to confirm duplicate-or-not

**Key tasks:**
- [ ] Message Rama directly Tuesday morning for explicit Gate 2 status (Est: 15 min, same-day ask per the decision doc — shifted from Monday since it's the public holiday; weekend momentum makes this the first priority when work resumes)
- [ ] Broadcast ticket/account locations to the wider team once Gate 2 confirms (Est: 30 min)
- [ ] Assign an owner to the logic-clarification test case (36 or 38) and confirm/rule out the "closing soon" defect as a duplicate of Thomas's Friday closing-date bug (Est: 1 hr, with Thomas/Pow Hwee)
- [ ] Confirm the otep-web/otep-service restart (admin access fix) happened cleanly with no disruption (Est: 15 min, check with Pow Hwee)

**Dependencies:**
- Needs from: Rama (Gate 2 confirmation), Thomas/Pow Hwee (duplicate defect check)
- Blocks: Wider UAT execution ramp-up, clean UAT signal for Sprint 8 feature-freeze decisions

**Linked to:**
- Decision doc: [2026-08-09-W32-uat-access-broadcast-timing.md](../decisions/2026-08-09-W32-uat-access-broadcast-timing.md)
- Meeting notes: [2026-08-08-W32-psd-pdo-otep-int-saturday-recap.md](../meeting-notes/2026-08-08-W32-psd-pdo-otep-int-saturday-recap.md)
- RAID log: [2026-08-07-W32-raid-log.md](../analyses/2026-08-07-W32-raid-log.md)

---

### Priority 3: Name an Owner and Re-Enable Date for WOG AD Login (OTEP-71) Before Sprint 8 Locks

**Update 2026-08-11:** Sprint 8 goal is now confirmed — *"Clean up defects from Phase 1 UAT and enable Phase 2 UAT on Ringfencing and Competency Matching."* WOG AD isn't named in the goal itself, which sharpens the risk: it's the kind of unowned carry-over item that could slip underneath a goal about defect cleanup rather than auth. The three WOG AD-adjacent tickets (OTEP-110, 594, 331) are all unassigned and sitting in active Sprint 8 columns.

**Update 2026-08-11 (later, same day):** Reframed — a fix ticket has been raised, and resolution sits outside Pathfinder's control. This is no longer an internal ownership ask to push on Léo; it's an external dependency to track. **Follow-up scheduled for Thursday 13 Aug** (same day as Backlog Grooming) to check ticket status/ETA.

**Why this matters:**
- Advances: Sprint 8 planning integrity — Sprint 8 is the feature-freeze sprint, and WOG AD carrying into it "at minimum" (per last week's review) with no named owner risks the same unowned drift that cost re-discovery time on the routing item last week
- Impact: Applies last week's own validated learning — naming a single explicit owner (Rama, for routing/VAPT) broke a pattern that had cost time across 3-4 meetings. Same fix, applied proactively this time instead of reactively after 3+ misses.
- Risk if not done: WOG AD stays informally "next sprint" with no firm date, and Batch 2+ UAT scope (real WOG AD flow vs. continued Keycloak) stays undecided going into feature freeze

**Success looks like:**
- Confirmed owner of the external fix ticket and a rough ETA (not a firm Pathfinder-side commitment, since it's outside the squad's control)
- A decision on whether Batch 2+ UAT runs on Keycloak or waits for real WOG AD
- Thursday follow-up actually happens, with an update logged either way (resolved, still pending, or escalated)

**Key tasks:**
- [x] ~~Raise WOG AD re-enable ownership at Tuesday's Squad Sync/Design Review~~ — superseded: root cause diagnosed (public IP resolution issue), domain fix decided by Pow Hwee, ticket raised and now external to Pathfinder (2026-08-11)
- [ ] Light-touch check on ticket owner + ETA (Tuesday, done) — no firm date obtainable since it's outside Pathfinder's control
- [ ] **Thursday 13 Aug: follow up on WOG AD fix ticket status** — check progress, get an updated ETA if any, escalate to Rama/Adrian if still no visibility (Est: 15 min)
- [ ] Decide and document whether Batch 2+ UAT proceeds on Keycloak or waits for WOG AD (Est: 30 min) — informed by Thursday's follow-up

**Dependencies:**
- Needs from: Léo (OTEP-71/444 status and estimate)
- Blocks: Sprint 8 scope clarity, Batch 2+ UAT auth path decision

**Linked to:**
- RAID log: [2026-08-07-W32-raid-log.md](../analyses/2026-08-07-W32-raid-log.md) (WOG AD flagged 🔴 Critical, unassigned)
- Decisions log: [2026-08-09-W32-decisions-made-today.md](../decisions/2026-08-09-W32-decisions-made-today.md) (item 4)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| CareerCompass R1 | Post-sign-off (Mark, 9 Jul SteerCo) | Detailed grooming | 3 named blockers (agency-admin auth, pre-fill data contract, manager UX design) still need owners/dates per the manager briefing's ask. **New (11 Aug):** Designers committed to returning with the R1 plan by Wed 12 Aug — open-items #59, first dated commitment on the 4 R1 planning artefacts from the 6 Aug meeting. Confirm scope (Critical Path Timeline vs. narrower design input) before it lands. |
| Opportunity Taxonomy / Data Quality | Planning Review | Confirm scope | No blocking action flagged this week — monitor |
| POCDEX Authorisation | **Transferred to Core team (11 Aug)** | Closed on this pipeline | No action needed — Core team's own tracker already covers this and the 11 Aug data field freeze. Removed from active PM-OS tracking. |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon (10 Aug) | 🚫 Public holiday — no work | National Day (observed) | N/A |
| Tue | Standup / UAT check-in + Sprint 8 start + Design Review | Confirm Gate 2, restart status, weekend triage, AND Sprint 8 kickoff/feature-freeze framing — compressed into one day. **Update: with Sprint 8 confirmed as end of development, Design Review shifts from "S9+ stories" to R1 — designers and PMs move focus to R1 starting now, not a follow-on MVP sprint.** | Y — have Rama ask ready to send first thing; light-touch check on the WOG AD fix ticket owner/ETA (external dependency, not an ownership push) |
| Wed | Mid-week check | PS/DS escalation checkpoint if no answer by now, AND designers return with R1 plan (open-items #59) — **now clearly R1, not MVP follow-on, given no Sprint 9** | Y — escalation message drafted in advance; confirm with designers beforehand what "the R1 plan" covers so Wednesday's handoff isn't a surprise |
| Thu | Backlog Grooming + WOG AD fix ticket follow-up | **Reframed: not Sprint 9 (doesn't exist) — this is R1 grooming**, since designers/PMs are moving to R1 now that Sprint 8 is confirmed as MVP's last dev sprint. **Also: scheduled check-in on the WOG AD fix ticket** (open-items #26) — status, ETA if any, escalate to Rama/Adrian if still no visibility. | Y — confirm with Rama/Adrian this is explicitly R1 scope, not leftover MVP stories with nowhere to land |
| Fri | Sprint/weekly wrap | Confirm week's 3 priorities landed | N |

**Meeting load:** Moderate-heavy for a 4-day week — Tuesday alone absorbs both UAT triage and Sprint 8 kickoff ceremonies, which would normally be split across Monday/Tuesday.

**Deep work capacity:** Very limited Tuesday (compressed double-duty day); more available Wed-Thu. Plan Tuesday as reactive/coordination-heavy, not a day to expect deep work.

**Protected block this week:** **Wednesday 2-4pm — no meetings.** Last week's protected block did not survive the week (no evidence in daily plans it was used as intended — Priority 1 resolution happened reactively on Friday instead). This is the second time in recent weeks a named block hasn't held. With Tuesday now overloaded by the holiday-compressed schedule, Wednesday's block is under even more pressure to hold — if it fills up reactively again, that's a pattern worth raising directly rather than re-naming a third block next week.

---

## Strategic Pillar Balance

| Pillar | This Week's Time | Last Week | Trend |
|--------|------------------|-----------|-------|
| UAT/Delivery execution | 45% | ~40% | ↑ Increasing (Sprint 8 feature freeze + live UAT) |
| Timeline/stakeholder decisions | 30% | ~20% | ↑ Increasing (PS/DS decision now second-week carry) |
| Sprint 8 scope integrity (WOG AD, ownership) | 25% | ~15% | ↑ Increasing (proactive, applying last week's owner-naming learning) |

**Balance check:**
This week leans harder into decision-forcing and delivery than usual — appropriate given feature freeze starts Tuesday and one decision has now missed two weeks. Watch that this doesn't crowd out any protected thinking time entirely; the Wednesday block is deliberately placed after the highest-density Mon-Tue window.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Rama is the owner of both Priority 1 (PS/DS) and part of Priority 2 (Gate 2) — a single point of contention if he's unavailable or slow to respond.
  - **Mitigation:** Escalate both asks by Wednesday if no response, rather than waiting on the same person for two critical-path items simultaneously.

- **Risk:** Sprint 8 ceremonies (Tue Design Review, Thu Grooming) compress the week's execution time right when UAT also needs active coordination.
  - **Mitigation:** Treat Priority 3 (WOG AD ownership) as a 15-30 min ask embedded in Tuesday's existing ceremony rather than a separate meeting.

**Capacity concerns:**
None flagged as over-committed, but this is a 3-for-3 week where all three priorities depend on getting direct answers from other people (Rama, Léo) rather than being fully in Michelle's own control — track response times closely from Monday.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] PS/DS approval status confirmation — carried directly into Priority 1, now sharper (concrete decision: accept or reject the 7-week delay)
- [ ] WOG AD re-enable plan — carried into Priority 3, now with explicit ownership-naming urgency given Sprint 8 start
- [ ] Core team's Course UI page update (ahead of 18 Aug CSC test) — not a top-3 this week (11 days of runway), but worth a lightweight check-in mid-week so it doesn't go from "early" to "late" unnoticed
- [ ] Account creation for DLEid/JumpStart UAT — still unassigned per Friday's RAID log; cheap fix, folding into Priority 2's UAT triage rather than a separate priority

**Learnings applied:**
- Last week: standing meetings failed twice to resolve the VAPT/PS/DS question → this week's Priority 1 explicitly calls for a direct 1:1 ask, not a third meeting mention.
- Last week: naming a single owner (Rama, routing) broke a multi-meeting stall → Priority 3 applies this proactively to WOG AD before it repeats the same unowned drift.
- Last week: protected block didn't survive contact with the week → flagged explicitly again this week rather than silently re-naming it.

---

## Success Metrics

**How we'll know this week was successful:**
1. PS/DS timeline status is confirmed (not pending) by Friday, with a decision doc on record
2. Wider UAT broadcast has gone out, and no first-session tester reports reference stale data or wrong tickets
3. WOG AD has a named owner and a firm re-enable date going into Sprint 8's second week

**Leading indicators to track:**
- Whether Rama responds to the direct PS/DS ask within 2 days (by Wednesday) — if not, escalation triggers automatically per this plan
- Whether the Wednesday protected block actually holds this time

---

## This Week's Strategic Skill

**Suggested:** `/decision-doc`

**Why this week:** The PS/DS timeline question is the same item that missed its critical-skill recommendation last week — it was flagged for `/decision-doc` and never ran because the question got overtaken by events before Michelle could act. This week the question is concrete and answerable (accept or reject the 7-week delay), so there's no reason for a second miss.

**When to run:** Immediately after Rama confirms PS/DS approval status — ideally by Wednesday, escalate if not.

**What you'll get:** A documented, defensible record of the decision (accept/reject/defer) with rationale, so the cascading date changes (UAT, VAPT, Release 1, onboarding waves) have a single source of truth instead of being inferred from a Slack thread.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, ceremonies, and open risks. Run these to keep delivery smooth and prevent gaps from accumulating.*

| When | Skill | Why |
|------|-------|-----|
| Monday, before standup | `/decision-doc` (once PS/DS status confirmed) | ⚠️ Critical — second-week-carry item, this is the forcing function |
| Tuesday (Sprint 8 start) | `/sprint-check` | ⚠️ Critical — pre-planning brief for the last MVP dev sprint, flag dependency traps (WOG AD chain) before they run out of runway entirely (no Sprint 9 to absorb slippage) |
| Thursday (Backlog Grooming) | `/grooming-close` | ⚠️ Critical — **reframed:** grooming R1 stories, not Sprint 9 (doesn't exist) — gate to DoR and confirm this is explicitly R1 scope with Rama/Adrian, not orphaned MVP work |
| Ongoing this week | `/stale-check` | High — daily sweep, especially given how fast risks.md/open-items.md #39 is moving right now |
| Friday | `/weekly-review` | ⚠️ Critical — non-negotiable close of the loop, check whether the Wednesday block actually held |
| Mid-week | `/status-update` | High — UAT is live and stakeholders (Adrian, Data Office) are waiting on confirmations (Gate 2, purge confirmation back to Grace Gan/Huiting) |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- `/sprint-check` and `/grooming-close` are flagged ⚠️ Critical because Sprint 8 is the feature-freeze sprint — skipping either risks locking in scope gaps (like WOG AD) without a deliberate call.
- This list is not exhaustive — it's the minimum set to prevent this week's specific risks (PS/DS drift repeating a third time, UAT broadcast going out on incomplete data) from compounding.

---

*Generated: 2026-08-09*
*Data sources: Last week's review (2026-08-07-W32), Saturday/Sunday UAT recap and decision docs (2026-08-08/09), RAID log (2026-08-07-W32), open-items.md/risks.md (PM-skills-ALL-1/00-hub), sprint calendar and sprint-status.md*
*Next: Run `/daily-plan` each morning to execute against this plan*
