import { Vector4 } from 'three/src/math/Vector4.js';
import { Node } from '../../three-types';
export { Vector4 } from 'three/src/math/Vector4.js';
declare module '../../lib/3/three' {
    interface Three {
        Vector4: typeof Vector4;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vector4: Vector4Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        vector4: string[];
        vector4Like: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        vector4: string[];
        vector4Like: string[];
    }
}
export type Vector4Props = Node<Vector4, typeof Vector4, {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        vector4: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
    }
}
//# sourceMappingURL=Vector4.d.ts.map