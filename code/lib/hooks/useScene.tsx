import { useThree } from "./useThree";

// export const useScene = <T extends Unobservable<ThreeContext['scene']> = Unobservable<ThreeContext['scene']>>(v?: T) => useThree('scene', v) as any as Observable<T>
export const useScenes = () => useThree('scenes')

export const checkScene = (msg: string) => useScenes().length > 1 && console.warn('Multiple scenes found. ' + msg)

// export const SceneContext = createContext<Scene>()
// export const useScene = () => useContext(SceneContext)
