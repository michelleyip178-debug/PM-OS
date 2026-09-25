---
date: 2026-09-21
week: 2026-W39
type: slack-message
to: Pow Hwee (Tech Lead)
topic: R1 Opportunities scope status ahead of Tuesday's estimation sync
---

# R1 Scope Status — For Pow Hwee

**Context:** Three scope threads opened today with Adrian/Rama, all converging on Tuesday's estimation delivery. Flagging before sprint planning gets anywhere near this.

---

## Locked, no action needed

- **C@G ingestion (F-23) confirmed final** — no further changes. Whatever SJR ends up being, it doesn't touch this pipeline.
- Saved Jobs, CAM integration, Discovery Telemetry — unaffected, proceeding as scoped.

## Open — three items, all pending before Tuesday

**1. Pillar 1 (STIPs & Gigs) — access boundary might widen**
Adrian's floated RBAC scoped to the Opportunities Module specifically (creation through application), open to any WOG-authenticated officer — independent of the platform's POCDEX 6-pilot-agency gate. Not a platform-wide login change, just this module. Still needs a technical read on whether module-level RBAC is cleanly separable from the POCDEX-gated session, or whether WOG AD needs to be layered in as a second identity path. This is the one most likely to need your input directly — see [Reduced-Scope Feasibility, Pillar 4](../analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md) for the exact framing.

**2. Pillar 2 (SJR) — scope and ownership both open**
- SJR sits solely in OTG today, confirmed (HRPS/Cumulus can't handle the exercise cycle or login friction currently).
- Whiteboard sketch with Adrian/Rama raised the real question: does Compass build SJR's Creation and Apply natively, or do the HR systems? Unresolved — if Compass-native, this contradicts the "no ATS in Compass" position and pushes the SJR estimate well past what's currently folded into Pillar 2 (2.0–2.5 mw).
- Separately, proposed splitting SJR into its own epic rather than keeping it in Pillar 2 — also pending Adrian's confirmation.
- See [SJR Whiteboard notes](../meeting-notes/2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md) for full detail, including a real timeline conflict between the whiteboard's 2027 cycle sequence and the SJR to-be brief's phasing.

**3. Pillar 4 (RBAC) — net-new, not yet sized**
Same RBAC proposal as #1. Current Pillar 4 estimate (3.5–4.5 mw) only covers within-module access tiers (poster/collaborator/admin) — it doesn't include a WOG-wide module-entry layer. If #1 is confirmed, this needs its own sizing before Tuesday.

---

## Net effect on the estimate

Both existing effort figures — 18.0–23.5 mw (reduced-scope brief) and 18.5–24.0 mw (one-pager) — are currently unreconciled with each other, and neither should be read as final until the three items above resolve. Three of six pillars by weight (1, 2, 4) have open questions sitting on top of the number.

## What I need from you

Your read on whether module-scoped RBAC (item 1/3) is technically separable from the platform-wide POCDEX gate, or whether it's a bigger lift than it looks. That's the single biggest unknown blocking a clean number for Tuesday.
