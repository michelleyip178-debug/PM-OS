# CareerCompass Requirements to POCDEX — No CAM Integration

**To:** Rama, Imelda

**From:** Michelle

**Date:** 2026-07-10

**Purpose:** Formal requirements for what Compass needs from POCDEX, given Compass is **not integrating with CAM**. This changes what "good enough" looks like from POCDEX — without CAM as a second layer catching drift or deprovisioning access, Compass is the only system standing between a POCDEX gap and an officer-facing failure.

**Why now:** OTG already runs on POCDEX and has known, unresolved failure modes — most notably the NPL login-loop (inactive officers omitted from the feed, causing an auth error rather than a clean status), and a months-old case (open item #37) where POCDEX and the source HR system disagree on an officer's status with no resolution path. We want to avoid inheriting the same failure modes, and without CAM, we don't get any of CAM's partial safety nets (its own NPL/inactivity disablement triggers, its periodic access review). Every requirement below exists because CAM isn't there to catch it instead.

**Relates to:** Open items #55 (Huiting data requirements), #56 (POCDEX sync cadence, unanswered since 2026-07-08), #31 (POCDEX data flow, unconfirmed since 17 Jun). This document doesn't replace those asks — it sharpens them with a specific "why," and adds two requirements (reconciliation support, escalation SLA) not yet explicitly raised in either thread.

---

## 1. Positive status signals — no silent omission

**Requirement:** POCDEX must report every officer's current state explicitly, including inactive/NPL/adjunct officers, rather than omitting them from the feed.

**Why:** OTG's login-loop failure exists because inactive records are withheld from POCDEX by design — "not in the feed" gets misread downstream as "still active." Without CAM's own inactivity/NPL disablement layer to catch this independently, Compass has no fallback if POCDEX repeats this pattern. Silence cannot be the only signal for a status change.

## 2. A typed movement field, not a flattened current-state snapshot

**Requirement:** POCDEX needs to expose a `movement_type` field (transfer / secondment / attachment / adjunct / exit) with an `effective_date`, not just a current-state row that Compass has to diff against the previous pull to infer what changed.

**Why:** This is the same underlying ask already in Huiting's requirements thread (#55) — today's model can tell us *that* something changed, not *what kind* of change it was. OTG survives without this because it doesn't act differently per movement type (it mostly just reflects Owner Agency / Present Agency passively). Compass needs to act differently per type — ringfencing, access, and in-progress-activity handling all depend on knowing whether this is a transfer vs. a secondment vs. an exit. Guessing movement type from a diff is exactly the kind of inference that produces silent misclassification.

## 3. A confirmed, real sync cadence — not an assumed number

**Requirement:** A definitive answer on POCDEX's actual sync cadence to Compass (real-time, daily, or other), and separately, whether HRPS/Cumulus itself only updates POCDEX daily regardless of what POCDEX promises downstream.

**Why:** This is open item #56, unanswered since 2026-07-08. We're re-raising it here because the POCDEX Integration PRD currently assumes near-real-time delivery — if the real number is closer to OTG's fortnightly batch cadence, every timing-sensitive decision we're designing (grace periods, access removal on exit) is built on a false premise. Without CAM's own review cadence to soften the impact of stale data, Compass needs the real number to design correctly the first time.

## 4. Support for independent drift detection (reconciliation)

**Requirement:** A way for Compass to periodically verify its own record against POCDEX's actual current state — either a full-population pull Compass can run on a schedule, a checksum/version field, or a "last verified" timestamp we can compare against.

**Why (new ask, not yet raised in #55/#56):** This is the direct fix for the failure mode behind open item #37 — POCDEX and the source HR system disagreed on an officer's status for months with nobody actively checking. With CAM, the periodic access review might have surfaced this independently. Without CAM, Compass's only detection mechanism is one we build ourselves — and it only works if POCDEX supports a full-population comparison, not just a delta/event feed that assumes every change gets pushed correctly.

## 5. A named escalation contact and SLA for data disputes

**Requirement:** A confirmed owner and turnaround commitment on the POCDEX/TECQ side for when Compass flags a mismatch (e.g., "officer X shows active in POCDEX but adjunct in source HR").

**Why (new ask, not yet raised in #55/#56):** Open item #37 currently sits as "POCDEX/TECQ (Michelle tracking)" — not a real owner, not a real SLA. It's been open since April with no resolution path. OTG's own documentation admits the actual fix requires a POCDEX/CUMULUS interface change that, as far as we can tell, has never happened. Compass will build its own manual-override capability for these cases (tracked separately), but that only works if there's a working upstream channel to actually resolve the underlying data error — otherwise every dispute becomes a permanent manual workaround.

## 6. Confirmed coverage for our pilot agencies

**Requirement:** Confirmation of whether any of Compass's 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) have any officer populations or sub-systems that fall outside POCDEX's standard coverage.

**Why:** The CAM documentation separately names several agencies with known integration gaps (A*STAR, CPF, DSTA, HDB, JTC, MINDEF, Sentosa) where officers moving between non-integrated and integrated systems produce duplicate or orphaned accounts. We want to confirm upfront whether any equivalent gap exists on the POCDEX side for our specific pilot agencies, rather than discovering it via a support ticket after launch.

---

## What we're asking for

A direct response (or confirmation these are already covered in Rama's draft response to Huiting, due week of 13 Jul per #55) on:
1. Whether POCDEX can commit to positive status reporting for inactive/adjunct officers (Requirement 1)
2. Whether a `movement_type` + `effective_date` field is feasible to add to the POCDEX payload (Requirement 2)
3. The real sync cadence number — this is the longest-outstanding ask (#56, since 2026-07-08) (Requirement 3)
4. Whether Compass can run a scheduled full-population reconciliation pull against POCDEX (Requirement 4)
5. Who owns data-dispute escalation on the POCDEX/TECQ side, and what turnaround to expect (Requirement 5)
6. Confirmation of pilot-agency coverage gaps, if any (Requirement 6)

Happy to walk through any of these live if it's faster than async — otherwise a written response works.

---

*Generated: 2026-07-10*
*Related: [open-items.md #55, #56, #31](../../../../PM-skills-ALL-1/00-hub/open-items.md), [POCDEX-OTG as-is](2026-07-10-W28-pocdex-otg-as-is.md), [POCDEX-CAM as-is](2026-07-10-W28-pocdex-cam-as-is.md), [Staff Movement Types — OTG Current Handling](2026-07-10-W28-staff-movement-types-otg-current-handling.md), [POCDEX Officer Movement — Questions for BOs](2026-07-10-W28-pocdex-officer-movement-bo-questions.md)*
