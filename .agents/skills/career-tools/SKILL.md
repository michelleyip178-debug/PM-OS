---
name: career-tools
description: Career support for PMs — tailor your resume, create work samples, write referral request emails, generate interview practice questions, and get feedback on interview transcripts.
triggers:
  - /career-tools
  - customize resume
  - tailor resume
  - work sample
  - job application
  - referral email
  - referral request
  - interview practice
  - interview questions
  - review interview
  - interview feedback
---

# /career-tools — PM Career Support

Use this skill for any job search or career development task: resume tailoring, work samples, referrals, interview prep, and post-interview debrief.

## Menu

When the PM runs `/career-tools`, present this menu:

```
1. Customize Resume      — tailor your resume to a specific job posting (ATS + recruiter screen)
2. Work Sample           — create a PM work product for an application or take-home assignment
3. Referral Request      — draft an email asking for a referral without being awkward
4. Interview Practice    — generate likely interview questions based on your resume + JD
5. Review Interview      — get coaching feedback on a completed interview transcript or notes
```

## Inputs Per Type

**Customize Resume:** current resume (paste), job description (paste), fit level (perfect fit / mostly qualified / stretch / career pivot), target length (1 or 2 pages)

**Work Sample:** assignment prompt (if given) or choose type (product strategy / feature analysis / market opportunity / competitive analysis / roadmap recommendation), relevant experience to draw from, what you know about the company

**Referral Request:** who you're asking (name, relationship type, their role at company), the job (company, role, why you want it), your timeline/urgency

**Interview Practice:** resume (paste), job description (paste), interview type (phone screen / hiring manager / panel / final round), interviewer roles (if known), areas of concern (gaps, transitions, weak areas)

**Review Interview:** transcript or detailed notes of Q&A, the role details (company, stage, product type, what they're hiring for), your answers to key questions

## Prompt Templates

Full structured prompts for each type are in:
`context-library/prompt-library/aakash-prompt-library.md` → **Career** section

Load the relevant prompt, pre-fill from workspace context where applicable, then generate.

## How to Use Each Type

### 1. Customize Resume
- Analyze the JD for must-haves, nice-to-haves, and ATS keywords
- Map the PM's experience against each requirement (strong match / partial / gap)
- Rewrite bullet points to mirror JD language without fabricating
- Output: tailored resume + gap analysis

### 2. Work Sample
- Follow the 2-pager formula: Opportunity → Analysis → Recommendation (p1), How it works → Why it matters → Next steps (p2)
- Show strategic thinking AND operational detail
- Tie to the company's actual product and market
- Output: polished work sample doc

### 3. Referral Request
- Match tone to relationship (close colleague / acquaintance / cold reach)
- Keep it brief, specific, and easy to say yes to
- Always include a graceful out
- Output: ready-to-send email

### 4. Interview Practice
- Generate questions they'll "definitely ask" (90%+ of PM interviews)
- Generate questions likely based on this specific JD and company
- Flag areas to prep extra based on resume gaps or role requirements
- Include answer frameworks (STAR, CIRCLES) and a draft structure for each key question

### 5. Review Interview
- Score each answer against PM competencies (product sense, execution, strategy, leadership, analytical)
- Flag PM failure modes (feature factory, no metrics, user-blind, too vague)
- Give specific rewrites for weak answers
- Output: coaching report with A/B/C/D grades and concrete improvements

## Output

Save to `outputs/career/` with descriptive filenames:
- `resume-[company]-[YYYY-MM-DD].md`
- `work-sample-[company]-[YYYY-MM-DD].md`
- `referral-[company]-[YYYY-MM-DD].md`
- `interview-prep-[company]-[YYYY-MM-DD].md`
- `interview-review-[company]-[YYYY-MM-DD].md`
