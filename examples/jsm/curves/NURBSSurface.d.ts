import { Node, Vector2, Vector3, Vector4 } from '../../../three-types';
import { NURBSSurface } from 'three/examples/jsm/curves/NURBSSurface.js';
export * from 'three/examples/jsm/curves/NURBSSurface.js';
declare module '../../../lib/3/three' {
    interface Three {
        NURBSSurface: typeof NURBSSurface;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nurbsSurface: NURBSSurfaceProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nurbsSurface: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nurbsSurface: string[];
    }
}
export type NURBSSurfaceProps = Node<NURBSSurface, typeof NURBSSurface, {
    degree1: number;
    degree2: number;
    knots1: number[];
    knots2: number[];
    controlPoints: Vector2[][] | Vector3[][] | Vector4[][];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nURBSSurface: Partial<{
            degree1: number;
            degree2: number;
            knots1: number[];
            knots2: number[];
            controlPoints: Vector2[][] | Vector3[][] | Vector4[][];
        }>;
    }
}
//# sourceMappingURL=NURBSSurface.d.ts.map