/* IMPORT */
import { $$, Ref, getMeta, isObservable, useEffect, type JSX, SYMBOL_UNTRACKED_UNWRAPPED, untrack } from "voby"
import { param, paramTypes } from './params'
import { consP } from "./consP"
import { ThreeElements } from "src/three-types"
import { isFunction, isPromise, toUpper } from "./utils"
import { Three } from "./three"
import "./orbitControls"
import "./gltf"
import "./Text"
import { setRef } from "voby"

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
                // delete props[name]

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
                // delete props[name]
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
            // delete props[name]
        }
    }
}

export const createElement = <K extends keyof JSX.IntrinsicElements, P extends JSX.IntrinsicElements & { children?: JSX.Child[], ref: JSX.Refs<JSX.IntrinsicElements[K]> }>
    (component: K, props: P & { args: [] }, key?: string) => {
    const wrapElement = <T extends Function | Promise>(element: T): T => {

        element[SYMBOL_UNTRACKED_UNWRAPPED] = true;

        return element;

    };

    if (isFunction(component)) {
        return wrapElement(() => {

            return untrack(() => {
                return component.call(component, props as P)
            });
        });
    }

    //get children from props
    const meta = [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c as any))

    if (Object.values(props).some(k => isPromise($$(k)))) {
        console.log("promise", component)
        return new Promise((resolve, reject) => {
            (async () => {
                const ps = { ...props }

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
        return wrapElement(() => {
            // if (Object.values(props).some(k => isPromise($$(k)))) {
            //     return new Promise((resolve, reject) => {
            //         (async () => {
            //             const ps = { ...props }

            //             const all = Object.values(ps).filter(k => isPromise($$(k))).map((k) => $$(k) as Promise<any>)
            //             await Promise.all(all);

            //             const key = Object.keys(ps)
            //             for (let i = 0; i < key.length; i++) {
            //                 const k = key[i]
            //                 if (isPromise($$(ps[k]))) {
            //                     const properties = Object.values(ps[k])
            //                     const keys = Object.keys(ps[k])

            //                     //iterate over all properties inside an object 
            //                     for (let j = 0; j < properties.length; j++) {
            //                         ps[k][keys[j]] = await $$(properties[j])
            //                     }
            //                 }
            //             }
            //             console.log(component)
            //             const p = Object.values(consP(param[component as any], paramTypes[component as any], meta, ps, component))
            //             const r = new Three[toUpper(component as any)](...p)

            //             if (ps.ref) {
            //                 //used to assign ref 
            //                 [ps.ref].flat().forEach((rr) => (rr as Ref)?.(r))
            //             }


            //             //set readonly variables to component
            //             fixReactiveProps(ps, "position", r)
            //             fixReactiveProps(ps, "map", r)
            //             fixReactiveProps(ps, "scale", r)

            //             fixReactiveProps(ps, "color", r)
            //             fixReactiveProps(ps, "rotation", r)
            //             fixReactiveProps(ps, "onPointerOver", r)


            //             const { children, args, ...remainingProps } = ps
            //                 ; (param[component as any] as string[]).map(paramName => delete remainingProps[paramName])
            //             Object.keys(remainingProps).forEach((k) => {
            //                 if (k.startsWith("on") || k == "dispose") {
            //                     r[k] = remainingProps[k]
            //                 }
            //             })

            //             resolve(r)
            //         })()

            //     })
            // }
            // else {
            const p = Object.values(consP(param[component as any], paramTypes[component as any], meta, props, component))
            // const test = []
            // p.forEach((val) => {
            //     test.push(val?.r)
            // })
            // console.log("test", test)
            const r = new Three[toUpper(component as any)](...p)

            if (props.ref) {
                // if (isObservable(r)) {
                //     useEffect(() => {
                //         // if (!$$(r)) {
                //         //     return
                //         // }
                //         setRef(r, props.ref)

                //         // useMicrotask(() => [props.ref].flat().forEach((rr) => (rr as Ref)?.($$(r))))
                //     })
                // }
                // else {
                //     // used to assign ref
                //     // setRef(r, props.ref)

                    // [props.ref].flat().forEach((rr) => (rr as Ref)?.(r))
                // }
            }


            //set readonly variables to component
            fixReactiveProps(props, "position", r)
            fixReactiveProps(props, "map", r)
            fixReactiveProps(props, "scale", r)

            fixReactiveProps(props, "color", r)
            fixReactiveProps(props, "rotation", r)
            fixReactiveProps(props, "onPointerOver", r)

            const excludedProps = ["position", 'map', "scale", "color", "rotation"]
            const { children, args, ...remainingProps } = props
                ; (param[component as any] as string[]).map(paramName => delete remainingProps[paramName])
            Object.keys(remainingProps).forEach((k) => {
                if (excludedProps.includes(k)) {

                }
                else {
                    r[k] = remainingProps[k]
                }

                if (k.includes("shadow-camera")) {
                    const cameraVar = k.split("-")
                    if (r.castShadow) {
                        r.shadow.camera[cameraVar[2]] = remainingProps[k]
                    }
                }
            })

            untrack(r);

            return r
            // }
        })
    }
}
