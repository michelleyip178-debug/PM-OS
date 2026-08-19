# Opportunities + Ops Portal — What's Not Delivered Yet

**Scope:** everything still open, in progress, or blocked across the Opportunities pillar and the CC Ops Portal, as of 18 Aug 2026. Pulled live from Jira and the current Ops Portal PRD Decision Tracker — not a stale snapshot.

**Not included:** things already Done. Full pass/fail QA detail lives in the UAT test case docs, not here — this is what to build/decide, not what to verify.

**Status legend:** ✅ Done · 🟡 QA · 🟠 In Progress · 🔲 Backlog · ⚠️ Blocked on a decision

---

## Opportunities

### Apply flows

| Jira ID | Item | Status | Notes |
|---|---|---|---|
| OTEP-130 | Apply for a STIP/Gig with PostHog tracking | 🔲 Backlog | Scope cut confirmed 2026-07-20 — FormSG has no webhook support, so submission tracking, officer email, and poster notification are all cut. Remaining scope likely duplicates what OTEP-319/US-18 already shipped. Still needs a Jira call: close as duplicate, or keep thin for traceability. |
| OTEP-132 | Apply for an SJR/internal job via OTG redirect | 🔲 Backlog | Deferred to R1 — SJRs are out of MVP scope entirely (confirmed 2026-06-05). |

### Ringfencing

| Jira ID | Item | Status | Notes |
|---|---|---|---|
| OTEP-408 | Listing API — apply ringfencing eligibility filter | 🟡 QA | Backend rule engine. |
| OTEP-409 | Listing — reflect ringfenced results | 🟡 QA | Frontend counterpart to OTEP-408. |
| OTEP-390 | Ringfenced detail page states (eligible + ineligible) | 🟡 QA | Copy corrected to match actual screenshot behavior this week (see OTEP-975 below). |
| OTEP-975 | E2E test — Blocked vs Eligible Views (by Agency) | 🟢 Ready For UAT | Retitled and corrected this week — expected-result copy now matches the actual "This opportunity isn't available..." message. |
| OTEP-1301 | E2E test — Blocked vs Eligible Views (Job Function) | 🟢 Ready For UAT | Moved onto CC-UAT board this week. |
| OTEP-1302 | E2E test — Blocked vs Eligible Views (Job Family, Detail Page) | 🟢 Ready For UAT | Created this week as the third ringfencing filter type. |

### Login & Auth

| Jira ID | Item | Status | Notes |
|---|---|---|---|
| OTEP-71 | Login via WOG AD | 🟠 In Progress | Prod/UAT confirmed and tested 2026-08-18, UAT Phase 2 started — resolution not yet reflected in Jira status. Update the ticket. |
| OTEP-1174 | E2E — WOG AD login, blocked direct access, detail page render, and logout | 🟢 Ready For UAT | Combined this week from 3 separate tickets (UAT-AUTH-001/002/003) into one 4-step E2E: login, blocked-access redirect, opportunity detail page renders correctly post-redirect, logout returns to login page. Session-invalidation scenario (was UAT-AUTH-002) dropped from scope. OTEP-1175 and OTEP-1176 deleted as duplicates, content folded in. |

### Detail page / listing bugs

| Jira ID | Item | Status | Notes |
|---|---|---|---|
| OTEP-667 | [BUG] Open issues for opportunities details page | 🔲 To Do | |
| OTEP-971 | UAT-OPP-017 — Deep-link to closed opportunity shows clear closed-state message | 🔲 To Do | |

*OTEP-1171, 1172, 1188 (the closing-date/badge boundary-mismatch cluster) confirmed Done this pass — dropped from this table per the doc's own scope (Done items excluded). See Open Decision #1 below, likely resolved alongside these fixes.*

### Spikes / not yet a story

| Item | Status | Notes |
|---|---|---|
| OTEP-445 | 🔲 To Do | Spike: approaches to import POCDEX code table. Produces a recommendation, not a shippable feature. |
| REQ-X2 — Competency-to-opportunity matching (agency-code resolution) | 🔴 Unresolved | Blocks full verification of the competency-match display feature. |

---

## Ops Portal

The Ops Portal PRD (Section 8) frames scope as 4 stories, not releases. All 4 are pre-freeze per the current ask, not yet Engineering-confirmed.

| Story | Success Criteria | Status |
|---|---|---|
| Daily sync detects, diffs, categorizes, and logs a POCDEX record change | Every detected change gets a category + reason code + priority; every action logged | 🔲 Not started — straightforward build once confirmed, no new visual design needed |
| BO reviews Overview and Update status sections | BO sees open case count, urgency, and stuck/failed nightly runs | 🔲 Not started — lowest-complexity pair, launch first if design slips on the rest |
| BO reviews and sorts Identity, Employment record, and Record change cases | Identity/contact and duplicate-record cases stay one-at-a-time, never bulk | ⚠️ Blocked — no visual designs exist yet for these 4 sections; blocks sprint planning until a design session happens |
| A case escalates to POCDEX or the receiving team | Escalation carries all due-diligence fields (POCDEX UID, HR ID, email, position ID) | ⚠️ Blocked — receiving team doesn't exist yet (see Decision Tracker below) |

### The 14 POCDEX test cases — MVP handling status

Full detail lives in the PRD; net position:

| Handling | Count | Which |
|---|---|---|
| In MVP scope, covered by daily diff | Several | TC1 and others on the confirmed 6-field diff |
| Gap — not actually caught by the diff | 4 | TC2, TC4, TC8, TC13 — identity fields aren't in the diff's scope |
| Priority regardless of tag (severity over tagging) | 2 | TC11, TC13 |

TC13 (email reuse → one officer sees another's data) is the standout: Critical severity, fix blocked on NRIC/FIN privacy/security approval — still unresolved as of 18 Aug, see [RAID log](2026-08-18-W34-week33-raid-log.md).

### Ops Portal Decision Tracker — open rows

| Decision | Owner | Status |
|---|---|---|
| Extend daily-diff scope to identity fields, or formally accept the TC2/TC4/TC8/TC13 gap | Product + Engineering | 🔴 Open |
| Build the NRIC/FIN fallback token (closes TC13) | Engineering | 🔴 Open — approval blocker cleared 14 Aug, build not started |
| Resolve the email/idnumber risk-classification contradiction | Product + Engineering | 🔴 Open |
| Launch gate: set up a receiving team, or auto-resolve low-risk categories as an interim path | Product + Ops leadership | 🔴 Open |
| Formal descope: reporting/org-structure change | Product + Engineering | 🟡 Proposed, pending confirmation |
| Competency recalculation on job family/function/grade change | Imelda's squad | 🔴 Open — proposal drafted, see [competency recalculation doc](../decisions/2026-08-18-W34-competency-recalculation-on-profile-change.md) |

---

## Open decisions blocking backlog clarity (not features, but block scoping them)

1. **Closing-date boundary** — does an opportunity survive through 23:59 SGT on its closing date? No "Closing today" badge defined. OTEP-1171, 1172, 1188 (the tickets this blocked) are now Done — worth confirming directly whether the boundary question itself got answered as part of those fixes, or just the individual bugs got patched without settling the underlying rule.
2. **NRIC/FIN privacy/security approval** — single highest-leverage open item across the Ops Portal work. Unresolved since before this week, blocks TC13's fix directly.
3. **Receiving team for POCDEX-routed cases** — not formally named. Blocks the 4th Ops Portal story outright.
4. **Competency recalculation mechanism** — 5 open risks, needs Imelda's squad's input before it's build-ready.
5. **OTEP-130 close-vs-keep call** — likely duplicates already-shipped scope, needs a Jira decision either way.

---

## Summary by status

| Area | Done this week | Still open |
|---|---|---|
| Opportunities — Ringfencing | 3 E2E tests moved to Ready For UAT | Underlying OTEP-408/409/390 still in QA |
| Opportunities — Auth | WOG AD resolved (prod/UAT); 3 UAT auth tickets combined into 1 (OTEP-1174, 4 steps, now Ready For UAT) | Jira status (OTEP-71) still shows In Progress, not yet updated to reflect prod/UAT resolution |
| Opportunities — Apply flows | — | 2 items backlog, 1 needs a scope-duplicate call |
| Opportunities — Bugs | 3 closing-date/badge bugs resolved (OTEP-1171, 1172, 1188) | 2 open (OTEP-667, 971) |
| Ops Portal — Stories | — | All 4 stories not started; 2 of 4 blocked on design or org decisions |
| Ops Portal — Decisions | — | 6 open Decision Tracker rows, NRIC/FIN approval is the top blocker |

---

*Generated: 2026-08-18. Opportunities data pulled live from Jira (OTEP project, PATHFINDER/Ringfencing/batch_2 labels). Ops Portal data pulled live from the [Ops Portal PRD](https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2555380790/PRD+for+CC+Ops+Portal+MVP) Section 8 and Decision Tracker.*
*Supersedes: [2026-07-27-W31-opportunities-feature-backlog.md](../archive/2026-W31-Jul27-Jul31/analyses/2026-07-27-W31-opportunities-feature-backlog.md) for Opportunities scope — that doc is now 3+ weeks stale. This is the first backlog covering Ops Portal.*
*Next: re-pull before any sprint planning or grooming session — this is a point-in-time snapshot, not a live view.*
