# Draft Ticket: Opportunities Ringfencing — Active Agencies Rule

**Date:** 2026-09-17

**Owner:** Michelle Yip

**Status:** DRAFT — local only, not created in Jira yet.

**Board:** OTEP-Pathfinder

**Suggested type:** Story

**Suggested parent/epic:** OTEP-1381 [Core] VAPT MVP Fast Follows (same epic as OTEP-1587, OTEP-232, OTEP-1598)

---

## Suggested Title

`[Ringfencing] Opportunities visibility uses officer's full active-agency set`

## User Story

As a public officer with one or more active positions (including double-hatting or secondment scenarios),
I want Opportunities ringfencing to check against all of my currently active agencies,
so that I retain access to opportunities I'm eligible for through any active position, without relying on separate logic for single-position, secondment, or double-hatting cases.

## Background / Objective

Today's MVP ringfencing (I-012, ratified 12 Jun 2026) matches a single officer agency against each opportunity's eligible-agency list at display time. That design assumed one agency per officer. It breaks down for:

- **Double-hatting** (OTEP-232): officer has 2 active Position IDs, potentially 2 different agencies
- **Secondment / forward deployment** (flagged in OTEP-1587): officer may need visibility based on both a destination and a home/parent agency

Rather than build agency resolution separately in each of the three role-change tickets, this ticket introduces one shared mechanism: ringfencing checks an opportunity's eligible-agency list against the officer's **full set of currently active agencies**, however many there are. OTEP-1587, OTEP-232, and OTEP-1598 should reference this ticket instead of each defining their own ringfencing logic.

## Acceptance Criteria

**A. Core rule**
- An opportunity is visible to an officer if its eligible-agency list intersects with the officer's active-agency list (i.e., at least one shared agency).
- The officer's active-agency list is derived from all of their currently active positions, however many exist (1, 2, or more).

**B. Single-position officers (no regression)**
- For an officer with exactly one active position, this rule produces the same visibility result as today's single-agency matching (I-012). No change in behavior for the majority case.

**C. Double-hatting**
- For an officer with two active positions in different agencies, opportunities ringfenced to either agency are visible.
- Opportunities ringfenced to an agency the officer has no active position in remain hidden.

**D. Secondment / forward deployment**
- If POCDEX represents a secondment as two active agencies (destination + home), this rule surfaces opportunities from both without needing secondment-specific logic.
- **Open dependency:** confirmed with POCDEX/Engineering whether this is how secondment is actually represented in the data. If POCDEX only exposes a single current agency for seconded officers, this ticket's rule alone won't restore home-agency visibility — that would require a separate POCDEX data change, tracked outside this ticket.

**E. Stop double-hatting / position ends**
- When an officer's active-agency count drops from 2 to 1, ringfencing naturally reduces to the one remaining agency. No separate transition logic required.

**F. Consistency**
- OTEP-1587, OTEP-232, and OTEP-1598 all reference this ticket's ringfencing mechanism rather than each implementing their own agency-resolution logic.

## Known Accepted Tradeoff (not a blocker, flag for awareness)

This is a union rule: an officer gains ringfenced visibility into an agency's postings through *any* active position, not just a "primary" one. OTG ringfencing data shows this isn't hypothetical — Enterprise Singapore alone has 127 ringfenced Secondment postings (49% of all Secondments in OTG) that are explicitly ESG-internal only. A double-hatting officer with an ESG secondary position would see these under this rule. This is accepted as the cost of a single, simple design rather than building agency-exclusivity flags — worth a one-line FYI to BOs, not a decision requiring their sign-off.

## Dependencies

- POCDEX/Engineering: confirm whether secondment produces two active agencies in the data, or a single current-agency value (blocks full resolution of OTEP-1587's secondment case, not this ticket's core rule).
- OTEP-232's `primaryposition` / latest-creation-date logic is used for **Profile continuity** (name, title, agency shown on Profile) — that logic is separate from this ticket's ringfencing rule and should not be conflated. Profile shows one "current" agency; Opportunities visibility uses the full active set.

## Suggested Story Points / Sizing

Not sized yet — recommend sizing after POCDEX confirms the secondment data question (dependency D above), since the answer affects whether this is a pure display-logic change or requires new data plumbing.
