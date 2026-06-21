---
date: 2026-06-18
meeting_type: Backlog Grooming (S5 candidate review)
topic: Opportunity type recategorisation — raised before ticket grooming could proceed
sprint: Sprint 4 active (15–28 Jun); S5 grooming Thu 26 Jun
generated_by: /meeting-notes
---

# Meeting Notes: S5 Grooming — Opportunity Type Recategorisation

**Date:** 18 Jun 2026 (W25)

**Meeting type:** Backlog grooming (S5 candidate stories)

**Outcome:** Ticket grooming did not proceed. Session pivoted to scoping the DevOps decision on opportunity type recategorisation and its impact on S5 delivery.

---

## Summary

Grooming on S5 candidate stories did not happen. Michelle raised the DevOps decision to recategorise opportunity types (STIP + Gig merge) as a blocker — without knowing the final model and scope of change, she couldn't groom stories that reference the current type structure. The session was used to analyse the options and agree a recommended approach instead. Grooming of OTEP-408, OTEP-409, OTEP-390, OTEP-304, and OTEP-87 carries to the next session (S5 grooming Thu 26 Jun).

---

## Why Grooming Was Deferred

The following S5 candidate stories all reference opportunity types explicitly — either in ACs, filter chip logic, or user-facing copy:

- **OTEP-86** (filter by type) — AC names "STIP" and "Gig" as separate chips. In QA in S4.
- **OTEP-87** (C@G detail page) — AC names "Internal Job, STIP, or Gig" for apply CTA logic.
- **OTEP-319** (apply via FormSG) — User story names "Internal Jobs, STIPs, Gigs" explicitly.
- **OTEP-386** (type explainer modal) — Copy hardcodes separate STIP and Gig descriptions.
- **OTEP-408/409** (ringfencing — S5) — Eligibility logic references opportunity types in BE filter and FE display.

Grooming any of these without knowing whether STIP and Gig become one type — and whether that's a data model change or display-label only — would mean writing ACs we'd have to rewrite immediately. Better to get the answer first.

---

## Decision Made

**Recommended approach agreed: Option A + C (display label merge now, data model cleanup pre-R1).**

**Step 1 — Display label only (S5, immediate):**
STIP and Gig remain as separate values in the OTG Excel export and OTEP database. The frontend maps both to one merged display label on cards and shows a single filter chip. No ingestion changes. Unblocks Amber and OTEP-86 immediately.

**Step 2 — Data model cleanup (pre-R1):**
Once DevOps confirms when/if the OTG Excel `type` field value changes, Léo raises a story to update the ingestion transform. This collapses both source values to a single unified type in the database before R1 complexity (Internal Jobs, Secondments) lands.

**Rationale:** STIP and Gig have identical business rules — same validation, same apply flow, same `formsg_url` field. There is no officer-facing reason to keep them separate. Deferring the data model cleanup avoids S5 scope risk while unblocking design.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Confirm with DevOps: is the OTG Excel `type` field value changing, or display-label only? | Michelle | Before S5 grooming (26 Jun) | 🔴 Blocks everything |
| Confirm new merged type name from DevOps | Michelle | Before S5 grooming (26 Jun) | 🔴 Blocks Amber + OTEP-86 AC |
| Update OTEP-86 AC to reflect merged type name (once name confirmed) | Michelle | Before S5 planning (25 Jun) | 🔴 OTEP-86 in QA — cannot be marked Done until AC updated |
| Update OTEP-87 and OTEP-319 story ACs — remove separate STIP/Gig references | Michelle | Before S5 dev starts | 🟠 |
| Update type explainer modal copy (OTEP-386) — collapse 4 entries to 3, rewrite merged type description | Michelle (copy) + Amber (layout) | Before S5 design lock | 🟠 |
| Amber: update filter chip design — merge STIP + Gig into one chip | Amber | Once name confirmed | 🟠 Blocked on name |
| Reschedule S5 ticket grooming — OTEP-408, OTEP-409, OTEP-390, OTEP-304, OTEP-87 | Michelle | Before S5 grooming (26 Jun) | 🟡 |
| Log Option B (data model cleanup) as a pre-R1 story in backlog | Michelle | W26 | 🟡 |

---

## Open Questions

- [ ] Is the OTG Excel `type` field value changing? — **Michelle → DevOps** — before 26 Jun
- [ ] What is the new merged type name? — **Michelle → DevOps** — before 26 Jun
- [ ] If OTG export is changing, when does it take effect? — **Michelle → DevOps** — before 26 Jun (determines urgency of ingestion story for Léo)
- [ ] Does the SJR filter chip show (empty) or hide entirely at MVP? — **Michelle → BOs** — tied to open item #43

---

## Impact on S5 Stories

| Story | Impact | Unblocked by |
|-------|--------|-------------|
| OTEP-86 (filter chips) | AC must be updated before Done can be marked | New type name from DevOps |
| OTEP-87 (C@G detail) | AC language update — "STIP or Gig" → merged name | New type name |
| OTEP-319 (FormSG apply) | User story + AC update | New type name |
| OTEP-386 (type explainer modal) | Copy rewrite + layout update in Figma | New type name + Michelle draft |
| OTEP-408/409 (ringfencing) | No direct AC impact — type logic is BE-owned | Confirmed, no blocker |
| Amber's filter design | Cannot finalise filter chip Figma | New type name |

---

## Design Changes Required (once name confirmed)

| Surface | Change | Effort |
|---------|--------|--------|
| Card type badge | New label text; confirm badge colour | Minimal |
| Filter chip (OTEP-86) | Merge STIP + Gig into one chip | Low |
| Type explainer modal (OTEP-386) | Collapse 4 entries to 3; rewrite merged description | Medium |
| Detail page type pill (OTEP-128) | Inherits from card; no Figma change needed | Minimal |

---

## Next Steps

**Before S5 grooming (Thu 26 Jun):**
1. Michelle to have the DevOps conversation — Q1 (export changing?) and Q2 (new name?) must both be answered.
2. Once name confirmed: update OTEP-86 AC, brief Amber to update filter chip design.
3. Reschedule S5 ticket grooming for OTEP-408, 409, 390, 304, 87 — these are still DoR candidates but were not reviewed today.

**Reference doc:** [Opportunity type recategorisation brief for DevOps](../analyses/2026-06-18-W25-opportunity-type-recategorisation-brief.md)

**Open item:** #49 in `00-hub/open-items.md`

---

*Notes: Michelle · 2026-06-18 · S5 grooming deferred pending DevOps confirmation*
