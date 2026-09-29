---
date: 2026-09-29
week: 2026-W40
type: submission-draft
purpose: AI Builders portal submissions for AI adoption OKR
author: Michelle Yip
---

# AI Builders Portal — Submission Drafts

Matched to the actual portal form fields. Each is copy-paste ready.

---

## Submission 1

**Title:**
Living Risk Register with Automated Scope Propagation

**Problem Area:**
Process automation / Decision support *(pick the closest match in the dropdown — portal categories not visible from here)*

**Problem Description:**
Our R1 product release went through six distinct architecture reversals in a single week as leadership direction was relayed, clarified, and corrected. Each reversal touched multiple downstream documents — PRDs, epic one-pagers, decision logs, published reference artifacts. Manually tracking which documents were stale after each change was slow and error-prone. A missed update meant engineering or design could build against outdated scope without knowing it.

**Solution Description:**
An AI-maintained risk register acts as the single source of truth for the release. Every confirmed scope decision is logged first with a stable ID and status, then traced through every document that references it and updated in a fixed order — register, then PRDs, then decision log, then published artifacts. The system cross-reads updated documents against each other to catch internal contradictions, not just staleness against the register.

**Impact Achieved:**
Caught and corrected a live contradiction in the release document — two sections disagreeing on how one feature type gets its data — before it reached grooming or engineering. Closed a governance decision that had been open for over a week by tracing it through to every affected document the same day it was confirmed. Full detail and a worked example: [Risk Register Evidence](https://claude.ai/artifact/YavvA9NPuU7E4ZGe85fKbF)

**AI Tools Used:**
Claude, Claude Code

**Supporting Link:**
https://claude.ai/artifact/YavvA9NPuU7E4ZGe85fKbF

**Est. Time Saved (hours/month):**
10–12 *(estimate — see methodology on the evidence page; derived from manual cross-check time avoided across 6 scope changes in one release cycle, not measured time-tracking data)*

**Est. Cost Saving (SGD/year):**
Leave blank or mark TBD — no verified officer time-cost rate on hand to compute this responsibly. If the portal requires a number, a placeholder using a generic public-sector PM hourly rate can be computed on request, but should be clearly flagged as a rough placeholder, not a real figure.

**Show my name publicly:** your call

**Collaborators:** none — see note below

---

## Submission 2

**Title:**
Product-Trio Review Against Live Sprint Data

**Problem Area:**
Discovery / Decision support *(pick the closest match in the dropdown)*

**Problem Description:**
Product documents are normally reviewed by one person against their own domain — product scope, technical feasibility, design needs — usually in separate conversations, rarely cross-checked against what the sprint tracker actually shows. Gaps between what a document claims and what's really happening in delivery can go unnoticed until sprint planning, when it's too late to fix quietly.

**Solution Description:**
An AI review reads a single product document through three professional lenses in one pass — product, technical, and design — while pulling live sprint data directly from the team's issue tracker rather than trusting the document's own claims about readiness. It flags where the document and the tracker disagree, and synthesizes where the three lenses agree, conflict, or reveal something a single-lens read would miss.

**Impact Achieved:**
Found that the upcoming sprint had zero tickets queued and no epic yet created for the release under review, despite the source document reading as fully ready to groom — a gap that would otherwise have surfaced in the planning meeting itself. Surfaced three separate in-flight engineering decisions quietly contradicting assumptions in the product document. Full detail: [Trio Review Evidence](https://claude.ai/artifact/9MuddwYDv69EDihhjL75QR)

**AI Tools Used:**
Claude, Claude Code

**Supporting Link:**
https://claude.ai/artifact/9MuddwYDv69EDihhjL75QR

**Est. Time Saved (hours/month):**
4–6 *(estimate — see methodology on the evidence page; derived against the time a comparable manual three-person review plus scheduling lag would take, not measured time-tracking data)*

**Est. Cost Saving (SGD/year):**
Leave blank or mark TBD — same caveat as Submission 1.

**Show my name publicly:** your call

**Collaborators:** none — see note below

---

## Notes Before Submitting

- **Collaborators field:** neither submission has a co-builder in the sense the form likely means (someone who built the solution with you). The people whose work is reflected in the tool's output (Adrian, Rama, and others) are beneficiaries/subjects, not contributors to building the AI system. As drafted, these read as solo submissions — worth a quick check with SPO if unsure whether "team whose work benefits" counts differently from "team who built it."
- **AI Tools Used:** the form's tag list doesn't have an exact "Claude Code" match confirmed from what's visible — "Claude" and "Claude Code" are both plausible tags; pick whichever the actual picklist offers, or both if available.
- **Est. Cost Saving:** deliberately left unresolved rather than invented. If you want a number, give me a rough hourly rate assumption (or confirm using a generic MX-grade public-sector PM rate is fine) and I'll compute a labeled estimate the same way the time-saved figures were derived.
- Both evidence pages are private by default — share them from the page's Share menu, or ask me to change sharing, before the portal link goes out if reviewers need direct access without your account.
