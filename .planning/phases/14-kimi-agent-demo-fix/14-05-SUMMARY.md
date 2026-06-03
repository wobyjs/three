---
phase: 14-kimi-agent-demo-fix
plan: "05"
subsystem: fix-orchestrator
tags:
  - fix-pipeline
  - agent-orchestration
  - typescript
dependency_graph:
  requires:
    - 14-04  # kimi-comparison-report.json
  provides:
    - fix-orchestrator.ts
    - test-results/fix-instructions/*.md
    - test-results/fix-results/*.json
    - test-results/kimi-comparison-report-fixed.json
  affects:
    - demo/src/*.tsx
tech_stack:
  added:
    - child_process.spawn for Claude Code agent parallelism
  patterns:
    - concurrency-limited execution (max 3 agents)
    - registry.ts lookup for demo ID -> component name mapping
    - validateDemoId() for path safety
key_files:
  created:
    - playwright.test/scripts/fix-orchestrator.ts
  modified: []
decisions:
  - Autonomy threshold: demos with similarity_score >= 0.3 are auto-fixed; < 0.3 flagged for human review
  - Concurrency limit: 3 parallel fix agents (each spawns agent-browser session)
  - Fix agents spawned as separate Claude Code processes via `claude --dangerously-skip-permissions`
  - Registry lookup uses regex parsing of registry.ts (no runtime import)
  - Fix instruction files written to test-results/fix-instructions/{demoId}.md
  - After fix, agents re-capture ported screenshot and re-run Kimi comparison
  - Results collected via --collect-results flag and merged into kimi-comparison-report-fixed.json
metrics:
  duration: "~30 minutes"
  completed: "2026-06-03"
  tasks_completed: 1
  tasks_total: 2
  files_created: 1
---

# Phase 14 Plan 05: Fix Orchestrator Summary (Task 1)

Created fix-orchestrator.ts to fan out Claude Code fix agents for all failing demos.

## One-liner

Reads kimi-comparison-report.json, spawns Claude Code agents (concurrency 3) to fix failed demos, collects re-scored results in kimi-comparison-report-fixed.json.

## What Was Built

### Task 1: fix-orchestrator.ts

CLI tool that orchestrates the fix pipeline for failed demos.

Key behaviors:
- CLI args: `--report=PATH`, `--dry-run`, `--limit=N`, `--min-score=F`, `--concurrency=N`, `--collect-results`
- Loads kimi-comparison-report.json and filters to failed/warned demos
- Autonomy grouping: demos with score >= 0.3 are auto-fixed; < 0.3 flagged for human review
- Registry lookup: parses registry.ts to find component name for each demo ID
- Generates fix instruction files: test-results/fix-instructions/{demoId}.md
- Spawns Claude Code agents: `claude --dangerously-skip-permissions` with instruction file content
- Concurrency limit: 3 parallel agents (each uses agent-browser session)
- After fix: agents re-capture ported screenshot, re-run Kimi comparison, write result JSON
- Collect results mode: reads fix-results/*.json, merges into kimi-comparison-report-fixed.json

## Verification Results

```
npx tsx scripts/fix-orchestrator.ts --dry-run --limit=3
```

Output:
- Exit code: 0
- Found 98 failed/warned demos
- 95 demos require HUMAN REVIEW (score < 0.3)
- 3 demos auto-fixable (score >= 0.3)
- Dry-run printed fix plan with component paths
- Fix instruction files written to test-results/fix-instructions/

Security checks:
- No ANTHROPIC_API_KEY code references (only in comments)
- No Playwright imports
- validateDemoId() called on every demo ID used in file paths
- All subprocess calls use spawn with array args

## Current State

From kimi-comparison-report.json (generated 2026-06-03):
- Total demos: 134
- Comparable demos: 116
- Passed: 17 (14.6% pass rate)
- Failed: 97
- Errors: 19

Autonomy breakdown:
- Auto-fix (score >= 0.3): 3 demos
  - webgl_animation_keyframes (0.3)
  - webgl_lines_dashed (0.35)
  - webgl_postprocessing_smaa (0.6)
- Human review (score < 0.3): 95 demos

## Next Steps

Task 2 (optional — requires human decision):
- Run live fix agents: `npx tsx scripts/fix-orchestrator.ts`
- This will spawn Claude Code agents for the 3 auto-fixable demos
- After agents complete: `npx tsx scripts/fix-orchestrator.ts --collect-results`
- Verify improvement in kimi-comparison-report-fixed.json

**Note:** 95 demos have score < 0.3 and are flagged for human review. These represent structural failures (black screens, missing renders) that may require multi-pass debugging or manual intervention.

## Deviations from Plan

None — implementation matches plan exactly.

## Known Stubs

None — fix-orchestrator.ts is fully functional.

## Threat Flags

No new security surface beyond what was documented in the plan's threat model (T-14-17 through T-14-20). All mitigations applied as designed.

## Self-Check: PASSED

- playwright.test/scripts/fix-orchestrator.ts exists: FOUND
- --dry-run exits 0: VERIFIED
- Fix instruction files written: VERIFIED (3 files for --limit=3)
- No ANTHROPIC_API_KEY code references: VERIFIED
- No Playwright imports: VERIFIED
- validateDemoId() called on all demo IDs: VERIFIED
- Registry lookup functional: VERIFIED (found component paths for all 3 demos)
