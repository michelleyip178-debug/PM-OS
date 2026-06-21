---
date: 2026-06-19
type: squad-sync
sprint: S4 (15–28 Jun) — W1 Day 5
attendees: Michelle, Imelda, Ram(a), Amber, dev team
related: demo (Mon 22), opportunity categorisation (#49), R1 draft, competency SSOT (#18/#41)
---

# Squad Sync — Fri 19 Jun 2026

## Summary

High-quality discussion, low decision discipline. The squad surfaced real product and data constraints well (HRPS vs Cumulus, recommendation gaps, agency mapping) but closed almost nothing — several topics ended in "we'll align" or "not a blocker." The biggest immediate risk is **demo governance** (running on Dev, no freeze owner/criteria); the biggest compounding risk is **decision debt** on data + recommendation logic that will force late rework before go-live.

> **Executive one-liner:** Strong discussion, weak closure — key risks are known, but not yet owned or resolved.

---

## ✅ What went well

1. **Real product thinking** — team challenged whether features (e.g. course landing page, recommendations) deliver value without data signals. Prevents cosmetic features.
2. **Transparent constraints** — HRPS vs Cumulus differences and known data/recommendation gaps openly discussed.
3. **Healthy cross-functional challenge** — design/product/tech actively debated (landing-page UX vs data vs feasibility).
4. **Michelle as integrator** — flagged the cross-system risks others don't see: demo/Dev-env instability, agency-mapping inconsistency, data-ingestion concerns.
5. **Demo scope clear** — Opportunities + Profile, inference excluded, shown as real system not prototype.

## ❌ What didn't (the through-line: no closure)

1. **Discussions didn't become decisions** — e.g. course landing page: 10+ min, multiple options, no decision. Pattern: "we can assess / we'll confirm / take offline."
2. **Foundational risks deferred casually** — HRPS/Cumulus, recommendation limits, agency mapping waved off as "not a blocker / align before go-live." These aren't edge cases.
3. **Demo not controlled** — Dev env still active, plan = "tell devs to stop pushing," QA/design still in flight. No freeze timing, no demo owner, no rollback plan.
4. **Actions vague** — "I'll discuss with WD," "we'll check" — no owner / deadline / expected output.
5. **Drift into deep tech with no summary** — HRPS / double-hatting explored at length, no decision.

---

## 📌 Decisions (with clarity)

| Decision | Clarity | Note |
|----------|---------|------|
| Business owns data requests | ✅ Clear | Agreed model |
| Design–QA collaboration approach | ✅ Clear | Already in progress |
| Demo uses real system (no slides) | ⚠️ Partial | No owner / readiness criteria |
| Position demo as "real product" | ⚠️ Partial | Messaging not aligned |
| Design-system gaps not blocking | ⚠️ Partial | Assumption, not validated |
| Job-family master list from WD | ⚠️ Partial | Governance unclear |
| HRPS/Cumulus handling | ❗ Implied | No explicit agreement |
| Course landing page | ❌ Open | No decision |
| Recommendation strategy | ❌ Open | No decision |
| Agency mapping | ❌ Open | Deferred |

**🚩 "Fake decisions" to call out** (these are deferrals, not decisions): "we'll show whatever we have," "not a blocker for MVP," "we'll align before go-live." Each needs a real owner + date before it counts.

---

## ⚠️ Key risks

| # | Risk | Why it bites |
|---|------|--------------|
| 1 | **Demo credibility** — positioned as "real product," reality is incomplete + unstable on Dev | Stakeholders read gaps as failures |
| 2 | **Recommendation value** — no learning history, popularity signals, or full competency mapping | "Personalisation" reads as superficial → low trust |
| 3 | **Data inconsistency (major)** — HRPS vs Cumulus vs OTG + agency-mapping mismatch | Wrong roles / competencies / agency attribution |
| 4 | **Hidden dependency** — heavy reliance on WD, OTG vendor, HRPS/Cumulus | Delays outside team control |
| 5 | **Decision debt** — landing page, recommendation logic, data handling all open | Late-stage rework before go-live |

---

## 📋 Action items (owners + dates assigned)

Where the capture left these floating, I've assigned a default — **confirm or correct**.

### Demo (Mon 22 demo)
| Task | Owner | Due |
|------|-------|-----|
| Prepare demo flow on current build | Imelda | Before Mon demo |
| Tell devs to stop pushing to Dev | Ram(a) | **Define exact freeze time — e.g. Mon 09:00** |
| Complete design QA | Amber | Before demo |
| Apply UI fixes | Dev team | Before demo (was "early next week" — too late if demo is Mon) |
| **Name a demo owner + backup/rollback plan** | Michelle + Ram | **Today/Mon AM — currently nobody owns demo stability** |

### Product / Design
| Task | Owner | Due |
|------|-------|-----|
| Clarify course design requirements with WD | Imelda | Before next sprint |
| **Decide landing-page approach** (was no owner) | Imelda (suggest) | **Mon — assign or it stays open** |

### Data / Integration
| Task | Owner | Due |
|------|-------|-----|
| Validate HRPS behaviour (e.g. secondment case) | Ram(a) | **Wed 24** (suggest — feeds go-live data trust) |
| Align with WD on agency mapping | Ram(a) + Adrian | **Before next sprint** |
| Follow up OTG vendor on mapping logic | Michelle | **Mon 22** (pair with the BO #49 chat — same theme) |

### Still open — need an owner
- Recommendation duplication issue → **assign**
- Double-hatting handling model → **assign or explicitly defer with a date**
- Demo freeze approach → folded into "demo owner" above

---

## 🔗 Links to live threads

- **Recommendation + competency-data gaps = the exact risk the R1 trio review flagged.** "No full competency mapping → superficial personalisation" is the same issue as R1 Epic B's profile pre-fill riding on the unfinalised competency SSOT (#18/#41). This MVP-stage doubt is evidence for keeping R1's Smart Assistant (Epic E) narrow and the pre-fill interaction robust to missing data. Carry it into the jam.
- **Agency mapping + OTG vendor follow-up overlaps Monday's BO categorisation chat (#49).** Don't run these as separate conversations — the data-trust theme is one thread.
- **Demo on Dev (no UAT) is the same gap flagged at this morning's standup.** Two meetings, same unowned risk. That's the signal it needs an owner *today*, not more discussion.
- **Recommender is a separate R1 track** (per the jam draft) — the "recommendation strategy: open" here is R1 scoping, not MVP. Keep it out of the MVP demo expectations.

---

## 🎯 What to fix immediately

1. **Decision discipline** — every topic ends with a decision OR an owner + deadline. (You already model this; enforce it as the squad norm.)
2. **Demo governance (urgent)** — freeze time, demo owner, rollback plan. Named, today/Mon AM.
3. **Separate discussion types** — product decisions in the meeting; deep tech exploration offline.

---

## Next steps

**Today/Mon AM:** name a demo owner + freeze time + rollback (Michelle + Ram).

**Mon 22:** OTG vendor mapping follow-up alongside the BO #49 chat; landing-page decision assigned.

**Before demo:** design QA done, UI fixes in, flow rehearsed by Imelda.

**This week:** Ram validates HRPS secondment case; agency-mapping alignment with WD scheduled.

<details><summary>Raw notes (as captured)</summary>

Source: Michelle's structured Squad Sync capture, 2026-06-19. Decisions, risks, and action items above are cleaned/dated from that capture; floating owners/dates are suggestions to confirm.

</details>
