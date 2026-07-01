# Meeting Notes: Weekly Design Review with BO

**Date:** 2026-05-26
**Time:** 14:00–15:00
**Meeting type:** Design review + product alignment
**Squad:** Imelda's squad (My Development feature owner)
**Attendees:** Michelle (PM), Xian Zhang (BO decision-maker), Jacky (BO decision-maker), Amber Tong (Designer), Adrian Ang (PO), Rama Moorthy, Christopher Woo
**Leadership proxy:** Mark, Gek Khiang (not present, but expectations referenced throughout)
**Feature:** "My Development" — role recommendation feature for CareerCompass

---

## TL;DR

- Team agreed on MVP-first principle but ~6 critical decisions remain open; Imelda's squad needs a 30-min alignment session before Amber's next design iteration or engineering touches the logic
- All "My Development" feature decisions and actions are Imelda's squad — post-meeting directions from Adrian captured in the dedicated section below
- Leadership expectation gap is real: bosses expect AI/recommendations by October; team is building rule-based MVP — Imelda + WD to prepare narrative before next leadership session

---

## Decisions at a Glance

| # | Decision | Status | Owner |
|---|----------|--------|-------|
| 1 | MVP prioritises functionality over perfection | ✅ Locked | Principle — no single owner |
| 2 | Show all roles (not only those hiring) | ✅ Locked | Imelda (design) |
| 3 | Page emphasises gap (what officer lacks) | ✅ Locked | Imelda (design) |
| 4 | MVP matching: competencies only, not proficiency | ⚠️ Partial | Imelda |
| 5 | Recommendation logic: job family + function filtering | ⚠️ Partial | Imelda |
| 6 | Rename "Next possible roles" → neutral label | ⚠️ Implied | Imelda (design) |
| 7 | Drop "partial match" from UI | ⚠️ Implied | Amber |
| 8 | Exact ranking logic (filter only / competency count / %) | ❌ Open | TBC |
| 9 | Top-N roles to display (8 / 10 / scroll) | ❌ Open | TBC |
| 10 | Matching display format (%, absolute, none) | ❌ Open | TBC |
| 11 | Hiring signal indicator (small icon) | ❌ Open | TBC |
| 12 | Role → opportunity linkage for MVP | ❌ Open | TBC |
| 13 | MVP vs future roadmap narrative for leadership | ⚠️ Partial | Imelda + WD |

---

## Decisions — Detail

### 1. MVP prioritises functionality over perfection
- **Decision:** Ship something functional quickly. Not going for perfection.
- **Status:** ✅ Locked (principle-level; no single owner needed)
- **Note:** Agreed at the start but not consistently enforced throughout the meeting.

### 2. Show all roles (not only those with open hiring)
- **Decision:** Show all matching roles regardless of whether positions are currently open.
- **Rationale:** Officers may be focused on long-term promotion, not immediate applications. Restricting to "only hiring" narrows the development value.

### 3. Page emphasises gap (what the officer lacks)
- **Decision:** Primary UX objective is letting officers see their competency gap relative to target roles.
- **Rationale:** Reinforced by multiple participants, no opposing view.

### 4. MVP matching based on competencies (not proficiency) ⚠️
- **Decision:** "We will not have the partial match... not matching by proficiency." Do not show proficiency levels in MVP.
- **Partial because:** Operationally agreed in design but contradicted by "we should not rule out proficiency — bosses expect it."
- **Root cause (Adrian, post-meeting):** Agencies use 3-point and 5-point proficiency scales. Cannot show proficiency levels until the value proposition and data standardisation are resolved. WD (Jacky) to provide evidence of agency variance. Imelda + WD to prepare the "deferred, not dropped" explanation for leadership.
- ⚠️ **Implied decision follows from this:** Drop "partial match" from UI — but this depends on the proficiency call being final, which is still debated at leadership level.

### 5. Recommendation logic uses job family + job function filtering ⚠️
- **Decision:** Filter based on same job family / same job function within the agency.
- **Partial because:** Filtering agreed; ranking logic (%, count, none) still debated. Three competing interpretations surfaced in the same meeting — see Risks section.

### 6. Rename "Next possible roles" to neutral label ⚠️
- **Decision:** Use something like "Roles you may be interested in."
- **Status:** Implied — no objection raised, not explicitly locked.
- **Post-meeting direction (Adrian):** For roles with open vacancies, show a visual indicator on the role card. On the role details page, provide links to actual job postings so officers can click through.

### 13. MVP vs future roadmap narrative ⚠️
- **Decision:** Agreed the narrative needs to be prepared before the next leadership session.
- **Partial because:** No concrete output defined, no draft assigned yet.
- **Owner:** Imelda + WD

---

## Unresolved (Blocking Execution)

These must be resolved before Amber's next design iteration and before engineering touches role recommendation logic.

### Decisions Needed

| Decision | Options Discussed | Why It's Blocking |
|----------|-------------------|-------------------|
| Exact ranking logic | Filter only / filter + rank by # matched competencies / % rank | Engineering logic + design display depend on this |
| Matching display format | % / absolute count / no number | Design cannot finalise cards without this |
| Number of roles to show | Top 8 / top 10 / infinite scroll / refresh | Design layout depends on this |
| Proficiency inclusion strategy | Exclude for MVP vs include (leadership expectation) | Data model + matching engine affected |
| Role → opportunity linkage | Tag job postings to role profiles (yes/no for MVP) | Cannot show "this role is hiring" without mapping |
| Agency vs cross-agency scope | Same agency only (current) vs cross-agency | Core value proposition; user concern surfaced in meeting |

### Questions to Answer

| Question | Owner | Priority |
|----------|-------|----------|
| What is the exact ranking logic? (e.g. filter by job family → rank by # matched competencies → no % displayed) | Imelda | High |
| Is ranking required at all, or just filtering + user selection? | Imelda | High |
| What is the narrative to leadership on why proficiency is excluded in MVP? | Imelda + WD | High |
| What evidence backs the proficiency exclusion decision? | Jacky Lee / WD | High |
| Primary page purpose: optimised for planning OR applying? | Imelda + Adrian | High |
| What is the expected user action after seeing a "high match" role? | Imelda (requirements) | Medium |
| Will job postings be required to tag to role profiles for MVP? | Imelda + Pow Hwee | Medium |
| Is cross-agency mobility in or out of MVP? | Adrian + Xian Zhang | Medium |
| What minimum data fields are required for MVP matching to work credibly? | Pow Hwee + Rama | Medium |
| Which agencies / datasets meet the minimum data bar today? | Rama | Medium |

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Define role recommendation logic (exact ranking + filtering rules) | Imelda | Before next design iteration | High |
| Refine UI: remove partial match, simplify, improve gap clarity | Amber | Before next review session | High |
| Share Figma link for async team comments | Amber | Immediately after meeting | High |
| Provide data on competency/proficiency inconsistencies across agencies | Jacky Lee / WD | Before leadership discussion | High |
| Prepare MVP vs future roadmap narrative for leadership | Imelda + WD | Before next week's leadership session | High |
| Provide async Figma comments | All | Before Thursday review | Medium |
| Conduct user testing on flow clarity (target role search, match understanding) | Amber | By end of week | Medium |
| Incorporate feedback and update designs | Amber | Early next week | Medium |
| Check availability of job responsibilities / data sources | Rama | TBC | Medium |
| Explore POCDEX for competencies + job descriptions | Christopher Woo / Team | Next discussion touchpoint | Medium |
| Send async follow-up to Xian Zhang + Jacky (decisions, open items, next steps) | Michelle | Today (post-meeting) | P1 |

---

## Risks & Misalignments

| Risk | Category | Impact | Status |
|------|----------|--------|--------|
| Role recommendation logic has 3 competing interpretations in one meeting (static filter / competency rank / % rank) | Scope | Engineering cannot proceed; each interpretation produces a different output | ❌ Unresolved |
| Competency vs proficiency — hidden conflict between product direction and leadership expectation | Product vs Leadership | MVP may be rejected or require major rework at leadership review | ⚠️ Named, not resolved |
| Page purpose is blurred — career planning vs job discovery/application | Framing | Different JTBD require different UX, data models, and success metrics | ❌ Unresolved |
| Role profile vs job posting mapping — no confirmed mechanism exists | Data model | Cannot show "this role is hiring"; development → opportunity connection broken | ❌ Unresolved |
| Data quality not validated against real datasets | Data | Job responsibilities are "one big blob from OTG — unstructured"; MVP viability untested | ❌ Unresolved |
| Agency-only scope may undermine cross-agency mobility narrative | Scope | Feature may feel low-value; user surfaced this directly ("why only PSD roles?") | ❌ Unresolved |
| Leadership expectation vs MVP reality gap | Narrative | Bosses expect AI/recommendations by October; team is building rule-based MVP; leadership review is high-risk | ⚠️ Narrative prep assigned to Imelda + WD |
| Speed vs defensibility — Adrian (ship fast) vs Jacky (need data to justify to bosses) | Stakeholder alignment | Unresolved tension on what standard the MVP must meet | ❌ Not aligned |
| UX promise vs system constraint — "match → apply" not yet supported by data model | Technical | Design assumes role→opportunity linkage that doesn't exist yet | ❌ Not aligned |
| Internal vs external narrative gap — MVP is basic internally, leadership expects "a lot" | Communication | Perception gap is forming; will widen without proactive narrative prep | ⚠️ Acknowledged |

---

## Post-Meeting Directions — Imelda's Squad

*Source: Adrian Ang, post-meeting correction (2026-05-26)*
*Full handoff notes: [2026-05-26-W22-post-meeting-notes-imelda.md](./2026-05-26-W22-post-meeting-notes-imelda.md)*

| Direction | Detail | Owner |
|-----------|--------|-------|
| Proficiency narrative | Agencies use 3 vs 5-point scales — data inconsistency is the root blocker. WD to provide agency variance evidence. Prepare "deferred, not dropped" explanation for leadership. | Imelda + WD |
| "Next role" feature | Out of MVP scope. Track JTBD in backlog for future prioritisation. | Imelda |
| Vacancy indication | Show visual indicator on role cards for roles with open postings. Details page: link to actual job openings so officers can click through. | Imelda (design: Amber) |
| Gap-closing resources | When officer sees competency gaps on details page, surface courses, STIPs, and GIGs that can plug them. Confirm data linkage with Rama. | Imelda |

---

## Meeting Quality

### What Worked Well
1. Strong alignment on MVP philosophy — gives team permission to simplify and anchors all trade-offs
2. Clear identification of competency vs proficiency structural problem — avoids building "correct-looking but wrong"
3. Jacky's push on evidence-based decision-making — raises the bar for defensibility
4. UX challenge on clarity and cognitive load — moved focus to real usability
5. Healthy tension between design, product, and policy — prevented blind spots

### What to Improve for Next Design Review
1. **End each topic with a Decision Table:** Decision / Assumption / To validate — before moving on
2. **Every item needs: Owner + Output + When** — floating items create stalled work
3. **Strict MVP filter:** "Is this needed for MVP? If no — park it immediately." Stop debating future-state in the same breath as MVP decisions
4. **Name the page purpose first:** Agree on primary JTBD before touching any screen

### Key Quotes
- "We need to deliver something functional quickly... we are not going for perfection."
- "Do you actually have data or actual evidence to back it up?" — Jacky
- "Is this my development or job opportunity page?" — fundamental framing question, unresolved
- "Why are all roles within PSD... I want other agencies." — user expectation vs MVP constraint
- "Bosses are expecting a lot... everything by October."
- "We might be confusing the two" — on role profiles vs job postings

---

## Links

- [R1 Seamless Application PRD](../../context-library/prds/r1-seamless-application-draft.md)
- [BO Strategic Review Notes (2026-05-25)](./2026-05-25-W22-bo-strategic-review-notes.md)
- [OTEP Squad Sync Notes (2026-05-26)](./2026-05-26-W22-otep-squad-sync.md)
- [Post-Meeting Directions for Imelda (2026-05-26)](./2026-05-26-W22-post-meeting-notes-imelda.md)
- [Meeting Cleanup (2026-05-26)](./2026-05-26-W22-cleanup.md)

---

*Processed: 2026-05-26*
*Source: Risks, Assumptions & Misalignment.md + Meeting Quality What Worked & What Didn't.md + Results Decisions & Actions.md + Adrian Ang post-meeting corrections*
*Next: Imelda to define role recommendation logic. Schedule 30-min alignment session to lock 6 blocking decisions. Michelle to send async follow-up to Xian Zhang + Jacky.*
