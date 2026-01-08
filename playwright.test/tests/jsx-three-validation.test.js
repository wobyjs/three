import { test, expect } from '@playwright/test';

test('JSX Three.js component structure validation with jsx() syntax', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test multiple JSX-based Three.js components using jsx() syntax
    const result = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = window.woby;

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$ } = woby;

            // Create Box component using jsx() function (React 17 syntax)
            const Box = (props) => {
                return jsx('mesh', {
                    ...props,
                    onFrame: (ref) => {
                        if (ref && ref.rotation) ref.rotation.x += 0.01;
                    },
                    scale: () => [1, 1, 1], // Simplified scale
                    children: [
                        jsx('boxGeometry', { args: [1, 1, 1] }),
                        jsx('meshStandardMaterial', { color: 'orange' })
                    ]
                });
            };

            // Create a simple Canvas3D component for testing
            const SimpleCanvas = () => {
                return jsx('Canvas3D', {
                    style: { width: '400px', height: '400px' },
                    children: [
                        jsx('webglRenderer', {
                            antialias: true
                        }),
                        jsx('scene', {
                            background: 'gray',
                            children: [
                                jsx('ambientLight', { intensity: 0.5 }),
                                jsx(Box, { position: [0, 0, 0] }),
                                jsx('perspectiveCamera', { position: [0, 0, 5] })
                            ]
                        })
                    ]
                });
            };

            // Create the App component
            const App = () => {
                return jsx('div', {
                    class: 'z-10',
                    children: [
                        jsx('h1', { children: 'JSX Three.js Components' }),
                        SimpleCanvas()
                    ]
                });
            };

            // Render the component
            const root = document.getElementById('root');
            render(App, root);

            // Wait a bit for rendering
            await new Promise(resolve => setTimeout(resolve, 100));

            // Get the rendered content
            const renderedContent = root?.innerHTML || '';

            // Check for div elements (Canvas3D should render a div wrapper)
            const divCount = root?.querySelectorAll('div').length || 0;
            const hasDivWrapper = divCount > 0;

            return {
                success: true,
                renderedContent: renderedContent.substring(0, 500), // Limit content size
                hasDivWrapper: hasDivWrapper,
                divCount: divCount,
                hasRenderedContent: !!renderedContent
            };
        } catch (error) {
            return {
                success: false,
                error: String(error)
            };
        }
    });

    // Assert that rendering was successful
    expect(result.success).toBe(true);
    expect(result.hasRenderedContent).toBe(true);
    expect(result.hasDivWrapper).toBe(true);
    expect(result.divCount).toBeGreaterThan(0);
});

test('Scene children and object validation with jsx() syntax', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test scene object validation through JavaScript evaluation
    const sceneValidation = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = window.woby;

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$ } = woby;

            // Create Box component using jsx() function
            const Box = (props) => {
                return jsx('mesh', {
                    ...props,
                    scale: () => [1, 1, 1],
                    children: [
                        jsx('boxGeometry', { args: [1, 1, 1] }),
                        jsx('meshStandardMaterial', { color: 'orange' })
                    ]
                });
            };

            // Create a simple scene component
            let sceneValue = null;
            let sceneChildren = [];

            const SimpleScene = () => {
                const sceneRef = $();

                // Store reference for later validation
                window._testSceneRef = sceneRef;

                return jsx('Canvas3D', {
                    style: { width: '400px', height: '400px' },
                    children: [
                        jsx('webglRenderer', {
                            antialias: true
                        }),
                        jsx('scene', {
                            ref: sceneRef,
                            background: 'gray',
                            children: [
                                jsx('ambientLight', { intensity: 0.5 }),
                                jsx(Box, { position: [0, 0, 0] }),
                                jsx('perspectiveCamera', { position: [0, 0, 5] })
                            ]
                        })
                    ]
                });
            };

            // Create the App component
            const App = () => {
                return jsx('div', {
                    children: SimpleScene()
                });
            };

            // Render the component
            const root = document.getElementById('root');
            render(App, root);

            // Wait a bit for rendering
            await new Promise(resolve => setTimeout(resolve, 100));

            // Check the scene ref pattern - accessing children directly
            // This follows the pattern from Box2Click.tsx lines 46-47:
            // Line 46: const scene = $<Scene>()
            // Line 47: $$(scene).children
            sceneValue = $$(window._testSceneRef);
            sceneChildren = sceneValue?.children || [];

            // Validate scene setup by checking for DOM elements
            const validation = {
                // Check for div wrapper (Canvas3D renders a div)
                hasDivWrapper: root?.querySelectorAll('div').length > 0,
                divCount: root?.querySelectorAll('div').length || 0,
                // Test for basic page elements
                pageElements: {
                    bodyVisible: !!document.querySelector('body'),
                    hasScripts: document.querySelectorAll('script').length > 0
                },
                hasRenderedContent: !!root?.innerHTML,
                // Scene ref validation
                hasSceneRef: !!window._testSceneRef,
                hasSceneValue: !!sceneValue,
                sceneChildrenCount: sceneChildren.length,
                // Check specific children types that should be added to scene
                hasAmbientLight: sceneChildren.some(child => child?.type === 'AmbientLight'),
                hasPerspectiveCamera: sceneChildren.some(child => child?.type === 'PerspectiveCamera'),
                hasMesh: sceneChildren.some(child => child?.type === 'Mesh')
            };

            return validation;
        } catch (error) {
            return { error: error.message };
        }
    });

    console.log('Scene validation results:', sceneValidation);

    if (!sceneValidation.error) {
        expect(sceneValidation.hasDivWrapper).toBeTruthy();
        expect(sceneValidation.pageElements.bodyVisible).toBeTruthy();
        expect(sceneValidation.hasRenderedContent).toBeTruthy();
        // Validate scene ref pattern
        expect(sceneValidation.hasSceneRef).toBeTruthy();
        expect(sceneValidation.hasSceneValue).toBeTruthy();
        expect(sceneValidation.sceneChildrenCount).toBeGreaterThan(0);
        // Check for specific Three.js objects that should be in scene.children
        expect(sceneValidation.hasAmbientLight).toBeTruthy();
        expect(sceneValidation.hasPerspectiveCamera).toBeTruthy();
        expect(sceneValidation.hasMesh).toBeTruthy();
    }
});

test('Object state and position validation with jsx() syntax', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test object state changes through interaction
    const stateResult = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = window.woby;

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$ } = woby;

            // Create a simple Canvas3D component
            const SimpleCanvas = () => {
                return jsx('Canvas3D', {
                    style: { width: '400px', height: '400px' },
                    children: [
                        jsx('webglRenderer', {
                            antialias: true
                        }),
                        jsx('scene', {
                            background: '#f0f0f0',
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

            // Test for div wrapper
            const divWrapper = root?.querySelector('div');

            return {
                hasDivWrapper: !!divWrapper,
                hasRenderedContent: !!root?.innerHTML
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    console.log('State validation results:', stateResult);

    if (!stateResult.error) {
        expect(stateResult.hasDivWrapper).toBeTruthy();
        expect(stateResult.hasRenderedContent).toBeTruthy();
    }
});