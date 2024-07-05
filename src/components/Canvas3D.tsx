// / <reference path="../jsx" />
/** @jsxImportSource ../jsx */

import { useEffect, $$, $, getMeta, resolveChild, useContext, isObservable, type JSX, ObservableMaybe, Observable } from "woby"
import { isFunction, isPromiseR, } from "../utils"
import { Color, Object3D } from "three"
import { threeContext, defaultContext, throttle, useThree, ThreeContext, } from "../hooks"
import { Three } from '../three/three'
import * as three from 'three'
import { setValue } from "../three/createElement"

type Observable2Maybe<T> = {
    [K in keyof T]: T[K] extends Observable<infer U>
    ? ObservableMaybe<U>
    : T[K] extends object
    ? Observable2Maybe<T[K]>
    : T[K];
};

export type CanvasProps = {
    children?: JSX.Child,
    noRender?: ObservableMaybe<boolean>
    background?: ObservableMaybe<string | number | Color | three.Texture | three.CubeTexture>
} & Partial<Observable2Maybe<ThreeContext>>


const toColor = (color: ObservableMaybe<string | number | Color | three.Texture | three.CubeTexture>) => {
    const c = $$(color)
    if (c instanceof Color)
        return c
    else if (c instanceof three.Texture)
        return c

    return new Color(c)
}

const param = ['scene', 'camera', 'renderer', 'width', 'height', 'children', 'noRender', 'background'] as const
export const Canvas3D = ({ noRender, background, ...props }: CanvasProps) => {
    const sceneDict = new Map<Function, Object3D>()

    const meta = !isObservable(props.children) && !Array.isArray(props.children) ? (props.children ? [getMeta(props.children)] : []) : [$$(props.children)].flat().filter(r => !!r).map(c => getMeta(c as any))

    const consParam = param.toObject()
    const objParam = param

    const r = {}


    const { children, ...remainingProps } = props
    Object.keys(consParam).map(paramName => delete remainingProps[paramName])

    Object.keys(remainingProps).forEach((k) => {
        if (k.includes("-"))
            setValue(r, k, remainingProps[k])
    })

    objParam.map((paramKey, i) => {
        const paramName = consParam[paramKey] as string

        if (!paramName) return

        const m = meta.filter(m => m && (m.Component + '').toLowerCase().endsWith(paramKey.toLowerCase()))[0]
        if (!r[paramName] && m?.Component) {
            const { props } = m as { props: { ref: JSX.Refs<any> } }
            if (!props.ref)
                props.ref = $()
            else
                props.ref = [...[props.ref].flat(), $()]

            r[paramName] = Array.isArray(props.ref) ? props.ref[props.ref.length - 1] : props.ref  // jsx(m.Component as any, m.props as any)
        }
    })

    const InContext = () => {
        const { renderer, scene, camera, domElement, width, height } = useThree()
        const raycaster = new Three.Raycaster()
        const pointer = new Three.Vector2()
        const meshObj: { obj?: any } = {}

        // dispose all object 
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

    //@ts-ignore
    return <threeContext.Provider value={defaultContext(r)}>
        <InContext />
    </threeContext.Provider>
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

declare module '../three/three' {
    interface Three {
        Canvas3D: typeof Canvas3D
    }
}

//@ts-ignore
Three.Canvas3D = Canvas3D

