// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
import { createContext, useContext,  $$, $, ObservableMaybe, isObservable, useMemo, Context } from "woby"
import { canvasProperties } from "../types/canvas3D"
import { type canvasProps } from '../canvas3D'

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
export const threeContext: Context<canvasProperties> = window.threeContext ?? createContext<canvasProperties>()
window.threeContext = threeContext

export const useThree = <T, K extends keyof canvasProperties>(key: K, v?: ObservableMaybe<T>): canvasProperties[K] => {
    const t = useContext(threeContext) as canvasProperties
    if (isObservable(t[key as any])) {
        if (v)
            //@ts-ignore
            t[key]($$(v))
    }

    return t[key] as any
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

