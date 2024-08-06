import { Node } from '../../three-types';
import { Vector2 } from 'three/src/math/Vector2.js';
export { Vector2 } from 'three/src/math/Vector2.js';
declare module '../../lib/3/three' {
    interface Three {
        Vector2: typeof Vector2;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vector2: Vector2Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        vector2: string[];
        vector2Like: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        vector2: string[];
        vector2Like: string[];
    }
}
export type Vector2Props = Node<Vector2, typeof Vector2, {
    x?: number;
    y?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        vector2: {
            x?: number;
            y?: number;
        };
    }
}
//# sourceMappingURL=Vector2.d.ts.map