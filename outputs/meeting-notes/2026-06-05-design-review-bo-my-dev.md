---
date: 2026-06-05
meeting: Design Review with BO — My Development Page
attendees: Imelda (PM), Jacky (BO), Xian Zhang (XZ), Li Ting Kway (GovTech — Designer), Michelle (observer)
type: Design Review
feature: My Development Page (Epic 2)
pm_owner: Imelda
---

# Meeting Notes: Design Review with BO — My Dev Page

**Date:** 5 June 2026

**Attendees:** Imelda (PM owner), Jacky (BO), Xian Zhang (XZ), Li Ting Kway (GovTech — Designer), Michelle (observer)

**Purpose:** Review My Development page design — job grade display, competency labelling, recommended roles, courses swimlane, target roles

---

## Summary

BO reviewed the My Dev page design and raised several UX and data sensitivity concerns. Key decisions: job grade removed from Recommended Roles (sensitivity + subjectivity), courses swimlane logic approved, competency label to be renamed. Two open items remain: XZ to check JD availability in system, and "My Target Roles" section needs a relook. MVP ships without role profile descriptions — UT will validate if needed.

---

## Decisions Made

| Decision | Rationale | Owner |
|----------|-----------|-------|
| Job grade on cards: show grades tied to the chair, using labels officers recognise | Consistency with Profile page understanding | Imelda / Li Ting |
| Rename "competencies tagged to your role" → "My competencies" | Clearer language, officer-centric framing | Li Ting |
| Consider renaming "Saved Target Roles" (current label TBC) | More intuitive label for what the section does | Imelda to confirm |
| Courses swimlane logic approved by Jacky | Logic: look up courses tagged to 3 missing competency gaps, collate in swimlane. If insufficient courses tagged, swimlane does not appear | Confirmed — no action |
| Remove job grade from Recommended Roles | Sensitive information; "chairs" definition is agency-subjective; same role can have officers of different grades | Li Ting to update |
| Role profile descriptions: defer to post-MVP | MVP can ship without. Design UT / user feedback will determine if needed | Imelda |

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Update Recommended Roles design — remove job grade | Li Ting | Before S4 design handoff | 🔴 High |
| Rename competency label to "My competencies" across My Dev page | Li Ting | Before S4 design handoff | 🔴 High |
| Check if JD is available in system to populate role profiles | Xian Zhang (XZ) | Before S5 planning | 🟡 Medium |
| Confirm final label for "Saved Target Roles" section | Imelda | Before next design review | 🟡 Medium |
| Relook "My Target Roles" section — scope and UX intent unclear | Imelda + Li Ting | Before next design review | 🟡 Medium |

---

## Key Discussion Points

### Job Grade Display

Show grades tied to the chair, not the officer's current grade. Language should match what officers see on the Profile page — consistency matters here. If the labels differ between pages, officers lose trust in the data.

### Competency Label Rename

"Competencies tagged to your role" is system-speak. "My competencies" is officer-centric and clearer. Apply consistently across the My Dev page.

### Courses Swimlane Logic (Approved)

Jacky okayed the logic:
- Identify officer's competency gaps (e.g. 3 missing competencies)
- Look up courses in DLE LEARN tagged to those competencies
- Collate in the swimlane

**Edge case confirmed:** If there aren't enough courses tagged to the gap competencies, the swimlane doesn't appear. This is the correct behaviour — don't show an empty swimlane.

### Recommended Roles — Remove Job Grade

Three reasons to remove:
1. Sensitive information — officers may feel uncomfortable seeing grade comparisons
2. "Chairs" definition is agency-subjective — what counts as a chair varies
3. Same role profile can have officers of different grades sitting in it — grade shown would be misleading

Replace with: a short description of what the role profile entails. But defer this to post-MVP — ship without description first, validate via UT whether officers need it.

### My Target Roles — Needs Relook

Section flagged for review. Intent unclear from current design — is this officer-saved roles, recommended roles, or something else? Imelda and Li Ting to align on scope before next review.

### Future Consideration — Job Frac AI

Victor's side flagged as a future possibility. Not in scope for MVP or R1. Note for roadmap backlog.

---

## Open Questions

- [ ] Is the JD available in our system to populate role profile descriptions? — **XZ to check with HR colleagues** — before S5 planning
- [ ] What is the intended UX for "My Target Roles" — officer-saved, system-recommended, or both? — **Imelda + Li Ting** — before next design review
- [ ] Final label for the "Saved Target Roles" section — confirm with BO — **Imelda** — before next design review

---

## Context for Next Steps

- **Li Ting:** Two design updates before S4 handoff — remove job grade from Recommended Roles, rename competency label to "My competencies"
- **Imelda:** Own the "My Target Roles" relook and confirm "Saved Target Roles" label with BO
- **XZ:** JD availability check unblocks role profile descriptions for a future sprint; no urgency for MVP
- **"My Target Roles" relook** is the most ambiguous item — needs Imelda to clarify scope before it goes into design or dev
- **Courses swimlane** is confirmed — no further action needed, Jacky has approved the logic

---

*Notes from Design Review with BO — 2026-06-05 · Li Ting Kway (GovTech) is the designer for My Dev page*
