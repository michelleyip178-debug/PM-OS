# MCP Setup & Query Routing

MCPs (Model Context Protocol servers) give Claude real-time access to your tools. **They're optional** — every skill falls back to `context-library/` files without them.

## Connected MCPs

| MCP | Purpose | Used in | Key tools |
|-----|---------|---------|-----------|
| Google Calendar | Today's/tomorrow's meetings, attendees, free blocks | daily-plan, weekly-plan, meeting-agenda, meeting-notes | list_events, get_event, create_event, check_availability |

> **Note (OTEP workspace):** The Google Calendar MCP is blocked by enterprise policy. `/daily-plan` uses the direct Google Calendar API instead — credentials at `/Users/michelleyip/g.json` and `/Users/michelleyip/.config/google-calendar-mcp/tokens.json`. Gmail, Jira, and Analytics MCPs are also policy-blocked; use file fallbacks or the direct Jira REST API (see `WORKSPACE-MAP.md` and the `/daily-plan` skill).

## Query routing

Claude routes natural-language questions to the right source:

| Query type | Route to | Fallback |
|---|---|---|
| Calendar / schedule | Google Calendar (MCP or direct API) | Ask user to list meetings |
| Analytics / metrics / funnels / retention | Analytics MCP (Amplitude/Mixpanel/PostHog) | `context-library/metrics/` |
| Feature performance | Analytics MCP → then `context-library/prds/` + `metrics/` | Same files |
| Tasks / tickets / sprint status | Jira/Linear MCP, or the Jira scripts in `PM-skills-ALL-1/03-stories/scripts/` | `context-library/meetings/` action items |
| User research / quotes | Research MCP (Dovetail) | `context-library/research/` |
| Competitor intelligence | `context-library/research/competitive-*.md` → then web search | — |
| Strategy / past decisions | `context-library/decisions/` + `context-library/strategy/` | — |
| Meeting notes / action items | `context-library/meetings/` → then PM MCP for task status | — |

If multiple MCPs of the same category are connected, Claude asks which to use.

## Connecting a new MCP

Run `/connect-mcps connect to [tool name]` (e.g. `amplitude`, `linear`, `notion`, `dovetail`, `slack`). Batch mode: `/connect-mcps batch`.

**What happens:**
1. Claude checks for an official remote MCP server (preferred: `claude mcp add --transport http [tool] [url]`)
2. If none, researches manual setup (OAuth / API token)
3. Guides you through credentials, tests the connection, discovers tools
4. Maps the MCP to relevant skills and logs the setup to `outputs/mcp-integration-logs/`

**Priority:** remote servers > local servers > manual OAuth/tokens.
