# Slack Message: 4 Risks Before VAPT

**To:** Jace (cc Adrian if he's not already looped in)

**Channel/DM:** Direct message

**Tone:** Direct, brief

---

## Main Message

Flagging 4 risks before Thursday's planning. I first thought these could wait — they can't. We have 3 sprints left before VAPT starts (7 Sep), and VAPT needs about a month of setup before that. So we've really only got a few weeks.

1. **The data requirements document is still unknown, no date** — blocks the job-eligibility feature. 🔴 High.
2. **We don't know if POCDEX's API will be ready for MVP** — separate and bigger question than #1. Even if we get the data requirements sorted, we still need POCDEX itself to actually be working. 🔴 High.
3. **A tool another team owns is broken** — blocks skill-matching. 🟡 Medium-high, lower priority but still stuck.
4. **Login doesn't work properly in our test setup** — we're testing a workaround, not the real thing. 🟡 Medium. CSC can only get their own login integration ready in August, no earlier, regardless of us. If we're not ready by then, their integration slips too, no way to catch up.

**Ask:** if either of you can push these faster than we can, please do — this week if possible. Also need a call on whether #1 and #2 should go above team-to-team, since both are genuinely undefined with no dates attached.

---

## Thread Reply (if asked for more detail)

Timeline: feature freeze 21 Aug, VAPT 7 Sep, and VAPT needs ~1 month of setup before it starts. So the real window to fix all four is more like the next 2-3 weeks.

- Data requirements doc: no date given yet — this is the "what data are we even allowed to use" question.
- POCDEX API readiness: separate question from the above — even with the requirements sorted, we don't know if POCDEX's actual API will be technically ready for MVP.
- Broken tool: we have workarounds but don't trust them. Haven't formally flagged it to the other team yet.
- Login: just needs infra to confirm whether our test setup can talk to the real login system. No meeting booked yet. CSC's own August window is fixed either way — we can't speed them up, but we can miss their window if we're late.

Full detail: [Sprint 6 risks — plain language](../status-updates/2026-07-08-W28-sprint6-external-dependencies-update.md)

---

*Source: [Internal grooming, 2026-07-08](../meeting-notes/2026-07-08-W28-internal-grooming.md)*
