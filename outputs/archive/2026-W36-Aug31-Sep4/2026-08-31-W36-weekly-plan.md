---
week: 2026-W36
week_start: 2026-08-31
week_end: 2026-09-04
quarter: Q3 2026
---

# Weekly Plan - Week of August 31, 2026

## TL;DR

- **Top 3:** (1) Land Tuesday's WD employment-lifecycle discussion — test rationalisation, 3 hypotheses, AGD/MTI/MDDI findings; (2) Confirm code freeze status and support Imelda's overall UAT sign-off; (3) Start the data classification inventory and draft the Day-2 support model/SLA.
- **Meeting load:** Heavy — VAPT walkthrough Monday, WD discussion Tuesday, daily VAPT tracking begins from today.
- **Key milestone:** Tuesday's WD discussion is the single highest-leverage moment this week — it unblocks engineering sizing before VAPT remediation (~18 Sep) locks capacity.

---

## Strategic Context

**Quarter Goal:** MVP go-live confirmed **24–25 Nov 2026** (Adrian Ang, 25 Aug). VAPT sign-off needed ~7 Nov. Gated by: code freeze (this week), VAPT kickoff (7 Sep), AI IDSC approval (~1 Sep), NCS PO issuance (by 4 Sep), Day-2 readiness.

**North Star Progress:** UAT effectively closed (SSO resolved 28 Aug, BO signed off). The programme's live constraint is no longer feature delivery — it's Sep–Nov execution bandwidth across VAPT, Day-2, employment lifecycle, and data classification, none of which have an owner for the underlying resource-contention problem yet.

**This Week's Focus:**
Last week closed the programme's biggest fire (SSO) but confirmed a bigger pattern: four consecutive weeks (W32–W35) the plan's stated priorities got displaced by unplanned, genuinely more urgent work. This week's Top 3 is built directly from what's already on the critical path — not from carried-over tracking items — because that's what actually survived contact last time.

---

## Top 3 Priorities

### Priority 1: Land Tuesday's WD Employment-Lifecycle Discussion ⭐ Most Important

**Why this matters:**
- Advances: MVP launch readiness — Day-2 operational scope
- Impact: Unblocks engineering sizing for employment-lifecycle handling before VAPT remediation (~18 Sep) consumes dev capacity
- Risk if not done: The 82-case Day-2 scope stays unresolved into VAPT crunch, with no room left to size it afterward

**Success looks like:**
- 11–19 representative test cases (~70% coverage) walked through with BOs
- 3 hypotheses framed and validated: "is this the expected officer experience?"
- AGD/MTI/MDDI common-user-scheme findings presented (do MDDI pilot users get different job IDs?)

**Key tasks:**
- [ ] Finalize test-case rationalisation set (Est: 3 hrs) — cut from the 18-case JAM output to the representative subset
- [ ] Write up the 3 hypotheses with supporting scenarios (Est: 2 hrs)
- [ ] Complete AGD/MTI/MDDI common-user-scheme investigation (Est: 2 hrs)
- [ ] Confirm split with Imelda before Tuesday: she owns prioritisation/BO discussion, you own test rationalisation — this is still unreconciled between two trackers (Squad Sync vs. MVP Timeline Planning notes)

**Dependencies:**
- Needs from: Imelda Mo — confirm who owns what walking into Tuesday
- Blocks: Engineering sizing for Day-2 lifecycle work

**Linked to:**
- Open item #60 (POCDEX Day-2 scoping, blocked on "last modified date" rule — 3rd+ consecutive mention, still not escalated to Adrian)
- Analysis: `outputs/analyses/2026-08-29-W35-employment-lifecycle-bo-prioritisation-brief.md`

---

### Priority 2: Confirm Code Freeze + Support Overall UAT Sign-Off

**Why this matters:**
- Advances: VAPT readiness — code freeze is a hard gate before the 7 Sep VAPT start
- Impact: Clears the last procedural blocker before daily VAPT tracking begins

**Success looks like:**
- Explicit confirmation that code freeze landed (was it gated on SSO closure, or independent — this was never confirmed last week)
- Imelda's overall UAT closure/sign-off email sent and acknowledged

**Key tasks:**
- [ ] Confirm code freeze status directly, don't assume it's done because SSO closed (Est: 30 min)
- [ ] Support Imelda's sign-off email — review before it goes out (Est: 1 hr)
- [ ] Confirm Sprint 9's actual scope: live Jira shows Sprint 9 as `future`, dates 6–20 Sep — not "w/c 31 Aug" as hub trackers said. **This week's sprint-container gap (31 Aug–4 Sep) is confirmed intentional, not a planning miss.** Remaining open question is what Sprint 9 covers when it opens 6 Sep — real dev scope or the VAPT/UAT window — since the 20 orphaned Sprint 8 tickets still need a destination there. (Est: 30 min)

**Dependencies:**
- Needs from: Imelda (sign-off email owner), engineering (freeze confirmation)
- Blocks: 20 orphaned Sprint 8 tickets' destination depends on the Sprint 9 scope answer

**Linked to:**
- Open Conflict #3 from W35 cleanup (Sprint 9 scope ambiguity)

---

### Priority 3: Data Classification Inventory + Day-2 Support Model First Draft

**Why this matters:**
- Advances: MVP launch readiness — both are launch-gating and both are on Michelle, confirmed 28 Aug (MVP Timeline Planning)
- Impact: Gives leadership something concrete to react to instead of asking them to define the operating model from scratch

**Success looks like:**
- Field-level inventory started: POCDEX / HRPS / Compass-generated / user-generated data classified
- Day-2 operating model + SLA proposal drafted as a discussion starter (not a finished doc — Jace's steer was "bring a first cut")

**Key tasks:**
- [ ] Start field-level data classification inventory with Jace driving, you supporting (Est: 3 hrs)
- [ ] Draft Day-2 support model: L1 triage, mailbox, roster, engineer rotation ownership (Est: 3 hrs)
- [ ] Get a named owner for each Day-2 sub-component — currently unowned (Est: 1 hr, chase Rama/Adrian Lo)

**Dependencies:**
- Needs from: Jace (data classification lead), Rama/Adrian Lo (Day-2 sub-component owners)
- Blocks: Nothing directly yet, but both are named launch-gates

**Linked to:**
- MVP Timeline Planning decisions #4 and #5 (28 Aug)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| R1 artefacts (#59) | Unknown — no status obtained in 3 consecutive weeks | Status confirmed | Direct message to design lead Monday, or delegate the chase (see Risks below) |
| Ops Portal PRD | Condensed draft (27 Aug) | Stable pending MVP bandwidth resolution | No new action this week — MVP takes priority |
| CAM integration epic | Deferred to R1 (28 Aug decision) | N/A this quarter | Update epic Decision Tracker to reflect the deferral explicitly, close the loop (~30 min) |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | VAPT walkthrough (extended) | Scope / system design / quotation alignment / timeline before 7 Sep kickoff | Y — review NCS PO status, CIE retraining risk with Victor |
| Tue | WD employment-profile-change discussion | Land BO prioritisation, validate 3 hypotheses | Y — Priority 1 deliverables above |
| Daily | VAPT tracking (Jobelle Lim) | Daily deadline tracking toward 7 Sep | N |
| Fri | NCS PO checkpoint (informal) | Confirm PO landed by 4 Sep target | N — just check status |

**Meeting load:** Heavy (VAPT walkthrough + daily tracking + WD session on top of standups)

**Deep work capacity:** Limited — this is a heavy-meeting week, priorities are kept to 3 and scoped tight

**Protected block this week:** None named. **This is the 4th consecutive week (W33, W34, W35, and now W36) where naming a Wednesday 2–4pm block hasn't survived contact with the week** — it was displaced by SSO recovery, POCDEX scoping, and MVP-readiness planning every single time. Re-naming the same block a 4th time is not a plan, it's a placeholder. Two real options: (a) drop the standing block and instead protect time same-day, opportunistically, when a specific priority task needs it, or (b) escalate this to Adrian/Jace directly as a capacity problem — the pattern itself is evidence the role doesn't currently have slack for planned deep work, which is worth naming out loud rather than re-scheduling around.

---

## Strategic Pillar Balance

| Pillar | This Week's Time | Last Week | Trend |
|--------|------------------|-----------|-------|
| MVP launch readiness (VAPT, UAT, code freeze) | ~45% | ~50% | → Steady |
| Employment lifecycle / Day-2 operations | ~40% | ~35% | ↑ Increasing |
| CAM / R1 / tracking items | ~15% | ~15% | → Steady |

**Balance check:**
CAM got 0% of time last week despite a nominal 20% allocation; this week it's cut to a single 30-minute administrative task (closing the Decision Tracker) rather than pretending it competes with MVP and Day-2 work. That's an honest allocation, not a dropped commitment — CAM is formally deferred to R1.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** POCDEX "last modified date" business rule still has no owner — this is the 3rd+ consecutive document naming it, and it blocks Day-2 test case scoping.
  - **Mitigation:** Don't raise it a 4th time informally. Confirm at Tuesday's JAM whether it's a live decision-in-progress or genuinely stalled; if stalled, escalate directly to Adrian this week, not next.

- **Risk:** R1 artefacts (#59) status has now gone unconfirmed for 3 straight weeks despite being a named priority each time.
  - **Mitigation:** This is a delegation problem, not a tracking problem. Either send the direct message Monday and get an answer, or hand the chase to someone else entirely — don't list it as a 4th-week priority if the same 15-minute ask keeps not happening.

- **Risk:** Sprint 9 doesn't start until 6 Sep (confirmed live Jira, `future` state; this week's sprint-less gap is intentional) — none of the 6 WOG AD/auth tickets have been added to it yet.
  - **Mitigation:** Confirm Sprint 9's actual scope once it opens. The 20 orphaned Sprint 8 tickets can't get a destination until that's answered.

**Capacity concerns:**
- Heavy meeting week with two high-stakes sessions (VAPT walkthrough, WD discussion) plus daily VAPT tracking starting. Priority 3 (data classification + Day-2 draft) is the one most likely to get compressed — if it slips, that's an acceptable trade against Priority 1, not a silent failure.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] R1 artefacts (#59) status — 3rd consecutive week unconfirmed. See Risks above.
- [ ] Sprint 8's 20 orphaned tickets — raised 3 consecutive standups, never resolved. Addressed in Priority 2 this week via the Sprint 9 scope question, not by raising it a 4th time at standup.
- [ ] CAM case-linkage/PDPA gaps — superseded by the 28 Aug decision to defer CAM to R1. Not carried forward as an open gap; closed out via Decision Tracker update in PRD Pipeline above.

**Learnings applied:**
- Four weeks running, the plan's priorities got displaced by unplanned urgent work → this week's Top 3 is built from what's already confirmed on the critical path (WD discussion, code freeze, Day-2/data classification), not from tracking items that haven't moved in weeks.
- "Raising something repeatedly ≠ escalating it" (W35 learning) → applied directly to R1 #59 and the Sprint 8 tickets above: each gets one direct action this week, not a re-ask.

---

## Success Metrics

**How we'll know this week was successful:**
1. Tuesday's WD discussion produces a BO-agreed prioritisation and validated hypotheses — not just "was held."
2. Code freeze status and Sprint 9 scope are both explicitly confirmed, not assumed.
3. Data classification inventory has visible started progress and the Day-2 draft exists as a concrete document, even if incomplete.

**Leading indicators to track:**
- NCS PO issuance progress (due 4 Sep — the real near-term deadline, ahead of the 7 Sep VAPT start)
- AI IDSC review status (expected ~1 Sep — hard launch blocker, no fallback if it slips)
- Whether R1 #59 gets an answer by Wednesday (if not, it's a delegation decision, not a 4th re-ask)

---

## This Week's Strategic Skill

**Suggested:** `/decision-doc`

**Why this week:** The W35 review flagged the R1 STIP/Gig/SJR direction (risk register split, tied to the March 2028 OTG contract sunset) as roadmap-level and worth a standalone decision doc — it hasn't been written yet and risks getting lost under this week's MVP/Day-2 load.

**When to run:** After Tuesday's WD discussion clears, before Friday.

**What you'll get:** A durable decision record separating the R1 direction from this week's operational firefighting, so it doesn't need re-deriving later.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, ceremonies, and open risks. Run these to keep delivery smooth and prevent gaps from accumulating.*

| When | Skill | Why |
|------|-------|-----|
| Before Tuesday's WD discussion | `/meeting-prep` | Load context on the 3 hypotheses and AGD/MTI/MDDI findings before walking in |
| ⚠️ Critical — after Tuesday's WD discussion | `/decision-doc` | Capture the BO prioritisation decision while fresh — this is exactly the kind of decision that got made-in-a-meeting and under-documented last week (see CAM/R1 deferral) |
| ⚠️ Critical — end of sprint (Sprint 9 close, if confirmed this week) | `/stale-check` | Confirm Sprint 9 scope answer and Sprint 8 ticket destinations actually moved, not re-flagged as pending, following the exact pattern that failed 3 weeks running |
| Wednesday or whenever code freeze is confirmed | `/status-update` | Communicate code freeze + UAT sign-off status to stakeholders once confirmed |
| ⚠️ Critical — Friday | `/weekly-review` | Close the loop; **explicitly confirm the archive step (Step 5) runs** — it did run for W35 (see `outputs/archive/2026-W35-Aug24-Aug28/`), first time in weeks; don't let it silently lapse again |
| Daily | `/stale-check` | End-of-day sweep given the volume of new workstreams (data classification, Day-2 draft, lifecycle rationalisation) landing this week |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- ⚠️ Critical items create a delivery risk if skipped.
- This list is the minimum set given this week's specific context — not exhaustive.

---

*Generated: 2026-08-31.*
*Note: the old W35 output files (daily plans, meeting notes, slack messages, weekly plan) show as deleted in git status but are duplicated into `outputs/archive/2026-W35-Aug24-Aug28/` — the archive step ran this week, breaking the pattern of it being skipped. Those deletions and the new archive files are still unstaged; consider committing both together so the history isn't split across two states.*
*Next: Run `/daily-plan` each morning to execute against this plan.*
