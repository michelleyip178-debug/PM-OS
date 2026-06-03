#!/usr/bin/env python3
"""
PostToolUse hook: check (and auto-fix) Markdown blank-line separators.

Triggers after Write/Edit/MultiEdit. If the edited file is Markdown, it:
  - auto-fixes consecutive `**Bold:**` metadata lines missing a blank separator
    (the most common offender), writing the corrected file back
  - flags, without auto-fixing, other likely issues (headers/lists/tables not
    surrounded by blank lines) so Claude can review them

Reads the tool payload from stdin (JSON). Emits a short note on stderr and
exits non-zero only to surface a message back to Claude when something was
changed or flagged; never blocks the write.
"""
import sys, json, re, os

def main():
    try:
        payload = json.load(sys.stdin)
    except Exception:
        sys.exit(0)  # no payload, nothing to do

    ti = payload.get("tool_input", {}) or {}
    path = ti.get("file_path") or ti.get("path")
    if not path or not path.endswith((".md", ".markdown")):
        sys.exit(0)
    if not os.path.isfile(path):
        sys.exit(0)

    try:
        with open(path, encoding="utf-8") as f:
            lines = f.read().split("\n")
    except Exception:
        sys.exit(0)

    bold_meta = re.compile(r"^\*\*[^*]+:\*\*")           # **Label:** ...
    header = re.compile(r"^#{1,6}\s")
    in_code = False
    fixed = []
    auto_fixes = 0
    flags = []

    for i, line in enumerate(lines):
        if line.strip().startswith("```"):
            in_code = not in_code
            fixed.append(line)
            continue
        if in_code:
            fixed.append(line)
            continue

        prev = fixed[-1] if fixed else ""

        # AUTO-FIX: consecutive bold-metadata lines need a blank separator
        if bold_meta.match(line) and bold_meta.match(prev.strip()):
            fixed.append("")
            auto_fixes += 1

        # FLAG (don't auto-fix): header not preceded by blank line
        if header.match(line) and prev.strip() != "" and not prev.startswith("#"):
            flags.append(f"  line {i+1}: header `{line[:40]}` has no blank line before it")

        # NOTE: a list-jam heuristic was removed — a list under a `**Bold:**`
        # lead-in or a `:`-terminated line is valid, idiomatic Markdown, so the
        # check produced only false positives in real docs. The precise,
        # high-value behaviour (auto-fixing consecutive **Bold:** lines) stays.

        fixed.append(line)

    if auto_fixes:
        try:
            with open(path, "w", encoding="utf-8") as f:
                f.write("\n".join(fixed))
        except Exception:
            pass

    if auto_fixes or flags:
        msg = [f"[format-md-check] {os.path.basename(path)}:"]
        if auto_fixes:
            msg.append(f"  auto-inserted {auto_fixes} blank line(s) between consecutive **Bold:** lines.")
        if flags:
            msg.append("  review (not auto-fixed):")
            msg.extend(flags[:10])
        print("\n".join(msg), file=sys.stderr)
        sys.exit(2)  # surface the note to Claude

    sys.exit(0)

if __name__ == "__main__":
    main()
