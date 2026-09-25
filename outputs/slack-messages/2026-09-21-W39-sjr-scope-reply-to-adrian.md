---
date: 2026-09-21
week: 2026-W39
type: slack-reply
to: Adrian Ang
thread: SJR scope for 2027/2028 cycle / R1 discovery-only proposal
status: sent
---

# Reply to Adrian — SJR Scope Question (Sent)

**Context:** Adrian raised two questions on the proposal to defer SJR *application* to the 2028 cycle and have R1 focus on discovery only (pulling SJRs from OTG into Compass). This is what Michelle actually sent back.

---

## What Was Sent

> Reduced scope - Based on Liting's discovery, the application is also happening similarly to how STIPs, Gigs are handled currently. Look at the screenshot attached. So if we can influence BOs/DevOps to switch to FormSG way now (with CV upload), this will reduce the friction of having to re-login.
>
> Yes confirm, SJRs are SOLELY in OTG because the HR systems currently cannot handle the exercise cycle and the login access friction (likely too painful to engage their vendors to change on their system). OTG was meant to serve as SJR's main platform and point of entry.
>
> SJRs can be pulled from OTG and I have planned for this in R1 for SJR 2027 cycle. We should phase out the implementation required for SJR itself as the effort (IMO) is enough to be surface an an epic itself.

---

## What This Resolves

**Q1 (application flow / "show stopper UX"):** Answered with a concrete mechanism, not just a reassurance. Liting's discovery found SJR applications already work like STIPs/Gigs today. Michelle's proposed fix: push BOs/DevOps to adopt a FormSG-based apply flow with CV upload now, which removes the re-login friction Adrian flagged, without needing HRPS/Cumulus integration first.

**Q2 (is SJR truly OTG-only):** Confirmed, with the reason. SJRs sit solely in OTG because HRPS/Cumulus can't currently support the exercise cycle or the login-access friction, and getting their vendors to change is likely too costly. OTG was purpose-built as SJR's platform and entry point. This is a firmer, more specific claim than "unconfirmed" or even the to-be brief's original framing — it says HRPS/Cumulus *can't* do this today, not just *don't yet*.

**Scope call:** SJRs get pulled from OTG into R1 for the 2027 cycle (per the plan already in motion), but Michelle recommends surfacing full SJR implementation as its own epic rather than absorbing it into R1's existing scope — the effort is big enough to warrant that split.

---

## Internal Notes

- **This closes the loop that was open in the [R1 Scope Alignment thread debrief](../meeting-notes/2026-09-21-W39-r1-scope-alignment-cumulus-otep-thread.md)** — Adrian's pushback there is now answered with a specific mechanism (FormSG + CV upload) and a scope recommendation (separate epic), not a "let me come back to you."
- **Correction to the SJR to-be handover brief:** updated the as-is framing to include the *reason* SJRs are OTG-only (HRPS/Cumulus can't handle the exercise cycle/login friction, vendor-change cost) — see [SJR To-Be Handover Brief](../decisions/2026-09-20-W38-sjr-to-be-handover-brief.md).
- **New scope decision to track:** "SJR as its own epic, not absorbed into R1 core scope" is a real proposal now, not just a leaning. Worth a dedicated decision doc once Adrian responds, since it affects the Tuesday estimation delivery — if SJR peels off into its own epic, the 18-23.5 man-week R1 estimate needs to reflect SJR's removal (or partial removal) from that number, not just its own separate track.
- **New action item, not yet in this week's plan:** confirm with BOs/DevOps whether they'll adopt the FormSG-with-CV-upload apply flow for SJR now. This is a real ask outside the HRPS/Cumulus/NCS discovery track and needs its own owner and timeline.
