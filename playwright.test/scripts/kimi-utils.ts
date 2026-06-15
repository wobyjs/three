import { execFileSync, spawnSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import { parseVerdict, type Verdict } from './shared-llm-utils.js'
import sharp from 'sharp'

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

// On Windows, npm global CLIs install as <prefix>\agent-browser.cmd which wraps a native exe.
// We bypass cmd.exe entirely by resolving the native .exe directly — spawnSync can run it
// without a shell, avoiding the cmd.exe → .cmd → .exe chain that causes ETIMEDOUT in workers.
function resolveAgentBrowser(): string {
  if (process.platform !== 'win32') return 'agent-browser'
  const appdata = process.env.APPDATA ?? ''

  // Primary: native exe bypasses cmd.exe entirely (agent-browser.cmd just wraps this)
  const nativeExe = path.join(appdata, 'npm', 'node_modules', 'agent-browser', 'bin', 'agent-browser-win32-x64.exe')
  if (fs.existsSync(nativeExe)) return nativeExe

  // Fallback: try npm config get prefix at runtime
  try {
    const prefix = execFileSync('npm', ['config', 'get', 'prefix'],
      { encoding: 'utf-8', timeout: 10_000, shell: true }).trim()
    const fromPrefix = path.join(prefix, 'node_modules', 'agent-browser', 'bin', 'agent-browser-win32-x64.exe')
    if (fs.existsSync(fromPrefix)) return fromPrefix
  } catch { /* ignore */ }

  return 'agent-browser' // last resort — may fail
}

const AGENT_BROWSER_BIN = resolveAgentBrowser()

/** Invoke agent-browser via spawnSync with an argument array (no shell interpolation). */
export function agentBrowser(session: string, args: string[], timeoutMs = 90_000): string {
  const result = spawnSync(AGENT_BROWSER_BIN, ['--session', session, ...args], {
    encoding: 'utf-8',
    timeout: timeoutMs,
    maxBuffer: 10 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe']
  })

  // Check status === 0 first — on Windows, ETIMEDOUT can fire as a race condition
  // after the process already exited cleanly. Trust exit code over the timeout error.
  if (result.status === 0) return (result.stdout ?? '').trim()
  if (result.error) throw result.error
  throw new Error(`agent-browser exited ${result.status}: ${(result.stderr ?? '').slice(0, 200)}`)
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
): Promise<'ok' | 'no-canvas' | 'blank-canvas' | 'failed'> {
  try {
    // 35s for open: Chrome navigates in <5s; agent-browser session daemon stays alive
    // after that (we rely on status===0 check in agentBrowser to accept the ETIMEDOUT race)
    agentBrowser(session, ['open', url], 35_000)
    agentBrowser(session, ['wait', String(waitMs)], waitMs + 15_000)

    // Check canvas exists via base64-encoded JS (avoids shell quoting issues)
    const checkCanvasJs = Buffer.from("document.querySelector('canvas') !== null").toString('base64')
    const hasCanvas = agentBrowser(session, ['eval', '-b', checkCanvasJs])
    if (hasCanvas !== 'true') return 'no-canvas'

    // Check canvas has rendered content (width > 0 and data not all zeros/black)
    // This ensures WebGL has initialized and first frame has rendered
    const checkRenderJs = Buffer.from(`
      (() => {
        const canvas = document.querySelector('canvas');
        if (!canvas) return false;
        const width = canvas.width;
        const height = canvas.height;
        if (width === 0 || height === 0) return false;
        // Check if canvas has non-black content by sampling a few pixels
        try {
          const ctx = canvas.getContext('2d');
          if (!ctx) return true; // WebGL canvas, assume rendered
          const data = ctx.getImageData(0, 0, Math.min(width, 10), Math.min(height, 10)).data;
          // Check if any pixel has non-zero RGB values
          for (let i = 0; i < data.length; i += 4) {
            if (data[i] > 0 || data[i+1] > 0 || data[i+2] > 0) return true;
          }
          return false; // All pixels are black/zero
        } catch (e) {
          // WebGL context - can't read pixels with getImageData, assume rendered
          return true;
        }
      })()
    `).toString('base64')
    const hasRendered = agentBrowser(session, ['eval', '-b', checkRenderJs])
    if (hasRendered !== 'true') return 'blank-canvas'

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

// ─── Image resize helper — keeps payloads under Kimi's nginx limit ───────────

const MAX_DIM = 800  // resize to fit within 800×800 before base64

async function resizeToBase64(filePath: string): Promise<string> {
  const buf = await sharp(filePath)
    .resize(MAX_DIM, MAX_DIM, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85 })
    .toBuffer()
  return buf.toString('base64')
}

// ─── kimiCompare — Kimi multimodal vision comparison ─────────────────────────

/**
 * Compare two screenshot files using Kimi vision API.
 * Returns a Verdict or null if the API response was truncated.
 *
 * SECURITY: API key read from env only — never logged, never written to output.
 */
const KIMI_MAX_RETRIES = 10
const KIMI_RETRY_DELAY_MS = 3000

export async function kimiCompare(
  portedPath: string,
  referencePath: string
): Promise<Verdict | null> {
  const apiKey = process.env.KIMI_API_KEY
  if (!apiKey) throw new Error('KIMI_API_KEY env var is not set')  // key value NOT in message

  const [ported64, ref64] = await Promise.all([
    resizeToBase64(portedPath),
    resizeToBase64(referencePath),
  ])

  const body = {
    model: KIMI_MODEL,
    max_tokens: KIMI_MAX_TOKENS,
    messages: [{
      role: 'user' as const,
      content: [
        { type: 'image_url' as const, image_url: { url: `data:image/jpeg;base64,${ported64}` } },
        { type: 'image_url' as const, image_url: { url: `data:image/jpeg;base64,${ref64}` } },
        { type: 'text' as const, text: COMPARISON_PROMPT }
      ]
    }]
  }

  let lastErr: Error | null = null
  for (let attempt = 1; attempt <= KIMI_MAX_RETRIES; attempt++) {
    try {
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
        const msg = `Kimi API error ${res.status}: ${errText.slice(0, 200)}`
        // 4xx (except 429) are not retryable
        if (res.status >= 400 && res.status < 500 && res.status !== 429) throw new Error(msg)
        lastErr = new Error(msg)
        console.warn(`[kimi] attempt ${attempt}/${KIMI_MAX_RETRIES} failed: ${msg}`)
        await new Promise(r => setTimeout(r, KIMI_RETRY_DELAY_MS * attempt))
        continue
      }

      const data = await res.json() as any
      const content: string | null = data.choices?.[0]?.message?.content ?? null
      const finishReason: string = data.choices?.[0]?.finish_reason ?? 'unknown'

      if (finishReason === 'length' || content === null) {
        console.warn(`[kimi] finish_reason=${finishReason} — response truncated, returning null`)
        return null
      }

      return parseVerdict(content)
    } catch (err: any) {
      // Network/fetch errors are retryable
      if (err?.message?.startsWith('Kimi API error 4') && !err.message.includes('429')) throw err
      lastErr = err
      console.warn(`[kimi] attempt ${attempt}/${KIMI_MAX_RETRIES} error: ${String(err?.message ?? err).slice(0, 150)}`)
      if (attempt < KIMI_MAX_RETRIES) {
        await new Promise(r => setTimeout(r, KIMI_RETRY_DELAY_MS * attempt))
      }
    }
  }
  throw lastErr ?? new Error('Kimi compare failed after all retries')
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
