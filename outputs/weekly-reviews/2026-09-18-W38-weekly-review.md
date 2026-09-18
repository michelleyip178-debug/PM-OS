---
week: 2026-W38
week_start: 2026-09-14
week_end: 2026-09-18
quarter: Q3 2026
---

# Weekly Review - Week of September 14, 2026

## TL;DR

- **PRDs:** R1 Opportunities Marketplace one-pager rewritten twice this week — once for the reduced-scope baseline (Mon), once again today after a strategic pivot on internal-job discovery invalidated the Careers@Gov assumption it was built on.
- **Major finding:** Disproved the working assumption that Careers@Gov hosts internal/hidden jobs. Real upstream sources are HRPS (civil service, SAP/NCS) and Cumulus (stat boards, Workday) — both unconfirmed on API access, ringfencing, and eligibility enforcement. This is now the single biggest open risk blocking R1 scope for Mainstream Jobs.
- **Meetings:** 12+ this week, including a first-ever team retro, two back-to-back scoping sessions that each produced an undiscussed scope change, and today's estimation sync.
- **Unresolved scope conflict:** The locked master PRD commits Gigs/STIPs to embedded FormSG. Tuesday's roadmap session decided, in the room, to build a native Compass form instead — a real scope expansion that was never re-costed against the 5.5-sprint budget before today's estimation sync.
- **Timeline is still unsettled, not just at risk:** three different kickoff dates were in play this week — mid-November (Wed's scope session), ~1 Dec (risk register R-11, corrected Tue), and October (today's one-pager edit, per Rama). These have not been reconciled into one number.
- **Key challenge:** 9 of 12 action items from Tuesday's roadmap session, and 4 of 8 from Wednesday's retro, have no owner — a pattern named explicitly in the retro itself ("stop the line" culture) and then repeated the same day.

---

## Priority Completion (Plan vs. Actual)

### Priority 1: Lock Performance-Test Methodology & Execute (15–17 Sep)

**Planned:** Confirm workload model + tender-standard benchmarks, execute 15–17 Sep, capture results, close the UAT-vs-prod load profile ownership gap.

**Actual:** Execution window ran as scheduled. Thursday's plan still flagged the VAPT report (final vs. interim) and CAE/CIE performance baseline as overdue against Tuesday's "due 17 Sep" commitment. Today's 5pm Perf Testing Review was positioned to close this out (100-VU baseline results, named VAPT triage engineer) — outcome not yet captured in this workspace as of writing.

**Status:** 🟡 Partial — test window executed, but the two closing conditions (results captured, named triage owner) were still open going into today's review.

---

### Priority 2: Secure Executive Sign-Off + Clear R1 Marketplace Blockers

**Planned:** Adrian + Li Ting Kway walkthrough of the 5.5-sprint scope, CV retention policy drafted, async ZIP export confirmed, Grade Gating decision doc run.

**Actual:** This priority didn't complete as planned — it got overtaken by something bigger. Monday's exec review happened, but by midweek the team had disproved the core assumption the whole scope was built on (that C@G hosts internal jobs). Tuesday and Wednesday's scoping sessions produced 16 and 7 new decisions respectively, including an unbudgeted scope change (native form vs. FormSG). Today's OTEP Squad Sync formally pivoted the architecture to HRPS/Cumulus discovery, and the reduced-scope feasibility brief (18.0–23.5 man-weeks) went into today's 2:30pm estimation sync with Rama and Barry.

**Status:** 🟡 Partial, redirected. The original blockers (CV retention, async ZIP export) are not confirmed closed in this week's files — they were eclipsed by the bigger architectural question. No evidence the Grade Gating decision doc ran.

**Key outcome:** R1's technical premise is now grounded in verified reality (HRPS/Cumulus) instead of an unconfirmed assumption (C@G internal jobs) — a better foundation, even though it cost the week's planned sequencing.

---

### Priority 3: Close VAPT & CIE Ownership Gaps

**Planned:** Named VAPT triage engineer confirmed, CIE PM vacancy escalated, Day 2 ops runbook progressed with Jace Tan.

**Actual:** Still open per Friday's daily plan — "VAPT triage ownership still unassigned" and "Business Owner Christopher Woo requires a named technical triage lead" both listed as live heads-up items going into today. No evidence in this week's files that the CIE PM vacancy was escalated.

**Status:** ❌ Not closed. This is the second consecutive week this priority has carried over without a named owner.

---

## Key Decisions Made

1. **Pursue HRPS and Cumulus as the real upstream sources for internal jobs, not Careers@Gov** (18 Sep, OTEP Squad Sync)
   - **Rationale:** Investigation found no evidence C@G hosts internal or hidden jobs; forcing that integration would have built against the wrong system entirely.
   - **Owner:** Adrian Ang, Barry Lim, Michelle Yip
   - **Impact:** Invalidates Pillar 2 of the reduced-scope brief as written earlier this week. Triggers active discovery with Li Kun (HRPS) and Huiting (Cumulus), due 23–24 Sep.

2. **Position Compass as an aggregation/discovery layer, not a fourth application system** (18 Sep)
   - **Rationale:** Adrian: "If we introduce a fourth system, nobody will use it" — direct callback to OTG's adoption failure.
   - **Impact:** Mainstream jobs (internal, secondments) stay discovery-only with external redirect; native build effort stays confined to STIPs & Gigs.

3. **Build the Gigs/STIPs application form natively in Compass, not via embedded FormSG** (17 Sep, Roadmap Planning)
   - **Rationale:** Barry: "If the goal is tracking and data, the team needs control of the collection surface."
   - **Impact:** Directly contradicts the locked master PRD's F-01 delivery mode. Not re-costed against the 5.5-sprint budget before today's estimation sync — flagged as an open risk, not resolved.

4. **No development for SJR and internal jobs; discovery only** (17 Sep, Roadmap Planning)
   - **Rationale:** Creation and application stay in originating HR systems (CFD, HRPS, Cumulus); a separate conversation with Careers is required.
   - **Impact:** Reinforces Decision 2; keeps a large scope category out of R1 build entirely.

5. **Remediate VAPT findings incrementally with NCS rather than waiting for 100% resolution** (18 Sep)
   - **Rationale:** Waiting for full remediation before any rescan creates unnecessary release blockers.
   - **Owner:** Jobelle Lim, Adrian Ang

6. **Adopt deliberate stakeholder pre-alignment before formal sessions** (17 Sep, Team Retro)
   - **Rationale:** Working-level reps often can't make trade-off calls independently, causing delays when leaders haven't been pre-aligned.
   - **Impact:** Directly the pattern this week's BO alignment brief was built to pre-empt — team retro validated it after the fact.

---

## Metrics Movement

| Metric | Start of Week | End of Week | Change |
|---|---|---|---|
| R1 estimated effort | 5.5 sprints (locked, C@G-based) | 18.0–23.5 man-weeks, HRPS/Cumulus-based, unre-costed for native form change | Scope basis changed, not just the number |
| R1 kickoff date (tracked) | ~1 Dec 2026 (R-11, corrected 16 Sep) | Three competing dates in play: mid-Nov (17 Sep session), ~1 Dec (risk register), Oct (today's one-pager edit) | 🔴 Unreconciled |
| VAPT triage ownership | Unassigned (carried from W37) | Still unassigned | No change — 2nd week |
| Action items without an owner | — | 9/12 (Tue roadmap session), 4/8 (Wed retro) | New pattern, named twice |
| North Star metric definition | Undefined pre-pivot | "Opportunities Discovered per Officer" proposed (18 Sep) | New — pending leadership sign-off |

---

## Top 3 Learnings

**What worked:** Challenging a load-bearing assumption mid-flight, even at real cost. The team had spent most of the week building scope and estimates on top of "C@G hosts internal jobs." Testing and disproving that assumption this Friday — rather than discovering it after Sprint 1 kickoff — is exactly the kind of catch that's expensive to make late and cheap to make now. The reframe from "we integrated HRPS/Cumulus APIs" to "officers discovered and applied for more relevant opportunities" (from today's squad sync) is also a materially better way to define success for this release.

**What didn't work:** Decisions keep getting made in the room and not carrying forward. Three separate meetings this week (Tue roadmap, Wed scope session, Wed retro) each independently re-derived the same principle — readiness gates before dev starts, name an owner, don't assume — and each one still ended with unowned action items or an uncorrected stale date. The retro literally agreed "all team members should proactively raise material risks" that morning, and the roadmap session that afternoon left 9 of 12 items unowned anyway. Naming the pattern isn't fixing it.

**What to change:** Stop letting scope changes and date corrections live only in the meeting where they were said. The native-form-vs-FormSG decision and the mid-Nov/~1-Dec/Oct date conflict both need one written source of truth, updated the same day they change, not rediscovered stale in the next meeting. Concretely: before Tuesday's estimation follow-through, reconcile all three kickoff dates into one number in the risk register and the one-pager, and explicitly cost the native-form decision against the 5.5-sprint ceiling instead of carrying it as an open flag into a fourth meeting.

---

## Next Week Preview

1. **Close the HRPS/Cumulus discovery loop** — API access, ringfencing enforcement, and eligibility-determination questions are due 23–25 Sep per today's squad sync action items, and they gate whether Mainstream Jobs can be in R1 at all.
2. **Reconcile the kickoff date once, everywhere** — pick one of mid-Nov / ~1 Dec / Oct, update the risk register, the one-pager, and the reduced-scope brief in the same sitting, and stop letting each new meeting restate a different one.
3. **Get the native-form scope change formally costed and decided** — it's been sitting as an unresolved flag since Tuesday; Tuesday 22 Sep's estimation delivery to Adrian is the natural forcing function.

> Run `/weekly-plan` to formalize these with tasks, owners, and dates.

---

*Generated: 2026-09-18*
*Data sources: outputs/weekly-plans, outputs/daily-plans, outputs/meeting-notes, outputs/decisions, outputs/analyses, outputs/prds, outputs/journey-maps, git log*
*Next: Run `/weekly-plan` to plan next week*
