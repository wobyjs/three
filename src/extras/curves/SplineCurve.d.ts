import { Object3DNode, Vector2 } from '../../../three-types';
import { SplineCurve } from 'three/src/extras/curves/SplineCurve.js';
export { SplineCurve } from 'three/src/extras/curves/SplineCurve.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        SplineCurve: typeof SplineCurve;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            splineCurve: SplineCurveProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        splineCurve: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        splineCurve: string[];
    }
}
export type SplineCurveProps = Object3DNode<SplineCurve, typeof SplineCurve, {
    points?: Vector2[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        splineCurve: Partial<{
            points?: Vector2[];
        }>;
    }
}
//# sourceMappingURL=SplineCurve.d.ts.map