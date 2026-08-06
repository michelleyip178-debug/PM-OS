---
date: 2026-08-06
week: 2026-W32
purpose: Each CSC/DLE integration workstream (WS1-WS4) broken down for grooming — Tasks Needed and Test Cases split into separate tables, with one prep owner named per workstream for test cases
sources: outputs/analyses/2026-08-06-W32-uat-activities-page.md, outputs/analyses/2026-08-05-W32-csc-dle-integration.md, outputs/analyses/2026-08-05-W32-timeline-raid-log.md, live Confluence — "CSC Integration — SIT Daily Activities Log" (page 2518815515, v19, pulled 2026-08-06), Imelda's 5 Aug report on WS1/WS2 CFT non-receipt
status: draft — refreshed against the live daily activities log AND a 5 Aug correction (WS1/WS2 CFT files triggered but not received); not yet in Jira
---

# CSC/DLE Integration Workstreams — Grooming Breakdown

## Grooming readiness — read this before sizing anything

| WS | Groomable now? | Why |
|---|---|---|
| WS1 — Course Integration | 🔴 Not yet | **Downgraded 6 Aug.** Previously "partially groomable" on the assumption the file just hadn't been pushed yet. Corrected: the file was triggered 5 Aug via CFT with a correctly-configured webhook and still wasn't received — an undiagnosed transport-layer failure. Test cases can't run against a file that isn't landing; escalate the root-cause investigation before grooming anything here. |
| WS2 — Learner File/DLE | 🔴 Not yet | **Downgraded 6 Aug.** Previously logged as "mapping file landed 4 Aug" — that status is now known to be wrong. Same non-receipt issue as WS1, confirmed 5 Aug. This remains the programme's single point of failure, and it's now worse than tracked, not better. |
| WS3 — SSO | 🔴 Not yet | Blocked on WS2 (test accounts) and an intranet DNS failure — now with a filed service request (Boon Siang) and live Slack thread, so it's moving, but still no resolution date. SSO config values were sent 5 Aug (Herman → Pow Hwee); infra provisioning still Not Started. |
| WS4 — JumpStart | 🟡 Mostly cleared | API details shared, IP whitelisting, and UAT egress config are all ✅ completed per the 4 Aug log. Only the actual recommendation-retrieval test and mock data provisioning remain open — this workstream may be closer to groomable than previously assessed. |
| Cross-Workstream (GAP-16) | 🔴 Not yet | Depends on WS1–WS4 all passing individually, plus cross-system account alignment (still Unassigned on the live log as of 7 Aug's target list). |

**Suggested grooming order — revised 6 Aug:** WS4's remaining two items only. WS1 and WS2 both moved from "partially groomable" to "not yet" given the 5 Aug CFT non-receipt finding — their test cases depend on files that still haven't actually arrived, despite two prior status updates saying otherwise. Table WS1, WS2, WS3, and GAP-16 as "blocked" until the CFT transport issue, the DNS issue, and the mapping cadence are all resolved.

---

## R&R gap — resolve before or during grooming

**Update from the live daily log (6 Aug):** the R&R gap isn't actually unowned — two explicit governance action items already exist on the tracker. The ask isn't "who should do this" — it's "chase the people already assigned to actually close the item."

| Gap | Needs | Already assigned to | Status |
|---|---|---|---|
| CC-side owner for WS1 | Name | Rama & Pow Hwee | Not Started |
| CC-side owner for WS2 | Name | Rama & Pow Hwee | Not Started |
| CC-side owner for WS4 | Name | Rama & Pow Hwee | Not Started — WS3 already has Pow Hwee as config owner |
| Overall Integration Readiness Owner | Name | All parties to indicate | Not Started |
| Test case prep, per workstream | One named owner | — | See each workstream's Test Cases table below — mostly `TBC`, assign at grooming |

---

## How this doc is organized

Each workstream has **two tables**:

1. **Tasks Needed** — coordination, escalation, and build work, each with its own owner. Categories follow the same logic as before:
   - ✅ Completed — landed since this doc was first built, per the live log
   - ⏳ PM-Chase — waiting on someone external or a pure coordination ask; no engineering effort to size
   - 🔺 Escalate — unknown scope, no owner, material downstream risk; deserves a dedicated conversation, not a story-point guess
   - SIT Task — real engineering/build work needed before SIT can complete
   - UAT Prep — setup work needed before UAT testing can start, not test execution

2. **Test Cases** — SIT and UAT test cases together, following the SIT/UAT boundary in `csc-dle-integration.md` §2 (**SIT proves the pipe connects and moves data without breaking; UAT proves the business can trust what lands**). Test cases don't carry a per-row owner — instead, **one person per workstream owns preparing all the test cases** (writing them, defining expected results, arranging data/accounts). Execution of UAT cases is done separately by Compass BOs, not the prep owner.

---

## WS1 — Course Integration / CFT File Transfer

**Story:** As the integration team, we need course files to transfer reliably from CSC to CareerCompass via CFT, so the course catalogue is accurate and complete before SIT/UAT.

**Status:** 🔴 Blocked — **corrected 5 Aug: files were triggered but not received.** Aderick confirmed 2 workflow IDs needed for the WS1 files (paid + subscription, corrected from "paid + digital learning") and updated the CFT script accordingly. He then triggered both WS1 files via CFT — Imelda confirmed neither arrived, despite the webhook being correctly configured. This is a transport-layer failure, not a "hasn't started" delay.

### Tasks Needed

| Category | Item | Owner | Notes |
|---|---|---|---|
| ✅ Completed | Adrian Lo shared CFT credentials with Aderick | Adrian Lo | 4 Aug |
| 🔺 Escalate | Diagnose why the webhook-confirmed CFT transfer didn't deliver either WS1 file | **Unassigned** | New, unresolved as of 5 Aug — likely shares a root cause with WS2's identical non-receipt issue below; worth investigating together |
| ⏳ PM-Chase | Re-trigger the course file push into CFT (paid + subscription) once the transport issue is diagnosed | Aderick Cheng (GovTech) | Don't re-trigger blindly — same failure is likely to repeat until the root cause above is found |
| ⏳ PM-Chase | File downloaded & imported; transfer confirmed with course count; parsed per CSC Course Data Specs | TBC | Blocked on resolving the non-receipt issue above |
| ⏳ PM-Chase | Test CFT file-transfer process (action item from 3 Aug SIT readiness sync) | Aderick Cheng (CSC) + Peter Low (Data) | Brought forward from 4 Aug, still Not Started as of 6 Aug |
| ⏳ PM-Chase | Confirm whether CSC's automated file extraction (targeted 24 Aug) should be preponed given the possible 31 Aug UAT slip | TBC | Needs an owner to even decide |
| SIT Task | Prepare for bug fixing (file parsing) and re-test, once the file lands | TBC | |

*UAT Prep: none — the preponement decision above is a scheduling call, not build work.*

### Test Cases — Prep Owner: **TBC**

| Phase | ID | Scenario | Notes |
|---|---|---|---|
| SIT | A-1 | Field mapping on a known-good file, confirm N-in = N-out with every field matching source | |
| SIT | A-2 | Special characters (accents, ampersands, long text) don't corrupt or truncate | |
| SIT | A-3 | Paid/free flag applies correctly | |
| SIT | B-1 | Valid file imports, count confirmed | |
| SIT | B-2 | Missing mandatory field — row skipped and reported, no blank course record | |
| SIT | 🟠 GAP-1 | Bulk partial-failure handling | B-2 only covers one bad row |
| SIT | 🟠 GAP-3 | Empty file handling | CSC has committed to supplying one |
| SIT | 🟠 GAP-4 | Duplicate/re-submitted file | No case for a repeat push |
| SIT | 🟠 GAP-5 | Transport/transfer failure | Only success path tested today |
| UAT | — | Business-level field accuracy checks | Per §2, deferred from SIT — not yet specced |
| UAT | 🟠 GAP-2 | Officer-facing search/filter/detail UI | UI/business concern, not a SIT connectivity check — A-3 only checks the flag applies |

**Depends on:** CFT pipeline (shared with WS2) · **Blocks:** WS4 (needs course catalogue for end-to-end testing)

---

## WS2 — Learner File & Mapping (DLE)

**Story:** As the integration team, we need every officer correctly and safely mapped to their CSC Learn (DLE) identity, so sign-in (WS3) and recommendations (WS4) resolve to the right person.

**Status:** 🔴 **Corrected 5 Aug — mapping file has NOT landed.** Previously logged ✅ Done on the live activities log (4 Aug), but Imelda confirmed 5 Aug the file was triggered via adhoc CFT transfer and never received, despite the webhook being correctly configured — same unresolved issue as WS1.

### Tasks Needed

| Category | Item | Owner | Notes |
|---|---|---|---|
| ✅ Completed | Adrian Lo shared CFT credentials for Learner File | Adrian Lo | 4 Aug |
| 🔺 Escalate | Diagnose why the webhook-confirmed CFT transfer didn't deliver the mapping file | **Unassigned** | New, unresolved as of 5 Aug — likely shares a root cause with WS1's identical non-receipt issue above |
| ⏳ PM-Chase | Re-trigger the mapping file push once the transport issue is diagnosed | Aderick Cheng | Don't re-trigger blindly — same failure is likely to repeat until the root cause above is found |
| ⏳ PM-Chase | Adrian Lo to verify the mapping file and update the team (Compass reports if file isn't formatted per spec) | Adrian Lo (TW-PSD) | Blocked — can't verify a file that was never received |
| ⏳ PM-Chase | Confirm who supplies the mapping file, on what channel, at what refresh cadence | Kimberly Ng (CSC) / TBC (CC) | Still the highest-leverage open item — blocks WS3's test accounts; Imelda syncing with Kimberly |
| ⏳ PM-Chase | Bug-fix + re-test window | TBC | Tagged @Kimberly Ng on the live log |

*UAT Prep: none identified yet — worth raising at grooming whether officer-resolution sign-off needs a named business reviewer lined up before UAT starts.*

### Test Cases — Prep Owner: **TBC**

| Phase | ID | Scenario | Notes |
|---|---|---|---|
| SIT | M-1 | Known test officer's NRIC resolves to correct `dle_id` | |
| SIT | M-2 | Re-supply with changed `dle_id`, same NRIC — one mapping per officer, updated, no duplicate | |
| SIT | 🟠 GAP-6 | Unmapped/invalid NRIC caught at WS2 itself | Currently only caught downstream at S-2 |
| SIT | 🟠 GAP-7 | Malformed row handling | WS1 has an equivalent (B-2), WS2 doesn't |
| SIT | 🟠 GAP-8 | Second/subsequent refresh cycle | M-2 only tests one overwrite |
| UAT | — | Business validation of individual officer resolution (M-1, M-2) | Per §2, deferred to UAT |

**Depends on:** CFT pipeline (shared with WS1) · **Blocks:** WS3 (test accounts — CSC to provide mapped/unmapped accounts once this lands), WS4 (identity for end-to-end)

---

## WS3 — SSO with CSC

**Story:** As the integration team, we need CSC-to-OTEP SSO to authenticate officers correctly and fail safely, so officers can sign in without broken sessions or misidentification.

**Status:** 🟡 In Progress, real movement since 5 Aug — but still not groomable given the open DNS question

**Flag:** If intranet routing can't be fixed, moving to an internet-facing path triggers additional VAPT scope — ties directly into the still-open VAPT date conflict (tracked separately, internal-only).

### Tasks Needed

| Category | Item | Owner | Notes |
|---|---|---|---|
| 🔺 Escalate | Resolve intranet DNS resolution failure | Infra — Adrian Lo / Aderick (CSC); Config — Pow Hwee | Confirmed 5 Aug domains don't resolve on intranet but are reachable from internet. Boon Siang has filed a formal service request (Slack thread) — actively worked, not stalled, but no resolution date and explicit risk of further delay if the issue is central-side. If intranet can't be fixed, VAPT scope needs updating. |
| 🔺 Escalate | Confirm intranet-routing decision is actually reflected in SSO config (decided ≠ implemented) | Unassigned | New item from the 6 Aug target list |
| ⏳ PM-Chase | Complete infra provisioning | Adrian Lo | Not Started as of 5 Aug |
| SIT Task | Complete SSO config | Herman (CSC) + Pow Hwee (CC) | In Progress — config values sent by Peter (CSC) to Pow Hwee as of 5 Aug |
| SIT Task | Run SSO connectivity test between CC and CSC | Herman + Pow Hwee | Targeted for 6 Aug |
| SIT Task | Verify Learn Course Page viewable from CareerCompass without separate CSC login | Imelda + Adrian Lo | Targeted for 7 Aug (SIT close) |
| SIT Task | Confirm test accounts have arrived so S-1/S-2/S-3 can be executed by Compass BOs | TBC | Targeted for 7 Aug |
| SIT Task | CSC provides mapped + unmapped test accounts for S-1/S-2 | Herman (CSC) | Depends on WS2 landing |
| UAT Prep | Confirm one-shared-test-account approach is sufficient for 20 UAT personas, or define an alternative | TBC | |

### Test Cases — Prep Owner: **TBC**

| Phase | ID | Scenario | Notes |
|---|---|---|---|
| SIT | S-4 | Hard SSO failure — sign-off pending | Drafted by Michelle, in progress as of 5 Aug, pending coverage confirmation from Herman + Pow Hwee |
| SIT | S-5 | Session/token expiry mid-flow — sign-off pending | Same status |
| SIT | S-6 | Routing verified end-to-end on intranet — sign-off pending | Same status — directly affected by the DNS finding above |
| UAT | S-1 | Mapped officer signs in as the right person | Per §2, business-level validation, deferred to UAT. Execution: Compass BOs. |
| UAT | S-2 | Unmapped officer gets a clear message, not a broken page | Execution: Compass BOs. |
| UAT | S-3 | Session persists on return trip after CSC session | Execution: Compass BOs. |

**Depends on:** Intranet routing decision, WS2 (test accounts) · **Blocks:** GAP-16 (end-to-end Course Journey test)

---

## WS4 — JumpStart Recommendation Integration

**Story:** As the integration team, we need JumpStart to return accurate personalised recommendations for mapped officers, so the recommendation experience works end-to-end once course and identity data are in place.

**Status:** 🟡 Mostly cleared — three of four connectivity items completed 4 Aug; only recommendation retrieval + mock data remain

### Tasks Needed

| Category | Item | Owner | Notes |
|---|---|---|---|
| ✅ Completed | Share API Details with CC | — | 4 Aug |
| ✅ Completed | Whitelisting of CC IP address on JumpStart | — | 4 Aug |
| ✅ Completed | Configure Egress to allow JumpStart API in UAT Environment | — | 4 Aug |
| ⏳ PM-Chase | Get the course recommendation via the JumpStart Recommendation API | TBC | Check whether CC can connect using the UAT env; Overall System Design needs updating; still Not Started as of 5 Aug |
| ⏳ PM-Chase | Adrian Lo to provide course mock data for testing account (export from CC's DB) | Adrian Lo (TW-PSD) | Needed for UAT |
| ⏳ PM-Chase | Bug-fix window if needed | TBC | Yu Xuan Tay on leave until 7 Aug, no backup named |
| SIT Task | Investigate the JumpStart/CSC staging data mismatch | TBC | Even once connectivity works, recommendations or validation may fail and produce false defects |
| UAT Prep | Define the authoritative test dataset for WS4 and confirm mock data prep timeline | TBC | Feeds recommendation quality validation |

### Test Cases — Prep Owner: **TBC**

| Phase | ID | Scenario | Notes |
|---|---|---|---|
| SIT | J-1 | Mapped officer gets personalised recs | SIT scope: API connects, authenticates, returns a response |
| SIT | J-2 | Mapped officer, empty response — no recs shown, no error | |
| SIT | 🟠 GAP-15 | Never-mapped officer calls JumpStart | |
| UAT | — | Recommendation quality/relevance criteria | Per §2, out of scope for SIT everywhere. Execution: Compass BOs. |
| UAT | 🟠 GAP-12 | Catalogue enrichment & omission | Execution: Compass BOs. |
| UAT | 🟠 GAP-13 | Popularity fallback | Execution: Compass BOs. |
| UAT | 🟠 GAP-14 | Opt-in configuration | Execution: Compass BOs. |

**Depends on:** WS1 (course catalogue), WS2 (identity mapping) for full end-to-end · **Blocks:** GAP-16 (end-to-end Course Journey test)

---

## Cross-Workstream (GAP-16) — Ownership Gap

**Story:** As the integration team, we need one end-to-end proof that the full chain works for a real officer, so SIT/UAT sign-off isn't based on four isolated passes that were never tested together.

**Status:** 🔴 Not groomable yet — depends on WS1-WS4 all passing individually; cross-system account alignment and GAP-16 itself are both still Unassigned per the 7 Aug target list

**⚠️ Before this goes near a sprint:** naming the Overall Integration Readiness Owner (governance role, already assigned to "All parties," Not Started) does not also name an accountable engineer for GAP-16 — the live log lists that as a separate, still-Unassigned item.

### Tasks Needed

| Category | Item | Owner | Notes |
|---|---|---|---|
| 🔺 Escalate | Name the Overall Integration Readiness Owner for each WS and activity | All parties to indicate | Not Started per live log |
| 🔺 Escalate | Resolve whether invalid-formatted-file (unhappy-path) testing belongs in SIT or UAT scope | Adrian + Imelda, to align | Adrian says out of scope, Imelda wants further discussion |
| 🔺 Escalate | Resolve cross-system account alignment (one learner ID across CC/CSC/JumpStart) | Unassigned | Needed before the end-to-end test can run cleanly; targeted 7 Aug |
| SIT Task | Confirm no open P1 defect across all 4 workstreams before declaring SIT complete | Integration Owner | Role itself still unfilled |
| UAT Prep | Agree the golden UAT test dataset / officer population before UAT starts | TBC | |

### Test Cases — Prep Owner: **TBC**

| Phase | ID | Scenario | Notes |
|---|---|---|---|
| SIT | GAP-16 | End-to-end Course Journey test (import → map → sign in → see recommendation, one real officer, no manual intervention) | Targeted 7 Aug per live log; highest-priority gap in the whole programme |

*UAT: none written yet — depends on GAP-16 passing first and the golden dataset being agreed above.*

**Depends on:** WS1, WS2, WS3, WS4 all individually passing first

---

## SIT Workstream Exit Criteria (per live log — currently unowned)

These four criteria exist on the live tracker with no owner assigned to any of them. Worth naming owners at grooming since these are effectively the SIT "definition of done" per workstream.

| WS | Exit Criterion | Owner |
|---|---|---|
| 1 | CC can successfully consume both paid and free courses via CFT, with all courses imported per spec | TBC |
| 2 | CC can successfully consume and import the Learner File per spec | TBC |
| 3 | CC users access CSC Learn course content through a single, seamless session — SSO fully configured and verified end-to-end, no unresolved SIT defects | TBC |
| 4 | CC can successfully retrieve recommendations from the JumpStart API per spec | TBC |

---

*Built 2026-08-06 for grooming; refreshed 2026-08-06 against the live "CSC Integration — SIT Daily Activities Log" (Confluence page 2518815515, v19, last edited by Michelle Yip 2026-08-06T00:02Z). Reformatted 2026-08-06 to split Tasks Needed from Test Cases per workstream, with a single named prep owner per workstream's Test Cases table rather than per-row owners — execution of UAT cases is done by Compass BOs, separate from the prep owner. Task lists are pulled directly from workstream pre-requisites, the test-case spec, tracked gaps, and the live daily log — nothing invented. Story point estimates and sprint assignment are grooming outputs, not pre-filled here.*
