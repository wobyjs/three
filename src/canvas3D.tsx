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

const t = () => {
    const t = {
        frame: [],
        renderer: $(new three.WebGLRenderer()),
        defaultScene: $(new three.Scene()),
        defaultCamera: $(new three.PerspectiveCamera()),
        domElement: useMemo(() => $$(t.renderer)?.domElement),
        defaultWidth: window.innerWidth,
        defaultHeight: window.innerHeight
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


export const Canvas3D = (props: canvasProps) => {
    const R = () => {

        const { renderer, defaultScene, defaultCamera, domElement, defaultWidth, defaultHeight } = useContext(threeContext)
        const scene = props.scene ? props.scene : defaultScene
        const camera = props.camera ? props.camera : defaultCamera
        const width = props.width ? props.width : defaultWidth
        const height = props.height ? props.height : defaultHeight

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
        //check props and put ref prop into observable
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
