// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import { BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, Scene } from "three"
import { $$, type JSX, wrapCloneElement } from "voby";
import { param, paramTypes } from "./params";
import { createElement } from "./createElement";
import { toUpper } from "./utils";
import { Canvas3D, } from "./canvas3D";

export const defaults = {
    orbitControls: { camera: null, domElement: null, enableDamping: false },
    scene: {},
    mesh: { geometry: () => new BoxGeometry(), material: () => new MeshBasicMaterial() },
    perspectiveCamera: { fov: 50, aspect: 1, near: 0.1, far: 2000 },
    orthographicCamera: { left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 2000 },
    webGLRenderer: {},
    boxGeometry: { width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1 },
    meshToonMaterial: {},
    meshStandardMaterial: { parameters: () => new MeshStandardMaterial() },
    meshBasicMaterial: { parameters: () => new MeshBasicMaterial() },
    ambientLight: { color: 0xffffff, intensity: 1 },
    spotLight: {
        color: 0xffffff, intensity: 1,
        distance: 0,
        angle: Math.PI / 3,
        penumbra: 0,
        decay: 2,
    },
    pointLight: { color: 0xffffff, intensity: 1, distance: 0, decay: 2 },
    directionalLight: { color: 0xffffff, intensity: 1 },
    textGeometry: { str: "default" }
}


export const jsx = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>
    (component: K, props: P & { args: [] }, key?: string): JSX.Element => {
    if (component === "canvas3D") {
        return (
            <Canvas3D {...props} />
        )
    }
    else
        //@ts-ignore
        return wrapCloneElement(createElement(component as any, props, key), component, props)
};

export const consP = (pn = undefined, pt = undefined, meta: any[], props, component: string) => {
    //case1 = object in constructor parameter (at children, at props)
    //case2 = primitive in constructor parameters, use args[]
    //case3 = set remaining props using Object.assign 
    const paramName: string[] = pn ?? param[component as any]
    const paramType: string[] = pt ?? paramTypes[component as any]

    if (props.args) return props.args

    const r = []
    paramName.map(key => r[key] = props[key])
    paramType.map((paramKey, i) => {
        const paramName = param[component as any][i]

        if (props[paramName]) {
            r[paramName] = props[paramName]
        }
        else {
            const m = meta.filter(m => (m.Component + '').endsWith(toUpper(paramKey)))[0]
            if (!r[paramName] && m?.Component) {
                r[paramName] = $$(jsx(m.Component as any, m.props as any))
            }
        }
    })

    //use defaults if there is undefined components
    paramName.map((key) => {
        if (typeof $$(defaults[component as any]?.[key]) === 'undefined' && !r[key]) {
            throw Error("Update consP.ts default constructors according to node_modules/@types/three/src/*.d.ts")
        }
        r[key] = !r[key] ? defaults[component as any][key] : r[key]


    })

    return r
}