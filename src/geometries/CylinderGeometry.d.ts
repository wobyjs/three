import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { CylinderGeometry } from 'three/src/geometries/CylinderGeometry.js';
export { CylinderGeometry } from 'three/src/geometries/CylinderGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        CylinderGeometry: typeof CylinderGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cylinderGeometry: CylinderGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        cylinderGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        cylinderGeometry: string[];
    }
}
export type CylinderGeometryProps = BufferGeometryNode<CylinderGeometry, typeof CylinderGeometry, {
    radiusTop?: number;
    radiusBottom?: number;
    height?: number;
    radialSegments?: number;
    heightSegments?: number;
    openEnded?: boolean;
    thetaStart?: number;
    thetaLength?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        cylinderGeometry: {
            radiusTop?: number;
            radiusBottom?: number;
            height?: number;
            radialSegments?: number;
            heightSegments?: number;
            openEnded?: boolean;
            thetaStart?: number;
            thetaLength?: number;
        };
    }
}
//# sourceMappingURL=CylinderGeometry.d.ts.map