---
date: 2026-06-22
decision: DevOps confirmation — 22 Jun 2026, 10:00
purpose: Document MVP category model decision
status: FINAL — no merge in MVP, PSFG conditional on policy intent
---

# MVP Opportunity Categories — Decision Summary

**Decision made today (22 Jun, 10:00):**
- ✅ STIP and Gig remain separate (no merge in MVP)
- ✅ PSFG inclusion conditional on policy intent + programme support

---

## MVP Category Model

| Category | OTG source types | Status | Notes |
|---|---|---|---|
| **STIP** | `STIP` prefix | ✅ Included | Separate filter chip (unchanged from S4) |
| **Gig** | `Gig` prefix | ✅ Included | Separate filter chip (unchanged from S4) |
| **Jobs** | `Job`, `Secondment`, C@G | ✅ Included | Display badge for C@G |
| **SJR** | `SJR` prefix | ❌ Excluded | Not visible in listing |
| **PSFG** | TBD | 🟡 Conditional | Only if: (1) strong policy intent, (2) programme is strongly supported |

**What changed from last week's plan:**
- ❌ No STIP+Gig merge (stays separate)
- ❌ No recategorisation brief needed
- 🟡 PSFG moves from "deferred to R1" to "conditional on leadership priority"

---

## PSFG Inclusion Conditions

PSFG can be included in MVP only if both conditions are met:

### Condition 1: Strong Policy Intent
Leadership must confirm PSFG is a priority for MVP (not just R1 nice-to-have). This means:
- Explicit go/no-go from Jace and Adrian
- PSFG is aligned with quarterly OKRs
- Resource commitment from programme team

### Condition 2: Programme Support
PSFG team must own the data quality gaps before launch:

| Gap | Current State | Needed by MVP |
|---|---|---|
| **Competency tagging** | 0 of 20 records have tags | Host orgs commit to tag before posting |
| **Apply flow coverage** | 50% have no FormSG link | 100% valid apply path confirmed |
| **Participation tracking** | Sign-ups not captured | Agreed mechanism to measure officer behaviour |

If both conditions are met: scope the ingestion work and assign it a sprint (likely S5 or S6).

---

## What This Means This Week

**OTEP-86 (filter by type):**
- ✅ No changes needed — STIP and Gig remain separate filter chips
- ✅ ACs are already correct — can close as-is
- ✅ No rework required

**PSFG path:**
- 🟡 Conditional — waiting on Jace/Adrian policy intent check
- If MVP priority: Programme team owns data fixes
- If R1 priority: Current gaps are acceptable, launch without it

**Next action:**
- Thu 25 Jun: Jace check-in — confirm PSFG policy intent
- Fri 26 Jun: S5 grooming proceeds with clean category model

---

*Decision made: 22 Jun 2026, 10:00 DevOps chat. No merge, PSFG conditional on policy intent + programme support.*
