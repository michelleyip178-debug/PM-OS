---
week: 2026-W38
week_start: 2026-09-14
week_end: 2026-09-18
quarter: Q3 2026
---

# Weekly Plan - Week of September 14, 2026

## TL;DR

- **Top 3:** (1) Lock performance-test methodology and execute the 15–17 Sep window, (2) Secure Adrian Ang + Li Ting Kway sign-off on R1 Opportunities Marketplace scope and clear its 2 critical blockers before Sprint 1 freeze, (3) Close VAPT/CIE ownership gaps — name a triage owner and escalate the CIE PM vacancy.
- **Meeting load:** Heavy (VAPT daily syncs + perf testing window + executive review). Priorities held at 3, not 2, because Priority 1 and 3 are largely execution/escalation, not new deep work.
- **Key milestone:** Performance test results from the 15–17 Sep window, which gate the VAPT close and the 24–25 Nov MVP launch.

---

## Strategic Context

**Quarter Goal:** Ship CareerCompass R1 MVP (OTG Pathfinder) — 24–25 Nov 2026 launch, gated by VAPT sign-off (~7 Nov) and this week's performance testing.

**North Star Progress:** POCDEX integration UAT signed off (195/195 test cases). R1 Opportunities scope locked at 5.5 sprints, now past its first planning review synthesis. Sprint 9 active (7–20 Sep), no formal sprint goal set yet.

**This Week's Focus:**
Last week's win was locking the R1 Opportunities scope; this week is about converting that into an executive green light and clearing the two things standing between "planned" and "launch-safe" — the perf test window and VAPT staffing. Everything else is secondary to these two gates.

---

## Top 3 Priorities

### Priority 1: Lock Performance-Test Methodology & Execute (15–17 Sep) ⭐ Most Important

**Why this matters:**
- Advances: MVP launch gate (24–25 Nov), feeds directly into the VAPT sign-off timeline (~7 Nov)
- Impact: This is the hard, dated critical path item carried directly from last week's review. Methodology was still unfinalized as of Friday.
- Risk if not done: The 15–17 Sep window slips, compressing an already tight runway to the 7 Nov VAPT close and putting the Nov launch at risk. Adrian flagged production perf testing may not even be feasible (Compass calls live CSC/Jumpstart systems) — UAT as the substitute environment still needs its load profile defined, unowned as of last week.

**Success looks like:**
- Workload models (Search/Filter/Browse/Pagination, decoupled per last week's decision) benchmarked against public sector tender standards, not arbitrary thresholds.
- Test runs executed 15–17 Sep with results captured.
- UAT-as-prod-substitute load profile question closed with an owner.

**Key tasks:**
- [ ] Confirm final workload model + tender-standard benchmarks with Rama (Est: 2 hrs) - unblocks the test itself
- [ ] Close the UAT-vs-prod load profile ownership gap (Est: 1 hr) - currently unowned per risk log
- [ ] Monitor/support test execution 15–17 Sep (Est: 4–6 hrs across 3 days) - critical path
- [ ] Capture and document results by EOD 17 Sep (Est: 1 hr) - feeds VAPT close

**Dependencies:**
- Needs from: Rama Moorthy — methodology sign-off; Engineering squad — decoupled pipeline execution
- Blocks: VAPT sign-off timeline, Nov launch readiness

**Linked to:**
- Risk log: [risks.md](../../../PM-skills-ALL-1/00-hub/risks.md) — Schedule Risks section
- Weekly review: [2026-09-11-W37-weekly-review.md](../weekly-reviews/2026-09-11-W37-weekly-review.md)

---

### Priority 2: Secure Executive Sign-Off + Clear R1 Marketplace Blockers

**Why this matters:**
- Advances: R1 Opportunities MVP (5.5-sprint scope locked last week), quarter goal of shipping R1
- Impact: The planning review synthesis (13 Sep) rated the PRD "Conditionally Ready" — 2 critical blockers must close before Sprint 1 backlog freeze, or the freeze slips.

**Success looks like:**
- Adrian Ang and Li Ting Kway walked through the 5.5-sprint scope and trade-offs; engineering greenlit for mid-November.
- CV retention/purge policy specified (owner: Michelle + GovTech Security Lead) — currently an open question, not a lifecycle policy.
- Batch ZIP export moved to async design (owner: Tech Lead) — sync version risks 504 timeouts and memory spikes at 80+ candidates.

**Key tasks:**
- [ ] Run the exec walkthrough with Adrian + Li Ting Kway (Est: 1.5 hrs) - unblocks engineering start
- [ ] Draft CV retention/purge policy for GovTech Security review (Est: 3 hrs) - critical blocker #1
- [ ] Get async ZIP export design confirmed with Tech Lead (Est: 1 hr) - critical blocker #2
- [ ] Run `/decision-doc` on Grade Gating (soft warning vs. hard gate) — flagged as the top conflicting perspective (Est: 2 hrs)

**Dependencies:**
- Needs from: Adrian Ang, Li Ting Kway — sign-off; GovTech Security Lead — retention policy review; Tech Lead — ZIP export redesign
- Blocks: Sprint 1 backlog freeze for R1 Opportunities

**Linked to:**
- PRD: [2026-09-14-W38-r1-opportunities-marketplace-planning-review.md](../prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md)
- Review synthesis: [2026-09-14-W38-r1-opportunities-marketplace-review-synthesis.md](../prds/2026-09-14-W38-r1-opportunities-marketplace-review-synthesis.md)

---

### Priority 3: Close VAPT & CIE Ownership Gaps

**Why this matters:**
- Advances: MVP launch gate — procurement and infra access are cleared, but last week's review explicitly flagged that "infrastructure readiness does not equal execution readiness"
- Impact: Without named triage owners, VAPT findings from the 14 Sep kickoff have nowhere to land during a compressed pre-launch window. CIE has no assigned PM, which is an ACSO compliance risk sourced last week.

**Success looks like:**
- A named engineer owns VAPT finding triage (not just POs and AWS access).
- CIE PM vacancy escalated to PSD leadership with a concrete ask, not just flagged.

**Key tasks:**
- [ ] Get a named VAPT triage engineer confirmed from engineering leadership (Est: 1 hr) (BO Christopher Woo requires named technical triage lead)
- [ ] Escalate CIE PM vacancy to PSD leadership (Est: 1 hr) (governance/compliance risk)
- [ ] Partner with Jace Tan on Day 2 operations runbook, target 18 Sep (Est: 2 hrs) (adjacent, same governance gap)

**Dependencies:**
- Needs from: Engineering Leadership (Rama/Barry): dedicated technical triage engineer; Christopher Woo (BO): security criteria alignment; Jace Tan: Day 2 ops partnership; PSD leadership: CIE PM hire
- Blocks: Clean VAPT close, ACSO/GovAssure compliance evidence

**Linked to:**
- Weekly review: [2026-09-11-W37-weekly-review.md](../weekly-reviews/2026-09-11-W37-weekly-review.md) — Week-End Status Board (CIE Governance 🔴 Red)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target Stage by Friday | Action Needed |
|-----|---------------|------------------------|---------------|
| R1 Opportunities Marketplace | Planning Review (Conditionally Ready) | Sprint 1 Ready | Close 2 critical blockers (CV retention, async ZIP export), get exec sign-off |
| CareerCompass R1 (core) | Delivered/MVP scope doc | Launch Readiness tracking | Monitor against 24–25 Nov launch gates |
| Employment Profile Changes | Descoped to R1.x (decision doc drafted 10 Sep) | Confirmed with downstream teams | Continue Rama/POCDEX technical review on API semantics |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | R1 Opportunities Executive Review (1:00 PM, Adrian Ang + Li Ting Kway) | Walk through 5.5-sprint scope, secure greenlight | Y — planning review synthesis is the prep doc |
| Mon–Fri | VAPT daily sync | Track findings, push triage ownership | N |
| Mon–Wed | Performance testing execution (15–17 Sep) | Execute workload model tests, capture results | Y — methodology must be locked before Mon |
| Thu | Day 2 Ops working session w/ Jace Tan | Draft incident escalation/support runbook | Y — SGEMS model as reference |

**Meeting load:** Heavy — daily VAPT syncs + 3-day perf test window + exec review

**Deep work capacity:** Limited, realistically 8–12 focused hours across the week, in fragments

**Protected block this week:** **None named — this is now the 6th consecutive week (W33–W38) without a Wednesday 2–4pm thinking block surviving contact with the week.** This has passed the point of a scheduling fix. Naming a 6th block and hoping it holds is not a plan; the pattern itself needs to go to Adrian or Jace as a capacity conversation this week, tied to a concrete cost: the R1 collision analysis and CV retention policy work above are exactly the kind of work that needs protected time and keeps losing to reactive VAPT/perf-test firefighting instead.

---

## Strategic Pillar Balance

| Pillar | This Week's Time | Last Week | Trend |
|--------|------------------|-----------|-------|
| Launch Readiness (VAPT, Perf Testing) | 45% | ~50% | → Steady |
| R1 Opportunities Delivery | 35% | 30% | ↑ Increasing |
| Governance/Org Risk (CIE, Day 2 Ops) | 20% | 20% | → Steady |

**Balance check:**
Launch readiness still dominates, correctly, given the Nov deadline. R1 Opportunities is rising as it moves from scoping into execution — watch that this doesn't crowd out the perf-test critical path this week.

---

## Risks & Mitigations

**Potential blockers:**
- **Risk:** Perf-test methodology still unlocked going into Monday could push the 15–17 Sep window right.
  - **Mitigation:** Treat methodology lock as a same-day Monday task, ahead of the exec review.
- **Risk:** CV retention policy needs GovTech Security Lead input — external dependency with no confirmed turnaround time.
  - **Mitigation:** Send the draft policy Monday, don't wait for a full round-trip before starting the async ZIP export work in parallel.
- **Risk:** VAPT triage ownership has been an open ask for at least a week (Christopher flagged it last week too) — a second week of no owner is itself a signal.
  - **Mitigation:** If no owner is named by Wednesday, escalate to Adrian directly rather than re-asking Christopher a third time.

**Capacity concerns:**
Heavy meeting week. If the exec review or perf test window runs long, Priority 3 (VAPT/CIE ownership) is the one to compress — it's escalation and follow-up, not net-new deep work, so it degrades better under time pressure than Priorities 1–2.

---

## Carry-Over from Last Week

**Incomplete items:**
- [ ] VAPT technical triage ownership — unresolved since W37, addressed in Priority 3
- [ ] CIE PM vacancy escalation — flagged W37, addressed in Priority 3
- [ ] Day 2 Operations runbook (target 18 Sep, partnership w/ Jace Tan) — carried into Priority 3
- [ ] MVP error-view spec (Priority 3 from W37) — re-sequenced behind data readiness work per Rama; not reactivated this week, watch for it to resurface once VAPT/perf testing clear

**Learnings applied:**
- Procurement/infra readiness ≠ execution readiness (W37 learning) → Priority 3 explicitly targets named human ownership, not just confirming access/POs exist.
- Sequence data/admin work alongside the wider squad's critical path (W37 learning) → error-view spec deliberately left dormant this week rather than restarted in isolation.

---

## Success Metrics

**How we'll know this week was successful:**
1. Performance test results captured from the 15–17 Sep window, benchmarked against tender standards.
2. R1 Opportunities Marketplace has executive sign-off and both critical blockers (CV retention, async ZIP export) are closed or have committed owners and dates.
3. A named VAPT triage owner and a CIE PM escalation path both exist by Friday.

**Leading indicators to track:**
- Wednesday: has a VAPT triage owner been named? If not, escalate per the mitigation above.
- Wednesday: did the protected-time conversation with Adrian/Jace happen?
- Friday: perf test results in hand, R1 exec sign-off status confirmed.

---

## This Week's Strategic Skill

**Suggested:** `/decision-doc`

**Why this week:** The R1 Opportunities Marketplace review synthesis flagged Grade Gating (soft warning vs. hard gate) as a live conflicting perspective between the Skeptic and Engineering reviewers, and it's the review's own recommended next step.

**When to run:** Before Sprint 1 backlog freeze for R1 Opportunities — ideally before Thursday, so the decision doesn't block freeze prep.

**What you'll get:** A documented rationale and trade-off record for the grade-gating policy, so engineering doesn't build against an unresolved fork.

---

## Skills Checklist — Run This Week

*Generated based on sprint phase, ceremonies, and open risks. Run these to keep delivery smooth and prevent gaps from accumulating.*

| When | Skill | Why |
|------|-------|-----|
| Monday, before 1pm exec review | `/decision-doc` (Grade Gating) | Review synthesis flagged this as the top conflicting perspective blocking clean Sprint 1 freeze |
| Monday–Wednesday | `/launch-checklist` | ⚠️ Critical — 24–25 Nov MVP launch is 10 weeks out; VAPT and perf testing are both live gates this week |
| Wednesday (Sprint 9 mid-point) | `/feature-metrics` | Sprint 9 has 4 stories In Progress with no sprint goal set in Jira — confirm success metrics exist before they reach Done |
| Thursday | `/status-update` | Stakeholder-facing update needed on perf test results + R1 exec sign-off outcome |
| Friday EOD | `/weekly-review` | ⚠️ Critical — non-negotiable weekly close |
| Daily EOD | `/stale-check` | ⚠️ Critical — sweep for stale facts, especially VAPT/perf-test status which changes daily this week |

**How to use this list:**
- Daily cadence skills (`/daily-plan`, `/sprint-pulse`) run every working day — not repeated here.
- `/launch-checklist` and `/weekly-review` are flagged ⚠️ Critical because skipping them this week creates direct delivery risk given the Nov launch gate and the archive-step pattern flagged in past reviews.
- This list is not exhaustive — it's the minimum set given this week's VAPT/perf-test/R1-exec-review context.

---

*Generated: 2026-09-14*
*Next: Run `/daily-plan` each morning to execute against this plan.*
