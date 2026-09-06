# Meeting Notes: Career Compass Application Walkthrough for VAPT

**Date:** 31 August 2026

**Attendees:** Rama Moorthy, Adrian Ang, Benjamin (CIE), Johnny (POCDEX), Chua (NCS), Brian, Daniel, Jobelle Lim, project teams

**Meeting Type:** Engineering/vendor sync — VAPT scope, access, and schedule alignment with NCS

**Source:** AI-generated meeting summary, cross-checked against Jobelle's detailed 6-report schedule (received shortly after this meeting). Michelle attended with no action items of her own.

---

## Summary

Rama, Adrian, and the engineering/security leads walked NCS (Chua) through Career Compass, CIE, and POCDEX architecture to confirm VAPT scope matches the awarded quotations, and identified the credentials, access, and test data NCS needs before testing starts. Scope counts were reconciled — Career Compass/CIE: 24 AWS services, 34 IAM roles, 29 policies (up from an initial 23/32 count); POCDEX: 15 services, 8 roles, 2 policies, 5 endpoints — all confirmed within quotation.

The meeting's own summary left two dates ambiguous (a "30 October" closure figure and a "23 September" POCDEX start). **Jobelle's detailed 6-report schedule, received shortly afterward, resolves both** — see Reconciled Timeline below, which is the authoritative version used throughout these notes.

---

## Reconciled Timeline (authoritative — per Jobelle's schedule)

| Stream | Reports | Assessment window | Final review | Acknowledgment |
|---|---|---|---|---|
| Compass (Cloud, Web, API VAPT) | 1, 2, 3 | 7–25 Sep | 26–28 Oct | 29–30 Oct |
| CIE (Cloud VAPT) | 4 | 7–25 Sep | 26–28 Oct | 29–30 Oct |
| POCDEX (Cloud VAPT, API PT) | 5, 6 | 9–22 Sep | 2–4 Nov | 5–6 Nov |

**30 Oct and ~7 Nov were never in conflict** — Compass/CIE close 29–30 Oct; POCDEX closes 5–6 Nov, which is what actually feeds the tracked ~7 Nov overall VAPT sign-off. These are two different streams' milestones that simply hadn't been shown side by side before Jobelle's schedule existed.

**POCDEX's real assessment start is 9 September**, not 7 Sep (the older tracked figure) and not 23 Sep (this meeting's own AI summary). Treat Jobelle's schedule as the authoritative source going forward.

---

## Decisions Made

1. **Career Compass VAPT reporting = 3 reports (Cloud, Web, API); CIE = 1 report; POCDEX = 2 reports (Cloud, API) — 6 reports total.**
   - **Why:** Reporting organized by project and test type, not per-component, to keep the report structure manageable.
   - **Who decided:** Rama, confirmed with Chua (NCS)
   - **Impact:** Jobelle's schedule reflects this 6-report structure. The API report for Career Compass/CIE stays combined (8 endpoints CC, 2 endpoints CIE) in one report with clear ownership breakdown.

2. **POCDEX VAPT runs as a separate, staged stream from Career Compass/CIE — not simultaneous.**
   - **Why:** POCDEX's scope is smaller, so NCS needs a shorter assessment window; staging it lets its own reporting stay independent per the 25 Aug decoupling decision.
   - **Who decided:** Rama, Chua, Daniel
   - **Impact:** Confirms "pursued jointly if feasible" (25 Aug POCDEX timeline sync) resolved to staged-but-coordinated, not literally concurrent. See Reconciled Timeline above for the actual dates.

3. **Career Compass/CIE closure includes deliberate contingency buffer.**
   - **Why:** NCS's initial assessment window (7–25 Sep, ~2.5 weeks) is longer than Rama's original 18 Sep planning assumption. The team chose to carry that buffer through remediation → follow-up review → second remediation → final review, rather than tracking to the tightest possible date.
   - **Who decided:** Rama, Chua, Jobelle
   - **Impact:** Closure lands 29–30 Oct (Compass/CIE only — see Reconciled Timeline).

4. **Cloud VAPT access: NCS gets AWS-account access plus a separate read-only security-audit IAM role; API keys stay excluded from the general role if kept private by the application team.**
   - **Why:** Standard least-privilege separation between API-testing access and cloud infrastructure audit access.
   - **Who decided:** Rama, Chua
   - **Impact:** Rama to provision; no material scope change.

5. **CIE and POCDEX intranet-only APIs require dedicated EC2 jump hosts, with S3 access for NCS tooling.**
   - **Why:** The 2 CIE APIs and POCDEX's Officer API are intranet-only and unreachable from NCS's normal testing path (the "seed machine" covers the other 8 Career Compass APIs).
   - **Who decided:** Benjamin (CIE), Johnny (POCDEX), confirmed with Chua
   - **Impact:** New provisioning work for Benjamin and Johnny ahead of their respective testing windows.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Provide NCS with 2 normal-user accounts, 1 admin account, test files for all upload functions, and the access-control matrix (Career Compass) | Adrian | Before 7 Sep (Compass/CIE assessment start) | 🔴 High | 🔴 Not Started |
| Send NCS detailed request/response documentation for the 10 in-scope Career Compass + CIE APIs, with sample bodies | Adrian | Before 7 Sep | 🔴 High | 🔴 Not Started |
| Provision an EC2 instance inside the CIE environment, confirm it can reach the 2 intranet-only CIE APIs, provide S3 + EC2 access role | Benjamin | Before 7 Sep | 🔴 High | 🔴 Not Started |
| Provision NCS with AWS-account access + read-only security-audit IAM role for Cloud VAPT | Rama | Before 7 Sep | 🔴 High | 🔴 Not Started |
| Provide NCS with EC2 instance details, API key, test officer/agency records, and API documentation for POCDEX Officer API scenarios | Johnny | Before 9 Sep (POCDEX assessment start) | 🔴 High | 🔴 Not Started |
| Consolidate all access/credentials/test-data/documentation/environment requirements from NCS and send to project teams + NCS | Rama | Not stated | 🟡 Medium | 🔴 Not Started |
| Update quotation records to reflect the revised scope counts (24 services/34 roles/29 policies for Career Compass+CIE) | Rama / Brian | Not stated | 🟢 Low | 🔴 Not Started |

**Notes:**
- The first five items are hard prerequisites for testing to start on schedule. Jobelle's schedule independently shows "VAPT preparations (sys info, account setup for NCS)" as **In Progress, 4 days left** (target window 31 Aug–4 Sep) across all 6 report streams — treat that as the authoritative due date for these five items rather than the "not stated" in the raw meeting summary.
- Michelle attended but confirmed no action items are on her end; this table reflects owners named in the meeting.

---

## Key Insights & Quotes

**Scope creep, caught and reconciled, not flagged as a problem:** the AWS service/IAM-role count grew from an initial walkthrough figure (23 services, 32 roles) to an updated inventory (24 services, 34 roles, 29 policies) — both Rama and Chua confirmed this stays within the awarded quotation. Worth watching whether this pattern continues; a few more "we found more items" passes could eventually breach quotation scope and require a change request.

**Architecture note relevant to future R1 scoping:** Benjamin's CIE walkthrough describes the frontend service as "not currently being used" — the in-scope component is backend-only (FastAPI + ECS Fargate/SQS/OpenSearch/Bedrock/Aurora/S3). Useful context for the R1 second-VAPT-cycle question raised in today's earlier sync with Adrian — CIE's current backend-only footprint may or may not hold once R1 adds new endpoints.

**POCDEX has one consumer today, more planned:** Johnny noted "Career Compass is currently the only downstream consumer, although future consumers are planned." Worth tracking who picks up POCDEX API access next as a dependency to watch.

---

## PM Assessment (Michelle's own analysis, added post-meeting)

**Overall:** A productive operational readiness session — scope validated against quotations, access requirements surfaced early, a working remediation timeline established. But the discussion was logistics- and scope-heavy; several delivery, security-governance, and execution risks were acknowledged indirectly, not actively managed.

### What went well

1. **Scope validation completed before testing starts** — Career Compass (Cloud/Web/API), CIE (Cloud/API), and POCDEX (Cloud/API) all confirmed within the contracted quotation. Reduces mid-engagement procurement/scope-dispute risk.
2. **Application walkthroughs were sufficiently detailed** for NCS to begin VAPT planning — Career Compass (UX flow, competency management, CV upload, learning recommendations, role exploration, admin functions), CIE (CV ingestion, SQS, OpenSearch, workers, metrics, masked CV storage, FastAPI), and POCDEX (exposed APIs, API-key model, intranet-only access, replication architecture). The normal-user-vs-admin-role split was explicitly confirmed as requiring both to be tested.
3. **Access requirements surfaced early** — the most useful outcome. An explicit prerequisite list now exists (accounts, test files, access-control info, API docs, EC2 jump hosts, S3 access, IAM roles), even though nothing is provisioned yet.

### What didn't go well

1. **Timeline ownership was fuzzy in the room.** Real meeting time went to reconciling PSD's assumption (first findings by 18 Sep) against NCS's actual communicated plan (7–25 Sep assessment) — recalculated live. This is a symptom of no single source of truth existing at the time; planning assumptions were sitting in emails rather than a governed tracker. Jobelle's schedule (received after the meeting) is the fix for this specific symptom.
2. **Multiple infrastructure dependencies remain unresolved** — IAM roles, EC2 provisioning, API access, S3 access, test accounts, API documentation, test data were all raised but not closed in the room. VAPT cannot start until these are fulfilled.
3. **Authentication testing coverage is ambiguous.** The username/password vs. government-identity-provider login discussion raised real questions (which APIs each flow calls, whether coverage is equivalent) but didn't converge on a testing matrix. Risk: incomplete authentication coverage or misaligned expectations at report review.

### Risks not being explicitly managed (candidates for the RAID log)

| # | Risk | Likelihood | Impact | Why it's concerning |
|---|---|---|---|---|
| 1 | Late provisioning delays VAPT start | High | High | Every project team owns different dependencies (accounts, IAM, EC2, S3, docs); status against the 7 Sep / 9 Sep start dates needs active tracking, not an assumption. |
| 2 | VAPT findings exceed remediation capacity | Medium | High | Schedule assumes scan → 2-week remediation → re-test → closure, but the room acknowledged "we don't know what we don't know" — the second remediation window is an estimate with buffer, not a sized plan. Critical findings needing architecture or IAM redesign could exceed it. |
| 3 | Internal APIs require special environments | High | High | CIE and POCDEX intranet-only endpoints need EC2 jump hosts before NCS can even reach them — the testing environment itself is now a dependency. If infra readiness slips, testing can't start even if the application is ready. |
| 4 | Ownership fragmentation | Medium | Medium | Work spans Compass, CIE, POCDEX, Infrastructure, and NCS — items surfaced with an owner named verbally, not formally tracked. Risk of items being assumed done rather than actively confirmed. |
| 5 | Report structuring expectations still slightly nuanced | Low | Medium | Report count/grouping (6 total) is largely resolved, but review effort and sign-off expectations against that structure haven't been stress-tested. |

Most of these map onto risks already logged last week (R12 ownership/decision gaps, R13 "who decides" pattern, R15 no consolidated VAPT readiness checklist) rather than representing brand-new territory — this meeting is fresh evidence for those, not a parallel risk set.

### The gap to close immediately, if I were the PM/Product Lead

**VAPT readiness governance.** The programme's actual critical path right now is not the VAPT itself — it's **Access + Documentation + Environment Readiness → VAPT Start → Remediation → Re-test → Closure**, and most of the current execution risk sits in that first stage. Recommended tracker structure: Dependency | Owner | Required By | Status | Test-start blocker? (Y/N).

**Update — this exists now, mostly.** Jobelle's 6-report schedule already carries Owner, Status, Target Date, Target End Date, and Days Left per deliverable stage (walkthrough → prep → assessment → remediation → follow-up → second remediation → final review → acknowledgment). It's missing one thing: an explicit **"Test-start blocker? (Y/N)"** column, which would let it double as a readiness gate, not just a schedule. Recommend proposing that one addition to Jobelle/Rama — with it, this substantially closes risks.md's R15.

---

## Blockers

1. **Five hard-prerequisite action items (accounts, API docs, EC2 provisioning, IAM roles, test data) had no due date in the raw meeting notes.**
   - **Blocked by:** Nothing yet — a documentation gap, not an active blocker.
   - **Impact:** If any slip past 7 Sep (Compass/CIE) or 9 Sep (POCDEX), NCS can't meaningfully start on schedule — the same "access must be in hand before NCS engineers can start real work" pattern already seen at the 28 Aug NCS kickoff.
   - **Resolution:** Jobelle's schedule already shows these as "In Progress, 4 days left" (due 31 Aug–4 Sep) — treat that as the real due date now that it exists.

---

## Next Steps

**Immediate (This Week):**
- Adrian: prepare Career Compass test accounts, files, access-control matrix, and API documentation — due before 7 Sep
- Benjamin: provision CIE EC2 jump host and confirm connectivity — due before 7 Sep
- Rama: provision Cloud VAPT AWS/IAM access — due before 7 Sep
- Johnny: provision POCDEX test access and documentation — due before 9 Sep
- Propose adding a "Test-start blocker? (Y/N)" column to Jobelle's schedule (see PM Assessment)

**Short-term (Next 2 Weeks):**
- Rama: consolidate and send the full NCS requirements list to project teams
- Rama / Brian: update quotation records to reflect the revised scope counts

**Follow-up Meeting:**
- Not explicitly scheduled — likely folded into the daily VAPT activities sync (Jobelle, started this week per the W36 weekly plan) rather than a standalone follow-up.

---

## Context for Future Reference

This meeting is the technical/access-provisioning counterpart to the higher-level VAPT governance risk already tracked (risks.md R15: no consolidated VAPT "Definition of Ready" across the 3 parallel streams). It's a positive signal that scoping and access-requirement work is happening — and Jobelle's schedule, received right after, is close to resolving R15 outright.

**Source-reliability note:** this meeting's own AI-generated summary contained an imprecise POCDEX start date (23 Sep, corrected to 9 Sep by Jobelle's schedule) — a reminder that AI summaries of meetings should get the same "verify before treating as settled" discipline as verbal confirmations, per this week's "Sprint 9 starts w/c 31 Aug" correction. `risks.md` and `open-items.md` #39 have both been updated to reflect the reconciled dates above (2026-08-31).

---

## Appendix: Raw Notes

<details>
<summary>Click to expand source material</summary>

Source 1: AI-generated meeting summary provided by Michelle, 2026-08-31, for the "Career Compass Application Walkthrough for VAPT" meeting (1:30pm).

Source 2: Jobelle's detailed 6-report VAPT schedule (screenshot), received 2026-08-31 — used as the authoritative date source throughout these notes.

</details>
