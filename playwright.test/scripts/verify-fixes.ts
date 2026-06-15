/**
 * verify-fixes.ts
 *
 * Run Kimi comparison for the 3 fixed demos and update fix-results JSON files.
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { kimiCompare } from './kimi-utils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = fs.existsSync(path.join(__dirname, '..', 'tsconfig.json'))
  ? path.join(__dirname, '..')
  : path.join(__dirname, '..', '..')

const PORTED_DIR = path.join(ROOT, 'screenshots', 'ported')
const REFERENCE_DIR = path.join(ROOT, 'screenshots', 'reference')
const FIX_RESULTS_DIR = path.join(ROOT, 'test-results', 'fix-results')

const FIXED_DEMOS = [
  'webgl_instancing_dynamic',
  'webgl_postprocessing_taa',
  'webgl_shadowmap_vsm'
]

async function main() {
  console.log('[verify-fixes] Starting Kimi comparison for 3 fixed demos...\n')

  for (const demoId of FIXED_DEMOS) {
    const portedPath = path.join(PORTED_DIR, `${demoId}.png`)
    const referencePath = path.join(REFERENCE_DIR, `${demoId}.png`)
    const resultPath = path.join(FIX_RESULTS_DIR, `${demoId}.json`)

    if (!fs.existsSync(portedPath)) {
      console.error(`[verify-fixes] Ported screenshot not found: ${portedPath}`)
      continue
    }

    if (!fs.existsSync(referencePath)) {
      console.error(`[verify-fixes] Reference screenshot not found: ${referencePath}`)
      continue
    }

    console.log(`[verify-fixes] Comparing ${demoId}...`)

    try {
      const verdict = await kimiCompare(portedPath, referencePath)

      if (!verdict) {
        console.warn(`[verify-fixes] Kimi returned null for ${demoId} (response truncated)`)
        continue
      }

      console.log(`  Score: ${verdict.similarity_score}`)
      console.log(`  Verdict: ${verdict.verdict}`)
      console.log(`  Reasoning: ${verdict.reasoning.slice(0, 200)}...`)

      // Read existing fix result
      if (fs.existsSync(resultPath)) {
        const existing = JSON.parse(fs.readFileSync(resultPath, 'utf-8'))
        existing.after_score = verdict.similarity_score
        existing.status = verdict.similarity_score >= 0.7 ? 'pass' : 'fail'

        fs.writeFileSync(resultPath, JSON.stringify(existing, null, 2))
        console.log(`  Updated: ${resultPath}\n`)
      } else {
        console.warn(`  Fix result file not found: ${resultPath}`)
      }
    } catch (err: any) {
      console.error(`[verify-fixes] Error for ${demoId}: ${err.message}`)
    }
  }

  console.log('[verify-fixes] Verification complete')
}

main().catch(err => {
  console.error('[verify-fixes] Unhandled error:', err)
  process.exit(1)
})
