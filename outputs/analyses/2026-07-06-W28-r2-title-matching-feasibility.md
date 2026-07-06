---
date: 2026-07-06
type: feasibility-assessment
release: R2 (scoping)
relates_to: outputs/meeting-notes/2026-07-06-W28-r2-scoping-async-discussions.md
---

# Feasibility Check: "Explore Related Opportunities" Matching

## What's the actual problem?

We want to recommend related roles based on someone's target job. Right now the plan is to match on job title text. That breaks in three ways:

1. **Bad matches get in.** Searching "dato" pulls in "data." Obviously wrong, easy to spot.
2. **Good matches get missed.** Searching "Senior Software Engineer" won't surface "Software Developer," even though they might be the same job. This one's invisible, the recommendation just never shows up.
3. **Matches look right but aren't at the right level.** Searching for "Senior Director" could pull in "Senior Manager" or "Senior Executive," because they all share the word "senior." This is the worst one, because it looks like a reasonable match. Nobody would flag it, but we'd be recommending a step down, not up.

All three come from the same root issue: **matching on words in a title doesn't tell you if two jobs are actually the same or at the same level.** Words can overlap by accident (dato/data), or two equivalent jobs can use completely different words (Senior Software Engineer/Software Developer).

## What do we already have to work with?

| What | Do we have it? | Does it fix the problem? |
|---|---|---|
| WOG taxonomy (30 job categories) | Yes, already built and approved | No. It groups jobs by department (e.g. "Engineering"), not by title. Every ICT role would count as "related" to every other ICT role, way too broad. |
| Competency data per role | Being built | Partial. Tells us what skills a *person* has, not whether two *job titles* are equivalent. |
| CIE (the system that infers competencies) | Confirmed: every role will get competencies inferred, including C@G jobs (which don't have their own competency data today) | Potentially yes, for the "is this the same kind of job" question. No info yet on when it's ready or how accurate it is. |
| Job grade data | **Only for officers, not for opportunities.** POCDEX gives us job grade for the *person* (via their HR record). Opportunity postings don't carry a grade field, and grade filters for opportunities were explicitly deferred, not built. There's also no confirmed link between an opportunity and a structured role profile (with its own grade) that we could pull from instead. | Not a quick fix. This is a real gap on the opportunities side, not a switch we can flip on. |

The short version: **we have decent data for "which department," we have grade data for people but not for the jobs we'd be recommending, and we have nothing yet for "which title actually means the same job."**

## Two different problems, two different fixes

It helps to split this into two separate questions, because they need different solutions:

- **"Is this the same kind of job?"** → needs title or competency matching
- **"Is this the same level?"** → needs grade data

Fixing one doesn't fix the other. A great skills-match tool can still recommend someone a level too low. A perfect grade filter can still miss equivalent jobs with different titles. We need both.

## One correction that changes the plan

I initially assumed we could just turn on POCDEX grade data to fix the "wrong level" problem cheaply. That's wrong. **POCDEX grade data tells us the level of the person, not the level of the opportunity.** Opportunity postings don't have a grade field, grade filters for opportunities were explicitly left out of scope, and there's no confirmed link between an opportunity and a role profile that would carry a grade either. So the level check isn't a quick "flip a switch" fix, it's a real gap, and it needs its own scoping before anyone commits to a timeline.

## The fix, in two phases

### Phase 1: Ship now (cheap, no blockers, but only partial)

**We can still fix the string-matching part of the level problem today, just not the full problem.**

1. Stop matching on individual words like "senior." Instead, treat full titles ("Senior Director," "Senior Manager," "Senior Executive") as whole, separate things. This alone stops the "dato/data" problem, since both come from matching partial words instead of full titles.
2. This does **not** tell us which title outranks another, it just stops us from confusing different titles that happen to share a word. Without a grade field on the opportunity side, we still can't say "Senior Director is above Senior Manager" with confidence, we can only say "these are different things."

**What this doesn't fix:** the actual ranking problem (is this role higher, lower, or the same level) and the missed-match problem (Senior Software Engineer not finding Software Developer). Both need more work, covered below.

### Phase 2: Needs scoping (two separate open questions, two different owners)

3. **Getting grade onto opportunities.** Before we can enforce "never recommend a role below someone's level," we need either a grade field added to opportunity postings, or a reliable link from opportunity to role profile (which does carry grade, per the officer/competency side of the system). This is a real scoping conversation, likely with whoever owns opportunity ingestion, not a quick technical fix. Worth noting it's not evenly hard across both source systems: I checked the C@G taxonomy mapping (`wog-taxonomy-mapping.md`), and C@G's source data only carries industry/department codes, no grade field at all. So for C@G specifically, this isn't "expose a field that already exists," it's "find out if grade exists anywhere upstream in C@G's data in the first place." That's a different, harder question than a mapping task, and it should be scoped separately from OTG.
4. **Matching equivalent jobs across different titles.** This is where competency matching (CIE) comes in, once it's ready. It's the only approach that can catch equivalent jobs when titles look nothing alike, and it also resolves the earlier open question about C@G jobs having no competency data of their own (since every role, including C@G, will get competencies inferred).
5. Before we can put a timeline on either of these, we need answers from Engineering: is CIE live, still being built, or just an idea? Is there a plan to bring grade data into opportunities, and if so, on what timeline?
6. **Even once both land, they solve different things and both are needed.** Competency matching tells us "same type of job," grade tells us "same level." A Senior Manager and a Senior Director can need nearly identical skills, so competency matching alone could still recommend someone too junior a role. Neither one replaces the other.

## Bottom line

The only genuinely quick win here is treating full titles as whole units instead of matching on words like "senior." That ships now and stops the most obvious bad matches (dato/data).

The two harder problems, ranking roles by level and catching equivalent jobs across different titles, both need more groundwork before they can be sized: level-ranking needs grade data brought into opportunities (which doesn't exist today), and equivalent-job matching needs a straight answer on where CIE actually stands. Neither is a quick fix, and we shouldn't present them as one.

## What we still don't know

We don't have visibility into how CIE actually works, how accurate its inferred competencies will be, when they'll be ready for every role, how many different title variants exist for the same job across agencies, or whether there's already a plan to bring grade data into opportunity postings. We also don't know if C@G captures grade anywhere upstream, even outside what's currently mapped into OTEP, that's a question for whoever owns the C@G integration, not something we can answer from what's documented here. Any of these could change the timeline. This is a framing of the problem and a recommended path, not a final estimate.

## Decision (Adrian, 6 Jul)

Ship the short-term fix (full-title matching) and stop there. Adrian decided not to pursue grade-based ranking or CIE cross-title matching, because different agencies inflate or deflate designations and grades, which undermines both approaches regardless of how much engineering effort goes in. His framing: "we probably can survive on #1 for a long time." This isn't a technical infeasibility finding, it's a call that the payoff doesn't justify the investment given how unreliable the underlying source data is across agencies.
