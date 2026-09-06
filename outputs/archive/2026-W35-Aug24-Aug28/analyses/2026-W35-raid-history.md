---
archived: 2026-09-03
week: 2026-W35 (24–28 Aug)
type: archive-digest
supersedes: [2026-08-24-W35-raid-log.md, 2026-08-25-W35-raid-log.md]
superseded_by: outputs/analyses/2026-09-03-W36-mvp-raid-consolidated.md
---

# W35 RAID History — Digest (24–25 Aug)

Two daily RAID snapshots from W35, merged for the record. The current RAID is [2026-09-03-W36-mvp-raid-consolidated.md](../../../analyses/2026-09-03-W36-mvp-raid-consolidated.md). Kept because this pair shows how the two W35 escalations (VAPT-sequence reconciliation, and the unowned POCDEX "last modified date" rule) developed across the week and fed into the current log.

**Legend:** 🔴 Critical/High · 🟡 Medium · 🟢 Low · ✅ Resolved · ⏸ Not re-verified that pass

---

## What this pair established (the parts that carried forward)

- **The VAPT sequence didn't reconcile** (R10, 25 Aug). "Sign-off ~7 Nov, launch 24–25 Nov" sat awkwardly against the 7 Sep start / 16–23 Oct close / 2 Nov release chain. → Later reconciled 31 Aug: Compass/CIE close 29–30 Oct, POCDEX closes 5–6 Nov, POCDEX's close feeds the ~7 Nov sign-off. Now A5 in the current RAID.
- **No owner for the POCDEX profile/employment refresh business rules** ("last modified date," refresh logic) (R11, named 25 Aug as the single biggest programme risk; third consecutive mention 26 Aug when it began blocking the 28 Aug Day-2 scoping deadline). → Accepted by Adrian 31 Aug as the working requirement; Rama's formal sign-off still outstanding. Now open item #60 / A2 in the current RAID.
- **The "who decides" governance pattern** (R13, 25 Aug — six instances across five sources in one day: UAT scope, dependency register, refresh rules, SSO, UAT sign-off authority, VAPT readiness DoR). One pattern, not six gaps. Still the shape of several current items (R1/R2 fallback gaps, BD-07/BD-09 unowned).
- **PS/DS miscount** (I1) — an item resolved 18 Aug carried as "open, 3rd week" across two generated docs for a week. Named as the week's key process finding: nobody re-checked a carried-forward status before repeating it. Resolved 24 Aug.
- **CSC SSO narrowed to a Menlo browser-isolation hypothesis** (R12, 25 Aug), unproven, no decision owner if Menlo can't help. → Resurfaced W36 as an active integration failure with a course-URL-handling workaround proposed (now in the readiness-gates doc's "also unsettled").
- **~47 undated action items across the week's sources** (I8) — repeating the pattern Mark Ho challenged. Named as the cheapest fix on the log.

---

## Snapshot 1 — 24 Aug

*Consolidated RAID across MVP timeline, Sprint 8/9 handoff, VAPT/UAT readiness, POCDEX coordination. First W35 rollup; carried unverified items from the [18 Aug W34 rollup](2026-08-18-W34-week33-raid-log.md).*

### Risks

| # | Risk | Status |
|---|---|---|
| R1 | POCDEX production-rollout date conflict — POCDEX plan targets 24 Nov; `open-items.md` #39 tracks "week of 2 Nov." ~3-week gap, unexplained. Surfaced via Huiting's Item #8 escalation. | 🔴 New → resolved into R10 (25 Aug) |
| R2 | CIE/CV model retraining could land inside the VAPT freeze window (7 Sep–16 Oct) — CV data blocked, Victor + Benjamin on overlapping Sept leave. Team plans to frame any change as minor/logic-only; unconfirmed. | 🔴 New → still open (R6 in current RAID) |
| R3 | NCS VAPT kickoff (28 Aug) paperwork gap — PO/PR reissue in progress, ~4 Sep. Clears before 7 Sep start but not before the 28 Aug kickoff. | 🟡 Downgraded same day |
| R4 | UAT scope for ~13 POCDEX employment-lifecycle scenarios undefined (transfers, secondments, rehires, NPL, email changes). The substance behind Item #8. | 🔴 Open, High |
| R5 | TC13 — email reuse causes data exposure between two officers. NRIC/FIN fallback fix blocked on unapproved privacy/security item. | 🔴 Carried from W34, not re-verified |
| R6 | VAPT Round 2 date error (OTEP-1116: due before start). | 🔴 Carried from W34, not re-verified |
| R7 | Go-Live epic (OTEP-1082) has zero dates on any sub-task, including IDSC clearance. | 🔴 Carried from W34, not re-verified |
| R8 | Base Data vs. Identity Data classification conflict. | 🔴 Carried from W34, 2 weeks stale |
| R9 | CSAT measurement (VOGA) not viable — CC is intranet-based, VOGA needs internet. Team leaning toward an in-house rating widget. | 🔴 Carried from W34, not re-verified |

### Issues

| # | Issue | Status |
|---|---|---|
| I1 | PS/DS accept/reject decision miscounted as open for a week. Actually accepted 18 Aug. | ✅ Resolved (tracking corrected 24 Aug) |
| I2 | Sprint 8's 20 orphaned tickets (incl. 6 WOG AD/auth: OTEP-71/594/331/110/305/111) closed 23 Aug without reaching Done. Reframed: this week is Phase 3 UAT by design; question is whether they have a confirmed Sprint 9 destination. | 🟡 Reframed |
| I3 | R1 planning artefacts (#59) — designer output committed 12 Aug, in progress. Real deadline mid-Sept grooming, not this week. | 🟡 In progress, low urgency |
| I4 | Last-modified-date trigger logic only half-specified — POCDEX supplies one date per endpoint (4 total); what Compass does on a change (full re-pull vs targeted diff) undecided. | 🟡 Open → sharpened into R11 (25 Aug) |
| I5 | Feedback widget interface must land before the 4 Sep change freeze, even as a stub. Split into interface-stub + full-feature. | 🟡 In progress |
| I6 | ≥25 additional POCDEX UAT scenarios — drafted, not reviewed with POCDEX or executed. | 🟡 Carried from W34 |
| I7 | Huiting not yet told explicitly that nothing in the Day-2 design ships at MVP go-live. | 🔴 Carried from W34 |

### Priorities set (24 Aug)

1. Reconcile POCDEX's 24 Nov vs CC's tracked 2 Nov, then answer Item #8 (Rama, next AM)
2. Decide UAT scope for POCDEX's ~13 employment-lifecycle scenarios (CC Product, this week)
3. R1 planning artefacts (#59) — light-touch progress check (Michelle)
4. Confirm Sprint 8's 20 orphaned tickets have an explicit Sprint 9 destination (Rama/Adrian)
5. Victor's read on CIE change-scope risk vs the VAPT freeze (Rama via Victor, before 7 Sep)
6. Fresh check on NRIC/FIN privacy/security approval (R5) (Imelda + Rama)

### Process findings named (24 Aug)

- The PS/DS correction was the week's most important finding, not the CAM or POCDEX news. A resolved item sat mistracked across two generated docs for a week because nobody re-checked a carried-forward status before repeating it.
- Sprint 9's "absence" was misdiagnosed as a structural gap before being corrected to a planned UAT-week sequencing choice. Treat any "X doesn't exist yet" finding as a question to ask a person, not a risk to write up.
- POCDEX's escalation pattern is three-for-three this quarter: data requirements (Jul) → UAT scope (11 Aug) → production date (24 Aug), each surfacing a bigger gap than the ask before it.

---

## Snapshot 2 — 25 Aug

*Rolled forward from 24 Aug with five sources: Product × Senior BO, POCDEX timeline sync, CSC SSO troubleshooting, POCDEX data-sharing thread, programme coordination (UAT/VAPT/cutover). Updated 26 Aug for R11.*

### New risks (25 Aug)

| # | Risk | Status |
|---|---|---|
| R10 | **VAPT sequence doesn't reconcile.** "Sign-off ~7 Nov, launch 24–25 Nov" vs the 7 Sep start / 16–23 Oct close / 2 Nov release chain. Window moved right, or sign-off is a distinct later step — nobody said which. Absorbs R1. | 🔴 New → reconciled 31 Aug |
| R11 | **No owner for POCDEX profile/employment refresh business rules** ("last modified date," refresh logic). Named the single biggest programme risk. 26 Aug update: third consecutive mention, now blocking Michelle's 28 Aug Day-2 scoping deadline (open item #60). Not yet flagged to Adrian as an at-risk dependency. | 🔴 Open → accepted by Adrian 31 Aug, Rama sign-off pending |
| R12 | **CSC SSO narrowed to a Menlo browser-isolation hypothesis**, unproven, no decision owner if Menlo can't help. No escalation SLA, no user-impact sizing, no launch-blocking call. A later same-day meeting reframed it as three named-owner options (Pei/redirect, Pow Hwee/discussion, Menlo continues). | 🔴 New |
| R13 | **Cross-programme "who decides" gap** — six instances across all five of the day's sources (UAT scope, dependency register, R11, R12, R14, R15). One governance pattern, not six gaps. | 🔴 New (pattern) |
| R14 | **UAT sign-off has no defined acceptance checklist and split authority** — outstanding comments remain, owner ambiguous between Chris and Xin Zhang. Call with Chris 26 Aug. | 🔴 New |
| R15 | **No consolidated VAPT "Definition of Ready" across 3 parallel streams** (Compass Core, Intel/CIE, POCDEX API). Each team self-assessing readiness. PM's own assessment named this a top-2 watch item. | 🔴 New → substantially addressed 31 Aug by Jobelle's 6-report schedule (missing only a "test-start blocker Y/N" column) |

### New issues (25 Aug)

| # | Issue | Status |
|---|---|---|
| I8 | ~47 unique action items across the day's 5 sources mostly lack due dates — repeating the pattern Mark Ho challenged that morning. Named the cheapest fix on the log. | 🔴 New |
| I9 | Possible coincidence, unconfirmed: the morning meeting deferred the VAPT-arrangement call to Pow Hwee/Adrian; the 2pm sync landed on a matching answer same day. Check it's the same discussion. | 🟡 Needs confirmation |
| I10 | The 3:30pm CSC SSO meeting's "Path A/B/C" and the later meeting's "Option 1/2/3" look like the same three paths relabeled with owners. If the same, the later action items supersede the earlier; if different, both sets are live and nobody said so. | 🟡 Needs confirmation |

### Assumptions added (25 Aug)

| # | Assumption | Confidence | If wrong |
|---|---|---|---|
| A5 | "~7 Nov sign-off" fully restates the VAPT sequence rather than layering on top of existing Sep–Oct dates | Low (this is R10) | 7 Sep / 16–23 Oct / R2 all still hold; the meeting just didn't restate them |
| A6 | Menlo isolation is the real SSO root cause | Medium — leading theory, not proven | Evidence collection and Menlo escalation wasted; need a different Path A |
| A1 | ~~POCDEX's 24 Nov reflects their own buffer~~ | ✅ Confirmed — Adrian stated it directly |
| A3 | NCS can use the 28 Aug kickoff as a walkthrough without the PO | Medium | Kickoff itself may need to move |
| A4 | The 6 WOG AD/auth tickets in Sprint 8's orphaned set are hygiene closes, not real work | Medium | Sprint 9 starts with unaccounted-for work |

### Priorities set (25 Aug)

1. Clarify whether ~7 Nov sign-off supersedes or sits alongside 7 Sep / 16–23 Oct (R10) — everything in #39 depends on it (Rama/Adrian, before Friday's checkpoint)
2. Decide profile refresh business rules + "last modified date" (R11) (Compass team, Thursday — committed)
3. Name a decision owner + escalation SLA for SSO Path/Option A/B/C (R12) — resolve I10 first
4. Definitive UAT sign-off position from Chris/Xin Zhang (R14) (Michelle, 26 Aug call)
5. Formal VAPT readiness checklist and ownership model before execution (R15) (Jace/Jobelle)
6. Raise the "who decides" pattern (R13) once, directly (Michelle)
7. Confirm Sprint 8's 20 orphaned tickets' Sprint 9 destination (I2)
8. Fresh check on NRIC/FIN approval (R5) — stale 2 days running (Imelda + Rama)
9. Flag to Adrian that 28 Aug Day-2 scoping (#60) is blocked on R11 — don't wait for the deadline (Michelle, now)

### Process findings named (25 Aug)

- **Same governance gap, six rooms.** UAT scope, dependency register, refresh rules, SSO decision, UAT sign-off authority, VAPT readiness ownership all reduce to "the technical work runs fine, nobody's been given authority to decide once it hits its limit." Fix once as a named decision-owner framework and R11/R12/R14/R15/most of R13 resolve together.
- **Resolving R1 opened R10.** Answering "what's the real date" isn't the same as confirming "does the sequence still add up around it."
- **The last meeting of the day named its own two critical-path risks** — R14 (UAT sign-off) and R15 (VAPT readiness). A stronger signal than most other findings that day.
- **I8 is the cheapest fix** — dating ~47 existing commitments, not new work.

---

## Document map (as referenced at the time)

- 18 Aug W34 rollup RAID · 11 Aug MVP Timeline RAID · 14 Aug POCDEX/Ops Portal RAID
- Meeting notes: POCDEX Item #8 escalation (24 Aug), UAT/VAPT readiness (24 Aug), Product × Senior BO (25 Aug), POCDEX timeline sync (25 Aug), CSC SSO troubleshooting (25 Aug), POCDEX data-sharing thread (25 Aug), programme coordination (25 Aug), Slack POCDEX/Compass recap (26 Aug)
- `PM-skills-ALL-1/00-hub/open-items.md` — #39 (VAPT/UAT timeline), #60 (Day-2 scoping, added 26 Aug)

*Digest generated 2026-09-03 from the two W35 daily RAID logs. Original files removed on archival — their full content is preserved above except the verbatim carry-forward notes already superseded.*
