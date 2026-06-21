---
date: 2026-06-18
week: W25
meetings: 2
generated_by: /meeting-cleanup
---

# Meeting Cleanup — 18 Jun 2026 (W25)

**Meetings today:** 2

**Total action items:** 15

**Michelle-owned:** 13

**Waiting on others:** 2

---

## Meeting Summaries

### 1. Check-in with Jace (1:1 coaching / mid-year prep)

- Jace framed OTEP work into three assessable outcome areas: opportunities data pipeline + funnel, auth/authorisation as its own stream, and process standardisation
- Every KR needs a number or artifact that evidences the outcome — "we did the work" is not enough for assessment
- Weekly Thursday morning check-ins agreed; Jobelle assigned OTG report reconciliation as first substantive task

### 2. S5 Backlog Grooming (opportunity type recategorisation)

- Ticket grooming did not proceed — DevOps decision to merge STIP + Gig into one type blocked all S5 stories that reference the current type structure
- Recommended approach agreed: display label merge now (Step 1, S5), data model cleanup pre-R1 (Step 2)
- Grooming of OTEP-408, 409, 390, 304, 87 carries to S5 grooming Thu 26 Jun

---

## All Decisions Made Today

| Decision | Meeting | Owner |
|----------|---------|-------|
| Weekly Thursday morning check-ins (Michelle + Jace) — KR progress + Jobelle onboarding | Jace check-in | Michelle to set up |
| Auth/authorisation treated as a distinct KR outcome area — POCDEX side only, not WOG AD | Jace check-in | Michelle |
| Jobelle assigned to OTG report reconciliation; gradually introduced to risk, ceremonies, AI tools | Jace check-in | Michelle |
| Opportunity type recategorisation: Option A + C — display label merge now, data model cleanup pre-R1 | S5 grooming | Michelle |
| S5 ticket grooming deferred pending DevOps confirmation of type model | S5 grooming | Michelle |

---

## Michelle's Action Items (Consolidated)

**🔴 Must do before 22 Jun (mid-year check-in window opens)**

- [ ] Define KRs for opportunities outcome — click-through funnel targets, pipeline live metric (list views → detail → apply clicks) — *from Jace check-in*
- [ ] Define KRs for auth/authorisation outcome — 100% auto-provisioning, 0% unauthorised access, login success rate — *from Jace check-in*
- [ ] Document Michelle's scope on auth vs other teams — epic or scope doc — *from Jace check-in*
- [ ] Confirm tracking is live for list views, view→detail clicks, apply clicks (FormSG) — check with Thomas/Léo — *from Jace check-in*

**🔴 Must do before S5 grooming (26 Jun)**

- [ ] Have DevOps conversation — Q1: is OTG Excel `type` field value changing, or display-label only? Q2: what is the new merged type name? — *from S5 grooming; blocks everything below*
- [ ] Once name confirmed: update OTEP-86 AC to reflect merged type name — *OTEP-86 in QA; cannot be marked Done until this is done*
- [ ] Reschedule S5 ticket grooming for OTEP-408, 409, 390, 304, 87 — *from S5 grooming*

**🟠 Before S5 dev starts / S5 design lock**

- [ ] Update OTEP-87 and OTEP-319 story ACs — remove separate STIP/Gig references, replace with merged type name — *from S5 grooming*
- [ ] Draft merged type description for OTEP-386 modal — one entry covering both short-term attachment and project-based task concepts — *from S5 grooming*
- [ ] Brief Jobelle on OTG report reconciliation task — *from Jace check-in*

**🟡 This week / W26**

- [ ] Frame process improvement KR — name one specific SOP or ceremony change with before/after evidence from retros — *from Jace check-in*
- [ ] Log Option B (data model cleanup) as a pre-R1 backlog story — *from S5 grooming*
- [ ] Clarify with Jace/Adrian: is there a shared metrics dashboard all PMs feed into, or does Michelle set up her own? — *from Jace check-in*

---

## Waiting On Others

| Person | Action | Due | From |
|--------|--------|-----|------|
| Amber | Update filter chip design — merge STIP + Gig into one chip | Once type name confirmed | S5 grooming |
| Imelda | Sharpen course aggregator problem statement — what user pain does it solve that HRPS/Cumulus/CSC don't? | No hard deadline | Jace check-in |

---

## Cross-Meeting Intelligence

### Recurring theme: Michelle's scope clarity

Both meetings today pushed on the same thing — what Michelle owns specifically vs what other teams deliver. Jace's framing for mid-year KRs and the grooming blocker both require Michelle to be explicit about her own contribution. The auth/authorisation scope doc (Jace check-in action) and the DevOps conversation (grooming action) are both expressions of this pattern. Do both this week before they compound.

### Stakeholder load

| Person | Action items today | Key asks |
|--------|-------------------|----------|
| Michelle | 13 | KR drafting, DevOps conversation, AC updates |
| Amber | 1 | Filter chip Figma update (blocked on type name) |
| Imelda | 1 | Course aggregator problem statement |

No overload risk for others. Michelle's load is high but most items have a clear sequence — DevOps conversation first, everything else follows.

### Timeline check

- **Mid-year check-in window opens 22 Jun** — 4 days away. KR drafting (4 items) must start today or tomorrow.
- **S5 grooming Thu 26 Jun** — 8 days away. DevOps conversation must happen by ~23 Jun to leave time for AC updates and Amber's design changes before grooming.
- **S5 planning Thu 25 Jun** — OTEP-86 AC must be updated before this date or the story cannot be confirmed Done.
- No timeline conflicts detected between the two meetings.

### Missing follow-ups from prior meetings

- **Open item #43** (BO sign-off on ringfencing UX) — not raised in today's grooming. Still open, due before S5 grooming 26 Jun. Five BO questions outstanding.
- **Open item #45** (flow walkthrough with Amber) — not resolved. Amber to confirm date; overdue.
- **Open item #30** (CSC SSO feasibility deep-dive) — not progressed today. Still blocked.

---

## Parking Lot

- Course aggregator problem statement — Jace challenged it directly. No user research backing it yet. Not actionable until Imelda sharpens the framing.
- Does the SJR filter chip show (empty) or hide entirely at MVP? — raised in grooming, not resolved. Tied to BO sign-off (#43).
- Is there a shared PM metrics dashboard? — Michelle to clarify with Jace or Adrian.

---

*Cleanup: Michelle · 18 Jun 2026 · 2 meetings · 15 action items*
