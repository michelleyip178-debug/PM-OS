---
name: gtm-copy
description: GTM copy and content creation — sales battlecards, cold outreach, blog posts, social posts, landing page copy, email campaigns, and demo scripts.
triggers:
  - /gtm-copy
  - battlecard
  - sales battlecard
  - cold outreach
  - blog post
  - social media post
  - landing page copy
  - email campaign
  - demo script
---

# /gtm-copy — GTM Copy & Content

Use this skill when you need to write any GTM-facing content: sales enablement, outreach, marketing copy, or demo preparation.

## How It Works

1. Ask which type of content you need (see menu below)
2. Collect the required inputs
3. Pull context automatically from the workspace (product info, ICP, positioning) before asking for gaps
4. Generate the content and save to `outputs/gtm-copy/[type]-[date].md`

## Menu

When the PM runs `/gtm-copy`, present this menu and ask which they need:

```
1. Sales Battlecard      — competitive positioning + objection handling for sales
2. Cold Outreach Email   — reach out to a prospect, partner, or research participant
3. Blog Post             — thought leadership, product launch, or educational content
4. Social Media Posts    — LinkedIn, Twitter/X, or Product Hunt announcement
5. Landing Page Copy     — homepage, feature page, or campaign landing page
6. Email Campaign        — onboarding, feature adoption, re-engagement, or nurture sequence
7. Demo Script           — structured script for first call, deep dive, or exec demo
```

## Inputs Per Type

**Sales Battlecard:** product/value prop, which competitor, their strengths/weaknesses, common objections, your differentiators, win/loss patterns

**Cold Outreach Email:** who you're reaching out to (role, company, how you found them), the ask (call/feedback/demo/partnership/beta), why them specifically, what you offer in return

**Blog Post:** topic + your unique angle, audience + technical level, purpose (announce/thought leadership/educational/customer story), target length, SEO keywords (optional)

**Social Media Posts:** what you're posting about, platforms (LinkedIn/Twitter/Product Hunt), tone + goal, key message or hook

**Landing Page Copy:** what the page is for, target audience + their pain, your offer + unique value, goal (signups/demos/calls), key objections to handle

**Email Campaign:** campaign type (onboarding/adoption/re-engagement/nurture/announcement), audience segment, goal + desired action, sequence length (one-off/3-email/5-email)

**Demo Script:** demo type (first call/deep dive/exec/hands-on), audience roles + known pain points, demo length, goal (next meeting/trial/close/technical validation)

## Prompt Templates

Full structured prompts for each type are in:
`context-library/prompt-library/aakash-prompt-library.md` → **GTM** section

Load the relevant prompt, pre-fill from workspace context, then generate.

## Context to Pull Automatically

Before asking for inputs, check:
- `context-library/business-info-template.md` — product description, value prop, target market
- `context-library/strategy/` — ICP, positioning, competitive context
- `context-library/research/` — customer quotes, competitive intel
- `context-library/prds/` — feature details for product announcements

Pre-fill what you can. Only ask for what's genuinely missing.

## Output

Save to `outputs/gtm-copy/` with descriptive filenames:
- `battlecard-[competitor]-[YYYY-MM-DD].md`
- `outreach-[target]-[YYYY-MM-DD].md`
- `blog-[topic-slug]-[YYYY-MM-DD].md`
- `social-[topic-slug]-[YYYY-MM-DD].md`
- `landing-[page-name]-[YYYY-MM-DD].md`
- `email-campaign-[type]-[YYYY-MM-DD].md`
- `demo-script-[audience]-[YYYY-MM-DD].md`
