# Brownbag Findings vs. R1 Scope Analysis

**Date:** 2026-07-30

**Source meeting:** [2026-07-29-W31-brownbag-development-opportunities.md](../meeting-notes/2026-07-29-W31-brownbag-development-opportunities.md)

**Scope baseline:** [R1 PRD](../prds/2026-07-07-W28-careercompass-r1-prd.md), with Epic A scope expansion noted below

**Purpose:** Check the brownbag's discovery findings (fragmentation, application handoff, notifications, outcome visibility) against what R1 currently commits to build, and flag the implications of the scope change you named — ingestion + creation now covers Jobs, Internal Rotations, Secondments, and SJRs.

---

## Scope Change Flagged First

Your message states R1 scope now includes ingestion and creation of **Jobs, Internal Rotations, Secondments, and SJRs**. Checked against the current PRD, this is a real expansion, not a restatement:

| Opportunity type | Current PRD (Epic A) | Your stated R1 scope | Change |
|---|---|---|---|
| Internal Job | In scope (creation) | In scope | No change |
| Secondment | In scope (creation) | In scope | No change |
| STIP | In scope (creation) | Confirmed in scope | No change |
| Gig | In scope (creation) | Confirmed in scope | No change |
| **Internal Rotation** | **Not named as a distinct type** | **In scope** | **New** — per the OTG ingestion logic doc, "Internal Rotation" is already a distinct classification bucket from "Job/Secondment" (different prefix rules), so this isn't a relabeling, it's a genuinely separate opportunity type needing its own creation flow |
| **SJR** | **Explicitly excluded** ("unless explicitly pulled in by Mark") | **In scope — built in R1, launched for 2028** | **Reversal of an explicit Non-Goal, with a twist: this is foundation-building, not a Q1 2027 pilot feature.** |

**Confirmed:** STIP and Gig creation both still hold — the expanded Epic A type set is additive (Internal Job, Secondment, STIP, Gig, **+ Internal Rotation, + SJR**), not a narrowing. That's six opportunity types getting a native creation flow built in R1.

**SJR specifically is a different kind of scope item than the other five — read this carefully:**

Your framing ("SJR needs to be ready for the 2028 cycle, so the assessment is to get the foundation ready") means SJR's native creation flow gets **built in R1 with full engineering effort, but stays dark/unlaunched until 2028**. This is meaningfully different from the other five types, which ship and go live with the Jan 2027 pilot:

| | Internal Job, Secondment, STIP, Gig, Internal Rotation | SJR |
|---|---|---|
| Built in R1? | Yes | Yes — same effort |
| Launched with Jan 2027 pilot? | Yes | **No — feature-flagged off until 2028** |
| Success metrics apply? | Yes (apply completion rate, North Star, etc.) | **No — nothing to measure until launch** |
| UAT scope? | Yes, Batch 1/2 per current UAT plan | **Needs its own answer — see below** |

**Implications this creates, none of which are answered yet:**

1. **This is a distinct PRD Non-Goal-turned-Goal that needs its own success framing.** The current Non-Goal #5 language ("SJR creation — excluded, consistent with MVP ingestion scope, unless explicitly pulled in by Mark") doesn't fit anymore, but neither does folding SJR into Epic A's existing acceptance criteria as if it ships alongside the other five. It needs its own line: built, dark, target launch 2028.
2. **Feature-flag / dark-launch mechanism isn't mentioned anywhere in the current PRD or technical scope.** Every other epic assumes what's built ships. This is R1's first "build now, launch later" item — worth confirming with Pow Hwee/Engineering whether the existing architecture supports a clean feature flag, or whether this needs its own technical spike.
3. **UAT scope is genuinely unclear.** Do SJR creation flows get tested in Batch 1/2 alongside the other five types (testing the mechanism even though it won't launch), or does SJR testing get deferred entirely to a pre-2028 UAT cycle? This should get resolved before Batch 1 test cases (already in progress, per this week's UAT sync) get scoped.
4. **This still needs to be recorded as a decision, not an assumption.** It reverses an explicit PRD Non-Goal that was gated on Mark's sign-off — but the decision being recorded should say what actually happened: "SJR creation scope approved for R1 as foundation-building, target launch 2028," not just "SJR creation approved."

---

## Brownbag Findings Mapped Against R1 Scope

### 1. Discovery fragmentation (strongest signal in the brownbag — direct, repeated user question)

**Finding:** Officers don't know which channel (OTG, Development Opportunities page, EDMs, FormSG) is authoritative. This was the most explicit pain point in the room.

**Against R1 scope:** R1's Epic A (native creation) and expanded ingestion scope directly address the *root cause* of this fragmentation — if agencies create Jobs/Internal Rotations/Secondments/SJRs natively in CareerCompass instead of OTG, and ingestion consolidates the rest, CareerCompass becomes the single source of truth by construction, not by a separate "Discovery Hub" feature.

**Implication:** This is good news — expanding creation scope to more opportunity types makes R1 more directly responsive to the #1 brownbag finding than the narrower Epic A scope was. But it also raises the stakes on ingestion quality (see below), because a "single source of truth" that's wrong is worse than known fragmentation.

### 2. Application fragmentation (OTG discovers, FormSG applies)

**Finding:** OTG's native application flow isn't customizable enough, so FormSG handles the actual application — a two-system handoff.

**Against R1 scope:** This is exactly what Epic B (native in-Compass apply, no FormSG redirect) already solves, and it's unaffected by the Epic A scope expansion — Epic B's scope is about the *apply* step, not which opportunity types get created natively. No new gap here, but worth noting: since SJR creation is being built but not launched until 2028, does SJR's *apply* flow get built now too (as part of the same foundation-laying effort) or deferred entirely until closer to 2028? Worth deciding alongside the feature-flag question below rather than assuming Epic B's build implicitly covers it.

### 3. No notifications / manual EDM workaround

**Finding:** Officers aren't proactively alerted to new postings.

**Against R1 scope:** **Not in R1 scope today, expanded or not.** This is a real gap — none of Epics A through E address notifications or alerts. The brownbag's "Opportunity Alerts and Subscription Service" feature idea has no home in R1. This isn't necessarily wrong (R1 already has a full non-negotiable floor), but it should be named explicitly as deferred rather than silently absent, especially since it's a top-4 pain point.

### 4. Unclear process ownership (who pays, who approves, feedback loop to parent agencies)

**Finding:** Governance questions — not UX questions, per the brownbag notes themselves.

**Against R1 scope:** Correctly out of scope for a product release — this is an operating-model question, not something Epic A/B/C creation-and-apply flows would resolve. Worth flagging to Adrian/Jace as a parallel governance workstream, but not a gap in R1's product scope.

**However:** if Internal Rotation and SJR creation both move natively into CareerCompass, the "who approves" question becomes more urgent, not less — right now approval workflows for these types likely live in whatever process OTG/host agencies use today. Native creation in Epic A needs to either replicate that approval step or explicitly punt on it (similar to how Non-Goal #1 explicitly punts on ATS system-of-record responsibilities). This isn't addressed anywhere yet.

### 5. Outcome visibility (appraisal impact, host feedback)

**Finding:** Officers can't see appraisal impact or feedback after completing an opportunity.

**Against R1 scope:** **Not in R1 scope.** Epic C's status tracking (Submitted → Under Review → Outcome) covers the *application* lifecycle, not the *post-completion* outcome/appraisal lifecycle the brownbag flagged. These are genuinely different problems — Epic C tells you if you got the opportunity; the brownbag pain point is about what happens after you complete it. Correctly out of scope for R1, but worth a line in the PRD's Non-Goals so it doesn't get assumed as "covered by Epic C" by someone skimming later.

---

## The Compounding Risk: Ingestion Quality Now Matters More

The brownbag notes already flag (in its own "Context for Future Reference" section) that any unification work inherits the OTG ingestion pipeline's existing open questions — specifically the classification logic in `context-library/research/otg-ingestion-logic.md`:

- **Rule precedence isn't documented:** "Internal Rotation" and "Job / Secondment" both match on "contains JOB"-style substrings. If a real posting could satisfy both sub-rules (e.g. a prefix like "INTERNAL JOB SECONDMENT"), there's no confirmed precedence order.
- **Four near-identical fallback buckets** (`Others`, `Other`, `Test/Invalid`, `Untagged`) — unclear how these map onto whatever schema CareerCompass's native creation flow expects.

**Why this matters more now, not less:** Under the original PRD scope, ingestion ambiguity mainly affected *display* of already-created OTG postings. Under the expanded scope — where Internal Rotation and SJR get *native creation* in CareerCompass — the classification logic isn't just a downstream display concern anymore. If Internal Rotation and Job/Secondment classification rules can overlap, and agencies are now creating these types directly (not just having them ingested from OTG), Epic A's creation form needs its own clear, non-overlapping type definitions — it can't just inherit OTG's ambiguous prefix-matching logic wholesale.

**Recommendation:** Before Epic A grooming opens for the expanded type set, get the two open questions in the OTG ingestion logic doc answered (owner: confirm with Jobelle/Amber), specifically the precedence question — it's no longer just a data-quality nice-to-have, it's a definitional question for what the native creation form even offers as opportunity-type options.

**A duration-based grouping may help resolve this:** Job, SJR, Internal Job, Internal Rotation, and Secondment are all long-term stints — that's five of the six in-scope types sharing a category, with STIP and Gig as the shorter-term/gig-style counterpart. This is a useful candidate disambiguator for the precedence problem above: if "long-term stint" vs. "short-term/gig" becomes an explicit field in the creation form and ingestion schema (rather than relying purely on prefix-string matching), it gives Epic A's creation form a structural way to separate Internal Rotation from Job/Secondment that doesn't depend on resolving whether "INTERNAL JOB SECONDMENT"-style prefix overlaps get sorted correctly. It doesn't fully solve the ambiguity on its own (Internal Rotation, Job, and Secondment are all long-term stints, so duration alone won't disambiguate *between* those three) — but it does cleanly separate the two groups, and is worth raising as a candidate schema field when the precedence question goes back to Jobelle/Amber.

**Proposed schema field:** `stint_duration_type`, enum values `long_term_stint` (Job, Internal Job, Internal Rotation, Secondment, SJR) / `short_term_gig` (STIP, Gig). Suggested placement: alongside `opportunity_type` at classification time (Step 4 of the OTG ingestion logic) and as a required field on Epic A's native creation form. This would need to be added to both:
- The OTG ingestion pipeline's Step 4 classification output (`context-library/research/otg-ingestion-logic.md`) — as an additional derived column alongside `opportunity_type`, not a replacement for it (still need `opportunity_type` to distinguish Internal Rotation from Job from Secondment within the long-term-stint bucket).
- Epic A's creation-form schema (native postings), so natively-created opportunities carry the same field ingested ones would get, keeping the two paths consistent.

This is a proposal to validate with Jobelle/Amber (ingestion side) and Pow Hwee (creation-form schema), not a confirmed field name — flag it as a starting point for that conversation, not a locked spec.

---

## Summary: What This Means for R1 Planning

1. **Epic A now covers six opportunity types** (Internal Job, Secondment, STIP, Gig, Internal Rotation, SJR) — confirmed additive, not a narrowing. Update the PRD's Epic A story (A1) and MoSCoW section to reflect all six explicitly.
2. **SJR is fundamentally different from the other five: built in R1, launched for 2028, not the Jan 2027 pilot.** This needs its own PRD treatment — not folded into Epic A's existing acceptance criteria as if it ships alongside the rest, and not left as the old Non-Goal #5 language either.
3. **Get the SJR decision recorded precisely** — "SJR creation scope approved for R1 as foundation-building work, target launch 2028," not a generic "SJR approved" note. It reverses a Non-Goal gated on Mark's sign-off, so the record should reflect what was actually agreed.
4. **Feature-flag / dark-launch mechanism needs a technical answer.** Nothing in the current PRD or architecture discussion addresses building a feature that ships code but stays off until a future cycle. Confirm with Pow Hwee/Engineering whether this is a clean flag or needs its own spike.
5. **UAT scope for SJR is unresolved** — does it get tested in Batch 1/2 alongside the other five (mechanism testing without launch), or deferred to a pre-2028 UAT cycle? Resolve before Batch 1 test cases finalize.
6. **Resolve the OTG classification precedence question before Epic A grooming** — it's now a definitional input to the creation form, not just an ingestion-side data quality flag, and it's more load-bearing with six types instead of four (more room for prefix-rule overlap).
7. **Notifications and outcome visibility remain real gaps** the brownbag surfaced — not asking to add scope, but they should be named explicitly as deferred (R1.5/R2 candidates) rather than silently absent from the PRD.
8. **Approval/governance workflow for natively-created Internal Rotations** (launching now) and **SJR** (launching 2028) has no home yet — Epic A's creation flow needs to either replicate an approval step or explicitly scope it out, the way Non-Goal #1 handles the ATS/system-of-record boundary.

---

*Sources: `outputs/meeting-notes/2026-07-29-W31-brownbag-development-opportunities.md`, `outputs/prds/2026-07-07-W28-careercompass-r1-prd.md`, `context-library/research/otg-ingestion-logic.md`.*
