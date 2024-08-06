import { Node, Vector3 } from '../../three-types';
import { Triangle } from 'three/src/math/Triangle.js';
export { Triangle } from 'three/src/math/Triangle.js';
declare module '../../lib/3/three' {
    interface Three {
        Triangle: typeof Triangle;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            triangle: TriangleProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        triangle: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        triangle: string[];
    }
}
export type TriangleProps = Node<Triangle, typeof Triangle, {
    a?: Vector3;
    b?: Vector3;
    c?: Vector3;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        triangle: {
            a?: Vector3;
            b?: Vector3;
            c?: Vector3;
        };
    }
}
//# sourceMappingURL=Triangle.d.ts.map