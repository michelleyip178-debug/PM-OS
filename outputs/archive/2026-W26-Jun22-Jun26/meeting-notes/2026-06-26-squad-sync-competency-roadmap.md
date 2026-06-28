---
date: 2026-06-26
attendees: Michelle Yip, Barry Lim, Victor Ong, Jace Tan, Imelda Mo, Ram Moorthy (+ others)
type: Squad Sync
topic: CareerCompass competency roadmap + learning design + taxonomy SSOT
---

# Meeting Notes: Squad Sync — Competency Roadmap & Taxonomy

**Date:** 26 June 2026

**Attendees:** Michelle, Barry Lim, Victor Ong, Jace Tan, Imelda Mo, Ram Moorthy + others

**Type:** Squad Sync — roadmap + design review

---

## Summary

The team is converging on a longer-term CareerCompass vision centred on Competency Management → AI Competency Inference → Role Management as a sequenced roadmap. The most important outcome was not the roadmap discussion itself but the surfacing of a foundational problem: the team has not agreed on a canonical source of truth for job family, job function, domain, or competency taxonomy. Until that is resolved, all downstream AI, filtering, and recommendation work carries high risk of producing inconsistent results that erode officer trust.

---

## Tentative Directions (Not Formally Approved)

All of these are discussion outcomes. None are confirmed decisions yet.

| Topic | Agreed Direction | Status |
|---|---|---|
| Competency Management | Favoured as first post-MVP candidate | Tentative |
| Competency Cleanup | Leverage ongoing Cumulus cleanup effort | Tentative |
| Competency SSOT | CareerCompass proposed as SSOT | Proposed only — not validated with HR systems |
| Role Management | Seen as important, sequencing TBD | Under discussion |
| Competency Inference Engine (AI) | Expected future integration, needs reassessment | Tentative |
| Learning Design | No final decision between Option 1 and Option 2 | Open |
| Domain Filter | Further investigation needed before commitment | Blocked |

---

## Action Items

| Task | Owner | Due | Priority |
|---|---|---|---|
| Verify 538 job family/function numbers from datasets | Ram Moorthy | TBD | 🔴 High — number looks questionable |
| Export data and share with team | Ram Moorthy | TBD | 🔴 High |
| Review AI-generated extraction for errors | Ram Moorthy | TBD | 🟡 Medium |
| Chase CSC on Domain field definition (what it means, which taxonomy it uses) | Imelda Mo | TBD | 🔴 High — blocks learning filter design |
| Share Domain findings with team | Imelda Mo | After CSC response | 🟡 Medium |
| Bring learning design options (Option 1 vs 2) to BOs | Imelda Mo | TBD | 🟡 Medium |
| Clarify canonical SSOT for job family and job function | Team (Michelle to drive?) | Before next Design Review | 🔴 High — blocks all downstream work |
| Align filters across opportunities, learning, and development | Team | TBD | 🔴 High |
| Revisit competency-role management roadmap sequencing | Team | TBD | 🟡 Medium |
| Internal review with Adrian before Design Review | Team | Before Design Review | 🔴 High |

**Note on due dates:** No specific dates were set in this meeting. Michelle to follow up with owners to set deadlines — especially Ram (538 data export) and Imelda (CSC Domain chase), as both unblock downstream decisions.

---

## Key Risks Surfaced

### Risk 1 — Building on inconsistent taxonomy (highest priority)

The team is designing recommendations, AI matching, filters, and development planning without having agreed on what the canonical job family, job function, domain, or competency source is.

Different datasets are already using different definitions. If this isn't resolved first, officers will see Finance opportunities, Finance courses, and Finance competencies that are actually derived from different classification systems — immediately reducing trust.

**Michelle's challenge in the meeting:** "What is the base for all the filters that we are using?" — this was not resolved.

### Risk 2 — SSOT assumption not validated with HR system owners

The roadmap is trending toward CareerCompass as SSOT for competencies and roles. But Jace explicitly questioned whether Cumulus, HRPS, and policy would support a model where competency/role creation no longer happens inside HR systems. No confirmation from those stakeholders yet. Building toward this without that sign-off is a major adoption risk.

### Risk 3 — AI before data maturity

Victor Ong proposed AI as a mechanism to help organise and harmonise taxonomy. But the source data isn't agreed yet. AI risks becoming a workaround for a governance problem rather than solving it.

### Risk 4 — Learning Domain field ambiguity

The learning filter depends on a "Domain" field. Nobody in the meeting could confidently explain what Domain means, whether it equals Functional Area, or whether future providers will supply the same field. Imelda acknowledged this. Building the filter without resolving this risks a redesign when additional providers come on board.

---

## What Went Well

- Healthy challenge from Barry, Victor, Jace, Michelle — assumptions were not accepted at face value
- Discussion moved beyond screens into governance, ownership, data architecture, and UX consistency — the right level for this stage
- Team is converging on a sequenced vision (Competency Management → AI → Role Management)

---

## Open Questions

- [ ] What is the canonical source for job family? OTG uses HR Resources list — is that authoritative? — **Owner:** Ram Moorthy (data export) + BOs to confirm
- [ ] What is the canonical source for job function? Are some "job families" actually agency labels? — **Owner:** Team / BOs
- [ ] What does "Domain" mean in the learning context? Does CSC use the HR Resources taxonomy? — **Owner:** Imelda Mo (chasing CSC)
- [ ] Will future learning providers supply the same Domain field? — **Owner:** Imelda Mo
- [ ] Does the 538 number hold up? Where does it come from? — **Owner:** Ram Moorthy
- [ ] Will Cumulus and HRPS agree to CareerCompass as SSOT? Who needs to be in that conversation? — **Owner:** TBD — likely Jace + BOs
- [ ] What policy or governance changes are required for competency creation to shift to CareerCompass? — **Owner:** TBD
- [ ] Learning design: Option 1 or Option 2? What are the trade-offs for BOs? — **Owner:** Imelda Mo to bring to BOs

---

## Michelle's PM Read

The most valuable thing that came out of this meeting was not the roadmap progress — it was the discovery that the team doesn't yet have an agreed data foundation. The key question is: **which system is authoritative for each classification dimension?** Until that is answered, the right call is to slow down on roadmap sequencing and force the SSOT conversation with WD, BOS, Cumulus, and HR system owners.

The risk of not doing this: building AI inference, recommendations, and filters on top of inconsistent labels, then having to redesign when officers notice the inconsistency.

**Suggested next move:** Before the next Design Review, Michelle should push for a dedicated session to lock the canonical sources — not a general roadmap discussion, but a focused decision on job family / job function / domain / competency SSOT with the right data owners in the room.

---

## Context for Future Reference

- **Victor Ong** proposed AI as taxonomy harmonisation tool — watch for this framing; it may resurface as justification for moving fast before data is clean
- **Jace** is the right escalation point for the SSOT governance question (she reports to Adrian; this needs senior buy-in)
- **Barry Lim** was present and challenged assumptions — useful signal that resourcing/capacity stakeholders are paying attention to roadmap scope
- **Ram Moorthy** owns the data exports — the 538 number needs verification before it's used in any BO-facing deck
- **Imelda** owns learning features and acknowledged the Domain ambiguity — coordinate with her before the learning filter goes into grooming

---

*Saved: 2026-06-26*
*Next: Follow up with Ram (data export) and Imelda (CSC Domain) to set due dates. Push for SSOT session before next Design Review.*
