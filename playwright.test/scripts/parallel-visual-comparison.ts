import { spawn } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { ALL_DEMOS } from './demo-list.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = fs.existsSync(path.join(__dirname, '..', 'tsconfig.json')) ? path.join(__dirname, '..') : path.join(__dirname, '..', '..')

const PARTIAL_RESULTS_DIR = path.join(ROOT, 'test-results', 'partial-results')
const FINAL_REPORT_JSON = path.join(ROOT, 'test-results', 'visual-comparison-report.json')
const FINAL_REPORT_HTML = path.join(ROOT, 'test-results', 'visual-comparison-report.html')

const NUM_AGENTS = 5
const BATCH_SIZE = Math.ceil(ALL_DEMOS.length / NUM_AGENTS)
const PASS_THRESHOLD = 0.7

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DemoComparisonResult {
  id: string
  name: string
  status: 'pass' | 'fail' | 'warn' | 'no-reference' | 'reference-load-failed' | 'no-ported-screenshot' | 'error'
  similarity_score: number | null
  verdict: string | null
  reasoning: string | null
  key_differences: string[]
  ported_screenshot: string | null
  reference_screenshot: string | null
  agent_batch: number
}

export interface VisualComparisonReport {
  generated_at: string
  phase: 'full' | 'partial'
  total_demos: number
  comparable_demos: number
  passed: number
  warned: number
  failed: number
  no_reference: number
  errors: number
  pass_rate: number
  pass_threshold: number
  ci_gate_failed: boolean
  results: DemoComparisonResult[]
}

// ─── Spawn one agent as a separate OS process ─────────────────────────────────

function spawnAgent(batchIndex: number, isDryRun: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    const args = [
      'tsx',
      'scripts/agent-batch-worker.ts',
      `--batch-index=${batchIndex}`,
      `--batch-size=${BATCH_SIZE}`,
    ]
    if (isDryRun) args.push('--dry-run')

    // Each call to spawnAgent creates a NEW OS process — its own Node.js VM and memory.
    // This is true OS-level parallelism, not in-process function calls.
    const proc = spawn('npx', args, {
      shell: true,  // required on Windows to resolve npx through PATH
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env },
      cwd: ROOT
    })

    proc.stdout.on('data', (chunk: Buffer) => {
      process.stdout.write(`[Agent ${batchIndex}] ${chunk}`)
    })
    proc.stderr.on('data', (chunk: Buffer) => {
      process.stderr.write(`[Agent ${batchIndex}] ${chunk}`)
    })

    proc.on('exit', (code: number | null) => {
      if (code === 0) {
        resolve()
      } else {
        // Non-zero exit: log but resolve (don't fail the orchestrator — partial results may still exist)
        console.error(`[Orchestrator] Agent ${batchIndex} exited with code ${code}`)
        resolve()  // continue merging whatever partial results were written
      }
    })

    proc.on('error', (err: Error) => {
      console.error(`[Orchestrator] Failed to spawn agent ${batchIndex}: ${err.message}`)
      resolve()  // continue with remaining agents
    })
  })
}

// ─── Merge partial results into final report ──────────────────────────────────

function mergePartialResults(): VisualComparisonReport {
  const allResults: DemoComparisonResult[] = []

  for (let i = 0; i < NUM_AGENTS; i++) {
    const partialPath = path.join(PARTIAL_RESULTS_DIR, `partial-${i}.json`)
    if (!fs.existsSync(partialPath)) {
      console.warn(`[Orchestrator] Warning: partial-${i}.json not found — agent ${i} may have failed`)
      continue
    }
    const partial = JSON.parse(fs.readFileSync(partialPath, 'utf-8'))
    for (const r of partial.results) {
      let status: DemoComparisonResult['status']
      if (!r.hasPortedScreenshot) {
        status = 'no-ported-screenshot'
      } else if (r.referenceStatus === 'no-reference' || r.referenceStatus === 'http-404') {
        status = 'no-reference'
      } else if (r.referenceStatus === 'reference-load-failed') {
        status = 'reference-load-failed'
      } else if (r.error) {
        status = 'error'
      } else if (r.verdict) {
        const score = r.verdict.similarity_score
        if (score >= PASS_THRESHOLD) status = 'pass'
        else if (score >= 0.5) status = 'warn'
        else status = 'fail'
      } else {
        status = 'error'
      }

      allResults.push({
        id: r.id,
        name: r.name,
        status,
        similarity_score: r.verdict?.similarity_score ?? null,
        verdict: r.verdict?.verdict ?? null,
        reasoning: r.verdict?.reasoning ?? null,
        key_differences: r.verdict?.key_differences ?? [],
        ported_screenshot: r.portedScreenshot,
        reference_screenshot: r.referenceScreenshot,
        agent_batch: r.agentBatch
      })
    }
  }

  allResults.sort((a, b) => a.id.localeCompare(b.id))

  // comparable = demos where both ported and reference screenshots exist (excludable: no-reference,
  // no-ported-screenshot, reference-load-failed). Only these count toward the pass rate.
  const comparable = allResults.filter(r =>
    r.status !== 'no-reference' &&
    r.status !== 'no-ported-screenshot' &&
    r.status !== 'reference-load-failed'
  )
  const passed = allResults.filter(r => r.status === 'pass').length
  const warned = allResults.filter(r => r.status === 'warn').length
  const failed = allResults.filter(r => r.status === 'fail').length
  const passRate = comparable.length > 0 ? passed / comparable.length : 0

  return {
    generated_at: new Date().toISOString(),
    phase: 'full',
    total_demos: allResults.length,
    comparable_demos: comparable.length,
    passed,
    warned,
    failed,
    no_reference: allResults.filter(r => r.status === 'no-reference').length,
    errors: allResults.filter(r => r.status === 'error' || r.status === 'reference-load-failed').length,
    pass_rate: passRate,
    pass_threshold: PASS_THRESHOLD,
    ci_gate_failed: passRate < PASS_THRESHOLD,
    results: allResults
  }
}

// ─── HTML report generator ────────────────────────────────────────────────────

function generateHtmlReport(report: VisualComparisonReport): string {
  const statusColor: Record<string, string> = {
    pass: '#22c55e', warn: '#f59e0b', fail: '#ef4444',
    'no-reference': '#94a3b8', 'reference-load-failed': '#f97316',
    'no-ported-screenshot': '#a855f7', error: '#dc2626'
  }

  const rows = report.results.map(r => {
    const color = statusColor[r.status] ?? '#999'
    const portedImg = r.ported_screenshot
      ? `<img src="../${r.ported_screenshot}" width="200" style="border:1px solid #ccc" />`
      : '<span style="color:#999">no screenshot</span>'
    const refImg = r.reference_screenshot
      ? `<img src="../${r.reference_screenshot}" width="200" style="border:1px solid #ccc" />`
      : '<span style="color:#999">no screenshot</span>'
    const score = r.similarity_score !== null ? r.similarity_score.toFixed(2) : 'N/A'
    return `<tr data-status="${r.status}">
      <td><code>${r.id}</code></td>
      <td><span style="background:${color};color:#fff;padding:2px 6px;border-radius:3px">${r.status}</span></td>
      <td>${score}</td>
      <td style="max-width:300px;font-size:0.85em">${r.reasoning ?? ''}</td>
      <td>${portedImg}</td>
      <td>${refImg}</td>
    </tr>`
  }).join('\n')

  const ciStatus = report.ci_gate_failed
    ? '<span style="color:#ef4444;font-weight:bold">FAILED</span>'
    : '<span style="color:#22c55e;font-weight:bold">PASSED</span>'

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Visual Comparison Report - Phase 13</title>
<style>
  body { font-family: sans-serif; margin: 20px; background: #f8fafc; }
  h1 { color: #1e293b; }
  .summary { background: #fff; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; margin-bottom: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; }
  .metric { text-align: center; }
  .metric .value { font-size: 2em; font-weight: bold; }
  .metric .label { font-size: 0.8em; color: #64748b; }
  .filters { margin-bottom: 12px; }
  .filters button { margin-right: 6px; padding: 4px 10px; cursor: pointer; border: 1px solid #cbd5e1; border-radius: 4px; background: #fff; }
  .filters button.active { background: #3b82f6; color: #fff; border-color: #3b82f6; }
  table { border-collapse: collapse; width: 100%; background: #fff; }
  th, td { border: 1px solid #e2e8f0; padding: 8px; text-align: left; vertical-align: top; }
  th { background: #f1f5f9; }
  tr[data-status="pass"] { background: #f0fdf4; }
  tr[data-status="fail"] { background: #fef2f2; }
  tr[data-status="warn"] { background: #fffbeb; }
  tr.hidden { display: none; }
</style>
</head>
<body>
<h1>Visual Comparison Report</h1>
<p>Generated: ${report.generated_at}</p>
<div class="summary">
  <div class="metric"><div class="value">${report.total_demos}</div><div class="label">Total Demos</div></div>
  <div class="metric"><div class="value">${report.comparable_demos}</div><div class="label">Comparable</div></div>
  <div class="metric"><div class="value" style="color:#22c55e">${report.passed}</div><div class="label">Passed</div></div>
  <div class="metric"><div class="value" style="color:#f59e0b">${report.warned}</div><div class="label">Warned</div></div>
  <div class="metric"><div class="value" style="color:#ef4444">${report.failed}</div><div class="label">Failed</div></div>
  <div class="metric"><div class="value">${(report.pass_rate * 100).toFixed(1)}%</div><div class="label">Pass Rate</div></div>
  <div class="metric"><div class="value">${ciStatus}</div><div class="label">CI Gate</div></div>
</div>
<div class="filters">
  <button onclick="filterRows('all')" class="active">All</button>
  <button onclick="filterRows('pass')">Pass</button>
  <button onclick="filterRows('warn')">Warn</button>
  <button onclick="filterRows('fail')">Fail</button>
  <button onclick="filterRows('no-reference')">No Reference</button>
</div>
<table>
<thead><tr><th>Demo ID</th><th>Status</th><th>Score</th><th>Reasoning</th><th>Ported</th><th>Reference</th></tr></thead>
<tbody id="tbody">
${rows}
</tbody>
</table>
<script>
function filterRows(status) {
  document.querySelectorAll('#tbody tr').forEach(function(tr) {
    tr.classList.toggle('hidden', status !== 'all' && tr.dataset.status !== status);
  });
  document.querySelectorAll('.filters button').forEach(function(btn) {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === status || (status === 'all' && btn.textContent === 'All'));
  });
}
</script>
</body>
</html>`
}

// ─── Main orchestrator entry point ────────────────────────────────────────────

export async function runParallelComparison(isDryRun = false): Promise<VisualComparisonReport> {
  const effectiveDryRun = isDryRun || process.env.VISUAL_COMPARISON_DRY_RUN === 'true'
  isDryRun = effectiveDryRun
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!isDryRun && !apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set.')
  }

  console.log(`[Orchestrator] Splitting ${ALL_DEMOS.length} demos into ${NUM_AGENTS} agent processes (batch-size: ${BATCH_SIZE})`)
  fs.mkdirSync(PARTIAL_RESULTS_DIR, { recursive: true })

  // Fan out: launch all 5 agents as SEPARATE OS PROCESSES via child_process.spawn.
  // Each process is an independent Node.js instance — own memory, own event loop, own Playwright browser.
  // All 5 processes run concurrently. Promise.all waits for all 5 exit events.
  console.log(`[Orchestrator] Launching ${NUM_AGENTS} OS processes via child_process.spawn...`)
  await Promise.all(
    Array.from({ length: NUM_AGENTS }, (_, i) => spawnAgent(i, isDryRun))
  )
  console.log(`[Orchestrator] All ${NUM_AGENTS} processes completed.`)

  // Read partial results from disk (written by each process before it exited)
  const report = mergePartialResults()

  fs.writeFileSync(FINAL_REPORT_JSON, JSON.stringify(report, null, 2))
  console.log(`[Orchestrator] JSON report: ${FINAL_REPORT_JSON}`)

  const html = generateHtmlReport(report)
  fs.writeFileSync(FINAL_REPORT_HTML, html)
  console.log(`[Orchestrator] HTML report: ${FINAL_REPORT_HTML}`)

  console.log(`\n=== PARALLEL COMPARISON SUMMARY ===`)
  console.log(`Total demos: ${report.total_demos}`)
  console.log(`Comparable:  ${report.comparable_demos}`)
  console.log(`Passed:      ${report.passed}`)
  console.log(`Warned:      ${report.warned}`)
  console.log(`Failed:      ${report.failed}`)
  console.log(`Pass rate:   ${(report.pass_rate * 100).toFixed(1)}%`)
  console.log(`CI gate:     ${report.ci_gate_failed ? 'FAILED' : 'PASSED'}`)

  return report
}

async function main() {
  const isDryRun = process.argv.includes('--dry-run') || process.env.VISUAL_COMPARISON_DRY_RUN === 'true'
  if (isDryRun) console.log('[Orchestrator] DRY RUN: agents will use mock verdicts.')
  const report = await runParallelComparison(isDryRun)
  process.exit(report.ci_gate_failed ? 1 : 0)
}

// Only run as CLI when executed directly, not when imported as a module by Playwright
import { pathToFileURL } from 'url'
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(err => { console.error(err); process.exit(1) })
}
