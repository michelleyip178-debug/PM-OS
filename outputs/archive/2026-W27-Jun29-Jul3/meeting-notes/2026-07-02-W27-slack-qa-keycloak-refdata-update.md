---
date: 2026-07-02
source: Slack thread (async)
topic: QA environment, Keycloak config, reference data alignment, reverse proxy
type: Engineering sync (async)
attendees: [fanxu.wang, Adrian Lo (PSD), Kingsley (TW), Rama Moorthy (PSD), Pow Hwee Tan (PSD), Boon Siang Teh (GOVTECH)]
---

# Meeting Notes: Slack Update — QA Environment, Keycloak, Reference Data (2 Jul 2026)

## Summary

This is an async Slack thread covering the same technical thread as today's [Compass Tech Alignment meeting](2026-07-02-W27-compass-tech-alignment.md), but with concrete execution details that meeting didn't have. Three headline updates: QA environment is now confirmed **operational** (partially resolves the QA-readiness blocker flagged in that meeting), Keycloak/Azure AD work is progressing with a proposed repo split, and Kingsley's reference-data plan now has an actual mechanism (not just a principle) — generate `ref_fam`/`ref_func` tables from Excel as seeds, disable Excel ingestion going forward, treat reference tables as read-only downstream.

**New name flagged:** Boon Siang Teh (GOVTECH) appears here for the first time in this workspace — no existing stakeholder profile. He's driving the Keycloak service-split ADR and the reverse-proxy/SSM work.

---

## Decisions Made

1. **QA data migration will proceed alongside development**
   - **Why:** QA environment is confirmed up; no need to wait for a separate migration window.
   - **Who decided:** Implied team consensus (Adrian Lo, Kingsley, fanxu.wang coordinating).
   - **Impact:** Directly addresses part of open item from Compass Tech Alignment (Decision 7, QA readiness ahead of demo) — worth updating that meeting's open question about QA ETA.

2. **QA database access via SSM tunneling**
   - **Why:** Standard secure access pattern; avoids opening direct DB access.
   - **Impact:** fanxu.wang to provide EC2 instance ID + RDS host details (already done, per thread).

3. **Keycloak proposed to move to its own repository**
   - **Why:** Easier CI/CD management, visibility, auditability, consistency (Boon Siang Teh's framing).
   - **Impact:** Boon Siang Teh to draft an ADR for the split — not yet a final decision, ADR will formalize it.

4. **Reference data structure: code + label + description, using POCDEX codes/short codes**
   - **Why:** Rama proposed a structure asking whether POCDEX has short codes; Pow Hwee suggested loading both agency code sets in the interim to avoid stalling Pathfinder.
   - **Impact:** This is the concrete mechanism the "reference data = shared governed asset" principle (Compass Tech Alignment Decision 6) was missing. **Directly advances open item #18.**

5. **Reference tables (fam/func) to be seeded from Excel, then Excel ingestion disabled**
   - **Why:** Kingsley's proposal to stop duplicate-record creation at the source and treat reference tables as read-only for other ingestion pipelines.
   - **Impact:** Pending approval — Kingsley is "seeking approval," not yet confirmed. **This is the concrete plan Michelle should surface when updating open item #18.**

6. **Reverse proxy added in dev to allow internet connectivity to OTEP**
   - **Why:** Enables access via internet-enabled machines; part of broader infra work.
   - **Impact:** Boon Siang Teh to propagate to higher environments; Jira ticket created for packaging the SSM image and shifting to ECS cluster.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Draft ADR for splitting Keycloak into its own service/repo | Boon Siang Teh (GOVTECH) | Not stated | Medium | 🔴 Not Started |
| Get approval for reference-table cleanup plan (seed fam/func from Excel, disable Excel ingestion, read-only downstream) | Kingsley (TW) | Not stated — recommend this week given it unblocks open item #18 | High | 🟡 Pending approval |
| Load both agency code sets as interim measure (until end-state solution) | Pow Hwee Tan (PSD) / team | Not stated | Medium | 🔴 Not Started |
| Package SSM image and shift to ECS cluster for DB access | Boon Siang Teh (GOVTECH) | Not stated (Jira ticket created) | Medium | 🟡 Ticketed |
| Propagate reverse proxy to higher environments | Boon Siang Teh (GOVTECH) | Not stated | Medium | 🔴 Not Started |
| Continue QA data migration alongside development | Adrian Lo (PSD) + Kingsley (TW) + fanxu.wang | Ongoing | High | 🟡 In Progress |

**Notes:**
- Most items still have no due date — same pattern as the Compass Tech Alignment meeting notes. Recommend batching a single follow-up with Pow Hwee/Adrian Lo to timebox the highest-priority ones (reference-table approval, QA migration) rather than chasing individually.
- Kingsley's reference-table plan is "seeking approval," not yet decided — don't treat this as resolved when updating open item #18. Flag it as "concrete plan proposed, pending approval," not "done."

---

## Key Insights

**Technical Constraints:**
- POCDEX may or may not have short codes for agencies — this was an open question in the thread (Rama asking), not yet confirmed answered.
- Interim approach (loading both agency code sets) is explicitly a stopgap "to avoid stalling the Pathfinder team" — Pow Hwee's framing suggests urgency on Pathfinder's side specifically.

**Process note:** This thread shows the same "reference data is shared, no single owner" problem from Compass Tech Alignment now producing an actual proposal (Kingsley's read-only/seed approach) rather than staying at the principle level. Worth treating this as the concrete follow-through the meeting's Decision 5/6 needed.

---

## Open Questions

- [ ] Does POCDEX have agency short codes? — **Owner:** Rama Moorthy — raised in thread, not yet confirmed answered
- [ ] Is Kingsley's reference-table cleanup plan approved yet? — **Owner:** Kingsley / whoever approves (unclear who) — **By:** not stated
- [ ] What's the "end-state solution" for agency codes that the interim dual-loading approach is bridging to? — **Owner:** Pow Hwee Tan — not stated

---

## Cross-Reference to Existing Tracking

- **Open item #18** (`00-hub/open-items.md`) — competency/reference-data SSOT, reopened at governance level 2026-06-26. This thread's Kingsley proposal (seed fam/func from Excel, disable ingestion, read-only downstream) is the first concrete mechanism proposed since that reopening. Recommend updating #18 to reflect this as "mechanism proposed, pending approval" rather than leaving it at "assessment ownership only" (which is what today's Compass Tech Alignment meeting notes currently say).
- **Compass Tech Alignment (today, earlier)** — this Slack thread confirms QA environment is now up, which directly answers part of that meeting's open question: "What is the actual demo date that QA readiness is racing against?" The environment being up doesn't answer the demo-date question, but it does resolve the "is QA operational" half of the blocker.

---

## Next Steps

**Immediate:**
- Confirm whether Kingsley's reference-table plan has been approved, and by whom — needed before updating open item #18 with confidence.
- Loop this Slack update into the same follow-up as Compass Tech Alignment's open items (QA ETA, reference-data governance) rather than tracking separately.

**Short-term:**
- Boon Siang Teh's ADR for Keycloak service split
- Propagation of reverse proxy to higher environments

---

## Context for Future Reference

Boon Siang Teh (GOVTECH) is new to this workspace's tracking — no stakeholder profile exists yet. He's driving Keycloak architecture and infra/SSM work alongside fanxu.wang. Worth adding a stub profile if he continues to appear in infra threads.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: Slack thread summary, 02 Jul 2026, covering QA Environment and Data Migration, Keycloak Configuration and Management, Agency Code and Reference Data Alignment, and Internet Connectivity and Reverse Proxy Setup. Submitted via `/meeting-notes` invocation.

</details>
