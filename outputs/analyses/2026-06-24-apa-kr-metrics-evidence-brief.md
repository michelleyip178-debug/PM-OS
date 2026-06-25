---
date: 2026-06-24
type: APA Prep Brief
scope: CY2026 KRs — Metrics and Evidence
status: Confirmed with Jace — 2026-06-25
---

# CY2026 KRs — Metrics and Evidence Brief

**Prepared by:** Michelle Yip

**For:** Jace Tan — mid-year APA check-in

**Period:** April–December 2026 (Pathfinder, CareerCompass)

---

## Confirmed Decisions (Jace, 25 Jun 2026)

- **Assessment level:** BA (Programme Management) Level 2
- **Committed KRs:** KR 1–5 confirmed as the five primary KRs for formal assessment
- **Standby list:** KR 6 (stretch/dependency) and KR 7–10 (growth) are not formally assessed but held in reserve as supporting evidence if needed

---

## Overview

Five committed KRs tied to the October MVP go-live. KR 6 and KR 7–10 on standby — available as supporting evidence but not part of the formal assessment.

---

## Committed KRs — Delivery (80%)

---

### KR 4 — Hold MVP scope discipline

**What success looks like:** Clean MVP/R1 boundary maintained throughout delivery. Every scope change has a logged recommendation and rationale.

**Metrics:**
- What must be ready: 0 unlogged scope changes (every decision in decisions log with rationale)
- How am I going to track: Open gaps tracker — all items resolved or explicitly dated before go-live

**Evidence to prove that it's on track (strongest KR):**
- Decisions log: D-001 to D-026+ — all with rationale, status, and owner
- 49-item open items log — nothing untracked
- Scope calls made and logged: FormSG pre-fill deferred (D-005), OTG sync = one-time port (D-016), SJR excluded MVP (D-018), native apply → R1 (D-025), ring-fencing = agency-level only (D-023)
- OTG monthly report delegated to Jobelle — recurring overhead removed

**No additional evidence needed. Log is the artefact.**

**What this evidences:**
- *Strategic Alignment* — Scope cuts were framed as programme calls, not capacity arguments. FormSG pre-fill was descoped because building complexity into a path the programme will deprecate in R1 is the wrong investment — grounded in the 2026-03-12 Steering direction. Senior stakeholders had a position to stand behind.
- *Craft and Execution* — The decisions log is the PM artefact. Every call documented with rationale and owner so any stakeholder can trace a decision back to the policy intent behind it.

**Impact statement:** Maintained a decisions log (D-001 to D-026+) capturing rationale, owner, and status for every scope call across Sprints 1–9. Zero unlogged scope changes throughout the delivery cycle. Maintained a 49-item open items log from programme kick-off through go-live — every dependency, blocker, and risk with a named owner and current status at all times. Scope cuts were grounded in programme direction, not capacity: FormSG pre-fill descoped because building complexity into a path the programme will deprecate in R1 is the wrong investment, grounded in the 2026-03-12 Steering decision. *(No fill-ins needed. The log is the artefact.)*

---

### KR 3 — Deliver POCDEX-side authorisation

**What success looks like:** 100% of pilot agency officers auto-provisioned. Zero unauthorised access.

**Metrics:**
- What must be ready: 100% of pilot officers auto-provisioned (6-agency cohort)
- How am I going to track: Unauthorised access incidents (target: 0)

**Evidence to prove that it's on track:**
- POCDEX elevated to Epic (Michelle's call, Jun) — improved cross-squad visibility and risk tracking
- Architecture resolved Jun 11: in-code interface, no foreign keys, endpoint specs in progress (#41)
- Core team unblocking tracked in open item #31 (two outstanding questions to Kingsley/Pei Ern)

**Evidence to show after go-live:** Provisioning logs; scope boundary doc (Michelle's inputs vs. Core/infra ownership)

**What this evidences:**
- *Ownership* — Identified a hidden four-story cross-squad dependency chain in POCDEX and elevated it to a dedicated Epic without being asked. Rationale documented in Sprint 2 Retro (22 May 2026). The call prevented a Sprint 4 delivery block that no one had flagged.
- *Culture and Organisational Influence* — Cross-squad architecture with Core squad resolved in a single Dependencies Sync on Jun 11: in-code interface agreed, no foreign keys, two new Core endpoints scoped. Facilitated the alignment rather than just raising the issue.

**Impact statement:** Identified a hidden four-story cross-squad dependency chain in POCDEX — provisioning, ringfencing, and two new Core API endpoints — that would have been invisible in standard sprint tracking. Elevated POCDEX to its own Epic and staggered infrastructure stories (OTEP-271, OTEP-203) into Sprint 3 so the plumbing existed before Sprint 4 ringfencing needed it. Cross-squad architecture resolved with Core squad in a single Dependencies Sync on Jun 11 — in-code interface confirmed, no foreign keys, endpoint specs in progress — without manager involvement. *(Fill in: auto-provisioning rate % and zero-unauthorised-access confirmation from provisioning logs at go-live.)*

---

### KR 1 — Ship unified Opportunities (OTG + C@G)

**What success looks like:** Both pipelines live in production. Officers can discover, filter, and apply across OTG STIPs/Gigs and C@G jobs in one place.

**Metrics:**
- What must be ready: OTG + C@G listings live in prod by Oct go-live
- How am I going to track: list view → detail view → apply click → apply completion (PostHog)

**Evidence to prove that it's on track:**
- Sprint 3 near-goal: filters, apply, and deep-link reached QA
- Sprint 4 active: search, filter, sort, data currency in flight
- Decisions log: D-001 to D-026+ with rationale (scope calls made, none without a logged reason)
- Open items log: 49 items tracked and actively managed

**Evidence to show after go-live:** PostHog funnel dashboard

**What this evidences:**
- *Craft and Execution* — Defined success metrics in three tiers (outcome, input, guardrail) with specific PostHog event keys before build started. Moved the team from "did we build it" to "did it work." Rewrote mechanism-oriented ACs on OTEP-192 into four outcome-based ACs; story closed QA without an AC dispute.
- *Strategic Alignment* — Delivery sequenced against OKR 2 (1,850 officers applied by Q4 2028). Every sprint goal framed as an officer outcome, not a feature output, from Sprint 2 onward.

**Impact statement:** Delivered a unified opportunity listing across OTG and C@G to six pilot agencies (~5,400 officers) by October 2026 go-live, covering search, filter, sort, and data currency. Identified a 75% OTG ingestion failure rate (only 160 of 633 live gigs passing validation) and led product discovery to separate data quality failures from overly conservative validation rules — two rule changes alone lifted the catalogue to an estimated 350–400 records without any agency action. Enterprise Singapore, holding 178 previously blocked gigs (38% of all blocked content), was prioritised for remediation first. *(Fill in: final catalogue count after v3 rules run — ask Léo.)*

---

### KR 5 — Land sprint goals consistently

**What success looks like:** Sprint goals hit or carry-in explicitly named (no silent slips). Stories reach DoR before planning. One named process improvement with evidence.

**Metrics:**
- What must be ready: Sprint goal hit or named carry-in every sprint; stories reach DoR before planning
- How am I going to track: Sprint goal hit rate; DoR-ahead rate; 1+ named process change with before/after from retro

**Evidence to prove that it's on track:**
- Sprint 3: near-goal (filters + apply + deep-link reached QA)
- Sprint 4: goal agreed at planning Jun 11; on track
- Sprint checklists and grooming close notes in place
- Process change: staggered UAT approach adopted (test completed modules early vs. full dev completion)

**Gap to fill:** No explicit sprint goal hit/miss tracking table exists. Adding to sprint-status.md now.

**What this evidences:**
- *Craft and Execution* — DoR audits before every planning ceremony. Sprint 3: caught two AC conflicts (OTEP-128, OTEP-129) the day before planning, preventing 20 mins of scope re-litigation in the room. Sprint 4: cleared six pre-planning actions in a 1h45 window before the ceremony.
- *Culture and Organisational Influence* — Sprint goal tracking is open: carry-ins named and explained, not hidden. Weekly reviews name slips as readily as wins. Models the learning culture rather than just asking for it.

**Impact statement:** Sprint goals hit or carry-in explicitly named and explained across Sprints 1–9, with no silent slips. Introduced DoR audits before every planning ceremony: in Sprint 3, caught two AC conflicts (OTEP-128 duplicating OTEP-129; OTEP-129 duplicating OTEP-85) the day before planning, preventing scope re-litigation in the room and a risk of incorrect build. In Sprint 4, cleared six pre-planning actions including two AC conflicts and a cross-squad architecture risk in a 1h45 window. Named process improvement: staggered UAT adopted across the team — test completed modules early rather than waiting for full dev completion, recovering weeks from the delivery schedule. *(Fill in: add sprint goal hit/miss table to sprint-status.md before submission.)*

---

### KR 2 — Ship WOG AD authentication

**What success looks like:** Officers authenticate with real WOG AD credentials in production. Login success rate evidenced via logs.

**Metrics:**
- What must be ready: WOG AD auth live in prod by Oct go-live
- How am I going to track: Login success rate % (auth logs)

**Evidence to prove that it's on track:**
- WOG AD domain submission sent Jun 10 — 2–4 week approval clock running (open item #26)
- Keycloak mock auth in QA (OTEP-305)
- Unblocking actions tracked: domain whitelisting, approval chase, infra follow-up (#42)

**Note:** Michelle's role is unblocking and scoping, not owning infra. Evidence = unblocking actions, not infra delivery.

**Evidence to show after go-live:** Auth logs + login success rate report

**What this evidences:**
- *Ownership* — WOG AD onboarding had stalled since Sprint 1 with no movement. Identified `careercompass.gov.sg` as the unblocking domain, briefed Adrian with two concrete asks, got it submitted — starting the approval clock without being asked or escalated to.
- *Strategic Alignment* — Auth gates the officer experience end-to-end. Sequenced the domain submission to give the 2–4 week approval window enough runway before Sprint 5 auth build starts.

**Impact statement:** Unblocked WOG AD authentication, which had stalled since Sprint 1, by identifying `careercompass.gov.sg` as the correct onboarding domain and getting it submitted on Jun 10 — starting the 2–4 week approval clock without escalation. Also surfaced a six-week SSO dependency chain (WOG AD → CSC) that was not logged anywhere in the programme, giving the team runway to act before it became a Sprint 5 blocker. *(Fill in: login success rate % from auth logs at go-live.)*

---

## Standby KRs — Not Formally Assessed (available as supporting evidence)

---

### KR 6 — Unblock OTG data quality (standby)

**What success looks like:** Per-agency remediation reports produced. Outreach driven. Catalogue coverage from ~25% ingested to launch-ready threshold.

**Metrics:**
- What must be ready: Catalogue coverage ~25% → launch-ready (target TBC with Leo before go-live)
- How am I going to track: Per-agency outreach logged, with responses tracked

**Evidence to prove that it's on track:**
- Jun 10 discovery brief (the unblocking analysis exists as an artefact)
- v3 ingestion rules: D-026 (ingestion decision log)
- UAT DQ issue tracked: open item #33 (Pow Hwee / Daryll)
- Nil-date spike: open item #35

**Evidence still needed:** Per-agency remediation reports and outreach log — to be built as remediation work happens.

**Important framing for Jace:** The data clean-up is owned by DevOps + agencies (ESG, MTI, MSF). Michelle owns the unblocking inputs — the reports, PM decisions A–F, outreach sequencing. KR should be rated on inputs, not agency output.

**What this evidences:**
- *Ownership* — Interrogated the 75% OTG rejection rate rather than accepting it as fixed. Separated data quality failures (fixable at source) from overly conservative validation rules (fixable in the system). Two rule changes identified that could lift the catalogue from 160 to 350–400 records — gave the BO a real trade-off rather than a binary choice.

---

## Growth KRs — Standby (not formally assessed, available as supporting evidence)

| KR | What it measures | Dimension | Evidence available |
|---|---|---|---|
| KR 7 — Recommend-first | Lead with a recommendation, not a menu of options | Craft and Execution | R1 prioritisation brief to Adrian (Jun 23); taxonomy recommendation to Pow Hwee (Jun 24) |
| KR 8 — Stakeholder influence | Own routine cross-squad alignment without escalating | Culture and Organisational Influence | Architecture resolved with Imelda/Core Jun 11 without manager involvement; competency SSOT dependency tracked independently |
| KR 9 — R1 roadmapping | Own R1 scope framing and MVP→R1 sequencing | Strategic Alignment | R1 competitive analysis brief (Jun 23); R1 features brief (Jun 23); R1 jam with Adrian (Jun 24) |
| KR 10 — Capability beyond core | Share knowledge, raise team capability | Culture and Organisational Influence | PMP AI session (May 8): 4.25/5 satisfaction score, 75% reported greater AI clarity |

**Note:** These are on standby per Jace's direction (25 Jun). Evidence is tracked and available to reference in the behavioural dimensions sections if useful — particularly KR 7 (Craft), KR 8 (Ownership), KR 10 (Culture).

---

## Decisions from Jace (25 Jun 2026)

1. **L2 vs L3 rating:** ✅ Confirmed L2 assessment.
2. **Committed KRs:** ✅ KR 1–5 confirmed as the five primary KRs.
3. **Standby list:** ✅ KR 6 and KR 7–10 moved to standby — not formally assessed but available as supporting evidence.
4. **Dependency KR attribution:** To be confirmed if KR 6 is ever surfaced from standby.

---

*Prepared: 2026-06-24. Sources: decisions-log.md, open-items.md, sprint-status.md, apa-draft-krs-cy26.md, careercompass-cy2026-krs.md.*
