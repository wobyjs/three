import { Node, Vector3 } from '../../three-types';
import { Box3 } from 'three/src/math/Box3.js';
export { Box3 } from 'three/src/math/Box3.js';
declare module '../../lib/3/three' {
    interface Three {
        Box3: typeof Box3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            box3: Box3Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        box3: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        box3: string[];
    }
}
export type Box3Props = Node<Box3, typeof Box3, {
    min?: Vector3;
    max?: Vector3;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        box3: {
            min?: Vector3;
            max?: Vector3;
        };
    }
}
//# sourceMappingURL=Box3.d.ts.map