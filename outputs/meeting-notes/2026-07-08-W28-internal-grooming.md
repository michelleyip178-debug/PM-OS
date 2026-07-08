# Meeting Notes: Internal Grooming — OTEP-Pathfinder

**Date:** 2026-07-08

**Attendees:** Michelle (facilitating/PM), engineering team (Keycloak/WOGAD owner, ingestion/ring-fencing owner — not individually named in source)

**Meeting Type:** Engineering sync / grooming

**Duration:** ~1 hour (timestamps to 0:59:42)

---

## Summary

Grooming session focused on unblocking environments and data so the team can demo/test opportunities and ring-fencing. Landed on a clear priority order — OTG ingestion, Careers@Gov (C@G) ingestion, ring-fencing, competency matching, then WOGAD SSO last — explicitly to stop WOGAD's infra dependencies from derailing near-term demo goals. Environment fragility (proxies, tunnels, config drift between local/dev/QA/prod) and CFT/ingestion instability were the two biggest pain points surfaced.

---

## Decisions Made

1. **Sprint priority order locked: OTG ingestion → Careers@Gov (C@G) ingestion → ring-fencing → competency matching → WOGAD (lowest)**
   - **Why:** Acknowledges the real dependency chain (ingestion → ring-fencing → demo/test) and prevents the team from getting pulled into WOGAD's infra rabbit holes at the cost of core functionality.
   - **Who decided:** Team, in grooming.
   - **Impact:** **This directly affects today's Sprint 6 planning brief work.** OTEP-71 (WOG AD login) stays in Sprint 6 but is now confirmed as *explicitly lowest priority* within the auth-core opening commitment — worth flagging at Thursday's planning, since the brief currently lists OTEP-71 as ✅ Ready alongside OTEP-111/110 without a priority ordering between the three. This grooming session says WOGAD work specifically (which OTEP-71 depends on — see #26/WOG AD onboarding) should not derail ingestion/ring-fencing work. Remaining WOGAD-related stories pushed to Sprint 7.

2. **Competency-related stories and filters moved to next sprint**
   - **Why:** Overload prevention — these depend on data/logic not yet stable.
   - **Who decided:** Team.
   - **Impact:** This matches what's already tracked in the [Sprint 6 planning brief](2026-07-07-W28-sprint-plan-brief.md) — OTEP-336/570 (competency match signals) were already flagged 🔴 Not ready, blocked on Core competency endpoint (#41) and POCDEX data (#31). This grooming session confirms and formalizes that call.

3. **Keycloak dev/QA: keep existing local users, add WOGAD as an additional IDP**
   - **Why:** Preserves dev/QA test access without disrupting business-user UX. Team considered a "hidden dev signup" or special button approach so QA/UAT users aren't confused by two login options.
   - **Who decided:** Keycloak/WOGAD engineer + team.
   - **Impact:** Two login paths in dev/QA environments going forward — needs a UX decision on visibility (hidden vs. labeled dev button).

4. **Accept a less "perfect" demo environment to prioritize ingestion/ring-fencing work**
   - **Why:** Explicit pushback on past sprints' time spent polishing dev/demo environments instead of shipping functionality. Direct quote: "How much time have we spent already trying to... have dev in a nice place... and not actually doing the work... our schedule is quite tight already."
   - **Who decided:** Team (led by the frustration voiced in the meeting).
   - **Impact:** A deliberate trade-off — worth remembering if a stakeholder later asks why the demo environment looks rough; this was a conscious call, not neglect.

5. **Analytics stories consolidated into one** (opportunity clicks + login/auth events, where possible)
   - **Why:** Previously scattered across multiple stories.
   - **Who decided:** Team.
   - **Impact:** Single story to groom/estimate going forward instead of several fragments.

6. **"No agency logo" story removed — folded into the main agency logo story**
   - **Why:** Redundant as a standalone item.
   - **Who decided:** Team.
   - **Impact:** **Worth double-checking against OTEP-613** ("[FE] Opportunities with no agency logo to be displayed with a default logo") — if this is the same ticket being referenced, confirm it's not being duplicated or dropped incorrectly, since OTEP-613 is currently tracked as ready filler work for Sprint 6 in the planning brief. See Open Questions below.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Meet with Fangxi and Adrian to clarify WOGAD connectivity, review prior notes, check redirection/infra constraints | Michelle (planned the meeting) | Not specified | 🔴 High | Not Started |
| Create ticket to coordinate CSC connectivity with Fangxi ahead of August integration | Not specified — likely Michelle | Not specified — before August | 🔴 High | Not Started |
| Check proxy/network prerequisites for CFT and WOGAD are correctly configured | Infra-oriented engineer | Not specified | 🔴 High | Not Started |
| Stabilize OTG ingestion pipeline; verify opportunity uploads reflect correctly in UI/DB | Backend engineer (ingestion owner) | Not specified | 🔴 High | Not Started |
| Stabilize Careers@Gov (C@G) ingestion (second source, already documented in [OTG Ingestion Logic v3](../../context-library/decisions/otg-ingestion-logic-v3.md) as a unified pipeline with OTG) | Same/related backend engineer | Not specified | 🔴 High | Not Started |
| Escalate CFT upload issues as a key risk in internal channels; coordinate with core team fixing competencies/CFT | Michelle / tech lead | Not specified | 🔴 High | Not Started |
| Coordinate with products team to pump test data once ingestion is stable (OTG, C@G, ring-fencing scenarios) | Michelle / tech lead | Not specified | 🟡 Medium | Not Started |
| Configure Keycloak dual-IDP for dev/QA (existing local users + WOGAD) with safe dev-only UX | Keycloak/WOGAD engineer | Not specified | 🟡 Medium | Not Started |
| Prototype/test WOGAD redirect + token exchange flows opportunistically, time-permitting | Same Keycloak/WOGAD engineer | Not specified — explicitly not priority | 🟢 Low | Not Started |
| Implement ring-fencing logic once ingestion data is available; validate against test data requirements | Backend engineer (ring-fencing), supported by products | Not specified | 🟡 Medium | Not Started — blocked on ingestion |
| Implement competency matching via existing facade API; map C@G/OTG categories to master values | Engineer responsible for matching logic | Not specified | 🟡 Medium | Not Started |
| Move OTEP-336/570 to next sprint on the board | Michelle | Not specified | 🟢 Low (admin) | Confirms existing sprint-brief flag |
| Re-arrange tickets to reflect agreed priority order; fold in/remove redundant stories; screenshot board and share with team | Michelle | Not specified | 🟡 Medium | Not Started |
| Capture ingestion refactor work as tasks within ingestion stories, if needed | Backend engineer + Michelle | Not specified | 🟢 Low | Not Started |

**Notes:**
- **No due dates were given for almost any action item in this meeting.** Recommend pushing for real dates on at least the top 3 (Fangxi/Adrian meeting, CSC connectivity ticket, OTG ingestion stabilization) before they drift.
- Several items list "Michelle" as owner by inference (she facilitated and made scope calls) rather than explicit assignment in the source — confirm these are correctly assigned, not defaulted to PM by omission.

---

## Key Insights & Quotes

**Process/prioritization insight:**
- "How much time have we spent already trying to... have dev in a nice place when it's dev environment to do the demo and spend so much time on trying to have a nice demo environment and not actually doing the work... our schedule is quite tight already." — this is a real pattern worth remembering: past sprints over-invested in demo polish at the expense of core delivery. Worth flagging if it recurs.

**Technical constraint:**
- "I don't like bypassing; you cannot test" — on the temporary workarounds (POST endpoints, service env hacks) used to get around CFT upload issues. The team doesn't trust these workarounds and knows they're not a real fix.

**Risk framing:**
- Redirection & proxy risk for SSO and CFT was explicitly named "biggest risk" in the session — worth carrying that framing into any escalation.

---

## Open Questions

- [x] ~~Is the "no agency logo" story removal the same ticket as OTEP-613?~~ Still worth a direct confirm at Thursday's planning even though the naming ambiguity from earlier transcription artifacts is resolved — if the "no agency logo" story really did get folded into a different ticket, make sure OTEP-613's ready status in the [sprint plan brief](2026-07-07-W28-sprint-plan-brief.md) still reflects reality. — **Owner:** Michelle — **By:** Before Thursday's Sprint 6 planning
- [x] ~~What is "OTAP-71"?~~ **Resolved 2026-07-08:** confirmed transcription typo for OTEP-71 (WOG AD login), the same ticket corrected in Jira earlier today. This grooming session's WOGAD prioritization call applies directly to OTEP-71.
- [ ] Who specifically owns the Fangxi/Adrian meeting, the CSC connectivity ticket, and proxy/network checks? Source material implies but doesn't explicitly name owners for several infra action items. — **Owner:** Michelle — **By:** Before these items are considered actionable
- [ ] Is there a target date for the Fangxi/Adrian WOGAD/infra meeting? — **Owner:** Michelle — **By:** Not specified in source, needs scheduling

---

## Risks

### Addressed in this meeting
1. **Redirection & proxy risk for SSO and CFT** — named explicitly as biggest risk; team wants to resolve blocking redirection issues before waiting on infra.
2. **Dependency on external teams/infra** (central SSO team, CSC connectivity, products, core team for competencies/CFT) — called out repeatedly; plan is to escalate CFT/competency issues in internal channels.
3. **Data availability for demo/testing** — plan is ingestion-first, then products pump data, then ring-fencing/matching can be proven end-to-end.
4. **WOGAD scheduling risk** — explicitly deprioritized rather than left ambiguous; OTEP-71 stays in Sprint 6 at low priority, rest moves to Sprint 7.

### Under-addressed / latent (flagged in source, no explicit mitigation assigned)
1. **Config drift between local/dev/QA/prod** — tunnels, `/etc/hosts` overrides, differing DNS/IP setups per environment, with real risk that manual local tweaks aren't replicated and break deployment. No agreed infra blueprint or checklist exists yet.
2. **Test strategy and observability gaps** — team explicitly doesn't trust current workarounds ("I don't like bypassing; you cannot test") but there's no defined end-to-end test/observability plan for confirming fixes hold, or for catching WOGAD redirection issues if they reappear silently.
3. **Single-point-of-failure roles** — one person central to opportunities ingestion + ring-fencing logic, another central to Keycloak/WOGAD config, at least one explicitly named "on the critical path." No documented backup owner or pairing plan mentioned.
4. **Cross-team expectation management** — no formal risk log or explicit escalation to leadership beyond "send messages to internal channels" and "create a ticket for Fangxi." No confirmed SLAs from core team (competencies/CFT) or infra team (WOGAD/CSC).

---

## Next Steps

**Immediate (This Week):**
- Schedule the Fangxi/Adrian meeting on WOGAD/infra
- Create the CSC connectivity ticket
- Push for real due dates on the top-priority action items (currently none specified)

**Short-term (Next 1-2 Weeks):**
- Stabilize OTG and Careers@Gov (C@G) ingestion
- Escalate CFT/competency issues as a tracked risk, not just an internal-channel message
- Configure Keycloak dual-IDP for dev/QA

**Follow-up Meeting:**
- Not specified in source — recommend a short check-in once ingestion stabilization work is underway, to confirm ring-fencing can actually start.

---

## Context for Future Reference

This session directly reinforces and formalizes a call already reflected in the [Sprint 6 planning brief](2026-07-07-W28-sprint-plan-brief.md): OTEP-336/570 (competency match signals) stay out of Sprint 6, blocked on the same root causes (Core competency endpoint #41, POCDEX data #31) already tracked there. Worth keeping these two documents cross-referenced rather than treating this grooming's competency decision as new information.

**Names/terms clarified after initial processing:** "Kerosene.gov/cars.gov" was a mishearing/mistranscription of **Careers@Gov (C@G)** — not a new system, but the already-documented second ingestion source that pairs with OTG throughout [OTG Ingestion Logic v3](../../context-library/decisions/otg-ingestion-logic-v3.md) (type/category mapping and field rules already cover C@G alongside OTG). "OTAP-71" was a transcription typo for **OTEP-71** (WOG AD login), the same ticket already corrected in Jira today. "WorkID" was also a mistranscription — the correct term is **WOGAD** throughout.

**Still-new names/terms** (not previously seen in workspace tracking): Fangxi (infra/central-team contact for WOGAD/CSC), CSC connectivity (integration expected ~August, ties to the same CSC/SSO thread referenced elsewhere as open item #42 in `00-hub/open-items.md`).

**Possible connection to tracked open items:** Open item #42 in `00-hub/open-items.md` already tracks "WOG AD onboarding infra follow-up — Pow Hwee" with Pow Hwee following up with infra on WOG AD onboarding status, feeding open item #26. This grooming session's infra/redirection/proxy concerns may be the same underlying thread — worth checking whether #42 should be updated with this session's detail rather than treated as separate.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: PM-authored structured debrief (Big Picture / What Went Well / Pain Points / Risks Addressed / Risks Under-Addressed / Decisions / Action Items / Overall Read format), submitted via `/meeting-notes` invocation on 2026-07-08. Session titled "internal grooming," timestamped to approximately 0:59:42 total duration.

</details>

---

*Generated: 2026-07-08*
*Next: Confirm OTEP-613 vs. "no agency logo" ticket overlap, and get real owners/dates on the Fangxi/Adrian WOGAD meeting and CSC connectivity ticket, before Thursday's Sprint 6 planning.*
