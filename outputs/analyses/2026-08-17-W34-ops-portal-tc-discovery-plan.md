# How to Discover More About the Other 8 Test Cases

The 6 priority TCs (TC1, TC2, TC3, TC7, TC8, TC9) already have real handling logic. The other 8, TC4, TC5, TC6, TC10, TC11, TC12, TC13, TC14, are mostly marked "known gap," "requires discovery," or "not currently handled." Nobody's turned that into an actual plan yet, but one already exists. It's sitting in the POCDEX operational design doc, drafted, never started. Using that instead of writing a new one from scratch.

## The 7-Activity Workplan, Already Scoped, Status: Open

| Activity | Lead | Who's Needed | Effort | What It Closes |
|---|---|---|---|---|
| Validate TC1–TC14 outcomes, including NRIC fallback scenarios | Compass Product Lead | Product, Ops, POCDEX, WOG AD | 2 workshops | First pass on all 8, sorts out which are still real gaps and which turn out already solved |
| Confirm email + NRIC/FIN fallback contract | Compass Product Lead | WOG AD + POCDEX owners | 2–3 days | TC2, TC4, TC13, all three come down to how identity fallback actually works |
| Confirm profile API and timestamp semantics | Tech lead | POCDEX owner | 2–3 days | TC5, TC6, need to know if POCDEX's data is diffable daily, not just readable at login |
| Sample and investigate the 90 lifecycle-risk cases | Ops/data analyst | Pilot agencies | 3–5 days | TC12 and TC13, real cases exist to sample here, they're not hypothetical |
| Design daily-diff repull and reconciliation | Tech lead | Engineering, security, Ops | 3–5 days | TC5, TC6, TC10, TC11, anything that depends on the diff actually catching a field |
| Size backlog and recurring demand | Compass Product Lead | Ops/data analyst | 1–2 days | Turns "known gap" into an actual volume estimate so it can be prioritized honestly |
| Agree recommendation and roadmap | Compass Product Lead | Stakeholders | 1 workshop | Turns findings into a real decision: build now, defer, or accept the gap |

Case-sampling priorities are already set: the one officer with more than 2 active positions, the worst known case; a 15-officer sample of the 71 duplicate/multi-hat cases; a 10-officer sample of missing-email cases, to check whether the cause is consistently a WOG AD/POCDEX mismatch or varies.

## Two Real Paths

Capacity's likely constrained, and the source document lays out two options instead of pretending there's only one.

| | Full Path | Fast Path |
|---|---|---|
| What it is | Run the 7 activities, then build proper automated resolution | Skip discovery, ship a manual runbook |
| Effort | 55–125 person-days (this number's already flagged elsewhere as stale) | 15–25 person-days |
| What it delivers | Automated identity resolution and daily reconciliation for every officer | Ops views, access controls, audit trail. Manual triage, not automation |
| Blocked by | Needs the identity design approved first | Nothing, can start immediately |
| Risk | Low once built | High, recurring cases like rejoin or identifier change stay manual indefinitely unless someone names this a stopgap |

## Why It's Worth More Than 8 Line Items

TC13 (Critical) and TC11 (High) both live in this list. This isn't cleanup work on minor edge cases, it's the actual route to fixing the one failure mode the whole Ops Portal exists to prevent. Right now that fix is "the NRIC/FIN token is designed but not built." This workplan is what turns designed into built.

## Next Steps

None of the 7 activities have started yet.

1. Bring this to whoever owns the open decisions in the PRD, Product + Architecture, as a plan already sitting on the shelf, not something to re-derive.
2. Pick Full Path or Fast Path on purpose. The source doc is clear this shouldn't just happen by default because time ran out.
3. If Fast Path wins, say so explicitly in the PRD as an interim stopgap. Otherwise it quietly becomes the permanent answer.
