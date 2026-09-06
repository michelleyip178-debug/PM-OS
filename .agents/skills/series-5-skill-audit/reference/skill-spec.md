# Skill authoring spec

Checkable requirements from Anthropic's skill authoring best practices. These are binary, so verdicts here are pass or fail rather than judgement calls.

## Discovery

Only the name and description are preloaded into context. The description is the entire trigger surface, and a skill with a weak one never gets read no matter how good its body is.

- The description states both what the skill does and when to use it.
- It is written in third person throughout. First or second person causes discovery problems, since the description is injected into the system prompt.
- It contains the words a user would actually type, not the words the author would use to categorise the skill.
- It declares what the skill is not for, wherever a neighbouring skill could steal the trigger or have its own stolen.
- It is under 1,024 characters and contains no XML tags.
- The name is under 64 characters, lowercase letters, numbers and hyphens only, with no reserved words.

Where the reported problem is that the skill does not fire, start here and finish here before touching the body.

## Structure

- SKILL.md body is under 500 lines. Report the actual count.
- Every reference file links directly from SKILL.md, one level deep. Files referenced from other referenced files get partially read, often previewed with something like `head -100` rather than read whole, so information buried at that depth is unreliable.
- Reference files longer than 100 lines open with a table of contents, so their full scope is visible even on a partial read.
- File paths use forward slashes.
- Where the skill bundles scripts, the instructions make clear whether Claude should execute them or read them as reference.

## Content hygiene

- Terminology is consistent. One term per concept, throughout the skill and its references.
- No time-sensitive content outside a clearly marked legacy section.
- Examples are concrete rather than abstract.
- The skill does not present several equivalent options where one default with an escape hatch would do.
- The skill has one job. A skill covering three does not trigger cleanly against any specific request, and this is a finding rather than a nuance.

## Source

https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
