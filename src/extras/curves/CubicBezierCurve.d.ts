import { Object3DNode, Vector2 } from '../../../three-types';
import { CubicBezierCurve } from 'three/src/extras/curves/CubicBezierCurve.js';
export { CubicBezierCurve } from 'three/src/extras/curves/CubicBezierCurve.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        CubicBezierCurve: typeof CubicBezierCurve;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubicBezierCurve: CubicBezierCurveProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        cubicBezierCurve: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        cubicBezierCurve: string[];
    }
}
export type CubicBezierCurveProps = Object3DNode<CubicBezierCurve, typeof CubicBezierCurve, {
    v0?: Vector2;
    v1?: Vector2;
    v2?: Vector2;
    v3?: Vector2;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cubicBezierCurve: Partial<{
            v0?: Vector2;
            v1?: Vector2;
            v2?: Vector2;
            v3?: Vector2;
        }>;
    }
}
//# sourceMappingURL=CubicBezierCurve.d.ts.map