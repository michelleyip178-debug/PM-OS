---
date: 2026-09-28
week: 2026-W40
type: vision
scope: CareerCompass Opportunities (STIPs & Gigs) — end-state definition
owner: Michelle Yip
status: PM vision — not yet a committed roadmap or SteerCo-endorsed target
related:
  - outputs/prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md
  - outputs/analyses/2026-09-28-W40-r2-r3-decommissioning-debt-tracker.md
  - outputs/analyses/2026-09-16-W38-r1-risk-register.md
  - outputs/roadmaps/2026-06-12-W25-careercompass-phased-rollout.md
---

# Opportunities Full-Scope Vision (STIPs & Gigs)

> **This is Michelle's definition of what success looks like for Opportunities, not a confirmed roadmap.** It hasn't been validated with Adrian, isn't in any SteerCo deck, and doesn't assume any particular release number. It exists so "what are we actually building toward" has one answer, separate from what R1 ships and separate from the June 2026 phased-rollout doc (which describes a different, now-superseded vision — see the Provenance note at the bottom).

## The One-Line Definition

**Compass owns the full lifecycle for STIPs & Gigs: an officer or manager creates a posting natively in Compass, officers discover and apply without leaving the platform, and both sides can track status end to end — no OTG, no FormSG, no "you vanish."**

This directly resolves R1's own stated problem, the one R1 itself explicitly does not solve: *"you click Apply, get sent to a different website, retype everything, then hear nothing. As far as Compass is concerned, you vanished."* (Release one-pager, Section on officer pain points.) That gap is the whole reason this matters — R1 names it and leaves it open by design; this is what actually closes it.

---

## The Four Pillars

| Pillar | What R1 ships today | What "done" looks like |
|---|---|---|
| **Creation** | Nothing — posting stays on OTG, for every agency, no exceptions | Poster creates a STIP/Gig natively in Compass: title, description, duration, application questions, visibility (WOG-wide or scoped) |
| **Discovery** | Already native — unified catalog, WOG-wide, pulled from OTG | Same experience, but the posting originates in Compass, not pulled from OTG — no ingestion lag, no OTG dependency at all |
| **Application** | FormSG-link extraction; deep-link out; disabled state if no link found | Native in-app application form, pre-filled from officer profile data, submitted without leaving Compass |
| **Tracking** | None — applicant review happens entirely off-platform (email, FormSG's own response view) | Officer sees "My Applications" with live status; poster/HR sees an applicant list with review/decision tools |

This is deliberately narrower than "everything Compass could ever do" — it's scoped to STIPs & Gigs specifically, because that's the type with no structural blocker (no HRPS dependency, no cross-agency ringfencing complexity like IJR, no OTG-hosted program logic like SJR). It's the cleanest path to a real end-to-end proof point.

---

## Why This Isn't R1, and Why That's Correct

R1's discovery-only, redirect-out shape isn't a mistake — it's the right call against the Feb/Mar 2027 timeline, made explicitly by Mark and GK (OTEP Squad Sync, 25 Sep). Two things both being true at once:

1. R1 correctly narrows to what's achievable on the committed timeline.
2. R1 explicitly does not solve the core problem it names in its own problem statement — that gap is real and named, not accidental.

This document exists so the second point doesn't get lost once R1 ships and the team moves on. "We shipped R1" and "we solved the officer's problem" are different claims, and this vision is the marker for when the second one becomes true.

---

## The One Thing Blocking This Entirely

**R-32: no confirmed ATS strategy for 2027.** Gek Khiang is validating whether an external ATS can realistically absorb this layer instead. If it does, this vision doesn't happen inside Compass at all — the external ATS becomes the creation/apply/tracking layer, and Compass stays a discovery-and-redirect front door permanently, not just for R1.

This vision is explicitly the scenario where **Compass itself becomes the ATS** for STIPs & Gigs, rather than deferring that role to an external system. That's a real fork, not a detail — see the [R2/R3 Decommissioning Debt Tracker](../analyses/2026-09-28-W40-r2-r3-decommissioning-debt-tracker.md) for the other branch and what it means if ATS lands externally instead.

**Until R-32 resolves, this document is a candidate future, not a plan.** The honest next step isn't sequencing pillars into releases — it's getting Gek Khiang's answer, because that answer determines whether this vision is buildable inside Compass at all.

---

## What Needs to Be True Before This Can Become a Real Roadmap

Not a sequencing plan — a list of what has to resolve first, since sequencing prematurely against unresolved questions is exactly the failure pattern R1 planning fell into six times in September (R-31).

- **R-32 resolves in Compass's favor** — ATS isn't viable externally, or a decision is made that Compass owns this layer regardless.
- **R1 actually ships and stabilizes** — no point sequencing pillar work against a team still absorbing R1's delivery.
- **Applicant data governance is answered** — R-03 (CV retention/purge policy) was scoped for the old native-apply R1 design and never fully resolved; native apply for STIPs & Gigs reopens it.
- **RBAC for a real HR/poster review role gets designed** — explicitly out of scope for R1 (R-27's "zero-HR-role" finding), but a hard requirement the moment tracking/review pillars exist.
- **A named designer exists** — see R-10, currently unresolved as of 27 Sep. Native creation/apply/tracking is a materially bigger design lift than R1's discovery-only scope.

---

## Provenance Note — Why This Isn't the Same as the June 2026 Phased-Rollout Doc

[outputs/roadmaps/2026-06-12-W25-careercompass-phased-rollout.md](../roadmaps/2026-06-12-W25-careercompass-phased-rollout.md) also describes an end-state with native creation and full OTG cutover, targeted at "R4, Oct 2027." It predates the September architecture pivot by three months and was never reconciled against it — it still describes "R1" as a native-ATS release, which is no longer true under any current document. Treat that doc as historical reference for the original strategic intent, not as a current target: it hasn't been re-confirmed since June, doesn't account for R-32's still-open ATS question, and shouldn't be cited as an active commitment without checking with Adrian first.

This document is the current, honest replacement for "what does full Opportunities success look like" — written from where things actually stand today (28 Sep), not from a stale June snapshot.

---

*Next review: alongside the R2/R3 Decommissioning Debt Tracker, once R-32 resolves.*
