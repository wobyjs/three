/** @jsxImportSource ./jsx-runtime */
import { TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry';
import { Observable, ObservableMaybe } from "woby";
import { Material } from 'three/src/materials/Material';
export type textProps = {
    pathToFont: string;
    text?: string | ObservableMaybe<string>;
    material?: ObservableMaybe<Material>;
} & TextGeometryParameters;
export declare const Text: ({ material: mat, text, pathToFont, ...props }: textProps) => Observable;
declare module '../3/three' {
    interface Three {
        Text: Text;
    }
}
//# sourceMappingURL=Text.d.ts.map