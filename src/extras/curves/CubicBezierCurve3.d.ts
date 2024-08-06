import { Object3DNode, Vector3 } from '../../../three-types';
import { CubicBezierCurve3 } from 'three/src/extras/curves/CubicBezierCurve3.js';
export { CubicBezierCurve3 } from 'three/src/extras/curves/CubicBezierCurve3.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        CubicBezierCurve3: typeof CubicBezierCurve3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubicBezierCurve3: CubicBezierCurve3Props;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        cubicBezierCurve3: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        cubicBezierCurve3: string[];
    }
}
export type CubicBezierCurve3Props = Object3DNode<CubicBezierCurve3, typeof CubicBezierCurve3, {
    v0?: Vector3;
    v1?: Vector3;
    v2?: Vector3;
    v3?: Vector3;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cubicBezierCurve3: Partial<{
            v0?: Vector3;
            v1?: Vector3;
            v2?: Vector3;
            v3?: Vector3;
        }>;
    }
}
//# sourceMappingURL=CubicBezierCurve3.d.ts.map