// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
import { useContext, createContext, Observable, useEffect, $$, $, ObservableMaybe, isObservable, getMeta, useMemo } from "voby"
import { param, paramTypes } from "./params"
import { consP } from "./consP"

type canvasProperties = {
    frame?: [],
    renderer?: Observable<three.WebGLRenderer>,
    scene?: ObservableMaybe<three.Scene>,
    camera?: ObservableMaybe<three.OrthographicCamera | three.PerspectiveCamera>,//?
    domElement?: ObservableMaybe<HTMLCanvasElement>,
    width?: ObservableMaybe<number>,
    height?: ObservableMaybe<number>
}

export type canvasProps = {
    scene?: ObservableMaybe<three.Scene>,
    camera?: ObservableMaybe<three.OrthographicCamera | three.PerspectiveCamera>,
    width?: ObservableMaybe<number>,
    height?: ObservableMaybe<number>,
    children?: JSX.Child
}

const t = (props?: canvasProps) => {
    const t = {
        frame: [],
        renderer: $(new three.WebGLRenderer()),
        scene: $(props?.scene ?? new three.Scene()),
        camera: $(props?.camera ?? new three.PerspectiveCamera()),
        domElement: useMemo(() => $$(t.renderer)?.domElement),
        width: props?.width ?? window.innerWidth,
        height: props?.width ?? window.innerHeight
    } as canvasProperties
    return t
}


export const threeContext = createContext<canvasProperties>(t())
export const useFrames = () => useContext(threeContext)['frame'] as (() => void)[]
export const useWidth = () => useContext(threeContext)['width']


export const useThree = <T,>(key: string, v?: ObservableMaybe<T>) => {
    const t = useContext(threeContext)
    const vv = isObservable(v) ? v : $(v)
    if (t[key] && !v) {
        return t[key]
    }

    t[key] = vv
    return vv
}

export const useCamera = () => useContext(threeContext).camera
export const useFrame = (fn: () => void) => {
    const fs = useFrames()
    fs.push(fn)
}
function throttle(callback, limit) {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback();  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit);
        }
    }
}


export const Canvas3D = (props: canvasProps) => {
    const R = () => {
        const { renderer, scene, camera, domElement, width, height } = useContext(threeContext)
        const raycaster = new three.Raycaster();
        const pointer = new three.Vector2();
        const meshObj: { obj?: any } = {}

        const onPointerMove = (event) => {
            event.stopPropagation()
            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(pointer, $$(camera));
            const intersects = raycaster.intersectObjects($$(scene).children)

            if (intersects.length > 0) {
                // meshObj.push(intersects[0].object)
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
            raycaster.setFromCamera(pointer, $$(camera));
            const intersects = raycaster.intersectObjects($$(scene).children)
            if (intersects.length > 0) {
                for (let i = 0; i < intersects.length; i++) {
                    //@ts-ignore
                    intersects[i].object.onClick?.(event)
                }

            }
        }


        const animate = () => {
            const fs = useFrames()
            requestAnimationFrame(() => animate());
            fs.forEach(f => f())

            useEffect(() => {
                $$(renderer).render($$(scene), $$(camera))
            })

        }

        const meta = [$$(props.children)].flat()
            .filter(r => !!r).map(c => getMeta(c as any))

        let children = Object.values(consP(param['canvas3D'], paramTypes['canvas3D'], meta, props, 'canvas3D'))
        if (props.children) {
            children = children.concat([props.children])
        }
        $$(renderer).setSize($$(width), $$(height))

        $$(camera).position.z = 5
        // $$(scene).background = new three.Color("white")

        children.flat().forEach((obj) => {
            $$(scene).add(obj as any)
        })

        $$(domElement).addEventListener('pointermove', onPointerMove);
        $$(domElement).addEventListener('pointerdown', onClick);

        animate()
        return domElement
    }

    return (
        <threeContext.Provider value={t(props)}>
            <R />
        </threeContext.Provider>
    )
}
