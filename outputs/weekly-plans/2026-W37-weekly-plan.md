---
week: 2026-W37
week_start: 2026-09-07
week_end: 2026-09-11
quarter: Q3 2026
---

# Weekly Plan - Week of September 7, 2026

## TL;DR

Three priorities, all on the MVP critical path. First, close the loop on last week's biggest call: employment-lifecycle handling is out of MVP, but as of Friday that was still an informal Michelle-plus-Jace agreement and Huiting's testers are still working to a 19 Oct UAT date that no longer exists. That has to become real and communicated this week. Second, VAPT assessment opens today (7 Sep) and runs through 8 Nov. It is the single longest pole to the 24–25 Nov launch, so the job this week is to confirm the three things that gate a clean start (NCS infra access, the POCDEX endpoint fold, CIE retraining scope) before the window is actually live. Third, define the minimum MVP deliverable that Decision 1 left open: "BOs can see what the data errors are." Nobody has said what that view is, who builds it, or where it lives, and it cannot enter a sprint until someone does.

Meeting load is heavy again. This is the 5th straight week the plan's Priority 1 has been displaced, and the 5th where no protected thinking block has survived. That is now a pattern worth naming to Adrian or Jace directly, not scheduling around. See Protected Block below.

---

## Strategic Context

**Quarter Goal (de facto):** Career Compass MVP launches 24–25 Nov 2026. No formal Q3 OKR file exists; the launch date and its four gates (POCDEX → UAT → VAPT → Launch, per [MVP readiness gates](../analyses/2026-09-03-W36-mvp-readiness-gates.md)) are the working goal.

**Critical path status:**
- **VAPT** (7 Sep–8 Nov): assessment window opens today. On track, PO issued. Longest pole to launch.
- **UAT**: Phase 1–2 done. Employment-profile UAT must be executable by 19 Oct — but the workstream feeding it was cut from MVP on 3 Sep and the reset hasn't been communicated to the testers.
- **POCDEX**: "last modified date" rule accepted by Adrian, still needs Rama's formal engineering sign-off (open item #60).
- **Launch**: date confirmed. AI IDSC approval (~1 Sep expected) is a hard blocker with no fallback — confirm it landed. Day-2 support model still unowned.

**This Week's Focus:**
The descope from 3 Sep is the right call, but it is only half-made. This week is about making it real: get it on record with Adrian, reset the downstream UAT expectation, and define what the reduced MVP scope actually ships. In parallel, protect the VAPT start so the critical path doesn't slip in week one.

---

## Top 3 Priorities

### Priority 1: Make the Employment-Lifecycle Descope Real and Communicated ⭐ Most Important

**Why this matters:**
- Advances: MVP scope clarity / UAT gate
- Impact: Huiting's testers stop preparing against a 19 Oct date that no longer exists. Engineering stops holding capacity for an epic that moved to R1. The scope cut becomes a decision of record instead of a hallway agreement.
- Risk if not done: Testers burn a week on the wrong scope. Adrian hears about the cut secondhand. The "future MVP changes need approval" rule gets tested with no named approver.

**Success looks like:**
- Adrian has confirmed the scope cut in writing (email or Teams, not verbal).
- Huiting and her test leads know the 19 Oct employment-profile UAT date is reset, and what (if anything) replaces it.
- A one-page `/decision-doc` exists capturing Decision 1, its reversal of the end-Sept freeze / 19 Oct assumption, and Adrian's sign-off.

**Key tasks:**
- [ ] Catch Adrian early in the week, walk him through the 3 Sep Jace call, get explicit confirmation (Est: 1 hr, incl. scheduling) — Leverage
- [ ] Draft and send the `/decision-doc` for "employment-lifecycle handling out of MVP" (Est: 2 hrs) — Leverage
- [ ] Align with Huiting on the 19 Oct reset — what her testers should do instead, whether the minimum error-view work needs any UAT before launch (Est: 1.5 hrs) — Leverage
- [ ] Update `open-items.md` / risks and the readiness-gates doc to reflect the cut (Est: 1 hr) — Overhead

**Dependencies:**
- Needs from: Adrian Ang — 20 min and a written confirmation. He is away 5–9 Oct, so his input on anything R1-adjacent is time-boxed to before then; this week is not the constraint but the next two are.
- Needs from: Jace — consistency on the framing if Adrian pushes back.
- Blocks: Priority 2 (VAPT scope) is cleaner once everyone agrees the employment-profile API surface is MVP-frozen. Blocks all downstream test planning.

**Linked to:**
- Decision: [W36 weekly review, Decision 1](../weekly-reviews/2026-09-04-W36-weekly-review.md)
- PRD: [employment-profile-changes epic one-pager](../prds/2026-09-03-W36-employment-profile-changes-epic-one-pager.md) (now R1)

---

### Priority 2: Protect a Clean VAPT Start

**Why this matters:**
- Advances: MVP launch gate (VAPT is the critical path to 24–25 Nov)
- Impact: The assessment window is live from today. Four unconfirmed items could each cost days at the front of a 9-week cycle that has no slack before the 8 Nov sign-off feeds a 24 Nov launch.

**Success looks like:**
- NCS has confirmed infra access (not just the PO) before assessment work starts.
- The 5 POCDEX endpoints are confirmed folded into the same NCS engagement, preserving the 8 Nov target.
- Victor has given a read on whether CIE / CV retraining is "minor / logic-only."
- The old 16 Oct vs 23 Oct closure-date discrepancy is reconciled against the ~7 Nov framing, on record.

**Key tasks:**
- [ ] Confirm with Jace / Jobelle that NCS access provisioning is done, not pending (Est: 0.5 hr) — Leverage
- [ ] Confirm the POCDEX endpoint-fold decision with Pow Hwee / Rama (Est: 1 hr) — Leverage
- [ ] Get Victor's read on CIE retraining scope before the window is truly active (Est: 0.5 hr) — Neutral
- [ ] Start daily VAPT tracking cadence with Jobelle; watch the interim-report date that already slipped ~18 Sep → 25 Sep (Est: 0.5 hr/day) — Neutral

**Dependencies:**
- Needs from: Jobelle — daily tracking, 6-report schedule is the authoritative timeline.
- Needs from: Jace — ITC coordination, NCS relationship.
- Needs from: Victor — CIE/CV retraining assessment.
- Blocks: A slip here compresses everything between now and 24 Nov.

**Linked to:**
- [MVP readiness gates, Gate 3](../analyses/2026-09-03-W36-mvp-readiness-gates.md)
- [MVP RAID consolidated](../analyses/2026-09-03-W36-mvp-raid-consolidated.md)

---

### Priority 3: Scope the Minimum MVP Error-View

**Why this matters:**
- Advances: MVP scope definition / delivery pipeline
- Impact: Decision 1 set the new bar — "BOs can see what the data errors are (email collisions, missing mappings, stale transfers), not automated handling." Nobody has defined what that view is, who builds it, or where it lives. Until they do, it can't be sized or put in a sprint, and Sprint 9 (6–20 Sep) is already running.

**Success looks like:**
- A one-page spec: what errors the view surfaces, what the BO sees, where it lives (Compass admin? a report? a POCDEX-side flag?), what's explicitly out.
- A named owner for building it.
- It's ready to be sized against a Sprint 9 or Sprint 10 slot.

**Key tasks:**
- [ ] Draft the error-view spec from the OTG operational incident list (email collisions, duplicates, multi-hatting, secondments, NPL) already mapped in W36 (Est: 3 hrs) — Leverage
- [ ] Walk it past Rama / Adrian Lo for a build owner and a home (Est: 1.5 hrs) — Leverage
- [ ] Get a rough size from engineering; slot it into a sprint (Est: 1 hr) — Neutral

**Dependencies:**
- Needs from: Rama / Adrian Lo — a build owner and agreement on where the view lives.
- Needs from: the W36 test-case and OTG-mapping artefacts — already exist, this is the reuse.
- Blocks: Nothing downstream directly, but this is the actual reduced MVP deliverable — if it's not defined it won't ship.

**Linked to:**
- [movement UAT test cases](../analyses/2026-09-02-W36-movement-uat-test-cases-compass.md), [identity UAT test cases](../analyses/2026-09-02-W36-identity-uat-test-cases-compass.md)
- [OTG operational root cause analysis](../analyses/2026-09-01-W36-otg-operational-root-cause-analysis.md)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| Employment-profile-changes epic | Epic one-pager (now R1, not MVP) | Formally logged as R1; descope decision-doc written | Priority 1 |
| Minimum MVP error-view | Not started | One-page spec + named owner | Priority 3 |
| CareerCompass R1 (opportunities) | Discovery, blocked on stakeholder access | No stage change expected — but flag the timeline collision to Adrian | See Risks |
| Ops Portal PRD | Condensed version exists (W35) | No action this week | — |

---

## Key Meetings

*No calendar MCP connected. Known / expected meetings below — confirm and fill gaps.*

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon–Fri | Daily VAPT tracking w/ Jobelle | Watch the 7 Sep window open, catch slips early | Y — running tracker |
| TBC | Adrian catch-up | Confirm the descope, R1 timeline collision | Y — Priority 1 + R1 collision analysis |
| TBC | Jace pre-go-live readiness meeting | POC assignment + checklist walkthrough (flagged 3 Sep, date TBC) | Y — RAID + readiness gates |
| ~Wed | R1 brainstorm (bi-weekly, started Sprint 9) | Protected R1 direction thinking w/ Pow Hwee + designer | Y — running doc |
| TBC | Squad sync | Sprint 9 progress, freeze status | N |

**Meeting load:** Heavy (estimate 18–22 hrs pending calendar confirmation).

**Deep work capacity:** Limited. Realistically 8–12 focused hours across the week, in fragments.

**Protected block this week:** None named — deliberately. This is the **5th consecutive week** (W33, W34, W35, W36, W37) that a Wednesday 2–4pm thinking block has either not been scheduled or not survived the week. It has been displaced by SSO recovery, POCDEX scoping, MVP-readiness planning, and the descope every time. Re-naming it a 5th time is not planning. Two real moves:
1. **Protect time opportunistically, same-day** — when Priority 1's decision-doc or Priority 3's spec needs a clear 2-hour run, take it that morning and decline whatever collides. Don't pre-commit a calendar block that history says won't hold.
2. **Name the pattern to Adrian or Jace directly.** Five weeks without protected strategic time, while a real R1 timeline collision (below) goes unaddressed, is evidence the role doesn't currently have slack for planned thinking. That is a capacity conversation, not a scheduling one. The R1 collision analysis from Friday is the concrete hook — it's exactly the kind of work that needs protected time and isn't getting it.

---

## Strategic Pillar Balance

No formal strategy pillars defined. Rough allocation by workstream:

| Workstream | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| MVP scope / descope closure | 35% | 30% | ↑ |
| VAPT / launch readiness | 40% | 45% | → |
| R1 direction | 10% | 10% | → |
| Tracking / housekeeping | 15% | 15% | → |

**Balance check:** Still almost entirely MVP delivery. R1 gets a token 10% via the bi-weekly brainstorm, but Friday's collision analysis says R1 needs more than that soon — Liting is one designer across CMM and R1, and the October handoff Adrian expects isn't feasible. Not this week's fight, but don't let it stay at 10% past the descope closing out.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Adrian is hard to reach this week and the descope confirmation slips. He's away 5–9 Oct, so a slip compounds.
  - **Mitigation:** Async first — send the decision-doc draft with a direct "confirm or correct by Friday" ask rather than waiting for a meeting slot.
- **Risk:** VAPT window opens today with NCS access unconfirmed, costing days at the front of the cycle.
  - **Mitigation:** Make the access check the first thing Monday. Escalate to Jace same-day if it's not provisioned.
- **Risk:** The R1 timeline collision (Liting single-threaded, October handoff not feasible, silent slip to Q1 2027) goes unaddressed because every week is full of MVP work.
  - **Mitigation:** Put it in front of Adrian this week even if only as a flag: "the October R1 handoff isn't real, here's why, we need to decide consciously." Don't let it slip silently — that's the exact failure mode the analysis names.

**Capacity concerns:**
- If the week compresses, Priority 3 (error-view spec) is the one to slip to early W38 — it has no hard downstream date this week. Priorities 1 and 2 do not have that slack.

---

## Carry-Over from Last Week

**Incomplete items (from W36 review):**
- [ ] Adrian's formal sign-off on the scope cut — **now Priority 1**
- [ ] Minimum MVP error-view scope — **now Priority 3**
- [ ] Day-2 support model sub-component ownership (unowned since 28 Aug) — not a top-3 this week; raise at Jace's readiness meeting
- [ ] Sprint 8's 20 orphaned tickets — route once Sprint 9 scope is confirmed; housekeeping, not top-3
- [ ] R1 artefacts #59 (no design-lead status in 5 weeks) — **decide this week: delegate the chase or drop it as a standing item.** The same 15-min ask keeps not happening.
- [ ] POCDEX "last modified date" R11 rule — needs Rama's formal sign-off; nudge, don't own

**Learnings applied:**
- W36 review: "when a scoping workstream generates a third consecutive 'let's meet again to decide,' put 'cut it' on the table." → Priority 3 is scoped to produce a *spec and an owner*, not another prioritisation meeting.
- W36 review: "name where completed work lands when descoping." → Priority 1's decision-doc explicitly records that the W36 test-case and OTG-mapping artefacts feed the R1 epic.
- 5-week pattern of displaced Priority 1 → this week's Priority 1 is the smallest, most concrete it can be (get one email, send one doc, reset one date), specifically so it's hard to displace.

---

## Success Metrics

**How we'll know this week was successful:**
1. Adrian's confirmation of the employment-lifecycle descope is on record, and Huiting's team knows the 19 Oct date is reset.
2. VAPT week one starts clean — NCS access confirmed, endpoint fold confirmed, no days lost to setup ambiguity.
3. A one-page error-view spec exists with a named build owner.

**Leading indicators to track mid-week:**
- Is the decision-doc drafted and sent by Wednesday? If not, Priority 1 is slipping again.
- Did the AI IDSC approval (~1 Sep expected) actually land? Confirm early — it's a hard launch blocker with no fallback.
- Did NCS PO issuance (W36 plan had it due 4 Sep) get confirmed?
- VAPT interim-report date — still 25 Sep, or slipping further?

---

## This Week's Strategic Skill

**Suggested:** `/decision-doc`

**Why this week:** The employment-lifecycle descope reverses a tracked assumption (end-Sept freeze, 19 Oct UAT), has an external stakeholder still working to the old date, and needs Adrian's confirmation on record. The W36 review explicitly flagged it as needing a standalone decision doc. This is the artefact that turns a hallway agreement into a decision.

**When to run:** Early week, right after (or in parallel with) the Adrian catch-up. Draft it, use it as the confirmation vehicle.

**What you'll get:** A one-page decision log with the rationale, what it reverses, alternatives considered, and a sign-off line for Adrian — something you can send rather than re-explain in three separate conversations.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase (Sprint 9 mid-flight, VAPT window opening), ceremonies, and open risks.*

| When | Skill | Why |
|------|-------|-----|
| Early week | `/decision-doc` | ⚠️ Critical — capture the employment-lifecycle descope with Adrian's sign-off before the 19 Oct testers lose another week |
| Before Adrian catch-up | `/meeting-prep` | Load the R1 collision analysis + descope context so one conversation covers both |
| Mid-week | `/status-update` | Stakeholders (Huiting's team, Imelda) need the descope + reset communicated clearly, not via rumour |
| After Jace readiness meeting | `/meeting-notes-s5` | POC assignments + checklist owners need capturing while fresh |
| Thu/Fri | `/feature-metrics` | Priority 3's error-view — confirm success metrics are defined before it enters a sprint |
| Fri EOD | `/weekly-review` | ⚠️ Critical — non-negotiable. Confirm the Step 5 archive sweep runs. |
| Daily EOD | `/stale-check` | High — trackers are carrying stale sprint/UAT dates; the descope makes several files wrong right now |

**How to use this list:**
- `/daily-plan` and `/sprint-pulse` run every working day — not repeated here.
- ⚠️ Critical items create delivery risk if skipped: the descope decision-doc (testers on a dead date) and Friday's `/weekly-review` + archive.
- Not exhaustive — the minimum set to keep the descope from leaking and the VAPT start from slipping.

---

*Generated: 2026-09-07*
*Next: Run `/daily-plan` each morning to execute against this plan.*
