---
date: 2026-06-16
week: W25
type: Meeting Cleanup
meetings: Daily Standup, PSFG Adhoc (Adrian + Xian Zhang)
---

# Meeting Cleanup — 2026-06-16 (W25)

**Meetings:** 2

**Your action items:** 8

**Waiting on others:** 5

---

## Meeting 1: Daily Standup

**Attendees:** Michelle, Léo, Thomas, Amber, Rathika, Pow Hwee

**Summary:**
- Léo flagged a C@G technical document question (not a hard blocker) and raised removing case-specific field tasks from the sprint that aren't implemented yet
- Thomas finishing session refresh testing today, then moving to backend keyword search (Postgres full-text)
- QA environment access is a live blocker — Rathika can't close QA tickets or do desk checks without it; Pow flagged escalation to Adrian if Rama doesn't unblock soon

**Decisions:**
- Amber and Rathika to do a final UI review before sprint end and demo prep (not individual ad-hoc checks)
- QA environment is the correct environment for all desk checks — not local builds
- Demo prep process needs a more structured discussion with Imelda and Rama to avoid repeat of last sprint (server downtime, last-minute requests)
- Rathika to create Jira tickets for opportunity detail page design changes from demo feedback; Michelle to review MVP necessity before committing

---

## Meeting 2: PSFG Adhoc (Adrian + Xian Zhang)

**Attendees:** Michelle, Adrian, Xian Zhang

**Summary:**
- PSFG excluded from MVP — agreed by Adrian and Xian Zhang on two grounds: voluntary nature and scarce OTG application data
- PSFG records still require competency tagging regardless of category separation
- Secondments and Internal Jobs excluded from first OTG intake due to non-SSO apply UX (Xian Zhang's transition plan decision)

**Decisions:**
- PSFG deferred from MVP (I-016/I-018 to be updated)
- Competency tagging required for all PSFG records — no exemption for voluntary nature
- Diana session (separate, date TBD pending Xian Zhang) to address her objections

---

## Consolidated Action Items

### Your items (Michelle)

| # | Task | Due | Source | Priority |
|---|------|-----|--------|----------|
| 1 | Answer C@G technical document question for Léo | EOD today | Standup | 🔴 High — unblocks Léo's continued work |
| 2 | Review case-specific field tasks with Pow Hwee — remove from sprint if not implemented | This week | Standup | 🟡 Medium |
| 3 | Share API filters by functions brief with Pow Hwee and discuss next steps | This week | Standup | 🟡 Medium |
| 4 | Review Rathika's opportunity detail page Jira tickets for MVP necessity | When Rathika raises them | Standup | 🟡 Medium |
| 5 | Prep defensive narrative for Diana session | Before Diana session | PSFG Adhoc | 🔴 High — done ✅ |
| 6 | Update I-016 and I-018 in decision log (PSFG excluded from MVP) | This week | PSFG Adhoc | 🟡 Medium |
| 7 | Confirm with Pow Hwee: does missing competency tag hard-skip PSFG records? (Q-5) | This week | PSFG Adhoc | 🟡 Medium |
| 8 | Clarify with Xian Zhang which OTG records are affected by SSO exclusion | This week | PSFG Adhoc | 🟡 Medium |

### Waiting on others

| Task | Owner | Due | Blocker Risk |
|------|-------|-----|-------------|
| QA environment access for Rathika and Amber | Rama | ASAP | 🔴 QA tickets can't close; desk checks stalled |
| S4 page list check — missing tooltips and full pages | Amber | This week | Feeds S5 handover to Li Ting |
| Logout / auth page design improvements | Amber | Before sprint end | UI currently rough per Thomas's Keycloak build |
| Opportunity detail page design handover to Rathika | Amber | When ticket raised | Blocks Rathika's implementation |
| Diana session date confirmation | Xian Zhang | ~~TBD~~ **29 Jun** | Defensive narrative due before then (updated 2026-06-17) |

---

## Cross-Meeting Intelligence

### Recurring themes

- **QA environment access** — only raised in standup today but it's a live sprint blocker. If Rama doesn't resolve by tomorrow standup, escalate to Adrian. Rathika and Amber both blocked.
- **Demo quality** — Pow flagged font/spacing gaps from sprint review; Michelle flagged last sprint's server downtime. Both point to the same root cause: no structured pre-demo review process. The plan (Amber + Rathika final review before sprint end) is the right fix — confirm it happens with enough lead time before demo day.

### Stakeholder load

| Person | Action items today | Notes |
|--------|--------------------|-------|
| Michelle | 8 | Item 1 (C@G doc) is the only true today item — rest are this-week |
| Amber | 4 | High load — S4 page check, auth design, detail page handover, final UI review |
| Rathika | 2 | Blocked on QA env and Amber's designs — her items can't move until both clear |
| Rama | 1 | QA env access — this is a blocker for two people; needs to move today |

**Amber is overloaded.** Four active tasks with two depending on her before Rathika can proceed. Watch capacity — flag to Pow Hwee if S4 close is at risk.

### Conflicts detected

None between today's meetings. The PSFG decisions and standup items are on separate tracks.

### Missing follow-ups from prior meetings

- **OTEP-133** — should be closed in Jira (absorbed into OTEP-390). Not raised in standup today. Still open?
- **OTEP-89 / OTEP-87 alignment** — Pow Hwee to confirm which ticket covers what (flagged in grooming brief). Not raised today.
- **Amber flow walkthrough (open item #45)** — she was supposed to confirm a date end of last week or early this week. Not mentioned in standup. Chase today.

---

## Parking Lot

- Thomas moving to Postgres full-text search for keyword search — confirm with Pow Hwee that server-side search is aligned with OTEP-405 ACs before he starts (ACs note this preference but say "confirm with Pow Hwee")
- Upload scope call (Pow + ANG) happening — outcome may affect sprint backlog. Flag if scope expands.
- Demo prep process discussion with Imelda and Rama — no date set yet. Should happen before next sprint review (26 Jun).

---

*Sources: Daily standup notes (2026-06-16), PSFG adhoc meeting notes (2026-06-16-W25-adhoc-psfg-opportunities.md)*
