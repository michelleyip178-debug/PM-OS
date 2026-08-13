# Quick Decision: When to Broadcast UAT Access to the Wider Team

**Date:** 2026-08-09

**Owner:** Michelle Yip

---

## The Decision

Core team's internal UAT is complete (Gate 1) — Rama confirmed all test cases passed, final verification happening today. Adrian's standing ask (Friday) is to broadcast ticket/account locations once data is "confirmed/transparent" so more people can help test. The question: broadcast now on Gate 1 alone, or wait for Rama to explicitly confirm Gate 2 (Jira tickets updated with current test data) first?

## Options

1. **Broadcast now, on Gate 1 alone.** Pro: maximizes testing time against a 2-day sprint-close window (2026-08-09). Con: if Gate 2 isn't actually done, new testers hit stale tickets or wrong test data, wasting their first session and possibly filing false defects.
2. **Wait for explicit Gate 2 confirmation from Rama, then broadcast.** Pro: testers start clean, no wasted cycles, no false defects muddying the UAT signal right at sprint close. Con: costs a delay (hours, not days, if Rama confirms promptly) and risks losing the weekend momentum Adrian was trying to capture.

## Recommendation

**Wait for Rama's explicit Gate 2 confirmation before broadcasting** — but treat it as a same-day ask, not an open-ended wait.

Gate 1 and Gate 2 are two different failure modes: Gate 1 (POCDEX API / internal UAT) being done tells you the *system* works. Gate 2 (Jira tickets carrying current test data) tells you the *test instructions* are trustworthy. Broadcasting on Gate 1 alone risks a room full of new testers opening tickets that reference stale data — exactly the kind of noise that erodes confidence in UAT results right when Sprint 7 close needs a clean signal, not more triage.

The cost of waiting is small (a direct message to Rama, likely resolved within hours) against the cost of being wrong (wasted tester time, false defects, re-explaining to people just brought in).

## Next Steps

- [ ] Message Rama directly today asking for explicit Gate 2 status (Jira tickets updated with current test data — yes/no) — @Michelle — today
- [ ] Once confirmed, broadcast ticket/account locations to the wider team per Adrian's ask — @Michelle — same day as confirmation
- [ ] If Rama can't confirm within a few hours, escalate to a firm ETA rather than letting it drift silently — @Michelle — today

## How We'll Know It Worked

No wasted first-testing-session reports (testers hitting stale data or wrong tickets) once the broadcast goes out — if that happens anyway, Gate 2 wasn't actually closed and the sequencing call should be revisited.
