---
date: 2026-08-05
week: 2026-W32
purpose: Daily activity log for the CSC SIT integration, matching the format of the live Confluence "SIT Daily Activities" page so entries can be copy-pasted directly.
source_page: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2518815515/For+Discussion+CSC+Integration+SIT+Daily+Activities+Log
status: LIVE — add a new dated row block each day; don't edit past dates, only append
---

# CSC Integration — SIT Daily Activities Log

**Status:** 🟢 Completed · 🟡 In Progress · 🔴 Not Started

---

## 🔴 Overall Health: RED — SIT closes 7 Aug, 30 pre-requisites tracked, only 4 done

| | Cross-WS | WS1 Course | WS2 Learner File | WS3 SSO | WS4 JumpStart |
|---|:---:|:---:|:---:|:---:|:---:|
| Done | 0/4 | 1/5 | 2/5 | 0/8 | 1/8 |
| In progress | 0 | 0 | 0 | 4 | 0 |
| Not started | 4 | 4 | 3 | 4 | 7 |

**The one thing that would move this fastest:** get WS2's mapping file cadence confirmed (owner + channel + refresh schedule). It's fully within reach — just needs a name and a commitment — and it unblocks both WS3's test accounts and WS4's end-to-end path at once.

**The one thing with a hard deadline collision:** Yu Xuan Tay (WS4, API details) is on leave until 7 Aug — the same day SIT closes. Nobody else is covering their tasks right now.

**The one decision sitting unowned:** WS3's intranet DNS resolution is confirmed broken (internet works, intranet doesn't — tested directly by Aderick on 5 Aug). Someone needs to decide today whether to keep troubleshooting or escalate to an internet-path + VAPT-scope conversation. See full detail in the Pre-requisites table below.

*Full checklist, by workstream, is below under "Pre-requisites for SIT."*

---

## SIT Timeline: 27 July – 7 August 2026

---

## 4 August

| ✓ | WS | Activity | Owner | Status |
|---|:---:|---|---|:---:|
| ☑ | 1 | Adrian Lo shared CFT credentials with Aderick | Adrian Lo (TW-PSD) | 🟢 |
| ☐ | 1 | Aderick pushes Course Data into CFT (paid + digital learning) | Aderick Cheng (GovTech) | 🟡 Rescheduled → 5 Aug |
| ☐ | 1 | File downloaded & imported; transfer confirmed with course count; parsed per CSC Course Data Specs | Adrian Lo | 🟡 Rescheduled → 5 Aug |
| ☐ | 1 | Test CFT file-transfer process (action item from 3 Aug SIT readiness sync) | Aderick Cheng (CSC) / Peter Low (Data) | 🟡 Rescheduled → 6 Aug |
| ☑ | 2 | Adrian Lo shared CFT credentials for Learner File | Adrian Lo (TW-PSD) | 🟢 |
| ☑ | 2 | Aderick pushed the mapping file to CFT | Aderick Cheng (GovTech) | 🟢 |
| ☐ | 2 | Adrian Lo to verify the file and update the team | Adrian Lo (TW-PSD) | 🟡 Rescheduled → 5 Aug |
| ☐ | 2 | **Confirm who supplies the mapping file, on what channel, at what refresh cadence** — highest-leverage open item, blocks WS3 test accounts | Kimberly (CSC) / *unassigned (CC)* | 🟡 Rescheduled — Imelda to sync w/ Kimberly |
| ☐ | 3 | Adrian Lo + Herman exchange infra info so DLE can connect to CC endpoints for SSO. If endpoint fails, Aderick shares IP to confirm intranet (not internet) resolution. **If CC intranet isn't accessible from DLE, VAPT scope needs updating.** | Infra: Adrian Lo / Herman Hartoyo (CSC) · Config: Pow Hwee | 🟡 Rescheduled — Adrian Lo to share endpoint details by 5 Aug |
| ☐ | 4 | Share API details with CC | Yu Xuan Tay | 🟡 Rescheduled — Adrian Lo to update status |
| ☐ | 4 | Infra setup between CC and JumpStart — whitelist CC IP on JumpStart; overall system design needs updating | Adrian Lo | 🟡 Rescheduled |
| ☐ | 4 | Adrian Lo to provide course mock data for testing account (export from DB) | Adrian Lo (TW-PSD) | 🟡 Rescheduled |
| ☐ | 4 | Confirm API base URL + key, endpoint reachable | Adrian Lo | 🟡 Rescheduled |
| ☐ | Gov | Name the Overall Integration Readiness Owner for each WS/activity | All parties to indicate an owner | 🔴 Not Started |
| ☐ | Gov | Assign named CC-side owners for WS1, WS2, WS4 (currently blank) | Rama & Pow Hwee | 🔴 Not Started |

---

## 5 August

| ✓ | WS | Activity | Owner | Status |
|---|:---:|---|---|:---:|
| ☐ | 1 | Aderick pushes Course Data into CFT (paid + digital learning) | Aderick Cheng (GovTech) | 🔴 Not Started — pushed from 4 Aug |
| ☐ | 1 | File downloaded & imported; transfer confirmed with course count; parsed per CSC Course Data Specs | Adrian Lo | 🔴 Not Started — pushed from 4 Aug |
| ☐ | 1 | Prepare for bug fixing (file parsing) and re-test | Adrian Lo / Tay Zi Heng | 🔴 Not Started |
| ☐ | 2 | Adrian Lo to verify the file; Compass reports if file isn't formatted per spec (`dlecourceid, identificationno`) | Adrian Lo (TW-PSD) | 🔴 Not Started — pushed from 4 Aug |
| ☐ | 2 | **Confirm who supplies the mapping file, on what channel, at what refresh cadence** — highest-leverage open item, blocks WS3 test accounts; also needs the number of learner accounts mapped to CSC, aligned with CSC/JumpStart for UAT | Kimberly (CSC) / *unassigned (CC)* | 🔴 Not Started — Imelda to sync w/ Kimberly |
| ☐ | 2 | Bug-fix + re-test window | Adrian Lo / Kimberly Ngu | 🔴 Not Started |
| ☐ | 3 | Adrian Lo + Aderick exchange infra info so DLE can connect to CC endpoints for SSO | Infra: Adrian Lo / Aderick (CSC) · Config: Pow Hwee | 🟡 In Progress — Adrian Lo to share endpoint details by 5 Aug |
| ☐ | 3 | **Troubleshoot with Central Team — root cause confirmed 5 Aug: domains do NOT resolve on intranet, but ARE reachable from internet.** Potential risk of further delay if the issue sits with the central team. | Unassigned | 🟡 In Progress — ⚠️ this is the finding that could trigger a VAPT scope change |
| ☐ | 3 | Complete SSO config | Herman (CSC) / Pow Hwee | 🔴 Not Started |
| ☐ | 3 | Complete infra provisioning | Adrian Lo | 🔴 Not Started |
| ☐ | 3 | Write **S-4** (hard SSO failure), **S-5** (token expiry), **S-6** (routing verified) steps into Section 6 of the SIT/UAT source doc — needs confirmation from Herman and Pow Hwee | Michelle | 🟡 In Progress — content pushed to Confluence, but Herman/Pow Hwee still confirming by "tomorrow" whether it covers the required test cases. **Not yet signed off — do not mark done.** |
| ☐ | 4 | Share API details with CC | Yu Xuan Tay | 🔴 Not Started — pushed from 4 Aug. **Yu Xuan Tay on leave until 7 Aug (same day SIT closes) — no other named owner for this task in the meantime.** |
| ☐ | 4 | Infra setup between CC and JumpStart — whitelist CC IP; system design update | Adrian Lo | 🔴 Not Started — pushed from 4 Aug |
| ☐ | 4 | Adrian Lo to provide course mock data for testing account | Adrian Lo (TW-PSD) | 🔴 Not Started — pushed from 4 Aug |
| ☐ | 4 | Confirm API base URL + key, endpoint reachable | Adrian Lo | 🔴 Not Started — pushed from 4 Aug |
| ☐ | 4 | Confirm `POST /recommendations/dashboard` succeeds | Adrian Lo | 🔴 Not Started |
| ☐ | 4 | Bug-fix window if needed | Adrian Lo / Yu Xuan Tay (on leave until 7 Aug) | 🔴 Not Started |

---

## 6 August

*Targets from the Integration Plan: WS3 SSO connectivity test; run the workstream test cases that are now unblocked.*

| ✓ | WS | Activity | Owner | Status |
|---|:---:|---|---|:---:|
| ☐ | 1 | Run **B-1** (known-good file → import succeeds, exact count) | CC | 🔴 |
| ☐ | 1 | Run **B-2** (missing mandatory field → row skipped, no blank course) | CC | 🔴 |
| ☐ | 2 | Run **M-1** (known officer's NRIC → resolves to right `dle_id`) | @kimberly | 🔴 |
| ☐ | 2 | Run **M-2** (re-supply, changed `dle_id`, same NRIC → updates, no duplicate) | — | 🔴 |
| ☐ | 3 | Run SSO connectivity test between CC and CSC | Herman + Pow Hwee | 🔴 |
| ☐ | 3 | Confirm intranet-routing decision is actually reflected in SSO config (decided ≠ implemented) | *Unassigned* | 🔴 |
| ☐ | 3 | CSC provides mapped + unmapped test accounts for S-1/S-2 (depends on WS2 landing) | Herman (CSC) | 🔴 |
| ☐ | 4 | Run **J-1** (mapped officer → personalised recs) | CC | 🔴 |
| ☐ | 4 | Run **J-2** (mapped officer, empty response → graceful, no error) | CC | 🔴 |

---

## 7 August — SIT window closes

*Targets from the Integration Plan: WS3 Learn Course Page check; run S-4/5/6 once written; start the true integration test.*

| ✓ | WS | Activity | Owner | Status |
|---|:---:|---|---|:---:|
| ☐ | 3 | Verify Learn Course Page viewable from CareerCompass without separate CSC login | Imelda + Adrian Lo | 🔴 |
| ☐ | 3 | Run S-4/S-5/S-6 (engineering-owned, not BO-executable) | Herman + Pow Hwee | 🔴 |
| ☐ | 3 | Run **S-1/S-2/S-3** once test accounts arrive (BO-executable) | CC | 🔴 |
| ☐ | X | Resolve cross-system account alignment (one learner ID across CC/CSC/JumpStart) — needed before the end-to-end test can run cleanly | *Unassigned* | 🔴 |
| ☐ | X | Write + run **GAP-16** — end-to-end Course Journey (import → map → sign in → see recommendation), one real officer, no manual intervention | *Unassigned* | 🔴 |
| ☐ | X | Confirm no open P1 defect across all 4 workstreams before declaring SIT complete | Integration Owner | 🔴 |

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

- **WS2 mapping file cadence still unconfirmed** (4 Aug row, still open 5 Aug) — blocks WS3's test accounts (6 Aug) and the full end-to-end test (7 Aug). Highest-priority open item.
- **WS1 course file push not yet done** — Aderick's row has slipped from 4→5→6 Aug; blocks all WS1 verification and WS4's full end-to-end.
- **No named Integration Readiness Owner** — nobody currently owns cross-workstream defect triage or escalation.
- **WS3 root cause confirmed 5 Aug: intranet DNS resolution failing, internet resolution works.** This is no longer a suspected issue — Aderick tested it directly. If intranet stays unresolvable, VAPT scope needs to change. No owner yet on making that call.
- **S-4/S-5/S-6 content is in Confluence but not yet confirmed correct** — Herman and Pow Hwee still need to confirm it covers the required test cases (expected by "tomorrow" as of the 5 Aug entry). Don't treat this as closed until they sign off.
- **Yu Xuan Tay (WS4 API details owner) on leave until 7 Aug** — same day SIT closes. No named backup owner for their tasks in the interim.

---

## Pre-requisites for SIT — consolidated across all workstreams

*The live Confluence draft only has this filled in for WS3 (with a note asking Rama to fill in the rest). Built out here for WS1/WS2/WS4 too, derived from what each workstream's daily activities actually require before SIT can be called done. Worth pushing back into Confluence once Rama confirms the shape is right.*

**Cross-workstream (blocks all four):**

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☐ | Name the Overall Integration Readiness Owner | Both | Rama to propose | 🔴 Not Started |
| ☐ | Assign named CC-side owners for WS1, WS2, WS4 (currently blank) | CC | Rama & Pow Hwee | 🔴 Not Started |
| ☐ | Confirm SIT success/exit criteria per workstream (what counts as "done") | Both | Rama + Michelle | 🔴 Not Started — only WS3 has this defined so far |
| ☐ | Resolve SIT vs. UAT scope for unhappy-path/invalid-file testing | CC | Adrian + Imelda | 🔴 Not Started — no decision reached as of 5 Aug standup |

**WS1 — Course Integration / CFT File Transfer:**

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☐ | CFT credentials shared (Adrian Lo → Aderick) | Both | Adrian Lo | 🟢 Completed |
| ☐ | Push Course Data into CFT — paid + digital learning files | CSC | Aderick Cheng | 🔴 Not Started — slipped 4→5→6 Aug |
| ☐ | File downloaded & imported; transfer confirmed with course count; parsed per CSC Course Data Specs | CC | Adrian Lo | 🔴 Not Started — slipped 4→5 Aug |
| ☐ | Test full CFT file-transfer process end-to-end | CSC | Aderick Cheng / Peter Low | 🔴 Not Started — pushed to 6 Aug |
| ☐ | Manual file transfer fallback confirmed workable if CFT routing isn't ready in time | CC | Unassigned | 🟡 Identified as fallback, not yet tested |

**WS2 — Learner File & Mapping:**

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☐ | CFT credentials shared for Learner File | Both | Adrian Lo | 🟢 Completed |
| ☐ | **Confirm who supplies the mapping file, on what channel, at what refresh cadence** | CSC | Kimberly (CSC) / *unassigned (CC)* | 🔴 Not Started — highest-leverage open item, blocks WS3 test accounts. **Reordered ahead of file verification below — cadence needs confirming before "verified" is a repeatable check, not a one-off.** |
| ☐ | Mapping file pushed to CFT | CSC | Aderick Cheng | 🟢 Completed |
| ☐ | File verified and format confirmed (`dlecourceid`, `identificationno`) | CC | Adrian Lo | 🔴 Not Started — slipped 4→5 Aug |
| ☐ | Confirm number of learner accounts mapped to CSC, aligned with CSC/JumpStart for UAT | Both | Unassigned | 🔴 Not Started |

**WS3 — SSO Integration:**

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☐ | Perform connectivity test to OTEP endpoints | CSC | Herman Hartoyo | 🟡 In Progress |
| ☐ | Provide entry URL and remaining SSO prerequisites | CSC | Herman Hartoyo | 🟡 In Progress |
| ☐ | Provide updated issuer URLs and SSO configuration details | CC | Pow Hwee Tan | 🟡 In Progress |
| ☐ | **Decide: continue troubleshooting intranet, or escalate to formally scope internet path + VAPT implications** | Both | Unassigned — needs an owner | 🔴 Not Started — **reordered ahead of the item below; this decision governs whether continued DNS troubleshooting is still the right call** |
| ☐ | Resolve intranet DNS resolution — confirmed 5 Aug: domains don't resolve on intranet, do resolve on internet | Both | Aderick / Central Team | 🟡 In Progress — ⚠️ may force a VAPT scope change if unresolved |
| ☐ | Provide SSO test account for S-1/S-2 | CSC | *Unassigned* — **blocked on WS2's mapping cadence landing first, not independently actionable this week** | 🔴 Not Started |
| ☐ | Complete SSO config + infra provisioning | Both | Herman (config, CSC) / Adrian Lo (infra) | 🔴 Not Started |
| ☐ | Write and confirm S-4/S-5/S-6 (hard failure, token expiry, routing) test steps | CC | Michelle (written) / Herman + Pow Hwee (confirming coverage) | 🟡 In Progress — content in Confluence, sign-off pending |

**WS4 — JumpStart Recommendation Integration:**

⚠️ **Cascade risk:** everything below "Share API details" likely depends on it. Confirm with Adrian Lo whether whitelisting/mock data can genuinely proceed in parallel — if not, this entire workstream is blocked until Yu Xuan Tay returns (7 Aug, same day SIT closes).

| ✓ | Action item | Party | Person | Status |
|---|---|:---:|---|:---:|
| ☐ | Infra setup between CC and JumpStart | Both | — | 🟢 Completed |
| ☐ | **Share API details with CC** | CSC | Yu Xuan Tay | 🔴 Not Started — **on leave until 7 Aug, same day SIT closes; no backup owner named. Everything below may be gated on this.** |
| ☐ | Confirm API base URL + key, endpoint reachable | Both | Adrian Lo | 🔴 Not Started — **needs API details above; confirm if this can start before that lands** |
| ☐ | Whitelist CC IP address on JumpStart; update overall system design | CC | Adrian Lo | 🔴 Not Started — **check if this depends on API details, or can run in parallel** |
| ☐ | Provide course mock data for testing account | CC | Adrian Lo | 🔴 Not Started — **check if this depends on API details, or can run in parallel** |
| ☐ | Confirm `POST /recommendations/dashboard` succeeds | CC | Adrian Lo | 🔴 Not Started — **requires the API/endpoint items above to be done first** |
| ☐ | Resolve JumpStart/CSC staging data mismatch (flagged 5 Aug standup — risk of false SIT defects) | Both | Unassigned | 🔴 Not Started — independent of the API-details chain, can be worked in parallel |

---

*How to use this doc: add a new dated section each day, copy the table header, don't edit past entries — add a new row instead if something's status changes. Push updates into the live Confluence draft to keep both in sync. Last reconciled against the live Confluence source: 2026-08-05.*
