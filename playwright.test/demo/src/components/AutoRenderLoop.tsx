/**
 * AutoRenderLoop Component
 *
 * Automatically starts the render loop for Canvas3D demos.
 * Many demos don't call renderer.setAnimationLoop() manually, resulting in black viewports.
 *
 * Usage: Add <AutoRenderLoop /> inside your Canvas3D component tree.
 */

import { $, $$, ObservableMaybe } from 'woby'
import { useScene, useCamera, useRenderer } from '@woby/three'

export const AutoRenderLoop = () => {
    const scene = useScene()
    const camera = useCamera()
    const renderer = useRenderer()

    // Wait for all context providers to be ready, then start render loop
    const startRenderLoop = () => {
        const s = $$(scene)
        const c = $$(camera)
        const r = $$(renderer)

        if (!s || !c || !r) {
            // Context not ready yet, retry after a short delay
            setTimeout(startRenderLoop, 100)
            return
        }

        // Start the render loop
        r.setAnimationLoop(() => {
            r.render(s, c)
        })
    }

    // Start render loop when component mounts
    startRenderLoop()

    // Cleanup: stop render loop when component unmounts
    return () => {
        const r = $$(renderer)
        if (r) {
            r.setAnimationLoop(null)
        }
    }
}
