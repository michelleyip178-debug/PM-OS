---
date: 2026-07-06
owner: Michelle Yip
type: slack-drafts
context: R1 journey map surfaced three blockers needing owner/timeline commitments before Epic A/B/C can be groomed
source: outputs/journey-maps/2026-07-06-W28-r1-user-journey-map.md
---

# R1 Blocker Asks — Draft Messages

Four drafts below. Three are direct Slack asks; the fourth (status latency sign-off) routes through Jace to Adrian per the stakeholder communication matrix — Adrian is escalation-only, not a direct async contact.

**Note:** No stakeholder profiles exist yet for Fabian, Léo, or Kingsley, so those two drafts are written generic-but-direct. Worth filling in their profiles once this thread gets a response — will help calibrate tone next time.

---

## 1. Pow Hwee + Fabian — Agency-admin auth

**Channel:** Slack, direct to both (Pow Hwee is an existing async/scope contact; Fabian is new)

> Hey both — flagging a blocker on R1 Epic A (opportunity creation for Posting Managers) before it can go into the story pipeline.
>
> We haven't defined who agency-admin users are or how they authenticate. Every Epic A story is gated on this — nothing there can be groomed until it's resolved.
>
> Can we get 20 minutes this week to land on an approach, or at minimum agree an owner and a target date? Happy to bring whatever context would help — just want to make sure this doesn't sit as an open question going into sprint planning.

---

## 2. Léo + Kingsley — Competency SSOT contract (#18/#41)

**Channel:** Slack, direct to both

> Hey both — checking in on the competency SSOT contract (#18/#41) for R1.
>
> Good news is sourcing is resolved (Imelda's workstream confirmed 2026-07-05, so we know where the data comes from). What's still open is the endpoint payload spec between you two, and it's gating two things: pre-fill quality on the apply form (Epic B) and whether Posting Managers see complete competency data when reviewing applicants (Epic C).
>
> The PRD's own guardrail here is that stale or wrong pre-fill has to not increase form abandonment versus having no pre-fill at all, so getting this right matters more than getting it fast. Can you two sync and give me a realistic date for the contract to close? Want to make sure Epic B doesn't get marked ready before this is actually settled.

---

## 3. Manager status-update UX — design commission

**Channel:** Slack, likely to Jacky or whoever owns design resourcing (confirm before sending — not clear from current stakeholder profiles who takes design requests for Epic C)

> Flagging something for the design queue: the manager-facing status-update flow in Epic C (Posting Managers moving applicants Submitted → Under Review → Outcome) is completely undesigned. It didn't exist under the old ATS-integration plan, so this is new scope, not a simplification, and the PRD has it flagged Red risk.
>
> One thing worth calling out: the confirm-step on the manager's "Outcome" action and the officer-facing rejection/outcome screen are really the same design surface. One's the action, one's the consequence the officer sees. Worth scoping them together as a single review rather than two separate ones so the tone and flow are consistent on both sides.
>
> Can we get this on the design docket before Epic C grooming opens? Happy to walk through the context.

---

## 4. Adrian — 24-hour status latency sign-off (route through Jace)

**Channel:** Async note to Jace, for him to raise with Adrian (per stakeholder matrix: Adrian is escalation-only, indirect via Jace)

> Quick one for you to flag to Adrian when it's convenient, not urgent enough for a special ask.
>
> The R1 status-tracking OKR (≤24 hours from action to status update) used to measure an ATS event. Under the current scope, it measures a Posting Manager's action inside OTEP instead, since we're not integrating an ATS for this. That's a real change in what the metric means, and Adrian hasn't explicitly signed off on the new definition yet.
>
> Wanted this closed before it shows up as a settled number in a deck or sprint goal. Can you get a quick yes/no from him on whether the redefined target still holds?
