---
date: 2026-06-22
time: 11:00–11:15
attendees: Michelle, Léo, Thomas, Hao Eng, Amber, Rathika
type: Daily standup
sprint: S4 Week 2
---

# Meeting Notes: OTEP Team 2 Standup — 22 June 2026

---

## Summary

Categories decision confirmed in standup (no change to STIP/Gig). CFT webhook approach locked. Internal demo confirmed for Friday PM ahead of Monday BO demo — code freeze is Friday afternoon. Rathika blocked on API testing due to service discovery pending.

---

## Team Updates

| Person | What they did | Focus today | Blocker |
|--------|--------------|-------------|---------|
| **Léo** | Merged refactor for graph data ✅ | Plug in C@G client + test; has DTOs, client, unit tests ready | None |
| **Thomas** | Benchmarked Go vs Postgres search — Go faster but missing threshold filter | Fix threshold, update benchmark, open PR for review (afternoon) | None |
| **Hao Eng** | File upload to CFT working ✅ (Friday). Confirmed service connect mTLS approach with Adrian | Test file upload to CFT in dev environment today | None |
| **Amber** | Design run-through for options page — aligned with Thomas, corrected most issues | Check edge cases with BO before finalising screens; investigate no-role-profile card state + notification bar | Needs BO input on edge cases before updating Thomas |
| **Rathika** | Arranging UAT test cases (per opportunity card + opportunity page) | Continue test cases, add screenshots | Service discovery pending — can't test API calls from browser (SSR). Can only test what's rendered |
| **Michelle** | Morning call: confirmed no category changes. | OTG handover to Jobel; POCDEX authorisation work (will action Wed — on leave Tue) | On leave tomorrow (Tue 23 Jun) |

---

## Decisions Made

**1. No category changes — confirmed**
Categories stay as-is (STIP and Gig separate). No impact on ingestion logic. Any new categories must come back with a stronger use case. Adrian's position: rejected outright — "no opportunities, don't talk."

**2. CFT webhook: single shared endpoint**
Going with `/cft-webhook` URL on service side, dispatching to respective imports from there. Authentication middleware modification not advisable — mTLS handled entirely by service connect (no app code changes needed).

**3. Internal demo: Friday PM**
Code freeze Friday afternoon. Internal demo Friday to find issues before Monday BO demo. Demo environment: dev (acknowledged as unstable but no alternative confirmed yet).

**4. C@G import demo approach**
Léo can proxy local to dev DB to demo data import — doesn't require UI. Creates endpoint to trigger manually as interim approach.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Align with Ram on demo approach — end-to-end flow vs two-squad/two-laptop | Michelle | Today | High |
| Hand over workforce architecture to Jobel | Michelle | Today | High |
| Work out edge case screens with Amber → put into PowerPoint for async BO review (Imelda's approach) | Michelle + Amber | Before Tue design review | Medium |
| Test file upload to CFT in dev environment | Hao Eng | Today | High |
| Fix threshold filter, update benchmark, open PR | Thomas | This afternoon | Medium |
| Plug in C@G client, test integration | Léo | Today | High |
| Continue UAT test cases (opportunity card + detail page) | Rathika | This week | Medium |
| Code freeze | All devs | Friday afternoon | High |

---

## Risks & Flags

**Demo risk (🔴 High):**
- Dev environment is acknowledged as unstable ("the worst environment")
- No confirmed demo owner, no rollback plan
- Two-squad/two-laptop approach still default — Michelle pushing for end-to-end but no confirmation from Ram
- Michelle is on leave Tuesday — demo alignment with Ram needs to happen today

**Rathika blocked (🟡 Medium):**
- Can't test API calls due to SSR + service discovery pending
- Workaround: test only rendered output for now
- Will unblock once service discovery is resolved

**Amber pending BO input (🟡 Medium):**
- Edge case screens (no role profile → card state, notification bar) need BO decision before Amber can finalise
- Needs to happen before Tue 14:00 design review (or defer to async PowerPoint)

---

## Key Signal for Michelle

Adrian's quote on categories: "No opportunities, don't talk" — this is a strong precedent for the PSFG gate. Any push to include PSFG in MVP will need to clear the same bar: strong policy intent + programme support. Cite this if needed.

---

*Next standup: Tue 23 Jun 11:00 (Michelle on leave — team runs without PM)*
*Demo: Internal Fri PM → Monday BO demo*
