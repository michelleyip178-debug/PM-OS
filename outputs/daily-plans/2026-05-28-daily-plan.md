---
date: 2026-05-28
day: Thursday
week: 2026-W22
mcps_used: [Google Calendar MCP — token refreshed, live data]
---

# Daily Plan - Thursday, May 28, 2026

## TL;DR

- **Meetings:** 5 — ✅ OTG KT, ✅ Standup, ✅ PM Weekly, ✅ Sprint Planning, ⏳ Job Family (16:00)
- **P0 Tasks:** Sprint Planning ✅ DONE. Demo script ✅ drafted — confirm ⚠️ items status.
- **Key Focus (rest of day):** Capture Job Family outcomes → POCDEX implications. Then: WOG Auth metrics (overdue), schedule mid-sprint review Mon 2 Jun, Rama ping on design system.

---

## Carry-Over from Wednesday 27 May

| Item | Days overdue | Status |
|------|-------------|--------|
| Async follow-up to Xian Zhang + Jacky | 2 days | ✅ Done |
| Demo script | Due EOD today | ✅ Structure drafted — ⚠️ items status TBC |
| FormSG PRD update | This week | ❌ Not started |
| OTEP-130 Jira rescope | This week | ❌ Not started |
| WOG Auth success metrics | This week (committed to Adrian) | ❌ Not started — now urgent |
| POCDEX planning session (Daryll outreach) | This week | ✅ Reached out — awaiting response |
| Check with Acacia (POCDEX data model) | Before Daryll session | ❌ Not started |

---

## Today's Three

*All three either done or in flight.*

1. [x] ~~**Send async follow-up to Xian Zhang + Jacky**~~ — ✅ Done. Sent to Xian Zhang + Jacky + CC Amber.

2. [x] ~~**Nail Sprint Planning**~~ — ✅ DONE. Sprint 3 scope locked across all three tracks (Core, Pathfinder, AI). See outcomes below.

3. [x] **Demo script** — ✅ Structure drafted. Confirm whether ⚠️ items (demo vehicle, data, back-nav state) were resolved at standup or still open. Finalise before EOD.

---

## Meeting Outcomes (Updated End-of-Day)

### ~~09:30 — [OTG] KT Session — Budget~~ ✅ Done

OTG budget KT complete. No blockers surfaced for OTEP scope.

---

### ~~11:00 — OTEP Team 2 Standup~~ ✅ Done

**Two issues surfaced:**

**1. Design system ambiguity in Figma (new Sprint 3 risk)**
- Engineers can't tell which design system each Figma page references
- If different pages reference different systems, Thomas doesn't know which to build against
- OTEP-252 confirmed Flagship/LifeSG was adopted in Sprint 2 — but Figma pages may have inconsistent references
- **Risk:** Thomas starts Sprint 3 FE building against the wrong reference → rework mid-sprint
- **Resolution path:** Amber to audit Figma and label design system per page before Thomas starts (by Mon 2 Jun). Michelle to discuss with Rama whether a new design system is being adopted programme-wide.

**2. Mid-sprint review scheduled for Monday 8 June**
- Quick PM pulse check (not a formal ceremony)
- Goal: see what engineers have picked up, catch early blockers before Week 2 is gone
- Michelle to schedule today

**OTEP-289 spike status:** Ask at planning session if not surfaced at standup.

---

### ~~13:15 — PM Weekly Catchup~~ ✅ Done

*(Update with outcomes if captured.)*

---

### ~~14:00–16:00 — Sprint Planning~~ ✅ DONE

**Sprint 3 scope is locked.** Three tracks confirmed.

#### Decisions Made

| Decision | Detail |
|----------|--------|
| "Competency" terminology everywhere | Not "skills" — matches OTG language |
| Competency API split from profile API | Separate endpoint(s); search triggers at 3+ chars, "starts with" priority, max 20 results |
| Role competencies = hide only; additional competencies = add/delete | Soft-remove from display, not deleted from DB |
| OTG competency migration: file ingestion, not live API | Bulk import → temp table → first-login sync by user ID. Owner: Fang Zhu |
| Feedback loop deferred | No clarity on data model yet. Victor: env setup + evaluation only in Sprint 3 |
| Demo sequence: internal first, then Jacky + Mark | Michelle validates internally before sharing externally |
| Design lock: Wednesday 3 June | Engineers must not start UI until Amber signs off final Figma |

#### Sprint 3 Track Summary

| Track | Focus |
|-------|-------|
| Core | Competency add / hide / delete + OTG migration (Fang Zhu) |
| Pathfinder | Type filter, filter state, redirect flow, no-results, tooltip |
| AI | Environment setup + evaluation layer (feedback loop deferred) |

#### New Open Questions (Michelle owns)

| Question | Owner | Due |
|----------|-------|-----|
| OTG sync cadence after initial import (weekly? monthly? who triggers?) | Michelle + Pow Hwee | w/c 2 Jun |
| New vs existing officers: OTG sync on first login for latecomers? | Fang Zhu + Kingsley | w/c 2 Jun |
| Pilot agency restriction: limit OTG import to pilot agencies in Sprint 3? | Michelle | Before 2 Jun |
| "Next role" definition logic (blocks AI track progression features) | Michelle + Pow Hwee | Sprint 4 planning |
| Confirm Mark's role + what he needs to see before demo | Michelle | Before demo |

#### Design system risk — raised at Planning ✅

Flagged the Figma ambiguity from standup. Amber has until Monday 2 June to audit and label each page before Thomas starts FE work.

---

### 16:00–17:00 — Job Family + Functional Competency Changes ⏳ In progress / Just finished

**POCDEX implications — capture now:**
- Are job families / functional competencies changing in structure? → affects POCDEX data model
- Which agencies affected and on what timeline?
- Does OTEP need to handle transition state (officers mid-competency-profile change)?
- Who owns the WD×DO side? Counterpart to coordinate with?

**Risk to monitor:** If the job family model changes, OTEP-271/203 scope (POCDEX local DB + API service) could shift before Sprint 3 even starts. Capture everything from this session before doing anything else.

---

## Tasks by Priority (Updated)

### P0 — Sprint Planning done. What's left today:

- [ ] **Capture Job Family meeting outcomes** — implications for POCDEX data model. Even a bullet list is enough. Don't let this slip overnight.
- [x] ~~**Schedule mid-sprint review for Monday 8 June**~~ — ✅ Done.
- [ ] **Finalise demo script** — confirm ⚠️ items (demo vehicle, data, back-nav) are resolved, then close the doc. Hard deadline.

### P1 — This week (post-17:00 or tomorrow if needed)

- [ ] **Ping Rama: design system programme decision** — is a new design system being adopted? Needs answer before Mon 2 Jun so Amber knows what to audit against.
- [ ] **Decide: pilot agency restriction for OTG import** — Sprint 3 starts 2 Jun. Need a call before then.
- [ ] **WOG Auth success metrics** — committed to Adrian. Now 2+ days late. Even a bare outline tonight is better than nothing. Grounded in Dec '26 OKR baselines from BO deck.
- [ ] **Check with Acacia on POCDEX data model** — 5 min Slack ping before Daryll session.
- [ ] **Confirm Mark's role** — who is he? What does he need to see in the demo?

### P2 — If time allows

- [ ] **FormSG PRD update** — remove pre-fill from MVP; note R1 native form direction
- [ ] **OTEP-130 Jira rescope** — basic redirect + webhook only, no pre-fill
- [ ] **PostHog event taxonomy** — deadline w/c 2 Jun. Not started. Flag to Pow Hwee.

---

## Open Loops (End-of-Day Update)

| Item | Owner | Due | Status |
|------|-------|-----|--------|
| Async follow-up to Xian Zhang + Jacky | Michelle | 2 days ago | ✅ Done |
| Demo script | Michelle | EOD today | ✅ Draft done — finalise ⚠️ items |
| Sprint Planning | Michelle | 14:00 today | ✅ DONE — Sprint 3 scope locked |
| Job Family meeting outcomes | Michelle | Now | ⏳ Capture before end of day |
| Schedule mid-sprint review (Mon 8 Jun) | Michelle | EOD today | ✅ Done |
| Ping Rama: design system programme-level decision | Michelle | Today/tomorrow | ❌ Not done |
| OTG sync cadence decision | Michelle + Pow Hwee | w/c 2 Jun | ❌ New item from Planning |
| Pilot agency restriction for OTG import | Michelle | Before 2 Jun | ❌ New item from Planning |
| WOG Auth success metrics | Michelle | This week | ❌ Overdue |
| FormSG PRD update | Michelle | This week | ❌ Not started |
| OTEP-130 Jira rescope | Michelle | This week | ❌ Not started |
| POCDEX planning session (Daryll) | Michelle | This week | ✅ Reached out — awaiting response |
| Check with Acacia (POCDEX data model) | Michelle | Before Daryll session | ❌ Slack ping needed |
| OTEP-318 ACs | Michelle | Conditional on OTEP-289 | ⏳ Waiting on spike output |
| Confirm Mark's role + demo context | Michelle | Before demo | ❌ New item from Planning |
| PostHog event taxonomy | Michelle | w/c 2 Jun | ❌ Not started |

---

## Heads Up

✅ **Sprint Planning DONE.** Sprint 3 scope locked across Core, Pathfinder, and AI tracks. Design lock Wed 3 Jun. This was the highest-leverage PM activity of the week — it's closed.

✅ **Async follow-up to Xian Zhang + Jacky — done.** That carry-over is finally closed.

✅ **Demo script structure drafted.** Finalise ⚠️ items before EOD.

⚠️ **Design system ambiguity is a live Sprint 3 risk.** Amber needs to audit Figma before Thomas starts FE work on Monday 2 June. Ping Rama today on whether a new design system is being adopted programme-wide — Amber needs that context to know what she's auditing against.

✅ **Mid-sprint review (Mon 8 Jun) scheduled.** Done.

⚠️ **Pilot agency restriction decision needed before Sprint 3 starts (2 Jun).** Should OTG competency import be restricted to pilot agencies only in Sprint 3? This came out of Planning — it's Michelle's call, and it gates Fang Zhu's import scope.

⚠️ **Job Family meeting outcomes must be captured now.** If the job family model changes, POCDEX scope (OTEP-271/203) could shift before Sprint 3 even kicks off. Don't let this decay overnight.

⚠️ **WOG Auth success metrics committed to Adrian — 2+ days overdue.** Even a rough outline tonight closes the loop. It can be polished next week.

⚠️ **PostHog event taxonomy deadline is w/c 2 Jun** — nothing started. Mention to Pow Hwee.

⚠️ **Do NOT respond to Gemma (LD team) without Jace/Adrian alignment** — standing instruction.

---

## Looking Ahead: Monday 2 June (Sprint 3 Day 1)

**Key items to have ready before Monday 2 Jun (Sprint 3 Day 1):**
- [ ] Amber: Figma audit + design system labels complete
- [ ] Michelle: Pilot agency restriction decided
- [ ] Michelle: Mid-sprint review (8 Jun) invite sent
- [ ] Michelle: OTG sync cadence discussed with Pow Hwee
- [ ] Michelle: Job Family outcomes captured + POCDEX implications assessed

**Sprint 3 engineering starts 2 Jun.** Engineers should not start UI work until Amber's Figma audit is done — that's the first hard constraint of the new sprint.

---

*Generated: 2026-05-28 morning | Updated: 2026-05-28 end-of-day (post Sprint Planning)*
*MCPs used: Google Calendar (token refreshed manually — live data for 28 May 2026)*
*Meetings done: OTG KT ✅, Standup ✅, PM Weekly ✅, Sprint Planning ✅, Job Family ⏳*
*Sprint Planning outcome: Sprint 3 scope locked — Core (competency), Pathfinder (filters/redirect), AI (env + eval). Design lock Wed 3 Jun.*
*New items from today: design system ambiguity (Sprint 3 FE risk), mid-sprint review Mon 2 Jun, pilot agency restriction, OTG sync cadence, Mark identity*
*Still open: demo script finalisation, WOG Auth metrics, FormSG PRD, PostHog event taxonomy*
