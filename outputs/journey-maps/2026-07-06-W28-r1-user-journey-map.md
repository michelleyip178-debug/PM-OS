---
product: CareerCompass (OTEP)
feature: R1 — Epics A, B, C, D
date: 2026-07-06
updated: 2026-07-15
owner: Michelle Yip
type: user-journey-map
sources:
  - outputs/research-synthesis/2026-07-06-W28-r1-user-personas.md
  - outputs/prds/2026-07-06-W28-r1-job-stories.md
  - outputs/prds/2026-07-07-W28-careercompass-r1-prd.md
  - outputs/analyses/2026-07-15-W29-r1-research-plan.md
status: draft — scope confirmed (Mark signed off 9 Jul SteerCo), still not validated against live interviews. See the R1 research plan for how this gets validated before Aug-Sep design lock.
---

# User Journey Map: CareerCompass R1

**Scope:** Three parallel lanes covering R1's Must-have floor (Epics A, B, C) plus the conditional Epic D (Saved Jobs).

**Data gap flag:** Pain points and emotions are derived from the PRD's own named failure points ("the redirect," "the status black hole") and the personas doc, not live user interviews. Treat as hypotheses pending validation. **A research plan now exists** ([2026-07-15-W29-r1-research-plan.md](../analyses/2026-07-15-W29-r1-research-plan.md)) to close this gap before R1 design locks Aug-Sep 2026, prioritizing Lane 3 (Posting Manager) sessions first since Epics A and C carry the least de-risked, unsized work.

**What changed since 2026-07-06:** R1 scope is now finalized and locked, not provisional. The PRD (2026-07-07) confirmed "World B" — fully OTEP-native status tracking, no ATS/HRPS/Cumulus integration anywhere in the chain — as board-level sourced fact (CIO-confirmed 2026-07-07). Mark signed off on the Must-have floor (Epics A, B, C) at the 9 Jul SteerCo (open item #40, resolved 2026-07-09). This map's content is otherwise unchanged: the three blockers named below (agency-admin auth, competency SSOT contract, manager status-update UX) are all still open as of this update, despite draft outreach going out 2026-07-06 — no confirmed responses found in meeting notes since.

---

## Reforge Validation: What Each Lane Is Actually Testing

This map, and the [R1 research plan](../analyses/2026-07-15-W29-r1-research-plan.md) built to validate it, both follow the **Reforge Feature Opportunity Validation** framework (Strategic Fit, User Value, Business Value) — the same lens applied to R1's original scope decision at the 24 Jun jamming session. That session validated whether R1 should exist; this map validates whether its design assumptions, lane by lane, actually hold.

| Lane | Strategic Fit test | User Value test | Business Value test |
|---|---|---|---|
| **Lane 1 (Intentional Mover)** | Does removing the redirect + adding pre-fill deliver on "native, no redirects" (Product Strategy), or does a different friction point (e.g., pre-fill trust) turn out to matter more? | Do officers actually feel relief at not retyping, or does stale/wrong pre-fill create a worse experience than today's blank form, per the PRD's own trust-destroyer warning? | Apply completion rate (40%+ target) is the OKR most directly tested by this lane — if Phase 2's pre-fill trust risk is real, the OKR itself is at risk, not just the UX. |
| **Lane 2 (Passive Watcher)** | Tests whether "CareerCompass becomes the system of record" needs a funnel-widening on-ramp at all, or whether Lane 1 alone captures enough value to justify R1 without Epic D. | Tests whether Persona 2's "safe place to defer" job is real and whether a save mechanism actually converts to Lane 1 entries, or whether it's a bookmark nobody returns to. | Epic D is the named first-cut candidate under scope pressure — this lane is the only place gathering evidence on that trade-off before it gets made by default, not after. |
| **Lane 3 (Posting Manager)** | Tests the single biggest Strategic Fit risk in this map: World B (OTEP owns the full record) was locked for engineering-feasibility reasons, not because research confirmed posting managers want OTEP to own it. This lane is where that assumption either holds or breaks. | Tests Persona 3's actual job (assess fit, not just receive volume) against a workflow that, per the PRD, "did not exist under the old ATS plan" — genuinely new scope, not a simplification. | Carries the PRD's two least-sized, least-designed pieces (agency-admin auth, manager status-update UX). Per the effort-sizing analysis, this is where R1's real cost is hiding — Business Value here isn't about a metric target, it's about whether the floor Mark signed off on is actually buildable as scoped. |

**The framework's biggest catch in this map:** Lane 3, Phase 4 (Move to Outcome) is flagged Red risk not because of technical difficulty, but because it's undesigned *and* untested against real posting-manager behavior. Strategic Fit and engineering feasibility aligned on World B by circumstance (ATS wasn't ready), this map — and the research plan behind it — exists to check they also align on User and Business Value, not just system architecture.

---

## Journey Overview

```
Lane 1 (Intentional Mover):   Discover → Decide to Apply → Apply (native form) → Wait → Status/Outcome
Lane 2 (Passive Watcher):     Discover → Browse → Save/Defer → Nudged → [feeds into Lane 1's "Decide to Apply"]
Lane 3 (Posting Manager):     Log In → Create Posting → Publish → Review Applicants → Move to Outcome → [drives Lane 1's Status/Outcome]
```

Lane 2 terminates by feeding Lane 1. Lane 3's final stage drives Lane 1's final stage. This is one connected system, not three independent journeys.

---

## Lane 1: The Intentional Mover

**Persona:** Mid-career officer, 5-10 years, time-boxed and outcome-driven. **Goal:** Apply and know where they stand, without leaving CareerCompass.

### Phase 1: Decide to Apply

**Duration:** Minutes to a day | **Goal:** Move from "interested" to "committed"

| Element | Details |
|---|---|
| **Touchpoints** | Opportunity detail page, Apply CTA |
| **Actions** | Reviews opportunity, clicks Apply |
| **Thoughts** | "This closes a specific gap before my review — I want to move on it now, not browse more." |
| **Emotions** | 😊 Motivated, slightly impatient |
| **Pains** | 🟢 None named yet at this stage — friction starts at the click |
| **Opportunities** | 💡 None needed here; this stage already works |
| **Metrics** | Of ~5,400 pilot officers, only ~810 (30% of browsers) are projected to reach the Apply CTA at all (PRD funnel math) |

### Phase 2: Apply (Native Form)

**Duration:** Minutes, if pre-fill works | **Goal:** Submit without retyping or leaving the platform

| Element | Details |
|---|---|
| **Touchpoints** | In-Compass apply form (Epic B), pre-filled competency/work-history fields, optional motivation statement field |
| **Actions** | Reviews pre-filled data, edits as needed, adds motivation statement, submits |
| **Thoughts** | "Wait, why am I being sent to another site?" (today) → "Good, it already knows my competencies" (R1 target) |
| **Emotions** | 😟 Today: jarred by "the redirect" to FormSG → 😊 R1 target: relief at not retyping |
| **Pains** | 🔴 **Today:** the redirect to FormSG breaks momentum (named failure point #1 in PRD). 🔴 **Today:** blank form re-asks known data — no pre-fill exists. 🟡 **R1 risk:** if the competency SSOT contract (#18/#41) isn't finalized before launch, pre-fill may be stale or wrong, which the PRD explicitly warns erodes trust *faster than no pre-fill at all* |
| **Opportunities** | 💡 Ship B1 (native apply, no redirect) and B2 (pre-fill) together — B2 without B1 doesn't fix momentum loss, B1 without B2 doesn't fix retyping. 💡 Instrument form-section abandonment from day one (already a PRD "ready to pull into stories now" item) |
| **Metrics** | Target apply completion rate: 40%+ vs. ~15-20% OTG baseline. Kill-criteria: if completion doesn't hit 25% within four weeks, PRD's own logic says pause and remediate |

**⚠️ Blocker at this stage:** Competency SSOT contract (#18/#41) between Léo and Kingsley — endpoint payload spec still open. Gates whether pre-fill is trustworthy at launch. **Update 2026-07-15:** sourcing itself is resolved (#18, confirmed 2026-07-05 via Imelda's workstream) — what's still open is only the endpoint payload spec. A direct Slack ask went to Léo and Kingsley 2026-07-06; no confirmed response found since.

### Phase 3: Wait for a Decision

**Duration:** Days to weeks | **Goal:** Know that someone has seen the application

| Element | Details |
|---|---|
| **Touchpoints** | Today: nothing (silence). R1: "My Applications" status view (Epic C) |
| **Actions** | Today: waits, eventually emails to follow up. R1: checks status view periodically |
| **Thoughts** | Today: "Did anyone even see this?" R1: "I can see it's Under Review, I don't need to chase anyone." |
| **Emotions** | 🔴 Today: anxious, then frustrated ("the status black hole," named failure point #3). 😊 R1 target: reassured |
| **Pains** | 🔴 Today: applications vanish into a FormSG inbox with zero visibility. 🟡 R1 risk: the 24-hour status-update latency OKR still needs Adrian's explicit sign-off — the measurement point changed from an ATS event to a Posting Manager's in-OTEP action, so the target isn't fully locked |
| **Opportunities** | 💡 Timeline view (Submitted → Under Review → Outcome), not a single static badge, per PRD's own "ready to pull into stories now" recommendation |
| **Metrics** | Status latency target: ≤24 hours of hiring manager action (pending sign-off) |

### Phase 4: Outcome

**Duration:** A moment, but a high-stakes one | **Goal:** Get a clear answer, handled with care if it's a no

| Element | Details |
|---|---|
| **Touchpoints** | Outcome notification (push or in-app) |
| **Actions** | Receives notification, reads outcome |
| **Thoughts** | If rejected: "At least I know. But how this is worded matters." |
| **Emotions** | 😊 If accepted: satisfied, momentum validated. 😔 If rejected: the PRD itself names this "the most emotionally sensitive surface in the release" |
| **Pains** | 🔴 A poorly-worded rejection screen could undo the trust R1 built in the apply/status stages — this isn't a state-machine afterthought |
| **Opportunities** | 💡 This screen gets its own design pass (per PRD), not a bolt-on to the Epic C state machine spec |
| **Metrics** | Officer CSAT target: ≥3.5/5 for the application process |

---

## Lane 2: The Passive Watcher

**Persona:** Early-career officer, sporadic and low-commitment. **Goal:** Stay aware without committing, and not lose track of something interesting.

### Phase 1: Browse

**Duration:** Minutes, infrequent sessions | **Goal:** Notice something interesting with zero pressure to act

| Element | Details |
|---|---|
| **Touchpoints** | Opportunity listing, detail pages |
| **Actions** | Scrolls, opens a few postings, leaves without acting |
| **Thoughts** | "Interesting, but I'm not ready to commit right now." |
| **Emotions** | 😐 Neutral, unhurried |
| **Pains** | 🟢 None yet — browsing itself works today |
| **Opportunities** | 💡 None needed at this stage |
| **Metrics** | OTG baseline re-login rate: 9% — most sessions don't lead to a return visit |

### Phase 2: Defer the Decision

**Duration:** The moment of leaving | **Goal:** Not lose the thread on something worth reconsidering

| Element | Details |
|---|---|
| **Touchpoints** | Today: none — no save mechanism exists. R1: Save button (Epic D, save-half only) |
| **Actions** | Today: leaves and hopes to remember. R1: taps Save, exits |
| **Thoughts** | "I'll come back to this later" — with no way today to make that true |
| **Emotions** | 😟 Today: mild anxiety about losing track. 😊 R1 target: relief |
| **Pains** | 🔴 Today: no safe place to defer — every session starts cold, per personas doc |
| **Opportunities** | 💡 Ship the "save" half of Epic D even if "resume in-progress application" doesn't make R1 |
| **Metrics** | None named yet — Persona 2 has no confirmed R1 metric of its own (per personas doc cross-persona table) |

**⚠️ Scope risk at this stage:** Epic D is explicitly named in the PRD as the first thing cut under scope pressure. If cut, this persona gets no R1 improvement at all.

### Phase 3: Get Nudged

**Duration:** Passive, triggered by time | **Goal:** Be reminded before it's too late to act

| Element | Details |
|---|---|
| **Touchpoints** | Today: none. R1 (if scoped): closing-date nudge |
| **Actions** | Today: opportunity closes silently, unnoticed. R1: receives "closes in 3 days" nudge |
| **Thoughts** | Today: (later, if they remember) "Wait, did that close already?" |
| **Emotions** | 🔴 Today: quiet regret, no visible failure moment to learn from. 😊 R1 target: prompted to decide |
| **Pains** | 🔴 Today: a closing deadline can pass silently with no reminder |
| **Opportunities** | 💡 Closing-date nudge is the mechanism that actually converts a save into action — without it, Saved Jobs is just a bookmark with no urgency |
| **Metrics** | None named — worth defining before Epic D ships, if it ships |

### Phase 4: Decide to Act → Feeds Lane 1

**Duration:** The transition moment | **Goal:** Move from passive interest to active application with no added friction

| Element | Details |
|---|---|
| **Touchpoints** | Saved opportunity list → Apply CTA (same as Lane 1 Phase 1) |
| **Actions** | Returns to a saved opportunity, decides to apply |
| **Thoughts** | "Now's the time" — the PRD's own journey lane language: "decides to apply. Joins Lane 1." |
| **Emotions** | 😊 Ready, no re-orientation cost |
| **Pains** | 🟡 If the apply experience isn't as smooth here as it is for a first-time Lane 1 entrant, the funnel-widening bet fails quietly |
| **Opportunities** | 💡 Treat this handoff as a design requirement, not an assumption — test that a Lane 2 → Lane 1 transition is frictionless, not just that Lane 1 works in isolation |
| **Metrics** | This is the mechanism by which Epic D is supposed to feed Persona 1's funnel — currently unmeasured |

---

## Lane 3: The Posting Manager (Agency HR)

**Persona:** HR executive/officer at a pilot agency, owns posting administration, recurring cadence. **Goal:** Run the full posting-to-hire cycle inside one system.

### Phase 1: Log In

**Duration:** Should be seconds — currently undefined | **Goal:** Access the system as an agency admin

| Element | Details |
|---|---|
| **Touchpoints** | Agency-admin login (mechanism TBD) |
| **Actions** | Attempts to log in |
| **Thoughts** | "Which credentials do I even use here?" |
| **Emotions** | 😐 Neutral today only because this flow doesn't exist to be frustrating yet |
| **Pains** | 🔴 **Nothing downstream in this lane can be used until this resolves.** The PRD's Epic A readiness gate states plainly that agency-admin auth is undefined and "must be confirmed before the R1 story pipeline opens" |
| **Opportunities** | 💡 This is a sequencing decision, not a design one — get Pow Hwee/Fabian to commit an owner and date before treating any Epic A story as gradable |
| **Metrics** | None possible until auth model is defined |

**⚠️ Blocker at this stage:** Agency-admin auth undefined (Pow Hwee/Fabian). Gates all of Epic A. **Update 2026-07-15:** still unresolved. A direct Slack ask went to Pow Hwee and Fabian 2026-07-06 asking for an owner and target date; no confirmed response found since. The PRD (2026-07-07) still lists this as "not yet resolved."

### Phase 2: Create and Publish a Posting

**Duration:** Minutes to an hour, depending on tagging | **Goal:** Get a posting live without a manual workaround

| Element | Details |
|---|---|
| **Touchpoints** | Posting creation form (Epic A), competency-tagging step |
| **Actions** | Selects opportunity type, fills fields, tags OCC competencies, publishes |
| **Thoughts** | Today: "I have to email a spreadsheet update to another team for this." R1: "This is finally native." |
| **Emotions** | 😟 Today: workaround fatigue. 😊 R1 target: relief at a structured tool existing at all |
| **Pains** | 🔴 Today: Internal Jobs and Secondments have no native creation path — this gap was removed from MVP scope entirely. 🟡 R1 risk: manual competency tagging may not scale across every author/opportunity type — the PRD calls this "an open problem, not yet solved," and C@G-ingested jobs already show the same gap on the supply side |
| **Opportunities** | 💡 Require competency tagging before publish (already the PRD's "data front door" design principle) rather than allowing untagged postings to accumulate the way C@G jobs have |
| **Metrics** | No named R1 adoption metric yet for this persona (flagged gap in personas doc) |

### Phase 3: Review Applicants

**Duration:** Ongoing across the posting's open window | **Goal:** Assess fit using structured data, not guesswork

| Element | Details |
|---|---|
| **Touchpoints** | Applicant list view, individual applicant profile (pre-filled data + motivation statement from Epic B) |
| **Actions** | Opens applicant list, reviews competency data and motivation statements, shortlists |
| **Thoughts** | "I can actually compare these on the same fields" (if pre-fill data is populated) vs. "This one has no competency data at all" (if SSOT contract is still unresolved) |
| **Emotions** | 😊 If data is structured and complete. 😟 If gaps appear — visible, not silent |
| **Pains** | 🟡 If an applicant's profile lacks competency data (still gated on #18/#41), the manager needs that gap surfaced explicitly, not shown as a blank field with no explanation |
| **Opportunities** | 💡 Distinguish "pre-filled-and-unedited" from "pre-filled-and-adjusted" in the applicant view, since edited fields may carry different signal |
| **Metrics** | Downstream dependency: this phase's data quality is only as good as Epic B's pre-fill quality (Lane 1 Phase 2) |

### Phase 4: Move to Outcome → Drives Lane 1's Status View

**Duration:** A deliberate, irreversible action | **Goal:** Update status directly, with confidence it reaches the officer

| Element | Details |
|---|---|
| **Touchpoints** | Status-update action (Submitted → Under Review → Outcome), confirm step on terminal Outcome transition |
| **Actions** | Moves an applicant's status forward, confirms the irreversible Outcome step |
| **Thoughts** | "This is genuinely new — under the old ATS-integration plan I never had to do this myself inside OTEP." |
| **Emotions** | 😟 Uncertain — this UX "did not exist under World A" and is flagged Red risk in the PRD's own risk table |
| **Pains** | 🔴 **This entire manager-facing workflow is undesigned scope.** No mockup, no sizing, flagged Red risk. 🟡 The terminal Outcome transition is irreversible and directly triggers the officer's most emotionally sensitive screen (Lane 1 Phase 4) — a confirm-step alone may not be enough care for that weight |
| **Opportunities** | 💡 Scope the confirm-step design (Epic C, manager side) and the rejection/outcome messaging (Epic C, officer side) together, per the PRD's own note that they're "the same design surface," not two separate reviews |
| **Metrics** | This action is what starts the 24-hour latency clock for Lane 1 Phase 3 — but that latency target itself still needs Adrian's sign-off |

**⚠️ Blocker at this stage:** Manager status-update UX is undesigned, Red risk — needs its own design and sizing pass before Epic C grooming opens. **Update 2026-07-15:** still undesigned. A draft design-commission ask was written 2026-07-06 but the recipient (who owns design resourcing for Epic C) was never confirmed, so it's unclear if it was even sent. The PRD (2026-07-07) still lists this as genuinely new scope with no existing design, and the R1 research plan (2026-07-15) is now the primary vehicle for de-risking this lane's discovery, since there's no design to validate against yet.

---

## Where the Lanes Intersect

```
Lane 2 (Passive Watcher)  ──Phase 4: Decide to Act──▶  Lane 1 (Intentional Mover) Phase 1: Decide to Apply
Lane 3 (Posting Manager)  ──Phase 4: Move to Outcome──▶  Lane 1 (Intentional Mover) Phase 3-4: Wait / Outcome
```

Lane 2 is not a self-contained journey — it's an on-ramp. If Epic D is cut, that on-ramp disappears and Lane 1 only gets first-time, high-intent entrants.

Lane 3's Phase 4 action is the literal trigger for Lane 1's Phase 3-4 experience. An undesigned manager-side status UX (Lane 3) doesn't just risk Lane 3's own experience — it risks the reliability of the 24-hour latency promise Lane 1 is counting on.

---

## Summary

### Biggest Pain Points
1. 🔴 **Lane 3, Phase 1:** Agency-admin auth undefined — blocks the entire lane before it starts.
2. 🔴 **Lane 3, Phase 4:** Manager status-update UX is undesigned, Red risk — and it drives Lane 1's most sensitive moment.
3. 🔴 **Lane 1, Phase 2:** Competency SSOT contract unresolved — pre-fill quality (and the trust it's supposed to build) is not guaranteed at launch.
4. 🔴 **Lane 2, Phase 2:** Epic D is the first cut candidate under scope pressure — cutting it removes Lane 1's only funnel-widening on-ramp.

### Top Opportunities
1. 💡 Ship Epic B1 (no redirect) and B2 (pre-fill) as a pair — neither alone fixes the momentum problem.
2. 💡 Scope Lane 3's Outcome confirm-step and Lane 1's rejection/outcome messaging together as one design surface, not two reviews.
3. 💡 Get an owner and date on agency-admin auth before treating Epic A as gradable in sprint planning.
4. 💡 If Epic D survives scope cuts, treat the Lane 2 → Lane 1 handoff as a tested requirement, not an assumed side effect.

### Emotional Journey (Lane 1, the primary persona)
```
😊 Motivated → 😟 Jarred (redirect) → 😊 Relief (pre-fill, if it works) → 🔴 Anxious (status black hole) → 😊/😔 Outcome
[Decide]        [Apply - today]        [Apply - R1 target]              [Wait]                          [Outcome]
```

### Next Steps
- [ ] **Follow up on the 2026-07-06 outreach that appears to have gone unanswered** — agency-admin auth (Pow Hwee/Fabian), competency SSOT payload spec (Léo/Kingsley), and manager UX design commission (recipient unconfirmed) were all drafted and, for the first two, apparently sent, but none show a confirmed response as of 2026-07-15. Re-send or escalate before Epic A/C grooming opens.
- [ ] Push competency SSOT contract (#18/#41) to resolution between Léo and Kingsley — sourcing is done, only the endpoint payload spec remains, this gates both Lane 1 pre-fill trust and Lane 3 applicant-review data quality.
- [ ] Commission the manager status-update UX design pass (Lane 3, Red risk) and scope it jointly with the officer-facing rejection/outcome screen (Lane 1) — confirm who actually owns design resourcing for this before sending the ask again.
- [ ] Before cutting Epic D under scope pressure, name what happens to Lane 2's funnel-feeding role explicitly in the trade-off conversation, not just as a feature cut.
- [ ] Get Adrian's sign-off on the 24-hour status latency target now that it measures an in-OTEP manager action instead of an ATS event — still open per PRD Section 7.
- [ ] **Run the R1 research plan** ([2026-07-15-W29-r1-research-plan.md](../analyses/2026-07-15-W29-r1-research-plan.md)) to validate this map's hypotheses against live officers and posting managers before design locks Aug-Sep 2026. Recruit by W30, sessions W31-W32, synthesize by W33.

---

*Source: [R1 User Personas](../research-synthesis/2026-07-06-W28-r1-user-personas.md), [R1 Job Stories](../prds/2026-07-06-W28-r1-job-stories.md), [R1 PRD](../prds/2026-07-07-W28-careercompass-r1-prd.md), [R1 Research Plan](../analyses/2026-07-15-W29-r1-research-plan.md).*
*Last updated: 2026-07-15.*
