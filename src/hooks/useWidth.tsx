import { Observable } from "woby"
import { useThree, Unobservable, ThreeContext } from "./useThree"

export const useWidth = <T extends Unobservable<ThreeContext['width']> = Unobservable<ThreeContext['width']>>(v?: T) => useThree('width', v) as any as Observable<T>
