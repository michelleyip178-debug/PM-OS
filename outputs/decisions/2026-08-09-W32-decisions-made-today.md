# Decisions Made — Sunday, August 9, 2026 (and Friday 8/7 carry-forward)

Captures every decision made across today's threads (psd-pdo-otep-int Saturday/Sunday recap) plus Friday's still-live decisions that shaped this weekend's UAT push. Prioritized by how much they change what happens next, not by chronological order.

---

## Priority Index

| # | Decision | Priority | Date | Status |
|---|---|---|---|---|
| 1 | Core team's internal UAT declared complete — formal go-ahead (Gate 1 of 2) | 🔴 Critical | 2026-08-09 | ✅ Confirmed, one gate remains |
| 2 | Add Michelle as admin instead of fixing Pow Hwee's access | 🟠 High | 2026-08-08 | 🟡 Pending restart |
| 3 | Split OTEP-668 combined-search bug into new ticket, defer to next sprint | 🟠 High | 2026-08-07 | ✅ Final |
| 4 | Disable WOG AD login for UAT Batch 1, use Keycloak fallback | 🟠 High | 2026-08-07 | ✅ Final, re-enable plan open |
| 5 | VAPT/intranet routing ownership assigned to Rama | 🟡 Medium | 2026-08-07 | ✅ Final, plan itself still pending |
| 6 | Purge production data from UAT immediately (Data Office instruction) | 🟡 Medium | 2026-08-07 | ✅ Final, confirmation-back pending |
| 7 | oppties test cases 36/38: 2 failures, triage not yet decided | 🟢 Low (pending triage) | 2026-08-09 | 🔴 Open, no decision yet — listed for visibility |

---

## Decision Detail

### 1 — Core team's internal UAT declared complete (Gate 1 of 2 for broader UAT go-ahead)

**Date:** 2026-08-09 (Sunday morning)

**Decided by:** Rama Moorthy

**Area:** UAT readiness

**Decision:** Core team's internal UAT is complete — all test cases passed, final verification happening same day. Documented in Internal Test Epic 67 - Profile Page. This is a formal go-ahead from Core team's side.

**Why this is #1:** It's the single biggest UAT-readiness unlock of the weekend, and it directly closes one of the two gates flagged 🔴 Critical in Friday's RAID log ("Internal UAT go-ahead"). Everything downstream — broadcasting ticket/account locations to bring in more testers (Adrian's ask) — waits on this plus the second gate.

**What's still open:** Gate 2 (Rama updating all Jira tickets with current test data) is not explicitly confirmed in this message. Don't treat the full "internal UAT go-ahead" item as resolved until that's checked directly.

**Source:** psd-pdo-otep-int, 2026-08-09. See [meeting notes](../meeting-notes/2026-08-08-W32-psd-pdo-otep-int-saturday-recap.md).

---

### 2 — Add Michelle as admin instead of fixing Pow Hwee's access

**Date:** 2026-08-08 (Saturday evening)

**Decided by:** Pow Hwee Tan

**Area:** Admin portal / access management

**Decision:** Rather than resolving why Pow Hwee was denied access to the admin portal upload module, add Michelle as admin instead. Requires an otep-web/otep-service restart to take effect — no code change, no redeploy.

**Why this ranks here:** It's a live operational blocker with a pending restart that could affect other people's weekend work if timed wrong. Pow Hwee flagged this caution herself but hasn't confirmed the restart happened.

**What's still open:** Whether the restart occurred, and whether it disrupted anyone. Also worth asking whether Pow Hwee will need admin access again later for something only she can test — this decision solves today's problem, not necessarily the underlying access gap.

**Source:** psd-pdo-otep-int, 2026-08-08.

---

### 3 — Split OTEP-668 combined-search bug into a new ticket, defer to next sprint

**Date:** 2026-08-07 (Friday)

**Decided by:** Michelle Yip (in reply to Thomas Huchedé's diagnosis)

**Area:** Sprint 7 scope / search feature

**Decision:** Combined agency+title search returns empty results due to match-score dilution — confirmed "not a quick fix at all." Close OTEP-668 for Sprint 7 on what's already fixed; split the unresolved defect into a new ticket targeted for next sprint; document as a known limitation for Batch 1 UAT testers rather than a fresh bug.

**Why it's still worth tracking:** Doesn't break the feature (title-only/agency-only search work fine), but it's a real known-limitation testers need to be told about before they hit it and file a duplicate. Thomas's answer on interim-fix feasibility is still pending.

**Source:** Pathfinder Batch 1 Search/Opportunities thread, 2026-08-07. See [reply](../slack-messages/2026-08-07-W32-otep-668-descope-reply.md).

---

### 4 — Disable WOG AD login for UAT Batch 1, use Keycloak accounts instead

**Date:** 2026-08-07 (Friday)

**Decided by:** Team (Michelle + engineering)

**Area:** Sprint 7 / UAT auth path

**Decision:** WOG AD (OTEP-71) and its dependency chain (Azure/Entra AD mock, GovTech egress) aren't ready with 2 days left in Sprint 7. Disable WOG AD, test UAT Batch 1 against Keycloak accounts instead. Explicit scope decision, not a silent drop.

**Why it's still open:** No owner named yet for (a) the WOG AD re-enable date/plan, or (b) whether Batch 2+ needs the real WOG AD flow or can also run on Keycloak.

**Source:** Live Jira (Sprint 7), Friday's RAID log update.

---

### 5 — VAPT/intranet routing ownership assigned to Rama

**Date:** 2026-08-07 (Friday)

**Decided by:** Team consensus, confirmed by Michelle

**Area:** VAPT / infrastructure

**Decision:** Rama owns both the VAPT/intranet routing migration plan and the PS/DS approval follow-up as one thread — closing a recurring "no owner" pattern flagged across 3+ meetings this week.

**Why it's still open:** Ownership is resolved; the actual migration plan, timeline, and test approach do not exist yet.

**Source:** OTEP Squad Sync, CSC-Compass SIT standup, 2026-08-07.

---

### 6 — Purge production data from UAT environment immediately

**Date:** 2026-08-07 (Friday)

**Decided by:** Data Office (Grace Gan, Huiting Lian) — instruction, not a negotiated choice

**Area:** Data governance / IM8 compliance

**Decision:** Any production HR data in the UAT environment must be purged immediately, not after 31 Aug UAT completion as originally proposed. CareerCompass actioned the purge same day.

**Why it's still open:** Purge is done; formal confirmation back to Grace Gan/Huiting Lian to close the Data Office loop hasn't been sent yet.

**Source:** POCDEX data sharing approval email thread, 2026-08-07.

---

### 7 — oppties test cases 36/38: 2 failures — no triage decision made yet

**Date:** 2026-08-09 (Sunday)

**Decided by:** Not yet decided — listed here for visibility, not as a completed decision

**Area:** UAT test cases (Opportunities)

**What's pending:** One failure needs logic clarification (unowned, unclear if real defect or spec ambiguity). The other is a confirmed non-blocking medium defect on the "closing soon" badge for Careers@Gov opportunities — possibly a duplicate of Thomas's Friday finding (closing-date bug on the detail page). No owner or triage call has been made on either.

**Why it's included:** It's the one open item from today's activity that still needs an actual decision — worth flagging here so it doesn't fall through the cracks of "already decided" items above.

**Source:** psd-pdo-otep-int, 2026-08-09.

---

## Notes

- This log is scoped to decisions from Friday 8/7 through today (Sunday 8/9) — it's a weekend/Friday-close snapshot, not a replacement for the master `outputs/decisions/2026-05-29-W22-decisions-log.md` (D-001 to D-027) or the `06-skills-and-decisions/decisions-log.md` narrative log. Worth folding the strategic ones (WOG AD deferral, routing ownership) into the master D-log if they should carry the same institutional weight as earlier entries — flag if you want that done.
- Priority ordering here is "how much does this change what happens next," not chronological or by who decided it. Item 1 (UAT go-ahead) ranks highest because it unblocks the most downstream work; item 7 ranks lowest because it isn't actually a decision yet.
- Cross-referenced against `outputs/analyses/2026-08-07-W32-raid-log.md`, which already tracks the operational status of most of these — this log is the decision-focused counterpart, not a duplicate.

*Generated 2026-08-09 from psd-pdo-otep-int (Sat/Sun) and Friday's meeting notes/RAID log/slack messages.*
