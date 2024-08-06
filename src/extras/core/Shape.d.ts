import { Object3DNode, Vector2 } from '../../../three-types';
import { Shape } from 'three/src/extras/core/Shape.js';
export { Shape } from 'three/src/extras/core/Shape.js';
import './Path';
declare module '../../../lib/3/three' {
    interface Three {
        Shape: typeof Shape;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shape: ShapeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        shape: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        shape: string[];
    }
}
export type ShapeProps = Object3DNode<Shape, typeof Shape, {
    points?: Vector2[];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        shape: {
            points?: Vector2[];
        };
    }
}
//# sourceMappingURL=Shape.d.ts.map