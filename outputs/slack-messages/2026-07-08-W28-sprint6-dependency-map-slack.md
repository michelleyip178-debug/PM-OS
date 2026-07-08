# Slack Message: Sprint 6 Dependency Map

**To:** Jace (cc Adrian if he's not already looped in)

**Channel/DM:** Direct message

**Tone:** Direct, brief

**Note:** Corrected — WOG AD (#5) needs both halves of Pow Hwee's framing, not just one. Root cause is shared/not Compass-specific. Separately, what we can honestly say about ourselves is that our timeline isn't giving us confidence. A prior draft dropped the second half entirely.

---

## Main Message

Sharing how Sprint 6 is actually sequenced, and where the real gaps are:

1. **OTG ingestion** — fully ours, in progress.
2. **C@G ingestion** — also fully ours, in progress. No external dependency here.
3. **Ring-fencing** — two tied pieces: (a) the data domain list + data flow diagram Rama/Imelda owe as part of Huiting's data-requirements review, no date yet; (b) POCDEX-sourced data needs to clear Data Office review — if those DO questions aren't answered, that's ours to drive, not POCDEX's or DO's to fix for us. Most time-pressured of the three real gaps.
4. **Competency matching** — Core team has provided their API, but we don't have visibility into whether the data behind it is actually good enough to match against opportunities yet, or when it will be.
5. **WOG AD (login) in test environments** — two things here, not one. Root cause isn't Compass-specific: nobody has clear accountability for the end-to-end infra setup, and nobody's kept the architecture docs current, so it's a mess for anyone touching this infra. What we *can* say honestly is just about us — right now, our infra setup timeline isn't giving us confidence.

We put #5 last because it's the least resolved of the five — both in terms of shared ownership and our own confidence in the timeline.

**The real risk:** #3 is ours to push. #4 is a visibility gap — we don't currently know if Core team's data is match-ready, or when it will be, which could mean it's genuinely not ready yet. #5 is two things at once — a shared cross-team gap, and a low-confidence timeline on our own side that we need to say out loud, not soften.

**Ask:** want your read on #3 given the timeline and the DO angle. On #5, this needs both a cross-team conversation on infra ownership, and us being upfront that our own timeline confidence is low right now.

---

## Thread Reply (if asked for more detail)

- **OTG + C@G ingestion (#1, #2):** both fully in-squad, no external blocker on either.
- **Ring-fencing (#3):** Rama/Imelda's Level 1 data domain list + flow diagram (don't confuse with the smaller draft response due week of 13 Jul), plus POCDEX data needing DO clearance — that clearance is on us to chase.
- **Competency matching (#4):** Core team's API exists, but we have no visibility into whether the data flowing through it is match-ready, or when it will be — that's the open gap, not something we can currently confirm either way.
- **WOG AD (#5), Pow Hwee's exact words:** "WOG AD not avail for test is not a problem specific to Compass. The issue is who accountable or own the end-to-end infra setup... the infra arch is not updated — not easy for anyone to tell what is missing." And separately: "we cannot say POCDEX is not ready, just like we cannot say CSC is not ready. We can only say what Compass is not ready — the infra setup timeline does not inspire confidence." Both statements matter — shared root cause, plus our own honest confidence read.

Full detail: [Sprint 6 external dependencies (corrected)](../analyses/2026-07-08-W28-sprint6-external-dependencies.md)

---

*Source: [Internal grooming, 2026-07-08](../meeting-notes/2026-07-08-W28-internal-grooming.md)*
