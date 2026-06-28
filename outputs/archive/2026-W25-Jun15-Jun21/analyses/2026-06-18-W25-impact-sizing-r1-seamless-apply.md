# Impact Sizing: R1 — Seamless Apply

**Date:** 2026-06-18

**Feature:** R1 "Seamless Application" release — in-app apply, pre-filled applications, status tracking, Saved Jobs

**Analyst:** Michelle Yip

**Decision context:** Adrian jamming session (W26) — scoping R1 build vs phase vs defer

---

## TL;DR

R1's job is to convert MVP discovery into completed applications — closing the three failure points (redirect, blank form, status black hole) that would otherwise stall the North Star at baseline. The addressable population at R1 launch is ~5,400 officers (6 pilot agencies). To hit the Mar '27 target of 10% completing a development action, **540 officers must submit at least one application via CareerCompass** within ~3 months of launch.

That's not a stretch — it's 10%. The question is whether R1's build complexity (especially the ATS seam) is deliverable in time to make it possible.

---

## Usage Funnel

| Stage | Est. Users | Drop-off | Assumption |
|-------|-----------|----------|------------|
| Officers onboarded to CareerCompass at R1 launch | ~5,400 | — | 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), staggered rollout per business-info |
| Officers who log in within 6 months | ~2,160 | ~60% | MVP OKR targets 20% active login rate over 90/180 days — using 40% as R1 activation estimate (platform is newer, marketing effort higher) |
| Officers who view at least one opportunity | ~1,620 | ~25% | MVP establishes browse baseline; assumption: 75% of active users explore listings |
| Officers who reach "Apply" CTA | ~810 | ~50% | Half of browsers have a relevant opportunity (relevance filter and pilot cohort are early-career focused) |
| Officers who complete an application | **~405–540** | ~33–50% | R1 removes the redirect + blank form. Without R1, this step loses most users to FormSG friction. With pre-fill + in-app apply, targeting 50–67% completion of those who start. |

**Expected range:** 405–540 completed applications from the pilot cohort.

**North Star check:** Target is 10% of 5,400 = 540. The funnel puts us at the bottom of that range under expected conditions, at the top under good conditions. Margin is thin — seam quality (status tracking) is what drives repeat applications that build the number over time.

---

## Impact Estimates

### Engagement Impact

| Metric | Current (MVP baseline) | R1 target | Confidence |
|--------|----------------------|-----------|------------|
| Apply completion rate (start → submit) | ~15–20% (FormSG redirect, estimated) | ~50–67% | Medium — no live FormSG data yet; based on form completion benchmarks |
| Officers completing ≥1 development action | 0% (baseline TBD at MVP) | **10% of pilot cohort** | Medium — OKR target, not a stretch goal |
| Application status latency | Unknown / unbounded | ≤24 hours of hiring-manager action | Medium — depends on ATS seam (World A webhook vs World B build) |
| Saved Jobs usage | 0 (not in MVP) | 20–30% of active users save ≥1 opportunity | Low — no comparable data; saves drive repeat visits and late-funnel completion |

### Top-Line Impact (strategic, not revenue)

This is an internal government platform with no direct revenue model. "Top-line" = OKR attainment:

| OKR | Current state | R1 contribution |
|-----|--------------|----------------|
| OKR 2: 1,850 officers applied via OTEP by Q4 2028 | 0 (MVP establishes baseline) | ~405–540 applications in Q1'27 pilot = ~22–29% of lifetime OKR target in first 3 months post-R1 |
| North Star: 10% complete a dev action by Mar '27 | 0% | R1 is the only release that can hit this milestone — without in-app apply, officers can't complete an action within the platform |
| Application status latency ≤24hr by Q1'27 | N/A | Requires ATS integration (the seam) — if the seam slips, this OKR misses R1 |

### Bottom-Line Impact

R1's "bottom line" is whether OTEP retains pilot agency trust past MVP.

| Risk mitigated | Value |
|----------------|-------|
| Officer drops off at FormSG redirect | Estimated 50–65% apply completion improvement (from ~17% FormSG baseline to ~60% in-app) |
| Officer gets no status update → disengages | Without status tracking, first-time applicants won't return. R1 is the retention mechanism for the apply funnel. |
| Agency HR has no hiring visibility | Without the manager dashboard (seam), agencies can't use CareerCompass for hiring decisions — limits agency buy-in for R2+ rollout |

---

## Driver Tree

```
R1 "Seamless Apply"
        ↓
In-app apply + pre-fill (removes redirect + blank form)
        ↓
Apply completion rate: ~17% → ~60%
        ↓
~405–540 completed applications in 3 months (pilot cohort)
        ↓
10% North Star target achieved at Mar '27 milestone
        ↓
OKR 2 velocity: 22–29% of lifetime target set in Q1'27
        ↓
Platform credibility for R2 agency expansion (50 agencies by Jun '27)

Parallel branch (the seam):
ATS integration + status tracking
        ↓
≤24hr status latency OKR (Q1'27)
        ↓
Officer return rate + repeat applications
        ↓
Sustained engagement → later North Star milestones (30% by Dec '27)
```

---

## Confidence Assessment

| Assumption | Confidence | Risk if wrong | De-risking action |
|------------|------------|---------------|-------------------|
| 6 pilot agencies = ~5,400 officers at R1 launch | High | Fewer agencies → smaller N; 540 target harder to hit | Confirmed in business-info (2026-06-02); monitor staggered onboarding pace |
| ~40% login activation rate in first 6 months | Medium | Too high — MVP is less proven than assumed; actual rate could be 20–25% | Check MVP login data 4–6 weeks post-launch; use actual for R1 plan |
| In-app apply lifts completion from ~17% to ~60% | Medium | Overestimate — officers may still drop off if pre-fill data quality is low or profiling is incomplete | Run Exp 3 (apply flow prototype test) before R1 feature-lock; test with 5–8 pilot officers |
| ATS seam delivers status in ≤24hr | Low | **Highest risk** — ATS identity (C1) is still unresolved; World A requires webhook + vendor agreement; World B requires OTEP to build the state machine | Force C1 decision before R1 grooming; include seam spike in Sprint 4/5 (Pow Hwee); set explicit go/no-go gate on webhook POC |
| One FE engineer (Thomas) can deliver native apply + seam in ~3 months | Low | **Central capacity risk** — two FE-heavy builds in 3 months with one FE; design dependency adds risk | Pick Option A (add FE) or Option B (phase creation to R2) with Adrian — the capacity brief is ready (2026-06-02-r1-capacity-reality-check.md) |
| Native creation stays in R1 | Low | If it stays: three FE-heavy builds, one dev, 3 months = likely slip. If phased to R2: delivery risk drops substantially | Recommend Option B (creation discovery in R1, build R2) to Adrian at jamming session |

---

## Sensitivity Analysis

| Scenario | Assumptions | Completed applications (Q1'27) | North Star at Mar '27 |
|----------|-------------|-------------------------------|----------------------|
| **Best case** | 50% login activation, 70% completion rate, seam works | ~750 | ~14% |
| **Expected case** | 40% login, 60% completion rate, seam works | ~540 | ~10% |
| **Conservative case** | 30% login, 50% completion rate, seam delivers | ~365 | ~7% |
| **Seam slips** | Expected activation, but status tracking not live at R1 | ~365 first-timers, low repeat rate | ~5–7% — misses 10% target |
| **Creation overloads team** | Option C: all 3 builds, one FE, seam under-built | ~200–300 | ~4–6% — significant OKR miss |

**Key insight from sensitivity:** The North Star target is achievable under expected conditions — but the seam is the swing variable. Slipping the seam doesn't hurt apply volume; it kills repeat applications and agency trust, which are the compound engine for hitting later milestones (30% by Dec '27, 50% by Dec '28).

---

## Recommendation

**Proceed with R1 — but gate on two decisions before grooming.**

R1 is the only path to the Mar '27 milestone. The value is clear and the funnel is achievable. But two unresolved blockers make the sizing range wide:

1. **Force the ATS decision (C1).** Every week it stays open compresses the build window and keeps the seam risk in the "Low confidence" column. The seam carries the 24-hr latency OKR — it's not optional.

2. **Decide creation scope now.** Recommend **Option B** (creation discovery in R1, build in R2): it protects apply + seam (the OKR-bearing work) without reversing the product ambition. If creation is non-negotiable for R1, go Option A (add FE) — but not Option C.

**For the Adrian jamming session:** present the funnel (405–540 applications, 10% North Star) as the anchor, then use the sensitivity table to show what slips when the seam or creation scope isn't resolved. The numbers make the decision visible.

---

## Links

- [R1 candidate list](../../PM-skills-ALL-1/01-discovery/r1-discovery/r1-candidate-list.md) — confirmed deck scope (D1–D5) and local-file items (L1–L12)
- [R1 capacity reality-check](../../PM-skills-ALL-1/01-discovery/r1-discovery/2026-06-02-r1-capacity-reality-check.md) — Option A/B/C decision brief for Adrian
- [R1 end-to-end blueprint](../../PM-skills-ALL-1/01-discovery/r1-discovery/2026-06-02-r1-end-to-end-blueprint.md) — the three builds and the seam
- [OTEP OKRs](../../PM-skills-ALL-1/06-skills-and-decisions/otep-roadmap-okrs-2627.md) — IAA-approved targets
- [R1 rationale](../../PM-skills-ALL-1/01-discovery/r1-discovery/r1-rationale.md) — strategic anchor

---

*Pairs with `/prioritize` to sequence the R1 feature list, and `/write-prod-strategy` to frame the R1 narrative for stakeholders.*
