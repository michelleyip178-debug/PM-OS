---
date: 2026-06-03
type: backlog-review
author: Michelle (review of Pow Hwee's proposal)
source: Confluence "Pathfinder - Sprint 3 Proposed Backlog" (PDF, ~02-06) vs live Jira S3 pull 2026-06-03
lens: product (outcome + MVP risk), not delivery mechanics
---

# Review — Pow Hwee's Sprint 3 Proposed Backlog

**TL;DR:** The backlog is well-organised and the team clearly knows what to build. My concern isn't *whether it fits* (it doesn't — that's a sequencing problem the team can solve). It's *whether we're building toward the right outcome*. Four things a product lens surfaces: (1) the sprint is mostly plumbing and the one story that delivers the officer's promised outcome — apply — is unowned and buried; (2) Careers@Gov is quietly consuming half the net-new scope without an explicit product call that it should; (3) OTEP-87's competency section is being scoped as a UI task when its data governance is unresolved (the exact thing the BO meeting exposed two days ago); (4) several stories don't obviously buy down risk on the Oct go-live, which we can't afford to spend capacity on. Delivery mechanics (carry-over tail, capacity, points) are real but they're the team's to run — noted briefly at the end.

---

## 1. 🎯 Where is the officer's outcome? The sprint is mostly plumbing.

The Sprint 3 goal is: *an officer can find relevant opportunities and successfully initiate an application.* That's two user moments — **find** and **apply**.

Now look at what the backlog actually weights toward: C@G field exposure, payload mapping, ingestion transform/upsert, token rotation, AD onboarding, tech debt. Necessary work. But the single story that *is* the user's moment — **OTEP-319, Apply via FormSG** — is unassigned, unestimated, and sitting third in group 3 behind auth plumbing.

**The product worry:** we could complete most of this sprint and an officer still can't do the one thing the sprint promised. "Apply" is the conversion event and our North Star (application completion rate). If only one story in this whole backlog earns its place, it's 319.

**What I want:** OTEP-319 named as *the* sprint commitment — owned, estimated, and protected — with everything else explicitly subordinate to it. Find (filters) is second. Plumbing serves those two, not the other way around.

---

## 2. 🧭 Careers@Gov is eating half the sprint — was that a product decision?

Eight of the proposed net-new stories are Careers@Gov (88, 374, 375, 89, 87, 377, 378, 379). That's a large strategic bet — roughly half the new scope going to one channel — and it arrived through backlog grooming, not through a product call.

**The question I should be answering, not Pow Hwee:** for the MVP, right now, is broadening to C@G more valuable than making the **OTG apply flow rock-solid end to end**? OTG is the channel we've built toward all along and the one with the clearest officer demand. C@G is breadth; a solid OTG apply is depth on the thing that proves the model.

Maybe C@G genuinely is the priority — but that should be *my* decision with a stated reason, not a default that fell out of how the tickets got written. **My call:** depth on OTG apply this sprint; let the C@G stream start but carry most of it to Sprint 4 (where the second dev lands anyway). If I'm wrong and C@G is the priority, I need to say why out loud.

---

## 3. ⚠️ OTEP-87 competency scope is a product question wearing a UI costume.

OTEP-87 "(revised)" is in the sprint with the note "Leo and Thomas to work out the shape of the response." Two days ago, the **BO Working Level meeting exposed that competencies have no source of truth** — the consumer-vs-system-of-record fork is still open ([notes](../meeting-notes/2026-06-02-bo-working-level-competency-architecture.md)).

So engineers are about to design the data shape for a competency section whose *governance is unsettled.* That's how you build the wrong thing efficiently.

**What I want:** pull the **competency portion of OTEP-87 out of this sprint** until the SSOT decision is made. The rest of the C@G detail page (the non-competency fields) can proceed. This is the connect-the-meeting-to-the-backlog move that's squarely mine to make — nobody else in grooming was in that BO room.

---

## 4. 🚦 Does every story buy down launch risk? We're MVP-constrained.

We're racing to an **October go-live with a feature freeze end of August.** That's the frame every story should be tested against: *does this reduce the risk that we don't launch, or launch broken?*

- **Buys down risk:** OTEP-319 (apply = the thing we're proving), OTEP-192 ingestion (no live data without it), the QA tail (Listing→Detail must actually work), OTEP-350 WOG AD (longest external lead time — start the clock).
- **Doesn't obviously, this sprint:** CI enforcement, 3 tech-debt tickets, ADR forum. All healthy in a vacuum. But this is an MVP sprint we're already over capacity on. If points exceed velocity, these are the first cuts — and I'd rather name that now than discover it Thursday.

**The PM test:** not "is this good work" (most of it is) but "does it earn a slot in a sprint we can't afford." Tech debt and process polish are R1 luxuries we're borrowing against the launch.

---

## 5. What I'll actually say to Pow Hwee

Short version, product-first:

1. **Make 319 (apply) the sprint's spine** — owned, estimated, protected. It's the only story that delivers the goal's promise. Everything else serves it.
2. **C@G is a depth-vs-breadth call and I'm making it:** OTG apply depth this sprint; C@G stream mostly carries to S4. Here's why [reason]. Push back if you see it differently.
3. **Hold the competency part of OTEP-87** until the SSOT decision (from the BO meeting). The rest of 87 can go.
4. **Pressure-test the tech-debt/CI/ADR items against the Oct freeze** — if we're over points, those are the cuts, not apply or ingestion.

**Credit where due:** the 5-group structure is clean, introducing story points is exactly right, and the "ok to split C@G ingestion across two sprints" instinct is the realism I want applied to the *whole* board.

---

## 6. Action

- [ ] Make the C@G depth-vs-breadth call (mine) and write the one-line reason before grooming.
- [ ] Decide OTEP-87 competency scope-out pending SSOT; note it on the ticket.
- [ ] Comment on Confluence with points 1–4 (product framing, not ticket mechanics).
- [ ] At grooming: ensure 319 is owned + estimated first; confirm OTEP-350 has a real start.

---

## Appendix — Delivery mechanics (the team's to run, flagged for completeness)

These are real but they're Pow Hwee's / the team's job, not where my attention should sit:

- **Carry-over tail is invisible in the proposal.** 25 open tickets are already live on the board (12 in QA from Sprint 2) that the backlog doesn't mention. Real load = proposed ~24 + carry-over ~25 = the 49 on the board. The team should surface this in grooming.
- **Capacity:** one FE dev (Thomas), ~20 FE stories. Won't fit; second full-stack dev arrives S4, not S3. See [capacity analysis](2026-06-03-sprint3-fe-capacity-and-sprint4-impact.md).
- **Owner gaps:** OTEP-85, 86, 192, 317, 319, 87 all unassigned on the live board.
- **New tickets to create:** C@G API ingest, CI enforcement, 3 tech-debt items.
- **Reconciliation is clean** — everything proposed is already ticketed and on the board; no structural mismatch.
