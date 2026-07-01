---
date: 2026-06-19
type: slack-inbound
from: Adrian
topic: R1 application-flow scoping — jamming session ask
related: open-item #40 (R1 scope, awaiting Mark), #47 (R1 jamming session)
---

# Inbound: Adrian Slack — R1 jamming session ask

**Date:** 2026-06-19 (Fri)

**From:** Adrian

**Type:** Slack message (inbound ask — not a meeting)

**Channel:** DM / Slack

---

## The message (verbatim)

> "we need to move on to scope R1's application flow improvements. Is your MVP's opportunity page scope locked down and you can proceed to R1? If yes, let's have a jamming session to define the key epics for R1 at a high level first, then we plan it out. Can you find time this week if possible?"

---

## Summary

Adrian wants to start scoping R1's application-flow improvements and asked for a jamming session to define R1 epics at a high level before detailed planning. He gated it on a question: **is MVP opportunity-page scope locked?**

**Status (19 Jun):** Michelle has replied — she'll arrange the R1 jam **next week before Adrian goes on leave Thu 25 + Fri 26 Jun.** So the session must land **Mon 22 – Wed 24 Jun.** Sequence confirmed: Adrian jam first, then Mark (#40).

---

## What Adrian is actually asking (subtext)

1. **A readiness check, not just a scheduling request.** "Is your MVP scope locked?" is the real gate. He won't want to jam on R1 if MVP is still moving under it.
2. **High-level epics first, then plan.** He's explicitly scoping the session to *epic definition*, not detailed story planning — lower prep bar than a full planning session.
3. **This week if possible.** Soft urgency ("if possible"), not a hard deadline.

---

## The honest answer to "is MVP scope locked?"

**Not fully — and that's worth saying plainly.** Live S4 board (19 Jun):
- **8 stories still in QA** (cards, detail, filters, login/logout, open/closed, token rotation, error states, admin placeholder)
- **Search + sort still in flight** (OTEP-405/495 In Progress, OTEP-406 sort + OTEP-496 search wire-up in Backlog)
- **C@G listing + detail not done** (OTEP-88 In Progress, OTEP-87 in Backlog)
- **OTEP-87 BO sign-off (#43) open** — due before S5 grooming 26 Jun

So the *opportunity-page direction* is locked (the 4-category model, ringfencing-as-read-only, FormSG-redirect apply are all decided), but the **build isn't complete**. That distinction matters: Michelle can jam on R1 epics at a high level now, but shouldn't signal MVP is "done."

---

## Decisions Made

_None — this is an inbound ask awaiting Michelle's response._

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| ~~Reply to Adrian~~ ✅ Done 19 Jun — Michelle confirmed she'll arrange the jam early W26 before Adrian's Thu/Fri leave | @Michelle | — | — | 🟢 Done |
| ~~Send calendar invite — jam confirmed for **Wed 24 Jun PM**~~ ✅ Decided 19 Jun (Mon 22 not used; Tue 23 = Michelle on leave) | @Michelle | — | — | 🟢 Done |
| Prep prioritised R1 draft view (epics from r1-scope-brief) — **building today, Fri 19** | @Michelle | Today (19 Jun) | 🔴 High | 🟡 In progress (#47) |
| **Take R1 epics to Mark for #40 sign-off — AFTER the Adrian jam** (sequence decided 19 Jun: Adrian first, then Mark) | @Michelle | After jam (W26) | 🟡 Medium | 🔴 Not started |

---

## Scheduling — slots before Adrian's leave (Thu 25 + Fri 26 Jun)

Window is **Mon 22 – Wed 24 Jun.** Calendar read 19 Jun:

| Day | Open window | Verdict |
|-----|-------------|---------|
| ~~Mon 22 Jun~~ | — | Not used |
| Tue 23 Jun | — | ❌ Michelle on leave |
| **Wed 24 Jun** | **Afternoon open** (Senior BO 10:00 + standup 11:00 are the only AM blocks) | ✅ **Confirmed — jam booked here** |

→ **Recommend Mon 22 Jun afternoon**, Wed 24 PM as backup. R1 draft is being built **today (Fri 19)**, so prep is comfortably ahead of either slot.
→ **Note:** Mon 22 is also **Sprint 5 start** and S5 grooming gates (POCDEX #31, competency SSOT #18) are due ~26 Jun — the jam shares the week with S5 kickoff, but the draft-today plan keeps them from colliding.

---

## Recommended reply to Adrian

✅ **Replied 19 Jun** — Michelle confirmed she'll arrange the R1 jam early next week (W26) before Adrian's Thu/Fri leave. Below is the original drafted reply, kept for reference on the framing used:

> Yes, let's scope R1 — the application flow is the right next focus. Quick honesty on MVP: the opportunity-page **direction** is locked (4-category model, ringfencing display, FormSG apply all decided), but the **build** is still closing out — 8 stories in QA and search/sort/C@G in flight this sprint. None of that changes the R1 direction, so we're clear to jam on epics.
>
> One ask: let me bring a prioritised R1 draft to the session so we're reacting to something concrete instead of starting from a blank page — I'll have it ready early next week. Can we do **early W26**? I'll send a couple of slots. Once we've shaped the epics together, I'll take them to Mark to confirm against his SteerCo briefing.

---

## Open Questions

- [x] ~~Does Adrian need the session before S5 grooming, or is W26 fine?~~ **Resolved 19 Jun: next week before Adrian's Thu 25 / Fri 26 Jun leave — target Mon 22 PM.**
- [x] ~~Should Mark's #40 sign-off precede the Adrian jam, or run in parallel?~~ **Resolved 19 Jun: Adrian first, then Mark.** Shape epics with the delivery lead, then take a coherent list to Mark for sign-off.

---

## Timeline Risks

- **R1 epics stay provisional until Mark signs off.** The R1 feature set (embedded apply, status tracking, saved jobs, smart assistant) is still **PENDING CONFIRMATION — Mark to confirm** ([r1-scope-brief](../../2026-W23-Jun01-Jun07/2026-06-05-W23-r1-scope-brief.md), #40). Sequence decided 19 Jun: **Adrian jam first, then Mark.** Risk to manage: the jam output is provisional until Mark confirms — don't let Adrian's team start detailed R1 planning or commit capacity on the epics before Mark's sign-off lands. Treat the jam as "shape the proposal," not "lock the scope." Take the epics to Mark promptly after the jam so the provisional window stays short.
- **W25 is nearly over.** Adrian said "this week," but it's Friday. Realistically this is a W26 session — set that expectation in the reply rather than over-committing to a slot today.

---

## Context for Future Reference

- This is the explicit trigger for open-item **#47** (was "Adrian wants a session this week, Michelle pushing to W26").
- R1 feature set source: Mark's SteerCo briefing 5 Jun → [r1-scope-brief](../../2026-W23-Jun01-Jun07/2026-06-05-W23-r1-scope-brief.md). Four epics: (1) Streamlined Application / embedded pre-filled form, (2) Status Tracking (native, no ATS), (3) Saved Jobs, (4) Smart Assistant (profile-driven pre-fill).
- Scope boundary to hold in the jam: ATS = R2+, CV/CIE inference (OTEP-205) separate, opportunity recommender is a separate R1 track.
- Ties to the SteerCo demo co-prep (corrected 19 Jun): R1 direction is part of the programme-health story Michelle co-presents.

---

## Next Steps

**Immediate (today):**
1. Reply to Adrian — yes, propose early W26 with a prepared draft, give the honest MVP readiness picture.

**Before the session (W26):**
- Prep the prioritised R1 draft view (epics + a first-cut priority order) from the scope brief.

**After the jam (W26):**
- Take the shaped R1 epics to Mark for #40 sign-off. (Sequence: Adrian first, then Mark.)
