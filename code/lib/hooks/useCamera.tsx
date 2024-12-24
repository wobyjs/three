import { useThree } from "./useThree"

//export const useCamera = <T extends Unobservable<ThreeContext['camera']> = Unobservable<ThreeContext['camera']>>(v?: T) => useThree('camera', v) as any as Observable<T>
export const useCameras = () => useThree('cameras')

export const checkCamera = (msg: string) => useCameras().length > 1 && console.warn('Multiple cameras found. ' + msg)
