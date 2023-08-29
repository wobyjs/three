
/* IMPORT */
import * as three from "three"
import { Wrapper } from '../types'
import { $$, $, getMeta, wrapCloneElement } from "voby"
import { param, paramTypes } from '../params'
import { Canvas3D, Frames } from "../canvas3D"
import { cons } from "../types"
import { consP } from "../consP"

const Three = { ...three }
//@ts-ignore
Three.Canvas3D = Canvas3D

declare global {
    namespace JSX {
        interface IntrinsicElements {
            scene: Wrapper<three.Scene, 'scene'>,
            mesh: Wrapper<three.Mesh, 'mesh'>,
            perspectiveCamera: Wrapper<three.PerspectiveCamera, "perspectiveCamera">,
            webGLRenderer: Wrapper<three.WebGLRenderer, 'webGLRenderer'>,
            boxGeometry: Wrapper<three.BoxGeometry, 'boxGeometry'>
            meshToonMaterial: Wrapper<three.MeshToonMaterial, "meshToonMaterial">,
            canvas3D: Wrapper<Canvas3D, 'canvas3D'>
        }
    }
}


const toUpper = (s: string) => s.charAt(0).toUpperCase() + s.substring(1)


const isFunction = <T extends (props: any) => any>(f: T | any): f is (props: any) => any => typeof f === 'function'

const createElement = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>
    (component: K, props: P & { args: [] }, key?: string) => {
    if (isFunction(component)) {
        return component(props)
    }

    //get children from props
    const meta = [$$(props.children)].flat()
        .filter(r => !!r).map(c => getMeta(c as any))

    const p = Object.values(consP(param[component as any], paramTypes[component as any], meta, props, component))
    const r = new Three[toUpper(component as any)](...p)
    const { children, args, ...remainingProps } = props
        ; (param[component as any] as string[]).map(paramName => delete remainingProps[paramName])
    Object.assign(r, remainingProps)

    if (Object.hasOwn(props, 'children')) {
        //under construction
        r.children = [children]
    }
    return r
}

const jsx = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>
    (component: K, props: P & { args: [] }, key?: string): JSX.Element => {
    if (component === "canvas3D") {
        return (
            <Frames.Provider value={[]} >
                {wrapCloneElement(createElement(component as any, props, key), component, props)}
            </Frames.Provider>
        )
    }
    return wrapCloneElement(createElement(component as any, props, key), component, props)
};

const render = (children: JSX.Child, parent: JSX.Child) => {
    ($$(parent) as HTMLElement).appendChild(($$(children)() as any).webGlRenderer.domElement)
}

/* EXPORT */

export { jsx, jsx as jsxDEV, render };
