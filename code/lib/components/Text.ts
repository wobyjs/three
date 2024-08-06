/** @jsxImportSource ./jsx-runtime */

import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry'
import { $, $$, Observable, ObservableMaybe, useEffect, useMemo } from "woby"
import { useFont } from "../hooks"
import { Three } from '../3/three'
import { consParams } from '../3/consParams'
import { objParams } from '../3/objParams'
import { defaults } from '../3/defaults'
import { Material } from 'three/src/materials/Material'
import { Mesh } from 'three/src/objects/Mesh'
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial'

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

declare module '../3/three' {
    interface Three {
        Text: Text
    }
}

//@ts-ignore
Three.Text = Text
