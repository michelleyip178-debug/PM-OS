---
date: 2026-06-24
day: Wednesday
week: 2026-W26
sprint: S4 Week 2 (closes Fri 28 Jun)
mcps_used: Google Calendar, Jira (live)
---

# Daily Plan — Wednesday, 24 June 2026

## TL;DR

- **Meetings:** 3 (10:00 BO Senior, 11:00 standup, 14:00 Design System alignment) + R1 jam in PM
- **P0:** KR docs by EOD — Jace reads these at 8:45 tomorrow
- **Key focus:** R1 jam with Adrian shapes what goes to Mark; KR docs close the mid-year gate

---

## Today's Two

1. [ ] **R1 jam with Adrian (PM)** — run the Reforge structure, walk out with agreed epic order + direction on ATS fork. Draft #40 ask immediately after while thinking is fresh.
2. [ ] **KR docs finalised by EOD** — 3 KR definitions with numbers. Thomas + Léo data should be in. Jace check-in tomorrow 8:45.

---

## Schedule

| Time | Meeting | Prep | Context |
|------|---------|------|---------|
| Before 10:00 | Send Adrian pre-read | ✅ One-pager ready | DM the link before the session |
| 10:00 | OTEP Product x BO Senior | ✅ Know S4 QA tail + S5 gate state | Strategy alignment; know what's in QA (8 stories) |
| 11:00 | OTEP Team 2 standup | No prep | See Standup Lens below |
| PM | R1 jam with Adrian | ✅ 4-epic draft prepared | Main event — see R1 Run-of-Show below |
| Post-jam | Draft #40 ask to Mark + KR docs | ⚠️ Must finish before 16:00 | KR docs are EOD hard deadline — don't let the 16:00 block eat this window |
| 16:00 | Product x BO Ad Hoc Sync | ⚠️ Unknown agenda | Ad hoc — go in knowing S4 QA status and R1 jam outcome |
| 17:00 | Design System vs Storybook Alignment | ⚠️ Skim Squad Sync notes | Follow-up from yesterday's sync. Your role: listen, support; Rama owns it. |

---

## Standup Lens

- **PM WIP overload still live:** OTEP-127 + OTEP-427 + OTEP-397 all In Progress under Michelle — listen for any engineer blocked on these; if not, park one before sprint close Fri
- **8 stories in QA with 4 days left:** Listen for any QA blockers — OTEP-86, OTEP-305, OTEP-268, OTEP-128 are the priority ones to land before Fri
- **OTEP-499 moved to Done** — good signal from Hao Eng; check if CFT upload integration is unblocking anything downstream

---

## R1 Jam Run-of-Show

**Framework:** Reforge Feature Opportunity Validation (Strategic Fit → User Value → Business Value)

**Prep docs:** [one-pager](../decisions/2026-06-22-r1-jam-onepager.md) · [jam draft v3](../decisions/2026-06-22-r1-jam-draft-v2.md) · [Reforge briefing](../decisions/2026-06-23-r1-manager-briefing-reforge.md)

**Opening (2 min):** Walk the 4-level ladder — Mission → Strategy → Product → OKRs

**Proposal (5 min):** 4 Epics + MoSCoW

| Epic | What | MoSCoW |
|------|------|--------|
| A — Opportunity Creation | Agencies author IJ + Secondments natively | Must (narrow) |
| B — Streamlined Apply + Pre-fill | Native in-Compass form, profile pre-populated | Must |
| C — Status Tracking | OTEP-native state machine: submitted → under review → outcome | Must |
| D — Saved Jobs | Bookmark + resume | Should/Could |

**4 decisions to get from Adrian (10 min):** (1) Creation breadth — narrow vs full 5-type? (2) ATS fork — World A vs World B? (3) Criteria authoring — R1 or R1.5? (4) Agency-admin auth — exists, who owns it?

**Close:** "I'll take this to Mark this week. Won't open the R1 pipeline until he confirms."

---

## Heads Up

- **Don't signal MVP build is done in the jam** — 8 stories still in QA, search/sort in flight. Direction is locked; build isn't.
- **PSFG stays conditional** — Jace check-in is tomorrow 8:45. Hold as "4 types confirmed; PSFG pending policy intent."
- **VAPT timeline risk — surface tomorrow with Jace** — Squad Sync yesterday surfaced that Oct go-live is likely unachievable (VAPT + remediation = up to 2 months after ~4 Sep UAT). November is more realistic. Raise this at the 8:45 check-in: "Based on Tuesday's sync, we should socialise a November landing before it surfaces at SteerCo."
- **KR docs window is tight** — 16:00 BO Ad Hoc + 17:00 Design System means your only clear writing window is between R1 jam and 16:00. Protect it.
- **16:00 BO Ad Hoc Sync is unscheduled — no agenda visible** — go in knowing S4 QA tail status and the R1 jam output; it may be a follow-up to today's 10:00 BO Senior session.
- **17:00 Design System alignment is a listening session** — Rama called it; go in with the Squad Sync framing (systemic problem, no root-cause fix yet). Your job is to support whoever is running root cause, not own it.
- **Mark sequence** — shape with Adrian first, then Mark. Don't open R1 story pipeline until Mark confirms (#40).

---

## Growth Nudge

The R1 jam is your highest-leverage stakeholder moment this week — you're not presenting options, you're walking in with a recommendation and using the Reforge structure to get Adrian to direction fast. That's outcomes thinking and stakeholder influence in the same room.

<details><summary>Appendix</summary>

### Recently Completed (git log since yesterday)
Squad Sync meeting notes (2026-06-23-squad-sync-launch-readiness.md) processed and saved.

### Sprint Stories — S4 (as of 2026-06-24 live Jira pull)

| Status | Count | Notable |
|--------|-------|---------|
| In Progress | 13 | PM owns 3 (OTEP-127, 427, 397) — WIP overload |
| QA | 8 | OTEP-86, 85, 268, 305, 128, 324, 129, 438 |
| Done | 21 | OTEP-499 moved Done today |
| Backlog | 23 | |

### Squad Sync Context (2026-06-23)
Key findings: staggered UAT agreed; VAPT timeline could push go-live to November (was Oct 19-23); no end-to-end launch readiness owner named; design governance still systemic. Michelle action: UAT test cases from PRDs with Imelda (before Aug, not urgent). Full notes: [2026-06-23-squad-sync-launch-readiness.md](../meeting-notes/2026-06-23-squad-sync-launch-readiness.md)

</details>

---

*Updated: 2026-06-24 (v3 — calendar resync: Product x BO Ad Hoc at 16:00 added; Design System alignment moved to 17:00)*
*Sources: Google Calendar, live Jira, W26 weekly plan, Squad Sync meeting notes (2026-06-23)*
