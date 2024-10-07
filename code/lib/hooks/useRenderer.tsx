// import { createContext, Observable, useContext } from "woby"
import { useThree, Unobservable, ThreeContextType } from "./useThree"
// import { Renderer } from "../../src/renderers/common"
// import { RendererEx } from "../../src/renderers/RendererEx"
// import Renderer from "three/src/renderers/common/Renderer"

// export const useRenderer = <T extends Unobservable<ThreeContext['renderer']> = Unobservable<ThreeContext['renderer']>>(v?: T) => useThree('renderer', v) as any as Observable<T>
export const useRenderers = () => useThree('renderers')
export const checkRenderer = (msg: string) => useRenderers().length > 1 && console.warn('Multiple cameras found. ' + msg)

// export const RendererContext = createContext<RendererEx>()
// export const RendererContext = createContext<Renderer>()

// export const useRenderer = () => useContext(RendererContext)