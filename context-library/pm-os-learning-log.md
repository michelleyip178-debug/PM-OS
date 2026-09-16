# PM OS Learning Log

> This file tracks what Claude has observed about how you work — skill usage patterns, writing style calibrations, stakeholder observations, and process notes. Review monthly. Delete entries that are wrong (that teaches the system too).

---

## Skill Usage Patterns

| Skill | Usage notes |
|---|---|
| `/daily-plan` | Used frequently. User prefers "update" over "replace" for same-day plans. |
| `/meeting-notes` | Sprint ceremonies (retro, squad sync) and discovery jams are primary use cases. |
| `/meeting-cleanup` | End-of-day consolidation to roll up multiple meetings into structured action items. |
| `/weekly-review` | Run Friday afternoon. Always verify Step 5 archive sweep completes into `outputs/archive/`. |
| `/stale-check` | End-of-week sweep across `00-hub/` trackers, reconciled against fresh live Jira data. |

---

## Writing Style Calibrations

- User prefers bullet points and tables over dense paragraphs.
- Zero em dashes: use commas, periods, colons, or parentheses instead.
- Contractions are fine. Vary sentence length.
- "We" not "I" in internal docs.
- No corporate buzzwords (delve, leverage, utilize, unlock, harness, streamline, robust, cutting-edge).
- Avoid negative parallelism: lead with the positive ("Use X", rather than "Don't use Y, use X").
- Anti-AI human PM voice: direct, grounded in real Singapore public sector operations, clear trade-offs.
- Specific details over generics: use real ticket keys, real names, exact dates, and actual metrics.

---

## Stakeholder Observations

- **Adrian Ang (Lead):** Pragmatic on MVP vs R1 trade-offs. Responds best to clear data-backed sizing and explicit operational constraints.
- **Li Ting Kway (Designer/PM alignment):** Focuses closely on edge cases, user journey friction, and FormSG vs native UX boundaries.
- **Workforce Development (WD):** Manages standard FormSG templates for short-term opportunities. Clarifying their operational remit avoids duplicate software features.
- **Christopher Woo:** Business Owner (BO) alongside Xian Zhang Guo (not engineering). Focuses on empirical business assurance, SLA/SLO justification, and governance. Holds engineering accountable for technical remediation and evidence.

---

## Process Notes

- Jira access: michelle_yip@psd.gov.sg (not gmail). API token in .mcp.json. Direct REST API works when MCP doesn't load (use Python urllib + dangerouslyDisableSandbox).
- Live Jira pull: run `python3 03-stories/scripts/jira-sync.py` from `PM-skills-ALL-1` to refresh active sprint cache before `/stale-check`.
- Google Calendar: tokens.json at ~/.config/google-calendar-mcp/tokens.json. Auto-refresh using refresh_token from g.json if access_token expires.
- Policy check before workflow design: verify whether approval steps (such as approving moderator) have any formal policy backing before architecting UI or backend logic. In Gigs and SJRs, approving moderator had zero policy requirement and was cut cleanly.
- FormSG vs Native differential: lightweight STIPs and gigs use existing FormSG templates; substantive career transitions use native Compass applications. Prevents building unneeded custom forms.

---

## Calibration Data

- R1 Opportunities MVP Scope: sized at 5.5 sprints across 8 core features (F-01 to F-08) with zero approving moderator overhead. Baseline established 11 Sep 2026.

---

*Updated: 2026-09-11 (Week 37 close-out) | Review monthly: delete wrong entries, confirm correct ones.*

