---
date: 2026-09-28
week: 2026-W40
type: full-scope-wireframe
scope: CareerCompass Opportunities — STIPs & Gigs, full lifecycle (creation, discovery, application, tracking); SJR sketched separately, 2028-cycle, not part of R1/R2 scope-down
status: PM DRAFT — target-state vision, not committed design or confirmed roadmap
author: Michelle Yip
purpose: Design the end-state first, then scope down into R1/R2 cuts from a single coherent picture
related:
  - outputs/strategy/2026-09-28-W40-opportunities-full-scope-vision.md
  - outputs/prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md
  - outputs/prototypes/2026-09-28-W40-r1-interim-wireframes.md
  - outputs/analyses/2026-09-16-W38-r1-risk-register.md
---

# Opportunities Full-Scope Wireframes (STIPs & Gigs)

> ⚠️ **PM-drafted, not final design.** This sketches the full end-state from [Opportunities Full-Scope Vision](../strategy/2026-09-28-W40-opportunities-full-scope-vision.md) — all four pillars (creation, discovery, application, tracking) natively in Compass. It is a target to scope down from, not a spec to build against. No designer is currently named (R-10) and this vision itself is gated on R-32 (ATS viability) — see both docs for caveats. Method: draw the whole thing first, then mark what R1 already shipped and what's a candidate for R2, working backward from this picture rather than forward from R1's constraints.

---

## Screen Map

```
OFFICER SIDE                          POSTER/HR SIDE
1. Discovery Catalog                  5. Create Posting
2. Posting Detail                     6. Manage My Postings
3. Application Form                   7. Applicant Review List
4. My Applications (Tracking)         8. Applicant Detail / Decision
```

---

## 1. Discovery Catalog (Officer)

```
+----------------------------------------------------------------+
|  Opportunities                        [ Search...       ] [🔍] |
|  Filters: [ Type v ] [ Agency v ] [ Duration v ] [ ★ Saved ]    |
+----------------------------------------------------------------+
|  +------------------------+  +------------------------+
|  | [STIP]                  |  | [GIG]                   |
|  | Posting Title             |  | Posting Title             |
|  | Agency · Posted 2d ago    |  | Agency · Posted 5d ago    |
|  | Short description...      |  | Short description...      |
|  |              [🔖 Save]    |  |              [🔖 Save]    |
|  |         [ Apply → ]       |  |         [ Apply → ]       |
|  +------------------------+  +------------------------+
+----------------------------------------------------------------+
```

**Same as R1's shipped version** — the pillar that's already native and already correct. No material change in the full-scope picture; included here for completeness of the end-to-end flow.

---

## 2. Posting Detail (Officer)

```
+----------------------------------------------------+
|  ← Back to Opportunities                              |
|                                                        |
|  [STIP]  Posting Title                                |
|  Agency name · Posted 2 days ago · 14 applicants       |
|                                                        |
|  Full description text, duration, requirements...      |
|                                                        |
|  Duration: [dates]        Location: [agency/remote]    |
|                                                        |
|                          [🔖 Save]   [ Apply → ]        |
+----------------------------------------------------+
```

**New vs. R1:** "14 applicants" social-proof counter (only possible once Compass holds real application data — meaningless in R1's redirect model). Apply button leads to Screen 3, not an external form.

---

## 3. Application Form (Officer) — NATIVE, replaces FormSG redirect

```
+----------------------------------------------------+
|  Apply: Posting Title                                 |
|  Agency name                                          |
|                                                        |
|  Your profile (pre-filled):                            |
|   Name: [_________]   Email: [_________]               |
|   Current role: [_________]                            |
|   Resume/CV: [ attached: cv_2026.pdf ] [ Change ]       |
|                                                        |
|  Application questions (poster-defined):                |
|   1. [_________________________]                       |
|   2. [_________________________]                       |
|                                                        |
|  [ Save Draft ]                    [ Submit Application]|
+----------------------------------------------------+
```

**Replaces:** FormSG deep-link entirely. This is the "apply without leaving Compass" capability from the original March 2026 SteerCo approval — the thing R1 explicitly does not build. Pre-fill from officer profile is the actual retention/completion lever (officer never retypes what Compass already knows).

**Open question:** fixed schema vs. poster-defined questions — R-09 flagged this exact tension (agencies defecting to rogue forms if too rigid). Needs resolving before this is buildable, not just designable.

---

## 4. My Applications (Officer) — NATIVE TRACKING, does not exist in R1

```
+----------------------------------------------------+
|  My Applications                                       |
+----------------------------------------------------+
|  Posting Title A          [ Submitted ]    2 days ago  |
|  Posting Title B          [ Under Review ] 5 days ago  |
|  Posting Title C          [ Not Selected ] 1 week ago  |
|  Posting Title D          [ Selected! ]    3 days ago  |
+----------------------------------------------------+
```

**This is the screen that closes R1's own named gap** — "you vanish." Every status here requires the poster/HR side (Screens 7–8) to actually update something, so this pillar can't exist without that one.

---

## 5. Create Posting (Poster) — NATIVE CREATION, replaces OTG posting

```
+----------------------------------------------------+
|  Post an Opportunity                                   |
|                                                        |
|  Type: [ STIP v ] [ Gig v ]                            |
|  Title: [_______________________________]              |
|  Description: [_______________________________]        |
|                [_______________________________]        |
|  Duration: [____] to [____]                            |
|  Visibility: [ WOG-wide ] [ My agency only ]             |
|                                                        |
|  Application questions:                                 |
|   [ + Add a question ]                                  |
|                                                        |
|                        [ Save Draft ]  [ Publish ]       |
+----------------------------------------------------+
```

**Replaces:** posting on OTG entirely. Same open schema-flexibility question as Screen 3.

---

## 6. Manage My Postings (Poster)

```
+----------------------------------------------------+
|  My Postings                          [ + New Posting ]|
+----------------------------------------------------+
|  Posting Title A    Active     14 applicants  [Manage]|
|  Posting Title B    Active     3 applicants   [Manage]|
|  Posting Title C    Closed     22 applicants  [View]  |
+----------------------------------------------------+
```

**New pillar entirely** — no equivalent exists anywhere in R1, since posting never happens in Compass today.

---

## 7. Applicant Review List (Poster/HR)

```
+----------------------------------------------------+
|  Applicants: Posting Title A            (14 total)     |
|  [ All ] [ Under Review ] [ Selected ] [ Not Selected ] |
+----------------------------------------------------+
|  Name           Applied     Status         [Action]    |
|  Officer 1       2 days ago  Under Review   [Review →]  |
|  Officer 2       3 days ago  Under Review   [Review →]  |
|  Officer 3       5 days ago  Selected       [View]      |
+----------------------------------------------------+
```

**Replaces:** off-platform review entirely (email, FormSG's own response view). This is where R-27's "zero-HR-role holds cleanly" finding stops being true — the moment this screen exists, a real HR/poster reviewer role exists, and RBAC has to define what they can see/do (explicitly out of scope for R1's design work per R-10/Section 8).

---

## 8. Applicant Detail / Decision (Poster/HR)

```
+----------------------------------------------------+
|  ← Back to Applicants                                  |
|                                                        |
|  Officer 1 — Applied 2 days ago                         |
|  Current role: [_________]                             |
|  Resume/CV: [ View / Download ]                         |
|  Answers:                                               |
|   Q1: [officer's answer]                                |
|   Q2: [officer's answer]                                |
|                                                        |
|  Decision: [ Under Review ] [ Select ] [ Not Selected ]  |
|  Notes (internal): [_______________________]            |
+----------------------------------------------------+
```

**This is what feeds Screen 4's status back to the officer.** Both screens 7–8 are the direct build-out of the "in-app applicant review table" that R1's Section 8 explicitly puts off the roadmap.

---

## SJR (2028 Cycle) — Separate Section, Not R1/R2 Scope

> ⚠️ **Not part of the R1/R2 scope-down below.** SJR has a firm, already-decided timeline: stays on OTG through the 2027 cycle, migrates ahead of the 2028 cycle (R-13). This isn't a scoping cut open for reconsideration — it's SJR's own programme calendar. Also, unlike STIPs & Gigs, native SJR was explicitly evaluated and rejected even under the most ambitious version of R1 planning: *"SJR is a coordinated WD program with nomination and cycle logic — rebuilding its apply flow natively is an epic, not an R1 line"* (R1 opportunity-type scope decision, Option 1 rejection). Sketched here only so the shape of that future epic is visible, not to suggest it competes with the R1/R2 sequencing above.

**Why SJR's screens 3–8 equivalents don't look like STIPs & Gigs':**

| STIPs & Gigs | SJR |
|---|---|
| Anyone posts, anyone applies | PSD runs one coordinated annual cycle — a programme, not open posting |
| Simple application form | **Nomination** (agency nominates officers), not self-serve application |
| Binary select/not-selected | **Delta analysis** — matching officer profile against role requirements, a real matching engine, not a decision toggle |
| One posting, one review | **Cycle management** — a whole annual cohort moving through stages together, not independent postings |

### SJR — Illustrative Shape Only (Nomination + Cycle, Not a Form)

```
+----------------------------------------------------+
|  SJR 2028 Cycle — Nominations                         |
|                                                        |
|  Agency: [ PSD ]              Cycle status: [ Open ]   |
|                                                        |
|  Nominate officers:                                    |
|   [ + Add officer ]                                    |
|   Officer 1 — Current role: [___] → Nominated for: [___]|
|   Officer 2 — Current role: [___] → Nominated for: [___]|
|                                                        |
|  [ Delta Analysis: view profile-vs-role gaps ]          |
|                                                        |
|                              [ Submit Nominations ]      |
+----------------------------------------------------+

+----------------------------------------------------+
|  SJR 2028 Cycle — Programme View (WD/PSD)               |
|  Stage: [ Nominations ] → [ Delta Analysis ] → [ Panel ]  |
|          → [ Placement ]                                |
|                                                        |
|  147 officers nominated across 12 agencies               |
|  [ View by stage ] [ View by agency ] [ Export ]          |
+----------------------------------------------------+
```

**This is explicitly not comparable in build cost to any STIPs & Gigs screen above.** It's a workflow-orchestration and matching-logic build, not a CRUD form — treat it as its own epic whenever the 2028 cycle actually approaches, not as an item on this scope-down table.

---

## Full-Scope → R1/R2 Scope-Down

This is the actual point of drawing the whole thing first: mapping each screen against what's already shipped, what's a clean R2 candidate, and what has real open dependencies before it can be sequenced at all.

| Screen | R1 (shipped) | R2 candidate | Real blocker before scoping |
|---|---|---|---|
| 1. Discovery Catalog | ✅ Shipped, as-is | — | None — already done |
| 2. Posting Detail | ✅ Shipped (minus applicant counter) | Add applicant-count social proof | Needs Screen 7/8 data to exist first — can't show a count with no applications |
| 3. Application Form | ❌ Not built — FormSG redirect instead | **Strong R2 candidate** | Fixed vs. poster-defined question schema (R-09) unresolved |
| 4. My Applications | ❌ Not built | **Strong R2 candidate**, but only alongside Screen 8 | Can't ship without poster-side status updates (Screen 8) — half a pillar isn't shippable |
| 5. Create Posting | ❌ Not built — OTG only | R2/R3 candidate | Same schema question as #3; also a bigger organizational change (agencies stop using OTG for this type) |
| 6. Manage My Postings | ❌ Not built | Follows #5 directly | Same as #5 |
| 7. Applicant Review List | ❌ Not built — off-platform | **R2 candidate, paired with #3/#4** | RBAC for a real HR/poster reviewer role — doesn't exist today, explicitly deferred by R1's design scope |
| 8. Applicant Detail / Decision | ❌ Not built | Follows #7 | Same RBAC gap, plus CV retention/purge policy (R-03) reopens the moment resumes are stored again |

**The natural R2 cut, if this ever gets greenlit:** Screens 3+4+7+8 as one unit — native apply plus native tracking, both sides. That's the pillar pair that actually closes R1's "you vanish" gap, and none of the four works without the other three (an application form with no tracking, or tracking with no way to apply, are both incomplete). Creation (5+6) is a separable, later cut — Compass can gain native apply/tracking for postings still sourced from OTG's creation flow, as an intermediate step, before agencies stop posting on OTG entirely.

**Still true regardless of sequencing:** none of this is scopeable into an actual release plan until R-32 (ATS viability) resolves. This table shows what's technically separable, not what's approved to build.

---

*Next: once R-32 resolves and a designer is named (R-10), revisit this scope-down table as the starting point for actual R2 grooming — not from scratch.*
