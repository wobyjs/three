import { Object3DNode, Vector2 } from '../../../three-types';
import { QuadraticBezierCurve } from 'three/src/extras/curves/QuadraticBezierCurve.js';
export { QuadraticBezierCurve } from 'three/src/extras/curves/QuadraticBezierCurve.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        QuadraticBezierCurve: typeof QuadraticBezierCurve;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quadraticBezierCurve: QuadraticBezierCurveProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        quadraticBezierCurve: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        quadraticBezierCurve: string[];
    }
}
export type QuadraticBezierCurveProps = Object3DNode<QuadraticBezierCurve, typeof QuadraticBezierCurve, {
    v0?: Vector2;
    v1?: Vector2;
    v2?: Vector2;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        quadraticBezierCurve: Partial<{
            v0?: Vector2;
            v1?: Vector2;
            v2?: Vector2;
        }>;
    }
}
//# sourceMappingURL=QuadraticBezierCurve.d.ts.map