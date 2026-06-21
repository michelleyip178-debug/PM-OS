---
date: 2026-06-09
meeting: Internal Mid-Sprint Review
sprint: Pathfinder Sprint 3 (Sprint 34617) — Day 6
attendees: Full Pathfinder team (Pow Hwee, Léo, Rathika, Thomas, Hao Eng, Michelle)
duration: ~30 min
---

# Meeting Notes: Internal Mid-Sprint Review

**Date:** 9 June 2026

**Sprint:** Pathfinder Sprint 3 — 3 days to end (closes 14 Jun)

---

## Summary

Three items covered: C@G API readiness for demo, reconciling C@G and OTG opportunity schema fields, and unblocking the QA backlog. Pow Hwee wants live C@G data loaded before the sprint demo next week. Léo and Pow Hwee are resolving the schema reconciliation today. Rathika is shifting QA approach to test locally now and move to dev environment via a dedicated test ticket when the environment is ready.

---

## Decisions Made

1. **C@G data will be manually loaded for the sprint demo**
   - Why: The C@G API needs to be readable and the listing visible before the demo. Manual load is the fastest path to a demoable state.
   - Owner: Pow Hwee (load) + Léo (DB schema / API readability)
   - Target: Ready before next week's sprint demo

2. **C@G and OTG opportunity field reconciliation to be resolved today**
   - Why: Both systems have different schemas. The DB schema needs to accommodate both before data can be loaded.
   - Owner: Pow Hwee + Léo
   - Target: Today

3. **Rathika's QA approach updated**
   - Current: Deploy to local environment and test now (to unblock and close QA tickets this sprint)
   - Future: Create one ticket to re-test in dev environment once it's ready
   - Why: Dev environment not yet ready — local testing is the pragmatic path to closing QA items before sprint end

---

## Action Items

| Task | Owner | Due | Notes |
|---|---|---|---|
| Ensure C@G API is readable and listing works | Léo | Before demo (w/e 14 Jun) | DB schema confirmed as part of this |
| Load C@G data manually for sprint demo | Pow Hwee | Before demo | Enough data to demonstrate listing |
| Reconcile C@G and OTG opportunity field schema | Pow Hwee + Léo | Today | Unblocks data load |
| Deploy QA items to local and test | Rathika | This sprint | Close QA tickets in Sprint 3 |
| Create ticket for dev environment QA re-test | Rathika | This sprint | One ticket covering the full QA sweep in dev |

---

## Open Questions

- [ ] Which C@G data fields are confirmed for the demo schema? — Pow Hwee + Léo (resolving today)
- [ ] Which QA tickets does Rathika's local testing cover? — Confirm at standup to track against sprint close
- [ ] Is there a demo script / scenario for showing C@G + OTG together? — Michelle to check before demo

---

## Sprint Close Risk

The mid-sprint review originally flagged OTEP-319 (apply via FormSG) and OTEP-86 (filters) as the sprint goal stories, both still Backlog. This meeting didn't address either — the discussion was focused on demo prep and QA process.

**Risk:** Sprint 3 goal (officer can find and initiate an application) may not close. The demo next week will show C@G listings manually loaded, but the sprint goal stories haven't visibly moved.

Raise at tomorrow's standup: has anyone picked up OTEP-319 or OTEP-86?

---

## Context

- Sprint demo is next week (week of 14 Jun, exact date TBC)
- Dev environment readiness is a dependency for proper QA — Rathika's local workaround is a sprint 3 bridge, not a permanent approach
- C@G data load is groundwork for Sprint 4 goal ("officer sees both OTG and C@G opportunities in one listing")
- Schema reconciliation (Pow Hwee + Léo) is a prerequisite for OTEP-87/88/89 in Sprint 4

---

*Processed: 2026-06-09*
*Tickets in scope: OTEP-85, OTEP-86, OTEP-87, OTEP-88, OTEP-89, OTEP-319, QA backlog*
