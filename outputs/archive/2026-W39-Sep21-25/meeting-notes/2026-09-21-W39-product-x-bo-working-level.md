---
date: 2026-09-21
week: 2026-W39
type: meeting-notes
meeting_type: Stakeholder review / risk-calibration session
attendees: Adrian Ang, Jacky Lee, Xian Zhang Guo, WD team, ITC team
topic: OTEP Product x Business Operations Working-Level Meeting
---

# Meeting Notes: OTEP Product x Business Operations Working-Level Meeting

**Date:** 2026-09-21

**Attendees:** Adrian Ang, Jacky Lee, Xian Zhang Guo, WD/BO team, ITC team

**Type:** Internal risk-calibration and expectation-setting session, ahead of Mark's briefing

**Overall health:** 7.5/10 (good risk surfacing and governance, unresolved leadership alignment risk)

---

## Summary

Internal alignment session between WD/BO and ITC before Mark's briefing. Core tension: senior leadership (PS/DS) approved R1/R2 scope at a high level, but detailed technical discovery is surfacing real implementation friction that leadership hasn't seen yet. The meeting made real scope decisions — SJR stays on OTG for 2027, Tips & Gigs routes one-way from OTG to Compass, CMM splits R1 (manual)/R2 (automated) — but flagged that these decisions are individually reasonable while the pattern (deferring complexity to R2 without re-costing R2's total capacity) isn't being named to leadership yet.

**This resolves two open risks tracked since yesterday.**

---

## Key Victories & Scope Clarifications

1. **Simplified architectural philosophy** — prefer "least resource-intensive" operational models over complex technical integrations, as a general principle, not just per-feature.
2. **One-way flow for Tips & Gigs / Opportunities** — instead of bidirectional OTG↔Compass sync, route OTG users into Compass for discovery and application. **This resolves Option 1 vs. Option 2 from yesterday's [OTG/Compass Interim State thread](2026-09-21-W39-otg-compass-interim-state-adrian-thread.md)** — one-way routing is closer to Option 2 (Compass-only) than the cross-platform Option 1, though it doesn't explicitly address the WOG-wide RBAC question (R-14) from that same thread.
3. **SJR scope confirmed off Compass for 2027** — the 2027 SJR exercise stays on OTG, not an R1 dependency. **This resolves R-13** (SJR delivery mechanism, tracked in the risk register since yesterday) — Compass does not build SJR's Creation/Apply. The mechanism question is answered: HR-system-hosted (OTG), not Compass-native.
4. **CMM decoupled into R1/R2** — R1 gets a consolidated competency bank with manual WD approval workflows; R2 gets automated HRPS/Cumulus API synchronization. **This resolves the CMM half of R-15** (CMM/CAM scope conflict) — CMM is now confirmed as real, scoped R1 work, not just a concurrent workstream. The CAM Integration half of R-15 (the slide's "Deferred to R2" claim vs. its status as an R1 pillar in the one-pager) is still unaddressed by this meeting.
5. **Strong governance challenge from Jacky Lee** — consistently pushed the team to separate high-level scope commitments from discovery detail, present recommendations alongside risks, and avoid alarming leadership without concrete mitigations attached.

---

## Major Concerns & Unaddressed Risks

1. **Leadership expectation gap.** PS/DS approved timelines based on high-level scope; delivery certainty is now lower than leadership believes, given discovery findings. Real threat to programme credibility if schedules or features shift without leadership having seen this coming.
2. **R2 "dumping ground" effect.** Technical debt and manual workflows keep getting deferred to R2 (HR integrations, API automation) without re-estimating total R2 team capacity against everything now stacking up there.
3. **Data dependency bottleneck.** Wider cross-agency opportunity discovery on Compass requires expanding officer data permissions (identity, position IDs, supervisor relationships) beyond the 6 pilot agencies — a policy/data-governance dependency that moves slower than engineering. **Directly relevant to R-14** (WOG-wide RBAC proposal) — this names the actual blocker behind that proposal's feasibility, not just the technical RBAC question Rama needs to answer.
4. **Feature-level vs. programme-wide risk framing.** The team keeps treating risks as isolated feature issues (e.g., "Tips & Gigs complexity") instead of framing the systemic discovery uncertainty across the full roadmap for leadership. This is the meeting's central self-critique.

---

## Decisions Made

1. **Tips & Gigs routing: one-way, OTG → Compass.** Avoids two-way data sync. Resolves the OTG/Compass interim-state Option 1 vs. 2 question from yesterday, though not the WOG-wide access question underneath it.
2. **SJR 2027: strictly managed on OTG.** Not an R1 Compass dependency. Resolves R-13.
3. **CMM R1 governance: retain existing WD approval processes and manual workflows.** Confirms CMM is real R1 scope, contradicting its absence from the one-pager and reduced-scope brief — **those documents need updating to include CMM explicitly, not just flag the conflict.**
4. **CMM automation: HRPS/Cumulus API integrations deferred to R2.** Consistent with yesterday's competency discovery session findings (ID strategy, governance model still unresolved — this decision doesn't resolve those, just confirms they're R2, not R1, problems).
5. **Timeline baseline: align external messaging to the latest approved submission target, R1 launch ~Feb-Mar 2027.** **TIMELINE RISK, see below** — this doesn't match the one-pager's "Mid-February 2027" pilot launch target exactly, and doesn't address the still-unreconciled kickoff-date/estimate figures tracked as R-12.

---

## Timeline Risks

**TIMELINE RISK: "R1 launch around Feb-Mar 2027" doesn't cleanly match the one-pager's "Mid-February 2027" pilot launch target**, nor does it engage with R-12's unreconciled kickoff-date and man-week figures (mid-Nov/~1 Dec/October kickoff; 18.0-23.5 mw vs. 18.5-24.0 mw). This meeting picked a timeline baseline for external messaging without visibly reconciling it against the numbers Adrian was working through in today's 11:30am estimation discussion. Worth checking whether these are the same commitment stated two ways, or a third figure now in circulation.

**TIMELINE RISK: R2 capacity was flagged as unre-estimated** (Major Concern #2) despite this meeting adding at least two more things to R2 (CMM automation, HRPS/Cumulus integrations) on top of what was already deferred there (live HRPS/Cumulus API integration for Mainstream Jobs, per the one-pager's existing R2 deferral list). No action item exists yet to actually run that re-estimate — "Quantify R2 capacity impact" is listed but unowned by a specific person beyond "ITC."

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Revise presentation deck ahead of Mark's briefing to explain implementation complexities | Adrian Ang | Not specified | 🔴 High | Not Started |
| Reframe Tips & Gigs proposal around one-way routing and reduced architectural effort | Adrian Ang / ITC | Not specified | 🔴 High | Not Started |
| Detail specific officer/product data fields required beyond the 6 pilot agencies | Xian Zhang Guo / ITC | Not specified | 🔴 High — feeds R-14 | Not Started |
| Socialise cross-agency data-sharing implications with Product and DO teams | WD / Xian Zhang Guo | Not specified | 🟡 Medium | Not Started |
| Validate approved delivery target dates against formal submissions | ITC / WD | Not specified | 🔴 High — directly resolves the Feb-Mar 2027 timeline risk above | Not Started |
| Update presentation slides to distinguish agreed scope vs. discovered implementation details | ITC | Not specified | 🔴 High — directly relevant to the [Scope Slide Staleness Check](../decisions/2026-09-21-W39-r1-scope-slide-staleness-check.md) already in progress | Not Started |
| Quantify R2 capacity impact resulting from newly deferred R1 scope | ITC | Not specified | 🔴 High, currently unowned beyond "ITC" | Not Started |
| Frame programme-level discovery risk and dependency uncertainty for senior leadership | WD + ITC | Not specified | 🔴 High | Not Started |

**Note:** none of the 8 action items have due dates, and several ("ITC," "WD + ITC") don't have a named individual owner — worth tightening both before this list is treated as actionable, especially given the meeting's own critique that risks need concrete mitigations attached, not just named.

---

## Connections to This Week's Threads

- **R-13 (SJR delivery mechanism) — resolved.** SJR stays OTG-hosted for 2027, confirmed not Compass-native. Update risk register to close this out.
- **R-15 (CMM/CAM scope conflict) — partially resolved.** CMM's R1/R2 split is now confirmed and real — the one-pager and reduced-scope brief need updating to include CMM explicitly (currently absent from both). CAM Integration's "Deferred to R2" claim on the scope slide vs. its status as an R1 pillar is still unresolved by this meeting — needs Adrian's direct confirmation still.
- **R-14 (WOG-wide RBAC / Opportunities Module access)** — not resolved, but this meeting names the real blocker: expanding officer data permissions beyond the 6 pilot agencies is a **policy/data-governance dependency**, not just a technical RBAC question for Rama. Worth updating R-14's framing to reflect this — it's broader than "get Rama's technical read."
- **[Scope Slide Staleness Check](../decisions/2026-09-21-W39-r1-scope-slide-staleness-check.md)** — this meeting's action item "update presentation slides to distinguish agreed scope vs. discovered implementation details" is functionally the same fix already flagged in that doc. Worth treating as one workstream, not two.
- **R-12 (kickoff date/estimate reconciliation)** — this meeting's Feb-Mar 2027 timeline baseline needs checking against whatever comes out of today's 11:30am estimation discussion, not treated as a separately settled figure.

---

## Next Steps

**Immediate:**
- Update the R1 one-pager and reduced-scope feasibility brief to include CMM explicitly as confirmed R1/R2 split scope — it's currently absent from both, which is now a known gap, not just an open question.
- Close out R-13 in the risk register (SJR mechanism resolved).
- Get Adrian's direct confirmation on the CAM Integration half of R-15 — still open after this meeting.
- Reframe R-14 to reflect the policy/data-governance dependency this meeting surfaced, not just the technical RBAC question.

**Before Mark's briefing:**
- Reconcile the Feb-Mar 2027 timeline baseline against today's estimation discussion outcome and the existing R-12 figures.
- Assign real owners and dates to the 8 action items above before they're presented as a committed plan.

---

*Related: [OTG/Compass Interim State thread](2026-09-21-W39-otg-compass-interim-state-adrian-thread.md), [SJR Whiteboard notes](2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md), [Competency discovery notes](2026-09-21-W39-r1-discovery-competency-hr-systems.md), [Scope Slide Staleness Check](../decisions/2026-09-21-W39-r1-scope-slide-staleness-check.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-12, R-13, R-14, R-15)*
