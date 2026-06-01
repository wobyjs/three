import { test, expect } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { runParallelComparison, VisualComparisonReport } from '../scripts/parallel-visual-comparison.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.join(__dirname, '..')
const REPORT_PATH = path.join(ROOT, 'test-results', 'visual-comparison-report.json')

// Visual comparison is a long-running test — override the default 25-minute timeout.
// The full run takes ~75 min: screenshot capture + Anthropic batch processing (~60 min).
test.setTimeout(2 * 60 * 60 * 1000)

// Run serially — this test spawns 5 external Playwright browser processes internally
test.describe.configure({ mode: 'serial' })

test('Visual comparison pipeline completes and meets pass rate threshold', async () => {
  const isDryRun = process.env.VISUAL_COMPARISON_DRY_RUN === 'true'
  const apiKey = process.env.ANTHROPIC_API_KEY

  // Skip with informative message if API key is absent and not in dry-run mode.
  // Skip (not fail) — this test requires optional external API access.
  if (!isDryRun && !apiKey) {
    test.skip(true, 'ANTHROPIC_API_KEY is not set. Set the env var to run visual comparison, or use VISUAL_COMPARISON_DRY_RUN=true for a dry run.')
    return
  }

  // Run the parallel orchestrator (spawns 5 OS processes internally)
  const report = await runParallelComparison(isDryRun)

  // Verify report was written to disk by the orchestrator
  expect(fs.existsSync(REPORT_PATH)).toBe(true)

  // Verify report schema
  expect(report).toHaveProperty('generated_at')
  expect(report).toHaveProperty('total_demos')
  expect(report).toHaveProperty('comparable_demos')
  expect(report).toHaveProperty('pass_rate')
  expect(report).toHaveProperty('ci_gate_failed')
  expect(Array.isArray(report.results)).toBe(true)

  // CI gate: fail if pass_rate < 0.70 (pre-computed by orchestrator)
  expect(report.ci_gate_failed).toBe(false)

  // Additional gate: no more than 10% of comparable demos should hard-fail (score < 0.5)
  if (report.comparable_demos > 0) {
    const hardFailRate = report.failed / report.comparable_demos
    expect(hardFailRate).toBeLessThanOrEqual(0.10)
  }

  console.log('\n=== Visual Comparison CI Gate ===')
  console.log(`Total demos:      ${report.total_demos}`)
  console.log(`Comparable:       ${report.comparable_demos}`)
  console.log(`Passed (>=0.70):  ${report.passed}`)
  console.log(`Warned (0.5-0.7): ${report.warned}`)
  console.log(`Failed (<0.50):   ${report.failed}`)
  console.log(`Pass rate:        ${(report.pass_rate * 100).toFixed(1)}%`)
  console.log(`No reference:     ${report.no_reference}`)
  console.log(`HTML report:      ${path.join(ROOT, 'test-results', 'visual-comparison-report.html')}`)
})

test('Visual comparison report has expected structure', async () => {
  // Validates a previously generated report without re-running the pipeline.
  // Use this to validate CI artifacts or re-check a report without Anthropic API access.
  if (!fs.existsSync(REPORT_PATH)) {
    test.skip(true, `Report not found at ${REPORT_PATH}. Run the visual comparison pipeline first.`)
    return
  }

  const raw = fs.readFileSync(REPORT_PATH, 'utf-8')
  const report: VisualComparisonReport = JSON.parse(raw)

  expect(typeof report.generated_at).toBe('string')
  expect(typeof report.total_demos).toBe('number')
  expect(typeof report.comparable_demos).toBe('number')
  expect(typeof report.passed).toBe('number')
  expect(typeof report.failed).toBe('number')
  expect(typeof report.pass_rate).toBe('number')
  expect(report.pass_rate).toBeGreaterThanOrEqual(0)
  expect(report.pass_rate).toBeLessThanOrEqual(1)
  expect(typeof report.ci_gate_failed).toBe('boolean')
  expect(Array.isArray(report.results)).toBe(true)

  // Spot-check first 5 result entries
  for (const result of report.results.slice(0, 5)) {
    expect(typeof result.id).toBe('string')
    expect(typeof result.name).toBe('string')
    expect(['pass', 'fail', 'warn', 'no-reference', 'reference-load-failed', 'no-ported-screenshot', 'error'])
      .toContain(result.status)
  }
})
