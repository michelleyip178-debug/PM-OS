---
date: 2026-05-26
time: "~15:00+ (post-design review)"
type: Adhoc Slack / call
---

# Meeting Notes: Adhoc — Pow Hwee on Sprint 3 Planning Prep

**Date:** 2026-05-26
**Time:** Post-design review (~15:00+)
**Type:** Adhoc Slack thread + call
**Attendees:** Michelle (PM), Pow Hwee Tan (Tech Lead)
**Context:** Sprint Planning is Thursday 29 May. Michelle needed user stories approved before the session. Pow Hwee proposed a joint walkthrough first.

---

## Summary

Pow Hwee and Michelle aligned on a pre-sprint-planning story walkthrough. Pow Hwee gave Michelle clear guidance on how to scope Jira ticket creation for Sprint 3: focus on **visible (officer-facing) stories** for tickets; non-visible work (integrations with other squads, batch ingestion jobs) is handled differently and shouldn't be sliced the same way. For estimation, standard read/write stories are straightforward — engineering effort concentrates on non-standard flows and UI aesthetics.

---

## Decisions Made

### 1. Joint story review before Sprint Planning

- **Decision:** Pow Hwee and Michelle will run through Sprint 3 user stories together before Thursday's Sprint Planning session.
- **Why:** Stories need to be approved before planning. Running through them together ensures Pow Hwee has context and can estimate confidently.
- **Call timing:** Agreed on a call after Michelle's design review concluded (post-15:00 on 26 May).

---

## Key Guidance from Pow Hwee — Sprint 3 Jira Tickets

### On visible vs non-visible stories

> Focus on **visible stories** for Jira ticket creation. Non-visible stories are a different category.

| Category | What it is | Ticket approach |
|----------|------------|-----------------|
| **Visible stories** | Officer-facing UI flows — what the user sees and does | Create Jira tickets in the normal way; this is what Michelle should focus on |
| **Non-visible stories** | Integration with other squads (e.g. POCDEX, Imelda's squad), batch ingestion jobs (OTG file import) | Handled differently — not standard officer-facing user stories; ticket shape will vary |

**Implication for Sprint 3 prep:** Michelle should concentrate story-writing effort on the visible (officer-facing) stories. Non-visible backend work (POCDEX plumbing, OTG ingestion) has its own ticket patterns and Pow Hwee's team can lead on those.

### On estimation

> Standard read/write stories are generally straightforward to estimate. Effort concentrates on **non-standard flows** and **aesthetics**.

| Story type | Estimation complexity |
|------------|----------------------|
| Standard CRUD (read/write data) | Low — predictable, Pow Hwee's team can identify patterns quickly |
| Non-standard flows (error states, edge cases, branching logic) | Higher — this is where estimation uncertainty lives |
| Aesthetics / UI polish | Higher — subjective, Thomas-dependent (sole FE), can drag |
| Search stories | Team/Pow Hwee can identify estimation patterns — effort again in unusual flows or aesthetics |

**Implication:** When preparing Sprint 3 stories, flag any non-standard flows or heavy UI requirements explicitly in the ACs. That's where Pow Hwee's team will need to spend more time estimating.

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Prepare Sprint 3 visible stories for joint review with Pow Hwee | Michelle | Before Sprint Planning Thu 29 May | High |
| Complete joint story walkthrough (agreed on call 26 May post-design review) | Michelle + Pow Hwee | Before Sprint Planning Thu 29 May | High |
| Flag non-standard flows and aesthetic-heavy stories explicitly in ACs | Michelle | During story prep | Medium |

---

## Open Questions

- [ ] **Which Sprint 3 stories are "visible" vs "non-visible"?** Visible = officer-facing UI (OTEP-87, OTEP-86, OTEP-317, OTEP-318, OTEP-319); Non-visible = backend plumbing (OTEP-271, OTEP-203, OTEP-192). Confirm split with Pow Hwee.
- [ ] **Search stories (OTEP-318 filter by category, OTEP-289 spike output):** Pow Hwee says patterns can be identified — confirm at story walkthrough whether OTEP-318 gets a standard Jira story or needs a different approach pending the spike result.

---

## Sprint 3 Story Prep Checklist (Michelle)

Based on Pow Hwee's guidance, before the joint walkthrough:

**Visible stories — write and approve:**
- [ ] OTEP-87 — Enhanced detail page (apply CTA only; reconcile Jira ACs with actual scope)
- [ ] OTEP-86 — Filter by opportunity type
- [ ] OTEP-317 — Clear filters and reset view
- [ ] OTEP-318 — Filter by category (conditional on OTEP-289 spike output)
- [ ] OTEP-319 — Apply via FormSG basic redirect (formsg_url confirmed 2026-05-21)

**Non-visible stories — Pow Hwee leads, Michelle reviews:**
- OTEP-192 — Recurring OTG data fetch job (batch ingestion)
- OTEP-271 — Local POCDEX database (Leo, backend plumbing)
- OTEP-203 — Standalone POCDEX API service (Pow Hwee, backend plumbing)

**Flag non-standard flows explicitly** in ACs for: OTEP-87 (apply CTA interaction), OTEP-318 (conditional on taxonomy result), OTEP-319 (redirect + webhook flow).

---

## Links

- [Sprint Status](../../../../PM-skills-ALL-1/00-hub/sprint-status.md)
- [Sprint Calendar](../../../../PM-skills-ALL-1/04-ceremonies/sprint-calendar.md)
- [Tasks Active — Sprint 3 stories](../../../../PM-skills-ALL-1/00-hub/tasks-active.md)

---

*Captured: 2026-05-26 (adhoc Slack + call, post-design review)*
*Source: Slack thread summary*
*Next: Prep visible Sprint 3 stories before Thursday. Use Pow Hwee's visible/non-visible split as the guide for Jira ticket creation.*
