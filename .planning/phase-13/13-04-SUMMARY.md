---
phase: 13-visual-regression
plan: "04"
subsystem: playwright-test
tags: [playwright, ci-gate, visual-regression, cross-env, runbook]
dependency_graph:
  requires:
    - playwright.test/scripts/parallel-visual-comparison.ts (Plan 03)
    - playwright.test/scripts/agent-batch-worker.ts (Plan 03)
  provides:
    - playwright.test/tests/visual-comparison.test.ts
    - playwright.test/COMPARISON_RUN.md
  affects:
    - CI pipeline (provides exit-code gate on visual pass rate)
tech_stack:
  added:
    - cross-env ^10.1.0 (devDependency, Windows/Unix portable env var setting)
  patterns:
    - "Playwright test wrapping an async orchestrator function — test.setTimeout(2h) overrides 25-min config default"
    - "test.skip (not test.fail) when ANTHROPIC_API_KEY absent — optional external API access pattern"
    - "Two-gate assertion: ci_gate_failed === false (pass_rate >= 0.70) AND hard-fail rate <= 10%"
    - "Second test validates report schema from disk — can run without re-triggering the pipeline"
key_files:
  created:
    - playwright.test/tests/visual-comparison.test.ts
    - playwright.test/COMPARISON_RUN.md
  modified:
    - playwright.test/package.json (added test:visual, test:visual:dry scripts; cross-env devDependency)
    - playwright.test/pnpm-lock.yaml (updated by pnpm add -D cross-env)
decisions:
  - "Used test.skip (not test.fail) when ANTHROPIC_API_KEY absent — CI systems without the key should not fail; developers without the key should get a clear informative skip message"
  - "test.setTimeout(2 * 60 * 60 * 1000) overrides playwright.config.js 25-min default in the test file itself — no config change needed"
  - "Two separate test blocks: one runs the full pipeline (CI gate), one validates a pre-existing report (schema check without API cost)"
  - "cross-env installed via pnpm (project uses pnpm workspaces) for portability of test:visual:dry on Windows and Unix CI"
metrics:
  duration: "~5 minutes"
  completed_date: "2026-06-01"
  tasks_completed: 2
  tasks_total: 2
  files_created: 2
  files_modified: 2
---

# Phase 13 Plan 04: CI Gate Playwright Test and Runbook Summary

Wired the visual comparison pipeline into the Playwright test suite as a CI gate. Created `visual-comparison.test.ts` that runs the parallel orchestrator (`runParallelComparison`) and asserts pass_rate >= 70% and hard-fail rate <= 10%. Added `test:visual` and `test:visual:dry` npm scripts with `cross-env` for Windows/Unix portability. Documented the complete pipeline in `COMPARISON_RUN.md`.

## Tasks Completed

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | Install cross-env, create visual-comparison.test.ts, update package.json scripts | f718c15 | playwright.test/tests/visual-comparison.test.ts, playwright.test/package.json |
| 2 | Write COMPARISON_RUN.md runbook | bd77bc2 | playwright.test/COMPARISON_RUN.md |

## Artifacts Produced

### playwright.test/tests/visual-comparison.test.ts

- Imports `runParallelComparison` and `VisualComparisonReport` from `../scripts/parallel-visual-comparison.js` (ESM .js extension)
- `test.setTimeout(2 * 60 * 60 * 1000)` — 2-hour timeout overrides config's 25-minute default
- `test.describe.configure({ mode: 'serial' })` — prevents Playwright from running this alongside other tests concurrently
- **Test 1 (CI gate):** Checks `ANTHROPIC_API_KEY` and `VISUAL_COMPARISON_DRY_RUN`; calls `test.skip()` with informative message if key absent and not dry-run; calls `runParallelComparison(isDryRun)`; asserts `report.ci_gate_failed === false`; asserts `hardFailRate <= 0.10`; logs summary table
- **Test 2 (schema check):** Reads `visual-comparison-report.json` from disk; skips if not present; validates all required fields and types; spot-checks first 5 result entries for valid status values

### playwright.test/COMPARISON_RUN.md

Complete runbook with sections: Prerequisites, Full Pipeline Run, Dry Run, Running Individual Pipeline Steps, Output Files (table), CI Configuration (GitHub Actions snippet), Thresholds (table), Cost Estimate, Troubleshooting (4 scenarios).

### playwright.test/package.json (modified)

Added two scripts:
- `test:visual`: `playwright test tests/visual-comparison.test.ts`
- `test:visual:dry`: `cross-env VISUAL_COMPARISON_DRY_RUN=true playwright test tests/visual-comparison.test.ts`

Added `cross-env ^10.1.0` to devDependencies.

## Deviations from Plan

None — plan executed exactly as written. All code matches the plan's TypeScript exactly. cross-env installed via `pnpm add -D` (not `npm install`) as the project uses pnpm workspaces.

## Known Stubs

None. The test file is fully functional. The pipeline test will SKIP (not fail) when `ANTHROPIC_API_KEY` is absent — this is correct behavior per the plan requirements, not a stub.

## Threat Flags

No new security surface beyond the plan's threat model.

- T-13-12 (Information Disclosure — ANTHROPIC_API_KEY): Mitigated. Key read from `process.env` only; `test.skip()` called with message that does not include the key value; no logging of key.
- T-13-13 (CI gate spoofing): Accepted. `ci_gate_failed` read directly from orchestrator-produced JSON; no client-side bypass.
- T-13-14 (COMPARISON_RUN.md disclosure): Accepted. Runbook contains only public information; no secrets embedded.

## Self-Check: PASSED

- `playwright.test/tests/visual-comparison.test.ts` exists: FOUND
- `playwright.test/COMPARISON_RUN.md` exists: FOUND
- visual-comparison.test.ts grep `runParallelComparison`: 2 matches (PASSED, >= 2)
- visual-comparison.test.ts grep `ci_gate_failed`: 3 matches (PASSED, >= 2)
- visual-comparison.test.ts grep `ANTHROPIC_API_KEY`: 2 matches (PASSED, >= 1)
- visual-comparison.test.ts grep `test.skip`: 2 matches (PASSED, >= 1)
- package.json grep `cross-env`: 2 matches (PASSED, >= 1)
- package.json grep `test:visual`: 2 matches (PASSED, test:visual + test:visual:dry)
- COMPARISON_RUN.md grep `ANTHROPIC_API_KEY`: 6 matches (PASSED, >= 3)
- COMPARISON_RUN.md grep `test:visual`: 6 matches (PASSED, >= 2)
- COMPARISON_RUN.md grep `Output Files`: 1 match (PASSED)
- COMPARISON_RUN.md grep `Thresholds`: 2 matches (PASSED)
- COMPARISON_RUN.md grep `Troubleshooting`: 1 match (PASSED)
- Commit f718c15 exists: CONFIRMED
- Commit bd77bc2 exists: CONFIRMED
