---
date: 2026-06-22
purpose: Notification bar copy for opportunity detail page
status: Draft — for BO design review
owner: Amber (design), Michelle (PM)
related: OTEP opportunity detail page, Figma frame "Notification"
---

# Opportunity Detail — Notification Bar Copy

---

## Apply Flow Notifications

### Info (Blue)

| Scenario | Copy |
|----------|------|
| Apply via FormSG | "You'll be redirected to a FormSG form to complete your application." |
| Apply via C@G | "You'll be redirected to Careers@Gov to complete your application." |
| Already applied | "You've already submitted an application for this opportunity." |
| Closing soon (≤7 days) | "This opportunity closes on [date]. Submit your application before it expires." |

---

### Warning (Amber)

| Scenario | Copy |
|----------|------|
| Incomplete profile | "Your profile is incomplete. Some fields may not be pre-filled. [Complete your profile]" |

---

### Error (Red)

| Scenario | Copy |
|----------|------|
| FormSG unavailable | "The application form is temporarily unavailable. Contact [name] at [email] for help." |
| Opportunity closed | "This opportunity has closed and is no longer accepting applications." |
| Not eligible | "You're not eligible to apply for this opportunity based on your current role or agency." |

---

## Design Notes

**FormSG contact placeholder:**
"[name] at [email]" should be a dynamic field pulled from the opportunity record or a generic support alias (e.g. otep-support@tech.gov.sg). Avoid hardcoding a personal email (current Figma shows "John Tan at govtech@tech.gov.sg").

**Redirect copy consistency:**
FormSG and C@G notifications use the same pattern — "You'll be redirected to [platform] to complete your application." Keeps the experience predictable regardless of apply path.

**What was corrected:**
FormSG path does NOT route to supervisor. The applicant is redirected directly to FormSG to fill in the form. Earlier copy referencing supervisor endorsement was removed.

---

## Open Questions for BO Review

1. What is the correct support contact for FormSG unavailability? Should it be a generic alias or person-specific?
2. What triggers "not eligible"? Is eligibility checked before the detail page loads, or on apply click?
3. For "closing soon" — what is the threshold? 7 days? 3 days?
4. If an officer has no role profile, what is shown on the card vs. the notification bar?

---

*Draft for Tue 24 Jun design review. Raise open questions with BO before finalising.*
