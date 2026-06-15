/**
 * fix-orchestrator.ts
 *
 * Reads kimi-comparison-report.json, identifies failed demos, spawns fix agents
 * (Claude Code sub-agents) to repair them, collects re-scored results, writes
 * kimi-comparison-report-fixed.json.
 *
 * CLI flags:
 *   --report=PATH        Path to comparison report (default: test-results/kimi-comparison-report.json)
 *   --dry-run            Print fix plan without executing agents
 *   --limit=N            Fix at most N demos (for testing)
 *   --min-score=F        Only fix demos with score >= F (default 0.3; below this flagged for human review)
 *   --concurrency=N      Parallel fix agents (default 3; max 5)
 *   --collect-results    Read fix-results/*.json and write kimi-comparison-report-fixed.json
 *
 * Security invariants:
 *   - All demo IDs validated with validateDemoId() before use in file paths
 *   - Fix instruction files written to test-results/fix-instructions/{demoId}.md
 *   - No ANTHROPIC_API_KEY references; no Playwright imports
 *   - Fix agents spawned as separate Claude Code processes (child_process.spawn)
 */

import { spawn } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { validateDemoId } from './kimi-utils.js'

// ─── Path anchors ─────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = fs.existsSync(path.join(__dirname, '..', 'tsconfig.json'))
  ? path.join(__dirname, '..')
  : path.join(__dirname, '..', '..')

// ─── Output paths ─────────────────────────────────────────────────────────────

const FIX_INSTRUCTIONS_DIR = path.join(ROOT, 'test-results', 'fix-instructions')
const FIX_RESULTS_DIR = path.join(ROOT, 'test-results', 'fix-results')
const FINAL_REPORT_JSON = path.join(ROOT, 'test-results', 'kimi-comparison-report.json')
const FIXED_REPORT_JSON = path.join(ROOT, 'test-results', 'kimi-comparison-report-fixed.json')
const REGISTRY_PATH = path.join(ROOT, '..', 'demo', 'src', 'registry.ts')

// ─── Types ────────────────────────────────────────────────────────────────────

interface DemoComparisonResult {
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

interface KimiComparisonReport {
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

interface FixResult {
  id: string
  before_score: number
  after_score: number
  status: 'improved' | 'unchanged' | 'regressed'
  change_description: string
}

// ─── CLI arg parsing ──────────────────────────────────────────────────────────

function parseArgs() {
  const argv = process.argv.slice(2)

  const isDryRun = argv.includes('--dry-run')
  const isCollectResults = argv.includes('--collect-results')

  const reportArg = argv.find(a => a.startsWith('--report='))
  const reportPath = reportArg ? reportArg.split('=')[1] : FINAL_REPORT_JSON

  const limitArg = argv.find(a => a.startsWith('--limit='))
  const limit = limitArg ? parseInt(limitArg.split('=')[1], 10) : null

  const minScoreArg = argv.find(a => a.startsWith('--min-score='))
  const minScore = minScoreArg ? parseFloat(minScoreArg.split('=')[1]) : 0.3

  const concurrencyArg = argv.find(a => a.startsWith('--concurrency='))
  const concurrency = concurrencyArg ? Math.min(5, Math.max(1, parseInt(concurrencyArg.split('=')[1], 10))) : 3

  return { isDryRun, isCollectResults, reportPath, limit, minScore, concurrency }
}

// ─── Registry lookup ──────────────────────────────────────────────────────────

/**
 * Parse registry.ts and find the component name for a demo ID.
 * Returns null if not found.
 */
function findComponentName(demoId: string): string | null {
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error('[fix-orchestrator] Registry not found:', REGISTRY_PATH)
    return null
  }

  const registryContent = fs.readFileSync(REGISTRY_PATH, 'utf-8')

  // Match: { id: 'demo_id', name: '...', category: '...', component: () => import('./ComponentName') }
  const re = new RegExp(`\\{\\s*id:\\s*['"]${demoId}['"]\\s*,.*?component:\\s*\\(\\)\\s*=>\\s*import\\(['"]\\.\\/([^'"]+)['"]\\)`, 's')
  const match = registryContent.match(re)

  if (!match || !match[1]) {
    return null
  }

  return match[1] // ComponentName (without .tsx extension)
}

// ─── Fix instruction generation ───────────────────────────────────────────────

function generateFixInstruction(demo: DemoComparisonResult, componentPath: string, waitMs: number): string {
  const keyDiffsList = (demo.key_differences ?? [])
    .map(d => `- ${d}`)
    .join('\n')

  return `# Fix Agent: ${demo.id}

## Demo Source
File: demo/src/${componentPath}.tsx

## Kimi Verdict (what to fix)
Score: ${demo.similarity_score ?? 0}
Reasoning: ${demo.reasoning ?? 'No reasoning provided'}
Key differences:
${keyDiffsList || '- No key differences listed'}

## Instructions
1. Load skills: /woby-dev /woby /dom /dom-customelement
2. Read woby full documentation
3. Read all files in woby/demo/playground/** (test specs and successful samples)
4. Read ../wui for web component UI props wiring patterns
5. Read demo/src/${componentPath}.tsx
6. Apply the MINIMAL fix to match the threejs.org reference rendering.
   Focus on the key_differences listed above.
   Common issues: $vs$$ misuse, auto-render conflict, missing dispose, wrong material props.
   NEVER use "as any". Use proper Woby reactive types.
7. After editing, re-capture the ported screenshot using Chrome DevTools MCP:
   Profile: profile-qmdj-6 (port 9227)
   URL: http://localhost:5175/#${demo.id}
   Wait: ${waitMs}ms
   Screenshot path: playwright.test/screenshots/ported/${demo.id}.png (overwrite)
   MCP close_page after capture
8. Re-run Kimi comparison: kimiCompare('screenshots/ported/${demo.id}.png', 'screenshots/reference/${demo.id}.png')
9. Report: final score, improvement delta, what was changed.
   Write result to: test-results/fix-results/${demo.id}.json
   Format: { id, before_score, after_score, status, change_description }
`
}

// ─── Spawn one fix agent as a separate Claude Code process ────────────────────

function spawnFixAgent(demoId: string, instructionPath: string): Promise<void> {
  return new Promise<void>((resolve) => {
    const instruction = fs.readFileSync(instructionPath, 'utf-8')

    // Spawn claude CLI with the fix instruction as prompt
    const proc = spawn('claude', ['--dangerously-skip-permissions', instruction], {
      shell: true,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env },
      cwd: path.join(ROOT, '..')
    })

    proc.stdout.on('data', (d: Buffer) => process.stdout.write(`[fix-${demoId}] ${d}`))
    proc.stderr.on('data', (d: Buffer) => process.stderr.write(`[fix-${demoId}] ${d}`))

    proc.on('exit', (code: number | null) => {
      if (code === 0) {
        resolve()
      } else {
        console.error(`[fix-${demoId}] Agent exited with code ${code}`)
        resolve() // Continue even if one agent fails
      }
    })

    proc.on('error', (err: Error) => {
      console.error(`[fix-${demoId}] Failed to spawn agent:`, err.message)
      resolve()
    })
  })
}

// ─── Concurrency-limited execution ────────────────────────────────────────────

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<void>
): Promise<void> {
  const queue = [...items]
  const active: Promise<void>[] = []

  while (queue.length > 0 || active.length > 0) {
    while (active.length < limit && queue.length > 0) {
      const item = queue.shift()!
      const p = fn(item).then(() => {
        const idx = active.indexOf(p)
        if (idx >= 0) active.splice(idx, 1)
      })
      active.push(p)
    }
    if (active.length > 0) await Promise.race(active)
  }
}

// ─── Collect results mode ──────────────────────────────────────────────────────

function collectResults(originalReport: KimiComparisonReport): void {
  if (!fs.existsSync(FIX_RESULTS_DIR)) {
    console.error('[fix-orchestrator] No fix-results directory found')
    return
  }

  const fixResults: Map<string, FixResult> = new Map()

  for (const file of fs.readdirSync(FIX_RESULTS_DIR)) {
    if (!file.endsWith('.json')) continue
    const demoId = file.replace('.json', '')

    if (!validateDemoId(demoId)) {
      console.warn(`[fix-orchestrator] Invalid demo ID in fix-results: ${file}`)
      continue
    }

    try {
      const result: FixResult = JSON.parse(fs.readFileSync(path.join(FIX_RESULTS_DIR, file), 'utf-8'))
      fixResults.set(demoId, result)
    } catch (e) {
      console.error(`[fix-orchestrator] Failed to parse ${file}:`, e)
    }
  }

  // Merge with original report
  const updatedResults = originalReport.results.map(r => {
    const fixResult = fixResults.get(r.id)
    if (!fixResult) return r

    // Update the similarity score with the after_score
    return {
      ...r,
      similarity_score: fixResult.after_score,
      status: fixResult.after_score >= 0.7 ? 'pass' : fixResult.after_score >= 0.5 ? 'warn' : 'fail',
      verdict: fixResult.after_score >= 0.7 ? 'pass' : 'fail'
    }
  })

  // Recalculate stats
  const comparable = updatedResults.filter(r =>
    r.status !== 'no-reference' &&
    r.status !== 'no-ported-screenshot' &&
    r.status !== 'reference-load-failed'
  )

  const passed = updatedResults.filter(r => r.status === 'pass').length
  const warned = updatedResults.filter(r => r.status === 'warn').length
  const failed = updatedResults.filter(r => r.status === 'fail').length
  const noReference = updatedResults.filter(r => r.status === 'no-reference').length
  const errors = updatedResults.filter(r =>
    r.status === 'error' || r.status === 'reference-load-failed' || r.status === 'no-ported-screenshot'
  ).length
  const passRate = comparable.length > 0 ? passed / comparable.length : 0

  const fixedReport: KimiComparisonReport = {
    generated_at: new Date().toISOString(),
    phase: 'full',
    total_demos: updatedResults.length,
    comparable_demos: comparable.length,
    passed,
    warned,
    failed,
    no_reference: noReference,
    errors,
    pass_rate: passRate,
    pass_threshold: originalReport.pass_threshold,
    ci_gate_failed: failed > 0,
    results: updatedResults
  }

  fs.writeFileSync(FIXED_REPORT_JSON, JSON.stringify(fixedReport, null, 2))
  console.log(`[fix-orchestrator] Fixed report: ${FIXED_REPORT_JSON}`)

  // Print improvement summary
  const improved = Array.from(fixResults.values()).filter(r => r.after_score > r.before_score).length
  const nowPassing = Array.from(fixResults.values()).filter(r => r.after_score >= 0.7).length

  console.log(`\n=== FIX RESULTS SUMMARY ===`)
  console.log(`Demos fixed:     ${fixResults.size}`)
  console.log(`Improved:        ${improved}`)
  console.log(`Now passing:     ${nowPassing}`)
  console.log(`Original pass:   ${originalReport.passed}`)
  console.log(`New pass:        ${passed}`)
  console.log(`Improvement:     +${passed - originalReport.passed} demos`)
}

// ─── Main orchestrator entry point ────────────────────────────────────────────

async function main(): Promise<void> {
  const { isDryRun, isCollectResults, reportPath, limit, minScore, concurrency } = parseArgs()

  // ── Ensure output directories exist ────────────────────────────────────────
  fs.mkdirSync(FIX_INSTRUCTIONS_DIR, { recursive: true })
  fs.mkdirSync(FIX_RESULTS_DIR, { recursive: true })
  fs.mkdirSync(path.join(ROOT, 'test-results'), { recursive: true })

  // ── Load comparison report ──────────────────────────────────────────────────
  if (!fs.existsSync(reportPath)) {
    console.error(`[fix-orchestrator] Report not found: ${reportPath}`)
    console.error('[fix-orchestrator] Run kimi-orchestrator first to generate comparison report')
    process.exit(1)
  }

  let report: KimiComparisonReport
  try {
    report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'))
  } catch (e) {
    console.error('[fix-orchestrator] Failed to parse report:', e)
    process.exit(1)
  }

  // ── Collect results mode ────────────────────────────────────────────────────
  if (isCollectResults) {
    console.log('[fix-orchestrator] Collecting fix results...')
    collectResults(report)
    process.exit(0)
  }

  // ── Filter failed demos ──────────────────────────────────────────────────────
  const failedDemos = report.results.filter(r => r.status === 'fail' || r.status === 'warn')

  if (failedDemos.length === 0) {
    console.log('[fix-orchestrator] No failed demos to fix. All demos passed!')
    process.exit(0)
  }

  console.log(`[fix-orchestrator] Found ${failedDemos.length} failed/warned demos`)

  // ── Autonomy grouping ────────────────────────────────────────────────────────
  const autoFix = failedDemos.filter(r => (r.similarity_score ?? 0) >= minScore)
  const humanReview = failedDemos.filter(r => (r.similarity_score ?? 0) < minScore)

  if (humanReview.length > 0) {
    console.log(`\n[fix-orchestrator] ${humanReview.length} demos require HUMAN REVIEW (score < ${minScore}):`)
    humanReview.forEach(r => console.log(`  - ${r.id} (score: ${r.similarity_score}, verdict: ${r.verdict})`))
    console.log()
  }

  console.log(`[fix-orchestrator] Auto-fixing ${autoFix.length} demos (score >= ${minScore})`)

  // Apply --limit
  const toFix = limit !== null && limit > 0 ? autoFix.slice(0, limit) : autoFix

  if (toFix.length === 0) {
    console.log('[fix-orchestrator] No demos to fix after filtering. Exiting.')
    process.exit(0)
  }

  console.log(`[fix-orchestrator] Will fix ${toFix.length} demos`)

  // ── Dry run: print plan and exit ─────────────────────────────────────────────
  if (isDryRun) {
    console.log('\n[fix-orchestrator] DRY RUN — would fix these demos:')
    toFix.forEach((d, i) => {
      const componentName = findComponentName(d.id) ?? 'NOT FOUND'
      console.log(`  ${i + 1}. ${d.id} -> demo/src/${componentName}.tsx (score: ${d.similarity_score})`)
    })
    console.log('\n[fix-orchestrator] Run without --dry-run to spawn fix agents')
    process.exit(0)
  }

  // ── Write fix instruction files ──────────────────────────────────────────────
  const fixQueue: { demoId: string; instructionPath: string }[] = []

  for (const demo of toFix) {
    if (!validateDemoId(demo.id)) {
      console.error(`[fix-orchestrator] Invalid demo ID: ${demo.id}`)
      continue
    }

    const componentName = findComponentName(demo.id)
    if (!componentName) {
      console.error(`[fix-orchestrator] Demo not found in registry: ${demo.id}`)
      continue
    }

    const instructionPath = path.join(FIX_INSTRUCTIONS_DIR, `${demo.id}.md`)
    const waitMs = demo.id.startsWith('webgl_loader_') ? 12000 : 8000
    const instruction = generateFixInstruction(demo, componentName, waitMs)

    fs.writeFileSync(instructionPath, instruction)
    fixQueue.push({ demoId: demo.id, instructionPath })
  }

  console.log(`[fix-orchestrator] Wrote ${fixQueue.length} fix instruction files`)

  // ── Spawn fix agents ──────────────────────────────────────────────────────────
  console.log(`[fix-orchestrator] Spawning fix agents (concurrency=${concurrency})...`)

  await runWithConcurrency(fixQueue, concurrency, async ({ demoId, instructionPath }) => {
    await spawnFixAgent(demoId, instructionPath)
  })

  console.log(`[fix-orchestrator] All fix agents completed`)

  // ── Print next steps ──────────────────────────────────────────────────────────
  console.log(`\n[fix-orchestrator] Fix agents finished. Next steps:`)
  console.log(`  1. Review fix-results/ directory for individual results`)
  console.log(`  2. Run: npx tsx scripts/fix-orchestrator.ts --collect-results`)
  console.log(`  3. Check: test-results/kimi-comparison-report-fixed.json`)
}

main().catch(err => {
  console.error('[fix-orchestrator] Unhandled error', err)
  process.exit(1)
})
