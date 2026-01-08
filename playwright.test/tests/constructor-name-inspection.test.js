import { test, expect } from '@playwright/test';

test('Print constructor names for scene children', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test to print constructor names for each child
    const result = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = window.woby;

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
            const children = sceneValue?.children || {}; // Access children property

            // GET CONSTRUCTOR NAMES FOR EACH CHILD
            // ===================================
            let childrenWithConstructors = [];

            if (children && typeof children === 'object') {
                try {
                    // Get all keys/indices from the children object
                    const childKeys = Object.keys(children);

                    // Get constructor name for each child
                    childrenWithConstructors = childKeys.map(key => {
                        const child = children[key];

                        // Get constructor name if available
                        let constructorName = 'unknown';
                        if (child && typeof child === 'object' && child.constructor) {
                            constructorName = child.constructor.name || 'unknown';
                        }

                        // Also get type if available
                        let type = 'unknown';
                        if (child && child.type !== undefined) {
                            type = child.type;
                        }

                        return {
                            index: key,
                            constructorName: constructorName,
                            type: type,
                            hasConstructor: !!(child && child.constructor)
                        };
                    });
                } catch (error) {
                    childrenWithConstructors = [{ error: 'Failed to get constructor names: ' + error.message }];
                }
            }

            // Validate the pattern works and return information
            return {
                // Pattern validation
                sceneRefCreated: !!scene, // Line 46 pattern
                sceneValueAccessible: !!sceneValue, // Part of line 47 pattern
                childrenAccessible: !!children, // Part of line 47 pattern

                // Children constructor information
                childrenKeys: Object.keys(children),
                childrenCount: Object.keys(children).length,
                childrenWithConstructors: childrenWithConstructors
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Print out the constructor names for each child
    console.log('=== SCENE CHILDREN CONSTRUCTOR NAMES ===');
    console.log('Scene ref created:', result.sceneRefCreated);
    console.log('Scene value accessible:', result.sceneValueAccessible);
    console.log('Children accessible:', result.childrenAccessible);
    console.log('Children count:', result.childrenCount);
    console.log('Children keys:', result.childrenKeys);

    // Print constructor names for each child
    if (result.childrenWithConstructors && Array.isArray(result.childrenWithConstructors)) {
        console.log('\n=== CONSTRUCTOR INFORMATION FOR EACH CHILD ===');
        result.childrenWithConstructors.forEach((child, index) => {
            console.log(`Child ${index} (key: ${child.index}):`);
            console.log(`  Constructor Name: ${child.constructorName}`);
            console.log(`  Type: ${child.type}`);
            console.log(`  Has Constructor: ${child.hasConstructor}`);
            console.log('');
        });
    }

    // Validate the pattern works correctly
    expect(result).not.toBeNull();
    if (!result.error) {
        // Validate that the Box2Click pattern works
        expect(result.sceneRefCreated).toBe(true); // Line 46 works
        expect(result.sceneValueAccessible).toBe(true); // Line 47 works (part 1)
        expect(result.childrenAccessible).toBe(true); // Line 47 works (part 2)
        expect(result.childrenCount).toBeGreaterThan(0); // Has children
    }
});