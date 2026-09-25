---
date: 2026-09-23
week: 2026-W39
type: meeting-notes
meeting_type: Slack thread digest
source: #psd-pdo-otep-int, last 48 hours
attendees: Adrian Ang, Pow Hwee Tan, Rama Moorthy, Jace Tan, Michelle
topic: R1 scope negotiation — STIPs, Gigs, Opportunities on Compass vs. OTG
---

# Slack Digest: R1 Scope Negotiation (Last 48 Hours)

**Channel:** #psd-pdo-otep-int

**Type:** Async stakeholder negotiation, not a live meeting — reconstructed from a 48-hour thread

---

## Summary

Adrian's Tuesday-night read moves the ball significantly: STIPs/Gigs functionality is now heading to Compass for WOG officers, and he's leaning toward opening the whole Opportunity page to WOG rather than a restricted view, pending Mark's sign-off. That's a real answer to the discovery-access question flagged as pending in yesterday's scope map, though "leaning toward" isn't the same as confirmed. CAM integration is deferred to R2. Two things are still unresolved: Admin Portal RBAC scope, and the OTG→Compass routing mechanism, which is now explicitly on you to figure out.

---

## Decisions Made

1. **STIPs/Gigs functionality moves fully to Compass for WOG officers.**
   - **Who decided:** Adrian Ang (his stated read, late Tuesday night)
   - **Why:** Follow-up to your scope map proposal that Compass be the sole platform for posting/discovering/applying
   - **Impact:** You now own figuring out OTG→Compass routing for WOG officers — this wasn't scoped as a task until this thread

2. **Leaning toward opening Compass's whole Opportunity page to WOG, not a restricted view.**
   - **Who decided:** Adrian's lean, not yet final — pending Mark's sign-off
   - **Why:** Not stated in the thread
   - **Impact:** This is effectively Option B (WOG-wide full parity) from your scope map's pending item — if Mark signs off, the discovery-access question that's been open since the 22 Sep estimation discussion gets resolved in favor of the broader option, not the pilot-only or hybrid alternatives
   - **Status:** Jacky aligned; Mark's sign-off still outstanding

3. **CAM integration deferred to R2.**
   - **Who decided:** Adrian Ang
   - **Why:** Conserve bandwidth for Opportunities + CMM
   - **Impact:** Resolves the three-way conflict flagged in your R1 scope tree (CAM: scope-slide says "Deferred to R2" vs. one-pager says "R1 core pillar") — Adrian's read sides with the scope-slide version. Worth confirming this gets reflected back into the one-pager, since that document currently contradicts this.

4. **Pow Hwee's position: remove the OTG↔Compass interfaces from R1 scope entirely.**
   - **Who decided:** Proposed by Pow Hwee Tan, not yet adopted as a decision
   - **Why:** Maintaining dual interfaces "is not worth it at all" — current capacity can handle STIPs & Gigs, but internal jobs are risky given the October timeline
   - **Impact:** This is in tension with Adrian's OTG→Compass routing ask (item 5 below) — if the interfaces are removed, there's nothing to route. Worth flagging this contradiction before you spend time on routing design.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Give feedback on Adrian's R1 Scope Review deck | Michelle | EOD Wed | 🔴 High | Not Started |
| Figure out OTG→Compass routing for WOG officers | Michelle | Not specified | 🔴 High | Not Started |
| Resolve the STIPs/Gigs discovery-access question (confirm Adrian's WOG-wide lean is final) | Michelle | Not specified | 🔴 High — blocks estimate | Not Started |
| Confirm/correct Rama's R1 scope summary (Opportunity Portal, Internal Job Ingestion, Discovery Page, RBAC, CAM) | Michelle | Not specified | 🟡 Medium | Not Started |
| Give rough man-month estimate for cross-system posting/discovery/application flow, in case Mark asks | Pow Hwee Tan | Not specified | 🟠 Medium-High | Not Started |
| Confirm pathfinder squad composition for R1 (Thomas, Leo, possibly Hao Eng) | Adrian Ang | Not specified | 🟡 Medium | Not Started |
| Review Rama's draft Compass Day2Ops support process | Michelle | Not specified | 🟡 Medium | Not Started |
| Confirm whether CareerCompass@psd.gov.sg mailbox routes incidents to engineering leads | Jace Tan | Not specified | 🟢 Low | Not Started |
| Get Mark's sign-off on WOG-wide Opportunity page access | Adrian Ang (or escalate) | Not specified | 🔴 High — gates the discovery-access decision | Not Started |

**Notes:**
- The EOD Wed deadline for scope deck feedback is the only firm date in this thread — everything else is unscheduled and should get dates attached.
- Man-month estimate (Pow Hwee) and Mark's sign-off (Adrian) are both prerequisites your own action items depend on — worth chasing rather than waiting.

---

## Key Insights

**Where this thread actually moves the scope map forward:**
- Adrian's read is the first concrete signal on the pending discovery-access item from yesterday's scope map — but it's a lean, not a lock. Treat it as directionally useful, not as the resolved answer, until Mark signs off.
- Pow Hwee's "remove OTG↔Compass interfaces entirely" position is a more radical proposal than anything currently in the scope map — it's not "who can access what," it's "should the dual-system bridge exist at all." This deserves its own conversation, not just folding into the discovery-access thread.

**Political dynamics worth naming:**
- Pow Hwee is flagging capacity risk on internal jobs specifically, given October — this is a resourcing concern distinct from the scope/access question, and it's the kind of thing that could get lost if the thread stays focused on STIPs/Gigs.
- Rama's proposed scope summary (with the end-March 2027 date) is the same one you already flagged contradictions in yesterday (see your draft reply to his Slack post) — that reply hasn't gone out yet as far as this thread shows, and it's now colliding with Adrian's newer read. Worth sending that reply before more scope summaries stack up on top of unresolved dates.

---

## Open Questions

- [ ] Is Adrian's "leaning toward WOG-wide" read final, or does it wait on Mark? — **Owner:** Michelle, follow up with Adrian — **By:** Before EOD Wed feedback
- [ ] Does Pow Hwee's "remove the interfaces entirely" proposal conflict with the OTG→Compass routing task Adrian just assigned you? — **Owner:** Michelle — **By:** Before starting routing design work
- [ ] Is the CAM R2 deferral going to be corrected in the one-pager, which still says R1 core pillar? — **Owner:** Michelle — **By:** Not specified
- [ ] What's the actual due date for the OTG→Compass routing design? — **Owner:** Michelle, ask Adrian — **By:** Not specified

---

## Blockers

1. **Discovery-access decision blocks the estimate.**
   - **Blocked by:** Mark's sign-off on WOG-wide Opportunity page access
   - **Impact:** RBAC sizing and the STIPs & Gigs estimate can't finalize until this resolves — same blocker flagged in yesterday's scope map, now one step closer but not cleared
   - **Resolution:** Chase Mark's sign-off directly, or escalate through Adrian, rather than waiting for it to surface

2. **Unclear scope on Admin Portal RBAC.**
   - **Blocked by:** Adrian flagged this as unclear in his own read — no one has proposed an answer yet
   - **Impact:** Downstream of the discovery-access decision, but distinct from it
   - **Resolution:** Not yet assigned an owner or path forward

---

## Timeline Risks

**TIMELINE RISK: Rama's proposed scope summary states "Launch is End March, 2027," which is a third date beyond the two already tracked as unreconciled (mid-Feb 2027 in the one-pager, Feb–Mar in the transition-plan doc).** You already flagged this contradiction in an unsent Slack reply draft from yesterday (22 Sep). This thread doesn't resolve it — if anything, more scope summaries are circulating with this date attached before the underlying conflict gets settled. Recommend sending that reply now rather than letting a fourth version circulate.

**TIMELINE RISK: Pow Hwee flagged internal jobs as "risky given the October timeline," but no specific October date or deliverable is named in this thread.** Worth clarifying what October gate she's referring to before treating this as a scheduling constraint.

---

## Connections to This Week's Threads

- **Directly follows your scope map ([outputs/decisions/2026-09-22-W39-stips-gigs-scope-map.md](../decisions/2026-09-22-W39-stips-gigs-scope-map.md)):** Adrian's lean toward WOG-wide is the first real movement on the pending discovery-access item. Not yet confirmed, but it's evidence, not noise.
- **Connects to the R1 scope tree's CAM conflict (CAM1/CAM2/CAM3):** Adrian's R2 deferral sides with the scope-slide version over the one-pager. The one-pager needs correcting.
- **Connects to your unsent draft reply to Rama's original scope post** ([outputs/slack-messages/2026-09-22-W39-reply-to-rama-r1-scope-post.md](../slack-messages/2026-09-22-W39-reply-to-rama-r1-scope-post.md)): still relevant, arguably more urgent now that a second scope summary (this thread's context) has surfaced with the same unreconciled date.
- **New, not yet tracked anywhere formal:** Pow Hwee's proposal to remove OTG↔Compass interfaces entirely. This isn't in the risk register and isn't in your scope map — it's a genuinely new position that could reshape the routing work Adrian just assigned you.

---

## Next Steps

**Immediate:**
- Send the already-drafted reply to Rama's scope post before responding to this newer thread, so you're not answering two versions of the same date conflict separately.
- Get clarity from Adrian on whether "leaning toward WOG-wide" is provisional or something you can start designing against.
- Flag the Pow Hwee/Adrian tension (remove interfaces vs. route between them) directly — this needs to be resolved before OTG→Compass routing work starts, not discovered mid-design.

**Before EOD Wed:**
- Submit feedback on the R1 Scope Review deck, informed by the above.

---

*Related: [STIPs & Gigs Scope Map](../decisions/2026-09-22-W39-stips-gigs-scope-map.md), [Reply to Rama — R1 Scope Post](../slack-messages/2026-09-22-W39-reply-to-rama-r1-scope-post.md), [R1 Scope Confirmed Transition Plan](../decisions/2026-09-22-W39-r1-scope-confirmed-transition-plan.md), [OTG-Compass Interim State — Adrian Thread](2026-09-21-W39-otg-compass-interim-state-adrian-thread.md)*
