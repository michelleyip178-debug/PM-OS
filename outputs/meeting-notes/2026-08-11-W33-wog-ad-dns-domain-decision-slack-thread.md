# Meeting Notes: WOG AD Auth Domain Decision (Slack Thread)

**Date:** 2026-08-11

**Attendees:** Pow Hwee TAN (PSD), Adrian Lo (TW - PSD), Boon Siang TEH (GovTech), Fabian PEH (GovTech), Léo, fanxu.wang

**Meeting Type:** Slack thread — technical decision + troubleshooting

**Duration:** N/A (async thread)

---

## Summary

Pow Hwee decided to abandon a separate authentication DNS name in favor of the existing `env.careercompass.gov.sg` domain (already proven to work for both COMET and internet devices), differentiating by URL path instead. Adrian Lo and Boon Siang Teh supported this. Pow Hwee will resubmit the WOG AD form and loop in Fabian with the relevant URLs. Separately, Léo hit live auth errors (403 Forbidden, inconsistent Keycloak/WOG AD redirects), and fanxu.wang traced this to a subdomain resolving to a public IP that Menlo's remote browser was interfering with — proposing the same `env.careercompass.gov.sg` domain as the fix.

**Why this matters today:** This directly informs Today's Three item 3 (raising WOG AD re-enable ownership with Léo) — there's now a concrete technical decision and next step (Pow Hwee resubmitting the form) rather than a fully open question. Worth folding into that conversation rather than treating them as separate.

---

## Decisions Made

1. **Abandon the separate authentication DNS name; use `env.careercompass.gov.sg` for all auth needs**
   - **Why:** This domain already works for both COMET and internet devices; a separate auth-specific domain would add maintenance overhead without a clear benefit. Differentiating by URL path is sufficient.
   - **Who decided:** Pow Hwee TAN (PSD)
   - **Impact:** Simplifies the domain/DNS footprint for WOG AD integration. Removes the need to provision and maintain a second domain.

2. **URL-path differentiation confirmed as sufficient (not domain-level)**
   - **Why:** Team consensus that path-based routing meets the requirement without the added complexity of a second DNS name.
   - **Who decided:** Supported by Adrian Lo (TW - PSD) and Boon Siang TEH (GovTech)
   - **Impact:** Simplifies downstream implementation — no new domain to register, secure, or route.

3. **Comet Portal Service Request Form confirmed as the correct channel for comet access requests**
   - **Why:** Fabian PEH confirmed this is the standard GovTech process.
   - **Who decided:** Fabian PEH (GovTech), confirming Boon Siang's question
   - **Impact:** Resolves the process question that was blocking Boon Siang's IP-range/domain request path.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Resubmit WOG AD form reflecting the `env.careercompass.gov.sg` decision | @Pow Hwee TAN | Not specified — "more predictable turnaround" implied, no hard date | 🔴 High | 🔴 Not Started |
| Email Fabian PEH with relevant URLs for further action, cc Boon Siang, Adrian Lo, and Pathfinder team | @Pow Hwee TAN | Not specified — recommend within 48 hours per default guidance | 🔴 High | 🔴 Not Started |
| Update IaC and ALB rules for the domain change | @fanxu.wang | Not specified | 🟠 Medium-High — blocks the auth fix | 🔴 Not Started |
| Remove WOG AD IdP provider from the Keycloak repo | @fanxu.wang | Not specified | 🟠 Medium-High — part of the same cleanup | 🔴 Not Started |

**Notes:**
- No due dates were stated for any of these — all four should be scheduled within 48 hours per default guidance, especially given WOG AD re-enable ownership is already a live ask today (see Today's Three, item 3).
- The Pathfinder team is being cc'd on Pow Hwee's email — worth confirming Léo specifically sees it given he's the one actively hitting the auth errors this fixes.

---

## Key Insights & Quotes

**Technical constraints:**
- `auth.env.careercompass.gov.sg` (the abandoned subdomain approach) was resolving to a **public IP**, which caused Menlo's remote cloud browser to interfere and produce unexpected redirects — a concrete, diagnosed root cause, not a guess.
- Léo's symptoms (403 Forbidden, inconsistent redirection between Keycloak and WOG AD) are consistent with this DNS/public-IP issue — the domain decision is expected to resolve them, though that's not yet confirmed as tested.
- GCC team confirmed `auth.dev` is resolvable from GSIB — relevant context for why the separate-domain approach seemed viable initially before the public-IP problem surfaced.

**Process note:**
- Comet Portal Service Request Form is the confirmed channel for any future comet access requests — worth keeping as a reference for the team rather than re-asking each time.

---

## Open Questions

- [ ] Has Léo's 403/redirect issue been confirmed resolved once the `env.careercompass.gov.sg` change and IaC/ALB updates land? — **Owner:** Léo / fanxu.wang — **By:** Not set, should be tested once fanxu.wang's changes are live
- [ ] Is there a firm date for Pow Hwee's WOG AD form resubmission? — **Owner:** Michelle to confirm with Pow Hwee — **By:** Today, given this connects directly to today's WOG AD ownership ask
- [ ] Does this domain decision change the "2-4 week WOG AD approval clock" previously tracked (open-items #26), or does resubmission restart that clock? — **Owner:** Michelle to confirm — **By:** Before assuming any existing WOG AD timeline still holds

---

## Blockers

1. **WOG AD auth currently broken for Léo (403 Forbidden, inconsistent redirects)**
   - **Blocked by:** The old subdomain approach's public-IP resolution issue — root cause now identified, fix proposed but not yet confirmed deployed
   - **Impact:** Blocks Léo's ability to test/validate WOG AD login (OTEP-71), which is already the subject of today's Priority 3 ask
   - **Resolution:** fanxu.wang's IaC/ALB updates + Keycloak repo cleanup, once actioned

---

## Timeline Risks

- **TIMELINE RISK:** This thread surfaces a live blocker on OTEP-71 (WOG AD login) that wasn't visible in the Jira board or today's earlier planning — the ticket shows "In Progress" with no date, but this thread reveals *why* it's stuck (DNS/domain issue), not just that it's unowned. Worth bringing this concrete detail into today's direct message to Léo rather than a generic "what's the status" ask.
- **TIMELINE RISK:** Open-items #26 previously tracked a "2-4 week WOG AD approval clock" tied to the original domain/form submission. Resubmitting the form today may restart or extend that clock — don't assume prior estimates still hold without confirming with Pow Hwee.

---

## Next Steps

**Immediate (Today):**
- Fold this into the direct WOG AD message to Léo (Today's Three, item 3) — this gives the ask concrete substance: root cause identified, fix in progress, form being resubmitted
- Confirm with Pow Hwee whether the WOG AD approval clock resets with this resubmission

**Short-term:**
- Track fanxu.wang's IaC/ALB updates and Keycloak repo cleanup to completion
- Confirm Léo's auth errors are resolved once the domain change is live

---

## Context for Future Reference

This connects to two already-tracked items: **open-items #26** (WOG AD onboarding — the 2-4 week approval clock, Léo's Keycloak/Azure AD client config) and **open-items #42** (WOG AD onboarding infra follow-up, Pow Hwee). This thread is the most concrete update on that chain since it was last touched — worth updating both open items with this domain decision and the newly identified root cause of Léo's auth errors.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original Slack thread summary</summary>

On August 11, 2026, @Pow Hwee TAN (PSD) decided to abandon the separate authentication DNS name approach and use the existing env.careercompass.gov.sg domain, which has proven to work for both comet and internet devices, for all authentication needs. This decision was supported by @Adrian Lo (TW - PSD) and @Boon Siang TEH (GOVTECH), who agreed that differentiating by URL path is sufficient and avoids maintaining an additional domain. @Pow Hwee TAN (PSD) will resubmit the WOG AD form with a more predictable turnaround and will email @Fabian PEH (GOVTECH) with relevant URLs for further action, cc'ing @Boon Siang TEH (GOVTECH), @Adrian Lo (TW - PSD), and the pathfinder team.

@Pow Hwee TAN (PSD) decided to abandon the separate authentication DNS name approach and will use env.careercompass.gov.sg for authentication, as it works for both comet and internet devices [1].
@Boon Siang TEH (GOVTECH) confirmed that the GCC team stated auth.dev is resolvable from gsib, and inquired if the Comet Portal Service Request Form should be used for the intel team's domain needs [2].
@Fabian PEH (GOVTECH) confirmed that the Comet Portal Service Request Form is the correct method for raising service requests for comet access [3].
Initially, @Pow Hwee TAN (PSD) asked @Boon Siang TEH (GOVTECH) to allow a specific IP range through the ALB for testing while DNS entries were being processed [4].
@Léo reported issues with Microsoft authentication, including a 403 Forbidden error and inconsistent redirection behavior between Keycloak and WOG AD [5][6].
@fanxu.wang identified that the subdomain auth.env.careercompass.gov.sg was resolving to a public IP causing Menlo's remote cloud browser to interfere and leading to unexpected redirects [7].
As a temporary workaround, @fanxu.wang proposed using env.careercompass.gov.sg for internal authentication communication and outlined tasks including updating IaC and ALB rules, and removing the WOG AD IdP provider from the Keycloak repo [7].

</details>
