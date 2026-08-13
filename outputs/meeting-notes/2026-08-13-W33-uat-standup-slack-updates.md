# Meeting Notes: UAT Daily Standup — Slack Updates (Wed, Aug 12)

**Date:** 2026-08-12 (processed 2026-08-13)

**Channel:** #psd-pdo-otep-int

**Participants:** Imelda MO, Barry LIM, Adrian ANG, Michelle YIP, Rama MOORTHY, Pow Hwee TAN — cc Jace TAN, Pow Hwee TAN

**Type:** Async standup / Slack thread digest

---

## Summary

Three threads from Wednesday: a WOGAA internet-access blocker (intranet-only for MVP, CSAT survey now needs to be built in-house), an open question from Adrian on Compass↔OTG two-way sync for R1, and a UAT dashboard share. The big one is Adrian's evening MVP/UAT/VAPT update — five fast-follow items, the most load-bearing being Day-2 profile-change detection, which Michelle is now leading discovery on. This directly extends the risk POCDEX's Huiting flagged in the [Aug 11 data classification thread](2026-08-11-W33-pocdex-data-classification-uat-thread.md) — sync/identity resolution was risk #4 on that list, now surfacing as a named engineering gap.

---

## Decisions Made

1. **WOGAA de-scoped for MVP; build a lightweight CSAT survey in-house instead**
   - **Why:** WOGAA's docs require internet accessibility; team only has intranet access for MVP.
   - **Who decided:** Barry LIM (confirmed the constraint), Adrian ANG (proposed the workaround)
   - **Impact:** New backlog item needed — not yet logged.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Log backlog item: build in-house CSAT survey (WOGAA intranet workaround) | Adrian ANG / Michelle | Not stated | 🟠 Medium | 🔴 Not Started |
| Answer Adrian's question: how does Compass↔OTG 2-way sync work for R1 (STIPs, GIGs, SJR, secondment) | Michelle YIP | Not stated | 🔴 High | 🔴 Not Started |
| Flag Jobelle if anyone can't access the new UAT ticket status dashboard | Team | Ongoing | 🟢 Low | 🟢 In Progress |
| Lead discovery on Day-2 profile-change detection — how to detect changed officer profile (NRIC-based?) and when to re-pull POCDEX | Michelle YIP | Not stated | 🔴 High | 🔴 Not Started |
| Design automated change-detection/re-ingest, keep admin ops portal for ad-hoc patching | Engineering (unassigned) | Not stated | 🔴 High | 🔴 Not Started |
| Check edge case: POCDEX → non-POCDEX org moves | Michelle YIP (with Huiting) | Not stated | 🟠 Medium | 🔴 Not Started |
| Build robust competency data model (current/historical job IDs, WOG bank, self-added) — competency classification first | Imelda MO + Rama MOORTHY | Not stated | 🔴 High | 🔴 Not Started |
| Confirm with Barry LIM: does competency model rework risk invalidating VAPT scope | Imelda MO | Not stated | 🔴 High | 🔴 Not Started |
| Re-flag to stakeholders: manual HR-system-to-competency pull can drift out of sync (already accepted by BO/POCDEX, just needs restating) | Michelle YIP | Not stated | 🟡 Medium | 🔴 Not Started |
| Take competency model forward with Thoughtworks — prioritize UAT Phase 2 continuity, competency-type distinction (WOG wishlist vs. Job-ID-based), primary key design, employment lifecycle design | Rama MOORTHY | Not stated | 🔴 High | 🟡 In Progress |
| Confirm whether Adrian Lo or the prior engineer can take on WOG role profile competency bank primary key work | Rama MOORTHY | Not stated | 🟠 Medium | 🔴 Not Started |
| Check with Barry LIM whether backend UAT test coverage can run during VAPT without weakening security | Imelda MO | Not stated | 🟠 Medium | 🔴 Not Started |
| Brief Adrian Lo and Kingsley: explain competency types, push for basic Excel CRUD as near-term must-have, listen to data-ingestion pain points | Rama MOORTHY | Not stated | 🟠 Medium | 🟡 In Progress |

**Notes:**
- Zero of the 13 action items carry a stated due date. Given UAT is live and go-live is Nov 25, recommend timeboxing the four 🔴 High items above (Day-2 discovery, OTG sync answer, competency model + VAPT check) to this week.
- Two items already have visible momentum from Rama's Thursday-morning replies (competency model, Excel CRUD briefing) — marked 🟡 In Progress rather than Not Started.

---

## Key Insights & Quotes

**Technical constraint:**
- "we cant use it for now... for MVP, we only have intranet access" — Barry LIM, on WOGAA

**The Day-2 sync gap, as Adrian named it:** first login pulls POCDEX data; later logins don't detect profile changes to re-ingest. Affects <1% of officers but each instance risks becoming a manual patching burden via the admin ops portal.

**Priority lifecycle scenarios for Day-2 detection** (per Adrian): transfers, secondments, agency moves, job family changes, email changes, rehires — plus Huiting's edge case of POCDEX → non-POCDEX org moves.

**Competency model direction (Rama, Thursday AM):** prioritizing UAT Phase 2 continuity, distinguishing WOG role-bank wishlist competencies from Job-ID-based ones (HRPS/CUMULUS), primary key design, and an employment-lifecycle-change design for CC.

**Pow Hwee's framing for the Adrian Lo/Kingsley briefing:** don't just present the OTG/Excel-as-is design — genuinely listen to their data-ingestion pain points. Push Excel CRUD as a near-term must-have, not a nice-to-have.

---

## Open Questions

- [ ] How does 2-way Compass↔OTG sync actually work for R1 (single-post, shows on both)? - **Owner:** Michelle - **By:** Not stated
- [ ] Is profile-change detection NRIC-based, and what's the re-pull trigger from POCDEX? - **Owner:** Michelle (discovery lead) - **By:** Not stated
- [ ] Can backend UAT test coverage run during VAPT without weakening security? - **Owner:** Imelda, pending Barry's answer - **By:** Not stated
- [ ] Does the competency model rework risk invalidating VAPT-tested code? - **Owner:** Imelda, pending Barry's answer - **By:** Not stated
- [ ] Can Adrian Lo or the prior engineer take on WOG bank primary key architecture? - **Owner:** Rama - **By:** Not urgent — next WOG bank update

---

## Blockers

1. **WOGAA requires internet access; MVP is intranet-only**
   - **Blocked by:** Infra constraint (confirmed, not negotiable for MVP)
   - **Impact:** CSAT measurement via WOGAA is off the table for MVP; needs a substitute
   - **Resolution:** Build simple in-house CSAT survey (backlog item, not yet logged)

2. **Day-2 profile-change detection has no automated trigger today**
   - **Blocked by:** POCDEX pull only happens on first login; no re-ingest mechanism on subsequent logins
   - **Impact:** Officer profile changes (transfers, secondments, email changes, etc.) go stale until manually patched via admin ops portal — real operational burden even at <1% incidence
   - **Resolution:** Michelle leading discovery, referencing Huiting's test cases, to define detection mechanism and automate re-ingest

---

## Timeline Risks

- **TIMELINE RISK:** Adrian's stated goal is to clear UAT while keeping VAPT on schedule so the pilot agency go-live (Nov 25) doesn't slip. But the competency model rework, Day-2 detection design, and backend test coverage all still need Barry's confirmation on VAPT compatibility — none of that is resolved yet, and none of the 13 action items above have due dates. This is the same pattern flagged in the [Aug 11 POCDEX thread](2026-08-11-W33-pocdex-data-classification-uat-thread.md): scope is still growing (≥25 new UAT scenarios there, five new fast-follow workstreams here) while the timeline hasn't visibly moved. Worth surfacing both threads together when the PS/DS 7-week delay decision runs.
- **TIMELINE RISK:** Day-2 profile-change detection (this thread) and cross-system sync/identity resolution (POCDEX's risk #4, Aug 11 thread) are the same underlying problem described from two different angles — product ops burden here, data governance risk there. Recommend Michelle's discovery work explicitly reference and close out POCDEX's open question on Day-2 traceability/Operations Portal mechanism (open item from the Aug 11 thread) rather than running as a separate workstream.

---

## Next Steps

**Immediate (This Week):**
- Michelle: answer Adrian's Compass↔OTG sync question
- Michelle: start Day-2 profile-change detection discovery, pull in Huiting's test cases
- Imelda: check with Barry on VAPT compatibility for competency model rework and backend test coverage during VAPT
- Log CSAT survey backlog item

**Short-term (Next 2 weeks):**
- Rama + Thoughtworks: progress competency data model (classification, primary keys, lifecycle design)
- Rama: brief Adrian Lo and Kingsley on competency types + Excel CRUD ask
- Confirm WOG bank primary key work owner (Adrian Lo vs. prior engineer)

**Follow-up Meeting:**
- **Date:** Not specified
- **Purpose:** Likely worth a dedicated Day-2 ops / sync-detection design review once Michelle's discovery has enough shape — natural pairing with the POCDEX Day-2 support and sync-cadence open items
- **Attendees:** Michelle, Adrian, Rama, Imelda, likely Huiting (POCDEX)

---

## Context for Future Reference

This thread is the product-side mirror of the [Aug 11 POCDEX data classification thread](2026-08-11-W33-pocdex-data-classification-uat-thread.md). That thread's risk #4 (cross-system data synchronisation and identity resolution) and this thread's "Day-2 ops / profile change detection" fast-follow are the same problem. Recommend tracking them as one open item, not two, so the eventual design doesn't get built twice or inconsistently.

Five fast-follow workstreams came out of Adrian's evening update — none scheduled yet. Worth a quick triage pass (impact vs. effort) before they all land on Michelle's plate simultaneously.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw Slack digest</summary>

See original pasted content — WOGAA blocker thread, Compass/OTG sync question, UAT dashboard share, and Adrian's evening UAT/MVP/VAPT update covering Day-2 ops, competency data model, WOG role profile competency bank, UAT backend test coverage, and Excel-based competency CRUD.

</details>

---

*Generated: 2026-08-13*
*Sources: Slack digest (2026-08-12, #psd-pdo-otep-int), cross-checked against [2026-08-11-W33-pocdex-data-classification-uat-thread.md](2026-08-11-W33-pocdex-data-classification-uat-thread.md)*
