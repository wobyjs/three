---
phase: 15
slug: update-actual-implemented-tested-visually-checked-with-plann
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-06-17
---

# Phase 15 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual visual + file-system assertion |
| **Config file** | none — no automated test suite for this phase |
| **Quick run command** | `node -e "require('./demo/src/registry.ts')"` (type-check registry) |
| **Full suite command** | `cd demo && pnpm build` (verifies all imports compile) |
| **Estimated runtime** | ~30 seconds (build) |

---

## Sampling Rate

- **After every task commit:** Verify demo appears in sidebar at `http://localhost:5173`
- **After every plan wave:** Run `cd demo && pnpm build` — must exit 0
- **Before `/gsd:verify-work`:** All registered demos compile + at least 5 new examples visually approved by Claude
- **Max feedback latency:** ~60 seconds (dv screenshot + Claude review)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| 15-01-01 | 01 | 1 | Doc audit | manual | Count files in demo/src/ | ⬜ pending |
| 15-01-02 | 01 | 1 | Registry dedup | automated | `grep -c "css3d_periodictable" demo/src/registry.ts` = 1 | ⬜ pending |
| 15-02-01 | 02 | 1 | Comparison results | manual | Verify test-results/ JSON exists | ⬜ pending |
| 15-03-xx | 03 | 2 | Each ported example | visual | dv screenshot → Claude approval | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- No new test infrastructure needed — validation is via visual approval and file-system counts.

*Existing infrastructure (pnpm build) covers compilation verification.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Example renders visually | D-03 (visual verify) | WebGL canvas can't be automated without GPU | `dv screenshot` → send @img to Claude in conversation |
| 1:1 fidelity with threejs.org | D-02 | Requires human/LLM visual comparison | Compare ported vs reference screenshot |
| Registry sidebar shows new demo | D-04 | UI rendering check | Open http://localhost:5173, check sidebar list |

---

## Validation Sign-Off

- [ ] All ported examples have Claude visual approval in conversation transcript
- [ ] STATE.md counts match `ls demo/src/*.tsx | wc -l` output
- [ ] Registry.ts has no duplicate entries
- [ ] `cd demo && pnpm build` exits 0
- [ ] Feedback latency < 120s (dv screenshot + Claude review per demo)
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
