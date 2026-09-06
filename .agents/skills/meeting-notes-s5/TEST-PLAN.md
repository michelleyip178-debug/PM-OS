# A/B test: meeting-notes-s5 vs meeting-notes

Gate two of the Series 5 audit. Run this before retiring the original skill.

## Setup

- Keep both skills installed. `meeting-notes` is the control — do not delete it yet.
- Use your **next 3 real meetings**, not the three from 2026-09-04 (those are baked into `meeting-notes-s5` as examples, so they would pass unfairly).
- Pick meetings you will have opinions about: one light (1:1 / standup), one medium (sync), one heavy (governance / review) if you can.

## Procedure — per meeting

1. Fresh session. Run `/meeting-notes <transcript>`. Save the output.
2. Fresh session (context from this session flatters the new skill). Run `/meeting-notes-s5 <transcript>`. Save the output.
3. Same transcript, same flags for both. If you would use `--minimal` or `--slack`, use it for both.
4. For at least one of the three, do a run where you only *describe* the meeting ("here's what happened in standup...") without typing the command, and note whether `meeting-notes-s5` triggers on its own.

## Score each pair

| Check | Pass = |
|---|---|
| Triggered unprompted | s5 fired when you described a meeting without the slash command |
| Nothing lost | Every action item has owner + due date (or a flag); every decision has a why; timeline cross-check ran or correctly found nothing; sensitive content flagged if present |
| Not generic | s5 output reads like your 3 example files, not a filled-in template |
| Length (Opus 5) | s5 is shorter or right, not bloated |
| Scope (Sonnet 5) | On a `--minimal` / `--slack` run, the timeline cross-check still ran |

## Decide

- **s5 wins all 3** → delete `meeting-notes`, rename `meeting-notes-s5` → `meeting-notes` (folder, frontmatter `name:`, and the `-s5` references in `SKILL.md` / `reference/examples.md`).
- **Split (s5 wins 2)** → look at the losing meeting. What did it need that the rewrite cut? Add that one line back to `SKILL.md` or `reference/checks.md`, re-test that meeting only.
- **s5 loses** → note what broke; the rewrite over-cut. Bring it back here.

## Notes as you go

- Meeting 1 (___________): 
- Meeting 2 (___________): 
- Meeting 3 (___________): 
- Decision: 
