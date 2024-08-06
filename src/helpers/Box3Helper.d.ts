import { Object3DNode } from '../../three-types';
import { Box3 } from 'three/src/math/Box3.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { Box3Helper } from 'three/src/helpers/Box3Helper.js';
export { Box3Helper } from 'three/src/helpers/Box3Helper.js';
declare module '../../lib/3/three' {
    interface Three {
        Box3Helper: typeof Box3Helper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            box3Helper: Box3HelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        box3Helper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        box3Helper: string[];
    }
}
export type Box3HelperProps = Object3DNode<Box3Helper, typeof Box3Helper, {
    box: Box3;
    color?: ColorRepresentation;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        box3Helper: Partial<{
            box: Box3;
            color?: ColorRepresentation;
        }>;
    }
}
//# sourceMappingURL=Box3Helper.d.ts.map