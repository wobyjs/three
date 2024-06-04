// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
//import * as Three from "three"

import { useEffect, $$, $, getMeta, resolveChild, useContext, type JSX, FunctionMaybe } from "woby"
import { isFunction, isPromise, } from "./components/utils"
import { Color, Object3D } from "three"
import { threeContext, t, throttle, } from "./hooks"
import { Three } from "./three"


export type canvasProps = {
    scene?: FunctionMaybe<three.Scene>,
    camera?: FunctionMaybe<three.OrthographicCamera | three.PerspectiveCamera>,
    width?: FunctionMaybe<number | string>,
    height?: FunctionMaybe<number | string>,
    children?: JSX.Child,
}


export const Canvas3D = (props: canvasProps) => {
    const sceneDict = new Map<JSX.Child, JSX.Child>()
    const R = () => {
        const { renderer, scene, camera, domElement, width, height } = useContext(threeContext)
        const raycaster = new three.Raycaster()
        const pointer = new three.Vector2()
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


        const animate = (context?) => {
            const fs = $$(context.frame)
            fs.forEach((f: Function) => f())

            requestAnimationFrame(() => animate(context))

            useEffect(() => { $$(renderer).render($$(scene), $$(camera)) })
        }

        //@ts-ignore
        const meta = [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c as any))

        $$(renderer).setSize($$(width), $$(height))
        $$(camera).position.z = 5
        $$(scene).background = new Color("white")

        const r = $<Object3D>()
        const flatChildren = [props.children].flat()

        flatChildren.forEach((obj) => {
            if (isFunction(obj) || isPromise(obj))
                if (isPromise(obj))
                    useEffect(() => {
                        (async () => {
                            r(await obj as any)
                            $$(scene).add($$(r) as any)
                        })()
                    })
                else
                    resolveChild(obj, (val) => {
                        //used to remove existing objects
                        if (!val) return

                        if (sceneDict.has(obj)) {
                            if (sceneDict.get(obj) != val as any && !!sceneDict.get(obj)) {
                                $$(scene).remove(sceneDict.get(obj))
                                sceneDict.set(obj, val as any)
                            }
                            else {
                                $$(scene).add(val)
                                sceneDict.set(obj, val as any)
                            }
                        }

                        else {
                            try {
                                if (val instanceof Three.Object3D)
                                    $$(scene).add(val)
                            }
                            catch (ex) {
                                debugger
                            }
                            sceneDict.set(obj, val)
                        }
                    })
            else $$(scene).add(obj as any)

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

        $$(domElement).addEventListener('pointermove', onPointerMove)
        $$(domElement).addEventListener('pointerdown', onClick)

        animate(useContext(threeContext))
        return domElement
    }

    return (//@ts-ignore
        <threeContext.Provider value={t(props)}>
            <R />
        </threeContext.Provider>
    )
}


Three.Canvas3D = Canvas3D

