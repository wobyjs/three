// / <reference path="./jsx" />
/** @jsxImportSource ./jsx */

import { useEffect, $$, $, getMeta, resolveChild, useContext, ObservableMaybe, type JSX } from "woby"
import { isFunction, isPromise, } from "./utils"
import { Color, Object3D } from "three"
import { threeContext, t, throttle, } from "./context"
import { Three } from './three'
import * as three from 'three'

export type canvasProps = {
    scene?: ObservableMaybe<three.Scene>,
    camera?: ObservableMaybe<three.OrthographicCamera | three.PerspectiveCamera>,
    width?: ObservableMaybe<number | string>,
    height?: ObservableMaybe<number>,
    children?: JSX.Child,
}


export const Canvas3D = (props: canvasProps) => {
    const sceneDict = new Map<Function, Object3D>()
    const R = () => {
        const { renderer, scene, camera, domElement, width, height } = useContext(threeContext)
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
                for (let i = 0; i < intersects.length; i++) {
                    //@ts-ignore
                    intersects[i].object.onClick?.(event)
                }
            }
        }

        const animate = (context?) => {
            const fs = $$(context.frame)
            fs.forEach((f: Function) => f())

            requestAnimationFrame(() => animate(context))

            useEffect(() => {
                $$(renderer).render($$(scene), $$(camera))
            })
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
                else resolveChild(obj, (val) => {
                    //used to remove existing objects
                    if (sceneDict.has(obj as any)) {
                        if (sceneDict.get(obj as any) !== (val as any) && !!sceneDict.get(obj as any)) {
                            $$(scene).remove(sceneDict.get(obj as any))
                            sceneDict.set(obj as any, val as any)
                        }
                    }

                    if (val && val.constructor?.name !== 'orbitControls') {
                        // console.log('DEBUG: ',  val instanceof Object3D)
                        $$(scene).add(val as any)
                        sceneDict.set(obj as any, val as any)
                    }
                })
            else
                $$(scene).add(obj as any)
        })

        // children.flat().forEach((obj) => {
        // if (isFunction(obj) || isPromise(obj)) {

        //     if (isPromise(obj)) {
        //         (async () => {
        //             r(await obj as any)

        //         })()
        //         $$(scene).add(r() as any)

        //         return () => {
        //             $$(scene).remove(r())

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

