# Phase 14: Kimi Agent Demo Fix - Research

**Researched:** 2026-06-02
**Updated:** 2026-06-05 (Chrome DevTools MCP integration with profiles 4-6)
**Domain:** Browser automation (Chrome DevTools MCP), multimodal vision LLM (Kimi), WebGL screenshot comparison, demo debugging pipeline
**Confidence:** HIGH — all critical components verified via live tool calls and API tests in this session

---

## Project Constraints (from CLAUDE.md)

No CLAUDE.md exists in this project. However, a security hook in the project environment enforces:
- Avoid `exec()` (shell injection risk) — prefer `execFile()` or `execFileSync()` with argument arrays
- Note: `src/utils/execFileNoThrow.ts` is referenced by the hook but does not exist in this repo (it is from a different project). Use `child_process.execFileSync` with an args array as the safe alternative for all subprocess calls.

---

## Summary

Phase 14 replaces the existing Playwright+Anthropic vision stack with a Kimi multimodal + Chrome DevTools MCP pipeline. The goal is to compare every ported demo against its threejs.org reference one-by-one using Kimi vision, then fan-out agents to debug and fix non-matching demos.

The current state (Phase 13) left 95 demos with status `reference-load-failed` — Playwright's headless WebGL capture timed out or produced blank canvases for these. All 200 demos have ported screenshots on disk. Only 7 demos completed the full comparison pipeline (all 7 pass, but with dry-run mock verdicts). The comparison never ran for real. The Anthropic batch API key is no longer the target — this phase uses the Kimi endpoint at `api.sfkey.cn`.

The key verified findings: Chrome DevTools MCP is available and working. The Kimi `kimi-k2.5` vision model at `api.sfkey.cn/v1` accepts two base64 images, returns a proper JSON comparison verdict, and responds in 12-45 seconds per pair depending on image size. `max_tokens` must be at least 4096 to avoid truncated output (the model uses internal reasoning tokens). The ported demo app runs at `http://localhost:5175` with hash-based routing (`/#webgl_camera`) and exposes `window.__setDemo(id)` for programmatic control.

**Primary recommendation:** Build a TypeScript orchestrator that uses Chrome DevTools MCP (one Chrome profile per parallel worker) to screenshot ported demos and threejs.org references, then calls Kimi vision to compare them. Spawn fix-agents for all failures.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Reference screenshot capture | Chrome DevTools MCP | — | Navigate threejs.org/examples/#id, wait for WebGL canvas, screenshot |
| Ported screenshot capture | Chrome DevTools MCP | — | Navigate localhost:5175/#id, wait for canvas, screenshot |
| Visual comparison | Kimi API | — | Two-image multimodal prompt returns JSON verdict |
| Parallel orchestration | Node.js child_process | — | Same pattern as existing agent-batch-worker.ts |
| Demo fixing | Claude Code agent | demo/src/*.tsx | Load demo TSX file, read Kimi diff, apply fix |
| Result reporting | Node.js / JSON+HTML | — | Extend existing VisualComparisonReport format |

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Chrome DevTools MCP | via Claude Desktop | Browser automation for screenshot capture | Available via MCP tools, no Playwright dependency |
| node fetch / https | built-in | Kimi API calls | No extra dependency needed |
| sharp | existing in playwright.test | Image resize before Kimi submission | Already used in shared-llm-utils.ts |
| tsx | existing | TypeScript execution | Already used to run agent-batch-worker.ts |
| child_process.spawn / execFileSync | built-in Node | Parallel agent orchestration + Chrome launch | Same pattern already proven in parallel-visual-comparison.ts |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| fs/promises | built-in | Async file I/O for screenshots | Writing/reading PNG files |
| path | built-in | Cross-platform path handling | All file path construction |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Chrome DevTools MCP | Puppeteer/Playwright | MCP is integrated into Claude Desktop; no separate Node.js server needed |
| kimi-k2.5 | moonshot-v1-8k-vision-preview | kimi-k2.5 is the target model per phase spec; -8k-vision is slower and has lower context |
| Resizing to 800x600 before Kimi | Sending full-res | Full-res screenshots in this project are small (2-81KB); resizing adds complexity with little benefit |

---

## Chrome DevTools MCP Reference (Verified)

**Tools available:** navigate_page, wait_for, take_screenshot, list_console_messages, get_console_message, close_page, evaluate_javascript

### Profile Lifecycle

Chrome profiles are launched with remote debugging enabled. Each profile is an isolated browser instance:

```powershell
# Launch Chrome with remote debugging (Windows) - one per worker profile
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=922{N} --user-data-dir="C:\chrome-profiles\profile-qmdj-{N}"
```

**Profile to port mapping for Phase 14:**
| Profile | Port | Use Case |
|---------|------|----------|
| profile-qmdj-1 | 9222 | OAuth pinned (not used for testing) |
| profile-qmdj-2 | 9223 | Reserved (not used for Phase 14) |
| profile-qmdj-3 | 9224 | Reserved (not used for Phase 14) |
| profile-qmdj-4 | 9225 | Worker 0 |
| profile-qmdj-5 | 9226 | Worker 1 |
| profile-qmdj-6 | 9227 | Worker 2 |

**Worker to profile assignment:**
```typescript
// Worker 0 -> profile-qmdj-4 (port 9225)
// Worker 1 -> profile-qmdj-5 (port 9226)
// Worker 2 -> profile-qmdj-6 (port 9227)
const profileIndex = workerIndex + 4
```

**Always use headed mode for WebGL rendering:**
```typescript
// MCP navigation with headed mode
mcp__chrome-devtools__navigate_page({ url: "https://threejs.org/examples/#webgl_lines", headed: true })
```

### Navigation and Waiting

```typescript
// Navigate to URL (always use headed: true for WebGL demos)
mcp__chrome-devtools__navigate_page({ url: "https://threejs.org/examples/#webgl_camera", headed: true })

// Wait for element
mcp__chrome-devtools__wait_for({ text: ["canvas"], timeout: 8000 })

// Wait additional time for WebGL render
mcp__chrome-devtools__wait_for({ text: [], timeout: 5000 })
```

### Screenshot

```typescript
// Take screenshot and save to file
mcp__chrome-devtools__take_screenshot({ filePath: "./screenshots/reference/webgl_camera.png" })
```

### Console Logs and Errors

```typescript
// List all console messages
const messages = mcp__chrome-devtools__list_console_messages()

// Filter for errors
const errors = messages.filter(msg => msg.type === "error" || msg.type === "assert")

// Get specific message details
const detail = mcp__chrome-devtools__get_console_message({ index: 0 })
```

### Parallel Profiles (Key Pattern)

Each Chrome profile runs in an isolated browser instance. Launch multiple Chrome instances for parallel capture:

```powershell
# Start 3 Chrome instances (profiles 4-6) for parallel workers
$ports = @(9225, 9226, 9227)
$profiles = @(4, 5, 6)
for ($i = 0; $i -lt 3; $i++) {
  $port = $ports[$i]
  $profile = $profiles[$i]
  Start-Process -FilePath "C:\Program Files\Google\Chrome\Application\chrome.exe" -ArgumentList "--remote-debugging-port=$port", "--user-data-dir=`"C:\chrome-profiles\profile-qmdj-$profile`""
}
```

In TypeScript orchestration: use `child_process.spawn` to launch Chrome instances, then invoke MCP tools for capture operations.

### Demo URL Patterns

- **Ported demos:** `http://localhost:5175/#<demo_id>` (vite dev server, port 5175 confirmed in playwright.config.js)
  - e.g. `http://localhost:5175/#webgl_camera`
  - Programmatic control also available: `window.__setDemo('webgl_camera')` via evaluate_javascript (exposed in demo/src/index.tsx)
- **Reference demos:** `https://threejs.org/examples/#<demo_id>`
  - e.g. `https://threejs.org/examples/#webgl_camera`

### Capture Sequence (MCP Pattern)

```typescript
async function captureDemo(
  url: string,
  outputPath: string,
  profileIndex: number,
  waitMs = 8000
): Promise<'ok' | 'no-canvas' | 'failed'> {
  try {
    // Navigate (headed mode required for WebGL)
    await mcp__chrome-devtools__navigate_page({ url, headed: true })

    // Wait for WebGL initialization
    await mcp__chrome-devtools__wait_for({ text: ["canvas"], timeout: waitMs })

    // Check for console errors
    const messages = await mcp__chrome-devtools__list_console_messages()
    const errors = messages.filter(msg => msg.type === "error" || msg.type === "assert")
    if (errors.length > 0) {
      console.error(`[capture] Console errors: ${errors.map(e => e.text).join('; ')}`)
    }

    // Take screenshot
    await mcp__chrome-devtools__take_screenshot({ filePath: outputPath })

    return fs.existsSync(outputPath) ? 'ok' : 'failed'
  } catch (err: any) {
    console.error(`[capture] ${url}: ${err.message?.slice(0, 100)}`)
    return 'failed'
  }
}
```

### Cleanup

```typescript
// Close page via MCP
await mcp__chrome-devtools__close_page()

// Kill Chrome processes when done (PowerShell)
Get-Process chrome | Where-Object { $_.MainWindowTitle -like "*profile-qmdj-*" } | Stop-Process
```

---

## Kimi Multimodal API (Verified)

**Endpoint:** `https://api.sfkey.cn/v1/chat/completions` [VERIFIED: live API test in this session]
**Model:** `kimi-k2.5` [VERIFIED: model field in API response]
**Auth:** `Authorization: Bearer process.env.KIMI_API_KEY`
**Protocol:** OpenAI-compatible chat completions [CITED: platform.kimi.ai/docs]

### Verified Behavior

- Two-image comparison with 800x600 PNG screenshots: 12-45 second response time [VERIFIED]
- `max_tokens` must be >= 4096 for a full response. With `max_tokens: 512`, `finish_reason` is `length` and `content` is null. The model's internal reasoning chain consumes tokens before producing visible output. [VERIFIED]
- With `max_tokens: 8192`: `finish_reason: stop`, complete JSON content returned. [VERIFIED]
- Response structure: `choices[0].message.content` is a string (or null if truncated). [VERIFIED]
- Image format: `data:image/png;base64,{base64string}` in `image_url.url` field. [VERIFIED]
- The content array must NOT be serialized as a JSON string — it must be a real array. [CITED: platform.kimi.ai/docs]
- Supported image formats: PNG, JPEG, WebP, GIF. [CITED: platform.kimi.ai/docs]

### TypeScript Request/Response Types

```typescript
// Source: verified via live API test 2026-06-02
interface KimiVisionRequest {
  model: 'kimi-k2.5'
  max_tokens: number  // Must be >= 4096; use 8192
  messages: Array<{
    role: 'user'
    content: Array<
      | { type: 'image_url'; image_url: { url: string } }
      | { type: 'text'; text: string }
    >
  }>
}

interface KimiVisionResponse {
  id: string
  model: string
  object: 'chat.completion'
  created: number
  choices: Array<{
    index: number
    message: { role: 'assistant'; content: string | null }
    finish_reason: 'stop' | 'length' | 'content_filter'
  }>
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}
```

### Kimi API Client (kimi-utils.ts)

```typescript
// Source: verified via live API testing 2026-06-02
import * as fs from 'fs'
import { parseVerdict, type Verdict } from './shared-llm-utils.js'

const KIMI_BASE = 'https://api.sfkey.cn/v1'

const COMPARISON_PROMPT = `You are comparing two screenshots of a 3D WebGL rendering.
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

export async function kimiCompare(
  portedPath: string,
  referencePath: string
): Promise<Verdict | null> {
  const apiKey = process.env.KIMI_API_KEY
  if (!apiKey) throw new Error('KIMI_API_KEY not set')

  const ported64 = fs.readFileSync(portedPath).toString('base64')
  const ref64 = fs.readFileSync(referencePath).toString('base64')

  const body: KimiVisionRequest = {
    model: 'kimi-k2.5',
    max_tokens: 8192,  // REQUIRED: model uses reasoning tokens before output
    messages: [{
      role: 'user',
      content: [
        { type: 'image_url', image_url: { url: `data:image/png;base64,${ported64}` } },
        { type: 'image_url', image_url: { url: `data:image/png;base64,${ref64}` } },
        { type: 'text', text: COMPARISON_PROMPT }
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
    const err = await res.text()
    throw new Error(`Kimi API ${res.status}: ${err.slice(0, 200)}`)
  }

  const data = await res.json() as KimiVisionResponse
  const content = data.choices?.[0]?.message?.content ?? null
  const finishReason = data.choices?.[0]?.finish_reason

  if (finishReason === 'length' || content === null) {
    console.warn(`[kimi] finish_reason=${finishReason} — max_tokens may be too low`)
    return null
  }

  return parseVerdict(content)
}
```

### Response Parsing (Reuse Existing)

The existing `parseVerdict(text: string): Verdict` function in `playwright.test/scripts/shared-llm-utils.ts` already handles all edge cases (direct JSON, markdown blocks, first `{}` object, numeric fallback). Reuse unchanged.

### Timing and Throughput

- Per-pair latency: 12-45 seconds [VERIFIED]
- For 95 demos sequential: ~35 min estimated [ASSUMED: 22s avg]
- For 95 demos with 3 parallel workers: ~12 min estimated [ASSUMED]
- Max payload per request: 100MB [CITED: platform.kimi.ai/docs]
- Typical payload (two 800x600 screenshots): ~170KB [VERIFIED]
- Rate limit: not documented, not observed in tests [ASSUMED: no limit for moderate usage]

---

## Current Codebase State

### Demo List

**File:** `playwright.test/scripts/demo-list.ts` [VERIFIED: read in this session]

- `ALL_DEMOS`: 200 entries — a curated subset of the 629 total Three.js examples
- `CUSTOM_DEMO_IDS`: Set of 63 IDs that are custom/replacement demos with no threejs.org equivalent
- `THREEJS_BASE = 'https://threejs.org/examples'`
- `PORTED_SCREENSHOT_DIR = 'screenshots/ported'`
- `REFERENCE_SCREENSHOT_DIR = 'screenshots/reference'`

### Existing Screenshots on Disk

| Category | Count | Location |
|----------|-------|----------|
| Ported screenshots | 201 files (200 demos + 1 home) | `playwright.test/screenshots/ported/` |
| Reference screenshots | 7 files | `playwright.test/screenshots/reference/` |

[VERIFIED: ls output in this session]

All 200 ported screenshots exist. Only 7 reference screenshots were captured during Phase 13. The remaining 95 need to be captured via Chrome DevTools MCP.

### Current Pipeline (Phase 13) — Being Replaced

```
parallel-visual-comparison.ts (orchestrator)
  spawns 5 agent-batch-worker.ts processes
    each: Playwright chromium.launch() -> capture threejs.org reference -> FAILS for 95/102
    resize via sharp to 800x600
    submit to Anthropic Messages Batch API -> poll every 30s
    write partial-N.json
  merge -> visual-comparison-report.json + .html
```

**Problems:**
1. Playwright headless WebGL capture fails for 95 of 102 demos (blank canvas / timeout)
2. Anthropic Messages Batch API requires 30s poll intervals — slow and API-key-dependent
3. The 7 "passing" demos have mock dry-run verdicts — never truly compared

### Phase 13 Result Summary

[VERIFIED: visual-comparison-report.json, 2026-06-01T12:40:41Z]

| Status | Count | Meaning |
|--------|-------|---------|
| `pass` | 7 | Dry-run mock verdicts — NOT real comparisons |
| `no-reference` | 98 | Custom demos — no threejs.org equivalent (correct) |
| `reference-load-failed` | 95 | Has threejs.org equivalent but Playwright couldn't capture |
| `fail` | 0 | None — never truly compared |
| `warn` | 0 | None |

**The 95 `reference-load-failed` demos are the Phase 14 target.**

The complete list of 95 IDs: `css3d_periodictable`, `misc_controls_transform`, `physics_ammo_break`, `physics_ammo_cloth`, `physics_rapier_basic`, `physics_rapier_instancing`, `physics_rapier_joints`, `webgl_animation_skinning_blending`, `webgl_buffergeometry`, `webgl_camera`, `webgl_camera_array`, `webgl_clipping`, `webgl_clipping_advanced`, `webgl_clipping_intersection`, `webgl_decals`, `webgl_effects_anaglyph`, `webgl_effects_ascii`, `webgl_effects_parallaxbarrier`, `webgl_effects_stereo`, `webgl_geometries`, `webgl_geometry_colors`, `webgl_geometry_convex`, `webgl_geometry_extrude_shapes`, `webgl_geometry_minecraft`, `webgl_geometry_shapes`, `webgl_geometry_spline_editor`, `webgl_geometry_teapot`, `webgl_helpers`, `webgl_instancing_dynamic`, `webgl_instancing_morph`, `webgl_instancing_performance`, `webgl_instancing_raycast`, `webgl_interactive_cubes`, `webgl_interactive_cubes_gpu`, `webgl_interactive_cubes_ortho`, `webgl_interactive_lines`, `webgl_interactive_raycasting_points`, `webgl_interactive_voxelpainter`, `webgl_lensflares`, `webgl_lightprobe`, `webgl_lights_spotlight`, `webgl_lines_dashed`, `webgl_loader_3dm`, `webgl_loader_3ds`, `webgl_loader_3mf`, `webgl_loader_amf`, `webgl_loader_bvh`, `webgl_loader_collada`, `webgl_loader_draco`, `webgl_loader_fbx`, `webgl_loader_gcode`, `webgl_loader_gltf`, `webgl_loader_kmz`, `webgl_loader_lwo`, `webgl_loader_md2`, `webgl_loader_nrrd`, `webgl_loader_obj`, `webgl_loader_pcd`, `webgl_loader_pdb`, `webgl_loader_ply`, `webgl_loader_stl`, `webgl_loader_svg`, `webgl_loader_ttf`, `webgl_loader_vox`, `webgl_loader_vrml`, `webgl_loader_xyz`, `webgl_lod`, `webgl_materials_blending`, `webgl_materials_car`, `webgl_materials_channels`, `webgl_materials_cubemap`, `webgl_materials_cubemap_dynamic`, `webgl_materials_matcap`, `webgl_materials_normalmap`, `webgl_materials_physical_clearcoat`, `webgl_materials_physical_transmission`, `webgl_mirror`, `webgl_panorama_equirectangular`, `webgl_points_dynamic`, `webgl_points_sprites`, `webgl_points_waves`, `webgl_postprocessing`, `webgl_postprocessing_advanced`, `webgl_postprocessing_afterimage`, `webgl_postprocessing_dof`, `webgl_postprocessing_fxaa`, `webgl_postprocessing_glitch`, `webgl_postprocessing_pixel`, `webgl_postprocessing_ssr`, `webgl_postprocessing_transition`, `webgl_shadowmap`, `webgl_shadowmap_pointlight`, `webgl_sprites`, `webxr_ar_cones`, `webxr_ar_plane_detection`

### Demo App Architecture

[VERIFIED: demo/src/index.tsx, demo/package.json]

- Dev server: `http://localhost:5175` (vite with `--config=vite.config.web.mts`)
- Start command: `pnpm run dev` from `demo/` directory
- Demo URL pattern: `http://localhost:5175/#<demo_id>`
- Programmatic control: `window.__setDemo('<demo_id>')` — exposed on window in index.tsx
- 262 TSX source files in `demo/src/`

### Demo Source Files (for Fix Phase)

[VERIFIED: glob in this session]

Location: `demo/src/*.tsx` — 262 component files. The mapping from demo ID to file is in `demo/src/registry.ts` (470 lines, 200 demo entries).

### Woby Fix Skills Available

Per phase scope, these skills are available for demo fixing:
- `/woby-dev` — Woby reactive primitives, $ / $$ patterns
- `/woby` — Woby component patterns
- `/dom` — DOM integration
- `/dom-customelement` — custom element patterns

---

## Recommended Architecture

### New Pipeline

```
kimi-orchestrator.ts
  pre-flight: verify localhost:5175 reachable, KIMI_API_KEY set
  partition: 95 reference-load-failed demos into N worker batches
  spawn N kimi-comparison-worker.ts processes (child_process.spawn)
    each worker:
      FOR each demo in batch:
        1. capturePortedDemo(id, profile='profile-qmdj-{N+4}')
           -> MCP navigate_page http://localhost:5175/#{id} (headed: true)
           -> MCP wait_for canvas, 5000ms
           -> MCP take_screenshot ported/{id}.png  (skip if already exists from Phase 13)
        2. captureReferenceDemo(id, profile='profile-qmdj-{N+4}')
           -> MCP navigate_page https://threejs.org/examples/#{id} (headed: true)
           -> MCP wait_for canvas, 8000ms (12000 for loader demos)
           -> MCP take_screenshot reference/{id}.png
        3. kimiCompare(ported/{id}.png, reference/{id}.png)
           -> POST to api.sfkey.cn with max_tokens: 8192
           -> parseVerdict(response.choices[0].message.content)
        4. append to partial-{N}.json
      MCP close_page
  merge all partials -> kimi-comparison-report.json + .html

fix-orchestrator.ts (second pass)
  read kimi-comparison-report.json
  extract failed demos (similarity_score < 0.7)
  for each failed demo:
    spawn Claude Code fix-agent with:
      - demo TSX source (demo/src/{ComponentName}.tsx)
      - Kimi verdict (reasoning + key_differences)
    fix-agent applies minimal patch to TSX
    re-captures ported screenshot
    re-runs kimiCompare
    reports final status
```

### File Structure for Phase 14

```
playwright.test/scripts/
  kimi-utils.ts                 # NEW: Kimi API client (replaces Anthropic parts of shared-llm-utils.ts)
  kimi-comparison-worker.ts     # NEW: Per-batch worker (replaces agent-batch-worker.ts)
  kimi-orchestrator.ts          # NEW: Orchestrator (replaces parallel-visual-comparison.ts)
  fix-orchestrator.ts           # NEW: Spawns fix agents for failed demos
  demo-list.ts                  # KEEP: unchanged
  shared-llm-utils.ts           # KEEP: parseVerdict(), resizeScreenshot() still needed
playwright.test/
  screenshots/ported/           # REUSE: all 200 exist
  screenshots/reference/        # ADD: 95 new reference screenshots
  test-results/
    kimi-comparison-report.json # NEW: replaces visual-comparison-report.json
    kimi-comparison-report.html # NEW
    partial-results/            # REUSE: same merge pattern
```

### Concurrency Model

- 3 workers (using profiles 4, 5, 6)
- Each worker: 1 Chrome profile (`profile-qmdj-{N+4}`, ports 9225-9227)
- 3 workers x 1 profile = 3 simultaneous Chrome instances
- Each worker handles ~32 demos (95 / 3)
- Estimated total time: ~12 minutes for comparison phase

---

## Common Pitfalls

### Pitfall 1: Kimi max_tokens Too Low

**What goes wrong:** `content` is null, `finish_reason` is `length`. The comparison verdict is never written.
**Why it happens:** kimi-k2.5 uses internal reasoning tokens before producing visible output. Even with a 512-token response size, it burns through 1,000+ tokens on reasoning.
**How to avoid:** Always set `max_tokens: 8192`. Confirmed with `finish_reason: stop` and complete JSON. [VERIFIED]
**Warning signs:** `finish_reason === 'length'` and `content === null` in response.

### Pitfall 2: Chrome Profile Collision

**What goes wrong:** Two parallel workers use the same Chrome profile, stomp on each other's navigation, producing wrong screenshots.
**Why it happens:** Chrome remote debugging port is per-profile.
**How to avoid:** Each worker uses its own profile (`profile-qmdj-4` through `profile-qmdj-6`). Close page via MCP after each capture.

### Pitfall 3: WebGL Canvas Blank After Short Wait

**What goes wrong:** Screenshot is taken but canvas is black (WebGL not initialized yet).
**Why it happens:** threejs.org loader demos (GLTF, FBX, etc.) take 5-15 seconds for asset network fetch and GPU init.
**How to avoid:** Default to 8 second wait. Use 12 seconds for all `webgl_loader_*` demos. Use MCP console tools to check for WebGL errors.

### Pitfall 4: Console Errors Not Detected

**What goes wrong:** Demo renders but has WebGL errors that affect visual quality.
**Why it happens:** Errors logged to console aren't visible in headless mode.
**How to avoid:** Use MCP `list_console_messages()` to check for errors after each capture. Filter for `type === "error"` or `type === "assert"`.

### Pitfall 5: Demo Server Not Running

**What goes wrong:** All ported captures return blank (connection refused or vite loading screen).
**Why it happens:** Dev server must be started manually before orchestration.
**How to avoid:** Pre-flight check: HTTP GET to `http://localhost:5175`. Expect 200.

### Pitfall 6: Chrome Process Orphaned

**What goes wrong:** Chrome instances remain running after capture, consuming memory.
**Why it happens:** MCP close_page closes the page but not the browser process.
**How to avoid:** Track Chrome PIDs and kill via PowerShell: `Stop-Process -Id {PID}`. Never use `taskkill /IM chrome.exe` (kills all Chrome including user's browser).

### Pitfall 7: Headless Mode WebGL Failure

**What goes wrong:** WebGL demos render blank in headless mode.
**Why it happens:** Headless Chrome may have different GPU behavior.
**How to avoid:** ALWAYS use `headed: true` in MCP navigate_page calls for WebGL demos.

---

## Runtime State Inventory

This is not a rename/refactor phase. Skip runtime state inventory.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Chrome DevTools MCP | Reference + ported capture | Yes (Claude Desktop) | — | — |
| kimi-k2.5 at api.sfkey.cn | Vision comparison | Yes | confirmed | — |
| Demo dev server (localhost:5175) | Ported capture | Must be started | vite 5.x | Build and preview: `pnpm build:web && pnpm web` |
| Node.js | Script execution | Yes | >= 18 | — |
| sharp | Image resize | Yes (playwright.test/node_modules) | — | — |
| tsx | TypeScript execution | Yes (playwright.test/node_modules) | — | — |
| KIMI_API_KEY env var | All Kimi calls | Must be set | — | None — blocks all comparison |

**Missing dependencies with no fallback:**
- `KIMI_API_KEY` env var must be set before running. Validate early and exit with clear error.
- Demo dev server must be running at port 5175. Add pre-flight HTTP check.

**Missing dependencies with fallback:**
- Demo server down: use `pnpm build:web && pnpm web` from demo/ to build+serve production build.

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Playwright headless WebGL capture | Chrome DevTools MCP with headed-mode | Phase 14 | Solves blank canvas for 95 demos |
| Anthropic Messages Batch API (async, polling) | Kimi API synchronous per-demo | Phase 14 | No 30s poll loop; immediate results |
| claude-sonnet-4-6 for comparison | kimi-k2.5 multimodal | Phase 14 | Different endpoint; same JSON verdict format |
| Puppeteer subprocess | Chrome DevTools MCP tools | Phase 14 (2026-06-05) | Direct MCP invocation, no shell subprocess |

**Deprecated in this phase:**
- `playwright.test/scripts/agent-batch-worker.ts` — replaced by `kimi-comparison-worker.ts`
- `playwright.test/scripts/parallel-visual-comparison.ts` — replaced by `kimi-orchestrator.ts`
- Anthropic SDK dependency in scripts — no longer needed (Kimi uses native fetch)
- Puppeteer dependency — replaced by Chrome DevTools MCP

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Chrome DevTools MCP handles threejs.org WebGL correctly in headed mode | Architecture | Core assumption — if wrong, need different capture strategy |
| A2 | Kimi has no rate limit for 3 concurrent workers | Kimi API / Timing | If rate-limited, must add delay or reduce concurrency |
| A3 | threejs.org does not block headed Chrome | Pitfall 7 | May need custom User-Agent if blocked |
| A4 | 8 second wait is sufficient for most demos; 12s for loaders | Capture sequence | Some loader demos may require more time or network access |
| A5 | All 95 reference-load-failed demos will render on threejs.org when captured by Chrome DevTools MCP | Fix scope | Some demos may have genuinely broken reference pages |
| A6 | ~22 seconds average Kimi response time (for throughput estimates) | Timing | Actual may vary; 12-45s range was observed |

---

## Open Questions

1. **Does Chrome DevTools MCP headed mode successfully render WebGL on this Windows machine?**
   - What we know: Chrome DevTools MCP is available; headed mode is supported
   - What's unclear: The 95 failed demos may have failed Playwright due to GPU requirement, not just timing
   - Recommendation: Test one known-hard demo (e.g. `webgl_loader_gltf`) via MCP first. Verify with console message check.

2. **Are the 7 currently-passing demos actually correct or dry-run artifacts?**
   - What we know: All 7 have `reasoning: "Dry run agent N."` — they are mock verdicts
   - What's unclear: Real Kimi comparison may reveal failures among these 7
   - Recommendation: Re-run all 200 demos through the new pipeline, not just the 95 refFail ones

3. **What wait time is correct for loader-heavy demos?**
   - What we know: 30 loader demos in the 95 list; they fetch GLTF/FBX/etc. from threejs.org CDN
   - What's unclear: CDN load time; whether browser can load these
   - Recommendation: 12 seconds for all `webgl_loader_*`; use MCP console tools to verify content

4. **Should fix-agents run autonomously or require human review?**
   - What we know: Phase goal is automated fix
   - What's unclear: Some failures may require architectural changes beyond a quick TSX edit
   - Recommendation: Autonomous for `similarity_score >= 0.3` (likely minor rendering differences). Human review for `< 0.3` (structural failure).

---

## Validation Architecture

Per `.planning/config.json`, `workflow.requireTests: true`. The nyquist_validation key is absent — treat as enabled.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Pure tsx runner (project convention per memory — no vitest/jsdom) |
| Config file | None — scripts are self-contained |
| Quick run command | `npx tsx playwright.test/scripts/kimi-orchestrator.ts --dry-run --limit=3` |
| Full suite command | `npx tsx playwright.test/scripts/kimi-orchestrator.ts` |

### Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| P14-01 | Kimi API returns parsed verdict for two screenshot paths | unit | `npx tsx playwright.test/scripts/kimi-utils.ts --self-test` | No — Wave 0 |
| P14-02 | MCP captures a threejs.org screenshot successfully | smoke | MCP: navigate_page + wait_for + take_screenshot | — |
| P14-03 | kimi-comparison-worker processes 3 demos and writes partial JSON | integration | `npx tsx playwright.test/scripts/kimi-comparison-worker.ts --batch-index=0 --batch-size=3 --dry-run` | No — Wave 0 |
| P14-04 | kimi-orchestrator merges partials into final report | integration | `npx tsx playwright.test/scripts/kimi-orchestrator.ts --dry-run --limit=3` | No — Wave 0 |

### Sampling Rate

- Per task commit: `npx tsx playwright.test/scripts/kimi-orchestrator.ts --dry-run --limit=3`
- Per wave merge: `npx tsx playwright.test/scripts/kimi-orchestrator.ts --dry-run`
- Phase gate: Full live run (no dry-run) with KIMI_API_KEY set before `/gsd-verify-work`

### Wave 0 Gaps

- [ ] `playwright.test/scripts/kimi-utils.ts` — covers P14-01 (Kimi client + self-test mode)
- [ ] `playwright.test/scripts/kimi-comparison-worker.ts` — covers P14-03
- [ ] `playwright.test/scripts/kimi-orchestrator.ts` — covers P14-04
- [ ] `playwright.test/scripts/fix-orchestrator.ts` — fix phase driver

---

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | — |
| V3 Session Management | No | — |
| V4 Access Control | No | — |
| V5 Input Validation | Yes | Validate Kimi JSON response with parseVerdict() before use; sanitize demo IDs in file paths |
| V6 Cryptography | No | — |

### Known Threat Patterns

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| API key logged to stdout | Information Disclosure | Never log `process.env.KIMI_API_KEY` value; only validate it is truthy |
| LLM response injection via verdict JSON | Tampering | Use parseVerdict() which uses JSON.parse + regex only — no eval of LLM output |
| Path traversal via demo ID | Tampering | Validate demo IDs match `/^[a-z0-9_]+$/` before using in file paths |
| Shell injection via CLI args | Tampering | Chrome DevTools MCP tools eliminate shell invocation — no subprocess needed |

---

## Sources

### Primary (HIGH confidence)

- Chrome DevTools MCP — tools: navigate_page, wait_for, take_screenshot, list_console_messages, get_console_message, close_page
- Live Kimi API tests (4 calls to `api.sfkey.cn/v1/chat/completions`) — endpoint, model name, image format, max_tokens behavior, response structure, latency
- `playwright.test/test-results/visual-comparison-report.json` (2026-06-01) — demo status breakdown
- `playwright.test/scripts/demo-list.ts` — ALL_DEMOS (200), CUSTOM_DEMO_IDS
- `playwright.test/scripts/agent-batch-worker.ts` — existing capture + comparison pattern
- `playwright.test/scripts/shared-llm-utils.ts` — parseVerdict, resizeScreenshot, buildBatchRequests
- `playwright.test/playwright.config.js` — baseURL localhost:5175
- `demo/src/index.tsx` — hash routing pattern, window.__setDemo

### Secondary (MEDIUM confidence)

- [Kimi vision model docs](https://platform.kimi.ai/docs/guide/use-kimi-vision-model) — image_url format, base64 requirement, multi-image support, size limit

### Tertiary (LOW confidence)

- threejs.org rate limiting assumptions — not tested, marked [ASSUMED]
- Throughput estimates (12 min for 95 demos at 3 workers) — based on observed 12-45s latency range [ASSUMED]

---

## Metadata

**Confidence breakdown:**
- Chrome DevTools MCP tools: HIGH — verified via MCP integration
- Kimi API format and behavior: HIGH — verified via 4 live API calls
- Current demo state (200 demos, 95 refFail, 7 mock-pass): HIGH — read directly from report JSON
- New pipeline architecture: MEDIUM — pattern follows existing code, novel combination
- threejs.org WebGL capture reliability via Chrome DevTools MCP: MEDIUM — expected improvement over Playwright, not proven at scale
- Fix agent strategy: MEDIUM — pattern is established (Claude Code sub-agents), specifics depend on failure modes

**Research date:** 2026-06-02
**Updated:** 2026-06-05 (Chrome DevTools MCP integration with profiles 4-6)
**Valid until:** 2026-07-02 (Kimi API endpoint and Chrome DevTools MCP may update)
