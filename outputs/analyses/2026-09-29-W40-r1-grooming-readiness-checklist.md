---
date: 2026-09-29
week: 2026-W40
type: readiness-checklist
scope: CareerCompass R1 (Opportunities Marketplace) — grooming readiness
owner: Michelle Yip
related:
  - outputs/prds/2026-09-23-W39-r1-release-one-pager.md
  - outputs/prds/2026-09-24-W39-epic-a-stips-gigs-one-pager.md
  - outputs/prds/2026-09-25-W39-epic-b-internal-jobs-ijr-one-pager.md
  - outputs/prototypes/2026-09-28-W40-r1-interim-wireframes.md
  - outputs/analyses/2026-09-16-W38-r1-risk-register.md
  - /Users/michelleyip/Documents/PM-skills-ALL-1/06-skills-and-decisions/dor-dod-guidelines.md
---

# R1 Grooming Readiness Checklist

Checked against the team's own Story-level Definition of Ready (Rama-facilitated): prioritized and able to deliver in a sprint; all platform subtasks including test cases identified and created; UI assets and UX flows designed and linked to all Acceptance Criteria; feature flag designed with entry point identified; API Contract identified and documented.

## Checklist

| Check | Status | Why it matters |
|---|---|---|
| **Story has an Acceptance Criteria set** | ✅ Can check per-epic — Epic B stories are written. **Epic A is not a grooming candidate — it's already shipped in MVP**, not pending ACs | Baseline requirement for any DoR pass |
| **UI/UX design exists, linked to ACs** | 🟢 **Materially clear — designer confirmed.** See Design Status below | Li Ting Kway confirmed as R1's designer (29 Sep), already has end-state screens, briefed on current scope same day |
| **API contract identified** | 🟡 Mixed — depends on type | IJR/Secondment: mostly known (redirect patterns). Internal Jobs: blocked, HRPS API undelivered. STIPs & Gigs (Epic A): not applicable — already shipped |
| **Story sized (poker, ≤7–9 points)** | 🟡 New process, not yet run team-wide | Thomas started poker sizing per the bi-weekly sync; not yet standard practice across the squad |
| **Test cases identified** | 🟡 Depends on story | Not audited across Epic B; **Epic A has no outstanding test-case need — it's live in production, not a grooming item** |
| **No open scope conflict on the story's type** | ✅ Mostly clear now | CAM resolved (D-052), CMM resolved (ownership to Zhikai) — fewer live conflicts than a week ago |
| **Story isn't secretly blocked** | 🟡 Type-dependent | Internal Jobs stories should not enter grooming at all — HRPS API has no date |

## Design Status — Detail

**Resolved 29 Sep:** Li Ting Kway is confirmed as R1's designer, already has end-state screens for this scope, and was briefed on current scoping the same day. The [PM-drafted interim wireframes](../prototypes/2026-09-28-W40-r1-interim-wireframes.md) are retired — her existing screens supersede them, not just as a starting point.

**Already shipped in MVP, no design or engineering work needed at all — not a grooming item:**
- Discovery catalog / shared card component (base layout, filters)
- STIPs & Gigs discovery (OTG pull-through)
- FormSG deep-link / redirect-out pattern (STIPs & Gigs)
- Disabled-Apply "contact poster" state (STIPs & Gigs, no FormSG link)

**Correction (29 Sep, later):** the catalog itself is not new design work — it's a reusable, already-shipped component. The only new catalog-adjacent work is adding type badges for Internal Jobs/IJR/Secondment, listed below.

**Genuinely new — now covered by Li Ting's existing screens, pending a fit-check against current scope:**
- New type badges on the existing catalog (Internal Jobs, IJR, Secondment)
- Bookmark toggle + Saved Jobs filter
- HRPS/Cumulus deep-link redirect signal (Internal Jobs)
- OTG general-landing-page redirect signal (IJR default case; Internal Jobs residual case)
- Hosting-HR-system redirect signal (Secondment) — **confirm this reflects the hosting-HR-system correction, not OTG** — that fix landed the same day she was briefed and may predate her screens

**Not yet designable, blocked on other decisions first:**
- Cross-HR-system access disclosure — waits on R1's interim answer to the auth gap
- "Link vs. no-link" visible distinction — not yet confirmed as a real requirement, needs a product call before it's a design task

## What This Means for Grooming This Week

**Correction: Epic A (STIPs & Gigs) is not a grooming candidate — it's already live in MVP.** Grooming this week is really about IJR and Secondment within Epic B — neither is blocked by the type-conflict or scope-decision checks anymore. The design-linkage requirement is no longer a blocker at all as of 29 Sep: Li Ting Kway is confirmed as R1's designer with existing end-state screens, not PM-drafted sketches — UI stories can now realistically clear the team's full DoR bar (design linked to every AC) pending her sign-off at the 30 Sep session, rather than needing an explicit exception.

**Internal Jobs stories should stay out of this grooming round entirely** — HRPS API has no committed date, and sizing against an unscoped ingestion source would just need redoing later.

**Remaining check, not a gap:** confirm at the 30 Sep session that Li Ting's existing screens reflect the Secondment ingestion-source correction (hosting HR system, not OTG) — that fix landed the same day she was briefed and may not have made it into her screens yet.

---

*Next review: after the 30 Sep session, note which stories actually cleared full DoR against Li Ting's screens versus which still need a follow-up design pass.*
