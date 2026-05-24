---
date: 2026-05-24
tool: Google Calendar
method: nspady/google-calendar-mcp (local, via npx @cocal/google-calendar-mcp)
status: connected
---

# Google Calendar MCP Integration Log

**Connected:** 2026-05-24
**Method:** Local MCP server, registered via Claude Code

## Capabilities

- `list_events` - Fetch events for a date range
- `get_event` - Get details for a specific event (attendees, description, location)
- `create_event` - Create calendar events
- `check_availability` - Find free/busy time blocks

## Skills Updated

- `daily-plan` - Auto-fetches today's meetings, attendees, free blocks
- `weekly-plan` - Pulls next week's calendar for meeting load calculation
- `meeting-agenda` - References upcoming meeting context
- `meeting-notes` - Can pre-populate attendee list from calendar

## How to Use

Natural language queries are routed automatically:
- "What meetings do I have today?" → Calendar MCP
- "What's my schedule tomorrow?" → Calendar MCP
- "Find a free hour this week" → Calendar MCP

## Notes

- OAuth credentials configured in Claude Code
- Tokens expire every 7 days (test mode) — re-authenticate if calendar stops responding
- To re-authenticate: ask Claude to "authenticate with Google Calendar MCP"
