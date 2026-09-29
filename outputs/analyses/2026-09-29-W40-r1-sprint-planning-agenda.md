---
date: 2026-09-29
week: 2026-W40
type: planning-agenda
scope: CareerCompass R1's first slice, riding inside Sprint 11 (primarily an MVP sprint) — planning session Thu 1 Oct 2026
owner: Michelle Yip
related:
  - outputs/prds/2026-09-23-W39-r1-release-one-pager.md
  - outputs/analyses/2026-09-29-W40-r1-grooming-readiness-checklist.md
  - outputs/prototypes/2026-09-28-W40-r1-interim-wireframes.md
---

# R1 Sprint 11 Planning Agenda — Thursday 1 Oct 2026

## Why This Agenda Looks Different From a Normal Planning Session

**Sprint 11 is primarily an MVP sprint** (continued hardening/VAPT work) — it is not "R1's sprint." The intent is for R1's first slice to ride inside it as a minority addition, not for Sprint 11 to become an R1 sprint. A product-trio review (PM + tech lead + designer lens, reconciled against live Jira) found that **zero R1 tickets currently exist in Jira** — none of the R1 Release One-Pager's epics have been ticketed at all, and R1 has not started. Sprint 10 ran entirely on MVP hardening/VAPT with no R1 progress.

This means Thursday can't be a normal "walk the backlog, size what's there" planning session for the R1 slice specifically — there's nothing there yet. The agenda below is sequenced to create that first small slice of R1 tickets inside an otherwise MVP-led sprint, not to replan the whole sprint around R1.

---

## Pre-Read (send before the meeting)

- [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md) — just corrected: Secondment's ingestion source contradiction fixed, Section 8's design list updated for Li Ting Kway's confirmed involvement, Decision Tracker updated with the one remaining live blocker (FormSG parsing rule).
- [R1 Grooming Readiness Checklist](2026-09-29-W40-r1-grooming-readiness-checklist.md)
- **Designer update (29 Sep, evening):** Li Ting Kway is confirmed as R1's designer, already has end-state screens for this scope, and was briefed on current scoping the same day. The [R1 Interim Wireframes](../prototypes/2026-09-28-W40-r1-interim-wireframes.md) are retired — don't bring them into this session.

---

## Agenda

### 1. Name what's actually ticketable today (15 min)

Not a discussion — a working session to create the first real R1 tickets. **Correction: Epic A (STIPs & Gigs discovery + FormSG extraction) is already live in MVP — it's off this list entirely, not a Sprint 11 candidate.** What's actually unblocked and design-independent:

| Ticket | Action | Owner |
|---|---|---|
| IJR ingestion from OTG (Epic B) | Create as a story — no blocker | Backend |
| Secondment ingestion from hosting HR system (Epic B) | Create as a story — no blocker | Backend |
| OTEP-684 (ingestion model refactor — foundation for multi-source ingestion) | Assign an owner, pull into scope | Léo or TBD |

**Do this in the room, not as a follow-up action item** — the whole point is to leave with real tickets, not another list of things to do later.

### 2. ~~Close the FormSG parsing rule~~ — moot, remove from agenda

**Superseded:** this item assumed FormSG extraction was unbuilt. It's already shipped in MVP — no parsing rule to close, nothing to groom here. Skip this slot; use the time elsewhere (e.g. extend item 4's design fit-check).

### 3. Rescope and assign OTEP-578 (10 min)

The OTG-ingestion spike Epic B's "IJR and Secondment are groomable now" claim depends on. It's currently unassigned, in Backlog, and titled from before Internal Jobs moved off OTG (D-049) — the title itself is stale. Rescope to: IJR-from-OTG plus Secondment-from-hosting-system. Assign an owner today.

### 4. Fit-check Li Ting's existing screens against current scope (15 min)

**Superseded 29 Sep evening — this item changed shape.** The team's DoR requires design linked to every Acceptance Criterion, and this no longer needs a split-DoR exception: Li Ting Kway is confirmed as R1's designer with existing end-state screens, briefed on current scoping the same day. The session's design item is now a fit-check, not a workaround negotiation:

- **Backend/ingestion stories** (FormSG extraction, IJR ingestion, OTEP-684) — design criterion doesn't apply, proceed under normal DoR minus the design line, unchanged.
- **UI components inherited from MVP** (FormSG deep-link pattern, disabled-Apply state) — clear DoR via a fit-check against the new catalog layout, unchanged.
- **Genuinely new UI** (discovery catalog, shared card, bookmark toggle, the three redirect-signal variants) — walk through Li Ting's existing screens against current scope. **Specifically confirm the Secondment redirect variant reflects the hosting-HR-system correction, not OTG** — that fix landed the same day she was briefed and may predate her screens. Once confirmed, these can clear full DoR at this session rather than waiting on a future designer assignment.

### 5. Confirm Internal Jobs stays out of this round (5 min)

No committed HRPS API date. Sizing now produces a number that gets redone once the date lands. Explicitly exclude from Sprint 11 — don't let it drift in via a story that looks unrelated.

### 6. Set Sprint 11's goal (10 min)

Sprint 10 had no goal — second sprint running with that gap. Sprint 11's goal is primarily MVP-scoped (hardening/VAPT), but should name the R1 slice riding alongside it explicitly rather than letting it drift in unnamed. **Correction from earlier grooming prep: STIPs & Gigs discovery and FormSG extraction are already live in MVP** — Epic A is fully delivered, not a Sprint 11 candidate. The real R1 slice available to add is IJR and/or Secondment discovery, both fully unblocked. Candidate goal: **"[MVP hardening focus] + ship IJR discovery as R1's first slice."**

### 7. Flag, don't solve: three live conflicts surfaced by the review (10 min)

Not for resolution in this meeting — name them so they're tracked, and assign a follow-up owner for each:

- **OTEP-1505** (decoupling opportunity user resolution *away* from POCDEX) vs. the one-pager's claim that pilot-agency discovery works via POCDEX integration — reconcile with Rama/Léo.
- **OTEP-1686** (ringfencing column rename) happening before ringfencing is product-defined for IJR — check this isn't locking in an assumption before the product call is made.
- **OTEP-1693** (spike to dynamically generate an OTG Excel sheet) — suggests OTG ingestion may be file-based, not a live feed. Worth confirming with Thomas whether the FormSG extraction logic (item 2) depends on this, since it changes the parsing rule's actual input.

### 8. Confirm no frontend owner exists yet (5 min)

Section 13's squad list has no named frontend role — Léo is solo on ingestion. **Correction: the base catalog/card component is already live in MVP** — remaining frontend work is smaller than previously scoped (new type badges for Internal Jobs/IJR/Secondment, plus the three redirect-signal variants), not a from-scratch build. Still needs frontend build capacity that isn't currently assigned to anyone, even at this reduced size. Flag to Rama for Sprint 12 planning, not something to solve today.

---

## What Success Looks Like Leaving This Meeting

- At least 2-3 real Jira tickets exist under a named R1 epic (not OTEP-575's generic "Post-MVP - Opportunities Unified Hub" bucket) — IJR and/or Secondment, not FormSG (already shipped).
- OTEP-578 has an owner and an updated title.
- Li Ting's existing screens are confirmed fit-for-current-scope (specifically the Secondment redirect variant), and genuinely-new UI stories clear full DoR rather than needing an exception.
- Sprint 11's goal names its MVP focus explicitly and includes the R1 slice riding alongside it, without recasting the sprint as R1's own.
- The three flagged conflicts (POCDEX, ringfencing, Excel ingestion) have named owners for follow-up, even if unresolved today.

---

*This agenda assumes the corrected [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md) as the source of scope truth. If anything discussed in planning contradicts it, update the one-pager the same day — don't let the gap reopen.*
