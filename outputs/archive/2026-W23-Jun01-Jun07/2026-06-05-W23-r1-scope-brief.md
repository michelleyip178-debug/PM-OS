---
date: 2026-06-05
type: scoping-brief
release: R1
status: PENDING CONFIRMATION — Mark to confirm
source: SteerCo briefing, Mark (2026-06-05)
linked_hypotheses: outputs/research-synthesis/opportunity-recommender-hypotheses-2026-06-05.md
---

# R1 Scope Brief — CareerCompass

> ⚠️ Status: unconfirmed. Captured from Mark's R1–R3 briefing (2026-06-05). Treat as directional until Mark gives explicit sign-off.

---

## R1 Feature Set

### 1. Streamlined Application

**For HR:** Post all job types including secondment opportunities directly in Compass. This is a new HR-side posting capability — distinct from the MVP interim apply form workaround (OTG-only agencies without `formsg_url`, deferred at grooming 2026-06-04).

**For officers:** Pre-filled applications drawn from the officer's existing OTEP profile (competencies and work history already in system). Full embedded form — officer completes and submits without leaving Compass. No redirects.

### 2. Status Tracking

End-to-end application monitoring, native within OTEP. No ATS integration for R1 — OTEP owns the state machine (submitted → under review → outcome). ATS integration deferred to R2 or when a vendor is confirmed.

### 3. Saved Jobs

Officers can save/bookmark target opportunities and resume applications. Enables interrupted apply flows without data loss.

### 4. Smart Assistant

Auto-populates officer strengths and experience fields on application forms, drawn from the officer's existing OTEP profile. Scope for R1: profile-driven pre-fill only (not CV upload inference — that is the CIE flow in OTEP-205, a separate capability).

---

## What this is NOT (scope boundaries)

| Item | Status | Notes |
|------|--------|-------|
| ATS integration | Deferred R2+ | No vendor confirmed; native state machine for R1 |
| Interim apply form (OTG-only agencies, no `formsg_url`) | MVP workaround | Separate from R1 HR posting capability; decision logged 2026-06-04 |
| CV upload / CIE inference (OTEP-205) | MVP / separate | Not extended for R1 Smart Assistant |
| Opportunity recommender | R1 (separate) | See [opportunity-recommender-hypotheses-2026-06-05.md](../research-synthesis/opportunity-recommender-hypotheses-2026-06-05.md) |

---

## Open questions before R1 planning

| Question | Owner | Priority |
|----------|-------|----------|
| Mark confirmation of this R1 feature list | Michelle → Mark | P0 — don't plan sprints until confirmed |
| What job types are in scope for HR posting? (OTG, C@G, STIP, Gig, Secondment — all?) | Michelle → Mark / Jacky | P0 |
| What is the embedded form built on? Custom OTEP form, or integration with existing FormSG/C@G apply forms? | Michelle → Pow Hwee | P0 — determines build complexity |
| Status tracking data model — what states, who triggers transitions, who can see status (officer only, or HR too)? | Michelle → Pow Hwee | P1 |
| Saved jobs — does saving persist across sessions? Any expiry logic (posting closes)? | Michelle → Pow Hwee | P1 |
| Smart Assistant — which profile fields map to which application form fields? Needs field mapping exercise. | Michelle → Amber / Pow Hwee | P1 |

---

## Implications for current sprint work

- **OTEP-87** (detail page + apply CTA): R1 embedded form changes the apply destination. MVP CTA points to FormSG/C@G redirect. R1 replaces this with an in-Compass form. Don't over-build the redirect flow in MVP if R1 is 2 sprints away.
- **Secondment in R1** is additive (new HR posting type), not a replacement for OTG secondment handling in MVP. Both can coexist.
- **Native status tracking** means a new data model and likely new Jira stories. Scope this before R1 sprint planning.

---

*Created 2026-06-05 · Captured from Mark's briefing · Pending Mark confirmation · Next: confirm with Mark, then open R1 story pipeline*
