---
date: 2026-06-18
topic: Competency matching — design brief for Amber
audience: Amber (designer)
surfaces: Listing page (cards) + Detail page (competency section)
sprint_target: S5
generated_by: pm-brief
---

# Design Brief: Opportunities Matching Competencies

> **For Amber.** This covers what we need designed for competency matching across the listing and detail pages. It sets the scope, defines each scenario to design for, provides copy direction, and flags the constraints. Please use this as the basis for your Figma screens before we review together.

---

## What's in scope for MVP

Competency matching in MVP is **display only** — we show what competencies an opportunity requires, and (if the officer is logged in) how their profile relates to those. No scoring algorithm. No personalised re-ranking of the listing. No proficiency tiers.

The key decisions that shape this:

- **Competency match ratio descoped to R1** (decision 2026-05-08) — no "X of Y competencies matched" score in MVP
- **Personalised listing deferred to R1** (decision 2026-06-16) — listing cards do not re-rank based on competency fit
- **Competency section cut from OTEP-87 S4** (decision 2026-06-11) — building in S5 once Imelda's squad confirms schema
- **Competency levels binary only for MVP** (decision 2026-05-08) — no proficiency tiers (beginner/intermediate/advanced)
- **OTEP is a consumer, not owner** of competency data — Imelda's squad owns the master list; we read from their API

**What we ARE building in S5:**
1. Competency tags on the opportunity detail page (what the role requires)
2. Whether the officer's profile has those competencies (match / no match — binary)
3. No competency indicators on listing cards (deferred to R1)

---

## Surface 1 — Listing page cards

### Decision: no competency signal on cards at MVP

Competency-driven re-ranking and card-level match signals are R1. Cards show type, agency, title, posting date, closing date. No match percentage, no competency badge.

**What Amber does NOT need to design here:** competency match badge, match score, or any personalisation indicator on listing cards.

**What to keep in mind for R1:** leave room in the card layout for a future match signal (e.g. "3/5 competencies matched") — don't lock the card design in a way that makes this impossible to add later.

---

## Surface 2 — Opportunity detail page (competency section)

This is the main design surface for S5. The competency section sits on the detail page, below the main opportunity description.

### Scenarios to design

**Scenario 1 — Officer is logged in, has a competency profile, opportunity has competency tags**

This is the golden path. Show:
- The competencies the opportunity requires (from OTG ingestion — these are the tags the posting agency applied)
- Which of those the officer already has (sourced from Imelda's competency API via their POCDEX profile)
- Which ones they don't have yet

Copy direction:
- Section heading: "Skills and competencies"
- Matched: show competency name with a subtle "you have this" indicator (tick or equivalent — not a score, just present/absent)
- Not matched: show competency name without the indicator — no red cross, no alarming language
- Avoid: "You're missing X competencies." Lead with what they have, not what they lack.

**Scenario 2 — Officer is logged in, has a competency profile, opportunity has NO competency tags**

OTG opportunities may not always carry competency tags — OTG data quality varies. Don't show an empty section.

Copy direction:
- Hide the competency section entirely if the opportunity has no competency data
- No "No competencies listed" placeholder — just omit the section

**Scenario 3 — Officer is logged in, but their competency profile is incomplete or unavailable**

The POCDEX lookup may fail or return no competency data for some officers (e.g. new joiners, data gaps).

Copy direction:
- Show the opportunity's required competencies (if any), but don't show match/no-match indicators
- Add a single line: "Complete your profile to see how your skills compare."
- Link "Complete your profile" to the officer's profile page (if it exists at MVP) or omit the link if profile editing isn't built yet — confirm with Pow Hwee

**Scenario 4 — Officer is NOT logged in**

Officers browsing without logging in can still see the opportunity detail page. Competency matching requires a profile, which requires login.

Copy direction:
- Show the opportunity's required competencies as a plain list (no match indicators)
- Below the list: "Log in to see how your skills match this opportunity."
- Don't gate the competency tags — the list of what's required should always be visible

**Scenario 5 — Competency API is unavailable at page load**

The call to Imelda's squad's API may time out or fail. Page should not break.

Copy direction:
- Show the opportunity's required competencies as a plain list
- No match indicators — silently degrade, same as Scenario 4 (logged-out state)
- No error message to the officer — this is a silent fallback, not a visible failure

---

## Copy constraints

- Never use "match score," "percentage," or "X out of Y" — that's R1
- Never use negative framing for missing competencies ("you lack," "you're missing," "not matched")
- Use plain language — "Skills and competencies," not "Competency matrix" or "Skill alignment"
- Keep it scannable — tags or chips, not a paragraph of text
- Government tone — professional, not motivational ("You're almost there! 🎉" is out)

---

## Data constraints Amber needs to know

- **Competency tags come from OTG ingestion** — these are the labels the posting agency applied when creating the opportunity. Data quality varies; some opportunities will have no tags at all (see Scenario 2).
- **Officer competency data comes from Imelda's squad** via an in-code interface (not HTTP — see open item #18, architecture resolved 2026-06-11). Pathfinder calls Core's exact-match-by-label endpoint at page load.
- **No proficiency levels at MVP** — binary only. An officer either has a competency or they don't. No beginner/intermediate/advanced distinction.
- **Competency section is cut from OTEP-87 S4** — building in S5. This is new scope for S5, not a carry-over.

---

## Open questions for the design review

1. **Profile link in Scenario 3** — if officer profile editing isn't built at MVP, should the "complete your profile" prompt link anywhere, or just be static copy?
2. **Visual treatment for matched vs unmatched** — tick vs no-tick is one option; another is colour differentiation. What reads cleanest without implying a score?
3. **Section position on the detail page** — above or below "What you'll develop"? Suggest below, but Amber to confirm with page hierarchy in mind.
4. **C@G opportunities** — C@G listings may not carry competency tags at all (their data model is different). Is the competency section omitted entirely for C@G, or do we show the section for C@G too if tags are available?

---

## What to bring to the review session

Please prepare Figma screens for:
- [ ] Scenario 1 (golden path — logged in, has profile, opportunity has tags)
- [ ] Scenario 2 (opportunity has no competency tags — section hidden)
- [ ] Scenario 3 (logged in, profile incomplete — show tags, prompt to complete)
- [ ] Scenario 4 (logged out — show tags as plain list, login prompt)
- [ ] Scenario 5 (API failure — silent fallback, same as logged-out)
- [ ] Card layout with a note on R1 match signal placement (no design needed, just annotate)

---

*Brief: Michelle · 18 Jun 2026 · For Amber's Figma design session · S5 scope · Refs: OTEP-87, OTEP-349, open item #18, decisions 2026-05-08 / 2026-06-11 / 2026-06-16*
