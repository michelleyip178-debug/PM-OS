---
feature: CareerCompass Release 1 (R1)
date: 2026-07-06
owner: Michelle Yip
type: user-personas
parent-prd: outputs/prds/2026-07-07-W28-careercompass-r1-prd.md
status: draft — grounded in R1 PRD funnel data, journey lanes, and effort sizing; not yet validated against live user interviews
---

# R1 User Personas

**Data sources:** R1 XFN Kickoff PRD (problem/hypothesis, three named journey lanes, funnel sizing, risk table), R1 effort-sizing analysis, OTG baseline metrics cited in the PRD (9% re-login rate, ~15-20% apply completion, 23% active engagement).

**Data gap flag:** These personas synthesize behavior patterns already named in the PRD's own journey lanes (Lane 1/2/3) and funnel assumptions — they have not been cross-validated against live officer or HR-manager interviews. Treat pain points and gains as PRD-derived hypotheses until user-research-synthesis or interviews confirm them directly.

---

## Persona 1 — The Intentional Mover

**Age range / role:** Mid-career officer, 5-10 years in service, any of the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS).

**Segment:** PRD's "Lane 1" journey.

### Primary Job-to-be-Done

Find a stretch assignment or secondment that closes a specific, known competency gap before a performance review or promotion window, and get through the entire apply-to-decision process without having to leave CareerCompass or chase status by email.

**Context and frequency:** Triggered by a performance conversation or peer mention. Time-boxed — once they've decided to apply, they want to finish the loop quickly, not browse indefinitely.

### Top 3 Pain Points

1. **The redirect breaks momentum.** Clicking Apply today sends them out to FormSG — a jarring handoff that PRD calls "the redirect," the first of three named failure points.
2. **The blank form re-asks what CareerCompass already knows.** No pre-fill exists today; they retype competencies and work history that live in their own OTEP profile. Impact: real enough that the PRD sets a specific guardrail — stale or wrong pre-fill must not increase abandonment versus this baseline.
3. **After submitting, they hear nothing.** The PRD calls this "the status black hole" — applications vanish into a FormSG inbox with zero visibility into whether a human has even seen it.

### Top 3 Desired Gains

1. Apply without leaving CareerCompass — the PRD's stated success metric for this persona is apply completion rate, target 40%+ versus an estimated 15-20% baseline.
2. A form pre-populated from their profile, so they review and edit rather than retype from scratch.
3. Visible status (Submitted → Under Review → Outcome) inside OTEP, with no need to follow up over email.

### One Unexpected Insight

The PRD's own funnel math implies this persona is rare, not common: of ~5,400 pilot officers, only an estimated 810 (30% of browsers) are projected to reach the Apply CTA at all, and just 405-540 are expected to complete the in-Compass form in Q1 2027. The Intentional Mover isn't the typical CareerCompass visitor — they're the minority who convert, and the entire R1 investment (pre-fill, native status) is built to serve a funnel stage most pilot officers never reach. That's a deliberate bet: R1 optimizes the narrow, high-intent bottom of the funnel rather than the wide top (that's Persona 2's job).

**Why this matters for product decisions:** if apply completion doesn't hit the 25% four-week kill-criteria threshold, the PRD's own logic says pause and remediate — this persona's experience is the single metric R1 lives or dies by in the first month.

### Product Fit Assessment

**Strong fit — this is R1's primary persona.** Epic B (native apply + pre-fill) and Epic C (status tracking) exist specifically to serve this journey end-to-end.
**Named friction points from the PRD's own risk table:** pre-fill quality depends on the competency SSOT contract between Léo and Kingsley (open items #18/#41) being finalized — if that data is stale, the PRD explicitly warns it erodes trust faster than having no pre-fill at all. Status tracking's 24-hour latency OKR also still needs Adrian's sign-off, since it now measures manager action inside OTEP rather than an external ATS event.

---

## Persona 2 — The Passive Watcher

**Age range / role:** Early-career officer, 2-5 years in service, any of the 6 pilot agencies.

**Segment:** PRD's "Lane 2" journey.

### Primary Job-to-be-Done

Stay loosely aware of development opportunities without committing to a search process — browse, notice something interesting, and be able to come back to it later without losing the thread, even if "later" is days away.

**Context and frequency:** Sporadic, low-commitment. Not actively job-hunting; open but unhurried.

### Top 3 Pain Points

1. **No safe place to defer a decision.** Nothing in the current product lets them bookmark an opportunity and return to it — every session starts cold.
2. **A closing deadline can pass silently.** Without a saved-jobs mechanism or nudge, an opportunity they were considering can close before they act, with no reminder.
3. **Low incentive to return.** The PRD cites OTG's 9% re-login rate directly as this persona's symptom — once a session ends without a save mechanism, there's little reason to come back.

### Top 3 Desired Gains

1. Save an opportunity and resume browsing or applying later without re-finding it from scratch.
2. A nudge as a saved opportunity's closing date approaches ("closes in 3 days"), prompting a decision rather than a silent miss.
3. A low-friction bridge into Lane 1 — once they decide to act on a saved opportunity, the apply experience should be exactly as smooth as it is for the Intentional Mover.

### One Unexpected Insight

This persona isn't the source of R1's core success metric (apply completion), but the PRD's own journey lane treats them as the *feeder* into Persona 1 — "decides to apply. Joins Lane 1." That reframes Epic D (Saved Jobs) from a nice-to-have into a funnel-widening feature: it's the mechanism that converts passive browsing into the high-intent apply journey R1 is actually built to optimize.

**Why this matters for product decisions:** Epic D sits in the "Should" bucket, not "Must," and is explicitly the first thing cut if R1 needs to shed scope. Cutting it doesn't just remove a convenience feature — per the PRD's own lane logic, it removes the on-ramp that feeds Persona 1's funnel.

### Product Fit Assessment

**Partial, conditional fit.** Only the "save" half of Epic D is in scope for R1; the "resume an in-progress application" half is explicitly gated behind MVP abandonment data showing more than 40% mid-form drop-off — it may not ship at all in this release.
**Gap to flag:** if Epic D gets cut under scope pressure (the PRD names it as the first cut candidate), this persona has no R1 improvement at all, and the funnel-feeding effect the PRD implies goes unrealized.

---

## Persona 3 — The Posting Manager (Agency HR)

**Age range / role:** HR executive or HR officer at one of the 6 pilot agencies, owns posting administration for their team.

**Segment:** PRD's "Lane 3" journey (Epics A + C).

### Primary Job-to-be-Done

Create a posting, publish it, see applications land in one place, move each applicant through Submitted → Under Review → Outcome, and close the posting when it's filled — all without juggling OTG, a separate email inbox, and a spreadsheet.

**Context and frequency:** Recurring, tied to agency programme cycles (Internal Jobs, Secondments, STIPs, Gigs). Likely manages several active postings concurrently.

### Top 3 Pain Points

1. **No native creation tool exists today.** Internal Jobs and Secondments have no build path at all before R1 — Epic A exists specifically because this gap was "removed from MVP because no native path existed."
2. **Status updates require them to work entirely inside a system that, as of the 7/3 scope revert, is now fully OTEP-native with no ATS to lean on.** The PRD is explicit that this manager-facing status-update UX "did not exist under World A" — it's genuinely new scope, not a simplification, and it's flagged Red risk in the PRD's own risk table.
3. **Who they even are isn't resolved yet.** The PRD's Epic A readiness gate states plainly: "agency-admin auth undefined... this must be confirmed before the R1 story pipeline opens." Before this persona can use anything in R1, the product has to first decide how they log in at all.

### Top 3 Desired Gains

1. A structured creation form and publish workflow that replaces whatever ad hoc process exists today per opportunity type.
2. Applications visible natively in OTEP, with a status workflow (Submitted → Under Review → Outcome) they update directly, no external system to sync.
3. Competency-tagged postings at the point of creation — the PRD's Epic A design principle frames this as the "data front door," feeding downstream OKR 3 (agency analytics adoption) if built with structured fields from day one.

### One Unexpected Insight

This persona is the one PRD lane that primarily serves the *agency* half of the CareerCompass mission (workforce-planning visibility) rather than the officer-facing half — and it's also the lane carrying the most unresolved infrastructure. Per the effort-sizing analysis, Epic A's "unknown" bucket (agency-admin auth) and Epic C's "unknown" bucket (manager status-update UX) are each epic's *hardest and least optional* piece, not secondary polish. This persona's entire R1 experience literally cannot be sized yet, in either epic that touches them.

**Why this matters for product decisions:** unlike Personas 1 and 2, whose R1 experience is mostly a build-and-ship question, this persona's R1 experience is gated on two decisions with no committed dates — agency-admin auth ownership and the manager UX design pass. Any SteerCo resourcing conversation that treats R1 as "already scoped" is understating exactly this persona's slice of the work.

### Product Fit Assessment

**Structurally central, but currently the least de-risked.** Epic A and Epic C both exist to serve this persona, but both of their hardest components sit in the PRD's explicit "not yet sizeable" bucket.
**Biggest unresolved dependency:** competency tagging at point of creation (Epic A's design principle) assumes manual tagging scales to every author and every opportunity — the PRD itself flags this as "an open problem, not yet solved," with C@G-ingested jobs already arriving with zero competency data as a live example of the same gap on the supply side.

---

## Cross-Persona Summary

| | Persona 1: Intentional Mover | Persona 2: Passive Watcher | Persona 3: Posting Manager |
|---|---|---|---|
| **Core job** | Apply and track status without leaving CareerCompass | Browse low-effort, defer decisions safely | Create, publish, and manage postings + applicants natively |
| **R1 epics serving them** | B (apply + pre-fill), C (status tracking) | D (Saved Jobs — save half only) | A (creation), C (manager-side status UX) |
| **R1 scope status** | Must-have, PRD's primary success metric | Should-have, first cut candidate under scope pressure | Must-have epics, but hardest sub-components unsized |
| **Named blocker(s)** | Competency SSOT contract (#18/#41) for pre-fill quality | Full Epic D can be cut before shipping | Agency-admin auth (undefined); manager status-update UX (undesigned, Red risk) |
| **Key metric** | Apply completion rate (target 40%+, baseline ~15-20%) | Re-login rate (OTG baseline 9%) | No named R1 metric yet — no QA or adoption metric confirmed for this side |

---

## So What

**Persona 1** is who R1's headline metric is built around, and the PRD's own funnel math shows they're a small slice of total pilot officers — R1 bets on serving that slice extremely well rather than growing the top of the funnel.

**Persona 2** is the funnel-widening play, explicitly framed in the PRD's journey lane as feeding into Persona 1 — but Epic D is the first thing that gets cut if R1 needs to shed scope, which would quietly remove that on-ramp.

**Persona 3** is structurally the riskiest: both epics that serve them (A and C) carry their hardest, least-optional work in the "can't size yet" bucket per the effort-sizing analysis, and one of the two open questions blocking them (agency-admin auth) has to resolve before the R1 story pipeline can even open.

**Recommendation:** before Sprint 6 grooming, get explicit owner + timeline commitments (not just names) on the two blockers gating Persona 3 — agency-admin auth and the manager status-update UX design pass. Persona 3's fit assessment can't move past "unresolved" without them, and per the effort-sizing analysis, that's also where R1's real cost is hiding.
