# R1 Brainstorm — Running Doc

**Cadence:** Bi-weekly, starting Sprint 9 (week of 6 Sep 2026)

**Core attendees:** Michelle, Pow Hwee Tan (Tech Lead), Liting (Li Ting Kway, Product Designer)

**Purpose:** Protected, structured thinking time on R1 direction (options, feasibility checks, open questions), separate from day-to-day MVP delivery work.

This doc accumulates across sessions. Each entry is dated. Don't delete old entries: strike through if superseded, and say why.

---

## How to use this doc

Each session, capture:
1. **What we discussed:** 2-3 bullets, not a transcript
2. **Ideas surfaced:** even half-formed ones, tag with 💡
3. **Feasibility flags from Pow Hwee:** technical constraints or risks raised
4. **Decisions or directional calls:** if any were made
5. **Carried-over open questions:** pull from the list below, update status

---

## Standing Open Questions (carry forward each session)

- [ ] Does R1 need a second, separate VAPT cycle? Adrian's working assumption is yes (surfaced in 2026-08-31-W36-adrian-biweekly-sync.md).
- [ ] What is Compass's actual R1 development -> UAT -> VAPT critical path? Adrian floated "UAT by mid-Jan, then 8 weeks VAPT" verbally: unsized, not a committed plan. Needs proper sizing before it calcifies into fact the way Sprint 9's date did.
- [ ] Does CIE's current backend-only footprint change the VAPT-cycle question once R1 adds new endpoints?
- [ ] CAM-integration endpoint scope: needs sizing, feeds R1 planning directly.
- [ ] Authentication testing coverage for R1 (username/password vs. government-identity-provider): no testing matrix exists yet.
- [ ] Scope boundary on opportunity types: If discovery with Megan Yeo (PCG) on internal jobs/secondments cannot land in time, fall back to native STIPs/Gigs in Compass + ingestion from C@G/OTG (surfaced in 2026-09-04 huddle with Liting).
- [ ] Ingested opportunities friction: How do we eliminate dual posting and avoid additional logins if internal jobs and secondments are redirected or ingested from C@G or OTG?
- [ ] Design capacity constraint: Liting is the sole designer managing both CMM discovery (15 Sep BO sharing milestone) and R1 Opportunities. Monitor capacity and flag to Adrian if discovery slips.

---

## Session Log

### 2026-09-XX (Sprint 9, Session 1) — *not yet held*

*Fill in after first session.*

---

## Context Anchors (don't re-derive each time — reference these)

- **R1 one-pager (opportunities BCR approach):** in progress with Adrian, per [2026-08-31-W36-adrian-biweekly-sync.md](../meeting-notes/2026-08-31-W36-adrian-biweekly-sync.md) — send to Adrian for review once ready.
- **R1 discovery findings:** pending from designer, will feed straight into this doc once shared.
- **Identity architecture (NRIC vs. long-term identity authority):** directly relevant to R1's CMM/competency work — see [2026-09-01-W36-squad-sync.md](../meeting-notes/2026-09-01-W36-squad-sync.md) Identity Architecture Deep Dive. Watch items (WD onboarding roadmap, SingPass, non-POCDEX expansion) may surface mid-R1-planning.
- **CMM discovery timeline:** remaining agency interviews complete before 15 Sep; findings shared with BOs 15 Sep. R1 brainstorm sessions should track whether CMM discovery outputs are landing before internal R1 solutioning gets too far ahead of them.
- **MVP timeline dependency:** MVP employment-lifecycle freeze runs through end-September (open item #61) — R1 dev capacity likely can't ramp until that workstream closes. Confirm with Rama/Adrian before assuming Sprint 9-onwards R1 brainstorming implies concurrent R1 *development* capacity — it doesn't yet.

---

*Created: 2026-09-01. Update after every session — this is the source of truth for R1 direction-in-progress, not a one-off artifact.*
