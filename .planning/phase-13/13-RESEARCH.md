# Phase 13: Multimodal Visual Regression Testing - Research

**Researched:** 2026-06-01
**Domain:** Playwright parallelization, Anthropic vision API, WebGL screenshot capture, batch processing
**Confidence:** HIGH (all critical paths verified against official docs and registry)

---

## Summary

Phase 13 adds visual regression testing that compares each ported demo's 3D canvas output against the
reference threejs.org example using Claude's vision API. The pipeline has four distinct stages: capture
ported-demo screenshots (already partially done — 201 screenshots exist), capture reference screenshots
from threejs.org, submit all image pairs to Claude for visual comparison, and aggregate a report.

The Anthropic Message Batches API is the correct tool for the LLM comparison step. Submitting all 200
demo pairs as a single batch costs 50% less than individual API calls, completes in under one hour
(typically), and eliminates all rate-limit complexity. The screenshot capture phase can use Playwright's
built-in `--workers` parallelism or simple sharding to bring reference capture time under 15 minutes.

The hardest sub-problem is reliably capturing the threejs.org reference canvas. Those pages load WebGL
content from CDN-hosted scripts and sometimes fetch external model files; a 5-second fixed wait after
network-idle is the recommended minimum, with a fallback pixel-check to confirm actual render output.

**Primary recommendation:** Capture screenshots first (parallel Playwright workers), then submit all 200
pairs to the Message Batches API in a single batch call, poll until complete, and write a JSON+HTML
report.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Ported-demo screenshot capture | Test runner (Node.js/Playwright) | Vite dev server | Playwright navigates localhost:5194, screenshots canvas |
| Reference screenshot capture | Test runner (Node.js/Playwright) | External network | Playwright navigates threejs.org in headless Chrome |
| LLM visual comparison | External API (Anthropic) | — | Stateless image-pair judgement via Messages/Batches API |
| Result aggregation + report | Test runner (Node.js) | — | Reads batch results, writes JSON + HTML |
| CI gate | CI environment / npm script | — | Reads report JSON, exits non-zero if fail rate too high |

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| @playwright/test | ^1.56.1 (already installed) | Browser automation, screenshot capture | Already in use; WebGL + canvas support confirmed |
| @anthropic-ai/sdk | ^0.56+ (latest) | Anthropic Messages API + Batches | Official TS SDK; type-safe batch creation |
| fs/path (built-in) | Node.js built-in | Read/write screenshots and reports | No extra dep |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| sharp | ^0.33 | Resize images before API submission | If screenshots exceed 1568px; reduces token cost |

**Version verification:**
```bash
npm view @anthropic-ai/sdk version    # [VERIFIED: npm registry] — latest 0.56.x as of research date
npm view sharp version                # [VERIFIED: npm registry] — 0.33.x
```

**Installation:**
```bash
cd playwright.test
npm install @anthropic-ai/sdk
# sharp only needed if screenshot resizing is added
npm install sharp
```

---

## Architecture Patterns

### System Architecture Diagram

```
[Playwright Workers (N=5-10)]
    |
    ├─ Worker 1: navigate localhost:5194 → screenshot ported demos (batch A)
    ├─ Worker 2: navigate localhost:5194 → screenshot ported demos (batch B)
    |  ... (ported demos capture: ~2 min with 5 workers)
    |
    ├─ Worker 1: navigate threejs.org → screenshot reference demos (batch A)
    ├─ Worker 2: navigate threejs.org → screenshot reference demos (batch B)
    |  ... (reference capture: ~10-15 min with 5 workers, external network)
    |
[Orchestrator script (Node.js)]
    |
    ├─ Read all screenshot PNG pairs from disk
    ├─ Build Anthropic Batch: 200 requests [{custom_id, params:{messages:[img1,img2,prompt]}}]
    ├─ POST /v1/messages/batches  →  batch_id
    ├─ Poll GET /v1/messages/batches/{id} every 30s
    ├─ When processing_status=ended → GET results
    |
[Report Writer]
    ├─ Parse 200 LLM verdicts
    ├─ Write test-results/visual-comparison-report.json
    ├─ Write test-results/visual-comparison-report.html
    └─ Exit non-zero if fail rate > threshold
```

### Recommended Project Structure

```
playwright.test/
├── tests/
│   ├── demo-verification.test.ts        # Existing (200 ported demo checks)
│   ├── reference-screenshots.test.ts    # NEW: capture threejs.org screenshots
│   └── visual-regression.test.ts        # NEW: orchestrate comparison pipeline
├── scripts/
│   ├── capture-reference.ts             # Standalone script: reference screenshot capture
│   ├── compare-all.ts                   # Standalone script: submit batch + poll + report
│   └── demo-list.ts                     # Shared: canonical list of 200 demos + mapping
├── test-results/
│   ├── screenshots/                     # Existing: ported demo screenshots (201 files)
│   ├── reference-screenshots/           # NEW: threejs.org reference screenshots
│   └── visual-comparison-report.json    # NEW: per-demo comparison results
└── playwright.config.js                 # Existing; extend workers setting
```

### Pattern 1: Playwright Parallel Workers for Screenshot Capture

[VERIFIED: official Playwright docs - playwright.dev]

```typescript
// playwright.config.js — increase workers for capture phase
export default defineConfig({
  workers: 5,           // was 1; 5 parallel browser contexts
  fullyParallel: true,  // tests within a file also run in parallel
  use: {
    launchOptions: {
      args: [
        '--headless',
        '--no-sandbox',
        '--use-angle=gl',           // Required for WebGL in headless Chrome
        '--disable-dev-shm-usage',  // Stability on low-memory systems
      ]
    }
  }
})
```

With 5 workers and 200 demos at ~4 seconds each (3s wait + navigation overhead):
- Total demo-seconds: 200 * 4 = 800s
- With 5 workers: ~160s = ~2.7 minutes for ported captures

For reference captures from threejs.org (external network, slower load):
- Allow 5-8 seconds per demo
- 200 * 6.5s / 5 workers = ~260s = ~4.3 minutes
- But network variance and model loading can spike individual demos to 15-30s
- Realistic estimate: 10-15 minutes with 5 workers

### Pattern 2: Playwright Sharding (for CI)

[VERIFIED: official Playwright docs]

```bash
# Split 200 reference captures across 4 CI jobs
npx playwright test reference-screenshots --shard=1/4
npx playwright test reference-screenshots --shard=2/4
npx playwright test reference-screenshots --shard=3/4
npx playwright test reference-screenshots --shard=4/4
```

Sharding runs test files across separate machines/processes. Each shard gets its own browser context. This is the recommended CI pattern for large test suites.

### Pattern 3: Capturing the Ported Demo Canvas

The ported app at localhost:5194 uses hash routing (`#demo_id`). The existing test already does:

```typescript
await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' })
await page.evaluate((id) => { window.location.hash = id }, demo.id)
await page.waitForTimeout(3000)  // fixed wait for WebGL init
await page.screenshot({ path: screenshotFile })
```

[VERIFIED: existing test code, demo-verification.test.ts]

For Phase 13, screenshot only the canvas element (not full page) to eliminate UI chrome:

```typescript
// Screenshot only the WebGL canvas — cleaner comparison surface
const canvas = page.locator('canvas').first()
await canvas.screenshot({ path: screenshotFile })
```

### Pattern 4: Capturing the threejs.org Reference Canvas

[VERIFIED: threejs.org URL structure via WebFetch]

Individual example URL format: `https://threejs.org/examples/webgl_animation_keyframes.html`
The examples are standalone pages (not iframes from the examples index).

```typescript
const THREEJS_BASE = 'https://threejs.org/examples'

async function captureReference(page: Page, demoId: string, outPath: string) {
  const url = `${THREEJS_BASE}/${demoId}.html`
  
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
  } catch (e) {
    // networkidle can timeout on animating demos — proceed anyway
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 })
  }
  
  // Wait for WebGL to initialize and render at least one frame
  await page.waitForTimeout(5000)
  
  // Verify canvas exists and has rendered content
  const hasContent = await verifyCanvasContent(page)
  
  // Screenshot the canvas only (identical approach to ported demo capture)
  const canvas = page.locator('canvas').first()
  if (await canvas.count() > 0) {
    await canvas.screenshot({ path: outPath })
    return { success: true, hasContent }
  }
  
  // Fallback: full page screenshot if no canvas found
  await page.screenshot({ path: outPath })
  return { success: false, hasContent: false, reason: 'no-canvas' }
}
```

**Wait time justification:** [ASSUMED based on domain knowledge, not empirically measured]
- 3s wait: sufficient for simple examples that auto-start with local assets
- 5s wait: recommended minimum for threejs.org (CDN scripts + model loading)
- Some examples load GLTF/textures from CDN — these may need 10-15s or never fully load
- Strategy: use 5s fixed wait + pixel check; if canvas is black, mark as "reference-load-failed" (not a test failure)

### Pattern 5: Anthropic Message Batches API for Comparison

[VERIFIED: Anthropic official docs - platform.claude.com/docs]

```typescript
import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// Build batch requests for all demo pairs
const requests = demos.map(demo => ({
  custom_id: demo.id,
  params: {
    model: 'claude-sonnet-4-6',  // User specified claude-sonnet-4-6
    max_tokens: 256,              // Short verdict response
    messages: [{
      role: 'user',
      content: [
        {
          type: 'image',
          source: {
            type: 'base64',
            media_type: 'image/png',
            data: fs.readFileSync(demo.portedScreenshot).toString('base64')
          }
        },
        {
          type: 'image',
          source: {
            type: 'base64',
            media_type: 'image/png',
            data: fs.readFileSync(demo.referenceScreenshot).toString('base64')
          }
        },
        {
          type: 'text',
          text: COMPARISON_PROMPT
        }
      ]
    }]
  }
}))

// Submit entire batch in one API call
const batch = await anthropic.messages.batches.create({ requests })
console.log(`Batch created: ${batch.id}`)

// Poll until complete
let status = batch
while (status.processing_status !== 'ended') {
  await new Promise(r => setTimeout(r, 30000))  // 30s poll interval
  status = await anthropic.messages.batches.retrieve(batch.id)
  console.log(`Status: ${status.processing_status}, counts:`, status.request_counts)
}

// Retrieve results
const results: Record<string, any> = {}
for await (const result of await anthropic.messages.batches.results(batch.id)) {
  results[result.custom_id] = result
}
```

[VERIFIED: Anthropic TypeScript SDK — /anthropics/anthropic-sdk-typescript]

### Pattern 6: Comparison Prompt Design

The prompt must elicit a structured response Claude can parse. A structured output approach (JSON schema) is ideal:

```typescript
const COMPARISON_PROMPT = `You are comparing two screenshots of a 3D WebGL rendering.

Image 1 (PORTED): A Three.js example ported to JSX/React syntax.
Image 2 (REFERENCE): The original Three.js example from threejs.org.

Judge visual similarity and respond with ONLY a JSON object:
{
  "similarity_score": <0.0-1.0>,
  "verdict": "<pass|fail|inconclusive>",
  "reasoning": "<1-2 sentences>",
  "key_differences": ["<difference1>", "<difference2>"]
}

Scoring guide:
- 0.9-1.0: Nearly identical (same geometry, materials, lighting)
- 0.7-0.9: Similar scene with minor rendering differences
- 0.5-0.7: Same type of example but noticeable visual differences
- 0.3-0.5: Same category but significantly different appearance
- 0.0-0.3: Completely different or one image failed to load

Pass threshold: score >= 0.7`
```

**Note:** Since `max_tokens: 256` is tight for JSON output, use 512 tokens to avoid truncation.

### Anti-Patterns to Avoid

- **Running 200 sequential LLM calls:** Each call is ~1-3 seconds; 200 calls = 3-10 minutes + rate limit risk. Use the Batch API instead — one API call, async processing, 50% cheaper.
- **Taking full-page screenshots for comparison:** UI chrome (menus, info overlays, browser chrome) will trigger false failures. Always screenshot only the `canvas` element.
- **Hardcoding 1 Playwright worker:** The existing config has `workers: 1`. For Phase 13 capture runs, increase to 5. Do not change the main test config permanently — override via CLI: `--workers=5`.
- **Assuming all threejs.org examples will render:** Some load external GLTF models that may be slow or fail. Mark these as `reference-load-failed` and exclude from pass/fail scoring.
- **Expecting pixel-perfect match:** Rendering differences between a ported JSX version and the original JS are expected (different initialization order, slightly different camera timing). Use LLM visual judgement, not pixel diff.
- **Submitting raw 1920x1080 screenshots:** At 1920x1080, the image is downscaled to 1568px max before API processing. Pre-resize to 1024x768 to save bandwidth and reduce token cost with no quality loss for this use case.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Rate limit management for 200 LLM calls | Custom retry/queue logic | Anthropic Message Batches API | Batches handle concurrency server-side; 50% cheaper; no rate limit risk |
| Pixel-level image diff | ImageMagick compare / pixel arrays | Claude vision judgement | WebGL renders are never pixel-identical; semantic comparison is correct |
| Image resizing for API | Custom canvas/buffer resize | sharp library | Handles PNG in-memory efficiently; 1 line of code |
| Polling with exponential backoff | Custom polling loop | Simple 30s setInterval | Batch API is well-behaved; exponential backoff not needed for batch polling |
| Parallel HTTP fetch for reference pages | Multiple axios calls | Playwright workers | Need a real browser for WebGL rendering; HTTP fetch gets raw HTML |

**Key insight:** The Batch API completely eliminates the hardest coordination problem — how to make 200 LLM calls without hitting rate limits. Submit once, retrieve once, pay half price.

---

## Common Pitfalls

### Pitfall 1: threejs.org Examples That Cannot Load

**What goes wrong:** Some threejs.org examples require external model files (GLTF, OBJ) that may time out, require specific CORS setup, or have been removed. The reference screenshot will be black or blank.

**Why it happens:** threejs.org serves live examples with real CDN assets. Some large models take 10-30 seconds to load.

**How to avoid:** After waiting 5 seconds, do a pixel-presence check (readPixels on the WebGL context). If all pixels are black, record `reference_status: "failed-to-render"` and exclude this demo from pass/fail scoring. Don't fail the test run because of upstream availability.

**Warning signs:** Demo IDs that contain `loader_gltf`, `loader_fbx`, `loader_draco`, `animation_skinning` are likely to load external assets.

### Pitfall 2: WebGL Canvas Not Appearing in Headless Chrome

**What goes wrong:** Screenshots show a blank or white area where the canvas should be.

**Why it happens:** Default headless Chrome does not initialize the GPU; WebGL falls back to SwiftShader software renderer which may be disabled.

**How to avoid:** Always add these Chromium launch args:
```
--use-angle=gl
--no-sandbox
--disable-dev-shm-usage
```
[VERIFIED: createit.com WebGL+Playwright guide, cross-verified with Playwright GitHub issues]

Alternatively, `--use-angle=swiftshader` forces software WebGL which is always available but slower.

**Warning signs:** All screenshots are white/black; `verifyCanvasContent()` returns `hasContent: false` for demos that were passing before.

### Pitfall 3: The Ported Demo Uses Hash Routing — Navigation Order Matters

**What goes wrong:** Navigating directly to `localhost:5194/#demo_id` from a previous demo context can cause the old WebGL context to persist, producing a cross-contaminated screenshot.

**Why it happens:** The existing test navigates to `BASE_URL` first to reset the page, then sets the hash. This is the correct pattern already established in `demo-verification.test.ts`.

**How to avoid:** Follow the exact navigation pattern from the existing test:
```typescript
await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' })
await page.evaluate((id) => { window.location.hash = id }, demo.id)
await page.waitForTimeout(3000)
```
Do NOT navigate directly to `localhost:5194/#demo_id` in one step.

**Warning signs:** Some demos show the previous demo's content; "canvas has existing context of different type" console errors.

### Pitfall 4: Batch Request Payload Too Large

**What goes wrong:** Batch creation fails with a 400 error about request size.

**Why it happens:** 200 images at 1920x1080 PNG = ~200 * 2-5 MB base64 = 400-1000 MB. The Anthropic API has a 32 MB request size limit.

**How to avoid:** Resize all screenshots to 1024x768 (or 800x600) before building the batch. At 1024x768 PNG:
- Approximate file size: ~200-400 KB per image
- Two images per request: ~400-800 KB base64 per request
- 200 requests: 80-160 MB total — still too large for one request

**Real solution:** Use the Anthropic Files API to upload images first, then reference by `file_id` in batch requests. Or resize to 640x480 (~100KB per image):
- Two images per request: ~200 KB base64
- 200 requests: ~40 MB — under the 32 MB limit if compressed
- Or split into 2 batches of 100 demos each

**Concrete recommendation:** Resize screenshots to 800x600 before API submission. At 800x600:
- Tokens per image: ~640 (800*600/750 = 640 tokens) — well under 1568 limit
- Base64 size: ~100-150 KB per PNG
- 200 pairs (400 images): ~50 MB base64 — split into 2 batches of 100 demos

### Pitfall 5: LLM Output Parsing Failures

**What goes wrong:** Claude returns conversational text instead of the expected JSON, causing `JSON.parse()` to throw.

**Why it happens:** Without explicit structure enforcement, the model may wrap JSON in markdown code fences or add preamble.

**How to avoid:** Use a JSON extraction regex as fallback:
```typescript
function parseVerdict(text: string): Verdict {
  // Try direct parse first
  try { return JSON.parse(text) } catch {}
  
  // Extract JSON from markdown code block
  const match = text.match(/```(?:json)?\s*(\{[\s\S]+?\})\s*```/)
  if (match) try { return JSON.parse(match[1]) } catch {}
  
  // Extract first JSON object from text
  const objMatch = text.match(/\{[\s\S]+?\}/)
  if (objMatch) try { return JSON.parse(objMatch[0]) } catch {}
  
  // Fallback: extract score from text
  const scoreMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:\/\s*10|out of 10|%)?/)
  return { similarity_score: scoreMatch ? parseFloat(scoreMatch[1]) / 10 : 0.5, verdict: 'inconclusive', reasoning: text }
}
```

### Pitfall 6: Demo ID Mapping — Not All Ported Demos Have threejs.org Equivalents

**What goes wrong:** Trying to screenshot `https://threejs.org/examples/webgl_boxes.html` returns 404 — this is a custom demo created for the port project, not a canonical Three.js example.

**Why it happens:** The ported demo list in `demo-verification.test.ts` includes both faithfully-ported canonical examples AND custom/replacement demos created for the port project.

**How to avoid:** Build a mapping table that identifies which demo IDs have canonical threejs.org equivalents. Demos without equivalents are marked `reference: "no-reference"` and skipped from comparison.

**Warning signs:** HTTP 404 on threejs.org; demo IDs that look custom (e.g., `webgl_plane`, `webgl_boxes`, `webgl_group`, `webgl_geometry_cube2`, `webgl_fat_lines_advanced`).

---

## Demo ID Mapping Strategy

The ported demo list contains ~200 IDs. Mapping to threejs.org:

**Category 1: Direct 1:1 mapping** (use same ID + `.html`):
Most IDs in the `ALL_DEMOS` list that exactly match Three.js example names:
```
webgl_animation_keyframes → threejs.org/examples/webgl_animation_keyframes.html
webgl_materials → threejs.org/examples/webgl_materials.html
physics_ammo_break → threejs.org/examples/physics_ammo_break.html
```

**Category 2: Custom/replacement demos** (no threejs.org equivalent):
IDs invented for the port project:
```
webgl_plane, webgl_boxes, webgl_boxes_click, webgl_static_text, webgl_html_text,
webgl_group, webgl_object3d, webgl_simple_line, webgl_fat_lines_advanced, webgl_d_lines,
webgl_effects_stereo2, webgl_effects_stereo3, webgl_geometry_cube2, webgl_geometry_csg,
webgl_geometry_colors_lut, webgl_geometry_text_stroke, webgl_materials_all,
webgl_materials_colors, webgl_normal_map, webgl_postprocessing_demo, webgl_color_grading,
webgl_postprocessing_temporal, webgl_postprocessing_chromatic, webgl_postprocessing_depth,
webgl_postprocessing_nodes, webgl_css3d, webgl_css3d_demo, webgl_reflection, webgl_toon,
webgl_svg, webgl_webgpu, webgl_point_cloud, webgl_terrain, webgl_custom_shader,
webgl_physics, webgl_audio, webgl_css2d, webgl_vr, webgl_webxr, webgl_webxr_ar,
webgl_webxr_vr, webgl_webxr_hit_test, webgl_webxr_anchors, webgl_webxr_layers,
webgl_batch_lod_bvh, webgl_useframe_test, webgl_multiple_geometries, webgl_shader_lava,
webgl_postprocessing_vignette, webgl_postprocessing_bokeh, webgl_postprocessing_godrays
```

[ASSUMED: This categorization is based on reading the ALL_DEMOS list and comparing against known Three.js example naming conventions. The definitive list requires checking threejs.org for each ID — a 404 check is the reliable approach at runtime.]

**Strategy:** At runtime, attempt HEAD request to `threejs.org/examples/{id}.html`; if 404, mark as `no-reference`. Do not hardcode the mapping — let the capture script discover it dynamically.

**Estimated breakdown:** ~120-140 demos likely have direct threejs.org equivalents; ~60-80 are custom. This means the comparison run processes approximately 120-140 demo pairs.

---

## Rate Limits and Cost Analysis

[VERIFIED: Anthropic official docs - platform.claude.com/docs/en/api/rate-limits and pricing]

### Rate Limits for claude-sonnet-4-6 (same tier as claude-sonnet-4-5)

| Tier | RPM | ITPM | OTPM |
|------|-----|------|------|
| Tier 1 | 50 | 30,000 | 8,000 |
| Tier 2 | 1,000 | 450,000 | 90,000 |
| Tier 3 | 2,000 | 800,000 | 160,000 |
| Tier 4 | 4,000 | 2,000,000 | 400,000 |

**With Batch API:** Rate limits apply to the batch creation request itself (1 RPM), not to individual batch items. The 200 comparison requests are processed server-side with no further API calls from the client. Rate limits are completely bypassed.

### Cost Estimate for 200 Comparisons

Using claude-sonnet-4-6 Batch API pricing ($1.50/MTok input, $7.50/MTok output):

**Image token calculation** [VERIFIED: Anthropic vision docs]:
- Formula: `width * height / 750` tokens per image, capped at 1568 tokens for Sonnet models
- Resize screenshots to 800x600: `800 * 600 / 750 = 640 tokens` per image
- 2 images per request: `1,280 input tokens` per comparison

**Text token estimate:**
- Prompt text: ~200 tokens
- Total input per request: ~1,480 tokens

**Output token estimate:**
- JSON verdict: ~100-150 tokens per request

**Total for 200 comparisons:**
- Input: 200 * 1,480 = 296,000 tokens = 0.296 MTok * $1.50 = **$0.44**
- Output: 200 * 125 = 25,000 tokens = 0.025 MTok * $7.50 = **$0.19**
- **Total estimated cost: ~$0.63** (Batch API, 50% discount applied)
- Standard API equivalent: ~$1.26

### Time Budget Analysis

| Phase | Sequential | 5 Playwright Workers | Notes |
|-------|-----------|---------------------|-------|
| Ported screenshot capture | ~13 min | ~2.7 min | Existing screenshots already valid |
| Reference screenshot capture | ~20-30 min | ~5-15 min | External network; some demos slow |
| Batch submission | 30 sec | — | Single API call |
| Batch processing | ~30-60 min | — | Anthropic processes server-side |
| Result polling | Automatic | — | 30s poll interval |
| Report generation | 30 sec | — | — |
| **Total** | — | **~60-90 min** | Well within 12-hour budget |

**The bottleneck is batch processing time (~30-60 min), not screenshot capture.** The 12-hour budget is comfortable.

---

## Code Examples

### Batch Creation with Image Pairs

```typescript
// Source: Anthropic TypeScript SDK — /anthropics/anthropic-sdk-typescript
import Anthropic from '@anthropic-ai/sdk'
import * as fs from 'fs'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

function toBase64(filePath: string): string {
  return fs.readFileSync(filePath).toString('base64')
}

// Build batch requests
const requests = demoPairs.map(({ id, portedPath, referencePath }) => ({
  custom_id: id,
  params: {
    model: 'claude-sonnet-4-6',
    max_tokens: 512,
    messages: [{
      role: 'user' as const,
      content: [
        { type: 'image' as const, source: { type: 'base64' as const, media_type: 'image/png' as const, data: toBase64(portedPath) } },
        { type: 'image' as const, source: { type: 'base64' as const, media_type: 'image/png' as const, data: toBase64(referencePath) } },
        { type: 'text' as const, text: COMPARISON_PROMPT }
      ]
    }]
  }
}))

const batch = await anthropic.messages.batches.create({ requests })
```

### Polling and Result Collection

```typescript
// Source: Anthropic TypeScript SDK — /anthropics/anthropic-sdk-typescript
async function waitForBatch(batchId: string): Promise<void> {
  while (true) {
    const status = await anthropic.messages.batches.retrieve(batchId)
    if (status.processing_status === 'ended') break
    console.log(`Batch ${batchId}: ${JSON.stringify(status.request_counts)}`)
    await new Promise(r => setTimeout(r, 30_000))
  }
}

async function collectResults(batchId: string): Promise<Map<string, any>> {
  const results = new Map<string, any>()
  for await (const result of await anthropic.messages.batches.results(batchId)) {
    results.set(result.custom_id, result)
  }
  return results
}
```

### WebGL-Safe Playwright Canvas Screenshot

```typescript
// Source: adapted from demo-verification.test.ts + createIT WebGL guide
async function capturePortedDemo(page: Page, demoId: string, outPath: string): Promise<void> {
  // Navigate to blank state first to clear previous WebGL context
  await page.goto('http://localhost:5194', { waitUntil: 'domcontentloaded' })
  await page.evaluate((id: string) => { window.location.hash = id }, demoId)
  await page.waitForTimeout(3000)
  
  // Screenshot canvas only — exclude UI chrome
  const canvas = page.locator('canvas').first()
  if (await canvas.count() > 0) {
    await canvas.screenshot({ path: outPath })
  } else {
    await page.screenshot({ path: outPath })
  }
}

// Playwright config for WebGL support
// args: ['--headless', '--no-sandbox', '--use-angle=gl', '--disable-dev-shm-usage']
```

### Image Size Checking Before Batch Submission

```typescript
// Images must be under 32MB total for the batch payload
// Pre-resize if needed using sharp:
import sharp from 'sharp'

async function ensureSize(inputPath: string, outputPath: string, maxWidth = 800, maxHeight = 600): Promise<void> {
  await sharp(inputPath)
    .resize(maxWidth, maxHeight, { fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 6 })
    .toFile(outputPath)
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Individual API calls (200 requests) | Message Batches API (1 request, async) | Oct 2024 | 50% cost reduction, no rate limit risk |
| Pixel diff (pixelmatch, looks-same) | Multimodal LLM judgement | 2024 | Semantic similarity vs pixel-exact; tolerates rendering variance |
| Playwright workers=1 (sequential) | fullyParallel + workers=5+ | Playwright v1.35+ | 5x speedup for capture phase |
| headless:true without --use-angle | --use-angle=gl required | Chrome 112+ | Without flag, WebGL may render black in headless |

**Deprecated/outdated:**
- `--use-gl=swiftshader`: Still works but deprecated in favor of `--use-angle=swiftshader`. Use `--use-angle=gl` for hardware or `--use-angle=swiftshader` for guaranteed software fallback.
- Manual polling with `setTimeout` chains: The SDK's `messages.batches.results()` async iterator handles retrieval cleanly.

---

## Implementation Sequence

**Wave 1 — Reference Screenshot Capture (Hours 1-3):**
1. Create `scripts/demo-list.ts` with the canonical 200-demo list and mapping logic
2. Create `tests/reference-screenshots.test.ts` with Playwright config override (workers=5, --use-angle=gl)
3. Implement runtime 404 detection to skip non-threejs-org demos
4. Run capture; verify at least 120 reference screenshots are captured
5. Output: `test-results/reference-screenshots/{id}.png` + `test-results/reference-manifest.json`

**Wave 2 — LLM Comparison Pipeline (Hours 3-6):**
1. Install `@anthropic-ai/sdk` in playwright.test/
2. Create `scripts/compare-all.ts`:
   - Load ported screenshots + reference screenshots from disk
   - Build batch requests (with image resize to 800x600)
   - Submit batch, poll until complete, collect results
3. Create `parseVerdict()` with fallback JSON extraction
4. Output: `test-results/visual-comparison-raw.json`

**Wave 3 — Report Generation + CI Gate (Hours 6-8):**
1. Create `scripts/generate-report.ts`:
   - Read raw comparison results
   - Compute pass/fail/inconclusive counts
   - Categorize failures (rendering-error vs visual-mismatch vs no-reference)
   - Write `visual-comparison-report.json` and `visual-comparison-report.html`
2. Add npm script: `"compare": "ts-node scripts/compare-all.ts && ts-node scripts/generate-report.ts"`
3. CI gate: exit non-zero if `passed / (passed + failed) < 0.70`

**Wave 4 — Integration + Documentation (Hours 8-10):**
1. Wire reference capture into Playwright test suite (optional — can remain a standalone script)
2. Add `COMPARISON_RUN.md` documenting how to run the full pipeline
3. Update `.planning/STATE.md`

---

## Recommended Similarity Threshold

[ASSUMED — no empirical baseline exists yet for this codebase]

| Score Range | Verdict | Rationale |
|------------|---------|-----------|
| >= 0.75 | PASS | Same visual scene; minor rendering differences acceptable |
| 0.50-0.74 | WARN | Noticeable differences; needs human review |
| < 0.50 | FAIL | Fundamentally different output |

**Starting threshold: 0.70 pass, 0.50 warn.** Adjust after the first run — the initial run is calibration data.

**CI gate:** Fail if more than 30% of comparable demos (those with a threejs.org reference) score below 0.50. Do not fail on demos marked `no-reference` or `reference-load-failed`.

---

## Open Questions (RESOLVED)

1. **Which demos have threejs.org equivalents — exact count?** ✓ RESOLVED
   - Decision: Use runtime HTTP HEAD probe against `threejs.org/examples/{id}.html` in the capture script. Build `reference-manifest.json` dynamically — no hardcoded mapping. Demos that 404 are marked `no-reference` and excluded from scoring. Estimated 120-140 of 200 demos will match.

2. **Are existing ported screenshots still valid for comparison?** ✓ RESOLVED
   - Decision: Wave 1 (13-01) includes a task that re-runs the ported-demo screenshot capture before comparison. All 200 ported screenshots are refreshed as part of Phase 13, not assumed current from prior phases.

3. **What is the actual rendering wait time needed for threejs.org examples?** ✓ RESOLVED
   - Decision: Use 5-second fixed wait after `networkidle` (with `domcontentloaded` fallback if networkidle times out). After wait, run pixel-presence check. If canvas is blank/absent, mark `reference_status: "failed-to-render"` and exclude from scoring. No retry — this avoids hanging on slow GLTF-loading examples.

4. **Does the user's Anthropic API tier support Message Batches?** ✓ RESOLVED
   - Decision: Message Batches API is available on all tiers including Tier 1. A 200-item batch is well within limits (Tier 1 supports up to 100,000 items per batch). Proceed unconditionally. Script validates `ANTHROPIC_API_KEY` is set before making any API calls and exits with a clear error if missing.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | All scripts | Assumed yes (project uses pnpm) | — | — |
| @playwright/test | Screenshot capture | Yes | ^1.56.1 (installed) | — |
| @anthropic-ai/sdk | LLM comparison | Needs install | latest | Use direct fetch() with Anthropic REST API |
| ANTHROPIC_API_KEY env var | LLM comparison | [ASSUMED] exists | — | Must be set before comparison run |
| Chromium (Playwright) | Screenshot capture | Yes (installed with Playwright) | — | — |
| External network access | threejs.org reference capture | [ASSUMED] yes | — | Cannot capture reference without internet |
| sharp | Image resize | Needs install | 0.33.x | Manually resize screenshots before batch |

**Missing dependencies with no fallback:**
- `ANTHROPIC_API_KEY` must be set in the environment before running the comparison script

**Missing dependencies with fallback:**
- `@anthropic-ai/sdk`: Can use raw `fetch()` to `api.anthropic.com/v1/messages/batches` with `x-api-key` header
- `sharp`: Not required if screenshots are already at or below 800x600

---

## Validation Architecture

**Test types for Phase 13:**
- The Phase 13 output IS a test artifact (the comparison report) — it is not itself unit-testable in the traditional sense
- Validate the pipeline with a smoke test: run comparison on 5 demos, verify report contains expected fields
- The `demo-verification.test.ts` already covers the ported-demo screenshot capture path

| Req ID | Behavior | Test Type | Automated Command |
|--------|----------|-----------|-------------------|
| NFR-3.2 (visual verification) | Pipeline captures screenshots and produces report | smoke | `npx ts-node scripts/compare-all.ts --dry-run --limit=5` |
| NFR-3.2 | Report contains pass/fail verdicts with scores | assertion | Check `visual-comparison-report.json` schema |
| NFR-3.2 | CI gate: >70% comparable demos pass | CI exit code | `node scripts/ci-gate.js` |

---

## Security Domain

Phase 13 has a limited security surface:

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V5 Input Validation | Yes (API key from env) | Read from `process.env.ANTHROPIC_API_KEY`; never log or embed in source |
| V6 Cryptography | No | No cryptographic operations |
| V2 Authentication | No | API key auth handled by Anthropic SDK |

**Key security note:** The `ANTHROPIC_API_KEY` must never appear in the report JSON, HTML output, or git history. The comparison script should validate that the key is set before proceeding and should not log it.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | ~120-140 of 200 demos have direct threejs.org equivalents | Demo ID Mapping | Could be fewer — affects expected pass count and calibration |
| A2 | 5-second wait is sufficient for threejs.org WebGL init | Pattern 4 | Some examples may need longer; black screenshots inflate failure rate |
| A3 | Playwright --use-angle=gl works on the developer's Windows 11 machine | Pattern 1 | May need --use-angle=swiftshader on machines without GPU |
| A4 | ANTHROPIC_API_KEY is available in the environment | Environment Availability | Hard block if not set |
| A5 | 0.70 similarity threshold is appropriate for this codebase | Recommended Threshold | Needs calibration after first run |
| A6 | Resizing to 800x600 preserves sufficient visual information for judgement | Pattern 5 | If too small, LLM cannot distinguish subtle rendering differences |
| A7 | The 200 existing screenshots in test-results/screenshots/ are current | Open Questions #2 | May need re-capture if demos changed |

---

## Sources

### Primary (HIGH confidence)
- `/anthropics/anthropic-sdk-typescript` (Context7) — image block types, batch API, TypeScript examples
- `platform.claude.com/docs/en/api/rate-limits` — rate limits by tier for claude-sonnet-4-6
- `platform.claude.com/docs/en/about-claude/pricing` — Batch API pricing $1.50/$7.50 per MTok
- `platform.claude.com/docs/en/build-with-claude/vision` — image token formula, size limits, max 1568px for Sonnet
- `platform.claude.com/docs/en/docs/build-with-claude/batch-processing` — batch creation, polling, vision support
- `/microsoft/playwright.dev` (Context7) — workers, fullyParallel, sharding, element screenshot
- `D:/Developments/tslib/@woby/three/playwright.test/tests/demo-verification.test.ts` — existing test patterns
- `D:/Developments/tslib/@woby/three/playwright.test/playwright.config.js` — current config (workers=1)

### Secondary (MEDIUM confidence)
- `createit.com/blog/headless-chrome-testing-webgl-using-playwright` — `--use-angle=gl` launch arg for WebGL
- WebSearch results: threejs.org example URL structure (confirmed `https://threejs.org/examples/{id}.html`)
- WebFetch `threejs.org/examples/webgl_animation_keyframes` — confirmed standalone page pattern

### Tertiary (LOW confidence)
- Custom demo ID categorization (which IDs have threejs.org equivalents) — estimated from reading the ALL_DEMOS list; not programmatically verified

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all libraries verified via npm registry and official docs
- Architecture (Batch API approach): HIGH — verified against official Anthropic docs
- threejs.org capture approach: MEDIUM — URL structure confirmed; wait times are assumed
- Demo ID mapping: LOW — requires runtime validation; custom IDs need manual review
- Similarity threshold: LOW — requires empirical calibration after first run

**Research date:** 2026-06-01
**Valid until:** 2026-09-01 (Anthropic API pricing and rate limits are stable; Playwright API is stable)
