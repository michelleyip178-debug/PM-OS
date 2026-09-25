---
date: 2026-09-21
week: 2026-W39
type: review-note
topic: R1 scope slide (STIPs & Gigs | Internal Jobs, SJRs & Secondments) — accuracy check before Adrian presents to Mark
---

# R1 Scope Slide — Staleness Check Before Adrian Presents to Mark

**Context:** Adrian intends to present this "R1 scope confirmed, subject to integration dependencies" slide to Mark. Reviewed against today's (21 Sep) confirmed facts. **The slide predates several of today's confirmations and needs updating before it goes out.**

---

## Panel 1: STIPs & Gigs — Mostly Current, One Framing Gap

**What's on the slide:**
- Decision: simple form-based application, shareable URLs required.
- Non-pilot agency officers need a way to discover/apply — via shareable URLs distributed through EDMs.
- Open: how job posters/applicants on OTG vs. Compass interact.

**Check against today's threads:**
- This slide frames non-pilot-agency access as a **shareable-URL/EDM distribution problem**. Today's actual discussion with Adrian moved past this — he later proposed **RBAC scoped to the Opportunities Module**, open to any WOG-authenticated officer, independent of the POCDEX 6-pilot-agency gate. That's a materially different mechanism (module-level access control, not link distribution) and a different technical ask for Pow Hwee/Rama.
- **This slide likely predates that RBAC conversation.** If Adrian presents "shareable URLs" as the plan to Mark while internally you're scoping RBAC-based module access, that's two different answers to the same question in circulation, which is the exact pattern that caused last week's kickoff-date confusion.

## Panel 2: Internal Jobs, SJRs & Secondments — Stale on Two Confirmed Facts

**What's on the slide:**
- Decision: in scope for R1, subject to critical API dependencies.
- Scope: internal jobs surfaced via **revised HRPS C@G APIs**, with ringfencing by agency/officer/time period.
- SJR integration **dependent on OTG integration**.
- Critical dependency: **HRPS C@G team to deliver revised APIs** for internal job retrieval and ringfencing.

**This conflicts with two things confirmed today:**

1. **"No further changes on C@G ingestion" was confirmed today.** The slide's dependency on "revised HRPS C@G APIs" reads as expecting *changes* to the C@G pipeline (F-23) to support internal job retrieval. That's the opposite of what was just locked. Either the slide means something different by "HRPS C@G APIs" (worth double-checking — is this the separate HRPS Internal Jobs API being explored with Lee Koon TEU, not the C@G ingestion pipeline?), or it needs correcting.

2. **"SJR sits solely in OTG today" was confirmed today** — HRPS/Cumulus can't currently handle the exercise cycle or login friction. The slide's framing ("SJR integration dependent on OTG integration") is directionally consistent with this, but doesn't distinguish concept from solution the way today's discussion settled it: **the concept — SJR is in scope for R1, discoverable via Compass — is fixed. The solution — the specific mechanism (Compass-native Creation/Apply vs. HR-system-hosted vs. pulling from OTG) — is still open**, per today's whiteboard session with Adrian/Rama. The slide's "in scope for R1" line is accurate for the concept; it just doesn't flag that the mechanism underneath it is still being worked out, which matters if Mark asks "how."

**Also missing from this panel:** no mention of the SJR-as-own-epic proposal, or the possible FormSG-with-CV-upload apply flow discussed with Adrian earlier today. If Mark asks how SJR will actually work, "solution not yet fixed" is an honest answer — but the slide as-is doesn't set that expectation, so a "how" question could land as new information rather than a known open thread.

---

## Recommendation Before This Goes to Mark (Panels 1 & 2)

1. **Confirm what "revised HRPS C@G APIs" refers to** — if it means the HRPS Internal Jobs API discovery track (separate from F-23), the slide should say that explicitly and distinguish it from the now-locked C@G ingestion pipeline, to avoid Mark reading "C@G" and assuming the confirmed-locked pipeline is still in flux.
2. **Update Panel 1's non-pilot-agency mechanism** to reflect the RBAC/Opportunities-Module approach if that's now the live direction, not shareable URLs — or confirm both are still on the table and note that explicitly as an open decision, not a settled one.
3. **Update Panel 2 to state the concept/solution split explicitly** — "SJR in scope for R1, discoverable via Compass" (concept, fixed) vs. "delivery mechanism — Compass-native vs. HR-system-hosted vs. OTG-pull — still being worked out" (solution, open). This is more accurate and more presentable than either "settled" or "fully open" — it tells Mark exactly what he can rely on and what's still moving.
4. **Reconcile before Tuesday's estimation sync**, not after — if Adrian presents this to Mark first, whatever Mark takes away becomes another version of "the plan" that needs to match Tuesday's number, same problem as last week's three kickoff dates.

---

## Slide 2: R1 Scope Overview (Table) — Same Stale Dependency, Plus New Scope Not Tracked Elsewhere

**What's on the slide:** a feature-area table (Employment Changes, CAM Integration, STIPs & Gigs, Internal Jobs/SJRs/Secondments, CMM — Competency Bank, CMM — JobID to Competency Mapping, VAPT), each marked In Scope / Deferred / In Scope (limited), with a status note.

**Same issue as Panel 2 above:** the "Internal Jobs, SJRs, Secondments" row repeats "⚠️ Critical dependency on HRPS C@G APIs for internal jobs and OTG for SJR integration" — same stale framing, needs the same concept/solution correction.

**New issue — CMM is not part of R1 anywhere else in this workspace.** Two rows here ("CMM — Competency Bank," in scope/limited, and "CMM — JobID to Competency Mapping," deferred to R2) treat CMM as if it's inside R1's scope. But the only place CMM appears in any R1 doc reviewed this week is the 16 Sep risk register, and there it's framed as a **separate, concurrent workstream competing for the same capacity** — not as R1 scope itself ("January 2027 R1 timeline unachievable given concurrent CMM and Opportunities complexity"). This slide's table structure implies CMM is a line item inside R1. **Worth confirming with Adrian directly: is CMM actually in scope now, or is this table conflating "things happening at the same time as R1" with "things R1 delivers"?** That distinction matters a lot to Mark's read of what R1 actually contains.

**CAM Integration row** says "Deferred, R2" with the note "CAM integration to be completed in R2" — this is worth a quick cross-check too, since the reduced-scope brief and one-pager both currently list **CAM Integration as one of R1's five core pillars** (Pillar 5, 2.0–2.5 mw), not deferred to R2. If this slide is saying something different (e.g., a *specific part* of CAM integration is deferred while the SCIM connector itself ships in R1), that distinction needs to be explicit, because as written it directly contradicts what's in the reduced-scope brief and one-pager.

**VAPT row** ("⚠️ VAPT required for R1. Scope (full vs web-only) and timeline to be confirmed") is accurate and consistent with this week's tracked status — VAPT ownership and timeline are still pending Barry Lim's answer (see this week's weekly plan, Priority 3). No correction needed here, just confirms it's a live open item, not a new one.

---

## Slide 3: R1 Timeline — New Dates, Consistent Dependencies

**What's on the slide:** three timeline options (Jan '27 Aggressive, Feb '27 Moderate, Mar '27 Conservative), each with feasibility and key risk, plus a dependencies list (VAPT scope, HRPS C@G API readiness, OTG integration readiness for SJR, CAM integration risk) and an action-required line asking the team to confirm feasibility.

**On the Jan/Feb/Mar spread:** presenting a range from aggressive to conservative, including a stretch option, is reasonable practice for a stakeholder decision slide — not flagging this as an error. Worth noting for your own tracking that this is a different date framing than the kickoff-date reconciliation already in motion this week (mid-Nov / ~1 Dec / October, for Sprint 1 *start*) — this slide's Jan/Feb/Mar '27 dates read as **pilot launch** targets, consistent with the one-pager's "Mid-February 2027" launch target, not kickoff dates. Worth being explicit with Adrian that these are answering two different questions (when does building start vs. when does it launch) so Mark doesn't conflate them.

**Dependencies list repeats the same stale HRPS C@G / OTG framing** as Panels 1–2 above — same fix applies here once corrected upstream.

**Nothing else on this slide conflicts with what's been tracked this week** — CAM integration risk and VAPT scope are both genuinely open, consistent with this week's status.

---

## Consolidated Recommendation

Before Adrian presents any of these three slides to Mark:
1. Fix the HRPS C@G / OTG framing consistently across all three (concept/solution split for SJR; clarify whether "HRPS C@G APIs" means the separate Internal Jobs API track).
2. **Confirm whether CMM is actually in R1 scope** — if yes, it needs to be added to the reduced-scope brief and one-pager, which currently don't mention it at all; if no, this table needs correcting before Mark sees it.
3. **Resolve the CAM Integration scope conflict** — the slide says deferred to R2, the one-pager/reduced-scope brief say it's one of R1's five core pillars. These can't both be presented to Mark as true.
4. Clarify Jan/Feb/Mar '27 slide is about pilot launch, not Sprint 1 kickoff, so it doesn't get conflated with the separate kickoff-date reconciliation already in motion.

---

*Related: [SJR Whiteboard notes](../meeting-notes/2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md), [OTG/Compass Interim State thread](../meeting-notes/2026-09-21-W39-otg-compass-interim-state-adrian-thread.md), [Reduced-Scope Feasibility brief](../analyses/2026-09-18-W38-r1-reduced-scope-feasibility.md), [R1 Scope Status for Pow Hwee](../slack-messages/2026-09-21-W39-r1-scope-status-for-pow-hwee.md), [R1 Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md)*
