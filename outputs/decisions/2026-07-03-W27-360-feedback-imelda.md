# 360 Feedback — Imelda (draft for AppraiseAI)

**Relationship to recipient:** Peer/colleague — fellow PM on OTEP, we own different feature areas (I own Pathfinder; Imelda owns Officer Profile, Learning Course Discovery, CV Upload/Inference, Competency Profile, My Development) with shared infra dependencies (WOG Auth, POCDEX, taxonomy).

---

## Strengths

**1. Drove a clean default decision on an ambiguous, cross-squad feature.**
In the 4 Jun backlog grooming for competency inference, the team was stuck on whether to show all 8 inferred competencies or only the "new" ones. Imelda pushed the discussion to a workable default (show all, don't de-duplicate) rather than letting it sit open, and took ownership of the two things that gated it: checking with the Intel team on whether inference could return more than 8, and pulling the AI-disclaimer policy doc. That kept the feature buildable instead of stalled on an unresolved UX question.

**2. Named a real ambiguity instead of building past it.**
In the 26 Jun competency roadmap sync, the learning filter depends on a "Domain" field that nobody in the room, including Imelda, could confidently define. Rather than letting the filter go into grooming on a shaky assumption, Imelda acknowledged the gap openly and took on chasing CSC for a real definition. That's the right instinct: catching a foundational ambiguity before it turns into a rebuild once more learning providers come on board.

**3. Delivered a design that held up under review.**
Ahead of the 9 Jul SteerCo, Imelda walked the team through the competency profile UX (three-section layout, duplicate-prevention rules) and it tested well enough to lock as-is. It's demo-ready with only a known terminology bug fix outstanding, no last-minute design churn.

---

## Areas for Consideration

**1. Open items that block other squads sometimes sit without a firm date.**
The CSC Domain chase and the duplicate-competency governance rule (labeling, sort order) were both still open with no due date as of early July, despite gating downstream work like the learning filter and the competency profile's duplicate handling. Given how much of Pathfinder's roadmap sits downstream of Core's taxonomy and profile decisions, committing to explicit dates on these (even rough ones) would help me and other squads plan around them instead of guessing.

**2. Learning design trade-offs (Option 1 vs 2) stayed unresolved for a while.**
This was flagged in the 26 Jun sync as something Imelda needed to bring to the BOs, but it hadn't moved by the SteerCo debrief a few days later. When a decision has two live options and BOs are the ones who need to weigh in, getting it in front of them earlier would keep it from becoming a last-minute SteerCo scramble item.

**3. Would value more proactive flagging on cross-squad sequencing risk.**
The Domain ambiguity and the SSOT taxonomy gap both affect Pathfinder features too (opportunity listing filters, in particular). I'd find it useful if these got flagged to me directly and early, rather than surfacing generically in a squad-wide sync where it's easy for the Pathfinder-specific implication to get lost.

---

## Remarks for Manager & Review Panel (not visible to Imelda)

Imelda is a strong PM to coordinate against: she takes ownership of the messy, ambiguous parts of her scope (taxonomy definitions, AI-disclaimer policy, duplicate handling) rather than deferring them, and she's comfortable saying "we don't actually know this yet" in front of stakeholders, which is a harder instinct to build than it sounds. The gap I'd watch is closure speed and cross-squad visibility on the open items she owns. Several of them (CSC Domain, duplicate governance rule, learning design options) sit in "acknowledged but undated" status for multiple sync cycles, and because Core's taxonomy and profile decisions gate a fair amount of Pathfinder's downstream work, that lag has real ripple effects for my planning. Worth coaching toward: naming a date (even provisional) the moment an open item is identified, and proactively pinging affected peer PMs when a Core-side ambiguity has cross-squad implications, rather than waiting for it to surface in a shared sync.

---

*Drafted from Pathfinder's workspace notes: 2026-06-04 backlog grooming, 2026-06-26 competency roadmap squad sync, 2026-07-01 SteerCo prep debrief. Review before submitting — I've cited specifics I could verify from meeting records, but check dates/details against your own memory of these sessions before this goes in.*
