# Memory Index

- [Testing approach](feedback_testing_approach.md) — pure tsx test runner setup, no vitest/jsdom
- [setNestedValue reactive bug fix](project_setNestedValue_fix.md) — bug found and fixed in observable path
- [Example wrapper test suite](project_example_tests.md) — 13 test files, 392 tests, all examples/jsm categories covered
- [Sample migration lessons](feedback_sample_migration.md) — $vs$$, viewport reset, auto-render conflicts, no as-any, visual check
- [Browser process management](feedback_browser_process.md) — kill only MCP Chrome PID, never taskkill /IM chrome.exe
- [Examples port project](project_examples_port.md) — porting 629 Three.js examples to JSX syntax
- [Kimi runner architecture](reference_kimi_runner.md) — orchestrator spawns workers, not direct API calls
- [Kimi API configuration](reference_kimi_api_config.md) — endpoint sfkey.cn, auto-reads KIMI_API_KEY from env
- [Chrome DevTools MCP headed mode](feedback_chrome_headed_mode.md) — requires manual launch with correct ports and profiles
- [dv CLI session state bug](feedback_dv_session_state.md) — session file doesn't track per-profile page IDs, use single profile for batch ops
- [dv CLI path](reference_dv_cli_path.md) — `D:\Developments\tslib\dv` (renamed from dv-cli); use dv not MCP/playwright, profiles 4/5/6 only
# currentDate
Today's date is 2026-06-21.
