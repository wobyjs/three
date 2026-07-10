import { $$, useContext, useEffect } from "woby"
import { useThree, ThreeContext, canvasCtxVersion } from "./useThree"

export const useFrames = () => useThree('frames')

export const useFrame = (fn: (state?: { gl?: any, scene?: any, camera?: any }) => void) => {
    // Sync path: only works inside Canvas3D's ThreeContext provider.
    // Use useContext directly (no global fallback) to avoid pushing to a stale ctx.
    const ctx = $$(useContext(ThreeContext) as any)
    if (ctx?.frames) {
        const frames = ctx.frames
        const wrappedFn = () => fn({ gl: ctx.renderers?.[0], scene: ctx.scenes?.[0], camera: ctx.cameras?.[0] })
        frames.push(wrappedFn)
        return () => {
            const index = frames.indexOf(wrappedFn)
            if (index > -1) frames.splice(index, 1)
        }
    }

    // Not inside ThreeContext provider (demo component outside Canvas3D).
    // Defer to useEffect which runs after Canvas3D's synchronous init sets window.__canvas3dCtx.
    useEffect(() => {
        $$(canvasCtxVersion)
        const canvasCtx = (window as any).__canvas3dCtx
        if (!canvasCtx?.frames) return

        const wrappedFn = () => fn({
            gl: canvasCtx.renderers?.[0],
            scene: canvasCtx.scenes?.[0],
            camera: canvasCtx.cameras?.[0],
        })
        canvasCtx.frames.push(wrappedFn)

        return () => {
            const index = canvasCtx.frames.indexOf(wrappedFn)
            if (index > -1) canvasCtx.frames.splice(index, 1)
        }
    })

    return () => {}
}
