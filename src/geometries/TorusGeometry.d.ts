import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { TorusGeometry } from 'three/src/geometries/TorusGeometry.js';
export { TorusGeometry } from 'three/src/geometries/TorusGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        TorusGeometry: typeof TorusGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            torusGeometry: TorusGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        torusGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        torusGeometry: string[];
    }
}
export type TorusGeometryProps = BufferGeometryNode<TorusGeometry, typeof TorusGeometry, {
    radius?: number;
    tube?: number;
    radialSegments?: number;
    tubularSegments?: number;
    arc?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        torusGeometry: {
            radius?: number;
            tube?: number;
            radialSegments?: number;
            tubularSegments?: number;
            arc?: number;
        };
    }
}
//# sourceMappingURL=TorusGeometry.d.ts.map