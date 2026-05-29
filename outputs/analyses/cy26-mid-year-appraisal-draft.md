# CY26 Mid-Year Appraisal Draft
**Name:** Michelle Yip
**Assessment period:** January–June 2026
**Level:** Generic, Level 2
**Role:** PM Apprentice, OTEP Pathfinder (GovTech)
**Joined OTEP:** 1 April 2026

---

## Behavioural Dimension 1: Ownership

- **Maintained system integrity and financial compliance for the OTG platform across a base of ~113,000 active WOG users.**
  - Independently managed Level 1 triage, diagnosing missing user escalations by analysing POCDEX integration logs and 3-column inclusion logic (NRIC, Agency, Job Family).
  - Ran monthly IM8 log reviews covering failed logins and privileged user actions, and processed account lifecycle reviews to deactivate withdrawn users on schedule.
  - Owned end-to-end CV6 invoicing preparation, including training and session notes deliverables, and calculated 5% security deposit adjustments triggered by subscription tier changes.
  - Maintained strict document governance, keeping ARK for final approvals and Teams for working drafts, to meet audit standards and prevent APV tracking errors from causing billing delays.

- **Delivered assigned tasks independently, resolving blockers without waiting to be asked.**
  - Completed OTEP-296: standardised the OTG Excel report format to match the OTEP data model, requiring cross-functional alignment between OTG operations and engineering.
  - Resolved 7 open OTG data field questions in a single working session.
  - Removed blockers that had been open since Sprint 1, enabling the data ingestion pipeline to proceed on schedule.

  *[Tracker ref: Outcomes Thinking, Cross-Cutting — Apr–May 2026]*

- **Proactively audited sprint readiness before ceremonies, preventing planning sessions from losing time to fixable hygiene.**
  - Before Sprint 2 finalisation: identified 12 Jira board actions needed across Sprint 2, Sprint 3, and Sprint 4+ — stories to move, add, remove, or verify — and cleared them before Planning.
  - Before Sprint 3 Planning: ran a full DoR audit on all candidate stories, caught two AC conflicts:
    - OTEP-128 "closed notice" duplicating OTEP-129
    - OTEP-129 visibility rule duplicating OTEP-85
  - Resolved both in Jira the day before the session. If they had surfaced in the planning room, they would have cost 20 minutes of scope re-litigation.

  *[Tracker ref: Cross-Cutting — 2026-05-21, 2026-05-27]*

- **Rewrote a story with mechanism-only ACs before planning rather than after.**
  - Caught that OTEP-192 was drafted with engineering mechanism ACs ("the job reads OTG exports and upserts records") rather than testable outcome criteria.
  - Rewrote it as a user story with 4 system-behaviour ACs covering ingestion, lifecycle management, validation, scheduling, and failure handling — before Sprint 3 Planning.
  - The story would have been built either way; whether it was built to the right outcomes was the question.

  *[Tracker ref: Outcomes Thinking — 2026-05-27]*

- **Flagged risks before they became sprint failures and recommended specific remediation actions.**
  - Identified that the WOG AD UAT environment would not be available for Sprint 3 auth testing — a blocker not yet visible in the sprint plan — and recommended deferring four auth stories (OTEP-71, 110, 304, 305) to Sprint 4+, freeing Sprint 3 capacity.
  - Before Sprint 3 Planning: flagged that the sole FE engineer had 4–5 frontend stories in scope and documented a recommended priority floor.
  - On the day of Planning: surfaced a Figma design system ambiguity at standup that would have blocked the FE mid-sprint, prompting a corrective audit before Sprint 3 started.

  *[Tracker ref: Roadmapping — 2026-05-21; Cross-Cutting — May 2026]*

- **Saw tasks through the full delivery cycle, not just to handoff.**
  - Managed the Sprint 2 demo script end-to-end: drafted structure before standup, confirmed environment and data items with engineering at 11:00, and finalised before the Sprint Review.
  - Reached out to Daryll (POCDEX team lead) to schedule a cross-team planning session before it became a Sprint 4 blocker — without being prompted — and logged it in the open loops tracker to track to resolution.

---

## Behavioural Dimension 2: Strategic Alignment

- **Upheld the platform's data integrity mandate by routing discrepancies to source systems, not patching them at the UI layer.**
  - When the fortnightly POCDEX-OTG batch jobs surfaced data mismatches, escalated corrections upstream to POCDEX, Cumulus, or HRPS rather than applying manual overrides in the OTG UI — keeping POCDEX as the authoritative source of truth.
  - Supported the migration of data pipelines from the legacy GPC SFTP (slated for decommissioning) to the Cloud File Transfer (CFT) platform, reducing infrastructure risk ahead of WOG scaling.
  - Fixes at the source reduced downstream authentication failures (including login loops from inactive records) and kept subscription metrics and budget planning grounded in the operational baseline of ~120,000 users and the 150K IA assumption.

- **Framed sprint goals as officer outcomes, not delivery outputs, anchoring the team's work to user value.**
  - Wrote Sprint 2's goal as "an officer can open OTEP, see every published opportunity, and click into a detail page" — not "deliver OTEP-85, OTEP-86, OTEP-128."
  - When scope creep emerged (requests to add filters and auth in the same sprint), held the sprint goal line using the outcome framing to justify the deferral.
  - Kept the team focused on what the officer could do by sprint end, not what the board showed as delivered.

  *[Tracker ref: Outcomes Thinking — 2026-05-06]*

- **Defined success metrics in three tiers before building, embedding measurement into the spec from the start.**
  - Set outcome metrics (channel migration ≥ 50%), input metrics (click-through rate, apply-click rate), and guardrail metrics (submission error rate, confirmation email delivery rate) — each with specific PostHog event keys — as part of the PRD, not as an afterthought.
  - Moved the team from "did we build it" to "did it work."
  - Gave Adrian a monitoring framework tied directly to the Dec '26 OKR targets.

  *[Tracker ref: Outcomes Thinking — 2026-05-06]*

- **Rebuilt Sprint 3 scope from scratch when a blocker surfaced, ensuring the sprint still delivered officer-facing value.**
  - When the WOG AD UAT environment gap was confirmed, replaced four auth stories with filter work (OTEP-86, OTEP-317, OTEP-318) and the apply loop (OTEP-87, OTEP-319) — sequenced by what was groomed, what had live dependencies, and what would deliver value without auth.
  - Sprint 3 still advances the programme's OKRs (≥80% of opportunities listed; ≥50% STIP/Gig application migration) without depending on an environment that doesn't yet exist.

  *[Tracker ref: Roadmapping — 2026-05-21]*

- **Made a forward-looking sequencing decision two sprints ahead, preventing a Sprint 4 infra block.**
  - Staggered POCDEX plumbing stories (OTEP-271, OTEP-203) into Sprint 3 rather than Sprint 4, so the infrastructure would exist before the Sprint 4 ringfencing feature (OTEP-127) needed it.
  - The decision doesn't show up in any Sprint 3 deliverable — but without it, Sprint 4 would have blocked on infra that wasn't there.
  - Nobody asked for this; the dependency was noticed and acted on.

  *[Tracker ref: Roadmapping — 2026-05-20]*

- **Held scope boundaries with a strategic narrative, not just a capacity argument.**
  - Dropped FormSG pre-fill from MVP scope by tying the decision back to the 2026-03-12 steering direction: OTEP owns the apply experience end-to-end; FormSG is the MVP vehicle, not the long-term solution.
  - The rationale: building complexity into a path the programme will deprecate in R1 is the wrong investment.
  - This framing turned a scope cut into a programme-aligned decision with a clear rationale Jace and Adrian could stand behind.

  *[Tracker ref: Roadmapping — 2026-05-26]*

---

## Behavioural Dimension 3: Culture & Organisational Influence

- **Owned governance cadence and vendor coordination across three stakeholder layers, keeping escalations routed and resolved without managerial intervention.**
  - Prepared for and facilitated working-level, PWC (bi-monthly), and PSC (quarterly) meetings independently, serving as the primary point of accountability for meeting readiness across all three tiers.
  - Acted as the main gatekeeper for vendor ticket management, coordinating directly with the CEG/Fuel50 support team to clarify requirements, manage bug fixes, and keep backlog grooming on track.
  - Kept the Workforce Development team, ITC, and external vendors aligned so that policy, SLA, and technical integration issues were escalated to the right person rather than landing as surprises or getting stuck.

- **[AI-powered PM knowledge sharing — to be filled by Michelle.]** Describe what you shared, with whom, and the outcome. Lead with the impact on peers or the team. The guidelines flag this as your strongest piece of evidence for this dimension — add the specifics here.

- **Built a structured PM operating system that reduced information burden on the team and modelled PM discipline.**
  - Designed a working environment with context files, sprint planning prep templates, meeting notes workflows, and daily planning habits that gave engineers and the tech lead shared context without needing to chase Michelle.
  - Self-audited the system after the first sprint, identified that it had more scaffolding than content, and fixed it — demonstrating the meta-awareness to critique and improve your own working practice.

  *[Tracker ref: Cross-Cutting — 2026-05-06, 2026-05-11]*

- **Defined the terms of stakeholder engagement, protecting the team from becoming a sprint bottleneck.**
  - Structured the Business Owner (BO) involvement model: BOs join for problem framing, scope decisions, and sprint goals; out of routine grooming and sizing unless a business decision is needed.
  - Kept BOs informed and involved at the right moments without pulling them into sizing conversations where they added noise rather than value.
  - The boundary held through Sprint 2 grooming.

  *[Tracker ref: Stakeholder Influence — 2026-05-11]*

- **Removed a risk that had been stagnant for weeks by identifying the specific unblocking action.**
  - The WOG AD onboarding blocker had been logged since Sprint 1 with no movement.
  - Identified `careercompass.gov.sg` as the unblocking domain, briefed Adrian with two concrete asks (COMET onboarding status; approval to test against WOG AD Prod), and got the intranet URL submitted — starting the 2-week approval clock.
  - The risk existed before; what changed was translating it from a problem on a list into a specific action for a specific person.

  *[Tracker ref: Stakeholder Influence — 2026-05-21]*

- **Shared information across squad boundaries to surface cross-team dependencies before they became blockers.**
  - Flagged four open dependency questions between the Pathfinder squad and Core squad (Imelda's team) — CSC SSO document ownership, competency data delivery format, schema, timeline — to Jace before they surfaced as surprises in Sprint 4.
  - At Sprint Planning, raised the POCDEX scope risk from the concurrent job family model discussion, giving the team the option to commit provisionally rather than blindly.
  - Both actions kept cross-squad dependencies visible without requiring the manager to track them.

---

## Evidence Tracker Cross-Reference

| Tracker Category | Tracker Entry | Appraisal Dimension | Included |
|-----------------|--------------|---------------------|----------|
| Outcomes Thinking | Sprint goals as officer outcomes (05-06) | Strategic Alignment | ✅ |
| Outcomes Thinking | Success metrics in 3 tiers (05-06) | Strategic Alignment | ✅ |
| Outcomes Thinking | SJR exclusion decision (05-21) | Ownership | ✅ (flagged risk bullet) |
| Outcomes Thinking | Auth deferral framed as product risk (05-21) | Ownership + Strategic Alignment | ✅ |
| Outcomes Thinking | OTEP-192 rewrite before planning (05-27) | Ownership | ✅ |
| Stakeholder Influence | Categorisation research + recommendation (05-06) | Strategic Alignment | ⚠️ Not yet — add if space allows |
| Stakeholder Influence | BO involvement model (05-11) | Culture & Org Influence | ✅ |
| Stakeholder Influence | WOG AD unblocking (05-21) | Culture & Org Influence | ✅ |
| Stakeholder Influence | Design lock date with Amber (05-22) | Ownership | ⚠️ Not yet — consider adding |
| Roadmapping | 5-sprint dependency sequencing (05-06) | Strategic Alignment | ⚠️ Not yet — add if space allows |
| Roadmapping | Sprint 3 rebuilt after WOG AD blocker (05-21) | Strategic Alignment | ✅ |
| Roadmapping | POCDEX stagger — 2 sprints ahead (05-20) | Strategic Alignment | ✅ |
| Roadmapping | FormSG pre-fill descoped with narrative (05-26) | Strategic Alignment | ✅ |
| Cross-Cutting | PM OS built + self-audited (05-06, 05-11) | Culture & Org Influence | ✅ |
| Cross-Cutting | 12 Jira board actions cleared pre-planning (05-21) | Ownership | ✅ |
| Cross-Cutting | DoR audit + AC conflicts resolved pre-planning (05-27) | Ownership | ✅ |

**Not yet included (add if word count allows):**
- Categorisation research with recommendation and validation path (Stakeholder Influence, 05-06) — strong Strategic Alignment evidence
- 5-sprint dependency sequencing (Roadmapping, 05-06) — another Strategic Alignment example
- Design lock date negotiation with Amber (Stakeholder Influence, 05-22) — good Ownership or Culture evidence

---

## Before Submitting

1. [x] Jan–Mar + Apr–Jun content merged into single Jan–Jun section per dimension ✅
2. [ ] Add AI-powered PM knowledge sharing bullet (Culture & Org Influence)
3. [x] OTG BAU responsibilities added ✅
4. [ ] Add PostHog event taxonomy if completed in June
5. [ ] Consider adding 3 tracker entries marked ⚠️ above if word count allows
6. [ ] Stress-test through AppraisAI (aibots.gov.sg/chats/govtech-appraisal-bot)
7. [ ] Confirm every bullet leads with Outcome, not Activity

---

*Draft created: 2026-05-28 | Period: Jan–Jun 2026 | Framework: OAI (Outcome, Action, Impact) | Level: Generic Level 2*
*Content mapped from OTEP workspace context, OTG BAU notes, and PM Conversion Evidence Tracker (`06-skills-and-decisions/pm-conversion/evidence-tracker.md`)*
