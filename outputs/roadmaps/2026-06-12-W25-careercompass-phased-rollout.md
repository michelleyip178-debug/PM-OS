---
title: CareerCompass — Phased Rollout Reference
source: "Implementation Details of OTEP MVP and Pilot" (email to senior mgmt)
captured: 2026-06-02
status: reference
---

# CareerCompass — Phased Rollout

> Quick-reference for the MVP → R4 rollout. Source: senior-management implementation-details email, synthesised 2026-06-02. Branding: **OTEP is now CareerCompass** (51% of PSD officers in naming poll).

## North Star + MVP hypotheses

**North Star:** ≥50% of officers complete a development action (per OKR doc). MVP tests three hypotheses that ladder to it:

| Hypothesis | What it tests |
|------------|---------------|
| **Gap Clarity** | If officers see their top competency gaps on "My Development," they're motivated to seek growth opportunities |
| **Unified View** | Consolidating fragmented opportunities (STIPs, Gigs) lifts click-through and career mobility |
| **Integrated Learning** | Surfacing CSC courses on-platform increases learning engagement |

---

## Rollout phases

| Phase | Window | Agencies | Officers | What it introduces / tests |
|-------|--------|----------|----------|----------------------------|
| **MVP** | Oct–Nov 2026 | PSD, ESG, MDDI, URA, MCCY, CAAS (6) | ~5,400 | Core platform. Onboarded in staggered **pairs**, 2–4 wk buffer per pair to fix live bugs before scaling |
| **R1** | Jan 2027 | WSG, PA, MSF (3) | — | **Pre-filled applications + status tracking (native ATS).** Agencies chosen for heavy internal-marketplace use |
| **R2** | Apr 2027 | POLITEs, AGC | — | Competency-based course matching |
| **R3** | Jul 2027 | HDB, MOH, HSA, CSC | — | Development plans. ⚠️ **HDB not on HRPS/Cumulus — needs custom data piping** |
| **R4** | Oct 2027 | Cutover / remaining | — | Opportunity creation & posting (agency-owner side). **Target: full cutover from OTG** |

---

## OTG decommissioning

- **Onboarding of the remaining 24 agencies (~108,000 officers) onto legacy OTG is halted.**
- **OTG contract expires March 2028.** Full cutover to CareerCompass targeted **Oct 2027 (R4)** — ~5 months buffer.
- Rationale: conserve team bandwidth; spare those agencies two rounds of severe change management in quick succession.
- Strengthens **D-016** (one-time OTG port, no ongoing sync) — the port is a deliberate sunset path.

---

## Technical infra notes

- **Auth:** WOG AD login prioritised over Singpass for MVP (better UX for Wave 1). Confirms OTEP-305/350/351 + Fabian's WOG AD onboarding direction.
- **Data sync:** Standard agencies on HRPS/Cumulus. **HDB is the exception (R3)** — separate custom piping required. Logged in `risks.md`.

---

## Why each release was sequenced this way

- **MVP staggered pairs:** live-environment bug resolution before scale — Agile delivery practice.
- **R1 = WSG/PA/MSF:** these agencies run the platform as an internal marketplace, so they're the right test bed for native application tracking (the ATS pivot).
- **R3 = HDB/MOH/HSA/CSC:** development plans + the HDB custom-piping stress test.

---

*Captured 2026-06-02 from senior-mgmt implementation-details email.*
*Decisions logged in `06-skills-and-decisions/decisions-log.md` (5 entries dated 2026-06-02).*
*Risks logged in `00-hub/risks.md` (HDB piping, OTG sunset).*
