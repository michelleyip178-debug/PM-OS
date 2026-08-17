---
date: 2026-08-05
week: 2026-W32
purpose: Daily activity log for the CSC SIT integration, matching the format of the live Confluence "SIT Daily Activities" page so entries can be copy-pasted directly.
source_page: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2518815515/CSC+Integration+SIT+Daily+Activities+Log
status: LIVE — add a new dated row block each day; don't edit past dates, only append. Reconciled against live Confluence v23 (Imelda Mo, 2026-08-06T02:13 UTC).
---

# CSC Integration — SIT Daily Activities Log

**Status:** 🟢 Completed · 🟡 In Progress · 🔴 Not Started

---

## 🔴 Overall Health: RED — SIT was due to close 7 Aug; WS4 complete, WS1/WS2 blocked on a confirmed CFT eventing defect, WS3 workaround in place but unresolved, UAT target (31 Aug) reaffirmed without dependency closure

| | Cross-WS | WS1 Course | WS2 Learner File | WS3 SSO | WS4 JumpStart |
|---|:---:|:---:|:---:|:---:|:---:|
| Status | 4 items open | 🟡 Blocked — file lands, event doesn't fire | 🟡 File generated + pushed 6 Aug, same eventing block | 🟡 Workaround live, root infra issue open | 🟢 **Complete** (per live log, 6 Aug) |

**The one thing that would move this fastest:** the CFT "FileDownload" event is confirmed **not being triggered from CFT** (per live log, 5–6 Aug) — a support ticket has been raised with the CFT HelpDesk. This is the shared root cause blocking both WS1 and WS2 from closing, even though files are landing.

**The one thing with a hard deadline collision:** Yu Xuan Tay (WS4, API details) was on leave until 7 Aug — but per the live log, WS4 activities (course recommendation retrieval, mock data) are now marked ✅ Completed as of 5–6 Aug, so this is resolved in practice even without a formal backup owner ever being named.

**The one decision sitting unowned:** WS3's intranet DNS resolution is confirmed broken (internet works, intranet doesn't). **Per the live log:** the team is now testing over internet routing while waiting for intranet infra provisioning, and PH (Pow Hwee) has been **removed as an owner on the infra-troubleshooting item** — infra now sits with the core/central team, PH covers config and dev only. The "continue troubleshooting vs. escalate" decision itself still has no named owner.

**New — a schedule risk, not a blocker:** the live log's new **UAT Readiness table** (see below) shows WS1 targeting 31 Aug with "None" noted as blockers — which doesn't reconcile with the CFT eventing defect still being open on the same page. WS3's UAT readiness date is listed as **"Unknown," owner TBC by Michelle** — worth closing that gap directly.

*Full checklist, by workstream, is below under "Pre-requisites for SIT." Full 6 Aug meeting detail: [2026-08-06-W32-csc-sit-progress-review.md](../meeting-notes/2026-08-06-W32-csc-sit-progress-review.md).*

---

## SIT Timeline: 27 July – 7 August 2026

---

## 4 August

| ✓ | WS | Activity | Owner | Status |
|---|:---:|---|---|:---:|
| ☑ | 1 | Adrian Lo shared CFT credentials with Aderick | Adrian Lo (TW-PSD) | 🟢 |
| ☑ | 1 | Aderick pushes Course Data into CFT (paid + digital learning) | Aderick Cheng (GovTech) | 🟢 **Corrected per live log — retroactively marked Completed**, though downstream verification did not follow through cleanly (see 5–6 Aug) |
| ☐ | 1 | File downloaded & imported; transfer confirmed with course count; parsed per CSC Course Data Specs | — | 🟡 Rescheduled → 5 Aug |
| ☐ | 1 | Test CFT file-transfer process (action item from 3 Aug SIT readiness sync) | Aderick Cheng (CSC) / Peter Low (Data) | 🟡 Rescheduled → 6 Aug |
| ☑ | 2 | Adrian Lo shared CFT credentials for Learner File | Adrian Lo (TW-PSD) | 🟢 |
| ☑ | 2 | Aderick pushed the mapping file to CFT | Aderick Cheng (GovTech) | 🟢 |
| ☐ | 2 | Adrian Lo to verify the file and update the team | Adrian Lo (TW-PSD) | 🟡 Rescheduled → 5 Aug |
| ☐ | 2 | **Confirm who supplies the mapping file, on what channel, at what refresh cadence** — highest-leverage open item, blocks WS3 test accounts | Kimberly (CSC) / *unassigned (CC)* | 🟡 Rescheduled — Imelda to sync w/ Kimberly |
| ☐ | 3 | Adrian Lo + Herman exchange infra info so DLE can connect to CC endpoints for SSO. If endpoint fails, Aderick shares IP to confirm intranet (not internet) resolution. **If CC intranet isn't accessible from DLE, VAPT scope needs updating.** | Infra: Adrian Lo / Herman Hartoyo (CSC) · Config: Pow Hwee | 🟡 Rescheduled — Adrian Lo to share endpoint details by 5 Aug |
| ☑ | 4 | Share API details with CC | — | 🟢 Completed |
| ☑ | 4 | Whitelisting of CC IP address on JumpStart | — | 🟢 Completed |
| ☑ | 4 | Configure Egress to allow JumpStart API in UAT Environment | — | 🟢 Completed |
| ☐ | 4 | Get the course recommendation via the JumpStart Recommendation API — check UAT-env connectivity; Overall System Design needs updating | — | 🟡 Rescheduled |
| ☐ | 4 | Adrian Lo to provide course mock data for testing account (export from our DB) | Adrian Lo (TW-PSD) | 🟡 Rescheduled — sent to Imelda |
| ☐ | Gov | Name the Overall Integration Readiness Owner for each WS/activity | All parties to indicate an owner | 🔴 Not Started |
| ☐ | Gov | Assign named CC-side owners for WS1, WS2, WS4 (currently blank) | Rama | 🔴 Not Started — **corrected per live log: Pow Hwee's name was removed from this item, he only covers WS3** |

---

## 5 August

| ✓ | WS | Activity | Owner | Status |
|---|:---:|---|---|:---:|
| ☐ | 1 | Aderick pushes Course Data into CFT (paid + digital learning) | Aderick Cheng (GovTech) | 🟢 Completed, pushed from 4 Aug |
| ☐ | 1 | File downloaded & imported; transfer confirmed with course count; parsed per CSC Course Data Specs | — | 🟡 In Progress — **FileDownload event is not being triggered from CFT. Support ticket sent to CFT HelpDesk.** |
| ☐ | 1 | Prepare for bug fixing (file parsing) and re-test | — | 🟡 Rescheduled → 7 Aug |
| ☐ | 2 | Adrian Lo to verify the file; Compass reports if file isn't formatted per spec (`dlecourceid, identificationno`) | Adrian Lo (TW-PSD) | 🟡 In Progress — pushed to 6 Aug. **Same FileDownload event issue as WS1; support ticket sent to CFT HelpDesk.** |
| ☐ | 2 | Kimberly or Sy En to generate the file with the 15 NRIC/learner ID → send to Aderick to push to CFT | Kimberly (CSC) / Aderick | 🟡 Rescheduled — learner files need to be imported |
| ☐ | 2 | Rama to share the file from CFT with Imelda to check; if complete, facilitate account set-up across teams | Rama | 🟡 Rescheduled |
| ☐ | 2 | Bug-fix + re-test window | @Kimberly Ngu | 🟡 Rescheduled → 6 Aug |
| ☐ | 3 | Adrian Lo + Aderick exchange infra info so DLE can connect to CC endpoints for SSO | Infra: Adrian Lo/Aderick (CSC) · Config: Pow Hwee | 🟡 In Progress — domains do not resolve on intranet, reachable from internet. Egress IP requested so CC can whitelist for internet routing while intranet infra is provisioned. Service request filed (Boon Siang) — **potential risk of further delay if issue is at central side.** **PH removed as owner on this item — infra now sits with core team, PH covers config/dev.** |
| ☑ | 3 | Provide SSO config | Herman (CSC) | 🟢 Completed — config values sent by Peter (CSC) to Pow Hwee |
| ☐ | 3 | Test the SSO config and provide additional parameters to Herman | Pow Hwee | 🟡 Rescheduled → 7 Aug |
| ☐ | 3 | Complete infra provisioning | Adrian Lo | 🔴 **Removed** — Pow Hwee flagged as duplicate of the connectivity item above |
| ☐ | 3 | Write S-4/S-5/S-6 steps into the SIT/UAT source doc — needs confirmation from Herman and Pow Hwee | Michelle | 🟡 In Progress — team to confirm coverage |
| ☑ | 4 | Get the course recommendation via the JumpStart Recommendation API | — | 🟢 Completed |
| ☑ | 4 | Adrian Lo to provide course mock data for testing account | Adrian Lo (TW-PSD) | 🟢 Completed — sent to Imelda |
| ☐ | 4 | Bug-fix window if needed | — (Yu Xuan Tay, on leave until 7 Aug) | 🔴 **Removed** — not needed |

---

## 6 August

*Targets from the Integration Plan: WS3 SSO connectivity test; run the workstream test cases that are now unblocked.*

**Overall Risk Level: 🔴 Red** — root cause of the WS1/WS2 blocker confirmed and escalated to CFT HelpDesk; WS4 fully cleared; WS3 workaround in place but the underlying infra decision remains unowned; UAT date reaffirmed without confirming dependency closure.

| ✓ | WS | Activity | Owner | Status |
|---|:---:|---|---|:---:|
| ☐ | 1 | Bug fixing for file parsing and re-test | — | 🔴 Not Started |
| ☑ | 1 | Test CFT file-transfer process (action item from 3 Aug SIT readiness sync) | Aderick Cheng (CSC) / Peter Low (Data) | 🟢 Completed — brought from 4 Aug |
| ☐ | 2 | Adrian Lo to verify the file and update the team | Adrian Lo (TW-PSD) | 🟡 In Progress — pushed from 5 Aug. Same FileDownload event issue; support ticket with CFT HelpDesk |
| ☑ | 2 | Kimberly or Sy En to generate the file with the 15 NRIC/learner ID → send to Aderick to push to CFT | Kimberly (CSC) / Aderick | 🟢 Completed — pushed from 5 Aug; **Sy En generated on Kimberly's behalf, Aderick uploaded live during the SIT review meeting** |
| ☐ | 2 | Rama to share the file from CFT with Imelda to check; facilitate account set-up | Rama | 🔴 Not Started — pushed from 5 Aug |
| ☐ | 2 | Bug fixing & re-testing | — | 🔴 Not Started |
| ☐ | 3 | Adrian Lo + Aderick exchange infra info for SSO connectivity | Infra: core team · Config: Pow Hwee | 🟡 In Progress — pushed from 5 Aug. Service request filed, potential risk if central-side. **PH removed as infra owner — split confirmed: infra=core team, config/dev=PH** |
| ☐ | 4 | Sy En to check if course data is sent to JumpStart in the UAT env | Sy En | — Not yet statused on live log — **data-alignment validation, see risk below** |
| ☐ | 4 | Bug fixing if there is any | — | 🟣 **Removed — not needed, no bugs found** |

**Decisions:**

| # | Decision | Rationale | Risk Introduced |
|---|---|---|---|
| 1 | Proceed testing WS3 over internet routing as a temporary path while intranet stays unresolved | Connectivity tests suggest functional equivalence; unblocks SIT progress | 🟡 Medium — UAT may start on a non-production-intended connectivity path; intranet remains an open dependency |
| 2 | Split WS3 ownership: infra troubleshooting moves to the core/central team, Pow Hwee retains config + dev only | PH's original scope was too broad for one person given the infra escalation now in play | 🟢 Low — clarifies accountability, but the "who decides intranet vs. internet long-term" question is still unowned |
| 3 | Mark WS4 (JumpStart) fully complete | Rama confirmed with Temus no outstanding connectivity issues; live log shows all WS4 rows ✅ | 🟢 Low for SIT purposes — data-alignment validation (Sy En's check) is a late add and not yet statused |
| 4 | Reaffirm UAT target at 31 Aug, unconditionally | CSC/Temus restated commitment to the milestone | 🔴 High — reaffirmed without confirming CFT eventing (open, escalated to HelpDesk), WS3 infra (open), or full learner-file validation (in progress) are actually closed |
| 5 | Proceed with learner-file onboarding using manually generated test data | Removes dependency on Kimberly's availability | 🟡 Medium — SIT still hasn't exercised genuine system-generated files |
| 6 | Escalate CFT eventing issue to CFT HelpDesk via a formal support ticket | Root cause (FileDownload event not triggering) confirmed but not something the team can fix directly | 🟡 Medium — resolution now depends on an external support queue with no committed SLA |

**Escalation view (as-if-PM-owned):**

| Level | Item |
|---|---|
| 🔴 Red | CFT FileDownload event not firing (WS1 + WS2) — now with CFT HelpDesk ticket open |
| 🔴 Red | WS3 intranet infra dependency — escalated to core team, still unresolved |
| 🔴 Red | No proof yet of genuine end-to-end automation |
| 🟡 Amber | JumpStart/CSC dataset alignment check (Sy En) — newly assigned, not yet statused |
| 🟡 Amber | Learner-file loading/verification incomplete (blocked on eventing fix) |
| 🟡 Amber | VAPT scope not finalized |
| 🟢 Green | WS4 — fully complete per live log |
| 🟢 Green | Course data SIT validation |
| 🟢 Green | Cross-team collaboration and responsiveness |

**Risks surfaced 6 Aug (carried to watchlist below):**
- SIT is being validated against manually generated files, not genuine system-generated ones
- True end-to-end automation (generate → transfer → event → ingest → process) hasn't been demonstrated — only the first step (file visible on arrival) has
- No defined data reconciliation strategy (missing records, duplicates, failed deltas)
- Operational support ownership for BAU is undefined — every blocker this week needed ad-hoc personal intervention (Rama, Sy En, Aderick)

*Full meeting detail: [2026-08-06-W32-csc-sit-progress-review.md](../meeting-notes/2026-08-06-W32-csc-sit-progress-review.md)*

---

## 7 August — SIT window closes

*Targets from the Integration Plan: WS3 Learn Course Page check; run S-4/5/6 once written; start the true integration test.*

| ✓ | WS | Activity | Owner | Status |
|---|:---:|---|---|:---:|
| ☐ | 1 | Prepare for bug fixing (file parsing) and re-test | — | 🔴 Not Started |
| ☐ | 3 | Test the SSO config and provide additional parameters to Herman | Pow Hwee | 🔴 Pushed from 6 Aug |
| ☐ | 3 | Run SSO connectivity test between CC and CSC | Herman + Pow Hwee | 🔴 Pushed from 6 Aug |
| ☐ | 3 | Confirm intranet-routing decision is actually reflected in SSO config (decided ≠ implemented) | *Unassigned* | 🔴 Pushed from 6 Aug |
| ☐ | 3 | CSC provides mapped + unmapped test accounts for S-1/S-2 (depends on WS2 landing) | Herman (CSC) | 🔴 Pushed from 6 Aug |
| ☐ | 3 | Verify Learn Course Page viewable from CareerCompass without separate CSC login | Imelda + Adrian Lo | 🔴 |
| ☐ | 3 | Run S-4/S-5/S-6 (engineering-owned, not BO-executable) | Herman + Pow Hwee | 🔴 |
| ☐ | 3 | Run S-1/S-2/S-3 once test accounts arrive (BO-executable) | CC | 🔴 |
| ☐ | X | Resolve cross-system account alignment (one learner ID across CC/CSC/JumpStart) | *Unassigned* | 🔴 |
| ☐ | X | Write + run GAP-16 — end-to-end Course Journey, one real officer, no manual intervention | *Unassigned* | 🔴 |
| ☐ | X | Confirm no open P1 defect across all 4 workstreams before declaring SIT complete | Integration Owner | 🔴 |

---

## SIT Workstream Exit Criteria (per live log)

| WS | Exit Criterion | Status |
|---|---|:---:|
| 1 | CC can successfully consume both paid and free courses via CFT, with all courses imported per spec | ⚪ Not statused |
| 2 | CC can successfully consume and import the Learner File per spec | ⚪ Not statused |
| 3 | CC users access CSC Learn course content through a single, seamless session — SSO fully configured and verified end-to-end, no unresolved SIT defects | ⚪ Not statused |
| 4 | CC can successfully retrieve recommendations from the JumpStart API per spec | 🟢 **Completed** |

---

## UAT Readiness (new table on the live log — per workstream)

| WS | Owner(s) | UAT Readiness Date | Notes / Blockers |
|---|---|---|---|
| 1 | Marcus, Sheryl, Ziheng | 31 Aug | "None" noted — **doesn't reconcile with the still-open CFT eventing defect on this same page; worth a direct check with Marcus/Sheryl/Ziheng before treating this as clean** |
| 2 | Kimberly | Not set | Check with Kimberly, 7 Aug |
| 3 | Not set | Unknown | **Michelle to update** — action item on the live log itself |
| 4 | Cindy, Yu Xuan | Ready (as of 6 Aug) | — |

**This table is new as of the 6 Aug (v23) update and is the clearest signal yet that WS readiness is being tracked separately from SIT exit criteria** — worth reconciling the two views (e.g. WS1 says "None" here but has an open CFT HelpDesk ticket above) before this goes further into planning.

---

## Meeting Agenda (per live log)

| Date | Agenda & Notes |
|---|---|
| 5 August | Review 4–5 Aug activities (done); ensure activities are detailed out; review status; get UAT date availability |
| 6 August | Review 5 Aug status, 6 Aug activities; development status and date from each workstream, any challenges? |

---

## Not yet scheduled — gap test cases

*In scope per the source doc but no test case written anywhere yet. Not tied to a specific date until someone picks them up — flagging here so they don't silently drop out of the plan.*

| ✓ | WS | Gap | Notes |
|---|:---:|---|---|
| ☐ | 1 | Bulk partial-failure handling | B-2 only tests one bad row |
| ☐ | 1 | Empty file handling | CSC commits to supplying one; no case uses it |
| ☐ | 1 | Duplicate/re-submitted file | No case for a repeat push |
| ☐ | 1 | Transport/transfer failure | Only the success path is tested |
| ☐ | 2 | Unmapped/invalid NRIC caught **at WS2 itself** | Currently only caught downstream at S-2 |
| ☐ | 2 | Malformed row handling | WS1 has a B-2 equivalent; WS2 doesn't |
| ☐ | 2 | Second refresh cycle | M-2 only tests one overwrite |
| ☐ | 4 | Catalogue enrichment & omission | In scope, not tested by J-1/J-2 |
| ☐ | 4 | Popularity fallback | J-2 proves absence, not fallback content |
| ☐ | 4 | Opt-in configuration | No case tests opt-in/opt-out |
| ☐ | 4 | Never-mapped officer calls JumpStart | Different from J-2 (mapped, no matches) |

---

## Currently blocked (carry-forward watchlist)

*Not part of the daily log format — a running note of what's stuck across days, so a blocker doesn't get lost in the date-by-date view. Update as items clear.*

- **CFT "FileDownload" event confirmed not firing — escalated to CFT HelpDesk (5–6 Aug).** Files land and are visible on the receiving side for both WS1 and WS2, but the download-ready event never triggers, so neither workstream can complete verification or close out. This is the single highest-leverage blocker in the programme — one root cause, two workstreams stalled.
- **WS2 mapping file cadence still unconfirmed** — Rama has not yet shared the file with Imelda to check completeness/facilitate account set-up (pushed 5 Aug → 6 Aug, still open).
- **No named Integration Readiness Owner** — nobody currently owns cross-workstream defect triage or escalation.
- **WS3 intranet DNS resolution still failing.** Team is proceeding on internet routing as a temporary workaround; PH's role narrowed to config/dev only, infra troubleshooting now sits with the core/central team. The underlying "keep troubleshooting intranet vs. formally escalate to internet + VAPT" decision is still unowned.
- **S-4/S-5/S-6 content is in Confluence but not yet confirmed correct** — Herman and Pow Hwee still need to confirm coverage; SSO config testing itself pushed to 7 Aug.
- **New — WS4/data-alignment check (Sy En) is unstatused.** Assigned 6 Aug to check whether JumpStart's UAT-env data actually matches CSC staging; not yet reflected as In Progress or Done anywhere.
- **New — UAT Readiness table (added 6 Aug) doesn't reconcile with open SIT blockers.** WS1 lists 31 Aug/"None" for blockers despite the open CFT HelpDesk ticket; WS3 has no owner or date at all, flagged as Michelle's action item to fill in.
- **SIT files are manually generated, not system-generated** — a workflow can pass SIT this way and still fail on real production files; argues for a dedicated UAT data-validation phase.
- **No defined data reconciliation strategy** — how are missing records detected, duplicates handled, failed deltas recovered? Not yet assigned an owner.
- **Operational support ownership for BAU is undefined** — every blocker this week needed ad-hoc personal intervention (Rama, Sy En, Aderick); nobody's been asked who owns this once SIT-era hand-holding stops.

---

## Pre-requisites for SIT — consolidated across all workstreams

*The live Confluence draft only has this filled in for WS3 (with a note asking Rama to fill in the rest). Built out here for WS1/WS2/WS4 too, derived from what each workstream's daily activities actually require before SIT can be called done. Worth pushing back into Confluence once Rama confirms the shape is right.*

**Cross-workstream (blocks all four):**

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☐ | Name the Overall Integration Readiness Owner | Both | Rama to propose | 🔴 Not Started |
| ☐ | Assign named CC-side owners for WS1, WS2, WS4 (currently blank) | CC | Rama | 🔴 Not Started — PH's name removed from this item, covers WS3 config/dev only |
| ☐ | Confirm SIT success/exit criteria per workstream (what counts as "done") | Both | Rama + Michelle | 🔴 Not Started — only WS4 shows Completed on the live Exit Criteria table |
| ☐ | Resolve SIT vs. UAT scope for unhappy-path/invalid-file testing | CC | Adrian + Imelda | 🔴 Not Started |

**WS1 — Course Integration / CFT File Transfer:**

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☑ | CFT credentials shared (Adrian Lo → Aderick) | Both | Adrian Lo | 🟢 Completed |
| ☑ | Push Course Data into CFT — paid + digital learning files | CSC | Aderick Cheng | 🟢 Completed |
| ☐ | File downloaded & imported; transfer confirmed with course count; parsed per CSC Course Data Specs | CC | — | 🟡 In Progress — **blocked by CFT FileDownload event not firing; CFT HelpDesk ticket open** |
| ☑ | Test full CFT file-transfer process end-to-end | CSC | Aderick Cheng / Peter Low | 🟢 Completed |
| ☐ | Manual file transfer fallback confirmed workable if CFT routing isn't ready in time | CC | Unassigned | 🟡 Identified as fallback, not yet tested |

**WS2 — Learner File & Mapping:**

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☑ | CFT credentials shared for Learner File | Both | Adrian Lo | 🟢 Completed |
| ☐ | **Confirm who supplies the mapping file, on what channel, at what refresh cadence** | CSC | Kimberly (CSC) / *unassigned (CC)* | 🔴 Not Started — highest-leverage open item, blocks WS3 test accounts |
| ☑ | Mapping file pushed to CFT | CSC | Aderick Cheng | 🟢 Completed |
| ☑ | Generate learner file with 15 NRIC/learner IDs, push to CFT | CSC | Sy En (on Kimberly's behalf) / Aderick | 🟢 Completed, 6 Aug |
| ☐ | File verified and format confirmed (`dlecourceid`, `identificationno`) | CC | — | 🟡 In Progress — **same CFT eventing block as WS1** |
| ☐ | Rama to share the file from CFT with Imelda to check; facilitate account set-up | Both | Rama | 🔴 Not Started |
| ☐ | Confirm number of learner accounts mapped to CSC, aligned with CSC/JumpStart for UAT | Both | Unassigned | 🔴 Not Started |

**WS3 — SSO Integration:**

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☐ | Perform connectivity test to OTEP endpoints | CSC | Herman Hartoyo | 🟡 In Progress |
| ☑ | Provide SSO config | CSC | Herman (via Peter, to Pow Hwee) | 🟢 Completed |
| ☐ | Test the SSO config and provide additional parameters to Herman | CC | Pow Hwee | 🔴 Pushed to 7 Aug |
| ☐ | **Decide: continue troubleshooting intranet, or escalate to formally scope internet path + VAPT implications** | Both | Unassigned — needs an owner | 🔴 Not Started |
| ☐ | Resolve intranet DNS resolution — confirmed: domains don't resolve on intranet, do resolve on internet | Both | Core/central infra team | 🟡 In Progress — ⚠️ may force a VAPT scope change if unresolved. **Infra ownership moved from PH to core team, 6 Aug** |
| ☐ | Provide SSO test account for S-1/S-2 | CSC | Herman (CSC) — blocked on WS2 | 🔴 Not Started |
| ☐ | Complete infra provisioning | Both | — | 🔴 **Removed** — duplicate of connectivity item above |
| ☐ | Write and confirm S-4/S-5/S-6 (hard failure, token expiry, routing) test steps | CC | Michelle (written) / Herman + Pow Hwee (confirming coverage) | 🟡 In Progress — content in Confluence, sign-off pending |

**WS4 — JumpStart Recommendation Integration:**

🟢 **All items completed per live log as of 5–6 Aug.** Remaining open item is a late add, not yet statused:

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☑ | Infra setup between CC and JumpStart | Both | — | 🟢 Completed |
| ☑ | Share API details with CC | CSC | — | 🟢 Completed |
| ☑ | Whitelist CC IP address on JumpStart | CC | — | 🟢 Completed |
| ☑ | Configure Egress to allow JumpStart API in UAT Environment | CC | — | 🟢 Completed |
| ☑ | Get the course recommendation via the JumpStart Recommendation API | Both | — | 🟢 Completed |
| ☑ | Provide course mock data for testing account | CC | Adrian Lo | 🟢 Completed — sent to Imelda |
| ☐ | Check whether JumpStart's UAT-env data actually matches CSC staging data | CC | Sy En | ⚪ Not statused — new 6 Aug, worth a status before UAT |

---

*How to use this doc: add a new dated section each day, copy the table header, don't edit past entries — add a new row instead if something's status changes. Push updates into the live Confluence draft to keep both in sync. Last reconciled against the live Confluence source: 2026-08-06 (v23, Imelda Mo).*
