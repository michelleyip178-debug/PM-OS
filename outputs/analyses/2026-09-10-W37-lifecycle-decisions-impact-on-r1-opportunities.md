---
title: How the Employment-Lifecycle Decisions Affect R1 Opportunities
date: 2026-09-10
week: 2026-W37
owner: Michelle Yip
status: working note — dependency map
related:
  - outputs/decisions/2026-09-10-W37-decision-employment-lifecycle-r1-scope.md
  - outputs/analyses/2026-09-10-W37-employment-profile-brd-analysis.md
  - outputs/analyses/2026-09-10-W37-strategy-r1-opportunities.md
  - outputs/decisions/2026-09-10-W37-decision-r1-opportunity-type-scope.md
  - outputs/research-synthesis/2026-09-10-W37-r1-admin-portal-discovery.md
---

# How the Employment-Lifecycle Decisions Affect R1 Opportunities

## The short version

Employment-lifecycle handling isn't a separate initiative — it's the **identity and eligibility layer** underneath both R1 Opportunities workstreams. Every lifecycle decision changes either *who an officer is* (which opportunities they see and can apply to) or *what their competency profile says* (which opportunities get recommended and matched). Three of the lifecycle decisions gate R1 Opportunities directly.

---

## The dependency in one picture

```
Employment-lifecycle decisions
        │
        ├─ Identity resolution ──────────► WHO the officer is
        │                                   └─► ring-fencing: which opportunities they see
        │                                   └─► application ownership: whose application is it after a transfer
        │
        ├─ Profile sync (grade/agency) ──► ELIGIBILITY
        │                                   └─► ring-fencing by grade + agency (OTEP-127 extended)
        │
        └─ Competency move rules ────────► MATCHING INPUT
                                            └─► role recommendations
                                            └─► competency match ratio on the opportunity detail page
                                            └─► OTEP-1487 (hidden competencies excluded from matching)
```

R1 Opportunities consumes all three outputs. If the lifecycle layer is undecided, R1's ring-fencing, matching, and application-continuity behaviour are undefined.

---

## Decision-by-decision impact

### Lifecycle Decision 1 — R1-v1 scope: identity + profile sync + role-change IN; secondment / forward-deployment / double-hatting OUT

**What it gives R1 Opportunities:**
- **Identity resolution is the prerequisite for application continuity.** R1's officer-side workstream lets an officer apply and *track* an opportunity. If an officer transfers agencies mid-application (email changes), identity resolution is what keeps that application attached to the same person instead of orphaning it. Without Decision 1's identity story, "track your application" breaks the moment the applicant's POCDEX data changes.
- **Profile sync is the prerequisite for correct ring-fencing.** R1 extends MVP ring-fencing (OTEP-127) to per-posting agency / job-family / function scoping. That only works if the officer's current grade and agency are accurate. Profile sync keeps them current; without it, a promoted officer keeps seeing (and applying to) opportunities they're no longer eligible for, or misses ones they now qualify for.
- **Role-change (Group B) handling defines what happens to an in-flight application when the applicant's role changes.** If an officer applies for a STIP, then gets redesignated, does their application still make sense? Group B's competency-move rules determine whether the match that justified the application still holds.

**What the deferrals cost R1 Opportunities:**
- **Double-hatting deferred → R1 Opportunities assumes one active position per officer.** This is clean for the perf test (confirmed at grooming) but it means: a double-hatting officer in R1 sees opportunities ring-fenced to *one* of their positions, and recommendations factor *one* role. If any pilot-agency officers double-hat, their R1 Opportunities experience is partial until R1.x. Low volume expected in a 6-agency pilot — acceptable, flag for manual handling.
- **Secondment deferred → seconded officers get ring-fencing on their *stale* home agency.** R1 Opportunities won't know to ring-fence on both the seconded agency *and* the parent agency (the Group C rule). A seconded officer might not see opportunities in the agency they're currently working in. Again low pilot volume, but name it.

**Net:** Decision 1's *in-scope* items (identity, sync, role-change) are **hard prerequisites** for R1 Opportunities' ring-fencing and application-continuity. The *deferred* items create known, bounded gaps in the R1 Opportunities experience for double-hatting and seconded officers.

---

### Lifecycle Decision 2 — competency hide/show preference across a role change (carry over + non-blocking prompt)

**Direct impact on R1 Opportunities matching:**
- R1 Opportunities brings back the **competency match ratio on the opportunity detail page** (deferred from MVP). That ratio is computed from the officer's competency set. Decision 2 determines what that set looks like right after a role change — specifically whether a competency the officer had *hidden* stays hidden (and stays out of the match) or resets.
- **OTEP-1487** (exclude hidden role-based competencies from matching) is the same decision. R1 Opportunities' recommendations and match ratio both depend on OTEP-1487's `isHidden` semantics. If `isHidden` is undefined during a role-change window (the risk Decision 2 closes), R1 Opportunities' matching has no clean input for any officer who recently changed roles.
- Decision 2's recommendation (carry over, non-blocking prompt) means R1 Opportunities matching is **stable across a role change** — the officer's curated competency view persists, so their opportunity matches don't silently shift.

**If Decision 2 went the other way (re-prompt / reset):** every officer who changed roles would have an undefined competency view until they completed the prompt, and R1 Opportunities' match ratios would be unreliable for that population.

---

### Lifecycle Decision 3 — secondment / forward-deployment display values (host agency + host email, parent agency for ring-fencing only)

**Direct impact on R1 Opportunities ring-fencing:**
- This decision says ring-fencing during a secondment uses **new grade + both new and parent agency**. That's an R1 Opportunities ring-fencing rule — it determines which opportunities a seconded officer sees. R1's Pillar 1/2 ring-fencing logic has to implement "two agencies for one officer" for the seconded case.
- Because secondment is **deferred to R1.x** (Decision 1), R1-v1 Opportunities doesn't build this — but the R1 Opportunities data model should not assume "one officer = one ring-fence agency," or R1.x has to retrofit it. **Design the ring-fence-agency relationship as one-to-many now, populate one for R1-v1.**
- Forward deployment has no POCDEX marker, so R1 Opportunities can't ring-fence forward-deployed officers correctly at all until that discovery lands. Known gap.

---

## What this means for the R1 Opportunities plan

### Sequencing — lifecycle is upstream

| R1 Opportunities needs | Depends on lifecycle decision | Status |
|---|---|---|
| Correct per-posting ring-fencing | Decision 1 (profile sync) + Decision 3 (secondment dual-agency rule) | Sync is in R1-v1 scope; secondment rule deferred but data model must allow it |
| Application continuity across an applicant's job change | Decision 1 (identity resolution) | In R1-v1 scope — hard prerequisite |
| Stable competency match ratio + recommendations | Decision 2 (hide/show carry-over) + OTEP-1487 | Decision 2 must land before OTEP-1487 builds; both gate R1 matching |
| Handling double-hatting applicants | Decision 1 deferral (E/F to R1.x) | R1 Opportunities assumes one active position — bounded gap |

### Concrete actions for R1 Opportunities

1. **In the R1 Opportunities PRD, state the lifecycle dependency explicitly.** The officer-side workstream's "track your application" and both workstreams' ring-fencing assume identity resolution + profile sync are live. If lifecycle R1-v1 slips, R1 Opportunities' ring-fencing and continuity slip with it.
2. **Design the ring-fence-to-agency relationship as one-to-many from the start**, even though R1-v1 populates a single agency per officer. This is the cheap insurance against an R1.x retrofit when secondment comes in.
3. **Hold OTEP-1487 until lifecycle Decision 2 is approved.** Already flagged at grooming. R1 Opportunities' matching inherits whatever `isHidden` semantics OTEP-1487 ships with — don't let it ship on the default.
4. **Document the bounded R1 gaps** for double-hatting and seconded officers in the R1 Opportunities rollout plan: these officer types get a partial Opportunities experience (single-position ring-fencing/matching) until R1.x. Confirm expected pilot volume is low.
5. **Route the lifecycle Section 1 table validation (WD + POCDEX session) to also confirm the ring-fencing-relevant fields** — grade, agency, primary-position indicator — since R1 Opportunities ring-fencing reads them. One session, both purposes (the note already batches the `secondmentIndicator` question there).

---

## The one-line answer

The lifecycle decisions define the **identity and eligibility layer** R1 Opportunities sits on: identity resolution keeps applications attached to the right officer through a job change, profile sync keeps ring-fencing correct, and the competency-move rules (with OTEP-1487) keep opportunity matching stable. The R1-v1 lifecycle scope is a hard prerequisite for R1 Opportunities' ring-fencing and application continuity; the deferred items (secondment, double-hatting) create known, low-volume gaps in the R1 Opportunities experience that R1.x closes.
