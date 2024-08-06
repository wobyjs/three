import { Object3DNode, Vector3 } from '../../../three-types';
import { CatmullRomCurve3, CurveType } from 'three/src/extras/curves/CatmullRomCurve3.js';
export { CatmullRomCurve3 } from 'three/src/extras/curves/CatmullRomCurve3.js';
import '../core/CurvePath';
declare module '../../../lib/3/three' {
    interface Three {
        CatmullRomCurve3: typeof CatmullRomCurve3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            catmullRomCurve3: CatmullRomCurve3Props;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        catmullRomCurve3: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        catmullRomCurve3: string[];
    }
}
export type CatmullRomCurve3Props = Object3DNode<CatmullRomCurve3, typeof CatmullRomCurve3, {
    points?: Vector3[];
    closed?: boolean;
    curveType?: CurveType;
    tension?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        catmullRomCurve3: Partial<{
            points?: Vector3[];
            closed?: boolean;
            curveType?: CurveType;
            tension?: number;
        }>;
    }
}
//# sourceMappingURL=CatmullRomCurve3.d.ts.map