# CSC SSO Feasibility Plan

**Source:** Pow Hwee (email, 2026-05-25)
**Related:** WOG Auth PRD, design review prep 2026-05-26
**Status:** Step 1 complete (CSC confirmed). Step 2 and 3 pending.

---

## Objective

Assess whether OTEP can link to CSC such that officers can access course details without re-login using WOG AD SSO.

---

## Overall Approach

Validate feasibility through a 3-step check:

### Step 1: Confirm CSC Capabilities (Primary Dependency) — ✅ Done

Engage CSC team to clarify:
- Whether CSC supports WOG AD / Azure AD SSO
- Whether CSC supports federated SSO (SAML / OIDC) from external systems
- Whether CSC supports deep linking to course pages with SSO context
- What happens if user is not authenticated (auto SSO vs manual login)

**Outcome determines if seamless experience is technically possible**

**Answers received from Sy En (CSC IT, 2026-05-25):**

| Question | Answer |
|----------|--------|
| WOG AD / Azure AD SSO support? | Yes — DLE supports both WOG AD and Singpass login |
| Federated SSO (SAML / OIDC)? | Yes — OIDC and SAML supported. Architecture: OTEP builds own SSO, DLE integrates with it |
| Deep link to specific course with session preserved? | Yes — if session is valid, no re-login needed |
| If user not logged in? | Redirects to OTEP's login page |

→ **Seamless experience is technically possible**

---

### Step 2: Confirm OTEP Capabilities (Internal Validation) — Pending

Check with IT/GovTech:
- Ability to initiate SSO flow (SAML / OIDC)
- Ability to construct deep links into CSC courses

**Open question:** Does "OTEP builds its own SSO" mean WOG Auth (already in MVP scope), or is additional identity provider work needed? Answer from Pow Hwee pending.

---

### Step 3: Run Quick Reality Test — Not yet done

Simple test to validate real-world behaviour:
Log into WOG AD → access CSC course link

Observe:
- ✅ No login → session-based SSO works
- ⚠️ Redirect but auto-login → SSO possible with setup
- ❌ Login required → no SSO currently

---

## Decision Framework

| Scenario | Outcome | Action |
|----------|---------|--------|
| ✅ Full SSO + deep link supported | Seamless experience possible | Proceed with integration |
| ⚠️ Partial (session-based only) | Inconsistent UX | Proceed with caveats |
| ❌ Not supported | Cannot achieve no-login experience | Redesign flow |

---

## Key Risks / Edge Cases

- Expired sessions → user may be prompted to log in
- Cross-browser/device → SSO may not persist
- Access rights → user may still be blocked even if logged in
- Non-WOG users → SSO may fail

---

## Bottom Line

Feasibility depends primarily on CSC's SSO and federation capability, not OTEP.

**Updated bottom line (post Sy En confirmation):** CSC SSO is feasible. Remaining question is scoping — whether OTEP's WOG Auth covers the SSO layer DLE needs to integrate with, or if additional build is required.

---

*Saved: 2026-05-25*
*Next: Pow Hwee to confirm Step 2. Run Step 3 reality test. Bring to design review 2026-05-26 14:00.*
