---
phase: 14-kimi-agent-demo-fix
plan: "02"
subsystem: visual-comparison-pipeline
tags:
  - kimi
  - visual-regression
  - worker-orchestration
  - typescript
dependency_graph:
  requires:
    - 14-01  # kimi-utils.ts, demo-list.ts
  provides:
    - kimi-comparison-worker.ts
    - kimi-orchestrator.ts
    - kimi-comparison-report.json
    - kimi-comparison-report.html
  affects:
    - playwright.test/test-results/
    - playwright.test/test-results/partial-results/
tech_stack:
  added:
    - child_process.spawn for OS-level worker parallelism
  patterns:
    - fan-out/merge with Promise.allSettled
    - incremental JSON write (per-demo partial flush)
    - pre-flight checks (API key, dev server)
key_files:
  created:
    - playwright.test/scripts/kimi-comparison-worker.ts
    - playwright.test/scripts/kimi-orchestrator.ts
  modified: []
decisions:
  - Worker always writes partial file in finally block (even for 0-demo batches) to suppress merge warnings
  - Orchestrator cleans stale partial-*.json files before spawning workers to ensure fresh results
  - escapeHtml() handles null/undefined/non-string values defensively (runtime coercion via String())
  - Promise.allSettled used (not Promise.all) so single worker crash does not abort merge phase
metrics:
  duration: "~15 minutes"
  completed: "2026-06-02"
  tasks_completed: 2
  tasks_total: 2
  files_created: 2
---

# Phase 14 Plan 02: Kimi Comparison Worker and Orchestrator Summary

Two TypeScript scripts implementing the full Kimi visual comparison pipeline for the @woby/three demo porting project.

## One-liner

5-worker orchestrator with per-batch Kimi reference capture and dry-run mock mode producing JSON + HTML comparison reports.

## What Was Built

### Task 1: kimi-comparison-worker.ts

Per-batch worker spawned as a separate OS process by the orchestrator. Processes the worker's slice of comparable demos (ALL_DEMOS minus CUSTOM_DEMO_IDS).

Key behaviors:
- CLI args: `--batch-index`, `--batch-size`, `--dry-run`, `--limit`
- Validates demo IDs via `validateDemoId()` before any path construction (path traversal gate)
- Session names: `ported-{batchIndex}` and `ref-{batchIndex}` — never derived from demo ID strings
- Wait time: 8000ms default, 12000ms for `webgl_loader_*` demos
- Reuses existing ported screenshots (marks `no-ported-screenshot` if missing)
- Captures reference screenshots from threejs.org if not on disk
- Calls `kimiCompare()` (or mock verdict in dry-run mode)
- Writes incremental `partial-{batchIndex}.json` after each demo
- Always writes partial file in `finally` block (even for 0-demo batches)
- Closes both sessions in `finally` block

### Task 2: kimi-orchestrator.ts

Top-level entry point spawning 5 parallel worker processes.

Key behaviors:
- Pre-flight: exits 1 with clear message if KIMI_API_KEY unset on non-dry-run
- Pre-flight: warns (not blocks) if localhost:5175 unreachable and ported screenshots missing
- Clears stale `partial-*.json` files before spawning workers
- Spawns workers via `spawn('npx', [...])` with array args (no shell interpolation)
- KIMI_API_KEY propagated via `env: { ...process.env }` only — never logged
- Uses `Promise.allSettled` so single worker failure does not abort merge
- Merges all `partial-N.json` files, de-duplicates by demo ID
- Generates `kimi-comparison-report.json` and `kimi-comparison-report.html`
- HTML report: sorted fail/warn/pass/no-ref, inline CSS, self-contained
- Exit 0 for dry-run; exit 0/1 based on CI gate for live runs
- Supports `--workers=N`, `--refail` flags

## Verification Results

```
npx tsx scripts/kimi-orchestrator.ts --dry-run --limit=3
```

Output:
- Exit code: 0
- `test-results/kimi-comparison-report.json` — 3 demo entries
- `test-results/kimi-comparison-report.html` — valid self-contained HTML

Pre-flight test (no KIMI_API_KEY):
- Exit code: 1
- Message: `FATAL: KIMI_API_KEY env var is not set`

Security checks:
- No ANTHROPIC_API_KEY references in any new file (comments only document its absence)
- No Playwright imports in any new file
- All subprocess calls use spawn with array args

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] escapeHtml() called with undefined/null values**
- Found during: Task 2 verification
- Issue: HTML report generator called escapeHtml() with `r.similarity_score.toFixed()` (when null), `r.key_differences.length` (when undefined), and `r.verdict` (when null)
- Fix: Made `escapeHtml()` accept `string | null | undefined`; added `??` guards and `String()` coercion; fixed null check to `!= null` (catches undefined too)
- Files modified: playwright.test/scripts/kimi-orchestrator.ts

**2. [Rule 1 - Bug] Stale partial files inflated merge count**
- Found during: Task 2 verification
- Issue: Previous partial-*.json files from prior test runs were picked up by the merge, producing 83 entries instead of 3
- Fix: Added cleanup of stale `partial-*.json` files before spawning workers
- Files modified: playwright.test/scripts/kimi-orchestrator.ts

**3. [Rule 1 - Bug] Workers with 0 demos never wrote partial files**
- Found during: Task 2 verification
- Issue: Workers processing 0 demos never called `writePartial()`, causing the merge to warn about missing files
- Fix: Added final `writePartial()` call in the `finally` block to always write partial file
- Files modified: playwright.test/scripts/kimi-comparison-worker.ts

## Known Stubs

None — dry-run mode uses explicit mock verdicts (not stubs). Live mode uses real Kimi API via `kimiCompare()`.

## Threat Flags

No new security surface beyond what was documented in the plan's threat model (T-14-06 through T-14-10). All mitigations applied as designed.

## Self-Check: PASSED

- playwright.test/scripts/kimi-comparison-worker.ts exists: FOUND
- playwright.test/scripts/kimi-orchestrator.ts exists: FOUND
- test-results/kimi-comparison-report.json exists: FOUND (3 entries)
- test-results/kimi-comparison-report.html exists: FOUND
- Commit bff7758 exists: FOUND
- No ANTHROPIC_API_KEY code references: VERIFIED
- No Playwright imports: VERIFIED
- Exit code 0 on --dry-run --limit=3: VERIFIED
- Exit code 1 on live run without KIMI_API_KEY: VERIFIED
