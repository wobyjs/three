// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
import { Three } from "./three"
import { createContext, useContext, Observable, useEffect, $$, $, isObservable, useMemo, ObservableMaybe } from "woby"
import { Loader } from "three"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { canvasProps } from "./canvas3D"


type Unobservable<T> = T extends Observable<infer U> ? U : T;
type ToObservableMaybe<T> = T extends Observable<infer U> ? ObservableMaybe<U> : T;

export type ThreeContext = {
    frame?: Observable<(() => void)[]>,
    fonts: Observable<Record<string, any>>,
    renderer?: Observable<three.Renderer>,
    scene?: Observable<three.Scene>,
    camera?: Observable<three.OrthographicCamera | three.PerspectiveCamera>,//?
    domElement?: Observable<HTMLCanvasElement>,
    width?: Observable<number>,
    height?: Observable<number>
}

export const t = (props?: canvasProps) => ({
    frame: $([]),
    fonts: $({}),
    renderer: isObservable(props?.renderer) ? props.renderer : $(props?.renderer ?? new Three.WebGLRenderer({ antialias: true })),
    scene: isObservable(props?.scene) ? props.scene : $(props?.scene ?? new Three.Scene()),
    camera: isObservable(props?.camera) ? props.camera : $(props?.camera ?? new Three.PerspectiveCamera()),
    get domElement() { return useMemo(() => $$(this.renderer)?.domElement) },
    width: isObservable(props?.width) ? props.width : $(props?.width ?? window.innerWidth),
    height: isObservable(props?.height) ? props.height : $(props?.height ?? window.innerHeight)
} as ThreeContext)

//TODO fix context initialized twice
if (!window.threeContext)
    window.threeContext = createContext<ThreeContext>()
export const threeContext = window.threeContext

// export const useThree = <T, K extends keyof ThreeContext>(key?: K, v?: ObservableMaybe<T>): K extends keyof ThreeContext ? ThreeContext[K extends keyof ThreeContext ? K : never] : ThreeContext => {
//     const t = useContext(threeContext) as ThreeContext
//     if (!key )
//         return t as ThreeContext

//     if (isObservable(t[key as any])) {
//         if (v)
//             //@ts-ignore
//             t[key]($$(v))
//     }

//     return t[key] as any
// }


export function useThree(): ThreeContext
export function useThree<K extends keyof ThreeContext = keyof ThreeContext, T extends ThreeContext[K] = ThreeContext[K]>(key?: K, v?: ToObservableMaybe<T>): T
export function useThree<K extends keyof ThreeContext = keyof ThreeContext, T extends ThreeContext[K] = ThreeContext[K]>(key?: K, v?: ToObservableMaybe<T>): T | ThreeContext {
    const t = useContext(threeContext) as ThreeContext

    if (!key)
        return t as ThreeContext

    if (isObservable(t[key]))
        useEffect(() => {
            //@ts-ignore
            if (!!$$(v))
                //@ts-ignore
                (t[key] as Observable)($$(v))
        })

    return t[key] as T
}

export const useLoader = <T extends Loader, V>(loader: new () => T & { loadAsync: (path: string) => V }, options: { path: string, init?: (instance: T) => void }): Observable<V> => {
    const loaderInstance = new loader()
    options.init?.(loaderInstance)

    const obj = $<V>()
        //TODO array of paths
        ; (async () => {
            const object = loaderInstance.loadAsync(options.path)
            obj(object as any)
        })()

    return obj
}

export const useAwait = <T,>(obj: Observable<Promise<T>>): Observable<T> => {
    const o = $<T>()
    useEffect(() => {
        (async () => {
            o(await $$(obj))
        })()
    })

    return o
}


export const useFrames = <T extends Unobservable<ThreeContext['frame']> = Unobservable<ThreeContext['frame']>>(v?: T) => useThree('frame', v) as any as Observable<T>
export const useFonts = <T extends Unobservable<ThreeContext['fonts']> = Unobservable<ThreeContext['fonts']>>(v?: T) => useThree('fonts', v) as any as Observable<T>
export const useWidth = <T extends Unobservable<ThreeContext['width']> = Unobservable<ThreeContext['width']>>(v?: T) => useThree('width', v) as any as Observable<T>

export const useCamera = <T extends Unobservable<ThreeContext['camera']> = Unobservable<ThreeContext['camera']>>(v?: T) => useThree('camera', v) as any as Observable<T>
export const useRenderer = <T extends Unobservable<ThreeContext['renderer']> = Unobservable<ThreeContext['renderer']>>(v?: T) => useThree('renderer', v) as any as Observable<T>
export const useScene = <T extends Unobservable<ThreeContext['scene']> = Unobservable<ThreeContext['scene']>>(v?: T) => useThree('scene', v) as any as Observable<T>

export const useFont = (path: string) => {
    const fonts = useFonts()
    if (fonts[path]) {
        return fonts[path]
    }
    else {
        fonts[path] = $()
            ; (async () => {
                const loader = new FontLoader()

                const loadFont = await loader.loadAsync(path)
                fonts[path](loadFont)
            })()
    }

    return fonts[path]


}

export const useFrame = (fn: () => void) => {
    const fs = $$(useFrames())
    fs.push(fn)

    return () => useFrames(fs.filter(item => item !== fn))
}

export function throttle(callback, limit) {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback();  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit)
        }
    }
}

