---
date: 2026-09-07
week: 2026-W37
type: raid-log
scope: R1 Opportunities — CareerCompass Release 1 (target Q1 2027, agencies WSG/PA/MSF)
owner: Michelle Yip
sources:
  - outputs/analyses/2026-09-04-W36-r1-timeline-and-handoff-collision-analysis.md
  - outputs/prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md
  - outputs/prds/2026-07-07-W28-careercompass-r1-prd.md
  - outputs/decisions/2026-09-01-W36-r1-brainstorm-running-doc.md
  - outputs/roadmaps/2026-06-12-W25-careercompass-phased-rollout.md
  - outputs/archive/2026-W27-Jun29-Jul3/analyses/2026-07-04-W27-r1-must-epics-effort-sizing.md
---

# R1 Opportunities RAID — as of 7 September 2026 (W37)

Standalone RAID for the R1 Opportunities workstream: opportunity-type scope (internal jobs, secondments, rotations), sourcing (native creation vs. ingestion), the Epic A/B/C/D apply-and-track flow, and the design/engineering handoff. Separate from the MVP RAID because R1 is a different release on a different timeline with a different set of unknowns.

**What R1 Opportunities is:** the release that turns CareerCompass from a discovery platform into a place officers apply and track applications, extended to the opportunity types that matter for internal mobility. Two halves: (a) **apply + status tracking** — Epics A (creation), B (native apply + pre-fill), C (status tracking), D (saved jobs), from the [R1 Seamless Application PRD](../prds/2026-07-07-W28-careercompass-r1-prd.md); (b) **opportunity-type scope** — which types R1 covers and how they get in, from the [R1 opportunity-scope PRD](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md).

**Timeline status:** Adrian's working chain (Oct dev start → Dec freeze → mid-Jan UAT → 8-wk VAPT → end-Q1 2027 release) is unsized verbal math. The [4 Sep collision analysis](2026-09-04-W36-r1-timeline-and-handoff-collision-analysis.md) projects the real handoff at mid-to-late November, pushing release toward mid-2027. Not yet ratified — Adrian owes a call between Options A/B/C.

**Cadence:** bi-weekly R1 brainstorm (Michelle + Pow Hwee + Liting), started Sprint 9.

---

## Risks

| # | Risk | Impact | Status / mitigation | Owner |
|---|------|--------|---------------------|-------|
| R1 | **Single designer across CMM and R1.** Liting (Li Ting Kway) owns both. CMM has a hard 15 Sep BO share-out; R1 needs 3 distinct surfaces designed (creation, apply flow, hiring-manager view). One person can't do both in 3–4 weeks. | R1 design handoff slips +4–6 weeks (to late Oct / early Nov), or CMM slips. | 🔴 Open. Options: add a 2nd designer (Option B) or move the R1 timeline to fit one (Option C). Adrian's call. | Adrian |
| R2 | **Unvalidated scope on internal jobs / secondments.** These follow distinct admin rules, approvals, and security classifications vs. STIPs/Gigs. No operational contact yet with the people who run them. Requirements for this half of the opportunity spectrum do not exist. | Designing on unvalidated assumptions guarantees engineering churn. | 🔴 Open. Megan Yeo (PCG) identified as entry point; discovery not yet scheduled. Target: interview week of 7 Sep. | Michelle / Liting |
| R3 | **Engineering unavailable in October.** Adrian's plan assumes devs pick up R1 tickets in Oct because MVP dev freezes end-Sept. In reality: VAPT remediation (findings from 25 Sep), perf-test fixes (15–17 Sep tests), and MVP go-live readiness tie up core engineering through November. | Handing off R1 stories 1 Oct creates an unworked backlog. Timeline slips silently. | 🔴 Open. Option C (realign handoff to mid-Nov) is the recommended resolution. Not ratified. | Adrian |
| R4 | **"Ingestion fallback" is not a simplification.** Descoping internal jobs from native creation to ingestion from C@G/OTG adds dual-posting for HR, redirect/login friction for officers, and its own engineering spikes (schemas, auth contracts). | The cheap-looking option isn't cheap; picking it without scoping the spikes repeats the pattern. | 🟡 Open. OTEP-578 spike (Sprint 9, unassigned) is meant to size this. Needs Pow Hwee. | Pow Hwee |
| R5 | **Agency-admin auth path does not exist** (Epic A). No auth mechanism for agency HR to create postings. Flagged to Pow Hwee/Fabian at the 24 Jun jam; still unresolved 11 weeks later. | Epic A (creation) cannot enter the story pipeline at all until this resolves. Hard gate, not a manageable risk. | 🔴 Open, no owner commitment. | Pow Hwee / Fabian |
| R6 | **Competency SSOT contract not finalised** (Epic B pre-fill). Sourcing resolved (Imelda's workstream, Jul), but the endpoint payload spec between Léo and Kingsley (#18/#41) is still open. | Pre-fill quality can't be guaranteed. Pre-fill is Epic B's core value prop, not a side feature. | 🟡 Open. Endpoint contract needs Léo + Kingsley. | Léo / Kingsley |
| R7 | **Epic C manager-facing status-update UX is net-new, undesigned.** The ATS fork resolved to a hybrid model; the manager UX an ATS would have provided now has to be built. Didn't exist as a requirement under the old plan. | Epic C can't be sized until this gets its own design pass. The apply→manager-queue→status-return "seam" is the highest-risk undesigned surface. | 🟡 Open. Needs a design pass before Epic C grooming. | Liting / Michelle |
| R8 | **R1 architecture is unsettled** (Workable hybrid, changed 5 Aug). Which functions live in Workable vs. OTEP is unmapped. Whether it needs the e-tender process that blocked full ATS integration is unknown. Data ownership (OTEP vs. Workable as system of record) is open. | Phase 1 timeline was scoped against the old OTEP-native architecture. A hybrid with an external system in the loop needs its own integration timeline — comparable to the CSC/DLE SSO integration that took weeks and surfaced infra/data-mapping risk. | 🔴 Open. Assume re-planning, not a straight swap. | Adrian / Pow Hwee |
| R9 | **Epic D (Saved Jobs) is funnel-critical but the first-cut candidate under scope pressure.** The journey map shows Epic D is the only mechanism feeding passive watchers into the apply funnel. | Cutting D isn't losing a convenience feature — it's losing the on-ramp to R1's primary success metric. | 🟡 Open. Protect D explicitly if scope gets cut. OTEP-425 bookmark spike (Sprint 9) is the discovery. | Michelle |
| R10 | **"UAT by mid-Jan" quoted as firm before any option is ratified.** The date is unsized verbal math from the 31 Aug Adrian sync. | Program trackers calcify a commitment the team can't meet — the same failure mode as Sprint 9's date. | 🟡 Open. Keep it out of trackers as a commitment until Options A/B/C is decided. | Michelle |

---

## Assumptions

| # | Assumption | If wrong |
|---|-----------|----------|
| A1 | Internal jobs / secondments are the dominant opportunity type for WSG/PA/MSF officers. | R1 Opportunities scope is lower priority than Epics B/C; type expansion could defer to R2. Validate volume with Megan Yeo. |
| A2 | Internal jobs / secondments can reuse the MVP listing/detail/filter surface with modest additions. | If they need a materially new data model + state machine, kill criteria triggers — route to R2, ship R1 with STIPs/Gigs native + internal jobs as external links. |
| A3 | "Rotations" is a distinct opportunity type. | If it's a sub-case of secondment (or an internal reassignment with no "application"), scoping three types is wasted effort. Resolve in discovery. |
| A4 | The MVP unified-listing hypothesis (consolidation lifts discovery + mobility) holds for internal jobs / secondments, not just STIPs/Gigs. | R1's core rationale for these agencies weakens; revisit whether WSG/PA/MSF is the right R1 cohort. |
| A5 | Workable was procured through a path that doesn't require the e-tender process that blocked full ATS integration until 2028. | If it does need e-tender, the hybrid architecture is also blocked until 2028 and R1's status-tracking half needs a different design. |
| A6 | R1 gets a dedicated 2nd designer OR the timeline moves — one of the two. | If neither: half-baked designs hand off and trigger rework, or the timeline slips emergently into Q1/Q2 2027 with no decision made. |
| A7 | The R1 pilot cohort (~5,400 officers, 6 agencies) generates enough application volume to read the success metrics. | Metrics stay directional, not conclusive; kill/scale decisions get pushed past the pilot window. |

---

## Issues (open, active)

| # | Issue | Owner | Status |
|---|-------|-------|--------|
| I-1 | **R1 opportunity-type scope undecided** — which types in R1 vs. R2, and native-vs-ingestion-vs-external-link per type. | Michelle (PRD) / Adrian (sign-off) | 🔴 Open — gated on discovery + OTEP-578 spike |
| I-2 | **OTEP-578 spike unassigned** — `[SPIKE] OTG ingestion - Jobs (Secondments, Internal Jobs, Rotations)`, Sprint 9, Backlog, no owner, no description. | Needs assignment | 🔴 Open |
| I-3 | **OTEP-425 bookmark spike unassigned** — `[SPIKE] discovery - Bookmark opportunities` (Epic D), Sprint 9, Backlog, no owner. | Needs assignment | 🔴 Open |
| I-4 | **Agency-admin auth ownership** — no one has committed to owning the auth path for Epic A. Open since the 24 Jun jam. | Pow Hwee / Fabian | 🔴 Open — hard gate on Epic A |
| I-5 | **Non-Goal #1 needs re-validation** — "OTEP does not become a de facto ATS" was written against the OTEP-native architecture. With Workable owning backend status functions, does that still hold, or is the Compass-front-end + Workable-backend arrangement itself the de facto ATS Barry flagged? | Michelle / Adrian | 🔴 Open — blocks the PRD being current |
| I-6 | **SJR apply-flow scope** — "are SJRs fully in R1?" Open since before the 24 Jun jam, never closed. | Michelle / Mark | 🟡 Open — hasn't drifted, hasn't resolved |
| I-7 | **R1 design surfaces not started** — no wireframes for creation, apply flow, or hiring-manager view. Liting on CMM through mid-Sep. | Liting | 🟡 Open — realistic start mid-to-late Oct |
| I-8 | **Second VAPT cycle question** — does R1 need its own separate VAPT? Adrian's working assumption is yes; unconfirmed. | Michelle / Jace | 🟡 Open — feeds R1 timeline sizing |

---

## Dependencies

| # | Dependency | What breaks if it doesn't land | Escalation trigger |
|---|-----------|-------------------------------|--------------------|
| D1 | **MVP employment-lifecycle workstream closes** (dev capacity). R1 dev can't ramp while MVP freeze work + VAPT remediation runs. | R1 dev start slips regardless of design readiness. | MVP readiness work still consuming core eng past mid-Nov |
| D2 | **Megan Yeo (PCG) discovery** — scheme-administrator requirements for internal jobs / secondments. | Design for this half of the opportunity spectrum can't start; ingestion-vs-native call has no basis. | Not scheduled by end of W38 |
| D3 | **Technical architecture spike with Pow Hwee** — feasibility of reducing dual-posting + auth hops for ingested opportunities. | Ingestion fallback can't be scoped; engineering can't start on ingested types. | Not scoped at the Sprint 9 R1 brainstorm |
| D4 | **Agency-admin auth path** (Pow Hwee / Fabian). | Epic A (creation) can't enter the story pipeline. | No owner commitment by R1 grooming |
| D5 | **Competency SSOT endpoint contract** (Léo + Kingsley, #18/#41). | Epic B pre-fill quality can't be guaranteed. | Contract still open at R1 grooming |
| D6 | **Workable function map** — which of posting record / application record / status state machine live in Workable vs. OTEP. | Epics A/B/C can't be designed or sized against the real architecture. | Not mapped before design handoff |
| D7 | **Adrian ratifies Options A/B/C** — descope, add design capacity, or move the timeline. | Every downstream R1 date stays fiction; trackers quote a commitment that isn't real. | Not decided in the next Adrian 1:1 (Adrian away 5–9 Oct) |
| D8 | **Design capacity decision** — 2nd designer assigned, or timeline formally reset. | Option B is moot after a point; only Option C (or emergent slip) remains. | Not decided by end of Sept |
| D9 | **Second designer identified** if Option B — Michelle Chen, or Amber capacity transition. | Option B can't execute. | Named but not committed by the time Adrian decides |

---

## Decisions needed (in priority order)

| # | Decision | Owner | Latest safe date | Blocks |
|---|----------|-------|------------------|--------|
| 1 | **Ratify Options A/B/C** (descope / add design / move timeline). | Adrian | Next 1:1 — Adrian away 5–9 Oct, so before then | Every R1 date; design handoff planning |
| 2 | **R1 opportunity-type scope + sourcing** (native / ingestion / external-link per type). | Adrian (on Michelle's PRD + discovery + spike) | R1 grooming | Epic A sizing; OTEP-578 direction |
| 3 | **Agency-admin auth ownership**. | Pow Hwee / Fabian | Before Epic A grooming | Epic A entering the pipeline |
| 4 | **Non-Goal #1 re-validation** (is the Workable hybrid the de facto ATS?). | Adrian / Michelle | Before the R1 PRD is treated as current | PRD accuracy; Barry's concern |
| 5 | **Second VAPT cycle — yes/no**. | Jace / Adrian | Before R1 timeline is sized | R1 release date |
| 6 | **SJR in R1 — yes/no**. | Mark | Before R1 grooming | Epic A scope |

---

## This week — R1 Opportunities (W37)

1. **Support Liting's Megan Yeo outreach** — get the discovery interview booked for the week of 7 Sep (R2).
2. **Take Options A/B/C to Adrian** — flag that an Oct dev start collides with VAPT remediation regardless of design pace; he owes a call before he's away 5–9 Oct (D7).
3. **Scope the ingestion spike at the Sprint 9 R1 brainstorm** — dual-posting + auth-hop feasibility with Pow Hwee (D3 / R4).
4. **Keep "UAT by mid-Jan" out of trackers as a commitment** until an option is ratified (R10).
5. **Assign OTEP-578 and OTEP-425** — both are unowned Sprint 9 spikes that gate R1 decisions.

---

*Generated: 2026-09-07. Built from the 4 Sep collision analysis, the 7 Sep R1 opportunity-scope PRD, the 7 Jul R1 Seamless Application PRD, and the R1 brainstorm running doc. Re-status at each `/weekly-review` and update the running doc after each R1 brainstorm.*
