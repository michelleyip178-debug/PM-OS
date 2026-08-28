# Brief: POCDEX Day 2 Test Case Scoping — Officer-Impact Case for Adrian

**The ask:** "Here's what officers will actually experience if these 17 gaps stay untested — 10 ready to test now, 7 need a BO decision, and 2 items need a decision from POCDEX/Compass before I can close this out by the 28th."

---

## What's at stake for officers, in plain terms

This extends the Day 2 discovery Adrian assigned 13-14 Aug. The original design doc found Compass captures an officer's profile once, at first login, and never re-checks it — so any real-world change to that officer's job just sits there, wrong, until someone manually catches it.

**Three ways that shows up for a real officer:**

1. **Someone sees data that isn't theirs, or their data is seen by someone else.** The worst-case outcome — not a bug report, a privacy incident. 3 of the 17 proposed cases test this directly (email reuse, shared email across two people, split identity across systems).
2. **An officer is let into Compass when they shouldn't be, or blocked when they shouldn't be.** Access-boundary failures — during NPL (no-pay leave), or after a hire is rescinded. 3 cases.
3. **An officer's own profile just shows the wrong thing** — old job title, wrong grade, stale agency after a transfer or secondment. The largest bucket by volume: in the full 118-case dataset, this single pattern (job info changing without triggering an update) accounts for 12 cases with zero current test coverage — the biggest untested gap in the whole set.

At pilot scale (6 agencies, ~5,270 officers), 90 officers already sit in the highest-risk category — duplicate identities or missing email — and a real 14-day measurement showed **3.45% of records change in any given 2-week window**. This isn't a rare edge case; it's a routine, ongoing operational reality once Compass is live.

---

## What's blocking the 28 Aug close

| Blocker | Officer impact if unresolved | Owner | Next step |
|---|---|---|---|
| CUS Posting: unclear if AGD/MTI are onboarded to POCDEX | Officers under this shared employment scheme could see a blank or broken profile | POCDEX/HR | Route directly, not a BO decision |
| "Last modified date" business rule undefined (RAID R11) | Determines whether Compass can reliably detect a change happened at all — the mechanism behind fixing Group 3 above | Compass team | Per their Thursday commitment (25 Aug timeline sync) — see appendix for the mechanism detail, not needed to action the test cases themselves |

If unresolved by the 28th, the handoff to Imelda is partial, not complete — flag now, don't let it surface as a missed deadline.

One thing confirmed since the 14 Aug discovery: the missing "last modified date" *field* is being added to the Data Sharing Form. That closes the data-contract gap; the separate business-rule question (how Compass uses it) is still open.

---

## The 17 test cases, grouped by what the officer experiences

**Group 1 — Wrong-person data exposure (3 cases, all need a BO decision):**
- **ID-01**, new hire logs in and sees a departed officer's data (email reuse)
- **ID-02**, two officers share one login email — wrong-person data or unclear block
- **ID-03**, one officer, two emails, two different-looking profiles

**Group 2 — Let in or blocked out incorrectly (3 cases, 2 need a BO decision):**
- **ID-06**, NPL access cutoff timing — needs BO decision on grace period
- **ID-07**, NPL status disagrees across two systems — needs BO decision on precedence
- **COM-08**, hire rescinded right at first login — needs BO decision on account state — *(ready-to-test companion: ID-08, a legitimate officer's first login, proving the positive case UAT currently never tests)*

**Group 3 — Own profile shows wrong job details (8 cases, 1 needs routing to POCDEX/HR, 7 ready to test):**
- **COM-07**, CUS Posting — route to POCDEX/HR (see blockers above)
- Ready to test: **COM-01** (job info change, no Position ID change — the largest coverage gap), **COM-02/03** (secondment within/cross system), **COM-04/05** (transfer cross/within), **COM-06** (Position ID change), **COM-09** (email + name change)

**Group 4 — Identity changes that shouldn't disrupt the officer at all (2 cases, both ready to test):**
- **ID-04** (FIN→NRIC), **ID-05** (ID+HRID together)

Full detail — steps, test data, pass conditions — for all 17: [2026-08-26-W35-proposed-pocdex-test-cases-for-bos.md](2026-08-26-W35-proposed-pocdex-test-cases-for-bos.md)

---

## Suggested framing for Adrian

- Lead with officer impact, not case count: "3 of these are privacy-incident-severity, 10 are the routine wrong-data-on-screen problem officers will hit constantly."
- Name the two blockers with owner and next step (table above) — don't leave them open-ended.
- The 7 BO decisions share one root question — "which record/system wins when they disagree, and what happens to the officer's access" — bundle into one BO conversation, not seven.

---

## Also worth a mention if there's time

Group 4 of the full analysis (backdated termination rescind cases) surfaced that Compass's own assumption — "officer can log in until their last day" — is itself unverified. If wrong, several currently-low-priority cases would jump straight into Group 1/2 territory (identity/access risk). Not urgent; a one-line flag to engineering, not for Adrian today.

---

## Appendix: engineering/architecture context (not needed for the Adrian conversation)

- **On "last modified date":** the mechanism debate is whether Compass should use a timestamp to selectively re-pull only changed officer records, versus the daily full-profile-diff approach your own 14 Aug doc already recommended as the preferred first automation increment (Option 2) — which doesn't need timestamp semantics resolved at all. Worth knowing this exists, but it's a design trade-off for Compass/engineering to resolve, not something blocking your 17 test cases.
- **On the existing UAT set's coverage gap:** it tests whether already-loaded profile data displays correctly, never whether a change *event* was correctly detected and landed in the first place — that's the backend root of most of Group 3 above.
- Full backend analysis: [2026-08-26-W35-pocdex-pm-analysis-all-tabs.md](2026-08-26-W35-pocdex-pm-analysis-all-tabs.md)

---

**Don't send Adrian:** the full 118-row analysis — that's your evidence trail, reference only if asked.

**Reference:** [17-case detail](2026-08-26-W35-proposed-pocdex-test-cases-for-bos.md) · [full analysis](2026-08-26-W35-pocdex-pm-analysis-all-tabs.md) · [open-items.md #60](../../../PM-skills-ALL-1/00-hub/open-items.md) · [RAID R11](2026-08-25-W35-raid-log.md) · [original 14 Aug discovery](2026-08-14-W33-pocdex-data-lifecycle-operational-design.md)
