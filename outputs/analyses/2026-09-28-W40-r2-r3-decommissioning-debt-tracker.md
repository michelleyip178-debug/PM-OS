---
date: 2026-09-28
week: 2026-W40
type: tracker
scope: CareerCompass R2/R3 (post-R1 native build contingency)
owner: Michelle Yip
status: OPEN — contingent on unresolved ATS viability decision (R-32)
related:
  - outputs/analyses/2026-09-16-W38-r1-risk-register.md
  - outputs/prds/2026-09-23-W39-r1-release-one-pager.md
  - outputs/prototypes/2026-09-28-W40-r1-interim-wireframes.md
---

# R2/R3 Decommissioning Debt Tracker

> Starting this because R-33 explicitly called for it and nobody had: *"Start a standing R2/R3 'decommissioning debt' tracking item now rather than rediscovering the full list post-R1."* (Adrian's own framing, 25 Sep OTEP Squad Sync: "we are only dodging the bullet, we are kicking it down to R2.")

## Why This Exists

R1 ships as discovery-only, redirect-to-source, for every opportunity type. That's the right call for the Feb/Mar 2027 timeline — but it's a **coexistence strategy** (Compass discovers, OTG/HRPS/Cumulus keep operating), not a **migration strategy** (Compass gradually replaces OTG). The gap between those two is real, un-scoped work that lands on R2/R3, and right now it has no owner, no sizing, and no committed direction.

This document doesn't propose a plan. It names what's deferred, what decision it's contingent on, and what happens under each branch — so when the ATS answer lands, this list is the starting point instead of a from-scratch rediscovery.

---

## The Fork Everything Sits On

| | If ATS lands (2027, per Gek Khiang's validation, R-32) | If ATS doesn't land / isn't viable |
|---|---|---|
| **STIPs & Gigs creation** | External ATS builds it — Compass stays discovery-only, never adds this natively | Compass inherits native creation, un-scoped, in R2/R3 |
| **STIPs & Gigs apply** | External ATS builds it. Note: Compass's current FormSG-extraction pattern is already shipped in MVP, not an R1 workaround, and would retire only once ATS actually takes over apply | Compass inherits native apply, un-scoped, in R2/R3 |
| **STIPs & Gigs applicant tracking / review** | External ATS builds it | Compass inherits native tracking, un-scoped, in R2/R3 |
| **Internal Jobs / IJR / Secondment creation & apply** | Same fork applies — currently OTG/HRPS/Cumulus-hosted, same coexistence-vs-migration question | Same |
| **SJR (2028 cycle)** | Path B: discovery-only in Compass, redirect to the ATS, same shape as Internal Jobs/IJR/Secondment. See [SJR two-path scope brief](2026-09-29-W40-sjr-two-path-scope-brief.md) | Path A: native in Compass via HRPS/Cumulus, already scoped with a confirmed timeline, see the [SJR To-Be Handover Brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md) |
| **OTG decommissioning itself** | Depends on ATS timeline, not just Compass's | No clear end-state — R1 doesn't touch this |

**Nothing on the right-hand column has been sized, scoped, or claimed by anyone.** That's the debt.

## The One Blocking Decision

**R-32 (🔴 Red):** Gek Khiang is validating whether ATS integration is realistically viable in 2027. No date attached to when this answer lands.

Until this resolves, every item below stays a named placeholder, not a planned deliverable. Pushing this decision to a date is the single highest-leverage move against this whole tracker — an unanswered "maybe" is worse than either a firm yes or no, because it blocks R2/R3 planning from even starting.

**Action:** Get Gek Khiang's answer on record with a date (already in R-32's mitigation). Escalate as a strategic risk to R2/R3 planning specifically if the answer comes back "not viable" or "uncertain" — that's the scenario nobody's sized yet.

---

## Deferred Items (named, not yet sized)

| Item | Currently | If it lands on Compass (ATS falls through) |
|---|---|---|
| STIPs & Gigs native creation flow | Stays on OTG, all agencies, indefinitely. Discovery and FormSG-extraction apply are already live in Compass (shipped in MVP), not part of this debt | Full posting/form-builder capability, currently explicitly out of R1 scope |
| STIPs & Gigs native apply | FormSG-link extraction, already shipped in MVP, not an R1 workaround | Native in-app application, replaces the redirect-out pattern entirely |
| STIPs & Gigs applicant tracking/review | Off-platform entirely (email, FormSG's own response view) | In-app review table, RBAC for HR/poster roles — both explicitly out of R1 |
| Internal Jobs / IJR / Secondment creation & apply | HRPS/Cumulus/OTG-hosted, redirect-only | Same native-build question, same fork |
| FormSG MVP data migration | Open question (R-29), not yet answered for R1 | Becomes more urgent if Compass ever becomes system of record |
| SJR (2028 cycle) | Two paths identified 29 Sep, not a single plan. **Path A:** native in Compass via HRPS/Cumulus, already scoped with a confirmed timeline and BO buy-in, see the [SJR To-Be Handover Brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md). Open item: whether HRPS/Cumulus can actually support SJR's cycle/matching logic, unconfirmed. **Path B:** discovery-only in Compass, redirect to an external ATS to apply, same shape as Internal Jobs/IJR/Secondment already have in R1. Not yet detailed anywhere except the [two-path scope brief](2026-09-29-W40-sjr-two-path-scope-brief.md) | Path A is the native-build outcome already. Path B only exists if ATS lands; if it doesn't, Path A is the fallback by default |
| OTG data migration (IJR) | Open question (R-30), contingent on centralization decisions | Same |

---

## What This Tracker Is Not

- **Not a commitment** that Compass builds any of this. The default assumption remains ATS absorbs it.
- **Not sized.** No man-week estimate exists for any right-hand-column item — deliberately, since sizing speculative scope wastes effort if ATS lands.
- **Not a wireframe backlog.** See the illustrative sketch below for what "if Compass builds this" could look like directionally — it is not committed design, and shouldn't be treated as a spec.

---

## Illustrative Sketch — "If Compass Builds Native STIPs & Gigs" (Exploratory Only)

> ⚠️ **Purely illustrative.** This exists to make the ATS-falls-through scenario concrete enough to discuss with Adrian/Gek Khiang, not as design direction. Nothing here is scoped, sized, or committed. Do not groom against this.

**Creation (poster-side):**
```
+----------------------------------------------------+
|  Post an Opportunity                                 |
|  Type: [ STIP v ] [ Gig v ]                          |
|  Title: [_______________________]                    |
|  Description: [_______________________________]      |
|  Duration / dates: [_____] to [_____]                |
|  Application questions: [ + Add question ]            |
|  Visibility: [ WOG-wide ] [ Specific agencies ]        |
|                              [ Save Draft ] [ Publish ]|
+----------------------------------------------------+
```
*Replaces: posting on OTG. Open question: does this need a form-builder (agency-custom questions) or a fixed schema — R-09's "agency defection to rogue forms" risk applies directly here if too rigid.*

**Apply (officer-side):**
```
+----------------------------------------------------+
|  Posting Title — Agency name                          |
|  [ Application form: pre-filled from officer profile ]|
|  Answer: [_______________________]                    |
|                                    [ Submit Application]|
+----------------------------------------------------+
```
*Replaces: FormSG redirect. This is the "apply without leaving CareerCompass" vision from the original March 2026 SteerCo approval — R1 explicitly doesn't build this; this would be the eventual fulfillment of that goal if it ever lands on Compass rather than an external ATS.*

**Tracking (both sides):**
```
Officer view:                          Poster/HR view:
+------------------------+            +------------------------+
| My Applications         |            | Applicants (12)        |
| - Posting A: Submitted  |            | Name | Status | [Review]|
| - Posting B: Under Review|           | ...                    |
+------------------------+            +------------------------+
```
*Replaces: "you vanish" — the exact gap R1 leaves unsolved for every type. This is the highest-value piece if it ever gets built, since it's the core officer complaint documented in the one-pager's problem statement.*

---

## Next Review

Re-open this tracker the moment R-32 resolves (Gek Khiang's ATS answer lands). Until then, revisit monthly as part of risk-register review, not on a dedicated cadence — this shouldn't consume active R1 planning time.
