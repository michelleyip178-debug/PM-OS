# Meeting Notes: Brownbag - Discover the Suite of Development Opportunities (STIPs and Gigs)

**Date:** 2026-07-29 (transcript basis; processed 2026-07-30)

**Attendees:** Not specified in transcript (presenters + participant Q&A)

**Meeting Type:** Discovery brownbag / research session

**Format:** Preliminary discovery insights (transcript-only, single dataset)

---

## Summary

Brownbag covering how officers discover and apply for development opportunities (STIPs, Gigs) through OTG and adjacent channels. Core finding: discovery and application are fragmented across OTG, the Development Opportunities page, EDMs, and FormSG, and there's no single source of truth. Participants repeatedly asked which channel is authoritative, which points to a real and current pain point rather than a one-off complaint. Outcome visibility (appraisal impact, feedback) and process ownership (who pays, who approves) also came up as open, unresolved questions in the room.

This is a **single-dataset synthesis**. The comprehensive cross-reference analysis (validation matrix, affinity themes, prioritization) is pending a second data source.

---

## Decisions Made

None. This was a discovery/informational session, not a decision-making meeting.

---

## Key Insights & Quotes

**User Goals by Stakeholder Group:**
- **Officers:** discover relevant opportunities, understand skill/competency gain, know eligibility, get recognition (appraisal/ADP), find opportunities matching career growth
- **Host Agencies:** advertise efficiently, attract suitable applicants, minimize admin effort while keeping visibility
- **HR Teams:** track participation, understand demand patterns, get reporting data, manage consistency across agencies

**Pain Points (ranked by how explicitly they surfaced in the room):**
1. **Discovery fragmentation** — OTG, Development Opportunities page, EDMs, and FormSG all in use simultaneously. Participants explicitly asked which source has the most complete listing. This is the strongest signal in the transcript: a direct, repeated question from users, not an inferred pain point.
2. **Application fragmentation** — OTG surfaces the opportunity, but FormSG handles the actual application because OTG's native application flow isn't customizable enough. Two-system handoff.
3. **No notifications** — officers aren't proactively alerted to new postings; EDMs are the workaround, which is manual and easy to miss.
4. **Unclear process ownership** — who pays, who approves (PSD?), how feedback flows back to parent agencies, whether opportunities can be extended. These are governance questions, not UX questions — worth flagging as a separate workstream from any Discovery Hub feature work.
5. **Outcome visibility** — officers can't easily see appraisal impact or host feedback after completing something.

**Behavioral Patterns:**
- Officers want risk-reduction info before applying: expectations, deliverables, time commitment, competencies required, selection criteria. Presenters said better descriptions directly correlate with more applicant interest.
- Manager/supervisor support is a strong lever on participation and completion — officers disengage without it.
- Competency tagging is becoming the primary decision lens over job grade, consistent with a shift toward skills-based evaluation.

---

## Jobs-to-Be-Done (from transcript)

**Job 1 — Discover Opportunities**
When I want to grow professionally, I want to find relevant developmental opportunities quickly, so I can develop skills aligned to my career goals.
Frictions: multiple channels, incomplete onboarding across agencies, no proactive alerts.

**Job 2 — Evaluate Opportunity Fit**
When I find an opportunity, I want to understand expectations, skills, duration and workload, so I can decide whether to apply.
Frictions: variable opportunity descriptions, inconsistent competency signaling.

**Job 3 — Run Opportunities as a Host Agency**
When I need help on a project or want to offer development opportunities, I want to post once and manage applicants efficiently, so I can attract suitable participants with minimal admin work.
Frictions: multiple systems, manual publicity, separate registration workflows.

**Job 4 — Demonstrate Development Outcomes**
When officers complete opportunities, I want to capture learning, feedback and competency growth, so participation translates into career development and appraisal discussions.
Frictions: feedback collection is disconnected, outcomes aren't visible.

---

## Pain / Gain Map

| Pain | Desired Gain |
|---|---|
| Multiple discovery channels | Single source of truth |
| OTG + FormSG duplication | End-to-end application workflow |
| No opportunity alerts | Personalized recommendations |
| Unclear competency fit | Skill-based matching |
| Limited feedback visibility | Development tracking and evidence |
| Manual administration | Simplified host-agency workflow |

---

## Feature Opportunity Ideas (from transcript, unvalidated against second dataset)

1. **Unified Opportunity Discovery Hub** — consolidate OTG, FormSG, STIPs, and Gigs into one view with status/availability. Directly answers the "which source is complete" question participants asked live.
2. **Competency-Based Matching Engine** — recommend based on current competencies, target competencies, career aspirations. Leans on competency tagging that's already required upstream.
3. **One-Click Apply Experience** — bring custom fields into OTG natively, removing the FormSG handoff.
4. **Development Outcome Tracker** — track completed opportunities, host feedback, competencies developed, ADP evidence.
5. **Opportunity Alerts and Subscription Service** — notify officers when new matching opportunities or STIPs/Gigs are published.

**Caveat:** these ideas are transcript-derived only. None have been checked against `context-library/research/otg-ingestion-brief.md` or the OTG ingestion logic doc for feasibility (e.g., the Discovery Hub idea would need to reconcile with how opportunity types are already being classified in the OTG → CareerCompass pipeline — see `context-library/research/otg-ingestion-logic.md`).

---

## Open Questions

- [ ] Which channel (OTG, Development Opportunities page, EDMs, FormSG) is meant to be authoritative today, if any? - **Owner:** TBD - **By:** TBD
- [ ] Who owns end-to-end process governance (payment, PSD approval, extension rules, feedback loop to parent agencies)? - **Owner:** TBD - **By:** TBD
- [ ] Do host agencies get performance feedback on participants, and if so, through what channel? - **Owner:** TBD - **By:** TBD
- [ ] What's the second research dataset needed to complete the validation matrix and prioritization? - **Owner:** Michelle - **By:** TBD

---

## Next Steps

**Immediate:**
- Provide the second research/data sample so the full cross-reference synthesis (validation vs. contradiction matrix, affinity themes, evidence-backed prioritization) can run.
- Decide whether "Unified Discovery Hub" and "One-Click Apply" ideas should be checked against known OTG ingestion constraints before scoping (see `context-library/research/otg-ingestion-logic.md` open questions on opportunity type classification).

**Follow-up:**
- Once second dataset is in, re-run synthesis for JTBD validation and feature prioritization.

---

## Context for Future Reference

This session's fragmentation findings (OTG/FormSG split, no notifications) sit upstream of the technical OTG ingestion pipeline already documented in `context-library/research/otg-ingestion-logic.md`. Any feature work on unifying discovery or application flow should account for how `opportunity_type` classification and ringfencing already work in that pipeline, since a Discovery Hub feature would inherit those same data quality open questions (e.g., unclear precedence rules for overlapping prefixes).

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original transcript summary</summary>

[Original transcript content as provided — User Goals, Pain Points, Behavioral Patterns, JTBD Framework, Pain/Gain Map, Feature Opportunity Ideas — preserved as submitted]

</details>
