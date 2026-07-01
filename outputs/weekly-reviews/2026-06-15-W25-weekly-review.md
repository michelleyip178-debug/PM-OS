---
week: 2026-W25
week_start: 2026-06-15
week_end: 2026-06-19
quarter: Q2 2026
sprint: S4 Week 1 (15–28 Jun)
---

# Weekly Review — Week of 15 June 2026 (W25)

## TL;DR

- **Key win:** OTG monthly report permanently off your plate (delegated to Jobelle), scope mismatch corrected (North Star brief was never yours — 3 weeks of misattributed load removed)
- **Key slip:** QA tail barely moved (8 → ~8 in QA by Friday); S5 grooming blocked by a DevOps decision that wasn't confirmed in time
- **Decisions:** 4-cat model locked (I-018), opportunity type merge approach confirmed (Option A+C), R1 jam set for Wed 24 Jun
- **New priority surfaced:** Mid-year KR documentation — Jace flagged every KR needs a number or artifact by 22 Jun
- **Week 2 gate:** DevOps chat Mon 22 Jun — unblocks grooming, 4-cat mapping to Xian Zhang, and S5 stories

---

## Strategic Progress

**Quarter Goal:** MVP go-live week of 19–23 Oct. S4 is dev sprint 4 of 9.

| Goal | Status | Notes |
|------|--------|-------|
| Sprint delivery (listing experience) | 🟡 Partial | 20 Done in S4 but QA tail unchanged at ~8 |
| OTG ingestion accuracy | 🟡 Partial | OTEP-192 ACs drafted; 4-cat mapping done but ungated until Mon DevOps chat |
| SteerCo demo co-prep | 🟡 Partial | Scope corrected (deck not yours); trio co-prep sync still needed |

---

## Top 3 Priorities Review

### Priority 1: Stabilise S4 board + clear QA carry-in

**Planned:** Board reconciled Mon AM; 3+ of 9 QA tickets Done by Friday.

**Actual:** Board was reconciled (spine confirmed, OTEP-87 AC fixed, OTEP-133 closed). QA tail held at ~8 — Keycloak dependency and no-assignee cards on OTEP-85/128 slowed throughput. OTEP-127/130 still in progress.

**Status:** 🟡 Partial

**Key outcome:** Board is clean structurally; execution velocity in W2 is unblocked if Keycloak moves.

---

### Priority 2: OTG ingestion — v3 ACs + 4-category mapping

**Planned:** OTEP-192 ACs updated and sent to Léo; 4-cat mapping sent to Xian Zhang this week.

**Actual:**
- OTEP-192 ACs: updated (v3 rules applied)
- Léo unblocked on HRPS API (Wed 17 Jun — Pow Hwee confirmed)
- 4-category mapping: drafted but held — gated on Mon DevOps chat confirming the OTG type-prefix fix. Correct decision; sending premature would create rework.
- SWDA/WSG+SSG merger resolved — Alan's team updating OTG inclusion file before 30 Jun
- OTG monthly report: ✅ permanently delegated to Jobelle (frees ~1–2 hrs/month recurring)

**Status:** 🟡 Partial — the gate is external (DevOps), not a slip

---

### Priority 3: Co-prep SteerCo demo

**Planned:** Sync with Imelda/Rama/Pow Hwee; prep Michelle's listing beat; send R1 scope ask to Mark (#40).

**Actual:**
- ✅ Scope corrected (19 Jun) — North Star brief, transition plan, gap analysis are NOT Michelle's. Co-prep scope is Michelle's listing beat in the consolidated narrative only.
- Trio narrative sync: planned for today (Fri), status TBC
- R1 jam: confirmed Wed 24 Jun PM with Adrian (better than a rushed Mon session)
- R1 scope ask to Mark (#40): not sent yet — waiting until after Adrian jam so the ask is shaped

**Status:** 🟡 Partial — scope correction was the most valuable outcome here

---

## Key Decisions Made

| Decision | Date | Rationale |
|----------|------|-----------|
| 5-category → 4-category opportunity model (I-018 revised) | 16 Jun | PSFG deferred; reduced model complexity |
| Option A+C for opportunity type recategorisation: display label merge now, data model cleanup pre-R1 | 18 Jun | Avoids blocking S5 mid-sprint; separates display from schema concern |
| S5 ticket grooming deferred to 26 Jun | 18 Jun | DevOps type model not confirmed; grooming on unstable types creates rework |
| OTG monthly report → Jobelle, permanent | 17 Jun | Frees Michelle's recurring time; Jobelle needs substantive tasks |
| North Star brief scope removed from Michelle | 19 Jun | Brief owned by another team — 3 weeks of misattributed ownership corrected |
| R1 jam: Wed 24 Jun PM (not Mon 22) | 19 Jun | Gives time to prep R1 draft; avoids S5 start-day collision |
| OKR targets revised (login 20%, competency profiles to Q3'27 only, North Star 30%) | 19 Jun | Xian Zhang + Adrian recalibrated against OTG's 14% login baseline; pending Mark/GK sign-off |

---

## Top 3 Learnings

**1. Grooming without a confirmed tech decision = wasted session**
S5 grooming was blocked because the DevOps type merge name wasn't locked. Next sprint: get foundational data-model decisions confirmed before the grooming window, not during.

**2. Scope ownership needs an explicit check before carrying it**
The North Star brief sat on Michelle's list for ~3 weeks. A 10-minute scope clarification with Jace removed it. Worth doing this check early in any sprint when a deliverable feels heavy or misaligned.

**3. Delegation with a task is better than delegation without one**
The OTG report handoff to Jobelle worked because it was a concrete, bounded task. Contrast with vague "loop Jobelle in" asks that don't land.

---

## Next Week Preview

### Top 3 Priorities

1. **DevOps chat Mon 22 Jun** — confirm OTG type name (display-only vs schema change). This is the gate for S5 grooming, 4-cat mapping to Xian Zhang, OTEP-86 AC closure, and ~5 S5 stories. Everything else waits on this.

2. **R1 jam with Adrian — Wed 24 Jun PM** — bring the prioritised 4-epic draft from the scope brief. Goal: shape epics together so you can take a coherent list to Mark for #40 sign-off. Don't signal MVP scope is done — be honest that build is still closing out.

3. **Mid-year KR documentation** — Jace flagged by 22 Jun: define KRs for (a) opportunities funnel, (b) auth/authorisation, (c) process improvement. Each needs a number or artifact. Check if tracking is live (Thomas/Léo) before writing targets.

### Key Items to Unblock Mon Morning

| Item | Blocked By | Action |
|------|-----------|--------|
| 4-cat mapping → Xian Zhang | DevOps type name confirmation | DevOps chat Mon AM |
| S5 grooming (26 Jun) | Same DevOps decision | Same chat |
| OTEP-86 AC closure | DevOps type name | After chat |
| R1 scope ask to Mark (#40) | Adrian jam shape | After Wed jam |
| OTEP-390 eligible indicator spec | BO decision (hide vs show-but-disable) | Chase Amber / BO Mon |

---

*Generated: 2026-06-19*
*Sources: W25 weekly plan, daily plans (Mon–Fri), meeting notes (7 files), live Jira (Fri 19 Jun)*
*Next: Run `/stale-check` then `/weekly-plan` for W26*
