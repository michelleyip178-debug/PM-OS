---
title: Rama Session — Scoping Alignment Prep
date: 2026-06-12
owner: Michelle Yip
audience: Michelle (prep doc — not for sharing)
purpose: Understand Rama's intent for the upload module before deciding whether to proceed to discovery
relates_to: OTEP-397, OTEP-192
---

# Rama Session — Scoping Alignment Prep

**What this session is for:** Rama is the Engineering Manager and Tech Lead for Core. He has added requirements to the upload module that are not yet in Jira — competency upload (Excel) and some form of admin logs. Before Michelle can recommend a scope to Adrian or decide whether to run a full discovery sprint, she needs to understand what Rama actually expects this module to do at MVP and beyond.

**What this session is not:** A sign-off session. Nothing gets decided here — this is a listening and alignment session. Michelle comes with structured questions, not recommendations.

---

## What we know going in

**What's in Jira (OTEP-397 — Backlog, unpointed, unassigned):**

The current user story frames the upload as multi-source from the start: *"Users will want to upload excels (once a week frequency) so that backend can pick up and process these files. These excels can come from various sources e.g. OTG."*

That "various sources" framing is Rama's. It signals he always intended this as a shared admin upload infrastructure — not just an OTG-specific tool.

**What Hao Eng flagged (comment 8 Jun):**

> "Heard from Rama that only specific users can access this upload UI. How to identify such user?"

Role-based access control is live in the ACs (mock a list of profile IDs), but the actual user identification method is unresolved. Rama owns that answer.

**What Rama has mentioned verbally (not in Jira):**

1. Competency upload — an Excel upload flow for competency data (separate from OTG opportunities).
2. Admin logs — some form of logging or audit capability. Intent unknown.

Neither requirement has a ticket. Neither has been sized. Neither has been through product review.

---

## The two things you need to understand

### 1. What is the actual scope of this module?

The OTEP-397 user story was written as general admin upload infrastructure. Rama has since added two more use cases. You need to know:

- Is this one module serving multiple upload types (OTG opportunities, competencies, potentially others)?
- Or is it separate tooling per use case that happens to share a similar UX pattern?

This is not a small distinction. A single shared admin upload module with a "Data Source" selector is a platform capability. Three separate upload flows is three separate builds. The sprint and resourcing implications are completely different.

### 2. What does MVP mean to Rama?

He's added requirements, which suggests his MVP definition is wider than the OTG-only scope you've been working against. You need to hear his picture of what "done" looks like at go-live.

---

## Session structure (45 min)

### Part 1 — Let him talk (15 min)

Open with: *"I want to understand your full picture of the upload module before I scope anything. Walk me through what you're expecting this to do at go-live and beyond."*

Then listen. Don't steer. Let him describe:
- Who uses it
- What they upload
- How often
- What they see after uploading

The competency upload and admin logs will come up naturally. Don't pre-empt them — let him surface them so you understand the framing he puts around them.

### Part 2 — Clarify the requirements he raised (15 min)

**On competency upload:**

- "You mentioned wanting to support competency uploads — walk me through the scenario. Who is uploading competency data, what does that file look like, and what happens after it's uploaded?"
- "Is this the same admin persona as the OTG upload, or a different user?"
- "Is this a go-live requirement or a post-MVP need?"
- "Is there a source system this data comes from — similar to OTG for opportunities?"

**On admin logs:**

- "When you said admin logs — walk me through what you'd want to see when you open that page. What's the scenario that makes you need it?"
- (Listen for: is this developer observability, an operational dashboard, or a compliance audit trail? These are three very different builds.)
- "Who is the audience — DevOps, the PM, programme management, or someone else?"
- "Is this a go-live requirement or something for later?"

**On "once a week frequency" in OTEP-397:**

- "The user story says once a week. Is that a real operational cadence, or a placeholder? Who is driving that cadence — is there a person whose job it is to trigger the upload?"

### Part 3 — Understand the MVP intent (10 min)

- "For go-live, what does this module need to do for you to consider it done? What would make you uncomfortable launching without?"
- "Is your expectation that the OTG upload, the competency upload, and the admin logs all ship together — or is one of them the thing that has to land at go-live?"
- "If we had to cut scope for S5, which of these is the core thing?"

### Part 4 — Surface the open questions from your side (5 min)

Three things Rama can help with that are blocking your scoping:

1. **Role-based access:** Hao Eng flagged this. How do we identify users with upload permissions? Is this a role in POCDEX, a hardcoded list, or something else?
2. **DevOps admin persona:** Do you have a named person in mind for the soft-launch? Or is "DevOps" still a team, not a person?
3. **Post-publish workflow:** After the admin sees the skip report, who does it go to? Is that part of this module's job, or handled separately?

---

## What you're listening for

| What Rama says | What it means for scope |
|---|---|
| Competency upload is a go-live requirement | MVP scope just doubled. You cannot fit OTG + competency + admin logs in S5. Need an explicit scope call with him and Adrian. |
| Competency upload is post-MVP | OTG upload stays as the focal point. Competency upload gets its own ticket and sprint slot later. |
| Admin logs = developer observability (debug logs) | Already covered in OTEP-403 (pipeline hardening). No new build needed — surface the confusion. |
| Admin logs = operational dashboard (upload history, skip trends) | New build, 3–5 pts, valuable for the 2028 audit trail argument. Put it in the backlog. |
| Admin logs = compliance audit trail per record | Significant build. Needs a separate ticket and stakeholder justification. Not MVP. |
| "Once a week" is a real operational cadence with a named owner | The upload module is an operational service — operational model question becomes urgent. |
| "Once a week" was a placeholder / nobody has thought about it | The cadence is unowned. Surface as a programme risk. |
| MVP = OTG upload working at go-live | Scope is manageable. Option B (minimal wizard in S5) is viable. |
| MVP = OTG + competency + admin logs all at go-live | You need to push back on timeline or get resourcing. Cannot absorb this quietly in S5. |

---

## After the session

Three outputs you're working toward:

1. **A consolidated scope definition** — what is actually in OTEP-397 (OTG upload only, or shared upload infrastructure), and what goes in new tickets (competency upload, admin logs separately).
2. **A clear MVP call** — which of the three use cases ships at go-live, which are fast-follows.
3. **A decision doc for Adrian** — updated with the actual scope picture before asking him for the operational owner and migration lead decisions. He should know what he's endorsing.

---

## What not to do in this session

- Don't propose scope before he's finished talking. Let him paint the full picture first.
- Don't agree to a scope you haven't sized. "That sounds feasible" before confirming with Léo and Pow Hwee is how you end up overcommitted in S5.
- Don't conflate competency upload (Rama's requirement) with competency inference (OTEP-205 / OTEP-26, Imelda's area). These are different features with different owners. If Rama conflates them, untangle it.

---

*Prepared 2026-06-12. For Michelle's use in the Rama scoping session.*
