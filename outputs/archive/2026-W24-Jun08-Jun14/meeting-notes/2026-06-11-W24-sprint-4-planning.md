---
date: 2026-06-11
meeting: Sprint 4 Planning / Backlog Grooming
time: 14:00–16:00
attendees: Michelle (PM), Thomas (FE), Léo (BE), Hao Eng (BE), Pow Hwee (TL/Arch), Rathika (QA), Amber (Design)
sprint: Sprint 3 (ends Fri 12 Jun) → Sprint 4 (15–28 Jun 2026)
---

# Sprint 4 Planning — 11 June 2026

## Sprint 4 Goal (agreed)

> **"Deliver a complete, usable opportunity listing experience — officers can search, filter, and sort opportunities, understand what each type means, and trust that the data they're seeing is current and accurate."**

---

## Sprint 3 Closing State

Sprint 3 ends tomorrow (Fri 12 Jun). Live Jira snapshot at planning:

| Status | Count | Key items |
|--------|-------|-----------|
| Done | 19 | OTEP-192 (OTG ingestion) confirmed Done — a key win going into S4 |
| In QA | 7 | OTEP-85, 86, 128, 268, 305, 317, 391 |
| In Progress | 13 | OTEP-88, 276, 322, 324, 349, 350, 352, 358, 361, 363, 367, 374, 375 |
| Backlog | 7 | OTEP-87, 89, 129, 289, 319, 348, 351 |

**Sprint goal partially met.** OTEP-86 (filters) reached QA — the filter story will likely close. OTEP-319 (FormSG apply redirect) stayed Backlog for the full sprint. Both OTEP-88 (C@G listing) and OTEP-319 carry into S4.

---

## Sprint 4 Scope — Final MoSCoW

Total: **54 story points** (Must 26 / Should 19 / Could 9)

> Full ACs, tasks, and point breakdowns in [S4 planning doc](../analyses/2026-06-11-W24-s4-planning-moscow-acs-tasks-points.md).

### Must (26 pts)

| Ticket | Title | Pts | Assignee |
|--------|-------|-----|----------|
| OTEP-87 | View C@G Opportunity Detail | 6 | Unassigned |
| OTEP-127 | Link POCDEX code table to opportunity API | 3 | Michelle |
| OTEP-328 | [FE] Connect filter UI to live API params | 3 | Unassigned |
| OTEP-329 | [FE/BE] Filter by posted date range | 1 | Pow Hwee |
| OTEP-392 | [FE] Filter parameters — connect to API | 2 | Unassigned |
| OTEP-393 | [FE] Dynamic empty/error states for filtered views | 2 | Unassigned |
| OTEP-403 | [FE/BE] Keyword search on opportunity listing | 5 | Léo |
| OTEP-404 | [FE/BE] Sort opportunities by Posted/Closing date | 3 | Thomas |
| OTEP-405 | Display agency branding on listing and detail pages | 3 | Unassigned |
| OTEP-406 | Keyword search UI — FE implementation | 2 | Unassigned |

### Should (19 pts)

| Ticket | Title | Pts | Assignee |
|--------|-------|-----|----------|
| OTEP-86 | Filter opportunities by type (S3 carry-over) | — | — |
| OTEP-88 | Identify C@G listings (S3 carry-over) | — | — |
| OTEP-283 | Display ministry/agency icon on listing card | 1 | Unassigned |
| OTEP-284 | Display opportunity type label on listing card | 1 | Unassigned |
| OTEP-319 | Apply via FormSG — basic redirect (S3 carry-over) | — | — |
| OTEP-386 | "Learn more" hyperlink for opportunity types in page header | 2 | Unassigned |
| OTEP-131 | Handle missing or broken FormSG application link | 2 | Unassigned |
| OTEP-87 (sub) | OTEP-377: Fetch C@G specific payload in detail API | — | Léo |
| OTEP-87 (sub) | OTEP-378: Map C@G payload to Detail Page UI | — | Thomas |

### Could (9 pts)

| Ticket | Title | Pts | Assignee |
|--------|-------|-----|----------|
| OTEP-89 | View C@G Job (Deep-Link) | 5 | Unassigned |
| OTEP-281 | Loading state for listing page | — | (moved to S5) |

---

## Jira-Sync Findings

Ran a full Sprint 4 jira-sync during planning prep. Key findings:

### Point drift (planning doc estimates vs live Jira)

| Ticket | Planning doc | Live Jira | Delta |
|--------|-------------|-----------|-------|
| OTEP-405 | 6 | 3 | -3 |
| OTEP-406 | 5 | 2 | -3 |
| OTEP-403 | 5 | 5 | 0 |
| OTEP-386 | 2 | 2 | 0 |
| OTEP-329 | 1 | 1 | 0 |

The planning doc totals were drafted before live Jira had estimates set. The Jira values are now canonical. Grand total: 54 pts (was 57 before S3 carry-overs removed).

### Tickets relocated from S4

| Ticket | Moved to | Reason |
|--------|----------|--------|
| OTEP-281 (loading state) | Sprint 5 | Jira shows S5; consistent with "Could" deprioritisation |
| OTEP-304 (idle timeout) | Sprint 5 | S3 carry-over; auth work deferred |
| OTEP-110 (login fail - WOG AD) | Backlog | No sprint assigned in Jira; auth epic gated on WOG AD (#26) |

### New Michelle spike tickets in S4 (not in planning doc)

Two PM-owned spikes appeared in Jira under Sprint 4 that weren't in the planning doc:

- **OTEP-427** — [Spike] Tighten OTG ingestion logic (3 pts, Michelle). Follows OTEP-192 Done. Scope: edge cases, field validation, error handling from live import findings.
- **OTEP-397** — [Spike] Discover OTG excel file upload — Flow and UI (3 pts, Michelle). CFT integration discovery. PM-owned; doesn't affect engineering delivery points.

These are discovery/PM work — they don't add to the engineering capacity calculation but should be tracked in the sprint scope.

---

## Sprint 4 Readiness Assessment

### Blockers (5 — must resolve before 15 Jun)

1. **OTEP-87 AC conflict** — Pow Hwee flagged twice. FormSG redirect vs C@G deep-link boundary still unclear. Michelle to resolve before S4 starts.
2. **C@G payload schema** — Thomas needs the field mapping before OTEP-378 (Map C@G payload to UI). Pow Hwee owns; confirm by Mon 15 Jun.
3. **OTEP-403/404 assignees** — keyword search (Léo) and sort (Thomas) confirmed at planning. Sub-task assignment for FE vs BE split still needs formalising in Jira.
4. **OTEP-192 carry-forward impact** — now Done (S3 win), but edge cases from live import revealed by the spike (OTEP-427) need scoping before sprint starts. Michelle to timebox.
5. **CFT / virus scan integration** — OTEP-391 (virus scanning spike, Hao Eng) still In Progress at end of S3. Outcome gates file upload work. Must close before S4 file-upload stories start.

### Design gates (4 — must have Amber sign-off before build)

1. **OTEP-386** — "Learn more" hyperlink in page header. Design confirmed (inline link pattern). ACs updated. Amber sign-off needed on final Figma link before Thomas picks it up.
2. **OTEP-283** — Ministry/agency icon on listing card (top-right corner). ACs written from screenshot. Figma assets must be linked in ticket before dev starts.
3. **OTEP-284** — Opportunity type label on listing card. Simple text label; Amber confirmation on label copy and placement needed.
4. **OTEP-393** — Dynamic empty/error states for filtered views. Needs Amber to confirm empty-state illustration and copy before FE build.

### Capacity sense-check

- Thomas (sole FE): 3 active S3 items closing + 4 S4 FE tickets. WIP still elevated — don't add scope in week 1.
- Léo (BE): OTEP-192 now Done. OTEP-403 (keyword search BE) is the S4 anchor. Reasonable load.
- Hao Eng: OTEP-391 spike closes S3; then joins S4 work. Confirm capacity at Mon standup.
- Michelle: OTEP-127 + OTEP-427 + OTEP-397 (3 PM-owned items). Discovery spikes are time-boxed; should not block engineering ceremonies.

---

## Decisions Made at Planning

| # | Decision | Owner |
|---|----------|-------|
| D-new | S4 goal locked: "complete, usable listing experience" | Michelle |
| D-new | OTEP-319 (FormSG apply) and OTEP-88 (C@G listing) confirmed as S4 Should tickets (S3 carry-overs) | Michelle |
| D-new | Default listing: officers without a profile or competencies see the full listing, no personalisation applied — no gating, no empty state at listing level | Michelle |
| D-new | OTEP-281 (loading state) moved to S5 — accepted by team | Michelle |
| D-new | OTEP-304 (idle timeout) moved to S5 — auth work still gated | Michelle |
| D-new | OTEP-131 (missing FormSG link) added to S4 as Should (2 pts) | Michelle |
| D-new | SJR out of scope for OTEP-131 (no Apply button on SJR detail) | Michelle |

---

## Open Items Raised at Planning

| # | Item | Owner | Due |
|---|------|-------|-----|
| New | Fix OTEP-87 AC conflict (FormSG vs deep-link boundary) | Michelle | Mon 15 Jun |
| New | Confirm OTEP-427 spike scope + timebox | Michelle | Mon 15 Jun |
| New | Confirm OTEP-397 scope + timebox (CFT / file upload) | Michelle | Mon 15 Jun |
| #18 | Competency SSOT — Imelda sync (method, schema, timeline) | Michelle | This week |
| #30 | CSC SSO ownership + feasibility | Michelle / Pow Hwee | This week |
| #40 | R1 scope confirmation — Mark | Michelle | ASAP |

---

## Action Items

- [ ] **Michelle** — Fix OTEP-87 AC conflict in Jira before S4 day 1 (Mon 15 Jun)
- [ ] **Michelle** — Timebox and scope OTEP-427 (ingestion tightening spike)
- [ ] **Michelle** — Timebox and scope OTEP-397 (file upload discovery spike)
- [ ] **Michelle** — Update planning doc point totals to match live Jira values
- [ ] **Pow Hwee** — Confirm C@G payload schema for Thomas (OTEP-378) by Mon 15 Jun
- [ ] **Amber** — Link Figma assets in OTEP-283, OTEP-386, OTEP-284, OTEP-393 before dev starts
- [ ] **Thomas** — Close S3 tickets (OTEP-367, OTEP-374 sub-tasks) by EOD Fri 12 Jun
- [ ] **Hao Eng** — Confirm OTEP-391 spike output and capacity for S4 at Mon standup

---

## Context

- Sprint 4 dates: **15–28 Jun 2026** (starts Mon 15 Jun after planning ceremony today)
- Planning doc: [S4 MoSCoW + ACs + Tasks](../analyses/2026-06-11-W24-s4-planning-moscow-acs-tasks-points.md)
- Jira-sync: 18 live S4 issues pulled; 6 new cache files created; 3 files relocated; all story points corrected from N/A
- Stale-check: sprint-status.md and tasks-active.md corrected to live Jira counts (46 issues, 19D/13IP/7QA/7BL)

*Meeting notes captured: 2026-06-11. Source: jira-sync + stale-check outputs from session.*
