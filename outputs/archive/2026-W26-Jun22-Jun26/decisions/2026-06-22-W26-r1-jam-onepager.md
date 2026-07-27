---
date: 2026-06-22
type: jam-onepager
release: R1
audience: Adrian — Wed 24 Jun PM jam
status: DRAFT — provisional until Mark confirms scope
---

# R1 Epic Jam — Wed 24 Jun
**Goal of this session:** agree the 4 epics + priority order → open the R1 story pipeline

**R1 target:** Mar 2027. North Star: 10% of onboarded officers complete a development action within 6 months of launch.

---

## R1 in one line
MVP gets officers to the *door* of an opportunity. R1 brings both ends in-house: agencies create, officers apply, all inside CareerCompass. No redirects. System of record.

---

## The 4 epics

| # | Epic | What it does | Must / Should / Could |
|---|------|--------------|-----------------------|
| **A** | **Opportunity Creation** | Agencies author Internal Jobs + Secondments natively in CareerCompass. Posting lives in OTEP DB. Validation, publish, edit, close lifecycle. | **Must** (narrow: IJ + Secondment) / Should (full 5-type) |
| **B** | **Streamlined Application + Smart Pre-fill** | Native in-Compass apply form — no FormSG redirect. Pre-populated from officer's OTEP profile (competencies, work history). Officer submits without leaving Compass. | **Must** |
| **C** | **Status Tracking** | Application state machine in OTEP: submitted → under review → outcome. No ATS in R1 — OTEP owns it. Officers see status natively. | **Must** |
| **D** | **Saved Jobs** | Officers bookmark opportunities and resume in-progress applications. "Save" half ships semi-independently; "resume" waits on B. | Should ("save") / Could ("resume") |

---

## Priority + critical path

**A and B are the two spines.** Different surfaces — scoping parallelises, build serialises (one FE: Thomas). C is scoped alongside B, ships after. D is the parallel-track candidate.

**If we have to cut:** D's "resume" half goes first, then D. A-narrow + B + C is the non-negotiable core.

**Fallback:** if A-narrow + B + C doesn't fit → A-narrow + B, C slips to R1.5 (status = email/manual interim). Still closes create→apply for the orphaned types.

---

## The one big scope decision

**Creation: narrow (IJ + Secondment) vs full 5-type (add STIP, Gig, PSFG)?**

| | Narrow | Full |
|-|--------|------|
| **What's in** | IJ + Secondment only | All 5 types |
| **Why** | Only types with no other home post-OTG | Maximum coverage |
| **Build cost** | ~half | 2–3x scope expansion |
| **Recommendation** | ✅ Start here | Stretch — in if capacity allows |

---

## Known constraints + risks

**🔴 Agency-admin auth: go/no-go gate for Epic A**
Native creation needs an agency-admin auth surface. It doesn't exist yet — who they are, how they authenticate, and who builds it are all undefined. If this isn't resolved before R1 grooming, Epic A cannot ship. (→ Pow Hwee / Fabian to confirm before pipeline opens)

**🔴 Rejection/outcome state in Epic C: design risk**
The "outcome = rejection" screen is the most emotionally sensitive surface in the release. It needs early design attention — not a schema afterthought. Amber to scope this alongside Epic C's data model pass, not after.

**🟡 Epic B pre-fill is at risk until #18/#41 closes**
Smart pre-fill rides on the competency SSOT endpoint contract between Léo and Kingsley. If that contract slips, B's pre-fill slips with it. Don't treat pre-fill as a given until #18/#41 is finalised.

**🟡 Epic C state machine needs a decision before grooming**
"Submitted → under review → outcome" needs to answer: who triggers each transition — the officer, HR, or the system? Each answer is a different backend shape. Resolve with Pow Hwee before C is groomed, not after.

---

## Explicitly out of R1

- Ringfencing-criteria authoring (re-opens POCDEX write path — blocked on Core #31)
- ATS integration (R2+)
- SJR creation (excluded from MVP ingestion; out unless Mark pulls it in)
- CV upload / CIE inference (OTEP-205, separate capability)
- Opportunity recommender (still hypothesis-stage)

---

## 3 questions to answer in the room

1. **Narrow vs full creation?** Recommend narrow. Does Adrian agree?
2. **Criteria authoring in R1 or R1.5?** Recommend R1.5 — keeps us off the POCDEX blocker.
3. **Agency-admin auth — go/no-go?** If it doesn't exist and no one owns it, Epic A can't ship. Need an answer before pipeline opens. (→ Pow Hwee / Fabian)

---

## After this jam → Mark
Shape agreed here goes straight to Mark for sign-off. Don't start R1 story pipeline until Mark confirms scope.

---

*v2 updated with trio review: capacity constraints named, agency-admin auth elevated to go/no-go gate, rejection state flagged as design risk, pre-fill dependency clarified. Source: r1-jam-draft-v2 (2026-06-22)*
