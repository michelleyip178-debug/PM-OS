---
date: 2026-06-29
sprint: OTEP-Pathfinder Sprint 5
sprint-dates: 29 Jun – 13 Jul 2026
status: Active
prepared-by: Michelle
supersedes: outputs/analyses/sprint-plan-brief-2026-06-25.md
---

# Sprint 5 Brief — OTEP-Pathfinder

---

## Sprint Goal

**"By end of Sprint 5, officers have a meaningfully smarter opportunity listing — ringfenced results reflect their eligibility, matched competencies appear on listing cards and the detail page, and the nav bar gives the product a coherent shell."**

This builds directly from what S4 delivered. S4 gave officers a complete listing experience with real data, search, filter, and sort. S5 makes that listing feel relevant: officers see only what they're eligible for, and competency matching tells them which opportunities actually fit their profile.

### What "done" looks like at the S5 demo

An officer logs in with WOG AD credentials, lands on a listing that shows only opportunities they're eligible for, sees a "X of Y competencies matched" signal on each card, clicks through to a detail page that highlights their matched competencies at the top, and navigates the product via a proper nav bar with their avatar and logout. They never see an opportunity that's ring-fenced away from them, and if they arrive via a direct link to an ineligible opportunity, they see a clear "not eligible" page with no Apply CTA.

---

## Confirmed Scope

Stories confirmed in S5 grooming (25 Jun):

| Story | Title | Risk | Gate |
|---|---|---|---|
| OTEP-390 | Ringfenced opportunity detail page states | 🔴 | WOG AD + POCDEX + BO sign-off |
| OTEP-408 | [BE] Listing API — apply ringfencing eligibility filter | 🔴 | WOG AD + POCDEX |
| OTEP-409 | [FE] Listing — reflect ringfenced and pinned results | 🟡 | Depends on OTEP-408 |
| OTEP-336 | Competency match signal on listing cards | 🟢 | Endpoint specs confirmed |
| OTEP-570 | Matched competencies on detail page | 🟢 | Endpoint specs confirmed |
| OTEP-437 | [FE/BE] Filter by job function/family | 🟢 | Clean — no external dependencies |
| OTEP-304 | Logged-in officer remains authenticated | 🟡 | WOG AD gate |
| Nav bar | Nav bar: logo, tabs, user avatar, logout | 🟢 | Net-new — needs Jira ticket (Michelle) |
| OTEP-349 | Competency matching integration spike | 🟡 | In progress — Pow Hwee |
| OTEP-350 | WOG AD onboarding | 🔴 | In progress — Fabian |

**Carry-in from S4 QA tail (confirm at sprint open):**
OTEP-86, OTEP-85, OTEP-268, OTEP-305, OTEP-392, OTEP-128, OTEP-284, OTEP-129, OTEP-406, OTEP-438

---

## Gate Status (as of 26 Jun)

| Gate | Status | Blocks |
|---|---|---|
| WOG AD approval | 🟡 Form submitted 10 Jun — expected ~24 Jun to 8 Jul | OTEP-408, OTEP-390, OTEP-304, OTEP-350 |
| POCDEX read replica | 🔴 Pow Hwee's questions unanswered from Core team | OTEP-408, OTEP-390 |
| BO ringfencing sign-off | 🔴 Open — hide vs show-ineligible, message copy, MDDI blocklist | OTEP-390, OTEP-408 |
| Competency endpoint specs | ✅ Confirmed | OTEP-336, OTEP-570 |
| Competency sync policy | 🔴 Unresolved — does Compass write back to HR? | Architecture risk |
| Grade visibility | 🔴 What Cumulus field to show — not decided | OTEP-570 / profile stories |
| Director-level exclusion | 🔴 DS view not obtained — Workforce Development | Filter/recommendation logic |
| PostHog procurement | 🔴 Not initiated — Imelda / Jace | Analytics instrumentation |

**If WOG AD and POCDEX haven't cleared by 29 Jun:** OTEP-408, 409, 390, 304 stay in Backlog. Sprint runs on OTEP-336 + OTEP-570 + OTEP-437 + Nav bar. Name this explicitly at planning — don't assume gates have cleared.

---

## Decisions Confirmed at Grooming (25 Jun)

| Topic | Decision |
|---|---|
| Ring-fencing | Non-eligible opps do not appear in listing. Direct URL / shared link = "not eligible" page, no Apply CTA. |
| Competency matching — listing | "X of Y competencies matched" on cards |
| Competency matching — detail | Matched competencies shown first (visually distinct), unmatched below |
| Officers with no competencies | Banner directing them to update profile. No match signal shown. New story or AC addition to OTEP-336. |
| Opportunities with no competencies | Remove "No competencies available" wording. Hide section instead. Impacts OTEP-570 AC6 + OTEP-336 AC4. |
| Layout on detail page | Competency section before time commitment section (swap from current order) |
| Nav bar | Build this sprint — capacity available. Net-new story needs Jira ticket. |
| Terminology | "Your Development," "Your Functional Competencies" — consistent throughout. |

---

## Policy Risks (Need Driving in Week 1)

These are not blocked by engineering — they are blocked by decisions that haven't been made. Each one becomes an architecture decision if it isn't resolved in Week 1.

1. **Competency sync (highest risk):** Does hiding or removing a competency in Compass write back to HR systems? Xian Zhang to drive with stakeholders. Brief Mark first.
2. **Grade visibility:** What Cumulus field is officer-visible grade? Xian Zhang + team.
3. **Director-level exclusion:** WD to seek DS view. Team builds without this gate, aware of rework risk.
4. **Analytics data governance:** PostHog procurement (Imelda / Jace) + classification of MHA/restricted users (POCDEX conversation).

---

## Capacity Flags

- **FE load on Thomas:** OTEP-409, 437, 336, 570 all have FE components. Sequence 336 and 570 so the shared BE officer profile endpoint is built once — whichever starts first owns the endpoint.
- **Nav bar ticket:** Michelle to create before sprint planning on 29 Jun.
- **No Singapore public holidays** in the 29 Jun – 13 Jul window. Clean sprint.
- **S4 QA carry-in** adds overhead in Week 1 — confirm Done count at sprint open before committing additional scope.

---

## What S5 Is NOT

- WOG AD login is in scope but gated — not confirmed deliverable
- C@G detail page (OTEP-87) is Backlog — S5 stretch at best
- Competency management (creation, editing) — not in scope
- Apply flow end-to-end — FormSG redirect works but not the S5 story
- Analytics instrumentation — gated on PostHog procurement

---

## Michelle's Opening Statement (for planning)

"Sprint 4 closes with the core listing experience in shape — real data, search, filter, sort, and C@G opportunities in the same listing. Sprint 5 is about making that listing feel relevant to the individual officer.

Right now officers see every opportunity regardless of eligibility. This sprint we fix that: ring-fenced results so officers only see what they can apply for, competency matching so they know which opportunities actually fit their profile, and a nav bar to give the product a proper shell.

Three things to confirm before we commit: ring-fencing depends on WOG AD and POCDEX — I'll state gate status upfront and we'll plan to the right scope. Competency matching is clean — endpoint specs confirmed, no external gates. Nav bar is net-new and capacity-driven — Jira ticket is being created now.

The S5 demo goal: an officer logs in, sees only what they're eligible for, knows at a glance which opportunities match their competencies, and can navigate the product. That's the bar we're building to."

---

*Created: 2026-06-29 | Sprint closes: 13 Jul 2026*
*Sources: S5 grooming notes (2026-06-25), S4 live Jira (2026-06-26), demo narrative (2026-06-26)*
*Related: OTEP-390, OTEP-336, OTEP-570, OTEP-437, OTEP-408, OTEP-409*
