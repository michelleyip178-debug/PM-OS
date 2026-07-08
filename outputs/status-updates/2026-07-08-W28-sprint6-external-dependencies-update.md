# Status Update: 4 Risks Before VAPT

**For:** Adrian / Jace

**Date:** 2026-07-08

**Heads up:** I first thought these could wait. I checked the dates and they can't. We have **3 sprints left before VAPT starts (7 Sep)**, and VAPT needs about a month of setup time before that. So we really only have a few weeks to fix these.

---

## The Short Version

Most of Sprint 6 is fine — we're building the core data pipeline ourselves, no blockers. But four other pieces depend on other teams, and none of those teams have given us a date yet.

---

## Risk 1: The data requirements document is still unknown, with no date

**What's wrong:** To build the feature that shows officers only the jobs they're eligible for, we first need a document that defines exactly what officer data we're allowed to pull from HR systems. That document doesn't exist yet, and nobody has given us a date for when it will.

**What breaks if we don't fix it:** This feature can't be built or tested. And the next feature in line (matching officers to jobs by skill) needs the same data, so it gets stuck too.

**How bad:** 🔴 High. This is genuinely unknown — not "slow," not "in progress," just undefined with no timeline attached.

---

## Risk 2: We don't know if the POCDEX API will actually be ready for MVP

**What's wrong:** Separate from the data requirements document (Risk 1), we also don't know if the POCDEX system itself — the API we need to actually pull officer data from — will be technically ready in time for MVP. This is a bigger, more basic question than "what data" — it's "will the pipe even be built and working."

**What breaks if we don't fix it:** Even if we get the data requirements sorted (Risk 1), we still need POCDEX's API to actually be live and working. If it isn't ready, ring-fencing and skill-matching are both stuck regardless of anything else we do.

**How bad:** 🔴 High. This is a foundational dependency — if POCDEX itself isn't ready, everything downstream of it doesn't matter yet.

---

## Risk 3: A tool another team owns is broken

**What's wrong:** Officer skills data comes in through an upload tool that a different team owns. It's currently buggy, so we can't get clean data through it.

**What breaks if we don't fix it:** We can't build or test the skill-matching feature.

**How bad:** 🟡 Medium-high. It's already lower priority for us, but it's still broken on their end, and we're on the same tight clock as everything else.

---

## Risk 4: Officer login doesn't work properly in our test environments

**What's wrong:** The real government login system mostly only works in production. It doesn't easily connect to our test setup. We built a workaround so we're not stuck, but that means we're testing our workaround, not the real login.

**What breaks if we don't fix it:** We might not find real login problems until much closer to launch. It also matters for a separate team (CSC) — they can only get their own login integration ready in August, no earlier, no matter what we do. That means August is a hard floor for them, not a target. If our login isn't ready by the time their August window opens, their integration slips too, and there's no way to make up that time by moving faster later.

**How bad:** 🟡 Medium. It's our lowest priority by design, and speeding up our fix won't make CSC move faster than August anyway — but if we're not ready when their window opens, we cause a delay we can't undo.

---

## Bottom Line

I was wrong to say "nothing urgent." Nothing is broken today, but we don't have much runway left, and all four of these depend on someone outside our team who hasn't given us a date. If any one of them takes too long, it delays the next thing behind it. Risks 1 and 2 together are the most concerning — even if we sort out the data requirements document, we still don't know if POCDEX itself will be ready to give us that data by MVP.

**What I need from you:**
- If either of you can reach these teams faster than we can, please do — this week if possible.
- A decision on whether Risks 1 and 2 (data requirements + POCDEX readiness) need to go above team-to-team level, given how little time is left and how undefined both currently are.

---

*Full detail: [Sprint 6 external dependencies](../analyses/2026-07-08-W28-sprint6-external-dependencies.md)*
*Source: [Internal grooming notes, 2026-07-08](../meeting-notes/2026-07-08-W28-internal-grooming.md)*
