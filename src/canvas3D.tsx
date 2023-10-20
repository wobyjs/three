// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
import { useEffect, $$, $, getMeta, resolveChild, useContext } from "voby"
import { param, paramTypes } from "./params"
import { consP, } from "./consP"
import { isFunction, } from "./utils"
import { Color, Object3D } from "three"
import { canvasProps } from "./types/canvas3D"
import { Three } from "./three"
import { threeContext, t, throttle, } from "./context"


export const Canvas3D = (props: canvasProps) => {
    const R = () => {
        const { renderer, scene, camera, domElement, width, height } = useContext(threeContext)
        const raycaster = new three.Raycaster();
        const pointer = new three.Vector2();
        const meshObj: { obj?: any } = {}

        //dispose all object 
        useEffect(() => () => {
            //@ts-ignore
            props.children.forEach(c => {
                $$(scene).remove(c)
            })
        })

        const onPointerMove = (event) => {
            event.stopPropagation()
            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(pointer, $$(camera));
            const intersects = raycaster.intersectObjects($$(scene).children)
            if (intersects.length > 0) {
                meshObj.obj = intersects[0].object
                //@ts-ignore
                throttle(intersects[0].object.onPointerOver?.(event), 1000)

            }
            else {
                throttle(meshObj.obj.onPointerOut?.(event), 1000)
            }

        }

        const onClick = (event: PointerEvent) => {
            event.preventDefault()

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(pointer, $$(camera));
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

            requestAnimationFrame(() => animate(context));

            useEffect(() => {
                $$(renderer).render($$(scene), $$(camera))
            })

        }

        const childProps = [$$(props.children)].forEach((index) => {
            if (isFunction(index)) {
                useEffect(() => {
                    index()
                })
            }
        })

        //@ts-ignore
        const meta = [$$(childProps)].flat().filter(r => !!r).map(c => getMeta(c as any))

        let children = Object.values(consP(param['canvas3D'], paramTypes['canvas3D'], meta, props, 'canvas3D'))
        if (props.children) {
            children = children.concat([props.children])
        }

        $$(renderer).setSize($$(width), $$(height))
        $$(camera).position.z = 5
        $$(scene).background = new Color("white")

        const r = $<Object3D>();
        const flat = children.flat()
        for (let i = 0; i <= flat.length; i++) {
            resolveChild(flat[i], (r) => $$(scene).add(r))
        }

        // children.flat().forEach((obj) => {
        //     if (isFunction(obj) || isPromise(obj)) {
        //         // useEffect(() => {

        //         // if (isPromise(obj)) {
        //         //     (async () => {
        //         //         r(await obj as any)

        //         //     })()
        //         //     $$(scene).add(r() as any)

        //         //     return () => {
        //         //         $$(scene).remove(r())

        //         //         if ($$(r as any)?.geometry?.selfDispose)
        //         //             $$(r as any).geometry.dispose()

        //         //         if ($$(r as any)?.material?.selfDispose)
        //         //             $$(r as any).material.dispose()
        //         //     }
        //         // }
        //         // else {

        //         resolveChild(obj, (r) => $$(scene).add(r))

        //         // return () => {
        //         //     $$(scene).remove(r as any)

        //         //     if ((r as any)?.geometry?.selfDispose)
        //         //         (r as any).geometry.dispose()

        //         //     if ((r as any)?.material?.selfDispose)
        //         //         (r as any).material.dispose()
        //         // }
        //         // }
        //         // })
        //     }
        //     else $$(scene).add(obj as any)
        // })

        $$(domElement).addEventListener('pointermove', onPointerMove);
        $$(domElement).addEventListener('pointerdown', onClick);

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

