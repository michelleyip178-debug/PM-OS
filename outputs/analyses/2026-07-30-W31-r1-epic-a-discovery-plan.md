# R1 Discovery Plan — Opportunity Creation & Posting Types

**Owner:** Michelle Yip

**Date:** 2026-07-30

**Scope:** Letting agencies create postings directly in CareerCompass (instead of the current system), covering six posting types — Internal Job, Secondment, STIP, Gig, Internal Rotation, SJR

---

## Why This Exists

Mark approved R1's core scope at the 9 July SteerCo. Since then, the list of posting types agencies can create directly in CareerCompass grew from four to six — Internal Rotation and SJR were added. That's a good direction (it solves more of the "where do I even post this" problem officers and agencies deal with today), but it leaves five open questions that need answers before this work can go into detailed planning and building. This plan lists those questions, who can answer them, and what "ready to build" looks like.

**Not in scope here:** the separate Competency Management discovery effort already underway with Li Ting Kway and Imelda Mo. That's a bigger, longer-running effort on competency governance and data quality across the whole system. This plan only touches competency data where it directly affects posting creation (see Q2 below).

---

## The Five Open Questions

### Q1 — What exactly does each of the six posting types need in its creation form?

Internal Job, Secondment, STIP, and Gig already have requirements written up for their creation forms. Internal Rotation and SJR don't yet.

- Can all six share one creation form with type-specific fields, or do some need their own layout?
- Do agencies create Internal Rotations or SJRs anywhere today (even manually), or would this be the first time either gets a formal creation process?

**Who can answer this:** Adrian (confirms scope), Amber (design implications)

### Q2 — How do we tell "Internal Rotation" apart from "Job" or "Secondment" when they're created?

Today, the system that reads in postings from the existing platform (OTG) uses text-matching rules to figure out what type each one is — for example, looking for the word "JOB" or "SECONDMENT" in the title. Some titles could match more than one rule, and there's no documented tie-breaker for which one wins. This was a minor issue when it only affected how already-existing postings get displayed. It becomes a real problem now that people will be actively creating Internal Rotation, Job, and Secondment postings directly in CareerCompass — the system needs a clear way to tell them apart at the moment of creation, not guess after the fact.

One option under consideration: adding a simple "long-term stint vs. short-term/gig" field, since Job, Secondment, Internal Rotation, and SJR are all long-term, while STIP and Gig are shorter-term. That would help split those two groups apart, but it wouldn't fully solve telling Internal Rotation, Job, and Secondment apart from each other, since all three are long-term.

**Who can answer this:** Jobelle (knows today's actual judgment calls), Léo (what's feasible to build)

### Q3 — What does "build it now, but don't launch until 2028" actually mean for SJR?

The plan is to build SJR creation now, with the same effort as the other five types, but keep it switched off until the 2028 cycle. This is the first time this project has needed a "build now, launch later" feature, and right now nothing — not the requirements doc, not the technical plan, not the testing plan — accounts for it.

- Can the current system cleanly support a feature that's fully built but turned off, or does that need its own technical work first?
- Does the officer-facing "apply for this posting" side for SJR get built now too, or is that left until closer to 2028?
- Does "ready" mean building against what we know about SJR today, or do we need to guess at what might be different by 2028?

**Who can answer this:** Pow Hwee and Engineering

### Q4 — Who approves a new posting before it goes live?

Right now, when an agency creates a posting through the existing system, there's presumably some approval step (an HR sign-off, for example). Nobody has confirmed what that looks like for postings created directly in CareerCompass, especially for Internal Rotation and SJR.

- Is there one approval step today, or does it depend on the posting type?
- Should the person creating a posting in CareerCompass be able to publish it immediately, or does it need a review step first?

**Who can answer this:** Pow Hwee (current process), Adrian (policy call)

### Q5 — Does agency staff login already exist for this?

This is the most concrete of the five — it's already flagged as a must-answer item, but nobody has confirmed whether the login process for agency staff who'll be creating postings actually exists yet, or needs to be built from scratch.

**Who can answer this:** Pow Hwee, Fabian

---

## How to Run This

Each question above has a specific person who can answer it — this isn't a broad research exercise, it's a short list of direct conversations.

| # | Question | Who | Format | When |
|---|---|---|---|---|
| Q1 | Creation form requirements | Adrian, Amber | 30-min working session | This week |
| Q2 | Telling posting types apart | Jobelle, Léo | 30-min working session | This week |
| Q3 | SJR build-now-launch-later plan | Pow Hwee, Engineering | 45-min technical discussion | This week |
| Q4 | Approval workflow | Pow Hwee, Adrian | 30-min working session | Next week |
| Q5 | Agency staff login status | Pow Hwee, Fabian | Direct message, not a meeting | This week |

**Q2, Q3, and Q5 are the true blockers.** Nothing about this work can move into detailed planning until those three are answered. Q1 and Q4 matter but don't block the same way, so they can run a little later.

---

## What "Ready to Build" Looks Like

This work is ready to move into detailed planning once:

1. All six posting types have written, confirmed creation requirements.
2. There's a clear rule for telling Internal Rotation, Job, and Secondment apart at creation time.
3. The SJR build-now/launch-later approach is written down: what gets built, what stays switched off, and whether the "apply" side is included.
4. Someone has formally signed off on adding SJR to this release — it used to be explicitly excluded, so the change should be documented, not just assumed.
5. There's a clear answer on whether new postings need an approval step before going live.
6. Agency staff login is confirmed to exist, or has an owner and a date to be built.

Skipping any of these means the work moves forward with real gaps still open — which tends to surface later as rework, not time saved.

---

## Next Steps

1. Send the three direct asks (Q2, Q3, Q5) this week.
2. Schedule the two working sessions (Q1, Q4) for next week.
3. Once all five questions are answered, update the requirements doc to reflect the six-type creation requirements, the SJR approach, the classification rule, and the approval workflow.
4. Get the SJR addition formally recorded as a decision.
