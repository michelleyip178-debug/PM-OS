# Meeting Notes: Product x BO Adhoc Sync

**Date:** 24 Jun 2026

**Type:** Product strategy + governance discussion (adhoc)

**Attendees:** Adrian Ang, Jace Tan, Xian Zhang, Jacky, Pow Hwee Tan, Imelda Mo, Rama Moorthy, Michelle Yip (and others)

---

## Summary

What started as a status sync became a strategy and governance discussion across three intertwined topics: (1) MVP scope protection and timeline reality, (2) UAT/VAPT delivery sequencing, and (3) a major unresolved policy question about competency management and CareerCompass's role in the HR ecosystem. The meeting surfaced important risks early but ended without decisions on the hardest questions.

---

## Decisions Made

**Scope and Timeline**
- MVP timeline remains the working baseline. No additions confirmed.
- Profiling/engagement survey tool cannot fit in MVP without pushing launch to November. Out of MVP scope for now.
- November is now the realistic go-live target, not October (VAPT + remediation consumes September/October).

**UAT and QA**
- Staggered UAT: earlier completed modules (Profile, Opportunities) can enter UAT before all sprints finish. Don't wait for Sprint 8 completion.
- Two-stage UAT: early module-level UAT, then a final regression round.
- VAPT and remediation window must be reserved after UAT and code freeze. This is non-negotiable.
- Stricter internal QA before demos adopted: Dev complete → QA → internal demo → external sprint demo. No more rushed demos exposing defects.

**Governance**
- BO can maintain its own policy-decision tracker separately. Not forced into Confluence.
- Compass access requires login. Officers cannot browse before authenticating. Confirmed by Adrian and Jace.

---

## Decisions NOT Made

These are open and blocking downstream planning:

- Should Compass sync competencies back to HR systems? (Not decided)
- What is the future competency SSOT — Compass, HRPS, or Cumulus? (Not decided)
- Should competency-management work precede R1 features? (Not decided)
- Should profiling tool become an R1 item? (Not decided)
- Can self-added competencies become endorsed competencies? (Not decided)
- Should officers' Compass competencies feed workforce planning? (Not decided)
- How do CDGO priorities rank against Compass product priorities? (Not decided)

---

## Action Items

**Michelle (with Imelda)**
- Generate UAT test cases from PRDs using AI — suggested by Adrian. Draft first, then BOs review.

**Xian**
- Confirm with HRP: can officers self-add competencies in HRP?
- Confirm with HRP: can a Reporting Officer endorse self-added competencies?
- Extend invitation to Mars/CDGO for upcoming competency-management discussions.

**Rama Moorthy**
- Refine compressed UAT strategy — explore recovering time from current plan.
- Add go-live approval phase after VAPT to timeline artefact.
- Explore required approvals after VAPT (offline with Jace).
- Prepare Data Office approval request.
- Review approval details with Pow Hwee.
- Convene designers and engineers alignment session (Storybook vs design system).

**Imelda Mo**
- Add go-live approval phase after VAPT to timeline artefact.

**Product Team**
- Continue competency-management discovery. Size the effort.
- Develop option trade-offs for leadership before SteerCo.
- Continue roadmap assessment and prioritisation exercise.
- Engage integration stakeholders on MVP timelines earlier.
- Plan OTG data extraction and clean-up timelines.

**BO/WD Leadership (offline)**
- Discuss competency-management strategy with Mark, Gek Khiang, and potentially Mars/CDGO.
- Bring competency-management trade-offs into upcoming senior product/BO discussions and SteerCo prep.

---

## The Strategic Fork — What This Meeting Was Really About

The meeting spent roughly half its energy on symptoms of one unresolved question:

**What role is Compass intended to play in the competency ecosystem?**

Two paths are on the table, and the group didn't name them explicitly:

**Path A — Compass as career development platform**
- Officer-owned profile
- Self-declared competencies (not authoritative)
- Discovery and learning focus
- HR systems remain the authoritative record
- Simpler, faster to build, lower scope
- Trade-off: no SSOT, workforce-planning datasets diverge

**Path B — Compass as competency source-of-truth**
- Agency and officer competency management in Compass
- Synchronisation back to HRPS/Cumulus required
- Workforce-planning relevance
- Governance model required
- Trade-off: significantly larger build, more dependencies, delays R1 features

This decision has not been escalated explicitly to leadership. Until it is, every downstream design for Epic E (Competency Management v1) is unstable.

**Direct connection to R1:** Epic E's scope boundary question (read-only sync vs write-back) is a downstream symptom of this fork. Write-back = Path B. Read-only = Path A. The R1 brief should not commit to write-back until Path A vs B is decided at leadership level.

---

## Key Risks

**RED — VAPT threatens October go-live**
VAPT + remediation may consume all of September and October. November launch is more realistic. This is now the working assumption but hasn't been communicated upstream formally.

**RED — No single launch-readiness owner**
UAT, VAPT, data, agency onboarding, communications, production validation, and approvals are all in flight but no one is accountable across all streams. Coordination risk is high as September approaches.

**RED — Competency SSOT undefined**
Without a decision on Path A vs B, every Epic E design becomes provisional. The R1 epic brief currently lists this as a scope boundary question — it's actually a policy and governance question that needs leadership resolution first.

**AMBER — Testing ownership unclear**
Who writes UAT scenarios, defines end-to-end journeys, prepares test data, and coordinates integration testing has no clear RACI. Action items exist (generate test cases from PRDs) but ownership remains fuzzy.

**AMBER — Data readiness behind technical workstream**
Production data requirements, masked data needs, Data Office approvals, and integration partner timelines are all behind the development schedule. Pow Hwee flagged this repeatedly.

**AMBER — User trust risk from competency mismatch**
Compass may surface a 90% competency match to officers, but hiring managers may only trust endorsed competencies from HR systems. If the two diverge, officer expectations rise while hiring behaviour doesn't change. Credibility gap.

**AMBER — Design inconsistency persists**
Storybook vs design system differences, designer/engineer implementation gaps, and cross-squad inconsistencies were flagged again. No root-cause fix identified. Risk is systemic.

---

## Open Questions

- [ ] Can officers self-add competencies in HRP? — Xian to confirm with HRP
- [ ] Can RO endorse self-added competencies? — Xian to confirm with HRP
- [ ] What is CDGO's actual priority sequence? — Mars/CDGO to be invited to next discussion
- [ ] What is the exact VAPT duration and who owns the remediation clock? — Rama + Jace offline
- [ ] Who is the end-to-end launch readiness owner? — Unassigned, needs to be named
- [ ] What are the exit criteria for production verification? — Undefined; soft launch vs beta vs golden transaction conflated

---

## What Michelle Should Escalate

1. **Path A vs B must be decided before Epic E is groomed.** The R1 epic brief currently treats this as a scope boundary question (read-only vs write-back). It's actually a policy question that sits above product. Flag to Jace/Adrian that Epic E cannot be sized until leadership picks a path.

2. **November go-live should be the planning assumption, not October.** This meeting effectively confirmed it. The risk log and sprint plan should reflect November, not October, so teams aren't building against an impossible date.

3. **Launch-readiness ownership gap.** Nobody owns end-to-end launch readiness across UAT + VAPT + data + agency onboarding + approvals. This is a programme governance gap, not a product gap — but product will feel it first.

---

## Connections to Existing Docs

- Epic E (Competency Management v1) scope boundary question: [r1-epic-brief-confluence](../decisions/2026-06-23-r1-epic-brief-confluence.md) — Path A vs B must be resolved before Epic E is groomed
- MVP go-live timeline: November now more realistic than October — update risks.md
- UAT test case generation (Michelle + Imelda): feeds into sprint planning for Sprint 5+
- Profiling tool out of MVP: consistent with existing scope discipline (decisions log)

---

*Saved: 2026-06-24 | Source: AI-generated executive summary from Product x BO adhoc sync*
