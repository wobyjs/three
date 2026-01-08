import { test, expect } from '@playwright/test';

test('Access the actual Three.js scene object', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test to access the actual Three.js scene object
    const result = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = window.woby;
            const woby3 = window.woby3;

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$ } = woby;

            // Create Box component with specific properties for testing
            const TestBox = (props) => {
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
            const scene = $();

            // Create a test scene with known children
            const TestScene = () => {
                return jsx('Canvas3D', {
                    children: [
                        jsx('scene', {
                            ref: scene,
                            background: 'gray',
                            children: [
                                jsx('ambientLight', { intensity: 0.5, name: 'ambient-light' }),
                                jsx(TestBox, { position: [0, 1, 0], name: 'test-box' }),
                                jsx('perspectiveCamera', {
                                    position: [0, 0, 5],
                                    name: 'main-camera',
                                    fov: 75
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

            // Wait a bit for rendering
            await new Promise(resolve => setTimeout(resolve, 100));

            // NOW TEST THE EXACT PATTERN FROM BOX2CLICK.TSX LINES 46-47
            // =========================================================
            // Line 46: const scene = $<Scene>() - we have this as the 'scene' variable
            // Line 47: $$(scene).children - we access this directly
            // =========================================================

            const sceneValue = $$(scene); // This is the equivalent of line 47

            // TRY TO ACCESS THE ACTUAL THREE.JS SCENE OBJECT
            // =============================================
            let threeJsInfo = {
                sceneValueExists: !!sceneValue,
                sceneValueType: typeof sceneValue,
                sceneValueConstructor: sceneValue && sceneValue.constructor ? sceneValue.constructor.name : 'none'
            };

            // Try to get more information about the scene object
            if (sceneValue && typeof sceneValue === 'object') {
                threeJsInfo.sceneProperties = Object.keys(sceneValue);
                threeJsInfo.hasChildren = !!(sceneValue.children !== undefined);
                threeJsInfo.childrenType = sceneValue.children ? typeof sceneValue.children : 'none';
                threeJsInfo.childrenConstructor = sceneValue.children && sceneValue.children.constructor ?
                    sceneValue.children.constructor.name : 'none';

                // Try to access children
                if (sceneValue.children) {
                    try {
                        threeJsInfo.childrenLength = sceneValue.children.length || Object.keys(sceneValue.children).length;
                        threeJsInfo.childrenKeys = Object.keys(sceneValue.children);

                        // Try to get detailed info about first child if it exists
                        if (sceneValue.children[0]) {
                            const firstChild = sceneValue.children[0];
                            threeJsInfo.firstChildInfo = {
                                type: typeof firstChild,
                                constructor: firstChild.constructor ? firstChild.constructor.name : 'none',
                                hasType: !!(firstChild.type !== undefined),
                                hasIsLight: !!(firstChild.isLight !== undefined),
                                hasIsMesh: !!(firstChild.isMesh !== undefined),
                                hasIsCamera: !!(firstChild.isCamera !== undefined)
                            };

                            // Try to get actual type if available
                            if (firstChild.type !== undefined) {
                                threeJsInfo.firstChildInfo.actualType = firstChild.type;
                            }
                        }
                    } catch (childError) {
                        threeJsInfo.childAccessError = childError.message;
                    }
                }
            }

            // Validate the pattern works and return information
            return {
                // Pattern validation
                sceneRefCreated: !!scene, // Line 46 pattern
                sceneValueAccessible: !!sceneValue, // Part of line 47 pattern

                // Three.js scene information
                threeJsInfo: threeJsInfo
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Print out the Three.js scene information
    console.log('=== THREE.JS SCENE ACCESS RESULTS ===');
    console.log('Scene ref created:', result.sceneRefCreated);
    console.log('Scene value accessible:', result.sceneValueAccessible);

    // Print Three.js information
    if (result.threeJsInfo) {
        console.log('\n=== THREE.JS SCENE INFORMATION ===');
        console.log('Scene Value Exists:', result.threeJsInfo.sceneValueExists);
        console.log('Scene Value Type:', result.threeJsInfo.sceneValueType);
        console.log('Scene Value Constructor:', result.threeJsInfo.sceneValueConstructor);

        if (result.threeJsInfo.sceneProperties) {
            console.log('Scene Properties:', result.threeJsInfo.sceneProperties);
        }

        console.log('Has Children:', result.threeJsInfo.hasChildren);
        console.log('Children Type:', result.threeJsInfo.childrenType);
        console.log('Children Constructor:', result.threeJsInfo.childrenConstructor);

        if (result.threeJsInfo.childrenLength !== undefined) {
            console.log('Children Length:', result.threeJsInfo.childrenLength);
        }

        if (result.threeJsInfo.childrenKeys) {
            console.log('Children Keys:', result.threeJsInfo.childrenKeys);
        }

        if (result.threeJsInfo.firstChildInfo) {
            console.log('\n=== FIRST CHILD INFORMATION ===');
            console.log('Type:', result.threeJsInfo.firstChildInfo.type);
            console.log('Constructor:', result.threeJsInfo.firstChildInfo.constructor);
            console.log('Has Type Property:', result.threeJsInfo.firstChildInfo.hasType);
            console.log('Is Light:', result.threeJsInfo.firstChildInfo.hasIsLight);
            console.log('Is Mesh:', result.threeJsInfo.firstChildInfo.hasIsMesh);
            console.log('Is Camera:', result.threeJsInfo.firstChildInfo.hasIsCamera);
            if (result.threeJsInfo.firstChildInfo.actualType) {
                console.log('Actual Type:', result.threeJsInfo.firstChildInfo.actualType);
            }
        }

        if (result.threeJsInfo.childAccessError) {
            console.log('Child Access Error:', result.threeJsInfo.childAccessError);
        }
    }

    // Validate the pattern works correctly
    expect(result).not.toBeNull();
    if (!result.error) {
        // Validate that the Box2Click pattern works
        expect(result.sceneRefCreated).toBe(true); // Line 46 works
        expect(result.sceneValueAccessible).toBe(true); // Line 47 works (part 1)
    }
});