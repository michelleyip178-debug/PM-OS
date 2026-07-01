---
week: 2026-W23
week_start: 2026-06-01
week_end: 2026-06-06
quarter: Q2 2026
---

# Weekly Plan — Week of 1 June 2026

## TL;DR

- **Top 3:** (1) Sprint 3 launch + close WoW overdue items, (2) Sprint 3 ceremonies — DoR update + tech debt proposal, (3) Stakeholder + data foundations — Clarissa, PostHog, POCDEX
- **Meeting load:** Medium — grooming Wed, planning Thu, squad sync Fri, PostHog call TBD
- **Key milestone:** By Friday, Sprint 3 is running cleanly, design is locked, and the three WoW overdue items are off the plate

---

## Strategic Context

**Quarter Goal:** Ship OTEP MVP — WOG Auth, Opportunities Listing, FormSG integration — working end-to-end by October 2026.

**North Star:** ≥80% of job opportunities listed on OTEP; ≥50% of STIP/GIG applications migrating from FormSG to OTEP by Month 3 post-launch.

**This Week's Focus:**
Sprint 3 is the first sprint where engineers are building visible officer-facing features — filters, apply flow, competency management. The foundations laid this week (design lock, POCDEX schema decisions, process guardrails) will shape whether Sprint 3 runs cleanly or fights itself. Close the WoW loose ends first; everything else flows better after that.

---

## Carry-Over from W22

| Item | Why it carried | This week's plan |
|------|----------------|-----------------|
| WOG Auth metrics → Adrian | Dense planning day Thu 28 May | Send Tue AM — first task of Sprint 3 |
| Sprint S02 Confluence summary | End-of-day Sprint 2 ceremonies | Write Mon (holiday async) or Tue AM |
| Pilot agency restriction → Fanxu | Decision deferred — Michelle has context | Decide Mon, send before Fanxu starts Tue |
| FormSG PRD update | Consistently bumped | Thu or Fri if ceremonies clear |
| OTEP-130 Jira rescope | Same as above | Thu or Fri |

**W22 learning applied:** Thursday had 5 meetings and every async deliverable slipped. This week: overdue sends go Monday (holiday = no interruptions) or first thing Tuesday, before ceremonies take over.

---

## Top 3 Priorities

### Priority 1: Sprint 3 launch + close WoW overdue items ⭐ Most Important

**Why this matters:**
- Sprint 3 Day 1 is Tuesday. Three people are blocked until Michelle acts: Fanxu (pilot agency decision), potentially Thomas (Amber's Figma audit depends on Rama response), Jobelle (handover materials needed before she joins).
- WOG Auth metrics to Adrian has been "this week" for 3 days. Sending anything closes the loop.
- Advances: October MVP launch — Sprint 3 execution quality.

**Success looks like:**
- Three WoW overdue items sent before Tuesday standup
- Amber's Figma audit unblocked (Rama follow-up if no reply by Mon)
- Jobelle handover materials shared (Phoebe's copy first)
- Sprint 3 engineers have picked up their first stories by EOD Tuesday

**Key tasks:**
- [ ] Pilot agency restriction decision → Fanxu ping (Est: 20 min) — Mon, **Leverage**
- [ ] Sprint S02 Confluence summary (Est: 30 min) — Mon, **Neutral**
- [ ] WOG Auth success metrics outline → Adrian (Est: 30 min) — Mon/Tue AM, **Leverage**
- [ ] Follow up Rama on design system decision if no reply by Mon 10:00 (Est: 5 min) — **Leverage**
- [ ] Jobelle handover: share Phoebe's copy before she joins Tue 3 Jun (Est: 15 min) — **Neutral**
- [ ] Confirm Fanxu + Kingsley: new vs existing officers OTG sync logic (Est: 15 min Slack) — Tue, **Leverage**
- [ ] Revert to Clarissa — Malaysian NRIC + downstream OTG impact assessment (Est: 45 min) — by Thu 4 Jun, **Leverage**

**Dependencies:**
- Rama: design system decision (pinged Fri 29 May — awaiting reply)
- Fanxu: confirm Sprint 3 scope after pilot agency decision lands

**Linked to:**
- [Sprint 3 Planning notes](../2026-W22-May25-May31/meeting-notes/2026-05-28-W22-sprint-3-planning.md)
- [Decisions log D-016](../../decisions/2026-05-29-W22-decisions-log.md)

---

### Priority 2: Sprint 3 ceremonies — DoR + tech debt + dependency sync

**Why this matters:**
- Wednesday grooming and Thursday planning are the two most important PM moments this week. Both have pre-work that's drafted but not shared yet.
- The DoR update fixes the root cause of Sprint 2's fuzzy handoffs. If it doesn't get through this week, the same problem recurs in Sprint 3.
- Advances: Team process maturity; sustainable Sprint 3 velocity.

**Success looks like:**
- DoR update (engineer assessment gate) shared with team before Wed grooming, discussed, adopted or modified
- Tech debt proposal tabled at Thu Sprint 4 planning — team aligns on capacity allocation
- Pre-sprint dependency sync format agreed with other squad lead before Thu planning

**Key tasks:**
- [ ] Share DoR update proposal with team (Slack, before Wed 3 Jun grooming) — already drafted (Est: 10 min) — **Leverage**
- [ ] Run Wed 3 Jun internal squad grooming — confirm design lock + ACs for Sprint 4 prep (Est: 60 min) — **Leverage**
- [ ] Table tech debt proposal at Thu 5 Jun Sprint 4 planning as a quick agenda item (Est: 15 min in room) — **Neutral**
- [ ] Set up pre-sprint dependency sync with other squad — agree format + first run before Sprint 4 planning (Est: 20 min outreach) — **Leverage**

**Dependencies:**
- Amber: Figma audit done before Wed design lock (depends on Rama's answer)
- Engineers: availability for grooming Wed 3 Jun

**Linked to:**
- [DoR update proposal](../2026-W22-May25-May31/2026-05-29-W22-dor-engineer-assessment-update.md)
- [Tech debt proposal](../2026-W22-May25-May31/2026-05-29-W22-tech-debt-tracking-proposal.md)

---

### Priority 3: Stakeholder + data foundations

**Why this matters:**
- PostHog metric instrumentation is the mechanism for measuring OKR progress. Without defined event taxonomy, we're flying blind on North Star metrics. Rama call is this week.
- POCDEX schema decisions (OTEP-271/203) need confirmation before Leo starts building — the job family model is changing in Dec 2026 and the schema should accommodate that.
- Advances: Oct 2026 OKR baseline instrumentation; Sprint 4 POCDEX ringfencing readiness.

**Success looks like:**
- PostHog call with Rama attended; metric definitions drafted for OTEP OKRs + North Star
- ~~Acacia (or Pow Hwee) confirms which job family model version OTEP-271/203 builds against~~ — Acacia ping cancelled 2026-06-02
- Daryll POCDEX session scheduled (or follow-up sent if no reply)

**Key tasks:**
- [ ] Attend PostHog OKR metric instrumentation call with Rama (w/c 2 Jun — confirm date) — **Leverage**
- [ ] Prep for PostHog call: bring 3–4 metric definitions to align on (Est: 30 min) — **Leverage**
- [x] ~~Ping Acacia: which job family model version for OTEP-271/203?~~ — **Cancelled 2026-06-02.**
- [ ] Follow up Daryll if no reply on POCDEX planning session (Est: 5 min) — Tue, **Neutral**
- [ ] Check in with Pathfinder: what can be shown to users now? Get demo URL (Est: 15 min) — **Neutral**

**Dependencies:**
- Rama: PostHog call date confirmation (scheduling w/c 2 Jun)
- Daryll: POCDEX session response (email sent 28 May)

**Linked to:**
- [Job Family meeting notes + POCDEX implications](../2026-W22-May25-May31/meeting-notes/2026-05-28-W22-job-family-model-operationalisation.md)
- OTEP-271 (Local POCDEX DB), OTEP-203 (Standalone POCDEX API)

---

## Key Meetings

| Day | Meeting | Purpose | Prep |
|-----|---------|---------|------|
| ~~Mon 1 Jun~~ (past) | Vesak Day observed — no meetings | Async sends only | Send pilot agency decision, Confluence summary, WOG Auth metrics |
| Tue 2 Jun | Sprint 3 Day 1 standup | Confirm engineers picked up stories; surface Day 1 blockers | Check Amber's Figma audit status before standup |
| Wed 3 Jun | Internal squad grooming | Sprint 4 ACs; design lock confirmation | Share DoR proposal in advance; confirm design is locked |
| Thu 4 Jun | Backlog grooming (Sprint 4) | Sprint 4 story readiness | Table tech debt proposal; Clarissa NRIC response due |
| Fri 5 Jun | OTEP Squad Sync | Cross-squad check; dependency sync format | Raise pre-sprint dependency sync proposal |

**Meeting load:** ~5–7 hours (medium)
**Deep work capacity:** Monday (holiday) + Tuesday blocks = best execution window

---

## Sprint 3 Health Check (end of week)

By Friday 6 Jun, confirm:

| Check | Owner | Status |
|-------|-------|--------|
| Amber: Figma audit complete + design locked Wed 3 Jun | Amber | ⏳ |
| Thomas: FE stories picked up (OTEP-170 follow-on, design system) | Thomas | ⏳ |
| Fanxu: OTG bulk import story in progress | Fanxu | ⏳ |
| Kingsley: Competency API endpoints started | Kingsley | ⏳ |
| OTEP-289 spike output: go/no-go on OTEP-318 confirmed | Pow Hwee | ⏳ |
| POCDEX model version confirmed for OTEP-271/203 | Michelle | ⏳ |

---

## PRD Pipeline

| PRD | Status | Action this week |
|-----|--------|-----------------|
| Opportunities Listing | Sprint 3 active — filters + redirect | Monitor Pathfinder progress; no PM action needed unless blocker |
| Competency Profile | Sprint 3 active — add/hide/delete | Confirm Kingsley's API design decisions (hide vs delete endpoint) |
| WOG Authentication | Sprint 4+ | WOG Auth metrics to Adrian (overdue); no sprint work this week |
| FormSG Integration | Scoping | Update PRD (remove pre-fill) + Jira rescope if Thu/Fri permits |
| POCDEX Integration | Sprint 3 plumbing | Confirm model version; schedule Daryll session |

---

## Risks

- **Risk: Rama doesn't respond on design system by Tue 2 Jun**
  - Impact: Amber can't complete Figma audit; Thomas starts FE against wrong design system
  - Mitigation: Follow up directly Monday morning; escalate to Imelda if needed

- **Risk: Grooming on Wed 3 Jun surfaces Sprint 4 AC gaps**
  - Impact: Sprint 4 planning on Thu is underprepared
  - Mitigation: Use Tuesday to do a quick AC scan for Sprint 4 priority stories

- **Risk: PostHog call scope creeps beyond event taxonomy**
  - Impact: No clear metric definitions agreed by end of call
  - Mitigation: Come prepared with 3–4 specific metrics to define; keep scope narrow

---

## Success Metrics for the Week

1. Three WoW overdue items sent before Sprint 3 standup on Tue 2 Jun
2. Design locked by EOD Wed 3 Jun — Amber's sign-off on Figma
3. DoR update and tech debt proposal through Sprint 3 ceremonies
4. POCDEX model version confirmed so OTEP-271 schema work can proceed with correct assumptions

---

*Generated: 2026-05-29 | Week 2026-W23*
*Based on: W22 weekly review, sprint calendar, tasks-active.md, retro outputs*
*Next: Run `/daily-plan` Tuesday morning (Sprint 3 Day 1)*
