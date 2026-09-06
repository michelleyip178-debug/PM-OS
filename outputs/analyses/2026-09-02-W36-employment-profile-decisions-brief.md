# Employment-Profile Acceptance Criteria — Decisions Brief

**For:** PM team working session (Michelle, + PM team; Rama for BD-02/BD-09 input)

**Date:** 2 September 2026 (W36)

**Goal:** Leave the session with **BD-01 to BD-04, BD-10, plus BD-02a and BD-04a decided**, and **owners named for BD-07 and BD-09**. These unblock the majority of employment-profile UAT scenarios so Imelda can move test-case writing from "design only" to "ready to execute."

**Time needed:** ~50 min. Seven decisions, each pre-drafted with a recommendation. Confirm or amend, don't re-open.

**Companion:** the movement (mobility) test cases and their row-level mapping are in [2026-09-02-W36-movement-test-cases-mapped.md](2026-09-02-W36-movement-test-cases-mapped.md). BD-02a and BD-04a below were surfaced by that mapping.

---

## Why this session matters now

- **2.5 sprints to the end-September dev freeze** ([Adrian, 31 Aug](../meeting-notes/2026-08-31-W36-adrian-biweekly-sync.md)). Effort estimation and UAT prep both wait on these acceptance criteria.
- **~24 UAT scenarios are blocked** on business decisions, not test design. The blockers reduce to 10 decisions (BD-01 to BD-10); five of them (BD-01–04, BD-10) plus two additions (BD-02a, BD-04a) unblock most of the set.
- **Three scoping frames** (50-case Huiting commitment, 41-row BO cut, 24 decision scenarios) are reconciled in [2026-09-02-W36-employment-profile-uat-scope-reconciliation.md](2026-09-02-W36-employment-profile-uat-scope-reconciliation.md). This brief acts on that reconciliation's Tier 2.
- **What counts as a "profile change"** (fixed in the [29 Aug BO brief](2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md)): any change to **Position ID, `primaryPosition`, `jobFunctionId`, `jobFamilyId`, or `jobGradeId`** re-derives the role profile and competencies. A change to `employmentTitle` / `businessTitle` alone is display-only and does **not** trigger a re-derivation. Every movement test case is scored against this rule — see the companion doc's "what triggers a profile change" split.

---

## The 7 decisions to make

### BD-01 — Person-profile model: one profile or many?

| | |
|---|---|
| **Question** | When one NRIC resolves to multiple active officer IDs, does Compass show one consolidated profile or separate per-appointment profiles the officer switches between? |
| **Blocks** | UAT-01, 03, 04, 10 (multi-hat display, login-by-account continuity, secondment) |
| **Recommendation** | **One consolidated profile per person.** |
| **Why** | The team already decided against OTG's profile-selection model (2 Sep review, Decision 2). NRIC-fanout is explicitly a "build one consolidated view" design. Multiple switchable profiles reintroduces the OTG behaviour we're moving away from, and doubles the surface for applications, journeys, and competency state to diverge. |
| **What it does NOT decide** | How the single profile *chooses* what to display when appointments differ — that's BD-02. |
| **If the team wants multiple** | Then BD-04, BD-10, and the whole applications/journeys continuity model need re-scoping. Flag as a materially bigger build. |

---

### BD-02 — Primary-appointment selection

| | |
|---|---|
| **Question** | The consolidated profile shows one agency, one designation, one job function, one email. Which appointment supplies them when an officer has two or more active? |
| **Blocks** | UAT-03, 05, 06, 09, 22 (profile header, primary vs secondary, no-primary case, transfer overlap, stale record) |
| **Recommendation** | **In order: (1) the source `primaryPosition` / `is_primary` flag; (2) if absent or both records flag true, the most recent employment effective date; (3) if still tied, a fixed source-system priority (HRP over Cumulus, or as engineering advises).** Officer is never asked to choose. |
| **Why** | This is the same decision as **Identity-3 / run-sheet decision 1** ([29 Aug BO brief](2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md)) — "which system's job data is primary when the two disagree." Reuse it, don't re-litigate. Production data shows the flag is unreliable: of the 251 cross-system officers, most have `primaryposition=true` on **both** records — hence the fallback chain. |
| **Rama's input needed** | Confirm the source-system priority tiebreak and whether effective-date is reliably populated on both records. |
| **What it does NOT decide** | What happens when there's no reliable record at all — that's BD-09. |

---

### BD-02a — Primary appointment during a transfer / secondment overlap window

| | |
|---|---|
| **Question** | During a transfer or secondment, there is a window where the departing record and the arriving record both extract from POCDEX (the old position on its last day, the new position from its start). Which is primary in that window? |
| **Blocks** | Movement TCs MOV-02 (cross-system transfer), MOV-03 (cross-system secondment), MOV-07 (change-job A→B, rows 93–95) — the overlap stage in each |
| **Recommendation** | **The arriving appointment becomes primary from its effective date, applying BD-02's most-recent-effective-date rule unchanged — even while the departing record is still extracting.** The departing record shows as a secondary active role until it goes inactive, then its role-derived competencies move to "past role" [BD-04]. |
| **Why** | Without this, "transfer overlap" is an open question in every movement test case. Making it a straight consequence of BD-02 (not a new rule) means no separate decision to maintain: the newer effective date wins, full stop. Matches the workbook's own framing (rows 26/30/31 mark the new position as the one that "lands"). |
| **AC consequence** | The profile switches **at the next refresh after the arriving record's effective date**, not mid-session and not when the old record finally stops extracting. |
| **Edge** | If the arriving record's effective date is *future* (rows 80, 82, 94), the switch waits until that date — the overlap is expected, not a defect. |

---

### BD-03 — Competency aggregation across active roles

| | |
|---|---|
| **Question** | An officer with two active roles has two competency sets. Does the profile show the union of both, or only the primary role's? |
| **Blocks** | UAT-02, 10 |
| **Recommendation** | **Union of all active-role functional competencies, de-duplicated by competency code.** Core competencies follow the primary role (BD-02). |
| **Why** | The 2 Sep review leaned this way; this makes it formal. A seconded or multi-hatting officer legitimately holds both skill sets — showing only the primary role's competencies under-represents them and degrades recommendations. De-dup by code (not name) matches the existing UAT finding that uniqueness is enforced on code, not display name (OTEP-900). |
| **Edge to name in the AC** | When the same competency appears in both roles at different proficiency levels, take the higher. |

---

### BD-04 — Competencies from inactive (former) roles

| | |
|---|---|
| **Question** | After a transfer, promotion, or return from secondment, the old job ID goes inactive. What happens to competencies inferred from it? |
| **Blocks** | UAT-07, 08, 09, 11, 12, 24 (transfer, promotion, cross-agency, return-from-secondment, historical competencies, role-goes-inactive) |
| **Recommendation** | **Retain the data, tag it "past role," keep it visible on the profile, and exclude it from recommendation and role-matching logic in v1.** No dedicated management UI in v1. |
| **Why** | Directly implements Decision 4 from the 2 Sep review (preserve data, defer the UI). "Visible but not driving recommendations" is the safe default — the officer isn't matched to roles based on a job they've left, but they don't silently lose their history. |
| **What it does NOT decide** | Whether past-role competencies *ever* influence recommendations (that's a v2 question, BD-05, out of scope for this session). |
| **AC consequence** | Every transfer/promotion test case asserts: current-role competencies update, former-role competencies move to "past role" and remain retrievable, recommendations recompute from active roles only. |

---

### BD-04a — Return from secondment

| | |
|---|---|
| **Question** | A secondment ends: the receiving-agency record goes inactive, the parent record remains active or reactivates. What happens to the profile and to the secondment-role competencies? |
| **Blocks** | Movement TCs MOV-03 (cross-system secondment, End Secondment stage — rows 25, 29), MOV-04 (secondment-within end, incl. backdated — rows 34, 35) |
| **Recommendation** | **The parent appointment automatically becomes primary again (BD-02). Secondment-role competencies move to "past role" — retained, visible, excluded from recommendations (BD-04). No officer action required.** If the parent role's competencies had moved to "past role" during the secondment, they return to current. |
| **Why** | Return-from-secondment is currently a decision nowhere — BD-04 covers "old role goes inactive" but not the auto-revert to a *specific* prior role. This closes UAT-11 and the End Secondment stages of MOV-03/04. |
| **Backdated case (rows 34, 35)** | Compass applies the **effective date**, not the file date. If the officer logged in during the gap between the real end date and the file arriving, the profile corrects on the next refresh; user-generated data is preserved [BD-10]. |

---

### BD-10 — Replace vs preserve on a profile update

| | |
|---|---|
| **Question** | POCDEX returns a corrected or changed record. What does Compass overwrite, and what must it never touch? |
| **Blocks** | UAT-23, 24 (source correction after login, role goes inactive) |
| **Recommendation** | **Overwrite: all employment-derived fields (agency, designation, job function/family/grade, employment email, active-role competencies). Never overwrite: user-generated data — self-declared competencies, submitted applications, saved journeys, in-progress activity.** On correction, re-derive the profile at next login or refresh; user-generated data is re-associated by NRIC/person, never by officer ID. |
| **Why** | This is the guardrail that stops a source correction wiping an officer's applications or self-declared skills, and stops user data being reassigned to the wrong person after a duplicate is resolved. Matches the meeting's "preserve previous profile data" direction and Journey D's "what must never be overwritten." |
| **Rama's input** | Confirm user-generated records key on a person-level ID (NRIC-derived), not the appointment-level officer ID. If they currently key on officer ID, that's a migration item. |

---

## The 2 to assign (not solve today)

### BD-07 — NPL access and alternative-login policy

| | |
|---|---|
| **Blocks** | UAT-18, 19, 20 (NPL under 90 days, over 90 days, personal-email login) |
| **Current state** | Unowned since the 1 Sep grooming. Rated "Critical if required for SGR/SJR." |
| **Action** | Route to **Adrian** with one question: *"Is NPL login in scope for MVP UAT — yes or no? If it depends on SGR/SJR 2027, who confirms that and by when?"* |
| **Likely answer** | Out for MVP — Adrian already excluded no-pay-leave from the 50-case Huiting commitment (31 Aug). Get it on record either way so the 3 NPL scenarios can be formally parked or pulled in. |

### BD-09 — Safe behaviour for missing / duplicate / ambiguous source records

| | |
|---|---|
| **Blocks** | UAT-06, 21, 22 (no primary indicator, missing record, stale record) + Exit-1 (rescinded new hire, currently in no forum) |
| **Current state** | Overlaps Rama's identity source-of-truth work. |
| **Action** | **Rama owns it**, brings a position to the architecture walkthrough. Scope: when Compass can't resolve a clean profile, does it block access with an explanatory message, create a restricted profile, or route to support — and how is the case surfaced operationally? |
| **Note** | Production evidence sizes this: 82 email-collision errors, 457 missing-user reconciliation gaps, 251 cross-system duplicates ([29 Aug BO brief](2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md)). Not hypothetical. |

---

## What Imelda does with the outcome

| Tier | Scope | Action after this session |
|---|---|---|
| **Tier 1** | ~50 test-ready rows (job/position/competency changes, ready identity cases) + movement TCs **MOV-01, MOV-06**, and rows 79/81 of MOV-07 | Start writing test cases now — no decision blocks these |
| **Tier 2** | Multi-hat model, inactive-role competencies, replace/preserve, email reuse, Exit-1, source correction + movement TCs **MOV-02, MOV-03, MOV-04, MOV-05**, rest of MOV-07 | Design fixtures now; fill expected results from BD-01–04, BD-02a, BD-04a, BD-08, BD-09, BD-10 as they land |
| **Tier 3** | 3 NPL scenarios + movement TC **MOV-08** (rows 41–44, 91) | Parked pending BD-07; pull in only if Adrian says NPL is in scope |
| **Tier 4** | Position-ID-only changes, historical-competency UI | Out — all frames agree |

Full tier lists in the [scope reconciliation](2026-09-02-W36-employment-profile-uat-scope-reconciliation.md); movement TC detail and 118-row mapping in the [movement test cases doc](2026-09-02-W36-movement-test-cases-mapped.md).

### Profile-change trigger check (applies to every movement TC)

| Triggers a profile re-derivation (role + competencies) | Does NOT (access-state change only, scope separately) |
|---|---|
| MOV-01, MOV-02, MOV-03 (rows 24/25/28/29), MOV-04 (rows 3/33/37), MOV-06, MOV-07 — Position ID or a job function/family/grade field changes on an active record | MOV-05 (secondment out of POCDEX — record leaves the feed, not a field change → BD-09), MOV-08 stages 3–4 (NPL block/return — no active record → BD-07) |

MOV-08 stage 2 (NPL in one system only) **does** trigger a re-derivation — the active-role set shrinks, primary changes (BD-02), competencies re-derive from the surviving role.

---

## Decisions log (fill in during the session)

| BD | Decision | Owner | Notes / amendments |
|---|---|---|---|
| BD-01 | | PM team | |
| BD-02 | | PM team (+ Rama) | |
| BD-02a | | PM team | overlap-window primary — should fall straight out of BD-02 |
| BD-03 | | PM team | |
| BD-04 | | PM team | |
| BD-04a | | PM team | return-from-secondment auto-revert |
| BD-10 | | PM team (+ Rama) | |
| BD-07 | Assigned to: | Adrian | Question routed: Y / N |
| BD-09 | Assigned to: | Rama | For architecture walkthrough |

---

## Still open after this session (not in scope to fix here)

- **Data-prep ownership** (Compass ITC vs joint POCDEX ask) — blocks even Tier 1 from running.
- **The 24→10 coverage trace** — the draft test-case doc's 10 detailed cases don't visibly cover all 24 scenarios; NPL and source-correction have no executable draft.
- **Effort sizing** against the 2.5-sprint window — downstream of these decisions.
- **BD-05, BD-06, BD-08** — historical competencies in recommendations (v2), migrated OTG competency provenance, shared-mailbox handling (needs POCDEX). Lower urgency; not blocking Tier 1 or the core of Tier 2.
