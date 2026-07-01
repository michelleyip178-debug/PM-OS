---
date: 2026-06-04
type: plan-adoption-reconciliation
decision: Adopt Pow Hwee's "Planning draft for sprint 3 and after" as the team plan of record
source: Confluence PSD-OTEP page 2293796526 (v3, edited 2026-05-26 by Pow Hwee) + live Jira + decisions-log
amendment: native apply = R1, not an S4 spike
---

# Adopting Pow Hwee's Plan — Reconciliation

**Decision:** Pow Hwee's stream-based S2–S6 allocation becomes the team's plan of record, **with one amendment** — native apply moves to R1, dropping his S4 native-apply spike. This ends the three-competing-plans problem (his draft / the trio analysis / the live board). MVP apply stays the FormSG redirect (OTEP-319).

This doc records (1) what the plan now says, (2) what adopting it changed, and (3) the stale drift on his page that needs fixing before it's clean to groom against.

---

## The plan of record (his streams, S2–S6)

| Sprint | Window (per live Jira) | Streams |
|--------|------------------------|---------|
| S2 | 18–29 May (closed) | Listing → Detail end-to-end |
| S3 | **2–14 Jun** (active) | Filters + Enhanced Detail + OTG Ingestion + POCDEX plumbing |
| S4 | **14–28 Jun** | C@G + FormSG Phase 2 + Auth (best case) + WOG AD kickoff |
| S5 | 28 Jun–12 Jul | Auth (realistic) + C@G Detail + CSC SSO start |
| S6 | 12–26 Jul | CSC SSO complete + C@G deep-links + Admin |

His S4 streams: Data Ingestion (192, Story D C@G 1/2) · Discovery (86+2 filters, 87 detail) · Apply Flow (~~native-apply spike~~ → **dropped**, 319 redirect) · Auth-Dependent (127 ringfencing 1/2).

---

## The one amendment (Michelle's call)

**Native apply: R1, not an S4 spike.**

- His draft has "[Spike] Native apply in OTEP (replace OTG redirect — avoid re-login UX break)" in S4, with OTEP-319 as fallback.
- **Amended:** MVP apply = FormSG redirect (OTEP-319). Native apply = R1, matching the R1 ATS-pivot direction (decision 2026-06-02 — OTEP owns the apply experience end-to-end at R1).
- **Why:** S4 is a catch-up sprint; adding a net-new native-apply spike loads it further. Native apply belongs in R1 where the ATS work already lives. The re-login UX break his spike worries about is a real R1 design input — carry it there, not as an MVP spike.

---

## What adopting his plan changed (deltas accepted)

| Area | Was (Michelle's trio / anticipated-scope) | Now (his plan, adopted) |
|------|-------------------------------------------|-------------------------|
| S4 framing | Catch-up "finish the spine," C@G as the new headline | His full stream set: C@G + FormSG Phase 2 + auth best-case + WOG AD kickoff |
| Auth in S4 | Demoted out of grooming entirely (watch-item) | Carried as "best case" S4 stream (still S5 realistic) — **OTEP-71 back in, consistent with your Jira move** |
| OTEP-130 (Phase 2 webhook) | Defer to S5 unless 319 lands clean | In his S4 Apply Flow stream — accept, gated on 319 |
| Plan ownership | Three competing views | One: his page |

**Net for OTEP-71:** putting it back in S4 (your Jira update) is now *consistent* with the adopted plan — his draft has auth in S4 as best-case. Carry it as best-case scope, gated on WOG AD kickoff landing.

---

## Stale drift on his page — fix before grooming against it

His page was last edited **26 May**. These are wrong on the page and need correcting (flag to Pow Hwee — it's his page):

| Page says | Correct (decided since) | Source |
|-----------|-------------------------|--------|
| S3 = 1–15 Jun, S4 = 15–26 Jun | S3 = 2–14, S4 = 14–28 | Live Jira |
| Product unnamed | **CareerCompass** | D 2026-06-02 |
| MVP UAT 10 Aug only | + **VAPT early Aug**, feature freeze end-S8 | D 2026-06-02 |
| C@G "API redirects" for apply | C@G = **deep-link out** (OTEP-89) | Grooming brief + AC |
| No native creation until R3 | **Opportunity creation → R1** (native form) | D 2026-06-02 |
| Native-apply spike in S4 | **R1** (this doc's amendment) | This decision |

---

## Actions

1. **Tell Pow Hwee the plan's adopted, with the native-apply amendment** — short note (draft below), so he knows S4 native-apply is dropped and routed to R1.
2. **Ask Pow Hwee to refresh the page** (dates, CareerCompass, C@G deep-link, R1 creation) or offer to pair on it — it's his page, his to own.
3. **Re-point the anticipated-scope doc** to defer to his plan as the source of truth, keeping the readiness/AC detail as the line-level layer.
4. **Groom S4 against his streams** at 14:00 — but with the corrected dates and the native-apply amendment stated up front.

---

## Draft note to Pow Hwee

> Pow Hwee — adopting your "Planning draft for sprint 3 and after" as our team plan of record, thanks for pulling it together. One amendment: dropping the S4 native-apply spike — MVP apply stays the FormSG redirect (319), and native apply moves to R1 where the ATS work lives, so S4 doesn't take on a net-new spike in a catch-up sprint. The re-login UX concern is a good R1 design input.
>
> The page is pre-26-May in a few spots — can we refresh: sprint dates (S3 2–14, S4 14–28 per Jira), the CareerCompass name, C@G apply as deep-link (89) not API redirect, and R1 native creation. Happy to pair on it.

---

*Supersedes the standalone framing in [S4 anticipated-scope](2026-06-04-W23-sprint4-anticipated-scope.md) — that doc's readiness/AC detail still holds, but his plan is now the scope source of truth. Decision logged in [decisions-log.md](../../../decisions/2026-05-29-W22-decisions-log.md) 2026-06-04.*
