# Meeting Notes: Adhoc Discussion with Pow Hwee

**Date:** 25 May 2026
**Attendees:** Michelle (PM), Pow Hwee (Tech Lead)
**Type:** Adhoc sync
**Topics:** WOG AD blocker, POCDEX API, sprint alignment, application form research, opportunity matching user story

---

## Summary

Quick sync covering integration blockers, sprint health, and two open scope questions. Sprint alignment to MVP roadmap looks good — engineers have clarity through to release. Two new items surfaced: a potential spike on application form in-platform vs FormSG, and a missing user story for opportunity matching using competencies.

---

## Decisions Made

1. **POCDEX API is not a critical blocker right now**
   - Issue is scheduling and requirements clarity, not technical risk
   - Will work out timeline with Daryll next week
   - Dependent on Thursday's job family model discussion between WD and DO before locking requirements

2. **CSC SSO can proceed independently**
   - Does not require the same timeline as WOG AD onboarding
   - Should be achievable without long lead time (see [CSC SSO Feasibility Plan](../../outputs/analyses/2026-05-25-csc-sso-feasibility-plan.md))

3. **Sprint alignment confirmed**
   - Sprint plan vs roadmap is aligned
   - Engineers are clear on goals through to MVP release
   - No reshuffle needed at this point

---

## Action Items

| Task | Owner | Due Date | Priority |
|------|-------|----------|----------|
| Schedule session with Daryll on POCDEX API requirements and timeline | Michelle | W/c 26 May | High |
| Attend / track Thursday job family model discussion (WD x DO) | Michelle | 29 May 2026 | High — POCDEX requirements dependency |
| Check with Acacia on POCDEX data model familiarity | Michelle | W/c 26 May | Medium |
| Write user story: opportunity matching using competencies | Michelle | Next sprint planning | Medium |
| Scoping: bring application form into OTEP vs FormSG (spike in Sprint 3) | Pow Hwee (spike) + Michelle (research/ideation) | Sprint 3 planning | Medium |

---

## Blockers

**WOG AD — Still Blocked**
- No test environment available even after onboarding
- Onboarding itself will take additional time
- **Impact:** Blocks full WOG Auth testing
- **Workaround in play:** CSC SSO can proceed on its own track and does not require WOG AD to unblock

---

## Open Questions

- [ ] What specifically comes out of the Thursday job family model discussion (WD x DO)? What requirements does POCDEX need from that? — **Michelle** to follow up post-Thursday
- [ ] Is Acacia available to consult on the POCDEX data model? What's her role/involvement? — **Michelle** to check
- [ ] What does the application form spike in Sprint 3 involve — scope, effort estimate, what question it's trying to answer? — **Pow Hwee** to define spike
- [ ] What customisation do pilot agencies actually need in the application form? This determines whether a structured in-platform form can replace FormSG, or whether FormSG's flexibility is genuinely required. — **Michelle** to research before Sprint 3 planning

---

## Key Context

**Application form: OTEP in-platform vs FormSG**
Pow Hwee raised the idea of introducing a spike in Sprint 3 to explore whether OTEP should own the application form experience rather than redirecting to FormSG. This is not just a preference — he flagged a specific technical fragility:

> FormSG pre-fill via URL params is complex and brittle. If the agency changes any form field, the pre-fill breaks. This creates an ongoing maintenance risk that the team cannot control.

His recommendation: work with users to ideate on building the application form natively inside OTEP. This would give the team full control over what data flows in and out of OTEP for opportunity applications, and eliminate the dependency on FormSG field stability.

This is still early-stage ideation but has stronger technical motivation than previously noted. Needs:
- User research on pilot agency expectations and constraints (what customisation do they actually need?)
- Assessment of scope and dev effort for in-platform form builder or structured form
- Clarity on whether this is MVP or post-MVP
- Alignment with BO Strategy meeting outcome: BOs also flagged that the current OTG application form doesn't meet requirements and cannot be customised (S/N 5 of BO feature expectations doc)

**Connection to BO Strategy meeting (2026-05-25):** The "no OTG redirect" constraint agreed in the BO meeting makes this even more critical. If the FormSG workaround is fragile, the native in-platform form may be the only viable path to a stable MVP application flow. This should be flagged to Adrian and Xian Zhang when resolving the application flow open item.

Relevant PRDs: [FormSG Integration](../../context-library/prds/formsg-integration.md) — current pre-fill via URL params is already an open risk.

**Opportunity matching using competencies**
Michelle needs to write the user story for this. Not yet in the backlog. Flag for next sprint planning session.

**POCDEX: Acacia**
Pow Hwee flagged that Acacia has stronger familiarity with the POCDEX data model than others. Worth looping in before the Daryll session to come prepared on the data side.

---

## Next Steps

**This week:**
- Attend Thursday job family model discussion — capture any POCDEX requirements implications
- Reach out to Daryll to schedule requirements session

**Next week (w/c 26 May):**
- Daryll session: align on POCDEX API schedule + requirements
- Check with Acacia on data model familiarity

**Sprint 3 planning:**
- Pow Hwee to propose scope for application form spike
- Michelle to write opportunity matching user story before planning
- Bring research on in-platform application form vs FormSG to inform spike scoping
