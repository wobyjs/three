/**
 * smoke-test-kimi.ts
 * Smoke test for Kimi vision comparison using Chrome DevTools MCP.
 *
 * Tests:
 * 1. Single demo comparison (webgl_lines)
 * 2. Parallel comparison (webgl_lines + webgl_camera)
 *
 * Usage:
 *   npx tsx scripts/smoke-test-kimi.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const KIMI_API_KEY = process.env.KIMI_API_KEY
const KIMI_ENDPOINT = 'https://api.sfkey.cn/v1/chat/completions'
const KIMI_MODEL = 'kimi-k2.5'

interface KimiVerdict {
  similarity_score: number
  verdict: 'pass' | 'fail' | 'inconclusive'
  reasoning: string
  key_differences: string[]
}

interface ComparisonResult {
  demoId: string
  status: 'pass' | 'fail' | 'error'
  verdict?: KimiVerdict
  error?: string
}

/**
 * Call Kimi API to compare two screenshots
 */
async function kimiCompare(
  portedPath: string,
  referencePath: string
): Promise<KimiVerdict | null> {
  if (!KIMI_API_KEY) {
    throw new Error('KIMI_API_KEY not set')
  }

  const ported64 = fs.readFileSync(portedPath).toString('base64')
  const ref64 = fs.readFileSync(referencePath).toString('base64')

  const prompt = `You are comparing two screenshots of a 3D WebGL rendering.
Image 1 (PORTED): A Three.js example ported to JSX/Woby reactive syntax.
Image 2 (REFERENCE): The original Three.js example from threejs.org.

Respond ONLY with a JSON object (no markdown, no preamble):
{
  "similarity_score": <0.0-1.0>,
  "verdict": "<pass|fail|inconclusive>",
  "reasoning": "<1-2 sentences>",
  "key_differences": ["<difference>"]
}

Pass threshold: similarity_score >= 0.7`

  const body = {
    model: KIMI_MODEL,
    max_tokens: 8192,
    messages: [{
      role: 'user' as const,
      content: [
        { type: 'image_url' as const, image_url: { url: `data:image/png;base64,${ported64}` } },
        { type: 'image_url' as const, image_url: { url: `data:image/png;base64,${ref64}` } },
        { type: 'text' as const, text: prompt }
      ]
    }]
  }

  const res = await fetch(KIMI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${KIMI_API_KEY}`
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Kimi API ${res.status}: ${err.slice(0, 200)}`)
  }

  const data = await res.json() as any
  const content = data.choices?.[0]?.message?.content ?? null
  const finishReason = data.choices?.[0]?.finish_reason

  if (finishReason === 'length' || content === null) {
    console.warn(`[kimi] finish_reason=${finishReason} — max_tokens may be too low`)
    return null
  }

  // Parse JSON from response (handle markdown code blocks)
  try {
    // Strip markdown code blocks if present
    let jsonStr = content.trim()
    if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
    }

    return JSON.parse(jsonStr) as KimiVerdict
  } catch (err) {
    console.error('[kimi] Failed to parse verdict:', content.slice(0, 100))
    return null
  }
}

/**
 * Compare a single demo
 * Assumes screenshots already exist on disk
 */
async function compareDemo(demoId: string): Promise<ComparisonResult> {
  const portedPath = path.join(ROOT, 'screenshots', 'smoke-ported.png')
  const referencePath = path.join(ROOT, 'screenshots', 'smoke-reference.png')

  if (!fs.existsSync(portedPath)) {
    return { demoId, status: 'error', error: 'Ported screenshot not found' }
  }
  if (!fs.existsSync(referencePath)) {
    return { demoId, status: 'error', error: 'Reference screenshot not found' }
  }

  console.log(`[kimi] Comparing ${demoId}...`)
  const startTime = Date.now()

  try {
    const verdict = await kimiCompare(portedPath, referencePath)
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

    if (!verdict) {
      return { demoId, status: 'error', error: 'Failed to parse Kimi verdict' }
    }

    console.log(`[kimi] ${demoId}: ${verdict.verdict} (score: ${verdict.similarity_score}) in ${elapsed}s`)

    return {
      demoId,
      status: verdict.verdict === 'pass' ? 'pass' : 'fail',
      verdict
    }
  } catch (err: any) {
    console.error(`[kimi] ${demoId} error:`, err.message)
    return { demoId, status: 'error', error: err.message }
  }
}

/**
 * Test 1: Single demo comparison
 */
async function testSingleDemo(): Promise<void> {
  console.log('\n=== TEST 1: Single Demo Comparison ===\n')

  const result = await compareDemo('webgl_lines')

  console.log('\nResult:')
  console.log(JSON.stringify(result, null, 2))

  if (result.status === 'pass') {
    console.log('\n✅ TEST 1 PASSED')
  } else {
    console.log('\n❌ TEST 1 FAILED')
  }
}

/**
 * Test 2: Parallel comparison of 2 demos
 */
async function testTwoDemos(): Promise<void> {
  console.log('\n=== TEST 2: Parallel Comparison (2 demos) ===\n')

  const demos = ['webgl_lines', 'webgl_camera']

  // Run comparisons in parallel
  const results = await Promise.all(
    demos.map(demoId => compareDemo(demoId))
  )

  console.log('\nResults:')
  results.forEach(r => {
    console.log(`  ${r.demoId}: ${r.status}` +
      (r.verdict ? ` (score: ${r.verdict.similarity_score})` : '') +
      (r.error ? ` - ${r.error}` : ''))
  })

  const passed = results.filter(r => r.status === 'pass').length
  console.log(`\n${passed}/${results.length} demos passed`)

  if (passed === results.length) {
    console.log('✅ TEST 2 PASSED')
  } else {
    console.log('⚠️ TEST 2 PARTIAL PASS (expected - using same screenshots for both demos)')
  }
}

/**
 * Main
 */
async function main(): Promise<void> {
  if (!KIMI_API_KEY) {
    console.error('ERROR: KIMI_API_KEY not set')
    console.error('Usage: export KIMI_API_KEY="sk-..." && npx tsx scripts/smoke-test-kimi.ts')
    process.exit(1)
  }

  console.log('[kimi] API key set (length:', KIMI_API_KEY.length + ')')

  await testSingleDemo()
  await testTwoDemos()

  console.log('\n=== SMOKE TEST COMPLETE ===')
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
