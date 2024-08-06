import { Node, Vector2 } from '../../three-types';
import { Box2 } from 'three/src/math/Box2.js';
export { Box2 } from 'three/src/math/Box2.js';
declare module '../../lib/3/three' {
    interface Three {
        Box2: typeof Box2;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            box2: Box2Props;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        box2: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        box2: string[];
    }
}
export type Box2Props = Node<Box2, typeof Box2, {
    min?: Vector2;
    max?: Vector2;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        box2: {
            min?: Vector2;
            max?: Vector2;
        };
    }
}
//# sourceMappingURL=Box2.d.ts.map