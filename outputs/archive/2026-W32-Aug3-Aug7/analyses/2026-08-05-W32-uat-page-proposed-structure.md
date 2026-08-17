---
date: 2026-08-05
week: 2026-W32
purpose: Proposed structure + fill-in guidance for Rama's UAT Activities Confluence page, reframed against Imelda's stated intent (pre-requisites, owners, timeline, test cases, success criteria — not just an activity log)
source_page: https://sgtechstack.atlassian.net/wiki/spaces/OTEP/pages/2523532152
maps_to: outputs/analyses/2026-08-05-W32-csc-dle-integration.md (source content, sections 1/2/4/5/6), outputs/analyses/2026-08-05-W32-timeline-raid-log.md (dates)
status: proposal — for Rama/Imelda review before restructuring the live page
---

# Proposed Structure — UAT Activities Page (Course/Learner File/JumpStart/SSO)

Imelda's ask is five things: **pre-requisites, parties in charge, timeline, test cases, success criteria.** The current page has a rough timeline note and an empty activity table — it's missing pre-requisites, doesn't name owners consistently, has no test cases, and success criteria is one generic sentence. Below is a structure that covers all five, with a note on where the content already exists so this isn't a from-scratch write.

---

## 1. Governance — who owns what

**What goes here:** One row per workstream: CSC-side owner, CC-side owner, scope in one phrase. Plus one line naming the **Overall Integration Readiness Owner** — currently unassigned, flagged twice by CSC as the single biggest coordination gap.

**Where it already exists:** `csc-dle-integration.md` §1 — ready to paste in, just needs Rama to confirm names are current (Yu Xuan Tay is on leave until 7 Aug with no backup named — that gap should show on the page, not get silently omitted).

**Guidance:** Don't bury this in prose. A owner-per-row table is what stops the "who's chasing this" re-litigation that's happened in three separate meetings this week.

---

## 2. Pre-Requisites for UAT — per workstream

**What goes here:** What has to be true before each workstream can start UAT. Split into two tiers:
- **Cross-workstream pre-reqs** (apply to all 4): account setup across CC/CSC/Keycloak/WOG AD/POCDEX; SIT data parity with what CSC will supply for UAT
- **Per-workstream pre-reqs**: e.g. WS2's mapping-file cadence must be confirmed before WS3 can get test accounts; WS1's course catalogue must land before WS4 can test end-to-end

**Where it already exists:** `csc-dle-integration.md` §4 has SIT Entry criteria per workstream and the dependency chain (§3) — these are the UAT pre-reqs with light editing (SIT Entry → UAT Entry, updating what's since closed).

**Guidance:** Use checkboxes, not prose paragraphs — Imelda and Rama both need to scan this fast during standups. Mark what's already satisfied vs. still open (e.g. WS3's intranet DNS failure is currently blocking, not just a future risk).

---

## 3. Timeline

**What goes here:** A single dated table — not the current two-sentence "Workstream 1 can only happen after development" note. Columns: Milestone / Workstream / Date / Status / Source.

**Where it already exists:** `timeline-raid-log.md` "dates currently in play" table — already has the reconciled dates with status legend and source citations. The one thing NOT yet resolved: whether CSC-track UAT is 24/25 Aug or the 31 Aug date raised at today's standup, and whether it's genuinely separate from the OTEP-wide UAT window (11 Aug–4 Sep). Flag this openly on the page as unconfirmed rather than picking one — that's the deconfliction ask still pending with Rama directly.

**Guidance:** Don't let the page state a date that isn't actually confirmed. Mark it 🟡 Unconfirmed until Rama settles it one-on-one, per the earlier plan.

---

## 4. Test Cases

**What goes here:** The full scenario list per workstream — ID, scenario, expected result, status (Not run / Pass / Fail). Include the known gaps (scenarios in scope but with no test case written yet) so they're visible, not silently missing.

**Where it already exists:** `csc-dle-integration.md` §5 — complete spec: A-1/2/3, B-1/2 (WS1), M-1/2 (WS2), S-1 through S-6 (WS3, split into BO-executable vs. engineering-owned), J-1/2 (WS4), plus GAP-1 through GAP-16 for scenarios still needing a written case. This is the single largest content gap on the current page — it's not referenced there at all.

**Guidance:** Keep the BO-executable / engineering-owned split for WS3 (S-1–3 vs. S-4–6) — different people run these and conflating them is part of why S-4/5/6 got marked done prematurely earlier this week. Also worth flagging GAP-16 (end-to-end Course Journey test) as the single highest-priority gap — it's the only test that proves the whole chain works for one real officer.

---

## 5. Success Criteria

**What goes here:** What "UAT complete" means per workstream, stated the same way the SIT criteria already are — not "all activities completed" (the current page's one line), which doesn't say what counts as pass/fail.

**Where it already exists:** `csc-dle-integration.md` §2 (SIT criteria, as the template) and §6 (Entry & Exit Criteria Summary) — needs a UAT-specific pass written using the same shape: what UAT proves per workstream, what's deferred beyond it (if anything), and the exit checklist (no open P1, specific pass conditions per workstream).

**Guidance:** This is what stops the "is UAT done" question from becoming another improvised answer, the way SIT success criteria did at the 3 Aug sync. Write it once, put it on the page, stop re-deriving it live in meetings.

---

## What to leave off this page

- **Day-by-day activity log** (what happened each standup) — that's `csc-pm-tracking-list.md`'s job, keep it separate so this page stays a stable reference, not a running diary
- **Open risks / open questions** — useful, but arguably belongs in the RAID log rather than the UAT spec page, so the page itself stays scannable

---

## Suggested page order

1. Governance (owners)
2. Pre-Requisites (checklist, per workstream)
3. Timeline (dated table, flag unconfirmed items)
4. Test Cases (full spec, by workstream)
5. Success Criteria (per workstream, entry + exit)

This mirrors `csc-dle-integration.md`'s structure directly — the doc was already built with a Confluence handoff in mind (its frontmatter names a target page). Fastest path is porting that content over rather than rebuilding it fresh on 2523532152.
