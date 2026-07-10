# Meeting Notes: #compass-pocdex Slack Thread — POCDEX API Ownership & Setup

**Date:** 2026-07-09 (thread activity 9 Jul, 18 messages, 2 participants directly quoted)

**Channel:** #compass-pocdex

**Participants:** Pow Hwee Tan (PSD), Johnny Lim (GovTech), Michelle Yip (PSD, named as action owner), Daryll Chu (PSD, named as action owner)

**Meeting Type:** Async Slack thread — engineering/infra handoff and role clarification

---

## Summary

Pow Hwee introduced Johnny Lim (GovTech) as the new owner of POCDEX API operationalization work, bringing relevant background from MOE (TS, GCC, bespoke app dev, procurement). The thread also surfaced the current, somewhat improvised state of the POCDEX API build: it's living inside the Compass GitLab repo and Compass GCC environment rather than its own infra, pulling from a SQL Server read replica source but targeting PostgreSQL for the API's own database. Johnny is assigned to build the ETL code; Michelle and Johnny are told to work directly on functional questions to cut down on coordination overhead.

---

## Decisions Made

1. **PostgreSQL chosen as the POCDEX API's own RDBMS, despite the source being SQL Server**
   - **Why:** Future-proofing and easier HA (high availability) setup, even though this means an ETL step is needed to move data from the SQL Server source into PostgreSQL.
   - **Who decided:** Pow Hwee Tan.
   - **Impact:** Confirms the API's database layer is a genuine transform, not a passthrough — this is a real piece of engineering work, not just a connection string change.

2. **Michelle and Johnny to communicate directly on functional clarifications**
   - **Why:** Avoid coordination overhead of routing through Pow Hwee or Daryll for every functional question.
   - **Who decided:** Pow Hwee Tan.
   - **Impact:** Michelle now has a direct engineering contact for POCDEX API functional questions — relevant given open item #56 (POCDEX sync cadence, still unanswered as of 8 Jul) and #31 (POCDEX go-live prep, blocked on Core team questions since 17 Jun).

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Develop the ETL code for the POCDEX API (SQL Server → PostgreSQL) | Johnny Lim | Not specified | 🔴 High | Not Started |
| Physicalise the infra so the API code can move out of the Compass repo | Not specified — likely Johnny Lim or infra team | Not specified | 🔴 High | Not Started |
| Communicate directly with Johnny on POCDEX functional clarifications, as needed | Michelle Yip | Ongoing | 🟡 Medium | Ongoing |
| Own the UHDP overall schedule and effort | Daryll Chu | Not specified | 🟡 Medium | Not Started |

**Notes:**
- No due dates were given for the ETL work or infra physicalisation — both rated high priority. Given open item #31 already has OTEP-127 (ringfencing) and OTEP-203 (POCDEX API service) blocked on this exact workstream, worth pushing for a real date once Johnny is fully ramped.
- Pow Hwee characterized the ETL work as "straightforward due to few tables" — worth treating that as an initial read, not a confirmed estimate, until Johnny has actually looked at the schema.

---

## Key Insights & Quotes

**Technical/infra context:**
- The POCDEX API is currently "squatting" in the Compass GitLab repo and Compass GCC environment — not its own dedicated infra. This is a temporary/improvised state, not the target architecture.
- Source code in the Compass repo currently shows **static fixture data loaded**, because Compass infra wasn't originally provisioned for the POCDEX database. This means whatever's been demoed or tested against POCDEX so far may have been against fixtures, not live data — worth checking if this affects any existing demo or test results.
- Source database is SQL Server, currently pulling from the POCDEX read replica.

**People/context:**
- Johnny Lim (GovTech) is new to this workstream; his relevant background is MOE (a "complex environment"), plus TS, GCC, bespoke app dev, and procurement — Pow Hwee flagged this as directly relevant experience for operationalizing POCDEX API.

---

## Open Questions

- [ ] Does the "static fixture loaded" state affect any current demo, test, or UAT-prep work that assumed live POCDEX data? - **Owner:** Michelle to check - **By:** Before UAT prep intensifies (UAT starts 11 Aug per open item #39)
- [ ] What's the actual timeline for infra physicalisation and ETL build, now that Johnny owns it? - **Owner:** Michelle to confirm with Johnny/Pow Hwee - **By:** Not specified — needed to unblock open item #31 (OTEP-127, OTEP-203)
- [ ] Does Johnny's onboarding change the status of open item #31's blocker (Core team/Pei Ern/Kingsley questions from 17 Jun, still unanswered)? - **Owner:** Michelle - **By:** Before next POCDEX-related planning

---

## Blockers

1. **POCDEX infra not yet physicalised**
   - **Blocked by:** API code currently living inside Compass's own repo/environment rather than dedicated infra.
   - **Impact:** Blocks moving the API code to its proper home; likely blocks a clean handoff of ownership.
   - **Resolution:** Named as the "next step" in the thread, but no owner or date confirmed yet.

2. **POCDEX Core team questions still open (pre-existing, from open item #31)**
   - **Blocked by:** Pei Ern/Kingsley from Core team haven't answered Pow Hwee's two questions (data expected from POCDEX; QA/UAT profile data setup) since 17 Jun.
   - **Impact:** OTEP-127 (ringfencing spike) and OTEP-203 (POCDEX API service) both remain blocked.
   - **Resolution:** Worth checking whether Johnny's arrival changes who's now asking, or if this question still sits with Core team regardless of who owns the Compass-side build.

---

## Next Steps

**Immediate (This Week):**
- Michelle to connect directly with Johnny on any open functional questions (per Pow Hwee's instruction).
- Confirm whether the "static fixture" issue affects anything already built or tested against POCDEX data.

**Short-term (Next 1-2 Weeks):**
- Push for a real timeline on ETL development and infra physicalisation, given UAT starts 11 Aug and open item #31 has been blocked since 17 Jun.
- Revisit open item #31's Core team blocker now that there's a named engineering owner (Johnny) on the Compass side.

**Follow-up Meeting:**
- Not specified in source — recommend a short sync once Johnny has reviewed the schema, to convert "should be straightforward" into a real estimate.

---

## Context for Future Reference

This is the first concrete engineering movement on open item #31 (POCDEX go-live prep) since it stalled on 17 Jun waiting for Core team answers. Johnny Lim is a new name in this workspace — worth adding to stakeholder tracking if this becomes an ongoing working relationship, since Michelle is now instructed to work with him directly rather than routing through Pow Hwee.

This also connects to open item #56 (POCDEX sync cadence/data-currency, still unanswered as of 8 Jul) — Johnny's ETL work will presumably need to account for whatever sync cadence gets confirmed there. Worth looping these two threads together rather than treating them as separate conversations, since the ETL design depends on the answer to #56.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw source material</summary>

Source: Slack "Summary of #compass-pocdex" auto-generated recap, 9 Jul, 18 messages across 2 participants directly quoted (Pow Hwee Tan, referencing Johnny Lim, Michelle Yip, Daryll Chu). Structured under three headers in the original: "Johnny's Immediate Focus and Background," "Pocdex API Setup and Infrastructure Status," "Next Steps and Responsibilities," each with supporting quoted/paraphrased statements numbered [1]-[7].

</details>

---

*Generated: 2026-07-09*
*Next: Connect with Johnny on functional questions; confirm fixture-data impact on any existing testing; push for a real ETL/infra timeline given the 11 Aug UAT start.*
