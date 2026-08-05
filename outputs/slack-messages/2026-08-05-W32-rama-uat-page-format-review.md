Format's good — the table (Date / Workstream / Activities / Expected Outcome / Test Account / Owner / Status) has what we need to track this properly. A few gaps before it's usable though:

**Structure works, but:**
- Only WS1 has activity rows in the table right now. WS2, WS3, and WS4 are named in the "UAT Timing" section above but don't have rows yet — worth adding those so the table actually covers all 4 workstreams.
- Test Accounts block still says "[to be filled]" — this is the same test-account gap we've been chasing all week (Kimberly's NRIC/learner ID info), so no new blocker, just flagging it's still open here too.
- No dates or statuses filled in on the two WS1 rows that do exist.

**One structural question:** the "To Start UAT early for WS2, 4, 3" section — is that a formal request to CSC to prepone those three workstreams, or just a placeholder heading? If it's live, might be worth pulling in the WS3 SSO blocker (intranet DNS/VAPT scope question from today's standup) as a pre-condition too, since that's currently unresolved.

---

**On scope** — heard from Michelle that Imelda wants this page to cover pre-requisites, owners, timeline, test cases, and success criteria, not just an activity log. Good news: most of that already exists, just not on this page yet.

- **Pre-requisites + owners** — fully mapped per workstream (governance table + per-WS detail) in the consolidated CSC/DLE reference doc
- **Test cases** — full spec already exists (A-1/2/3, B-1/2, GAP-1–16, M-1/2, S-1–6, J-1/2) with entry/exit criteria per workstream
- **Success criteria** — SIT vs. UAT boundary already defined per workstream (what SIT proves vs. what's deferred to UAT)
- **Timeline** — dates currently in play are tracked separately (the dates-in-play table), since several are still unconfirmed (24/25 Aug vs. 31 Aug CSC-track UAT vs. 11 Aug OTEP-wide UAT)

Rather than rebuild all this fresh on the Confluence page, happy to port it over directly so the page becomes the single source instead of us maintaining two versions. Want me to draft the full page content for you to paste in, or would you rather I share the source doc and you shape it into the page yourself?
