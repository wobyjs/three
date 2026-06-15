# Screenshot Capture Fix - Canvas-Only Capture

## Problem
Previous screenshots captured the full viewport including the demo browser sidebar, resulting in Kimi comparisons of the UI instead of the WebGL content.

## Root Cause
`mcp__chrome-devtools__take_screenshot` captures the entire page viewport, not individual elements.

## Solution
Capture canvas content via JavaScript and save as PNG, then verify with Kimi.

## Workflow

### Step 1: Navigate to demo
```javascript
mcp__chrome-devtools__navigate_page({
  type: "url",
  url: "http://localhost:5173/#webgl_shadows"
})
```

### Step 2: Wait for demo to load (8 seconds)
```javascript
await sleep(8)
```

### Step 3: Verify canvas exists and has content
```javascript
mcp__chrome-devtools__evaluate_script({
  function: () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return { error: 'no canvas' };

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    const pixels = new Uint8Array(4);
    gl.readPixels(canvas.width/2, canvas.height/2, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    return {
      hasCanvas: true,
      width: canvas.width,
      height: canvas.height,
      centerPixel: Array.from(pixels),
      hasContent: pixels.some(p => p > 0)
    };
  }
})
```

### Step 4: Capture canvas via dataURL
```javascript
mcp__chrome-devtools__evaluate_script({
  function: () => {
    const canvas = document.querySelector('canvas');
    return canvas.toDataURL('image/png');
  }
})
```

Then save dataURL to file using Node.js script.

## Status
- Investigation complete
- Canvas IS rendering but shows black content
- Need to debug why scene content is black (not a screenshot capture issue)