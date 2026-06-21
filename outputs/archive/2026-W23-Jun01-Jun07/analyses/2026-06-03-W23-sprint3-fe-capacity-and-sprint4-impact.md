---
date: 2026-06-03
type: capacity-analysis
sprint: Sprint 3 (active, Day 2) → Sprint 4 impact
source: live Jira pull 2026-06-03 (Pathfinder S3 / Sprint 34617)
---

# Sprint 3 FE Capacity + Sprint 4 Carry-Over Impact

**TL;DR:** Sprint 3 carries 45 open issues on Day 2, and **20 of them are frontend with Thomas as the sole FE dev** (7 in QA, 1 in progress, 12 in backlog). The sprint goal (filter + apply) sits behind a 12-ticket QA tail and a 12-deep FE backlog that one person can't clear in 8 days — so **expect a meaningful slip into Sprint 4**. The relief comes in S4: a second full-stack dev joins (productive day 1, even FE/BE split), giving ~1.5 FE-equivalent capacity. That makes S4 the catch-up sprint, but Sprint 3 itself is unchanged — the filter-vs-apply tradeoff still has to be called this week.

---

## 1. The binding constraint: one FE dev, 20 FE stories

| FE status | Count | What it is |
|-----------|-------|-----------|
| QA (needs verify/fix) | 7 | Sprint 2 carry-over: listing layout, empty/error states, detail pages (OTEP-170, 268, 314, 325, 326, 327, 128) |
| In Progress | 1 | OTEP-85 (cards w/ real OTG data) — ⚠️ unassigned |
| Backlog | 12 | Filters (86, 317, 381), apply (319 is FE-adjacent), C@G UI (87, 375, 378, 379), login/logout (305, 368, 369), closed-opp UI (363), competency UI (367) |

**Thomas currently owns 7 of the FE stories. The other 13 FE stories are mostly unassigned** — which doesn't expand capacity, it just hides the queue. There is one FE throat to choke, and the queue in front of it is ~20 stories deep.

Léo (BE) and Pow Hwee (spikes/infra) have parallel capacity, so backend and spike work can progress independently. The bottleneck is purely the FE surface — which is exactly where the sprint goal lives (filters, apply CTA, detail pages are all FE).

---

## 2. What Sprint 3 will realistically deliver

Working back from one FE dev clearing QA rework + a subset of backlog in 8 remaining days:

**Likely lands (high confidence):**
- Sprint 2 QA tail closed (the 7 FE QA + Léo's BE QA) — this eats the first chunk of FE time
- OTEP-85 (cards w/ real OTG data) — already in progress, critical path
- One filter story (OTEP-86 **or** the 380/381 filtering pair) — not both deep

**At risk (coin-flip):**
- OTEP-319 (FormSG apply redirect) — the *other half* of the sprint goal. If filters consume FE capacity, apply slips.
- OTEP-192 / 348 (OTG ingestion) — BE-owned so not FE-blocked, but **unassigned**. No live data without it.

**Won't land (low confidence) → carries to Sprint 4:**
- The C@G stream: OTEP-87, 88, 89, 374–379 (badge, detail, deep-link, payload, tests) — ~7 stories
- Login/logout UI: OTEP-305, 368, 369, 370
- Closed-opp UI (363), competency UI (367)

---

## 3. The filter-vs-apply tradeoff (the real grooming decision)

Sprint 3's goal needs **both** filters and apply. With one FE dev and a QA tail, Thomas probably can't do both well. The choice:

| Option | Ship | Cost |
|--------|------|------|
| **Filters first** | Discoverability complete | Apply slips to S4 — the actual conversion event delayed |
| **Apply first** | End-to-end journey closes (the North Star: application completion) | Officers can't narrow the list — usable but noisy |

**Recommendation: apply first (OTEP-319).** The North Star is application completion rate; a working apply path on an unfiltered list is a complete journey. Filters without apply is a dead end. Make this call explicitly at grooming rather than letting the queue decide it.

---

## 4. How this hits the Sprint 4 plan (the 2026-05-21 sketch)

| Sprint 4 plan assumed | Live Sprint 3 reality | Impact |
|-----------------------|------------------------|--------|
| Filters + apply done in S3 → S4 builds on top | Both still backlog/unassigned Day 2; likely one slips | S4 Stream A (OTEP-130 full FormSG) starts on shaky ground |
| C@G is *new* S4 work ("Story D — C@G ingestion") | C@G stream (87/88/89/374-379) already **in S3**, will mostly carry to S4 | "Story D" framing is stale — C@G is partly groomed already, just not done |
| POCDEX plumbing (271/203) done in S3 → unblocks S4 ringfencing | 271/203 **moved off S3 board** to POCDEX epic | S4 ringfencing (OTEP-127) dependency chain has a gap |
| Auth deferred to S4 best / S5 realistic | WOG AD onboarding (OTEP-350) + login/logout already **in S3 backlog** | Auth clock started early — good, *if* OTEP-350 moves. It's unassigned/Backlog. |
| Spikes feed S4 scoping | OTEP-349 (competency match), 358 (nil-date) in S3 backlog | If spikes don't run, S4 competency + data-quality scope is planned blind |

---

## 5. Revised Sprint 4 expectation

Sprint 4 should be planned as **"finish the S3 spine + C@G"**, not "new C@G + auth." Realistic S4 intake:

**Carries in from S3 (plan for these):**
- Whichever of filters/apply slipped (likely OTEP-319 or the filter pair)
- C@G stream: OTEP-87, 88, 89, 374–379
- Login/logout UI: OTEP-305, 368, 369, 370
- OTG ingestion polish: OTEP-348

**New S4 work (only if S3 spine lands):**
- OTEP-130 (full FormSG apply w/ webhook)
- OTEP-127 ringfencing — **blocked** until POCDEX plumbing gap (271/203) is resolved
- Auth Stream B — only if OTEP-350 (WOG AD onboarding) progressed in S3

**The FE constraint eases in S4 — a second full-stack dev joins, productive from day 1, split evenly FE/BE.** That gives S4 ~1.5 FE-equivalent capacity (Thomas full FE + half the new dev) plus extra BE throughput. It relieves the bottleneck but doesn't erase it: ~20 FE stories against ~1.5 devs is still tight, so prioritisation still matters. Two caveats: (1) the relief is **S4 only — Sprint 3 is unchanged**, so the filter-vs-apply call below still stands for S3; (2) "even split" means FE gets ~0.5 of the new dev, not all of it — if the FE backlog is the real risk, consider weighting the new dev more toward FE for the first sprint or two.

---

## 6. Actions this week

1. **Assign owners to OTEP-192, 86, 317, 319 today** — the goal-critical spine can't wait on the QA tail.
2. **Make the filter-vs-apply call at grooming** — recommend apply-first.
3. **Confirm OTEP-350 (WOG AD) has a real start** — it gates the S4 auth stream; it's the long-lead external clock.
4. **Resolve the POCDEX 271/203 gap** — S4 ringfencing depends on it and it's off the board.
5. **The R1 ask shifts from "any second dev" to "FE-weighted capacity."** The S4 full-stack hire relieves the immediate squeeze, but at an even FE/BE split it's only ~0.5 extra FE. The Adrian/Michelle-Chen ask is now about *sustained* FE capacity for the R1 net-new builds (native apply + creation + the seam), not plugging the S3/S4 hole. Reframe accordingly.
