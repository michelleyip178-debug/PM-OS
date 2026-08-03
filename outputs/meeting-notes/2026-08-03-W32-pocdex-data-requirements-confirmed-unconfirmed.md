# CareerCompass: What We Need From POCDEX (HR Data) — Requirements & Open Issues

**Date:** 2026-08-03

**What this is:** A plain-language summary of what CareerCompass needs from POCDEX (the government's HR data system) to work correctly, what's still unresolved, and what could go wrong with the data side of things.

**Supersedes:** an earlier, shorter summary of the same underlying requirements from earlier today — that one had a stale detail (see below).

---

## Summary

CareerCompass depends on POCDEX (the central HR data system) to tell it who officers are, which agency and job they belong to, and whether they're allowed to use the platform. This document lays out everything we're asking POCDEX to provide, what's still undecided, and the data risks that come with it.

**One correction from earlier today:** we'd previously said officers who hold more than one job ("multi-hatting") would only have their main job's information used. That's now changed — CareerCompass needs information about **all** of an officer's active jobs, not just one, because POCDEX can't reliably tell us which job is the "main" one across different HR systems.

**Why this matters:** this connects to two things we've flagged as at risk before — Huiting's original data requirements ask (flagged 14 Jul as a risk to hitting our August deadline) and a question about how fresh our data is (open since 8 Jul). This document should help close out several of those open threads.

---

## What We've Decided So Far

Nothing has been formally signed off yet. This is a list of requirements and open questions, not a set of approved decisions. The recommendations below are Michelle's own view on what to tackle first, not something the team has agreed to yet.

**Recommended focus before testing starts (UAT):**
1. Lock down exactly how the system will respond, including error messages, when something goes wrong talking to POCDEX
2. Settle all the outstanding access/eligibility rules (who's allowed in, how we handle officers on leave, officers with more than one job, casual staff)

---

## What We're Asking POCDEX to Provide

**1. Basic officer information**
Name, a unique ID, work email, NRIC (national ID number), job title, and codes identifying their agency and job type.
This is used to create accounts, check who's eligible, match people to relevant skills, and generate recommendations.

**2. Who's allowed to use CareerCompass**
- **For now, only officers from 6 agencies** can use the platform: PSD, ESG, MDDI, URA, MCCY, CAAS. Anyone else gets blocked.
- **Included:** officers in active jobs, casual/temporary staff, officers on secondment (temporarily working elsewhere), and all of their active job assignments.
- **Excluded:** officers flagged as high-risk, officers under a special restricted-access category, officers whose job status is "on hold," officers who don't qualify under data-sharing rules, and officers who've been on unpaid leave for more than 90 days.

**3. Officers with more than one job**
- **Updated:** if an officer holds more than one active job, we now need information (and skills matching) for **all** of them, not just their main one. POCDEX told us there's no reliable way to identify a single "main" job across different government HR systems.
- **Officers on secondment:** we get their temporary job's details.

**4. Matching officers to the right skills and opportunities**
The codes POCDEX gives us (job type, job level, agency) have to match exactly with the codes CareerCompass uses internally. If they don't match, that officer won't get correct skill-matching or recommendations. This is a hidden dependency: a small mismatch in codes silently breaks a feature for that person.

**5. Keeping data up to date**
Every time an officer logs in, CareerCompass checks with POCDEX for their latest information and updates our records if anything's changed (like a new job or agency). This is how we avoid showing outdated information.

**6. Handling email address changes (needed before launch)**
If an officer's email changes, we match them by their NRIC (since that doesn't change) and update their email on file. This is meant to stop us from losing track of someone when their email changes.

**7. What happens when someone leaves government service (planned for after launch)**
Eventually, a separate system (CAM) will tell CareerCompass when someone's employment ends, so we can disable their account. This isn't built yet — it's planned for after the initial launch.

**8. Handling support issues day-to-day**
- Support staff need to be able to look up an officer by email and check their details are correct
- We need a way to compare what POCDEX says about someone against what CareerCompass has stored
- If there's a problem, it should go to the CareerCompass team first, then the officer's agency HR team, then POCDEX as a last resort
- POCDEX has also asked that we keep a history log they can access when troubleshooting

**9. Getting ready for testing (most urgent, right now)**
- **Testing window:** 11–28 August 2026, including time to fix bugs found during testing
- **What we need beforehand:** about 20 test accounts set up, POCDEX's systems ready to go by 11 August, and POCDEX's support during the testing period

**10. Technical performance expectations**
CareerCompass expects POCDEX to handle up to 125,000 requests a month, respond quickly (under a tenth of a second most of the time), be available whenever CareerCompass is available, use secure authentication, and be able to support more agencies being added later without a major rebuild.

---

## Data Risks (Plain Language)

- **We're storing sensitive ID numbers (NRIC) without a confirmed plan to protect them.** An earlier version of this document said NRIC would be stored as a scrambled value, not the real number. That protection isn't mentioned in this fuller version. We need to confirm whether it's still in place, because NRIC is one of the most sensitive pieces of personal data we handle.

- **We might not have the legal right to use some of the data we're asking for.** There's an open question about whether the skills/competency data we want even qualifies under the government's data-sharing rules. If the answer comes back "no," it's not a small fix — it means we'd need to stop using data we may already be pulling in.

- **We're asking for more data than we're approved to use.** Our approval covers 6 agencies. We're also asking POCDEX for skills data across the whole government, not just those 6. Even if we don't use the extra data yet, asking for more than we're approved for is a compliance red flag on its own.

- **If POCDEX goes down, the system quietly lets everyone in instead of blocking access.** By design, if we can't check whether someone is eligible for a restricted opportunity, the system defaults to showing it anyway rather than hiding it. That's a sensible choice for keeping the app usable, but it means an outage could let officers see opportunities they're not supposed to, and nothing would flag it as an error.

- **We can't currently tell the difference between two groups of officers who should be treated differently.** Officers on short unpaid leave (under 90 days) should still have access, but we don't have a reliable way to identify them separately from regular active officers. This creates a risk of getting access decisions wrong, and any reporting built on this data inherits the same confusion.

- **When someone leaves government service, their account and data might not get cleaned up properly.** The system for automatically disabling accounts of officers who've left hasn't been designed yet. Until it is, there's a risk of "orphaned" accounts sitting around with real personal data long after someone should have lost access.

- **We're relying on data (like career and learning history) that POCDEX says it may not fully own.** If we build features on top of data that isn't from a fully authoritative source, we risk showing officers information that's incomplete or wrong, with no clear owner to fix it.

- **We don't yet have a way to trace back what went wrong if something does.** POCDEX wants us to keep a history of what data we received and when, so if an officer sees the wrong information, we can figure out why. That capability isn't built yet, which means today, a mistake would be hard to investigate.

---

## What's Still Unresolved

| # | Topic | What's Unresolved | Why It Matters |
|---|---|---|---|
| 1 | Legal basis for the data | Are we even allowed to use skills/competency data under current data-sharing rules? | Could affect whether we're allowed to keep using data we're already pulling in |
| 2 | How much data we should request | Why are we asking for skills data covering the whole government when we only support 6 agencies? | Need to agree: stick to our 6 agencies, or justify asking for more |
| 3 | Officers with multiple jobs | POCDEX can't tell us which job is "main," so we now need all of them — this changes how we match people to opportunities | Not fully settled yet, and it affects how accurate our recommendations are |
| 4 | Officers on short unpaid leave | We can't currently identify officers on leave under 90 days separately from fully active officers | Affects who gets access and could create incorrect access decisions |
| 5 | What happens when someone leaves | The process for automatically disabling an ex-officer's account isn't designed yet, and using email to match people risks errors | Risk of stale or orphaned accounts sitting around |
| 6 | Historical career data | We want to eventually show career and learning history, but POCDEX may not be the full source of truth for it | Could affect the accuracy of future features |
| 7 | Troubleshooting support | POCDEX wants us to keep detailed logs so problems can be traced, but this isn't built | Makes it harder to investigate issues when they happen |
| 8 | Technical error handling | The exact way our two systems will talk to each other when something goes wrong isn't finalized | This needs to be sorted before testing starts on 11 August |

---

## What to Prioritize

**Must sort out before testing starts (11 Aug):** how we handle officers with multiple jobs · how we identify officers on short unpaid leave · exactly how errors are handled between systems · enforcing the 6-agency access rule · getting ~20 test accounts ready

**Must sort out before we go live:** how support staff troubleshoot issues · getting formal sign-off that we're allowed to use this data · how we handle email changes safely · keeping a history log for troubleshooting

**Can wait until after launch:** the "someone left government service" account cleanup process · career/learning history features · going beyond our initial 6 agencies

---

## Action Items

| Task | Owner | Due | Priority | Status |
|------|-------|-----|----------|--------|
| Lock down exactly how errors are handled between CareerCompass and POCDEX | Pow Hwee / Johnny | Before testing starts (11 Aug) | High | Not started |
| Settle access rules: unpaid-leave identification, multiple-job handling, on-hold status, casual staff | Imelda | Before testing starts (11 Aug) | High | Not started |
| Prepare ~20 test accounts for testing | Imelda | Before testing starts (11 Aug) | High | Not started |
| Confirm whether we're legally allowed to use this competency/skills data | Imelda | Before go-live | High | Not started |
| Decide: should we only request data for our 6 agencies, or justify asking for more? | Imelda | Before go-live | Medium | Not started |
| Check this document against our two existing open tracking items (data requirements risk, data freshness) to see what can now be marked resolved | Imelda | This week | High | Not started |
| Confirm the right people (Huiting/Mark) have actually approved this, not just reviewed it | Imelda → Rama | This week | High | Not started |

---

## Key Things to Remember

- **This replaces an earlier, shorter summary** we had from earlier today — that one had an outdated detail about how we handle officers with multiple jobs.
- **Being written down isn't the same as being approved.** This document lays out requirements and open questions clearly, but that doesn't mean the right people have formally signed off on it yet. We should treat it as still pending approval until confirmed.
- **The testing window is now confirmed: 11–28 August.** That puts real time pressure on the three items still unresolved that are needed before testing can properly start (multiple-job handling, unpaid-leave identification, and error handling).

---

## Still Need Answers On

- [x] ~~What document is this based on?~~ **Resolved:** this is the full requirements document.
- [x] ~~Does it replace our earlier tracking?~~ **Resolved:** yes, where they overlap (e.g. the multiple-jobs detail).
- [ ] Have the right people (Huiting/Mark) actually signed off, or is this still a draft? — **Owner:** Imelda → Rama — **By:** This week
- [ ] Does the legal-basis question need to be resolved before testing, or can it run in parallel? — **Owner:** Imelda — **By:** This week
- [ ] Is there a firm date for finalizing error handling, given testing starts in 8 days? — **Owner:** Pow Hwee / Johnny — **By:** Immediately

---

## Timeline Risks

- **Testing runs 11–28 August.** Three must-have items (multiple-job handling, unpaid-leave identification, error handling) are still unresolved with no firm date attached. If these aren't locked down before 11 August, testing could run into avoidable problems.
- **We still don't have confirmed sign-off.** This was flagged in mid-July as a risk to our August deadline because there's no backup plan if approval doesn't come through in time. Having requirements fully written down isn't the same as having them approved — this is still open until confirmed.

---

## Related Context

- This connects to an existing tracked risk about Huiting's original data requirements ask — worth re-checking against this document, since several parts may now be resolved.
- This connects to an existing open question about how fresh our data is — the login-time update process (see requirement 5 above) is meant to answer part of this, but it's worth double-checking it fully does.
- A team discussion from mid-July raised a useful caution that still applies: "we answered the questions" isn't the same as "the approvers are comfortable enough to approve." This document is detailed, but that doesn't mean it's been signed off.

---

## Appendix: Full Technical Version (for engineering reference)

<details>
<summary>Click to expand the original technical requirements and terminology</summary>

**Source:** Full POCDEX data requirements document — supersedes the earlier same-day confirmed/unconfirmed audit, which was a compressed (and partly stale) summary of this document.

### Requirements

**1. Officer profile data**
POCDEX provides: name, POCDEX UID, work email, NRIC, employment/business title, agency code, job family/function/grade/ID codes.
Used for account creation, employment validation, competency mapping, recommendations.

**2. Eligibility & population**
- **MVP agencies (6):** PSD, ESG, MDDI, URA, MCCY, CAAS — others get an error response
- **Include:** active officers, casual employees, active secondments, active job profiles
- **Exclude:** high-risk records, TIVO, Holding status, data-sharing-ineligible, NPL >90 days

**3. Position & job handling**
- **Multi-hatting (corrected):** all active positions + competencies across all — no single primary position
- **Seconded:** active seconded position + linked job profiles + job codes

**4. Competency & role mapping**
POCDEX codes must exactly match Compass codes (job family/function/ID/grade, agency code).
Chain: POCDEX data → role profiles → competencies → recommendations. Mismatch breaks mapping for that officer.

**5. Login-time validation**
Every login: Compass calls POCDEX → gets latest profile → validates eligibility → updates if changed.
This is the data-currency mechanism.

**6. Email change handling (pre-MVP)**
Login → fetch profile incl. NRIC → match existing record by NRIC → update stored email.
Prevents desync.

**7. Termination / CAM integration (post-MVP)**
CAM pushes status updates; terminated officers disabled.
Possibly needs new API for email/NRIC/status verification. Design deferred.

**8. Day 2 ops**
- Troubleshoot by email search (agency/job codes/titles)
- Compare POCDEX vs. Compass records
- Escalation: Compass → Agency HR → POCDEX
- POCDEX also wants Compass to expose historical API logs

**9. UAT (immediate priority)**
- **Timeline:** 11–28 Aug 2026, incl. defect fixing/stabilisation
- **Needs:** ~20 test accounts, POCDEX APIs ready by 11 Aug, POCDEX support during UAT

**10. Non-functional**
Up to 125K calls/month, ~5 req/min avg, P95 ≤100ms, availability matching Compass, service account auth, standard REST error codes, scalable to future agencies.

### Open Issues (technical framing)

| # | Area | Issue | Why It Matters |
|---|---|---|---|
| 1 | Data sharing & compliance | Does competency/role-profile data qualify as "employment administration" under the PSD SOP exemption? | Affects approval requirements for ingestion and future onboarding |
| 2 | Competency data scope | Why does Compass need WOG-wide data when MVP is 6 agencies? | Need agreement: 6-agency scope only, or all WOG data |
| 3 | Multi-hatting | POCDEX can't determine a primary position; recommends all positions. Compass's ask shifted from single position to all-positions | Logic not fully aligned — affects recommendation accuracy |
| 4 | NPL handling | NPL <90 days returned, >90 excluded — no identifier yet to distinguish <90 from fully active | Affects access rules, eligibility logic, officer experience |
| 5 | Employment status sync | CAM design unresolved; email-as-identifier risks desync | Risk of orphaned accounts, failed deprovisioning, ops burden |
| 6 | Historical data | Posting/competency/learning history needed but undefined; POCDEX may not own all of it | Impacts future API design and architecture |
| 7 | Day 2 ops & troubleshooting | POCDEX wants historical API log access and traceable data lineage | Needed for L1 support and source-of-truth issues |
| 8 | API contract & error handling | Error codes, validation, whitelist handling, response detail still need alignment | Critical dependency for UAT readiness (11 Aug) |

### Raw Input

1. Officer Profile Data — name, POCDEX UID, work email, NRIC, titles, agency/job codes.
2. Eligibility & Population — 6 MVP agencies (PSD, ESG, MDDI, URA, MCCY, CAAS); include active/casual/seconded; exclude high-risk/TIVO/Holding/ineligible/NPL>90.
3. Position Handling — multi-hatting: all active positions + competencies across all; seconded: active position + linked profiles + codes.
4. Competency & Role Mapping — POCDEX codes must exactly match Compass codes.
5. Login-Time Validation — call POCDEX every login, validate, update if changed.
6. Email Change Handling (pre-MVP) — match by NRIC, update email.
7. Termination / CAM (post-MVP) — CAM pushes status, terminated officers disabled, design deferred.
8. Day 2 Ops — troubleshoot by email, compare records, escalate Compass → Agency HR → POCDEX, historical log access requested.
9. UAT — 11–28 Aug 2026, ~20 test accounts, APIs ready by 11 Aug.
10. NFRs — 125K calls/month, ~5 req/min avg, P95 ≤100ms, service account auth, standard REST errors, scalable.

Open issues: data-sharing classification, competency scope, multi-hatting alignment, NPL<90 identification, CAM/email desync, historical data, Day 2 log access, API contract.

PM prioritization: Before UAT — multi-hatting, NPL, API contract, agency enforcement, test accounts. Before go-live — Day 2 ops, compliance approval, email sync, log retention. Post-MVP — CAM, learning/posting/competency history, WOG expansion.

</details>
