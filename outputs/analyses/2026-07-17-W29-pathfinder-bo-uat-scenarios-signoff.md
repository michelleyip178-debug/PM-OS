# Pathfinder UAT Scenarios — For Business Owner Review & Sign-Off

**For:** Chris & XZ (Business Owners)

**From:** Michelle Yip (Pathfinder PM)

**Purpose:** Before UAT execution starts, confirm these scenarios actually reflect what "working correctly" means to you. This is a review-and-approve step, not a test itself — you're checking the *questions* are right before anyone spends time answering them.

**Covers:** Everything shipped so far in Login + Opportunities Explore (Sprints 1–5)

---

## How to use this document

For each journey below:

1. Read the **plain-language description** of what it covers
2. Read each scenario as "if I do X, I expect Y"
3. Mark it:
   - ✅ **Agree** — this is what should happen, test it as written
   - ✏️ **Needs change** — the expected behavior is wrong or incomplete; note what should happen instead
   - ❓ **Not sure** — flag it, we'll clarify together before UAT starts
4. Sign off at the bottom of each journey once every scenario in it is ✅ or resolved

You don't need any technical knowledge to review this. If a scenario doesn't make sense as written, or doesn't match what you'd expect an officer to experience, say so — that's exactly what this step is for.

---

## Journey 1: Finding jobs by browsing

**In plain terms:** An officer logs in and lands on a page of open opportunities. This checks that page shows the right things, in the right order, and handles the "nothing to show" case gracefully.

| # | If I... | I expect... | Agree / Change / Not sure |
|---|---|---|---|
| 1.1 | Log in and land on the opportunities page | I see a grid of job cards, newest postings first | ☐ |
| 1.2 | Look at any single card | I can see the job title, which agency it's from, when it was posted, and what type of opportunity it is | ☐ |
| 1.3 | Look at the full list | Nothing shows if its application deadline has already passed | ☐ |
| 1.4 | There are more than 15 opportunities available | I can page forward/back, and see which page I'm on | ☐ |
| 1.5 | There are 15 or fewer opportunities total | I don't see paging controls at all — no reason to page through one screen's worth | ☐ |
| 1.6 | There are no open opportunities right now | I see a clear message telling me that, not a blank or broken page | ☐ |

**Journey 1 sign-off:** ☐ Approved as-is · ☐ Approved with changes noted above · ☐ Needs follow-up discussion

---

## Journey 2: Narrowing down to what I care about

**In plain terms:** An officer only wants to see certain kinds of opportunities (e.g. only Gigs, or only short-term postings). This checks filtering works and is easy to undo.

| # | If I... | I expect... | Agree / Change / Not sure |
|---|---|---|---|
| 2.1 | Choose to only see one type (e.g. STIP) | I only see STIP opportunities | ☐ |
| 2.2 | Choose more than one type at once (e.g. STIP and Gig) | I see both types together, nothing else | ☐ |
| 2.3 | Have a filter on and page to the next screen | My filter stays on — I don't have to reapply it | ☐ |
| 2.4 | Filter to a combination that matches nothing | I see the same "nothing to show" message as Journey 1.6 | ☐ |
| 2.5 | Have filters on and want to see everything again | One "Clear all" action removes every filter at once | ☐ |
| 2.6 | Have no filters on | I don't see a "Clear all" option cluttering the screen | ☐ |

**Journey 2 sign-off:** ☐ Approved as-is · ☐ Approved with changes noted above · ☐ Needs follow-up discussion

---

## Journey 3: Deciding whether to apply

**In plain terms:** An officer clicks into a specific opportunity to learn more. This checks the detail page gives enough information to decide, and handles broken/expired links sensibly.

| # | If I... | I expect... | Agree / Change / Not sure |
|---|---|---|---|
| 3.1 | Click into an opportunity | I see the full title, agency, posting date, closing date, type, description, what I'd develop, and the commitment involved | ☐ |
| 3.2 | Am on a detail page and want to go back | There's a clear, working link back to the full list | ☐ |
| 3.3 | Save or share a link to a specific opportunity, then come back later | It takes me straight to that same opportunity | ☐ |
| 3.4 | Click a link to an opportunity that doesn't exist (broken/fake link) | I see a clear "not found" message with a way back to the listing — not an error page | ☐ |
| 3.5 | Click a link to an opportunity that's since closed | I see "this opportunity is no longer available," with a way back to the listing | ☐ |
| 3.6 | View something closing within a week | I see a clear "closing soon" flag, both on the card and the detail page | ☐ |
| 3.7 | View something with no set closing date | I do NOT see a "closing soon" flag — it shouldn't feel urgent if it isn't | ☐ |

**Journey 3 sign-off:** ☐ Approved as-is · ☐ Approved with changes noted above · ☐ Needs follow-up discussion

---

## Journey 4: Applying to an outside opportunity (Careers@Gov)

**In plain terms:** Some jobs come from Careers@Gov, a different government site. This checks that officers get a trustworthy handoff to that site — since CareerCompass can't be the final word for those postings.

| # | If I... | I expect... | Agree / Change / Not sure |
|---|---|---|---|
| 4.1 | View a Careers@Gov job's details in CareerCompass | I see the title, agency, description, duration, and any other available details — laid out the same as any other job | ☐ |
| 4.2 | Look for full responsibilities/requirements on a C@G job | I'm told to click through to Careers@Gov for that detail — it's not duplicated here | ☐ |
| 4.3 | Click "Apply via Careers@Gov" | A new tab opens straight to that specific job on the real Careers@Gov site — not their homepage | ☐ |
| 4.4 | Click through, but the job's since been taken down on Careers@Gov's end | That's handled by Careers@Gov's own site — I don't expect CareerCompass to show its own error for this | ☐ |
| 4.5 | View a Careers@Gov job's detail page | I only see one way to apply (via Careers@Gov) — no confusing second "Apply" button | ☐ |

**Journey 4 sign-off:** ☐ Approved as-is · ☐ Approved with changes noted above · ☐ Needs follow-up discussion

---

## Journey 5: Applying to a CareerCompass-native opportunity

**In plain terms:** For Internal Jobs, STIPs, and Gigs that live directly in CareerCompass, this checks the actual "Apply" button works and fails gracefully when it can't.

| # | If I... | I expect... | Agree / Change / Not sure |
|---|---|---|---|
| 5.1 | Click "Apply" on an Internal Job, STIP, or Gig | A new tab opens with the application form for that specific job | ☐ |
| 5.2 | Apply on two different jobs | Each one opens its own correct form — never the wrong one | ☐ |
| 5.3 | Try to apply to a job with no application form set up | I see "Application form unavailable — contact the posting agency" where the Apply button would be, with no layout glitch | ☐ |
| 5.4 | Click Apply, and the form itself is down or closed | I land on the form provider's own message about that — CareerCompass doesn't need to show anything extra | ☐ |

**Journey 5 sign-off:** ☐ Approved as-is · ☐ Approved with changes noted above · ☐ Needs follow-up discussion

---

## Not yet ready for your review

These parts of the product are still being built and are **not included above** — you'll see a follow-up version once they're ready:

- Signing in with your actual work account (still using a temporary stand-in login)
- Searching by keyword
- Filtering by job category/family
- Careers@Gov jobs showing up automatically in the main list (today they're only visible if someone has a direct link)
- Restricting certain jobs to certain agencies (the rule for *how* this should look has been decided, but it's not built yet)
- The full "apply" tracking flow (notifications, confirmation emails) — this is still being scoped
- The "what do these job types mean" help page
- Agency logos on the detail page
- The specific message shown when a job's application link is broken

If you come across any of these while testing, that's expected — please don't log it as a defect yet.

---

## What happens after you sign off

Once each journey above is marked approved:
1. These scenarios move into the formal UAT tracker (Jira) for execution
2. Any "Needs change" items get resolved with the product/engineering team first, then come back to you for a final check
3. Anything marked "Not sure" gets a short conversation before it's added

**Questions or don't understand a scenario?** Flag it directly rather than guessing — a scenario that doesn't make sense to you as the business owner probably needs to be rewritten, not just tested as-is.

---

*Prepared: 2026-07-17 by Michelle Yip*
*Technical/engineering version of these scenarios (for QA reference): available on request*
*Next: BO review and sign-off before Phase 0 (UAT kickoff, 11 Aug)*
