---
week: 2026-W23
week_start: 2026-06-02
week_end: 2026-06-06
quarter: Q2 2026
---

# Weekly Review — Week of 2 June 2026

## TL;DR

- **Sprint 3 launched** — 49 issues, running but 🔴 off track on sprint goal (filters + apply both still Backlog day 4)
- **Ceremonies:** Demo ✅, Grooming ✅ (with gap — S4 C@G stories unsized), Retro ✅
- **Decisions shipped:** 10+ this week — biggest: OTEP-88 AC rewrite, tiered ingestion rules (Léo), OKR two-track approach (GK + Mark)
- **Key win:** Ringfencing scope fragmentation resolved — OTEP-127 redrafted, OTEP-390 created, OTEP-133 absorbed. Came out of today clean.
- **Key miss:** WOG Auth metrics to Adrian — carried from W22, dropped this week (confirmed not required). Three P0 bookings (Fabian, Daryll, S4 grooming) still unbooked at week close.
- **July SteerCo prep:** three new deliverables surfaced today with no owners — transition plan, North Star brief, gap analysis options. This is the most important thing to resolve in Week 24.

---

## Priority Review

### Priority 1: Sprint 3 launch + close WoW overdue items — 🟡 Partial

**Planned:** Three WoW overdue items sent before Sprint 3 standup; Sprint 3 engineers running by EOD Tuesday.

**Actual:**
- ✅ Sprint 3 launched — 49 issues picked up, team running
- ✅ Design locked Wed 3 Jun (Amber sign-off confirmed)
- ✅ WOG Auth metrics to Adrian — confirmed not required this week (dropped, not a miss)
- ✅ OTEP-87 AC rewritten and synced to Jira
- ✅ Sprint 2 Demo ran successfully — Pathfinder showed login → listing → detail on real OTG data
- [ ] **Book S4 C@G/apply grooming** — skipped all week, still unbooked (🔴 carries to Mon)
- [ ] **Book WOG AD session → Fabian** (#26) — unbooked, 2+ wk lead time (🔴 carries)
- [ ] **Book POCDEX session → Daryll** (#31) — unbooked, CP item #2 due 13 Jun (🔴 carries)

**Why the gap:** Calendar was dense Mon–Fri (6 meetings today alone). Booking tasks require real-time calendar access and kept getting pushed to "the next free block" that never arrived.

---

### Priority 2: Sprint 3 ceremonies — DoR + tech debt + dependency sync — 🟡 Partial

**Planned:** DoR update and tech debt proposal through ceremonies; pre-sprint dependency sync format agreed.

**Actual:**
- ✅ Wed 3 Jun internal grooming ran — design lock confirmed, S4 AC scan done
- ✅ Thu 4 Jun backlog grooming ran — Core competency track + Pathfinder OTG portion
- ✅ Sprint 2 Demo (Thu 4 Jun) — clean demo, secondment flag finding noted
- ✅ Sprint 3 Retro ran today
- ❌ **S4 C@G/apply stories (OTEP-86/87/88/89/319/348) never went through grooming** — the biggest ceremony gap this week. Sprint Planning is Thu 11 Jun and these are unsized.
- ❌ **DoR update + tech debt proposal** — not confirmed as adopted (carried from W22 as drafted only)

---

### Priority 3: Stakeholder + data foundations — 🟡 Partial

**Planned:** PostHog call with Rama attended; POCDEX model confirmed; Daryll session scheduled.

**Actual:**
- ✅ Clarissa NRIC response: Malaysian NRIC + downstream OTG impact resolved
- ✅ OKR + Roadmap Review with GK (9am) and Mark (10:30am) — major strategic alignment session. North Star debate surfaced, R1–R3 confirmed, transition plan gap flagged.
- ✅ C@G payload Slack sent to Pow Hwee (today)
- ❌ PostHog/Rama call — no update this week
- ❌ Daryll POCDEX session — still unbooked (🔴 CP item #2 due 13 Jun)
- ❌ POCDEX model version for OTEP-271/203 — unconfirmed

---

## Key Decisions Made

| Decision | Date | Owner | Impact |
|----------|------|-------|--------|
| OTEP-88 AC rewritten: full C@G listing page (not badge-only) | 2026-06-05 | Michelle | S4 scope clarity |
| Tiered ingestion validation rules for Léo (hard skip / warn / silent skip) | 2026-06-05 | Michelle → Léo | Unblocks OTEP-192 upsert |
| OKR two-track: conservative for funding, aspirational internally | 2026-06-05 | Michelle + WD | Funding paper + internal targets |
| North Star metric — escalate both options to July SteerCo (no decision today) | 2026-06-05 | Michelle + Adrian | July SteerCo deliverable |
| R1–R3 roadmap structure confirmed (R1: Apply, R2: Learning, R3: Career journey) | 2026-06-05 | All | Roadmap locked |
| Ringfencing scope: OTEP-127 (listing BE) + OTEP-390 (detail FE) + OTEP-133 absorbed | 2026-06-05 | Michelle | S5 scope clean |
| OTEP-132 (OTG redirect) + SJR deferred to R1 | 2026-06-05 | Michelle | MVP scope reduced |
| OTEP-284 confirmed as "Closing soon" label | 2026-06-05 | Michelle | PRD updated |
| OTEP-91 confirmed as keyword search (Backlog) | 2026-06-05 | Michelle | PRD updated |
| Demo data masked until UAT | 2026-06-04 | Eng | Data classification |
| Plan of record = Pow Hwee's S2–S6 shape; native apply = R1 | 2026-06-04 | Michelle | Sprint goal framing |

---

## What Went Well

- **Ringfencing cleanup was a high-leverage PM action.** OTEP-127/390/133 were fragmented across multiple tickets with scope overlap. One session to redraft + create + absorb left the board clean. No engineer confusion going into S5.
- **GK + Mark sessions surfaced the right strategic risks.** Transition plan and gap analysis gaps would have been SteerCo surprises in July. Having them surface now (6 weeks before) means there's still time to act.
- **OTEP-88 AC rewrite resolved 2 weeks of back-and-forth.** Pow Hwee had flagged twice in May. Getting it done today, synced to Jira, two TBCs documented = the right outcome.
- **Ingestion validation rules decision was fast.** Léo asked, analysis done, tiered rules sent in same day. That's the kind of PM response that keeps engineers unblocked.
- **Sprint 2 Demo landed well.** First time showing login → listing → detail on real OTG data to GK + Mark. Demo format (milestones-only for SteerCo) confirmed.

---

## What Didn't Go Well

- **Three P0 bookings not made all week.** S4 grooming, WOG AD (Fabian), POCDEX (Daryll) — all carry into Monday. All have lead times. The cost compounds daily.
- **S4 C@G/apply stories never groomed.** Sprint Planning is Thu 11 Jun. Thomas is sole FE, OTEP-87/88/89/319 are all un-estimated. This is the most acute risk entering Week 24.
- **Sprint goal is off track day 4.** Filters (OTEP-86/317) and apply (OTEP-319) both Backlog with Thomas not started. The sprint goal requires both.
- **July SteerCo deliverables have no owners.** Transition plan, North Star brief, gap analysis options — all surfaced today, all due in ~6 weeks, none have a named owner or timeline yet.

---

## Top 3 Learnings

1. **Booking tasks need a dedicated time block, not a "next free block" approach.** Calendar tetris with Fabian, Daryll, and Thomas requires 30 minutes of uninterrupted calendar work. This won't happen between meetings. Block 11:30–12:00 every Monday specifically for this.

2. **Strategic sessions without follow-through owners become theatre.** GK and Mark identified real gaps today. But if "joint ITC + WD" owns the transition plan, nobody owns it. Every deliverable from a SteerCo-level session needs one named person before the meeting ends.

3. **The grooming gap is a process gap, not a capacity gap.** S4 C@G stories were ready to groom — analysis done, ACs drafted. What was missing was a booked session. The work was ready; the calendar slot wasn't. Grooming sessions need to be booked at sprint start, not scrambled the week before planning.

---

## Next Week Preview — Week 24 (8–14 Jun)

### Top 3 priorities

1. **S4 Sprint Planning readiness (by Thu 11 Jun)** — book the C@G/apply grooming, get Pow Hwee's payload reply, assign OTEP-374/377/378/379 owners, lock OTEP-88 AC4 + AC2 in Monday's meeting. Everything feeds into planning on Thursday.

2. **Three P0 bookings — today, not Thursday** — WOG AD (Fabian #26), POCDEX (Daryll #31, CP item due 13 Jun), S4 C@G grooming. Each day delayed pushes the gate. Book all three before Tuesday standup.

3. **Name the transition plan owner** — Mark's informal ask is "next week." If it's Michelle + Adrian jointly, put it in writing Monday. If it's ITC-led, confirm with Adrian who's driving. A deliverable with a SteerCo deadline and no owner is a credibility risk.

### Key meetings next week

| Day | Meeting | Goal |
|-----|---------|------|
| Mon 8 Jun | Mid-sprint review | Lock OTEP-88 AC4/AC2; confirm S3 carry-overs; Thomas on OTEP-319 |
| Thu 11 Jun | Sprint 4 Planning | All C@G stories sized; goal framing confirmed |

### Items to unblock Monday

| Item | Blocked since | Action |
|------|--------------|--------|
| S4 C@G/apply grooming | W23 (all week) | Book before standup Mon |
| WOG AD session → Fabian | W22 | Book before standup Mon |
| POCDEX session → Daryll | W22 | Book before standup Mon — CP item due 13 Jun |
| OTEP-88 AC4 fallback + AC2 badge | Today | Confirm in Mon mid-sprint meeting |
| Léo: closing_date / posting_date schema | Today | Slack before standup Mon |
| Transition plan owner | Today | Name in writing by Mon EOD |

---

*Generated: 2026-06-05 | Week 2026-W23*
*Data sources: Weekly plan, daily plans (Mon–Fri), meeting notes (cleanup-2026-06-05.md, OKR+Roadmap, Design Review BO), sprint-status.md, open-items.md, decisions log*
*Next: Run `/weekly-plan` for Week 24 + `/stale-check` to sweep hub trackers*
