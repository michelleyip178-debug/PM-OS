---
date: 2026-09-03
week: 2026-W36
type: raid-log
scope: Career Compass MVP (24–25 Nov 2026)
sources:
  - PM-skills-ALL-1/00-hub/risks.md
  - PM-skills-ALL-1/00-hub/open-items.md
  - outputs/meeting-notes/2026-08-31-W36-adrian-biweekly-sync.md
  - outputs/meeting-notes/2026-09-01-W36-squad-sync.md
  - outputs/meeting-notes/2026-09-01-W36-grooming-employment-profile-changes.md
  - outputs/meeting-notes/2026-09-02-W36-otg-operational-review-employment-profile.md
  - outputs/meeting-notes/2026-09-02-W36-pocdex-do-compass-weekly-sync.md
  - outputs/analyses/2026-09-02-W36-employment-profile-uat-scope-reconciliation.md
  - outputs/analyses/2026-09-02-W36-employment-profile-decisions-brief.md
---

# RAID — Career Compass MVP, as of 3 September 2026 (W36)

Consolidated from `risks.md`, `open-items.md`, and this week's meeting notes and analyses. Covers the MVP path to the 24–25 Nov 2026 launch, with the employment-profile-change epic as the current focus.

**Key dates:** MVP launch 24–25 Nov · VAPT sign-off ~7 Nov · VAPT starts 7 Sep · employment-profile dev freeze end-September · employment-profile UAT starts 19 October (Huiting's team).

---

## Risks

| # | Risk | Impact | Status / Mitigation |
|---|------|--------|---------------------|
| R1 | ~~**PO issuance is a 5-step internal chain with zero parallelisation** (PMO creation → budget → GBS approval → vendor notification → access provisioning). Named the single highest operational delivery risk (squad sync, 1 Sep).~~ | Any one step slipping delays the 7 Sep VAPT start. | ✅ **RESOLVED — PO issued, confirmed in the 2 Sep email update.** Landed ahead of the ~4 Sep expectation and before the 7 Sep VAPT start. Residual watch: confirm NCS has the access provisioning it needs (final step) to start on 7 Sep. |
| R2 | **NCS reporting-cadence dependency has no fallback** (squad sync, 1 Sep). Team asked NCS to release findings incrementally per component; nobody has asked what happens if NCS won't shift cadence. | Entire remediation-timeline recovery plan assumes NCS cooperation. | 🔴 Rama to send follow-up email. No Plan B. |
| R3 | **Source data quality — confidence that "Compass solves identity" is outrunning reality** (OTG operational review, 2 Sep). If HRPS/Cumulus/Product records are wrong (missing, transfers not reflected, email changes not propagated, months-old duplicates), Compass consumes the wrong data. NRIC resolution fixes identity resolution, not bad upstream data. | Top systemic risk for the employment-profile epic. | 🔴 Open. No owner for upstream-defect detection before user impact. |
| R4 | **Multi-hat UX undefined** (OTG operational review, 2 Sep). Architecture can merge competencies and support multiple job IDs, but the team hasn't agreed what officers see, what managers see, or how profile switching works. | Likely to surface as a late-stage UAT issue. The real work behind Tier 2, not the job-change slice. | 🔴 Open. BD-01/02/03. PM team to land display rules this week. |
| R5 | **No proactive drift detection.** OTG finds profile-transition problems only via complaint, POC, or audit. No monitoring approach discussed for Compass. | Repeats OTG's operational failure mode at launch. | 🔴 Open. Not assigned. |
| R6 | **CIE/CV recommendation-model retraining realistically slips to end-September** — CV data acquisition blocked, Victor + Benjamin have overlapping Sept leave. Lands inside the 7 Sep–16 Oct VAPT freeze window. | Team plans to characterise any change as minor/logic-only to avoid retriggering full VAPT — technically unconfirmed. | 🟡 Open, unowned. Get Victor's read before 7 Sep. |
| R7 | **VAPT remediation's 2-week assumption** (SGEMS precedent) may not scale to Compass's larger surface (Cloud + Web + API + POCDEX vs. SGEMS's single surface). | If remediation runs long, ~7 Nov sign-off is at risk. | 🟡 Flagged (squad sync 1 Sep), lower urgency. No evidence either way. |
| R8 | **NRIC-only identity model may not hold** for non-POCDEX agencies (MINDEF/DSTA/A\*STAR/CPF run separate OTG pipelines) or identity-transition cases (FIN→NRIC, Malaysian ICs in production, double-hatting). Real question is Compass's long-term identity authority. | Rework if non-POCDEX/transition scenarios expand. | 🟡 Deferred by design, not urgent. Watch: WD onboarding roadmap, SingPass requirements, non-POCDEX expansion. |
| R9 | **Data-prep for UAT execution unassigned** (Compass ITC vs. joint POCDEX ask). | Blocks even Tier 1 test cases from actually running — perfect cases with no test data. | 🔴 Open. Raise as a named blocker at standup. |
| R10 | **Environment/config governance gap** — manual env var and secret changes observed (Team 2 standup, 14 Jul). Environments may be inconsistent; breakages could surface with no clear cause. Rated 🔴 in the meeting's own assessment. | Harder issue reproduction, unexpected cross-env breakage. | 🔴 No mitigation defined. Owner: Pow Hwee. |
| R11 | **Key-person leave during the critical window.** Adrian away 5–9 Oct (mid-VAPT). Jace away 26 Oct–5 Nov (soft launch + first release). | Coverage gap at two high-stakes moments. | 🟡 Cover named: Adrian, Rama, Barry, Pow Hwee. |

---

## Assumptions

| # | Assumption | If wrong |
|---|-----------|----------|
| A1 | NRIC is sufficient as the identity key for MVP. | Rework across career/learning/competency history, which assume identity continuity NRIC doesn't guarantee the way POCDEX's UID does. |
| A2 | "Last modified date" is the accepted working requirement for change detection (Adrian, 31 Aug; Rama + Pow Hwee reconfirmed 1 Sep). | Rama's *formal* sign-off hasn't landed — Adrian's acceptance ≠ engineering sign-off (#60). |
| A3 | End-September dev freeze is achievable for the employment-profile workstream in ~2.5 sprints. | No effort sizing has been done against any of the four scoping frames. If Tier 1 doesn't fit, it's a late miss. |
| A4 | Frame B (50-case) and Frame C (41-row) describe the same underlying scope from different angles — ~5–8 rows apart once counted the same way. | If they're genuinely different case sets, Michelle/Imelda accidentally commit to two scopes that don't add up. |
| A5 | POCDEX's later VAPT close (5–6 Nov) feeds the ~7 Nov overall sign-off; the 29–30 Oct Compass/CIE close is a separate stream, not a conflict. | Reconciled 31 Aug — treat as settled. |
| A6 | ~~NCS engineers can do meaningful walkthrough/planning work at the 28 Aug kickoff even without the PO, then start real work once it lands ~4 Sep.~~ | Moot — PO issued (2 Sep email update), 5 days before the 7 Sep VAPT start. Runway concern resolved. |

---

## Issues (open, active)

| # | Issue | Owner | Status |
|---|-------|-------|--------|
| I-epic-owner | **The employment-profile-change epic has task-owners but no end-to-end owner.** The split in this doc and the [one-pager](../prds/2026-09-03-W36-employment-profile-changes-epic-one-pager.md) was inferred from meeting notes, never decided. Result: the BD-01–BD-10 decision session has no one accountable for convening it, and 11 downstream items are stalled (see list below). **Proposed resolution:** this work keeps the officer's role profile + competencies accurate through job changes, which drives My Development recommendations — so it rolls up under **Imelda's Epic 2 (My Development, OTEP-68)**, not a new ownerless epic. Needs Adrian to confirm. | Proposed: Imelda Mo (as Epic 2 owner) — **awaiting Adrian's confirmation** | 🔴 Open — ownership gap is the current blocker. |
| I-61 | **Employment-lifecycle scope not locked.** Direction confirmed 2 Sep (NRIC-first, one consolidated profile, no OTG profile-selection). Acceptance criteria BD-01–BD-10 still open. | Adrian Ang (scope + Huiting comms) / Michelle + Christopher Woo (OTG→test-case mapping) / Rama (identity source-of-truth, **not yet assigned**). Epic home: proposed under Imelda's Epic 2 (see I-epic-owner). | 🟡 Direction locked, criteria open. Friday use-case target at risk pending epic owner. |
| I-60 | **POCDEX Day-2 test-case scoping** — business rule accepted, Rama's formal sign-off outstanding. | Michelle + Imelda (scoping) / Rama (sign-off) | 🟡 Substantially resolved, sign-off pending. |
| I-62 | **Hidden-competency UAT bug.** Fixed on My Development + L&C. Open: should Jobs & Opportunities match scoring follow the same exclusion rule? | Michelle (BO check) | 🔴 Open, BO check in progress. |
| I-BD07 | **NPL scope decision (BD-07)** — Frame B drops it, Frame C keeps it, Frame D can't rate it. "Critical if required for SGR/SJR." | Unowned since 1 Sep | 🔴 Send Adrian Ang a clean yes/no. |
| I-BD09 | **Missing / duplicate / ambiguous source records (BD-09)** — also swallows Exit-1 (rescinded new hire). | Rama + operations — unowned | 🔴 Open. |
| I-BD08 | **Email reuse / shared mailbox (BD-08)** — needs POCDEX clarification. 82 production email-collision errors, 7 genuine. | Needs POCDEX | 🔴 Open, external dependency. |
| I-39a | **16 Oct vs 23 Oct VAPT closure date conflict** — expected to be superseded by the ~7 Nov sign-off framing, never explicitly reconciled line-by-line. | No owner confirmed for this reconciliation step | 🟡 Open discrepancy. |
| I-55a | **≥25 additional UAT scenarios** POCDEX recommended (multi-hatting, secondment, email change, NPL, missing mappings, terminated officers) — no owner, unactioned since 11 Aug. | Rama to assign | 🔴 Open. |
| I-55b | **Day-2 support traceability scoping** (source-system visibility, API logs, escalation routing). | Rama / Imelda to date | 🔴 Undated. |
| I-58 | **QA/UAT infra** — comms gaps causing late-discovered dependencies (#2) and incomplete E2E validation (#3) still open. CFT piece closed 14 Jul. | Rama | 🟡 Partially resolved. |
| I-data-class | **Data classification inventory + Day-2 support model first draft** — both on Michelle, both launch-gating (MVP Timeline Planning, 28 Aug). Priority 3 this week, likely to be compressed. | Michelle (with Jace) | 🔴 Not started. |

---

## Dependencies

| # | Dependency | What breaks if it doesn't land | Escalation trigger |
|---|-----------|-------------------------------|--------------------|
| D1 | ~~**NCS PO issuance** (~4 Sep target)~~ | — | ✅ **Done — PO issued, confirmed 2 Sep email update.** Only residual: verify NCS has infra access (the chain's last step) in hand before 7 Sep. |
| D2 | **AI IDSC approval** (~1 Sep expected) | Hard MVP launch blocker, no fallback if it slips. | Not confirmed by now. |
| D3 | **BD-01–BD-10 acceptance criteria** (PM team, this week) | Effort sizing, UAT prioritisation, use-case production all wait. ~24 scenarios can't get a pass/fail result. | No session booked by EOD today. |
| D4 | **Architecture walkthrough** (Rama, Adrian Lo, Kingsley Low — date not set) | Identity source-of-truth (input to BD-02, BD-09), multi-hat model, UID-succession all stall. Owed since 1 Sep. | Not on the calendar by EOW. |
| D5 | **Rama's identity source-of-truth position** | Input to BD-02 and BD-09. Owed since 1 Sep. | Not brought to D4. |
| D6 | **Johnny Lim's 3 API-side items** (Last Updated Date behaviour doc, Resolve API OpenAPI/Confluence update, API response evidence) | Gate Compass's API validation work. No dates set. | Still undated by next POCDEX sync. |
| D7 | **Timeline slide lock** (Adrian Ang + Pow Hwee, each own a swim lane) | Today's WD update goes out with employment-profile activities mispositioned / internal UAT activity missing. | Not locked before today's WD update. |
| D8 | **UID-succession: does the POCDEX feed carry a UID-change event?** (Johnny Lim / POCDEX) | If not, FIN→NRIC and ID-change scenarios have no detection path. | Not answered at D4. |
| D9 | **Imelda's UAT prioritisation** vs Michelle's test-case authoring | Two people scoping the same ~50 cases from different angles. | No confirmed split by EOW (see A4). |
| D10 | **CIE/CV retraining change-scope** — confirm with Victor before 7 Sep | If it's not "minor/logic-only," it retriggers a full VAPT cycle mid-window. | Victor hasn't weighed in by 7 Sep. |

---

## Critical path this week

**PO issuance is done** (confirmed 2 Sep email update). That was the top operational risk; it's off the board.

**The new #1 blocker: the employment-profile-change epic has no end-to-end owner** (I-epic-owner). Until that's resolved, the BD-01–BD-10 session, the architecture walkthrough, and the Friday use-case target all have no one accountable for making them happen. **Proposed resolution: this rolls up under Imelda's Epic 2 (My Development, OTEP-68)** — it's what employment-profile accuracy feeds. Needs Adrian to confirm this week.

Once ownership is settled, the gates in order:

1. **BD-01–BD-10 decision session** — epic owner convenes; Michelle pre-fills the brief. Friday use-case target depends on it.
2. **Architecture walkthrough scheduled** (Rama / Adrian Lo / Kingsley Low). Identity source-of-truth + BD-09 + UID-succession ride on it.
3. **AI IDSC approval** (~1 Sep expected) — confirm it landed. Hard launch blocker, no fallback.
4. **NCS access provisioning** — the PO's last step; verify NCS has infra access before 7 Sep, not just the PO.

**Unowned, needs routing (should not default to Michelle):** R3 (upstream data quality), I-BD07 (NPL), I-BD09 (ambiguous records), R9 (UAT data-prep). These get owners once the epic owner exists — that's the point of naming one.

### What stalls without an epic owner (the escalation to Adrian)

| # | Blocked item | Latest safe date |
|---|---|---|
| 1 | BD-01–BD-10 decision session — no one owns convening it | This week |
| 2 | Architecture walkthrough (Rama, Adrian Lo, Kingsley Low) — owed since 1 Sep, unscheduled | This week |
| 3 | Identity source-of-truth position (Rama) — input to BD-02, BD-09 | Feeds the walkthrough |
| 4 | BD-07 (NPL scope) — unowned since 1 Sep, needs Adrian yes/no | This week |
| 5 | BD-09 (ambiguous/missing records) — unowned | This week |
| 6 | Effort sizing against 2.5 sprints — waits on BD-01–04; tells us if end-Sept is achievable | Immediately after BD decisions |
| 7 | UAT data-prep ownership (Compass ITC vs joint POCDEX ask) — unassigned since W35 | Before Tier-1 execution |
| 8 | The 118→82→41→50 reconciliation → Imelda — depends on BD decisions to be meaningful | Before Imelda prioritises |
| 9 | Upstream data-defect monitoring (R3) — top systemic risk, explicitly unowned | Before launch |
| 10 | Drift detection / exception queue design (R5) — the OTG analysis says this *is* the Day-2 support model | Before design locks in Sprint 9 |
| 11 | The Friday use-case deliverable itself — "PM team", no PM named accountable | Fri 5 Sep |

**The pattern:** same failure mode as the 6 Jul SteerCo blockers and the W35 "raising ≠ escalating" learning — the 2 Sep OTG review generated 8 action items, almost all with no owner and no date. It's now compounding: the decisions can't be made because no one's job is to make them happen.

---

*Generated: 2026-09-03. Companion to the [employment-profile-changes epic one-pager](../prds/2026-09-03-W36-employment-profile-changes-epic-one-pager.md). Source RAID lives in `PM-skills-ALL-1/00-hub/risks.md` and `open-items.md` — this is a point-in-time consolidation for the epic, not a replacement.*
