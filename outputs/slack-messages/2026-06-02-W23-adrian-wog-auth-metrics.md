# Slack to Adrian — WOG Auth success metrics

*Draft 2026-06-02. Closes the "this week" commitment (was carried since 26 May).*

---

Hi Adrian — here's the WOG Auth success metrics outline I owe you.

Auth is foundational P0, so I've framed success as **reliability + access**, not growth. Three core metrics:

1. **Login success rate ≥ 98%** (`login_success` / `login_attempt`)
2. **Auth error rate < 2%** (failed + access-denied / attempts) — access-denied only for genuinely non-pilot/deactivated officers
3. **Pilot satisfaction ≥ 3.5/5** — ties to our Dec '26 MVP OKR

Plus guardrails that can't break: IM8 session compliance (30-min/12-hr), shared-computer logout integrity, and POCDEX pre-fill mismatch < 5%.

Three asks:
- Agree these 3 + guardrails as the auth success definition?
- Sanity-check the pilot targets (≥98% / <2%) for the MVP-6 pilot (PSD, ESG, MDDI, URA, MCCY, CAAS) — right bar, or different?
- These are baselines-first per the Dec '26 OKRs — we measure at pilot Day 1/Week 1, then firm up for scale.

Full outline here: [link]. Happy to firm up before Sprint 4 grooming (auth's S4+ given the WOG AD UAT env gap).

---

*Send via Slack. Attach/link the full outline (`../status-updates/2026-06-02-W23-wog-auth-success-metrics-outline.md`).*
