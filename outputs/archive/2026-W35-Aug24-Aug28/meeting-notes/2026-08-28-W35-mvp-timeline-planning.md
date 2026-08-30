# Meeting Notes: Overall MVP Timeline Planning

| Field | Detail |
|---|---|
| **Date** | 28 Aug 2026 |
| **Type** | MVP planning / production-readiness + risk-surfacing session |
| **Contributors** | Michelle YIP, Rama MOORTHY, Adrian Lo, Imelda MO, Jace TAN, Jobelle LIM (ThoughtWorks) |
| **Health** | 🟠 Amber — good planning session; the constraint is Sep–Nov execution bandwidth, not technical delivery |
| **Source** | PM's own structured executive assessment + a personal action-planning annex (Priorities 1–5). Not a transcript. |

> **Refreshed 2026-08-29** against facts that landed after the meeting:
>
> | Change | Now |
> |---|---|
> | MVP launch date | Confirmed **24–25 Nov 2026** (Adrian Ang, 25 Aug); VAPT sign-off ~7 Nov (`open-items.md #39`) |
> | SSO | **UAT passed with BO sign-off 28 Aug** — the last feature blocker cleared |
> | Employment-lifecycle ownership | **Imelda** — prioritisation + BO discussion. **Michelle** — test rationalisation, hypotheses, AGD/MTI/MDDI |
> | Day-2 first-cut proposal | **Rama / Adrian Lo** own it (not Michelle) |

---

## Summary

The team shifted from "can we build MVP?" to "can we safely launch and operate MVP?" — reviewing a formal go-live readiness checklist, discussing the Day-2 operating model seriously for the first time, and confirming VAPT governance. The employment-profile-change scope was tightened from a large scenario list into three priority groups, with job-ID / competency changes named as the highest-value area. The dominant risk is no longer feature completion (with SSO now BO-signed, MVP is feature-complete): it is that MVP readiness, VAPT remediation, employment-lifecycle changes, CAM, Opportunities, and CMM discovery are all competing for the same people between September and the 24–25 Nov launch. Several launch-critical workstreams (Day-2 support model, data classification, risk assessment) are still at discussion level with fuzzy ownership.

---

## Decisions Made

| # | Decision | Why | Who | Impact |
|---|----------|-----|-----|--------|
| 1 | Adopt a formal MVP go-live readiness checklist with structured, owned tracking | Move launch governance off ad hoc tracking onto a framework: comms, people, system, perf testing, security testing, access mgmt, monitoring, documentation, support readiness, contingency | Jace TAN drives | Single readiness artefact to run launch against |
| 2 | CAM is out of MVP; targeted for R1 | Scope protection — can't be absorbed into the MVP window | — | CAM moves to R1 Pathfinder track; removed from the Sep–Nov contention set |
| 3 | Day-2 support hours ≈ office hours; team proposes the support model rather than asking stakeholders to define it | Jace's steer — own the operating model, bring a first-cut proposal | Rama / Adrian Lo define the model *and* draft the first-cut proposal + SLA | Discussion-starter draft due next week (see Actions) |
| 4 | VAPT runs on a daily tracking process with active deadline chasing | Prior cycles slipped when findings arrived without a tracking discipline | Jobelle LIM tracks + chases; Jace owns VAPT governance | Tracking goes operational once VAPT kicks off 7 Sep |
| 5 | Field-level data classification exercise required (not inherited from OTG) | CC inherited OTG's classification assumptions; field-level review + DO alignment needed; system owner may challenge; Mark HO expected to require it | Jace drives; Michelle builds the inventory + DO alignment | New workstream, not started, launch-relevant |
| 6 | Formal risk assessment required across cyber, data, project, cloud | Any residual medium+ risk needs escalation and approval before launch | Jace drives | New governance workstream, ownership not locked |
| 7 | Employment-profile-change work prioritises job-ID changes, competency preservation, officer identity continuity before broader coverage | Job-ID / competency changes have the highest impact on recommendations + UX; identity discontinuity risks an officer treated as new | **Imelda** — prioritisation + BO/WD discussion. **Michelle** — test rationalisation, 3 hypotheses, AGD/MTI/MDDI investigation | Narrows the 82-case scope to a testable set before VAPT remediation consumes capacity |

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Finalise employment-lifecycle prioritisation (P1 job-ID/competency + identity continuity; P2 secondment/exit; P3 cosmetic) | Imelda | Before Tue WD discussion | 🔴 High | 🔴 Not Started |
| Lead the BO prioritisation discussion; drive the employment profile workshop; bring prioritised hypotheses to WD | Imelda | Before Tue WD discussion | 🔴 High | 🔴 Not Started |
| Rationalise test cases to a representative set per scenario group (target ~70% coverage, ~13–19 cases) | Imelda | Before Tue WD discussion | 🔴 High | 🔴 Not Started |
| Frame 3 hypotheses (not solutions) for the WD discussion — job-ID change, agency transfer, title-only change | Imelda | Before Tue WD discussion | 🔴 High | 🔴 Not Started |
| Investigate common user schemes — AGD / MTI / MDDI: lifecycle movement, whether they get different job IDs, competency-loading impact, whether MDDI pilot users are affected | Michelle | This week | 🔴 High | 🔴 Not Started |
| Build the data inventory (POCDEX fields, HRPS fields, Compass-generated data, user-generated data) | Rama / Adrian Lo | No date — schedule within 48h | 🟡 Medium | 🔴 Not Started |
| Categorise each field by sensitivity (Public / Official-Sensitive / Restricted / Restricted-Sensitive) and answer "are we still equivalent to OTG's classification?" | Product + DO | After inventory | 🟡 Medium | 🔴 Not Started |
| Define the Day-2 support model + draft the first-cut proposal + SLA as a discussion starter (intake, L1/L2/L3, dependencies, severity model, roster, engineer rotation, escalation) | Rama / Adrian Lo | Draft next week; full model before go-live | 🔴 High | 🔴 Not Started |
| Validate Career Compass mailbox — careercompass@psd.gov.sg, ownership, access control | Michelle | This week | 🟡 Medium | 🔴 Not Started |
| Technical sizing for employment-profile changes | Rama / Adrian Lo | After the prioritisation + hypotheses land | 🔴 High | 🔴 Not Started |
| Architecture / scalability review | Rama / Adrian Lo | Before performance testing | 🟡 Medium | 🔴 Not Started |
| Performance-testing plan + metrics | Rama / Adrian Lo | Before 7–15 Sep window | 🔴 High | 🔴 Not Started |
| Review backlog + post-MVP sizing | Rama / Adrian Lo | Before R1 planning | 🟡 Medium | 🔴 Not Started |
| Drive the go-live readiness checklist | Jace TAN | Ongoing to launch | 🔴 High | 🔴 Not Started |
| Drive the formal risk assessment (cyber / data / project / cloud) | Jace TAN | Before launch | 🔴 High | 🔴 Not Started |
| Drive the data classification exercise | Jace TAN | Before launch | 🔴 High | 🔴 Not Started |
| Daily VAPT tracking; escalate missed deadlines; coordinate milestone monitoring | Jobelle LIM | Daily from 7 Sep | 🔴 High | 🔴 Not Started |
| Sequence Core-track vs Pathfinder-track R1 work (too much to run concurrently) | Michelle + team | Can wait until after VAPT starts | 🟡 Medium | 🔴 Not Started |

**Notes:**

- Michelle's Tuesday WD deliverable (test rationalisation + hypotheses + common-user-scheme findings) is the critical near-term item — with Imelda's prioritisation, it unblocks engineering sizing before VAPT remediation starts consuming capacity. Coordinate so both halves land together.
- Undated launch-critical items to schedule within 48h: data inventory, Day-2 support model, mailbox validation.
- "Bring hypotheses, not solutions" is a hard framing constraint from Rama's pushback — ask WD "is this the expected officer experience?", not "is this the system design?".

---

## Concerns Raised

| # | Concern | Detail |
|---|---------|--------|
| 1 | Too many workstreams still at discussion level, not execution | Go-live checklist, Day-2 process/model/SLA, VAPT + remediation, risk assessment, data classification, employment changes, Opportunities, CAM, CMM, plus tech debt (officer identity modelling, competency history). Most are discussion-stage — not enough have an owner, a plan, and a start date. |
| 2 | Fuzzy ownership in specific areas | **Day-2 Ops:** shared mailbox? L1 triage? incident coordination? support roster? engineer rotation? **Risk assessment:** responsibilities roughly assigned, detailed ownership not locked. |
| 3 | WD alignment is assumed, not confirmed | Plans reference WD comms / readiness / support expectations / UAT priorities with little evidence of final agreement. Imelda is the bridge, but the assumption needs converting to confirmation. |
| 4 | Solution discussions running ahead of business validation | Rama pushed back several times: BOs must drive prioritisation before engineering goes deep into solution design. Live tension between PM urgency, engineering readiness, and business ownership. Mitigation: the "hypotheses not solutions" framing for Tuesday. |

---

## Risks

### Explicitly discussed (High)

| # | Risk | Detail | Mitigation state |
|---|------|--------|------------------|
| H1 | **VAPT findings consume all available capacity** | Once reports arrive, "drop everything and remediate." Directly hits employment-profile changes, UAT tail, post-MVP enhancements, release planning. Called the single most significant execution risk. | Daily tracking + aggressive chasing (Jobelle). No capacity model yet. |
| H2 | **Data classification approval** | Career Compass inherited OTG classification; field-level review + DO alignment required; system owner may challenge. Not started. | New workstream assigned to Jace + Michelle. |
| H3 | **Risk assessment process** | Cyber / data / project / cloud assessments required; residual medium+ risks need escalation and approval. | Assigned to Jace; detailed ownership not locked. |
| H4 | **Day-2 readiness** | Support model not finalised — mailbox, ticketing, SLAs, escalation, ownership — yet launch-critical. | Rama / Adrian Lo to define the model and draft the first cut. |

### Acknowledged but not adequately addressed

| Risk | Detail | Gap |
|------|--------|-----|
| Dependency SLA risk | Dependencies on Jumpstart, Products, CSC systems, other external services | No escalation pathways, response commitments, or support agreements. Posture is "escalate and chase". |
| BAU capacity risk | VAPT fixes, Day-2 readiness, release planning, lifecycle enhancements, Opportunity work, CAM, CMM all need the same group | Capacity discussed; no resource-allocation model produced |
| Identity resolution risk | Officer moves, email changes, agency changes, job-ID changes, competency-history preservation — a data-model issue underpinning most lifecycle scenarios | Team believes a solution exists; not socialised |
| Pilot agency validation risk | Whitelist agencies, invite known users, verify production SSO after launch — raised and sensible | No formal validation plan agreed |

---

## Timeline Risks

| Risk | Detail | What's needed |
|------|--------|---------------|
| Tuesday WD deliverable split across two owners, due in ~4 days | Imelda's prioritisation + Michelle's test rationalisation / hypotheses / AGD-MTI-MDDI, all before the WD discussion. Gate for engineering sizing. Michelle's half also overlaps the same-week data-classification inventory. | If either half slips, sizing slips into the VAPT-remediation window (Risk H1). Sequence or get help. |
| VAPT remediation (~18 Sep interim findings) collides with employment-profile-change delivery | Team said "drop everything and remediate" when findings land. | Employment-change work must be sized and started in the 1–17 Sep window, or it misses the 24–25 Nov launch. |
| Data classification + risk assessment not started, launch-critical | Both assigned to Jace, who also drives the readiness checklist and VAPT governance — 3 launch-gating workstreams on one owner. | Confirm Jace's bandwidth or split. |
| Day-2 support model has no date, launch-critical | Mailbox, ticketing, SLAs, escalation, roster, rotation all unresolved. Drafting is a "next week" item for Rama / Adrian Lo. | Needs to be operationally ready by 24–25 Nov; the current pace is late. |
| "The Nov launch or Feb R1 could slip" — the meeting's own conclusion | Three cross-cutting threats: Day-2 not ready, VAPT eats capacity, resource contention unresolved. | No decision framework for the contention was produced — produce one. |
| R1 track sequencing deferred until "after VAPT starts" | Core track (employment changes, VAPT remediation, risk assessment, perf testing, data-model tech debt, ABLR onboarding, CMM discovery) and Pathfinder track (opportunity creation, structured applications, bookmarking, additional opportunity types, CAM) both loaded. | Deferral is reasonable for bandwidth but risks R1 planning starting cold in a compressed window. |

---

## Key Insights

**The framing shift is the real outcome.** "Can we build MVP?" → "Can we safely launch and operate MVP?" The team reviewed an actual go-live checklist and discussed the Day-2 operating model in concrete terms (intake, L1/L2/L3, severity, roster) for the first time. That's the maturity step. The cost of arriving here late is that the operational workstreams now compress into the same window as VAPT.

**The constraint is people, not code.** MVP is feature-complete — SSO UAT passed with BO sign-off on 28 Aug, the last blocker. Every remaining risk is a bandwidth or ownership problem: VAPT remediation vs enhancements, Day-2 model undefined, classification/risk-assessment unstarted, R1 tracks overloaded. A resource-allocation model is the missing artefact.

**The employment-lifecycle scoping is the highest-leverage move this week.** Turning 82 cases into ~3 priority groups + ~13–19 representative test cases + 3 validated hypotheses is what lets engineering size the work before VAPT remediation locks capacity. The window is 1–17 Sep. Split across Imelda (prioritisation) and Michelle (test cases + hypotheses), so both halves have to land together.

**Rama's pushback is a governance signal, not friction.** "BOs drive prioritisation before engineering solutions" is the right sequencing. The mitigation is in hand — WD hypotheses framed as "is this the expected officer experience?" not "is this the design?" — but the Tuesday session has to genuinely land BO prioritisation, not just present a PM cut.

**Data classification is a Mark-HO-anticipated challenge.** Jace flagged that Michelle already raised this. Inheriting OTG's classification without a field-level review is exactly the kind of assumption Mark HO has been probing in the weekly status thread. Getting ahead of it with an inventory is defensive work worth doing now.

**"Escalate and chase" is the recurring anti-pattern.** It shows up for VAPT deadlines (mitigated by Jobelle's daily tracking) and for external dependencies (not mitigated at all). For Jumpstart / Products / CSC / HRPS there are no response commitments or support agreements — the same posture that's a known weakness elsewhere in the programme.

---

## Open Questions

| Question | Owner | By |
|----------|-------|-----|
| Who owns Day-2 incident coordination, L1 triage, the shared mailbox, the support roster, and engineer rotation? | Rama / Adrian Lo | Before go-live (set a date this week) |
| Has WD actually agreed to the comms plan, support expectations, and UAT priorities the plans assume? | Imelda MO | Tuesday WD discussion |
| Do escalation pathways / response commitments / support agreements exist for Jumpstart, Products, CSC, HRPS — or is it "chase" only? | Jace / Rama | Before VAPT starts |
| What is the resource-allocation model across VAPT, Day-2, release planning, employment changes, Opportunities, CAM, CMM? | Michelle + Rama + Jace | Before R1 planning |
| Is the officer-identity-resolution solution real and socialised, or still a belief? | Rama / Adrian Lo | Before employment-change sizing is trusted |
| Are MDDI pilot users affected by common-user-scheme (AGD/MTI) handling? | Michelle | This week |
| Is the pilot-agency post-launch validation (whitelist, invite known users, verify production SSO) going to be a formal plan? | Michelle / Jace | Before go-live |
| Are we still equivalent to OTG's data classification at field level? | Michelle + DO | After the inventory |

---

## Blockers

| # | Blocker | Blocked by | Impact | Resolution |
|---|---------|-----------|--------|-----------|
| 1 | Employment-change engineering sizing | Imelda's prioritisation + Michelle's test rationalisation / hypotheses not yet done; Rama won't have engineering go deep until BOs prioritise | If sizing isn't done before ~18 Sep, VAPT remediation consumes the capacity and employment changes miss the 24–25 Nov launch | Land prioritisation + hypotheses at Tuesday's WD session; engineering sizes immediately after |
| 2 | Day-2 support model undefined | Sub-component ownership unresolved; team agreed to propose rather than wait, but the proposal isn't drafted | Launch-critical — can't go live without an operating model | Rama / Adrian Lo own defining the model and drafting the first cut |
| 3 | Data classification + risk assessment not started | New workstreams, ownership on Jace who is already loaded, no start date | Launch-gating governance; Mark HO likely to require the classification exercise | Jace confirms bandwidth or splits; Michelle starts the field inventory now |
| 4 | Resource contention Sep–Nov has no decision framework | Capacity discussed, no allocation model produced | Named as a top-3 reason the Nov launch or Feb R1 could slip | Produce a resource-allocation model; sequence Core vs Pathfinder R1 tracks |

---

## Next Steps

**Immediate (before Tuesday WD discussion):**
- Imelda: finalise lifecycle prioritisation (P1 job-ID/competency + identity continuity; P2 secondment/exit; P3 cosmetic); line up the BO prioritisation discussion and profile workshop so WD walks out with a prioritised set, not a PM proposal.
- Michelle: rationalise test cases to ~13–19 representative cases (~70% coverage); frame 3 hypotheses as officer-experience questions; pull common-user-scheme findings (AGD/MTI/MDDI — do MDDI pilot users get different job IDs?). Coordinate with Imelda so the two halves land together.

**This week:**
- Michelle: start the data-classification field inventory (POCDEX / HRPS / Compass-generated / user-generated); validate the careercompass@psd.gov.sg mailbox ownership and access.
- Rama / Adrian Lo: begin defining the Day-2 support model; prep the performance-testing plan.
- Jace: confirm he has bandwidth for readiness checklist + risk assessment + data classification, or split ownership.

**Next week:**
- Rama / Adrian Lo: draft the Day-2 operating model + SLA proposal as discussion starters (Critical → immediate assessment; High → same business day; Medium → next business day; Low → backlog).

**After VAPT starts (deferred deliberately):**
- Detailed R1 backlog planning; CMM scope deep-dive; Opportunity workflow refinements.
- Sequence the Core track vs Pathfinder track.

**Follow-up meeting:**
- **Date:** Tuesday — WD employment-profile-change discussion
- **Purpose:** Land BO prioritisation of lifecycle scenarios; validate the 3 officer-experience hypotheses; confirm common-user-scheme handling
- **Attendees:** Michelle, Imelda, WD representatives, Rama (for sizing readiness)

---

## Context for Future Reference

**Related meeting notes:**

| Note | Relevance |
|------|-----------|
| [28 Aug – OTEP Squad Sync (VAPT / MVP / lifecycle)](2026-08-28-W35-otep-squad-sync-vapt-mvp-lifecycle.md) | Same day, upstream — the squad sync deferred lifecycle prioritisation; this meeting is where it got structured |
| [27 Aug – Compass weekly status digest (Jul–Aug)](2026-08-27-W35-compass-weekly-status-digest-jul-aug.md) | VAPT timeline (kickoff 7 Sep, interim findings ~18 Sep), AI IDSC blocker, Mark HO's queries |
| [27 Aug – Risk register / readiness review (with Jace)](2026-08-27-W35-risk-register-readiness-review.md) | Risk-register ownership split, R1 STIP/Gig/SJR direction, Pow Hwee departure |

**Related analysis:**

| Doc | Relevance |
|-----|-----------|
| [25 Aug – RAID log](../analyses/2026-08-25-W35-raid-log.md) | R11 (Day-2 profile-refresh rules, no owner), R13 ("who decides" pattern), R15 (no consolidated VAPT DoR). This meeting's 4 not-adequately-addressed risks are RAID candidates. |
| [POCDEX P1 test-data source (82 rows)](../analyses/2026-08-26-W35-pocdex-p1-test-data-source.md) | The scenario list being rationalised to ~70% |
| [Employment Lifecycle Scenarios - Day 2](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2597226493) (Confluence) | Officer-facing test-case scoping; this meeting's P1/P2/P3 grouping supersedes the earlier framing there |
| [Prioritised Employment Lifecycle Scenarios](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2603157647) (Confluence) | The 82-case analysis |
| Epic: CC Ops Portal (MVP), Confluence 2555380790 | BO-facing side of Day-2 drift; the Day-2 support model here is the operational counterpart |

**RAID candidates to add from this meeting:**

1. Dependency SLA risk — no response commitments or support agreements for Jumpstart / Products / CSC / HRPS
2. BAU capacity risk — no resource-allocation model across the Sep–Nov workstreams
3. Identity resolution risk — data-model issue underpinning lifecycle scenarios, solution unsocialised
4. Pilot agency validation risk — no formal post-launch validation plan
5. Data classification — not started, launch-gating, Mark HO likely to require it

**Prior decisions confirmed / extended here:**

| Decision | Status here |
|----------|-------------|
| CAM out of MVP → R1 | Formalised |
| Day-2 profile-change handling not a VAPT blocker (weekly digest) | This meeting starts turning it into an owned workstream |
| VAPT kickoff 7 Sep (squad sync) | Daily tracking process confirmed |
| MVP launch 24–25 Nov 2026 / VAPT sign-off ~7 Nov (Adrian Ang, 25 Aug) | The deadline this meeting's Sep–Nov contention risk is measured against |

---

## Appendix: Draft Frameworks for the Day-2 Proposal

*The body above captures the meeting's decisions, risks, and actions. This appendix holds only the concrete first-draft structures from the PM's Priority 3 / Priority 4 notes — the starting point for the Day-2 support-model and SLA proposals Rama / Adrian Lo owe next week. Everything else in the original assessment and personal annex is folded into the sections above; not repeated here.*

**Support tiering (first cut):**

| Tier | Owner |
|------|-------|
| Issue intake | Feedback form · shared mailbox · business escalation |
| L1 | WD / Business team |
| L2 | Compass PM / Product |
| L3 | ThoughtWorks / NCS engineers |

**Dependencies to route around:** POCDEX, Jumpstart, Products, HRPS.

**Severity model (first cut):**

| Severity | Example | Response (SLA discussion-starter) |
|----------|---------|-----------------------------------|
| Critical | Login unavailable | Immediate assessment |
| High | Recommendation engine failing | Same business day |
| Medium | Incorrect profile data | Next business day |
| Low | Cosmetic defect | Backlog |

**R1 track split (for the sequencing exercise):**

| Track | Items |
|-------|-------|
| Core | Employment profile changes · VAPT remediation · risk assessment · performance testing · data-model tech debt · ABLR onboarding · CMM discovery |
| Pathfinder | Opportunity creation · structured applications · bookmarking · additional opportunity types · CAM |

*Source: Overall MVP Timeline Planning (Meeting) — PM's own executive assessment + personal priority annex. Refreshed 2026-08-29 for launch date, SSO status, lifecycle ownership, Day-2 first-cut ownership, and readability structure.*
