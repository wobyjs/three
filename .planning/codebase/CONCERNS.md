# Codebase Concerns

**Analysis Date:** 2026-05-06

## Tech Debt

**Type Safety - `as any` Usage:**
- Issue: Multiple `as any` casts in WebGLRenderer wrapper bypass type checking
- Files: `code/src/renderers/WebGLRenderer.ts:33-47`
- Impact: Loss of type safety, potential runtime errors from incorrect property access
- Fix approach: Define proper interfaces for context types (renderers, scenes, cameras arrays)

**Commented-Out Code Blocks:**
- Issue: Large sections of commented-out code in `code/index.ts` and `code/src/renderers/WebGLRenderer.ts`
- Files: `code/index.ts:1-100`, `code/src/renderers/WebGLRenderer.ts:11-51`
- Impact: Code smell, unclear what functionality is deprecated vs temporarily disabled
- Fix approach: Remove dead code or document why it's preserved with TODO comments

**@ts-ignore Directives:**
- Issue: 18+ `@ts-ignore` comments suppress type errors without explanation
- Files: `code/src/textures/Texture.ts:110`, `code/src/materials/Material.ts:95`, `code/examples/jsm/controls/OrbitControls.ts:26,307`, `code/lib/components/Canvas3D.tsx:108`
- Impact: Type errors hidden, may mask real issues
- Fix approach: Replace with `@ts-expect-error` and add explanatory comments, or fix underlying type issues

**Global Window Mutation:**
- Issue: `window.threeContext` assigned without null check in useThree
- Files: `code/lib/hooks/useThree.tsx:47-49`
- Impact: Potential race condition if multiple instances initialize simultaneously
- Fix approach: Use proper singleton pattern with initialization guard

## In Progress Work

**Modified Files (97 files changed):**
- Status: Large-scale modifications across geometries, postprocessing, materials, and core classes
- Files: `code/examples/jsm/geometries/*.ts`, `code/examples/jsm/postprocessing/*.ts`, `code/src/geometries/*.ts`, `code/src/materials/*.ts`
- Impact: Incomplete migration or refactoring in progress
- Action: Review diff to understand migration pattern, commit or revert as appropriate

**Deleted Files:**
- `code/examples/jsm/lights/LightProbeGenerator.ts x` - File with space in name, likely accidental
- `code/examples/jsm/utils/PackedPhongMaterial.d.ts` - Type declaration removed
- `code/examples/jsm/utils/ShadowMapViewer.d.ts` - Type declaration removed
- `test/*.chk.test.tsx` - Old check tests removed (13 files)
- `test/*.spec.js` - Playwright specs removed (3 files)
- Impact: Test coverage reduced, type declarations missing
- Action: Verify replacements exist in new test suite

**Untracked Files:**
- `FIX_SUMMARY.md` - Documentation of recent fix
- `TELEGRAM-README.md` - Unknown purpose
- `add-default-exports.js`, `fix-default-exports.js` - Migration scripts
- `demo/` - Demo directory
- `test/*.test.ts` - New test files (15 files)
- `test1/` - Unknown directory
- `.claude/`, `.playwright-mcp/` - Tool configs
- Impact: Migration scripts and new tests not committed
- Action: Review and commit appropriate files, clean up temporary files

## Security Considerations

**No Critical Security Issues Found:**
- No `.env` files detected in search
- No credentials or secrets in tracked files
- Dependencies use workspace protocol for internal packages

**Dependency Risk:**
- Risk: `woby` and `@woby/use` are workspace dependencies (not published to npm)
- Files: `package.json:99-101`
- Impact: Package may fail to install for external consumers
- Mitigation: Ensure workspace packages are published together or use npm dependencies

## Performance Bottlenecks

**onFrame Registration with Retry:**
- Problem: Retry loop with setTimeout for frame registration
- Files: `code/lib/three/fixReactiveProps.tsx:57-73`
- Cause: Context may not be available immediately, uses polling with 100ms intervals up to 10 retries
- Impact: Up to 1 second delay before frame callback registered
- Improvement path: Use context injection or ensure context availability before component mount

**Recursive Type Checking:**
- Problem: `isNullR`, `isObservableR`, `isPromiseR` recursively check object properties
- Files: `code/lib/utils.ts:129-188`
- Cause: Deep property traversal on every createElement call
- Impact: Performance degradation with deeply nested props
- Improvement path: Cache results or limit recursion depth

## Fragile Areas

**Three.js Class Registration:**
- Files: `code/lib/three/createElement.tsx:182-192`, `code/lib/3/three.ts`
- Why fragile: Relies on runtime class name matching via `fn.name` and `Three[key]` lookup
- Safe modification: Register classes explicitly with consistent naming
- Test coverage: New test files in `test/*.test.ts` cover registration

**Context Propagation:**
- Files: `code/lib/components/Canvas3D.tsx:99-114`, `code/lib/three/getInstance.tsx:37-69`
- Why fragile: Uses `setPendingContextWrap` side-channel and `SYMBOL_CONTEXT_WRAP` for context propagation
- Safe modification: Ensure context is set before any child elements render
- Test coverage: `test/jsx.test.tsx` may cover JSX mode

**Custom Element Name Mapping:**
- Files: `code/lib/utils.ts:254-259`, `code/lib/utils.ts:7-86` (toUpper function)
- Why fragile: Complex string manipulation for kebab-case to PascalCase conversion
- Safe modification: Add comprehensive tests for edge cases
- Test coverage: Not explicitly tested

## Scaling Limits

**Single Global Context:**
- Current capacity: One `ThreeContext` per window
- Limit: Cannot have multiple independent 3D scenes with separate contexts
- Scaling path: Make context creation scoped per Canvas3D instance

**Frame Callback Array:**
- Current capacity: Unbounded array of frame callbacks
- Limit: Memory grows with each registered callback, no cleanup on unmount
- Scaling path: Implement proper cleanup in `fixReactiveProps` return function

## Dependencies at Risk

**Three.js Version Constraint:**
- Risk: Pinned to `^0.173.0` - may miss security fixes in newer versions
- Impact: Stale Three.js features, potential CVEs
- Migration plan: Test against newer Three.js versions, update peer dependency

**Workspace Dependencies:**
- Risk: `woby` and `@woby/use` as workspace dependencies
- Impact: Package unusable outside monorepo context
- Migration plan: Consider publishing workspace packages or documenting monorepo requirement

## Missing Critical Features

**No Error Boundaries:**
- Problem: Three.js errors will crash the entire Woby app
- Files: `code/lib/three/getInstance.tsx:27` uses `useTry` but error is ignored
- Blocks: Graceful error handling for WebGL context loss, shader compilation errors

**No WebGL Context Loss Handling:**
- Problem: No explicit handling for `webglcontextlost` and `webglcontextrestored` events
- Files: `code/src/renderers/WebGLRenderer.ts`
- Blocks: Recovery from GPU reset or resource exhaustion

## Test Coverage Gaps

**New Test Suite:**
- What's tested: Registration in consParams, objProps, defaults, Three object
- Files: `test/*.test.ts` (15 files)
- Pattern: Pure TSX test runner without vitest/jsdom (per memory)

**Untested Areas:**
- What's not tested: Runtime rendering, WebGL context creation, reactive prop updates
- Files: `code/lib/three/fixReactiveProps.tsx`, `code/lib/three/getInstance.tsx`
- Risk: Context propagation failures, frame callback registration
- Priority: High - core functionality

**Deleted Tests:**
- What was removed: `test/*.chk.test.tsx` (check tests), `test/*.spec.js` (Playwright specs)
- Risk: Visual/e2e tests no longer run
- Priority: Medium - replaced by new unit tests

## Known Bugs

**File with Space in Name:**
- Symptoms: `code/examples/jsm/lights/LightProbeGenerator.ts x` appears in git status as deleted
- Files: Git shows file with trailing ` x` in name
- Trigger: Likely typo or filesystem issue
- Workaround: File exists as `code/examples/jsm/lights/LightProbeGenerator.ts` (untracked)

**Line Ending Warnings:**
- Symptoms: Git warns about LF to CRLF conversion for 50+ files
- Files: All modified TypeScript files
- Trigger: Mixed line endings in repository
- Workaround: Configure `.gitattributes` with `* text=auto eol=lf`

## TODO Comments Summary

**High Priority TODOs:**
- `code/src/textures/Texture.ts:337` - "TODO Fix typing to only allow the expected values" for unpackAlignment
- `code/src/helpers/HemisphereLightHelper.ts:95` - "TODO: Double check if this need to be exposed or not"
- `code/src/helpers/DirectionalLightHelper.ts:113` - "TODO: Double check if this need to be exposed or not"

**WebGPU TODOs:**
- Multiple TODOs in `code/src/renderers/webgpu/utils/*.ts` for optimization opportunities
- Not blocking but indicate incomplete WebGPU implementation

**Physics TODOs:**
- `code/examples/jsm/physics/*.js` - Multiple TODOs for type changes and implementation
- Indicates physics integration is work-in-progress

---

*Concerns audit: 2026-05-06*
