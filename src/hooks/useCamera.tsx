import { Observable } from "woby"
import { useThree, Unobservable, ThreeContext } from "./useThree"

export const useCamera = <T extends Unobservable<ThreeContext['camera']> = Unobservable<ThreeContext['camera']>>(v?: T) => useThree('camera', v) as any as Observable<T>
