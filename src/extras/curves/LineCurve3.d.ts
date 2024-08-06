import { Object3DNode, Vector3 } from '../../../three-types';
import { LineCurve3 } from 'three/src/extras/curves/LineCurve3.js';
export { LineCurve3 } from 'three/src/extras/curves/LineCurve3.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        LineCurve3: typeof LineCurve3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineCurve3: LineCurve3Props;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lineCurve3: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lineCurve3: string[];
    }
}
export type LineCurve3Props = Object3DNode<LineCurve3, typeof LineCurve3, {
    v1?: Vector3;
    v2?: Vector3;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lineCurve3: Partial<{
            v1?: Vector3;
            v2?: Vector3;
        }>;
    }
}
//# sourceMappingURL=LineCurve3.d.ts.map