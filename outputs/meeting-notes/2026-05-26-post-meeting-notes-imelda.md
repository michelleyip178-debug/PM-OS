# Post-Meeting Notes for Imelda — 2026-05-26

**Source:** Slack capture post Design Review (14:00–15:00), corrections from Adrian
**Feature:** "My Development" — role recommendation feature for CareerCompass
**Context:** This feature is under Imelda's squad scope, not Opportunities scope. Notes below are for Imelda's team when she is back.

---

## 1. Scope Clarification

"My Development" sits under **Imelda's squad**, not the Opportunities scope. The design review today surfaced several directions for her team's backlog.

---

## 2. Proficiency Levels — Not in MVP, but Narrative Must Be Prepared

**Decision:** Do not show proficiency levels on the My Development page for MVP.

**Problem:** Competency data varies across agencies — some use a 3-point scale, others a 5-point scale. Showing proficiency levels without resolving this would surface inconsistent, misleading data.

**What needs to be done before leadership review:**
- WD (Jacky / WD team) to prepare evidence on the variance across agencies (3-point vs 5-point scale inconsistency)
- Prepare a clear explanation for leadership: we cannot use proficiency levels in MVP until we resolve the value proposition for proficiency levels AND the data standardisation issue
- Frame it as "deferred, not dropped" — the decision is principled, not a capability gap

**Action owner:** WD (Jacky Lee) to provide agency variance data. Imelda's squad to prepare the "deferred, not dropped" narrative with WD input.

---

## 3. "Next Role" Feature — Not MVP, Track JTBD in Backlog

**Decision:** "Next role" feature is out of MVP scope.

**Action:** Track the JTBD (Jobs-to-be-Done) for this feature in the product backlog for future prioritisation.

**What to capture:** Officers want to understand what role they're building toward — the page should eventually support goal-setting, not just role discovery. This is a future-state framing that informs how the MVP is designed (don't close doors on it).

---

## 4. "Roles You May Be Interested In" — Vacancy Indication

**Direction:** For roles that have **open vacancies**, indicate this visually on the role card (e.g. a small icon or label showing openings exist).

**Details page:** Under the role details page, provide **links to the actual job openings** so officers can click through to find out more.

This bridges the gap between role discovery (career planning) and job application (short-term action) — without conflating the two.

---

## 5. Details Page — Gap-Closing Resources

**Direction:** If an officer sees their competency gaps on the role details page, **surface courses, STIPs, or GIGs that can plug those gaps**.

This is a key value-add for the "My Development" framing: not just "here are your gaps" but "here is what you can do about them."

**Data dependency:** Requires mapping between competencies and available learning/development opportunities (courses, STIPs, GIGs). Confirm data availability and linkage with Rama and relevant content owners.

---

## Summary for Imelda

| Item | Direction | Action Needed |
|------|-----------|---------------|
| Proficiency levels | Out of MVP — prep explanation narrative | WD to provide agency variance data; Imelda's squad to draft narrative with WD |
| "Next role" feature | Out of MVP scope | Track JTBD in backlog |
| Vacancy indication | Show visual signal for roles with open postings | Amber to design; link through to job postings on details page |
| Gap-closing resources | Show courses/STIPs/GIGs on details page when gaps are visible | Confirm data linkage (competencies → learning opportunities) |

---

*Captured: 2026-05-26 post-design review*
*Source: Adrian correction + Slack post-meeting note*
*For: Imelda MO (PSD) — My Development feature, CareerCompass*
