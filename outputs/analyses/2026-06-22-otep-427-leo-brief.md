# OTEP-427 Brief for Léo
*Michelle → Léo | 2026-06-22*

---

## What I need from you

OTEP-192 implemented the agreed ingestion rules. OTEP-427 is the validation spike on top of it -- I need you to review your own implementation against the decision log and tell me if anything doesn't match or wasn't covered.

**Effort:** ~2-3 hours your side. Need this by **Thu 25 Jun EOD** for S5 grooming.

---

## Rule-by-rule validation (AC 1)

Go through each agreed rule below and confirm whether OTEP-192 implements it correctly. Flag any gaps.

| Rule | Decision | Implemented correctly? |
|---|---|---|
| I-008 | Hard-skip any record with a missing or unresolvable required mapped field | |
| I-009 | SJR excluded from MVP listing and ingestion | |
| I-011 | MVP ingests open opportunities only; all expired excluded | |
| I-012 | MVP ring-fencing = agency-level only | |
| I-013 | TimeCommitment required for STIPs and Gigs only | |
| I-014 | Function field is optional / display-only (all types) | |
| I-015 | StartDate optional for Jobs (Job + Secondment types) | |

For each rule: yes / no / partial -- and if partial or no, what's the gap?

---

## Edge cases from live OTG data (AC 2)

During implementation of OTEP-192, what edge cases did you hit from the actual OTG data that the rules didn't cleanly handle? I need at least 5 documented with a defined handling rule (hard-skip, optional field, error log, or transform).

Prompts if nothing comes to mind:
- Records with no type prefix or an unrecognized type
- Missing or malformed FormSG URL
- Closing date in the past
- Competency field missing vs. null vs. unexpected format
- No BusinessUnit field with all other fields present

---

## One open question for you: FormSG URL validation

If the ingestion job checks whether a FormSG URL resolves to a real form (live HTTP call per record), what's the failure mode if FormSG is unreachable? Does the job fail, skip the record, or retry? If this isn't handled, flag it.

---

## Not in scope for you

- BusinessUnit optionality (I-019) -- I'm deciding this with Pow Hwee
- Endpoint design review -- Hao is handling AC 4
