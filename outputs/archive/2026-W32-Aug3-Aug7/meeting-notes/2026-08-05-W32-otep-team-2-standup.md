# Meeting Notes: OTEP Team 2 Stand-up

**Date:** 2026-08-05

**Attendees:** Michelle Yip, Amber, Fanxu, Adrian Lo, Pow Hwee Tan, Léo Milbor (implied — Keycloak/CSC SSO thread)

**Meeting Type:** Daily engineering sync

**Duration:** Not specified

---

## Summary

Quick daily sync. Progress confirmed on CompetencyID matching and the Playwright E2E framework. Fanxu is now picking up CSC connectivity work alongside Adrian Lo — this directly answers an open resourcing gap flagged since 27–28 Jul (OTEP-679 had no grooming owner). Pow Hwee and Léo are meeting today on Keycloak/CSC SSO integration — this is the same WS3 SSO thread that came up Red at this morning's CSC-Compass SIT standup. Michelle is chasing UAT environment readiness, with DB migrations and MR deployments planned to unblock WOG AD and Keycloak login.

---

## Decisions Made

1. **Fanxu to help Adrian Lo on CSC connectivity**
   - **Why:** Closes a resourcing gap flagged twice last week (`2026-07-27-W31-opportunities-feature-backlog.md`, `2026-07-28-W31-opportunities-product-risks.md`) — OTEP-679 (CSC connectivity) had no AC, no test coverage, and no owner assigned to even scope it
   - **Who decided:** Team 2, standup
   - **Impact:** OTEP-679 finally has a path to being scoped — worth checking whether this also unblocks the grooming session that was flagged as time-critical given the (now-slipping, per this morning's CSC standup) UAT start date

2. **Pow Hwee + Léo to hold a Keycloak/CSC SSO integration discussion today**
   - **Why:** Not stated explicitly, but this aligns with WS3 (SSO) being the one workstream flagged 🔴 Red at this morning's CSC-Compass SIT standup — DNS, endpoint routing, and intranet routing all unresolved there
   - **Who decided:** Team 2, standup
   - **Impact:** Worth connecting this internal Keycloak/SSO discussion to the CSC-side WS3 blockers (Adrian Lo/Pow Hwee already named as WS3 owners in this morning's standup) — these may be the same problem viewed from two different meetings rather than two separate issues

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Support Adrian Lo on CSC connectivity work | Fanxu | No date set | 🔴 High | Just started — ties to OTEP-679 |
| Hold Keycloak/CSC SSO integration discussion | Pow Hwee, Léo | Today | 🔴 High | Scheduled |
| Research R1 opportunities; bring questions to Michelle | Amber | This afternoon | 🟡 Medium | In Progress |
| Answer Amber's R1 opportunity questions | Michelle | This afternoon | 🟡 Medium | Not Started |
| Confirm UAT environment readiness | Michelle (chasing) | No date set | 🔴 High | Not Started — see Timeline Risk below |
| Perform DB migrations and deploy relevant MRs to UAT environment | Engineering (unnamed) | No date set | 🔴 High | Planned, not yet executed |

**Notes:**
- No due dates on the CSC connectivity or UAT environment items — both are high-priority and time-sensitive given this morning's CSC standup already flagged UAT timeline pressure (possible slip to 31 Aug). Worth pushing for dates tomorrow.

---

## Key Insights & Quotes

**On CSC connectivity resourcing:** This is the first confirmation that OTEP-679 has actual engineering time assigned (Fanxu + Adrian Lo) since it was flagged as unowned and untested in two separate risk docs last week. Worth updating those trackers.

**On UAT environment readiness:** DB migrations and MR deployments are described as "plans," not yet executed — this is a precondition for WOG AD and Keycloak login to work in the UAT environment, which is itself a precondition for SIT/UAT to proceed on the login workstream. Given this morning's CSC standup flagged SSO/WS3 as Red with no confirmable completion date, this UAT environment readiness work is on the same critical path.

---

## Timeline Risks

- **TIMELINE RISK: UAT environment readiness (DB migrations + MR deploys for WOG AD/Keycloak login) has no committed date, but this morning's CSC-Compass SIT standup already flagged UAT timeline pressure** — CSC representatives called 31 Aug "the realistic expectation" for SSO-related activities, versus the previously tracked 24/25 Aug (see [outputs/meeting-notes/2026-08-05-W32-csc-compass-sit-daily-standup.md](2026-08-05-W32-csc-compass-sit-daily-standup.md)). If Team 2's UAT environment prep also slips, that compounds rather than absorbs the existing CSC-side slip. Worth Michelle explicitly connecting these two threads rather than tracking them separately.

---

## Open Questions

- [ ] Does Fanxu's involvement give OTEP-679 (CSC connectivity) a concrete grooming date, given it was flagged as time-critical last week? — **Owner:** Michelle — **By:** Not yet scheduled
- [ ] Is today's Pow Hwee/Léo Keycloak/CSC SSO discussion the same blocker as this morning's WS3 (SSO) Red status, or a distinct internal thread? — **Owner:** Michelle to confirm — **By:** After today's discussion happens
- [ ] What specific MRs need to land before WOG AD/Keycloak login works in UAT? — **Owner:** Engineering (unnamed) — **By:** Not yet scheduled

---

## Blockers

1. **UAT environment not yet ready for WOG AD/Keycloak login testing**
   - **Blocked by:** DB migrations and MR deployments not yet executed
   - **Impact:** Blocks login-flow validation in UAT, which sits on the same critical path as the CSC SSO integration work
   - **Resolution:** Not yet scheduled — Michelle is chasing status

---

## Next Steps

**Immediate (Today):**
- Amber to bring R1 opportunity questions to Michelle this afternoon
- Pow Hwee + Léo hold the Keycloak/CSC SSO discussion — worth a quick sync afterward to connect this to this morning's WS3 findings

**Short-term (This week):**
- Get a committed date for UAT environment readiness (DB migrations + MR deploys)
- Confirm whether OTEP-679 (CSC connectivity) now has a grooming slot with Fanxu involved

---

## Context for Future Reference

This standup connects two threads that were previously tracked separately: the CSC connectivity resourcing gap (flagged 27–28 Jul, unowned until today) and this morning's CSC-Compass SIT standup finding that WS3 (SSO) is the programme's highest-risk workstream. Worth checking whether Fanxu/Adrian Lo's CSC connectivity work and Pow Hwee/Léo's Keycloak/SSO discussion are two views of the same blocker rather than parallel independent work — if so, today's plan should list this as one thread, not two.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

Team had made progress on CompetencyID matching, Playwright E2E framework, Fanxu will be helping Adrian Lo on some of the CSC connectivity stuff. Keycloak and CSC SSO integration discussion between Pow Hwee and Leo will happen today.

Amber is doing the research on the R1 opportunities and will engage Michelle for a few questions this afternoon.

Michelle is asking for the UAT environment readiness and there are plans to perform DB migrations and deploy some of the MRs in there so that the WOG AD and Keycloak login can work.

</details>
