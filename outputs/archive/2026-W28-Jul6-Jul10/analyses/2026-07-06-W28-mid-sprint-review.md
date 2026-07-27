## Mid-Sprint Review — 2026-07-06 | Sprint 5, Week 2

### Sprint Health
**Status:** 🟡 At risk

**Sprint goal:** Officers browsing the opportunity listing can see which roles they're eligible for and filter by job category.

**Stories:** 30 Done / 76 total (13 In Progress, 14 QA, 1 To Do, 18 Backlog)

Volume looks fine — most of the sprint is Done or in QA. The risk isn't throughput, it's that Hao Eng owns 2 of the 13 In Progress items (OTEP-304 stay-authenticated, OTEP-505 CFT integration) and is out 7–10 Jul (4 working days) — and it's now confirmed there will be **no backup assigned**. Both tickets sit uncovered for those 4 days, leaving only 1-2 days after she's back before Sprint 5 closes 12 Jul. This is no longer a "who's the backup" decision — it's an accepted-or-escalated risk call.

---

### Blockers to Raise in the Session

| Blocker | Story affected | Owner | Action needed |
|---|---|---|---|
| WOG AD Keycloak/Azure AD client config — no ETA since 22 Jun despite two chasers | OTEP-71/110/304/305 (auth), gates CSC SSO (#30) | Léo | Get a firm ETA today, not another "will check" |
| POCDEX Core team questions unanswered — 11+ days past the 25 Jun target | OTEP-127 (ringfencing spike), OTEP-203 (POCDEX API) | Pei Ern / Kingsley (via Pow Hwee) | Escalate — this has been silent since 17 Jun |
| Hao Eng out 7–10 Jul — confirmed no backup will be assigned | OTEP-304, OTEP-505 | Michelle | Decide explicitly: accept both tickets slip past Sprint 5, or escalate to Adrian/Rama for emergency coverage — don't let this pass silently |
| Search AC ownership still unassigned despite being flagged twice | OTEP-86 and related search stories, before UAT | Michelle to assign | Pick one owner (Thomas/Amber/Rathika) in this session |
| WOG AD infra follow-up — no update since 8 Jun | Feeds #26 | Pow Hwee | Confirm status or drop as stale |

---

### Scope Creep Flags
- **#54 CIE opportunity-side competency inference** — Michelle's own idea, raised 3 Jul, not discussed with team or sized. Not part of Sprint 5 or R1 commitment as scoped. Keep it out of this sprint's conversation; park for R1 grooming.
- **#55 Huiting LIAN's data requirements ask** (Teams thread, 6 Jul) — legitimate work, but it's net-new scope for Rama/Imelda that arrived outside any ceremony. Worth naming out loud so it doesn't quietly absorb their sprint capacity unacknowledged.

---

### PM Decisions Needed Before Sprint End

| Decision | Waiting on Michelle for | By when |
|---|---|---|
Accept OTEP-304/OTEP-505 slipping past Sprint 5, or escalate for emergency coverage | Confirmed no backup will be assigned | Today |
| Assign single search AC owner (Thomas/Amber/Rathika) | Before search moves to UAT | This session |
| Confirm 403 error page treatment with Amber/Liting | Amber can't finalise error state designs without it | This week |
| Decide if #54 (CIE inference) gets raised to Adrian or stays parked | R1 grooming scope | Before R1 grooming |

---

### Michelle's Key Question for the Session

**"Hao Eng is out 7–10 Jul with no backup on OTEP-304 and OTEP-505, leaving only 1-2 days after she's back before Sprint 5 closes — are we explicitly accepting these may slip, or does this need to go to Adrian for emergency coverage?"**

---

*Generated: 2026-07-06 (Sprint 5, Week 2, Monday mid-sprint review)*
