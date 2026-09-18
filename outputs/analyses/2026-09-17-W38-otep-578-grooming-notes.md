# Grooming Notes: OTEP-578 — [SPIKE] OTG Ingestion: Jobs (Secondments, Internal Jobs, Rotations)

**Date:** 2026-09-17

**Owner:** Michelle Yip

**Ticket:** OTEP-578, currently Backlog, unassigned, no description, no story points

---

## Current State

The ticket is bare — no description, no subtasks, no AC. This groom scopes it as a **time-boxed investigation spike**, not a build ticket. It stays R2 Horizon per the master PRD (F-24 is scored RICE 3,500 and explicitly deferred: "high effort to parse legacy OTG feeds with low impact because candidate apply redirects externally without CV tracking").

Don't pull this into R1 scope through this groom. If the spike's findings change that calculus, that's a separate re-scoping decision, not something to fold in here.

## What the Spike Should Answer

1. **Does OTG expose any API for reading Rotations/SJR/Internal Job postings**, or is scraping/manual export the only option?
2. **What's the actual data shape** — do Secondments, Internal Jobs, and Rotations share a schema in OTG, or are they three different formats needing three parsers?
3. **How does this interact with the Option A/B coexistence decision** (PRD §2.3, still unresolved)? Specifically: if Option B (one-way inbound, no write-back) is the fallback path, this spike's output is the *only* mechanism by which non-pilot-agency OTG rotations become visible in Compass at all. If Option A ships, this ingestion may be partially redundant with the write-API sync.
4. **Rough effort band** (S/M/L, not points) — good enough to size against Sprint capacity, not necessarily final.

## Scope Boundaries (write these into the ticket description)

- **In scope:** feed/API discovery, schema documentation, effort estimate, a recommendation on Option A vs B dependency.
- **Out of scope:** any actual ingestion code, any UI changes, any decision on R1 vs R2 placement (that's a call for the PM/leadership, not the spike).
- **Time-box:** recommend capping at 2-3 days of investigation. This has sat unsized in Backlog for at least a full sprint already — open-ended spikes are how WOG AD/auth work slipped 3+ weeks past Sprint 8 close.

## Dependencies to Flag in the Ticket

- Blocked on knowing whether OTG has a write API at all — same open question gating the Option A/B decision for F-26 (Ingestion Dedup, already R1-committed).
- Related but distinct from F-23 (Careers@Gov & OTG Jobs Ingestion Feed), which is already R1-committed and scored. Don't conflate the two in the ticket — F-23 is central civil-service job listings; this spike is specifically Secondments/Internal Jobs/Rotations.

## Suggested Acceptance Criteria (spike-appropriate, not build AC)

- [ ] Documented answer: does OTG have a read API for Rotations/SJR/Internal Jobs, yes/no, with evidence
- [ ] Documented schema comparison across the three posting types
- [ ] Effort band (S/M/L) for building real ingestion, with reasoning
- [ ] One-paragraph recommendation on R1 vs R2 timing, handed back to Product for a scoping decision

## Suggested Next Step

Assign and size as a time-boxed spike (S, capped at 2-3 days) in the next sprint planning session. Don't let it sit unassigned in Backlog past another sprint boundary — it's already referenced as an open risk in the [R1 engineer headcount justification](2026-09-16-W38-r1-engineer-headcount-justification.md) and the [R1 planning session brief](2026-09-16-W38-r1-planning-session-brief.md), so leaving it bare undermines both.
