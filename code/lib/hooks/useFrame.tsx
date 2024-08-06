import { $$, Observable, } from "woby"
import { ThreeContext, useThree, Unobservable } from "./useThree"


export const useFrames = <T extends Unobservable<ThreeContext['frame']> = Unobservable<ThreeContext['frame']>>(v?: T) => useThree('frame', v) as any as Observable<T>

export const useFrame = (fn: () => void) => {
    const fs = $$(useFrames())
    fs.push(fn)

    return () => useFrames(fs.filter(item => item !== fn))
}
