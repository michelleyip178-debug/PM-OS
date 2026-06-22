# OTEP-427 Brief for Pow Hwee
*Michelle → Pow Hwee | 2026-06-22*

---

## Context

OTEP-427 is the validation spike on OTEP-192 (OTG ingestion job). I need to close out two open decisions before this spike is done, and I need your input to make the right call on both. No dry-run -- this is purely about confirming the agreed ingestion rules and design are sound before S5.

Need your input by **Wed 24 Jun** so I can close both decisions before S5 grooming on Thu 25 Jun.

---

## What I need you to assess

### 1. Does BusinessUnit feed into ring-fencing logic?

I need to decide whether BusinessUnit should be required or optional for MVP (decision I-019). Making it optional unlocks 16-22 additional records.

Before I can make that call, I need to know: **does BU feed into the ring-fencing logic in OTEP-127?**

- If yes: making BU optional could silently break ring-fencing for records without it. I need to understand the downstream impact before deciding.
- If no: the tradeoff is simpler (more records vs. data completeness) and I can decide without a technical constraint.

Your call here is not on the decision itself -- just tell me whether the dependency exists and what breaks if BU is absent.

---

### 2. Is the ingestion endpoint design adequate for R1+?

Hao flagged the current endpoint design (from OTEP-391 / OTEP-505) may not be the best long-term approach. I need a specific answer before S5 planning:

- Is the current design adequate for R1+ scope (Secondments, Internal Jobs, PSFG)?
- Or does rework need to be scoped for S5 or S6?

"Not the best long term" isn't enough to act on -- I need to know what specifically is the concern (performance, API design, scalability?) and whether it's a blocker for R1 or something we can defer. If rework is needed, I'll create a story for S5/S6.

---

## Hard-skip rules (for your reference)

These are the ingestion rules currently in OTEP-192. Léo is validating the implementation -- but if anything looks technically off to you, flag it.

**Records are dropped entirely if:**
- Any required mapped field is missing or unresolvable
- Opportunity type is unrecognized (not Job / STIP / Gig / SJR / PSFG)
- Closing date is in the past
- FormSG URL is missing, malformed, or resolves to a non-existent form
- TimeCommitment is missing on a STIP or Gig

**These do not trigger a skip (optional fields):**
- Function field (all types)
- StartDate for Jobs and Secondments
- BusinessUnit (pending your input on the ring-fencing dependency)
