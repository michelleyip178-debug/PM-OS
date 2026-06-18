---
date: 2026-06-18
topic: Opportunity type recategorisation — STIP + Gig merge
audience: DevOps team
generated_by: /brief
---

# Opportunity Type Recategorisation — Brief for DevOps

> **Purpose:** DevOps has flagged a change to how opportunity types are categorised. This brief explains what CareerCompass currently does with opportunity types, our recommended approach, and the two things we need confirmed before we can move.

---

## Current state (as of Sprint 4)

CareerCompass ingests opportunity data from OTG via Excel export. Each row has a `type` field. At MVP, the types in scope are:

| Type | In MVP? | Apply flow? |
|------|---------|-------------|
| STIP | Yes — ingested and shown | Yes — FormSG redirect |
| Gig | Yes — ingested and shown | Yes — FormSG redirect |
| SJR | No — excluded from ingestion | — |
| Internal Job | No — excluded (R1) | — |
| Secondment | No — excluded (R1) | — |
| PSFG | No — removed from MVP | — |
| C@G External | Yes — via C@G API | Yes — deep-link to Careers@Gov |

At MVP launch, the only two OTG types live in CareerCompass are **STIP and Gig**. They have identical business rules — same validation, same apply flow, same `formsg_url` field. There is no officer-facing reason to keep them separate.

The current 4-category filter model (confirmed I-018, 2026-06-16) shows separate **STIP** and **Gig** filter chips on the listing page. This is what the merge affects.

---

## Recommended approach: display label merge now, data model cleanup later

We recommend shipping the merge in two steps.

**Step 1 — Display label only (now, Sprint 5)**

STIP and Gig remain as distinct values in the OTG Excel export and in the CareerCompass database. The frontend maps both to a single display label on cards and shows one merged filter chip.

- Engineering effort: minimal. Frontend label mapping only. No ingestion changes. Léo is not blocked.
- Unblocks Amber's filter chip design immediately.
- Unblocks OTEP-86 AC update before S5 grooming (26 Jun).
- The `type` field in OTG continues to emit `STIP` and `Gig` as separate values — nothing changes in the Excel export.

**Step 2 — Data model cleanup (pre-R1)**

Once the OTG export change is confirmed and timed, we raise a dedicated story for Léo to update the ingestion transform — collapsing both source values to a single unified type in the database. This gives us a clean model before R1 complexity (Internal Jobs, Secondments) lands.

- Engineering effort: low-medium. Ingestion transform update + validation rule re-expression (I-013, I-015 — both currently identical for STIP and Gig, so logic simplifies).
- No officer-facing change — display is already merged at Step 1.
- Risk: if OTG starts emitting a new type value before OTEP ingestion is updated, rows will fail. Timing coordination between OTG and OTEP is the key dependency.

**Why not do both at once?** Step 2 requires knowing when OTG will change its export format. We don't have that yet. Waiting for it blocks Amber and S5 grooming. Step 1 costs almost nothing and buys time to confirm Step 2 properly.

---

## Design changes this triggers

| Surface | Change | Effort |
|---------|--------|--------|
| Card type badge | New merged label text; confirm badge colour treatment | Minimal |
| Filter chip (OTEP-86) | Merge STIP + Gig into one chip | Low |
| Type explainer modal (OTEP-386) | Collapse 4 entries to 3; rewrite merged type description | Medium — copy + layout |
| Detail page type pill (OTEP-128) | Inherits from card; no Figma change needed | Minimal |

**OTEP-386 is the highest-touch item** — it's a modal that explains each opportunity type to officers in plain language. Current copy names STIP and Gig separately. The merged entry needs one description that covers both concepts (short-term attachment and project-based task) without being wordy. Michelle to draft; Amber to update layout.

All design changes are blocked until the new type name is confirmed.

---

## What we need from you before 26 Jun

Two questions. One conversation.

**Q1: Is the OTG Excel export changing the `type` field values?**
- If no — Step 1 only for now. We proceed immediately.
- If yes — we need the new value and when OTG will start emitting it, so we can time Step 2 and ensure ingestion doesn't break.

**Q2: What is the new merged type name?**
- This is the label that appears on cards, the filter chip, and the type explainer modal in CareerCompass.
- It should be consistent with what OTG shows to agency HR users posting opportunities.

---

## Why this needs to land before 26 Jun

- **OTEP-86** (filter by type) is in QA in Sprint 4. The AC currently names STIP and Gig as separate chips. It cannot be confirmed Done until the AC reflects the merged name.
- **Amber's filter chip design** cannot be locked for S5 without the new name.
- **OTEP-86 type explainer modal (OTEP-386)**, **OTEP-87**, and **OTEP-319** all name "STIP" and "Gig" explicitly — they need updating before S5 dev starts.
- If OTG export is changing (Step 2 needed sooner), Léo needs a story scoped before S5 planning (25 Jun).

---

*Generated: 2026-06-18 · Recommended approach: Option A + C · For DevOps conversation before S5 grooming Thu 26 Jun · Open item #49*
