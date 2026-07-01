# Interview Guide: R1 Seamless Application (CareerCompass)

**Research Goal:** De-risk the officer-facing leap-of-faith assumptions behind R1 (channel choice, pre-fill, abandonment) and validate the Posting Manager's job before R1 design locks.

**Target Participants:** Two tracks — (A) Officers who apply to development opportunities; (B) Posting Managers (HR execs who administer postings).

**Duration:** 45–60 minutes

**Sources grounded in:** `2026-05-20-r1-assumption-priority-matrix.md`, `r1-discovery/user-personas.md`

---

> **Research foundation (read before running):**
> Prior discovery already established two things — don't waste time re-validating them:
> 1. Both officer personas have **already decided to apply** before they open CareerCompass. The apply flow is where you win or lose them, not discovery. So go light on "how do you find opportunities" and heavy on the apply experience.
> 2. The Posting Manager's bottleneck is **applicant quality, not volume**. Don't probe "do you get too many applicants" — probe how they assess fit.
>
> This guide targets the **unvalidated, user-testable** assumptions: A1 (channel choice), A2/A3/A7 (pre-fill accuracy, time, trust), A5 (abandonment + why), B2 (confirmation card), and Persona 3's record-ownership job. It deliberately skips assumptions that aren't interviewable (vendor API access, security classification, schema audits, FE capacity) — those are spikes and escalations, not interviews.
>
> **Recruiting note:** R1 design locks Aug–Sep '26, so these run with **proxy participants** (internal PSD officers, BO-network officers via Jacky/Xian Zhang) before the formal UAT cohort. Frame as "research sessions," not UAT.

---

# TRACK A — Officer Interview Guide

**Who:** An officer who has applied (or recently considered applying) to an OTG/Careers@Gov development opportunity — STIP, GIG, SJR. Mix of Persona 1 (Intentional Mover) and Persona 2 (Passive Watcher) if possible.

## Part 1: Opening (5 min)

"Thanks for making time. I'm Michelle, a PM on the CareerCompass team. We're trying to understand how officers actually apply to development opportunities so we can make that experience better. There are no right or wrong answers — I'm here to learn from how you actually do it, not to test you."

**Logistics:**
- "Okay if I record, just for my notes? It stays internal and confidential."
- "Skip anything you'd rather not answer."

## Part 2: Background (8 min)

1. "Tell me about your role and where you are in your career right now."

2. "When you think about development opportunities — STIPs, gigs, secondments — how do those usually come onto your radar?"
   - *Follow-up:* "Can you remember the last specific one? How did you first hear about it?"
   *(Validates the 'already decided before they arrive' insight — confirm, don't belabor.)*

## Part 3: Core JTBD — The Apply Experience (28 min)

### Channel choice — A1 (the existential one)

3. "Think about the last time you applied to an OTG opportunity. Walk me through it from the moment you decided to apply. Where did you go first?"
   - *Follow-up:* "Why there and not somewhere else?"
   - *Follow-up:* "Did you end up touching more than one site or system to get it done?"
   *(This is the A1 signal — channel habit. Listen for whether CareerCompass is even in their mental model, or whether OTG/C@G is the reflex.)*

4. "If a tool showed you the opportunity AND let you apply right there, without going to OTG — what's your gut reaction to that?"
   - *Follow-up:* "What would have to be true for you to trust it enough to apply through it?"
   *(Non-leading probe on switching cost. Don't sell it — listen for objections.)*

### Current apply flow & friction — A5, abandonment

5. "Walk me through the actual application form last time. What did it ask you for?"

6. "Was there anything in that form you felt you'd already told the government somewhere before?"
   - *Follow-up:* "How did that feel when you hit it?"
   *(Sets up pre-fill value without leading.)*

7. "Did you finish that application in one sitting, or did you stop and come back?"
   - *If they stopped:* "What made you stop? Was it the form, or something else going on?"
   - *If one sitting:* "Have you ever started one and not finished? What happened that time?"
   *(A5 — and critically, separates form-length friction from redirect friction. Probe the cause, don't assume.)*

8. "When an application is annoying enough that you put it off — what's actually going through your head in that moment?"

### Progress & success

9. "When applying goes really smoothly, what does that look like for you?"

10. "After you hit submit — what happens next? How do you know it went anywhere?"
    - *Follow-up:* "Have you ever followed up because you heard nothing? How did you do that?"
    *(Persona 1's post-application silence pain — confirms status-tracking value.)*

### Pre-fill: accuracy, time, trust — A2, A3, A7

11. "Imagine the form already had your grade, posting history, and supervisor filled in for you. First reaction?"
    - *Follow-up:* "Would you double-check those fields, or trust them and move on?"
    *(A7 — trust. Listen for whether they'd verify, which signals the trust gap.)*

12. "If one of those pre-filled fields was wrong, what would that do to how you feel about the whole tool?"
    *(A2 — the 'wrong pre-fill is worse than none' risk. This is the trust-destroyer to size.)*

## Part 4: Solution Exploration (8 min)

**Show the pre-fill confirmation card concept / drawer sketch if available — B2.**

13. "Here's a rough idea: when you go to apply, a card shows you the info we'd pre-fill, and asks you to confirm or edit before continuing. Looking at this, what stands out?"
    - *Follow-up:* "Would you read through it, or just tap continue?"
    *(B2 — does the confirmation card earn its friction, or get dismissed?)*

14. "What concern, if any, would you have about applying this way?"

## Part 5: Closing (4 min)

15. "Anything about applying to these opportunities I should have asked but didn't?"

16. "Who else — a colleague who's applied recently — should I talk to?"

17. "Open to a quick follow-up if we build something to look at?"

---

# TRACK B — Posting Manager Interview Guide

**Who:** HR executive/officer who administers development postings (Persona 3). Manages 5–20 active postings tied to programme cycles.

## Part 1: Opening (4 min)

"Thanks for the time. I'm Michelle from the CareerCompass team. We're looking at how postings get filled — from your side, the HR side — to understand where the process is heavy. I want to learn how you actually run it today."

## Part 2: Background (8 min)

1. "Tell me about your role and how development postings fit into it."

2. "Roughly how many postings are you running at once, and what's the cycle like?"

## Part 3: Core JTBD — Filling a Posting (28 min)

### Current workflow

3. "Walk me through what happens from the moment a posting opens to the moment it's filled."
   - *Follow-up:* "Where do the applications actually land for you today?"
   *(Confirms the FormSG-email-spreadsheet reality.)*

4. "How do you keep track of who's applied and where each person is in your process?"
   - *Follow-up:* "Show me / describe the spreadsheet or system if you can."

### Assessing fit — the quality bottleneck (validated; go deep on the *how*)

5. "When you're looking at applicants, how do you decide who's actually a good match?"
   - *Follow-up:* "What information do you wish you had that you don't get today?"
   *(Persona 3's core insight — they'd take 3 well-matched over 20 unfiltered. Probe what 'matched' means to them.)*

6. "How much of your assessment relies on what the officer wrote about themselves versus information from HR records?"
   - *Follow-up:* "When the self-report and the record don't match, what do you do?"

### Record ownership — the ATS question (C1)

7. "Today, once an officer applies, where does that record live, and who owns it?"

8. "If all your applicants for a posting showed up in one place — with their grade, history, and competency profile attached — how would that change your work?"
   - *Follow-up:* "What would you still need to do outside that system?"
   *(Tests whether OTEP owning the application record solves Persona 3's job — the pre-req for serving them in R1 at all.)*

### Closing the loop

9. "What happens when a posting is filled or expires? How do you handle late applicants?"
   - *Follow-up:* "How much of your time goes into just telling people 'this is closed'?"

10. "When the whole process works well, what does that look like for you?"

## Part 4: Solution Exploration (8 min)

**Show applicant-list-per-posting concept if available.**

11. "Imagine one screen per posting: every applicant, their date, grade, and competency profile, with a status you can update that auto-notifies them. What stands out?"

12. "What would make you actually switch to this from your current way of working?"
    - *Follow-up:* "What would make you NOT trust it?"

## Part 5: Closing (4 min)

13. "Anything about filling postings I should have asked?"

14. "Who else on the HR/agency side should I talk to?"

15. "Open to a follow-up?"

---

## Notes Template

| Q | Response | Key Quote | Assumption it touches | Insight |
|---|----------|-----------|----------------------|---------|
| | | | A1 / A2 / A5 / B2 / C1 | |

---

## Assumption → Question Map (for synthesis)

| Assumption | Track A Qs | Track B Qs |
|---|---|---|
| A1 — Channel choice | 3, 4 | — |
| A2 — Pre-fill accuracy/trust-destroyer | 11, 12 | — |
| A3 — Pre-fill net time saved | 6, 11 | — |
| A5 — Abandonment + *why* | 7, 8 | — |
| A7 — Trust pre-filled data enough to submit | 11 | — |
| B2 — Confirmation card behavior | 13 | — |
| Persona 1 — post-application silence | 10 | — |
| C1 / Persona 3 — record ownership | — | 7, 8 |
| Persona 3 — applicant quality job | — | 5, 6 |

---

## Post-Interview
- [ ] Send thank you
- [ ] Pull exact quotes against the assumption map above
- [ ] Update the status column in `2026-05-20-r1-assumption-priority-matrix.md`
- [ ] Log outcomes in `../../../decisions/2026-05-29-W22-decisions-log.md`
- [ ] Run `/user-research-synthesis` once you have 3+ sessions per track

---

*Generated 2026-06-03. Targets only user-testable R1 assumptions. Pair with the parallel spikes (A9/A10 API, B1 form audit) and escalations (A13, A14) that this guide does not cover.*
