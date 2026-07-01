---
week: 2026-W25
week_start: 2026-06-15
week_end: 2026-06-19
quarter: Q2 2026
sprint: Sprint 4 (15–28 Jun 2026) — Week 1 of 2
---

# Weekly Plan — Week of 15 June 2026 (W25)

## TL;DR

- **Top 3:** (1) S4 board stabilised and QA tail cleared, (2) OTG ingestion v3 ACs + 4-category mapping locked, (3) co-prep the SteerCo demo with Imelda/Rama/Pow Hwee
- **Meeting load:** Heavy Monday (5 meetings 10am–5pm); execution windows are mornings Tue–Thu
- **Key milestone:** S4 has a clean foundation by Wednesday. SteerCo prep starts before Friday.

---

## Strategic Context

**Quarter Goal:** MVP go-live week of 19–23 Oct 2026. S4 (15–28 Jun) is dev sprint 4 of 9.

**North Star Progress:** Not formally tracked yet. The North Star brief is owned by another team (for-info SteerCo deliverable), not Michelle.

**This Week's Focus:**
S4 started Monday against an inherited problem: a board not fully reconciled. This week fixes that. Sprint execution comes first (Mon–Tue), then ingestion unblocks (Tue–Wed). The SteerCo demo co-prep with Imelda/Rama/Pow Hwee runs alongside — Michelle co-preps her listing slice into the consolidated narrative; she does not own the SteerCo deck.

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

### Priority 2: OTG ingestion unblocks — v3 ACs + 4-category mapping

**Why this matters:**
- Advances: Sprint 4 goal — "trust that data is current and accurate"
- Impact: OTEP-192 is in QA; without locked ACs, Léo can't close it. 4-category mapping gates OTEP-86 grooming.

**Success looks like:**
- OTEP-192 ACs updated to v3 rules (ratified 12 Jun) — Léo has what he needs
- 4-category mapping document drafted; delivery to Xian Zhang gated on the Mon (22 Jun) DevOps chat confirming the OTG type-prefix fix (D 2026-06-04)
- Per-agency remediation reports generated (identifies which agencies need data fixes before launch)
- open-item #41 (endpoint specs Léo + Kingsley) has a meeting booked or async update sent

**Key tasks:**
- [ ] Update OTEP-192 ACs with all 3 rule changes from 12 Jun session (StartDate optional, Function optional, TimeCommitment rules) (Est: 1 hr)
- [ ] Draft 4-category mapping logic document this week; **send to Xian Zhang after Mon 22 Jun DevOps chat** confirms the OTG type-prefix fix (Est: 2 hrs)
- [ ] Run per-agency remediation report — identify which agencies have records that still fail v3 rules (Est: 2 hrs)
- [ ] Ping Léo: confirm hard-skip vs optional field distinction for OTEP-427 (Est: 30 min)

**Dependencies:**
- Needs from: DevOps/DT — OTG type-prefix fix confirmed at Mon 22 Jun chat (gates the 4-cat mapping before it can go to Xian Zhang)
- Needs from: Xian Zhang — validation of 4-category model (gates OTEP-86 and OTEP-289)
- Needs from: Léo → Kingsley — endpoint spec alignment (#41)
- Blocks: OTEP-86 grooming, OTEP-289 go/no-go

**Linked to:**
- open-items.md: #41 (competency dependencies), decisions log (12 Jun ratified rules)

---

### Priority 3: Co-prep the SteerCo demo (with Imelda, Rama, Pow Hwee)

> **Scope corrected 2026-06-19:** The SteerCo deck and deliverables (North Star brief, transition plan, gap analysis) are **not Michelle's** — they're for-info and owned by other teams. Michelle's job is to **co-prep the consolidated-narrative demo** for the Mark/GK session (per the 2 Jun two-tier demo decision). Michelle co-preps; others present.

**Why this matters:**
- Advances: Programme-health visibility to GK/Mark via a coherent cross-squad demo
- Impact: The Mark/GK session uses a consolidated narrative where PMs cover each other's parts — needs joint prep across the trio, not a solo deck
- Risk if not done: A disjointed demo where workstreams don't hang together; Michelle's listing slice not rehearsed into the shared story

**Success looks like:**
- Michelle's S4 slice is demo-ready: the "usable listing experience" (cards, detail, filters, login/logout, open/closed, error states — 20 Done) framed as a clean narrative beat
- Trio aligned on the consolidated flow: who covers what, the through-line across Imelda's, Rama's, and Michelle's parts
- R1 scope ask sent to Mark (#40) — still Michelle's, separate from the demo

**Key tasks:**
- [ ] Sync with Imelda, Rama, Pow Hwee on the consolidated demo narrative + segment ownership (Est: 1 hr)
- [ ] Prep Michelle's listing-experience demo beat — script + what to show (Est: 1 hr)
- [ ] Send R1 scope confirmation ask to Mark — reference r1-scope-brief-2026-06-05.md (Est: 30 min)

**Dependencies:**
- Needs from: Imelda / Rama / Pow Hwee — alignment on the shared narrative
- Needs from: Mark — R1 scope sign-off (#40, separate from demo)
- Open: SteerCo / Mark-GK demo date not pinned in trackers — confirm

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
| TBC | SteerCo demo co-prep | Align consolidated narrative w/ Imelda, Rama, Pow Hwee | Yes |
| ✅ Mon 15 Jun | Rama sync (done) | Upload module discovery | Scope confirmed: happy flow only. Notes: 2026-06-15-W25-file-upload-rama-sync.md |
| TBC | Amber flow walkthrough | End-to-end flow review (#45) | Yes |

**Meeting load:** Heavy Monday (5 meetings, 10am–5pm back-to-back). Tue–Fri lighter — morning execution blocks available.

---

## Carry-Over from Last Week (W24)

**Carried over:**
- [ ] OTEP-127/130 in-or-out call — still un-contracted (W24 → W25)
- [ ] OTEP-87 AC fix — Pow Hwee flagged twice (W24 → W25)
- [ ] S4 board reconciliation — carried from Friday EOD (W24 → W25)
- [ ] Mark R1 scope follow-up — not started (W24 → W25)
- [x] OTG monthly progress report — ✅ Delegated to Jobelle 2026-06-17. Jobelle to own going forward.

**Learnings applied:**
- "Priority 3 loses to operational urgency every week" → protect a block for demo co-prep before the week fills. (Note: the North Star brief that drove this for 3 weeks was never Michelle's — corrected 19 Jun.)
- S4 board must be clean Monday AM — not Friday EOW handover.

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Keycloak blocker has no target date | Ask Pow Hwee at Monday standup; escalate to Adrian if no date by Tuesday |
| ~~Rama interview not yet booked~~ | ✅ Done 15 Jun — scope confirmed, happy flow only |
| SteerCo demo not rehearsed into shared narrative | Sync with trio early; prep Michelle's listing beat before the demo date is on top of her |
| 4-cat mapping blocked by DevOps prefix fix, then Xian Zhang validation >1 week | DevOps chat Mon 22 Jun unblocks the mapping; send same day with a "validate by Fri or flag blockers" ask |
| ~~OTG monthly progress report overdue~~ | ✅ Delegated to Jobelle 2026-06-17 |

---

## Strategic Pillar Balance

| Pillar | This Week | Trend |
|--------|-----------|-------|
| Sprint delivery (listing experience) | 50% | → Core |
| OTG ingestion (data accuracy) | 30% | → On track |
| Strategic / SteerCo (demo co-prep, R1) | 20% | → Demo co-prep with trio; deck owned elsewhere |

---

## Success Metrics

**How we'll know this week was successful:**
1. S4 board is clean (spine confirmed, OTEP-127/130 called, OTEP-87 AC fixed) by Tuesday EOD
2. OTEP-192 ACs updated; 4-category mapping drafted (delivery to Xian Zhang gated on Mon 22 Jun DevOps chat)
3. SteerCo demo co-prep underway: trio aligned on consolidated narrative, Michelle's listing beat scripted

**Leading indicators to check mid-week (Wed):**
- QA tickets moving: at least 3 of 9 carry-in items closed
- Keycloak target date confirmed from Pow Hwee
- Rama interview booked (if not already done)

---

*Generated: 2026-06-15. Updated: 2026-06-18 (stale-check — 5-category → 4-category per I-018 revised 06-16). Prior: 2026-06-17 (sprint end 15–28 Jun; Rama upload done).*
*Source: W24 weekly review, sprint-status.md, tasks-active.md, open-items.md, risks.md, Google Calendar API*
*Next: Run `/daily-plan` each morning. Run `/jira-sync` after S4 sprint is activated in Jira.*
