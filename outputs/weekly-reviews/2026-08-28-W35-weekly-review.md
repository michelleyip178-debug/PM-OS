---
week: 2026-W35
week_start: 2026-08-24
week_end: 2026-08-28
quarter: Q3 2026
---

# Weekly Review - Week of August 24, 2026

## TL;DR

- **The plan and the week diverged hard.** The W35 plan's Top 3 (R1 artefacts #59, Sprint 8's 20 orphaned tickets, CAM gaps) were all low-urgency tracking items. The week was actually consumed by SSO failure recovery, POCDEX Day-2 scoping to a hard 28 Aug deadline, and MVP launch-readiness planning — none of which were in the plan.
- **Biggest win:** turned the POCDEX Day-2 problem from a vague 82-case list into a structured proposal — 3 priority groups, ~11-case BO cut of 18 runnable cases, a decision-ownership table, and a JAM agenda aligned across three Confluence pages. This is the item that unblocks engineering sizing before VAPT eats capacity.
- **Biggest challenge:** the programme's failure mode shifted from delivery to coordination overload. Two exec meetings (MVP Timeline Planning, Squad Sync) independently concluded the same thing — MVP is nearly feature-complete, but Sep–Nov bandwidth across VAPT + Day-2 + employment changes + CAM + CMM is unresolved.
- **SSO:** failed its final UAT case (24 Aug), was the dominant risk all week, then recovered — dev-validated fix deployed to UAT, and **the SSO UAT test passed with BO sign-off on 28 Aug.** The week's biggest red risk closed by Friday.
- **Completion vs plan:** ~1 of 3 planned priorities meaningfully touched (Priority 2, partially). The other two were displaced by genuinely more urgent work — but that's now the 4th consecutive week the same pattern has repeated.
- **New workstreams landed on the PM this week:** data classification inventory, Day-2 support model draft, common-user-scheme (AGD/MTI/MDDI) investigation, test-case rationalisation + hypotheses for a Tuesday WD deadline. (Lifecycle prioritisation itself moved to Imelda.)

---

## Strategic Progress

**Quarter Goal:** MVP go-live **targeted 24–25 Nov 2026** (Adrian Ang, confirmed 25 Aug; VAPT sign-off ~7 Nov). Timeline history: 16 Oct → early Nov (PS/DS 7-week delay, approved 18 Aug) → 24–25 Nov. Gated by VAPT sign-off, SSO closure, AI IDSC approval (~1 Sep), NCS PO (by 4 Sep), and Day-2 readiness. Hub trackers (`sprint-status.md`, `risks.md`, `tasks-backlog.md`, `open-items.md`) corrected to 24–25 Nov in this week's stale-check.

| Goal | Start of Week | End of Week | This Week | Status |
|------|---------------|-------------|-----------|--------|
| MVP launch readiness | Feature-focused | Operationally framed (go-live checklist, Day-2 model, risk assessment started) | Meaningful framing shift | ⚠️ On track but bandwidth-constrained |
| UAT closure | 19 of 183 open (22 Aug snapshot) | Down to ~1 item + SSO; sign-off email in draft | Advanced | ✅ Near closure |
| SSO resolution | Failed final UAT case (24 Aug) | **UAT test passed, BO signed off (28 Aug)** | Recovered from red to green in one week | ✅ Resolved |
| Employment lifecycle (Day-2) | Vague 82-case list, no owner | 3 priority groups, ~11-case cut, JAM aligned; prioritisation owned by Imelda, still pending | Structured, not decided | 🟡 Progressing |
| R1 artefacts (#59) — W35 Priority 1 | In progress, mid-Sept target | No status update obtained this week | No movement | ⚠️ Stalled |

**Velocity check:**
- MVP is close to feature-complete; the risk is now execution bandwidth, not build progress.
- Two exec sessions this week named the same top-3 threats: Day-2 not operationally ready, VAPT remediation consuming enhancement capacity, unresolved resource contention. No decision framework for the contention was produced.
- **Assessment:** SSO validation is done (BO-signed 28 Aug), clearing the week's biggest blocker. The remaining critical path is code freeze (28 Aug) → VAPT kickoff (7 Sep) → AI IDSC (~1 Sep) → VAPT sign-off (~7 Nov) → launch 24–25 Nov. On track only if the coordination problem gets an owner and a model.
- **Load check:** the W35 meeting-cleanup counted 17 open action items on Michelle across the four 27–28 Aug meetings, plus a multi-part deliverable due Tuesday. Several launch-critical items (data inventory, Day-2 draft, mailbox validation) have no date. Next week's plan needs to put real dates on these and get a co-owner for the SSO coordination so it doesn't compete with the WD prep.

---

## Top 3 Priorities Review

### Priority 1: Track R1 Planning Artefacts (#59) Toward Mid-Sept Grooming

**Planned:** Light-touch check-in with the designer/design lead; confirm in-progress status and a realistic delivery estimate against mid-September grooming.

**Actual:** No status update obtained. The Monday daily plan carried it as Today's Three #1; it does not appear in any meeting note or daily plan after Monday. Displaced by SSO and POCDEX work.

**Status:** ❌ Not started

**Learning:** This is the 3rd consecutive week #59 has been a named priority with no confirmed status. The W34 review explicitly flagged that "an item can resolve and still go untracked for a week if nobody explicitly confirms it" (the PS/DS miscount). Same risk here — except #59 may be genuinely slipping, not silently resolved. A 15-minute direct message to the design lead was the whole ask, and it didn't happen four weeks running. That's a signal the item either isn't actually a priority or needs to be delegated to someone who will chase it.

---

### Priority 2: Confirm Sprint 8's 20 Orphaned Tickets Roll Into Sprint 9

**Planned:** Explicit confirmation that all 20 open Sprint 8 tickets have a named destination (Sprint 9, closed, or deprioritised); the 6 WOG AD/auth tickets specifically reconciled as hygiene closes vs real work.

**Actual:** Raised at standup Monday, Tuesday, and Wednesday (all three daily plans list it). The Wednesday protected focus block was nominally for this. No meeting note confirms a resolved destination — the item shows up as "raise it again" each day, never as "closed."

**Status:** 🟡 Partial — surfaced repeatedly, not resolved

**Key outcome:** Kept visible; the team is aware. But "kept visible" for a full week without a decision is the exact pattern the W34 review warned about.

**Learning:** Raising something at three consecutive standups without it resolving means standup isn't the right venue — it needs a 15-minute async triage with Rama/Léo/Thomas, or a direct decision from Adrian. Repeating the ask isn't the same as escalating it.

---

### Priority 3: Resolve CAM Integration's Case-Linkage and PDPA Gaps

**Planned:** Identify who owns the Ops Portal case-generation decision and raise it; flag the PDPA/personal-data-cleanup gap to compliance; update the CAM epic Decision Tracker.

**Actual:** No CAM work appears in any daily plan or meeting note this week. Overtaken entirely. The one CAM-adjacent outcome: the MVP Timeline Planning meeting formally decided **CAM is out of MVP, targeted for R1** — which removes the urgency but also means the gaps still aren't closed, just deferred.

**Status:** ❌ Not started (superseded by the R1 deferral decision)

**Learning:** The W34 review predicted this: "CAM is new and needs explicit budget rather than absorbing time unacknowledged... if CAM's asks stall (no response by Wednesday), that's the signal to escalate." CAM got 0% of time this week. The R1 deferral is arguably the right call, but it happened in a meeting, not as a deliberate PM decision to drop the priority. Worth noting that the 20% pillar budget allocated to CAM in the W35 plan went entirely to SSO/POCDEX instead.

---

## What Actually Consumed the Week (Unplanned)

| Workstream | Why it took over | Output |
|---|---|---|
| **SSO failure recovery** | Final UAT test case failed 24 Aug; cross-domain (Compass intranet ↔ CSC external) root cause; dominant programme risk 24–27 Aug | 3-path resolution tracking → converged on a dev-validated fix using standard WOG SSO → deployed to UAT → **SSO UAT test passed, BO signed off 28 Aug.** Red-to-green in one week. |
| **POCDEX Day-2 scoping** | Hard 28 Aug deadline (open-items #60) with Imelda; blocked on the undefined "last modified date" business rule (RAID R11, 3rd+ mention) | Scoping brief for Adrian, 18 runnable test cases → 11-case BO cut, decision-ownership table, JAM agenda aligned across 3 Confluence pages, PRD references stripped on request |
| **MVP launch-readiness planning** | The programme shifted from "can we build it" to "can we launch and operate it" — go-live checklist, Day-2 model, data classification, risk assessment | Structured meeting notes; 5 new PM workstreams identified (lifecycle prioritisation, test rationalisation, common-user-scheme investigation, data classification inventory, Day-2 draft) |
| **VAPT commercials** | POCDEX VAPT decoupled from Compass VAPT (25 Aug); scope expanded to 5 APIs; NCS PO now a dependency | Jace TAN named ITC VAPT coordinator; Jobelle daily tracking; Compass + CAE VAPT start together 7 Sep |

---

## Key Decisions Made

1. **POCDEX annual VAPT decoupled from Compass VAPT** (25 Aug, POCDEX timeline sync)
   - **Rationale:** Preserve the Compass VAPT schedule; avoid a scheduling collision with the annual POCDEX cadence.
   - **Impact:** Compass VAPT now covers 5 POCDEX API endpoints directly — the source of the expanded scope, the NCS commercial approval, and the PO-by-4-Sep dependency.

2. **CAM out of MVP, targeted for R1** (28 Aug, MVP Timeline Planning)
   - **Rationale:** Can't be absorbed into the MVP window alongside VAPT, Day-2, and employment changes.
   - **Impact:** Removes CAM from the Sep–Nov contention set; the case-linkage/PDPA gaps carry to R1 unresolved.

3. **Employment-profile-change work prioritises job-ID / competency / identity-continuity changes** before broader lifecycle coverage (28 Aug, MVP Timeline Planning)
   - **Rationale:** Highest impact on recommendations and user experience; identity discontinuity risks an officer being treated as a new user.
   - **Impact:** Narrows the 82-case scope. Imelda owns the lifecycle prioritisation and BO discussion; Michelle owns test-case rationalisation, the 3 hypotheses, and the AGD/MTI/MDDI common-user-scheme investigation for Tuesday's WD discussion.

4. **Formal data classification exercise required — not inherited from OTG** (28 Aug, MVP Timeline Planning)
   - **Rationale:** Field-level review + Data Office alignment needed; Mark HO expected to require it.
   - **Impact:** New workstream; Michelle supports the field inventory, Jace drives.

5. **Team proposes the Day-2 support model rather than asking stakeholders to define it** (28 Aug, MVP Timeline Planning; echoed in Squad Sync)
   - **Rationale:** Jace's steer — own the operating model, bring a first-cut proposal.
   - **Impact:** Michelle drafts the Day-2 operating model + SLA proposal as discussion starters.

6. **Jace TAN designated ITC VAPT coordinator; VAPT on daily tracking** (25 Aug, programme coordination)
   - **Rationale:** Prevent resource contention with the parallel HR Alchemist VAPT.
   - **Impact:** Jobelle LIM runs daily deadline tracking from 7 Sep kickoff.

7. **Risk register ownership split by domain** (27 Aug, readiness review with Jace) — Product owns Project + Data Security; Engineering owns SSP/Cloud/Infra. R1 direction confirmed: STIP/Gig/SJR opportunity types, tied to the March 2028 OTG vendor contract end. *(Flagged for `/decision-doc` in the W35 cleanup — the R1 STIP/Gig/SJR direction is the roadmap-level piece worth a standalone doc.)*

8. **MVP launch date confirmed: 24–25 Nov 2026** (Adrian Ang, 25 Aug, POCDEX timeline sync) — VAPT sign-off ~7 Nov. Supersedes the "week of 2 Nov" that several trackers still carried; reconciled across the hub in this week's stale-check.

---

## Metrics Movement

| Metric | Start of Week | End of Week | Note |
|--------|---------------|-------------|------|
| UAT test cases open | 19 of 183 (22 Aug snapshot) | ~1 + SSO | Near closure; sign-off email in draft (Imelda) |
| SSO status | 🔴 Failed final UAT case | ✅ UAT test passed, BO signed off (28 Aug) | Week's biggest blocker closed |
| POCDEX Day-2 test cases | 82 raw cases, no structure | 18 runnable → 11-case BO cut, ~50% row cut option defined (41 of 82 rows) | Prioritisation decision still pending (Imelda, for Tuesday) |
| Known Compass cloud VAPT findings | ~44 identified | 80–90% fixed/in progress, complete targeted mid next week | Pre-emptive remediation |
| Confluence pages aligned | 0 | 4 (JAM agenda, Prioritised Scenarios, Employment Lifecycle Day-2, cross-refs) | Plus 2 local analysis docs updated |
| MVP launch date across hub trackers | "week of 2 Nov" (stale in 4 files) | 24–25 Nov 2026 (reconciled) | Stale-check corrected sprint-status, risks, tasks-backlog, open-items #13 |

---

## Top 3 Learnings

### 1. What worked: converting a blocked, vague deliverable into a decision-ready structure

The POCDEX Day-2 work is the model. It started as "82 cases, no owner, blocked on an undefined business rule" and ended the week as a scoping brief framed by officer impact, a severity/frequency-based cut from 18 to 11 cases, an explicit decision-ownership table, and a JAM agenda that three separate Confluence pages now agree with. **Repeat this:** when a deliverable is stuck, the move is to reduce it to "here are the 3–5 calls only you can make," not to keep circling the whole problem.

### 2. What didn't work: raising something repeatedly is not the same as escalating it

Sprint 8's 20 orphaned tickets and R1 artefacts #59 were both "raised" multiple times — at standups, in daily plans — and neither resolved. The W34 review already named "escalate, don't re-ask" as the fix and noted it had never actually been tested. This week it still wasn't. **The change:** when an item survives two consecutive standups unresolved, it comes off the standup agenda and gets a 15-minute async triage with the named decision-owner, or a direct escalation to Adrian. Not a third mention.

### 3. What to change: the weekly plan is not surviving contact with the programme

Four weeks running (W32–W35), the plan's Top 3 has been displaced by genuinely more urgent, genuinely valuable unplanned work — and the displacement has been silent, not a conscious trade. This week the plan's priorities were tracking items (R1 #59, ticket hygiene, CAM gaps) while the real week was SSO recovery, a hard-deadline POCDEX scoping deliverable, and MVP-readiness planning. **The plan was wrong, not the execution.** Next week's plan needs to be built from what's actually on the critical path (Tuesday WD deliverable, Day-2 model, data classification, VAPT prep) rather than from carried-over tracking items — and if a tracking item can't get 15 minutes in four weeks, it should be delegated or dropped, not re-listed.

---

## Next Week Preview

### Top 3 Priorities (Draft)

1. **Test rationalisation + hypotheses + common-user-scheme findings for Tuesday's WD discussion** — the single highest-leverage item on Michelle's plate. ~11–19 representative test cases (~70% coverage), 3 hypotheses framed as "is this the expected officer experience?", and the AGD/MTI/MDDI findings (do MDDI pilot users get different job IDs?). Imelda owns the prioritisation and BO discussion itself — coordinate so the pieces land together. This unblocks engineering sizing before VAPT remediation (~18 Sep) locks capacity.
2. **Code freeze + overall UAT sign-off** — SSO is done (BO-signed 28 Aug); the remaining work is confirming the code freeze landed and supporting Imelda's overall UAT closure/sign-off email. Confirm whether the freeze was gated on SSO or independent.
3. **Data classification inventory + Day-2 support model first draft** — start the field-level inventory (POCDEX / HRPS / Compass-generated / user-generated); draft the Day-2 operating model and SLA proposal as discussion starters. Both are launch-gating and both are on Michelle.

> Run `/weekly-plan` to formalise these.

### Key Meetings Next Week

- **Monday:** VAPT walkthrough (extended session) — scope / system design / quotation alignment / timeline, before 7 Sep kickoff
- **Tuesday:** WD employment-profile-change discussion — land BO prioritisation, validate the 3 hypotheses
- **Ongoing:** Daily VAPT tracking begins toward 7 Sep

### Items to Unblock

| Item | Blocked Since | Blocked By | Action Needed |
|------|---------------|------------|---------------|
| R1 artefacts #59 status | ~3 weeks | Design lead — no status obtained | Direct message Monday, or delegate the chase to someone who will |
| Sprint 8's 20 orphaned tickets | Sprint 8 close (23 Aug) | No named decision-owner engaged | 15-min async triage with Rama/Léo/Thomas, off the standup agenda |
| POCDEX "last modified date" mechanism (RAID R11) | 25 Aug+ | Compass engineering / architecture — no owner | Confirm at the JAM: decision live, or named owner + date |
| Day-2 support model ownership | 28 Aug | Rama/Adrian Lo — sub-components unowned | Get a named owner for L1 triage, mailbox, roster, engineer rotation |
| Resource-allocation model (Sep–Nov contention) | 28 Aug | No owner assigned | Raise with Rama + Jace — this is the meeting's own named top-3 slip risk |

**Priority unblocks:**
1. Get the employment-lifecycle prioritisation done before Tuesday — everything downstream depends on it.
2. Confirm SSO validation result today; know whether code freeze is contingent on it.

---

## Open Conflicts to Resolve (from W35 cleanup)

1. **Lifecycle prioritisation owner** — Squad Sync tracker says "Michelle, Adrian, team"; the MVP Timeline Planning note (as revised) says Imelda owns prioritisation, Michelle owns test rationalisation. Confirm the split with Imelda before Tuesday so both walk in with the right pieces.
2. **"Not a VAPT blocker" vs "launch-critical gap"** for Day-2 profile-change handling — the weekly digest classifies it one way, MVP Timeline Planning treats it as launch-critical. Mark HO is challenging the classification. Bring a written blocker-vs-gap rationale to the leadership check-in.
3. **Sprint 9 scope** — trackers say "Sprint 9 starts w/c 31 Aug"; both exec meetings imply MVP is feature-complete with no dev scope left. Confirm at standup whether Sprint 9 has real dev scope or is now the VAPT/UAT window — the 20 orphaned tickets' destination depends on it.
4. **"Who decides" governance pattern (RAID R13)** — surfaced in every meeting this week, now 5th+ consecutive day. Mark HO's blocker challenge is this pattern at leadership level. Raise directly with Adrian, don't log a 6th time.

---

## Metrics to Monitor Next Week

- **NCS PO progress** — quotation due 28 Aug, PO projected 4 Sep. Flag if the quotation doesn't land; 4 Sep is the real deadline, not the 7 Sep VAPT start. (With SSO closed, this is now the top open critical-path risk alongside AI IDSC.)
- **AI IDSC review** — WD review expected ~1 Sep. Hard launch blocker, single checkpoint, no fallback. Flag if it hasn't started.
- **Compass cloud VAPT remediation** — 80–90% done, targeted complete mid next week. Flag if it slips past the code freeze.

---

*Generated: 2026-08-28. Updated same day: launch date confirmed (24–25 Nov), stale-check run (4 hub files corrected), W35 meeting-cleanup conflicts folded in.*
*Data sources: W35 weekly plan, 5 daily plans (Aug 24–28), 16 meeting notes, 11 analysis docs, RAID logs, W35 cleanup*
*Next: `/weekly-plan` for W36. Consider `/decision-doc` for the R1 STIP/Gig/SJR direction.*
