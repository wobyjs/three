
/* IMPORT */
import * as three from "three"
import { $$, Ref, getMeta, wrapCloneElement } from "voby"
import { param, paramTypes } from '../params'
import { Canvas3D } from "../canvas3D"
import { consP } from "../consP"

const Three = { ...three }
//@ts-ignore
Three.Canvas3D = Canvas3D

export const toUpper = (s: string) => s.charAt(0).toUpperCase() + s.substring(1)

const isFunction = <T extends (props: any) => any>(f: T | any): f is (props: any) => any => typeof f === 'function'

const checkProps = (props) => {
    if (props.color) {
        if (typeof props.color === "number" || typeof props.color === "string") {
            props.color = new Three.Color(props.color)
        }
    }

    if (props.position) {
        if (Array.isArray(props.position)) {
            props.position = new Three.Vector3(...props.position)
        }
    }

    if (props.up) {
        if (Array.isArray(props.up)) {
            props.up = new Three.Vector3(...props.up)
        }
    }

    if (props.scale) {
        if (Array.isArray(props.scale)) {
            props.scale = new Three.Vector3(...props.scale)
        }
    }

    if (props.rotation) {
        if (Array.isArray(props.rotation)) {
            props.rotation = new Three.Euler(...props.rotation)
        }
    }

    if (props.matrix) {
        if (Array.isArray(props.matrix)) {
            props.matrix = new Three.Quaternion(...props.matrix)
        }
    }

    if (props.layers) {
        if (Array.isArray(props.layers)) {
            props.layers = new Three.Quaternion(...props.layers)
        }
    }

    if (props.dispose) {
        if (Array.isArray(props.dispose)) {
            props.dispose = new Three.Quaternion(...props.dispose)
        }
    }
    return props
}

const createElement = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements & { children?: JSX.Child[], ref: JSX.Refs<JSX.IntrinsicElements[K]> }>
    (component: K, props: P & { args: [] }, key?: string) => {
    let checkedProps = checkProps(props)

    if (isFunction(component)) {
        return component(checkedProps)
    }

    //get children from props
    const meta = [$$(checkedProps.children)].flat()
        .filter(r => !!r).map(c => getMeta(c as any))

    const p = Object.values(consP(param[component as any], paramTypes[component as any], meta, checkedProps, component))
    debugger
    const r = new Three[toUpper(component as any)](...p)

    if (props.ref) {
        //used to assign ref 
        [props.ref].flat().forEach((rr) => (rr as Ref)?.(r))
    }

    const { children, args, ...remainingProps } = checkedProps
        ; (param[component as any] as string[]).map(paramName => delete remainingProps[paramName])
    Object.assign(r, remainingProps)

    // if (Object.hasOwn(checkedProps, 'children')) {
    //     //under construction
    //     r.children = [children]
    // }
    return r
}

const jsx = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements[K] & { children?: JSX.Child[] }>
    (component: K, props: P & { args: [] }, key?: string): JSX.Element => {
    if (component === "canvas3D") {
        return (
            <Canvas3D {...props} />
        )
    }
    return wrapCloneElement(createElement(component as any, props, key), component, props)
};

const render = (children: JSX.Child, parent: JSX.Child) => {
    //@ts-ignore
    ($$(parent) as HTMLElement).appendChild(($$(children)()()))
}

/* EXPORT */

export { jsx, jsx as jsxDEV, render };
