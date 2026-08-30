# Ops Portal — what's left after the daily sync ships

If MVP is just the daily sync (detect, diff, categorize, log — no full six-section portal yet), here's everything else still needed to get to a real, working system.

## Same MVP release, just after sync (fast-follow within MVP)

The sync alone tells you *what changed*. Nobody can act on it without these.

| What's needed | Why it can't wait long | Blocked by |
|---|---|---|
| Remaining four portal sections (Identity issues, Employment record issues, Record changes, History and reporting) | BOs can see case counts (Overview) and stuck jobs (Update status), but can't actually review or sort a case without these | No visual designs exist yet — this is the actual blocker, not the code |
| BO training / in-portal guidance for the category system | People triaging dozens of cases a day will mis-categorize on close calls with no way to check themselves | Needs to be written once the categories are final |
| Officer-facing messages that change by case type and severity | Right now the message is generic — undercuts the whole point of building officer trust | Content/design work, not blocked technically |

## Fast-Follow (a real release after MVP)

MVP only gets a case as far as "detected and routed." Nothing actually gets fixed yet. Fast-Follow is the four steps after that:

| Step | What happens | Who |
|---|---|---|
| Group similar cases | Related cases bundled, next step suggested | Receiving team |
| Investigate | Compare the record against agency/POCDEX source data | Receiving team |
| Fix | Re-check, escalate, or request a source-system correction | Receiving team |
| Confirm and close | Re-check the record, close the case with a root cause | Receiving team |

The "Investigate" step needs a second person to independently sign off on any identity link or merge — that's the one safeguard that catches a wrong match before anyone acts on it. Skip that and the whole "protect officer identity by design" promise breaks.

Also open for this phase: whether some fixes get automated (Adrian's suggestion — auto-update fields an officer wouldn't notice themselves, like job family, keep a human only for things like NRIC or email) instead of routing everything through a person.

## Not scheduled yet, just known gaps

| What's needed | Why it's not in MVP or Fast-Follow yet |
|---|---|
| Automatic deactivation for officers who leave | No contract, timeline, or owner exists — right now the only safeguard is that a departed officer can't log in, and that's it |
| NRIC/FIN backup identity check | Approval's no longer needed, but it hasn't been built. Once it exists, it also unlocks expanding the daily check to scan identity fields, which it doesn't do today |
| Daily check expanded to scan identity/contact fields | Today the sync only watches agency, role, and classification fields. An email-only change can slip through completely undetected until the NRIC/FIN check above exists |
| Reporting/org-structure change detection | Cut from MVP because nothing displays it today. Only worth building if CC decides to show org-structure to officers, or if POCDEX confirms it can reliably provide those fields |

## The short version

Daily sync tells you something changed. Fast-follow within MVP lets a BO actually see and sort it. Fast-Follow (the release after) is what actually fixes the officer's record. Everything after that is either a safety net that isn't built yet (deactivation, identity fields) or scope that's deliberately on hold (org-structure) until there's a real reason to build it.
