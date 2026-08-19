# Competency Recalculation on Profile Change — Draft Proposal

**Status:** Draft. Not yet in the Ops Portal PRD. Waiting on Imelda's squad and Adrian ANG.

**Owner:** Michelle YIP (proposal). Imelda's squad owns the actual competency logic.

**Related:** [Ops Portal PRD](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2555380790/PRD+for+CC+Ops+Portal+MVP), Decision Tracker row on whether a job change auto-refreshes competencies.

**Origin:** Adrian ANG raised this at OTEP Squad Sync — job grade/family/function changes affect how stored competencies need refreshing. See [squad sync notes](../meeting-notes/2026-08-18-W34-otep-squad-sync.md).

**Note (2026-08-19) — CMM dependency:** PSD Architecture Office's Competency Management Module (CMM) proposal (ARF deck, 29 Jul 2026) would make CMM the single issuer of competency IDs, with CareerCompass consuming from it rather than any current source. Two things worth tracking against this doc:
- The CMM model splits competency records by owner: **self-assessed → Compass**, **RO-endorsed → HR systems (HRPS/Cumulus)**. This doc currently treats "the officer's competency list" as one thing — worth checking R1 below against this split once confirmed.
- CMM's map-back mechanism tracks *divergence* (agency job vs. WOG reference role), not *history over time* — it does not answer question 2 above (keep past snapshots or not). CMM does not resolve this doc's open question; it only affects where the clean IDs come from.
- Not yet confirmed whether CareerCompass is expected to consume CMM IDs before MVP freeze, or after — worth confirming with Pow Hwee alongside the design-review check-in.

---

## The problem

When someone's job grade, family, or function changes, their competency list goes stale right away. We haven't said what happens next. Two questions are still open, owned by Imelda's squad:

1. If we can't re-derive competencies fast enough, what does the officer see in the meantime — the old list with no warning, the old list flagged, or something else?
2. Do we keep past competency snapshots, or only show what's current?

---

## What we're proposing (not settled yet)

- **Recalculate, don't merge.** When a change is detected, rebuild the competency list from the new job family/function/grade instead of patching the old one.
- **Keep the old snapshot, dated.** Don't just overwrite it. That answers question 2 above with a yes.
- **Trigger it automatically**, off the same event the Ops Portal already uses to detect changes.

This only covers the trigger and how we store it. The actual competency logic stays with Imelda's squad. That said, see Risk 5 below — that line might be harder to hold than it sounds.

---

## Five things that could break this

Before Imelda's team signs off, these need real answers. Better to raise them ourselves than have them surface mid-conversation.

| # | Risk | Why it matters | Ask Imelda |
|---|---|---|---|
| R1 | Officers can add their own competencies (we saw this in the OTEP-1004 test flow). "Recalculate from scratch" doesn't say if that wipes out what they added themselves. | Self-added and role-derived competencies probably need different handling. | Does your model even separate these two today? |
| R2 | The trigger relies on change detection that we already know misses things — the daily-diff job skips 4 of 14 priority test cases. | If it misses a job change, recalculation just won't fire. Silently. | Do you rely on the same detection, or would this need its own path? |
| R3 | "Dated snapshot" doesn't say which date. POCDEX data can lag by a day, and we don't know if it carries future-dated changes at all. | Detection date vs. source date is a real difference, and we haven't picked one. | Which date should we treat as the real one? Does POCDEX even give us the source date? |
| R4 | We're assuming recalculation always makes things better. Given known data gaps (hundreds of missing job records), a transfer into a role with thinner data could produce a shorter list than before. | Nobody's said whether we hold the old list until the new one's at least as good, or just show the thinner one. | Which should it be? |
| R5 | "Recalculate, don't merge" assumes it's safe to just rerun your competency logic automatically. We don't know if that's true. | If your process has manual steps or overrides, an automatic rerun could quietly wipe them. | Is this safe to trigger automatically, or does a human need to be in the loop? |

---

## What the officer sees

**Rule of thumb: never show a wrong answer silently.** If someone applies to a role based on a stale competency list, that's worse than the list just being late.

Not everything here is buildable yet. Splitting into what we can build now versus what's stuck behind the risks above.

### Can build now

| Element | What it looks like | Why it's unblocked |
|---|---|---|
| "This might be outdated" flag | Banner on the profile: your competencies may not reflect a recent change, we're updating | Just a state field and a banner. Doesn't need any of the 5 risks resolved. |
| Flag never blocks anything | Officer can still browse, apply, see match scores — the flag is just a heads-up | UI decision, not a technical one. |
| Quiet "updated" confirmation | Flag clears, simple confirmation, no specific date shown | Skips the date question in R3 entirely. |
| Generic wording | "Your profile changed" rather than naming the specific field | Doesn't need the system to know exactly what changed. |

### Stuck until the risks above are answered

| Element | What it looks like | Blocked by |
|---|---|---|
| Progress indicator | Some sense of when the update will land | R2, R3 — we don't know how long recalculation actually takes |
| Dated confirmation | "Updated as of [date]" | R3 — we don't know which date to show |
| Flag on opportunity cards, not just profile | Same warning shown wherever a match score appears | R2 — bigger surface area, and detection is already shaky. Probably post-MVP. |
| "See your old competencies" link | View past snapshots | R1, R5 — the data model doesn't yet separate self-added from derived, or guarantee clean snapshots |
| Specific wording | "Your job function changed on Aug 12" | R3 — needs the system to carry structured change details through to the UI |

**Bottom line:** build the "can build now" list regardless of how the Imelda conversation goes. Hold off sizing the rest until the risks resolve.

---

## Next step

Take the five risks straight to Imelda's squad and Adrian ANG. If they're satisfied, this moves from Open to build-ready in the Decision Tracker. If not, it needs another pass before anyone sizes it.
