import { Object3DNode, Vector2 } from '../../../three-types';
import { LineCurve } from 'three/src/extras/curves/LineCurve.js';
export { LineCurve } from 'three/src/extras/curves/LineCurve.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        LineCurve: typeof LineCurve;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineCurve: LineCurveProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lineCurve: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lineCurve: string[];
    }
}
export type LineCurveProps = Object3DNode<LineCurve, typeof LineCurve, {
    v1?: Vector2;
    v2?: Vector2;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lineCurve: Partial<{
            v1?: Vector2;
            v2?: Vector2;
        }>;
    }
}
//# sourceMappingURL=LineCurve.d.ts.map