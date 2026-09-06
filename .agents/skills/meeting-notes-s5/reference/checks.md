# Checks and triggers

Procedures that run against the notes before delivery.

## Contents

- Timeline cross-check — runs on every format
- Experiment-design prompt — fires only on A/B-test language
- Sensitive-content flag
- Pre-delivery checklist

---

## Timeline cross-check

Runs on every format, including `--minimal` and `--slack`.

Take every date, deadline, and duration estimate mentioned in the meeting. Compare against known dates in:

- `context-library/prds/*.md` and `outputs/prds/*.md` — launch and milestone dates
- `outputs/roadmaps/*.md` — the confirmed timeline and critical path
- `context-library/meetings/*.md` and `outputs/meeting-notes/*.md` — prior commitments
- `context-library/strategy/*.md` — quarter ends, OKR deadlines

Where a meeting date contradicts a known date, add a `## Timeline Risks` section. One bullet per conflict, each naming both dates and their sources and saying what to confirm. Example from a real file:

> **TIMELINE RISK — soft-launch dates cited in this meeting differ from the confirmed MVP roadmap.** The meeting stated soft launch 12–17 Nov and public MVP launch 24 Nov. The confirmed roadmap (2026-09-01-W36-mvp-timeline-wbs-gantt.md) shows MVP launch 24–25 Nov with overall VAPT sign-off ~7 Nov. A soft launch starting 12 Nov leaves only ~5 working days after sign-off. Confirm the window against the VAPT gate before committing.

If nothing conflicts, add no section.

---

## Experiment-design prompt

Fires only when a decision in the notes contains "A/B test", "test both", "run an experiment", or equivalent, AND the meeting did not already settle the metric, sample size, and threshold.

Add after that decision:

> **Experiment design needed.** The decision to test <A vs B> did not define: the comparison metric, the sample size for significance, the success threshold, or the duration. Settle these before the test starts. `/experiment-metrics` for the STEDII framework, `/experiment-decision` for whether an A/B test is the right call.

If the team already defined those, add nothing.

---

## Sensitive-content flag

If the meeting covered unannounced plans, personal performance feedback, confidential strategy, or competitive intelligence, add a line near the top:

> **Handling:** contains <what>. Keep internal.

---

## Pre-delivery checklist

- Every action item has an owner and a due date, or an explicit "missing" flag.
- Every decision states its why.
- Timeline cross-check ran.
- Experiment-design prompt added if and only if triggered.
- Quotes are verbatim; paraphrase is labelled.
- Filename is `YYYY-MM-DD-WX-<topic-kebab-case>.md`, meeting date, correct ISO week, saved to `outputs/meeting-notes/`.
- No em dashes.
- Next Steps stands alone — a reader can act from it without rereading the file.
- `**Related:**` line present when connected analyses, decisions, or prior meetings exist.
