import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { OctahedronGeometry } from 'three/src/geometries/OctahedronGeometry.js';
export { OctahedronGeometry } from 'three/src/geometries/OctahedronGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        OctahedronGeometry: typeof OctahedronGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            octahedronGeometry: OctahedronGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        octahedronGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        octahedronGeometry: string[];
    }
}
export type OctahedronGeometryProps = BufferGeometryNode<OctahedronGeometry, typeof OctahedronGeometry, {
    radius?: number;
    detail?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        octahedronGeometry: {
            radius?: number;
            detail?: number;
        };
    }
}
//# sourceMappingURL=OctahedronGeometry.d.ts.map