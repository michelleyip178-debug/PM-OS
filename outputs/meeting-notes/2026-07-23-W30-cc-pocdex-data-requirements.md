---
date: 2026-07-23
week: 2026-W30
meeting_type: stakeholder-review
topic: Career Compass – POCDEX Data Requirements
---

# Meeting Notes: Career Compass – POCDEX Data Requirements

**Date:** 2026-07-23, 9:30–10:30am

**Organiser:** Rama Moorthy

**Attendees:** Not individually listed in source (Career Compass team, POCDEX team)

**Meeting Type:** Stakeholder review / operational risk discovery

**Duration:** 1 hour

**Source:** Meeting transcript, condensed into an executive summary before processing

---

## Summary

Despite the name, this wasn't a data-requirements-gathering session — it turned into a risk discovery and Day-2 operations readiness review. The core tension: Career Compass MVP can launch on manual master files and mapping logic between POCDEX, HRPS, and Cumulus, but everyone in the room recognizes that architecture creates data drift, operational burden, and troubleshooting complexity. The group aligned on proceeding with MVP as-is, onboarding a small number of agencies first, building an Ops Portal for triage, deferring the harder integration-architecture questions to future discovery, and treating most identified issues as post-MVP roadmap items rather than launch blockers.

---

## Decisions Made

1. **Continue with current MVP architecture (master files + POCDEX + mapping logic)**
   - **Why:** No one challenged the MVP direction outright; the group judged the current approach launchable with operational mitigations rather than an architecture change
   - **Who decided:** Group consensus (Career Compass + POCDEX)
   - **Impact:** Job ID mismatches, agency mapping inconsistencies, and manual master file maintenance are accepted risks for MVP, not blockers

2. **Long-term integration strategy deferred to future discovery**
   - **Why:** Quarterly uploads, manual imports, and manual mappings are acknowledged as not ideal, but fixing them properly requires architecture work the team isn't positioned to do before MVP
   - **Who decided:** Group consensus
   - **Impact:** Source-of-truth rationalization and reduction of manual mapping points become Release 2 / post-MVP roadmap items, not MVP scope

3. **Controlled onboarding — start with a small number of agencies**
   - **Why:** Reduces blast radius, lets the team learn from real data issues and fix defects before scaling support burden
   - **Who decided:** Group consensus
   - **Impact:** This confirms, rather than changes, the existing MVP-6 pilot scope already defined in the WOG Authentication PRD (PSD, ESG, MDDI, URA, MCCY, CAAS, ~5,400 officers) — worth stating explicitly back to the group so it doesn't get treated as a new decision needing separate scoping.

4. **Build Ops Portal as the frontline troubleshooting mechanism**
   - **Why:** POCDEX team pushed hard on Day-2 operations questions (how do L1 officers troubleshoot, how do you prove whether an error originated from POCDEX or Career Compass) that the team didn't have answers to
   - **Who decided:** Group consensus
   - **Impact:** Ops Portal scope now includes validating officer eligibility, active positions, Job IDs, mappings, and competencies — this is a concrete scope addition, not just a concept; needs to be reflected in whatever backlog/PRD currently tracks Ops Portal work

5. **UAT scenarios become critical path**
   - **Why:** Generic UAT datasets won't be sufficient — POCDEX's support effort depends on Career Compass producing detailed test scenarios first
   - **Who decided:** Group consensus
   - **Impact:** This is the same UAT test plan thread from this morning's DOs call — see Timeline Risk below.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Share extraction criteria and HRPS details | POCDEX / HRPS side | Not stated | 🟡 Medium | 🔴 Not Started |
| Conduct deeper discovery on future integration model | Career Compass team | Not stated | 🟢 Low (post-MVP) | 🔴 Not Started |
| Produce detailed UAT test scenarios | Career Compass team (Michelle) | Not stated — see timeline risk | 🔴 High | 🔴 Not Started |
| Prioritise high-impact business test cases | Career Compass team | Not stated | 🔴 High | 🔴 Not Started |
| Define required UAT profiles and personas | Career Compass + POCDEX | Not stated | 🟡 Medium | 🔴 Not Started |
| Enhance Ops Portal capabilities before MVP | Career Compass team | Before MVP | 🔴 High | 🔴 Not Started |
| Implement better logging/history for troubleshooting | Career Compass team | Not stated | 🟡 Medium | 🔴 Not Started |
| Assess magnitude of Job ID mismatch issues before launch | Career Compass team | Before launch | 🔴 High | 🔴 Not Started |
| Determine handling model for multi-hatting and secondment edge cases | Joint (Career Compass + POCDEX) | Not stated | 🟡 Medium | 🔴 Not Started |
| Review data classification requirements against incoming data | Career Compass team | Not stated (reference doc shared in chat) | 🟡 Medium | 🔴 Not Started |

**Notes:**
- No owner is named at the individual level for any item — all are team-level. Worth assigning named owners before these disappear into "team backlog" limbo, especially the three 🔴 High items with no date.
- "Produce detailed UAT test scenarios" and "Prioritise high-impact business test cases" are effectively the same deliverable Adrian asked for "by tomorrow" in this morning's DOs call — see Timeline Risk.

---

## Timeline Risks

- **TIMELINE RISK:** This meeting names "produce detailed UAT test scenarios" as critical path with no date, while this morning's DOs call (earlier today, per [2026-07-23-W30-dos-call.md](2026-07-23-W30-dos-call.md)) had Adrian asking for a consolidated test plan "by tomorrow" (likely 2026-07-24). These are almost certainly the same deliverable seen from two meetings — confirm that producing one document satisfies both asks rather than treating them as separate work.
- **TIMELINE RISK:** "Assess magnitude of Job ID mismatch issues before launch" has no date, but Job ID mismatch is also the subject of the bug Adrian asked Rama to resolve/clarify in this morning's DOs call. If Rama's fix depends on knowing the magnitude of the problem first, sequence matters — confirm which comes first before Rama starts investigating.

---

## Key Insights & Quotes

**This is the same jobID/competency-matching thread surfacing a third time today.** Yesterday's UAT test scenarios note ([2026-07-22-W30-uat-test-scenarios.md](2026-07-22-W30-uat-test-scenarios.md)) found OTG opportunities lack agency code, breaking competency matching. This morning's DOs call had Adrian asking Rama to resolve jobID-to-competency mapping bugs. Now this POCDEX session names "Job ID Mismatch" as an explicit risk ("if officer Job ID cannot be found or mapping fails, competency recommendations become empty — accepted as an MVP risk"). Three meetings, one underlying data-model gap. Worth bringing all three notes into a single conversation with Rama and Pow Hwee rather than letting each meeting treat it as a fresh finding.

**POCDEX pushed the team past "does the API work" into "what happens after go-live."** Their recurring question — how do L1 support officers tell whether an error originated from POCDEX or Career Compass — is exactly the kind of question that's cheap to answer now and expensive to answer during a live incident. This reframed the meeting from data requirements into an operational-readiness review, which is probably the more valuable outcome even though it wasn't the stated agenda.

**Architecture debt is being knowingly deferred, not accidentally ignored.** The meeting explicitly named quarterly uploads, manual imports, and manual mappings as "not ideal" and chose to proceed anyway for MVP. This is a legitimate scope call, but it means the follow-up "deeper discovery on future integration model" action item is a real commitment, not a throwaway line — if it slips, this same conversation likely repeats at Release 2 scale with more agencies and more support burden.

---

## Open Questions

- [ ] Does "produce detailed UAT test scenarios" from this meeting and "consolidated test plan by tomorrow" from this morning's DOs call refer to the same deliverable? — **Owner:** Michelle Yip — **By:** Before starting either
- [ ] Should "assess magnitude of Job ID mismatch" happen before or in parallel with Rama's bug investigation from the DOs call? — **Owner:** Michelle Yip / Rama Moorthy — **By:** Before Rama starts
- [ ] What's the retention approach / audit trail design for logging and snapshots discussed but not decided? — **Owner:** Career Compass team — **By:** Not stated — worth a due date given it surfaced as a discussed-but-unresolved risk
- [ ] Who are the named individual owners for the 10 action items, all currently assigned at team level? — **Owner:** Michelle Yip — **By:** Before next sync with POCDEX

---

## Blockers

1. **Job ID mismatch magnitude unknown**
   - **Blocked by:** No assessment done yet of how often this actually occurs
   - **Impact:** Accepted as an MVP risk without knowing its real frequency — could be a rare edge case or a routine occurrence
   - **Resolution:** "Assess magnitude of Job ID mismatch issues before launch" — needs a date and owner

2. **Ownership boundaries between Career Compass, POCDEX, and HRPS remain undefined**
   - **Blocked by:** No operating model agreed on who resolves which class of issue
   - **Impact:** Once agencies scale, unclear ownership becomes an operational bottleneck — support tickets could bounce between teams with no clear resolution path
   - **Resolution:** Not assigned as an explicit action item in this meeting — worth raising as a gap, since every other operational risk discussed assumes this gets sorted out eventually

---

## Next Steps

**Immediate (today/this week):**
- Reconcile the UAT test scenario ask from this meeting with the DOs call's "consolidated test plan by tomorrow" — treat as one deliverable
- Confirm sequencing between assessing Job ID mismatch magnitude and Rama's bug investigation

**Short-term (this week):**
- Scope Ops Portal enhancements (eligibility, active positions, Job ID validation, mapping validation, competency validation, L1 triage) against whatever backlog currently tracks Ops Portal
- Assign named individual owners to the 10 team-level action items

**Follow-up needed:**
- A session to define the ownership/operating model between Career Compass, POCDEX, and HRPS wasn't explicitly scheduled but is implied as necessary before agencies scale beyond the initial small cohort

---

## Context for Future Reference

This meeting is the third touchpoint today on the same underlying issue: Job ID / competency mapping reliability against POCDEX and HRPS data. See [2026-07-22-W30-uat-test-scenarios.md](2026-07-22-W30-uat-test-scenarios.md) (agency-code gap in competency matching) and [2026-07-23-W30-dos-call.md](2026-07-23-W30-dos-call.md) (Adrian's ask to Rama to resolve the jobID/competency bug). Recommend treating these three as one thread in any follow-up rather than three separate investigations — the risk of duplicated diagnosis is real given how the day's meetings have surfaced the same root cause from three angles.

The "controlled onboarding, small number of agencies first" decision restates the existing MVP-6 pilot scope (PSD, ESG, MDDI, URA, MCCY, CAAS) already defined in `context-library/prds/wog-authentication.md` — good to confirm back to the group that this isn't new scoping work, just confirmation of the existing plan.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

**Meeting:** Career Compass – POCDEX Data Requirements

**Organiser:** Rama MOORTHY

**Transcribed:** Yes

**Executive Summary (30-second version)**

This was not really a "data requirements" meeting. It became a risk discovery and operations readiness review for Career Compass's dependency on POCDEX, HRPS, Cumulus and manual master files. The core tension throughout the discussion was: Career Compass MVP can launch using manual master files and mappings, but everyone recognises that the architecture creates data drift, operational burden, troubleshooting complexity and trust issues.

The group generally aligned to:
1. Proceed with MVP using current approach.
2. Limit rollout to a small number of agencies initially.
3. Build operational monitoring and troubleshooting tools.
4. Conduct further discovery on longer-term integration architecture.
5. Treat most identified issues as post-MVP roadmap items rather than launch blockers.

**What Went Well**

1. The team surfaced risks early instead of discovering them during UAT — Job ID mapping dependencies, agency mapping inconsistencies between HRPS and POCDEX, manual master file maintenance, data refresh timing differences, multi-hatting and secondment edge cases, competency derivation dependencies.

2. POCDEX team provided useful operational reality checks — "Don't only think about data integration. Think about Day-2 operations." Examples: What happens when Job IDs don't match? What happens when users see empty competencies? How do L1 support officers troubleshoot? How do you prove whether the error originated from POCDEX or Career Compass? What logs will be retained? What SOPs exist?

3. Career Compass already has mitigations for some data quality failures — missing competency mappings do not completely break the product, officers can still manually maintain competencies, role recommendations can still function, an Ops Portal is planned to diagnose common data issues.

4. Strong alignment on controlled rollout — onboard a small number of agencies first: learn from real-world data, fix defects, understand actual operational support burden, reduce blast radius.

**What Didn't Go Well**

1. Fundamental architecture questions remain unresolved — why integrate through multiple intermediate sources (HRPS, Cumulus, POCDEX, manual Excel extracts, manual master files) rather than directly consuming authoritative sources? No future-state architecture decision was made.

2. Too many manual synchronisation points — Master Files (Job Family, Job Function, Job Grade) periodically uploaded; descriptions may change while IDs remain the same; updates occur at different frequencies; different sources update independently, leading to inevitable drift.

3. Ownership boundaries remain unclear — when does an issue belong to Career Compass vs. POCDEX vs. HRPS? Who performs data corrections? A clean operating model was not established.

4. Heavy dependence on future discovery work — agency mapping, future integrations, data source strategy, direct HR integration all parked as "we need proper discovery."

**Major Decisions Made**

Decision 1: Continue with current MVP architecture — import master files, consume POCDEX data, use mapping logic between sources, manage risks operationally.

Decision 2: Long-term integration strategy will be explored later — quarterly uploads, manual imports, manual mappings are not ideal but solving that is deferred to future discovery and roadmap work.

Decision 3: Controlled onboarding approach remains — start with a limited number of agencies, learn from data issues, fix problems before scaling.

Decision 4: Build operational troubleshooting capability — the planned Ops Portal will validate officer eligibility, check active positions, validate Job IDs, validate mappings, validate competencies, support L1 triage.

Decision 5: UAT scenarios become critical path — detailed test scenarios must be produced, POCDEX support effort depends on these scenarios, generic UAT datasets will not be sufficient.

**Risks Explicitly Discussed**

Risk 1: Job ID Mismatch — if officer Job ID cannot be found or Job ID mapping fails, then competency recommendations become empty. Accepted for MVP but acknowledged it affects user experience.

Risk 2: Data Drift — different data sources refresh at different frequencies (HRPS, Cumulus, POCDEX, manual files), creating timing gaps, inconsistent user experiences, support incidents.

Risk 3: Agency Mapping Complexity — POCDEX consolidates agencies differently from HRPS structures (e.g. overseas offices consolidated under ministry-level entities), creating transformation complexity and future maintenance challenges.

Risk 4: Operational Workload — support teams may face extensive troubleshooting, coordination with upstream owners, SLA pressure, unclear ownership, especially after onboarding more agencies.

**Risks NOT Being Fully Addressed**

1. Loss of user trust — what happens when senior officers see incorrect or empty competency profiles? Mentioned but not explored deeply.

2. Scaling Ops Beyond MVP — current answer is start small, learn, document, improve, but no clear estimate of L1 manpower, L2 manpower, escalation volume, additional support burden once agencies scale.

3. Dependency Accumulation — architecture increasingly depends on multiple data sources, transformation layers, manual uploads, manual mappings. Every additional dependency introduces another potential failure point. Recognised but no strategy to reduce dependency count established.

4. Auditability — logging, snapshots, retaining evidence of what data was received discussed, but no clear decision on retention approach, audit trail design, forensic troubleshooting process.

**Action Items**
- Share extraction criteria and HRPS details — POCDEX / HRPS side
- Conduct deeper discovery on future integration model — Career Compass team
- Produce detailed UAT test scenarios — Career Compass team
- Prioritise high-impact business test cases — Career Compass team
- Define required UAT profiles and personas — Career Compass + POCDEX
- Enhance Ops Portal capabilities before MVP — Career Compass team
- Implement better logging/history for troubleshooting — Career Compass team
- Assess magnitude of Job ID mismatch issues before launch — Career Compass team
- Determine handling model for multi-hatting and secondment edge cases — Joint discussion
- Review data classification requirements against incoming data — Career Compass team (reference document shared in chat)

**My Assessment (Product / Operations Perspective)**

If presenting to SteerCo, headline: The MVP is technically viable, but the dominant risk is not API availability — it is operational sustainability. Career Compass sits at the intersection of POCDEX, HRPS, Cumulus, manual master files, and transformation rules, and therefore becomes the place where all inconsistencies surface. For MVP, manageable through controlled onboarding and strong support processes. For Release 2 and WOG scale, the real work is likely: source-of-truth rationalisation, reduction of manual mappings, observability/logging, support operating model, data governance ownership.

</details>
</content>
