import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { CapsuleGeometry } from 'three/src/geometries/CapsuleGeometry.js';
export { CapsuleGeometry } from 'three/src/geometries/CapsuleGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        CapsuleGeometry: typeof CapsuleGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            capsuleGeometry: CapsuleGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        capsuleGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        capsuleGeometry: string[];
    }
}
export type CapsuleGeometryProps = BufferGeometryNode<CapsuleGeometry, typeof CapsuleGeometry, {
    radius?: number;
    length?: number;
    capSegments?: number;
    radialSegments?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        capsuleGeometry: {
            radius?: number;
            length?: number;
            capSegments?: number;
            radialSegments?: number;
        };
    }
}
//# sourceMappingURL=CapsuleGeometry.d.ts.map