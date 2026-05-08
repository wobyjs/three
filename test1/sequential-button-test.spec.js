import { test, expect } from '@playwright/test';

test('Sequential button interaction workflow', async ({ page }) => {
    // Navigate to the Three.js application
    await page.goto('http://localhost:5175/');
    await page.waitForLoadState('load');

    // Wait for canvas to be rendered
    const canvas = page.locator('canvas');
    // Wait up to 15 seconds for canvas to appear
    await expect(canvas).toBeVisible({ timeout: 15000 });

    // Wait for WebGL context to be initialized
    await page.waitForTimeout(2000);

    // Get canvas bounding box for interactions
    const canvasBox = await canvas.boundingBox();
    if (!canvasBox) {
        throw new Error('Canvas not found');
    }

    // Define the number of sequential interactions to perform
    const interactionCount = 5;

    for (let i = 0; i < interactionCount; i++) {
        console.log(`Starting interaction ${i + 1}`);

        // Step 1: Click button 1 (or interact with 3D scene)
        // For this example, we'll click at different positions on the canvas
        const clickX = canvasBox.x + (canvasBox.width * 0.25 * (i % 4));
        const clickY = canvasBox.y + (canvasBox.height * 0.25 * Math.floor(i / 2));

        await page.mouse.click(clickX, clickY);
        console.log(`Clicked at position (${clickX}, ${clickY})`);

        // Step 2: Capture data
        const capturedData = await page.evaluate(() => {
            try {
                // Capture WebGL renderer info
                if (window.renderer && window.renderer.info) {
                    return {
                        frame: window.renderer.info.render.frame,
                        calls: window.renderer.info.render.calls,
                        triangles: window.renderer.info.render.triangles,
                        geometries: window.renderer.info.memory.geometries,
                        textures: window.renderer.info.memory.textures
                    };
                }
                return { error: 'Renderer info not available' };
            } catch (e) {
                return { error: e.message };
            }
        });

        console.log(`Captured data for interaction ${i + 1}:`, capturedData);

        // Step 3: Refresh the page
        await page.reload({ waitUntil: 'load' });
        await page.waitForTimeout(1000); // Wait for page to fully reload

        // Re-locate canvas after refresh
        const refreshedCanvas = page.locator('canvas');
        await expect(refreshedCanvas).toBeVisible({ timeout: 10000 });

        console.log(`Page refreshed for interaction ${i + 1}`);

        // Step 4: Click next (different position for next interaction)
        const nextClickX = canvasBox.x + (canvasBox.width * 0.75);
        const nextClickY = canvasBox.y + (canvasBox.height * 0.75);

        await page.mouse.click(nextClickX, nextClickY);
        console.log(`Clicked 'next' at position (${nextClickX}, ${nextClickY})`);

        // Wait for any animations or transitions
        await page.waitForTimeout(500);

        console.log(`Completed interaction ${i + 1}`);
    }

    console.log('All sequential interactions completed successfully');
});

test('Button interaction with visual verification', async ({ page }) => {
    await page.goto('http://localhost:5175/');
    await page.waitForLoadState('load');

    const canvas = page.locator('canvas');
    // Wait up to 15 seconds for canvas to appear
    await expect(canvas).toBeVisible({ timeout: 15000 });

    // Wait for initialization
    await page.waitForTimeout(2000);

    // Take initial screenshot
    await page.screenshot({ path: 'test-results/initial-state.png' });

    // Get canvas bounding box
    const canvasBox = await canvas.boundingBox();
    if (!canvasBox) {
        throw new Error('Canvas not found');
    }

    // Perform interaction sequence
    const positions = [
        { x: 0.25, y: 0.25 },
        { x: 0.75, y: 0.25 },
        { x: 0.25, y: 0.75 },
        { x: 0.75, y: 0.75 },
        { x: 0.5, y: 0.5 }
    ];

    for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];
        const x = canvasBox.x + (canvasBox.width * pos.x);
        const y = canvasBox.y + (canvasBox.height * pos.y);

        // Click at position
        await page.mouse.click(x, y);

        // Wait for any visual changes
        await page.waitForTimeout(1000);

        // Take screenshot after interaction
        await page.screenshot({ path: `test-results/after-interaction-${i + 1}.png` });

        // Refresh page
        await page.reload({ waitUntil: 'load' });
        await page.waitForTimeout(1000);

        // Re-locate canvas
        const refreshedCanvas = page.locator('canvas');
        await expect(refreshedCanvas).toBeVisible({ timeout: 10000 });

        // Click at next position
        if (i < positions.length - 1) {
            const nextPos = positions[i + 1];
            const nextX = canvasBox.x + (canvasBox.width * nextPos.x);
            const nextY = canvasBox.y + (canvasBox.height * nextPos.y);
            await page.mouse.click(nextX, nextY);
            await page.waitForTimeout(500);
        }
    }

    console.log('Visual verification test completed');
});