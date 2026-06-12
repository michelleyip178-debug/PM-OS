---
week: 2026-W24
week_start: 2026-06-08
week_end: 2026-06-13
quarter: Q2 2026
sprint: Sprint 3 final week → Sprint 4 starts Mon 15 Jun
---

# Weekly Review — Week of 8 June 2026 (W24)

## TL;DR

- **Sprint 3:** Near-met goal — apply (OTEP-319), filters (OTEP-86), deep-link (OTEP-89) all reached QA by final day. Not done, but not Backlog. Carry-in is named, not a surprise.
- **Sprint 4:** Goal agreed, board partially reconciled. Several carry-overs (OTEP-127/130, UI PRD for Hao Eng) need Monday morning attention.
- **OTG ingestion:** Major decision session (12 Jun) unlocked ~255 more records through 3 PM rule changes. Catalogue goes from ~160 to ~415 at launch with no new engineering.
- **New scope landed late:** PSFG, upload module ownership, and upload wizard all surfaced Thursday–Friday as team capacity is shrinking. S4 starts against some undefined scope.
- **Key win:** V3 ingestion rules ratified, 5-category model aligned with Xian Zhang. This was weeks of ambiguity resolved in one meeting.
- **Key challenge:** Too many "before S4 commit" items are still open as of Friday EOD. Monday starts under pressure.

---

## Priority 1: Land Sprint 3 cleanly + S4 goal locked

**Planned:** Sprint Planning Thursday runs smoothly. S4 goal agreed. C@G stories sized/groomed.

**Actual:** Sprint Planning happened. S4 goal agreed: *"Deliver a complete, usable opportunity listing experience — officers can search, filter, sort, understand type, and trust data currency."* Board not fully reconciled going into Friday.

| Task | Status |
|---|---|
| Confirm sprint goal status at Mid-Sprint Review | ✅ Done — OTEP-319/86 in QA by Fri |
| Prep S4 goal + C@G stories for Thu Planning | ✅ Done — goal landed cleanly |
| Resolve OTEP-127/130 in-or-out | ❌ Carried over — still un-contracted |
| Assign OTEP-85 owner | 🟡 Partially done |
| Reconcile S4 board (spine: 319/86/87/88/89/192) | ❌ Carried to Mon |

**Status:** 🟡 Partial — goal landed, board reconciliation carries.

**Learning:** S4 planning went better than W23 because the goal was framed before Thursday. The carry-in problem (QA tail at sprint close) was anticipated and named honestly — that's the pattern to keep.

---

## Priority 2: Unblock S5 gates — book sessions

**Planned:** WOG AD form submitted, Imelda sync on CSC SSO + competency SSOT booked.

**Actual:** Two of the three sessions became unnecessary (Daryll/Pow Hwee resolved directly; WOG AD form received). Dependencies Sync with Imelda happened Thursday.

| Task | Status |
|---|---|
| Book Daryll (POCDEX) | ✅ No longer needed — Pow Hwee resolved directly |
| Book Fabian (WOG AD onboarding) | ✅ No longer needed — form received |
| Book Imelda (CSC SSO + competency SSOT) | ✅ Done — Dependencies Sync Thu 11 Jun |

**Status:** ✅ Complete — cleaner outcome than planned.

**Learning:** Two of three bookings resolved themselves because Pow Hwee worked it directly. The carry-over from W23 stress was real but the outcome was fine. Proactive booking earlier would have surfaced this resolution faster.

---

## Priority 3: July SteerCo deliverables — start North Star brief

**Planned:** North Star brief structure started. Transition plan + gap analysis owner assigned. R1 scope follow-up sent to Mark.

**Actual:** None of these happened. The week was consumed by Sprint 3 close + OTG ingestion decisions + new scope landing on Thursday–Friday.

| Task | Status |
|---|---|
| Draft North Star brief structure | ❌ Not started |
| Follow up with Mark on R1 scope confirmation | ❌ Not started |
| Assign transition plan + gap analysis owner | ❌ Not started |

**Status:** ❌ Not started — fully displaced by sprint ceremonies and OTG ingestion work.

**Learning:** This pattern is familiar — strategic work loses to operational urgency every week. Priority 3 needs a protected time block, not a "use whatever's left" slot. It hasn't moved in two weeks. If it doesn't start in S4 W1, it's a crisis before July SteerCo.

---

## Key Decisions Made

| Decision | Date | Status | Impact |
|---|---|---|---|
| StartDate optional for Job + Secondment types | 2026-06-12 | ✅ Ratified | Unlocks ~255 records — catalogue goes ~160 → ~415 |
| Function field optional / display-only for all types | 2026-06-12 | ✅ Ratified | Part of the +255 unlock |
| TimeCommitment required for Gig + STIP only | 2026-06-12 | ✅ Ratified | Jobs/Secondments exempted |
| 5-category model: STIPs, Gigs, Jobs, SJR, PSFG | 2026-06-12 | 🟡 Pending Xian Zhang validation | Gates OTEP-86 and OTEP-289 |
| MVP ring-fencing = agency-level only | 2026-06-12 | ✅ Ratified | R1+ adds job-family and officer-level |
| Open-only ingestion confirmed | 2026-06-12 | ✅ Ratified | All currently open records, no date window |
| PSFG out of initial MVP scope | 2026-06-12 | ✅ Ratified | Needs BO push-back with effort assessment |
| Upload module: base scope only, no competency integration | 2026-06-12 | ✅ Ratified | Ownership question still open (Rama/Imelda) |
| Admin UI access = email-based, not role-based | 2026-06-12 | ✅ Ratified | Hao to implement in MR (S4) |
| S4 sprint goal agreed | 2026-06-11 | ✅ Ratified | Usable listing experience — search, filter, sort, data currency |

---

## What Didn't Go as Planned

**New scope arrived late with no capacity buffer.** PSFG access-restriction logic and the upload module ownership question both surfaced in Thursday's planning and Friday's standup — on the same day a team member's departure was confirmed. S4 starts Monday with two undefined scope items against shrinking capacity. The PSFG effort assessment and upload ownership call both need to land before S4 grooming or the sprint plan is built on assumptions.

**Keycloak blocker has no resolution date.** It's the integration gate for the entire QA tail (9 items). Pow Hwee has options on the table (upgrade vs sidecar proxy) but no date confirmed. If this stays open into S4 week 1, integration testing is blocked and QA items can't clear.

**S4 board not reconciled before weekend.** Spine (319/86/87/88/89/192) not pulled forward, OTEP-127/130 un-contracted. This creates Monday planning chaos if not fixed first thing.

**OTG monthly progress report still overdue.** Was due Wednesday, still not done Friday.

---

## Next Week Preview (W25 — S4 Week 1)

### Top 3 Priorities

1. **S4 start clean (Mon–Tue)** — reconcile board, call OTEP-127/130 in-or-out, confirm Keycloak target date from Pow Hwee. These are the three things that determine whether S4 has a stable foundation or spends week 1 in cleanup mode.

2. **OTG ingestion unblocks** — deliver 5-category mapping logic to Xian Zhang for validation (gates OTEP-86 grooming), generate per-agency remediation reports, update OTEP-192 ACs to v3 rules. Léo is in QA and needs the ACs locked.

3. **Rama interview session — upload module** — run the structured discovery interview (doc prepared: `outputs/decisions/2026-06-12-rama-interview-session.md`). The output determines what scope goes into S5 and whether the Rama/Imelda ownership question resolves before the sprint.

### Items to Unblock by Monday

| Item | Action | Who |
|---|---|---|
| Keycloak target date | Ask before logging off today | Pow Hwee |
| OTEP-127/130 in-or-out | Call it before Monday standup | Michelle |
| S4 board spine reconciliation | Pull forward before Monday | Michelle |
| OTEP-192 ACs (v3 rules) | Update this weekend or first thing Monday | Michelle |
| Monday retro ambiguity | Confirm it's not a double-booking with S4 start | Michelle |

### What Still Has Zero Momentum

**July SteerCo deliverables** — North Star brief, transition plan, gap analysis. Three weeks with no progress. This becomes a crisis if it doesn't start in S4 W1. Consider blocking Thursday afternoon explicitly for this.

---

*Generated: 2026-06-12 (Friday EOD)*
*Data sources: W24 weekly plan, daily plans (8–12 Jun), meeting notes (3 meetings), decisions log, S3 Jira state*
*Next: `/stale-check` → `/weekly-plan` for W25*
