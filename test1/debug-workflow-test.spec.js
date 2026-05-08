import { test, expect } from '@playwright/test';

test('Debug workflow: click, capture, refresh, next', async ({ page }) => {
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

    // Define specific positions to test (mimicking button positions)
    const testPositions = [
        { x: 0.3, y: 0.3, name: 'Button 1' },
        { x: 0.7, y: 0.3, name: 'Button 2' },
        { x: 0.3, y: 0.7, name: 'Button 3' },
        { x: 0.7, y: 0.7, name: 'Button 4' }
    ];

    console.log('Starting debug workflow test');

    for (let i = 0; i < testPositions.length; i++) {
        const position = testPositions[i];
        const clickX = canvasBox.x + (canvasBox.width * position.x);
        const clickY = canvasBox.y + (canvasBox.height * position.y);

        console.log(`\n--- Interaction ${i + 1}: ${position.name} ---`);

        // Step 1: Click the button/position
        console.log(`1. Clicking ${position.name} at (${clickX}, ${clickY})`);
        await page.mouse.click(clickX, clickY);

        // Wait for any immediate response
        await page.waitForTimeout(500);

        // Step 2: Capture data
        console.log('2. Capturing data...');
        const capturedData = await page.evaluate(() => {
            try {
                const data = {};

                // Capture WebGL info if available
                if (window.renderer && window.renderer.info) {
                    data.webgl = {
                        frame: window.renderer.info.render.frame,
                        calls: window.renderer.info.render.calls,
                        triangles: window.renderer.info.render.triangles,
                        geometries: window.renderer.info.memory.geometries,
                        textures: window.renderer.info.memory.textures
                    };
                }

                // Capture scene info if available
                if (window.scene) {
                    data.scene = {
                        objectCount: window.scene.children.length,
                        hasCamera: !!window.camera,
                        hasCube: !!window.cube
                    };
                }

                return data;
            } catch (e) {
                return { error: e.message };
            }
        });

        console.log('   Captured data:', JSON.stringify(capturedData, null, 2));

        // Step 3: Refresh the page
        console.log('3. Refreshing page...');
        await page.reload({ waitUntil: 'load' });
        await page.waitForTimeout(1000); // Wait for page to fully reload

        // Re-locate canvas after refresh
        const refreshedCanvas = page.locator('canvas');
        await expect(refreshedCanvas).toBeVisible({ timeout: 10000 });

        // Re-get canvas bounding box after refresh
        const refreshedCanvasBox = await refreshedCanvas.boundingBox();
        if (!refreshedCanvasBox) {
            throw new Error('Canvas not found after refresh');
        }

        console.log('   Page refreshed successfully');

        // Step 4: Click next button (if not the last iteration)
        if (i < testPositions.length - 1) {
            const nextPosition = testPositions[i + 1];
            const nextClickX = refreshedCanvasBox.x + (refreshedCanvasBox.width * nextPosition.x);
            const nextClickY = refreshedCanvasBox.y + (refreshedCanvasBox.height * nextPosition.y);

            console.log(`4. Clicking next: ${nextPosition.name} at (${nextClickX}, ${nextClickY})`);
            await page.mouse.click(nextClickX, nextClickY);
            await page.waitForTimeout(500); // Wait for transition
            console.log('   Next button clicked');
        } else {
            console.log('4. This was the last interaction, no next button to click');
        }

        console.log(`--- Completed Interaction ${i + 1} ---\n`);
    }

    console.log('Debug workflow test completed successfully!');
});

test('Sequential interaction with error handling', async ({ page }) => {
    await page.goto('http://localhost:5175/');
    await page.waitForLoadState('load');

    const canvas = page.locator('canvas');
    // Wait up to 15 seconds for canvas to appear
    await expect(canvas).toBeVisible({ timeout: 15000 });

    await page.waitForTimeout(2000);

    const canvasBox = await canvas.boundingBox();
    if (!canvasBox) {
        throw new Error('Canvas not found');
    }

    // Simple sequential workflow
    const workflowSteps = 4;

    for (let step = 1; step <= workflowSteps; step++) {
        try {
            console.log(`\n=== Workflow Step ${step} ===`);

            // Click at a specific position
            const clickX = canvasBox.x + (canvasBox.width * 0.5);
            const clickY = canvasBox.y + (canvasBox.height * 0.5);
            await page.mouse.click(clickX, clickY);
            console.log(`Clicked at center position`);

            // Capture data
            const data = await page.evaluate(() => {
                return {
                    timestamp: Date.now(),
                    frameCount: window.renderer?.info?.render?.frame || 0,
                    objectCount: window.scene?.children?.length || 0
                };
            });
            console.log(`Captured data:`, data);

            // Refresh if not the last step
            if (step < workflowSteps) {
                console.log(`Refreshing page...`);
                await page.reload({ waitUntil: 'load' });
                await page.waitForTimeout(1000);

                // Re-locate canvas
                const refreshedCanvas = page.locator('canvas');
                await expect(refreshedCanvas).toBeVisible({ timeout: 10000 });
                await page.waitForTimeout(500);

                console.log(`Page refreshed, moving to next step`);
            } else {
                console.log(`Last step completed, no refresh needed`);
            }

        } catch (error) {
            console.error(`Error in step ${step}:`, error.message);
            // Continue with next step instead of failing the entire test
        }
    }

    console.log('\nSequential interaction workflow completed');
});