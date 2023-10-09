/* IMPORT */
import * as three from "three"
import { $$, Ref, getMeta, isObservable, useEffect, wrapCloneElement } from "voby"
import { param, paramTypes } from '../params'
import { Canvas3D } from "../canvas3D"
import { consP } from "../consP"
import { ThreeElements } from "src/three-types"
import { orbitControls } from "../orbitControls"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { gltf } from "../gltf"

const Three = { ...three }
Three.Canvas3D = Canvas3D
Three.OrbitControls = orbitControls
//@ts-ignore
Three.TextGeometry = TextGeometry
Three.Gltf = gltf

export const toUpper = (s: string) => s.charAt(0).toUpperCase() + s.substring(1)

export const isFunction = <T extends (props: any) => any>(f: T | any): f is (props: any) => any => typeof f === 'function'

// const checkProps = (props) => {
//     if (props.color) {
//         if (typeof props.color === "number" || typeof props.color === "string") {
//             props.color = new Three.Color($$(props.color))
//         }
//     }

//     if (props.position) {
//         if (Array.isArray(props.position)) {
//             props.position = new Three.Vector3(...props.position)
//         }
//     }

//     if (props.up) {
//         if (Array.isArray(props.up)) {
//             props.up = new Three.Vector3(...props.up)
//         }
//     }

//     if (props.scale) {
//         if (Array.isArray(props.scale)) {
//             props.scale = new Three.Vector3(...props.scale)
//         }
//     }

//     if (props.rotation) {
//         if (Array.isArray(props.rotation)) {
//             props.rotation = new Three.Euler(...props.rotation)
//         }
//     }

//     if (props.matrix) {
//         if (Array.isArray(props.matrix)) {
//             props.matrix = new Three.Quaternion(...props.matrix)
//         }
//     }

//     if (props.layers) {
//         if (Array.isArray(props.layers)) {
//             props.layers = new Three.Quaternion(...props.layers)
//         }
//     }

//     if (props.dispose) {
//         if (Array.isArray(props.dispose)) {
//             props.dispose = new Three.Quaternion(...props.dispose)
//         }
//     }
//     return props
// }

export const isPromise = (obj) => {
    if (obj instanceof Promise) {
        return true
    }

    else if (typeof obj == "object") {
        const properties = Object.values(obj)
        //iterate over all property
        for (let i = 0; i < properties.length; i++) {
            //@ts-ignore
            if (typeof $$(properties[i])?.then === "function") {
                return true
            }
        }
        return false

    }
    else {
        return typeof obj?.then === "function"
    }

}

const fixReactiveProps = (props: any, name: string, component: ThreeElements) => {
    if (props[name]) {
        //check if observable function
        const propFunctionRef = props[name]
        if (isFunction(props[name]) || isObservable(component)) {
            if (name.startsWith("on")) {
                //event listeners
                component[name] = propFunctionRef
            }

            else if (Array.isArray($$(propFunctionRef))) {
                //handle array values
                useEffect(() => {
                    $$(component)?.[name].set(...$$(propFunctionRef))
                })
                delete props[name]

            }
            else {
                useEffect(() => {
                    if (Array.isArray($$(propFunctionRef)) || typeof $$(propFunctionRef) == "object") {
                        component[name].set(...$$(propFunctionRef))
                    }
                    else {
                        component[name].set($$(propFunctionRef))
                    }
                })
                delete props[name]
            }
        }

        else if (name == "map") {
            useEffect(() => {

                component[name] = $$(propFunctionRef)
            })

        }

        else {
            if (Array.isArray($$(propFunctionRef)) || typeof $$(propFunctionRef) == "object") {
                component[name].set(...$$(propFunctionRef))
            }
            else {
                component[name].set($$(propFunctionRef))
            }
            delete props[name]
        }
    }
}


const createElement = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements & { children?: JSX.Child[], ref: JSX.Refs<JSX.IntrinsicElements[K]> }>
    (component: K, props: P & { args: [] }, key?: string) => {

    if (isFunction(component)) {
        return component(props)
    }

    //get children from props
    const meta = [$$(props.children)].flat()
        .filter(r => !!r).map(c => getMeta(c as any))

    if (Object.values(props).some(k => isPromise($$(k)))) {
        const ps = { ...props }
        return new Promise((resolve, reject) => {
            (async () => {

                const all = Object.values(ps).filter(k => isPromise($$(k))).map((k) => $$(k) as Promise<any>)
                await Promise.all(all);

                const key = Object.keys(ps)
                for (let i = 0; i < key.length; i++) {
                    const k = key[i]
                    if (isPromise($$(ps[k]))) {
                        const properties = Object.values(ps[k])
                        const keys = Object.keys(ps[k])

                        //iterate over all properties inside an object 
                        for (let j = 0; j < properties.length; j++) {
                            ps[k][keys[j]] = await $$(properties[j])
                        }
                    }
                }

                const p = Object.values(consP(param[component as any], paramTypes[component as any], meta, ps, component))
                const r = new Three[toUpper(component as any)](...p)

                if (ps.ref) {
                    //used to assign ref 
                    [ps.ref].flat().forEach((rr) => (rr as Ref)?.(r))
                }


                //set readonly variables to component
                fixReactiveProps(ps, "position", r)
                fixReactiveProps(ps, "map", r)
                fixReactiveProps(ps, "scale", r)

                fixReactiveProps(ps, "color", r)
                fixReactiveProps(ps, "rotation", r)
                fixReactiveProps(ps, "onPointerOver", r)


                const { children, args, ...remainingProps } = ps
                    ; (param[component as any] as string[]).map(paramName => delete remainingProps[paramName])
                Object.keys(remainingProps).forEach((k) => {
                    if (k.startsWith("on") || k == "dispose") {
                        r[k] = remainingProps[k]
                    }
                })

                resolve(r)
            })()

        })
    }
    else {
        const p = Object.values(consP(param[component as any], paramTypes[component as any], meta, props, component))
        const r = new Three[toUpper(component as any)](...p)

        if (props.ref) {
            if (isObservable(r)) {
                useEffect(() => {
                    [props.ref].flat().forEach((rr) => (rr as Ref)?.($$(r)))
                })
            }
            else
                //used to assign ref 
                [props.ref].flat().forEach((rr) => (rr as Ref)?.(r))
        }


        //set readonly variables to component
        fixReactiveProps(props, "position", r)
        fixReactiveProps(props, "map", r)
        fixReactiveProps(props, "scale", r)

        fixReactiveProps(props, "color", r)
        fixReactiveProps(props, "rotation", r)
        fixReactiveProps(props, "onPointerOver", r)


        const { children, args, ...remainingProps } = props
            ; (param[component as any] as string[]).map(paramName => delete remainingProps[paramName])
        Object.keys(remainingProps).forEach((k) => {
            r[k] = remainingProps[k]

            if (k.includes("shadow-camera")) {
                const cameraVar = k.split("-")
                if (r.castShadow) {
                    r.shadow.camera[cameraVar[2]] = remainingProps[k]
                }
            }
        })

        return r
    }
}

const jsx = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>
    (component: K, props: P & { args: [] }, key?: string): JSX.Element => {
    if (component === "canvas3D") {
        return (
            //@ts-ignore
            <Canvas3D {...props} />
        )
    }
    //@ts-ignore
    return wrapCloneElement(createElement(component as any, props, key), component, props)
};
const render = (children: JSX.Child, parent: JSX.Child) => {
    //@ts-ignore
    ($$(parent) as HTMLElement).appendChild(($$(children)()()))
}



/* EXPORT */

export { jsx, jsx as jsxDEV, render }
