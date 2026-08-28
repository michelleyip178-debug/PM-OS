# Meeting Notes: CSC-SSO Problem — Troubleshooting Session

**Date:** 25 Aug 2026, 3:30–4:00pm

**Attendees:** Pow Hwee TAN, Marcus CHANG (CSC), Rama MOORTHY, Kingsley LOW, Michelle Yip. CSC Learn team referenced.

**Meeting Type:** Technical troubleshooting / cross-team engineering sync — the CSC call flagged in today's daily plan as the direct next step on the one open blocker to Phase 2 UAT closure

**Duration:** ~30 minutes

**Note on source:** Input is the PM's own structured executive assessment of a transcribed meeting, not a raw transcript. Risk classification, "Missing Escalation Plan," "Missing Rollout Plan," and "What I Would Escalate to Leadership" sections are the PM's own synthesis, retained as provided.

---

## Plain-Language Summary

**What's broken:** Some users can't log into CSC Learn (an external training platform) automatically after logging into Career Compass — they get stuck on a login screen instead of moving through seamlessly (single sign-on, or "SSO").

**Who's affected:** Only users on government "Comet" devices (which route internet traffic through a security tool called Menlo before it leaves the network). Users on "SEED" devices, which connect to the internet directly, aren't affected.

**Why it's happening (best guess so far):** The team thinks Menlo's security layer is stripping out the login information (session/cookie data) as traffic passes through it, so CSC Learn can't recognize the user is already logged in. This isn't proven yet — the team still needs to collect evidence.

**What's being done about it:** Three parallel options are on the table: (A) get Menlo to allow the login data through, (B) add an extra login step as a stopgap, or (C) build a new technical workaround. Nobody has decided when to pick one option over the others, or who gets to make that call.

**Why it matters:** This is the last known open defect blocking sign-off on testing (UAT) for this feature, and testing needs to close before the programme's November launch date.

---

## Summary

Genuinely productive technical session: the team converged quickly on a likely root cause — the Comet/Menlo browser isolation layer, not the Career Compass or CSC Learn implementation itself. Users on SEED devices (internet) get seamless SSO into CSC Learn; users on Comet devices (intranet → internet transition) hit a login-required screen instead, and the working theory is that Menlo's remote browser isolation doesn't carry the Career Compass session/cookies across. Three solution paths were identified in parallel rather than betting on one. But the meeting's own framing is direct: this answered the technical question ("why is SSO failing?") and almost entirely skipped the programme question ("what do we launch if it isn't fixed in time?"). No escalation timeline, no launch-readiness call, no user-impact sizing, no fallback trigger points — all open.

*Terms used below: **SSO** = single sign-on (logging in once, then moving between systems without logging in again). **Menlo** = a browser-isolation security tool used on Comet (intranet) devices that this issue is tracing back to. **CSC Learn** = the external training platform users are trying to reach. **Career Compass** = this programme's own system, the starting point of the login flow. **VAPT** = vulnerability assessment and penetration testing, a security review step required before launch.*

---

## What Actually Happened

| Scenario | Result |
|---|---|
| SEED devices, internet access, Career Compass → CSC Learn | ✅ Works — seamless SSO |
| Comet devices, intranet access, Career Compass → CSC Learn | ❌ Fails — login-required screen instead of seamless SSO |

**Working hypothesis (Pow Hwee Tan and Marcus Chang aligned):** When traffic transitions from intranet to internet, the Menlo remote browser isolation layer sits in between. The browser session/cookies established in Career Compass aren't visible to the remote browser environment, so CSC Learn can't recognize the existing authenticated session. **Not yet proven with artefacts — still a hypothesis.**

---

## Decisions Made

| # | Decision | Detail |
|---|---|---|
| 1 | Treat root cause of issue, Menlo block, as the primary resolution approach | Marcus Chang's framing — first priority is proving whether Menlo is blocking/isolating the authentication cookie, then escalating through the appropriate Menlo support channel |
| 2 | Pursue three solution tracks in parallel | See table below — not betting everything on one fix |

**Three solution paths:**

| Path | Description | Trade-off |
|---|---|---|
| **A — Preferred: Investigate Menlo** | If Menlo can whitelist or otherwise allow the required cookie/session behavior, no application changes may be needed | Depends entirely on an external team (Menlo) responding and being able to help |
| **B — Interim workaround: Redirect to CSC Learn login flow** | Users land on CSC Learn's login page and take one extra action before reaching the intended course | Not true seamless SSO, but improves usability over a hard failure |
| **C — Technical enhancement: New endpoint/API mechanism** | CSC Learn calls an endpoint that validates an active Career Compass session, establishing auth despite the isolation layer | Most complex; requires new development, and VAPT implications are unresolved |

---

## Action Items

| Task | Owner | Due | Notes |
|---|---|---|---|
| Capture browser traces, session transitions, cookies, endpoints, and auth flow evidence | Career Compass team | **Thu 27 Aug** | Required to prove the Menlo hypothesis and support escalation |
| Package technical artefacts and evidence (HAR files, traces, cookie evidence) | Career Compass team | **Thu 27 Aug** | Feeds the Menlo escalation |
| Escalate issue to Menlo contacts | Marcus Chang | **Fri 28 Aug** | Will initiate escalation and coordinate follow-up — one day after evidence lands |
| Engage Menlo team for investigation | CSC team | **Fri 28 Aug** | Validate whether cookie-sharing restrictions are the actual cause — follows Marcus's escalation |
| Conduct tech-to-tech discussion on the endpoint/API option (Path C) | CSC technical team + Career Compass technical team | **Mon 31 Aug** | Assess feasibility, effort, security, implementation requirements — lower priority than A/B until Menlo answers |
| Confirm whether the URL-based redirect workaround (Path B) is feasible | CSC Learn team | **Fri 28 Aug** | Determine if direct deep-linking into the login experience can be supported — runs in parallel with the Menlo escalation |
| Confirm VAPT implications of the new endpoint approach (Path C) | CSC and Career Compass teams | **Mon 31 Aug** | Explicit concern raised, no answer reached — tied to the Path C discussion above |
| Validate assumptions with dependency teams and security stakeholders | Rama Moorthy | **Fri 28 Aug** | Raised during VAPT/security discussion — should close before Friday's programme checkpoint |

**Due dates above are suggested**, backward-planned from this week's Thursday/Friday checkpoints (see [today's meeting cleanup](cleanup-2026-08-25.md#suggested-due-dates-for-all-open-action-items)) — none were stated explicitly in the meeting itself.

---

## Key Insights & Quotes

| Insight | Detail |
|---|---|
| Root cause converged on quickly, but still unproven | Team aligned fast on the Menlo isolation hypothesis, but it needs artefact evidence before it's confirmed — risk of solutioning before root cause is actually locked |
| Three parallel paths, no decision framework between them | Nobody defined when to abandon the Menlo investigation, when to activate the Path B workaround, when to start Path C development, or who decides. All three streams remain exploratory |
| The technical question got attention; the programme question didn't | "Why is SSO failing?" was worked hard. "What do we launch if it's not fixed in time?" was almost entirely unaddressed — this is the PM's own strongest challenge to the meeting |
| No user-impact sizing exists | Nobody quantified how many users are on Comet, whether all public officers are affected, or whether key launch agencies rely on this flow. For a SteerCo/leadership audience, this is flagged as the single biggest missing piece |
| Production risk status is unclear | A side discussion on Keycloak's role in production and whether future IDPs face the same issue ended without a formal conclusion — no explicit statement that production is protected from this behavior |

---

## Open Questions

| Question | Owner | By |
|---|---|---|
| Is Menlo actually the root cause, or just the leading hypothesis? | Career Compass team (evidence), Menlo (confirmation) | Not specified |
| When do we abandon the Menlo investigation and commit to a workaround? | Not yet decided | Not specified |
| When does Path B (login-redirect workaround) get activated? | Not yet decided | Not specified |
| When does Path C (endpoint/API) development start? | Not yet decided | Not specified |
| Who has final authority to decide between the three paths? | Not yet assigned | Not specified |
| Does this issue block UAT, production release, or pilot users? Is it launch-critical or launch-degrading? | Not discussed in the meeting | Not specified |
| How many users are actually on Comet, and does this affect key launch agencies? | Not discussed in the meeting | Not specified |
| Does introducing a new endpoint (Path C) trigger VAPT or additional security review? | CSC and Career Compass teams | Not specified — explicitly raised, unresolved |
| Is production protected from the same Menlo/Keycloak isolation behavior? | Not discussed conclusively | Not specified |
| Who owns post-release monitoring, incident management, and Tier 1 support if the workaround ships? | Not discussed | Not specified |

---

## Blockers

| # | Blocker | Blocked By | Impact | Resolution |
|---|---|---|---|---|
| 1 | Menlo browser isolation likely breaking session/cookie propagation | Comet devices routing through Menlo's remote browser isolation layer when transitioning intranet → internet | Last major outstanding UAT defect; blocks Phase 2 UAT closure and downstream code freeze/VAPT sequencing | Evidence collection in progress (Career Compass team); Marcus to escalate to Menlo once artefacts are ready |
| 2 | No escalation timeline agreed | Nobody agreed when artefacts must be ready, when the Menlo escalation gets submitted, how long the team waits for a response, or when it escalates further if Menlo doesn't respond | Issue could sit with Menlo indefinitely while the team waits, with no forcing function | Not yet resolved — flagged as a gap, no action item created for it in the meeting itself |
| 3 | No escalation hierarchy or decision owner | Meeting names who escalates to Menlo (Marcus) but not who decides on the workaround/redesign if Menlo can't help — no business owner, product owner, security owner, or platform owner named for that decision | If Menlo confirms it can't support cookie-sharing across isolation, nobody is currently positioned to make the call | Not yet resolved |

---

## Timeline Risks

| # | Timeline Risk | Detail | Action |
|---|---|---|---|
| 1 | This is the CSC-side half of a blocker that's already gating UAT and code freeze | Today's daily plan flagged CSC SSO as the one open blocker to Phase 2 UAT closure, with an update due by 6pm yesterday. This meeting confirms the issue is real and narrowed to Menlo, but produced no resolution date | Confirm whether the 6pm-yesterday SSO status update is still the operative tracker, or whether this meeting's findings supersede it — update the relevant tracker (UAT readiness notes, `open-items.md`) with the Menlo hypothesis and the fact no timeline exists yet |
| 2 | No target resolution date exists, and the programme is already tight on VAPT runway | This morning's [POCDEX timeline sync](2026-08-25-W35-pocdex-timeline-sync.md) confirmed VAPT sign-off is needed by ~7 Nov against a 24-25 Nov launch — an unresolved SSO issue with no escalation SLA risks compressing that runway further if it drags | Set an explicit escalation SLA (artefact-ready date, Menlo response window, fallback trigger date) rather than let this run open-ended alongside an already-tight VAPT schedule |

---

## Next Steps

See Action Items above for immediate and near-term tasks.

**Decision point still needed:** after artefacts are reviewed, leadership needs to choose between waiting for Menlo remediation, deploying the Path B workaround, or funding/prioritizing Path C — no owner or trigger date set for this call yet (see Blockers #3).

**Follow-up:**
- No follow-up meeting explicitly scheduled in the source. Given the open escalation and decision-ownership gaps below, one is worth setting deliberately rather than letting it recur ad hoc.

---

## Context for Future Reference

**Relates to:**
- Today's [Product x Senior BO meeting](2026-08-25-W35-product-x-senior-bo-meeting.md) — Mark Ho's core challenge was "I can accept technical problems, but I cannot accept discovering them late," and specifically named SSO as the last major outstanding defect with an unclear closure path. This meeting makes real progress on the technical side but doesn't yet answer his deeper question — what's the closure date, and who decides if Menlo can't fix it.
- [2026-08-25 POCDEX timeline sync](2026-08-25-W35-pocdex-timeline-sync.md) — confirmed VAPT sign-off due ~7 Nov against a 24-25 Nov launch. An open-ended SSO investigation sits inside that same compressed runway.
- Today's daily plan flagged this exact call as the direct next step on the CSC SSO blocker, with a 6pm-yesterday status update expected beforehand — worth confirming that update's content lines up with what actually surfaced here (the Menlo hypothesis wasn't necessarily known as of yesterday 6pm).

**Pattern worth naming — this is the fourth time today "who decides" surfaces as the real gap, not the technical problem itself:** the data-sharing thread (UAT scope ownership), the Product x Senior BO meeting (dependency register ownership, named as the single biggest programme risk there), the POCDEX timeline sync (profile refresh business rules ownership), and now here (workaround/redesign decision ownership if Menlo can't help). Four separate meetings today, four separate technical or process problems, and in every case the recurring blind spot is the same: nobody has explicitly been given the authority to decide once the technical investigation hits its limit. Worth raising as a single named pattern rather than four unrelated gaps — possibly the actual output of tomorrow's `/stale-check` or a direct conversation with Adrian/Mark about closing this pattern once, not four times separately.

**PM's strongest challenge, worth carrying into the next checkpoint:** the meeting assumed that finding the technical root cause would automatically solve the delivery problem. Those are two separate questions — "why is SSO failing" (well covered) and "what do we launch if it's not fixed in time" (barely touched). The second is the one that actually determines whether this stays a technical curiosity or becomes a launch risk.

---

## Appendix: Raw Notes

<details>
<summary>Click to expand original content as provided</summary>

Provided directly by the PM as a structured executive assessment of a transcribed meeting — full text preserved in the source conversation, not duplicated here to keep this file a reasonable size.

</details>
