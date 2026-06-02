# Meeting Notes: OTEP Squad Sync

**Date:** 2026-06-02 (Sprint 3 Day 1)
**Time:** 09:30–10:30
**Meeting type:** Team sync (cross-squad)
**Attendees:** Michelle (PM), Pow Hwee (Tech Lead), Adrian (PO), Rama, Amber, Jace, Barry, OTEP team
**Facilitator:** Michelle / Adrian

---

## Summary

Three concrete outcomes: a Figma licence purchase is being pursued (Jace → Finance tomorrow) to ease designers' page-export pain; the hosting/URL architecture is decided (FE in internet zone, BE in intranet, one registered URL — which also unlocks mobile access for officers); and VAPT needs to start early August per Barry's advice, earlier than the team's prior "submit by early Sep" assumption.

---

## Decisions Made

### 1. Hosting architecture + single URL confirmed

- **Decision:** Frontend hosted in the **internet zone**, backend hosted in the **intranet**. Register **one URL** across both.
- **Why:** A single registered URL also **enables mobility — officers can view CareerCompass on their mobile phones.**
- **Who decided:** Squad (Pow Hwee / architecture).
- **Impact:** Resolves the "single URL (internet + intranet) policy investigation" open since 2026-05-22 (open item #26). Confirms `careercompass.gov.sg` as the single URL. Mobile viewing is now in scope as a consequence of this architecture, not a separate build decision.

### 2. Figma licence to be purchased (pending Finance)

- **Decision:** Pursue a paid Figma licence to ease the difficulty designers face exporting designed pages from Figma.
- **Why:** Current export friction slows Amber/design handoff to engineering — directly relevant with design lock tomorrow.
- **Who decided:** Raised in sync; **Jace to check with Finance tomorrow (Wed 3 Jun).**
- **Impact:** If approved, smoother design export → faster, cleaner FE handoff. Not yet committed — depends on Finance.

### 3. VAPT to start early August (Barry's advice)

- **Decision:** Vulnerability Assessment & Penetration Testing (VAPT) needs to **start from early August**.
- **Why:** Barry's advice — earlier start needed to clear security before the Oct go-live.
- **Who decided:** Barry (advisory); team to plan around it.
- **Impact:** More concrete and **earlier** than the prior assumption ("submit by early Sep"). Affects Sprint 6–8 planning — a VAPT-ready build is needed by early Aug. Updated in `risks.md`.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Check with Finance on Figma licence purchase | @Jace | Wed 3 Jun | High | 🔴 Not Started |
| Plan VAPT start for early Aug — work backwards to a VAPT-ready build date | @Michelle / @Pow Hwee | Before Sprint 6 planning | High | 🔴 Not Started |
| Confirm single-URL registration steps (`careercompass.gov.sg`, FE internet / BE intranet) | @Michelle / @Fabian / @Pow Hwee | This week | Medium | 🟡 In Progress (closes #26 investigation) |
| Confirm mobile-view scope implications of single URL (any FE responsive work needed?) | @Michelle / @Amber | Before relevant FE stories | Medium | 🔴 Not Started |

---

## Key Insights

- **Single URL = mobile unlock.** The hosting decision quietly added a capability — officers viewing on mobile. Worth confirming whether any responsive-design work is now implied for the listing/detail pages, or if mobile-view is "good enough" out of the box.
- **Figma export pain is a real handoff bottleneck**, surfacing the day before design lock. The licence is the fix, but it's gated on Finance — so design lock tomorrow may still run on the current export workaround.
- **VAPT moved left.** Barry's "early August" is a harder constraint than the team's earlier "early Sep submission." Security is now a Sprint 6-ish gate, not a late add-on.

---

## Timeline Risks

- **TIMELINE RISK — VAPT vs go-live:** VAPT starting early Aug means the build must be feature-stable enough to test by then. With Feature Freeze at end of Sprint 8 (21 Aug) and Go-Live 16 Oct (per Sprint Ceremonies v2), an early-Aug VAPT start overlaps the freeze window tightly. Confirm with Pow Hwee/Barry what scope must be VAPT-ready by early Aug vs what can follow.
- **Figma licence vs design lock:** Licence approval is a day out (Finance, Wed) but **design lock is also tomorrow**. Don't let the licence question block the lock — confirm Amber can sign off Figma with the current export method regardless.

---

## Open Questions

- [ ] Does the single-URL / mobile-view decision require explicit responsive-design work on listing + detail pages? — **Owner:** Michelle + Amber — **By:** before those FE stories
- [ ] What exact scope must be VAPT-ready by early August? — **Owner:** Michelle → Barry / Pow Hwee — **By:** before Sprint 6 planning
- [ ] If Finance declines the Figma licence, what's the export workaround for the rest of the programme? — **Owner:** Jace / Amber — **By:** after Finance answer

---

## Next Steps

**Immediate (this week):**
- Jace checks Figma licence with Finance (Wed)
- Confirm single-URL registration steps; close the #26 policy investigation
- Start working backwards from early-Aug VAPT to a build-readiness date

**Short-term:**
- Fold VAPT early-Aug start into Sprint 6–8 planning
- Confirm mobile-view / responsive scope with Amber

---

## Context for Future Reference

- **Single URL** closes the investigation opened 2026-05-22 when `careercompass.gov.sg` was submitted as the intranet URL to start the WOG AD approval clock (#26). The architecture (FE internet / BE intranet, one URL) is now the confirmed answer, and it carries mobile access as a bonus.
- **VAPT** supersedes the looser "security review monthly cycle — submit by early Sep" risk row. Barry's guidance is the authoritative timing now.

---

*Processed: 2026-06-02*
*Captured to: decisions-log (hosting + VAPT), risks.md (VAPT timing), open-items #26 (single URL resolved).*
*Next: Confirm design lock readiness at 14:00 BO Design Review.*
