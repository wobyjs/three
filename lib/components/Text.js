/** @jsxImportSource ./jsx-runtime */
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { $, $$, useEffect, useMemo } from "woby";
import { useFont } from "../hooks";
import { Three } from '../3/three';
import { consParams } from '../3/consParams';
import { objParams } from '../3/objParams';
import { defaults } from '../3/defaults';
import { Mesh } from 'three/src/objects/Mesh';
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial';
export const Text = ({ material: mat, text, pathToFont, ...props }) => {
    const geometry = $();
    const mesh = $();
    const font = useFont(pathToFont);
    const material = mat ?? new MeshStandardMaterial();
    useEffect(() => {
        if (!$$(font))
            return;
        const g = new TextGeometry($$(text), {
            font: font(),
            size: 1,
            height: 0.1,
            curveSegments: 12,
            ...props
        });
        //@ts-ignore
        g.selfDispose = true;
        geometry(g);
        mesh(new Mesh(geometry(), $$(material)));
        $$(mesh).position.set(1, 1, 1);
    });
    return useMemo(() => $$(geometry) ? $$(mesh) : null);
};
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
].distinct();
//@ts-ignore
objParams.text = [...objParams.textGeometry,
    'pathToFont',
    'text',
    'material',
];
//@ts-ignore
defaults.text = { text: 'abc' };
//@ts-ignore
Three.Text = Text;
