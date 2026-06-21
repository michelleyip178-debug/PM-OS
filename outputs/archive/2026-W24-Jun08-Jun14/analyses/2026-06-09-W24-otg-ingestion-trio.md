---
date: 2026-06-09
topic: OTG Ingestion Model — Product Trio Analysis
status: Decision confirmed
decision_owner: Pow Hwee / Michelle
---

# OTG Ingestion — Product Trio Analysis

## Context

The OTG ingestion pipeline has accumulated decisions across multiple sprints but lacked a complete, written field contract. Six open items surfaced from the engineer's perspective (Léo's skip-logic question, upload permissions, CFT sequence diagram, nil-date spike, OTEP-348 ownership, OTEP-192 AC gaps). This analysis maps the trio's response to each.

**Confirmed decision (2026-06-09, Pow Hwee):** Hard skip any record with any missing or unresolvable mapped field. No tiered approach. No partial imports. No UI fallback for missing data fields.

---

## The Core Decision and What It Resolves

**Rule:** If any OTEP-mapped field in an OTG Excel row is missing, null, or unresolvable — the entire row is skipped. Only records with all required fields present and resolvable are ingested.

**Field scope clarification (confirm with Pow Hwee):** "Any field" means fields OTEP maps and uses — not every column in the raw Excel. OTG export quality is inconsistent; applying the skip to unused columns would be unworkably aggressive.

This one decision closes four of six open items:

| Open item | Closed by this decision |
|---|---|
| Léo's skip-logic question (competencies lenient or strict?) | Yes — same rule applies to every mapped field, including competencies |
| OTEP-319 "Application form unavailable" AC | Yes — if `formsg_url` is missing, the record never reaches the DB; that AC is dead code |
| Amber's "optional fields hide cleanly" design assumption | Yes — every record that passes ingest is complete; no hide-if-missing logic needed for required fields |
| OTEP-128 field rendering rules (optional fields) | Partially — fields OTEP doesn't map remain optional; the required set is now always present |

---

## PM (Michelle)

**What this decision requires from PM this week:**

**1. Produce the required field list — today, before Léo's next commit.**

The hard-skip rule is only implementable once Léo knows which fields are required. Confirm with Pow Hwee and document:

| Field | Required? | If missing |
|---|---|---|
| Title | Yes | Hard skip |
| Agency (must resolve to ref_agency) | Yes | Hard skip |
| Opportunity type (must resolve to known prefix) | Yes | Hard skip (decided 2026-06-04) |
| `formsg_url` | Yes | Hard skip — no apply action = no point ingesting for MVP |
| Closing date (`"00/01/1900"` = evergreen/nil = valid) | Yes | Hard skip if unresolvable; nil is valid |
| Description | Yes | Hard skip (detail page won't render without it) |
| Competencies | Confirm with Pow Hwee | If not required: import with field null |
| Time commitment | Confirm with Pow Hwee | If not required: import with field null |

**2. Update OTEP-319 ACs.**

Remove or explicitly mark out-of-scope the "Application form unavailable — contact the posting agency" AC. With hard skip on missing `formsg_url`, an officer can never reach a detail page for an opportunity without one. The fallback state is moot for MVP.

**3. Resolve upload permissions for OTEP-397.**

Hao Eng is blocked. The MVP answer: a hardcoded list of admin profile IDs in the DB (role flag). PM makes the call on who's on that list; Hao Eng implements the gate. A proper IAM model is R1 scope.

**4. Schedule OTEP-358 into Sprint 4.**

The nil-date spike is PM-owned (Michelle), 2-day timebox, clear scope. If it's not in the S4 planning brief on Thu it will float again. Add it to the brief now.

---

## Tech Lead (Pow Hwee)

**What this decision requires from the Tech Lead:**

**1. Confirm the required field list with Michelle today.**

The distinction between "every column in the Excel" vs "every OTEP-mapped field" is a Tech Lead call. Pow Hwee needs to confirm scope so Léo has an unambiguous implementation target.

**2. Close the CFT sequence diagram (OTEP-391).**

Pow Hwee has already agreed to the CFT approach (2026-06-08). The next step is the sequence diagram Hao Eng needs: from officer uploading in the UI all the way to `otep-service` picking up the webhook. The webhook receiver's format depends on what CFT sends — that's the unspecified piece. This should close this week before anyone builds the backend receiver against the wrong contract.

**3. Decide OTEP-348 sequencing explicitly.**

Does OTEP-192 ship Done in Sprint 3 without a scheduler and monitoring, with OTEP-348 following in Sprint 4? Or does Done require both? With a once-a-week manual upload cadence, shipping 192 alone is acceptable for Sprint 3 — but that's a Tech Lead call, not an assumption. Make it explicit at Squad Sync today.

**4. OTEP-128 field rendering rules need a pass.**

The story file has rows for optional fields ("What I'll develop — hidden if missing"). If the hard-skip rule means those fields are always present on ingested records, those rows are outdated. Pow Hwee should flag to Michelle which fields in OTEP-128 are in the required set so the rendering rules stay consistent with the ingest contract.

---

## Designer (Amber)

**What this decision means for Amber:**

**1. Drop "field hidden if missing" logic for all required fields.**

Every record that makes it to the listing passed ingest with all required fields present. Amber no longer needs to design for "title missing" or "description missing" states — those records don't exist in the DB. Design for completeness, not graceful degradation, on the required field set.

**2. The "Application form unavailable" error state on the detail page is no longer needed for MVP.**

With `formsg_url` as a required field (hard skip if missing), every opportunity in the listing has a valid apply URL. Amber can remove this state from the detail page design for MVP. It may return in a future release if the apply model changes, but not now.

**3. Upload UI (OTEP-397) error log design is confirmed.**

The row-level warnings state (bonus AC) now has a predictable trigger: skipped rows appear in the error log with row number + reason (missing field X). Amber can design the error log display knowing every entry follows that pattern — no ambiguous partial-success states.

**4. One open design question remains: SJR cards.**

SJRs are excluded from ingestion (decided 2026-05-21). But if a future export accidentally includes SJR prefixes that resolve correctly — or if that decision is revisited — the detail page has no apply CTA for SJRs. This isn't an immediate design task, but Amber should know the ingestion exclusion is the upstream reason SJR cards never appear, not a UI-layer suppression.

---

## Where the Three Lenses Converge

The single unresolved question that all three roles need to align on before Sprint 4:

**Are competencies and time commitment in the required field set?**

- If yes (hard skip): every ingested record has competency data. The competency section on OTEP-87's detail page is always populated. Design can commit to showing it. Léo's transform is strict.
- If no (optional): those fields can be null in the DB. The detail page either hides the section or shows a "not specified" state. Amber needs to design both states. Léo's transform is lenient on those fields only.

This is a product + tech call (Michelle + Pow Hwee) with a design consequence (Amber). It should be resolved before Sprint 4 grooming on Thu, because OTEP-87 is in the S4 story set.

---

## Decision Log Entry

| Date | Decision | Rationale | Owner |
|---|---|---|---|
| 2026-06-09 | **OTG ingestion: hard skip any record with any missing or unresolvable mapped field.** No tiered approach, no partial imports, no UI fallback for missing data. Only records with all required OTEP-mapped fields present and resolvable are ingested. Supersedes Michelle's tiered-approach proposal (2026-06-08). | Clean data in = clean data out. Partial records risk dirty DB state, complicate R1 migration, and produce broken listing cards. | Pow Hwee / Michelle |

---

## Open Items After This Decision

| # | Item | Owner | By when |
|---|---|---|---|
| A | Confirm required field list (which fields trigger hard skip) | Pow Hwee + Michelle | Today |
| B | Are competencies + time commitment required or optional? | Pow Hwee + Michelle | Before Thu Planning |
| C | Upload permissions — who is on the admin list for OTEP-397 | Michelle | Before OTEP-397 closes |
| D | CFT sequence diagram — end-to-end from upload to webhook | Hao Eng (Pow Hwee to unblock) | This week |
| E | OTEP-358 (nil-date spike) added to S4 planning brief | Michelle | Thu |
| F | OTEP-348 sequencing — S3 or S4, explicitly | Pow Hwee | Today at Squad Sync |

---

*Written: 2026-06-09*
*Tickets in scope: OTEP-192, OTEP-313, OTEP-319, OTEP-348, OTEP-358, OTEP-391, OTEP-397*
*Next: confirm field list with Léo, update OTEP-192 ACs, log decision in decisions-log.md*
