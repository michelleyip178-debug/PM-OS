---
date: 2026-06-29
meetings:
  - OTEP Team 2 Standup + Demo Prep
  - OTEP Product x BO Working Level (Bi-Weekly)
attendees:
  standup: Thomas Huchedé, Léo Milbor, Rathika Ramalingam, Pow Hwee TAN, Amber Tong, Hao Eng, Fabian PEH, Michelle Yip
  bo-working-level: Barry LIM, Victor ONG, Jace TAN, Imelda MO, Ram Moorthy, Michelle Yip
sprint: Sprint 5 Day 1
---

# Meeting Notes — 29 June 2026

## Standup + Demo Prep (11:00–11:15)

### Summary

S4 is largely landing. Search is merged and working in Dev, C@G integration nearly ready. The team did a live walkthrough pre-demo and caught multiple UI issues. The good news: they found them before the demo, not during it. The concern: these should have been caught earlier in QA.

### Decisions

1. **Search included in demo** — search, C@G integration, correct labels, apply button behaviour
2. **OTG not demonstrated** — changes not fully pushed in; leave it alone
3. **Unfinished work rolls to Sprint 5** — board already reflects this
4. **UI inconsistencies to be ticketed** — consolidate and track; don't let them disappear post-demo

### Action Items

| Task | Owner | Due | Notes |
|------|-------|-----|-------|
| Validate remaining S4 tickets in Jira | Michelle | Today | Confirm board is clean before demo |
| Create UI consistency tickets | Pow Hwee / Amber | This week | Spacing, layout, missing icons, filter behaviour |
| Create search standardisation tickets | Amber + Pow Hwee | This week | Consistent trigger, suggestions, clear behaviour across screens |
| Confirm dev env working before 4pm | Pow Hwee | Before 4pm | Demo was cancelled Fri due to broken env — confirm fixed |
| Capture demo notes during demo session | Rathika | 4pm | Rathika to support note capture |
| Chase POCDEX UAT env confirmation (#31) | **Pow Hwee** → Pei Ern/Kingsley | This week | Blocking S5 WOG AD gate |
| Resolve push vs pull production profile loading | **Pow Hwee** | Before S5 auth groom | PRD says instantaneous push; POCDEX requirements doc says pre-load batch — one is wrong |
| Assign OTEP-445 (POCDEX code table spike) | Pow Hwee | Today | Sitting To Do with no owner |

### Risks

- **UI QA is not structured enough** — issues surfacing at standup rather than in QA. No visible UI sign-off checklist or design QA gate. Worth addressing in S5 retro actions.
- **Shared layout dependencies** — another team's changes are affecting OTEP pages. Ownership of shared components is unclear.
- **Demo-first shortcuts accumulating** — individually fine, collectively becoming technical debt. Track all deferred items in Jira or they disappear.
- **Search UX not settled** — triggering, suggestions, fuzzy matching, clear behaviour all unresolved. Works technically; UX decisions not locked.

---

## BO Working Level — Competency + SSOT Discussion (15:00–16:00)

### Summary

The most important thing that came out of this session wasn't the roadmap discussion — it was a foundational data problem you surfaced: **nobody can agree on what the canonical job family, job function, or competency taxonomy actually is.** Everything downstream (AI matching, opportunity filters, course recommendations, development planning) is built on top of this. Until it's resolved, all of that work carries significant trust risk.

### What's Taking Shape (But Not Confirmed)

The team is converging on a post-MVP sequence:
1. Competency Management
2. Competency Inference Engine (AI)
3. Role Management

And the direction of Career Compass becoming the SSOT for competencies. But none of this is formally approved — no ownership model, no governance model, no sign-off from WD, BOS, Cumulus, or HR system owners.

### The Core Problem You Raised

> "What is the base for all the filters that we are using?"

Different datasets are using different definitions:
- OTG aligns with the HR Resources list
- Competency bank extracts contain agency-specific values
- Some "job families" are actually agency labels
- The 538-number from Ram's data looks questionable
- WD previously provided a different source via Chris' master list

**This was not resolved.** The meeting ended with "we need to go back to BOs to clarify."

### Decisions (Tentative — Not Formally Approved)

| Topic | Direction |
|-------|-----------|
| Competency Management | Favoured as first post-MVP candidate |
| Competency SSOT | Career Compass as proposed SSOT — not confirmed with HR systems |
| Role Management | Important but sequencing TBD |
| Competency Inference Engine | Future; needs reassessment |
| Learning Design | No decision between Option 1 and Option 2 |
| Domain Filter | Further investigation needed |

### Action Items

| Task | Owner | Due | Notes |
|------|-------|-----|-------|
| Verify 538 job family/function numbers from datasets | Ram Moorthy | Next session | Export data, share with team, review AI extraction for errors |
| Chase CSC on Domain field definition | Imelda MO | Next session | What does "Domain" mean? Does it equal Functional Area? |
| Clarify canonical source for job family + job function | Michelle → BOs | Before next Design Review | Which system is authoritative: HR Resources list, Cumulus, or Chris' master list? |
| Internal review with Adrian before Design Review | Michelle | Before Design Review | Align on competency/SSOT direction before it goes to stakeholders |
| Raise OTEP-111 AC gap with BOs | Michelle | Today / this meeting | "User exists in WOGAD but not POCDEX" — what happens? PM decision needed |

### Risks

**Risk 1 — Building on inconsistent taxonomy (highest priority)**
Filters, AI matching, course recommendations, and opportunity matching are all downstream of job family/function/competency definitions. If the source isn't agreed, users will see "Finance" opportunities, courses, and competencies that come from different classification systems. Trust collapses immediately.

**Risk 2 — SSOT assumption not validated with HR systems**
The roadmap assumes Career Compass becomes the SSOT and HR systems consume from it. Jace TAN challenged whether Cumulus and HRPS would actually agree to that, and whether policy changes are required. This is unresolved.

**Risk 3 — AI proposed as a fix for a governance problem**
Victor ONG suggested AI for competency enrichment and taxonomy harmonisation. But the underlying problem is that the source data isn't agreed. Using AI to paper over a governance gap doesn't fix the gap — it hides it until it breaks something.

**Risk 4 — Domain field ambiguity in learning**
The learning UI depends on "Domain" but nobody could define it confidently. If CSC and future learning providers use different taxonomies, the filter experience will need redesigning later.

### Open Questions

- [ ] Which system is the canonical source for job family and job function? — **Michelle → BOs** — before next Design Review
- [ ] Does Cumulus / HRPS agree to Career Compass as SSOT? Who needs to approve? — **Michelle → Adrian** — before R1 planning
- [ ] What is "Domain" in the learning context? Same as Functional Area? — **Imelda → CSC** — next session
- [ ] Are the 538 job family/function numbers accurate? — **Ram** — next session

---

## Cross-Meeting PM Notes

**Pattern worth flagging:** Both meetings today exposed the same underlying issue from different angles — **decisions are being made or deferred without a clear owner or deadline, and the gaps are accumulating.** In the standup, UI issues are discovered late and deferred post-demo. In the BO session, the taxonomy question was raised and sent back to BOs without a concrete next step or date.

Your job for S5: be the one who converts "we need to discuss this" into "here is the owner, here is the date, here is what a resolved answer looks like."

**Your PM actions from today:**
- [ ] Raise OTEP-111 AC gap at BO Working Level (3pm) — define the behaviour, don't leave it open
- [ ] Push for a named owner and date on the job family/function SSOT question before leaving today's BO session
- [ ] Confirm Pow Hwee has picked up the three technical assignments from standup

---

*Generated: 2026-06-29 | Sources: AI-generated standup summary + BO Working Level summary*
*Next: `/stale-check` end of day to sweep open items; update `open-items.md` with new items from today*
