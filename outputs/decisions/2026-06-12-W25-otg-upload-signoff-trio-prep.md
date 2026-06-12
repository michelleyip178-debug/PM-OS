---
title: OTG Upload Module — Sign-off Session Trio Prep
date: 2026-06-12
owner: Michelle Yip
session: OTG Upload Module · Sign-off Session (30 min, cross-functional)
relates_to: OTEP-397, OTEP-427, OTEP-192, OTEP-408, OTEP-409, OTEP-390
status: Pre-session brief — reconciled against live Jira + decisions log
---

# OTG Upload Module — Sign-off Session Trio Prep

**What this is:** How the product trio (PM + Tech Lead + Designer) will handle the three sign-off decisions. Where they agree, where they conflict, and what nobody will raise.

---

## Two things that reframe the session before you walk in

1. **OTEP-397 is a spike, not a build.** Live title: *"[spike] Discover OTG excel file upload — Flow and UI"* — Backlog, 3pts, owned by Michelle. OTEP-427 (*"[spike] Tighten OTG ingestion logic"*) is also a spike, also Backlog, also Michelle's. This session is signing off the **inputs to a discovery spike**, not locking a build spec. That lowers the stakes on decisions 1 and 2, and raises the stakes on getting the *questions* right.

2. **The ring-fencing build stories aren't real yet.** OTEP-408 (BE filter), OTEP-409 (FE reflect), and OTEP-390 (detail states) are all unassigned and unpointed in Backlog for S5. Decision 2 (validation location) is being made before the stories that implement it exist or are sized.

---

## What the PM needs to land

**Decision 3 first (rollout).** Fully in your control, costs nothing technically. Soft-launch to one pilot admin is the obvious call. Bank it in 5 minutes and move on.

**Decision 2 is the real one.** Engineering and product weight sits here. Get a direction, even if provisional.

**Decision 1 is mostly already closed.** Excel/OTG-standard was locked 2026-05-14 (I-002). Don't reopen format. The only live sub-question is schema drift handling. Frame it that way or you'll burn 15 minutes re-litigating a May decision.

**The trap:** treating these as permanent architecture decisions. They feed a spike. Say so out loud — it gives the trio permission to commit without over-engineering.

---

## Tech Lead (Pow Hwee)

**Risks and pushback he'll raise:**

- **"Does catalogue preview exist in OTEP-192?"** This is the hinge question for Decision 2. If Léo's ingestion already simulates pass/skip per record, the upload UI just renders that output — cheap. If it doesn't, someone's building a catalogue preview capability that isn't scoped anywhere. Pow Hwee will refuse to scope the Review step until this is answered. **Get Léo to confirm before the session.**
- **"Don't duplicate the rules engine in the UI."** He'll push for backend = single source of truth. UI warns, but only from backend catalogue preview output — never its own copy of the rules.
- **"Category model isn't validated."** He'll flag that building category-level ring-fencing now = rework. Agency-level only for MVP is his safe line — and it matches the brief.
- **"OTEP-192 is still in QA."** S3 closes in 2 days. He'll resist committing the upload UI's contract to an implementation that hasn't cleared QA.
- **"Schema drift should fail loud."** Reject the file with a clear error rather than silent best-effort parsing. Cheap to build, prevents a class of production incidents.

---

## Designer (Amber)

**What PM and TL will miss:**

- **The Review step is a screen, not a checkbox.** "415 pass / 205 skip" — how does the admin understand the 205? Grouped by skip reason? Downloadable? A wall of red rejects will make a DevOps admin afraid to publish. This is the highest-value design question and neither PM nor TL will raise it.
- **Null states she already owns.** Records that partially pass (missing BusinessUnit, missing category) aren't binary pass/skip — they're "publish with gaps." She'll ask what those look like in the Review step and on the live card downstream. The BusinessUnit-optional question is a design call as much as a data one.
- **Ring-fencing has a user-facing face (OTEP-390).** If the upload UI warns "this record will be ring-fenced," that warning copy and the live ring-fenced card states need to be coherent. Decision 2 determines what the admin sees — and that's her surface.
- **"CSV vs Excel" in the deck.** She'll catch this and it'll undermine credibility. Fix it before you present.

---

## Where the trio agrees

Bank these — no debate needed in the room.

| Call | Why all three land here |
|---|---|
| Soft-launch to one pilot admin | De-risks for PM, smaller blast radius for TL, watchable usage for Amber |
| Agency-level ring-fencing only for MVP | Category model unvalidated across all three lenses |
| Backend = source of truth; UI displays, doesn't re-implement | PM: correctness. TL: no drift. Amber: consistent warning copy. |
| Fail-loud on schema drift | PM: predictable. TL: cheap + prevents incidents. Amber: clear error beats a confusing half-import. |

**OTEP-390** is flagged by all three for different reasons. Don't commit ring-fencing display scope in this session.

---

## Where they conflict

Resolve these before you walk in.

**Decision 2 — TL vs Amber:**
TL wants a thin UI (display backend output only). Amber wants the admin to understand what'll happen before they publish. These aren't opposed. Resolution: **UI warns, but every warning comes from the backend catalogue preview output — no rules logic in the frontend.** This gives Amber her warning and Pow Hwee his single source of truth. The only remaining question is whether catalogue preview exists in OTEP-192. Adopt this framing going in.

**BusinessUnit relaxation (+16 records):**
PM wants the bigger catalogue. TL/data-owners worry about publishing records with gaps. Don't decide in the room — route to Xian Zhang/Rama as a data-owner call. Note it, don't resolve it live.

**"Let OTEP-192 clear QA first":**
TL wants 192 Done before committing the UI contract. You want S4 momentum. Resolution: proceed with the OTEP-397 spike now (it's discovery, doesn't depend on 192 being merged), but gate the upload-UI build stories on 192 closing QA. Spike now, build after.

---

## Collective blind spots

Nobody in the room will raise these.

- **Who operates this, and how often?** The module assumes a DevOps admin re-uploads on some cadence. Nobody owns the operational question — daily? weekly? who's responsible when OTG sends a new export? This is a process gap that breaks in production.
- **The C@G dedup rule lands at the Review step.** Flagged as a backend risk (I-010, 🔴 Open), but it changes what the admin sees as "skip" for ESG records. The trio will treat it as a backend detail and miss the UX implication.
- **Rollback.** Everyone's focused on publish. Nobody owns un-publish. A DevOps admin will publish wrong data. Is there an undo? Naming this explicitly is also your safety-net argument for soft-launch.
- **Two spikes, both yours, both unstarted, S3 closes in 2 days.** Nobody else feels this load. If OTEP-397 and OTEP-427 slip, the unpointed ring-fencing stories (408/409/390) can't be sized at grooming and S5 wobbles.

---

## Pre-session must-do

**15 minutes before the meeting — confirm with Léo:**

> Does OTEP-192 support catalogue preview? Can it process a file and return pass/skip results per record without writing to the DB?

This single answer determines whether Decision 2 is a 1-point display task or an unscoped engine build. Don't walk in without it.

---

## Decision summary (going in)

| # | Reframed decision | Recommended call | Rationale |
|---|---|---|---|
| 1 | Schema drift handling — how does the UI respond when OTG's export format changes? | Fail loud: reject file with clear error | Cheap, predictable, prevents bad-data incidents |
| 2 | Ring-fencing validation location — UI warns from backend catalogue preview vs UI has its own logic | UI warns from backend catalogue preview output | Single source of truth + admin has pre-publish visibility |
| 3 | Rollout plan — one pilot admin vs full DevOps team | Soft-launch to one pilot admin | De-risks data quality, rollback, and incident blast radius |

**Not-ready / do not decide today:**
- Category-level ring-fencing display — blocked on Xian Zhang (w/c 15 Jun)
- BusinessUnit relaxation — data-owner call, route to Xian Zhang/Rama
- Any upload-UI build commitment — blocked on OTEP-192 QA + OTEP-397 spike output

---

*Generated 2026-06-12. Reconciled against live Jira + decisions log.*
