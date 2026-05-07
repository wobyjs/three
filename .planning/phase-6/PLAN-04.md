---
phase: 06-webgpu
plan: 04
type: execute
wave: 4
depends_on: [06-01, 06-02, 06-03]
files_modified: []
autonomous: true
requirements: [WEBGPU-11, WEBGPU-12]
user_setup: []

must_haves:
  truths:
    - "Remaining WebGPU examples ported"
    - "Test coverage for WebGPU examples"
    - "Index file exports all examples"
    - "Documentation includes WebGPU patterns and limitations"
  artifacts:
    - path: "code/examples/webgpu/index.ts"
      provides: "Example exports"
      exports: ["Basic", "Geometries", "Materials", "Lights", "Animation", "TSL", "Particles", "Postprocessing"]
    - path: "code/examples/webgpu/webgpu.test.ts"
      provides: "Test coverage"
      min_lines: 80
    - path: ".planning/phase-6/PATTERNS.md"
      provides: "WebGPU patterns documentation"
      min_lines: 100
  key_links:
    - from: "index.ts"
      to: "all examples"
      via: "export *"
      pattern: "export \\* from"
---

<objective>
Complete Phase 6 with remaining examples, tests, and documentation.

Purpose: Finalize WebGPU phase with full coverage and documented limitations.
Output: Index file, test file, patterns documentation.
</objective>

<execution_context>
@$HOME/.claude-glm-glm/get-shit-done/workflows/execute-plan.md
@$HOME/.claude-glm-glm/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phase-1/PATTERNS.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Port Additional WebGPU Examples</name>
  <files>code/examples/webgpu/LoaderGLTF.tsx, code/examples/webgpu/Shadowmap.tsx, code/examples/webgpu/Cubemap.tsx</files>
  <action>
Port additional WebGPU examples from the 219 total.

Note: Since WebGPU examples are marked WIP in Three.js, prioritize examples that:
1. Have clear source code
2. Demonstrate unique WebGPU features
3. Are not duplicates of WebGL examples

Examples to port:
1. LoaderGLTF.tsx - GLTF model loading with WebGPU
2. Shadowmap.tsx - Shadow mapping demonstration
3. Cubemap.tsx - Environment cubemap rendering

Each should include WebGPU support check and fallback UI.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/LoaderGLTF.tsx 2>&1 | head -10</automated>
  </verify>
  <done>Additional examples compile and render with WebGPU</done>
</task>

<task type="auto">
  <name>Task 2: Create Index and Test Files</name>
  <files>code/examples/webgpu/index.ts, code/examples/webgpu/webgpu.test.ts</files>
  <action>
Create index file and test coverage for WebGPU examples.

1. Create index.ts:
```typescript
export * from './Basic'
export * from './Geometries'
export * from './Materials'
export * from './Lights'
export * from './Animation'
export * from './TSL'
export * from './Particles'
export * from './Postprocessing'
export * from './LoaderGLTF'
export * from './Shadowmap'
export * from './Cubemap'
```

2. Create webgpu.test.ts:
   - Test WebGPU support detection
   - Test each example component renders
   - Test WebGPURenderer registration
   - Skip tests that require actual WebGPU hardware

Test pattern:
```tsx
test('WebGPU support check works', () => {
  // Mock navigator.gpu
  const originalGPU = navigator.gpu
  ;(navigator as any).gpu = undefined

  const el = <Basic />
  ok(typeof el === 'function')

  // Restore
  ;(navigator as any).gpu = originalGPU
})
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/webgpu.test.ts 2>&1 | tail -20</automated>
  </verify>
  <done>Index exports all examples, tests pass</done>
</task>

<task type="auto">
  <name>Task 3: Create WebGPU Patterns Documentation</name>
  <files>.planning/phase-6/PATTERNS.md</files>
  <action>
Create PATTERNS.md documenting WebGPU-specific patterns.

Include:
1. WebGPU support detection pattern
2. WebGPURenderer setup vs WebGLRenderer
3. TSL shader basics
4. WebGPU limitations (what doesn't work yet)
5. Performance considerations
6. Browser compatibility notes
7. Fallback UI patterns

Format similar to phase-1/PATTERNS.md with code examples.

Key sections:
- Support Detection
- Renderer Setup
- TSL Shaders
- Known Limitations
- Browser Requirements
  </action>
  <verify>
    <automated>test -f .planning/phase-6/PATTERNS.md && echo "PATTERNS.md exists"</automated>
  </verify>
  <done>PATTERNS.md created with WebGPU patterns documented</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| Test execution | Local only, no external calls |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-06-07 | D | Test files | accept | Local test execution, no security implications |
</threat_model>

<verification>
- All WebGPU examples compile
- Index file exports all examples
- Tests pass (with WebGPU hardware skip)
- Documentation created
</verification>

<success_criteria>
- Phase 6 complete with representative WebGPU examples
- Test coverage for all examples
- WebGPU patterns and limitations documented
- Ready for Phase 7 (WebXR)
</success_criteria>

<output>
After completion, create `.planning/phases/06-webgpu/06-04-SUMMARY.md`
</output>
