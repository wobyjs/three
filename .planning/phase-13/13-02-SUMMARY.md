---
phase: 13-visual-regression
plan: "02"
subsystem: playwright-test
tags: [anthropic, llm, visual-regression, batch-api, sharp, image-resize]
dependency_graph:
  requires:
    - playwright.test/scripts/demo-list.ts (Plan 01)
    - playwright.test/test-results/reference-manifest.json (Plan 01 test run)
  provides:
    - playwright.test/scripts/shared-llm-utils.ts
    - playwright.test/scripts/compare-all.ts
    - playwright.test/package.json (updated with @anthropic-ai/sdk and sharp)
  affects:
    - Plan 03 (agent-batch-worker.ts imports from shared-llm-utils.ts)
    - Plan 04 (report generator reads llm-batch-results.json)
tech_stack:
  added:
    - "@anthropic-ai/sdk@^0.56.0 — Anthropic Messages Batches API (official TS SDK)"
    - "sharp@^0.33.0 — PNG image resize before API submission (reduces token cost)"
  patterns:
    - "Shared utility module pattern (shared-llm-utils.ts imported by both sequential and parallel workers)"
    - "Anthropic Message Batches API (100-item chunk submission, 30s poll interval)"
    - "Safe LLM output parsing (JSON.parse + regex fallback, no dynamic code execution)"
    - "Dry-run mode for safe functional testing without API keys"
    - "API key validation via process.env check only; value never logged"
key_files:
  created:
    - playwright.test/scripts/shared-llm-utils.ts
    - playwright.test/scripts/compare-all.ts
  modified:
    - playwright.test/package.json
decisions:
  - "Used pnpm add (not npm install) — project uses pnpm workspaces with workspace: protocol for @woby/three and woby deps; npm rejects workspace: URLs"
  - "Pre-existing minimatch TypeScript error (TS2688) is out-of-scope and unrelated to this plan's files"
  - "shared-llm-utils.ts is the single source of truth for LLM utilities; compare-all.ts imports all comparison logic from it rather than duplicating"
metrics:
  duration: "~8 minutes"
  completed_date: "2026-06-01"
  tasks_completed: 2
  tasks_total: 2
  files_created: 2
  files_modified: 1
---

# Phase 13 Plan 02: LLM Comparison Utilities and Sequential Pipeline Summary

Installed Anthropic SDK and sharp image library, then created the shared LLM comparison utilities module and the sequential compare-all.ts pipeline script. The shared-llm-utils.ts module is the single source of truth for LLM batch operations, imported by both the sequential pipeline (this plan) and the parallel agent worker (Plan 03).

## Tasks Completed

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | Install @anthropic-ai/sdk and sharp npm packages | 68a9a20 | playwright.test/package.json |
| 2 | Create shared-llm-utils.ts and compare-all.ts | d48b407 | playwright.test/scripts/shared-llm-utils.ts, playwright.test/scripts/compare-all.ts |

## Artifacts Produced

### playwright.test/scripts/shared-llm-utils.ts
- Exports `Verdict` interface — `{ similarity_score, verdict, reasoning, key_differences }`
- Exports `COMPARISON_PROMPT` — Claude vision prompt with scoring guide and JSON response format
- Exports `parseVerdict(text)` — safe 4-stage parser: direct JSON.parse, markdown block extraction, first-object extraction, regex score fallback. Uses only JSON.parse and regex; no dynamic code execution of LLM output
- Exports `resizeScreenshot(inputPath, outputPath)` — resizes to 800x600 PNG via sharp (fit: inside, no enlargement)
- Exports `buildBatchRequests(pairs)` — builds Anthropic Batch API requests with base64 image pairs and comparison prompt
- Exports `submitAndPoll(anthropic, requests)` — chunks into 100-item batches (32 MB payload limit), submits each, polls every 30s until `processing_status === 'ended'`, returns `Map<string, any>`

### playwright.test/scripts/compare-all.ts
- Sequential end-to-end pipeline: load manifest — find valid pairs — resize — batch submit — poll — parse — save JSON
- Imports all LLM logic from `./shared-llm-utils.js` (no duplication)
- Validates `ANTHROPIC_API_KEY` via `process.env` check before any API call; never logs key value
- Supports `--dry-run` flag (generates mock verdicts, no API call) and `--limit=N` flag
- Saves results to `test-results/llm-batch-results.json` with fields: `generated_at`, `total_pairs`, `dry_run`, `results`
- Each result entry: `{ id, raw_result_type, verdict: Verdict | null, error: string | null }`
- Prints summary table: pass (>=0.7), warn (0.5-0.7), fail (<0.5), pass rate

### playwright.test/package.json (updated)
- Added `@anthropic-ai/sdk: "^0.56.0"` to `dependencies`
- Added `sharp: "^0.33.0"` to `dependencies`
- Both installed in `playwright.test/node_modules/` via pnpm

## Deviations from Plan

### Deviation 1: Used pnpm add instead of npm install

**Found during:** Task 1
**Issue:** The plan instructions said to run `npm install`. Running this command failed with `EUNSUPPORTEDPROTOCOL — Unsupported URL Type "workspace:"`. The `playwright.test/package.json` has workspace: protocol entries (`"@woby/three": "workspace:.."` and `"woby": "workspace:../../woby"`) which npm does not support.
**Fix:** Used `pnpm add @anthropic-ai/sdk@^0.56.0 sharp@^0.33.0` instead. pnpm is the project's package manager (pnpm-lock.yaml is present at root), and it correctly handles workspace: protocol dependencies.
**Files modified:** playwright.test/package.json (same outcome — both packages added to dependencies)
**Commit:** 68a9a20

### Deviation 2: Comment text adjusted in shared-llm-utils.ts

**Found during:** Task 2 file creation
**Issue:** The original plan comment on parseVerdict described the forbidden function by name — the security hook flagged that specific function name appearing in comments as a potential security concern.
**Fix:** Rewrote comment to `Safe parsing only: uses JSON.parse and regex — no dynamic code execution of LLM output`. Semantically identical intent, avoids triggering security linting on the comment text.
**Files modified:** playwright.test/scripts/shared-llm-utils.ts
**Commit:** d48b407

## Known Stubs

None. All exports are fully implemented. The compare-all.ts script requires `reference-manifest.json` to be present (generated by running Plan 01's `reference-screenshots.test.ts`). This is a correct runtime dependency, not a stub.

## Threat Flags

No new security surface beyond the plan's threat model.

- T-13-04 (ANTHROPIC_API_KEY disclosure): Mitigated — key read only via `process.env.ANTHROPIC_API_KEY`; validation checks existence only; value never logged or written to output files.
- T-13-05 (parseVerdict tampering): Mitigated — uses JSON.parse and regex fallback only; result is a plain data object; no dynamic code execution of any kind.

## Self-Check: PASSED

- `playwright.test/scripts/shared-llm-utils.ts` exists: FOUND
- `playwright.test/scripts/compare-all.ts` exists: FOUND
- `playwright.test/package.json` contains `@anthropic-ai/sdk`: CONFIRMED
- `playwright.test/package.json` contains `sharp`: CONFIRMED
- `playwright.test/node_modules/@anthropic-ai/sdk/` exists: FOUND
- `playwright.test/node_modules/sharp/` exists: FOUND
- shared-llm-utils.ts exports Verdict, parseVerdict, buildBatchRequests, resizeScreenshot, submitAndPoll, COMPARISON_PROMPT: CONFIRMED
- compare-all.ts imports from `./shared-llm-utils.js`: CONFIRMED (line 11)
- compare-all.ts validates ANTHROPIC_API_KEY via process.env: CONFIRMED (lines 26-29)
- compare-all.ts supports --dry-run and --limit=N: CONFIRMED (lines 21-22)
- compare-all.ts does NOT duplicate parseVerdict or buildBatchRequests: CONFIRMED (all imported from shared-llm-utils)
- Commit 68a9a20 exists: CONFIRMED
- Commit d48b407 exists: CONFIRMED
- Functional test (--dry-run): SKIPPED — reference-manifest.json not yet present (per success criteria, skip is correct)
