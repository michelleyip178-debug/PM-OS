| | |
|---|---|
| Doc Created | 20 Aug 2026 |
| PM | Michelle |
| Tech | — |
| Designer | — |
| Business Owner | — |
| Infra Eng | — |
| Target launch | Release 1 |
| Epic Link | TBC, not yet in Jira |
| Figma Link | — |

## 1. Background & Context

Career Compass detects officer record changes via a daily POCDEX pull-and-diff, so a departed or transferred officer can keep stale access until the next sync. CAM (Centralised Account Management) closes this gap: it detects HR movement events at the source (HRPS, Cumulus, ACE) and pushes them to CC via webhook in near-real-time, so CC can act immediately instead of waiting a day.

**Confirmed 20 Aug: CAM integration ships in Release 1.** Split out as its own epic, separate from the [Ops Portal epic](2026-08-17-W34-ops-portal-epic-one-pager.md) — CAM is a system integration (event-driven access/lifecycle), not a portal feature.

---

## 2. Problem Statement

> Career Compass only learns about an officer's HR movement (exit, transfer, department change, long leave, inactivity) on the next daily sync. Until then, a departed or transferred officer can retain access, and their profile/recommendations stay stale — a security risk on exit and a data-accuracy risk everywhere else.

---

## 3. Hypothesis (Value Proposition)

> If Career Compass consumes CAM's real-time HR movement events instead of relying on the daily POCDEX diff, then access and profile data stay accurate within minutes of an officer's actual status change, because CC no longer has a sync-window where stale access or stale data can persist.

---

## 4. What CAM Provides

CAM watches upstream HR systems (HRPS, Cumulus, ACE) and pushes 7 event types to CC via HTTPS webhook (JSON, near-real-time, optional ack): **Staff Exit, Transfer to Another Agency, Department Change, Position/Job Change, Long Leave (>90d), Inactivity (>90d), Periodic Access Review.**

CC reads via 7 read-only APIs (Officers, Employments, Positions, Jobs, Competencies, Lifecycle Events, Inactive Officers), secured via WOG AD / OAuth2 API Gateway.

---

## 5. CC-Side Action Per Event

Not a uniform inactivate/remove — each event type has its own action:

| CAM Event | CC Action |
|---|---|
| **Staff Exit** | Revoke login, remove access, deactivate account, clean up personal data |
| **Transfer to Another Agency** | Revoke old-agency access, activate new-agency access, refresh opportunities — not a deactivation |
| **Department / Position Change** | Update mapping, recalculate recommendations/access — no access removal |
| **Long Leave (>90d)** | Deactivate, revoke access, **reactivate on return** |
| **Inactivity (>90d)** | Deactivate, revoke access, but **notify before deactivating** — a grace period, not instant |
| **Periodic Access Review** | Review/recertify access, update audit logs — not a lifecycle action |

Business rules applied regardless of source: active-officers-only, `is_primary` employment, `is_main_position` + staffing % for double-hatting, seconded officers use current-agency position only.

---

## 6. Target User

| # | User | Primary need |
|---|---|---|
| **1 — Primary** | Affected officer (exited, transferred, on leave) | Access and profile reflect real status immediately, not after a daily lag |
| **2 — Secondary** | Security/compliance stakeholders | Access revoked immediately on exit, no sync-window exposure |
| **3 — Tertiary** | CAM team | A stable event contract and API surface that CC consumes correctly |

---

## 7. Success Metrics

No baseline or target has been measured yet — these are the metrics that matter once instrumented, not confirmed numbers:

| Metric | Why it matters |
|---|---|
| Time from CAM event received → access revoked/updated in CC | Directly measures whether the sync-window security gap is actually closed |
| % of CAM events processed without manual intervention | Confirms the 7 event-action mappings hold up against real event volume |
| Staff Exit → personal-data-cleanup completion rate | PDPA-relevant; currently no owner or process to measure against (see Section 9) |
| Case-linkage coverage (if resolved) | % of CAM-triggered actions that also produce a visible Ops Portal case, if that gap is closed |

---

## 8. Scope

**In scope for Release 1:**
- Consuming all 7 CAM event types via webhook
- CC-side action per event, per the table in Section 5
- The 7 read-only POCDEX/CAM APIs listed in Section 4

**Out of scope / explicitly deferred:**
- Write-back to POCDEX or CAM (CC only consumes, never writes)
- Any Ops Portal case-linkage, until Section 9's open decision resolves
- Non-POCDEX-sourced officer identity events (SingPass-based auth is a separate, later track)

**Not yet scoped (blocks a real Release 1 commitment — see Section 9):** which of the 7 event types are must-have vs. deferrable for R1, and the effort estimate.

---

## 9. Risks & Decision Tracker

| # | Risk / Open Decision | Why it matters | Mitigation / Status |
|---|---|---|---|
| 1 | **Case-linkage undecided** — does a CAM-triggered action generate an Ops Portal case for BO visibility, or bypass the portal? | The Ops Portal's core premise is catching and routing drift; a CAM event silently updating CC with no record undermines that. | Open. Needs a decision before build — not addressed in any CAM design source. |
| 2 | **"Clean up personal data" on Staff Exit has no owner** | Implies a data-retention/deletion action with likely PDPA implications. | Open. No compliance review has covered this in any PRD or CAM source yet. |
| 3 | **Effort not estimated** | R1 commitment isn't credible without a sizing pass. | Open. |
| 4 | **CAM team counterpart/onboarding undefined** | Compass's onboarding action item (20 Aug meeting) has no clear owner or process on the CAM side. | Open — tracked as an action item in the 20 Aug Post-MVP Prioritisation Planning meeting. |
| 5 | **R1 minimum-viable scope undefined** | Without this, "ships in R1" isn't a buildable commitment yet — just a target. | Open. Needs to be resolved before sprint planning can size this epic. |

---

## 10. Source

Career Compass–POCDEX–CAM architecture diagrams reviewed 20 Aug (system data flow, POCDEX data requirements, CAM event/API spec). Cross-reference: [2026-08-20-W34-post-mvp-prioritisation-planning.md](../meeting-notes/2026-08-20-W34-post-mvp-prioritisation-planning.md) for CAM onboarding and ownership open questions.

---

*Generated: 2026-08-20. First draft, split out from Ops Portal PRD Section 7.4.*
