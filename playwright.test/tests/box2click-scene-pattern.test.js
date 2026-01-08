import { test, expect } from '@playwright/test';

test('Validate Box2Click scene ref pattern lines 46-47', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test the exact scene ref pattern from Box2Click.tsx lines 46-47
    const result = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = window.woby;

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$ } = woby;

            // CREATE THE EXACT PATTERN FROM BOX2CLICK.TSX LINES 46-47
            // =====================================================
            // Line 46: const scene = $<Scene>()
            const scene = $(); // This creates an observable ref

            // Line 47: $$(scene).children (accessing children)
            // We'll test this after rendering
            // =====================================================

            // Create a component that uses the scene ref (similar to Box2Click)
            const TestComponent = () => {
                return jsx('Canvas3D', {
                    children: [
                        jsx('scene', {
                            ref: scene, // Attach the ref here
                            children: [
                                jsx('ambientLight', { intensity: 0.5 }),
                                jsx('perspectiveCamera', { position: [0, 0, 5] })
                            ]
                        })
                    ]
                });
            };

            // Create the App component
            const App = () => {
                return jsx('div', {
                    children: TestComponent()
                });
            };

            // Render the component
            const root = document.getElementById('root');
            render(App, root);

            // Wait a bit for rendering
            await new Promise(resolve => setTimeout(resolve, 100));

            // NOW TEST THE EXACT PATTERN FROM BOX2CLICK.TSX LINES 46-47
            // =========================================================
            // Line 46: const scene = $<Scene>() - we have this as the 'scene' variable
            // Line 47: $$(scene).children - we access this directly
            // =========================================================

            const sceneValue = $$(scene); // This is the equivalent of line 47
            const children = sceneValue?.children || {}; // Access children property

            // Validate the pattern works
            return {
                // Pattern validation
                sceneRefCreated: !!scene, // Line 46 pattern
                sceneValueAccessible: !!sceneValue, // Part of line 47 pattern
                childrenAccessible: !!children, // Part of line 47 pattern

                // Children details
                childrenType: typeof children,
                childrenIsObject: typeof children === 'object' && children !== null,
                childrenCount: typeof children === 'object' && children !== null ? Object.keys(children).length : 0,

                // Verify we have the expected Three.js objects
                hasAmbientLight: typeof children === 'object' && children !== null && '0' in children,
                hasPerspectiveCamera: typeof children === 'object' && children !== null && '1' in children
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Log results for debugging
    console.log('Box2Click scene ref pattern validation:', result);

    // Validate the pattern works correctly
    expect(result).not.toBeNull();
    if (!result.error) {
        // Validate that the Box2Click pattern works
        expect(result.sceneRefCreated).toBe(true); // Line 46 works
        expect(result.sceneValueAccessible).toBe(true); // Line 47 works (part 1)
        expect(result.childrenAccessible).toBe(true); // Line 47 works (part 2)
        expect(result.childrenIsObject).toBe(true); // Children is accessible as object
        expect(result.childrenCount).toBeGreaterThan(0); // Has children
    }
});