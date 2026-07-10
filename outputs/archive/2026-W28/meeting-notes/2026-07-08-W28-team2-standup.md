# Meeting Notes: OTEP Team 2 Daily Standup

**Date:** 2026-07-08

**Attendees:** Thomas Huchedé, Michelle Yip

**Meeting Type:** Engineering sync (ingestion logic walkthrough)

**Duration:** Not specified

---

## Summary

Thomas walked Michelle through the opportunity-ingestion logic and five decisions landed on contact display, posted/closing date fields, closed-opportunity handling, and MVP opportunity-type scope. Four of the five extend or clarify the ratified [OTG Ingestion Logic v3](../../context-library/decisions/otg-ingestion-logic-v3.md). **One directly conflicts with a ratified decision (I-018) and needs to be resolved before it's built, not silently reconciled.**

---

## Decisions Made

1. **Contact display: PoCDEX lookup for POCDEX-linked opportunities without a FormSG URL**
   - **What:** For opportunities with no `formsg_url` and a `pocdex-uid` present, look up the POCDEX profile to resolve and display an email address as the contact.
   - **Why:** Not stated in the standup — infer this is the fallback contact path for opportunities missing FormSG's built-in contact routing.
   - **Who decided:** Thomas Huchedé / Michelle Yip
   - **Impact:** New field-level rule not yet in v3's `owner_id`/`owner_name` handling (currently listed as simple non-blocking storage fields, no lookup logic). **v3 needs updating to capture this.**

2. **Contact display: non-PoCDEX opportunities show name instead**
   - **What:** For opportunities that are non-PoCDEX, display the contact as a name rather than doing an email lookup.
   - **Why:** Presumably because there's no PoCDEX UID to resolve against — no PoCDEX profile means no email lookup path exists.
   - **Who decided:** Thomas Huchedé / Michelle Yip
   - **Impact:** Companion rule to Decision 1 — together these define the full contact-display branching logic. Should be documented as a pair in v3.

3. **Posted date = `date_modified`**
   - **What:** The opportunity's displayed "posted date" will be based on the `date_modified` field from the OTG export.
   - **Why:** Not stated — worth confirming this is intentional vs. `date_created`, since `date_modified` updates on any edit, not just the original posting.
   - **Who decided:** Thomas Huchedé / Michelle Yip
   - **Impact:** v3 currently lists `date_modified` as "not a blocking field, store for audit/sorting" with no UI-facing role defined. This decision assigns it a new purpose (displayed posted date) that v3 doesn't yet capture.

4. **Closing date = `end_date` (assumed, for now)**
   - **What:** Opportunity closing date displayed in the UI will be assumed as the `end_date` field.
   - **Why:** Flagged as provisional ("for now") — implies this may not be the final source once a more precise field or logic is available.
   - **Who decided:** Thomas Huchedé / Michelle Yip
   - **Impact:** This matches v3's existing nil-date handling (I-005) and lifecycle rule (I-004), which already key off `end_date`/`closing_date`. Low risk — mostly a confirmation of existing logic, not a new rule. The "for now" qualifier should be tracked as an open item so it doesn't silently become permanent.

5. **Closed opportunities: ingest and check for closure at render time (not skip at ingestion)**
   - **What:** All closed opportunities will be ingested and checked for closure status, so the listing renders accordingly.
   - **Why:** Not stated — but this aligns with v3's existing architecture, where lifecycle visibility is a query-time filter (`closing_date > today OR closing_date IS NULL`), not an ingestion-time exclusion.
   - **Who decided:** Thomas Huchedé / Michelle Yip
   - **Impact:** **Potential conflict with v3's I-011** ("MVP ingests open opportunities only. All expired records excluded.") — v3 currently says expired records are excluded *at ingestion*, but this decision says closed opportunities *are* ingested and filtered at render/query time instead. These may describe the same end-user behavior with different architecture, or they may be a genuine change in approach. **Needs clarifying before assuming which is correct** — see Open Questions.

6. **MVP opportunity-type scope: only STIP and Gig will be ingested**
   - **What:** For opportunities, only STIP and Gig types will be ingested for MVP.
   - **Why:** Not stated in the standup.
   - **Who decided:** Thomas Huchedé / Michelle Yip
   - **Impact:** **⚠️ This directly conflicts with ratified decision I-018** ("MVP category model locked at 3: Jobs · STIPs · Gigs. Safe to groom OTEP-86 and OTEP-289 against this."), ratified 2026-06-26 and treated as canonical for OTEP-86 and OTEP-289. If Jobs is genuinely being dropped from MVP ingestion scope, that's a scope change with real downstream impact (OTEP-86 filter chips, OTEP-289 spike, and the catalogue-count math in v3 which currently includes Jobs in its ~430+ pass-rate figure). **Do not treat this as settled from a standup mention alone — confirm explicitly with Thomas whether this was a deliberate scope narrowing or a miscommunication before it propagates into code or grooming.**

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm with Thomas whether "only STIP and Gig for MVP" is a deliberate change to I-018 (which includes Jobs) or a misstatement | Michelle | Before this logic ships or is groomed further | 🔴 High | Not Started |
| If confirmed as a real scope change, update I-018 in v3 and flag downstream impact on OTEP-86, OTEP-289, and the catalogue pass-rate figures | Michelle | Same timeframe | 🔴 High | Not Started — blocked by item above |
| Update `otg-ingestion-logic-v3.md` with the new contact-display lookup rules (Decisions 1–2) | Michelle | Not specified — recommend within 48 hours while fresh | 🟡 Medium | Not Started |
| Update v3 to define `date_modified`'s new role as displayed posted date (Decision 3) | Michelle | Not specified — recommend within 48 hours | 🟡 Medium | Not Started |
| Track the "for now" qualifier on closing-date-as-`end_date` (Decision 4) as an open item, not a permanent rule | Michelle | Ongoing | 🟢 Low | Not Started |
| Clarify whether closed-opportunity handling (Decision 5) changes I-011's ingestion-time exclusion to a render-time filter, or is describing the same behavior differently | Michelle / Thomas | Before implementation | 🟡 Medium | Not Started |

**Notes:**
- No due dates were given in the standup itself for any of these — all dates above are Michelle's recommendation, not confirmed commitments.
- The STIP/Gig-only item (Decision 6) is the one blocking item here — everything else is documentation catch-up, but this one needs an actual answer before it's safe to build against.

---

## Open Questions

- [ ] Is dropping Jobs from MVP ingestion scope (Decision 6) intentional, or did "STIP and GIG" get stated as shorthand without meaning to exclude Jobs? — **Owner:** Michelle → Thomas — **By:** Before next grooming touches OTEP-86/OTEP-289
- [ ] Does the closed-opportunity ingestion approach (Decision 5) actually change v3's I-011, or is it the same query-time lifecycle filter already documented, just described from the ingestion side? — **Owner:** Michelle → Thomas — **By:** Before implementation
- [ ] Why `date_modified` over `date_created` for posted date (Decision 3)? — **Owner:** Michelle — **By:** Not urgent, but worth a one-line rationale for the record
- [ ] What does "for now" imply for closing-date-as-`end_date` (Decision 4) — is there a known future change already anticipated? — **Owner:** Thomas — **By:** Not urgent

---

## Context for Future Reference

This is a working session against the canonical [OTG Ingestion Logic v3](../../context-library/decisions/otg-ingestion-logic-v3.md) doc (last updated 2026-06-26, status: Ratified). Five of today's items are additions or clarifications that belong in that doc. One item (STIP/Gig-only MVP scope) is a potential contradiction of a ratified decision (I-018) and should not be merged into v3 until confirmed — updating v3 on an unconfirmed scope change risks the same kind of silent drift the v3 doc was created to prevent.

**Recommended immediate next step:** Don't update v3 yet. Confirm Decision 6 with Thomas first, since it determines whether this is a documentation update (add new rules, keep I-018 as-is) or a real decision-log change (amend I-018, cascade to OTEP-86/289).

---

*Generated: 2026-07-08*
*Next: Resolve the STIP/Gig-only scope question, then batch-update `otg-ingestion-logic-v3.md` with all confirmed changes in one pass.*
