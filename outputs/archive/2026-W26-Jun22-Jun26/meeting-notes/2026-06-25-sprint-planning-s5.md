---
date: 2026-06-25
meeting: Sprint 5 Planning — OTEP-Pathfinder
type: Sprint Planning
sprint: OTEP-Pathfinder Sprint 5 (29 Jun – 13 Jul 2026)
---

# Sprint 5 Planning — OTEP-Pathfinder

**Date:** 25 June 2026

**Type:** Sprint grooming + planning session

**Sprint:** OTEP-Pathfinder Sprint 5 (29 Jun – 13 Jul 2026)

---

## Summary

Productive grooming/planning session. Team aligned on S5 scope and clarified edge cases across ring-fencing, competency matching, and the My/Your Development page. The biggest delivery risk is not engineering complexity — it is unresolved policy decisions (competency sync, grade visibility, director exclusions, analytics governance). These need active driving in the next 1–2 weeks before they become architecture decisions.

---

## Decisions Made

**Terminology**
- Use "Your" consistently throughout: "Your Development," "Your Functional Competencies." No mixed wording.

**Grade Visibility**
- Officer's own grade can remain visible.
- Whether Cumulus role-grade representations should be exposed is **not yet decided** — further checking required.

**Ring-Fenced Opportunities** *(confirms OTEP-390 ACs)*
- Non-eligible opportunities do **not** appear in the listing. Officers never see them.
- If an officer arrives via direct URL/EDM/shared link, they see a "not eligible" experience. Page still loads; There will be no Apply CTA.

**Competency Matching** *(confirms OTEP-336 / OTEP-570 ACs)*
- Listing cards: show "X of Y competencies matched" against officer profile.
- Detail page: show matched competencies (visually distinct, sorted first) and unmatched competencies.

**Officers With No Competencies**
- Show a banner directing officers to update their competencies. No match signal shown.
- This is a new behaviour — likely a new story or AC addition to OTEP-336.

**Opportunities With No Competencies**
- Remove "No competencies available" wording entirely.
- Simplify card presentation instead — hide the section rather than showing an empty/negative state.
- *(Impacts OTEP-570 AC6 and OTEP-336 AC4 — current ACs already say hide/no-error, but design team needs to action the card treatment.)*

**Layout Change**
- Swap the order of: Time Commitment section → Competency section.
- Competency section now comes before time commitment. Reduces blank areas when competencies are absent.
- *(Impacts OTEP-570 detail page layout — flag for Thomas/Amber.)*

**Navigation Bar** *(new scope)*
- Build nav bar this sprint because capacity is available.
- Includes: OTEP logo, navigation tabs, user avatar, logout flow.
- This is a net-new story — not in the current sprint brief. Needs Jira ticket.

---

## Action Items

| Task | Owner | Urgency | Notes |
|---|---|---|---|
| Confirm grade display approach + appropriate grade representation | Xian Zhang Guo / team | This sprint | Before dev starts on profile stories |
| Check if Cumulus has alternative grade data usable by Compass | Team / Cumulus discussion | This sprint | Unblock grade visibility decision |
| Proceed with implementation; director-level exclusion policy pending | Team | In progress | Don't wait — build, flag risk |
| Obtain DS view on excluding director-level and above roles | Workforce Development stakeholders | 1–2 weeks | Gate on policy before filter logic is built |
| Update card design — remove "No competencies available" wording | Design team | Before dev starts on OTEP-336 / 570 | Amber to action |
| Assess competency-update nudge design beyond just the empty state | Design / Product | This sprint | Where else should the banner surface? |
| Clarify competency hide/unhide + sync policy direction | Xian Zhang Guo with stakeholders | **Urgent — 1 week** | Highest risk item (see below) |
| Brief Mark ahead of competency management discussion | Team | Before next stakeholder sync | Pre-read / alignment before decision meeting |
| Follow up on PostHog approval + procurement approach | Imelda Mo / Jace Tan | 1–2 weeks | Blocks analytics implementation |
| Reassess whether user names are required in analytics tooling | Product / Analytics stakeholders | 1–2 weeks | Lean toward not loading names unless necessary |
| Verify restricted/high-risk workforce implications for analytics data | Product / POCDEX stakeholders | 1–2 weeks | MHA users + classification concerns |
| Create Jira ticket for navigation bar story | Michelle | Before sprint start | Capacity-driven add to S5 |

---

## Risks — Open

### 1. Competency Synchronisation (Highest Risk)
If officers hide or remove competencies in Compass, should Compass sync that change back to HR systems?

This is unresolved. The answer changes: data ownership model, hide/unhide UX, integration architecture, competency management API design. A late decision here could force redesign across multiple stories already in development.

**Next action:** Xian Zhang Guo to drive a policy decision with stakeholders within the week. Brief Mark first.

### 2. Grade Architecture
Cumulus grade data may not map cleanly to officer-visible grades — there may be compensation grades, profiles, and MX mappings as separate concepts. Showing grade before agreeing on the underlying model risks confusing officers and generating support tickets.

**Next action:** Xian Zhang Guo + team to clarify what Cumulus actually exposes before grade is displayed anywhere.

### 3. Director-Level Exclusion Policy
No decision yet on whether director-level and above roles should be excluded from Compass recommendations/search. Building recommendation and filter logic before this is decided creates rework risk.

**Next action:** Workforce Development to seek DS view. Team proceeds without this gate for now, with awareness of potential rework.

### 4. Analytics Data Governance
Uncertainty around loading user names, MHA users, restricted classifications, and PostHog procurement status. Team leaned toward not loading names. Formal governance approval is needed before analytics instrumentation is finalised.

**Next action:** Imelda / Jace on PostHog. Product + POCDEX stakeholders on data classification.

### 5. Incomplete Competency Data (Underestimated)
Some Careers@Gov / GovTech opportunities have no competency data attached. If a material percentage of opportunities lack competencies, Compass's core value proposition (match quality) will feel inconsistent to officers at launch.

**Note:** The session focused on UI for edge cases. Very little discussion on: accuracy of competency data, freshness of data, or match quality validation. Officers will judge Compass on match quality first. This deserves a dedicated investigation before launch.

---

## Impact on Current Sprint Stories

| Story | What changed |
|---|---|
| **OTEP-390** | Ring-fencing decisions confirmed — ACs already reflect this. No changes needed. |
| **OTEP-336** | "No competencies available" wording removed from design. AC4 (no competency data) already says hide + no error — consistent. New behaviour: banner for officers with no profile — may need a new story or AC addition. |
| **OTEP-570** | Layout swap (time commitment ↔ competency section order) — flag to Thomas / Amber. AC6 (no competency data → section hidden) already aligned with the "remove the wording" direction. |
| **Nav bar** | Net-new S5 story — needs Jira ticket before sprint start. Not in current sprint brief. |

---

## Open Questions

- [ ] Does the competency-update banner for officers with no profile belong in OTEP-336, or is it a new story? — @Michelle to clarify scope before grooming close
- [ ] What's the exact design for the competency-update banner? Amber to spec. — @Amber
- [ ] Grade display: what field from Cumulus should Compass use? — @Xian Zhang Guo + team
- [ ] Navigation bar story: who owns, what are ACs, story points? — @Michelle to create ticket
- [ ] PostHog: has procurement been initiated? What's the ETA? — @Imelda / @Jace

---

## PM Upward Narrative

Sprint planning is in good shape. The team has strong alignment on UX flows, competency matching, ring-fencing behaviour, and S5 scope. The biggest delivery risk is no longer engineering complexity — it is unresolved policy decisions around competency ownership, data sync, grade visibility, and analytics governance. We should actively drive those decisions in the next 1–2 weeks, because they will soon become architecture decisions rather than UX decisions.

---

*Processed from session summary. Related stories: OTEP-390, OTEP-336, OTEP-570. Sprint brief: `outputs/analyses/sprint-plan-brief-2026-06-25.md`.*
