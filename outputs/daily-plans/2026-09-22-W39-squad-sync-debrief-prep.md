---
date: 2026-09-22
week: 2026-W39
type: meeting-prep
topic: Quick debrief for squad sync — what surfaced 21 Sep
---

# Squad Sync Debrief — What to Bring (21 Sep Recap)

*Keep this tight — 4 things, not 8 documents. Lead with what changes Tuesday's number.*

---

## TL;DR for the room

Yesterday surfaced one real pattern worth naming out loud: **the same unanswered architecture question came up three separate times, independently, across three different conversations.** That's the headline, not any single thread. Also: two scope items on the slide going to Mark don't match our own docs, and needs fixing before it's presented.

---

## 1. The pattern worth naming: "discovery-only vs. transaction layer" keeps resurfacing

Came up independently in:
- SJR whiteboard session (does Compass build Creation/Apply, or do HRPS/Cumulus)
- OTG/Compass interim-state thread (same question, STIPs/Gigs framing)
- Yesterday's HRPS/Cumulus discovery session (framed most clearly: "Is Compass an Opportunity Discovery Platform or an Opportunity Transaction Platform?")

**The ask:** this needs a forcing decision from Adrian, not another discovery round. Three independent surfacings in one day is a signal, not a coincidence.

## 2. SJR: concept is fixed, mechanism isn't

- **Confirmed:** SJR sits solely in OTG today (HRPS/Cumulus can't handle the exercise cycle or login friction). SJR discovery via Compass is in scope for R1 — that's settled.
- **Still open:** whether Compass builds SJR's Creation/Apply natively, or the HR systems do. If Compass-native, this contradicts "no ATS in Compass" and blows past the current 2.0–2.5 mw folded into Pillar 2.
- **Also proposed, pending Adrian:** splitting SJR into its own epic rather than keeping it in Pillar 2.

## 3. HRPS/Cumulus discovery session — real findings, real gaps

**Good news:** Cumulus has working API capabilities (Vincent demoed connectors). Both HRPS and Cumulus can identify internal-vs-external jobs. HRPS believes an API is buildable even though none exists today. → **R-07 downgraded from Red to Amber.**

**Still open:** agency ringfencing — HRPS doesn't know if it stores agency tagging yet, Cumulus has no structured agency targeting (relies on inferred short codes like EMA/LTA). Directly affects how we ingest and map.

**Also surfaced, not yet resolved:** competency ID strategy (Cumulus can't accept arbitrary IDs), governance model for Compass-as-SSOT, and a chat aside — "will both sides need VAPT for new APIs?" — worth folding into the existing Barry Lim VAPT thread.

## 4. Scope slide going to Mark has two real conflicts — fix before it's presented

- **CAM Integration** is listed as "Deferred to R2" on the slide, but it's one of R1's five core pillars in the one-pager and reduced-scope brief (2.0–2.5 mw). Can't both be true.
- **CMM** (Competency Bank, JobID mapping) is shown as if it's inside R1 scope — but it doesn't appear anywhere in the one-pager or reduced-scope brief. It's tracked elsewhere only as a *concurrent* workstream competing for capacity, not R1 scope itself.
- **The ask:** confirm both with Adrian before this goes to Mark.

---

## What's needed from the room before Tuesday's estimation sync

| Item | From |
|---|---|
| SJR delivery mechanism decision (Compass-native vs. HR-system-hosted) | Adrian + Rama |
| Confirm SJR epic split | Adrian |
| Technical read on Opportunities-Module RBAC (WOG-wide access, independent of POCDEX gate) | Rama |
| VAPT scope/timeline — is it a 6-week item? | Barry |
| CMM/CAM scope conflict resolved before Mark sees the slide | Adrian |

---

*Full detail if anyone wants to go deeper: [SJR Whiteboard notes](../meeting-notes/2026-09-21-W39-r1-sjr-whiteboard-adrian-rama.md), [HRPS/Cumulus Internal Jobs discovery](../meeting-notes/2026-09-21-W39-r1-discovery-internal-jobs-hrps-cumulus.md), [Competency discovery](../meeting-notes/2026-09-21-W39-r1-discovery-competency-hr-systems.md), [Scope Slide Staleness Check](../decisions/2026-09-21-W39-r1-scope-slide-staleness-check.md), [Risk Register](../analyses/2026-09-16-W38-r1-risk-register.md)*
