---
phase: 13-visual-regression
plan: "01"
subsystem: playwright-test
tags: [playwright, screenshots, visual-regression, reference-capture, demo-list]
dependency_graph:
  requires: []
  provides:
    - playwright.test/scripts/demo-list.ts
    - playwright.test/tests/reference-screenshots.test.ts
    - playwright.test/test-results/screenshots/ (200 refreshed PNGs)
  affects:
    - Plans 02-04 (reference screenshot comparison pipeline)
tech_stack:
  added: []
  patterns:
    - Playwright 2-phase test (serial probe + parallel capture)
    - HTTP HEAD probe for URL reachability (8s timeout, concurrency=20)
    - WebGL pixel-presence check via gl.readPixels
    - Canvas-only screenshot (excludes UI chrome)
    - ESM module with .js extension imports
key_files:
  created:
    - playwright.test/scripts/demo-list.ts
    - playwright.test/tests/reference-screenshots.test.ts
    - playwright.test/test-results/demo-report.json
  modified: []
decisions:
  - "Used probeUrl() HTTP HEAD at runtime rather than hardcoded mapping — more reliable, discovers 404s dynamically"
  - "Phase A (serial probe) + Phase B (parallel capture) pattern avoids shared in-memory state across Playwright workers"
  - "Canvas-only screenshot via page.locator('canvas').first() for cleaner comparison surface"
  - "CUSTOM_DEMO_IDS seeded from RESEARCH.md Category 2 list; runtime 404 catches any missed entries"
metrics:
  duration: "~16 minutes (Task 0: 14.3min test run + Task 1+2: file creation)"
  completed_date: "2026-06-01"
  tasks_completed: 3
  tasks_total: 3
  files_created: 3
---

# Phase 13 Plan 01: Reference Screenshot Infrastructure Summary

Refreshed 200 ported demo screenshots and created the canonical demo list module and Playwright reference screenshot capture test. These artifacts form the foundation for downstream LLM-based visual comparison in Plans 02-04.

## Tasks Completed

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 0 | Refresh ported demo screenshots | f7e1e3d | playwright.test/test-results/screenshots/ (201 PNGs), demo-report.json |
| 1 | Create demo-list.ts — canonical demo list | 14fa44f | playwright.test/scripts/demo-list.ts |
| 2 | Create reference-screenshots.test.ts | 3854365 | playwright.test/tests/reference-screenshots.test.ts |

## Artifacts Produced

### playwright.test/scripts/demo-list.ts
- Exports `ALL_DEMOS: DemoEntry[]` — 200 entries, exact copy from demo-verification.test.ts
- Exports `CUSTOM_DEMO_IDS: Set<string>` — 65+ custom demo IDs without threejs.org equivalents
- Exports `DemoEntry` and `ReferenceEntry` interfaces
- Exports path constants: `THREEJS_BASE`, `PORTED_SCREENSHOT_DIR`, `REFERENCE_SCREENSHOT_DIR`, `REFERENCE_MANIFEST_PATH`
- Exports `probeUrl(url)` — HTTP HEAD with 8s timeout, shared utility

### playwright.test/tests/reference-screenshots.test.ts
- Phase A (serial): probes all 200 demos via HTTP HEAD, writes initial `reference-manifest.json`
- Phase B (parallel, 5 workers): captures canvas-only screenshots from threejs.org for reachable demos
- Uses `--use-angle=gl` Chromium launch arg for WebGL in headless Chrome
- Pixel-presence check detects blank/unrendered canvases; marks as `reference-load-failed`
- Custom demos marked `no-reference`; unreachable demos marked `http-404`
- Thread-safe manifest updates (each test owns unique demo ID)
- Run with: `npx playwright test tests/reference-screenshots.test.ts --project=chromium --workers=5`

### playwright.test/test-results/screenshots/ (Task 0)
- 201 PNG files (200 demos + _demo-home.png)
- All 200 demos passed verification: 200/200 pass, 0 fail, 0 errors
- Freshly captured 2026-06-01

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Dev server path mismatch in playwright.config.js**
- **Found during:** Task 0
- **Issue:** playwright.config.js webServer command points to `../three-demo` (does not exist); actual demo is at `../demo`
- **Fix:** Started the dev server manually at port 5194 before running the test. The `reuseExistingServer: true` setting then allowed the test to proceed.
- **Files modified:** None (deviation handled operationally, not by modifying config — changing playwright.config.js would affect other tests)
- **Commit:** f7e1e3d (screenshot refresh includes the dev server workaround)

**2. [Rule 2 - Missing functionality] Added `test-results/` directory creation for manifest**
- **Found during:** Task 2 implementation review
- **Issue:** Plan code snippet did not include `fs.mkdirSync` for the manifest's parent directory
- **Fix:** Added `fs.mkdirSync(path.dirname(manifestPath), { recursive: true })` in Phase A before writing initial manifest
- **Files modified:** playwright.test/tests/reference-screenshots.test.ts
- **Commit:** 3854365

## Known Stubs

None. All exports are fully implemented. The reference-screenshots.test.ts file does not need to be run as part of this plan (per orchestrator instructions) — it is a complete implementation ready for execution.

## Threat Flags

No new security surface beyond what is in the plan's threat model. The `probeUrl()` function uses HTTPS with 8s timeout (mitigates T-13-02). No auth tokens or sensitive data in any created file.

## Self-Check: PASSED

- `playwright.test/scripts/demo-list.ts` exists: FOUND
- `playwright.test/tests/reference-screenshots.test.ts` exists: FOUND
- `playwright.test/test-results/screenshots/` has 201 PNG files: CONFIRMED (200+ threshold met)
- Commit f7e1e3d exists: CONFIRMED
- Commit 14fa44f exists: CONFIRMED
- Commit 3854365 exists: CONFIRMED
- grep `use-angle=gl` in reference-screenshots.test.ts: CONFIRMED
- grep `reference-manifest.json` in reference-screenshots.test.ts: CONFIRMED
- grep `reference-load-failed` in reference-screenshots.test.ts: CONFIRMED
- ALL_DEMOS has 200 entries: CONFIRMED (200 `id:` fields in demo-list.ts matching source)
- CUSTOM_DEMO_IDS has 65+ entries: CONFIRMED
