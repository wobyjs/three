# Phase 15: Sync actual coverage — implemented / tested / visually checked vs planned - Research

**Researched:** 2026-06-17
**Domain:** Documentation reconciliation + Three.js example porting (init3D pattern, dv CLI visual verification)
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01: Porting Pattern (LOCKED)** — Use `init3D` container-ref pattern, NOT reactive JSX wrappers. Header `/** @jsxImportSource woby */`, imperative Three.js code in `const init3D = (container: HTMLElement)`, cleanup closure `let _cleanupFn`, export via `ref` on a div.
- **D-02: 1:1 Fidelity Rule (LOCKED)** — Every port must reproduce the original exactly: same scene, same camera, same animation loop, same GUI/stats/keyboard events, same external asset loading.
- **D-03: Visual Verification Workflow (LOCKED)** — Before registering: start dev server, navigate via dv, screenshot ported + reference, send both images to Claude in THIS conversation for approval. Register only on approval.
- **D-04: Registration (LOCKED)** — After visual approval, add to `demo/src/registry.ts` under the correct category. ID must match Three.js filename. Component must lazy-import the new TSX file.
- **D-05: Skills (LOCKED)** — Use `/dom` skill (dv CLI / Chrome DevTools Protocol) for browser automation; `/woby` skill for any reactive patterns.
- **D-06: Documentation Audit (LOCKED)** — Before porting work: count actual TSX files, count registered demos, compare vs STATE.md claims, update STATE.md and ROADMAP.md, note test-results verdicts.

### Claude's Discretion

- Category assignment in registry.ts when ambiguous
- Screenshot output directory (use `playwright.test/screenshots/ported/` for consistency)
- dv CLI profile to use (pick any available non-conflicting port)

### Deferred Ideas (OUT OF SCOPE)

- Thumbnail generation (screenshots for sidebar cards)
- Automated test suite per example
- WebGPU examples (require WebGPU renderer, defer until stable)
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| REQ-15-01 | Accurate per-phase counts from `demo/src/` | Ground truth: 203 registered demos, 252 total TSX files, 52 unregistered demo ports |
| REQ-15-02 | Test-suite pass counts | Kimi comparison: 8 demos passed visual verification (similarity >= 0.7) out of 134 compared |
| REQ-15-03 | `test-results/` comparison output reflected in docs | `kimi-comparison-report-fixed.json` has all verdicts; 8 names to mark as visually verified |
| REQ-15-04 | Continue porting missing examples using init3D + visual verification | 52 ported-but-unregistered files exist; REMAINING_WORK.md lists 200+ webgl still missing |
</phase_requirements>

---

## Summary

The project's planning documents are significantly out of sync with reality. STATE.md claims 469 ported at 74%, while the actual file system shows **203 unique demos registered** in `registry.ts`, with an additional **52 ported TSX files that exist but are not yet registered**. The true "ported and visible in the app" count is 203; the true "ported including unregistered" count is approximately 255. REMAINING_WORK.md's claim of 104/581 (18%) is even more stale — it predates all the Phase 2-12 work.

The Kimi visual comparison pipeline (Phase 14) ran against 134 demos and produced verdicts for all of them. Only **8 demos passed** (similarity >= 0.7), meaning 108 have rendering issues compared to the Three.js reference. These results are in `playwright.test/test-results/kimi-comparison-report-fixed.json` but are not reflected in any planning document.

Phase 15 has two concrete sequential work streams: (1) a documentation sync wave to reconcile all numbers, and (2) a porting continuation wave that follows the init3D pattern with mandatory dv CLI visual verification before each registration.

**Primary recommendation:** Fix documentation first (one task), then work through the 52 unregistered files to assess and register them, then continue porting from REMAINING_WORK.md's webgl high-priority list using the established init3D pattern.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Documentation sync (STATE.md, ROADMAP.md) | Planner/executor | — | File edits, no runtime involved |
| Demo file count auditing | Executor (file system) | — | Shell commands against demo/src |
| Example porting (TSX creation) | Frontend (demo/src) | — | Imperative Three.js wrapped in Woby JSX div-ref |
| Visual verification (screenshot + compare) | dv CLI + Claude vision | playwright.test/ | dv takes screenshots; Claude compares |
| Registry registration | Frontend (registry.ts) | — | Lazy import entry in CategoryEntry |
| Dev server (renders demos) | Vite (demo/) | — | `pnpm dev` in demo/ → localhost:5173 |
| Comparison results storage | test-results/ | — | JSON reports from kimi-orchestrator |

---

## Ground Truth: Current Coverage Numbers

[VERIFIED: file system scan, 2026-06-17]

### File System Counts (demo/src/)

| Metric | Count | Notes |
|--------|-------|-------|
| Total TSX files in `demo/src/` | 256 | Includes infrastructure |
| Infrastructure files (index, menu-frame, canvas-frame, AutoSizeCanvas, Sector, Box3ce) | 6 | Non-demo files |
| **Demo TSX files (actual example ports)** | **250** | 256 minus 6 infrastructure |
| **Registered in registry.ts (unique demo IDs)** | **200** | Verified by parsing `{ id: '...'` entries, deduplicating |
| Registry entries with duplicate IDs (bugs) | 3 | `css3d_periodictable`, `webgl_css3d`, `webgl_textures_cube` appear in 2 categories each |
| **Ported but NOT registered (unregistered)** | **52** | TSX files present but not imported in registry.ts |

### Registry Duplicate Bug

[VERIFIED: grep against registry.ts]

The categories `textures` and `css3d` each appear **twice** in `registry.ts`. This causes duplicate sidebar entries. Three demo IDs appear in both copies: `css3d_periodictable`, `webgl_css3d`, `webgl_textures_cube`. The fix is to merge the duplicate category blocks.

### What STATE.md Claims vs Reality

| Metric | STATE.md Claims | Ground Truth | Delta |
|--------|----------------|--------------|-------|
| Total ported | 469 (74%) | 200 registered / 250 total TSX | -269 / -219 |
| REMAINING_WORK.md | 104/581 (18%) | ~200 registered / 629 total | Stale by 14 phases |

**Root cause:** STATE.md was written by AI self-reporting phase completion targets, not file counts. The project accumulated demos across 12 phases but never did a file-system reconciliation.

### Visual Verification Status (Kimi Comparison, Phase 14)

[VERIFIED: `playwright.test/test-results/kimi-comparison-report-fixed.json`]

| Metric | Count |
|--------|-------|
| Demos entered into comparison | 134 |
| **Passed (similarity >= 0.7)** | **8** |
| Failed (similarity < 0.7) | 108 |
| Errors (could not compare) | 18 |

**8 demos with visual approval verdicts:**
1. `webgl_shadowmap_vsm`
2. `webgl_clipping_intersection`
3. `webgl_geometry_colors`
4. `webgl_interactive_cubes_gpu`
5. `webgl_lights_spotlight`
6. `webgl_lines_dashed`
7. `webgl_points_waves`
8. `webgl_postprocessing_smaa`

Screenshot inventory:
- `playwright.test/screenshots/ported/` — 223 screenshots (ported demos captured)
- `playwright.test/screenshots/reference/` — 124 screenshots (Three.js reference captured)

---

## Standard Stack

### Core (no new packages needed) [VERIFIED: package.json inspection]

| Library | Version | Purpose |
|---------|---------|---------|
| `three` | ^0.173.0 | Three.js renderer — already in demo/package.json |
| `woby` | workspace | Reactive JSX — already in demo/package.json |
| `@woby/three` | workspace | Three.js JSX bindings — already in demo/package.json |
| `dv` (CLI) | 1.0.0 | Chrome DevTools Protocol CLI — globally installed |

### Supporting Imports Used in init3D Files [ASSUMED — pattern from existing demos]

| Import | Purpose | Pattern |
|--------|---------|---------|
| `three/examples/jsm/libs/stats.module.js` | FPS counter | All demos that show stats |
| `three/examples/jsm/libs/lil-gui.module.min.js` | GUI controls | Demos with runtime controls |
| `three/examples/jsm/controls/OrbitControls.js` | Camera orbit | Most interactive demos |
| `three/examples/jsm/loaders/GLTFLoader.js` | Model loading | Asset-loading demos |

All of these are already used in existing ported demos — no new packages required.

### No New Packages Required

This phase installs zero new npm packages. All tools are already present.

---

## Package Legitimacy Audit

No packages installed in this phase. Skipped.

---

## Architecture Patterns

### System Architecture Diagram

```
User navigates to http://localhost:5173/#<demo_id>
       |
       v
demo/src/index.tsx (Woby App, hash router)
       |
       +--> registry.ts (allDemos: CategoryEntry[])
       |         lookup by hash id
       v
DemoViewer.tsx (lazy-loads demo component)
       |
       v
demo/src/<DemoName>.tsx
  export default () => (
    <div style="width:100%;height:100%">
      <div ref={(el) => init3D(el)} style="width:100%;height:100%" />
    </div>
  )
       |
       v
init3D(container: HTMLElement)
  - Creates THREE.WebGLRenderer, appends canvas to container
  - Starts requestAnimationFrame loop
  - Returns cleanup closure stored in _cleanupFn
```

### Recommended Project Structure for New Demos

```
demo/src/
├── WebGLMyExample.tsx     # New demo file (init3D pattern)
└── registry.ts            # Add entry under correct category
```

### Pattern 1: init3D Container-Ref (Canonical)

[VERIFIED: `demo/src/WebGLCamera.tsx`]

```tsx
/** @jsxImportSource woby */
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'

let _cleanupFn: (() => void) | null = null

const init3D = (container: HTMLElement) => {
    if (_cleanupFn) { _cleanupFn(); _cleanupFn = null }

    let SCREEN_WIDTH = container.clientWidth || window.innerWidth
    let SCREEN_HEIGHT = container.clientHeight || window.innerHeight

    // ... Three.js imperative setup ...

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT)
    container.appendChild(renderer.domElement)

    let animId: number
    const animate = () => { animId = requestAnimationFrame(animate); render(); stats.update() }
    animate()

    _cleanupFn = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('resize', onResize)
        document.removeEventListener('keydown', onKeyDown)
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
        renderer.dispose()
    }
}

export const MyDemo = () => (
    <div style="width:100%;height:100%;position:relative">
        <div ref={(el: HTMLElement | null) => { if (el) init3D(el) }} style="width:100%;height:100%" />
    </div>
)
export default MyDemo
```

**Key rules:**
- Outer wrapper div is `position:relative` to contain Stats DOM element
- Inner div gets the `ref` callback that calls `init3D`
- Container size: `container.clientWidth || window.innerWidth` (fallback for zero-size cases)
- `_cleanupFn` is module-level so navigating away and back recycles properly
- `container.appendChild(renderer.domElement)` — NOT `document.body`
- Resize handler must use `container.clientWidth` not `window.innerWidth`

### Pattern 2: Asset-Loading Demo [VERIFIED: `demo/src/WebGLAnimationSkinningMorph.tsx`]

```tsx
const loader = new GLTFLoader()
loader.load('models/gltf/RobotExpressive/RobotExpressive.glb', function (gltf) {
    model = gltf.scene
    scene.add(model)
    createGUI(model, gltf.animations)
}, undefined, function (e) {
    console.error(e)
})
```

Asset paths are relative URLs resolved against `http://localhost:5173/`. The demo app serves assets from `demo/public/` (models, textures, fonts directories exist there). [VERIFIED: `demo/` directory listing shows `public/models`, `public/textures`, `public/fonts`]

### Pattern 3: Registry Registration [VERIFIED: `demo/src/registry.ts`]

```typescript
// Add inside the correct CategoryEntry's demos array:
{
    id: 'webgl_animation_walk',       // Must match Three.js example filename
    name: 'Animation Walk',           // Human-readable display name
    category: 'animation',            // Must match parent CategoryEntry.id
    component: () => import('./WebGLAnimationWalk')   // Lazy import, no extension
}
```

**Registration rules:**
- `id` must exactly match the Three.js example URL slug (e.g. `webgl_animation_walk`)
- `category` must match an existing `CategoryEntry.id` in the `categories` array
- `component` is a lazy import arrow function returning `{ default: () => JSX.Element }`
- Do NOT add a new category unless necessary; check existing categories first
- If creating a new category, add a `CategoryEntry` object to the `categories` array

### Anti-Patterns to Avoid

- **Reactive JSX element wrappers:** Do NOT wrap Three.js objects as JSX elements (`<mesh>`, `<boxGeometry>`). The `init3D` pattern is imperative only.
- **`as any` type assertions:** Explicitly forbidden by NFR-2.1. Use specific type unions (e.g., `THREE.Material & { opacity: number }`) when needed.
- **`document.body` for renderer DOM:** Always append `renderer.domElement` to the `container` argument, not `document.body`.
- **Missing cleanup:** Every event listener and animation loop MUST be cleaned up in `_cleanupFn`. Missing cleanup causes memory leaks when switching demos.
- **Window resize without container size:** Use `container.clientWidth || window.innerWidth` for all size calculations to support the contained layout.
- **Duplicate category IDs in registry:** Currently there are two `textures` blocks and two `css3d` blocks in registry.ts — this is a bug to fix during D-06 audit.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Browser screenshot | Custom CDP code | `dv screenshot --output <path>` | dv is globally installed and wraps CDP |
| Chrome profile management | Manual Chrome launch | `dv start --profile <name> --port <port>` | Profile isolation prevents conflicts |
| URL navigation | Playwright | `dv navigate --url <url> --port <port>` | Same tool chain, no extra dependency |
| GUI controls | Custom HTML | `lil-gui` from `three/examples/jsm/libs/lil-gui.module.min.js` | Already bundled with Three.js examples |
| FPS counter | Custom | `Stats` from `three/examples/jsm/libs/stats.module.js` | Standard across all Three.js examples |
| Camera orbit | Custom | `OrbitControls` from Three.js examples/jsm | Already proven in existing demos |

---

## dv CLI Reference (Visual Verification Workflow)

[VERIFIED: `dv --help`, `dv screenshot --help`, `dv start --help`, `dv profiles` — all confirmed working]

### Available Profiles

| Profile | Port | Purpose |
|---------|------|---------|
| profile-qmdj-1 | 9222 | OAuth pinned — avoid |
| profile-qmdj-2 | 9223 | Parallel testing |
| profile-qmdj-3 | 9224 | Parallel testing |
| profile-qmdj-4 | 9225 | Parallel testing |
| profile-qmdj-5 | 9226 | Parallel testing |
| profile-qmdj-6 | 9227 | Parallel testing |

**Recommendation:** Use `profile-qmdj-2` (port 9223) for visual verification — it is not used by the kimi-orchestrator workers (which use profiles 4-6) and avoids the OAuth-pinned profile-qmdj-1.

### Exact dv Command Sequence for One Demo

```bash
# Step 1: Start Chrome on a free profile (if not already running)
dv start --profile profile-qmdj-2 --port 9223 --headed

# Step 2: Start the demo dev server (in a separate terminal)
cd D:\Developments\tslib\@woby\three\demo && pnpm dev
# Dev server URL: http://localhost:5173

# Step 3: Navigate to the ported demo
dv navigate --url "http://localhost:5173/#webgl_animation_walk" --port 9223

# Step 4: Wait for canvas render (demos animate; 2-3 seconds is enough)
# No dv command for wait — use a brief pause before screenshotting

# Step 5: Screenshot the ported demo
dv screenshot --output "playwright.test/screenshots/ported/webgl_animation_walk.png" --port 9223

# Step 6: Navigate to the Three.js reference
dv navigate --url "https://threejs.org/examples/webgl_animation_walk.html" --port 9223

# Step 7: Wait for reference to render
# Brief pause

# Step 8: Screenshot the reference
dv screenshot --output "playwright.test/screenshots/ref/webgl_animation_walk.png" --port 9223

# Step 9: Send to Claude for visual approval
# In the conversation: @playwright.test/screenshots/ported/webgl_animation_walk.png
#                      @playwright.test/screenshots/ref/webgl_animation_walk.png
```

**Screenshot directory convention (from CONTEXT.md D-03):**
- Ported: `playwright.test/screenshots/ported/<id>.png`
- Reference: `playwright.test/screenshots/ref/<id>.png` (note: existing pipeline uses `reference/` but `ref/` is acceptable for new captures)

**Important:** dv operates against whichever page is currently active in the profile. After `navigate`, the screenshot captures the current page. If the demo takes time to load assets (GLTF, textures), waiting is necessary. No `dv wait` command exists — the executor must account for load time manually.

### Visual Approval Handoff to Claude

[VERIFIED: from D-03 CONTEXT.md decisions]

The executor sends image paths using the `@path` syntax in the main conversation:

```
I've ported webgl_animation_walk. Here are the screenshots for comparison:
@playwright.test/screenshots/ported/webgl_animation_walk.png
@playwright.test/screenshots/ref/webgl_animation_walk.png
```

Claude then visually compares and responds with APPROVE or REJECT + feedback. The executor must wait for Claude's explicit approval before adding the entry to `registry.ts`.

**Rejection handling:** If Claude rejects, fix the specific issues called out, re-run the demo, take new screenshots, send again. Do not register until approved.

---

## Priority Order for Porting (Continued Porting Work)

### Tier 1: Register Existing Unregistered Files (52 files) [VERIFIED: file system]

These files are already ported but not in the registry. Each needs:
1. Visual verification via dv (the file may have rendering issues — they weren't registered for a reason or were simply missed)
2. If approved: add to registry.ts
3. If broken: note for fix or skip

Key unregistered files of note:

| File | Likely Category | Notes |
|------|----------------|-------|
| `CSS2DLabel` | css2d | Phase 12 work |
| `CSS3DMixed`, `CSS3DMolecules`, `CSS3DOrthographic` | css3d | Phase 12 work |
| `MiscAnimationGroups`, `MiscBoxselection`, `MiscControlsArcball`, `MiscControlsDrag`, `MiscControlsFly`, `MiscControlsOrbit`, `MiscControlsTrackball` | controls / misc | Phase 11 misc work |
| `MiscRaycasterHelper` | misc | — |
| `SVGLines` | svg | Phase 12 |
| `WebGLAnimationWalk`, `WebGLAnimationMorph`, `WebGLAnimationMultiple`, `WebGLAnimationSkinningAdditiveBlending`, `WebGLAnimationSkinningIK`, `WebGLAnimationSkinningMorph`, `WebGLAnimationKeyframes`, `WebGLAnimationIK` | animation | Phase 4/8 work |
| `WebGLCameraLogarithmicDepthBuffer` | cameras | Phase 3 |
| `WebGLClippingStencil` | clipping | Phase 4 |
| `WebGLDepthTexture`, `WebGLFramebufferTexture` | advanced | Phase 8 |
| `WebGLGeometryNurbs` | geometries | Phase 3 |
| `WebGLLightProbe`, `WebGLLightsPhysical` | lights | Phase 3 |
| `WebGLLoaderGLTFCompressed`, `WebGLLoaderGLTFVariants` | loaders | Phase 3/8 |
| `WebGLMaterialsAlphahash`, `WebGLMaterialsBlendingCustom`, `WebGLMaterialsBumpMap`, `WebGLMaterialsCubemapRefraction`, `WebGLMaterialsDisplacementmap`, `WebGLMaterialsEnvmaps`, `WebGLMaterialsSubsurfaceScattering`, `WebGLMaterialsTextureGuid`, `WebGLMaterialsToon`, `WebGLMaterialsVideo` | materials | Phase 3/4 |
| `WebGLMultipleRenderers` | advanced | Phase 8 |
| `WebGLPostprocessingBloom`, `WebGLPostprocessingColorgrading` | postprocessing | Phase 5 |
| `WebGLShaderOcean`, `WebGLShaderSky` | advanced / environment | Phase 8 |
| `WebGLTexturesColorbar`, `WebGLTexturesCompression`, `WebGLTexturesKinetic`, `WebGLTexturesPMREMbrandt`, `WebGLTexturesSequence` | textures | Phase 3 |
| `AfterimagePass` | postprocessing | Phase 5 |
| `Particles` | particles | Phase 4 |

### Tier 2: Port From REMAINING_WORK.md (webgl priority first)

[VERIFIED: REMAINING_WORK.md + MISSING_EXAMPLES.md]

**webgl category is highest priority** with ~200 still missing. After registering unregistered files, port from REMAINING_WORK.md. Recommended sub-order within webgl:

1. Animation (walk, multiple, skinning/additive, IK, morph) — if not covered by Tier 1
2. Cameras (logarithmic depth buffer) — if not Tier 1
3. Geometry (nurbs, colors LUT, spline editor, text stroke) — partially covered by Tier 1
4. Interactive (buffergeometry, cubes GPU, cubes ortho, lines, points, raycasting)
5. Lights (lightprobes/complex, lightprobes/sponza)
6. Loaders (3mf/materials, collada/kinematics, collada/skinning, fbx/nurbs, gltf variants)
7. Materials (alphahash, blending/custom, cubemap/refraction, subsurface scattering)
8. Shaders (custom, ocean, lava) — partially covered by Tier 1
9. Shadows (pointlight, VSM)
10. Textures (cube, HDR, EXR, KTX, KTX2)

---

## Gaps and Risks in the init3D Pattern

### Risk 1: GUI Controls (lil-gui)

**What:** Many Three.js examples use `lil-gui` for runtime parameter adjustment.
**Pattern:** Import from `three/examples/jsm/libs/lil-gui.module.min.js`, create `new GUI()`, add to container (NOT `document.body`), dispose in cleanup.
**Cleanup:** `gui.destroy()` in `_cleanupFn`. [ASSUMED — based on lil-gui API]

```typescript
const gui = new GUI({ container: container })
// ... add controllers ...
_cleanupFn = () => {
    gui.destroy()
    cancelAnimationFrame(animId)
    renderer.dispose()
}
```

**Risk:** If `gui` is attached to `document.body` (as in original Three.js examples), it will not be cleaned up when switching demos and will persist as floating DOM.
**Mitigation:** Always pass `{ container }` to GUI constructor OR manually call `container.appendChild(gui.domElement)` and remove in cleanup.

### Risk 2: Asset Loading Timing for Screenshots

**What:** Demos that load GLTF models or large textures take 1-5 seconds to render their first frame.
**Risk:** `dv screenshot` taken immediately after `dv navigate` captures a blank or loading canvas.
**Mitigation:** Navigate, wait ~3-5 seconds before screenshotting asset-heavy demos. The executor must account for this manually (no dv wait command).

### Risk 3: Multiple Renderers / Splitscreen Demos

**What:** Some demos (e.g. `webgl_camera`) use `renderer.setScissor` and `renderer.setViewport` to render multiple views in one canvas.
**Pattern:** [VERIFIED: `demo/src/WebGLCamera.tsx`] This works fine — the scissor/viewport API is pure WebGL, no JSX involvement.
**Risk:** None — these already work in the codebase.

### Risk 4: External DOM Dependencies (Stats, Controls Overlay)

**What:** Stats.js and similar UI DOM elements must be appended to `container`, not `document.body`.
**Mitigation:** Pattern is established in `WebGLCamera.tsx` — `container.appendChild(stats.dom)` with `container.removeChild(stats.dom)` in cleanup.

### Risk 5: `_cleanupFn` Module-Level Singleton

**What:** Because `_cleanupFn` is module-level, it assumes only one instance of the demo is mounted at a time.
**Risk:** If a demo component is rendered twice (e.g. during React-like reconciliation), the second mount will cancel the first's cleanup.
**Mitigation:** Woby renders deterministically; this pattern is established and working across 200 demos. Not a concern in practice.

### Risk 6: TypeScript `as any` Prohibition (NFR-2.1)

**What:** Some original Three.js examples use untyped patterns (e.g., accessing `.material.opacity` on a generic Object3D).
**Mitigation:** Use type unions: `(mesh.material as THREE.MeshStandardMaterial).opacity = 0.5`
**Example from codebase:** `(grid.material as THREE.Material & { opacity: number; transparent: boolean }).opacity = 0.2`

### Risk 7: OrbitControls and Other Controls Needing Renderer DOM Reference

**What:** `OrbitControls` constructor takes `(camera, domElement)` where `domElement` must be the renderer's canvas.
**Pattern:** `new OrbitControls(camera, renderer.domElement)` — call after `container.appendChild(renderer.domElement)`.
**Cleanup:** `controls.dispose()` in `_cleanupFn`.

---

## Kimi Comparison Results for Planning

[VERIFIED: `playwright.test/test-results/kimi-comparison-report-fixed.json`]

The Phase 14 comparison ran 134 demos through the Kimi visual comparison agent. Key data for STATE.md update:

| Status | Count | Notes |
|--------|-------|-------|
| Passed (>= 0.7 similarity) | 8 | List above |
| Failed (< 0.7 similarity) | 108 | Rendering issues vs reference |
| Errors | 18 | Could not capture/compare |
| Total compared | 134 | Subset of registered demos |

The 8 passing demos can be marked as "visually verified" in STATE.md. The 108 failing demos are registered but render incorrectly vs the Three.js reference — this is the backlog for the optional fix-agent phase.

The comparison report also shows that the **ported screenshots directory** (`playwright.test/screenshots/ported/`) has **223 screenshots** while **reference screenshots** has **124** — 99 ported demos lack a reference screenshot, which contributed to the 18 "errors" in comparison.

---

## How registry.ts Categories Work

[VERIFIED: `demo/src/registry.ts` full file inspection]

### Data Model

```typescript
interface DemoEntry {
    id: string           // Three.js example filename slug (e.g. "webgl_camera")
    name: string         // Human display name (e.g. "Camera")
    category: string     // Must match a CategoryEntry.id
    component: () => Promise<{ default: () => JSX.Element }>  // Lazy import
    thumbnail?: string   // Optional — not used currently
}

interface CategoryEntry {
    id: string    // Slug for the category
    name: string  // Display name shown in sidebar
    demos: DemoEntry[]
}

export const categories: CategoryEntry[]  // Ordered array — order = sidebar order
export const allDemos: DemoEntry[]        // Flat list = categories.flatMap(c => c.demos)
```

### Category Assignment Rules

1. If the Three.js example filename starts with `webgl_animation_` → category `animation`
2. If it starts with `webgl_geometry_` or `webgl_geometries` → category `geometries`
3. If it starts with `webgl_materials_` → category `materials`
4. If it starts with `webgl_loader_` → category `loaders`
5. If it starts with `webgl_postprocessing_` → category `postprocessing`
6. If it starts with `webgl_lights_` or `webgl_lightprobe` → category `lights`
7. If it starts with `webgl_instancing_` → category `instancing`
8. If it starts with `webgl_interactive_` → category `interactive`
9. If it starts with `webgl_shadowmap` or `webgl_shadow` → category `shadows`
10. If it starts with `webgl_textures_` → category `textures`
11. If it starts with `webgl_effects_` → category `effects`
12. If it starts with `misc_` → category `controls` or create new `misc` category
13. If it starts with `css3d_` → category `css3d`
14. If it starts with `css2d_` → category `css2d`
15. If ambiguous → Claude's discretion (from CONTEXT.md)

### Known Registry Bug: Duplicate Categories

`textures` category appears at line ~115 and line ~173. `css3d` appears at line ~324 and line ~414. These must be merged into single entries during D-06 cleanup. After merge, unique demo count remains 200 but `allDemos` will no longer contain duplicates.

---

## Existing Comparison Results: Pre-Verification Use

The 8 demos that **passed** Kimi comparison can be counted as "visually verified" without re-running the dv workflow. They are:
- `webgl_shadowmap_vsm`, `webgl_clipping_intersection`, `webgl_geometry_colors`, `webgl_interactive_cubes_gpu`, `webgl_lights_spotlight`, `webgl_lines_dashed`, `webgl_points_waves`, `webgl_postprocessing_smaa`

However, the Kimi comparison reasoning for the "passed" demos reveals **some false positives** — notably `webgl_shadowmap_vsm` was described as comparing a 3D scene against an FPS counter overlay (clearly a screenshot capture timing issue) yet still passed because the similarity threshold was met. Re-verification with fresh dv screenshots is advisable for demos where the comparison reasoning seems inconsistent.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Visual: dv CLI (Chrome DevTools Protocol) + Claude vision |
| Test infrastructure | No automated unit tests for individual demos (NFR-3 deferred per CONTEXT.md) |
| Config file | `playwright.test/playwright.config.js` (for playwright e2e, separate from demo verification) |
| Quick run command (visual) | `dv screenshot --output <path> --port 9223` after navigating |
| Full suite command | `node playwright.test/scripts/kimi-orchestrator.js` (for batch comparison) |

### Phase Requirements → Verification Map

| Req ID | Behavior | Verification Method | Automated? |
|--------|----------|---------------------|------------|
| REQ-15-01 | STATE.md counts match file system | Shell count: `ls demo/src/*.tsx | wc -l` and registry grep | Yes — shell command |
| REQ-15-02 | Kimi pass count reflected in docs | Check kimi-comparison-report-fixed.json | Yes — JSON parse |
| REQ-15-03 | test-results verdicts in STATE.md | Manual comparison of STATE.md vs report JSON | Manual |
| REQ-15-04 (doc sync) | STATE.md and ROADMAP.md numbers are accurate | After update: verify numbers match shell count | Yes |
| REQ-15-04 (porting) | New demos render correctly | dv navigate → screenshot → Claude visual approval | Semi-manual |
| REQ-15-04 (registry) | Registered demo appears in sidebar | `dv navigate http://localhost:5173/#<id>` → not blank | Manual spot-check |

### Documentation Sync Verification

```bash
# After updating STATE.md, verify the numbers match reality:
echo "TSX count:" && ls demo/src/*.tsx | grep -v -E '(index|menu-frame|canvas-frame|AutoSizeCanvas|Sector|Box3ce)' | wc -l
echo "Registry unique IDs:" && grep -E "{ id: '" demo/src/registry.ts | sed "s/.*{ id: '//;s/',.*//" | sort -u | wc -l
```

### Visual Approval Verification (Per Demo)

1. `pnpm dev` running in `demo/` — server at http://localhost:5173
2. `dv start --profile profile-qmdj-2 --port 9223 --headed`
3. `dv navigate --url "http://localhost:5173/#<id>" --port 9223`
4. Wait 3-5 seconds for render
5. `dv screenshot --output playwright.test/screenshots/ported/<id>.png --port 9223`
6. `dv navigate --url "https://threejs.org/examples/<id>.html" --port 9223`
7. Wait 3-5 seconds for reference render
8. `dv screenshot --output playwright.test/screenshots/ref/<id>.png --port 9223`
9. Send both `@paths` to Claude in conversation for visual approval
10. On APPROVE: add registry.ts entry

### Registry Registration Verification

After adding entry to registry.ts:
```bash
# Verify demo appears in sidebar (Vite hot-reloads automatically):
dv navigate --url "http://localhost:5173/#<new_demo_id>" --port 9223
dv screenshot --output /tmp/verify-<id>.png --port 9223
# If screenshot shows a rendered 3D scene (not blank), registration is working
```

---

## Common Pitfalls

### Pitfall 1: Stale Demo Count in STATE.md

**What goes wrong:** Planning documents say "469 ported" but actual count is 200 registered / 250 TSX.
**Why it happens:** AI self-reported progress targets, never did file-system reconciliation.
**How to avoid:** Always count from file system: `ls demo/src/*.tsx | wc -l` and `grep -c "{ id:" demo/src/registry.ts`.
**Warning signs:** Numbers in docs don't match `ls` output.

### Pitfall 2: Registering Without Visual Verification

**What goes wrong:** A demo is registered but renders incorrectly vs the Three.js reference.
**Why it happens:** The porting pattern may have subtle differences (wrong camera position, missing fog, etc.).
**How to avoid:** Follow D-03 workflow religiously — screenshot ported + reference, get Claude approval.
**Warning signs:** Kimi comparison score < 0.7 after-the-fact.

### Pitfall 3: GUI Attached to document.body (Memory Leak)

**What goes wrong:** lil-gui panel persists after switching demos, accumulates UI elements.
**Why it happens:** Original Three.js examples append GUI to `document.body`; the init3D pattern requires container-scoping.
**How to avoid:** `new GUI({ container: container })` or manually append `gui.domElement` to container and remove in cleanup.
**Warning signs:** Multiple GUI panels stacking up when switching between demos.

### Pitfall 4: Screenshot Taken Before Asset Loads

**What goes wrong:** dv screenshot shows a blank canvas or gray background instead of the 3D scene.
**Why it happens:** GLTF/texture loading is async; screenshot fires immediately after navigate.
**How to avoid:** Wait 3-5 seconds after navigation before taking screenshot. For demos with known heavy assets (RobotExpressive.glb, etc.), wait longer.
**Warning signs:** Screenshot shows empty background color without any geometry.

### Pitfall 5: Wrong `id` in Registry

**What goes wrong:** Demo registered with a custom id (e.g. `webgl_camera_demo`) instead of the canonical Three.js slug (e.g. `webgl_camera`).
**Why it happens:** Developer improvises an id rather than looking up the exact Three.js example filename.
**How to avoid:** The `id` must be the filename from `https://threejs.org/examples/` without the `.html` suffix.
**Warning signs:** URL hash navigation to the Three.js canonical id doesn't work.

### Pitfall 6: Duplicate Category IDs in registry.ts

**What goes wrong:** The `textures` and `css3d` categories each appear twice, causing duplicate sidebar sections and duplicate `allDemos` entries.
**Why it happens:** Two separate phases added to these categories without checking if the category already existed.
**How to avoid:** Before adding a demo to a category, search registry.ts for that category id to find the existing block.
**Warning signs:** Sidebar shows two "Textures" sections or two "CSS3D" sections.

---

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|-----------------|--------|
| JSX element wrappers (`<mesh>`) | `init3D` imperative container-ref pattern | Simpler, more debuggable, matches original Three.js examples 1:1 |
| `document.body` for renderer DOM | `container.appendChild(renderer.domElement)` | Required for multi-demo app — prevents DOM leaks |
| AI self-reported progress | File-system counted progress | Accurate state of coverage |
| No cleanup on unmount | `_cleanupFn` cleanup closure | Prevents memory leaks when switching demos |

**Deprecated/outdated in this codebase:**
- `PORTED_EXAMPLES.md` in `demo/` — suggests a different JSX pattern using `Canvas3D` and `<mesh>` elements. This is an OLDER approach that was superseded by the `init3D` imperative pattern. **Do not follow the pattern in PORTED_EXAMPLES.md.** Follow `WebGLCamera.tsx` instead.
- STATE.md coverage numbers (469 ported, 74%) — stale AI-generated, not from file system

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `lil-gui.destroy()` is the correct cleanup API | Gaps/Risks: Risk 1 | GUI leaks if API is different; verify against lil-gui docs |
| A2 | `profile-qmdj-2` (port 9223) is not in use by other processes | dv Reference | Screenshot goes to wrong page; check `dv status --port 9223` first |
| A3 | 52 unregistered TSX files are all ported (not stubs) | Coverage Numbers | Some may be empty shells; visual verification will reveal |
| A4 | Three.js reference screenshots at `threejs.org/examples/<id>.html` are still accessible | Visual Verification | If Three.js changes example URLs, reference screenshots break |
| A5 | `demo/public/models` and `demo/public/textures` contain required assets for existing demos | Asset Loading | Asset-loading demos would show blank if files are missing |

---

## Open Questions

1. **Why are 52 TSX files unregistered?**
   - What we know: They exist in `demo/src/` but have no entry in `registry.ts`
   - What's unclear: Were they intentionally left unregistered (broken render, WIP) or just forgotten?
   - Recommendation: Visual-verify each one as part of Tier 1; skip/note any that fail

2. **Should the duplicate category bug be fixed as a separate task or inline with D-06?**
   - What we know: `textures` and `css3d` categories appear twice; `allDemos` has 3 duplicate IDs
   - What's unclear: Whether fixing causes any routing regressions in the app
   - Recommendation: Fix as part of D-06 documentation audit task; merge duplicate blocks

3. **Do the 108 Kimi-failed demos need to be fixed in this phase?**
   - What we know: CONTEXT.md defers autonomous fix phase; Phase 15 focuses on sync + new porting
   - What's unclear: User intent on fix scope
   - Recommendation: Note them in STATE.md as "registered but failing visual verification"; defer fixes to a separate phase

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| `dv` CLI | Visual verification screenshots | Yes | 1.0.0 | None — required by D-03 |
| `pnpm` | Demo dev server | Assumed present | — | `npm run dev` |
| Vite dev server (`pnpm dev`) | Demo rendering | Verified (package.json `dev` script exists) | — | — |
| Chrome profiles (qmdj-1 to qmdj-6) | dv browser control | Yes | — | Use any non-conflicting profile |
| Internet access to threejs.org | Reference screenshots | Required | — | Use cached screenshots in `playwright.test/screenshots/reference/` if site unavailable |

**Missing dependencies with no fallback:**
- `dv` must be available (it is — version 1.0.0 confirmed)

**Missing dependencies with fallback:**
- If threejs.org is unreachable: use existing 124 reference screenshots already captured in `playwright.test/screenshots/reference/`

---

## Sources

### Primary (HIGH confidence)
- File system scan of `demo/src/*.tsx` — 2026-06-17 — ground truth counts
- `demo/src/registry.ts` — full file read — registry structure and entry count
- `demo/src/WebGLCamera.tsx` — canonical init3D pattern
- `demo/src/WebGLAnimationSkinningMorph.tsx` — asset-loading pattern
- `demo/src/index.tsx` — hash-based routing implementation
- `playwright.test/test-results/kimi-comparison-report-fixed.json` — visual comparison verdicts
- `dv --help`, `dv screenshot --help`, `dv start --help`, `dv profiles` — CLI verification
- `.planning/phases/15-update-actual-implemented-tested-visually-checked-with-plann/15-CONTEXT.md` — locked decisions

### Secondary (MEDIUM confidence)
- `.planning/STATE.md` — provides stale claims to be corrected
- `.planning/REMAINING_WORK.md` — priority order for continued porting
- `demo/package.json` — dependency versions and dev script

### Tertiary (LOW confidence)
- `demo/PORTED_EXAMPLES.md` — describes a deprecated older JSX approach; useful only to confirm what NOT to follow

---

## Metadata

**Confidence breakdown:**
- Ground truth counts: HIGH — derived from file system and registry grep
- init3D pattern: HIGH — verified from canonical files
- dv CLI commands: HIGH — verified by running help commands
- Kimi comparison results: HIGH — parsed from JSON report
- Priority order for porting: MEDIUM — based on REMAINING_WORK.md (may be stale)
- lil-gui cleanup API: LOW (ASSUMED) — not verified against lil-gui source

**Research date:** 2026-06-17
**Valid until:** 2026-07-17 (30 days — file system counts will change as porting continues)
