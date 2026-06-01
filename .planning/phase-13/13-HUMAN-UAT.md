---
phase: 13-visual-regression
type: human-uat
status: pending
created: 2026-06-01
updated: 2026-06-01
---

# Phase 13: Human Verification Required

## UAT-1: Retake canvas-only screenshots, then dry-run comparison

Screenshots in `test-results/screenshots/` are full-page (sidebar included). The fix in `demo-verification.test.ts` now screenshots only the `<canvas>` element. Re-run the verification test, then the dry-run comparison.

**Step A — Re-take canvas-only screenshots.** From `playwright.test/` with Vite dev server at `localhost:5194`:
```bash
npx playwright test tests/demo-verification.test.ts --project=chromium
```
Expected: 200 PNG files in `test-results/screenshots/` showing only the 3D canvas (no sidebar).

**Step B — Dry-run comparison.** With dev server still running:
```bash
npm run test:visual:dry
```
Expected:
- 5 OS processes spawn with `[Agent N]` output
- `test-results/partial-results/partial-0.json` through `partial-4.json` written
- `test-results/visual-comparison-report.json` and `.html` produced
- Playwright exits 0 (dry-run mock score 0.85 > 0.70 threshold)

---

## UAT-2: Claude Code agent comparison (no API key)

**Already demonstrated in session 2026-06-01.** Claude Code compared two images directly using the Agent tool — no `ANTHROPIC_API_KEY` required.

- Reference: threejs.org `webgl_geometry_cube` → textured wooden crate ✓
- Ported: `webgl_geometry_cube.png` (pre-fix, full-page screenshot) → correctly identified as gallery page
- Agent verdict: `similarity_score: 0.05`, `fail`, correct reasoning

**To run again:** Ask Claude Code to compare any two screenshot files. It uses the `Agent` tool with the `Read` tool on PNG files — Claude's built-in multimodal vision, no external API.

This replaces the prior UAT-2 which tested that `visual-comparison.test.ts` skips when API key is absent. That test behaviour is correct for CI environments; in Claude Code context, comparison is done via Agent tool instead.

---

## UAT-3: Reference screenshot capture

**From `playwright.test/` with Vite dev server running:**
```bash
npx playwright test tests/reference-screenshots.test.ts --project=chromium --workers=5
```
Expected:
- `test-results/reference-manifest.json` created with ~200 demo entries
- Each entry has: `id`, `name`, `has_reference`, `reference_status`, `reference_url`, `screenshot_path`
- `test-results/reference-screenshots/` populated with PNG files for reachable demos
- Demos in `CUSTOM_DEMO_IDS` appear with `reference_status: "no-reference"`
- Blank/unrendered canvases appear with `reference_status: "reference-load-failed"`

---

## Instructions

Run UAT-1 and UAT-3 (UAT-2 already confirmed). Reply **approved** when both pass, or describe any failures.
