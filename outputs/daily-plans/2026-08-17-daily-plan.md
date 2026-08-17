---
date: 2026-08-17
day: Monday
week: 2026-W34
mcps_used: [Calendar]
---

# Daily Plan - Monday, August 17, 2026

## TL;DR

- **Meetings:** 2 today (standup 11am, UAT Daily Review 5pm) — light day, no prep required
- **P0 Tasks:** 2 — WOG AD escalation ask, UAT Gate 2 escalation ask
- **Key Focus:** Kick off this week's two escalations (WOG AD, Gate 2) today with dated deadlines — Sprint 8 freeze ends Friday, no Sprint 9 buffer.

---

## Today's Three

1. [ ] **Send dated WOG AD ask to Pow Hwee** — prod/UAT confirmation + approval-clock question, deadline Wed EOD or it goes to Adrian. Advances Priority 1 (weekly plan).
2. [ ] **Send dated Gate 2 ask to Rama** — explicit deadline stated, escalate to Adrian same day if silent. Advances Priority 2 (weekly plan).
3. [ ] **Adrian check-in on PS/DS routing sign-off status** — informed-only doesn't mean untracked, second week the decision itself hasn't closed.

🔒 **Protected today:** Sending both dated asks (WOG AD + Gate 2) with explicit deadlines — this is the fix for a pattern that's failed two weeks running (asks going out without a real escalation trigger). If today gets consumed by Ops Portal work, this is the one thing to consciously defer, not lose.

*Why these three:* All three are carry-overs entering week 2–3 with a documented "ask without escalation" failure pattern (per Friday's weekly review). Getting dated deadlines in writing today is what makes Wednesday's escalation checkpoint real instead of another status re-check.

---

## Schedule & Meeting Prep

| Time | Meeting | Attendees | Prep Status | Context |
|------|---------|-----------|-------------|---------|
| 11:00am | OTEP Team 2 stand-up | Team 2 (Léo, Thomas, Hao Eng, others) | ✅ Ready | Sprint 8 feature-freeze week — listen for WOG AD (OTEP-71) and QA queue status |
| 5:00pm | UAT Daily Review | UAT team | ✅ Ready | Good venue to raise Gate 2 status if Rama is present — don't let this substitute for the direct 1:1 ask |

### Free Blocks

- **9:00am – 11:00am** (2 hours) → Send WOG AD + Gate 2 asks first thing; Adrian check-in on PS/DS
- **11:30am – 5:00pm** (5.5 hours, minus lunch) → Ops Portal Open Item #13 (receiving-team sign-off), R1 designer-output check ahead of 20 Aug grooming
- **After 5:30pm** → Buffer for any escalation that fires same-day

---

## Standup Lens

*(Sprint 8, feature-freeze week — async check-in sprint, but standup still runs)*

- **OTEP-71 (WOG AD login)** — still In Progress per live Jira. Listen for whether Léo has anything new from Pow Hwee's side beyond the dev re-enable.
- **QA queue (11 items)** — OTEP-110, OTEP-331 (SSO/CSC), OTEP-305, OTEP-408/409 all sitting in QA with freeze Friday. Watch for anything stuck without a clear QA owner.
- **OTEP-390 moved QA → In Progress** (per today's sync) — worth understanding why it regressed with freeze 4 days out.

---

## Heads Up

⚠️ **Potential Issues:**

- **WOG AD (OTEP-71) still "In Progress" in live Jira** — third named check-in window opens this week; today's ask needs the Wednesday deadline in writing, not implied.
- **Gate 2 escalation trigger failed to fire last week** despite being named — today's ask needs the same explicit-deadline treatment.
- **PS/DS decision now in week 2 with no accept/reject recorded** — Adrian owns it end-to-end, but today's check-in should confirm it's not silently slipping to week 3.
- **Ops Portal work has real pull** (dominated last week unplanned) — budgeted at 35% this week; if it's tracking to exceed that by Wednesday, name it explicitly rather than let it absorb the protected item above.

**Strategic window:** 11:30am–5:00pm free (5.5 hrs) — no strategic skill has run yet this week. Consider `/impact-sizing` on R1 opportunity capabilities ahead of 20 Aug grooming, since that's the next ceremony this size of block should feed.

---

## Growth From Yesterday

No clear growth moment surfaced — no meeting notes or decision docs dated over the weekend (last dated entries are from Aug 13). Worth reflecting at end of day instead.

---

## Growth Nudge

Today's two escalation asks are a direct test of **stakeholder influence**: last week's soft asks got responses started but not closed — today's version needs a real deadline and a named fallback, which is the skill itself, not just the message.

<details>
<summary>Appendix</summary>

### Strategic Context

**This Quarter's North Star:** 50% of onboarded officers complete a development action via CareerCompass by Dec 2028 (pilot baseline phase now).

**This Week's Priority:** Escalate WOG AD + Gate 2 (not re-ask); force PS/DS decision to close or name the 3rd-week slip.

### Recently Completed (git log, last 24-48h)

No commits in PM-OS in this window beyond the weekly plan just generated.

### Full Sprint Stories — OTEP-Pathfinder Sprint 8 (2026-08-11 → 2026-08-24)

**Goal:** Clean up defects from Phase 1 UAT and enable Phase 2 UAT on Ringfencing and Competency Matching.

**To Do (3):** OTEP-667 (bug, opportunities detail page), OTEP-283 (Michelle Yip — Ministry icons), OTEP-1167 (logout button unresponsive after session timeout)

**In Progress (9):** OTEP-71 (Léo — WOG AD login), OTEP-681 (Léo — integration testing pipeline), OTEP-803 (Thomas — timezone investigation), OTEP-1120 (Hao Eng — E2E test suite), OTEP-444 (Léo — Azure/Entra mock), OTEP-594 (unassigned — WOG AD routing), OTEP-390 (Thomas — ringfenced detail page states, regressed from QA), OTEP-386 (Thomas — tooltip popup), OTEP-439 (Amber — design)

**QA (11):** OTEP-110 (WOG AD login fail), OTEP-810 (Hao Eng — Comp ID matching), OTEP-405 (Thomas — keyword search), OTEP-668 (Thomas — search bugs), OTEP-505 (Hao Eng — CFT upload/webhook), OTEP-305 (Thomas — login/logout), OTEP-408 (Thomas — ringfencing eligibility filter API), OTEP-331 (WOG AD SSO/CSC), OTEP-409 (Thomas — ringfenced listing FE), OTEP-570/OTEP-336 (Thomas — competency match signals)

**Done (37):** Includes OTEP-131, OTEP-88 newly closed 2026-08-11 (Rathika QA sign-off).

**Backlog (13):** Mostly post-MVP tracking (PostHog events), technical hardening (Keycloak config), and audit trail work.

### Story Changes Since Last Sync (2026-08-17)

| Story | Change | Detail |
|---|---|---|
| OTEP-405 | Backlog → QA | Thomas comment 2026-08-13 |
| OTEP-668 | To Do → QA | Thomas comment 2026-08-13 |
| OTEP-659 | Backlog → Done | Léo comment 2026-08-12 |
| OTEP-803 | Backlog → In Progress | Assigned Thomas |
| OTEP-390 | QA → In Progress | ⚠️ Regression 4 days before freeze |
| OTEP-131 | QA → Done | Rathika sign-off 2026-08-11 |
| OTEP-88 | QA → Done | Rathika sign-off 2026-08-11 |

### Alignment Check

Today's Three all map directly to this week's Top 3 priorities (WOG AD escalation, Gate 2 escalation, PS/DS decision push). No coverage gap — Ops Portal and R1 grooming prep are named in free-block suggestions but intentionally not in Today's Three, per this week's 35%/45%/20% pillar budget.

</details>

---

*Generated: 2026-08-17 08:00 SGT*
*MCPs used: Google Calendar (direct API), live Jira (jira-sprint.sh + jira-sync.py)*
*Next: Run `/meeting-notes` after standup and UAT Daily Review to capture outcomes*
