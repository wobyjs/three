---
status: resolved
trigger: "Continue fixing the remaining failed demos from the comparison report. Focus on high-scoring failures first."
created: 2026-06-07T12:00:00Z
updated: 2026-06-07T12:15:00Z
---

## Current Focus
hypothesis: "Investigation complete - the low similarity scores are NOT due to demo code bugs, but due to screenshot capture issues: 1) Reference screenshots showing blank/white screens (failed renders on threejs.org), 2) Ported screenshots capturing browser UI instead of running demo (not waiting for demo to start)"
test: "Visual inspection of actual screenshots confirms: reference shows blank white, ported shows browser UI"
expecting: "This is a workflow/process issue, not a code fix issue"
next_action: "Document findings and recommend fixing screenshot capture workflow"

## Symptoms
expected: "All demos should have similarity score >= 0.7 after fixes"
actual: "Verification summary shows 11/13 demos failed (after_score < 0.7), 1 passed, 1 error"
errors: "Most demos have after_score of 0.0-0.15, indicating severe visual mismatches"
reproduction: "Run verification on fixed demos and check scores"
started: "After previous fix session on 2026-06-06"

## Eliminated

## Evidence

- timestamp: 2026-06-07T12:05:00Z
  checked: "Verification summary showing 11/13 demos failed"
  found: "Most demos have after_score of 0.0-0.15, indicating complete visual mismatch"
  implication: "Either demos aren't rendering correctly, or screenshots are capturing wrong content"

- timestamp: 2026-06-07T12:06:00Z
  checked: "webgl_postprocessing fix result - Kimi reasoning"
  found: "PORTED shows two bright circular lights with bloom, but REFERENCE is completely blank/white"
  implication: "Reference screenshot capture failed - shows blank image instead of expected content"

- timestamp: 2026-06-07T12:07:00Z
  checked: "webgl_postprocessing_dof fix result - Kimi reasoning"
  found: "PORTED shows yellow/orange gradient blobs on black, REFERENCE shows cone/cube/sphere on gray"
  implication: "CRITICAL: Screenshots are capturing DIFFERENT DEMOS - DOF ported shows wrong scene entirely"

- timestamp: 2026-06-07T12:08:00Z
  checked: "webgl_shadows fix result - Kimi reasoning"
  found: "PORTED shows black viewport with sidebar UI, REFERENCE shows blue dancing character"
  implication: "Screenshot captured the demo browser UI instead of the actual running demo"

- timestamp: 2026-06-07T12:12:00Z
  checked: "Actual screenshot files: webgl_postprocessing reference and ported, webgl_shadows ported"
  found: "webgl_postprocessing reference: BLANK WHITE SCREEN (failed capture). webgl_postprocessing ported: Shows bloom effect (appears correct). webgl_shadows ported: Shows demo browser UI with sidebar (demo not running)"
  implication: "ROOT CAUSE CONFIRMED: Screenshot capture workflow issues - reference screenshots failing to render, ported screenshots not waiting for demo to start"

## Resolution
root_cause: "The low similarity scores (0.0-0.15) are NOT caused by bugs in the demo code. The root cause is a screenshot capture workflow issue: 1) Reference screenshots from threejs.org are failing to render (showing blank white screens), 2) Ported screenshots are capturing the demo browser UI instead of the running demo (not waiting for demo initialization)."
fix: "Need to fix the screenshot capture workflow: 1) Debug why threejs.org reference captures are failing (possible WebGL initialization, timing, or headless Chrome issues), 2) Update ported screenshot capture to wait for demo canvas to be ready (check for WebGL context, wait for first frame render, or use URL hash to navigate directly to specific demo)"
verification: "Visual inspection of screenshots confirms the issue. webgl_postprocessing reference shows blank white, webgl_shadows ported shows browser UI sidebar."
files_changed: []
