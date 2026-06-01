---
phase: 13-visual-regression
plan: "03"
subsystem: playwright-test
tags: [child_process, spawn, parallel-agents, visual-regression, orchestrator, html-report]
dependency_graph:
  requires:
    - playwright.test/scripts/demo-list.ts (Plan 01)
    - playwright.test/scripts/shared-llm-utils.ts (Plan 02)
  provides:
    - playwright.test/scripts/agent-batch-worker.ts
    - playwright.test/scripts/parallel-visual-comparison.ts
  affects:
    - Plan 04 (reads visual-comparison-report.json produced by parallel-visual-comparison.ts)
tech_stack:
  added: []
  patterns:
    - "OS-level parallelism via Node.js child_process.spawn (5 separate processes, each with own Node.js VM and Playwright browser)"
    - "Fan-out/merge: Promise.all of spawn-wrapped Promises, merge partial JSONs from disk after process exit"
    - "Exclusive non-overlapping demo slice per agent: ALL_DEMOS.slice(batchIndex * batchSize, (batchIndex+1) * batchSize)"
    - "HTML report with summary metrics grid, filter buttons, per-demo screenshot thumbnail rows"
    - "Resilient orchestrator: non-zero agent exit codes are logged but do not abort orchestrator"
key_files:
  created:
    - playwright.test/scripts/agent-batch-worker.ts
    - playwright.test/scripts/parallel-visual-comparison.ts
  modified: []
decisions:
  - "Used child_process.spawn (NOT Promise.all of in-process functions) to create true OS-level parallel agents — each has its own Node.js VM, memory, event loop, and Playwright browser instance"
  - "Non-zero agent exit resolves (not rejects) the spawnAgent Promise — orchestrator continues to merge whatever partial results were written, enabling partial recovery"
  - "BATCH_SIZE = Math.ceil(ALL_DEMOS.length / NUM_AGENTS) ensures all demos are covered even when total is not divisible by 5"
  - "ci_gate_failed uses pass_rate < PASS_THRESHOLD (0.70) — exits process with code 1 in CI environments when threshold not met"
metrics:
  duration: "~5 minutes"
  completed_date: "2026-06-01"
  tasks_completed: 2
  tasks_total: 2
  files_created: 2
  files_modified: 0
---

# Phase 13 Plan 03: Parallel Agent Orchestrator and HTML Report Summary

Implemented the TRUE parallel multi-agent architecture using Node.js `child_process.spawn` to launch 5 separate OS processes. Each process runs `agent-batch-worker.ts` with an exclusive non-overlapping demo slice, writes a partial JSON result, and the orchestrator merges all 5 partials into `visual-comparison-report.json` and `visual-comparison-report.html`.

## Tasks Completed

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | Create agent-batch-worker.ts — per-agent CLI worker | 1724fe2 | playwright.test/scripts/agent-batch-worker.ts |
| 2 | Create parallel-visual-comparison.ts — OS-process orchestrator + HTML report | 67acc1b | playwright.test/scripts/parallel-visual-comparison.ts |

## Artifacts Produced

### playwright.test/scripts/agent-batch-worker.ts

- CLI entry point with top-level `main()` — launched as a SEPARATE OS PROCESS by the orchestrator
- Parses `--batch-index=N` and `--batch-size=M` from `process.argv`
- Computes exclusive demo slice: `ALL_DEMOS.slice(batchIndex * batchSize, (batchIndex + 1) * batchSize)`
- Launches `chromium` with `--use-angle=gl` for WebGL rendering support
- Checks cached reference screenshots before re-capturing; uses `probeUrl` to detect 404s
- Imports `parseVerdict`, `buildBatchRequests`, `resizeScreenshot`, `submitAndPoll` from `./shared-llm-utils.js` — no duplication
- Imports `ALL_DEMOS`, `CUSTOM_DEMO_IDS`, `THREEJS_BASE`, `PORTED_SCREENSHOT_DIR`, `REFERENCE_SCREENSHOT_DIR`, `probeUrl` from `./demo-list.js`
- Supports `--dry-run` flag (mock verdicts, no API call; score 0.85)
- Validates `ANTHROPIC_API_KEY` via `process.env` check before any API use; value never logged
- Writes `AgentBatchResult` JSON to `test-results/partial-results/partial-{N}.json` before exit

### playwright.test/scripts/parallel-visual-comparison.ts

- Imports `spawn` from Node.js built-in `child_process` — creates REAL OS processes
- `spawnAgent(batchIndex, isDryRun)` — wraps `child_process.spawn` in a Promise resolved on `proc.on('exit')`
- Fan-out: `await Promise.all(Array.from({ length: NUM_AGENTS }, (_, i) => spawnAgent(i, isDryRun)))` — all 5 agents run concurrently as OS processes
- Stdout/stderr from each child process is prefixed with `[Agent N]` and piped to orchestrator stdout/stderr
- Non-zero exit resolves (not rejects) — partial results are still merged
- `mergePartialResults()` reads all `partial-{i}.json` files after process exit, maps `AgentDemoResult` to `DemoComparisonResult` with status classification
- Writes `visual-comparison-report.json` — full `VisualComparisonReport` with `pass_rate`, `ci_gate_failed`, and per-demo results
- `generateHtmlReport()` — produces HTML with summary metrics grid, filter buttons, per-demo rows with screenshot thumbnails
- Writes `visual-comparison-report.html`
- `runParallelComparison()` — exported async function for programmatic use
- `main()` — CLI entry; exits with code 1 if `ci_gate_failed` is true
- Does NOT import from `agent-batch-worker.ts` — subprocess model only, no in-process coupling

## Deviations from Plan

None — plan executed exactly as written. All code matches the plan's TypeScript exactly.

## Known Stubs

None. Both scripts are fully implemented. The scripts require reference screenshots and ported screenshots to exist at runtime (produced by Plans 01 and test execution). This is a correct runtime dependency, not a stub.

## Threat Flags

No new security surface beyond the plan's threat model.

- T-13-08 (HTML report information disclosure): Accepted — developer artifact only; contains demo IDs, scores, and LLM reasoning; no secrets
- T-13-09 (5 x child_process.spawn DoS): Accepted — bounded to 5 processes; orchestrator tracks all; non-zero exit logged but does not crash
- T-13-10 (partial-results/*.json disclosure): Accepted — build artifacts only; no credentials
- T-13-11 (mergePartialResults tampering): Accepted — reads typed JSON from own child processes; no external input path

## Self-Check: PASSED

- `playwright.test/scripts/agent-batch-worker.ts` exists: FOUND
- `playwright.test/scripts/parallel-visual-comparison.ts` exists: FOUND
- agent-batch-worker.ts grep `batch-index`: 2 matches (PASSED)
- agent-batch-worker.ts grep `use-angle=gl`: 1 match (PASSED)
- agent-batch-worker.ts grep `submitAndPoll`: 2 matches (PASSED)
- agent-batch-worker.ts grep `reference-load-failed`: 3 matches (PASSED)
- agent-batch-worker.ts grep `non-overlapping|exclusive slice|each demo appears in exactly one`: 1 match (PASSED)
- agent-batch-worker.ts grep `shared-llm-utils`: 1 match (PASSED, imports from shared module)
- parallel-visual-comparison.ts grep `child_process|spawn`: 8 matches (PASSED, >= 2)
- parallel-visual-comparison.ts grep `Promise.all`: 2 matches (PASSED, >= 1)
- parallel-visual-comparison.ts grep `visual-comparison-report.json`: 1 match (PASSED)
- parallel-visual-comparison.ts grep `ci_gate_failed`: 5 matches (PASSED, >= 3)
- parallel-visual-comparison.ts grep `generateHtmlReport`: 2 matches (PASSED, >= 2)
- parallel-visual-comparison.ts grep `mergePartialResults`: 2 matches (PASSED, >= 2)
- parallel-visual-comparison.ts grep `agent-batch-worker`: 1 match (PASSED, spawn reference)
- parallel-visual-comparison.ts grep `runAgentBatch`: 0 matches (PASSED — no in-process coupling)
- Commit 1724fe2 exists: CONFIRMED
- Commit 67acc1b exists: CONFIRMED
