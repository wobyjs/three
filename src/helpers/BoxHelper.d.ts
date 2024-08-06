import { Object3DNode } from '../../three-types';
import { Object3D } from 'three/src/core/Object3D.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { BoxHelper } from 'three/src/helpers/BoxHelper.js';
export { BoxHelper } from 'three/src/helpers/BoxHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        BoxHelper: typeof BoxHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            boxHelper: BoxHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        boxHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        boxHelper: string[];
    }
}
export type BoxHelperProps = Object3DNode<BoxHelper, typeof BoxHelper, {
    object: Object3D;
    color?: ColorRepresentation;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        boxHelper: Partial<{
            object: Object3D;
            color?: ColorRepresentation;
        }>;
    }
}
//# sourceMappingURL=BoxHelper.d.ts.map