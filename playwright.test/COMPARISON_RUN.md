# Visual Comparison Pipeline - Runbook

Phase 13 visual regression testing compares ported demo canvas output against
threejs.org reference screenshots using multimodal AI vision.

## Two Comparison Paths

### Path A — Claude Code (no API key required)

When running inside Claude Code, the AI agent compares images directly using
its built-in multimodal vision. No `ANTHROPIC_API_KEY` needed.

  Ask Claude Code: "Compare the ported and reference screenshots for demo X"
  Or:              "Run visual comparison for all demos"

Claude Code reads both PNG files and returns a Verdict with similarity_score,
reasoning, and key_differences. Results can be written to
test-results/visual-comparison-report.json on request.

### Path B — CI / Automated (ANTHROPIC_API_KEY required)

Five separate OS processes (true parallel agents) run concurrently via
child_process.spawn, each handling ~40 demos, submitting to the Anthropic
Message Batches API.

## Prerequisites (Path B only)

1. Vite dev server running at http://localhost:5194:
   cd ../three-demo && pnpm run dev

2. ANTHROPIC_API_KEY environment variable set:
   PowerShell:  $env:ANTHROPIC_API_KEY="sk-ant-..."
   Unix/CI:     export ANTHROPIC_API_KEY="sk-ant-..."

3. Dependencies installed in playwright.test/:
   npm install

4. Playwright Chromium browser installed:
   npx playwright install chromium

## Full Pipeline Run

Runs 5 parallel OS agent processes. Completes in approximately 75-90 minutes.

  # From playwright.test/ directory:
  npm run test:visual

What happens:
  1. Task 0 (Wave 1): Existing demo-verification.test.ts refreshes all ported screenshots
  2. Task 2 (Wave 1): reference-screenshots.test.ts probes threejs.org via HTTP HEAD,
     captures reference screenshots (5 Playwright workers, --use-angle=gl)
  3. Task 1 (Wave 3): parallel-visual-comparison.ts spawns 5 OS processes:
     - Process 0: handles demos 0-39, captures reference screenshots, submits partial batch
     - Process 1: handles demos 40-79, captures reference screenshots, submits partial batch
     - Process 2: handles demos 80-119, captures reference screenshots, submits partial batch
     - Process 3: handles demos 120-159, captures reference screenshots, submits partial batch
     - Process 4: handles demos 160+, captures reference screenshots, submits partial batch
  4. Each process submits ~40 image pairs to Anthropic Message Batches API
  5. Each process polls every 30s until its batch completes (~30-60 min)
  6. Orchestrator reads 5 partial-result JSON files and merges into visual-comparison-report.json
  7. HTML report written to test-results/visual-comparison-report.html
  8. Playwright test asserts pass rate >= 70% and hard-fail rate <= 10%

## Dry Run (No API Cost)

Tests the full pipeline without calling Anthropic - uses mock verdicts (score: 0.85).

  # PowerShell:
  $env:VISUAL_COMPARISON_DRY_RUN="true"
  npm run test:visual

  # Unix:
  VISUAL_COMPARISON_DRY_RUN=true npm run test:visual

  # Cross-platform convenience script (uses cross-env):
  npm run test:visual:dry

## Running Individual Pipeline Steps

Step 1 - Refresh ported demo screenshots:
  npx playwright test tests/demo-verification.test.ts --project=chromium
  Output: test-results/screenshots/*.png

Step 2 - Capture reference screenshots only (5 workers):
  npx playwright test tests/reference-screenshots.test.ts --project=chromium --workers=5
  Output: test-results/reference-screenshots/*.png
          test-results/reference-manifest.json

Step 3 - Run LLM comparison (sequential, single machine):
  # Requires reference-manifest.json from Step 2
  npx tsx scripts/compare-all.ts
  # With dry-run:
  npx tsx scripts/compare-all.ts --dry-run --limit=5
  Output: test-results/llm-batch-results.json

Step 4 - Run full parallel orchestrator (5 OS processes):
  npx tsx scripts/parallel-visual-comparison.ts
  # With dry-run:
  npx tsx scripts/parallel-visual-comparison.ts --dry-run
  Output: test-results/visual-comparison-report.json
          test-results/visual-comparison-report.html

Step 5 - Validate existing report (no pipeline re-run):
  npx playwright test tests/visual-comparison.test.ts --grep "expected structure"

## Output Files

| File | Description |
|------|-------------|
| test-results/screenshots/{id}.png | Ported demo canvas screenshots (refreshed each run) |
| test-results/reference-manifest.json | Per-demo has_reference status from probe step |
| test-results/reference-screenshots/{id}.png | threejs.org canvas screenshots |
| test-results/resized-screenshots/ | 800x600 resized pairs before API submission |
| test-results/partial-results/partial-{n}.json | Per-agent intermediate results (5 files) |
| test-results/llm-batch-results.json | Raw Anthropic batch verdicts (sequential run only) |
| test-results/visual-comparison-report.json | Merged final report |
| test-results/visual-comparison-report.html | Human-readable HTML report with screenshots |

## CI Configuration

In GitHub Actions or similar CI:

  - name: Visual regression test
    env:
      ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
    run: |
      cd playwright.test
      npm run test:visual
    timeout-minutes: 120

## Thresholds

| Threshold | Value | Description |
|-----------|-------|-------------|
| Pass score | >= 0.70 | Demo is visually similar to reference |
| Warn score | 0.50-0.69 | Noticeable differences; needs human review |
| Fail score | < 0.50 | Fundamentally different output |
| CI pass rate | >= 70% | Fraction of comparable demos that pass |
| Hard fail rate | <= 10% | Fraction of comparable demos that hard-fail |

Thresholds are defined in scripts/parallel-visual-comparison.ts (PASS_THRESHOLD = 0.7).
Adjust after the first empirical run.

## Cost Estimate

~$0.63 per full run (200 demo pairs at claude-sonnet-4-6 Batch API pricing, 50% batch discount).
Dry runs cost nothing.

## Troubleshooting

WebGL canvas appears blank in screenshots:
  The --use-angle=gl flag requires GPU access in headless Chrome.
  On machines without GPU, change the launch arg in:
  - tests/reference-screenshots.test.ts (launchOptions.args)
  - scripts/agent-batch-worker.ts (chromium.launch args)
  From: --use-angle=gl
  To:   --use-angle=swiftshader

reference-manifest.json not found:
  Run reference-screenshots.test.ts first (Step 2 above).

ANTHROPIC_API_KEY not set:
  For Path B: visual-comparison.test.ts will SKIP (not fail). Set the key or
  use dry-run mode (npm run test:visual:dry).
  For Path A (Claude Code): no API key needed — ask Claude Code to compare
  screenshots directly using its built-in multimodal vision.

Batch processing takes longer than expected:
  Anthropic batch processing time is variable (15-90 minutes for 40 items per agent).
  The script polls every 30 seconds and waits indefinitely - no timeout.
  The Playwright test timeout is set to 2 hours.

Agent process exits with non-zero code:
  The orchestrator logs [Agent N] output. Check that output for the specific error.
  Common causes: ANTHROPIC_API_KEY not set in child process env (env is inherited from
  orchestrator process), Playwright browser not installed (run: npx playwright install chromium).
