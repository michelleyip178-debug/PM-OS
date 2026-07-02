# AppraisAI Input — Everything I Worked On (Jan–Dec 2026)

**Officer:** Michelle Yip

**Role:** Business Analyst (Programme Management) Level 2 / Product Manager Apprentice, OTEP Pathfinder (CareerCompass), assessed against Level 2 — Product Manager II schema

**Period:** January–December 2026

**Arc:** Jan–Mar as BA managing OTG platform operations (~113,000 users). Apr–Dec as PM Apprentice on OTEP Pathfinder, delivering CareerCompass MVP to six pilot agencies by Oct 2026 go-live, then scoping R1.

---

## Major Projects and Initiatives

- **CareerCompass (OTEP Pathfinder) — PM Apprentice, Apr–Dec 2026.** Owned the Opportunities Listing feature (P0, one of two MVP pillars) across Sprints 1–9 through to Oct go-live. Responsible for discovery, story writing, AC quality, sprint grooming prep, scope discipline, and post-launch R1 scoping. Delivered a complete, usable listing experience — search, filter, sort, data currency — to ~5,400 officers across six pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS). [Source: careercompass-phased-rollout.md]
- **WOG AD Authentication (CareerCompass).** PM ownership of WOG AD authentication from scoping through to live production. Defined the PRD problem statement, identified `careercompass.gov.sg` as the unblocking domain when the feature had stalled since Sprint 1, submitted the domain for WOG AD onboarding (Jun 10), and managed the Keycloak → WOG AD transition plan through UAT and go-live. **Resolved a scope-boundary ambiguity between OTEP-111 (unauthorised page) and OTEP-594 (post-login routing) after it was flagged as a possible duplicate at Squad Sync — clarified the split (594 owns the routing decision, 111 owns the display) and specified a new system-error scenario (pilot-agency officer with no POCDEX profile yet) that needed to be carved out of the generic access-denied path (2026-07-02).** [Confirm go-live evidence: auth logs + login success rate before submission]
- **POCDEX Integration (CareerCompass).** Elevated POCDEX from a single story to its own Epic after identifying a hidden four-story cross-squad dependency chain. PM ownership of provisioning model, ringfencing logic, and cross-squad data contract with Core team (Imelda's squad). Staggered infrastructure stories (OTEP-271, OTEP-203) into Sprint 3 to unblock ringfencing (OTEP-127) in Sprint 4 — sequencing call that prevented a delivery block nobody had flagged. [Source: Sprint 2 Retro and Decisions Log, 22 May 2026]
- **OTG data ingestion pipeline (CareerCompass).** Led product discovery on OTG ingestion data quality — found that only 160 of 633 live gigs (25%) were passing validation. Produced a structured brief identifying two field scope decisions that could lift the catalogue to 350–400 records without agency action. Mapped per-agency remediation plan prioritising Enterprise Singapore (178 blocked gigs, 38% of all blocked content). Produced v3 ingestion rules decision (D-026). [Confirm final post-v3 catalogue count with engineering before submission]
- **Opportunity category taxonomy resolution.** Resolved a three-taxonomy conflict between OTG's 21 Job Families, C@G's 35 FieldSet codes, and CompBank's ~400 competency categories. Mapped 210 unmappable C@G listings and produced four options with trade-offs, enabling the senior technical lead to finalise a canonical architecture (WOG 23 Job Families via translation dictionary at ingestion) and close a decision that had been deferred for weeks. [Source: opportunity-category-taxonomy-analysis.md, Jun 24 2026]
- **R1 competitive analysis and feature scoping.** Ran a structured competitive sweep across 7 internal mobility platforms. Produced three audience-specific briefs (Adrian: strategic lens, Pow Hwee: technical lens, Amber: design lens). Identified 3 R1 prototyping candidates. Facilitated R1 scoping jam with Adrian (Jun 24) and progressed four R1 epics (status tracking/notifications, smart matching, native apply, agency creation) toward grooming-ready state by Q4. [Confirm Mark sign-off on R1 scope before submission]
- **OTG Platform BAU (Jan–Apr 2026).** Managed Level 1 triage, monthly IM8 log reviews, account lifecycle reviews, and POCDEX-OTG batch job monitoring for ~113,000 active WOG users across all four governance tiers. Primary accountability point for operational continuity while concurrently ramping into PM Apprentice delivery work from April. [Confirm exact user count against latest OTG monthly report before submission]

---

## Business-As-Usual (BAU) Improvements

- **OTG Excel report format standardisation (OTEP-296).** Standardised the OTG Excel report format to match the OTEP data model — required cross-functional alignment between OTG ops and engineering before the data model was finalised.
- **Resolved 7 open OTG data field questions in a single working session** — cleared ambiguities that had been open since Sprint 1, unblocking the ingestion pipeline without requiring an engineering investigation cycle.
- **OTG monthly progress report delegated to Jobelle** (Jun 2026) — freed recurring PM overhead (~1–2 hrs/month). ARK access secured proactively through Adrian before the handover deadline.
- **CV6 invoicing and SJR training closure with CEG.** SJR training concluded and invoice submitted to close out the engagement. Maintained CV6 invoicing across training deliverables, including 5% security deposit adjustment calculations triggered by subscription tier changes.
- **CEG/Fuel50 vendor ticket management (Jan–Mar).** Primary coordination point between GovTech, CEG, and the Fuel50 support team — clarifying requirements, managing bug fixes, keeping backlog grooming on track across all open tickets.
- **Data pipeline migration from GPC SFTP to Cloud File Transfer (CFT) platform (Jan–Mar).** Supported migration to reduce infrastructure risk ahead of WOG scaling. Escalated POCDEX-OTG batch job mismatches upstream to source systems (POCDEX, Cumulus, HRPS) rather than patching at UI — consistent pattern of fixing root causes rather than local workarounds.
- **SWDA merger (Alan, Jun 2026).** Confirmed OTG agency inclusion file update needed before 30 Jun ahead of WSG + SSG merger effective 1 Jul. Tracked and closed with Alan's team within the required window.
- **Cumulus Phase 3 / Malaysia NRIC change tracking (Jun 2026).** Coordinated with Rama; confirmed static-data window (30 Jun–6 Jul) and OTG readiness for Malaysia ID changes ahead of the 6 Jul deadline.
- **OTEP-128 deep-link acceptance criteria amendment (2026-07-02).** A ticket already in QA had an AC silent on the authentication gate for deep-linked opportunity pages. After confirming the correct behaviour with engineering (Hao Eng Chua, Léo) over Slack, amended the Jira AC directly and posted a traceability comment flagging QA to verify built behaviour matches before sign-off — closing a spec gap on a ticket that had already moved past grooming.

---

## Process Improvements and Automation

- **Definition of Ready (DoR) audit before ceremonies.** Introduced systematic pre-planning DoR audits, applied consistently from Sprint 2 onward. Sprint 3: caught two AC conflicts (OTEP-128 and OTEP-129 both duplicating OTEP-85 logic) the day before planning, preventing 20+ minutes of scope re-litigation and a risk of incorrect build. Sprint 4: created two new tickets, fixed two AC conflicts, and confirmed a cross-squad architecture risk with Pow Hwee in a 1h45 window before the ceremony. Board was clean going in; session stayed on capacity and sequencing. [Source: Sprint 3 and 4 Jira audit logs]
- **Sprint goal framing as officer outcomes, not delivery outputs.** Shifted sprint goal language from "deliver OTEP-85, 86, 128" to "an officer can open OTEP, see every published opportunity, and click into a detail page." Applied from Sprint 2 onward. When scope creep emerged (requests to add auth in Sprint 2), the outcome framing gave the team a clear basis to defer without manager escalation.
- **BO involvement model.** Defined the Business Owner engagement model for the programme: BOs join for problem framing, scope decisions, and sprint goals; excluded from routine grooming and sizing. Sprint 2 grooming ran without BO attendance and stayed on schedule.
- **UAT and QA environment separation.** Proposed and established a clear purpose split: QA for engineer-driven AC verification; CareerCompass UAT for user-driven acceptance testing. Removed noise for both audiences and made the acceptance gate legible to non-technical stakeholders.
- **Sprint closure gated on BO sign-off.** Proposed the rule that sprint closure requires the BO to move stories from UAT to Done; engineers move sub-tasks. Adopted by team at 4 Jun meeting. Puts the acceptance gate with the people accountable for business value, not the people who built it.
- **49-item open items log.** Established and maintained a live tracker for all programme dependencies, blockers, and decisions. Every item has an owner, status, and update. Nothing fell through untracked across the full Sprint 1–9 delivery cycle.
- **Decisions log (D-001 to D-026+).** All scope calls logged with rationale, status, and owner. Any stakeholder can trace a decision back to the policy intent and who made it — used as the source of truth for scope disputes throughout delivery.
- **Jira cache integrity sweep (2026-07-02).** Identified and resolved a duplicate sprint-folder problem in the team's local Jira cache (two folders tracking the same live sprint, one stale and partial). Verified the canonical folder against live Jira with zero field drift across 75 tickets before removing the stale copy — keeping every downstream planning doc (sprint-allocation, sprint-status, daily/weekly plans) reading from a single accurate source instead of a fork that could silently diverge.

---

## Cross-Team Collaborations

- **Pathfinder ↔ Core squad (Imelda's team).** Led Dependencies Sync-Up (Jun 11) — resolved competency data architecture before it became a Sprint 4 surprise: in-code interface, no foreign keys, store code after label lookup at import, two new Core endpoints scoped (exact label lookup + job family/function list). Four dependency questions surfaced and closed in a single session.
- **Pathfinder ↔ Workforce Development (Xian Zhang).** Coordinated competency data sourcing questions and North Star metric recalibration (Jun 2026), requiring WD to validate baseline completion rates before targets go to SteerCo.
- **Pathfinder ↔ POCDEX team (Daryll).** Proactively scheduled cross-team planning session after identifying the dependency. Pow Hwee subsequently resolved POCDEX integration direction directly with Daryll — routing the right people once the dependency was visible.
- **Pathfinder ↔ Business Owners (Xian Zhang, Mark, GK, Jacky).** BO strategic review (May), sprint goal alignment sessions, scope sign-off sessions, and senior-level Product x BO working session (Jun 24) pressure-testing North Star, competency governance, and OTG transition strategy. **Consolidated 9 opportunities-related items surfaced across Sprint 4 Retro and SteerCo prep debrief into a single BO prioritisation brief (2026-07-01), separating what needs an explicit BO decision (ringfencing hide-vs-disable, blocking 3 already-written tickets) from what's just sequencing — kept the BO conversation focused on the one decision with the most leverage rather than nine competing asks.**
- **Pathfinder ↔ Design (Amber).** Edge cases and error states session (Jun 8) — aligned on LifeSG error pages, flow walkthrough scope, filter UI decisions. R1 prototype brief written for Amber with specific design candidates from competitive sweep.
- **Pathfinder ↔ DevOps team.** Category taxonomy decision (Jun 22) — confirmed STIP/Gig no-merge, PSFG conditional-on-policy-intent. OTG ingestion v3 rules produced jointly.
- **Pathfinder ↔ Engineering (Hao Eng Chua, Léo) (2026-07-02).** Clarified deep-link authentication behaviour for opportunity detail pages over Slack — confirmed unauthenticated deep-links redirect through login before landing on the specific opportunity, and that links stay valid while the opportunity is active. Turned an informal Slack clarification into a formal Jira AC amendment with traceability, so the answer doesn't live only in chat history.
- **PMP community (cross-GovTech).** Learn-Create-Share session (8 May, hybrid, MBC Level 10) — cross-agency AI knowledge sharing. 4.25/5 satisfaction; 75% reported greater AI clarity; at least one attendee built and shared a synthesis assistant across their own team. [Confirm: locate post-session FormSG feedback form results before submission]

---

## Mentoring and Capability Building

- **Jobelle handover and onboarding (Jun–Jul 2026).** Designed and executed a 4-week, 12-session structured handover plan sequenced by complexity, not recency: OTG ops context first, OTEP delivery second. Session 1 ran 8 Jun with all reference materials in place beforehand. ARK access secured proactively through Adrian. Jobelle able to build a mental model before taking on live tasks. [Confirm: note when all 12 sessions completed before year-end submission]
- **PMP AI Learn-Create-Share session (8 May 2026, hybrid, MBC Level 10).** Shared a practical, working AI stack for PM work: Claude for ideation and synthesis, Figma for rapid prototyping, Notion for knowledge management. 4.25/5 satisfaction; 100% would recommend; 75% reported greater AI clarity. Downstream adoption confirmed: at least one attendee built and shared a synthesis assistant across their own team. Impact went beyond the room. [Confirm: locate post-session FormSG results for citation]
- **PM Operating System built and documented.** Built a structured working environment — context files, sprint planning prep templates, meeting notes workflows, daily planning habits — giving the tech lead and engineers shared context without chasing the PM. Self-audited after Sprint 1 and improved the system. Shared selectively with cross-squad PMs where applicable. **Extended in July to include a live-Jira-verified sprint sync workflow (jira-sync skill) that other PMs on the programme could reuse to keep their own sprint caches honest against live data.**

---

## Research and Experimental Work

- **OTG ingestion data quality discovery (Jun 10).** Full quantitative analysis of the OTG ingestion rejection rate (75% of live gigs failing). Separated data quality failures (fixable at source) from overly conservative validation rules (fixable in the system). Produced three catalogue scenarios (160 / 350–400 / 500+) with clear PM decisions attached to each, giving the BO a real trade-off rather than an engineering problem to absorb. [Source: 2026-06-10-W24-otg-ingestion-product-discovery.md]
- **Opportunity category taxonomy analysis (Jun 24).** Three-source analysis of OTG's 21 Job Families, C@G's 35 FieldSet codes, and CompBank's ~400 competency categories. Identified the mapping problem in full — 210 C@G listings with no clean OTG home — and produced four options with trade-offs. Assessment enabled canonical architecture decision in the same week. [Source: 2026-06-24-opportunity-category-taxonomy-analysis.md]
- **C@G FieldSet data pull and analysis.** Retrieved C@G's `Indus` field codes via SAP OData v2 API; mapped all 35 job function codes to live listing counts; identified exact mapping friction points between C@G and OTG taxonomies. PM-driven technical analysis, not delegated to engineering.
- **R1 competitive analysis (Jun 2026).** Swept 7 internal mobility platforms across 7 feature themes. Produced three audience-specific briefs with different lenses. First PM on the programme to bring structured competitive intelligence into R1 scoping.
- **CSC SSO feasibility analysis (May 2026).** Mapped the 6-week dependency chain (WOG AD → CSC); surfaced that neither the dependency nor the lead time was logged anywhere in the programme. Recommended a feasibility deep-dive before committing to MVP must-have — preventing a late-stage scope collision.
- **CareerCompass user research (Jun 2026).** Conducted and processed a user research interview (Max); structured notes and synthesis fed into the R1 feature brief.
- **Backlog awareness audit across Opportunities, WOG AD, and POCDEX (2026-07-01–02).** Pulled the full live backlog (179 items) across three feature areas and cross-checked against everything actually discussed in recent meetings, surfacing items that existed in Jira but hadn't come up recently — including a likely duplicate ticket (OTEP-436/OTEP-88) and a routing-scope ambiguity (OTEP-594 vs. #43) that needed resolving before either could move. Not a delivery task in itself, but the kind of backlog hygiene that prevents build-the-wrong-thing later.

---

## Long-Term Projects

- **CareerCompass MVP delivery (go-live Oct 2026).** PM ownership of Opportunities Listing, WOG Auth, and POCDEX integration across Sprints 1–9. Delivered to six pilot agencies (~5,400 officers). Managed dual-system period (OTG operations continuing while building its replacement) and closed all critical dependency chains (POCDEX, WOG AD, C@G ingestion, VAPT) through to go-live. [Confirm go-live artefacts: PostHog funnel dashboard, provisioning logs, auth logs before submission]
- **OTG platform operations and decommissioning planning.** Operated OTG (~113,000 users) throughout CY26 while simultaneously building CareerCompass as its replacement. Maintained operational continuity across BAU, IM8 reviews, batch job monitoring, vendor coordination, and governance meetings — fully handed over to Jobelle by Q3. [Confirm exact OTG user count before submission]
- **R1 scoping (Q4 2026 / Q1 2027).** Four R1 epics progressed toward grooming-ready: status tracking and notifications (Epic C), smart matching (Epic E), native apply, agency creation. R1 jam with Adrian completed Jun 24. [Confirm: Mark sign-off on R1 scope; epics groomed and sequenced before year-end]

---

## Maintenance and Operational Work

- **Monthly IM8 log reviews (Jan–Apr):** failed logins, privileged user actions — reviewed, flagged, resolved or escalated. Zero compliance gaps across the review period.
- **Account lifecycle reviews:** deactivated withdrawn users on schedule; managed the POCDEX-OTG batch job mismatch escalation loop. Escalated upstream consistently — POCDEX, Cumulus, or HRPS as appropriate — rather than patching in OTG UI.
- **ARK document governance:** maintained ARK for final approvals, Teams for working drafts — consistent with audit standards and APV tracking requirements throughout the year.
- **Working-level, PWC (bi-monthly), and PSC (quarterly) meeting preparation and facilitation (Jan–Mar):** primary accountability point for meeting readiness across all three governance tiers. Meetings ran on schedule; no preparation gaps.
- **OTG vendor coordination (CEG/Fuel50) (Jan–Mar):** gatekeeper for vendor ticket management, requirements clarification, and bug fix coordination. Backlog grooming stayed on track throughout vendor engagement.
- **OTEP-427 spike (OTG ingestion tightening):** PM-owned discovery spike scoped and tracked to avoid loading engineering sprint capacity. Kept PM-side discovery moving without creating a hidden dependency on engineering.
- **PIM risk assessment (OTG ops):** scoped and submitted post-feature-freeze — identified worst-case damage scenarios for privileged account abuse, submitted residual risk for formal acceptance.
- **Cybersecurity quiz:** completed by Dec 2026.
- **Weekly Jira sprint-cache verification (ongoing from Jun 2026).** Routine check of local ticket cache against live Jira before planning ceremonies — status, assignee, and story-point drift caught and corrected before it could mislead a sprint-status read or a stakeholder update.

---

## Learning and Development Activities

- **PM Apprenticeship transition (Apr 2026).** Moved from BA (OTG platform operations) to PM Apprentice (OTEP Pathfinder) and built end-to-end PM delivery competency through live programme work across Sprints 1–9: discovery, story writing, grooming facilitation, AC quality management, scope discipline, sprint ceremonies, stakeholder alignment, and R1 roadmapping. No prior PM delivery experience at the start of the year.
- **Technical domain upskilling (Apr–Dec).** Built working knowledge of WOG Active Directory, POCDEX data contracts, Keycloak auth, CSC SSO architecture, PostHog event instrumentation, and C@G SAP OData APIs — through live delivery, not coursework. Applied each domain area directly to unblocking delivery or making product decisions.
- **APA E-Learning** — completed May 2026.
- **PMP AI sharing session (8 May).** Prepared and delivered a structured knowledge-sharing session on practical AI tools for PM work — synthesised own working practice into a teachable framework. Teaching reinforced and sharpened the underlying skills.
- **360 feedback synthesis (Jun 2026).** Self-compiled structured 360 from documented evidence across schema dimensions for APA prep — developed a rigorous approach to self-assessment against the L2/L3 framework.
- **APA schema re-mapping exercise (Jul 2026).** Re-mapped a full cycle of evidence from the BA (Programme Management) L2 framework to the Level 2 — Product Manager II schema after confirming this is the framework being used for assessment — forced a sharper read of which evidence actually demonstrates each PM competency versus which was BA-flavoured process discipline.
- **Reforge programme (H2 2026, if applicable).** [Add if Reforge learning completed in H2]

---

## Any Other Contributions

- **SteerCo demo co-prep:** co-prepared the consolidated narrative demo for SteerCo with Imelda, Rama, and Pow Hwee. Correctly scoped own role — demo narrative, not the North Star brief or transition plan deck, which sat with other teams.
- **Scoping gaps tracker:** maintained the scoping-gaps-tracker.md as a living record of what is in, what is deferred, and what is unresolved — referenced at every grooming session throughout the delivery cycle.
- **Sprint 2 demo script:** drafted end-to-end, confirmed environment and data items with engineering ahead of the Sprint Review. Demo ran without issues.
- **CEG invoicing (SJR training):** SJR training concluded and invoice submitted to close out the engagement.
- **CIE inference risk escalation (2026-07-01).** Flagged that a proposed unvalidated AI inference path (Competency Inference Engine reading job descriptions with no human verification) compounds a risk already raised at SteerCo prep about the same model's CV-based inference. Recommended folding it into the existing CIE validation conversation rather than letting it ship as a routine backlog ticket — the kind of judgement call that isn't glamorous but prevents a bigger problem from surfacing later at a more visible moment.

---

*Prepared: 2026-06-24, updated 2026-07-02 (added OTEP-111/594 scope resolution, OTEP-128 AC amendment, Jira cache integrity sweep, BO prioritisation brief consolidation, CIE inference risk escalation, and PM II schema re-mapping to the relevant categories above).*

*Before final submission, confirm the following:*
- *Post-v3 catalogue count (ask Léo/Thomas — was it 350–400?)*
- *OTG active user count (pull from latest monthly report — confirm ~113,000)*
- *Post-session feedback form results for PMP AI session (locate FormSG from May 8)*
- *CareerCompass go-live artefacts (PostHog funnel dashboard, auth logs, provisioning logs)*
- *Jobelle handover completion (note date all 12 sessions done)*
- *R1 scope sign-off from Mark*
- *BO decision on #43 (ringfencing hide-vs-disable) — confirm resolved before citing OTEP-390/408/409 as delivered rather than blocked*
