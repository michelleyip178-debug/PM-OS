# PM Habits — Strengths vs. Gaps

**Date:** 2026-07-31

**Method:** Scored 21 general PM habits (discovery, decision-making, prioritization, communication, risk, metrics, self-management) against a month of actual workspace evidence — meeting notes, decisions log, weekly reviews, `open-items.md`, `risks.md` from late June through July 2026.

Not a generic checklist. Each verdict below is backed by specific artifacts, not assumed.

---

## Genuine Gaps (worth actively working on)

**1. Talking to users/officers regularly**
Last direct user-interview artifact found was mid-June. Every "testing" activity in the July sample is UAT/VAPT — compliance-gate testing, not discovery. Given how much of July's risk touches actual officer experience (competency logic, data trust), this is a real blind spot, not just a box to check.

**2. Pre-mortems before big commitments**
Only one pre-mortem exists in the workspace (mid-May, for a smaller decision). The much bigger Oct→Nov MVP slip got reactive reconciliation and one-pagers after the fact — never a structured "if this fails in 3 months, why?" exercise before the commitment was made.

**3. Protecting time for thinking/strategy**
Your own weekly reviews explicitly document capacity getting eaten by firefighting and meetings, with no protected block — a recurring pattern you've already named yourself, not something I'm inferring.

**4. "Cost of not doing X" framing in prioritization**
Prioritization language throughout the sample is capacity- and deadline-driven (Ready-shelf counts, sprint velocity), never framed as cost-of-inaction. Even the VCR work, which is close, quantifies value delivered rather than cost of delay.

---

## Already Strong (don't spend energy here)

**1. Decision documentation + running open-items/risks list**
`open-items.md` and `risks.md` are genuinely exceptional — 58+ numbered items, nothing ever deleted, conflicts caught and flagged same-day (e.g. the VAPT 16-Oct-vs-23-Oct date conflict via `/stale-check`).

**2. Weekly reflection with honest self-assessment**
Every week in the sample has a structured planned-vs-actual review with real "what didn't work" sections — no sugarcoating misses.

**3. Tailoring communication by audience**
The VCR one-pager → exec-summary → study-note trio is a clean, repeatable example: same content, three genuinely different framings for three different readers.

**4. Cross-meeting synthesis and early risk-surfacing**
The `cleanup-*.md` batch-meeting habit of spotting "this is the same risk surfacing in five separate meetings" before it compounds — this is diagnose-before-prescribe and early risk-surfacing working together, weekly, not as a one-off.

---

## How This Gets Used

Two workflow changes are already wired in as of 2026-07-31:

- **`/decision-doc`** — new Step 2.5 prompts a quick pre-mortem before locking a recommendation on significant commitments (external-facing dates, hard-to-reverse calls, multi-stakeholder decisions). Skipped automatically for reversible/low-stakes decisions.
- **`/weekly-plan`** — checks whether last week's protected thinking block actually survived the week (not just whether hours were listed), and forces this week's plan to name a specific day/time block rather than a vague capacity number. Escalates language if it's the second week running without one.

Full evidence detail (the scoring table, file-by-file citations) lives in the auto-memory system, referenced automatically in future sessions: `user_pm-habits-strengths-gaps.md`.
