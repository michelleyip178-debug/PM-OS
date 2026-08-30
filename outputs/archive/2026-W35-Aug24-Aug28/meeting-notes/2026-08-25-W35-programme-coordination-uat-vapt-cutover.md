# Meeting Notes: Programme Coordination — SSO, UAT Sign-off, VAPT Governance, API Cutover

**Date:** 25 Aug 2026 (exact time not specified in source)

**Attendees:** Michelle Yip, Rama Moorthy, Pow Hwee Tan, Adrian Ang, Jace Tan, Jobelle Lim, Pei, Peter Lo, Benjamin, Johnny, Chris (referenced, UAT), Xin Zhang (referenced, not present)

**Meeting Type:** Programme coordination / risk-management review — broader than the earlier 3:30pm CSC SSO troubleshooting session; covers SSO, UAT sign-off readiness, VAPT governance across three parallel streams, and API cutover planning

**Duration:** Not specified

**Note on source:** Input is the PM's own structured executive assessment of a transcribed meeting (What Went Well / What Didn't Go Well / Risks Not Fully Addressed format), not a raw transcript. Risk framing and "My Overall Assessment" are the PM's own synthesis, retained as provided.

---

## Plain-Language Summary

This was a wide-ranging coordination meeting, not a single-topic session. Four things were covered: the CSC login problem (SSO), whether user-acceptance testing (UAT) is far enough along to sign off, how security testing (VAPT) will be organized across three different workstreams, and the plan for switching over to a new API this week.

The overall picture: operationally the team is coordinated and surfacing problems early rather than hiding them. But two things are still soft — nobody has defined exactly what "UAT is done" means, and there's no shared checklist for what "ready for VAPT" means either. Both of those, not the technical work itself, are now the critical path to launch.

---

## Summary

Programme coordination review across four workstreams: CSC SSO resolution, UAT sign-off readiness, VAPT governance (Compass Core, Intel/CIE, POCDEX API streams), and the Products API cutover. Strong operational coordination throughout — dependencies surfaced early, security hardening already underway ahead of formal VAPT, multiple SSO options pursued in parallel rather than serializing on one. But UAT acceptance criteria and VAPT readiness criteria are both still undefined, and heavy reliance on individual availability (Rama, Adrian, Johnny, Benjamin, Chris, Xin Zhang) creates single-threaded risk across several workstreams.

**Relates directly to:** [today's earlier 3:30pm CSC SSO troubleshooting session](2026-08-25-W35-csc-sso-troubleshooting.md) — same underlying issue, but this meeting reframes it as three concrete options with owners rather than the earlier Path A/B/C exploratory framing, and adds specifics (recording/evidence being sent, Pei driving the redirect option) not present in the earlier session.

---

## Decisions Made

| # | Decision | Detail |
|---|---|---|
| 1 | CSC SSO: continue Option 1 immediately, explore Options 2 & 3 in parallel | Avoids blocking on a single fix path — see Action Items for owners |
| 2 | Products VAPT will merge into the Compass VAPT programme | Single combined effort rather than fragmented parallel VAPTs |
| 3 | VAPT coordination and tracking assigned to Jace Tan and Jobelle Lim (·TP) | Programme-level tracking across Compass Core, Intel/CIE, and POCDEX API streams |
| 4 | Products API cutover proceeds on the planned window | Runbook, technical ownership, and communication plan already in place |
| 5 | Performance testing: tentative direction toward UAT rather than production | No formal decision framework documented — direction only, not finalized |
| 6 | UAT outstanding comments require an alignment session with Chris before sign-off | Explicit risk-management move — avoids a superficial sign-off with open comments still outstanding |
| 7 | Security teams continue scanning and remediating ahead of formal VAPT | Pre-emptive hardening already underway (AWS/infra findings, Benjamin's team on fixes) |

---

## Action Items

**CSC SSO:**

| Task | Owner | Due |
|---|---|---|
| Send recording/evidence to relevant parties | Rama Moorthy's team | Not specified |
| Explore Option 3 (URL redirection approach) | Pei, with support from Peter Lo | Not specified |
| Arrange discussion on Solution 2 | Pow Hwee Tan | Not specified |

**UAT:**

| Task | Owner | Due |
|---|---|---|
| Review remaining UAT concerns with Chris | Michelle Yip, team, Chris | Tomorrow (per PM's own proposal — call with Chris) |
| Align with Xin Zhang when back | Team | Not specified — blocked on Xin Zhang's return |
| Decide treatment of outstanding tickets | Team | Not specified |

**VAPT:**

| Task | Owner | Due |
|---|---|---|
| Obtain API PT + Cloud PT requirements | Rama Moorthy | Not specified |
| Validate NCS resourcing approach | Jace Tan + VAPT leads | Not specified |
| Brief Jobelle on tracking model | Jace Tan | Not specified |
| Confirm JumpStart VAPT requirement (assumption: not needed, unconfirmed) | Rama Moorthy | Not specified |
| Continue security scans and remediation | Engineering teams | Ongoing |
| Ensure Intel/CIE fixes completed before VAPT | Benjamin and Intel team | Not specified |

**API Cutover:**

| Task | Owner | Due |
|---|---|---|
| Execute switch | Pei | 10am–12pm (window already scheduled) |
| Coordinate with Johnny | Pei | Before/during cutover window |
| Communicate downtime to users | Team | Before cutover window |
| Notify after successful cutover | Team | After cutover completes |

**None of these action items carry a specific calendar date beyond the ones noted above (tomorrow, and the 10am–12pm cutover window).**

---

## Key Insights & Quotes

| Insight | Detail |
|---|---|
| Parallel-path thinking avoided a single point of blocking on SSO | Three solution options pursued simultaneously with named owners, rather than waiting on one answer before starting the next |
| UAT sign-off is being questioned before it's granted, not after | PM's own proposed intervention — "have a call with Chris tomorrow and determine whether sign-off is still acceptable given the outstanding comments" — flagged explicitly as good risk management: avoids a superficial sign-off |
| "Make it faster" is not an acceptance criterion | Raised directly during discussion of opportunity-search performance optimisation — some optimisation epics currently lack measurable targets (e.g., P90 response times, defined thresholds) |
| VAPT governance consolidated in this meeting | Products VAPT folded into Compass VAPT; Jace Tan and Jobelle Lim named as the single tracking/coordination point across three parallel VAPT streams (Compass Core, Intel/CIE, POCDEX API) |
| Security hardening already running ahead of formal VAPT | Not waiting for the VAPT engagement itself — AWS/infrastructure findings from prior engagements already being remediated, scanning setup ongoing |
| Sign-off authority for UAT appears split, not singular | Chris may not be the final decision maker; final approval appears tied to Xin Zhang's review — this ambiguity is itself a risk, not just a scheduling gap |

---

## Open Questions

| Question | Owner | By |
|---|---|---|
| What exactly constitutes acceptable UAT completion? | Not yet defined — no explicit acceptance checklist exists | Before sign-off is sought |
| Is Chris the final decision maker on UAT sign-off, or does it route through Xin Zhang? | Unclear — needs explicit confirmation | Before sign-off is sought |
| What's the definitive performance testing strategy — UAT or production? | Tentatively UAT, but no documented decision framework | Not specified |
| What are the measurable success criteria for opportunity-search optimisation (P90, thresholds)? | Not yet defined | Not specified |
| Does JumpStart require VAPT at all? | Current assumption is no (no changes introduced), but unconfirmed | Rama Moorthy to confirm — not specified |
| What does "ready for VAPT" actually mean across the three parallel streams? | No consolidated readiness checklist exists | Not specified |
| Is NCS resourcing genuinely available across all three VAPT streams, or is there hidden contention? | Adrian Ang raised this concern explicitly — not yet validated | Jace Tan + VAPT leads |

---

## Blockers

| # | Blocker | Blocked By | Impact | Resolution |
|---|---|---|---|---|
| 1 | No explicit UAT acceptance checklist | Outstanding tickets, possible additional test cases, split sign-off authority (Chris vs. Xin Zhang) | Programme risks preparing for a sign-off it can't actually defend | Call with Chris scheduled for tomorrow; still needs Xin Zhang's alignment once back |
| 2 | No consolidated "Definition of Ready" for VAPT | Multiple teams (Compass Core, Intel/CIE, POCDEX) doing separate prep (scanning, rectification, infra fixes, dependency reviews) with no shared checklist | Teams likely to declare readiness inconsistently, risking VAPT execution starting on uneven footing | Not yet resolved — no owner assigned in the meeting itself |
| 3 | Possible VAPT resource contention at NCS | Adrian Ang flagged that NCS could be supporting multiple projects simultaneously while each believes itself prioritised | Risk of VAPT schedule slippage, delayed fixes, missed commitments across streams | Jace Tan + VAPT leads to validate NCS resourcing approach — not yet complete |
| 4 | CIE team's security readiness is less mature than Compass Core | CIE hasn't been through this process before; backend implementation confidence is lower; needs additional engineering support | Higher expected VAPT findings and longer remediation cycles for this stream specifically | Benjamin and Intel team assigned to close gaps before VAPT — timing not specified |

---

## Timeline Risks

| # | Timeline Risk | Detail | Action |
|---|---|---|---|
| 1 | UAT sign-off may slip past its assumed timeline | Outstanding comments remain, additional tests may still be requested, exclusions aren't finalized, and sign-off authority itself is ambiguous (Chris vs. Xin Zhang) | Tomorrow's call with Chris is the first concrete step — but Xin Zhang's alignment (date-dependent on her return) is still an open dependency |
| 2 | VAPT execution could start on inconsistent footing across three streams | No shared "ready for VAPT" checklist exists; each stream (Compass Core, Intel/CIE, POCDEX) is self-assessing readiness independently | Recommend a formal VAPT readiness checklist and ownership model before execution begins — named directly in the PM's own assessment as one of the two things to watch most closely |
| 3 | This sits on the same compressed runway flagged in today's earlier POCDEX timeline sync | [Today's 2pm POCDEX timeline sync](2026-08-25-W35-pocdex-timeline-sync.md) confirmed VAPT sign-off needed by ~7 Nov against a 24-25 Nov launch. Both the UAT sign-off ambiguity and the missing VAPT readiness checklist sit inside that same tight window | Treat both as live entries on the RAID log, not just meeting commentary — this is the second and third source today naming VAPT timeline pressure independently |

---

## My Overall Assessment (PM's own synthesis, retained as provided)

**Headline:** The programme is operationally under control, but UAT acceptance and VAPT readiness are now the critical path. The biggest remaining risks are not technical implementation risks — they're approval, testing coverage, dependency alignment, and ensuring multiple VAPT streams can execute in parallel without resource contention.

**Two areas to watch most closely:**
1. Getting a definitive UAT sign-off position from Chris/Xin Zhang.
2. Establishing a formal VAPT readiness checklist and ownership model before execution begins.

---

## Next Steps

**Immediate:**
- Michelle Yip: call with Chris tomorrow to determine whether UAT sign-off is still acceptable given outstanding comments
- Pei: execute the Products API cutover in the scheduled 10am–12pm window, coordinating with Johnny
- Rama Moorthy's team: send SSO recording/evidence to relevant parties

**This week:**
- Align with Xin Zhang once back on final UAT sign-off position
- Jace Tan + VAPT leads to validate NCS resourcing approach across the three VAPT streams
- Rama Moorthy to confirm whether JumpStart genuinely needs VAPT

**Not yet scheduled, but flagged as needed:**
- A consolidated VAPT "Definition of Ready" checklist — no owner assigned yet
- Measurable success criteria (P90, thresholds) for opportunity-search performance optimisation

---

## Context for Future Reference

**Relates to:**
- [Today's 3:30pm CSC SSO troubleshooting session](2026-08-25-W35-csc-sso-troubleshooting.md) — same underlying SSO issue, same Menlo/Comet root-cause direction, but this meeting frames it as three concrete options with named owners (Option 1 continues immediately, Pei drives Option 3, Pow Hwee Tan arranges discussion on Option 2) rather than the earlier exploratory Path A/B/C framing. Worth confirming whether "Option 1/2/3" here map directly onto "Path A/B/C" there, or represent a refined framing from further discussion.
- [Today's 2pm POCDEX timeline sync](2026-08-25-W35-pocdex-timeline-sync.md) — the ~7 Nov VAPT sign-off / 24-25 Nov launch dates are the same runway this meeting's VAPT governance and UAT sign-off risks sit inside.
- [Today's meeting cleanup](cleanup-2026-08-25.md) and [today's RAID log](../analyses/2026-08-25-W35-raid-log.md) — R12 (CSC SSO/Menlo) and R13 ("who decides" governance pattern) both extend into this meeting's findings; this session adds two new governance gaps not yet logged: undefined UAT acceptance criteria, and no consolidated VAPT readiness checklist.

**Pattern worth naming:** This is the same "who decides" gap seen across every other meeting today, showing up in a fifth and sixth form — UAT sign-off authority is split between Chris and Xin Zhang without a clear resolution path, and VAPT readiness has no single named owner across three parallel streams. Worth folding into the same conversation with Adrian/Mark already flagged in today's RAID log and meeting cleanup, rather than treating as new, separate items.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original content as provided</summary>

Provided directly by the PM as a structured executive assessment (Executive Summary / What Went Well / What Didn't Go Well / Risks Not Fully Addressed / Key Decisions / Complete Action List / My Overall Assessment) — full text preserved in the source conversation, not duplicated here to keep this file a reasonable size.

</details>
