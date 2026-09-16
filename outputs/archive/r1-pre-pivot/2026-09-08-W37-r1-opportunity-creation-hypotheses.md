---
date: 2026-09-08
week: 2026-W37
type: hypothesis-register
scope: R1 Opportunities — opportunity creation, form customisation, dual-posting, and the creation transition strategy
owner: Michelle Yip
status: working draft — for the R1 brainstorm and discovery planning
sources:
  - outputs/analyses/2026-09-07-W37-r1-opportunity-creation-transition-strategy.md
  - outputs/analyses/2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md
  - outputs/analyses/2026-09-07-W37-r1-opportunities-raid.md
  - outputs/prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md
---

# R1 Opportunity Creation — Hypothesis Register

The assumptions the R1 opportunity-creation strategy rests on, what would prove each wrong, and which options die if it fails. Companion to the [transition strategy](2026-09-07-W37-r1-opportunity-creation-transition-strategy.md) and the [creation/dual-posting analysis](2026-09-07-W37-r1-opportunity-creation-and-dual-posting.md).

**How to use this:** each hypothesis is a testable claim. Run the load-bearing four first (Section 6). Anything unfalsified after discovery + the auth spike is a green light to lock R1 scope; anything falsified reroutes the plan per the "if it fails" column.

---

## 1. Problem hypotheses — is the problem real?

| # | Hypothesis | Test | Falsified if |
|---|-----------|------|--------------|
| P1 | Agencies avoid posting in OTG **because its application form can't be customised** — that's the primary driver, not one of many. | BO discovery: "when do you use OTG vs a standalone FormSG link, and why?" + pull 15–20 real FormSG workaround forms. | Discovery shows the workaround is driven by something else (habit, OTG UX, approvals, access) and forms are secondary. |
| P2 | This avoidance is **re-fragmenting opportunities** — the problem MVP's unified listing solved is coming back via standalone FormSG links. | Ask agencies whether FormSG-posted roles also appear in OTG / Compass, or only in the FormSG link. | Agencies still cross-post to OTG or Compass, so discovery isn't actually fragmenting. |
| P3 | The form-customisation pain is **broad across the 6 pilot agencies**, not a vocal few. | Same question across all 6 pilot-agency HR teams. | Only 1–2 agencies raise it; the rest are fine with OTG's form. |

---

## 2. Solution hypotheses — will the fix work?

| # | Hypothesis | Test | Falsified if |
|---|-----------|------|--------------|
| S1 | **3–5 templates + a few toggleable questions** cover most real agency needs. A free-form field builder isn't needed for R1. | Categorise the fields in the collected FormSG forms; card-sort with 3–4 HR users; count forms that fit a template vs need free-form. | >30% of real forms need fields no template carries, or agencies reject templates as too rigid. |
| S2 | Agency HR — including junior staff — can **create a posting and pick a template** without significant training. | Lightweight usability test of the creation flow with the person who'd actually do it. | The flow needs hand-holding or a specialist to complete. |
| S3 | A customisable form **in a place that also has an audience** is enough to pull agencies off FormSG. | Ask directly: "if Compass had both your custom questions and discovery, would you stop using FormSG?" | Agencies say they'd keep using FormSG for reasons beyond the form. |
| S4 | Native apply + pre-fill + status tracking makes creating-in-Compass **worthwhile enough** that agencies accept the switch. | Ask agencies what *they* get from the officer-facing features. | Agencies see no benefit to them; creation-in-Compass is pure overhead. |

---

## 3. Strategy hypotheses — is agency-by-agency migration the right shape?

| # | Hypothesis | Test | Falsified if |
|---|-----------|------|--------------|
| T1 | Creation can migrate **wave by wave** without a big-bang cutover, and each partial state stays coherent. | Walk the mixed state (some agencies native, some on OTG) past BOs and Pow Hwee: does anything break? | A partial state breaks a workflow that only works if everyone's on one system (cross-agency reporting, eligibility checks, scheme administration). |
| T2 | The creation **model set in R1 stays constant** through R2–R4; later waves just add agencies. | Sanity-check against R2 (POLITEs, AGC) and R3 (HDB, MOH, HSA, CSC) agency types in later discovery. | R2/R3 discovery surfaces agencies whose creation needs are structurally different and force a model change. |
| T3 | R2 and R3 teams can **absorb "add these agencies to native creation"** alongside their headline features (course matching, dev plans). | Size the per-wave cohort-expansion increment with the release leads. | Cohort expansion is a real project each wave, not a small increment — the waves can't carry it. |
| T4 | **No write-back sync to OTG is needed.** A one-way link-stub covers the transition-period reach gap. | BO discovery: "how many postings per quarter genuinely need full-government reach right now?" | Most postings need full-gov reach now, making the link-stub the norm not the exception — at which point you're rebuilding a sync. |
| T5 | The **Oct 2027 → March 2028 buffer** is enough to finish cutover and decommission OTG safely. | Pressure-test the R4 plan against known dependencies (HDB piping, straggler agencies). | R4 scope or dependencies make Oct 2027 unrealistic, eating the buffer. |

---

## 4. Adoption / audience hypotheses

| # | Hypothesis | Test | Falsified if |
|---|-----------|------|--------------|
| A1 | For the pilot cohort, **most postings are targeted** (agency / grade / scheme-specific), so Compass-only visibility during transition is acceptable. | BO discovery: what share of your postings are targeted vs open to any officer government-wide? | A large share are genuinely cross-government and can't wait for the next wave. |
| A2 | Officers will **complete a native pre-filled application** at a higher rate than the current redirect-to-FormSG. | PostHog funnel post-launch: list → detail → in-Compass submit → confirmation. | Completion stays at or below the ~15–20% redirect baseline (existing kill criterion: <25% at 4 weeks). |
| A3 | The pilot agencies (MVP 6) are a **valid test bed** for template-based creation, even though the internal-marketplace-heavy agencies (WSG/PA/MSF) come later. | Check pilot-cohort posting volume and variety against what you need to learn before R4. | The pilot cohort's volume/variety is too low to learn anything meaningful before R4 scales to 30 agencies. |

---

## 5. Feasibility hypotheses — can it be built in the window?

| # | Hypothesis | Test | Falsified if |
|---|-----------|------|--------------|
| F1 | **Agency-admin auth can land in the R1 window.** | Pow Hwee / Fabian T-shirt size: S (weeks) / M (a sprint) / L (needs GovTech, e-tender, multi-sprint). | Sized L. Native creation is then out of R1; the transition starts at R2. |
| F2 | OTG **exposes internal jobs / secondments / rotations** in an ingestible feed. | OTEP-578 spike, Sprint 9. | No feed — those types are external-link-only until their agency migrates to native creation. |
| F3 | The **variable-length apply form** (fixed profile block + variable custom section) is buildable in R1 without conditional-logic complexity. | Engineering estimate on Epic B once the variable-form spec lands. | The estimate balloons; the form needs conditional logic / branching to be usable. |
| F4 | **One designer + a moved timeline, or a second designer**, is enough to design the template set + variable form + all states. | Design capacity decision (collision-analysis Options B/C) with Adrian. | Neither is available; R1 ships half-designed or slips uncontrolled. |

---

## 6. The load-bearing four — validate these first

Everything hinges on these. Run them this week and next.

| Priority | Hypothesis | Owner | By when | If it fails |
|---|---|---|---|---|
| 1 | **F1** — auth can land in R1 | Pow Hwee / Fabian | This week (T-shirt size) | Native creation out of R1; transition starts at R2. Whole thread reroutes. |
| 2 | **P1 + S1** — form customisation is the driver, and templates cover it | Michelle / Liting | BO discovery, week of 8 Sep | Revert to ingest-only for R1; creation stays R4. |
| 3 | **T1** — a mixed native/OTG state doesn't break a cross-agency workflow | Michelle + Pow Hwee | BO discovery + eng review | Wave model doesn't work; need a different transition shape. |
| 4 | **A1** — targeted-audience is the norm, so the reach limitation is a non-issue | Michelle | BO discovery (get the number) | Forced toward a write-back sync the plan is built to avoid. |

**Decision logic once these report:**
- F1 fails → shift the whole transition one release later; R1 = ingest-only + native apply/status.
- P1/S1 fail → R1 = ingest-only; creation stays a clean R4 deliverable.
- T1 fails → keep the OTG-authoritative model longer; re-scope the transition around a later, larger cutover.
- A1 fails → either compress the wave schedule (if reach is essential for *most* roles) or build the link-stub as standard (if it's essential for *some*).
- All four hold → lock R1 scope as: template-based creation for the pilot 6, no write-back sync, accept the audience limitation, agency-by-agency migration through R2–R4.

---

## 7. This week (W37)

1. **Get Pow Hwee's auth-path T-shirt size** (F1) — the single fastest signal; eliminates the most options.
2. **Book BO / agency discovery** (Megan Yeo + pilot-agency HR), framed around the FormSG workaround forms — tests P1, P2, P3, S1, S3, S4, T1, T4, A1.
3. **Take this register + the transition strategy to the Sprint 9 R1 brainstorm** for the feasibility read.
4. **Update** the [R1 opportunity-scope PRD](../prds/2026-09-07-W37-r1-opportunity-scope-planning-review.md) and [R1 Opportunities RAID](2026-09-07-W37-r1-opportunities-raid.md) once the load-bearing four report.

---

*Generated: 2026-09-08. The hypothesis layer under the R1 opportunity-creation strategy. Re-status at each `/weekly-review` and after each R1 brainstorm — move each hypothesis to confirmed / falsified / still-open as evidence lands.*
