---
date: 2026-08-05
week: 2026-W32
purpose: Single consolidated reference for the CSC/DLE integration — governance, per-workstream detail, test cases, and open items. Merges what were 4 separate files (integration plan, SIT/UAT tracker restructure, war room tracker, DLE-only tracker) into one.
companion: 2026-08-05-W32-csc-pm-tracking-list.md — the daily activity log (dated rows, what happened each day) stays separate; this doc is the reference layer (governance, criteria, test cases), not the day-by-day log
target: Push into https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2481324487 once Rama confirms the shape
status: consolidated 2026-08-05 from 4 source files — see "Source files merged" at the bottom
---

# CSC/DLE Integration — Consolidated Reference

For daily status and health rollup, see [PM Tracking List](2026-08-05-W32-csc-pm-tracking-list.md) — that file has the current 🔴 Red health snapshot and day-by-day activity log. This doc is the reference layer underneath it: governance, per-workstream detail, criteria, and the full test-case spec.

**SIT window:** 27 Jul – 7 Aug 2026 · **UAT window (CSC track):** 24/25 Aug – 4 Sep 2026, though a 31 Aug slip surfaced at the 5 Aug standup — unconfirmed which date is current, see Open Questions. **Unresolved:** whether this CSC-track UAT window is genuinely separate from the OTEP-wide UAT window (11 Aug–4 Sep, `open-items.md` #39).

---

## 1. Governance

| Role | Person | Scope |
|---|---|---|
| **Overall Integration Readiness Owner** | *Unassigned* | Cross-workstream defect triage, end-to-end validation, escalation when one workstream blocks another. Still the single biggest gap CSC has flagged twice. |
| SIT Plan Owner | Rama Moorthy | Tracker, daily status, VAPT implications |
| WS1 — Course Integration | CSC: Marcus / Aderick Cheng · CC: *unassigned* | Course file exchange, parsing, field mapping |
| WS2 — Learner File (DLE Mapping) | CSC: Kimberly · CC: *unassigned* | NRIC→DLE mapping, identity resolution |
| WS3 — SSO | CSC: Herman · CC: Pow Hwee, Imelda, Adrian Lo | Token validation, sign-in, session handling |
| WS4 — JumpStart | CSC: Yu Xuan Tay (on leave until 7 Aug) · CC: Adrian Lo | Recommendations API, catalogue matching |

**Coordination cadence:** Daily standup (established 5 Aug), driven off the dated tracker rather than the high-level Confluence plan. Slack for async updates, email for formal summaries.

---

## 2. SIT Success Criteria — what "done" means per workstream

CSC asked for this directly at the 3 Aug SIT readiness sync and got improvised answers each time. This is the standing answer.

| WS | SIT proves | Deferred to UAT |
|---|---|---|
| WS1 | File transfers via CFT; parses per spec; bad rows skipped without breaking the catalogue | Business-level field accuracy, officer-facing UI |
| WS2 | Mapping file loads via CFT; correct format accepted | Business validation of individual officer resolution (M-1, M-2) |
| WS3 | SSO handshake completes over the agreed intranet route; hard failures and token expiry handled without broken session state | Business-level "is this the right officer" validation (S-1, S-2, S-3) |
| WS4 | API connects, authenticates, returns a response | Recommendation quality/relevance (out of scope everywhere) |

**The SIT/UAT boundary, stated plainly:** SIT proves the pipe connects and moves data without breaking. UAT proves the business can trust what lands. Worth stating explicitly in Confluence so it stops being re-litigated — it already surfaced as an unresolved disagreement (Adrian vs. Imelda, unhappy-path file testing) at the 5 Aug standup.

**Still unresolved:** whether invalid-formatted-file (unhappy-path) testing belongs in SIT or UAT — no decision reached as of 5 Aug.

---

## 3. Cross-Workstream Dependency Chain

```
WS1 (Course) ─┐
              ├──► WS4 (JumpStart) — needs course catalogue + learner mapping
WS2 (DLE)   ──┤
              └──► WS3 (SSO) — needs mapped/unmapped test accounts from WS2
```

**WS2 is the single point of failure.** A WS2 delay doesn't just block WS2 — it stalls SSO test execution and the end-to-end Course Journey test (GAP-16). Its mapping-file cadence question has been open since before 4 Aug and remains the highest-leverage unblock in the whole programme.

**Completion sequence** — the order that gets all four workstreams through SIT and UAT together:

| Phase | Focus | Gate |
|---|---|---|
| 0 | Governance — name the Integration Readiness Owner, assign CC-side owners, publish SIT success criteria | Unblocks everything below |
| 1 | Unblock WS1 (course file, overdue) and **WS2 (mapping cadence)** | Both sit upstream of WS3/WS4 |
| 2 | WS3 — gated on WS2 producing test accounts; run S-4/S-5/S-6 | SIT exit for WS3 |
| 3 | WS4 — gated on WS1 + WS2 for full end-to-end; also gated internally on Yu Xuan Tay's API details (see WS4 below) | SIT exit for WS4 |
| 4 | Cross-workstream — write and run GAP-16, resolve account alignment | Only once WS1–WS4 individually pass |
| 5 | UAT entry gate — collective SIT sign-off, resolve the UAT-window date conflict, define the golden test dataset | Before UAT starts |
| 6 | UAT exit gate — see Section 6 | Programme close |

---

## 4. Per-Workstream Detail

### WS1 — Course Integration / CFT File Transfer

**SIT Entry:** Course file spec signed off; CFT workflow + credentials confirmed

**SIT Exit:** B-1 + B-2 pass; exact count on known-good import; no open P1

**Depends on:** CFT pipeline (shared with WS2)

**Status:** 🔴 Blocked — course file push has slipped 4→5→6 Aug, still not landed as of last check

Manual file transfer identified as a fallback if CFT routing doesn't resolve in time — not yet tested.

**Workflow IDs (confirmed 3 Aug):** Paid — `01KYK3XCN9HTDWCAE25WE15EMX` · Non-paid — `01KZ30CGSRCCMBQXXJ5STXK1BN`

**New downstream milestone (raised via Slack, 5 Aug):** CSC's automated file extraction (Marcus/Sheryl) — replacing SIT's manual extraction — is scheduled for 24 Aug, for UAT. This sits downstream of SIT's 7 Aug close and has less buffer than it looks like if CSC-track UAT genuinely slips to 31 Aug (see timeline-raid-log). Whether to ask CSC to prepone this is raised but has no owner yet.

### WS2 — Learner File & Mapping (DLE)

**SIT Entry:** Mapping file spec signed off; CFT workflow confirmed

**SIT Exit:** Valid mapping loads; re-supply overwrites, not duplicates

**Depends on:** CFT pipeline (shared with WS1); feeds WS3 test accounts

**Status:** 🔴 Mapping cadence still unconfirmed — the standing blocker

**What this proves:** every officer is correctly and safely linked to their CSC Learn (DLE) identity. WS3 (SSO) and WS4 (JumpStart) both depend on this — if the mapping is wrong, sign-in and recommendations break downstream, not here.

**Standing question — raise until answered:** Who supplies the mapping file, on what channel (CFT?), and at what refresh cadence? Unconfirmed since before 4 Aug. Single biggest open item for WS2, blocks WS3's test accounts.

**Workflow ID (confirmed 3 Aug):** `01KYK42DHD67057RBER9NRRCXP`

**Named DLE counterpart check:** confirm Kimberly is the sole DLE point of contact for M-1, or get a second name (Imelda to ask).

### WS3 — SSO with CSC

**SIT Entry:** SSO config provided; infra provisioned; test accounts agreed

**SIT Exit:** Config + infra complete; connectivity test passes; Learn Course Page viewable without re-login; no open bugs post bug-fix window; **S-4/S-5/S-6 pass**

**Depends on:** Intranet routing decision; WS2 for test accounts

**Status:** 🟡 Furthest along, but nothing fully closed — see decision below

**Decision (3 Aug):** use intranet routing for CSC-to-OTEP token validation — avoids an internet-facing path that would trigger additional VAPT scope. **Confirmed 5 Aug: this is currently failing.** Aderick tested directly — the domains do not resolve on intranet, but are reachable from internet. If intranet stays unresolvable, this decision reopens and VAPT scope changes. **Someone needs to own the call: keep troubleshooting intranet, or formally escalate to the internet-path/VAPT conversation.**

**S-4/S-5/S-6 status:** content is written and pushed into the live Confluence doc, but **not yet signed off** — Herman and Pow Hwee still confirming coverage as of the 5 Aug standup. Don't treat as done.

**Possible duplicate tracking, not yet confirmed:** the same day this was rated Red at the CSC standup, OTEP Team 2's internal standup separately had Pow Hwee and Léo meeting on "Keycloak/CSC SSO integration." Strong chance this is the same blocker viewed from two angles (CSC-facing vs. internal engineering) rather than two separate threads — worth confirming after that discussion happens so it doesn't get tracked (and chased) twice.

**Test-account sufficiency question (raised via Slack, 5 Aug):** the one-shared-test-account decision above may not be enough — 20 UAT personas need matching DLE accounts, and it's unconfirmed whether one shared account covers that. Unassigned, unresolved.

**Related, separate VAPT question (raised via Slack, 5 Aug):** CIE-JD re-VAPT likely needed per Barry Lim's assessment (new infra, moving from MOM to PSD), with no funding line yet — raised to Jace Tan, no reply. This is distinct from the VAPT closure-date conflict (16 Oct vs. 23 Oct) tracked elsewhere — don't conflate the two.

### WS4 — JumpStart Recommendation Integration

**SIT Entry:** API key + staging URL provided; IP whitelisted

**SIT Exit:** Mapped officer gets personalised recs; empty-response handled gracefully; no open P1

**Depends on:** WS1 (catalogue) + WS2 (identity) for full end-to-end

**Status:** 🔴 — downgraded from earlier Green read once two new risks surfaced 5 Aug

**API key + staging URL confirmed 3 Aug**, IP whitelisted. But two new blockers surfaced at the 5 Aug standup:
1. **Yu Xuan Tay (owns sharing API details with CC) is on leave until 7 Aug — the same day SIT closes.** No backup owner named. Everything downstream of this (endpoint confirmation, `POST /recommendations/dashboard` testing) may cascade behind it — confirm with Adrian Lo whether whitelisting/mock data can proceed in parallel or are also blocked.
2. **JumpStart staging data doesn't match CSC's staging environment course data.** Even once connectivity works, recommendations may fail, validation may fail, and false defects may get reported as a result of the mismatch, not real bugs.

---

## 5. Test-Case Spec

Standard format. 🟠 **GAP** rows are in scope per the source doc but have no test case written — placeholders, not answers.

### WS1 — Course Integration

| ID | Scenario | Expected Result | Status |
|---|---|---|---|
| A-1 | Field mapping — known-good file, N courses | N courses import as exactly N; every field matches source | Not run |
| A-2 | Special characters — accents, ampersands, long text | No corruption or truncation | Not run |
| A-3 | Paid/free flag | Flag applied correctly per source | Not run |
| B-1 | Valid file imports | Import succeeds, count confirmed | Not run |
| B-2 | Missing mandatory field | Row skipped and reported, no blank course | Not run |
| 🟠 GAP-1 | Bulk partial-failure handling | B-2 only tests one bad row | No test case written |
| 🟠 GAP-2 | Officer-facing search/filter/detail UI | In scope; A-3 checks the flag only, not the UI | No test case written |
| 🟠 GAP-3 | Empty file handling | CSC commits to supplying one; no case uses it | No test case written |
| 🟠 GAP-4 | Duplicate/re-submitted file | No case for a repeat push | No test case written |
| 🟠 GAP-5 | Transport/transfer failure | Only success path is tested | No test case written |

### WS2 — Learner File

| ID | Scenario | Expected Result | Status |
|---|---|---|---|
| M-1 | Known test officer's NRIC → resolves to right `dle_id` | Officer resolves to correct dle_id | Not run (@kimberly) |
| M-2 | Re-supply, changed `dle_id`, same NRIC | One mapping per officer, updated, no duplicate | Not run |
| 🟠 GAP-6 | Unmapped/invalid NRIC caught **at WS2 itself** | Currently only caught downstream at S-2 — a bad mapping could pass silently | No test case written |
| 🟠 GAP-7 | Malformed row handling | WS1 has an equivalent (B-2); WS2 has none | No test case written |
| 🟠 GAP-8 | Second/subsequent refresh cycle | M-2 only tests one overwrite | No test case written |

### WS3 — SSO with CSC

BO-executable (sign in, observe result):

| ID | Scenario | Expected Result | Status |
|---|---|---|---|
| S-1 | Mapped officer signs in as the right person | SSO identity matches DLE mapping | Not run — CSC to provide account |
| S-2 | Unmapped officer | Clear message, not a broken page | Not run |
| S-3 | Return trip — session persists after CSC session | Officer returns to CareerCompass still signed in | Not run |

Engineering-owned, tracked as SIT exit criteria (not BO-executable — requires simulating endpoint failures, issuing/expiring tokens, reading network logs):

| ID | Scenario | Expected Result | Status |
|---|---|---|---|
| S-4 | Hard SSO failure — unreachable endpoint or invalid/expired credential | Clear, safe error message; no partial/broken session state; officer isn't left half-logged-in | Content in Confluence, sign-off pending (Herman, Pow Hwee) |
| S-5 | Session/token expiry mid-flow | Officer prompted to re-authenticate cleanly, not shown a broken or stale session | Content in Confluence, sign-off pending |
| S-6 | Routing decision verified end-to-end (intranet path, not internet fallback) | SSO works correctly over the intranet route specifically, confirmed not assumed | Content in Confluence, sign-off pending — **directly affected by the 5 Aug intranet DNS finding** |

### WS4 — JumpStart

| ID | Scenario | Expected Result | Status |
|---|---|---|---|
| J-1 | Mapped officer — personalised recs | Officer sees personalised recs | Not run |
| J-2 | Mapped officer — empty response | No recs shown, no error | Not run |
| 🟠 GAP-12 | Catalogue enrichment & omission | In scope; not tested by J-1/J-2 | No test case written |
| 🟠 GAP-13 | Popularity fallback | In scope; J-2 proves absence, not fallback content | No test case written |
| 🟠 GAP-14 | Opt-in configuration | In scope; no case tests opt-in/opt-out | No test case written |
| 🟠 GAP-15 | Never-mapped officer calls JumpStart | Different from J-2 (mapped, no matches) | No test case written |

### Cross-Workstream

| ID | Scenario | Expected Result | Status |
|---|---|---|---|
| 🟠 GAP-16 | **End-to-end Course Journey** (highest priority) — import (WS1) → map (WS2) → sign in (WS3) → see recommendation (WS4), one real officer | Full journey completes with no manual intervention | Placeholder existed in source, never written |
| — | Performance/load testing | Explicitly out of scope given the compressed window | Out of scope |

---

## 6. Entry & Exit Criteria Summary

### Entry — before UAT

| Criterion | WS1 | WS2 | WS3 | WS4 |
|---|:---:|:---:|:---:|:---:|
| SIT completed & signed off | ☐ | ☐ | ☐ | ☐ |
| Spec/mechanism signed off | ☐ | ☐ | ☐ | ☐ |
| One clean run completed | ☐ | ☐ | ☐ | ☐ |
| Sample files / test accounts supplied | ☑ | ☑ | ☐ | ☑ |

### Exit — before final sign-off

| Criterion | Status |
|---|---|
| WS1: B-1 + B-2 pass, exact count on known-good import | Not yet run |
| WS2: valid mapping loads; overwrite not duplicate | Not yet run |
| WS3: mapped officer signs in correctly; unmapped handled gracefully; S-4/S-5/S-6 pass | Not yet run |
| WS4: mapped officer gets personalised recs; empty-response handled | Not yet run |
| No open P1 defect across all four workstreams | N/A — SIT not complete |

---

## 7. Open Risks

| Risk | Status | Notes |
|---|---|---|
| No contingency plan for first-try failure across connectivity/parsing/mapping, against a compressed SIT window | 🔴 Open | Highest risk per the 3 Aug readout |
| No overall integration readiness owner | 🔴 Open | Section 1 |
| WS3 intranet DNS resolution confirmed failing | 🔴 Open | May force a VAPT scope change — see WS3 detail above |
| Yu Xuan Tay (WS4) on leave until 7 Aug, same day SIT closes | 🔴 Open | No backup owner named |
| JumpStart/CSC staging data mismatch | 🔴 Open | Risk of false SIT defects |
| No agreed golden test dataset / officer population for UAT | 🔴 Open | Needed before UAT starts, ideally before SIT ends |
| Slack-only async coordination may not hold up across the compressed window | 🟡 Reassess | CSC flagged this directly |
| CSC-track UAT date — 24/25 Aug vs. a 31 Aug slip raised 5 Aug | 🟡 Unconfirmed | See Open Questions |

---

## 8. Open Questions

- [ ] Who supplies the mapping file, its channel, and refresh cadence (WS2)? — standing question, unanswered since before 4 Aug
- [ ] Who owns the WS3 intranet-vs-internet decision, and when does it get made?
- [ ] Is the CSC-track UAT window now 31 Aug, or still 24/25 Aug?
- [ ] Is this CSC-track UAT window genuinely separate from the OTEP-wide UAT window (#39, 11 Aug–4 Sep), or a date conflict?
- [ ] Is invalid-formatted-file (unhappy-path) testing in SIT scope or UAT scope?
- [ ] Does Yu Xuan Tay's leave block only their own task, or the rest of WS4 behind it too?

---

## 9. Deliverables & Sign-Off

- Executed scenario logs per workstream (pass/fail + severity)
- Defect log with routing (data defects → CSC/DLE, application defects → CareerCompass, shared where ambiguous)
- Data-quality feedback log for CSC (course + mapping)
- UAT summary and sign-off, with residual limitations recorded
- A named Integration Readiness Owner sign-off before SIT is declared complete, not just per-workstream sign-off in isolation

---

*Source files merged 2026-08-05: `csc-integration-plan-confluence-draft.md` (governance + phase sequence), `csc-sit-uat-tracker-restructure.md` (entry/exit criteria + full test-case spec), `csc-war-room-tracker.md` (daily status format, folded into the health rollup now living in the PM Tracking List), `dle-tracker.md` (WS2-only detail, folded into Section 4). Those 4 files are superseded by this one and can be archived. Day-by-day activity log stays in [PM Tracking List](2026-08-05-W32-csc-pm-tracking-list.md), which is unaffected by this merge.*
