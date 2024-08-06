import { Node, Vector2, Vector3, Vector4 } from '../../../three-types';
import { NURBSCurve } from 'three/examples/jsm/curves/NURBSCurve.js';
export * from 'three/examples/jsm/curves/NURBSCurve.js';
declare module '../../../lib/3/three' {
    interface Three {
        NURBSCurve: typeof NURBSCurve;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nurbsCurve: NURBSCurveProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nurbsCurve: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nurbsCurve: string[];
    }
}
export type NURBSCurveProps = Node<NURBSCurve, typeof NURBSCurve, {
    degree: number;
    knots: number[];
    controlPoints: Vector2[] | Vector3[] | Vector4[];
    startKnot?: number;
    endKnot?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nURBSCurve: Partial<{
            degree: number;
            knots: number[];
            controlPoints: Vector2[] | Vector3[] | Vector4[];
            startKnot?: number;
            endKnot?: number;
        }>;
    }
}
//# sourceMappingURL=NURBSCurve.d.ts.map