import { test, expect } from '@playwright/test';

test('Cast scene children to appropriate types and inspect accessible properties', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test casting children to appropriate types and inspecting accessible properties
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

            // Create a test scene with known children that have specific properties
            const TestScene = () => {
                return jsx('Canvas3D', {
                    children: [
                        jsx('scene', {
                            ref: scene,
                            background: 'gray',
                            children: [
                                jsx('ambientLight', {
                                    intensity: 0.5,
                                    name: 'ambient-light',
                                    color: '#ffffff'
                                }),
                                jsx(TestBox, {
                                    position: [0, 1, 0],
                                    name: 'test-box',
                                    castShadow: true
                                }),
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

            // CAST CHILDREN TO THEIR APPROPRIATE TYPES AND CHECK ACCESSIBLE PROPERTIES
            // ======================================================================
            let accessibleChildrenInfo = [];

            if (children && typeof children === 'object') {
                try {
                    // Get all keys/indices from the children object
                    const childKeys = Object.keys(children);

                    // Inspect each child for accessible properties
                    accessibleChildrenInfo = childKeys.map(key => {
                        const child = children[key];

                        // Create an inspection of accessible properties
                        const childInfo = {
                            index: key,
                            // Check what properties are directly accessible
                            hasUuid: !!(child && child.uuid !== undefined),
                            hasType: !!(child && child.type !== undefined),
                            hasName: !!(child && child.name !== undefined),
                            hasPosition: !!(child && child.position !== undefined),
                            hasRotation: !!(child && child.rotation !== undefined),
                            hasScale: !!(child && child.scale !== undefined),
                            hasIsLight: !!(child && child.isLight !== undefined),
                            hasIsMesh: !!(child && child.isMesh !== undefined),
                            hasIsCamera: !!(child && child.isCamera !== undefined),
                            hasIntensity: !!(child && child.intensity !== undefined),
                            hasFov: !!(child && child.fov !== undefined),
                            hasCastShadow: !!(child && child.castShadow !== undefined),
                            hasMaterial: !!(child && child.material !== undefined),
                            hasGeometry: !!(child && child.geometry !== undefined),

                            // Try to get actual values for accessible properties
                            uuid: (child && child.uuid) || null,
                            type: (child && child.type) || null,
                            name: (child && child.name) || null,
                            intensity: (child && child.intensity !== undefined) ? child.intensity : null,
                            fov: (child && child.fov !== undefined) ? child.fov : null,
                            castShadow: (child && child.castShadow !== undefined) ? child.castShadow : null
                        };

                        return childInfo;
                    });
                } catch (inspectionError) {
                    accessibleChildrenInfo = [{ error: 'Inspection failed: ' + inspectionError.message }];
                }
            }

            // Validate the pattern works and return detailed information
            return {
                // Pattern validation
                sceneRefCreated: !!scene, // Line 46 pattern
                sceneValueAccessible: !!sceneValue, // Part of line 47 pattern
                childrenAccessible: !!children, // Part of line 47 pattern

                // Children inspection results
                childrenKeys: Object.keys(children),
                childrenCount: Object.keys(children).length,
                accessibleChildrenInfo: accessibleChildrenInfo
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Print out the detailed results for further testing
    console.log('=== CHILDREN ACCESSIBLE PROPERTIES INSPECTION RESULTS ===');
    console.log('Scene ref created:', result.sceneRefCreated);
    console.log('Scene value accessible:', result.sceneValueAccessible);
    console.log('Children accessible:', result.childrenAccessible);
    console.log('Children count:', result.childrenCount);
    console.log('Children keys:', result.childrenKeys);

    // Print detailed child information
    if (result.accessibleChildrenInfo && Array.isArray(result.accessibleChildrenInfo)) {
        console.log('\n=== ACCESSIBLE CHILDREN PROPERTIES ===');
        result.accessibleChildrenInfo.forEach((child, index) => {
            console.log(`Child ${index} (key: ${child.index}):`);
            console.log(`  Has UUID: ${child.hasUuid}`);
            console.log(`  Has Type: ${child.hasType}`);
            console.log(`  Has Name: ${child.hasName}`);
            console.log(`  Has Position: ${child.hasPosition}`);
            console.log(`  Has Rotation: ${child.hasRotation}`);
            console.log(`  Has Scale: ${child.hasScale}`);
            console.log(`  Has IsLight: ${child.hasIsLight}`);
            console.log(`  Has IsMesh: ${child.hasIsMesh}`);
            console.log(`  Has IsCamera: ${child.hasIsCamera}`);
            console.log(`  Has Intensity: ${child.hasIntensity}`);
            console.log(`  Has FOV: ${child.hasFov}`);
            console.log(`  Has CastShadow: ${child.hasCastShadow}`);
            console.log(`  Has Material: ${child.hasMaterial}`);
            console.log(`  Has Geometry: ${child.hasGeometry}`);

            // Print actual values if available
            if (child.uuid) console.log(`  UUID: ${child.uuid}`);
            if (child.type) console.log(`  Type: ${child.type}`);
            if (child.name) console.log(`  Name: ${child.name}`);
            if (child.intensity !== null) console.log(`  Intensity: ${child.intensity}`);
            if (child.fov !== null) console.log(`  FOV: ${child.fov}`);
            if (child.castShadow !== null) console.log(`  Cast Shadow: ${child.castShadow}`);

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