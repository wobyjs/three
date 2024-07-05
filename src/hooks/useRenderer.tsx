import { Observable } from "woby"
import { useThree, Unobservable, ThreeContext } from "./useThree"

export const useRenderer = <T extends Unobservable<ThreeContext['renderer']> = Unobservable<ThreeContext['renderer']>>(v?: T) => useThree('renderer', v) as any as Observable<T>
