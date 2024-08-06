import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry.js';
export { PolyhedronGeometry } from 'three/src/geometries/PolyhedronGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        PolyhedronGeometry: typeof PolyhedronGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            polyhedronGeometry: PolyhedronGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        polyhedronGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        polyhedronGeometry: string[];
    }
}
export type PolyhedronGeometryProps = BufferGeometryNode<PolyhedronGeometry, typeof PolyhedronGeometry, {
    vertices?: number[];
    indices?: number[];
    radius?: number;
    detail?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        polyhedronGeometry: {
            vertices?: number[];
            indices?: number[];
            radius?: number;
            detail?: number;
        };
    }
}
//# sourceMappingURL=PolyhedronGeometry.d.ts.map