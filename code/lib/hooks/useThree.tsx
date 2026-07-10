// / <reference path='./jsx-runtime' />
/** @jsxImportSource ./jsx-runtime */

import { $, $$, createContext, useContext, ObservableMaybe, Observable, Context } from 'woby'
import type { Font } from 'three/examples/jsm/loaders/FontLoader'
// import { Renderer } from '../../src/renderers/common/Renderer';
import { Scene } from '../../src/scenes/Scene';
import { Camera } from '../../src/cameras/Camera';
import { Renderer } from '../../src/renderers/common/Renderer';
// import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
// import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';

export type Unobservable<T> = T extends ObservableMaybe<infer U> ? U : T;
export type ToObservableMaybe<T> = T extends Observable<infer U> ? ObservableMaybe<U> : T;

export type ThreeContextType = {
    frames?: (() => void)[],
    fonts?: Record<string, Observable<Font>>,
    renderers?: Renderer[],
    scenes?: Scene[],
    cameras?: Camera[],
    update: Observable<number>
    // domElement?: HTMLCanvasElement[],
    // width?: number,
    // height?: number,
}


// export const defaultContext = (props?: CanvasProps) => ({
//     // frame: $([]),
//     fonts: $({}),
//     renderer: isObservable(props?.renderer) ? props.renderer : $(props?.renderer ?? [new WebGLRenderer({ antialias: true })]),
//     scene: isObservable(props?.scene) ? props.scene : $(props?.scene ?? new Scene()),
//     camera: isObservable(props?.camera) ? props.camera : $(props?.camera ?? [new PerspectiveCamera()]),
//     get domElement() { return useMemo(() => $$(this.renderer)?.map(r => r.domElement)) },
//     width: isObservable(props?.width) ? props.width : $(props?.width ?? window.innerWidth),
//     height: isObservable(props?.height) ? props.height : $(props?.height ?? window.innerHeight),
// } as ThreeContext)


declare global {
    interface Window {
        threeContext: Context<ThreeContextType>
    }
}

if (!window.threeContext)
    window.threeContext = createContext<ThreeContextType>()
export const ThreeContext = window.threeContext

// Reactive signal incremented by Canvas3D when its context is fully ready.
// Effects that call useThree() outside a ThreeContext.Provider subscribe to
// this signal and re-run automatically once Canvas3D has populated ctx.
export const canvasCtxVersion = $(0)
let _canvasCtxVersionCounter = 0
// Use bumpCanvasCtxVersion() (not direct write) to avoid reactive subscription inside Canvas3D's own effect.
export const bumpCanvasCtxVersion = () => canvasCtxVersion(++_canvasCtxVersionCounter)

export function useThree(): ThreeContextType
export function useThree<K extends keyof ThreeContextType = keyof ThreeContextType, T extends ThreeContextType[K] = ThreeContextType[K]>(key?: K, v?: ToObservableMaybe<T>): T
export function useThree<K extends keyof ThreeContextType = keyof ThreeContextType, T extends ThreeContextType[K] = ThreeContextType[K]>(key?: K, v?: ToObservableMaybe<T>): T | ThreeContextType {
    const t = $$(useContext(ThreeContext) as any) as ThreeContextType

    if (!t) {
        // Subscribe reactively so any enclosing effect re-runs when Canvas3D is ready.
        $$(canvasCtxVersion)
        const fallback = typeof window !== 'undefined' ? (window as any).__canvas3dCtx as ThreeContextType | undefined : undefined
        if (!fallback) return (key ? undefined : {}) as any
        if (!key) return fallback as ThreeContextType
        return fallback[key] as T
    }
    if (!key)
        return t as ThreeContextType

    return t[key] as T
}


// export const wrapThreeContext = (children) => ThreeContext.Provider({ value: useThree(), children })

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

