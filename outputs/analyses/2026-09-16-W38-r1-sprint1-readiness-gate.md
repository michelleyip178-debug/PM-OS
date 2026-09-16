## Sprint 1 Readiness Gate — R1 Opportunities Marketplace

**Date:** 2026-09-16

**Owner:** Michelle Yip

**Purpose:** Formal pre-planning check — what must be true before Sprint 1 stories can be pulled into planning, not just written.

---

### Note on scope source

This gate is built against the **Sep 14 marketplace PRD** (`2026-09-14-W38-r1-opportunities-marketplace-planning-review.md`, F-01–F-30, 7-agent reviewed) — the most recent, most detailed R1 scope document.

**Flag:** `open-items.md` #40 references an earlier "R1 MVP scope locked 2026-09-11" doc (8 features, F-01–F-08, different feature definitions) that no longer exists in `outputs/prds/`. It was likely superseded by the Sep 14 marketplace PRD, but that supersession was never recorded in open-items.md #40 itself, which still reads as current. **Action:** confirm with whoever tracks open-items.md that #40 is stale and should point to the Sep 14 doc, so grooming doesn't work from two different feature numbering schemes.

---

### This isn't a standard `/sprint-check`

The OTEP `/sprint-check` skill assumes a Jira `ready-for-sprint` label shelf with story points and velocity — that exists for ongoing Pathfinder maintenance work, not for R1, which hasn't been grooomed into tickets yet. This gate instead checks the **5 external pre-conditions** the marketplace PRD itself names as required before Sprint 1 stories can start (§3.5), plus the 2 technical/legal blockers from the 14 Sep review.

---

### Gate 1 — Experience Delivery Readiness (PRD §3.5, Day 1 Checklist)

| # | Dependency | Owner | Required state | Status |
|---|---|---|---|---|
| 1 | Sub-tab & card wireframes | Li Ting Kway (Design) | Figma components for Workload/Grade/Seats/Status badges | 🔴 Unconfirmed — not verifiable from files in this session |
| 2 | Agreed screen fields & display rules | Tan Pow Hwee (Tech Lead) | Catalog card, application form, reviewer list fields locked | 🔴 Unconfirmed |
| 3 | Automatic grade recognition | Central Login Ops | Officer grade confirmed pre-filled on login | 🔴 Unconfirmed |
| 4 | Protected resume storage & safety checks | Public Sector Cloud Security | Secure storage + virus scanning configured | 🔴 Unconfirmed |
| 5 | Pilot agency posting commitment | Michelle / Adrian Ang | 6 pilot agencies (PSD, ESG, MDDI, URA, MCCY, CAAS) commit to publishing cohorts | 🔴 Unconfirmed |

**None of these are verifiable from the workspace as of this pull.** They require direct confirmation from the named owners — this is a person-to-person check, not a file check.

### Gate 2 — Critical Blockers from 14 Sep Review

| # | Blocker | Flagged by | Required before | Status |
|---|---|---|---|---|
| 1 | CV data retention & purge policy | Legal, Engineering | Sprint 1 backlog freeze | 🔴 Open — Section 8 still "In Review" as of 14 Sep |
| 2 | Async batch ZIP worker (sync version will 504 on 80+ CVs) | Engineering | Sprint 1 backlog freeze | 🔴 Open — architecture not yet redesigned |

### Gate 3 — Dependency Order Within Sprint 1 Scope

Sprint 1 commits F-23, F-29, F-17, F-26 as a mutually dependent bundle (catalog + ingestion + tabs + dedup) — none of the four is independently shippable. F-27 (RBAC, Sprint 2) is a hard blocker for F-05 (resume attachment, Sprint 3): candidate data cannot be collected before access control exists. This is a structural dependency, not a priority call — pulling F-05 forward without F-27 complete would be a dependency trap.

### Gate 4 — Headcount / Capacity Risk (cross-reference)

Per the [4-engineer headcount brief](2026-09-16-W38-r1-engineer-headcount-justification.md): 3 named build engineers (Thomas, Hao Eng, Léo), no historical sprint at 100% Done (40-71% range), and 3 unscoped/underweighted items (CAM, OTG ingestion OTEP-578, RBAC depth) competing for the same pool. This isn't a Sprint 1 blocker per se, but a capacity assumption the whole 5.5-sprint sequence rests on — unresolved as of this gate.

---

### Recommendation

**Not ready to plan from yet.** All 5 Gate 1 items and both Gate 2 blockers are unconfirmed or open — that's 7 of 7 pre-conditions unresolved, not partial readiness. Before Sprint 1 planning:

1. Get explicit yes/no confirmation on each Gate 1 row from its named owner (Li Ting Kway, Tan Pow Hwee, Central Login Ops, Cloud Security, Adrian Ang) — this is a single working session, not five separate chases, per the same pattern flagged in the Aug 14 sequencing doc for Ops Portal/Day-2 Ops.
2. Force a decision on CV retention policy and the async ZIP worker redesign — both have named owners (you + Security Lead; Adrian Ang) and no date attached yet.
3. Correct open-items.md #40 so grooming doesn't reference a scope doc that no longer exists.
4. Resolve the headcount question (4th engineer or explicit cut) before committing to the full 5.5-sprint sequence, since Gate 3's dependency chain assumes the current 3-person pool holds pace it hasn't yet demonstrated.

If all of Gate 1 and Gate 2 clear this week, Sprint 1 can open on schedule. If any slip past this week, the honest move is to push Sprint 1 kickoff rather than start building against unconfirmed screens, storage, or access rules — that's exactly the pattern that produced the WOG AD/auth ticket slippage in Sprint 8.
