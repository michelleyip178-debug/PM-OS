# PRD: OpsPortal Day-2 Traceability & Write-Back

## 0) Meta

| Field | Value |
|-------|-------|
| **Feature / Experiment** | OpsPortal Day-2 Traceability & Write-Back |
| **DRI (PM)** | Michelle Yip |
| **Stage** | Team Kickoff |
| **Last Updated** | 2026-08-13 |
| **Status** | Draft |
| **Links** | [Discovery scope](../analyses/2026-08-13-W33-ops-portal-day2-discovery-scope.md) \| [Huiting's TC1-14 email, 9 Aug 2026](#) \| Jira: OTEP-830, OTEP-831 (status unconfirmed) |

---

## 1) Problem and Hypothesis

**Problem:**
Career Compass caches an officer's employment/competency data at first login and doesn't automatically re-pull from POCDEX afterward. When an officer's underlying HR record changes (transfer, secondment, email change, and 12 other life-cycle scenarios Data Office has identified), Compass's cached view silently goes stale, and there's currently no way for a Compass operator to correct it — the OpsPortal can *detect* the discrepancy (read-only lookup, live POCDEX comparison) but cannot *fix* it.

Data Office (Huiting Lian, Assistant Director) has stated this gap is a condition of her approving the current data-sharing approach — not a nice-to-have.

**Hypothesis:**
If we add write-back and blast-radius lookup to the OpsPortal, and confirm/build logs API access to POCDEX's own audit trail, then L1 support can resolve data-drift incidents without escalating to POCDEX or engineering for every case, because the two blocking capabilities she's named (data recovery, log visibility) will exist.

**Strategy Fit:**
Directly gates the data-sharing approval Data Office needs to sign off before UAT/production data flow is fully sanctioned. This is a go/no-go dependency, not a roadmap nice-to-have — Sprint 8 is the last sprint before UAT close, and Huiting's Aug 9 email is the most recent unanswered ask in that approval chain.

**Supporting Evidence:**
- Huiting, 9 Aug 2026: *"In the short term, CC needs to have the ability to perform data recovery from the Ops module to the specific officer's profile in CC when a discrepancy is found."*
- Huiting, 27 Jul 2026 (inline reply to Rama): *"Please also ensure Compass central users have access to the logs API sent by POCDEX, to help troubleshoot subsequently."*
- Huiting, 27 Jul 2026 (original framing): *"If I'm Compass business user, how do I troubleshoot this particular officer's data and what was originally sent by POCDEX? Illustrate the entire flow process."*
- 14-scenario test matrix (TC1–TC14) attached to her 9 Aug email, tabling "stored in CC" vs. "seen in Ops module" for each — most rows currently unresolved

---

## 2) Scope and Non-Goals

**In Scope:**
- Write-back mechanism: correct an officer's CC profile field(s) from a live OpsPortal/POCDEX comparison
- Blast-radius lookup: given one confirmed discrepancy, surface other officers likely affected by the same root cause
- Confirm and, if needed, build Compass-side access to POCDEX's logs/audit API (read access for central users, not just success/fail checks)
- Resolve the 6 priority-flagged TC scenarios (TC1 agency transfer, TC2 POCDEX↔non-POCDEX moves, TC3 secondment, TC7 NPL/ML, TC8 data correction, TC9 Position ID change) — define expected OpsPortal behavior for each

**Non-Goals** (max 3):
- Automated re-ingest / change-detection trigger on every login — this PRD covers manual/semi-manual correction tooling; automated Day-2 sync is a larger, separate effort (ties to open-items #56-adjacent sync-cadence question)
- CAM integration — explicitly deferred to post-MVP per the 27 Jul thread
- Historical/effective-dated data (learning history, posting history) — explicitly deferred to post-MVP discovery

**Tradeoffs Accepted:**
- Resolving only 6 of 14 TC scenarios for MVP; remaining 8 become a working backlog, agreed explicitly with Huiting rather than left implicit

---

## 4) Solution Overview

**User Flow (L1 Ops troubleshooting an officer complaint):**
1. Officer or agency reports a data issue (e.g., stale job title) via existing support channel
2. L1 Ops looks up the officer in OpsPortal by email (existing capability)
3. OpsPortal shows side-by-side: what's stored in CC vs. current POCDEX record (existing capability)
4. **New:** if a discrepancy is confirmed, Ops triggers a write-back to correct the CC profile from the POCDEX-side data
5. **New:** OpsPortal surfaces whether other officers show the same discrepancy pattern (e.g., same root cause — a stale field that didn't get re-synced after a specific life-cycle event)
6. **New:** if the issue traces to a POCDEX-side problem (not CC), Ops consults POCDEX's logs API directly rather than raising a ticket blind

**Key Interactions:**
- Write-back: scoped to specific correctable fields (TBD in discovery — likely job title, job family, position, agency); requires an audit trail of who changed what, when, and why (ties to her "thorough review" requirement)
- Blast-radius: likely a query against the same root-cause pattern (e.g., "all officers whose position changed via Cumulus secondment in the last N days")

**Edge Cases (from TC1–TC14, to resolve in discovery):**
- Officer retains old email after agency transfer — does write-back have enough signal to know which record is authoritative?
- Officer email reused by a new hire after the original left — write-back must not silently merge two people's data
- Duplicate POCDEX records (same name/email, different HRID) — write-back needs a disambiguation step, not a blind overwrite

**Mockup/Prototype:** Existing OpsPortal screenshot (read-only lookup) — no mockup yet for write-back/blast-radius UI

---

## 5) Success Metrics and Evaluation

**Primary Metric:**
- Metric: % of officer data-discrepancy incidents resolved by L1 Ops without escalating to POCDEX
- Baseline: 0% (no write-back capability exists today; all discrepancies currently require manual escalation or ad-hoc patching)
- Target: TBD in discovery — recommend setting after the TC1–TC14 working session establishes a realistic incident volume baseline
- Timeline: TBD

**Guardrail Metrics** (must not harm):
- Data integrity: zero incidents of write-back overwriting a correct record with stale/wrong data (especially the email-reuse and duplicate-record edge cases)

**Kill Criteria:**
If write-back introduces a data-integrity incident (wrong officer's data overwritten) during pilot use, pause write-back and revert to read-only + manual escalation until root cause is fixed.

---

## 8) Owners and Next Steps

**DRI:** Michelle Yip

**Reviewers:** Rama (Engineering/OpsPortal owner), Huiting Lian (Data Office, approval gate), Adrian Ang (Day-2 ops, overlapping workstream)

**Open Questions:**
- [ ] What fields are safe to write back vs. require human judgment? — @Rama, Engineering
- [ ] Is logs API access already technically available and just not surfaced to Compass users, or does POCDEX need to build/expose it? — @Rama, @Pow Hwee
- [ ] Current status of OTEP-830 (manual patching/sync) and OTEP-831 (profile versioning) — unverifiable via Jira API this session — @Rama
- [ ] Does write-back require its own approval/governance sign-off from Data Office, separate from read-access approval? — @Huiting

**Next Milestones:**

| Target Date | Milestone | Exit Criteria |
|-------------|-----------|---------------|
| This week | Reply to Huiting's 9 Aug email; confirm OTEP-830/831 status with Rama | Response sent; ticket status confirmed |
| Next 1-2 weeks | Joint TC1-14 working session (6 priority rows) | "Seen in Ops module" column resolved for priority rows |
| Following session | Write-back + blast-radius scoped with Engineering | Field-level scope agreed, audit trail design started |
| TBD | PRD advances to Solution Review | Edge cases documented, XFN requirements outlined |

---

## 9) Appendix

**Meeting Notes:** See [discovery scope doc](../analyses/2026-08-13-W33-ops-portal-day2-discovery-scope.md) for full source thread references and the TC1-14 table summary.

**Alternatives Considered:**
- Full automated re-ingest on every login (no manual troubleshooting layer needed): rejected as first step because it's a much larger engineering lift and doesn't address the immediate approval gate Huiting has raised; may be the right long-term direction post-MVP.

---

*Generated: 2026-08-13*
*Stage: Team Kickoff — expand to Solution Review once discovery (TC1-14 session, field scoping) is complete.*
