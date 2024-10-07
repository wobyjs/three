import { $, $$, Observable, useContext, createContext } from "woby"
import { ThreeContextType, useThree, Unobservable } from "./useThree"

// export const FramesContext = createContext<(() => void)[]>()
// export const useFrames = (val?: (() => void)[]) => val ? useContext(FramesContext)(val) : useContext(FramesContext)
// export const useFrames = () => useContext(FramesContext)

// export const useFrames = <T extends Unobservable<ThreeContext['frame']> = Unobservable<ThreeContext['frame']>>(v?: T) => useThree('frame', v) as any as Observable<T>
export const useFrames = () => useThree('frames') //as any as <T>

export const useFrame = (fn: () => void) => {
    const fs = $$(useFrames())
    fs.push(fn)

    return () => {
        const fs = useFrames()
        const index = fs.indexOf(fn)
        if (index > -1)
            fs.splice(index, 1)
    }
}