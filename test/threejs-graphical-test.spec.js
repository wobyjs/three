import { test, expect } from '@playwright/test';

test('Three.js canvas graphical testing', async ({ page }) => {
    // Navigate to the Three.js application
    await page.goto('http://localhost:5175/');
    await page.waitForLoadState('load');

    // Wait for canvas to be rendered
    const canvas = page.locator('canvas');
    // Wait up to 15 seconds for canvas to appear
    await expect(canvas).toBeVisible({ timeout: 15000 });

    // Wait for WebGL context to be initialized
    await page.waitForTimeout(2000);

    // Test 1: Check if canvas has proper dimensions
    const canvasSize = await canvas.evaluate((el) => ({
        width: el.width,
        height: el.height
    }));
    console.log('Canvas size:', canvasSize);

    // Test 2: Check for WebGL rendering by capturing screenshot
    const screenshot1 = await page.screenshot({
        fullPage: true,
        path: 'test-results/canvas-before-interaction.png'
    });

    // Test 3: Interact with 3D scene (example interactions)
    // Click at specific coordinates on canvas to rotate/interact with 3D object
    const canvasBox = await canvas.boundingBox();
    if (canvasBox) {
        // Simulate mouse interaction on canvas
        await page.mouse.move(
            canvasBox.x + canvasBox.width / 2,
            canvasBox.y + canvasBox.height / 2
        );
        await page.mouse.down();
        await page.mouse.move(
            canvasBox.x + canvasBox.width / 2 + 100,
            canvasBox.y + canvasBox.height / 2 + 50
        );
        await page.mouse.up();
    }

    // Wait for animation to complete
    await page.waitForTimeout(1000);

    // Capture screenshot after interaction
    const screenshot2 = await page.screenshot({
        fullPage: true,
        path: 'test-results/canvas-after-interaction.png'
    });

    // Test 4: Check for visual changes (basic comparison)
    // Note: For more advanced visual testing, consider using pixelmatch or similar libraries
    const screenshotsAreDifferent = !screenshot1.equals(screenshot2);
    console.log('Visual changes detected:', screenshotsAreDifferent);

    // Test 5: Check for WebGL context errors in console
    const errorLogs = [];
    page.on('console', (msg) => {
        if (msg.type() === 'error') {
            errorLogs.push(msg.text());
            console.log('Console error:', msg.text());
        }
    });

    // Test 6: Evaluate WebGL context and scene objects
    const webglInfo = await page.evaluate(() => {
        // This assumes Three.js is available globally as THREE
        // Adjust according to your application's structure
        try {
            // Get renderer info (if available in global scope)
            if (window.renderer) {
                const info = window.renderer.info;
                return {
                    render: info.render,
                    memory: info.memory,
                    programs: info.programs ? info.programs.length : null
                };
            }
            return { error: 'Renderer not found in global scope' };
        } catch (e) {
            return { error: e.message };
        }
    });

    console.log('WebGL Info:', webglInfo);

    // Test 7: Check for specific elements in the 3D scene
    // This requires exposing scene information to the global scope in your app
    const sceneInfo = await page.evaluate(() => {
        try {
            if (window.scene) {
                return {
                    objectCount: window.scene.children.length,
                    hasCamera: !!window.scene.getObjectByName('Camera'),
                    hasLights: window.scene.children.some(child => child.isLight)
                };
            }
            return { error: 'Scene not found in global scope' };
        } catch (e) {
            return { error: e.message };
        }
    });

    console.log('Scene Info:', sceneInfo);

    // Validate that no critical errors occurred
    const criticalErrors = errorLogs.filter(log =>
        log.includes('WebGL') ||
        log.includes('THREE') ||
        log.includes('shader') ||
        log.includes('context')
    );

    if (criticalErrors.length > 0) {
        console.log('Critical WebGL errors found:', criticalErrors);
    } else {
        console.log('No critical WebGL errors detected');
    }
});

// Advanced test for specific 3D object interactions
test('Three.js object selection and manipulation', async ({ page }) => {
    await page.goto('http://localhost:5175/');
    await page.waitForLoadState('load');

    // Wait for canvas
    const canvas = page.locator('canvas');
    // Wait up to 15 seconds for canvas to appear
    await expect(canvas).toBeVisible({ timeout: 15000 });

    // Wait for scene to load
    await page.waitForTimeout(3000);

    // Get canvas bounding box
    const canvasBox = await canvas.boundingBox();
    if (!canvasBox) {
        throw new Error('Canvas not found');
    }

    // Perform a series of clicks to select/interact with 3D objects
    const interactions = [
        { x: 0.25, y: 0.25 }, // Top-left quadrant
        { x: 0.75, y: 0.25 }, // Top-right quadrant
        { x: 0.25, y: 0.75 }, // Bottom-left quadrant
        { x: 0.75, y: 0.75 }  // Bottom-right quadrant
    ];

    for (let i = 0; i < interactions.length; i++) {
        const interaction = interactions[i];
        const x = canvasBox.x + (canvasBox.width * interaction.x);
        const y = canvasBox.y + (canvasBox.height * interaction.y);

        // Click at specific position
        await page.mouse.click(x, y);

        // Wait for any selection effects
        await page.waitForTimeout(500);

        // Capture state after interaction
        const stateInfo = await page.evaluate(() => {
            try {
                // Check if any object is selected (depends on your app implementation)
                if (window.selectedObject) {
                    return {
                        selected: window.selectedObject.name || 'Unnamed object',
                        position: window.selectedObject.position,
                        type: window.selectedObject.type
                    };
                }
                return { selected: null };
            } catch (e) {
                return { error: e.message };
            }
        });

        console.log(`Interaction ${i + 1} result:`, stateInfo);

        // Take screenshot after each interaction
        await page.screenshot({
            path: `test-results/interaction-${i + 1}.png`
        });
    }
});

// Performance and rendering test
test('Three.js performance and rendering validation', async ({ page }) => {
    await page.goto('http://localhost:5175/');
    await page.waitForLoadState('load');

    const canvas = page.locator('canvas');
    // Wait up to 15 seconds for canvas to appear
    await expect(canvas).toBeVisible({ timeout: 15000 });

    // Wait for initialization
    await page.waitForTimeout(2000);

    // Measure frame rate (simplified approach)
    const frameRateData = await page.evaluate(() => {
        return new Promise((resolve) => {
            const frameTimes = [];
            const frameCount = 60; // Measure 60 frames
            let frameIndex = 0;

            function measureFrame() {
                const startTime = performance.now();

                requestAnimationFrame(() => {
                    const endTime = performance.now();
                    frameTimes.push(endTime - startTime);
                    frameIndex++;

                    if (frameIndex < frameCount) {
                        measureFrame();
                    } else {
                        // Calculate average frame time and FPS
                        const avgFrameTime = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
                        const fps = 1000 / avgFrameTime;
                        resolve({
                            avgFrameTime: avgFrameTime.toFixed(2),
                            fps: fps.toFixed(2),
                            minFrameTime: Math.min(...frameTimes).toFixed(2),
                            maxFrameTime: Math.max(...frameTimes).toFixed(2)
                        });
                    }
                });
            }

            measureFrame();
        });
    });

    console.log('Performance data:', frameRateData);

    // Validate performance (adjust thresholds as needed)
    const performance = frameRateData;
    if (performance.fps < 30) {
        console.warn(`Low frame rate detected: ${performance.fps} FPS`);
    } else {
        console.log(`Good performance: ${performance.fps} FPS`);
    }
});