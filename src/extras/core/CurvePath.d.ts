import { Vector2 } from 'three/src/math/Vector2.js';
import { Object3DNode } from '../../../three-types';
import { Vector3 } from 'three/src/math/Vector3.js';
import { CurvePath } from 'three/src/extras/core/CurvePath.js';
export { CurvePath } from 'three/src/extras/core/CurvePath.js';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            curvePath: CurvePathProps<Vector2 | Vector3>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        curve: string[];
        curvePath: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        curve: string[];
        curvePath: string[];
    }
}
export type CurvePathProps<T extends Vector2 | Vector3> = Object3DNode<CurvePath<T>, typeof CurvePath, {}>;
//# sourceMappingURL=CurvePath.d.ts.map