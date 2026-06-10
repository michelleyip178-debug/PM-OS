---
date: 2026-06-10
topic: OTG Ingestion — Product Discovery
status: Draft — for Michelle's review
owner: Michelle Yip
---

# OTG Ingestion — Product Discovery

## TL;DR

The pipeline works. The data doesn't. 75% of OTG's 633 open gigs will hard-skip on first run, leaving CareerCompass launching with ~160 opportunities. Secondment searches will return almost nothing — 89% of secondments are blocked.

The fix isn't engineering. It's two PM decisions with Pow Hwee (are start date and function required fields?) that unlock ~300 more gigs without any agency lifting a finger. After that, one remediation session with Enterprise Singapore unlocks another 178.

**Three things to act on now:**

1. **Today** — Confirm start date + function scope with Pow Hwee. Update OTEP-192 ACs.
2. **This week** — BO meeting to confirm minimum viable catalogue threshold and stale gig policy.
3. **After OTEP-192 closes** — Send per-agency skip reports. Start with Enterprise Singapore.

With decisions made and top agencies remediated, launch catalogue goes from 160 to 350–500+.

---

## What this document is

A structured discovery brief for the OTG ingestion problem. It synthesises everything we know: the technical pipeline shape, the data reality, the outstanding decisions, and the user impact. The goal is to get from "ingestion works technically" to "ingestion is trustworthy enough to launch on."

---

## 1. Problem Statement

CareerCompass is built on a promise: officers can discover all their development opportunities in one place. The OTG ingestion pipeline is what makes that promise real for 160,000 officers on the platform today.

The current state: **the pipeline exists, but 75% of OTG's open gigs won't pass it.** If we launch with current rules unchanged, OTEP surfaces 160 opportunities against a source dataset of 633. Officers searching for secondments will see almost nothing — 89% of secondments are blocked. Some filter views will return single digits.

This is not a technical failure. The pipeline is doing exactly what we designed it to do: apply clean-data rules strictly. The problem is that the rules were set before we ran the pipeline against real data. Now we have the data, and it changes the picture.

Three things need to happen before Sprint 5:

1. Resolve the field scope decisions that directly control catalogue size
2. Align with BOs on acceptable launch threshold and stale-gig policy
3. Deliver an agency remediation plan so the blocked 75% can be unlocked post-launch

---

## 2. What We Know (Confirmed Decisions)

These are settled. Don't re-open them.

| Decision | Detail | Date |
|---|---|---|
| Ingestion method | Excel file import (not API). OTG doesn't expose an API. | 2026-05-14 |
| Sync cadence | One-time port only, no ongoing automated sync. Pilot agencies migrate to Compass directly. | 2026-05-29 |
| SJRs excluded | SJRs are not ingested in MVP — no apply flow, no card, no noise. | 2026-05-21 |
| Hard-skip rule | Any record with a missing or unresolvable OTEP-mapped field is skipped in full. No partial imports. | 2026-06-08 |
| Unrecognised type prefixes | Hard-skip pending DevOps/DT fix at source. OTEP doesn't guess or normalise. | 2026-06-04 |
| `formsg_url` required | If `formsg_url` is missing, there's no apply action — no point ingesting. Hard skip. | 2026-06-08 |
| Nil closing date | `"00/01/1900"` = evergreen = valid. Maps to `nil` in DB. Listing rule handles visibility. | 2026-05-29 |
| Opportunity lifecycle | Visibility = `closing_date > today OR closing_date IS NULL`. Date-driven, not manual. | 2026-05-13 |
| Ingestion rules revisit | Current rules are working rules for S4. Structured review of what's being skipped should happen in S5/6. | 2026-06-10 |
| OTEP-130 removed from S4 | FormSG webhook moved back to backlog — not a must-have for MVP; tracking is an R1 concern. | 2026-06-10 |

---

## 3. The Data Reality

Source: OTG Oppr.xlsx, 633 open gigs as at 2026-06-09.

### Headline numbers

| Metric | Count |
|---|---|
| Total open gigs in OTG | 633 |
| Passing ingestion under current rules | **160 (25%)** |
| Blocked — will hard-skip | **473 (75%)** |
| Open gigs with a past closing date | 346 |
| Open gigs with zero applicants | 447 |
| Unclassifiable (no type tag) | 78 |

### What's blocking the 473

| Field missing | Gigs affected | Currently required? |
|---|---|---|
| Start date (`GigStart`) | 288 | TBD — highest-leverage unresolved question |
| Function | 174 | TBD — mostly Secondments |
| Type tag (missing/unrecognised) | 163 | Yes — hard skip (decision 2026-06-04) |
| Business unit | 47 | TBD |
| End date | 51 | Partial — nil is valid |
| Agency (unresolvable) | 27 | Yes — hard skip |
| Time commitment | 5 | TBD |

Many gigs fail on more than one field — counts overlap. Net blocked: 473.

### Blocked by type

| Type | Open gigs | Blocked | % blocked | Note |
|---|---|---|---|---|
| Secondment | 259 | 230 | 89% | Largest type in OTG; mostly blocked by missing start date + function |
| Job | 129 | 87 | 67% | |
| No tag | 78 | 78 | 100% | Permanently blocked until agencies add a recognised prefix |
| Other (TBC) | 56 | 35 | 63% | |
| Gig | 36 | 20 | 56% | |
| STIP | 7 | 5 | 71% | |
| agilePSD | 29 | 5 | 17% | All from PSD — low-hanging fruit |
| SJR | 39 | 13 | Excluded by design | |

### Top blocked agencies

| Agency | Blocked gigs |
|---|---|
| Enterprise Singapore | 178 (38% of all blocked) |
| MTI | 42 |
| MSF | 40 |
| MDDI | 17 |
| NLB | 20 |
| EDB | 18 |
| NCSS | 18 |
| WSG | 16 |

One session with Enterprise Singapore unlocks more than a third of all blocked content.

### Catalogue scenarios at launch

| Scenario | Estimated gigs on OTEP |
|---|---|
| Current rules, no changes | ~160 |
| Start date optional for Secondments/Jobs + function optional | ~350–400 |
| Above + Enterprise Singapore remediates | ~500+ |
| All rules relaxed (not recommended — data quality too low) | ~600 |

The 350–400 range is achievable through field scope decisions alone, before any agency does anything.

---

## 4. Open Decisions (Blocking Sprint 5 Planning)

These are unresolved. Each one has a direct impact on catalogue size or story ACs. They need owners and deadlines.

### Decision A: Is start date (`GigStart`) required or optional?

**Impact:** 288 gigs — the single biggest lever.

Secondments are standing roles. A start date may genuinely not exist for them. Gigs and STIPs are time-bound — the date is material to the officer's decision.

| Option | Catalogue impact | Recommendation |
|---|---|---|
| Required for all types | 288 gigs hard-skip | Not recommended — blanket rule hits standing roles unfairly |
| Optional for Secondments + Jobs only | Most of 288 pass | Recommended — matches role semantics |
| Remove as required field entirely | Maximum unlock | Not recommended — reduces listing quality for time-bound roles |

**Owner:** Pow Hwee + Michelle

**Needed by:** Before OTEP-192 ACs are finalised

---

### Decision B: Is function required or display-only?

**Impact:** 174 gigs, heavily overlapping with Secondments.

Function drives the filter (OTEP-86). If required, 174 gigs hard-skip but filter accuracy is preserved. If optional, those gigs appear in unfiltered browsing but won't show in function-filtered views.

| Option | Catalogue impact | Recommendation |
|---|---|---|
| Required for all types | 174 gigs hard-skip | Not recommended |
| Optional / display-only | 174 gigs pass, unfiltered only | Recommended — a gig without a function is still a valid opportunity |

**Design implication for Amber:** If function is optional, the listing card needs a graceful null state. OTEP-86's filter won't surface function-less gigs in that bucket — expected, but the empty filter result state needs a design.

**Owner:** Pow Hwee + Michelle

**Needed by:** Before OTEP-192 ACs are finalised

---

### Decision C: Are competencies + time commitment required or optional?

**Impact:** Affects OTEP-87 (detail page competency section) and Léo's transform logic.

If required: every ingested record has competency data. Amber designs for a populated competency section. If optional: records can be null, Amber designs both states.

**Open item #41** in open-items.md: Pow Hwee to schedule meeting with core team. Output needed: which competency fields are required at ingestion, and whether any missing competency data triggers a hard skip.

**Owner:** Pow Hwee (to schedule), Michelle (to chase)

**Needed by:** Before S4/S5 OTEP-87 grooming

---

### Decision D: What is the stale gig policy?

**Impact:** 346 open gigs with a past closing date (55% of all open gigs); 255 of those have zero applicants.

The existing lifecycle rule (`closing_date > today OR closing_date IS NULL`) already hides stale gigs from officers — so this is about DB hygiene, not officer experience.

| Option | Outcome | Recommendation |
|---|---|---|
| Rely on lifecycle rule (current) | Stale gigs ingest, sit in DB, never visible to officers | Recommended for MVP — it already works |
| Pipeline exclusion (stale + zero applicants) | 255 fewer records; cleaner audit trail | Add in S5/6 review |
| Pipeline exclusion (all past closing date) | 346 fewer records; cleanest DB | Risk: excludes evergreen roles where date was a placeholder |

**Also needed:** Explicitly exclude the 3 test entries (GigIDs 13733, 14807, 14813) from ingestion. These are sandbox records with Open status. Léo to hardcode an exclusion list.

**Owner:** Pow Hwee + Michelle

**Needed by:** Before OTEP-192 closes

---

### Decision E: Are programme-type gigs (agilePSD, KidSTART, etc.) subject to the time commitment requirement?

**Impact:** ~109 gigs in edge-case programme categories.

agilePSD (29 gigs, all from PSD) is the cleanest case — fully dated, zero stale, could be unblocked quickly. KidSTART, OCMO 2026, Overseas Posting are smaller volumes.

**Question for BO:** Are these programme types exempt from the time commitment requirement (like Jobs and Secondments), or must they have TC (like Gigs)?

**Owner:** Michelle → BOs (Jacky / Xian Zhang)

**Needed by:** Before go-live date is set

---

### Decision F: What is the minimum viable catalogue threshold for launch?

**Impact:** This sets the go-live gate. Without it, there's no definition of "ready."

Recommended threshold: 350+ ingested gigs with at least 3 opportunity types with 20+ each. Below 300 is thin — some filter views will return single digits.

**Question for BO:** What's the floor? What catalogue state would make Jacky/Xian Zhang comfortable flipping the switch?

**Owner:** Michelle → BOs

**Needed by:** Before S5 planning

---

## 5. The User Problem Behind the Data Problem

OTG ingestion is a technical pipeline, but the outcome is an officer experience problem. It's worth framing it that way for BO conversations.

**What officers will see at launch (if rules stay unchanged):**

- Browse all opportunities: 160 cards
- Filter by "Secondment": possibly 30–50 results (89% blocked at source)
- Filter by "Function: Policy": potentially single digits
- Searching for a specific agency's postings: gaps officers will notice

**Risk:** Officers try CareerCompass once, find it sparse compared to what they know is in OTG, and stop returning. Early word-of-mouth kills adoption before the platform has a chance to build traction.

This isn't a launch blocker — 160 gigs is a real launch. But the BO conversation should be honest about what 160 means at the user level, not just the number.

---

## 6. What Agencies Need to Do (Remediation Plan)

The 163 unclassifiable gigs (no type tag, unrecognised prefix) are permanently blocked until agencies fix the data at source. DevOps/DT own the fix for the unrecognised prefix issue. But agencies need to know what to fix and by when.

### Remediation playbook (draft)

1. **Generate per-agency skip report** from the ingestion log — row number, field, reason. Send to agency HR contacts.
2. **Target the top 3 first:** Enterprise Singapore (178 blocked), MTI (42), MSF (40). These three alone cover 63% of all blocked gigs.
3. **Set a remediation window:** Agencies get 2 weeks to correct flagged records. A second ingestion run follows.
4. **Track via skip log:** OTEP-348's ingestion run log is the mechanism. Each run shows what's still failing.
5. **Tag taxonomy guidance:** Publish the canonical list of valid type tags so agencies know what prefixes are valid. Without this, new unrecognised variants accumulate after launch.

### Outstanding operational questions

| Question | Owner | Urgency |
|---|---|---|
| Who publishes and maintains the canonical type tag list? | OTG Ops / Michelle | Before agency outreach starts |
| Who in each agency is the remediation contact? | Rama / PSD Ops | Before remediation window opens |
| Can OTG enforce a type label at the point of posting? | DevOps/DT | Sprint 5/6 — prevents recurrence |
| 7 gigs with no named owner in OTG — how are these handled? | Rama | Before remediation |
| `[Female Only]` and `[For Grade 12/11]` misused as type tags — reassign or create separate field? | Michelle → Pow Hwee | Before schema is finalised |

---

## 7. What the Pipeline Still Needs (Technical Gaps)

For reference — these are engineering-side items, not PM decisions.

| Item | Ticket | Status | Owner |
|---|---|---|---|
| OTEP-192 ACs with confirmed field contract | OTEP-192 | Pending field scope decisions (A–C above) | Michelle (PM to update ACs) |
| OTEP-348 — ingestion run scheduler + observability | OTEP-348 | S3 or S4 — Pow Hwee to confirm explicitly | Pow Hwee |
| OTEP-358 — robust nil-date spike (beyond `"00/01/1900"`) | OTEP-358 | S4, 2-day timebox; add to S4 planning brief | Michelle (spike owner) |
| OTEP-391 — CFT sequence diagram (upload → webhook) | OTEP-391 | Hao Eng blocked; Pow Hwee to unblock | Pow Hwee |
| OTEP-397 — upload UI + admin permissions | OTEP-397 | Admin list (who can upload) is PM call | Michelle |
| Upload permissions (admin list for OTEP-397) | — | PM makes the call on who's on the list | Michelle |
| Exact Excel column names confirmed | — | Léo + Michelle, before OTEP-192 closes | Léo |
| OTG type prefix strings confirmed (IJ_, STIP_, GIG_) | — | Léo, before OTEP-192 closes | Léo |
| Test entry exclusion hardcoded (GigIDs 13733, 14807, 14813) | — | PM to add to OTEP-192 ACs | Michelle |

---

## 8. What This Means for the Ingestion Revisit (S5/6)

Decision 2026-06-10 commits to a structured review of ingestion rules in S5/6. This discovery brief is the setup for that review. When S5/6 comes around, the inputs will be:

- **Ingestion log data:** What actually got skipped, and why, across the first real runs
- **Catalogue quality:** What did 160 (or 350) gigs look like to officers in pilot? Did it feel sparse?
- **Agency remediation completion:** How many of the 473 blocked gigs have been fixed at source?
- **Field scope questions (A–C above):** Were the start date and function decisions correct? Did optional fields cause design or data issues?

The review should answer one question: are the current skip rules calibrated correctly for the R1 state of the platform? Not for Sprint 4 hardening, but for the post-pilot world where we want to maximise catalogue quality and coverage.

---

## 9. Open Items Summary

| # | Item | Owner | By when | Urgency |
|---|---|---|---|---|
| A | Start date required or optional (per-type rule?) | Pow Hwee + Michelle | Before OTEP-192 ACs finalised | Blocks story close |
| B | Function required or optional (display-only)? | Pow Hwee + Michelle | Before OTEP-192 ACs finalised | Blocks story close |
| C | Competencies + time commitment required or optional? | Pow Hwee (to schedule meeting) | Before S4/S5 OTEP-87 grooming | Blocks detail page design |
| D | Stale gig policy — pipeline exclusion or lifecycle rule? | Pow Hwee + Michelle | Before OTEP-192 closes | Pipeline design |
| E | Programme-type TC exemption (agilePSD, etc.)? | Michelle → BOs | Before go-live date set | Catalogue size |
| F | Minimum viable catalogue threshold for launch | Michelle → BOs | Before S5 planning | Go-live gate |
| G | Admin list for upload UI (OTEP-397) | Michelle | Before OTEP-397 closes | Story blocker |
| H | OTEP-358 (nil-date spike) into S4 planning brief | Michelle | Thu S4 planning | Fragile fix needs hardening |
| I | CFT sequence diagram (OTEP-391) | Hao Eng (Pow Hwee to unblock) | This week | Hao Eng blocked |
| J | OTEP-348 sequencing — S3 or S4 | Pow Hwee | Squad Sync | Planning input |
| K | WOG AD form — Michelle to fill in | Michelle | ASAP | Every day delays auth chain |
| L | Canonical type tag list — who publishes + maintains it? | Michelle / OTG Ops | Before agency outreach | Prevents post-launch recurrence |
| M | Per-agency skip report — distribute to top 3 agencies | Michelle + Rama | After OTEP-192 closes | Unblocks remediation |

---

## 10. Recommended Next Steps

In order of urgency:

1. **Today:** Confirm start date and function scope with Pow Hwee (items A, B). Two conversations. Update OTEP-192 ACs immediately after.
2. **Today:** Add test entry exclusion (GigIDs 13733, 14807, 14813) to OTEP-192 ACs.
3. **Thu:** Add OTEP-358 to S4 planning brief.
4. **This week:** Schedule BO meeting (Jacky/Xian Zhang) on items E and F. Use the BO meeting brief already prepared (`bo-meeting-questions-otg-ingestion-2026-06-09.md`).
5. **This week:** Fill in WOG AD form (item K — unrelated to ingestion but on Michelle's critical path).
6. **After OTEP-192 closes:** Generate per-agency skip report. Start remediation outreach with Enterprise Singapore first.
7. **S5/6:** Schedule the ingestion rules review, using this document and the live skip log data as inputs.

---

*Written: 2026-06-10*
*Source files: decisions-log.md, open-items.md, 2026-06-09-otg-ingestion-trio.md, 2026-06-09-otg-ingestion-impact-trio-prep.md, 2026-06-09-otg-excel-data-dictionary.md, bo-meeting-questions-otg-ingestion-2026-06-09.md, otg-lifecycle.md, risks.md*
*Tickets in scope: OTEP-192, OTEP-284, OTEP-319, OTEP-348, OTEP-358, OTEP-391, OTEP-397, OTEP-87, OTEP-86*
