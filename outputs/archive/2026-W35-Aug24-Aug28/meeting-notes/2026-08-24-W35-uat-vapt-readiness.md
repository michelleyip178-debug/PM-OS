# Meeting Notes: UAT and VAPT Readiness (Last-Minute)

**Date:** 24 Aug 2026 (last-minute, 9:30am — not on the original calendar pull for today)

**Attendees:** Adrian Ang, Imelda, Jace, Barry, Rama, Adrian Lo, Speaker 2 (transcript anonymized some speaker labels; PM confirmed 2026-08-24 that Speaker 1 = Rama and Speaker 3 = Adrian Lo — a different person from "Adrian Ang" elsewhere in this doc. Speaker 2 remains unresolved, see note below.)

**Meeting Type:** Stakeholder/technical readiness review — explicitly framed as prep for a meeting with Mark tomorrow (25 Aug)

**Duration:** Full transcript now processed across two segments (initial ~53 min + a continuation covering last-modified-date, feedback widget, and post-MVP scope)

**Note on speaker attribution:** The raw transcript originally labeled three speakers "Speaker 1/2/3." Speaker 1 is confirmed as Rama and Speaker 3 is confirmed as Adrian Lo (both PM, 2026-08-24) and have been replaced throughout this document. **Adrian Lo is a distinct person from "Adrian Ang"** (who appears separately throughout, e.g. driving the Mark-trust strategy) — do not conflate the two. Speaker 2 remains unresolved. Do not guess their identity; confirm before citing this doc externally.

---

## Summary

The team walked through readiness for tomorrow's meeting with Mark, who has grown distrustful after a rocky week: they'd used the Products (POCDEX) Dev API instead of UAT for testing, hit a data mismatch on switchover Thursday, and switched back. The core message for Mark: the UAT API is fixed and deployed but not yet re-verified/switched-over — that verification is planned for tomorrow, contingent on one remaining UAT test case and a CSC SSO data-matching fix. Separately, the meeting covered VAPT scope and timing risk (CIE/CV model changes potentially landing mid-VAPT-window), a PO delay risking the NCS VAPT kickoff (this Friday, not next Friday — corrected mid-meeting), and unresolved questions on CIE technology choice (Python) and last-modified-date change tracking for POCDEX profile updates.

---

## Decisions Made

1. **Message to Mark: explain the Dev API usage as a scoped, deliberate choice, not a time-pressure shortcut**
   - **Why:** Adrian Ang flagged Mark has lost trust due to prior delays and will scrutinize any explanation that sounds like an excuse ("we didn't have time" is explicitly to be avoided).
   - **Who decided:** Adrian Ang, with Rama providing the technical justification (the 22 test personas are static data: Dev and UAT APIs return identical persona data, so using Dev didn't compromise UAT test quality).
   - **Impact:** Frames tomorrow's update to Mark. Team also needs to preempt his likely follow-up ("how do we know Dev→UAT won't repeat at UAT→Production?") — no agreed answer yet, see Open Questions.

2. **Sequence: verify UAT Products API data quality today; switch over tomorrow**
   - **Why:** Avoid repeating Thursday's failed switchover (personas were created against mismatched position/employment data). One UAT test case is still pending and must clear first.
   - **Who decided:** Rama, agreed by Adrian Ang and Adrian Lo.
   - **Impact:** Today = manual data-quality check against the 22 personas via direct API calls (not a live switch). Tomorrow = the actual switchover, contingent on today's check passing and the last UAT test case clearing.

3. **CSC SSO testing can run concurrently with the Products API verification, not sequentially**
   - **Who decided:** Adrian Lo, confirmed by Adrian Ang.
   - **Impact:** CSC needs to fix an account-matching issue on their side before SSO work can move from Dev/QA to UAT — tracked separately, not blocking the Products API timeline.

4. **NCS VAPT kickoff meeting is this Friday (28 Aug), not next Friday**
   - **Why:** Jace corrected the date mid-meeting — the invite is confirmed for 28 Aug.
   - **Who decided:** Confirmed by Rama after checking.
   - **Impact:** Creates urgency — see Blockers, PO/PR approval must clear before then or NCS engineers won't start.

5. **Combined VAPT report (Compass + Products systems) is acceptable in principle**
   - **Why:** NCS will only issue one report even though two systems are in scope; Barry confirmed the report can be broken down by endpoint within that single report.
   - **Who decided:** Barry, pending final confirmation Rama will get from Ryan.
   - **Impact:** Avoids needing a second, separately-scoped VAPT engagement for the Products API.

6. **Last-modified-date tracking: request one date per API endpoint (4 total), not per underlying table**
   - **Why:** POCDEX stores last-modified at table level and has multiple tables behind each of the 4 APIs Compass consumes. Rather than asking POCDEX to build change-detection logic (which they resist — "any logic should be on our side"), the team decided to request a single last-modified date per endpoint, giving Compass flexibility to decide what "changed" means on its own side.
   - **Who decided:** Rama and team.
   - **Impact:** Becomes the concrete ask for the data-sharing form change request. Business logic for detecting *which* change matters (profile vs. employment vs. job) stays entirely on the Compass side — POCDEX only supplies the raw dates.

7. **Feedback widget interface must land before VAPT starts (4 Sep), even if the full feature isn't finished**
   - **Why:** Adding a new interface after VAPT begins would require a VAPT re-scan. A stub/dummy API is acceptable as long as the interface itself exists pre-freeze; full functionality can follow after.
   - **Who decided:** Team, prompted by a direct question on how the feedback data is stored (confirmed: PostHog, new interface).
   - **Impact:** Splits into two tickets — a minimal pre-freeze interface stub, and the full feature build after. Assigned for scoping ("bare minimum for MVP").

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Verify UAT Products API data quality against the 22 test personas (manual check, not a live switch) | Rama / Adrian Lo | Today (24 Aug) | 🔴 High | 🔴 Not Started |
| Switch over to UAT Products API for real, after data verification + last UAT test case clears | Rama | Tomorrow (25 Aug) | 🔴 High | 🔴 Not Started |
| Chase CSC on the account-matching fix blocking SSO Dev/QA → UAT move | Adrian Lo | ASAP | 🔴 High | 🔴 Not Started |
| Prepare and deliver factual, accurate status to Mark — explicitly note what's open vs. resolved, no glossing | Adrian Ang | Tomorrow (25 Aug meeting w/ Mark) | 🔴 High | 🔴 Not Started |
| Get Somnya to enable CI/CD for the Intel team ahead of VAPT (Core and Pathfinder already fine) | Rama (raised to Adrian Ang) | Before 7 Sep VAPT start | 🟡 Medium | 🔴 Not Started |
| Resolve PO/PR paperwork mismatch (original approval was for a different assurance provider, not NCS) so NCS engineers can get infra access | Jeffrey / Rama | PO issuance in progress, expected out by 4 Sep (confirmed by PM 2026-08-24, after this meeting) — likely does not clear before the 28 Aug kickoff meeting itself | 🟡 Medium (downgraded — narrow but not urgent gap before 7 Sep VAPT start) | 🟡 In Progress |
| Confirm with Ryan whether a single combined VAPT report (Compass + Products) is acceptable, or if endpoint-level breakdown is sufficient | Rama | Before VAPT starts (7 Sep) | 🟡 Medium | 🔴 Not Started |
| Check whether there's a language/tech-stack policy restricting or discouraging Python (CIE is built in Python; Go/React is the stated internal default going forward) | Rama | Not specified | 🟡 Medium | 🔴 Not Started |
| Confirm scope/logic-change risk assessment for CIE model retraining relative to the VAPT freeze window (7 Sep+) | Rama (to confirm with Victor) | Before 7 Sep | 🔴 High | 🔴 Not Started |
| Prepare data model / architecture briefing (Victor presenting) covering how Core team's data model supports Pathfinder + Intel long-term, including CMM and core segregation | Victor (via Adrian Ang coordinating) | Not specified | 🟡 Medium | 🔴 Not Started |
| Formalize "last modified date" as one date per API endpoint (4 total: profile, employments, positions, jobs) in the data-sharing form change request | Rama / team | Officers pressuring to stop revising the form — treat as urgent, no fixed date given | 🔴 High | 🔴 Not Started |
| Align with Adrian Ang on the data-sharing form change request and get it moving faster | Rama | Not specified | 🟡 Medium | 🔴 Not Started |
| Reschedule tomorrow's cancelled meeting with Mark (he declined the original invite, asked to reschedule) | Adrian Ang | Confirm AM or PM slot | 🔴 High | 🔴 Not Started |
| Split feedback-widget work into two tickets: pre-freeze interface stub, then full feature | Unnamed engineer (assigned in meeting, not identified in transcript) | Stub before 4 Sep change freeze | 🟡 Medium | 🟡 In Progress (ticket being created) |
| Confirm CSC-Compass SSO in UAT (Dev environment already confirmed working) | Adrian Lo | Today (24 Aug) | 🟡 Medium | 🟡 In Progress — good news reported: Dev SSO confirmed working |

**Notes:**
- Several items above have no stated due date — flagged per the skill's own convention; recommend scheduling within 48 hours where not already gated by 25 Aug (Mark meeting) or 7 Sep (VAPT start).

---

## Key Insights & Quotes

**Trust dynamics with Mark (executive stakeholder):**
- Adrian Ang, repeatedly: *"He really drills up... if we accidentally misrepresent, right, what I tell you, the trust will be collected."* The team's explicit strategy is precision over speed of reassurance — report exactly what's open and what's resolved, don't round up.
- Adrian Ang anticipates Mark's likely next question after hearing about the Dev/UAT API mismatch: *"How are you assuring me that from UAT to production the data will match?"* — the team has not yet drafted a confident answer to this (see Open Questions).

**Technical root cause (Products/POCDEX API mismatch):**
- The 22 test personas were originally validated by hand against a PDF Johnny (Products team) provided. The Thursday switchover to the live UAT API surfaced that the persona position/employment data didn't match what was in that PDF — a data mismatch, not a connectivity or access issue.
- This was compounded by a database restoration that happened close in time to a CSC file push, creating temporary uncertainty about whether the restore wiped incoming data (sequence was later reconstructed and appears not to have caused actual data loss, but the timing coincidence needed to be explicitly unwound for the Mark conversation).

**VAPT scope risk — CIE/CV model changes:**
- Barry, on the risk of retraining or changing the CIE recommendation logic mid-VAPT: *"If you change it... they are only going to guarantee you that they have done their job for version one. Any risk that you have introduced after version one to version 1.2, right, yeah — that's on you."* Minor/logic-only changes are lower risk than interface changes; the team's plan is to characterize any post-VAPT-start CIE changes as minor releases, not major ones, to avoid re-triggering a full VAPT cycle — pending confirmation from Victor on how large the actual planned change is.

**CIE / competency recommendation — process detail:**
- Compass does not store the CIE recommendation accept/reject data itself — it's sent back to the CIE team via SQS queue for their model training purposes, not persisted in Compass.
- Barry raised a substantive concern that self-added competencies (ones a user adds manually, not from CIE's suggestion list) should NOT be sent back to CIE as training signal, since they may not reflect true CV content and would corrupt the model's extraction training rather than help it.

**CV data acquisition for CIE — capacity risk:**
- CIE currently has only ~15 real CVs to train against (from HR systems), blocked by confidentiality sign-off delays on the DS (data science) side. Victor and Benjamin, the two people who'd action any new CV data, have overlapping September leave — a real risk that any breakthrough on CV access lands when nobody is available to act on it.

---

## Open Questions

| Question | Owner | By |
|---|---|---|
| What's the team's answer to "how do we know UAT→Production data will match, given Dev→UAT didn't?" | Adrian Ang | Before tomorrow's Mark meeting (25 Aug) |
| How big is the planned CIE logic change, and does it risk being classified a "major" change that would force a VAPT re-scan? | Rama (via Victor) | Before 7 Sep VAPT start |
| Is there a whitelisting/access path for Compass team members to log in and manually verify officer profiles pre-cutover? (Michelle flagged PSD-GVT staff can't access some things because they're "forward deployed," not under the same access model) | Rama | Not specified |
| Does the org have an existing engineering language/stack policy that bears on CIE's Python implementation? | Rama | Not specified |
| How will "last modified date" change-detection actually be modeled (which fields, what triggers a change record)? Team hasn't converged | Adrian Ang / team | Not specified, but the data-sharing form is under pressure to stop being revised |
| Post-MVP feature priorities need BO alignment — grading fixes and rating budget flagged as small but "must" for opportunities; BO side unconfirmed whether Amy/Diana or Chiang's team own this | Team, via this week's backlog grooming restart | Not specified |

---

## Blockers

1. **PO/PR paperwork for NCS VAPT engagement**
   - **Blocked by:** Original approval (from Yekian and Mark) was scoped to a different assurance provider, not NCS — needs to be re-raised/reissued.
   - **Impact (updated 2026-08-24, later — PM direct confirmation):** PO issuance is in progress and expected out by 4 Sep, ahead of the 7 Sep VAPT start. It likely will not clear before the 28 Aug kickoff meeting itself, so that meeting may proceed as a walkthrough/planning session without NCS engineers able to begin actual infra work until the PO lands. Downgraded from the meeting's in-the-room framing (which read as more urgent) — there's a narrow but not currently alarming gap before 7 Sep.
   - **Resolution:** PO in progress; no further action flagged beyond normal tracking toward the ~4 Sep target.

2. **CSC SSO account-matching issue**
   - **Blocked by:** An unspecified account-match problem on CSC's side, confirmed this morning as needing a fix from CSC, not Compass.
   - **Impact:** Blocks moving SSO work from Dev/QA into UAT.
   - **Resolution:** Adrian Lo to follow up with CSC directly; can proceed in parallel with Products API work, not sequentially gating it.

3. **One remaining UAT test case (unspecified in transcript)**
   - **Blocked by:** Needs to clear the "past" stage before the team can take the risk of switching to the Products UAT environment for real.
   - **Impact:** Directly gates tomorrow's planned switchover.
   - **Resolution:** No explicit owner named in the transcript for chasing this specific test case closure — worth confirming who owns it.

---

## Timeline Risks

- **TIMELINE RISK: CIE/CV model retraining could land inside the VAPT freeze window (7 Sep – 16 Oct per `open-items.md` #39/`sprint-status.md`).** The team flagged that any CV data delivery from HR systems, and any resulting CIE retraining, is realistically not expected until end of September at the earliest — squarely inside the current VAPT window. Barry and Adrian Lo discussed treating this as a minor-version change to avoid re-triggering a full VAPT cycle, but this has not been confirmed technically (see Open Questions) or reconciled against the VAPT dates tracked in PM-skills-ALL-1's `open-items.md` #39.
- ~~**TIMELINE RISK: NCS VAPT kickoff (28 Aug) is 4 days out and still gated by an unresolved PO/PR approval mismatch.**~~ **Updated 2026-08-24 (later, PM direct confirmation): PO issuance is in progress and expected out by 4 Sep** — this clears comfortably before the 7 Sep VAPT start, though the 28 Aug kickoff meeting itself will likely proceed without NCS engineers able to start actual infra work until the PO lands. Downgraded from a hard timeline risk to a normal in-progress item.
- **TIMELINE RISK: Victor and Benjamin (the two people positioned to act on new CIE/CV data) have overlapping September leave.** If CV data access clears in early-to-mid September as currently expected, there's a real risk nobody is available to act on it before the VAPT window closes it off as a safe change.

---

## Next Steps

**Immediate (Today, 24 Aug):**
- Verify UAT Products API data quality via direct API calls against the 22 personas (not yet switching over)
- Chase CSC on the SSO account-matching fix
- Confirm PO/PR status with Jeffrey — is it actually cleared, not just submitted

**Tomorrow (25 Aug):**
- Switch over to UAT Products API for real, contingent on today's verification and the last test case clearing
- Deliver the Mark update — precise, factual framing of what's resolved vs. still open (per Adrian Ang's explicit trust-preservation strategy)

**Before 7 Sep (VAPT start):**
- Resolve Intel team's CI/CD enablement gap (Sounian)
- Get Victor's confirmation on CIE change-scope risk relative to the VAPT freeze
- Confirm combined vs. separate VAPT report scoping with Ryan

**Follow-up Meeting:**
- **Date:** Tomorrow, 25 Aug — meeting with Mark (the meeting this entire session was prep for)
- **Purpose:** Status update on UAT/VAPT readiness, framed to preserve trust after last week's Dev API incident
- **Attendees:** Not explicitly listed, presumed Adrian Ang plus relevant technical leads

---

## Context for Future Reference

**This meeting was not on the original calendar pull for today** (24 Aug) — it was added last-minute and flagged to me directly by the PM, separate from the 3 meetings (11am stand-up, 4pm LEARN/OTEP integration, 5pm UAT Daily Review) already in today's daily plan.

**Meeting ended** with the team aiming to freeze UAT "in a couple of hours" from when this segment closed, ahead of tomorrow's Mark meeting.

**Relates to:** `open-items.md` #39 (VAPT/UAT timeline, PS/DS-approved delay, 16 Oct vs 23 Oct date conflict) and #55 (Huiting/POCDEX data classification, UAT scenario coverage) in PM-skills-ALL-1 — this meeting's VAPT timing risk (CIE changes landing mid-window) is a new input to that tracker, not yet reflected there.

**Speaker attribution caveat:** Do not assume Rama/2/3 identities in any downstream use of this document (status updates, decision docs) without confirming — the transcript did not resolve them and guessing risks misattributing commitments.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw transcript (as provided, truncated at ~53 minutes)</summary>

Transcript provided directly by the PM — full text preserved in the source conversation, not duplicated here to keep this file a reasonable size. Reference the original if verbatim quotes need re-checking beyond what's captured above.

</details>
