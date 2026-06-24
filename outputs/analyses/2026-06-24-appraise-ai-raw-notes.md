# AppraisAI Raw Notes — CY26 Mid-Year APA

**Officer:** Michelle Yip

**Role:** Product Manager Apprentice, OTEP Pathfinder (CareerCompass)

**Period:** April–June 2026

**Level:** Generic Level 2 (Manager)

**Feed into:** AppraisAI at aibots.gov.sg/chats/govtech-appraisal-bot

---

## CONTEXT

- Joined OTEP Pathfinder on 1 April 2026 as PM Apprentice, transitioning from a BA and OTG platform operations background
- First PM role; assessing against BA (Programme Management) Level 2 framework
- Evaluation period covers Sprints 1–4 of CareerCompass delivery
- No rotation history this cycle
- Operated across three workstreams simultaneously: OTG platform BAU (winding down), OTEP Pathfinder delivery (ramping up), and cross-squad dependency management

---

## IMPACT

- Sprint 3 hit near-goal: filters, apply flow, and deep-link all reached QA
- Sprint 4 active and on track — goal: complete, usable listing experience (search, filter, sort, data currency)
- OTG data quality problem caught early: only 160 of 633 live gigs (25%) were passing ingestion validation. Reframed as a PM decision, not an engineering bug. Produced a discovery brief identifying that two field scope decisions alone could lift the catalogue to 350–400 records without any agency action. Enterprise Singapore alone held 178 blocked gigs (38% of all blocked content) — surfaced for remediation first.
- Six-agency pilot launch target remains on track: PSD, ESG, MDDI, URA, MCCY, CAAS
- Decisions log: D-001 to D-026+ — every scope call logged with rationale, owner, and status. 49 open items tracked; none unaccounted for.
- OTG monthly report delegated to Jobelle (joining 3 Jun) — recurring overhead removed, freeing PM capacity for delivery work
- R1 competitive analysis completed: structured sweep across 7 internal mobility platforms, three R1 prototyping candidates identified and briefs written for Adrian, Pow Hwee, and Amber

---

## CRAFT & EXECUTION

**Requirements and AC quality:**
- OTEP-192 (OTG data ingestion) arrived at Sprint 3 planning with mechanism-oriented ACs — rewrote with four outcome-based ACs covering ingestion, lifecycle, validation, scheduling, failure handling. Story closed QA without an AC dispute.
- Two AC conflicts caught and resolved in Jira the day before Sprint 3 planning: OTEP-128 contained a "closed notice" duplicating OTEP-129; OTEP-129's visibility rule duplicated OTEP-85. Both cleared before the room. Would have cost 20 mins of scope re-litigation and risked incorrect build.
- OTEP-319 (FormSG tracking params) specified three distinct things: the product intent (append opportunity ID to redirect URL), the implementation blocker (PostHog procurement, not a tech constraint), and the interim behaviour (fire analytics event before redirect). Prevented "skip tracking entirely" or "block on PostHog" — both would have required rework.

**Technical co-diagnosis:**
- Nil-date parsing bug ("00/01/1900" as OTG's sentinel for evergreen opportunities) co-diagnosed with engineering: interim fix at transform layer to unblock Sprint 3; robust spike (OTEP-358) scoped and tracked for Sprint 4. Didn't wait for an engineering briefing.
- POCDEX data contract reviewed and translated into product constraints: identified what Core would implement (`source_system`, `job_id`) and what they would not (artificial `is_primary`/`is_main_position` sync), and wrote ACs Léo could build against without a follow-up session.

**Ingestion analysis:**
- Interrogated the 75% OTG rejection rate rather than accepting it as fixed. Separated data quality failures (fixable at source) from overly conservative validation rules (fixable in the system). Two rule changes identified that could lift the catalogue from 160 to 350–400 records — gave the BO a real trade-off rather than a binary choice.

**Measurement:**
- Defined success metrics in three tiers as part of the PRD before build: outcome metrics (channel migration ≥50%), input metrics (click-through rate, apply-click rate), guardrail metrics (submission error rate, confirmation email delivery rate) — each with specific PostHog event keys. Moved the team from "did we build it" to "did it work."

---

## OWNERSHIP

**Unblocking without being asked:**
- WOG AD onboarding blocker had stalled since Sprint 1 with no movement. Identified `careercompass.gov.sg` as the unblocking domain, briefed Adrian with two concrete asks (COMET onboarding status; approval to test against WOG AD Prod), got the domain submitted — starting the 2–4 week approval clock (Jun 10).
- Six-week SSO dependency chain (WOG AD → CSC, 4 weeks) was not logged anywhere in the programme. Surfaced it before Sprint 5, giving the programme runway to act.
- POCDEX elevated to its own Epic (Michelle's call) — improved cross-squad risk tracking before it became a sprint blocker.

**Pre-planning hygiene:**
- Before Sprint 2 finalisation: identified 12 Jira board actions across Sprint 2, 3, and 4+ and cleared all before planning.
- Before Sprint 4 planning: created two new tickets, fixed OTEP-87 AC conflicts flagged by tech lead twice, confirmed cross-squad architecture risk with Pow Hwee — all in a 1h45 window before the 14:00 ceremony. Board was clean going in; session stayed on capacity and sequencing.

**Knowing when to engage help:**
- On OTG data quality: drove the discovery brief and PM decisions herself; correctly routed actual data clean-up to DevOps + agencies rather than trying to own it.
- On competency architecture: surfaced the dependency to Imelda and Core (Kingsley/Pow Hwee) rather than guessing on the design. Architecture resolved in a single Jun 11 session.

**Managing own workload:**
- Created OTEP-427 (ingestion tightening) and OTEP-397 (Excel upload discovery) as time-boxed PM spikes that don't load engineering capacity. Shows judgement about protecting team sprint capacity while keeping PM-owned discovery moving.
- Honest self-catch: admin/booking tasks slip under high meeting-density weeks. Fix is protecting deep-work blocks — a workflow habit, not a capability gap.

---

## STRATEGIC ALIGNMENT

**Scope discipline:**
- Sprint 3 scope rebuilt independently mid-planning when WOG AD UAT environment gap was confirmed. Replaced four auth stories with filter and apply-loop work — sequenced by what was groomed, unblocked, and would deliver officer-facing value. Sprint still advanced programme OKRs.
- FormSG pre-fill descoped from MVP not as a capacity argument but as a programme call: FormSG is the MVP vehicle; building complexity into a path the programme will deprecate in R1 is the wrong investment. Grounded in the 2026-03-12 steering direction. Gave senior stakeholders a position to stand behind.
- OTEP-132 and SJR deferred to R1; supervisor visibility scoped out after GK's concern (not a surveillance tool); OTEP-403 edge cases scoped MVP vs post-MVP. Repeated pattern: highest-value cut, not the easiest one.

**Forward sequencing:**
- POCDEX plumbing stories (OTEP-271, OTEP-203) staggered into Sprint 3 rather than Sprint 4, so infrastructure exists before Sprint 4 ringfencing (OTEP-127) needs it. No visible Sprint 3 deliverable — but without it Sprint 4 would have blocked on infra that wasn't there. Nobody asked for this.
- Confirmed R1–R3 roadmap shape (R1 Apply / R2 Learning / R3 Career journey) and framed plan-of-record around Pow Hwee's S2–S6 shape. Starting to operate at "translate goals into actionable plans."

**Adapting to senior direction:**
- Absorbed GK's push to pull gap analytics earlier and top-down transition-plan sequencing into scoping decisions rather than letting them derail the sprint.
- Confirmed SteerCo scope: North Star brief and transition plan owned by other teams; Michelle's SteerCo job is co-prepping the consolidated demo with Imelda/Rama/Pow Hwee. Correctly scoped own responsibility without over-claiming.

---

## CULTURE AND ORGANIZATIONAL INFLUENCE

**Knowledge sharing with downstream adoption:**
- PMP Learn-Create-Share session (8 May 2026, hybrid, MBC Level 10): shared a practical AI stack for PM work (Claude for synthesis, Figma for prototyping, Notion for knowledge management). 4.25/5 satisfaction; 100% would recommend; 75% reported greater AI clarity. At least one attendee built and shared a synthesis assistant across their own team — impact beyond the room.

**Cross-squad dependency coordination:**
- Four open dependency questions (Pathfinder ↔ Core) surfaced before they became Sprint 4 surprises: CSC SSO document ownership, competency data format, schema, timeline.
- Jun 11 Dependencies Sync: architecture resolved — in-code interface, no foreign keys, store code after label lookup at import, two new Core endpoints scoped. Facilitated alignment rather than just raising the issue.

**Sharing successes and failures openly:**
- Weekly reviews name slips as readily as wins (sprint goal scoped too wide, booking-task miss). Drives a learning culture by modelling it.
- Honest about scope risks in the open: OTG data quality (25% catalogue coverage), VAPT timeline (November more realistic than October), competency governance as a policy decision not a product one.

**Team handover and continuity:**
- Jobelle handover structured by complexity, not recency: OTG ops context first, OTEP delivery second. 4-week, 12-session plan. Session 1 ran 8 Jun with reference materials in place beforehand. Jobelle could build a mental model before taking on live tasks.

**BO engagement model:**
- Defined the Business Owner involvement model: BOs join for problem framing, scope decisions, sprint goals; out of routine grooming unless a business decision is needed. Sprint 2 grooming ran without BO attendance and stayed on schedule.

---

## CAREER FOCUS

- **Recommend-first (BA→PM shift):** Lead with a clear recommendation and rationale, not a menu of options. Evidenced in artefacts (R1 brief, taxonomy recommendation); developing in live senior-stakeholder rooms.
- **Stakeholder influence without escalation:** Own routine cross-squad alignment independently without routing each call upward.
- **Roadmapping and R1 scoping:** Own a defensible, sequenced R1 product plan — translating programme goals into grooming-ready epics.

---

## NEXT STEPS (next 6 months)

- **Oct go-live:** Complete Sprint 4–9 delivery (C@G ingestion, WOG AD auth, ringfencing), support UAT (Sep), close open dependency chains (POCDEX, CSC SSO), manage VAPT remediation cycle.
- **R1 scoping:** Shape four R1 epics (status tracking, native apply, agency creation, smart matching) into grooming-ready stories by Q4. Get Mark's sign-off on scope (open item #40).
- **Growth:** Consistent recommend-first behaviour evidenced in grooming and senior stakeholder calls. Build toward L3 through R1 delivery cycle.
- **Metrics baseline:** Establish officer funnel baseline from go-live data (PostHog: login → search → detail → apply) to anchor CY27 OKR targets.
