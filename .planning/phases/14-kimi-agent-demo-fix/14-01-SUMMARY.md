---
phase: 14-kimi-agent-demo-fix
plan: 01
subsystem: playwright.test/scripts
tags: [kimi, llm, vision-api, security, subprocess]
dependency_graph:
  requires: []
  provides: [kimi-utils]
  affects: [downstream comparison workers, orchestrators]
tech_stack:
  added: [native fetch, execFileSync]
  patterns: [env-only API key, execFileSync arg arrays, ID allowlist validation]
key_files:
  created:
    - playwright.test/scripts/kimi-utils.ts
  modified: []
decisions:
  - "KIMI_MAX_TOKENS set to 8192 (not lower) — model uses reasoning tokens before output"
  - "execFileSync with string[] exclusively — no shell string interpolation"
  - "validateDemoId enforces /^[a-z0-9_]+$/ as hard gate before any path.join usage"
  - "kimiCompare returns null on finish_reason=length instead of throwing — callers handle gracefully"
metrics:
  duration: "~5 minutes"
  completed: "2026-06-02"
  tasks_completed: 1
  tasks_total: 1
  files_created: 1
  files_modified: 0
---

# Phase 14 Plan 01: kimi-utils.ts — Kimi API Client Summary

**One-liner:** Kimi vision API client with safe subprocess invocation, env-only API key handling, and /^[a-z0-9_]+$/ demo ID validation.

## What Was Created

`playwright.test/scripts/kimi-utils.ts` — foundational Kimi API client module used by all downstream comparison workers. Exports:

| Export | Purpose |
|--------|---------|
| `KIMI_BASE` | `https://api.sfkey.cn/v1` — API endpoint constant |
| `KIMI_MODEL` | `kimi-k2.5` — model identifier |
| `KIMI_MAX_TOKENS` | `8192` — must not be lower (model reasoning tokens) |
| `KIMI_PASS_THRESHOLD` | `0.7` — minimum similarity_score for pass verdict |
| `COMPARISON_PROMPT` | Detailed two-image description + JSON response prompt |
| `validateDemoId(id)` | Enforces `/^[a-z0-9_]+$/` — blocks path traversal, uppercase, spaces |
| `agentBrowser(session, args)` | `execFileSync('agent-browser', [...], ...)` — no shell interpolation |
| `captureDemo(url, path, session, waitMs)` | Opens URL, waits, checks canvas, takes screenshot |
| `kimiCompare(portedPath, referencePath)` | Kimi multimodal vision comparison — returns `Verdict | null` |
| `Verdict` (re-export) | Type from shared-llm-utils |

## Verification

```
cd D:\Developments\tslib\@woby\three\playwright.test
npx tsx scripts/kimi-utils.ts --self-test
```

Output:
```
[self-test] validateDemoId tests...
[self-test] validateDemoId: OK
[self-test] KIMI_API_KEY not set — skipping live API validation
[self-test] PASS
```

Exit code: 0

Security scans (no output = pass):
- grep ANTHROPIC kimi-utils.ts — no matches
- grep playwright kimi-utils.ts — no matches

## Security Invariants Enforced

| Threat | Mitigation Applied |
|--------|-------------------|
| T-14-01: API key information disclosure | KIMI_API_KEY flows only to Authorization header. Error: "KIMI_API_KEY env var is not set" (no key value included) |
| T-14-02: LLM response tampering | Response parsed via parseVerdict() — JSON.parse + regex only, no dynamic eval |
| T-14-03: Shell injection via agent-browser args | execFileSync with string array arg — argument array bypasses shell entirely |
| T-14-04: Path traversal via demo ID | validateDemoId() enforces /^[a-z0-9_]+$/ — rejects ../etc/passwd, uppercase, spaces |
| T-14-05: API truncation DoS | finish_reason === 'length' returns null — caller logs warning and continues |

## Deviations from Plan

None — plan executed exactly as written. File structure, constants, function signatures, and self-test block match the plan specification verbatim.

## Commits

| Hash | Message |
|------|---------|
| c981303 | feat(14-01): create kimi-utils.ts - Kimi API client, agent-browser wrapper, ID validator |

## Self-Check: PASSED

- kimi-utils.ts exists at playwright.test/scripts/kimi-utils.ts
- npx tsx scripts/kimi-utils.ts --self-test exits 0 and prints "[self-test] PASS"
- No ANTHROPIC_API_KEY references in file
- No Playwright imports in file
- All subprocess calls use execFileSync with string[] arg arrays
- validateDemoId exported and enforces /^[a-z0-9_]+$/
- kimiCompare exported and reads KIMI_API_KEY from env only
- captureDemo exported and normalizes paths to forward slashes
- Commit c981303 exists in git log
