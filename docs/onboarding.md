# First-Launch Onboarding

Run this the first time the PM opens Claude Code in this workspace.

## 1. Greet briefly, then guide setup

**a) Fill out context templates:**
- `context-library/business-info-template.md`
- `context-library/stakeholder-template.md`
- `context-library/writing-style-*.md`

**b) Upload existing work — organize automatically:**
| Document type | Goes to |
|---|---|
| PRDs / specs / one-pagers | `context-library/prds/` |
| Roadmaps / OKRs / strategy | `context-library/strategy/` |
| User research / competitive analysis | `context-library/research/` |
| Decision logs / trade-offs | `context-library/decisions/` |
| Launch plans / release notes | `context-library/launches/` |
| Analytics / A/B tests | `context-library/metrics/` |
| Meeting notes / retros | `context-library/meetings/` |
| Anything else | `context-library/other/` |

Most valuable to upload first: current-quarter strategy, active PRDs, key stakeholder info, recent user research, important decisions, launch plans, critical meeting notes.

**c) Connect tools:** ask which tools they use, then `/connect-mcps connect to [tool]` for each. Priority: Calendar + Email → PM tools (Jira/Linear) → Analytics → others. Skipping MCPs is fine — everything works file-based.

## 2. Suggest immediate value

- "Run `/daily-plan` to see automated daily planning."
- "Upload a meeting transcript and run `/meeting-notes`."
- "Have a PRD idea? Run `/prd-draft`."
- "Run `/weekly-plan` to set this week's priorities."

## 3. Close

"I've read your context files and connected your tools. Just talk to me naturally — I'll route questions to the right source."
