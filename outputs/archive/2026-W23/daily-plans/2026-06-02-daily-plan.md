---
date: 2026-06-02
day: Tuesday
week: 2026-W23
mcps_used: [Google Calendar — live 2026-06-02, Jira — LIVE 2026-06-02]
updated: 2026-06-02 (trimmed to compact; detail in appendix)
---

# Daily Plan — Tuesday, June 2, 2026 (Sprint 3 Day 1)

## TL;DR

- **Meetings:** 4 — Squad Sync 09:30 ✅, Standup 11:00, PM Weekly 15:00, BO Working Level 16:00. Big **11:15–15:00 deep-work window**.
- **P0:** 3 carried-over items (2 sends + Job Family writeup), all gating Day-1 work.
- **Key Focus:** Get the three sends out before standup, then deep work. Design-lock risk cleared (Thomas's design system done, pending release).

---

## Today's Three

1. [ ] **Send the three carried-over items before 11:00 standup** — (a) WOG Auth metrics outline → Adrian, (b) pilot agency restriction → Fanxu (decision drafted, send it), (c) Job Family writeup. (b) and (c) gate Sprint 3 work.
2. [ ] **Drive standup: finish carry-over QA first, then new scope + share DoR** — 11 carried-over QA items are closest to Done (push those), 21 new-scope tickets in Backlog need owners. Get OTEP-289 spike go/no-go; send the drafted DoR before Wed grooming.
3. [ ] **Use 11:15–15:00 for deep work + confirm Fanxu/Kingsley OTG sync logic** — Job Family writeup, OTEP-358 scoping, and the "new vs existing officers" sync-on-first-login decision via Slack.

---

## Schedule

| Time | Meeting | Prep | Note |
|------|---------|------|------|
| 09:30 | Squad Sync | ✅ Done | Outcomes: single-URL hosting, Figma licence (Jace→Finance), VAPT early Aug |
| 11:00 | Standup | ✅ Ready | Drive story pickup; OTEP-289 go/no-go |
| 15:00 | PM Weekly Catchup | ✅ Ready | — |
| 16:00 | BO Working Level | ⚠️ Light | OTEP-87/319 scope split; single-URL/mobile implication |

**Free blocks:** 08:30–09:30 (sends), 11:15–15:00 (deep work — Job Family, OTEP-358, FormSG PRD).

---

## Tasks

**P0 — today:**
- [ ] WOG Auth metrics outline → Adrian (4 days overdue; outline is fine) *(30 min)*
- [ ] Pilot agency restriction → Fanxu (drafted — send after squad sync) *(20 min)*
- [ ] Job Family outcomes writeup — POCDEX implications for OTEP-271/203 *(30 min)*

**P1 — this week:**
- [ ] Confirm Fanxu + Kingsley: new vs existing officers OTG sync-on-first-login *(15 min)*
- [ ] Share DoR update proposal before Wed grooming (drafted) *(10 min)*

**P2 — if time:** Daryll POCDEX follow-up · FormSG PRD update · OTEP-130 rescope · Clarissa NRIC (**due Thu 4 Jun**, tied to Cumulus #36)

---

**BAU / standing tasks:** prioritised list lives in [`00-hub/tasks-active.md`](../../../PM-skills-ALL-1/00-hub/tasks-active.md). This week's P1: WOG AD (Adrian #26), CSC SSO (Imelda #30).

---

## Heads Up

- ⚠️ **Three sends are 1–4 days late, two gate Day-1.** Do them in the 08:30 block before meetings eat the day (like last Thursday).
- 🔴 **Cumulus Phase 3 confirmation due Thu 4 Jun** — check if you're a required responder (Rama running an alignment meeting; involvement TBC). See Radar.
- ⚠️ **OTEP-289 spike outcome** — get the go/no-go on OTEP-318 at standup.
- 🆕 **Assign OTEP-305 (login/logout)** — buildable now against Keycloak (WOG AD swaps later). Unassigned — get an owner at standup.
- ✅ **Design lock de-risked** — system done, pending release. Remaining: confirm release + Amber's sign-off for Wed.
- ⚠️ **Do NOT respond to Gemma (LD team)** without Jace/Adrian alignment — standing instruction.

---

<details>
<summary><strong>Appendix — context, radar, BAU, full Jira health check</strong> (click to expand)</summary>

### Carry-over status (Friday 29 May)
- WOG Auth metrics → Adrian: still open (P0 above)
- Pilot agency → Fanxu: ✅ decision drafted (`outputs/decisions/2026-06-02-pilot-agency-otg-import-restriction.md`)
- Job Family writeup: still open (P0 above)
- ~~Rama design-system decision~~: ✅ resolved (system done, pending release)
- ~~Acacia job family version~~: ✅ cancelled 2026-06-02

### Strategic context
- **Quarter goal:** Ship OTEP MVP (WOG Auth, Listing, FormSG) end-to-end by Oct 2026.
- **W23 priority:** Sprint 3 launch + close WoW overdue items.
- **Active:** Opportunities Listing (filters+redirect), Competency Profile (Kingsley API), POCDEX (model version), FormSG (PRD+OTEP-130 rescope).

### Today's developments (captured)
1. **CareerCompass implementation doc** — branding, MVP-6 pilot (~5,400), R1 ATS = WSG/PA/MSF, WOG AD over Singpass, OTG sunset (Mar 2028 contract, Oct 2027 cutover). → 5 decisions logged, `outputs/roadmaps/careercompass-phased-rollout.md`, 2 risks.
2. **Two-tier demo agreement** (Imelda+Rama, adopted) — regular = owner-presents/sprint-scoped; Mark/GK = consolidated narrative. Logged in decisions + ceremony-prep + profiles. *Follow-up:* flesh out thin Mark/GK profiles.

### On the Radar (email synthesis 2026-06-02 — verify against source; open-items #36–39)
- 🔴 **Cumulus Phase 3** — confirm by **4 Jun**, OTG production-ready for Malaysia ID by **6 Jul**. Static-data window 30 Jun–6 Jul + interface suspension. Overlaps Clarissa task.
- 🔴 **POCDEX account-recreation loop (DS-OTG-000007)** — adjunct officer, OTG account auto-recreates. Open since April (POCDEX+TECQ). Tracking only.
- 🟠 **OTEP SIT/UAT 15–20 Jun** — pressure-test scope gaps (24 Aug–4 Sep unclear; cost flag).
- 🟡 **WSG+SSG → SWDA (1 Jul)**, Workday only Jan 2027 — org change before system readiness.
- *Already moving:* PostHog approved; MVP plan cleared.

### Sprint 3 health check (LIVE Jira 2026-06-02)
**Sprint 2 CLOSED ✅. Sprint 3 ACTIVE — 39 issues (carry-overs + new). 4 Done, 3 In Progress, 11 QA, 21 Backlog.** Carry-over QA work is closest to done — finish that first.

| Check | Owner | Status |
|-------|-------|--------|
| Finish carried-over QA (11) | Team | In QA — push to Done |
| Assign OTEP-305 owner | — | ⚠️ login/logout buildable now via Keycloak; unassigned |
| Design system | Thomas | ✅ done, pending release |
| OTEP-289 go/no-go on OTEP-318 | Pow Hwee | ⏳ |

**New/changed:** OTEP-129 split → **OTEP-362** (backend) + **OTEP-363** (UI) · OTEP-358 (nil-date spike, **you**) · OTEP-361 (ADR forum, Pow Hwee).
**Reconcile:** OTEP-271/203 still NOT on board.

### Strategic alignment
- P1 (Sprint 3 launch): P0 sends + standup ✅
- P2 (ceremonies): DoR share + design lock de-risked ✅
- P3 (data foundations): Job Family writeup (partial)

</details>

---

*Generated 2026-06-02 (Sprint 3 Day 1). Calendar + Jira live (workspace `.mcp.json`).*
*Next: `/meeting-notes` after PM Weekly + BO Working Level.*
