import { Node, Vector3 } from '../../../three-types';
import { Matrix3 } from 'three/src/math/Matrix3.js';
import { OBB } from 'three/examples/jsm/math/OBB.js';
export * from 'three/examples/jsm/math/OBB.js';
declare module '../../../lib/3/three' {
    interface Three {
        OBB: typeof OBB;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            obb: OBBProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        obb: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        obb: string[];
    }
}
export type OBBProps = Node<OBB, typeof OBB, {
    center?: Vector3;
    halfSize?: Vector3;
    rotation?: Matrix3;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        oBB: Partial<{
            center?: Vector3;
            halfSize?: Vector3;
            rotation?: Matrix3;
        }>;
    }
}
//# sourceMappingURL=OBB.d.ts.map