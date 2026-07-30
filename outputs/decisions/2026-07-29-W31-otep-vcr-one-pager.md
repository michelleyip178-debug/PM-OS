# OTEP Value-Cost Ratio (VCR) — One-Pager

**Date:** 2026-07-29

**Owner:** Michelle Yip

**Status:** Draft — for Q1 FY28 Value for Cost Review checkpoint (per IAA Paper Section 3b, para 37-39)

**Method:** VCR Playbook (Value-Cost Ratio formula, Allocation + Amortisation protocol, Greenfield Exception)

**Source:** OTEP IAA Paper v1.1 (18 Mar 2026), Tables 6, 7, 8, 10

---

## TL;DR

Using the VCR Playbook's own formula — value delivered per $1,000 spent, with development cost properly allocated and amortised under the Greenfield Exception — **OTEP's VCR is flat at 20.23 hours saved per $1,000 spent (Inverse VCR: $49.44 per hour of officer time saved) across FY28-FY30**, once the platform is fully live. This doesn't rise over that window, because both cost and the 183,000-hrs/year value metric hold steady in the paper's own data — a real efficiency gain would only show up once the 3-year amortisation period ends (~FY30/31), when VCR would roughly double as development cost drops off the books. Release-level VCR is only reliably computable for MVP and Release 2 (which map directly to the value metric's own sub-components); Release 1 and Releases 3-6 need separate value metrics, since the hours-saved figure doesn't cover what they do.

---

## Part 1: The Value-Cost Ratio Formula, Applied Correctly

Per the VCR Playbook: **VCR = Value ÷ (Amortised Development Cost + Annual Operating Cost)**, calculated per year, expressed as value delivered per $1,000 spent.

**Value (the North Star metric):** Per the Playbook's own convention (Spotify: listening time; Singpass: logins; ClaimCore: man-days saved), Value must be a usage/impact metric — not a dollar figure. OTEP's correct North Star is **183,000 hours of officer time saved per year** (IAA Table 7), not the $8.4M dollarized estimate derived from it. The $8.4M stays as a separate, supplementary economic interpretation — never fed into the VCR formula itself.

**Cost (Allocation + Amortisation, with the Greenfield Exception):**

1. **Allocation** — OTEP's $12,962,828 total CAPEX (Table 6) is spread across its two build years using Table 10's cashflow weighting: **$6,431,931 (FY26)** and **$6,530,897 (FY27)**.
2. **Amortisation** — each year's allocated block is spread over a 3-year useful life. **Greenfield Exception applies:** since OTEP is solving an entirely new problem space, amortisation begins only at go-live (FY28), not at project start. This means **nothing amortises in FY26 or FY27** — the combined $12.96M block amortises at **$4,320,943/year across FY28, FY29, and FY30**.
3. **Operating cost** — Table 6's steady-state OPEX ($9,453,870 for FY28-FY29) is the only figure given at this granularity; split flat since no finer breakdown exists: **$4,726,935/year**.

---

## Part 2: The VCR Calculation (FY28-FY30)

| Row | Item | FY28 | FY29 | FY30* |
|---|---|---|---|---|
| 1 | Amortised Development Cost | $4,320,943 | $4,320,943 | $4,320,943 |
| 2 | Operating Cost | $4,726,935 | $4,726,935 | $4,726,935 |
| 3 | **Total Project Cost [a]** | **$9,047,878** | **$9,047,878** | **$9,047,878** |
| 4 | Value — Hours Saved [b] | 183,000 | 183,000 | 183,000 |
| 5 | **VCR (hrs per $1,000) = [b] ÷ ([a]/1000)** | **20.23** | **20.23** | **20.23** |
| 6 | **Inverse VCR (cost per hour saved) = [a] ÷ [b]** | **$49.44** | **$49.44** | **$49.44** |

*FY30 extrapolates one year beyond the IAA paper's own FY26-FY29 window — flagged as an assumption, not sourced.

**Why it's flat, not rising:** both cost and value hold steady year-over-year in the paper's own data — there's no evidence of adoption growing past 183,000 hrs/year, or cost dropping, within this window. **A real VCR improvement would only show up once the 3-year amortisation period ends** (~FY30/31): at that point, development cost drops off entirely, Total Project Cost falls to ~$4.7M/year (OPEX only), and VCR roughly **doubles to ~38.7 hrs/$1,000** — the same value, divided by a much smaller cost base. That's the genuine "Scale/Mature" trajectory the Playbook describes; it just falls outside this paper's stated FY26-FY29 window.

---

## Part 3: Per-Release VCR — What's Traceable, What Isn't

Table 7 doesn't give one lump 183,000-hour figure — it's built from three task buckets, each traceable to specific releases via the roadmap's own feature descriptions:

| Task bucket | Hrs/year | Release that delivers it |
|---|---|---|
| Course Discovery | ~83,182 | **MVP** ("Find Relevant Courses through keyword search") |
| Opportunity Discovery | ~33,273 | **MVP** ("Unified Opportunity Hub") |
| Career Development Planning | ~66,545 | **Release 2** ("Dynamic Career Profiling," "Competency Gap Detection Engine") |

- **MVP unlocks ~116,455 hrs/year (63.6% of total value)** — Course + Opportunity Discovery combined, matching MVP's own stated proposition: *"one place to understand competencies and discover Learning and Development opportunities."*
- **Release 2 unlocks the remaining ~66,545 hrs/year (36.4%)**, bringing cumulative value to the full 183,000 hrs once R2 ships.
- **Release 1 and Releases 3-6 don't unlock a new hours-saved bucket at all.** Their value lives in other tracked KPIs instead (OP2's applications target for R1; OP3's agency-analytics adoption for R4) — not a gap in their value, but a gap in this specific North Star metric's coverage of them.

**The hard limit on all of this:** cost is only ever given by the IAA paper at the **whole-build-phase level** ($12.96M for FY26-27 combined) — never split by release. So even where value is traceable (MVP, R2), a true release-level VCR with a real dollar denominator isn't computable from this paper alone. It would need internal project cost tracking by release.

### Release 1 — VCR: 0.27 applications per $1,000 (illustrative)

Since Release 1 falls outside the hours-saved metric's coverage, its VCR uses an illustrative model built on two flagged placeholder assumptions (duration-proportional CAPEX split: R1 = 3/24 months = 12.5% of total CAPEX; even 1/6 share of OP2's 1,850-application target):

| Item | Release 1 (illustrative) |
|---|---|
| Total illustrative cost/year | $1,130,985 |
| Value: applications/year (placeholder) | ~308 |
| **Illustrative VCR** | **0.27 applications per $1,000** |
| **Illustrative Inverse VCR** | **~$3,668 per application enabled** |

**Carries real caveats wherever cited** — both assumptions are placeholders, not sourced project data. Full reasoning, the rejected alternative (Option A — no number, state the gap), and Release 1's proposed leading/lagging indicator set (needed since OP2 doesn't resolve until Q4 2028 and isn't release-attributed): [`2026-07-29-W31-release1-vcr-two-options.md`](2026-07-29-W31-release1-vcr-two-options.md).

---

## Part 4: Cash vs. Economic Value — Supplementary Context (Not Part of the VCR Formula Itself)

The IAA paper's own framing splits OTEP's financial case into two lenses. These sit *alongside* the VCR calculation above, not inside it — the Playbook's VCR formula never uses dollarized value as its numerator, but this framing is still useful for the separate question of "did OTEP save PSD money," which the VCR alone doesn't answer.

| Basis | What it measures | Status at Q1 FY28 |
|---|---|---|
| **Cash value** (direct opex delta) | OTEP vs. OTG steady-state opex difference (~$0.375M/year, Table 8) | Breakeven ~8 years post-steady-state — negligible cumulative value banked by Q1 FY28 |
| **Economic value** (productivity estimate) | $8.4M/year in officer time saved (84 FTE-equivalent) — the dollarized version of the same 183,000 hrs used in the VCR above | Near-zero cumulative at Q1 FY28 — this is a post-full-rollout run-rate, and Release 6 lands the same quarter as the review |

**Why this still matters for the Q1 FY28 Review:** at that checkpoint, ~$17.0M-$18.1M of the $22.4M total lifecycle cost (76-81%) will already be spent (Table 10 cashflows), while both the cash-basis and economic-value-basis returns are still near zero — because value realization only starts once the platform is fully live, which lands at roughly the same point as the review itself. This isn't a flaw in execution; it's a structural feature of reviewing right at the seam between the build phase and the value-generating phase.

---

## Recommendation

**Present three things at the Q1 FY28 Review, not one blended number:**

1. **The VCR itself** — 20.23 hrs saved per $1,000 ($49.44/hr), using the Playbook's own formula. State clearly that it's flat by design at this stage, and name when it's expected to improve (post-amortisation, ~FY30/31).
2. **Adoption/KPI actuals** — OP1 and OP3 progress against their Q4 2027/Q1 2028 targets (Table 3), since these land at or before the review date and give real, non-projected adoption evidence.
3. **Cash vs. economic value, labeled separately** — the $0.375M/year cash saving and the $8.4M/year economic estimate, explicitly flagged as answering "did this save money" rather than the Playbook's own value-efficiency question.

**Confidence:** High that the VCR calculation itself is methodologically sound (Playbook formula applied correctly, Greenfield Exception applied correctly). Medium confidence on the exact Q1 FY28 cumulative spend figure — Table 10 gives annual cashflows, not quarterly, so the precise Q1 burn should be confirmed with Finance/CS before citing a number externally.

---

## Open Items

- [ ] Confirm actual Q1 FY28 cumulative spend from Finance/CS (vs. the full-FY28 annual cashflow used here as a proxy)
- [ ] Confirm whether Release 6 is still tracking to land at/before Q1 FY28 — affects whether "VCR still flat, not yet improving" holds by review time
- [ ] Pull actual OP1/OP3 progress numbers once available, rather than citing targets only
- [ ] Ask whether PSD's internal project accounting tracks cost by release — if so, Release 1's illustrative VCR (and MVP/R2's) could be replaced with real, non-placeholder numbers

---

*Source data: OTEP IAA Paper v1.1, Tables 6, 7, 8, 10, and Section 3b paras 32-39. VCR Playbook (shared 2026-07-29) for the Value-Cost Ratio formula, Allocation/Amortisation protocol, and Greenfield Exception. Full derivation: [`2026-07-29-W31-vcr-comprehensive-study-note.md`](../analyses/2026-07-29-W31-vcr-comprehensive-study-note.md).*
