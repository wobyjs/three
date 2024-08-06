import { Shape } from 'three/src/extras/core/Shape.js';
import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { ShapeGeometry } from 'three/src/geometries/ShapeGeometry.js';
export { ShapeGeometry } from 'three/src/geometries/ShapeGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        ShapeGeometry: typeof ShapeGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shapeGeometry: ShapeGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        shapeGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        shapeGeometry: string[];
    }
}
export type ShapeGeometryProps = BufferGeometryNode<ShapeGeometry, typeof ShapeGeometry, {
    shapes?: Shape | Shape[];
    curveSegments?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        shapeGeometry: {
            shapes?: Shape | Shape[];
            curveSegments?: number;
        };
    }
}
//# sourceMappingURL=ShapeGeometry.d.ts.map