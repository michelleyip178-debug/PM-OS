# Meeting Notes: OTEP Squad Sync

**Date:** 2026-05-26
**Time:** 09:30–10:30
**Meeting type:** Team sync
**Attendees:** Michelle (PM), Pow Hwee (Tech Lead), Adrian Ang (PO), Rama Moorthy, Amber (Designer), OTEP Core team
**Facilitator:** Michelle / Adrian

---

## Summary

Three key shifts came out of today's Squad Sync: FormSG pre-fill is out of MVP scope (native in-OTEP application form targeted for R1), PostHog has been identified as a candidate analytics tool for OTEP metrics and OKR monitoring, and there's an open action to check the Pathfinder team's current build state and verify design implementation before sharing with users.

---

## Decisions Made

### 1. FormSG pre-fill removed from MVP; native application form targeted for R1

- **Decision:** FormSG pre-fill via URL params is out of MVP scope. The plan is to fold the application form natively into OTEP as part of R1 (Seamless Application).
- **Rationale:** FormSG pre-fill via URL params is technically fragile — if an agency changes any form field, the pre-fill breaks, creating a maintenance dependency outside the team's control. Combined with the BO meeting decision (no OTG redirects, officers should not have to re-authenticate), a native in-OTEP form is the only stable long-term path.
- **Impact:** OTEP-130 (Apply via FormSG link) scope changes. MVP retains the basic FormSG redirect/webhook flow but drops the pre-fill. Native application form becomes an R1 deliverable, feeding into the R1 Seamless Application PRD.
- **Connects to:** BO Strategic Review decision on "no OTG redirect" constraint; Pow Hwee's technical flag (2026-05-25 adhoc notes); R1 Seamless Application PRD (Target: Q1 2027).

### 2. PostHog shortlisted for OTEP metrics and OKR monitoring

- **Decision:** PostHog selected as the analytics/monitoring tool for OTEP. Tooling evaluation already completed by Rama.
- **Rationale:** Can cover product metrics and OKR tracking in one place. Also provides data for appraisal visibility.
- **Next step:** Design how to instrument PostHog to measure OTEP's OKRs and North Star (50% officers complete a development action by Dec '28). Define event taxonomy and metric definitions with Rama.
- **Owner:** Michelle (metric design); Rama (tooling setup).

### 3. Pathfinder check-in needed on current build state

- **Decision:** Team should check in with the Pathfinder squad on what is currently deployable / visible to users. Run through with Amber to confirm design has been implemented as intended before any sharing.
- **Context:** Early checks with the team (via URL if available) help surface implementation gaps before user exposure.
- **Owner:** Michelle to initiate check-in; Amber to verify design implementation.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Update FormSG PRD — remove pre-fill from MVP scope; note R1 native form direction | Michelle | This week | High |
| Update OTEP-130 in Jira — re-scope to MVP (basic redirect + webhook only, no pre-fill) | Michelle | This week | High |
| Brief Xian Zhang + Jacky on FormSG scope change at 14:00 design review today | Michelle | Today 14:00 | High |
| Design PostHog OKR + metric instrumentation — event taxonomy, metric definitions (tooling evaluation done by Rama) | Michelle + Rama | W/c 1 Jun | Medium |
| Reach out to Pathfinder team to check current build state and get URL if available | Michelle | This week | Medium |
| Run through deployed Pathfinder build with Amber — verify design intent was implemented | Michelle + Amber | This week | Medium |
| Share Pathfinder URL with broader team for early checks (once Amber confirms) | Michelle | After Amber check | Medium |

---

## Open Questions

- [ ] Does the Sprint 3 FormSG scope need to be updated in the sprint board? Specifically OTEP-130 — confirm revised AC with Pow Hwee. **Owner:** Michelle — before next grooming
- [ ] What is the Pathfinder team's current deployment URL? **Owner:** Michelle to check with Pathfinder / Imelda
- [ ] What metrics does PostHog cover out of the box vs. needing custom instrumentation? **Owner:** Michelle (PostHog evaluation)
- [ ] Will the BO team (Xian Zhang / Jacky) need to formally sign off on the FormSG pre-fill descoping? **Owner:** Michelle to confirm at 14:00 design review

---

## Key Context

**FormSG pre-fill decision — why it matters:**
The FormSG Integration PRD listed pre-fill via URL params as an unresolved risk since Sprint 3 scoping. Today's decision resolves it: it's out for MVP. This avoids building a fragile integration the team can't maintain (agency form changes silently break pre-fill). The better path — a native in-OTEP application form — becomes the R1 target. This is consistent with the BO meeting's outcome: officers should not be redirected outside OTEP for opportunity applications.

**PostHog — appraisal connection:**
Monitoring OTEP's OKRs (e.g. % officers who complete a development action by Dec '28) needs a proper analytics layer. PostHog being in place would make the data visible and attributable — important for appraisal evidence as well as product iteration. Evaluation should focus on: event tracking setup, OKR metric dashboards, cost at OTEP's expected usage scale.

**Pathfinder check — why now:**
Pathfinder sprint work (Sprint 5: OTEP-88, 89, 130, 133) is advancing. Before anything goes in front of users, the design intent (owned by Amber) needs to be validated against what's been built. This is a standard quality gate — run it before sharing externally.

---

## Links

- [FormSG Integration PRD](../../context-library/prds/formsg-integration.md)
- [R1 Seamless Application PRD](../../context-library/prds/r1-seamless-application-draft.md)
- [OTEP-130: Apply for STIP/Gig via FormSG link](../../../PM-skills-ALL-1/03-stories/jira-sync/OTEP-Pathfinder-Sprint-5/OTEP-130.md)
- [BO Strategic Review Notes (2026-05-25)](./2026-05-25-W22-bo-strategic-review-notes.md)
- [Pow Hwee Adhoc Notes (2026-05-25)](./2026-05-25-W22-adhoc-pow-hwee.md)

---

*Processed: 2026-05-26*
*Next: Brief Xian Zhang + Jacky on FormSG decision at 14:00 design review. Update FormSG PRD this week.*
