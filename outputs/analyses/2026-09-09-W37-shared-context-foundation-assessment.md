---
date: 2026-09-09
week: 2026-W37
type: assessment
audience: Adrian Ang (product lead), engineering
subject: Shared Career Compass context for Claude — how far the PM material gets us toward the generation end-state
---

# Shared Context Foundation — Assessment

*This repo is a PM workspace, not the Career Compass codebase. Product context lives here as a byproduct of the PM's work, split across `context-library/` (reference) and `outputs/` (working history). Delivery tracking is in a second repo, `PM-skills-ALL-1`. The engineering code is in GitLab, which Claude is not connected to.*

---

## The goal (from Adrian, 9 Sep)

The context work is step one. The end-state is using Claude to generate **test cases, prototypes, risk analysis, feature recommendations, and eventually reviewable code**. The map isn't for onboarding — it's the input those generation tasks read from.

That splits the work into two layers:

| Layer | What it holds | Owner | State today |
|---|---|---|---|
| **Product layer** | What we're building and why — overview, glossary, system boundaries, decisions, strategy, ACs | Michelle | ~80% exists, scattered, needs packaging |
| **Engineering layer** | How the codebase works — architecture, conventions, test harness, CI | Eng lead (Pow Hwee) | Not written for Claude, not connected (lives in GitLab) |

Test-case generation, risk analysis and feature recommendations run mostly on the **product layer** — pilotable now. **Code generation needs the engineering layer**, which is a separate dependency that isn't Michelle's to build.

---

## Verdict

**The product layer is ~80% there and I'm confident I can package it and pilot generation on it. The engineering layer for code-gen is a separate track that needs Pow Hwee.**

The gap in the product layer is not content — it's that there's no front door and a few top-level summaries have gone stale while the working files moved on.

---

## The three conditions

If any one of these is missing, don't start — you'll spend the day and be stale again next quarter.

1. **One owner, updating on a trigger not a schedule.** Shared docs rot when they're everyone's job. Our overview went stale by four months; the weekly-review archive step gets skipped so often there's a standing reminder to check it. Tie updates to events — system map reviewed at every architecture review, decisions index touched when a decision doc is written.
2. **Link, don't copy.** Every fact has one home; the shared docs point at it. We already have a three-way launch-date conflict and a Jira token that leaked twice, both from copying. The new files should be ~90% links.
3. **Engineers get one filename to open first, linked from the code repo.** This is a PM workspace; engineers have no reason to come here. A foundation nobody navigates to is just more files.

---

## What we'd build

Four small files, linked not copied, nothing deleted:

| File | Purpose |
|---|---|
| `context/README.md` | The start-here. What Career Compass is now, what R1 targets, the five epics and owners, links to the rest. |
| `context/glossary.md` | Every acronym and system, one line each with a link. POCDEX, CAM, OTG, Careers@Gov, CIE, HRPS, Cumulus, ACE, WOG AD, IM8, STIP, GIG, SJR, ringfencing. |
| `context/system-map.md` | The seven systems, one diagram plus a table: what data crosses each boundary, what Compass consumes vs writes, how each syncs. **The highest-value missing piece.** |
| `context/decisions-index.md` | Thin index over the three existing decision logs, plus the key ratified decisions. |

Then a pointer block in `CLAUDE.md` (and mirrored in `AGENTS.md`) so Claude and Claude Code sessions land on these four first.

---

## Flag now: the launch date conflicts across files

> `PM-skills-ALL-1/README.md` and `GOALS.md` say **16 Oct 2026**. The current weekly plan and readiness gates say **24–25 Nov 2026**. A data-readiness doc says "25 Nov Official / 12–17 Nov Soft Launch". Three different dates, all in authoritative-looking files. Fix at the source before the new docs go in, or you've added a fourth voice.

---

## How confident am I to build the product layer

Honest read, by piece:

| Piece | Confidence | Why |
|---|---|---|
| **Overview + R1 statement** | High | I own the roadmap and scope. The material exists; it's a writing-and-currency job, not a research job. |
| **Glossary** | High | Every term is already defined somewhere in my notes. Collecting them is mechanical. |
| **Decisions index** | High | The three decision logs are mine or I maintain the PM-OS copy. Indexing them is low-risk. |
| **System map** | Medium — needs Pow Hwee to verify | I can draft the seven systems and the data-flow from the PRDs and the CAM/POCDEX one-pagers. But "what actually crosses each boundary, what's real-time vs batch, what Compass writes vs only reads" is engineering truth. I draft, he confirms. If he doesn't sign off, that page is a liability. |
| **Piloting test-case / risk / feature generation on it** | Medium-High | We have UAT test cases as worked examples, live ACs in Jira, and a strong RAID history. Enough to run a real pilot on one epic and show Adrian output. Quality of the output is the open question — that's what the pilot answers. |
| **Anything toward code generation** | Low / not mine | Needs codebase conventions, architecture, test setup — none of it in my repos, none of it connected to Claude. This is Pow Hwee's track. |

**Net:** I'm confident on four of the five docs and on running a generation pilot. The system map has a dependency on Pow Hwee, and code-gen is a separate track I can't move alone.

---

## Recommendation

Two parallel tracks.

**Track 1 — product layer (mine, this/next week):** package the four docs from what exists, then run a test-case-generation pilot on one epic (Opportunities or Auth) as proof of the end-state. Correct the stale overview and the launch date at the source first.

**Track 2 — engineering layer (Adrian + Pow Hwee to scope):** what it takes to connect Claude to the GitLab repo and add engineering context there (a `CLAUDE.md` in the code repo, architecture notes, test-setup docs). Code generation is blocked until this exists.

The two tracks have to meet for the full end-state. Track 1 delivers value on its own (better context, test-case and risk generation) even if Track 2 is slow.

---

## If you want me to explore this: how it would work

**Where I'd build it.** In my PM workspace (`PM-OS`), in a new `context/` folder, written from day one to be team-safe — no stakeholder notes, no personal context, links only. Claude Code already reads and writes this repo directly, so the assembly is fast and I review each file.

**Where it would live for the team.** Not my personal repo. My repo is private, on a personal GitHub account, and full of PM material SWEs shouldn't see. The `context/` folder gets published into a place the SWE team actually uses — most likely a `/docs/context/` folder in the engineering code repo, or a new repo in the GovTech org. I keep the draft in `PM-OS` and sync it to the published home when it changes. Same draft-here, finalise-there flow I already use between my two workspaces.

**One prerequisite I have to handle first.** There's a live Jira API token committed in my repo (`.codex/config.toml`). It has to be rotated and removed before any of this is shared. This is my cleanup, not a blocker for the team — flagging it so it's on the record.

**What I'd need from you and the eng lead:**

| Decision | Options |
|---|---|
| Where the shared copy lives | We have Confluence and Jira already — likely four Confluence pages in the Compass space, not a new repo. Confirm. |
| Who owns keeping it current | One named person — updates tied to events (architecture reviews, decision docs), not a calendar. I'd own it. |
| Pow Hwee verifies the system map | He confirms the integration boundaries before it's published. Non-negotiable — an unverified map is worse than none. |
| Green light for ~1 day | To assemble the four docs from what already exists — nothing copied, everything links to source. |
| Track 2 scoping | You + Pow Hwee: what it takes to connect Claude to GitLab and add engineering context, for the code-gen goal. |

**What you'd get, and when.** Track 1: the four docs drafted this week, plus a test-case-generation pilot on one epic to show what the end-state looks like. Track 2 runs on its own timeline with Pow Hwee. If there's no owner and no agreement on where the product layer lives, I hold on publishing — but I can still run the pilot from my own draft to prove the concept.

---
---

# Detail

## Full inventory — what exists

| Area | State | Where |
|---|---|---|
| Product overview | One-liner + feature map. **Stale** — last updated 25 May, says "Sprint 2", calls the product OTEP. | `context-library/business-info-template.md` |
| Full PRDs | One per epic — opportunities, auth, officer profile, POCDEX, MVP release plan. | `PM-skills-ALL-1/02-prd/` |
| PRD summary cards | 16 short cards mirroring the PRDs. Mostly last touched May–July. Drift from the full specs. | `context-library/prds/` |
| Stories + ACs | Human-readable index (last updated 21 May). Live per-ticket ACs, synced 9 Sep. | `PM-skills-ALL-1/03-stories/otep-stories/`, `03-stories/jira-sync/` |
| Business rules | **Best-organised context in the repo.** Canonical ingestion spec (27 OTG fields), 22 ID'd decisions, the 30-category WOG taxonomy. | `context-library/decisions/otg-ingestion-*.md`, `wog-taxonomy-mapping.md` |
| Integration contracts | POCDEX (daily pull-and-diff, first-login pre-fill). CAM (7 events, 7 read-only APIs, near-real-time webhook). OTG (Excel, no API, one-time MVP sync). Spread across 3 files. | `context-library/prds/pocdex.md`, `outputs/prds/2026-08-20-W34-cam-integration-epic-one-pager.md`, `otg-ingestion-brief.md` |
| Risks, constraints, open items | Rich. 24KB risk register, ~67 numbered open items, recent RAID logs and readiness gates. | `PM-skills-ALL-1/00-hub/risks.md`, `open-items.md`, `outputs/analyses/` |
| Strategy + OKRs | Current — IAA-approved, updated 16 June. North Star defined. | `PM-skills-ALL-1/06-skills-and-decisions/otep-roadmap-okrs-2627.md`, `GOALS.md` |
| UAT test cases | Recent and detailed for employment-profile, movement, identity workstreams. | `outputs/analyses/2026-09-02-*`, `03-stories/jira-sync/CC-UAT/` |
| Stakeholder context | ~235 lines, current through July. | `context-library/stakeholder-profiles.md` |
| Claude instructions | `CLAUDE.md` + near-identical `AGENTS.md`. Both about how the copilot works — no product context. | root |

## What's missing

- **No current one-page overview** — the one we have is four months stale.
- **No statement of what R1 is** — spread across a May draft, a July PRD, and six September analyses.
- **No system-boundary view** — every system explained somewhere, never together, no diagram in either repo. An engineer would spend a day reconstructing it.
- **No glossary** — acronyms defined inline across 6+ files.
- **No personas or end-to-end journeys** — "discover, apply, track" has to be assembled from five story files.
- **No requirement-to-code traceability** — implied by OTEP-XXX naming, never laid out.
- **No test strategy overview** — test cases exist; the "how testing works" doesn't, partly because the code isn't in this repo.

## Duplicated, outdated, conflicting

| Issue | Risk | Detail |
|---|---|---|
| Stale project phase | High | `business-info-template.md` says "Sprint 2 / working name OTEP". Off by ~4 months. |
| Launch date | High | 16 Oct vs 24–25 Nov vs "25 Nov / 12–17 Nov soft launch" across authoritative files. |
| PRD cards vs full PRDs | Medium-high | Both look authoritative. `WORKSPACE-MAP.md` warns the cards drift but doesn't say which wins. POCDEX card is from 25 May; the integration has moved since (CAM split out, 8 Sep trigger decision). |
| Stale story index | Medium | `otep-stories/index.md` from 21 May, still "Sprint 2 active". Live state is in `jira-sync/`, which won't be read as 30 folders. |
| Three decision logs | Medium | `context-library/decisions/` (ingestion only), `PM-skills-ALL-1/06-.../decisions-log.md`, dated docs in `outputs/decisions/`. No cross-index. |
| CLAUDE.md vs AGENTS.md | Low-medium | Two near-identical 11KB files. Any edit must be mirrored. The meeting-cleanup skill copies drifted this week. |
| "OTEP" overloaded | Low-medium | Means the platform, the Jira key (OTEP-XXX), and the programme. Also OTEP-Core vs OTEP-Pathfinder boards. Never disambiguated. |
| Committed Jira token | Security | `.mcp.json` holds a live token in plaintext in the working tree. `.gitignore`'d and untracked, but a token leaked from this repo once before (commit `985cb57`). |

## What stays where it is (link, don't move)

- `context-library/decisions/otg-ingestion-*.md`, `wog-taxonomy-mapping.md` — already canonical.
- `PM-skills-ALL-1/02-prd/prd-*.md` — the real PRDs.
- `03-stories/jira-sync/` — live ACs, the current source.
- `00-hub/risks.md`, `open-items.md` — operational, high-churn.
- `otep-roadmap-okrs-2627.md`, `GOALS.md` — strategy and OKRs.
- Everything in `outputs/` — working history. Cite a specific analysis when relevant; never send people there to learn the product.

## CLAUDE.md — in and out

**In** (pointers only):
- What we're building → `context/README.md`
- Systems and boundaries → `context/system-map.md`
- Acronyms → `context/glossary.md`
- Business rules → `context/decisions/` + `decisions-index.md`
- Full PRDs → `PM-skills-ALL-1/02-prd/` (cards in `context-library/prds/` are summaries and may lag)
- Live sprint and AC state → `PM-skills-ALL-1/03-stories/jira-sync/`
- Do not trust `business-info-template.md` for project phase

**Out:**
- Launch dates, sprint numbers, phase — changes every two weeks. Belongs in `context/README.md` with a visible last-updated line and one owner.
- Risks and open items — 90KB, changes daily. Link only.
- Story-level ACs — live in Jira. Link only.
- Stakeholder detail — already in `stakeholder-profiles.md`. Link.
- Anything from `outputs/` — history.

## Supporting conditions (cheap if the three main ones hold)

- Every shared file carries a visible "last updated" line and an owner's name at the top.
- The system map is a real boundary picture, not a feature list — if it becomes "here are our features" it adds nothing over the PRDs.
- The glossary stays one or two lines per term. Long glossaries don't get read or maintained.
- Personas, journeys and traceability are left out unless someone will own them. A half-maintained persona doc people trust is worse than a known gap.
- Optional fifth file: `context/prd-index.md` — one table mapping each epic to its card, its full PRD, its Jira epic key, and current status. Solves "which PRD is real".
