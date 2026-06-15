import * as fs from 'fs'
import * as path from 'path'
import { kimiCompare } from '../scripts/kimi-utils.js'

const DEMOS_TO_VERIFY = [
  'webgl_camera',
  'webgl_camera_array',
  'webgl_clipping',
  'webgl_clipping_advanced',
  'webgl_postprocessing',
  'webgl_postprocessing_advanced',
  'webgl_postprocessing_afterimage',
  'webgl_postprocessing_dof',
  'webgl_postprocessing_film',
  'webgl_shadow_contact',
  'webgl_shadowmap_pointlight',
  'webgl_shadows',
  'webgl_water'
]

async function verifyDemo(demoId: string): Promise<{ before: number | null; after: number; status: string }> {
  const portedPath = path.join('screenshots', 'ported', `${demoId}.png`)
  const refPath = path.join('screenshots', 'reference', `${demoId}.png`)
  const fixResultPath = path.join('test-results', 'fix-results', `${demoId}.json`)

  // Read existing fix result to get before_score
  const fixResult = JSON.parse(fs.readFileSync(fixResultPath, 'utf-8'))
  const beforeScore = fixResult.before_score ?? null

  console.log(`\n[${demoId}] Running Kimi comparison...`)
  console.log(`  Ported: ${portedPath}`)
  console.log(`  Reference: ${refPath}`)

  // Run Kimi comparison
  const verdict = await kimiCompare(portedPath, refPath)

  if (!verdict) {
    console.warn(`  ⚠ Kimi returned null (truncated response)`)
    return { before: beforeScore, after: 0, status: 'inconclusive' }
  }

  const afterScore = verdict.similarity_score
  const status = afterScore >= 0.7 ? 'pass' : 'fail'

  console.log(`  ✓ Similarity: ${afterScore.toFixed(3)} (${verdict.verdict})`)
  console.log(`  Status: ${status.toUpperCase()}`)

  // Update fix result JSON
  fixResult.after_score = afterScore
  fixResult.status = status
  fixResult.kimi_verdict = verdict.verdict
  fixResult.kimi_reasoning = verdict.reasoning
  fixResult.kimi_key_differences = verdict.key_differences
  fixResult.verification_timestamp = new Date().toISOString()

  fs.writeFileSync(fixResultPath, JSON.stringify(fixResult, null, 2), 'utf-8')
  console.log(`  Updated: ${fixResultPath}`)

  return { before: beforeScore, after: afterScore, status }
}

async function main() {
  if (!process.env.KIMI_API_KEY) {
    console.error('ERROR: KIMI_API_KEY environment variable is not set')
    console.error('Set it with: export KIMI_API_KEY="sk-PJY0EAZv6qwFy38t88ZrCtQ4573z8UctcP5QdqkdwNNtTFDh"')
    process.exit(1)
  }

  console.log('=== Verifying 13 Fixed Demos ===')
  console.log('Kimi API Key detected (value not shown)')
  console.log(`Demos: ${DEMOS_TO_VERIFY.join(', ')}`)
  console.log('')

  const results: Array<{ demo: string; before: number | null; after: number; status: string }> = []

  for (const demoId of DEMOS_TO_VERIFY) {
    try {
      const result = await verifyDemo(demoId)
      results.push({ demo: demoId, ...result })
    } catch (err: any) {
      console.error(`  ✗ Error: ${err.message}`)
      results.push({ demo: demoId, before: null, after: 0, status: 'error' })
    }
  }

  console.log('\n=== Verification Summary ===')
  console.log('Demo                          Before    After     Status')
  console.log('─────────────────────────────────────────────────────────')

  let passCount = 0
  let failCount = 0
  let errorCount = 0

  for (const r of results) {
    const beforeStr = r.before !== null ? r.before.toFixed(3) : 'N/A'
    const afterStr = r.after.toFixed(3)
    console.log(`${r.demo.padEnd(30)} ${beforeStr.padStart(8)} ${afterStr.padStart(8)} ${r.status.toUpperCase()}`)

    if (r.status === 'pass') passCount++
    else if (r.status === 'fail') failCount++
    else errorCount++
  }

  console.log('─────────────────────────────────────────────────────────')
  console.log(`Total: ${results.length} | Pass: ${passCount} | Fail: ${failCount} | Error: ${errorCount}`)
  console.log('')

  // Write summary JSON
  const summaryPath = 'test-results/fix-results/verification-summary.json'
  const summary = {
    verification_timestamp: new Date().toISOString(),
    total_demos: results.length,
    pass_count: passCount,
    fail_count: failCount,
    error_count: errorCount,
    results: results
  }
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf-8')
  console.log(`Summary written to: ${summaryPath}`)
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})