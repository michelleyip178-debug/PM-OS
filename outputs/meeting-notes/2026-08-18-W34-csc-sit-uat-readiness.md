# Meeting Notes: CSC SIT/UAT Readiness

**Date:** 2026-08-18

**Attendees:** Michelle YIP, Rama MOORTHY, Imelda MO, Pow Hwee TAN

**Meeting Type:** Engineering/stakeholder sync

**Topic:** CSC SSO integration — SIT and UAT readiness status

---

## Summary

SSO SAT testing is done in Dev and UAT test cases/materials have been prepared and shared with CSC (Marcus, Cheryl). But SIT/Staging can't run meaningful end-to-end tests yet — Adrian's application-side changes are still unconfirmed, and without them the team would only be testing connectivity and protocol exchange, not real application behavior. Some UAT test cases are also still incomplete because required accounts aren't available. Net read: CSC is ready to *start* UAT prep, not ready to *execute* full UAT.

---

## Decisions Made

None made in this meeting — this was a status/readiness check, not a decision point. The team surfaced what's blocking SIT rather than deciding how to resolve it.

---

## Readiness Snapshot

| Area | Status |
|---|---|
| CSC engagement/alignment | 🟢 Ready |
| UAT test cases drafted | 🟢 Ready |
| SSO Dev testing (SAT) | 🟢 Completed |
| SIT/Staging E2E testing | 🟠 Pending application changes |
| UAT accounts/data | 🟠 Partially ready |
| Defect triage | 🟠 Not completed |
| End-to-end UAT execution | 🔴 Not yet ready |

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|---|---|---|---|---|
| Review CSC UAT test cases and provide comments | Rama MOORTHY | No due date mentioned — schedule within 48 hours | High | 🔴 Not Started |
| Check with Adrian LO on status/confirmation of application-side changes | Rama MOORTHY | No due date mentioned — schedule within 48 hours | High | 🔴 Not Started |
| Complete application-side changes needed for SIT | Adrian LO | No due date mentioned | High | 🔴 Not Started — blocking SIT |
| Populate remaining UAT test cases once accounts are available | Imelda MO | No due date mentioned | Medium | 🔴 Not Started |
| Move UAT materials update toward broader status update (Marcus, Cheryl) | Imelda MO | No due date mentioned | Medium | 🟡 In Progress |

**Notes:**
- No due dates were given for any item in this meeting — all five should get one within 48 hours, especially Adrian's application changes since it's the single blocker keeping SIT from being meaningful.

---

## Key Insights & Quotes

**Technical Constraints:**
- Pow Hwee TAN repeatedly flagged that SSO config is largely deployed, but without Adrian's application-side changes, SIT testing would only exercise connectivity and protocol exchange — not real end-to-end application behavior. Running SIT now would produce a false-positive signal.
- UAT test case gaps trace to a data problem, not a design problem: required accounts aren't available yet, so those cases can't be populated.

**PM Interpretation (Michelle's read, captured in the source notes):**
CSC readiness sits at "ready to start UAT preparation," not "ready to execute full UAT." The distinction matters because test cases and Dev-level SSO both look done, which could read as more progress than the SIT/application-change gap actually reflects.

---

## Open Questions

- [ ] What is Adrian's actual status/ETA on the application-side changes? - **Owner:** Rama MOORTHY - **By:** Not yet scheduled, needs a date
- [ ] When will the missing UAT accounts be available to unblock the incomplete test cases? - **Owner:** Imelda MO - **By:** Not yet scheduled, needs a date

---

## Blockers

1. **SIT/Staging can't run meaningful E2E tests**
   - **Blocked by:** Adrian LO's application-side changes, status unconfirmed
   - **Impact:** Any SIT run today would only validate connectivity/protocol, not real behavior — a false-positive readiness signal if treated as done
   - **Resolution:** Rama to check with Adrian on status; needs a firm confirmation or date

2. **Some UAT test cases can't be populated**
   - **Blocked by:** Required accounts not yet available
   - **Impact:** Partial UAT coverage until accounts land
   - **Resolution:** Needs an owner and date for account provisioning — not yet assigned in this meeting

---

## Timeline Risks

- **TIMELINE RISK:** No due dates were attached to any of the five action items, including the one blocking SIT (Adrian's application changes). Given CSC SSO is gated behind WOG AD per [open-items.md #30](../../../PM-skills-ALL-1/00-hub/open-items.md), and course/UAT data delivery is now confirmed against CSC's 31 Aug-4 Sep window, an undated SIT blocker risks compressing an already tight runway. Recommend forcing a date from Adrian this week rather than letting "Rama will check" stay open-ended.

---

## Context for Future Reference

This is the first dedicated meeting note on CSC SIT/UAT readiness — no prior file existed under this topic. Related context:
- [open-items.md #30](../../../PM-skills-ALL-1/00-hub/open-items.md) — CSC SSO technical feasibility confirmed 2026-06-26 (Pow Hwee + Muhammad Herman HARTOYO); architecture is OTEP/Keycloak as IdP, DLE as Relying Party, standard OIDC flow; sequentially gated behind WOG AD (#26), which resolved 2026-08-18.
- [2026-08-18-W34-week33-raid-log.md](../analyses/2026-08-18-W34-week33-raid-log.md) — course data delivery date conflict (R7) was just resolved in favor of CSC's official 31 Aug-4 Sep window as authoritative.
- With WOG AD now resolved, CSC SSO is technically unblocked on that front — this meeting shows the actual remaining gate is application-side readiness (Adrian) and UAT data completeness (accounts), not the WOG AD dependency.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

**What was discussed regarding CSC:**

**What appears ready**

✅ SSO SAT in Dev has been completed
- Rama MOORTHY stated that SSO testing (SAT) had already been completed in the development environment.

✅ CSC UAT test cases have been prepared
- Rama MOORTHY said he would review the UAT test cases for the CSC team and provide comments.

✅ UAT materials have been shared
- Imelda MO mentioned materials had been shared with Marcus and Cheryl and were moving towards a broader status update.

**What is NOT ready yet**

⚠️ SIT/Staging testing is not fully ready
- Although SSO config work is largely deployed, Pow Hwee TAN repeatedly highlighted that application-side changes are still required before meaningful SIT testing can happen. Otherwise, the team would only be testing connectivity and protocol exchange rather than end-to-end application behaviour.

⚠️ Adrian's application changes are still pending confirmation
- Both Michelle and Rama MOORTHY discussed that Adrian LO still needs to complete or confirm changes on the application side, and Rama committed to checking with him.

⚠️ Some UAT test cases are incomplete
- Imelda MO highlighted that some test cases had not yet been populated because required accounts were not available yet.

**PM interpretation:**

The meeting suggests CSC is probably at a "ready to start UAT preparation" stage rather than "ready to execute full UAT."

</details>
