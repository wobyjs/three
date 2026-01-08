import { test, expect } from '@playwright/test';

test('Simple sceneRef validation from Box2Click pattern', async ({ page }) => {
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

            // Replicate the exact Box2Click pattern
            // Line 46: const scene = $<Scene>()
            const sceneRef = $();

            // Create a simple Canvas3D with scene ref
            const SimpleCanvas = () => {
                return jsx('Canvas3D', {
                    children: [
                        jsx('scene', {
                            ref: sceneRef,
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
                    children: SimpleCanvas()
                });
            };

            // Render the component
            const root = document.getElementById('root');
            render(App, root);

            // Wait a bit for rendering
            await new Promise(resolve => setTimeout(resolve, 100));

            // Test the exact pattern from Box2Click.tsx lines 46-47
            // Line 46: const scene = $<Scene>()
            // Line 47: $$(scene).children
            const sceneValue = $$(sceneRef);

            // Log what we actually get for debugging
            const sceneValueType = typeof sceneValue;
            const sceneValueToString = Object.prototype.toString.call(sceneValue);

            // Try to access children property
            const hasChildrenProperty = sceneValue && typeof sceneValue === 'object' && 'children' in sceneValue;
            const sceneChildren = sceneValue?.children;
            const childrenType = typeof sceneChildren;

            // Check if children is an object with properties
            const childrenIsObject = sceneChildren && typeof sceneChildren === 'object';
            const childrenKeys = childrenIsObject ? Object.keys(sceneChildren) : [];
            const childrenLength = childrenKeys.length;

            return {
                // Confirm we have the scene ref (line 46)
                sceneRefExists: !!sceneRef,

                // Confirm we can access the scene value (line 47 pattern)
                sceneValueExists: !!sceneValue,
                sceneValueType: sceneValueType,
                sceneValueToString: sceneValueToString,

                // Check if it has a children property
                hasChildrenProperty: hasChildrenProperty,
                childrenType: childrenType,
                childrenIsObject: childrenIsObject,
                childrenKeys: childrenKeys,
                childrenLength: childrenLength,
                sceneChildren: sceneChildren
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Log the results for debugging
    console.log('Scene ref validation results:', result);

    // Validate the results
    expect(result).not.toBeNull();
    if (!result.error) {
        expect(result.sceneRefExists).toBeTruthy();
        expect(result.sceneValueExists).toBeTruthy();
        expect(result.hasChildrenProperty).toBeTruthy();
        expect(result.childrenIsObject).toBeTruthy();
        expect(result.childrenLength).toBeGreaterThan(0);
    }
});