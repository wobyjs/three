# @woby/three Playwright Tests

This directory contains Playwright tests for the @woby/three components.

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Ensure the three-demo application is running on port 5173:
   ```bash
   cd ../three-demo
   pnpm dev
   ```

## Running Tests

### Headless Mode
```bash
pnpm test
```

### UI Mode (for debugging)
```bash
pnpm test:ui
```

### Debug Mode
```bash
pnpm test:debug
```

### View Test Reports
```bash
pnpm test:report
```

## Test Structure

- `tests/homepage.test.js` - Basic homepage loading and button interaction tests
- `tests/three-components.test.js` - Specific tests for 3D components

## What's Being Tested

1. Homepage loads correctly
2. Buttons are clickable and responsive
3. 3D components render (Plane, Box3, BoxStaticText, etc.)
4. CSS3D components work (Periodic Table, WebGL CSS3D)
5. Basic interaction with 3D scenes

## Notes

- Tests expect the three-demo application to be running on http://localhost:5173
- Tests automatically start the dev server if not running
- Canvas elements are checked for 3D rendering
- Both WebGL and CSS3D components are tested