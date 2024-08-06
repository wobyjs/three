import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { RingGeometry } from 'three/src/geometries/RingGeometry.js';
export { RingGeometry } from 'three/src/geometries/RingGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        RingGeometry: typeof RingGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ringGeometry: RingGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        ringGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        ringGeometry: string[];
    }
}
export type RingGeometryProps = BufferGeometryNode<RingGeometry, typeof RingGeometry, {
    innerRadius?: number;
    outerRadius?: number;
    thetaSegments?: number;
    phiSegments?: number;
    thetaStart?: number;
    thetaLength?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        ringGeometry: {
            innerRadius?: number;
            outerRadius?: number;
            thetaSegments?: number;
            phiSegments?: number;
            thetaStart?: number;
            thetaLength?: number;
        };
    }
}
//# sourceMappingURL=RingGeometry.d.ts.map