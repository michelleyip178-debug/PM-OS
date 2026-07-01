---
date: 2026-06-29
meeting: Sprint 4 Retro + Demo
attendees: Michelle (PM), Thomas, Amber, Pow Hwee, Rathika, Léo, Fabian, Hao Eng (+ team)
type: Sprint ceremony
sprint: Sprint 4 close / Sprint 5 kick-off
---

# Meeting Notes: Sprint 4 Retro + Demo — 29 June 2026

## Summary

Sprint 4 wrapped in a reasonably healthy state. Search is functional in Dev, C@G integration is nearly ready, and the team ran a live walkthrough together before the demo — catching several UI issues beforehand. The retro surfaced a recurring pattern: UI defects are still being discovered too late, shared layout dependencies are causing unintended regressions, and demo-first thinking is deferring cleanup to future sprints. The team agreed to roll outstanding Jira items into Sprint 5 and consolidate UI inconsistencies into tickets.

---

## Decisions Made

| Decision | Rationale | Owner |
|----------|-----------|-------|
| Search capability included in demo | Search merged and operational in Dev; C@G labels and apply-button behaviour nearly ready | Team |
| OTG functionality NOT demonstrated | Changes not fully pushed in; risk of breaking what works | Michelle / Team |
| Incomplete Sprint 4 work moves to Sprint 5 | Standard sprint discipline | Team |
| UI inconsistencies to be consolidated into tickets | Too many to fix pre-demo; need structured tracking | Team (owner TBC) |
| Search standardisation accepted as future work item | Design-level alignment needed across screens; not in current sprint scope | Design/Product |

---

## Action Items

| Task | Owner | Due | Priority |
|------|-------|-----|----------|
| Validate remaining Sprint 4 tickets and confirm roll-forward to S5 | Michelle | Tue 30 Jun | P0 |
| Create UI inconsistency tickets (spacing, layout, icons, filter behaviour) | Michelle + Amber | Wed 1 Jul | P1 |
| Create tickets for search standardisation (trigger, suggestions, clear-search, fuzzy match) | Michelle + Design | Wed 1 Jul | P1 |
| Merge proxy-related MR (Thomas review done) | Engineering lead | Mon 30 Jun | P0 |
| Resume background runner work post-merge | Infra/engineering | Tue 30 Jun | P1 |
| Fix C@G banner and apply-label behaviour | Thomas / Engineering | In progress | P0 |
| Investigate missing C@G icon | Engineering | Tue 30 Jun | P1 |
| Fix spacing/layout regression from shared layout changes | Engineering (identify owner) | Wed 1 Jul | P1 |
| Move search to UAT once QA passes | Engineering | This week | P1 |
| Capture notes during demo session | Rathika | During demo | Planned ✅ |

**No-due-date flag:** "Create UI ticket for inconsistencies" had no explicit owner assigned in the meeting. Defaulting to Michelle + Amber — confirm at standup.

---

## Open Questions

- [ ] Who owns shared layout governance? Changes from another team are affecting OTEP pages. No owner named. — Michelle to raise at next cross-team sync
- [ ] What are the exit criteria for UI readiness before a demo? No checklist exists. — Michelle to propose a lightweight demo-readiness gate before S5 demo
- [ ] Search UX decisions: trigger model, suggestions, clear-search behaviour, fuzzy match — are these PM decisions or design decisions? Unresolved. — Michelle + Amber to align before search standardisation tickets are written

---

## Risks

**Risk 1 — Search and filter UX not finalised**
Search works but UX behaviour (triggering, suggestions, clearing, fuzzy matching) is not agreed. Risk: engineering implements a model that needs rework after design alignment.

**Risk 2 — Shared layout dependency (cross-team)**
Another team's layout changes are affecting OTEP's Jobs and Opportunities pages. No ownership or governance exists. Risk: regressions continue undetected until pre-demo walkthroughs.

**Risk 3 — Demo-first fixes without a backlog**
Several issues were deferred with "fix after the demo" intent. If these don't make it into S5 backlog explicitly, they'll drift. The AI recommendation is sound: immediately after the demo, create a UI/UX debt cleanup backlog.

---

## What Went Well

- Search landed and is working in Dev — core Sprint 4 objective achieved
- Pre-demo walkthrough caught multiple defects before stakeholder exposure
- Cross-functional discussion was active: engineering, design, and product jointly evaluating decisions
- Sprint discipline held: team explicitly discussed rollover and ticket tidy-up before S5 kicked off

## What Didn't Go Well

- UI defects discovered at stand-up / immediately before demo — not during in-sprint QA
- Shared layout changes created unexpected regressions with no clear owner
- Manual data patching and migration work is still present — increases demo-readiness risk
- Demo-first thinking is producing deferred fixes that risk not being tracked

---

## PM Notes

The AI analysis (from automated transcript processing) flagged something worth owning directly: there are no defined UI sign-off criteria or design QA checklists. Before the S5 demo, propose a simple 5-point demo-readiness checklist with Amber. This isn't bureaucracy — it's the thing that prevents the same late-defect pattern in every sprint.

The search standardisation conversation also keeps surfacing without resolution. That's a PM decision gap. The team is waiting for a clear UX model to build against. Prioritise alignment with Amber this week.

---

*Saved: 2026-06-29 | Next: `/create-tickets` to convert UI and search standardisation items into Jira stories*
