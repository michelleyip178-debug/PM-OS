---
week: 2026-W25
week_start: 2026-06-15
week_end: 2026-06-19
quarter: Q2 2026
sprint: Sprint 4 (15–26 Jun 2026) — Week 1 of 2
---

# Weekly Plan — Week of 15 June 2026 (W25)

## TL;DR

- **Top 3:** (1) S4 board stabilised and QA tail cleared, (2) OTG ingestion v3 ACs + 5-category mapping locked, (3) July SteerCo deliverables — North Star brief started
- **Meeting load:** Heavy Monday (5 meetings 10am–5pm); execution windows are mornings Tue–Thu
- **Key milestone:** S4 has a clean foundation by Wednesday. SteerCo prep starts before Friday.

---

## Strategic Context

**Quarter Goal:** MVP go-live week of 19–23 Oct 2026. S4 (15–26 Jun) is dev sprint 4 of 9.

**North Star Progress:** Not formally tracked yet — North Star brief itself is a W25 deliverable.

**This Week's Focus:**
S4 started Monday against two inherited problems: a board not fully reconciled and July SteerCo deliverables with zero momentum for three weeks. This week fixes both. Sprint execution comes first (Mon–Tue), then ingestion unblocks (Tue–Wed), then strategic work starts Thursday even if it means calendar protection.

---

## Top 3 Priorities

### Priority 1: Stabilise S4 board + clear QA carry-in ⭐ Most Important

**Why this matters:**
- Advances: Sprint 4 goal — complete, usable listing experience
- Impact: Without a clean board, the team spends week 1 in cleanup, not delivery
- Risk if not done: QA carry-in items (9 tickets) rot, S4 velocity is lost from day 1

**Success looks like:**
- S4 board reconciled: spine (OTEP-319/86/87/88/89/192) confirmed in sprint
- OTEP-127 and OTEP-130 called in-or-out (not left "un-contracted")
- OTEP-87 AC conflict (FormSG vs C@G deep-link) fixed in Jira
- Keycloak blocker: target date confirmed from Pow Hwee (QA tail depends on this)
- At least 3 of the 9 QA carry-in tickets cleared by Friday

**Key tasks:**
- [ ] Monday AM: Reconcile S4 board — pull spine forward, call OTEP-127/130 in-or-out (Est: 1.5 hrs)
- [ ] Monday AM: Fix OTEP-87 AC conflict in Jira — Pow Hwee flagged twice (Est: 0.5 hr)
- [ ] Monday standup: Get Keycloak target date from Pow Hwee (Est: 15 min)
- [ ] Review + action QA carry-in tickets daily (Est: 1 hr/day × 3 days = 3 hrs)
- [ ] Monday PM / Tuesday AM: Update OTEP-192 ACs to v3 ingestion rules (Est: 1.5 hrs) — Monday has 5 meetings, push to Tue AM if needed

**Dependencies:**
- Needs from: Pow Hwee — Keycloak date, OTEP-87 alignment
- Blocks: Everything in QA is blocked if Keycloak date stays unknown

**Linked to:**
- Sprint goal: complete, usable listing experience
- open-items.md: #26 (WOG AD), #32 (OTEP-110 mismatch)

---

### Priority 2: OTG ingestion unblocks — v3 ACs + 5-category mapping

**Why this matters:**
- Advances: Sprint 4 goal — "trust that data is current and accurate"
- Impact: OTEP-192 is in QA; without locked ACs, Léo can't close it. 5-category mapping gates OTEP-86 grooming.

**Success looks like:**
- OTEP-192 ACs updated to v3 rules (ratified 12 Jun) — Léo has what he needs
- 5-category mapping document delivered to Xian Zhang for validation
- Per-agency remediation reports generated (identifies which agencies need data fixes before launch)
- open-item #41 (endpoint specs Léo + Kingsley) has a meeting booked or async update sent

**Key tasks:**
- [ ] Update OTEP-192 ACs with all 3 rule changes from 12 Jun session (StartDate optional, Function optional, TimeCommitment rules) (Est: 1 hr)
- [ ] Write 5-category mapping logic document → send to Xian Zhang with validation ask (Est: 2 hrs)
- [ ] Run per-agency remediation report — identify which agencies have records that still fail v3 rules (Est: 2 hrs)
- [ ] Ping Léo: confirm hard-skip vs optional field distinction for OTEP-427 (Est: 30 min)

**Dependencies:**
- Needs from: Xian Zhang — validation of 5-category model (gates OTEP-86 and OTEP-289)
- Needs from: Léo → Kingsley — endpoint spec alignment (#41)
- Blocks: OTEP-86 grooming, OTEP-289 go/no-go

**Linked to:**
- open-items.md: #41 (competency dependencies), decisions log (12 Jun ratified rules)

---

### Priority 3: July SteerCo deliverables — start North Star brief

**Why this matters:**
- Advances: Strategic pillar — GK/Mark context for programme health
- Impact: Three weeks with zero progress. SteerCo is in July. If it doesn't start this week, it's a crisis.
- Risk if not done: Arrive at SteerCo with no brief, no transition plan, no gap analysis — this is the pattern that damages credibility with GK and Mark

**Success looks like:**
- North Star brief: structure written, section 1 drafted (what the North Star is and why it matters now)
- Follow-up sent to Mark confirming R1 scope (open-item #40 — needed before R1 sprint planning)
- Transition plan + gap analysis: owner identified and briefed (this does not need to be Michelle's doc to write)

**Key tasks:**
- [ ] Thursday PM (block calendar): Draft North Star brief structure + Section 1 (Est: 2 hrs)
- [ ] Send R1 scope confirmation ask to Mark — reference r1-scope-brief-2026-06-05.md (Est: 30 min)
- [ ] Identify who writes transition plan + gap analysis; brief them and set a deadline (Est: 30 min)

**Dependencies:**
- Needs from: Mark — R1 scope sign-off (#40)
- Blocks: R1 sprint planning, July SteerCo readiness

**Linked to:**
- outputs/decisions/r1-scope-brief-2026-06-05.md
- open-items.md: #40 (R1 scope confirmation)

---

## PRD Pipeline This Week

| PRD | Current Stage | Target by Friday | Action Needed |
|-----|--------------|-----------------|---------------|
| OTEP-192 (OTG ingestion) | QA | QA cleared | Update ACs to v3 rules; Léo to close |
| OTEP-87 (C@G detail) | Grooming | Grooming-ready | Fix AC conflict; competency section gates on #41 |
| Upload module | Discovery | ✅ Done — scope confirmed | Rama sync done 15 Jun. MVP = happy flow only (select type, attach file, confirmation screen). No validation error UI. Rama taking S5 inclusion decision to Pow Hwee. Update OTEP-397 spike ACs before S5 grooming. |
| North Star brief | Not started | Section 1 drafted | Thursday protected block |

---

## Key Meetings (Week of 15 Jun)

| Day | Meeting | Purpose | Prep Needed |
|-----|---------|---------|-------------|
| Mon 10:00 | OTG H/O Session 2 — IM8 Log + Account Lifecycle | Jobelle handover W1 session | Light |
| Mon 11:00 | OTEP standup (S4 Day 1) | Board reconciliation, Keycloak date, OTEP-87 AC | Yes |
| Mon 15:00 | OTEP Product × BO Working Level | Ringfencing sign-off (#43), opportunity type model | Yes |
| Mon 16:00 | OTEP Retro and Demo | S3 retrospective + demo | Light |
| Mon 17:00 | PM Weekly catchup | R1 updates, cross-PM sharing | Light |
| Tue–Fri | Daily standup | QA carry-in status, sprint pulse | No |
| Thu PM | [Protected block] | North Star brief Section 1 | — |
| ✅ Mon 15 Jun | Rama sync (done) | Upload module discovery | Scope confirmed: happy flow only. Notes: 2026-06-15-W25-file-upload-rama-sync.md |
| TBC | Amber flow walkthrough | End-to-end flow review (#45) | Yes |

**Meeting load:** Heavy Monday (5 meetings, 10am–5pm back-to-back). Tue–Fri lighter — morning execution blocks available.

---

## Carry-Over from Last Week (W24)

**Carried over:**
- [ ] OTEP-127/130 in-or-out call — still un-contracted (W24 → W25)
- [ ] OTEP-87 AC fix — Pow Hwee flagged twice (W24 → W25)
- [ ] S4 board reconciliation — carried from Friday EOD (W24 → W25)
- [ ] North Star brief — zero progress for 3 weeks (W22–W24 → W25, now urgent)
- [ ] Mark R1 scope follow-up — not started (W24 → W25)
- [ ] OTG monthly progress report — was due Wed 10 Jun, still outstanding (overdue → W25)

**Learnings applied:**
- "Priority 3 loses to operational urgency every week" → Thursday PM is blocked for SteerCo work before the week starts. Proactive, not reactive.
- S4 board must be clean Monday AM — not Friday EOW handover.

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Keycloak blocker has no target date | Ask Pow Hwee at Monday standup; escalate to Adrian if no date by Tuesday |
| ~~Rama interview not yet booked~~ | ✅ Done 15 Jun — scope confirmed, happy flow only |
| North Star brief loses to execution again | Thursday PM block confirmed before Tuesday meetings fill the calendar |
| Xian Zhang 5-category validation takes >1 week | Send with a "validate by Friday or flag blockers" ask |
| OTG monthly progress report overdue (was due 10 Jun) | Monday too full — write and send Tuesday AM, first task |

---

## Strategic Pillar Balance

| Pillar | This Week | Trend |
|--------|-----------|-------|
| Sprint delivery (listing experience) | 50% | → Core |
| OTG ingestion (data accuracy) | 30% | → On track |
| Strategic / SteerCo (North Star, R1) | 20% | ↑ Recovering after 3 weeks of zero |

---

## Success Metrics

**How we'll know this week was successful:**
1. S4 board is clean (spine confirmed, OTEP-127/130 called, OTEP-87 AC fixed) by Tuesday EOD
2. OTEP-192 ACs updated and 5-category mapping sent to Xian Zhang by Wednesday
3. North Star brief Section 1 exists as a written document by Friday

**Leading indicators to check mid-week (Wed):**
- QA tickets moving: at least 3 of 9 carry-in items closed
- Keycloak target date confirmed from Pow Hwee
- Rama interview booked (if not already done)

---

*Generated: 2026-06-15. Updated: 2026-06-15 (calendar synced — 5 meetings Monday confirmed).*
*Source: W24 weekly review, sprint-status.md, tasks-active.md, open-items.md, risks.md, Google Calendar API*
*Next: Run `/daily-plan` each morning. Run `/jira-sync` after S4 sprint is activated in Jira.*
