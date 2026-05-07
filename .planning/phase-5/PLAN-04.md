---
phase: 05-postprocessing
plan: 04
type: execute
wave: 4
depends_on: [05-01, 05-02, 05-03]
files_modified: []
autonomous: true
requirements: [POSTPROC-13, POSTPROC-14, POSTPROC-15, POSTPROC-16]
user_setup: []

must_haves:
  truths:
    - "Remaining postprocessing examples compile and run"
    - "Test coverage for all postprocessing examples"
    - "Index file exports all examples"
    - "Documentation updated with postprocessing patterns"
  artifacts:
    - path: "code/examples/webgl/postprocessing/index.ts"
      provides: "Example exports"
      exports: ["Basic", "Bloom", "SSAO", "DOF", "Glitch", "Pixel", "Outline", "SSR", "GodRays", "Advanced", "Masking"]
    - path: "code/examples/webgl/postprocessing/postprocessing.test.ts"
      provides: "Test coverage"
      min_lines: 100
  key_links:
    - from: "index.ts"
      to: "all examples"
      via: "export *"
      pattern: "export \\* from"
---

<objective>
Complete Phase 5 with remaining examples, tests, and documentation.

Purpose: Finalize postprocessing phase with full coverage and exports.
Output: Index file, test file, and any remaining examples.
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
  <name>Task 1: Port Remaining Postprocessing Examples</name>
  <files>code/examples/webgl/postprocessing/SMAA.tsx, code/examples/webgl/postprocessing/FXAA.tsx, code/examples/webgl/postprocessing/TAA.tsx, code/examples/webgl/postprocessing/Procedural.tsx</files>
  <action>
Port remaining postprocessing examples from the 26 total.

1. SMAA.tsx - Subpixel Morphological Anti-Aliasing
   - Import SMAAPass
   - Create scene with high-contrast edges
   - Compare with/without SMAA

2. FXAA.tsx - Fast Approximate Anti-Aliasing
   - Import ShaderPass with FXAA shader
   - Faster but lower quality than SMAA

3. TAA.tsx - Temporal Anti-Aliasing
   - Import TAARenderPass (replaces RenderPass)
   - Requires camera movement to see effect

4. Procedural.tsx - Procedural effects
   - Use ShaderPass with custom shaders
   - Demonstrate procedural noise/patterns

Each example should follow established patterns from previous plans.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/SMAA.tsx 2>&1 | head -10</automated>
  </verify>
  <done>All 4 remaining examples compile and render correctly</done>
</task>

<task type="auto">
  <name>Task 2: Create Index and Test Files</name>
  <files>code/examples/webgl/postprocessing/index.ts, code/examples/webgl/postprocessing/postprocessing.test.ts</files>
  <action>
Create index file and test coverage for all postprocessing examples.

1. Create index.ts exporting all examples:
```typescript
export * from './Basic'
export * from './Bloom'
export * from './SSAO'
// ... all other examples
```

2. Create postprocessing.test.ts following the pattern from phase-1:
   - Test each example component renders
   - Test EffectComposer registration
   - Test pass registration
   - Use pure TSX test runner (no vitest)

Test pattern:
```tsx
test('Basic postprocessing renders', () => {
  const el = <Basic />
  ok(typeof el === 'function')
})
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/postprocessing.test.ts 2>&1 | tail -20</automated>
  </verify>
  <done>Index exports all examples, tests pass for all components</done>
</task>

<task type="auto">
  <name>Task 3: Update Documentation</name>
  <files>.planning/phase-5/PATTERNS.md</files>
  <action>
Create PATTERNS.md documenting postprocessing-specific patterns.

Include:
1. EffectComposer setup pattern
2. Pass chaining order (RenderPass first, AA last)
3. Reactive pass parameter updates
4. Layer-based masking
5. Performance considerations
6. Common pitfalls (missing render pass, wrong order)

Format similar to phase-1/PATTERNS.md with code examples.
  </action>
  <verify>
    <automated>test -f .planning/phase-5/PATTERNS.md && echo "PATTERNS.md exists"</automated>
  </verify>
  <done>PATTERNS.md created with postprocessing patterns documented</done>
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
| T-05-07 | D | Test files | accept | Local test execution, no security implications |
</threat_model>

<verification>
- All postprocessing examples compile
- Index file exports all examples
- Tests pass
- Documentation created
</verification>

<success_criteria>
- Phase 5 complete with 26 examples ported (or subset if some are duplicates)
- Test coverage for all examples
- Patterns documented
- Ready for Phase 6 (WebGPU)
</success_criteria>

<output>
After completion, create `.planning/phases/05-postprocessing/05-04-SUMMARY.md`
</output>
