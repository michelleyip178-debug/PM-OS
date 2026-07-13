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

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Convert today's business requirements discussion into structured written form for Rama's review | Xian Zhang (+ team) | Not specified — needed before Rama can seek Mark's approval | 🔴 High | 🔴 Not Started |
| Rama to review business requirements, add use-case context per data table (why each field/table is needed), then route to Mark for approval | Rama | Not specified | 🔴 High | 🔴 Not Started |
| Confirm exact data retention period (1 year vs. other figure floated) before it goes into a formal SOP | Michelle | Before SOP is finalized | 🟡 Medium | 🔴 Not Started |
| Strip internal-only questions/comments from the draft requirements doc before it goes to Huiting — she should only see the finalized ask, not the team's internal back-and-forth | Xian Zhang | Before doc is sent to Huiting | 🟡 Medium | 🔴 Not Started |
| Confirm with POCDEX whether volume of double-hatting officers is significant enough to matter for MVP logic | Michelle / team | Before MVP display-logic build | 🟢 Low | 🔴 Not Started |
| Get a firm answer from "Grace Ming" (name uncertain — garbled transcription) on typical record-update propagation time from source system to POCDEX-visible change | Michelle | TBC | 🟡 Medium | 🔴 Not Started — flagged as currently unanswerable |
| Confirm MHA sub-agency list / "elevated" agency handling against the existing role-profile agency list (from HRPS/Cumulus/WOG AD) — transcript cuts off before this was resolved | Michelle / Xian Zhang | TBC | 🟡 Medium | 🔴 Not Started — discussion incomplete due to transcript cutoff |

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
- [ ] Full MHA sub-agency count and how "elevated" agencies map to the existing role-profile agency list — discussion was cut off in this transcript before resolution — **Owner:** Michelle / Xian Zhang — **By:** TBC
- [ ] Does the API support delta or full loads? — flagged as unresolved, deferred until requirements scenarios are settled — **Owner:** Xian Zhang/team — **By:** before requirements doc finalized

---

## Timeline Risks

- **TIMELINE RISK:** This session confirms POCDEX sync is **daily**, not near-real-time — but per open item #56, the POCDEX Integration PRD's risk sizing (OTEP-337 unfiltered-listing fallback state) currently assumes near-real-time delivery. This is now a confirmed fact, not an open question — the PRD section should be updated and risk sizing re-checked before it causes a mismatch at UAT (11 Aug).
- **TIMELINE RISK:** No due date given for Xian Zhang's write-up of business requirements, but this blocks Rama's response to Huiting, which is already committed for "week of 13 Jul" (per #55 tracker) — i.e., this week. If the write-up isn't fast-tracked, Rama's committed date is at risk.

---

## Related

- `00-hub/open-items.md` #55 (Huiting formal ask — this meeting directly feeds the response), #56 (sync cadence — confirmed daily here), #31 (POCDEX go-live prep)
- [2026-07-06-W28-huiting-data-requirements-teams-message.md](2026-07-06-W28-huiting-data-requirements-teams-message.md) (prior context)
- [POCDEX Authorisation XFN PRD](../../PM-skills-ALL-1/../PM-OS/outputs/prds/2026-06-25-W26-pocdex-authorisation-xfn-kickoff.md) — sync cadence assumption needs updating per this meeting

---

## Appendix: Raw Transcript

<details>
<summary>Click to expand raw transcript (truncated at 50,000 characters by source — meeting continues past the MHA sub-agency discussion)</summary>

See original transcript provided by Michelle Yip, 2026-07-13. Truncated mid-discussion; if the remainder is available, re-run this skill on the continuation to capture the rest (particularly the MHA sub-agency / "elevated agency" resolution, which was cut off).

</details>
