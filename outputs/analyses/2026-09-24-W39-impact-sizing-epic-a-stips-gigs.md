---
date: 2026-09-24
week: 2026-W39
type: impact-sizing
topic: R1 Epic A — STIPs & Gigs native apply
status: draft — one real input (120k WOG officer count), rest are stated assumptions pending validation
---

# Impact Sizing: R1 Epic A — STIPs & Gigs Native Apply

**What's being sized:** native in-app apply for STIPs & Gigs (pre-filled form, poster review table, Offer/Reject) — replacing the current pattern of officers leaving CareerCompass to apply via external channels (email, FormSG) once they've found a posting.

**Source:** [Epic A One-Pager](../prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md), [R1 Risk Register](2026-09-16-W38-r1-risk-register.md).

**Honesty check up front:** this workspace has no `context-library/metrics/` history and no filled `business-info-template.md`, so there's no measured baseline for this feature — everything below the 120k denominator is either carried from the one-pager's own stated (unvalidated) hypotheses or a labeled assumption. Treat the dollar/count outputs as structure to stress-test, not numbers to quote upward without the de-risking actions in Step 3 happening first.

---

## Step 1: Usage Funnel

| Stage | Officers | Drop-off | Reason |
|---|---|---|---|
| WOG officer population | 120,000 | — | Confirmed population, WOG-wide (R-14, resolved). Real number, provided directly. |
| See a STIP/Gig listing (monthly) | ~24,000 (20%) | 80% | **Assumption, no confidence backing.** No current discovery-usage data exists for STIPs & Gigs inside CareerCompass (context-library has no metrics history). 20% monthly reach is a placeholder representing "officers who are even opportunity-curious in a given month" — needs real analytics the moment any STIPs & Gigs discovery data exists, even pre-R1. |
| Eligible to apply (no gating today) | ~24,000 (100% of above) | 0% | STIPs & Gigs has no HR gate, no agency ringfencing beyond WOG membership (R-27) — every officer who sees a listing is eligible to apply. Only funnel stage with a *structural* reason for its rate, not a behavioral guess. |
| Engage (opens Apply) | ~7,200 (30%) | 70% | **Assumption.** No click-to-apply-intent data exists. 30% is a rough industry-shape placeholder for "browsed and found something worth acting on," not measured. |
| Complete (submits application) | ~2,880–5,760 (40–80% of engaged) | 20–60% | **This range is grounded in the one-pager's own stated hypothesis:** ~15–20% baseline completion → ≥40% via pre-fill (Section 4.2, Hypothesis 1). Applied here as a range against the "engaged" stage, not the full population, since the one-pager's original % was against a different, smaller denominator (pilot-scope). **Low confidence — flagged as not yet revalidated against WOG-wide (see one-pager Section 4.2 note).** |

**What this funnel is actually useful for right now:** identifying which stages are guesses (top three) versus which are structural facts (eligibility) versus which are at least a stated, if unvalidated, PM hypothesis (completion rate). It is not yet a defensible forecast.

---

## Step 2: Impact Estimates

### Engagement Impact

| Metric | Current (estimated) | Expected w/ native apply | Confidence |
|---|---|---|---|
| Apply completion rate | ~15–20% (one-pager estimate, pre-WOG-wide) | ≥40% | **Low** — stated hypothesis, not measured; explicitly flagged in the one-pager as unrevalidated for WOG-wide population |
| Outcome turnaround (poster decision time) | Unmeasured (today: email/spreadsheet-driven) | ≤14 days | **Low** — no current-state turnaround data exists to compare against |
| Status latency (poster action → officer sees it) | Not applicable today (no in-app status) | ≤24 hours | **Medium** — this is a build target, not a behavior prediction; achievable is a smaller claim than "officers will act faster" |

### Top-Line Impact (Applications Completed)

Using the funnel above:

- **Low case:** 24,000 (see) × 30% (engage) × 40% (complete, low end of hypothesis range) = **~2,880 applications/month**
- **Expected case:** 24,000 × 30% × 60% (midpoint) = **~4,320 applications/month**
- **High case:** 24,000 × 30% × 80% (high end) = **~5,760 applications/month**

*Math shown, not hidden: 24,000 × 0.30 × [0.40 / 0.60 / 0.80].*

**Confidence: Low across all three cases.** Two of the three multipliers (the 20% "see" rate and the 30% "engage" rate) are unvalidated placeholders, not measured behavior. The completion-rate range is a stated PM hypothesis carried from the one-pager, itself flagged there as unrevalidated. This is best read as "if our two biggest guesses are roughly right, here's the shape," not a number to put in front of Adrian as a forecast.

### Bottom-Line Impact

**Not sized.** STIPs & Gigs has no stated revenue or cost-avoidance model in any source document — this is an internal-efficiency/mobility feature for a government platform, not a monetized product. If there's a cost-avoidance angle worth quantifying (e.g., officer-hours saved versus the current email/spreadsheet process, or HR-hours *not* spent since R-27 confirms zero HR role), that's a distinct sizing exercise this document doesn't attempt — flag if you want that run separately, since it would need a real estimate of hours-per-posting today, which doesn't exist yet either.

---

## Step 3: Assumptions & De-Risking

| Assumption | Confidence | Risk if Wrong | De-Risking Action |
|---|---|---|---|
| 20% of 120k officers see a STIP/Gig listing monthly | **Low** | Every downstream number in this document scales off this — if real reach is 5% instead of 20%, applications drop 4x | Pull actual page-view/listing-impression data from the current CareerCompass discovery flow (it already exists and is unblocked per the one-pager) — this is the single highest-leverage number to get real, and it's gettable *before* R1 ships, not after |
| 30% of viewers engage (open Apply) | **Low** | Same multiplicative risk as above | If click-to-apply-intent isn't tracked today, instrument it now on the existing discovery flow so a real rate exists before the native-apply launch, not estimated after |
| 15–20% → ≥40% completion rate via pre-fill | **Low** | This is the entire product bet — if pre-fill doesn't move completion, the epic's core hypothesis fails | This is explicitly what the guardrail metric in the one-pager (Section 6.3: pause if <25% at 4-week mark) is designed to catch — the de-risking action already exists, it's the pilot launch itself with a defined kill criterion, which is the right structure. No separate action needed beyond executing that guardrail as written |
| 120k is the addressable denominator, not a smaller near-term subset | **Medium** | If launch is actually phased (pilot agencies first, WOG-wide later), month-1 numbers will look like a shortfall against this document's targets when they're actually on-plan for a smaller rollout | Confirm with Adrian/BOs whether Epic A launches WOG-wide on day one or ramps in phases — this materially changes what "success in month 1" should look like, and isn't yet answered anywhere in the source docs |
| Zero cost/revenue model exists for this feature | **High** (confidence that this is true, not an assumption to de-risk) | N/A — this isn't a risk, it's a fact about the feature type | None needed; correctly scoped as engagement/mobility-metric-driven, not revenue-driven |

---

## Step 4: Takeaways

**For Planning:** Epic A is still the right epic to start first — nothing here changes that call, since it was made on risk-clearance grounds (R-07/R-24/R-15 block the others), not on impact size. This document doesn't argue for or against sequencing; it argues that the *size* of the win is currently a guess, not a number.

**For Experiment Execution:** don't set a statistical-significance sample-size target off this document's application-count estimates yet — the two unvalidated top-funnel rates (20% see, 30% engage) make the count range too wide to be useful for that purpose. The guardrail metric already defined (pause if completion <25% at 4 weeks) is a reasonable interim substitute — it's a threshold check, not a powered experiment, but it's honest about what's actually known right now.

**For Feature Design:** the biggest lever nobody's pulling yet is instrumentation on the *current* discovery flow. STIPs & Gigs discovery already exists and is unblocked — every number in this document that matters (see-rate, engage-rate) could be real data within weeks if someone tracks it now, before native apply ships. That's cheaper and faster than trying to model it from nothing, and it would turn this whole document from Low-confidence to Medium/High-confidence without waiting for R1 to launch.

---

## Recommendation

**Proceed with Epic A as planned — but treat this document as a placeholder to replace, not a forecast to defend.** The single highest-value action coming out of this exercise isn't a go/no-go call (nothing here changes Epic A's priority), it's: **start tracking STIPs & Gigs discovery engagement now**, on the existing pre-R1 flow, so the funnel's two weakest links (see-rate, engage-rate) become measured facts instead of placeholders before the completion-rate hypothesis gets tested at launch.

**Rationale:** this feature was correctly sequenced first on risk-clearance grounds, and that reasoning doesn't depend on precise impact numbers. But the underlying "why does this matter" case — officers completing development actions, the platform's North Star — currently rests on hypotheses with no measured backing. Fixing that costs almost nothing (instrument an existing flow) and directly strengthens the next version of this document, the GTM conversation, and the eventual case to leadership.

---

*Related: [Epic A One-Pager](../prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md), [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md), [R1 Risk Register](2026-09-16-W38-r1-risk-register.md) (R-12, R-14, R-27)*
