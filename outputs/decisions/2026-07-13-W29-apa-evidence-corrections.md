---
date: 2026-07-13
week: 2026-W29
type: decision-log
status: in-progress
---

# APA Write-Up — Evidence Corrections & Action Log

Tracking corrections to the panel-ready APA draft following evidence verification (2026-07-13).

---

## Resolved

| # | Claim | Fix | Status |
|---|---|---|---|
| 1 | "Clearing 178 previously blocked gigs" | Reworded to "~150 previously-blocked Enterprise Singapore gigs unblocked (of 178 originally blocked under pre-v3 rules)" — 44 remain blocked | ✅ Applied below |
| 2 | "WOG 23 Job Families" | Corrected to "WOG 30 Job Families" (29 + Healthcare, added after BO review — canonical per `wog-taxonomy-mapping.md`) | ✅ Applied below |
| 3 | "6 AC conflicts intercepted in Sprint 4" | Reverted to "2 AC conflicts" — matches Sprint 4 planning notes and every other draft; no source supports 6 | ✅ Applied below |
| 4 | "~113,000 WOG officers" | Kept as-is per Michelle's confirmation | ✅ No change needed |

---

## Open — Needs Michelle to Produce or Locate

### A. QA/UAT environment separation — ownership framing
**Issue:** Decisions log attributes this to "the Team" at a 9am meeting (2026-06-04), not solely Michelle. Draft currently implies sole ownership ("I proposed...").

**What to produce:** Either (a) find a Slack message, meeting note, or draft doc showing you raised the idea before/at that meeting, or (b) soften the bullet to credit facilitation rather than sole authorship (e.g., "Facilitated team agreement to separate QA and UAT environments").

**Owner:** Michelle

**Needed by:** Before next APA draft round

### B. "0 unlogged scope changes across 4 sprints"
**Issue:** No audit trail anywhere counts or verifies this — it's asserted, not sourced.

**What to produce:** Cross-check the decisions log (`outputs/decisions/2026-05-29-W22-decisions-log.md`, D-001 through D-026+) against sprint scope changes across Sprints 1–4 to confirm every scope call was actually logged. If it holds, you have a real, defensible number. If not fully verifiable, reword to something you can stand behind without an audit, e.g. "Maintained a continuous decisions log (D-001–D-026+) capturing every scope call with rationale, owner, and status."

**Owner:** Michelle

**Needed by:** Before submission — this is a scrutinized/underlined claim

### C. AI Learn-Create-Share session (8 May 2026) — 4.25/5 satisfaction, 75% AI clarity
**Issue:** Not found anywhere in either workspace. No file references this session, date, or these stats.

**What to produce:** Locate the source — likely a survey export, feedback form results, or a recap doc/email that may live outside these two workspaces (e.g., a GovTech PMP-side drive, email, or Slack thread). If found, save it into `context-library/other/` or `outputs/analyses/` so it's traceable next time. If it can't be located, remove the claim or replace with something you can verify.

**Owner:** Michelle

**Needed by:** Before submission — this is a scrutinized/underlined claim, currently zero evidence

### D. D-026 numbering collision
**Issue:** "D-026" is used for two different decisions across your logs — one for OTG ingestion rules v3 (supports the APA claim), one for the ATS World A→B reversal (`00-hub/open-items.md`, weekly review 2026-06-29).

**What to produce:** Not a panel-facing fix, but worth cleaning up the source logs so this doesn't cause confusion if someone cross-references decision numbers later. Renumber one of the two entries (recommend renumbering the ATS reversal, since it's the more recently discovered collision) and note the change in both logs.

**Owner:** Michelle

**Needed by:** No hard deadline — housekeeping, do when convenient

---

## Corrected Impact Section (Items #1–3 applied)

```
Impact:
• Addressed 75% validation failure rate in OTG ingestion, unblocking ~150 previously-blocked
  Enterprise Singapore gigs (of 178 originally blocked under pre-v3 rules; 44 remain blocked)
  o Led discovery and data quality analysis to identify root causes of validation failures
    across 633 live gigs
  o Produced a remediation plan per agency and drove implementation of v3 ingestion rules (D-026)

• Drove standardisation of job taxonomies across OTG, C@G, and CompBank, resolving a
  weeks-long deferred technical decision
  o Mapped three disparate taxonomies and quantified a gap of 210 unmappable listings
  o Presented four options with trade-offs, enabling the technical lead to confirm
    WOG 30 Job Families as the canonical structure

• Executed discovery and scoping for WOG Auth feature, targeting a pilot of 6 agencies and
  ~5,400 officers
  o Identified a 4-story dependency chain for POCDEX prior to sprint planning
  o Restructured sequencing to deliver infrastructure in Sprint 3, preventing blockers for Sprint 4
```

```
Craft & Execution:
• Established Definition of Ready (DoR) audits across 4 sprints, eliminating sprint capacity
  burn on rework and mid-sprint clarifications
  o Intercepted 2 Acceptance Criteria (AC) conflicts in Sprint 4 before reaching engineering
```

(Sprint 3's "2 AC conflicts" bullet elsewhere in the draft is unchanged — both sprints now correctly show 2, matching source.)

---

*Next: resolve items A–D above, then re-run this checklist before final submission to Jace.*
