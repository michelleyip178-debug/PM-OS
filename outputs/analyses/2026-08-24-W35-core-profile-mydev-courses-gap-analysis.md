---
date: 2026-08-24
week: 2026-W35
scope: PRD → build ticket → UAT traceability for Core team's three epics — Officer Profile, My Development, Learning & Course Discovery
---

# Gap Analysis — Core Team: Profile, My Development, Courses

## TL;DR

Pulled straight from the three epics' Jira backlogs (40 tickets total, `parent in (OTEP-67, OTEP-68, OTEP-58)`):

| Epic | Done | QA | In Progress | Backlog | Total |
|---|---|---|---|---|---|
| **OTEP-67 Profile** | 10 | 2 | — | 3 | 15 |
| **OTEP-68 My Development** | 3 | 13 | — | — | 16 |
| **OTEP-58 Courses** | 1 | 5 | 1 | 2 | 9 |

Profile and Courses are mostly done. My Development is deep in QA (13 of 16 stories) — essentially one person's queue, Pei Ern Lim owns nearly all of it. Nothing is currently blocked; the open items below are either QA-stage (normal sequencing) or genuinely not-yet-started and worth a scope confirm.

All three PRDs are stale relative to this backlog — none reference several of the tickets below, and My Development's PRD references none of its 16 tickets at all.

---

## What I checked

- **Epic backlog (authoritative):** direct Jira query, `parent in (OTEP-67, OTEP-68, OTEP-58)` — the board structure behind [this Core board view](https://sgtechstack.atlassian.net/jira/software/c/projects/OTEP/boards/13640/backlog?issueParent=2372534,2294522,2372543), filtered to exactly these three epics.
- **PRD layer:** two versions per epic — an early-May structured PRD (`context-library/prds/officer-profile.md`, `my-development.md`, `learning-course-discovery.md`) and a fuller Confluence export (`epic1-officer-profile-page.md`, `epic2-my-development-page.md`, `epic3-learning-course-discovery.md`; last updated 4 Aug / 18 Aug / 9 Jun).
- **UAT layer:** live Jira, `labels in (CORE, core)` project-wide (100 tickets, includes duplicates — see Finding 4).

---

## Officer Profile (OTEP-67) — 10 Done, 2 QA, 3 Backlog

| Ticket | Story | Status | Owner |
|---|---|---|---|
| OTEP-74 | Profile Details | Done | Imelda Mo |
| OTEP-75 | View My Competencies | Done | — |
| OTEP-105 | Port over existing OTG competencies | Done | — |
| OTEP-112 | Add competencies without CIE | Done | — |
| OTEP-126 | Delete and Hide Competencies | Done | — |
| OTEP-290 | Report issue button | Done | — |
| OTEP-388 | Role competencies for multiple job ID | Done | Pei Ern Lim |
| OTEP-980 | Login — Error State Handling | Done | Pei Ern Lim |
| OTEP-1187 | Integration tests for login error states | Done | Pei Ern Lim |
| OTEP-1201 | Add guard check for eligible agencies | Done | Pei Ern Lim |
| OTEP-609 | Port over OTG Comps using ID | QA | rama moorthy |
| OTEP-610 | Add agency suffix to duplicated competencies | QA | Kingsley Low |
| **OTEP-232** | **Officers who are double-hatting** | **Backlog — not built** | Unassigned |
| OTEP-364 | Update OTG competency information | Backlog | Kingsley Low |
| OTEP-665 | Job family and function database design | Backlog | Unassigned |

**OTEP-232 is worth a BO confirm.** The Profile PRD's "will not include double-hatting information" line is currently accurate — the ticket is unbuilt, sitting unassigned in Backlog. Worth confirming that exclusion still holds before someone picks it up without checking back.

---

## My Development (OTEP-68) — 3 Done, 13 QA

| Ticket | Story | Status | Owner |
|---|---|---|---|
| OTEP-521 | Based on your current role — blank state | Done | Pei Ern Lim |
| OTEP-698 | Explore new roles — change order of filters | Done | Adrian Lo |
| OTEP-789 | Based on current role — multiple job ID | Done | Pei Ern Lim |
| OTEP-421 | My Dev — Profile Details panel | QA | Pei Ern Lim |
| OTEP-447 | Based on current role (recommendations) | QA | Pei Ern Lim |
| OTEP-450 | Explore New Roles — Search and Filter | QA | Pei Ern Lim |
| OTEP-491 | My Dev — Course Swimlanes | QA | Pei Ern Lim |
| OTEP-493 | Explore New Roles — Search Listing and Details | QA | Pei Ern Lim |
| OTEP-512 | My Dev — Profile page edge cases | QA | Pei Ern Lim |
| OTEP-669 | Remove grade suffix from role profiles | QA | Kingsley Low |
| OTEP-694 | Add agency and job function in role panel | QA | Pei Ern Lim |
| OTEP-744 | Seed Test Data for "Your Development" | QA | Kingsley Low |
| OTEP-770 | Ringfencing for JR7 and below | QA | Kingsley Low |
| OTEP-783 | [DEMO] Changes to address demo comments | QA | Pei Ern Lim |
| OTEP-1286 | Based on current role — have role, no rec roles empty state | QA | Pei Ern Lim |
| OTEP-1345 | [BUG] Search roles returns 403, 502 | QA | Adrian Lo |

Pei Ern Lim owns 11 of 16 tickets outright, Kingsley Low owns 4, Adrian Lo owns 2 (including the open 403/502 bug, OTEP-1345). A status check on My Development is effectively a status check on Pei Ern.

**PRD gap:** both PRD versions reference zero of these 16 tickets. The May version says IDs are missing and need raising at grooming — the epic clearly was raised and built since, the PRD text just never caught up.

---

## Courses (OTEP-58) — 1 Done, 5 QA, 1 In Progress, 2 Backlog

| Ticket | Story | Status | Owner |
|---|---|---|---|
| OTEP-1362 | [BUG] Optimise the course's search | Done | Pei Ern Lim |
| OTEP-83 | Course Discovery page (search and filter) | QA | Pei Ern Lim |
| OTEP-84 | Course detail page | QA | Pei Ern Lim |
| OTEP-321 | Course Catalog Ingestion from Cumulus | QA | Unassigned |
| OTEP-602 | Course landing page and tile design | QA | Pei Ern Lim |
| OTEP-812 | [BUG] Open issues for courses page | QA | Pei Ern Lim |
| **OTEP-1238** | **[BUG] Courses with duration = 0 are NOT imported into db** | **In Progress** | Kingsley Low |
| OTEP-82 | Jumpstart Reco POC 1 | Backlog | Unassigned |
| OTEP-516 | Import DLE ID for POCDEX ID for JumpStart Integration | Backlog | Unassigned |

**OTEP-1238 is the only actively-worked item across all three epics** — courses with no listed duration silently fail to import. Worth a status check.

**OTEP-82 and OTEP-516 are both Jumpstart-related and unassigned**, despite Jumpstart integration being Must-Have per the Courses PRD — worth confirming these haven't stalled for lack of an owner.

---

## Finding 4: 21 UAT test cases are stale duplicates, not real gaps

Separate from the epic backlog above — the `CORE`/`core`-labeled UAT test-case tracker (100 tickets total) has 21 "Backlog" entries that are exact-title duplicates of already-Done tickets one number higher (e.g. OTEP-910 Backlog duplicates OTEP-932 Done; pattern repeats across LAND-02–06, DISC-01–07, DTL-01–08). One (OTEP-933) is explicitly tagged `[ARCHIVED]`, confirming known cleanup debt, not live scope — same shape as the ~75-ticket duplicate problem already tracked on the Pathfinder side.

**Real remaining UAT gaps** (not duplicates): OTEP-875, 882-885, 896 — all trace to My Development stories still in QA above — and OTEP-948 (Ready For UAT).

**Action:** batch-confirm-and-close the 21 duplicates. Low urgency, but they inflate Backlog counts for anyone checking test-case status without cross-referencing for a Done twin.

---

## Documentation gaps

- **PRD header fields incomplete** across all three Confluence exports — Tech, Designer, and (for Profile/MyDev) Epic Link are blank. Courses' Epic Link still reads the unfilled placeholder "Link to Jira Epic (PM to input)," as of its 9 Jun last-update.
- **Target launch (October 2026)** is unchanged across all three PRDs — none reference the 18-Aug PS/DS-approved Oct→Nov shift already applied elsewhere. Worth checking whether these three need the same date correction.
- **Unresolved cross-epic policy question, no owner update since May:** *"Should we block the OTG competency view for the pilot cohort to avoid confusion over dual systems?"* — raised independently in both the Profile and My Development PRDs, reads as one decision, not two (Imelda + WD).
- **Courses' DLE API dependency** — PRD states the API was delayed to Q3 2026, with MVP relying entirely on SFTP file transfers. No workspace update confirming whether Q3 2026 (now) has actually delivered the API.
- **Three PRD-cited story IDs (OTEP-72, 79, 323) don't exist in Jira** — none appear in the epic backlogs above either. OTEP-79's own PRD text flags it as "[TBC] waiting for design," so its absence may be deliberate; OTEP-72 and OTEP-323 have fully-specified acceptance criteria with no such caveat.

---

## What I'd check next, in order

1. **Confirm OTEP-232's scope with the BO** before it gets picked up from Backlog.
2. **Check status on OTEP-1238** (Courses duration-import bug, In Progress) and **OTEP-1345** (My Dev 403/502 bug, QA) — the two live bugs in this scope.
3. **Confirm OTEP-82 and OTEP-516's Jumpstart integration hasn't stalled** — both unassigned, both Must-Have.
4. **Update all three PRDs to reference their actual epic backlogs** — a documentation-sync fix now that the real ticket lists are known.
5. **Batch-confirm-and-close the 21 duplicate UAT test-case tickets.**

---

*Sources: live Jira — `parent in (OTEP-67, OTEP-68, OTEP-58)` (epic backlog, 40 tickets, authoritative), `labels in (CORE, core)` (UAT test-case tracker, 100 tickets) — pulled 2026-08-24; `context-library/prds/officer-profile.md`, `epic1-officer-profile-page.md`, `my-development.md`, `epic2-my-development-page.md`, `learning-course-discovery.md`, `epic3-learning-course-discovery.md`.*
