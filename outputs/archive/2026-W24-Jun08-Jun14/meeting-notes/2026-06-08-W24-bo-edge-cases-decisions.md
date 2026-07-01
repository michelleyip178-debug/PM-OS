---
date: 2026-06-08
type: BO Decision Request
topic: Edge Cases & Error States — ringfencing policy needed before S5 design
linked-prep: 2026-06-08-W24-edge-cases-amber-prep.md
---

# BO Decision Request: Ringfencing & Edge Cases

**Needed by:** Before S5 grooming (Thu 26 Jun)

**Why it can't wait:** Amber cannot design the ineligible/eligible states for OTEP-127, and Pow Hwee cannot estimate the POCDEX eligibility check, until these policy calls are made.

---

## What we need from you

1. **Ringfencing policy** — when an ineligible officer lands on a restricted opportunity, do they see it or not? (Decision 1 below)
2. **Empty listing** — is a fully empty listing a real scenario at pilot launch? (Decision 2 below)
3. **Scoping call** — do any pilot agencies plan to use "Exclude" mode? If yes, we need a workaround plan for launch. (Q3 below)

---

## Gate question — answer this first

**Do any pilot agencies plan to post ringfenced opportunities at launch?**

If no: park Decision 1 entirely until R1. No design needed, no POCDEX dependency, Amber's S5 plate is lighter.

If yes: proceed to Decision 1 below.

- [ ] **BO to confirm:** which pilot agencies plan to ringfence, and what criteria (agency, job family, or both)?

---

## Decision 1 — Ringfenced opportunities: hide or show-but-disable?

**Background:** Agencies can restrict opportunities to a specific audience via OTG's Audience Setup (by agency, job family, or job function). OTEP enforces this against the officer's POCDEX profile.

**MVP scope:** "Limit to" mode only (whitelist). "Exclude" mode (blacklist) deferred to R1 — pilot agency set is small enough to manage manually. See Q3 below.

**The decision:** when an ineligible officer encounters a ringfenced opportunity, what do they see?

| Option | Experience | Trade-off |
|--------|-----------|-----------|
| **A. Hide** | Filtered out at API level — officer never sees it | Cleaner, simpler to build, no POCDEX in the hot path. Officers can't discover opportunities they may become eligible for. |
| **B. Show but disable** | Officer sees the card, clicks through, sees "This opportunity is not open to you." Apply button disabled. | More transparent — officers understand the full landscape. Requires POCDEX eligibility check at page load. Needs a fallback if POCDEX is unavailable. |

**Recommendation:** Option B — show but disable. Hiding creates a perception the platform is incomplete. The detail page explanation manages expectations.

**Questions for BOs:**

1. Do you agree with Option B?
2. Will agencies object to ineligible officers seeing their postings?
3. Do any pilot agencies need "Exclude" mode (open to all except a named group)? If yes, we need to plan how to handle their postings at launch — MVP only supports "Limit to."
4. Can agencies stack criteria — e.g. "MOH officers AND job family = Policy"? Pow Hwee needs the full matrix before he can estimate the eligibility check.
5. Can agencies edit their audience setup after posting? If yes, does OTEP need to handle "was eligible, now not"?
6. How specific should the ineligibility message be? Options: (a) generic — "This opportunity is not open to you"; (b) specific — "This opportunity is limited to officers from [Agency / Job Family]." Specific is more helpful but exposes criteria the agency may not want visible.
7. Should OTEP surface a positive signal for eligible officers — e.g. "This opportunity is available to you"? More confidence to apply, but signals the opportunity was restricted.

**Assumption to validate:** officers will tolerate seeing opportunities they can't apply to, and will read the ineligibility message as policy — not a bug. If BOs expect this to generate complaints or agency queries, Option A may be safer.

---

## Decision 2 — Empty listing

**When does this happen?** If the pilot launches with no live opportunities — agencies haven't posted yet, or all have passed their closing date.

| Option | Experience |
|--------|-----------|
| **A. Not a real scenario** — pilot agencies will always have live postings at launch | No design needed. Park for post-MVP. |
| **B. Real scenario** | Show: "No opportunities available right now. Check back soon." No CTA needed. |

- [ ] **BO to confirm:** at pilot launch, will there always be at least one live opportunity? If yes, we park this.

---

## What's already decided (no BO input needed)

- **Closed opportunities** — excluded from the listing. Only reachable via stale bookmark. Handled by existing "no longer available" screen.
- **API errors** — standard error screen with retry. No policy call needed.
- **Incomplete officer profile** — descoped from MVP. Personalisation is not in MVP scope.

---

*Linked to: [Edge Cases & Error States meeting prep](2026-06-08-W24-edge-cases-amber-prep.md)*
*Dependencies, risks & assumptions: [2026-06-08-ringfencing-dependencies-risks-assumptions.md](../decisions/2026-06-08-W24-ringfencing-dependencies-risks-assumptions.md)*
*Open item: #43 in [open-items.md](../../../PM-skills-ALL-1/00-hub/open-items.md)*
*Raise at: next BO Working Level session or async before Thu 26 Jun*
