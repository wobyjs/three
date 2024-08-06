import { Observable } from "woby"
import { useThree, Unobservable, ThreeContext } from "./useThree"

export const useScene = <T extends Unobservable<ThreeContext['scene']> = Unobservable<ThreeContext['scene']>>(v?: T) => useThree('scene', v) as any as Observable<T>
