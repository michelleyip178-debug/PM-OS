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

### KR 1 — Ship unified Opportunities (OTG + C@G)

**What success looks like:** Both pipelines live in production. Officers can discover, filter, and apply across OTG STIPs/Gigs and C@G jobs in one place.

**Metrics:**
- Go/no-go: OTG + C@G listings live in prod by Oct go-live
- Funnel: list view → detail view → apply click → apply completion (PostHog)

**Evidence now:**
- Sprint 3 near-goal: filters, apply, and deep-link reached QA
- Sprint 4 active: search, filter, sort, data currency in flight
- Decisions log: D-001 to D-026+ with rationale (scope calls made, none without a logged reason)
- Open items log: 49 items tracked and actively managed

**Evidence at go-live:** PostHog funnel dashboard (Thomas owns instrumentation)

---

### KR 2 — Ship WOG AD authentication

**What success looks like:** Officers authenticate with real WOG AD credentials in production. Login success rate evidenced via logs.

**Metrics:**
- Go/no-go: WOG AD auth live in prod by Oct go-live
- Login success rate % (auth logs)

**Evidence now:**
- WOG AD domain submission sent Jun 10 — 2–4 week approval clock running (open item #26)
- Keycloak mock auth in QA (OTEP-305)
- Unblocking actions tracked: domain whitelisting, approval chase, infra follow-up (#42)

**Note:** Michelle's role is unblocking and scoping, not owning infra. Evidence = unblocking actions, not infra delivery.

**Evidence at go-live:** Auth logs + login success rate report

---

### KR 3 — Deliver POCDEX-side authorisation

**What success looks like:** 100% of pilot agency officers auto-provisioned. Zero unauthorised access.

**Metrics:**
- % of pilot officers auto-provisioned (target: 100% of 6-agency cohort)
- Unauthorised access incidents: 0

**Evidence now:**
- POCDEX elevated to Epic (Michelle's call, Jun) — improved cross-squad visibility and risk tracking
- Architecture resolved Jun 11: in-code interface, no foreign keys, endpoint specs in progress (#41)
- Core team unblocking tracked in open item #31 (two outstanding questions to Kingsley/Pei Ern)

**Evidence at go-live:** Provisioning logs; scope boundary doc (Michelle's inputs vs. Core/infra ownership)

---

### KR 4 — Hold MVP scope discipline

**What success looks like:** Clean MVP/R1 boundary maintained throughout delivery. Every scope change has a logged recommendation and rationale.

**Metrics:**
- 0 unlogged scope changes (every decision in decisions log with rationale)
- Open gaps tracker: all items resolved or explicitly dated before go-live

**Evidence now (strongest KR):**
- Decisions log: D-001 to D-026+ — all with rationale, status, and owner
- 49-item open items log — nothing untracked
- Scope calls made and logged: FormSG pre-fill deferred (D-005), OTG sync = one-time port (D-016), SJR excluded MVP (D-018), native apply → R1 (D-025), ring-fencing = agency-level only (D-023)
- OTG monthly report delegated to Jobelle — recurring overhead removed

**No additional evidence needed. Log is the artefact.**

---

### KR 5 — Land sprint goals consistently

**What success looks like:** Sprint goals hit or carry-in explicitly named (no silent slips). Stories reach DoR before planning. One named process improvement with evidence.

**Metrics:**
- Sprint goal hit rate (target: hit or named carry-in every sprint)
- DoR-ahead rate: stories reach DoR before planning session starts
- Process improvement: 1+ named change with before/after from retro

**Evidence now:**
- Sprint 3: near-goal (filters + apply + deep-link reached QA)
- Sprint 4: goal agreed at planning Jun 11; on track
- Sprint checklists and grooming close notes in place
- Process change: staggered UAT approach adopted (test completed modules early vs. full dev completion)

**Gap to fill:** No explicit sprint goal hit/miss tracking table exists. Adding to sprint-status.md now.

---

## Standby KRs — Not Formally Assessed (available as supporting evidence)

---

### KR 6 — Unblock OTG data quality (standby)

---

### KR 6 — Unblock OTG data quality

**What success looks like:** Per-agency remediation reports produced. Outreach driven. Catalogue coverage from ~25% ingested to launch-ready threshold.

**Metrics:**
- Catalogue coverage: ~25% → launch-ready (target TBC with Leo before go-live)
- Per-agency outreach: logged, with responses tracked

**Evidence now:**
- Jun 10 discovery brief (the unblocking analysis exists as an artefact)
- v3 ingestion rules: D-026 (ingestion decision log)
- UAT DQ issue tracked: open item #33 (Pow Hwee / Daryll)
- Nil-date spike: open item #35

**Evidence still needed:** Per-agency remediation reports and outreach log — to be built as remediation work happens.

**Important framing for Jace:** The data clean-up is owned by DevOps + agencies (ESG, MTI, MSF). Michelle owns the unblocking inputs — the reports, PM decisions A–F, outreach sequencing. KR should be rated on inputs, not agency output.

---

## Growth KRs — Standby (not formally assessed, available as supporting evidence)

| KR | What it measures | Evidence available |
|---|---|---|
| KR 7 — Recommend-first | Lead with a recommendation, not a menu of options | R1 prioritisation brief to Adrian (Jun 23); taxonomy recommendation to Pow Hwee (Jun 24) |
| KR 8 — Stakeholder influence | Own routine cross-squad alignment without escalating | Architecture resolved with Imelda/Core Jun 11 without manager involvement; competency SSOT dependency tracked independently |
| KR 9 — R1 roadmapping | Own R1 scope framing and MVP→R1 sequencing | R1 competitive analysis brief (Jun 23); R1 features brief (Jun 23); R1 jam with Adrian (Jun 24) |
| KR 10 — Capability beyond core | Share knowledge, raise team capability | PMP AI session (May 8): 4.25/5 satisfaction score, 75% reported greater AI clarity |

**Note:** These are on standby per Jace's direction (25 Jun). Evidence is tracked and available to reference in the behavioural dimensions sections if useful — particularly KR 7 (Craft), KR 8 (Ownership), KR 10 (Culture).

---

## Decisions from Jace (25 Jun 2026)

1. **L2 vs L3 rating:** ✅ Confirmed L2 assessment.
2. **Committed KRs:** ✅ KR 1–5 confirmed as the five primary KRs.
3. **Standby list:** ✅ KR 6 and KR 7–10 moved to standby — not formally assessed but available as supporting evidence.
4. **Dependency KR attribution:** To be confirmed if KR 6 is ever surfaced from standby.

---

*Prepared: 2026-06-24. Sources: decisions-log.md, open-items.md, sprint-status.md, apa-draft-krs-cy26.md, careercompass-cy2026-krs.md.*
