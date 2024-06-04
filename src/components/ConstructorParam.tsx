// // / <reference path="../jsx-runtime" />
// /** @jsxImportSource ../jsx-runtime */

import { $$, type JSX, wrapCloneElement } from "woby"
import { params, paramTypes } from "./params. xts"
import { createElement } from "./createElement"
import { toUpper } from "./utils"
import { Canvas3D, } from "../canvas3D"
import { defaults } from "./defaults"

export const jsx = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>
    (component: K, props: P & { args: [] }, key?: string): JSX.Element => {
    //@ts-ignore
    if (component === "canvas3D")
        //@ts-ignore
        return <Canvas3D {...props} />
    else
        //@ts-ignore
        return wrapCloneElement(createElement(component as any, props, key), component, props)
}

export const ConstructorParam = (pn = undefined, pt = undefined, meta: any[], props, component: string) => {
    //case1 = object in constructor parameter (at children, at props)
    //case2 = primitive in constructor parameters, use args[]
    //case3 = set remaining props using Object.assign 
    const paramName: string[] = pn ?? params[component as any]
    const paramType: string[] = pt ?? paramTypes[component as any]

    if (props.args) return props.args

    const r = []
    paramName.map(key => r[key] = props[key])
    paramType.map((paramKey, i) => {
        const paramName = params[component as any][i]

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
            throw Error("Update ConstructorParam.ts default constructors according to node_modules/@types/three/src/*.d.ts")
        }
        r[key] = !r[key] ? defaults[component as any][key] : r[key]


    })

    return r
}