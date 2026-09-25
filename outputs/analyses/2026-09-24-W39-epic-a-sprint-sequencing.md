---
date: 2026-09-24
week: 2026-W39
type: prioritization
topic: R1 Epic A — STIPs & Gigs build/sprint sequencing
status: draft — recommendation, not yet run past Rama/Barry
---

# Epic A Build Sequencing — STIPs & Gigs

**Why this framing, not a cut-list:** all 14 stories are already scope-locked per the [scope map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md) and [discovery-access brief](../decisions/2026-09-22-W39-stips-gigs-discovery-access-brief.md) — this isn't "which 5 of 14 do we build," it's "in what order." US-A14 is excluded from sequencing entirely; it's blocked on R-27 (no owner for the orphaned-posting fallback), not a scheduling choice.

**Objective:** ship the smallest slice that proves the core loop end-to-end — post → apply → review → decide — as fast as possible, since that's what the [impact-sizing doc](2026-09-24-W39-impact-sizing-epic-a-stips-gigs.md) flagged as the thing worth de-risking early (the completion-rate hypothesis can't be tested until officers can actually apply and see an outcome).

**Success metric this sequencing serves:** Apply Completion Rate (~15–20% → ≥40%) and Outcome Turnaround (≤14 days) — both from the [Epic A one-pager](../prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md), Section 6.

---

## Scoring Method

| Factor | What it measures | Scale |
|---|---|---|
| **Impact** | Does this block the core post→apply→review→decide loop, or is it additive/polish? | Core (blocks the loop) / Supporting (needed for real use, not the loop itself) / Additive (nice-to-have within scope) |
| **Effort** | Relative build complexity, drawn from each story's own open technical questions | Low / Medium / High |
| **Risk** | Not-firm items and unresolved technical questions already flagged in the stories doc | Low / Medium / High |
| **Strategic fit** | Contribution to the North Star (officers completing a development action) via this epic's stated hypotheses | Direct / Indirect |

---

## Sequencing Table

| # | Story | Impact | Effort | Risk | Strategic Fit | Sequence |
|---|---|---|---|---|---|---|
| 1 | **US-A1** — Post a STIP or Gig | Core | Low | Low (one open Keycloak question) | Direct — no posting, no loop | **Sprint 1** |
| 2 | **US-A5** — Publish instantly | Core | Low | Low | Direct | **Sprint 1** |
| 3 | **US-A8** — Apply without leaving Compass | Core | Medium (native form vs. widget decision already made — native) | Medium (2-min target not-firm, but doesn't block build) | Direct — this is the epic's core hypothesis | **Sprint 1** |
| 4 | **US-A11** — Review applicants in one place | Core | Low | Low | Direct — closes the loop back to the poster | **Sprint 1** |
| 5 | **US-A12** — Offer or reject an applicant | Core | Low (single PATCH endpoint, per open question already leaning toward "sufficient") | Low | Direct — this is what makes Outcome Turnaround measurable at all | **Sprint 1** |
| 6 | **US-A13** — Restrict applicant data access (RBAC) | Core (non-negotiable, security) | Medium | Medium (audit log ownership unresolved, R-27 — but the *access check* itself isn't blocked, only who reviews the log) | Direct — can't ship applicant data without this | **Sprint 1** |
| 7 | **US-A3** — Add co-evaluators | Supporting | Low | Low | Indirect — improves the poster experience, doesn't block first apply/review cycle | **Sprint 2** |
| 8 | **US-A10** — Get notified when someone applies | Supporting | Medium (email provider decision open — Postman vs. SMTP/SES, PM leans Postman) | Medium (not-firm) | Indirect — improves Outcome Turnaround, but posters can check the table manually in the meantime | **Sprint 2** |
| 9 | **US-A7** — Close a filled posting manually | Supporting | Low | Low | Indirect — needed before any posting reaches its natural end, but not needed for the first cycle | **Sprint 2** |
| 10 | **US-A2** — Confirm Reporting Officer awareness | Supporting | Low | Medium (not-firm — could still change shape) | Indirect — accountability capture, not loop-blocking | **Sprint 2** |
| 11 | **US-A6** — Auto-expire stale postings | Additive | Low | Medium (not-firm window, open cron-vs-read-check question) | Indirect — a hygiene feature, first postings won't hit 30 days before this can ship anyway | **Sprint 2** |
| 12 | **US-A4** — Custom FormSG application form | Additive | Low | Low | Indirect — an escape hatch for posters with unusual needs, not the default path | **Sprint 3** |
| 13 | **US-A9** — Apply via poster's custom form | Additive | Low | Low | Indirect — depends entirely on US-A4 shipping first, thin story on its own | **Sprint 3** |

**US-A14 — Handle an orphaned posting:** **Not sequenced.** Blocked on R-27 (no owner named for RBAC/audit-log/orphan-fallback design). Flag at grooming as blocked, not "backlog," so it doesn't silently slip into a sprint before the owner question resolves.

---

## Why This Order

**Sprint 1 is the whole core loop, not a partial slice.** Six stories (A1, A5, A8, A11, A12, A13) are the minimum needed to post something, apply to it, review it, and decide on it — cutting any one of them leaves the loop broken, not smaller. This matches the impact-sizing recommendation: the completion-rate and turnaround hypotheses can't be tested until officers can go through the full cycle at least once. RBAC (A13) rides along in Sprint 1 despite being "supporting" in a narrow sense, because it's a hard security gate on applicant data — it can't trail without exposing real applicant information without access control.

**Sprint 2 is what makes the loop usable at real volume**, not just demo-able: co-evaluators for posters managing multiple candidates, notifications so posters don't have to poll manually, closing/expiry so postings don't pile up. None of these block a first end-to-end test, but all of them are needed before this can run at 120k-officer scale without friction.

**Sprint 3 is the two FormSG-fallback stories**, which are explicitly framed in the stories doc as "an escape hatch, not a parallel primary path" (US-A4). They're low effort and low risk, but also the lowest-impact pair in the set — nothing else depends on them, and the native path is the default for the vast majority of postings.

---

## What Got Deprioritized, and Why

Nothing in this set was cut — all 13 groomable stories ship within R1, just sequenced. The only "deprioritization" here is **US-A14, held out of sequencing entirely** because it can't be scoped honestly yet (R-27, no owner). Putting a sprint number on it would imply it's ready to build when it isn't — that's a worse outcome than leaving it visibly blocked.

If forced to trim under a real capacity constraint (not the case today, since Epic A has no blocking risk per the one-pager), the two Sprint 3 stories (A4, A9) are the ones to cut first — they're the only pair where the rest of the epic functions completely without them.

---

## Key Trade-offs Considered

- **RBAC in Sprint 1 vs. Sprint 2:** Considered deferring US-A13 alongside the other "supporting" work, since audit-log ownership (R-27) is still unresolved. Kept it in Sprint 1 because the *access-control check itself* (who can view a drawer) doesn't depend on who reviews the audit log later — those are separable, and shipping applicant data without the access check at all isn't an option regardless of sprint.
- **Notifications (A10) in Sprint 2 vs. Sprint 1:** Considered pulling this into Sprint 1 since it directly serves the Outcome Turnaround metric. Kept it in Sprint 2 because posters can check the review table manually for a first test cohort — the metric matters at scale, not on day one.
- **Not using the not-firm status as a hard blocker for sequencing:** Four stories (A2, A6, A8, A10) have not-firm details, but none of the not-firm items change *whether* the story ships, only its exact parameters (30 days vs. something else, 2-min target vs. not). Sequenced them based on core-loop position instead, with the not-firm items flagged as pre-build confirmations to chase in parallel, not blockers to sequencing itself.

---

## Capacity Check

Not run — this document doesn't have story-point or man-day estimates for any of the 13 stories yet, since R-12 (effort/timeline unreconciled) is still open and Epic A doesn't have a standalone estimate. **This sequencing should feed directly into that re-estimate**, not substitute for it — once Rama/Barry size each story, Sprint 1's six stories should be checked against actual sprint capacity for the 3.5-engineer squad, and this document's grouping revisited if six stories doesn't fit one sprint.

---

*Related: [Epic A One-Pager](../prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md), [Epic A User Stories](../prds/2026-09-24-W39-r1-epic-a-stips-gigs-stories.md), [Impact Sizing — Epic A](2026-09-24-W39-impact-sizing-epic-a-stips-gigs.md), [R1 Risk Register](2026-09-16-W38-r1-risk-register.md) (R-12, R-27)*
