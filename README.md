# PM Operating System

Your AI-powered copilot for modern product management. Built for Claude Code and Cursor.

## Philosophy

Most PMs use AI the same way they use Google: one-off questions, zero context. This system works differently.

- **Context over prompting.** AI is only as good as the context you give it. PM OS organizes your company knowledge, writing styles, stakeholder profiles, and past decisions so every output sounds like it came from someone who actually works there.
- **Workflows, not chat.** 46 slash commands cover the full PM loop: strategy, research, PRDs, metrics, meetings, launches, retrospectives, and sprint cadence. Each one builds on the others.
- **Ship the draft, then iterate.** Documents are living artifacts. A 1-page PRD that ships Monday beats a 10-page spec that ships never.

## What You Get

This operating system transforms Claude Code into your personal PM copilot:

- **Pre-built context library** - Templates for company info, writing styles, stakeholder profiles
- **Slash commands** - One-line prompts for common PM tasks (PRDs, meeting notes, Slack messages)
- **Sub-agents** - Specialized reviewers (engineer, designer, exec, legal perspectives), plus the spawnable `sprint-trio` agent that analyzes a live sprint through PM + Tech Lead + Designer lenses
- **Example PRDs** - Real-world templates demonstrating modern best practices
- **Workflows** - End-to-end processes for user research, PRD creation, competitive intel

## Quick Start

### 1. Install Claude Code
```bash
curl -fsSL https://claude.ai/install.sh | bash

# Verify installation
claude --version
```

### 2. Set Up Your Workspace
```bash
# Clone or download this repository
cd pm-operating-system

# Launch Claude Code in this directory
claude
```

### 3. Initialize Your Context
In your first Claude Code session:
```
init
```

Claude will read the `CLAUDE.md` file and understand how to work with you.

### 4. Try Your First Command
```
/daily-plan        # Get a prioritized plan for today
/prd-draft         # Draft a PRD with your company context
/meeting-notes     # Process a meeting transcript into action items
```

Pick whichever fits your day. Claude will ask clarifying questions and pull from your context automatically.

## Directory Structure

```
pm-operating-system/
├── README.md                    # You are here
├── CLAUDE.md                    # Master instructions for Claude
│
├── .claude/                     # Claude Code configuration
│   ├── skills/                  # 46 registered PM skills
│   ├── commands/                # 17 OTEP delivery commands (sprint/ceremony/daily rhythm)
│   └── agents/                  # sprint-trio (spawnable sprint analysis)
│
├── setup/                       # Installation and configuration
├── context-library/             # Your company/product context
│   ├── strategy/                # Strategy docs + frameworks (7 Powers, JTBD, etc.)
│   ├── prds/                    # Your PRDs (reference)
│   ├── research/                # User research, competitive analysis
│   ├── decisions/               # Decision logs
│   ├── launches/                # Launch plans, release notes
│   ├── metrics/                 # Analytics reports, A/B tests
│   ├── meetings/                # Meeting notes
│   └── example-prds/            # Real PRD examples
├── sub-agents/                  # Specialized review agents (7 perspectives)
├── templates/                   # Empty templates (5 templates)
├── advanced/                    # Advanced workflows & automation
└── outputs/                     # Active work (PRDs, notes, updates)
```

## How This System Works

### The Claude Code Advantage

Unlike ChatGPT or regular Claude:
- Claude Code **reads your entire project directory** automatically
- It **references your context files** in every conversation
- You can **run multiple instances** in parallel for different initiatives
- It **executes code** and **creates files** directly in your workspace

### Three Layers of Context

1. **Project Knowledge** (`context-library/`) - Company info, writing styles, stakeholder profiles that apply across all your work
2. **Skills** (`.claude/skills/`) - 46 registered PM skills for recurring tasks
3. **Commands** (`.claude/commands/`) - 17 OTEP delivery commands for the sprint/ceremony/daily rhythm (e.g. `/groom`, `/retro`, `/week`, `/sprint-pulse`). These operate on the linked PM-skills-ALL-1 workspace.
4. **Sub-Agents** (`sub-agents/` + `.claude/agents/`) - Specialized reviewers, plus the spawnable `sprint-trio` agent

When you ask Claude to draft a PRD, it automatically:
- References your company's business info
- Uses your preferred writing style
- Follows your PRD template
- Includes real examples from your library

### 5. Connect Your Tools (MCPs)

Connect Model Context Protocol (MCP) servers for real-time data access from your tools.

> **Connected (live):** Google Calendar and Jira (Atlassian). `/daily-plan` pulls real meetings *and* live sprint state (via the `jira-sprint.sh` / `jira-sync.py` scripts in PM-skills-ALL-1); `/jira-sync` and the sprint workflows refresh the ticket cache. Jira works via the MCP *or* the REST API directly (basic auth) — if the MCP isn't loaded in a session, the live pull still works. Note: the scripts need a valid token in `03-stories/.env` and run with the sandbox disabled.

**Common PM Tools to Connect:**
- **Analytics**: Amplitude, Mixpanel, Posthog, Pendo, Heap
- **Project Management**: Linear, Jira, Asana, ClickUp
- **User Research**: Dovetail, UserTesting, Maze
- **Documentation**: Notion, Confluence, Coda
- **Communication**: Slack, Microsoft Teams

**How to Connect:**
```bash
# In Claude Code, run:
/connect-mcps connect to amplitude
/connect-mcps connect to linear
/connect-mcps connect to figma
```

Claude will automatically:
1. Check for official remote MCP servers (simplest method - e.g., Figma)
2. Guide you to use `claude mcp add --transport http [tool] [url]` if available
3. Or walk you through manual setup (OAuth, API tokens) if needed

**Note:** Tools like Figma have remote servers - no API keys needed, just authenticate!

**Why Connect MCPs?**
- **Ask natural language questions** and get real-time data
  - "Give me metrics on feature X in the last 2 weeks" → Claude queries Amplitude
  - "Show my open tasks" → Claude queries Linear
  - "What did users say about checkout" → Claude queries Dovetail
- **No more context switching** to multiple tools
- **Intelligent routing** - Claude figures out which tool to use based on your question

**After connecting**, just talk naturally:
- "What's the retention rate for users who signed up last month?"
- "Show me the funnel for checkout"
- "Create a ticket for the login bug"
- "Compare conversion rates between mobile and web"

Claude will automatically route your question to the right tool and return results with insights.

---

## Getting Started Checklist

- [ ] Install Claude Code
- [ ] Fill out `context-library/business-info-template.md` with your product details
- [ ] Add your writing styles to `context-library/writing-style-*.md`
- [ ] **Connect your MCPs** with `/connect-mcps connect to [tool]` (Recommended!)
- [ ] Create your first PRD with `/prd-draft`
- [ ] Customize the slash commands for your workflow
- [ ] Add example PRDs from your company to `context-library/example-prds/`

## Available Slash Commands (46 Total)

Type `/` in Claude Code to see autocomplete menu with all commands.

### Core PM Workflows
- `/connect-mcps` - Connect MCPs for real-time tool integration
- `/prd-draft` - Create modern, AI-era PRDs
- `/meeting-notes` - Transform meeting transcripts into action items
- `/user-interview` - Process user interviews systematically
- `/status-update` - Generate stakeholder status updates
- `/decision-doc` - Document important product decisions
- `/slack-message` - Draft team communications
- `/competitor-analysis` - Research competitors systematically

### Strategic Frameworks
- `/strategy-sprint` - Create product strategy (1 day/week/month)
- `/prioritize` - LNO Framework task classification
- `/define-north-star` - Identify North Star Metric
- `/metrics-framework` - Leading vs lagging indicators

### Product Analysis
- `/activation-analysis` - Setup → Aha → Habit framework
- `/retention-analysis` - Cohort analysis and optimization
- `/expansion-strategy` - Revenue expansion tactics
- `/experiment-decision` - When to A/B test vs ship
- `/experiment-metrics` - STEDII framework

### Sprint Cadence
- `/grooming-close` - Run after every grooming session: gates stories to DoR, writes `ready-for-sprint` label to Jira, reports Ready shelf depth vs velocity target
- `/sprint-pulse` - Run daily after standup: filters last 24h of sprint activity into AC-landed / blocked-needs-nudge / noise (replaces manual board scan)
- `/sprint-check` - Run Thursday Week 2: reads Ready shelf depth, flags dependency traps, produces pre-planning brief

### Cache & Tracker Hygiene
- `/jira-sync` - Refresh the local Jira ticket cache + sprint allocations from live Jira (diff-first; default = active sprint, open tickets only)
- `/stale-check` - End-of-day sweep for stale facts across daily/weekly plans and hub trackers (cross-checks live Jira + decisions log)

### Specialized & Advanced
- `/user-research-synthesis` - Research synthesis
- `/competitor-analysis` - Weekly competitor tracking
- `/meeting-cleanup` - Batch process multiple meetings
- `/prototype-feedback` - Build → review → iterate
- `/launch-checklist` - Launch readiness planning
- `/journey-map` - User/customer journey maps
- `/interview-guide` - Create JTBD interview guides
- `/interview-prep` - Pre-interview preparation
- `/interview-feedback` - Post-interview debrief
- `/generate-ai-prototype` - AI prototype prompts
- `/napkin-sketch` - ASCII wireframes
- `/prd-review-panel` - Multi-perspective PRD review
- `/create-tickets` - Create Linear/Jira tickets
- `/feature-results` - Post-launch analysis
- `/code-first-draft` - Initial feature implementation

## Common Workflows

### Draft a PRD
```
/prd-draft
```

### Process meeting notes from a customer interview
```
/meeting-notes
```

### Get multi-perspective feedback on your PRD
```
Please review [prd-file.md] from the perspective of an engineer, designer, and executive.
```

### Prioritize your weekly tasks
```
/prioritize
```

### Keep your trackers honest (end of day / Friday)
```
/jira-sync       # refresh the ticket cache from live Jira (before ceremonies)
/stale-check     # sweep plans + hub trackers for stale facts (EOD habit)
```
Run `/jira-sync` first, then `/stale-check` — the first fixes the source, the second fixes everything that reads it. See `00-hub/sync-workflow.md` for the full daily/weekly rhythm.

### Run the sprint cadence
```
/groom-prep        # before the grooming session
/groom             # grooming brief
/grooming-close    # after the session: gate stories to DoR, write label to Jira, check shelf
/sprint-pulse      # daily after standup: filtered activity pull, replaces board scan
/sprint-check      # Thursday Week 2: shelf depth + dependency traps before planning
/sprint-plan-prep  # Thursday Week 2: sprint goal + candidate stories
```

### Prep for sprint grooming / planning (deep analysis)
```
Use the sprint-trio agent to review the active sprint.
```
Pulls live Jira, analyzes the sprint through PM + Tech Lead + Designer lenses, then synthesizes where the three agree (do without debate), conflict (your calls), and have blind spots — ending with grooming-ready actions (what to assign, decide, defer). Best before grooming, planning, or a mid-sprint review.

## Behind the scenes

- **Markdown formatting backstop.** A `PostToolUse` hook (`.claude/hooks/format-md-check.py`, in both PM-OS and PM-skills-ALL-1) auto-fixes blank-line separators on every `.md` write, so generated docs and trackers stay readable. Silent when files are clean.

## Pro Tips

1. **Use dictation** - Talk to Claude Code like a colleague. Much faster than typing.
2. **Gossip to your copilot** - "You won't believe what just happened in my stakeholder meeting..." Keep it updated.
3. **Plan mode for complex tasks** - Use `Shift+Tab` to review Claude's plan before it executes.
4. **Multiple instances** - Run 2-3 Claude Code sessions in parallel for different initiatives.
5. **Clear context when switching** - Use `clear` to reset the conversation for a new topic.

## What Makes This Different From Regular AI Tools?

| Regular ChatGPT/Claude | Claude Code + This System |
|------------------------|---------------------------|
| Forgets your company context | Always remembers your business, team, stakeholders |
| Generic output | Matches your writing style automatically |
| One-shot responses | Evolves PRDs through 6 stages |
| No file system access | Creates/edits files directly in your project |
| Single perspective | Multi-agent reviews (engineer, designer, exec, legal) |

## Support & Updates

This is a living system. As Claude Code evolves and new PM best practices emerge, we'll update the templates and workflows.

For questions or feature requests, check the documentation in each folder.

---

**Ready to start? Fill out your business context, run `/daily-plan`, and see what an AI copilot that actually knows your company feels like.**
