import { Vector3, Vector2 } from '../../three-types';
import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
export * from 'three/src/core/BufferGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        BufferGeometry: typeof BufferGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferGeometry: BufferGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        bufferGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        bufferGeometry: string[];
    }
}
export type BufferGeometryProps = BufferGeometryNode<BufferGeometry & {
    points: Vector3[] | Vector2[];
}, typeof BufferGeometry & {
    points: Vector3[] | Vector2[];
}, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        bufferGeometry: Partial<{}>;
    }
}
//# sourceMappingURL=BufferGeometry.d.ts.map