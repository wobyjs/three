// / <reference path="./jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import * as three from "three"
import { useContext, createContext, Observable, useEffect, $$, $, ObservableMaybe, isObservable, getMeta, useMemo } from "voby"
import { param, paramTypes } from "./params"
import { consP } from "./consP"

type canvasProperties = {
    frame?: [],
    renderer?: Observable<three.WebGLRenderer>,
    defaultScene?: ObservableMaybe<three.Scene>,
    defaultCamera?: ObservableMaybe<three.OrthographicCamera | three.PerspectiveCamera>,//?
    domElement?: ObservableMaybe<HTMLCanvasElement>,
    defaultWidth?: ObservableMaybe<number>,
    defaultHeight?: ObservableMaybe<number>
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
        defaultScene: $(props?.scene ?? new three.Scene()),
        defaultCamera: $(props?.camera ?? new three.PerspectiveCamera()),
        domElement: useMemo(() => $$(t.renderer)?.domElement),
        defaultWidth: props?.width ?? window.innerWidth,
        defaultHeight: props?.width ?? window.innerHeight
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

export const useCamera = () => useContext(threeContext).defaultCamera
export const useFrame = (fn: () => void) => {
    const fs = useFrames()
    fs.push(fn)
}


export const Canvas3D = (props: canvasProps) => {
    const R = () => {
        const raycaster = new three.Raycaster();
        const pointer = new three.Vector2();

        const onPointerMove = (event) => {

            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

        }

        const onClick = (event) => {
            event.preventDefault()
            raycaster.setFromCamera(pointer, $$(camera));
            const intersects = raycaster.intersectObjects($$(scene).children)
            if (intersects.length > 0) {
                for ( let i = 0; i < intersects.length; i ++ ) {
                    debugger
                    intersects[i].object.onClick?.(event)
                }
            
            }
        }

        const { renderer, defaultScene: scene, defaultCamera: camera, domElement, defaultWidth: width, defaultHeight: height } = useContext(threeContext)

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
