import { execFileSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import { parseVerdict, type Verdict } from './shared-llm-utils.js'

// ─── Constants ────────────────────────────────────────────────────────────────

export const KIMI_BASE = 'https://api.sfkey.cn/v1'
export const KIMI_MODEL = 'kimi-k2.5'
export const KIMI_MAX_TOKENS = 8192
export const KIMI_PASS_THRESHOLD = 0.7

export const COMPARISON_PROMPT = `You are comparing two screenshots of a 3D WebGL rendering.
Image 1 (PORTED): A Three.js example ported to JSX/Woby reactive syntax.
Image 2 (REFERENCE): The original Three.js example from threejs.org.

First, describe what you see in Image 1 (PORTED): the scene content, objects, colors, lighting, layout.
Then, describe what you see in Image 2 (REFERENCE): the scene content, objects, colors, lighting, layout.
Then, explain the differences between the two in detail.

Respond ONLY with a JSON object (no markdown, no preamble):
{
  "similarity_score": <0.0-1.0>,
  "verdict": "<pass|fail|inconclusive>",
  "reasoning": "<detailed explanation of both images and their differences — what matches, what differs, why>",
  "key_differences": ["<specific visual difference with location and description>"]
}

Pass threshold: similarity_score >= 0.7`

// ─── validateDemoId — ID safety gate ─────────────────────────────────────────

const DEMO_ID_RE = /^[a-z0-9_]+$/
export function validateDemoId(id: string): boolean {
  return DEMO_ID_RE.test(id)
}

// ─── agentBrowser — safe subprocess wrapper ───────────────────────────────────

/** Invoke agent-browser via execFileSync with an argument array (no shell interpolation). */
export function agentBrowser(session: string, args: string[]): string {
  return execFileSync(
    'agent-browser',
    ['--session', session, ...args],
    { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 30_000 }
  ).trim()
}

// ─── captureDemo — screenshot one URL via agent-browser ──────────────────────

/**
 * Capture a PNG screenshot of a running demo.
 * @param url        Full URL (localhost or threejs.org)
 * @param outputPath Absolute path for the PNG output
 * @param session    Unique agent-browser session name per parallel worker
 * @param waitMs     Render wait in ms. Default 8000; use 12000 for webgl_loader_* demos
 */
export async function captureDemo(
  url: string,
  outputPath: string,
  session: string,
  waitMs = 8000
): Promise<'ok' | 'no-canvas' | 'failed'> {
  try {
    agentBrowser(session, ['open', url])
    agentBrowser(session, ['wait', String(waitMs)])

    // Check canvas via base64-encoded JS (avoids shell quoting issues)
    const checkJs = Buffer.from("document.querySelector('canvas') !== null").toString('base64')
    const hasCanvas = agentBrowser(session, ['eval', '-b', checkJs])
    if (hasCanvas !== 'true') return 'no-canvas'

    // Forward slashes required — agent-browser on Windows rejects backslashes
    const normalizedPath = outputPath.replace(/\\/g, '/')
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    agentBrowser(session, ['screenshot', normalizedPath])

    return fs.existsSync(outputPath) ? 'ok' : 'failed'
  } catch (err: any) {
    // Log error description only — never log API key or sensitive data
    console.error(`[capture] ${session} ${url}: ${String(err?.message ?? err).slice(0, 150)}`)
    return 'failed'
  }
}

// ─── kimiCompare — Kimi multimodal vision comparison ─────────────────────────

/**
 * Compare two screenshot files using Kimi vision API.
 * Returns a Verdict or null if the API response was truncated.
 *
 * SECURITY: API key read from env only — never logged, never written to output.
 */
export async function kimiCompare(
  portedPath: string,
  referencePath: string
): Promise<Verdict | null> {
  const apiKey = process.env.KIMI_API_KEY
  if (!apiKey) throw new Error('KIMI_API_KEY env var is not set')  // key value NOT in message

  const ported64 = fs.readFileSync(portedPath).toString('base64')
  const ref64 = fs.readFileSync(referencePath).toString('base64')

  const body = {
    model: KIMI_MODEL,
    max_tokens: KIMI_MAX_TOKENS,
    messages: [{
      role: 'user' as const,
      content: [
        { type: 'image_url' as const, image_url: { url: `data:image/png;base64,${ported64}` } },
        { type: 'image_url' as const, image_url: { url: `data:image/png;base64,${ref64}` } },
        { type: 'text' as const, text: COMPARISON_PROMPT }
      ]
    }]
  }

  const res = await fetch(`${KIMI_BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Kimi API error ${res.status}: ${errText.slice(0, 200)}`)
  }

  const data = await res.json() as any
  const content: string | null = data.choices?.[0]?.message?.content ?? null
  const finishReason: string = data.choices?.[0]?.finish_reason ?? 'unknown'

  if (finishReason === 'length' || content === null) {
    console.warn(`[kimi] finish_reason=${finishReason} — response truncated, returning null`)
    return null
  }

  return parseVerdict(content)
}

// ─── CLI self-test ────────────────────────────────────────────────────────────

if (process.argv.includes('--self-test')) {
  console.log('[self-test] validateDemoId tests...')
  const assertions = [
    validateDemoId('webgl_camera') === true,
    validateDemoId('webgl_loader_gltf') === true,
    validateDemoId('../etc/passwd') === false,
    validateDemoId('WEBGL_CAMERA') === false,
    validateDemoId('Demo Spaces') === false,
  ]
  if (!assertions.every(Boolean)) {
    console.error('[self-test] FAIL — validateDemoId assertion failed')
    process.exit(1)
  }
  console.log('[self-test] validateDemoId: OK')

  const apiKey = process.env.KIMI_API_KEY
  if (!apiKey) {
    console.warn('[self-test] KIMI_API_KEY not set — skipping live API validation')
  } else {
    console.log('[self-test] KIMI_API_KEY is set (value not shown)')
  }
  console.log('[self-test] PASS')
  process.exit(0)
}

export type { Verdict }
