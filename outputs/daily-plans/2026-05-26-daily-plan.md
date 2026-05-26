---
date: 2026-05-26
day: Tuesday
week: 2026-W22
mcps_used: [none — file-based context]
---

# Daily Plan - Tuesday, May 26, 2026

## TL;DR

- **Meetings:** 4 today — OTEP Squad Sync (09:30), standup/dental conflict (11:00), Design Review (14:00)
- **P0 Tasks:** 3 — BO notes (unfiled from last night), CSC SSO ping status, design review follow-up
- **Key Focus:** Design review at 14:00 is the focal point. Leave with decisions on CSC SSO and flow sign-offs. Everything else is in service of that.

---

## Today's Three

*If I only accomplish three things today:*

1. [ ] **Write BO Strategic Review notes** — context from last night's 16:30 session is fading. Do before standup.
2. [ ] **14:00 Design Review — surface CSC SSO decision and get flow sign-offs** — week's key milestone
3. [ ] **Send post-design review async follow-up to Xian Zhang + Jacky** — they value it; it locks in decisions

*Why these three:* The design review is where scope decisions get made for Sprint 3+. Everything this week feeds into or flows from it. The BO notes are the one carry-over that'll be lost if not captured today.

---

## Schedule & Meeting Prep

| Time | Meeting | Prep Status | Context |
|------|---------|-------------|---------|
| 09:30–10:30 | OTEP Squad Sync | ✅ Ready | Full team sync — check POCDEX + WOG AD status going into design review day |
| 11:00–11:15 | OTEP Team 2 Stand-up | ⚠️ Conflict | Overlaps with dental (11:00–12:00) — join first 15 min or send async update |
| 11:00–12:00 | Dental + Tofu grooming | Personal | Hard block |
| 14:00–15:00 | Weekly Design Review with BO | ✅ Prepped | Week's most important meeting — Xian Zhang + Jacky. Surface CSC SSO + flow sign-offs |

### Free Blocks

- **Before 09:30** (early morning) → Write BO Strategic Review notes from last night — do this first
- **10:30–11:00** (30 min) → Confirm Pow Hwee CSC SSO ping sent; final design review mental prep
- **12:00–14:00** (2 hrs) → Post-dental buffer; last review of design review talking points
- **15:00 onwards** → Post-design review: async follow-up for Xian Zhang + Jacky; capture meeting notes

---

## Meeting Context

### 11:00 — OTEP Team 2 Standup

**Attendees:** Pow Hwee Tan (Tech Lead), Adrian Ang (PO), Rama Moorthy (+ Leo, Thomas, Rathika, Amber)

**What to check before standup:**
- Has Pow Hwee responded on CSC SSO Step 2 feasibility? (sent last night — or was it? see Heads Up)
- Rathika: still blocked on COMET provisioning?
- Leo (OTEP-313), Thomas (OTEP-325/326): any blockers surfaced overnight?

**Your goal:** Quick temperature check. If Pow Hwee has an answer on CSC SSO, note it — you need it for 14:00.

---

### 14:00 — Weekly Design Review

**Attendees:**
- **Xian Zhang** (Business Stakeholder) — comes prepared to decide, not just advise. Expects explicit option-and-tradeoff framing. Values async follow-up after the review.
- **Jacky** (Business Stakeholder) — same as Xian Zhang. Both are in the room to make calls.

**Prep done (from yesterday):**
- CSC SSO recommendation ready: deprioritise = officers log in twice, manageable friction, relieves October pressure. If Pow Hwee confirms infeasibility, the decision is made by default — present cleanly.
- Flows for active features — know the open decision points so you can facilitate, not just observe.
- Post-meeting note structure ready to fill quickly after.

**What to bring explicitly:**
- [ ] CSC SSO: Cut from MVP or keep? (State Pow Hwee's answer if received; present Michelle's position if not)
- [ ] Any deferred design decisions — table them now
- [ ] Written follow-up draft — have it 80% ready before the meeting ends

**Your goal:** Leave with decisions, not open loops. For anything that can't be decided today — get a named owner and a date.

**After the meeting:**
- Draft async follow-up for Xian Zhang + Jacky (email or Slack) summarising decisions + next steps
- Run `/meeting-notes` to capture structured notes

---

## Tasks by Priority

### P0 — Must Do Today

- [ ] **Write BO Strategic Review notes** — meeting was last night (16:30 Mon). Notes not yet filed. Key things to capture: sticky placement decisions on Opportunities and Courses rows, R1/R2 rationale (verbal), any North Star modifications. Context is fading — do this first.
  - Time estimate: 30–45 min
  - Suggested time: 9:00–9:45am
  - Save to: `outputs/meeting-notes/2026-05-25-bo-strategic-review-notes.md`

- [ ] **Confirm Pow Hwee CSC SSO ping was sent** — yesterday's evening plan listed it as unsent. If not sent, send now before standup. Updated question: does WOG Auth cover the SSO layer DLE needs, or is additional build required?
  - Time estimate: 5 min
  - Do first thing

- [ ] **Post-design review async follow-up** — Xian Zhang values this. Draft before 14:00 (structure only), fill in immediately after.
  - Time estimate: 15 min prep + 15 min post-meeting
  - Template: Decisions made, open items with owners, next steps

### P1 — Important This Week

- [ ] **Reach out to Daryll to schedule POCDEX planning session** — action from Pow Hwee adhoc (Mon). Pow Hwee to arrange after Wednesday; session earliest Thu/Fri. Check with Pow Hwee if he's sent this or if you need to.
  - Deadline: This week (W22)

- [ ] **Check with Acacia on POCDEX data model familiarity** — flagged by Pow Hwee. Want to go into Daryll session prepared on the data side.
  - Deadline: Before Daryll session (Thu/Fri)

- [ ] **OTEP-87 and OTEP-318 AC alignment** — needed before Sprint 3 grooming. Depends on Designer availability. If no design review slot covers this today, schedule a separate async with Designer.

### P2 — If Time Allows

- [ ] Begin WOG Auth success metrics — committed to Adrian this week. Grounded in Dec'26 OKR baselines from the BO deck (% who registered for a course via CareerCompass). Start Thursday at latest.
- [ ] Write user story: opportunity matching using competencies — flagged by Pow Hwee. Not yet in backlog. For next sprint planning.

---

## Heads Up

⚠️ **Standup/dental conflict at 11:00** — OTEP standup (11:00–11:15) overlaps with dental (11:00–12:00). Options: join standup first 15 min before leaving, or send async Slack update to team before 11:00.

⚠️ **Pow Hwee CSC SSO ping status unknown** — last night's plan listed it as still unsent at 16:30. Confirm before Squad Sync at 09:30. If not sent, send now — you need his answer before 14:00.

⚠️ **BO Strategic Review notes not filed** — the 16:30 meeting happened but no notes file exists. Do this before the day accelerates. A prep doc exists at `outputs/meeting-notes/2026-05-25-bo-strategic-review-prep.md` — use it as a scaffold.

⚠️ **CSC SSO answer may still be pending at 14:00** — if Pow Hwee hasn't responded by then, Michelle's position (deprioritise, manageable friction) is the default recommendation. Don't wait — present it cleanly with "pending Pow Hwee confirmation."

⚠️ **Thursday job family model discussion (WD x DO)** — action item from Monday's Pow Hwee adhoc. Attend/track. POCDEX requirements depend on its outcome.

⚠️ **Do NOT respond to Gemma (LD team) without Jace/Adrian alignment** — carry-over from yesterday.

---

## Open Loops (Week View)

| Item | Owner | Due | Status |
|------|-------|-----|--------|
| CSC SSO feasibility (Step 2) | Pow Hwee | Before 14:00 today | ❓ Ping sent? Confirm first thing |
| BO Strategic Review notes | Michelle | Today | ❌ Not filed — do now |
| Full integration task list | Pow Hwee (via Rama) | Before next standup | Pending |
| Additional resource beyond Fanxu | Rama + Barry Lim | This sprint | In progress |
| Fullstack developer Sprint 4 | Rama | Sprint 4 | ✅ Confirmed — 3 fullstack engineers |
| WOG Auth success metrics | Michelle | This week | Not started |
| POCDEX planning session (Daryll) | Michelle | This week | Not started — check with Pow Hwee |
| WOGAD domain submission status | Michelle | Confirm | Sent, pending CIO approval |
| Check with Acacia (POCDEX data model) | Michelle | Before Daryll session | Not started |
| OTEP-87 + OTEP-318 ACs | Michelle + Designer | Before Sprint 3 grooming | Not started |

---

## Strategic Alignment Check

**How today advances W22 priorities:**
- Priority 1 (CSC SSO scope + WOG Auth Sprint 4 prep): Design review + Pow Hwee answer closes this
- Priority 2 (Design review prep + grooming foundation): Today IS the design review — this is it
- Priority 3 (POCDEX risk containment): Daryll outreach still pending — do this week

**Week milestone check:**
> *"By Friday, CSC SSO scope is decided, Sprint 3 grooming items have clear ACs, and POCDEX go-live support has a plan"*

- CSC SSO: On track to close today if Pow Hwee responds
- Sprint 3 ACs: OTEP-87 and OTEP-318 still open — needs action this week
- POCDEX planning session: Not yet scheduled — reach out to Daryll today or tomorrow

---

*Generated: 2026-05-26 morning*
*MCPs used: Google Calendar API (token refresh via refresh_token)*
*Next: Run `/meeting-notes` after standup and design review. Write BO notes first thing.*
