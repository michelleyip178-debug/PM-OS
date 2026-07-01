---
week: 2026-W22
week_start: 2026-05-25
week_end: 2026-05-31
quarter: Q2 2026
---

# Weekly Plan - Week of May 25, 2026

## TL;DR

- **Top 3:** (1) Resolve CSC SSO scope decision + WOG Auth Sprint 4 prep, (2) Design review prep + Sprint 3 grooming foundation, (3) POCDEX risk containment + Daryll planning session
- **Meeting load:** Light-Medium — Tuesday design review (14:00) is the week's key moment
- **Key milestone:** By Friday, CSC SSO scope is decided, Sprint 3 grooming items have clear ACs, and POCDEX go-live support has a plan

---

## Strategic Context

**Quarter Goal:** Ship OTEP MVP — WOG Auth, Opportunities Listing, FormSG integration — working end-to-end by October 2026.
**North Star:** Automated account creation via POCDEX + officer applications submitted via OTEP (baseline not yet pulled for FormSG channel migration).

**This Week's Focus:**
Sprint 2 is active and building. The pressure is upstream: CSC SSO is a blocking scope decision that has to land before Sprint 4 planning, POCDEX is now an Epic and the first external risk that can slip the October date, and the design review on Tuesday is where Xian Zhang and Jacky make real decisions. Getting clear on these three things makes the next 6 weeks run better.

---

## Top 3 Priorities

### Priority 1: Resolve CSC SSO scope + WOG Auth Sprint 4 prep ⭐ Most Important

**Why this matters:**
- Advances: October launch — WOG Auth is MVP P0 and Sprint 4 items need to be groomed soon
- Impact: CSC SSO is unresolved; Xian Zhang and Jacky can't get a clean recommendation at the design review if it's still open
- Risk if not done: Sprint 4 WOG Auth grooming lands without clarity on scope or ACs, causing rework

**Success looks like:**
- Pow Hwee has confirmed feasibility of seamless WOG AD → CSC SSO (yes or no)
- If not feasible: CSC SSO is formally cut from MVP scope, decision documented
- WOG Auth open items resolved or owner-assigned: OTEP-110 (Jira/PRD AC mismatch), session timeout value, WOGAD approval status confirmed

**Key tasks:**
- [ ] Ping Pow Hwee on CSC SSO feasibility — need answer before Tuesday design review (Est: 15 min) - **Leverage**
- [ ] Once Pow Hwee responds: document the scope decision in `outputs/decisions/` (Est: 30 min) - **Leverage**
- [ ] Confirm WOGAD domain submission has been sent — if pending CIO approval, note status and set a follow-up date (Est: 15 min) - **Neutral**
- [ ] Prep OTEP-110 for Sprint 4 grooming: resolve whether OTEP shows error UI or WOG AD handles all error states (Est: 30 min — async with Pow Hwee or Engineering) - **Leverage**

**Dependencies:**
- Pow Hwee: CSC SSO technical assessment → due before Tuesday 14:00 design review
- Engineering (Pow Hwee): OTEP-110 AC clarification

**Linked to:**
- PRD: `context-library/prds/wog-authentication.md`
- Meeting notes: `meeting-notes/2026-05-25-W22-otep-standup-slack.md`

---

### Priority 2: Design review prep + Sprint 3 grooming foundation

**Why this matters:**
- Advances: October launch — design review is where scope decisions get made; Sprint 3 grooming lands next
- Impact: A well-prepped design review means Xian Zhang and Jacky leave with decisions, not open loops. Sprint 3 items that land without ACs cause sprint disruption.

**Success looks like:**
- Tuesday design review: flows presented, decision points surfaced explicitly, CSC SSO recommendation ready (pending Pow Hwee)
- OTEP-87 (detail page apply CTA + competencies) Jira/PRD AC mismatch identified and resolved before Sprint 3 grooming
- OTEP-318 (filter by category) ACs drafted and ready for grooming

**Key tasks:**
- [ ] Prep design review deck/talking points: surface flows, options, and decision points for Xian Zhang + Jacky (Est: 1-2 hrs) - **Leverage**
- [ ] Resolve OTEP-87 AC mismatch — align Jira ACs with actual US-08 intent before Sprint 3 (Est: 45 min with Designer/Pow Hwee) - **Leverage**
- [ ] Draft ACs for OTEP-318 (filter by category) with Designer (Est: 30 min) - **Neutral**
- [ ] Confirm search scope (US-02): defer or build in Sprint 3? Bring to grooming with a recommendation. (Est: 30 min) - **Leverage**

**Dependencies:**
- Designer: OTEP-87 and OTEP-318 AC work
- CSC SSO answer (Priority 1) feeds into Tuesday design review recommendation

**Linked to:**
- PRD: `context-library/prds/opportunities-listing.md`, `context-library/prds/wog-authentication.md`
- Stakeholders: Xian Zhang, Jacky (Tuesdays 14:00 design review)

---

### Priority 3: POCDEX risk containment + Daryll planning session

**Why this matters:**
- Advances: October launch — POCDEX is P0 and now elevated to Epic; ringfencing and account creation both depend on it
- Impact: OTEP is the first project on the POCDEX API with no established support structure. Without a planning session with Daryll, go-live support is undefined.

**Success looks like:**
- Planning session scheduled with Daryll (POCDEX Team Lead) to clarify go-live support structure
- OTEP-202 (seed database) timeline confirmed — unblocks ringfencing validation in Sprint 4
- POCDEX Sprint 3 plumbing (OTEP-271, OTEP-203) is on track; any blockers surfaced

**Key tasks:**
- [ ] Reach out to Daryll to schedule a planning session — go-live support + support structure (Est: 15 min) - **Leverage** *(Pow Hwee to arrange after Wednesday — session earliest Thu/Fri)*
- [ ] Confirm OTEP-202 (seed database) timeline with POCDEX team — when will it be ready? (Est: async message) - **Leverage**
- [ ] Check Sprint 3 POCDEX plumbing tickets (OTEP-271, OTEP-203) — any blockers to surface? (Est: 15 min) - **Neutral**

**Dependencies:**
- Daryll: POCDEX team planning session
- POCDEX team: OTEP-202 timeline

**Linked to:**
- PRD: `context-library/prds/pocdex.md`
- Meeting notes: `meeting-notes/2026-05-25-W22-otep-standup-slack.md`

---

## PRD Pipeline This Week

| PRD | Status | Action Needed |
|-----|--------|---------------|
| WOG Authentication | Building — Sprint 4+ | Resolve OTEP-110 AC mismatch; confirm WOGAD domain submission status |
| POCDEX Integration | Building — Sprint 3 active | Schedule Daryll planning session; confirm OTEP-202 timeline |
| Opportunities Listing | Building — Sprint 2 active | OTEP-87 and OTEP-318 ACs before Sprint 3 grooming; search scope decision |
| FormSG Integration | Scoping | Pre-fill question (Pow Hwee) still open — unblocks Sprint 5 scope |

---

## Key Meetings

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon | OTEP Team 2 Standup | Context from Friday 22 May Slack — POCDEX elevated to Epic, CSC SSO flagged; standup today upcoming | N/A |
| Tue | Design Review (14:00) — Xian Zhang, Jacky | Surface flows + decisions for approval | Yes — Priority 2 prep |
| (TBC) | Jace weekly quick update | Flag CSC SSO status, POCDEX risk, resource update | Once CSC SSO answer received |

**Meeting load:** ~3-5 hours / week — plenty of deep work capacity
**Deep work capacity:** High — use Tuesday morning for design review prep

---

## Carry-Over from Last Week

Previous W22 plan was PM OS setup — that work is now done. Carrying forward from today's standup:

- [ ] Pow Hwee: Confirm CSC SSO technical feasibility — **overdue by Tuesday 14:00** if it's to feed the design review
- [ ] Rama: Get full integration task list from Pow Hwee — feeds resource planning
- [ ] Rama: Discuss additional resource beyond Fanxu with Barry Lim
- [x] Rama: Confirm fullstack developer joining Sprint 4 — ✅ Confirmed, 3 fullstack engineers from Sprint 4 onwards

---

## Risks & Mitigations

- **Risk: CSC SSO answer doesn't arrive before Tuesday design review**
  - Mitigation: Surface it explicitly in the design review as "pending engineering assessment" — present Michelle's position (deprioritising = officers log in twice, manageable friction) as the default recommendation if Pow Hwee doesn't confirm in time
- **Risk: POCDEX external delay**
  - Mitigation: Escalate through Rama if OTEP-202 timeline slips; this is the dependency that cascades into ringfencing (Sprint 4) and the October date
- **Risk: Sprint 3 grooming lands with unresolved ACs**
  - Mitigation: Close OTEP-87 and OTEP-318 this week — if grooming is imminent, these must be done first

---

## Success Metrics

**How we'll know this week was successful:**
1. CSC SSO scope is decided (Pow Hwee answered, decision documented)
2. Tuesday design review: Xian Zhang and Jacky left with decisions, not open loops
3. POCDEX planning session with Daryll is scheduled (not necessarily held)

**Leading indicators to check mid-week:**
- Has Pow Hwee responded on CSC SSO? (check by Tuesday morning)
- Are OTEP-87 and OTEP-318 ACs ready for Sprint 3 grooming?

---

*Generated: 2026-05-25*
*Context: Setup week is done. This plan is operational — OTEP work only.*
*Next: Run `/daily-plan` each morning. Run `/weekly-review` Friday May 29.*
