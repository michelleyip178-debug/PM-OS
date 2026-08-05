---
date: 2026-08-05
week: 2026-W32
source: Live Jira — OTEP-Pathfinder Sprint 7 (board 12541, sprint 34621), pulled via jira-sprint.sh + jira-sync.py
status: working draft — confirm owners/dates with Léo, Thomas, and Hao Eng before treating as final
---

# RAID Log — OTEP-Pathfinder Sprint 7 — 2026-08-05

**Sprint window:** 2026-07-28 → 2026-08-09 (4 working days left)

**Sprint goal:** Ship ringfenced opportunity listing/detail views; close out login/auth replacement (Keycloak → real WOG AD flow); CFT file-upload integration.

Legend: 🔴 Critical/High · 🟡 Medium · 🟢 Low/Managed

---

## Risks

| ID | Risk | Impact if realised | Likelihood | Owner | Status | Raised |
|---|---|---|---|---|---|---|
| R1 | WOG AD login (OTEP-71) still In Progress with 4 days left in sprint, and depends on Azure/Entra AD mock solution (OTEP-444, also In Progress) which itself depends on GovTech egress setup (Boon Siang) that was last confirmed "in progress" back in Sprint 4 | Sprint goal's core deliverable (real WOG AD login replacing Keycloak) misses sprint close | 🔴 High | Léo Milbor | Open | 2026-08-05 (sprint pull) |
| R2 | High-severity search bug (OTEP-668, Defect 5 — agency+title combined search returns incorrect/empty results) still in To Do, untouched, no assignee action yet | Search feature ships with a known high-severity defect if not picked up before sprint close | 🔴 High | Thomas Huchedé | Open — not started | 2026-08-05 (sprint pull) |
| R3 | OTEP-390/408/409/131 (ringfencing detail + listing + FormSG fallback) all sit in QA simultaneously — a shared review bottleneck on one QA pass could hold up 4 stories at once right before sprint close | Sprint goal's ringfencing deliverable slips if QA can't clear all four before 2026-08-09 | 🟡 Medium | Thomas Huchedé (dev) / QA owner unclear | Open | 2026-08-05 (sprint pull) |
| R4 | OTEP-810 (competency matching) changed its data contract mid-sprint — OTG will now supply Competency ID instead of competency names, with Compass's competency bank as source of truth | Downstream mapping logic and any work already built against name-matching may need rework; operational question raised (does existing OTG data need manual backfill of competency IDs?) is still open | 🟡 Medium | Michelle Yip / Hao Eng | Open — operational question unanswered (Rathika, 2026-08-04) | 2026-08-04, restated 2026-08-05 |
| R5 | OTEP-1120 (E2E tripwire suite) infrastructure is being hand-built in AWS console (ECR, ECS task def, IAM roles) with terraform conversion still pending | Manual AWS resources risk drifting from IaC, or blocking the pipeline integration if not converted before other squads' deploys start relying on the tripwire | 🟢 Low-Medium | Hao Eng | Open — next step acknowledged, not done | 2026-08-05 |

---

## Assumptions

| ID | Assumption | Basis | Validation needed by | Owner | Raised |
|---|---|---|---|---|---|
| A1 | Fallback to Keycloak realm (mock Entra AD) is acceptable if the real Azure/Entra AD test environment isn't ready in time | Pow Hwee's comment (originally Sprint 4/5 context) that this is the fallback path | Before sprint close, if OTEP-444/OTEP-71 aren't done | Léo Milbor | 2026-06-24, still relevant 2026-08-05 |
| A2 | POCDEX-unavailable fallback (silent unfiltered listing) is an acceptable degrade path for ringfencing, not just a temporary MVP shortcut | Written into both OTEP-408 and OTEP-390 ACs as the designed behavior | Confirm this is intentional long-term behavior, not a gap to close post-MVP | Thomas Huchedé / Michelle Yip | 2026-08-05 (sprint pull) |
| A3 | Whitelisting the GitLab runner IP (or the ECS-task alternative Fanxu proposed) will be resolved without needing a formal security review | Raised informally between Fanxu and Hao Eng on the E2E suite ticket | Before E2E suite goes live against dev | Hao Eng | 2026-08-04 |

---

## Issues

*(Already happened / actively blocking, not just a future risk)*

| ID | Issue | Impact | Owner | Status | Raised |
|---|---|---|---|---|---|
| I1 | OTEP-283 (Ministry icons on detail page) moved backward — In Progress → To Do | Work already started has stalled or been reprioritized with 4 days left in sprint | Michelle Yip | Open | 2026-08-05 (status change detected) |
| I2 | FormSG application link data (POC field) missing from source Excel for OTEP-131 — implementation blocked by data, not code, since 2026-06-25 | Officer-facing "unavailable" messaging ships as a placeholder rather than the real behavior until the source data question resolves | Unassigned (data/content owner) | Open, long-standing | 2026-06-25, still open 2026-08-05 |
| I3 | OTEP-810 operational question (do existing OTG imports need competency IDs manually backfilled) asked by Rathika 2026-08-04, not yet answered as of 2026-08-05 | Ticket sits in QA but the underlying data-migration question is unresolved — risk of it surfacing as a defect after "done" | Michelle Yip / Hao Eng | Open, unanswered 1+ day | 2026-08-04 |

---

## Dependencies

| ID | Dependency | Depends on | Blocks | Target date | Status | Raised |
|---|---|---|---|---|---|---|
| D1 | OTEP-71 (WOG AD login, real flow) | OTEP-444 (Entra AD mock/test env) | Sprint goal — auth replacement | Sprint close 2026-08-09 | Both In Progress, neither closed | 2026-08-05 |
| D2 | OTEP-444 (Entra AD mock) | GovTech egress setup for backend-to-Azure-AD token validation (Boon Siang) | OTEP-71 | No confirmed date — last touchpoint was Sprint 4/5 | Unclear if resolved; needs a status check with Boon Siang | 2026-06-24, unconfirmed since |
| D3 | OTEP-1120 E2E suite going live on schedule | Two Keycloak test accounts + CI masked variables + upload fixture file (all listed as unchecked prerequisites) | Suite's Definition of Done (3 consecutive green P0 runs) | Not yet set | Prerequisites not yet confirmed complete | 2026-08-05 |
| D4 | Ringfencing sprint-goal completion (OTEP-408/390/409) | Single QA pass covering all three simultaneously | Sprint goal close-out | 2026-08-09 | In progress, no confirmed QA completion date | 2026-08-05 |
| D5 | OTEP-131 real (non-placeholder) FormSG-unavailable behavior | Source Excel data including POC/contact field (I2) | Full non-placeholder officer experience | No date | Blocked on data, ticket itself in QA with placeholder | 2026-06-25 |

---

## Notes

- With 4 working days left in the sprint (close 2026-08-09), the two goal-critical risks are R1 (WOG AD auth still In Progress, chained through two more dependencies) and R3 (four ringfencing/listing tickets all landing in QA at once). Worth a direct check-in with Léo on OTEP-71/444 status and a QA capacity check before Thursday.
- R2 (the High-severity combined-search bug, OTEP-668 Defect 5) is untouched in To Do — worth confirming explicitly whether it's in scope for this sprint close or being deliberately deferred, rather than letting it silently slip.
- I1 (OTEP-283 regressing to To Do) is worth a quick "what happened" check — could be a deliberate reprioritization or something that fell through the cracks.
- This log is scoped to OTEP-Pathfinder Sprint 7 only, pulled directly from live Jira on 2026-08-05. It does not cover CSC/DLE integration (see `2026-08-05-W32-timeline-raid-log.md`) or POCDEX data-sharing (see `2026-08-05-W32-pocdex-data-raid-log.md`) — those are separate workstreams with their own RAID logs.

*Generated 2026-08-05 from live Jira (OTEP-Pathfinder board 12541, Sprint 7). Not yet confirmed with the squad — treat owners and dates as a starting draft.*
