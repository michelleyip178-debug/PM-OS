---
title: Rama — Upload Module Discovery Interview
date: 2026-06-12
owner: Michelle Yip
format: Structured interview — Michelle asks, Rama talks, then Michelle shares impact and risks
duration: 45 min
relates_to: OTEP-397, OTEP-192
---

# Rama — Upload Module Discovery Interview

**Purpose:** Understand Rama's intent for the shared upload module before scoping the build. Share the impact, risks, and operational changes so he has the full picture.

**Ground rules:** Not deciding anything today. Michelle asks questions, Rama talks. Michelle shares what she's seeing. Decisions follow in a separate session.

---

## Opening (2 min)

> "I want to understand your full picture of the upload module before I scope anything. I'll ask questions, you talk — then I'll share what I'm seeing in terms of impact, risks, and what changes operationally after this ships. We're not deciding anything today."

---

## Part 1 — Intent (10 min)

*Let him talk. Don't steer. Take notes.*

- Walk me through what you're imagining this module does. Who uses it, what do they upload, and what happens after?
- What problem are you solving for with the competency upload? What breaks today if that's not there at launch?
- When you said admin logs — describe the scenario for me. What happened, who opens the logs page, and what are they looking for?

**Notes:**

&nbsp;

&nbsp;

&nbsp;

---

## Part 2 — MVP intent (10 min)

*Understand what he considers done at go-live vs what can follow.*

- If we go live in Aug–Sep and only the OTG upload is ready — is that acceptable to you, or does something break?
- What's the earliest the competency upload actually needs to be live to deliver value?
- Who is waiting on the admin logs? Is there a person or team blocked without it today?

**Notes:**

&nbsp;

&nbsp;

&nbsp;

---

## Part 3 — Share what you're seeing (15 min)

*Frame as "here's what I'm working through — tell me if I'm missing something."*

**On scope and sequencing:**

"OTG upload and competency upload go through the same module UI, but they need separate backend engines. OTEP-192 handles OTG processing. Competency upload needs its own processing layer — different schema, different validation rules, different destination in the DB. That's not a small addition. If both need to land at go-live, we're looking at two sprints of parallel build work, which competes directly with ring-fencing in S5."

*His reaction:*

&nbsp;

&nbsp;

**On operational ownership:**

"Once this module is live, someone needs to run it on a regular cadence, review the output, and chase agencies when skip rates are high. That person doesn't exist yet. Before I design for recurring use, I need to know who that is — otherwise the tool works but the operation doesn't."

*His reaction:*

&nbsp;

&nbsp;

**On admin logs:**

"Run history and audit trail matter to me too — especially for the OTG decommission in 2028. But I need to understand what you mean by admin logs before I scope it. Developer observability, an operational dashboard, and a compliance audit trail are three different builds with very different sizes."

*His reaction:*

&nbsp;

&nbsp;

**On the 2-year window:**

"This module will run approximately 104 times before OTG decommissions. Every design decision we make now has a 2-year operational consequence. I want to make sure we're building it as a service, not a one-time migration tool."

*His reaction:*

&nbsp;

&nbsp;

---

## Part 4 — What I need from you (8 min)

*Close with three specific asks.*

1. "Based on what you've told me — do you want OTG upload only at go-live, with competency upload as a fast-follow? Or are both go-live requirements?"

   *Answer:*

   &nbsp;

2. "For admin logs — can you describe the scenario in two sentences? What happened, who opens it, and what are they looking for? I want to make sure I build the right thing."

   *Answer:*

   &nbsp;

3. "Who is the named person running the module operationally after go-live? If it's DevOps, can you name the person?"

   *Answer:*

   &nbsp;

---

## What to watch for

| If Rama says | What it means |
|---|---|
| Competency upload is a go-live requirement | MVP scope has doubled. Cannot fit OTG + competency + ring-fencing in S5. Need an explicit scope call with Adrian. |
| Competency upload can follow post-launch | OTG stays the focal point. Competency upload gets its own ticket and sprint slot. |
| Admin logs = debug / developer logs | Likely already covered by OTEP-403 (pipeline hardening). No new build needed — surface the overlap. |
| Admin logs = operational run history | New build, moderate size, valuable for 2028 audit trail. Add to backlog. |
| Admin logs = compliance audit trail per record | Significant build. Needs separate ticket, stakeholder justification, and explicit MVP decision. |
| No named operational owner | Surface as a programme risk. Bring to Adrian with Rama's acknowledgement that it's unresolved. |

---

## After this session

Three outputs:

1. **Consolidated scope definition** — what's in OTEP-397, what needs new tickets (competency upload engine, admin logs).
2. **MVP call** — which use cases ship at go-live, which are fast-follows.
3. **Updated brief for Adrian** — with the actual scope picture before asking him for the operational owner and migration lead decisions.

---

*Bring this doc to the session. Fill in notes during the conversation.*
