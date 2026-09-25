---
date: 2026-09-24
week: 2026-W39
type: decision-brief
topic: R1 Opportunities — scope status for BOs
audience: Adrian Ang and PSD BOs
status: draft — one item needs your input before we lock this
---

# R1 Opportunities — Where We Stand

**Bottom line:** the core build is confirmed and moving. One item needs a decision from you this week before we can finalize scope communications.

---

## Confirmed, No Action Needed From You

- **STIPs & Gigs** moves fully into Compass. Officers create, discover, and apply entirely inside the platform, no HR gate. Once Compass creation goes live, we'll stop taking new postings on OTG, with a clear cutoff notice so nothing falls through the gap.
- **Internal Jobs and Secondment** (excluding SJR) are discoverable in Compass, but applications route back to HRPS or Cumulus, whichever system hosts the posting. Compass isn't replacing those systems' application workflows, it's a better front door to them.
- **IJR is confirmed in R1**, using the same pattern as STIPs & Gigs: officers discover and apply natively inside Compass. What happens after an officer applies, HR reviewing and matching candidates, stays exactly as it works today, offline. We're not rebuilding that part.
- **SJR stays on OTG**, unaffected by IJR's inclusion, migrating to Compass ahead of the 2028 cycle.

---

## Needs Your Decision

**Who creates an IJR posting: any officer, or HR?**

STIPs & Gigs works because any officer can post one, no gatekeeper. IJR has traditionally been HR-curated, HR builds the pool of available roles, not individual officers. We need to know which model IJR follows in Compass before we can design or estimate it: officers self-serve the way they do for STIPs & Gigs, or HR posts on their behalf the way OTG works today. This is the single blocker on scoping IJR's build.

**Can non-pilot-agency officers get the full Compass experience, or a lighter one?**

Officers outside the 6 pilot agencies don't yet have a POCDEX profile, which is what powers ring-fencing and competency matching in Compass. Without it, our engineering team can reliably give them job creation and a basic Opportunities listing, but not the fully personalized discovery experience pilot-agency officers get.

We need your call on which of these we commit to for R1:

1. **Full experience for everyone, POCDEX dependency included** — holds launch (or that feature) until POCDEX data-sharing is in place for all agencies.
2. **Full experience for pilot agencies, lighter experience elsewhere** — ships on schedule, non-pilot officers can still create and browse, just without full personalization until POCDEX catches up.

We lean toward option 2 to protect the timeline, but want your sign-off since it affects what we can say about "WOG-wide" scope externally.

---

## Worth Knowing, No Decision Needed Yet

- **Ring-fencing data from HRPS/Cumulus needs a formal confirmation.** Our engineering team isn't fully confident the data those systems currently provide is reliable enough to trust as-is. We're sending a direct spec question to get a clear answer, this doesn't change anything you need to do now, just flagging it's in motion.
- **A minor identity edge case:** an officer with logins to more than one agency's email could, in theory, apply to the same posting twice under two different identities, and we wouldn't currently be able to tell. Low likelihood, but we're tracking it for a future fix.

---

*Full internal working notes, including engineering detail, are in the [backlog grooming meeting notes](../meeting-notes/2026-09-24-W39-r1-backlog-grooming.md). This summary leaves out technical and process detail not relevant to a BO decision.*
