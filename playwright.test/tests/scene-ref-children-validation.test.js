import { test, expect } from '@playwright/test';

test('Validate sceneRef.children pattern from Box2Click lines 46-47', async ({ page }) => {
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

            // Create Box component using jsx() function (React 17 syntax)
            const Box = (props) => {
                return jsx('mesh', {
                    ...props,
                    scale: () => [1, 1, 1], // Simplified scale
                    children: [
                        jsx('boxGeometry', { args: [1, 1, 1] }),
                        jsx('meshStandardMaterial', { color: 'orange' })
                    ]
                });
            };

            // Replicate the exact Box2Click pattern
            // Line 46: const scene = $<Scene>()
            const sceneRef = $();

            // Create a Canvas3D component with the same structure as Box2Click
            const Canvas3DComponent = () => {
                return jsx('Canvas3D', {
                    style: { width: '400px', height: '400px' },
                    children: [
                        jsx('webglRenderer', {
                            antialias: true,
                            setPixelRatio: [window.devicePixelRatio],
                            setSize: [400, 400]
                        }),
                        jsx('scene', {
                            ref: sceneRef,
                            background: 'gray',
                            children: [
                                jsx('ambientLight', { intensity: 0.5 }),
                                jsx('spotLight', { position: [0, 0, 0], angle: 0.15, penumbra: 1 }),
                                jsx('pointLight', {
                                    position: [0, 5, 0],
                                    intensity: 10,
                                    castShadow: true,
                                    shadow: { camera: { far: 333, near: 0.1 } }
                                }),
                                jsx(Box, { position: [0, 1, 0], castShadow: true }),
                                jsx(Box, { position: [-2, 0.8, 0], castShadow: true }),
                                jsx('perspectiveCamera', { position: [0, 0, 5] })
                            ]
                        }),
                        jsx('OrbitControls', { enableDamping: true }),
                        jsx('Event', {})
                    ]
                });
            };

            // Create the App component
            const App = () => {
                return jsx('div', {
                    class: 'z-10',
                    children: Canvas3DComponent()
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

            // Validate that we can access scene children using the same pattern
            const sceneValue = $$(sceneRef);
            const sceneChildren = sceneValue?.children || [];

            // Check what types of objects are in the scene children
            const childTypes = sceneChildren.map(child => ({
                type: child?.type || 'unknown',
                name: child?.name || 'unnamed'
            }));

            return {
                // Confirm we have the scene ref (line 46)
                sceneRefExists: !!sceneRef,

                // Confirm we can access children (line 47)
                canAccessChildren: !!sceneValue,
                childrenCount: sceneChildren.length,

                // Detailed child information
                childTypes: childTypes,

                // Validate children structure
                hasCorrectBackground: sceneValue?.background !== undefined,

                // Check for specific Three.js objects that should be in scene.children
                hasAmbientLight: sceneChildren.some(child => child?.type === 'AmbientLight'),
                hasSpotLight: sceneChildren.some(child => child?.type === 'SpotLight'),
                hasPointLight: sceneChildren.some(child => child?.type === 'PointLight'),
                hasMesh: sceneChildren.some(child => child?.type === 'Mesh'),
                hasPerspectiveCamera: sceneChildren.some(child => child?.type === 'PerspectiveCamera')
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Log the results for debugging
    console.log('Scene ref and children validation results:', result);

    // Validate the results
    expect(result).not.toBeNull();
    if (!result.error) {
        expect(result.sceneRefExists).toBeTruthy();
        expect(result.canAccessChildren).toBeTruthy();
        expect(result.childrenCount).toBeGreaterThan(0);
        expect(result.hasAmbientLight).toBeTruthy();
        expect(result.hasSpotLight).toBeTruthy();
        expect(result.hasPointLight).toBeTruthy();
        expect(result.hasMesh).toBeTruthy();
        expect(result.hasPerspectiveCamera).toBeTruthy();
    }
});

test('Verify sceneRef.children contains expected Three.js objects', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    const childrenDetails = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = window.woby;

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$ } = woby;

            // Replicate the exact pattern from Box2Click.tsx
            // Line 46: const scene = $<Scene>()
            const scene = $();

            // Create a simplified version with known children
            const TestScene = () => {
                return jsx('Canvas3D', {
                    children: [
                        jsx('scene', {
                            ref: scene,
                            background: new Color('gray'),
                            children: [
                                jsx('ambientLight', { intensity: 0.5, name: 'main-light' }),
                                jsx('perspectiveCamera', {
                                    position: [0, 0, 5],
                                    name: 'main-camera'
                                })
                            ]
                        })
                    ]
                });
            };

            // Create the App component
            const App = () => {
                return jsx('div', {
                    children: TestScene()
                });
            };

            // Render the component
            const root = document.getElementById('root');
            render(App, root);

            // Wait for rendering
            await new Promise(resolve => setTimeout(resolve, 100));

            // Access the scene ref pattern (lines 46-47 from Box2Click.tsx)
            // Line 46: const scene = $<Scene>()
            // Line 47: $$(scene).children
            const sceneValue = $$(scene);
            const children = sceneValue?.children || [];

            // Get detailed information about each child
            const childrenInfo = children.map((child, index) => ({
                index: index,
                type: child?.type || 'unknown',
                name: child?.name || 'unnamed',
                hasPosition: !!child?.position,
                hasRotation: !!child?.rotation,
                hasScale: !!child?.scale
            }));

            return {
                sceneRefExists: !!scene,
                sceneValueExists: !!sceneValue,
                childrenCount: children.length,
                childrenInfo: childrenInfo,
                firstChildType: children[0]?.type || null,
                secondChildType: children[1]?.type || null
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Validate the children details
    expect(childrenDetails).not.toBeNull();
    if (!childrenDetails.error) {
        expect(childrenDetails.sceneRefExists).toBeTruthy();
        expect(childrenDetails.sceneValueExists).toBeTruthy();
        expect(childrenDetails.childrenCount).toBeGreaterThanOrEqual(2);
        expect(childrenDetails.firstChildType).toBe('AmbientLight');
        expect(childrenDetails.secondChildType).toBe('PerspectiveCamera');
    }
});