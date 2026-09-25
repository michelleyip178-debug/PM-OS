---
date: 2026-09-23
week: 2026-W39
type: risk-analysis
topic: Risks of opening Opportunities (STIPs, Gigs, Internal Jobs) to WOG-wide usage
purpose: informs feedback on Adrian's R1 Scope Review deck (due EOD Wed) and the pending Mark sign-off on WOG-wide access
---

# Risks of Opening Opportunities to WOG-Wide Usage

**Context:** Adrian is leaning toward opening the whole Opportunity page to WOG rather than a restricted/pilot view (pending Mark's sign-off). This is effectively Option B from the STIPs & Gigs scope map's pending discovery-access item, and it's also the exact question the risk register names as R-14/R-23, the single highest-leverage open question in R1. This document lays out what actually changes, and what breaks, if that direction is confirmed.

---

## Bottom Line

Nothing here is a reason not to go WOG-wide. But WOG-wide isn't "the same product, bigger" — it turns three things that are currently manageable-at-pilot-scale into real risks: the ringfencing logic bug class already known to be fragile, the RBAC sizing that's been explicitly unestimated pending this decision, and the operational support model that's already flagged red for a 6-agency pilot. Confirming this direction should come with those three commitments attached, not just a scope checkbox.

---

## 1. Ringfencing breaks in ways nobody sees, at higher volume

The ringfencing grooming prep (17 Sep) already found that the simple rule, "check if the officer belongs to an eligible agency," breaks for any officer holding multiple jobs, once an opportunity excludes people or combines Agency + Job Family in one rule.

**What changes at WOG scale:** Pilot is 6 agencies. WOG is every agency and every job family combination across the whole public service. The "check by job vs. check by fact" edge case that was previously a corner case affecting some multi-employment officers becomes a much larger population, and multi-agency, multi-role officers (secondees, SJR alumni, dual-hatted staff) are exactly the population most likely to hit it.

**Why this matters more at WOG scale:** the grooming doc is explicit that ringfencing is invisible to the officer today. No "restricted" badge, no explanation. A gig or job just silently doesn't appear. At pilot scale, that's a support-ticket risk for a handful of agencies. At WOG scale, it's a much larger population quietly not seeing opportunities they may be entitled to, with no way to know it happened, and no way for HR to distinguish "correctly excluded" from "logic bug" without manual investigation.

**What to check before confirming:** has the "check by job" decision actually been ratified at grooming yet, or is it still the recommended-but-unconfirmed default from the 17 Sep prep doc? If unconfirmed, that decision needs to close before WOG-wide scope is locked in, not after.

## 2. RBAC sizing was explicitly deferred pending this exact decision

R-14 in the risk register states plainly: the Tier 2 POCDEX-data-sharing framing assumed WOG-wide discovery was already the agreed direction, and it wasn't. Rama's technical read on whether Opportunities-Module RBAC is even separable from other modules (D-06 in the register) was due before the 22 Sep estimation sync and is still open.

**What this means concretely:** "opening WOG-wide" isn't just a population setting, it's an access-control architecture decision. POCDEX governance approval is named as a requirement for Option B in your own scope tree (DISC2). That approval process has its own timeline, likely outside your control, and hasn't started as far as any document shows.

**Risk if this gets confirmed before RBAC sizing closes:** you end up in the same trap the 22 Sep estimation session already fell into once, presenting or committing to a scope that can't actually be sized yet, producing another round of invalidated numbers (R-22/R-23's exact failure mode from two days ago).

## 3. Operational support was never designed for WOG volume

The Day2Ops risks from the 22 Sep squad sync (R-17 through R-21) were flagged against a 6-agency pilot, and they're already red:
- No clear 24x7 incident support model (R-17)
- Vendor support obligations for incident restoration unclear (R-18)
- Sev1 governance obligations not yet built into the Day2 operational design (R-19)
- User support ownership ambiguous, unclear whether pilot agencies contact BOs, PSD, or GovTech/NCS directly (R-20)
- Single point of failure in incident leadership, no deputy, no after-hours commander (R-21)

**What changes at WOG scale:** every one of these gets harder, not easier. R-20 specifically assumed requests originate from Business Owners only, a model that already doesn't account for pilot-agency end users, let alone every officer across government. More agencies means more support channels, more incident volume, and a support model that's currently unresolved even at 1/10th the scale.

**Connects to a contradiction already flagged:** the CAM integration R2 deferral (R-15) was justified partly on the assumption Day2Ops would absorb account/access-related risk, but R-20 notes the current Day2Ops draft explicitly excludes account provisioning from scope. Going WOG-wide widens this gap rather than closing it.

## 4. Governance and eligibility data may not exist yet at WOG scale

D-01 in the risk register flags HRPS/Cumulus API specs and ringfencing/eligibility data access as needed from Lee Koon (HRPS) and NCS, due 23-24 Sep, still outstanding. This was scoped against pilot needs.

**What to verify:** does HRPS/Cumulus actually hold clean, complete eligibility data for every agency and job family WOG-wide, or only for the pilot set? If eligibility data itself is incomplete or inconsistent outside the 6 pilot agencies, opening discovery WOG-wide could mean showing opportunities to officers whose eligibility can't actually be verified, the opposite of what ringfencing is meant to guarantee.

## 5. This changes what "removing OTG↔Compass interfaces" (Pow Hwee's proposal) actually means

Pow Hwee's position, surfaced in yesterday's thread, was to remove the OTG↔Compass bridge entirely because maintaining it "is not worth it at all." That proposal was scoped against pilot-level capacity. If Compass becomes the WOG-wide system of record for discovery, the case for removing OTG↔Compass interfaces gets stronger (less need for a bridge if everyone's already on Compass), but it also raises the stakes of getting the migration right, since a broken bridge or incomplete migration now affects every officer WOG-wide, not six agencies' worth.

**Worth resolving before confirming WOG-wide:** whether "WOG-wide access" means WOG-wide access to a Compass-hosted catalog with OTG maintained in parallel, or WOG-wide access predicated on OTG's interfaces actually being retired first. Those are different sequencing risks.

## 6. Timeline risk compounds

R-16 already flags a leadership expectation gap: PS/DS approved timelines based on high-level scope, and delivery certainty is lower than leadership believes. Confirming WOG-wide scope, which is a larger population, a harder RBAC problem, a support model still being designed, and a governance approval (POCDEX) not yet started, without re-communicating what that does to the timeline, repeats the exact pattern R-16 already warns about.

---

## What This Means for Your EOD Wed Feedback

Three things worth saying back to Adrian, distinct from a simple yes/no on WOG-wide:

1. **Confirming WOG-wide direction and finishing RBAC sizing are two different steps.** The direction can be agreed in principle while sizing, POCDEX approval, and ringfencing validation still happen before it's treated as locked scope for estimation purposes, exactly the trap R-23 already named once this week.
2. **The Day2Ops risks (R-17 through R-21) need to be re-scoped against WOG volume, not just pilot volume**, before this gets presented to Mark as a clean decision.
3. **The ringfencing "check by job" decision should be confirmed at grooming, not left as a recommended default**, before WOG-scale exposure makes the edge cases in Section 1 a live production risk rather than a design discussion.

---

*Related: [R1 Risk Register](2026-09-16-W38-r1-risk-register.md) (R-14, R-23, R-17 through R-21), [Ringfencing Grooming Session Prep](2026-09-17-W38-ringfencing-grooming-session-prep.md), [STIPs & Gigs Scope Map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md), [R1 Scope Negotiation Slack Digest](../meeting-notes/2026-09-23-W39-r1-scope-negotiation-slack-digest.md)*
