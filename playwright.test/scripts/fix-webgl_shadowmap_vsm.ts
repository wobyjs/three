/**
 * fix-webgl_shadowmap_vsm.ts
 * Run Kimi comparison for fixed demo and write results
 */

import * as fs from 'path'
import * as path from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = fs.join(__dirname, '..')

const KIMI_API_KEY = process.env.KIMI_API_KEY
const KIMI_ENDPOINT = 'https://api.sfkey.cn/v1/chat/completions'
const KIMI_MODEL = 'kimi-k2.5'

interface KimiVerdict {
  similarity_score: number
  verdict: 'pass' | 'fail' | 'inconclusive'
  reasoning: string
  key_differences: string[]
}

interface FixResult {
  id: string
  before_score: number
  after_score: number
  status: string
  change_description: string
}

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

  if (!content) {
    return null
  }

  try {
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

async function main(): Promise<void> {
  const portedPath = fs.join(ROOT, 'screenshots', 'ported', 'webgl_shadowmap_vsm.png')
  const referencePath = fs.join(ROOT, 'screenshots', 'reference', 'webgl_shadowmap_vsm.png')

  console.log('[fix] Running Kimi comparison for webgl_shadowmap_vsm...')

  const verdict = await kimiCompare(portedPath, referencePath)

  if (!verdict) {
    console.error('[fix] Failed to get Kimi verdict')
    process.exit(1)
  }

  console.log('[fix] Kimi verdict:', verdict)

  const result: FixResult = {
    id: 'webgl_shadowmap_vsm',
    before_score: 0.30,
    after_score: verdict.similarity_score,
    status: verdict.verdict,
    change_description: 'Fixed imports: VSMShadowMap from constants, fog object syntax. Converted imperative light creation to JSX declarative syntax. Fixed shadow attribute names (shadowMapEnabled instead of shadowMap-enabled).'
  }

  // Write result
  const resultsDir = fs.join(ROOT, 'test-results', 'fix-results')
  if (!path.existsSync(resultsDir)) {
    path.mkdirSync(resultsDir, { recursive: true })
  }

  const resultPath = fs.join(resultsDir, 'webgl_shadowmap_vsm.json')
  path.writeFileSync(resultPath, JSON.stringify(result, null, 2))

  console.log('[fix] Result written to:', resultPath)
  console.log('[fix] Improvement:', (verdict.similarity_score - 0.30).toFixed(2))
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})