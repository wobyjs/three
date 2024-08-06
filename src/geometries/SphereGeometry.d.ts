import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { SphereGeometry } from 'three/src/geometries/SphereGeometry.js';
export { SphereGeometry } from 'three/src/geometries/SphereGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        SphereGeometry: typeof SphereGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sphereGeometry: SphereGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        sphereGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        sphereGeometry: string[];
    }
}
export type SphereGeometryProps = BufferGeometryNode<SphereGeometry, typeof SphereGeometry, {
    radius?: number;
    widthSegments?: number;
    heightSegments?: number;
    phiStart?: number;
    phiLength?: number;
    thetaStart?: number;
    thetaLength?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        sphereGeometry: {
            radius?: number;
            widthSegments?: number;
            heightSegments?: number;
            phiStart?: number;
            phiLength?: number;
            thetaStart?: number;
            thetaLength?: number;
        };
    }
}
//# sourceMappingURL=SphereGeometry.d.ts.map