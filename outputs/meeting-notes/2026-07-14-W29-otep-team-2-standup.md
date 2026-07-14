---
date: 2026-07-14
week: 2026-W29
type: meeting-notes
meeting: OTEP Team 2 Stand-up
time: 11:00-11:15am
---

# OTEP Team 2 Stand-up

**Date:** July 14, 2026, 11:00–11:15am

**Organiser:** Pow Hwee Tan

**Attendees:** Pow Hwee Tan, Léo, Thomas, Hao (Eng), Amber, Rathika Ramalingam, plus Michelle Yip (implied narrator — source refers to "you")

**Type:** Engineering sync / daily stand-up

**Source:** Pre-structured executive summary and analysis (not a raw transcript) — decisions, risks, and action items below reflect that analysis directly.

> **Coverage note:** This is the first captured record of this stand-up in 2 consecutive days — no notes existed for 2026-07-13 or the earlier part of 2026-07-14 (see [yesterday's cleanup](cleanup-2026-07-13.md) and [today's cleanup](cleanup-2026-07-14.md)). OTEP-505 (Hao Eng's CFT integration sub-task) does not appear anywhere in this standup — consistent with it having already been resolved separately and directly by Michelle earlier today (see [open-items.md #52](../../PM-skills-ALL-1/00-hub/open-items.md)), not through this venue.

---

## Summary

Sprint 5 closed successfully despite a difficult prior two weeks, with OTG import work, ring-fencing, and QA preparation all progressing well and team collaboration holding up. But three structural risks are converging: environment/infrastructure instability (config drift, SSM tunnel access, service-side errors) is consuming attention, UAT process/data/execution format remains undefined with a session still pending with Rama, and Sprint 7 is shaping up to compress WOG AD, UAT prep, and production prep into one window. An internal demo was scheduled reactively for Thursday, on the day of the stand-up.

---

## Decisions Made

1. **Scheduled worker jobs run overnight (~2am proposed).**
   - **Why:** Not detailed in source — likely to avoid contention with daytime usage/testing.
   - **Impact:** Sets the operating window for batch processing; ties to Léo's report that a full execution run completed in ~1 minute (best-case scenario), suggesting nightly batch capacity is feasible.

2. **Regression-testing preparation continues, but Playwright tests are not the immediate priority.**
   - **Why:** Not detailed in source.
   - **Impact:** E2E Playwright test cases have been drafted but sequencing places other QA work first — worth confirming this doesn't slip UAT readiness given Risk 1 below.

3. **Application teams escalate infrastructure issues rather than troubleshooting independently.**
   - **Why:** Reinforced by both Pow Hwee Tan and Michelle — infrastructure issues (Outlook QA service-side errors, SSM tunnel access, config drift) are consuming delivery time that should sit with the infra/platform side.
   - **Impact:** Sets an explicit process expectation, similar in spirit to the escalation norm named at this morning's Squad Sync (see Cross-Meeting note below) — worth checking these are actually the same standard, not two separately-invented versions.

4. **Moderated UAT planned for this month; observations shared the following month.**
   - **Why:** Not detailed in source.
   - **Impact:** Gives a rough timing anchor, but the process/data/execution format needed to actually run it is still undefined (see Risk 1) — the date is set before the plan is.

5. **Internal demo expected Thursday morning; possible BO-facing demo same afternoon if readiness permits.**
   - **Why:** Raised reactively, same day as this stand-up.
   - **Impact:** Compressed prep timeline, increased risk of demo-environment issues, added pressure on QA validation ahead of an already-tight week.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Complete and review remaining OTG import MRs | Thomas, Léo | Not specified | 🔴 High | 🟡 In Progress |
| Review newly prepared MRs | Léo | Not specified | 🟡 Medium | 🔴 Not Started |
| Continue ring-fencing implementation | Engineering team | Not specified | 🟡 Medium | 🟡 In Progress |
| Investigate service-side Outlook QA error | Hao | Not specified | 🔴 High | 🟡 In Progress |
| Begin job-function filter work | Hao | Not specified | 🟡 Medium | 🟡 In Progress |
| Provide support on job-function implementation | Thomas | Not specified | 🟡 Medium | 🔴 Not Started |
| Continue MVP UAT planning | Amber | Not specified | 🔴 High | 🟡 In Progress |
| Clean up QA tickets | Rathika Ramalingam | Not specified | 🟡 Medium | 🟡 In Progress |
| Test ring-fencing once available | Rathika Ramalingam | Not specified — blocked on ring-fencing landing | 🟡 Medium | 🔴 Not Started |
| Test CHG and OTG imports in QA | Rathika Ramalingam | Not specified | 🟡 Medium | 🔴 Not Started |
| Share SSM DB commands | Rathika Ramalingam | Not specified | 🟢 Low | 🔴 Not Started |
| Prepare demo environment and demo readiness | Rathika Ramalingam | Thursday (demo day) | 🔴 High | 🔴 Not Started — very tight given reactive scheduling |
| Conduct QA/UAT seeding discussion | Rathika Ramalingam, Pow Hwee Tan | Not specified | 🟡 Medium | 🟡 Scheduled |
| Arrange UAT alignment session | Rama Moorthy | Not specified — pending | 🔴 High | 🔴 Not Started |
| Align UAT format, execution process, and data preparation approach | Product & Team Leads | Not specified | 🔴 High | 🔴 Not Started |
| Review build success/failure notifications | Entire team | Not specified | 🟢 Low | 🔴 Not Started |

**Notes:**
- No due dates given for most items — this was a 15-minute stand-up, not a commitment-setting session. The demo-prep item is the one hard date (Thursday) and currently has no confirmed owner-side readiness given how late it was raised.
- **Rathika Ramalingam is carrying 6 of 16 action items** (QA cleanup, ring-fencing test, CHG/OTG QA test, SSM commands, demo prep, seeding discussion) — heaviest single load on the team, several time-pressured (demo prep especially).
- **"Align UAT format, execution process, and data preparation approach" (Product & Team Leads) has no single named owner** — same pattern flagged in today's Squad Sync notes for the near-identical "Define UAT process, accounts, test data, execution model" item (jointly owned by Rama/Michelle/Imelda there). These may be the same underlying gap tracked in two places — worth confirming before both threads run in parallel unnecessarily.

---

## Key Insights

**On environment/infrastructure instability (the standup's most consequential finding):**
- Outlook QA hit service-side errors; SSM tunnel accessibility is in question; and — most concerning — Pow Hwee Tan observed manual changes to environment variables and secrets while capturing baseline configurations. This means environments may not be consistent with each other, reproducing issues could get harder, and unexpected breakages could surface between environments with no clear cause.
- No concrete governance mechanism (e.g. change control on env vars/secrets) was discussed despite the observation being flagged directly — acknowledged, not yet acted on.

**On UAT readiness lagging the calendar:**
- Moderated UAT is targeted "this month," but process, data prep approach, and execution format are all still undefined, and the alignment session with Rama hasn't been scheduled yet. This directly parallels this morning's Squad Sync finding (UAT starts 11 Aug with no operating model) — same gap, now confirmed from a second, independent venue on the same day.

**On key-person dependency:**
- Léo, Thomas, Pow Hwee Tan, Rathika Ramalingam, and Michelle are each load-bearing for troubleshooting, review, or coordination across the open action items. Collaboration in the meeting itself looked healthy (pair programming, cross-team offers to help), but a meaningful share of next steps still routes through a small number of specific individuals — worth watching if any one of them becomes unavailable, per the same pattern that created the OTEP-505/Hao Eng gap earlier this sprint.

**On Sprint 7 convergence risk:**
- WOG AD work, UAT prep, and production prep are all expected to land in Sprint 7 together, alongside CSC coordination activities — several critical-path workstreams arriving in the same window. Combined with today's Squad Sync finding that the Huiting/POCDEX data-approval gate now threatens the broader August timeline, Sprint 7 is shaping up to be the pinch point for multiple unresolved risks at once.

**On refactoring MR size:**
- Pow Hwee Tan explicitly cautioned against large merge requests during the ongoing refactoring work — a reviewability/regression-risk flag that implies this has already caused friction, not just a preventive general reminder.

---

## Open Questions

- [ ] Is the escalation norm set here ("escalate infra issues rather than troubleshoot independently") the same standard named at this morning's Squad Sync, or a separately-invented duplicate? — **Owner:** Michelle / Pow Hwee — **By:** before either is treated as the team-wide policy
- [ ] Is "Align UAT format, execution process, and data preparation approach" (this meeting) the same action item as Squad Sync's "Define UAT process, accounts, test data, execution model," or a parallel, uncoordinated thread? — **Owner:** Michelle / Rama / Pow Hwee — **By:** before the UAT alignment session is scheduled, to avoid duplicating effort
- [ ] What governance mechanism will prevent further manual environment-variable/secret drift? — **Owner:** Pow Hwee Tan — **By:** before next baseline capture, given this has already been observed once
- [ ] Is Rathika Ramalingam's current 6-item load realistic given the Thursday demo-prep deadline sits inside it? — **Owner:** Pow Hwee Tan / Michelle — **By:** before Thursday

---

## Risks Flagged (from source analysis — preserved as a distinct section given their weight)

**Risk 1 — UAT readiness risk (High/Amber).** Process, test data, and test accounts all still under discussion; moderated UAT targeted this month with no locked plan. Potential impact: delayed UAT start, reduced testing coverage, stakeholder dissatisfaction.

**Risk 2 — Environment governance risk (Red).** Manual environment-variable and secret changes observed during baseline capture; infra troubleshooting is consuming delivery time. Acknowledged in the meeting but no concrete governance mechanism discussed. Potential impact: deployment failures, difficult root-cause investigations, production instability.

**Risk 3 — Key-person dependency risk (Amber).** Multiple next steps route through a small set of named individuals (Léo, Thomas, Pow Hwee Tan, Rathika Ramalingam, Michelle) for knowledge transfer, troubleshooting, reviews, or coordination.

**Risk 4 — Sprint 7 scope compression (Amber).** WOG AD, UAT prep, production prep, and CSC coordination all converging in the same sprint window.

**Risk 5 — Large refactoring MRs (Amber).** Explicit caution from Pow Hwee Tan against large merge requests during refactoring — implies reviewability and hidden-regression concerns, possibly from prior pain points.

**Overall assessment (source analysis, SteerCo-style):**

| Area | Status |
|---|---|
| Development Progress | 🟢 Green |
| Team Collaboration | 🟢 Green |
| QA Preparation | 🟡 Amber |
| UAT Readiness | 🟡 Amber |
| Environment Stability | 🔴 Red |
| Sprint 7 Delivery Risk | 🟡 Amber |

---

## Timeline Risks

- **TIMELINE RISK — UAT alignment session with Rama still not scheduled**, while moderated UAT is targeted for this month and the fixed external UAT start date (11 Aug, per `open-items.md` #39) is roughly 4 weeks out. This is the same gap surfaced independently at this morning's Squad Sync — two venues, same day, same unresolved risk.
- **TIMELINE RISK — Thursday demo (both internal and possible BO-facing) was scheduled the same day as this stand-up**, compressing demo-environment and QA-validation prep into an unusually short window. Rathika Ramalingam owns demo-environment prep on top of 5 other open items.
- **TIMELINE RISK — Sprint 7 convergence** (WOG AD + UAT prep + production prep + CSC coordination) lands in the same window this morning's Squad Sync flagged as already at risk from the Huiting/POCDEX approval gap. These two risks compound rather than sitting independently.

---

## Related

- [2026-07-14-W29-otep-squad-sync.md](2026-07-14-W29-otep-squad-sync.md) — same-day meeting, independently surfaces the identical UAT-readiness gap and a parallel (possibly duplicate) "define UAT process" action item
- `00-hub/open-items.md` #52 (Hao Eng/OTEP-505 — resolved earlier today, separately from this venue), #58 (QA/UAT infra blockers — this standup's environment-governance risk is a direct continuation of that thread), #39 (UAT/VAPT timeline — 11 Aug fixed start date)
- [cleanup-2026-07-13.md](cleanup-2026-07-13.md) and [cleanup-2026-07-14.md](cleanup-2026-07-14.md) — both flagged this standup as a 2-day coverage gap; this note closes it

---

## Appendix: Source Material

<details>
<summary>Click to expand original pre-structured analysis provided by Michelle</summary>

Source was a pre-written executive summary — "what went well / what didn't go well," risks-not-explicitly-addressed, decisions, action tracker, and a PM SteerCo-style status assessment — not a raw transcript. All content above is restructured from that analysis; no raw transcript was available to independently verify quotes or exact phrasing.

</details>
