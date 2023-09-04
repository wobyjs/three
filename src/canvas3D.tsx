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
const t = () => {
    const t = {
        frame: [],
        renderer: $(new three.WebGLRenderer()),
        scene: $(new three.Scene()),
        camera: $(new three.PerspectiveCamera()),
        domElement: useMemo(() => $$(t.renderer)?.domElement),
        width: window.innerWidth,
        height: window.innerHeight
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


export const useFrame = (fn: () => void) => {
    const fs = useFrames()
    fs.push(fn)
}



export const Canvas3D = (props) => {
    const R = () => {

        const { renderer, scene, camera, domElement, width, height } = useContext(threeContext)
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
        debugger
        $$(renderer).setSize($$(width), $$(height))

        $$(camera).position.z = 5
        children.flat().forEach((obj) => {
            $$(scene).add(obj as any)
        })
        animate()
        return domElement
    }

    return (
        <threeContext.Provider value={t()}>
            <R />
        </threeContext.Provider>
    )
}
