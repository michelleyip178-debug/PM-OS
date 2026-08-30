# Prelude Message: Adrian + Imelda, Ahead of the POCDEX Day 2 Jam

**Purpose:** set expectations before the session so it's decision-making time, not context-building time. Send ahead of scheduling/holding the jam.

**Where to send:** Slack DM or group message to Adrian and Imelda.

---

## Draft

Hi Adrian, Imelda,

Setting up a working session to close out the 28 Aug test case scoping (open-items.md #60), per Adrian's ask to get this sorted. Want to make sure we spend the time making decisions, not walking through background, so here's what to know beforehand.

**Two things we're separating:**
1. The baseline — the full set of scenarios Huiting's POCDEX team already asked us to test. Already agreed, not up for debate. We're just confirming it's fully accounted for.
2. What we're adding on top — 17 concrete test cases (steps, test data, pass/fail conditions) that make most of that baseline actually testable. One of the 17 is a genuinely new case we're proposing, flagged honestly as ours, not Huiting's.

**Imelda — since you're co-owner on this, before we jam I'd like your independent read on a few things, not just reacting to my analysis:**
- TC5 (leave and rejoin) and TC6 (accidental delete/recreate) — I couldn't find dedicated rows for these in the 118-row workbook. Does that match your understanding, or do you know where they're covered?
- The 3 baseline scenarios with no test case drafted yet (leave-and-rejoin, delete/recreate, contingent-worker inclusion) — from your side, are any of these already handled elsewhere, or genuinely open?
- Test data prep — historically has this sat with Compass or been a joint ask to POCDEX? Want your read before we propose an owner in the room.

**What we need to land in the session itself:**
- A real answer on the "last modified date" business rule (RAID R11) — this has come up multiple times without a final call, and it's now the thing blocking scoping. May already be decided; we just need to confirm and write it down.
- Decisions on 7 of the 17 cases where the expected behavior isn't yet defined (things like: what happens when two people share a login email, or an officer's leave status disagrees across systems).
- A call on the 3 baseline gaps above, and whether they need a test case before the 28th.
- Clarity on who owns test data prep.
- An explicit split of who's doing what before the 28th.

I'll bring a full agenda with the detail behind each of these so we can move through it fast. Should take about [X mins] — let me know what works for your calendars this week, ideally before [date] so there's runway to act on whatever we decide.

Best,
Michelle

---

## Notes before sending

- Fill in the session length and target scheduling date/deadline before sending — left as placeholders since it depends on calendar availability.
- This intentionally does not list all 17 cases or the CUS Posting/AGD-MTI onboarding question — that detail lives in the full agenda ([2026-08-26-W35-pocdex-day2-jam-agenda.md](../meeting-notes/2026-08-26-W35-pocdex-day2-jam-agenda.md)), which you'd share alongside or just before the session.
- Consider attaching or linking the agenda doc directly in this message so they can skim before showing up.
