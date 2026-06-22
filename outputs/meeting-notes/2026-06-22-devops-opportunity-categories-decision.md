---
date: 2026-06-22
time: 10:00–10:30
attendees: Michelle, DevOps team
meeting_type: Decision confirmation — OTG opportunity type strategy
decision_impact: High — unblocks S5 grooming, changes PSFG path
---

# Meeting Notes: Opportunity Categories in CareerCompass

**Date:** Monday, 22 June 2026, 10:00–10:30

**Attendees:** Michelle (OTEP PM), DevOps team

**Type:** Strategy confirmation — OTG opportunity type model for MVP

---

## Decision Made

### No STIP + Gig Merge in MVP

**Decision:** STIP and Gig remain separate categories in MVP. No display merge, no schema consolidation.

**Rationale:** Keep MVP simple. Business value of merging (cognitive load reduction) is low compared to execution risk and rework during sprint close.

**Impact:** 
- OTEP-86 (filter by type) proceeds as-is: separate STIP and Gig filter chips
- No schema changes needed
- No AC updates required for type consolidation
- Display labels stay: "STIP" and "Gig" (unchanged)

---

### PSFG Inclusion: Conditional on Policy + Programme Support

**Decision:** PSFG becomes a category in MVP **only if**:
1. Strong policy intent from leadership (explicit go/no-go)
2. PSFG programme is strongly supported (defined roadmap, committed resourcing)

**Current Status:** 🟡 Conditional — not in MVP by default

**Rationale:** PSFG has structural data gaps (competency tagging, FormSG coverage, participation tracking) documented in defensive brief. Including it MVP without programme commitment creates risk of low-quality catalogue entry and misleading pilot signals. Better to gate it on real stakeholder investment.

**Path Forward:** 
- Michelle to gauge policy intent from Jace/Adrian
- If strong intent: PSFG moves to "MVP consideration" with programme team owning data quality
- If no intent: PSFG defers to R1, surfaces as a capability but not a pilot feature

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Confirm with Jace/Adrian: Is PSFG a policy priority for MVP? | Michelle | By Wed 24 Jun | High |
| **Do NOT update OTEP-86 ACs** for merge (no change needed) | — | — | — |
| **Do NOT send recategorisation brief to Xian Zhang** | — | — | — |
| If PSFG is priority: loop programme team on data quality conditions | Michelle | After Jace check-in | Medium |
| Update I-018 (decision log): Revert merge decision, lock PSFG conditional gate | Michelle | By Wed | Medium |

---

## What Changed from Last Week's Plan

| What We Thought | What's Real | Impact |
|---|---|---|
| STIP+Gig merge in S5 | No merge; stay separate | OTEP-86 ACs are clean; no rework |
| PSFG deferred to R1 | PSFG conditional on policy intent | Could come to MVP if leadership prioritizes |
| 4-cat mapping needed for Xian Zhang validation | No mapping needed | Frees time; no stakeholder alignment session required |

---

## Unblocks

✅ **S5 grooming is unblocked** — no foundational category model changes to gate stories

✅ **OTEP-86 can close as-is** — no AC updates required; filter story is ready

✅ **3 hours of rework avoided** — no recategorisation design, no Xian Zhang validation cycle

---

## Open: Policy Intent on PSFG

**Question:** Does leadership see PSFG as a MVP feature or a R1 nice-to-have?

**Why it matters:** 
- If MVP: Programme team needs to address data quality gaps (competency tagging, FormSG links)
- If R1: Current gaps are acceptable; PSFG launches post-pilot when data is ready

**Next step:** Jace check-in Thu 25 Jun — confirm intent before sprint close

---

## Implications for This Week

**Good news:**
- S5 grooming readiness gate is cleared
- OTEP-86 can close without rework
- Frees time for KR docs + R1 epic draft

**Action for you:**
- Confirm PSFG policy intent with Jace (not an urgent ask, but good to know)
- Revert recategorisation brief (or mark as "deferred consideration")
- Update decision log I-018 to reflect "no merge in MVP"

---

*Impact: This simplifies MVP scope and clarifies PSFG's path based on policy intent rather than product convenience.*
