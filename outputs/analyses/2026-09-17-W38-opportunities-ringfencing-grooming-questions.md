# Grooming Questions: Opportunities Agency Ringfencing (OTEP-1587, OTEP-232, OTEP-1598)

**Date:** 2026-09-17

**Owner:** Michelle Yip

**Context:** all three tickets sit under OTEP-1381 (VAPT MVP Fast Follows) and each independently flags an "Opportunities — agency ringfencing (confirm with Michelle)" question. They share one unresolved root question: does Opportunities ringfencing key off a single current agency, or does it need to support multiple agencies per officer? Groom together, not separately — resolving this once answers all three.

---

## 1. Data availability (POCDEX / Engineering)

- Can POCDEX distinguish a **secondment or forward-deployment** from a regular single-position role change? (OTEP-1587 flags Compass currently cannot.)
- If an officer is seconded, can POCDEX supply **both** the destination/current agency and the parent/home agency, or only the current one?
- For **double-hatting** (OTEP-232), when the two active Position IDs belong to different agencies, are both agencies available on the same POCDEX payload, or do we need to look them up separately per Position ID?
- Is there an existing field or flag that already distinguishes secondment from double-hatting from a plain role change, or does Compass need to infer this from position/job ID patterns?

## 2. Ringfencing rule design (Product decision, needs Engineering feasibility check)

- **Single-position role change (OTEP-1587):** Option A (use only latest/current agency) or Option B (use both current and home agency where available)?
- **Double-hatting (OTEP-232):** confirmed direction is to ringfence against the union of both agencies when they differ — does Engineering see any conflict or edge case this creates (e.g. an opportunity restricted to Agency X now showing for an officer only nominally attached to X via a secondary position)?
- **Stop double-hatting (OTEP-1598):** ringfencing collapses to the remaining position's agency only — confirm this is a strict subset of 232's logic and doesn't need separate rule-building.
- If Option B is chosen for 1587 (multi-agency support), does the same mechanism satisfy 232's requirement, or are these different data problems dressed the same?

## 3. Sequencing

- Given 1587's secondment question is explicitly blocked on POCDEX data availability, should 232 and 1598 (which don't have the same blocker) move into grooming/sprint first, with 1587 following once POCDEX confirms feasibility?
- Should a single Opportunities-ringfencing decision doc capture the agreed rule (single vs. multi-agency) before any of the three tickets get story-pointed, so engineering doesn't build single-agency logic for one and then rework it for the others?

## 4. Edge cases not yet covered in any ticket

- What happens if an officer is **both** seconded **and** starts double-hatting at the same time (2 positions, one of which is itself a secondment)? None of the three tickets model this combination.
- Do we need a fallback behavior (e.g. default to most restrictive ringfencing) if POCDEX can't supply the home/parent agency for a secondment, rather than leaving it undefined?

---

**Suggested output of this grooming session:** a one-page decision on single- vs. multi-agency ringfencing, which then gets referenced as the shared dependency in the AC of all three tickets rather than re-litigated in each.
