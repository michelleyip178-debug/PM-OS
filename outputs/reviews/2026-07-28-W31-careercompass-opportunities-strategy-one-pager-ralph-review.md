# Ralph Wiggum Review: Product Strategy One-Pager — CareerCompass Opportunities Unified Hub

**Reviewed:** 2026-07-28

**Document:** [outputs/strategy/2026-07-28-W31-careercompass-opportunities-strategy-one-pager.md](../strategy/2026-07-28-W31-careercompass-opportunities-strategy-one-pager.md)

**Focus:** Section 2.3 Success Metrics (per request), with supporting context from 2.1/2.2

**Overall Vibe:** The prose is confident and the metrics table is a crime scene.

**Severity Summary:** 3 CRITICAL | 3 IMPORTANT | 2 MINOR

---

## TL;DR

Section 2.3 has a genuinely broken table — two rows for the same metric with contradicting baselines and no resolution — sitting directly underneath a North Star that the document itself admits isn't approved. That's not a formatting problem, that's "I don't currently have a single source of truth for my own success metrics," and it's the first thing a PDO reviewer will poke at. Fix the duplicate row and the North Star ownership question before this goes anywhere near a reviewer. Everything else is fixable in five minutes; those two are not, because fixing them requires a real answer, not a better sentence.

---

## Issues Found

### CRITICAL (Must Fix Before Sharing)

**Issue 1: Duplicate metric row with contradicting data**
- **Severity:** CRITICAL
- **What I found:**
  ```
  | Application rate for opportunities | No baseline | 20% applied | R2: Jun '27 |
  | Application rate for opportunities | 20% | 20% within 12 months | |
  ```
- **Why it's a problem:** Same metric name, two different baselines (`No baseline` vs. `20%`), two different targets (`20% applied` vs. `20% within 12 months`), and the second row has no timeline at all. This isn't two related-but-distinct metrics — it's the identical label twice. Either someone pasted in a stale row and forgot to delete the old one, or two different people's numbers got merged without reconciliation. Either way, a reviewer reading this table cannot tell you what your actual application-rate target is. "Me fail English? That's unpossible!" — except this isn't English, it's arithmetic, and it doesn't add up.
- **What to do:** Find the source of both rows (check the original PMP template submission vs. whatever draft added the second one). Delete the wrong one, or if they're genuinely tracking two different things (e.g., one is "rate among logged-in officers" and the other is "rate among onboarded officers"), rename both rows so the distinction is visible in the label, not just inferable from context.

**Issue 2: North Star is explicitly not approved, but it's presented as *the* North Star**
- **Severity:** CRITICAL
- **What I found:** "Right now this sits inside the approved 15%-by-Dec'28 target along with course completions, so it's not a separate number leadership has signed off on yet."
- **Why it's a problem:** You buried the single most important caveat in your entire metrics section inside a subordinate clause. The heading says "North Star: Opportunities" like it's settled. The next sentence says leadership hasn't actually signed off on it as its own number — it's currently bundled with a completely different team's metric (course completions). A PDO will ask: "So what happens if courses does 15% and opportunities does 0%? Does the combined number still say success?" You don't currently have an answer, and the doc doesn't flag that as an open risk anywhere — not in this section, not in Section 5 (Open Issues), which is still empty.
- **What to do:** Either (a) get placement rate disaggregated and approved as its own number before this goes to review, or (b) if that's not realistic yet, move this out of "North Star" framing and into Section 5 (Open Issues) as: "North Star metric ownership — placement rate is currently bundled with course completions in the approved 15% target; needs disaggregation. Owner: [you / whoever owns the OKR]." Don't present an unapproved number with the same confidence as an approved one.

**Issue 3: "Validated" market sizing has no validation in it**
- **Severity:** CRITICAL (flagged here because it directly undermines whether the metrics targets below it are credible)
- **What I found:** "Market size (validated with pilot data)" followed by a TAM/SAM/SOM table where every "data source" is headcount (PSD/data.gov.sg staff strength, pilot agency reach). SOM is described as "Committed target: 20% of SAM" sourced from "Team OKR" — that's not a source, that's the number you're trying to justify, citing itself.
- **Why it's a problem:** Nothing here says officers in the pilot *want* this or *have* this problem at the rate you're assuming. You've validated that 5,400 people exist and are reachable. You have not validated demand. This matters directly for Section 2.3 because your 20% SOM commitment and your 20%-applied / 30%-click-through targets all inherit credibility from "validated market" — and that credibility isn't there yet. "That's where I saw the leprechaun. He told me to burn things." — i.e., don't build targets on a foundation that says "validated" but means "counted."
- **What to do:** Either cite actual pilot usage data (sign-ups, click-throughs from the pilot phase, survey satisfaction scores) if you have it, or rename the heading to "Market size (pilot operational scope)" and add a separate line noting demand validation is still pending. Don't let "validated" do work it hasn't earned.

### IMPORTANT (Should Fix)

**Issue 4: Leading indicators aren't sequenced against their own targets**
- **Severity:** IMPORTANT
- **What I found:** Click-through → 30% by R1 (Mar '27), Application rate → 20% by R2 (Jun '27), Login rate (180-day) → 20% by R2 (Jun '27). But a 180-day retention metric measured "by Jun '27" for a cohort that needs 180 days of history means your first valid cohort has to have logged in by ~Jan '27 — before R1 even ships (Mar '27), on the metrics that are supposed to feed it (click-through). The funnel logic (discovery → action → retention) is stated correctly in prose ("These tell us if officers are finding things, then acting on them, then sticking around") but the actual dates don't respect that sequence.
- **Why it's a problem:** A PDO doing basic math on your timeline table will find this in under a minute, and it undercuts the "leading indicator" framing you're using to justify why these four metrics were chosen.
- **What to do:** Re-derive the R2 login-rate date from your actual R1 ship date + 180 days, not from a round quarter number. If R1 ships Mar '27, your first valid 180-day cohort read-out is realistically ~Sep '27, not Jun '27.

**Issue 5: "Why these" doesn't address the biggest risk to the North Star — data completeness, not officer behavior**
- **Severity:** IMPORTANT
- **What I found:** The "Why these" rationale (lines 70) frames risk entirely in officer/HR behavior terms — bad discovery, uninteresting opportunities, people not coming back, agencies not engaging. Nothing addresses data or pipeline risk.
- **Why it's a problem:** You know — from your own reconciliation work on this exact product this week — that there's an open, unresolved dependency (agency-code/competency matching resolution) actively blocking real scope. If that kind of thing silently produces bad matches or missing opportunities, your click-through and application-rate numbers will look like a discovery problem when it's actually a data problem, and you'll misdiagnose it. That's exactly the kind of guardrail-metric gap a PDO is trained to probe for.
- **What to do:** Add one line to "Why these" acknowledging that a stall in leading indicators could also mean upstream data/matching issues, not just officer behavior — and name what you'd check first to tell the difference (e.g., ingestion completeness, match-rate logs) before concluding it's a UX problem.

**Issue 6: No guardrail metric for the thing that would make the North Star look good while the product is actually broken**
- **Severity:** IMPORTANT
- **What I found:** HR dashboard usage and officer satisfaction are described as catching "a good placement number can hide a bad experience" — which is the right instinct — but there's no stated threshold at which you'd actually treat that as a red flag. 60% HR usage and 3.8/5 satisfaction are targets, not guardrails; nothing says "if placement hits 15% but satisfaction is below X, we don't call this a win."
- **Why it's a problem:** Without an explicit guardrail threshold, this section reads as "we track satisfaction" rather than "we'd stop and investigate if satisfaction diverges from placement." Those are different commitments, and only the second one is a real safeguard.
- **What to do:** Add one sentence: something like "If placement rate hits target but satisfaction stays below 3.5/5, treat the North Star as not actually met — investigate before reporting success."

### MINOR (Nice to Fix)

**Issue 7: "Login rate" doesn't say login rate of what denominator over what window in the metric name itself**
- **Severity:** MINOR
- **What I found:** "Login rate (180 days) — No baseline — 20% of onboarded officers"
- **Suggestion:** Clarify in the label whether this is "% of onboarded officers who log in at least once in a 180-day window" vs. "% still active at day 180" — those are very different retention definitions and the current phrasing could be read either way.

**Issue 8: Cost-effectiveness section admits it's empty, which is honest — but for a POV-stage product, a rough Dev EOM placeholder would strengthen the doc more than a blank table**
- **Severity:** MINOR
- **What I found:** "(Cost/value table not yet populated — needs Dev/Ops EOM figures and impact-unit definition from finance/PMP before this can be filled in.)"
- **Suggestion:** Even a rough order-of-magnitude estimate (e.g., "~X FTE-months, low confidence") signals you've thought about cost, versus a fully blank table which reads as "haven't gotten to it yet." Not required, but worth having ready verbally even if not written down, since PDO reviews tend to ask this live.

---

## Questions That Need Answers

1. **Who owns the decision to disaggregate placement rate from the combined 15% target, and when will that happen?** — Because right now your North Star isn't actually a North Star you can be held to independently; it's a shared number with another product line.
2. **Which of the two "Application rate for opportunities" rows is correct?** — Because as written, the document contradicts itself on a core metric, and whoever reads this next won't know which number to hold you to.
3. **Do you have any pilot usage data (not just headcount) that supports "validated" in the market sizing section?** — Because if you do, it belongs in this doc and makes your case much stronger; if you don't, the word "validated" is doing more work than the evidence supports.
4. **What's your actual first-valid-cohort date for the 180-day login metric, given your real R1 ship date?** — Because Jun '27 doesn't appear to be mathematically reachable if R1 ships Mar '27 and login tracking only starts once officers are onboarded post-launch.
5. **What would make you say "the North Star metric hit target but the product isn't actually working"?** — Because you've named the right guardrails (HR usage, satisfaction) but haven't set the threshold that would trigger real concern.

---

## What Actually Works

- **The "Why these" rationale is genuinely good reasoning, not just a list.** Choosing placement over application, and explicitly saying why application-only would understate failure, shows real metric-design thinking — that's not a common thing to get right on a first pass.
- **The leading-indicator funnel (click-through → application → login) is the correct shape.** The logic connecting discovery, action, and retention to diagnose where a North Star stall is coming from is sound in principle — it's the dates that need fixing, not the structure.
- **Tying the North Star framing back to the Minister's "emplace, not just equip" language is a strong, specific policy anchor**, rather than a generic government-alignment gesture. That's the kind of specific, real detail that makes a policy argument credible instead of decorative.

---

## Contradictions with Existing Context

No conflicting `context-library/strategy/` or `context-library/decisions/` files were found for this product's own metrics history — this appears to be the first strategy doc of its kind in the workspace, so the contradictions flagged above are entirely internal to this document, not against prior committed positions. Worth noting: that also means there's no existing OKR doc to check the "15%-by-Dec'28" figure against. If that number lives somewhere else (a team OKR doc not yet in this workspace), it's worth pulling in so future reviews can actually verify it rather than take the doc's word for it.

| Document Claim | Contradicted By | Source |
|---|---|---|
| "Application rate for opportunities — No baseline — 20% applied — R2: Jun '27" | "Application rate for opportunities — 20% — 20% within 12 months — [no timeline]" | Same document, Section 2.3, adjacent table rows |
| "North Star: Opportunities" (heading implies settled/approved) | "...not a separate number leadership has signed off on yet" | Same document, Section 2.3, same paragraph |
| "Market size (validated with pilot data)" | Every cited data source is headcount/reach (PSD/data.gov.sg staff strength, pilot agency reach, Team OKR) — none is a demand or usage measurement | Same document, Section 2.1 |

---

## Recommendations

**If I had 30 minutes to improve this document, I'd:**

1. Resolve the duplicate "Application rate for opportunities" row — track down which number is current and delete or relabel the other.
2. Move the North Star approval caveat out of a subordinate clause and into Section 5 (Open Issues) as a named, owned risk — don't let it hide inside the metrics table.
3. Re-date the 180-day login metric against your actual R1 ship date, and add one guardrail sentence tying satisfaction/HR-usage thresholds to what would make you distrust a "good" placement number.

**Skills that can help:**
- `/metrics-framework` — once the contradictions above are resolved, use this to rebuild the leading/lagging indicator hierarchy cleanly and re-check the sequencing math.
- `/decision-doc` — worth a short decision doc just for "how is the North Star owned and split between Opportunities and Courses," since that's clearly unresolved and will keep resurfacing.
- `/impact-sizing` — the SOM/20% commitment and the metrics targets would benefit from a proper impact-sizing pass once real pilot usage data (not just headcount) is available.

---

*"My knob tastes funny." — Ralph Wiggum*

*Review by your friendly neighborhood skeptic. Remember: I'm not trying to kill your one-pager. I'm trying to make it bulletproof before a PDO tries to kill it.*
