import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { ConeGeometry } from 'three/src/geometries/ConeGeometry.js';
export { ConeGeometry } from 'three/src/geometries/ConeGeometry.js';
import './CylinderGeometry';
declare module '../../lib/3/three' {
    interface Three {
        ConeGeometry: typeof ConeGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            coneGeometry: ConeGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        coneGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        coneGeometry: string[];
    }
}
export type ConeGeometryProps = BufferGeometryNode<ConeGeometry, typeof ConeGeometry, {
    radius?: number;
    height?: number;
    radialSegments?: number;
    heightSegments?: number;
    openEnded?: boolean;
    thetaStart?: number;
    thetaLength?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        coneGeometry: {
            radius?: number;
            height?: number;
            radialSegments?: number;
            heightSegments?: number;
            openEnded?: boolean;
            thetaStart?: number;
            thetaLength?: number;
        };
    }
}
//# sourceMappingURL=ConeGeometry.d.ts.map