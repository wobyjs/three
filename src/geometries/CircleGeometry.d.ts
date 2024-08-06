import { BufferGeometryNode } from '../core/BufferGeometryNode';
import { CircleGeometry } from 'three/src/geometries/CircleGeometry.js';
export { CircleGeometry } from 'three/src/geometries/CircleGeometry.js';
declare module '../../lib/3/three' {
    interface Three {
        CircleGeometry: typeof CircleGeometry;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            circleGeometry: CircleGeometryProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        circleGeometry: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        circleGeometry: string[];
    }
}
export type CircleGeometryProps = BufferGeometryNode<CircleGeometry, typeof CircleGeometry, {
    radius?: number;
    segments?: number;
    thetaStart?: number;
    thetaLength?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        circleGeometry: {
            radius?: number;
            segments?: number;
            thetaStart?: number;
            thetaLength?: number;
        };
    }
}
//# sourceMappingURL=CircleGeometry.d.ts.map