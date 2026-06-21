---
date: 2026-06-18
sprint_target: Sprint 5 (29 Jun – 10 Jul 2026)
ceremony: Backlog Grooming — Thu 18 Jun 2026, 14:00
generated_by: /sprint-plan-prep
---

# Sprint 5 Grooming Brief — 18 Jun 2026

> **Today's session is backlog grooming (W1 Thu), not sprint planning.** Sprint planning for S5 is Thu 25 Jun. Use this brief to walk the team through S5 candidate stories and exit with a clearer shelf depth. The sprint goal draft is for *your* framing — the team confirms or reshapes it at planning.

---

## Proposed Sprint Goal

**Option A (conservative):**
By end of Sprint 5, an officer can browse a ringfenced listing — seeing only opportunities they're eligible for — and the C@G detail page is complete, so officers have a full picture before deciding to apply.

> *Assumes WOG AD (#26) is still in approval (2–4 weeks from 10 Jun). Auth carries to S6. Focus shifts to what's shippable now: ringfencing display and C@G detail.*

**Option B (ambitious):**
By end of Sprint 5, an officer can log in with real WOG AD credentials, browse a ringfenced listing, and land on a complete C@G or OTG detail page — with CSC SSO requirements confirmed and scoped.

> *Conditional on WOG AD approval landing by ~23 Jun (tight). Only choose this if Fabian confirms approval is imminent at today's standup.*

**Recommendation: start with Option A.** Lock Option B only if WOG AD approval is confirmed before or during today's session.

---

## Candidate Stories

| Story | Title | DoR status | Risk / Blocker |
|-------|-------|-----------|---------------|
| OTEP-408 | [BE] Listing API eligibility filter | ✅ Ready | None — design gates documented, team briefed |
| OTEP-409 | [FE] Listing — ringfenced pinned results | ✅ Ready | Depends on OTEP-408 as expected; not a blocker |
| OTEP-390 | Ringfenced detail page states | ⚠️ Needs work | Amber indicator spec outstanding; AC2 loose until she confirms eligible visual |
| OTEP-304 | Remain authenticated during active session | ✅ Ready | Timeout owned by WOG AD, not OTEP — OTEP handles expired token state only. AC updated 2026-06-18. |
| OTEP-281 | Loading state for listing | ❌ Hold | OTEP-268 must be Done first — currently in QA in S4 |
| OTEP-87 | View C@G opportunity summary | ⚠️ Partial | ACs exist in story file; Jira ACs need reconciling (FormSG vs C@G deep-link conflict flagged by Pow Hwee) |

**Stories not in S5 Jira folder but relevant to today's conversation:**
- **OTEP-127** (ringfencing display contract spike) — Michelle-owned, In Progress. Must close before OTEP-408/409 can be confirmed as complete. BO sign-off on ineligibility UX (#43) is still outstanding.
- **OTEP-88** (C@G listing) — In Progress S4. If Done by end of S4, OTEP-87 (C@G detail) becomes the natural S5 pull.

---

## Capacity Flags

| Flag | Detail |
|------|--------|
| WOG AD approval | Pow Hwee submitted form 10 Jun; 2–4 week clock running. Best case: ~24 Jun. S5 auth (OTEP-71/305) only safe to pull if approval lands before 25 Jun planning. |
| POCDEX open questions (#31) | Core team (Pei Ern/Kingsley) owes Pow Hwee two answers before OTEP-203 can be scoped. Deadline: S5 grooming (26 Jun). Nudge today if it doesn't come up. |
| CSC SSO (#30) | Feasibility deep-dive still outstanding. Do not pull any SSO stories until Pow Hwee/Fabian confirm approach. |
| BO ringfencing sign-off (#43) | 5 BO questions open — hide vs disable, ineligibility message specificity, positive eligibility signal, Jobs filter chip, MDDI blocklist behaviour. Must be answered before Amber can finalise ineligible states. Target: before S5 grooming 26 Jun. |
| Amber 403 page (#44) | LifeSG 403 treatment not confirmed. Blocks Amber's error state finalisation for S5. |
| QA tail S4 | 8 stories in QA. OTEP-268 must clear before OTEP-281 is unblocked. OTEP-324 (Thomas, token rotation) has been sitting 8 days — raise at standup. |

---

## Open Items Relevant to Today's Grooming

| # | Item | Owner | Status |
|---|------|-------|--------|
| 43 | Ringfencing + Jobs filter BO sign-off | Michelle → BOs | 🔴 Open — 5 questions pending |
| 44 | 403 error page — LifeSG confirmation | Michelle | 🔴 Open |
| 45 | Flow walkthrough with Amber | Amber | 🔴 Amber to set date |
| 31 | POCDEX Core team answers (Pei Ern/Kingsley) | Core team → Pow Hwee | 🔴 Blocked on Core |
| 30 | CSC SSO feasibility | Michelle → Pow Hwee/Fabian | 🔴 Deep-dive pending |
| 26 | WOG AD approval | Pow Hwee / infra | 🟡 In progress |

---

## Michelle's Opening Statement

"Sprint 5 starts 29 June. Based on where we are today, our safest bet is a listing-first sprint: ringfencing the view for eligible officers and completing the C@G detail page. We have two stories that are DoR-ready — OTEP-408 and OTEP-409 — and three that are close but need a few answers before we can commit them. Today I want us to work through those blockers so we walk into planning on 25 June with a clean shelf. On auth: I'm keeping OTEP-71 and related stories off the table until WOG AD approval lands — we can't commit what we can't control. If Fabian has an update on that today, we'll factor it in."

---

## What NOT to do in this session

- Don't commit story points or assign engineers — that's for planning Thu 25 Jun
- Don't pull auth stories (OTEP-71/305) unless WOG AD approval is confirmed in the session
- Don't let OTEP-390/304 blockers slide — those two stories need decisions today, not "we'll check async"
- Don't add net-new scope to S5 without explicitly naming what it replaces

---

## After the Session

Run `/grooming-close` to:
- Gate OTEP-408 and OTEP-409 against the 6 DoR criteria
- Write `ready-for-sprint` labels to Jira for passing stories
- Check shelf depth (ready points ÷ velocity)
- Update sprint-checklists.md with Ready markers

---

*Generated: 2026-06-18 · Sprint 5 grooming · Planning ceremony Thu 25 Jun*
