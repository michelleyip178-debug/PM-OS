# Update: CAM Integration — Keycloak SCIM Exploration (Hao Eng Chua)

**Date:** 2026-09-16

**Source:** Async written update from Hao Eng Chua (GovTech), relayed via Michelle Yip's squad update

**Type:** Engineering exploration / technical finding

**Attendees:** N/A — async update, not a live meeting

---

## Summary

Hao Eng found that Keycloak's built-in SCIM standard endpoints may already cover the user-management functionality CAM needs — meaning CC might be able to wire CAM directly to Keycloak instead of building new app-side integration endpoints. She's moved past exploration: she's already emailed the CAM team proposing this approach and started the supporting Keycloak group/role work.

---

## Key Finding

**Keycloak SCIM as a shortcut:** Keycloak's built-in SCIM (System for Cross-domain Identity Management) standard endpoints might already cover the user-management endpoints CAM needs. If this holds up, it potentially avoids building new app-side endpoints entirely — CAM would wire directly to Keycloak instead.

**Potential impact:** significant scope reduction on the CAM integration epic, if confirmed.

---

## Status — Not Yet a Decision

This is a proposal in flight, not a confirmed approach:
- Tracked via Jira epic **OTEP-1553**
- Hao Eng is trialing a "wayfinder" AI skill to support the research
- She emailed the CAM team yesterday (2026-09-15) proposing the SCIM connector approach over a custom-built API
- She's raised an MR for Keycloak group/role setup in support of this direction
- She separately proposed adding a Privileged Group/admin role in Keycloak, explicitly noting it "also caters for future CAM integration"

**No confirmation yet from the CAM team** that they'll adopt the SCIM approach. Hao Eng is pushing it as the intended direction, but it's not yet agreed cross-team.

---

## Other Progress

**Documentation consolidation:** Hao Eng copied CAM-related pages out of Comet into a dedicated Confluence page for easier team reference.

---

## Why This Matters Right Now

This directly intersects the [R1 engineer headcount justification](../analyses/2026-09-16-W38-r1-engineer-headcount-justification.md) drafted earlier today, which flagged CAM as **confirmed for R1 with zero effort estimate** — its own epic one-pager states "effort not estimated, R1 commitment isn't credible without a sizing pass."

This SCIM finding is the first real signal on what that sizing pass might look like:
- **If confirmed:** CAM integration could shrink from "build 7 read-only APIs + webhook consumer + custom app-side endpoints" to "wire to existing Keycloak SCIM endpoints" — a meaningfully smaller build, which changes the headcount math in that brief.
- **If not confirmed** (CAM team doesn't adopt SCIM, or Keycloak's SCIM support doesn't actually cover what CAM needs): the original unscoped build remains the baseline, and the 4th-engineer case stands as written.

**Don't update the effort estimate in the headcount brief yet** — this is Hao Eng's proposed direction, not a cross-team agreed decision. Revisit once CAM team responds.

---

## Open Questions

- [ ] Will the CAM team agree to the Keycloak SCIM connector approach, or do they have a reason it doesn't fit their architecture? — **Owner:** CAM team (response pending) — **By:** unspecified, follow up
- [ ] Does Keycloak's SCIM implementation actually cover all 7 CAM event types' user-management needs, or only a subset? — **Owner:** Hao Eng — **By:** unspecified
- [ ] If SCIM holds up, does this change the CAM epic's Sprint placement inside the R1 5.5-sprint plan, or is it purely a scope/effort change within the same window? — **Owner:** Michelle Yip, once CAM team responds

---

## Recommended Next Steps

**Immediate:**
- Track OTEP-1553 for CAM team's response to Hao Eng's SCIM proposal
- Flag this as a live variable in any resourcing conversation with Rama/Adrian — the CAM effort estimate is actively in motion, not stable

**Once CAM team responds:**
- If SCIM confirmed: revisit the CAM section of the headcount justification brief with the reduced-scope estimate
- If SCIM rejected or partial: the original unscoped-CAM risk in the headcount brief stands, escalate the effort-sizing gap as originally flagged

---

*Raw update preserved below for reference.*

<details>
<summary>Original update</summary>

Here's what @Hao Eng CHUA (GOVTECH) found for CAM:

- Keycloak SCIM as a shortcut: Using AI agent skills to explore the integration space, she found Keycloak's built-in SCIM standard endpoints might already cover the user-management endpoints CAM needs — potentially avoiding building new app-side endpoints entirely, and just wiring CAM directly to Keycloak. Big potential scope reduction if it holds up, per @Michelle YIP (PSD)'s squad update.
- She's been tracking this exploration via a Jira epic (OTEP-1553) and a wayfinder AI skill she's trialing for the research.
- Documentation consolidation: She copied out CAM-related pages from Comet into a dedicated Confluence page for easier team reference.
- Latest update (yesterday): She emailed the CAM team proposing they use the Keycloak SCIM connector instead of building a direct API from scratch, and is working on Keycloak group/role setup (raised an MR) related to this.
- Also proposed adding a Privileged Group/admin role in Keycloak, noting it "also caters for future CAM integration."

Bottom line: her core finding is that Keycloak's SCIM standard may let CAM integrate without custom app-side endpoints — she's now pushing that as the actual approach with the CAM team rather than just exploring it.

</details>
