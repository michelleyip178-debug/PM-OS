---
date: 2026-08-04
week: 2026-W32
purpose: Sequenced action list to get all 4 CSC workstreams through SIT and UAT together, not just tracked separately
sources: SIT readiness sync (2026-08-03), CSC SIT/UAT tracker (2026-08-04), CSC integration plan draft (2026-08-04), Squad Sync (2026-08-04), Confluence source v42
status: draft — confirm sequencing and owners with Rama
---

# SIT/UAT Completion Checklist — All 4 Workstreams

**Why sequenced, not just listed:** WS2 (Learner File/DLE) sits on the critical path for both WS3 (SSO) and WS4 (JumpStart) — a WS2 delay silently stalls two other workstreams. This list is ordered so nothing downstream gets missed waiting on something upstream that was never flagged as blocking.

**Target:** SIT closes 7 Aug, UAT runs 24/25 Aug–4 Sep, close by 4 Sep. 3 working days left in the SIT window as of today.

---

## Phase 0 — Governance (do this first, unblocks everything else)

- [ ] **Name an Overall Integration Readiness Owner** — currently unassigned across both source docs; CSC asked for this directly on 3 Aug. Without this, cross-workstream blockers (like WS2 stalling WS3/WS4) have nowhere to escalate. *Owner: Rama to propose, Adrian Ang to confirm.*
- [ ] **Assign named CC-side owners for WS1, WS2, WS4** — WS3 already has this (Herman/Pow Hwee/Imelda/Adrian Lo); the other three still show *unassigned* in both the tracker and the live Confluence doc.
- [ ] **Publish the SIT success criteria per workstream** (what SIT proves vs. what's deferred to UAT) into the Confluence doc directly — resolves CSC's repeated "what counts as SIT success" question before it gets asked again mid-SIT.
- [ ] **Decide the daily coordination cadence** — Slack-only was agreed 3 Aug but flagged by CSC as possibly insufficient for a compressed window; reassess now rather than after day 1–2 slips.

---

## Phase 1 — Unblock WS1 and WS2 (both currently stalled, both upstream of WS3/WS4)

**WS1 — Course Integration**
- [ ] CSC (Marcus) pushes course file to CFT workflow — **overdue, was due Aug 4**
- [ ] CC verifies file downloaded/imported, parses per spec, confirms count
- [ ] Bug-fix + re-test window (targeted Aug 5–6)
- [ ] Run B-1 (valid file imports) and B-2 (missing mandatory field) test cases

**WS2 — Learner File (DLE)**
- [ ] **Confirm who supplies the mapping file, on what channel, at what refresh cadence** — flagged unconfirmed in the source doc, the tracker, and the DLE-specific tracker built for Imelda. This is the single highest-leverage unblock in this whole list, because WS3 and WS4 both wait on it.
- [ ] DLE pushes `dle_id, nric` file to CFT mapping workflow (in progress)
- [ ] CC downloads, parses, reports row count
- [ ] Bug-fix + re-test window (targeted Aug 4–6)
- [ ] Run M-1 (officer linked correctly) and M-2 (re-supply overwrites) test cases
- [ ] *(Gap, not yet in source)* Add a test case for an unmapped/invalid NRIC caught **at WS2 itself**, not just downstream at WS3 (S-2) — currently a bad mapping could pass silently

---

## Phase 2 — WS3 (SSO), gated on WS2 producing test accounts

- [ ] CSC (Herman) completes SSO config; CC (Pow Hwee) completes infra provisioning
- [ ] **CSC provides mapped + unmapped test accounts** — this literally cannot happen until WS2's mapping file is live and correct (Phase 1 dependency)
- [ ] Run SSO connectivity test (Aug 6 target)
- [ ] Verify Learn Course Page viewable from CareerCompass without separate CSC login (Aug 7 target)
- [ ] Confirm the intranet-routing decision (3 Aug) is actually reflected in the SSO config, not just documented as a decision
- [x] **Write S-4, S-5, S-6 test steps into the live Confluence doc** — ✅ Done 2026-08-05, pushed to source
- [ ] Run S-4/S-5/S-6 (SIT-phase, engineering-owned — Herman + Pow Hwee)
- [ ] Bug-fix + re-test window (targeted Aug 11–12)
- [ ] Run S-1/S-2/S-3 (UAT-phase, BO-executable) once test accounts land

---

## Phase 3 — WS4 (JumpStart), gated on WS1 + WS2 for full end-to-end

- [ ] CSC provides mock course data + learner ID mapping (in progress)
- [ ] CC receives and configures mock data / learner ID mapping
- [ ] CSC Learn provides API base URL + key; confirm endpoint reachable
- [ ] Confirm `POST /recommendations/dashboard` succeeds
- [ ] Bug-fix window if needed (targeted Aug 5–6)
- [ ] Run J-1 (mapped officer, personalised) and J-2 (mapped officer, no matches) test cases

---

## Phase 4 — Cross-workstream, can only run once WS1–WS4 individually pass

- [ ] **Write and run the end-to-end Course Journey test (GAP-16)** — import (WS1) → map (WS2) → sign in (WS3) → see recommendation (WS4), one real officer, no manual intervention. Currently just a placeholder, never written. This is the test that actually proves "all workstreams complete together," not just individually.
- [ ] Resolve cross-system account alignment (WS1/WS2/WS4 need one learner ID resolving consistently across Career Compass, CSC, and JumpStart) — currently coordinated by email only, no formal checklist or owner
- [ ] Confirm no open P1 defect across all four workstreams before declaring SIT complete

---

## Phase 5 — Entry gate to UAT (25 Aug)

All of the following must be true before UAT starts, not per-workstream in isolation:

- [ ] SIT signed off across all four workstreams (not just individually — Phase 0's Integration Readiness Owner should be the one confirming this collectively)
- [ ] Course file spec + DLE mapping file spec both signed off
- [ ] SSO mechanism + test accounts confirmed (includes S-4/S-5/S-6 passing)
- [ ] JumpStart endpoint + key in place
- [ ] One clean run completed per workstream
- [ ] **Resolve whether the CSC-track UAT window (24/25 Aug–4 Sep) is genuinely separate from the OTEP-wide UAT window (11 Aug–4 Sep, `open-items.md` #39)** — unresolved, needs Rama to confirm before UAT start, otherwise two tracks may collide or double-count effort
- [ ] Golden test dataset / agreed officer population defined for UAT — currently doesn't exist

---

## Phase 6 — UAT exit gate (4 Sep)

- [ ] WS1: B-1 + B-2 pass, exact count on known-good import
- [ ] WS2: valid mapping loads, overwrite not duplicate
- [ ] WS3: S-1/S-2/S-3 pass (mapped sign-in, unmapped handled, session persists)
- [ ] WS4: J-1/J-2 pass (personalised recs, graceful empty-response)
- [ ] GAP-16 end-to-end Course Journey passes
- [ ] No open P1 defect across all four workstreams
- [ ] Deliverables complete: executed scenario logs, defect log (routed by side), data-quality feedback log for CSC, UAT summary + sign-off with residual limitations recorded

---

## What's currently missing entirely (not gaps in test coverage — gaps in the plan itself)

- No test case for bulk partial-failure handling (WS1), empty file handling (WS1), duplicate/re-submitted file (WS1), transport/transfer failure (WS1)
- No test for a second/subsequent DLE refresh cycle (WS2, beyond the one overwrite M-2 tests)
- No catalogue enrichment/omission, popularity fallback, opt-in config, or never-mapped-officer test (WS4)
- Performance/load testing — explicitly out of scope given the compressed window, but worth stating that decision explicitly in the Confluence doc rather than leaving it implicit

---

*Built 2026-08-04 from both source docs plus today's meetings. This is the operational sequence — pair with the [Confluence integration plan draft](2026-08-04-W32-csc-integration-plan-confluence-draft.md) for the governance/ownership layer, and the [DLE tracker](2026-08-04-W32-dle-tracker.md) for the WS2-specific detail to share externally.*
