---
phase: 20-lightprobes-pmrem-modifiers-math
status: PLANNED
created: 2026-06-26
planner: gsd-planner
prior_phase: 19-advanced-loaders (PLANNED in parallel with this phase)
demo_count: 12
plan_count: 3
wave_count: 1
---

# Phase 20 Context

## Phase Goal

Port 12 unregistered upstream demos covering image-based lighting (`LightProbe` + spherical-harmonic capture, cube/equirect/test PMREM), runtime-generated cubemap mipmap chains and render-to-mipmaps, geometry modifiers (curve-instanced, simplifier, subdivision), and math helpers (OBB) — all using the locked Phase-15 `init3D` container-ref pattern.

## Pre-Flight Scope Verification (2026-06-26)

All 12 candidate IDs verified at planning time:

1. **All 12 IDs present in upstream `https://threejs.org/examples/files.json`** (fetched 2026-06-26).
2. **All 12 IDs absent from `demo/src/registry.ts`** (715 registered IDs at Phase 18 end; grep of each ID returned 0 occurrences).
3. **All 12 IDs have pre-converted `.tsx` scaffolds** under `code/examples/webgl/{lights,pmrem,materials,modifiers,math}/`.

| Upstream ID                                | Pre-converted scaffold                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------- |
| `webgl_lightprobes`                        | `code/examples/webgl/lights/LightProbes.tsx`                                    |
| `webgl_lightprobes_complex`                | `code/examples/webgl/lights/LightProbesComplex.tsx`                             |
| `webgl_lightprobes_sponza`                 | `code/examples/webgl/lights/LightProbesSponza.tsx`                              |
| `webgl_pmrem_cubemap`                      | `code/examples/webgl/pmrem/PmremCubemap.tsx`                                    |
| `webgl_pmrem_equirectangular`              | `code/examples/webgl/pmrem/PmremEquirectangular.tsx`                            |
| `webgl_pmrem_test`                         | `code/examples/webgl/pmrem/PmremTest.tsx`                                       |
| `webgl_materials_cubemap_mipmaps`          | `code/examples/webgl/materials/MaterialsCubemapMipmaps.tsx`                     |
| `webgl_materials_cubemap_render_to_mipmaps`| `code/examples/webgl/materials/MaterialsCubemapRenderToMipmaps.tsx`             |
| `webgl_modifier_curve_instanced`           | `code/examples/webgl/modifiers/ModifierCurveInstanced.tsx`                      |
| `webgl_modifier_simplifier`                | `code/examples/webgl/modifiers/ModifierSimplifier.tsx`                          |
| `webgl_modifier_subdivision`               | `code/examples/webgl/modifiers/ModifierSubdivision.tsx`                         |
| `webgl_math_obb`                           | `code/examples/webgl/math/MathObb.tsx`                                          |

Note: `webgl_materials_envmaps_groundprojected` is excluded from scope — already aliased at registry line 287 as `webgl_materials_envmaps_groundprojection` (same demo, underscored spelling). Following the Phase 18 precedent of not creating redundant ID aliases.

## Phase 20 Scope (12 demos, 3 plans, all wave 1)

| Plan  | Theme                              | Demos                                                                                                                |
| ----- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 20-01 | Light probes + first PMREM         | `webgl_lightprobes`, `webgl_lightprobes_complex`, `webgl_lightprobes_sponza`, `webgl_pmrem_cubemap`                  |
| 20-02 | PMREM remaining + cubemap mipmaps  | `webgl_pmrem_equirectangular`, `webgl_pmrem_test`, `webgl_materials_cubemap_mipmaps`, `webgl_materials_cubemap_render_to_mipmaps` |
| 20-03 | Modifiers + math                   | `webgl_modifier_curve_instanced`, `webgl_modifier_simplifier`, `webgl_modifier_subdivision`, `webgl_math_obb`        |

## Decomposition Rationale

- **Plan 20-01** groups the 3 LightProbe demos (which share `LightProbeGenerator` from `examples/jsm/lights/` + spherical-harmonics math) with one PMREM demo (`pmrem_cubemap`) since both topics deal with capturing environment lighting into a runtime-bakeable form. The 3 LightProbe demos progress in complexity: bare LightProbe → "complex" with a structured scene → Sponza model with diffuse/specular probes.
- **Plan 20-02** groups the remaining 2 PMREM demos (`equirectangular`, `test`) with the 2 cubemap-mipmap material demos (manual mipmap chain on a cube texture, render-to-mipmaps that writes per-level via render targets). All four exercise the cube-texture sampling pipeline and PMREM-style filtered cubemap variants.
- **Plan 20-03** groups 3 geometry-modifier demos (curve-instanced — instances along a curve via the Curve modifier; simplifier — `SimplifyModifier` from `examples/jsm/modifiers/`; subdivision — Catmull-Clark `LoopSubdivision`) with 1 math helper (`math_obb` — oriented bounding box collision visualization). Math/modifier demos are typically smaller-asset, faster-iteration, so grouping them in the last plan keeps the runtime per-plan balanced.

All three plans are independent (disjoint `demo/src/WebGL*.tsx` files, no shared edits to existing modules other than appending to `demo/src/registry.ts`) → all assigned `wave: 1`. Per user constraint "u r using dv profile 4", executors will run sequentially on profile-4 even though planning marks them parallelizable.

## Locked Decisions (from Phase 15 RESEARCH / Phase 17-18 SUMMARYs)

- **init3D pattern**: `const init3D = (container: HTMLElement) => { ... }` with module-level `let _cleanupFn`. JSX wraps with `<div ref={(el) => { if (el) init3D(el) }} />`.
- **JSX pragma**: every file begins with `/** @jsxImportSource woby */` (NOT `@woby/three`). Confirmed against Phase 17/18 SUMMARY pattern-adherence checklists.
- **Forbidden**: `as any`, `useEffect`, `useRef` for plain objects.
- **Visual verification**: dv CLI screenshot → Claude approval → THEN register in `demo/src/registry.ts`.
- **dv CLI**: `node 'D:\Developments\tslib\dv\dist\cli.js' <subcommand> --profile profile-4 [-i 1] [options]` — subcommand BEFORE flags. MUST call `select --profile X -i 1` to bind to page before navigate/screenshot. `navigate` does NOT accept `-i`.
- **Dev server**: http://localhost:5300, profile-4 only for this phase per user constraint.
- **Source-of-truth**: upstream `https://threejs.org/examples/#<demo_id>` HTML drives canonical behavior. The pre-converted `.tsx` files are stub-quality scaffolds — implementer must consult upstream HTML.
- **Asset paths**: cube/equirect textures live at `https://threejs.org/examples/textures/cube/...` and `https://threejs.org/examples/textures/equirectangular/...`. Sponza model under `https://threejs.org/examples/models/gltf/Sponza/`. Use absolute URLs (Phase 17/18 precedent).
- **No editing of upstream `code/examples/`** — those are reference. New files go in `demo/src/`.

## File Naming Convention

Following the locked convention from Phases 15-18, scaffold filenames map to `demo/src/` files as follows:

| Demo ID                                    | Demo file name                                |
| ------------------------------------------ | --------------------------------------------- |
| `webgl_lightprobes`                        | `WebGLLightProbes.tsx`                        |
| `webgl_lightprobes_complex`                | `WebGLLightProbesComplex.tsx`                 |
| `webgl_lightprobes_sponza`                 | `WebGLLightProbesSponza.tsx`                  |
| `webgl_pmrem_cubemap`                      | `WebGLPMREMCubemap.tsx`                       |
| `webgl_pmrem_equirectangular`              | `WebGLPMREMEquirectangular.tsx`               |
| `webgl_pmrem_test`                         | `WebGLPMREMTest.tsx`                          |
| `webgl_materials_cubemap_mipmaps`          | `WebGLMaterialsCubemapMipmaps.tsx`            |
| `webgl_materials_cubemap_render_to_mipmaps`| `WebGLMaterialsCubemapRenderToMipmaps.tsx`    |
| `webgl_modifier_curve_instanced`           | `WebGLModifierCurveInstanced.tsx`             |
| `webgl_modifier_simplifier`                | `WebGLModifierSimplifier.tsx`                 |
| `webgl_modifier_subdivision`               | `WebGLModifierSubdivision.tsx`                |
| `webgl_math_obb`                           | `WebGLMathOBB.tsx`                            |

Planner note: PMREM is the canonical Three.js spelling (e.g., `PMREMGenerator` class) — preserve uppercase. OBB is also canonical (`OBB` class in `examples/jsm/math/OBB.js`).

## Requirements

This phase addresses `REQ-15-04` (port unregistered upstream Three.js demos using locked Phase-15 pattern).

## Success Criteria (phase-level)

- 12 new demos registered in `demo/src/registry.ts` (correct id, name, category, component path).
- Total registry count climbs from 727 (post-Phase 19 expected) → 739.
- All 12 pass visual verification via dv profile-4 screenshot + Claude approval before registration.
- All 12 start with `/** @jsxImportSource woby */`.
- All 12 use `init3D` container-ref + module-level `_cleanupFn` pattern.
- No `as any`, no `useEffect`, no `useRef`-for-plain-objects across all 12 files.
- No TypeScript errors (`tsc --noEmit --skipLibCheck` from `demo/`).
- No duplicate IDs introduced.
- SUMMARY for each plan documents: screenshot paths + sizes, deviations from upstream, pattern-adherence checklist.
