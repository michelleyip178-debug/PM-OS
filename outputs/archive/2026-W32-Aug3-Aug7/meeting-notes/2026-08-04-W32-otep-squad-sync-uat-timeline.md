# Meeting Notes: OTEP Squad Sync — UAT/SIT Timeline Alignment

**Date:** 2026-08-04

**Attendees:** Michelle Yip, Adrian Ang, Rama Moorthy, Imelda Mo, Pow Hwee Tan, Victor (VAPT)

**Meeting Type:** Team sync — cross-workstream timeline and dependency review

**Duration:** Not specified

**Delivery health assessment (from source material):** 🟡 Amber

---

## Summary

The squad surfaced real timeline risk across CSC integration, SSO, JumpStart, Products APIs, internal UAT, and VAPT — several embedded assumptions got challenged and clarified in the room. But the meeting also confirmed there's no single reconciled master timeline: multiple people, including Michelle as the PM owning the UAT stream, expressed active confusion about sequencing across Internal UAT, CSC SIT, CSC UAT, SSO SIT, Products API readiness, and a newly-proposed UAT Phase 3. Adrian pushed the strongest programme-management move of the meeting — deploy to UAT immediately after SIT completes instead of waiting until end-August — which pulls forward defect discovery and protects the VAPT runway.

---

## Decisions Made

1. **CSC SSO SIT likely moves to next week.**
   - **Why:** Internal UAT preparation currently takes priority for the team's capacity.
   - **Who decided:** Team consensus (implied — not explicitly attributed in source).
   - **Impact:** Directly affects the WS3 SIT window already tracked (27 Jul–7 Aug) — a slip into "next week" pushes past the previously assumed 7 Aug SIT close. See Timeline Risks below.

2. **Internal UAT still targeted around Thursday/Friday.**
   - **Why:** Contingent on the outcome of the Products API discussion and the fixture-data workaround.
   - **Who decided:** Team consensus.
   - **Impact:** Not yet locked — depends on an unresolved external input (Johnny's decision on the fixtures workaround).

3. **Workstreams 1, 2, and 4 require aligned account setup across Career Compass, CSC, and JumpStart.**
   - **Why:** True end-to-end testing needs one learner account that resolves consistently across all three systems.
   - **Who decided:** Team consensus, surfaced as an architecture dependency during discussion.
   - **Impact:** Currently coordinated informally via email, not a formal readiness checklist — flagged as an execution risk (see Risks).

4. **Team will attempt to avoid UAT Phase 3.**
   - **Why:** Adrian pushed back hard on the emerging Phase 1/Phase 2/proposed-Phase 3 fragmentation — WD BOs are already scheduled around an existing plan, and each additional phase adds communication and scheduling burden.
   - **Who decided:** Adrian proposed; Rama agreed to pursue earlier CSC deployment into UAT with CSC stakeholders to avoid the need for a third phase.
   - **Impact:** This is the single most consequential proposal from the meeting — reframes the sequence from "SIT finishes → wait until end-August → CSC UAT" to "SIT finishes → deploy to UAT immediately → BOs start testing earlier → bugs surface earlier," which directly protects the VAPT timeline.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Send/update CSC stakeholders requesting earlier UAT deployment | Rama Moorthy | Not specified | 🔴 Critical | 🔴 Not Started |
| Push for CSC deployment into UAT immediately after SIT (not end-August) | Rama Moorthy | Not specified | 🔴 Critical | 🔴 Not Started |
| Clarify account setup requirements with CSC and JumpStart | Rama Moorthy | Not specified | High | 🔴 Not Started |
| Follow up after Johnny discussion on Products APIs | Rama Moorthy | Not specified | High | 🔴 Not Started |
| Update internal UAT schedule | Rama Moorthy | Not specified | High | 🔴 Not Started |
| Clarify VAPT requirements with Victor | Rama Moorthy | Not specified | 🔴 Critical | 🔴 Not Started |
| Create separate ticket for infra issue | Rama Moorthy | Not specified | Medium | 🔴 Not Started |
| Support CSC stakeholder escalation if required | Adrian Ang | Not specified | Medium | 🔴 Not Started |
| Work offline with Rama on timeline compression strategy | Adrian Ang | Not specified | High | 🔴 Not Started |
| Continue Products API and account setup coordination | Adrian Ang | Not specified | Medium | 🔴 Not Started |
| Continue preparing opportunities data for UAT upload/testing | Michelle Yip | Not specified | Medium | 🟡 In Progress |
| Sync with Pathfinder side on opportunity-related UAT readiness | Michelle Yip | Not specified | Medium | 🔴 Not Started |
| Await updated internal UAT schedule after Products discussion | Michelle Yip | Not specified | — | 🔴 Blocked |
| Investigate remaining issue raised by Kingsley | Imelda Mo | Not specified | Medium | 🔴 Not Started |
| Support profile-related setup and validation | Imelda Mo | Not specified | Medium | 🔴 Not Started |
| Assist with CSC/JumpStart account alignment discussion | Imelda Mo | Not specified | Medium | 🔴 Not Started |
| Clarify data source and import logic readiness | Imelda Mo | Not specified | Medium | 🔴 Not Started |

**Notes:**
- **No due dates were captured for any of these 17 action items** — per the skill's own quality check, items with no due date should be scheduled within 48 hours. Given how many of these are on the critical path (Rama's CSC/VAPT items especially), this is itself a risk, not just a formatting gap.
- Rama is carrying 7 of the 17 action items, several critical-path (CSC escalation, VAPT clarification) — worth a capacity check given [Risk 5](#risks-not-adequately-addressed) below flags the team is already split across SIT support, internal UAT support, infra, and defect fixing.

---

## Key Insights & Quotes

**What went well:**
- Risks were surfaced early rather than discovered later — Adrian, Michelle, and Imelda actively challenged embedded assumptions instead of accepting the plan as given.
- Michelle raised that the UAT timeline had changed and the broader team might not be aware of it.
- Adrian challenged why CSC UAT needed to wait until end-August specifically.
- Imelda questioned whether SIT data is representative enough to validate UAT.
- Victor raised VAPT scope concerns (see Risk 6).
- Adrian's SIT→immediate-UAT-deployment proposal is the strongest programme-management move in the meeting — it pulls forward defect discovery and directly protects the VAPT runway.
- Internal UAT prep looks comparatively mature: profiles/personas in progress, opportunity files already prepared by Michelle, Products team providing 20 personas, engineers attempting a fixture-based workaround, and Thoughtworks already on standby for defect fixing.

**What didn't go well:**
- **Direct quote, Michelle:** "I'm very confused right now in terms of the entire timeline." The PM owning the UAT stream expressing this is a signal that timeline communication has broken down somewhere upstream, not just a personal gap.
- The discussion mixed six distinct timelines — Internal UAT, CSC SIT, CSC UAT, SSO SIT, Products API readiness, and a proposed Phase 3 — without ever referencing one authoritative source. The programme currently lives in people's heads, not in one tracked document.
- Four unresolved assumptions surfaced: (1) CSC can provide actual UAT/staging data — not confirmed; (2) CSC account setup can be done quickly — not confirmed; (3) JumpStart and CSC data are aligned — actually **known not to be aligned**; (4) Products' fixture-data workaround will be accepted — still pending Johnny's input.
- External dependency management (CSC, JumpStart, Products, Infra) showed no evidence of committed dates, an escalation path, a dependency register, or reviewed formal owners during the meeting itself.

---

## Open Questions

- [ ] Can CSC actually provide real UAT/staging data, or will UAT run against unrepresentative SIT-quality data? — **Owner:** Rama — **By:** Before UAT readiness is declared
- [ ] Can CSC account setup happen quickly enough to support an earlier UAT deployment? — **Owner:** Rama / Adrian — **By:** Before the earlier-deployment ask is finalized with CSC
- [ ] Will Products' fixture-data workaround be accepted for internal UAT? — **Owner:** Pending Johnny — **By:** Before Thursday/Friday internal UAT target
- [ ] Are APIs exposed through CIE in scope for VAPT? Victor and Rama's answer was "probably yes, but let's discuss offline" — this needs to close, not stay open, given how close VAPT sits to the UAT/go-live chain. — **Owner:** Rama / Victor — **By:** Not specified, flagged as urgent
- [ ] Who owns overall dependency coordination across CSC, JumpStart, Products, and Infra? — **Owner:** Unassigned — **By:** Immediately — this is the same "no single integration-readiness owner" pattern flagged in [yesterday's SIT readiness sync](2026-08-03-W32-csc-otep-sit-readiness.md)

---

## Risks Not Adequately Addressed

1. **VAPT delay (highest risk).** Chain: CSC delay → UAT delayed → bug discovery delayed → bug fixing delayed → VAPT delayed → go-live delayed. Adrian named VAPT as the most critical external dependency, but no explicit contingency plan was discussed for the scenario where CSC cannot support earlier UAT deployment. **This directly compounds the unresolved VAPT closure-date conflict already tracked** (16 Oct vs. 23 Oct, `open-items.md`/`risks.md` #39, flagged 31 Jul, still unconfirmed as of today) — a CSC-driven slip on top of an already-uncertain VAPT end date doubles the exposure on the 19–23 Oct go-live approval window.

2. **UAT scope fragmentation.** Phase 1, Phase 2, and a proposed Phase 3 have emerged. Every additional phase adds communication burden, scheduling burden, and stakeholder confusion — acknowledged in the room but not planned for. Adrian's pushback (avoid Phase 3 entirely) is the mitigation in progress, not yet confirmed.

3. **Test data integrity.** Imelda's point: a successful SIT does not guarantee a successful UAT if SIT data isn't representative of real CSC course data. Parsing, mapping, and recommendation issues could surface late if this gap isn't closed before UAT starts.

4. **Cross-system user account dependency.** One learner account must resolve correctly across Career Compass, CSC, and JumpStart for genuine end-to-end testing — currently coordinated by email, not governed by a formal readiness checklist. Directly relevant to the [end-to-end Course Journey test gap](2026-08-04-W32-csc-sit-uat-tracker-restructure.md) already flagged as the single biggest coverage gap in the CSC SIT/UAT tracker.

5. **Hidden resource capacity risk.** The team is split across SIT support, internal UAT support, infra setup, and defect fixing simultaneously. Pow Hwee noted current priority is UAT preparedness — meaning a schedule slip on any one workstream could quickly become a resource bottleneck across all of them, not just a date problem.

6. **VAPT scope ambiguity.** Whether CIE-exposed APIs fall under VAPT scope was left as "probably yes, discuss offline" — security scope uncertainty this close to UAT is dangerous, and any scope addition later risks both timeline and cost.

---

## Timeline Risks

- **TIMELINE RISK:** "CSC SSO SIT likely moves to next week" directly conflicts with the SIT window already tracked in the [CSC SIT/UAT tracker](2026-08-04-W32-csc-sit-uat-tracker-restructure.md) (27 Jul–7 Aug, 3 working days remaining as of today). If SIT slips into the week of 10 Aug, that's past the tracked SIT close entirely — the tracker's SIT exit criteria (SSO connectivity test Aug 6 target, Learn Course Page verification Aug 7 target, defect fix window Aug 11–12) all need to shift, and this hasn't been reconciled yet.
- **TIMELINE RISK:** This meeting surfaces a **third UAT timeline** alongside the two already in tension: (1) OTEP-wide UAT, 11 Aug–4 Sep (`open-items.md` #39), (2) CSC-track UAT, 24/25 Aug–4 Sep (per the Confluence SIT/UAT doc), and now (3) "Internal UAT" targeted for Thursday/Friday this week, distinct from both. The meeting's own diagnosis — confusion from mixing multiple timelines without one authoritative source — is confirmed by this cross-check: none of PM-OS's tracked files currently distinguish "Internal UAT" as separate from the OTEP-wide UAT window. This needs clarifying before the next planning touchpoint.
- **TIMELINE RISK:** Adrian's proposal to deploy to UAT immediately after SIT (rather than waiting until end-August) directly conflicts with the CSC-track UAT window already documented in the Confluence tracker (24/25 Aug start). If Rama succeeds in pulling this forward, the tracker's UAT entry/exit criteria and dates need updating — this is a live negotiation, not yet a confirmed change, so don't update the tracker until Rama confirms CSC's response.
- **TIMELINE RISK:** The VAPT closure-date conflict (16 Oct vs. 23 Oct, unresolved since 31 Jul) and this meeting's VAPT delay risk compound each other. If CSC-driven delays push UAT/bug-fixing later AND the VAPT window is actually 23 Oct (not 16 Oct), the go-live approval window (19–23 Oct) could lose more than the already-identified 7 days of buffer. This should be raised together, not as two separate risks, when this goes to Rama or a senior-level review.

---

## PM Readout (from source material — Michelle's assessment)

**Delivery health: Amber.**

The meeting's biggest risk is no longer engineering — it's dependency coordination and timeline alignment. Recommended single highest-value intervention: **a UAT Readiness War Room Tracker**, with columns for Workstream | Owner | Dependency | Target Date | Risk | Blocker, specifically tracking Products API, Personas, Profile data import, Opportunity data import, CSC course file, CSC learner file, JumpStart account setup, CSC account setup, SSO readiness, and VAPT scope sign-off.

**Cross-reference:** this is close to but broader than the [CSC SIT/UAT tracker](2026-08-04-W32-csc-sit-uat-tracker-restructure.md) already built this week — that tracker covers the four CSC workstreams (Course, Learner File, SSO, JumpStart) in detail but doesn't yet include Products API readiness, Personas, or Profile/Opportunity data import as tracked rows. Worth deciding whether to extend the existing tracker to cover the full War Room scope, or keep them as two separate artifacts (CSC-specific vs. programme-wide).

---

## Next Steps

**Immediate (This Week):**
- Rama sends the earlier-UAT-deployment request to CSC stakeholders
- Rama clarifies VAPT/CIE scope question with Victor — currently "discuss offline," needs to actually close
- Reconcile the SSO SIT slip ("moves to next week") against the tracked SIT window (27 Jul–7 Aug) in the CSC SIT/UAT tracker
- Clarify what "Internal UAT" is relative to the two other tracked UAT windows (OTEP-wide #39, CSC-track) — this is the confusion Michelle named directly in the meeting

**Short-term (Next 2 weeks):**
- Decide whether to build the War Room Tracker as a standalone artifact or extend the existing CSC SIT/UAT tracker
- Confirm whether Phase 3 UAT is genuinely avoided or still a live possibility
- Close the four unresolved assumptions (CSC UAT data, CSC account setup speed, JumpStart/CSC data alignment, fixtures workaround acceptance)

**Follow-up Meeting:**
- Not explicitly scheduled in source material — given the number of unresolved cross-workstream items, a short dedicated timeline-reconciliation session (separate from the recurring Squad Sync) may be worth proposing.

---

## Context for Future Reference

This meeting directly extends two threads already active in PM-OS this week:

1. **[Yesterday's CSC/OTEP SIT readiness sync](2026-08-03-W32-csc-otep-sit-readiness.md)** flagged the same underlying pattern — no single integration-readiness owner, ownership "derived live" instead of pre-established, and Michelle's PM readout there recommended the same kind of consolidated tracker now echoed as the "War Room Tracker" recommendation in this meeting. This is the second time in two days the same structural gap has surfaced independently.

2. **The [CSC SIT/UAT tracker](2026-08-04-W32-csc-sit-uat-tracker-restructure.md)** built earlier today already tracks WS1–WS4 in detail, including the exact SIT window (27 Jul–7 Aug) this meeting says may slip. The "SSO SIT likely moves to next week" decision needs to be reconciled against that tracker's SIT exit criteria before the tracker is next updated.

3. **The VAPT date conflict** (16 Oct vs. 23 Oct, `open-items.md`/`risks.md` #39) remains unresolved and now has a second, related risk stacked on top of it (this meeting's VAPT delay chain) — both should be raised together at the next senior-level touchpoint rather than tracked as isolated risks.

**Pattern worth naming explicitly:** three separate sessions in two days (yesterday's SIT readiness sync, today's Squad Sync, and the tracker-building work) have each independently concluded that the core problem is missing consolidated ownership and a single timeline — not engineering execution. This is a programme-level signal, not a one-off meeting observation.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw input (Executive Assessment)</summary>

Squad Sync Executive Assessment covering: what went well (risks surfaced early by Adrian, Michelle, Imelda, Victor; Adrian's SIT→immediate-UAT proposal; internal UAT prep relatively mature); what didn't go well (fragmented timeline understanding, Michelle's direct quote on confusion, four unresolved assumptions, weak external dependency management); six risks not adequately addressed (VAPT delay as highest risk, UAT scope fragmentation, test data integrity, cross-system account dependency, hidden resource capacity risk, VAPT scope ambiguity); decisions made (SSO SIT likely slips to next week, internal UAT targeted Thu/Fri, WS1/2/4 need aligned account setup, team will attempt to avoid Phase 3 UAT); action items by person (Rama — 7 items, Adrian — 3 items, Michelle — 3 items, Imelda — 4 items); and a PM readout recommending a UAT Readiness War Room Tracker (Workstream/Owner/Dependency/Target Date/Risk/Blocker) covering Products API, Personas, Profile/Opportunity data import, CSC course/learner files, JumpStart/CSC account setup, SSO readiness, and VAPT scope sign-off. Overall delivery health rated Amber.

</details>
