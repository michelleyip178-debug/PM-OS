**Sprint 2 demo recap — 4 Jun** 🎬

Both squads demoed. Here's the Pathfinder side:

We showed the real thing end to end — log in, browse the opportunity listing, and open a detail page, all on actual ingested OTG data (now branded **CareerCompass**). The journey works. Still being wired up and landing next sprint: competency counts, the apply link, and search/filters (visible but not connected yet).

*Decisions / alignments:*
• Demo data stays masked until UAT — real data only in the UAT environment (data-classification concern)
• Listing logic: show all active opportunities, newest first; "closing soon" = closing within 7 days
• Mark & GK only see a clean milestone, not work-in-progress
• Date format → short numeric; header casing → follow the GovTech standard
• Product name is CareerCompass (logo still placeholder)

*Action items:*
• Plug in competency counts + apply link + search/filters — Thomas/eng — next sprint
• Connect report-issue button to logging (once PostHog license lands) — eng
• Decide the report-issue follow-up flow (how users hear back) — Michelle + Imelda — this week
• Fix card border so SJR vs "closing soon" are clearly different — Amber/Michelle Chen
• Resolve first/last name parsing when the source is empty — eng

*Issues / risks:*
🔴 New find: an officer's **secondment** should take priority over their primary role for title/agency — we only show primary today, so we'll add a ticket
🟠 OTG data is messy (duplicates, wrong titles, unformatted text) — demoing on real data is what surfaced it; ops cleanup needed
🟡 Card design (SJR vs closing-soon) affects the whole design system — Amber + Michelle Chen working it

Thanks Thomas for driving the demo 👏