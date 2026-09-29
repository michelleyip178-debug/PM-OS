---
date: 2026-09-29
week: 2026-W40
type: scope-brief
scope: SJR (Structured Job Rotation) — post-R1, 2028 cycle
owner: Michelle Yip
status: two-path fork identified 29 Sep, path B not yet detailed
related:
  - outputs/decisions/2026-09-20-W38-sjr-to-be-handover-brief.md
  - outputs/analyses/2026-09-22-W39-ijr-sjr-careercompass-scope-exploration.md
  - outputs/analyses/2026-09-28-W40-r2-r3-decommissioning-debt-tracker.md
  - outputs/prds/2026-09-23-W39-r1-release-one-pager.md
---

# SJR: Two Paths, Not One

SJR is out of R1 scope, confirmed everywhere (stays on OTG through the 2027 cycle, R1 doesn't touch it). But what happens *after* R1 has genuinely branched into two paths, not the single plan the [20 Sep handover brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md) describes. This brief names both paths so neither gets built on the assumption the other doesn't exist.

## Path A: Native in Compass (HRPS/Cumulus)

This is the plan already detailed in the [SJR To-Be Handover Brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md), confirmed with Adrian on 21 Sep. Summary:

- SJRs move to live in HRPS/Cumulus. Compass pulls them in as the single front door for discovery.
- Applications, CV upload, review, and selection stay in the HR systems. Compass never becomes an applicant tracking system.
- Three apply paths depending on which HR system: (A) the HR system creates a visiting-applicant record, (B) Compass does intake and relay only, forward-only, CV deleted after hand-off, or (C) a 2027 manual route with a named case owner.
- Timeline: 2027 cycle stays on OTG. End-Mar 2027 written HR commitments. End-Jun 2027 test environment. Oct 2027 go/no-go (fallback: extend OTG through Sep 2028). Jan-Feb 2028 dry run and OTG data freeze. Mar 2028 cutover.
- Sizing (unvalidated first estimate): 26-65 person-months total, split across Compass (7-17), HRPS (14-36), Cumulus (1-3 minimal, or up to 40-97 total with a full Cumulus build), cross-platform (3.5-9).
- Six linked artifacts exist (BO doc, HR systems doc, hypotheses/metrics, sizing worksheet, HR-team questions, three-audience deck) — see the handover brief for links.

**This path assumes HRPS and Cumulus can absorb SJR's exercise-cycle logic and login-access requirements.** That's exactly what the [IJR/SJR scope exploration](../analyses/2026-09-22-W39-ijr-sjr-careercompass-scope-exploration.md) flags as unconfirmed: SJR's matching is a multi-week, nomination-gated, nothing-like-STIPs-and-Gigs process. HRPS and Cumulus haven't answered whether they can technically support it (open item in the handover brief).

## Path B: Discovery-only, redirect to an external system (ATS shape)

**Not yet written up anywhere before this brief.** If an external ATS (or another system entirely) ends up running the SJR cycle, Compass's role narrows to the same shape it already has for Internal Jobs, IJR, and Secondment in R1: discovery only, native to Compass, scoped to the 6 R1 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS), with Apply redirecting the officer out to wherever the cycle actually runs. Since SJR itself is a PSD-led, WOG-wide programme post-R1, whichever path wins will eventually need to decide whether Compass's SJR discovery expands beyond the 6 pilot agencies to match SJR's actual population, that's a separate scope question from R1's pilot boundary.

This is structurally identical to how Mainstream Jobs already works today (discovery via C@G feed, external redirect, no Compass ownership beyond the listing) — just applied to SJR instead of Careers@Gov.

What this path would need, sketched at the same level as the R1 interim wireframes:
- A feed from the ATS (or whatever system) into Compass's catalog, same shape as the HRPS/Cumulus feeds already built for Internal Jobs.
- A redirect-out Apply pattern, same shape as the three redirect variants already designed for R1 (HRPS/Cumulus deep-link, OTG landing page, hosting-HR-system redirect). SJR would be a fourth variant, not a new component.
- No native application, CV upload, review, or selection in Compass, same "zero transaction ownership" principle R1 already applies to every type except (weakly) STIPs & Gigs' FormSG deep-link.
- SJR's nomination-gating problem (you can't browse until you're nominated into the cycle, per the scope exploration's Discovery section) still needs solving regardless of which path wins. Under Path B, that gate most likely lives entirely on the ATS side, not in Compass, since Compass never owns eligibility logic for any type today.

**Open, not yet answered:** whether Path B is realistic depends on the same unresolved question underneath R1's entire architecture: Gek Khiang's 2027 ATS viability call (R-32 in the risk register). If an ATS is confirmed viable and becomes the WOG system of record, Path B is the cheaper, more consistent option, reusing components already built for R1 rather than the bespoke HRPS/Cumulus integration Path A requires. If ATS isn't viable, Path A (already scoped, already has a timeline and BO buy-in) is the fallback.

## What This Means for the Decommissioning Debt Tracker

The [R2/R3 Decommissioning Debt Tracker](../analyses/2026-09-28-W40-r2-r3-decommissioning-debt-tracker.md) currently has one line for SJR: "OTG data migration (IJR/SJR), open question (R-30), contingent on centralization decisions." That undersells how far Path A has already gotten (real timeline, real BO confirmation) and doesn't mention Path B exists at all. See the tracker update below.

## Recommendation

Don't pick a path yet, both are legitimate and the deciding factor (ATS viability) isn't Michelle's call to make. But:

1. **Get Path A's open item closed**: whether HRPS/Cumulus can actually support SJR's exercise-cycle and login-access requirements. If they can't, Path A isn't real regardless of ATS's answer, and Path B becomes the only option.
2. **Don't let the handover brief's artifacts (BO doc, deck, etc.) present Path A as the only future.** They currently do, since they were written before Path B was named. Add a one-line caveat pointing to this brief until Path B gets its own artifacts, if it ever needs them.
3. **Revisit this the moment R-32 (ATS viability) resolves**, same trigger as the rest of the Decommissioning Debt Tracker.
