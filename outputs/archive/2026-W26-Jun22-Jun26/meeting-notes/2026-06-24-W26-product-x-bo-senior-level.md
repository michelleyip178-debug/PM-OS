---
date: 2026-06-24
meeting: Product x BO — Senior Level Working Session
type: Strategy pressure-test
attendees: Michelle YIP, Adrian ANG, Xian Zhang + OTEP/BO team (senior level)
source: Meeting transcript + chat synthesis
---

# Meeting Notes: Product x BO — Senior Level

**Date:** Tuesday, 24 June 2026

**Type:** Strategy working session — pressure-test of OTEP/Compass approach

**Attendees:** Michelle YIP, Adrian ANG, Xian Zhang, OTEP team + BO senior stakeholders

---

## Summary

A working session to pressure-test the CareerCompass strategy across five areas: North Star metric, success targets, rollout approach, competency management model, and OTG transition plan. The discussion moved productively beyond features into business outcomes, governance, and data architecture.

The most important outcome was not a feature decision. The session exposed a foundational strategic question that has not yet been answered: **Is Compass a career-development experience layer sitting on top of HR systems, or will it eventually become the authoritative source of truth for competency data?** Every unresolved debate in the meeting traces back to that single decision.

---

## Decisions Made

**1. North Star direction: shift to completion metrics**
The team agreed to measure completed development actions rather than application activity. Completion represents actual competency growth and is a stronger business impact narrative, especially for SteerCo.
- Status: Directionally agreed. Target validation still required before committing publicly.

**2. Working assumptions for adoption targets**
- 20% initial onboarding/adoption target (anchored to OTG baseline of ~14% login rate)
- 30% completion rate for development actions
- 40% upper-bound assumption tied to onboarding model
- Status: Working assumptions, not final approved numbers. Baseline data needed to confirm.

**3. R1 competency data sourcing: API over spreadsheet**
Competencies for R1 will be pulled through UHDP/API mechanisms rather than relying on spreadsheet-based extraction. This begins reducing dependency on Excel-based competency management.
- Status: Decided.

**4. R2 competency roadmap: proficiency and endorsement in scope for discussion**
Endorsement and proficiency-level management are confirmed as future R2 capability areas. Discussion with WD stakeholders and HRPS required before scoping.
- Status: Confirmed as next planning conversation, not yet scoped.

**5. Competency governance = policy decision, not just product decision**
The team explicitly acknowledged that future-state competency management cannot be resolved through product design alone. It requires a policy decision on ownership, authority, and governance.
- Status: Escalation agreed. No owner assigned yet.

**6. Opportunity category taxonomy: WOG 23 Job Families as canonical layer (Pow Hwee)**
Pow Hwee proposed the following architecture for opportunity categorisation, consistent with the 16 Jun decision log:
- Canonical taxonomy = WOG's 23 Job Families (already decided, per Jun 16 log)
- OTG's 21 values map into the 23 via a translation dictionary at ingestion
- C@G's values map into the 23 via the same dictionary at ingestion
- Unmapped values fall back to "Others" with a warning log (per Jun 16 decision)
- Frontend filter shows the 23 WOG categories — source-agnostic

This approach resolves the three-taxonomy problem (OTG's 21, C@G's 35, CompBank's ~400) by treating the WOG 23 as the stable presentation layer and handling translation at ingestion. Frontend and filter experience become source-agnostic.
- Status: Proposed by Pow Hwee. Confirm whether this is decided or pending approval.

---

## Action Items

| Task | Owner | Due Date | Priority |
|------|-------|----------|----------|
| Validate learning completion baseline using learning/CSE data (not OTG data) | WD / Xian Zhang | TBD | High — blocks North Star target confirmation |
| Determine current completion rate benchmark before confirming targets | Team | Before SteerCo | High |
| Bring competency visibility/hiding concerns to Mark, Jacky, and WD | Xian Zhang | TBD | High — needed before any competency model decisions |
| Clarify whether officer-added competencies can sync back to HR systems | OTEP team | TBD | High — major architecture dependency |
| Discuss endorsement/proficiency model with WD stakeholders | OTEP team + WD | Before R2 scoping | Medium |
| Review OTG-to-Compass migration strategy — dual posting, EDM links, application routing | Team | TBD | Medium |
| Conduct officer discovery before deciding competency ownership model | Team | Before R2 | Medium — explicitly flagged as pre-condition for one-way-door decision |

**Note:** Most action items above lack due dates — these should be scheduled within 48 hours to avoid drift.

---

## Open Questions

- [ ] What is today's baseline learning completion rate? Who owns pulling this? — @WD/Xian Zhang
- [ ] What is the addressable population for the completion metric? — @Team
- [ ] Is Compass a profile/experience layer or a competency system of record? — @Adrian / Policy decision
- [ ] Can officer-added competencies in Compass sync into HRPS? What are the architecture constraints? — @Pow Hwee
- [ ] Which system is authoritative if competency data differs between Compass and HR system? — Unowned
- [ ] Should opportunities be posted in OTG, Compass, or both during transition? — @Team
- [ ] Can agencies migrate earlier than the full cutover date? — @Team

---

## Key Insights

**Healthy challenge emerged on North Star:**
The team didn't accept the initial framing. They pushed from activity metrics (apply) to outcome metrics (complete). Adrian led this. Stronger SteerCo narrative as a result — but it now depends on having baseline completion data to anchor against. Existing learning/CSE data should be used to validate targets before anything goes to SteerCo.

**Future operating model starting to crystallise:**
For the first time, a coherent direction emerged for how development and performance management could be separated:
- Compass becomes the development system (IDP, competency management, development conversations)
- HR system becomes a read-only consumer of competency data
- Performance appraisal stays in HR systems

This is not yet a decision, but it's the first time this architecture was articulated clearly in a session.

**Competing competency models still in conflict:**
Two mutually exclusive positions surfaced and were not resolved:

- **Position A (LinkedIn model):** Officers manage their own competencies. They add, hide, and personalise their profile. Compass is a career tool, not a governance system.
- **Position B (System of record):** Competencies sync into HR systems. Endorsement matters for workforce planning and succession. The organisation depends on Compass data being authoritative.

These cannot coexist without an explicit governance decision. The team surfaced the conflict; no one resolved it.

**User trust risk explicitly named:**
The team recognised that officers will become confused and lose trust if:
- Competencies exist in Compass but not in HR systems
- Officers can edit one profile but not the other
- Managers see different competency records across systems
- Opportunities are fragmented across OTG and Compass

This is a healthy recognition of the downstream adoption risk.

---

## Risks

**1. North Star targets could become non-credible**
The team is discussing percentages (20%, 30%, 40%) before confirming the baseline completion rate or defining the addressable population. Risk: publicly committing to numbers that later cannot be defended.
- Mitigation: baseline-first approach agreed in principle — needs to be executed before SteerCo.

**2. Compass value proposition weakens during transition**
If opportunities are fragmented across OTG and Compass, officers have no reason to return to Compass. Login targets become harder to hit. The session recognised this repeatedly but did not resolve the posting/application routing model.

**3. Dual-system operation creates operational burden**
Risks discussed: double posting, duplicate EDMs, split application paths, different user populations on OTG vs Compass. No clean mitigation exists yet.

**4. Competency data trust could collapse**
If officers edit competencies in Compass while HR systems show something different, officers won't know which record is authoritative. Downstream effects: internal mobility, succession planning, endorsement, manager conversations.

**5. Source-of-truth architecture unresolved — everything else depends on it**
The biggest unresolved question: Is Compass a layer or a system of record? Until this is decided, discussions on hiding competencies, self-added competencies, endorsement, HRPS sync, and OTG transition will keep generating contradictions.

---

## Framing for Adrian / SteerCo

The session is worth summarising for Adrian as:

> "We ran a productive pressure-test on the OTEP/Compass strategy. The metrics direction is stronger — we're moving from activity to completion, which is a better business narrative. But we've identified a foundational strategic decision that needs policy and product alignment before we can finalise the competency management model and transition strategy: **Is Compass a career experience layer or the authoritative competency system of record?** Every other unresolved design question is downstream of this one."

Key open decision to put to SteerCo if needed:
> "We need policy and product alignment on the future source of truth for competency data before finalising competency management design and OTG transition strategy."

---

## Timeline Risks

- **TIMELINE RISK:** North Star adoption and completion targets are being discussed without confirmed baseline data. If baseline data changes the assumed starting point materially, targets set now may need to be walked back at SteerCo. Confirm baselines before any public commitment.

- **TIMELINE RISK:** OTG-to-Compass migration strategy (posting, application routing, EDM links) is unresolved. This may affect agency onboarding timelines flagged in the 23 Jun squad sync as already at risk (realistic go-live: November, not October). Dual-system complexity could further delay clean agency transitions.

---

## Context for Future Reference

- OTEP's competency SSOT dependency is open-item #18 in the R1 brief. This session made clear it's not just an engineering dependency — it's a governance and policy decision.
- This session connects directly to the R1 feature brief (23 Jun) which flagged competency SSOT as the prerequisite for smart matching (Epic E) and profile nudges (Feature 3).
- Officer discovery is explicitly recommended before making a one-way-door competency ownership decision. This aligns with CareerCompass interview work already underway (ref: Max interview script, 18 Jun).
