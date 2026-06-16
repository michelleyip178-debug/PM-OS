---
date: 2026-06-16
type: Metrics Framework
product: CareerCompass / OTEP Pathfinder
period: CY2026 (MVP)
status: Draft — no historical baselines yet; validate correlations at 6-week post-launch mark
---

# CareerCompass Metrics Framework — CY2026

---

## North Star

**By Dec 2028, 50% of onboarded officers complete at least one development action (course completion or opportunity placement) originating from CareerCompass, tracked on a rolling 12-month basis.**

Dec 2026 MVP target: establish pilot cohort baseline. Browsing and applying alone does not count — action must be completed and attributable to CareerCompass.

---

## Metric Hierarchy

| Tier | Metric | Baseline | CY2026 Target | Cadence | Owner |
|------|--------|----------|---------------|---------|-------|
| **Lagging (Quarterly)** | Development action completion rate (course or opportunity placement, attributable to CareerCompass) | 0% — no baseline | Establish pilot baseline | Quarterly | Adrian (PO) |
| **Lagging (Quarterly)** | Officer satisfaction score (UAT/pilot) | No baseline | ≥ 3.5/5 | End of pilot | Michelle + Imelda |
| **Lagging (Quarterly)** | Agency onboarding count | 0 | 6 pilot agencies live | Dec 2026 | Jace / Michelle |
| **Leading (Monthly)** | Opportunity application rate — officers who click Apply on at least one listing | 0% | Establish baseline (target: 20% of onboarded officers by Mar 2027 R1) | Monthly | Michelle |
| **Leading (Monthly)** | Competency profile completion rate — officers with updated profiles | 0% (OTG benchmark: 23% active profile interaction) | ≥ 40% of onboarded officers | Monthly | Imelda / Michelle |
| **Leading (Weekly)** | Valid opportunity catalogue size — listings passing ingestion validation | 160 records (25% pass rate, Jun 2026) | ≥ 350 records | Weekly | Michelle |
| **Leading (Weekly)** | Click-through rate — officers who click into at least one listing per session | No baseline | Establish baseline | Weekly | Michelle |
| **Input (Daily)** | OTG upload success rate — Excel uploads passing validation without errors | ~25% (current strict rules) | ≥ 80% post rule-change | Per upload | Léo / Michelle |
| **Input (Daily)** | Ingestion error volume — records rejected per upload cycle | High (strict validation) | Decreasing trend | Per upload | Léo |
| **Input (Daily)** | Sprint story first-time QA pass rate | No baseline | ≥ 80% | Per sprint | Michelle |
| **Input (Daily)** | BO sign-off cadence — sprints closed with BO UAT sign-off | Ad-hoc | 100% | Per sprint | Michelle |

---

## How the Hierarchy Connects

```
NORTH STAR
Development action completion rate (Dec 2028: 50%)
        ↑
LAGGING (Quarterly)
Officer satisfaction ≥ 3.5/5  |  6 pilot agencies live
        ↑
LEADING (Monthly)
Application rate (≥20% by R1)  |  Profile completion (≥40%)
        ↑
LEADING (Weekly)
Valid catalogue size (≥350)  |  Click-through rate
        ↑
INPUT (Daily/Per Sprint)
Upload success rate  |  Ingestion error volume  |  QA pass rate  |  BO sign-off
```

**The causal chain:**

1. A healthy catalogue (≥350 valid listings) gives officers something worth clicking.
2. Click-through rate confirms officers are finding listings relevant.
3. Application rate confirms they are acting on listings — the direct precursor to a completed development action.
4. Satisfaction score validates the end-to-end experience, not just the funnel.
5. Profile completion is a parallel signal: officers who update their competencies are more likely to complete development actions.

---

## Correlation Hypotheses (validate at 6-week post-launch mark)

| Hypothesis | Test Method | Data Needed | Timeline |
|-----------|------------|-------------|----------|
| Catalogue size (≥350 records) predicts click-through rate | Before/after rule change: compare CTR at 160 vs 350+ valid listings | Per-session event data from PostHog | 2 weeks post rule-change |
| Click-through rate predicts application rate | Cohort analysis: officers who click ≥1 listing vs those who don't — compare application rate | PostHog click_into_listing + click_apply events | 4 weeks post-launch |
| Application rate predicts development action completion | Time-series: officers who apply → track whether they complete a course or placement | PostHog apply event + downstream completion data | 3 months post-launch (R1 milestone) |
| Profile completion predicts application rate | Cohort: officers with updated profiles vs not — compare application rate | Competency profile update events + apply events | 6 weeks post-launch |

**Data quality caveat:** Pilot cohort is 6 agencies (~5,400 officers). Correlations will be directional only until 4+ weeks of post-launch data accumulates. Do not treat early signals as validated findings — flag confidence level in every report.

---

## Alert Thresholds

| Metric | Green | Yellow | Red | Action on Red |
|--------|-------|--------|-----|---------------|
| Valid catalogue size | ≥ 350 records | 250–349 records | < 250 records | Michelle: trigger agency remediation outreach (ESG holds 178 blocked gigs); review whether rule relaxation is needed in S5/6 |
| OTG upload success rate | ≥ 80% | 60–79% | < 60% | Michelle + Léo: audit rejection log; identify top 3 failing field types; decide whether to relax validation rules or escalate to agency |
| Application rate (post-launch) | ≥ 15% of onboarded officers | 8–14% | < 8% | Michelle + Adrian: run session recording review in PostHog; check if apply CTA is visible and functional; flag for BO session |
| Officer satisfaction score | ≥ 3.5/5 | 3.0–3.4/5 | < 3.0/5 | Michelle + Imelda: run qualitative debrief with 3–5 pilot officers; identify top friction point; prioritise in next sprint |
| Sprint QA first-time pass rate | ≥ 80% | 65–79% | < 65% | Michelle: AC review — are stories being written with testable outcomes? Run DoR audit before next planning |
| BO sign-off cadence | 100% of sprints | — | Any sprint closed without BO UAT sign-off | Michelle: flag to Jace; do not mark sprint Done until BO has signed off |

---

## Dashboard Design

**Section 1 — North Star (top)**
Development action completion rate — large number, quarterly trend. Dec 2026: "Baseline TBC." Note: this metric will be zero until officers complete a full development cycle; pilot data establishes the denominator.

**Section 2 — Leading Indicators (middle)**
Four weekly sparkline charts with alert thresholds marked:
- Valid catalogue size (target line at 350)
- Click-through rate per session (baseline to be set at launch)
- Application rate — % of onboarded officers who applied (target line at 20% for R1)
- Competency profile completion rate (target line at 40%)

**Section 3 — Input Metrics (bottom)**
Table, updated per upload cycle and per sprint:
- OTG upload success rate (green/yellow/red)
- Ingestion error volume (trend line — should decrease over time)
- Sprint QA first-time pass rate
- BO sign-off cadence (binary: yes/no per sprint)

---

## PostHog Event Keys (from PRD)

These are the instrumented events that feed the leading and input metrics above. Confirm with Léo that all are firing before pilot launch.

| Metric | PostHog Event Key |
|--------|------------------|
| Click-through rate | `view_opportunity_detail` |
| Apply click (FormSG redirect) | `click_apply_formsg` |
| Apply click (OTG redirect) | `click_apply_otg` |
| Filter used | `apply_filter` |
| Search used | `search_opportunities` |
| Competency profile updated | `update_competency_profile` |

**Gap:** Development action completion (the North Star) has no PostHog event — it requires a downstream data source (agency HR system or OTG confirmation). Flag to Adrian before R1 scoping.

---

## What's Not Tracked Yet (and Should Be)

| Missing Metric | Why It Matters | When to Add |
|---------------|----------------|-------------|
| Time-to-first-action (officer opens app → first click) | Activation speed predicts engagement depth | R1 |
| Return visit rate (officers who come back within 7 days) | Predicts sustained usage vs one-time visit | R1 |
| Agency posting completion rate (once native posting is live) | Predicts supply-side health | R1/R2 |
| Competency gap view rate | Leads directly to North Star action | R2 |

---

## Metric Retirement Signals

| Metric | Retire When |
|--------|-------------|
| OTG upload success rate | OTG automated sync is live (replaces manual upload entirely) — currently deferred post-MVP |
| Sprint QA first-time pass rate | Team reaches sustained ≥ 90% for 3+ consecutive sprints — shift to exception-only monitoring |
| Valid catalogue size | All agencies migrated to native posting (R4) — catalogue health tracked differently |

---

## Open Questions

1. **Development action completion tracking:** How does CareerCompass know an officer completed a course or placement? Is there a confirmation event from the agency HR system, or is this a manual survey? Needs a data design decision before R1.
2. **PostHog procurement:** `click_apply_formsg` tracking param requires PostHog to be live. Current status: procurement in progress. Confirm timeline with Pow Hwee before pilot launch.
3. **Satisfaction score method:** Is the ≥ 3.5/5 satisfaction target measured via an in-app survey, a post-UAT form, or agency feedback? Define the instrument before pilot launch.
4. **Catalogue size denominator:** "350 records" is absolute count. Should this be expressed as % of total available OTG gigs to account for OTG data volume changes? Revisit after first full agency remediation cycle.

---

*Framework built against CareerCompass CY2026 KRs (2026-06-16). No historical baselines exist — all correlation hypotheses are directional until validated at 6-week post-launch mark. Review and update at R1 milestone (Mar 2027).*
