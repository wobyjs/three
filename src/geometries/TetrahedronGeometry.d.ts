import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { TetrahedronGeometry } from 'three/src/geometries/TetrahedronGeometry.js';
export { TetrahedronGeometry } from 'three/src/geometries/TetrahedronGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        TetrahedronGeometry: typeof TetrahedronGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tetrahedronGeometry: TetrahedronGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        tetrahedronGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        tetrahedronGeometry: string[];
    }
}
export type TetrahedronGeometryProps = BufferGeometryNode<TetrahedronGeometry, typeof TetrahedronGeometry, {
    radius?: number;
    detail?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        tetrahedronGeometry: {
            radius?: number;
            detail?: number;
        };
    }
}
//# sourceMappingURL=TetrahedronGeometry.d.ts.map