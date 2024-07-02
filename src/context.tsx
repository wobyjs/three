// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
import { Three } from "./three"
import { createContext, useContext, Observable, useEffect, $$, $, ObservableMaybe, isObservable, useMemo } from "woby"
import { Loader } from "three"
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { canvasProps } from "./canvas3D"


type ThreeContext = {
    frame?: Observable<(() => void)[]>,
    renderer?: Observable<three.WebGLRenderer>,
    scene?: Observable<three.Scene>,
    camera?: Observable<three.OrthographicCamera | three.PerspectiveCamera>,//?
    domElement?: Observable<HTMLCanvasElement>,
    width?: Observable<number>,
    height?: Observable<number>
}

export const t = (props?: canvasProps) => {
    const t = {
        frame: $([]),
        fonts: $({}),
        renderer: $(new Three.WebGLRenderer({ antialias: true })),
        scene: $(props?.scene ?? new Three.Scene()),
        camera: $(props?.camera ?? new Three.PerspectiveCamera()),
        domElement: useMemo(() => $$(t.renderer)?.domElement),
        width: $(props?.width ?? window.innerWidth),
        height: $(props?.width ?? window.innerHeight)
    } as ThreeContext
    return t
}

//TODO fix context initialized twice
export const threeContext = window.threeContext ?? createContext<ThreeContext>()
window.threeContext = threeContext

export const useFrames = () => useContext(threeContext)['frame']
export const useFonts = () => useContext(threeContext)['fonts'] as Record<string, Observable<Font>>
export const useWidth = () => useContext(threeContext)['width']
export const test = $()

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
export function useThree<K extends keyof ThreeContext>(key?: K, v?: ObservableMaybe<ThreeContext[K]>): ThreeContext[K]
export function useThree<K extends keyof ThreeContext>(key?: K, v?: ObservableMaybe<ThreeContext[K]>): ThreeContext[K] | ThreeContext {
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

    return t[key] as ThreeContext[K]
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

export const useCamera = () => useContext(threeContext).camera
export const useRenderer = () => useContext(threeContext).renderer
export const useScene = () => useContext(threeContext).scene

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

