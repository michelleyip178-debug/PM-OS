---
feature: CareerCompass Release 1 — Candidate Ideas & Prioritization
date: 2026-07-03
owner: Michelle Yip
parent-prd: outputs/prds/2026-06-25-W26-careercompass-r1-xfn-kickoff.md
status: Discovery — none of these are committed R1 scope
---

# R1 Candidate Ideas — Brainstorm, Assumption Risk, and ICE Prioritization

Split out from the R1 XFN Kickoff PRD on 2026-07-03 to keep the PRD readable. This is the full discovery trail: 15 candidate ideas generated across PM/Designer/Engineer perspectives (targeting the new native manager status-update UX created by Epic C's World A→B revert, plus known risks elsewhere in R1), their assumption-risk analysis, and two rounds of prioritization (qualitative, then ICE-scored).

**Bottom line for the PRD:** 3 ideas are unblocked and ready to pull into stories now (form-abandonment instrumentation, status timeline, "what happens next" copy). 1 idea (manager one-click status update) is high-impact but needs a quick resolve-then-build step. The rest are gated on #18/#41 (competency SSOT) or Adrian's sign-off (agency-comparison framing) — don't prioritize into stories until those resolve.

---

## ICE-Scored Prioritization

ICE = Impact × Confidence × Ease, 1-5 each, max 125. This superseded the initial qualitative Top 5 (below) once assumption-risk analysis was complete — several "obvious" picks scored lower than expected because Confidence/Ease were capped by unresolved dependencies (#18/#41, UI feasibility, legal sign-off).

**⚠️ Caveat:** This is a first-pass, single-reviewer ICE score (done by Michelle via AI assistant, not yet validated with the actual product trio — Amber/Pow Hwee/Léo haven't scored these themselves). Treat as a starting hypothesis for discussion, not a settled ranking.

### Top 5 by ICE score

| Rank | Idea | Impact | Confidence | Ease | ICE | Rationale |
|---|---|---|---|---|---|---|
| 1 | Instrument Epic B form-section abandonment | 4 | 5 | 5 | **100** | Zero new infra (PostHog already in use), directly strengthens the existing kill criterion (stale pre-fill >10%). Closest thing to a "just build it" item on the list. |
| 2 (tie) | Status timeline (not badge) | 4 | 4 | 5 | **80** | Cheapest way to make R1's core hypothesis ("fix the status black hole") tangible to officers. No blocked dependencies. |
| 2 (tie) | "What happens next" micro-copy on confirmation | 4 | 4 | 5 | **80** | Same profile as above — trivial build, real trust impact if worded as aspirational rather than a guarantee. Natural pairing with the status timeline on the same screen. |
| 4 | Idempotent status-transition API | 3 | 5 | 5 | **75** | Protects the one new piece of infrastructure (native manager status updates) R1 is now building unscoped and under time pressure. |
| 5 | Empathetic rejection copy, tiered by stage | 4 | 3 | 4 | **48** | Supports the UAT satisfaction guardrail (≥3.5/5); only gate is confirming the state machine can distinguish rejection stages. |

**Held back deliberately — not deprioritized, gated:** Manager one-click status update (ICE 45) directly patches the Red risk in the parent PRD's Risks table and is arguably more strategically important than anything above it. It ranks 6th only because Confidence/Ease are capped by two open questions — a confirm-step design for the terminal "Outcome" transition, and confirming the existing posting-view UI has room for this without a redesign (Amber/Pow Hwee). Once resolved, this jumps to the top.

### Full ICE scoring — all 15 ideas

| # | Idea | Impact | Confidence | Ease | ICE | Note |
|---|---|---|---|---|---|---|
| 1 | Manager one-click status update | 5 | 3 | 3 | 45 | Highest raw impact; gated on confirm-step + UI feasibility (see above) |
| 2 | Status timeline (not badge) | 4 | 4 | 5 | 80 | — |
| 3 | ATS webhook stub | 2 | 2 | 3 | 12 | Speculative value for 2028+; event-bus fit unconfirmed |
| 4 | Reuse pre-fill data model for applicant summaries | 3 | 1 | 2 | 6 | Blocked on #18/#41 |
| 5 | Empathetic rejection copy, tiered | 4 | 3 | 4 | 48 | — |
| 6 | "Why was I rejected?" free-text field | 3 | 1 | 3 | 9 | Blocked on PSD legal sign-off |
| 7 | Cross-agency application visibility | 2 | 1 | 3 | 6 | Unclear value; privacy risk unresolved |
| 8 | "Time to first status update" dashboard | 3 | 2 | 4 | 24 | Needs Adrian to confirm an escalation action exists |
| 9 | Weekly digest of saved jobs closing soon | 2 | 1 | 3 | 6 | Blocked on open item #15 (notification service) |
| 10 | Agency league table (internal) | 2 | 1 | 3 | 6 | Political risk — same BO trust dynamic as CMM this week |
| 11 | Pre-fill confidence indicator | 2 | 1 | 2 | 4 | Lowest score — could increase distrust; feasibility unconfirmed given #18/#41 |
| 12 | "What happens next" micro-copy | 4 | 4 | 5 | 80 | — |
| 13 | Idempotent status-transition API | 3 | 5 | 5 | 75 | — |
| 14 | Instrument Epic B form-section abandonment | 4 | 5 | 5 | 100 | — |
| 15 | Batch status-digest (vs. real-time) | 2 | 1 | 4 | 8 | Could quietly violate the 24hr OKR by construction — confirm latency tolerance with Adrian first |

**What got deprioritized and why:**
- **#18/#41-blocked** (reuse pre-fill data model, pre-fill confidence indicator) — inherit the PRD's highest-severity open dependency; revisit only after competency SSOT resolves.
- **Politically sensitive** (agency league table, cross-agency visibility) — Confidence capped by unresolved trust/privacy risk larger than this feature set.
- **Speculative engineering bets** (ATS webhook stub) — "cheap insurance" framing doesn't hold once feasibility is actually questioned.
- **Externally blocked** (weekly saved-jobs digest, "why rejected" text field) — good ideas, blocked on decisions outside this PRD's control (open item #15, legal sign-off).

---

## Original Qualitative Top 5 (superseded by ICE scoring above)

Kept for provenance — this was the first-pass gut ranking before assumption-risk analysis was applied.

| # | Idea | Perspective | Why originally prioritized |
|---|---|---|---|
| 1 | Manager status-update as one-click action, not a form | Designer | Directly answers the biggest open gap — Epic C's manager UX is unscoped and flagged Red. Cheapest possible design for new mandatory scope. |
| 2 | Status timeline (not just a badge) | Designer | Makes the core R1 hypothesis (fixing the "status black hole") visibly real to officers; low engineering lift. |
| 3 | Status-update webhook stub for future ATS re-integration | Engineer | Cheap insurance against a second scope-reversal in 2028+ when ATS actually becomes available. |
| 4 | Reuse pre-fill/competency data model for applicant summaries | Engineer | Avoids building a second data path for the new native manager UX. |
| 5 | Empathetic rejection copy, tiered by stage | Designer | Already-flagged "most emotionally sensitive surface" risk; near-zero engineering cost. |

---

## Full Idea List — Assumption Risk Summary

**PM ideas:**
| Idea | Highest risk | Confidence | Gate before building |
|---|---|---|---|
| "Why was I rejected?" micro-feedback field | Legal/compliance — discoverable HR statements could be used in disputes | High | PSD legal sign-off |
| Cross-agency application visibility for HR | Privacy — officers may not expect cross-agency visibility; could bias managers against "job shoppers" | High | Legal/privacy check; UXR values review |
| "Time to first status update" leading indicator | Value — vanity metric unless someone owns an escalation path | Medium | Confirm with Adrian there's an action, not just a dashboard |
| Weekly digest of saved jobs closing soon | Blocked — open item #15 (email/notification service) still unresolved | High | Don't scope until #15 resolves |
| Agency league table (internal) | Political — could damage BO trust already strained by CMM dynamics this week | High | Explicit Adrian sign-off; likely reframe as private per-agency only |

**Designer ideas:**
| Idea | Highest risk | Confidence | Gate before building |
|---|---|---|---|
| Status timeline (not badge) | Usability — 3 stages may feel too sparse | Medium | Mockup test with pilot officers |
| Manager one-click status update | Usability — no undo on terminal "Outcome" transition; feasibility depends on existing UI having room | High | Add confirm-step for Outcome; confirm UI feasibility with Amber/Pow Hwee |
| Empathetic rejection copy, tiered by stage | Feasibility — needs state machine to capture which stage triggered rejection | Medium | Confirm state machine granularity supports tiering |
| Pre-fill confidence indicator | Value — could increase distrust rather than reduce it; also may not be technically capturable | High | User-test before building; confirm feasibility with Léo/Kingsley given #18/#41 is still open |
| "What happens next" micro-copy on confirmation | Usability — promising 24hr as a guarantee vs. aspiration during unproven Phase 1 | Medium | Word as aspirational range, not a hard promise |

**Engineer ideas:**
| Idea | Highest risk | Confidence | Gate before building |
|---|---|---|---|
| ATS re-integration webhook stub | Value/feasibility — speculative for a 2028+ need; assumes event-bus pattern exists | Medium | Confirm with Pow Hwee/Léo whether this fits current architecture; time-box the stub |
| Reuse pre-fill data model for applicant summaries | Feasibility — inherits and doubles the blast radius of the unresolved #18/#41 SSOT risk | High | Wait for #18/#41 competency SSOT contract to finalize |
| Idempotent status-transition API | Low risk — standard hygiene | Low | Build as standard practice regardless |
| Instrument Epic B form-section abandonment | Low risk — additive PostHog tracking, infra already in place | Low | Build alongside existing instrumentation work |
| Batch status-digest instead of real-time | Value — could quietly violate the 24hr latency OKR by construction (near-zero margin if daily batch) | High | Confirm with Adrian whether the OKR has margin for batch-induced latency |

---

## Cross-Cutting Pattern

Two existing open threads resurfaced across multiple independent ideas rather than being isolated risks:
- **#18/#41 (competency SSOT)** blocks or weakens 3 ideas (pre-fill confidence indicator, reused data model for applicant summaries, and indirectly cross-agency visibility's data quality).
- **BO/agency trust sensitivity** (same dynamic as this week's CMM scope-pressure discussions) shows up in 2 ideas (leading-indicator dashboard, agency league table) — both need explicit sign-off from Adrian before proceeding, framed privately rather than as cross-agency comparisons.

**Recommendation:** Don't prioritize any idea touching #18/#41 or agency-comparison framing into R1 stories until those two underlying threads resolve — they're the same blockers already tracked in the parent PRD's Risks table, not new problems.

---

*Source: Product trio brainstorm + assumption-risk stress test + ICE prioritization, 2026-07-03.*
*Parent PRD: [2026-06-25-W26-careercompass-r1-xfn-kickoff.md](../../../prds/2026-06-25-W26-careercompass-r1-xfn-kickoff.md)*
