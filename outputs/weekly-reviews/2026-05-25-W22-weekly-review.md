---
week: 2026-W22
week_start: 2026-05-25
week_end: 2026-05-31
quarter: Q2 2026
---

# Weekly Review — Week of 25 May 2026

## TL;DR

- **Sprint 2** closes today (ceremonies done, board closes Sun 31 May). Sprint 3 starts Mon 1 Jun.
- **Planning week:** Sprint 3 scope locked across all three tracks. 17 decisions logged (D-001 to D-017). This was a high-decisions week.
- **Priority 2 crushed it:** Design review happened, AC work shipped ahead of planning, Sprint Planning was crisp.
- **Priority 1 partial:** CSC SSO confirmed feasible (D-004), but WOG Auth metrics to Adrian still not sent — 3 days overdue.
- **Key win:** Sprint 2 velocity and team culture were strong. The retro surfaced fixable process gaps, not fundamental problems.
- **Key miss:** WOG Auth metrics and Sprint Confluence summary both carry into next week. Both were P0 by Friday.

---

## Priority Review

### Priority 1: CSC SSO scope + WOG Auth Sprint 4 prep — 🟡 Partial

**Planned:** CSC SSO feasibility confirmed, decision documented, WOG Auth open items resolved.

**Actual:**
- ✅ CSC SSO feasibility confirmed (D-004) — OTEP builds own SSO, DLE integrates. Step 2 (OTEP capabilities) still pending.
- ✅ OTEP-87 + OTEP-318 ACs updated and synced to Jira — unblocked Sprint 3 Planning.
- ❌ WOG Auth success metrics to Adrian — committed "this week," still not sent. Now 3 days late.
- ❌ OTEP-110 Sprint 4 prep — not progressed.

**Why the gap:** Planning day (Thu 28 May) was a 5-meeting day — OTG KT, standup, PM Weekly, Sprint Planning, Job Family all back-to-back. End-of-day captures and async sends fell off.

**Carry-over:** WOG Auth metrics outline to Adrian — first thing Monday.

---

### Priority 2: Design review prep + Sprint 3 grooming foundation — ✅ Done

**Planned:** Design review with decisions made, OTEP-87 and OTEP-318 ACs ready for grooming.

**Actual:**
- ✅ Design review (Tue 26 May) — Xian Zhang and Jacky, decisions on BO involvement model.
- ✅ OTEP-87, 86, 317, 319, 192 ACs updated and synced to Jira (Wed 27 May, public holiday async work).
- ✅ OTEP-318 ACs drafted — conditional on OTEP-289 spike output.
- ✅ Sprint 3 Planning (Thu 28 May) — scope locked across Core, Pathfinder, AI. 7 product/technical decisions made.
- ✅ Sprint 3 Planning prep doc created ahead of the session.

**What worked:** Doing AC work on the public holiday (Wed 27) created clean runway for Thursday planning. Going into Sprint Planning with all ACs ready meant no scope ambiguity in the room.

---

### Priority 3: POCDEX risk containment + Daryll planning session — 🟡 Partial

**Planned:** Daryll planning session scheduled, OTEP-202 timeline confirmed, Sprint 3 POCDEX plumbing on track.

**Actual:**
- ✅ Email sent to Daryll (Thu 28 May) — awaiting response.
- ✅ OTEP-271 and OTEP-203 confirmed in Sprint 3 scope.
- ✅ Job Family meeting attended (Thu 28 May) — OTEP/POCDEX implications captured.
- ✅ Key clarification made: OTG competency migration (Fanxu) and POCDEX catalog (Leo/Pow Hwee) are separate — different tables, owners, consumers. This confusion resolved before sprint start.
- ❌ OTEP-202 (seed database) timeline not confirmed with POCDEX team.
- ❌ Daryll session not yet confirmed — waiting on response.

---

## Key Decisions This Week

17 decisions logged across the week. Most significant:

| Decision | Date | Impact |
|----------|------|--------|
| CSC SSO feasible — OTEP builds own, DLE integrates (D-004) | 25 May | Unblocks WOG Auth architecture |
| PostHog selected for OTEP analytics (D-006) | 26 May | OKR monitoring approach decided |
| FormSG pre-fill removed from MVP; R1 for native form (D-005) | 26 May | Cleans up Sprint 3 FormSG scope |
| Competency API separate from profile API (D-008) | 28 May | Kingsley's Sprint 3 implementation |
| Role competencies hide-only; additional = fully editable (D-009) | 28 May | UX + API behaviour locked |
| OTG migration via file ingestion, not live API (D-010) | 28 May | Fanxu's Sprint 3 scope |
| AI feedback loop deferred (D-011) | 28 May | Victor focuses on env + eval only |
| Design lock Wed 3 Jun (D-013) | 28 May | FE can't start until Amber signs off |
| OTG one-time port only, no ongoing sync (D-016) | 29 May | Fanxu's scope: no recurring job needed |
| Demo format: squad-by-squad for working sessions; joint for Mark+GK (D-017) | 29 May | Sprint 3 demo planning |

Full log: [decisions-log.md](../decisions/2026-05-29-W22-decisions-log.md)

---

## Sprint 2 Outcome

**Sprint goal:** Officer can open OTEP, see published OTG opportunities (newest first), and click into a detail page — proving Listing → Detail end-to-end.

| Story | Final status |
|-------|-------------|
| OTEP-85 (listing with real data) | In Progress — blocked by OTEP-313 |
| OTEP-128 (detail page) | In Progress — OTEP-327 subtask still Backlog |
| OTEP-170 (base layout) | QA |
| OTEP-296 (OTG report format) | ✅ Done |
| OTEP-289 (spike: filter by category) | Backlog — spike output status unclear |

**Assessment:** Sprint goal partially met. Listing and detail pages exist but aren't fully closed by sprint-end ceremonies. Board closes Sunday 31 May. Sprint velocity was high (significant output vs Sprint 1) even if the end-of-sprint picture is messy. The team is building fast.

---

## Retro Themes (captured separately in retro notes)

Three fixable gaps surfaced:
1. Story prep handoff is fuzzy — engineers need input before stories are finalised (DoR update drafted)
2. Cross-squad dependency surprises mid-sprint (pre-sprint sync to set up)
3. No formal tech debt tracking (proposal drafted for Sprint 3 Planning)

Both proposals are drafted and ready for Sprint 3 ceremonies.

---

## What Went Well

- **Decision velocity was high.** 17 decisions in one week is a lot — most landed cleanly because the prep work was done.
- **AC work on the public holiday.** Using Wednesday as a deep-work day meant Thursday planning had no AC gaps.
- **Sprint Planning was crisp.** Three tracks locked, no major scope debates, clear owners.
- **Job Family meeting attendance.** Going to the WD×DO session surfaced POCDEX implications that would have been a Sprint 3 mid-sprint surprise otherwise.
- **Demo format resolved async.** Imelda's proposal via Slack resolved a question that could have needed a meeting.

---

## What Didn't Go Well

- **WOG Auth metrics to Adrian.** Committed "this week." Not done. Moving into Week 23 three days late — this is a visible miss.
- **Sprint Confluence summary.** Due Friday, not done. Carries to Monday.
- **PM Weekly notes not captured** (Thu 28 May). If decisions came out of that session, they're not on record.
- **Planning day was too dense.** Five meetings back-to-back meant the Job Family outcomes didn't get captured until Friday — one more day and the detail would have faded.
- **Multiple "quick pings" that haven't bounced back.** Daryll, Adrian (WOG AD status), Imelda sync — these are all sitting in "waiting on response" limbo. Need a system for following up.

---

## Top 3 Learnings

1. **High velocity creates handoff debt.** The retro confirmed it: moving fast without engineering input in story prep creates mid-sprint rework. The DoR fix is low-overhead. Do it now before Sprint 3 picks up speed.

2. **Commit less on dense meeting days.** Planning day had five meetings. Any async deliverable committed on that day will slip. Be explicit: "I'll send this Thursday evening or Friday morning" not "I'll send this Thursday."

3. **Follow-up cadence needs a system.** Daryll, Adrian, Imelda, HRPS/Cumulus — multiple stakeholders are in "sent, waiting" limbo. Without a visible follow-up queue, these go stale silently. The tasks-active.md "Waiting On" section is the right place; check it every Monday.

---

## Next Week Preview — Week 23 (1–6 Jun)

### Sprint 3 starts Monday. Top 3 priorities:

1. **Close the overdue items (Mon AM)** — WOG Auth metrics to Adrian, Sprint S02 Confluence summary, pilot agency restriction decision to Fanxu. All three are blocking credibility or engineers.

2. **Sprint 3 ceremonies — DoR update + tech debt proposal** — both are drafted. Get engineer buy-in before Wed 3 Jun grooming and Thu 5 Jun planning respectively. The DoR gate is the most important process change coming out of this sprint.

3. **Unblock Sprint 3 FE start** — Amber's Figma audit depends on Rama's design system answer. Thomas starts FE Monday. If Rama hasn't responded by Monday AM, follow up directly.

### Key dates next week

| Date | Event | Prep needed |
|------|-------|------------|
| Mon 1 Jun | Vesak Day (public holiday) | Standup cancelled — use for async sends |
| Tue 2 Jun | Sprint 3 Day 1 | WoW overdue sends first thing |
| Wed 3 Jun | Design lock | Amber must sign off Figma today |
| Wed 3 Jun | Internal squad grooming | Share DoR proposal for discussion |
| Thu 5 Jun | Sprint 3 Planning (S04) | Tech debt proposal as agenda item |
| Fri 6 Jun | OTEP Squad Sync | — |

### Items to unblock Monday

| Item | Blocked since | Action |
|------|--------------|--------|
| WOG Auth metrics | Wed 27 May | Draft 2-3 metrics, send to Adrian |
| Amber: Figma audit | Waiting on Rama | Follow up with Rama if no reply by 10:00 |
| Daryll: POCDEX session | Thu 28 May | Follow up if no reply Mon AM |
| Pilot agency restriction | Thu 28 May | Michelle's call — make it, ping Fanxu |

---

*Generated: 2026-05-29 | Week 2026-W22*
*Data sources: Weekly plan, daily plans (Mon-Fri), meeting notes (26-29 May), decisions log, retro notes, tasks-active.md*
*Next: Run `/weekly-plan` for Week 23 on Monday morning*
