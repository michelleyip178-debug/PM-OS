# OTEP-427 Brief for Léo
*Michelle → Léo | 2026-06-22*

---

## What I want the officer to experience

When an officer opens the platform, every opportunity they see should be:

- **Actionable** -- they can read what it is, understand what's expected, and apply. No dead ends, no missing information that stops them from taking the next step.
- **Current** -- only open opportunities. Nothing that's already closed or expired.
- **Clear on type** -- they know whether they're looking at a Gig, STIP, Job, or SJR. Unlabelled or unrecognized opportunities shouldn't appear.
- **Complete enough to apply** -- if the FormSG link is broken or missing, there's no way to apply. That opportunity shouldn't show up.

If a record from OTG can't meet this bar, it should be excluded from the platform entirely -- not shown in a broken or incomplete state.

---

## What that means for ingestion

For OTEP-192, this translates to dropping any record that would result in a bad officer experience:

**Drop the record entirely if:**
- Opportunity type is unrecognized (officer wouldn't know what they're looking at)
- Closing date is in the past (opportunity is no longer open)
- FormSG URL is missing, malformed, or leads to a non-existent form (officer can't apply)
- Any required field needed to understand or apply for the opportunity is missing or unresolvable

**Ingest with the field absent if:**
- Function field is missing (nice to have, doesn't block understanding or application)
- StartDate is missing for Jobs and Secondments (not always known upfront)
- Job Function is missing (ingest the record, but log it -- this affects ringfencing later)

---

## My ask

Need your input by **Wed 24 Jun EOD** -- S5 planning is Thursday.

I want you to assess whether these rules correctly capture the officer experience I described. Specifically:

1. **Do the rules make sense technically?** Anything that won't work, is ambiguous, or will cause problems in the data?
2. **What edge cases in the OTG data aren't covered?** Based on what you've seen in the data, are there situations where a record would slip through that shouldn't -- or get dropped that should be kept?
3. **FormSG URL validation** -- if we validate live that a URL resolves to a real form, what happens if FormSG is unreachable during ingestion? Does the job fail, skip the record, or retry? Worth defining.

I need at least 5 edge cases documented with a handling rule each (drop, ingest with field absent, log, or transform).

---

## Not in scope for you

- Job Function optionality -- already decided (optional, log when absent)
- Endpoint design review -- Pow Hwee and Hao are handling that separately
