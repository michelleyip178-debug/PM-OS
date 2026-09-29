---
date: 2026-09-29
week: 2026-W40
type: meeting-notes
meeting_type: team sync (programme-level, cross-workstream)
attendees: [Adrian Ang, Michelle Yip, Li Ting Kway, Rama Moorthy, Jobelle Lim, Adrian Lo, Kingsley, Victor Ong, Radhika, Barry Lim, Imelda Mo]
duration: 60 min (9:30-10:30am)
source: transcript, supplied as pre-structured programme-level debrief rather than raw transcript
---

# Meeting Notes: OTEP Squad Sync

**Date:** September 29, 2026, 9:30-10:30am

**Attendees:** Adrian Ang, Michelle Yip, Li Ting Kway, Rama Moorthy, Jobelle Lim, Adrian Lo, Kingsley, Victor Ong, Radhika, Barry Lim, Imelda Mo

**Meeting Type:** Programme-level squad sync, cross-workstream

**Duration:** 60 minutes

---

## Summary

Overall programme health: 🟡 Amber. Three themes dominated: MVP/VAPT closure, Employment Changes timeline risk, and R1/R1.1 scoping for Opportunity and CMM. The team has strong visibility into its own risks and is escalating early, but multiple workstreams (MVP, Employment Changes, CMM, Cost Aggregator, R1 planning) are converging on the same handful of people, and several critical paths depend on external parties responding on time.

**Resolved, was flagged as a contradiction:** this transcript describes Li Ting Kway actively discussing R1 design and wireframing work with Michelle and Adrian. That initially conflicted with [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) risk R-10, reopened 27 Sep, which stated there was no named Compass designer on R1 at all. **Confirmed 29 Sep, direct from Michelle: Li Ting Kway will be actively co-planning R1 design.** R-10 has been updated to reflect this (third position change in three days). Everything rewritten today assuming no designer — the R1 one-pager's Section 8/13/14, the Grooming Readiness Checklist, and the Sprint 11 Planning Agenda's split-DoR proposal — now needs a second pass to reflect her involvement before Thursday.

---

## Decisions Made

1. **Aggressively remediate VAPT findings before the second scan**
   - **Why:** No guarantee there will be sufficient time after the second scan for further fixes.
   - **Who decided:** Team, per Rama/Jobelle's tracking
   - **Impact:** Remediation urgency raised for every team currently holding open findings.

2. **DLP engagement starts immediately; AI IDSE clearance proceeds via email, not a formal meeting**
   - **Why:** Timeline constraints make waiting for a formal AI governance meeting too slow.
   - **Who decided:** Victor Ong, with Gek Khiang as reviewer
   - **Impact:** Faster path to clearance, but review rigor depends on email back-and-forth rather than a live session.

3. **Explore bringing production-readiness activities forward ~1 week**
   - **Why:** Earlier soft launch is seen as beneficial if feasible.
   - **Who decided:** Rama Moorthy, Adrian Ang
   - **Impact:** Compresses an already short soft-launch window further — see Hidden Risk 2 below.

4. **Employment Changes needs a dedicated planning session with diagrams before engineers build**
   - **Why:** Adrian's explicit concern: "engineers may build based on their own interpretation if the flow is not made explicit." Requirements haven't reached implementation-grade clarity, especially around NRIC change handling.
   - **Who decided:** Adrian Ang
   - **Impact:** 3pm planning session scheduled same day; engineering alignment sessions to follow.

5. **Internal Jobs remains in R1 scope; Opportunity squad starts design, wireframing, and grooming now**
   - **Why:** R1 scope is becoming clearer and existing resources are freeing up — this was the concern that Opportunity had lagged behind MVP workstreams.
   - **Who decided:** Michelle Yip, Adrian Ang, Li Ting Kway
   - **Impact:** Unblocks Opportunity squad's next steps. Li Ting Kway confirmed 29 Sep as actively co-planning R1 design — see resolved contradiction in Summary.

6. **Move to proper story sizing and grooming instead of carrying unestimated work sprint-to-sprint**
   - **Why:** Adrian's diagnosis: teams aren't estimating stories properly, so unfinished work just rolls forward without a real capacity signal.
   - **Who decided:** Adrian Ang
   - **Impact:** New process proposed: epic one-pager → product/design walkthrough → wireframes → engineering review → story sizing → sprint planning. Matches the story-points + poker-sizing fix already agreed at the 27 Sep Adrian/Michelle sync.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Obtain latest VAPT remediation status from Adrian Lo | Jobelle Lim | Not specified — flag for 48hr follow-up | 🔴 High | Not Started |
| Follow up with NCS on rescan turnaround time | Jobelle Lim | Not specified | 🔴 High | Not Started |
| Convene VAPT urgency review call | Rama Moorthy | Not specified | 🔴 High | Not Started |
| Continue DLP discussions with DLP team | Rama Moorthy | Not specified | 🟡 Medium | In Progress |
| Clarify AI approval questions and progress IDSE path | Victor Ong | Not specified | 🟡 Medium | In Progress |
| Complete performance testing status and recommendation | Victor Ong, Radhika, Rama Moorthy | Not specified | 🟡 Medium | Not Started |
| Review GovTech go-live documentation | Barry Lim | Not specified | 🟡 Medium | Not Started |
| Complete cyber risk assessment inputs | Rama Moorthy | Not specified | 🟡 Medium | Not Started |
| Send and align Employment Changes test cases | Imelda Mo | Not specified | 🔴 High | Not Started |
| Prepare Employment Changes implementation flow/diagram | Engineering team / Rama Moorthy | Same-day 3pm session | 🔴 High | Not Started |
| Evaluate bringing readiness activities earlier | Rama Moorthy, Adrian Ang | Not specified | 🟡 Medium | Not Started |
| Start Opportunity R1 design, scope, and story grooming | Michelle Yip, Li Ting Kway | **Tomorrow morning (30 Sep), with the engineers** | 🔴 High | Not Started — designer confirmed (Li Ting Kway), date confirmed |
| Conduct PM-level Opportunity jamming session (Adrian's term) | Michelle Yip, Adrian Ang | Not specified | 🟡 Medium | Not Started |
| Align future-state competency governance and integration roadmap | Adrian Ang, Rama Moorthy, business stakeholders | Not specified | 🟡 Medium | Not Started |

**Notes:**
- Almost no item in this list has a due date. Given the amber health rating and the compressed-timeline risk below, this is itself a gap worth raising — not just noting.

---

## Key Insights & Quotes

**On Employment Changes requirements clarity:**
- Adrian, paraphrased: engineers may build based on their own interpretation if the flow isn't made explicit. This is the single clearest signal in the meeting that requirements haven't reached implementation-grade clarity yet — not a scheduling problem, a clarity problem.

**On soft launch timing:**
- Adrian noted the soft launch window is "effectively very short," and that if VAPT closes early, pressure may arise to launch sooner — which makes post-launch deployments operationally harder, not easier. Nobody in the room raised go/no-go criteria, a rollback plan, or a contingency path in response.

**On PM capacity:**
- Adrian's implicit point (per the debrief): having one PM run discovery, execution, UAT, and go-live continuously across every stream is difficult. The stated mitigation — onboarding Zhikai, informal mentoring — takes time to pay off and may not hold if timelines compress further.

**On competency governance:**
- Rama stated the CMM discussion's framing differed from his own latest understanding of the plan. Source of truth, governance ownership, and job-to-competency tagging ownership are all still open questions, deferred until CMM confidence is built.

---

## What Went Well

1. **Strong visibility of delivery risks** — VAPT status, Employment Changes slippage, and future HRPS/Cumulus integration dependencies were all surfaced actively, some months ahead of when they'd bite.
2. **Early escalation of external dependencies** — NCS rescan turnaround, DLP engagement, AI IDSE clearance, cyber/cloud risk assessments are all being chased, not assumed.
3. **New PM onboarding (Zhikai)** — clear ownership split for CMM handover, with Adrian, Imelda, and Rama supporting ramp-up. Reduces concentration risk over time.
4. **Opportunity squad moving into delivery planning** — R1 scope clarifying, Internal Jobs confirmed in scope, resources freeing up (contingent on the designer-conflict flag above).
5. **Better product-engineering planning process proposed** — epic one-pager → walkthrough → wireframes → engineering review → sizing → sprint planning, directly addressing the unestimated-carryover problem.

## What Didn't Go Well

1. **Employment Changes timeline instability** — the biggest delivery warning signal in the meeting. Shifted dev timing, unresolved NRIC handling questions, engineering approach still needs diagrams.
2. **VAPT remediation ownership is fragmented** — Jobelle chasing multiple people, waiting on Adrian Lo, status consolidation requires too many parties. Still manual chasing, not a tracked process.
3. **Key-person concentration** — Adrian Lo, Kingsley, Li Ting, and Rama were each named as potential bottlenecks. Adrian explicitly flagged concern about Adrian Lo specifically. No mitigation in place yet beyond awareness.
4. **Future-state architecture misalignment** — CMM discussion revealed differing mental models on source of truth, governance, and ownership. Not a delivery blocker today, but a live ambiguity.

---

## Risks Being Actively Addressed

| Risk | Mitigation | Status |
|---|---|---|
| VAPT timeline | Jobelle chasing owners; Rama convening urgency review call; teams encouraged to remediate before second scan | Managed, still open |
| AI governance approval | Gek Khiang review; email route instead of waiting on a formal meeting | Managed |
| Employment Changes implementation clarity | 3pm planning session; architecture/flow diagrams; engineer alignment sessions | Active mitigation |
| Production readiness documentation | Go-live paperwork in progress; cloud risk assessment under review; cyber risk assessment references identified | Under control |

## Risks Not Being Addressed Sufficiently

🔴 **Resource overload** — MVP, Employment Changes, CMM, Cost Aggregator, and R1 planning are all running concurrently on the same people. Mitigation so far (new PM onboarding, informal mentoring) takes time and may not be enough if timelines compress.

🔴 **Soft launch assumptions** — short launch window, possible early-launch pressure if VAPT closes ahead of schedule, harder post-launch deployments. No go/no-go criteria, rollback plan, or contingency path documented anywhere in this discussion.

🔴 **Future-state business ownership unresolved** — competency governance ownership (approval, creation, HR-system lockdown timing, end-state governance) deferred until CMM confidence is built. Reasonable sequencing, but means real strategic decisions are still pending.

🟠 **Reliance on external-team goodwill** — Employment Changes testing strategy depends on another team providing data and test profiles outside their own scope. Appreciated, but not under OTEP's control.

---

## Open Questions

- [ ] Who owns go/no-go criteria, rollback plan, and contingency path for an early soft launch? — **Owner:** Unassigned — **By:** Before VAPT closes, in case it closes early
- [ ] Who mitigates key-person concentration on Adrian Lo, Kingsley, Li Ting, and Rama specifically? — **Owner:** Unassigned — **By:** Not specified

---

## Timeline Risks

- **TIMELINE RISK:** "Bring readiness activities forward ~1 week" compresses an already-short soft launch window further, right as the meeting itself flags that window as a risk with no documented contingency plan. Confirm this isn't optimizing the wrong variable before committing to the earlier date.
- **TIMELINE RISK:** "Start Opportunity R1 design, scope and story grooming" now has a hard date — **tomorrow morning, 30 Sep, with the engineers** — and Li Ting Kway is confirmed as the designer joining it. That reopens [R1 Risk Register R-10](../analyses/2026-09-16-W38-r1-risk-register.md) (now updated) and means Thursday's Sprint 11 Planning Agenda's split-DoR proposal — built on the assumption no designer exists — needs a same-day correction before it's used in the room. So does Section 8/13/14 of the [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md) and the [Grooming Readiness Checklist](../analyses/2026-09-29-W40-r1-grooming-readiness-checklist.md). All three were written hours before this confirmation landed.
- **TIMELINE RISK:** Michelle is already carrying the October one-pager deadline, interview prep, Zhikai's onboarding-buddy duties, and now Opportunity R1 planning simultaneously (per [27 Sep bi-weekly sync](2026-09-28-W40-adrian-biweekly-sync.md)) — this meeting adds "start R1 design/grooming" as a new item on top of a week already flagged as squeezed.

---

## Next Steps

**Immediate (This Week):**
- Confirm with Adrian directly whether Li Ting Kway is or isn't R1's designer — reconcile before Thursday's Sprint 11 planning, since that agenda's split-DoR proposal assumes she isn't.
- Attend/prep for the 3pm Employment Changes planning session.
- Chase VAPT remediation status (Jobelle) and rescan turnaround (NCS).

**Short-term (Next 2 Weeks):**
- Conduct the PM-level Opportunity jamming session with Adrian (his term for this session — not a grooming or planning ceremony).
- Align future-state competency governance with Rama and business stakeholders.
- Push for go/no-go criteria and a rollback plan ahead of any early soft-launch decision.

**Follow-up Meeting:**
- No specific date given for a follow-up on this sync; Employment Changes planning session same day at 3pm is the immediate next touchpoint.

---

## PM/SteerCo Takeaway

The single biggest concern isn't VAPT — it's the combination of Employment Changes timeline uncertainty, key-person dependency (Rama, Kingsley, Adrian Lo, Li Ting), and increasing overlap between MVP delivery, Opportunity R1, and future-state integration planning. The programme still looks deliverable, but the margin for error is shrinking. Employment Changes readiness and resource bottlenecks belong at the top of the RAID log this week, ahead of most security items — the security risks at least have named owners and active mitigation underway.

---

## Context for Future Reference

R-10 has now flipped three times in three days: Li Ting Kway named → unconfirmed/reopened 27 Sep → confirmed again 29 Sep, direct from Michelle. The risk register has been updated to reflect the current (29 Sep) position. Everything written earlier today assuming no designer — R1 one-pager Sections 8/13/14, the Grooming Readiness Checklist, and the Sprint 11 Planning Agenda's split-DoR proposal — is now stale and needs a same-day correction pass before Thursday's planning session, so the room isn't working from a version of the doc that's already wrong.
