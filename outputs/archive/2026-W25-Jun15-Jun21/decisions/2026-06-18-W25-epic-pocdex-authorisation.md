# Epic: POCDEX-side Officer Authorisation (Pilot Agencies)

**Date:** 2026-06-18

**Owner:** Michelle Yip

**Ladders to:** KR 3 — Deliver POCDEX-side authorisation · OKR 2

**Gate:** MVP go-live, Oct 2026

**Parent epic:** Epic 6 (OTEP-337) — POCDEX API Integration (data plumbing layer)

---

## One-liner

Auto-provision pilot agency officers into OTEP and enforce access control, so no officer requires manual setup and no unauthorised access is possible.

---

## Why this epic exists

WOG AD authentication (Epic OTEP-80) handles *who you are*. This epic handles *what you can access*. Once an officer authenticates, OTEP must verify they belong to a pilot agency (via POCDEX agency code), provision their account automatically, and enforce ringfencing so they only see opportunities they are eligible for. Without this, either HR manually onboards every officer (unscalable) or access control is leaky (a go-live blocker).

---

## Scope

**Michelle owns:**
- Whitelisting of pilot agency codes in OTEP's authorisation layer
- End-to-end auto-provisioning flow: POCDEX push → OTEP account created, no manual step
- API integration with POCDEX productionisation platform (consuming Pow Hwee's `uhdp-pocdex` clean API)
- Edge case handling: officer logs in before POCDEX profile syncs, missing/invalid agency code, mid-session agency transfer

**Out of scope:**
- The POCDEX platform itself (`uhdp-pocdex`) — owned by Pow Hwee/POCDEX team
- WOG AD authentication — Epic OTEP-80
- Competency data from POCDEX — tracked separately under reference data (open item #18)
- FormSG pre-fill from POCDEX data — deferred to R1

---

## Success criteria

- 100% of pilot agency officers auto-provisioned on first login (zero manual setup tickets)
- 0% unauthorised access — officers outside pilot agencies cannot reach the listing
- Officers who log in before POCDEX syncs see a clear "profile pending" state, not a system error
- All provisioning events logged and queryable (evidence artifact for KR 3)

---

## Stories

| # | Story | Notes |
|---|-------|-------|
| 1 | Whitelist pilot agency codes in OTEP authorisation layer | OTEP-side config; 6 pilot agencies: PSD, ESG, MDDI, URA, MCCY, CAAS |
| 2 | Auto-provision OTEP account on POCDEX push | Agency code validation → account creation → ringfence applied; no manual step |
| 3 | Handle pre-POCDEX login edge case | Profile pending state + support routing; not a system error |
| 4 | Handle missing/invalid agency code gracefully | Non-pilot fallback state; no crash or bypass of ringfence |
| 5 | Provisioning event logging | Audit trail; queryable log is the KR 3 evidence artifact |

---

## Dependencies

| Dependency | Owner | Status | Risk |
|-----------|-------|--------|------|
| POCDEX productionisation platform (`uhdp-pocdex`) | Pow Hwee | Target cutover ~23 Jul 2026 | 🔴 High — OTEP can't integrate without this live |
| WOG AD authentication (OTEP-350) | Fabian | In Progress | 🟡 Medium — auth must be live to test provisioning E2E |
| Pilot agency list confirmed | Michelle → Adrian | ✅ Confirmed (6 agencies) | Low |

---

## KR 3 evidence artifact

Provisioning logs (Story 5) + this scope doc showing what Michelle owns vs what POCDEX/other teams own.

---

*Pairs with: [APA KR draft](2026-06-18-W25-apa-draft-krs-cy26.md) · [POCDEX PRD](../../PM-skills-ALL-1/02-prd/prd-pocdex-integration.md) · [POCDEX productionisation plan](../../PM-skills-ALL-1/06-skills-and-decisions/pocdex-api-productionisation-plan.md)*
