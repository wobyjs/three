// / <reference path='./jsx-runtime' />
/** @jsxImportSource ./jsx-runtime */
import { createContext, useContext, $$, $, isObservable, useMemo, useEffect } from 'woby';
// import { Renderer } from '../../src/renderers/common/Renderer';
import { Scene } from '../../src/scenes/Scene';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
export const defaultContext = (props) => ({
    frame: $([]),
    fonts: $({}),
    renderer: isObservable(props?.renderer) ? props.renderer : $(props?.renderer ?? new WebGLRenderer({ antialias: true })),
    scene: isObservable(props?.scene) ? props.scene : $(props?.scene ?? new Scene()),
    camera: isObservable(props?.camera) ? props.camera : $(props?.camera ?? new PerspectiveCamera()),
    get domElement() { return useMemo(() => $$(this.renderer)?.domElement); },
    width: isObservable(props?.width) ? props.width : $(props?.width ?? window.innerWidth),
    height: isObservable(props?.height) ? props.height : $(props?.height ?? window.innerHeight)
});
if (!window.threeContext)
    window.threeContext = createContext();
export const threeContext = window.threeContext;
export function useThree(key, v) {
    const t = useContext(threeContext);
    if (!key)
        return t;
    if (isObservable(t[key]))
        useEffect(() => {
            //@ts-ignore
            if (!!$$(v))
                //@ts-ignore
                t[key]($$(v));
        });
    return t[key];
}
export function throttle(callback, limit) {
    var waiting = false; // Initially, we're not waiting
    return function () {
        if (!waiting) { // If we're not waiting
            callback(); // Execute users function
            waiting = true; // Prevent future invocations
            setTimeout(function () {
                waiting = false; // And allow future invocations
            }, limit);
        }
    };
}
