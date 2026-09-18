# R1 Opportunities: Planning Session Brief

**Date:** 2026-09-16 (for planning session 2026-09-17)

**Owner:** Michelle Yip

**Purpose:** Walk into tomorrow's R1-onwards planning with the current sprint plan, revised timeline, and open items that need decisions in the room.

---

## 1. Revised Kickoff Date — Flag This First

**Previous target:** Sprint 1 kickoff "mid-November 2026."

**Corrected target:** **~1 December 2026.**

Why: the same 3 engineers on the build team are needed for MVP hardening and launch support through the MVP launch date of **24-25 Nov 2026**. A mid-November R1 start was never realistic against that constraint — it assumed engineering capacity that doesn't actually free up until after MVP ships.

**Consequence:** this compounds an existing tracked risk (R-01) that external stakeholders already expect a January 2027 R1 launch, which was already flagged unachievable. Losing ~2 more weeks off the front end makes that gap worse. **This needs an explicit decision in tomorrow's session: does the room accept ~1 Dec as the real kickoff, and does that change what gets communicated externally about R1 timing?**

---

## 2. Sprint-by-Sprint Plan (Unchanged in Content, Shifted in Date)

Assuming ~1 Dec kickoff, 5.5 sprints (2 weeks each unless otherwise confirmed):

### Sprint 1 — ~1-12 Dec — Catalog & Traffic Foundation
- F-23 Jobs Feed (0.2sp)
- F-29 Public View & Auth Callback (0.5sp)
- F-17 Browsing Tabs (0.5sp)
- F-26 Ingestion Dedup (0.5sp)

### Sprint 2 — ~15-26 Dec — Data Governance
- F-27 Role-Based Access Control (1.0sp)
- Must complete before any resume upload work begins

### Sprint 3 — ~29 Dec-9 Jan — Rotations Application Core
- F-05 Direct Resume Upload (1.0sp)
- F-09 Seniority Fit Guidance (0.5sp)

### Sprint 4 — ~12-23 Jan — Supply & Mobility Activated
- F-28 SJR Scope Toggle (0.5sp)
- F-01 Quick Gig Posting (0.5sp)

### Sprint 5 — ~26 Jan-6 Feb — Selection Handoff
- F-11 Candidate Pack Export (0.5sp)
- F-30 Agency Dossier Push (0.3sp)

### Sprint 5.5 — ~9-13 Feb — Go-Live Readiness
- End-to-end testing
- Keycloak stress test
- Hardening buffer

**Total: 4.8sp committed build + 0.7sp hardening = 5.5 sprints. Estimated completion: ~13 Feb 2027** (holiday weeks not adjusted for — flag if Dec/Jan public holidays need to shift this).

**Flag for the room:** this pushes real R1 delivery to mid-February 2027, well past the January 2027 date stakeholders currently expect (R-01). Worth deciding tomorrow whether to re-baseline that expectation now, rather than let it surface later as a surprise.

---

## 3. What Must Be True Before Sprint 1 Can Actually Start

Not yet confirmed. If these aren't resolved before ~24 Nov, Sprint 1 risks starting on an unconfirmed foundation — the same pattern that caused WOG AD/auth tickets to slip 3+ weeks past Sprint 8's close.

### 5 Things That Must Be Ready Before Sprint 1 Can Start

None of these exist yet. Engineers cannot start building Sprint 1 until they do.

| # | What's needed | In plain terms | Owner | Must Be Done By |
|---|---|---|---|---|
| 1 | Screen designs | The design team needs to finish the actual visual designs — what the tabs, cards, and badges look like. Engineers can't build a screen that hasn't been designed. | Designers | **30 Oct 2026** |
| 2 | Agreed data fields | The team needs to agree exactly what information shows on each screen (e.g., what's on a job card, what's on the application form). Without this, engineers don't know what to build. | Engineering | **30 Oct 2026** |
| 3 | Officer's grade shows automatically at login | When an officer logs in, does their job grade already show up, or does someone need to type it in? This is a technical setup question for the login system. | Central Login Ops | **13 Nov 2026** |
| 4 | Safe place to store resumes | Before anyone can upload a PDF resume, there needs to be a secure storage system with virus scanning already set up. | Public Sector Cloud Security | **13 Nov 2026** |
| 5 | 6 agencies agree to actually post jobs on day one | The 6 pilot agencies need to promise they'll have real job listings ready when this launches, so the app isn't empty on day one. | Product & BOs | **20 Nov 2026** |

**Why the dates are staggered, not all the same:**
- **Items 1 and 2 come first (30 Oct)** because engineers literally cannot write their work tickets without them. Everything else depends on these two being done.
- **Items 3 and 4 (13 Nov)** are technical/infrastructure setup that can follow a bit later, once the designs and fields are locked.
- **Item 5 (20 Nov)** is a business commitment, not something engineers build — it can be confirmed last, just before launch.

### 2 Critical Blockers

| # | Blocker | Owner | Drop-Dead Date | Status |
|---|---|---|---|---|
| 1 | CV data retention & purge policy | Legal, Engineering | **16 Oct 2026** | 🔴 Open — no date attached |
| 2 | Async batch ZIP worker (sync version fails past 80 CVs) | Engineering | **13 Nov 2026** | 🔴 Open — architecture not redesigned |

Both dates match existing gates already in the risk register (Gate 2: 16 Oct for the CV purge policy sign-off; Gate 4: 13 Nov for security/export handoff) — these aren't new deadlines, they're deadlines that already exist elsewhere and need to be treated as hard, not aspirational.

**Ask for tomorrow:** get each owner to explicitly commit to their drop-dead date in the room. Any gate that can't hold its date needs to be escalated now, not discovered on 24 Nov.

---

## 4. Headcount — The Open Resourcing Question

Current plan assumes 3 dedicated engineers on the build team. This doesn't account for:
- **CAM integration** — confirmed for R1, but effort is unestimated (a Keycloak SCIM shortcut is under discussion with the CAM team, response pending — could shrink scope significantly, but not yet confirmed)
- **OTG ingestion enhancement** (OTEP-578) — unsized spike, currently unassigned
- **RBAC depth** — booked at 1.0 sprint but gates all downstream candidate-data features; historically this class of work (WOG AD/auth) has slipped

This team's own sprint throughput has never hit 100% Done (range: 40-71% across the last 4 closed sprints). Full case is in the [engineer headcount justification](2026-09-16-W38-r1-engineer-headcount-justification.md).

**Ask for tomorrow:** decide whether a 4th engineer is approved, or explicitly name what gets cut/deferred if not — before the sequence above gets treated as committed.

---

## 5. What's Being Deferred to R2 (For Reference, Not a Decision Point)

Real-time seat counter (F-18), host attendance roster (F-22), supervisor courtesy CC (F-03), full ATS-style status tracker (F-07 — replaced by lean 3-stage status), needs-talent spotlight (F-19), cycle rollover notice (F-20), full Secondments suite (F-13/F-15/F-21). Full list and rationale in the [master PRD](../prds/2026-09-14-W38-r1-opportunities-marketplace-planning-review.md).

---

## 6. Summary — 3 Decisions Needed From Tomorrow's Session

1. **Accept ~1 Dec (not mid-Nov) as the real Sprint 1 kickoff date**, and decide whether/how to reset the January 2027 external expectation now.
2. **Commit dates from each of the 5 readiness-gate owners and both blocker owners**, targeting resolution before 24 Nov.
3. **Resolve the 4th-engineer headcount ask** — approve, or name the explicit cut.

Everything else in the sprint plan (features, sequence, RICE rationale) is already locked and doesn't need re-litigating tomorrow — the open questions are timing and readiness, not scope.
