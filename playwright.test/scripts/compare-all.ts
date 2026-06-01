import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import {
  ReferenceEntry,
  PORTED_SCREENSHOT_DIR,
  REFERENCE_SCREENSHOT_DIR,
  REFERENCE_MANIFEST_PATH,
} from './demo-list.js'
import { Verdict, parseVerdict, buildBatchRequests, resizeScreenshot, submitAndPoll } from './shared-llm-utils.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.join(__dirname, '..')

const LLM_BATCH_RESULTS_PATH = path.join(ROOT, 'test-results', 'llm-batch-results.json')
const RESIZED_DIR = path.join(ROOT, 'test-results', 'resized-screenshots')

async function main() {
  const isDryRun = process.argv.includes('--dry-run')
  const limitArg = process.argv.find(a => a.startsWith('--limit='))
  const limit = limitArg ? parseInt(limitArg.split('=')[1], 10) : Infinity

  // Validate API key — NEVER log the key value
  if (!isDryRun && !process.env.ANTHROPIC_API_KEY) {
    console.error('ERROR: ANTHROPIC_API_KEY environment variable is not set.')
    console.error('Set it with: $env:ANTHROPIC_API_KEY="sk-ant-..."  (PowerShell)')
    process.exit(1)
  }

  // Load reference manifest (written by Plan 01)
  const manifestPath = path.join(ROOT, REFERENCE_MANIFEST_PATH)
  if (!fs.existsSync(manifestPath)) {
    console.error(`ERROR: ${manifestPath} not found. Run reference-screenshots.test.ts first.`)
    process.exit(1)
  }
  const manifest: ReferenceEntry[] = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))

  // Find valid screenshot pairs
  const validPairs: Array<{ id: string; portedPath: string; referencePath: string }> = []
  for (const entry of manifest) {
    if (!entry.has_reference || entry.reference_status !== 'ok') continue
    const portedPath = path.join(ROOT, PORTED_SCREENSHOT_DIR, `${entry.id}.png`)
    const refPath = path.join(ROOT, REFERENCE_SCREENSHOT_DIR, `${entry.id}.png`)
    if (!fs.existsSync(portedPath)) { console.log(`  [skip-no-ported] ${entry.id}`); continue }
    if (!fs.existsSync(refPath)) { console.log(`  [skip-no-reference-file] ${entry.id}`); continue }
    validPairs.push({ id: entry.id, portedPath, referencePath: refPath })
    if (validPairs.length >= limit) break
  }
  console.log(`Found ${validPairs.length} valid comparison pairs.`)

  // Resize all screenshots to 800x600
  fs.mkdirSync(RESIZED_DIR, { recursive: true })
  const resizedPairs: Array<{ id: string; portedResized: string; referenceResized: string }> = []
  for (const pair of validPairs) {
    const portedResized = path.join(RESIZED_DIR, `ported_${pair.id}.png`)
    const refResized = path.join(RESIZED_DIR, `ref_${pair.id}.png`)
    const portedOk = await resizeScreenshot(pair.portedPath, portedResized)
    const refOk = await resizeScreenshot(pair.referencePath, refResized)
    if (portedOk && refOk) resizedPairs.push({ id: pair.id, portedResized, referenceResized: refResized })
  }
  console.log(`Resized ${resizedPairs.length} pairs to 800x600.`)

  // Submit to Anthropic Batches API or use dry-run mock
  let rawResults: Map<string, any>
  if (isDryRun) {
    console.log('DRY RUN: generating mock verdicts (no API call)')
    rawResults = new Map(resizedPairs.map(p => [
      p.id,
      { custom_id: p.id, result: { type: 'succeeded', message: { content: [{ text: '{"similarity_score":0.85,"verdict":"pass","reasoning":"Dry run mock.","key_differences":[]}' }] } } }
    ]))
  } else {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const requests = buildBatchRequests(resizedPairs)
    rawResults = await submitAndPoll(anthropic, requests)
  }

  // Parse verdicts
  const output: Record<string, { id: string; raw_result_type: string; verdict: Verdict | null; error: string | null }> = {}
  for (const [id, result] of rawResults.entries()) {
    if (result.result.type === 'succeeded') {
      const text: string = result.result.message.content[0]?.text ?? ''
      output[id] = { id, raw_result_type: 'succeeded', verdict: parseVerdict(text), error: null }
    } else {
      output[id] = { id, raw_result_type: result.result.type, verdict: null, error: JSON.stringify(result.result) }
    }
  }

  // Save results
  fs.writeFileSync(LLM_BATCH_RESULTS_PATH, JSON.stringify({
    generated_at: new Date().toISOString(),
    total_pairs: resizedPairs.length,
    dry_run: isDryRun,
    results: output
  }, null, 2))
  console.log(`\nResults saved to ${LLM_BATCH_RESULTS_PATH}`)

  const verdicts = Object.values(output).filter(r => r.verdict)
  const passed = verdicts.filter(r => r.verdict!.similarity_score >= 0.7).length
  const failed = verdicts.filter(r => r.verdict!.similarity_score < 0.5).length
  const warned = verdicts.length - passed - failed
  console.log(`\n=== COMPARISON SUMMARY ===`)
  console.log(`Total pairs:    ${verdicts.length}`)
  console.log(`Pass (>=0.7):   ${passed}`)
  console.log(`Warn (0.5-0.7): ${warned}`)
  console.log(`Fail (<0.5):    ${failed}`)
  if (verdicts.length > 0) console.log(`Pass rate: ${((passed / verdicts.length) * 100).toFixed(1)}%`)
}

main().catch(err => { console.error(err); process.exit(1) })
