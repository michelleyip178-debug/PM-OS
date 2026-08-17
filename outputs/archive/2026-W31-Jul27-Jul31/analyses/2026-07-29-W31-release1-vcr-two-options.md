# Release 1 VCR — Decision: Option B (Illustrative VCR)

**Decision:** Using **Option B** for Release 1's VCR in the one-pager — an illustrative number built on two clearly-flagged assumptions, rather than leaving the VCR blank. Both options are kept below so Adrian can see exactly what's sourced from the IAA paper vs. assumed, and can challenge either assumption directly.

**Context:** Release 1 ("Seamless Application for Opportunities") doesn't fit the hours-saved VCR model used for MVP and Release 2, because it automates the *application* step, not the *discovery/planning* steps Table 7 measures.

---

## Option A: No VCR number — state the gap explicitly (not used, kept for reference)

**What it shows:** Release 1 has a real, stated value proposition in the IAA paper, but neither its cost nor its value can be isolated with real numbers from that document alone.

| | Release 1 |
|---|---|
| **What it ships** | Smart Application Assistant, Streamlined Applications (STIPs/GIGs), Personalised Gap Radar, Intelligence Dashboard |
| **Stated value (IAA paper, Section 3b)** | "Click-apply-track... Application becomes frictionless and informed" |
| **Closest tracked KPI** | OP2 — 1,850 officers applying via OTEP, target **Q4 2028** (whole-platform target, not release-attributed) |
| **Cost** | Not available — IAA gives CAPEX only at whole-build-phase level ($12.96M for FY26-27 combined), never split by release |
| **VCR** | **Cannot be computed** — no release-specific cost, and no time-saved value metric applies to what R1 does |

**Why this option is defensible:** it doesn't manufacture false precision. Table 7 only measures pre-application tasks (browsing, planning); Release 1 is squarely post-decision (the act of applying). There is no "before" baseline in the paper for how long applications currently take via the FormSG workaround, so there's nothing to compare Release 1 against even qualitatively.

**Recommended framing for Adrian:** *"Release 1's value is real and stated, but not separable into a VCR number without data the IAA paper doesn't contain. Recommend tracking OP2 (applications submitted) directly as R1's success metric instead of forcing a VCR fit."*

---

## Option B: Illustrative VCR — using clearly-flagged placeholder assumptions ✅ SELECTED FOR ONE-PAGER

**What it shows:** what a Release 1 VCR *would* look like, if you're willing to accept two significant assumptions, both clearly labeled as placeholders rather than sourced fact.

**Assumption 1 (cost):** Split the $12.96M total CAPEX proportionally by release *duration* — MVP is 6 months, each of Releases 1-6 is 3 months, so total build = 24 months, and Release 1's share = 3/24 = 12.5%.

**Assumption 2 (value):** Split the 1,850-application target evenly across Releases 1-6 (the six releases that plausibly touch the application/development-plan flow), giving Release 1 a placeholder share of ~308 applications/year.

| Item | Release 1 (illustrative) |
|---|---|
| CAPEX share (duration-proportional) | $1,620,354 (12.5% of $12.96M) |
| Amortised dev cost/year (3-yr life, Greenfield Exception) | $540,118 |
| OPEX share/year (same proportional logic) | $590,867 |
| **Total illustrative cost/year** | **$1,130,985** |
| Value: applications/year (1/6 of 1,850 target, placeholder) | ~308 |
| **Illustrative VCR (applications per $1,000)** | **0.27** |
| **Illustrative Inverse VCR (cost per application enabled)** | **~$3,668** |

**Why this option is risky to present as-is:** both assumptions are arbitrary, not derived from actual project data:
- Real releases are rarely uniform-cost-per-month — MVP typically absorbs disproportionate setup/infrastructure cost, so a duration-based split likely *overstates* what R1-R6 each cost.
- The 1,850-application target is a **whole-platform, Q4-2028** number — assuming Release 1 alone contributes 1/6 of it ignores that later releases (agency tools, AI matchmaking) likely drive *more* of the eventual application volume than R1 does on its own, since they make applying more attractive, not just easier.

**Recommended framing for Adrian, if this option is used:** *"This is a placeholder model to illustrate what a Release 1 VCR could look like once real release-level cost and adoption data exist — not a number to cite externally or use for go/no-go decisions yet."*

---

## For the One-Pager: Release 1's VCR

**Release 1 VCR: 0.27 applications per $1,000 spent (Inverse VCR: ~$3,668 per application enabled)** — illustrative, per Option B above.

**Caveat to carry alongside this number wherever it's used:** this rests on two flagged assumptions — a duration-proportional cost split (12.5% of total CAPEX) and an even 1/6 share of the whole-platform 1,850-application target. Neither is sourced from actual release-level project data. Flag this explicitly to Adrian as a placeholder pending real cost/adoption tracking by release, not a number to cite externally or use for go/no-go decisions.

**One clarifying question worth asking Adrian directly:** does PSD's internal project accounting already track cost by release (sprint costs, team-days per release)? If yes, this illustrative number can be replaced with a real one at the next Post-Release Review — worth confirming before this placeholder ages into being treated as fact.

---

## Release 1 Metrics Plan: Leading & Lagging Indicators

Regardless of which VCR option is used, Release 1 needs its own metrics plan — since neither Table 7's hours-saved model nor the whole-platform OP2 target (Q4 2028) gives near-term signal on whether R1 itself is working. Below, **sourced** means it's a metric or target explicitly stated in the IAA paper; **proposed** means it's derived from R1's stated features, not sourced from the paper.

### Lagging indicators (the real outcome — slow, but unambiguous)

| Metric | Source | Notes |
|---|---|---|
| Officers who apply via OTEP | **Sourced** — OP2, Table in Section 2b | Target: 1,850 by Q4 2028. Whole-platform, not release-attributed — R1 is the first release that makes this possible at all, but later releases (agency tools, AI matchmaking) likely also drive volume |
| Applications submitted per officer who started one (completion rate, full-cycle) | Proposed | The lagging counterpart to the abandonment-rate leading indicator below |
| Repeat application rate (officers who apply more than once via OTEP) | Proposed | Signal for whether officers trust the new flow enough to return, vs. reverting to FormSG workarounds for a second application |
| User satisfaction score for the application experience | Proposed | The paper defines a comparable 3.5/5 threshold for a related KR under OP1 (competency profile satisfaction) but never defines one for the application flow specifically — this fills that gap using the paper's own convention |

### Leading indicators (early signal — fast, but a proxy)

| Metric | Maps to which R1 feature | Notes |
|---|---|---|
| % of applications using auto-populated fields vs. manually re-entered | Smart Application Assistant | Tests whether the assistant is trusted/used, not just shipped |
| Time-to-complete an application (start to submit) | Streamlined Applications | Most direct proxy for "frictionless" — R1's own stated value word |
| Application abandonment rate (started but not submitted) | Streamlined Applications | Rising abandonment = the flow isn't actually reducing drop-off, even if it looks streamlined on paper |
| % of officers who set a target role in Gap Radar | Personalised Gap Radar | Adoption of the feature meant to make applications "informed," per the roadmap's own phrasing |
| Status-tracking page views per application | Intelligence Dashboard | Tests whether officers trust the new visibility enough to check it, vs. falling back to asking HR directly — a sign the old anxiety/workaround behavior hasn't gone away |

**All five leading indicators are proposed, not sourced** — the IAA paper gives Release 1 a lagging target (OP2) but no leading indicator at all. This is the same structural gap flagged in the VCR options above: OTEP's own paper is thin on Release-1-specific instrumentation, and someone (likely the product team, not Finance/CS) needs to define this leading-indicator layer before Release 1 ships, so there's early signal before waiting years for OP2's Q4 2028 target to resolve.

**Recommended framing for Adrian:** *"OP2 tells us if Release 1 worked, eventually — but not until 2028, and not attributably to R1 alone. These five leading indicators are what I'd propose instrumenting from day one of R1's launch, so we have real signal within weeks rather than years."*
