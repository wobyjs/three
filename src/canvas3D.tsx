// / <reference path="./jsx" />
/** @jsxImportSource ./jsx */

import { useEffect, $$, $, getMeta, resolveChild, useContext, ObservableMaybe, type JSX, isObservable } from "woby"
import { isFunction, isPromiseR, } from "./utils"
import { Color, Object3D } from "three"
import { threeContext, t, throttle, useThree, } from "./context"
import { Three } from './three'
import * as three from 'three'
// import { consParams } from "./components/consParams"
// import { objParams } from "./components/objParams"
import {  setValue } from "./components/createElement"
// import { defaults } from './components/defaults'
// import { ConstructorParam } from "./components/ConstructorParam"
// import { camelcase } from "./camelcase"

export type canvasProps = {
    scene?: ObservableMaybe<three.Scene>,
    camera?: ObservableMaybe<three.OrthographicCamera | three.PerspectiveCamera>,
    renderer?: ObservableMaybe<three.Renderer>,
    width?: ObservableMaybe<number | string>,
    height?: ObservableMaybe<number>,
    children?: JSX.Child,
    noRender?: ObservableMaybe<boolean>
    background?: ObservableMaybe<string | number | Color | three.Texture | three.CubeTexture>
}

const toColor = (color: ObservableMaybe<string | number | Color | three.Texture | three.CubeTexture>) => {
    const c = $$(color)
    if (c instanceof Color)
        return c
    else if (c instanceof three.Texture)
        return c
    // else if (c instanceof three.CubeTexture)
    //     return c

    return new Color(c)
}

const param = ['scene', 'camera', 'renderer', 'width', 'height', 'children', 'noRender', 'background'] as const
export const Canvas3D = ({ noRender, background, ...props }: canvasProps) => {
    const sceneDict = new Map<Function, Object3D>()

    const meta = !isObservable(props.children) && !Array.isArray(props.children) ? (props.children ? [getMeta(props.children)] : []) : [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c as any))

    const consParam = param.toObject()
    const objParam = param
    // const p = ConstructorParam(consParam, objParam, meta, props, 'Canvas3D')

    const r = {
    }

    // // console.log(p, r)
    // //set readonly variables to component
    // fixReactiveProps(props, r)

    const { children, ...remainingProps } = props
    Object.keys(consParam).map(paramName => delete remainingProps[paramName])

    Object.keys(remainingProps).forEach((k) => {
        // if (k.startsWith("on") || k == "dispose")
        //     r[k] = remainingProps[k]

        if (k.includes("-"))
            setValue(r, k, remainingProps[k])
    })

    objParam.map((paramKey, i) => {
        const paramName = consParam[paramKey] as string

        if (!paramName) return

        // if (props[paramName])
        //     r[paramName] = props[paramName]
        // else {
        const m = meta.filter(m => m && (m.Component + '').toLowerCase().endsWith(paramKey.toLowerCase()))[0]
        if (!r[paramName] && m?.Component) {
            const { props } = m as { props: { ref: JSX.Refs<any> } }
            if (!props.ref)
                props.ref = $()
            else
                props.ref = [...[props.ref].flat(), $()]

            r[paramName] = Array.isArray(props.ref) ? props.ref[props.ref.length - 1] : props.ref  // jsx(m.Component as any, m.props as any)
        }
        // }
    })

    const R = () => {
        const { renderer, scene, camera, domElement, width, height } = useThree()
        const raycaster = new Three.Raycaster()
        const pointer = new Three.Vector2()
        const meshObj: { obj?: any } = {}

        //dispose all object 
        // useEffect(() => () => {
        //     //@ts-ignore
        //     props.children.forEach(c => {
        //         $$(scene).remove(c)
        //     })
        // })

        const onPointerMove = (event) => {
            event.stopPropagation()
            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(pointer, $$(camera))
            const intersects = raycaster.intersectObjects($$(scene).children)
            if (intersects.length > 0) {
                meshObj.obj = intersects[0].object
                //@ts-ignore
                throttle(intersects[0].object.onPointerOver?.(event), 1000)
            }
            else
                throttle(meshObj.obj?.onPointerOut?.(event), 1000)
        }

        const onClick = (event: PointerEvent) => {
            event.preventDefault()

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(pointer, $$(camera))
            const intersects = raycaster.intersectObjects($$(scene).children)
            if (intersects.length > 0) {
                for (let i = 0; i < intersects.length; i++)
                    //@ts-ignore
                    intersects[i].object.onClick?.(event)
                }
            }
        }

        const animate = (context?) => {
            const fs = $$(context.frame)
            fs.forEach((f: Function) => f())

            requestAnimationFrame(() => animate(context))

            if (!$$(noRender))
                // useEffect(() => {
                $$(renderer).render($$(scene), $$(camera))
            // })
        }

        //@ts-ignore
        const meta = [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c as any))

        useEffect(() => { $$(renderer)?.setSize($$(width), $$(height)) })
        useEffect(() => { $$(camera)?.position && ($$(camera).position.z = 5) })

        useEffect(() => { if ($$(background)) $$(scene).background = toColor($$(background)) })

        const r = $<Object3D>()
        const flatChildren = [props.children].flat()

        flatChildren.forEach(obj => {
            if (isFunction(obj) || isPromiseR(obj))
                if (isPromiseR(obj))
                    useEffect(() => {
                        (async () => {
                            r(await obj as any)
                            $$(scene).add($$(r) as any)
                        })()
                    })
                else resolveChild(obj, val => {
                    //used to remove existing objects
                    if (sceneDict.has(obj as any)) {
                        if (sceneDict.get(obj as any) !== (val as any) && !!sceneDict.get(obj as any)) {
                            $$(scene).remove(sceneDict.get(obj as any))
                            sceneDict.set(obj as any, val as any)
                        }
                    }

                    if (val)
                        if (val.constructor?.name === 'OrbitControls') { }
                        else if (val.constructor?.name.toLowerCase().endsWith('renderer'))
                            useThree('renderer', val as any)
                        else {
                            // if (val.constructor?.name.toLowerCase().endsWith('camera'))
                            //     useThree('camera', val as any)

                            // console.log('DEBUG: ',  val instanceof Object3D)
                            $$(scene).add(val as any)
                            sceneDict.set(obj as any, val as any)
                        }
                })
            else if (!!obj)
                $$(scene).add(obj as any)
        })

        // children.flat().forEach((obj) => {
        // if (isFunction(obj) || isPromise(obj)) {

        //     if (isPromise(obj)) {
        //         (async () => {
        //             r(await obj as any)

        //         })()
        //         $$(scene).add($$(r) as any)

        //         return () => {
        //             $$(scene).remove($$(r))

        //             if ($$(r as any)?.geometry?.selfDispose)
        //                 $$(r as any).geometry.dispose()

        //             if ($$(r as any)?.material?.selfDispose)
        //                 $$(r as any).material.dispose()
        //         }
        //     }
        //     else {
        // resolveChild(obj, (r) => $$(scene).add(r))

        // return () => {
        //     $$(scene).remove(r as any)

        //     if ((r as any)?.geometry?.selfDispose)
        //         (r as any).geometry.dispose()

        //     if ((r as any)?.material?.selfDispose)
        //         (r as any).material.dispose()
        // }
        //         }
        //     }

        //     else $$(scene).add(obj as any)
        // })

        useEffect(() => {
            $$(domElement).addEventListener('pointermove', onPointerMove)
            $$(domElement).addEventListener('pointerdown', onClick)

            return () => {
                $$(domElement).removeEventListener('pointermove', onPointerMove)
                $$(domElement).removeEventListener('pointerdown', onClick)
            }
        })

        animate(useContext(threeContext))
        return domElement
    }

    return (//@ts-ignore
        <threeContext.Provider value={t(r)}>
            <R />
        </threeContext.Provider>
    )
}

// const canvas3d = Canvas3D


// declare module 'three' {
//     // let Canvas3D: typeof canvas3d
//     interface Three {
//          Canvas3D: typeof canvas3d
//         // let OrbitControls: orbitControls
//         // let Text: text
//         // let TextGeometry: TextGeometry
//         // let Gltf: gltf
//     }
// }

declare module './three' {
    interface Three {
        Canvas3D: typeof Canvas3D
    }
}

//@ts-ignore
Three.Canvas3D = Canvas3D

