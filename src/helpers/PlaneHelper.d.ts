import { Object3DNode } from '../../three-types';
import { Plane } from 'three/src/math/Plane.js';
import { PlaneHelper } from 'three/src/helpers/PlaneHelper.js';
export { PlaneHelper } from 'three/src/helpers/PlaneHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        PlaneHelper: typeof PlaneHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            planeHelper: PlaneHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        planeHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        planeHelper: string[];
    }
}
export type PlaneHelperProps = Object3DNode<PlaneHelper, typeof PlaneHelper, {
    plane: Plane;
    size?: number;
    color?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        planeHelper: Partial<{
            plane: Plane;
            size?: number;
            color?: number;
        }>;
    }
}
//# sourceMappingURL=PlaneHelper.d.ts.map