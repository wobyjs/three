# Console-Checked Capture Workflow

## Summary of Investigation

**Dev Server**: Running at http://localhost:5174
**Console Error**: Only favicon.ico 404 (harmless)
**Canvas Status**: Present and rendering
**Screenshot**: Taken successfully at screenshots/debug-webgl_lines.png

## Console Error Types to Block On

- **error**: JavaScript runtime errors, WebGL context failures
- **assert**: Failed assertions indicating logic errors

## Safe to Ignore

- **warn**: Non-blocking warnings (deprecation notices, performance hints)
- **log**: Informational messages
- **info**: Debug information
- 404s for favicon.ico, optional resources

## Capture Workflow (per demo)

1. Navigate to `http://localhost:5174/#{demoId}`
2. Wait for canvas (5000ms timeout)
3. Check console for blocking errors (types: error, assert)
4. If blocking errors found:
   - Log error details
   - Mark as "console-errors"
   - Skip screenshot
5. If no blocking errors:
   - Take screenshot
   - Save to screenshots/ported/{demoId}.png
6. Close page or navigate to next

## Demo-Specific Wait Times

- **Loader demos** (`webgl_loader_*`): 10000ms (asset loading)
- **Standard demos**: 5000ms (default)

## Implementation Notes

This requires Chrome DevTools MCP calls executed by Claude in sequence:
- Cannot be scripted as standalone TypeScript
- Must be orchestrated through MCP tool invocations
- Each demo requires ~3-5 tool calls (navigate, wait, check, screenshot)

## Next Steps

1. Test workflow on small batch (5 demos)
2. Verify console error detection works
3. Scale to full 134 demos if successful
4. Compare results with previous Kimi report