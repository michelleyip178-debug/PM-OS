# Meeting Notes: Squad Sync — R1 Discovery, MVP Readiness, SSO/CSC Alignment

**Date:** July 31, 2026

**Attendees:** Michelle, Li Ting Kway, Amber, Rama Moorthy, Imelda Mo, Jace Tan, Barry Lim, Pow Hwee Tan, and others (Marcus referenced as newer CSC-side contact)

**Meeting Type:** Team planning / engineering sync (multi-topic squad sync)

**Duration:** Not specified

---

## Summary

Discovery on R1 (Job Portal, Opportunities, CMM) is progressing well and reusing existing research. Two structural risks surfaced: the MVP's profile/account sync design has known gaps (duplicate accounts, stale POCDEX data) with no owner or timeline, and nobody in the room could clearly state what's already been shared with CSC on SSO integration specs. Michelle's questioning exposed that gap. Go-live readiness planning has started but ownership across SSP, risk assessment, and operational readiness items is still undefined.

---

## Decisions Made

1. **R1 Job Portal discovery continues using existing research**
   - **Why:** Discovery artifacts already exist; no need to start from scratch
   - **Who decided:** Team
   - **Impact:** Li Ting to review and consolidate findings; team regroups next week

2. **MVP profile sync stays single-sync-only; remediation deferred to post-MVP**
   - **Why:** Fixing duplicate-account and stale-data issues now would delay code freeze/VAPT
   - **Who decided:** Team (implicit, via Imelda/Team ownership of "planned" discovery)
   - **Impact:** Known risk — duplicate accounts and fragmented competencies possible at launch. No owner or timeline yet assigned for the fix itself (see Blockers below).

3. **SSO alignment meeting moved from Friday to Monday**
   - **Why:** Need to compile everything already shared with CSC before proceeding — current alignment call structure isn't working
   - **Who decided:** Team (Rama to drive)
   - **Impact:** Delays SSO alignment by a few days; compresses prep time

4. **UAT will mix mocked, UAT POCDEX, and (later) anonymised production data**
   - **Why:** Balances test coverage with data availability across rounds
   - **Who decided:** Team
   - **Impact:** External test cases to be distributed by Rama; anonymised prod data use needs review

5. **Go-live readiness checklist adopted as baseline tracking mechanism**
   - **Why:** Team is shifting from feature delivery to operationalisation mode
   - **Who decided:** Team
   - **Impact:** Ownership and population of checklist items still in progress — not yet assigned (see Blockers)

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Prepare PRD and user guides for R1 Job Portal discussions | @Michelle | No date — schedule within 48 hours | High | 🔴 Not Started |
| Review existing Job Portal research and consolidate questions | @Li Ting Kway | No date mentioned | Medium | 🟡 In Progress |
| Complete review of stakeholder resources/questions | @Li Ting Kway | Monday | High | 🟡 In Progress |
| Plan MVP profile/account remediation discovery after code freeze | @Imelda Mo / Team | After code freeze/VAPT (date TBD) | High | 🔴 Not Started |
| Gather and consolidate all CSC/SSO communication threads | @Rama Moorthy | Before Monday alignment meeting | 🔴 High | Not Started |
| Clarify integration gaps with Adrian Lo and Poh Yi | @Rama Moorthy | No date mentioned | 🔴 High | Not Started |
| Create agenda and alignment material for CSC integration discussion | @Rama Moorthy | Before Monday | 🔴 High | Not Started |
| Distribute external integration UAT test cases | @Rama Moorthy | No date mentioned | Medium | Not Started |
| Align Pathfinder and Core account provisioning approach | @Rama Moorthy | No date mentioned | High | Not Started |
| Provide GovAssure access and guidance | @Jace Tan | No date mentioned | Medium | Not Started |
| Clarify SSP, risk assessment and classification requirements | @Jace Tan / @Barry Lim | No date mentioned | High | Not Started |
| Determine ownership model for risk assessment activities | @PM leads + Engineering leads | No date mentioned | 🔴 High | Not Started |
| Populate interface/API inventory in readiness checklist | @Technical leads | No date mentioned | Medium | Not Started |
| Clarify enterprise architecture documentation availability | @Pow Hwee Tan / @Barry Lim | No date mentioned | Medium | Not Started |
| Confirm unmoderated usability testing plan and schedule | @Amber | Early next week | Medium | Not Started |
| Review production anonymised data usage for UAT | @Rama Moorthy | No date mentioned | Medium | Not Started |

**Notes:**
- 🔴 Items marked high priority are blocking other work — CSC/SSO thread items in particular block Monday's alignment meeting from being useful.
- Most items have no explicit due date. Recommend Michelle push for dates on the CSC-related items specifically, since Monday is a hard deadline for at least some of the prep work.

---

## Key Insights & Quotes

**Technical Constraints:**
- Profile sync from POCDEX happens once at first login only — no refresh mechanism. Updates in POCDEX after that point will not reflect in Compass.
- Accounts are keyed on email, so dual appointments, transitions, acting appointments, or email changes can all produce duplicate accounts and fragmented competency data.
- This directly extends the known risk already logged in [pocdex.md](../../context-library/prds/pocdex.md) and [wog-authentication.md](../../context-library/prds/wog-authentication.md): "POCDEX first-login pre-fill mismatch" and "stale POCDEX data = wrong pre-filled profile." Today's discussion confirms this risk is accepted for MVP, not resolved.

**Strategic/Political Considerations:**
- Michelle's questioning of the CSC integration state was the most consequential intervention in the meeting — it surfaced that PSD believes integration specs were already provided, while CSC is still asking for them. Nobody could name the specific specs CSC wants, or confirm what was handed over from previous owners (Marcus is newer to the CSC side).
- This is described as an alignment/documentation gap, not a technical blocker — real risk is weeks of stall if both sides assume the other owes deliverables.
- Go-live readiness (SSP, risk assessment, communications, operational readiness) is being introduced as a checklist, but ownership assignment is lagging behind the checklist itself — multiple participants responded "need to discuss" / "not sure yet" when asked who owns specific readiness items.

**Stakeholder Notes:**
- **Rama Moorthy** (per [stakeholder profile](../../context-library/stakeholder-profiles.md)): peer on resourcing and dependency risk, cares about velocity and capacity — he's picked up the bulk of CSC/SSO consolidation action items here, consistent with his usual dependency-risk role. Route escalations to Barry Lim through him as usual.
- **Imelda**: fellow PM, taking MVP profile/account remediation planning — check in async per her existing working pattern.
- **Barry Lim**: resourcing decision-maker per profile; here he's also pulled into SSP/risk classification and enterprise architecture doc questions, which is new territory for him relative to his usual resourcing role — worth confirming that's the right owner or if it should route elsewhere.

---

## Open Questions

- [ ] What specific integration specifications does CSC still need, and what has PSD actually already provided? - **Owner:** @Rama Moorthy - **By:** Before Monday alignment meeting
- [ ] Who owns MVP profile/account remediation (duplicate accounts, stale sync), and on what timeline? - **Owner:** @Imelda Mo / Michelle to push for commitment - **By:** Not yet set
- [ ] Who owns each go-live readiness item (SSP, risk assessment, comms readiness, operational readiness, monitoring readiness)? - **Owner:** @PM leads + Engineering leads - **By:** Not yet set
- [ ] Does CIE belong under Compass, or does it need a separate risk assessment / subsystem treatment? - **Owner:** Unclear — needs assignment - **By:** Not yet set
- [ ] Is enterprise architecture documentation available for the readiness checklist? - **Owner:** @Pow Hwee Tan / @Barry Lim - **By:** Not yet set

---

## Blockers

1. **No consolidated source of truth for CSC/SSO communication history**
   - **Blocked by:** Fragmented emails, requirements, and engineering discussions with no single tracking document
   - **Impact:** Monday's alignment meeting risks repeating this meeting's confusion unless resolved beforehand
   - **Resolution:** Rama to compile a CSC Integration Master Tracker (requirement, owner, PSD-provided?, CSC-acknowledged?, spec provided?, API contract provided?, outstanding questions, next action) before Monday

2. **No owner or timeline for MVP profile/account sync remediation**
   - **Blocked by:** Team has accepted the risk for MVP but hasn't assigned who fixes it or when
   - **Impact:** Duplicate accounts and fragmented competencies remain a live risk into and past launch
   - **Resolution:** Needs explicit owner and timeline commitment, not just "discover after code freeze"

3. **Go-live readiness ownership undefined across SSP, risk assessment, comms, and operational readiness**
   - **Blocked by:** Checklist exists but role assignment hasn't caught up
   - **Impact:** These items frequently become critical-path blockers right before go-live if not started early
   - **Resolution:** Assign owners now rather than waiting for go-live planning

---

## Timeline Risks

- **TIMELINE RISK:** The team is treating Monday's alignment meeting as a fresh start on CSC/SSO alignment, but [wog-authentication.md](../../context-library/prds/wog-authentication.md) already notes "CSC requires ~4 weeks after documentation submission for SSO setup." If documentation hasn't been resubmitted yet pending Monday's alignment, that ~4-week SSO setup clock hasn't started — worth surfacing this explicitly at Monday's meeting so go-live timing accounts for it.
- **TIMELINE RISK:** MVP profile/account remediation is deferred to "after code freeze/VAPT" with no date attached. Without a target, this risks becoming permanently deprioritized once the team moves to whatever comes after MVP.

---

## Context Cross-Reference

- [pocdex.md](../../context-library/prds/pocdex.md) already flags "How will POCDEX go-live support work, given OTEP is the first project?" as an open question needing a planning session with Daryll (POCDEX Team Lead). Today's meeting reinforces this is still unresolved and now has a downstream identity/duplicate-account consequence.
- [wog-authentication.md](../../context-library/prds/wog-authentication.md) already documents the POCDEX-CSC dependency chain and the ~4 week CSC SSO timeline — recommend updating that PRD's open questions/risks section with this meeting's CSC alignment gap finding.
- Li Ting's Job Portal discovery connects to the separate [Inclusive Job Portal notes from the same day](2026-07-30-W31-inclusive-job-portal.md) — both threads are converging on scope discussions with Michelle Chen and should stay in sync.

---

## Next Steps

**Immediate (This Week / Before Monday):**
- Rama to consolidate CSC/SSO communication history into a single tracker
- Rama to build agenda and alignment material for Monday's CSC integration discussion
- Michelle to prepare PRD and user guides for R1 Job Portal
- Li Ting to complete review of stakeholder resources/questions (target Monday)

**Short-term (Next 2 weeks):**
- Assign explicit owners for go-live readiness items (SSP, risk assessment, comms, operational readiness, monitoring)
- Get a timeline commitment for MVP profile/account remediation, not just "post-MVP discovery"
- Resolve CIE governance question (does it sit under Compass, does it need separate risk assessment)
- Amber to confirm unmoderated usability testing plan and schedule

**Follow-up Meeting:**
- **Date:** Monday (SSO/CSC alignment, replacing original Friday session)
- **Purpose:** CSC integration alignment, using consolidated tracker
- **Attendees:** Rama, Michelle (ensure Michelle is invited this time — she was excluded from the original alignment call), Adrian Lo, Poh Yi, CSC counterparts

---

## Context for Future Reference

This meeting is a strong example of a PM intervention creating leverage: Michelle's direct questioning on CSC integration state ("what's been shared, what's outstanding, where's the disconnect") surfaced a real alignment gap that engineering had been treating as a small remaining build task. Worth repeating this pattern — asking for the consolidated source of truth — whenever a cross-team integration seems to be proceeding on assumption rather than confirmed status.

The recommended CSC Integration Master Tracker and readiness-owner assignment are both concrete, low-cost interventions that directly address the two biggest risks in this meeting. Recommend Michelle drive both rather than waiting for Rama/PM leads to self-organize, given the "we need to discuss" pattern seen on ownership questions.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw notes</summary>

Squad Sync — R1 discovery and planning (Job Portal, Opportunities, CMM); MVP readiness and technical debt; SSO/CSC integration alignment and go-live readiness.

Full executive summary, risks, decisions, and action items as provided by the PM, covering: R1 Job Portal discovery progress, MVP profile/account sync limitations, go-live readiness governance discussion, and CSC/SSO integration ambiguity surfaced by Michelle. See action items table above for full owner/status breakdown as originally provided.

</details>
