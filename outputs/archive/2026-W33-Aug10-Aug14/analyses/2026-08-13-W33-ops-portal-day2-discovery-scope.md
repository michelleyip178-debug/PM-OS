# Discovery Scope & Plan: OpsPortal Day-2 Traceability & Write-Back

**Date:** 2026-08-13

**Owner:** Michelle Yip (discovery lead)

**Status:** Draft — for review before kickoff

---

## Why this discovery, and why now

Huiting Lian (Data Office) has told us, in writing, what she needs before she'll sign off on the current data-sharing approach. This isn't inferred from a general "Day-2 support" concern — it's in her Sunday 9 Aug email and the 27 Jul thread, both directly to the Compass team.

The OpsPortal read-only lookup tool (prototyped by Rama, demoed to Huiting) is what *prompted* her concerns, not something that would resolve them if shown to her — she's already seen it and found it insufficient. This discovery starts from her literal asks, not from a blank page.

**Correction (13 Aug, later):** the OpsPortal is **not live** — the screenshot is a prototype/demo, not a deployed capability. Every reference below to "existing capability" or "built" reflects what the prototype demonstrates, not what's operational today. Confirming actual deployment status with Rama is now step 1 of the plan.

**Adrian's Slack message (13 Aug, in response to the Day-2 fast-follow item) reframes the ask:** this isn't "build write-back now" — it's a **sizing exercise**. His words: *"we need to give stakeholders the assurance that we are on it and do a quick sizing on the scope, complexity and effort needed."* Michelle leads a quick discovery referencing Huiting's test cases, output is a scope/complexity/effort estimate, not a shipped feature.

Adrian also named three specific technical questions that weren't previously broken out:
1. **Change-detection trigger:** if using a timestamp to detect that an officer's info changed, what are the failure modes? (e.g., timestamp doesn't update on all field types, clock skew between systems, partial updates)
2. **Identity matching from WOG AD:** how do we know, from a WOG AD login, that this is the *same* officer we already have a stored profile for? Is NRIC the join key?
3. **Re-pull trigger:** once we know there's a profile change, do we automatically re-pull from POCDEX, or is that a separate decision/step?

These are more precise than the general "Day-2 detection" framing and should anchor the sizing work.

**Source documents:**
- Huiting's email, Sun 9 Aug 2026, 8:28pm ("RE: Draft for Data Sharing Approval for CareerCompass") — contains the TC1–TC14 life-cycle test matrix and the two specific gaps below
- Rama's email, Mon 27 Jul 2026, 12:24pm, and Huiting's inline reply — first mention of logs API access ask
- [2026-07-23-W30-cc-pocdex-data-requirements.md](../meeting-notes/../archive/2026-W30-Jul20-Jul24/meeting-notes/2026-07-23-W30-cc-pocdex-data-requirements.md) — original decision to build OpsPortal for L1 triage
- [2026-08-11-W33-pocdex-data-classification-uat-thread.md](../meeting-notes/2026-08-11-W33-pocdex-data-classification-uat-thread.md) — later, less specific restatement of the same concern

---

## What she's actually asking for (three items, not one vague "Day-2 readiness")

### 1. Resolve the TC1–TC14 divergence table
Her email includes a 14-row test case matrix covering officer life-cycle events (agency transfer, secondment, POCDEX↔non-POCDEX moves, FIN→NRIC change, rehire, accidental deletion/recreation, NPL, data correction, position/title/job-family changes, duplicate records, email reuse, contingent worker exclusion). Each row has two columns:

- **"Stored in CC as per officer's login"** — what Compass cached at first login
- **"Seen in Ops module"** — what the OpsPortal shows when queried live against POCDEX

The table's own logic: these two columns are expected to diverge, and most rows currently just say "Similar issue as TC2" — meaning POCDEX hasn't fully worked out what happens for most scenarios either. This is a joint exercise, not something Compass answers alone.

**Priority-flagged rows** (her own markup): TC1 (agency transfer), TC2 (POCDEX↔non-POCDEX), TC3 (secondment), TC7 (NPL/ML), TC8 (data correction), TC9 (Position ID change).

### 2. Write-back / data recovery capability
Direct quote: *"In the short term, CC needs to have the ability to perform data recovery from the Ops module to the specific officer's profile in CC when a discrepancy is found... Any code changes to address such scenarios would require a thorough [review of] similarly affected officers exhibiting similar behaviour."*

Two distinct asks bundled here:
- **Write-back:** push a corrected value from the OpsPortal's live POCDEX check into the officer's CC profile
- **Blast-radius check:** when a root cause is found, identify *all* officers affected by the same pattern, not just the one being investigated

The current OpsPortal build (per your screenshot) is explicitly read-only, no accounts created. This is a scope gap against what she's asking for, not an implementation detail.

### 3. Logs API access for Compass central users
From the 27 Jul thread, Rama's own description of the OpsPortal commits to this, and Huiting's inline reply confirms it as a requirement:
> "Please also ensure Compass central users have access to the logs API sent by POCDEX, to help troubleshoot subsequently."

This is more specific than "API response traceability" — it's a named POCDEX capability (a logs/audit API) that Compass users need read access to. Status unconfirmed — not verifiable from Jira in this session (OTEP-830/831, the two backlog tickets Rama referenced for "Eliminate Manual Data Patching" and "Enhanced Ops Support," returned a permissions error when checked; confirm access or check with Rama directly).

### 4. Scheduled reconciliation sweep (new — proposed 13 Aug, not yet raised with Huiting)

Rama's 27 Jul email confirms the OpsPortal mechanism is already a **live** compare: "CC will still have an Ops portal to facilitate CC Central Users to call POCDEX API live to compare the data stored in CC (i.e. first login) vis-à-vis the latest [POCDEX record]." That answers detection *on demand* — the gap is that nothing triggers the check proactively. Today, drift is only found if an Ops person happens to look up that specific officer.

**Proposal:** a scheduled (e.g., nightly) batch job that loops the existing live-compare call across the officer population and outputs a diff report, instead of waiting for a manual per-officer lookup. This sits between the two ends of the spectrum already scoped: pure manual lookup (built) and full automated re-ingest/real-time change detection (explicitly deferred, out of scope above).

**Before proposing this to Huiting, needs checking:**
- **API load.** Rama's non-functional requirements doc (24 Jul thread) sized POCDEX usage around ~25,000 monthly active sessions × 4 calls plus estimated Ops-query volume, with a stated P95 100ms response target and ~5 requests/min expected rate. A full-population daily sweep is a materially different load pattern — every officer, every day, independent of login activity — and should be checked against POCDEX's capacity before assuming it's free.
- **POCDEX's posture on unplanned load.** Huiting has repeatedly pushed back on ad hoc/repeated testing cycles straining both teams (her 9 Aug email: *"ad-hoc or iterative testing cycles can place a strain on both teams and divert focus away from delivering real impact"*). A sweep should be proposed to her as a scoped, agreed cadence, not started unilaterally.
- **Still needs write-back.** A diff report only surfaces drift — it doesn't act on it. This is additive to, not a substitute for, item 2 above. Someone (or some rule) still has to decide what to do with each flagged divergence, especially the wrong-person-mapping cases (TC2/TC8/TC9) where auto-applying the "live" value could make things worse.
- **Scale.** MVP is ~1,600–1,900+ users per onboarding wave (24 Jul thread) — a real batch job (schedule, error handling for mid-sweep API failures, how diffs surface to Ops), not just "loop the existing call."

This is the natural fast-follow for Pattern A (stale data after a life-cycle event — TC1/TC3/TC7) without needing full real-time push-based sync.

---

## What's confirmed built vs. not, as of today

| Capability | Status | Evidence |
|---|---|---|
| Read-only officer lookup (email → POCDEX vs. CC comparison) | 🟡 Prototyped, **not live** | Screenshot shared with Huiting, prompted her concerns — deployment status unconfirmed, needs checking with Rama |
| Recent-checks history log | 🟡 Prototyped, **not live** | Visible in screenshot — same caveat |
| Write-back from OpsPortal to CC profile | ❌ Not built | Explicitly "read-only, no accounts created" per screenshot; matches her "short term" ask, meaning she expects this soon |
| Blast-radius / bulk-affected-officer lookup | ❌ Not built | No evidence found |
| POCDEX logs API access for Compass users | ❓ Unconfirmed | Committed to in principle (27 Jul thread); ticket status unverifiable this session |
| WOG AD → stored profile identity matching (is NRIC the join key?) | ❓ Unconfirmed | Raised by Adrian 13 Aug — not previously documented anywhere found in this workspace |
| Timestamp-based change detection mechanism | ❓ Not designed | Raised by Adrian 13 Aug — no existing design found |
| TC1–TC14 scenario resolution | 🟡 Partially open | Table exists, most rows unresolved ("similar issue as TC2"), needs joint session |
| OTEP-830 (manual patching / sync issue, post-MVP backlog) | ❓ Unconfirmed | Referenced by Rama 24 Jul as created; couldn't verify via Jira API this session |
| OTEP-831 (employment profile versioning, "Enhanced Ops Support") | ❓ Unconfirmed | Same as above |

---

## Discovery scope

**Deliverable (per Adrian, 13 Aug):** not a build — a **quick sizing** of scope, complexity, and effort, so stakeholders have assurance the <1% affected-officer problem is being actively managed rather than a shipped write-back capability. Output should be sizeable enough to report a number/estimate, not just a design direction.

**In scope:**
- Joint working session with POCDEX (Huiting, possibly Dawn/Xian Zhang) to fill in the TC1–TC14 "seen in Ops module" column for the 6 priority-flagged rows first
- Confirm current status of OTEP-830 and OTEP-831 with Rama directly (session couldn't verify via API)
- Confirm OpsPortal's actual deployment status with Rama (prototype vs. live) — this gates everything else
- **Answer Adrian's 3 technical questions directly, with Rama/Engineering:**
  1. Identity matching: does WOG AD login resolve to the stored profile via NRIC, or another identifier? Confirm the actual join key.
  2. Change-detection mechanism: if timestamp-based, what are the failure modes (partial field updates not bumping the timestamp, clock skew, POCDEX-side timestamp semantics)?
  3. Re-pull trigger: once a change is detected, is re-pulling from POCDEX automatic, or a separate manual/approval step?
- Scope write-back mechanism: what fields are correctable, who can trigger it (L1 ops vs. engineering), audit trail requirements
- Scope blast-radius lookup: given a root-cause pattern (e.g., "email not updated after transfer"), find all affected officers
- Confirm logs API access status and, if not built, scope what Compass central users need from it
- Scope a scheduled reconciliation sweep (nightly batch diff via the existing live-compare call) as the fast-follow for proactive detection — check API load/capacity with Rama and propose cadence to Huiting rather than assume it
- Reference and close out the Day-2 profile-change detection question from Adrian's Wed 12 Aug UAT standup update (same underlying problem, different angle — don't run as a separate workstream)

**Out of scope for this discovery (defer):**
- Full automated re-ingest / change-detection trigger (the bigger POCDEX sync-cadence question, #56-adjacent) — this discovery covers manual/semi-manual troubleshooting tooling first, automation is a separate, larger effort
- CAM integration (explicitly scoped as post-MVP in the 27 Jul thread)
- Historical/effective-dated data (learning history, posting history) — explicitly deferred to post-MVP discovery per the thread

**Non-goals (explicitly, to set with Huiting):**
- This discovery will not resolve all 14 TC scenarios in one session — treat the 6 priority rows as the MVP bar, the rest as a working backlog

---

## Plan / sequence

| Step | Owner | Target |
|---|---|---|
| 1. Confirm OTEP-830/831 status directly with Rama | Michelle | This week |
| 2. Draft reply to Huiting's 9 Aug email — acknowledge TC1–TC14, propose joint session | Michelle | Today/tomorrow |
| 3. Joint TC1–TC14 working session (6 priority rows) with POCDEX + Rama | Michelle, Rama, Huiting | Next 1-2 weeks |
| 4. Scope write-back + blast-radius capability with Engineering | Michelle, Rama | Following working session |
| 5. Confirm logs API access scope/status | Michelle, Rama, Pow Hwee | In parallel with step 1 |
| 6. Check POCDEX API load/capacity for a scheduled sweep with Rama; propose cadence to Huiting | Michelle, Rama | After step 3, before committing to build |
| 7. Draft PRD to Solution Review stage once scope is confirmed | Michelle | After steps 3-6 |

**Immediate next action:** don't start from a blank discovery brief — reply to Huiting's actual email first, since she's waiting on a response and has already done the work of framing the test matrix.

---

*Generated: 2026-08-13*
*Source: Huiting Lian email thread "RE: Draft for Data Sharing Approval for CareerCompass" (9 Aug 2026, forwarded 13 Aug), cross-referenced against 2026-07-23 CC-POCDEX requirements meeting note and 2026-08-11 POCDEX data classification thread.*
