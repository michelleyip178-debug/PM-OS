---
date: 2026-06-11
meeting: Dependencies Sync-Up
time: 11:30–12:15
attendees: Léo (BE, Pathfinder), Thomas (FE, Pathfinder), Pow Hwee (TL/Arch), Kingsley (Core squad — competency module), Adrian (observer, dropped in mid-meeting), Marie (present)
type: Engineering cross-squad sync
---

# Dependencies Sync-Up — 11 June 2026

## Summary

Two dependency threads covered: (1) how Pathfinder should consume competency data from the Core squad's competency module, and (2) what reference data APIs Core needs to expose so Pathfinder can power the job family / job function filter on the listing page. Both threads produced clear architectural decisions and specific new API work for Core to take on.

---

## Decisions Made

### 1. Architecture: no API calls across bounded contexts — use an interface layer

**Decision:** Pathfinder will not make HTTP API calls to Core's competency module. Instead, Core will expose a defined in-code interface that Pathfinder calls locally. No anti-corruption layer (ACL), no cross-service HTTP.

**Why:** The system is a modular monolith; traffic volumes (tens of thousands of opportunities per year) don't justify a service split for performance. Splitting for team-boundary reasons is premature — the same team owns both contexts today. An in-code interface gives enough isolation to delete the OTG-specific glue code later without polluting Core's business logic.

**Impact:** Pathfinder must never access Core's repositories directly. All competency reads go through the interface Kingsley's squad exposes.

---

### 2. DB schema: no foreign keys across bounded contexts, no separate schemas

**Decision:** Pathfinder will store the competency **code/ID** (not a DB foreign key) when associating a competency with an opportunity. No foreign key constraint across the competency table boundary. Schema separation is not pursued at this stage.

**Why:** Competencies are reference data — eventual consistency is acceptable. Splitting schemas is hard to refactor vs. code; the bounded contexts aren't stable enough yet to justify the DB overhead. Using the code (not the label) after initial reconciliation is the right long-term pattern.

**Key nuance:** At import time, Pathfinder only has the OTG label (no code). It must look up by label to get the code, then store the code. The label is a transient reconciliation input, not a persisted foreign key.

---

### 3. New API needed: exact-match lookup by competency label

**Decision:** Core will write a new competency lookup endpoint that does **exact match by label** (not fuzzy). The existing fuzzy-search endpoint is unsuitable — ambiguous matches (e.g. "Agile Methodology" vs "Agile Methodology — Scrum Master") would produce import errors.

**Why:** Pathfinder needs a clean, deterministic match to resolve OTG labels to codes. Using the fuzzy endpoint risks polluting Core's business logic with OTG-specific match rules. A separate endpoint keeps OTG-era code deletable when OTG is eventually replaced.

**Owner:** Kingsley (Core squad) to write the new endpoint. Léo to align with Kingsley directly on payload shape.

---

### 4. Job family and job function: Core to expose a master list API

**Decision:** Core will provide an API that returns the master list of job families and job functions. Pathfinder needs this to power the filter sidebar (left-hand side list on the listing page). This is a deterministic list — not search, not fuzzy.

**Clarification made during meeting:** Job grade is not needed for the filter. The filter is job family + job function only. Kingsley confirmed the current "function" field in Core refers to whether a competency is core vs. functional (an internal Core concept), not job function as understood by Pathfinder. A new endpoint/field is needed.

**Owner:** Kingsley (Core squad) to define and build. Michelle and Léo to confirm exact field requirements before Kingsley starts.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Léo and Kingsley to align on competency lookup interface — payload shape, method, naming convention | Léo + Kingsley | Before S4 competency work starts | 🔴 High |
| Core to write exact-match-by-label competency lookup endpoint | Kingsley | Before OTEP-87 competency section builds (S5) | 🟡 Medium |
| Core to expose job family + job function master list endpoint | Kingsley | Before filter work needs it (S4 / S5) | 🟡 Medium |
| Michelle to update open item #18 with decisions from this sync | Michelle | Today | 🔴 High |
| Michelle to update open item #41 (competency dependencies meeting) — close or update with outcomes | Michelle | Today | 🔴 High |
| Confirm with Léo: exact field requirements for job family / job function filter (so Kingsley can build to spec) | Michelle + Léo | Before Kingsley starts | 🟡 Medium |
| Pow Hwee to summarise architecture decision in Slack and link to/under relevant Jira tickets | Pow Hwee | This week | 🟡 Medium |

---

## Key Insights

**Architectural position:** The team is comfortable with a modular monolith and explicitly chose not to over-engineer for a service split. Léo made the clearest articulation: performance and scale are not concerns at this volume; social/team-size reasons don't apply yet.

**OTG label problem:** OTG doesn't export competency codes, only labels. This creates a reconciliation step at import — look up label → get code → store code. This is a known temporary workaround until OTG is replaced (Léo's point: "once we are done with OTG, they can just delete the files").

**C@G competencies:** Careers@Gov competency data will be AI-inferred by OTEP (not sourced from C@G directly), so the label reconciliation problem doesn't apply to C@G. OTEP can emit codes it controls from the start.

**Bounded contexts still fuzzy:** Léo noted the team is not 100% certain the current bounded context boundaries are correct. The interface-layer approach is the right hedge — it isolates without over-committing to a split that may not reflect the final shape.

---

## Open Questions

- [ ] What exact fields does Pathfinder need in the competency lookup response? (label, code, description — anything else?) — **Léo to confirm** — Before Kingsley writes the endpoint
- [ ] What is the full field list for job family / job function master list? — **Michelle + Léo** — Before Kingsley starts
- [ ] Is the job function filter in S4 or S5? Confirm sprint placement — **Michelle** — Before S4 starts (Mon 15 Jun)
- [ ] Should the competency interface be a Go interface (if Core is Go) or something else? — **Pow Hwee + Kingsley** — When writing the endpoint

---

## Open Items Updated

**#18 (Competency SSOT — method, schema, timeline):** Partially resolved by this sync. Architecture decision made (in-code interface, no HTTP). New endpoints needed (exact-match label lookup + job family/function master list). Schema and payload still TBC — Léo to align with Kingsley. Status: 🟡 Architecture decided — endpoint specs in progress.

**#41 (Competency dependencies meeting):** This was that meeting. Core outcomes: interface approach agreed, two new Core endpoints scoped, Léo and Kingsley to align on detail. Status: 🟡 Meeting done — endpoint specs in flight.

---

## Context for Future Reference

- This sync replaced the need for open item #41 (Pow Hwee's competency dependencies meeting). The architectural question is resolved; what remains is endpoint definition between Léo and Kingsley.
- The "no foreign key, store the code" decision directly affects how OTEP-192 (OTG ingestion) and future OTEP-87 competency section handle data. Make sure this is reflected in OTEP-192 follow-on work (OTEP-427 ingestion tightening spike).
- Job grade came up as a potential dependency but was clarified as out of scope for the listing filter. If it resurfaces (e.g. in competency matching logic), revisit with Kingsley.

*Notes captured: 2026-06-11. Source: Dependencies Sync-Up transcript.*
