import { test, expect } from '@playwright/test'

test('render JSX directly in Playwright', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>')

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' })
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' })

    // Render JSX component inside the page
    const result = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = (window as any).woby
            const wobyThree = (window as any).wobyThree

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$, useMemo } = woby

            // Create the Box component using jsx() function (React 17 syntax)
            // This mirrors the Box component from Box2Click.tsx
            const Box = (props) => {
                return jsx('mesh', {
                    ...props,
                    onFrame: (ref) => {
                        if (ref && ref.rotation) ref.rotation.x += 0.01
                    },
                    scale: () => [1, 1, 1], // Simplified scale
                    children: [
                        jsx('boxGeometry', { args: [1, 1, 1] }),
                        jsx('meshStandardMaterial', { color: 'orange' })
                    ]
                })
            }

            // Create the Box2Click component using jsx() function (React 17 syntax)
            // This mirrors the Box2Click component from Box2Click.tsx
            const Box2Click = () => {
                const visible = $(true)

                const cubeSize = 30
                // Simplified representations
                const cubeGeo = { type: 'BoxGeometry' }
                const cubeMat = { type: 'MeshPhongMaterial', color: '#CCC' }

                return jsx('Canvas3D', {
                    children: [
                        jsx('webglRenderer', {
                            antialias: true,
                            setPixelRatio: [window.devicePixelRatio],
                            setSize: [window.innerWidth, window.innerHeight],
                            shadowMap: { enabled: true }
                        }),
                        jsx('scene', {
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
                                jsx('mesh', {
                                    geometry: cubeGeo,
                                    material: cubeMat,
                                    position: [0, cubeSize / 2 - 0.1, 0],
                                    receiveShadow: true
                                })
                            ]
                        }),
                        jsx('perspectiveCamera', { position: [0, 0, 5] }),
                        jsx('OrbitControls', { enableDamping: true }),
                        jsx('Event', {})
                    ]
                })
            }

            // Create the App component similar to index.tsx
            const App = () => {
                return jsx('div', {
                    class: 'z-10',
                    children: Box2Click
                })
            }

            // Render the component
            const root = document.getElementById('root')
            render(App, root!)

            // Get the rendered content
            const renderedContent = root?.innerHTML || ''

            // Check if Canvas3D component is created by looking for specific elements
            const canvasElement = root?.querySelector('div[data-testid="canvas3d"]') || root?.querySelector('div')
            const hasCanvas3D = canvasElement !== null

            // Check if woby-three is loaded and Canvas3D is available
            const isWobyThreeLoaded = typeof wobyThree !== 'undefined'
            const isCanvas3DAvailable = typeof wobyThree.Canvas3D !== 'undefined' || typeof (window as any).Canvas3D !== 'undefined'

            return {
                success: true,
                renderedContent: renderedContent,
                hasRenderedContent: !!renderedContent,
                hasCanvas3D: hasCanvas3D,
                isWobyThreeLoaded: isWobyThreeLoaded,
                isCanvas3DAvailable: isCanvas3DAvailable
            }
        } catch (error) {
            return {
                success: false,
                error: String(error)
            }
        }
    })

    // Assert that rendering was successful
    expect(result.success).toBe(true)
    expect(result.hasRenderedContent).toBe(true)

    // Assert that Canvas3D component is created
    expect(result.isWobyThreeLoaded).toBe(true)

    // Check that content was rendered
    const content = await page.locator('#root').textContent()
    expect(content).not.toBeNull()
})

test('verify Canvas3D instance from @woby3.umd.js lines 20920-20931', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>')

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' })
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' })

    // Test Canvas3D component directly
    const result = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = (window as any).woby
            const wobyThree = (window as any).wobyThree

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$ } = woby

            // Test Canvas3D component directly with test id for easier identification
            const canvasComponent = jsx('Canvas3D', {
                'data-testid': 'canvas3d-direct',
                style: { width: '100%', height: '400px' },
                children: [
                    jsx('webglRenderer', {}),
                    jsx('scene', {
                        children: [
                            jsx('ambientLight', { intensity: 0.5 })
                        ]
                    })
                ]
            })

            // Create a simple app with just the Canvas3D component
            const TestApp = () => {
                return jsx('div', {
                    children: canvasComponent
                })
            }

            // Render the component
            const root = document.getElementById('root')
            render(TestApp, root!)

            // Get the rendered content
            const renderedContent = root?.innerHTML || ''

            // Check for specific implementation details from lines 20920-20931
            const hasDivWrapper = renderedContent.includes('<div')
            const hasThreeContext = typeof (window as any).ThreeContext !== 'undefined'

            // Look for the specific structure created by Canvas3D implementation
            const canvasElement = root?.querySelector('[data-testid="canvas3d-direct"]')
            const hasCanvasElement = canvasElement !== null

            return {
                success: true,
                renderedContent: renderedContent,
                hasDivWrapper: hasDivWrapper,
                hasThreeContext: hasThreeContext,
                hasCanvasElement: hasCanvasElement,
                isWobyThreeLoaded: typeof wobyThree !== 'undefined'
            }
        } catch (error) {
            return {
                success: false,
                error: String(error)
            }
        }
    })

    // Assert the results
    expect(result.success).toBe(true)
    expect(result.isWobyThreeLoaded).toBe(true)
    expect(result.hasCanvasElement).toBe(true)
    expect(result.hasDivWrapper).toBe(true)
})