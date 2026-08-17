---
date: 2026-08-06
week: 2026-W32
purpose: Logical task sequence for WS3 (SSO Integration), reflecting the decision to test over internet routing first while intranet resolution runs in parallel
sources: outputs/analyses/2026-08-05-W32-csc-pm-tracking-list.md, outputs/analyses/2026-08-06-W32-uat-activities-page.md (Section 4b WBS)
status: draft — internet-route-first sequencing, supersedes the earlier intranet-first sequence
---

# WS3 — SSO Integration: Task Sequence

**Context:** Intranet DNS resolution for CSC-to-OTEP connectivity is still failing (confirmed 5 Aug — domains don't resolve on intranet, but are reachable from internet). Rather than blocking all WS3 testing on that fix, the team is testing over the internet route first, with intranet resolution running as a parallel, non-blocking track.

---

## Sequence

| # | Task | Owner | Status | Why it's here |
|---|---|---|---|---|
| 1 | Confirm internet routing is provisioned (egress/whitelisting) for testing | Aderick / core infra team | 🟡 In Progress | Starting point — this is what actually unblocks testing now, not the intranet decision |
| 2 | Perform connectivity test to OTEP endpoints over internet route | Herman Hartoyo (CSC) | 🟡 In Progress | Can proceed immediately once #1 is provisioned — no longer gated on intranet |
| 3 | Provide SSO config | Herman (CSC) | ✅ Completed | Already done |
| 4 | Test the SSO config and provide additional parameters back to Herman | Pow Hwee | 🔴 Pushed to 7 Aug | Needs #3 (config exists) and ideally #2 (connectivity proven over internet) |
| 5 | CSC provides mapped + unmapped test accounts for S-1/S-2 | Herman (CSC) | 🔴 Blocked on WS2 | External dependency, runs in parallel with 1–4 — doesn't block WS3's internal steps |
| 6 | Write and confirm S-4/S-5/S-6 test steps (hard failure, token expiry, routing) | Drafted: Michelle · Sign-off: Herman + Pow Hwee | 🟡 In Progress | Can run in parallel; sign-off realistically wants #3/#4 settled |
| 7 | Run S-1/S-2/S-3 (BO-executable) over internet route | CC | 🔴 Not Started | Needs #5 (test accounts) |
| 8 | Run S-4/S-5/S-6 (engineering-owned) over internet route | Herman + Pow Hwee | 🔴 Not Started | Needs #6 signed off |
| 9 | Verify Learn Course Page viewable from CareerCompass without separate CSC login | Imelda + Adrian Lo | 🔴 Not Started | End-to-end proof — needs #7 and #8 both passing |
| 10 | Resolve intranet DNS resolution (parallel track, not blocking) | Core/central infra team | 🟡 In Progress | Runs alongside 1–9, not ahead of it — infra fix, not a test gate anymore |
| 11 | Re-verify SSO over intranet once resolved; confirm no behavior difference vs. internet-route results | Herman + Pow Hwee | 🔴 Not scheduled | Only needed once #10 clears — this is the "does production match what we tested" check before final sign-off |
| 12 | Confirm which route (intranet vs. internet) is reflected in the SSO config as final/production | Unassigned — needs an owner | 🔴 Not Started | Closing decision — now happens at the end, not the start, since testing no longer waits on it |

---

## What changed from the intranet-first sequence

- **The routing decision (previously blocking, step 2) moved to the end (step 12).** Testing no longer waits on "which route wins" — the team tests now and reconciles the routing decision once intranet is actually ready. This de-risks the schedule but makes **step 11 load-bearing**: someone has to confirm the internet-route test results still hold once routing flips to intranet, not just assume they will. Pow Hwee's earlier assessment ("shouldn't materially change") is still unproven.
- **Step 10 (intranet resolution) is now explicitly a parallel track, not a prerequisite** — worth tracking separately so it doesn't silently block anything it no longer needs to.
- **The unowned decision at step 12 is lower urgency than before, but can't disappear** — production still needs to run over the right route eventually, and nobody owns making that call yet.

---

## Dependencies not owned by WS3 itself

- **Step 5** (test accounts) depends on WS2's mapping-file cadence landing — tracked separately, doesn't block WS3's internal steps 1–4, 6, but does block 7 and 9.
- **Step 10** (intranet resolution) sits with the core/central infra team, outside CC's direct control — status only, no CC action to accelerate it beyond the existing ITSM follow-up.

---

*Built 2026-08-06. Supersedes the earlier intranet-first sequencing (routing decision as step 2) now that the team has decided to test over internet routing first.*
