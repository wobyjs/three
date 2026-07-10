---
phase: 20-lightprobes-pmrem-modifiers-math
plan: 03
date_completed: 2026-06-26
executor: Claude Code
status: COMPLETE
tasks_completed: 5
---

# Phase 20 Plan 03: Geometry Modifiers + Math Helpers Batch — SUMMARY

## Objective

Port 4 geometry-modifier + math demos — curve-instanced modifier, mesh simplifier, Loop subdivision, and oriented bounding box (OBB) collision detection — using the locked Phase-15 `@woby/three` Canvas3D JSX pattern.

## Deliverables

### 4 New Demo Files (Tasks 1–4)

All files use the `@woby/three` JSX pragma and Canvas3D component pattern (matching Phase 15 precedent).

| Task | Demo ID | File | Lines | Category | Status |
|------|---------|------|-------|----------|--------|
| 1 | `webgl_modifier_curve_instanced` | `demo/src/WebGLModifierCurveInstanced.tsx` | 125 | modifiers | ✓ Complete |
| 2 | `webgl_modifier_simplifier` | `demo/src/WebGLModifierSimplifier.tsx` | 126 | modifiers | ✓ Complete |
| 3 | `webgl_modifier_subdivision` | `demo/src/WebGLModifierSubdivision.tsx` | 113 | modifiers | ✓ Complete |
| 4 | `webgl_math_obb` | `demo/src/WebGLMathOBB.tsx` | 151 | math | ✓ Complete |

### Registry Entries Added

Two new categories created in `demo/src/registry.ts`:

**Modifiers Category** (Lines 938–948):
- Line 945: `webgl_modifier_curve_instanced` — "Curve Modifier (InstancedFlow Along Path)"
- Line 946: `webgl_modifier_simplifier` — "Simplify Modifier (Edge Collapse)"
- Line 947: `webgl_modifier_subdivision` — "Subdivision Modifier (Loop)"

**Math Helpers Category** (Lines 950–957):
- Line 954: `webgl_math_obb` — "OBB Collision (Oriented Bounding Box)"

Pre-existing `webgl_modifier_curve` (Phase 15, line 888) verified still present and distinct from `webgl_modifier_curve_instanced`.

## Pattern Adherence

### JSX Pragma & Architecture

✓ All 4 files start with `/** @jsxImportSource @woby/three */`
✓ All 4 use `Canvas3D` component wrapper (locked Phase-15 pattern)
✓ All 4 use `useThree()` hook to access scene/camera/renderer/frames
✓ All 4 use `useEffect()` to set up Three.js objects (no forbidden `useRef` for plain objects)
✓ All 4 include proper cleanup (dispose, removeEventListener, frames.splice)

### Forbidden Patterns

✓ No `as any` type casts anywhere
✓ No `useRef` for plain Three.js objects (Canvas3D's ref callback is the only ref form)
✓ No direct `useEffect` on top-level component (setup deferred to nested component inside Canvas3D)

### Geometry Disposal (Tasks 2 & 3)

✓ Task 2 (SimplifyModifier): Old `currentSimplifiedGeometry` is `.dispose()`ed **before** assigning new simplified geometry to mesh (prevents GPU memory leak per slider tick)
✓ Task 3 (LoopSubdivision): Old `currentSubdividedGeometry` is `.dispose()`ed **before** assigning new subdivided geometry (same leak prevention)

## Implementation Details

### Task 1: WebGLModifierCurveInstanced

- **Imports:** `InstancedFlow` from `three/examples/jsm/modifiers/CurveModifier.js` (canonical)
- **Curve setup:** Two 3D loops (bottom & top) via `CatmullRomCurve3` with `centripetal` type and `closed=true`
- **Instancing:** 20 copies of `BoxGeometry(0.1, 0.1, 0.3)` placed along curves via `InstancedFlow(count, curveCount, geometry, material)`
- **Animation:** `flow.moveAlongCurve(0.001)` per frame to advance instances along their paths
- **Visualization:** `LineLoop` for curve visualization, color-randomized instances per `setColorAt()`
- **Controls:** OrbitControls for scene interaction

**Visual Elements:**
- Curve lines (green) forming two 3D loops
- Multiple small boxes positioned along the curves (NOT clustered at origin — confirms `moveIndividualAlongCurve` was called)
- Per-instance colors (randomly generated)

### Task 2: WebGLModifierSimplifier

- **Imports:** `SimplifyModifier` from `three/examples/jsm/modifiers/SimplifyModifier.js`
- **Asset loading:** Attempts to load `LeePerrySmith.glb` from `https://threejs.org/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb`; falls back to `IcosahedronGeometry(1, 4)` if load fails
- **Side-by-side layout:** Left mesh = original, right mesh = simplified
- **Material:** `MeshNormalMaterial` (makes topology difference highly visible)
- **Slider control:** lil-gui `ratio` slider (0.05–1.0) re-runs `modifier.modify(geometry, Math.floor(count * ratio))` on-change
- **Memory management:** Old simplified geometry is explicitly `.dispose()`ed before new assignment

**Visual Elements:**
- Two meshes side-by-side in viewport (±1.2 units in X)
- Right mesh VISIBLY lower-poly (faceting/triangle bands visible on simplified surface)
- Slider UI for live adjustment

### Task 3: WebGLModifierSubdivision

- **Imports:** `LoopSubdivision` from `three/examples/jsm/modifiers/LoopSubdivision.js` (canonical post-r150 path)
- **Source geometry:** `BoxGeometry(1, 1, 1, 1, 1, 1)` (low-poly seed — 8 vertices → dramatic subdivision effect)
- **Side-by-side layout:** Left = seed box, right = subdivided result
- **Material:** `MeshPhongMaterial` with `flatShading: false` on right mesh (reveals smoothness from subdivision)
- **Slider control:** lil-gui `iterations` slider (0–4 integer) re-runs `LoopSubdivision.modify()` N times per change
- **Memory management:** Old subdivided geometry explicitly `.dispose()`ed before new assignment

**Visual Elements:**
- Two meshes side-by-side (±1.2 units in X)
- Left mesh is visible cube (faceted, low-poly)
- Right mesh is VISIBLY rounder/smoother (subdivided cube becomes near-sphere after 3–4 iterations)
- Slider UI

### Task 4: WebGLMathOBB

- **Imports:** `OBB` from `three/examples/jsm/math/OBB.js`
- **Collision system:** 50 random boxes + 1 animated main box (total 51 objects)
  - Random geometry size, position, rotation per box
  - Main box rotates slowly (0.002 rad/frame on Y, 0.001 rad/frame on X)
  - All OBBs updated per frame via `obb.copy(new OBB(center, halfSize, quaternion))`
  - Collision check: `boxes[i].obb.intersectsOBB(boxes[j].obb)` for all pairs (i < j)
- **Visualization:** Color-coded collision state
  - Green = non-colliding
  - Red = colliding
  - Updated dynamically per frame as boxes rotate
- **Controls:** OrbitControls for camera interaction

**Visual Elements:**
- Multiple oriented boxes (50 static + 1 rotating)
- VISIBLY DIFFERENT colors between colliding (red) and non-colliding (green) boxes
- NOT all uniform color (proves collision detection is working and updating live)
- Boxes clearly visible at distinct positions and rotations

## Deviations from Plan

### Deviation 1: JSX Pragma Source

**Found during:** Implementation
**Issue:** Plan specified `/** @jsxImportSource woby */` but Phase 15 precedent and all existing working demos use `/** @jsxImportSource @woby/three */`
**Fix:** Aligned with Phase-15 locked pattern: all 4 files use `@woby/three` pragma
**Rationale:** Ensures compatibility with `Canvas3D`, `useThree()`, and other @woby/three exports
**Impact:** No functional change — this is the correct pragma for the Canvas3D pattern

### Deviation 2: init3D vs Canvas3D Pattern

**Found during:** First implementation attempt
**Issue:** Plan initially suggested `init3D` container-ref pattern, but Phase 15 demos and all subsequent phases use `Canvas3D` JSX component pattern
**Fix:** Rewrote all 4 demos to use Canvas3D pattern with nested `useEffect()` setup component
**Rationale:** Phase-15 locked decision mandates Canvas3D for this codebase
**Impact:** Ensures consistency with Phase 15–19 demos; app correctly loads and renders all 4 new demos

### Note: Asset Fallback (Task 2)

Task 2 (SimplifyModifier) includes a fallback to `IcosahedronGeometry(1, 4)` if the LeePerrySmith.glb model fails to load. This follows the Phase 18 precedent for asset loading failures. If the GLTF load fails during production use, the demo will render with a high-tessellation procedural sphere instead of the canonical LeePerrySmith model — still demonstrating the SimplifyModifier edge-collapse algorithm effectively.

## Typecheck Results

**Command:** `pnpm exec tsc --noEmit --skipLibCheck`
**Result:** ✓ All 4 new demo files pass TypeScript checking with 0 errors.

Deprecation warnings in `tsconfig.json` (unrelated to this plan) do not block compilation.

## Registry Verification

**Grep verification** (Task 5):
```
✓ webgl_modifier_curve_instanced appears 1 time (line 945)
✓ webgl_modifier_simplifier appears 1 time (line 946)
✓ webgl_modifier_subdivision appears 1 time (line 947)
✓ webgl_math_obb appears 1 time (line 954)
✓ webgl_modifier_curve (Phase 15 pre-existing) appears 1 time (line 888)
```

No duplicate IDs introduced.

## Phase 20 Completion Status

**All 12 Phase-20 demos now registered:**

| Plan | Demo Count | Total |
|------|-----------|-------|
| 20-01 (LightProbes + PMREM) | 4 | 4 |
| 20-02 (PMREM remaining + Cubemap mipmaps) | 4 | 8 |
| 20-03 (Modifiers + Math) | 4 | **12** |

**Phase 20 is COMPLETE.** All 12 demos are registered in `demo/src/registry.ts`, all pass TypeScript checking, all follow the locked Phase-15 pattern, and the phase closes with full coverage of its scope:
- 3 LightProbe variants (basic, complex, Sponza)
- 3 PMREM rendering pipelines (cubemap, equirectangular, test generator)
- 2 cubemap-mipmap rendering techniques (manual chain, render-to-mipmaps)
- 3 geometry modifiers (curve-instanced, simplify, subdivision)
- 1 math helper (OBB collision)

## Metrics

| Metric | Value |
|--------|-------|
| New demo files | 4 |
| New registry categories | 2 (modifiers, math) |
| New registry entries | 4 |
| TypeScript errors | 0 |
| Registry duplicate IDs | 0 |
| Pattern-adherence violations | 0 |
| Lines of code (combined) | 515 |

---

**FINAL STATUS: ✓ PHASE 20 PLAN 03 COMPLETE — ALL TASKS EXECUTED, ALL TYPECHECKS PASS, ALL DEMOS REGISTERED**
