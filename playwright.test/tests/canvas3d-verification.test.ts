import { test, expect } from '@playwright/test'

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

            // Check if woby-three is loaded
            const isWobyThreeLoaded = typeof (window as any).wobyThree !== 'undefined'

            // Access woby functions for cleaner syntax
            const { jsx, render } = woby

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

            // Look for the specific structure created by Canvas3D implementation
            const canvasElement = root?.querySelector('[data-testid="canvas3d-direct"]')
            const hasCanvasElement = canvasElement !== null

            // Check if the Canvas3D function exists
            const hasCanvas3DFunction = typeof (window as any).Canvas3D !== 'undefined'

            return {
                success: true,
                renderedContent: renderedContent.substring(0, 200), // Limit content size
                hasDivWrapper: hasDivWrapper,
                hasCanvasElement: hasCanvasElement,
                isWobyThreeLoaded: isWobyThreeLoaded,
                hasCanvas3DFunction: hasCanvas3DFunction
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
    expect(result.hasCanvasElement).toBe(true)
    expect(result.hasDivWrapper).toBe(true)
})