---
date: 2026-08-18
week: 2026-W34
type: squad-sync
attendees: [Michelle YIP, Rama MOORTHY, Imelda MO, Victor ONG, Siang Zhang, Adrian ANG (referenced), Pow Hwee TAN (referenced), Kingsley (referenced), Barry LIM (referenced)]
health: 🟠 Amber
---

# Meeting Notes: OTEP Squad Sync

**Date:** 18 Aug 2026 · **Health:** 🟠 Amber

---

## Summary

SSO testing (SAT in Dev) and VAPT scope both moved forward, and UAT is surfacing real defects. But the deeper problem: the competency lifecycle model (what happens when profile data changes, whether history is retained, what's MVP vs. post-MVP) isn't aligned across stakeholders, and multiple workstreams are stalled on "I'll check with Adrian" with no escalation path. With ~2 weeks left, this is the most consequential unresolved thread.

---

## Decisions Made

1. **VAPT scope expanded** to include the Intel/Competency API, not just infrastructure (Rama + Barry LIM). Worth checking against the VAPT timeline still under negotiation with NCS.
2. **SSO testing progressing to staging/SIT** — SAT completed in Dev. Reduces uncertainty on CSC SSO dependency (open item #30).
3. **Siang Zhang's UAT defects validated as legitimate** (Imelda MO) — real issues, but severity not yet assigned.

---

## Action Items

| Task | Owner | Due | Priority |
|---|---|---|---|
| Verify staging/SIT deployment readiness | Rama | Not stated | High |
| Follow up with Adrian LO on SSO application changes | Rama | Not stated | High |
| Review/comment on CSC UAT test cases | Rama | Not stated | Medium |
| Review Siang Zhang's UAT defects | Rama | Not stated | High (validation done, formal review pending) |
| Discuss defect severity classification at stand-up | Team / Imelda | Immediate | 🔴 Critical |
| VAPT planning for Intel/Competency API | Rama, Victor | Not stated | Medium |
| Follow up on SonarCloud/CICD status | Rama | Not stated | Medium |
| Complete Ops Portal technical discovery review | Rama | Not stated | Medium |
| Update discovery artefact — competency/profile change handling | Michelle | Near-term | 🔴 Critical |
| Clarify PM ownership: Core vs. Pathfinder | Michelle + Adrian ANG | Not stated | 🔴 Critical |
| Follow up with Kingsley on competency data model | Rama | Not stated | High |
| Populate remaining UAT test cases | Rama / Dev Team | When accounts available | Medium |

No due dates were set on any item. Rama owns 7 of 12 — matches the single-point-of-failure risk below.

---

## Key Insight

The real ask underneath "check with Imelda" isn't technical — it's: *if officer profile data changes after onboarding, what should the officer see, and what's acceptable for MVP vs. post-MVP?* That's an officer-facing UX decision, separate from the Kingsley/Pow Hwee thread (data model/storage architecture).

Connects to open items **#41** (competency dependencies — historical-retention question likely not yet covered) and **#55** (≥25 additional UAT scenarios POCDEX flagged, still unowned since 11 Aug — may be the same gap from a different angle).

---

## Risks Flagged (Not Explicitly Discussed as Risks)

| # | Risk | Why it matters |
|---|---|---|
| 1 | Release readiness | No exit/go-no-go criteria or rollback strategy, with dev/QA/UAT all compressing into ~2 weeks |
| 2 | Competency history | No agreed answer on retention, audit trail, or officer-facing UX when competency data changes |
| 3 | Single point of failure | Adrian, Rama, Pow Hwee each block multiple workstreams; Rama owns 7 of 12 action items |
| 4 | UAT coverage | Focus is on known defects, not edge cases — matches the ≥25 unowned scenarios in open item #55 |
| 5 | Operational readiness | Little discussion of support ownership, incident response, or Day-2 monitoring |

---

## Open Questions

| # | Question | Owner | By |
|---|---|---|---|
| 1 | Should competency history be stored, and how? | Michelle (drive), Pow Hwee (review) | Urgent — ~2 weeks left |
| 2 | If MVP can't auto-handle profile→competency changes, what should officers see, and are past snapshots kept? | Michelle → ask Imelda | Same/next-day |
| 3 | What's definitively MVP vs. deferred vs. accepted tech debt (dashboard, competency updates, history)? | Michelle | Not stated |
| 4 | What are the release exit/go-no-go criteria and rollback strategy? | Unassigned | Flag for immediate ownership |
| 5 | Who owns escalation when Adrian is the blocker? | Unassigned | Not stated |

---

## Next Steps

**Now:** Date the 3 🔴 Critical action items. Confirm whether the competency-history question is the same gap as open item #55.

**Next 2 weeks:** Push Kingsley + Pow Hwee to close the competency data model review. Name an explicit escalation path for Adrian-dependent items.

**Follow-up:** Dedicated competency lifecycle alignment session (Michelle, Kingsley, Pow Hwee, Rama) before next squad sync.

---

## Related Open Items

`00-hub/open-items.md` — **#26** (WOG AD, resolved today, unblocks this sync's SSO progress) · **#30** (CSC SSO — reflect "SAT done in Dev") · **#41** (competency dependencies — likely extended by today's history gap) · **#55** (Huiting data requirements — may overlap with competency-history/UAT-coverage gaps) · **#31/#56** (Core team ownership — same structural question as today's PM-ownership item)

---

<details>
<summary>Raw notes (health assessment detail)</summary>

**What went well:** SSO testing progressing; UAT defects being identified and logged; VAPT coverage proactively expanded; technical discovery moving into Day-2 concerns; cross-team coordination (PSD, GovTech, CSC) active.

**What didn't go well:** Ownership gaps recurring; multiple items blocked on Adrian with no escalation path; UAT defects not yet prioritised by severity; MVP scope/ownership ambiguous; parallel workstreams without a visible integrated plan.

**PM take (verbatim):** "The biggest concern I would escalate is not the bugs. The biggest concern is that the team has not yet aligned on the competency lifecycle model: What happens when profile data changes? How are historical competencies retained? Is competency recalculated? What experience will officers see? What is MVP versus post-MVP? Those decisions directly affect data model, user experience, reporting, future auditability, and operational support. And there are only 'barely two weeks' left according to the discussion."

</details>
