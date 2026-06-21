---
date: 2026-06-10
type: meeting-notes
meeting: Daily Standup
sprint: Sprint 3, Day 7
attendees: [Pow Hwee, Léo, Thomas, Hao Eng, Rathika]
---

# Daily Standup — Wednesday, 10 June 2026

**Sprint 3, Day 7 of 9**

---

## Summary

Positive signals: OTG ingestion merged (Léo), login done (Thomas). Two clear asks landed on Michelle: fill WOG AD form today, and produce a UI PRD before Hao Eng progresses the UI. Sprint 4 planning posture confirmed: readability first, mock data by tomorrow's planning session.

---

## Decisions Made

1. **S4 Day 1 target: readability + mock data**
   - Team aligned that tomorrow's sprint will start with getting C@G data readable and pumping in mock data, not full live pipeline.
   - Implication: OTEP-88 starts with mock data, not live C@G ingest. Confirm C@G pipeline state with Pow Hwee before Planning.

2. **Integration test approach confirmed: Docker-isolated DB**
   - Léo's integration test uses Docker to run the DB so the test container is isolated. Adrian approved. Léo will share with Kingsley.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Fill in WOG AD form (Fabian provided it) | Michelle | Today | 🔴 High |
| Draft UI PRD before Hao Eng advances UI work | Michelle | Before Hao Eng picks it up | 🔴 High |
| Review Core's API ahead of Dependencies Sync (16:00) | Michelle | Before 16:00 today | 🔴 High |
| Confirm who holds the master (re: Core's data ownership) | Pow Hwee / Michelle | Dependencies Sync today | 🟡 Medium |
| Share integration test with Kingsley | Léo | TBD | 🟡 Medium |
| Clarify C@G description structure for detail page | Thomas + Michelle | Before Planning tomorrow | 🟡 Medium |

---

## Key Updates by Person

**Pow Hwee**
- WOG AD form: needs to be filled by today (open item #26 — this is now urgent)
- Pre-work for Dependencies Sync: review Core's API to make the 16:00 session more productive
- Open: confirm who holds the master data (Core's SSOT for competencies, job family, etc.)

**Léo**
- OTG ingestion merged. Big win.
- Integration test approach: Docker-isolated DB. Adrian approved. Sharing with Kingsley.
- Want to tie a job ID to each IMPORT run for troubleshooting — enables tracing which import job hit issues. No decision yet on implementation approach.

**Thomas**
- Login (WOG AD swap-in) done. Merge ticket sent this morning.
- Raised: how should C@G description show on the detail page? Structure TBD — Michelle to weigh in.

**Hao Eng**
- Looking at UI first cut.
- Clear signal: don't advance UI until Michelle provides a UI PRD.
- Code table can close this sprint.

**Rathika**
- QA in progress (14 items in QA per board — on track).

---

## Open Questions

- [ ] What structure does Thomas expect for C@G description on the detail page? — Michelle to define before Planning
- [ ] Who holds the master for Core's data? — Pow Hwee / Dependencies Sync today
- [ ] C@G ingest: live pipeline or mock data for S4 start? — Confirmed as mock data for Day 1; confirm full timeline with Pow Hwee

---

## Flags for Michelle

**WOG AD form is now urgent.** Pow Hwee flagged it explicitly as "needs to be filled by today." This unblocks auth (OTEP-71) and the CSC SSO chain. Move open item #26 from "this week" to "today."

**UI PRD needed.** Hao Eng held back his UI work pending Michelle's PRD. If this isn't produced before S4 starts, UI work stalls. This is a new implicit dependency — not previously captured as a blocker.

**C@G description structure.** Thomas raised this in standup — no answer given. Needs a decision before Planning tomorrow or it becomes a sizing unknown.

---

## Sprint 4 Planning Posture (from standup close)

> "For tomorrow's sprint, we will target to have the readability first and able to pump in mock data first."

This confirms the mock-data-first approach for OTEP-88. Update planning prep if this changes the sizing or sequencing.

---

*Saved: 2026-06-10. Next: update daily plan with WOG AD urgency + UI PRD as new action items.*
