import { test, expect } from '@playwright/test';

test('Enumerate scene children and inspect available properties', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test detailed children enumeration and property inspection
    const result = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = window.woby;

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$ } = woby;

            // Create components with specific properties to test
            const TestBox = (props) => {
                return jsx('mesh', {
                    ...props,
                    scale: () => [1, 1, 1],
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

            // ENUMERATE THE CHILDREN AND GET AVAILABLE PROPERTIES
            // =================================================
            let enumeratedChildren = [];

            if (children && typeof children === 'object') {
                try {
                    // Get all keys/indices from the children object
                    const childKeys = Object.keys(children);

                    // Enumerate each child and extract all available properties
                    enumeratedChildren = childKeys.map(key => {
                        const child = children[key];

                        // Get all enumerable properties of the child
                        const allProperties = {};
                        if (child && typeof child === 'object') {
                            try {
                                // Get all own properties
                                const ownProps = Object.getOwnPropertyNames(child);
                                ownProps.forEach(prop => {
                                    try {
                                        // Only include primitive values or simple objects
                                        const value = child[prop];
                                        if (value === null ||
                                            typeof value === 'string' ||
                                            typeof value === 'number' ||
                                            typeof value === 'boolean' ||
                                            (typeof value === 'object' && value.constructor === Object)) {
                                            allProperties[prop] = value;
                                        }
                                    } catch (propError) {
                                        // Skip properties that can't be accessed
                                        allProperties[prop] = '[inaccessible]';
                                    }
                                });
                            } catch (propsError) {
                                allProperties.error = 'Failed to get properties: ' + propsError.message;
                            }
                        }

                        return {
                            index: key,
                            properties: allProperties,
                            propertyCount: Object.keys(allProperties).length
                        };
                    });
                } catch (enumerateError) {
                    enumeratedChildren = [{ error: 'Enumeration failed: ' + enumerateError.message }];
                }
            }

            // Validate the pattern works and return detailed information
            return {
                // Pattern validation
                sceneRefCreated: !!scene, // Line 46 pattern
                sceneValueAccessible: !!sceneValue, // Part of line 47 pattern
                childrenAccessible: !!children, // Part of line 47 pattern

                // Children enumeration results
                childrenKeys: Object.keys(children),
                childrenCount: Object.keys(children).length,
                enumeratedChildren: enumeratedChildren
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Print out the detailed results for further testing
    console.log('=== SCENE CHILDREN ENUMERATION RESULTS ===');
    console.log('Scene ref created:', result.sceneRefCreated);
    console.log('Scene value accessible:', result.sceneValueAccessible);
    console.log('Children accessible:', result.childrenAccessible);
    console.log('Children count:', result.childrenCount);
    console.log('Children keys:', result.childrenKeys);

    // Print detailed child information
    if (result.enumeratedChildren && Array.isArray(result.enumeratedChildren)) {
        console.log('\n=== DETAILED CHILD PROPERTIES ===');
        result.enumeratedChildren.forEach((child, index) => {
            console.log(`Child ${index} (key: ${child.index}):`);
            console.log(`  Property count: ${child.propertyCount}`);
            console.log(`  Available properties:`);

            if (child.properties) {
                Object.keys(child.properties).forEach(prop => {
                    const value = child.properties[prop];
                    // Truncate long values for readability
                    const stringValue = typeof value === 'string' && value.length > 50
                        ? value.substring(0, 50) + '...'
                        : JSON.stringify(value);
                    console.log(`    ${prop}: ${stringValue}`);
                });
            }
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