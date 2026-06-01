---
phase: 13-visual-regression
type: human-uat
status: pending
created: 2026-06-01
---

# Phase 13: Human Verification Required

All automated checks passed (14/16 code-level verifications). The remaining 2 items are runtime artifacts that require executing the pipeline. 3 UAT tests confirm the pipeline actually runs end-to-end.

## UAT Tests

### UAT-1: Dry-run end-to-end pipeline

**From `playwright.test/` with Vite dev server running at `localhost:5194`:**

```bash
npm run test:visual:dry
```

**Expected:**
- 5 separate OS processes spawn (visible in task manager during run)
- Each logs `[Agent N]` prefixed output to console
- `test-results/partial-results/partial-0.json` through `partial-4.json` all written
- `test-results/visual-comparison-report.json` exists with valid JSON (`pass_rate`, `ci_gate_failed`, `results` array)
- `test-results/visual-comparison-report.html` exists and opens in browser with filter buttons
- Playwright test exits 0 (dry-run mock score 0.85 > 0.70 threshold → `ci_gate_failed: false`)

**Why human:** Requires a running Vite dev server and spawns 5 OS-level Playwright processes. Cannot safely execute without the dev server running.

---

### UAT-2: API-key-absent skip behavior

**With no `ANTHROPIC_API_KEY` set and no `VISUAL_COMPARISON_DRY_RUN`:**

```bash
npx playwright test tests/visual-comparison.test.ts --project=chromium
```

**Expected:** Test shows as **SKIPPED** (not FAILED) with message `ANTHROPIC_API_KEY is not set`

**Why human:** Requires Playwright execution context to observe `test.skip()` behavior vs. error path.

---

### UAT-3: Reference screenshot capture

**From `playwright.test/` with Vite dev server running:**

```bash
npx playwright test tests/reference-screenshots.test.ts --project=chromium --workers=5
```

**Expected:**
- `test-results/reference-manifest.json` created with ~200 demo entries
- Each entry has: `id`, `name`, `has_reference`, `reference_status`, `reference_url`, `screenshot_path`
- `test-results/reference-screenshots/` populated with PNG files for reachable demos
- Demos in `CUSTOM_DEMO_IDS` appear with `reference_status: "no-reference"`
- Blank/unrendered canvases appear with `reference_status: "reference-load-failed"`

**Why human:** HTTP HEAD probes to threejs.org and Playwright browser execution cannot be run in the automated verifier.

---

## Instructions

Run all 3 tests above. Reply **approved** if all pass, or describe any failures for remediation.
