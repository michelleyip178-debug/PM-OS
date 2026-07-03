---
date: 2026-07-03
meeting: OTEP Clarification with ESG
type: Stakeholder discovery / pilot-agency alignment session
attendees: [Xian Zhang Guo (ESG), Jeremy Toh (ESG), Soo Chin Seet (ESG), Adrian Ang (PSD, left early)]
---

# Meeting Notes: OTEP Clarification with ESG (3 Jul 2026)

## Summary

Framed as an "OTEP clarification" session but functioned as a discovery/alignment meeting with ESG as a candidate pilot agency. The real finding: Career Compass assumes competency data lives in HR systems, but ESG's competencies live outside Cumulus/Workday entirely (FormSG, dashboards, data warehouse, internal career-planning processes). This reframes ESG onboarding from "enable agency access" to "build competency foundations first" — a materially bigger lift than originally assumed. ESG is a genuinely strong pilot candidate (mature internal career-development processes, sophisticated requirements) but MVP value for them specifically may be weak without competency data solved first.

**⚠️ Possible name collision:** "Xian Zhang Guo" (ESG, this meeting) is likely a different person from "Xian Zhang" already in stakeholder-profiles.md (OTEP Business Stakeholder / Decision-maker, seen at Weekly Design Review). Confirm before merging any notes — treat as distinct people until verified.

---

## Decisions Made

1. **Career Compass MVP onboarding target remains ~October 2026 rollout**
   - **Why:** Communicated as the current plan, not re-negotiated in this meeting.
   - **Impact:** This matches the existing confirmed **Go-Live: Fri 16 Oct 2026** (open item #13). Worth confirming ESG understands this is MVP-cohort timing, not the same as R1 (targeted Jan 2027) — the roadmap walkthrough in this meeting covered both, and mixing the two timelines could create confusion for ESG's internal planning.

2. **Competencies can exist in two forms — HR-assigned and officer self-added — both feeding recommendations**
   - **Why:** Accommodates the reality that ESG's competency data isn't HR-system-native.
   - **Impact:** This is a meaningful scope acknowledgment but doesn't resolve *how* ESG's existing non-HR competency data (FormSG, dashboards, warehouse) gets into either bucket — that's the real open question (see Risks).

3. **PSD will explore bringing goal-setting capabilities earlier than planned — not yet approved**
   - **Why:** Responds to ESG's mature internal career-conversation processes; goal-setting was originally Release 3.
   - **Impact:** Adds to Risk 4 (timeline compression) below — this is a new ask on top of existing fixed delivery commitments (OTG migration, R1 epics already in progress).

4. **PSD will explore competency management (CMM) to support bulk competency tagging — not yet approved**
   - **Why:** Directly addresses ESG's "we don't have competencies in Cumulus" gap.
   - **Impact:** **This directly connects to the CMM scope-pressure thread already tracked as open item #50** — CMM has now been requested/discussed in 4+ separate conversations (BO Working Level 29 Jun, Squad Sync 30 Jun, Compass Tech Alignment/Product x BO 2 Jul, Squad Sync 3 Jul this morning) with no leadership trade-off decision. This ESG conversation is effectively a 5th surfacing, from an external-agency angle this time, adding real user-need weight to the case for CMM — but still without a decision.

5. **ESG and PSD will continue competency-modelling discussions before broader onboarding decisions**
   - **Why:** Neither side has enough clarity yet to commit to an onboarding plan.
   - **Impact:** This is the de facto "we didn't resolve this today" outcome — a real next step, but not a decision that unblocks anything yet.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Discuss with Adrian Ang whether ESG's existing competency data can improve MVP experience | Xian Zhang Guo (ESG) | Not specified | 🔴 High | Not Started |
| Follow up on how Career Compass applications interact with Workday/mobility workflows, revert to ESG | Xian Zhang Guo (ESG) | Not specified | 🔴 High | Not Started — **blocked by Adrian leaving early, see Blockers** |
| Coordinate follow-up session on competency usage, policy intent, and Career Compass requirements | Xian Zhang Guo (ESG) | Not specified | 🔴 High | Not Started |
| Send PSD a list of competency-related questions to be addressed | Jeremy Toh & Soo Chin Seet (ESG) | Not specified | Medium | Not Started |
| Assess whether CMM can be accelerated to support ESG onboarding | PSD Team | Not specified | 🔴 High | Not Started — **same ask as open item #50** |
| Clarify MVP onboarding requirements, agency prep, and readiness milestones | PSD Team | Not specified | 🔴 High | Not Started |
| Explore whether HRL Chemist experts can engage ESG on JD quality and competency inference | PSD Team | Not specified | Medium | Not Started |
| Consider sample JDs and competency-tagged examples for PSD's data-scientist model training | ESG Team | Not specified | Medium | Not Started |
| Internally assess comms/change-management implications of competency tagging in Workday/Cumulus | ESG Team | Not specified | Medium | Not Started |

**Notes:**
- No due dates anywhere in this action list — recommend Michelle push for at least the "onboarding requirements clarification" and "CMM acceleration assessment" items to get real dates, since both directly feed the already-escalation-worthy CMM decision (#50).
- "PSD Team" appears as owner on 3 separate items with no named individual — same ownership-diffusion pattern flagged in other recent meetings this week (Product x BO Senior Level, Sprint 6 Grooming). Recommend naming owners before this becomes a 4th instance of untracked "team" work.

---

## Key Insights & Quotes

**Strategic/Business Context:**
- ESG's competencies are managed through FormSG processes, dashboards, a data warehouse, and internal career-planning mechanisms — not Cumulus/Workday. This is the single most important discovery in the meeting: it reframes ESG onboarding from an access problem to a data-foundation problem.
- ESG operates a "relatively mature internal career development ecosystem" already — competency endorsement workflows, leader-driven career conversations, talent review timelines, internal dashboards. This makes ESG a strong design partner, but also means their bar for what a "good" Career Compass experience looks like is already set high internally.
- PSD's competency model assumes JD-driven inference and broad platform-based mapping; ESG's model is highly curated, domain-specific, and leader-interpreted. **This may be a philosophical difference in how competencies should work, not just a data-migration gap** — worth treating as a real open strategic question, not an implementation detail.

**Technical Constraints:**
- Application workflow (Career Compass ↔ Workday internal mobility ↔ ServiceNow ↔ movement policy) remains completely unresolved. When ESG asked how this works, the conversation ended because **Adrian had already left the meeting** — this is a real gap, not deprioritized: applying to opportunities is a core platform capability.

---

## Open Questions

- [ ] Can ESG's existing (non-HR-system) competency data be incorporated to improve the MVP experience for ESG specifically? — **Owner:** Xian Zhang Guo → Adrian Ang — **By:** Not stated
- [ ] How do Career Compass applications interact with Workday internal mobility, ServiceNow, and movement policy processes? — **Owner:** Xian Zhang Guo (PSD side unclear since Adrian left) — **By:** Not stated — **this is a blocker, see below**
- [ ] What exactly does ESG need to prepare, and by when? (JD prep, competency tagging, Workday changes, comms plan, agency readiness) — **Owner:** PSD Team — **By:** Not stated — no onboarding checklist exists yet despite ESG asking multiple times
- [ ] Can CMM (or a lighter-weight version) be accelerated specifically to unblock ESG-style pilot agencies? — **Owner:** PSD Team — **By:** Not stated — **directly the same question open item #50 has been asking leadership since 29 Jun**
- [ ] Are ESG's and PSD's competency philosophies (curated/leader-driven vs. JD-inferred/platform-mapped) reconcilable, or does Career Compass need to support both models? — **Owner:** Not assigned — **By:** Not stated — this is a strategic question, not an engineering one

---

## Blockers

1. **Application-workflow question left unanswered because Adrian Ang left the meeting before it was addressed**
   - **Blocked by:** Adrian's early departure — no substitute answered on PSD's behalf.
   - **Impact:** ESG has no answer on how Career Compass applications connect to Workday mobility/ServiceNow/movement policy — a core capability question for a pilot agency trying to plan its rollout.
   - **Resolution:** Xian Zhang Guo's action item to "follow up... then revert to ESG" is the only path forward — recommend Michelle confirm this gets a real owner and date rather than sitting in the same "PSD Team, not specified" bucket as other items here.

---

## Risks

### Not Fully Addressed

1. **ESG onboarding may succeed technically but fail on user adoption — Severity: High.** Discussion focused on technical onboarding; little attention to officer perception, adoption metrics, or trust. If officers see empty competency profiles at launch, they may conclude the product is immature — even though the root cause is missing data, not product quality.

2. **Competency philosophies may be fundamentally different, not just technically different — Severity: High.** ESG's curated, leader-driven model vs. PSD's JD-inferred, platform-mapped model may represent genuinely different talent philosophies. Worth escalating as a strategic question rather than assuming it resolves through data migration alone.

3. **Change management is underdeveloped relative to product planning — Severity: Medium-High.** ESG repeatedly raised roadshows, officer comms, and leader readiness; PSD's side of the discussion stayed mostly functional/technical. Risk: implementation planning starts too late relative to ESG's own change-management needs.

4. **Timeline compression — Severity: High.** Goal-setting acceleration, CMM buildout, ESG onboarding support, and existing OTG migration commitments are all being asked for simultaneously while delivery capacity stays fixed. Adrian explicitly flagged prioritization risk before leaving. **This is the same structural risk as open item #50** — every new stakeholder conversation adds pressure without anyone making the actual trade-off call.

5. **Data-quality assumptions may not hold — Severity: High.** The model assumes JDs exist, are high-quality, and can be accurately inferred from — but ESG itself questioned JD quality and suitability in this same meeting. Worth flagging that the primary intended pilot agency is already skeptical of a core input assumption.

### Being Addressed

- **Roadmap transparency** — PSD openly walked ESG through MVP/R1/R2/R3 scope, which appears to have built trust and given ESG a realistic view of what exists vs. doesn't yet.
- **Requirements capture** — ESG's mature internal processes (endorsement, leader conversations, dashboards) are being captured as legitimate product input, not just operational feedback.

---

## Timeline Risks

- **TIMELINE RISK:** ESG's "October rollout" reference matches the confirmed **Go-Live: 16 Oct 2026** (open item #13). But this meeting also walked through R1 scope (opportunity application, OTG migration — targeted **Jan 2027** per the R1 XFN Kickoff PRD). If ESG's internal planning conflates MVP-launch timing with R1 features, expectations may misalign. Recommend explicitly clarifying with ESG which capabilities land at each date.
- **TIMELINE RISK:** This meeting adds at least 3 new asks (CMM acceleration, goal-setting pull-forward, ESG-specific onboarding support) on top of an already-strained capacity picture — open item #50 already tracks CMM scope pressure as unresolved since 29 Jun, and today's earlier Squad Sync (3 Jul) surfaced the same VAPT/CMM sequencing risk. This ESG conversation is not a new problem, but it is new evidence the pressure is real and coming from external stakeholders now, not just internal ones.

---

## Cross-Reference to Existing Tracking

- **Open item #50** (CMM scope pressure) — this ESG meeting is the clearest external validation yet that CMM matters to real pilot-agency needs, not just internal governance debates. Recommend using this meeting as supporting evidence when escalating #50, since "an actual pilot agency's onboarding is blocked without it" is a stronger forcing argument than the internal governance framing used so far.
- **Open item #13** (Go-Live 16 Oct 2026, confirmed) — ESG's October timing reference is consistent with this, not a new date. No conflict, just worth double-checking ESG's understanding matches.
- **Stakeholder profile "Xian Zhang"** (context-library/stakeholder-profiles.md) — flagged above as a likely different person from "Xian Zhang Guo" in this ESG meeting. Recommend adding a distinct stakeholder profile entry for Xian Zhang Guo (ESG) rather than risking a merge/confusion with the existing OTEP Design Review stakeholder.

---

## Next Steps

**Immediate:**
- Confirm whether "Xian Zhang" (stakeholder-profiles.md) and "Xian Zhang Guo" (ESG) are the same person or a naming collision
- Push for named owners + dates on the CMM-acceleration and onboarding-checklist action items rather than leaving them as "PSD Team, not specified"

**Short-term:**
- Follow-up session on competency modelling (ESG has committed to this as next step)
- Resolve the application-workflow / Workday-ServiceNow question that Adrian's early departure left open

**Escalation-worthy:**
- Use this meeting as fresh evidence when escalating open item #50 (CMM scope pressure) — this is the first time the CMM ask has come with a concrete, named pilot-agency blocker attached rather than staying at the internal-governance level.

---

## Context for Future Reference

This is the first meeting in this workspace's tracking to surface CMM scope pressure from an *external* agency perspective rather than an internal PSD/BO governance angle. If ESG is confirmed as the lead pilot agency, their specific competency-data gap may become the concrete test case that finally forces the CMM trade-off decision open item #50 has been waiting on since 29 Jun.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: PM-authored meeting assessment (Executive Summary / What Went Well / What Didn't Go Well / Risks / Key Decisions / Action Items / Overall Assessment format), submitted via `/meeting-notes` invocation on 2026-07-03. Meeting titled "OTEP clarification with ESG."

</details>
