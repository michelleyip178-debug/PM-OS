---
week: 2026-W39
week_start: 2026-09-21
week_end: 2026-09-25
quarter: Q3 2026
---

# Weekly Plan - Week of September 21, 2026

## TL;DR

- **Top 3:** (1) Reconcile the R1 kickoff date and get Tuesday's HRPS/Cumulus + native-form estimation locked with Rama/Barry/Adrian, (2) close the HRPS/Cumulus discovery loop (API access, ringfencing, eligibility, plus the now-live SJR scope fight) before it silently becomes a fourth unresolved date, (3) name a VAPT triage owner — second week running unresolved.
- **Meeting load:** Not calendar-verified (no Calendar MCP connected). Known fixed points: **Monday** HRPS/Cumulus/NCS discovery call (Rama's invite, covers CMM + SJR/Internal Jobs API), **Tuesday** timeline/estimation delivery to Adrian (moved up from Rama's original Wed noon target).
- **Key milestone:** One written kickoff date, in the risk register, the one-pager, and the reduced-scope brief, by end of Tuesday — not a fourth number in a fourth meeting. SJR scope (discovery-only vs. Compass-native applications for the 2027 cycle) is now an open fight with Adrian, not a settled proposal — needs a real recommendation this week, not a restated position.

---

## Strategic Context

**Quarter Goal:** No formal Q3 OKRs are on file in `context-library/strategy/` (only framework references). Working goal, per the R1 one-pager: ship the reduced-scope Opportunities Marketplace so "officers completing a development action" becomes measurable at all.

**North Star Progress:** Undefined pre-pivot; "Opportunities Discovered per Officer" proposed 18 Sep, pending leadership sign-off. Not yet trackable.

**This Week's Focus:**
Last week ended with three unreconciled kickoff dates (mid-Nov, ~1 Dec, October) and an uncosted scope change (native form vs. FormSG) both flagged as "fix this before the next meeting restates it." Tuesday's estimation delivery to Adrian is the forcing function for both. This week is about closing that loop in writing, not re-deriving it in a fifth meeting.

---

## Top 3 Priorities

### Priority 1: Reconcile R1 Kickoff Date + Lock Tuesday's Estimation Delivery ⭐ Most Important

**Why this matters:**
- Advances: R1 delivery readiness (blocks Sprint 1 planning until resolved)
- Impact: Three live artifacts currently disagree (risk register: ~1 Dec; reduced-scope brief: ~1 Dec baseline; one-pager: October per Rama). Adrian, Rama, and Barry are all working from different numbers right now.
- Risk if not done: This is the exact failure mode last week's retro named twice and then repeated anyway — a decision made in a meeting that doesn't carry forward. A third occurrence stops being a scheduling miss and becomes the team's default failure mode.

**Success looks like:**
- One kickoff date, updated same-day in the risk register (`2026-09-16-W38-r1-risk-register.md` or its successor), the one-pager, and the reduced-scope brief.
- The native-form-vs-FormSG scope change is costed against the 5.5-sprint ceiling and either absorbed or explicitly re-scoped, in writing, coming out of Tuesday's sync.

**Key tasks:**
- [ ] Pull Rama and Barry's man-week estimate across all 5 pillars (STIPs/Gigs, C@G Discovery, Saved Jobs, RBAC, CAM) ahead of Tuesday's delivery (Est: 2 hrs prep) - Rama now committed to Tuesday, not Wed noon as originally asked
- [ ] Cost the native-form decision against the 4.8 sp committed build ceiling; get Adrian's call on absorb vs. re-scope (Est: 2 hrs) - carried from last Tuesday, unresolved for a week
- [ ] Confirm with Adrian whether SJR splits into its own epic (Michelle's proposal, sent 21 Sep) before Tuesday's number is finalized — if it splits, the 18-23.5 man-week R1 estimate needs to reflect SJR's removal or partial removal, not just track it separately (Est: 1 hr, pending Adrian's response)
- [ ] Pick one kickoff date (mid-Nov / ~1 Dec / Oct) with Adrian and Rama, then update all three source docs same day (Est: 1.5 hrs)
- [ ] Update the risk register's R-11 and A-06 to reflect whichever date wins, plus the HRPS/Cumulus pivot (the current register still shows the pre-pivot Workable architecture) (Est: 1 hr)

**Dependencies:**
- Needs from: Rama Moorthy, Barry Lim - man-week estimate across 5 pillars
- Needs from: Adrian Ang - final call on native-form costing and kickoff date
- Blocks: Sprint 1 scope freeze (WBS 5.1, currently dated 22 Sep in the stale register), grooming, and daily planning for the rest of R1

**Linked to:**
- PRD: [R1 Epic One-Pager](../prds/2026-09-18-W38-r1-epic-one-pager.md)
- Analysis: [R1 Reduced-Scope Feasibility](../analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md)
- Risk register: [R1 Risk Register (Sep 16, pre-pivot — needs update)](../analyses/2026-09-16-W38-r1-risk-register.md)

---

### Priority 2: Close the HRPS/Cumulus Discovery Loop

**Why this matters:**
- Advances: R1 scope validity for Mainstream Jobs — this gates whether Mainstream Jobs (internal, secondments) can be in R1 at all
- Impact: Last Friday's squad sync disproved the Careers@Gov assumption the whole reduced-scope brief was built on. Until Lee Koon TEU and NCS answer the open questions, internal-job support is an open call, not a decision, per the HRPS open-questions doc.

**Success looks like:**
- Written answers (or a written "still unknown, here's the fallback") on: API scope (does it return C@G-only or all jobs), where the filter lives, and whether an external system can determine officer eligibility for a specific Internal Job Market posting.
- A confirmed fallback plan if ringfencing/eligibility can't be answered in time — don't let this become the fourth unresolved date.

**Key tasks:**
- [ ] Attend Monday's HRPS/Cumulus/NCS discovery call (Rama's invite, covers CMM integration + SJR/Internal Jobs API) — cancelled own separate Cumulus invite to piggyback on this one; discovery questions doc from Rama ready going in (Est: 1.5 hrs)
- [ ] Follow up with Lee Koon TEU on the 13 HRPS questions (API scope, ringfencing, Internal Job Market structure) — due 23-24 Sep per Thursday's action items (Est: 1 hr chase + async wait)
- [ ] Send the NCS questions (API spec, filter configurability, CR scope) if not already sent (Est: 1 hr)
- [ ] Decide, in writing, whether Mainstream Jobs discovery stays in R1 scope or gets deferred, based on what comes back (Est: 1 hr, contingent on responses landing this week)
- [x] **SJR scope answered (21 Sep)** — replied to Adrian: SJRs sit solely in OTG because HRPS/Cumulus can't handle the exercise cycle or login friction today; proposal is to pull SJRs from OTG into R1 for the 2027 cycle, push BOs/DevOps toward a FormSG-with-CV-upload apply flow (removes the re-login friction Adrian flagged), and surface full SJR support as its own epic rather than folding it into core R1 scope. Awaiting Adrian's response.
- [ ] **New:** Get BO/DevOps buy-in on switching SJR's apply flow to FormSG with CV upload — this is a new ask separate from the HRPS/Cumulus/NCS technical discovery track and needs its own owner and timeline (Est: 1 hr to scope who owns this ask)

**Dependencies:**
- Needs from: Lee Koon TEU (HRPS) - API and eligibility answers, now also whether HRPS/Cumulus can accept a visiting-applicant record or relay (Path A vs. B in the handover brief)
- Needs from: NCS - API spec and CR feasibility
- Needs from: Adrian Ang - confirm SJR-as-own-epic proposal before Tuesday's estimate locks
- Needs from: BOs/DevOps - buy-in on switching SJR to FormSG-with-CV-upload apply flow
- Blocks: Priority 1's scope reconciliation — if SJR splits into its own epic, Tuesday's estimate needs to reflect that

**Linked to:**
- Decision doc: [HRPS Internal Jobs API — Open Questions](../decisions/2026-09-18-W38-hrps-internal-jobs-api-open-questions.md)
- Slack reply: [SJR Scope Reply to Adrian (sent)](../slack-messages/2026-09-21-W39-sjr-scope-reply-to-adrian.md) — resolves the open pushback from today's thread debrief
- Decision doc: [SJR To-Be Handover Brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md) — separate track, same HRPS/Cumulus dependency; Path C (manual bridge) is the likely answer to Adrian's 2027-cycle concern
- Meeting notes: [R1 Scope Alignment Thread Debrief](../meeting-notes/2026-09-21-W39-r1-scope-alignment-cumulus-otep-thread.md) — confirms Adrian's SJR pushback is still open, plus 7 other scope areas (CAM, Opportunities, CMM, VAPT, timeline)
- Slack reply: [SJR Scope Reply to Adrian](../slack-messages/2026-09-21-W39-sjr-scope-reply-to-adrian.md) — do not send until the dual-source-vs-manual-bridge sizing is done

---

### Priority 3: Name a VAPT Triage Owner (Second Week Running)

**Why this matters:**
- Advances: MVP launch readiness (24-25 Nov gate) — this is a hard dependency, not R1 scope, but it's blocking the same engineering pool R1 needs starting ~Dec
- Impact: Business Owner Christopher Woo has flagged needing a named technical triage lead. No owner named yet.
- Risk if not done: This is the second consecutive week this priority has carried over with no owner. If it slips a third week, it starts to threaten the 24-25 Nov MVP launch gate that R1's own kickoff timing depends on.

**Success looks like:**
- A named VAPT triage engineer, confirmed with Jace Tan and Jobelle, not just flagged again in Friday's daily plan.
- CIE PM vacancy status checked — escalated if still open.

**Key tasks:**
- [ ] Escalate directly to Adrian Ang and Barry Lim that this is now a 2-week-old open item with no owner (Est: 30 min)
- [ ] Get a named triage engineer confirmed this week, not carried a third time (Est: 1 hr, dependent on Barry/Adrian response)
- [ ] Get Barry Lim's VAPT scoping/timeline answer — flagged in today's thread as still outstanding; Adrian's explicit concern is that if VAPT takes 6 weeks, it has to be planned into the timeline and scope reduced accordingly, so this now feeds Priority 1's Tuesday estimate too (Est: 1 hr, dependent on Barry)
- [ ] Check status of the CIE PM vacancy escalation — confirm whether it happened last week or still needs to (Est: 30 min)

**Dependencies:**
- Needs from: Adrian Ang, Barry Lim - name the owner
- Needs from: Barry Lim - VAPT scoping/timeline, specifically whether it's a 6-week item that needs to be built into the R1 timeline
- Blocks: VAPT remediation timeline (Stream 3.0, EDC 13 Nov), MVP launch gate confidence, and now Priority 1's Tuesday estimate if VAPT scope affects the timeline

**Linked to:**
- Risk register: [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-03, Stream 3.0)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| R1 Opportunities Marketplace (Reduced Scope) | In Review (reduced scope aligned with Adrian/Eng) | Estimation locked, one kickoff date confirmed | Tuesday delivery from Rama/Barry; native-form costing decision |
| CareerCompass MVP | Delivered (per 13 Sep PRD) | Launch hardening through 24-25 Nov gate | VAPT triage owner named; monitor for R1 engineering-pool conflict |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | HRPS/Cumulus/NCS Discovery Call (via Rama's invite) | CMM integration + SJR/Internal Jobs API discovery | Y - Rama's discovery questions doc, plus fold in SJR Path A/B questions |
| Tue | R1 Timeline/Estimation Delivery (Rama, Barry → Adrian) | Lock man-week estimate across 5 pillars incl. native-form cost and SJR scope call | Y - pull latest numbers before the sync; SJR scope and Barry's VAPT input both need to land before this |
| Wed–Thu | HRPS/Cumulus follow-up (Lee Koon TEU, NCS) | Get remaining API/eligibility answers not resolved Monday | Y - open-questions doc ready to send |
| Fri | Weekly review + `/stale-check` | Close the loop on this week's reconciliation | N |

**Meeting load:** Not calendar-verified — no Calendar MCP connected. Last week ran 12+ meetings; if this week tracks similarly, treat it as Heavy and protect Priority 1's prep time deliberately rather than assuming it'll fit around whatever gets booked.

**Deep work capacity:** Not calculated — calendar not connected.

**Protected block this week:** **Tuesday 9-11am, before the estimation sync — no meetings.** Last week had no protected thinking block at all (the review shows the week was fully consumed by scoping sessions and reactive pivots), and this is the second time in two reviewed weeks that's been true. This is not a soft suggestion this time: block it on the calendar directly, because Tuesday's prep (pulling the 5-pillar estimate, costing the native-form change) is exactly the kind of work that gets steamrolled by the next ad-hoc scoping call if it isn't protected in advance.

---

## Strategic Pillar Balance

No formal strategy pillars defined in `context-library/strategy/`. Rough allocation by workstream this week:

| Workstream | This Week's Time | Last Week | Trend |
|--------|------------------|-----------|-------|
| R1 scope/estimation reconciliation | ~50% | ~40% (scoping sessions) | ↑ Increasing |
| HRPS/Cumulus discovery | ~25% | New this week (started Fri) | ↑ New |
| VAPT/CIE ownership gaps | ~15% | ~15% | → Steady, unresolved |
| Other (reactive) | ~10% | ~35%+ | ↓ Decreasing, if this week holds |

**Balance check:**
Last week's time went disproportionately to reactive re-scoping (16 and 7 new decisions across two sessions). This week deliberately front-loads the reconciliation work so it doesn't happen live in a meeting again — same total effort, moved earlier and made explicit.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Rama/Barry's Tuesday estimate slips or arrives without the native-form cost included.
  - **Mitigation:** Confirm the native-form ask is explicitly in scope for Tuesday's delivery before the sync, not after.
- **Risk:** Lee Koon TEU / NCS don't respond by 23-24 Sep as committed.
  - **Mitigation:** Have a fallback answer ready — defer Mainstream Jobs discovery to R2 rather than let it sit as a fourth unresolved item.
- **Risk:** VAPT triage ownership gets flagged a third time without resolution.
  - **Mitigation:** Escalate directly and explicitly this week rather than re-listing it in Friday's daily plan again.

**Capacity concerns:**
- If Priority 2's HRPS/Cumulus answers don't land this week, Priority 1's kickoff-date reconciliation may need to proceed on a "best current assumption, revisit if HRPS answers change it" basis rather than waiting. Flag this explicitly rather than letting the date slip untracked again.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] VAPT triage owner + CIE PM vacancy escalation - carried 2 weeks now, addressed in Priority 3
- [ ] Native-form scope change costing - carried from Tuesday's roadmap session, addressed in Priority 1
- [ ] CV retention policy, async ZIP export confirmation - deprioritized twice by the HRPS pivot; not in this week's top 3, flagging here so they don't silently drop a third week
- [ ] 100-VU baseline results + named VAPT triage engineer from Friday's Perf Testing Review - outcome not yet captured in this workspace; check before assuming closed

**Learnings applied:**
- Decisions and date corrections getting stuck in the meeting where they were said → this week's Priority 1 explicitly requires same-day multi-doc updates, not just a decision.
- 9/12 and 4/8 action items left unowned last week → every task above has a named owner or explicit dependency, not just an action.

---

## Success Metrics

**How we'll know this week was successful:**
1. One kickoff date exists across all R1 planning docs, updated the same day it's decided - not three numbers in three docs.
2. HRPS/Cumulus questions have written answers or a written fallback decision - not silence carried into next week.
3. A named VAPT triage owner exists and is confirmed with Jace/Jobelle - not a third appearance on a daily plan's heads-up list.

**Leading indicators to track:**
- Whether Tuesday's estimation sync actually produces a written, dated decision (vs. another verbal one that needs re-deriving).
- Whether Lee Koon TEU / NCS respond within the 23-24 Sep window they committed to.

---

## This Week's Strategic Skill

**Suggested:** `/decision-doc`

**Why this week:** Tuesday's estimation sync will produce at least two decisions (final kickoff date, native-form cost absorption) that failed to stick last time they were made verbally. A written decision doc right after Tuesday's sync is the direct fix for the pattern the retro named twice.

**When to run:** Immediately after Tuesday's estimation delivery, before the next meeting has a chance to re-derive it differently.

**What you'll get:** A single dated decision record for the kickoff date and native-form scope call, with rationale and owner, that every other doc can point back to instead of restating.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, open risks, and last week's unresolved items. Run these to keep delivery smooth and prevent gaps from accumulating.*

| When | Skill | Why |
|------|-------|-----|
| Before Tuesday's estimation sync | `/impact-sizing` | Sanity-check Rama/Barry's man-week estimate against the 5.5-sprint ceiling before it's presented to Adrian as final |
| Immediately after Tuesday's sync | ⚠️ Critical — `/decision-doc` | Lock the kickoff date and native-form cost decision in writing same-day, per this week's Priority 1 |
| Wed, once HRPS/NCS responses land | `/decision-doc` | Record the Mainstream Jobs scope call (in vs. deferred to R2) the moment it's made |
| Ongoing this week | ⚠️ Critical — `/stale-check` | VAPT ownership and the kickoff date have both gone stale for 1-2 weeks already; run this daily, not just at week's end |
| Friday | ⚠️ Critical — `/weekly-review` | Confirm this week's reconciliation actually stuck, and that Step 5's archive sweep runs (it was skipped in practice per standing note) |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- `/decision-doc` appears twice deliberately: this week has two separate decisions that need to be captured the moment they're made, not batched at week's end.
- This list is not exhaustive — it's the minimum set to stop this week's known risks (stale dates, unowned action items) from repeating a third time.

---

*Generated: 2026-09-21*
*Next: Run `/daily-plan` each morning to execute against this plan*
