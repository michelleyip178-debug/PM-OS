---
date: 2026-06-08
type: Risk & Dependency Analysis
topic: OTEP-127 Ringfencing — dependencies, risks, and assumptions
linked-decision-doc: outputs/meeting-notes/2026-06-08-bo-edge-cases-decisions.md
---

# Ringfencing: Dependencies, Risks & Assumptions

**Context:** OTEP-127 (ringfenced opportunities) is slated for S5. This doc captures what has to be true for it to build safely.

---

## Dependencies

- **POCDEX production readiness (open item #31)** — Option B (show but disable) requires a POCDEX eligibility check at detail page load. Pow Hwee's productionisation plan targets ~23 Jul cutover. If that slips, ringfencing can't be built for S5.
- **OTEP-202 (seed POCDEX database)** — no sprint assigned yet. Eligibility checks are meaningless without officer data in POCDEX.
- **WOG AD auth (open item #26)** — POCDEX reads officer profile via WOG AD identity. If WOG AD onboarding slips, POCDEX can't identify the officer, and the eligibility check has no subject.
- **OTG ingestion carrying audience criteria** — OTEP can only enforce ringfencing if the "Limit to" criteria from OTG's Audience Setup is ingested and stored. Not yet confirmed this field is in the data model — open question to Pow Hwee.
- **BO sign-off (open item #43)** — Amber and Pow Hwee are both blocked until the 7 BO questions are answered. See [BO decision doc](../meeting-notes/2026-06-08-bo-edge-cases-decisions.md).

**The critical chain:** WOG AD (#26) → POCDEX production (#31) → seed data (OTEP-202) → eligibility check. Four links, all must close before S5 ringfencing can build. Any one slipping pushes OTEP-127 out.

---

## Risks

- **POCDEX data quality too low to trust eligibility decisions.** Stale or incomplete profiles mean eligible officers get incorrectly blocked — worse than no ringfencing at all. No data quality threshold set yet (open item #33).
- **POCDEX downtime breaks the apply flow.** If Option B is chosen and POCDEX is unavailable at page load, two bad fallbacks: default Apply enabled (ineligible officers can apply) or default Apply disabled (eligible officers blocked). Neither is clean — needs a policy call.
- **Agencies edit audience criteria post-publish.** An officer bookmarks an eligible opportunity, returns later, finds they're blocked. No handling exists for mid-flight audience changes.
- **"Exclude" mode surfaces at pilot.** One agency needing exclusion logic collapses the MVP scoping decision with no design or build time budgeted.
- **Officer backlash to ineligibility messaging.** If officers read "not open to you" as a bug and raise queries to agencies, it creates noise for BOs and erodes platform trust early.

---

## Assumptions

- Pilot agencies will post at least one live opportunity at launch (Decision 2 hinges on this)
- Pilot agencies can express all audience restrictions as "Limit to" — no "Exclude" needed at pilot
- POCDEX profiles will be complete enough for the pilot officer cohort before S5 builds
- OTG audience criteria (agency, job family) maps cleanly to POCDEX profile fields — no transformation or mapping logic needed
- Officers will accept ineligibility as policy, not report it as a bug
- Eligibility criteria are static per opportunity — agencies don't change audience settings after posting

---

*Linked to: [BO Decision Request](../meeting-notes/2026-06-08-bo-edge-cases-decisions.md)*
*Open item: #43 in [open-items.md](../../../PM-skills-ALL-1/00-hub/open-items.md)*
