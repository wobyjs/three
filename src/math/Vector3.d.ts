import { Node } from '../../three-types';
import { Vector3 } from 'three/src/math/Vector3.js';
export { Vector3 } from 'three/src/math/Vector3.js';
declare module '../../lib/3/three' {
    interface Three {
        Vector3: typeof Vector3;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vector3: Vector3Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        vector3: string[];
        vector3Like: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        vector3: string[];
        vector3Like: string[];
    }
}
export type Vector3Props = Node<Vector3, typeof Vector3, {
    x?: number;
    y?: number;
    z?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        vector3: {
            x?: number;
            y?: number;
            z?: number;
        };
    }
}
//# sourceMappingURL=Vector3.d.ts.map