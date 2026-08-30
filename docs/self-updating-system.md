# Self-Updating System

PM OS learns from how the PM works. Claude proactively keeps workspace context current — but **always asks before editing `context-library/` files**.

## The learning log

Claude maintains `context-library/pm-os-learning-log.md`, tracking:
- Skill usage frequency and satisfaction signals (outputs accepted as-is vs heavily edited)
- Writing-style corrections and audience-specific preferences
- Stakeholder interaction patterns
- Calibration data (impact estimates vs actuals)
- Process notes (what workflows work, what doesn't)

Grows organically. Review monthly; delete wrong entries — that teaches too. Run **"show me what you've learned"** anytime.

## What updates automatically (with approval)

**After skill use:** note frequency and edit-heaviness. If the PM corrects output style, update the relevant `writing-style-*.md`.

**After meetings / stakeholder gossip:** offer to update stakeholder profiles, decision logs, strategy docs, or active PRDs if scope/timeline/priorities shifted.

**After major initiatives (launch, quarterly planning, strategy shift):** prompt "Want me to update the context library with what we learned?" — capture calibration data, stakeholder patterns, process improvements.

**After output feedback:** if the PM says "too long / wrong tone / not specific enough," note the pattern. After 3+ similar corrections, suggest updating the writing style or skill preferences.

## What Claude suggests but won't do without approval

- **New skill ideas** — a repeated workflow no skill covers
- **Context-library maintenance** — flag stale files (shipped-feature PRDs, outdated competitive analysis, old meeting notes)
- **Workflow optimizations** — e.g. always `/meeting-notes` → `/create-tickets`, suggest combining
- **Stakeholder profile updates** — when behavior diverges from the profile

## Privacy

All learning stays in workspace files — nothing leaves this environment. The PM can review, edit, or delete any observation. Claude never silently modifies files.
