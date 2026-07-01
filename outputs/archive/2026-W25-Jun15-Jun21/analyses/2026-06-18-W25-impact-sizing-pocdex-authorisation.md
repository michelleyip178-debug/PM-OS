# Impact Sizing: POCDEX-side Officer Authorisation

**Date:** 2026-06-18

**Feature:** POCDEX-side Officer Authorisation (Pilot Agencies) — auto-provisioning, agency whitelisting, ringfencing, edge-case handling

**Analyst:** Michelle Yip

**Decision context:** APA KR 3 evidence; MVP go-live gate; prioritisation of 5 stories against sprint capacity

---

## Framing note

This is a **gate feature, not a conversion feature.** Standard impact sizing asks "how many more users do X?" POCDEX authorisation asks "does anyone get in at all?" The funnel is binary: without it, the platform cannot launch to pilot agencies. With it, 5,400 officers can access OTEP on day one. The sizing value is the cost avoided (manual onboarding, access-control failures, go-live block) not a conversion uplift.

---

## Usage Funnel

| Stage | Users | Notes |
|-------|-------|-------|
| Officers in pilot agencies (total addressable) | ~5,400 | PSD, ESG, MDDI, URA, MCCY, CAAS — confirmed 6 agencies |
| Officers eligible to onboard at MVP launch | ~5,400 | All pilot agency officers; no sub-segment — POCDEX provisioning covers the whole cohort |
| Officers auto-provisioned on first login (target) | 5,400 (100%) | Success criterion: zero manual setup. Without this epic, each officer requires HR to manually create an account — unscalable at 5,400. |
| Officers who hit edge cases (pre-sync, invalid code) | ~50–200 est. | ~1–4% based on typical HR system sync lag; these officers see "profile pending" not a crash |
| Officers incorrectly provisioned or granted unauthorised access | 0 | Hard requirement — any breach is a go-live blocker |

**The funnel doesn't taper — it's a gate.** Either 100% of pilot officers can log in cleanly, or the platform cannot launch.

---

## Impact Estimates

### Without this epic (the counterfactual)

| Scenario | What happens |
|----------|-------------|
| No auto-provisioning | Agency HR manually creates ~5,400 accounts before go-live. At 5 min/account = ~450 person-hours of manual work. Not feasible in the launch window. |
| No agency whitelisting | Officers from non-pilot agencies can access the platform. Access-control failure — immediate security and trust risk with BOs and MOM. |
| No edge-case handling | Officers who log in before POCDEX syncs hit an unhandled error, call support, or abandon. First impression is broken. |
| No ringfencing | Officers see opportunities outside their agency's eligibility — ineligible applications submitted, data quality errors, agency distrust of the platform. |

### With this epic (the value delivered)

**Operational impact:**

- ~450 person-hours of manual HR onboarding work eliminated (5,400 officers × 5 min/account)
- 0 unauthorised access incidents at launch
- ~50–200 edge-case officers routed to a clear "profile pending" state instead of a crash → support ticket volume stays low

**Strategic impact (OKR 2):**

- Without POCDEX authorisation: MVP cannot launch. OKR 2 baseline (officers applying via OTEP) is never established. Every downstream milestone (R1 10%, R4 30%, R8 50%) is blocked.
- With it: 5,400 officers are reachable on day one. The click-through funnel (KR 1), authentication (KR 2), and the North Star are all gated on this working.

**Programme trust impact:**

- First login is the product's first impression with pilot agency officers. A provisioning failure or access-control error at launch would damage agency trust before a single opportunity is browsed. This is the hardest thing to recover from.

---

## Driver Tree

```
POCDEX-side Officer Authorisation
        ↓
100% of 5,400 pilot officers auto-provisioned (no manual setup)
        ↓
MVP go-live gate cleared — platform can launch Oct 2026
        ↓
OKR 2 baseline established (officers can apply via OTEP)
        ↓
North Star trajectory begins: 10% at R1 (Mar '27) → 30% at R4 → 50% at R8

Parallel branch (access control):
0% unauthorised access + ringfencing enforced
        ↓
Agency trust maintained at launch
        ↓
R2 agency expansion (50 agencies) viable
```

---

## Confidence Assessment

| Assumption | Confidence | Risk if wrong | De-risking action |
|------------|------------|---------------|-------------------|
| 6 pilot agencies = ~5,400 officers at MVP launch | High | Fewer agencies → smaller pilot, not a provisioning failure | Confirmed in business-info; monitor staggered onboarding |
| `uhdp-pocdex` cutover by ~23 Jul 2026 | Low | **Entire epic is blocked** — OTEP cannot integrate against a live API until this is live. S4 build is against seed DB only. | Watch Pow Hwee's critical path (TGW route due 20 Jun, cutover 23 Jul); escalate any slip to Adrian immediately |
| POCDEX agency codes are stable and valid for all 6 agencies at cutover | Medium | Whitelist (Story 1) breaks if codes change or haven't been set up in POCDEX | Confirm per-agency code readiness with Daryll before integration; don't assume |
| ~1–4% of officers hit pre-sync edge case on first login | Medium | Higher rate → more support tickets, worse first impression | Run a seed-DB simulation of the edge case in S4; check Daryll's SLA for sync lag |
| Daryll's team provides go-live operational support | Low | No SLA confirmed — if provisioning breaks post-launch, no named backstop | **Chase Daryll SLA before grooming** (open PRD question, overdue since Sprint 4 planning) |
| MSSQL vs Postgres schema decision lands by 20 Jun | Medium | Engineers build against wrong data model → rework in S5 | Watch for the Pow Hwee decision on 20 Jun; confirm the schema engineers will code against before story pointing |

---

## Sensitivity Analysis

| Scenario | Provisioned at launch | Access-control status | OKR 2 baseline |
|----------|----------------------|----------------------|----------------|
| **Best case** | 5,400 (100%), no edge cases | Clean | Established Oct '26 |
| **Expected case** | 5,200–5,350 (96–99%), ~50–200 edge-case officers routed cleanly | Clean | Established Oct '26 |
| **`uhdp-pocdex` slips 4 weeks** | 0 — cannot integrate | Blocked | MVP delayed; every downstream OKR milestone slips |
| **Edge cases unhandled** | 5,400 provisioned but ~50–200 hit crash on first login | At risk | Baseline established but first impression damaged; support tickets spike |
| **Ringfencing fails** | 5,400+ (incl. non-pilot officers) | **Breach** | Go-live pulled — BO and security incident |

**Key insight:** The range isn't wide — it's binary. Either the platform launches cleanly or it doesn't. The `uhdp-pocdex` slip scenario is the only one that moves the outcome materially. Ringfencing failure is low-probability but catastrophic. Both need explicit go/no-go gates.

---

## Recommendation

**Proceed — this is a non-negotiable go-live gate, not a nice-to-have.**

The "impact" isn't uplift — it's the unlock. Without POCDEX authorisation, nothing else ships. The story priority order follows the gate logic:

| Priority | Story | Why |
|----------|-------|-----|
| 🔴 P0 | Story 2 — Auto-provisioning | Core path; blocks everything else |
| 🔴 P0 | Story 1 — Agency whitelisting | Must exist before provisioning can run |
| 🔴 P0 | Story 4 — Invalid agency code handling | Fail-closed requirement; access breach if missing |
| 🟡 P1 | Story 3 — Pre-sync edge case | Not a launch blocker but a first-impression risk |
| 🟡 P1 | Story 5 — Provisioning logging | KR 3 evidence artifact; needed for APA, not for go-live |

**Two actions before stories can be groomed:**

1. **Chase Daryll SLA** — go-live operational backstop is unconfirmed. Without it, "100% auto-provisioned" success criterion has no recovery plan if something breaks post-launch.
2. **Confirm MSSQL vs Postgres outcome (20 Jun)** — engineers need the schema decision before pointing Stories 1 and 2.

---

## Links

- [Epic: POCDEX-side Officer Authorisation](../decisions/2026-06-18-W25-epic-pocdex-authorisation.md)
- [POCDEX PRD](../../PM-skills-ALL-1/02-prd/prd-pocdex-integration.md)
- [POCDEX productionisation plan](../../PM-skills-ALL-1/06-skills-and-decisions/pocdex-api-productionisation-plan.md)
- [APA KR 3](../decisions/2026-06-18-W25-apa-draft-krs-cy26.md)
- [OTEP OKRs](../../PM-skills-ALL-1/06-skills-and-decisions/otep-roadmap-okrs-2627.md)
