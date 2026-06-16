---
date: 2026-06-16
type: APA Self-Assessment
framework: Business Analyst — Programme Management, Level 2
period: April–June 2026 (OTEP Pathfinder apprenticeship)
---

# APA Self-Assessment — Business Analyst (L2)

**Name:** Michelle Yip

**Role:** Product Manager Apprentice, OTEP Pathfinder (CareerCompass)

**Assessment period:** April–June 2026

**Framework:** Business Analyst — Programme Management, Level 2

---

## Craft & Execution

### Requirements Engineering

*L2 descriptor: Applies structured approaches to identify and validate problems, and develop precise, implementable specifications. Manages complete requirements lifecycle with change control, ensuring business-solution coherence.*

**The engineering team built toward the right outcome rather than the right mechanism, because acceptance criteria were rewritten at the specification stage.** OTEP-192 (OTG data ingestion) was drafted with mechanism-oriented ACs ("the job reads OTG exports and upserts records") that described how the system worked, not what it should deliver. I rewrote the story with four behaviour-based ACs covering ingestion, lifecycle management, validation, scheduling, and failure handling before Sprint 3 planning. The team built to those criteria — and the story closed QA without an AC dispute.

**Two AC conflicts that would have derailed Sprint 3 planning were resolved the day before the ceremony.** Running a full Definition of Ready audit, I identified that OTEP-128 contained a "closed notice" duplicating OTEP-129, and OTEP-129's visibility rule duplicated OTEP-85. I resolved both in Jira before the session. Left unresolved, these would have cost 20 minutes of scope re-litigation in the planning room and risked the team building incorrect behaviour.

**Scope changes were traceable from policy intent to Jira ticket, not just communicated verbally.** When FormSG pre-fill was descoped from MVP, I documented the rationale (FormSG is the MVP vehicle, not the long-term apply experience; building complexity into a deprecated path is waste), traced it to the 2026-03-12 steering direction, and updated the relevant ticket and PRD. Anyone picking up the story months later would understand not just what was excluded, but why.

---

### Stakeholder and Business Value

*L2 descriptor: Leads stakeholder analysis and engagement to build business cases with cost-benefit analysis, risk assessment, and success metrics. Conducts journey mapping to derive optimal user experience, business logic, and validation rules.*

**The Product Owner had a measurable monitoring framework tied to OKR targets before a single line of code was written.** I defined success metrics in three tiers as part of the PRD: outcome metrics (channel migration ≥50% from OTG to CareerCompass), input metrics (click-through rate, apply-click rate), and guardrail metrics (submission error rate, confirmation email delivery rate) — each with specific PostHog event keys. This shifted the team from "did we build it" to "did it work," and gave Adrian a framework grounded in the Dec 2026 OKR baselines rather than proxy delivery metrics.

**A data quality problem that could have quietly torpedoed the go-live catalogue was surfaced and quantified with a remediation path before it became a sprint blocker.** When the OTG ingestion pipeline ran against live data and only 160 of 633 open gigs (25%) were passing validation, I reframed it as a business value decision rather than an engineering problem. I produced a structured discovery brief mapping three catalogue scenarios: 160 at baseline, 350–400 with two field scope rule changes, and 500+ with agency remediation. The brief identified Enterprise Singapore alone as holding 178 blocked gigs — 38% of all blocked content — and gave the BO specific decisions to make with clear go-live implications attached to each.

**Business Owners were consulted at the right moments and protected from the wrong ones, which kept sprint velocity intact.** I established the BO involvement model for the programme: BOs join for problem framing, scope decisions, and sprint goals; out of routine grooming and sizing unless a business decision is needed. Sprint 2 grooming ran without BO attendance and stayed on schedule. BOs had clear access points without becoming a bottleneck in every session.

---

### Solution Validation

*L2 descriptor: Independently assesses feasibility and constraints, interoperability, system capabilities. Develops interactive prototypes to validate problem and solution through rapid testing cycles. Analyses incidents to determine possible solutions and business impact.*

**Sprint 3 delivered officer-facing value rather than stalling on an environment that didn't exist, because the constraint was caught before planning locked scope.** I identified that the WOG AD UAT environment would not be available for Sprint 3 testing — a blocker not yet visible in the sprint plan. I recommended deferring four auth stories and replacing them with filter and apply-loop work that had no environment dependency. The sprint advanced towards the programme OKRs without losing a week mid-delivery to a blockers the team would have discovered too late.

**A six-week SSO dependency chain that had not been logged anywhere in the programme was surfaced before it could become a Sprint 5 surprise.** Assessing the CSC SSO integration, I identified that WOG AD must complete before documents go to CSC, and CSC needs four weeks on their end — a minimum six-week chain from WOG AD kickoff. Neither the dependency nor the lead time existed in any tracker. Surfacing it early gave the programme the runway to act; finding it at Sprint 5 planning would have forced an unplanned deferral.

**The ingestion validation rules were interrogated rather than accepted as fixed, producing a quantified recommendation the BO could decide against.** Rather than treating the 75% rejection rate as a hard constraint, I examined actual rejection patterns in the live OTG dataset to separate data quality failures (fixable at source) from overly conservative validation rules (fixable in the system). The analysis showed two rule changes could lift the valid catalogue from 160 to 350–400 records — giving the BO a concrete trade-off rather than a binary choice between "go live thin" or "wait for agency data cleanup."

---

### Quality

*L2 descriptor: Designs comprehensive test scenarios and drives user acceptance testing, ensuring solution solves identified problems and delivers measurable value throughout the delivery lifecycle.*

**QA closed stories against testable behaviour, not engineering judgement, because acceptance criteria specified exact states and failure conditions.** For OTG ingestion stories, ACs covered five dimensions: ingestion (records with valid data appear in the listing), lifecycle management (records with closing dates in the past do not appear), validation (records with missing required fields are rejected with a logged error), scheduling (the job runs on the configured schedule), and failure handling (failures produce an alert and do not corrupt existing records). The QA engineer could verify each independently without needing to ask the PM what "done" meant.

**Business Owners accepted stories against user-facing outcomes rather than engineering definitions of done, because sprint closure required their sign-off.** I proposed the rule that sprint closure is gated on BO sign-off of user stories in UAT — the BO moves stories from UAT to Done, engineers move sub-tasks. The team adopted it at the 4 June team meeting. This put the final acceptance gate with the people accountable for business value, not with the people who built the feature.

**The QA engineer and Business Owners worked in separate environments with clear purposes, eliminating noise from both.** I established the QA and UAT environment separation: QA for engineer-driven AC verification; Compass UAT for user-driven acceptance testing. This gave each audience the right working conditions — engineers testing completeness without BO oversight, and BOs validating usability without in-progress engineering changes getting in the way.

---

### Domain Expertise

*L2 descriptor: Demonstrates solid understanding of primary government business domain including regulatory frameworks and operational constraints.*

**Data integrity and compliance constraints shaped product decisions from lived operational experience, not second-hand policy summaries.** I maintained operational ownership of OTG platform management across ~113,000 active WOG users — monthly IM8 log reviews (failed logins, privileged user actions), account lifecycle reviews, and POCDEX-OTG batch job monitoring. When those same constraints appeared as CareerCompass product decisions — around ingestion rules, session security, and POCDEX data contracts — I understood their operational consequences, not just their policy basis.

**CareerCompass product decisions were grounded in the full WOG talent mobility ecosystem, including upstream and downstream data flows.** I developed working knowledge of OTG, POCDEX, WOG Active Directory, CSC SSO, and the agency-level HR data pipelines that govern how officer identity, competency, and opportunity data move across government systems. This cross-system view let me identify integration risks (the POCDEX data contract implications, the CSC SSO chain) that a product-only lens would have missed.

**Regulatory and procurement timelines were integrated into programme planning, not treated as someone else's problem.** Familiarity with IM8 governance standards, ARK document management requirements, CV6 invoicing mechanics, and the VAPT schedule (vulnerability assessment and penetration testing starting early August) shaped how I sequenced sprint work and where I flagged risk — connecting operational compliance requirements to delivery decisions before they surfaced as surprises.

---

### Technical Expertise

*L2 descriptor: Demonstrates competency in agile practices, cloud platforms, data concepts, AI, and systems integration to facilitate productive discussions between business and technical stakeholders.*

**A production data parsing bug was resolved at the right layer — with an interim fix and a tracked spike — because the business analyst co-diagnosed the issue rather than waiting for an engineering briefing.** The OTG nil-date issue ("00/01/1900" as OTG's sentinel for evergreen opportunities) surfaced as a unit test failure. I diagnosed that it needed an interim fix in the transform layer to unblock Sprint 3 import, and a robust nil-date spike in Sprint 4 to derisk the broader pattern. The fix landed without delaying the sprint; the spike is tracked for Sprint 4.

**A cross-squad data contract was translated into a specific product constraint the engineering team could build against, rather than an open question.** Reviewing the POCDEX data contract, I understood what OTEP-Core would implement (`source_system`, `job_id`) and what they would not (artificial sync of `is_primary` vs `is_main_position`, guaranteed array ordering), and what that meant: OTEP must handle real-world HR data inconsistencies in its own layer. I translated this directly into ACs that Léo could work against without needing a follow-up technical session.

**A feature was specified at a level of precision that prevented a build-then-rework cycle.** OTEP-319 (FormSG tracking params) distinguished the product intent (append opportunity ID tracking param to FormSG redirect URL), the implementation blocker (PostHog procurement — not a technical constraint), and the interim behaviour (fire `click_apply_formsg` analytics event before redirect). This kept the story from being built as either "skip tracking entirely" or "block on PostHog" — two outcomes that would have required rework. The team built the right interim state and the follow-up gate was logged.

---

## Ownership

*L2 descriptor: Independently own assigned tasks and projects. Identify and address issues proactively with minimal guidance. Identify opportunities and recommend next steps to improve processes or outcomes.*

**A blocker that had been stagnant since Sprint 1 was resolved in a single briefing, because the problem was converted from a risk log item into a specific ask for a specific person.** The WOG AD onboarding blocker had no movement for weeks. I identified `careercompass.gov.sg` as the unblocking domain, briefed Adrian with two concrete asks (COMET onboarding status; approval to test against WOG AD Prod), and got the intranet URL submitted — starting the two-week approval clock. The information to act was available before; the missing piece was translating it into action.

**Planning ceremonies focused on capacity and sequencing rather than hygiene, because board issues were cleared before the room convened.** Before Sprint 2 finalisation, I identified and cleared 12 Jira board actions across Sprint 2, Sprint 3, and Sprint 4+. Before Sprint 4 planning, I created two new tickets, fixed two AC conflicts flagged by the tech lead, and confirmed a cross-squad architecture risk — all in a 1h45 window before the 14:00 ceremony. In both cases the session time was protected for the decisions that actually require the room.

---

## Strategic Alignment

*L2 descriptor: Align tasks with team goals and priorities. Focus on tasks that provide most expected business value. Adapt to changing priorities independently.*

**Sprint 3 delivered measurable officer-facing value after a mid-planning blocker, because scope was rebuilt independently and sequenced against what could actually proceed.** When the WOG AD UAT environment gap was confirmed, I replaced four auth stories with filter and apply-loop work — sequenced by what was groomed, what had live dependencies, and what would deliver value without the missing environment. Sprint 3 still advanced the programme OKRs. The team did not lose the sprint or wait for a manager to replan.

**A Sprint 4 infra blocker that nobody had logged was avoided, because POCDEX plumbing stories were staggered two sprints ahead.** Sequencing OTEP-271 and OTEP-203 into Sprint 3 rather than Sprint 4 ensured the infrastructure would exist before the Sprint 4 ringfencing feature needed it. The decision produced no visible Sprint 3 deliverable — but without it, Sprint 4 would have blocked on infra that wasn't there. Nobody asked for this; the dependency was spotted and acted on.

**A scope cut was defensible to senior stakeholders because it was framed against programme direction, not just capacity.** Descoping FormSG pre-fill from MVP was argued not as "we don't have time" but as "FormSG is the MVP redirect vehicle; OTEP owns the long-term apply experience, and building complexity into a path the programme will deprecate in R1 is the wrong investment." This rationale — traced to the 2026-03-12 steering direction — gave Jace and Adrian a position they could stand behind, not just a delivery trade-off they had to accept.

---

## Culture and Organisational Influence

*L2 descriptor: Collaborate with peers and stakeholders to ensure tasks are executed effectively. Suggest improvements that enhance team effectiveness. Share knowledge, resources, successes and failures openly.*

**Real behaviour change happened beyond the room — at least one attendee built and shared an AI synthesis assistant across their own team — because the knowledge sharing session was grounded in a working stack, not conceptual advice.** I presented at the PMP Learn-Create-Share Friday (8 May 2026, hybrid, MBC Level 10), sharing a practical AI stack for PM work: AI-powered ideation with Claude, rapid prototyping in Figma, and knowledge management in Notion. The session achieved 4.25/5 satisfaction, 100% would recommend, and 75% of attendees reported greater clarity — up from a baseline where most were doing ad-hoc prompts and two were not using AI at all.

**Cross-squad dependencies were visible to the programme before they became surprises, because they were flagged at the right moment with the right owner.** I surfaced four open dependency questions between the Pathfinder and Core squads — CSC SSO document ownership, competency data delivery format, schema, timeline — before they could land unannounced at Sprint 4 planning. At planning, I raised the POCDEX scope risk from the concurrent job family model discussion, giving the team the option to commit provisionally. Both actions kept dependencies trackable without requiring the manager to monitor them.

**An incoming team member could operate independently faster, because the handover was sequenced by complexity rather than chronology.** I designed a 4-week, 12-session handover plan for Jobelle, ordering onboarding by the mental model she needed to build — POCDEX and OTG ops context first, OTEP delivery second — rather than by what happened most recently. Session 1 ran on 8 June with all reference materials in place beforehand. The structure meant Jobelle had context before taking on live tasks rather than learning on the job.

---

*Period: April–June 2026*
*Role: PM Apprentice assessed against BA (Programme Management) L2 framework*
*Next: Stress-test against AppraisAI (aibots.gov.sg/chats/govtech-appraisal-bot). Submission deadline: 24 July 2026.*
