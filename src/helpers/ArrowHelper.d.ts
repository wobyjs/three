import { Object3DNode, Vector3 } from '../../three-types';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ArrowHelper } from 'three/src/helpers/ArrowHelper.js';
export { ArrowHelper } from 'three/src/helpers/ArrowHelper.js';
import '../../src/core/Object3D';
declare module '../../lib/3/three' {
    interface Three {
        ArrowHelper: typeof ArrowHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arrowHelper: ArrowHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        arrowHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        arrowHelper: string[];
    }
}
export type ArrowHelperProps = Object3DNode<ArrowHelper, typeof ArrowHelper, {
    dir?: Vector3;
    origin?: Vector3;
    length?: number;
    color?: ColorRepresentation;
    headLength?: number;
    headWidth?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        arrowHelper: {
            dir?: Vector3;
            origin?: Vector3;
            length?: number;
            color?: ColorRepresentation;
            headLength?: number;
            headWidth?: number;
        };
    }
}
//# sourceMappingURL=ArrowHelper.d.ts.map