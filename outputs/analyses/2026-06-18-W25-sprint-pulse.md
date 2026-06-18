## Sprint Pulse — 18 Jun 2026 | Last 24h · Sprint 4

### Blocked — needs a nudge (2)

| Story | Blocker | Who to ping | Open since |
|-------|---------|-------------|------------|
| OTEP-324 | Rathika found a token refresh race condition in LOCAL QA — multiple components fire simultaneous refresh requests, causing unexpected logouts well before the 10hr limit. She tagged Thomas to check. No response visible. Story has been sitting in QA for 8 days. | Thomas Huchedé | 2026-06-10 |
| OTEP-405 | Michelle answered Rathika's 3 AC questions yesterday (search title+agency only, submit button not dynamic, "by relevance" TBD). Rathika's comment is cut off — the "by relevance" definition answer appears incomplete. Confirm the full AC is written up in the ticket, not just replied inline. | Self — complete the AC text | 2026-06-17 |

### AC landed — eligible for Ready (0)

_Nothing landed cleanly enough to gate today. OTEP-405 is close but needs the AC written up properly first (see above)._

### Noise — no action needed (4)

OTEP-403 (Léo added a story in Backlog, no PM action), OTEP-127 (metadata touch — likely folder rename), OTEP-427 (metadata touch — likely folder rename), OTEP-445 (To Do, no comments, status unchanged), OTEP-499 (Hao Eng In Progress, no comments, normal flow), OTEP-397 (old Hao Eng comment about Keycloak role field — predates today, no new action)

---
_65 Sprint 4 stories checked · 8 had activity in the last 24h · 2 need your attention_

---

## Sprint 5 — Grooming Readiness (assessed 2026-06-18)

| Story | Title | Ready? | Blocker |
|-------|-------|--------|---------|
| OTEP-408 | [BE] Listing API eligibility filter | ✅ Ready | None — gates documented, team knows them |
| OTEP-409 | [FE] Listing — ringfenced pinned results | ✅ Ready | None — depends on OTEP-408 as expected |
| OTEP-390 | Ringfenced detail page states | ⚠️ Needs work | 3 open questions — Amber indicator spec is the blocker |
| OTEP-304 | Remain authenticated during active session | ⚠️ Needs work | Idle timeout value still TBD — confirm 30 min against IM8 |
| OTEP-281 | Loading state for listing | ❌ Not yet | OTEP-268 must be Done first (currently in QA in S4) |

**Actions before S5 grooming:**

- **OTEP-304** — 10-min fix: confirm 30-min idle timeout against IM8 standard (ask Fabian/Pow Hwee), write it into the AC
- **OTEP-390** — Chase Amber for eligible indicator visual treatment (AC2 is intentionally loose); also decide alternative opportunities selection logic (eligibility-only recommended for MVP)
- **OTEP-281** — Hold until OTEP-268 closes in S4
