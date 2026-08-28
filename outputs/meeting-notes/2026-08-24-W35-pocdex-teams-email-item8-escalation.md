# Meeting Notes: POCDEX Teams Email — Item #8 Escalation (API Production Readiness Date)

**Date:** 24 Aug 2026 (email thread, latest message 24 Aug; references a 21 Aug discussion)

**Attendees (thread participants):** Huiting LIAN (POCDEX), Rama Moorthy (CC), Adrian Lo (endorsed CC tester for POCDEX validation)

**Meeting Type:** Email thread / stakeholder escalation — evolved from a data-sharing approval discussion into a programme schedule risk

**Duration:** N/A (async thread)

---

## Summary

POCDEX (Huiting LIAN) has escalated an urgent ask: CC must confirm, by tomorrow morning, the date it requires the POCDEX API to be production-ready ("Item #8" on POCDEX's 9-item timeline). Without that date, POCDEX cannot schedule its own VAPT, finalize API delivery timelines, or protect CC's MVP rollout. POCDEX's own plan targets **24 Nov production rollout** — a date that conflicts with what's already tracked in `open-items.md` #39 ("First release: week of 2 Nov"). This gap needs to be resolved, not just Item #8 answered in isolation.

---

## Decisions Made

1. **Adrian Lo confirmed as CC's endorsed tester for POCDEX data validation**
   - **Why:** Not stated in the thread beyond the confirmation itself.
   - **Who decided:** CC (confirmed to POCDEX).
   - **Impact:** Gives POCDEX a named counterpart for UAT coordination.

No other decisions have been made — everything else in the thread is POCDEX asking CC to decide.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm Item #8 — date CC requires the POCDEX API to be production-ready | CC Product/Tech | **Tomorrow morning (25 Aug)** — POCDEX's explicit deadline | 🔴 High | 🔴 Not Started |
| Reconcile POCDEX's 24 Nov production rollout target against `open-items.md` #39's tracked "week of 2 Nov" first release date — these conflict and the gap hasn't been explained | Rama | Before responding on Item #8 (the date given should be internally consistent) | 🔴 High | 🔴 Not Started |
| Confirm dates for remaining TBC timeline items: #4 (CC Employment Profile enhancement), #5 (UAT start/end), #7 (POCDEX VAPT) | CC Product | Not specified by POCDEX beyond urgency | 🟡 Medium | 🔴 Not Started |
| Decide whether POCDEX baseline test scenarios are a rollout success/exit criterion | CC Product | Not specified | 🟡 Medium | 🔴 Not Started |
| Confirm UAT coverage expectations — which P1/P2/P3 scenarios are in MVP scope vs. deferred, including employment lifecycle edge cases (transfers, secondments, rehires, NPL, email changes, job family/function changes, duplicate records, position changes) | CC Product | Not specified | 🔴 High | 🔴 Not Started |
| Agree UAT exit criteria | CC + WD | This week (per POCDEX's own framing) | 🟠 High | 🔴 Not Started |
| Confirm rollout risk acceptance if some lifecycle scenarios move post-MVP | CC SteerCo/Product Lead | This week | 🟠 High | 🔴 Not Started |

---

## Key Insights & Quotes

**POCDEX's core message, verbatim from the source doc:**
"Tell us when you need the API in production, otherwise we cannot schedule VAPT and our delivery timelines may affect your 24 Nov launch."

**What Rama confirmed (21 Aug), per the thread:**
- Employment Profile changes for MVP are being prioritized.
- Expected ready for testing around **mid-October 2026**.
- POCDEX master test plan testing can begin around that period.

**POCDEX's proposed 9-item high-level plan** (dates as stated by POCDEX, several still TBC):
1. Now → 25 Aug: Prioritize POCDEX test scenarios
2. Now → Mid-Oct: Test data preparation
3. Now → Mid-Oct: Internal POCDEX testing
4. TBC: CC Employment Profile enhancement
5. Mid-Oct → Early Nov: CC UAT with POCDEX
6. By 4 Nov: UAT completion confirmation
7. TBC: POCDEX VAPT
8. TBC: POCDEX API production readiness for CC
9. **24 Nov: Production rollout**

**Employment lifecycle edge cases POCDEX has repeatedly flagged as under-tested:** transfers, secondments, rehires, NPL, email changes, job family/function changes, duplicate records, position changes. Framed as Day-2 operational scenarios, not simple login scenarios — risk is these surface as post-launch ops incidents rather than being caught in UAT.

---

## Open Questions

| Question | Owner | By |
|---|---|---|
| When does CC require the POCDEX API to be production-ready? (Item #8) | CC Product/Tech | Tomorrow morning (25 Aug) |
| Will POCDEX baseline scenarios be part of rollout acceptance/exit criteria? | CC Product | Not specified |
| What are the confirmed dates for Items #4, #5, #7 (currently TBC)? | CC Product | Not specified |
| Which P1/P2/P3 UAT scenarios are in MVP scope, and which can defer post-MVP? | CC Product | Not specified |
| Is lifecycle-event testing (transfers, secondments, etc.) sufficiently covered in current UAT scope? | CC Product | Not specified |

---

## Blockers

1. **Item #8 (API production-readiness date) unconfirmed**
   - **Blocked by:** No internal CC decision yet on when the API is needed in production.
   - **Impact:** POCDEX cannot schedule VAPT, finalize API delivery, or protect its own commitments to CC's MVP timeline. POCDEX has stated this may cascade into schedule slippage on the 24 Nov date they're planning against.
   - **Resolution:** CC needs to answer by tomorrow morning — but see the Timeline Risk below, since answering with an unreconciled date could lock in a conflict that isn't yet understood.

---

## Timeline Risks

- **TIMELINE RISK: POCDEX's own plan targets 24 Nov production rollout — this conflicts with `open-items.md` #39, which currently tracks "First release: week of 2 Nov."** These are roughly 3 weeks apart. It's not clear from this thread whether POCDEX is working from a stale/older CC date, whether 24 Nov reflects a POCDEX-side buffer CC hasn't been told about, or whether CC's own 2 Nov date is itself stale given the PS/DS-approved Oct→Nov MVP delay (also tracked in #39, resolved 18 Aug — see [2026-08-24-W34 weekly review](../weekly-reviews/2026-08-24-W34-weekly-review.md)). **Answering Item #8 without first resolving this gap risks committing to a date that's already inconsistent with CC's own tracked plan.**
- **TIMELINE RISK: Compressed UAT-to-VAPT-to-go-live runway.** POCDEX's plan has UAT completing by 4 Nov, VAPT after that (date TBC), and go-live 24 Nov — leaving limited contingency if Employment Profile work slips past mid-Oct, UAT surfaces defects, or VAPT finds issues requiring fixes. This compounds the existing VAPT-window risk already tracked in #39 (CIE/CV retraining potentially landing inside the 7 Sep–16 Oct freeze).
- **TIMELINE RISK: Employment Profile changes (mid-Oct target) are the pacing item for the entire downstream chain** (POCDEX UAT start, UAT completion, VAPT, rollout). Any slip here compresses everything after it, and there's no stated buffer.

---

## Questions to Clarify UAT Coverage With CC Team

Prep material for the internal CC follow-up conversation — not from the POCDEX thread itself, but drafted in response to it.

**If time is limited, these 5 first (most directly tied to Huiting's escalation):**
1. Are POCDEX baseline lifecycle scenarios part of MVP UAT sign-off?
2. Which lifecycle events will actually be tested before go-live?
3. How will Ops users troubleshoot discrepancies between Compass and POCDEX data?
4. What is the formal UAT exit criteria and who signs it off?
5. What is the confirmed date for Item #8 (POCDEX API production readiness)?

### 1. UAT Exit Criteria
- What are the formal UAT exit criteria for Career Compass?
- Is successful completion of the 21 personas sufficient for go-live?
- Are POCDEX baseline scenarios included in the UAT sign-off criteria?
- If some lifecycle scenarios are not tested, what risks is the CC team formally accepting for MVP?

### 2. Employment Lifecycle Coverage
POCDEX repeatedly raised Day-2 operational scenarios. Ask which of these will be tested end-to-end in UAT:

| Scenario | Covered in UAT? |
|---|---|
| Agency transfer | |
| Secondment | |
| Attachment | |
| Rehire | |
| NPL activation | |
| Return from NPL | |
| Email change | |
| Name correction | |
| Position ID change | |
| Job Family change | |
| Job Function change | |
| Duplicate records | |
| New officer reusing old email address | |

### 3. Data Refresh & Synchronisation
- How will UAT validate handling of employment profile changes after an officer's first login?
- Will testing cover: Day 0 login → Day 30 profile change → Ops user troubleshooting afterward?
- How will CC verify stored profile data remains consistent with subsequent POCDEX API responses?

### 4. Ops Portal Validation
- Will UAT test the Ops Portal?
- Can Ops users retrieve latest POCDEX data, compare it against existing Compass profile data, and identify which fields differ?
- Can Ops users determine whether an issue originates from HRPS/Cumulus, POCDEX, or Compass transformation logic?
- Will UAT include actual L1/L2 support walkthroughs?

### 5. API Logging & Auditability
- Will UAT validate that API payloads are retained for troubleshooting?
- Can Ops users view what POCDEX returned at first login vs. what it returns today?
- Can historical API transactions be traced without involving POCDEX support?

### 6. Multiple Employment / Multi-Hatting Scenarios
- Will UAT cover officers with multiple active positions?
- Will UAT cover multiple primary positions across different HR systems?
- How will CC validate employment records are matched to the correct officer profile, and wrong HR system records aren't blended together?

### 7. Agency Eligibility & Access Controls
- Will UAT validate users outside the 6 MVP agencies?
- Will UAT validate contingent workers, NPL >90 day cases, ineligible users, terminated officers?
- Are expected API error responses being tested?

### 8. Data Quality & Master Data Mapping
- Will UAT validate Job IDs, Job Family IDs, Job Function IDs, and Agency Codes against master reference data?
- How will CC detect missing competency mappings, invalid master data, mismatched agency codes?
- Are there scenarios designed to deliberately test master-data defects?

### 9. Readiness for Item #8 (Most Important)
- What event defines "POCDEX API must be production-ready"?
- Is that date before UAT starts, after UAT completes, before VAPT, or before soft launch?
- What testing evidence must be completed before CC can commit to that date?

---

## Next Steps

**Immediate (by tomorrow morning, 25 Aug):**
- Reconcile the 24 Nov vs. 2 Nov date conflict before answering Item #8 — don't answer in isolation
- Respond to POCDEX with a confirmed Item #8 date

**This week:**
- Agree UAT exit criteria (CC + WD)
- Decide which lifecycle scenarios are in MVP scope vs. deferred (CC Product)
- Confirm rollout risk acceptance for any deferred scenarios (CC SteerCo/Product Lead)
- Populate remaining TBC dates (#4, #5, #7)

**Follow-up:**
- No specific follow-up meeting stated in the thread — response appears expected async, in writing, per POCDEX's own communication pattern in this thread.

---

## Context for Future Reference

**Relates directly to `open-items.md` #55** (Huiting LIAN's ongoing data-requirements/UAT-scope thread with CC) — same POCDEX contact, continuing an escalation pattern that started as a data-sharing approval ask in July and has now shifted to programme schedule risk. Also relates to #39 (VAPT/UAT timeline) and #31 (POCDEX go-live prep).

**Pattern worth naming:** this is at least the third time this quarter a Huiting-initiated thread has escalated from a scoping/documentation ask into a timeline-risk finding (see #55's history — data requirements → UAT scope → now production date). Worth considering whether POCDEX coordination needs a standing sync rather than continuing to surface as one-off email escalations.

**This finding should be reflected in `open-items.md` #39 and #55** once the date conflict is resolved — not done in this pass, since the conflict itself needs a person's decision first, not a file edit.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw content (as provided)</summary>

Source content provided directly by the PM as a structured summary of an email thread (not a raw transcript) — preserved in the source conversation, not duplicated here.

</details>
