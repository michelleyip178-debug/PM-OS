## Mid-Sprint Review — 2026-07-16 | Sprint 6, Week 1

### Sprint Health
**Status:** 🟡 At risk

**Sprint goal:** Not formally set in Jira as of the 2026-07-16 pull. That's a gap worth naming early — Day 4 of 10 working days with no written goal makes it hard to prioritize the remaining Backlog with any confidence.

**Stories:** 42 Done / 90 committed (47%). 17 In Progress, 5 in QA, 5 To Do, 21 still in Backlog with 6 working days left.

Movement since the last pull is healthy on paper — 8 stories cleared QA→Done, QA count dropped from 16 to 5, no backward slippage. Still Week 1, so the 47%-done figure likely reflects carry-in from Sprint 5 clearing QA rather than new Sprint 6 work landing. The real risk is 21 Backlog items with no goal yet to sequence them against.

### Blockers to Raise in the Session
| Blocker | Story affected | Owner | Action needed |
|---|---|---|---|
| OTEP-130 scope cut (drop webhook, submission tracking, both email notifications) is Michelle's working direction but not yet confirmed with Pow Hwee or pushed to Jira | OTEP-130 | Pow Hwee (confirm) / Michelle | Get Pow Hwee's sign-off this session — sprint is half over and the ticket's real scope is still undefined in Jira |
| WOG AD Keycloak/Azure AD client config — no ETA from Léo since 2026-06-30 | OTEP-350 (In Progress), gates OTEP-71/110/304/305 auth stories | Léo | Ask Léo directly for a date, not another status check |
| UAT read-replica code table data quality — DQ issue not yet raised | Blocks UAT readiness (starts 11 Aug) | Pow Hwee / Daryll | Confirm DQ ticket has actually been raised, not just discussed |
| QA/UAT infra — comms gaps (#2) and E2E validation gap (#3) still open, no fixed date | Cross-cutting — affects UAT/VAPT readiness | Rama | Ask for a specific resolution date, not just "daily updates" |

### Scope Creep Flags
- **Competency Management (CMM) pressure** — surfaced 3 days running in June with no leadership trade-off decision; Adrian is now handling the escalation directly to Mark/GK, Michelle's role is just confirming it's on the SteerCo agenda. Watch that this doesn't quietly land on the squad without a capacity conversation.
- **Huiting's data-requirements ask (#55)** — escalated 2026-07-14 as a feasibility risk to the August MVP date, not just a documentation task. This isn't new scope on paper, but it's consuming Rama's time against a deadline that wasn't in the original sprint commitment.

### PM Decisions Needed Before Sprint End
| Decision | Waiting on Michelle for | By when |
|---|---|---|
| Confirm OTEP-130 scope cut with Pow Hwee and push to Jira | Pow Hwee's sign-off, then Jira update | This session — still early enough in the sprint to matter for planning the remaining 6 days |
| Confirm Amber's design sign-off path for the 403 error page | Amber + Liting still reviewing — no lock date set | Before it blocks any Sprint 6 error-state story from starting |
| Decide whether #55 (Huiting) needs its own escalation path distinct from Rama's write-up, given "no contingency plan if approval slips past a workable date" | Michelle to weigh in on whether a fallback plan is needed now | This sprint |

### Michelle's Key Question for the Session
**"We're at Day 4 of 10 with no written sprint goal and 21 stories still in Backlog — what does this sprint actually need to deliver by Friday the 26th, and which of those 21 are it?"**
