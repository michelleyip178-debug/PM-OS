# Meeting Notes: POCDEX DO x Compass Weekly Sync

Date: 2 September 2026 (W36)

Attendees: Pow Hwee Tan, Huiting Lian, Johnny Lim, Adrian Ang, Adrian Lo, Compass ITC, POCDEX team

Meeting type: weekly sync, ran as a working session across three workstreams

Source: full transcript, reviewed.

Related: this is the POCDEX-side counterpart to the employment-profile work tracked in [2026-09-01-W36-grooming-employment-profile-changes.md](2026-09-01-W36-grooming-employment-profile-changes.md), [2026-09-02-W36-otg-operational-review-employment-profile.md](2026-09-02-W36-otg-operational-review-employment-profile.md), and the executable test cases in [2026-09-02-W36-movement-uat-test-cases-compass.md](../analyses/2026-09-02-W36-movement-uat-test-cases-compass.md) and [2026-09-02-W36-identity-uat-test-cases-compass.md](../analyses/2026-09-02-W36-identity-uat-test-cases-compass.md).

---

## Summary

Billed as a weekly sync, this was really a working session on three things: the employment-profile-change solution, the timeline for tomorrow's WD update and the November soft launch, and who signs off what between Compass, WD, and POCDEX. The teams aligned on the production-load timeline, the Last Updated Date strategy, the API requirements, and the UAT accountability model. What's still open: employment-profile-change scope and effort, identity-resolution end-state design, and production-load de-risking.

The single most useful outcome was resolving the UAT sign-off question. Huiting was clear that API validation has to be accountable to PSD personnel, not vendors. The model that landed: WD does application-level UAT, Compass ITC validates the API outputs, and Compass PSD staff provide the sign-off POCDEX needs. Vendors are not the accountable signatories.

---

## Decisions Made

| Decision | Detail | Who |
|---|---|---|
| Production-load timeline representation | Split "production data load" and "post-load monitoring" into separate activities on the timeline. Loading starts the week of 2 Nov and finishes in roughly a week; the rest of the window is monitoring, not active loading. Stakeholders should read the timeline as "load complete before soft launch". | POCDEX team, Compass |
| Last Updated Date strategy | Expose Last Updated Date per API endpoint. Do not roll it up into a single global value. Compass handles the reconciliation logic on its side. | Johnny Lim, Adrian Lo |
| API data requirements | Proceed with the agreed Last Updated fields and the Supervisor ID field across Officer, Employment, and Job APIs. | POCDEX team, Compass |
| Resolve API enhancements | Additional identity-resolution requirements (email, NRIC, FIN, Malaysian IC, multiple officer IDs) go through a formal request process, not ad hoc. | Johnny Lim |
| Employment-change testing | Compass scopes the feature, defines test cases next week, shares them with POCDEX early, and focuses on high-frequency scenarios (agency transfer, cross-agency transition, single-head to double-head, NRIC change). | Compass team |
| UAT accountability | API validation sign-off comes from the PSD/Compass side, not vendor testers. WD does application-level UAT. Compass ITC validates API outputs. Compass PSD staff sign off for POCDEX. | Huiting Lian, Adrian Ang |
| WD account issue | Move to backlog. Address after MVP if bandwidth is tight. | Adrian Ang |

---

## Action Items

| Task | Owner | Due | Priority | Status |
|---|---|---|---|---|
| Update the timeline slide: swim-lane corrections, add the internal UAT activity, fix the employment-profile activity positions | Adrian Ang / Compass team | Before tomorrow's WD update | High | Not started |
| Split the production deployment work into "load" and "monitoring" activities on the timeline | Pow Hwee Tan / POCDEX team | Before tomorrow's WD update | High | Not started |
| Define the employment-profile-change test cases and share with POCDEX | Compass team | Next week | High | In progress (movement and identity cases drafted, see linked analyses) |
| Share the test cases with WD and POCDEX for awareness | Adrian Ang and team | Next week | Medium | Not started |
| Document the detailed Last Updated Date behaviour and its downstream implications | Johnny Lim | Not stated | Medium | Not started |
| Update the OpenAPI spec and Confluence for the Resolve API requirements | Johnny Lim | Not stated | Medium | Not started |
| Prepare API response evidence to support Compass's validation | Johnny Lim | Not stated | Medium | Not started |
| Send the formal sign-off email covering the 21-persona / base-case testing coverage | Adrian Ang | Not stated | Medium | Not started |
| Provide PSD-level API validation sign-off in the test artefacts | Compass ITC | Not stated | Medium | Not started |
| Follow up with Benjamin on VAPT VM preparation progress | Adrian Lo | Not stated | Medium | Not started |

Notes:

- The two timeline items are hard: tomorrow's WD update depends on the slide being right, and right now multiple people are editing it with no clear owner.
- Most of the other items have no date. The three Johnny Lim items are the API-side dependencies that gate Compass's validation work, so they need dates.

---

## Key Insights & Quotes

On UAT sign-off, the correct framing from Adrian Ang: the existing tests are the team's best effort, future defects may still turn up, and a sign-off should not be read as a guarantee that no issues remain. Worth keeping in the sign-off email so stakeholders outside the project don't over-read it.

On Last Updated Date: exposing it per endpoint rather than as one rolled-up value is the right call. A single global timestamp would force Compass to re-pull everything on any change. Per-endpoint lets Compass reconcile only what actually moved.

On accountability: Huiting's point that vendors can't be the accountable signatories for PSD's API outputs is a governance and audit position, not a technical one. The resolution (Compass PSD staff sign off, ITC validates, WD does app-level UAT) draws a clean line.

---

## Open Questions

- [ ] What is the identity-resolution end-state design? The meeting reached conceptual agreement on email / NRIC / FIN / Malaysian IC / multiple officer IDs / unified profile, but no final design was presented. Owner: Rama / Compass eng, feeds the architecture walkthrough.
- [ ] Does the POCDEX feed carry a UID-succession event when a UID changes, or just the new UID with no link back? This decides whether the HRID+NRIC-change case (ID-02 in the identity test cases) is automated or an ops exception. Owner: Johnny Lim / POCDEX.
- [ ] What is the POCDEX support model during Compass UAT? SLAs, response times, escalation path, resource allocation were all raised but not defined. Owner: Pow Hwee Tan / Johnny Lim.
- [ ] What is the production-load rollback and failure plan? Not discussed. Owner: POCDEX team.
- [ ] Is the employment-profile-change work actually sized against the window? Engineering capacity, use-case count, regression effort, and impact on other releases were not covered. Owner: Compass eng, after test cases stabilise.

---

## Blockers

1. The timeline slide is unstable and tomorrow's WD update depends on it.
   - Blocked by: no single owner; multiple people editing; the employment-profile activities are positioned wrong and the internal UAT activity is missing.
   - Impact: an inaccurate timeline to WD reduces planning confidence and invites readiness questions.
   - Resolution: Adrian and Pow Hwee own their halves (Compass activities, POCDEX load-vs-monitoring split). Lock it today.

2. Employment-profile-change scope is still exploratory while the timeline is being communicated externally.
   - Blocked by: development planning still ongoing, test cases only starting next week, several timeline blocks marked "pending confirmation".
   - Impact: planning confidence is low, but the timeline is going to WD tomorrow anyway.
   - Resolution: the test-case work (movement and identity cases are drafted) plus the BD-01 to BD-10 decisions this week are what turn scope from exploratory into planned. Push the BD session.

---

## Risks

| # | Risk | Why it matters | Level |
|---|---|---|---|
| 1 | Employment-profile-change is underestimated | The team plans to develop, test, support UAT, and resolve edge cases in a short window without having discussed engineering capacity, use-case count, regression effort, or the impact on other releases. Work is assumed manageable before the effort is understood. | High |
| 2 | Soft launch assumes a clean production data load | The plan assumes risk acceptance done, deployment approved, load starts, load completes in a week. No discussion of rollback, load-failure scenarios, or reconciliation. | Medium-high |
| 3 | Edge-case identity scenarios may not get tested | Malaysian IDs, FIN holders, multiple employments, double-heading, NRIC changes. The team acknowledged some of these populations are very small, which is exactly how they end up deprioritised in testing and then surface as production incidents. | Medium |
| 4 | POCDEX support model during Compass UAT is undefined | Compass expects POCDEX support during UAT. No SLAs, response times, escalation path, or resource allocation agreed. | Medium |
| 5 | False confidence from UAT sign-off | Adrian framed it correctly in the room (best effort, not a guarantee). Stakeholders outside the project may still read a sign-off as complete coverage. | Medium |

---

## Timeline Risks

- Tomorrow's WD update runs on a timeline slide that isn't stable yet. If it goes out with the employment-profile activities mispositioned or the internal UAT activity missing, WD gets a picture that doesn't match reality. Lock the slide today, with Adrian and Pow Hwee each owning their swim lanes.

- Production data load starts the week of 2 November and the soft launch depends on it completing cleanly. That's roughly 8 weeks out. The load has not been de-risked (no rollback plan, no failure handling, no reconciliation process discussed). The gap between "we assume it completes in a week" and "we have a plan for when it doesn't" is the medium-high risk here.

- The employment-profile-change test cases are due "next week" and the BD-01 to BD-10 decisions they depend on are targeted for this week. If the BD session slips, the test cases can't get their expected results signed off, and the whole workstream's planning confidence stays low while the timeline is already external.

---

## Cross-Meeting Intelligence

This sync connects directly to the other employment-profile work this week:

- The identity-resolution complexity raised here (email / NRIC / FIN / Malaysian IC / multiple officer IDs) is exactly what the [identity UAT test cases](../analyses/2026-09-02-W36-identity-uat-test-cases-compass.md) cover, cases ID-01 to ID-07. The UID-succession question (does the feed carry a UID-change event) is the open item flagged in ID-02 that needs POCDEX to answer.
- The high-frequency scenarios named here (agency transfer, cross-agency transition, single-head to double-head, NRIC change) map to the [movement UAT test cases](../analyses/2026-09-02-W36-movement-uat-test-cases-compass.md), cases MOV-02, MOV-03, MOV-07, and the identity cases.
- "Focus on high-frequency scenarios" is the same prioritisation logic as the 41-row cut and the OTG-Day-2-driven approach from the 1 Sep grooming session.
- The UAT accountability model (Compass ITC validates API outputs, Compass PSD signs off) resolves the "data-prep ownership unassigned" open item that's been flagged in the movement and identity test-case docs, at least on the validation side. Data-prep for the engineered fixtures is still a separate open question.

---

## SteerCo / Leadership Escalation

Top 3 risks for the RAID log:

1. Employment-profile-change scope and timeline are not fully understood, and the timeline is already being communicated externally to WD.
2. Identity resolution and unified-profile handling remain technically complex, especially for multi-employment and non-standard identity scenarios, with no end-state design.
3. Soft launch depends on a production data load and monitoring window that has not been de-risked (no rollback, no failure plan).

These three are the ones most likely to hit delivery dates, UAT confidence, or post-production stability.

---

## Next Steps

Immediate (today):

- Lock the timeline slide. Adrian owns the Compass swim lanes and the internal UAT activity, Pow Hwee owns the POCDEX load-vs-monitoring split.

This week:

- Get BD-01 to BD-10 decided at the PM session so the employment-profile test cases can move from "drafted" to "expected results approved".
- Route the identity end-state design and the UID-succession question to the architecture walkthrough and to Johnny Lim.

Next week:

- Compass finalises and shares the employment-profile-change test cases with POCDEX and WD.
- Johnny Lim delivers the Last Updated Date documentation, the Resolve API spec update, and the API response evidence.
- Adrian sends the formal sign-off email (21-persona / base-case coverage), with the "best effort, not a guarantee" framing included.

Follow-up:

- Define the POCDEX support model for Compass UAT (SLAs, escalation, resourcing) before UAT starts.
- Get a production-load rollback and failure plan on the table before the 2 Nov load window.
