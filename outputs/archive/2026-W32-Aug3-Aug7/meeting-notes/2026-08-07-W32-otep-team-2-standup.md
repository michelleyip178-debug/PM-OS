# Meeting Notes: OTEP Team 2 Stand-up

**Date:** 2026-08-07

**Time:** 11:00–11:15 AM (per today's calendar)

**Attendees:** Michelle Yip, Pow Hwee Tan, Léo Milbor, Thomas Huchedé, Hao Eng, Amber Tong, Rathika, Fanxu

**Meeting Type:** Daily engineering sync — Sprint 7 status

**Duration:** ~15 minutes

---

## Summary

Urgent action needed today: disable the POCDEX profile call (Léo). Otherwise a normal sprint-close standup — Thomas on search tickets and Rathika's bug fixes, Hao Eng pushing smoke tests into the deployment pipeline, and Fanxu pulled onto the Transit Gateway (TGW) issue with Fabian — the same connectivity blocker flagged in this morning's Squad Sync. Amber owes Michelle the R1 planning timeline by next Wednesday.

---

## Decisions Made

1. **Disable the POCDEX profile call — urgent**
   - **Why:** Not stated explicitly in the raw notes, but flagged as urgent for Pow Hwee and Léo specifically.
   - **Who decided:** Raised at standup, assigned to Léo to action.
   - **Impact:** Given this morning's Squad Sync flagged POCDEX API connectivity as broken (Transit Gateway no longer supported), this is likely a direct mitigation — disabling the call rather than letting it fail silently or block other flows while the infra issue is being worked.

2. **Hao Eng's smoke test work reprioritized — push into deployment pipeline first, ahead of the POCDEX workflow update**
   - **Why:** Not stated explicitly, but the notes flag "higher priority" on the POCDEX development workflow update, which reads as a reprioritization signal worth clarifying (see Open Questions).
   - **Who decided:** Raised at standup.
   - **Impact:** Two Hao Eng workstreams in flight — Playwright/smoke test into the pipeline (new MR on OTEP-WEB) and the POCDEX development workflow update. Sequencing between them isn't fully clear from the raw notes.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Disable the POCDEX profile call | Léo Milbor (with Pow Hwee) | Today — flagged urgent | 🔴 Critical | 🔴 Not Started |
| Work on search tickets | Thomas Huchedé | No date set | High | 🟡 In Progress |
| Tweak competency matching, get MR reviewed and deployed | Thomas Huchedé (implied) | No date set | Medium | 🟡 In Progress — MR review pending |
| Push smoke test into deployment pipeline (new MR on OTEP-WEB) | Hao Eng | No date set | High | 🟡 In Progress |
| Update development workflow for POCDEX | Hao Eng | No date set — flagged "higher priority" | 🔴 High | 🔴 Not Started |
| Send R1 planning timeline to Michelle | Amber Tong | Next Wednesday (2026-08-12) | Medium | 🔴 Not Started |
| Test smaller bug fixes (2 tickets issued to Thomas) | Rathika | No date set | Medium | 🟡 In Progress |
| Assist Fabian on the TGW (Transit Gateway) issue | Fanxu | No date set — tied to today's connectivity blocker | 🔴 High | 🟡 In Progress |
| Check that Keycloak accounts can log in (UAT readiness) | Unassigned | No date set | High | 🔴 Not Started |

**Notes:**
- Only one item (Amber's R1 timeline) has a due date. Given the urgency language on the POCDEX profile call and the workflow update, both of those probably deserve same-day or next-day dates rather than none.
- The Keycloak login check has no named owner in the raw notes — worth confirming who's actually running this before treating it as covered.

---

## Key Insights & Quotes

**On the POCDEX profile call disable:**
- This is very likely the team's tactical response to the connectivity blocker raised in this morning's Squad Sync (POCDEX API ready, infrastructure connectivity not — Transit Gateway approach no longer supported). Disabling the call is a plausible short-term mitigation to stop failures cascading into other flows while the infra fix is worked. Worth confirming this interpretation with Pow Hwee/Léo directly since the raw notes don't state the "why."

**On Fanxu/Fabian and TGW:**
- This is the same Transit Gateway issue flagged in this morning's Squad Sync as the root cause of the POCDEX connectivity blocker. Fanxu joining Fabian on it is a second engineer now on the same root-cause investigation — worth checking this isn't duplicating Rama/Pow Hwee's parallel investigation from Squad Sync, or if it's a deliberate split (e.g., Fanxu/Fabian on the technical fix, Rama/Pow Hwee on the recovery-path/escalation decision).

**Strategic considerations:**
- Amber's R1 planning timeline (due next Wednesday) is one of the four unowned R1 artifacts flagged in Wednesday's R1 timeline planning meeting — specifically the Critical Path Timeline, which that meeting's notes flagged as the one to build first since everything else's urgency depends on what it reveals. Worth confirming this is the same artifact, not a separate or duplicate piece of work.

---

## Open Questions

- [ ] Why is the POCDEX profile call being disabled — is this the mitigation for this morning's Transit Gateway connectivity blocker? — **Owner:** Pow Hwee / Léo to confirm — **By:** Today
- [ ] Is Fanxu/Fabian's TGW work the same investigation as Rama/Pow Hwee's from this morning's Squad Sync, or a separate parallel track? — **Owner:** Michelle to confirm — **By:** Today, before duplicated effort compounds
- [ ] Is Amber's R1 planning timeline the same artifact as the R1 Critical Path Timeline flagged in Wednesday's R1 timeline planning meeting? — **Owner:** Michelle to confirm with Amber — **By:** Before next Wednesday
- [ ] Who owns the Keycloak login check — is this assigned, or still needs an owner? — **Owner:** Unassigned — **By:** Not set
- [ ] What's the sequencing between Hao Eng's two workstreams (smoke test push vs. POCDEX workflow update, the latter flagged "higher priority")? — **Owner:** Hao Eng / Michelle to clarify — **By:** Today

---

## Blockers

1. **POCDEX profile call actively failing or at risk, pending disable**
   - **Blocked by:** Same root cause as this morning's Squad Sync connectivity blocker (Transit Gateway no longer supported)
   - **Impact:** Urgent enough to require an immediate disable rather than waiting for the underlying fix
   - **Resolution:** Léo actioning today; underlying TGW fix owned by Fanxu/Fabian (and separately Rama/Pow Hwee per Squad Sync)

---

## Timeline Risks

- **TIMELINE RISK:** This is the second meeting today (after this morning's Squad Sync) surfacing the POCDEX/Transit Gateway connectivity issue, now with a concrete tactical response (disable the profile call) rather than just an investigation. Worth updating today's consolidated RAID log (`outputs/analyses/2026-08-07-W32-raid-log.md`) to reflect that this has moved from "under investigation" to "mitigation in progress" — the disable action is new information since the RAID log was last generated.
- **TIMELINE RISK:** Amber's R1 timeline commitment (next Wednesday, 2026-08-12) should be checked against the "within 48 hours" recommendation from Wednesday's R1 timeline planning meeting notes for the four R1 artifacts. If this is the Critical Path Timeline, next Wednesday is closer to a week out from that meeting, not 48 hours — worth confirming whether that's an accepted delay or worth a nudge.

---

## Next Steps

**Immediate (Today):**
- Léo to disable the POCDEX profile call, with Pow Hwee
- Confirm whether Fanxu/Fabian's TGW work overlaps with Rama/Pow Hwee's Squad Sync investigation
- Clarify Keycloak login-check ownership

**Short-term (This week):**
- Thomas to continue search tickets + competency matching MR review/deploy + Rathika's 2 bug-fix tickets
- Hao Eng to push smoke test MR (OTEP-WEB) and the POCDEX development workflow update — sequencing TBC

**Follow-up:**
- Amber to send R1 planning timeline to Michelle by Wednesday 2026-08-12

---

## Context for Future Reference

The POCDEX profile call disable is the most concrete action taken today on the connectivity blocker flagged in this morning's Squad Sync (`outputs/meeting-notes/2026-08-07-W32-otep-squad-sync.md`) — worth folding into that thread's tracking rather than treating as a separate issue. Fanxu joining Fabian on the TGW root-cause work is the engineering-side counterpart to the PM-side ownership resolution (Rama) confirmed earlier today.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original notes</summary>

Urgent for Pow Hwee and Leo - Leo to disable the calling of the pocdex profile.

Thomas will work on the search tickets. Competency Matching needs a bit of tweak and will require review of MR to deploy.
Hao Eng work on playwright thing and will try to push out the smoke test first into the deployment pipeline. Creating another MR on OTEP-WEB for smoke test first. higher priority - Update the development workflow for pocdex.

Amber to pass michelle R1 planning timeline by next wed.
Rathika to test the smaller bug fixes and have issued 2 tickets to Thomas.
Fanxu to assist fabian in the TGW issue.

UAT readiness - Check that Keycloak accounts can login.

</details>
