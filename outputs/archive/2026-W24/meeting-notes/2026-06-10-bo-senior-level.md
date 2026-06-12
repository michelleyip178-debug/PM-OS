---
date: 2026-06-10
meeting: "[Bi-weekly] OTEP Product × BO — Senior Level"
duration: 51 min
attendees: GK (CIO / SteerCo), Mark (SteerCo, Jacky/Xian Zhang's boss), Adrian (Product Owner), Victor, Xian Zhang, Imelda, Li Ting (Liting), Thomas, Michelle (PM)
type: Stakeholder review — bi-weekly BO senior check-in
---

# Meeting Notes: BO Senior Level — Wed 10 Jun 2026

## Summary

Productive 51-minute session covering three major product areas: competency matching algorithm, UX research plans, and supervisor dashboard scope. GK pushed for the transition plan to move faster (PS must write to pilot agencies top-down before UX research starts) and wants supervisor gap analytics pulled earlier than currently planned. The policy question around competency gap closure via course completion needs to go to Jamie and Wilson at the CDG office before it can be built.

---

## Decisions Made

**1. Role recommendation algorithm: 5 results max, own agency first**
- Logic: 3 lateral (same grade) + 2 aspirational (one grade up). Own agency opportunities surfaced first within each tier.
- Why: GK's direction — familiar agency context reduces friction; aspirational but not overwhelming.
- Impact: Affects OTEP recommendation engine design. Needs to be spec'd into the matching algorithm story before backlog grooming.

**2. Competency matching: binary presence/absence for MVP**
- No proficiency levels (PL) in MVP. A competency is either present or not. PLs are a later release.
- Why: Migration complexity flagged — current data only has PLs in some fields; adding PL to MVP creates a data quality problem before the system is stable.
- Impact: OTEP-87 competency section scope is confirmed binary. PL migration path is a future open item.

**3. Competency gap closure = self-declared course completion (policy cover needed)**
- An officer completing a course marks the competency gap as closed. Self-declared. No external validation in MVP.
- Why: Pragmatic for MVP; formal accreditation infrastructure doesn't exist yet for pilot.
- Impact: Cannot build this until Imelda takes the question to Jamie and Wilson (CDG office) and gets CDGO/MG19 policy clearance. Build is blocked on policy, not engineering.

**4. Supervisor dashboard: don't show officer activity until culture shifts**
- GK's call: showing supervisors what their officers are browsing or exploring will feel surveilled. Not appropriate until the culture is ready for it.
- Why: Public service culture; psychological safety for officers exploring career options.
- Impact: Supervisor visibility feature remains scoped out of MVP. Confirm this in the scoping gaps tracker.

**5. Explore new roles UX: cascading filter approach**
- Filter sequence: Job family → Job function → Agency. Not the other way.
- Why: Officers think in terms of job family first, then drill down. Agency-first is confusing for lateral movers.
- Impact: Confirm in OTEP-87 ACs and the Explore screen design.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Take competency gap closure question to Jamie and Wilson (CDG office) — need CDGO/MG19 policy clearance before building | Imelda | Before S5 grooming | High — build is blocked |
| Draft transition plan + PS email to pilot agencies | Imelda / Adrian (to escalate) | ASAP — GK says needed before UX research starts | High |
| Recruit UX research participants from 6 pilot agencies via HR directors | Imelda / Li Ting | After transition plan / PS email lands | High |
| Confirm whether supervisor gap analytics can be pulled from R3 to R1 or R2 | Imelda | Before R1/R2 sprint planning | Medium |
| Spec role recommendation algorithm (5 max, 3 lateral + 2 aspirational, own agency first) into backlog story | Imelda | Before next grooming | Medium |
| Confirm binary competency matching scope in OTEP-87 ACs | Imelda | Before S4 planning (Thu 11 Jun) | High |
| Confirm cascading filter order (job family → job function → agency) in Explore UX design | Imelda / Amber | Before S5 design lock | Medium |
| Add proficiency level migration path as a future open item | Imelda | End of week | Low |

---

## Key Insights

**Transition plan urgency (GK's strong signal):**
GK said the transition plan needs to come from the top — the Permanent Secretary must write to pilot agencies before the product team reaches out for UX research. Without that top-down communication, HR directors won't facilitate access to officers. This is a blocker for UX research recruitment, not just a nice-to-have. Imelda and Adrian need to move on this immediately.

**Supervisor dashboard: GK is watching the clock**
GK wants gap analytics (what competency gaps exist across the team) pulled into an earlier release than currently planned (currently R3). He's not asking to show officer browsing activity — he accepts that's not appropriate yet. The distinction is: aggregate gap data (what we're missing) = OK and useful earlier; individual officer activity data = not yet. This is a scoping call that needs to land before R1/R2 planning.

**UX research: the prototype has been tested once**
One session already happened — Monday (2026-06-09), with a Gen Z PM. Initial signal positive. Full study will pull from 6 pilot agencies via HR directors, but that's gated on the PS email landing first.

**Branding / mascot guidance**
GK flagged: not offensive, not racist, not sexist. Plant concept was discussed as a direction. No strong objection. Not a blocker for product work but should inform any design direction for the mascot/brand identity.

**Profile completion gamification**
Simple "congrats" message in MVP when profile reaches completion threshold. No complex gamification. Confirmed as appropriate for MVP stage.

**"Roles ≠ vacancies" — may need an explicit caveat**
The recommend-roles feature surfaces roles an officer might be suited for — not open vacancies. Whether to flag this distinction explicitly in the UI was discussed but not fully resolved. Officers may confuse "recommended roles" with "apply now" opportunities. Flag as an open question for the UX copy and onboarding copy.

---

## Open Questions

- [ ] Supervisor dashboard: pull gap analytics to R1 or R2? — **Owner:** Imelda — **By:** Before R1/R2 planning
- [ ] Proficiency level migration path — what happens to existing data when PLs are added in a later release? — **Owner:** Imelda to spec — **By:** Future (pre-R2)
- [ ] "Roles ≠ vacancies" caveat — should the Explore screen explicitly say these are role types, not open positions? — **Owner:** Imelda / Amber / Xian Zhang — **By:** S5 design lock
- [ ] CDGO/MG19 policy clearance for competency gap closure — timeline from Jamie/Wilson? — **Owner:** Imelda → Jamie/Wilson (CDG office) — **By:** ASAP
- [ ] Transition plan: who drafts the PS email — Imelda, Adrian, or a BO stakeholder? — **Owner:** Imelda / Adrian — **By:** This week

---

## Blockers

**Competency gap closure feature — blocked on policy clearance**
Cannot be built until Imelda gets CDGO/MG19 sign-off from Jamie and Wilson. Engineering and design can be specced but not committed.

**UX research — blocked on transition plan**
Imelda and Li Ting can't recruit from pilot agencies until the PS writes to HR directors. This is a hard dependency, not just a courtesy step.

---

## Next Steps

**Immediate (this week):**

- Imelda to reach out to Jamie and Wilson (CDG office) on competency gap closure policy question
- Imelda and Adrian to discuss ownership of PS email / transition plan draft
- Imelda to add "roles ≠ vacancies" caveat question to the Explore UX open items

**Short-term (before S5 grooming):**

- Supervisor dashboard scope decision: confirm whether gap analytics move to R1/R2 (Imelda)
- Spec role recommendation algorithm into a backlog story with the agreed logic (Imelda)
- Confirm OTEP-87 ACs: binary competency, cascading filter order (Imelda)

**Follow-up:**

- Next bi-weekly BO senior meeting: check back on transition plan progress and UX research recruitment status

---

## Open Items to Add to Tracker

These are new items that should be added to `open-items.md` (assign next available #s):

1. **Policy clearance for competency gap closure** — Michelle to take to Jamie/Wilson (CDG office) before building. Blocked by CDGO/MG19 coverage.

2. **Transition plan + PS email to pilot agencies** — GK flagged as urgent; must land before UX research recruitment begins. Michelle/Adrian to own.

3. **Supervisor gap analytics release timing** — GK wants earlier than R3. Decision needed before R1/R2 planning. Not the same as individual activity visibility (which stays deferred).

---

## Strategic Note for Planning

GK's two strongest signals from this meeting:
1. The transition plan is behind. If the PS email doesn't land soon, UX research slips — and UX research is what validates the pilot. This is on the critical path for go-live quality.
2. He wants supervisor gap analytics sooner. If this stays at R3, there will be pressure to pull it forward. Better to plan for it now and make a deliberate call than get surprised mid-R1 planning.

---

*Created: 2026-06-10 | Source: [Bi-weekly] OTEP Product × BO — Senior Level (51 min)*
*Related: [Sprint 4 Planning Prep](2026-06-11-sprint4-planning-prep.md) | open-items.md #26, #43*
