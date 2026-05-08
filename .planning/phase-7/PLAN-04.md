---
phase: 07-webxr
plan: 04
type: execute
wave: 4
depends_on: [07-01, 07-02, 07-03]
files_modified: []
autonomous: true
requirements: [WEBXR-12, WEBXR-13]
user_setup: []

must_haves:
  truths:
    - "Remaining WebXR examples ported"
    - "Test coverage for WebXR examples"
    - "Index file exports all examples"
    - "Documentation includes WebXR patterns and device requirements"
  artifacts:
    - path: "code/examples/webxr/index.ts"
      provides: "Example exports"
      exports: ["vr/Cubes", "vr/Dragging", "vr/Haptics", "vr/Paint", "vr/HandInput", "vr/Panorama", "ar/Cones", "ar/HitTest"]
    - path: "code/examples/webxr/webxr.test.ts"
      provides: "Test coverage"
      min_lines: 80
    - path: ".planning/phase-7/PATTERNS.md"
      provides: "WebXR patterns documentation"
      min_lines: 120
  key_links:
    - from: "index.ts"
      to: "all examples"
      via: "export *"
      pattern: "export \\* from"
---

<objective>
Complete Phase 7 with remaining examples, tests, and documentation.

Purpose: Finalize WebXR phase with full coverage and device requirements.
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
  <name>Task 1: Port Additional WebXR Examples</name>
  <files>code/examples/webxr/vr/Ballshooter.tsx, code/examples/webxr/vr/Rollercoaster.tsx, code/examples/webxr/ar/Lighting.tsx</files>
  <action>
Port additional WebXR examples from the 24 total.

1. Ballshooter.tsx - VR ball shooting game
   - Spawn balls from controller
   - Physics simulation (simple)
   - Target objects to hit

2. Rollercoaster.tsx - VR rollercoaster experience
   - Follow predefined path
   - Camera movement along path
   - Motion platform simulation

3. ar/Lighting.tsx - AR lighting estimation
   - Use estimated light from environment
   - Place virtual objects with realistic lighting

Each example should include:
- WebXR support detection
- Device capability notes in comments
- Fallback for non-XR browsers
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/vr/Ballshooter.tsx 2>&1 | head -10</automated>
  </verify>
  <done>Additional WebXR examples compile and run</done>
</task>

<task type="auto">
  <name>Task 2: Create Index and Test Files</name>
  <files>code/examples/webxr/index.ts, code/examples/webxr/webxr.test.ts</files>
  <action>
Create index file and test coverage for WebXR examples.

1. Create index.ts:
```typescript
// VR Examples
export * from './vr/Cubes'
export * from './vr/Dragging'
export * from './vr/Haptics'
export * from './vr/Paint'
export * from './vr/HandInput'
export * from './vr/Panorama'
export * from './vr/Ballshooter'
export * from './vr/Rollercoaster'

// AR Examples
export * from './ar/Cones'
export * from './ar/HitTest'
export * from './ar/Lighting'
```

2. Create webxr.test.ts:
   - Test WebXR support detection
   - Test VRButton/ARButton helpers
   - Test XRController setup
   - Skip tests requiring actual XR hardware

Test pattern:
```tsx
test('WebXR support check works', () => {
  const originalXR = navigator.xr
  ;(navigator as any).xr = undefined

  const el = <Cubes />
  ok(typeof el === 'function')

  ;(navigator as any).xr = originalXR
})

test('VRButton helper exists', () => {
  ok(typeof createVRButton === 'function')
})
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/webxr.test.ts 2>&1 | tail -20</automated>
  </verify>
  <done>Index exports all examples, tests pass</done>
</task>

<task type="auto">
  <name>Task 3: Create WebXR Patterns Documentation</name>
  <files>.planning/phase-7/PATTERNS.md</files>
  <action>
Create PATTERNS.md documenting WebXR-specific patterns.

Include:
1. WebXR support detection pattern
2. VRButton/ARButton setup
3. XRController event handling
4. Hit-test for AR surface detection
5. Hand tracking setup
6. Haptics usage
7. Device requirements table:

| Feature | Device Required |
|---------|-----------------|
| Basic VR | VR headset (Quest, Vive, etc.) |
| Hand tracking | Quest, Quest 2, or similar |
| AR | AR-capable mobile or headset |
| Hit-test | AR with surface detection |
| Haptics | Controllers with vibration |

8. Browser compatibility notes
9. Fallback UI patterns

Format similar to phase-1/PATTERNS.md with code examples.
  </action>
  <verify>
    <automated>test -f .planning/phase-7/PATTERNS.md && echo "PATTERNS.md exists"</automated>
  </verify>
  <done>PATTERNS.md created with WebXR patterns documented</done>
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
| T-07-08 | D | Test files | accept | Local test execution, no security implications |
</threat_model>

<verification>
- All WebXR examples compile
- Index file exports all examples
- Tests pass (with XR hardware skip)
- Documentation created
</verification>

<success_criteria>
- Phase 7 complete with representative WebXR examples
- Test coverage for all examples
- WebXR patterns and device requirements documented
- Ready for subsequent phases
</success_criteria>

<output>
After completion, create `.planning/phases/07-webxr/07-04-SUMMARY.md`
</output>
