# Slack Message: #43 Ringfencing/Jobs Filter — BO Sign-Off Resolved

**To:** Amber Tong, Thomas Huchedé

**Context:** Open item #43 (ringfencing + Jobs filter BO sign-off) resolved 2026-07-03. Unblocks OTEP-127 (display logic) and OTEP-86 (filter chip visibility).

---

BO sign-off on ringfencing is in — all 5 open questions answered, so OTEP-127 and OTEP-86 are unblocked.

**Hide vs. show:**
- Ineligible officers (including blocklisted/MDDI-excluded) are hidden from the listing entirely.
- Direct links require login first. If an officer logs in and is ineligible, they'll see the ineligible state on the detail page (not a silent hide).

**Ineligible-state message copy:**
> "This opportunity isn't available based on your current profile. Explore other opportunities that may be a better match."

**No positive eligibility signal** — eligible officers won't see anything extra flagging them as eligible.

**Jobs filter chip:** shows "Careers@Gov" — still scoped to C@G External per our existing MVP ingestion decision (Internal Jobs/Secondments stay excluded, deferred to R1).

Amber — this should let you finalize the ineligible-state design and filter chip UI. Thomas — OTEP-127 display logic can move forward with the hide/show-on-direct-link logic above.

Shout if anything's ambiguous — happy to jump on a quick call if easier than back-and-forth here.
