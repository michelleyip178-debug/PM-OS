# R1 Manager Briefing — Reforge Framework Applied
**Date:** 23 Jun 2026 | **Updated:** 24 Jun 2026

**Session:** R1 Jamming Session with Adrian — Wed 24 Jun PM

**Context update:** R1 scope confirmed post-senior review before this session. The jam is now about resolving open dependencies and decisions, not re-litigating the epic set.

**Framework:** Reforge Feature Opportunity Validation (3 components: Strategic Fit, User Value, Business Value)

---

## 1. Strategic Fit

| Level | R1 answer |
|---|---|
| **Mission/Vision** | PS officers have one trusted place to find and pursue career development opportunities across the whole of government |
| **Company Strategy** | CareerCompass becomes the system of record for PS internal mobility — not a read-only window onto OTG |
| **Product Strategy** | R1 brings both ends in-house: agencies create, officers apply, all tracked inside Compass. No redirects. No spreadsheets. Competency data in sync across HR systems. |
| **Team Goals** | 10% of officers complete a development action by Mar 2027 · 1,850 applied via Compass by Q4 2028 · Status latency ≤24hrs · R1 target: Jan 2027 |

**Note:** Open the jam with this ladder. Anchors the epic debate in OKR context and avoids slipping into feature-level micro-management (the "project manager trap").

---

## 2. User Value Hypothesis

### A. Who is the user?
- **Officers:** PS public servants, early-career passives and senior intentional movers. ~5,400 in pilot cohort across 6 agencies (PSD, ESG, MDDI, URA, MCCY, CAAS).
- **Agencies (B-side):** Posting managers handling 5–20 active postings. IJ and Secondment types are orphaned — no creation tooling exists anywhere post-OTG.

### B. What problem are we solving?
Three failure points today:
1. **The redirect** — officer leaves Compass on Apply (FormSG or C@G external site)
2. **The blank form** — no pre-fill, manual entry every time
3. **The status black hole** — application disappears into a FormSG inbox, officer hears nothing

### C. Why is it important?
- **Severity:** High. ~15–20% apply completion today. Every redirect is a dropped development action.
- **Users impacted:** Every officer who reaches the Apply CTA. Every agency creating IJ or Secondment postings — currently zero, because the tooling doesn't exist.
- **Alternatives:** FormSG (breaks platform experience) or manual spreadsheet tracking (no audit trail, no defensibility, no scale).

### D. What does success look like for users?
- **Qualitative:** Officer completes an application without leaving Compass. Knows their status without chasing. Profile competencies reflect their actual HR record without manual updates.
- **Quantitative:** Apply completion rate up, abandonment down, status latency hits ≤24hr OKR.
- **Non-goals (name explicitly in the room):** CV upload/inference (OTEP-205), Smart Assistant / strengths auto-populate (confirmed R3), criteria authoring (re-opens POCDEX write path #31), C@G native apply. Naming these prevents scope creep mid-jam.

---

## 3. Business Value Hypothesis

### A. Key stakeholders and alignment needs
- **Full alignment:** Adrian (in the room), Mark (next, after jam — #40 sign-off)
- **Informed:** Amber (design), Pow Hwee (tech), Imelda (competency SSOT), pilot agency leads

### B. What does success look like for the business?
- **Qualitative:** CareerCompass is no longer a read-only job board. It's the record system for the PS mobility lifecycle.
- **Quantitative:** North Star (10% development action completion), OKR 2 (1,850 applications by Q4 2028), status latency OKR (≤24hrs). Pilot cohort alone could drive 22–29% of the lifetime application target in Q1 2027.
- **Business non-goals:** Don't measure R1 success by revenue — it's a supply-side initiative. Track application volume, completion rates, and status latency as primary inputs.

### C. Strategic tying
Higher apply completion → more officers complete development actions in-platform → North Star moves → PS talent mobility mission advances.

Epic C's status latency OKR is the piece most at risk of under-investment because it's less visible than the apply UX. Name that explicitly with Adrian.

---

## How to Run the Session

**Opening (2 min):** Confirm scope is locked from the review. Frame the session as resolving the three open dependencies that are blocking grooming — not re-litigating the epic set.

**Scope recap (3 min):** Walk through the 5 confirmed epics so Adrian has the full picture before the Q&A:

| Epic | What it covers |
|---|---|
| A — Opportunity Creation | HR posts all job types (IJ, Secondment, STIP, Gig, PSFG) directly in CareerCompass |
| B — Streamlined Application | Native in-Compass apply with profile pre-fill; no redirect (excl. C@G) |
| C — Status Tracking | End-to-end monitoring; synced with ATS, HRPS, Cumulus |
| D — Saved Jobs | Bookmark and resume applications |
| E — Competency Management v1 | Officer competencies in sync between Compass and HR systems |

Smart Assistant confirmed out — R3.

**Decisions needed from Adrian (10 min):**
1. **ATS integration spec** — World A is confirmed but there's no named ATS, API contract, or owner. Epic C can't be groomed without this. Who should Michelle talk to — Pow Hwee, Fabian, or someone else?
2. **24hr latency OKR measurement point** — From manager action in ATS, or from status appearing in CareerCompass? Different engineering targets. Needs an answer before Epic C is scoped.
3. **Mark sign-off (#40)** — Is Adrian looping Mark in, or is it Michelle's to drive?
4. **Competency Management v1 scope boundary** — Read-only sync (Compass reads from POCDEX/HRPS at login) or write-back (Compass updates HR systems)? Write-back re-opens POCDEX write path (Core #31). Michelle is checking with Imelda and Daryll separately — want Adrian's view on intent.
5. **Agency-admin auth** — Does it exist, and who owns it? Go/no-go gate for Epic A.
6. **PSFG in R1 or R1.5?** — Policy intent still to be confirmed.

**Non-goals (2 min):** Name what's explicitly out so it doesn't resurface mid-grooming: Smart Assistant (R3), criteria authoring (re-opens #31), ATS as posting system of record (R2+), C@G native apply, CV upload/inference.

**Close (1 min):** "I won't open the R1 story pipeline until Mark confirms. Once these dependency questions are answered I can start grooming the first two epics in parallel."

---

*Source: Reforge Feature Opportunity Validation framework. Updated 24 Jun 2026 to reflect confirmed scope.*
*Related docs: [R1 PRD](../prds/2026-07-07-W28-careercompass-r1-prd.md) (supersedes r1-epic-brief-confluence, now deleted) · [r1-scope-tldr-adrian](../slack-messages/2026-06-24-W26-r1-scope-tldr-adrian.md) · [r1-jam-onepager](2026-06-22-W26-r1-jam-onepager.md)*
