# PM OS Learning Log

> This file tracks what Claude has observed about how you work — skill usage patterns, writing style calibrations, stakeholder observations, and process notes. Review monthly. Delete entries that are wrong (that teaches the system too).

---

## Skill Usage Patterns

| Skill | Usage notes |
|-------|-------------|
| `/daily-plan` | Used frequently. User prefers "update" over "replace" for same-day plans. |
| `/meeting-notes` | Sprint ceremonies (retro, squad sync) are primary use case. |

---

## Writing Style Calibrations

- User prefers bullet points and tables over paragraphs.
- No em dashes — use commas or periods instead.
- Contractions are fine. Vary sentence length.
- "We" not "I" in internal docs.
- No corporate buzzwords (leverage, streamline, robust).
- Specific details over generics — use real ticket numbers, real names, real dates.

---

## Stakeholder Observations

*(Fill in as patterns emerge — note when stakeholder behaviour diverges from profiles)*

---

## Process Notes

- Jira access: michelle_yip@psd.gov.sg (not gmail). API token in .mcp.json. Direct REST API works when MCP doesn't load (use Python urllib + dangerouslyDisableSandbox).
- Google Calendar: tokens.json at ~/.config/google-calendar-mcp/tokens.json. Auto-refresh using refresh_token from g.json if access_token expires.
- Sprint 2 actually ends May 31 (Pathfinder) per Jira — local docs originally said May 29.

---

## Calibration Data

*(Track impact estimates vs actuals for future sizing accuracy)*

---

*Created: 2026-05-29 | Review monthly — delete wrong entries, confirm correct ones.*
