---
date: 2026-06-19
sprint: Sprint 4 (15–28 Jun 2026)
week: W1 end / W2 preview
type: mid-sprint-review-prep
---

# Mid-Sprint Review Prep — Sprint 4, End of W1

---

## Sprint Health

**Status:** 🟡 At risk

**Sprint goal:** Deliver a complete, usable opportunity listing experience — officers can search, filter, and sort opportunities, understand what each type means, and trust that the data is current and accurate.

**Stories:** 20 Done / 66 total issues in sprint

**The honest picture:** The "20 Done" figure is misleading — most were carry-ins already Done before S4 started. The sprint goal stories are almost all still in flight: search is split across 3 tickets (2 In Progress, 1 in Backlog), filter is in QA but not Done, sort hasn't been picked up, and C@G listing is In Progress. W2 needs to land all of these plus clear the 8-story QA tail. That's a lot for one week.

| Sprint goal area | Ticket(s) | Status | Risk |
|-----------------|-----------|--------|------|
| Search | OTEP-405 (FE), OTEP-495 (BE), OTEP-496 (FE wire-up) | 405/495 In Progress, 496 **Backlog** | 🔴 3-ticket chain; 496 not started |
| Filter by type | OTEP-86 | In QA | 🟡 Blocked by DevOps type name (Mon 22) |
| Sort | OTEP-406 | **Backlog** | 🔴 Not picked up |
| C@G listing | OTEP-88, OTEP-482 | In Progress | 🟡 Active but no Done yet |
| Data currency / ingestion | OTEP-427 | In Progress (Michelle) | 🟡 Active |
| QA tail (carry-in) | 8 stories | In QA | 🟡 Needs W2 push |

**Why 🟡 and not 🔴:** The search chain and C@G work are all actively in progress — they could still land in W2. Sort is the clearest gap; it needs a conversation about whether it's in or out of the sprint goal.

---

## Blockers to Raise

| Blocker | Story affected | Owner | Action needed |
|---------|---------------|-------|---------------|
| DevOps type name (STIP+Gig merge) — is it a display label or data model change? | OTEP-86 (can't close QA), OTEP-87 (ACs reference type names), 4-cat mapping to Xian Zhang | Michelle → DevOps | DevOps chat **Mon 22 Jun** — gates everything below |
| OTEP-496 (FE search wire-up) still in Backlog | Search can't ship without it composing with 405/495 | Thomas (assumed) | Confirm pickup date at W2 standup |
| OTEP-406 (sort) in Backlog, unassigned | Sort is part of sprint goal ("filter, sort") | Unassigned | Needs an owner and a pickup commitment |
| BO ringfencing sign-off (#43) — hide vs show-but-disable for ineligible officers | OTEP-127 (display logic), OTEP-86 (Jobs filter chip visibility) | Michelle → BOs (Xian Zhang/Jacky) | Must land before S5 grooming Thu 26 Jun |
| Core team (Pei Ern/Kingsley) owes Pow Hwee 2 POCDEX answers (#31) | OTEP-203 (standalone POCDEX API) — can't scope S5 work | Core team → Pow Hwee | Flag at W2 standup; escalate if no answer by Wed 24 |

---

## Scope Creep Flags

- **OTEP-499** (upload refactor, Hao Eng) and **OTEP-505** (CFT integration upload/webhook, Hao Eng) — both appeared In Progress without being in the original sprint goal. Likely legitimate engineering work but worth confirming: are these committed S4 stories, or did they land informally?
- **OTEP-276** (design system spike, Pow Hwee) — still In Progress in S4 despite OTEP-252 (Done) confirming LifeSG is adopted. Has the spike found anything new, or is it still running on inertia?

---

## PM Decisions Needed Before Sprint End (28 Jun)

| Decision | What Michelle needs to do | By when |
|----------|--------------------------|---------|
| DevOps type model (STIP+Gig) | Join/facilitate Mon 22 chat — confirm (1) merged type name, (2) data model vs display label | Mon 22 Jun |
| 4-cat mapping to Xian Zhang | Send after DevOps chat confirms type name; ask for validation by Fri 27 Jun | Mon 22 Jun (send same day) |
| BO ringfencing sign-off (#43) | Get Xian Zhang/Jacky to answer the 5 display questions (hide vs disable, Jobs filter chip, MDDI edge case) | Before S5 grooming Thu 26 Jun |
| Sort (OTEP-406) — in or out? | If it can't land this sprint, explicitly call it out vs leaving it in Backlog as ambiguous | By W2 standup Mon 22 Jun |
| Mid-year KR targets | Define numbers for opportunities funnel, auth/authorisation, process improvement KRs | By 22 Jun (Jace's ask) |

---

## Michelle's Key Question for the Session

> "Search is three tickets — 405, 495, and 496 — where 496 wire-up is still in Backlog. Are we confident all three land together in W2, or do we need to scope down to 'filter + data currency' as the sprint goal and call search a stretch?"

This forces the team to make a explicit call on the sprint goal rather than drifting into a partial delivery. If search doesn't land as a unit, the "complete, usable listing experience" claim doesn't hold.

---

## What to Listen For in the Session

- **Thomas on search composition** — 405 (FE) + 495 (BE queryParam) are both In Progress. Do they compose cleanly? Is 496 wire-up a day of work or a week?
- **Rathika on QA tail** — 8 stories in QA. Which ones cleared this week? Which are blocked by Keycloak or env access?
- **Pow Hwee on OTEP-276** — design system spike still running. What's the output? Is there a decision coming out of it?
- **Hao Eng on upload (OTEP-499/505)** — why are these in S4? Is this sprint-committed work or engineering discretion?

---

*Generated: 2026-06-19 (end of S4 W1) · Sources: sprint-status.md (2026-06-18), open-items.md (2026-06-19)*
