---
date: 2026-07-06
recipient: Adrian Ang
channel: direct reply (Teams thread he started, 6 Jul)
purpose: feasibility check-back on related-role title matching
status: draft
---

# Slack Message: Title-Matching Feasibility → Adrian

Hey Adrian 👋 feasibility check done on "Explore related opportunities." Here's where I land.

**The problem:** matching on title words breaks in both directions, and your "roles lower than intended" concern is a symptom of it. "Dato" pulling up "data" lets bad matches in. "Senior Software Engineer" not surfacing "Software Developer" lets good matches slip through. And "Senior Director" pulling in "Senior Manager" or "Senior Executive" (your concern) happens for the same reason, they all share the word "senior." Title text just isn't a reliable way to tell if two roles are the same or the same level. No amount of tuning fixes all three at once.

**My recommendation: ship the title fix now, treat ranking and cross-title matching as a separate, longer workstream.**

1. **Ship now:** stop matching on words like "senior," match on full titles instead. "Senior Director" only matches "Senior Director." This closes the dato/data problem and stops the most obvious wrong-level matches. Low effort, no dependencies, I'd start this immediately.

2. **Ranking isn't a quick fix.** POCDEX has grade for the person, not the opportunity, and C@G doesn't carry grade data at all upstream. This needs proper scoping with whoever owns OTG and C@G ingestion, not a patch. I'll flag it to them.

3. **For catching equivalent roles under different titles, we need competency matching via CIE.** Worth flagging: Pow Hwee and I separately discussed using CIE to infer competencies for C@G opportunities, which don't have any today. Same idea applies here, match on competencies instead of title text. Two different problems, same answer, so let's not solve it twice.

Net: title-word fix ships now. Grade ranking and cross-title matching both need scoping conversations before we can commit dates, I don't want to promise a timeline on either until we have that. Let me know if you want me to set those up.
