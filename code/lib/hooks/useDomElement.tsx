import { Observable } from "woby"
import { useThree, Unobservable, ThreeContext } from "./useThree"

export const useDomElement = <T extends Unobservable<ThreeContext['domElement']> = Unobservable<ThreeContext['domElement']>>(v?: T) => useThree('domElement', v) as any as Observable<T>
