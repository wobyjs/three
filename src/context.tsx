// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
import { createContext, useContext, Observable, useEffect, $$, $, ObservableMaybe, isObservable, useMemo } from "voby"
import { Loader } from "three"
import { canvasProperties, canvasProps } from "./types/canvas3D"
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader"

export const t = (props?: canvasProps) => {
    const t = {
        frame: $([]),
        fonts: $({}),
        renderer: $(new three.WebGLRenderer()),
        scene: $(props?.scene ?? new three.Scene()),
        camera: $(props?.camera ?? new three.PerspectiveCamera()),
        domElement: useMemo(() => $$(t.renderer)?.domElement),
        width: $(props?.width ?? window.innerWidth),
        height: $(props?.width ?? window.innerHeight)
    } as canvasProperties
    return t
}

//TODO fix context initialized twice
export const threeContext = window.threeContext ?? createContext<canvasProperties>()
window.threeContext = threeContext

export const useFrames = () => useContext(threeContext)['frame']
export const useFonts = () => useContext(threeContext)['fonts'] as Record<string, Observable<Font>>
export const useWidth = () => useContext(threeContext)['width']
export const test = $()

export const useThree = <T, K extends keyof canvasProperties>(key: K, v?: ObservableMaybe<T>): canvasProperties[K] => {
    const t = useContext(threeContext) as canvasProperties
    if (isObservable(t[key as any])) {
        if (v)
            //@ts-ignore
            t[key]($$(v))
    }

    return t[key] as any
}


export const useLoader = <T extends Loader, V>(loader: new () => T & { loadAsync: (path: string) => V }, options: { path: string, init?: (instance: T) => void }): Observable<V> => {
    const loaderInstance = new loader();
    options.init?.(loaderInstance)

    const obj = $<V>();
    //TODO array of paths
    (async () => {
        const object = loaderInstance.loadAsync(options.path)
        obj(object)
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

export const useFont = (path: string) => {
    const fonts = useFonts();
    if (fonts[path]) {
        return fonts[path]
    }
    else {
        fonts[path] = $();
        (async () => {
            const loader = new FontLoader();

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
            }, limit);
        }
    }
}

