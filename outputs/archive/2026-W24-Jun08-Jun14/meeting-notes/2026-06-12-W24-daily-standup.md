# Meeting Notes: Daily Standup — Sprint 3 Final Day

**Date:** 2026-06-12 (Fri)

**Attendees:** Michelle Yip (PM), Thomas Huchede, Leo Milbor, Hao, Pow Hwee Tan, Rathika Ramalingam (Zenika eng team)

**Type:** Engineering sync / daily standup — FE/BE progress, integration blockers, S4 alignment

**Related:** OTEP-86 (type filter), OTEP-289 (filter-by-function spike), OTEP-192/348 (OTG ingestion + scheduler), OTEP-350 (WOG AD), OTEP-352 (POCDEX), OTEP-438 (admin placeholder); same-morning [OTG Opportunities notes](2026-06-12-W24-otg-opportunities-careercompass-ingestion.md)

---

## Summary

Standup mixed engineering progress (BE schema merge, AD spike, Outlook→CFT integration, Keycloak redirect) with three PM scope calls: a new PSFG-style "Public Service for Good" opportunity type ruled out of MVP pending effort assessment, the upload feature held to base scope with no competency integration, and the function-filter spike cleared to proceed despite unresolved taxonomy. Two of your action items (OTG ingestion summary to Confluence, upload-ownership with Rama/Imelda) repeat from this morning's OTG session — same items, don't double-track.

⚠️ **Overlap note:** "Public Service for Good" here = **PSFG** in the OTG meeting (where it was made its own category). "Random/unrecognised ingestion types" here = the **~78 missing-prefix / mislabelled records** quantified in the OTG notes. Treat these as one workstream, not two.

---

## Decisions Made

1. **Function-filter spike proceeds despite unresolved taxonomy.** ✅
   - **Why:** Filtering exploration (function filters) doesn't need to wait for the OTG-vs-CHG taxonomy alignment to land. Spike de-risks the approach in parallel.
   - **Who:** Michelle + Thomas. **Impact:** Feeds OTEP-289 / OTEP-86. Carries the risk that taxonomy churn later reworks the filter model — acceptable for a spike, not for build.

2. **"Public Service for Good" (PSFG) is out of initial MVP scope.** ✅ *Consistent with OTG notes (PSFG = own category, not MVP-critical)*
   - **Why:** PSD-only restriction needs new access-restriction logic = scope creep. Assess effort first; if no capacity, push back to BO as a non-MVP requirement.
   - **Who:** Michelle (with Leo on BE impact). **Impact:** Protects S4 capacity; sets up a BO expectation conversation.

3. **Upload feature stays at base capability — no competency integration.** ✅
   - **Why:** Wider interest is emerging but team capacity is thin (one member leaving). Competency integration carries high dependency. Keep scope strictly within team boundary.
   - **Who:** Michelle. **Impact:** Ownership question (build base / hand to core team) still open — see action item with Rama + Imelda.

4. **Admin UI access control: email-based, not role-based.** ✅
   - **Why:** Requirement change surfaced in standup; email is the simpler control for current needs.
   - **Who:** Hao to implement in MR. **Impact:** Touches OTEP-438 (admin placeholder).

5. **Minimise OTG workarounds; prefer future-aligned architecture.** 🟡 *Direction, not a hard call*
   - **Why:** Current solutions are OTG-specific. If OTG is later replaced, workaround effort is wasted.
   - **Impact:** Bias engineering effort toward durable solutions. Watch this against delivery pressure — "future-aligned" can quietly expand scope.

---

## Action Items

| Task | Owner | Due | Priority | Status |
|------|-------|-----|----------|--------|
| Publish OTG ingestion findings (random/unrecognised types) in Confluence + align team on impact | @Michelle | Today / w/c 15 Jun | 🔴 High | Not started — *same as OTG-notes remediation-report item* |
| Document PSFG (Public Service for Good) analysis in Confluence; assess effort, prep BO push-back if no capacity | @Michelle | Before S4 commit | 🔴 High | Not started |
| Clarify upload feature ownership/scope with core team (Rama Moorthy, Imelda) | @Michelle | Next week | 🟡 Medium | Not started — *same as OTG-notes upload item* |
| Run function-based filtering spike | @Thomas | S4 | 🟡 Medium | In progress |
| Complete AD spike + document findings/recommendations in Jira | @Leo | S4 | 🟡 Medium | In progress |
| Assess BE impact of PSFG opportunity type | @Leo | Before S4 commit | 🔴 High | Not started |
| Refine Outlook→Backend→CFT integration flow + start hands-on CFT testing | @Hao | S4 | 🔴 High | In progress |
| Implement email-based admin access control in MR | @Hao | S4 | 🟡 Medium | Not started |
| Resolve Keycloak redirect/domain mismatch; explore proxy or Keycloak fix | @Pow Hwee | S4 | 🔴 High | In progress |
| Fix UI issues + revalidate with frontend | @Rathika | S4 | 🟡 Medium | In progress |

---

## Engineering Status (technical detail)

- **Careers@GovTech data model:** DB schema updates **merged**; no DTO/API changes hitting frontend yet. BE evolving without breaking FE compatibility.
- **AD spike (Leo):** ongoing; findings + recommendations being documented in Jira.
- **Integration flow (Hao):** sequence diagram drafted for Outlook → Backend → CFT; not yet validated/tested end-to-end.
- **Keycloak (Pow Hwee):** redirect URL mismatch + whitelisting constraints blocking the integrated environment. Options on the table: upgrade Keycloak (if the feature exists) or add an intermediary layer (sidecar proxy) for URL rewrite. **This is the live integration blocker** — goal is end-to-end integrated env flow.
- **UI (Rathika):** fixes in progress, revalidating with FE.

---

## Timeline Risks

- **TIMELINE RISK — capacity vs emerging scope:** PSFG + upload-feature interest are both expanding *as* a team member is leaving. Two new scope vectors against shrinking capacity right at S4 start (Mon 15 Jun). The PSFG effort assessment and upload-ownership call both need to land **before S4 commitments**, or S4 grooms against undefined scope.
- **TIMELINE RISK — Keycloak on critical path:** the integrated-environment blocker has no resolution date. If end-to-end env isn't stable, it gates integration testing for the OTG ingestion + apply flows already sitting in QA. Get a target date from Pow Hwee.
- **Cross-check — sprint sync/retro "next Monday":** standup floated a sprint sync-up + possible retro Monday. Your daily plan + ceremonies have **Sprint 4 starting Mon 15 Jun** and the close-out happening at today's 15:00 Finalisation. Confirm whether Monday is a *separate* retro or the same event — avoid double-booking the squad.

---

## Open Questions

- [ ] **PSFG effort:** what's the real cost of PSD-only access-restriction logic? — @Michelle + @Leo — before S4 commit
- [ ] **Upload ownership:** build base module, hand to core team, or shared? — @Michelle with Rama + Imelda — next week
- [ ] **Keycloak fix path:** upgrade vs sidecar proxy — which, and by when? — @Pow Hwee — early S4
- [ ] **OTG vs CHG function taxonomy:** does the spike output force an alignment decision with core team? — @Michelle — post-spike
- [ ] **Monday retro:** separate ceremony or the same as today's Finalisation? — @Michelle to confirm

---

## How This Connects to Existing Work

- **PSFG out-of-MVP** reinforces the OTG-meeting call that PSFG is its own (non-MVP-critical) category — consistent, not conflicting.
- **Random/unrecognised ingestion types** is the engineering-eye view of the OTG data-quality problem (~160/633 ingested, ~78 missing prefixes). One Confluence write-up covers both audiences.
- **Upload + competency boundary** ties to the standing decision to keep competency work out of this squad (high dependency). The Rama/Imelda conversation is the ownership unblock.
- **Future-aligned-over-workaround** direction should be logged as a principle, not a per-ticket decision — flag for the decisions log if it starts shaping scope calls.

---

## Next Steps

**Immediate (today / into w/c 15 Jun):**
1. One Confluence write-up covering OTG ingestion data quality **and** the unrecognised-types/PSFG analysis — serves the squad and the BO push-back.
2. Pull a Keycloak resolution target date from Pow Hwee before logging off — it's the integration gate.

**Before S4 commit (Mon 15 Jun):**
- PSFG effort assessment (Michelle + Leo) so the BO conversation is data-backed, not a flat "no."
- Confirm the Monday retro question so the squad isn't double-booked.

**Next week:**
- Upload-ownership clarification with Rama + Imelda.

---

## Suggested Follow-ups

- **Don't double-track:** two of these action items (OTG Confluence write-up, upload ownership) are the same as this morning's OTG notes. I can merge them into one task list so they don't show up twice in your tracker. Want me to?
- **PSFG → BO push-back:** I can draft the effort-vs-capacity framing for the BO now, so when Leo's assessment lands you just plug in the number.
- **`/create-tickets`:** the PSFG spike + Keycloak fix + email-based access control are concrete enough to become Jira items if they're not already.

---

## Appendix: Raw Notes

<details>
<summary>Original standup input</summary>

Topics: (A) Opportunity filtering & data harmonisation OTG vs CHG — unified function-filter framework, mismatch flagged by Michelle, spike proceeds (Thomas). (B) Backend — C@G DB schema merged (no FE-breaking DTO/API), AD spike (Leo), Outlook→Backend→CFT integration sequence diagram drafted (Hao), admin UI access control → email-based (Hao). (C) Auth — Keycloak redirect + domain mismatch, options upgrade vs sidecar proxy (Pow Hwee). (D) Sprint planning — sync-up + possible retro Monday; OTG-workaround vs future-architecture concern. (E) PSFG "Public Service for Good" — PSD-only, access-restriction logic, out of MVP, assess effort / push to BO (Michelle doc + Confluence, Leo BE impact). (F) Upload function — wider interest vs thin capacity (member leaving), keep base scope, no competency, clarify ownership with Rama/Imelda (Michelle). (G) OTG ingestion gaps — random/unrecognised types, mapping/handling, Confluence summary + team alignment (Michelle). Risks: scope creep, capacity, integration complexity, OTG-workaround vs future state.

</details>
