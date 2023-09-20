// / <reference path=". /jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry';
import { $, $$, ObservableMaybe, useEffect, useMemo } from "voby";
import { Material, Mesh, MeshStandardMaterial } from "three";
import { useThree } from "./canvas3D";

export type textGeometryProps = {
    pathToFont?: string,
    str?: string,
    material?: ObservableMaybe<Material>,

} & TextGeometryParameters

export const Text = ({ material: mat, str, pathToFont, ...props }: textGeometryProps): JSX.Child => {

    const geometry = $<TextGeometry>()
    const mesh = $<Mesh>()
    const font = $()
    const material = mat ?? new MeshStandardMaterial();

    useEffect(() => {

        debugger
        const g = new TextGeometry($$(str), {
            font: font(),
            size: 1,
            height: 0.1,
            curveSegments: 12,
            ...props
        })
        g.selfDispose = true
        geometry(g)

        mesh(new Mesh(geometry(), $$(material)))

    });

    (async () => {
        const loader = new FontLoader();

        const loadFont = await loader.loadAsync('fonts/helvetiker_regular.typeface.json')
        geometry(new TextGeometry($$(str), {
            font: loadFont,
            size: 1,
            height: 0.1,
            curveSegments: 12,
            ...props
        }))
        font(loadFont)
        mesh(new Mesh(geometry(), $$(material)))
        mesh().position.set(1, 1, 1)

    })()


    return (
        useMemo(() => $$(geometry) ? $$(mesh) : null)
    )


}
