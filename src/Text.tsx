// / <reference path=". /jsx-runtime" />
/** @jsxImportSource ./jsx-runtime */

import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry';
import { $, $$, Observable, ObservableMaybe, useEffect, useMemo } from "voby";
import { Material, Mesh, MeshStandardMaterial } from "three";
import { useFont } from "./canvas3D";

export type textGeometryProps = {
    pathToFont: string,
    str?: string | ObservableMaybe<string>,
    material?: ObservableMaybe<Material>,

} & TextGeometryParameters

export const Text = ({ material: mat, str, pathToFont, ...props }: textGeometryProps): Observable => {

    const geometry = $<TextGeometry>()
    const mesh = $<Mesh>()
    const font = useFont(pathToFont)
    const material = mat ?? new MeshStandardMaterial();

    useEffect(() => {
        if (!$$(font)) {
            return
        }

        const g = new TextGeometry($$(str), {
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
        mesh().position.set(1, 1, 1)

    })

    return (
        useMemo(() => $$(geometry) ? $$(mesh) : null)
    )
}
