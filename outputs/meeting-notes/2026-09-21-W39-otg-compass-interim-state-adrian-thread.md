---
date: 2026-09-21
week: 2026-W39
type: meeting-notes
meeting_type: Slack/Teams thread
attendees: Adrian Ang, Michelle Yip
topic: STIPs & Gigs — OTG/Compass interim state during pilot rollout
---

# Meeting Notes: OTG/Compass Interim State for STIPs & Gigs (Adrian Thread)

**Date:** 2026-09-21

**Attendees:** Adrian Ang (Product Lead), Michelle Yip

**Type:** Slack/Teams thread

**Context:** Adrian raised the problem of STIPs & Gigs existing on both OTG and Compass simultaneously during the pilot period (6 agencies on Compass, rest still on OTG), and asked how discovery/apply should work across both platforms.

---

## Summary

Adrian proposed two options for handling STIPs & Gigs during the interim period where some agencies are on Compass and others remain on OTG: (1) cross-post between platforms so discovery and apply both work regardless of where the officer or posting originates, or (2) keep Compass as the sole platform for STIPs & Gigs and use OTG only as a single pointer/job-card that redirects officers to Compass. Michelle flagged that Option 1 requires a new/enhanced ingestion pipeline (SJR fields and ringfencing differ from what's already combined for C@G+OTG), that Option 2's login change needs Rama's input, and gave an initial OTG-vendor feasibility read on the "single job card" idea. Adrian later added a narrower ask in the same thread: a public/read-only opportunities view for non-POCDEX agencies, gated only by WOG AD login — smaller in scope than full Option 2.

---

## Adrian's Two Options (As Proposed)

**Option 1 — Cross-platform posting and apply:**
- Confirm whether STIPs/Gigs core data fields match what OTG needs for its own posting.
- If yes: integrate so Compass-authored postings display on OTG, and officers who click through on OTG get sent to Compass to apply.
- This would let STIPs/Gigs posters on *either* platform post, with discovery and apply working across both.
- Adrian's assumption: since MVP already pulls STIPs/Gigs from OTG into Compass, application should already be possible on Compass. **Needs confirmation.**

**Option 2 — Compass-only, OTG as pointer:**
- Keep STIPs/Gigs posting and applying exclusively on Compass.
- Requires removing the POCDEX 6-pilot-agency dependency so WOG AD login works for posters/applicants outside the 6 pilot agencies.
- OTG shows a single job card that lets officers discover all Compass STIPs/Gigs and click through.
- A "Post Opportunities" link on that OTG card would also redirect to Compass.
- Adrian asked Michelle to raise this interim-state problem with the WD team in case they have their own solution.

**Follow-up from Adrian (same thread, later):** a narrower ask than full Option 2 — give officers from **non-POCDEX agencies a public/read-only view of opportunities**, gated only by WOG AD login (no POCDEX pilot-agency dependency required for this view). This is discovery-only, not posting or applying, so it's a smaller scope than Option 2's full "posting and applying exclusively on Compass" for non-pilot agencies.

**Resolution (same thread, later still): RBAC-scoped answer to the POCDEX question.** Adrian proposed the actual mechanism: **RBAC for WOG access scoped specifically to the Opportunities Module, covering the full flow from creation to application.** Rather than removing the POCDEX 6-pilot-agency dependency platform-wide (which was the concern with Option 2 as originally framed), any WOG-authenticated officer gets access to the Opportunities Module specifically — creation through application — while the rest of Compass presumably stays POCDEX-gated as before. **This is the resolution to the POCDEX/WOG AD login question above, not a separate idea.** It answers "how do we let non-pilot-agency officers in" without touching the broader platform's identity model.

---

## Michelle's Response

- **Data fields differ by opportunity type.** SJR fields and ringfencing rules are different from STIPs/Gigs. The existing pipeline already combines C@G and OTG (STIPs & Gigs) ingestion into one flow — supporting SJR may need a new pipeline or an enhancement to the existing one, not a simple extension.
- **Option 2's login change (WOG AD without POCDEX 6-pilot-agency dependency) needs Rama Moorthy's technical read** before committing to it.
- **OTG feasibility, first pass:**
  - A job card on OTG is feasible.
  - Getting it "pinned" as the first/top card may be harder — worth exploring with the OTG vendor, referencing a similar precedent done for PSLF 2026 in July.
  - A "Post Opportunity" redirect link is likely **not** possible, since that's a global platform configuration on OTG's side, not something scoped per-card.

---

## Decisions Made

None yet — this is an open design/technical discussion. No option has been chosen.

---

## Open Questions

- [ ] **Do STIPs/Gigs core data fields match between Compass and OTG?** — **Owner:** Michelle Yip — **By:** TBD (this gates whether Option 1 is even viable)
- [ ] **Is application already possible on Compass today for OTG-ingested STIPs/Gigs**, as Adrian assumed from the MVP pull? — **Owner:** Michelle Yip / Engineering — **By:** TBD, needs confirming before Option 1 is scoped further
- [x] ~~Can WOG AD login work without the POCDEX 6-pilot-agency dependency?~~ **Resolved via RBAC approach:** rather than removing POCDEX dependency platform-wide, scope RBAC to the Opportunities Module specifically so any WOG-authenticated officer gets creation-through-application access to that module. Still needs Rama's technical read on feasibility and sizing.
- [ ] **Can Rama confirm the Opportunities-Module-scoped RBAC approach is technically sound** — does Keycloak/the auth layer support module-level RBAC cleanly, separate from the platform-wide POCDEX gate? — **Owner:** Rama Moorthy — **By:** TBD, this is now the key open technical question
- [ ] **Can OTG pin a job card as the first/top card?** — **Owner:** Michelle Yip, via OTG vendor conversation — **By:** TBD, reference the PSLF 2026 precedent from July
- [ ] **Does WD have an existing plan for the OTG/Compass interim state** (mixed pilot rollout, some agencies on each platform)? — **Owner:** Michelle Yip, raise with WD team — **By:** TBD, per Adrian's ask

---

## Timeline Risks

**TIMELINE RISK: This is a new architectural question surfacing the same week as Tuesday's (22 Sep) R1 estimation delivery.** The RBAC-scoped resolution (Opportunities Module access via WOG AD, independent of the platform-wide POCDEX gate) is a smaller, cleaner ask than the original Option 2 framing, but it's still net-new RBAC scope beyond what's already planned in Pillar 4 (which currently governs *within-Compass* access — poster vs. collaborator vs. public officer — not *platform-entry* access by agency/identity source). This needs its own sizing, however small, before Tuesday's number goes out. Option 1 (cross-platform post/apply) also remains open and unsized.

---

## Connections to Existing Context

- **Touches Pillar 4 (RBAC & Candidate Privacy) in the reduced-scope brief**, not Pillar 1. The existing Pillar 4 scope governs access *within* the Opportunities Module (poster vs. collaborator vs. public officer); Adrian's RBAC proposal adds a new layer — *entry* to the module itself, scoped by WOG identity rather than POCDEX pilot-agency membership. See [Reduced-Scope Feasibility, Pillar 4](../analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md).
- **Same ingestion pipeline as the SJR discussion earlier today** (see [SJR Whiteboard notes](2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md)) — Michelle's response here reiterates that SJR fields/ringfencing differ from STIPs/Gigs and may need a separate pipeline, consistent with what's already flagged as an open question in that doc.
- **PSLF 2026 (July) is a new precedent reference** — not previously documented in this workspace. Worth a short write-up if the OTG vendor conversation proceeds, since it's the closest existing example of pinning a card in OTG.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Confirm whether STIPs/Gigs data fields match between Compass and OTG | Michelle Yip | TBD | 🟡 Medium | Not Started |
| Confirm whether Compass already supports applying to OTG-ingested STIPs/Gigs | Michelle Yip / Engineering | TBD | 🟡 Medium | Not Started |
| Get Rama's technical read on scoping RBAC to the Opportunities Module specifically (WOG AD, independent of POCDEX gate) | Rama Moorthy | TBD | 🔴 High | Not Started |
| Update Pillar 4 (RBAC) in the reduced-scope brief to reflect the module-scoped WOG access proposal | Michelle Yip | Before Tuesday's estimate | 🔴 High | Not Started |
| Explore OTG job-card pinning with the OTG vendor, referencing PSLF 2026 | Michelle Yip | TBD | 🟡 Medium | Not Started |
| Raise the OTG/Compass interim-state problem with WD team | Michelle Yip | TBD | 🟡 Medium | Not Started |

---

## Next Steps

**Immediate:**
- Loop in Rama on the WOG AD/POCDEX question, since it's the fastest way to know if Option 2 is even feasible.
- Confirm the data-field overlap question before spending more time scoping either option in detail.

**Short-term:**
- Raise with WD team per Adrian's ask.
- If Option 2 gains traction, flag its conflict with the R1 one-pager's pilot cohort design explicitly, since it changes a core assumption in that doc.

---

*Related: [SJR Whiteboard notes](2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md), [R1 Epic One-Pager](../prds/2026-09-18-W38-r1-epic-one-pager.md), [SJR To-Be Handover Brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md)*
