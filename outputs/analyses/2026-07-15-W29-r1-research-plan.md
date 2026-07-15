---
feature: CareerCompass Release 1 (R1)
date: 2026-07-15
owner: Michelle Yip
type: research-plan
framework: Reforge Feature Opportunity Validation
parent-prd: outputs/prds/2026-07-07-W28-careercompass-r1-prd.md
status: draft
---

# R1 Research Plan

## Why this plan exists now

The R1 PRD (2026-07-07) locked scope and architecture ("World B," fully OTEP-native, no ATS/HRPS/Cumulus integration anywhere in the apply-to-outcome chain). Mark signed off on the Must-have floor (Epics A, B, C) at the 9 Jul SteerCo. The personas file built from that PRD is explicit that it has not been cross-validated against live interviews. An interview guide exists from 2026-06-03, but it predates the PRD lock and the scope changes that came with it. This plan refreshes the research approach against the PRD as it stands today and gives it a timeline, participant plan, and synthesis path.

R1 design must lock Aug-Sep 2026. That leaves roughly 4-6 weeks to run this research and feed findings into design before the window closes.

This plan follows the **Reforge Feature Opportunity Validation** framework (Strategic Fit, User Value, Business Value), the same structure applied to R1's scope decision at the 24 Jun jamming session. That earlier doc validated whether R1 should exist; this plan validates whether R1's current design assumptions actually hold, using the same three lenses so gaps stay visible at the same altitude they were scoped at.

---

## Reforge Validation: What This Research Is Actually Testing

### 1. Strategic Fit

| Level | Where this research plugs in |
|---|---|
| **Mission/Vision** | Doesn't test the mission directly, tests whether R1's mechanism for delivering it (native apply, native tracking) matches how officers and posting managers actually work today. |
| **Company Strategy** | Tests whether "CareerCompass becomes the system of record for PS internal mobility" is a fit posting managers want, not just an architecture decision made for them (Lane 3, Phase 1-2 of the journey map). |
| **Product Strategy** | Tests the two mechanisms directly: does removing the redirect + adding pre-fill actually reduce the friction the PRD assumes it does (Track A), and does native creation/status-update replace the spreadsheet-and-email workaround well enough to be adopted (Track B). |
| **Team Goals** | This research is the primary de-risking mechanism for the OKRs that don't yet have evidence behind them, apply completion rate (40%+ target) and status latency (≤24hr) both assume behaviors this round tests directly. |

**Strategic Fit risk this research is meant to catch:** the PRD's architecture (World B) was decided for engineering-feasibility reasons (ATS not ready until 2028), not because research confirmed officers or posting managers wanted OTEP to own the full record. Strategic Fit and engineering feasibility aligned by circumstance here, this research is the check that they also align on user terms, not just system terms.

### 2. User Value Hypothesis

**Who:** Same three personas from the [R1 user personas doc](../research-synthesis/2026-07-06-W28-r1-user-personas.md), currently PRD-derived hypotheses. This research is the validation step those personas explicitly flag as outstanding.

**What problem, and why it matters:** unchanged from the PRD, the redirect, the blank form, the status black hole (officer side); no native creation tool, undesigned status-update UX, undefined admin auth (posting manager side). See the [R1 journey map](2026-07-06-W28-r1-user-journey-map.md) for the full phase-by-phase pain-point breakdown this research is designed to confirm or challenge.

**What validates the hypothesis in this round:**
- Track A confirms whether removing the redirect and adding pre-fill produces the relief/trust the PRD assumes, or surfaces a different failure mode (e.g., trust in pre-filled data, not the redirect itself, turns out to be the bigger blocker).
- Track B confirms whether Persona 3's C1 record-ownership job (native OTEP ownership) is actually the job posting managers want done, since this was locked by architecture decision, not by asking them first.

**What does not get validated this round:** channel choice (A1), whether officers choose CareerCompass over OTG/C@G at all, this can't be tested until Oct 2026 fake-door data exists. Named explicitly as an accepted risk, not a gap in this plan.

### 3. Business Value Hypothesis

**Stakeholders:** Same alignment map as the R1 scope decision, Adrian and Mark need to see this research's findings before treating Epic A/C as sized (their sign-off assumed a floor, not a ceiling, per the manager briefing). Amber and Pow Hwee are the direct consumers of Track B's C2 findings, since there's no design yet for them to work from.

**What success looks like for the business:** this research either confirms the R1 investment case (apply completion 40%+, 22-29% of the lifetime application target landing in Q1 2027) is grounded in real user behavior, or it surfaces early enough that scope/design can adjust before Aug-Sep lock, cheaper than discovering the same gap in UAT or post-launch.

**Where this research is the single highest-leverage move available:** Lane 3 (Posting Manager) carries the PRD's two least-sized, least-designed pieces (agency-admin auth, manager status-update UX) per the effort-sizing analysis. Per the journey map's own risk ranking, this is where R1's real cost is hiding, so Track B recruiting and session order should not lag Track A just because officers are the more visible persona.

---

## Research Goals

1. Validate or challenge the three personas (Intentional Mover, Passive Watcher, Posting Manager) against live officers and posting managers, since they are currently PRD-derived hypotheses, not confirmed behavior.
2. De-risk the PRD's own open questions where a research session (not a spike or escalation) is the right tool, specifically the Posting Manager's C1 record-ownership job and the manager status-update UX (C2).
3. Confirm whether the pre-fill trust and abandonment assumptions from the earlier assumption matrix still hold under the current PRD scope, and retire or flag assumptions the World B lock has made obsolete.
4. Surface anything that would change the Phase 1 pilot rollout plan (6 agencies, staggered pairs, Jan 2027) before it's too late to act on.

## Out of Scope for This Round

- A1 (channel choice: CareerCompass vs. OTG/C@G) cannot be validated before R1 build starts, per the assumption matrix's own finding. MVP fake-door and Apply CTR data won't exist until Oct 2026, the same month R1 build begins. Treat this as an accepted risk, not something this research plan should chase.
- A9, A10, A14 (OTG/C@G status API granularity and vendor access agreements) are moot. The PRD's World B lock (2026-07-03, CIO-confirmed 2026-07-07) means R1 has no ATS/external integration in the status chain at all. Drop these from the research agenda entirely; they were answered by an architecture decision, not by research.
- A12 (five opportunity types in the R1 window) and A13 (draft data security classification) are engineering/compliance questions, not interview-testable. If unresolved, escalate through Pow Hwee/Adrian rather than folding into this research plan.
- SJR creation and C@G native apply are explicit PRD Non-Goals. Don't probe for feature requests in these areas; if they surface, log as out-of-scope signal, not a finding to act on.

---

## Target Participants

**Track A — Officers** (validates Personas 1 and 2, Epics B/C/D)
- Mix of Intentional Movers (mid-career, 5-10 years, targeted search) and Passive Watchers (early-career, 2-5 years, browsing without commitment).
- Drawn from the 6 pilot agencies where possible (PSD, ESG, MDDI, URA, MCCY, CAAS), but proxy participants are acceptable this round, see Recruiting below.
- Target: 5-8 sessions, enough to reach saturation on the core apply-flow questions without overrunning the timeline.

**Track B — Posting Managers** (validates Persona 3, Epics A/C)
- HR executives or officers who currently administer development postings (Internal Job, Secondment, STIP, Gig) for one of the pilot agencies.
- Target: 4-6 sessions. This track carries the PRD's least de-risked epics (agency-admin auth, manager status-update UX), so don't under-recruit it relative to Track A.

## Recruiting

R1's official UAT cohort isn't available yet, and design has to lock before UAT would run anyway (UAT is Sep-Oct, overlapping R1 build start). Use proxy participants, framed as research sessions, not UAT:

1. Internal PSD staff, as public service officers themselves, can act as proxy testers for discovery. Quickest to recruit.
2. BO network, ask Jacky or Xian Zhang to identify 5-8 willing officers from their agencies.
3. Existing OTG users via PSD Ops, may have a list of active users willing to participate ahead of formal UAT.
4. For Track B, ask Jacky/Xian Zhang or Rama for HR contacts at the pilot agencies who currently run posting administration, even informally.

---

## What Changed Since the 2026-06-03 Interview Guide

The existing guide (`outputs/archive/2026-W23-Jun01-Jun07/analyses/2026-06-03-W23-interview-guides-r1-seamless-apply.md`) is still usable as a base, but needs these updates before running sessions:

1. **World B framing.** The guide's Track B "record ownership" questions (Q7-8) were written before the World B lock. They're still the right questions, arguably more important now, but frame them knowing the answer is already fixed: OTEP owns the application record end-to-end, no ATS. The research question is no longer "should OTEP own this," it's "does OTEP owning this match how posting managers actually want to work."
2. **C2 manager status-update UX has no design yet.** The PRD flags this as genuinely new, undesigned, Red-risk scope. Track B's Part 4 solution-exploration question (Q11, "imagine one screen per posting") should be treated as the primary discovery vehicle for this UX, not a validation check on an existing design. Spend more time here than the original guide allocates.
3. **Agency-admin auth is still unresolved.** This is an engineering/access question (Pow Hwee/Fabian), not interview-testable. Don't add it to Track B questions, but do note in participant background if a manager's agency has unusual login/access constraints; that's useful context for the auth decision even if it's not this research's job to resolve it.
4. **Drop or de-emphasize:** Track A's channel-choice questions (Q3-4) are still fine to ask lightly for texture (per the assumption matrix's own mitigation: "run one qualitative question... where do you go first"), but don't treat the answer as a go/no-go signal. It can't be, this round.
5. **SJR and C@G are out of scope.** If a Track A participant's "last application" example was an SJR or C@G posting, note it but redirect follow-ups toward their OTG/STIP/Gig experience, which is what R1 actually touches.

**Recommendation:** update the existing guide in place with these five changes rather than writing a new one from scratch. The core JTBD questions (apply flow walkthrough, pre-fill reactions, status-tracking pain) are still exactly right.

---

## Timeline

R1 design locks Aug-Sep 2026. Today is 2026-07-15.

| Week | Activity |
|---|---|
| W29-W30 (now - 26 Jul) | Recruit participants (both tracks). Update interview guide per the five changes above. Confirm C2 prototype/sketch exists for Track B Part 4, if not, run those sessions without a visual and note it as a gap. |
| W31-W32 (27 Jul - 9 Aug) | Run sessions. Target finishing Track B first or in parallel, since it gates the highest-risk, least-designed epics (A, C2). |
| W32-W33 (3-16 Aug) | Synthesize. Run `/user-research-synthesis` once 3+ sessions per track are complete. Update the persona file's validation status from "not yet validated" to reflect actual findings. |
| W33-W34 (10-23 Aug) | Feed findings into design. This is the hard deadline, findings after this point arrive after design lock and lose most of their leverage. |

If recruiting slips past W30, escalate rather than compress the synthesis step; a rushed synthesis that misses the design-lock window anyway isn't worth cutting analysis time to save.

---

## Synthesis and Output Plan

- Run `/user-interview` after each session or small batch for same-day insight capture (VALIDATED/CHALLENGED/NEW theme labels against the existing persona hypotheses).
- Once 3+ sessions per track are done, run `/user-research-synthesis` for the cross-interview report.
- Update `outputs/research-synthesis/2026-07-06-W28-r1-user-personas.md` directly, changing its status line from "not yet validated against live user interviews" to reflect confirmed, challenged, or revised persona details.
- Log any finding that changes R1 scope or a PRD open question (Section 7) into the decisions log, and flag it to Amber/Pow Hwee/Adrian by name depending on which open question it resolves.
- If a finding suggests Epic D (Saved Jobs) is more or less load-bearing than the PRD assumes, flag it explicitly. It's the first cut candidate under scope pressure, and this research is one of the only ways to get evidence on that call before it's made by default.

---

## Open Questions for This Plan Itself

| Question | Owner | Needed by |
|---|---|---|
| Does a C2 (manager status-update) sketch or prototype exist yet for Track B Part 4? | Amber | Before W31 sessions start |
| Who are the BO network contacts for Track B recruiting? | Jacky / Xian Zhang | W29 |
| Is there budget/approval needed to run proxy research sessions vs. formal UAT? | Michelle → Adrian | W29, if unclear |

---

*Sources: R1 PRD (2026-07-07), R1 user personas (2026-07-06, unvalidated), 2026-06-03 interview guide, 2026-05-20 assumption priority matrix.*
*Next: recruit participants and update the interview guide per the five changes above, then run sessions W31-W32.*
