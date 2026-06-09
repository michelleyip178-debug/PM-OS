# BO Meeting: OTG Ingestion — Questions & Decision Brief
**Purpose:** Align on 4 business rule decisions that determine OTEP launch catalogue size  

**Context:** 473 of 633 open gigs (75%) currently blocked from ingestion. With BO decisions + agency remediation, we can reach 320–480+ gigs.  

**Prepared:** 2026-06-09

---

## Bottom line up front

Under current rules, OTEP launches with 160 gigs. That's likely too thin for a meaningful launch. Four decisions from you unlock 2–3x that number. Agency remediation does the rest.

---

## Decision 1: Time commitment requirement for programme types
**Gigs affected: 109**

These gig types are in the OTG system but we haven't confirmed whether they require a Time Commitment field:

- agilePSD (29 gigs — all from PSD, zero stale, fully dated)
- KidSTART (6 gigs)
- OCMO 2026 (unknown count)
- Overseas Posting (unknown count)
- Innofest / INNOFEST (tag duplication noted)

**Question:** Are these programme types exempt from the Time Commitment requirement (like Jobs and Secondments), or do they need TC (like Gigs)?

**Options:**
- A (Recommended): Treat like Jobs/Secondments — TC not required. Unlocks up to 80 more gigs.
- B: Treat like Gigs — TC required. Keeps 109 blocked until agencies add the field.
- C: Decide programme-by-programme (adds complexity, slower to implement).

**What we need:** A clear rule we can encode in ingestion logic.

---

## Decision 2: How to handle stale gigs
**Gigs affected: 346 open gigs past their end date (55% of all open gigs)**

- 255 of these also have zero applicants
- Ingesting stale gigs risks eroding officer trust if they apply to a closed opportunity

**Question:** What should we do with open gigs where the end date has passed?

**Options:**
- A (Recommended): Exclude stale + zero-applicant gigs (255). Removes the lowest-quality listings, protects officer experience.
- B: Exclude all gigs past end date (346). Cleanest approach — no stale data at all.
- C: Ingest all with a visual "Closing soon / Closed" flag. Keeps volume but surfaces uncertainty.

**Follow-on question:** Who is responsible for keeping end dates current in OTG? Is there an existing process we should connect to?

---

## Decision 3: How to handle gigs with no type tag
**Gigs affected: 78**

These gigs have no `[prefix]` in their name, so we can't classify them by type. 37 of the 78 are from MSF and appear to be Jobs based on content. 19 are from Enterprise Singapore.

**Question:** Should we ingest these as "Unclassified," block them until agencies add a tag, or auto-assign a type where it's obvious?

**Options:**
- A (Recommended): Block and ask agencies to add a label. Most accurate; avoids misclassification.
- B: Ingest as "Unclassified." Immediate unlock but poor officer UX (no type filter, no context).
- C: Auto-assign `[Job]` to gigs that pattern-match job descriptions. Unlocks ~60 gigs with some risk of misclassification.

**Follow-on question:** Can OTG enforce a type label at the point of posting? This would prevent the issue from recurring after launch.

---

## Decision 4: Are Start Date and Function hard requirements?
**Gigs affected: 462 (288 missing start date, 174 missing function — many overlap)**

These are currently required fields in our ingestion schema. Removing or relaxing them is the single biggest lever for catalogue size.

**Start Date (288 gigs missing — mostly Secondments at 77%):**

**Question:** Is a start date meaningful for all opportunity types? Some secondments and standing programmes may be evergreen, with no fixed start.

**Options:**
- A (Recommended): Keep as hard requirement. Agencies must provide it; OTEP shows "Start: TBC" only if we explicitly handle it.
- B: Make start date optional for Jobs and Secondments only. Unlocks a large portion of the Secondment backlog.
- C: Remove start date as a required field entirely. Maximum unlock, but reduces listing quality.

**Function (174 gigs missing):**

**Question:** Is "Function" (e.g. Policy, Operations, HR) required for all types, or only where it's meaningful?

**Options:**
- A (Recommended): Keep as hard requirement for all types.
- B: Make optional for Gigs, STIPs, and short-term opportunities — these often don't map neatly to a function.
- C: Remove as a required field. Shows when available, hidden when not.

---

## Impact summary

| Scenario | Estimated gigs on OTEP |
|---|---|
| Current rules, no changes | 160 |
| All 4 recommended decisions | 320–380 |
| Recommended + Enterprise Singapore remediates | 480+ |
| All rules relaxed (not recommended) | ~600 |

---

## Open questions beyond the 4 decisions

These don't need a decision today but are worth flagging:

1. **Tag taxonomy ownership:** Who publishes and maintains the canonical list of valid type tags? Without a named owner, new unrecognised variants will accumulate after launch. Suggested: OTG Ops team or a named agency admin lead.

2. **Misused tags:** `[Female Only]` is being used as a type tag but it's an eligibility filter. `[For Grade 12/11]` is a grade filter misused as a type. These need either canonical reassignment or a separate field in OTG.

3. **3 test entries with Open status:** These will attempt ingestion under current logic. Confirm how test entries should be flagged in OTG so we can exclude them reliably.

4. **7 gigs with no named owner in OTG:** No individual is accountable for remediation. Do we need a fallback (agency-level owner) or can these be excluded?

---

## Proposed 60-minute agenda

| Time | Topic |
|---|---|
| 0–10 min | Situation overview — current state, what's blocked and why |
| 10–25 min | Decision 1: TC for programme types |
| 25–35 min | Decision 2: Stale gig policy |
| 35–45 min | Decisions 3 & 4: Unlabelled gigs + required fields |
| 45–60 min | Remediation plan — agency outreach, timeline, go-live threshold |

---

## After this meeting

Once decisions are confirmed:

1. Finalise ingestion rules and update the ingestion logic
2. Distribute per-agency remediation report (Excel tabs ready)
3. Target remediation blitz with top 3 agencies: Enterprise Singapore (178 blocked), MTI (42), MSF (40)
4. Set go-live date once catalogue reaches threshold (recommended: 350+ gigs, 4+ types)
5. Set up automated daily ingestion post-remediation
