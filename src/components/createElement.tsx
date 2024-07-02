/* IMPORT */
import { $$, getMeta, isObservable, useEffect, type JSX, SYMBOL_UNTRACKED_UNWRAPPED, untrack } from "woby"
// import { paramTypes } from './params'
import { ConstructorParam } from "./ConstructorParam"
import { isFunction, isPromise, toUpper } from "../utils"
import { camelcase } from "../camelcase"
import { Three } from "../three"
import "../orbitControls"
import '../BufferGeometry'
import "../gltf"
import "../Text"
import { setRef } from "woby"
import { consParams } from "./consParams"
import { objParams } from "./objParams"

const fixReactiveProps = (props: any, component: JSX.Element) => {
    for (const key in props) {
        if (key.startsWith("on")) {
            //event listeners
            component[key] = props[key]
            continue
        }

        if (key == "ref") {
            if (isObservable(component))
                useEffect(() => { setRef($$(component), props.ref) })
            else
                // used to assign ref
                setRef(component, props.ref)
            continue
        }

        const setVal = () => {
            if (Array.isArray($$(props[key]) || typeof $$(props[key]) === "object")) {
                if (typeof $$(component)?.[key]?.set === 'function')
                    $$(component)[key].set(...$$(props[key]))
                else if (typeof $$(component)?.[key] === 'function')
                    $$(component)[key]($$(props[key]))
            }
            else
                if (typeof $$(component)?.[key]?.set === 'function')
                    $$(component)[key]?.set($$(props[key]))
                else if (typeof $$(component)?.[key] === 'function')
                    $$(component)[key]($$(props[key]))
                else if ($$(component))
                    $$(component)[key] = ($$(props[key]))
        }
        // if (isObservable(props[key]))
        useEffect(() => {
            if (!$$(component)) return
            setVal()
        })

        setVal()
    }
}

function setValue<T>(obj: any, keysString: string, value: T): void {
    const keys = keysString.split('-')

    keys.forEach((key, index) => {
        if (!obj) return

        if (index === keys.length - 1) {
            obj[key] = value
        } else {
            // if (!obj[key]) {
            //   obj[key] = {}
            // }
            obj = obj[key]
        }
    })
}

// function getValue<T>(obj: any, keysString: string): T {
//     const keys = keysString.split('-')

//     for (const key of keys) {zz
//         if (obj[key] === undefined) {
//             return undefined
//         }
//         obj = obj[key]
//     }

//     return obj
// }

// function union<T>(a: T[], b: T[]): T[] {
//     return Array.from(new Set([...a, ...b]))
// }

// function intersection<T>(a: T[], b: T[]): T[] {
//     const setB = new Set(b)
//     return a.filter(element => setB.has(element))
// }

// function difference<T>(a: T[], b: T[]): T[] {
//     const setB = new Set(b)
//     return a.filter(element => !setB.has(element))
// }

// function symmetricDifference<T>(a: T[], b: T[]): T[] {
//     const setA = new Set(a)
//     const setB = new Set(b)
//     return [
//         ...a.filter(element => !setB.has(element)),
//         ...b.filter(element => !setA.has(element))
//     ]
// }


export const createElement = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements & { children?: JSX.Child[], ref: JSX.Refs<JSX.IntrinsicElements[K]> }>
    (component: K, props: P & { args: [] }, key?: string) => {
    const wrapElement = <T extends Function>(element: T): T => {
        element[SYMBOL_UNTRACKED_UNWRAPPED] = true
        return element
    }

    if (isFunction(component))
        return wrapElement(() => untrack(() => component.call(component, props as P)))

    // const p = difference(Object.keys(Three).map(c => camelcase(c)), Object.keys(objParams))
    // const c = difference(Object.keys(Three).map(c => camelcase(c)), Object.keys(consParams))
    // const s = symmetricDifference(Object.keys(Three), Object.keys(objParams))
    // const s = symmetricDifference(Object.keys(Three), Object.keys(objParams))

    //get children from props
    const meta = !isObservable(props.children) && !Array.isArray(props.children) ? (props.children ? [getMeta(props.children)] : []) : [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c as any))

    const getR = () => {
        const p = ConstructorParam(consParams[camelcase(component as any)], objParams[camelcase(component as any)], meta, props, component)

        if (!Three[toUpper(component as any)])
            console.error(`Three.${toUpper(component as any)} not register`)

        const r = Array.isArray(p) ? new Three[toUpper(component as any)](...p) : new Three[toUpper(component as any)](p)

        // console.log(p, r)
        //set readonly variables to component
        fixReactiveProps(props, r)

        const { children, args, ...remainingProps } = props
        if (Array.isArray(consParams[component as any]))
            (consParams[component as any] as string[]).map(paramName => delete remainingProps[paramName])
        else
            Object.keys(consParams[component as any]).map(paramName => delete remainingProps[paramName])

        Object.keys(remainingProps).forEach((k) => {
            if (k.startsWith("on") || k == "dispose")
                r[k] = remainingProps[k]

            if (k.includes("-"))
                setValue(r, k, remainingProps[k])
        })

        return r
    }
    if (Object.values(props).some(k => isPromise(k))) {
        console.log("promise", component)
        return new Promise((resolve, reject) => {
            (async () => {
                if (!Three[toUpper(component as any)]) {
                    console.error(`Three['${toUpper(component)}'] not found, please register it`)
                    return
                }
                // const props = { ...props }

                const all = Object.values(props).filter(k => isPromise($$(k))).map((k) => $$(k) as Promise<any>)
                await Promise.all(all)

                const key = Object.keys(props)
                for (let i = 0; i < key.length; i++) {
                    const k = key[i]
                    if (isPromise($$(props[k]))) {
                        const properties = Object.values(props[k])
                        const keys = Object.keys(props[k])

                        //iterate over all properties inside an object 
                        for (let j = 0; j < properties.length; j++)
                            props[k][keys[j]] = await $$(properties[j])
                    }
                }

                const r = getR()
                resolve(r)
            })()

        })
    }

    else {
        return wrapElement(() => {
            const r = getR()

            untrack(r)

            return r
        })
    }
}
