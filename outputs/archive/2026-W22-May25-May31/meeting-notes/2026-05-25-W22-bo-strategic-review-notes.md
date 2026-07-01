# Meeting Notes: BO Strategy Meeting — CareerCompass MVP Scope & Roadmap Alignment

**Date:** 2026-05-25
**Meeting:** BO Strategic Review (continuation of roadmap alignment session)
**Attendees:** Adrian ANG (Product Owner, facilitating), Xian Zhang GUO (BO), Jace TAN, Michelle YIP, Christopher WOO (Design/Ops input)
**Michelle's role:** Observer / note-taker on scope decisions
**Type:** Strategic alignment — MVP feature scope, North Star anchoring, data architecture

---

## Summary

The team aligned on a "ruthless prioritisation" posture for MVP: every feature must be justified against competency development or career progression outcomes, not just OTG parity. Several features were challenged or deferred. Key constraints emerged around data reliability, UX flow (no OTG redirects), and avoiding system duplication. Career development (goals, supervisor views, career conversations) was identified as a high-value cluster for R3/R4. A go-forward principle was established: only build what drives outcomes.

**Shift in mindset confirmed:** From "replicate OTG features" → "only build what drives user outcomes."

---

## Decisions Made

1. **North Star as the filter for every feature**
   - Every feature must be justified against the North Star and OKRs
   - If a feature can't demonstrate contribution to competency development, career progression, or meaningful user outcomes, it should be challenged or deprioritised
   - Competency rating (self/peer/supervisor) flagged as needing stronger justification before inclusion
   - **Impact:** Shifts decision-making criteria from parity to outcomes

2. **MVP principle: simplify and reduce clutter**
   - Limit visible data fields in profiles (e.g. hide job family, department)
   - Avoid cluttering officer cards
   - Not all OTG fields should carry over; focus on high-value fields only (agency, role, destination)
   - **Impact:** Reduces scope of Officer Profile and Competency Profile features

3. **Fields with unclear ownership or data reliability are excluded from core metadata**
   - Supervisor tagging and role profile are inconsistent and sometimes manually overridden
   - Only include fields with clear ownership and a reliable source of truth
   - **Impact:** Directly affects Officer Profile PRD (Imelda's area) and POCDEX data mapping

4. **Competency feature reframed around development actions, not ratings**
   - Value of multiple rating types (self, peer, supervisor) is unclear — deprioritise or remove
   - Anchor use case to: gap identification → triggering development actions (courses, gigs)
   - Requires integration with HR systems (HRP/appraisal cycle) for consistency
   - **Impact:** Scope reduction for Competency Profile feature; design pivot needed

5. **OTEP/Compass must NOT become an LMS**
   - Rely on existing systems (Learn / HR systems / course aggregators)
   - Do not host content directly
   - Agency courses on OTG need a clear ownership and migration plan
   - **Impact:** Affects Learning Course Discovery scope

6. **Opportunities with OTG redirect flows deferred to R1**
   - Hard constraint: no flows requiring users to leave Compass and re-login to OTG
   - Secondments, SJR, and Common Roles cannot be in MVP if they rely on OTG flows
   - Strategy: native application flow (or FormSG workaround) required before inclusion
   - **Impact:** Narrows MVP opportunity scope; users will see "most" but not all opportunity types

7. **Career development cluster (goals, target role, supervisor view, career conversations) targeted for R3/R4**
   - High-value but not required for OTG decommissioning readiness
   - To be designed and delivered as an integrated experience in a future release
   - **Impact:** These features are parked; clears scope for MVP

8. **Exploratory features pushed out**
   - Career coaching, profiling tools, and gamification do not meet "must-have" threshold
   - Evaluation criteria: demonstrated value, alignment to outcomes, OTG decommissioning necessity
   - **Impact:** Reduces MVP feature list; decision on career coaching needs escalation

---

## Action Items

| Task | Owner | Support | Due / Priority |
|------|-------|---------|----------------|
| Refine feature justification against OKRs (ensure each maps to competency growth or career outcomes) | Adrian ANG / Product team | Xian Zhang GUO, Jace TAN | High — before next scope review |
| Validate data sources and source-of-truth for supervisor tagging and role profile | Product + Tech (CEG / integration team) | Xian Zhang GUO, Michelle YIP | High |
| Confirm integration approach with HR systems for proficiency levels and appraisal data | Product + HR system stakeholders | — | High |
| Define final MVP feature list (remove / park complex competency ratings, profiling tools, gamification) | Adrian ANG / Product team | — | High |
| Reframe competency feature design around gap identification and development actions; clarify role of ratings | Product + Policy stakeholders | — | Medium |
| Resolve application flow constraints (no OTG redirect); explore FormSG workaround and native application flow in Compass | Product team | Michelle YIP, Xian Zhang GUO | High — blocks MVP opportunity scope |
| Update comms: clarify users will see "most" opportunities, not all (e.g. Common Roles excluded) | Xian Zhang GUO | — | Medium |
| Check Digital Academy / Cumulus ownership and integration model | Product team | — | Medium |
| Verify Design Singapore course pipeline (source, upload process, tracking mechanism) | Product / Ops team | Christopher WOO | Medium |
| Assess agency course hosting approach — avoid creating LMS capability | Product + Tech | — | Medium |
| Clarify value and necessity of career coaching feature (outcomes, metrics, Equity contract dependency) | Xian Zhang GUO | — | High — may need leadership escalation |
| Decide if career coaching is required before OTG decommission | Product + WD stakeholders | — | High — escalate if needed |
| Cross-check final feature list against September deck for gaps or outdated items | Adrian ANG | — | Medium |
| Check with Amber on design review agenda (next-day meeting); confirm if Jacky LEE should attend | Michelle YIP | — | Immediate |

---

## Key Themes & Insights

**1. North Star as a forcing function**
The team explicitly agreed that every feature must ladder up to the North Star (50% of officers complete a development action by Dec '28). This gives the product team a clear rejection criteria: "what outcome does this drive?"

**2. Data quality is a structural risk**
Several fields (supervisor tagging, role profile) are unreliable or manually overridden. This isn't just a data hygiene issue — it affects which features are even viable at MVP. A source-of-truth audit is now a dependency for multiple features.

**3. The OTG redirect constraint is a hard UX blocker**
The "no OTG re-login" rule eliminates entire opportunity categories from MVP. This needs a proactive comms plan so users don't experience MVP as incomplete — frame it as "most opportunities" not "limited opportunities."

**4. Career development is strategic, just not now**
Goals, target roles, and supervisor conversations have real value but require design as an integrated experience. Parking them to R3/R4 is a clear and defensible call — not a deprioritisation of value, but a sequencing decision.

**5. Avoid building what already exists**
Duplicate systems (especially LMS) were explicitly called out as a risk. The principle: rely on existing systems, integrate rather than replicate.

---

## Open Questions

- [ ] Is career coaching required before OTG decommissioning? Needs escalation to leadership if yes. **Owner:** Xian Zhang GUO / WD stakeholders
- [ ] What is the exact Equity contract dependency for career coaching? **Owner:** Xian Zhang GUO
- [ ] Which fields in officer profile currently have clear source-of-truth ownership? **Owner:** Product + Tech
- [ ] Can FormSG workaround handle the full application flow for opportunities, or is native flow required? **Owner:** Product team (Michelle)
- [ ] Does Jacky LEE need to attend tomorrow's design review? **Owner:** Michelle YIP (check with Amber)

---

## Timeline Risks

- **TIMELINE RISK:** Application flow constraint (no OTG redirect) must be resolved before MVP opportunity scope is finalised. If native flow isn't ready by MVP, several opportunity types will be excluded. Given October '26 target, this needs resolution in the next sprint cycle.
- **TIMELINE RISK:** Career coaching decision may need leadership escalation. If coaching is required before OTG decommission, it could affect MVP scope and timeline. Xian Zhang to confirm quickly.

---

## Next Steps

**This week:**
- Michelle: Check with Amber on design review agenda and Jacky LEE attendance
- Xian Zhang GUO: Clarify career coaching value, Equity dependency, and decommission requirement
- Product + Tech: Begin source-of-truth audit for supervisor tagging and role profile data

**Before next scope review:**
- Adrian: Cross-check feature list against September deck
- Product team: Define final MVP feature list with features parked vs. included
- Product team: Reframe competency design around gap identification, not ratings

**Longer term:**
- Resolve application flow approach (FormSG workaround vs. native Compass flow)
- Confirm HR integration approach for proficiency levels and appraisal data
- Assess agency course hosting and Digital Academy / Cumulus ownership

---

## Strategic Context

This meeting moves the programme from "feature parity mode" to "outcome-driven mode." For Michelle's areas (Opportunities, FormSG, POCDEX, WOG Auth):

- **Opportunities:** MVP scope is now explicitly narrowed — common roles and secondments deferred. Comms update needed. Application flow constraint is the key open item.
- **FormSG:** Potential role as the workaround for opportunity application flow if native Compass flow isn't ready for MVP. Worth flagging to Pow Hwee.
- **POCDEX:** Source-of-truth audit is a shared dependency. Ensure POCDEX data fields being surfaced have clear ownership and reliability.

---

## Feature Scope Reference: BO Expectations vs Meeting Decisions

Source: "Feature Expectations for OTEP" document walked through by Xian Zhang GUO during this meeting.

Note on labels: The BO doc marks features as [Must have in OTEP] or [Good to have in OTEP]. Several features labeled "Must have" were challenged or deferred in this meeting. This table captures the delta.

| S/N | Feature | BO Label | MVP Decision | Notes |
|-----|---------|----------|--------------|-------|
| 1 | Update Profile | Must have | Included (simplified) | Hide job family, department. Supervisor tagging deprioritised ("need to understand value"). Personal details / key achievements → R3 onwards. Role Profile availability still unresolved. |
| 2 | Add and Rate Competencies | Must have | Partial / Reframed | Keep role-inferred competencies and gap analysis. Multiple rating types (self, peer, supervisor, EC/appraisal) need stronger justification. Reframe around development actions, not ratings. |
| 3 | Profiling Tools (Career Engagement, Values, Work Styles, Agility Factors) | Must have | **CHALLENGED / Deferred** | Meeting explicitly pushed these out. Doesn't meet "demonstrated value + outcomes" threshold for MVP. |
| 4 | Courses (CSC, Digital Academy, Design Singapore, Udemy, agency-specific) | Must have | Included (aggregator only) | OTEP as course aggregator is confirmed direction (per senior mgmt guidance). Must NOT become LMS. Manual upload process (quarterly) needs ownership clarity. Digital Academy / Cumulus flow and Design Singapore pipeline need verification. |
| 5 | Development Opportunities (STIPs, Gigs, SJR, Internal Opportunities, Secondments) | Must have | Partial — scoped | STIPs and Gigs: in MVP. SJR, Secondments, and Common Roles: **deferred to R1** due to OTG redirect constraint. Application form customisation feedback noted for R1 design. |
| 6 | Career Journey (pathway explorer) | Must have | Needs confirmation | Not explicitly resolved in this meeting. Currently limited to OTG role profiles. HR linkage would make it more accurate but adds integration scope. |
| 7 | Goals (General, Competency Growth, Target Role) | Must have | **Deferred to R3/R4** | High value but heavy policy dependencies: EC from HR systems (3-month decision), IDP/ADP hosting decision (6-9 months). Deferred as part of integrated career development cluster. |
| 8 | Supervisor View (staff overview, session notes, career conversations) | Must have | **Deferred to R3/R4** | Deferred as part of integrated career development cluster. Supervisor tagging data reliability also unresolved (only populated at account creation, not synced with HR). |
| 9 | Career Coaching (Acuity link-out, chatbot, resources) | Must have | **CHALLENGED — escalation needed** | Value and necessity for OTG decommission unconfirmed. Policy decision on hosting in OTEP estimated 3 months. Equity contract dependency unclear. Xian Zhang to follow up. |
| 10 | Kaki (networking / informal mentorship) | Good to have | Deferred | For ITC to propose. Not in MVP scope. |
| 11 | Reports (user completion, feature-level reports for agencies/HRLs) | Must have | Not explicitly discussed | Agency access to reports is a stated goal. Current reports have UX issues (10 rows per applicant). Likely included but design needs work. |
| 12 | Game concept / gamification | New (not on OTG) | **Pushed out** | PS discouraged monetary incentives. DS(T) suggested learning credits. Policy decision pending (3 months). Meeting explicitly deferred. |
| 13 | Competency management (agency-specific competency bank) | New (not on OTG) | Not discussed | Management/maintenance workflow needs clarity on inference and recommendation engines. |
| 14 | Role profile management | New (not on OTG) | Likely superseded | The BO doc itself notes: if OTEP can draw competencies from HR systems directly, role profiles may no longer be needed. This is the direction the meeting endorsed. |

**Key tension to track:** Items S/N 3 (Profiling Tools), S/N 7 (Goals), S/N 8 (Supervisor View), and S/N 9 (Career Coaching) are all labeled "Must have" in the BO document but were challenged or deferred in this meeting. These will need clear, documented rationale when communicating scope decisions back to BOs.

---

## Related Files

- [Meeting Prep Notes](../meeting-notes/2026-05-25-W22-bo-strategic-review-prep.md)
- Source doc: "Feature Expectations for OTEP" (PDF walked through by Xian Zhang GUO, 2026-05-25)
- [Opportunities Listing PRD](../../context-library/prds/opportunities-listing.md)
- [FormSG Integration PRD](../../context-library/prds/formsg-integration.md)
- [Competency Profile PRD](../../context-library/prds/competency-profile.md)
- [Officer Profile PRD](../../context-library/prds/officer-profile.md)
- [R1 Seamless Application Draft](../../context-library/prds/r1-seamless-application-draft.md)
