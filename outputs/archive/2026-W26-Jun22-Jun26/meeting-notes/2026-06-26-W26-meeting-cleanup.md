# Meeting Cleanup — 26 June 2026

## Quick Stats
- Meetings with notes: 1 (Squad Sync 9:30)
- Action items generated: 10
- Decisions made: 0 (all tentative — nothing formally approved)
- Conflicts with prior decisions: 1 (flagged below)

---

## Squad Sync — Competency Roadmap & Taxonomy (9:30)

**Attendees:** Michelle, Barry Lim, Victor Ong, Jace Tan, Imelda Mo, Ram Moorthy + others

**Summary:**
- Team is trending toward Competency Management → AI Inference → Role Management as the post-MVP roadmap sequence, but nothing was formally approved
- The most important discovery: no agreed canonical source of truth for job family, job function, domain, or competency taxonomy — all downstream AI, filtering, and recommendation work is at risk until this is settled
- Learning design (Option 1 vs 2) and Domain field definition both remain open; Imelda to chase CSC on Domain before the next Design Review

**Decisions:** None formally made. All directions are tentative.

**Action Items:**

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| ~~Export job family/function dataset and share with team (verify 538 number)~~ | Ram Moorthy | ✅ Done 2026-06-26 | ~~🔴 High~~ |
| Review AI-generated taxonomy extraction for errors | Ram Moorthy | TBD | 🟡 Medium |
| Chase CSC on Domain field definition (what it means, which taxonomy it uses) | Imelda Mo | Before next Design Review | 🔴 High |
| Bring learning design options (Option 1 vs 2) to BOs | Imelda Mo | TBD | 🟡 Medium |
| Follow up with Ram + Imelda to set specific due dates (no dates were set in meeting) | Michelle | w/c 29 Jun | 🔴 High |
| SSOT session before next Design Review — job family / job function / domain / competency, with WD, BOS, Cumulus, and HR system owners | Ram Moorthy (owns) | Before next Design Review | 🔴 High |
| Align canonical SSOT for job family and job function across all filter surfaces | Team (Michelle to drive) | Before next Design Review | 🔴 High |
| Align filters across opportunities, learning, and development workstreams | Team | TBD | 🔴 High |
| Internal review with Adrian before next Design Review | Team | Before Design Review | 🔴 High |
| Confirm: will Cumulus and HRPS agree to CareerCompass as SSOT? Who needs to be in that conversation? | Jace + BOs | TBD | 🟡 Medium |

**Open Questions:**
- What is the canonical source for job family? OTG uses HR Resources list — is that authoritative?
- What does "Domain" mean in the learning context? Does CSC use the HR Resources taxonomy?
- Will future learning providers supply the same Domain field?
- Does the 538 job family/function number hold up?
- What policy or governance changes are needed for competency creation to shift to CareerCompass?
- Learning design: Option 1 or Option 2?

---

## My Action Items (Consolidated)

- [x] ~~**Follow up with Ram Moorthy — data export**~~ — ✅ Sorted 2026-06-26.
- [x] ~~**Follow up with Imelda — CSC Domain chase**~~ — ✅ Resolved via Pow Hwee email thread 2026-06-26. DLE/CSC SSO design confirmed: OTEP (Keycloak) as IdP, DLE as Relying Party, OIDC standard flow, WOG email as user identifier. DLE effort ~15 man-days; integration testing target August. See open-item #30 updated.
- [x] ~~**Prep Adrian separately**~~ — Ram will raise SSOT risk + where SSOT should be obtained at the next Squad Sync. No separate Adrian prep needed.

## Waiting On Others

- ~~Ram Moorthy — data export + verification of 538 number~~ ✅ Done
- ~~Imelda Mo — CSC Domain/DLE SSO chase~~ ✅ Resolved by Pow Hwee (see #30)
- Imelda Mo — learning design options (Option 1 vs 2) to BOs — still open
- Jace — escalation path for SSOT governance (Cumulus, HRPS sign-off)

## Parking Lot

- Victor Ong's framing: AI as taxonomy harmonisation tool. Watch — may resurface as justification for moving fast before data is clean. Right response: AI is a workaround for a governance problem, not a solution to it.
- Barry Lim present and challenging assumptions — useful signal that capacity/resourcing stakeholders are watching roadmap scope closely.

---

## Cross-Meeting Intelligence

### ⚠️ CONFLICT DETECTED

**Prior decision (2026-05-21):** "Imelda's squad owns the master source of truth for job family, job function, agency, and competencies. OTEP is a consumer, not an owner."

**Today's meeting:** The team proposed CareerCompass as the SSOT for competencies and roles. Jace explicitly questioned whether Cumulus, HRPS, and policy would support competency/role creation moving out of HR systems.

**Also relevant — decision 2026-06-16:** Job family filter pulls into MVP anchored to "Imelda's master list." That master list's authority is now in question.

**Resolution required by:** Michelle + Jace, before next Design Review. The May 21 decision assumed Imelda's squad *already owned* the authoritative list. Today revealed the list itself may not be agreed across systems. These are not the same problem.

### Recurring Topics

- **[HIGH] Taxonomy SSOT** — open item #18 (since May 21) has tracked competency architecture, but today revealed the governance layer (who *authorises* the canonical list) was never resolved. This is upstream of the technical architecture questions in #18 and #41.

### Stakeholder Load

| Person | Action Items | Note |
|--------|-------------|------|
| Michelle | 2 | Follow-up Imelda + prep Adrian |
| Ram Moorthy | 2 | ~~Data export~~ ✅; AI extraction review; owns SSOT session |
| Imelda Mo | 2 | CSC Domain chase; learning design to BOs |
| Jace | 1 | SSOT governance escalation path |

### Missing Follow-Ups from Prior Open Items

- **Open item #18** (competency SSOT, since May 2021): status was 🟡 "Architecture decided (2026-06-11) — endpoint specs TBC." Today's meeting suggests the governance layer *above* the architecture is still unsettled. Update #18 status to reflect that the SSOT ownership question was re-opened.
- **Open item #41** (competency dependencies, endpoint specs Léo + Kingsley): unaffected by today's meeting — that's a technical integration question, not a governance one. Still in flight.

---

*Saved: 2026-06-26*
*Sources: outputs/meeting-notes/2026-06-26-W26-squad-sync-competency-roadmap.md, open-items.md #18/#19/#41, decisions-log 2026-05-21 + 2026-06-16*
