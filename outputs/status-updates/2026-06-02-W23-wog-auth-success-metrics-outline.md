# WOG Auth — Success Metrics Outline (for Adrian)

*Draft 2026-06-02 · Michelle · grounded in Dec '26 OKR baselines + WOG Auth PRD*

**Framing:** WOG Auth is foundational P0 — it gates every CareerCompass feature. So its success isn't a growth metric, it's **does login work reliably, and does the right officer get in (and the wrong one kept out)**. The MVP job is to set baselines we don't have yet. Targets below are starting proposals for the MVP-6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS — ~5,400 officers), to firm up before Sprint 4.

---

## The 3 that matter (north-star for auth)

| # | Metric | What it proves | Proposed pilot target | Baseline |
|---|--------|----------------|-----------------------|----------|
| 1 | **Login success rate** = `login_success` / `login_attempt` | Officers can actually get in | **≥ 98%** | None yet — set at pilot |
| 2 | **Auth error rate** = `login_failed` + `access_denied` / `login_attempt` | Failures are rare and explainable | **< 2%**, and access-denied only for genuinely non-pilot/deactivated officers | None yet |
| 3 | **Pilot officer satisfaction** (login experience) | Login isn't a friction wall | **≥ 3.5/5** (ties to MVP OKR) | OKR target |

---

## Guardrails (must-not-break)

- **Session compliance (IM8):** 30-min inactivity timeout + 12-hr max session enforced in prod. Binary — either compliant or not.
- **Shared-computer logout integrity:** after logout, next person on the same machine cannot reach prior officer's data. Zero tolerance.
- **First-login profile accuracy:** POCDEX pre-fill (name/email) mismatch rate **< 5%**. Stale POCDEX = wrong profile.
- **Availability/latency** of COMET / Azure AD path (login shouldn't hang or time out).

---

## Instrumentation (events already in PRD scope)

`login_attempt` · `login_success` · `login_failed` · `login_attempt_failed_access_denied`
→ These four give us metrics 1 & 2 directly. PostHog instrumentation (Rama) should capture them. Satisfaction (metric 3) comes from the pilot UAT survey.

---

## What I need from you, Adrian

1. **Agree the 3 core metrics + guardrails** as the auth success definition.
2. **Sanity-check the pilot targets** — is ≥98% login success / <2% error the right bar for the MVP-6 pilot (PSD, ESG, MDDI, URA, MCCY, CAAS), or do you want different?
3. These are **baselines-first** for MVP per the Dec '26 OKRs — we measure at pilot Day 1 / Week 1, then set firmer targets for scale.

*Note: auth ships Sprint 4+ (no WOG AD UAT env yet, #26). This outline lets us instrument correctly before then. Happy to firm up before Sprint 4 grooming.*

---

## Open items this surfaces (FYI, not blocking the outline)

- OTEP-110 scope: does OTEP show error UI, or does WOG AD own all error states? Affects whether `login_failed` is even an OTEP-side event.
- OTEP-111: pilot access check by agency name or ID — determines access-denied accuracy.
