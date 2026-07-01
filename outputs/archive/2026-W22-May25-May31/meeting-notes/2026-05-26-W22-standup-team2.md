---
date: 2026-05-26
time: "11:00–11:15"
type: Daily standup
squad: OTEP Team 2
---

# Meeting Notes: OTEP Team 2 Daily Standup

**Date:** 2026-05-26
**Time:** 11:00–11:15
**Type:** Daily standup (Michelle absent — dental clash; updates captured async from Slack)
**Attendees:** Pow Hwee Tan (Tech Lead), Léo, Thomas Huchedé, Rathika, Amber Tong (Designer), Adrian Ang (PO), Rama Moorthy
**Michelle's status:** Sent updates + questions via Slack before standup; Léo to follow up with summary.

---

## Summary

Léo confirmed OTEP-267, OTEP-128, and OTEP-129 are on track to close before sprint end (Friday 29 May). Status of remaining Backlog stories is uncertain. Thomas flagged a potential demo blocker — no DEV environment available — and confirmed a UI review with Amber on Thursday. FormSG pre-fill decision (drop pre-fill, redirect + webhook for MVP, native form in R1) was confirmed to the team.

---

## Decisions Made

### 1. FormSG pre-fill dropped — redirect + webhook for MVP, native form in R1

- **Decision:** Confirmed to the team (decision originated in Squad Sync at 09:30).
- **MVP scope:** Basic FormSG redirect + webhook only. No pre-fill.
- **R1 direction:** Application form folded natively into OTEP (R1 Seamless Application, target Q1 2027).
- **Impact:** OTEP-130 ACs need updating. FormSG PRD needs to be updated this week.
- **Owner:** Michelle to update FormSG PRD and OTEP-130 Jira ticket.

---

## Updates by Person

### Léo
- **OTEP-267** (pagination), **OTEP-128** (detail page), **OTEP-129** (open/closed status) — expected to be completed by end of Sprint 2 (Friday 29 May).
- Status of other sprint tickets: **uncertain**. No specifics given. Stories at risk are likely OTEP-85, OTEP-295, OTEP-313, OTEP-314, OTEP-316.
- Will update Michelle on the standup discussion (since she missed it).

### Thomas
- Will **review UI with Amber on Thursday (28 May)** — going through the opportunity details page design vs. implementation.
- **Demo concern flagged:** No "DEV" environment available. This creates a challenge for the Sprint Review demo on Friday.
- **OTEP-276 note:** Can likely do a spike on Friday for visibility, but not a current priority.
  - ⚠️ Note: OTEP-276 was marked resolved (OTEP-252 Done confirmed Flagship/LifeSG adopted). Clarify with Thomas what this spike covers — is this a new concern or residual cleanup?

### Michelle (async updates sent pre-standup)
- Provided sprint planning updates and questions ahead of the session (absent due to dental clash at 11:00).
- **Requested:** Team to provide estimated breakdowns for Sprint 3 stories **before Sprint Planning on Thursday (29 May)**.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Provide Sprint 3 story estimate breakdowns before Thursday | Pow Hwee / Léo / Thomas | Before Sprint Planning Thu 29 May | High |
| Update FormSG PRD — remove pre-fill from MVP, note R1 native form direction | Michelle | This week | High |
| Update OTEP-130 Jira — re-scope to MVP (redirect + webhook only, no pre-fill) | Michelle | This week | High |
| UI review: Thomas + Amber — opportunity details page | Thomas + Amber | Thursday 28 May | High |
| Clarify OTEP-276 spike scope with Thomas — is this a new concern or residual cleanup? | Michelle | Before sprint end | Medium |
| Confirm demo plan for Friday Sprint Review — how do we demo without a DEV environment? | Michelle + Pow Hwee | By tomorrow (Thu 28 May) | High |
| Léo to update Michelle with standup summary | Léo | Today | Done (promised) |

---

## Open Questions

- [ ] **Demo environment:** Thomas flagged no DEV environment available. How do we run the Sprint Review demo on Friday? Options: local build? staging? mocked data? **Owner:** Pow Hwee + Thomas to propose. Michelle to confirm. **By:** Thursday morning.
- [ ] **Sprint 2 ticket risk:** Léo confirmed OTEP-267/128/129 on track but "other tickets uncertain." Which specific stories are at risk of not completing Sprint 2? Needs explicit Jira status from Léo/Pow Hwee before Thursday. **Owner:** Léo/Pow Hwee. **By:** Wednesday evening or Thursday morning.
- [ ] **OTEP-276 spike:** Thomas mentioned a Friday spike "for visibility." Sprint status marks OTEP-276 as resolved. Clarify what work Thomas is referring to. **Owner:** Michelle to ping Thomas. **By:** Thursday.

---

## Sprint 2 Status (Inferred from Standup)

| Story | Confirmed | Status |
|-------|-----------|--------|
| OTEP-267 (pagination) | ✅ Léo | On track for sprint end |
| OTEP-128 (detail page) | ✅ Léo | On track for sprint end |
| OTEP-129 (open/closed status) | ✅ Léo | On track for sprint end |
| OTEP-85 (opportunity cards) | ❓ Not mentioned | Status unclear |
| OTEP-268 (empty/error states) | ❓ Not mentioned | Status unclear |
| OTEP-295 (mock detail endpoint) | ❓ Not mentioned | Status unclear |
| OTEP-313 (OTG raw ingest table) | ❓ Not mentioned | Status unclear |
| OTEP-314 (detail page consuming OTEP-295) | ❓ Not mentioned | Status unclear |
| OTEP-316 (replace mock endpoint with DB query) | ❓ Not mentioned | Status unclear |
| OTEP-193 (data model design) | ❓ Not mentioned | Status unclear |

**Risk:** Thomas is sole FE. All frontend stories (OTEP-128, OTEP-129, OTEP-314) funnel through him. His UI review with Amber on Thursday may affect available delivery time Friday.

---

## Key Risk: No DEV Environment for Demo

Thomas flagged this directly. The Sprint Review + Retro is **Friday 29 May**. Without a DEV environment:
- Demo may need to run from a local build
- Or be scripted/mocked (reduces credibility with stakeholders)
- Or be deferred to a short "walkthrough" format instead of live demo

**Recommended action:** Pow Hwee and Thomas to align on the demo approach by Thursday morning. Bring the plan to Michelle before Sprint Planning starts.

---

## Links

- [Sprint Status](../../../../PM-skills-ALL-1/00-hub/sprint-status.md)
- [Sprint Calendar](../../../../PM-skills-ALL-1/04-ceremonies/sprint-calendar.md)
- [OTEP Squad Sync Notes (2026-05-26)](./2026-05-26-W22-otep-squad-sync.md)
- [FormSG Integration PRD](../../context-library/prds/formsg-integration.md)

---

*Captured: 2026-05-26 (async — Michelle absent, updates from Slack thread)*
*Source: Standup Slack thread, Leo's follow-up summary*
*Next: Confirm demo plan for Friday. Get Jira status from Léo on uncertain tickets by Thursday morning.*
