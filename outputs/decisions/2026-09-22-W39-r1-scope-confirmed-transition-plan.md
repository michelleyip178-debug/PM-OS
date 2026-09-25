---
date: 2026-09-22
week: 2026-W39
type: decision
topic: R1 scope — proposed via formal transition plan + 21 Sep Product x BO working-level meeting
status: 🔴 DOWNGRADED, 22 Sep same day — NOT authoritative. Proposed input, pending Adrian alignment. See update below.
---

> **🔴 STATUS DOWNGRADED (22 Sep, same day):** This document was marked "authoritative" earlier today. The 11:30am [R1 Opportunities Estimation Discussion](../meeting-notes/2026-09-22-W39-r1-opportunities-estimation-discussion.md) showed R1 scope was never actually agreed — Rama and Michelle hold genuinely different mental models of who can discover opportunities (pilot-only vs. WOG-wide), a disconnect only surfaced in that meeting, hours after this doc was written. **This doc is now one input into a required scope alignment workshop with Adrian, not settled scope.** Do not cite it as confirmed until that workshop happens.
>
> **🟢 SUPERSEDED, 23 Sep — Adrian's scope slide resolved this.** The scope alignment workshop this doc was waiting on happened; see the [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md) (R-13, R-14, R-23, resolved) and the [R1 Scope Decision artifact](../journey-maps/2026-09-23-W39-r1-scope-decision-opportunities.html). Population/platform scope from that slide is now authoritative — this document's Tier 1/2/3 breakdown is superseded by it, not the other way around. **One specific claim in this doc is flatly wrong under the confirmed architecture, not just superseded:** the "Internal Jobs apply flow → Native in-platform apply, directly in Compass" row below. Apply for Internal Jobs is a confirmed redirect to HRPS/Cumulus, never native (architecture corrected 23 Sep, see R-07). Don't cite that row for anything.

# R1 Scope — Proposed (22 Sep, pending Adrian alignment)

**Source:** formal transition plan, combined with the 21 Sep Product x BO Working-Level risk-calibration meeting. **Originally framed as superseding the [R1 one-pager](../prds/2026-09-18-W38-r1-epic-one-pager.md) and [reduced-scope feasibility brief](../analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md) — that framing no longer holds.** All three documents are now pending reconciliation at the scope alignment workshop, not any one of them authoritative over the others.

**Target:** Feb-Mar 2027. Scope simplified to protect delivery timelines: high-confidence features committed, technical complexity pushed to later releases.

---

## Tier 1: Committed Scope (High Confidence)

- **Core Platform Foundation:** WOGAD authentication, user profiles, navigation framework for the 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS).
- **Native In-Platform Opportunity Applications:** In-platform posting, searching, and direct application for internal jobs, STIPs, and gigs — all directly within Compass. **This is a scope expansion versus the prior framing** — internal/mainstream jobs were previously discovery-only with external redirect; this commits to native apply for internal jobs too, not just STIPs/Gigs. Completely eliminates the temporary FormSG redirect used during MVP.
- **Applicant Tracking Tools:** Pre-filled application forms and end-to-end application status tracking for officers. **New scope** — full status tracking was previously excluded/deferred. **Correction, 22 Sep: CV builder is NOT in scope for R1** — reflects R1's existing "no file upload, profile data only" stance; the original transition-plan wording naming a CV builder was inaccurate.
- **One-Way Gateway Routing from OTG:** OTG acts as a launchpad routing users into Compass for discovery and application. Avoids two-way data sync. Consistent with the 21 Sep Product x BO decision.
- **Baseline Competency Management Module (CMM):** Consolidated competency repository with search, retaining existing manual WD endorsement/approval workflows. Consistent with the 21 Sep Product x BO decision (CMM confirmed real R1 scope).

## Tier 2: Targeted Scope (Subject to Governance Approvals)

- **Expanded Officer Data Access:** Securing Product/POCDEX data-sharing approvals for a basic WOG officer dataset (identity, position ID, agency, supervisor info), so non-pilot-agency officers can discover opportunities on Compass. **This is the concrete version of the R-14 policy/data-governance dependency** flagged in the risk register on 21 Sep.
- **Central Team Concierge Support:** Central project team manually cross-posts pilot agency opportunities onto OTG, so non-onboarded agency officers stay informed until full WOG crossover in Oct 2027.

## Tier 3: Explicitly Descoped / Deferred

- **SJR 2027:** Strictly kept on OTG for the 2027 cycle, to avoid force-creating accounts for non-onboarded agency users. Transition to Compass deferred to the 2028 cycle. **Consistent with the 21 Sep Product x BO decision** that SJR stays OTG-hosted for 2027 — this adds the explicit 2028 target and the "avoid force-creating accounts" rationale, which weren't in yesterday's meeting notes.
- **Bi-Directional System Sync:** Full two-way OTG↔Compass sync for listings and applications explicitly rejected — high engineering complexity. Consistent with the 21 Sep one-way routing decision.
- **HRPS/Cumulus Integration:** Automated API sync for job-to-competency mapping and automated competency creation deferred to R2. Consistent with the 21 Sep CMM decision (automation deferred to R2).
- **Development Plans & Career Conversation Notes:** IDPs, goal setting, career discussion logs stay on OTG until R2/R3. **New scope item** — not previously addressed in R1 planning documents at all.

---

## What This Changes vs. Prior Documentation

| Area | Prior framing (one-pager / reduced-scope brief) | New confirmed scope |
|---|---|---|
| Internal Jobs apply flow | Discovery-only, external redirect to source HR system | **Native in-platform apply, directly in Compass** |
| FormSG | Optional fallback for posters needing bespoke questions (STIPs/Gigs only) | **Eliminated entirely** — described as replacing an MVP-era redirect pattern |
| CV / resume handling | Explicitly excluded — "no file upload required," relies only on profile data | **Confirmed still excluded — CV builder is NOT in scope for R1** (correction, 22 Sep, see note above) |
| Application status tracking | In-app for STIPs/Gigs only; explicitly out-of-app for mainstream/internal jobs | **End-to-end tracking for officers**, scope not limited to STIPs/Gigs |
| SJR | Concept fixed (discovery via Compass), solution/mechanism was the open question (R-13) | **Resolved: stays OTG-hosted through 2027, moves to Compass in the 2028 cycle** |
| CMM | Absent from both documents entirely | **Confirmed R1 scope** — consolidated bank + manual WD workflows |
| Officer access beyond 6 pilot agencies | Open question (R-14), framed as a technical RBAC ask | **Concrete Tier 2 item** — POCDEX data-sharing approval for a defined WOG officer dataset |
| Career development content (IDPs, conversation notes) | Not addressed | **Explicitly deferred**, stays on OTG until R2/R3 |

This is a **materially larger R1** than what's in the current one-pager and reduced-scope brief — native apply for internal jobs and full status tracking are real scope additions, not just clarifications (CV builder is not, see correction above). **This needs to be reflected in Tuesday's (22 Sep) estimation delivery** — the existing 18.0–23.5 mw / 18.5–24.0 mw figures were sized against the narrower prior scope and do not account for this expansion.

---

## Immediate Action Required

1. **Update the R1 one-pager and reduced-scope feasibility brief** to reflect this scope — both currently describe a narrower R1 than what's now confirmed.
2. **Re-size the estimate.** The existing man-week/sprint figures (R-12 in the risk register) were built against the old scope. Native in-platform apply for internal jobs and end-to-end status tracking are new engineering surface area not currently costed anywhere (CV builder is out of scope, no sizing needed).
3. **Resolve R-13, R-14 status against this new scope.** R-13 (SJR mechanism) is consistent with this doc — can stay resolved. R-14 (WOG-wide access) now has a concrete Tier 2 answer (POCDEX data-sharing for a defined dataset) — update from "open question" to "scoped, pending governance approval."
4. **Update the CAM Integration conflict (R-15)** — this document doesn't mention CAM Integration at all, so it doesn't resolve that half of R-15. Still needs Adrian's direct confirmation.

---

*Related: [R1 One-Pager](../prds/2026-09-18-W38-r1-epic-one-pager.md), [Reduced-Scope Feasibility Brief](../analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md), [Product x BO Working-Level notes](../meeting-notes/2026-09-21-W39-product-x-bo-working-level.md)*
