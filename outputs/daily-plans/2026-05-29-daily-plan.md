---
date: 2026-05-29
day: Friday
week: 2026-W22
mcps_used: [Google Calendar — live sync 2026-05-29, Jira — live sync 2026-05-29]
---

# Daily Plan - Friday, May 29, 2026

## TL;DR

- **Meetings:** 6 — Squad Sync (09:30), Standup (11:00), TcM (11:30), Internal Retro (14:00), Sprint 2 Finalisation (15:00)
- **P0 Tasks:** 3 — all carried over from yesterday, and today is the last workday before Sprint 3 starts
- **Key Focus:** Close Sprint 2 cleanly. Get the four "before Monday" items off your plate before EOD — Sprint 3 engineers pick up on Monday June 1 and two of those items gate their first week.

---

## Carry-Over from Thursday 28 May

| Item | Days late | Status |
|------|-----------|--------|
| Capture Job Family meeting outcomes (POCDEX implications) | 1 day | ❌ Must do today — was P0 yesterday |
| Finalise demo script (confirm ⚠️ items) | 1 day | ❌ Still open |
| Ping Rama: design system programme decision | 1 day | ❌ Amber can't audit Figma without this |
| Pilot agency restriction for OTG import | Due before Sprint 3 | ❌ Today is last chance |
| WOG Auth success metrics (committed to Adrian) | 3 days | ❌ Overdue — even a bare outline closes the loop |
| Check with Acacia on POCDEX data model | Before Daryll session | ❌ 5-min Slack ping |
| PostHog event taxonomy | Due w/c 2 Jun | ❌ Today is last day this week |
| Confirm Mark's role + demo context | Before demo | ❌ Not done |

---

## Today's Three

*Three things — if only these get done, the week still lands well.*

1. [ ] **Run Sprint Review + Retro** — mandatory Sprint 2 close ceremony. Capture decisions and any new open items.

2. [ ] **Capture Job Family outcomes + note POCDEX implications** — this was P0 yesterday and it's still not done. Even a bullet list. POCDEX scope (OTEP-271/203) may shift before Sprint 3 starts if the job family model is changing.

3. [ ] **Two pings before lunch: (a) Rama on design system programme decision, (b) pilot agency restriction for OTG import** — both gate Sprint 3 engineering. Amber can't start her Figma audit without Rama's answer. Fanxu can't scope OTG import without the pilot agency decision. These are quick to send; delay is blocking someone else.

*Why these three:* Everything else is catchable next week. These three aren't — Sprint 3 starts Monday.

---

## Schedule & Meeting Prep

| Time | Meeting | Location | Prep Status | Context |
|------|---------|----------|-------------|---------|
| 09:30–10:30 | OTEP Squad Sync | Teams | ✅ Context loaded | Cross-squad sync. Good slot to raise pilot agency decision + Rama ping before standup. |
| 11:00–11:15 | OTEP Team 2 Standup | Digi Room / Teams | ✅ Context loaded | Sprint 2 last day. Surface OTEP-289 spike outcome + any final blockers before Monday. |
| 11:30–12:30 | TCM appointment | Personal — out of office | — | Medical appointment. No prep needed. |
| 14:00–15:00 | Team 2 Internal Retro | Teams | ⚠️ Needs light prep | See retro prompts below. Bring: what went well, design system blocker, Sprint 3 risks. |
| 15:00–16:00 | Sprint 2 Ends — Finalisation | — | ⚠️ Needs prep | AC check across stories. Run /archive or sprint summary to Confluence. |

### Free Blocks (Real)

- **10:30–11:00** (30 min) — Send Rama ping + pilot agency decision. Do this first.
- **11:15–11:30** (15 min) — Job Family outcomes: start a bullet list, even rough.
- **12:30–14:00** (90 min) — Back from TCM. Best deep work block: finish Job Family writeup, WOG Auth metrics outline.
- **Post-16:00** — Sprint summary to Confluence if not done at 15:00 session.

---

## Sprint Review + Retro Prep

**This is a retro sprint (S01–S03 all have retros).**

### Sprint Review — What to surface

Sprint 2 goal: *An officer can open OTEP, see every published OTG opportunity on a listing page (newest first), and click into a detail page for any opportunity.*

| Story | Status to report |
|-------|-----------------|
| OTEP-85 (listing with real data) | Confirm whether live OTG data is in or still mocked |
| OTEP-128 (detail page) | Confirm whether end-to-end Listing → Detail is demonstrable |
| OTEP-170 (base layout, Thomas) | MR status — merged or still in progress? |
| OTEP-289 (spike) | Outcome — go/no-go for OTEP-318 filter by category |
| OTEP-296 (Excel format) | ✅ Done |

**Key framing for review:** Sprint 2 built the foundations. Sprint 3 adds filters, apply flow, and live competency data. Design lock is Wed 3 June.

### Retro — Prompts to bring

- What went well in Sprint 2? (nomination: locking Sprint Planning scope + async follow-ups)
- What was the biggest blocker? (likely: design system ambiguity + lack of live OTG data)
- What should we change for Sprint 3? (candidates: earlier design lock, Amber's Figma labels before FE starts)
- Design system risk: has Amber audited Figma pages yet? Flag if not — Thomas starts FE Monday.

### Sprint Summary to Confluence (due today)

Quick write-up of Sprint 2 outcomes — status of each story, key decisions made, carry-overs to Sprint 3. File under the sprint archive.

---

## Tasks by Priority

### P0 — Must happen today (last workday before Sprint 3)

- [ ] **Email DDs on PSC — send this afternoon** — hard deadline today. Do before EOD.
- [ ] **Ping Rama: is a new design system being adopted programme-wide?** — Amber needs this answer to know what she's auditing against. Without it, she can't complete the Figma label audit by Monday. 5-min Slack message.
- [ ] **Decide and communicate: pilot agency restriction for OTG import** — Should Fanxu's bulk OTG competency import be scoped to pilot agencies only in Sprint 3? This is Michelle's call. Make it, document it, ping Fanxu. Sprint 3 starts Monday.
- [ ] **Write up Job Family meeting outcomes** — implications for POCDEX data model. Even 10 bullets. If the job family model is changing, OTEP-271/203 scope may shift — capture this before the detail decays further.

### P1 — High value if done today

- [ ] **WOG Auth success metrics** — 3 days committed to Adrian. Tonight send an outline: 2–3 metrics grounded in the Dec '26 OKR baselines from the BO deck. Can be refined next week. Closing the loop matters more than perfection.
- [x] **PostHog event taxonomy** — ✅ Rama scheduling a call for w/c 2 Jun. No action needed today.
- [ ] **Check with Acacia on POCDEX data model** — 5-min Slack ping: is she the right person to loop in before the Daryll session? Set up for next week.
- [ ] **Sprint summary to Confluence** — due today per sprint calendar.

### P2 — If time allows, or carry to Monday

- [ ] Confirm Mark's role + what he needs to see at the demo
- [ ] Finalise demo script (confirm ⚠️ items: demo vehicle, data state, back-nav behaviour)
- [ ] FormSG PRD update — remove pre-fill from MVP scope
- [ ] OTEP-130 Jira rescope — basic redirect + webhook only

---

## Before Sprint 3 Starts (Monday June 1) — Status Check

| Item | Owner | Status | Action needed today |
|------|-------|--------|---------------------|
| Amber: Figma audit + design system labels | Amber | ❌ Blocked on Rama answer | ✅ Ping Rama today |
| Pilot agency restriction decision | Michelle | ❌ Not decided | ✅ Decide + ping Fanxu today |
| Mid-sprint review (Mon 8 Jun) invite | Michelle | ✅ Done | — |
| OTG sync cadence decision (with Pow Hwee) | Michelle | ✅ Done — D-016 logged 2026-05-29 | One-time port only; no ongoing sync. Pilot agencies drive to Compass. |
| Job Family outcomes captured | Michelle | ❌ Not done | ✅ Write up today |

---

## Heads Up

⚠️ **Today is the last workday before Sprint 3.** Engineers pick up on Monday June 1. Two items gate their first week: Amber's Figma audit (blocked on Rama) and the pilot agency restriction (Michelle's call). Both are quick sends. Do them before standup ends.

⚠️ **Sprint Review: confirm whether OTEP-85/128 end-to-end is demonstrable.** If the listing → detail journey isn't working with live data, name it clearly in the review rather than letting it carry over silently.

⚠️ **Figma design system ambiguity is a live Sprint 3 FE risk.** Thomas starts UI Monday. If Amber hasn't audited Figma pages before then, he might build against the wrong design system. This whole chain depends on Michelle pinging Rama today.

⚠️ **WOG Auth success metrics: 3 days late to Adrian.** Sending anything tonight is better than silence. It doesn't need to be polished.

⚠️ **OTEP-289 spike outcome** should come out at the sprint review or standup. If the spike says go, OTEP-318 is in Sprint 3. If it says no-go, OTEP-318 is dropped. Get the answer today.

⚠️ **Do NOT respond to Gemma (LD team) without Jace/Adrian alignment** — standing instruction, still applies.

---

## Looking Ahead: Sprint 3 Week 1 (2–6 June)

- Mon 1 Jun: Sprint 3 Day 1. Thomas starts FE — needs Amber's Figma audit done.
- Tue 2 Jun: Vesak Day (public holiday). Standup cancelled.
- Wed 3 Jun: Design lock deadline. Amber must sign off final Figma before this date.
- Mon 8 Jun: Mid-sprint review (pulse check, not formal ceremony). ✅ Invite sent.

**Sprint 3 open questions still needing Michelle:**

| Question | Due |
|----------|-----|
| ~~OTG sync cadence after initial import~~ | ~~w/c 2 Jun~~ — ✅ D-016: one-time port only, no ongoing sync |
| New vs existing officers: OTG sync on first login for latecomers? | w/c 2 Jun (Fanxu + Kingsley) |
| "Next role" definition logic | Sprint 4 planning |
| Confirm Mark's role + demo needs | Before demo |

---

*Generated: 2026-05-29 | Updated: 2026-05-29 mid-day (Jira + Calendar live sync)*
*MCPs used: Google Calendar (6 events fetched live) + Jira REST API (michelle_yip@psd.gov.sg, Boards 12541 + 13640)*
*Updates this pass: real calendar times in schedule, D-016 OTG sync resolved, sprint-status.md rewritten with live Jira data*
*Note: Sprint 2 actually ends May 31 (Pathfinder) — not today. Ceremonies today, board closes Sunday.*
*Next: Run `/weekly-review` after the retro — last day of Sprint 2 ceremonies.*
