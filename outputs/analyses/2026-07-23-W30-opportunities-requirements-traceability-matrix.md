---
date: 2026-07-23
week: 2026-W30
topic: Opportunities — Requirements Traceability Matrix (by feature)
status: current as of 2026-07-24
---

# Requirements Traceability Matrix — Opportunities (Unified Discovery Hub)

**Source:** [PRD](../../context-library/prds/opportunities-listing.md), live Jira, and the [Consolidated Test Plan — Pathfinder](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481753934).

---

## Coverage Summary

| Status | Count |
|---|---|
| Features with published BO test cases | 5 of 7 (Listing, Filtering, Detail Page, Ringfencing, Apply) |
| Features with no BO test cases yet | Search, Login |
| Total BO-executable test cases published | 50 |

---

## Feature: Listing & Discovery

| Req ID | Requirement | Jira ID | Build Status | Test Coverage |
|---|---|---|---|---|
| REQ-01 | Opportunity card listing — 3-col grid, 15/page, auth-gated, ringfenced | OTEP-85 | ✅ Done | ✅ Covered |
| REQ-02 | Pagination | OTEP-267 | ✅ Done | ✅ Covered |
| REQ-03 | Empty / error / partial-load states | OTEP-268 | ✅ Done | ✅ Covered |
| REQ-08 | "Closing soon" label (≤7 days) — card + detail | OTEP-284 | ✅ Done | ✅ Covered |
| REQ-09 | Ringfencing via POCDEX | OTEP-127 | ✅ Done | ✅ Covered (see Ringfencing) |

---

## Feature: Opportunity Detail Page

| Req ID | Requirement | Jira ID | Build Status | Test Coverage |
|---|---|---|---|---|
| REQ-05 | Opportunity detail page | OTEP-128 | ✅ Done | ✅ Covered |
| REQ-16 | Detail page: apply CTA + competencies | OTEP-87 | 🟡 QA | ✅ Covered |
| REQ-20 | Competency-match display on opportunity cards | — | ✅ Done | ✅ Covered |

---

## Feature: Filtering & Search

| Req ID | Requirement | Jira ID | Build Status | Test Coverage |
|---|---|---|---|---|
| REQ-10 | Keyword search | OTEP-405 | 🟠 In Progress | ❌ Not written |
| REQ-11 | Filter opportunities by type (Jobs, STIPs, Gigs) | OTEP-86 | ✅ Done | ✅ Covered |
| REQ-12 | Filter by category | OTEP-318 | 🔲 Backlog | ❌ Not applicable — no ACs yet |
| REQ-13 | Clear all filters | OTEP-317 | ✅ Done | ✅ Covered |

---

## Feature: Ringfencing

| Req ID | Requirement | Jira ID | Build Status | Test Coverage |
|---|---|---|---|---|
| REQ-09 | Ringfencing rule engine — Master Switch, Include/Exclude rules | OTEP-127, OTEP-390, OTEP-408, OTEP-409 | ✅ Done | ✅ 17 cases written — blocked on 3 test accounts not yet reserved |

---

## Feature: Careers@Gov Integration

| Req ID | Requirement | Jira ID | Build Status | Test Coverage |
|---|---|---|---|---|
| REQ-17 | C@G opportunities in listing page (label) | OTEP-88 | 🟠 In Progress | ❌ Not written |
| REQ-18 | C@G deep-link apply CTA / View C@G Job | OTEP-89 | ✅ Done | ✅ Covered |
| REQ-19 | EDM deep-link landing | OTEP-133 | ✅ Done | ❌ Not written |

---

## Feature: Application / Apply Flow

| Req ID | Requirement | Jira ID | Build Status | Test Coverage |
|---|---|---|---|---|
| REQ-14 | Apply via FormSG — basic redirect | OTEP-319 | ✅ Done | ✅ Covered |
| REQ-15 | Apply via FormSG — PostHog tracking | OTEP-130 | 🔲 Backlog | ❌ Not applicable — pending duplicate-vs-keep decision |

---

## Feature: Login / Authentication

| Req ID | Requirement | Jira ID | Build Status | Test Coverage |
|---|---|---|---|---|
| REQ-71 | Login via WOG AD | OTEP-71 | 🟡 In Progress | ❌ Not written — blocked on WOG AD swap |

---

## Cross-Cutting

| Req ID | Requirement | Status |
|---|---|---|
| REQ-X1 | Application Completion Rate instrumentation (PostHog events) | ⚠️ Not verified |
| REQ-X2 | Competency-to-opportunity matching (agency-code resolution) | 🔴 Unresolved |
| REQ-X3 | FormSG pre-fill via URL params | 🔴 Unresolved |

---

## Open Blockers

1. **Ringfencing test accounts** — 3 accounts (eligible, ineligible, incomplete-profile officer) not yet created or reserved.
2. **REQ-X2 (agency-code gap)** — affects REQ-20's competency-match test cases; unresolved as of this pull.
3. **Search and Login** — no BO test cases written yet.
4. **REQ-16 (OTEP-87)** — Jira/PRD AC mismatch not yet reconciled.
