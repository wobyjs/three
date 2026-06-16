# Phase 15: Sync actual coverage — implemented / tested / visually checked vs planned

**Gathered:** 2026-06-16
**Status:** Ready for planning
**Source:** Inline user instructions

<domain>
## Phase Boundary

Phase 15 does two things in sequence:

1. **Documentation sync** — Update STATE.md and ROADMAP.md to reflect ground truth:
   - STATE.md currently claims 469/629 (74%) ported; actual file count is ~255 TSX files, REMAINING_WORK.md says 104/581 (18%).
   - Replace AI self-reported percentages with counts derived from `demo/src/` file system and the kimi-orchestrator comparison results in `test-results/`.

2. **Continued porting with visual verification** — Port more Three.js examples (from REMAINING_WORK.md) to Woby JSX using the established `init3D` pattern, then visually verify each one 1:1 against the Three.js reference before registering it.

This phase does NOT hallucinate new features — every ported file must exactly reproduce what the original Three.js example at `threejs.org/examples/<id>.html` does.

</domain>

<decisions>
## Implementation Decisions

### D-01: Porting Pattern (LOCKED)
Use the established `init3D` container-ref pattern — NOT reactive JSX element wrappers:
- File header: `/** @jsxImportSource woby */`
- Imperative Three.js code inside `const init3D = (container: HTMLElement) => { ... }`
- Cleanup closure: `let _cleanupFn: (() => void) | null = null`
- Export: `export default () => <div ref={(el) => { if (el) init3D(el) }} style="width:100%;height:100%" />`
- No `as any` type assertions (FR NFR-2.1)

### D-02: 1:1 Fidelity Rule (LOCKED)
Every ported example must reproduce exactly what the original Three.js example does:
- Same scene objects, same camera setup, same animation loop
- Same UI controls (GUI, stats, keyboard events) if present in the original
- No extra features, no simplifications, no creative additions
- If the original loads an external asset (GLTF, texture, etc.), the port must too

### D-03: Visual Verification Workflow (LOCKED)
Before registering a ported example, the executor MUST visually verify it:

1. Start the demo dev server: `cd demo && pnpm dev` (runs at `http://localhost:5173`)
2. Navigate to the ported example via URL hash: `http://localhost:5173/#<demo_id>`
3. Use `dv` CLI (installed globally from `D:\Developments\tslib\dv-cli`) to take a screenshot:
   ```
   dv screenshot --output screenshots/ported-<id>.png
   ```
4. Open the reference at `https://threejs.org/examples/<id>.html` and screenshot it:
   ```
   dv screenshot --output screenshots/ref-<id>.png
   ```
5. **Send both images to Claude in THIS conversation** using `@screenshots/ported-<id>.png` and `@screenshots/ref-<id>.png` for visual approval
6. Claude approves or rejects. If rejected, fix and re-verify. Only register on approval.

### D-04: Registration (LOCKED)
After visual approval, add the demo entry to `demo/src/registry.ts` under the correct category.
The `id` must match the Three.js example filename (e.g. `webgl_animation_skinning_blending`).
The `component` field must lazy-import the new TSX file.

### D-05: Skills to Apply (LOCKED)
- **`/dom` skill** — use `dv` CLI (Chrome DevTools Protocol) for browser automation, screenshots, console reading
- **`/woby` skill (Woby reactive patterns)** — for any reactive/signal patterns needed in the JSX
- dv CLI binary location: `D:\Developments\tslib\dv-cli` (globally installed as `dv`)

### D-06: Documentation Audit (LOCKED)
Before porting work begins, the executor must:
1. Count actual TSX files in `demo/src/` excluding `index.tsx`, `components/`, `layout/`
2. Count registered demos in `demo/src/registry.ts`
3. Compare against STATE.md claims (469 ported, 74%)
4. Update STATE.md and ROADMAP.md summary table with correct numbers
5. Note which examples from `test-results/` were visually compared and their verdict

### Claude's Discretion
- Category assignment in registry.ts when the category is ambiguous
- Screenshot output directory name (use `playwright.test/screenshots/ported/` for consistency with existing pipeline)
- dv CLI profile to use for capture (pick any available non-conflicting port)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Porting Patterns (existing examples to follow)
- `demo/src/WebGLCamera.tsx` — canonical init3D container-ref pattern
- `demo/src/WebGLAnimationSkinningMorph.tsx` — example with asset loading + morph targets
- `demo/src/registry.ts` — how to register a demo (id, name, category, lazy import)

### Planning State
- `.planning/STATE.md` — current (inaccurate) coverage claims to be corrected
- `.planning/REMAINING_WORK.md` — 477 unported examples by category
- `.planning/REQUIREMENTS.md` — FR-5.x coverage requirements, NFR-2.1 (no as-any)

### Visual Comparison Pipeline (Phase 14 — for reference results)
- `playwright.test/scripts/kimi-orchestrator.ts` — orchestrator that runs Claude comparison
- `test-results/` — contains comparison verdicts from Phase 14 run

### dv CLI
- Binary: `dv` (globally installed from `D:\Developments\tslib\dv-cli`)
- Key commands: `dv start`, `dv navigate`, `dv screenshot`, `dv console`

</canonical_refs>

<specifics>
## Specific Ideas

- Priority order for porting: webgl (200 missing) > webxr (26 missing) > misc (18 missing) — follow REMAINING_WORK.md priority column
- After visual approval, consider running the automated Claude comparison too (kimi-orchestrator) to get a similarity score for the registry
- The `demo/src/layout/ThumbnailCard.tsx` already handles missing thumbnails with a placeholder SVG — no need to capture thumbnails during this phase
- Dev server: `cd demo && pnpm dev` → `http://localhost:5173`
- The demo app uses URL hash routing: `http://localhost:5173/#webgl_camera` shows the WebGLCamera example

</specifics>

<deferred>
## Deferred Ideas

- Thumbnail generation (screenshots for sidebar cards) — separate concern from porting
- Automated test suite per example — covered by NFR-3 but not this phase's primary goal
- WebGPU examples — require WebGPU renderer, defer until stable

</deferred>

---

*Phase: 15-update-actual-implemented-tested-visually-checked-with-plann*
*Context gathered: 2026-06-16 from user inline instructions*
