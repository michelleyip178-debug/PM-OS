---
date: 2026-07-06
recipient: Thomas + engineering team
channel: Slack (engineering handoff)
purpose: scope handoff for "Explore related opportunities" title-matching fix
status: draft
---

# Slack Message: Title-Matching Scope → Thomas & Eng

Hey Thomas 👋 scope is locked for the "Explore related opportunities" fix on myDevelopment, here's what we need built and what's explicitly out.

**The problem:** matching on individual words in a title causes bad recommendations. A search on "senior" alone would match "Senior Director," "Senior Manager," and "Senior Executive" all as the same thing, so someone targeting Senior Director could get recommended a role a level or two down. Same root issue causes unrelated stuff like "dato" matching "data."

**What to build:** match on the full title as one whole unit, not word fragments. "Senior Director" should only match postings titled exactly "Senior Director." Worth checking whether this interacts with the existing MVP search logic, since that logic does word-level "either/or" matching today per Imelda. Flag if there's a conflict there.

**Explicitly not in scope, please don't build:**
- Grade-based ranking or filtering. No grade data exists on opportunities today, and Adrian's made the call not to invest here for now.
- CIE or competency-based matching to catch equivalent roles under different titles (e.g. Senior Software Engineer = Software Developer). Also decided against for now.

Reasoning behind both cuts: agencies inflate or deflate job designations and grades inconsistently, so neither approach would be reliable even with more engineering effort. Adrian's call: "we probably can survive on #1 for a long time." So this is scoped as a one-time targeted fix, not phase one of a bigger system.

One knock-on effect: the open question about how to tag competencies for C@G opportunities (role-based vs. CIE-inferred) is deprioritized too, not needed for this feature anymore.

Let me know if the full-title matching approach hits any snags with the existing search implementation.
