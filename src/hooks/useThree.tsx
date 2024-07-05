// / <reference path='./jsx-runtime' />
/** @jsxImportSource ./jsx-runtime */

import * as three from 'three'
import { createContext, useContext, $$, $, ObservableMaybe, isObservable, useMemo, Observable, useEffect, ObservableReadonly } from 'woby'
import { Font } from 'three/examples/jsm/loaders/FontLoader'

import { type CanvasProps } from '../components/Canvas3D'

export type Unobservable<T> = T extends Observable<infer U> ? U : T;
export type ToObservableMaybe<T> = T extends Observable<infer U> ? ObservableMaybe<U> : T;

export type ThreeContext = {
    frame: Observable<(() => void)[]>,
    fonts: Observable<Record<string, Observable<Font>>>,
    renderer: Observable<three.Renderer>,
    scene: Observable<three.Scene>,
    camera: Observable<three.Camera>,//?
    domElement: ObservableReadonly<HTMLCanvasElement>,
    width: Observable<number>,
    height: Observable<number>
}

export const defaultContext = (props?: CanvasProps) => ({
    frame: $([]),
    fonts: $({}),
    renderer: isObservable(props?.renderer) ? props.renderer : $(props?.renderer ?? new three.WebGLRenderer({ antialias: true })),
    scene: isObservable(props?.scene) ? props.scene : $(props?.scene ?? new three.Scene()),
    camera: isObservable(props?.camera) ? props.camera : $(props?.camera ?? new three.PerspectiveCamera()),
    get domElement() { return useMemo(() => $$(this.renderer)?.domElement) },
    width: isObservable(props?.width) ? props.width : $(props?.width ?? window.innerWidth),
    height: isObservable(props?.height) ? props.height : $(props?.height ?? window.innerHeight)
} as ThreeContext)


if (!window.threeContext)
    window.threeContext = createContext<ThreeContext>()
export const threeContext = window.threeContext


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

