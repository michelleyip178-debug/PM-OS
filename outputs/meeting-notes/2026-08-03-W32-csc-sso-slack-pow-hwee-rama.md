# Meeting Notes: CSC SSO Status — Slack Thread (Pow Hwee, Rama, Marcus)

**Date:** 2026-08-03

**Participants:** Pow Hwee TAN (PSD), Rama MOORTHY (PSD), Marcus (CSC)

**Meeting Type:** Slack thread (async), CSC SSO integration status

**Duration:** N/A (async)

---

## Summary

Two separate updates on the same CSC SSO thread today.

**Update 1 (Pow Hwee ↔ Rama):** Pow Hwee gave a status update on CSC SSO: mostly configuration work remaining, with possible dev work still pending on connectivity. He asked two open questions — the UI-to-DLE page flow, and whether a DLE test account exists for UAT. Rama confirmed no SSO test accounts currently exist and proposed discussing further on a 4pm call.

**Update 2 (Marcus, CSC):** Marcus asked CSC/PSD for a more detailed SSO integration spec for the OTEP-to-DLE flow — not just the high-level architecture. He wanted standard IdP-to-RP detail: URL endpoints, error responses/codes, the detailed integration flow, and a technical spec both sides can build against in parallel. He asked whether PSD already has such a spec, and suggested the existing DLE-ELD SSO integration spec as a model if not.

**Resolution (Michelle, 2026-08-03):** The spec Marcus asked for already exists — Pow Hwee sent it on **15 June** by email. It covers the OTEP→DLE OIDC flow, confirms OTEP as IdP / DLE as RP, lists the issuer/auth/token/JWKS endpoints, defines the ID token claims, and describes DLE's scope of work. So the gap isn't a missing spec — it's that the spec hasn't been formally confirmed/aligned on since being sent. Marcus's question ("does PSD already have this?") suggests it either didn't land with him, wasn't surfaced by whoever he's coordinating with on the CSC side, or needs re-confirmation two months later.

**Why this matters right now:** This week's Top Priority 2 was confirming CSC tracker status directly with Rama. **Update from Michelle (2026-08-03): Rama isn't willing to share that tracker, so this stays untracked on Pathfinder's side going forward.** Separately, Michelle confirmed Pathfinder's scope in providing CSC SSO connectivity is done — the DLE test-account gap and UI-to-DLE flow question are downstream of that connectivity and sit with DLE/Rama's side, not a Pathfinder open item. **Marcus's ask, now resolved:** the detailed spec already exists (Pow Hwee, 15 Jun) — what's actually needed is re-sending/re-confirming it with Marcus directly, not new engineering work. This is a communication/handoff gap, not a technical one — a second live example of information not reaching the person who needs it, similar to the tracker-sharing gap above.

---

## Decisions Made

1. **Pathfinder's SSO connectivity scope is complete.**
   - **Why:** Michelle confirmed (2026-08-03) that Pathfinder's job in providing CSC SSO connectivity is done. Remaining open items (DLE test account, UI-to-DLE flow) are DLE/Rama-side follow-through, not gaps in Pathfinder's delivery.
   - **Who decided:** Michelle
   - **Impact:** Closes out open item #30 from Pathfinder's side; no further Pathfinder action expected on SSO connectivity itself.

2. **CSC Integration Master Tracker will not be shared with Michelle/Pathfinder.**
   - **Why:** Rama declined to share the tracker. Michelle is not pursuing further.
   - **Who decided:** Rama (declined); Michelle (accepted, not escalating)
   - **Impact:** Michelle/Pathfinder won't have direct visibility into CSC-side tracking going forward — status updates on the CSC/DLE side will likely keep surfacing ad hoc (e.g. via Slack) rather than through a shared artifact. Worth noting this closes out this week's Priority 2 tracker-confirmation task, but not in the way originally hoped (confirmed to exist and be usable) — confirmed to exist, not accessible.

3. **The detailed SSO integration spec Marcus asked for already exists — no new spec needs to be written.**
   - **Why:** Pow Hwee sent this exact detail (OTEP→DLE OIDC flow, IdP/RP roles, issuer/auth/token/JWKS endpoints, ID token claims, DLE scope of work) by email on 15 June 2026.
   - **Who decided:** Michelle (confirmed via Pow Hwee's prior work)
   - **Impact:** Reframes the action from "produce a spec" to "re-share/re-confirm the existing spec with Marcus" — much lower lift, and doesn't need new engineering time from Pow Hwee/Léo.

---

## Action Items

| Task | Owner | Due Date | Priority | Status |
|------|-------|----------|----------|--------|
| Discuss UI-to-DLE flow and DLE test account availability | Pow Hwee, Rama | Today, 4pm call | Medium | 🔴 Not Started |
| Confirm whether a DLE test account can be provisioned for UAT | Rama | TBD — raise at 4pm call | Medium | 🔴 Not Started |
| Re-share/re-confirm the existing 15 Jun SSO integration spec directly with Marcus (CSC) | Pow Hwee / Michelle | Not yet set — raise this week | High | 🔴 Not Started |
| Confirm with Marcus whether the 15 Jun spec fully answers his ask, or whether specific pieces (e.g. error responses/codes) are still missing from it | Pow Hwee | Not yet set | Medium | 🔴 Not Started |

**Notes:**
- No test accounts for SSO exist today. This is now tracked as a DLE/Rama-side open item, not a Pathfinder deliverable — flagging only because UAT starts 11 Aug (8 days out) and it's still open, not because Pathfinder owns closing it.
- Removed the "log in CSC tracker" action item — tracker isn't accessible to Michelle/Pathfinder per Rama's decision above.
- Marcus's spec request is resolved as a re-sharing/confirmation gap, not a missing-spec gap — the 15 Jun email already covers what he asked for. Worth a quick check that it covers error responses/codes specifically, since that's one of the four things Marcus named and it's not explicitly listed in the recap of what the 15 Jun email contained.

---

## Key Insights & Quotes

**Technical status:**
- Pow Hwee: CSC SSO completion is "mostly configuration," with "potential for some development pending connectivity" — not yet fully resolved, still has an open technical tail.
- Open question raised: the specific UI-to-DLE page flow isn't yet nailed down.

**Gap surfaced:**
- Rama: "We do not have any test accounts for SSO" — direct confirmation of a UAT blocker, not yet resolved, pushed to the 4pm call.

**Marcus's ask (CSC), specificity gap — now resolved:**
- He wasn't asking for the high-level architecture again — that's already confirmed (OIDC Authorization Code Flow, OTEP/Keycloak as IdP, DLE as Relying Party, per open item #30). He was asking for the *implementation-level* detail: URL endpoints, error responses/codes, the detailed integration flow.
- **This detail was already sent.** Pow Hwee's 15 June email laid out the OTEP→DLE OIDC flow, confirmed IdP/RP roles, listed issuer/auth/token/JWKS endpoints, defined ID token claims, and described DLE's scope of work.
- So the real gap is alignment/confirmation on an existing artifact, not a new technical design — Marcus's question ("does PSD already have this?") reads as a sign the 15 Jun spec either didn't reach him or wasn't recognized as covering his ask.

---

## Open Questions

- [ ] What is the exact UI-to-DLE page flow? — **Owner:** Pow Hwee / Rama — **By:** Today's 4pm call — *DLE/Rama-side item, informational for Pathfinder*
- [ ] Will a DLE test account be available in time for UAT (starts 11 Aug)? — **Owner:** Rama — **By:** Today's 4pm call — *DLE/Rama-side item, informational for Pathfinder*
- [x] ~~Does PSD/OTEP already have a detailed IdP-to-RP spec?~~ **Resolved 2026-08-03:** Yes — Pow Hwee sent it 15 Jun by email.
- [ ] Did the 15 Jun spec fully reach Marcus/CSC, and does it cover error responses/codes specifically? — **Owner:** Pow Hwee — **By:** Not yet set

---

## Timeline Risks

- **TIMELINE RISK (informational, not a Pathfinder-owned risk):** No SSO test account exists yet, and UAT is scheduled to start **11 August** (8 days out) per open item #39/the UAT/VAPT timeline. This sits on the DLE/Rama side now that Pathfinder's connectivity scope is complete — flagging in case it resurfaces as a shared UAT blocker, not because Pathfinder needs to act on it.

---

## Next Steps

**Immediate (Today):**
- Pow Hwee/Rama's 4pm call covers the UI-to-DLE flow and DLE test account — Pathfinder's part (connectivity) is already done, so this is their follow-through, not a Pathfinder action item.

**This Week:**
- No further Pathfinder action on CSC tracker confirmation — Rama declined to share it, and Michelle is not escalating. This closes out this week's Priority 2 tracker-confirmation task (see Decisions above).

---

## Context for Future Reference

This connects to two already-tracked threads:
- **Open item #30** (CSC SSO / DLE): technical design confirmed 26 Jun, DLE testing targeted for August, approval docs TBC. Per the 2026-08-03 update, Pathfinder's connectivity delivery under this item is complete, and the implementation-level spec Marcus asked for also already exists (Pow Hwee, 15 Jun). Worth updating #30's status note to reflect that the detailed spec predates this thread by ~7 weeks — the open piece is re-confirming it landed with CSC, not producing it.
- **CSC Integration Master Tracker retro** (`outputs/decisions/2026-07-31-W31-csc-integration-alignment-retro.md`): the tracker exists (per Rama), but Rama has declined to share it with Michelle/Pathfinder. The retro's root-cause fix (one shared, visible artifact replacing scattered channels) is only partially realized — the artifact exists, but it isn't shared, so status will likely keep surfacing via Slack from Pathfinder's vantage point regardless. Marcus's question about a spec that was already sent 15 Jun is itself a live example of that exact pattern — the same root cause named in the retro (5 Whys: "each side believes the other owns the next move," "specs communicated through scattered channels, not one shared artifact") appears to have repeated here, just on the CSC/DLE side of the handoff instead of the PSD side.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand raw thread</summary>

**Update 1 — Pow Hwee ↔ Rama:**

@Pow Hwee TAN (PSD) clarified that the CSC SSO completion status is mostly configuration, with potential for some development pending connectivity, and inquired about the specific flow from UI to DLE pages and the availability of a DLE test account for UAT [7].

@Rama MOORTHY (PSD) confirmed that they do not have any test accounts for SSO and suggested discussing this further on the 4 PM call [8].

**Update 2 — Marcus (CSC):**

Marcus was asking CSC/PSD for a more detailed SSO integration specification for the OTEP-to-DLE flow — not just the high-level architecture. Specifically, he wanted the usual IdP-to-RP details such as URL endpoints, error responses and codes, the detailed integration flow, and the technical spec needed for both sides to build in parallel. He also asked whether PSD already had such a spec, and said that if not, they could use the existing DLE-ELD SSO integration spec as the model.

He also framed the roles clearly: DLE/CSC as the Relying Party and OTEP/PSD as the Identity Provider, and said the missing piece was the final integration requirement/spec detail, not the general flow.

**Resolution — Michelle (2026-08-03):**

Yes — Pow Hwee had already sent a detailed technical SSO spec. Pow Hwee's 15 Jun email laid out the OTEP → DLE OIDC flow, specified OTEP as the IdP / DLE as the RP, listed the issuer, auth, token, and JWKS endpoints, defined the ID token claims, and described the DLE scope of work for the integration.

What was still open was confirmation/alignment, not the existence of a spec itself. Marcus later asked whether PSD already had such a specification and said the missing part was the detailed integration spec to let both sides develop in parallel, which suggests the thread still needed formal agreement rather than a brand-new technical design.

</details>
