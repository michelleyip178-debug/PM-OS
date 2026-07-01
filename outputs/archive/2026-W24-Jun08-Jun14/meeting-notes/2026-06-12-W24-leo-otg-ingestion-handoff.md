# Prep for Léo — OTG Ingestion, post-OTG-Opportunities meeting

**From:** Michelle · **To:** Léo Milbor (BE, owns OTEP-192 ingestion)

**Context:** The 12 Jun OTG Opportunities → CareerCompass meeting changed several ingestion rules. This is what's safe to build now vs what's blocked on validation, so you're not chasing a moving target.

**Source:** [OTG meeting notes](2026-06-12-otg-opportunities-careercompass-ingestion.md)

---

## The one thing to get across first

**Don't build the category mapping or the C@G dedup rule yet — both are unvalidated.** Everything else (open-only ingestion, data-quality handling) is safe to proceed on. The traffic-light table below is the whole message.

---

## 🟢 Build now / keep building (ratified, won't change)

| Rule | What it means for ingestion | Ties to |
|------|----------------------------|---------|
| **Ingest open opportunities only** | Exclude all expired/closed at ingestion. Not date-limited — all *currently open* come in. | Consistent w/ hard-skip D 2026-06-08 |
| **Hard-skip bad records** | Existing tiered validation (hard skip / warn / silent skip) stands. | OTEP-192 upsert logic |
| **SJR excluded from MVP listing** | SJR stays out — separate module, nomination-based. | D 2026-05-21 |

---

## 🟡 Don't build yet — blocked on validation (I'll unblock)

| Blocked item | Why it's not ready | Who unblocks · when |
|--------------|--------------------|---------------------|
| **5-category mapping** (STIPs/Gigs/Jobs/SJR/PSFG → OTG prefixes) | New taxonomy, supersedes the old type list. I'm writing the mapping logic; Xian Zhang's team must validate before it's locked. | Me → mapping draft · Xian Zhang → validate · target early w/c 15 Jun |
| **"Jobs" consolidation** (internal + C@G + secondments → one "Jobs" category) | Part of the category model above — same validation gate. Affects card labelling. | Same as above |
| **C@G-as-source-of-truth dedup rule** (where a job is in both OTG and C@G, prefer C@G) | Brand-new rule, never decided. Needs ESG HR to confirm whether ESG even posts to both. | Xian Zhang → ESG HR · before you build ESG ingestion |

⚠️ **If you're tempted to start the ESG dedup logic — hold.** We don't yet know if ESG opportunities are actually duplicated across systems. Building dedup before that answer is rework risk.

---

## 📋 What I owe you (and when)

| I'll give you | By |
|---------------|-----|
| **Category mapping logic** (5-cat → OTG prefixes/types), validated | Early w/c 15 Jun — before OTEP-86 filter work hardens |
| **Per-agency remediation reports** (which records are broken, by agency) | Feeding the data-quality work below |
| **C@G dedup answer** (does ESG double-post? which wins?) | Pending ESG HR — I'll flag the moment I have it |

---

## 🔧 Data-quality reality (so the scope makes sense)

Numbers from the meeting — this is *why* the remediation work matters:

- **~2,000+** total OTG opps → **633 open** → only **~160** pass current ingestion.
- **~78 records** missing prefixes; plus wrong labels, inconsistent naming ("MDDI internal opportunity"), missing metadata, wrong agency tags.
- **Worst offenders:** Enterprise Singapore (largest), MTI, MSF.
- **The clean-up isn't yours or mine** — it's DevOps + the agencies, targeted before Aug–Sep go-live. Your job is ingestion logic that handles the mess gracefully (skip/warn), not fixing source data.

**Question for you:** with current logic, what *exactly* makes the ~473 open-but-not-ingested records fail? If your skip/warn logging already tells us, that's half my remediation report written. → **this is the most useful thing you can bring back.**

---

## ⚠️ Don't lose sight of these (already on your plate)

- **OTEP-358** — nil-date handling spike, due before S4 planning. Ingestion-correctness; don't let the category remap crowd it out.
- **OTEP-427** — tighten ingestion logic (edge cases from live import). Follows OTEP-192. My spike, but your input on the edge cases.
- **OTEP-348** — scheduler/observability. The C@G dedup question blocks clean behaviour here for ESG.

---

## Suggested 10-min agenda when you sync

1. **Walk the 🟢/🟡 table** — confirm he's not mid-building anything in the 🟡 row.
2. **The failure-mode question** — what makes the 473 fail? Can his logs surface it?
3. **Confirm OTEP-358 + 427 still on track** — the category noise shouldn't displace them.
4. **Set the handoff date** — when I deliver validated mapping logic, what's his turnaround into OTEP-86/289?

---

*Prep doc. Once category mapping is validated + C@G dedup answered, this becomes concrete ticket updates on OTEP-192 / 348 / 289.*
