---
name: spine-drill
description: Daily PM interview spine drill — 12-week habit to internalize the 7-step structure (Goal → North Star → Segment → Pain → Solution → Metrics → Risks) until it's automatic under pressure
---

**Note:** This is a standing daily habit skill, not tied to a specific upcoming interview. For prep against a real interview on the calendar, use `/interview-prep`. For debriefing a real interview you just had, use `/interview-feedback`. This skill exists to make the underlying structure automatic *before* you need it.

# Spine Drill Skill

Builds fluency in "The PM Interview Spine" — a fixed 7-step mental model — through short, timed daily reps over 12 weeks. The goal isn't learning the framework (that takes an hour). The goal is making it automatic under pressure, so in a real interview your brain is free to do the actual thinking instead of remembering the structure.

## Quick Start

```
/spine-drill

I'll check what day/week you're on and give you today's rep.
Each rep takes 60 seconds to 5 minutes depending on the week.
Say "mock" anytime to jump straight to a live-pressure round regardless of week.
Say "status" to see your streak and progress across the 12 weeks.
```

## The Spine (reference — always available, never re-derive it)

**Layer 1 — The Moves** (know the sequence, one question each):
1. **Goal** — Why are we doing this?
2. **North Star Metric** — How do we know we succeeded?
3. **Target Segment** — Who matters most?
4. **Pain** — What blocks them?
5. **Solution** — What will change behavior?
6. **Metrics** — How will we measure impact?
7. **Risks** — What could invalidate this?

**Layer 2 — The Transitions** (bridge each move to the next, out loud):
- Goal → North Star: "So the goal is X. Which means success looks like..."
- North Star → Segment: "To move that metric, I need to know which users to focus on..."
- Segment → Pain: "Within that segment, I'd hypothesize the top pains are..."
- Pain → Solution: "Given that pain, the solution needs to..."

**Layer 3 — The Recovery Moves** (when challenged or off-track):
- **Reframe:** "Let me reframe — I jumped ahead. Stepping back to the goal..."
- **Revise:** "Good challenge. I'd revise my segment because..."
- **Validate:** "I'd want to validate that assumption before committing. Specifically, I'd check..."

**Full flow with clarify + recommendation bookends:**
Clarify (if needed) → Goal → North Star → Segment → Pain → Hypothesis → Solution → Validation → Metrics → Risks → Recommendation

- Understand the problem: Clarify → Goal → North Star → Segment → Pain
- Design the right solution: Hypothesis → Solution → Validation
- De-risk and decide: Metrics → Risks → Recommendation

**The 3 fluency signals:**
1. **10-second test** — within 10 seconds of hearing a prompt, can you say the goal aloud?
2. **Signpost test** — can you name your structure before diving in, unprompted? ("I'll approach this in four parts...")
3. **Pushback test** — when challenged, do you revise in one sentence, or spiral?

**The 2 traps to avoid:** studying frameworks instead of running reps (reading won't build reflexes); practicing silently in your head (the gap is verbal delivery — out loud, always).

---

## The 12-Week Structure

Three 4-week cycles. Each cycle runs the same 4-stage ramp (framing → full flow → live pressure → polish), but the question focus rotates so the spine gets tested against different terrain each time, not just repeated on the same content.

| Cycle | Weeks | Question focus |
|-------|-------|-----------------|
| Cycle 1 | 1-4 | General product sense & execution — everyday consumer products, broad practice to build the base reflex |
| Cycle 2 | 5-8 | Weighted toward your weakest dimension from feedback (see Adaptive Weighting below) — if no feedback yet, default to execution/metrics-heavy prompts (the spine's Layer 1 steps 2, 6, 7 are usually weakest early on) |
| Cycle 3 | 9-12 | Company/domain-specific if a target company exists by then; otherwise rotate across company archetypes (marketplace, enterprise SaaS, consumer social, fintech, AI/ML) pulled from `/interview-prep`'s company-type playbooks |

### Stage progression within each cycle (mirrors the poster's 4-week ramp)

**Week N, Day 1-2 — Solo, Framing Only**
- 5 prompts, 60 seconds each, out loud
- Only state the structure — say "Goal, then North Star, then Segment..." mapped to the specific prompt. Don't solve.
- Goal: eliminate the freeze at the start. Nothing else.

**Week N, Day 3-4 — Solo, Full Flow**
- 2 prompts, 5 minutes each, out loud
- Full spine end to end, no notes
- Record one per day (voice memo). Listen back specifically for: hedging language, missing signposts, transitions you skipped.

**Week N, Day 5-6 — Live Pressure**
- 1-2 mock rounds with Claude as the assessor (see Mock Mode below), assessor tone, real pushback
- After each: write down the ONE move you skipped or fumbled
- Next rep, consciously nail that one move — don't try to fix everything at once

**Week N, Day 7 — Polish + Rest**
- 1 mock, focus shifts to delivery: pacing, commitment in your voice, closing with impact
- This is also the check-in day — run `/spine-drill status` to see the week's pattern before moving to the next week

**Cadence note:** this is a 6-day-a-week structure (day 7 is light). If you miss a day, don't double up — just pick up on the next day's stage. Consistency beats completeness; a broken streak doesn't reset the cycle.

---

## Workflow

### Step 1: Determine where you are

Check `outputs/spine-drill/log.md` for the most recent entry.

- If no log exists: this is Day 1. Create the log file (see Log Format below) and start Week 1, Day 1.
- If a log exists: read the last entry's week/day/cycle. Today is the next day in sequence — **not** today's calendar date. (Missed days don't create gaps in the sequence; the drill advances one day per session, whenever that session happens.)
- If the user says "status": skip the drill, just render the progress view (see Status View below) and stop.
- If the user says "mock": skip stage detection, go straight to Mock Mode at whatever difficulty fits their current week (early weeks = gentler assessor, later weeks = harder pushback).

### Step 2: Confirm today's stage and deliver the rep

State plainly which cycle/week/day/stage this is and what today's rep involves, e.g.:

> Cycle 1, Week 2, Day 3 — Solo, Full Flow. Two prompts, 5 minutes each, out loud. Let's go.

Then run the stage as specified above:

**Framing-only stage:** Give one prompt. Wait for the user to state ONLY the structure (which steps they'd hit, in order, mapped to the prompt) — not a full answer. If they start solving, stop them: "Structure only — what's the sequence, not the content yet." After they respond, give the next prompt. Repeat for 5 prompts total, drawn from the cycle's question focus (see question bank below).

**Full-flow stage:** Give one prompt. Tell them to speak the full answer out loud using all 7 steps plus transitions, unaided, and that you'll wait silently until they say they're done (mirrors no-notes, no-interruption real practice). After they finish, give brief feedback focused only on: did they hit all 7 steps, did they use transition language between steps (not just list them), and one thing to sharpen. Do NOT score 1-5 here — that's mock mode's job. This stage is about completion, not scoring.

**Live-pressure / Mock stage:** Enter full Mock Mode (below).

**Polish stage:** Same as Mock Mode, but feedback should emphasize delivery (pacing, hedging language, confidence, ending strong) over structure — assume structure is already solid by this point in the cycle.

### Step 3: Log the rep

Append one line to `outputs/spine-drill/log.md` (format below). Keep it to one line per rep — this is a habit tracker, not a transcript archive. If a mock/full-flow rep produced a score, capture it; framing-only reps don't get scored, just marked complete.

### Step 4: Close out

One line acknowledging the rep and, if applicable, a one-sentence nudge tied to the pattern (e.g., "Second day in a row you skipped stating the North Star before jumping to segment — try saying it out loud even when it feels obvious.").

---

## Mock Mode

When entering a live-pressure rep (or the user says "mock" directly):

1. Pick a prompt from the current cycle's question bank (below), or ask "any company/product in mind, or should I pick?"
2. Say: "Your time starts now. Structure it out loud, then walk me through it. I'll push back at least once."
3. Let them get partway into their answer, then interject with ONE realistic pushback — a challenge to an assumption, a "why not X instead," or "what if the data showed the opposite." This tests the Layer 3 recovery moves (Reframe / Revise / Validate). Don't interrupt more than once early in the cycle; increase to two pushbacks by week 3-4 of each cycle.
4. Let them finish.
5. Score using this rubric (adapted from the poster's 3 fluency signals + the spine's own structure):

```
## Rep Feedback — [Cycle X, Week Y, Day Z]

**Prompt:** [prompt used]

| Signal | Pass/Fail | Note |
|--------|-----------|------|
| 10-second test | ✅/❌ | Did they state the goal within ~10 sec of hearing the prompt? |
| Signpost test | ✅/❌ | Did they name their structure before diving in, unprompted? |
| Pushback test | ✅/❌ | Did they revise in one clean sentence (Reframe/Revise/Validate), or spiral? |

**Spine completeness:** [X/7 steps hit, and which was skipped/rushed]
**Transitions used:** [Y/4 — did they bridge steps or just list them?]

**One thing that worked:** [specific]
**One thing to fix next rep:** [specific, single focus — not a laundry list]
```

Keep feedback tight — 3 signals + 1 fix, not a 5-dimension essay. That level of depth belongs to `/interview-feedback` after a real interview; this is a fast rep, not a debrief.

---

## Question Bank

### Cycle 1 (Weeks 1-4): General product sense & execution

Rotate through these — don't repeat a prompt within the same week:

- How would you improve [Spotify / Instagram Stories / Google Maps / Slack / Duolingo]?
- How would you grow [a note-taking app / a food delivery app / a fitness app] from 1M to 10M users?
- A core engagement metric dropped 15% last week for [a photo-sharing app]. Diagnose it.
- Design a product for people who [commute by public transit / cook at home / manage a small team].
- Should [a streaming service] launch a gaming vertical? Walk through it.
- Define north star + supporting metrics for [a habit-tracking app]'s new onboarding flow.

### Cycle 2 (Weeks 5-8): Weighted toward weakest dimension

Before Week 5 starts, check `outputs/spine-drill/log.md` for the most common "thing to fix" across Cycle 1's mock feedback. Bias prompt selection:

- If Metrics/North Star was the recurring gap: lean on execution-style prompts ("define success for X," "a metric moved, diagnose it") — pull directly from `/interview-prep`'s AARM framework prompts.
- If Segment/Pain was the recurring gap: lean on product-sense prompts that force segment tradeoffs ("design for both power users and new users of X").
- If Risks/pushback recovery was the gap: increase mock-mode pushback frequency to every rep, not just later weeks.
- If no log data yet (jumping straight to Cycle 2): default to execution-heavy prompts, since Layer 1 steps 2 (North Star), 6 (Metrics), and 7 (Risks) are the ones people skip most under time pressure.

### Cycle 3 (Weeks 9-12): Company/domain-specific

Ask once at the start of the cycle: "Do you have a target company or role in mind for this cycle, or should I rotate through archetypes?"

- If yes: pull that company's context the way `/interview-prep` would (product usage, business model, recent news) and write prompts specific to it.
- If no: rotate weekly through the five archetypes already defined in `/interview-prep` (AI/ML, Marketplaces, Enterprise SaaS, Consumer Social, Fintech), one archetype per week, using that skill's "unique angles" as prompt seeds.

---

## Status View

When the user says "status" (or at the natural Day 7 check-in), read `outputs/spine-drill/log.md` in full and render:

```
## Spine Drill Progress

**Current position:** Cycle [X] of 3, Week [Y] of 4, Day [Z] of 7
**Total reps logged:** [N]
**Current streak:** [N] sessions (gaps don't break this — it counts sessions, not calendar days)

**Fluency signal trend (mock/pressure reps only):**
| Signal | Last 3 reps |
|--------|-------------|
| 10-second test | ✅ ✅ ❌ |
| Signpost test | ✅ ✅ ✅ |
| Pushback test | ❌ ✅ ✅ |

**Most common "fix next rep" theme:** [pulled from log notes]
**Most consistent strength:** [pulled from log notes]

**Next session:** Cycle [X], Week [Y], Day [Z+1] — [stage name]
```

If fewer than 3 mock reps exist yet, skip the trend table and just say "Not enough mock reps yet for a trend — trends show after 3."

---

## Log Format

File: `outputs/spine-drill/log.md`. One line per session, newest at the bottom (append-only). Create with this header if the file doesn't exist:

```markdown
# Spine Drill Log

Tracks daily reps across the 12-week program. One line per session. See `.claude/skills/spine-drill/SKILL.md` for the full structure.

| Date | Cycle | Week | Day | Stage | Prompt(s) | Result | Note |
|------|-------|------|-----|-------|-----------|--------|------|
```

Each row example:
```
| 2026-08-03 | 1 | 1 | 1 | Framing | Spotify, Maps, Slack, Duolingo, note-app | Complete | Froze for ~5 sec on Duolingo prompt before stating structure |
| 2026-08-04 | 1 | 1 | 3 | Full Flow | Improve Google Maps | Complete | Skipped stating North Star explicitly, went straight to segment |
| 2026-08-05 | 1 | 1 | 5 | Mock | Grow a fitness app 1M→10M | 10s: ✅ Signpost: ✅ Pushback: ❌ | Spiraled when challenged on segment choice — practice one-sentence Revise |
```

`Result` column: "Complete" for framing/full-flow stages (no scoring), or the 3-signal shorthand for mock/pressure/polish stages.

---

## Output Quality Self-Check

Before delivering any session's output, verify:

| Check | Criteria | Pass? |
|-------|----------|-------|
| **Correct stage identified** | Log was checked and today's stage follows the sequence, not just today's calendar date | [ ] |
| **Rep matches stage rules** | Framing = structure only, no solving; Full Flow = no scoring, completion check only; Mock = full rubric | [ ] |
| **At least one pushback in mock/pressure/polish stages** | Layer 3 recovery moves actually get tested | [ ] |
| **Feedback is tight** | 3 signals + 1 fix for mock mode — not a 5-dimension essay (that belongs to `/interview-feedback`) | [ ] |
| **Log updated** | One line appended to `outputs/spine-drill/log.md` | [ ] |
| **Question bank matches cycle** | Prompts pulled from the correct cycle's focus, not repeated within the same week | [ ] |

---

## Integration with Other Skills

- `/interview-prep` — once a real interview is scheduled, switch from generic drill prompts to that skill's company-specific prep. The spine fluency built here is the foundation `/interview-prep`'s frameworks (5-Step, CIRCLES, AARM) sit on top of.
- `/interview-feedback` — after a real interview, if a recurring weakness shows up there that also shows up in the spine-drill log, that's a strong signal — worth an extra week of targeted reps on that specific step before the next cycle.
- Cycle 2's adaptive weighting reads directly from this skill's own log, and Cycle 3 borrows `/interview-prep`'s company-archetype content — no duplicate research needed.

---

Remember: the mechanical part of the spine should get boring. That's the point — once stating "Goal, North Star, Segment, Pain, Solution, Metrics, Risks" out loud is as automatic as reciting your own phone number, your actual thinking capacity in a real interview goes entirely toward judgment and trade-offs, not toward remembering what to say next.
