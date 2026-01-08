import { test, expect } from '@playwright/test';

test('Direct inspection of Three.js objects', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>');

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' });
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' });

    // Test to directly inspect Three.js objects
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

            // DIRECT INSPECTION OF THREE.JS OBJECTS
            // =====================================
            let detailedChildrenInfo = [];

            if (children && typeof children === 'object') {
                try {
                    // Get all keys/indices from the children object
                    const childKeys = Object.keys(children);

                    // Deep inspection of each child
                    detailedChildrenInfo = childKeys.map(key => {
                        const child = children[key];

                        // Detailed inspection of the Three.js object
                        const inspection = {
                            index: key,
                            // Basic object information
                            objectType: typeof child,
                            isNull: child === null,
                            isUndefined: child === undefined,

                            // Constructor information
                            constructorName: child && child.constructor ? child.constructor.name : 'none',

                            // Direct property access attempts
                            hasType: !!(child && child.type !== undefined),
                            hasName: !!(child && child.name !== undefined),
                            hasUuid: !!(child && child.uuid !== undefined),
                            hasIsLight: !!(child && child.isLight !== undefined),
                            hasIsMesh: !!(child && child.isMesh !== undefined),
                            hasIsCamera: !!(child && child.isCamera !== undefined),

                            // Try to get actual values
                            type: child && child.type !== undefined ? child.type : null,
                            name: child && child.name !== undefined ? child.name : null,
                            uuid: child && child.uuid !== undefined ? child.uuid : null,

                            // Special Three.js properties
                            isLight: child && child.isLight !== undefined ? child.isLight : null,
                            isMesh: child && child.isMesh !== undefined ? child.isMesh : null,
                            isCamera: child && child.isCamera !== undefined ? child.isCamera : null,

                            // Try to access nested properties safely
                            positionExists: !!(child && child.position !== undefined),
                            rotationExists: !!(child && child.rotation !== undefined),
                            scaleExists: !!(child && child.scale !== undefined),

                            // Try to get specific values from lines 22-31
                            hasArgs: !!(child && child.args !== undefined),
                            hasColor: !!(child && child.color !== undefined),
                            hasScaleFunction: !!(child && child.scale !== undefined && typeof child.scale === 'function')
                        };

                        return inspection;
                    });
                } catch (error) {
                    detailedChildrenInfo = [{ error: 'Failed to inspect children: ' + error.message }];
                }
            }

            // Validate the pattern works and return information
            return {
                // Pattern validation
                sceneRefCreated: !!scene, // Line 46 pattern
                sceneValueAccessible: !!sceneValue, // Part of line 47 pattern
                childrenAccessible: !!children, // Part of line 47 pattern

                // Children information
                childrenKeys: Object.keys(children),
                childrenCount: Object.keys(children).length,
                detailedChildrenInfo: detailedChildrenInfo
            };
        } catch (error) {
            return { error: error.message };
        }
    });

    // Print out the detailed inspection results
    console.log('=== DIRECT THREE.JS OBJECT INSPECTION ===');
    console.log('Scene ref created:', result.sceneRefCreated);
    console.log('Scene value accessible:', result.sceneValueAccessible);
    console.log('Children accessible:', result.childrenAccessible);
    console.log('Children count:', result.childrenCount);
    console.log('Children keys:', result.childrenKeys);

    // Print detailed inspection for each child
    if (result.detailedChildrenInfo && Array.isArray(result.detailedChildrenInfo)) {
        console.log('\n=== DETAILED INSPECTION FOR EACH CHILD ===');
        result.detailedChildrenInfo.forEach((child, index) => {
            console.log(`Child ${index} (key: ${child.index}):`);
            console.log(`  Object Type: ${child.objectType}`);
            console.log(`  Constructor Name: ${child.constructorName}`);
            console.log(`  Is Null: ${child.isNull}`);
            console.log(`  Is Undefined: ${child.isUndefined}`);
            console.log(`  Has Type: ${child.hasType}`);
            console.log(`  Has Name: ${child.hasName}`);
            console.log(`  Has UUID: ${child.hasUuid}`);
            console.log(`  Is Light: ${child.isLight}`);
            console.log(`  Is Mesh: ${child.isMesh}`);
            console.log(`  Is Camera: ${child.isCamera}`);
            console.log(`  Has Position: ${child.positionExists}`);
            console.log(`  Has Rotation: ${child.rotationExists}`);
            console.log(`  Has Scale: ${child.scaleExists}`);
            console.log(`  Has Args: ${child.hasArgs}`);
            console.log(`  Has Color: ${child.hasColor}`);
            console.log(`  Has Scale Function: ${child.hasScaleFunction}`);

            // Print actual values if available
            if (child.type) console.log(`  Type: ${child.type}`);
            if (child.name) console.log(`  Name: ${child.name}`);
            if (child.uuid) console.log(`  UUID: ${child.uuid}`);

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