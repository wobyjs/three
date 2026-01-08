import { test, expect } from '@playwright/test'

test('render JSX directly in Playwright', async ({ page }) => {
    // Create a blank page with a root div
    await page.setContent('<div id="root"></div>')

    // Inject Woby UMD build into the browser using a relative path
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' })

    // Render JSX component inside the page
    const result = await page.evaluate(async () => {
        try {
            // Access woby functions through the namespace
            const woby = (window as any).woby

            // Destructure woby functions for cleaner syntax
            const { jsx, render, $, $$, useMemo } = woby

            // Create the Box component using jsx() function (React 17 syntax)
            const Box = (props: any) => {
                // Note: In a real implementation, we would need to handle Three.js objects
                // For this test, we'll create a simple div representation
                return jsx('div', {
                    ...props,
                    style: { width: '100px', height: '100px', backgroundColor: 'orange', margin: '10px' },
                    children: 'Box Component'
                })
            }

            // Create the Box2Click component using jsx() function (React 17 syntax)
            // This represents the code from Box2Click.tsx lines 49-66 converted to jsx syntax
            const Box2Click = () => {
                const visible = $(true)

                const cubeSize = 30
                // Simplified representation of useMemo(() => new BoxGeometry(cubeSize, cubeSize, cubeSize))
                const cubeGeo = { type: 'BoxGeometry', size: cubeSize }
                // Simplified representation of MeshPhongMaterial
                const cubeMat = { type: 'MeshPhongMaterial', color: '#CCC' }

                // Create a simple representation of the Three.js scene using proper component names
                return jsx('div', {
                    style: {
                        width: '500px',
                        height: '500px',
                        border: '1px solid gray',
                        position: 'relative',
                        backgroundColor: 'lightgray'
                    },
                    children: [
                        jsx('h1', { children: 'Box2Click Component' }),
                        jsx('div', {
                            style: { position: 'relative' },
                            children: [
                                // Using proper component names from Box2Click.tsx
                                jsx('Canvas3D', {
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
                                                    receiveShadow: true,
                                                    style: { width: '150px', height: '150px', backgroundColor: '#CCC' },
                                                    children: 'Floor Mesh'
                                                })
                                            ]
                                        }),
                                        jsx('perspectiveCamera', { position: [0, 0, 5] }),
                                        jsx('OrbitControls', { enableDamping: true }),
                                        jsx('Event', {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }

            // Render the component
            const root = document.getElementById('root')
            render(Box2Click, root!)

            // Get the rendered content
            const renderedContent = root?.innerHTML || ''

            return {
                success: true,
                renderedContent: renderedContent,
                hasRenderedContent: !!renderedContent
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
    expect(result.renderedContent).toContain('Box2Click Component')

    // Also verify with Playwright's locator
    await expect(page.locator('text=Box2Click Component')).toBeVisible()
})