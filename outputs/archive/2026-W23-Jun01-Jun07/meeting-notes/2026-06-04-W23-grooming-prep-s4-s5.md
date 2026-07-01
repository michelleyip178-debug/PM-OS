---
date: 2026-06-04
type: meeting-prep
meeting: Backlog Grooming — Sprint 4 + 5
time: 14:00–16:00
facilitator: Rama
content-lead: Michelle
probes: Pow Hwee (AC conflicts, mechanism-language, fold/reframe)
---

## Meeting Prep: Backlog Grooming — Sprint 4 + 5
**Date/Time:** Thu 4 Jun 2026, 14:00–16:00

**Type:** Backlog grooming (Rama facilitates, you lead content, Pow Hwee probes)

### Context
First grooming since adopting [Pow Hwee's plan](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2293796526/Planning+draft+for+sprint+3+and+after) as the S2–S6 plan of record. Both sprint goals are drafted ([sprint-status.md](../../../PM-skills-ALL-1/00-hub/sprint-status.md)). Deep per-story prep is in the [grooming brief](../analyses/grooming-brief-2026-06-04.md). This is your walk-in reference.

**The live-board reality that shapes everything:** the S3 spine — OTEP-319 (apply), 192 (ingest), 86 (filter), 87 (C@G detail) — is **all still Backlog/unassigned at Day 3.** It's carrying into S4. So lead with the **fallback catch-up goal**, not breadth-led.

### Open the room with (2 min, before sizing)
State these so nobody works from a stale version:
1. **Plan of record = Pow Hwee's Confluence plan**, adopted. One amendment: **native apply = R1, not an S4 spike.**
2. **S4 dates = 14–28 Jun** (not 16–27).
3. **S4 goal** (read it): *"OTG discovery-to-apply verified Done + C@G appears in the listing with a working apply path."* (Catch-up version — the spine's still in S3.)
4. **Auth is best-case, not committed** — gated on WOG AD; don't groom auth stories as S4 scope.

### Key Points to Cover

**1. Do-without-debate (confirm, don't relitigate) — 5 min**
- Apply-first (OTEP-319) → assign Thomas, ahead of filters. *Still unassigned on the board — this is the move.*
- Split OTEP-87: core C@G detail in, competency block cut (#18).
- Stream B auth (71/110/127/WOG-06) out of S4 grooming.

**2. The board has 2 surprises — call them in-or-out — 5 min**
- **OTEP-127 (ringfencing)** and **OTEP-130 (full FormSG webhook)** got added to the S4 board. Both are **un-contracted** (no ringfencing query contract, no webhook contract). **Recommend: pull both** — 130 defers to S5 (blocked on 319), 127 is gated on POCDEX off-board. If kept, size as "13 = unknown."

**3. Fix-before-size (do in Jira during/before the room)**
- **OTEP-87 AC conflict** — says FormSG redirect; should be C@G deep-link (OTEP-89). Pow Hwee flagged ×2.
- **OTEP-348** — bring the sharpened ACs + test plan (the bad-row test uses Léo's real 72/200 failing rows). [Detail in grooming brief](../analyses/grooming-brief-2026-06-04.md#otep-348--sharpen-with-pow-hwee-ingestion-scheduler--observability).
- **OTEP-89** — one mechanism AC ("OTEP captures click-to-CG event") → move to eng notes.

**4. Sprint 5 — don't size tickets, clear gates — 10 min**
S5 board is empty. S5 goal: *real WOG AD login + full C@G detail + CSC SSO scoped.* It's gate-dependent, not groomable yet. Use the time to name owners + dates on the 4 gates (below), not to size stories.

### Decisions Needed (bring a recommendation each)
- **S4 goal — breadth-led or catch-up?** → **Catch-up.** The spine is unstarted at Day 3; it carries. Don't promise C@G apply when OTG apply isn't done.
- **New full-stack dev split?** → **70/30 FE**, BE slice on the C@G API chain (374/377/378).
- **OTEP-127 + 130 in S4?** → **Out.** Un-contracted; 130 blocked on 319, 127 on POCDEX.
- **C@G card / deep-link UX?** → **Decide at the S4 design review**, not mid-build. One call unblocks badge + card + detail.

### Open Action Items (assign owner + date in the room)
- [ ] **OTEP-350 WOG AD onboarding** — Michelle→Fabian, map steps (#26). *Gates all S5 auth; 2+ wk lead.*
- [ ] **POCDEX planning** — Michelle→Daryll (#31). *Gates S5 ringfencing.*
- [ ] **CSC SSO requirements + owner** — (#30). *S5 start per plan; 6-wk chain.*
- [ ] **Competency SSOT** — Michelle→Imelda (#18). *Gates full OTEP-87.*

### Questions to Ask the Squad
1. **Is OTEP-319 realistically Done by S3 close, or carrying?** (Decides S4 goal: breadth-led vs catch-up. Board says carrying.)
2. **Who's editing the S4 board?** OTEP-71 flipped sprint 3× today; 127/130 appeared. Confirm it's intentional restructuring, not churn.
3. **Ingestion cadence + the 72/200 parse failures** — data or transform problem? (Ties OTEP-192/348/358.)

### R1 deflections (ready)
- "Add C@G as a filter?" → Sprint 4+ ticket once C@G listings are live.
- "Competency match on detail?" → Cut, no SSOT (#18).
- "Webhook confirmation email?" → OTEP-130, gated on 319; not today.

> **Self-check:** OTEP-87 AC fixed in Jira before the room · 127/130 in-or-out recommendation ready · S4 goal = catch-up (spine carries) · S5 = clear gates, don't size.

---
*Built from: [grooming brief](../analyses/grooming-brief-2026-06-04.md) · [adoption reconciliation](../analyses/2026-06-04-W23-adopt-powhwee-plan-reconciliation.md) · live Jira 2026-06-04 (S4 = 9 issues; S3 spine all Backlog/unassigned).*
