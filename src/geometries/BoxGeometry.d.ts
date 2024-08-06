import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { BoxGeometry } from 'three/src/geometries/BoxGeometry.js';
export { BoxGeometry } from 'three/src/geometries/BoxGeometry.js';
import '../core/BufferGeometry';
declare module '../../lib/3/three' {
    interface Three {
        BoxGeometry: typeof BoxGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            boxGeometry: BoxGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        boxGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        boxGeometry: string[];
    }
}
export type BoxGeometryProps = BufferGeometryNode<BoxGeometry, typeof BoxGeometry, {
    width?: number;
    height?: number;
    depth?: number;
    widthSegments?: number;
    heightSegments?: number;
    depthSegments?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        boxGeometry: {
            width?: number;
            height?: number;
            depth?: number;
            widthSegments?: number;
            heightSegments?: number;
            depthSegments?: number;
        };
    }
}
//# sourceMappingURL=BoxGeometry.d.ts.map