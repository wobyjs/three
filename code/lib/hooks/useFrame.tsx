import { $$, } from "woby"
import { useThree, } from "./useThree"

// export const FramesContext = createContext<(() => void)[]>()
// export const useFrames = (val?: (() => void)[]) => val ? useContext(FramesContext)(val) : useContext(FramesContext)
// export const useFrames = () => useContext(FramesContext)

// export const useFrames = <T extends Unobservable<ThreeContext['frame']> = Unobservable<ThreeContext['frame']>>(v?: T) => useThree('frame', v) as any as Observable<T>
export const useFrames = () => useThree('frames') //as any as <T>

export const useFrame = (fn: (state?: { gl?: any }) => void) => {
    const fs = $$(useFrames())

    if (!fs) {
        console.error("Frames context not available yet, please use <frame onFrame={} /> in side <Canvas3D>")
        return () => { }
    }

    const ctx = useThree()
    const wrappedFn = () => fn({ gl: ctx?.renderers?.[0] })

    fs.push(wrappedFn)

    return () => {
        const index = fs.indexOf(wrappedFn)
        if (index > -1)
            fs.splice(index, 1)
    }
}
