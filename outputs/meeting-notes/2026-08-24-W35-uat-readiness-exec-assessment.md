---
date: 2026-08-24
week: 2026-W35
source: PM's own written executive assessment of a UAT/cutover readiness sync (not a raw transcript — pre-synthesized by the PM)
---

# Meeting Notes: UAT Readiness Sync — Executive Assessment

**Date:** 24 Aug 2026

**Attendees:** Adrian ANG, Imelda MO, Pow Hwee TAN, Adrian Lo, Christopher WOO, Xian Zhang GUO, Michelle YIP. Referenced but not present: Johnny (POCDEX), Mark.

**Meeting Type:** Daily sync / UAT-VAPT readiness review — same overall readiness push as the [9:30am prep-for-Mark sync](2026-08-24-W35-uat-vapt-readiness.md) logged separately today, but a distinct meeting with a different attendee mix and different focus (governance/traceability, not the Dev-API trust narrative for Mark).

**Duration:** Not specified

**Note on source:** This input is the PM's own executive assessment, not a raw transcript — decisions, risks, and action items below are taken largely as the PM already framed them, with cross-references added against workspace trackers.

---

## Summary

182 of 183 UAT test cases are complete; one CSC SSO test case remains, blocking Phase 2 UAT closure and the planned code freeze/VAPT path. The technical gap is narrow and actively being worked. The larger exposure is governance: UAT evidence is scattered across Jira, personas, and POCDEX test plans with no consolidated coverage view, so stakeholders are being asked to sign off without a clear picture of what's tested versus excluded. SSO troubleshooting ownership needed live clarification mid-meeting (Adrian Lo owns the UAT outcome, Pow Hwee supports escalation), and cutover communications (standby support, recovery time, informing Johnny) are lagging the technical readiness.

---

## Decisions Made

1. **Final SSO UAT case must pass before UAT API cutover proceeds**
   - **Why:** Avoid repeating the prior failed cutover; this is the same sequencing decision Rama/Adrian Ang/Adrian Lo reached in this morning's separate prep sync.
   - **Who decided:** Team consensus, reaffirmed here.
   - **Impact:** Cutover stays gated on this one test case.

2. **Cutover and free-form testing will be kept separate**
   - **Why:** Reduce risk of conflating verification activity with the live switch itself.
   - **Who decided:** Team.
   - **Impact:** Two distinct activities, not one blended step.

3. **SSO ownership clarified: Adrian Lo owns the UAT outcome; Pow Hwee supports escalation/engineering coordination**
   - **Why:** Michelle explicitly challenged the ambiguity ("Why are we differentiating between two people talking about the same issue?") after confusion over who was coordinating the SSO fix.
   - **Who decided:** Forced clarification in-meeting, prompted by Michelle.
   - **Impact:** Single accountable owner for the outcome now named. Worth watching whether this RACI actually holds — the fact it needed live clarification in a daily sync suggests it wasn't previously internalized.

4. **Team will produce a consolidated view of tested items for stakeholders**
   - **Why:** Christopher Woo and others pushed on "what exactly are we signing off?" — no coverage matrix currently exists.
   - **Who decided:** Team, in response to stakeholder pressure.
   - **Impact:** Directly creates the action item below (Michelle: spreadsheet export by lunch next day).

5. **Whitelisting validation is considered covered via existing persona-based testing**
   - **Why:** Team's position, though the supporting evidence isn't yet visible to stakeholders.
   - **Who decided:** Team (Imelda to surface the evidence).
   - **Impact:** This is an assertion, not yet a demonstrated fact — flagged as a risk below, not a closed item.

6. **Profile unification / multi-email / identity management is explicitly out of scope for this UAT closure**
   - **Why:** Acknowledged as larger than MVP, unsolved, needs its own design discussion.
   - **Who decided:** Team.
   - **Impact:** Deferred to a separate deep-dive (Imelda, Adrian Ang + stakeholders) — but no mitigation was discussed for officers who hit these scenarios shortly after launch. This is a live gap, not a closed one.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Investigate and resolve final SSO issue | Imelda Mo's team / Engineering | Not specified | 🔴 High | 🔴 Not Started |
| Provide update on SSO investigation | Imelda Mo / Engineering | By 6pm today | 🔴 High | 🔴 Not Started |
| Verify data before UAT API cutover | Adrian Lo and team | Not specified | 🔴 High | 🔴 Not Started |
| Communicate cutover plan and support expectations to Johnny | Adrian Ang / delivery team | Not specified — flagged as lagging | 🔴 High | 🔴 Not Started |
| Confirm rollback, standby and recovery expectations | Delivery team | Not specified | 🟡 Medium | 🔴 Not Started |
| Share whitelist-related persona references with stakeholders | Imelda Mo | Not specified | 🟡 Medium | 🔴 Not Started |
| Create consolidated UAT coverage view / spreadsheet export of the 183 test cases | **Michelle Yip** | First cut by lunch tomorrow (25 Aug) | 🔴 High | 🔴 Not Started |
| Review potential UAT gaps once export is available | Christopher Woo and stakeholders | After export lands (25 Aug) | 🟡 Medium | 🔴 Not Started |
| Deep dive on profile unification / multi-email identity handling | Imelda Mo, Adrian Ang, stakeholders | Not specified — separate track | 🟡 Medium | 🔴 Not Started |

**Notes:**
- Several items above have no stated due date. Recommend scheduling within 48 hours where not already gated by the SSO fix or tomorrow's export.
- The Michelle-owned export is the highest-leverage item here — it directly unblocks the "what are we signing off on" question Christopher Woo raised, and gates his follow-up gap review.

---

## Key Insights & Quotes

**Governance framing, not feature framing:**
- Christopher Woo, repeated pointedly: *"What exactly are we signing off?"* — this is the crux of the meeting's real risk. Not "is it tested" but "can anyone currently prove it's tested."
- The team's own read: *"The issue is not that testing wasn't performed. The issue is that the evidence trail is weak."* Test cases are split across Jira items, personas are stored separately, POCDEX test plans are separate again — no single artifact ties requirement → story → test case.

**Ownership ambiguity surfaced live:**
- Michelle's intervention (*"Why are we differentiating between two people talking about the same issue?"*) forced a RACI clarification that arguably should have already existed going into a sign-off-adjacent meeting.

**Identity model risk, acknowledged but unmitigated:**
- Multi-email accounts, double-hatting, employment transfers, NRIC-based identity — everyone agrees this is real, unsolved, and bigger than MVP. No near-term mitigation was discussed for officers who hit these scenarios shortly post-launch, which is a gap worth carrying forward even though it's correctly out of scope for this specific UAT closure.

**Test representativeness, unexamined:**
- Confidence rests on 21/22 personas plus whitelist testing, but the meeting didn't address whether those personas reflect real production complexity (unusual employment histories, agency transfers, dual appointments). This wasn't raised as a live question in the meeting — it's the PM's own observation, flagged here as worth raising, not yet asked of the team.

---

## Open Questions

- [ ] Has Johnny actually been informed of the cutover plan, and what standby support does he need? — **Owner:** Adrian Ang / delivery team — **By:** Before cutover
- [ ] Does whitelist-based persona testing genuinely cover the scenarios stakeholders are asking about, or does the evidence just need better presentation? — **Owner:** Imelda Mo — **By:** When persona references are shared
- [ ] What's the concrete Day-2 operating model (cutover ownership, rollback support, escalation path, monitoring) once VAPT and launch land? — **Owner:** Not yet assigned — **By:** Not specified, flagged as a gap the meeting didn't resolve
- [ ] Do the 21/22 test personas represent real production complexity (agency transfers, dual appointments, unusual employment histories)? — **Owner:** Not yet assigned — **By:** Not specified

---

## Blockers

1. **Final CSC SSO UAT test case unresolved**
   - **Blocked by:** Mission-dependent SSO failure — inconsistent across browser (Edge vs. Chrome) and environment/mission, suggesting configuration complexity or environment-specific defects rather than a single root cause.
   - **Impact:** Blocks Phase 2 UAT closure, code freeze, and the VAPT timeline if unresolved.
   - **Resolution:** Engineering actively investigating; reproducible, simulable across environments; update expected by 6pm today.

2. **UAT evidence is fragmented across three separate systems (Jira, personas, POCDEX test plans)**
   - **Blocked by:** No consolidated coverage artifact currently exists.
   - **Impact:** Stakeholders (Christopher Woo specifically) cannot currently answer "what are we signing off on," which risks becoming a governance/audit issue during or after sign-off.
   - **Resolution:** Michelle's spreadsheet export (due lunch tomorrow) is the direct fix in progress.

3. **Rollback/cutover procedures not fully rehearsed**
   - **Blocked by:** Prior cutover rollback took ~3 hours; recovery windows and support expectations haven't been formally communicated.
   - **Impact:** Operational risk at cutover time, separate from the SSO technical blocker.
   - **Resolution:** Delivery team to confirm rollback/standby/recovery expectations (action item above).

---

## Timeline Risks

- **TIMELINE RISK: VAPT timeline depends on the SSO fix landing without slipping.** No hard date given for SSO resolution beyond "update by 6pm today" — if the fix takes longer than a day or two, it directly threatens the code-freeze → VAPT sequencing the team is currently counting on. Worth tracking against the 7 Sep VAPT start referenced elsewhere in this week's tracking ([`open-items.md` #39](../../PM-skills-ALL-1/00-hub/open-items.md)).
- **TIMELINE RISK: The ≥25 additional UAT scenarios POCDEX recommended on 11 Aug (multi-hatting, secondment, email change, NPL, missing mappings, terminated officers) still have no owner or date**, per [`open-items.md` #55](../../PM-skills-ALL-1/00-hub/open-items.md). This meeting's "UAT coverage isn't traceable" finding and Christopher Woo's "what are we signing off on" question are the same underlying gap surfacing again — not a new problem, but fresh evidence the existing #55 gap is now visible to stakeholders outside the delivery team, which raises its urgency.

---

## Next Steps

**Immediate (today, 24 Aug):**
- Engineering continues SSO investigation, update by 6pm
- Verify data before cutover (Adrian Lo)
- Share whitelist persona references (Imelda)

**Tomorrow (25 Aug):**
- Michelle delivers first-cut consolidated UAT coverage spreadsheet by lunch
- Christopher Woo and stakeholders review it for gaps

**Ongoing, no fixed date:**
- Cutover/rollback communications to Johnny and delivery team
- Profile unification / multi-email identity deep-dive (separate track from this UAT closure)

**Follow-up Meeting:**
- Not explicitly scheduled in this input — presumed continuation of the daily sync cadence until SSO clears.

---

## Context for Future Reference

**Relates to:**
- [`open-items.md` #55](../../PM-skills-ALL-1/00-hub/open-items.md) — POCDEX assessed current UAT coverage as insufficient back on 11 Aug and recommended ≥25 additional scenarios, still unowned. This meeting's traceability/governance concern is the same gap resurfacing with a stakeholder audience now watching it directly, not a new finding.
- [2026-08-24 9:30am UAT/VAPT readiness sync](2026-08-24-W35-uat-vapt-readiness.md) — same day, overlapping topic (SSO, cutover sequencing) but a different meeting, different attendee mix, and a different lens (trust-with-Mark narrative vs. governance/traceability here). Keep as separate records; don't merge without confirming they're not actually the same session under two accounts.
- The Core UAT traceability work already done this week ([2026-08-24-W35-otep-uat-traceability-matrix.md](../analyses/2026-08-24-W35-otep-uat-traceability-matrix.md)) is directly relevant groundwork for tomorrow's spreadsheet export — it already has the fold-in/subsumed-coverage verification methodology this export will need for Pathfinder and Core.

**My blunt read (per the PM's own framing, retained here):** the project is operationally close to VAPT-ready. The real risk isn't the SSO bug, it's whether the team can prove coverage, document exclusions, and show cutover/rollback readiness before someone outside the delivery team asks the same question Christopher Woo just did. Prioritize, in order: UAT coverage traceability, an explicit list of known non-tested scenarios, identity/unified-profile risk framing, and cutover/rollback communications.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original executive assessment as provided</summary>

Provided directly by the PM as a pre-written executive summary — full text preserved in the source conversation, not duplicated here to keep this file a reasonable size.

</details>
