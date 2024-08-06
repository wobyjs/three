import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { TorusKnotGeometry } from 'three/src/geometries/TorusKnotGeometry.js';
export { TorusKnotGeometry } from 'three/src/geometries/TorusKnotGeometry.js';
import '../core/BufferGeometry';
import '../geometries/TubeGeometry';
declare module '../../lib/3/three' {
    interface Three {
        TorusKnotGeometry: typeof TorusKnotGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            torusKnotGeometry: TorusKnotGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        torusKnotGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        torusKnotGeometry: string[];
    }
}
export type TorusKnotGeometryProps = BufferGeometryNode<TorusKnotGeometry, typeof TorusKnotGeometry, {
    radius?: number;
    tube?: number;
    tubularSegments?: number;
    radialSegments?: number;
    p?: number;
    q?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        torusKnotGeometry: {
            radius?: number;
            tube?: number;
            tubularSegments?: number;
            radialSegments?: number;
            p?: number;
            q?: number;
        };
    }
}
//# sourceMappingURL=TorusKnotGeometry.d.ts.map