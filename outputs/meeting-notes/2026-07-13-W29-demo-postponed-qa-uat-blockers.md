---
date: 2026-07-13
week: 2026-W29
type: async-update
source: Slack
---

# Demo Postponed — QA/UAT Infrastructure Blockers

**From:** Rama Moorthy (PSD), 8:22am, tagging Adrian Ang (PSD), Michelle Yip (PSD), Imelda Mo (PSD)

## What happened
Rama postponed today's [Bi-Weekly] OTEP Retro and Demo (was 3:00–4:00pm) to resolve infrastructure issues found during QA/UAT prep. QA and UAT environments are up and users can log in successfully, but three issues are blocking a stable, production-ready environment before demo/production rollout:

1. **Complex security and connectivity setup** — additional configuration needed for services like PostHog, CFT (Careers@Gov data transfers), JumpStart, and other external integrations.
2. **Cross-team communication gaps** — some infrastructure and engineering decisions weren't consistently communicated across teams, so dependencies surfaced later than expected.
3. **Incomplete end-to-end validation** — earlier demos focused mainly on account setup and login; some integration/connectivity scenarios weren't fully tested.

Rama will provide daily updates until blockers are resolved and environments are stable.

## Why this matters
Issue #2 (cross-team comms gaps causing late-discovered dependencies) is the same failure pattern flagged in this week's weekly plan — the exact thing Priority 3 (tracker integrity) and this week's overall focus are trying to break out of. This is now a second, independent instance of it surfacing (infra/QA side, not just Jira tracker staleness).

## Action needed
- [x] Logged as `00-hub/open-items.md` #58 (2026-07-13) — blocks demo/production readiness, Rama owns resolution + daily updates, Michelle tracks
- [ ] Watch for overlap with existing risks — WOG AD, POCDEX, and CFT integration items already in `00-hub/risks.md` may be touching the same connectivity/security setup gap
- [x] 3:00–4:00pm slot freed in today's daily plan

## Daily Update Log

*Append each of Rama's daily updates here as a dated entry. Update #58's status in `open-items.md` when resolved or materially changed (e.g. a fixed resolution date is given).*

| Date | Update | Status |
|---|---|---|
| 2026-07-13 | Initial postponement — 3 issues identified (connectivity/security, comms gaps, incomplete E2E validation). No fixed resolution date given. | 🔴 Open |

**If updates stop coming or stall past 2–3 days:** escalate — no ETA was given at postponement, and this is now blocking demo/production readiness with a hard Nov go-live behind it.

## Related
- `00-hub/open-items.md` #58 — canonical tracker entry
- `00-hub/risks.md` — WOG AD onboarding, POCDEX dependencies, CFT integration risk entries
- `00-hub/open-items.md` #52 (Hao Eng / CFT integration capacity) — CFT is named directly in Rama's connectivity issue
