# CareerCompass Release 1 (R1) — One-Pager

**Owner:** Michelle Yip · **Status:** Scope approved (Mark, 9 Jul SteerCo) · **Full PRD:** `outputs/prds/2026-07-07-W28-careercompass-r1-prd.md`

---

## The Problem

MVP gets an officer to the door of an opportunity and stops there — browse, filter, view, click out to an external FormSG or C@G form. Every application becomes invisible to the platform the moment an officer clicks Apply, so the North Star metric (development actions completed) is unmeasurable today.

| Failure point | Today | R1 |
|---|---|---|
| The redirect | Officer leaves CareerCompass to external FormSG/C@G | Native in-Compass apply form, no handoff |
| The blank form | Manual re-entry, no profile carryover | Pre-filled from officer's OTEP profile |
| The status black hole | Application vanishes into a FormSG inbox | End-to-end status tracking, natively in OTEP |

## Scope — Locked (World B, CIO-confirmed 2026-07-07)

R1 is fully OTEP-native for status tracking — no ATS/HRPS/Cumulus integration anywhere in the apply-to-outcome chain.

**Must-Have floor (A + B + C):**
- **Epic A:** Agencies author/publish postings (Internal Job, Secondment, STIP, Gig) natively — no OTG dependency
- **Epic B:** Officers apply in-platform, form pre-filled from OTEP profile, no external redirect (except C@G)
- **Epic C:** Status tracking end-to-end inside OTEP (Submitted → Under Review → Outcome), both officer- and manager-facing

**Should-Have:** Epic D (Saved Jobs), Epic E (competency sync, read-only)

**Explicitly out of scope:** OTEP does not become an ATS/HR system of record · criteria authoring stays in OTG (→ R1.5) · Smart Assistant/CIE inference (→ R3) · C@G native apply · SJR creation · opportunity recommender

## Success Metrics

| Metric | Target |
|---|---|
| Apply completion rate | 40%+ by Mar 2027 |
| North Star — officers completing a development action | 10% of onboarded officers by Mar 2027 |
| Applications via CareerCompass (pilot cohort) | 405–540, Q1 2027 |
| Status latency (manager action → officer sees it) | ≤24 hrs by Q1 2027 |
| Pilot satisfaction (guardrail) | ≥3.5/5 |

**Kill criteria:** Apply completion rate <25% at 4-week mark, or stale pre-fill incidents >10% of submissions → pause rollout, remediate before expanding past pilot.

## Timeline

| Milestone | Target |
|---|---|
| Mark sign-off | ✅ 9 Jul 2026 |
| R1 story pipeline opens | After agency-admin auth path confirmed (Epic A gate) |
| Phase 1 pilot launch | Jan 2027 (6 agencies, ~5,400 officers, staggered) |
| Phase 2 expansion | Mar 2027 |

## Open Gates (block story pipeline / grooming)

1. **Agency-admin auth** — does it exist? Go/no-go for Epic A. Owner: Pow Hwee/Fabian.
2. **Competency SSOT contract** (#18/#41) — gates Epic B pre-fill quality. Owner: Léo/Kingsley.
3. **Manager status-update UX (C2)** — net-new, undesigned. Owner: Amber/Pow Hwee.
4. **24-hr latency OKR measurement point** — needs Adrian's explicit sign-off on what it measures.

**If scope must cut:** Epic D goes first, then Epic E defers to read-only-only. Epics A+B+C are the floor.

---

*Condensed from the full PRD for Confluence — see full document for user stories, acceptance criteria, and detailed rationale. Full PRD status line should be updated from "pending sign-off" to "approved" given Mark's 9 Jul SteerCo sign-off.*
