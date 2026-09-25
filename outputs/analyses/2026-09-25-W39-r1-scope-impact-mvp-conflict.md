---
date: 2026-09-25
week: 2026-W39
type: impact-analysis
topic: Impact of the Mark/GK "lean MVP" direction on confirmed R1 scope
status: urgent — do not act on either version of R1 scope until this resolves
---

# Impact Analysis: Mark/GK MVP Direction vs. Confirmed R1 Scope

**Trigger:** [Opportunities MVP Scope meeting notes](../meeting-notes/2026-09-25-W39-opportunities-mvp-scope-mark-gk.md) (24-25 Sep), relaying a scope direction from Mark and GK via Xian that conflicts with the architecture confirmed in the [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) over the last two days.

**What this document does:** lays out exactly what breaks, in which documents, under each of three possible explanations for the conflict — so you can see the blast radius before deciding which version is real. **It does not resolve the conflict or edit the register.** That requires confirming with Xian/Adrian/Mark/GK directly, which is flagged as the first action item in the source meeting notes and repeated here.

---

## The Core Conflict, Stated Plainly

| | Confirmed in the R1 Risk Register (23-24 Sep) | Described in the Mark/GK meeting (24-25 Sep) |
|---|---|---|
| **STIPs & Gigs — where postings live** | Native in Compass. Zero OTG dependency. | Continue posting in OTG. Compass pulls in for discovery. |
| **STIPs & Gigs — how officers apply** | Native in-app form, pre-filled from profile, no external redirect. | Via FormSG, officers leave Compass to apply. |
| **STIPs & Gigs — HR role** | Zero HR role of any kind (R-27) — this was a deliberate, hard-won confirmation. | Not addressed directly, but FormSG-based apply implies a materially different flow than the confirmed native one. |
| **Internal Jobs — where postings live** | HRPS is sole source; Cumulus pushes into HRPS, Compass has no direct relationship with Cumulus; OTG is not part of this data flow at all (R-07, corrected 23 Sep specifically to remove an earlier OTG-adjacent misreading). | Continue posting in OTG; Compass displays OTG postings for discovery. |
| **Internal Jobs — how officers apply** | Confirmed redirect to whichever system (HRPS or Cumulus) hosts the posting. | Redirect back to OTG. |
| **IJR — where postings live** | Native in Compass, self-serve creation, confirmed 24 Sep as the final resolution after four status changes in one day (R-25). | Grouped with Internal Jobs and Secondments: continue posting in OTG, redirect to OTG to apply. |
| **IJR — HR's role** | Agency HR gets a new in-app applicant review table inside Compass — this was explicitly called out yesterday as new scope HR didn't have before. | Not addressed, but "redirect to OTG" implies HR's process is unchanged, which contradicts the in-app review claim. |
| **SJR** | Stays on OTG through 2027, Compass doesn't build it (R-13, resolved 23 Sep). | Xian argues Compass shouldn't build SJR support — same conclusion, different framing (see below). |

**The one item where the two versions actually agree:** SJR staying out of Compass's build scope. Everything else is a direct, structural contradiction — not a wording difference, not a nuance, a different system architecture.

---

## Three Possible Explanations, and What Each Means for Scope

### Explanation A — "MVP" and "R1" are different scope tiers

If Mark/GK's direction describes an **earlier MVP milestone** that predates or sits underneath "R1" as the register defines it, then there's no real conflict: MVP is the lean, OTG-dependent version; R1 is the more ambitious native-Compass version that comes after. This is plausible — the source meeting notes use "MVP" throughout, never "R1."

**If this is correct:** nothing in the register needs to change. But it means the *sequencing* between MVP and R1 needs to be made explicit somewhere, since right now the register and one-pagers describe R1 as if it's the next thing being built, not a second phase after a leaner MVP already shipped or in flight. Worth checking: has an MVP already shipped? Is this meeting describing MVP scope that's currently live, or MVP scope still being decided? That changes everything about how urgent this is.

### Explanation B — Mark/GK's direction is current and supersedes the register

If Mark/GK actually reviewed and rejected the native-Compass architecture in favor of the leaner OTG-dependent version, **this invalidates the majority of what's been confirmed and built out over the last 48 hours.** Here's what breaks, concretely:

**Immediately invalidated register entries:**
- **R-07** (Internal Jobs architecture) — the entire 23 Sep correction (HRPS-only, no OTG involvement) would need reverting back toward an OTG-centric model, the opposite direction from the correction that was made.
- **R-25** (IJR) — all four of yesterday's status changes, ending in "confirmed native, self-serve, in-app HR review," would need to flip to "OTG-hosted, redirect-only," which is closer to the *very first* "out of R1" state than anything in between.
- **R-27** (STIPs & Gigs zero-HR-role) — if apply reverts to FormSG, this risk's entire premise (native apply, no HR gate) may not hold the same way.
- **R-13/R-14/R-23/R-24** — the WOG-wide "Compass as sole platform" narrative these confirm would need heavy qualification, since "sole platform" doesn't fit a model where OTG remains the actual posting/application system for most types.

**Documents needing a full rewrite, not a correction pass:**
- [Epic A One-Pager](../prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md) and its [13-story stories doc](../prds/2026-09-24-W39-r1-epic-a-stips-gigs-stories.md) — every story assumes native creation/apply/review inside Compass. Under the Mark/GK direction, most of these stories describe features that wouldn't be built at all.
- [Epic D One-Pager](../prds/2026-09-24-W39-epic-d-ijr-scoping-one-pager.md) — same issue, just rewritten yesterday to be groomable against the native architecture.
- [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md) — its entire Short Version and Section 5 (journeys) would need rewriting.
- All 5 published HTML artifacts (journey maps, scope-decision, comparison, dashboard) corrected over the last two days — every one of yesterday's corrections would need reversing, not adjusting.
- The impact-sizing and sprint-sequencing docs written for Epic A — their funnel assumes native apply exists; a FormSG-based flow has a completely different (likely lower) completion-rate ceiling, since it reintroduces the exact "leave the platform, retype everything" friction the whole R1 pitch was built to eliminate.

**Strategic-level impact:** the [Release One-Pager's](../prds/2026-09-23-W39-r1-release-one-pager.md) own Background section states the core justification for R1: *"Our North Star metric is officers completing a development action — but today, once an officer clicks Apply, they leave CareerCompass entirely, so we have no way to know if they ever finished. R1 is what makes that metric measurable at all."* If apply reverts to FormSG/OTG-redirect for most types, **that justification collapses** — the North Star becomes unmeasurable again for exactly the reason R1 was supposed to fix. This isn't a technical detail, it's the strategic premise of the whole release.

### Explanation C — Genuine miscommunication, register is correct, this needs correcting upward

If Adrian, Rama, and Michelle's 23-24 Sep confirmations are the real, current decisions, and Mark/GK's position (as relayed by Xian) is based on stale information or a misunderstanding of what's already been architected, then **nothing in the register needs to change** — but Mark and GK need to be brought up to date directly, since they're apparently operating on an outdated picture two days after the architecture was confirmed.

This is the scenario the source meeting notes lean toward as most likely, given that Adrian (who confirmed the current architecture) was in the room pushing back on Xian's framing, and the "open questions" Xian's group is debating were already closed on 23 Sep.

---

## What This Does NOT Yet Tell Us

- Whether Mark and GK were actually in the meeting this summary describes, or whether Xian is characterizing a position from an earlier, separate conversation with them.
- Whether "MVP" has a formal, documented scope definition anywhere that would settle Explanation A cleanly — a search of this workspace's `outputs/` and `context-library/` didn't surface one; if MVP scope exists as a real artifact somewhere outside this workspace (e.g. an earlier Confluence page or PRD), that's the single fastest way to resolve this.
- Whether any engineering work has already started against the native-Compass architecture that would be wasted effort under Explanation B — worth a direct check with Rama/Barry regardless of which explanation turns out to be correct, since if any build work has begun, that's a sunk-cost data point relevant to the decision either way.

---

## Recommended Immediate Action

**Do not edit the risk register, the one-pagers, or any published artifact based on this meeting until the explanation is confirmed.** Flip-flopping the register a fifth time in three days on unconfirmed information would be worse than leaving it as-is for the (likely short) time it takes to get a direct answer.

1. **Ask Xian directly, today:** is this describing MVP as a phase before R1, or is this describing what he understands R1 itself to be? Share him the [Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md) and ask him to react to it directly — his reaction will likely resolve Explanation A vs. B/C immediately.
2. **If Xian confirms this is meant to describe R1 (not a separate MVP phase):** this needs to go to Adrian directly and, ideally, a joint conversation with Mark/GK, since Adrian's 23 Sep confirmations and this direction cannot both be current. Someone in that chain has outdated information.
3. **Only after 1-2 resolve:** come back and either (a) leave everything as-is, with a note added to the register confirming Mark/GK were consulted and aligned, or (b) begin the significant rework outlined under Explanation B, which should be treated as its own tracked effort given the scale, not another same-day correction pass.

---

*Related: [Opportunities MVP Scope meeting notes](../meeting-notes/2026-09-25-W39-opportunities-mvp-scope-mark-gk.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-07, R-13, R-25, R-27), [R1 Release One-Pager](../prds/2026-09-23-W39-r1-release-one-pager.md)*
