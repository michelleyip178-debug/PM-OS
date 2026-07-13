---
date: 2026-07-13
week: 2026-W29
type: meeting-notes
meeting: Compass Working Group - Data Requirements Workthrough
time: 9:00-10:00am
---

# Compass Data Requirements Walkthrough

**Date:** July 13, 2026, 9:00–10:00am

**Attendees:** Michelle Yip (PM), Xian Zhang, Alan, plus additional unnamed/misattributed speakers (auto-transcription quality is poor — many turns show as "Speaker N")

**Type:** Cross-team working session — POCDEX data requirements

**Related:** Directly answers open item [#55](../../PM-skills-ALL-1/00-hub/open-items.md) (Huiting's formal data requirements ask), touches #31 (POCDEX go-live prep) and #56 (sync cadence)

> **Transcription quality note:** This transcript is heavily garbled — many speakers are mislabeled as "Speaker N," terms are mistranscribed (e.g. "Podex/Prodex/products" = POCDEX, "camp/Cam/CAD" = CAM likely, "WGA/WGAD" = WOG AD, "TBC" used both as a real term and possibly a mis-transcription). The transcript was also truncated at 50,000 characters (cuts off mid-meeting around the "MHA sub-agencies" discussion). Treat scope/agency-count details below as directional — confirm exact figures before using in the formal requirements doc that goes to Huiting.

> **Updated 2026-07-13 (post-meeting):** Michelle shared the actual POCDEX data model, data dictionary, and API documentation after this meeting. See **"Schema Cross-Check"** section below — it corrects one meeting assumption and surfaces several gaps the discussion never touched, since the team was reasoning about POCDEX from memory rather than the live contract.

---

## Summary

Working session to define Compass's data requirements from POCDEX ahead of formally responding to Huiting's ask (#55). Covered onboarding criteria, active vs. inactive officer handling, double-hatting/secondment logic, sync cadence, data retention, and deactivation rules. Landed on a clear MVP scope (active officers only, daily sync via API, no real-time requirement) with inactive-officer handling explicitly deferred to post-MVP. Action: Xian Zhang/team to convert today's discussion into business requirements language for Rama's review, then route to Mark for approval.

---

## Decisions Made

1. **Onboarding scope: request ALL agencies from POCDEX, but whitelist which agencies are actually let into Compass on our side.**
   - **Why:** POCDEX doesn't need visibility into the pilot-agency rollout sequence — whitelisting is an internal Compass configuration concern, not a data requirement to negotiate with Huiting.
   - **Impact:** Simplifies the ask to Huiting — "give us all agency data," not a moving pilot-agency list.

2. **Active officers only for MVP data requirements.** Inactive officer handling deferred to 2–3 weeks post-MVP launch (contingent on CAM integration).
   - **Why:** CAM integration (which would give real-time deactivation signal) isn't ready. Building a workaround now would be throwaway work.
   - **Impact:** Team flagged risk — need an SOP in place for inactive officers even before CAM is ready, since risk assessment will ask "what happens the moment we launch."

3. **Excluded employment types confirmed: TIVO (temp/intern/volunteer/others), ADJUNCT (Cumulus-specific), and CASUAL (both HRPS and Cumulus).**
   - **Why:** These employment types are out of scope for Compass access.
   - **Impact:** Must be explicit in the requirements doc — use exact term "ADJUNCT" for the Cumulus-specific exclusion.

4. **Double-hatting (officer holding 2+ positions): request BOTH positions from POCDEX; display logic (which to show) is decided on Compass's side, not POCDEX's.**
   - **Why:** If Compass asks POCDEX for pre-filtered "highest allocation only" data, the team loses flexibility to change display logic later without re-asking POCDEX (which has been slow/resistant to repeat requests).
   - **Impact:** For MVP, working assumption is display-by-highest-staff-allocation-percentage, but the underlying data pull includes both positions. Need job family, job function, and job grade fields for each position to support this. Michelle: volume of double-hatting officers is assumed low — worth asking POCDEX for the actual number if available.

5. **Seconded officers: request ONLY the seconded (current) agency position from POCDEX, not the home/mother agency.**
   - **Why:** Simplifies the requirement — home agency data is an "upstream problem" outside Compass's ask.
   - **Impact:** Clear, simple line to give POCDEX as a requirement.

6. **Sync cadence: daily API pull, not real-time.** POCDEX's underlying HR system sync (HRPS/Cumulus → POCDEX) is also daily, so real-time polling on Compass's end would provide no additional freshness.
   - **Why:** Employment details don't change frequently enough to justify real-time infrastructure cost. Confirmed the API mechanism itself was already established at project start — this is not a new ask to POCDEX, just confirming the existing daily-refresh understanding.
   - **Impact:** No infrastructure change needed on POCDEX's side. Resolves part of open item #56 (sync cadence question) — **confirms daily cadence, not near-real-time as the POCDEX Integration PRD currently assumes.** PRD risk sizing (OTEP-337 fallback state) should be revisited against this.

7. **Two separate APIs needed: one for active officers, one for inactive officers.**
   - **Why:** Mixing active/inactive status in a single API/file would make records messy to reconcile (same problem pattern as OTG's current fortnightly file-diff process for detecting inactive users).
   - **Impact:** Inactive-officer API can be requested now (data requirement documented) even though it won't be *used* until post-MVP — avoids having to re-ask Huiting later, which the team expects would be difficult ("she will come strangling each and every one of us" — i.e., known to be a difficult ask to repeat).

8. **Data retention: default working assumption is 1 year for inactive/departed officer profiles, pending confirmation this matches OTG's existing policy (OTG anonymizes after 1 year, irreversibly).**
   - **Why:** Need an SOP-level retention answer for the risk assessment / data officer conversation, independent of whether CAM integration is ready.
   - **Impact:** Open question whether Compass should match OTG's 1-year policy or use a different figure (someone floated "three years," unresolved in transcript — needs explicit confirmation, not left ambiguous). **Flag: this number is not firmly settled — confirm before it goes in a formal SOP.**

9. **No-pay-leave (>90 days) officers: handled entirely via WOG AD deactivation (existing 5-14 day deactivation policy), not via Compass-side logic.** Compass will not receive a no-pay-leave flag from POCDEX — it wasn't confirmed as an available data field, and the team agreed not to request it.
   - **Why:** WOG AD already handles this deactivation independently; asking POCDEX for an additional flag adds complexity without a clear need. If Compass can't detect an officer's employment record via missing-user comparison, it's treated as inactive/deactivate — same treatment as officers who've left service.
   - **Impact:** Simplifies the requirement set to Huiting — one less field to negotiate.

10. **MHA sub-agency codes: Rama will provide the exact agency code list; team aligns the role-profile Excel sheet to match her codes (not the other way around).**
    - **Why:** The 7 MHA sub-agencies are already elevated to individual-agency status in the role profile, sourced from HR systems (agency HR) plus manual intervention by the team. Rama asked for the agency codes so both sides use the same acronyms/codes.
    - **Impact:** No new field introduced — the role-profile Excel sheet already has an agency column; team will key in Rama's codes once received, so both sides are code-aligned instead of name-matching (which is fragile — names are easy to transpose incorrectly, codes are more reliable to match against).

11. **No `endDate` field needed for position records.** Compass is only requesting active positions, so future-dated/advance end dates aren't relevant.
    - **Why:** Simplifies the requirement — Compass isn't handling forward-looking position changes for MVP.
    - **Impact:** One fewer field to request from POCDEX.

12. **Double-hatting resolved via POCDEX's existing `isPrimary` field (true/false per position), not staff allocation percentage.** `isPrimary` is set upstream by HRPS/Cumulus (not by POCDEX) when employment records are created, and is meant to identify which of an officer's multiple records is their real/current primary position (vs. stale past records that HR systems sometimes leave behind — e.g. a Cumulus officer with 10 records where 9 are not actually true/current).
    - **Why:** Avoids Compass having to compute or request allocation-percentage logic — POCDEX already carries a purpose-built flag for this. Team's working assumption is `isPrimary` correlates with highest staff allocation, but this needs confirming with the POCDEX/Huiting side — there's a known edge case where two positions have both returned `true` and the team couldn't explain why.
    - **Impact:** For double-hatting, Compass will request all positions + the `isPrimary` flag per position, and display the one marked `true`. Not mandatory to resolve immediately, but flag the "both true" edge case to Huiting rather than silently assuming 50/50 or picking one arbitrarily.
    - **Superseded/refines Decision #4 above** — the original "highest allocation percentage" framing is replaced by "use POCDEX's `isPrimary` flag," which is simpler and doesn't require Compass-side computation.

13. **Remove the "seconded" indicator field — not needed.** Compass isn't displaying whether an officer is on secondment; only the current (seconded) position is ever shown, so a separate flag is redundant. Team explicitly agreed to delete this to reduce noise.
    - **Why:** No business use case identified for surfacing secondment status to the officer or in the profile.
    - **Impact:** One fewer field in the requirements doc.

14. **Position-level "status" field: not needed for MVP.** The team distinguished officer-level status (from Decision #2/#9 above, already confirmed active-only) from position-level status (which would track things like role/position changes within an agency — landing vs. holding a position). Since Compass only requests active positions, position-level status becomes redundant — POCDEX would only ever return active positions to begin with.
    - **Why:** Business requirements already state "active positions only," making a separate status field unnecessary. Also ties back to the core question the team resolved: Compass is not building a working-history/career-timeline view for MVP, only current-state profile + recommendations.
    - **Impact:** Simplifies requirements further. If Compass needs to detect a position change later, it will do so by comparing position ID between API calls (if position ID doesn't match a previous pull, treat as a changed/new position), not via a status field.

15. **Historical position data: not required for MVP.** Decided the profile page will show current active position(s) and current competencies only — not a full working-history timeline. A future "supervisor dashboard" use case might need historical data, but that would be a new, separate ask to POCDEX (or deferred to UHDP) when that direction is confirmed.
    - **Why:** Avoids scope creep into a use case (career/working history tracking) that hasn't been designed or committed to. Also avoids taking on POCDEX's 7-year employment-detail retention policy for data Compass doesn't yet have a confirmed use for.
    - **Impact:** Requirements doc to Huiting should not ask for historical/past position records. If retention question comes up, note POCDEX itself retains employment details for up to 7 years — a separate figure from Compass's own retention policy question (Decision #8, still unresolved as 1 vs. 3 years).

---

## Schema Cross-Check (Post-Meeting, 2026-07-13)

Michelle shared the actual POCDEX data model, data dictionary (33 tables, 609 columns), and live API documentation after this meeting. Cross-referencing against Decisions #1–15 above:

### Correction to Decision #12 (`isPrimary` / double-hatting)

**The meeting conflated two distinct flags into one "`isPrimary`" concept — they are separate fields at separate levels:**

- **`employment.primary_position`** (schema) / **`is_primary`** (API, on the *employment* object) — identifies which of an officer's multiple **employments** (e.g. main agency vs. secondment) is primary.
- **`position_jobinfo.main_position_indicator`** (schema) / **`is_main_position`** (API, on the *position* object, nested under an employment) — identifies which of an officer's multiple **positions within a single employment** (e.g. double-hatting inside one agency posting) is the main one.

**This likely explains the "two positions both true" edge case flagged in Decision #12** — if the team's ad-hoc query or manual check compared across the wrong level (e.g. checking `is_main_position` across two different *employments* instead of within one), it would appear both are "true" when in fact each is true within its own employment context. **Recommend re-checking that specific incident against the correct field/level before treating it as an unexplained data quality issue with Huiting** — it may resolve without needing to ask her anything.

The live API sample response actually demonstrates working double-hatting: one officer, one employment, two concurrent positions — `is_main_position: true, staffing_percentage: 100` and `is_main_position: false, staffing_percentage: 0`. This confirms the mechanism the team assumed exists, does exist and behaves as expected in the documented contract.

**Action needed:** Decision #12 and its open question should be reframed around `is_main_position` (position-level), not a single ambiguous "`isPrimary`" — and the requirements doc to Huiting should ask for both `employment.is_primary` and `position.is_main_position` explicitly, since double-hatting could theoretically occur at either level (multiple employments, or multiple positions within one employment) and the meeting only really discussed the latter case.

### New gaps surfaced by the schema (not discussed in the meeting at all)

1. **Security clearance data exists in POCDEX and was never mentioned.** `officer.security_clearance` / `security_clearance_start_date` / `security_clearance_end_date` (also a standalone `security_clearance` table) is explicitly described as "crucial for physical and digital access gating" and "crucial for cross-agency transfers." Compass's access model wasn't discussed against this at all — worth confirming whether Compass needs this for anything (e.g. gating access to certain opportunity types) or can explicitly exclude it. If excluded, that should be a stated decision, not a silent omission.

2. **`reporting_manager` fields exist and weren't discussed.** `employment` carries `reporting_manager_id`, `reporting_manager_name`, `reporting_manager_email`. Not needed for the current MVP profile/recommendation use case as scoped, but worth flagging since Decision #15 mentions a possible future "supervisor dashboard" — this is the exact field that dashboard would need, and it's already available today. Worth noting for R1/R2 scoping rather than rediscovering it later.

3. **`contingent_worker` / `contingent_worker_type` fields exist on `employment`** — this may be relevant to the TIVO/ADJUNCT/CASUAL exclusion logic in Decision #3. Worth checking whether these fields are a cleaner way to identify excluded employment types than matching on `employment_type` string values, which the meeting treated as free text ("must put the exact term ADJUNCT").

4. **The `officer.status` field (officer-level) vs. `employment.status` (employment-level) vs. `position_jobinfo.status` (position-level) are three separate status fields.** The meeting's Decision #14 concluded "position-level status is redundant" — but the schema shows officer, employment, and position status are three genuinely independent fields that could diverge (e.g. an officer could be `active` overall while a specific employment or position record is not). Worth double-checking the "we don't need position status" conclusion against this — the decision may still be right for MVP, but the reasoning in the meeting ("if we only request active, status is redundant") assumes POCDEX pre-filters by status before returning results, which isn't confirmed anywhere in the API docs. **The `GET /employments` endpoint explicitly supports a `status` query parameter (`active`/`terminated`)** — this means Compass does have to actively pass `status=active` as a filter; it isn't automatic. Worth confirming the same filtering exists (or doesn't) at the position level, since `GET /positions` in the sample API doc shows no such query parameter — meaning **position-level status filtering may not be possible on POCDEX's side at all**, which would mean Compass does need to check `position_jobinfo.status` client-side after all. This directly contradicts Decision #14's reasoning and is worth re-opening.

5. **The identity resolution endpoint (`POST /v1/officers/identity/resolve`) reveals a two-path lookup: by email OR by NRIC/FIN — not NRIC alone.** The meeting's Decision on NRIC as the matching key (and the unresolved "Malaysian officers" / non-NRIC question flagged earlier) has a partial answer already built into the API: email is a valid alternative lookup path. Worth confirming with Huiting/engineering whether foreign national officers without NRIC have their email reliably populated, and whether Compass should fall back to email-based resolution for that population rather than leaving it as an unresolved edge case.

6. **`id_type` is a full lookup category (via `pocdex_code`), not just NRIC** — the schema confirms `id_type` supports NRIC, FIN, Passport, etc. This directly supports using email/FIN as a fallback for the Malaysian-officer gap (see #5 above) rather than treating non-NRIC officers as unsupported.

7. **The current API implementation is fixture-backed, not live.** The API doc states: "In-memory JSON fixtures loaded at startup — no database required. 30 officers seeded." This is a significant fact not mentioned in the meeting — everything discussed (sync cadence, delta vs. full load, `isPrimary` edge cases) was reasoned about the *target* production behavior, but the actual current build is a mock/stub with fixture data, not connected to real POCDEX. This matters directly for open item #58 (QA/UAT infra blockers) and the earlier flag that "current Compass repo code runs against static fixture data" (open item #31) — **this confirms that flag, rather than resolving it.** Any test-data-prep guidance the team owes engineering (per the open question on record-propagation timing) needs to account for the fact that today's environment can't actually demonstrate real sync behavior yet.

8. **Competency data has its own source-of-truth question the meeting didn't touch.** POCDEX's `competency` table exists and is populated (`wog_competency_indicator` field distinguishes WOG-wide vs. agency-specific competencies), but this may or may not be the same source Imelda's team owns for the OTG-side competency SSOT (open items #18/#41). Worth confirming whether POCDEX's competency data and Imelda's competency master list are the same system, overlapping systems, or genuinely separate — if separate, there's a reconciliation question neither this meeting nor the existing open items have addressed.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Convert today's business requirements discussion into structured written form for Rama's review | Xian Zhang (+ team) | Not specified — needed before Rama can seek Mark's approval | 🔴 High | 🔴 Not Started |
| Rama to review business requirements, add use-case context per data table (why each field/table is needed), then route to Mark for approval | Rama | Not specified | 🔴 High | 🔴 Not Started |
| Confirm exact data retention period (1 year vs. other figure floated) before it goes into a formal SOP | Michelle | Before SOP is finalized | 🟡 Medium | 🔴 Not Started |
| Strip internal-only questions/comments from the draft requirements doc before it goes to Huiting — she should only see the finalized ask, not the team's internal back-and-forth | Xian Zhang | Before doc is sent to Huiting | 🟡 Medium | 🔴 Not Started |
| Confirm with POCDEX/Huiting whether `isPrimary` can validly be `true` for more than one position — known unresolved edge case from a past incident | Michelle / Xian Zhang | Before double-hatting logic is finalized | 🟡 Medium | 🔴 Not Started |
| Get a firm answer from "Grace Ming" (name uncertain — garbled transcription) on typical record-update propagation time from source system to POCDEX-visible change | Michelle | TBC | 🟡 Medium | 🔴 Not Started — flagged as currently unanswerable |
| Rama to provide exact MHA sub-agency codes; team to key them into the role-profile Excel sheet once received | Rama (provides codes) → Michelle/Xian Zhang (keys in) | Not specified — Rama to follow up | 🟡 Medium | 🔴 Not Started |
| Re-check the "two positions both `isPrimary`=true" incident against the correct field/level (`employment.is_primary` vs. `position.is_main_position`) — may resolve without needing to ask Huiting | Xian Zhang / engineering | Before flagging the edge case to Huiting | 🔴 High | 🔴 Not Started |
| Confirm whether Compass needs `security_clearance` data for anything (access gating, cross-agency transfer handling) or can explicitly exclude it | Michelle | Before requirements doc finalized | 🟡 Medium | 🔴 Not Started |
| Confirm whether POCDEX's `contingent_worker`/`contingent_worker_type` fields are a cleaner way to identify TIVO/ADJUNCT/CASUAL exclusions than string-matching `employment_type` | Xian Zhang / engineering | Before requirements doc finalized | 🟢 Low | 🔴 Not Started |
| Confirm whether position-level status filtering exists on POCDEX's side (no `status` query param shown on the positions endpoint in current API docs) — if not, Decision #14 needs revisiting since Compass would need to filter client-side | Xian Zhang / engineering | Before requirements doc finalized | 🔴 High | 🔴 Not Started |
| Confirm whether email-based identity resolution is a viable fallback for officers without NRIC (e.g. Malaysian officers) — API already supports this lookup path | Michelle | Before requirements doc finalized | 🟡 Medium | 🔴 Not Started |
| Confirm whether current Compass build's fixture-backed POCDEX API (30 seeded officers, no live DB) affects any test-data-prep guidance owed to engineering | Michelle | Before answering the "record propagation timing" open question | 🟡 Medium | 🔴 Not Started |
| Confirm whether POCDEX's `competency` table is the same source as Imelda's competency SSOT (#18/#41), an overlapping system, or fully separate | Michelle | Before competency requirements are finalized | 🟡 Medium | 🔴 Not Started |

**Notes:**
- No due dates were given for most items in this transcript — this session was working-level scoping, not a commitment meeting. Recommend attaching real dates when the written requirements doc is drafted.
- This directly unblocks open item #55 (Huiting ask) — Rama has a draft response due "week of 13 Jul" per the existing tracker; this session's output should feed that draft.

---

## Key Insights

**On working with Huiting/POCDEX specifically:**
- Team characterized her as the sole approver ("she's the only person that will say yes or no. Most of the time she say no") and generally resistant to follow-up asks once an initial data set is agreed — reinforces the strategy of requesting broader/inactive data now even if unused until post-MVP, rather than re-asking later.
- POCDEX (labeled "products" throughout the garbled transcript) is being phased out in favor of UHDP — Huiting may push to defer some requirements into the UHDP system rather than build them into the current POCDEX API. Worth watching for scope-deferral pressure from her side, not just engineering readiness.

**On CAM dependency:**
- Real-time deactivation/access-check via CAM integration is explicitly **not for MVP** — target is "end of hour" per Xian Zhang (likely means end of some near-term milestone, possibly a mis-transcription of a specific date — needs clarification) versus at least a month of integration effort.
- This is a second CAM-related timeline flag this week, alongside #58 (QA/UAT infra blockers, which also referenced connectivity setup for external integrations). Worth checking if CAM readiness is a related or same underlying constraint.

**On the "non-CFT/non-POCDEX agencies" question:**
- Briefly touched: for agencies whose HR data doesn't flow through POCDEX at all, the team's direction is to push those agencies to pipe their data to POCDEX or UHDP directly, not to Compass. Michelle explicitly did not want Compass to become the integration point for "high-risk workforce cases" outside the standard pipe. This is a scope-protection stance worth remembering if it resurfaces.

---

## Open Questions

- [ ] What is the actual data retention period for inactive Compass profiles — 1 year (matching OTG) or a different figure? — **Owner:** Michelle — **By:** before SOP finalized
- [ ] Typical time for a record change to propagate from source system into POCDEX-visible API response — **Owner:** Michelle (needs answer from "Grace Ming" / POCDEX side) — **By:** TBC, currently blocking test-data prep guidance for the team
- [ ] Does the API support delta or full loads? — flagged as unresolved, deferred until requirements scenarios are settled — **Owner:** Xian Zhang/team — **By:** before requirements doc finalized
- [ ] Can `isPrimary` validly be `true` for more than one of an officer's positions? Team has seen this happen before with no explanation. — **Owner:** Michelle/Xian Zhang — **By:** before double-hatting display logic is finalized
- [ ] Should Compass's own data retention match OTG's 1-year policy, POCDEX's 7-year employment-detail retention, or a different figure (3 years was floated once, unconfirmed)? — **Owner:** Michelle — **By:** before SOP finalized (note: this is now two separate, still-unresolved numbers — Compass's own retention vs. POCDEX's source retention — don't conflate them)

---

## Timeline Risks

- **TIMELINE RISK:** This session confirms POCDEX sync is **daily**, not near-real-time — but per open item #56, the POCDEX Integration PRD's risk sizing (OTEP-337 unfiltered-listing fallback state) currently assumes near-real-time delivery. This is now a confirmed fact, not an open question — the PRD section should be updated and risk sizing re-checked before it causes a mismatch at UAT (11 Aug).
- **TIMELINE RISK:** No due date given for Xian Zhang's write-up of business requirements, but this blocks Rama's response to Huiting, which is already committed for "week of 13 Jul" (per #55 tracker) — i.e., this week. If the write-up isn't fast-tracked, Rama's committed date is at risk.
- **TIMELINE RISK:** The current `otep-pocdex` API build runs on fixture data (30 seeded officers, no live database) per the API docs, confirming a flag already raised in open item #31 ("current Compass repo code runs against static fixture data... because infra wasn't provisioned"). This means none of today's discussion (sync cadence, delta/full load, `isPrimary` edge cases) can actually be verified against real behavior yet — it's all still an agreed *contract*, not a tested one. Combined with #58 (QA/UAT infra blockers, connectivity/security setup for external integrations including likely POCDEX), there's a real risk that requirements get finalized and sent to Huiting before the team can confirm POCDEX actually behaves as documented once live infra is up.

---

## Related

- `00-hub/open-items.md` #55 (Huiting formal ask — this meeting directly feeds the response), #56 (sync cadence — confirmed daily here), #31 (POCDEX go-live prep — fixture-data flag corroborated by schema cross-check), #58 (QA/UAT infra blockers — may be blocking live POCDEX connectivity)
- [2026-07-06-W28-huiting-data-requirements-teams-message.md](2026-07-06-W28-huiting-data-requirements-teams-message.md) (prior context)
- [POCDEX Authorisation XFN PRD](../../PM-skills-ALL-1/../PM-OS/outputs/prds/2026-06-25-W26-pocdex-authorisation-xfn-kickoff.md) — sync cadence assumption needs updating per this meeting
- POCDEX Data Model and Dictionary, POCDEX API docs (shared by Michelle, 2026-07-13, post-meeting) — source for the Schema Cross-Check section above

---

## Appendix: Raw Transcript

<details>
<summary>Click to expand raw transcript (provided in two parts due to source length limits)</summary>

Part 1 and Part 2 provided by Michelle Yip, 2026-07-13. Part 2 continues directly from the MHA sub-agency discussion cut off in Part 1, and resolves it (Decision #10) plus covers position/status field scoping (Decisions #11–15). If the meeting continued further, provide the next segment to extend these notes.

</details>
