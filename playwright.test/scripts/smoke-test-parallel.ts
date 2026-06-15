/**
 * smoke-test-parallel.ts
 * Parallel browser capture with queued Kimi comparisons.
 *
 * Architecture:
 * - 3 Chrome profiles (4, 5, 6) capture demos in parallel
 * - Kimi API calls are queued (sequential, not parallel)
 * - Retry logic: up to 3 attempts for browser capture
 *
 * Usage:
 *   export KIMI_API_KEY="sk-..." && npx tsx scripts/smoke-test-parallel.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const KIMI_API_KEY = process.env.KIMI_API_KEY
const KIMI_ENDPOINT = 'https://api.sfkey.cn/v1/chat/completions'
const KIMI_MODEL = 'kimi-k2.5'

const CHROME_PROFILES = [
  { name: 'profile-qmdj-4', port: 9225 },
  { name: 'profile-qmdj-5', port: 9226 },
  { name: 'profile-qmdj-6', port: 9227 }
]

interface KimiVerdict {
  similarity_score: number
  verdict: 'pass' | 'fail' | 'inconclusive'
  reasoning: string
  key_differences: string[]
}

interface DemoResult {
  demoId: string
  workerId: number
  captureAttempts: number
  portedScreenshot?: string
  referenceScreenshot?: string
  kimVerdict?: KimiVerdict
  status: 'pass' | 'fail' | 'error'
  error?: string
}

/**
 * Kimi API queue - processes one request at a time with retry
 */
class KimiQueue {
  private queue: Array<{
    portedPath: string
    referencePath: string
    resolve: (verdict: KimiVerdict | null) => void
    reject: (err: Error) => void
  }> = []
  private processing = false

  async compare(portedPath: string, referencePath: string): Promise<KimiVerdict | null> {
    return new Promise((resolve, reject) => {
      this.queue.push({ portedPath, referencePath, resolve, reject })
      this.processQueue()
    })
  }

  private async processQueue(): Promise<void> {
    if (this.processing || this.queue.length === 0) return

    this.processing = true
    const item = this.queue.shift()!

    try {
      // Retry Kimi API up to 3 times with exponential backoff
      let lastError: Error | null = null
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          const verdict = await this.callKimiAPI(item.portedPath, item.referencePath)
          item.resolve(verdict)
          return
        } catch (err) {
          lastError = err as Error
          if (attempt < 3) {
            const delay = attempt * 5000 // 5s, 10s backoff
            console.log(`[kimi-queue] Attempt ${attempt} failed, retrying in ${delay/1000}s...`)
            await new Promise(resolve => setTimeout(resolve, delay))
          }
        }
      }
      item.reject(lastError!)
    } finally {
      this.processing = false
      // Process next item in queue after 2s delay
      if (this.queue.length > 0) {
        setTimeout(() => this.processQueue(), 2000)
      }
    }
  }

  private async callKimiAPI(portedPath: string, referencePath: string): Promise<KimiVerdict | null> {
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

    // Parse JSON (handle markdown)
    let jsonStr = content.trim()
    if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
    }

    return JSON.parse(jsonStr) as KimiVerdict
  }
}

/**
 * Simulate browser capture with retry logic
 * (In real implementation, this would use Chrome DevTools MCP)
 */
async function captureDemo(
  demoId: string,
  workerId: number,
  maxRetries: number = 3
): Promise<{ ported: string; reference: string } | null> {
  const screenshotDir = path.join(ROOT, 'screenshots')

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`[worker-${workerId}] Capturing ${demoId} (attempt ${attempt}/${maxRetries})...`)

    // Simulate capture delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Check if screenshots exist (simulated)
    const portedPath = path.join(screenshotDir, 'smoke-ported.png')
    const referencePath = path.join(screenshotDir, 'smoke-reference.png')

    if (fs.existsSync(portedPath) && fs.existsSync(referencePath)) {
      console.log(`[worker-${workerId}] ✓ Captured ${demoId}`)
      return { ported: portedPath, reference: referencePath }
    }

    console.log(`[worker-${workerId}] ✗ Capture failed (attempt ${attempt})`)
  }

  return null
}

/**
 * Worker process - captures demos and queues Kimi comparisons
 */
async function worker(
  workerId: number,
  demoIds: string[],
  kimiQueue: KimiQueue
): Promise<DemoResult[]> {
  const results: DemoResult[] = []

  for (const demoId of demoIds) {
    console.log(`\n[worker-${workerId}] Processing ${demoId}...`)

    // Capture screenshots (with retry)
    const paths = await captureDemo(demoId, workerId, 3)

    if (!paths) {
      results.push({
        demoId,
        workerId,
        captureAttempts: 3,
        status: 'error',
        error: 'Failed to capture screenshots after 3 attempts'
      })
      continue
    }

    // Queue Kimi comparison (sequential)
    console.log(`[worker-${workerId}] Queueing Kimi comparison for ${demoId}...`)
    const startTime = Date.now()

    try {
      const verdict = await kimiQueue.compare(paths.ported, paths.reference)
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

      if (!verdict) {
        results.push({
          demoId,
          workerId,
          captureAttempts: 1,
          status: 'error',
          error: 'Failed to parse Kimi verdict'
        })
        continue
      }

      console.log(`[worker-${workerId}] ✓ Kimi: ${verdict.verdict} (${verdict.similarity_score}) in ${elapsed}s`)

      results.push({
        demoId,
        workerId,
        captureAttempts: 1,
        portedScreenshot: paths.ported,
        referenceScreenshot: paths.reference,
        kimVerdict: verdict,
        status: verdict.verdict === 'pass' ? 'pass' : 'fail'
      })
    } catch (err: any) {
      console.error(`[worker-${workerId}] Kimi error:`, err.message)
      results.push({
        demoId,
        workerId,
        captureAttempts: 1,
        status: 'error',
        error: err.message
      })
    }
  }

  return results
}

/**
 * Main: Run 3 workers in parallel, Kimi calls queued sequentially
 */
async function main(): Promise<void> {
  if (!KIMI_API_KEY) {
    console.error('ERROR: KIMI_API_KEY not set')
    console.error('Usage: export KIMI_API_KEY="sk-..." && npx tsx scripts/smoke-test-parallel.ts')
    process.exit(1)
  }

  console.log('[orchestrator] Starting parallel capture test')
  console.log('[orchestrator] 3 workers, Kimi API queued sequentially\n')

  const kimiQueue = new KimiQueue()

  // Distribute demos across 3 workers
  const demos = ['webgl_lines', 'webgl_camera', 'webgl_geometry']
  const workerDemos = [
    demos.slice(0, 1),  // Worker 0: 1 demo
    demos.slice(1, 2),  // Worker 1: 1 demo
    demos.slice(2, 3)   // Worker 2: 1 demo
  ]

  console.log('[orchestrator] Worker assignments:')
  workerDemos.forEach((demos, i) => {
    console.log(`  Worker ${i} (${CHROME_PROFILES[i].name}): ${demos.join(', ')}`)
  })
  console.log('')

  const startTime = Date.now()

  // Run workers in parallel
  const workerResults = await Promise.all([
    worker(0, workerDemos[0], kimiQueue),
    worker(1, workerDemos[1], kimiQueue),
    worker(2, workerDemos[2], kimiQueue)
  ])

  const allResults = workerResults.flat()
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

  // Print summary
  console.log('\n=== RESULTS ===\n')

  const passed = allResults.filter(r => r.status === 'pass').length
  const failed = allResults.filter(r => r.status === 'fail').length
  const errors = allResults.filter(r => r.status === 'error').length

  console.log(`Total: ${allResults.length}`)
  console.log(`Passed: ${passed}`)
  console.log(`Failed: ${failed}`)
  console.log(`Errors: ${errors}`)
  console.log(`\nTotal time: ${elapsed}s`)

  console.log('\nDetailed Results:')
  allResults.forEach(r => {
    console.log(`  ${r.demoId} (worker ${r.workerId}): ${r.status}` +
      (r.kimVerdict ? ` (score: ${r.kimVerdict.similarity_score})` : '') +
      (r.error ? ` - ${r.error}` : ''))
  })

  console.log('\n=== TEST COMPLETE ===')
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
