import { Object3DNode, Vector3 } from '../../../three-types';
import { QuadraticBezierCurve3 } from 'three/src/extras/curves/QuadraticBezierCurve3.js';
export { QuadraticBezierCurve3 } from 'three/src/extras/curves/QuadraticBezierCurve3.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        QuadraticBezierCurve3: typeof QuadraticBezierCurve3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quadraticBezierCurve3: QuadraticBezierCurve3Props;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        quadraticBezierCurve3: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        quadraticBezierCurve3: string[];
    }
}
export type QuadraticBezierCurve3Props = Object3DNode<QuadraticBezierCurve3, typeof QuadraticBezierCurve3, {
    v0?: Vector3;
    v1?: Vector3;
    v2?: Vector3;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        quadraticBezierCurve3: Partial<{
            v0?: Vector3;
            v1?: Vector3;
            v2?: Vector3;
        }>;
    }
}
//# sourceMappingURL=QuadraticBezierCurve3.d.ts.map