// / <reference path=". /jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry';
import { $, $$, ObservableMaybe, useEffect, useMemo } from "voby";
import { Material, Mesh, MeshStandardMaterial } from "three";

export type textGeometryProps = {
    pathToFont?: string,
    str?: string,
    material?: ObservableMaybe<Material>,

} & TextGeometryParameters

export const Text = ({ material: mat, str, pathToFont, ...props }: textGeometryProps): JSX.Child => {
    debugger
    const geometry = $<TextGeometry>()
    const mesh = $()
    const material = mat ?? new MeshStandardMaterial();

    // useEffect(() => {
    //     $$(geometry)
    // });
    (async () => {
        const loader = new FontLoader();

        const font = await loader.loadAsync('fonts/helvetiker_regular.typeface.json')
        geometry(new TextGeometry(str, {
            font: font,
            size: 1,
            height: 0.1,
            curveSegments: 12,
            ...props
        }))
        mesh(new Mesh(geometry(), $$(material)))

    })()


    return (
        useMemo(() => $$(geometry) ? $$(mesh) : null)
    )


}
