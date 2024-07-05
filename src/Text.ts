/** @jsxImportSource ./jsx-runtime */

import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry'
import { $, $$, Observable, ObservableMaybe, useEffect, useMemo } from "woby"
import { Material, Mesh, MeshStandardMaterial } from "three"
import { useFont } from "./context"
import { Three } from './three'
import { consParams } from './components/consParams'
import { objParams } from './components/objParams'
import { defaults } from './components/defaults'

export type textProps = {
    pathToFont: string,
    text?: string | ObservableMaybe<string>,
    material?: ObservableMaybe<Material>,
} & TextGeometryParameters

export const Text = ({ material: mat, text, pathToFont, ...props }: textProps): Observable => {
    const geometry = $<TextGeometry>()
    const mesh = $<Mesh>()
    const font = useFont(pathToFont)
    const material = mat ?? new MeshStandardMaterial()

    useEffect(() => {
        if (!$$(font))
            return

        const g = new TextGeometry($$(text), {
            font: font(),
            size: 1,
            height: 0.1,
            curveSegments: 12,
            ...props
        })
        //@ts-ignore
        g.selfDispose = true
        geometry(g)
        mesh(new Mesh(geometry(), $$(material)))
        $$(mesh).position.set(1, 1, 1)

    })

    return useMemo(() => $$(geometry) ? $$(mesh) : null)
}


// declare module './components/consParams' {
//     interface consParams {
//         text: string[]
//     }
// }

//@ts-ignore
consParams.text = [
    ...consParams.textGeometry,
    'pathToFont',
    'text',
    'material',
].distinct()

//@ts-ignore
objParams.text = [...objParams.textGeometry,
    'pathToFont',
    'text',
    'material',
]

//@ts-ignore
defaults.text = { text: 'abc' }

// three.TextGeometry = TextGeometry

// const text = Text

declare module './three' {
    interface Three {
        Text: Text
    }
}

//@ts-ignore
Three.Text = Text
