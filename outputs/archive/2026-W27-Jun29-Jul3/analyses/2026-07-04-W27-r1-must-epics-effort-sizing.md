---
feature: R1 Must-Have Epics — A, B, C effort sizing
date: 2026-07-04
owner: Michelle Yip
type: resourcing/effort-sizing
parent-prd: outputs/prds/2026-07-07-W28-careercompass-r1-prd.md
status: draft — pre-grooming, unvalidated with engineering
---

# R1 Must-Have Epics — Effort Sizing (A, B, C)

**What this is:** An effort/resourcing driver tree for the three non-negotiable R1 epics, built from the R1 PRD's scope statements and MVP story-point precedent (Sprint 5 stories average 1-3 points). **This is not a substitute for engineering estimation** — Pow Hwee, Thomas, and Léo haven't sized these stories yet. This exists to surface where a number is defensible now versus where the PRD itself says sizing is impossible until a design/scope gap closes, so Adrian's SteerCo resource ask (9 Jul) isn't built on false precision.

---

## Reference baseline (from live Jira, Sprint 5)

MVP stories this squad has actually shipped or is shipping:
- Typical story: 1-3 points (median ~2)
- Two devs (Thomas, Léo) carry ~13 In Progress + 14 QA stories across a 2-week sprint = roughly 13-14 points/dev/sprint at this team's demonstrated velocity
- This is the only real velocity data available — everything below is scaled against it, not invented from scratch

---

## Driver Tree: Epic → Story Clusters → Effort

```
R1 Must-Have Scope (A + B + C)
    │
    ├─ Epic A: Opportunity Creation
    │       ↓
    │   Story clusters (estimable now):
    │   - Creation form UI (per type) .......... ~3-5 pts × 4-5 types = 12-25 pts
    │   - Posting record schema + publish workflow ~5-8 pts
    │   - Edit/close lifecycle .................. ~3-5 pts
    │       ↓
    │   Story clusters (BLOCKED, not sizeable):
    │   - Agency-admin auth ..................... UNKNOWN — no auth path exists yet (Red risk)
    │       ↓
    │   Epic A estimable subtotal: ~20-38 pts (excl. auth)
    │   Epic A actual subtotal: UNKNOWN until auth path confirmed
    │
    ├─ Epic B: Streamlined Apply + Smart Pre-fill
    │       ↓
    │   Story clusters (estimable now):
    │   - Native in-Compass apply form (excl. C@G) ~5-8 pts
    │   - Form validation + submit flow ......... ~3-5 pts
    │       ↓
    │   Story clusters (BLOCKED, not sizeable):
    │   - Pre-fill logic (competency + work history) UNKNOWN — gated on #18/#41 SSOT contract (Léo+Kingsley, no date)
    │       ↓
    │   Epic B estimable subtotal: ~8-13 pts (excl. pre-fill)
    │   Epic B actual subtotal: UNKNOWN until SSOT contract lands — pre-fill is the epic's core value prop, not a side feature
    │
    └─ Epic C: Status Tracking
            ↓
        Story clusters (estimable now):
        - State machine (Submitted→Under Review→Outcome) . ~5-8 pts
        - Officer-facing status view/timeline .... ~3-5 pts
            ↓
        Story clusters (BLOCKED, not sizeable):
        - Native manager status-update UX ......... UNKNOWN — PRD explicitly states this needs "its own design and sizing pass," net-new scope from the World A→B revert
        - Rejection/outcome screen ................. UNKNOWN — flagged as most emotionally sensitive surface, needs dedicated design pass
            ↓
        Epic C estimable subtotal: ~8-13 pts (excl. manager UX + rejection screen)
        Epic C actual subtotal: UNKNOWN — and this is the epic most likely to blow past its estimable subtotal, since manager UX was previously ATS's job and is now entirely new build
```

---

## Rollup

| Epic | Estimable now | Blocked / unknown | % of epic actually sizeable |
|---|---|---|---|
| A — Opportunity Creation | ~20-38 pts | Agency-admin auth (undefined scope) | ~60-70% sizeable — auth path is the wildcard |
| B — Apply + Pre-fill | ~8-13 pts | Pre-fill logic (core feature, SSOT-gated) | ~40% sizeable — the *point* of the epic is blocked |
| C — Status Tracking | ~8-13 pts | Manager UX + rejection screen (both net-new, Red risk) | ~40% sizeable — same pattern as B |

**Total estimable now:** ~36-64 points

**Total actual (once blockers resolve):** Unknown — plausibly 1.5-2x the estimable subtotal, since the blocked pieces in B and C are each epic's primary value driver, not secondary polish

At this team's demonstrated velocity (~13-14 pts/dev/sprint), the estimable portion alone is **roughly 1.5-2.5 sprints of dev capacity for two people** — before accounting for anything currently blocked.

---

## What this tells Adrian (and what it doesn't)

**Defensible to say now:** "R1's Must-have floor requires at minimum 1.5-2.5 sprints of two-developer capacity, and that's the conservative slice — the harder-to-build pieces in every epic (auth, pre-fill, manager UX) aren't included because they can't be sized yet."

**Not defensible to say now:** Any single total-point number for R1, or any date commitment beyond "at least X." The PRD is explicit that Epic C's manager UX needs its own design and sizing pass — treating today's estimate as final would repeat the exact mistake the World A→B revert just created (assuming scope that turned out to be much bigger once actually examined).

**The real resourcing risk this reveals:** all three epics have their *hardest and least optional* piece sitting in the "unknown" bucket — agency auth (A), pre-fill (B), manager UX (C). This isn't a coincidence; it's because these are the three genuinely new pieces of infrastructure R1 introduces, versus the parts that are closer to "familiar UI work this team has already done in MVP." Capacity planning based only on the estimable subtotal above would systematically understate what R1 actually costs.

---

## Confidence Assessment

| Assumption | Confidence | De-risking action |
|---|---|---|
| Estimable subtotals (~36-64 pts) are in the right ballpark | Medium | Scale is grounded in real Sprint 5 velocity, but no engineer has reviewed these specific clusters — validate with Pow Hwee/Thomas/Léo before quoting to Adrian |
| Blocked pieces will land close to their estimable-equivalent size | Low | This is a guess, not a number — the whole point of flagging them as blocked is that nobody can currently size them. Don't substitute the placeholder for a real estimate. |
| Two-dev team (Thomas + Léo) is the actual R1 build team | Medium | PRD doesn't explicitly confirm MVP-to-R1 handoff timing for either — confirm before treating this velocity baseline as applicable |
| QA capacity is available at the same ratio as MVP | Low | No QA owner named against A/B/C anywhere in the PRD — Rathika's MVP involvement doesn't confirm R1 involvement |

---

## Recommendation

**Don't take a single number to SteerCo.** Take the range (~36-64 pts estimable, unknown-but-larger actual) plus the three named blockers (agency auth, pre-fill SSOT, manager UX) as the resourcing ask: *"We can start building the ~40-60% of R1 that's already clear. The other 40-60% — which happens to be the hardest and most valuable part of each epic — needs these three things resolved before it can be sized at all."* That's a stronger, more honest ask than a fabricated total, and it directly explains why Epic C's risk table already flags it as unsafe to assume "simpler now that ATS dropped out."

**Before grooming opens:** get Pow Hwee to sanity-check the estimable clusters above against actual story-writing, and push the three blockers (auth, SSOT, manager UX) to resolve on a timeline — right now none of them have a date, only an owner.

---

*Source: R1 XFN Kickoff PRD, live Jira Sprint 5 velocity data (2026-07-03 pull).*
*Parent PRD: [2026-07-07-W28-careercompass-r1-prd.md](../prds/2026-07-07-W28-careercompass-r1-prd.md)*
