---
date: 2026-09-21
week: 2026-W39
type: meeting-notes
meeting_type: Discovery session (multi-stakeholder) — Opportunities/Internal Jobs thread
attendees: Rama Moorthy, Barry Lim, Adrian Ang, HRPS team, Vincent Kwok (Cumulus), Compass team, Michelle Yip
topic: R1 Discovery — Internal Jobs with HRPS and Cumulus
---

# Meeting Notes: R1 Discovery — Internal Jobs with HRPS and Cumulus

**Date:** 2026-09-21

**Attendees:** Rama Moorthy, Barry Lim, Adrian Ang, HRPS team, Vincent Kwok / Cumulus team, Compass team, Michelle Yip

**Type:** Discovery session — same meeting as [Competency & Proficiency Configuration notes](2026-09-21-W39-r1-discovery-competency-hr-systems.md); this covers the Internal Jobs / Opportunities thread.

---

## Summary

More strategic than technical. The room converged on an interim model — discovery in Compass, apply via redirect to HRPS/Cumulus — but left the real question open: **is Compass a discovery layer or the eventual transaction layer?** Same open question as the SJR whiteboard and the OTG/Compass interim-state thread, now stated most clearly. This is the third independent surfacing today, and it needs a forcing decision from Adrian, not another discovery round.

---

## What Compass Is Trying to Become

Compass already aggregates opportunities from multiple sources: CSC courses, OTG Gigs/STIPs, and (future state) internal jobs from HR systems. Goal: single discovery experience across all development opportunities.

**Proposed target model:**

| Capability | Source System | Compass Role |
|---|---|---|
| Internal Job Creation | HRPS / Cumulus | Not creator |
| Internal Job Maintenance | HRPS / Cumulus | Not maintainer |
| Opportunity Discovery | Compass | Primary experience |
| Job Application | HRPS / Cumulus initially | Redirect from Compass |

Consistent with the opportunities model referenced in the meeting (OTEP-Opportunities PDF, 26 Sep 2026).

---

## Key Discovery Findings

**Can Compass retrieve internal jobs?**
- HRPS: no API identified yet, but the team believes one could be built.
- Cumulus: existing API capabilities, connectors demonstrated by Vincent.

**Can Compass identify internal vs. external jobs?** Yes on both sides — HRPS flags internal marketplace jobs explicitly; Cumulus has similar differentiation.

**Can opportunities be ring-fenced by agency?**
- HRPS: unsure whether agency tagging is even stored — needs investigation.
- Cumulus: no structured agency targeting; agency identity inferred via short codes (e.g. EMA, LTA).
- Michelle's chat note: "agency short-codes will affect how we ingest and map" — a direct constraint on Pillar 1/4's ringfencing design.

**Authentication for redirect/handoff:** both HRPS (WGAD, Singpass) and Cumulus (WGAD) support it — redirection is technically straightforward.

**Hidden risk:** internal jobs are discovered very differently today — HRPS via its internal portal, Cumulus via a dedicated hub. Compass is unifying two genuinely different experiences, not just aggregating one consistent source.

---

## The Biggest Product Discussion: Where Should Users Apply?

**Option A — discover in Compass, apply in HR systems.** Preferred interim solution. Officer clicks Apply, redirects to HRPS/Cumulus, recruitment stays as-is. Minimal change management, no new recruiter workflows.

**Option B — apply directly in Compass.** Raised by Barry Lim. HR teams pushed back: new recruitment processes, new recruiter workflows, retraining. Vincent Kwok called it a potential "change management nightmare."

**The end-state exchange:** Barry challenged the room — "If Compass is the whole-of-government opportunity platform, how far do we actually want to go?" Adrian's answer: interim is discover-in-Compass/apply-in-HR-systems, but the end state should feel like one unified whole-of-government experience, with agency-specific restrictions kept where needed. Clearest articulation yet of the long-term OTEP vision.

---

## What Was Actually Decided

Convergence, not formal decisions:
- ✅ Compass aggregates internal jobs.
- ✅ Internal jobs stay mastered in HR systems.
- ✅ Officers discover via Compass.
- ✅ Apply stays in HRPS/Cumulus via redirect (Option A) for now.
- ✅ API specs needed from Compass before HR teams can assess impact.

None of these are locked architecture — the discovery-vs-transaction-layer question is still open.

---

## Target-State User Journey: Internal Jobs (Michelle's Draft)

Drafted from the meeting's implicit convergence: Compass owns discovery, HRPS/Cumulus own recruitment transactions, officers shouldn't need to know where an opportunity originated, agencies keep their existing HR systems. **Michelle's synthesis — not signed off by the room. Validate before treating as agreed.**

### Journey 1: HR Officer Creates an Internal Job
1. Create job in HRPS or Cumulus — no change from today.
2. Mark visibility (Internal/External, WOG-wide/agency-specific/restricted). *May need metadata that isn't consistently captured today.*
3. HR system publishes; Compass ingests Job ID, title, agency, job family, description, eligibility, visibility rules, apply URL, and indexes it.

### Journey 2: Officer Discovers Opportunities
1. Logs in via WGAD/Entra ID — Compass already has agency, role, profile, competencies, career interests.
2. Personalized feed: Learning (CSC), Development (STIPs/Gigs), Career (internal jobs), plus recommendations by role/competency gap/aspiration/job family. *This is where Compass differentiates from existing HR portals.*
3. Search/filter by type, agency, job family, location, grade.
4. View details — description, agency, required competencies, proficiency levels, hiring contact. Future: "You meet 7 of 10 required competencies" — links the competency and opportunity workstreams directly.

### Journey 3: Officer Applies (Interim State, Most Aligned)
1. Clicks Apply — Compass is discovery-only here.
2. Redirects to source: HRPS → HRPS portal; Cumulus → Cumulus hub.
3. SSO via WGAD/existing HR auth, no duplicate login ideally.
4. HR system owns everything from here — applications, screening, recruiter workflow, notifications. Compass steps out.

### Journey 4: Application Processing
Entirely HRPS/Cumulus; recruiters keep existing workflows.

### Journey 5: Future Application Tracking (not discussed, natural next step)
MVP: officer checks status back in HRPS/Cumulus. Future: Compass aggregates status into a career hub view.

### Risks Along the Journey

| # | Step | Risk | Impact | Mitigation | Owner |
|---|---|---|---|---|---|
| 1 | J1 Create | Inconsistent visibility tagging — some agency targeting is implicit, not explicit, across HRPS/Cumulus | Wrong officers see jobs; eligible officers miss them; ringfencing fails | Standard Opportunity Visibility Model: mandatory agency ID + visibility classification, validated pre-publish | Compass Product + HRPS + Cumulus |
| 2 | J1 Create | Duplicate opportunities if Compass ingests from multiple flowing sources | Poor UX, duplicate applications, inflated counts | Global Opportunity ID, defined source ownership, dedup rules before launch | — |
| 3 | J2 Discover | Poor recommendation quality — meeting covered ingestion, not recommendation logic | Users lose trust, low click-through, low perceived value | Transparent rules, "Why am I seeing this?", track effectiveness from day one | — |
| 4 | J2 Discover | Incomplete opportunity inventory if one HR system's data is richer than the other's | Distrust in platform completeness; agencies stick with existing portals | Minimum data standard, reject incomplete records, completeness reporting | — |
| 5 | J3 Apply | Broken journey — starts in Compass, finishes elsewhere | Confusion, drop-off, low adoption | Deep links straight to the application page; warn before redirect | — |
| 6 | J3 Apply | Authentication issues — WGAD/auth differences only briefly touched on | Multiple logins, failed redirects, support tickets | Design SSO before pilot, test early, define fallback paths | — |
| 7 | J4 Processing | Expectation mismatch — Compass looks like the platform, but status lives elsewhere | Support burden, trust erosion | Set clear boundaries, show source-system ownership, defer tracking to a later phase | — |
| 8 | J5 Tracking | Cross-system status integration complexity — natural once Compass becomes an engagement layer | Large integration scope, ongoing maintenance | Out of MVP; canonical status model first; prioritize highest-volume systems | — |

### End-State Vision

```
Agency Creates Job → HRPS/Cumulus → Compass (Discovery Hub)
  → Officer Views Opportunity → Officer Applies
  → Recruitment System Processes → Status Shared Back To Compass
```

Officer experience: "one place to understand my career possibilities." Agency experience: "I keep working inside my existing HR system." Cleanest expression of the vision that emerged, per Michelle.

### Risks Worth Escalating Directly to the RAID Log

| Risk | Severity | Mitigation |
|---|---|---|
| Compass stays discovery-only, officers keep using HRPS/Cumulus directly | High | Define success metrics that prove behavioral change |
| Agency ringfencing requirements expand late in delivery | High | Get WD/HR owners to define the visibility model now |
| APIs require VAPT/security review | High | Start security assessment before final design |
| No agreed source-of-truth for opportunities | High | Define ownership model by Q4 |
| Different metadata structures across HRPS/Cumulus | High | Define canonical Opportunity schema |
| Redirection creates a fragmented user experience | Medium | Design end-to-end UX early |
| Duplicate jobs from multiple feeds | Medium | Dedup strategy before build |
| Adoption stays low despite integration | High | Measure discovery-to-application conversion from Day 1 |

### Product Questions Still Unresolved

| Question | Why It Matters |
|---|---|
| Is Compass discovery-only or application-capable? | Biggest product decision |
| Will Compass show application status? | Determines integration scope |
| How will agency ringfencing work? | Affects visibility rules |
| Can officers see opportunities across all agencies? | Defines WOG mobility model |
| How will recommendations work? | Drives personalization value |
| How do competencies influence job recommendations? | Connects the two workstreams |
| Will hiring managers post from Compass eventually? | Future operating model |

### Proposed 3-Phase Roadmap (Michelle's Assessment)

1. Discover in Compass → apply in HR systems.
2. Discover + track applications in Compass.
3. End-to-end internal mobility through Compass.

Most consistent with the meeting's direction, per Michelle — **a proposal to validate, not a committed roadmap.**

---

## Biggest Strategic Risk

**Is Compass an Opportunity Discovery Platform or an Opportunity Transaction Platform?** Everything else follows from this. Discovery-only: current approach holds. Front door for internal mobility: applications, status tracking, notifications, and recruiter workflows eventually move closer to Compass. Michelle's recommendation: make this an explicit architectural decision at the next discovery session — nearly every design thread in this meeting was circling it.

---

## Timeline Risks

**TIMELINE RISK: Same unresolved question, third independent surfacing today.** SJR whiteboard, OTG/Compass interim-state thread, and this meeting's discovery-vs-transaction framing are all the same open decision: does Compass eventually own Creation/Apply, or stay pure discovery/routing? Three independent conversations, one day, same unanswered question — needs a forcing decision from Adrian, using this meeting's framing since it's the sharpest version. See also [Competency discovery notes](2026-09-21-W39-r1-discovery-competency-hr-systems.md) (Risk 8) and [SJR Whiteboard notes](2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md).

**TIMELINE RISK: API specs are a stated dependency with no due date.** Blocks R1 planning and, indirectly, Tuesday's estimation delivery (Mainstream/Internal Jobs discovery scope, risk register R-07) if it drags.

---

## Connections to This Week's Threads

- **R-07 (HRPS/Cumulus API access):** update with today's findings — HRPS has no API yet but believes one is buildable; Cumulus has working capabilities; both confirm internal/external job flagging.
- **R-13 (SJR mechanism) / R-14 (RBAC/ringfencing):** the agency short-code finding is a concrete input to Pillar 1/4. Journey Risk 1 and the "ringfencing expands late" escalation item are the same underlying risk as R-14, now with detail.
- **Competency discovery notes, Risk 8:** this meeting is the fuller articulation — Option A vs. B is the concrete decision point that risk was gesturing at.
- **[Scope Slide Staleness Check](../decisions/2026-09-21-W39-r1-scope-slide-staleness-check.md):** Option A matches the concept/solution split already applied to SJR on that slide — worth applying the same framing to Internal Jobs generally.
- **Risks 1–8 and the 8-item escalation table are not yet in the risk register.** Michelle's draft, not room-agreed — decide which get promoted to formal R-IDs versus stay draft until validated.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Investigate whether HRPS stores agency tagging for ringfencing | HRPS team | Not specified | 🔴 High | Not Started |
| Confirm Cumulus agency short-code mapping approach for ingestion | Compass team / Michelle Yip | Not specified | 🔴 High — affects ingestion design | Not Started |
| Assess whether HRPS can build an API for internal job retrieval | HRPS team | Not specified | 🔴 High | Not Started |
| Share Cumulus API/connector documentation | Vincent Kwok | Not specified | 🟡 Medium | Not Started |
| Raise the discovery-vs-transaction-layer question with Adrian as a forcing decision | Michelle Yip | Before it resurfaces a fourth time | 🔴 High | Not Started |

**Note:** none of the above have due dates. Given three independent surfacings of the same unresolved question today, fix a date on the Adrian item first — it's the one most likely to actually close the loop.

---

## Next Steps

- Raise the "three independent surfacings" pattern with Adrian directly — worth its own short conversation, not another discovery round.
- Fold the agency short-code finding into this week's Pillar 1/4 RBAC work.
- Update risk register R-07 with today's HRPS/Cumulus findings.

---

*Related: [Competency & Proficiency Configuration notes](2026-09-21-W39-r1-discovery-competency-hr-systems.md) (same meeting), [SJR Whiteboard notes](2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md), [Scope Slide Staleness Check](../decisions/2026-09-21-W39-r1-scope-slide-staleness-check.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-13, R-14)*
