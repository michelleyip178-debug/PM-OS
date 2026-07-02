# APA Writeup — Michelle Yip
**Framework:** Level 2 — Product Manager II

**Role:** Product Manager (Apprenticeship), Pathfinder

**Programme:** CareerCompass (OTEP)

**Period:** April 2026 — present

---

## Context

I'm a Level 2 Product Manager on the Pathfinder programme, owning Opportunities Listing, WOG AD Authentication, POCDEX integration, and FormSG for CareerCompass (OTEP) — a talent mobility platform for ~5,400 pilot officers across six agencies. I work with a pod of 1 designer, 1 tech lead, and 2 engineers, reporting to Jace and then Adrian (Product Owner).

This period spans discovery through MVP build toward October 2026 go-live. Evidence below is CareerCompass-first; OTG platform work (my prior BAU role, Jan–Mar) appears only where it's directly relevant to a competency and is flagged as such.

---

## Craft & Execution

### Analytical and Product Sense

**Contributor to planning and evaluating features informed by research, feedback, and internal loops.**

When I picked up OTG-to-CareerCompass ingestion, only 160 of 633 live gigs were passing validation — a 75% failure rate that would have shipped a mostly-empty catalogue at go-live. I didn't treat this as a fixed constraint. I separated true data-quality failures from overly conservative validation rules, produced a structured brief mapping three catalogue scenarios (160 baseline / 350–400 with two rule changes / 500+ with agency remediation), and identified Enterprise Singapore alone as holding 178 blocked gigs — 38% of all blocked content. That analysis got v3 ingestion rules (D-026) implemented and unblocked onboarding for Enterprise Singapore.

I also found OTG, Careers@Gov, and CompBank were running three incompatible taxonomies with no agreed canonical structure — a gap nobody had quantified. I mapped all three, identified 210 unmappable Careers@Gov listings, and presented four options with trade-offs. That gave the senior technical lead what he needed to close a decision that had been deferred for weeks and confirm WOG 23 Job Families as canonical.

**Driver in identifying and mitigating risk from a technical and market perspective.**

I identified that the WOG AD UAT environment wouldn't be available in time for Sprint 3 testing — a blocker invisible in the sprint plan until I traced it. Rather than let the sprint stall, I recommended deferring four auth stories and replacing them with filter/apply-loop work that had no environment dependency, so Sprint 3 still delivered officer-facing value against the OKRs.

Separately, I spotted a hidden four-story POCDEX dependency chain that wasn't on anyone's radar, elevated it to its own Epic, and staggered infrastructure stories (OTEP-271, OTEP-203) into Sprint 3 — two sprints ahead of when POCDEX-dependent ringfencing work would otherwise have blocked in Sprint 4.

**Driver in making decisions and prioritisations based on data.**

I defined a three-tier metrics framework in the PRD before a line of code was written: outcome metrics (channel migration ≥50% from OTG to CareerCompass), input metrics (click-through rate, apply-click rate), and guardrail metrics (submission error rate, confirmation email delivery rate) — each with specific PostHog event keys. This gave the Product Owner a way to answer "did it work," not just "did we build it," grounded in the Dec 2026 OKR baselines.

### Product Execution

**Driver for balancing speed, quality, and simplicity within own product.**

I ran Definition of Ready audits before every planning ceremony across 4 sprints. In Sprint 4 alone, I caught 6 AC conflicts before they reached engineering — including OTEP-128's "closed notice" duplicating OTEP-129, and OTEP-129's visibility rule duplicating OTEP-85, both resolved the day before the ceremony. Left unresolved, these would have cost the room re-litigation time and risked the team building the wrong behaviour. I also proposed splitting the QA and UAT environments after noticing they'd become conflated — engineers now verify AC independently before officers test real workflows, which removed a recurring source of ambiguity.

**Consults with engineers and designers on implementation details and understands tradeoffs of balancing speed and quality.**

On the OTG nil-date parsing bug ("00/01/1900" as OTG's sentinel for evergreen opportunities), I co-diagnosed the issue with engineering rather than waiting for a briefing — landing an interim fix in the transform layer to unblock Sprint 3 import, with a tracked spike for the broader pattern in Sprint 4. On the POCDEX data contract, I worked directly with the tech lead to understand what OTEP-Core would and wouldn't guarantee (no synced `is_primary`/`is_main_position`, no guaranteed array ordering), and translated that into ACs the engineer could build against without a follow-up technical session.

---

## Ownership

### Own problem outcomes, help peers

**Independently own assigned tasks and projects.**

I own Opportunities Listing, WOG Authentication, POCDEX, and FormSG end to end — from discovery through to sprint delivery and go-live readiness. On WOG Auth specifically, I led discovery and scoped the feature to the pilot target (6 agencies, ~5,400 officers) and kept ownership of the Keycloak → WOG AD transition plan through UAT.

**Identify and address issues proactively with minimal guidance, and know when to engage appropriate help.**

The WOG AD onboarding blocker had stalled since Sprint 1 with no movement. I identified `careercompass.gov.sg` as the unblocking domain, briefed Adrian with two concrete asks (COMET onboarding status, approval to test against WOG AD Prod), and got the intranet URL submitted — starting the two-week approval clock. I knew this needed Adrian's involvement specifically, not a broader escalation, and framed the ask narrowly enough that it moved in a single conversation.

**Identify opportunities and recommend next steps to improve processes or outcomes in own work.**

I kept a running decisions log (D-001 through D-026+) across the MVP build, capturing rationale, owner, and status for every scope call — zero unlogged scope changes across 4 sprints. When stakeholders questioned a decision, we pointed to the log instead of relitigating from memory. *(Secondary, OTG-related: on OTG operations, I pushed for root-cause fixes in source systems rather than patching batch job mismatches as UI issues — accurate opportunity data now flows to CareerCompass without a recurring workaround.)*

---

## Strategic Alignment

### Align own work with team strategy

**Align tasks with team goals and priorities.**

I changed how the team wrote sprint goals — from framing around delivery tasks (e.g. "ship the listing endpoint") to framing around officer outcomes (e.g. "officers can see which roles they're eligible for") — giving the team a standard to push back on scope creep without escalating every time. That framing directly ladders to the OTEP OKRs: my KRs (ship unified Opportunities, ship WOG AD authentication, deliver POCDEX-side authorisation, hold MVP scope discipline) map straight to OKR 2 (1,850 officers applied for dev opportunities by Q4 2028) and the North Star (50% of officers complete one dev action by Dec 2028).

**Focus on tasks that provide most expected business value.**

When the OTG ingestion catalogue was stuck at 25% valid records, I didn't chase every possible data-quality fix — I isolated the two rule changes that would lift the catalogue from 160 to 350–400 records with no agency dependency, and sequenced agency-level remediation (which needed Enterprise Singapore's cooperation) as a separate, lower-priority track. That kept the team working on the highest-leverage fix first instead of spreading effort evenly across all data-quality issues. Similarly, when FormSG pre-fill came up for MVP, I argued it should be descoped: FormSG is the MVP apply vehicle, not the long-term experience CareerCompass owns, so investing in it was the wrong trade against scope that actually moves the needle for October go-live.

**Adapt to changing priorities independently.**

When the WOG AD UAT environment gap surfaced mid-Sprint-3-planning, I didn't wait for a manager to replan the sprint. I resequenced independently — deferring four auth stories, pulling in filter and apply-loop work that had no environment dependency — so the sprint still advanced the OKRs instead of stalling on a blocker outside my control. The zero unlogged scope changes across 4 sprints (from the decisions log) is the same discipline applied consistently: priorities shifted repeatedly across the build, and each shift was captured and re-aligned to the goal rather than just absorbed as scope creep.

---

## Culture and Organizational Influence

### Contribute to team culture

**Collaborate with peers and stakeholders to ensure tasks are executed effectively.**

On POCDEX, I worked directly with the Core squad (Imelda's team) to negotiate the data contract — what fields they'd guarantee (`source_system`, `job_id`) and what they wouldn't (synced `is_primary`/`is_main_position`, array ordering) — and translated that into ACs my engineer could build against without a follow-up session. I surfaced four open cross-squad dependency questions (CSC SSO document ownership, competency data format, schema, timeline) before they could land unannounced at Sprint 4 planning, giving both squads room to plan around them instead of reacting late.

**Address minor conflicts constructively and respectfully.**

When OTEP-128 and OTEP-129's acceptance criteria turned out to duplicate each other's "closed opportunity" logic, and OTEP-129 duplicated OTEP-85's visibility rule, I resolved both directly in Jira the day before Sprint 3 planning rather than let it surface as a disagreement in the room. Reviewing OTEP-129's original AC ("closing_date >= 7 days" vs. the visibility filter's "strictly in the future"), I flagged the rule conflict to the tech lead directly and proposed the fix (>= 7 days belongs to the "Closing soon" label, not the visibility filter) rather than letting the ambiguity sit unresolved into the sprint.

**Suggest improvements that enhance team effectiveness.**

I proposed splitting the QA and UAT environments after noticing they'd become conflated, so engineers verify AC independently before officers test real workflows — removing a recurring source of confusion about what "done" meant. I also proposed the rule that sprint closure is gated on Business Owner sign-off of user stories in UAT (engineers move sub-tasks; BOs move stories), which the team adopted — putting the final acceptance gate with the people accountable for business value.

**Share knowledge, resources, as well as successes and failures openly to ensure team success.**

I ran a cross-agency AI Learn-Create-Share session for the GovTech PM community — 4.25/5 satisfaction, 75% of attendees reported greater clarity on using AI in their own work, and at least one attendee went on to build and share their own synthesis assistant. For OTG, I designed a 4-week, 12-session handover for my successor sequenced by the mental model she needed to build (POCDEX/OTG ops context first, delivery second) rather than by chronology, so she had context before inheriting live tasks rather than reverse-engineering a stack of documents on her own.

---

## Career Focus

1. Get sharper at problem framing — I'm strong at structured discovery but want to generate stronger hypotheses earlier, before I've fully mapped the space.
2. Lead trade-off conversations with senior stakeholders more independently — I still lean on manager support in those moments more than I'd like.
3. Build data literacy — define better metrics and actually use analytics to drive decisions, not just reference numbers that already exist.

---

## Next Steps

- Ship OTEP MVP by October 2026: WOG Auth, Opportunities Listing, and POCDEX integration working end-to-end.
- Lead R1 scoping: kick off discovery for FormSG pre-fill and sequence what comes after MVP.
- Get tighter on PM fundamentals: PRD writing, prioritisation, and connecting every delivery decision to a measurable outcome.

---

## Pending Before Submission

- [ ] 178 gigs unblocked — confirm post-v3 count with engineering
- [ ] 4.25/5 and 75% clarity figures (LCS session) — locate the post-session feedback form to back these numbers
- [ ] LCS attendee who built their own synthesis assistant — get their name and written confirmation (Slack screenshot or note) rather than citing anonymously
- [ ] WOG Auth go-live date or pilot onboarding count — add once shipped
- [ ] Confirm no **Impact** dimension exists in the PM II schema separate from what's captured under Craft & Execution/Strategic Alignment — the BA framework had Impact as its own rated dimension; the PM II schema as shared doesn't appear to, but worth a direct check before submission in case it's a 5th dimension not yet shared.

---

*Source evidence consolidated from [2026-07-01-W27-apa-writeup.md](2026-07-01-W27-apa-writeup.md) (five-dimension BA-calibrated ratings) and [2026-06-16-W25-ba-l2-apa-self-assessment.md](../archive/2026-W25-Jun15-Jun21/analyses/2026-06-16-W25-ba-l2-apa-self-assessment.md) (BA Programme Management L2 framework), re-mapped against the full Level 2 — Product Manager II schema (Craft & Execution, Ownership, Strategic Alignment, Culture and Organizational Influence — confirmed complete 2026-07-02).*
