---
name: meeting-notes-s5
description: Turns one meeting's raw material (transcript, voice memo, bullet notes, Slack thread, or a spoken recap) into a structured notes file with decisions, owner-assigned action items, insights, open questions, and next steps. Use for a single meeting debrief, sync, 1:1, standup, review, or customer interview. Not for rolling up a whole day of meetings at once (use meeting-cleanup) and not for scoring how well a meeting ran (use meeting-feedback).
disable-model-invocation: false
user-invocable: true
---

# meeting-notes

Turn the raw material from one meeting into a structured notes file saved under `outputs/meeting-notes/`.

## The job

Someone hands you a transcript, a voice memo, rough bullets, a Slack thread, or just talks through what happened. You produce a notes file another person could read cold and act on: what was decided and why, who owns what by when, the insights and subtext worth keeping, what is still open, and what happens next.

## Read first

- [reference/examples.md](reference/examples.md) — three real meeting-notes files: a 1:1 discovery huddle, a team sync, and a senior governance meeting. Match their structure, depth, and voice. They are the target, not the templates below.
- [reference/checks.md](reference/checks.md) — the timeline cross-check procedure, the experiment-design and sensitive-content triggers, and the pre-delivery checklist.

## Before writing

Establish, from the input or by asking:

- Meeting type (1:1, sync, review, governance, customer interview, planning).
- Who was there.
- What the person wants out of it, if anything beyond a record.

If you have little context, check `context-library/stakeholder-profiles.md` for attendee communication styles and `context-library/meetings/` for prior notes on the same topic. Do not stall on this — a good record from the transcript alone beats a delayed one.

## Structure

Default output. All three example files use it.

1. **Title** — `# Meeting Notes: <specific topic>`
2. **Metadata block** — date (with ISO week, e.g. `4 September 2026 (2026-W36)`), attendees with roles, meeting type, and a `**Related:**` line linking connected analyses, decisions, or prior meetings by relative path when any exist.
3. **Summary** — 2–4 narrative sentences. What was discussed, what came out of it, the one thing a reader must know. Prose, not bullets.
4. **Decisions** — numbered. Each: the decision in bold, then **Why**, **Who decided**, **Impact**. A decision without a why is half a decision.
5. **Action Items** — a table: Task | Owner | Due Date | Priority | Status. Every row has an owner and a due date. If the meeting named neither, write the owner you would suggest and `no date set — schedule within 48h`, and say so.
6. **Key Insights** — the analytical residue: patterns, subtext, political dynamics, what was not said. Prose or bullets, whichever the content wants. Verbatim quotes where a quote carries more than a paraphrase.
7. **Open Questions** — unresolved items, each with an owner and a by-when.
8. **Blockers / Risks** — what is stopping progress or threatens it, each with impact and a route to resolution.
9. **Next Steps** — immediate vs short-term, plus any follow-up meeting with date, purpose, attendees. A reader should be able to act from this section without rereading the file.
10. **Context for Future Reference** — optional. Background someone reading this in three months would need.
11. **Raw appendix** — optional, in a collapsed `<details>` block. Include when the raw input was substantial enough to be worth keeping; skip for short notes.

Adjust section emphasis to the meeting: a governance meeting leads with decisions and risks, a customer interview leads with insights and quotes, a planning meeting leads with action items. Do not add or drop whole sections for meeting type — the example files show the same skeleton flexing.

### Escape-hatch formats

- `--minimal` — title, one-sentence outcome, action items, one key quote, next step. For a standup or a quick capture.
- `--slack` — the Slack-friendly shape from `reference/examples.md`, for pasting into a channel.

Standard is the default whenever no flag is given.

## Rules

- Filename: `YYYY-MM-DD-WX-<topic-in-kebab-case>.md`, date is the meeting date, `WX` is its ISO week. Save to `outputs/meeting-notes/`.
- Every action item has an owner and a due date, or an explicit flag that one is missing.
- Every decision states its why.
- Quotes are verbatim. Paraphrase is labelled as paraphrase.
- Run the timeline cross-check on every format. See `reference/checks.md`.
- No em dashes. Use commas, periods, or parentheses.
- Lead with the positive form of an instruction, not the prohibition.

## After delivering

Offer, in one line, the follow-ups that fit: tickets from the action items (`/create-tickets`), a Slack recap (`/slack-message`), a decision-doc entry for a significant decision (`/decision-doc`), or feeding a customer interview into `/user-research-synthesis`.
