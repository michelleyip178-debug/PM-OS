# Draft Reply to Huiting Lian — Closing the 11 Aug Data Prep Question

**Context:** Huiting's 9 Aug email ("RE: Draft for Data Sharing Approval for CareerCompass") ended with a specific, time-bound ask: *"Any specific thing POCDEX needs us to look out for in data prep? Please revert by Tuesday, 11 Aug at the latest — failing which, we will proceed to prepare the test plan."* This appears to have gone unanswered. This draft closes that loop directly, on its own, before the larger 118/17-case discussion (which should wait until after the internal jam with Adrian and Imelda).

**Where to send:** reply-all on the existing "Draft for Data Sharing Approval for CareerCompass" email thread, keeping the same distribution (Huiting, Rama, Adrian, Imelda, Barry, and the others already on that thread).

---

## Draft

Hi Huiting,

Apologies for the delayed reply on this — following up on your 9 Aug note.

On data prep for the baseline test scenarios: nothing specific to flag from our side at this point beyond what's already captured in the Data Sharing Form. [Michelle: confirm this is actually true before sending — if there IS something to flag, replace this line with the specific ask.]

Separately, we've since gone through your full test plan (the 118-scenario workbook) in detail on our side, mapping every row back to your 14 categories to make sure we're testing what you intended. Two things came up that we'd like to check with you directly:

1. We couldn't locate dedicated rows for TC5 (officer leaves and rejoins) or TC6 (accidental delete/recreate in POCDEX) in the version of the workbook we have. Are these captured elsewhere under a different label, or should we expect them separately?

2. Just to confirm ownership — is the full 118-row plan entirely your team's work, or does it include the additional ~25 scenarios POCDEX mentioned adding on top of Compass's original persona test plan? Want to make sure we're not proposing changes to something that needs your sign-off first.

We're working through the rest of this internally this week and will follow up with more detail shortly. Thanks for your patience on the delay.

Best,
Michelle

---

## Notes before sending

- **The bracketed line needs a real answer** — check with Rama/Imelda whether there's actually a data-prep flag to raise, or if "nothing further" is accurate. Don't send a placeholder.
- This deliberately does **not** mention the 17 additional test cases or the BO decisions in detail — that's better held until after the jam with Adrian/Imelda, since some of what you'd tell her (which cases are ready, what's still pending a decision) will likely change based on that conversation.
- The TC5/TC6 question and the provenance question are worth asking now regardless of the jam outcome, since they're blocking facts you need either way.

---

# Draft 2 — Fuller Follow-Up, to Send After the Jam

**Purpose:** the substantive reply — introduces the 17 additional test cases, reports where the 7 BO decisions landed, and closes the loop on the TC5/TC6/TC14 gaps and data-prep ownership. Send this only after the jam with Adrian and Imelda, once the bracketed placeholders below have real answers. This is a template, not ready to send as-is.

**Where to send:** same thread as Draft 1, as a follow-up.

---

## Draft

Hi Huiting,

Following up on where things landed after we went through your test plan internally.

**On the 118-scenario workbook:** we've mapped every row back to your 14 categories to confirm we're covering what you asked for. [Michelle: if she answered the TC5/TC6/provenance questions from Draft 1, reference her answer here instead of repeating the question.]

**What we've added on top:** we've turned most of your scenarios into 17 concrete test cases — specific test data, steps, and pass/fail conditions — so they're ready to hand to a tester once the underlying records are seeded. 16 of the 17 map directly to your existing rows; one additional case (confirming a legitimate officer's first login works correctly) came out of a separate gap-check against our existing test coverage, not from your list — flagging that one specifically since it's new.

Of those 17, 7 needed an internal decision on expected behavior before they could be finalized. Here's where those landed:

[Michelle: fill in after the jam — for each of the 7 (email reuse, shared-email conflict, split-identity, NPL cutoff timing, NPL cross-system precedence, hire-rescind account state, CUS Posting agency question), state the decision made or, if still open, who owns it and by when.]

**On TC14 (contingent worker exclusion):** [Michelle: fill in — did the jam decide to add a case, or is this accepted as sufficiently covered?]

**On test data:** we understand the scenarios in your plan describe what needs to be seeded, not literal test data values. [Michelle: fill in — who's doing data prep and by when, per the jam's decision.]

Happy to walk through any of this in more detail if useful — let us know if a call works better than email for the final sign-off.

Best,
Michelle

---

## Notes before sending

- Do not send this until the jam has actually happened — every bracketed section depends on a real decision from that session.
- If the jam surfaces that Compass needs more time on any of the 7 decisions, say so plainly with a specific date, rather than implying everything is resolved when it isn't.
- Consider whether this should go out before or shortly after your 28 Aug internal deadline (open-items.md #60) — Huiting doesn't need to wait for your internal deadline to hear back, and an earlier reply reduces the risk of another "please revert by [date]" escalation from her side.
