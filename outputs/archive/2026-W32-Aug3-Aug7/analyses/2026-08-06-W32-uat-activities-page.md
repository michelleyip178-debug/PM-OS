---
date: 2026-08-06
week: 2026-W32
purpose: CSC/DLE integration plan — objectives, R&R, workstreams, preparation tasks, and phased timeline for SIT and UAT
source_page: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2523532152
sources: outputs/analyses/2026-08-05-W32-uat-page-proposed-structure.md, outputs/analyses/2026-08-05-W32-csc-dle-integration.md, outputs/analyses/2026-08-05-W32-timeline-raid-log.md, live Confluence — "CSC Integration — SIT Daily Activities Log" (page 2518815515, v19, pulled 2026-08-06)
status: draft — refreshed against the live daily activities log; still needs Rama's confirmation on the CSC-track UAT date and R&R names before publishing
---

# CSC/DLE Integration Plan — Course / Learner File / JumpStart / SSO

## 1. Objectives

**What this plan gets us:** officers in CareerCompass can seamlessly access CSC Learn course content, get accurately mapped to their CSC Learn (DLE) identity, sign in once via SSO, and receive personalised course recommendations from JumpStart — with no second login wall, no data-trust gaps, and no unresolved defects carried into production.

**Success looks like, by workstream:**

| Workstream | Objective |
|---|---|
| WS1 — Course Integration | CC can consume both paid and free courses via CFT, imported per spec, with no manual intervention once the pipe is proven |
| WS2 — Learner File / DLE Mapping | Every officer is correctly and safely mapped to their DLE identity — no silent bad mappings, no duplicate records on refresh |
| WS3 — SSO | Officers access CSC Learn through one seamless session — no second login, no broken session state on failure or expiry |
| WS4 — JumpStart | CC retrieves accurate, personalised course recommendations via the JumpStart API |
| Cross-workstream | One proven end-to-end journey (import → map → sign in → recommend) for a real officer, before SIT is declared complete |

**Out of scope:** performance/load testing (explicitly deferred given the compressed window).

---

## 2. Roles & Responsibilities

| Role | Person | Scope | Status |
|---|---|---|---|
| **Overall Integration Readiness Owner** | *Unassigned* | Cross-workstream defect triage, end-to-end validation, escalation when one workstream blocks another | 🔴 Not Started — assigned to "all parties to indicate," flagged twice by CSC as the single biggest coordination gap |
| SIT Plan Owner | Rama Moorthy | Tracker, daily status, VAPT implications | Active |
| WS1 — Course Integration | CSC: Marcus / Aderick Cheng · CC: *TBC* | Course file exchange, parsing, field mapping | 🔴 CC-side owner Not Started |
| WS2 — Learner File (DLE Mapping) | CSC: Kimberly Ng · CC: *TBC* | NRIC → DLE mapping, identity resolution | 🔴 CC-side owner Not Started |
| WS3 — SSO | CSC: Herman · CC: Pow Hwee, Imelda, Adrian Lo | Token validation, sign-in, session handling | 🟢 CC-side owned |
| WS4 — JumpStart | CSC: Yu Xuan Tay (on leave until 7 Aug) · CC: Adrian Lo | Recommendations API, catalogue matching | 🔴 CC-side owner (beyond Adrian individually) Not Started |

**Naming the CC-side owners for WS1, WS2, and WS4 is already an assigned action item — owned by Rama & Pow Hwee, Not Started as of 6 Aug.** This is a chase item, not a new ask.

**Coordination cadence:** Daily standup, driven off the dated tracker rather than the high-level Confluence plan. Slack for async updates, email for formal summaries.

---

## 3. Workstreams & Preparation Tasks

Each workstream needs specific preparation before SIT can close and before UAT can start. Status reflects the live daily activities log as of 6 Aug.

### WS1 — Course Integration / CFT File Transfer

| Preparation Task | Owner | Status |
|---|---|---|
| Share CFT credentials | Adrian Lo | ✅ Done, 4 Aug |
| Push course data into CFT (paid + subscription — corrected from "paid + digital learning"; 2 workflow IDs needed, CFT script updated to accommodate) | Aderick Cheng (GovTech) | 🔴 **5 Aug: triggered, but not received.** Imelda confirmed neither WS1 file arrived despite the webhook being correctly configured — a transport-layer failure, not "not yet attempted." Root cause investigation is shared with WS2 below, tracked once, not twice. |
| Confirm file downloaded, imported, and parsed per CSC Course Data Specs | TBC | 🔴 Blocked on the shared CFT diagnosis (see WS2 below) |
| Test CFT file-transfer process end-to-end | Aderick Cheng (CSC) + Peter Low | 🔴 Not Started |
| Decide whether to prepone CSC's automated file extraction (targeted 24 Aug) given a possible UAT slip to 31 Aug | TBC | 🔴 Needs an owner to even decide |

### WS2 — Learner File & Mapping (DLE)

| Preparation Task | Owner | Status |
|---|---|---|
| Share CFT credentials for Learner File | Adrian Lo | ✅ Done, 4 Aug |
| Push mapping file to CFT | Aderick Cheng | 🔴 **Corrected 5 Aug — not actually done.** Previously logged ✅ on the live activities log (4 Aug), but Imelda confirmed 5 Aug the file was triggered via adhoc CFT transfer and never received, despite the webhook being correctly configured. Same unresolved transport issue as WS1 above. |
| **Investigate why the webhook-confirmed CFT transfer didn't deliver any of the 3 files** (2 WS1 + this one) | **Unassigned** | 🔴 New, unresolved as of 5 Aug — **single root-cause investigation covering both WS1 and WS2, not two separate ones** |
| Verify mapping file format and confirm with the team | Adrian Lo | 🔴 Blocked — can't verify a file that was never received |
| Confirm who supplies the mapping file, on what channel, at what refresh cadence | Kimberly Ng (CSC) / TBC (CC) | 🔴 Highest-leverage open item — blocks WS3's test accounts; Imelda syncing with Kimberly |

### WS3 — SSO with CSC

| Preparation Task | Owner | Status |
|---|---|---|
| Exchange infra info so DLE can connect to CC endpoints | Adrian Lo / Aderick (CSC), Pow Hwee (config) | 🟡 In Progress — intranet DNS resolution failing; service request filed (Boon Siang), Slack thread live, no resolution date |
| Complete SSO config | Herman (CSC) + Pow Hwee (CC) | 🟡 In Progress — config values sent by Peter (CSC) to Pow Hwee, 5 Aug |
| Complete infra provisioning | Adrian Lo | 🔴 Not Started as of 5 Aug |
| Confirm intranet-routing decision is actually reflected in SSO config (decided ≠ implemented) | Unassigned | 🔴 Not Started |
| CSC provides mapped + unmapped test accounts | Herman (CSC) | 🔴 Depends on WS2 landing |

### WS4 — JumpStart Recommendation Integration

| Preparation Task | Owner | Status |
|---|---|---|
| Share API details with CC | — | ✅ Done, 4 Aug |
| Whitelist CC IP address on JumpStart | — | ✅ Done, 4 Aug |
| Configure egress to allow JumpStart API in UAT environment | — | ✅ Done, 4 Aug |
| Confirm CC can connect to the JumpStart Recommendation API using the UAT env | TBC | 🔴 Not Started as of 5 Aug — Overall System Design needs updating |
| Provide course mock data for testing account (export from CC's DB) | Adrian Lo | 🔴 Needed for UAT |
| Name a backup owner for the API-details handoff while Yu Xuan Tay is on leave (until 7 Aug) | TBC | 🔴 Not Started |

### Cross-Workstream

| Preparation Task | Owner | Status |
|---|---|---|
| Resolve cross-system account alignment (one learner ID across CC/CSC/JumpStart) | Unassigned | 🔴 Not Started — needed before end-to-end test can run cleanly |
| Agree the golden UAT test dataset / officer population | TBC | 🔴 Not Started |
| Resolve whether invalid-formatted-file (unhappy-path) testing belongs in SIT or UAT scope | Adrian + Imelda | 🔴 Unresolved |

---

## 4. Timeline

| Phase | Duration | Target Dates | Status |
|---|---|---|---|
| **SIT** | ~2 weeks | 27 Jul – 7 Aug | 🔴 2 working days left as of 6 Aug; WS1 course file still not landed |
| **SIT bug-fix / re-test window** | ~3–4 days | 8–11 Aug (implied by SIT close + UAT start) | 🟡 Not formally scheduled; watch for slippage into the UAT window |
| **UAT (OTEP-wide)** | ~3.5 weeks | 11 Aug – 4 Sep | 🟢 Committed |
| **UAT (CSC track)** | ~1.5–2 weeks | 24/25 Aug – 4 Sep (as tracked); possible slip to 31 Aug start | 🟡 Unconfirmed — needs Rama to settle whether 24/25 Aug or 31 Aug is current, and whether this track is genuinely separate from the OTEP-wide window |
| CSC automated file extraction goes live (replaces manual push) | — | 24 Aug | 🟡 Downstream of SIT close; less buffer if UAT slips to 31 Aug |
| **Go-live approval window** | ~1 week | 19–23 Oct | 🟡 Referenced for context — not this plan's critical path, but downstream of it |

**Flag, don't silently pick a date:** the CSC-track UAT start is unconfirmed until Rama settles it directly — this is a standing ask, not a new one.

---

## 4a. Estimated SIT Plan & Activity Timeline

Day-by-day estimate for the remaining SIT window and the bug-fix/re-test buffer, sequenced by dependency rather than by wishful compression. **This is an estimate, not a commitment** — several rows depend on blockers (WS1 course file, WS3 DNS) that have no resolution date yet, so treat the dates as "if resolved by X" rather than fixed.

| Day | Date | Activity | Depends on | Est. Duration |
|---|---|---|---|---|
| SIT Day 9 | 6 Aug (today) | WS1 + WS2: diagnose why 5 Aug's webhook-confirmed CFT transfers weren't received (all 3 files — 2 WS1, 1 WS2) | Unassigned — root cause not yet investigated | Unknown — this is now the actual blocker, not a "hasn't started" delay |
| SIT Day 9 | 6 Aug | WS2: confirm mapping cadence/channel (Imelda ↔ Kimberly) — separate from the non-receipt issue above | — | Same-day, if raised directly rather than left to standup |
| SIT Day 9 | 6 Aug | WS3: DNS service request continues; SSO config work continues in parallel | Central infra team's response — no ETA | Unknown — flagged risk of further delay if central-side |
| SIT Day 9 | 6 Aug | WS4: attempt JumpStart recommendation retrieval via UAT env | Connectivity prerequisites (done 4 Aug) | 0.5–1 day |
| SIT Day 10 | 7 Aug (SIT close, as scheduled) | WS1: import + parse course file, run A/B test cases, bug-fix if needed | Non-receipt issue resolved + file actually delivered — **not yet true as of 6 Aug** | 1 day — **at serious risk; the 5 Aug failure means this now depends on an undiagnosed transport problem, not just a scheduling slip** |
| SIT Day 10 | 7 Aug | WS2: run M-1/M-2 once cadence is confirmed and mapping file is actually received | Same non-receipt issue as WS1 | 0.5 day — **at risk for the same reason** |
| SIT Day 10 | 7 Aug | WS3: run SSO connectivity test, verify Learn Course Page access, run S-1/S-2/S-3 if test accounts have arrived | DNS resolved + WS2 test accounts | **At risk — both dependencies open as of 6 Aug** |
| SIT Day 10 | 7 Aug | WS3: sign off S-4/S-5/S-6 (Herman + Pow Hwee review Michelle's draft) | Draft already in progress since 5 Aug | 0.5 day, if reviewers are available |
| SIT Day 10 | 7 Aug | Cross-workstream: attempt GAP-16 end-to-end test, confirm no open P1 | WS1–WS4 all individually passing | **Unlikely to be ready same-day given WS1/WS3 status — see Risk below** |
| Bug-fix / re-test | 8–9 Aug (2 days) | Fix and re-run any failed SIT cases from 7 Aug | Which cases failed on 7 Aug | 2 days, compressed — this is the buffer, not a guarantee |
| Bug-fix / re-test | 10–11 Aug (2 days) | Second-pass re-test + SIT sign-off across all 4 workstreams | Bug-fix window above | 2 days |
| UAT prep | 12–23 Aug (~2 weeks) | Golden dataset agreement, cross-system account alignment, UAT entry criteria confirmed per workstream | SIT sign-off | ~2 weeks — **this is the unexplained gap flagged separately in the RAID log; no stated activity fills all of it yet** |
| UAT (CSC track) | 24/25 Aug or 31 Aug (unconfirmed) – 4 Sep | S-1/S-2/S-3, business validation cases, recommendation quality testing — executed by Compass BOs | SIT sign-off + UAT prep | 1.5–2 weeks |

**Biggest schedule risk in this estimate:** the plan above assumes SIT closes on time (7 Aug) with all four workstreams passing same-day. As of 6 Aug, this is now less likely than a day ago — WS1's and WS2's files were actually **triggered on 5 Aug via CFT with a correctly-configured webhook, and still weren't received.** That's a harder problem than "the push hasn't started yet": it means the transport layer itself is unproven, with no root cause identified and nobody yet assigned to investigate (see 2.1.1a). Combined with WS3's still-unresolved DNS issue, three of four workstreams now have an active, undiagnosed technical blocker with no resolution date — this is the same "SIT window has almost no slack" risk already flagged in the timeline RAID log, now with a second confirmed failure mode.

---

## 4c. Revised Timeline — Based on Explicit Assumptions

Section 4a assumed SIT would close on time (7 Aug). It won't — two of the three blockers below have no resolution date attached to them yet. This section reprojects the timeline using stated, named assumptions rather than leaving the "if resolved by X" language unresolved. **Change any assumption and the dates move — that's the point of naming them.**

**Assumptions used:**

| # | Assumption | Basis |
|---|---|---|
| A1 | CFT non-receipt (WS1 + WS2) takes **2–3 working days** to diagnose and fix, once someone is assigned | Realistic case — cross-team investigation (GovTech + CSC infra), no confirmed root cause yet; treated as harder than a config tweak, easier than a full infra rebuild |
| A2 | WS3 intranet DNS resolution takes **3–4 working days** from the 5 Aug service-request filing | Service request already filed 5 Aug; resolution depends on a central infra team with no committed SLA — explicit "risk of further delay if central-side" already flagged |
| A3 | Someone is assigned to A1 **today (6 Aug)** — the clock in A1 doesn't start until an owner exists | 2.1.1 currently shows ⚪ Unassigned; if this slips further, add those days on top |
| A4 | Bug-fix/re-test window holds at 2 + 2 days once SIT actually closes, no new defects found beyond the two known blockers | Same assumption as the original Section 4a estimate — unchanged |

**Revised phase dates:**

| Phase | Original Target | Revised Estimate | Slip |
|---|---|---|---|
| WS1 + WS2 CFT issue resolved | — (not tracked as a milestone before) | 8–9 Aug (2–3 working days from 6 Aug, per A1/A3) | New critical-path item |
| WS3 DNS resolved | — (not tracked as a milestone before) | 8–11 Aug (3–4 working days from 5 Aug, per A2) | New critical-path item |
| **SIT actually closes** | 7 Aug | **11–12 Aug** | **~4–5 working days** |
| Bug-fix / re-test window | 8–11 Aug | 12–15 Aug (2+2 days, per A4) | Shifts wholesale |
| SIT sign-off | 11 Aug (implied) | **15 Aug** | **~4 working days** |
| UAT prep (dataset, account alignment, entry criteria) | 12–23 Aug (~2 weeks) | 16–27 Aug (~2 weeks, same duration, shifted start) | ~4 working days |
| **UAT (CSC track) starts** | 24/25 Aug (as tracked) or 31 Aug (revised, unconfirmed) | **28 Aug at the earliest**, assuming the ~2-week UAT prep window isn't itself compressed | Already past both previously discussed dates |
| UAT (CSC track) ends | 4 Sep | 4 Sep (OTEP-wide UAT end date doesn't move) | **UAT window compresses from ~1.5–2 weeks to ~1 week** |

**What this actually means:** under these assumptions, SIT slips about 4–5 working days, which eats directly into CSC-track UAT — not by delaying its start further, but by **compressing how long UAT itself has to run**, since the OTEP-wide UAT end date (4 Sep) doesn't move. If CSC-track UAT was tight at "1.5–2 weeks" before, it's now closer to **1 week**, with no bug-fix buffer of its own if defects surface during UAT execution.

**This also reframes the "why 31 Aug" question already logged in the RAID log.** If SIT genuinely doesn't close until 11–12 Aug under these assumptions, a 31 Aug UAT start (not 24/25 Aug) starts to look less like an unexplained CSC ask and more like a real reflection of the compounding delay — worth raising this connection with Rama directly rather than treating "why 31 Aug" and "why is SIT late" as two separate questions.

**Downstream risk not addressed by this revision:** the go-live approval window (19–23 Oct) and VAPT closure date conflict (16 Oct vs. 23 Oct) are unchanged in Section 4 above — this revision only reprojects up to UAT. If UAT itself slips further (a real possibility given the newly-compressed window), the go-live buffer question becomes more urgent, not less.

---

## 4b. Work Breakdown Structure (SDLC phases)

Same scope as Sections 3–4a, reorganized into a standard SDLC WBS — phase-first instead of workstream-first. IDs are `[Phase].[Workstream].[Task]` for traceability back to Section 3. **Status/Owner columns marked ⚪ No Status or ⚪ Unassigned are called out explicitly in the flag table at the end of this section — nothing here is invented to fill a gap.**

### 1.0 Integration Setup (Governance & Credentials)

| WBS ID | WS | Task | Owner | Status |
|---|---|---|---|---|
| 1.1 | — | Name Overall Integration Readiness Owner | All parties to indicate | 🔴 Not Started |
| 1.2 | WS1 | Assign CC-side owner | Rama & Pow Hwee (assigned to name someone) | 🔴 Not Started |
| 1.3 | WS2 | Assign CC-side owner | Rama & Pow Hwee (assigned to name someone) | 🔴 Not Started |
| 1.4 | WS4 | Assign CC-side owner | Rama & Pow Hwee (assigned to name someone) | 🔴 Not Started |
| 1.5 | WS1 | Share CFT credentials — Course File | Adrian Lo | ✅ Done, 4 Aug |
| 1.6 | WS2 | Share CFT credentials — Learner File | Adrian Lo | ✅ Done, 4 Aug |
| 1.7 | WS4 | Share API details — JumpStart | — | ✅ Done, 4 Aug |
| 1.8 | WS4 | Whitelist CC IP on JumpStart | — | ✅ Done, 4 Aug |
| 1.9 | WS4 | Configure UAT-environment egress for JumpStart | — | ✅ Done, 4 Aug |

### 2.0 Build / Data Integration (per workstream)

| WBS ID | WS | Task | Owner | Status |
|---|---|---|---|---|
| 2.1.1 | WS1 + WS2 | Diagnose why the 5 Aug CFT push (2 WS1 files + 1 WS2 file, all webhook-confirmed) never delivered | **⚪ Unassigned** | 🔴 New, unresolved as of 5 Aug — root cause investigation, one shared thread, not three separate pushes to retry blindly |
| 2.1.2 | WS1 | Re-trigger course data push into CFT, once 2.1.1 identifies the fix | Aderick Cheng (GovTech) | 🔴 Blocked on 2.1.1 — don't re-trigger before the root cause is known, same failure is likely to repeat |
| 2.1.3 | WS1 | Test CFT file-transfer process end-to-end | Aderick Cheng + Peter Low | 🔴 Not Started |
| 2.2.1 | WS2 | Re-trigger mapping file push into CFT, once 2.1.1 identifies the fix | Aderick Cheng | 🔴 Blocked on 2.1.1 — same reasoning as WS1 above |
| 2.2.2 | WS2 | Verify mapping file format | Adrian Lo | 🔴 Blocked — can't verify a file that hasn't successfully arrived yet |
| 2.2.3 | WS2 | Confirm mapping cadence/channel | Kimberly Ng (CSC) / **⚪ Unassigned (CC)** | 🔴 Not Started — highest-leverage blocker |
| 2.3.1 | WS3 | Exchange infra info for DLE↔CC endpoint connectivity | Adrian Lo / Aderick (CSC), Pow Hwee (config) | 🟡 In Progress — DNS resolution failing |
| 2.3.2 | WS3 | Complete SSO config | Herman (CSC) + Pow Hwee (CC) | 🟡 In Progress |
| 2.3.3 | WS3 | Complete infra provisioning | Adrian Lo | 🔴 Not Started as of 5 Aug |
| 2.4.1 | WS4 | Confirm JumpStart Recommendation API connectivity via UAT env | **⚪ Unassigned** | 🔴 Not Started |
| 2.4.2 | WS4 | Provide course mock data for testing account | Adrian Lo | 🔴 Not Started |

### 3.0 System Integration Testing (SIT)

| WBS ID | WS | Task | Owner | Status |
|---|---|---|---|---|
| 3.1.1 | WS1 | Run SIT test cases (A-1 through B-2 + GAPs) | **⚪ Unassigned** | ⚪ No Status — SIT test cases have no assigned executor yet |
| 3.2.1 | WS2 | Run SIT test cases (M-1, M-2 + GAPs) | **⚪ Unassigned** | ⚪ No Status |
| 3.3.1 | WS3 | Confirm intranet-routing decision reflected in SSO config (decided ≠ implemented) | **⚪ Unassigned** | 🔴 Not Started |
| 3.3.2 | WS3 | CSC provides mapped + unmapped test accounts | Herman (CSC) | 🔴 Depends on WS2 |
| 3.3.3 | WS3 | Sign off S-4/S-5/S-6 (engineering-owned) | Herman (CSC) + Pow Hwee (CC), drafted by Michelle | 🟡 In Progress since 5 Aug, sign-off pending |
| 3.3.4 | WS3 | Confirm test accounts have arrived so S-1/S-2/S-3 are ready to execute | **⚪ Unassigned** | 🔴 Not Started — the actual execution of S-1/S-2/S-3 is a UAT-phase item, see 6.1; this row is the SIT-phase readiness gate only |
| 3.4.1 | WS4 | Run SIT test cases (J-1, J-2 + GAP-15) | **⚪ Unassigned** | ⚪ No Status |
| 3.4.2 | WS4 | Investigate JumpStart/CSC staging data mismatch | **⚪ Unassigned** | 🔴 Not Started |
| 3.5.1 | Cross | Resolve cross-system account alignment (one learner ID across CC/CSC/JumpStart) | **⚪ Unassigned** | 🔴 Not Started |
| 3.5.2 | Cross | Write + run GAP-16 end-to-end Course Journey test | **⚪ Unassigned** | 🔴 Not Started — highest-priority gap in the programme |
| 3.5.3 | Cross | Resolve SIT vs. UAT scope for invalid-formatted-file testing | Adrian + Imelda | 🔴 Unresolved |
| 3.5.4 | Cross | Confirm no open P1 defect across all 4 workstreams | Integration Owner | ⚪ No Status — role itself unfilled (see 1.1) |

### 4.0 Bug-Fix / Re-Test

| WBS ID | WS | Task | Owner | Status |
|---|---|---|---|---|
| 4.1 | All | Fix + re-run failed SIT cases | **⚪ Unassigned** | ⚪ No Status — depends on which cases fail 7 Aug, can't assign yet |
| 4.2 | All | Second-pass re-test + SIT sign-off | **⚪ Unassigned** | ⚪ No Status |

### 5.0 UAT Preparation

| WBS ID | WS | Task | Owner | Status |
|---|---|---|---|---|
| 5.1 | Cross | Agree golden UAT test dataset / officer population | **⚪ Unassigned** | 🔴 Not Started |
| 5.2 | WS1 | Decide whether to prepone CSC's automated file extraction | **⚪ Unassigned** | 🔴 Needs an owner to even decide |
| 5.3 | WS4 | Name backup owner for API-details handoff (Yu Xuan Tay on leave) | **⚪ Unassigned** | 🔴 Not Started |
| 5.4 | WS3 | Confirm one-shared-test-account approach sufficient for 20 UAT personas | **⚪ Unassigned** | 🔴 Not Started |
| 5.5 | WS4 | Define authoritative test dataset / mock data prep timeline | **⚪ Unassigned** | 🔴 Not Started |
| 5.6 | WS1 | Define business-level field accuracy checks (deferred from SIT) — feeds 6.3 | **⚪ Unassigned** | ⚪ No Status — not yet specced |
| 5.7 | WS2 | Define business validation of officer resolution (deferred from SIT) — feeds 6.4 | **⚪ Unassigned** | ⚪ No Status — not yet specced |

### 6.0 UAT Execution

| WBS ID | WS | Task | Owner | Status |
|---|---|---|---|---|
| 6.1 | WS3 | Execute S-1/S-2/S-3 (business validation) — same test IDs as 3.3.4's SIT-phase readiness check | Compass BOs (execution) / **⚪ Unassigned (prep)** | ⚪ No Status |
| 6.2 | WS4 | Execute recommendation quality/relevance validation | Compass BOs (execution) / **⚪ Unassigned (prep)** | ⚪ No Status |
| 6.3 | WS1 | Execute UAT test cases (business-level accuracy, GAP-2 UI check) — cases defined at 5.6 | Compass BOs (execution) / **⚪ Unassigned (prep)** | ⚪ No Status |
| 6.4 | WS2 | Execute UAT test cases (officer resolution validation) — cases defined at 5.7 | Compass BOs (execution) / **⚪ Unassigned (prep)** | ⚪ No Status |

---

### ⚠️ Items with No Status or No Owner — flagged for grooming/assignment

**No owner at all (⚪ Unassigned):**

| WBS ID | Item |
|---|---|
| 2.1.1 | **New:** diagnose the 5 Aug webhook/CFT non-receipt issue affecting all 3 files (WS1 x2, WS2) |
| 2.2.3 | Mapping cadence/channel confirmation — CC side |
| 2.4.1 | JumpStart API connectivity confirmation via UAT env |
| 3.3.1 | Confirm intranet-routing decision reflected in config |
| 3.3.4 | Confirm test accounts have arrived (SIT-phase readiness gate for S-1/S-2/S-3) |
| 3.4.1 | Run WS4 SIT test cases |
| 3.4.2 | Investigate JumpStart/CSC staging data mismatch |
| 3.5.1 | Resolve cross-system account alignment |
| 3.5.2 | Write + run GAP-16 (highest-priority gap in the programme) |
| 4.1 / 4.2 | Bug-fix and re-test execution |
| 5.1 | Golden UAT dataset agreement |
| 5.2 | CSC file-extraction preponement decision |
| 5.3 | WS4 backup owner during Yu Xuan Tay's leave |
| 5.4 | Test-account sufficiency for 20 UAT personas |
| 5.5 | WS4 authoritative test dataset definition |
| 5.6 / 5.7 | UAT business-validation case prep (WS1, WS2) |
| 6.1–6.4 | UAT case prep (execution is Compass BOs, but nobody owns writing/prepping the cases) |

**No status at all (⚪ No Status — not even "Not Started" has been logged):**

| WBS ID | Item |
|---|---|
| 3.1.1 / 3.2.1 / 3.4.1 | SIT test-case execution for WS1, WS2, WS4 — cases are specced but nobody has logged intent to run them |
| 3.5.4 | P1-defect confirmation gate — blocked on the Integration Owner role itself not existing |
| 4.1 / 4.2 | Bug-fix and re-test — can't have status until 7 Aug's SIT results are known |
| 5.6 / 5.7 | UAT business-validation case definitions — not yet specced at all |
| 6.1–6.4 | All UAT execution items — nothing here has moved past "this exists as a concept" |

**Why this matters:** roughly a third of the full WBS has no owner, and most SIT/UAT test-execution items have no status tracked anywhere — not even "Not Started" on the live log. This is a bigger gap than any single blocker (WS1's file, WS3's DNS) — it means even if today's blockers clear, there's no one lined up to actually execute most of Section 3.0 and all of Section 6.0.

---

## 5. Success Criteria (SIT / UAT boundary)

**Stated plainly:** SIT proves the pipe connects and moves data without breaking. UAT proves the business can trust what lands.

| WS | SIT proves | Deferred to UAT |
|---|---|---|
| WS1 | File transfers via CFT; parses per spec; bad rows skipped without breaking the catalogue | Business-level field accuracy, officer-facing UI |
| WS2 | Mapping file loads via CFT; correct format accepted | Business validation of individual officer resolution |
| WS3 | SSO handshake completes over the agreed intranet route; hard failures and token expiry handled without broken session state | Business-level "is this the right officer" validation |
| WS4 | API connects, authenticates, returns a response | Recommendation quality/relevance (out of scope for SIT everywhere) |

**UAT Entry Criteria** (per workstream): SIT completed & signed off · spec/mechanism signed off · one clean run completed · sample files/test accounts supplied.

**UAT Exit Criteria:** no open P1 defect across all four workstreams before declaring SIT complete.

Full test-case-level detail (A/B/M/S/J IDs, 🟠 GAP rows, pass/fail tracking) lives in the companion grooming doc: `outputs/analyses/2026-08-06-W32-uat-workstreams-grooming.md`.

---

## Internal Only — Not for the CSC-Facing Page

Pulled out because these aren't CSC's to clarify — they're CareerCompass-side gaps or ongoing negotiations that would either confuse the shared page or expose an internal coordination problem CSC doesn't need visibility into.

| Item | What's unresolved | Who needs to clarify |
|---|---|---|
| CC-side owner for WS1, WS2, WS4 | No CareerCompass-side counterpart named | Already assigned to Rama & Pow Hwee (Not Started per live log) — chase, don't re-raise as new |
| VAPT closure date (16 Oct vs. 23 Oct) | Tracked internally in `risks.md`/`open-items.md` #39 — a Compass-side go-live planning question, not a CSC deliverable | Rama, directly (not via a shared CSC forum) |
| Possible duplicate SSO tracking | WS3 was rated Red at the CSC standup the same day OTEP Team 2's internal standup separately discussed "Keycloak/CSC SSO integration" — could be the same blocker viewed from two angles | Internal — confirm with Pow Hwee/Léo whether this is one thread or two |
| Yu Xuan Tay backup owner (WS4) | No backup named for the API-details handoff while she's on leave until 7 Aug | Technically CSC's staffing gap — raise internally with Adrian Lo first before deciding whether to push CSC directly |

---

*Restructured 2026-08-06 from a Confluence-style reference page into a plan (Objectives → R&R → Workstreams/Preparation Tasks → Timeline → Success Criteria). Detailed test-case specs moved to the companion grooming doc. Before pushing anywhere external: resolve the internal items above and confirm the CSC-track UAT date with Rama.*
