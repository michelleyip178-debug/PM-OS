# Meeting Notes: OTEP Team 2 Standup (Slack)

**Date:** 2026-05-25
**Type:** Team standup — Slack thread
**Attendees:** Michelle Yip, Adrian Ang, Pow Hwee Tan, Rama Moorthy
**Also mentioned:** Barry Lim, Fanxu

---

## Summary

Two backend tracks are surfacing as significant risks to the October launch: POCDEX (elevated to Epic given its foundational role) and WOG AD domain onboarding. A key scope question was raised — whether CSC SSO is an MVP must-have — with Adrian flagging technical feasibility concerns based on prior testing. Resource planning is underway to address squad dependency and velocity risk.

---

## Decisions Made

1. **POCDEX elevated to Epic**
   - Why: POCDEX is foundational — Ringfencing and Officer Profile creation both depend on it. Elevation allows closer tracking of external risks.
   - Impact: Tighter visibility on POCDEX delivery risk across Sprints 3-4

---

## Open Questions (Need Decisions)

- [ ] **Is CSC SSO an MVP must-have?**
   - Michelle's position: Deprioritising CSC SSO means officers log in twice when accessing external CSC systems — manageable friction that relieves October launch pressure
   - Adrian's concern: Seamless SSO from WOG AD through to CSC (no re-sign-in) may not be technically possible — based on his testing with AiBots and Learn
   - **Next step:** Pow Hwee to confirm technical feasibility of seamless WOG AD → CSC SSO. If not feasible, CSC SSO should be cut from MVP scope.
   - **Owner:** Pow Hwee (technical assessment) → Michelle + Adrian (scope decision)

- [ ] **What is the full list of integration tasks?**
   - Michelle asked Rama to follow up with Pow Hwee on this
   - **Owner:** Rama to check with Pow Hwee

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Confirm technical feasibility of seamless WOG AD → CSC SSO | Pow Hwee | Before next standup | High — blocks MVP scope decision |
| Provide full list of integration tasks | Pow Hwee (via Rama) | Before next standup | High — feeds resource planning |
| Discuss additional resource beyond Fanxu | Rama + Barry Lim | This sprint | Medium — addresses velocity risk |
| Confirm additional fullstack developer joining from Sprint 4 | Rama | Sprint 4 | Medium |

---

## Blockers & Risks

**Risk 1: CSC SSO feasibility**
- If seamless SSO across WOG AD → CSC is not technically possible, this removes the question from MVP scope by default
- Adrian's AiBots/Learn testing suggests it may not work — needs engineering confirmation before the decision is made

**Risk 2: Squad dependency**
- Squad currently depends on only two individuals for key tracks
- Mitigation in progress: Rama + Barry Lim discussing additional resource; fullstack developer expected from Sprint 4

**Risk 3: POCDEX external dependency**
- POCDEX is P0 for Ringfencing and account creation — any delay to POCDEX plumbing (Sprint 3) or ringfencing build (Sprint 4) directly impacts launch
- No established support structure yet (OTEP is first project on POCDEX API)

---

## Context Notes

- **October launch date** is the pressure point behind both the CSC SSO scope question and the resource planning urgency
- **POCDEX → Epic:** This is a tracking change, not a scope change. The work was already P0; elevation gives it better visibility and risk management
- **Claude AI** was noted as having assisted with risk checks (for context if this comes up in future reviews)

---

*Saved: outputs/meeting-notes/2026-05-25-W22-otep-standup-slack.md*
*Related PRDs: context-library/prds/pocdex.md, context-library/prds/wog-authentication.md*
*Next: Update POCDEX PRD to reflect Epic elevation. Follow up on CSC SSO feasibility.*
