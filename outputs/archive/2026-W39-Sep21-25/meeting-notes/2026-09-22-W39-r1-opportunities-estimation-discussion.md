---
date: 2026-09-22
week: 2026-W39
type: meeting-notes
meeting_type: Engineering estimation session (became scope clarification)
attendees: Rama Moorthy, Michelle Yip, engineering team (Thomas Huchedé absent), Hao Eng Chua
topic: R1 Opportunities Estimation Discussion (11:30am)
---

# Meeting Notes: R1 Opportunities Estimation Discussion

**Date:** 2026-09-22, 11:30am

**Attendees:** Rama Moorthy, Michelle Yip, engineering team (**Thomas Huchedé absent** — key frontend estimator), Hao Eng Chua

**Type:** Was scheduled as an estimation session. Became a scope clarification discussion instead.

---

## Summary

**This was not an estimation session, and no estimate was produced.** The engineering team couldn't responsibly estimate without a clear end-to-end flow, finalized scope, and Thomas Huchedé's frontend input — all three were missing. Michelle's repeated interventions ("what exactly is in scope, what's out") were the most important thing that happened in the meeting: they surfaced a real, previously invisible disconnect between Rama's and Michelle's mental models of who can discover opportunities in R1. If that had gone unnoticed, engineering would have estimated — and built — the wrong thing.

**This directly invalidates the "R1 Scope Confirmed (22 Sep)" doc written earlier today**, which was based on a formal transition plan plus yesterday's Product x BO meeting and treated as authoritative. That doc assumed scope was settled. This meeting shows it wasn't — not even between the two people (Rama, Michelle) closest to the work. See Reconciliation Required, below.

---

## What Went Well

1. **Scope ambiguity surfaced before estimation, not after.** Engineering refused to generate artificial estimates without a clear flow, finalized scope, and Thomas present — preventing false confidence, under-estimation, and future rework.
2. **Michelle's intervention was the most important thing in the meeting.** Repeatedly redirected the conversation to "what exactly is in scope and what is out" — naming that R1 has multiple moving parts (HRPS integration, Cumulus integration, internal jobs ingestion, STIPs & Gigs, discovery experience, API work) and that estimating without understanding these dependencies was premature.
3. **Engineering raised legitimate architectural questions:**
   - **Internal Jobs:** push vs. pull architecture, API specification, authentication model, internet vs. intranet connectivity, authorization mechanism, agency code/ringfencing design.
   - **RBAC:** whether Keycloak RBAC should be used, whether application-layer permissions are also required.
4. **CAM discovery continues, without committing delivery to R1** — preserves learning and optionality without overcommitting the release.

## What Didn't Go Well

1. **The stated meeting objective (estimation) was not achievable.** No agreed scope, no E2E flow, key estimator absent, differing product assumptions across participants. No meaningful estimate resulted.

2. **Product and engineering are operating from different mental models — the core finding of this meeting.**

   | | Rama's understanding | Michelle's understanding |
   |---|---|---|
   | Non-pilot agencies can... | Create opportunities; cannot access broader Compass functionality; see only a limited admin dashboard | Should also discover opportunities — this is part of Adrian's intended user journey, with OTG acting as an entry point into Compass |

   These are fundamentally different product experiences. **This is not a minor wording gap — it changes what gets built.**

3. **Adrian's decisions aren't documented anywhere consistently.** The team repeatedly referenced "what Adrian wants," "what Adrian discussed yesterday," "what Adrian agreed" — but participants held different interpretations of those same discussions. The decision hasn't been written down; scope hasn't been socialized consistently; **there is no single agreed product definition for R1 right now.**

4. **Estimation pressure exists ahead of product definition.** Pressure to estimate against a March timeline, while final scope, interface specs, integration specs, API contracts, and a role model are all still missing. Delivery dates are being discussed before the solution is actually defined.

---

## Decisions Made

1. **No meaningful estimation today.** Session serves as a scope briefing instead.
2. **A separate scope alignment discussion with Adrian Ang is required before any estimation happens.**
3. **Engineering estimation happens after:** scope alignment, E2E flow definition, and Thomas Huchedé's return.
4. **Current working R1 scope** (explicitly framed as "working," not final):
   - **Mandatory:** RBAC, STIPs & Gigs, Internal Jobs ingestion.
   - **Optional:** CAM integration.
5. **CAM discovery continues; delivery not committed to R1.**

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Align R1 product scope with Adrian | Rama Moorthy / Michelle Yip | Not specified | 🔴 High — blocks everything else | Not Started |
| Clarify discovery rights for non-pilot agencies | Michelle Yip + Adrian Ang | Not specified | 🔴 High — the core unresolved disconnect | Not Started |
| Produce high-level E2E flows | Rama Moorthy | Not specified | 🔴 High | Not Started |
| Re-run estimation session after alignment | Engineering team | Not specified | 🔴 High | Not Started |
| Prepare estimation with Thomas present | Thomas Huchedé, Engineering | Not specified | 🔴 High | Not Started |
| Define API specifications for Internal Jobs ingestion | Engineering + HRPS/Cumulus discussions | Not specified | 🟡 Medium | Not Started |
| Investigate authentication/integration architecture | Engineering | Not specified | 🟡 Medium | Not Started |
| Continue CAM discovery and onboarding assessment | Hao Eng Chua | Not specified | 🟡 Medium | Not Started |
| Present CAM findings and onboarding requirements | Hao Eng Chua | Not specified | 🟡 Medium | Not Started |

**Note:** none of these have due dates. Given this is the second consecutive R1-critical meeting today (after the Squad Sync Day2Ops debrief) to produce a fully-unowned-on-dates action list, this is now a pattern worth naming directly, not a one-off.

---

## Key Risks Not Adequately Addressed

| # | Risk | Detail |
|---|---|---|
| 1 | 🔴 **No agreed definition of who can discover opportunities.** | The single biggest risk. Six pilot agencies only, or whole-of-government? Affects GTM strategy, ringfencing, product design, authorization, scalability, timeline, and estimation. Unresolved in the meeting. |
| 2 | 🔴 **Integration dependencies (HRPS, Cumulus) are outside Michelle's control.** | Discussion is still at API shape, payload definition, connectivity model, authentication model — no evidence these are aligned or committed on the other side. |
| 3 | 🔴 **March timeline may already be optimistic.** | Team is targeting ~Feb/Mar while acknowledging new APIs, RBAC, new dashboards, unclear product scope, unresolved integrations, and VAPT/pre-go-live work all still outstanding. Never explicitly challenged in the meeting, but a real schedule risk. |
| 4 | 🔴 **RBAC is being treated as a feature, not a design decision.** | Assumptions exist (Keycloak has RBAC, some permissions may be application-level, everyone may create STIPs/Gigs by default) but no role matrix, no permission model, no ownership model exist. Could turn out larger than expected once detailed. |
| 5 | 🔴 **CAM may become a hidden schedule distraction.** | Everyone agrees discovery continues, but onboarding could take 1-3 months and no logical stopping point is defined. Without explicit boundaries, this competes with R1 delivery focus. |

---

## Michelle's Read: The Real Underlying Issue

The underlying issue is not engineering estimation. **R1 has not yet been translated into a single agreed product narrative.** At least three separate topics are currently being mixed together — STIPs & Gigs administration, opportunity discovery experience, and Internal Jobs integration — and different people hold different assumptions about how these pieces fit together. Until that product story is aligned with Adrian directly, any estimate produced is likely to be challenged or invalidated later.

---

## Reconciliation Required — This Meeting Contradicts Today's Earlier "R1 Scope Confirmed" Doc

**This is the most important thing to act on from this meeting.** Earlier today, [R1 Scope Confirmed (22 Sep)](../decisions/2026-09-22-W39-r1-scope-confirmed-transition-plan.md) was written and marked **authoritative**, based on a formal transition plan plus yesterday's Product x BO meeting — describing native in-platform apply for internal jobs, CV builder (later corrected out), end-to-end status tracking, and a full Tier 1/2/3 scope breakdown as confirmed.

**This meeting shows that scope was never actually agreed** — not even between Rama and Michelle, the two people closest to the day-to-day work. Rama's mental model (non-pilot agencies can create but not discover) and Michelle's mental model (non-pilot agencies should discover too, OTG as entry point) are genuinely different product experiences, and this was only surfaced today, in this meeting, hours after the "confirmed" doc was written.

**This means:**
- The "R1 Scope Confirmed" doc's status should be downgraded from "authoritative" to "proposed / pending Adrian alignment" — it reflects one input (transition plan + BO meeting), not confirmed cross-functional agreement.
- The risk register's R-13/R-14 resolutions (marked resolved/scoped earlier today, based on that doc) need re-opening or at minimum a caveat, since they were closed on the assumption the scope doc was settled.
- **The single highest-priority next step is the scope alignment discussion with Adrian** — not re-running estimation, not updating documents further, until that happens.

---

## Proposed Agenda: R1 Scope Alignment Workshop (Michelle's Draft, for Adrian)

**Objective:** agree on a single R1 scope definition that engineering, product, PSD, and business owners can actually estimate against. Leave with documented In/Out decisions and user journeys — not another round of "what did Adrian mean."

**Suggested attendees:** Adrian Ang, Michelle Yip, Rama Moorthy, Thomas Huchedé, Léo Milbor, Hao Eng Chua, relevant BO reps if needed.

1. **Context setting (5 min)** — confirm the estimation session couldn't proceed; today's objective is alignment, not solutioning.
2. **Confirm R1 business outcomes (10 min)** — "At the end of R1, what capabilities must users have?" Document verbatim.
3. **Validate R1 scope, In/Out (15 min)** — walk every item (RBAC, STIPs & Gigs Creation, STIPs & Gigs Admin, Internal Jobs Ingestion, Internal Jobs Discovery, Opportunity Discovery, CAM Integration, CAM Delivery, Dynamic Forms, Applicant Communication Workflow) to an explicit ✅/❌/⚠️.
4. **Opportunity Discovery Model (20 min) — the critical discussion.** For pilot agencies and non-pilot agencies separately: can they discover, apply, create, manage? Decide one of: (A) discovery limited to 6 pilot agencies, (B) discovery available government-wide, (C) hybrid. Document rationale.
5. **User journey walkthrough (20 min)** — STIPs & Gigs Poster, Opportunity Seeker, Internal Jobs (creation in HRPS/Cumulus → sent to Compass → discoverable → apply), confirming ownership boundaries at each step.
6. **RBAC principles (10 min)** — who can create/edit/view/manage; approve a draft role matrix (doesn't need full permission detail yet).
7. **Internal Jobs integration boundaries (10 min)** — what's Compass's responsibility vs. HRPS's vs. Cumulus's; push vs. pull; data ownership; discoverability-only vs. full workflow.
8. **CAM scope and stop point (5 min)** — define what "discovery complete" looks like, expected deliverables from Hao Eng Chua, whether onboarding activities should start.
9. **Agree estimation-readiness criteria (5 min)** — confirm scope, journeys, In/Out list, dependencies, and assumptions are all actually documented. Close with: "what information is still missing before engineering can estimate?"

**Expected outputs:** approved R1 scope matrix, agreed user journeys, the discovery-access decision (pilot-only vs. WOG), draft RBAC principles, Internal Jobs integration boundary definition, CAM stop point, a documented assumptions list, and a go-ahead for the next estimation meeting.

**If facilitating, make "Who can discover opportunities in R1?" the first real decision after business outcomes** — nearly every other scope, architecture, integration, and GTM question depends on that single answer.

---

## Next Steps

**Immediate:**
- Do not treat "R1 Scope Confirmed (22 Sep)" as settled — flag it as pending the scope alignment workshop above.
- Get the scope alignment workshop with Adrian on the calendar — this is now the single blocking item for R1 planning, ahead of any further document updates or estimation attempts.
- Do not re-run estimation until scope alignment, E2E flows, and Thomas's return have all happened, per this meeting's own Decision 3.

---

*Related: [R1 Scope Confirmed (22 Sep) — needs reconciliation](../decisions/2026-09-22-W39-r1-scope-confirmed-transition-plan.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-13, R-14, R-22), [OTEP Squad Sync — Day2Ops Debrief](2026-09-22-W39-otep-squad-sync-day2ops.md)*
