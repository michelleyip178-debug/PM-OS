---
date: 2026-06-16
type: MVP Delivery Stocktake
sprint: OTEP-Pathfinder Sprint 4 (active)
owner: Michelle Yip
---

# CareerCompass MVP Delivery Stocktake

**As of:** 16 Jun 2026 (Sprint 4, Day 2)

**Feature Freeze:** Fri 21 Aug (end Sprint 8)

**Go-Live:** Fri 16 Oct (end Sprint 12)

**Sprints remaining to Feature Freeze:** S4 (active) + S5 + S6 + S7 + S8 = 5 sprints

---

## What's Been Delivered (Sprints 1–3 + S4 early Done)

| Area | What shipped | Status |
|------|-------------|--------|
| Foundation | DB conventions, ref table schema, FE repo, core entity tables, POCDEX seed setup, Keycloak auth stub | Done (S1) |
| Listing page | Base layout, listing cards with live OTG data, pagination, design system wired up | Done (S2–S3) |
| Detail page | Detail page consuming real data, backend endpoint, empty/error states | Done (S2–S3) |
| Open/closed handling | BE: don't return closed opportunities; FE: display closed state | Done (S3) |
| OTG data ingestion | Recurring Excel import job (OTEP-192), data model, report format | Done (S3) |
| Login UI | Keycloak-based login page (placeholder auth, WOG AD swaps in later) | Done (S3) |
| Auth infrastructure | OAuth token rotation (OTEP-324), session/redirect wiring | Done (S3–S4 early) |
| Filters (BE) | Handle filtering params, clear filters (BE side) | Done (S3) |

Running total: ~25 parent stories Done across S1–S3. The core officer read journey (browse → detail) works end-to-end on live OTG data.

---

## What's In Flight (Sprint 4, now)

| Ticket | Story | Status | Risk |
|--------|-------|--------|------|
| OTEP-88 | Identify C@G listings (C@G listing integration) | In Progress | Delayed — was S3 goal |
| OTEP-482 | Import C@G data (Léo) | In Progress | Dependency for all C@G UI |
| OTEP-86 | Filter by type | In QA | S3 carry-in |
| OTEP-268 | Empty/error states | In QA | S3 carry-in |
| OTEP-85 | Listing cards with live data | In QA | S3 carry-in |
| OTEP-305 | Login/logout | In QA | S3 carry-in |
| OTEP-128 | Detail page | In QA | S3 carry-in |
| OTEP-129 | Open/closed before applying | In QA | S3 carry-in |
| OTEP-397 | OTG upload spike (Michelle) | In Progress (PM-owned) | Spike — scoped happy-flow only |
| OTEP-350 | WOG AD onboarding (Fabian) | In Progress | Process gate — no movement yet; blocks S5 auth |
| OTEP-349 | Competency spike (Pow Hwee) | In Progress | Cross-squad; no hard deadline |

Sprint 4 goal: Deliver a complete, usable listing experience — search, filter, sort, data currency.

---

## What Remains — The 5-Sprint Plan

### Sprint 4 (ends 28 Jun) — Finish the spine

- [ ] All 6 QA carry-ins closed (OTEP-85, 86, 128, 268, 305, 319)
- [ ] C@G listing (OTEP-88) + C@G data import (OTEP-482) Done
- [ ] C@G detail — non-competency fields (OTEP-87 core)
- [ ] C@G deep-link (OTEP-89)
- [ ] FormSG full apply (OTEP-130) — webhook callback, depends on OTEP-319
- [ ] Login/logout UI polish (OTEP-368, 369, 370)
- [ ] OTG ingestion scheduler + observability (OTEP-348)
- [ ] **5-category mapping doc defined + sent to Xian Zhang for validation** — gates OTEP-86 filter grooming (⚠️ not yet in Jira; Michelle-owned)
- [ ] **Per-agency remediation reports generated** — unblocks ESG/MTI/MSF outreach (⚠️ not yet in Jira; Michelle-owned)
- Gate: WOG AD onboarding steps mapped with Fabian (#26) — unlocks S5 auth
- Gate: Xian Zhang validates 5-category model — unlocks OTEP-86 filter taxonomy lock

### Sprint 5 (29 Jun–10 Jul) — Auth + C@G detail + CSC SSO process

- [ ] WOG AD login (OTEP-71) — gated on OTEP-350 completing
- [ ] Login error handling (OTEP-110)
- [ ] Session persistence (OTEP-304)
- [ ] Ringfencing (OTEP-127) — needs WOG AD + POCDEX done; agency-level only for MVP
- [ ] First-time login experience (WOG-06)
- [ ] Application confirmation screen (US-10) — depends on OTEP-130
- [ ] **OTG dedup rule for C@G overlaps** — ingestion logic to prefer C@G over OTG where same job exists in both (⚠️ unresolved; needs ESG HR confirmation via Xian Zhang before this can be built into OTEP-348/192)
- [ ] **OTEP-427: ingestion logic tighten** — incorporates validated 5-category model into ingest rules (⚠️ Michelle-owned Backlog ticket; no sprint assigned)
- [ ] Send CSC SSO documents — starts their 4-week external clock
- Gate: CSC documents submitted by end S5 at latest (best case: end S4)
- Gate: ESG HR response on OTG/C@G duplication — needed before dedup rule lands in ingestion

### Sprint 6 (13–24 Jul) — CSC SSO integration + admin + polish

- [ ] CSC SSO integration (Story B — no Jira ticket yet; Michelle to scope with Imelda)
- [ ] C@G deep-links / EDM redirect (OTEP-133) — needs ringfencing done
- [ ] Agency admin login (WOG-02)
- [ ] Role-based access control (WOG-07, officer + admin only)
- [ ] Bug fixes + polish from S2–S5

### Sprint 7 (27 Jul–7 Aug) — E2E testing + stabilisation

- [ ] Full-flow E2E: login → listing → search/filter → detail → apply (OTG + C@G + SJR)
- [ ] Cross-browser testing
- [ ] Performance: under 5s load on gov network
- [ ] Edge-case fixes
- No new features.

### Sprint 8 (10–21 Aug) — UAT + Feature Freeze

- [ ] UAT with 1–2 pilot agencies (target: ≥ 3.5/5 satisfaction)
- [ ] Bug triage (fix vs defer to R1)
- [ ] Feature Freeze: Fri 21 Aug
- Note: National Day Mon 10 Aug — sprint start shifts to Tue 11 Aug

---

## Top Risks to MVP

| Risk | Severity | Status |
|------|----------|--------|
| WOG AD onboarding not mapped — OTEP-350 has owner but no movement. Blocks S5 auth entirely. | High | Michelle → Fabian session needed this week |
| CSC SSO 4-week external clock — if documents slip past end of S4, integration lands in S7, not S6 | High | Submit by 28 Jun; Imelda owns CSC side |
| Agency data clean-up is multi-party and off-squad — ESG/MTI/MSF must clean their data before Aug–Sep go-live. No clean-up = MVP launches with <25% of open opportunities visible. | High | Remediation reports + agency outreach must start this week (Michelle-owned action from 12 Jun meeting) |
| 5-category model not yet validated — OTEP-86 filter grooming proceeds against an unconfirmed taxonomy if Xian Zhang doesn't validate by early W26 | High | 5-cat mapping doc due to Xian Zhang this week |
| 6 QA carry-ins still open — if they drag past 20 Jun, they eat S4 capacity for C@G + apply | Medium | Target all closed by end of W26 |
| OTG data quality: 75% rejection rate — only 160 of 633 gigs valid today; two rule changes + agency clean-up needed before pilot | Medium | BO call in S5 grooming; ESG brief before pilot |
| C@G/OTG dedup rule unresolved — ESG HR hasn't confirmed whether same jobs are posted in both systems. Ingestion build for ESG is blocked. | Medium | Xian Zhang → ESG HR; needed before OTEP-348 scope locks |
| CSC SSO story has no Jira ticket — risk of scope creep if not sized before S6 | Medium | Michelle to create + scope with Imelda by end S4 |
| C@G competency block deferred — OTEP-87 competency section cut from S4; no confirmed sprint for it | Medium | Re-evaluate when Imelda's squad confirms schema |
| No PostHog — apply flow shipped without tracking; no signal before pilot | Medium | Add as DoD item this sprint |

---

## What's NOT in MVP (Confirmed Deferred to R1)

- Native apply (ATS pivot — FormSG redirect is MVP)
- Agency, grade, and commitment filters (type filter only for MVP)
- Competency match scoring
- POCDEX form auto-populate
- Save for later, supervisor endorsement, recommendation engine
- Granular roles beyond officer/admin

---

## PM-Owned Actions Not Yet in Jira

These came out of the 12 Jun ingestion meeting and are not tracked anywhere in the sprint board. They're blocking S4/S5 work.

| Action | Blocks | Due |
|--------|--------|-----|
| Define 5-category mapping logic + send to Xian Zhang for validation | OTEP-86 filter grooming | This week |
| Generate per-agency OTG remediation reports (ESG, MTI, MSF) | Agency outreach + go-live data quality | This week |
| Create Jira ticket for OTEP-427 scope (ingestion logic tighten with new category model) | S5 ingestion work | Before S5 grooming |
| Create Jira ticket for CSC SSO integration (Story B) + scope with Imelda | S6 delivery | Before S5 grooming |
| Stand up R1 wishlist shared doc | Stakeholder input for R1 | Low priority, this week |

---

## Summary

The read journey works. The write journey (apply, auth, C@G) is the remaining weight across S4–S6. S7–S8 are protection sprints, not feature sprints.

Three gates need action this week — not next sprint, this week:
1. **WOG AD (#26):** Michelle → Fabian session to map onboarding steps.
2. **5-category validation:** mapping doc to Xian Zhang before OTEP-86 grooming.
3. **Agency outreach:** remediation reports generated before ESG/MTI/MSF can clean their data; the Aug–Sep go-live window is the only buffer.

---

*Source: sprint-allocation.md, sprint-status.md, feature-results-sprint-3.md, otep-roadmap-okrs-2627.md, 2026-06-12-W24-otg-opportunities-careercompass-ingestion.md. Updated: 2026-06-16.*
