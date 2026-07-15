---
audience: Mark (+ GK) — 9 Jul SteerCo
purpose: R1 scope sign-off
prepared: 2026-07-06
owner: Michelle Yip
status: resolved — Mark signed off at 9 Jul SteerCo (open item #40)
---

# R1 Manager Briefing — Scope Sign-Off

## The ask

Sign off on R1's Must-have floor: **Epic A (Opportunity Creation), Epic B (Streamlined Apply + Pre-fill), Epic C (Status Tracking)**. This matches your original 6 May briefing — native status tracking, no ATS.

We can start building the ~40-60% of this scope that's already clear today. The rest — which happens to be the hardest and most valuable part of each epic — needs three things resolved before it can be sized or planned against a date.

---

## Why R1 matters

MVP gets an officer to the door of an opportunity — browse, filter, click out to apply. That's where it ends today. The moment someone clicks Apply, CareerCompass loses them: FormSG redirect, blank form, no status visibility. R1 closes that loop, and it's the only release that makes the North Star (10% of officers completing a development action by Mar 2027) measurable at all — an action outside the platform can't be counted.

Expected impact: apply completion rate from ~15-20% today to 40%+, and roughly 22-29% of the entire 2028 applications target landing in the pilot cohort's first quarter alone.

---

## What's confirmed

- **Scope matches your ask.** Epic C reverted from ATS integration back to fully OTEP-native status tracking (D-030, 3 Jul) — the ATS system won't be ready until 2028, so native tracking isn't a fallback, it's the only option. This is what you specified on 5 Jun.
- **Pilot is scoped:** ~5,400 officers across 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), targeting January 2027.
- **Kill criteria are set:** if apply completion rate is below 25% at the 4-week mark, or stale pre-fill hits >10% of submissions, we pause and remediate before expanding.

---

## What we need from you

**1. Resourcing ask — not a single number, a range with named blockers**

At this team's current velocity, the clearly-scoped portion of A+B+C is roughly **1.5-2.5 sprints of two-developer capacity**. That's the honest floor, not the total. The harder half of every epic sits in an unknown bucket because it's genuinely new infrastructure, not familiar UI work:

| Epic | What's clear | What's blocked |
|---|---|---|
| A — Creation | Form UI, publish workflow, edit/close lifecycle | Agency-admin auth — who these users are and how they log in is undefined |
| B — Apply + Pre-fill | Native in-Compass form, validation, submit flow | Pre-fill logic — the epic's actual value prop — gated on a competency data contract not yet finalised |
| C — Status Tracking | State machine, officer-facing status view | Manager-facing status-update UX — entirely new scope, didn't exist when ATS owned this job |

We're not asking you to approve a date today. We're asking you to accept that the estimate is a floor, and that these three blockers need owners and timelines, not just names, before a real date is possible.

**2. One scope decision:** PSFG creation — in R1, or defer to R1.5? WD has verbally committed to volume and full competency tagging, but formal policy sign-off from WD is still outstanding. If it's not confirmed before grooming, PSFG defers and the other four opportunity types (Internal Jobs, Secondments, STIPs, Gigs) proceed as planned.

**3. One measurement change to confirm:** the 24-hour status latency OKR now measures manager action *inside OTEP*, not an ATS event. This is a definition change, not just a location change, and needs Adrian's explicit sign-off separately — flagging it here so it's not a surprise later.

---

## Open risk, being sourced before this briefing is final

The "ATS not ready until 2028" claim is the reason Epic C reverted to native tracking, and it's the single biggest fact this whole scope decision rests on. It doesn't yet have a named, confirmed source — we're tracking that down this week. If it's not confirmed by the time this reaches you, we'll say so plainly rather than presenting it as settled.

---

## What happens after sign-off

- Grooming opens for the clearly-scoped ~40-60% immediately
- The three blockers (agency auth, pre-fill data contract, manager UX design) get named owners and target dates this sprint
- Sprint 6 planning proceeds against the confirmed floor, not a guess at the ceiling
