# Meeting Notes: Sprint 3 Planning

**Date:** 2026-05-28
**Sprint:** Sprint 3 (2–12 Jun 2026)
**Meeting type:** Sprint Planning
**Attendees:** Michelle (PM), Pow Hwee (Tech Lead), Rama, Amber (Designer), Kingsley, Radhika, Soumya, Fang Zhu, Victor (AI track), Pathfinder team
**Facilitator:** Michelle

---

## Summary

Sprint 3 scope is locked across three tracks. Core team shifts focus from foundations (Sprint 2) to functional completeness of competency management: add, delete, and hide flows with a separate competency search API. Pathfinder team continues opportunity listing work — type filtering, filter state persistence, and Careers@GovTech redirect flow. AI track defers the feedback loop (no clarity on data model yet) and focuses on environment setup and evaluation layer. Design lock deadline is Wednesday 3 June.

---

## Decisions Made

### 1. Use "competency" terminology everywhere — not "skills"
- **Why:** Consistency with OTG's language; reduces confusion for officers familiar with OTG
- **Impact:** All UI copy, API field names, and internal references updated to use "competency"
- **Owner:** Amber to audit Figma; Kingsley to check API field names

### 2. Competency API split from profile API
- **Why:** Separation of concerns — competency management logic will grow, keeping it separate avoids bloating the profile API
- **Search API specs:**
  - Returns core + functional competencies only
  - Excludes competencies already added by the officer
  - Triggers after 3 characters entered
  - Priority: "starts with" first, then "contains"
  - Max 20 results returned
- **Backend:** Returns first 20; frontend handles display pagination for now
- **Impact:** Kingsley implements as standalone endpoint(s)

### 3. Role competencies are hide-only; additional competencies are fully editable
- **Why:** Officers shouldn't lose visibility of role-required competencies permanently — hiding preserves the data while decluttering the view
- **Behaviour:**
  - Role competencies → hide only (stored, removed from profile view)
  - Additional competencies → can add or delete
  - Hidden competencies → soft-removed from display, not deleted from DB
- **Impact:** Affects API design (hide vs delete endpoints) and UI state management

### 4. OTG competency migration: file ingestion, not live API
- **Why:** OTG does not expose a real-time API — data comes via Excel file/manual export
- **Approach:**
  - One-time bulk import of all officers' OTG competencies into a temporary DB table
  - On first login: pull officer's OTG competencies using user ID
  - Mapping logic: if competency already in role → ignore; else → add as "additional competency"
- **Sync limitations:** No ongoing automatic updates; subsequent syncs are manual
- **Owner:** Fang Zhu
- **Note:** This is separate from POCDEX (OTEP-271/203) — that's the job family/competency catalog for the ringfencing feature; this migration is about officer-level personal competency data

### 5. Feedback loop deferred to a later sprint
- **Why:** No clarity yet on what data to capture or how users will interact with feedback
- **Impact:** Victor focuses Sprint 3 on environment setup and evaluation layer only
- **Revisit:** Define requirements before adding to a future sprint

### 6. Demo sequence: internal validation first, then stakeholders
- **Sequence:** Michelle validates internally with team → share with Jacky and Mark
- **Framing:** Manage expectations — iterative product, not final state

### 7. Design locked Wednesday 3 June (end of Sprint 3 day 2)
- **Why:** Engineers need a single "final" Figma to avoid building against moving targets
- **Constraint:** Engineers must not start UI development until Amber signs off final version
- **Risk if missed:** Dev starts building against intermediate designs, causing rework

---

## Action Items

| Task | Owner | Due Date | Priority |
|------|-------|----------|----------|
| Lock and publish final Figma for competency management flows | Amber | Wed 2026-06-04 | High |
| Implement competency search API (separate from profile API) | Kingsley | Sprint 3 | High |
| Implement add / hide / delete competency endpoints | Kingsley | Sprint 3 | High |
| OTG bulk competency import (temp table + first-login sync logic) | Fang Zhu | Sprint 3 | High |
| QA across Core, Pathfinder, and AI tracks | Radhika | Sprint 3 | High |
| Continue infrastructure spillover tasks | Soumya | Sprint 3 | Medium |
| Define feedback loop data requirements and evaluation data model | Victor | Sprint 3 | Medium |
| Opportunity type filter + filter state persistence | Pathfinder team | Sprint 3 | High |
| Careers@GovTech redirect flow (no in-app apply) | Pathfinder team | Sprint 3 | High |
| Internal demo validation before sharing with Jacky + Mark | Michelle | Before demo | High |
| Confirm OTG data refresh cadence with Pow Hwee + Rama | Michelle | w/c 2026-06-01 | Medium |

---

## Open Questions

- [ ] **OTG sync cadence:** How frequently should OTG data be refreshed after initial import? Weekly? Monthly? Who triggers it? -- Owner: Michelle + Pow Hwee -- By: w/c 2 Jun
- [ ] **New vs existing officers:** How do we identify officers who joined after the initial bulk import? Do they get an OTG sync on first login regardless? -- Owner: Fang Zhu + Kingsley -- By: w/c 2 Jun
- [ ] **Pilot agency restriction:** Should we restrict OTG competency import to pilot agencies only in Sprint 3? -- Owner: Michelle -- By: Sprint 3 start
- [ ] **"Next role" definition logic:** How do we determine what an officer's next role is? This blocks the AI track's progression features -- Owner: Michelle + Pow Hwee -- By: Sprint 4 planning
- [ ] **Hide vs delete API:** One combined endpoint or separate endpoints for hide and delete? -- Owner: Kingsley -- By: API design session w/c 2 Jun
- [ ] **Backend pagination:** When do we introduce backend-side pagination? Frontend handling 20 results is a short-term workaround -- Owner: Pow Hwee -- By: Sprint 4 planning
- [ ] **Competency descriptions:** Retrieved via profile API or separate call? -- Owner: Kingsley -- By: API design session w/c 2 Jun
- [ ] **AI feedback loop:** What user interaction data to collect? Batch vs real-time processing? -- Owner: Victor -- By: end of Sprint 3

---

## Context Notes

**Cross-track dependency to watch:** Fang Zhu's OTG migration (Core) and Pathfinder's data pipeline work are both feeding into the same officer-facing experience. Coordinate on any shared DB tables.

**POCDEX clarification:** The OTG competency migration (Fang Zhu) is officer-level data: importing each officer's personal competencies from OTG. POCDEX (OTEP-271/203, Leo + Pow Hwee) is reference catalog data: job families and competency definitions used by the ringfencing feature in Sprint 4. These are different tables, different owners, different consumers — don't conflate them.

**Stakeholder context:**
- **Jacky** will see the demo after internal validation. Design decisions and scope calls go through Jacky. Expectations should be set clearly — this is iterative.
- **Mark** is also on the demo list post-internal validation. No profile on file — confirm his role and what he needs to see before the demo.

---

## Next Steps

**This week (before Sprint 3 starts):**
- Amber finalises Figma and flags if any open design decisions need Michelle input before Wednesday lock
- Confirm OTG data refresh cadence and pilot agency restriction before sprint kicks off
- Victor documents initial requirements for feedback loop data model (even if deferred)

**Sprint 3 (2–12 Jun):**
- Core: Competency add/hide/delete + OTG migration
- Pathfinder: Type filter, filter state, redirect flow, no-results page, tooltip
- AI: Environment setup + evaluation layer (feedback loop deferred)
- Demo: Internal → Jacky + Mark (exact date TBC)

**Sprint 4 (planning TBC):**
- POCDEX ringfencing feature (OTEP-127) unblocked by OTEP-271 + OTEP-203
- "Next role" logic definition needed before AI track can proceed on progression features

---

*Generated: 2026-05-28*
*Next: Run `/status-update` ahead of Jacky demo. Use `/create-tickets` for any open questions that need tracking as Jira tasks.*
