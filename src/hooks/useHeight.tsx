import { Observable } from "woby"
import { useThree, Unobservable, ThreeContext } from "./useThree"

export const useHeight = <T extends Unobservable<ThreeContext['height']> = Unobservable<ThreeContext['height']>>(v?: T) => useThree('height', v) as any as Observable<T>
