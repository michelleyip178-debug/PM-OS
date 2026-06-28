---
week: 2026-W26
week_start: 2026-06-22
week_end: 2026-06-26
quarter: Q2 2026
sprint: S4 closed · S5 starts 29 Jun
---

# Weekly Review — Week of 22 June 2026 (W26)

## TL;DR

- **Sprint:** S4 closed today (Fri 26 Jun). 31 Done, 10 in QA carry-in to S5, 12 In Progress carry-in.
- **Key win:** R1 jam held Wed with Adrian — 4-epic shape agreed; KRs approved by Adrian; S5 groomed and board loaded.
- **Key decisions:** 9 logged this week — North Star shifted to completion (not applies), STIP+Gig merge reversed, DLE SSO design confirmed, ring-fencing UX locked for S5.
- **What didn't go as planned:** Internal demo cancelled Fri (dev environment broken). #40 ask to Mark not confirmed sent. Amber/Thomas building OTEP-439/386 without BO sign-off (open item #43 overdue since 25 Jun).
- **Carry-forward risk:** Competency/taxonomy SSOT governance is the single biggest unresolved question — surfaced in 4 separate meetings this week. Blocks R1 Epic E grooming and downstream filter design.
- **Completion:** ~70% of planned priorities delivered. Priority 1 ✅, Priority 2 ✅ (jam done, Mark ask status unknown), Priority 3 🟡 (S4 closed, retro ran, but QA tail larger than hoped).

---

## Priority Review

### Priority 1: DevOps chat → unlock S5 grooming chain + KR docs ✅

**Planned:** DevOps type name confirmed, 4-cat mapping sent to Xian Zhang, OTEP-86 ACs closed, 3 KR definitions written.

**Actual:** DevOps chat done Mon — STIP+Gig merge reversed (stay separate, no schema change). 4-cat mapping sent. OTEP-86 unblocked. KRs written Mon, reviewed by Adrian (agreeable), reviewed with Jace Thu. Word doc + feedback list due to Jace by 3 Jul.

**Tasks:**
- ✅ DevOps chat — STIP+Gig no merge confirmed
- ✅ 4-cat mapping sent to Xian Zhang
- ✅ OTEP-86 ACs updated/unblocked
- ✅ 3 mid-year KR definitions written with numbers
- ✅ KR review with Jace Thu — approved in principle
- [ ] Word doc + feedback list to Jace — carry to W27 (due ~3 Jul)

**Learning:** Front-loading the DevOps chat Monday unlocked the rest of the grooming chain exactly as planned. This sequencing worked. The one miss: didn't get the #40 ask to Mark in writing same day as the R1 jam.

---

### Priority 2: R1 jam with Adrian + draft #40 ask ✅ / ❓

**Planned:** 4-epic R1 draft prepared before jam, jam produces agreed priority order, #40 ask drafted same day.

**Actual:** R1 jam held Wed PM with Adrian. 4 epics shaped (with deck). Jam output: epic priority agreed, competency governance flagged as Path A vs Path B policy question (not a product decision). #40 ask to Mark — no file found in outputs; status unconfirmed.

**Tasks:**
- ✅ R1 jam with Adrian Wed PM
- ✅ 4-epic shape agreed
- ✅ Competency governance risk surfaced and escalated in jam
- ❓ #40 scope ask to Mark — not confirmed sent; verify W27

**Learning:** Preparing the deck before the jam (not building it in the room) made the session productive. The governance question (Path A/B) was the right call to surface — going to Mark without that being labelled would have wasted the conversation.

---

### Priority 3: S4 close — PM WIP, QA tail, retro 🟡

**Planned:** 3+ QA tickets to Done, PM WIP resolved, S5 grooming productive, retro with captured AIs.

**Actual:** S4 closed with 31 Done. PM WIP (OTEP-427, OTEP-358) parked to Backlog — Michelle PM stories all Done. S5 groomed Thu and board loaded (11 stories). Retro ran Fri. Internal demo cancelled (dev environment broken) — reschedules to Monday. QA tail of 10 carries to S5 (larger than the target of 3 landing).

**Tasks:**
- ✅ OTEP-427 + OTEP-358 parked to Backlog
- ✅ PM-owned stories all Done at sprint close
- ✅ S5 grooming Thu — productive session, ring-fencing + competency ACs locked
- ✅ Retro ran Fri
- ✅ S4 Finalisation ran
- [ ] Internal demo — cancelled, moves to Monday 29 Jun
- ❌ QA tail: 10 carry to S5 (target was 3 — OTEP-305/392 Keycloak dependency the main blocker)

**Learning:** The Keycloak dependency on OTEP-305/392 was flagged in the weekly plan as a risk; it played out exactly as predicted. Next time, lock carry-in scope explicitly on Monday of sprint close week rather than hoping for late QA landings.

---

## Key Decisions This Week (9)

| Decision | Day | Impact |
|----------|-----|--------|
| STIP+Gig: no merge, stay separate in MVP — reverses open item #49 | Mon | Unblocked S5 grooming chain; saved ~3 hrs rework |
| North Star = completed development actions (not applies) | Wed | Stronger SteerCo narrative; now needs baseline data |
| Working adoption targets: 20% onboarding / 30% completion / 40% upper-bound | Wed | Not final — needs WD/learning baseline before commit |
| R1 competency sourcing: API/UHDP over spreadsheet | Wed | Removes R1 data architecture ambiguity |
| November go-live is the realistic target (VAPT + remediation) | Wed | Significant — not yet formally communicated upstream |
| Ring-fencing: non-eligible opportunities hidden from listing; direct URL = "not eligible" page, no Apply CTA | Thu | Locks OTEP-390 ACs; unblocks Amber for S5 |
| Competency matching on listing cards ("X of Y") and detail page confirmed | Thu | Locks OTEP-336/570 ACs |
| OTEP-131: POC field absent from OTG — placeholder stays | Fri | Prevents re-raising at grooming |
| OTEP-393: Keycloak custom theme deferred until WOG AD live | Fri | Scope protection; paired with #26 gate |

**DLE SSO (via Pow Hwee email):** OIDC design confirmed — OTEP/Keycloak as IdP, DLE as Relying Party, WOG email sufficient, DLE ~15 man-days, August integration testing. Governance/approval docs still TBC.

---

## What Didn't Go As Planned

1. **Internal demo cancelled Fri** — dev environment broken. Reschedules to Monday. Not a planning failure; flag for Monday prep.

2. **#40 ask to Mark not confirmed sent** — R1 jam done but no evidence the ask landed with Mark. Sequence was Adrian jam → Mark, but Mark step unconfirmed. Verify Monday.

3. **Open item #43 (BO sign-off on hide vs show-but-disable) overdue** — Amber and Thomas both moved to In Progress on OTEP-439/386 without BO answers. Risk of rework. Escalate to BOs before S5 Week 1 design lock.

4. **November go-live not yet formally communicated** — both Wed meetings concluded October is unrealistic, but this hasn't been surfaced to Jace as a formal position change. Should go to Jace W27.

---

## Recurring Theme: Taxonomy/Competency SSOT

This surfaced in **4 meetings** this week (Squad Sync Mon, BO Senior Wed, Adhoc Wed, Squad Sync Fri). The question — *which system is authoritative for job family / competency / role data?* — was not resolved in any of them. It is now the single biggest upstream blocker for:
- R1 Epic E grooming (competency management)
- Job family filter design (OTEP-86 downstream)
- Learning filter (Domain field — Imelda chasing CSC)
- North Star adoption targets (completion metric depends on clean competency data)

Ram owns the SSOT session. Needs to land before the next Design Review.

---

## Next Week Preview (W27: 29 Jun – 4 Jul)

### Top 3 Priorities

1. **S5 sprint start — Monday demo + board clean** — Internal demo reschedules to Monday AM; confirm dev environment working. S5 board has 10 QA carry-ins that need owners and progress by EOD Monday. Open item #43 nudge to Amber before she goes deeper on OTEP-439.

2. **#40 Mark ask + appraisal Word doc** — Verify whether R1 scope ask reached Mark; if not, send Monday. Word doc with KRs + feedback list due to Jace by ~3 Jul.

3. **November go-live — surface formally to Jace** — Both Wed sessions concluded October is unrealistic. This is a planning input Jace needs to have, not just an acknowledged risk. Frame clearly: VAPT + remediation = November, not October. Bring a one-pager.

### Key Meetings

- **Mon 29:** Internal demo (reschedule from Fri) — confirm dev env working before
- **Mon 29:** Standup — flag #43 nudge to Amber
- **Wed/Thu:** CoachPal / Jasmine Richard session (29 Jun) + Adrian follow-up (30 Jun)
- **W27 target:** Ram to schedule SSOT session with WD, BOS, Cumulus owners

### Items to Unblock

| Item | Blocked Since | Action Needed |
|------|---------------|---------------|
| OTEP-439/386 — Amber + Thomas | Jun 17 (open item #43) | BO sign-off on hide vs show-but-disable before S5 W1 design lock |
| #40 Mark R1 ask | Jun 24 jam | Verify sent; if not, send Monday |
| November go-live formal position | Jun 24 | Brief Jace W27 |
| KR Word doc + feedback list | Jun 25 | Send to Jace by ~3 Jul |

---

*Generated: 2026-06-26*
*Sources: W26 weekly plan, daily plans Mon–Fri, meeting cleanups 22–26 Jun, sprint-pulse 26 Jun, decisions log, open-items.md*
*Next: `/weekly-plan` Mon AM for W27*
