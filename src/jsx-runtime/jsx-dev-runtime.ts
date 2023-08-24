
/* IMPORT */
import * as three from "three"
import { Wrapper } from '../types'
import { $$, $, getMeta,  wrapCloneElement } from "voby"
import { param, paramTypes } from '../params'
import { Canvas3D } from "../canvas3D"
import { cons } from "../types"

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
const defaults = {
    scene: {},
    mesh: { geometry: () => new Three.BufferGeometry(), material: () => new Three.MeshBasicMaterial() },
    perspectiveCamera: { fov: 50, aspect: 1, near: 0.1, far: 2000 },
    webGLRenderer: {},
    boxGeometry: { width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1 },
    meshToonMaterial: {}
}

const toUpper1 = (s: string) => s.charAt(0).toUpperCase() + s.substring(1)

const renderer = $<three.WebGLRenderer>()

const createElement = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>(component: K, props: P & { args: [] }, key?: string) => {
    const meta = [$$(props.children)].flat()
        .filter(r => !!r).map(c => getMeta(c as any))

    const consP = (pn = undefined, pt = undefined) => {
        //case1 = object in constructor parameter (at children, at props)
        //case2 = primitive in constructor parameters, use args[]
        //case3 = set remaining props using Object.assign 
        const paramName: string[] = pn ?? param[component as any]
        const paramType: string[] = pt ?? paramTypes[component as any]

        if (props.args) return props.args

        const r = []
        paramName.map(key => r[key] = props[key])
        paramType.map((paramKey, i) => {
            const m = meta.filter(m => (m.component + '').endsWith(paramKey))[0]

            const paramName = param[component as any][i]
            if (!r[paramName]) {
                r[paramName] = jsx(m.component as any, m.props as any)
            }
        })
        return r
    }

    const p = Object.values(consP())
    const r = new Three[toUpper1(component as any)](...p)
    const { children, args, ...remainingProps } = props
        ; (param[component as any] as string[]).map(paramName => delete remainingProps[paramName])
    Object.assign(r, remainingProps)

    if(Object.hasOwn(r, 'children')){
        //under construction
        r.children = children
    }
    return r
}
const jsx = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>(component: K, props: P & { args: [] }, key?: string): JSX.Element => {

    return wrapCloneElement(createElement(component as any, props, key), component, props);
};

const render = (children: JSX.Child, parent: JSX.Child) => {
    ($$(parent) as HTMLElement).appendChild(($$(children) as any).webGlRenderer.domElement)
}

/* EXPORT */

export { jsx, jsx as jsxDEV, render };
