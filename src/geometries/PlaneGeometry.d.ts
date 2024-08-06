import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { PlaneGeometry } from 'three/src/geometries/PlaneGeometry.js';
export { PlaneGeometry } from 'three/src/geometries/PlaneGeometry.js';
import '../core/BufferGeometry';
import '../../examples/jsm/geometries/ParametricGeometry';
declare module '../../lib/3/three' {
    interface Three {
        PlaneGeometry: typeof PlaneGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            planeGeometry: PlaneGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        planeGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        planeGeometry: string[];
    }
}
export type PlaneGeometryProps = BufferGeometryNode<PlaneGeometry, typeof PlaneGeometry, {
    width?: number;
    height?: number;
    widthSegments?: number;
    heightSegments?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        planeGeometry: {
            width?: number;
            height?: number;
            widthSegments?: number;
            heightSegments?: number;
        };
    }
}
//# sourceMappingURL=PlaneGeometry.d.ts.map