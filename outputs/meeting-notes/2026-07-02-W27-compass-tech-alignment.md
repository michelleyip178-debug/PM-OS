# Meeting Notes: Compass Tech Alignment

**Date:** 2026-07-02

**Organizer:** Pow Hwee TAN

**Time:** 4:00 PM – 5:00 PM

**Attendees (named in transcript/actions):** Pow Hwee TAN, Hao Eng CHUA, Fanxu, Adrian Lo, Kingsley, Rama MOORTHY

**Meeting Type:** Engineering sync / technical governance review

**Duration:** 1 hour

---

## Summary

This was a technical governance and delivery-hygiene discussion, not a product discussion. The team found that CI/CD, deployment, and infrastructure ownership assumptions were incorrect or incomplete — most seriously, that data migration execution had been silently bypassed in places, creating false confidence that environments were working correctly. The meeting produced seven decisions and eleven action items with named owners, moving from problem discovery to assigned accountability within the hour.

---

## Decisions Made

1. **Development CI/CD must run fully — no silent bypass of failures**
   - **Why:** Migrations were found to not be running consistently, with failures hidden from the team. Silent bypass created false confidence that environments were healthy.
   - **Who decided:** Team consensus, driven by Hao Eng's challenge to CI/CD assumptions.
   - **Impact:** Changes how the team trusts (or doesn't) its current deployment pipeline until this is fixed.

2. **Deployment failures must generate visible notifications (Slack, as first pass)**
   - **Why:** CI failures were not visible to everyone; visibility gap was a root cause of the missed migrations.
   - **Impact:** Rama + Fanxu to implement.

3. **Dedicated pipeline walkthrough session — Dev, QA, UAT/UAD, required checks, escalation path**
   - **Why:** Reliance on individual knowledge ("only Fanxu knows") is a bus-factor risk; a walkthrough spreads that knowledge across the team.
   - **Impact:** Fanxu to run it.

4. **Infrastructure requests route through Fanxu as primary OTEP point of contact**
   - **Why:** Clarifies ownership that was previously ambiguous.
   - **Impact:** Single point of contact for infra asks going forward.

5. **Agency / Job Family / Job Function problems solved via mapping, not new codes**
   - **Why:** Teams had been creating additional records to unblock themselves, which risks duplicate meanings and inconsistent downstream interpretation.
   - **Impact:** Kingsley to lead the mapping design and gap analysis. **This directly reopens open item #18/#41** from the Pathfinder Sprint 6 grooming context — the same competency/reference-data governance gap flagged as unresolved at Squad Sync 2026-06-26 ("who authorises the canonical job family/function/competency list is not settled"). This meeting assigns Kingsley ownership of the assessment, which is forward progress on that exact gap.

6. **Reference data treated as a shared governed asset, not feature-owned**
   - **Why:** One participant's framing: "If it's owned by everyone, it's owned by no one." Uncontrolled changes to shared tables (Agency, Job Family, Job Function) can break multiple products at once.
   - **Impact:** Governance model still needs to be defined — this decision states the principle, not the mechanism.

7. **QA environment readiness is a high-priority delivery objective ahead of the upcoming demo**
   - **Why:** QA is not fully operational; environment differs from Dev in undocumented ways, meaning defects may only surface after promotion to higher environments.
   - **Impact:** Adrian to sync with teams and provide an ETA. **No demo date given in source material — flag to confirm the actual date this QA work is racing against.**

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Conduct knowledge-sharing session covering Dev, QA, UAT pipelines and deployment checks | Fanxu | Not stated | High | 🔴 Not Started |
| Document CI/CD and infrastructure setup awareness with teams | Fanxu | Not stated | High | 🔴 Not Started |
| Implement Slack deployment notification approach | Rama MOORTHY + Fanxu | Not stated | High | 🔴 Not Started |
| Coordinate pipeline understanding and team alignment | Adrian Lo | Not stated | Medium | 🔴 Not Started |
| Sync with teams and provide ETA for QA readiness | Adrian Lo | After meeting | High (blocks demo readiness) | 🔴 Not Started |
| Lead reference-table assessment (Agency, Job Family, Job Function, related ref tables) | Kingsley | Not stated | High (unblocks long-open item #18) | 🔴 Not Started |
| Work with relevant teams on mapping design and gap analysis | Kingsley | Not stated | High | 🔴 Not Started |
| Document migration and seed-data practices, dos and don'ts | Hao Eng CHUA | Not stated | Medium | 🔴 Not Started |
| Raise agency-code ownership / short-code issue with Mark | Pow Hwee TAN | Not stated | Medium | 🔴 Not Started |
| Summarise actions and owners after meeting | Pow Hwee TAN | Immediate | High | 🔴 Not Started |
| Invite Fanxu to Pathfinder stand-up sessions | Adrian Lo | Not stated | Low | 🔴 Not Started |

**Notes:**
- Nine of eleven action items have no due date — recommend Michelle follow up with Adrian/Pow Hwee to timebox at minimum the QA-readiness ETA and the reference-data mapping work, since both gate other squads' delivery (see Risks below).
- "Adrian Lo" here is a different person from "Adrian" (Director of Product Management, Michelle's manager) referenced elsewhere in this workspace — confirm this distinction is correct and not a name collision before routing follow-ups.

---

## Key Insights & Quotes

**Technical Constraints / Root Causes:**
- Migration scripts were disabled without broad visibility — some environments appeared healthy but weren't actually running migrations.
- CI failures were not visible to everyone; workarounds existed without sufficient team-wide awareness.
- Dev and QA environments differ in undocumented ways; QA is not fully operational.

**Process Quote:**
- "We are not trying to find fault; we want to solve the problem." — explicit reframe away from blame during the migration-failure discussion. Notable because it kept the meeting productive rather than defensive.
- "If it's owned by everyone, it's owned by no one." — on reference data governance; captures why the Agency/Job Family/Job Function ownership gap has persisted despite being flagged before (see cross-reference below).

**Cross-Squad / Cross-Meeting Connection:**
- This meeting's Decision 5 and 6 are the technical-side counterpart to a gap Michelle's team already has open: item #18 in `00-hub/open-items.md` (competency/reference-data SSOT) was re-opened 2026-06-26 with the same "who authorises this" question. Kingsley now has explicit action ownership on the assessment side — worth updating item #18's status to reflect this meeting as forward motion, and looping this back to Imelda's squad since her Epics 1–3 also depend on this same reference data (per the existing risks.md entry).

---

## Open Questions

- [ ] What other manual deployment steps or hidden bypasses exist beyond migrations? No inventory exists yet. - **Owner:** Not assigned - **By:** Not stated
- [ ] What is the actual demo date that QA readiness (Decision 7) is racing against? - **Owner:** Michelle to confirm with Adrian Lo/Pow Hwee - **By:** Before next standup
- [ ] Who is the confirmed long-term owner of Agency/Job Family/Job Function reference data, beyond "Kingsley leads the assessment"? Governance model still undefined. - **Owner:** Kingsley (assessment) / TBD (governance) - **By:** Not stated
- [ ] Does the Intelligence team's separate infrastructure/repository setup (flagged as architecture drift) need reconciling with OTEP's, or is divergence acceptable? - **Owner:** Not assigned - **By:** Not stated

---

## Risks Not Fully Addressed

1. **Hidden CI/CD gaps may still exist (High severity)**
   - The meeting surfaced the migration-bypass issue but never established a complete inventory of manual steps, disabled automation, or environment-specific workarounds. Unknown unknowns remain.

2. **Production-readiness confidence may be overstated (High severity)**
   - Repeated returns to QA readiness, migration reliability, and environment parity suggest foundational delivery infrastructure is still being stabilized. If QA stays incomplete, future demos and testing cycles are constrained — **this is a direct risk to whatever demo Decision 7 is targeting.**

3. **Reference data integrity (High severity)**
   - Agency codes are being interpreted differently across teams; some teams created additional records to unblock themselves rather than wait for proper mapping. Until the mapping model (Decision 5) is actually implemented, integration inconsistencies and duplicate meanings remain possible.

4. **Cross-team architecture drift (High severity)**
   - The Intelligence team runs different infrastructure and separate repositories, with incomplete cross-team visibility. Without architectural governance, deployment practices, infra standards, and monitoring could keep diverging — a supportability problem later, even if not urgent today.

---

## Blockers

1. **QA environment not fully operational**
   - **Blocked by:** Undocumented environment differences between Dev and QA; migration/seed-data practices not yet documented.
   - **Impact:** Defects may only surface after promotion to higher environments; constrains demo and testing readiness.
   - **Resolution:** Adrian Lo's ETA sync (action item) + Hao Eng's migration/seed-data documentation (action item) are the two dependencies to close this.

2. **Reference data mapping not yet implemented**
   - **Blocked by:** No confirmed governance owner beyond Kingsley's assessment role; mapping design/gap analysis not yet started.
   - **Impact:** Blocks the same downstream work already tracked in open item #18 (OTEP-87 competency section, OTG ingestion label→code reconciliation, job family/function filters) — this isn't a new blocker, it's the technical root of an existing one.
   - **Resolution:** Kingsley's mapping design and gap analysis (action item); governance model for long-term ownership still needs a decision.

---

## Next Steps

**Immediate:**
- Pow Hwee to summarise actions and owners (already an action item, listed as immediate)
- Michelle to confirm the demo date QA readiness is targeting, and update open item #18 in `00-hub/open-items.md` to reflect Kingsley's new action ownership on the reference-data assessment

**Short-term (Next 2 weeks):**
- Fanxu's knowledge-sharing/pipeline walkthrough session
- Kingsley's reference-table assessment and mapping design
- Slack deployment notification implementation (Rama + Fanxu)

**Follow-up Meeting:** Not scheduled in source material — recommend one once Kingsley's mapping assessment and Adrian's QA ETA are both in hand, since both were left open-ended here.

---

## Context for Future Reference

This meeting is the technical/infrastructure counterpart to a governance gap Michelle's product-side tracking already has open (item #18, reference data SSOT — re-opened 2026-06-26 at Squad Sync). No prior meeting notes on CI/CD or infrastructure governance exist in this workspace, so this is the first capture of that thread. Recommend linking this note from `00-hub/risks.md`'s existing "Reference data — Imelda's squad" row once reviewed, since Kingsley's assessment (Decision 5/6 here) is the concrete next step that row has been waiting on since 2026-05-21.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: Meeting transcript and meeting chat, "Compass Tech Alignment," organized by Pow Hwee TAN, 2026-07-02, 4:00–5:00 PM. Submitted as a pre-structured PM assessment (Executive Summary / What Went Well / What Did Not Go Well / Risks / Key Decisions / Action Items format) via `/meeting-notes` invocation.

</details>
