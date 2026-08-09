# CSC-Compass SIT Standup Recap — Friday, 7 Aug

**Main outcome:** WS1 (Course File Import) and WS2 (Learner Mapping) both passed SIT clean, no blocking defects. WS3 (SSO) is still the pacing item for UAT.

## Decisions

- WS1 + WS2 SIT passed, scope complete (unhappy-path testing deferred to UAT)
- Swapping to CSC's 4 validated test accounts for UAT (fixes the earlier test-data issue)
- Keycloak account changes now route through Leo
- End-to-end officer learning journey walked through and aligned (login → Learning tab → JumpStart recs → Search → Course Detail → Learn More → SSO into Learn portal)
- UAT target stays 31 Aug, tentative pending confirmation
- SIT standup moving to Slack unless a live discussion is needed

## Follow-ups / Action Items

*None dated yet.*

- Document SSO monitoring items, hostname risks, required changes — Adrian Lo
- Complete SSO config between CSC and auth service — Pow Hwee, Herman
- Provide CSC SL configuration + required parameters — Pow Hwee
- Replace personas with the 4 validated UAT accounts — Team
- Send account additions/modifications to Leo — Adrian Lo
- Validate latest dataset sent to Johnny — Adrian Lo
- Verify production delta-loading approach (1-day vs multi-day resilience) — Rama
- Confirm UAT schedule/date — CSC team

## Open Questions

- Intranet routing migration for VAPT — no owner, no plan yet. This is the 3rd meeting this week flagging it (SIT progress review, Squad Sync, now this standup). Needs an owner today, not another mention.
- Final hostname + freeze date — unresolved, SSO partners may need to reconfigure if it changes again.
- Is 31 Aug still realistic given SSO/routing are still open?

## Next

Cadence moves to Slack — will flag if WS3/routing needs a live sync.

*Full notes: `outputs/meeting-notes/2026-08-07-W32-csc-compass-sit-daily-standup.md`*
