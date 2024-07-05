<<<<<<< HEAD
///// <reference path="../jsx/runtime" />
/** @jsxImportSource ../jsx */

import { $$, type JSX, wrapCloneElement } from "woby"
import { consParams } from "./consParams"
import { objParams } from "./objParams"
import { createElement } from "./createElement"
import { Canvas3D, } from "../canvas3D"
import { defaults } from './defaults'
=======
// // / <reference path="../jsx-runtime" />
// /** @jsxImportSource ../jsx-runtime */

import { $$, type JSX, wrapCloneElement } from "woby"
import { params, paramTypes } from "./params. xts"
import { createElement } from "./createElement"
import { toUpper } from "./utils"
import { Canvas3D, } from "../canvas3D"
import { defaults } from "./defaults"
>>>>>>> origin/main

export const jsx = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>
    (component: K, props: P & { args: [] }, key?: string): JSX.Element => {
    //@ts-ignore
    if (component === "canvas3D")
<<<<<<< HEAD
        //@ts-ignore 
=======
        //@ts-ignore
>>>>>>> origin/main
        return <Canvas3D {...props} />
    else
        //@ts-ignore
        return wrapCloneElement(createElement(component as any, props, key), component, props)
}

export const ConstructorParam = (pn = undefined, pt = undefined, meta: any[], props, component: string) => {
    //case1 = object in constructor parameter (at children, at props)
    //case2 = primitive in constructor parameters, use args[]
    //case3 = set remaining props using Object.assign 
<<<<<<< HEAD
    const consParam: string[] = pn ?? consParams[component as any]
    const objParam: string[] = pt ?? objParams[component as any]
    const def = defaults[component as any]

    if (!consParam) console.error(`consParams.${component} not register`)
    if (!objParam) console.error(`objParams.${component} not register`)
    // if (!def) console.error(`def.${component} not register`)

    if (props.args) return props.args

    // const r = []

    // if (Array.isArray(consParam))
    //     consParam.map((key, i) => r[i] = props[key])
    // else
    //     Object.keys(consParam).map(key => r[key] = props[key])

    const isArray = Array.isArray(consParam)
    const r = isArray ?
        consParam.reduce((acc, key, i) => (acc[i] = props[key], acc), [])
        : Object.keys(consParam).reduce((acc, key) => (props[key] && (acc[key] = props[key]), acc), {})

    if (isArray)
        objParam.map((paramKey, i) => {
            const index = consParam.indexOf(paramKey)
            if (index < 0) return

            // if (props[paramName])
            //     r[paramName] = props[paramName]
            // else {
            const m = meta.filter(m => m && (m.Component + '').toLowerCase().endsWith(paramKey.toLowerCase()))[0]
            if (!r[index] && m?.Component)
                r[index] = $$(jsx(m.Component as any, m.props as any))
            // }
        })
    else
        objParam.map((paramKey, i) => {
            const paramName = consParam[paramKey] as string

            if (!paramName) return

            // if (props[paramName])
            //     r[paramName] = props[paramName]
            // else {
            const m = meta.filter(m => (m.Component + '').toLowerCase().endsWith(paramKey.toLowerCase()))[0]
            if (!r[paramName] && m?.Component)
                // useEffect(() => {
                    r[paramName] = jsx(m.Component as any, m.props as any)
                // })
            // }
        })

    //use defaults if there is undefined components
    if (isArray)
        consParam.map((key, i) => {
            // if (typeof $$(def?.[key]) === 'undefined' && !r[i]) {
            //     console.error(`defaults.${component}.${key} not set`)
            //     //throw Error("Update consP.ts default constructors according to node_modules/@types/three/src/*.d.ts")
            // }
            if (typeof r[i] === 'undefined' && typeof def[key] !== 'undefined')
                r[i] = def[key]
        })
    else
        Object.keys(consParam).map(key => {
            // if (typeof $$(def?.[key]) === 'undefined' && !r[key]) {
            //     console.error(`defaults.${component}.${key} not set`)
            //     //throw Error("Update consP.ts default constructors according to node_modules/@types/three/src/*.d.ts")
            // }
            if (typeof r[key] === 'undefined' && typeof def?.[key] !== 'undefined')
                r[key] = def[key]
        })
=======
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
>>>>>>> origin/main

    return r
}