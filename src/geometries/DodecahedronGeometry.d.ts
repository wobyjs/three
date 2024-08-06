import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { DodecahedronGeometry } from 'three/src/geometries/DodecahedronGeometry.js';
export { DodecahedronGeometry } from 'three/src/geometries/DodecahedronGeometry.js';
import './PolyhedronGeometry';
declare module '../../lib/3/three' {
    interface Three {
        DodecahedronGeometry: typeof DodecahedronGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dodecahedronGeometry: DodecahedronGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        dodecahedronGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        dodecahedronGeometry: string[];
    }
}
export type DodecahedronGeometryProps = BufferGeometryNode<DodecahedronGeometry, typeof DodecahedronGeometry, {
    radius?: number;
    detail?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        dodecahedronGeometry: {
            radius?: number;
            detail?: number;
        };
    }
}
//# sourceMappingURL=DodecahedronGeometry.d.ts.map